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

export interface ManagedUser {
  id: string;
  email: string;
  name: string;
  role: AppRole;
  trainingRole: TrainingRole | null;
  active: boolean;
  orgId: string | null;
  orgName: string | null;
  memberships: Membership[];
}

export interface PlantOption {
  id: string;
  name: string;
  org_id: string | null;
  orgName: string | null;
}

export async function listManagedUsers(): Promise<{ rows: ManagedUser[]; error: string | null }> {
  const [{ data: profs, error }, { data: orgs }, { data: plants }, { data: mems }] = await Promise.all([
    supabase.from('profiles').select('id,email,full_name,role,training_role,active,org_id').order('email'),
    supabase.from('organizations').select('id,name'),
    supabase.from('plants').select('id,name'),
    supabase.from('plant_members').select('user_id,plant_id,plant_role'),
  ]);
  if (error) return { rows: [], error: error.message };

  const orgName = new Map((orgs ?? []).map((o) => [o.id as string, o.name as string]));
  const plantName = new Map((plants ?? []).map((p) => [p.id as string, p.name as string]));

  const rows = (profs ?? []).map((p) => ({
    id: p.id as string,
    email: p.email as string,
    name: (p.full_name as string) || (p.email as string),
    role: p.role as AppRole,
    trainingRole: (p.training_role as TrainingRole) ?? null,
    active: p.active as boolean,
    orgId: (p.org_id as string) ?? null,
    orgName: p.org_id ? (orgName.get(p.org_id as string) ?? null) : null,
    memberships: (mems ?? [])
      .filter((m) => m.user_id === p.id)
      .map((m) => ({
        plant_id: m.plant_id as string,
        plant_name: plantName.get(m.plant_id as string) ?? '—',
        plant_role: m.plant_role as PlantRole,
      }))
      .sort((a, b) => a.plant_name.localeCompare(b.plant_name)),
  }));
  return { rows, error: null };
}

export async function listPlantOptions(): Promise<PlantOption[]> {
  const [{ data: plants }, { data: orgs }] = await Promise.all([
    supabase.from('plants').select('id,name,org_id').order('name'),
    supabase.from('organizations').select('id,name'),
  ]);
  const orgName = new Map((orgs ?? []).map((o) => [o.id as string, o.name as string]));
  return (plants ?? []).map((p) => ({
    id: p.id as string,
    name: p.name as string,
    org_id: (p.org_id as string) ?? null,
    orgName: p.org_id ? (orgName.get(p.org_id as string) ?? null) : null,
  }));
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
