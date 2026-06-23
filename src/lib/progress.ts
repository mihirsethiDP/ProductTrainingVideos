import type { LangCode, RoleId } from '../data/types';
import { supabase } from './supabase';

const KEY = 'dp-training-v1';

// When a user is logged in, lesson progress is mirrored to Supabase so it
// follows them across devices and is visible to admins. Set by AuthContext.
let syncUserId: string | null = null;
export function setProgressSyncUser(id: string | null) {
  syncUserId = id;
}

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
  const entry = {
    lastStep: step,
    totalSteps,
    completed: prev?.completed || step >= totalSteps - 1,
  };
  store.lessons[lessonId] = entry;
  write(store);

  // mirror to the cloud for logged-in users (fire-and-forget)
  if (syncUserId) {
    void supabase.from('lesson_progress').upsert(
      {
        user_id: syncUserId,
        lesson_id: lessonId,
        last_step: entry.lastStep,
        total_steps: entry.totalSteps,
        completed: entry.completed,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,lesson_id' },
    );
  }
}

/** Pull a logged-in user's cloud progress and merge it into the local store
 *  (keeping whichever record is further along per lesson). */
export async function pullRemoteProgress(userId: string): Promise<void> {
  const { data, error } = await supabase
    .from('lesson_progress')
    .select('lesson_id,last_step,total_steps,completed')
    .eq('user_id', userId);
  if (error || !data) return;
  const store = read();
  for (const row of data) {
    const local = store.lessons[row.lesson_id];
    const remoteFurther =
      !local || row.completed || row.last_step > local.lastStep;
    if (remoteFurther) {
      store.lessons[row.lesson_id] = {
        lastStep: row.last_step,
        totalSteps: row.total_steps,
        completed: row.completed || (local?.completed ?? false),
      };
    }
  }
  write(store);
}
