import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { listJobs, submitJob, type GenerationJob, type JobKind } from '../lib/studio';

const STATUS_LABEL: Record<GenerationJob['status'], string> = {
  queued: 'Queued',
  processing: 'Generating…',
  done: 'Ready',
  failed: 'Failed',
};

/**
 * "Content Studio" for CSMs & admins. Upload a client screen recording
 * (to build a personalized demo — publishes straight through) or new product
 * content (to author a lesson — a CSM's upload waits for admin
 * approval). A Claude Code agent generates the result and flips it to "Ready".
 */
export default function Studio() {
  const { isAdmin, canCreate, loading } = useAuth();

  const [kind, setKind] = useState<JobKind>('demo');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(async () => {
    setJobs(await listJobs());
  }, []);

  useEffect(() => {
    if (canCreate) refresh();
  }, [canCreate, refresh]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const files = Array.from(fileRef.current?.files ?? []);
    if (files.length === 0) return setMsg({ ok: false, text: 'Choose at least one file to upload.' });
    if (!title.trim()) return setMsg({ ok: false, text: 'Give it a title.' });
    setBusy(true);
    const { error } = await submitJob({
      kind,
      title,
      notes,
      files,
      stamp: Date.now(),
      onProgress: (text) => setMsg({ ok: true, text }),
    });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error });
    setMsg({ ok: true, text: 'Uploaded & queued. It will appear below as it’s generated.' });
    setTitle('');
    setNotes('');
    if (fileRef.current) fileRef.current.value = '';
    refresh();
  }

  if (loading) return null;
  if (!canCreate) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to={isAdmin ? '/admin' : '/'} className="header-link">← {isAdmin ? 'Admin' : 'Home'}</Link>} />

        <div className="title-block">
          <div className="eyebrow">Content Studio</div>
          <h1 className="lesson-title">Content Studio</h1>
          <p className="lesson-subtitle">
            Upload everything you have for a <strong>personalized demo</strong> (publishes straight away) — screen
            recordings, PDFs, Word docs, notes, spreadsheets — or new product content to author a{' '}
            <strong>new lesson</strong>{!isAdmin && ' (goes to an admin for approval first)'}. The generator reads all of
            it and turns it into a step-by-step, narrated walkthrough.
          </p>
        </div>

        <form className="admin-invite" onSubmit={onSubmit}>
          <div className="ai-title">New upload</div>

          <div className="studio-kind">
            <button type="button" className={`track-seg${kind === 'demo' ? ' active' : ''}`} onClick={() => setKind('demo')}>
              🎬 Personalized demo
            </button>
            <button type="button" className={`track-seg${kind === 'content' ? ' active' : ''}`} onClick={() => setKind('content')}>
              📚 New lesson content
            </button>
          </div>

          <div className="studio-fields">
            <label className="studio-field">
              <span>Title</span>
              <input
                type="text"
                placeholder={kind === 'demo' ? 'e.g. Acme Water — Dashboard demo' : 'e.g. New Reports module'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <label className="studio-field">
              <span>Context files — recordings, PDFs, docs, notes… (select several)</span>
              <input
                ref={fileRef}
                type="file"
                multiple
                accept="video/*,audio/*,.pdf,.doc,.docx,.txt,.md,.csv,.xlsx,.png,.jpg,.jpeg"
              />
            </label>

            <label className="studio-field">
              <span>Notes for the generator (optional)</span>
              <textarea
                rows={2}
                placeholder="Anything specific to highlight, the client’s focus areas, tone…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>

          <button type="submit" className="lesson-cta" disabled={busy}>
            {busy ? 'Uploading…' : 'Upload & queue'}
          </button>
          {msg && <div className={`ai-msg${msg.ok ? '' : ' err'}`}>{msg.text}</div>}
          <div className="ai-hint">
            Files are stored privately in Supabase. Large recordings are split into chunks automatically and reassembled
            during generation. The job below moves to “Ready” when the demo or lesson is live.
          </div>
        </form>

        <div className="admin-users">
          <div className="au-head studio-head">
            <span>Upload</span>
            <span>Type</span>
            <span>Status</span>
          </div>
          {jobs.length === 0 && <div className="au-empty">No uploads yet.</div>}
          {jobs.map((j) => (
            <div key={j.id} className="au-row studio-row">
              <div className="au-user">
                <div className="au-name">{j.title}</div>
                <div className="au-email">{new Date(j.created_at).toLocaleString()}</div>
              </div>
              <div><span className="tag-chip">{j.kind === 'demo' ? 'Demo' : 'Lesson'}</span></div>
              <div>
                {j.approval_status === 'pending' ? (
                  <span className="badge studio-status processing">Awaiting approval</span>
                ) : j.approval_status === 'rejected' ? (
                  <span className="badge studio-status failed">Rejected</span>
                ) : (
                  <span className={`badge studio-status ${j.status}`}>{STATUS_LABEL[j.status]}</span>
                )}
                {j.status === 'done' && j.result_lesson_id && (
                  <a className="studio-open" href={`#/${j.result_lesson_id}`}>Open →</a>
                )}
                {j.status === 'failed' && j.notes && <div className="studio-err">{j.notes}</div>}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
