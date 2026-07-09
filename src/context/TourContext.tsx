import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import Tour, { type TourStep } from '../components/Tour';

// One master list; each page shows the steps whose target exists on it.
// Path-picker steps appear on RoleSelect, module/lesson steps on RoleHome.
const HOME_STEPS: TourStep[] = [
  { selector: '[data-tour="brand"]', titleKey: 'tourWelcomeT', bodyKey: 'tourWelcomeB' },
  // — role select (choose your path) —
  { selector: '[data-tour="paths"]', titleKey: 'tourPathsT', bodyKey: 'tourPathsB' },
  { selector: '[data-tour="path-operator"]', titleKey: 'tourOperatorT', bodyKey: 'tourOperatorB' },
  { selector: '[data-tour="path-supervisor"]', titleKey: 'tourSupervisorT', bodyKey: 'tourSupervisorB' },
  { selector: '[data-tour="path-internal"]', titleKey: 'tourInternalT', bodyKey: 'tourInternalB' },
  // — role home (modules & lessons) —
  { selector: '[data-tour="progress-summary"]', titleKey: 'tourProgressT', bodyKey: 'tourProgressB' },
  { selector: '.module-card', titleKey: 'tourModulesT', bodyKey: 'tourModulesB' },
  { selector: '.lesson-row.playable', titleKey: 'tourLessonsT', bodyKey: 'tourLessonsB' },
  // — shared chrome —
  { selector: '[data-tour="account"]', titleKey: 'tourAccountT', bodyKey: 'tourAccountB' },
  { selector: '[data-tour="language"]', titleKey: 'tourLangT', bodyKey: 'tourLangB' },
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

  // never replace the steps of a tour that's already open — swapping the array
  // under a running Tour strands its step index past the new length (crash)
  const setIfClosed = useCallback((available: TourStep[]) => {
    setSteps((prev) => prev ?? (available.length ? available : null));
  }, []);

  const maybeStartFirstVisit = useCallback(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === '1';
    } catch {
      /* storage unavailable */
    }
    if (seen) return;
    // wait a beat for the home content to render before measuring targets
    window.setTimeout(() => setIfClosed(resolve()), 600);
  }, [resolve, setIfClosed]);

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
