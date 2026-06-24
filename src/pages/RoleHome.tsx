import { useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Thumb, { lessonGlyph, moduleAccent, moduleGlyph } from '../components/Thumb';
import ProgressRing from '../components/ProgressRing';
import { useLanguage } from '../context/LanguageContext';
import { ROLES, getLesson, lessonTagFor, modulesForRole } from '../data/catalog';
import type { RoleId } from '../data/types';
import { getLessonProgress } from '../lib/progress';
import { lessonPercent, moduleCompletion, roleCompletion } from '../lib/completion';
import { useTour } from '../context/TourContext';

const ROLE_LABEL_KEY: Record<RoleId, string> = {
  operator: 'roleOperator',
  supervisor: 'roleSupervisor',
  internal: 'roleInternal',
};

export default function RoleHome() {
  const { role } = useParams();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const { maybeStartFirstVisit } = useTour();

  const validRole = !!role && ROLES.includes(role as RoleId);
  useEffect(() => {
    if (validRole) maybeStartFirstVisit();
  }, [validRole, maybeStartFirstVisit]);

  if (!validRole) return <Navigate to="/" replace />;
  const roleId = role as RoleId;
  const modules = modulesForRole(roleId);
  const overall = roleCompletion(roleId);

  return (
    <div className="page">
      <div className="container">
        <Header
          meta={
            <Link to="/" className="header-link">
              {t(ROLE_LABEL_KEY[roleId])} · {t('changePath')}
            </Link>
          }
        />
        <div className="title-block">
          <div className="eyebrow">
            {t('homeEyebrow')} · {t(ROLE_LABEL_KEY[roleId])}
          </div>
          <h1 className="lesson-title" dangerouslySetInnerHTML={{ __html: t('homeTitle') }} />
          <p className="lesson-subtitle">{t('homeSubtitle')}</p>
        </div>

        <div className="progress-summary" data-tour="progress-summary">
          <ProgressRing percent={overall.percent} size={62} stroke={6} />
          <div className="ps-text">
            <div className="ps-title">{t('yourProgress')}</div>
            <div className="ps-meta">
              {overall.percent}% {t('completeWord')} · {overall.done}/{overall.total} {t('lessonsWord')}
            </div>
          </div>
          <div className="ps-rail">
            <div className="ps-rail-fill" style={{ width: `${overall.percent}%` }} />
          </div>
        </div>

        {modules.map((mod) => {
          const modComp = moduleCompletion(mod, roleId);
          return (
          <div className="module-card" key={mod.id}>
            <div className="module-head">
              <div className="module-thumb">
                <Thumb glyph={moduleGlyph(mod.number)} accent={moduleAccent(mod.number)} />
              </div>
              <div className="module-number">{String(mod.number).padStart(2, '0')}</div>
              <div className="module-name">{mod.name[lang]}</div>
              <span className="tag-chip">{mod.tag}</span>
              {modComp.total > 0 && (
                <div className="module-ring" title={`${modComp.done}/${modComp.total} ${t('lessonsWord')}`}>
                  <ProgressRing percent={modComp.percent} size={40} stroke={4} />
                </div>
              )}
              <div className="module-desc">{mod.description[lang]}</div>
            </div>
            <div className="lesson-list">
              {mod.lessons.map((ref, idx) => {
                // configuration tracks are reached via the Read ⇄ Configure toggle
                // inside the widget's lesson, so they don't get their own row.
                if (ref.internalOnly) return null;
                const lesson = getLesson(ref.id);
                if (!lesson || ref.comingSoon) {
                  return (
                    <div className="lesson-row soon" key={ref.id}>
                      <div className="lesson-thumb">
                        <Thumb glyph={moduleGlyph(mod.number)} accent={moduleAccent(mod.number)} />
                      </div>
                      <div className="lesson-row-info">
                        <div className="lesson-row-title">{t('comingSoon')}</div>
                        <div className="lesson-row-meta">
                          {t('lessonWord')} {idx + 1} · {t('comingSoonHint')}
                        </div>
                      </div>
                      <span className="tag-chip">{lessonTagFor(mod, idx + 1)}</span>
                      <span className="badge soon">{t('comingSoon')}</span>
                    </div>
                  );
                }
                const content = lesson.content[lang];
                const progress = getLessonProgress(lesson.id);
                const titleText = content.steps[0]
                  ? content.title.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
                  : lesson.id;
                const lessonTag = lessonTagFor(mod, lesson.lessonNumber);
                const cta = progress?.completed
                  ? t('reviewLesson')
                  : progress
                    ? t('resumeLesson')
                    : t('startLesson');
                const open = () => navigate(`/${roleId}/${mod.id}/${lesson.id}`);
                return (
                  <div className="lesson-row playable" key={ref.id} onClick={open}>
                    <div className="lesson-thumb">
                      <Thumb glyph={lessonGlyph(lesson.id, mod.number)} accent={moduleAccent(mod.number)} />
                      <div className="play-badge">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6,4 20,12 6,20" />
                        </svg>
                      </div>
                    </div>
                    <div className="lesson-row-info">
                      <div className="lesson-row-title">{titleText}</div>
                      <div className="lesson-row-meta">
                        {t('lessonWord')} {lesson.lessonNumber} · ~{lesson.estimatedMinutes} {t('minutesShort')} ·{' '}
                        {content.steps.length} {t('stepWord').toLowerCase()}s
                      </div>
                    </div>
                    <span className="tag-chip">{lessonTag}{ref.internalOnly ? '·C' : ''}</span>
                    {ref.internalOnly && <span className="badge config">⚙ {t('configRowBadge')}</span>}
                    {progress?.completed ? (
                      <span className="badge done">✓ {t('completedBadge')}</span>
                    ) : progress ? (
                      <span className="badge progress">{lessonPercent(lesson.id)}%</span>
                    ) : null}
                    <button
                      className="lesson-cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        open();
                      }}
                    >
                      {cta}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          );
        })}

        <Footer />
      </div>
    </div>
  );
}
