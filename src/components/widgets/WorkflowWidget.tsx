import type { WidgetState, WorkflowData } from '../../data/types';
import { WF_COLORS } from './TaskWidget';

const LEGEND: { type: keyof typeof WF_COLORS }[] = [
  { type: 'todo' }, { type: 'inProgress' }, { type: 'done' }, { type: 'action' },
];

export default function WorkflowWidget({ workflow: data }: WidgetState) {
  if (!data) return null;
  const d: WorkflowData = data;
  return (
    <div className="wf">
      <div className={`wf-head${d.highlight === 'header' ? ' ring' : ''}`}>
        <div className="wf-field wide">
          <span className="wf-field-label">Workflow Name *</span>
          <span className="wf-field-val">{d.name}</span>
        </div>
        <div className="wf-field wide">
          <span className="wf-field-label">Workflow Description *</span>
          <span className="wf-field-val">{d.description}</span>
        </div>
      </div>
      <div className="wf-head">
        <div className={`wf-field${d.highlight === 'scope' ? ' ring' : ''}`}>
          <span className="wf-field-label">Scope</span>
          <span className="wf-field-val">{d.scope} ▾</span>
        </div>
        <div className="wf-field">
          <span className="wf-field-label">User Group</span>
          <span className="wf-field-val ph">{d.userGroup ?? 'User Group'} ▾</span>
        </div>
      </div>

      <div className="wf-canvas">
        <div className={`wf-legend${d.highlight === 'legend' ? ' ring' : ''}`}>
          {LEGEND.map((l) => (
            <span key={l.type} className={`wf-chip ${WF_COLORS[l.type].cls}`}>{WF_COLORS[l.type].label}</span>
          ))}
        </div>
        <div className={`wf-flow${d.highlight === 'nodes' ? ' ring' : ''}`}>
          {d.nodes.map((n, i) => (
            <div key={i} className="wf-flow-item">
              <div className={`wf-node ${WF_COLORS[n.type].cls}${d.highlight === n.type ? ' ring' : ''}`}>{n.label}</div>
              {i < d.nodes.length - 1 && <span className="wf-arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
