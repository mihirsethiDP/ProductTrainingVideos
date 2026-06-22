import type { WidgetState } from '../../data/types';

/**
 * Recreation of the DigitalPaani simple "Table" widget: a clean list of
 * sensor tags and their (aggregated) values. Sensor × aggregation only, and
 * it respects the dashboard time range. Driven by WidgetState.simpleTable.
 */
export default function SimpleTableWidget({ simpleTable, title }: WidgetState) {
  if (!simpleTable) return null;
  const heading = title ?? simpleTable.title ?? 'Table';
  const ringValues = simpleTable.highlight === 'values';

  return (
    <div className="stbl">
      <div className="stbl-head">
        <span className="stbl-title">{heading}</span>
        <span className="stbl-menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </span>
      </div>

      {simpleTable.plantTag && (
        <div className="stbl-plantbar">
          <span className={`stbl-plant${simpleTable.highlight === 'plant' ? ' ring' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21V8l6 4V8l6 4V5l6 3v13z" />
            </svg>
            {simpleTable.plantTag}
          </span>
        </div>
      )}

      <div className="stbl-body">
        {simpleTable.rows.map((row, i) => (
          <div key={i} className={`stbl-row${row.ring ? ' ring' : ''}`}>
            <span className="stbl-label">{row.label}</span>
            <span className={`stbl-value${ringValues ? ' ring' : ''}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
