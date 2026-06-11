import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ meta }: { meta?: ReactNode }) {
  const { t } = useLanguage();
  return (
    <div className="header">
      <Link to="/" className="brand-mark">
        <div className="brand-icon">P</div>
        <div>
          <div className="brand-name">DigitalPaani</div>
          <div className="brand-text">{t('brandText')}</div>
        </div>
      </Link>
      <div className="header-right">
        {meta}
        <LanguageSelector />
      </div>
    </div>
  );
}
