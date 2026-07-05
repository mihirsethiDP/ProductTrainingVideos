import { supabase } from './supabase';

export type JobKind = 'demo' | 'content';
export type JobStatus = 'queued' | 'processing' | 'done' | 'failed';
export type ApprovalStatus = 'not_required' | 'pending' | 'approved' | 'rejected';

export interface GenerationJob {
  id: string;
  kind: JobKind;
  title: string;
  storage_path: string;
  parts: number;
  status: JobStatus;
  approval_status: ApprovalStatus;
  result_lesson_id: string | null;
  notes: string | null;
  created_at: string;
}

const BUCKET = 'uploads';
// Split anything bigger than this into byte-chunks so each uploaded object stays
// under the storage per-object cap (free tier = 50 MB). 45 MB leaves headroom.
const CHUNK_BYTES = 45 * 1024 * 1024;

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'file';

/**
 * Uploads a recording/content file to the private `uploads` bucket and queues a
 * generation job. A Claude Code agent later picks the job up, authors the demo
 * or lesson, deploys it, and flips the job to `done`.
 */
export async function submitJob(opts: {
  kind: JobKind;
  title: string;
  notes?: string;
  file: File;
  stamp: number; // pass Date.now() from the caller
  onProgress?: (donePart: number, totalParts: number) => void;
}): Promise<{ error: string | null }> {
  const base = `${opts.kind}/${opts.stamp}-${slug(opts.file.name)}`;
  const size = opts.file.size;
  const parts = size <= CHUNK_BYTES ? 1 : Math.ceil(size / CHUNK_BYTES);

  if (parts === 1) {
    const up = await supabase.storage.from(BUCKET).upload(base, opts.file, { upsert: false });
    if (up.error) return { error: up.error.message };
    opts.onProgress?.(1, 1);
  } else {
    // raw byte-slices — reassembling them in order reproduces the file exactly
    for (let i = 0; i < parts; i++) {
      const blob = opts.file.slice(i * CHUNK_BYTES, Math.min(size, (i + 1) * CHUNK_BYTES));
      const up = await supabase.storage.from(BUCKET).upload(`${base}.part${i}`, blob, { upsert: false });
      if (up.error) return { error: `part ${i + 1}/${parts}: ${up.error.message}` };
      opts.onProgress?.(i + 1, parts);
    }
  }

  const { data: who } = await supabase.auth.getUser();
  const ins = await supabase.from('generation_jobs').insert({
    kind: opts.kind,
    title: opts.title.trim(),
    storage_path: base,
    parts,
    notes: opts.notes?.trim() || null,
    created_by: who.user?.id ?? null,
  });
  return { error: ins.error?.message ?? null };
}

export async function listJobs(): Promise<GenerationJob[]> {
  const { data } = await supabase
    .from('generation_jobs')
    .select('id,kind,title,storage_path,parts,status,approval_status,result_lesson_id,notes,created_at')
    .order('created_at', { ascending: false });
  return (data as GenerationJob[]) ?? [];
}

/** Admin approves / rejects a CSM's lesson-content upload. */
export async function reviewJob(id: string, decision: 'approved' | 'rejected'): Promise<{ error: string | null }> {
  const { data: who } = await supabase.auth.getUser();
  const { error } = await supabase
    .from('generation_jobs')
    .update({ approval_status: decision, approved_by: who.user?.id ?? null, reviewed_at: new Date().toISOString() })
    .eq('id', id);
  return { error: error?.message ?? null };
}
