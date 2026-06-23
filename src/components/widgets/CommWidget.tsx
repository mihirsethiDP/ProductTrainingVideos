import type { CommRow, WaStatus, WidgetState } from '../../data/types';

const MEDIUM_ICON: Record<string, string> = { email: '@', sms: '✉', call: '📞', whatsapp: '✎' };
const FILTERS = ['Email', 'SMS', 'Call', 'WhatsApp', 'Report'];
const STATUS_LABEL: Record<WaStatus, string> = {
  delivered: 'Delivered', sent: 'Sent', undelivered: 'Undelivered', read: 'Read', failed: 'Failed',
};

function StatusChip({ status }: { status: WaStatus }) {
  return <span className={`comm-status ${status}`}>{STATUS_LABEL[status]}</span>;
}

function Row({ r }: { r: CommRow }) {
  return (
    <div className={`comm-row${r.ring ? ' ring' : ''}`}>
      <div className="comm-avatar"><span className="comm-medium">{MEDIUM_ICON[r.medium]}</span></div>
      <div className="comm-body">
        <div className="comm-line1">
          <span className="comm-sender">{r.sender}</span>
          {r.status && <><span className="comm-dot">·</span><StatusChip status={r.status} /></>}
        </div>
        <div className="comm-title">{r.title}</div>
        {r.text && <div className="comm-text">{r.text}</div>}
        {r.attachment && <span className="comm-attach">📄 {r.attachment}</span>}
      </div>
      <div className="comm-time">{r.time}</div>
    </div>
  );
}

export default function CommWidget({ comm: data }: WidgetState) {
  if (!data) return null;

  if (data.mode === 'email') {
    const e = data.email!;
    return (
      <div className="comm-modal">
        <div className="comm-modal-head"><span>Email</span><span className="comm-x">✕</span></div>
        <div className="comm-modal-body">
          <div className="comm-f-label">Subject</div>
          <div className="comm-f-subject">{e.subject}</div>
          <div className="comm-f-label">Message</div>
          <div className={`comm-f-msg${data.highlight === 'content' ? ' ring' : ''}`}>
            {e.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {e.attachment && (
            <div className={`comm-f-attach${data.highlight === 'attachment' ? ' ring' : ''}`}>
              <div className="comm-f-label">Attachments</div>
              <div className="comm-attach-card">
                <div className="comm-attach-top"><span>{e.attachment}</span><span className="comm-dl">⬇</span></div>
                <div className="comm-pdf">PDF</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (data.mode === 'whatsapp') {
    const w = data.whatsapp!;
    return (
      <div className="comm-modal wa">
        <div className="comm-modal-head"><span>WhatsApp</span><span className="comm-x">✕</span></div>
        <div className="comm-modal-body">
          <div className="comm-wa-sender">
            <span className="comm-avatar sm"><span className="comm-medium">✎</span></span>
            <span><b>{w.sender}</b> · {w.time}</span>
            {w.status && <StatusChip status={w.status} />}
          </div>
          <div className={`comm-wa-bubble${data.highlight === 'content' ? ' ring' : ''}`}>{w.text}</div>
        </div>
      </div>
    );
  }

  // list
  const active = data.filters ?? [];
  return (
    <div className="comm">
      <div className="comm-pagetitle">Communication</div>
      <div className={`comm-search${data.highlight === 'search' ? ' ring' : ''}`}>🔍 Search</div>
      <div className={`comm-filters${data.highlight === 'filters' || data.highlight === 'mediums' ? ' ring' : ''}`}>
        {FILTERS.map((f) => {
          const on = active.includes(f);
          const hl = data.highlight === 'report' && f === 'Report';
          return <span key={f} className={`comm-chip${on ? ' on' : ''}${hl ? ' ring' : ''}`}>{f}{on ? ' ✕' : ''}</span>;
        })}
        {active.length > 0 && <span className="comm-clear">Clear all</span>}
      </div>
      <div className="comm-list">
        {data.rows?.map((r, i) => <Row key={i} r={r} />)}
      </div>
    </div>
  );
}
