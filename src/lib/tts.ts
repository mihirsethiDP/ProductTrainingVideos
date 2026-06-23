/**
 * Thin wrapper around the Web Speech API.
 * Reports word-boundary progress so the UI can sync subtitles and the
 * guide cursor to the narration. Designed to be swapped for an
 * ElevenLabs <audio> player later without touching component logic.
 */

// Per-language wish-list, best first. The newer Microsoft "Online (Natural)"
// neural voices and Google's network voices sound dramatically warmer than the
// default local ones, so they're listed first and also boosted in scoreVoice().
export const preferredVoiceNames: Record<string, string[]> = {
  'en-US': [
    'Microsoft Aria Online (Natural)', 'Microsoft Jenny Online (Natural)', 'Microsoft Ava',
    'Microsoft Emma', 'Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Samantha', 'Karen',
  ],
  'hi-IN': [
    'Microsoft Swara Online (Natural)', 'Microsoft Ananya Online (Natural)', 'Microsoft Kavya',
    'Google हिन्दी', 'Microsoft Swara', 'Microsoft Madhur', 'Lekha',
  ],
  'ta-IN': [
    'Microsoft Pallavi Online (Natural)', 'Microsoft Pallavi', 'Google தமிழ்', 'Microsoft Valluvar',
  ],
  'mr-IN': [
    'Microsoft Aarohi Online (Natural)', 'Microsoft Aarohi', 'Microsoft Manohar',
  ],
};

// Higher score = better-sounding. Used to auto-pick the nicest available voice
// and to sort the picker so the best options sit at the top.
export function scoreVoice(v: SpeechSynthesisVoice, langCode: string): number {
  let score = 0;
  const name = v.name.toLowerCase();
  const preferred = preferredVoiceNames[langCode] ?? [];
  const idx = preferred.findIndex((p) => v.name.includes(p));
  if (idx >= 0) score += 1000 - idx * 10; // exact wish-list match, best first
  if (/natural|neural/.test(name)) score += 400; // neural voices — the delightful ones
  if (name.includes('online')) score += 200;
  if (name.includes('google')) score += 150;
  if (v.lang.toLowerCase() === langCode.toLowerCase()) score += 60; // exact locale
  if (/female|aria|jenny|ava|emma|swara|ananya|kavya|pallavi|aarohi|samantha|lekha|heera|kalpana/i.test(name)) score += 40;
  if (v.localService) score += 5; // tiebreaker: local voices start instantly
  return score;
}

export interface SpeakOptions {
  voice: SpeechSynthesisVoice | null;
  lang: string;
  rate: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: () => void;
  /** progress: 0..1 fraction of characters spoken; charIndex into the text */
  onProgress?: (progress: number, charIndex: number) => void;
}

let voicesCache: SpeechSynthesisVoice[] = [];
const voiceListeners = new Set<(v: SpeechSynthesisVoice[]) => void>();

function refreshVoices() {
  voicesCache = window.speechSynthesis?.getVoices() ?? [];
  voiceListeners.forEach((fn) => fn(voicesCache));
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = refreshVoices;
  refreshVoices();
}

export function getVoices(): SpeechSynthesisVoice[] {
  if (voicesCache.length === 0) refreshVoices();
  return voicesCache;
}

export function onVoicesChanged(fn: (v: SpeechSynthesisVoice[]) => void): () => void {
  voiceListeners.add(fn);
  return () => voiceListeners.delete(fn);
}

export interface VoicePick {
  voices: SpeechSynthesisVoice[]; // voices for this language (or English fallback)
  best: SpeechSynthesisVoice | null;
  fellBack: boolean; // true when no native voice existed and English was used
}

export function pickVoiceForLanguage(langCode: string): VoicePick {
  const all = getVoices();
  const prefix = langCode.split('-')[0];
  let langVoices = all.filter((v) => v.lang.startsWith(prefix));
  let fellBack = false;
  if (langVoices.length === 0) {
    langVoices = all.filter((v) => v.lang.startsWith('en'));
    fellBack = prefix !== 'en';
  }
  // sort the language's voices by quality so the picker shows the best first
  const sorted = [...langVoices].sort((a, b) => scoreVoice(b, langCode) - scoreVoice(a, langCode));
  const best = sorted[0] ?? null;
  return { voices: sorted, best, fellBack };
}

let keepAliveTimer: number | null = null;

/** Chrome stops long utterances after ~15s of network TTS; periodic resume keeps it alive. */
function startKeepAlive() {
  stopKeepAlive();
  keepAliveTimer = window.setInterval(() => {
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      synth.resume();
    }
  }, 10000);
}

function stopKeepAlive() {
  if (keepAliveTimer !== null) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

export function speak(text: string, opts: SpeakOptions): void {
  cancelSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  if (opts.voice) utterance.voice = opts.voice;
  utterance.lang = opts.lang;
  utterance.rate = opts.rate;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  const total = text.length;
  let boundaryFired = false;
  let estimator: number | null = null;

  const clearEstimator = () => {
    if (estimator !== null) {
      clearInterval(estimator);
      estimator = null;
    }
  };

  utterance.onstart = () => {
    opts.onStart?.();
    startKeepAlive();
    // Fallback progress estimator for voices that never fire boundary events
    // (e.g. Chrome's Google network voices). Indic scripts pack more speech
    // per character than Latin, so they advance slower. A small lead is added
    // so subtitles err on the side of early rather than late.
    const charsPerSec = /[ऀ-ൿ]/.test(text) ? 10.5 : 15;
    const leadSec = 0.4;
    const startedAt = performance.now();
    estimator = window.setInterval(() => {
      if (boundaryFired) {
        clearEstimator();
        return;
      }
      const elapsed = (performance.now() - startedAt) / 1000 + leadSec;
      const estChars = Math.min(total, elapsed * charsPerSec * opts.rate);
      opts.onProgress?.(estChars / total, Math.floor(estChars));
    }, 200);
  };

  utterance.onboundary = (e) => {
    boundaryFired = true;
    opts.onProgress?.(Math.min(1, e.charIndex / total), e.charIndex);
  };

  utterance.onend = () => {
    clearEstimator();
    stopKeepAlive();
    opts.onProgress?.(1, total);
    opts.onEnd?.();
  };

  utterance.onerror = (e) => {
    clearEstimator();
    stopKeepAlive();
    // 'interrupted'/'canceled' are normal when the user navigates or replays.
    if (e.error === 'interrupted' || e.error === 'canceled') return;
    opts.onError?.();
  };

  window.speechSynthesis.speak(utterance);
}

export function pauseSpeech(): void {
  window.speechSynthesis.pause();
}

export function resumeSpeech(): void {
  window.speechSynthesis.resume();
}

export function cancelSpeech(): void {
  stopKeepAlive();
  const synth = window.speechSynthesis;
  if (synth && (synth.speaking || synth.pending || synth.paused)) {
    synth.cancel();
  }
}

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
