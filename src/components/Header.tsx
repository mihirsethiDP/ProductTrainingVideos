import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export default function Header({ meta }: { meta?: ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="header">
      <Link to="/" className="brand-mark">
        <span className="brand-logo-chip">
          <img className="brand-logo-img" src={LOGO_SRC} alt="DigitalPaani" />
        </span>
        <div className="brand-text">{t('brandText')}</div>
      </Link>
      <div className="header-right">
        {meta}
        <LanguageSelector />
      </div>
    </div>
  );
}
