import { supabase } from './supabase';

/**
 * Equipment library — plant-scoped photos & videos of physical equipment.
 *
 * Google Drive holds the bytes; Postgres holds only the index (plant, title,
 * equipment label, description, drive_file_id). That keeps the repo and bundle
 * small and means new content is live immediately, with no code deploy.
 *
 * The site is static, so it can't hold Drive API credentials — a curator pastes
 * the Drive share link and we extract the file id from it. Every Drive file must
 * be shared "anyone with the link" for the embed to play.
 */

export type MediaKind = 'video' | 'photo';

export interface Plant {
  id: string;
  name: string;
  workspace: string | null;
  asset_ref: string | null;
  created_at: string;
}

export interface PlantMedia {
  id: string;
  plant_id: string;
  media_kind: MediaKind;
  title: string;
  equipment: string | null;
  description: string | null;
  drive_file_id: string;
  share_token: string;
  created_at: string;
}

/** One item as served to a zero-auth viewer (via the share-token RPC). */
export interface SharedMedia {
  id: string;
  media_kind: MediaKind;
  title: string;
  equipment: string | null;
  description: string | null;
  drive_file_id: string;
  plant_name: string;
  created_at: string;
}

// ---- Google Drive URL helpers ----

/**
 * Pull the file id out of anything a curator is likely to paste:
 *   https://drive.google.com/file/d/<ID>/view?usp=sharing
 *   https://drive.google.com/open?id=<ID>
 *   https://drive.google.com/uc?export=download&id=<ID>
 *   https://docs.google.com/…/d/<ID>/…
 *   <ID>
 * Returns null when there's no plausible id, so the form can say so before saving.
 */
export function parseDriveId(input: string): string | null {
  const s = (input ?? '').trim();
  if (!s) return null;
  if (/^[A-Za-z0-9_-]{16,}$/.test(s)) return s; // already a bare id
  const patterns = [/\/file\/d\/([A-Za-z0-9_-]{16,})/, /[?&]id=([A-Za-z0-9_-]{16,})/, /\/d\/([A-Za-z0-9_-]{16,})/];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) return m[1];
  }
  return null;
}

/** Drive's own player/viewer, embedded in an iframe. The only reliable way to
 *  play a Drive-hosted video on the web — direct-file links get intercepted. */
export const drivePreviewUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
/** Poster / photo rendering. `sz=w<N>` asks Drive for a scaled render. */
export const driveThumbUrl = (id: string, width = 800) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
/** Open in Drive — also the escape hatch if an embed is blocked on some device. */
export const driveOpenUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;

/** The forwardable, no-sign-in watch link for one item. */
export const shareUrl = (token: string) =>
  `${window.location.origin}${import.meta.env.BASE_URL}#/watch/equipment/${token}`;

// ---- plants ----

/** True when the message looks like "this table/function doesn't exist yet",
 *  i.e. supabase/schema.sql hasn't been re-run — worth saying out loud rather
 *  than rendering an empty library that looks like real (empty) data. */
export const isMissingSchema = (msg?: string | null) =>
  !!msg && /schema cache|does not exist|not find the table|not find the function/i.test(msg);

export async function listPlants(): Promise<{ rows: Plant[]; error: string | null }> {
  const { data, error } = await supabase.from('plants').select('*').order('name');
  return { rows: (data as Plant[]) ?? [], error: error?.message ?? null };
}

export async function createPlant(name: string, workspace?: string): Promise<{ plant: Plant | null; error: string | null }> {
  const { data, error } = await supabase
    .from('plants')
    .insert({ name: name.trim(), workspace: workspace?.trim() || null })
    .select()
    .single();
  return { plant: (data as Plant) ?? null, error: error?.message ?? null };
}

// ---- media ----

export async function listMedia(plantId?: string): Promise<{ rows: PlantMedia[]; error: string | null }> {
  let q = supabase.from('plant_media').select('*').order('created_at', { ascending: false });
  if (plantId) q = q.eq('plant_id', plantId);
  const { data, error } = await q;
  return { rows: (data as PlantMedia[]) ?? [], error: error?.message ?? null };
}

export async function addMedia(opts: {
  plantId: string;
  kind: MediaKind;
  title: string;
  equipment?: string;
  description?: string;
  driveLink: string;
}): Promise<{ error: string | null }> {
  const driveFileId = parseDriveId(opts.driveLink);
  if (!driveFileId) return { error: "That doesn't look like a Google Drive link — paste the file's share link." };
  if (!opts.title.trim()) return { error: 'Give it a title.' };
  const { data: who } = await supabase.auth.getUser();
  const { error } = await supabase.from('plant_media').insert({
    plant_id: opts.plantId,
    media_kind: opts.kind,
    title: opts.title.trim(),
    equipment: opts.equipment?.trim() || null,
    description: opts.description?.trim() || null,
    drive_file_id: driveFileId,
    created_by: who.user?.id ?? null,
  });
  return { error: error?.message ?? null };
}

export async function deleteMedia(id: string): Promise<{ error: string | null }> {
  const { error } = await supabase.from('plant_media').delete().eq('id', id);
  return { error: error?.message ?? null };
}

/** Fetch one item by share token — the zero-auth path. Runs a SECURITY DEFINER
 *  RPC, so it returns that single row and can never list the library. */
export async function fetchShared(token: string): Promise<SharedMedia | null> {
  const { data, error } = await supabase.rpc('shared_equipment_media', { token });
  if (error) return null;
  const rows = (data as SharedMedia[]) ?? [];
  return rows[0] ?? null;
}
