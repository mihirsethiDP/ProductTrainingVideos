import type { DataInputData, WidgetState } from '../../data/types';

function StatusBadge({ status }: { status?: string | null }) {
  if (!status) return <span className="di-dash">—</span>;
  const map: Record<string, string> = { ok: '✓ Saved', warning: '! Warning', error: '✕ Error' };
  return <span className={`di-badge ${status}`}>{map[status] ?? status}</span>;
}

export default function DataInputWidget({ dataInput }: WidgetState) {
  if (!dataInput) return null;
  const d: DataInputData = dataInput;

  if (d.mode === 'fileUpload') {
    return (
      <div className="di-fileup">
        <div className="di-fileup-head">
          <span className="di-fileup-title">Data Input Upload</span>
          <span className="di-fileup-x">✕</span>
        </div>
        <div className={`di-fileup-drop${d.highlight === 'upload' ? ' ring' : ''}`}>
          <span className="di-fileup-req">CSV or Excel file *</span>
          <div className="di-fileup-cloud">☁</div>
          <div className="di-fileup-text">Upload with drag and drop or <strong>Browse</strong></div>
        </div>
      </div>
    );
  }

  if (d.mode === 'preview') {
    const p = d.preview!;
    return (
      <div className="di-prev">
        <div className="di-prev-head">
          <div>
            <div className="di-prev-title">Data Input Preview</div>
            <div className="di-prev-sub">Review the uploaded values. Hover a cell for error details; use the pencil to edit editable cells before submitting.</div>
          </div>
          <div className={`di-prev-stats${d.highlight === 'stats' ? ' ring' : ''}`}>
            <strong>Validation Stats:</strong> Total: {p.total} · <span className="di-st-ok">Success: {p.success}</span> · <span className="di-st-fail">Failed: {p.failed}</span>
          </div>
        </div>
        <div className="di-prev-scroll">
          <table className="di-prev-table">
            <thead>
              <tr>
                {p.extraColumns?.map((c) => (
                  <th key={c.header} className={`di-prev-extra${d.highlight === 'detect' ? ' dim' : ''}`}>{c.header}</th>
                ))}
                <th className={`di-prev-tag${d.highlight === 'detect' ? ' axis' : ''}`}>Sensor Tag</th>
                {p.timeColumns.map((t, i) => (
                  <th key={i} className={`di-prev-time${d.highlight === 'detect' ? ' axis' : ''}${d.highlight === 'editcol' ? ' ring' : ''}`}>
                    {t} <span className="di-pencil">✎</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.rows.map((row, ri) => (
                <tr key={ri}>
                  {p.extraColumns?.map((c) => (
                    <td key={c.header} className={`di-prev-extra${d.highlight === 'detect' ? ' dim' : ''}`}>{c.values[ri] ?? ''}</td>
                  ))}
                  <td className={`di-prev-tag${d.highlight === 'detect' ? ' axis' : ''}`}>{row.tag} <span className="di-pencil">✎</span></td>
                  {row.cells.map((cell, ci) => (
                    <td key={ci} className={`di-prev-cell ${cell.level}`}>{cell.value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="di-prev-foot">
          <div className="di-prev-legend">
            <span><i className="di-sw safe" /> Safe</span>
            <span><i className="di-sw warning" /> Warning</span>
            <span><i className="di-sw error" /> Error</span>
            <span><i className="di-sw validation" /> Validation Error</span>
          </div>
          <div className="di-prev-actions">
            <span className={`di-prev-btn${d.highlight === 'revalidate' ? ' ring' : ''}`}>REVALIDATE</span>
            <span className={`di-prev-btn dark${d.highlight === 'submit' ? ' ring' : ''}`}>SUBMIT</span>
          </div>
        </div>
      </div>
    );
  }

  if (d.mode === 'table') {
    return (
      <div className="di">
        <div className="di-head">
          <span className="di-title">{d.title ?? 'Data Input'}</span>
          <span className="di-actions"><span className="di-btn">⬇</span><span className="di-btn dark">⬆ Upload File</span></span>
        </div>
        <div className="di-filters">
          <span className="di-search">🔍 Search Sensor</span>
          <span className="di-filter">Asset(s) ▾</span>
          <span className="di-filter">Equipment ▾</span>
        </div>
        <div className="di-scroll">
          <table className="di-table">
            <thead>
              <tr><th>Sensor</th><th>Ranges</th><th>Enter Value</th><th>Frequency</th><th>Status</th></tr>
            </thead>
            <tbody>
              {d.rows?.map((r, i) => (
                <tr key={i} className={r.ring ? 'ring' : undefined}>
                  <td><div className="di-sensor">{r.sensor}</div><div className="di-asset">{r.asset}</div></td>
                  <td className="di-ranges">
                    {r.validRange && <div><span className="di-rlabel">Valid Range:</span> {r.validRange}</div>}
                    {r.safeRange && <div><span className="di-rlabel">Safe Range:</span> {r.safeRange}</div>}
                  </td>
                  <td>
                    <span className={`di-input${r.status ? ' ' + r.status : ''}`}>{r.enterValue ?? 'Enter value'}</span>
                  </td>
                  <td className="di-freq">{r.frequency}</td>
                  <td><StatusBadge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // card mode
  const c = d.card!;
  return (
    <div className="di-card">
      <div className="di-card-head">
        <div>
          <div className="di-card-sensor">{c.sensor}</div>
          <div className="di-card-asset">{c.asset}</div>
        </div>
        <span className="di-type">{c.typeLabel}</span>
      </div>

      {(c.validRange || c.safeRange) && (
        <div className={`di-card-ranges${d.highlight === 'ranges' ? ' ring' : ''}`}>
          {c.validRange && <span><span className="di-rlabel">Acceptance:</span> {c.validRange}</span>}
          {c.safeRange && <span><span className="di-rlabel">Safe:</span> {c.safeRange}</span>}
        </div>
      )}

      {c.typeLabel === 'Number' && (
        <div className={`di-field${d.highlight === 'value' ? ' ring' : ''}`}>
          <span className="di-field-label">Enter Value</span>
          <div className={`di-value-box ${c.state ?? 'idle'}`}>{c.enteredValue ?? 'Enter value'}</div>
        </div>
      )}
      {c.typeLabel === 'Text' && (
        <div className={`di-field${d.highlight === 'value' ? ' ring' : ''}`}>
          <span className="di-field-label">Enter Text</span>
          <div className="di-value-box idle">{c.textValue ?? 'Type a note…'}</div>
        </div>
      )}
      {c.typeLabel === 'Boolean' && (
        <div className={`di-field${d.highlight === 'value' ? ' ring' : ''}`}>
          <span className="di-field-label">Select</span>
          <div className="di-bool">
            <span className={`di-bool-btn${c.booleanValue === 'yes' ? ' on' : ''}`}>Yes</span>
            <span className={`di-bool-btn${c.booleanValue === 'no' ? ' on' : ''}`}>No</span>
          </div>
        </div>
      )}

      {c.state && c.state !== 'idle' && c.message && (
        <div className={`di-banner ${c.state}${d.highlight === 'state' ? ' ring' : ''}`}>{c.message}</div>
      )}

      {c.media && (
        <div className={`di-media${d.highlight === 'media' ? ' ring' : ''}`}>
          <span className="di-media-title">
            {c.media === 'live' ? '📷 Live Media — take a photo now' : '🖼 Upload Media — gallery or camera'}
          </span>
          <div className="di-media-row">
            {c.media === 'all' && <span className="di-media-btn">Gallery</span>}
            <span className="di-media-btn">Camera</span>
            {c.mediaState === 'done' && <span className="di-media-ok">✓ Uploaded</span>}
            {c.mediaState === 'missing' && <span className="di-media-err">Required</span>}
          </div>
        </div>
      )}

      <div className={`di-submit${d.highlight === 'submit' ? ' ring' : ''}${c.state === 'error' ? ' disabled' : ''}`}>
        {d.submitLabel ?? 'Submit'}
      </div>
    </div>
  );
}
