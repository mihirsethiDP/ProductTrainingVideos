import { MODULES, getLesson, modulesForRole } from '../data/catalog';
import type { ModuleDef, RoleId } from '../data/types';
import { getLessonProgress } from './progress';

/**
 * The modules a client organisation bought.
 *
 * NULL means unrestricted, which is every DigitalPaani account — internal staff
 * sit outside tenancy and see the whole catalogue. Encoding "unrestricted" as
 * null rather than "a set containing everything" means nobody has to remember
 * to grant internal people access when a new module ships.
 */
export type Entitlements = ReadonlySet<string> | null;

export const isEntitled = (moduleId: string, ent: Entitlements): boolean =>
  ent === null || ent.has(moduleId);

/**
 * The modules a person actually sees: their role's modules, narrowed to what
 * their organisation was sold.
 *
 * Every caller that used to reach for modulesForRole() should come here
 * instead — that is what keeps the denominator honest. A client who bought six
 * modules must never see a figure measured against fourteen.
 */
export function visibleModules(role: RoleId, ent: Entitlements = null): ModuleDef[] {
  return modulesForRole(role).filter((m) => isEntitled(m.id, ent));
}

/** Percent complete for one lesson (0..100). */
export function lessonPercent(lessonId: string): number {
  const lesson = getLesson(lessonId);
  const p = getLessonProgress(lessonId);
  const total = lesson?.layouts.length ?? p?.totalSteps ?? 0;
  if (!p || total <= 0) return 0;
  if (p.completed) return 100;
  return Math.min(100, Math.round(((p.lastStep + 1) / total) * 100));
}

/** Real (non-coming-soon, registered) lessons that make up the linear course of
 *  a module. Configuration (`internalOnly`) tracks are a parallel "how to build
 *  it" side-track reached via the Read⇄Configure toggle / deep-link — they are
 *  NEVER part of the countable, linear course for ANY role (including internal),
 *  so the role-card counts, progress rings, and the rendered lesson list all
 *  agree. `_role` is kept for call-site compatibility / future role scoping. */
export function moduleLessons(module: ModuleDef, role?: RoleId): string[] {
  return module.lessons
    .filter(
      (l) =>
        !l.comingSoon &&
        getLesson(l.id) &&
        !l.internalOnly &&
        (!l.roles || !role || l.roles.includes(role)),
    )
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

/** Overall completion for a role, measured ONLY across the modules this
 *  person's organisation actually has. */
export function roleCompletion(role: RoleId, ent: Entitlements = null): Tally {
  const ids = visibleModules(role, ent).flatMap((m) => moduleLessons(m, role));
  if (ids.length === 0) return { percent: 0, done: 0, total: 0 };
  const percents = ids.map(lessonPercent);
  const percent = Math.round(percents.reduce((a, b) => a + b, 0) / ids.length);
  const done = ids.filter((id) => lessonPercent(id) >= 100).length;
  return { percent, done, total: ids.length };
}

/** Overall completion across the whole catalogue — the internal view. Client
 *  users must never be measured with this; use roleCompletion with their
 *  entitlements. */
export function overallCompletion(): Tally {
  const ids = MODULES.flatMap((m) => moduleLessons(m, 'internal'));
  if (ids.length === 0) return { percent: 0, done: 0, total: 0 };
  const percents = ids.map(lessonPercent);
  const percent = Math.round(percents.reduce((a, b) => a + b, 0) / ids.length);
  const done = ids.filter((id) => lessonPercent(id) >= 100).length;
  return { percent, done, total: ids.length };
}
