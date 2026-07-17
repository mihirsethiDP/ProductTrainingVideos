---
name: spotlight-audit
description: >-
  Audit and fix spotlight/highlight alignment in DigitalPaani training lessons
  (src/data/lessons/**/*.ts). Use this whenever the user mentions spotlights or
  highlights, says the highlighted area is wrong/off/blank, says a lesson or demo
  is highlighting the wrong thing, says the narrator/narration doesn't match what's
  highlighted, or asks to check/verify/QA spotlights across any lessons or modules
  — even if they never say the word "spotlight". Also use it right after authoring
  or editing any lesson or demo that has `spotlight` layouts, to confirm each
  highlight frames the element its caption + narration describe. Do not eyeball
  spotlight coordinates from the source — always verify by compositing the box
  onto the real screenshot.
---

# Spotlight audit & fix

Lessons in this repo teach by showing a screenshot with a **spotlight** — a
highlight rectangle drawn over one UI element while the narrator talks about it.
When the rectangle lands on the wrong element, blank space, or an unloaded
loading skeleton, the lesson silently misleads the learner. Coordinates set "by
eye" from the source code are the usual culprit — a box that *looks* plausible in
percentages often misses once drawn on the actual image. This skill's whole point
is: **draw the box on the real screenshot and look at it.**

## How the data model works (read this first)

A lesson file (`src/data/lessons/<module>/<lesson>.ts`) exports:

- `screenshots`: a map of `key → \`${BASE}/file.jpg\``, where `BASE` ends in
  `screenshots/<folder>`. Files live at `public/screenshots/<folder>/<file>.jpg`.
- `layouts[]`: each entry has `mode`, a `screenshot` key, a `caption`, and — for
  `mode: 'detail'` — a `spotlight: { top, left, width, height }` given as
  **percentages of that screenshot** (the app-cropped frame, usually 1280 wide).
- `content[lang].steps[]`: the narration. **`layouts[i]` is shown with
  `steps[i]`** — they are paired by index.

So a spotlight is correct when its rectangle tightly frames the exact element
that **both** the layout's `caption` and the paired `steps[i].voice`/`body`
(judge in English) are talking about. Only `mode: 'detail'` layouts with a
`spotlight` need checking — ignore `showcase`, `widget`, and cursor-only layouts.

## Step 1 — Composite every spotlight and look at it

Run the bundled script; it parses the lesson, resolves each screenshot, and draws
each spotlight box onto the real frame:

```bash
node .claude/skills/spotlight-audit/scripts/audit-spotlights.mjs <path/to/lesson.ts>
# composites → ./.spotlight-audit/<lesson>/L<index>_<key>.jpg  (+ a printed manifest)
```

Then **Read each composite JPG** and judge the yellow box against that layout's
caption + `steps[index]` narration. A box is *misaligned* when it sits over blank
space / a loading skeleton, frames the wrong control, or is badly loose (lots of
empty margin, clipping the target). Minor offsets that still clearly frame the
right element are fine — don't chase pixels.

If you ever need to draw one box by hand (the math the script uses):

```bash
FF="node_modules/ffmpeg-static/ffmpeg.exe"
# pixel box = round(pct * dimension); get WxH from:  "$FF" -i shot.jpg
"$FF" -y -i public/screenshots/<folder>/<file>.jpg \
  -vf "drawbox=x=<left%*W>:y=<top%*H>:w=<width%*W>:h=<height%*H>:color=yellow@1:t=5" out.jpg
```

## Step 2 — Fix, and re-verify the fix

For each misaligned spotlight, inspect the plain screenshot, pick new
percentages, **edit the lesson file, then re-run the script and look again** —
never trust a corrected coordinate you haven't re-drawn. Repeat until the box
frames the element.

- **Edit only the `spotlight` values** (and the `screenshot` key if you need a
  different frame — see the skeleton trap below). Anchor your edit on the
  layout's `caption` so you change the right one; several layouts can share
  identical coordinates.
- **Moving a spotlight does NOT require regenerating audio.** The narration
  `voice` text is unchanged, so the clips still match. Only run
  `npm run gen:audio -- --lesson=<id>` (optionally `--force`) if you actually
  change narration text.

## Step 3 — Verify build & ship

`npx tsc --noEmit` and `npm run build` to catch a broken edit, then commit the
touched lesson files (and any swapped screenshot) and push. A live browser check
is unreliable here (the app's animation stalls screenshot capture) — the
composite images from Step 1 are the authoritative verification.

## Scaling to a whole-catalog audit

For "go through every lesson/module", first find the lessons that actually have
spotlights, then fan out with the **Workflow tool — one agent per lesson** so
they run in parallel:

```bash
# lessons with spotlights:
rg -l "spotlight:" src/data/lessons
```

Give each workflow agent one lesson and have it: run the bundled script, Read
each composite, judge it, and for any miss iterate to a **re-composited, verified**
corrected coordinate — returning structured findings (layout index, caption,
status, original coords, corrected coords). Collect the misaligned ones, apply
the coordinate edits yourself (mechanical + precise), re-verify a sample, then
build and ship. A clean lesson you already fixed makes a good correctness check —
it should come back "ok".

## Common traps (seen in this repo)

- **Loading skeletons.** In some frames the right-hand detail panel is a gray
  loading placeholder, not real content (e.g. `sensor-health-*/faults.jpg`). A
  box there highlights nothing. Switch the layout's `screenshot` to a frame where
  the panel is loaded (e.g. `fixed-stuck.jpg`, `readings-oor.jpg`) and spotlight
  the real element (the readings chart, the history stats, …).
- **Narration broader than the frame.** Sometimes the narration names something
  the chosen screenshot simply doesn't show (a "Fluttering" badge that isn't in
  the frame, an abstract concept like Epsilon or "mutually exclusive", an event
  plotted on a dashboard when the frame is a dialog). Point the spotlight at the
  closest real element that *is* shown, and **surface the gap to the user** —
  offer to capture a better screenshot or trim the narration line. Don't silently
  pretend the highlight matches.
- **Full-width / oversized boxes.** A box spanning a whole table row or dialog
  usually means "highlight this one column/field" — tighten to the specific
  control the narration names (e.g. just the "No Range Config" column, just the
  "Save" button).
- **Duplicate coordinates.** Two layouts using the same screenshot may carry
  identical spotlight values; always anchor edits on the caption, not the coords.

## Why this approach

The percentages are cheap to write and easy to get subtly wrong; the only way to
know a highlight is right is to see it on the pixels a learner sees. Compositing
is fast, deterministic, and catches exactly the failures eyeballing misses —
skeletons, off-by-a-panel boxes, and narration that points off-screen.
