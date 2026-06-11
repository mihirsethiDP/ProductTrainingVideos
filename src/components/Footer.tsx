import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <div className="footer">
      DIGITALPAANI · <em>{t('tagline')}</em> · TRAINING SERIES
    </div>
  );
}
