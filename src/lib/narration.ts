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
  /** autoplay was blocked (no prior user gesture) — distinct from a decode/network failure */
  onBlocked?: () => void;
  /** which engine actually drove this step: a pre-generated clip, or the Web Speech fallback */
  onEngine?: (engine: 'audio' | 'speech') => void;
  onProgress?: (progress: number, charIndex: number) => void;
}

const BASE = import.meta.env.BASE_URL; // ends with '/'
const clipUrl = (o: Pick<NarrationOpts, 'lessonId' | 'step' | 'lang' | 'gender'>, ext: string) =>
  `${BASE}audio/${o.lessonId}/s${o.step}.${o.lang}.${o.gender}.${ext}`;

let audioEl: HTMLAudioElement | null = null;
let raf: number | null = null;
let usingFallback = false;
// bumped every time playback is (re)started or cancelled. A playNarration call
// captures the value at entry; if it changes while the call is awaiting its
// fetch, the call bails instead of starting stale audio over the top of a
// newer step (that race was the rapid-navigation double-audio / desync bug).
let generation = 0;

const stopRaf = () => {
  if (raf !== null) {
    cancelAnimationFrame(raf);
    raf = null;
  }
};

/** Stop whatever is playing right now, WITHOUT invalidating in-flight calls. */
function stopCurrent(): void {
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
  const myGen = ++generation; // claim this generation and supersede any prior call
  stopCurrent();

  let timing: Timing | null = null;
  try {
    const res = await fetch(clipUrl(o, 'json'));
    if (myGen !== generation) return; // a newer step started while we were fetching
    if (res.ok) timing = (await res.json()) as Timing;
  } catch {
    /* offline or 404 — fall back below */
  }
  if (myGen !== generation) return; // superseded during the await

  const fallback = () => {
    usingFallback = true;
    o.onEngine?.('speech');
    webSpeak(o.text, {
      voice: o.voice,
      lang: o.langCode,
      rate: o.rate,
      onStart: () => { if (myGen === generation) o.onStart?.(); },
      onEnd: () => { if (myGen === generation) o.onEnd?.(); },
      onError: () => { if (myGen === generation) o.onError?.(); },
      onProgress: (p, ci) => { if (myGen === generation) o.onProgress?.(p, ci); },
    });
  };

  if (!timing) {
    fallback();
    return;
  }

  usingFallback = false;
  o.onEngine?.('audio');
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

  const audio = new Audio(clipUrl(o, 'webm'));
  audio.playbackRate = o.rate;
  audioEl = audio;

  const tick = () => {
    if (!audioEl) return;
    const dur = audioEl.duration || timing!.dur || 1;
    o.onProgress?.(Math.min(1, audioEl.currentTime / dur), charAt(audioEl.currentTime));
    raf = requestAnimationFrame(tick);
  };

  audio.onplay = () => {
    if (myGen !== generation) return;
    o.onStart?.();
    stopRaf();
    raf = requestAnimationFrame(tick);
  };
  audio.onended = () => {
    if (myGen !== generation) return;
    stopRaf();
    o.onProgress?.(1, total);
    o.onEnd?.();
  };
  audio.onerror = () => {
    stopRaf();
    // a device that can't decode WebM/Opus (e.g. very old iOS) — use the
    // browser's own voice instead of leaving the learner with silence
    if (audioEl === audio && myGen === generation) {
      audioEl = null;
      fallback();
    }
  };

  try {
    await audio.play();
  } catch {
    // autoplay blocked (no prior gesture) — prompt the learner to press play,
    // distinct from a genuine decode/network failure
    if (myGen === generation) o.onBlocked?.();
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
  generation++; // invalidate any in-flight playNarration so it won't start audio
  stopCurrent();
}
