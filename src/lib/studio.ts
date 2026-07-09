import { supabase } from './supabase';

export type JobKind = 'demo' | 'content';
export type JobStatus = 'queued' | 'processing' | 'done' | 'failed';
export type ApprovalStatus = 'not_required' | 'pending' | 'approved' | 'rejected';

export interface JobFile {
  name: string; // object name inside the job's storage folder
  parts: number; // 1 = whole object; >1 = byte-chunks name.part0..partN-1
}

export type DemoStyle = 'overview' | 'detailed';
export type ContentMode = 'enhance' | 'new';

export interface GenerationJob {
  id: string;
  kind: JobKind;
  title: string;
  storage_path: string;
  parts: number;
  files: JobFile[];
  demo_style: DemoStyle;
  content_mode: ContentMode | null;
  target_module: string | null;
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

/** Upload one file (chunking if needed) at `path`; returns the part count. */
async function uploadOne(path: string, file: File): Promise<{ parts: number; error: string | null }> {
  const size = file.size;
  const parts = size <= CHUNK_BYTES ? 1 : Math.ceil(size / CHUNK_BYTES);
  if (parts === 1) {
    const up = await supabase.storage.from(BUCKET).upload(path, file, { upsert: false });
    return { parts, error: up.error?.message ?? null };
  }
  // raw byte-slices — reassembling them in order reproduces the file exactly
  for (let i = 0; i < parts; i++) {
    const blob = file.slice(i * CHUNK_BYTES, Math.min(size, (i + 1) * CHUNK_BYTES));
    const up = await supabase.storage.from(BUCKET).upload(`${path}.part${i}`, blob, { upsert: false });
    if (up.error) return { parts, error: `part ${i + 1}/${parts}: ${up.error.message}` };
  }
  return { parts, error: null };
}

/**
 * Uploads the job's context files (screen recordings, PDFs, docs, notes — any
 * mix) into a private folder and queues a generation job. A Claude Code agent
 * later picks it up, reads every file, authors the demo or lesson, deploys it,
 * and flips the job to `done`.
 */
export async function submitJob(opts: {
  kind: JobKind;
  title: string;
  notes?: string;
  files: File[];
  stamp: number; // pass Date.now() from the caller
  demoStyle?: DemoStyle; // demos: overview (~2-3 min) or detailed deep-dive
  contentMode?: ContentMode; // content: enhance an existing module or start a new one
  targetModule?: string; // module id when contentMode = 'enhance'
  onProgress?: (message: string) => void;
}): Promise<{ error: string | null }> {
  if (opts.files.length === 0) return { error: 'No files selected.' };
  const folder = `${opts.kind}/${opts.stamp}-${slug(opts.title)}`;

  const manifest: JobFile[] = [];
  for (let i = 0; i < opts.files.length; i++) {
    const f = opts.files[i];
    const name = `${i}-${slug(f.name)}`;
    opts.onProgress?.(`Uploading ${i + 1} of ${opts.files.length} — ${f.name}…`);
    const { parts, error } = await uploadOne(`${folder}/${name}`, f);
    if (error) return { error: `${f.name}: ${error}` };
    manifest.push({ name, parts });
  }

  const { data: who } = await supabase.auth.getUser();
  const ins = await supabase.from('generation_jobs').insert({
    kind: opts.kind,
    title: opts.title.trim(),
    storage_path: folder,
    files: manifest,
    demo_style: opts.kind === 'demo' ? (opts.demoStyle ?? 'overview') : 'overview',
    content_mode: opts.kind === 'content' ? (opts.contentMode ?? 'enhance') : null,
    target_module: opts.kind === 'content' && opts.contentMode !== 'new' ? (opts.targetModule ?? null) : null,
    notes: opts.notes?.trim() || null,
    created_by: who.user?.id ?? null,
  });
  return { error: ins.error?.message ?? null };
}

export async function listJobs(): Promise<GenerationJob[]> {
  const { data } = await supabase
    .from('generation_jobs')
    .select('id,kind,title,storage_path,parts,files,demo_style,content_mode,target_module,status,approval_status,result_lesson_id,notes,created_at')
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
