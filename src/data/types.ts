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

// ----- Scatter Graph (sensor vs sensor) -----
export interface ScatterPoint {
  x: number;
  y: number;
}
export interface ScatterData {
  title?: string;
  seriesName: string;
  color: string;
  points: ScatterPoint[];
  xLabel: string;
  yLabel: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  highlight?: 'xaxis' | 'yaxis' | 'points' | 'legend' | null;
}

// ----- Data Input -----
export interface DataInputRow {
  sensor: string;
  asset: string;
  validRange?: string;
  safeRange?: string;
  frequency: string;
  enterValue?: string; // a typed value (bulk demo)
  status?: 'ok' | 'warning' | 'error' | null;
  ring?: boolean;
}
export interface DataInputCard {
  sensor: string;
  asset: string;
  typeLabel: string; // "Number" | "Boolean" | "Text" | "Image"
  validRange?: string;
  safeRange?: string;
  enteredValue?: string;
  textValue?: string;
  booleanValue?: 'yes' | 'no' | null;
  state?: 'idle' | 'error' | 'warning' | 'ok';
  message?: string;
  media?: 'all' | 'live' | null; // media upload requirement
  mediaState?: 'pending' | 'missing' | 'done';
}
export interface DataInputPreviewCell {
  value: string;
  level: 'safe' | 'warning' | 'error' | 'validation';
}
export interface DataInputPreview {
  extraColumns?: { header: string; values: string[] }[]; // descriptive columns (Parameters, Unit, Limiting)
  timeColumns: string[]; // timestamp headers
  rows: { tag: string; cells: DataInputPreviewCell[] }[];
  total: number;
  success: number;
  failed: number;
}
export interface DataInputData {
  mode: 'table' | 'card' | 'fileUpload' | 'preview';
  title?: string;
  rows?: DataInputRow[];
  card?: DataInputCard;
  preview?: DataInputPreview;
  submitLabel?: string;
  highlight?:
    | 'ranges' | 'value' | 'state' | 'media' | 'submit' | 'frequency'
    | 'upload' | 'detect' | 'stats' | 'editcol' | 'revalidate' | 'legend' | null;
}

// ----- Visualization (digital twin) -----
export interface VizData {
  plant: string;
  date: string;
  live: boolean; // true = LIVE, false = back-dated history
  page: string;
  pageMenu?: string[]; // open the Select Page dropdown
  section?: 'full' | 'primary'; // which schematic to render
  collectionLevel: number; // 0..100
  aerationLevel: number;
  pump1On: boolean;
  pump2On: boolean;
  highlight?: 'level' | 'onoff' | 'animation' | 'backdated' | 'pages' | null;
}

// ----- Insights -----
export type InsightType = 'Warning' | 'Issue' | 'Achievement';
export type InsightPriority = 'high' | 'medium' | 'low';
export interface InsightRow {
  name: string;
  desc: string;
  ago: string;
  status: 'Open' | 'Closed';
  priority: InsightPriority;
  asset: string;
  equipment?: string;
  type: InsightType;
  action?: string;
  ring?: boolean;
  // rich detail
  timestamp?: string;
  avgRecurrence?: string;
  timesOpened?: string;
  aiDescription?: string;
  details?: string;
  rca?: string[];
  comments?: { user: string; text: string }[];
}
export interface InsightsData {
  mode: 'page' | 'detail' | 'whatsapp' | 'digest';
  // page
  stats?: { all: string; openAlarms: string; closedAlarms: string; achievements: string };
  insights?: InsightRow[];
  // detail / whatsapp
  insight?: InsightRow;
  zeroAuth?: boolean;
  // digest
  digest?: {
    range: string;
    newCount: string;
    closedCount: string;
    openTotal: string;
    latest: InsightRow;
    plants?: string[];
  };
  highlight?:
    | 'stats' | 'filters' | 'types' | 'priority' | 'create' | 'row'
    | 'action' | 'zeroauth' | 'link' | 'counts' | 'latest' | 'plants'
    | 'ai' | 'recurrence' | 'equipment' | 'comments' | null;
}

// ----- Inventory Management -----
export interface InventoryItem {
  name: string;
  category: string;
  stock: string;
  lastConsumption: string;
  lastUpdated: string;
  actual: string;
  actualPeriod: string;
  expected: string;
  ring?: boolean;
}
export interface InventoryLog {
  remark?: string;
  amount: string;
  positive: boolean;
  unit: string;
  datetime: string;
}
export interface InventoryCategory {
  name: string;
  color?: 'chem' | 'solution' | 'consumable';
  disabled?: boolean;
}
export interface InventoryData {
  mode: 'supTable' | 'supLog' | 'opCategories' | 'opItem' | 'opForm';
  stores?: string[];
  activeStore?: string;
  // supTable
  items?: InventoryItem[];
  // supLog
  chemical?: string;
  balance?: string;
  monthUsage?: string;
  lastMonthUsage?: string;
  dateRange?: string;
  logs?: InventoryLog[];
  // opCategories
  categories?: InventoryCategory[];
  // opItem
  selectedItem?: string;
  // opForm
  formType?: 'add' | 'remove';
  itemName?: string;
  available?: string;
  remark?: string;
  remarkOptions?: string[]; // when the remark dropdown is open
  unit?: string;
  quantity?: string;
  asset?: string;
  highlight?:
    | 'store' | 'table' | 'consumption' | 'category' | 'log' | 'amounts' | 'balance'
    | 'addremove' | 'remark' | 'qty' | 'asset' | 'submit' | null;
}

// ----- OCR Data Input -----
export interface OcrLogbookRow {
  label: string;
  reading: string;
}
export interface OcrField {
  field: string;
  dayConsumption: string;
  parameter?: string;
}
export interface OcrData {
  mode: 'upload' | 'review';
  asset?: string;
  template?: string;
  processing?: boolean; // show the "Processing your image" state
  logbookRows?: OcrLogbookRow[]; // the uploaded logbook image mock
  fields?: OcrField[]; // extracted, editable data
  dateTime?: string;
  highlight?: 'asset' | 'template' | 'upload' | 'image' | 'extracted' | 'save' | null;
}

// ----- Sankey (flow distribution) -----
export interface SankeyNode {
  id: string;
  label: string;
  value: number;
  level: number;
  color: string;
}
export interface SankeyLink {
  source: string;
  target: string;
  value: number;
  color: string;
}
export interface SankeyData {
  title?: string;
  periodLabel?: string;
  nodes: SankeyNode[];
  links: SankeyLink[];
  highlight?: string; // node id to ring
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

// ----- Tasks -----
export type TaskPriority = 'High' | 'Medium' | 'Low';
export type WfStepType = 'todo' | 'inProgress' | 'done' | 'action';

export interface TaskRow {
  name: string;
  desc: string;
  plant: string;
  priority: TaskPriority;
  assignee?: string;
  skills: string[];
  status: 'Pending' | 'Completed';
  ring?: boolean;
}
export interface WfStep {
  label: string;
  type: WfStepType;
}
export interface TaskDetail {
  name: string;
  desc: string;
  steps: string[]; // SOP "Details" — the numbered method
  skills: string[];
  meta: { label: string; value: string }[]; // "Additional Details" key/values
  workflow: WfStep[]; // ordered workflow steps backing this task
  currentStep: number; // index of the active step (the button the operator taps)
  expanded?: boolean; // current step expanded to show its instruction
  toast?: boolean; // show the "Transition updated successfully" toast
  showMedia?: boolean; // the media-upload affordance (Action step)
}
export interface TaskData {
  mode: 'list' | 'detail';
  // list
  rows?: TaskRow[];
  completionFilter?: string;
  // detail
  detail?: TaskDetail;
  highlight?:
    | 'filters' | 'addtask' | 'columns' | 'priority' | 'skills' | 'status' | 'row'
    | 'details' | 'skillsd' | 'meta' | 'step' | 'next' | 'action' | 'history' | null;
}

// ----- Workflow builder -----
export interface WorkflowData {
  name: string;
  description: string;
  scope: string; // "System"
  userGroup?: string;
  nodes: WfStep[];
  highlight?: 'header' | 'scope' | 'legend' | 'nodes' | 'todo' | 'inProgress' | 'done' | 'action' | null;
}

// ----- Widget Configuration (internal "how to build it" track) -----
export interface CfgSensor {
  name?: string;
  sub?: string; // e.g. an aggregation label under the sensor
  active?: boolean; // currently-selected sensor
  add?: boolean; // render as the "+ Add sensor" affordance
}
export interface CfgThreshold {
  min: string;
  max: string;
  safe: string;
  caution: string;
  critical: string;
}
export interface ConfigData {
  widget: string; // display name, e.g. "Number Widget"
  layoutChoice?: 'auto' | 'drag'; // show the Add-Widget layout chooser, highlighting one
  sensors?: CfgSensor[];
  nickname?: string;
  unit?: string;
  unitMenu?: string[]; // render the unit dropdown open
  category?: string;
  categoryMenu?: string[]; // render the category dropdown open
  checks?: { label: string; on: boolean }[]; // the display check-boxes
  aggregation?: string;
  aggMenu?: string[]; // render the aggregation dropdown open
  threshold?: CfgThreshold;
  extras?: { label: string; value: string }[]; // widget-specific controls (key/value)
  axes?: { label: string; value: string }[]; // 3-axis advanced table
  graphType?: 'line' | 'bar'; // graph widget
  highlight?:
    | 'layout' | 'sensors' | 'theme' | 'checks' | 'aggregation' | 'threshold'
    | 'extras' | 'axes' | 'graphtype' | 'name' | null;
}

// ----- Events -----
export interface EventLog {
  start: string; // "27 Nov 2025 | 6:33 PM"
  end: string;
  duration: string; // "2 hrs 47 min"
  active?: boolean; // highlighted / most recent row
}
export interface EventChart {
  title: string; // "MBR Tank-2 LV"
  points: number[];
  xLabels: string[];
  yMin: number;
  yMax: number;
  color?: string;
}
export interface EventRow {
  name: string;
  desc: string;
  status: 'Active' | 'Inactive';
  createdAt?: string;
  equipment: string[];
  workspace: string;
  asset: string;
  avgDuration: string; // "1 hr 35 min"
  avgRecurrence: string; // "5 min 50 sec"
  frequency: string; // "2"
  ring?: boolean;
}
export interface EventsData {
  mode: 'list' | 'detail';
  // list
  rows?: EventRow[];
  assetFilter?: string;
  // detail
  event?: EventRow;
  logs?: EventLog[];
  charts?: EventChart[];
  highlight?:
    | 'filters' | 'status' | 'equipment' | 'workspace' | 'duration' | 'recurrence'
    | 'frequency' | 'row' | 'summary' | 'logs' | 'charts' | null;
}

// ----- Communications -----
export type CommMedium = 'email' | 'sms' | 'call' | 'whatsapp';
export type WaStatus = 'delivered' | 'sent' | 'undelivered' | 'read' | 'failed';
export interface CommRow {
  medium: CommMedium;
  sender: string; // "Doctor Paani"
  title: string; // subject / first line
  text: string; // body preview
  time: string; // "about 1 hour ago"
  status?: WaStatus; // whatsapp delivery status chip
  isReport?: boolean; // surfaced under the Report filter
  attachment?: string; // attached file name (PDF)
  ring?: boolean;
}
export interface CommData {
  mode: 'list' | 'email' | 'whatsapp';
  rows?: CommRow[];
  filters?: string[]; // active filter chips: 'Email' | 'SMS' | 'Call' | 'WhatsApp' | 'Report'
  // detail modals
  email?: { subject: string; body: string[]; attachment?: string };
  whatsapp?: { sender: string; time: string; text: string; status?: WaStatus };
  highlight?: 'search' | 'filters' | 'report' | 'mediums' | 'status' | 'row' | 'attachment' | 'content' | null;
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
  // scatter graph
  scatter?: ScatterData;
  // sankey
  sankey?: SankeyData;
  // data input
  dataInput?: DataInputData;
  // ocr data input
  ocr?: OcrData;
  // inventory
  inventory?: InventoryData;
  // insights
  insights?: InsightsData;
  // visualization (digital twin)
  viz?: VizData;
  // tasks
  task?: TaskData;
  // workflow builder
  workflow?: WorkflowData;
  // communications
  comm?: CommData;
  // widget configuration (internal track)
  config?: ConfigData;
  // events
  events?: EventsData;
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
  internalOnly?: boolean; // configuration tracks — visible only to internal users
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
