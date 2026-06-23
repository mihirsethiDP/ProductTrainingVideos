import { useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressRing from '../components/ProgressRing';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase, type AppRole, type Profile } from '../lib/supabase';
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
  const [inviteMsg, setInviteMsg] = useState<string | null>(null);
  const [fetching, setFetching] = useState(true);

  const load = useCallback(async () => {
    setFetching(true);
    const [{ data: p }, { data: lp }] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: true }),
      supabase.from('lesson_progress').select('user_id,lesson_id,last_step,total_steps,completed'),
    ]);
    setUsers((p as Profile[]) ?? []);
    setProgress((lp as ProgRow[]) ?? []);
    setFetching(false);
  }, []);

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
  async function setActive(id: string, active: boolean) {
    await supabase.from('profiles').update({ active }).eq('id', id);
    load();
  }
  async function sendInvite(e: React.FormEvent) {
    e.preventDefault();
    setInviteMsg(null);
    const email = inviteEmail.trim().toLowerCase();
    if (!email) return;
    const { error } = await supabase.from('invites').insert({ email, role: inviteRole, created_by: profile?.id });
    setInviteMsg(error ? error.message : t('adminInviteSent').replace('{email}', email));
    if (!error) setInviteEmail('');
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
              <option value="admin">{t('roleAdminLabel')}</option>
            </select>
            <button type="submit" className="lesson-cta">{t('adminInviteBtn')}</button>
          </div>
          {inviteMsg && <div className="ai-msg">{inviteMsg}</div>}
          <div className="ai-hint">{t('adminInviteHint')}</div>
        </form>

        {/* users */}
        <div className="admin-users">
          <div className="au-head">
            <span>{t('adminUser')}</span>
            <span>{t('adminRole')}</span>
            <span>{t('adminCompletion')}</span>
            <span>{t('adminStatus')}</span>
          </div>
          {fetching && <div className="au-empty">…</div>}
          {!fetching && users.length === 0 && <div className="au-empty">{t('adminNoUsers')}</div>}
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
                      <option value="admin">{t('roleAdminLabel')}</option>
                    </select>
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
