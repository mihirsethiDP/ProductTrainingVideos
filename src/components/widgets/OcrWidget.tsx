import type { OcrData, WidgetState } from '../../data/types';

function LogbookPage({ entries, compact }: { entries: OcrData['entries']; compact?: boolean }) {
  return (
    <div className={`ocr-page${compact ? ' compact' : ''}`}>
      <div className="ocr-page-title">ETP Daily Logbook</div>
      {entries?.map((e, i) => (
        <div className="ocr-line" key={i}>
          <span className="ocr-line-label">{e.label}</span>
          <span className="ocr-line-value">{e.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function OcrWidget({ ocr }: WidgetState) {
  if (!ocr) return null;
  const o: OcrData = ocr;

  if (o.mode === 'logbook') {
    return (
      <div className="ocr">
        <LogbookPage entries={o.entries} />
        <div className={`ocr-upload${o.highlight === 'upload' ? ' ring' : ''}`}>
          <span className="ocr-cam">📷</span>
          <span>Upload a photo of the page</span>
          {o.scanState === 'scanning' && <span className="ocr-scan">Reading…</span>}
          {o.scanState === 'done' && <span className="ocr-done">✓ Read</span>}
        </div>
      </div>
    );
  }

  if (o.mode === 'template') {
    return (
      <div className="ocr-template">
        <div className="ocr-template-head">
          <span className="ocr-template-title">{o.title ?? 'Logbook Template'}</span>
          <span className={`ocr-reuse${o.highlight === 'reuse' ? ' ring' : ''}`}>Reusable across plants</span>
        </div>
        <div className="ocr-map-head"><span>Logbook field</span><span>Sensor tag</span></div>
        <div className={`ocr-maplist${o.highlight === 'mapping' ? ' ring' : ''}`}>
          {o.mappings?.map((m, i) => (
            <div className="ocr-map" key={i}>
              <span className="ocr-map-field">{m.logbookField}</span>
              <span className="ocr-map-arrow">→</span>
              <span className="ocr-map-tag">{m.sensorTag}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // flow
  return (
    <div className="ocr-flow">
      <LogbookPage entries={o.entries} compact />
      <div className="ocr-arrow">
        <span className="ocr-arrow-ocr">OCR</span>
        <span className="ocr-arrow-line">⟶</span>
      </div>
      <div className={`ocr-result${o.highlight === 'result' ? ' ring' : ''}`}>
        <div className="ocr-result-head">Sensor tags · auto-filled</div>
        {o.mappings?.map((m, i) => (
          <div className="ocr-result-row" key={i}>
            <span className="ocr-result-tag">{m.sensorTag}</span>
            <span className="ocr-result-val">{o.entries?.[i]?.value ?? '—'}</span>
            <span className="ocr-result-ok">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
