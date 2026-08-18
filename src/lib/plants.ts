import { supabase } from './supabase';
import { MODULES } from '../data/catalog';
import type { ModuleDef } from '../data/types';

/**
 * Plant Library data access — plants, the client they belong to, and the
 * modules each plant grants.
 *
 * A plant is where access actually lives: assign modules here, add people to
 * the plant, and everyone there inherits the same set whatever their persona.
 */

export interface Organization {
  id: string;
  name: string;
}

export interface AdminPlant {
  id: string;
  name: string;
  workspace: string | null;
  org_id: string | null;
  orgName: string | null;
  moduleCount: number;
  memberCount: number;
}

/**
 * Modules an admin may actually hand to a plant.
 *
 * Excludes hidden holders (demos and quick tours, which carry roles: []) and
 * internal-exclusive modules. The visibility rule refuses those anyway — this
 * just avoids offering a switch that would silently do nothing.
 */
export const GRANTABLE: ModuleDef[] = MODULES.filter(
  (m) => m.roles.length > 0 && m.roles.some((r) => r !== 'internal'),
);

/** Internal-only modules, listed so the screen can say why they aren't offered. */
export const INTERNAL_ONLY: ModuleDef[] = MODULES.filter(
  (m) => m.roles.length > 0 && m.roles.every((r) => r === 'internal'),
);

export async function listOrganizations(): Promise<Organization[]> {
  const { data } = await supabase.from('organizations').select('id,name').order('name');
  return (data ?? []) as Organization[];
}

export async function createOrganization(name: string): Promise<{ org: Organization | null; error: string | null }> {
  const { data, error } = await supabase
    .from('organizations')
    .insert({ name: name.trim() })
    .select('id,name')
    .single();
  return { org: (data as Organization) ?? null, error: error?.message ?? null };
}

/** Every plant, with how many modules it grants and how many people are on it. */
export async function listAdminPlants(): Promise<{ rows: AdminPlant[]; error: string | null }> {
  const [{ data: plants, error }, { data: orgs }, { data: grants }, { data: mems }] = await Promise.all([
    supabase.from('plants').select('id,name,workspace,org_id').order('name'),
    supabase.from('organizations').select('id,name'),
    supabase.from('plant_modules').select('plant_id'),
    supabase.from('plant_members').select('plant_id'),
  ]);
  if (error) return { rows: [], error: error.message };

  const orgName = new Map((orgs ?? []).map((o) => [o.id as string, o.name as string]));
  const count = (rows: { plant_id: string }[] | null, id: string) =>
    (rows ?? []).filter((r) => r.plant_id === id).length;

  const rows = (plants ?? []).map((p) => ({
    id: p.id as string,
    name: p.name as string,
    workspace: (p.workspace as string) ?? null,
    org_id: (p.org_id as string) ?? null,
    orgName: p.org_id ? (orgName.get(p.org_id as string) ?? null) : null,
    moduleCount: count(grants as { plant_id: string }[], p.id as string),
    memberCount: count(mems as { plant_id: string }[], p.id as string),
  }));
  return { rows, error: null };
}

export async function createAdminPlant(
  name: string,
  workspace: string,
  orgId: string | null,
): Promise<{ error: string | null }> {
  const { error } = await supabase.from('plants').insert({
    name: name.trim(),
    workspace: workspace.trim() || null,
    org_id: orgId,
  });
  return { error: error?.message ?? null };
}

/** Which modules this plant currently grants. */
export async function listPlantModules(plantId: string): Promise<Set<string>> {
  const { data } = await supabase.from('plant_modules').select('module_id').eq('plant_id', plantId);
  return new Set((data ?? []).map((r) => r.module_id as string));
}

export async function setPlantModule(
  plantId: string,
  moduleId: string,
  granted: boolean,
): Promise<{ error: string | null }> {
  if (granted) {
    const { error } = await supabase.from('plant_modules').insert({ plant_id: plantId, module_id: moduleId });
    return { error: error?.message ?? null };
  }
  const { error } = await supabase
    .from('plant_modules')
    .delete()
    .eq('plant_id', plantId)
    .eq('module_id', moduleId);
  return { error: error?.message ?? null };
}

/** Attach an existing plant to a client, or detach it (internal). */
export async function setPlantOrg(plantId: string, orgId: string | null): Promise<{ error: string | null }> {
  const { error } = await supabase.from('plants').update({ org_id: orgId }).eq('id', plantId);
  return { error: error?.message ?? null };
}
