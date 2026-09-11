import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-plaksha-dashboard`;

/**
 * Demo — Plaksha, campus water management.  (hidden module-demos)
 *
 * Built from one screen recording (4:49, Plaksha account, 2026-09-11):
 * login → Dashboard ("Water Management migrated") with the range/granularity
 * picker worked hard → the flowmeter cards and their widget tools (Download CSV,
 * Edit Widget, expand, legend toggling, "Save Current View") → site totals →
 * the STP Outlet tank-level section → block tank levels → Energy Consumption
 * and Quality Parameters → Inventory → Tickets (counts, a ticket's history,
 * Create New Ticket) → Plaksha Analytics on both its pages, STP and WTP.
 *
 * Style: `overview` — a page-by-page tour, two-sentence voices. The uploader's
 * NOTES ask for the dashboard "in detail", naming ticket granularity + data
 * downloading, widget customization, daily/weekly/monthly energy, insights,
 * alerts, inventory and ticket management; those intents get dedicated steps
 * (3, 5, 6, 11, 13, 14, 15, 16), which runs the tour past a plain overview —
 * per STUDIO.md, the note wins over the default length.
 *
 * Plaksha is a CAMPUS, not a single plant, so the copy talks in blocks, hostels
 * and the auditorium rather than "the plant".
 *
 * Things the copy deliberately does NOT overclaim:
 *  - this account's menu has NO Insight List (unlike other deployments), so the
 *    notes' "insights and alerts" are mapped onto what Plaksha actually has:
 *    the automatic, escalating tickets the system raises by itself, plus the
 *    sparkle (AI) button in the page header. No Insight List is described.
 *  - Task List and Plaksha Workspace appear in the menu but were never opened
 *    in the recording, so they are named in step 1 and nowhere else.
 *  - Inventory shows every chemical with an empty stock column in this account,
 *    so the step describes the columns, not stock figures that aren't there.
 *
 * Real 1280px frames from the recording; the baked OS cursor is erased from
 * every one (delogo on flat ground, an exact clone where it sat near text).
 */
const lesson: Lesson = {
  id: 'demo-plaksha-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 9,
  estimatedMinutes: 4,
  expiresAt: '2026-10-11', // 30 days after the job's created_at (2026-09-11) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    range: `${BASE}/range.jpg`,
    widget: `${BASE}/widget.jpg`,
    expand: `${BASE}/expand.jpg`,
    summary: `${BASE}/summary.jpg`,
    totals: `${BASE}/totals.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    blocktanks: `${BASE}/blocktanks.jpg`,
    energy: `${BASE}/energy.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticketdetail: `${BASE}/ticketdetail.jpg`,
    create: `${BASE}/create.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    equipment: `${BASE}/equipment.jpg`,
    wtp: `${BASE}/wtp.jpg`,
  },
  layouts: [
    // S1 — the side navigation: every screen this account can reach
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '9.9%', left: '0%', width: '14.1%', height: '35.4%' },
      cursor: [
        { at: 0, x: 15.2, y: 4.4, click: true },
        { at: 0.3, x: 3.2, y: 12.6 },
        { at: 0.55, x: 2.4, y: 25 },
        { at: 0.8, x: 2.8, y: 31.1 },
        { at: 0.95, x: 5, y: 43.4, click: true },
      ],
    },
    // S2 — the header controls that drive every widget on the page
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '15%', left: '1.6%', width: '96.6%', height: '11%' },
      cursor: [
        { at: 0, x: 9.8, y: 21.4, click: true },
        { at: 0.35, x: 53.8, y: 21.4 },
        { at: 0.6, x: 72.7, y: 21.4 },
        { at: 0.85, x: 82.9, y: 11.3, click: true },
        { at: 0.97, x: 91.8, y: 11.3 },
      ],
    },
    // S3 — granularity: the same window read at minutes, hours or days
    {
      mode: 'detail', screenshot: 'range', caption: 'Minutes, hours or days',
      spotlight: { top: '49.2%', left: '20.4%', width: '16.5%', height: '21.2%' },
      cursor: [
        { at: 0, x: 52.1, y: 20 },
        { at: 0.3, x: 62, y: 25.8 },
        { at: 0.55, x: 25.4, y: 55.4 },
        { at: 0.8, x: 24.7, y: 66.3 },
        { at: 0.95, x: 74.6, y: 82.6, click: true },
      ],
    },
    // S4 — the flowmeter cards: every meter on campus, live and cumulative
    {
      mode: 'detail', screenshot: 'widget', caption: 'Every meter on campus',
      spotlight: { top: '22.2%', left: '1.6%', width: '96.6%', height: '47.9%' },
      cursor: [
        { at: 0, x: 6.3, y: 30 },
        { at: 0.35, x: 31.3, y: 38.5 },
        { at: 0.65, x: 60.2, y: 38.5 },
        { at: 0.9, x: 86.2, y: 47.5 },
      ],
    },
    // S5 — the tools on every widget: CSV, expand, chart type, edit, info
    {
      mode: 'detail', screenshot: 'widget', caption: 'Download it, or re-draw it',
      spotlight: { top: '23.9%', left: '42.2%', width: '6.6%', height: '3.1%' },
      cursor: [
        { at: 0, x: 42.9, y: 25.3 },
        { at: 0.3, x: 44.5, y: 25.3, click: true },
        { at: 0.6, x: 46.1, y: 25.3 },
        { at: 0.9, x: 48.1, y: 25.3 },
      ],
    },
    // S6 — expanded view, legend toggling, and keeping the view you built
    {
      mode: 'detail', screenshot: 'expand', caption: 'Zoom in, then keep the view',
      spotlight: { top: '92%', left: '7.5%', width: '85.3%', height: '6.7%' },
      cursor: [
        { at: 0, x: 53.8, y: 28.2, click: true },
        { at: 0.35, x: 89.2, y: 20.9 },
        { at: 0.7, x: 79, y: 95.4, click: true },
        { at: 0.95, x: 87.7, y: 95.4 },
      ],
    },
    // S7 — the whole site as one table
    {
      mode: 'detail', screenshot: 'summary', caption: 'The whole site, one table',
      spotlight: { top: '17.9%', left: '5.2%', width: '89.8%', height: '64.1%' },
      cursor: [
        { at: 0, x: 7.8, y: 25.6 },
        { at: 0.35, x: 10.4, y: 37.6 },
        { at: 0.65, x: 93, y: 49.2 },
        { at: 0.9, x: 89.2, y: 20.9, click: true },
      ],
    },
    // S8 — in, processed, consumed: the three numbers that close the loop
    {
      mode: 'detail', screenshot: 'totals', caption: 'In, processed, consumed',
      spotlight: { top: '37.6%', left: '40.6%', width: '19.9%', height: '44.4%' },
      cursor: [
        { at: 0, x: 45.5, y: 46.2 },
        { at: 0.35, x: 55.7, y: 46.2 },
        { at: 0.7, x: 45.5, y: 69.2 },
        { at: 0.95, x: 45.5, y: 78.6 },
      ],
    },
    // S9 — the hostel and block tanks, live
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Every tank on campus',
      spotlight: { top: '29.1%', left: '1.6%', width: '96.6%', height: '47%' },
      cursor: [
        { at: 0, x: 13.5, y: 32 },
        { at: 0.35, x: 37.7, y: 32 },
        { at: 0.65, x: 62, y: 32 },
        { at: 0.9, x: 86.2, y: 32 },
      ],
    },
    // S10 — a tank reading past its band
    {
      mode: 'detail', screenshot: 'blocktanks', caption: 'When a tank runs past its band',
      spotlight: { top: '24.8%', left: '66.4%', width: '31.8%', height: '45.3%' },
      cursor: [
        { at: 0, x: 17.6, y: 41 },
        { at: 0.35, x: 49.9, y: 41 },
        { at: 0.7, x: 82.3, y: 45 },
        { at: 0.95, x: 95.3, y: 61.5 },
      ],
    },
    // S11 — energy, and the per-KL number beside the total
    {
      mode: 'detail', screenshot: 'energy', caption: 'What the treatment cost',
      spotlight: { top: '20.5%', left: '34.1%', width: '64.1%', height: '33.3%' },
      cursor: [
        { at: 0, x: 17.4, y: 30 },
        { at: 0.35, x: 41.7, y: 33.7 },
        { at: 0.7, x: 90.4, y: 33.7 },
        { at: 0.95, x: 90.4, y: 50.4 },
      ],
    },
    // S12 — the quality row, each number carrying its own reference
    {
      mode: 'detail', screenshot: 'energy', caption: 'Quality, against the reference',
      spotlight: { top: '58.1%', left: '1.6%', width: '64.1%', height: '41.5%' },
      cursor: [
        { at: 0, x: 7.6, y: 60.9 },
        { at: 0.35, x: 17.4, y: 67 },
        { at: 0.7, x: 49.9, y: 67 },
        { at: 0.95, x: 63.7, y: 79.8 },
      ],
    },
    // S13 — Inventory: the chemicals the campus consumes
    {
      mode: 'detail', screenshot: 'inventory', caption: 'What the store is using',
      spotlight: { top: '8.5%', left: '1.6%', width: '96.6%', height: '83.8%' },
      cursor: [
        { at: 0, x: 4.4, y: 20 },
        { at: 0.35, x: 4.4, y: 49.9 },
        { at: 0.7, x: 77.6, y: 59 },
        { at: 0.95, x: 88.8, y: 95.6 },
      ],
    },
    // S14 — the Tickets page: the system's own alerts, counted
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Alerts the system raises itself',
      spotlight: { top: '17.1%', left: '1.6%', width: '96.6%', height: '14.5%' },
      cursor: [
        { at: 0, x: 14.2, y: 21.4 },
        { at: 0.3, x: 18.8, y: 27.4 },
        { at: 0.55, x: 42.8, y: 21.4 },
        { at: 0.8, x: 68.4, y: 22.1 },
        { at: 0.95, x: 12.5, y: 41.9 },
      ],
    },
    // S15 — inside a ticket: the fix to apply, and the audit trail
    {
      mode: 'detail', screenshot: 'ticketdetail', caption: 'Inside a ticket',
      spotlight: { top: '28.2%', left: '51.9%', width: '33.2%', height: '48.7%' },
      cursor: [
        { at: 0, x: 28.9, y: 55 },
        { at: 0.35, x: 32.8, y: 66.7 },
        { at: 0.7, x: 63.3, y: 45 },
        { at: 0.95, x: 82.7, y: 82.7 },
      ],
    },
    // S16 — raising one by hand
    {
      mode: 'detail', screenshot: 'create', caption: 'Raise one yourself',
      spotlight: { top: '22.2%', left: '24.8%', width: '50.3%', height: '56.1%' },
      cursor: [
        { at: 0, x: 93.8, y: 13.7, click: true },
        { at: 0.3, x: 50, y: 30.6 },
        { at: 0.6, x: 50, y: 49.9 },
        { at: 0.85, x: 50, y: 66.5 },
        { at: 0.97, x: 50, y: 74.4, click: true },
      ],
    },
    // S17 — Analytics, STP page
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Analytics — the STP in depth',
      spotlight: { top: '37.6%', left: '1.6%', width: '96.6%', height: '47%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.3, x: 13.5, y: 55 },
        { at: 0.55, x: 37.7, y: 55 },
        { at: 0.8, x: 62, y: 60 },
        { at: 0.95, x: 86.2, y: 55 },
      ],
    },
    // S18 — Equipment Performance and Maintenance
    {
      mode: 'detail', screenshot: 'equipment', caption: 'What ran, and for how long',
      spotlight: { top: '47%', left: '1.6%', width: '23.5%', height: '46.2%' },
      cursor: [
        { at: 0, x: 13.5, y: 50 },
        { at: 0.35, x: 20.7, y: 55 },
        { at: 0.7, x: 62, y: 55 },
        { at: 0.95, x: 86.2, y: 55 },
      ],
    },
    // S19 — Analytics, WTP page
    {
      mode: 'detail', screenshot: 'wtp', caption: 'Two pages: STP and WTP',
      spotlight: { top: '27.4%', left: '1.6%', width: '16.4%', height: '9.4%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.35, x: 4.2, y: 30.4 },
        { at: 0.7, x: 4.2, y: 34.5, click: true },
        { at: 0.95, x: 60, y: 60 },
      ],
    },
    // S20 — wrap: which page serves which job
    {
      mode: 'detail', screenshot: 'header', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1.2, y: 4.4 },
        { at: 0.35, x: 9.8, y: 21.4 },
        { at: 0.7, x: 20, y: 45 },
        { at: 0.95, x: 61.2, y: 21.4 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Plaksha,<br><em>the whole campus on one screen.</em>',
      subtitle:
        'A practical tour of your platform — the dashboard in detail, the tickets and inventory behind it, and the STP and WTP in depth.',
      chapter: 'Demo · Plaksha',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens your side navigation, and every screen you have lives there: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Tickets</strong> and <strong>Task List</strong>, then <strong>Plaksha Workspace</strong>, and <strong>Plaksha</strong> itself — expand it for the analytics pages. The <strong>search</strong> box at the top jumps straight to any of them.",
          voice: "Everything starts from this menu — Dashboard, Inventory, Tickets, Task List, the workspace, and Plaksha with its own analytics.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on the <strong>Water Management migrated</strong> page. Everything below it is driven by three controls: the <strong>Page</strong> selector, the <strong>Granularity</strong>, and the <strong>From</strong> and <strong>To</strong> range. On the right sit the <strong>sparkle</strong> for AI insights, <strong>refresh</strong>, a <strong>download</strong> for the whole page, the <strong>gear</strong> for page settings, and the <strong>grid</strong> that manages the layout itself.",
          voice: "The page selector, the granularity and the date range drive every widget below. Beside them sit AI insights, refresh, and a download for the whole page.",
        },
        {
          label: 'Granularity', title: 'Minutes, hours or days',
          body: "Click the range and the picker opens. Presets run <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, three, seven, ten or thirty days, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars. <strong>Granularity</strong> follows the window you pick — <strong>Minutes</strong>, <strong>Hours</strong> and <strong>Days</strong> over a day, <strong>Days</strong> and <strong>Weeks</strong> over a month — and <strong>Smart Hours</strong> re-applies one daily time slot across every date in the range.",
          voice: "Presets from today out to six months, or your own dates. The granularity follows the window — minutes and hours over a day, weeks over a month.",
        },
        {
          label: 'Meters', title: 'Every meter on campus',
          body: "<strong>Water Quantity and Availability</strong> is the campus in meters. <strong>Overall Summary</strong> carries the consumption for the window — <strong>GMADA Inlet</strong>, <strong>Borewell</strong>, both <strong>WTP Outlets</strong> and every block — while <strong>Flowmeter Raw Data</strong> shows the same meters as running totals. Beside them, <strong>Girls Hostel</strong>, <strong>Academic Block 1</strong> and <strong>2</strong>, <strong>Utility Block</strong> and the <strong>STP Inlet</strong> and <strong>Outlet</strong> each get their own card.",
          voice: "Overall summary gives consumption for the window, raw data gives the running totals, and each hostel and block carries its own card.",
        },
        {
          label: 'Widgets', title: 'Download it, or re-draw it',
          body: "Every widget carries the same tools on hover: <strong>Download CSV</strong>, <strong>Expanded View</strong>, a chart-type menu, <strong>Edit Widget</strong>, and an <strong>info</strong> note explaining what is plotted. The CSV comes down for whatever range is set above, so a month of a single meter is two clicks — and the <strong>download</strong> button in the page header takes the whole dashboard at once.",
          voice: "Hover any widget for download, expand, chart type and edit. The C S V comes down for whatever range is set above.",
        },
        {
          label: 'Expand', title: 'Zoom in, then keep the view',
          body: "<strong>Expanded View</strong> throws a widget full-width — here a full day of <strong>Girls Hostel Tank Levels</strong> at minute resolution. Click a legend entry to drop that series: <strong>Domestic Tank - 1</strong> is struck through, so only <strong>Flushing Tank - 1</strong> is plotted, ending at <strong>78.1</strong>. Drag across the chart to zoom, <strong>Reset Zoom</strong> to come back, and when a view is worth keeping the <strong>Save Current View</strong> bar offers <strong>Save</strong> or <strong>Save As</strong>.",
          voice: "Expand any widget, click a legend entry to drop a series, drag to zoom. Save current view keeps the layout for next time.",
        },
        {
          label: 'Summary', title: 'The whole site, one table',
          body: "Expanded, <strong>Overall Summary</strong> reads the whole campus in one list: <strong>GMADA Inlet 103.65</strong>, <strong>Borewell 308.38</strong>, <strong>WTP Outlet-1 210.00</strong> and <strong>-2 145.00</strong>, then <strong>Academic Block 1</strong> and <strong>2</strong> split into flushing and domestic, and <strong>DR-2</strong> below them. One window, every meter, in the order you would actually read them.",
          voice: "Expanded, the overall summary reads the whole campus in one list — inlet, borewell, both W T P outlets, then every block split into flushing and domestic.",
        },
        {
          label: 'Totals', title: 'In, processed, consumed',
          body: "Three cards close the loop for the window: <strong>Total Water Inlet 412.03 KL</strong>, <strong>Water Processed 355 KL</strong> and <strong>Water Consumed 320.97 KL</strong>, each stamped with the exact period it covers. That is the campus water balance in one line — what came in, what the plants treated, and what the buildings actually drew.",
          voice: "Total water inlet four hundred twelve K L, water processed three fifty five, water consumed three twenty one — the campus balance in one line.",
        },
        {
          label: 'Tanks', title: 'Every tank on campus',
          body: "<strong>STP Outlet</strong> opens the live tank picture. <strong>Girls Hostel</strong> holds flushing at <strong>78.1%</strong> against domestic at <strong>80%</strong>; <strong>Boys Hostel</strong> runs <strong>70.7</strong> and <strong>42.1</strong>; <strong>Academic Block 1 &amp; 2</strong> stacks all four tanks on one chart, from <strong>100</strong> down to <strong>54.6</strong>; and <strong>Utility Block</strong> lists its level sensors as plain numbers.",
          voice: "Girls hostel, boys hostel, both academic blocks and the utility block — every tank plotted live, with all four block tanks on one chart.",
        },
        {
          label: 'Limits', title: 'When a tank runs past its band',
          body: "The block tanks each get their own chart: <strong>A3</strong> at <strong>96</strong> and <strong>89</strong>, <strong>A4</strong> at <strong>89</strong> and <strong>65</strong>. The <strong>Auditorium</strong> is the one to look at — its domestic tank reads <strong>112</strong>, up in the pink band above the safe range, while flushing sits at <strong>98</strong>. The band travels with the chart, so an overfill is visible without checking a number against anything.",
          voice: "Each block tank gets its own chart. The auditorium domestic tank reads one hundred twelve, up in the pink band above its safe range.",
        },
        {
          label: 'Energy', title: 'What the treatment cost',
          body: "<strong>Energy Consumption</strong> pairs the draw with the water it treated, for the <strong>STP</strong> and the <strong>WTP</strong> side by side. <strong>STP Energy per KL</strong> reads <strong>2.18</strong>, <strong>down 19%</strong>; <strong>WTP Energy per KL</strong> reads <strong>2.6</strong>, <strong>up 44%</strong> — cost per unit of water, not just a total. Because the section obeys the range above, the same cards read a day, a week or a month by changing the window.",
          voice: "S T P energy two point one eight per K L, down nineteen percent; W T P two point six, up forty four. Change the window and the same cards read a week or a month.",
        },
        {
          label: 'Quality', title: 'Quality, against the reference',
          body: "<strong>Quality Parameters</strong> closes the dashboard. <strong>STP Treated Water Turbidity</strong> tracks across the day, ending at <strong>11.86 NTU</strong>, and <strong>WTP Raw Water pH</strong> sits at <strong>7</strong> — and that card is labelled <strong>ref: 6.5-8.5</strong>, so the acceptable band travels with the number instead of living in someone's head.",
          voice: "Treated water turbidity ends at eleven point nine, and raw water p H at seven — inside the reference band printed on the card.",
        },
        {
          label: 'Inventory', title: 'What the store is using',
          body: "<strong>Inventory</strong> lists the consumables by store. <strong>Plaksha Store</strong> carries <strong>Urea</strong>, <strong>Chlorine Balance</strong>, <strong>DAP</strong>, <strong>Jaggery</strong>, <strong>EM</strong>, <strong>LIME</strong>, <strong>ALUM</strong>, <strong>Poly</strong>, <strong>Bioculture</strong> and <strong>HCL</strong> — fifteen items in all. Each row has <strong>Stock Available</strong>, <strong>Last Consumption</strong>, and consumption compared as <strong>Actual</strong> against <strong>Expected</strong>: the column that tells you whether dosing is drifting. The flag beside a name marks an item wanting attention.",
          voice: "Inventory lists every chemical by store, with stock, last consumption, and actual against expected — so you can see dosing drift.",
        },
        {
          label: 'Alerts', title: 'Alerts the system raises itself',
          body: "<strong>Tickets</strong> is where the platform's own findings land — these are raised automatically from the data, not typed in. <strong>6 open</strong>, all six <strong>overdue</strong> and <strong>escalated</strong>, against <strong>25 closed</strong>. The split by team puts all the work under <strong>Process</strong>: <strong>5 open</strong> and <strong>18 closed</strong>. The rows read like alerts because they are — tank levels reaching 90% across the hostels and academic blocks, a feed pump out of auto mode — each tagged <strong>automatic</strong> and carrying its <strong>Escalation Level</strong>.",
          voice: "Six open tickets against twenty five closed, all of them raised automatically — tank levels at ninety percent, a feed pump out of auto mode.",
        },
        {
          label: 'Detail', title: 'Inside a ticket',
          body: "Open one and you get the whole story: the <strong>Problem</strong> — <em>“Clear water tank Level has reached 90%”</em> — and a <strong>Description</strong> telling the operator exactly what to do about it, here bypass the inlet or increase the transfer rate until the level is back to 60%. The <strong>History</strong> column is the audit trail, and on this ticket it runs deep: <strong>20 of 4059</strong> entries, every recurrence timestamped. <strong>ReOpen</strong> brings it back if it returns.",
          voice: "Each ticket carries the problem, the fix to apply, and a history — this one has four thousand entries, every recurrence timestamped.",
        },
        {
          label: 'Create', title: 'Raise one yourself',
          body: "<strong>Create New Ticket</strong> is the manual route: a <strong>Problem Statement</strong>, an optional <strong>Description</strong>, the <strong>Plant</strong> it belongs to, the <strong>Equipment</strong> it concerns and an <strong>Issue Type</strong>. That is why rows are tagged <strong>automatic</strong> or <strong>manual</strong> — the system raises most of them from the data, and your team raises the rest.",
          voice: "Create new ticket takes a problem statement, the plant, the equipment and an issue type — which is why every ticket is tagged automatic or manual.",
        },
        {
          label: 'Analytics', title: 'Analytics — the STP in depth',
          body: "<strong>Plaksha Analytics</strong> is the deeper page, grouped by the question you are asking. On the <strong>STP</strong> page, <strong>Water Quantity and Availability</strong> holds <strong>Tank Level</strong> for all four tanks — <strong>EQT 80.88</strong>, <strong>CCT 68.39</strong>, <strong>TWT 49.12</strong>, <strong>SHT 33.41</strong> — with <strong>STP Outlet flow</strong>, <strong>Flow Meters</strong>, and a <strong>Water Volume in Tanks</strong> card that converts those percentages into kilolitres against each tank's capacity.",
          voice: "Analytics groups the S T P by question — tank levels, outlet flow, flow meters, and the volume in each tank against its capacity.",
        },
        {
          label: 'Equipment', title: 'What ran, and for how long',
          body: "<strong>Equipment Performance and Maintenance</strong> starts with <strong>Equipment Running Hours</strong> — <strong>STP Blower-1</strong> at <strong>12</strong> hours against <strong>Blower-2</strong> at <strong>11.9</strong>, a clean share; both <strong>FMR Feed Pumps</strong> at <strong>0</strong>; <strong>Filter Feed Pump-2</strong> at <strong>10.27</strong> while pump 1 sat idle. Beside it every machine plots as a one-or-zero line, with <strong>Header</strong> and <strong>MGF-ACF Pressure</strong>, and <strong>Auto/Manual</strong> and <strong>Trip Status</strong> lists.",
          voice: "Running hours say what worked — the two blowers sharing the load, one filter feed pump carrying ten hours while the other sat idle.",
        },
        {
          label: 'WTP', title: 'Two pages: STP and WTP',
          body: "The <strong>Page</strong> selector on Analytics holds both plants. Switch to <strong>WTP</strong> and the same shape reappears for the water treatment side: <strong>Tank Levels</strong> with the <strong>raw water</strong>, <strong>rain water</strong> and <strong>domestic</strong> tanks, and a <strong>Flow Meter</strong> card running <strong>WTP Outlet flowmeter-1</strong> at <strong>211</strong>, <strong>-2</strong> at <strong>145</strong> and the <strong>inlet totalizer</strong> at <strong>103.65</strong>, with water quality below.",
          voice: "The page selector holds both plants. Switch to W T P and the same shape reappears — raw, rain and domestic tanks, with the outlet flowmeters beside them.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the day — every meter, the tanks, energy and quality in one scroll. <strong>Analytics</strong>, on its <strong>STP</strong> and <strong>WTP</strong> pages, when you need the process behind a number. <strong>Tickets</strong> for what the system is flagging. <strong>Inventory</strong> for what the store is consuming. One page selector, one granularity, one date range — and everything follows.",
          voice: "Dashboard for the day, Analytics for the process, Tickets for what the system flags, Inventory for the store. One range, and everything follows.",
        },
      ],
    },
    hi: {
      title: 'प्लक्षा,<br><em>पूरा कैंपस एक स्क्रीन पर।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का व्यावहारिक दौरा — डैशबोर्ड विस्तार से, उसके पीछे के टिकट और इन्वेंटरी, और STP व WTP गहराई में।',
      chapter: 'डेमो · प्लक्षा',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और आपकी हर स्क्रीन वहीं है: <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>टिकट</strong> और <strong>टास्क लिस्ट</strong>, फिर <strong>प्लक्षा वर्कस्पेस</strong>, और स्वयं <strong>प्लक्षा</strong> — उसे खोलें तो एनालिटिक्स पेज मिलते हैं। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
          voice: "सब कुछ इसी मेन्यू से — डैशबोर्ड, इन्वेंटरी, टिकट, टास्क लिस्ट, वर्कस्पेस, और प्लक्षा के साथ उसका एनालिटिक्स।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>वॉटर मैनेजमेंट माइग्रेटेड</strong> पेज पर खुलता है। नीचे का सब कुछ तीन कंट्रोल से चलता है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong>, और <strong>फ्रॉम</strong> व <strong>टू</strong> की समय सीमा। दाईं ओर AI इनसाइट के लिए <strong>स्पार्कल</strong>, <strong>रिफ़्रेश</strong>, पूरे पेज के लिए <strong>डाउनलोड</strong>, सेटिंग्स का <strong>गियर</strong>, और लेआउट संभालने वाला <strong>ग्रिड</strong> है।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा हर विजेट चलाते हैं। साथ में AI इनसाइट, रिफ़्रेश, और पूरे पेज का डाउनलोड।",
        },
        {
          label: 'ग्रैन्युलैरिटी', title: 'मिनट, घंटे या दिन',
          body: "समय सीमा पर क्लिक करने से पिकर खुलता है: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 आवर्स</strong>, तीन, सात, दस या तीस दिन, <strong>3</strong> या <strong>6 महीने</strong>, या दो कैलेंडरों पर <strong>कस्टम</strong>। <strong>ग्रैन्युलैरिटी</strong> चुनी हुई अवधि के अनुसार बदलती है — एक दिन पर <strong>मिनट</strong>, <strong>घंटे</strong> और <strong>दिन</strong>, महीने पर <strong>दिन</strong> और <strong>सप्ताह</strong> — और <strong>स्मार्ट आवर्स</strong> उसी दैनिक समय-खंड को हर तारीख पर लागू करती है।",
          voice: "आज से छह महीने तक के प्रीसेट, या अपनी तारीखें। ग्रैन्युलैरिटी अवधि के साथ बदलती है — दिन पर मिनट और घंटे, महीने पर सप्ताह।",
        },
        {
          label: 'मीटर', title: 'कैंपस का हर मीटर',
          body: "<strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong> पूरे कैंपस को मीटरों में रखता है। <strong>ओवरऑल समरी</strong> चुनी अवधि की खपत दिखाती है — <strong>GMADA इनलेट</strong>, <strong>बोरवेल</strong>, दोनों <strong>WTP आउटलेट</strong> और हर ब्लॉक — जबकि <strong>फ़्लोमीटर रॉ डेटा</strong> वही मीटर संचयी कुल में दिखाता है। साथ में <strong>गर्ल्स हॉस्टल</strong>, <strong>एकेडमिक ब्लॉक 1</strong> व <strong>2</strong>, <strong>यूटिलिटी ब्लॉक</strong> और <strong>STP इनलेट</strong> व <strong>आउटलेट</strong> के अपने-अपने कार्ड हैं।",
          voice: "ओवरऑल समरी अवधि की खपत देती है, रॉ डेटा संचयी कुल, और हर हॉस्टल व ब्लॉक का अपना कार्ड है।",
        },
        {
          label: 'विजेट', title: 'डाउनलोड करें, या दोबारा बनाएँ',
          body: "हर विजेट पर हॉवर करते ही वही टूल आते हैं: <strong>डाउनलोड CSV</strong>, <strong>एक्सपैंडेड व्यू</strong>, चार्ट-टाइप मेन्यू, <strong>एडिट विजेट</strong>, और एक <strong>info</strong> टिप्पणी। CSV ऊपर सेट सीमा के लिए ही उतरती है, इसलिए किसी एक मीटर का पूरा महीना दो क्लिक में — और पेज हेडर का <strong>डाउनलोड</strong> बटन पूरा डैशबोर्ड एक साथ ले लेता है।",
          voice: "किसी भी विजेट पर हॉवर करें — डाउनलोड, एक्सपैंड, चार्ट टाइप, एडिट। CSV ऊपर सेट सीमा के लिए ही उतरती है।",
        },
        {
          label: 'एक्सपैंड', title: 'ज़ूम करें, फिर व्यू सहेजें',
          body: "<strong>एक्सपैंडेड व्यू</strong> विजेट को पूरी चौड़ाई देता है — यहाँ पूरे दिन के <strong>गर्ल्स हॉस्टल टैंक लेवल्स</strong> मिनट-स्तर पर। लेजेंड पर क्लिक करके कोई सीरीज़ हटाएँ: <strong>डोमेस्टिक टैंक - 1</strong> कटा हुआ है, इसलिए केवल <strong>फ़्लशिंग टैंक - 1</strong> दिख रहा है, <strong>78.1</strong> पर समाप्त। खींचकर ज़ूम करें, <strong>रीसेट ज़ूम</strong> से वापस आएँ, और व्यू रखने लायक हो तो <strong>सेव करंट व्यू</strong> पट्टी <strong>सेव</strong> या <strong>सेव ऐज़</strong> देती है।",
          voice: "विजेट खोलें, लेजेंड पर क्लिक करके कोई सीरीज़ हटाएँ, खींचकर ज़ूम करें। सेव करंट व्यू अगली बार के लिए लेआउट रखता है।",
        },
        {
          label: 'समरी', title: 'पूरा परिसर, एक तालिका',
          body: "खोलने पर <strong>ओवरऑल समरी</strong> पूरे कैंपस को एक सूची में पढ़ती है: <strong>GMADA इनलेट 103.65</strong>, <strong>बोरवेल 308.38</strong>, <strong>WTP आउटलेट-1 210.00</strong> और <strong>-2 145.00</strong>, फिर <strong>एकेडमिक ब्लॉक 1</strong> व <strong>2</strong> फ़्लशिंग और डोमेस्टिक में बँटे, और नीचे <strong>DR-2</strong>। एक अवधि, हर मीटर, उसी क्रम में जिसमें आप वाकई पढ़ेंगे।",
          voice: "खोलने पर ओवरऑल समरी पूरे कैंपस को एक सूची में पढ़ती है — इनलेट, बोरवेल, दोनों WTP आउटलेट, फिर हर ब्लॉक।",
        },
        {
          label: 'कुल', title: 'आया, शोधित हुआ, खर्च हुआ',
          body: "तीन कार्ड अवधि का हिसाब पूरा करते हैं: <strong>टोटल वॉटर इनलेट 412.03 KL</strong>, <strong>वॉटर प्रोसेस्ड 355 KL</strong> और <strong>वॉटर कंज्यूम्ड 320.97 KL</strong>, हर एक पर उसकी सटीक अवधि अंकित। यही कैंपस का जल-संतुलन है — कितना आया, प्लांट ने कितना शोधित किया, और इमारतों ने वास्तव में कितना लिया।",
          voice: "टोटल इनलेट चार सौ बारह के एल, प्रोसेस्ड तीन सौ पचपन, कंज्यूम्ड तीन सौ इक्कीस — कैंपस का संतुलन एक पंक्ति में।",
        },
        {
          label: 'टैंक', title: 'कैंपस का हर टैंक',
          body: "<strong>STP आउटलेट</strong> टैंकों की लाइव तस्वीर खोलता है। <strong>गर्ल्स हॉस्टल</strong> में फ़्लशिंग <strong>78.1%</strong> और डोमेस्टिक <strong>80%</strong>; <strong>बॉयज़ हॉस्टल</strong> <strong>70.7</strong> और <strong>42.1</strong> पर; <strong>एकेडमिक ब्लॉक 1 व 2</strong> चारों टैंक एक ही चार्ट पर, <strong>100</strong> से <strong>54.6</strong> तक; और <strong>यूटिलिटी ब्लॉक</strong> अपने लेवल सेंसर सीधे आँकड़ों में दिखाता है।",
          voice: "गर्ल्स हॉस्टल, बॉयज़ हॉस्टल, दोनों एकेडमिक ब्लॉक और यूटिलिटी ब्लॉक — हर टैंक लाइव, चारों ब्लॉक टैंक एक ही चार्ट पर।",
        },
        {
          label: 'सीमा', title: 'जब टैंक अपनी सीमा पार करे',
          body: "हर ब्लॉक टैंक का अपना चार्ट है: <strong>A3</strong> <strong>96</strong> और <strong>89</strong> पर, <strong>A4</strong> <strong>89</strong> और <strong>65</strong> पर। देखने लायक है <strong>ऑडिटोरियम</strong> — उसका डोमेस्टिक टैंक <strong>112</strong> पढ़ता है, सुरक्षित सीमा के ऊपर गुलाबी पट्टी में, जबकि फ़्लशिंग <strong>98</strong> पर है। पट्टी चार्ट के साथ ही चलती है, इसलिए ओवरफ़िल किसी आँकड़े से मिलाए बिना दिख जाता है।",
          voice: "हर ब्लॉक टैंक का अपना चार्ट है। ऑडिटोरियम का डोमेस्टिक टैंक एक सौ बारह पढ़ता है, सुरक्षित सीमा के ऊपर गुलाबी पट्टी में।",
        },
        {
          label: 'ऊर्जा', title: 'शोधन की लागत',
          body: "<strong>एनर्जी कंजम्पशन</strong> खपत को शोधित पानी के साथ जोड़ता है, <strong>STP</strong> और <strong>WTP</strong> साथ-साथ। <strong>STP एनर्जी पर KL</strong> <strong>2.18</strong>, <strong>19% नीचे</strong>; <strong>WTP एनर्जी पर KL</strong> <strong>2.6</strong>, <strong>44% ऊपर</strong> — केवल कुल नहीं, प्रति इकाई पानी की लागत। यह हिस्सा ऊपर की सीमा मानता है, इसलिए वही कार्ड दिन, सप्ताह या महीना पढ़ लेते हैं।",
          voice: "एस टी पी ऊर्जा दो दशमलव एक आठ प्रति के एल, उन्नीस प्रतिशत नीचे; डब्ल्यू टी पी दो दशमलव छह, चवालीस ऊपर।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भ के सामने',
          body: "<strong>क्वालिटी पैरामीटर्स</strong> डैशबोर्ड को पूरा करते हैं। <strong>STP ट्रीटेड वॉटर टर्बिडिटी</strong> दिन भर चलकर <strong>11.86 NTU</strong> पर समाप्त होती है, और <strong>WTP रॉ वॉटर pH</strong> <strong>7</strong> पर है — उस कार्ड पर <strong>ref: 6.5-8.5</strong> लिखा है, यानी स्वीकार्य सीमा आँकड़े के साथ ही चलती है।",
          voice: "ट्रीटेड वॉटर टर्बिडिटी ग्यारह दशमलव नौ पर समाप्त, और रॉ वॉटर पी एच सात पर — कार्ड पर छपी संदर्भ सीमा के भीतर।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टोर क्या खर्च कर रहा है',
          body: "<strong>इन्वेंटरी</strong> स्टोर के हिसाब से उपभोग्य वस्तुएँ दिखाती है। <strong>प्लक्षा स्टोर</strong> में <strong>यूरिया</strong>, <strong>क्लोरीन बैलेंस</strong>, <strong>DAP</strong>, <strong>जैगरी</strong>, <strong>EM</strong>, <strong>लाइम</strong>, <strong>एलम</strong>, <strong>पॉली</strong>, <strong>बायोकल्चर</strong> और <strong>HCL</strong> — कुल पंद्रह वस्तुएँ। हर पंक्ति में <strong>स्टॉक अवेलेबल</strong>, <strong>लास्ट कंजम्पशन</strong>, और खपत की तुलना <strong>एक्चुअल</strong> बनाम <strong>एक्सपेक्टेड</strong> — वही कॉलम बताता है कि डोज़िंग भटक रही है या नहीं।",
          voice: "इन्वेंटरी हर केमिकल को स्टोर के हिसाब से दिखाती है — स्टॉक, पिछली खपत, और एक्चुअल बनाम एक्सपेक्टेड।",
        },
        {
          label: 'अलर्ट', title: 'सिस्टम खुद उठाने वाले अलर्ट',
          body: "<strong>टिकट</strong> वह जगह है जहाँ प्लेटफ़ॉर्म के अपने निष्कर्ष आते हैं — ये डेटा से स्वतः उठते हैं, कोई टाइप नहीं करता। <strong>6 खुले</strong>, छहों <strong>ओवरड्यू</strong> और <strong>एस्केलेटेड</strong>, और <strong>25 बंद</strong>। टीम के हिसाब से पूरा काम <strong>प्रोसेस</strong> के नीचे है: <strong>5 खुले</strong> और <strong>18 बंद</strong>। पंक्तियाँ अलर्ट जैसी लगती हैं क्योंकि वे हैं ही — हॉस्टलों और ब्लॉकों में टैंक स्तर 90% पहुँचना, एक फीड पंप ऑटो मोड से बाहर — हर एक पर <strong>ऑटोमैटिक</strong> टैग और अपना <strong>एस्केलेशन लेवल</strong>।",
          voice: "छह खुले टिकट और पच्चीस बंद, सभी स्वतः उठे — टैंक स्तर नब्बे प्रतिशत, एक फीड पंप ऑटो मोड से बाहर।",
        },
        {
          label: 'विवरण', title: 'टिकट के भीतर',
          body: "कोई टिकट खोलिए और पूरी कहानी मिलती है: <strong>प्रॉब्लम</strong> — <em>“क्लियर वॉटर टैंक का स्तर 90% पहुँच गया है”</em> — और <strong>डिस्क्रिप्शन</strong> जो ऑपरेटर को ठीक-ठीक बताता है कि क्या करना है, यहाँ इनलेट बायपास करें या ट्रांसफ़र दर बढ़ाएँ जब तक स्तर 60% पर न आ जाए। <strong>हिस्ट्री</strong> कॉलम ऑडिट ट्रेल है, और इस टिकट पर वह गहरा है: <strong>4059 में से 20</strong> प्रविष्टियाँ, हर पुनरावृत्ति समय सहित। दोबारा हो तो <strong>रीओपन</strong>।",
          voice: "हर टिकट में समस्या, लागू करने योग्य उपाय, और इतिहास होता है — इसमें चार हज़ार प्रविष्टियाँ हैं, हर पुनरावृत्ति समय सहित।",
        },
        {
          label: 'नया टिकट', title: 'खुद भी उठाइए',
          body: "<strong>क्रिएट न्यू टिकट</strong> मैनुअल रास्ता है: एक <strong>प्रॉब्लम स्टेटमेंट</strong>, वैकल्पिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>प्लांट</strong>, <strong>इक्विपमेंट</strong> और एक <strong>इशू टाइप</strong>। इसी कारण पंक्तियों पर <strong>ऑटोमैटिक</strong> या <strong>मैनुअल</strong> टैग लगता है — अधिकतर सिस्टम डेटा से उठाता है, बाकी आपकी टीम।",
          voice: "क्रिएट न्यू टिकट में प्रॉब्लम स्टेटमेंट, प्लांट, इक्विपमेंट और इशू टाइप भरते हैं — इसीलिए हर टिकट ऑटोमैटिक या मैनुअल होता है।",
        },
        {
          label: 'एनालिटिक्स', title: 'एनालिटिक्स — STP गहराई में',
          body: "<strong>प्लक्षा एनालिटिक्स</strong> गहरा पेज है, आपके सवाल के हिसाब से समूहित। <strong>STP</strong> पेज पर <strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong> में चारों टैंकों का <strong>टैंक लेवल</strong> है — <strong>EQT 80.88</strong>, <strong>CCT 68.39</strong>, <strong>TWT 49.12</strong>, <strong>SHT 33.41</strong> — साथ में <strong>STP आउटलेट फ़्लो</strong>, <strong>फ़्लो मीटर्स</strong>, और एक <strong>वॉटर वॉल्यूम इन टैंक्स</strong> कार्ड जो उन प्रतिशतों को हर टैंक की क्षमता के सामने किलोलीटर में बदल देता है।",
          voice: "एनालिटिक्स एस टी पी को सवाल के हिसाब से बाँटता है — टैंक स्तर, आउटलेट फ़्लो, फ़्लो मीटर, और हर टैंक में पानी की मात्रा।",
        },
        {
          label: 'उपकरण', title: 'क्या चला, और कितनी देर',
          body: "<strong>इक्विपमेंट परफ़ॉर्मेंस एंड मेंटेनेंस</strong> <strong>इक्विपमेंट रनिंग ऑवर्स</strong> से शुरू होता है — <strong>STP ब्लोअर-1</strong> <strong>12</strong> घंटे और <strong>ब्लोअर-2</strong> <strong>11.9</strong>, यानी साफ़ बँटवारा; दोनों <strong>FMR फीड पंप</strong> <strong>0</strong> पर; <strong>फ़िल्टर फीड पंप-2</strong> <strong>10.27</strong> पर जबकि पंप 1 खाली बैठा रहा। बगल में हर मशीन एक-या-शून्य रेखा में, <strong>हेडर</strong> व <strong>MGF-ACF प्रेशर</strong>, और <strong>ऑटो/मैनुअल</strong> व <strong>ट्रिप स्टेटस</strong> सूचियाँ।",
          voice: "रनिंग ऑवर्स बताते हैं क्या चला — दोनों ब्लोअर भार बाँटते हुए, एक फ़िल्टर फीड पंप दस घंटे जबकि दूसरा खाली।",
        },
        {
          label: 'WTP', title: 'दो पेज: STP और WTP',
          body: "एनालिटिक्स का <strong>पेज</strong> सिलेक्टर दोनों प्लांट रखता है। <strong>WTP</strong> पर जाएँ और वही ढाँचा जल-शोधन की ओर दिखता है: <strong>टैंक लेवल्स</strong> में <strong>रॉ वॉटर</strong>, <strong>रेन वॉटर</strong> और <strong>डोमेस्टिक</strong> टैंक, और एक <strong>फ़्लो मीटर</strong> कार्ड जिसमें <strong>WTP आउटलेट फ़्लोमीटर-1</strong> <strong>211</strong>, <strong>-2</strong> <strong>145</strong> और <strong>इनलेट टोटलाइज़र</strong> <strong>103.65</strong>, नीचे पानी की गुणवत्ता।",
          voice: "पेज सिलेक्टर दोनों प्लांट रखता है। डब्ल्यू टी पी पर वही ढाँचा — रॉ, रेन और डोमेस्टिक टैंक, साथ में आउटलेट फ़्लोमीटर।",
        },
        {
          label: 'सारांश', title: 'किस काम के लिए कौन-सा पेज',
          body: "तो: दिन के लिए <strong>डैशबोर्ड</strong> — हर मीटर, टैंक, ऊर्जा और गुणवत्ता एक ही स्क्रॉल में। किसी आँकड़े के पीछे की प्रक्रिया चाहिए तो <strong>एनालिटिक्स</strong>, उसके <strong>STP</strong> और <strong>WTP</strong> पेजों पर। सिस्टम जो संकेत दे रहा है उसके लिए <strong>टिकट</strong>। स्टोर की खपत के लिए <strong>इन्वेंटरी</strong>। एक पेज सिलेक्टर, एक ग्रैन्युलैरिटी, एक समय सीमा — बाकी सब पीछे-पीछे।",
          voice: "दिन के लिए डैशबोर्ड, प्रक्रिया के लिए एनालिटिक्स, संकेतों के लिए टिकट, स्टोर के लिए इन्वेंटरी। एक सीमा, और बाकी सब मागोमाग।",
        },
      ],
    },
    ta: {
      title: 'பிளக்ஷா,<br><em>முழு வளாகமும் ஒரே திரையில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் நடைமுறைச் சுற்றுப்பயணம் — டாஷ்போர்டு விரிவாக, அதன் பின்னுள்ள டிக்கெட்டுகளும் இருப்பும், மற்றும் STP, WTP ஆழத்தில்.',
      chapter: 'டெமோ · பிளக்ஷா',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, எல்லாத் திரைகளும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது; உங்கள் ஒவ்வொரு திரையும் அங்கே: <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>டிக்கெட்ஸ்</strong>, <strong>டாஸ்க் லிஸ்ட்</strong>, பிறகு <strong>பிளக்ஷா வொர்க்ஸ்பேஸ்</strong>, மற்றும் <strong>பிளக்ஷா</strong> — அதை விரித்தால் அனலிட்டிக்ஸ் பக்கங்கள். மேலுள்ள <strong>தேடல்</strong> பெட்டி எதற்கும் நேரடியாகக் கொண்டு செல்லும்.",
          voice: "எல்லாம் இந்த மெனுவில் இருந்தே — டாஷ்போர்டு, இன்வென்டரி, டிக்கெட்ஸ், டாஸ்க் லிஸ்ட், வொர்க்ஸ்பேஸ், மற்றும் பிளக்ஷாவின் அனலிட்டிக்ஸ்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>வாட்டர் மேனேஜ்மென்ட் மைக்ரேட்டட்</strong> பக்கத்தில் திறக்கிறது. கீழுள்ள அனைத்தும் மூன்று கட்டுப்பாடுகளால் இயங்குகின்றன: <strong>பேஜ்</strong> தேர்வி, <strong>கிரானுலாரிட்டி</strong>, மற்றும் <strong>ஃப்ரம்</strong>–<strong>டு</strong> வரம்பு. வலதுபுறம் AI இன்சைட்டுக்கான <strong>ஸ்பார்க்கிள்</strong>, <strong>ரிஃப்ரெஷ்</strong>, முழுப் பக்கத்துக்கும் ஒரு <strong>டவுன்லோட்</strong>, அமைப்புகளுக்கு <strong>கியர்</strong>, தளவமைப்பை நிர்வகிக்கும் <strong>கிரிட்</strong>.",
          voice: "பேஜ் தேர்வி, கிரானுலாரிட்டி, கால வரம்பு — இவை ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. அருகில் AI இன்சைட், ரிஃப்ரெஷ், முழுப் பக்கப் பதிவிறக்கம்.",
        },
        {
          label: 'கிரானுலாரிட்டி', title: 'நிமிடங்கள், மணிகள் அல்லது நாட்கள்',
          body: "வரம்பைச் சொடுக்கினால் தேர்வி திறக்கிறது: <strong>டுடே</strong>, <strong>யெஸ்டர்டே</strong>, <strong>லாஸ்ட் 24 அவர்ஸ்</strong>, மூன்று, ஏழு, பத்து அல்லது முப்பது நாட்கள், <strong>3</strong> அல்லது <strong>6 மாதங்கள்</strong>, அல்லது <strong>கஸ்டம்</strong>. <strong>கிரானுலாரிட்டி</strong> நீங்கள் தேர்ந்த காலத்தைப் பின்தொடர்கிறது — ஒரு நாளுக்கு <strong>நிமிடம்</strong>, <strong>மணி</strong>, <strong>நாள்</strong>; ஒரு மாதத்துக்கு <strong>நாட்கள்</strong> மற்றும் <strong>வாரங்கள்</strong> — மேலும் <strong>ஸ்மார்ட் அவர்ஸ்</strong> ஒரே நாளாந்திர நேரப் பகுதியை ஒவ்வொரு தேதிக்கும் பொருத்துகிறது.",
          voice: "இன்று முதல் ஆறு மாதம் வரை முன்னமைவுகள். கிரானுலாரிட்டி காலத்தைப் பின்தொடரும் — ஒரு நாளுக்கு நிமிடம், ஒரு மாதத்துக்கு வாரம்.",
        },
        {
          label: 'மீட்டர்', title: 'வளாகத்தின் ஒவ்வொரு மீட்டரும்',
          body: "<strong>வாட்டர் குவாண்டிட்டி அண்ட் அவைலபிலிட்டி</strong> வளாகத்தை மீட்டர்களில் வைக்கிறது. <strong>ஓவரால் சம்மரி</strong> தேர்ந்த காலத்தின் நுகர்வைச் சுமக்கிறது — <strong>GMADA இன்லெட்</strong>, <strong>போர்வெல்</strong>, இரு <strong>WTP அவுட்லெட்</strong>கள், ஒவ்வொரு பிளாக்கும் — <strong>ஃப்ளோமீட்டர் ரா டேட்டா</strong> அதே மீட்டர்களைத் திரட்டு மொத்தமாகக் காட்டுகிறது. அருகில் <strong>கேர்ள்ஸ் ஹாஸ்டல்</strong>, <strong>அகடமிக் பிளாக் 1</strong>, <strong>2</strong>, <strong>யூட்டிலிட்டி பிளாக்</strong>, <strong>STP இன்லெட்</strong>, <strong>அவுட்லெட்</strong> — ஒவ்வொன்றுக்கும் தனி அட்டை.",
          voice: "ஓவரால் சம்மரி காலத்தின் நுகர்வைத் தரும், ரா டேட்டா திரட்டு மொத்தத்தை; ஒவ்வொரு விடுதிக்கும் பிளாக்குக்கும் தனி அட்டை.",
        },
        {
          label: 'விட்ஜெட்', title: 'பதிவிறக்கு, அல்லது மீண்டும் வரை',
          body: "ஒவ்வொரு விட்ஜெட்டிலும் அதே கருவிகள் ஹோவரில்: <strong>டவுன்லோட் CSV</strong>, <strong>எக்ஸ்பாண்டட் வியூ</strong>, வரைபட வகை மெனு, <strong>எடிட் விட்ஜெட்</strong>, ஒரு <strong>info</strong> குறிப்பு. மேலே அமைத்த வரம்புக்கே CSV இறங்குகிறது, எனவே ஒரு மீட்டரின் ஒரு மாதம் இரண்டு சொடுக்குகள் — மேலும் பக்கத் தலைப்பிலுள்ள <strong>டவுன்லோட்</strong> பொத்தான் முழு டாஷ்போர்டையும் ஒரே சமயம் எடுக்கும்.",
          voice: "எந்த விட்ஜெட்டிலும் ஹோவர் செய்யுங்கள் — பதிவிறக்கம், விரிவாக்கம், வரைபட வகை, திருத்தம். மேலே அமைத்த வரம்புக்கே CSV இறங்கும்.",
        },
        {
          label: 'விரிவாக்கம்', title: 'பெரிதாக்கி, காட்சியைச் சேமியுங்கள்',
          body: "<strong>எக்ஸ்பாண்டட் வியூ</strong> விட்ஜெட்டை முழு அகலத்தில் காட்டுகிறது — இங்கே ஒரு முழு நாளின் <strong>கேர்ள்ஸ் ஹாஸ்டல் டேங்க் லெவல்ஸ்</strong> நிமிடத் தெளிவில். லெஜெண்டைச் சொடுக்கி ஒரு தொடரை நீக்குங்கள்: <strong>டொமஸ்டிக் டேங்க் - 1</strong> கோடிடப்பட்டுள்ளது, எனவே <strong>ஃப்ளஷிங் டேங்க் - 1</strong> மட்டும், <strong>78.1</strong>-இல் முடிகிறது. இழுத்துப் பெரிதாக்கி <strong>ரீசெட் ஸூம்</strong> மூலம் திரும்புங்கள்; காட்சி வைத்திருக்கத் தகுந்ததானால் <strong>சேவ் கரண்ட் வியூ</strong> பட்டை <strong>சேவ்</strong> அல்லது <strong>சேவ் ஆஸ்</strong> தரும்.",
          voice: "விட்ஜெட்டை விரிவாக்கி, லெஜெண்டைச் சொடுக்கி ஒரு தொடரை நீக்கி, இழுத்துப் பெரிதாக்குங்கள். சேவ் கரண்ட் வியூ தளவமைப்பை வைத்திருக்கும்.",
        },
        {
          label: 'சுருக்கம்', title: 'முழு வளாகமும் ஒரே அட்டவணையில்',
          body: "விரிவாக்கினால் <strong>ஓவரால் சம்மரி</strong> முழு வளாகத்தையும் ஒரே பட்டியலில் படிக்கிறது: <strong>GMADA இன்லெட் 103.65</strong>, <strong>போர்வெல் 308.38</strong>, <strong>WTP அவுட்லெட்-1 210.00</strong>, <strong>-2 145.00</strong>, பிறகு <strong>அகடமிக் பிளாக் 1</strong>, <strong>2</strong> ஃப்ளஷிங்–டொமஸ்டிக் எனப் பிரிந்து, கீழே <strong>DR-2</strong>. ஒரே காலம், ஒவ்வொரு மீட்டரும், நீங்கள் படிக்கும் வரிசையிலேயே.",
          voice: "விரிவாக்கினால் ஓவரால் சம்மரி முழு வளாகத்தையும் ஒரே பட்டியலில் படிக்கிறது — இன்லெட், போர்வெல், இரு அவுட்லெட், பிறகு ஒவ்வொரு பிளாக்கும்.",
        },
        {
          label: 'மொத்தம்', title: 'வந்தது, சுத்திகரித்தது, பயன்பட்டது',
          body: "மூன்று அட்டைகள் காலத்தின் கணக்கை முடிக்கின்றன: <strong>டோட்டல் வாட்டர் இன்லெட் 412.03 KL</strong>, <strong>வாட்டர் ப்ராசஸ்டு 355 KL</strong>, <strong>வாட்டர் கன்சூம்டு 320.97 KL</strong> — ஒவ்வொன்றிலும் அது உள்ளடக்கிய சரியான காலம். அதுவே வளாகத்தின் நீர் சமநிலை — எவ்வளவு வந்தது, ஆலைகள் எவ்வளவு சுத்திகரித்தன, கட்டிடங்கள் உண்மையில் எவ்வளவு எடுத்தன.",
          voice: "மொத்த உள்வரவு நானூற்று பன்னிரண்டு கே எல், சுத்திகரிப்பு முந்நூற்று ஐம்பத்தைந்து, பயன்பாடு முந்நூற்று இருபத்தொன்று.",
        },
        {
          label: 'தொட்டிகள்', title: 'வளாகத்தின் ஒவ்வொரு தொட்டியும்',
          body: "<strong>STP அவுட்லெட்</strong> தொட்டிகளின் நேரலைப் படத்தைத் திறக்கிறது. <strong>கேர்ள்ஸ் ஹாஸ்டல்</strong> ஃப்ளஷிங் <strong>78.1%</strong>, டொமஸ்டிக் <strong>80%</strong>; <strong>பாய்ஸ் ஹாஸ்டல்</strong> <strong>70.7</strong>, <strong>42.1</strong>; <strong>அகடமிக் பிளாக் 1 & 2</strong> நான்கு தொட்டிகளையும் ஒரே வரைபடத்தில், <strong>100</strong> முதல் <strong>54.6</strong> வரை; <strong>யூட்டிலிட்டி பிளாக்</strong> தன் லெவல் சென்சார்களை எண்களாகப் பட்டியலிடுகிறது.",
          voice: "கேர்ள்ஸ், பாய்ஸ் விடுதிகள், இரு அகடமிக் பிளாக்குகள், யூட்டிலிட்டி பிளாக் — ஒவ்வொரு தொட்டியும் நேரலையில்.",
        },
        {
          label: 'வரம்பு', title: 'தொட்டி வரம்பைத் தாண்டும்போது',
          body: "ஒவ்வொரு பிளாக் தொட்டிக்கும் தனி வரைபடம்: <strong>A3</strong> <strong>96</strong>, <strong>89</strong>; <strong>A4</strong> <strong>89</strong>, <strong>65</strong>. கவனிக்க வேண்டியது <strong>ஆடிட்டோரியம்</strong> — அதன் டொமஸ்டிக் தொட்டி <strong>112</strong>, பாதுகாப்பான வரம்புக்கு மேல் இளஞ்சிவப்புப் பட்டையில்; ஃப்ளஷிங் <strong>98</strong>. பட்டை வரைபடத்துடனேயே பயணிப்பதால், நிரம்பி வழிவது எதையும் சரிபார்க்காமலே தெரியும்.",
          voice: "ஒவ்வொரு பிளாக் தொட்டிக்கும் தனி வரைபடம். ஆடிட்டோரியம் டொமஸ்டிக் தொட்டி நூற்றுப் பன்னிரண்டு, பாதுகாப்பான வரம்புக்கு மேல்.",
        },
        {
          label: 'ஆற்றல்', title: 'சுத்திகரிப்பின் செலவு',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> மின் பயன்பாட்டைச் சுத்திகரித்த நீருடன் இணைக்கிறது — <strong>STP</strong>, <strong>WTP</strong> அருகருகே. <strong>STP எனர்ஜி பர் KL</strong> <strong>2.18</strong>, <strong>19% குறைவு</strong>; <strong>WTP எனர்ஜி பர் KL</strong> <strong>2.6</strong>, <strong>44% அதிகம்</strong> — மொத்தம் மட்டுமல்ல, ஒரு அலகு நீருக்கான செலவு. இப்பகுதி மேலுள்ள வரம்பைப் பின்பற்றுவதால், அதே அட்டைகள் நாள், வாரம், மாதத்தைப் படிக்கும்.",
          voice: "எஸ் டி பி ஆற்றல் ஒரு கே எல்லுக்கு இரண்டு புள்ளி ஒன்று எட்டு, பத்தொன்பது சதவீதம் குறைவு; டபிள்யூ டி பி இரண்டு புள்ளி ஆறு.",
        },
        {
          label: 'தரம்', title: 'தரம், குறிப்புக்கு எதிராக',
          body: "<strong>குவாலிட்டி பாராமீட்டர்ஸ்</strong> டாஷ்போர்டை நிறைவு செய்கிறது. <strong>STP ட்ரீட்டட் வாட்டர் டர்பிடிட்டி</strong> நாள் முழுவதும் சென்று <strong>11.86 NTU</strong>-இல் முடிகிறது; <strong>WTP ரா வாட்டர் pH</strong> <strong>7</strong> — அந்த அட்டையில் <strong>ref: 6.5-8.5</strong> எனக் குறிக்கப்பட்டுள்ளது, எனவே ஏற்கத்தக்க வரம்பு எண்ணுடனேயே பயணிக்கிறது.",
          voice: "சுத்திகரித்த நீரின் கலங்கல் பதினொன்று புள்ளி ஒன்பதில் முடிகிறது, மூல நீரின் பி எச் ஏழு — அட்டையில் அச்சிட்ட வரம்புக்குள்.",
        },
        {
          label: 'இருப்பு', title: 'ஸ்டோர் என்ன செலவழிக்கிறது',
          body: "<strong>இன்வென்டரி</strong> நுகர்பொருட்களை ஸ்டோர் வாரியாகப் பட்டியலிடுகிறது. <strong>பிளக்ஷா ஸ்டோர்</strong>-இல் <strong>யூரியா</strong>, <strong>குளோரின் பேலன்ஸ்</strong>, <strong>DAP</strong>, <strong>ஜாகரி</strong>, <strong>EM</strong>, <strong>லைம்</strong>, <strong>ஆலம்</strong>, <strong>பாலி</strong>, <strong>பயோகல்சர்</strong>, <strong>HCL</strong> — மொத்தம் பதினைந்து. ஒவ்வொரு வரிசையிலும் <strong>ஸ்டாக் அவைலபிள்</strong>, <strong>லாஸ்ட் கன்சம்ப்ஷன்</strong>, நுகர்வு <strong>ஆக்சுவல்</strong> எதிராக <strong>எக்ஸ்பெக்டட்</strong> — டோசிங் விலகுகிறதா எனச் சொல்லும் நெடுவரிசை.",
          voice: "இன்வென்டரி ஒவ்வொரு ரசாயனத்தையும் ஸ்டோர் வாரியாகக் காட்டுகிறது — இருப்பு, கடைசி நுகர்வு, ஆக்சுவல் எதிராக எக்ஸ்பெக்டட்.",
        },
        {
          label: 'எச்சரிக்கை', title: 'அமைப்பே எழுப்பும் எச்சரிக்கைகள்',
          body: "<strong>டிக்கெட்ஸ்</strong>-இல் தளத்தின் சொந்தக் கண்டறிதல்கள் வந்து சேர்கின்றன — இவை தரவிலிருந்து தானாக எழுபவை, யாரோ தட்டச்சு செய்தவை அல்ல. <strong>6 திறந்தவை</strong>, ஆறுமே <strong>ஓவர்டியூ</strong> மற்றும் <strong>எஸ்கலேட்டட்</strong>; <strong>25 மூடப்பட்டவை</strong>. குழுவாரியாக முழு வேலையும் <strong>ப்ராசஸ்</strong>-இல்: <strong>5 திறந்தவை</strong>, <strong>18 மூடப்பட்டவை</strong>. வரிசைகள் எச்சரிக்கைகள் போலவே படிக்கின்றன — விடுதிகளிலும் பிளாக்குகளிலும் தொட்டி அளவு 90% எட்டுவது, ஒரு ஃபீட் பம்ப் ஆட்டோ மோடில் இல்லாதது.",
          voice: "ஆறு திறந்த டிக்கெட்டுகள், இருபத்தைந்து மூடப்பட்டவை — அனைத்தும் தானாக எழுந்தவை: தொட்டி அளவு தொண்ணூறு சதவீதம், ஒரு பம்ப் ஆட்டோவில் இல்லை.",
        },
        {
          label: 'விவரம்', title: 'ஒரு டிக்கெட்டின் உள்ளே',
          body: "ஒன்றைத் திறந்தால் முழுக் கதையும்: <strong>ப்ராப்ளம்</strong> — <em>“க்ளியர் வாட்டர் டேங்க் அளவு 90% எட்டிவிட்டது”</em> — மற்றும் ஆபரேட்டர் என்ன செய்ய வேண்டும் எனச் சொல்லும் <strong>டெஸ்கிரிப்ஷன்</strong>: இன்லெட்டை பைபாஸ் செய்யவும் அல்லது மாற்று விகிதத்தை உயர்த்தவும், அளவு 60%-க்குத் திரும்பும் வரை. <strong>ஹிஸ்டரி</strong> நெடுவரிசை தணிக்கைத் தடம்; இதில் <strong>4059-இல் 20</strong> பதிவுகள், ஒவ்வொரு மறுநிகழ்வும் நேரமுத்திரையுடன். திரும்பினால் <strong>ரீஓபன்</strong>.",
          voice: "ஒவ்வொரு டிக்கெட்டிலும் பிரச்சினை, செய்ய வேண்டியது, வரலாறு — இதில் நான்காயிரம் பதிவுகள், ஒவ்வொரு மறுநிகழ்வும் நேரமுத்திரையுடன்.",
        },
        {
          label: 'உருவாக்கு', title: 'நீங்களே ஒன்றை எழுப்புங்கள்',
          body: "<strong>க்ரியேட் நியூ டிக்கெட்</strong> கைமுறை வழி: ஒரு <strong>ப்ராப்ளம் ஸ்டேட்மென்ட்</strong>, விருப்பமான <strong>டெஸ்கிரிப்ஷன்</strong>, சம்பந்தப்பட்ட <strong>பிளான்ட்</strong>, <strong>இக்விப்மென்ட்</strong>, ஒரு <strong>இஷ்யூ டைப்</strong>. அதனால்தான் வரிசைகளில் <strong>ஆட்டோமேட்டிக்</strong> அல்லது <strong>மேனுவல்</strong> டேக் — பெரும்பாலானவற்றை அமைப்பு தரவிலிருந்து எழுப்புகிறது, மீதியை உங்கள் குழு.",
          voice: "க்ரியேட் நியூ டிக்கெட் ப்ராப்ளம் ஸ்டேட்மென்ட், பிளான்ட், இக்விப்மென்ட், இஷ்யூ டைப் கேட்கிறது — அதனால்தான் ஆட்டோமேட்டிக் அல்லது மேனுவல்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'அனலிட்டிக்ஸ் — STP ஆழத்தில்',
          body: "<strong>பிளக்ஷா அனலிட்டிக்ஸ்</strong> ஆழமான பக்கம், கேள்வி வாரியாகத் தொகுக்கப்பட்டது. <strong>STP</strong> பக்கத்தில் <strong>வாட்டர் குவாண்டிட்டி அண்ட் அவைலபிலிட்டி</strong>-இல் நான்கு தொட்டிகளின் <strong>டேங்க் லெவல்</strong> — <strong>EQT 80.88</strong>, <strong>CCT 68.39</strong>, <strong>TWT 49.12</strong>, <strong>SHT 33.41</strong> — உடன் <strong>STP அவுட்லெட் ஃப்ளோ</strong>, <strong>ஃப்ளோ மீட்டர்ஸ்</strong>, மற்றும் அந்த சதவீதங்களை ஒவ்வொரு தொட்டியின் கொள்ளளவுக்கு எதிராகக் கிலோலிட்டராக மாற்றும் <strong>வாட்டர் வால்யூம் இன் டேங்க்ஸ்</strong> அட்டை.",
          voice: "அனலிட்டிக்ஸ் எஸ் டி பி-ஐக் கேள்வி வாரியாகப் பிரிக்கிறது — தொட்டி அளவு, அவுட்லெட் ஓட்டம், ஃப்ளோ மீட்டர், ஒவ்வொரு தொட்டியிலும் நீரின் அளவு.",
        },
        {
          label: 'உபகரணம்', title: 'எது ஓடியது, எவ்வளவு நேரம்',
          body: "<strong>இக்விப்மென்ட் பெர்ஃபார்மன்ஸ் அண்ட் மெயின்டெனன்ஸ்</strong> <strong>இக்விப்மென்ட் ரன்னிங் அவர்ஸ்</strong>-உடன் தொடங்குகிறது — <strong>STP ப்ளோயர்-1</strong> <strong>12</strong> மணி, <strong>ப்ளோயர்-2</strong> <strong>11.9</strong>, சுத்தமான பங்கீடு; இரு <strong>FMR ஃபீட் பம்ப்</strong>களும் <strong>0</strong>; <strong>ஃபில்டர் ஃபீட் பம்ப்-2</strong> <strong>10.27</strong>, பம்ப் 1 ஓயாமல் நின்றது. அருகில் ஒவ்வொரு இயந்திரமும் ஒன்று-அல்லது-பூஜ்ஜியக் கோடாக, <strong>ஹெடர்</strong> மற்றும் <strong>MGF-ACF ப்ரஷர்</strong>, <strong>ஆட்டோ/மேனுவல்</strong>, <strong>ட்ரிப் ஸ்டேட்டஸ்</strong> பட்டியல்கள்.",
          voice: "ரன்னிங் அவர்ஸ் எது ஓடியது எனச் சொல்லும் — இரு ப்ளோயர்களும் சுமையைப் பகிர, ஒரு ஃபில்டர் ஃபீட் பம்ப் பத்து மணி, மற்றொன்று ஓய்வில்.",
        },
        {
          label: 'WTP', title: 'இரு பக்கங்கள்: STP மற்றும் WTP',
          body: "அனலிட்டிக்ஸின் <strong>பேஜ்</strong> தேர்வி இரு ஆலைகளையும் வைத்திருக்கிறது. <strong>WTP</strong>-க்கு மாறினால் அதே வடிவம் நீர்ச் சுத்திகரிப்புப் பக்கத்துக்கு: <strong>டேங்க் லெவல்ஸ்</strong>-இல் <strong>ரா வாட்டர்</strong>, <strong>ரெயின் வாட்டர்</strong>, <strong>டொமஸ்டிக்</strong> தொட்டிகள்; <strong>ஃப்ளோ மீட்டர்</strong> அட்டையில் <strong>WTP அவுட்லெட் ஃப்ளோமீட்டர்-1</strong> <strong>211</strong>, <strong>-2</strong> <strong>145</strong>, <strong>இன்லெட் டோட்டலைசர்</strong> <strong>103.65</strong>, கீழே நீர்த் தரம்.",
          voice: "பேஜ் தேர்வி இரு ஆலைகளையும் வைத்திருக்கிறது. டபிள்யூ டி பி-இல் அதே வடிவம் — ரா, ரெயின், டொமஸ்டிக் தொட்டிகள், அருகில் அவுட்லெட் ஃப்ளோமீட்டர்கள்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "எனவே: நாளுக்கு <strong>டாஷ்போர்டு</strong> — ஒவ்வொரு மீட்டர், தொட்டிகள், ஆற்றல், தரம் ஒரே ஸ்க்ரோலில். ஓர் எண்ணுக்குப் பின்னுள்ள செயல்முறை வேண்டுமெனில் <strong>அனலிட்டிக்ஸ்</strong>, அதன் <strong>STP</strong> மற்றும் <strong>WTP</strong> பக்கங்களில். அமைப்பு எதைச் சுட்டுகிறது என்பதற்கு <strong>டிக்கெட்ஸ்</strong>. ஸ்டோர் நுகர்வுக்கு <strong>இன்வென்டரி</strong>. ஒரு பேஜ் தேர்வி, ஒரு கிரானுலாரிட்டி, ஒரு வரம்பு — மற்றவை தொடரும்.",
          voice: "நாளுக்கு டாஷ்போர்டு, செயல்முறைக்கு அனலிட்டிக்ஸ், அமைப்பு சுட்டுவதற்கு டிக்கெட்ஸ், ஸ்டோருக்கு இன்வென்டரி.",
        },
      ],
    },
    mr: {
      title: 'प्लक्षा,<br><em>संपूर्ण कॅम्पस एका स्क्रीनवर.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा व्यावहारिक फेरफटका — डॅशबोर्ड सविस्तर, त्यामागची तिकिटे आणि इन्व्हेंटरी, आणि STP व WTP खोलात.',
      chapter: 'डेमो · प्लक्षा',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेन्यू, प्रत्येक स्क्रीन',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो आणि तुमची प्रत्येक स्क्रीन तिथेच आहे: <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>तिकिटे</strong> आणि <strong>टास्क लिस्ट</strong>, मग <strong>प्लक्षा वर्कस्पेस</strong>, आणि स्वतः <strong>प्लक्षा</strong> — तो उघडल्यास अॅनालिटिक्स पाने मिळतात. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "सर्व काही याच मेन्यूतून — डॅशबोर्ड, इन्व्हेंटरी, तिकिटे, टास्क लिस्ट, वर्कस्पेस, आणि प्लक्षासोबत त्याचे अॅनालिटिक्स.",
        },
        {
          label: 'नियंत्रणे', title: 'पान चालवणारी नियंत्रणे',
          body: "<strong>डॅशबोर्ड</strong> <strong>वॉटर मॅनेजमेंट मायग्रेटेड</strong> पानावर उघडतो. खालचे सर्व तीन नियंत्रणांनी चालते: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong>, आणि <strong>फ्रॉम</strong>–<strong>टू</strong> कालमर्यादा. उजवीकडे AI इनसाइटसाठी <strong>स्पार्कल</strong>, <strong>रिफ्रेश</strong>, संपूर्ण पानासाठी <strong>डाउनलोड</strong>, सेटिंग्जसाठी <strong>गिअर</strong>, आणि मांडणी सांभाळणारा <strong>ग्रिड</strong>.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा प्रत्येक विजेट चालवतात. शेजारी AI इनसाइट, रिफ्रेश, आणि संपूर्ण पानाचा डाउनलोड.",
        },
        {
          label: 'ग्रॅन्युलॅरिटी', title: 'मिनिटे, तास किंवा दिवस',
          body: "कालमर्यादेवर क्लिक केल्यास पिकर उघडतो: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 अवर्स</strong>, तीन, सात, दहा किंवा तीस दिवस, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा <strong>कस्टम</strong>. <strong>ग्रॅन्युलॅरिटी</strong> तुम्ही निवडलेल्या कालावधीनुसार बदलते — एका दिवसासाठी <strong>मिनिटे</strong>, <strong>तास</strong>, <strong>दिवस</strong>; महिन्यासाठी <strong>दिवस</strong> आणि <strong>आठवडे</strong> — आणि <strong>स्मार्ट अवर्स</strong> तोच दैनिक वेळखंड प्रत्येक तारखेला लावते.",
          voice: "आजपासून सहा महिन्यांपर्यंतचे प्रीसेट. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते — दिवसासाठी मिनिटे व तास, महिन्यासाठी आठवडे.",
        },
        {
          label: 'मीटर', title: 'कॅम्पसमधील प्रत्येक मीटर',
          body: "<strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong> संपूर्ण कॅम्पस मीटरमध्ये मांडते. <strong>ओव्हरऑल समरी</strong> निवडलेल्या कालावधीचा वापर दाखवते — <strong>GMADA इनलेट</strong>, <strong>बोअरवेल</strong>, दोन्ही <strong>WTP आउटलेट</strong> आणि प्रत्येक ब्लॉक — तर <strong>फ्लोमीटर रॉ डेटा</strong> तेच मीटर संचयी बेरजेत दाखवतो. शेजारी <strong>गर्ल्स हॉस्टेल</strong>, <strong>अॅकॅडमिक ब्लॉक 1</strong> व <strong>2</strong>, <strong>युटिलिटी ब्लॉक</strong> आणि <strong>STP इनलेट</strong> व <strong>आउटलेट</strong> यांचे स्वतःचे कार्ड आहेत.",
          voice: "ओव्हरऑल समरी कालावधीचा वापर देते, रॉ डेटा संचयी बेरीज, आणि प्रत्येक हॉस्टेल व ब्लॉकचे स्वतःचे कार्ड आहे.",
        },
        {
          label: 'विजेट', title: 'डाउनलोड करा, किंवा पुन्हा काढा',
          body: "प्रत्येक विजेटवर हॉवर केल्यास तीच साधने येतात: <strong>डाउनलोड CSV</strong>, <strong>एक्सपांडेड व्ह्यू</strong>, चार्ट-टाइप मेन्यू, <strong>एडिट विजेट</strong>, आणि <strong>info</strong> टीप. CSV वरच्या मर्यादेसाठीच उतरते, त्यामुळे एका मीटरचा पूर्ण महिना दोन क्लिकवर — आणि पानाच्या शीर्षकातील <strong>डाउनलोड</strong> बटण संपूर्ण डॅशबोर्ड एकाच वेळी घेते.",
          voice: "कोणत्याही विजेटवर हॉवर करा — डाउनलोड, एक्सपांड, चार्ट टाइप, एडिट. CSV वरच्या मर्यादेसाठीच उतरते.",
        },
        {
          label: 'विस्तार', title: 'झूम करा, मग दृश्य जपा',
          body: "<strong>एक्सपांडेड व्ह्यू</strong> विजेटला पूर्ण रुंदी देतो — इथे संपूर्ण दिवसाचे <strong>गर्ल्स हॉस्टेल टँक लेव्हल्स</strong> मिनिट-पातळीवर. लेजंडवर क्लिक करून एखादी मालिका काढा: <strong>डोमेस्टिक टँक - 1</strong> खोडलेला आहे, त्यामुळे फक्त <strong>फ्लशिंग टँक - 1</strong> दिसतो, <strong>78.1</strong> वर संपतो. ओढून झूम करा, <strong>रीसेट झूम</strong>ने परत या, आणि दृश्य ठेवण्यासारखे असेल तर <strong>सेव्ह करंट व्ह्यू</strong> पट्टी <strong>सेव्ह</strong> किंवा <strong>सेव्ह अॅज</strong> देते.",
          voice: "विजेट उघडा, लेजंडवर क्लिक करून मालिका काढा, ओढून झूम करा. सेव्ह करंट व्ह्यू पुढच्या वेळेसाठी मांडणी ठेवते.",
        },
        {
          label: 'समरी', title: 'संपूर्ण कॅम्पस, एक तक्ता',
          body: "उघडल्यावर <strong>ओव्हरऑल समरी</strong> संपूर्ण कॅम्पस एका यादीत वाचते: <strong>GMADA इनलेट 103.65</strong>, <strong>बोअरवेल 308.38</strong>, <strong>WTP आउटलेट-1 210.00</strong> आणि <strong>-2 145.00</strong>, मग <strong>अॅकॅडमिक ब्लॉक 1</strong> व <strong>2</strong> फ्लशिंग-डोमेस्टिकमध्ये विभागलेले, आणि खाली <strong>DR-2</strong>. एक कालावधी, प्रत्येक मीटर, तुम्ही खरोखर वाचाल त्याच क्रमाने.",
          voice: "उघडल्यावर ओव्हरऑल समरी संपूर्ण कॅम्पस एका यादीत वाचते — इनलेट, बोअरवेल, दोन्ही आउटलेट, मग प्रत्येक ब्लॉक.",
        },
        {
          label: 'एकूण', title: 'आले, प्रक्रिया झाली, वापरले',
          body: "तीन कार्डे कालावधीचा हिशेब पूर्ण करतात: <strong>टोटल वॉटर इनलेट 412.03 KL</strong>, <strong>वॉटर प्रोसेस्ड 355 KL</strong> आणि <strong>वॉटर कन्झ्यूम्ड 320.97 KL</strong>, प्रत्येकावर त्याचा नेमका कालावधी. हेच कॅम्पसचे जल-संतुलन — किती आले, प्लांटने किती प्रक्रिया केली, आणि इमारतींनी प्रत्यक्षात किती घेतले.",
          voice: "एकूण इनलेट चारशे बारा के एल, प्रक्रिया तीनशे पंचावन्न, वापर तीनशे एकवीस — कॅम्पसचे संतुलन एका ओळीत.",
        },
        {
          label: 'टाक्या', title: 'कॅम्पसमधील प्रत्येक टाकी',
          body: "<strong>STP आउटलेट</strong> टाक्यांचे थेट चित्र उघडते. <strong>गर्ल्स हॉस्टेल</strong>मध्ये फ्लशिंग <strong>78.1%</strong> आणि डोमेस्टिक <strong>80%</strong>; <strong>बॉईज हॉस्टेल</strong> <strong>70.7</strong> व <strong>42.1</strong>; <strong>अॅकॅडमिक ब्लॉक 1 व 2</strong> चारही टाक्या एकाच चार्टवर, <strong>100</strong> पासून <strong>54.6</strong> पर्यंत; आणि <strong>युटिलिटी ब्लॉक</strong> आपले लेव्हल सेन्सर थेट आकड्यांत दाखवतो.",
          voice: "गर्ल्स हॉस्टेल, बॉईज हॉस्टेल, दोन्ही अॅकॅडमिक ब्लॉक आणि युटिलिटी ब्लॉक — प्रत्येक टाकी थेट.",
        },
        {
          label: 'मर्यादा', title: 'टाकी मर्यादा ओलांडते तेव्हा',
          body: "प्रत्येक ब्लॉक टाकीचा स्वतःचा चार्ट आहे: <strong>A3</strong> <strong>96</strong> व <strong>89</strong>, <strong>A4</strong> <strong>89</strong> व <strong>65</strong>. पाहण्यासारखे आहे <strong>ऑडिटोरियम</strong> — त्याची डोमेस्टिक टाकी <strong>112</strong> वाचते, सुरक्षित मर्यादेच्या वर गुलाबी पट्ट्यात, तर फ्लशिंग <strong>98</strong> वर. पट्टी चार्टसोबतच फिरते, त्यामुळे ओव्हरफिल कोणताही आकडा तपासल्याशिवाय दिसतो.",
          voice: "प्रत्येक ब्लॉक टाकीचा स्वतःचा चार्ट. ऑडिटोरियमची डोमेस्टिक टाकी एकशे बारा वाचते, सुरक्षित मर्यादेच्या वर.",
        },
        {
          label: 'ऊर्जा', title: 'प्रक्रियेचा खर्च',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> वापर आणि प्रक्रिया झालेले पाणी जोडते, <strong>STP</strong> व <strong>WTP</strong> शेजारी शेजारी. <strong>STP एनर्जी पर KL</strong> <strong>2.18</strong>, <strong>19% खाली</strong>; <strong>WTP एनर्जी पर KL</strong> <strong>2.6</strong>, <strong>44% वर</strong> — केवळ एकूण नव्हे, प्रति एकक पाण्याचा खर्च. हा भाग वरची मर्यादा पाळतो, त्यामुळे तीच कार्डे दिवस, आठवडा किंवा महिना वाचतात.",
          voice: "एस टी पी ऊर्जा प्रति के एल दोन पूर्णांक एक आठ, एकोणीस टक्के खाली; डब्ल्यू टी पी दोन पूर्णांक सहा, चव्वेचाळीस वर.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भाच्या तुलनेत',
          body: "<strong>क्वालिटी पॅरामीटर्स</strong> डॅशबोर्ड पूर्ण करतात. <strong>STP ट्रीटेड वॉटर टर्बिडिटी</strong> दिवसभर चालून <strong>11.86 NTU</strong> वर संपते, आणि <strong>WTP रॉ वॉटर pH</strong> <strong>7</strong> वर आहे — त्या कार्डावर <strong>ref: 6.5-8.5</strong> लिहिले आहे, म्हणजे स्वीकार्य पट्टा आकड्यासोबतच फिरतो.",
          voice: "ट्रीटेड वॉटर टर्बिडिटी अकरा पूर्णांक नऊवर संपते, आणि रॉ वॉटर पी एच सातवर — कार्डावर छापलेल्या संदर्भ पट्ट्यात.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'स्टोअर काय वापरते आहे',
          body: "<strong>इन्व्हेंटरी</strong> उपभोग्य वस्तू स्टोअरनुसार मांडते. <strong>प्लक्षा स्टोअर</strong>मध्ये <strong>युरिया</strong>, <strong>क्लोरीन बॅलन्स</strong>, <strong>DAP</strong>, <strong>जॅगरी</strong>, <strong>EM</strong>, <strong>लाइम</strong>, <strong>अॅलम</strong>, <strong>पॉली</strong>, <strong>बायोकल्चर</strong> आणि <strong>HCL</strong> — एकूण पंधरा वस्तू. प्रत्येक ओळीत <strong>स्टॉक अव्हेलेबल</strong>, <strong>लास्ट कन्झम्प्शन</strong>, आणि वापराची तुलना <strong>अॅक्च्युअल</strong> विरुद्ध <strong>एक्स्पेक्टेड</strong> — हाच स्तंभ डोसिंग भरकटते का ते सांगतो.",
          voice: "इन्व्हेंटरी प्रत्येक रसायन स्टोअरनुसार दाखवते — स्टॉक, शेवटचा वापर, आणि अॅक्च्युअल विरुद्ध एक्स्पेक्टेड.",
        },
        {
          label: 'अलर्ट', title: 'सिस्टम स्वतः उठवणारे अलर्ट',
          body: "<strong>तिकिटे</strong> इथे प्लॅटफॉर्मचे स्वतःचे निष्कर्ष येतात — ही डेटावरून आपोआप उठतात, कुणी टाइप करत नाही. <strong>6 खुली</strong>, सहाही <strong>ओव्हरड्यू</strong> आणि <strong>एस्कलेटेड</strong>, आणि <strong>25 बंद</strong>. संघानुसार संपूर्ण काम <strong>प्रोसेस</strong>खाली आहे: <strong>5 खुली</strong> आणि <strong>18 बंद</strong>. ओळी अलर्टसारख्या वाटतात कारण त्या तशाच आहेत — हॉस्टेल व ब्लॉकमध्ये टाकी पातळी 90% पोहोचणे, एक फीड पंप ऑटो मोडबाहेर — प्रत्येकावर <strong>ऑटोमॅटिक</strong> टॅग आणि स्वतःची <strong>एस्कलेशन लेव्हल</strong>.",
          voice: "सहा खुली तिकिटे आणि पंचवीस बंद, सर्व आपोआप उठलेली — टाकी पातळी नव्वद टक्के, एक फीड पंप ऑटो मोडबाहेर.",
        },
        {
          label: 'तपशील', title: 'तिकिटाच्या आत',
          body: "एखादे उघडा आणि पूर्ण कहाणी मिळते: <strong>प्रॉब्लेम</strong> — <em>“क्लियर वॉटर टँकची पातळी 90% झाली आहे”</em> — आणि ऑपरेटरने नेमके काय करायचे ते सांगणारे <strong>डिस्क्रिप्शन</strong>: इनलेट बायपास करा किंवा ट्रान्सफर दर वाढवा, पातळी 60% वर येईपर्यंत. <strong>हिस्टरी</strong> स्तंभ हा ऑडिट ट्रेल आहे, आणि या तिकिटावर तो खोल आहे: <strong>4059 पैकी 20</strong> नोंदी, प्रत्येक पुनरावृत्ती वेळेसह. पुन्हा आल्यास <strong>रीओपन</strong>.",
          voice: "प्रत्येक तिकिटात समस्या, करायचा उपाय आणि इतिहास असतो — यात चार हजार नोंदी आहेत, प्रत्येक पुनरावृत्ती वेळेसह.",
        },
        {
          label: 'नवे तिकीट', title: 'तुम्हीही एक उपस्थित करा',
          body: "<strong>क्रिएट न्यू तिकीट</strong> हा हाताने करण्याचा मार्ग: एक <strong>प्रॉब्लेम स्टेटमेंट</strong>, ऐच्छिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>प्लांट</strong>, <strong>इक्विपमेंट</strong> आणि एक <strong>इश्यू टाइप</strong>. म्हणूनच ओळींवर <strong>ऑटोमॅटिक</strong> किंवा <strong>मॅन्युअल</strong> टॅग असतो — बहुतांश सिस्टम डेटावरून उपस्थित करते, बाकी तुमचा संघ.",
          voice: "क्रिएट न्यू तिकीट प्रॉब्लेम स्टेटमेंट, प्लांट, इक्विपमेंट आणि इश्यू टाइप घेते — म्हणूनच प्रत्येक तिकीट ऑटोमॅटिक किंवा मॅन्युअल.",
        },
        {
          label: 'अॅनालिटिक्स', title: 'अॅनालिटिक्स — STP खोलात',
          body: "<strong>प्लक्षा अॅनालिटिक्स</strong> हे खोल पान, तुमच्या प्रश्नानुसार गटबद्ध. <strong>STP</strong> पानावर <strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong>मध्ये चारही टाक्यांची <strong>टँक लेव्हल</strong> आहे — <strong>EQT 80.88</strong>, <strong>CCT 68.39</strong>, <strong>TWT 49.12</strong>, <strong>SHT 33.41</strong> — सोबत <strong>STP आउटलेट फ्लो</strong>, <strong>फ्लो मीटर्स</strong>, आणि <strong>वॉटर व्हॉल्यूम इन टँक्स</strong> कार्ड जे त्या टक्केवारीचे प्रत्येक टाकीच्या क्षमतेच्या तुलनेत किलोलिटरमध्ये रूपांतर करते.",
          voice: "अॅनालिटिक्स एस टी पी ला प्रश्नानुसार गटबद्ध करते — टाकी पातळी, आउटलेट फ्लो, फ्लो मीटर, आणि प्रत्येक टाकीतील पाण्याचे प्रमाण.",
        },
        {
          label: 'उपकरणे', title: 'काय चालले, आणि किती वेळ',
          body: "<strong>इक्विपमेंट परफॉर्मन्स अँड मेंटेनन्स</strong> <strong>इक्विपमेंट रनिंग अवर्स</strong>ने सुरू होते — <strong>STP ब्लोअर-1</strong> <strong>12</strong> तास आणि <strong>ब्लोअर-2</strong> <strong>11.9</strong>, म्हणजे स्वच्छ वाटणी; दोन्ही <strong>FMR फीड पंप</strong> <strong>0</strong> वर; <strong>फिल्टर फीड पंप-2</strong> <strong>10.27</strong> वर तर पंप 1 रिकामा राहिला. शेजारी प्रत्येक यंत्र एक-किंवा-शून्य रेषेत, <strong>हेडर</strong> व <strong>MGF-ACF प्रेशर</strong>, आणि <strong>ऑटो/मॅन्युअल</strong> व <strong>ट्रिप स्टेटस</strong> याद्या.",
          voice: "रनिंग अवर्स काय चालले ते सांगतात — दोन्ही ब्लोअर भार वाटून घेत, एक फिल्टर फीड पंप दहा तास तर दुसरा रिकामा.",
        },
        {
          label: 'WTP', title: 'दोन पाने: STP आणि WTP',
          body: "अॅनालिटिक्सचा <strong>पेज</strong> सिलेक्टर दोन्ही प्लांट ठेवतो. <strong>WTP</strong> वर जा आणि तोच आकार जलशुद्धीकरणासाठी दिसतो: <strong>टँक लेव्हल्स</strong>मध्ये <strong>रॉ वॉटर</strong>, <strong>रेन वॉटर</strong> व <strong>डोमेस्टिक</strong> टाक्या, आणि <strong>फ्लो मीटर</strong> कार्डात <strong>WTP आउटलेट फ्लोमीटर-1</strong> <strong>211</strong>, <strong>-2</strong> <strong>145</strong> व <strong>इनलेट टोटलायझर</strong> <strong>103.65</strong>, खाली पाण्याची गुणवत्ता.",
          voice: "पेज सिलेक्टर दोन्ही प्लांट ठेवतो. डब्ल्यू टी पी वर तोच आकार — रॉ, रेन व डोमेस्टिक टाक्या, शेजारी आउटलेट फ्लोमीटर.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणते पान',
          body: "म्हणून: दिवसासाठी <strong>डॅशबोर्ड</strong> — प्रत्येक मीटर, टाक्या, ऊर्जा आणि गुणवत्ता एकाच स्क्रोलमध्ये. एखाद्या आकड्यामागची प्रक्रिया हवी असेल तर <strong>अॅनालिटिक्स</strong>, त्याच्या <strong>STP</strong> व <strong>WTP</strong> पानांवर. सिस्टम काय सूचित करते आहे त्यासाठी <strong>तिकिटे</strong>. स्टोअरच्या वापरासाठी <strong>इन्व्हेंटरी</strong>. एक पेज सिलेक्टर, एक ग्रॅन्युलॅरिटी, एक कालमर्यादा — आणि बाकी सर्व मागोमाग.",
          voice: "दिवसासाठी डॅशबोर्ड, प्रक्रियेसाठी अॅनालिटिक्स, सूचनांसाठी तिकिटे, स्टोअरसाठी इन्व्हेंटरी. एक मर्यादा, आणि बाकी सर्व मागोमाग.",
        },
      ],
    },
  },
};

export default lesson;
