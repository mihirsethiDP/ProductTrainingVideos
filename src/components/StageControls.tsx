import { useLanguage } from '../context/LanguageContext';

interface StageControlsProps {
  speaking: boolean;
  isPlaying: boolean;
  statusText: string;
  progress: number; // 0..1 narration progress for the current step
  onPlayPause: () => void;
  onReplay: () => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  voices: SpeechSynthesisVoice[];
  selectedVoiceName: string | null;
  onVoiceChange: (name: string) => void;
  rate: number;
  onRateChange: (rate: number) => void;
  subtitlesOn: boolean;
  onSubtitlesToggle: () => void;
  autoAdvance: boolean;
  onAutoAdvanceToggle: () => void;
}

const SPEEDS = [0.85, 1, 1.15, 1.3];

/** Video-player style control bar, docked to the bottom of the stage. */
export default function StageControls(props: StageControlsProps) {
  const { t } = useLanguage();
  return (
    <div className="stage-controls" data-tour="player-controls">
      <div className="sc-progress">
        <div className="sc-progress-fill" style={{ width: `${Math.round(props.progress * 100)}%` }} />
      </div>
      <div className="sc-row">
        <div className="sc-left">
          <button className="sc-btn sc-icon" onClick={props.onPrev} disabled={!props.canPrev} title={t('prev')} aria-label={t('prev')}>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="18,5 8,12 18,19" /><rect x="5" y="5" width="2.4" height="14" /></svg>
          </button>
          <button className="sc-btn sc-play" onClick={props.onPlayPause} title={t('playPause')} aria-label={t('playPause')}>
            {props.isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20" /></svg>
            )}
          </button>
          <button className="sc-btn sc-icon" onClick={props.onNext} title={t('next')} aria-label={t('next')}>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,5 16,12 6,19" /><rect x="16.6" y="5" width="2.4" height="14" /></svg>
          </button>
          <button className="sc-btn sc-icon" onClick={props.onReplay} title={t('replay')} aria-label={t('replay')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
          </button>
          <span className={`sc-status${props.speaking ? ' on' : ''}`}>
            <span className="sc-dot" />{props.statusText}
          </span>
        </div>

        <div className="sc-right">
          <div className="sc-speed" role="group" aria-label="Speed">
            {SPEEDS.map((s) => (
              <button key={s} className={`sc-speed-btn${props.rate === s ? ' active' : ''}`} onClick={() => props.onRateChange(s)}>
                {s}×
              </button>
            ))}
          </div>
          <button
            className={`sc-toggle${props.subtitlesOn ? ' active' : ''}`}
            onClick={props.onSubtitlesToggle}
            role="switch"
            aria-checked={props.subtitlesOn}
            title={t('subtitles')}
          >
            CC
          </button>
          <button
            className={`sc-toggle${props.autoAdvance ? ' active' : ''}`}
            onClick={props.onAutoAdvanceToggle}
            role="switch"
            aria-checked={props.autoAdvance}
            title={t('autoAdvance')}
          >
            ⏭ {t('autoAdvance')}
          </button>
          <select
            className="sc-voice"
            value={props.selectedVoiceName ?? ''}
            onChange={(e) => props.onVoiceChange(e.target.value)}
            title={t('voiceLabel')}
            aria-label={t('voiceLabel')}
          >
            {props.voices.length === 0 && <option value="">—</option>}
            {props.voices.map((v) => (
              <option key={v.name} value={v.name}>{v.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
