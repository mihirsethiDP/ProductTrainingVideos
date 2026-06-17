import type { WidgetState } from '../../data/types';
import { ACCENTS, LEVEL_COLORS, valueFraction, zoneColor } from './shared';

// The product's aggregation options, in the order they appear in the app.
const AGGREGATIONS = [
  'Raw (current value)',
  'Average',
  'Maximum',
  'Minimum',
  'Last active value',
  'Cumulative',
  'Time-weighted sum',
];

/**
 * A faithful, interactive recreation of the DigitalPaani "Range Number" widget.
 * Driven entirely by WidgetState so each lesson step can highlight a different
 * part, open the aggregation menu, show a time-frame badge, or display
 * good/warning/critical thresholds (a colour bar + zone-coloured value).
 */
export default function RangeNumberWidget(props: WidgetState) {
  const {
    title = 'STP Energy Consumption',
    value = '143.49',
    unit,
    unitTag = 'STP',
    fromLabel = 'Jun 16 | 15:04',
    toLabel = 'Jun 17 | 15:04',
    changePct = '0',
    accent = 'purple',
    aggregation,
    aggregationMenu = false,
    timeframeLabel,
    min = 0,
    max = 100,
    thresholds,
    highlight = null,
  } = props;

  const acc = ACCENTS[accent];
  const valueColor = (thresholds && zoneColor(value, thresholds)) || acc.text;
  const frac = valueFraction(value, min, max);

  return (
    <div className={`rnw rnw-${accent}`} style={{ ['--rnw-accent' as string]: acc.solid }}>
      <div className="rnw-head">
        <span className="rnw-title">{title}</span>
        <span className={`rnw-menu${highlight === 'menu' ? ' ring' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </span>
      </div>

      <div className="rnw-body">
        {timeframeLabel && <span className="rnw-tf-badge">{timeframeLabel}</span>}

        {aggregationMenu && (
          <div className="rnw-aggmenu">
            {AGGREGATIONS.map((a) => {
              const sel = !!aggregation && a.toLowerCase().startsWith(aggregation.toLowerCase());
              return (
                <div key={a} className={`item${sel ? ' sel' : ''}`}>
                  <span>{a}</span>
                  {sel && <span>✓</span>}
                </div>
              );
            })}
          </div>
        )}

        {!aggregationMenu && aggregation && <span className="rnw-agg-badge">{aggregation}</span>}

        <div className={`rnw-value${highlight === 'value' ? ' ring' : ''}`} style={{ color: valueColor }}>
          {value}
          {unit && <span className="rnw-value-unit">{unit}</span>}
        </div>

        {thresholds && (
          <div className={`rnw-threshbar${highlight === 'thresholds' ? ' ring' : ''}`}>
            {thresholds.map((b, i) => (
              <span
                key={i}
                className="seg"
                style={{
                  width: `${((b.to - b.from) / (max - min)) * 100}%`,
                  background: LEVEL_COLORS[b.level],
                }}
              />
            ))}
            <span className="marker" style={{ left: `${frac * 100}%`, borderColor: acc.solid }} />
          </div>
        )}

        <div className={`rnw-tag${highlight === 'tag' ? ' ring' : ''}`}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5a2 2 0 0 1 2-2h7l9 9-9 9-9-9V5zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          {unitTag}
        </div>
      </div>

      <div className="rnw-foot">
        <div className={`rnw-dates${highlight === 'timeframe' ? ' ring' : ''}`}>
          <div>{fromLabel}</div>
          <div>{toLabel}</div>
        </div>
        <div className={`rnw-change${highlight === 'change' ? ' ring' : ''}`}>
          <span className="rnw-change-num">{changePct}</span>
          <span className="rnw-change-pct">%</span>
        </div>
      </div>
    </div>
  );
}
