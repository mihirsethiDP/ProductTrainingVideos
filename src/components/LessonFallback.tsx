import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

/**
 * Shown instead of a lesson when its id isn't in this tab's bundle ('missing')
 * or the demo is past its 30-day window ('expired').
 *
 * The 'missing' case is almost always a STALE BUNDLE: the Studio job list is
 * fetched live from Supabase, but the lesson catalog is baked into the JS at
 * build time — a tab opened before the latest deploy (or a cached index.html)
 * doesn't know about a just-published demo. So on first sight we reload once
 * with a cache-busting query (guarded via sessionStorage so we never loop);
 * only if the lesson is STILL missing after that do we show this screen.
 */
export default function LessonFallback({ kind, isDemo }: { kind: 'missing' | 'expired'; isDemo: boolean }) {
  const { t } = useLanguage();
  const refreshKey = `dp-bundle-refresh-${window.location.hash}`;
  const [autoRefreshing, setAutoRefreshing] = useState(false);

  const freshReload = () => {
    // a query param before the hash forces a fresh index.html (bypassing the
    // 10-minute GitHub Pages cache), which references the newest bundle
    const { origin, pathname, hash } = window.location;
    window.location.replace(`${origin}${pathname}?v=${Date.now()}${hash}`);
  };

  useEffect(() => {
    if (kind !== 'missing') return;
    try {
      if (!sessionStorage.getItem(refreshKey)) {
        sessionStorage.setItem(refreshKey, '1');
        setAutoRefreshing(true);
        freshReload();
      }
    } catch {
      /* storage unavailable — just show the screen */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // brief blank-ish state while the automatic reload kicks in (avoids flashing
  // an error at someone whose demo is about to appear)
  if (autoRefreshing) {
    return (
      <div className="page">
        <div className="auth-loading">…</div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <div className="lesson-fallback">
          <div className="lf-icon">{kind === 'expired' ? '⌛' : '🎬'}</div>
          <h1 className="lf-title">{kind === 'expired' ? t('expiredTitle') : t('nfTitle')}</h1>
          <p className="lf-body">
            {kind === 'expired' ? t('expiredBody') : isDemo ? t('nfBodyDemo') : t('nfBody')}
          </p>
          <div className="lf-actions">
            {kind === 'missing' && (
              <button
                className="lesson-cta"
                onClick={() => {
                  try {
                    sessionStorage.removeItem(refreshKey);
                  } catch {
                    /* ignore */
                  }
                  freshReload();
                }}
              >
                ↻ {t('nfRetry')}
              </button>
            )}
            <Link to="/" className="lf-home">{t('nfHome')}</Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
