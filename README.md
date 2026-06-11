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

## Adding a new lesson

1. Drop screenshots into `public/screenshots/module-XX/`.
2. Create `src/data/lessons/module-XX/lesson-YY-name.ts` (copy lesson-01 as a template):
   - `content` — title/subtitle/steps per language (`body` = on-screen HTML, `voice` = spoken text).
   - `layouts` — one per step: screenshot key, optional `spotlight` (% coords), optional `cursor` keyframes (`at` = 0–1 fraction of narration progress, `x`/`y` = % position, `click: true` for a ripple).
3. Register it in `src/data/catalog.ts`: add to `LESSONS` and reference it from a module's `lessons` array (remove `comingSoon`).

## Subtitles & guide cursor

- **Subtitles** are generated from the `voice` text and synced with the Web Speech API's word-boundary events (with a time-based fallback for voices that don't emit them). Toggle with the **CC** chip.
- The **guide cursor** follows `cursor` keyframes in the lesson layout, gliding to each target as narration progress passes its `at` threshold.

## ElevenLabs migration (planned)

Generate MP3s per language/lesson/step into `public/audio/{lang}/{lesson}/step-{n}.mp3`, then swap `lib/tts.ts` for an `<audio>`-based player with the same `onProgress` callback — components stay untouched. Browser TTS remains the fallback.
