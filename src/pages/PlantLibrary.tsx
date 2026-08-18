import { useCallback, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  createAdminPlant, createOrganization, listAdminPlants, listOrganizations, listPlantModules,
  setPlantModule, setPlantOrg, GRANTABLE, INTERNAL_ONLY,
  type AdminPlant, type Organization,
} from '../lib/plants';
import { isMissingSchema } from '../lib/library';

/**
 * Plant Library — where access is decided.
 *
 * Assign modules to a plant; everyone on that plant inherits them, whatever
 * their persona. Persona only decides who gets a dashboard, which is why there
 * is nothing per-person on this screen — that lives in the User Center.
 */
export default function PlantLibrary() {
  const { canCreate, loading, authReady } = useAuth();
  const { lang } = useLanguage();

  const [plants, setPlants] = useState<AdminPlant[]>([]);
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [granted, setGranted] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  const [showNew, setShowNew] = useState(false);
  const [newName, setNewName] = useState('');
  const [newWorkspace, setNewWorkspace] = useState('');
  const [newOrg, setNewOrg] = useState('');
  const [newOrgName, setNewOrgName] = useState('');

  const reload = useCallback(async () => {
    setBusy(true);
    const [{ rows, error: e }, o] = await Promise.all([listAdminPlants(), listOrganizations()]);
    setNeedsSetup(isMissingSchema(e));
    setError(e);
    setPlants(rows);
    setOrgs(o);
    setSelected((cur) => cur || rows[0]?.id || '');
    setBusy(false);
  }, []);

  useEffect(() => {
    if (canCreate) void reload();
  }, [canCreate, reload]);

  useEffect(() => {
    if (!selected) return;
    void (async () => setGranted(await listPlantModules(selected)))();
  }, [selected]);

  const plant = plants.find((p) => p.id === selected);

  async function toggle(moduleId: string) {
    if (!plant) return;
    const on = !granted.has(moduleId);
    setSaving(moduleId);
    const { error: e } = await setPlantModule(plant.id, moduleId, on);
    if (e) {
      setError(e);
    } else {
      setGranted((cur) => {
        const next = new Set(cur);
        if (on) next.add(moduleId); else next.delete(moduleId);
        return next;
      });
      setPlants((cur) => cur.map((p) => (p.id === plant.id ? { ...p, moduleCount: p.moduleCount + (on ? 1 : -1) } : p)));
    }
    setSaving(null);
  }

  async function submitPlant(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    let orgId: string | null = newOrg || null;
    if (newOrgName.trim()) {
      const { org, error: oe } = await createOrganization(newOrgName);
      if (oe) { setError(oe); return; }
      orgId = org?.id ?? null;
    }
    const { error: pe } = await createAdminPlant(newName, newWorkspace, orgId);
    if (pe) { setError(pe); return; }
    setNewName(''); setNewWorkspace(''); setNewOrg(''); setNewOrgName(''); setShowNew(false);
    await reload();
  }

  async function changeOrg(orgId: string) {
    if (!plant) return;
    const { error: e } = await setPlantOrg(plant.id, orgId || null);
    if (e) setError(e); else await reload();
  }

  if (loading || !authReady) return null;
  if (!canCreate) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to="/admin" className="header-link">← Admin</Link>} />

        <div className="title-block">
          <div className="eyebrow">Plant Library</div>
          <h1 className="lesson-title">Plants &amp; module access</h1>
          <p className="lesson-subtitle">
            Access is decided per plant. Grant a plant its modules here, then add people to it in the User Center —
            everyone on the plant inherits the same set, whatever their role. Being a plant head or supervisor only
            adds a dashboard over their people; it does not change what they can open.
          </p>
        </div>

        {needsSetup && (
          <div className="au-empty au-error">
            Run the latest <code>supabase/schema.sql</code> — <code>plant_modules</code> isn’t in the database yet.
          </div>
        )}
        {error && !needsSetup && <div className="ai-msg err" style={{ margin: '10px 0' }}>{error}</div>}

        <div className="lib-plantbar">
          <label className="lib-label" htmlFor="pl-plant">Plant</label>
          <select id="pl-plant" className="au-role" value={selected} onChange={(e) => setSelected(e.target.value)}>
            {plants.length === 0 && <option value="">No plants yet</option>}
            {plants.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}{p.orgName ? ` · ${p.orgName}` : ' · internal'} — {p.moduleCount} modules, {p.memberCount} people
              </option>
            ))}
          </select>
          <button type="button" className="au-toggle" onClick={() => setShowNew((s) => !s)}>
            {showNew ? 'Cancel' : '＋ New plant'}
          </button>
        </div>

        {showNew && (
          <form className="admin-invite" onSubmit={submitPlant}>
            <div className="ai-title">Add a plant</div>
            <div className="ai-row">
              <input type="text" placeholder="Plant name (e.g. Acme STP North)" value={newName}
                     onChange={(e) => setNewName(e.target.value)} required />
              <input type="text" placeholder="Workspace (optional)" value={newWorkspace}
                     onChange={(e) => setNewWorkspace(e.target.value)} />
              <select className="au-role" value={newOrg} onChange={(e) => setNewOrg(e.target.value)}>
                <option value="">Internal (no client)</option>
                {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
              </select>
            </div>
            <div className="ai-row">
              <input type="text" placeholder="…or type a new client name" value={newOrgName}
                     onChange={(e) => setNewOrgName(e.target.value)} />
              <button type="submit" className="lesson-cta">Add plant</button>
            </div>
            <div className="ai-hint">
              A plant with no client is internal — used for our own demo and equipment content.
            </div>
          </form>
        )}

        {busy && <div className="au-empty">…</div>}

        {!busy && plant && (
          <>
            <div className="pl-head">
              <div>
                <div className="pl-name">{plant.name}</div>
                <div className="pl-sub">
                  {plant.memberCount} {plant.memberCount === 1 ? 'person' : 'people'} ·{' '}
                  {granted.size} of {GRANTABLE.length} modules
                </div>
              </div>
              <div>
                <label className="lib-label" htmlFor="pl-org">Client</label>{' '}
                <select id="pl-org" className="au-role" value={plant.org_id ?? ''} onChange={(e) => changeOrg(e.target.value)}>
                  <option value="">Internal (no client)</option>
                  {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
                </select>
              </div>
            </div>

            <div className="pl-grid">
              {GRANTABLE.map((m) => {
                const on = granted.has(m.id);
                return (
                  <button
                    type="button"
                    key={m.id}
                    className={`pl-mod${on ? ' on' : ''}`}
                    onClick={() => toggle(m.id)}
                    disabled={saving === m.id}
                    aria-pressed={on}
                  >
                    <span className="pl-tag">{m.tag}</span>
                    <span className="pl-mod-name">{m.name[lang]}</span>
                    <span className="pl-check">{saving === m.id ? '…' : on ? '✓' : '＋'}</span>
                  </button>
                );
              })}
            </div>

            <div className="pl-note">
              <b>Not available to clients:</b>{' '}
              {INTERNAL_ONLY.map((m) => `${m.tag} ${m.name.en}`).join(' · ')} — internal-only modules, and every
              ⚙ Configure track, stay with the DigitalPaani team and cannot be granted to a plant.
            </div>
          </>
        )}

        {!busy && plants.length === 0 && !needsSetup && (
          <div className="au-empty">No plants yet — add one to start assigning modules.</div>
        )}

        <Footer />
      </div>
    </div>
  );
}
