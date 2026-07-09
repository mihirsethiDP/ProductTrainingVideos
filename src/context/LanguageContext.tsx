import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { LangCode } from '../data/types';
import { LANGUAGE_LIST, UI } from '../data/i18n';
import type { LanguageMeta } from '../data/i18n';
import { getSavedLang, saveLang } from '../lib/progress';

interface LanguageContextValue {
  lang: LangCode;
  meta: LanguageMeta;
  setLang: (code: LangCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => getSavedLang() ?? 'en');

  const setLang = useCallback((code: LangCode) => {
    setLangState(code);
    saveLang(code);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const meta = LANGUAGE_LIST.find((l) => l.code === lang) ?? LANGUAGE_LIST[0];
    // an unknown/corrupt code must degrade to English, never crash on UI[lang]
    const strings = UI[lang] ?? UI.en;
    return {
      lang,
      meta,
      setLang,
      t: (key: string) => strings[key] ?? UI.en[key] ?? key,
    };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
