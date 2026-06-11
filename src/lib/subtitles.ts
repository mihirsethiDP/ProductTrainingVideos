export interface SubtitleChunk {
  text: string;
  start: number; // char offset in the full voice text
  end: number;
}

const MAX_CHUNK = 110;

/**
 * Split narration text into subtitle-sized chunks at sentence boundaries
 * (Latin and Indic danda), further splitting long sentences at commas/dashes.
 */
export function buildSubtitleChunks(text: string): SubtitleChunk[] {
  const sentences: SubtitleChunk[] = [];
  const re = /[^.!?।…]+[.!?।…]*\s*/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    sentences.push({ text: m[0], start: m.index, end: m.index + m[0].length });
  }
  if (sentences.length === 0) return [{ text, start: 0, end: text.length }];

  const chunks: SubtitleChunk[] = [];
  for (const s of sentences) {
    if (s.text.length <= MAX_CHUNK) {
      chunks.push(s);
      continue;
    }
    // split long sentences at commas / em dashes
    const subRe = /[^,—]+[,—]*\s*/g;
    let sm;
    let acc = '';
    let accStart = s.start;
    while ((sm = subRe.exec(s.text)) !== null) {
      if (acc && (acc + sm[0]).length > MAX_CHUNK) {
        chunks.push({ text: acc, start: accStart, end: accStart + acc.length });
        accStart += acc.length;
        acc = '';
      }
      acc += sm[0];
    }
    if (acc) chunks.push({ text: acc, start: accStart, end: accStart + acc.length });
  }
  return chunks.map((c) => ({ ...c, text: c.text.trim() }));
}

export function activeChunkIndex(chunks: SubtitleChunk[], charIndex: number): number {
  for (let i = chunks.length - 1; i >= 0; i--) {
    if (charIndex >= chunks[i].start) return i;
  }
  return 0;
}
