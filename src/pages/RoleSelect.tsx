import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { modulesForRole } from '../data/catalog';
import type { RoleId } from '../data/types';
import { moduleLessons } from '../lib/completion';
import { saveRole } from '../lib/progress';

const ROLE_CARDS: { id: RoleId; icon: string; nameKey: string; descKey: string }[] = [
  { id: 'operator', icon: '🛠️', nameKey: 'roleOperator', descKey: 'roleOperatorDesc' },
  { id: 'supervisor', icon: '📊', nameKey: 'roleSupervisor', descKey: 'roleSupervisorDesc' },
  { id: 'internal', icon: '💧', nameKey: 'roleInternal', descKey: 'roleInternalDesc' },
];

export default function RoleSelect() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { assignedRole } = useAuth();

  // invited users are locked to the path the admin chose — no picker for them
  if (assignedRole) return <Navigate to={`/${assignedRole}`} replace />;

  return (
    <div className="page">
      <div className="container">
        <Header />
        <div className="title-block">
          <div className="eyebrow">{t('homeEyebrow')}</div>
          <h1 className="lesson-title" dangerouslySetInnerHTML={{ __html: t('homeTitle') }} />
          <p className="lesson-subtitle">{t('homeSubtitle')}</p>
        </div>

        <div className="eyebrow" style={{ padding: '0 8px' }}>{t('whoAreYou')}</div>
        <div className="role-grid" data-tour="paths">
          {ROLE_CARDS.map((card) => {
            const modules = modulesForRole(card.id);
            // count only real, role-visible lessons — not coming-soon or hidden
            // config rows — so the card matches the actual course (and RoleHome)
            const lessonCount = modules.reduce((n, m) => n + moduleLessons(m, card.id).length, 0);
            return (
              <button
                key={card.id}
                className="role-card"
                data-tour={`path-${card.id}`}
                onClick={() => {
                  saveRole(card.id);
                  navigate(`/${card.id}`);
                }}
              >
                <div className={`role-icon ${card.id}`}>{card.icon}</div>
                <div className="role-name">{t(card.nameKey)}</div>
                <div className="role-desc">{t(card.descKey)}</div>
                <div className="role-count">
                  {modules.length} {t('moduleWord')} · {lessonCount} {t('lessonsWord')}
                </div>
              </button>
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}
