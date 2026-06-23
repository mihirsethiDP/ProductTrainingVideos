import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { useTour } from '../context/TourContext';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Header({ meta }: { meta?: ReactNode }) {
  const { t } = useLanguage();
  const { startTour } = useTour();
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
        <span data-tour="language"><LanguageSelector /></span>
      </div>
    </div>
  );
}
