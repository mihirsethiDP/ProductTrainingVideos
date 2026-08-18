import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressRing from '../components/ProgressRing';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { listManagedPlants, listTeam, teamState, type PlantRole, type TeamMember, type TeamPlant, type TeamState } from '../lib/team';

const ROLE_KEY: Record<PlantRole, 'plantRoleHead' | 'plantRoleSupervisor' | 'plantRoleOperator'> = {
  head: 'plantRoleHead', supervisor: 'plantRoleSupervisor', operator: 'plantRoleOperator',
};
const STATE_KEY: Record<TeamState, 'teamStateComplete' | 'teamStateStalled' | 'teamStateInProgress' | 'teamStateNotStarted'> = {
  complete: 'teamStateComplete', stalled: 'teamStateStalled',
  'in-progress': 'teamStateInProgress', 'not-started': 'teamStateNotStarted',
};
const STATE_TONE: Record<TeamState, string> = {
  complete: 'done', stalled: 'pending', 'in-progress': 'waiting', 'not-started': 'expired',
};

const RELATIVE = (iso: string | null): string => {
  if (!iso) return '—';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? 'a month ago' : `${months} months ago`;
};

/**
 * What a Plant Head or Site Supervisor came for: who at my plant has done the
 * training, and who hasn't touched it.
 *
 * Nothing here re-implements who-can-see-whom. The queries ask for the whole
 * plant and the database returns what this person is allowed — a supervisor
 * gets operators, a head gets everyone.
 */
export default function Team() {
  const { loading, authReady, managedPlantIds } = useAuth();
  const { t } = useLanguage();

  const [plants, setPlants] = useState<TeamPlant[]>([]);
  const [plantId, setPlantId] = useState('');
  const [rows, setRows] = useState<TeamMember[]>([]);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (managedPlantIds.length === 0) return;
    void (async () => {
      const p = await listManagedPlants(managedPlantIds);
      setPlants(p);
      setPlantId((cur) => cur || p[0]?.id || '');
    })();
  }, [managedPlantIds]);

  const load = useCallback(async () => {
    const plant = plants.find((p) => p.id === plantId);
    if (!plant) return;
    setBusy(true);
    const { rows: r, error: e } = await listTeam(plant);
    setRows(r);
    setError(e);
    setBusy(false);
  }, [plants, plantId]);

  useEffect(() => {
    if (plantId) void load();
  }, [plantId, load]);

  const summary = useMemo(() => {
    const total = rows.length;
    const complete = rows.filter((m) => teamState(m) === 'complete').length;
    const notStarted = rows.filter((m) => teamState(m) === 'not-started').length;
    const stalled = rows.filter((m) => teamState(m) === 'stalled').length;
    const avg = total ? Math.round(rows.reduce((a, m) => a + m.percent, 0) / total) : 0;
    return { total, complete, notStarted, stalled, avg };
  }, [rows]);

  if (loading || !authReady) return null;
  // no managing membership = no team to look at
  if (managedPlantIds.length === 0) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to="/" className="header-link">← {t('homeWord')}</Link>} />

        <div className="title-block">
          <div className="eyebrow">{t('teamEyebrow')}</div>
          <h1 className="lesson-title">{t('teamTitle')}</h1>
          <p className="lesson-subtitle">{t('teamSubtitle')}</p>
        </div>

        {plants.length > 1 && (
          <div className="lib-plantbar">
            <label className="lib-label" htmlFor="team-plant">{t('teamPlantLabel')}</label>
            <select id="team-plant" className="au-role" value={plantId} onChange={(e) => setPlantId(e.target.value)}>
              {plants.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* the summary answers "should I be worried" before any scrolling */}
        <div className="team-summary">
          <div className="team-stat">
            <ProgressRing percent={summary.avg} size={56} stroke={6} />
            <div>
              <div className="ps-title">{t('teamAverage')}</div>
              <div className="ps-sub">{summary.total} {t('teamPeople')}</div>
            </div>
          </div>
          <div className="team-counts">
            <div className="team-count"><b>{summary.complete}</b><span>{t('teamComplete')}</span></div>
            <div className="team-count warn"><b>{summary.stalled}</b><span>{t('teamStalled')}</span></div>
            <div className="team-count bad"><b>{summary.notStarted}</b><span>{t('teamNotStarted')}</span></div>
          </div>
        </div>

        {error && <div className="au-empty au-error">{error}</div>}
        {busy && <div className="au-empty">…</div>}
        {!busy && !error && rows.length === 0 && <div className="au-empty">{t('teamEmpty')}</div>}

        {!busy && rows.length > 0 && (
          <div className="au-card">
            <div className="team-row team-head">
              <div>{t('teamPerson')}</div>
              <div>{t('teamRole')}</div>
              <div>{t('teamProgress')}</div>
              <div>{t('teamLastActive')}</div>
            </div>
            {rows.map((m) => {
              const state = teamState(m);
              return (
                <div className="team-row" key={m.userId}>
                  <div className="au-user">
                    <div className="au-name">{m.name}</div>
                    <div className="au-email">{m.email}</div>
                    {!m.active && <span className="au-state expired">{t('adminDisabled')}</span>}
                  </div>
                  <div className="team-role">{t(ROLE_KEY[m.plantRole])}</div>
                  <div className="au-prog">
                    <ProgressRing percent={m.percent} size={34} stroke={4} />
                    <span>{m.done}/{m.total} {t('lessonsWord')}</span>
                  </div>
                  <div className="team-last">
                    <span className={`au-state ${STATE_TONE[state]}`}>{t(STATE_KEY[state])}</span>
                    <div className="team-when">{RELATIVE(m.lastActive)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
