import { DRIVE_CLIENT_ID, DRIVE_SCOPE } from '../config/drive';

/**
 * Browser-side Google Drive upload — no backend, no secret.
 *
 * Google Identity Services hands us a short-lived access token for the narrow
 * `drive.file` scope (per-file access to files this app creates), then we talk to
 * the Drive REST API with plain fetch. Videos go up via a **resumable** session
 * in chunks, so a 200 MB clip on plant wifi reports progress and survives a
 * hiccup instead of failing whole.
 *
 * Deliberately no gapi/googleapis dependency — three fetch calls is the whole job.
 */

interface TokenResponse {
  access_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
}
interface TokenClient {
  requestAccessToken: (overrides?: { prompt?: string }) => void;
}
type GoogleGlobal = {
  accounts?: {
    oauth2?: {
      initTokenClient: (cfg: {
        client_id: string;
        scope: string;
        callback: (r: TokenResponse) => void;
        error_callback?: (e: { type?: string; message?: string }) => void;
      }) => TokenClient;
      revoke?: (token: string, done?: () => void) => void;
    };
  };
};
const gsi = () => (window as unknown as { google?: GoogleGlobal }).google;

const GIS_SRC = 'https://accounts.google.com/gsi/client';
let gisPromise: Promise<void> | null = null;

/** Load Google Identity Services once, lazily — nothing is requested from Google
 *  until a curator actually clicks Connect. */
function loadGis(): Promise<void> {
  if (gisPromise) return gisPromise;
  gisPromise = new Promise((resolve, reject) => {
    if (gsi()?.accounts?.oauth2) return resolve();
    const s = document.createElement('script');
    s.src = GIS_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => (gsi()?.accounts?.oauth2 ? resolve() : reject(new Error('Google sign-in loaded but is unavailable.')));
    s.onerror = () => reject(new Error('Could not reach Google sign-in. Check the network and try again.'));
    document.head.appendChild(s);
  });
  return gisPromise;
}

let cached: { token: string; expiresAt: number } | null = null;

/** True when we already hold a usable token (so the UI can say "Connected"). */
export const driveConnected = () => !!cached && cached.expiresAt > Date.now() + 60_000;

/** Ask Google for an access token. Opens a popup the first time; afterwards the
 *  cached token is reused until it's nearly expired. */
export async function connectDrive(): Promise<string> {
  if (driveConnected()) return cached!.token;
  if (!DRIVE_CLIENT_ID) throw new Error('Drive uploads are not configured yet (missing OAuth client id).');
  await loadGis();
  return new Promise<string>((resolve, reject) => {
    const client = gsi()!.accounts!.oauth2!.initTokenClient({
      client_id: DRIVE_CLIENT_ID,
      scope: DRIVE_SCOPE,
      callback: (r) => {
        if (r.error || !r.access_token) {
          reject(new Error(r.error_description || r.error || 'Google sign-in was cancelled.'));
          return;
        }
        cached = { token: r.access_token, expiresAt: Date.now() + (r.expires_in ?? 3600) * 1000 };
        resolve(r.access_token);
      },
      error_callback: (e) => reject(new Error(e.message || 'Google sign-in was closed before finishing.')),
    });
    client.requestAccessToken();
  });
}

export function disconnectDrive() {
  const tok = cached?.token;
  cached = null;
  if (tok) gsi()?.accounts?.oauth2?.revoke?.(tok);
}

const UPLOAD_CHUNK = 8 * 1024 * 1024; // 8 MB — small enough to show real progress

async function driveError(res: Response, fallback: string): Promise<Error> {
  let detail = '';
  try {
    const body = await res.json();
    detail = body?.error?.message ?? '';
  } catch {
    /* non-JSON error body */
  }
  if (res.status === 401 || res.status === 403) {
    cached = null; // force a fresh consent next attempt
    return new Error(detail || 'Google refused the upload — reconnect Drive and make sure you can write to that folder.');
  }
  if (res.status === 404) return new Error('That Drive folder was not found, or your account cannot write to it.');
  return new Error(detail || `${fallback} (HTTP ${res.status})`);
}

/**
 * Upload one file into `folderId` via a resumable session.
 * `onProgress` gets 0..1 as the bytes go up.
 */
export async function uploadToDrive(opts: {
  file: File;
  folderId?: string;
  token: string;
  onProgress?: (fraction: number) => void;
  shouldCancel?: () => boolean;
}): Promise<{ fileId: string }> {
  const { file, folderId, token, onProgress, shouldCancel } = opts;

  // 1 — open the resumable session (metadata only)
  const metadata: Record<string, unknown> = { name: file.name };
  if (folderId) metadata.parents = [folderId];
  const start = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&supportsAllDrives=true',
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(metadata),
    },
  );
  if (!start.ok) throw await driveError(start, 'Could not start the upload');
  const session = start.headers.get('location');
  if (!session) throw new Error('Google did not return an upload session.');

  // 2 — send the bytes in chunks; 308 means "keep going"
  const total = file.size;
  let offset = 0;
  while (offset < total) {
    if (shouldCancel?.()) throw new Error('Upload cancelled.');
    const end = Math.min(offset + UPLOAD_CHUNK, total);
    const chunk = file.slice(offset, end);
    const res = await fetch(session, {
      method: 'PUT',
      headers: { 'Content-Range': `bytes ${offset}-${end - 1}/${total}` },
      body: chunk,
    });
    if (res.status === 200 || res.status === 201) {
      onProgress?.(1);
      const done = await res.json();
      if (!done?.id) throw new Error('Upload finished but Google did not return a file id.');
      return { fileId: done.id as string };
    }
    if (res.status !== 308) throw await driveError(res, 'Upload failed part-way');
    // Google acknowledges progress in the Range header; trust it over our own count
    const range = res.headers.get('range');
    const ack = range?.match(/bytes=0-(\d+)/);
    offset = ack ? Number(ack[1]) + 1 : end;
    onProgress?.(Math.min(0.99, offset / total));
  }
  throw new Error('Upload ended without confirmation from Google.');
}

/** Make a file readable by anyone with the link — what makes the share link work
 *  for plant staff with no sign-in. Allowed under `drive.file` because this app
 *  created the file. */
export async function shareWithAnyone(fileId: string, token: string): Promise<void> {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}/permissions?supportsAllDrives=true`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: 'reader', type: 'anyone' }),
    },
  );
  // Already-public files come back 400 "already exists" — harmless.
  if (!res.ok && res.status !== 400) throw await driveError(res, 'Uploaded, but could not make it shareable');
}
