import { useMemo } from 'react';
import { activeChunkIndex, buildSubtitleChunks } from '../lib/subtitles';

interface Props {
  text: string; // full narration text for the step
  charIndex: number; // characters spoken so far
  visible: boolean;
}

export default function SubtitleBar({ text, charIndex, visible }: Props) {
  const chunks = useMemo(() => buildSubtitleChunks(text), [text]);
  const idx = activeChunkIndex(chunks, charIndex);
  const current = chunks[idx]?.text ?? '';

  return (
    <div className={`subtitle-bar${visible && current ? ' visible' : ''}`} aria-live="polite">
      <span className="cc-tag">CC · RIYA</span>
      {current}
    </div>
  );
}
