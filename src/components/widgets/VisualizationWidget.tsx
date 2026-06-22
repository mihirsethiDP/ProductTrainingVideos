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

function Blower({ x, y, on, label }: { x: number; y: number; on: boolean; label: string }) {
  const col = on ? '#3aaa35' : '#9aa7b8';
  return (
    <g>
      <circle cx={x} cy={y} r="25" fill="#eef1f4" stroke="#c4ccd6" strokeWidth="2" />
      <rect x={x + 20} y={y - 9} width="16" height="18" fill="#e2e6eb" stroke="#c4ccd6" />
      <g className={on ? 'viz-spin' : ''} style={{ transformBox: 'fill-box', transformOrigin: 'center' } as React.CSSProperties} transform={`translate(${x} ${y})`}>
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          const tx = Math.cos(a) * 15;
          const ty = Math.sin(a) * 15;
          return <rect key={i} x={tx - 3} y={ty - 3} width="6" height="6" fill={col} transform={`rotate(${i * 45} ${tx} ${ty})`} />;
        })}
        <circle r="13" fill={col} />
        <circle r="6" fill="#fff" />
      </g>
      <text x={x} y={y + 46} textAnchor="middle" className="viz-label">{label}</text>
      <circle cx={x + 30} cy={y - 20} r="4" fill={on ? '#3aaa35' : '#d23b30'} />
    </g>
  );
}

function Tank({ x, y, w, h, level, label, content = 'water', bubbles }: { x: number; y: number; w: number; h: number; level: number; label: string; content?: 'water' | 'sludge'; bubbles?: boolean }) {
  const fillH = (h * level) / 100;
  const fillY = y + (h - fillH);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#fff" stroke="#9aa7b8" strokeWidth="2" />
      <rect x={x} y={fillY} width={w} height={fillH} className={content === 'sludge' ? 'viz-sludge' : 'viz-water'} />
      {bubbles && level > 5 &&
        [0.2, 0.4, 0.6, 0.8].map((f, i) => (
          <circle key={i} className="viz-bubble" cx={x + w * f} cy={y + h - 8} r="3.5" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      <text x={x + w / 2} y={y + h + 20} textAnchor="middle" className="viz-label">{label}</text>
    </g>
  );
}

function Gauge({ x, y, level, label, h = 110 }: { x: number; y: number; level: number; label: string; h?: number }) {
  const fillH = (h * level) / 100;
  return (
    <g>
      <rect x={x} y={y} width="20" height={h} fill="#ded9ec" stroke="#b8b2cc" />
      <rect x={x} y={y + (h - fillH)} width="20" height={fillH} fill="#2faa6a" />
      <text x={x + 10} y={y + h + 16} textAnchor="middle" className="viz-gtext">{label}</text>
    </g>
  );
}

function Pipe({ d, flowing, color = '#4a90c2' }: { d: string; flowing: boolean; color?: string }) {
  return (
    <>
      <path d={d} fill="none" stroke="#cdd4dd" strokeWidth="7" />
      <path d={d} fill="none" stroke={flowing ? color : '#cdd4dd'} strokeWidth="5" strokeDasharray="9 7" className={flowing ? 'viz-flow' : ''} />
    </>
  );
}

function OnOff({ x, y, on }: { x: number; y: number; on: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r="6" fill={on ? '#3aaa35' : '#d23b30'} stroke="#fff" strokeWidth="1.5" />
      <text x={x} y={y + 24} textAnchor="middle" className="viz-onoff">ON/OFF</text>
    </g>
  );
}

function Screen({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x - 34} y={y - 28} width="68" height="60" fill="#e2e6eb" stroke="#b8c0ca" strokeWidth="1.5" rx="2" />
      {Array.from({ length: 8 }, (_, i) => (
        <line key={i} x1={x - 28 + i * 8} y1={y - 22} x2={x - 28 + i * 8} y2={y + 26} stroke="#b3bac4" strokeWidth="2" />
      ))}
      <text x={x} y={y + 50} textAnchor="middle" className="viz-label">{label}</text>
    </g>
  );
}

function GritChannel({ x, y, label }: { x: number; y: number; label: string }) {
  // hopper-bottom tank: blue water on top, brown sludge below, sloped hopper
  return (
    <g>
      <path d={`M${x} ${y} h96 v54 l-30 28 h-36 l-30 -28 Z`} fill="#fff" stroke="#9aa7b8" strokeWidth="2" />
      <path d={`M${x} ${y + 6} h96 v40 H${x} Z`} fill="#4a90c2" />
      <path d={`M${x} ${y + 46} h96 v8 l-30 28 h-36 l-30 -28 Z`} fill="#9c6326" />
      <text x={x + 48} y={y + 104} textAnchor="middle" className="viz-label">{label}</text>
    </g>
  );
}

function PrimaryPage() {
  const orange = '#d98a3a';
  return (
    <svg viewBox="0 0 940 470" className="viz-svg">
      {/* inlet */}
      <rect x={40} y={205} width="70" height="30" fill="#fff" stroke="#9aa7b8" />
      <text x={75} y={224} textAnchor="middle" className="viz-val">75.67</text>
      <text x={75} y={258} textAnchor="middle" className="viz-gtext">Inlet Flow (m³/hr)</text>
      <Pipe d="M110 250 H210 V120 H250" flowing color={orange} />
      <Pipe d="M210 250 V360 H250" flowing color={orange} />
      <circle cx="210" cy="250" r="6" fill="#9aa7b8" />

      {/* top train */}
      <Pipe d="M250 120 H760" flowing color={orange} />
      <Gauge x={262} y={70} level={42} label="Level" h={90} />
      <OnOff x={360} y={56} on />
      <Screen x={360} y={120} label="Coarse Screen-1" />
      <OnOff x={470} y={56} on />
      <Screen x={470} y={120} label="Fine Screen-1" />
      <Gauge x={560} y={70} level={38} label="Level" h={90} />
      <GritChannel x={640} y={86} label="Grit Channel-1" />

      {/* bottom train */}
      <Pipe d="M250 360 H760" flowing color={orange} />
      <Gauge x={262} y={310} level={40} label="Level" h={90} />
      <OnOff x={360} y={296} on />
      <Screen x={360} y={360} label="Coarse Screen-2" />
      <OnOff x={470} y={296} on={false} />
      <Screen x={470} y={360} label="Fine Screen-2" />
      <Gauge x={560} y={310} level={36} label="Level" h={90} />
      <GritChannel x={640} y={326} label="Grit Channel-2" />
    </svg>
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
        {v.section === 'primary' ? (
          <PrimaryPage />
        ) : (
          <svg viewBox="0 0 900 400" className="viz-svg">
            {v.highlight === 'level' && <rect x="24" y="96" width="190" height="220" className="viz-hl" />}
            {v.highlight === 'onoff' && <rect x="300" y="70" width="130" height="260" className="viz-hl" />}
            {v.highlight === 'animation' && <rect x="190" y="40" width="660" height="290" className="viz-hl" />}

            <Pipe d="M170 200 H300" flowing={anyFlow} />
            <Pipe d="M300 200 V120 H334" flowing={v.pump1On} />
            <Pipe d="M300 200 V280 H334" flowing={v.pump2On} />
            <Pipe d="M386 120 H470 V200 H600" flowing={v.pump1On} />
            <Pipe d="M386 280 H470 V200" flowing={v.pump2On} />
            <Pipe d="M780 200 H860" flowing={anyFlow} />
            <circle cx="300" cy="200" r="6" fill="#9aa7b8" />

            <Tank x={40} y={110} w={130} h={160} level={v.collectionLevel} label="Collection Tank" />
            <Gauge x={182} y={120} level={v.collectionLevel} label="Collection LT" />
            <Pump x={360} y={120} on={v.pump1On} label="Reactor Feed Pump 1" />
            <Pump x={360} y={280} on={v.pump2On} label="Reactor Feed Pump 2" />
            <Tank x={600} y={110} w={180} h={170} level={v.aerationLevel} label="Aeration Tank" bubbles={anyFlow} />
            <Pipe d="M700 88 V110" flowing={anyFlow} color="#7cc242" />
            <Blower x={700} y={64} on={anyFlow} label="Air Blower" />
          </svg>
        )}
      </div>
    </div>
  );
}
