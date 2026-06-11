import { useLanguage } from '../context/LanguageContext';

interface VoicePanelProps {
  speaking: boolean;
  statusText: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  onReplay: () => void;
  voices: SpeechSynthesisVoice[];
  selectedVoiceName: string | null;
  onVoiceChange: (name: string) => void;
  rate: number;
  onRateChange: (rate: number) => void;
  autoAdvance: boolean;
  onAutoAdvanceToggle: () => void;
  subtitlesOn: boolean;
  onSubtitlesToggle: () => void;
}

const SPEEDS = [0.85, 1, 1.2];

export default function VoicePanel(props: VoicePanelProps) {
  const { t } = useLanguage();
  return (
    <div className="voice-panel">
      <div className="voice-left">
        <div className={`voice-avatar${props.speaking ? ' speaking' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </div>
        <div className="voice-info">
          <div className="voice-name">{t('voiceName')}</div>
          <div className={`voice-status ${props.speaking ? 'speaking' : 'idle'}`}>
            <span className="status-dot" />
            <span>{props.statusText}</span>
          </div>
        </div>
      </div>

      <div className="voice-controls">
        <button className="voice-btn btn-play" onClick={props.onPlayPause} title="Play / Pause">
          {props.isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
        <button className="voice-btn" onClick={props.onReplay} title="Replay">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>

        <div className="voice-select-wrap">
          <span className="voice-select-label">{t('voiceLabel')}</span>
          <select
            className="voice-select"
            value={props.selectedVoiceName ?? ''}
            onChange={(e) => props.onVoiceChange(e.target.value)}
          >
            {props.voices.length === 0 && <option value="">—</option>}
            {props.voices.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name}
              </option>
            ))}
          </select>
        </div>

        <div className="voice-speed">
          {SPEEDS.map((s) => (
            <button
              key={s}
              className={`speed-btn${props.rate === s ? ' active' : ''}`}
              onClick={() => props.onRateChange(s)}
            >
              {s}×
            </button>
          ))}
        </div>

        <div
          className={`toggle-chip cc${props.subtitlesOn ? ' active cc' : ''}`}
          onClick={props.onSubtitlesToggle}
          role="switch"
          aria-checked={props.subtitlesOn}
        >
          <span className="toggle-dot" />
          <span>CC {t('subtitles')}</span>
        </div>

        <div
          className={`toggle-chip${props.autoAdvance ? ' active' : ''}`}
          onClick={props.onAutoAdvanceToggle}
          role="switch"
          aria-checked={props.autoAdvance}
        >
          <span className="toggle-dot" />
          <span>{t('autoAdvance')}</span>
        </div>
      </div>
    </div>
  );
}
