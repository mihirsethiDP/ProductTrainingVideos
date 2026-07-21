import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StageControls from '../components/StageControls';
import Stage from '../components/Stage';
import LessonFallback from '../components/LessonFallback';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { demoVideoUrl, demoVideoDownloadUrl } from '../lib/supabase';
import { ROLES, getLesson, lessonTagFor, stepTagFor, MODULES, modulesForRole } from '../data/catalog';
import { moduleLessons } from '../lib/completion';
import type { RoleId } from '../data/types';
import { onVoicesChanged, pickVoiceForLanguage } from '../lib/tts';
import {
  cancelNarration,
  pauseNarration,
  playNarration,
  resumeNarration,
  setNarrationRate,
  type Gender,
} from '../lib/narration';
import { getLessonProgress, saveLessonStep } from '../lib/progress';

export default function LessonPage() {
  const { role, moduleId, lessonId } = useParams();
  const { lang, meta, t } = useLanguage();
  const { assignedRole } = useAuth();
  const navigate = useNavigate();

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
  const [narrationFellBack, setNarrationFellBack] = useState(false); // this step is on the Web-Speech fallback
  const [voiceTick, setVoiceTick] = useState(0); // re-render when system voices load
  // the sticky bottom nav only floats once the on-video controls scroll away,
  // so it never overlaps the player's own play/voice controls
  const [videoControlsVisible, setVideoControlsVisible] = useState(true);
  const [gender, setGender] = useState<Gender>('f');
  const genderRef = useRef(gender);
  genderRef.current = gender;

  const autoAdvanceRef = useRef(autoAdvance);
  autoAdvanceRef.current = autoAdvance;
  const rateRef = useRef(rate);
  rateRef.current = rate;
  const stepRef = useRef(step);
  stepRef.current = step;

  // the single pending "speak this step" / "auto-advance" timer. Tracked so a
  // navigation (or leaving the lesson) cancels it — otherwise a stale timer
  // fires speakStep for the wrong step, or keeps audio going after unmount.
  const speakTimerRef = useRef<number | null>(null);
  const clearSpeakTimer = useCallback(() => {
    if (speakTimerRef.current !== null) {
      window.clearTimeout(speakTimerRef.current);
      speakTimerRef.current = null;
    }
  }, []);

  const content = lesson?.content[lang];
  const totalSteps = content?.steps.length ?? 0;

  // ---- voices ----
  // voice pick is now only the *fallback* (Web Speech) voice, used for any
  // step whose edge-tts clip hasn't been generated yet. Try to honor the
  // chosen gender for the fallback when a matching system voice exists.
  const voicePick = useMemo(() => pickVoiceForLanguage(meta.langCode), [meta.langCode, voiceTick]);
  useEffect(() => onVoicesChanged(() => setVoiceTick((n) => n + 1)), []);

  // watch whether the on-video control bar is on screen; the sticky nav floats
  // only when it isn't (i.e. once the viewer has scrolled into the narration)
  useEffect(() => {
    const el = document.querySelector('.stage-controls');
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVideoControlsVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [lessonId]);

  // personalized demos may have a downloadable MP4 rendering (public bucket,
  // works for zero-auth clients too) — show the button only if it exists
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  useEffect(() => {
    setDownloadUrl(null);
    if (moduleId !== 'module-demos' || !lessonId) return;
    let stale = false;
    // probe the plain object; link the ?download variant (forces attachment)
    fetch(demoVideoUrl(lessonId), { method: 'HEAD' })
      .then((res) => {
        if (!stale && res.ok) setDownloadUrl(demoVideoDownloadUrl(lessonId));
      })
      .catch(() => {
        /* no rendering available */
      });
    return () => {
      stale = true;
    };
  }, [moduleId, lessonId]);

  const currentVoice = useMemo(() => {
    const wantMale = gender === 'm';
    const match = voicePick.voices.find((v) =>
      wantMale ? /male|madhur|prabhat|valluvar|manohar|guy|christopher|eric/i.test(v.name) : !/male/i.test(v.name),
    );
    return match ?? voicePick.best;
  }, [voicePick, gender, voiceTick]);

  // ---- speech ----
  const speakStep = useCallback(
    (index: number) => {
      if (!lesson) return;
      const text = lesson.content[lang].steps[index]?.voice;
      if (!text) return;
      setProgress(0);
      setCharIndex(0);
      setStatusOverride(null);
      setNarrationFellBack(false);
      if (lesson.layouts[index]?.mode === 'showcase') setPlayKey((k) => k + 1);
      void playNarration({
        lessonId: lesson.id,
        step: index,
        lang,
        gender: genderRef.current,
        text,
        voice: currentVoice ?? null,
        langCode: meta.langCode,
        rate: rateRef.current,
        onEngine: (engine) => setNarrationFellBack(engine === 'speech'),
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
              clearSpeakTimer();
              speakTimerRef.current = window.setTimeout(() => {
                speakTimerRef.current = null;
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
        onBlocked: () => {
          // autoplay was blocked (no gesture yet) — invite the tap, don't error
          setSpeaking(false);
          setPaused(false);
          setStatusOverride(t('statusPressPlay'));
        },
        onError: () => {
          setSpeaking(false);
          setPaused(false);
          setStatusOverride(t('voiceUnavailable'));
        },
      });
    },
    [lesson, lang, currentVoice, meta.langCode, t, clearSpeakTimer],
  );

  const stopAll = useCallback(() => {
    clearSpeakTimer();
    cancelNarration();
    setSpeaking(false);
    setPaused(false);
  }, [clearSpeakTimer]);

  // stop speech on unmount / language change
  useEffect(() => stopAll, [stopAll]);
  useEffect(() => {
    stopAll();
    setProgress(0);
    setCharIndex(0);
  }, [lang, stopAll]);

  // reset when switching lessons (e.g. flipping the Read ⇄ Configure toggle)
  useEffect(() => {
    stopAll();
    const l = lessonId ? getLesson(lessonId) : undefined;
    const saved = l ? getLessonProgress(l.id) : undefined;
    setStep(saved && !saved.completed ? Math.min(saved.lastStep, l!.layouts.length - 1) : 0);
    setProgress(0);
    setCharIndex(0);
    setStatusOverride(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId]);

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

  // structurally bad routes (unknown role / no module) still bounce home…
  if (!module || !role || !ROLES.includes(role as RoleId)) {
    return <Navigate to="/" replace />;
  }
  // …but a well-formed route whose lesson id isn't in THIS bundle gets a real
  // recovery screen instead of a silent bounce: the tab may simply predate the
  // deploy that shipped the lesson (CSM's "Ready → Open → dumped home" bug).
  // The membership check (lesson exists but not in THIS module) also closes the
  // zero-auth bypass: module-demos/module-shorts skip the login wall, so without
  // it a signed-out visitor could watch any gated lesson via
  // #/…/module-demos/<gated-lesson-id>. A genuinely-missing (just-published)
  // demo id still lands here and triggers the stale-bundle reload.
  if (!lesson || !content || lesson.moduleId !== moduleId) {
    return <LessonFallback kind="missing" isDemo={moduleId === 'module-demos'} />;
  }
  // personalized demos live for 30 days; past that, show a clear notice.
  // Expire at END of the stamped local day (a bare 'YYYY-MM-DD' would parse as
  // UTC midnight → the demo would die mid-morning in IST on its last day).
  if (lesson.expiresAt && Date.now() > new Date(`${lesson.expiresAt}T23:59:59`).getTime()) {
    return <LessonFallback kind="expired" isDemo={moduleId === 'module-demos'} />;
  }
  // invited users are locked to their assigned path. Hidden modules (demos,
  // shorts — roles: []) aren't part of any path, so they stay reachable.
  if (assignedRole && role !== assignedRole && module.roles.length > 0) {
    return <Navigate to={`/${assignedRole}`} replace />;
  }
  // a lesson can narrow visibility below its module (e.g. an internal-only lesson
  // inside an all-roles module). An invited user off that lesson's list bounces home.
  const lessonRef = module.lessons.find((l) => l.id === lesson.id);
  if (assignedRole && lessonRef?.roles && !lessonRef.roles.includes(assignedRole)) {
    return <Navigate to={`/${assignedRole}`} replace />;
  }

  // clamp for the single render right after a lesson switch, before the reset effect runs
  const safeStep = Math.max(0, Math.min(step, totalSteps - 1));
  const stepData = content.steps[safeStep];
  const layout = lesson.layouts[safeStep];
  const isLast = safeStep === totalSteps - 1;

  // Read ⇄ Configure track toggle (internal only): widget lessons in M2 have a
  // paired "<id>-config" configuration helper.
  const isConfig = lessonId!.endsWith('-config');
  // the config track shares its base lesson's number, so mark it with a ·C
  // suffix — otherwise both tracks show the identical tag (e.g. M2.L1)
  const lessonTag = `${lessonTagFor(module, lesson.lessonNumber)}${isConfig ? '·C' : ''}`;
  const stepTag = stepTagFor(lessonTag, safeStep);
  const baseId = isConfig ? lessonId!.replace(/-config$/, '') : lessonId!;
  const configId = `${baseId}-config`;
  const hasConfig = !!getLesson(configId);
  const showTrackToggle = role === 'internal' && hasConfig;
  const goToTrack = (toConfig: boolean) => {
    const target = toConfig ? configId : baseId;
    if (target !== lessonId) navigate(`/${role}/${moduleId}/${target}`);
  };

  // the real, role-visible lesson that comes after this one — next within the
  // module, else the first lesson of the next module in this role's order. Demo
  // and shorts modules (roles: []) stand alone, so they have no "next".
  const nextLesson = (() => {
    const roleId = role as RoleId;
    if (module.roles.length === 0) return null;
    const within = moduleLessons(module, roleId);
    const idx = within.indexOf(lesson.id);
    if (idx >= 0 && idx < within.length - 1) {
      return { moduleId: module.id, id: within[idx + 1] };
    }
    const roleModules = modulesForRole(roleId);
    const mIdx = roleModules.findIndex((m) => m.id === module.id);
    for (let i = mIdx + 1; i < roleModules.length; i++) {
      const ls = moduleLessons(roleModules[i], roleId);
      if (ls.length) return { moduleId: roleModules[i].id, id: ls[0] };
    }
    return null;
  })();
  const nextLessonTitle = nextLesson
    ? (getLesson(nextLesson.id)?.content[lang].title ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
    : '';

  function goTo(index: number, andSpeak: boolean) {
    stopAll(); // also clears any pending speak/advance timer
    setProgress(0);
    setCharIndex(0);
    setStatusOverride(null);
    setStep(index);
    if (andSpeak) {
      speakTimerRef.current = window.setTimeout(() => {
        speakTimerRef.current = null;
        if (stepRef.current === index) speakStep(index);
      }, 300);
    }
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
      pauseNarration();
      setPaused(true);
    } else if (paused) {
      resumeNarration();
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
        ? // only the true "no localized voice at all, using English" case warrants
          // the fallback notice: this step ran on Web Speech (narrationFellBack)
          // AND there is no native voice for the language (voicePick.fellBack).
          // A step on Web Speech WITH a native voice is just normal narration.
          narrationFellBack && voicePick.fellBack
          ? t('statusFallback')
          : `${t('statusSpeaking')} · ${t('stepWord')} ${step + 1}`
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
              {/* demos & shorts (roles: []) belong to no path — for clients on a
                  zero-auth share link, "Back to path" would only hit the sign-in wall */}
              {module.roles.length > 0 && (
                <div style={{ marginTop: 4 }}>
                  <Link to={`/${role}`} className="header-link">
                    {t('backToPath')}
                  </Link>
                </div>
              )}
            </div>
          }
        />

        <div className="title-block">
          <div className="eyebrow">{content.chapter}</div>
          <h1 className="lesson-title" dangerouslySetInnerHTML={{ __html: content.title }} />
          <p className="lesson-subtitle">{content.subtitle}</p>
          {downloadUrl && (
            <a className="demo-download" href={downloadUrl} download>
              ⬇ {t('downloadVideo')}
            </a>
          )}
          {showTrackToggle && (
            <div className="track-toggle" role="tablist" aria-label="Track">
              <button
                role="tab"
                aria-selected={!isConfig}
                className={`track-seg${!isConfig ? ' active' : ''}`}
                onClick={() => goToTrack(false)}
              >
                ▶ {t('trackRead')}
              </button>
              <button
                role="tab"
                aria-selected={isConfig}
                className={`track-seg${isConfig ? ' active' : ''}`}
                onClick={() => goToTrack(true)}
              >
                ⚙ {t('trackConfigure')}
              </button>
            </div>
          )}
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
          paused={paused}
          progress={progress}
          charIndex={charIndex}
          subtitleText={stepData.voice}
          subtitlesOn={subtitlesOn}
          controls={
            <StageControls
              speaking={speaking && !paused}
              isPlaying={speaking && !paused}
              isLast={isLast}
              statusText={statusText}
              progress={progress}
              onPlayPause={handlePlayPause}
              onReplay={() => speakStep(step)}
              onPrev={goPrev}
              onNext={goNext}
              canPrev={step > 0}
              gender={gender}
              onGenderChange={(g) => {
                setGender(g);
                genderRef.current = g;
                if (speaking) {
                  const at = stepRef.current;
                  stopAll(); // clears any pending timer + cancels narration
                  speakTimerRef.current = window.setTimeout(() => {
                    speakTimerRef.current = null;
                    if (stepRef.current === at) speakStep(at);
                  }, 200);
                }
              }}
              rate={rate}
              onRateChange={(r) => {
                setRate(r);
                rateRef.current = r;
                setNarrationRate(r); // live for audio; fallback picks it up next step
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

        <div className={`player-controls${videoControlsVisible ? ' with-video' : ''}`}>
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
            {nextLesson ? (
              <>
                <div>
                  <div className="nl-eyebrow">{t('upNextLabel')}</div>
                  <div className="nl-title" dangerouslySetInnerHTML={{ __html: nextLessonTitle }} />
                </div>
                <Link to={`/${role}/${nextLesson.moduleId}/${nextLesson.id}`}>
                  <button className="lesson-cta">{t('nextLesson')} →</button>
                </Link>
              </>
            ) : module.roles.length === 0 ? (
              // demos & shorts: a client on a share link has no "path" to go
              // back to — offer a replay (and the video download when it exists)
              <>
                <div>
                  <div className="nl-eyebrow">{t('demoComplete')}</div>
                  <div className="nl-title" dangerouslySetInnerHTML={{ __html: content.title }} />
                </div>
                <div className="nl-actions">
                  {downloadUrl && (
                    <a className="demo-download" href={downloadUrl} download>
                      ⬇ {t('downloadVideo')}
                    </a>
                  )}
                  <button className="lesson-cta" onClick={() => goTo(0, true)}>
                    ↻ {t('watchAgain')}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className="nl-eyebrow">{t('upNextLabel')}</div>
                  <div className="nl-title">{t('comingSoonHint')}</div>
                </div>
                <Link to={`/${role}`}>
                  <button className="lesson-cta">{t('backToPath').replace('← ', '')} →</button>
                </Link>
              </>
            )}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
