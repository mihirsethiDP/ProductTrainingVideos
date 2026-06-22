import type { InsightRow, InsightsData, WidgetState } from '../../data/types';

const TYPE_ICON: Record<string, string> = { Warning: '⚠', Issue: '⚙', Achievement: '🏆' };
const PRIORITY: Record<string, { sym: string; cls: string }> = {
  high: { sym: '↑', cls: 'hi' },
  medium: { sym: '=', cls: 'mid' },
  low: { sym: '↓', cls: 'lo' },
};

function TypeBadge({ type }: { type: InsightRow['type'] }) {
  return <span className={`ins-badge ${type.toLowerCase()}`}>{TYPE_ICON[type]} {type}</span>;
}

function DetailCard({ ins, zeroAuth, highlight }: { ins: InsightRow; zeroAuth?: boolean; highlight?: InsightsData['highlight'] }) {
  return (
    <div className="ins-detail">
      {zeroAuth && (
        <div className={`ins-zerobanner${highlight === 'zeroauth' ? ' ring' : ''}`}>🔓 Opened via secure link — no login required</div>
      )}
      <div className="ins-detail-top">
        <TypeBadge type={ins.type} />
        <span className={`ins-pri ${PRIORITY[ins.priority].cls}`}>{PRIORITY[ins.priority].sym} {ins.priority}</span>
        <span className={`ins-status ${ins.status.toLowerCase()}`}>{ins.status}</span>
      </div>
      <div className="ins-detail-name">{ins.name}</div>
      <div className="ins-detail-meta">{ins.asset}{ins.equipment ? ` · ${ins.equipment}` : ''} · {ins.ago}</div>
      <div className="ins-detail-desc">{ins.desc}</div>
      {ins.action && (
        <div className={`ins-action${highlight === 'action' ? ' ring' : ''}`}>
          <span className="ins-action-label">Recommended action</span>
          {ins.action}
        </div>
      )}
    </div>
  );
}

export default function InsightsWidget({ insights: data }: WidgetState) {
  if (!data) return null;
  const d: InsightsData = data;

  if (d.mode === 'detail') return <DetailCard ins={d.insight!} zeroAuth={d.zeroAuth} highlight={d.highlight} />;

  if (d.mode === 'whatsapp') {
    const ins = d.insight!;
    return (
      <div className="ins-wa">
        <div className="ins-wa-bar">DigitalPaani · WhatsApp</div>
        <div className="ins-wa-body">
          <div className="ins-wa-bubble">
            <div className="ins-wa-head">{TYPE_ICON[ins.type]} New insight · {ins.asset}</div>
            <div className="ins-wa-name">{ins.name}</div>
            <div className="ins-wa-desc">{ins.desc}</div>
            <div className={`ins-wa-link${d.highlight === 'link' ? ' ring' : ''}`}>🔗 View Insight →</div>
            <div className="ins-wa-note">Opens instantly · no login</div>
          </div>
        </div>
      </div>
    );
  }

  if (d.mode === 'digest') {
    const g = d.digest!;
    return (
      <div className="ins-digest">
        <div className="ins-digest-head">📬 Insights Digest <span className="ins-digest-range">{g.range}</span></div>
        <div className={`ins-digest-counts${d.highlight === 'counts' ? ' ring' : ''}`}>
          <div className="ins-dc"><span className="ins-dc-num new">{g.newCount}</span>New</div>
          <div className="ins-dc"><span className="ins-dc-num closed">{g.closedCount}</span>Closed</div>
          <div className="ins-dc"><span className="ins-dc-num open">{g.openTotal}</span>Total Open</div>
        </div>
        <div className={`ins-digest-latest${d.highlight === 'latest' ? ' ring' : ''}`}>
          <div className="ins-digest-sub">Latest open insight</div>
          <DetailCard ins={g.latest} />
        </div>
        <div className={`ins-digest-link${d.highlight === 'link' ? ' ring' : ''}`}>Open Insights Page →</div>
        {g.plants && (
          <div className={`ins-digest-plants${d.highlight === 'plants' ? ' ring' : ''}`}>
            <span className="ins-digest-sub">Plants in this digest</span>
            <div className="ins-plant-chips">{g.plants.map((p) => <span key={p} className="ins-plant-chip">{p}</span>)}</div>
          </div>
        )}
      </div>
    );
  }

  // page
  const s = d.stats!;
  return (
    <div className="ins">
      <div className="ins-top">
        <span className="ins-title">Insights</span>
        <span className={`ins-create${d.highlight === 'create' ? ' ring' : ''}`}>+ CREATE INSIGHT</span>
      </div>
      <div className={`ins-filters${d.highlight === 'filters' ? ' ring' : ''}`}>
        <span className="ins-search">🔍 Search Insight</span>
        <span className="ins-fchip">Type ▾</span>
        <span className="ins-fchip">Priority ▾</span>
        <span className="ins-fchip">Relative Time ▾</span>
      </div>
      <div className={`ins-stats${d.highlight === 'stats' ? ' ring' : ''}`}>
        <div className="ins-stat all"><span className="ins-stat-num">{s.all}</span> All Insights</div>
        <div className="ins-stat open"><span className="ins-stat-num">{s.openAlarms}</span> Open Alarms</div>
        <div className="ins-stat closed"><span className="ins-stat-num">{s.closedAlarms}</span> Closed Alarms</div>
        <div className="ins-stat ach"><span className="ins-stat-num">{s.achievements}</span> Achievements</div>
      </div>
      <div className="ins-scroll">
        <table className="ins-table">
          <thead><tr><th>Name &amp; Description</th><th className={d.highlight === 'priority' ? 'ins-th-hl' : ''}>Priority</th><th>Asset Name</th><th>Equipment</th><th className={d.highlight === 'types' ? 'ins-th-hl' : ''}>Type</th></tr></thead>
          <tbody>
            {d.insights?.map((it, i) => (
              <tr key={i} className={it.ring ? 'ring' : undefined}>
                <td>
                  <div className="ins-row-name">{TYPE_ICON[it.type]} {it.name}</div>
                  <div className="ins-row-desc">{it.desc}</div>
                  <div className="ins-row-meta">{it.ago} | <span className={`ins-st ${it.status.toLowerCase()}`}>{it.status}</span></div>
                </td>
                <td className={`ins-pri-cell ${d.highlight === 'priority' ? 'ins-hl' : ''}`}><span className={`ins-pri ${PRIORITY[it.priority].cls}`}>{PRIORITY[it.priority].sym}</span></td>
                <td className="ins-asset">{it.asset}</td>
                <td>{it.equipment ? <span className="ins-equip">{it.equipment}</span> : <span className="ins-dash">—</span>}</td>
                <td className={d.highlight === 'types' ? 'ins-hl' : ''}><TypeBadge type={it.type} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
