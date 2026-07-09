# Content Studio — generation playbook

Path B (hybrid): CSMs/admins upload in the app (`/admin/studio`); the
**Claude Code agent** turns each ready job into a deployed demo or lesson. The
app never runs AI — generation happens here, by the agent, using `studio.mjs`
for the mechanical glue and authoring the lesson by hand (high quality).

## One-time setup
1. Run `supabase/schema.sql` (creates `generation_jobs`, roles, RLS, storage policy).
2. Create a **private** Storage bucket named `uploads`.
3. Get the project **service-role key** (Supabase → Settings → API). Keep it secret:
   - PowerShell: `$env:SUPABASE_SERVICE_ROLE = "<key>"`, or
   - put it in `scripts/service.local` (gitignored).

## Processing a job
```
node scripts/studio.mjs list                 # what's ready (approved content + all demos)
node scripts/studio.mjs pickup <jobId>        # downloads the file + extracts frames, marks "processing"
```
`pickup` writes to `.studio-work/<jobId>/` (gitignored). A job can carry ANY mix
of context files — screen recordings, PDFs, Word docs, text notes, spreadsheets,
images (`job.files` manifest; legacy single-file jobs still work). Every file is
downloaded (byte-chunked uploads are concatenated back to the exact original);
videos additionally get `frames-<name>/f###.jpg` extracted. The agent then:
- **Reads the frames** to watch each recording,
- **Reads PDFs/docs/text directly** (pdf & docx skills for those formats),
and decides how each piece of context maps onto the system's capabilities —
plant terminology from docs, metrics/layout from the recording, priorities from
the notes field — before authoring.

Then author the lesson, following the existing patterns:
- **A demo** (`kind: demo`): create a lesson file under a hidden module so it is
  reachable by URL but never listed in anyone's nav. Use `module-demos` (register
  it in `catalog.ts` once; do NOT add it to any role's home list). Route =
  `internal/module-demos/<lessonId>`.

  **Demo style (Mihir's feedback — follow strictly):**
  - **Cover EVERYTHING in the context.** Every page/feature that appears in the
    recordings or documents gets covered. Nothing the uploader provided is skipped.
  - **Honor `job.demo_style`:**
    - `overview` (default): brisk page-by-page tour — one step per dashboard page
      or feature area, sweep several widgets in one breath, voices ≈ 2–3 short
      sentences, total ≈ 2–3 minutes.
    - `detailed`: a deeper walkthrough — 2–4 steps per page, opening up that
      page's key widgets/sections individually (interactive widget recreations
      welcome here), voices can run 3–4 sentences, total ≈ 5–8 minutes. Still no
      monotonous one-widget-per-step crawl across identical cards.
  - **The notes field is an AI instruction layer, not a caption.** Parse the
    uploader's notes into individual intents and MAP each one onto the product
    module/page of the demo it concerns — e.g. "they care most about compliance"
    → expand and lead with the quality/analytics steps; "skip inventory" → omit
    it; "operator audience, keep it simple" → adjust tone and depth of every
    step. Where a note conflicts with the default style, the note wins.
  - **Teach navigation know-how first**: page selector, granularity + time range
    driving all widgets, refresh/download — as step 1, then a wrap step mapping
    which page serves which job.
  - **Use REAL frames from the recordings as screenshots** (`mode: 'detail'`,
    copy chosen frames to `public/screenshots/<lessonId>/`, 1280px wide) so the
    client sees their own screens; in `overview` reserve interactive widget
    recreations for the read-a-widget step. Reference model: `demo-hindalco`.
- **A lesson** (`kind: content`, already admin-approved): honor `job.content_mode`:
  - `enhance` — add the lesson(s) to `job.target_module` in `catalog.ts`: next
    `lessonNumber` in that module, matching its tag scheme and tone. If the
    upload clearly revises an existing lesson rather than adding one, update
    that lesson instead and say so in the commit message.
  - `new` — create a brand-new module: next module number, a fitting tag (M12…),
    name/description in 4 languages, sensible `roles` for the audience, then the
    lesson(s) inside it. Remember to refresh the two persona shorts afterwards
    (standing rule: they must reflect current capabilities).
  General lessons stay generic (no client-specific data), all 4 languages.
  The notes field works the same as for demos: parse it and apply each intent
  to the parts of the content it concerns.

Generate its audio and deploy:
```
npm run gen:audio -- --lesson=<lessonId>      # edge-tts clips + word timings
npm run build                                  # sanity
git add ... && git commit && git push          # GitHub Pages deploys
```

Finalize the job so the Studio shows it as Ready (with an Open link):
```
node scripts/studio.mjs done <jobId> internal/module-demos/<lessonId>
# or on failure:
node scripts/studio.mjs fail <jobId> "couldn't read the recording — re-upload at higher resolution"
```

## Notes
- Demos publish straight through; lesson content only appears in `list` once an
  admin has approved it (Admin page → approval queue).
- `done`'s route path is stored in `result_lesson_id`; the Studio renders it as
  an **Open** link, so admins can view the finished demo from the job list.
