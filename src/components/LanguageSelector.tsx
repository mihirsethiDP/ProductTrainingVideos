import { useEffect, useRef, useState } from 'react';
import { LANGUAGE_LIST } from '../data/i18n';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { lang, meta, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

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
      <div className={`lang-dropdown${open ? ' open' : ''}`}>
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
