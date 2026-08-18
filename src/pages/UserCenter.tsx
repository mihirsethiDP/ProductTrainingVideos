import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import {
  addToPlant, createClientUser, listManagedUsers, listPlantOptions, removeFromPlant, syncUserOrg,
  type ManagedUser, type PlantOption, type PlantRole,
} from '../lib/users';
import type { TrainingRole } from '../lib/supabase';

const PLANT_ROLES: { id: PlantRole; label: string; note: string }[] = [
  { id: 'head', label: 'Plant head', note: 'dashboard over every plant they hold' },
  { id: 'supervisor', label: 'Supervisor', note: 'dashboard over operators at that plant' },
  { id: 'operator', label: 'Operator', note: 'no dashboard' },
];

/**
 * User Center — who sits at which plant, and as what.
 *
 * Person-centric on purpose: one person can hold several plants, so their
 * memberships are the thing worth seeing together. Module access is NOT here —
 * that belongs to the plant, in the Plant Library.
 */
export default function UserCenter() {
  const { isAdmin, loading, authReady } = useAuth();

  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [plants, setPlants] = useState<PlantOption[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // add-to-plant control
  const [addPlant, setAddPlant] = useState('');
  const [addRole, setAddRole] = useState<PlantRole>('operator');

  // new client user
  const [showNew, setShowNew] = useState(false);
  const [nEmail, setNEmail] = useState('');
  const [nName, setNName] = useState('');
  const [nPlant, setNPlant] = useState('');
  const [nRole, setNRole] = useState<PlantRole>('operator');
  const [nTraining, setNTraining] = useState<TrainingRole>('operator');
  const [issued, setIssued] = useState<{ email: string; password: string } | null>(null);
  const [creating, setCreating] = useState(false);

  const reload = useCallback(async () => {
    setBusy(true);
    const [{ rows, error: e }, p] = await Promise.all([listManagedUsers(), listPlantOptions()]);
    setError(e);
    setUsers(rows);
    setPlants(p);
    setBusy(false);
  }, []);

  useEffect(() => { if (isAdmin) void reload(); }, [isAdmin, reload]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => u.email.toLowerCase().includes(q) || u.name.toLowerCase().includes(q));
  }, [users, query]);

  const selected = users.find((u) => u.id === selectedId) ?? null;

  async function attach() {
    if (!selected || !addPlant) return;
    setError(null);
    const { error: e } = await addToPlant(selected.id, addPlant, addRole);
    if (e) { setError(e); return; }
    // keep the tenant boundary in step with the plant they just joined
    const plant = plants.find((p) => p.id === addPlant);
    if (plant?.org_id && selected.orgId !== plant.org_id) await syncUserOrg(selected.id, plant.org_id);
    setAddPlant('');
    await reload();
  }

  async function detach(plantId: string) {
    if (!selected) return;
    const { error: e } = await removeFromPlant(selected.id, plantId);
    if (e) setError(e); else await reload();
  }

  async function submitNew(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setNotice(null); setIssued(null);
    if (!nPlant) { setError('Pick a plant for them.'); return; }
    setCreating(true);
    const plant = plants.find((p) => p.id === nPlant);
    const { password, existing, error: ce } = await createClientUser({
      email: nEmail, fullName: nName, orgId: plant?.org_id ?? null,
      plantId: nPlant, plantRole: nRole, trainingRole: nTraining,
    });
    setCreating(false);
    if (ce) { setError(ce); return; }
    if (existing) setNotice(`${nEmail} already had an account — added to ${plant?.name}.`);
    else if (password) setIssued({ email: nEmail.trim().toLowerCase(), password });
    setNEmail(''); setNName('');
    await reload();
  }

  if (loading || !authReady) return null;
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to="/admin" className="header-link">← Admin</Link>} />

        <div className="title-block">
          <div className="eyebrow">User Center</div>
          <h1 className="lesson-title">People &amp; plants</h1>
          <p className="lesson-subtitle">
            Put people on plants and set what they are there. Module access isn’t decided here — it belongs to the
            plant, in the Plant Library, and everyone on a plant inherits the same set. The role below only decides
            who gets a dashboard over whom.
          </p>
          <button className="lesson-cta" style={{ marginTop: 16 }} onClick={() => setShowNew((s) => !s)}>
            {showNew ? 'Cancel' : '＋ Add a client user'}
          </button>
        </div>

        {error && <div className="ai-msg err" style={{ margin: '10px 0' }}>{error}</div>}
        {notice && <div className="ai-msg" style={{ margin: '10px 0' }}>{notice}</div>}

        {issued && (
          <div className="uc-issued">
            <div className="uc-issued-title">Account created — share this password privately, it is shown once</div>
            <div className="uc-cred"><span>{issued.email}</span><code>{issued.password}</code></div>
            <div className="ai-hint">
              They will be asked to choose their own password the first time they sign in. Nothing was emailed.
            </div>
            <button type="button" className="au-toggle" onClick={() => setIssued(null)}>Done</button>
          </div>
        )}

        {showNew && (
          <form className="admin-invite" onSubmit={submitNew}>
            <div className="ai-title">New client user</div>
            <div className="ai-row">
              <input type="email" placeholder="email@client.com" value={nEmail}
                     onChange={(e) => setNEmail(e.target.value)} required />
              <input type="text" placeholder="Full name" value={nName} onChange={(e) => setNName(e.target.value)} />
            </div>
            <div className="ai-row">
              <select className="au-role" value={nPlant} onChange={(e) => setNPlant(e.target.value)} required>
                <option value="">Which plant…</option>
                {plants.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}{p.orgName ? ` · ${p.orgName}` : ' · internal'}</option>
                ))}
              </select>
              <select className="au-role" value={nRole} onChange={(e) => setNRole(e.target.value as PlantRole)}>
                {PLANT_ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
              <select className="au-role" value={nTraining} onChange={(e) => setNTraining(e.target.value as TrainingRole)}>
                <option value="operator">Operator path</option>
                <option value="supervisor">Supervisor path</option>
              </select>
              <button type="submit" className="lesson-cta" disabled={creating}>
                {creating ? '…' : 'Create'}
              </button>
            </div>
            <div className="ai-hint">
              No email is sent — you get a temporary password to pass on, and they set their own on first sign-in.
            </div>
          </form>
        )}

        <div className="uc-split">
          <div className="uc-list">
            <input className="uc-search" type="search" placeholder="Search people…" value={query}
                   onChange={(e) => setQuery(e.target.value)} />
            {busy && <div className="au-empty">…</div>}
            {!busy && filtered.map((u) => (
              <button
                type="button"
                key={u.id}
                className={`uc-person${u.id === selectedId ? ' on' : ''}`}
                onClick={() => setSelectedId(u.id)}
              >
                <div className="uc-person-main">
                  <div className="au-name">{u.name}</div>
                  <div className="au-email">{u.email}</div>
                </div>
                <div className="uc-person-meta">
                  <span className={`au-state ${u.orgId ? 'google' : 'waiting'}`}>{u.orgName ?? 'internal'}</span>
                  {u.memberships.length > 0 && (
                    <span className="uc-count">{u.memberships.length} plant{u.memberships.length === 1 ? '' : 's'}</span>
                  )}
                </div>
              </button>
            ))}
            {!busy && filtered.length === 0 && <div className="au-empty">Nobody matches that.</div>}
          </div>

          <div className="uc-detail">
            {!selected && <div className="au-empty">Pick someone to manage their plants.</div>}
            {selected && (
              <>
                <div className="pl-head">
                  <div>
                    <div className="pl-name">{selected.name}</div>
                    <div className="pl-sub">
                      {selected.email} · {selected.orgName ?? 'internal account'} ·{' '}
                      {selected.role}{selected.trainingRole ? ` · ${selected.trainingRole} path` : ''}
                    </div>
                  </div>
                </div>

                <div className="uc-memberships">
                  {selected.memberships.length === 0 && (
                    <div className="au-empty">Not on any plant yet.</div>
                  )}
                  {selected.memberships.map((m) => (
                    <div className="uc-mem" key={m.plant_id}>
                      <span className="uc-mem-plant">{m.plant_name}</span>
                      <span className="au-state waiting">
                        {PLANT_ROLES.find((r) => r.id === m.plant_role)?.label ?? m.plant_role}
                      </span>
                      <button type="button" className="studio-share lib-del" onClick={() => detach(m.plant_id)}>
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="ai-row" style={{ marginTop: 12 }}>
                  <select className="au-role" value={addPlant} onChange={(e) => setAddPlant(e.target.value)}>
                    <option value="">Add to a plant…</option>
                    {plants
                      .filter((p) => !selected.memberships.some((m) => m.plant_id === p.id))
                      .map((p) => (
                        <option key={p.id} value={p.id}>{p.name}{p.orgName ? ` · ${p.orgName}` : ' · internal'}</option>
                      ))}
                  </select>
                  <select className="au-role" value={addRole} onChange={(e) => setAddRole(e.target.value as PlantRole)}>
                    {PLANT_ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
                  </select>
                  <button type="button" className="lesson-cta" onClick={attach} disabled={!addPlant}>Add</button>
                </div>
                <div className="ai-hint" style={{ marginTop: 8 }}>
                  {PLANT_ROLES.map((r) => `${r.label}: ${r.note}`).join(' · ')}
                </div>
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
