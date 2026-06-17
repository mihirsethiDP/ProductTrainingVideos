import type { WidgetState } from '../../data/types';

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
 * part, open the aggregation menu, or show a time-frame badge.
 */
export default function RangeNumberWidget(props: WidgetState) {
  const {
    title = 'STP Energy Consumption',
    value = '143.49',
    unitTag = 'STP',
    fromLabel = 'Jun 16 | 15:04',
    toLabel = 'Jun 17 | 15:04',
    changePct = '0',
    aggregation,
    aggregationMenu = false,
    timeframeLabel,
    highlight = null,
  } = props;

  return (
    <div className="rnw">
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
              const sel =
                !!aggregation && a.toLowerCase().startsWith(aggregation.toLowerCase());
              return (
                <div key={a} className={`item${sel ? ' sel' : ''}`}>
                  <span>{a}</span>
                  {sel && <span>✓</span>}
                </div>
              );
            })}
          </div>
        )}

        {!aggregationMenu && aggregation && (
          <span className="rnw-agg-badge">{aggregation}</span>
        )}

        <div className={`rnw-value${highlight === 'value' ? ' ring' : ''}`}>{value}</div>

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
