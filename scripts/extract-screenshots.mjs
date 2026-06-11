// One-time extraction: pulls the base64-embedded screenshots out of the v4
// prototype HTML and writes them as real image files under public/screenshots.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const htmlPath = resolve(process.argv[2] ?? '../dashboard_training_v4_1.html');
const outDir = resolve('public/screenshots/module-01');
const html = readFileSync(htmlPath, 'utf8');

const re = /(\w+):\s*"data:image\/(jpeg|png);base64,([^"]+)"/g;
let m;
let count = 0;
while ((m = re.exec(html)) !== null) {
  const [, key, type, b64] = m;
  const ext = type === 'jpeg' ? 'jpg' : 'png';
  const file = resolve(outDir, `${key}.${ext}`);
  writeFileSync(file, Buffer.from(b64, 'base64'));
  console.log(`wrote ${key}.${ext} (${Math.round(b64.length * 0.75 / 1024)} KB)`);
  count++;
}
console.log(`done — ${count} screenshots extracted`);
