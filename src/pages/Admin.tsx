import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressRing from '../components/ProgressRing';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase, type AppRole, type Profile, type TrainingRole } from '../lib/supabase';
import { listJobs, reviewJob, type GenerationJob } from '../lib/studio';
import { MODULES, getLesson } from '../data/catalog';

interface ProgRow {
  user_id: string;
  lesson_id: string;
  last_step: number;
  total_steps: number;
  completed: boolean;
}

// real (registered, non-coming-soon) lessons across the whole catalog
const ALL_LESSONS = MODULES.flatMap((m) =>
  m.lessons.filter((l) => !l.comingSoon && getLesson(l.id)).map((l) => ({ moduleId: m.id, moduleNumber: m.number, id: l.id })),
);

function pctFor(row: ProgRow | undefined, lessonId: string): number {
  const total = getLesson(lessonId)?.layouts.length ?? row?.total_steps ?? 0;
  if (!row || total <= 0) return 0;
  if (row.completed) return 100;
  return Math.min(100, Math.round(((row.last_step + 1) / total) * 100));
}

export default function Admin() {
  const { isAdmin, loading, profile } = useAuth();
  const { lang, t } = useLanguage();

  const [users, setUsers] = useState<Profile[]>([]);
  const [progress, setProgress] = useState<ProgRow[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<AppRole>('user');
  const [inviteTraining, setInviteTraining] = useState<TrainingRole>('operator');
  const [inviteMsg, setInviteMsg] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  const load = useCallback(async () => {
    setFetching(true);
    const [{ data: p, error: pErr }, { data: lp, error: lpErr }, jb] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: true }),
      supabase.from('lesson_progress').select('user_id,lesson_id,last_step,total_steps,completed'),
      listJobs(),
    ]);
    // distinguish a real load failure from a genuinely empty org — otherwise a
    // network/RLS error reads as "no users yet"
    setLoadError(!!pErr || !!lpErr);
    if (pErr) console.error('Admin load — profiles:', pErr.message);
    if (lpErr) console.error('Admin load — progress:', lpErr.message);
    setUsers((p as Profile[]) ?? []);
    setProgress((lp as ProgRow[]) ?? []);
    setJobs(jb);
    setFetching(false);
  }, []);

  async function review(id: string, decision: 'approved' | 'rejected', reason?: string) {
    await reviewJob(id, decision, reason);
    setRejectingId(null);
    setRejectReason('');
    load();
  }

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin, load]);

  // index progress by user → lesson
  const byUser = useMemo(() => {
    const m = new Map<string, Map<string, ProgRow>>();
    for (const r of progress) {
      if (!m.has(r.user_id)) m.set(r.user_id, new Map());
      m.get(r.user_id)!.set(r.lesson_id, r);
    }
    return m;
  }, [progress]);

  const userOverall = useCallback(
    (userId: string) => {
      const rows = byUser.get(userId);
      const pcts = ALL_LESSONS.map((l) => pctFor(rows?.get(l.id), l.id));
      const percent = pcts.length ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length) : 0;
      const done = ALL_LESSONS.filter((l) => pctFor(rows?.get(l.id), l.id) >= 100).length;
      return { percent, done, total: ALL_LESSONS.length };
    },
    [byUser],
  );

  async function setRole(id: string, role: AppRole) {
    await supabase.from('profiles').update({ role }).eq('id', id);
    load();
  }
  async function setTraining(id: string, training_role: TrainingRole | null) {
    await supabase.from('profiles').update({ training_role }).eq('id', id);
    load();
  }
  async function setActive(id: string, active: boolean) {
    await supabase.from('profiles').update({ active }).eq('id', id);
    load();
  }
  async function sendInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviteMsg(null);
    const email = inviteEmail.trim().toLowerCase();
    if (!email) return;
    const redirectTo = `${window.location.origin}${import.meta.env.BASE_URL}`;
    // training path only applies to plain users; staff roam all modules
    const training_role = inviteRole === 'user' ? inviteTraining : null;
    try {
      // preferred path: the invite-user Edge Function emails the invitee
      const { data, error } = await supabase.functions.invoke('invite-user', {
        body: { email, role: inviteRole, training_role, redirectTo },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setInviteMsg(t('adminInviteEmailed').replace('{email}', email));
      setInviteEmail('');
      load();
      return;
    } catch {
      // fallback (function not deployed yet): just pre-authorize the role
      const { error: insErr } = await supabase
        .from('invites')
        .insert({ email, role: inviteRole, training_role, created_by: profile?.id });
      setInviteMsg(insErr ? insErr.message : t('adminInviteSaved').replace('{email}', email));
      if (!insErr) setInviteEmail('');
    }
  }

  if (loading) return null;
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<span className="header-link">{t('adminTitle')}</span>} />

        <div className="title-block">
          <div className="eyebrow">{t('adminEyebrow')}</div>
          <h1 className="lesson-title">{t('adminTitle')}</h1>
          <p className="lesson-subtitle">{t('adminSubtitle')}</p>
          <Link to="/admin/studio">
            <button className="lesson-cta" style={{ marginTop: 16 }}>🎬 Content Studio — build demos & lessons →</button>
          </Link>
        </div>

        {/* invite */}
        <form className="admin-invite" onSubmit={sendInvite}>
          <div className="ai-title">{t('adminInvite')}</div>
          <div className="ai-row">
            <input
              type="email"
              placeholder={t('authEmail')}
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
            />
            <select value={inviteRole} onChange={(e) => setInviteRole(e.target.value as AppRole)}>
              <option value="user">{t('roleUserLabel')}</option>
              <option value="csm">{t('roleCsmLabel')}</option>
              <option value="admin">{t('roleAdminLabel')}</option>
            </select>
            {inviteRole === 'user' && (
              <select
                value={inviteTraining}
                onChange={(e) => setInviteTraining(e.target.value as TrainingRole)}
                title={t('adminTrainingPath')}
              >
                <option value="operator">{t('roleOperator')}</option>
                <option value="supervisor">{t('roleSupervisor')}</option>
                <option value="internal">{t('roleInternal')}</option>
              </select>
            )}
            <button type="submit" className="lesson-cta">{t('adminInviteBtn')}</button>
          </div>
          {inviteMsg && <div className="ai-msg">{inviteMsg}</div>}
          <div className="ai-hint">{t('adminInviteHint')}</div>
        </form>

        {/* lesson-content approvals (CSM uploads awaiting review) */}
        {jobs.some((j) => j.approval_status === 'pending') && (
          <div className="admin-users" style={{ marginBottom: 24 }}>
            <div className="au-head" style={{ gridTemplateColumns: '2.6fr 1fr 1.4fr' }}>
              <span>Lesson awaiting approval</span>
              <span>Uploaded</span>
              <span>Decision</span>
            </div>
            {jobs
              .filter((j) => j.approval_status === 'pending')
              .map((j) => (
                <div key={j.id} className="au-row" style={{ gridTemplateColumns: '2.6fr 1fr 1.4fr', cursor: 'default' }}>
                  <div className="au-user">
                    <div className="au-name">{j.title}</div>
                    {j.notes && <div className="au-email">{j.notes}</div>}
                  </div>
                  <div className="au-email">{new Date(j.created_at).toLocaleDateString()}</div>
                  {rejectingId === j.id ? (
                    <div className="studio-reject-form">
                      <input
                        type="text"
                        placeholder="Reason (shown to the uploader)"
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        autoFocus
                      />
                      <div className="studio-review">
                        <button className="lesson-cta" onClick={() => review(j.id, 'rejected', rejectReason)}>
                          Confirm reject
                        </button>
                        <button className="au-toggle" onClick={() => { setRejectingId(null); setRejectReason(''); }}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="studio-review">
                      <button className="lesson-cta" onClick={() => review(j.id, 'approved')}>Approve</button>
                      <button className="au-toggle" onClick={() => setRejectingId(j.id)}>Reject</button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* users */}
        <div className="admin-users">
          <div className="au-head">
            <span>{t('adminUser')}</span>
            <span>{t('adminRole')}</span>
            <span>{t('adminCompletion')}</span>
            <span>{t('adminStatus')}</span>
          </div>
          {fetching && <div className="au-empty">…</div>}
          {!fetching && loadError && (
            <div className="au-empty au-error">
              {t('adminLoadError')}{' '}
              <button className="au-toggle" onClick={load}>{t('adminRetry')}</button>
            </div>
          )}
          {!fetching && !loadError && users.length === 0 && <div className="au-empty">{t('adminNoUsers')}</div>}
          {users.map((u) => {
            const o = userOverall(u.id);
            const rows = byUser.get(u.id);
            const open = expanded === u.id;
            return (
              <div key={u.id} className={`au-row-wrap${open ? ' open' : ''}`}>
                <div className="au-row" onClick={() => setExpanded(open ? null : u.id)}>
                  <div className="au-user">
                    <div className="au-name">{u.full_name || u.email}</div>
                    <div className="au-email">{u.email}</div>
                  </div>
                  <div>
                    <select
                      className="au-role"
                      value={u.role}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => setRole(u.id, e.target.value as AppRole)}
                    >
                      <option value="user">{t('roleUserLabel')}</option>
                      <option value="csm">{t('roleCsmLabel')}</option>
                      <option value="admin">{t('roleAdminLabel')}</option>
                    </select>
                    {u.role === 'user' && (
                      <select
                        className="au-role"
                        style={{ marginTop: 6 }}
                        value={u.training_role ?? ''}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setTraining(u.id, (e.target.value || null) as TrainingRole | null)}
                        title={t('adminTrainingPath')}
                      >
                        <option value="">{t('adminAllPaths')}</option>
                        <option value="operator">{t('roleOperator')}</option>
                        <option value="supervisor">{t('roleSupervisor')}</option>
                        <option value="internal">{t('roleInternal')}</option>
                      </select>
                    )}
                  </div>
                  <div className="au-prog">
                    <ProgressRing percent={o.percent} size={34} stroke={4} />
                    <span>{o.done}/{o.total} {t('lessonsWord')}</span>
                  </div>
                  <div>
                    <button
                      className={`au-toggle${u.active ? ' on' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActive(u.id, !u.active); }}
                    >
                      {u.active ? t('adminActive') : t('adminDisabled')}
                    </button>
                  </div>
                </div>
                {open && (
                  <div className="au-detail">
                    {MODULES.map((m) => {
                      const real = m.lessons.filter((l) => !l.comingSoon && getLesson(l.id));
                      if (real.length === 0) return null;
                      const mPcts = real.map((l) => pctFor(rows?.get(l.id), l.id));
                      const mPct = Math.round(mPcts.reduce((a, b) => a + b, 0) / real.length);
                      return (
                        <div key={m.id} className="au-mod">
                          <div className="au-mod-head">
                            <span className="tag-chip">{m.tag}</span>
                            <span className="au-mod-name">{m.name[lang]}</span>
                            <span className="au-mod-pct">{mPct}%</span>
                          </div>
                          <div className="au-lessons">
                            {real.map((l) => {
                              const lp = pctFor(rows?.get(l.id), l.id);
                              const lesson = getLesson(l.id)!;
                              const title = lesson.content[lang].title.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
                              return (
                                <div key={l.id} className="au-lesson">
                                  <span className="au-lesson-name">{title}</span>
                                  <span className={`au-lesson-pct${lp >= 100 ? ' done' : ''}`}>{lp >= 100 ? '✓' : `${lp}%`}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}
