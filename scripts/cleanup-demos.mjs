/**
 * Content Studio — purge personalized demos past their retention window.
 *
 * Demos are client-shareable and short-lived: ~30 days after the upload was
 * created they're removed everywhere. This script is run UNATTENDED by the
 * hourly task and PUSHES to master, so it is deliberately conservative:
 *
 *   ORDER MATTERS. Repo work happens first and must fully succeed before any
 *   irreversible cloud change:
 *     1) edit repo (de-register lesson + delete lesson file / audio / shots)
 *     2) tsc gate — on failure, `git checkout` the touched paths and abort
 *        (nothing remote touched, no DB rows changed → next run retries clean)
 *     3) commit ONLY this script's paths (pathspec commit ignores any other
 *        staged work) and push (fetch+rebase, one retry)
 *     4) ONLY after the push lands: purge storage (uploads + MP4) and null the
 *        job rows. A failure here leaves the row intact so the next run retries.
 *
 * Grace: we purge at created_at + 31 days (not 30) so the in-app "expired"
 * screen (end of the stamped local day, ~day 30) always shows BEFORE the demo
 * is actually removed — the client never hits a "missing" screen for a demo
 * that should read "expired". User-facing promise stays "30 days".
 *
 * Run from the repo root:  node scripts/cleanup-demos.mjs [--dry-run]
 */
import { createClient } from '@supabase/supabase-js';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const SUPABASE_URL = 'https://zilwylqyhbejgmbizywh.supabase.co';
const PURGE_AFTER_DAYS = 31; // 1-day grace past the 30-day in-app expiry
const DRY = process.argv.includes('--dry-run');

const KEY_FILE = path.resolve('scripts/service.local');
const SERVICE_ROLE =
  process.env.SUPABASE_SERVICE_ROLE ||
  (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, 'utf8').trim() : '');
if (!SERVICE_ROLE) {
  console.error('Missing service-role key. Set $env:SUPABASE_SERVICE_ROLE or create scripts/service.local');
  process.exit(1);
}
const db = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' }).trim();
let hadError = false;

/** De-register a demo lesson from catalog.ts. Returns false (no-op) if its
 *  import isn't found, so the caller can leave the lesson file in place rather
 *  than orphaning an import and breaking the build. */
function deregisterFromCatalog(lessonId) {
  const file = path.resolve('src/data/catalog.ts');
  let c = fs.readFileSync(file, 'utf8');
  const imp = c.match(new RegExp(`import (\\w+) from '\\./lessons/module-demos/${lessonId}';\\r?\\n`));
  if (!imp) return false;
  const varName = imp[1];
  c = c.replace(imp[0], '');
  c = c.replace(new RegExp(`\\s*\\[${varName}\\.id\\]: ${varName},`), '');
  for (const pat of [`{ id: '${lessonId}' }, `, `, { id: '${lessonId}' }`, `{ id: '${lessonId}' }`]) {
    if (c.includes(pat)) { c = c.replace(pat, ''); break; }
  }
  if (!DRY) fs.writeFileSync(file, c);
  console.log(`  de-registered ${varName} from catalog.ts`);
  return true;
}

/** Remove a job's uploaded context files (uploads bucket). Returns true on full
 *  success. Optionally also remove the rendered MP4(s) from demo-media. */
async function purgeStorage(job, lessonId, { includeMedia }) {
  let ok = true;
  const paths = [];
  const files = Array.isArray(job.files) ? job.files : [];
  if (files.length > 0) {
    for (const f of files) {
      if ((f.parts ?? 1) <= 1) paths.push(`${job.storage_path}/${f.name}`);
      else for (let i = 0; i < f.parts; i++) paths.push(`${job.storage_path}/${f.name}.part${i}`);
    }
  } else if (job.storage_path) {
    if ((job.parts ?? 1) <= 1) paths.push(job.storage_path);
    else for (let i = 0; i < job.parts; i++) paths.push(`${job.storage_path}.part${i}`);
  }
  if (paths.length && !DRY) {
    const { error } = await db.storage.from('uploads').remove(paths);
    if (error) { console.error(`  storage(uploads) FAILED: ${error.message}`); ok = false; }
    else console.log(`  storage: removed ${paths.length} upload object(s)`);
  } else if (paths.length) {
    console.log(`  storage: would remove ${paths.length} upload object(s)`);
  }
  if (includeMedia) {
    const { data: media, error: listErr } = await db.storage.from('demo-media').list('', { limit: 1000 });
    if (listErr) { console.error(`  storage(demo-media list) FAILED: ${listErr.message}`); ok = false; }
    else {
      const vids = (media ?? []).filter((f) => f.name === `${lessonId}.mp4` || f.name.startsWith(`${lessonId}.`)).map((f) => f.name);
      if (vids.length && !DRY) {
        const { error } = await db.storage.from('demo-media').remove(vids);
        if (error) { console.error(`  storage(demo-media) FAILED: ${error.message}`); ok = false; }
        else console.log(`  storage: removed video(s): ${vids.join(', ')}`);
      } else if (vids.length) {
        console.log(`  storage: would remove video(s): ${vids.join(', ')}`);
      }
    }
  }
  return ok;
}

async function markRow(id, note) {
  if (DRY) return true;
  const { error } = await db.from('generation_jobs').update({
    result_lesson_id: null, notes: note, updated_at: new Date().toISOString(),
  }).eq('id', id);
  if (error) { console.error(`  row update FAILED: ${error.message}`); return false; }
  return true;
}

// ── select expired demos + demos still owned by a fresh rework ──
const cutoff = new Date(Date.now() - PURGE_AFTER_DAYS * 24 * 60 * 60 * 1000).toISOString();
const { data: jobs, error } = await db
  .from('generation_jobs')
  .select('id,kind,title,storage_path,parts,files,status,result_lesson_id,created_at')
  .eq('kind', 'demo').eq('status', 'done').not('result_lesson_id', 'is', null)
  .lt('created_at', cutoff);
if (error) { console.error('query failed:', error.message); process.exit(1); }
if (!jobs?.length) { console.log(`No demos older than ${PURGE_AFTER_DAYS} days. Nothing to do.`); process.exit(0); }

const { data: freshJobs } = await db
  .from('generation_jobs').select('result_lesson_id')
  .eq('kind', 'demo').eq('status', 'done').not('result_lesson_id', 'is', null)
  .gte('created_at', cutoff);
const stillOwned = new Set((freshJobs ?? []).map((j) => j.result_lesson_id));

// ── classify (no mutations yet) ──
const fullPurge = []; // { job, lessonId } — remove lesson + all storage + row
const supersede = []; // { job, lessonId } — newer rework owns the lesson; retire this job only
for (const job of jobs) {
  const route = job.result_lesson_id;
  if (!/\/module-demos\/[a-z0-9-]+$/.test(route)) {
    console.log(`SKIP "${job.title}" — result_lesson_id "${route}" is not a module-demos route`);
    continue;
  }
  const lessonId = route.split('/').pop();
  (stillOwned.has(route) ? supersede : fullPurge).push({ job, lessonId });
}
console.log(`${fullPurge.length} to purge, ${supersede.length} superseded${DRY ? ' — DRY RUN' : ''}`);

// ── PHASE 1: repo edits for full-purge lessons (touch ONLY these paths) ──
const touched = new Set(['src/data/catalog.ts']);
const repoRemoved = [];
for (const { lessonId } of fullPurge) {
  const lessonFile = path.resolve(`src/data/lessons/module-demos/${lessonId}.ts`);
  if (!fs.existsSync(lessonFile)) { console.log(`\n• ${lessonId}: repo already clean`); continue; }
  console.log(`\n• ${lessonId}: removing from repo`);
  if (!deregisterFromCatalog(lessonId)) { console.error(`  could not de-register ${lessonId} — leaving repo untouched`); hadError = true; continue; }
  if (!DRY) fs.rmSync(lessonFile);
  touched.add(`src/data/lessons/module-demos/${lessonId}.ts`);
  for (const d of [`public/audio/${lessonId}`, `public/screenshots/${lessonId}`]) {
    if (fs.existsSync(path.resolve(d))) { if (!DRY) fs.rmSync(path.resolve(d), { recursive: true }); touched.add(d); console.log(`  rm -r ${d}`); }
  }
  repoRemoved.push(lessonId);
}

// ── PHASE 2: gate + commit + push (repo only) BEFORE any cloud mutation ──
let repoShipped = repoRemoved.length === 0; // nothing to ship → treat as already-shipped
if (!DRY && repoRemoved.length > 0) {
  console.log('\ntype-checking after removal…');
  try {
    execFileSync(process.execPath, [path.resolve('node_modules/typescript/bin/tsc'), '--noEmit'], { stdio: 'inherit' });
  } catch {
    console.error('tsc FAILED — reverting repo edits, no cloud changes made, will retry next run.');
    try { git('checkout', '--', ...touched); } catch { /* best effort */ }
    process.exit(1);
  }
  try {
    git('add', '--', ...touched);
    git('commit', '-m', `Purge expired demos (retention): ${repoRemoved.join(', ')}\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>`, '--', ...touched);
    try { git('fetch', 'origin', 'master'); git('rebase', 'origin/master'); } catch { /* fall through to push */ }
    let pushed = false;
    for (let i = 0; i < 2 && !pushed; i++) {
      try { git('push', 'origin', 'master'); pushed = true; } catch (e) { console.error(`  push attempt ${i + 1} failed: ${e.message}`); }
    }
    if (!pushed) { console.error('push FAILED — repo committed but not pushed; NOT touching storage/rows (retry next run).'); process.exit(1); }
    repoShipped = true;
    console.log('committed + pushed — site will redeploy without the expired demos.');
  } catch (e) {
    console.error('commit/push FAILED — reverting, no cloud changes made.', e.message);
    try { git('checkout', '--', ...touched); } catch { /* best effort */ }
    process.exit(1);
  }
}

// ── PHASE 3: cloud purge — only now that the repo change is live ──
if (repoShipped || DRY) {
  for (const { job, lessonId } of fullPurge) {
    console.log(`\ncloud purge: ${lessonId}`);
    const ok = await purgeStorage(job, lessonId, { includeMedia: true });
    if (!ok) { hadError = true; console.error('  leaving job row intact — will retry next run'); continue; }
    if (!(await markRow(job.id, `Expired — demo removed after 30 days on ${new Date().toISOString().slice(0, 10)}`))) hadError = true;
  }
}
// superseded old jobs: only their own uploads + retire the row (keep the shared lesson + MP4)
for (const { job, lessonId } of supersede) {
  console.log(`\nsuperseded: ${lessonId} (a newer rework owns the lesson; cleaning this job's uploads only)`);
  const ok = await purgeStorage(job, lessonId, { includeMedia: false });
  if (!ok) { hadError = true; continue; }
  if (!(await markRow(job.id, `Superseded by a newer rework — old job retired on ${new Date().toISOString().slice(0, 10)}`))) hadError = true;
}

console.log(`\ndone${DRY ? ' (dry run)' : ''}.`);
process.exit(hadError ? 1 : 0);
