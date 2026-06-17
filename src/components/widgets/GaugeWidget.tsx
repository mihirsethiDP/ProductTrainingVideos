import type { WidgetState } from '../../data/types';
import { ACCENTS, LEVEL_COLORS, valueFraction } from './shared';

// Gauge geometry: a 180° semicircle. fraction 0 = left end, 1 = right end.
const CX = 100;
const CY = 100;
const R = 78;
const SW = 16;

function polar(frac: number): [number, number] {
  const angle = ((180 - 180 * frac) * Math.PI) / 180;
  return [CX + R * Math.cos(angle), CY - R * Math.sin(angle)];
}

function arcPath(f0: number, f1: number): string {
  const [x0, y0] = polar(f0);
  const [x1, y1] = polar(f1);
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

/**
 * Recreation of the DigitalPaani "Gauge" widget. Same data engine as the
 * Range Number widget, with a scale (min/max) and the reading plotted on a
 * semicircular arc. Without thresholds it shows a progress fill; with
 * thresholds the arc is painted in good/warning/critical bands.
 */
export default function GaugeWidget(props: WidgetState) {
  const {
    title = 'MBR-1 Flux (Ref. 20-30 LMH)',
    value = '42.08',
    unit,
    unitTag = 'Amity University Noida',
    fromLabel = 'Jun 16 | 00:00',
    toLabel = 'Jun 16 | 23:59',
    changePct,
    accent = 'teal',
    min = 0,
    max = 100,
    timeframeLabel,
    thresholds,
    highlight = null,
  } = props;

  const acc = ACCENTS[accent];
  const frac = valueFraction(value, min, max);
  const [kx, ky] = polar(frac);

  return (
    <div className={`gw gw-${accent}`} style={{ ['--gw-accent' as string]: acc.solid }}>
      <div className="gw-head">
        <span className="gw-title">{title}</span>
        <span className={`gw-menu${highlight === 'menu' ? ' ring' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </span>
      </div>

      <div className="gw-body">
        {timeframeLabel && <span className="rnw-tf-badge">{timeframeLabel}</span>}

        <svg
          className={`gw-svg${highlight === 'scale' || highlight === 'thresholds' ? ' ring' : ''}`}
          viewBox="0 0 200 124"
        >
          {/* track */}
          <path d={arcPath(0, 1)} stroke="#e9eef2" strokeWidth={SW} fill="none" strokeLinecap="round" />

          {thresholds ? (
            thresholds.map((b, i) => (
              <path
                key={i}
                d={arcPath(valueFraction(b.from, min, max), valueFraction(b.to, min, max))}
                stroke={LEVEL_COLORS[b.level]}
                strokeWidth={SW}
                fill="none"
              />
            ))
          ) : (
            <path d={arcPath(0, frac)} stroke={acc.solid} strokeWidth={SW} fill="none" strokeLinecap="round" />
          )}

          {/* value + optional unit */}
          <text x="100" y="92" textAnchor="middle" className="gw-value-text" fill={acc.text}>
            {value}
            {unit && <tspan className="gw-unit-text">{unit}</tspan>}
          </text>

          {/* reading marker */}
          <circle cx={kx} cy={ky} r="11" fill="#fff" stroke={acc.solid} strokeWidth="3" />
        </svg>

        <div className={`gw-tag${highlight === 'tag' ? ' ring' : ''}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5a2 2 0 0 1 2-2h7l9 9-9 9-9-9V5zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          {unitTag}
        </div>
      </div>

      <div className="gw-foot">
        <div className={`gw-dates${highlight === 'timeframe' ? ' ring' : ''}`}>
          <div>{fromLabel}</div>
          <div>{toLabel}</div>
        </div>
        {changePct !== undefined && (
          <div className={`gw-change${highlight === 'change' ? ' ring' : ''}`}>
            <span className="gw-change-num">{changePct}</span>
            <span className="gw-change-pct">%</span>
          </div>
        )}
      </div>
    </div>
  );
}
