import type { ScatterData, WidgetState } from '../../data/types';

const W = 560, H = 360, L = 48, R = 24, T = 20, B = 56;
const PW = W - L - R;
const PH = H - T - B;

export default function ScatterGraphWidget({ scatter, title }: WidgetState) {
  if (!scatter) return null;
  const s: ScatterData = scatter;
  const heading = title ?? s.title ?? 'Scatter Graph';
  const xSpan = s.xMax - s.xMin || 1;
  const ySpan = s.yMax - s.yMin || 1;
  const px = (v: number) => L + ((v - s.xMin) / xSpan) * PW;
  const py = (v: number) => T + (1 - (v - s.yMin) / ySpan) * PH;

  const xTicks: number[] = [];
  for (let t = s.xMin; t <= s.xMax + 0.001; t += 1) xTicks.push(t);
  const yTicks: number[] = [];
  for (let t = s.yMin; t <= s.yMax + 0.001; t += 1) yTicks.push(t);

  return (
    <div className="scg">
      <div className="scg-head">
        <span className="scg-title">{heading}</span>
        <span className="scg-info">ⓘ</span>
      </div>

      <div className={`scg-legend${s.highlight === 'legend' ? ' ring' : ''}`}>
        <span className="scg-leg-swatch" style={{ background: s.color }} />
        {s.seriesName}
      </div>

      <svg className="scg-svg" viewBox={`0 0 ${W} ${H}`}>
        {/* gridlines + y labels */}
        {yTicks.map((t, i) => (
          <g key={`y${i}`}>
            <line x1={L} y1={py(t)} x2={L + PW} y2={py(t)} stroke="#eceff3" strokeWidth="1" />
            <text x={L - 8} y={py(t) + 3} textAnchor="end" className="scg-axis">{t}</text>
          </g>
        ))}
        {xTicks.map((t, i) => (
          <g key={`x${i}`}>
            <line x1={px(t)} y1={T} x2={px(t)} y2={T + PH} stroke="#eceff3" strokeWidth="1" />
            <text x={px(t)} y={T + PH + 16} textAnchor="middle" className="scg-axis">{t}</text>
          </g>
        ))}

        {/* axis highlight overlays */}
        {s.highlight === 'yaxis' && (
          <rect x={L - 2} y={T} width={4} height={PH} fill="none" stroke="#d4a017" strokeWidth="3" strokeDasharray="6 4" />
        )}
        {s.highlight === 'xaxis' && (
          <rect x={L} y={T + PH - 2} width={PW} height={4} fill="none" stroke="#d4a017" strokeWidth="3" strokeDasharray="6 4" />
        )}
        {s.highlight === 'points' && (
          <rect x={L} y={T} width={PW} height={PH} fill="none" stroke="#d4a017" strokeWidth="2.5" strokeDasharray="6 4" />
        )}

        {/* points */}
        {s.points.map((p, i) => (
          <circle key={i} cx={px(p.x)} cy={py(p.y)} r="4" fill={s.color} />
        ))}

        {/* axis titles */}
        <text x={L + PW / 2} y={H - 6} textAnchor="middle" className="scg-axis-title">{s.xLabel}</text>
        <text x={14} y={T + PH / 2} textAnchor="middle" className="scg-axis-title" transform={`rotate(-90 14 ${T + PH / 2})`}>
          {s.yLabel}
        </text>
      </svg>
    </div>
  );
}
