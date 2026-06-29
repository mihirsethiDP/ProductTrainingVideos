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
 * Admin-only "Content Studio". Implementers upload a client screen recording
 * (to build a personalized demo) or new product content (to author new
 * lessons). Each upload is queued; a Claude Code agent generates and deploys
 * the result and flips the job to "Ready".
 */
export default function Studio() {
  const { isAdmin, loading } = useAuth();

  const [kind, setKind] = useState<JobKind>('demo');
  const [title, setTitle] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(async () => {
    setJobs(await listJobs());
  }, []);

  useEffect(() => {
    if (isAdmin) refresh();
  }, [isAdmin, refresh]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const file = fileRef.current?.files?.[0];
    if (!file) return setMsg({ ok: false, text: 'Choose a file to upload.' });
    if (!title.trim()) return setMsg({ ok: false, text: 'Give it a title.' });
    if (kind === 'demo' && !clientEmail.trim()) return setMsg({ ok: false, text: "Enter the client's email." });
    setBusy(true);
    const { error } = await submitJob({ kind, title, clientEmail, notes, file, stamp: Date.now() });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error });
    setMsg({ ok: true, text: 'Uploaded & queued. It will appear below as it’s generated.' });
    setTitle('');
    setClientEmail('');
    setNotes('');
    if (fileRef.current) fileRef.current.value = '';
    refresh();
  }

  if (loading) return null;
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="container">
        <Header meta={<Link to="/admin" className="header-link">← Admin</Link>} />

        <div className="title-block">
          <div className="eyebrow">Admin · Content Studio</div>
          <h1 className="lesson-title">Content Studio</h1>
          <p className="lesson-subtitle">
            Upload a client screen recording to build a <strong>personalized demo</strong>, or upload new product
            content to author <strong>new lessons</strong>. Each upload is queued and turned into a step-by-step,
            narrated walkthrough.
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

            {kind === 'demo' && (
              <label className="studio-field">
                <span>Client email (who sees this demo)</span>
                <input type="email" placeholder="client@company.com" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              </label>
            )}

            <label className="studio-field">
              <span>Recording / content file</span>
              <input ref={fileRef} type="file" accept="video/*,.pdf,.docx,.png,.jpg,.jpeg" />
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
            Files are stored privately in Supabase. Generation runs separately — the job below moves to “Ready” when the
            demo or lesson is live.
          </div>
        </form>

        <div className="admin-users">
          <div className="au-head studio-head">
            <span>Upload</span>
            <span>Type</span>
            <span>For</span>
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
              <div className="au-email">{j.client_email ?? '—'}</div>
              <div>
                <span className={`badge studio-status ${j.status}`}>{STATUS_LABEL[j.status]}</span>
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
