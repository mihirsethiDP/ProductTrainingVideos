import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-taj-exotica-dashboard`;

/**
 * Demo — Taj Exotica (250 KLD), dashboard-led product tour.  (hidden module-demos)
 *
 * REWORK of the 2026-09-03 demo, from a second, longer recording (4:21,
 * Anupam Vivek / Taj Exotica account, 2026-09-11). Same client, same scope, so
 * the existing lesson is rebuilt rather than a new one added.
 *
 * The recording: login → Dashboard ("Taj Hotel Goa") with the granularity and
 * range picker worked hard (Today / Yesterday / Last 24 Hours / Last 10 Days,
 * Minutes-Hours-Days, Smart Hours) → widget tools incl. Download CSV, the
 * Table/Bar Graph switch and the expanded view with drag-zoom and "Save Current
 * View" → Energy Consumption → Current Status → the full-width Equipments
 * Running Hours table → Total Inlet & Outlet Water + Tickets Generated & Closed
 * → Analytics (Main Page) → Inventory → Insight List → ScadaView → Tickets
 * (counts, a ticket's history, Create New Ticket).
 *
 * Style: `overview` — a page-by-page tour, two-sentence voices. The uploader's
 * NOTES ask for the dashboard "in detail", naming ticket granularity + data
 * downloading, widget customization, daily/weekly/monthly energy, insights,
 * alerts, inventory and ticket management. Those intents are mapped onto
 * dedicated steps (3, 6, 7, 8, 10, 12, 13, 14, 15, 16) while every other screen
 * in the recording still gets its own step, so the tour runs a little longer
 * than a plain overview — the note wins over the default length.
 *
 * Real 1280px frames from the recording; the baked OS cursor is erased from
 * every one (delogo on flat ground, an exact patch/clone where it sat on text).
 *
 * Two things the copy deliberately does NOT overclaim:
 *  - the Dashboard's Page selector holds only "Taj Hotel Goa" for this account;
 *  - Insight List returned an error in the recording, so step 16 describes the
 *    filter bar and Create Insight that ARE on screen and no list contents.
 */
const lesson: Lesson = {
  id: 'demo-taj-exotica-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 8,
  estimatedMinutes: 4,
  expiresAt: '2026-10-11', // 30 days after the job's created_at (2026-09-11) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    range: `${BASE}/range.jpg`,
    kpi: `${BASE}/kpi.jpg`,
    quality: `${BASE}/quality.jpg`,
    widget: `${BASE}/widget.jpg`,
    savedview: `${BASE}/savedview.jpg`,
    energy: `${BASE}/energy.jpg`,
    status: `${BASE}/status.jpg`,
    hours: `${BASE}/hours.jpg`,
    cumul: `${BASE}/cumul.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticketdetail: `${BASE}/ticketdetail.jpg`,
    create: `${BASE}/create.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    insights: `${BASE}/insights.jpg`,
    scada: `${BASE}/scada.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    equipment: `${BASE}/equipment.jpg`,
  },
  layouts: [
    // S1 — the side navigation: every screen this account can reach
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '9.9%', left: '0%', width: '14.1%', height: '39.7%' },
      cursor: [
        { at: 0, x: 15.2, y: 4.4, click: true },
        { at: 0.3, x: 3.2, y: 12.6 },
        { at: 0.55, x: 3.2, y: 25 },
        { at: 0.8, x: 5.7, y: 38.8 },
        { at: 0.95, x: 5.4, y: 46.5, click: true },
      ],
    },
    // S2 — the header controls that drive every widget on the page
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '15%', left: '1.6%', width: '96.6%', height: '9.4%' },
      cursor: [
        { at: 0, x: 9.8, y: 19.5, click: true },
        { at: 0.35, x: 53.8, y: 19.5 },
        { at: 0.6, x: 72.7, y: 19.5 },
        { at: 0.85, x: 82.9, y: 9.4, click: true },
        { at: 0.97, x: 91.8, y: 9.4 },
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
    // S4 — Water Quantity, re-computed for a ten-day window
    {
      mode: 'detail', screenshot: 'kpi', caption: 'Change the window, the numbers follow',
      spotlight: { top: '39%', left: '1.6%', width: '47.8%', height: '34.5%' },
      cursor: [
        { at: 0, x: 53.8, y: 23.9, click: true },
        { at: 0.3, x: 60.9, y: 23.9 },
        { at: 0.55, x: 25.5, y: 53 },
        { at: 0.8, x: 41.7, y: 53 },
        { at: 0.95, x: 6.6, y: 69.4 },
      ],
    },
    // S5 — the quality row, each number carrying its own reference
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, against the reference',
      spotlight: { top: '20.2%', left: '1.6%', width: '64.1%', height: '68.7%' },
      cursor: [
        { at: 0, x: 15.6, y: 58.1 },
        { at: 0.35, x: 30.5, y: 77.8 },
        { at: 0.65, x: 41.7, y: 33.5 },
        { at: 0.9, x: 58, y: 22.2 },
      ],
    },
    // S6 — the tools on every widget: CSV, expand, chart type, edit, info
    {
      mode: 'detail', screenshot: 'widget', caption: 'Download it, or re-draw it',
      spotlight: { top: '17%', left: '26%', width: '7%', height: '4%' },
      cursor: [
        { at: 0, x: 26.6, y: 18.8 },
        { at: 0.3, x: 29.2, y: 18.8, click: true },
        { at: 0.6, x: 31.8, y: 18.8 },
        { at: 0.9, x: 11.7, y: 51.3 },
      ],
    },
    // S7 — expanded view, drag-zoom, and saving the view you built
    {
      mode: 'detail', screenshot: 'savedview', caption: 'Zoom in, then keep the view',
      spotlight: { top: '91.5%', left: '7.5%', width: '85.3%', height: '7%' },
      cursor: [
        { at: 0, x: 31.3, y: 46.2 },
        { at: 0.35, x: 89.2, y: 20.9 },
        { at: 0.7, x: 79, y: 95.4, click: true },
        { at: 0.95, x: 87.7, y: 95.4 },
      ],
    },
    // S8 — Energy Consumption, and the per-KL number beside the total
    {
      mode: 'detail', screenshot: 'energy', caption: 'What the treatment cost',
      spotlight: { top: '20.2%', left: '34.1%', width: '31.6%', height: '33.7%' },
      cursor: [
        { at: 0, x: 15.6, y: 59.8 },
        { at: 0.35, x: 41.7, y: 33.7 },
        { at: 0.7, x: 58, y: 33.7 },
        { at: 0.95, x: 55.5, y: 50.4 },
      ],
    },
    // S9 — Current Status: tanks, flow cycles, running hours
    {
      mode: 'detail', screenshot: 'status', caption: 'The plant right now',
      spotlight: { top: '27.9%', left: '1.6%', width: '96.6%', height: '69.2%' },
      cursor: [
        { at: 0, x: 17.4, y: 51.3 },
        { at: 0.35, x: 15.9, y: 40.3, click: true },
        { at: 0.65, x: 49.8, y: 68.4 },
        { at: 0.9, x: 82.3, y: 51.3 },
      ],
    },
    // S10 — Equipments Running Hours: four windows on the same machines
    {
      mode: 'detail', screenshot: 'hours', caption: 'Hours, four windows at once',
      spotlight: { top: '23.1%', left: '39.1%', width: '58.6%', height: '5.1%' },
      cursor: [
        { at: 0, x: 20.7, y: 25.3 },
        { at: 0.3, x: 44.8, y: 25.3 },
        { at: 0.55, x: 75.1, y: 25.3 },
        { at: 0.8, x: 89.7, y: 25.3 },
        { at: 0.97, x: 89.7, y: 35.7 },
      ],
    },
    // S11 — cumulative water, and the tickets the plant has raised
    {
      mode: 'detail', screenshot: 'cumul', caption: 'Findings become tickets',
      spotlight: { top: '24.3%', left: '34.1%', width: '64.1%', height: '68.9%' },
      cursor: [
        { at: 0, x: 23.4, y: 42.7 },
        { at: 0.3, x: 23.4, y: 56.4 },
        { at: 0.6, x: 46.9, y: 36.9 },
        { at: 0.85, x: 82.8, y: 36.1 },
        { at: 0.97, x: 43, y: 90.8 },
      ],
    },
    // S12 — the Tickets page: counts, severity, and the split by team
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Every ticket, counted',
      spotlight: { top: '17.1%', left: '1.6%', width: '96.6%', height: '14.5%' },
      cursor: [
        { at: 0, x: 14.2, y: 21.4 },
        { at: 0.3, x: 18.8, y: 27.4 },
        { at: 0.55, x: 42.8, y: 21.4 },
        { at: 0.8, x: 92.2, y: 22.1 },
        { at: 0.95, x: 12.5, y: 41.9 },
      ],
    },
    // S13 — inside a ticket: the fix to apply, and the audit trail
    {
      mode: 'detail', screenshot: 'ticketdetail', caption: 'Inside a ticket',
      spotlight: { top: '28.2%', left: '51.9%', width: '33.2%', height: '50.4%' },
      cursor: [
        { at: 0, x: 28.9, y: 55 },
        { at: 0.3, x: 32.8, y: 66.7 },
        { at: 0.6, x: 63.3, y: 58.1 },
        { at: 0.85, x: 67.6, y: 68.7 },
        { at: 0.97, x: 82.7, y: 82.7 },
      ],
    },
    // S14 — raising one by hand
    {
      mode: 'detail', screenshot: 'create', caption: 'Raise one yourself',
      spotlight: { top: '26.5%', left: '24.8%', width: '50.3%', height: '47%' },
      cursor: [
        { at: 0, x: 93.8, y: 13.7, click: true },
        { at: 0.3, x: 50, y: 34.9 },
        { at: 0.6, x: 50, y: 53.7 },
        { at: 0.85, x: 50, y: 62.2 },
        { at: 0.97, x: 50, y: 70.1, click: true },
      ],
    },
    // S15 — Inventory: actual against expected consumption
    {
      mode: 'detail', screenshot: 'inventory', caption: 'What the store is using',
      spotlight: { top: '25.6%', left: '1.6%', width: '96.8%', height: '44.4%' },
      cursor: [
        { at: 0, x: 31.3, y: 19.7, click: true },
        { at: 0.3, x: 5.2, y: 46.3 },
        { at: 0.6, x: 76.4, y: 46.2 },
        { at: 0.9, x: 90.5, y: 46.2 },
      ],
    },
    // S16 — Insight List: the filters that narrow the platform's own findings
    {
      mode: 'detail', screenshot: 'insights', caption: 'Insights and alerts',
      spotlight: { top: '9.9%', left: '14.5%', width: '83.6%', height: '24.3%' },
      cursor: [
        { at: 0, x: 94.1, y: 12.6 },
        { at: 0.3, x: 74.1, y: 20.7 },
        { at: 0.6, x: 37.8, y: 30.4 },
        { at: 0.9, x: 58, y: 30.4 },
      ],
    },
    // S17 — ScadaView: the workspace, live, and the way into the diagram
    {
      mode: 'detail', screenshot: 'scada', caption: 'ScadaView — live',
      spotlight: { top: '35%', left: '35.2%', width: '25.8%', height: '43.6%' },
      cursor: [
        { at: 0, x: 13.4, y: 13.2 },
        { at: 0.3, x: 73.3, y: 13 },
        { at: 0.6, x: 92, y: 13 },
        { at: 0.9, x: 47.9, y: 53, click: true },
      ],
    },
    // S18 — the Analytics page, grouped by question
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Analytics — the plant in depth',
      spotlight: { top: '31.6%', left: '1.6%', width: '96.4%', height: '53%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.3, x: 11.4, y: 33.3 },
        { at: 0.55, x: 13.4, y: 59.8 },
        { at: 0.8, x: 86.2, y: 59.8 },
        { at: 0.95, x: 45.5, y: 93.2 },
      ],
    },
    // S19 — Equipment Performance: one or zero, per machine
    {
      mode: 'detail', screenshot: 'equipment', caption: 'One or zero, per machine',
      spotlight: { top: '29.9%', left: '74.6%', width: '23.4%', height: '46.2%' },
      cursor: [
        { at: 0, x: 62, y: 51.3 },
        { at: 0.35, x: 86.2, y: 42.7 },
        { at: 0.7, x: 96.9, y: 54.9 },
        { at: 0.95, x: 20.9, y: 80 },
      ],
    },
    // S20 — wrap: which page serves which job
    {
      mode: 'detail', screenshot: 'header', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1.2, y: 4.4 },
        { at: 0.35, x: 9.8, y: 19.5 },
        { at: 0.7, x: 25.5, y: 53 },
        { at: 0.95, x: 61.2, y: 19.5 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Taj Exotica,<br><em>the whole plant on one screen.</em>',
      subtitle:
        'A practical tour of your platform — the dashboard in detail, the tickets and inventory behind it, and the plant running live.',
      chapter: 'Demo · Taj Exotica (250 KLD)',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens your side navigation, and every screen you have lives there: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Insight List</strong> and <strong>Tickets</strong>, then <strong>ScadaView — Taj Hotels Workspace</strong>, and the plant itself, <strong>Taj Exotica (250 KLD)</strong> — expand it for <strong>Maintenance</strong> and <strong>Taj Exotica (250 KLD) Analytics</strong>. The <strong>search</strong> box at the top jumps straight to any of them.",
          voice: "Everything starts from this menu — Dashboard, Inventory, Insight List, Tickets, Scada View, and the plant with its own Analytics.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on the <strong>Taj Hotel Goa</strong> page. Everything below it is driven by three controls: the <strong>Page</strong> selector, the <strong>Granularity</strong>, and the <strong>From</strong> and <strong>To</strong> range. On the right, <strong>refresh</strong> re-pulls live data, the <strong>gear</strong> holds page settings, and the <strong>grid</strong> icon is where the layout itself is managed.",
          voice: "The page selector, the granularity and the date range drive every widget below. Refresh re-pulls live data; the grid icon edits the layout.",
        },
        {
          label: 'Granularity', title: 'Minutes, hours or days',
          body: "Click the range and the picker opens. Presets run <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, three, seven, ten or thirty days, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars. <strong>Granularity</strong> switches between <strong>Minutes</strong>, <strong>Hours</strong> and <strong>Days</strong> — the same window read at three resolutions — and <strong>Smart Hours</strong> re-applies one daily time slot across every date in the range. <strong>Apply Selection</strong> re-draws everything.",
          voice: "Presets from today out to six months, or your own dates. Granularity reads the same window in minutes, hours or days.",
        },
        {
          label: 'Flows', title: 'Change the window, the numbers follow',
          body: "The first row is the plant in three numbers. With the range set to <strong>Days</strong> over the <strong>Last 10 Days</strong>, the cards re-compute to <strong>Plant Efficiency 51.74%</strong>, <strong>Inlet Flow 1665.31 KL</strong> and <strong>Outlet Flow 861.66 KL</strong>. The strip under each card carries the two timestamps being compared and the change between them — here all three are <strong>down</strong> on the window before.",
          voice: "Over ten days the cards re-compute — sixteen sixty five K L in against eight sixty one out, each card carrying its own change.",
        },
        {
          label: 'Quality', title: 'Quality, against the reference',
          body: "Below it, the quality row. <strong>Outlet Turbidity</strong> is plotted inside its reference band — the green zone is in spec, the pink above it is not — with <strong>SBR DO 1.33 ppm</strong> and <strong>Average Outlet Turbidity 7.08 NTU</strong> beside it. That card is labelled <strong>ref: &lt;5 NTU</strong>, so the target travels with the number instead of living in someone's head.",
          voice: "Outlet turbidity sits inside its reference band, and average turbidity reads seven point one against a limit of five.",
        },
        {
          label: 'Widgets', title: 'Download it, or re-draw it',
          body: "Every widget carries the same tools on hover: <strong>Download CSV</strong>, <strong>Expanded View</strong>, a chart-type menu that switches between <strong>Table</strong> and <strong>Bar Graph</strong>, <strong>Edit Widget</strong>, and an <strong>info</strong> note explaining what is plotted. Here <strong>Tank Levels</strong> has been switched from a line to <strong>bars</strong> — same data, different read — and the CSV comes down for whatever range is set above.",
          voice: "Hover any widget for download, expand, chart type and edit. Tank levels here is switched from a line to bars — same data, different read.",
        },
        {
          label: 'Expand', title: 'Zoom in, then keep the view',
          body: "<strong>Expanded View</strong> throws a widget full-width. Drag across the chart to zoom into a few minutes of the day — here a full day of <strong>Tank Levels</strong> at minute resolution, with <strong>Equalization</strong>, <strong>Sludge holding</strong> and <strong>Intermediate</strong> tanks separated — and <strong>Reset Zoom</strong> comes back out. When a view is worth keeping, the <strong>Save Current View</strong> bar offers <strong>Save</strong> or <strong>Save As</strong>.",
          voice: "Expand any widget, drag to zoom into minutes, reset to come back. Save current view keeps the layout for next time.",
        },
        {
          label: 'Energy', title: 'What the treatment cost',
          body: "<strong>Energy Consumption</strong> pairs the draw with the water it treated: <strong>271.6</strong> for the day so far, <strong>down 2%</strong>, and <strong>Energy Per KL 3.31</strong>, also <strong>down 2%</strong> — cost per unit of water, not just a total. Because the section obeys the range above, the same two cards read the day, the week or the month simply by changing the window.",
          voice: "Energy consumption two seventy one, and three point three one per K L. Change the window and the same cards read a day, a week or a month.",
        },
        {
          label: 'Status', title: 'The plant right now',
          body: "<strong>Current Status</strong> is the live picture. <strong>Tank Levels</strong> holds <strong>Equalization 48.59</strong>, <strong>Intermediate Water 25.8</strong> and <strong>Sludge holding −0.75</strong> — click a legend entry to drop that series and read the rest. <strong>Inlet &amp; Outlet Flow</strong> shows the pumping cycles, and <strong>Equipments Running Hours</strong> lists every pump and blower with its hours.",
          voice: "Tank levels for all three tanks, the pumping cycles beside them, and running hours for every pump and blower.",
        },
        {
          label: 'Hours', title: 'Hours, four windows at once',
          body: "The full-width <strong>Equipments Running Hours</strong> table reads every machine across four windows at the same time — <strong>Today</strong>, <strong>Last 24 Hours</strong>, <strong>Yesterday</strong> and <strong>Last 7 Days</strong> — with the <strong>Reference</strong> selector choosing what is being counted. <strong>Reactor Feed Pump-1</strong> at <strong>174.02</strong> hours over the week, against <strong>0</strong> for pumps 2 and 3, says which unit is carrying the plant.",
          voice: "The same machines across today, last twenty four hours, yesterday and last seven days — so you see which unit carries the plant.",
        },
        {
          label: 'Tickets', title: 'Findings become tickets',
          body: "<strong>Total Inlet &amp; Outlet Water</strong> runs the two cumulative curves side by side, <strong>184.25 KL</strong> in against <strong>103.26 KL</strong> out. Beside it, <strong>Tickets Generated &amp; Closed</strong> carries the work the plant has raised — <em>“Inlet flow is less as 1 flowmeter is not connected”</em> and <em>“Reactor feed Pump running in Auto mode”</em> — each with its plant, its date and a <strong>Type &amp; Tags</strong> column.",
          voice: "Cumulative inlet against outlet, and beside it the tickets the plant raised — a flowmeter not connected, a feed pump left in auto.",
        },
        {
          label: 'Queue', title: 'Every ticket, counted',
          body: "The <strong>Tickets</strong> page opens on the counts: <strong>2 open</strong> — none critical, one overdue, one escalated — against <strong>29 closed</strong>, of which <strong>4 critical</strong>, <strong>14 overdue</strong> and <strong>11 escalated</strong>. To the right the same totals split by team — <strong>Admin</strong>, <strong>Electrical</strong>, <strong>Lab</strong>, <strong>Process</strong>, <strong>Dp System</strong>, <strong>Mechanical</strong> — with closed work sitting at <strong>23 Process</strong> and <strong>6 Electrical</strong>. Every row carries its own tags.",
          voice: "Two open tickets against twenty nine closed, split by critical, overdue and escalated, and again by team.",
        },
        {
          label: 'Detail', title: 'Inside a ticket',
          body: "Open one and you get the whole story: the <strong>Problem</strong> — <em>“Clear water tank Level has reached 90%”</em> — and a <strong>Description</strong> telling the operator exactly what to do about it, with <strong>Equipment</strong> and <strong>Category</strong> beside them. The <strong>History</strong> column is the audit trail: when the problem arose, and that <em>“this ticket has been auto resolved by system”</em> nineteen minutes later. <strong>Add a comment</strong> to record what was done, or <strong>ReOpen</strong> if it comes back.",
          voice: "Each ticket carries the problem, the fix to apply, and a history — this one was auto resolved by the system nineteen minutes later.",
        },
        {
          label: 'Create', title: 'Raise one yourself',
          body: "<strong>Create New Ticket</strong> is the manual route: a <strong>Problem Statement</strong>, an optional <strong>Description</strong>, the <strong>Equipment</strong> it concerns and an <strong>Issue Type</strong>. That is why rows are tagged <strong>automatic</strong> or <strong>manual</strong> — the system raises most of them from the data, and your team raises the rest.",
          voice: "Create new ticket takes a problem statement, the equipment and an issue type — which is why every ticket is tagged automatic or manual.",
        },
        {
          label: 'Inventory', title: 'What the store is using',
          body: "<strong>Inventory</strong> lists the consumables by store. For <strong>Taj Exotica Store</strong> that is <strong>Urea</strong>, <strong>DAP</strong> and <strong>Hypo</strong>, all <strong>Chemicals</strong>, with <strong>Stock Available</strong>, <strong>Last Consumption</strong>, and consumption compared as <strong>Actual</strong> against <strong>Expected</strong> — the column that tells you whether dosing is drifting. The flag beside a name marks an item wanting attention; search and filter sit above.",
          voice: "Inventory lists every chemical by store, with stock, last consumption, and actual against expected — so you can see dosing drift.",
        },
        {
          label: 'Insights', title: 'Insights and alerts',
          body: "<strong>Insight List</strong> is where the platform's own findings collect — the warnings and alerts raised against your plant rather than typed in by someone. The bar across the top narrows them by <strong>Workspace</strong>, <strong>Asset</strong>, <strong>Priority</strong> and <strong>Relative Time</strong>, with a <strong>From</strong>–<strong>To</strong> range beside them, and <strong>+ Create Insight</strong> adds one by hand.",
          voice: "Insight list collects the platform's own alerts, narrowed by workspace, asset, priority and time — and you can create one by hand.",
        },
        {
          label: 'ScadaView', title: 'The plant, running live',
          body: "<strong>ScadaView — Taj Hotels Workspace</strong> opens the workspace with a <strong>LIVE</strong> badge and the timestamp of the last reading. Click the <strong>Taj</strong> tile to drop into the plant diagram itself, where every tank, flowmeter, blower and filter carries its own live value. The <strong>clock</strong> and <strong>play</strong> controls replay an earlier moment, and <strong>Select Page</strong> switches between diagrams.",
          voice: "Scada View opens the workspace live. Click the plant tile to drop into the diagram, where every tank and flowmeter reads live.",
        },
        {
          label: 'Analytics', title: 'Analytics — the plant in depth',
          body: "<strong>Taj Exotica (250 KLD) Analytics</strong> is the deeper page, grouped by the question you are asking. <strong>Water Quantity and Availability</strong> holds <strong>Tank Levels</strong>, <strong>Flow rate</strong>, <strong>Sludge Wasting flowmeter</strong>, <strong>Flow Meters</strong> and <strong>Backwash Flowmeter</strong>, with the <strong>Treated</strong> and <strong>Inlet Water</strong> totals at <strong>103.26</strong> against <strong>184.32 KL</strong>. Below come <strong>Inlet and Outlet Water Quality</strong>, <strong>Biological Process Health</strong>, <strong>Energy Consumption</strong> and <strong>Equipment Performance</strong>.",
          voice: "Analytics groups the plant by question — quantity and availability, water quality, biological health, energy, and equipment performance.",
        },
        {
          label: 'Equipment', title: 'One or zero, per machine',
          body: "<strong>Equipment Performance</strong> plots every machine as a one-or-zero line, so a glance says what ran and what did not: <strong>MGF &amp; ACF Backwash</strong>, the <strong>UF Feed Pumps</strong>, and <strong>UF Pressure</strong> carrying inlet and outlet, maximum and average, on one chart. Beside them <strong>Auto Manual status</strong> shows which units are in auto — filter feed pumps and blowers at <strong>1.00</strong>, reactor feed pumps at <strong>0.00</strong> — and <strong>Trip status</strong> stays at zero.",
          voice: "Each machine plots as one or zero. Auto manual status shows what is running in auto, and trip status stays at zero.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the shift — efficiency, flow, quality, energy, tanks and tickets in one scroll. <strong>Analytics</strong> when you need the process behind a number. <strong>Tickets</strong> and <strong>Insight List</strong> for the work the plant is asking for. <strong>Inventory</strong> for what the store is consuming. <strong>ScadaView</strong> when you want to watch it run. One page selector, one granularity, one date range — and everything follows.",
          voice: "Dashboard for the shift, Analytics for the process, Tickets and Insights for the work, Inventory for the store, Scada View to watch it run.",
        },
      ],
    },
    hi: {
      title: 'ताज एक्सोटिका,<br><em>पूरा प्लांट एक स्क्रीन पर।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का व्यावहारिक दौरा — डैशबोर्ड विस्तार से, उसके पीछे के टिकट और इन्वेंटरी, और लाइव चलता प्लांट।',
      chapter: 'डेमो · ताज एक्सोटिका (250 KLD)',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और आपकी हर स्क्रीन वहीं है: <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>इनसाइट लिस्ट</strong> और <strong>टिकट</strong>, फिर <strong>स्काडाव्यू — ताज होटल्स वर्कस्पेस</strong>, और प्लांट स्वयं, <strong>ताज एक्सोटिका (250 KLD)</strong> — उसे खोलें तो <strong>मेंटेनेंस</strong> और <strong>ताज एक्सोटिका (250 KLD) एनालिटिक्स</strong> मिलते हैं। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
          voice: "सब कुछ इसी मेन्यू से — डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, टिकट, स्काडा व्यू, और प्लांट के साथ उसका एनालिटिक्स।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>ताज होटल गोवा</strong> पेज पर खुलता है। नीचे का सब कुछ तीन कंट्रोल से चलता है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong>, और <strong>फ्रॉम</strong> व <strong>टू</strong> की समय सीमा। दाईं ओर <strong>रिफ़्रेश</strong> लाइव डेटा फिर से लाता है, <strong>गियर</strong> में पेज सेटिंग्स हैं, और <strong>ग्रिड</strong> आइकन से लेआउट खुद संभाला जाता है।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा नीचे का हर विजेट चलाते हैं। रिफ़्रेश लाइव डेटा लाता है; ग्रिड आइकन लेआउट बदलता है।",
        },
        {
          label: 'ग्रैन्युलैरिटी', title: 'मिनट, घंटे या दिन',
          body: "समय सीमा पर क्लिक करने से पिकर खुलता है: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 आवर्स</strong>, तीन, सात, दस या तीस दिन, <strong>3</strong> या <strong>6 महीने</strong>, या दो कैलेंडरों पर <strong>कस्टम</strong>। <strong>ग्रैन्युलैरिटी</strong> <strong>मिनट</strong>, <strong>घंटे</strong> और <strong>दिन</strong> के बीच बदलती है — वही अवधि तीन रिज़ॉल्यूशन पर — और <strong>स्मार्ट आवर्स</strong> उसी दैनिक समय-खंड को सीमा की हर तारीख पर लागू करती है। <strong>अप्लाई सिलेक्शन</strong> सब फिर से बनाता है।",
          voice: "आज से छह महीने तक के प्रीसेट, या अपनी तारीखें। ग्रैन्युलैरिटी वही अवधि मिनट, घंटे या दिन में पढ़ती है।",
        },
        {
          label: 'प्रवाह', title: 'अवधि बदलें, आँकड़े बदल जाएँगे',
          body: "पहली पंक्ति पूरे प्लांट को तीन आँकड़ों में रखती है। सीमा <strong>दिन</strong> और <strong>लास्ट 10 डेज़</strong> पर सेट होते ही कार्ड फिर से गणना करते हैं: <strong>प्लांट एफ़िशिएंसी 51.74%</strong>, <strong>इनलेट फ़्लो 1665.31 KL</strong> और <strong>आउटलेट फ़्लो 861.66 KL</strong>। हर कार्ड के नीचे की पट्टी दोनों तुलना-समय और उनके बीच का बदलाव दिखाती है — यहाँ तीनों पिछली अवधि से <strong>नीचे</strong> हैं।",
          voice: "दस दिनों पर कार्ड फिर से गणना करते हैं — सोलह सौ पैंसठ के एल अंदर, आठ सौ इकसठ बाहर, हर कार्ड अपना बदलाव लिए।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भ के सामने',
          body: "नीचे गुणवत्ता की पंक्ति है। <strong>आउटलेट टर्बिडिटी</strong> अपने संदर्भ बैंड के भीतर दिखती है — हरा क्षेत्र सीमा में, ऊपर का गुलाबी बाहर — और साथ में <strong>SBR DO 1.33 ppm</strong> तथा <strong>औसत आउटलेट टर्बिडिटी 7.08 NTU</strong>। उस कार्ड पर <strong>ref: &lt;5 NTU</strong> लिखा है, यानी लक्ष्य आँकड़े के साथ ही चलता है, किसी की याददाश्त में नहीं रहता।",
          voice: "आउटलेट टर्बिडिटी अपने संदर्भ बैंड में है, और औसत टर्बिडिटी पाँच की सीमा के सामने सात दशमलव एक पढ़ती है।",
        },
        {
          label: 'विजेट', title: 'डाउनलोड करें, या दोबारा बनाएँ',
          body: "हर विजेट पर हॉवर करते ही वही टूल आते हैं: <strong>डाउनलोड CSV</strong>, <strong>एक्सपैंडेड व्यू</strong>, चार्ट-टाइप मेन्यू जो <strong>टेबल</strong> और <strong>बार ग्राफ़</strong> के बीच बदलता है, <strong>एडिट विजेट</strong>, और एक <strong>info</strong> टिप्पणी। यहाँ <strong>टैंक लेवल्स</strong> को लाइन से <strong>बार</strong> में बदला गया है — वही डेटा, अलग पढ़ाई — और CSV ऊपर सेट सीमा के लिए ही उतरती है।",
          voice: "किसी भी विजेट पर हॉवर करें — डाउनलोड, एक्सपैंड, चार्ट टाइप, एडिट। यहाँ टैंक लेवल्स लाइन से बार में बदला गया है।",
        },
        {
          label: 'एक्सपैंड', title: 'ज़ूम करें, फिर व्यू सहेजें',
          body: "<strong>एक्सपैंडेड व्यू</strong> विजेट को पूरी चौड़ाई देता है। चार्ट पर खींचकर दिन के कुछ मिनटों में ज़ूम करें — यहाँ पूरे दिन के <strong>टैंक लेवल्स</strong> मिनट-स्तर पर, <strong>इक्वलाइज़ेशन</strong>, <strong>स्लज होल्डिंग</strong> और <strong>इंटरमीडिएट</strong> टैंक अलग-अलग — और <strong>रीसेट ज़ूम</strong> वापस ले आता है। व्यू रखने लायक हो तो <strong>सेव करंट व्यू</strong> पट्टी <strong>सेव</strong> या <strong>सेव ऐज़</strong> देती है।",
          voice: "किसी भी विजेट को खोलें, खींचकर मिनटों में ज़ूम करें, रीसेट से वापस आएँ। सेव करंट व्यू अगली बार के लिए लेआउट रखता है।",
        },
        {
          label: 'ऊर्जा', title: 'ट्रीटमेंट की लागत',
          body: "<strong>एनर्जी कंजम्पशन</strong> खपत को उस पानी के साथ जोड़ता है जो साफ़ हुआ: अब तक दिन का <strong>271.6</strong>, <strong>2% नीचे</strong>, और <strong>एनर्जी पर KL 3.31</strong>, वह भी <strong>2% नीचे</strong> — केवल कुल नहीं, बल्कि प्रति इकाई पानी की लागत। यह हिस्सा ऊपर की सीमा मानता है, इसलिए वही दो कार्ड दिन, सप्ताह या महीना पढ़ लेते हैं।",
          voice: "एनर्जी कंजम्पशन दो सौ इकहत्तर, और प्रति के एल तीन दशमलव तीन एक। अवधि बदलिए, वही कार्ड दिन, सप्ताह या महीना पढ़ेंगे।",
        },
        {
          label: 'स्थिति', title: 'प्लांट इस समय',
          body: "<strong>करंट स्टेटस</strong> लाइव तस्वीर है। <strong>टैंक लेवल्स</strong> में <strong>इक्वलाइज़ेशन 48.59</strong>, <strong>इंटरमीडिएट वॉटर 25.8</strong> और <strong>स्लज होल्डिंग −0.75</strong> — लेजेंड पर क्लिक करके कोई सीरीज़ हटाकर बाकी पढ़ें। <strong>इनलेट व आउटलेट फ़्लो</strong> पंपिंग चक्र दिखाता है, और <strong>इक्विपमेंट्स रनिंग ऑवर्स</strong> हर पंप व ब्लोअर के घंटे गिनता है।",
          voice: "तीनों टैंकों के स्तर, बगल में पंपिंग चक्र, और हर पंप व ब्लोअर के चलने के घंटे।",
        },
        {
          label: 'घंटे', title: 'घंटे, एक साथ चार अवधियों में',
          body: "पूरी चौड़ाई वाली <strong>इक्विपमेंट्स रनिंग ऑवर्स</strong> तालिका हर मशीन को एक साथ चार अवधियों में पढ़ती है — <strong>टुडे</strong>, <strong>लास्ट 24 आवर्स</strong>, <strong>यस्टरडे</strong> और <strong>लास्ट 7 डेज़</strong> — और <strong>रेफ़रेंस</strong> सिलेक्टर तय करता है कि क्या गिना जा रहा है। सप्ताह भर में <strong>रिएक्टर फीड पंप-1</strong> के <strong>174.02</strong> घंटे, जबकि पंप 2 और 3 के <strong>0</strong> — यही बताता है कि प्लांट कौन-सी इकाई ढो रही है।",
          voice: "वही मशीनें आज, पिछले चौबीस घंटे, कल और पिछले सात दिनों में — ताकि दिखे कि प्लांट कौन-सी इकाई ढो रही है।",
        },
        {
          label: 'टिकट', title: 'निष्कर्ष टिकट बन जाते हैं',
          body: "<strong>टोटल इनलेट व आउटलेट वॉटर</strong> दोनों संचयी रेखाएँ साथ चलाता है — अंदर <strong>184.25 KL</strong>, बाहर <strong>103.26 KL</strong>। बगल में <strong>टिकट्स जनरेटेड व क्लोज़्ड</strong> प्लांट का उठाया काम रखता है — <em>“इनलेट फ़्लो कम है क्योंकि एक फ़्लोमीटर जुड़ा नहीं है”</em> और <em>“रिएक्टर फीड पंप ऑटो मोड में चल रहा है”</em> — हर एक अपने प्लांट, तारीख और <strong>टाइप व टैग्स</strong> कॉलम के साथ।",
          voice: "संचयी इनलेट बनाम आउटलेट, और बगल में प्लांट के उठाए टिकट — एक फ़्लोमीटर जुड़ा नहीं, एक फीड पंप ऑटो में छूटा।",
        },
        {
          label: 'कतार', title: 'हर टिकट, गिना हुआ',
          body: "<strong>टिकट</strong> पेज गिनती से खुलता है: <strong>2 खुले</strong> — कोई क्रिटिकल नहीं, एक ओवरड्यू, एक एस्केलेटेड — और <strong>29 बंद</strong>, जिनमें <strong>4 क्रिटिकल</strong>, <strong>14 ओवरड्यू</strong> और <strong>11 एस्केलेटेड</strong>। दाईं ओर वही कुल टीम के हिसाब से बँटे हैं — <strong>एडमिन</strong>, <strong>इलेक्ट्रिकल</strong>, <strong>लैब</strong>, <strong>प्रोसेस</strong>, <strong>डीपी सिस्टम</strong>, <strong>मैकेनिकल</strong> — बंद काम <strong>23 प्रोसेस</strong> और <strong>6 इलेक्ट्रिकल</strong> पर बैठा है।",
          voice: "दो खुले टिकट और उनतीस बंद, क्रिटिकल, ओवरड्यू और एस्केलेटेड में बँटे, और फिर टीम के हिसाब से।",
        },
        {
          label: 'विवरण', title: 'टिकट के भीतर',
          body: "कोई टिकट खोलिए और पूरी कहानी मिलती है: <strong>प्रॉब्लम</strong> — <em>“क्लियर वॉटर टैंक का स्तर 90% पहुँच गया है”</em> — और <strong>डिस्क्रिप्शन</strong> जो ऑपरेटर को ठीक-ठीक बताता है कि क्या करना है, साथ में <strong>इक्विपमेंट</strong> और <strong>कैटेगरी</strong>। <strong>हिस्ट्री</strong> कॉलम ऑडिट ट्रेल है: समस्या कब उठी, और <em>“यह टिकट सिस्टम द्वारा स्वतः हल कर दिया गया”</em> उन्नीस मिनट बाद। <strong>ऐड अ कमेंट</strong> से किया गया काम दर्ज करें, या दोबारा हो तो <strong>रीओपन</strong>।",
          voice: "हर टिकट में समस्या, लागू करने योग्य उपाय, और इतिहास होता है — यह उन्नीस मिनट बाद सिस्टम ने स्वतः हल कर दिया।",
        },
        {
          label: 'नया टिकट', title: 'खुद भी उठाइए',
          body: "<strong>क्रिएट न्यू टिकट</strong> मैनुअल रास्ता है: एक <strong>प्रॉब्लम स्टेटमेंट</strong>, वैकल्पिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>इक्विपमेंट</strong> और एक <strong>इशू टाइप</strong>। इसी कारण पंक्तियों पर <strong>ऑटोमैटिक</strong> या <strong>मैनुअल</strong> टैग लगता है — अधिकतर सिस्टम डेटा से उठाता है, बाकी आपकी टीम।",
          voice: "क्रिएट न्यू टिकट में प्रॉब्लम स्टेटमेंट, इक्विपमेंट और इशू टाइप भरते हैं — इसीलिए हर टिकट ऑटोमैटिक या मैनुअल टैग रखता है।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टोर क्या खर्च कर रहा है',
          body: "<strong>इन्वेंटरी</strong> स्टोर के हिसाब से उपभोग्य वस्तुएँ दिखाती है। <strong>ताज एक्सोटिका स्टोर</strong> में <strong>यूरिया</strong>, <strong>DAP</strong> और <strong>हाइपो</strong> — सभी <strong>केमिकल्स</strong> — साथ में <strong>स्टॉक अवेलेबल</strong>, <strong>लास्ट कंजम्पशन</strong>, और खपत की तुलना <strong>एक्चुअल</strong> बनाम <strong>एक्सपेक्टेड</strong> के रूप में — वही कॉलम बताता है कि डोज़िंग भटक रही है या नहीं। नाम के बगल का निशान ध्यान माँगती वस्तु दिखाता है।",
          voice: "इन्वेंटरी हर केमिकल को स्टोर के हिसाब से दिखाती है — स्टॉक, पिछली खपत, और एक्चुअल बनाम एक्सपेक्टेड, ताकि डोज़िंग का भटकाव दिखे।",
        },
        {
          label: 'इनसाइट', title: 'इनसाइट और अलर्ट',
          body: "<strong>इनसाइट लिस्ट</strong> वह जगह है जहाँ प्लेटफ़ॉर्म के अपने निष्कर्ष जमा होते हैं — आपके प्लांट पर उठी चेतावनियाँ और अलर्ट, न कि किसी के टाइप किए हुए। ऊपर की पट्टी उन्हें <strong>वर्कस्पेस</strong>, <strong>एसेट</strong>, <strong>प्रायोरिटी</strong> और <strong>रिलेटिव टाइम</strong> से छाँटती है, साथ में <strong>फ्रॉम</strong>–<strong>टू</strong> सीमा, और <strong>+ क्रिएट इनसाइट</strong> से एक हाथ से भी जोड़ी जा सकती है।",
          voice: "इनसाइट लिस्ट प्लेटफ़ॉर्म के अपने अलर्ट रखती है — वर्कस्पेस, एसेट, प्रायोरिटी और समय से छँटे हुए, और एक हाथ से भी बनाई जा सकती है।",
        },
        {
          label: 'स्काडाव्यू', title: 'प्लांट, लाइव चलता हुआ',
          body: "<strong>स्काडाव्यू — ताज होटल्स वर्कस्पेस</strong> वर्कस्पेस खोलता है, <strong>LIVE</strong> बैज और आख़िरी रीडिंग के समय के साथ। <strong>ताज</strong> टाइल पर क्लिक करके सीधे प्लांट डायग्राम में उतरिए, जहाँ हर टैंक, फ़्लोमीटर, ब्लोअर और फ़िल्टर अपना लाइव मान दिखाता है। <strong>घड़ी</strong> और <strong>प्ले</strong> कंट्रोल पुराना समय दोबारा चलाते हैं, और <strong>सिलेक्ट पेज</strong> डायग्राम बदलता है।",
          voice: "स्काडा व्यू वर्कस्पेस लाइव खोलता है। प्लांट टाइल पर क्लिक कीजिए और डायग्राम में उतरिए, जहाँ हर टैंक और फ़्लोमीटर लाइव पढ़ता है।",
        },
        {
          label: 'एनालिटिक्स', title: 'एनालिटिक्स — प्लांट गहराई में',
          body: "<strong>ताज एक्सोटिका (250 KLD) एनालिटिक्स</strong> गहरा पेज है, और आपके सवाल के हिसाब से समूहित है। <strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong> में <strong>टैंक लेवल्स</strong>, <strong>फ़्लो रेट</strong>, <strong>स्लज वेस्टिंग फ़्लोमीटर</strong>, <strong>फ़्लो मीटर्स</strong> और <strong>बैकवॉश फ़्लोमीटर</strong> हैं, तथा <strong>ट्रीटेड</strong> व <strong>इनलेट वॉटर</strong> के कुल <strong>103.26</strong> बनाम <strong>184.32 KL</strong>। नीचे <strong>इनलेट व आउटलेट वॉटर क्वालिटी</strong>, <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong>, <strong>एनर्जी कंजम्पशन</strong> और <strong>इक्विपमेंट परफ़ॉर्मेंस</strong> आते हैं।",
          voice: "एनालिटिक्स प्लांट को सवाल के हिसाब से बाँटता है — मात्रा और उपलब्धता, पानी की गुणवत्ता, जैविक स्वास्थ्य, ऊर्जा, और उपकरण प्रदर्शन।",
        },
        {
          label: 'उपकरण', title: 'हर मशीन, एक या शून्य',
          body: "<strong>इक्विपमेंट परफ़ॉर्मेंस</strong> हर मशीन को एक-या-शून्य रेखा में रखता है, ताकि एक नज़र में पता चले क्या चला और क्या नहीं: <strong>MGF व ACF बैकवॉश</strong>, <strong>UF फीड पंप</strong>, और <strong>UF प्रेशर</strong> जो इनलेट-आउटलेट, अधिकतम-औसत सब एक चार्ट में रखता है। बगल में <strong>ऑटो मैनुअल स्टेटस</strong> बताता है कौन-सी इकाइयाँ ऑटो में हैं — फ़िल्टर फीड पंप और ब्लोअर <strong>1.00</strong> पर, रिएक्टर फीड पंप <strong>0.00</strong> पर — और <strong>ट्रिप स्टेटस</strong> शून्य पर रहता है।",
          voice: "हर मशीन एक या शून्य के रूप में दिखती है। ऑटो मैनुअल स्टेटस बताता है क्या ऑटो में चल रहा है, और ट्रिप स्टेटस शून्य पर रहता है।",
        },
        {
          label: 'सारांश', title: 'किस काम के लिए कौन-सा पेज',
          body: "तो: शिफ़्ट के लिए <strong>डैशबोर्ड</strong> — दक्षता, प्रवाह, गुणवत्ता, ऊर्जा, टैंक और टिकट एक ही स्क्रॉल में। किसी आँकड़े के पीछे की प्रक्रिया चाहिए तो <strong>एनालिटिक्स</strong>। प्लांट जो काम माँग रहा है उसके लिए <strong>टिकट</strong> और <strong>इनसाइट लिस्ट</strong>। स्टोर की खपत के लिए <strong>इन्वेंटरी</strong>। चलता हुआ देखना हो तो <strong>स्काडाव्यू</strong>। एक पेज सिलेक्टर, एक ग्रैन्युलैरिटी, एक समय सीमा — बाकी सब पीछे-पीछे।",
          voice: "शिफ़्ट के लिए डैशबोर्ड, प्रक्रिया के लिए एनालिटिक्स, काम के लिए टिकट और इनसाइट, स्टोर के लिए इन्वेंटरी, देखने के लिए स्काडा व्यू।",
        },
      ],
    },
    ta: {
      title: 'தாஜ் எக்சோட்டிகா,<br><em>முழு ஆலையும் ஒரே திரையில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் நடைமுறைச் சுற்றுப்பயணம் — டாஷ்போர்டு விரிவாக, அதன் பின்னுள்ள டிக்கெட்டுகளும் இருப்பும், மற்றும் நேரலையில் இயங்கும் ஆலை.',
      chapter: 'டெமோ · தாஜ் எக்சோட்டிகா (250 KLD)',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, எல்லாத் திரைகளும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது; உங்கள் ஒவ்வொரு திரையும் அங்கே உள்ளது: <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்ஸ்</strong>, பிறகு <strong>ஸ்காடாவியூ — தாஜ் ஹோட்டல்ஸ் வொர்க்ஸ்பேஸ்</strong>, மற்றும் ஆலையே, <strong>தாஜ் எக்சோட்டிகா (250 KLD)</strong> — அதை விரித்தால் <strong>மெயின்டெனன்ஸ்</strong> மற்றும் <strong>தாஜ் எக்சோட்டிகா (250 KLD) அனலிட்டிக்ஸ்</strong>. மேலுள்ள <strong>தேடல்</strong> பெட்டி எதற்கும் நேரடியாகக் கொண்டு செல்லும்.",
          voice: "எல்லாம் இந்த மெனுவில் இருந்தே — டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டிக்கெட்ஸ், ஸ்காடா வியூ, மற்றும் ஆலையின் சொந்த அனலிட்டிக்ஸ்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>தாஜ் ஹோட்டல் கோவா</strong> பக்கத்தில் திறக்கிறது. கீழுள்ள அனைத்தும் மூன்று கட்டுப்பாடுகளால் இயங்குகின்றன: <strong>பேஜ்</strong> தேர்வி, <strong>கிரானுலாரிட்டி</strong>, மற்றும் <strong>ஃப்ரம்</strong>–<strong>டு</strong> கால வரம்பு. வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong> நேரலைத் தரவை மீண்டும் இழுக்கிறது, <strong>கியர்</strong> பக்க அமைப்புகளை வைத்திருக்கிறது, <strong>கிரிட்</strong> ஐகான் தளவமைப்பையே நிர்வகிக்கிறது.",
          voice: "பேஜ் தேர்வி, கிரானுலாரிட்டி, கால வரம்பு — இவை கீழுள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. கிரிட் ஐகான் தளவமைப்பை மாற்றும்.",
        },
        {
          label: 'கிரானுலாரிட்டி', title: 'நிமிடங்கள், மணிகள் அல்லது நாட்கள்',
          body: "வரம்பைச் சொடுக்கினால் தேர்வி திறக்கிறது: <strong>டுடே</strong>, <strong>யெஸ்டர்டே</strong>, <strong>லாஸ்ட் 24 அவர்ஸ்</strong>, மூன்று, ஏழு, பத்து அல்லது முப்பது நாட்கள், <strong>3</strong> அல்லது <strong>6 மாதங்கள்</strong>, அல்லது இரட்டை நாட்காட்டியில் <strong>கஸ்டம்</strong>. <strong>கிரானுலாரிட்டி</strong> <strong>நிமிடம்</strong>, <strong>மணி</strong>, <strong>நாள்</strong> இடையே மாறுகிறது — ஒரே காலம், மூன்று தெளிவுகளில் — மற்றும் <strong>ஸ்மார்ட் அவர்ஸ்</strong> ஒரே நாளாந்திர நேரப் பகுதியை வரம்பின் ஒவ்வொரு தேதிக்கும் பொருத்துகிறது.",
          voice: "இன்று முதல் ஆறு மாதம் வரை முன்னமைவுகள், அல்லது உங்கள் தேதிகள். கிரானுலாரிட்டி ஒரே காலத்தை நிமிடம், மணி அல்லது நாளாகப் படிக்கும்.",
        },
        {
          label: 'ஓட்டம்', title: 'காலத்தை மாற்றுங்கள், எண்கள் தொடரும்',
          body: "முதல் வரிசை ஆலையை மூன்று எண்களில் வைக்கிறது. வரம்பு <strong>நாட்கள்</strong> மற்றும் <strong>கடந்த 10 நாட்கள்</strong> என அமைந்ததும் அட்டைகள் மீண்டும் கணக்கிடுகின்றன: <strong>பிளான்ட் எஃபிஷியன்சி 51.74%</strong>, <strong>இன்லெட் ஃப்ளோ 1665.31 KL</strong>, <strong>அவுட்லெட் ஃப்ளோ 861.66 KL</strong>. ஒவ்வொரு அட்டையின் கீழுள்ள பட்டை ஒப்பிடப்படும் இரு நேரங்களையும் அவற்றுக்கிடையிலான மாற்றத்தையும் காட்டுகிறது — இங்கே மூன்றுமே முந்தைய காலத்தை விடக் <strong>குறைவு</strong>.",
          voice: "பத்து நாட்களுக்கு அட்டைகள் மீண்டும் கணக்கிடுகின்றன — ஆயிரத்து அறுநூற்று அறுபத்தைந்து கே எல் உள்ளே, எண்ணூற்று அறுபத்தொன்று வெளியே.",
        },
        {
          label: 'தரம்', title: 'தரம், குறிப்புக்கு எதிராக',
          body: "அதற்குக் கீழே தரவரிசை. <strong>அவுட்லெட் டர்பிடிட்டி</strong> அதன் குறிப்பு வரம்புக்குள் வரையப்படுகிறது — பச்சைப் பகுதி வரம்பிற்குள், மேலுள்ள இளஞ்சிவப்பு வெளியே — அருகில் <strong>SBR DO 1.33 ppm</strong> மற்றும் <strong>சராசரி அவுட்லெட் டர்பிடிட்டி 7.08 NTU</strong>. அந்த அட்டையில் <strong>ref: &lt;5 NTU</strong> எனக் குறிக்கப்பட்டுள்ளது, அதனால் இலக்கு எண்ணுடனேயே பயணிக்கிறது.",
          voice: "அவுட்லெட் டர்பிடிட்டி அதன் குறிப்பு வரம்பில் உள்ளது; சராசரி டர்பிடிட்டி ஐந்து என்ற வரம்புக்கு எதிராக ஏழு புள்ளி ஒன்று.",
        },
        {
          label: 'விட்ஜெட்', title: 'பதிவிறக்கு, அல்லது மீண்டும் வரை',
          body: "ஒவ்வொரு விட்ஜெட்டிலும் அதே கருவிகள் ஹோவரில் வருகின்றன: <strong>டவுன்லோட் CSV</strong>, <strong>எக்ஸ்பாண்டட் வியூ</strong>, <strong>டேபிள்</strong> மற்றும் <strong>பார் கிராஃப்</strong> இடையே மாற்றும் வரைபட மெனு, <strong>எடிட் விட்ஜெட்</strong>, மற்றும் <strong>info</strong> குறிப்பு. இங்கே <strong>டேங்க் லெவல்ஸ்</strong> கோட்டிலிருந்து <strong>பார்</strong>களாக மாற்றப்பட்டுள்ளது — அதே தரவு, வேறு வாசிப்பு — மேலே அமைத்த வரம்புக்கே CSV இறங்குகிறது.",
          voice: "எந்த விட்ஜெட்டிலும் ஹோவர் செய்யுங்கள் — பதிவிறக்கம், விரிவாக்கம், வரைபட வகை, திருத்தம். இங்கே டேங்க் லெவல்ஸ் கோட்டிலிருந்து பார்களாக மாறியுள்ளது.",
        },
        {
          label: 'விரிவாக்கம்', title: 'பெரிதாக்கி, காட்சியைச் சேமியுங்கள்',
          body: "<strong>எக்ஸ்பாண்டட் வியூ</strong> விட்ஜெட்டை முழு அகலத்தில் காட்டுகிறது. வரைபடத்தில் இழுத்து நாளின் சில நிமிடங்களுக்குள் பெரிதாக்குங்கள் — இங்கே ஒரு முழு நாளின் <strong>டேங்க் லெவல்ஸ்</strong> நிமிடத் தெளிவில், <strong>ஈக்வலைசேஷன்</strong>, <strong>ஸ்லட்ஜ் ஹோல்டிங்</strong>, <strong>இன்டர்மீடியட்</strong> தொட்டிகள் தனித்தனியாக — <strong>ரீசெட் ஸூம்</strong> மீண்டும் வெளியே கொண்டுவரும். காட்சி வைத்திருக்கத் தகுந்ததானால் <strong>சேவ் கரண்ட் வியூ</strong> பட்டை <strong>சேவ்</strong> அல்லது <strong>சேவ் ஆஸ்</strong> தருகிறது.",
          voice: "எந்த விட்ஜெட்டையும் விரிவாக்கி, இழுத்து நிமிடங்களுக்குள் பெரிதாக்குங்கள். சேவ் கரண்ட் வியூ அடுத்த முறைக்கு தளவமைப்பை வைத்திருக்கும்.",
        },
        {
          label: 'ஆற்றல்', title: 'சுத்திகரிப்பின் செலவு',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> மின் பயன்பாட்டை சுத்திகரித்த நீருடன் இணைக்கிறது: இன்றுவரை <strong>271.6</strong>, <strong>2% குறைவு</strong>, மற்றும் <strong>எனர்ஜி பர் KL 3.31</strong>, அதுவும் <strong>2% குறைவு</strong> — மொத்தம் மட்டுமல்ல, ஒரு அலகு நீருக்கான செலவு. இப்பகுதி மேலுள்ள வரம்பைப் பின்பற்றுவதால், அதே இரு அட்டைகள் நாள், வாரம் அல்லது மாதத்தைப் படிக்கும்.",
          voice: "எனர்ஜி கன்சம்ப்ஷன் இருநூற்று எழுபத்தொன்று, ஒரு கே எல்லுக்கு மூன்று புள்ளி மூன்று ஒன்று. காலத்தை மாற்றினால் அதே அட்டைகள் வாரத்தையும் மாதத்தையும் படிக்கும்.",
        },
        {
          label: 'நிலை', title: 'ஆலை இப்போது',
          body: "<strong>கரண்ட் ஸ்டேட்டஸ்</strong> நேரலைப் படம். <strong>டேங்க் லெவல்ஸ்</strong>-இல் <strong>ஈக்வலைசேஷன் 48.59</strong>, <strong>இன்டர்மீடியட் வாட்டர் 25.8</strong>, <strong>ஸ்லட்ஜ் ஹோல்டிங் −0.75</strong> — லெஜெண்டைச் சொடுக்கி ஒரு தொடரை நீக்கி மற்றவற்றைப் படியுங்கள். <strong>இன்லெட் & அவுட்லெட் ஃப்ளோ</strong> பம்பிங் சுழற்சிகளைக் காட்டுகிறது, <strong>இக்விப்மென்ட்ஸ் ரன்னிங் அவர்ஸ்</strong> ஒவ்வொரு பம்ப் மற்றும் ப்ளோயரின் மணிகளைப் பட்டியலிடுகிறது.",
          voice: "மூன்று தொட்டிகளின் அளவுகள், அருகில் பம்பிங் சுழற்சிகள், மற்றும் ஒவ்வொரு பம்ப், ப்ளோயரின் இயங்கிய மணிகள்.",
        },
        {
          label: 'மணிகள்', title: 'மணிகள், நான்கு காலங்களில் ஒரே சமயம்',
          body: "முழு அகல <strong>இக்விப்மென்ட்ஸ் ரன்னிங் அவர்ஸ்</strong> அட்டவணை ஒவ்வொரு இயந்திரத்தையும் நான்கு காலங்களில் ஒரே சமயம் படிக்கிறது — <strong>டுடே</strong>, <strong>லாஸ்ட் 24 அவர்ஸ்</strong>, <strong>யெஸ்டர்டே</strong>, <strong>லாஸ்ட் 7 டேஸ்</strong> — <strong>ரெஃபரன்ஸ்</strong> தேர்வி எது எண்ணப்படுகிறது என்பதைத் தீர்மானிக்கிறது. வாரத்தில் <strong>ரியாக்டர் ஃபீட் பம்ப்-1</strong> <strong>174.02</strong> மணி, பம்ப் 2 மற்றும் 3 <strong>0</strong> — எந்த அலகு ஆலையைச் சுமக்கிறது என்பது தெளிவு.",
          voice: "அதே இயந்திரங்கள் இன்று, கடந்த இருபத்தி நான்கு மணி, நேற்று, கடந்த ஏழு நாட்களில் — எந்த அலகு ஆலையைச் சுமக்கிறது என்று தெரியும்.",
        },
        {
          label: 'டிக்கெட்', title: 'கண்டறிதல்கள் டிக்கெட்டாகின்றன',
          body: "<strong>டோட்டல் இன்லெட் & அவுட்லெட் வாட்டர்</strong> இரு திரட்டு வளைவுகளையும் அருகருகே ஓட்டுகிறது — உள்ளே <strong>184.25 KL</strong>, வெளியே <strong>103.26 KL</strong>. அருகில் <strong>டிக்கெட்ஸ் ஜெனரேட்டட் & க்ளோஸ்டு</strong> ஆலை எழுப்பிய வேலையைச் சுமக்கிறது — <em>“ஒரு ஃப்ளோமீட்டர் இணைக்கப்படாததால் இன்லெட் ஃப்ளோ குறைவு”</em>, <em>“ரியாக்டர் ஃபீட் பம்ப் ஆட்டோ மோடில் இயங்குகிறது”</em> — ஒவ்வொன்றும் ஆலை, தேதி, <strong>டைப் & டேக்ஸ்</strong> நெடுவரிசையுடன்.",
          voice: "திரட்டு இன்லெட்டும் அவுட்லெட்டும், அருகில் ஆலை எழுப்பிய டிக்கெட்டுகள் — ஒரு ஃப்ளோமீட்டர் இணைக்கப்படவில்லை, ஒரு பம்ப் ஆட்டோவில் விடப்பட்டது.",
        },
        {
          label: 'வரிசை', title: 'ஒவ்வொரு டிக்கெட்டும் எண்ணப்பட்டது',
          body: "<strong>டிக்கெட்ஸ்</strong> பக்கம் எண்ணிக்கையுடன் திறக்கிறது: <strong>2 திறந்தவை</strong> — எதுவும் கிரிட்டிகல் இல்லை, ஒன்று ஓவர்டியூ, ஒன்று எஸ்கலேட்டட் — மற்றும் <strong>29 மூடப்பட்டவை</strong>, அவற்றில் <strong>4 கிரிட்டிகல்</strong>, <strong>14 ஓவர்டியூ</strong>, <strong>11 எஸ்கலேட்டட்</strong>. வலதுபுறம் அதே மொத்தங்கள் குழுவாரியாக — <strong>அட்மின்</strong>, <strong>எலக்ட்ரிக்கல்</strong>, <strong>லேப்</strong>, <strong>ப்ராசஸ்</strong>, <strong>டிபி சிஸ்டம்</strong>, <strong>மெக்கானிக்கல்</strong> — மூடப்பட்ட வேலை <strong>23 ப்ராசஸ்</strong> மற்றும் <strong>6 எலக்ட்ரிக்கல்</strong>.",
          voice: "இரண்டு திறந்த டிக்கெட்டுகள், இருபத்தொன்பது மூடப்பட்டவை — கிரிட்டிகல், ஓவர்டியூ, எஸ்கலேட்டட் என்றும், குழுவாரியாகவும் பிரிக்கப்பட்டவை.",
        },
        {
          label: 'விவரம்', title: 'ஒரு டிக்கெட்டின் உள்ளே',
          body: "ஒன்றைத் திறந்தால் முழுக் கதையும் கிடைக்கும்: <strong>ப்ராப்ளம்</strong> — <em>“க்ளியர் வாட்டர் டேங்க் அளவு 90% எட்டிவிட்டது”</em> — மற்றும் ஆபரேட்டர் என்ன செய்ய வேண்டும் என்பதைச் சரியாகச் சொல்லும் <strong>டெஸ்கிரிப்ஷன்</strong>, அருகில் <strong>இக்விப்மென்ட்</strong> மற்றும் <strong>கேட்டகரி</strong>. <strong>ஹிஸ்டரி</strong> நெடுவரிசை தணிக்கைத் தடம்: பிரச்சினை எப்போது எழுந்தது, மற்றும் <em>“இந்த டிக்கெட் சிஸ்டத்தால் தானாக தீர்க்கப்பட்டது”</em> பத்தொன்பது நிமிடங்களுக்குப் பின். <strong>ஆட் அ காமெண்ட்</strong> அல்லது <strong>ரீஓபன்</strong>.",
          voice: "ஒவ்வொரு டிக்கெட்டிலும் பிரச்சினை, செய்ய வேண்டியது, வரலாறு — இது பத்தொன்பது நிமிடங்களில் சிஸ்டத்தால் தானாகத் தீர்க்கப்பட்டது.",
        },
        {
          label: 'உருவாக்கு', title: 'நீங்களே ஒன்றை எழுப்புங்கள்',
          body: "<strong>க்ரியேட் நியூ டிக்கெட்</strong> கைமுறை வழி: ஒரு <strong>ப்ராப்ளம் ஸ்டேட்மென்ட்</strong>, விருப்பமான <strong>டெஸ்கிரிப்ஷன்</strong>, தொடர்புடைய <strong>இக்விப்மென்ட்</strong>, ஒரு <strong>இஷ்யூ டைப்</strong>. அதனால்தான் வரிசைகளில் <strong>ஆட்டோமேட்டிக்</strong> அல்லது <strong>மேனுவல்</strong> டேக் — பெரும்பாலானவற்றை சிஸ்டம் தரவிலிருந்து எழுப்புகிறது, மீதியை உங்கள் குழு.",
          voice: "க்ரியேட் நியூ டிக்கெட் ப்ராப்ளம் ஸ்டேட்மென்ட், இக்விப்மென்ட், இஷ்யூ டைப் கேட்கிறது — அதனால்தான் ஒவ்வொன்றும் ஆட்டோமேட்டிக் அல்லது மேனுவல்.",
        },
        {
          label: 'இருப்பு', title: 'ஸ்டோர் என்ன செலவழிக்கிறது',
          body: "<strong>இன்வென்டரி</strong> நுகர்பொருட்களை ஸ்டோர் வாரியாகப் பட்டியலிடுகிறது. <strong>தாஜ் எக்சோட்டிகா ஸ்டோர்</strong>-இல் <strong>யூரியா</strong>, <strong>DAP</strong>, <strong>ஹைப்போ</strong> — அனைத்தும் <strong>கெமிக்கல்ஸ்</strong> — <strong>ஸ்டாக் அவைலபிள்</strong>, <strong>லாஸ்ட் கன்சம்ப்ஷன்</strong>, மற்றும் நுகர்வு <strong>ஆக்சுவல்</strong> எதிராக <strong>எக்ஸ்பெக்டட்</strong> — டோசிங் விலகுகிறதா என்பதைச் சொல்லும் நெடுவரிசை. பெயருக்கு அருகிலுள்ள கொடி கவனம் தேவைப்படும் பொருளைக் குறிக்கிறது.",
          voice: "இன்வென்டரி ஒவ்வொரு ரசாயனத்தையும் ஸ்டோர் வாரியாகக் காட்டுகிறது — இருப்பு, கடைசி நுகர்வு, ஆக்சுவல் எதிராக எக்ஸ்பெக்டட்.",
        },
        {
          label: 'இன்சைட்', title: 'இன்சைட்டுகளும் எச்சரிக்கைகளும்',
          body: "<strong>இன்சைட் லிஸ்ட்</strong> என்பது தளத்தின் சொந்தக் கண்டறிதல்கள் சேரும் இடம் — யாரோ தட்டச்சு செய்ததல்ல, உங்கள் ஆலைக்கு எதிராக எழுந்த எச்சரிக்கைகளும் அலெர்ட்டுகளும். மேலுள்ள பட்டை அவற்றை <strong>வொர்க்ஸ்பேஸ்</strong>, <strong>அஸெட்</strong>, <strong>ப்ரையாரிட்டி</strong>, <strong>ரிலேட்டிவ் டைம்</strong> மூலம் குறுக்குகிறது, அருகில் <strong>ஃப்ரம்</strong>–<strong>டு</strong> வரம்பு, மற்றும் <strong>+ க்ரியேட் இன்சைட்</strong> கைமுறையாக ஒன்றைச் சேர்க்கிறது.",
          voice: "இன்சைட் லிஸ்ட் தளத்தின் சொந்த அலெர்ட்டுகளைச் சேர்க்கிறது — வொர்க்ஸ்பேஸ், அஸெட், ப்ரையாரிட்டி, நேரம் மூலம் குறுக்கப்பட்டவை.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'ஆலை, நேரலையில்',
          body: "<strong>ஸ்காடாவியூ — தாஜ் ஹோட்டல்ஸ் வொர்க்ஸ்பேஸ்</strong> வொர்க்ஸ்பேஸை <strong>LIVE</strong> பேட்ஜுடனும் கடைசி ரீடிங்கின் நேரமுத்திரையுடனும் திறக்கிறது. <strong>தாஜ்</strong> டைலைச் சொடுக்கி ஆலை வரைபடத்திற்குள் இறங்குங்கள், அங்கே ஒவ்வொரு தொட்டி, ஃப்ளோமீட்டர், ப்ளோயர், ஃபில்டரும் தன் நேரலை மதிப்பைக் காட்டும். <strong>கடிகாரம்</strong> மற்றும் <strong>ப்ளே</strong> கட்டுப்பாடுகள் முந்தைய நேரத்தை மீண்டும் ஓட்டும், <strong>செலக்ட் பேஜ்</strong> வரைபடங்களை மாற்றும்.",
          voice: "ஸ்காடா வியூ வொர்க்ஸ்பேஸை நேரலையில் திறக்கிறது. ஆலை டைலைச் சொடுக்கி வரைபடத்திற்குள் இறங்குங்கள்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'அனலிட்டிக்ஸ் — ஆலை ஆழத்தில்',
          body: "<strong>தாஜ் எக்சோட்டிகா (250 KLD) அனலிட்டிக்ஸ்</strong> ஆழமான பக்கம், நீங்கள் கேட்கும் கேள்வியின்படி தொகுக்கப்பட்டது. <strong>வாட்டர் குவாண்டிட்டி அண்ட் அவைலபிலிட்டி</strong>-இல் <strong>டேங்க் லெவல்ஸ்</strong>, <strong>ஃப்ளோ ரேட்</strong>, <strong>ஸ்லட்ஜ் வேஸ்டிங் ஃப்ளோமீட்டர்</strong>, <strong>ஃப்ளோ மீட்டர்ஸ்</strong>, <strong>பேக்வாஷ் ஃப்ளோமீட்டர்</strong>, மற்றும் <strong>ட்ரீட்டட்</strong> & <strong>இன்லெட் வாட்டர்</strong> மொத்தம் <strong>103.26</strong> எதிராக <strong>184.32 KL</strong>. கீழே <strong>இன்லெட் அண்ட் அவுட்லெட் வாட்டர் குவாலிட்டி</strong>, <strong>பயாலஜிக்கல் ப்ராசஸ் ஹெல்த்</strong>, <strong>எனர்ஜி கன்சம்ப்ஷன்</strong>, <strong>இக்விப்மென்ட் பெர்ஃபார்மன்ஸ்</strong>.",
          voice: "அனலிட்டிக்ஸ் ஆலையைக் கேள்வி வாரியாகப் பிரிக்கிறது — அளவு, நீர்த் தரம், உயிரியல் ஆரோக்கியம், ஆற்றல், உபகரணச் செயல்திறன்.",
        },
        {
          label: 'உபகரணம்', title: 'ஒவ்வொரு இயந்திரமும் ஒன்று அல்லது பூஜ்ஜியம்',
          body: "<strong>இக்விப்மென்ட் பெர்ஃபார்மன்ஸ்</strong> ஒவ்வொரு இயந்திரத்தையும் ஒன்று-அல்லது-பூஜ்ஜியக் கோடாக வரைகிறது, எனவே எது ஓடியது எது ஓடவில்லை என்பது ஒரு பார்வையில் தெரியும்: <strong>MGF & ACF பேக்வாஷ்</strong>, <strong>UF ஃபீட் பம்ப்ஸ்</strong>, மற்றும் இன்லெட்-அவுட்லெட், அதிகபட்ச-சராசரி அனைத்தையும் ஒரே வரைபடத்தில் வைக்கும் <strong>UF ப்ரஷர்</strong>. அருகில் <strong>ஆட்டோ மேனுவல் ஸ்டேட்டஸ்</strong> எந்த அலகுகள் ஆட்டோவில் உள்ளன எனக் காட்டுகிறது — ஃபில்டர் ஃபீட் பம்ப்களும் ப்ளோயர்களும் <strong>1.00</strong>, ரியாக்டர் ஃபீட் பம்ப்கள் <strong>0.00</strong> — <strong>ட்ரிப் ஸ்டேட்டஸ்</strong> பூஜ்ஜியத்தில் இருக்கிறது.",
          voice: "ஒவ்வொரு இயந்திரமும் ஒன்று அல்லது பூஜ்ஜியம். ஆட்டோ மேனுவல் ஸ்டேட்டஸ் எது ஆட்டோவில் இயங்குகிறது எனக் காட்டும்; ட்ரிப் ஸ்டேட்டஸ் பூஜ்ஜியம்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "எனவே: ஷிஃப்டுக்கு <strong>டாஷ்போர்டு</strong> — திறன், ஓட்டம், தரம், ஆற்றல், தொட்டிகள், டிக்கெட்டுகள் ஒரே ஸ்க்ரோலில். ஓர் எண்ணுக்குப் பின்னுள்ள செயல்முறை வேண்டுமெனில் <strong>அனலிட்டிக்ஸ்</strong>. ஆலை கேட்கும் வேலைக்கு <strong>டிக்கெட்ஸ்</strong> மற்றும் <strong>இன்சைட் லிஸ்ட்</strong>. ஸ்டோர் நுகர்வுக்கு <strong>இன்வென்டரி</strong>. ஓடுவதைப் பார்க்க <strong>ஸ்காடாவியூ</strong>. ஒரு பேஜ் தேர்வி, ஒரு கிரானுலாரிட்டி, ஒரு கால வரம்பு — மற்றவை தொடரும்.",
          voice: "ஷிஃப்டுக்கு டாஷ்போர்டு, செயல்முறைக்கு அனலிட்டிக்ஸ், வேலைக்கு டிக்கெட்ஸ், ஸ்டோருக்கு இன்வென்டரி, பார்க்க ஸ்காடா வியூ.",
        },
      ],
    },
    mr: {
      title: 'ताज एक्सोटिका,<br><em>संपूर्ण प्लांट एका स्क्रीनवर.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा व्यावहारिक फेरफटका — डॅशबोर्ड सविस्तर, त्यामागची तिकिटे आणि इन्व्हेंटरी, आणि प्रत्यक्ष चालणारा प्लांट.',
      chapter: 'डेमो · ताज एक्सोटिका (250 KLD)',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेन्यू, प्रत्येक स्क्रीन',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो आणि तुमची प्रत्येक स्क्रीन तिथेच आहे: <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>इनसाइट लिस्ट</strong> आणि <strong>तिकिटे</strong>, मग <strong>स्काडाव्ह्यू — ताज हॉटेल्स वर्कस्पेस</strong>, आणि प्लांट स्वतः, <strong>ताज एक्सोटिका (250 KLD)</strong> — तो उघडल्यास <strong>मेंटेनन्स</strong> आणि <strong>ताज एक्सोटिका (250 KLD) अॅनालिटिक्स</strong> मिळतात. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "सर्व काही याच मेन्यूतून — डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, तिकिटे, स्काडा व्ह्यू, आणि प्लांटसोबत त्याचे अॅनालिटिक्स.",
        },
        {
          label: 'नियंत्रणे', title: 'पान चालवणारी नियंत्रणे',
          body: "<strong>डॅशबोर्ड</strong> <strong>ताज हॉटेल गोवा</strong> पानावर उघडतो. खालचे सर्व तीन नियंत्रणांनी चालते: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong>, आणि <strong>फ्रॉम</strong>–<strong>टू</strong> कालमर्यादा. उजवीकडे <strong>रिफ्रेश</strong> थेट डेटा पुन्हा आणतो, <strong>गिअर</strong>मध्ये पान-सेटिंग्ज आहेत, आणि <strong>ग्रिड</strong> आयकॉनने मांडणी सांभाळली जाते.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा खालचे प्रत्येक विजेट चालवतात. ग्रिड आयकॉन मांडणी बदलतो.",
        },
        {
          label: 'ग्रॅन्युलॅरिटी', title: 'मिनिटे, तास किंवा दिवस',
          body: "कालमर्यादेवर क्लिक केल्यास पिकर उघडतो: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 अवर्स</strong>, तीन, सात, दहा किंवा तीस दिवस, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा दोन कॅलेंडरांवर <strong>कस्टम</strong>. <strong>ग्रॅन्युलॅरिटी</strong> <strong>मिनिटे</strong>, <strong>तास</strong> आणि <strong>दिवस</strong> यांत बदलते — तीच कालमर्यादा तीन रेझोल्यूशनवर — आणि <strong>स्मार्ट अवर्स</strong> तोच दैनिक वेळखंड मर्यादेतील प्रत्येक तारखेला लावते.",
          voice: "आजपासून सहा महिन्यांपर्यंतचे प्रीसेट, किंवा तुमच्या तारखा. ग्रॅन्युलॅरिटी तीच मर्यादा मिनिटे, तास किंवा दिवसांत वाचते.",
        },
        {
          label: 'प्रवाह', title: 'मर्यादा बदला, आकडे मागोमाग येतात',
          body: "पहिली ओळ प्लांटला तीन आकड्यांत मांडते. मर्यादा <strong>दिवस</strong> व <strong>लास्ट 10 डेज</strong> ठेवताच कार्डे पुन्हा मोजतात: <strong>प्लांट एफिशियन्सी 51.74%</strong>, <strong>इनलेट फ्लो 1665.31 KL</strong> आणि <strong>आउटलेट फ्लो 861.66 KL</strong>. प्रत्येक कार्डाखालची पट्टी तुलनेतील दोन वेळा आणि त्यांतील बदल दाखवते — इथे तिन्ही मागच्या कालावधीपेक्षा <strong>खाली</strong>.",
          voice: "दहा दिवसांवर कार्डे पुन्हा मोजतात — सोळाशे पासष्ट के एल आत, आठशे एकसष्ट बाहेर, प्रत्येक कार्ड आपला बदल घेऊन.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भाच्या तुलनेत',
          body: "खाली गुणवत्तेची ओळ. <strong>आउटलेट टर्बिडिटी</strong> तिच्या संदर्भ पट्ट्यात काढली आहे — हिरवा भाग मर्यादेत, वरचा गुलाबी बाहेर — शेजारी <strong>SBR DO 1.33 ppm</strong> आणि <strong>सरासरी आउटलेट टर्बिडिटी 7.08 NTU</strong>. त्या कार्डावर <strong>ref: &lt;5 NTU</strong> लिहिले आहे, म्हणजे लक्ष्य आकड्यासोबतच फिरते, कुणाच्या स्मरणात राहत नाही.",
          voice: "आउटलेट टर्बिडिटी तिच्या संदर्भ पट्ट्यात आहे, आणि सरासरी टर्बिडिटी पाचच्या मर्यादेपुढे सात पूर्णांक एक वाचते.",
        },
        {
          label: 'विजेट', title: 'डाउनलोड करा, किंवा पुन्हा काढा',
          body: "प्रत्येक विजेटवर हॉवर केल्यास तीच साधने येतात: <strong>डाउनलोड CSV</strong>, <strong>एक्सपांडेड व्ह्यू</strong>, <strong>टेबल</strong> व <strong>बार ग्राफ</strong> यांत बदलणारा चार्ट-टाइप मेन्यू, <strong>एडिट विजेट</strong>, आणि <strong>info</strong> टीप. इथे <strong>टँक लेव्हल्स</strong> रेषेवरून <strong>बार</strong>मध्ये बदलले आहे — तोच डेटा, वेगळे वाचन — आणि CSV वरच्या मर्यादेसाठीच उतरते.",
          voice: "कोणत्याही विजेटवर हॉवर करा — डाउनलोड, एक्सपांड, चार्ट टाइप, एडिट. इथे टँक लेव्हल्स रेषेवरून बारमध्ये बदलले आहे.",
        },
        {
          label: 'विस्तार', title: 'झूम करा, मग दृश्य जपा',
          body: "<strong>एक्सपांडेड व्ह्यू</strong> विजेटला पूर्ण रुंदी देतो. चार्टवर ओढून दिवसातल्या काही मिनिटांत झूम करा — इथे संपूर्ण दिवसाचे <strong>टँक लेव्हल्स</strong> मिनिट-पातळीवर, <strong>इक्वलायझेशन</strong>, <strong>स्लज होल्डिंग</strong> व <strong>इंटरमीडिएट</strong> टाक्या वेगवेगळ्या — आणि <strong>रीसेट झूम</strong> परत आणतो. दृश्य ठेवण्यासारखे असेल तर <strong>सेव्ह करंट व्ह्यू</strong> पट्टी <strong>सेव्ह</strong> किंवा <strong>सेव्ह अॅज</strong> देते.",
          voice: "कोणतेही विजेट उघडा, ओढून मिनिटांत झूम करा, रीसेटने परत या. सेव्ह करंट व्ह्यू पुढच्या वेळेसाठी मांडणी ठेवते.",
        },
        {
          label: 'ऊर्जा', title: 'प्रक्रियेचा खर्च',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> वापर आणि प्रक्रिया झालेले पाणी जोडते: आजवर <strong>271.6</strong>, <strong>2% खाली</strong>, आणि <strong>एनर्जी पर KL 3.31</strong>, तेही <strong>2% खाली</strong> — केवळ एकूण नव्हे, तर प्रति एकक पाण्याचा खर्च. हा भाग वरची मर्यादा पाळतो, त्यामुळे तीच दोन कार्डे दिवस, आठवडा किंवा महिना वाचतात.",
          voice: "एनर्जी कन्झम्प्शन दोनशे एकाहत्तर, आणि प्रति के एल तीन पूर्णांक तीन एक. मर्यादा बदला, तीच कार्डे आठवडा किंवा महिना वाचतील.",
        },
        {
          label: 'स्थिती', title: 'प्लांट आत्ता',
          body: "<strong>करंट स्टेटस</strong> हे थेट चित्र आहे. <strong>टँक लेव्हल्स</strong>मध्ये <strong>इक्वलायझेशन 48.59</strong>, <strong>इंटरमीडिएट वॉटर 25.8</strong> आणि <strong>स्लज होल्डिंग −0.75</strong> — लेजंडवर क्लिक करून एखादी मालिका काढून बाकी वाचा. <strong>इनलेट व आउटलेट फ्लो</strong> पंपिंग चक्रे दाखवतो, आणि <strong>इक्विपमेंट्स रनिंग अवर्स</strong> प्रत्येक पंप व ब्लोअरचे तास मांडते.",
          voice: "तिन्ही टाक्यांच्या पातळ्या, शेजारी पंपिंग चक्रे, आणि प्रत्येक पंप व ब्लोअरचे चाललेले तास.",
        },
        {
          label: 'तास', title: 'तास, एकाच वेळी चार कालावधींत',
          body: "पूर्ण रुंदीची <strong>इक्विपमेंट्स रनिंग अवर्स</strong> तक्ता प्रत्येक यंत्राला एकाच वेळी चार कालावधींत वाचतो — <strong>टुडे</strong>, <strong>लास्ट 24 अवर्स</strong>, <strong>यस्टरडे</strong> आणि <strong>लास्ट 7 डेज</strong> — आणि <strong>रेफरन्स</strong> सिलेक्टर काय मोजले जाते ते ठरवतो. आठवड्यात <strong>रिअॅक्टर फीड पंप-1</strong> चे <strong>174.02</strong> तास, तर पंप 2 व 3 चे <strong>0</strong> — म्हणजे प्लांट कोणते यंत्र ओढते आहे ते स्पष्ट.",
          voice: "तीच यंत्रे आज, गेल्या चोवीस तासांत, काल आणि गेल्या सात दिवसांत — म्हणजे प्लांट कोणते यंत्र ओढते आहे ते दिसते.",
        },
        {
          label: 'तिकिटे', title: 'निष्कर्ष तिकिटे होतात',
          body: "<strong>टोटल इनलेट व आउटलेट वॉटर</strong> दोन्ही संचयी वक्र शेजारी चालवते — आत <strong>184.25 KL</strong>, बाहेर <strong>103.26 KL</strong>. शेजारी <strong>तिकिटे जनरेटेड व क्लोज्ड</strong> प्लांटने उपस्थित केलेले काम ठेवते — <em>“एक फ्लोमीटर जोडलेला नसल्याने इनलेट फ्लो कमी”</em> आणि <em>“रिअॅक्टर फीड पंप ऑटो मोडमध्ये चालू आहे”</em> — प्रत्येक आपला प्लांट, तारीख आणि <strong>टाइप व टॅग्ज</strong> स्तंभासह.",
          voice: "संचयी इनलेट विरुद्ध आउटलेट, आणि शेजारी प्लांटने उपस्थित केलेली तिकिटे — एक फ्लोमीटर जोडलेला नाही, एक पंप ऑटोमध्ये राहिला.",
        },
        {
          label: 'रांग', title: 'प्रत्येक तिकीट, मोजलेले',
          body: "<strong>तिकिटे</strong> पान मोजणीने उघडते: <strong>2 खुली</strong> — एकही क्रिटिकल नाही, एक ओव्हरड्यू, एक एस्कलेटेड — आणि <strong>29 बंद</strong>, त्यांत <strong>4 क्रिटिकल</strong>, <strong>14 ओव्हरड्यू</strong> व <strong>11 एस्कलेटेड</strong>. उजवीकडे तेच एकूण संघानुसार विभागलेले — <strong>अॅडमिन</strong>, <strong>इलेक्ट्रिकल</strong>, <strong>लॅब</strong>, <strong>प्रोसेस</strong>, <strong>डीपी सिस्टम</strong>, <strong>मेकॅनिकल</strong> — बंद काम <strong>23 प्रोसेस</strong> आणि <strong>6 इलेक्ट्रिकल</strong>वर आहे.",
          voice: "दोन खुली तिकिटे आणि एकोणतीस बंद, क्रिटिकल, ओव्हरड्यू व एस्कलेटेडमध्ये आणि पुन्हा संघानुसार विभागलेली.",
        },
        {
          label: 'तपशील', title: 'तिकिटाच्या आत',
          body: "एखादे उघडा आणि पूर्ण कहाणी मिळते: <strong>प्रॉब्लेम</strong> — <em>“क्लियर वॉटर टँकची पातळी 90% झाली आहे”</em> — आणि ऑपरेटरने नेमके काय करायचे ते सांगणारे <strong>डिस्क्रिप्शन</strong>, शेजारी <strong>इक्विपमेंट</strong> व <strong>कॅटेगरी</strong>. <strong>हिस्टरी</strong> स्तंभ हा ऑडिट ट्रेल आहे: समस्या कधी उद्भवली, आणि <em>“हे तिकीट सिस्टमने आपोआप सोडवले”</em> एकोणीस मिनिटांनी. <strong>अॅड अ कमेंट</strong>ने केलेले काम नोंदवा, किंवा पुन्हा आल्यास <strong>रीओपन</strong>.",
          voice: "प्रत्येक तिकिटात समस्या, करायचा उपाय आणि इतिहास असतो — हे एकोणीस मिनिटांनी सिस्टमने आपोआप सोडवले.",
        },
        {
          label: 'नवे तिकीट', title: 'तुम्हीही एक उपस्थित करा',
          body: "<strong>क्रिएट न्यू तिकीट</strong> हा हाताने करण्याचा मार्ग: एक <strong>प्रॉब्लेम स्टेटमेंट</strong>, ऐच्छिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>इक्विपमेंट</strong> आणि एक <strong>इश्यू टाइप</strong>. म्हणूनच ओळींवर <strong>ऑटोमॅटिक</strong> किंवा <strong>मॅन्युअल</strong> टॅग असतो — बहुतांश सिस्टम डेटावरून उपस्थित करते, बाकी तुमचा संघ.",
          voice: "क्रिएट न्यू तिकीट प्रॉब्लेम स्टेटमेंट, इक्विपमेंट आणि इश्यू टाइप घेते — म्हणूनच प्रत्येक तिकीट ऑटोमॅटिक किंवा मॅन्युअल असते.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'स्टोअर काय वापरते आहे',
          body: "<strong>इन्व्हेंटरी</strong> उपभोग्य वस्तू स्टोअरनुसार मांडते. <strong>ताज एक्सोटिका स्टोअर</strong>मध्ये <strong>युरिया</strong>, <strong>DAP</strong> आणि <strong>हायपो</strong> — सर्व <strong>केमिकल्स</strong> — सोबत <strong>स्टॉक अव्हेलेबल</strong>, <strong>लास्ट कन्झम्प्शन</strong>, आणि वापराची तुलना <strong>अॅक्च्युअल</strong> विरुद्ध <strong>एक्स्पेक्टेड</strong> — हाच स्तंभ डोसिंग भरकटते आहे का ते सांगतो. नावाशेजारचा ध्वज लक्ष मागणारी वस्तू दाखवतो.",
          voice: "इन्व्हेंटरी प्रत्येक रसायन स्टोअरनुसार दाखवते — स्टॉक, शेवटचा वापर, आणि अॅक्च्युअल विरुद्ध एक्स्पेक्टेड, म्हणजे डोसिंगचे भरकटणे दिसते.",
        },
        {
          label: 'इनसाइट', title: 'इनसाइट आणि अलर्ट',
          body: "<strong>इनसाइट लिस्ट</strong> इथे प्लॅटफॉर्मचे स्वतःचे निष्कर्ष जमा होतात — कुणी टाइप केलेले नव्हे, तर तुमच्या प्लांटवर उमटलेल्या सूचना व अलर्ट. वरची पट्टी त्यांना <strong>वर्कस्पेस</strong>, <strong>अॅसेट</strong>, <strong>प्रायोरिटी</strong> व <strong>रिलेटिव्ह टाइम</strong>ने अरुंद करते, सोबत <strong>फ्रॉम</strong>–<strong>टू</strong> मर्यादा, आणि <strong>+ क्रिएट इनसाइट</strong> हाताने एक जोडते.",
          voice: "इनसाइट लिस्ट प्लॅटफॉर्मचे स्वतःचे अलर्ट जमा करते — वर्कस्पेस, अॅसेट, प्रायोरिटी आणि वेळेनुसार अरुंद केलेले.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'प्लांट, प्रत्यक्ष चालताना',
          body: "<strong>स्काडाव्ह्यू — ताज हॉटेल्स वर्कस्पेस</strong> वर्कस्पेस उघडतो, <strong>LIVE</strong> बॅज आणि शेवटच्या रीडिंगच्या वेळेसह. <strong>ताज</strong> टाइलवर क्लिक करून थेट प्लांट आकृतीत उतरा, जिथे प्रत्येक टाकी, फ्लोमीटर, ब्लोअर व फिल्टर आपले थेट मूल्य दाखवते. <strong>घड्याळ</strong> व <strong>प्ले</strong> नियंत्रणे आधीचा क्षण पुन्हा चालवतात, आणि <strong>सिलेक्ट पेज</strong> आकृत्या बदलते.",
          voice: "स्काडा व्ह्यू वर्कस्पेस थेट उघडतो. प्लांट टाइलवर क्लिक करून आकृतीत उतरा, जिथे प्रत्येक टाकी व फ्लोमीटर थेट वाचते.",
        },
        {
          label: 'अॅनालिटिक्स', title: 'अॅनालिटिक्स — प्लांट खोलात',
          body: "<strong>ताज एक्सोटिका (250 KLD) अॅनालिटिक्स</strong> हे खोल पान आहे, आणि तुमच्या प्रश्नानुसार गटबद्ध. <strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong>मध्ये <strong>टँक लेव्हल्स</strong>, <strong>फ्लो रेट</strong>, <strong>स्लज वेस्टिंग फ्लोमीटर</strong>, <strong>फ्लो मीटर्स</strong> व <strong>बॅकवॉश फ्लोमीटर</strong>, आणि <strong>ट्रीटेड</strong> व <strong>इनलेट वॉटर</strong> एकूण <strong>103.26</strong> विरुद्ध <strong>184.32 KL</strong>. खाली <strong>इनलेट व आउटलेट वॉटर क्वालिटी</strong>, <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong>, <strong>एनर्जी कन्झम्प्शन</strong> व <strong>इक्विपमेंट परफॉर्मन्स</strong> येतात.",
          voice: "अॅनालिटिक्स प्लांटला प्रश्नानुसार गटबद्ध करते — प्रमाण व उपलब्धता, पाण्याची गुणवत्ता, जैविक आरोग्य, ऊर्जा, आणि उपकरण कामगिरी.",
        },
        {
          label: 'उपकरणे', title: 'प्रत्येक यंत्र, एक किंवा शून्य',
          body: "<strong>इक्विपमेंट परफॉर्मन्स</strong> प्रत्येक यंत्राला एक-किंवा-शून्य रेषेत काढते, म्हणजे काय चालले आणि काय नाही ते एका नजरेत कळते: <strong>MGF व ACF बॅकवॉश</strong>, <strong>UF फीड पंप</strong>, आणि इनलेट-आउटलेट, कमाल-सरासरी सर्व एकाच चार्टवर ठेवणारा <strong>UF प्रेशर</strong>. शेजारी <strong>ऑटो मॅन्युअल स्टेटस</strong> कोणती यंत्रे ऑटोमध्ये आहेत ते दाखवते — फिल्टर फीड पंप व ब्लोअर <strong>1.00</strong>वर, रिअॅक्टर फीड पंप <strong>0.00</strong>वर — आणि <strong>ट्रिप स्टेटस</strong> शून्यावर राहतो.",
          voice: "प्रत्येक यंत्र एक किंवा शून्य म्हणून दिसते. ऑटो मॅन्युअल स्टेटस काय ऑटोमध्ये चालू आहे ते दाखवतो, आणि ट्रिप स्टेटस शून्यावर राहतो.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणते पान',
          body: "म्हणून: शिफ्टसाठी <strong>डॅशबोर्ड</strong> — कार्यक्षमता, प्रवाह, गुणवत्ता, ऊर्जा, टाक्या आणि तिकिटे एकाच स्क्रोलमध्ये. एखाद्या आकड्यामागची प्रक्रिया हवी असेल तर <strong>अॅनालिटिक्स</strong>. प्लांट जे काम मागतो आहे त्यासाठी <strong>तिकिटे</strong> आणि <strong>इनसाइट लिस्ट</strong>. स्टोअरच्या वापरासाठी <strong>इन्व्हेंटरी</strong>. चालताना पाहायचे असेल तर <strong>स्काडाव्ह्यू</strong>. एक पेज सिलेक्टर, एक ग्रॅन्युलॅरिटी, एक कालमर्यादा — आणि बाकी सर्व मागोमाग.",
          voice: "शिफ्टसाठी डॅशबोर्ड, प्रक्रियेसाठी अॅनालिटिक्स, कामासाठी तिकिटे आणि इनसाइट, स्टोअरसाठी इन्व्हेंटरी, पाहण्यासाठी स्काडा व्ह्यू.",
        },
      ],
    },
  },
};

export default lesson;
