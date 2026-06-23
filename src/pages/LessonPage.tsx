import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StageControls from '../components/StageControls';
import Stage from '../components/Stage';
import { useLanguage } from '../context/LanguageContext';
import { ROLES, getLesson, lessonTagFor, stepTagFor, MODULES } from '../data/catalog';
import type { RoleId } from '../data/types';
import {
  cancelSpeech,
  getVoices,
  onVoicesChanged,
  pauseSpeech,
  pickVoiceForLanguage,
  resumeSpeech,
  speak,
  ttsSupported,
} from '../lib/tts';
import { getLessonProgress, saveLessonStep } from '../lib/progress';

export default function LessonPage() {
  const { role, moduleId, lessonId } = useParams();
  const { lang, meta, t } = useLanguage();

  const lesson = lessonId ? getLesson(lessonId) : undefined;
  const module = MODULES.find((m) => m.id === moduleId);

  // ---- state ----
  const [step, setStep] = useState(() => {
    if (!lesson) return 0;
    const saved = getLessonProgress(lesson.id);
    return saved && !saved.completed ? Math.min(saved.lastStep, lesson.layouts.length - 1) : 0;
  });
  const [playKey, setPlayKey] = useState(0); // bumps to (re)start showcase tour
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [progress, setProgress] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [statusOverride, setStatusOverride] = useState<string | null>(null);
  const [voiceTick, setVoiceTick] = useState(0); // re-render when system voices load
  const [voiceName, setVoiceName] = useState<string | null>(null);

  const autoAdvanceRef = useRef(autoAdvance);
  autoAdvanceRef.current = autoAdvance;
  const rateRef = useRef(rate);
  rateRef.current = rate;
  const stepRef = useRef(step);
  stepRef.current = step;

  const content = lesson?.content[lang];
  const totalSteps = content?.steps.length ?? 0;

  // ---- voices ----
  const voicePick = useMemo(() => pickVoiceForLanguage(meta.langCode), [meta.langCode, voiceTick]);
  useEffect(() => onVoicesChanged(() => setVoiceTick((n) => n + 1)), []);
  useEffect(() => {
    setVoiceName(voicePick.best?.name ?? null);
  }, [voicePick]);

  const currentVoice = useMemo(
    () => getVoices().find((v) => v.name === voiceName) ?? voicePick.best,
    [voiceName, voicePick, voiceTick],
  );

  // ---- speech ----
  const speakStep = useCallback(
    (index: number) => {
      if (!lesson || !ttsSupported()) return;
      const text = lesson.content[lang].steps[index]?.voice;
      if (!text) return;
      setProgress(0);
      setCharIndex(0);
      setStatusOverride(null);
      if (lesson.layouts[index]?.mode === 'showcase') setPlayKey((k) => k + 1);
      speak(text, {
        voice: currentVoice ?? null,
        lang: meta.langCode,
        rate: rateRef.current,
        onStart: () => {
          setSpeaking(true);
          setPaused(false);
        },
        onProgress: (p, ci) => {
          setProgress(p);
          setCharIndex(ci);
        },
        onEnd: () => {
          setSpeaking(false);
          setPaused(false);
          if (autoAdvanceRef.current && stepRef.current === index) {
            if (index < lesson.layouts.length - 1) {
              setTimeout(() => {
                // user may have navigated during the pause
                if (stepRef.current === index) {
                  setStep(index + 1);
                  speakStep(index + 1);
                }
              }, 800);
            } else {
              setStatusOverride(t('statusComplete'));
            }
          }
        },
        onError: () => {
          setSpeaking(false);
          setPaused(false);
          setStatusOverride('Voice unavailable');
        },
      });
    },
    [lesson, lang, currentVoice, meta.langCode, t],
  );

  const stopAll = useCallback(() => {
    cancelSpeech();
    setSpeaking(false);
    setPaused(false);
  }, []);

  // stop speech on unmount / language change
  useEffect(() => stopAll, [stopAll]);
  useEffect(() => {
    stopAll();
    setProgress(0);
    setCharIndex(0);
  }, [lang, stopAll]);

  // persist progress
  useEffect(() => {
    if (lesson) saveLessonStep(lesson.id, step, lesson.layouts.length);
  }, [lesson, step]);

  // keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === ' ') {
        e.preventDefault();
        handlePlayPause();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  if (!lesson || !content || !module || !role || !ROLES.includes(role as RoleId)) {
    return <Navigate to="/" replace />;
  }

  const stepData = content.steps[step];
  const layout = lesson.layouts[step];
  const isLast = step === totalSteps - 1;
  const lessonTag = lessonTagFor(module, lesson.lessonNumber);
  const stepTag = stepTagFor(lessonTag, step);

  function goTo(index: number, andSpeak: boolean) {
    stopAll();
    setProgress(0);
    setCharIndex(0);
    setStatusOverride(null);
    setStep(index);
    if (andSpeak) setTimeout(() => speakStep(index), 300);
  }

  function goPrev() {
    if (stepRef.current > 0) goTo(stepRef.current - 1, speaking || autoAdvanceRef.current);
  }

  function goNext() {
    const next = stepRef.current === totalSteps - 1 ? 0 : stepRef.current + 1;
    goTo(next, autoAdvanceRef.current);
  }

  function handlePlayPause() {
    if (speaking && !paused) {
      pauseSpeech();
      setPaused(true);
    } else if (paused) {
      resumeSpeech();
      setPaused(false);
    } else {
      speakStep(stepRef.current);
    }
  }

  const statusText =
    statusOverride ??
    (paused
      ? t('statusPaused')
      : speaking
        ? `${t('statusSpeaking')} · ${t('stepWord')} ${step + 1}`
        : voicePick.fellBack
          ? t('statusFallback')
          : t('statusReady'));

  return (
    <div className="page">
      <div className="container">
        <Header
          meta={
            <div className="header-meta">
              <div>
                <span className="label">{t('moduleWord').toUpperCase()} {String(module.number).padStart(2, '0')}</span>{' '}
                · {module.name[lang]} <span className="tag-chip">{lessonTag}</span>
              </div>
              <div style={{ marginTop: 4 }}>
                <Link to={`/${role}`} className="header-link">
                  {t('backToPath')}
                </Link>
              </div>
            </div>
          }
        />

        <div className="title-block">
          <div className="eyebrow">{content.chapter}</div>
          <h1 className="lesson-title" dangerouslySetInnerHTML={{ __html: content.title }} />
          <p className="lesson-subtitle">{content.subtitle}</p>
        </div>

        <div className="progress-meta">
          <span>
            {t('stepWord')} {step + 1} — {stepData.label}
          </span>
          <span>
            {String(step + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
          </span>
        </div>
        <div className="progress-rail">
          <div className="progress-fill" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
        </div>

        <Stage
          lesson={lesson}
          layout={layout}
          caption={layout.caption}
          playKey={playKey}
          speaking={speaking && !paused}
          progress={progress}
          charIndex={charIndex}
          subtitleText={stepData.voice}
          subtitlesOn={subtitlesOn}
          controls={
            <StageControls
              speaking={speaking && !paused}
              isPlaying={speaking && !paused}
              statusText={statusText}
              progress={progress}
              onPlayPause={handlePlayPause}
              onReplay={() => speakStep(step)}
              onPrev={goPrev}
              onNext={goNext}
              canPrev={step > 0}
              voices={voicePick.voices}
              selectedVoiceName={voiceName}
              onVoiceChange={(name) => {
                setVoiceName(name);
                if (speaking) {
                  stopAll();
                  setTimeout(() => speakStep(stepRef.current), 200);
                }
              }}
              rate={rate}
              onRateChange={(r) => {
                setRate(r);
                if (speaking) {
                  stopAll();
                  setTimeout(() => speakStep(stepRef.current), 200);
                }
              }}
              subtitlesOn={subtitlesOn}
              onSubtitlesToggle={() => setSubtitlesOn((s) => !s)}
              autoAdvance={autoAdvance}
              onAutoAdvanceToggle={() => setAutoAdvance((a) => !a)}
            />
          }
        />

        <div className="narration">
          <span className="narration-label">{t('narration')} · {stepTag}</span>
          <div className="narration-step">
            <div className="step-number">{step + 1}</div>
            <div className="step-divider" />
            <div className="narration-title">{stepData.title}</div>
          </div>
          <div className="narration-body" dangerouslySetInnerHTML={{ __html: stepData.body }} />
          {stepData.tip && (
            <div className="narration-tip">
              <strong>{t(stepData.tip.type)}</strong>
              {stepData.tip.text}
            </div>
          )}
        </div>

        <div className="player-controls">
          <button className="btn btn-prev" disabled={step === 0} onClick={goPrev}>
            {t('prev')}
          </button>
          <div className="step-pips">
            {content.steps.map((_, i) => (
              <button
                key={i}
                className={`pip${i === step ? ' active' : ''}`}
                onClick={() => goTo(i, autoAdvance)}
                aria-label={`${t('stepWord')} ${i + 1}`}
              />
            ))}
          </div>
          <button className="btn btn-next" onClick={goNext}>
            {isLast ? t('restart') : t('next')}
          </button>
        </div>

        {isLast && (
          <div className="next-lesson-banner">
            <div>
              <div className="nl-eyebrow">{t('upNextLabel')}</div>
              <div className="nl-title">{t('comingSoonHint')}</div>
            </div>
            <Link to={`/${role}`}>
              <button className="lesson-cta">{t('backToPath').replace('← ', '')} →</button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
