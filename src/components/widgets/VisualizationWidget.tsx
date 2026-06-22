import type { VizData, WidgetState } from '../../data/types';

const IMPELLER = 'M0 -11 C4 -3.5 3.5 -4 11 0 C3.5 4 4 3.5 0 11 C-4 3.5 -3.5 4 -11 0 C-3.5 -4 -4 -3.5 0 -11 Z';
const PADDLE = 'M0 -16 C6 -5 5 -6 16 0 C5 6 6 5 0 16 C-6 5 -5 6 -16 0 C-5 -6 -6 -5 0 -16 Z';
const spinStyle = { transformBox: 'fill-box', transformOrigin: 'center' } as React.CSSProperties;

function Pump({ x, y, on, label }: { x: number; y: number; on: boolean; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="26" fill="#eef1f4" stroke="#c4ccd6" strokeWidth="2" />
      <circle cx={x} cy={y} r="22" fill="none" stroke={on ? '#3aaa35' : '#d23b30'} strokeWidth="4" />
      <g className={on ? 'viz-spin' : ''} style={spinStyle} transform={`translate(${x} ${y})`}>
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
      <g className={on ? 'viz-spin' : ''} style={spinStyle} transform={`translate(${x} ${y})`}>
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

function Flocculator({ x, y, w, h, level, on, label }: { x: number; y: number; w: number; h: number; level: number; on: boolean; label: string }) {
  const fillH = (h * level) / 100;
  const fillY = y + (h - fillH);
  const cx = x + w / 2;
  const py = y + h - 42;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#fff" stroke="#9aa7b8" strokeWidth="2" />
      <rect x={x} y={fillY} width={w} height={fillH} className="viz-water" />
      <rect x={cx - 9} y={y - 18} width="18" height="18" rx="2" fill="#cfd6df" stroke="#9aa7b8" />
      <line x1={cx} y1={y} x2={cx} y2={py} stroke="#9aa7b8" strokeWidth="2" />
      <g className={on ? 'viz-spin-slow' : ''} style={spinStyle} transform={`translate(${cx} ${py})`}>
        <path d={PADDLE} fill="#eef1f4" stroke="#9aa7b8" strokeWidth="1.4" />
      </g>
      <text x={cx} y={y + h + 20} textAnchor="middle" className="viz-label">{label}</text>
    </g>
  );
}

function Clarifier({ x, y, w, h, label }: { x: number; y: number; w: number; h: number; label: string }) {
  const cx = x + w / 2;
  const waterH = h * 0.6;
  const hopperDrop = 42;
  const body = `M${x} ${y} h${w} v${h} l${-(w / 2 - 16)} ${hopperDrop} h-32 Z`;
  return (
    <g>
      <path d={body} fill="#fff" stroke="#9aa7b8" strokeWidth="2" />
      <rect x={x} y={y} width={w} height={waterH} className="viz-water" />
      <path d={`M${x} ${y + waterH} h${w} v${h - waterH} l${-(w / 2 - 16)} ${hopperDrop} h-32 Z`} className="viz-sludge" />
      <rect x={cx - 18} y={y - 6} width="36" height="14" fill="#dfe3e8" stroke="#9aa7b8" />
      <line x1={cx} y1={y} x2={cx} y2={y + h + hopperDrop - 6} stroke="#cfd6df" strokeWidth="3" />
      <path d={`M${cx} ${y + h - 28} L${cx - 44} ${y + h + 6} M${cx} ${y + h - 28} L${cx + 44} ${y + h + 6}`} stroke="#cfd6df" strokeWidth="3" fill="none" />
      <text x={cx} y={y + h + hopperDrop + 22} textAnchor="middle" className="viz-label">{label}</text>
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
      <rect x={40} y={205} width="70" height="30" fill="#fff" stroke="#9aa7b8" />
      <text x={75} y={224} textAnchor="middle" className="viz-val">75.67</text>
      <text x={75} y={258} textAnchor="middle" className="viz-gtext">Inlet Flow (m³/hr)</text>
      <Pipe d="M110 250 H210 V120 H250" flowing color={orange} />
      <Pipe d="M210 250 V360 H250" flowing color={orange} />
      <circle cx="210" cy="250" r="6" fill="#9aa7b8" />
      <Pipe d="M250 120 H760" flowing color={orange} />
      <Gauge x={262} y={70} level={42} label="Level" h={90} />
      <OnOff x={360} y={56} on />
      <Screen x={360} y={120} label="Coarse Screen-1" />
      <OnOff x={470} y={56} on />
      <Screen x={470} y={120} label="Fine Screen-1" />
      <Gauge x={560} y={70} level={38} label="Level" h={90} />
      <GritChannel x={640} y={86} label="Grit Channel-1" />
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
  const flow = v.pump1On || v.pump2On;

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
          <svg viewBox="0 0 1160 430" className="viz-svg">
            {v.highlight === 'level' && <rect x="14" y="96" width="150" height="210" className="viz-hl" />}
            {v.highlight === 'onoff' && <rect x="262" y="76" width="76" height="230" className="viz-hl" />}
            {v.highlight === 'animation' && <rect x="200" y="44" width="900" height="350" className="viz-hl" />}

            {/* pipes */}
            <Pipe d="M128 190 H232" flowing={flow} />
            <Pipe d="M232 190 V115 H274" flowing={v.pump1On} />
            <Pipe d="M232 190 V265 H274" flowing={v.pump2On} />
            <Pipe d="M326 115 H380 V190 H400" flowing={v.pump1On} />
            <Pipe d="M326 265 H380 V190" flowing={v.pump2On} />
            <Pipe d="M520 190 H580" flowing={flow} />
            <Pipe d="M730 190 H820" flowing={flow} />
            <Pipe d="M1000 175 H1090" flowing={flow} />
            <Pipe d="M910 312 V340 H1090" flowing={flow} color="#b5752a" />
            <circle cx="232" cy="190" r="6" fill="#9aa7b8" />

            {/* equipment */}
            <Tank x={24} y={110} w={104} h={150} level={v.collectionLevel} label="Collection Tank" />
            <Gauge x={138} y={120} level={v.collectionLevel} label="Collection LT" />
            <Pump x={300} y={115} on={v.pump1On} label="Feed Pump 1" />
            <Pump x={300} y={265} on={v.pump2On} label="Feed Pump 2" />
            <Flocculator x={400} y={110} w={120} h={150} level={88} on={flow} label="Flocculation Tank" />
            <Tank x={580} y={110} w={150} h={150} level={v.aerationLevel} label="Aeration Tank" bubbles={flow} />
            <Pipe d="M680 86 V110" flowing={flow} color="#7cc242" />
            <Blower x={680} y={62} on={flow} label="Air Blower" />
            <Clarifier x={820} y={108} w={180} h={130} label="Clarifier" />
          </svg>
        )}
      </div>
    </div>
  );
}
