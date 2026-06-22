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

/**
 * State passed to an interactive (recreated) widget component. Fields are
 * optional so each step can override only what it needs; the widget supplies
 * realistic defaults. Used by `mode: 'widget'` layouts.
 */
export interface ThresholdBand {
  from: number;
  to: number;
  level: 'good' | 'warning' | 'critical';
}

// ----- Elastic Table -----
export interface ElasticCell {
  value: string;
  level?: 'caution' | 'error'; // threshold highlight
  ring?: boolean; // guide emphasis
}
export interface ElasticAggRow {
  aggregation: string; // e.g. "Current", "Average", "Maximum"
  cells: ElasticCell[]; // one per time column
  ring?: boolean;
}
export interface ElasticSensor {
  name: string;
  rows: ElasticAggRow[]; // one or more aggregations
  ring?: boolean;
}
export interface ElasticGroup {
  name: string;
  collapsed?: boolean;
  summary?: string; // shown when collapsed, e.g. "5 sensors"
  sensors?: ElasticSensor[];
  ring?: boolean;
}
export interface ElasticTableData {
  timeColumns: { label: string; sub?: string; ring?: boolean }[];
  groups: ElasticGroup[];
  layout?: 'rows' | 'columns'; // sensors as rows (default) or transposed
}

// ----- Simple Table (sensor × aggregation) -----
export interface SimpleTableRow {
  label: string;
  value: string;
  ring?: boolean;
}
export interface SimpleTableData {
  title?: string;
  plantTag?: string;
  rows: SimpleTableRow[];
  menuItems?: string[]; // chart-switch menu, e.g. ["Bar Graph", "Line Graph"]
  highlight?: 'values' | 'plant' | 'menu' | null;
}

// ----- Graph (line / bar) -----
export interface GraphSeries {
  name: string;
  color: string;
  points: number[];
  endLabel?: string;
}
export interface GraphFixedRange {
  from: number;
  to: number;
  level: 'good' | 'warning' | 'critical';
}
export interface GraphData {
  type: 'line' | 'bar';
  title?: string;
  plantTag?: string;
  series: GraphSeries[];
  xLabels: string[];
  yMin: number;
  yMax: number;
  yStep?: number;
  fixedRanges?: GraphFixedRange[];
  thresholdLine?: number;
  fullIcons?: boolean; // header shows the icon row (download/expand/choose-chart/edit/info)
  menuItems?: string[]; // open chart-switch menu, e.g. ["Table", "Bar Graph"]
  highlight?: 'ranges' | 'legend' | 'end' | 'choose' | 'menu' | null;
}

// ----- Smart Hours (dashboard time-range feature) -----
export interface SmartHoursData {
  periodLabel: string; // "Jun 21 - Jun 22, 2026"
  from: string; // "11:00 PM"
  to: string; // "11:00 PM"
  preset: string; // selected preset, e.g. "Last 24 Hours"
  smartActive: boolean;
  granularity: 'Hours' | 'Days';
  note?: string; // caption under the period, e.g. the use-case being shown
  highlight?: 'smart' | 'fromto' | 'preset' | null;
}

// ----- Advanced Table (3-axis: Time × Sensor × Aggregation) -----
export interface AdvTableRow {
  label: string;
  badge?: string; // the "middle" axis value shown as a pill (e.g. "Current", "Today")
  cells: { value: string; level?: 'caution' | 'error' }[];
}
export interface AdvTableData {
  accent?: 'purple' | 'teal';
  title?: string;
  referenceLabel: string; // value in the Reference selector — "Today", "Current", "None"
  colHeaders: string[];
  rows: AdvTableRow[];
  wideRowHeader?: boolean; // sensor-name rows are wider (screenshots 3 & 4)
  ring?: 'reference' | 'columns' | 'rows' | null;
}

export interface WidgetState {
  title?: string;
  value?: string;
  unitTag?: string;
  unit?: string; // shown small after the value, e.g. "%"
  fromLabel?: string;
  toLabel?: string;
  changePct?: string;
  accent?: 'purple' | 'teal' | 'pink'; // widget theme colour
  aggregation?: string; // selected aggregation, shown as a badge / menu selection
  aggregationMenu?: boolean; // render the aggregation options dropdown open
  timeframeLabel?: string; // e.g. "Last 24 Hours" badge
  // gauge / threshold config
  min?: number;
  max?: number;
  thresholds?: ThresholdBand[]; // good / warning / critical bands
  // elastic table
  table?: ElasticTableData;
  // advanced table
  advTable?: AdvTableData;
  // simple table
  simpleTable?: SimpleTableData;
  // graph
  graph?: GraphData;
  // smart hours
  smartHours?: SmartHoursData;
  highlight?: 'value' | 'tag' | 'timeframe' | 'change' | 'menu' | 'scale' | 'thresholds' | null;
}

export interface StepLayout {
  // 'showcase' = auto-scrolling screenshot tour, 'detail' = static screenshot
  // with spotlight, 'widget' = live recreated widget component.
  mode: 'showcase' | 'detail' | 'widget';
  screenshot?: string; // key into the lesson's screenshot map (detail mode)
  widget?: string; // key into the widget registry (widget mode)
  widgetState?: WidgetState;
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
  tag: string; // short reference code, e.g. "M2" — used to address content for edits
  roles: RoleId[]; // which audiences see this module
  name: Record<LangCode, string>;
  description: Record<LangCode, string>;
  lessons: LessonRef[];
}
