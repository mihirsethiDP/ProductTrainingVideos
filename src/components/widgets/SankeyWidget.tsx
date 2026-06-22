import type { SankeyData, WidgetState } from '../../data/types';

const W = 1180, H = 600, TOP = 18, BOT = 16, LEFT = 12, RIGHT = 12, BAR = 14, GAP = 12;
const PH = H - TOP - BOT;

interface Placed {
  x: number; y: number; h: number;
  outOff: number; inOff: number;
  label: string; value: number; color: string; level: number;
}

export default function SankeyWidget({ sankey, title }: WidgetState) {
  if (!sankey) return null;
  const s: SankeyData = sankey;
  const heading = title ?? s.title ?? 'Plant Flow';
  const maxLevel = Math.max(...s.nodes.map((n) => n.level));
  const colSpacing = (W - LEFT - RIGHT - BAR) / (maxLevel || 1);

  // scale so every level fits vertically
  const byLevel: Record<number, typeof s.nodes> = {};
  s.nodes.forEach((n) => (byLevel[n.level] ??= []).push(n));
  let scale = Infinity;
  Object.values(byLevel).forEach((arr) => {
    const total = arr.reduce((a, n) => a + n.value, 0);
    const usable = PH - (arr.length - 1) * GAP;
    scale = Math.min(scale, usable / total);
  });

  // place nodes (top-aligned per level)
  const placed: Record<string, Placed> = {};
  Object.entries(byLevel).forEach(([lvl, arr]) => {
    const level = Number(lvl);
    let y = TOP;
    arr.forEach((n) => {
      const h = n.value * scale;
      placed[n.id] = {
        x: LEFT + level * colSpacing, y, h, outOff: 0, inOff: 0,
        label: n.label, value: n.value, color: n.color, level,
      };
      y += h + GAP;
    });
  });

  // build link paths in input order (top-to-bottom stacking per node)
  const paths = s.links.map((lk, i) => {
    const sn = placed[lk.source];
    const tn = placed[lk.target];
    if (!sn || !tn) return null;
    const h = lk.value * scale;
    const sx = sn.x + BAR;
    const tx = tn.x;
    const sy0 = sn.y + sn.outOff;
    const ty0 = tn.y + tn.inOff;
    sn.outOff += h;
    tn.inOff += h;
    const mx = (sx + tx) / 2;
    const d = `M ${sx} ${sy0} C ${mx} ${sy0}, ${mx} ${ty0}, ${tx} ${ty0} L ${tx} ${ty0 + h} C ${mx} ${ty0 + h}, ${mx} ${sy0 + h}, ${sx} ${sy0 + h} Z`;
    return <path key={i} d={d} fill={lk.color} opacity="0.72" />;
  });

  return (
    <div className="snk">
      <div className="snk-head">
        <span className="snk-title">{heading}</span>
        <span className="snk-burger">≡</span>
      </div>

      <svg className="snk-svg" viewBox={`0 0 ${W} ${H}`}>
        {paths}

        {Object.entries(placed).map(([id, p]) => (
          <rect key={id} x={p.x} y={p.y} width={BAR} height={Math.max(p.h, 2)} fill={p.color} rx="1" />
        ))}

        {/* labels */}
        {Object.values(placed).map((p, i) => {
          const text = p.label;
          const valText = p.value.toFixed(2);
          const boxW = Math.max(text.length, valText.length) * 7.2 + 16;
          const right = p.level !== maxLevel;
          const bx = right ? p.x + BAR + 4 : p.x - boxW - 4;
          const by = p.y + p.h / 2 - 17;
          return (
            <g key={`l${i}`}>
              <rect x={bx} y={by} width={boxW} height={34} rx="5" fill="#ffffff" stroke="#e4dccd" />
              <text x={bx + 8} y={by + 14} className="snk-name">{text}</text>
              <text x={bx + 8} y={by + 28} className="snk-val">{valText}</text>
            </g>
          );
        })}

        {/* node highlight ring */}
        {s.highlight && placed[s.highlight] && (
          <rect
            x={placed[s.highlight].x - 4} y={placed[s.highlight].y - 4}
            width={BAR + 8} height={placed[s.highlight].h + 8}
            fill="none" stroke="#d4a017" strokeWidth="4" strokeDasharray="7 5" rx="3"
          />
        )}
      </svg>

      {s.periodLabel && (
        <div className="snk-foot">
          <span>{s.periodLabel}</span>
          <span className="snk-foot-box">–</span>
        </div>
      )}
    </div>
  );
}
