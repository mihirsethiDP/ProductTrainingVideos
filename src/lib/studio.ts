import { supabase } from './supabase';

export type JobKind = 'demo' | 'content';
export type JobStatus = 'queued' | 'processing' | 'done' | 'failed';

export interface GenerationJob {
  id: string;
  kind: JobKind;
  title: string;
  client_email: string | null;
  storage_path: string;
  status: JobStatus;
  result_lesson_id: string | null;
  notes: string | null;
  created_at: string;
}

export interface ClientDemo {
  id: string;
  lesson_id: string;
  title: string;
  client_email: string | null;
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
  clientEmail?: string;
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
    client_email: opts.kind === 'demo' ? (opts.clientEmail ?? '').trim().toLowerCase() || null : null,
    storage_path: path,
    notes: opts.notes?.trim() || null,
    created_by: who.user?.id ?? null,
  });
  return { error: ins.error?.message ?? null };
}

export async function listJobs(): Promise<GenerationJob[]> {
  const { data } = await supabase
    .from('generation_jobs')
    .select('id,kind,title,client_email,storage_path,status,result_lesson_id,notes,created_at')
    .order('created_at', { ascending: false });
  return (data as GenerationJob[]) ?? [];
}

/** Demos assigned to the currently signed-in client (RLS scopes this per user). */
export async function listMyDemos(): Promise<ClientDemo[]> {
  const { data } = await supabase
    .from('client_demos')
    .select('id,lesson_id,title,client_email,created_at')
    .order('created_at', { ascending: false });
  return (data as ClientDemo[]) ?? [];
}
