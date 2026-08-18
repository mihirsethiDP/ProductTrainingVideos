import { supabase } from './supabase';
import type { AppRole, TrainingRole } from './supabase';

/**
 * User Center data access — who exists, which plants they sit at, and what
 * they are at each one.
 *
 * A person can hold several plants (a plant head covering three sites is the
 * motivating case), so membership is a list per user, never a single field.
 */

export type PlantRole = 'head' | 'supervisor' | 'operator';

export interface Membership {
  plant_id: string;
  plant_name: string;
  plant_role: PlantRole;
}


/** One person as they appear on a plant's roster. */
export interface PlantPerson {
  userId: string;
  name: string;
  email: string;
  appRole: AppRole;
  orgId: string | null;
  plantRole: PlantRole;
  /** their memberships at OTHER plants — the multi-plant head case, visible
   *  inline instead of needing a person-centric page */
  alsoAt: { plantName: string; plantRole: PlantRole }[];
}

const ROLE_ORDER: Record<PlantRole, number> = { head: 0, supervisor: 1, operator: 2 };

/** Everyone at one plant, heads first — plus where else each person sits. */
export async function listPlantPeople(plantId: string): Promise<{ rows: PlantPerson[]; error: string | null }> {
  const { data: mems, error } = await supabase
    .from('plant_members')
    .select('user_id,plant_role')
    .eq('plant_id', plantId);
  if (error) return { rows: [], error: error.message };
  const ids = (mems ?? []).map((m) => m.user_id as string);
  if (ids.length === 0) return { rows: [], error: null };

  const [{ data: profs }, { data: others }, { data: plants }] = await Promise.all([
    supabase.from('profiles').select('id,email,full_name,role,org_id').in('id', ids),
    supabase.from('plant_members').select('user_id,plant_id,plant_role').in('user_id', ids).neq('plant_id', plantId),
    supabase.from('plants').select('id,name'),
  ]);
  const plantName = new Map((plants ?? []).map((p) => [p.id as string, p.name as string]));

  const rows: PlantPerson[] = (mems ?? [])
    .map((m) => {
      const p = (profs ?? []).find((x) => x.id === m.user_id);
      return {
        userId: m.user_id as string,
        name: (p?.full_name as string) || (p?.email as string) || '—',
        email: (p?.email as string) ?? '',
        appRole: ((p?.role as AppRole) ?? 'user'),
        orgId: (p?.org_id as string) ?? null,
        plantRole: m.plant_role as PlantRole,
        alsoAt: (others ?? [])
          .filter((o) => o.user_id === m.user_id)
          .map((o) => ({
            plantName: plantName.get(o.plant_id as string) ?? '—',
            plantRole: o.plant_role as PlantRole,
          })),
      };
    })
    .sort((a, b) => ROLE_ORDER[a.plantRole] - ROLE_ORDER[b.plantRole] || a.name.localeCompare(b.name));
  return { rows, error: null };
}

export async function addToPlant(
  userId: string,
  plantId: string,
  plantRole: PlantRole,
): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('plant_members')
    .upsert({ user_id: userId, plant_id: plantId, plant_role: plantRole }, { onConflict: 'user_id,plant_id' });
  return { error: error?.message ?? null };
}

export async function removeFromPlant(userId: string, plantId: string): Promise<{ error: string | null }> {
  const { error } = await supabase
    .from('plant_members')
    .delete()
    .eq('user_id', userId)
    .eq('plant_id', plantId);
  return { error: error?.message ?? null };
}

/**
 * Keep profiles.org_id in step with the plants a person holds.
 *
 * org_id is the tenant boundary — it decides whether someone is a client
 * account at all, and therefore whether entitlements apply. Setting a plant
 * without it would leave a client user looking internal (unrestricted), which
 * is the wrong way round to get wrong.
 */
export async function syncUserOrg(userId: string, orgId: string | null): Promise<{ error: string | null }> {
  const { error } = await supabase.from('profiles').update({ org_id: orgId }).eq('id', userId);
  return { error: error?.message ?? null };
}

export interface NewClientUser {
  email: string;
  fullName: string;
  orgId: string | null;
  plantId: string;
  plantRole: PlantRole;
  /** which training path they land on; content comes from the plant either way */
  trainingRole: TrainingRole;
}

/**
 * Create a client account. Goes through the invite-user Edge Function because
 * creating an auth user needs the service key, which must never reach a
 * browser. Returns a one-time temporary password for the admin to pass on —
 * no email is sent, so a plant's worth of operators can be onboarded in one
 * sitting rather than trickling out under the mail cap.
 */
export async function createClientUser(
  u: NewClientUser,
): Promise<{ password: string | null; existing: boolean; error: string | null }> {
  const { data, error } = await supabase.functions.invoke('invite-user', {
    body: {
      email: u.email.trim().toLowerCase(),
      full_name: u.fullName.trim() || null,
      role: 'user',
      training_role: u.trainingRole,
      org_id: u.orgId,
      plant_id: u.plantId,
      plant_role: u.plantRole,
      deliver: 'password',
    },
  });
  if (error) return { password: null, existing: false, error: error.message };
  if (data?.error) return { password: null, existing: false, error: data.error };
  return { password: data?.password ?? null, existing: data?.existing === true, error: null };
}
