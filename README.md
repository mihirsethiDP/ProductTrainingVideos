# DigitalPaani Training Series

A multilingual, voice-guided product training site for DigitalPaani — built for plant **Operators**, **Supervisors**, and **Internal users**.

Lessons are narrated by **Riya** (browser text-to-speech for now, ElevenLabs-ready later) in English, Hindi, Tamil, and Marathi, with synced subtitles and an animated guide cursor that points at the exact control being explained.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

Deploy `dist/` to any static host (Vercel / Netlify / GitHub Pages — routing uses hash URLs, so no server config is needed).

## How it's organized

```
public/screenshots/module-01/   real product screenshots (extracted from the v4 prototype)
src/
  data/
    types.ts                    lesson/module/role type definitions
    i18n.ts                     UI strings for en / hi / ta / mr
    catalog.ts                  roles → modules → lessons mapping
    lessons/
      module-01-dashboard/
        lesson-01-overview.ts   step content (4 languages) + layouts + cursor paths
  lib/
    tts.ts                      Web Speech API wrapper (voice picking, progress events)
    subtitles.ts                narration → subtitle chunking
    progress.ts                 localStorage progress / language / role
  components/                   VoicePanel, Stage, GuideCursor, SubtitleBar, …
  pages/                        RoleSelect → RoleHome → LessonPage
```

## The three audiences

Each role sees its own training path. **Module 01 — Dashboard Fundamentals is shared by all three.** Role-specific modules (Daily Operations, Reports & Team Access, Internal Tools) are scaffolded as "coming soon" and light up as lessons are added.

## Content tags

Every module, lesson, and step has a short tag so any piece of content can be
referenced for edits — e.g. "change the tip in **M2.L1.S3**". The tags are shown
in the UI (a chip on each module/lesson, and in the narration card's top-right label).

- **Module** → `tag` field in `catalog.ts` (`M1`, `M2`, …)
- **Lesson** → `<moduleTag>.L<lessonNumber>` (e.g. `M2.L1`)
- **Step**   → `<lessonTag>.S<n>`, 1-based (e.g. `M2.L1.S3`)

To act on a tag: the module number → the module in `catalog.ts` → its lesson by
`lessonNumber` → the lesson file → `steps[n-1]` and `layouts[n-1]`.

## Two ways to show a step: screenshot or live widget

A lesson step's `layout.mode` can be:
- `showcase` — the auto-scrolling full-dashboard tour (lesson 1 intro).
- `detail` — a static screenshot with an optional spotlight box.
- `widget` — a **live, recreated widget component** (no screenshot). Set
  `widget` to a key in `src/components/widgets/index.ts` and pass `widgetState`
  to drive it (highlight a part, open a menu, show a time-frame badge). This is
  how Module 2 widget lessons are built — it's fully interactive and avoids
  needing a pixel-perfect screenshot per state.

## Adding a new lesson

1. For screenshot lessons, drop images into `public/screenshots/module-XX/`.
   For widget lessons, add the widget component under `src/components/widgets/`
   and register it in `widgets/index.ts`.
2. Create `src/data/lessons/module-XX/lesson-YY-name.ts` (copy an existing lesson):
   - `content` — title/subtitle/steps per language (`body` = on-screen HTML, `voice` = spoken text).
   - `layouts` — one per step: `mode`, the screenshot/widget reference, optional
     `spotlight` (% coords), optional `cursor` keyframes (`at` = 0–1 fraction of
     narration progress, `x`/`y` = % position, `click: true` for a ripple).
3. Register it in `src/data/catalog.ts`: add to `LESSONS` and reference it from a
   module's `lessons` array (remove `comingSoon`).

## Subtitles & guide cursor

- **Subtitles** are generated from the `voice` text and synced with the Web Speech API's word-boundary events (with a time-based fallback for voices that don't emit them). Toggle with the **CC** chip.
- The **guide cursor** follows `cursor` keyframes in the lesson layout, gliding to each target as narration progress passes its `at` threshold.

## ElevenLabs migration (planned)

Generate MP3s per language/lesson/step into `public/audio/{lang}/{lesson}/step-{n}.mp3`, then swap `lib/tts.ts` for an `<audio>`-based player with the same `onProgress` callback — components stay untouched. Browser TTS remains the fallback.
