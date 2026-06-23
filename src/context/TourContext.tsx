import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import Tour, { type TourStep } from '../components/Tour';

// Steps target elements by data-tour attribute (present on the home hub).
const HOME_STEPS: TourStep[] = [
  { selector: '[data-tour="brand"]', titleKey: 'tourWelcomeT', bodyKey: 'tourWelcomeB' },
  { selector: '[data-tour="language"]', titleKey: 'tourLangT', bodyKey: 'tourLangB' },
  { selector: '[data-tour="progress-summary"]', titleKey: 'tourProgressT', bodyKey: 'tourProgressB' },
  { selector: '.module-card', titleKey: 'tourModulesT', bodyKey: 'tourModulesB' },
  { selector: '.lesson-row.playable', titleKey: 'tourLessonsT', bodyKey: 'tourLessonsB' },
  { selector: '[data-tour="tour-button"]', titleKey: 'tourRelaunchT', bodyKey: 'tourRelaunchB' },
];

const SEEN_KEY = 'dp-tour-seen-v1';

interface TourCtx {
  startTour: () => void;
  maybeStartFirstVisit: () => void;
}

const Ctx = createContext<TourCtx>({ startTour: () => {}, maybeStartFirstVisit: () => {} });
export const useTour = () => useContext(Ctx);

export function TourProvider({ children }: { children: ReactNode }) {
  const [steps, setSteps] = useState<TourStep[] | null>(null);

  // keep only steps whose target is currently on the page
  const resolve = useCallback(
    () => HOME_STEPS.filter((s) => document.querySelector(s.selector)),
    [],
  );

  const startTour = useCallback(() => {
    const available = resolve();
    if (available.length) setSteps(available);
  }, [resolve]);

  const maybeStartFirstVisit = useCallback(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === '1';
    } catch {
      /* storage unavailable */
    }
    if (seen) return;
    // wait a beat for the home content to render before measuring targets
    window.setTimeout(() => {
      const available = resolve();
      if (available.length) setSteps(available);
    }, 600);
  }, [resolve]);

  const close = useCallback(() => {
    setSteps(null);
    try {
      localStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <Ctx.Provider value={{ startTour, maybeStartFirstVisit }}>
      {children}
      {steps && <Tour steps={steps} onClose={close} />}
    </Ctx.Provider>
  );
}
