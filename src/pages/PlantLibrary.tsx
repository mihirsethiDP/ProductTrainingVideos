import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import {
  createAdminPlant, createOrganization, listAdminPlants, listOrganizations, listPlantModules,
  setPlantModule, setPlantOrg, GRANTABLE, INTERNAL_ONLY,
  type AdminPlant, type Organization,
} from '../lib/plants';
import {
  addToPlant, createClientUser, listPlantPeople, removeFromPlant, syncUserOrg,
  type PlantPerson, type PlantRole,
} from '../lib/users';
import { isMissingSchema } from '../lib/library';

const PLANT_ROLES: { id: PlantRole; label: string }[] = [
  { id: 'head', label: 'Plant head' },
  { id: 'supervisor', label: 'Supervisor' },
  { id: 'operator', label: 'Operator' },
];

/** The training path follows from the job — one less thing to pick. Heads and
 *  supervisors read the oversight variants; operators the hands-on ones.
 *  Content itself comes from the plant's modules either way. */
const TRAINING_FOR: Record<PlantRole, 'supervisor' | 'operator'> = {
  head: 'supervisor',
  supervisor: 'supervisor',
  operator: 'operator',
};

/**
 * Plants & People — one screen for the whole onboarding flow.
 *
 * A plant is the unit of access: it holds the modules, and everyone on it
 * inherits them. So the plant is also the natural place to manage its people —
 * the old split into a Plant Library and a separate User Center made one
 * linear job (create plant → grant modules → add people) span two screens.
 *
 * The person-centric view is folded in as "also at" chips on each row: a head
 * covering three sites shows their other plants inline.
 */
export default function PlantLibrary() {
  const { canCreate, isAdmin, loading, authReady } = useAuth();
  const { lang } = useLanguage();

  const [plants, setPlants] = useState<AdminPlant[]>([]);
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [granted, setGranted] = useState<Set<string>>(new Set());
  const [people, setPeople] = useState<PlantPerson[]>([]);
  const [busy, setBusy] = useState(true);
  const [savingMod, setSavingMod] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  // new plant (rail)
  const [showNewPlant, setShowNewPlant] = useState(false);
  const [npName, setNpName] = useState('');
  const [npOrg, setNpOrg] = useState(''); // '' internal · 'new' → name input · else org id
  const [npOrgName, setNpOrgName] = useState('');

  // attach the selected plant to a brand-new client (the reassign select's "new" case)
  const [showNewClient, setShowNewClient] = useState(false);
  const [ncName, setNcName] = useState('');

  // add person (detail)
  const [apEmail, setApEmail] = useState('');
  const [apName, setApName] = useState('');
  const [apRole, setApRole] = useState<PlantRole>('operator');
  const [adding, setAdding] = useState(false);
  const [issued, setIssued] = useState<{ email: string; password: string } | null>(null);

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

  useEffect(() => { if (canCreate) void reload(); }, [canCreate, reload]);

  const loadDetail = useCallback(async (plantId: string) => {
    const [mods, ppl] = await Promise.all([listPlantModules(plantId), listPlantPeople(plantId)]);
    setGranted(mods);
    setPeople(ppl.rows);
  }, []);

  useEffect(() => {
    if (selected) void loadDetail(selected);
  }, [selected, loadDetail]);

  const plant = plants.find((p) => p.id === selected);

  // rail: internal plants first, then one group per client
  const groups = useMemo(() => {
    const internal = plants.filter((p) => !p.org_id);
    const byOrg = orgs
      .map((o) => ({ label: o.name, plants: plants.filter((p) => p.org_id === o.id) }))
      .filter((g) => g.plants.length > 0);
    return [...(internal.length ? [{ label: 'Internal', plants: internal }] : []), ...byOrg];
  }, [plants, orgs]);

  async function toggleModule(moduleId: string) {
    if (!plant) return;
    const on = !granted.has(moduleId);
    setSavingMod(moduleId);
    const { error: e } = await setPlantModule(plant.id, moduleId, on);
    if (e) setError(e);
    else {
      setGranted((cur) => {
        const next = new Set(cur);
        if (on) next.add(moduleId); else next.delete(moduleId);
        return next;
      });
      setPlants((cur) => cur.map((p) => (p.id === plant.id ? { ...p, moduleCount: p.moduleCount + (on ? 1 : -1) } : p)));
    }
    setSavingMod(null);
  }

  async function submitPlant(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    let orgId: string | null = null;
    if (npOrg === 'new') {
      if (!npOrgName.trim()) { setError('Give the new client a name.'); return; }
      const { org, error: oe } = await createOrganization(npOrgName);
      if (oe) { setError(oe); return; }
      orgId = org?.id ?? null;
    } else if (npOrg) {
      orgId = npOrg;
    }
    const { error: pe } = await createAdminPlant(npName, '', orgId);
    if (pe) { setError(pe); return; }
    setNpName(''); setNpOrg(''); setNpOrgName(''); setShowNewPlant(false);
    await reload();
  }

  /** Adopt an EXISTING account into this plant's client — but only a plain,
   *  client-less user. The old page moved anyone whose org differed, which
   *  could yank a DigitalPaani CSM (or a user of another client) into this
   *  org and re-scope everything they see. Staff and already-tenanted people
   *  are left where they are. */
  async function maybeAdopt(userId: string) {
    if (!plant?.org_id) return;
    const { data: p } = await supabase.from('profiles').select('role,org_id').eq('id', userId).single();
    if (p?.role === 'user' && !p.org_id) await syncUserOrg(userId, plant.org_id);
  }

  async function submitPerson(e: React.FormEvent) {
    e.preventDefault();
    if (!plant) return;
    setError(null); setNotice(null); setIssued(null);
    setAdding(true);
    const { password, existing, error: ce } = await createClientUser({
      email: apEmail, fullName: apName, orgId: plant.org_id,
      plantId: plant.id, plantRole: apRole, trainingRole: TRAINING_FOR[apRole],
    });
    setAdding(false);
    if (ce) { setError(ce); return; }
    if (existing) {
      const { data: prof } = await supabase.from('profiles').select('id').eq('email', apEmail.trim().toLowerCase()).maybeSingle();
      if (prof) await maybeAdopt(prof.id);
      setNotice(`${apEmail.trim()} already had an account — added to ${plant.name}.`);
    } else if (password) {
      setIssued({ email: apEmail.trim().toLowerCase(), password });
    }
    setApEmail(''); setApName('');
    await loadDetail(plant.id);
    await reload();
  }

  async function changeRole(userId: string, role: PlantRole) {
    if (!plant) return;
    const { error: e } = await addToPlant(userId, plant.id, role);
    if (e) setError(e); else await loadDetail(plant.id);
  }

  async function removePerson(p: PlantPerson) {
    if (!plant) return;
    if (!window.confirm(`Remove ${p.name} from ${plant.name}?`)) return;
    const { error: e } = await removeFromPlant(p.userId, plant.id);
    if (e) setError(e);
    else { await loadDetail(plant.id); await reload(); }
  }

  if (loading || !authReady) return null;
  if (!canCreate) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to="/admin" className="header-link">← Admin</Link>} />

        <div className="title-block">
          <div className="eyebrow">Plants &amp; People</div>
          <h1 className="lesson-title">Plants &amp; people</h1>
          <p className="lesson-subtitle">
            A plant carries its modules and its people — everyone on it inherits the same training.
            The role here only decides who gets the team dashboard.
          </p>
        </div>

        {needsSetup && (
          <div className="au-empty au-error">
            Run the latest <code>supabase/schema.sql</code> — <code>plant_modules</code> isn’t in the database yet.
          </div>
        )}
        {error && !needsSetup && <div className="ai-msg err" style={{ margin: '10px 0' }}>{error}</div>}
        {notice && <div className="ai-msg" style={{ margin: '10px 0' }}>{notice}</div>}

        <div className="uc-split">
          {/* ── rail: every plant, grouped by client ── */}
          <div className="uc-list">
            {busy && <div className="au-empty">…</div>}
            {!busy && groups.map((g) => (
              <div key={g.label}>
                <div className="pp-group">{g.label}</div>
                {g.plants.map((p) => (
                  <button
                    type="button"
                    key={p.id}
                    className={`uc-person${p.id === selected ? ' on' : ''}`}
                    onClick={() => setSelected(p.id)}
                  >
                    <div className="uc-person-main">
                      <div className="au-name">{p.name}</div>
                      <div className="au-email">
                        {p.moduleCount} module{p.moduleCount === 1 ? '' : 's'} · {p.memberCount} {p.memberCount === 1 ? 'person' : 'people'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ))}
            {!busy && plants.length === 0 && !needsSetup && <div className="au-empty">No plants yet.</div>}

            <button type="button" className="au-toggle pp-new" onClick={() => setShowNewPlant((s) => !s)}>
              {showNewPlant ? 'Cancel' : '＋ New plant'}
            </button>
            {showNewPlant && (
              <form className="pp-newform" onSubmit={submitPlant}>
                <input type="text" placeholder="Plant name" value={npName}
                       onChange={(e) => setNpName(e.target.value)} required />
                <select className="au-role" value={npOrg} onChange={(e) => setNpOrg(e.target.value)}>
                  <option value="">Internal (no client)</option>
                  {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
                  <option value="new">＋ New client…</option>
                </select>
                {npOrg === 'new' && (
                  <input type="text" placeholder="Client name" value={npOrgName}
                         onChange={(e) => setNpOrgName(e.target.value)} required />
                )}
                <button type="submit" className="lesson-cta">Add plant</button>
              </form>
            )}
          </div>

          {/* ── detail: the selected plant ── */}
          <div className="uc-detail">
            {!plant && !busy && <div className="au-empty">Pick a plant.</div>}
            {plant && (
              <>
                <div className="pl-head">
                  <div>
                    <div className="pl-name">{plant.name}</div>
                    <div className="pl-sub">
                      {granted.size} of {GRANTABLE.length} modules · {people.length} {people.length === 1 ? 'person' : 'people'}
                    </div>
                  </div>
                  <div>
                    <label className="lib-label" htmlFor="pl-org">Client</label>{' '}
                    <select id="pl-org" className="au-role" value={plant.org_id ?? ''}
                            onChange={(e) => {
                              if (e.target.value === 'new') { setShowNewClient(true); return; }
                              setShowNewClient(false);
                              void setPlantOrg(plant.id, e.target.value || null).then(reload);
                            }}>
                      <option value="">Internal (no client)</option>
                      {orgs.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
                      <option value="new">＋ New client…</option>
                    </select>
                    {showNewClient && (
                      <form
                        className="pp-newform"
                        style={{ marginTop: 8 }}
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const { org, error: oe } = await createOrganization(ncName);
                          if (oe) { setError(oe); return; }
                          if (org) await setPlantOrg(plant.id, org.id);
                          setNcName(''); setShowNewClient(false);
                          await reload();
                        }}
                      >
                        <input type="text" placeholder="Client name" value={ncName}
                               onChange={(e) => setNcName(e.target.value)} required />
                        <button type="submit" className="lesson-cta">Save</button>
                      </form>
                    )}
                  </div>
                </div>

                <div className="pp-sec">Training modules</div>
                <div className="pl-grid">
                  {GRANTABLE.map((m) => {
                    const on = granted.has(m.id);
                    return (
                      <button
                        type="button"
                        key={m.id}
                        className={`pl-mod${on ? ' on' : ''}`}
                        onClick={() => toggleModule(m.id)}
                        disabled={savingMod === m.id}
                        aria-pressed={on}
                      >
                        <span className="pl-tag">{m.tag}</span>
                        <span className="pl-mod-name">{m.name[lang]}</span>
                        <span className="pl-check">{savingMod === m.id ? '…' : on ? '✓' : '＋'}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="ai-hint" style={{ marginTop: 8 }}>
                  Internal-only modules ({INTERNAL_ONLY.map((m) => m.tag).join(' · ')}) and every ⚙ Configure track stay with the DigitalPaani team.
                </div>

                <div className="pp-sec">People</div>
                {!isAdmin && (
                  <div className="ai-hint">People are managed by admins — this section is theirs.</div>
                )}
                {isAdmin && (
                  <>
                    {issued && (
                      <div className="uc-issued">
                        <div className="uc-issued-title">Account created — share this password privately, it is shown once</div>
                        <div className="uc-cred"><span>{issued.email}</span><code>{issued.password}</code></div>
                        <div className="ai-hint">They choose their own password at first sign-in. Nothing was emailed.</div>
                        <button type="button" className="au-toggle" onClick={() => setIssued(null)}>Done</button>
                      </div>
                    )}

                    <div className="uc-memberships">
                      {people.length === 0 && <div className="au-empty">Nobody at this plant yet.</div>}
                      {people.map((p) => (
                        <div className="uc-mem" key={p.userId}>
                          <div className="uc-person-main" style={{ flex: 1 }}>
                            <div className="au-name">{p.name}</div>
                            <div className="au-email">
                              {p.email}
                              {p.alsoAt.length > 0 && (
                                <span className="pp-also">
                                  {' '}· also at {p.alsoAt.map((a) => a.plantName).join(', ')}
                                </span>
                              )}
                            </div>
                          </div>
                          <select
                            className="au-role"
                            value={p.plantRole}
                            onChange={(e) => changeRole(p.userId, e.target.value as PlantRole)}
                          >
                            {PLANT_ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
                          </select>
                          <button type="button" className="studio-share lib-del" onClick={() => removePerson(p)}>
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    <form className="ai-row pp-add" onSubmit={submitPerson}>
                      <input type="email" placeholder="email@client.com" value={apEmail}
                             onChange={(e) => setApEmail(e.target.value)} required />
                      <input type="text" placeholder="Full name" value={apName}
                             onChange={(e) => setApName(e.target.value)} />
                      <select className="au-role" value={apRole} onChange={(e) => setApRole(e.target.value as PlantRole)}>
                        {PLANT_ROLES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
                      </select>
                      <button type="submit" className="lesson-cta" disabled={adding}>
                        {adding ? '…' : 'Add person'}
                      </button>
                    </form>
                    <div className="ai-hint">
                      New accounts get a one-time password to pass on — nothing is emailed. An email that already has an
                      account is simply added to this plant.
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
