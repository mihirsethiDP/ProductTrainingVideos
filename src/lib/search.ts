import { getLesson, lessonTagFor, modulesForRole } from '../data/catalog';
import type { LangCode, RoleId } from '../data/types';

export interface SearchHit {
  moduleId: string;
  moduleNumber: number;
  moduleName: string;
  lessonId: string;
  lessonTitle: string;
  lessonTag: string;
  internalOnly?: boolean;
  where: string; // 'Module' | 'Lesson' | 'Step 3 · Label' …
  snippet: string; // contextual excerpt around the match
  score: number;
}

const strip = (html: string) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function snippetAround(text: string, q: string): string {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return text.slice(0, 100);
  const start = Math.max(0, i - 45);
  const end = Math.min(text.length, i + q.length + 55);
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
}

/**
 * Searches module & lesson names AND the content of each lesson (titles,
 * subtitles, step titles, narration body & voice-over). Role- and
 * language-aware: only returns lessons the role can see, in the chosen language.
 */
export function searchContent(query: string, role: RoleId, lang: LangCode): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];

  for (const mod of modulesForRole(role)) {
    const moduleName = mod.name[lang];
    for (const ref of mod.lessons) {
      if (ref.comingSoon) continue;
      if (ref.internalOnly && role !== 'internal') continue;
      if (ref.roles && !ref.roles.includes(role)) continue;
      const lesson = getLesson(ref.id);
      if (!lesson) continue;
      const c = lesson.content[lang];
      const title = strip(c.title);
      const tag = lessonTagFor(mod, lesson.lessonNumber) + (ref.internalOnly ? '·C' : '');

      let best: { score: number; where: string; snippet: string } | null = null;
      const consider = (score: number, where: string, text: string) => {
        if (text && text.toLowerCase().includes(q) && (best === null || score > best.score)) {
          best = { score, where, snippet: snippetAround(text, q) };
        }
      };

      consider(100, 'Module', moduleName);
      consider(90, 'Lesson', title);
      consider(72, 'Lesson', strip(c.subtitle));
      c.steps.forEach((s, i) => {
        const where = `Step ${i + 1} · ${s.label}`;
        consider(60, where, s.title);
        consider(42, where, strip(s.body));
        consider(30, where, s.voice);
      });

      if (best !== null) {
        const b = best as { score: number; where: string; snippet: string };
        hits.push({
          moduleId: mod.id,
          moduleNumber: mod.number,
          moduleName,
          lessonId: lesson.id,
          lessonTitle: title,
          lessonTag: tag,
          internalOnly: ref.internalOnly,
          where: b.where,
          snippet: b.snippet,
          score: b.score,
        });
      }
    }
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, 12);
}
