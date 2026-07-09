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
  reviewer_note: string | null; // admin's reason when a lesson upload is rejected
  created_at: string;
}

const BUCKET = 'uploads';
// Split anything bigger than this into byte-chunks so each uploaded object stays
// under the storage per-object cap (free tier = 50 MB). 45 MB leaves headroom.
const CHUNK_BYTES = 45 * 1024 * 1024;

// Formats the generator can actually read. Anything else is rejected up front
// instead of uploading fine and then silently failing during generation.
const ACCEPTED_EXT = [
  'mp4', 'mov', 'webm', 'mkv', 'avi', 'm4v', // video
  'mp3', 'wav', 'm4a', 'aac', 'ogg', 'opus', // audio
  'png', 'jpg', 'jpeg', 'gif', 'webp', 'heic', // images
  'pdf', 'doc', 'docx', 'txt', 'md', 'rtf', 'csv', 'xls', 'xlsx', 'ppt', 'pptx', // docs
];

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'file';

/** Reject unsupported files (and absurdly large ones) before any upload. */
export function validateFiles(files: File[]): string | null {
  const bad = files.filter((f) => {
    const type = f.type || '';
    if (type.startsWith('video/') || type.startsWith('audio/') || type.startsWith('image/')) return false;
    const ext = f.name.split('.').pop()?.toLowerCase() ?? '';
    return !ACCEPTED_EXT.includes(ext);
  });
  if (bad.length) {
    return `Unsupported file type: ${bad.map((f) => f.name).join(', ')}. Accepted: video, audio, images, PDF, Word, text, CSV/Excel.`;
  }
  const huge = files.find((f) => f.size > 2 * 1024 * 1024 * 1024); // 2 GB
  if (huge) return `${huge.name} is over 2 GB — please trim or compress the recording first.`;
  return null;
}

interface UploadHooks {
  onChunk?: (partIndex: number, parts: number) => void;
  shouldCancel?: () => boolean;
}

/** Upload one file (chunking if needed) at `path`; returns the part count and
 *  every object path it actually wrote (so a partial failure can be cleaned up). */
async function uploadOne(
  path: string,
  file: File,
  hooks: UploadHooks,
): Promise<{ parts: number; error: string | null; paths: string[]; cancelled?: boolean }> {
  const size = file.size;
  const parts = size <= CHUNK_BYTES ? 1 : Math.ceil(size / CHUNK_BYTES);
  const paths: string[] = [];
  if (parts === 1) {
    if (hooks.shouldCancel?.()) return { parts, error: null, paths, cancelled: true };
    const up = await supabase.storage.from(BUCKET).upload(path, file, { upsert: false });
    if (!up.error) paths.push(path);
    return { parts, error: up.error?.message ?? null, paths };
  }
  // raw byte-slices — reassembling them in order reproduces the file exactly
  for (let i = 0; i < parts; i++) {
    if (hooks.shouldCancel?.()) return { parts, error: null, paths, cancelled: true };
    hooks.onChunk?.(i, parts);
    const blob = file.slice(i * CHUNK_BYTES, Math.min(size, (i + 1) * CHUNK_BYTES));
    const p = `${path}.part${i}`;
    const up = await supabase.storage.from(BUCKET).upload(p, blob, { upsert: false });
    if (up.error) return { parts, error: `part ${i + 1}/${parts}: ${up.error.message}`, paths };
    paths.push(p);
  }
  return { parts, error: null, paths };
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
  shouldCancel?: () => boolean; // polled between files/chunks so a stuck upload can be aborted
}): Promise<{ error: string | null; cancelled?: boolean }> {
  if (opts.files.length === 0) return { error: 'No files selected.' };
  const typeError = validateFiles(opts.files);
  if (typeError) return { error: typeError };
  const folder = `${opts.kind}/${opts.stamp}-${slug(opts.title)}`;

  // every object we write, so a partial failure / cancel doesn't strand orphans
  const written: string[] = [];
  const cleanup = async () => {
    if (written.length) await supabase.storage.from(BUCKET).remove(written);
  };

  const manifest: JobFile[] = [];
  const total = opts.files.length;
  for (let i = 0; i < opts.files.length; i++) {
    const f = opts.files[i];
    const name = `${i}-${slug(f.name)}`;
    opts.onProgress?.(`Uploading ${i + 1} of ${total} — ${f.name}…`);
    const res = await uploadOne(`${folder}/${name}`, f, {
      onChunk: (ci, parts) => opts.onProgress?.(`Uploading ${i + 1} of ${total} — ${f.name} (part ${ci + 1}/${parts})…`),
      shouldCancel: opts.shouldCancel,
    });
    written.push(...res.paths);
    if (res.cancelled) {
      await cleanup();
      return { error: null, cancelled: true };
    }
    if (res.error) {
      await cleanup();
      return { error: `${f.name}: ${res.error}` };
    }
    manifest.push({ name, parts: res.parts });
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
  if (ins.error) {
    await cleanup(); // don't leave uploaded files with no job row pointing at them
    return { error: ins.error.message };
  }
  return { error: null };
}

export async function listJobs(): Promise<GenerationJob[]> {
  const base = 'id,kind,title,storage_path,parts,files,demo_style,content_mode,target_module,status,approval_status,result_lesson_id,notes,created_at';
  // reviewer_note is a newer column; if this deploy lands before the schema
  // migration runs, selecting it 400s and would blank the whole list — so fall
  // back to the column set without it rather than breaking the page.
  const first = await supabase
    .from('generation_jobs')
    .select(`${base},reviewer_note`)
    .order('created_at', { ascending: false });
  if (!first.error) return (first.data as GenerationJob[]) ?? [];
  const fallback = await supabase.from('generation_jobs').select(base).order('created_at', { ascending: false });
  return (fallback.data as GenerationJob[]) ?? [];
}

/** Admin approves / rejects a CSM's lesson-content upload. A rejection carries a
 *  reason so the CSM knows what to fix (stored separately from their own notes). */
export async function reviewJob(
  id: string,
  decision: 'approved' | 'rejected',
  reason?: string,
): Promise<{ error: string | null }> {
  const { data: who } = await supabase.auth.getUser();
  const patch: Record<string, unknown> = {
    approval_status: decision,
    approved_by: who.user?.id ?? null,
    reviewed_at: new Date().toISOString(),
  };
  if (decision === 'rejected') patch.reviewer_note = reason?.trim() || null;
  const { error } = await supabase.from('generation_jobs').update(patch).eq('id', id);
  return { error: error?.message ?? null };
}
