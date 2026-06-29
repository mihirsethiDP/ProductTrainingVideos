/**
 * Narration playback. Prefers a pre-generated edge-tts audio clip (with a
 * word-timing sidecar, so subtitles + the guide cursor lock to the real audio
 * and never drift). Falls back to the live Web Speech voice for any step whose
 * audio hasn't been generated yet, keeping the same callback surface so the
 * lesson page doesn't care which engine is driving it.
 */
import { speak as webSpeak, cancelSpeech, pauseSpeech, resumeSpeech } from './tts';

export type Gender = 'f' | 'm';

interface Timing {
  dur: number;
  words: { t: number; c: number }[];
}

export interface NarrationOpts {
  lessonId: string;
  step: number;
  lang: string; // short code: en | hi | ta | mr
  gender: Gender;
  text: string; // narration text — used for the subtitle + the fallback voice
  voice: SpeechSynthesisVoice | null; // fallback (Web Speech) voice
  langCode: string; // fallback BCP-47 (e.g. hi-IN)
  rate: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
  onProgress?: (progress: number, charIndex: number) => void;
}

const BASE = import.meta.env.BASE_URL; // ends with '/'
const clipUrl = (o: Pick<NarrationOpts, 'lessonId' | 'step' | 'lang' | 'gender'>, ext: string) =>
  `${BASE}audio/${o.lessonId}/s${o.step}.${o.lang}.${o.gender}.${ext}`;

let audioEl: HTMLAudioElement | null = null;
let raf: number | null = null;
let usingFallback = false;

const stopRaf = () => {
  if (raf !== null) {
    cancelAnimationFrame(raf);
    raf = null;
  }
};

/** Has a pre-generated clip for this step (so the gender toggle is meaningful)? */
export async function hasGeneratedAudio(o: Pick<NarrationOpts, 'lessonId' | 'step' | 'lang' | 'gender'>): Promise<boolean> {
  try {
    const res = await fetch(clipUrl(o, 'json'), { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function playNarration(o: NarrationOpts): Promise<void> {
  cancelNarration();

  let timing: Timing | null = null;
  try {
    const res = await fetch(clipUrl(o, 'json'));
    if (res.ok) timing = (await res.json()) as Timing;
  } catch {
    /* offline or 404 — fall back below */
  }

  if (!timing) {
    usingFallback = true;
    webSpeak(o.text, {
      voice: o.voice,
      lang: o.langCode,
      rate: o.rate,
      onStart: o.onStart,
      onEnd: o.onEnd,
      onError: o.onError,
      onProgress: o.onProgress,
    });
    return;
  }

  usingFallback = false;
  const total = o.text.length;
  const words = timing.words;
  // elapsed audio time -> character index in the narration text (interpolated
  // between the two surrounding word boundaries for smooth subtitle motion)
  const charAt = (tt: number): number => {
    if (!words.length) return Math.floor((tt / (timing!.dur || 1)) * total);
    let lo = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].t <= tt) lo = i;
      else break;
    }
    const cur = words[lo];
    const nxt = words[lo + 1];
    if (!nxt) return Math.min(total, cur.c + 12);
    const frac = (tt - cur.t) / Math.max(0.001, nxt.t - cur.t);
    return Math.min(total, Math.round(cur.c + frac * (nxt.c - cur.c)));
  };

  const audio = new Audio(clipUrl(o, 'mp3'));
  audio.playbackRate = o.rate;
  audioEl = audio;

  const tick = () => {
    if (!audioEl) return;
    const dur = audioEl.duration || timing!.dur || 1;
    o.onProgress?.(Math.min(1, audioEl.currentTime / dur), charAt(audioEl.currentTime));
    raf = requestAnimationFrame(tick);
  };

  audio.onplay = () => {
    o.onStart?.();
    stopRaf();
    raf = requestAnimationFrame(tick);
  };
  audio.onended = () => {
    stopRaf();
    o.onProgress?.(1, total);
    o.onEnd?.();
  };
  audio.onerror = () => {
    stopRaf();
    o.onError?.();
  };

  try {
    await audio.play();
  } catch {
    // autoplay blocked (no prior gesture) — surface as an error so the UI resets
    o.onError?.();
  }
}

export function pauseNarration(): void {
  if (usingFallback) {
    pauseSpeech();
    return;
  }
  if (audioEl) {
    audioEl.pause();
    stopRaf();
  }
}

export function resumeNarration(): void {
  if (usingFallback) {
    resumeSpeech();
    return;
  }
  if (audioEl) {
    void audioEl.play();
  }
}

export function setNarrationRate(rate: number): void {
  if (audioEl) audioEl.playbackRate = rate;
}

export function cancelNarration(): void {
  stopRaf();
  if (audioEl) {
    audioEl.pause();
    audioEl.onplay = audioEl.onended = audioEl.onerror = null;
    audioEl.src = '';
    audioEl = null;
  }
  cancelSpeech();
  usingFallback = false;
}
