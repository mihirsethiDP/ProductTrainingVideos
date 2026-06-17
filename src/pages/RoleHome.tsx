import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { ROLES, getLesson, lessonTagFor, modulesForRole } from '../data/catalog';
import type { RoleId } from '../data/types';
import { getLessonProgress } from '../lib/progress';

const ROLE_LABEL_KEY: Record<RoleId, string> = {
  operator: 'roleOperator',
  supervisor: 'roleSupervisor',
  internal: 'roleInternal',
};

export default function RoleHome() {
  const { role } = useParams();
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  if (!role || !ROLES.includes(role as RoleId)) return <Navigate to="/" replace />;
  const roleId = role as RoleId;
  const modules = modulesForRole(roleId);

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

        {modules.map((mod) => (
          <div className="module-card" key={mod.id}>
            <div className="module-head">
              <div className="module-number">{String(mod.number).padStart(2, '0')}</div>
              <div className="module-name">{mod.name[lang]}</div>
              <span className="tag-chip">{mod.tag}</span>
              <div className="module-desc">{mod.description[lang]}</div>
            </div>
            <div className="lesson-list">
              {mod.lessons.map((ref, idx) => {
                const lesson = getLesson(ref.id);
                if (!lesson || ref.comingSoon) {
                  return (
                    <div className="lesson-row soon" key={ref.id}>
                      <div className="lesson-thumb" />
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
                const thumb = lesson.screenshots.fullDashboard ?? Object.values(lesson.screenshots)[0];
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
                      {thumb ? (
                        <img src={thumb} alt="" loading="lazy" />
                      ) : (
                        <div className="thumb-fallback">{lessonTag}</div>
                      )}
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
                    <span className="tag-chip">{lessonTag}</span>
                    {progress?.completed ? (
                      <span className="badge done">✓ {t('completedBadge')}</span>
                    ) : progress ? (
                      <span className="badge progress">{t('inProgressBadge')}</span>
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
        ))}

        <Footer />
      </div>
    </div>
  );
}
