import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import {
  addMedia, createPlant, deleteMedia, driveOpenUrl, driveThumbUrl, isMissingSchema, listMedia,
  listPlants, parseDriveId, shareUrl, type MediaKind, type Plant, type PlantMedia,
} from '../lib/library';
import { DRIVE_FOLDER_ID, driveUploadEnabled } from '../config/drive';
import { connectDrive, disconnectDrive, driveConnected, shareWithAnyone, uploadToDrive } from '../lib/googleDrive';

/**
 * Equipment library (DP staff only, English-only like the Studio).
 *
 * Curators paste a Google Drive share link per photo/video; Drive holds the
 * bytes, we hold the index. Each item gets a no-sign-in share link to forward to
 * plant staff over WhatsApp.
 */
export default function Library() {
  const { canCreate, loading, myPlantIds } = useAuth();
  // staff curate the whole library; anyone who belongs to a plant can browse
  // that plant's shelf read-only. RLS does the real filtering — these two just
  // decide which controls to render.
  const canCurate = canCreate;
  const canView = canCreate || myPlantIds.length > 0;

  const [plants, setPlants] = useState<Plant[]>([]);
  const [plantId, setPlantId] = useState('');
  const [media, setMedia] = useState<PlantMedia[]>([]);
  const [fetching, setFetching] = useState(true);

  // add-media form
  const [kind, setKind] = useState<MediaKind>('video');
  const [title, setTitle] = useState('');
  const [equipment, setEquipment] = useState('');
  const [description, setDescription] = useState('');
  const [driveLink, setDriveLink] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // new-plant form
  const [showNewPlant, setShowNewPlant] = useState(false);
  const [newPlant, setNewPlant] = useState('');
  const [newWorkspace, setNewWorkspace] = useState('');

  const [copied, setCopied] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  // in-app Drive upload
  const [file, setFile] = useState<File | null>(null);
  const [connected, setConnected] = useState(driveConnected());
  const [progress, setProgress] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cancelRef = useRef(false);

  const loadPlants = useCallback(async () => {
    const { rows, error } = await listPlants();
    if (isMissingSchema(error)) setNeedsSetup(true);
    setPlants(rows);
    setPlantId((cur) => cur || rows[0]?.id || '');
  }, []);

  const loadMedia = useCallback(async (pid: string) => {
    setFetching(true);
    const { rows, error } = await listMedia(pid || undefined);
    if (isMissingSchema(error)) setNeedsSetup(true);
    setMedia(rows);
    setFetching(false);
  }, []);

  useEffect(() => {
    if (canView) loadPlants();
  }, [canView, loadPlants]);

  useEffect(() => {
    if (canView) loadMedia(plantId);
  }, [canView, plantId, loadMedia]);

  async function submitPlant(e: React.FormEvent) {
    e.preventDefault();
    if (!newPlant.trim()) return;
    const { plant, error } = await createPlant(newPlant, newWorkspace);
    if (error) { setErr(error); return; }
    setNewPlant('');
    setNewWorkspace('');
    setShowNewPlant(false);
    await loadPlants();
    if (plant) setPlantId(plant.id);
  }

  function resetForm() {
    setTitle('');
    setEquipment('');
    setDescription('');
    setDriveLink('');
    setFile(null);
    if (fileRef.current) fileRef.current.value = '';
  }

  async function connect() {
    setErr(null);
    try {
      await connectDrive();
      setConnected(true);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Could not connect to Google Drive.');
    }
  }

  /**
   * Two ways in, one handler:
   *  · a file chosen → upload to Drive, make it link-shareable, save the row
   *  · a Drive link pasted → just save the row
   */
  async function submitMedia(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setMsg(null);
    if (!plantId) { setErr('Pick a plant first — or add one.'); return; }
    if (!file && !driveLink.trim()) { setErr('Choose a file to upload, or paste a Drive link.'); return; }

    setBusy(true);
    cancelRef.current = false;
    try {
      let driveFileId: string | undefined;

      if (file) {
        const token = await connectDrive();
        setConnected(true);
        const folderId = plants.find((p) => p.id === plantId)?.drive_folder_id || DRIVE_FOLDER_ID || undefined;
        setProgress(0);
        const up = await uploadToDrive({
          file,
          folderId,
          token,
          onProgress: setProgress,
          shouldCancel: () => cancelRef.current,
        });
        driveFileId = up.fileId;
        // without this the share link shows "access denied" to plant staff
        await shareWithAnyone(driveFileId, token);
        setProgress(null);
      }

      const { error } = await addMedia({
        plantId, kind, title, equipment, description,
        driveLink: driveFileId ? undefined : driveLink,
        driveFileId,
      });
      if (error) { setErr(error); return; }
      setMsg(file ? `Uploaded and added “${title.trim()}”.` : `Added “${title.trim()}”.`);
      resetForm();
      loadMedia(plantId);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Upload failed.');
    } finally {
      setProgress(null);
      setBusy(false);
    }
  }

  async function remove(item: PlantMedia) {
    if (!window.confirm(`Remove “${item.title}” from the library?\n\nThis only removes the entry here — the file stays in Google Drive.`)) return;
    const { error } = await deleteMedia(item.id);
    if (error) { setErr(error); return; }
    loadMedia(plantId);
  }

  async function copyShare(item: PlantMedia) {
    const url = shareUrl(item.share_token);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(item.id);
      window.setTimeout(() => setCopied(null), 2500);
    } catch {
      window.prompt('Copy the share link:', url);
    }
  }

  if (loading) return null;
  if (!canView) return <Navigate to="/" replace />;

  const parsedId = parseDriveId(driveLink);
  const plantName = plants.find((p) => p.id === plantId)?.name ?? '';

  return (
    <div className="page">
      <div className="container">
        <Header meta={canCurate ? <Link to="/admin" className="header-link">← Admin</Link> : undefined} />

        <div className="title-block">
          <div className="eyebrow">Equipment Library</div>
          <h1 className="lesson-title">Equipment Library</h1>
          <p className="lesson-subtitle">
            Photos and videos of the physical equipment at a plant — a trainer walking through a pump, a blower, a valve.
            Files live in Google Drive; this keeps them organised per plant and gives each one a link you can forward to
            plant staff with no sign-in needed.
          </p>
          {canCurate && (
            <Link to="/admin/studio">
              <button className="lesson-cta" style={{ marginTop: 16 }}>🎬 Content Studio — demos &amp; lessons →</button>
            </Link>
          )}
        </div>

        {needsSetup && (
          <div className="au-empty au-error">
            Library tables aren’t in the database yet — run the latest <code>supabase/schema.sql</code> in the Supabase
            SQL editor to create <code>plants</code>, <code>plant_media</code> and the share-link function.
          </div>
        )}

        {/* plant picker */}
        <div className="lib-plantbar">
          <label className="lib-label" htmlFor="lib-plant">Plant</label>
          <select id="lib-plant" className="au-role" value={plantId} onChange={(e) => setPlantId(e.target.value)}>
            {plants.length === 0 && <option value="">No plants yet</option>}
            {plants.map((p) => (
              <option key={p.id} value={p.id}>{p.name}{p.workspace ? ` · ${p.workspace}` : ''}</option>
            ))}
          </select>
          {canCurate && (
            <button type="button" className="au-toggle" onClick={() => setShowNewPlant((s) => !s)}>
              {showNewPlant ? 'Cancel' : '＋ New plant'}
            </button>
          )}
        </div>

        {canCurate && showNewPlant && (
          <form className="admin-invite" onSubmit={submitPlant}>
            <div className="ai-title">Add a plant</div>
            <div className="ai-row">
              <input type="text" placeholder="Plant name (e.g. METL WTP)" value={newPlant} onChange={(e) => setNewPlant(e.target.value)} required />
              <input type="text" placeholder="Workspace (optional)" value={newWorkspace} onChange={(e) => setNewWorkspace(e.target.value)} />
              <button type="submit" className="lesson-cta">Add plant</button>
            </div>
            <div className="ai-hint">Keep names consistent with the main platform so the library doesn’t fragment.</div>
          </form>
        )}

        {/* add media — staff curate; plant members browse read-only */}
        {canCurate && (
        <form className="admin-invite" onSubmit={submitMedia}>
          <div className="ai-title">Add {kind === 'video' ? 'a video' : 'a photo'}{plantName ? ` — ${plantName}` : ''}</div>

          <div className="studio-kind">
            <button type="button" className={`track-seg${kind === 'video' ? ' active' : ''}`} onClick={() => setKind('video')}>
              🎥 Video
            </button>
            <button type="button" className={`track-seg${kind === 'photo' ? ' active' : ''}`} onClick={() => setKind('photo')}>
              🖼 Photo
            </button>
          </div>

          <div className="ai-row">
            <input type="text" placeholder="Title (e.g. Softener feed pump — how it works)" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Equipment / area (optional)" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
          </div>

          {driveUploadEnabled() ? (
            <>
              <div className="lib-upload">
                <input
                  ref={fileRef}
                  type="file"
                  accept={kind === 'video' ? 'video/*' : 'image/*'}
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
                {!connected && (
                  <button type="button" className="au-toggle" onClick={connect}>Connect Google Drive</button>
                )}
                {connected && (
                  <span className="lib-connected">
                    ✓ Drive connected
                    <button type="button" className="studio-share" onClick={() => { disconnectDrive(); setConnected(false); }}>
                      disconnect
                    </button>
                  </span>
                )}
              </div>
              {file && (
                <div className="ai-hint">
                  {file.name} · {(file.size / (1024 * 1024)).toFixed(1)} MB → uploads to Drive, then gets a share link automatically.
                </div>
              )}
              {progress !== null && (
                <div className="lib-progress">
                  <div className="lib-progress-rail"><div className="lib-progress-fill" style={{ width: `${Math.round(progress * 100)}%` }} /></div>
                  <span>{Math.round(progress * 100)}% uploaded</span>
                  <button type="button" className="studio-share" onClick={() => { cancelRef.current = true; }}>cancel</button>
                </div>
              )}
              <div className="lib-or">or paste a link to a file already in Drive</div>
            </>
          ) : (
            <div className="ai-hint">
              In-app upload is off until an OAuth client id is set in <code>src/config/drive.ts</code> — paste a Drive link for now.
            </div>
          )}

          <div className="ai-row">
            <input
              type="text"
              placeholder="Google Drive share link"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              disabled={!!file}
            />
            <button type="submit" className="lesson-cta" disabled={busy}>
              {busy ? (progress !== null ? 'Uploading…' : 'Adding…') : file ? 'Upload & add' : 'Add to library'}
            </button>
          </div>
          <textarea
            className="lib-desc"
            placeholder="What this covers (optional) — shown under the video for plant staff"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
          />
          {driveLink && (
            <div className={`ai-hint${parsedId ? '' : ' err'}`}>
              {parsedId ? `✓ Drive file id: ${parsedId}` : '⚠ Could not find a file id in that link.'}
            </div>
          )}
          {msg && <div className="ai-msg">{msg}</div>}
          {err && <div className="ai-msg err">{err}</div>}
          <div className="ai-hint">
            In Drive, set the file to <strong>Anyone with the link</strong> — otherwise plant staff will see “access denied”.
            Compress long clips (720p) so they play on plant wifi.
          </div>
        </form>
        )}

        {/* grid */}
        <div className="studio-jobs-head">
          <div className="studio-jobs-title">
            {plantName || 'Library'} · {media.length} item{media.length === 1 ? '' : 's'}
          </div>
          <button type="button" className="au-toggle" onClick={() => loadMedia(plantId)}>↻ Refresh</button>
        </div>

        {fetching && <div className="au-empty">…</div>}
        {!fetching && media.length === 0 && (
          <div className="au-empty">Nothing here yet — add the first video for this plant above.</div>
        )}

        <div className="lib-grid">
          {media.map((m) => (
            <div className="lib-card" key={m.id}>
              <a className="lib-thumb" href={driveOpenUrl(m.drive_file_id)} target="_blank" rel="noopener noreferrer">
                <img src={driveThumbUrl(m.drive_file_id, 640)} alt="" loading="lazy" />
                <span className="lib-kind">{m.media_kind === 'video' ? '▶' : '🖼'}</span>
              </a>
              <div className="lib-body">
                <div className="lib-title">{m.title}</div>
                {m.equipment && <div className="lib-equip">{m.equipment}</div>}
                {m.description && <div className="lib-note">{m.description}</div>}
                <div className="studio-actions">
                  <a className="studio-share" href={`#/watch/equipment/${m.share_token}`}>Preview ↗</a>
                  <button type="button" className={`studio-share${copied === m.id ? ' copied' : ''}`} onClick={() => copyShare(m)}>
                    {copied === m.id ? '✓ Copied' : 'Copy share link'}
                  </button>
                  <a className="studio-share" href={driveOpenUrl(m.drive_file_id)} target="_blank" rel="noopener noreferrer">Drive</a>
                  {canCurate && (
                    <button type="button" className="studio-share lib-del" onClick={() => remove(m)}>Remove</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
