import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LANGUAGE_LIST } from '../data/i18n';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { lang, meta, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  // On mobile the selector can wrap to anywhere in the header row, so a fixed
  // left/right anchor can push the menu off either edge. When open, measure and
  // nudge the menu horizontally so it stays fully within the viewport. Desktop
  // keeps its CSS right-anchor (we clear the inline override). Re-run on resize
  // so crossing the 700px breakpoint while open doesn't strand a stale inline
  // left over the desktop right-anchor.
  useLayoutEffect(() => {
    const el = dropRef.current;
    if (!el) return;
    const clamp = () => {
      if (!open || window.innerWidth > 700) {
        el.style.left = '';
        return;
      }
      el.style.left = '0px';
      const margin = 12;
      const rect = el.getBoundingClientRect();
      let shift = 0;
      if (rect.right > window.innerWidth - margin) shift = window.innerWidth - margin - rect.right;
      if (rect.left + shift < margin) shift = margin - rect.left;
      el.style.left = `${shift}px`;
    };
    clamp();
    if (!open) return;
    window.addEventListener('resize', clamp);
    return () => window.removeEventListener('resize', clamp);
  }, [open]);

  return (
    <div className="lang-selector" ref={ref} onClick={() => setOpen((o) => !o)}>
      <svg className="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <div className="lang-current">
        <span className="lang-flag">{meta.flag}</span>
        <span>{meta.native}</span>
        <span className="lang-caret">▾</span>
      </div>
      <div ref={dropRef} className={`lang-dropdown${open ? ' open' : ''}`}>
        {LANGUAGE_LIST.map((l) => (
          <div
            key={l.code}
            className={`lang-option${l.code === lang ? ' active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setLang(l.code);
              setOpen(false);
            }}
          >
            <span className="lang-option-flag">{l.flag}</span>
            <span>{l.name}</span>
            <span className="lang-option-native">{l.native}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
