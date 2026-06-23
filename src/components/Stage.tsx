import { useEffect, useRef, useState } from 'react';
import type { Lesson, StepLayout } from '../data/types';
import { useLanguage } from '../context/LanguageContext';
import GuideCursor from './GuideCursor';
import SubtitleBar from './SubtitleBar';
import { WIDGETS } from './widgets';

interface StageProps {
  lesson: Lesson;
  layout: StepLayout;
  caption?: string;
  /** key that changes every time playback (re)starts, to restart the showcase tour */
  playKey: number;
  speaking: boolean;
  progress: number; // 0..1 narration progress
  charIndex: number;
  subtitleText: string;
  subtitlesOn: boolean;
}

const ANNOTATIONS = [
  { id: 1, top: '12%', labelKey: 'annoMapLabel', textKey: 'annoMap', show: 1500, hide: 4500 },
  { id: 2, top: '30%', labelKey: 'annoFlowLabel', textKey: 'annoFlow', show: 4800, hide: 8000 },
  { id: 3, top: '48%', labelKey: 'annoEnergyLabel', textKey: 'annoEnergy', show: 8200, hide: 11500 },
  { id: 4, top: '66%', labelKey: 'annoQualityLabel', textKey: 'annoQuality', show: 11700, hide: 14500 },
  { id: 5, top: '84%', labelKey: 'annoAerationLabel', textKey: 'annoAeration', show: 14700, hide: 17500 },
];

function Showcase({ lesson, playKey }: { lesson: Lesson; playKey: number }) {
  const { t } = useLanguage();
  const [shown, setShown] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (playKey === 0) return;
    setShown(new Set());
    const timers: number[] = [];
    ANNOTATIONS.forEach((a) => {
      timers.push(window.setTimeout(() => setShown((s) => new Set(s).add(a.id)), a.show));
      timers.push(
        window.setTimeout(() => {
          setShown((s) => {
            const next = new Set(s);
            next.delete(a.id);
            return next;
          });
        }, a.hide),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [playKey]);

  return (
    <div className="dashboard-showcase">
      {/* key remounts the viewport on each (re)play, restarting the CSS scroll animation */}
      <div className="showcase-viewport auto-scroll" key={playKey}>
        <div className="showcase-indicator">
          <span className="pulse-dot" />
          <span>Live · Auto-scroll</span>
        </div>
        {ANNOTATIONS.map((a) => (
          <div
            key={a.id}
            className={`showcase-annotation${shown.has(a.id) ? ' shown' : ''}`}
            style={{ top: a.top }}
          >
            <span className="label">{t(a.labelKey)}</span>
            <span>{t(a.textKey)}</span>
          </div>
        ))}
        <div className="showcase-scroller">
          <img src={lesson.screenshots.fullDashboard} alt="Full dashboard" />
        </div>
      </div>
      <div className="showcase-hint">
        <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        <span>{t('scrollHint')}</span>
      </div>
    </div>
  );
}

export default function Stage(props: StageProps) {
  const { lesson, layout, caption, speaking, progress, charIndex, subtitleText, subtitlesOn } = props;
  const [transitioning, setTransitioning] = useState(false);
  const lastSrcRef = useRef<string | undefined>(undefined);

  const src = layout.screenshot ? lesson.screenshots[layout.screenshot] : undefined;

  useEffect(() => {
    if (src && lastSrcRef.current && src !== lastSrcRef.current) {
      setTransitioning(true);
      const timer = setTimeout(() => setTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
    lastSrcRef.current = src;
  }, [src]);

  useEffect(() => {
    lastSrcRef.current = src;
  }, [src]);

  const showSubs = subtitlesOn && speaking;

  return (
    <div className="stage-wrap">
      <div className="stage-frame">
        <div className="browser-chrome">
          <div className="chrome-dots">
            <div className="chrome-dot" />
            <div className="chrome-dot" />
            <div className="chrome-dot" />
          </div>
          <div className="chrome-url">app.digitalpaani.com/dashboard</div>
        </div>

        {layout.mode === 'showcase' ? (
          <Showcase lesson={lesson} playKey={props.playKey} />
        ) : layout.mode === 'widget' ? (
          <div className="widget-stage-wrap">
            <div className={`widget-stage${
              ['advancedTable', 'graph', 'smartHours', 'scatter', 'sankey'].includes(layout.widget ?? '') ||
              (layout.widget === 'dataInput' && (layout.widgetState?.dataInput?.mode === 'table' || layout.widgetState?.dataInput?.mode === 'preview')) ||
              layout.widget === 'ocr' ||
              (layout.widget === 'inventory' && ['supTable', 'supLog', 'opCategories'].includes(layout.widgetState?.inventory?.mode ?? '')) ||
              (layout.widget === 'insights' && ['page', 'digest', 'detail'].includes(layout.widgetState?.insights?.mode ?? '')) ||
              (layout.widget === 'task' && layout.widgetState?.task?.mode === 'list') ||
              (layout.widget === 'comm' && layout.widgetState?.comm?.mode === 'list') ||
              layout.widget === 'workflow' ||
              layout.widget === 'visualization'
                ? ' widget-stage-wide'
                : ''
            }`}>
              {(() => {
                const Comp = layout.widget ? WIDGETS[layout.widget] : undefined;
                return Comp ? <Comp {...(layout.widgetState ?? {})} /> : null;
              })()}
              <GuideCursor keyframes={layout.cursor ?? []} progress={progress} active={speaking} />
            </div>
          </div>
        ) : (
          <div className="screenshot-container">
            <div className="screenshot-inner">
              <img
                className={`screenshot${transitioning ? ' transitioning' : ''}`}
                src={src}
                alt={caption ?? 'Product screenshot'}
              />
              <div
                className={`spotlight${layout.spotlight ? ' visible' : ''}`}
                style={
                  layout.spotlight
                    ? {
                        top: layout.spotlight.top,
                        left: layout.spotlight.left,
                        width: layout.spotlight.width,
                        height: layout.spotlight.height,
                      }
                    : undefined
                }
              />
              <GuideCursor keyframes={layout.cursor ?? []} progress={progress} active={speaking} />
            </div>
          </div>
        )}

        {caption && layout.mode !== 'showcase' && (
          <div className={`stage-caption visible${showSubs ? ' lifted' : ''}`}>{caption}</div>
        )}

        <SubtitleBar text={subtitleText} charIndex={charIndex} visible={showSubs} />
      </div>
    </div>
  );
}
