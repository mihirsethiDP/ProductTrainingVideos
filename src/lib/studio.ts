import { supabase } from './supabase';

export type JobKind = 'demo' | 'content';
export type JobStatus = 'queued' | 'processing' | 'done' | 'failed';
export type ApprovalStatus = 'not_required' | 'pending' | 'approved' | 'rejected';

export interface GenerationJob {
  id: string;
  kind: JobKind;
  title: string;
  storage_path: string;
  status: JobStatus;
  approval_status: ApprovalStatus;
  result_lesson_id: string | null;
  notes: string | null;
  created_at: string;
}

const BUCKET = 'uploads';

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
}): Promise<{ error: string | null }> {
  const path = `${opts.kind}/${opts.stamp}-${slug(opts.file.name)}`;
  const up = await supabase.storage.from(BUCKET).upload(path, opts.file, { upsert: false });
  if (up.error) return { error: up.error.message };

  const { data: who } = await supabase.auth.getUser();
  const ins = await supabase.from('generation_jobs').insert({
    kind: opts.kind,
    title: opts.title.trim(),
    storage_path: path,
    notes: opts.notes?.trim() || null,
    created_by: who.user?.id ?? null,
  });
  return { error: ins.error?.message ?? null };
}

export async function listJobs(): Promise<GenerationJob[]> {
  const { data } = await supabase
    .from('generation_jobs')
    .select('id,kind,title,storage_path,status,approval_status,result_lesson_id,notes,created_at')
    .order('created_at', { ascending: false });
  return (data as GenerationJob[]) ?? [];
}

/** Admin approves / rejects an implementer's lesson-content upload. */
export async function reviewJob(id: string, decision: 'approved' | 'rejected'): Promise<{ error: string | null }> {
  const { data: who } = await supabase.auth.getUser();
  const { error } = await supabase
    .from('generation_jobs')
    .update({ approval_status: decision, approved_by: who.user?.id ?? null, reviewed_at: new Date().toISOString() })
    .eq('id', id);
  return { error: error?.message ?? null };
}
