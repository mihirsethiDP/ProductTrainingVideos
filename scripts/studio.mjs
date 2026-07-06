/**
 * Content Studio — generation glue for the Claude Code agent.
 *
 * Path B is hybrid: CSMs/admins upload in the app; THIS script lets the
 * agent pull a ready job, fetch its recording, and update the job's lifecycle.
 * The agent does the authoring in between (watch frames → write the lesson →
 * register + generate audio → commit/deploy), exactly like the M1 dashboard
 * rewrite. See scripts/STUDIO.md for the full playbook.
 *
 * Needs a Supabase SERVICE ROLE key (bypasses RLS) — never commit it:
 *   $env:SUPABASE_SERVICE_ROLE = "..."   (PowerShell)   then run a command.
 * Or drop it in scripts/service.local (matches .gitignore's *.local).
 *
 * Commands:
 *   node scripts/studio.mjs list                 # jobs ready to generate
 *   node scripts/studio.mjs pickup <jobId>       # download + extract frames, mark processing
 *   node scripts/studio.mjs done   <jobId> <routePath>   # mark ready, e.g. internal/module-demos/demo-acme
 *   node scripts/studio.mjs fail   <jobId> "<reason>"
 */
import { createClient } from '@supabase/supabase-js';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const SUPABASE_URL = 'https://zilwylqyhbejgmbizywh.supabase.co';
const KEY_FILE = path.resolve('scripts/service.local');
const SERVICE_ROLE =
  process.env.SUPABASE_SERVICE_ROLE ||
  (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, 'utf8').trim() : '');

if (!SERVICE_ROLE) {
  console.error('Missing service-role key. Set $env:SUPABASE_SERVICE_ROLE or create scripts/service.local');
  process.exit(1);
}

const db = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });
const WORK = path.resolve('.studio-work');
const [cmd, arg1, arg2] = process.argv.slice(2);

async function list() {
  const { data, error } = await db
    .from('generation_jobs')
    .select('id,kind,title,storage_path,status,approval_status,notes,created_at')
    .eq('status', 'queued')
    .order('created_at', { ascending: true });
  if (error) throw error;
  const ready = (data ?? []).filter(
    (j) => (j.kind === 'demo' && j.approval_status === 'not_required') ||
      (j.kind === 'content' && j.approval_status === 'approved'),
  );
  if (!ready.length) return console.log('No jobs ready to generate.');
  for (const j of ready) {
    console.log(`\n• ${j.id}\n  ${j.kind.toUpperCase()} — ${j.title}\n  file: ${j.storage_path}${j.notes ? `\n  notes: ${j.notes}` : ''}`);
  }
  console.log(`\n${ready.length} ready. Next: node scripts/studio.mjs pickup <jobId>`);
}

/** Download one storage object, reassembling byte-chunks when parts > 1. */
async function fetchObject(objectPath, parts) {
  if ((parts ?? 1) <= 1) {
    const dl = await db.storage.from('uploads').download(objectPath);
    if (dl.error) throw new Error(`${objectPath}: ${dl.error.message}`);
    return Buffer.from(await dl.data.arrayBuffer());
  }
  const chunks = [];
  for (let i = 0; i < parts; i++) {
    const dl = await db.storage.from('uploads').download(`${objectPath}.part${i}`);
    if (dl.error) throw new Error(`${objectPath}.part${i}: ${dl.error.message}`);
    chunks.push(Buffer.from(await dl.data.arrayBuffer()));
  }
  return Buffer.concat(chunks);
}

/** For videos, extract 1 frame / 2s so the agent can "watch" the recording. */
function maybeExtractFrames(dir, filePath) {
  if (!/\.(mp4|mov|webm|mkv|avi)$/i.test(filePath)) return null;
  const frames = path.join(dir, `frames-${path.basename(filePath).replace(/\.[^.]+$/, '')}`);
  fs.mkdirSync(frames, { recursive: true });
  execFileSync(ffmpegPath, ['-y', '-i', filePath, '-vf', 'fps=1/2,scale=900:-1', path.join(frames, 'f%03d.jpg')], { stdio: 'ignore' });
  return frames;
}

async function pickup(id) {
  const { data: job, error } = await db.from('generation_jobs').select('*').eq('id', id).single();
  if (error || !job) throw error || new Error('job not found');
  const dir = path.join(WORK, id);
  fs.mkdirSync(dir, { recursive: true });

  // multi-file jobs carry a manifest; legacy jobs are a single object at storage_path
  const files = Array.isArray(job.files) && job.files.length > 0
    ? job.files.map((f) => ({ object: `${job.storage_path}/${f.name}`, local: f.name, parts: f.parts }))
    : [{ object: job.storage_path, local: `source${path.extname(job.storage_path) || '.bin'}`, parts: job.parts ?? 1 }];

  console.log(`Picked up "${job.title}" (${job.kind}) — ${files.length} file(s).`);
  for (const f of files) {
    const buf = await fetchObject(f.object, f.parts);
    const local = path.join(dir, f.local);
    fs.writeFileSync(local, buf);
    const frames = maybeExtractFrames(dir, local);
    console.log(`  • ${f.local}  (${(buf.length / 1048576).toFixed(1)} MB)${frames ? `\n      frames: ${frames} (${fs.readdirSync(frames).length} images — Read these to watch it)` : ''}`);
  }
  await updateJob(id, { status: 'processing' });

  console.log(`  notes:  ${job.notes ?? '—'}`);
  console.log('\nRead every file (frames for videos; PDFs/docs/text directly), author the');
  console.log(`lesson, then: node scripts/studio.mjs done ${id} <routePath>`);
}

/** Update a job and VERIFY the write landed — a dropped connection must not
 *  print success (that once left a finished job stuck on "processing"). */
async function updateJob(id, patch) {
  const { error } = await db.from('generation_jobs').update({ ...patch, updated_at: new Date().toISOString() }).eq('id', id);
  if (error) throw new Error(`status update failed: ${error.message}`);
  const { data, error: e2 } = await db.from('generation_jobs').select('status').eq('id', id).single();
  if (e2 || data?.status !== patch.status) throw new Error(`status update did not stick (now: ${data?.status ?? 'unknown'}) — re-run this command`);
}

async function finish(id, routePath) {
  if (!routePath) throw new Error('pass the route path, e.g. internal/module-demos/demo-acme');
  await updateJob(id, { status: 'done', result_lesson_id: routePath });
  console.log(`Marked ${id} done → ${routePath}`);
}

async function fail(id, reason) {
  await updateJob(id, { status: 'failed', notes: reason ?? 'generation failed' });
  console.log(`Marked ${id} failed.`);
}

const run = { list, pickup: () => pickup(arg1), done: () => finish(arg1, arg2), fail: () => fail(arg1, arg2) }[cmd];
if (!run) {
  console.error('Usage: studio.mjs list | pickup <id> | done <id> <routePath> | fail <id> "<reason>"');
  process.exit(1);
}
run().catch((e) => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
