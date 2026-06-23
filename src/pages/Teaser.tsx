import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Thumb, { moduleAccent, moduleGlyph } from '../components/Thumb';
import { useLanguage } from '../context/LanguageContext';
import { MODULES, getLesson } from '../data/catalog';

export default function Teaser() {
  const { lang, t } = useLanguage();
  // unique modules that actually have real lessons, for the preview grid
  const preview = MODULES.filter((m) => m.lessons.some((l) => !l.comingSoon && getLesson(l.id)));

  return (
    <div className="page">
      <div className="container">
        <Header />

        <div className="teaser-hero">
          <div className="teaser-eyebrow">{t('homeEyebrow')}</div>
          <h1 className="teaser-title" dangerouslySetInnerHTML={{ __html: t('teaserHeadline') }} />
          <p className="teaser-sub">{t('teaserSub')}</p>
          <div className="teaser-cta-row">
            <Link to="/login" className="teaser-cta-primary">{t('authCreate')}</Link>
            <Link to="/login" className="teaser-cta-secondary">{t('authSignIn')}</Link>
          </div>
          <div className="teaser-note">🔒 {t('teaserLockNote')}</div>
        </div>

        <div className="teaser-inside-label">{t('teaserInside')}</div>
        <div className="teaser-grid">
          {preview.map((m) => (
            <div className="teaser-card" key={m.id}>
              <div className="teaser-thumb">
                <Thumb glyph={moduleGlyph(m.number)} accent={moduleAccent(m.number)} />
                <span className="teaser-lock">🔒</span>
              </div>
              <div className="teaser-card-body">
                <div className="teaser-card-name">{m.name[lang]}</div>
                <div className="teaser-card-desc">{m.description[lang]}</div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/login" className="teaser-foot-cta">{t('teaserCta')} →</Link>

        <Footer />
      </div>
    </div>
  );
}
