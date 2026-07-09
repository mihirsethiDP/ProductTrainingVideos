import { Link, useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useTour } from '../context/TourContext';
import { useAuth } from '../context/AuthContext';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Header({ meta }: { meta?: ReactNode }) {
  const { t } = useLanguage();
  const { startTour } = useTour();
  const { session, profile, isAdmin, canCreate, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to="/" className="brand-mark" data-tour="brand">
        <span className="brand-logo-chip">
          <img className="brand-logo-img" src={LOGO_SRC} alt="DigitalPaani" />
        </span>
        <div className="brand-text">{t('brandText')}</div>
      </Link>
      <div className="header-right">
        {meta}
        <button className="tour-button" data-tour="tour-button" onClick={startTour} title={t('tourButtonLabel')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4" />
            <line x1="12" y1="17.5" x2="12" y2="17.5" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span>{t('tourButtonLabel')}</span>
        </button>
        {canCreate && !isAdmin && (
          <Link to="/admin/studio" className="tour-button" title="Content Studio">
            <span>🎬 Studio</span>
          </Link>
        )}
        {isAdmin && (
          <Link to="/admin" className="tour-button" title={t('adminTitle')}>
            <span>{t('adminTitle')}</span>
          </Link>
        )}
        {session ? (
          <div className="auth-chip" data-tour="account">
            <span className="auth-chip-name">{profile?.full_name || profile?.email?.split('@')[0] || t('authAccount')}</span>
            <button className="auth-chip-out" onClick={() => { void signOut(); navigate('/'); }}>{t('authSignOut')}</button>
          </div>
        ) : (
          <Link to="/login" className="tour-button" data-tour="auth">
            <span>{t('authSignIn')}</span>
          </Link>
        )}
        <span data-tour="language"><LanguageSelector /></span>
      </div>
    </div>
  );
}
