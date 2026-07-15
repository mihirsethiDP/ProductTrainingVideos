import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { MODULES, getLesson } from '../data/catalog';
import { demoVideoUrl, demoVideoDownloadUrl } from '../lib/supabase';
import { listJobs, submitJob, validateFiles, type ContentMode, type DemoStyle, type GenerationJob, type JobKind } from '../lib/studio';

/** When a demo is available until. Prefer the lesson's own expiresAt stamp
 *  (end of local day) — the exact rule the app + share link use — so Studio
 *  never says "available" while the client's link already reads "expired".
 *  Falls back to created_at + 30 days for any demo without a stamp. */
const DEMO_TTL_MS = 30 * 24 * 60 * 60 * 1000;
function demoExpiry(j: GenerationJob): Date {
  const lessonId = j.result_lesson_id?.split('/').pop();
  const stamp = lessonId ? getLesson(lessonId)?.expiresAt : undefined;
  if (stamp) return new Date(`${stamp}T23:59:59`);
  return new Date(new Date(j.created_at).getTime() + DEMO_TTL_MS);
}

/** Share/download/expiry row shown under a finished demo job. */
function DemoRowExtras({ job }: { job: GenerationJob }) {
  const [copied, setCopied] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const lessonId = job.result_lesson_id?.split('/').pop() ?? '';

  useEffect(() => {
    if (!lessonId) return;
    let stale = false;
    const url = demoVideoUrl(lessonId);
    fetch(url, { method: 'HEAD' })
      .then((res) => { if (!stale && res.ok) setVideoUrl(url); })
      .catch(() => { /* not recorded (yet) */ });
    return () => { stale = true; };
  }, [lessonId]);

  const shareLink = `${window.location.origin}${import.meta.env.BASE_URL}#/${job.result_lesson_id}`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy the share link:', shareLink); // clipboard blocked — show it instead
    }
  };

  return (
    <>
      <button type="button" className="studio-share" onClick={copy}>
        {copied ? '✓ Link copied!' : '🔗 Copy share link'}
      </button>
      {videoUrl && (
        <a className="studio-share" href={demoVideoDownloadUrl(lessonId)} download>⬇ Video</a>
      )}
      <div className="studio-expiry">
        No sign-in needed to watch · available until {demoExpiry(job).toLocaleDateString()}
      </div>
    </>
  );
}

// real modules only — the hidden holders (demos/shorts) aren't valid targets
const TARGET_MODULES = MODULES.filter((m) => m.roles.length > 0);

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
  const [demoStyle, setDemoStyle] = useState<DemoStyle>('overview');
  const [contentMode, setContentMode] = useState<ContentMode>('enhance');
  const [targetModule, setTargetModule] = useState<string>(TARGET_MODULES[0]?.id ?? '');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [jobs, setJobs] = useState<GenerationJob[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cancelRef = useRef(false); // set true to abort an in-flight upload

  const refresh = useCallback(async () => {
    setJobs(await listJobs());
  }, []);

  useEffect(() => {
    if (canCreate) refresh();
  }, [canCreate, refresh]);

  // while anything is still queued/processing, poll so "Generating…" advances to
  // "Ready" (or "Failed") without a manual reload
  const hasActive = jobs.some((j) => j.status === 'queued' || j.status === 'processing');
  useEffect(() => {
    if (!canCreate || !hasActive) return;
    const id = window.setInterval(refresh, 20000);
    return () => window.clearInterval(id);
  }, [canCreate, hasActive, refresh]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const files = Array.from(fileRef.current?.files ?? []);
    if (files.length === 0) return setMsg({ ok: false, text: 'Choose at least one file to upload.' });
    if (!title.trim()) return setMsg({ ok: false, text: 'Give it a title.' });
    const typeError = validateFiles(files);
    if (typeError) return setMsg({ ok: false, text: typeError });
    cancelRef.current = false;
    setBusy(true);
    const { error, cancelled } = await submitJob({
      kind,
      title,
      notes,
      files,
      stamp: Date.now(),
      demoStyle,
      contentMode,
      targetModule,
      onProgress: (text) => setMsg({ ok: true, text }),
      shouldCancel: () => cancelRef.current,
    });
    setBusy(false);
    if (cancelled) return setMsg({ ok: false, text: 'Upload cancelled — nothing was queued.' });
    if (error) return setMsg({ ok: false, text: error });
    setMsg({ ok: true, text: 'Uploaded & queued. It will appear below as it’s generated.' });
    setTitle('');
    setNotes('');
    if (fileRef.current) fileRef.current.value = '';
    refresh();
  }

  // pull a rejected upload's details back into the form so the CSM can fix and
  // re-upload (a rejected job is otherwise a permanent dead end — CSMs can't edit it)
  function reviseResubmit(job: GenerationJob) {
    setKind(job.kind);
    setTitle(job.title);
    setNotes(job.notes ?? '');
    if (job.kind === 'demo') setDemoStyle(job.demo_style);
    else {
      setContentMode(job.content_mode ?? 'enhance');
      if (job.target_module) setTargetModule(job.target_module);
    }
    setMsg({ ok: true, text: 'Loaded the rejected upload — adjust it, attach the files again, and re-upload.' });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

        <form ref={formRef} className="admin-invite" onSubmit={onSubmit}>
          <div className="ai-title">New upload</div>

          <div className="studio-kind">
            <button type="button" className={`track-seg${kind === 'demo' ? ' active' : ''}`} onClick={() => setKind('demo')}>
              🎬 Personalized demo
            </button>
            <button type="button" className={`track-seg${kind === 'content' ? ' active' : ''}`} onClick={() => setKind('content')}>
              📚 New lesson content
            </button>
          </div>

          {kind === 'demo' ? (
            <div className="studio-sub">
              <span className="studio-sub-label">Demo depth</span>
              <div className="studio-kind">
                <button type="button" className={`track-seg${demoStyle === 'overview' ? ' active' : ''}`} onClick={() => setDemoStyle('overview')}>
                  ⚡ Overview · ~2–3 min
                </button>
                <button type="button" className={`track-seg${demoStyle === 'detailed' ? ' active' : ''}`} onClick={() => setDemoStyle('detailed')}>
                  🔎 Detailed deep-dive
                </button>
              </div>
              <div className="studio-sub-hint">
                {demoStyle === 'overview'
                  ? 'A brisk page-by-page tour — navigation first, one step per feature area.'
                  : 'A longer walkthrough that opens up each page and its key widgets in depth.'}
              </div>
            </div>
          ) : (
            <div className="studio-sub">
              <span className="studio-sub-label">This content is…</span>
              <div className="studio-kind">
                <button type="button" className={`track-seg${contentMode === 'enhance' ? ' active' : ''}`} onClick={() => setContentMode('enhance')}>
                  ➕ For an existing module
                </button>
                <button type="button" className={`track-seg${contentMode === 'new' ? ' active' : ''}`} onClick={() => setContentMode('new')}>
                  🆕 A new module
                </button>
              </div>
              {contentMode === 'enhance' && (
                <label className="studio-field" style={{ marginTop: 10 }}>
                  <span>Which module does it enhance?</span>
                  <select value={targetModule} onChange={(e) => setTargetModule(e.target.value)}>
                    {TARGET_MODULES.map((m) => (
                      <option key={m.id} value={m.id}>{m.tag} · {m.name.en}</option>
                    ))}
                  </select>
                </label>
              )}
            </div>
          )}

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
              <span>Notes (optional) — AI weaves these into the right sections</span>
              <textarea
                rows={3}
                placeholder="Write freely: focus areas, client priorities, things to emphasise or skip, tone… Each note is matched to the product modules it concerns and shapes that part of the walkthrough."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>

          <div className="studio-submit-row">
            <button type="submit" className="lesson-cta" disabled={busy}>
              {busy ? 'Uploading…' : 'Upload & queue'}
            </button>
            {busy && (
              <button type="button" className="au-toggle" onClick={() => { cancelRef.current = true; }}>
                Cancel upload
              </button>
            )}
          </div>
          {msg && <div className={`ai-msg${msg.ok ? '' : ' err'}`}>{msg.text}</div>}
          <div className="ai-hint">
            Files are stored privately in Supabase. Large recordings are split into chunks automatically and reassembled
            during generation. Generation picks new uploads up within ~10 minutes — the job below moves through
            “Generating…” to “Ready” when the demo or lesson is live. Finished demos get a <strong>share link</strong>{' '}
            your client can open with no sign-in, plus a downloadable video — and are kept for <strong>30 days</strong>,
            then removed automatically.
          </div>
        </form>

        <div className="studio-jobs-head">
          <span className="studio-jobs-title">Your uploads</span>
          <button type="button" className="au-toggle" onClick={refresh}>↻ Refresh</button>
        </div>
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
                ) : j.kind === 'demo' && j.status === 'done' && demoExpiry(j).getTime() < Date.now() ? (
                  <span className="badge studio-status queued">Expired</span>
                ) : (
                  <span className={`badge studio-status ${j.status}`}>{STATUS_LABEL[j.status]}</span>
                )}
                {j.status === 'done' && j.result_lesson_id && (j.kind !== 'demo' || demoExpiry(j).getTime() >= Date.now()) && (
                  <>
                    <a className="studio-open" href={`#/${j.result_lesson_id}`}>Open →</a>
                    {j.kind === 'demo' && <DemoRowExtras job={j} />}
                  </>
                )}
                {j.kind === 'demo' && j.status === 'done' && demoExpiry(j).getTime() < Date.now() && (
                  <div className="studio-expiry">Demos are kept for 30 days, then removed.</div>
                )}
                {j.status === 'failed' && j.notes && <div className="studio-err">{j.notes}</div>}
                {j.approval_status === 'pending' && (
                  <div className="studio-hint-sm">A DigitalPaani admin will review this before it’s generated.</div>
                )}
                {j.approval_status === 'rejected' && (
                  <div className="studio-reject">
                    {j.reviewer_note && <div className="studio-err">Reason: {j.reviewer_note}</div>}
                    <button type="button" className="au-toggle" onClick={() => reviseResubmit(j)}>
                      Revise &amp; resubmit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
