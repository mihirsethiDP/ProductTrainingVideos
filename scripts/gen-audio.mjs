/**
 * Pre-generate narration audio + word-timing for every lesson step, in every
 * language, in one male and one female voice — using edge-tts (free, no key).
 *
 * Output (served statically from /audio on GitHub Pages):
 *   public/audio/<lessonId>/s<step>.<lang>.<gender>.mp3   — the narration clip
 *   public/audio/<lessonId>/s<step>.<lang>.<gender>.json  — { dur, words:[{t,c}] }
 *
 * The .json holds per-word timing: `t` = seconds into the clip, `c` = character
 * index into the narration text. The player maps audio currentTime -> charIndex
 * from this, so subtitles + the guide cursor are locked to the real audio and
 * can never drift.
 *
 * Usage:
 *   npm run gen:audio                      # everything, both genders, 4 langs
 *   npm run gen:audio -- --lesson=lesson-01-overview
 *   npm run gen:audio -- --langs=en,hi --genders=f
 *   npm run gen:audio -- --force          # re-generate even if files exist
 */
import { createServer } from 'vite';
import { EdgeTTS } from '@andresaya/edge-tts';
import ffmpegPath from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// edge-tts only emits 48 kbit MP3 (its "opus" option isn't smaller), so we
// re-encode each clip to ~24 kbit Opus/WebM — about half the size at better
// speech quality. The word timings come from the original synthesis, unchanged.
const OPUS_BITRATE = '24k';

// One male + one female neural voice per language. Neerja-Expressive is the
// warmest English option; the Indic locales each expose exactly one M/F pair.
const VOICES = {
  en: { f: 'en-IN-NeerjaExpressiveNeural', m: 'en-IN-PrabhatNeural' },
  hi: { f: 'hi-IN-SwaraNeural', m: 'hi-IN-MadhurNeural' },
  ta: { f: 'ta-IN-PallaviNeural', m: 'ta-IN-ValluvarNeural' },
  mr: { f: 'mr-IN-AarohiNeural', m: 'mr-IN-ManoharNeural' },
};
const ALL_LANGS = ['en', 'hi', 'ta', 'mr'];
const ALL_GENDERS = ['f', 'm'];

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);
const onlyLessons = args.lesson ? String(args.lesson).split(',') : null;
const langs = args.langs ? String(args.langs).split(',') : ALL_LANGS;
const genders = args.genders ? String(args.genders).split(',') : ALL_GENDERS;
const force = !!args.force;

const OUT = path.resolve('public/audio');

/** Walk the narration text and tag each spoken word with its character index,
 *  so the player can turn elapsed audio time into a position in the text. */
function buildTiming(text, wordBoundaries) {
  const words = [];
  let cursor = 0;
  let lastEnd = 0;
  for (const wb of wordBoundaries) {
    const w = wb.text;
    const t = wb.offset / 1e7; // 100-ns ticks -> seconds
    lastEnd = (wb.offset + wb.duration) / 1e7;
    let c = text.indexOf(w, cursor);
    if (c < 0) c = text.indexOf(w);
    if (c < 0) c = cursor;
    else cursor = c + w.length;
    words.push({ t: +t.toFixed(3), c });
  }
  return { dur: +lastEnd.toFixed(3), words };
}

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
try {
  const { LESSONS } = await server.ssrLoadModule('/src/data/catalog.ts');

  const jobs = [];
  for (const [lessonId, lesson] of Object.entries(LESSONS)) {
    if (onlyLessons && !onlyLessons.includes(lessonId)) continue;
    for (const lang of langs) {
      const content = lesson.content?.[lang];
      if (!content) continue;
      content.steps.forEach((step, i) => {
        const text = (step.voice || '').trim();
        if (!text) return;
        for (const g of genders) jobs.push({ lessonId, i, lang, g, text });
      });
    }
  }

  console.log(`${jobs.length} clips to consider (langs=${langs}, genders=${genders}${force ? ', force' : ''})`);
  let done = 0,
    skipped = 0,
    failed = 0;
  for (const job of jobs) {
    const dir = path.join(OUT, job.lessonId);
    fs.mkdirSync(dir, { recursive: true });
    const base = path.join(dir, `s${job.i}.${job.lang}.${job.g}`);
    if (!force && fs.existsSync(base + '.webm') && fs.existsSync(base + '.json')) {
      skipped++;
      continue;
    }
    // Retry transient failures (DNS blips, dropped sockets) with backoff so one
    // network hiccup doesn't abandon a clip on a long unattended run.
    let ok = false;
    let lastErr;
    for (let attempt = 1; attempt <= 4 && !ok; attempt++) {
      try {
        const tts = new EdgeTTS();
        await tts.synthesize(job.text, VOICES[job.lang][job.g], { rate: '0%', pitch: '0Hz', volume: '0%' });
        await tts.toFile(base); // writes <base>.mp3
        execFileSync(
          ffmpegPath,
          ['-y', '-i', base + '.mp3', '-c:a', 'libopus', '-b:a', OPUS_BITRATE, '-ac', '1', base + '.webm'],
          { stdio: 'ignore' },
        );
        fs.unlinkSync(base + '.mp3');
        fs.writeFileSync(base + '.json', JSON.stringify(buildTiming(job.text, tts.getWordBoundaries())));
        ok = true;
      } catch (e) {
        lastErr = e;
        if (attempt < 4) await new Promise((r) => setTimeout(r, attempt * 2500));
      }
    }
    if (ok) {
      done++;
      if (done % 10 === 0) console.log(`  …${done} generated, ${skipped} skipped`);
    } else {
      failed++;
      console.error(`FAIL ${path.relative(OUT, base)}: ${lastErr?.message}`);
    }
  }
  console.log(`Done. generated=${done} skipped=${skipped} failed=${failed}`);
} finally {
  await server.close();
}
