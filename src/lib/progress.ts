import type { LangCode, RoleId } from '../data/types';

const KEY = 'dp-training-v1';

interface LessonProgress {
  lastStep: number;
  totalSteps: number;
  completed: boolean;
}

interface Store {
  lang?: LangCode;
  role?: RoleId;
  lessons: Record<string, LessonProgress>; // keyed by lessonId
}

function read(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { lessons: {}, ...JSON.parse(raw) };
  } catch {
    /* corrupted or unavailable storage — start fresh */
  }
  return { lessons: {} };
}

function write(store: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* storage unavailable (private mode) — progress just won't persist */
  }
}

export function getSavedLang(): LangCode | undefined {
  return read().lang;
}

export function saveLang(lang: LangCode) {
  write({ ...read(), lang });
}

export function getSavedRole(): RoleId | undefined {
  return read().role;
}

export function saveRole(role: RoleId) {
  write({ ...read(), role });
}

export function getLessonProgress(lessonId: string): LessonProgress | undefined {
  return read().lessons[lessonId];
}

export function saveLessonStep(lessonId: string, step: number, totalSteps: number) {
  const store = read();
  const prev = store.lessons[lessonId];
  store.lessons[lessonId] = {
    lastStep: step,
    totalSteps,
    completed: prev?.completed || step >= totalSteps - 1,
  };
  write(store);
}
