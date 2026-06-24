import { MODULES, getLesson, modulesForRole } from '../data/catalog';
import type { ModuleDef, RoleId } from '../data/types';
import { getLessonProgress } from './progress';

/** Percent complete for one lesson (0..100). */
export function lessonPercent(lessonId: string): number {
  const lesson = getLesson(lessonId);
  const p = getLessonProgress(lessonId);
  const total = lesson?.layouts.length ?? p?.totalSteps ?? 0;
  if (!p || total <= 0) return 0;
  if (p.completed) return 100;
  return Math.min(100, Math.round(((p.lastStep + 1) / total) * 100));
}

/** Real (non-coming-soon, registered) lessons inside a module, scoped to a
 *  role — internal-only configuration tracks are excluded for other roles. */
export function moduleLessons(module: ModuleDef, role?: RoleId): string[] {
  return module.lessons
    .filter((l) => !l.comingSoon && getLesson(l.id) && (!l.internalOnly || role === 'internal'))
    .map((l) => l.id);
}

export interface Tally {
  percent: number; // 0..100, averaged across lessons
  done: number; // lessons fully completed
  total: number; // real lessons
}

export function moduleCompletion(module: ModuleDef, role?: RoleId): Tally {
  const ids = moduleLessons(module, role);
  if (ids.length === 0) return { percent: 0, done: 0, total: 0 };
  const percents = ids.map(lessonPercent);
  const percent = Math.round(percents.reduce((a, b) => a + b, 0) / ids.length);
  const done = ids.filter((id) => lessonPercent(id) >= 100).length;
  return { percent, done, total: ids.length };
}

/** Overall completion for a role (averaged across every real lesson it sees). */
export function roleCompletion(role: RoleId): Tally {
  const ids = modulesForRole(role).flatMap((m) => moduleLessons(m, role));
  if (ids.length === 0) return { percent: 0, done: 0, total: 0 };
  const percents = ids.map(lessonPercent);
  const percent = Math.round(percents.reduce((a, b) => a + b, 0) / ids.length);
  const done = ids.filter((id) => lessonPercent(id) >= 100).length;
  return { percent, done, total: ids.length };
}

/** Overall completion across the whole catalog (admin-style view). */
export function overallCompletion(): Tally {
  const ids = MODULES.flatMap((m) => moduleLessons(m, 'internal'));
  if (ids.length === 0) return { percent: 0, done: 0, total: 0 };
  const percents = ids.map(lessonPercent);
  const percent = Math.round(percents.reduce((a, b) => a + b, 0) / ids.length);
  const done = ids.filter((id) => lessonPercent(id) >= 100).length;
  return { percent, done, total: ids.length };
}
