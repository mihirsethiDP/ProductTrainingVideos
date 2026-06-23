import type { TaskData, TaskRow, WfStepType, WidgetState } from '../../data/types';

const PRIORITY_CLS: Record<string, string> = { High: 'hi', Medium: 'mid', Low: 'lo' };

// shared colour scheme for the four workflow step types
export const WF_COLORS: Record<WfStepType, { label: string; cls: string }> = {
  todo: { label: 'To Do', cls: 'todo' },
  inProgress: { label: 'In Progress', cls: 'inprogress' },
  done: { label: 'Done', cls: 'done' },
  action: { label: 'Action', cls: 'action' },
};

function FilterField({ label, value, placeholder }: { label: string; value?: string; placeholder?: string }) {
  return (
    <div className="tsk-field">
      <span className="tsk-field-label">{label}</span>
      <span className={`tsk-field-val${value ? '' : ' ph'}`}>{value ?? placeholder} ▾</span>
    </div>
  );
}

function TaskListRow({ r, hl }: { r: TaskRow; hl: TaskData['highlight'] }) {
  return (
    <tr className={r.ring ? 'ring' : undefined}>
      <td className="tsk-namecell">
        <div className="tsk-row-name">{r.name}</div>
        <div className="tsk-row-desc">{r.desc}</div>
      </td>
      <td><span className="tsk-plant">{r.plant}</span></td>
      <td className={hl === 'priority' ? 'tsk-hl' : ''}>
        <span className={`tsk-pri ${PRIORITY_CLS[r.priority]}`}>{r.priority}</span>
      </td>
      <td className="tsk-assignee">{r.assignee ?? <span className="tsk-dash">—</span>}</td>
      <td className={hl === 'skills' ? 'tsk-hl' : ''}>
        <div className="tsk-skills">{r.skills.map((s) => <span key={s} className="tsk-skill">{s}</span>)}</div>
      </td>
      <td className={hl === 'status' ? 'tsk-hl' : ''}>
        <span className={`tsk-status ${r.status.toLowerCase()}`}>{r.status === 'Pending' ? 'PENDING' : 'COMPLETED'}</span>
      </td>
      <td className="tsk-action">⋮</td>
    </tr>
  );
}

function DetailCard({ d, hl }: { d: NonNullable<TaskData['detail']>; hl: TaskData['highlight'] }) {
  const cur = d.workflow[d.currentStep];
  const next = d.workflow[d.currentStep + 1];
  const wf = WF_COLORS[cur.type];
  return (
    <div className="tsk-detail">
      {d.toast && <div className="tsk-toast">✓ Transition updated successfully</div>}
      <div className="tsk-d-name">{d.name}</div>
      <div className="tsk-d-desc">{d.desc}</div>

      <div className={`tsk-d-block${hl === 'details' ? ' ring' : ''}`}>
        <div className="tsk-d-h">Details</div>
        <ol className="tsk-d-steps">{d.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
      </div>

      <div className={`tsk-d-block${hl === 'skillsd' ? ' ring' : ''}`}>
        <div className="tsk-d-h">Skills</div>
        <div className="tsk-skills">{d.skills.map((s) => <span key={s} className="tsk-skill">{s}</span>)}</div>
      </div>

      <div className={`tsk-d-block${hl === 'meta' ? ' ring' : ''}`}>
        <div className="tsk-d-h">Additional Details</div>
        <div className="tsk-d-meta">
          {d.meta.map((m) => (
            <div key={m.label} className="tsk-d-metarow"><span>{m.label}</span><b>{m.value}</b></div>
          ))}
        </div>
      </div>

      <div className={`tsk-d-step ${wf.cls}${hl === 'step' || hl === 'action' ? ' ring' : ''}`}>
        <div className="tsk-d-step-btn">
          <span>{cur.label.toUpperCase()}</span><span className="tsk-caret">▾</span>
        </div>
        {d.expanded && <div className="tsk-d-step-body">Tap to confirm this step and move the task forward.</div>}
      </div>
      {next && <div className={`tsk-d-next${hl === 'next' ? ' ring' : ''}`}>{next.label}</div>}

      <div className={`tsk-d-history${hl === 'history' ? ' ring' : ''}`}>
        {d.showMedia
          ? <div className="tsk-d-media">⬆ Upload media / notify — then the task is Done</div>
          : <><div className="tsk-d-mediaicon">🖼</div><div className="tsk-d-nohistory">No Task History Available</div></>}
      </div>
    </div>
  );
}

export default function TaskWidget({ task: data }: WidgetState) {
  if (!data) return null;
  if (data.mode === 'detail') return <DetailCard d={data.detail!} hl={data.highlight} />;

  return (
    <div className="tsk">
      <div className="tsk-top">
        <span className="tsk-title">Task List</span>
        <span className={`tsk-add${data.highlight === 'addtask' ? ' ring' : ''}`}>+ ADD TASK</span>
      </div>
      <div className={`tsk-filters${data.highlight === 'filters' ? ' ring' : ''}`}>
        <span className="tsk-search">🔍 Search Operator Task</span>
        <FilterField label="Plant" value="Adani Navi Mumbai 4.5 MLD" />
        <FilterField label="User" placeholder="User" />
        <FilterField label="Skill" placeholder="Skill" />
        <FilterField label="Completion Status" value={data.completionFilter ?? 'Pending'} />
      </div>
      <div className="tsk-scroll">
        <table className="tsk-table">
          <thead>
            <tr className={data.highlight === 'columns' ? 'tsk-th-hl' : ''}>
              <th>Name &amp; Description</th><th>Plant Name</th>
              <th className={data.highlight === 'priority' ? 'tsk-th-hl' : ''}>Priority Level</th>
              <th>Assignee</th>
              <th className={data.highlight === 'skills' ? 'tsk-th-hl' : ''}>Task Skills</th>
              <th className={data.highlight === 'status' ? 'tsk-th-hl' : ''}>Completion Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.rows?.map((r, i) => <TaskListRow key={i} r={r} hl={data.highlight} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
