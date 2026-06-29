import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { searchContent } from '../lib/search';
import type { RoleId } from '../data/types';

/** Highlights the matched query inside a snippet. */
function Highlighted({ text, q }: { text: string; q: string }) {
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0 || !q) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function SearchBar({ role }: { role: RoleId }) {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const hits = useMemo(() => searchContent(query, role, lang), [query, role, lang]);
  const open = focused && query.trim().length >= 2;

  return (
    <div className="search-wrap" data-tour="search">
      <div className="search-field">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="search"
          value={query}
          placeholder={t('searchPlaceholder')}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          aria-label={t('searchPlaceholder')}
        />
      </div>
      {open && (
        <div className="search-results">
          {hits.length === 0 ? (
            <div className="search-empty">{t('searchNoResults')}</div>
          ) : (
            hits.map((h) => (
              <button
                key={`${h.lessonId}`}
                className="search-hit"
                onMouseDown={(e) => {
                  e.preventDefault();
                  navigate(`/${role}/${h.moduleId}/${h.lessonId}`);
                }}
              >
                <div className="search-hit-top">
                  <span className="search-hit-title">
                    <Highlighted text={h.lessonTitle} q={query} />
                  </span>
                  <span className="tag-chip">{h.lessonTag}</span>
                </div>
                <div className="search-hit-meta">
                  {String(h.moduleNumber).padStart(2, '0')} · {h.moduleName} · {h.where}
                </div>
                <div className="search-hit-snippet">
                  <Highlighted text={h.snippet} q={query} />
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
