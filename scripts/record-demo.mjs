/**
 * Content Studio — render a demo lesson to a downloadable MP4.
 *
 * Plays the lesson headless in Chrome (via the built site + `vite preview`),
 * captures the stage as a screencast, reconstructs the audio timeline from the
 * narration clips that actually played, muxes both with ffmpeg, and uploads the
 * result to the PUBLIC `demo-media` storage bucket — that's what the app's
 * "Download video" button (and the Studio "⬇ Video" link) points at:
 *   <SUPABASE_URL>/storage/v1/object/public/demo-media/<lessonId>.mp4
 *
 * Usage:
 *   node scripts/record-demo.mjs <lessonId> [--lang=en] [--gender=f]
 *                                [--no-upload] [--keep] [--rebuild]
 *
 * Needs: the service-role key (env SUPABASE_SERVICE_ROLE or scripts/service.local)
 * and a local Chrome/Edge (env CHROME_PATH overrides autodetection).
 * Default en/f uploads as <lessonId>.mp4 (the app's convention); other
 * lang/gender combos upload as <lessonId>.<lang>.<gender>.mp4.
 */
import { createClient } from '@supabase/supabase-js';
import ffmpegPath from 'ffmpeg-static';
import puppeteer from 'puppeteer-core';
import { execFileSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const SUPABASE_URL = 'https://zilwylqyhbejgmbizywh.supabase.co';
const BUCKET = 'demo-media';
const PORT = 4273;
const VIEW = { width: 1280, height: 720 };

// ---- args ----
const args = process.argv.slice(2);
const lessonId = args.find((a) => !a.startsWith('--'));
const flag = (n) => args.includes(`--${n}`);
const opt = (n, d) => (args.find((a) => a.startsWith(`--${n}=`)) ?? `--${n}=${d}`).split('=')[1];
const lang = opt('lang', 'en');
const gender = opt('gender', 'f');
if (!lessonId) {
  console.error('Usage: node scripts/record-demo.mjs <lessonId> [--lang=en] [--gender=f] [--no-upload] [--keep] [--rebuild]');
  process.exit(1);
}

const KEY_FILE = path.resolve('scripts/service.local');
const SERVICE_ROLE =
  process.env.SUPABASE_SERVICE_ROLE ||
  (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, 'utf8').trim() : '');
if (!SERVICE_ROLE && !flag('no-upload')) {
  console.error('Missing service-role key (needed to upload). Use --no-upload to skip.');
  process.exit(1);
}

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const CHROME = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
if (!CHROME) {
  console.error('No Chrome/Edge found — set CHROME_PATH.');
  process.exit(1);
}

const WORK = path.resolve('.studio-work', 'recordings', `${lessonId}.${lang}.${gender}`);
const FRAMES = path.join(WORK, 'frames');
fs.rmSync(WORK, { recursive: true, force: true });
fs.mkdirSync(FRAMES, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- 1. built site + preview server ----
if (flag('rebuild') || !fs.existsSync(path.resolve('dist/index.html'))) {
  console.log('building site (vite build)…');
  execFileSync(process.execPath, [path.resolve('node_modules/vite/bin/vite.js'), 'build'], { stdio: 'inherit' });
}
console.log(`starting preview server on :${PORT}…`);
const server = spawn(process.execPath, [path.resolve('node_modules/vite/bin/vite.js'), 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: process.cwd(),
  stdio: 'ignore',
});
const waitForServer = async () => {
  for (let i = 0; i < 60; i++) {
    const ok = await new Promise((resolve) => {
      const req = http.get({ host: 'localhost', port: PORT, path: '/' }, (res) => { res.resume(); resolve(res.statusCode === 200); });
      req.on('error', () => resolve(false));
      req.setTimeout(1000, () => { req.destroy(); resolve(false); });
    });
    if (ok) return;
    await sleep(500);
  }
  throw new Error('preview server did not start');
};

let browser;
const cleanup = () => {
  try { server.kill(); } catch { /* already dead */ }
};
process.on('exit', cleanup);

try {
  await waitForServer();

  // ---- 2. drive the lesson ----
  browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--autoplay-policy=no-user-gesture-required', '--no-sandbox', '--mute-audio'],
  });
  const page = await browser.newPage();
  await page.setViewport({ ...VIEW, deviceScaleFactor: 1 });

  // before ANY app code runs: pick the language, silence the tour, wipe saved
  // progress (so playback starts at step 1), and tag every real audio play so
  // we can rebuild the soundtrack offline with exact offsets
  await page.evaluateOnNewDocument((wantLang) => {
    try {
      localStorage.setItem('dp-tour-seen-v1', '1');
      localStorage.setItem('dp-training-v1', JSON.stringify({ lang: wantLang, lessons: {} }));
    } catch { /* ignore */ }
    // eslint-disable-next-line no-undef
    const orig = HTMLAudioElement.prototype.play;
    // eslint-disable-next-line no-undef
    HTMLAudioElement.prototype.play = function (...a) {
      try { if (this.src) console.log('__AUDIO_PLAY__', this.src, String(performance.now())); } catch { /* ignore */ }
      return orig.apply(this, a);
    };
    console.log('__CLOCK__', String(Date.now()), String(performance.now()));
  }, lang);

  // console taps: the audio schedule + the page's epoch↔perf clock mapping
  let clockEpoch = 0, clockPerf = 0;
  const audioEvents = []; // { src, perfMs }
  page.on('console', (msg) => {
    const parts = msg.text().split(' ');
    if (parts[0] === '__CLOCK__') { clockEpoch = Number(parts[1]); clockPerf = Number(parts[2]); }
    if (parts[0] === '__AUDIO_PLAY__') audioEvents.push({ src: parts[1], perfMs: Number(parts[2]) });
  });

  console.log(`opening ${lessonId} (${lang}/${gender})…`);
  await page.goto(`http://localhost:${PORT}/#/internal/module-demos/${lessonId}`, { waitUntil: 'networkidle2' });
  await page.waitForSelector('.stage-frame', { timeout: 30000 });

  // make the stage the whole 16:9 canvas — hide the page chrome around it
  await page.addStyleTag({
    content: `
      .header, .title-block, .progress-meta, .progress-rail, .narration,
      .player-controls, .next-lesson-banner, .footer, .demo-download { display: none !important; }
      .page { padding: 0 !important; }
      .container { max-width: 100% !important; padding: 0 !important; }
      .stage-wrap { margin: 0 !important; }
      .stage-frame { border-radius: 0 !important; min-height: 100vh !important; box-sizing: border-box !important; }
      ::-webkit-scrollbar { display: none; }
      html, body { overflow: hidden !important; }
    `,
  });
  await page.evaluate(() => window.scrollTo(0, 0));

  // pick the requested voice gender before playback starts
  if (gender === 'm') {
    await page.evaluate(() => {
      const btn = [...document.querySelectorAll('.sc-voice-btn')].find((b) => b.textContent.includes('♂'));
      if (btn) btn.click();
    });
    await sleep(300);
  }

  // ---- 3. screencast + play ----
  const cdp = await page.createCDPSession();
  const frames = []; // { file, ts } — ts is epoch seconds from CDP
  let frameNo = 0;
  cdp.on('Page.screencastFrame', async (ev) => {
    const file = path.join(FRAMES, `f${String(++frameNo).padStart(6, '0')}.jpg`);
    fs.writeFileSync(file, Buffer.from(ev.data, 'base64'));
    frames.push({ file, ts: ev.metadata.timestamp });
    try { await cdp.send('Page.screencastFrameAck', { sessionId: ev.sessionId }); } catch { /* stopping */ }
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 85, maxWidth: VIEW.width, maxHeight: VIEW.height });

  await page.click('.sc-play');
  // hide the player bar for a clean video (after the click that needs it)
  await page.addStyleTag({ content: '.stage-controls { display: none !important; }' });

  console.log('recording… (waits for the lesson-complete status)');
  const started = Date.now();
  const MAX_MS = 15 * 60 * 1000;
  for (;;) {
    await sleep(500);
    const done = await page.evaluate(() => {
      const s = document.querySelector('.sc-status');
      return s ? /🎉/.test(s.textContent || '') : false;
    });
    if (done) break;
    if (Date.now() - started > MAX_MS) throw new Error('recording timed out (15 min cap)');
  }
  await sleep(1500); // let the final frame breathe
  await cdp.send('Page.stopScreencast');
  await sleep(300);
  await browser.close();
  browser = null;
  server.kill();

  if (frames.length < 2) throw new Error('captured too few frames — is the lesson playing?');
  if (audioEvents.length === 0) console.warn('WARNING: no audio events captured — video will be silent');

  // ---- 4. assemble with ffmpeg ----
  // frame timing: concat list with per-frame durations (last frame repeated,
  // per the concat demuxer's final-duration quirk)
  const t0 = frames[0].ts;
  const videoDur = frames[frames.length - 1].ts - t0 + 1.0;
  const lines = ['ffconcat version 1.0'];
  for (let i = 0; i < frames.length; i++) {
    const dur = i < frames.length - 1 ? frames[i + 1].ts - frames[i].ts : 1.0;
    lines.push(`file 'frames/${path.basename(frames[i].file)}'`, `duration ${Math.max(0.02, dur).toFixed(4)}`);
  }
  lines.push(`file 'frames/${path.basename(frames[frames.length - 1].file)}'`);
  const listFile = path.join(WORK, 'frames.txt');
  fs.writeFileSync(listFile, lines.join('\n'));

  // audio timeline: each played clip becomes an ffmpeg input delayed to the
  // offset at which it really started (page perf-clock → epoch → frame clock)
  const clips = [];
  for (const ev of audioEvents) {
    let rel;
    try { rel = decodeURIComponent(new URL(ev.src).pathname); } catch { continue; }
    const local = path.resolve('dist', rel.replace(/^\//, ''));
    if (!fs.existsSync(local)) { console.warn('clip missing locally, skipping:', rel); continue; }
    const epochMs = clockEpoch + (ev.perfMs - clockPerf);
    const offsetMs = Math.max(0, Math.round(epochMs - t0 * 1000));
    clips.push({ local, offsetMs });
  }

  const out = path.join(WORK, `${lessonId}.mp4`);
  const inputs = ['-f', 'concat', '-safe', '0', '-i', listFile];
  let filter;
  if (clips.length > 0) {
    for (const c of clips) inputs.push('-i', c.local);
    const delayed = clips.map((c, i) => `[${i + 1}:a]adelay=${c.offsetMs}|${c.offsetMs}[a${i}]`).join(';');
    const mixIns = clips.map((_, i) => `[a${i}]`).join('');
    filter = `${delayed};${mixIns}amix=inputs=${clips.length}:normalize=0[mix];[mix]apad[aout]`;
  } else {
    inputs.push('-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo');
    filter = '[1:a]apad[aout]';
  }
  console.log(`muxing ${frames.length} frames + ${clips.length} clips → ${path.basename(out)}…`);
  execFileSync(ffmpegPath, [
    '-y', ...inputs,
    '-filter_complex', filter,
    '-map', '0:v', '-map', '[aout]',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-pix_fmt', 'yuv420p',
    '-vf', 'scale=1280:-2',
    '-fps_mode', 'vfr',
    '-c:a', 'aac', '-b:a', '160k',
    '-t', videoDur.toFixed(2),
    '-movflags', '+faststart',
    out,
  ], { stdio: ['ignore', 'ignore', 'inherit'], cwd: WORK });

  const sizeMb = (fs.statSync(out).size / 1048576).toFixed(1);
  console.log(`rendered ${out} (${sizeMb} MB, ~${Math.round(videoDur)}s)`);

  // ---- 5. upload to the public demo-media bucket ----
  if (!flag('no-upload')) {
    const db = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });
    const { data: buckets } = await db.storage.listBuckets();
    if (!(buckets ?? []).some((b) => b.name === BUCKET)) {
      const { error } = await db.storage.createBucket(BUCKET, { public: true });
      if (error) throw new Error(`createBucket: ${error.message}`);
      console.log(`created public bucket "${BUCKET}"`);
    }
    const object = lang === 'en' && gender === 'f' ? `${lessonId}.mp4` : `${lessonId}.${lang}.${gender}.mp4`;
    const { error } = await db.storage.from(BUCKET).upload(object, fs.readFileSync(out), {
      contentType: 'video/mp4',
      upsert: true,
    });
    if (error) throw new Error(`upload: ${error.message}`);
    console.log(`uploaded → ${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${object}`);
  }
  if (!flag('keep')) fs.rmSync(FRAMES, { recursive: true, force: true });
  console.log('done.');
  process.exit(0);
} catch (e) {
  console.error('ERROR:', e.message);
  if (browser) await browser.close().catch(() => {});
  process.exit(1);
}
