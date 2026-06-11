/**
 * Thin wrapper around the Web Speech API.
 * Reports word-boundary progress so the UI can sync subtitles and the
 * guide cursor to the narration. Designed to be swapped for an
 * ElevenLabs <audio> player later without touching component logic.
 */

export const preferredVoiceNames: Record<string, string[]> = {
  'en-US': ['Microsoft Aria', 'Microsoft Jenny', 'Google US English', 'Samantha', 'Karen'],
  'hi-IN': ['Microsoft Swara', 'Microsoft Madhur', 'Google हिन्दी', 'Lekha'],
  'ta-IN': ['Microsoft Pallavi', 'Microsoft Valluvar', 'Google தமிழ்'],
  'mr-IN': ['Microsoft Aarohi', 'Microsoft Manohar'],
};

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
  const preferred = preferredVoiceNames[langCode] ?? [];
  let best: SpeechSynthesisVoice | undefined;
  for (const pref of preferred) {
    best = langVoices.find((v) => v.name.includes(pref));
    if (best) break;
  }
  if (!best) {
    best = langVoices.find((v) =>
      /female|zira|samantha|aria|jenny|swara|madhur|pallavi|aarohi|lekha|heera|kalpana/i.test(v.name),
    );
  }
  if (!best) best = langVoices[0];
  return { voices: langVoices, best: best ?? null, fellBack };
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
  utterance.pitch = 1.05;
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
