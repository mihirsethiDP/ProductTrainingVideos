import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { driveOpenUrl, drivePreviewUrl, driveThumbUrl, fetchShared, type SharedMedia } from '../lib/library';

/**
 * Zero-auth watch page for one equipment photo/video — the target of a forwarded
 * share link. Reads a single row through the share-token RPC, so no sign-in is
 * needed and the rest of the library stays invisible.
 *
 * Video plays in Drive's own embed (the only reliable way to stream a Drive file
 * on the web); the "Open in Google Drive" link is the escape hatch for any device
 * that blocks the iframe.
 */
export default function WatchEquipment() {
  const { token } = useParams();
  const { t } = useLanguage();
  const [item, setItem] = useState<SharedMedia | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');

  useEffect(() => {
    let stale = false;
    if (!token) { setState('missing'); return; }
    fetchShared(token)
      .then((found) => {
        if (stale) return;
        if (found) { setItem(found); setState('ready'); } else setState('missing');
      })
      .catch(() => { if (!stale) setState('missing'); });
    return () => { stale = true; };
  }, [token]);

  if (state === 'loading') {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <div className="au-empty">…</div>
        </div>
      </div>
    );
  }

  if (state === 'missing' || !item) {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <div className="lesson-fallback">
            <div className="lf-icon">🔧</div>
            <div className="lf-title">{t('eqMissingTitle')}</div>
            <div className="lf-body">{t('eqMissingBody')}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <Header meta={<span className="header-link">{item.plant_name}</span>} />

        <div className="title-block">
          <div className="eyebrow">{t('eqEyebrow')} · {item.plant_name}</div>
          <h1 className="lesson-title">{item.title}</h1>
          {item.equipment && <div className="eqw-equip">{item.equipment}</div>}
          {item.description && <p className="lesson-subtitle">{item.description}</p>}
        </div>

        {item.media_kind === 'video' ? (
          <div className="eqw-frame">
            <iframe
              src={drivePreviewUrl(item.drive_file_id)}
              title={item.title}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="eqw-photo">
            <img src={driveThumbUrl(item.drive_file_id, 1600)} alt={item.title} />
          </div>
        )}

        <div className="eqw-foot">
          <a className="studio-share" href={driveOpenUrl(item.drive_file_id)} target="_blank" rel="noopener noreferrer">
            {t('eqOpenDrive')}
          </a>
          <span className="eqw-hint">{t('eqTrouble')}</span>
        </div>

        <Footer />
      </div>
    </div>
  );
}
