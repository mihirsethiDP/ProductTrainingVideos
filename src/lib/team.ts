import { supabase } from './supabase';
import { getLesson } from '../data/catalog';
import { moduleLessons, visibleModules, type Entitlements } from './completion';
import type { RoleId } from '../data/types';

/**
 * Data for the Plant Head / Supervisor dashboards.
 *
 * Every query here is deliberately unfiltered by person — RLS decides who is
 * visible. A supervisor asking for a plant's members gets operators; a head
 * gets everyone. Re-filtering in the client would just be a second, weaker
 * copy of the rule that could drift from the real one.
 */

export type PlantRole = 'head' | 'supervisor' | 'operator';

export interface TeamPlant {
  id: string;
  name: string;
  org_id: string | null;
}

export interface TeamMember {
  userId: string;
  name: string;
  email: string;
  plantRole: PlantRole;
  trainingRole: RoleId | null;
  active: boolean;
  /** 0..100 against THIS person's entitled modules */
  percent: number;
  done: number;
  total: number;
  /** most recent progress write, or null if they have never opened a lesson */
  lastActive: string | null;
}

interface ProgressRow {
  user_id: string;
  lesson_id: string;
  last_step: number;
  total_steps: number;
  completed: boolean;
  updated_at: string;
}

const pct = (row: ProgressRow | undefined, lessonId: string): number => {
  const total = getLesson(lessonId)?.layouts.length ?? row?.total_steps ?? 0;
  if (!row || total <= 0) return 0;
  if (row.completed) return 100;
  return Math.min(100, Math.round(((row.last_step + 1) / total) * 100));
};

/** Plants where the signed-in person has a team to look at. */
export async function listManagedPlants(ids: string[]): Promise<TeamPlant[]> {
  if (ids.length === 0) return [];
  const { data } = await supabase
    .from('plants')
    .select('id,name,org_id')
    .in('id', ids)
    .order('name');
  return (data ?? []) as TeamPlant[];
}

/**
 * The team at one plant, each person scored against the modules their own
 * organisation bought — never against the full catalogue, and never against
 * the viewer's own entitlements.
 */
export async function listTeam(plant: TeamPlant): Promise<{ rows: TeamMember[]; error: string | null }> {
  const { data: mems, error: memErr } = await supabase
    .from('plant_members')
    .select('user_id,plant_role')
    .eq('plant_id', plant.id);
  if (memErr) return { rows: [], error: memErr.message };

  const ids = (mems ?? []).map((m) => m.user_id as string);
  if (ids.length === 0) return { rows: [], error: null };

  const [{ data: profs }, { data: prog }, { data: grants }] = await Promise.all([
    supabase.from('profiles').select('id,full_name,email,training_role,active').in('id', ids),
    supabase.from('lesson_progress').select('user_id,lesson_id,last_step,total_steps,completed,updated_at').in('user_id', ids),
    supabase.from('plant_modules').select('module_id').eq('plant_id', plant.id),
  ]);

  // a plant that has grants (or belongs to a client) scores its people against
  // those grants — org-less is NOT a free pass, or an org-less client plant
  // would score everyone against the whole internal catalogue. Only a truly
  // internal plant with no grants falls back to unrestricted.
  const ent: Entitlements =
    plant.org_id || (grants ?? []).length > 0
      ? new Set((grants ?? []).map((g) => g.module_id))
      : null;

  const byUser = new Map<string, Map<string, ProgressRow>>();
  for (const r of (prog ?? []) as ProgressRow[]) {
    if (!byUser.has(r.user_id)) byUser.set(r.user_id, new Map());
    byUser.get(r.user_id)!.set(r.lesson_id, r);
  }

  const rows: TeamMember[] = (mems ?? []).map((m) => {
    const id = m.user_id as string;
    const p = (profs ?? []).find((x) => x.id === id);
    const training = (p?.training_role ?? null) as RoleId | null;
    // What THIS person is expected to complete. On a client plant that is always
    // the plant's modules — falling back to the internal catalogue for someone
    // with no training path scored them out of 43 lessons while the rest of
    // their team was scored out of 5, which makes the whole column unreadable.
    const scoredAs: RoleId = training ?? (ent === null ? 'internal' : 'operator');
    const lessonIds = visibleModules(scoredAs, ent).flatMap((mod) => moduleLessons(mod, scoredAs));
    const mine = byUser.get(id);
    const percents = lessonIds.map((lid) => pct(mine?.get(lid), lid));
    const done = lessonIds.filter((lid) => pct(mine?.get(lid), lid) >= 100).length;
    const times = [...(mine?.values() ?? [])].map((r) => r.updated_at).filter(Boolean).sort();

    return {
      userId: id,
      name: p?.full_name || p?.email || '—',
      email: p?.email ?? '',
      plantRole: m.plant_role as PlantRole,
      trainingRole: training,
      active: p?.active ?? true,
      percent: percents.length ? Math.round(percents.reduce((a, b) => a + b, 0) / percents.length) : 0,
      done,
      total: lessonIds.length,
      lastActive: times.length ? times[times.length - 1] : null,
    };
  });

  // people who need attention first: never started, then least progress
  rows.sort((a, b) => (a.lastActive === null ? -1 : b.lastActive === null ? 1 : a.percent - b.percent));
  return { rows, error: null };
}

/** Short "how are they doing" verdict, used for the status pill. */
export type TeamState = 'not-started' | 'stalled' | 'in-progress' | 'complete';

export function teamState(m: TeamMember, stalledDays = 14): TeamState {
  if (m.total > 0 && m.done >= m.total) return 'complete';
  if (m.lastActive === null) return 'not-started';
  const days = (Date.now() - new Date(m.lastActive).getTime()) / 86_400_000;
  return days > stalledDays ? 'stalled' : 'in-progress';
}
