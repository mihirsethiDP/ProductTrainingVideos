#!/usr/bin/env node
/**
 * audit-spotlights.mjs — draw every spotlight in a lesson file onto its real
 * screenshot so the alignment can be eyeballed. This is the mechanical half of a
 * spotlight audit; the judgement (does the box frame the right element?) is done
 * by looking at the composites this produces.
 *
 * Usage:
 *   node audit-spotlights.mjs <path/to/lesson.ts> [--out <dir>] [--root <repoRoot>]
 *
 * Output: one composite JPG per spotlighted layout in <out> (default
 * ./.spotlight-audit/<lesson>/), plus a printed manifest mapping each file to its
 * layout index, caption, screenshot, and coordinates. Read each composite image
 * to judge whether the yellow box frames the element the caption + narration
 * describe.
 *
 * Notes
 * - Coordinates are percentages of the screenshot (the app-cropped frame, usually
 *   1280 wide). Pixel box = round(pct * dimension).
 * - Only layouts that HAVE a spotlight are drawn; showcase/widget/cursor-only
 *   layouts are skipped. A count check warns if any spotlight was not parsed.
 * - ffmpeg comes from node_modules/ffmpeg-static (no system install needed).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const file = argv.find((a) => !a.startsWith('--') && a !== opt('--out') && a !== opt('--root'));
if (!file) {
  console.error('usage: node audit-spotlights.mjs <lesson.ts> [--out <dir>] [--root <repoRoot>]');
  process.exit(1);
}

function findRoot(start) {
  let d = path.resolve(start);
  for (let i = 0; i < 10; i++) {
    const dir = path.join(d, 'node_modules', 'ffmpeg-static');
    if (fs.existsSync(path.join(dir, 'ffmpeg.exe')) || fs.existsSync(path.join(dir, 'ffmpeg'))) return d;
    const up = path.dirname(d);
    if (up === d) break;
    d = up;
  }
  return null;
}
const root = opt('--root')
  ? path.resolve(opt('--root'))
  : (findRoot(process.cwd()) || findRoot(path.dirname(path.resolve(file))));
if (!root) {
  console.error('Could not locate the repo root (node_modules/ffmpeg-static). Pass --root <repoRoot>.');
  process.exit(1);
}
const FF = fs.existsSync(path.join(root, 'node_modules', 'ffmpeg-static', 'ffmpeg.exe'))
  ? path.join(root, 'node_modules', 'ffmpeg-static', 'ffmpeg.exe')
  : path.join(root, 'node_modules', 'ffmpeg-static', 'ffmpeg');

const src = fs.readFileSync(path.resolve(file), 'utf8');
const base = path.basename(file).replace(/\.ts$/, '');
const outDir = path.resolve(opt('--out') || path.join('.spotlight-audit', base));
fs.mkdirSync(outDir, { recursive: true });

// screenshots live in public/screenshots/<folder>/; folder comes from the BASE const
const folder = (src.match(/screenshots\/([A-Za-z0-9._-]+)`/) || [])[1];
if (!folder) { console.error('Could not find the screenshots folder (const BASE = ...screenshots/<folder>).'); process.exit(1); }

// key -> filename, from the `screenshots: { key: `${BASE}/file.jpg`, ... }` map
const shots = {};
const mapBlock = (src.match(/screenshots:\s*\{([\s\S]*?)\n\s*\},/) || [, ''])[1];
for (const m of mapBlock.matchAll(/(\w+):\s*`\$\{BASE\}\/([^`]+)`/g)) shots[m[1]] = m[2];

// pair screenshot + caption + spotlight; the lookahead stops the gap from
// crossing into the next layout (so a showcase layout can't borrow the next
// layout's spotlight).
const re = /screenshot:\s*'([^']+)',\s*caption:\s*'([^']*)',(?:(?!screenshot:)[\s\S])*?spotlight:\s*\{\s*top:\s*'([\d.]+)%',\s*left:\s*'([\d.]+)%',\s*width:\s*'([\d.]+)%',\s*height:\s*'([\d.]+)%'\s*\}/g;

function dims(p) {
  try { execFileSync(FF, ['-i', p], { stdio: ['ignore', 'ignore', 'pipe'] }); }
  catch (e) { const s = String(e.stderr || ''); const m = s.match(/,\s(\d{2,5})x(\d{2,5})\b/); if (m) return [+m[1], +m[2]]; }
  return null;
}

let idx = -1, drawn = 0;
console.log(`lesson: ${base}  folder: ${folder}  out: ${outDir}\n`);
for (const m of src.matchAll(re)) {
  idx++;
  const [, key, caption, top, left, width, height] = m;
  const fname = shots[key];
  if (!fname) { console.log(`  [${idx}] screenshot key '${key}' not in screenshots map — SKIP`); continue; }
  const shotPath = path.join(root, 'public', 'screenshots', folder, fname);
  if (!fs.existsSync(shotPath)) { console.log(`  [${idx}] ${fname} MISSING at ${shotPath}`); continue; }
  const wh = dims(shotPath);
  if (!wh) { console.log(`  [${idx}] could not read dims for ${fname}`); continue; }
  const [W, H] = wh;
  const x = Math.round((+left / 100) * W), y = Math.round((+top / 100) * H);
  const w = Math.round((+width / 100) * W), h = Math.round((+height / 100) * H);
  const out = path.join(outDir, `L${idx}_${key}.jpg`);
  execFileSync(FF, ['-y', '-i', shotPath, '-vf', `drawbox=x=${x}:y=${y}:w=${w}:h=${h}:color=yellow@1:t=5`, out], { stdio: 'ignore' });
  drawn++;
  console.log(`  [${idx}] ${key}/${fname} ${W}x${H}  box(${x},${y},${w},${h})  "${caption}"\n        → ${out}`);
}

const declared = (src.match(/spotlight:\s*\{/g) || []).length;
console.log(`\nDrew ${drawn} composite(s). Declared spotlights in file: ${declared}.`);
if (drawn !== declared) console.log(`⚠ mismatch — ${declared - drawn} spotlight(s) not parsed; inspect those layouts by hand.`);
console.log('Now READ each composite JPG and judge the box against its caption + the paired steps[i].voice/body.');
