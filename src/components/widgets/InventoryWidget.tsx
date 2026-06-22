import type { InventoryData, WidgetState } from '../../data/types';

function StoreTabs({ stores, active }: { stores?: string[]; active?: string }) {
  if (!stores) return null;
  return (
    <div className="inv-tabs">
      {stores.map((s) => (
        <span key={s} className={`inv-tab${s === active ? ' active' : ''}`}>{s}</span>
      ))}
    </div>
  );
}

export default function InventoryWidget({ inventory }: WidgetState) {
  if (!inventory) return null;
  const d: InventoryData = inventory;

  // ---- Supervisor: inventory table ----
  if (d.mode === 'supTable') {
    return (
      <div className="inv">
        <div className="inv-title">Inventory</div>
        <StoreTabs stores={d.stores} active={d.activeStore} />
        <div className="inv-search">🔍 Search for Items</div>
        <div className="inv-scroll">
          <table className="inv-table">
            <thead>
              <tr>
                <th>Name</th><th>Category</th>
                <th className={d.highlight === 'consumption' ? '' : ''}>Stock Available</th>
                <th>Last Consumption</th>
                <th className={d.highlight === 'consumption' ? 'inv-th-hl' : ''}>Consumption · Actual</th>
                <th className={d.highlight === 'consumption' ? 'inv-th-hl' : ''}>Expected</th>
              </tr>
            </thead>
            <tbody>
              {d.items?.map((it, i) => (
                <tr key={i} className={it.ring ? 'ring' : undefined}>
                  <td className="inv-name">{it.name}</td>
                  <td className={`inv-cat${d.highlight === 'category' ? ' inv-hl' : ''}`}>{it.category}</td>
                  <td className="inv-stock">{it.stock}</td>
                  <td><div className="inv-lc">{it.lastConsumption}</div><div className="inv-lc-sub">Last Updated {it.lastUpdated}</div></td>
                  <td className="inv-actual"><div>{it.actual}</div><div className="inv-lc-sub">{it.actualPeriod}</div></td>
                  <td className="inv-exp">{it.expected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // ---- Supervisor: consumption log for one chemical ----
  if (d.mode === 'supLog') {
    return (
      <div className="inv-log">
        <div className="inv-log-cards">
          <span className="inv-log-chem">{d.chemical ?? 'LIME'} ›</span>
          <span className={`inv-card${d.highlight === 'balance' ? ' ring' : ''}`}>⚖ Current Balance | {d.balance}</span>
          <span className="inv-card">📅 Current Month Usage | {d.monthUsage}</span>
          <span className="inv-card">📅 Last Month Usage | {d.lastMonthUsage}</span>
        </div>
        <div className="inv-log-date">📅 Date | {d.dateRange}</div>
        <div className="inv-scroll">
          <table className={`inv-logtable${d.highlight === 'amounts' || d.highlight === 'log' ? '' : ''}`}>
            <thead><tr><th>Remarks</th><th>Amount</th><th>Units</th><th>Date/Time</th></tr></thead>
            <tbody>
              {d.logs?.map((l, i) => (
                <tr key={i}>
                  <td className="inv-remark">{l.remark ?? ''}</td>
                  <td><span className={`inv-amt ${l.positive ? 'pos' : 'neg'}${d.highlight === 'amounts' ? ' ring' : ''}`}>{l.amount}</span></td>
                  <td className="inv-unit">{l.unit}</td>
                  <td className="inv-dt">{l.datetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // ---- Operator: category grid ----
  if (d.mode === 'opCategories') {
    return (
      <div className="inv-cats">
        <StoreTabs stores={d.stores} active={d.activeStore} />
        <div className="inv-cat-grid">
          {d.categories?.map((c, i) => (
            <div
              key={i}
              className={`inv-cat-tile${c.disabled ? ' disabled' : ' ' + (c.color ?? 'chem')}${d.highlight === 'category' && !c.disabled ? ' ring' : ''}`}
            >
              {c.name} <span className="inv-cat-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- Operator: select item + add/remove ----
  if (d.mode === 'opItem') {
    return (
      <div className="inv-modal">
        <div className="inv-modal-head"><span>Chemicals</span><span className="inv-x">✕</span></div>
        <div className="inv-field">
          <span className="inv-field-label">Select chemicals *</span>
          <div className="inv-select">{d.selectedItem ?? 'Chlorine Balance'} ▾</div>
        </div>
        <div className={`inv-addremove${d.highlight === 'addremove' ? ' ring' : ''}`}>
          <span className="inv-btn light">ADD TO STORE</span>
          <span className="inv-btn dark">REMOVE FROM STORE</span>
        </div>
      </div>
    );
  }

  // ---- Operator: add / remove form ----
  const isRemove = d.formType === 'remove';
  return (
    <div className="inv-form">
      <div className="inv-modal-head"><span>{d.itemName ?? 'LIME'}</span><span className="inv-x">✕</span></div>
      <div className="inv-avail">⚖ Available Quantity | <strong>{d.available ?? '0.47'}</strong></div>

      <div className={`inv-field${d.highlight === 'remark' ? ' ring' : ''}`}>
        <span className="inv-field-label">Remark *</span>
        <div className="inv-select">{d.remark} ▴</div>
        {d.remarkOptions && (
          <div className="inv-dropdown">
            {d.remarkOptions.map((o) => (
              <div key={o} className={`inv-opt${o === d.remark ? ' sel' : ''}`}>{o}</div>
            ))}
          </div>
        )}
      </div>

      {!d.remarkOptions && (
        <>
          <div className="inv-row">
            <div className="inv-field small">
              <span className="inv-field-label">Unit *</span>
              <div className="inv-select">{d.unit ?? 'Kg'} ▾</div>
            </div>
            <div className={`inv-field small${d.highlight === 'qty' ? ' ring' : ''}`}>
              <span className="inv-field-label">Quantity *</span>
              <div className="inv-input">{d.quantity}</div>
            </div>
          </div>
          {isRemove && (
            <div className={`inv-field${d.highlight === 'asset' ? ' ring' : ''}`}>
              <span className="inv-field-label">Asset</span>
              <div className="inv-select">{d.asset ?? 'STP'} ▾</div>
            </div>
          )}
          <div className={`inv-submit${d.highlight === 'submit' ? ' ring' : ''}`}>SUBMIT</div>
        </>
      )}
    </div>
  );
}
