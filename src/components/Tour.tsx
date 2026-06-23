import { useEffect, useLayoutEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface TourStep {
  selector: string; // element to spotlight (first match)
  titleKey: string;
  bodyKey: string;
}

interface Rect { top: number; left: number; width: number; height: number; }

function measure(selector: string): Rect | null {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return null;
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}

export default function Tour({ steps, onClose }: { steps: TourStep[]; onClose: () => void }) {
  const { t } = useLanguage();
  const [i, setI] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);

  const step = steps[i];
  const isLast = i === steps.length - 1;

  // scroll the target into view, then measure it (and re-measure on resize/scroll)
  useLayoutEffect(() => {
    const el = document.querySelector(step.selector) as HTMLElement | null;
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const update = () => setRect(measure(step.selector));
    const id = window.setTimeout(update, 320); // after smooth scroll settles
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [step.selector]);

  // keyboard: Esc closes, arrows navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI((n) => Math.min(steps.length - 1, n + 1));
      if (e.key === 'ArrowLeft') setI((n) => Math.max(0, n - 1));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [steps.length, onClose]);

  const pad = 8;
  const hole = rect
    ? { top: rect.top - pad, left: rect.left - pad, width: rect.width + pad * 2, height: rect.height + pad * 2 }
    : null;

  // position the tooltip: below the hole if room, otherwise above; clamp horizontally
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const tipW = Math.min(340, vw - 32);
  let tipTop = hole ? hole.top + hole.height + 14 : vh / 2 - 80;
  let tipLeft = hole ? hole.left + hole.width / 2 - tipW / 2 : vw / 2 - tipW / 2;
  const belowOverflow = hole ? tipTop + 220 > vh : false;
  if (belowOverflow && hole) tipTop = Math.max(16, hole.top - 200);
  tipLeft = Math.max(16, Math.min(tipLeft, vw - tipW - 16));

  return (
    <div className="tour-overlay" role="dialog" aria-modal="true">
      {/* dim layer with a "hole" cut out via box-shadow */}
      {hole ? (
        <div
          className="tour-hole"
          style={{ top: hole.top, left: hole.left, width: hole.width, height: hole.height }}
        />
      ) : (
        <div className="tour-scrim-full" />
      )}

      <div className="tour-tip" style={{ top: tipTop, left: tipLeft, width: tipW }}>
        <div className="tour-tip-step">{t('tourStep')} {i + 1} / {steps.length}</div>
        <div className="tour-tip-title">{t(step.titleKey)}</div>
        <div className="tour-tip-body">{t(step.bodyKey)}</div>
        <div className="tour-tip-actions">
          <button className="tour-skip" onClick={onClose}>{t('tourSkip')}</button>
          <div className="tour-nav">
            {i > 0 && <button className="tour-btn ghost" onClick={() => setI(i - 1)}>{t('prev')}</button>}
            {isLast ? (
              <button className="tour-btn" onClick={onClose}>{t('tourDone')}</button>
            ) : (
              <button className="tour-btn" onClick={() => setI(i + 1)}>{t('tourNext')}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
