import type { EventChart, EventRow, WidgetState } from '../../data/types';

function MiniChart({ c }: { c: EventChart }) {
  const W = 320, H = 150, padX = 30, padY = 16;
  const span = Math.max(1, c.yMax - c.yMin);
  const x = (i: number) => padX + (i / Math.max(1, c.points.length - 1)) * (W - padX - 8);
  const y = (v: number) => padY + (1 - (v - c.yMin) / span) * (H - padY - 28);
  const line = c.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(p).toFixed(1)}`).join(' ');
  const col = c.color ?? '#4a90c2';
  const ticks = [c.yMax, Math.round((c.yMax + c.yMin) / 2), c.yMin];
  return (
    <div className="ev-chart">
      <div className="ev-chart-title">{c.title}</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="ev-chart-svg">
        {ticks.map((tk, i) => {
          const yy = padY + (i / (ticks.length - 1)) * (H - padY - 28);
          return (
            <g key={i}>
              <line x1={padX} y1={yy} x2={W - 8} y2={yy} stroke="#eef2f7" strokeWidth="1" />
              <text x={padX - 5} y={yy + 3} textAnchor="end" className="ev-chart-tick">{tk}</text>
            </g>
          );
        })}
        <path d={line} fill="none" stroke={col} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        {c.points.map((p, i) => <circle key={i} cx={x(i)} cy={y(p)} r="3" fill="#fff" stroke={col} strokeWidth="2" />)}
        {c.xLabels.map((lb, i) => (
          <text key={i} x={x(i)} y={H - 6} textAnchor="middle" className="ev-chart-xlabel">{lb}</text>
        ))}
      </svg>
    </div>
  );
}

function Stat({ icon, label, value, hl }: { icon: string; label: string; value: string; hl?: boolean }) {
  return (
    <div className={`ev-stat${hl ? ' ring' : ''}`}>
      <span className="ev-stat-label">{label}</span>
      <span className="ev-stat-val"><span className="ev-ic">{icon}</span>{value}</span>
    </div>
  );
}

export default function EventsWidget({ events: data }: WidgetState) {
  if (!data) return null;
  const h = data.highlight;

  if (data.mode === 'detail') {
    const e = data.event!;
    return (
      <div className="ev-modal">
        <div className="ev-modal-head"><span>Event Details</span><span className="ev-x">✕</span></div>
        <div className="ev-modal-body">
          <div className="ev-desc-label">Description</div>
          <div className="ev-desc">{e.desc}</div>

          <div className={`ev-summary${h === 'summary' ? ' ring' : ''}`}>
            <Stat icon="⏱" label="Average Event Duration" value={e.avgDuration} />
            <Stat icon="🔁" label="Average Recurrence Time" value={e.avgRecurrence} />
            <Stat icon="📊" label="Event Frequency" value={e.frequency} />
            <div className="ev-stat">
              <span className="ev-stat-label">Workspace / Asset</span>
              <span className="ev-stat-sub">{e.workspace}</span>
              <span className="ev-stat-sub">{e.asset}</span>
            </div>
            <div className="ev-stat">
              <span className="ev-stat-label">Equipments</span>
              <div className="ev-equip">{e.equipment.map((q) => <span key={q} className="ev-chip">{q}</span>)}</div>
            </div>
          </div>

          {data.logs && (
            <div className={`ev-logs${h === 'logs' ? ' ring' : ''}`}>
              <div className="ev-logs-title">Event History Logs</div>
              {data.logs.map((l, i) => (
                <div key={i} className={`ev-log${l.active ? ' active' : ''}`}>
                  <span className="ev-log-ic">📄</span>
                  <span>{l.start}</span><span className="ev-dot">•</span>
                  <span>{l.end}</span><span className="ev-dot">•</span>
                  <span className="ev-log-dur">{l.duration}</span>
                </div>
              ))}
            </div>
          )}

          {data.charts && (
            <div className={`ev-charts${h === 'charts' ? ' ring' : ''}`}>
              {data.charts.map((c) => <MiniChart key={c.title} c={c} />)}
            </div>
          )}
        </div>
      </div>
    );
  }

  // list
  return (
    <div className="ev">
      <div className="ev-pagetitle">Events</div>
      <div className={`ev-filters${h === 'filters' ? ' ring' : ''}`}>
        <span className="ev-search">🔍 Search Event</span>
        <span className="ev-field">Workspace ▾</span>
        <span className="ev-field"><span className="ev-field-label">Asset</span>{data.assetFilter ?? 'Amity University Noida'} ✕</span>
      </div>
      <div className="ev-scroll">
        <table className="ev-table">
          <thead>
            <tr>
              <th>Name &amp; Description</th>
              <th className={h === 'status' ? 'ev-th-hl' : ''}>Event Status</th>
              <th className={h === 'equipment' ? 'ev-th-hl' : ''}>Equipment(s)</th>
              <th className={h === 'workspace' ? 'ev-th-hl' : ''}>Workspace &amp; Asset</th>
              <th className={h === 'duration' ? 'ev-th-hl' : ''}>Average Event Duration</th>
              <th className={h === 'recurrence' ? 'ev-th-hl' : ''}>Average Recurrence Time</th>
              <th className={h === 'frequency' ? 'ev-th-hl' : ''}>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {data.rows?.map((r: EventRow, i) => (
              <tr key={i} className={r.ring ? 'ring' : undefined}>
                <td>
                  <div className="ev-row-name">{r.name}</div>
                  <div className="ev-row-desc">{r.desc}</div>
                  {r.createdAt && <div className="ev-row-meta">🕐 {r.createdAt}</div>}
                </td>
                <td><span className={`ev-status ${r.status.toLowerCase()}`}>{r.status === 'Active' ? '✓ Active' : 'Inactive'}</span></td>
                <td><div className="ev-equip">{r.equipment.map((q) => <span key={q} className="ev-chip">{q}</span>)}</div></td>
                <td className="ev-wa"><div>{r.workspace}</div><div className="ev-wa-sub">{r.asset}</div></td>
                <td><span className="ev-pill">⏱ {r.avgDuration}</span></td>
                <td><span className="ev-pill">🔁 {r.avgRecurrence}</span></td>
                <td><span className="ev-pill">📊 {r.frequency}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
