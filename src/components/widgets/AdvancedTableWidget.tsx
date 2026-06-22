import type { WidgetState } from '../../data/types';

/**
 * Recreation of the DigitalPaani "Advanced Table" — the 3-axis table
 * (Time × Sensor × Aggregation). Unlike every other widget it keeps its own
 * time via the Reference selector and does not follow the dashboard range.
 * Driven by WidgetState.advTable.
 */
export default function AdvancedTableWidget({ advTable, title }: WidgetState) {
  if (!advTable) return null;
  const accent = advTable.accent ?? 'purple';
  const heading = title ?? advTable.title ?? 'Advanced Table';
  const ring = advTable.ring;

  return (
    <div className={`adv adv-${accent}`}>
      <div className="adv-top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
        <span className="adv-title">{heading}</span>
        <span className="adv-info">ⓘ</span>
      </div>

      <div className="adv-grid">
        <table className="adv-table">
          <thead>
            <tr>
              <th className={`adv-corner${ring === 'reference' ? ' ring' : ''}`}>
                <span className="adv-ref">
                  <span className="adv-ref-label">Reference</span>
                  <span className="adv-ref-value">{advTable.referenceLabel} ▾</span>
                </span>
              </th>
              {advTable.colHeaders.map((h, i) => (
                <th key={i} className={`adv-colhead${ring === 'columns' ? ' ring' : ''}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {advTable.rows.map((row, ri) => (
              <tr key={ri} className={ring === 'rows' ? 'ring' : undefined}>
                <td className={`adv-rowlabel${advTable.wideRowHeader ? ' wide' : ''}`}>
                  <span className="adv-rowname">{row.label}</span>
                  {row.badge && <span className="adv-badge">{row.badge}</span>}
                </td>
                {row.cells.map((cell, ci) => (
                  <td key={ci} className={`adv-cell${cell.level ? ' ' + cell.level : ''}`}>
                    {cell.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
