import { Fragment } from 'react';
import type { WidgetState } from '../../data/types';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`et-chev${open ? ' open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function cellClass(level?: string, ring?: boolean) {
  return `et-cell${level ? ' ' + level : ''}${ring ? ' ring' : ''}`;
}

/**
 * Recreation of the DigitalPaani "Elastic Table" widget: grouped sensors,
 * multiple aggregations per sensor, many time slots, threshold highlighting,
 * and a rows-or-columns layout. Data comes from WidgetState.table.
 */
export default function ElasticTableWidget({ table, title = 'Water Quality' }: WidgetState) {
  if (!table) return null;
  const layout = table.layout ?? 'rows';

  return (
    <div className="et">
      <div className="et-topbar">
        <span className="et-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="9" x2="9" y2="21" />
          </svg>
          {title}
        </span>
        <span className="et-tools">
          <span className="et-filter">⏷ Filter ▾</span>
          <span className="et-icons">⤓ ⤢ ✎</span>
        </span>
      </div>

      <div className="et-scroll">
        {layout === 'rows' ? <RowsView table={table} /> : <ColumnsView table={table} />}
      </div>
    </div>
  );
}

function RowsView({ table }: { table: NonNullable<WidgetState['table']> }) {
  const span = 2 + table.timeColumns.length;
  return (
    <table className="et-table">
      <thead>
        <tr>
          <th className="et-corner" colSpan={2}>SENSOR × TIME</th>
          {table.timeColumns.map((c, i) => (
            <th key={i} className={`et-timehead${c.ring ? ' ring' : ''}`}>
              <div>{c.label}</div>
              {c.sub && <div className="sub">{c.sub}</div>}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.groups.map((g, gi) => (
          <Fragment key={gi}>
            <tr className={`et-group${g.ring ? ' ring' : ''}`}>
              <td colSpan={span}>
                <Chevron open={!g.collapsed} />
                <span className="et-gname">{g.name}</span>
                {g.collapsed && g.summary && <span className="et-summary">{g.summary}</span>}
              </td>
            </tr>
            {!g.collapsed &&
              g.sensors?.map((s, si) =>
                s.rows.map((row, ri) => (
                  <tr key={`${si}-${ri}`} className={`et-row${s.ring || row.ring ? ' ring' : ''}`}>
                    {ri === 0 && (
                      <td className="et-sensor" rowSpan={s.rows.length}>
                        <span className="et-sname">{s.name}</span>
                        <span className="et-info">ⓘ</span>
                      </td>
                    )}
                    <td className="et-agg">{row.aggregation}</td>
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className={cellClass(cell.level, cell.ring)}>
                        {cell.value}
                      </td>
                    ))}
                  </tr>
                )),
              )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

/** Transposed view: time slots down the rows, sensors across the columns (first aggregation only). */
function ColumnsView({ table }: { table: NonNullable<WidgetState['table']> }) {
  const sensors = table.groups.flatMap((g) => g.sensors ?? []);
  return (
    <table className="et-table">
      <thead>
        <tr>
          <th className="et-corner">TIME × SENSOR</th>
          {sensors.map((s, i) => (
            <th key={i} className={`et-timehead${s.ring ? ' ring' : ''}`}>
              <div>{s.name}</div>
              <div className="sub">{s.rows[0]?.aggregation}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.timeColumns.map((c, ci) => (
          <tr key={ci} className="et-row">
            <td className="et-sensor">
              <span className="et-sname">{c.label}</span>
            </td>
            {sensors.map((s, si) => {
              const cell = s.rows[0]?.cells[ci];
              return (
                <td key={si} className={cellClass(cell?.level, cell?.ring)}>
                  {cell?.value ?? '—'}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
