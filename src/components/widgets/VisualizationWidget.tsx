import type { VizData, WidgetState } from '../../data/types';

const IMPELLER = 'M0 -11 C4 -3.5 3.5 -4 11 0 C3.5 4 4 3.5 0 11 C-4 3.5 -3.5 4 -11 0 C-3.5 -4 -4 -3.5 0 -11 Z';

function Pump({ x, y, on, label }: { x: number; y: number; on: boolean; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="26" fill="#eef1f4" stroke="#c4ccd6" strokeWidth="2" />
      <circle cx={x} cy={y} r="22" fill="none" stroke={on ? '#3aaa35' : '#d23b30'} strokeWidth="4" />
      <g className={on ? 'viz-spin' : ''} style={{ transformBox: 'fill-box', transformOrigin: 'center' } as React.CSSProperties} transform={`translate(${x} ${y})`}>
        <path d={IMPELLER} fill="#fff" stroke={on ? '#3aaa35' : '#d23b30'} strokeWidth="1.4" />
      </g>
      <rect x={x - 9} y={y + 26} width="18" height="10" fill="#cfd6df" />
      <text x={x} y={y + 52} textAnchor="middle" className="viz-label">{label}</text>
      <circle cx={x + 30} cy={y - 22} r="4" fill={on ? '#3aaa35' : '#d23b30'} />
    </g>
  );
}

function Tank({ x, y, w, h, level, label, bubbles }: { x: number; y: number; w: number; h: number; level: number; label: string; bubbles?: boolean }) {
  const fillH = (h * level) / 100;
  const fillY = y + (h - fillH);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#fff" stroke="#9aa7b8" strokeWidth="2" />
      <rect x={x} y={fillY} width={w} height={fillH} className="viz-water" />
      {bubbles && level > 5 &&
        [0.2, 0.4, 0.6, 0.8].map((f, i) => (
          <circle key={i} className="viz-bubble" cx={x + w * f} cy={y + h - 8} r="3.5" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      <text x={x + w / 2} y={y + h + 20} textAnchor="middle" className="viz-label">{label}</text>
    </g>
  );
}

function Gauge({ x, y, level, label }: { x: number; y: number; level: number; label: string }) {
  const h = 110;
  const fillH = (h * level) / 100;
  return (
    <g>
      <rect x={x} y={y} width="20" height={h} fill="#e6e1d3" stroke="#c4ccd6" />
      <rect x={x} y={y + (h - fillH)} width="20" height={fillH} fill="#2faa6a" />
      <text x={x + 10} y={y + h + 16} textAnchor="middle" className="viz-gtext">{label}</text>
      <text x={x + 10} y={y - 6} textAnchor="middle" className="viz-gtext">{Math.round(level)}%</text>
    </g>
  );
}

function Pipe({ d, flowing }: { d: string; flowing: boolean }) {
  return (
    <>
      <path d={d} fill="none" stroke="#cdd4dd" strokeWidth="7" />
      <path d={d} fill="none" stroke={flowing ? '#4a90c2' : '#cdd4dd'} strokeWidth="5" strokeDasharray="9 7" className={flowing ? 'viz-flow' : ''} />
    </>
  );
}

export default function VisualizationWidget({ viz }: WidgetState) {
  if (!viz) return null;
  const v: VizData = viz;
  const anyFlow = v.pump1On || v.pump2On;

  return (
    <div className="viz">
      <div className="viz-bar">
        <span className="viz-plant">{v.plant}
          <span className={`viz-live${v.live ? '' : ' hist'}`}>{v.live ? '● LIVE' : '● HISTORY'}</span>
        </span>
        <span className={`viz-date${v.highlight === 'backdated' ? ' ring' : ''}`}>🕐 {v.date}</span>
        <span className={`viz-play${v.highlight === 'backdated' ? ' ring' : ''}`}>▶</span>
        <span className="viz-pagewrap">
          <span className={`viz-page${v.highlight === 'pages' ? ' ring' : ''}`}>{v.page} ▾</span>
          {v.pageMenu && (
            <span className="viz-pagemenu">
              {v.pageMenu.map((p) => <span key={p} className={`viz-pageopt${p === v.page ? ' sel' : ''}`}>{p}</span>)}
            </span>
          )}
        </span>
      </div>

      <div className="viz-canvas">
        <svg viewBox="0 0 900 400" className="viz-svg">
          {/* highlight overlays (SVG) */}
          {v.highlight === 'level' && <rect x="24" y="96" width="190" height="220" className="viz-hl" />}
          {v.highlight === 'onoff' && <rect x="300" y="70" width="130" height="260" className="viz-hl" />}
          {v.highlight === 'animation' && <rect x="190" y="70" width="430" height="260" className="viz-hl" />}

          {/* pipes */}
          <Pipe d="M170 200 H300" flowing={anyFlow} />
          <Pipe d="M300 200 V120 H334" flowing={v.pump1On} />
          <Pipe d="M300 200 V280 H334" flowing={v.pump2On} />
          <Pipe d="M386 120 H470 V200 H600" flowing={v.pump1On} />
          <Pipe d="M386 280 H470 V200" flowing={v.pump2On} />
          <Pipe d="M780 200 H860" flowing={anyFlow} />
          <circle cx="300" cy="200" r="6" fill="#9aa7b8" />

          {/* equipment */}
          <Tank x={40} y={110} w={130} h={160} level={v.collectionLevel} label="Collection Tank" />
          <Gauge x={182} y={120} level={v.collectionLevel} label="Collection LT" />
          <Pump x={360} y={120} on={v.pump1On} label="Reactor Feed Pump 1" />
          <Pump x={360} y={280} on={v.pump2On} label="Reactor Feed Pump 2" />
          <Tank x={600} y={110} w={180} h={170} level={v.aerationLevel} label="Aeration Tank" bubbles={anyFlow} />
        </svg>
      </div>
    </div>
  );
}
