import type { GraphData, WidgetState } from '../../data/types';

const RANGE_FILL: Record<string, string> = {
  good: 'rgba(76, 175, 80, 0.18)',
  warning: 'rgba(245, 193, 66, 0.32)',
  critical: 'rgba(224, 87, 78, 0.20)',
};

// plot geometry (SVG units)
const W = 480, H = 340, L = 42, R = 52, T = 14, B = 70;
const PW = W - L - R;
const PH = H - T - B;

export default function GraphWidget({ graph, title }: WidgetState) {
  if (!graph) return null;
  const g: GraphData = graph;
  const heading = title ?? g.title ?? 'Graph';
  const n = g.xLabels.length;
  const span = g.yMax - g.yMin || 1;
  const x = (i: number) => L + (n <= 1 ? 0 : (i / (n - 1)) * PW);
  const y = (val: number) => T + (1 - (val - g.yMin) / span) * PH;
  const step = g.yStep ?? Math.round(span / 8);
  const ticks: number[] = [];
  for (let t = g.yMin; t <= g.yMax + 0.001; t += step) ticks.push(t);

  // bar geometry
  const groupW = (PW / n) * 0.7;
  const barW = groupW / g.series.length;

  return (
    <div className="gr">
      <div className="gr-head">
        <span className="gr-title">{heading}</span>
        <span className="gr-controls">
          {g.fullIcons ? (
            <>
              <span className="gr-ic">⤓</span>
              <span className="gr-ic">⤢</span>
              <span className={`gr-ic gr-choose${g.highlight === 'choose' ? ' ring' : ''}`}>▦</span>
              <span className="gr-ic">✎</span>
              <span className="gr-ic">ⓘ</span>
            </>
          ) : (
            <span className="gr-ic gr-burger">≡</span>
          )}
        </span>
        {g.menuItems && (
          <div className={`gr-menu${g.highlight === 'menu' ? ' ring' : ''}`}>
            {g.menuItems.map((m) => (
              <div key={m} className="gr-menu-item">{m}</div>
            ))}
          </div>
        )}
      </div>

      {g.plantTag && (
        <div className="gr-plantbar">
          <span className="gr-plant">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21V8l6 4V8l6 4V5l6 3v13z" />
            </svg>
            {g.plantTag}
          </span>
        </div>
      )}

      <div className={`gr-legend${g.highlight === 'legend' ? ' ring' : ''}`}>
        {g.series.map((s) => (
          <span className="gr-leg" key={s.name}>
            <span className="gr-leg-swatch" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>

      <svg className="gr-svg" viewBox={`0 0 ${W} ${H}`}>
        {/* fixed-range bands */}
        {g.fixedRanges?.map((r, i) => (
          <rect
            key={i}
            x={L}
            y={y(r.to)}
            width={PW}
            height={y(r.from) - y(r.to)}
            fill={RANGE_FILL[r.level]}
          />
        ))}
        {g.highlight === 'ranges' && (
          <rect x={L} y={T} width={PW} height={PH} fill="none" stroke="#d4a017" strokeWidth="2.5" strokeDasharray="6 4" />
        )}

        {/* gridlines + y labels */}
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={L} y1={y(t)} x2={L + PW} y2={y(t)} stroke="#e7ecf2" strokeWidth="1" />
            <text x={L - 6} y={y(t) + 3} textAnchor="end" className="gr-axis">{t}</text>
          </g>
        ))}

        {/* threshold dashed line */}
        {g.thresholdLine !== undefined && (
          <line
            x1={L} y1={y(g.thresholdLine)} x2={L + PW} y2={y(g.thresholdLine)}
            stroke="#6b7a90" strokeWidth="1.5" strokeDasharray="5 4"
          />
        )}

        {/* x labels (rotated) */}
        {g.xLabels.map((lab, i) => (
          <text
            key={i} x={x(i)} y={T + PH + 12} textAnchor="end"
            transform={`rotate(-45 ${x(i)} ${T + PH + 12})`} className="gr-axis"
          >
            {lab}
          </text>
        ))}

        {/* series */}
        {g.type === 'bar'
          ? g.series.map((s, si) =>
              s.points.map((p, i) => {
                const bx = x(i) - groupW / 2 + si * barW;
                const by = y(p);
                return <rect key={`${si}-${i}`} x={bx} y={by} width={barW * 0.86} height={y(g.yMin) - by} fill={s.color} rx="1" />;
              }),
            )
          : g.series.map((s) => (
              <g key={s.name}>
                <polyline
                  points={s.points.map((p, i) => `${x(i)},${y(p)}`).join(' ')}
                  fill="none" stroke={s.color} strokeWidth="2.5"
                />
                {s.points.map((p, i) => (
                  <circle key={i} cx={x(i)} cy={y(p)} r="3.4" fill="#fff" stroke={s.color} strokeWidth="2" />
                ))}
              </g>
            ))}

        {/* end-value labels with dotted leaders */}
        {g.series.map((s) => {
          const last = s.points.length - 1;
          if (last < 0) return null;
          const py = y(s.points[last]);
          return (
            <g key={`end-${s.name}`}>
              <line x1={x(last)} y1={py} x2={L + PW + 6} y2={py} stroke={s.color} strokeWidth="1.2" strokeDasharray="2 3" />
              <text x={L + PW + 9} y={py + 4} className="gr-endlabel" fill={s.color}>
                {s.endLabel ?? s.points[last]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
