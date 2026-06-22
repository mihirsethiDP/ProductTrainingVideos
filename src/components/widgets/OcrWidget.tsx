import type { OcrData, WidgetState } from '../../data/types';

function LogbookImage({ rows }: { rows: OcrData['logbookRows'] }) {
  return (
    <div className="ocr2-img">
      <div className="ocr-img-row ocr-img-head">
        <span>Day Consumption</span>
        <span>Reading</span>
      </div>
      {rows?.map((r, i) => (
        <div className="ocr-img-row" key={i}>
          <span className="ocr-img-label">{r.label}</span>
          <span className="ocr-img-hand">{r.reading}</span>
        </div>
      ))}
    </div>
  );
}

export default function OcrWidget({ ocr }: WidgetState) {
  if (!ocr) return null;
  const o: OcrData = ocr;

  if (o.mode === 'upload') {
    return (
      <div className="ocr2">
        <div className="ocr2-fields">
          <div className={`ocr2-dd${o.highlight === 'asset' ? ' ring' : ''}`}>
            <span className="ocr2-dd-label">Asset</span>
            <span className="ocr2-dd-value">{o.asset ?? 'Select asset'} <span className="ocr2-caret">▾</span></span>
          </div>
          <div className={`ocr2-dd${o.highlight === 'template' ? ' ring' : ''}`}>
            <span className="ocr2-dd-label">Logbook Template</span>
            <span className="ocr2-dd-value">{o.template ?? 'Select template'} <span className="ocr2-caret">▾</span></span>
          </div>
        </div>
        <div className={`ocr2-drop${o.highlight === 'upload' ? ' ring' : ''}`}>
          <div className="ocr2-drop-text">Drag Files here or <strong>Browse</strong></div>
          <div className="ocr2-cloud">☁</div>
          <div className="ocr2-uploadbtn">⬆ CLICK HERE TO UPLOAD</div>
          <div className="ocr2-hint">Max size per file: 100MB · Supported types: JPG, PNG, JPEG</div>
        </div>
      </div>
    );
  }

  // review
  return (
    <div className="ocr2-review">
      <div className="ocr2-left">
        <div className="ocr2-secthead">Uploaded Image</div>
        <LogbookImage rows={o.logbookRows} />
      </div>
      <div className="ocr2-right">
        <div className="ocr2-righthead">
          <span className="ocr2-secthead">Extracted Data</span>
          <span className="ocr2-dt">{o.dateTime ?? '20/02/2026 01:27 PM'}</span>
          <span className={`ocr2-save${o.highlight === 'save' ? ' ring' : ''}`}>💾 SAVE</span>
        </div>

        {o.processing ? (
          <div className="ocr2-processing">
            <div className="ocr2-spinner" />
            <div className="ocr2-proc-title">Processing your image</div>
            <div className="ocr2-proc-sub">This may take a few seconds…</div>
          </div>
        ) : (
          <div className={`ocr2-extracted${o.highlight === 'extracted' ? ' ring' : ''}`}>
            {o.fields?.map((f, i) => (
              <div className="ocr2-frow" key={i}>
                <span className="ocr2-fname">{f.field}</span>
                <span className="ocr2-fcol">
                  <span className="ocr2-fcol-label">Day Consumption</span>
                  <span className="ocr2-finput">{f.dayConsumption}</span>
                </span>
                {f.parameter !== undefined && (
                  <span className="ocr2-fcol">
                    <span className="ocr2-fcol-label">Parameter</span>
                    <span className="ocr2-finput">{f.parameter}</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
