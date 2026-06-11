export type LangCode = 'en' | 'hi' | 'ta' | 'mr';

export type RoleId = 'operator' | 'supervisor' | 'internal';

export interface TipData {
  type: 'tipLabel' | 'noteLabel' | 'rememberLabel' | 'proTipLabel' | 'upNextLabel';
  text: string;
}

export interface StepContent {
  label: string;
  title: string;
  body: string; // HTML shown in the narration card
  voice: string; // plain text spoken by TTS, also drives subtitles
  tip?: TipData;
}

export interface SpotlightRegion {
  top: string;
  left: string;
  width: string;
  height: string;
}

/** A point (in % of the screenshot container) the guide cursor moves to,
 *  triggered when speech progress passes `at` (0..1 fraction of the voice text). */
export interface CursorKeyframe {
  at: number;
  x: number; // percent of stage width
  y: number; // percent of stage height
  click?: boolean; // play a click ripple on arrival
}

export interface StepLayout {
  mode: 'showcase' | 'detail';
  screenshot?: string; // key into the lesson's screenshot map
  spotlight?: SpotlightRegion | null;
  caption?: string;
  cursor?: CursorKeyframe[];
}

export interface LessonLangContent {
  title: string; // HTML — supports <em> spans
  subtitle: string;
  chapter: string;
  steps: StepContent[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  lessonNumber: number;
  estimatedMinutes: number;
  screenshots: Record<string, string>; // key -> public URL
  layouts: StepLayout[];
  content: Record<LangCode, LessonLangContent>;
}

export interface LessonRef {
  id: string;
  comingSoon?: boolean;
}

export interface ModuleDef {
  id: string;
  number: number;
  roles: RoleId[]; // which audiences see this module
  name: Record<LangCode, string>;
  description: Record<LangCode, string>;
  lessons: LessonRef[];
}
