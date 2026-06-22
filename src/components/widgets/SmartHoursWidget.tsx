import type { WidgetState } from '../../data/types';

const PRESETS = ['Today', 'Yesterday', 'Last 24 Hours', 'Last 3 Days', 'Last 7 Days', 'Custom'];

/**
 * Recreation of the dashboard time-range dialog, focused on the Smart Hours
 * control. Driven by WidgetState.smartHours. Used by the Smart Hours lesson to
 * illustrate freezing a rolling daily time window.
 */
export default function SmartHoursWidget({ smartHours: s }: WidgetState) {
  if (!s) return null;
  return (
    <div className="sh">
      <div className="sh-left">
        <div className="sh-eyebrow">SELECTED PERIOD</div>
        <div className="sh-period">{s.periodLabel}</div>
        {s.note && <div className="sh-note">{s.note}</div>}

        <div className={`sh-fromto${s.highlight === 'fromto' ? ' ring' : ''}`}>
          <div className="sh-field">
            <span className="sh-field-label">From</span>
            <span className="sh-field-value">{s.from} 🕐</span>
          </div>
          <div className="sh-field">
            <span className="sh-field-label">To</span>
            <span className="sh-field-value">{s.to} 🕐</span>
          </div>
        </div>

        <div className="sh-format">
          <span className="sh-format-label">Time Format :</span>
          <span className="sh-seg active">12 Hour</span>
          <span className="sh-seg">24 Hour</span>
        </div>

        <div className={`sh-card${s.smartActive ? ' active' : ''}${s.highlight === 'smart' ? ' ring' : ''}`}>
          <div className="sh-card-top">
            <span className="sh-check">{s.smartActive ? '☑' : '☐'}</span>
            <span className="sh-card-title">Smart Hours</span>
            {s.smartActive && <span className="sh-badge">ACTIVE</span>}
          </div>
          <div className="sh-card-desc">Apply relative daily time slot to historical and future date ranges.</div>
          <div className="sh-card-window">🕐 {s.from} — {s.to}</div>
        </div>

        <div className="sh-gran">
          <div className="sh-gran-label">GRANULARITY</div>
          <div className="sh-radio">
            <span className={`sh-dot${s.granularity === 'Hours' ? ' on' : ''}`} /> Hours
          </div>
          <div className="sh-radio">
            <span className={`sh-dot${s.granularity === 'Days' ? ' on' : ''}`} /> Days
          </div>
        </div>
      </div>

      <div className="sh-right">
        <div className={`sh-presets${s.highlight === 'preset' ? ' ring' : ''}`}>
          {PRESETS.map((p) => (
            <span key={p} className={`sh-preset${p === s.preset ? ' active' : ''}`}>{p}</span>
          ))}
        </div>
        <div className="sh-cal">
          <div className="sh-cal-title">June 2026</div>
          <div className="sh-cal-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <span key={i} className="sh-cal-h">{d}</span>
            ))}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
              <span key={d} className={`sh-cal-d${d === 21 || d === 22 ? ' sel' : ''}`}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
