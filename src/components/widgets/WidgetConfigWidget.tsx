import type { ConfigData, WidgetState } from '../../data/types';

const ringIf = (on: boolean) => (on ? ' ring' : '');

function Section({ title, hl, children }: { title: string; hl: boolean; children: React.ReactNode }) {
  return (
    <div className={`cfg-card${ringIf(hl)}`}>
      <div className="cfg-card-title">{title}</div>
      {children}
    </div>
  );
}

function Dropdown({ value, menu }: { value?: string; menu?: string[] }) {
  return (
    <div className="cfg-dd-wrap">
      <div className="cfg-dd">{value ?? '—'} ▾</div>
      {menu && (
        <div className="cfg-dd-menu">
          {menu.map((m) => (
            <div key={m} className={`cfg-dd-opt${m === value ? ' sel' : ''}`}>{m}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WidgetConfigWidget({ config: d }: WidgetState) {
  if (!d) return null;
  const c: ConfigData = d;
  const h = c.highlight;

  return (
    <div className="cfg">
      <div className="cfg-head">
        <span className="cfg-head-icon">⚙</span>
        <span className="cfg-head-title">Configure · {c.widget}</span>
        {c.layoutChoice && (
          <div className={`cfg-layouts${ringIf(h === 'layout')}`}>
            <span className={`cfg-layout${c.layoutChoice === 'auto' ? ' on' : ''}`}>Auto layout</span>
            <span className={`cfg-layout${c.layoutChoice === 'drag' ? ' on' : ''}`}>Drag &amp; drop</span>
          </div>
        )}
      </div>

      <div className="cfg-body">
        {/* left: sensors */}
        {c.sensors && (
          <div className={`cfg-sensors${ringIf(h === 'sensors')}`}>
            <div className="cfg-col-label">Sensors</div>
            {c.sensors.map((s, i) =>
              s.add ? (
                <div key={i} className="cfg-sensor add">+ Add sensor</div>
              ) : (
                <div key={i} className={`cfg-sensor${s.active ? ' active' : ''}`}>
                  <span className="cfg-sensor-name">{s.name}</span>
                  {s.sub && <span className="cfg-sensor-sub">{s.sub}</span>}
                </div>
              ),
            )}
          </div>
        )}

        {/* right: settings */}
        <div className="cfg-settings">
          {(c.nickname !== undefined || c.unit !== undefined || c.category !== undefined) && (
            <Section title="Widget Theme" hl={h === 'theme' || h === 'name'}>
              {c.nickname !== undefined && (
                <label className="cfg-field"><span>Nickname</span><div className="cfg-input">{c.nickname || 'Untitled widget'}</div></label>
              )}
              {c.unit !== undefined && (
                <label className="cfg-field"><span>Unit</span><Dropdown value={c.unit} menu={c.unitMenu} /></label>
              )}
              {c.category !== undefined && (
                <label className="cfg-field"><span>Widget category</span><Dropdown value={c.category} menu={c.categoryMenu} /></label>
              )}
            </Section>
          )}

          {c.checks && (
            <Section title="Display options" hl={h === 'checks'}>
              {c.checks.map((ck) => (
                <div key={ck.label} className="cfg-check">
                  <span className={`cfg-box${ck.on ? ' on' : ''}`}>{ck.on ? '✓' : ''}</span>
                  <span>{ck.label}</span>
                </div>
              ))}
            </Section>
          )}

          {c.aggregation !== undefined && (
            <Section title="Widget Details" hl={h === 'aggregation'}>
              <label className="cfg-field"><span>Aggregation</span><Dropdown value={c.aggregation} menu={c.aggMenu} /></label>
            </Section>
          )}

          {c.axes && (
            <Section title="Axes" hl={h === 'axes'}>
              {c.axes.map((a) => (
                <label key={a.label} className="cfg-field"><span>{a.label}</span><div className="cfg-dd">{a.value} ▾</div></label>
              ))}
            </Section>
          )}

          {c.graphType && (
            <Section title="Chart type" hl={h === 'graphtype'}>
              <div className="cfg-seg">
                <span className={`cfg-seg-opt${c.graphType === 'line' ? ' on' : ''}`}>Line</span>
                <span className={`cfg-seg-opt${c.graphType === 'bar' ? ' on' : ''}`}>Bar</span>
              </div>
            </Section>
          )}

          {c.extras && (
            <Section title="Options" hl={h === 'extras'}>
              {c.extras.map((e) => (
                <label key={e.label} className="cfg-field"><span>{e.label}</span><div className="cfg-dd">{e.value}</div></label>
              ))}
            </Section>
          )}

          {c.threshold && (
            <Section title="Threshold Configuration" hl={h === 'threshold'}>
              <div className="cfg-thr-row">
                <label className="cfg-field sm"><span>Min</span><div className="cfg-input">{c.threshold.min}</div></label>
                <label className="cfg-field sm"><span>Max</span><div className="cfg-input">{c.threshold.max}</div></label>
              </div>
              <div className="cfg-thr-band safe"><span className="cfg-dot" />Safe · {c.threshold.safe}</div>
              <div className="cfg-thr-band caution"><span className="cfg-dot" />Caution · {c.threshold.caution}</div>
              <div className="cfg-thr-band critical"><span className="cfg-dot" />Critical · {c.threshold.critical}</div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
