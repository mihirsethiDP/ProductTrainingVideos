/**
 * Google Drive upload config.
 *
 * Both values below are PUBLIC by design and safe to commit:
 *  - An OAuth *client id* is not a secret. It's useless without a matching
 *    "Authorized JavaScript origin", which is why the origin list is the real
 *    security boundary. There is NO client secret in this flow and no backend.
 *  - A folder id is just a Drive path; access is still governed by Drive itself.
 *
 * ── One-time setup (Google Cloud Console, ~5 minutes) ──────────────────────
 * 1. console.cloud.google.com → create/pick a project (e.g. "DP Training").
 * 2. APIs & Services → Library → enable **Google Drive API**.
 * 3. APIs & Services → OAuth consent screen → User type **Internal**
 *    (works because digitalpaani.com is Google Workspace — Internal skips
 *    Google's multi-week verification review that Drive scopes otherwise need).
 * 4. Credentials → Create credentials → **OAuth client ID** → Web application.
 *    Authorized JavaScript origins — add BOTH:
 *      https://training.digitalpaani.com
 *      http://localhost:5173
 *    (no redirect URIs needed; the token flow is popup-based)
 * 5. Paste the client id below.
 *
 * ── The destination folder ─────────────────────────────────────────────────
 * Put it in a **Shared Drive**, not someone's My Drive: files in a Shared Drive
 * are owned by the organisation, so equipment videos survive whoever uploaded
 * them leaving the company. Give the curators (admins/CSMs) Contributor access.
 * The id is the last path segment of the folder URL:
 *   https://drive.google.com/drive/folders/<THIS_PART>
 *
 * A plant can override this with its own folder (plants.drive_folder_id) — set
 * per plant in the Equipment Library. This is just the default.
 */

/** OAuth client id (project "Product Training Hub", consent screen = Internal).
 *  Public by design — see the note at the top of this file. Empty = in-app upload
 *  switches off and curators use the "paste a Drive link" path instead. */
export const DRIVE_CLIENT_ID =
  (import.meta.env.VITE_GDRIVE_CLIENT_ID as string | undefined) ??
  '1011955028491-0fjuk1t1hjvgllistf8m12650e40p3pe.apps.googleusercontent.com';

/**
 * Default destination folder.
 *
 * NOTE: this currently lives in a PERSONAL My Drive, not a Shared Drive. It works,
 * but the files are owned by whoever uploads them and the folder goes with that
 * person's account — so equipment videos are at risk if they leave. Moving the
 * folder into a Shared Drive later only means swapping this id; the library rows
 * keep working because they reference file ids, not the folder.
 */
export const DRIVE_FOLDER_ID =
  (import.meta.env.VITE_GDRIVE_FOLDER_ID as string | undefined) ?? '16wm6CGOHnVIvgqHDO03jqtM8sRy0VDHD';

/** Narrow scope: per-file access to files THIS APP creates. It cannot read,
 *  list, or modify anything else in the user's Drive. */
export const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.file';

export const driveUploadEnabled = () => DRIVE_CLIENT_ID.trim().length > 0;
