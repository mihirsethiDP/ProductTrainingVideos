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

async function pickup(id) {
  const { data: job, error } = await db.from('generation_jobs').select('*').eq('id', id).single();
  if (error || !job) throw error || new Error('job not found');
  const dir = path.join(WORK, id);
  fs.mkdirSync(dir, { recursive: true });

  const parts = job.parts ?? 1;
  let buf;
  if (parts <= 1) {
    const dl = await db.storage.from('uploads').download(job.storage_path);
    if (dl.error) throw dl.error;
    buf = Buffer.from(await dl.data.arrayBuffer());
  } else {
    // reassemble the byte-chunks in order — reproduces the original file exactly
    const chunks = [];
    for (let i = 0; i < parts; i++) {
      const dl = await db.storage.from('uploads').download(`${job.storage_path}.part${i}`);
      if (dl.error) throw new Error(`part ${i}: ${dl.error.message}`);
      chunks.push(Buffer.from(await dl.data.arrayBuffer()));
    }
    buf = Buffer.concat(chunks);
    console.log(`  reassembled ${parts} chunks → ${(buf.length / 1048576).toFixed(1)} MB`);
  }
  const ext = path.extname(job.storage_path) || '.bin';
  const src = path.join(dir, `source${ext}`);
  fs.writeFileSync(src, buf);

  let frames = null;
  if (/\.(mp4|mov|webm|mkv|avi)$/i.test(ext)) {
    frames = path.join(dir, 'frames');
    fs.mkdirSync(frames, { recursive: true });
    execFileSync(ffmpegPath, ['-y', '-i', src, '-vf', 'fps=1/2,scale=900:-1', path.join(frames, 'f%03d.jpg')], { stdio: 'ignore' });
  }
  await db.from('generation_jobs').update({ status: 'processing', updated_at: new Date().toISOString() }).eq('id', id);

  console.log(`Picked up "${job.title}" (${job.kind}).`);
  console.log(`  source: ${src}`);
  if (frames) console.log(`  frames: ${frames}  (${fs.readdirSync(frames).length} images — Read these to see the recording)`);
  console.log(`  notes:  ${job.notes ?? '—'}`);
  console.log(`\nAuthor the lesson, then: node scripts/studio.mjs done ${id} <routePath>`);
}

async function finish(id, routePath) {
  if (!routePath) throw new Error('pass the route path, e.g. internal/module-demos/demo-acme');
  await db.from('generation_jobs')
    .update({ status: 'done', result_lesson_id: routePath, updated_at: new Date().toISOString() })
    .eq('id', id);
  console.log(`Marked ${id} done → ${routePath}`);
}

async function fail(id, reason) {
  await db.from('generation_jobs')
    .update({ status: 'failed', notes: reason ?? 'generation failed', updated_at: new Date().toISOString() })
    .eq('id', id);
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
