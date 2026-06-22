// Branded SVG thumbnails for modules and lessons (videos).
// Each tile = brand-navy field + module accent stripe + a white line-art glyph
// hinting at the content + a faint droplet watermark (the brand mark).
import type { ReactNode } from 'react';

// --- module accents (drawn from the existing brand palette) ---
const MODULE_ACCENT: Record<number, string> = {
  1: '#1e6091', // dashboard — water
  2: '#d4a017', // widgets — gold
  3: '#2d8659', // data input — leaf
  4: '#c74e3f', // inventory — coral
  5: '#7b5ea7', // insights — violet
  6: '#4a90c2', // visualization — light water
  7: '#c98a2b', // daily ops — amber
  8: '#3a7ca5', // reports — steel
  9: '#5a6b8c', // internal — slate
};

export function moduleAccent(n: number): string {
  return MODULE_ACCENT[n] ?? '#4a90c2';
}

// --- glyph picked per module (representative) ---
const MODULE_GLYPH: Record<number, string> = {
  1: 'dashboard',
  2: 'gauge',
  3: 'input',
  4: 'box',
  5: 'bulb',
  6: 'tank',
  7: 'list',
  8: 'report',
  9: 'gear',
};

export function moduleGlyph(n: number): string {
  return MODULE_GLYPH[n] ?? 'dashboard';
}

// --- glyph picked per lesson id ---
const LESSON_GLYPH: Record<string, string> = {
  'lesson-01-overview': 'dashboard',
  'lesson-02-smart-hours': 'clockWindow',
  'lesson-01-range-number': 'number',
  'lesson-02-gauge': 'gauge',
  'lesson-03-elastic-table': 'table',
  'lesson-04-advanced-table': 'cube',
  'lesson-05-table': 'tableSimple',
  'lesson-06-graphs': 'line',
  'lesson-07-scatter': 'scatter',
  'lesson-08-sankey': 'sankey',
  'lesson-01-entering-readings': 'input',
  'lesson-02-types-and-bulk': 'fields',
  'lesson-03-ocr': 'scan',
  'lesson-04-bulk-upload': 'sheet',
  'lesson-01-supervisor': 'clipboard',
  'lesson-02-operator': 'box',
  'lesson-01-insights-page': 'bulb',
  'lesson-02-on-the-go': 'chat',
  'lesson-01-digital-twin': 'tank',
};

export function lessonGlyph(id: string, moduleNumber: number): string {
  return LESSON_GLYPH[id] ?? moduleGlyph(moduleNumber);
}

// White line-art glyphs, drawn centred on the origin (≈ -26..26 × -18..18).
const GLYPHS: Record<string, ReactNode> = {
  dashboard: (
    <>
      <rect x="-26" y="-15" width="22" height="13" rx="2" />
      <rect x="4" y="-15" width="22" height="13" rx="2" />
      <rect x="-26" y="3" width="22" height="13" rx="2" />
      <rect x="4" y="3" width="22" height="13" rx="2" />
    </>
  ),
  clockWindow: (
    <>
      <path d="M0 0 L0 -16 A16 16 0 0 1 13 -9 Z" fill="rgba(255,255,255,0.25)" stroke="none" />
      <circle cx="0" cy="0" r="16" />
      <path d="M0 0 V-9" />
      <path d="M0 0 H8" />
    </>
  ),
  number: (
    <text x="0" y="12" textAnchor="middle" fontFamily="var(--serif)" fontWeight="700" fontSize="36" fill="#fff" stroke="none">
      42
    </text>
  ),
  gauge: (
    <>
      <path d="M-18 7 A18 18 0 0 1 18 7" />
      <path d="M0 7 L10 -8" />
      <circle cx="0" cy="7" r="2.6" fill="#fff" stroke="none" />
    </>
  ),
  table: (
    <>
      <rect x="-26" y="-16" width="52" height="32" rx="2" />
      <path d="M-26 -4 H26 M-26 6 H26 M-8 -16 V16 M8 -16 V16" />
    </>
  ),
  tableSimple: (
    <>
      <rect x="-24" y="-14" width="48" height="28" rx="2" />
      <path d="M-24 0 H24 M0 -14 V14" />
    </>
  ),
  cube: (
    <>
      <path d="M-16 -6 L0 -14 L16 -6 L0 2 Z" />
      <path d="M-16 -6 V12 L0 20 V2" />
      <path d="M16 -6 V12 L0 20" />
    </>
  ),
  line: (
    <>
      <path d="M-24 16 V-16 M-24 16 H24" opacity="0.6" />
      <polyline points="-22,8 -10,-4 0,2 12,-12 22,-6" fill="none" />
    </>
  ),
  scatter: (
    <>
      <path d="M-24 16 V-16 M-24 16 H24" opacity="0.6" />
      {[
        [-14, 8], [-6, 2], [-2, 10], [4, -4], [10, 1], [16, -10], [12, -2],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill="#fff" stroke="none" />
      ))}
    </>
  ),
  sankey: (
    <>
      <rect x="-24" y="-14" width="6" height="28" fill="#fff" stroke="none" />
      <path d="M-18 -7 C-2 -7 4 -12 20 -12" />
      <path d="M-18 0 C-2 0 4 1 20 1" />
      <path d="M-18 7 C-2 7 4 12 20 12" />
      <rect x="20" y="-16" width="6" height="9" fill="#fff" stroke="none" />
      <rect x="20" y="-4" width="6" height="9" fill="#fff" stroke="none" />
      <rect x="20" y="8" width="6" height="9" fill="#fff" stroke="none" />
    </>
  ),
  input: (
    <>
      <rect x="-26" y="-8" width="38" height="16" rx="3" />
      <path d="M-21 0 H2" opacity="0.7" />
      <path d="M12 8 L24 -4 L28 0 L16 12 Z" />
      <path d="M12 8 L12 12 L16 12" />
    </>
  ),
  fields: (
    <>
      <rect x="-26" y="-16" width="52" height="9" rx="2" />
      <rect x="-26" y="-4" width="52" height="9" rx="2" />
      <rect x="-26" y="8" width="34" height="9" rx="2" />
      <path d="M15 13 l3 3 l7 -8" />
    </>
  ),
  scan: (
    <>
      <path d="M-24 -8 V-15 H-17" />
      <path d="M24 -8 V-15 H17" />
      <path d="M-24 8 V15 H-17" />
      <path d="M24 8 V15 H17" />
      <rect x="-11" y="-9" width="22" height="18" rx="1" opacity="0.5" />
      <path d="M-6 -3 H6 M-6 2 H3" opacity="0.7" />
      <path d="M-20 0 H20" stroke="#fff" strokeWidth="2.6" />
    </>
  ),
  sheet: (
    <>
      <rect x="-24" y="-14" width="32" height="28" rx="2" />
      <path d="M-24 -5 H8 M-24 4 H8 M-13 -14 V14 M-3 -14 V14" opacity="0.7" />
      <path d="M20 16 V-2 M13 5 L20 -2 L27 5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="-15" y="-15" width="30" height="31" rx="3" />
      <rect x="-7" y="-19" width="14" height="8" rx="2" fill="#fff" stroke="none" />
      <path d="M-8 -3 H8 M-8 4 H8 M-8 11 H2" opacity="0.85" />
    </>
  ),
  box: (
    <>
      <path d="M-16 -5 L0 -13 L16 -5 L16 12 L0 20 L-16 12 Z" />
      <path d="M-16 -5 L0 3 L16 -5 M0 3 V20" opacity="0.85" />
    </>
  ),
  bulb: (
    <>
      <path d="M-9 5 a10 10 0 1 1 18 0 q-2 3 -3 6 H-6 q-1 -3 -3 -6 Z" />
      <path d="M-4 13 H4 M-3 17 H3" />
      <path d="M0 -19 V-23 M-15 -6 L-19 -9 M15 -6 L19 -9" opacity="0.7" />
    </>
  ),
  chat: (
    <>
      <path d="M-22 -14 H22 a4 4 0 0 1 4 4 V8 a4 4 0 0 1 -4 4 H-4 L-14 21 V12 H-22 a4 4 0 0 1 -4 -4 V-10 a4 4 0 0 1 4 -4 Z" />
      <path d="M-9 -2 L-3 5 L11 -9" />
    </>
  ),
  tank: (
    <>
      <path d="M0 -22 c0 0 6 6 6 9 a6 6 0 1 1 -12 0 c0 -3 6 -9 6 -9 Z" />
      <rect x="-20" y="-6" width="40" height="24" rx="3" />
      <path d="M-20 4 q5 -4 10 0 t10 0 t10 0 V18 H-20 Z" fill="rgba(255,255,255,0.22)" stroke="none" />
      <path d="M-20 4 q5 -4 10 0 t10 0 t10 0" />
    </>
  ),
  list: (
    <>
      <rect x="-23" y="-16" width="9" height="9" rx="2" />
      <path d="M-21 -12 l2 2 l4 -5" />
      <path d="M-9 -11 H23" opacity="0.8" />
      <rect x="-23" y="-3" width="9" height="9" rx="2" />
      <path d="M-9 1 H23" opacity="0.8" />
      <rect x="-23" y="10" width="9" height="9" rx="2" />
      <path d="M-9 14 H23" opacity="0.8" />
    </>
  ),
  report: (
    <>
      <rect x="-16" y="-16" width="32" height="32" rx="2" />
      <path d="M-9 10 V2 M-1 10 V-6 M7 10 V-1" strokeWidth="3" />
      <path d="M-11 13 H11" opacity="0.6" />
    </>
  ),
  gear: (
    <>
      <circle cx="0" cy="0" r="12" />
      <circle cx="0" cy="0" r="5" />
      <path d="M0 -12 V-17 M0 12 V17 M-12 0 H-17 M12 0 H17 M-8.5 -8.5 L-12 -12 M8.5 -8.5 L12 -12 M-8.5 8.5 L-12 12 M8.5 8.5 L12 12" />
    </>
  ),
};

// brand droplet watermark (simplified from BrandLogo)
const DropletMark = (
  <g opacity="0.08" stroke="#fff" strokeWidth="3" fill="none" transform="translate(101 56) scale(0.42)">
    <path d="M0 -34 C0 -34 28 6 28 26 a28 28 0 1 1 -56 0 C-28 6 0 -34 0 -34 Z" />
    <path d="M-12 4 a14 14 0 0 1 24 -4" />
    <path d="M10 38 a14 14 0 0 1 -24 4" />
  </g>
);

export default function Thumb({
  glyph,
  accent = '#4a90c2',
  className,
}: {
  glyph: string;
  accent?: string;
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 120 76" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <rect width="120" height="76" fill="#193458" />
      <ellipse cx="96" cy="6" rx="74" ry="44" fill="#24446e" opacity="0.55" />
      <rect width="6" height="76" fill={accent} />
      {DropletMark}
      <g
        transform="translate(62 38)"
        stroke="#fff"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {GLYPHS[glyph] ?? GLYPHS.dashboard}
      </g>
    </svg>
  );
}
