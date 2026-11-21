import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-park-view-spa-dashboard`;

/**
 * Demo — Park View Spa, the whole platform in one tour.  (hidden module-demos)
 *
 * Built from the 6:52 recording uploaded 2026-11-19 (Preeti Kuhad / Park View
 * Spa account). demo_style = overview, no notes — so a brisk page-per-step tour,
 * every screen in the recording covered once.
 *
 * The recording: Dashboard ("STP" page) scrolled top to bottom — Map & Tickets
 * Analytics, Water Quantity, Water Quality (chart-type menu, expanded view with a
 * hover tooltip), Bio Reactor Analytics, Sludge Treatment, Energy Consumption,
 * Manual Input – Quality Parameters, Flow & Energy → Logbook Data Input (the
 * page is titled "OCR Data Input"; an upload dialog was opened and cancelled) →
 * Inventory → a chemical's Chemical Logs with its date-range presets → Insight
 * List (priority filter, an insight opened) → Tickets and one ticket's history →
 * ScadaView, the plant diagram live → Park view spa Analytics (range picker with
 * Smart Hours and Days granularity, chart switches, expanded view, the layout
 * editor) → Task List with a task opened.
 *
 * Real 1280px frames; the baked OS cursor is erased from every one (delogo on
 * flat ground; clone or cross-frame patch where it sat on text or a border).
 *
 * Not overclaimed: the inlet/outlet quality cards and the bio-reactor SV-30 / DO
 * cards read "No Data Available" / "NA" in the recording, so the copy says so.
 */
const lesson: Lesson = {
  id: 'demo-park-view-spa-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 2,
  estimatedMinutes: 3,
  expiresAt: '2026-12-19', // 30 days after the job's created_at (2026-11-19) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    map: `${BASE}/map.jpg`,
    quantity: `${BASE}/quantity.jpg`,
    turbidity: `${BASE}/turbidity.jpg`,
    bio: `${BASE}/bio.jpg`,
    energy: `${BASE}/energy.jpg`,
    manual: `${BASE}/manual.jpg`,
    logbook: `${BASE}/logbook.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    chemlog: `${BASE}/chemlog.jpg`,
    insights: `${BASE}/insights.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticket: `${BASE}/ticket.jpg`,
    scada: `${BASE}/scada.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    range: `${BASE}/range.jpg`,
    layout: `${BASE}/layout.jpg`,
    tasks: `${BASE}/tasks.jpg`,
  },
  layouts: [
    // S1 — the side navigation
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '9.9%', left: '0%', width: '15.6%', height: '58.5%' },
      cursor: [
        { at: 0, x: 3.4, y: 13.1 },
        { at: 0.2, x: 5.5, y: 19.9 },
        { at: 0.4, x: 3.5, y: 33.7 },
        { at: 0.6, x: 7, y: 47.4 },
        { at: 0.8, x: 4.7, y: 57.8, click: true },
        { at: 0.95, x: 2.3, y: 64.6 },
      ],
    },
    // S2 — the controls that drive every widget
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '9.9%', left: '1.6%', width: '96.7%', height: '22.1%' },
      cursor: [
        { at: 0, x: 10.9, y: 25.7, click: true },
        { at: 0.25, x: 49.8, y: 25.7 },
        { at: 0.45, x: 57.8, y: 25.7 },
        { at: 0.65, x: 70.3, y: 25.7 },
        { at: 0.82, x: 75.9, y: 14.1, click: true },
        { at: 0.95, x: 90.9, y: 14.1 },
      ],
    },
    // S3 — Map & Tickets Analytics
    {
      mode: 'detail', screenshot: 'map', caption: 'Where the plant is, what it raised',
      spotlight: { top: '25.2%', left: '1.6%', width: '96.6%', height: '68.4%' },
      cursor: [
        { at: 0, x: 42.2, y: 28.1 },
        { at: 0.25, x: 27.3, y: 62.9 },
        { at: 0.5, x: 60.9, y: 41.7 },
        { at: 0.75, x: 61.7, y: 52 },
        { at: 0.95, x: 87.5, y: 40.8 },
      ],
    },
    // S4 — Water Quantity
    {
      mode: 'detail', screenshot: 'quantity', caption: 'Efficiency, inlet, outlet',
      spotlight: { top: '36.2%', left: '1.7%', width: '80.2%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.1, y: 54.4 },
        { at: 0.2, x: 12.5, y: 43.4 },
        { at: 0.45, x: 25.4, y: 50.2 },
        { at: 0.7, x: 41.4, y: 50.2 },
        { at: 0.92, x: 66.4, y: 57.3 },
      ],
    },
    // S5 — Water Quality, expanded
    {
      mode: 'detail', screenshot: 'turbidity', caption: 'Quality, point by point',
      spotlight: { top: '14.1%', left: '4.8%', width: '90.2%', height: '71.3%' },
      cursor: [
        { at: 0, x: 47.5, y: 28.6 },
        { at: 0.35, x: 51.6, y: 56.1 },
        { at: 0.65, x: 90.6, y: 54.1 },
        { at: 0.9, x: 88.5, y: 16.7, click: true },
      ],
    },
    // S6 — Bio Reactor Analytics + Sludge Treatment
    {
      mode: 'detail', screenshot: 'bio', caption: 'The biology, in four cards',
      spotlight: { top: '7.7%', left: '1.7%', width: '31.5%', height: '67.3%' },
      cursor: [
        { at: 0, x: 9.4, y: 20.4 },
        { at: 0.25, x: 25.5, y: 20.4 },
        { at: 0.5, x: 9.2, y: 55.6 },
        { at: 0.72, x: 25.4, y: 55.6 },
        { at: 0.92, x: 7.8, y: 81.6 },
      ],
    },
    // S7 — Energy Consumption
    {
      mode: 'detail', screenshot: 'energy', caption: 'What the treatment cost',
      spotlight: { top: '20.7%', left: '1.7%', width: '47.7%', height: '68.2%' },
      cursor: [
        { at: 0, x: 15.6, y: 51 },
        { at: 0.3, x: 24.3, y: 40.5 },
        { at: 0.6, x: 41.4, y: 34.9 },
        { at: 0.9, x: 41.8, y: 70.6 },
      ],
    },
    // S8 — Manual Input: quality, flow & energy tables
    {
      mode: 'detail', screenshot: 'manual', caption: 'Four windows, one table',
      spotlight: { top: '30.3%', left: '1.7%', width: '96.4%', height: '67.7%' },
      cursor: [
        { at: 0, x: 24.2, y: 88.8 },
        { at: 0.25, x: 44.9, y: 88.8 },
        { at: 0.5, x: 58.6, y: 45.1 },
        { at: 0.75, x: 70.3, y: 56.6 },
        { at: 0.95, x: 93, y: 56.6 },
      ],
    },
    // S9 — Logbook Data Input (OCR)
    {
      mode: 'detail', screenshot: 'logbook', caption: 'A logbook photo becomes data',
      spotlight: { top: '17.7%', left: '1.7%', width: '96.6%', height: '44.7%' },
      cursor: [
        { at: 0, x: 23.4, y: 22.6 },
        { at: 0.3, x: 70.3, y: 22.6 },
        { at: 0.65, x: 50, y: 46.9, click: true },
        { at: 0.92, x: 50, y: 54.4 },
      ],
    },
    // S10 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'What the store holds',
      spotlight: { top: '28.4%', left: '1.7%', width: '96.5%', height: '71.1%' },
      cursor: [
        { at: 0, x: 3.8, y: 51 },
        { at: 0.25, x: 5.5, y: 61.9 },
        { at: 0.5, x: 41.4, y: 51.2 },
        { at: 0.72, x: 78.9, y: 49.7 },
        { at: 0.92, x: 89.8, y: 49.7 },
      ],
    },
    // S11 — Chemical Logs for one item
    {
      mode: 'detail', screenshot: 'chemlog', caption: 'Every kilo, in and out',
      spotlight: { top: '25%', left: '27%', width: '71.4%', height: '58%' },
      cursor: [
        { at: 0, x: 38.3, y: 28.6 },
        { at: 0.25, x: 63.4, y: 28.6 },
        { at: 0.5, x: 55.6, y: 48.6 },
        { at: 0.72, x: 55.6, y: 68.2 },
        { at: 0.92, x: 12.5, y: 39.1, click: true },
      ],
    },
    // S12 — Insight List
    {
      mode: 'detail', screenshot: 'insights', caption: 'The platform’s own findings',
      spotlight: { top: '17.7%', left: '1.7%', width: '96.1%', height: '32%' },
      cursor: [
        { at: 0, x: 37.5, y: 33, click: true },
        { at: 0.3, x: 7.8, y: 44.4 },
        { at: 0.55, x: 30.9, y: 44.4 },
        { at: 0.75, x: 55.5, y: 44.4 },
        { at: 0.93, x: 15.6, y: 61.7 },
      ],
    },
    // S13 — Tickets
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Every ticket, counted',
      spotlight: { top: '18.2%', left: '1.7%', width: '96.4%', height: '16.7%' },
      cursor: [
        { at: 0, x: 13.4, y: 23.8 },
        { at: 0.2, x: 42.2, y: 23.8 },
        { at: 0.4, x: 63.3, y: 24.7 },
        { at: 0.6, x: 86.6, y: 25.5 },
        { at: 0.8, x: 23.8, y: 77 },
        { at: 0.95, x: 93.1, y: 14.1 },
      ],
    },
    // S14 — inside a ticket
    {
      mode: 'detail', screenshot: 'ticket', caption: 'Inside a ticket',
      spotlight: { top: '12.1%', left: '9.3%', width: '81.3%', height: '75.3%' },
      cursor: [
        { at: 0, x: 26.6, y: 59.2 },
        { at: 0.25, x: 30.5, y: 71.4 },
        { at: 0.5, x: 54.7, y: 30.8 },
        { at: 0.72, x: 69.5, y: 45.2, click: true },
        { at: 0.93, x: 86.9, y: 82.1 },
      ],
    },
    // S15 — ScadaView
    {
      mode: 'detail', screenshot: 'scada', caption: 'The plant, running live',
      spotlight: { top: '15.3%', left: '1.7%', width: '96.1%', height: '5.6%' },
      cursor: [
        { at: 0, x: 11.6, y: 18 },
        { at: 0.2, x: 57.8, y: 18 },
        { at: 0.4, x: 65.3, y: 18 },
        { at: 0.6, x: 70.9, y: 18 },
        { at: 0.78, x: 79.9, y: 18 },
        { at: 0.95, x: 19.1, y: 56.1 },
      ],
    },
    // S16 — Park view spa Analytics
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Analytics — the plant in depth',
      spotlight: { top: '34%', left: '1.7%', width: '96.1%', height: '64.6%' },
      cursor: [
        { at: 0, x: 7.3, y: 25.2, click: true },
        { at: 0.3, x: 23.4, y: 53.6 },
        { at: 0.5, x: 29.4, y: 54.9 },
        { at: 0.72, x: 68, y: 59.4 },
        { at: 0.93, x: 90.6, y: 52.6 },
      ],
    },
    // S17 — the range picker: presets, Smart Hours, granularity
    {
      mode: 'detail', screenshot: 'range', caption: 'Hours or days, any window',
      spotlight: { top: '37.8%', left: '16.6%', width: '18.7%', height: '37.1%' },
      cursor: [
        { at: 0, x: 39.8, y: 15.6 },
        { at: 0.2, x: 67, y: 15.6 },
        { at: 0.38, x: 63.6, y: 22.3 },
        { at: 0.55, x: 18.4, y: 43 },
        { at: 0.75, x: 19, y: 67.9, click: true },
        { at: 0.95, x: 77.7, y: 85.7, click: true },
      ],
    },
    // S18 — the layout editor
    {
      mode: 'detail', screenshot: 'layout', caption: 'Arrange the page yourself',
      spotlight: { top: '32.3%', left: '82.4%', width: '13.7%', height: '63%' },
      cursor: [
        { at: 0, x: 13.8, y: 26 },
        { at: 0.2, x: 10.2, y: 35.4 },
        { at: 0.4, x: 83.5, y: 35.4 },
        { at: 0.58, x: 85.9, y: 35.4 },
        { at: 0.76, x: 88.3, y: 46.6 },
        { at: 0.93, x: 92.7, y: 35.4 },
      ],
    },
    // S19 — Task List
    {
      mode: 'detail', screenshot: 'tasks', caption: 'Work, assigned',
      spotlight: { top: '31.1%', left: '1.7%', width: '96.6%', height: '43%' },
      cursor: [
        { at: 0, x: 10.9, y: 23.5 },
        { at: 0.18, x: 88.3, y: 23.5 },
        { at: 0.36, x: 9.2, y: 40.6 },
        { at: 0.54, x: 59.2, y: 42.3 },
        { at: 0.7, x: 67.9, y: 42.3 },
        { at: 0.85, x: 81.6, y: 42.3 },
        { at: 0.97, x: 94.2, y: 12.9, click: true },
      ],
    },
    // S20 — wrap: which page serves which job
    {
      mode: 'detail', screenshot: 'header', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 10.9, y: 25.7 },
        { at: 0.4, x: 57.8, y: 25.7 },
        { at: 0.75, x: 90.9, y: 14.1 },
        { at: 0.95, x: 50, y: 60 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Park View Spa,<br><em>the whole plant on one screen.</em>',
      subtitle:
        'A quick tour of your platform — the dashboard, the logbook, the store, the alerts and tickets, the plant live, and the work behind it.',
      chapter: 'Demo · Park View Spa',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens the side navigation: <strong>Dashboard</strong>, <strong>Logbook Data Input</strong>, <strong>Inventory</strong>, <strong>Insight List</strong>, <strong>Tickets</strong>, <strong>ScadaView — Park View Spa Workspace</strong>, then two groups that expand — <strong>Park view spa</strong>, which holds the plant's Analytics, and <strong>Task</strong>, which holds the Task List. The <strong>search</strong> box at the top jumps straight to any of them.",
          voice: "Every screen lives in this menu — Dashboard, Logbook, Inventory, Insights, Tickets, Scada View, Analytics and Tasks.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on the <strong>STP</strong> page. Everything below follows three controls: the <strong>Page</strong> selector, the <strong>Granularity</strong> — here <strong>Hours</strong> over the <strong>Last 24 Hours</strong> — and the <strong>From</strong> and <strong>To</strong> range. Top right, <strong>refresh</strong> re-pulls live data, <strong>download</strong> exports, and the settings and layout icons manage the page itself.",
          voice: "The page, the granularity and the date range drive every widget below. Refresh re-pulls live data; download exports it.",
        },
        {
          label: 'Map', title: 'Where the plant is, what it raised',
          body: "<strong>Map &amp; Tickets Analytics</strong> opens the page. <strong>Map View</strong> pins the plant with its live reading — switchable to <strong>Water Quality</strong> — and <strong>Tickets History</strong> lists what it has raised: <em>“ACF is choked (Inlet pressure is above 1.7 kg/cm2)”</em> and <em>“Delta pressure across MGF is too high”</em>, each with plant, time and <strong>Plant process issues</strong> tag.",
          voice: "The map pins your plant, and Tickets History beside it shows what it raised — an A C F choke and an M G F pressure alarm.",
        },
        {
          label: 'Quantity', title: 'Efficiency, inlet, outlet',
          body: "<strong>Water Quantity</strong> is the plant in four cards: <strong>Plant Efficiency 72.58%</strong>, <strong>Inlet Water 106.05 KL</strong>, <strong>Outlet Water 76.97 KL</strong>, and <strong>Outlet Water Distribution</strong> splitting reuse into <strong>Flushing 61.61</strong> and <strong>Irrigation 63.78</strong>. The strip under each card compares two timestamps and shows the change. Hover any card for <strong>Download CSV</strong>, edit and info.",
          voice: "Plant efficiency seventy two point six percent, one hundred and six kilolitres in, seventy seven out — and where the treated water went.",
        },
        {
          label: 'Quality', title: 'Quality, point by point',
          body: "<strong>Water Quality</strong> carries the inlet and outlet parameters — pH and TDS read <em>No Data Available</em> in this window — and <strong>Treated Water Turbidity (ref: &lt; 5 NTU)</strong>, latest <strong>2.16</strong>. Every chart can switch between <strong>Bar Graph</strong> and <strong>Line Graph</strong>; <strong>Expanded View</strong> throws it full-width, hover reads any point — <strong>1.98 NTU</strong> at 05:50 — and <strong>Reset Zoom</strong> comes back out.",
          voice: "Turbidity sits well under its five N T U limit. Expand any chart, hover for a single reading, and reset to zoom back out.",
        },
        {
          label: 'Biology', title: 'The biology, in four cards',
          body: "<strong>Bio Reactor Analytics</strong>: <strong>Aeration tank SV-30</strong> and <strong>Aeration tank DO (ref: 2–4 ppm)</strong> read <strong>NA</strong> for this window, while <strong>Expected air Demand</strong> is <strong>36.08 M3/Day</strong> and <strong>MBBR Retention Time 4.71</strong>. Below it, <strong>Sludge Treatment</strong> follows the sludge holding tank level and the expected sludge wasting per KL.",
          voice: "Expected air demand thirty six cubic metres a day, M B B R retention four point seven — and sludge treatment just below.",
        },
        {
          label: 'Energy', title: 'What the treatment cost',
          body: "<strong>Energy Consumption</strong> plots the meter through the window, and two cards turn it into cost: <strong>Energy per KL 0.11</strong> — energy per unit of water treated — and <strong>Total Energy Consumption 8.4</strong> for the window, each with its change against the previous period.",
          voice: "The energy meter, the energy per kilolitre at zero point one one, and the total used in this window.",
        },
        {
          label: 'Tables', title: 'Four windows, one table',
          body: "<strong>Manual Input – Quality Parameters, Flow &amp; Energy</strong> reads like a register. <strong>Output Quality of Water</strong> gives each parameter's last value, max, min and current — <strong>Turbidity 2.16</strong>, max <strong>4</strong>, min <strong>1</strong>. <strong>Flow &amp; Energy</strong> lays inlet, outlet, flushing and irrigation across <strong>Last 24 Hours</strong>, <strong>Yesterday</strong>, <strong>Last 7 Days</strong> and <strong>Last 30 Days</strong> — <strong>4022.84 KL</strong> in over the month.",
          voice: "Quality with its max and min, and every flow across today, yesterday, the week and the month — in one table.",
        },
        {
          label: 'Logbook', title: 'A logbook photo becomes data',
          body: "<strong>Logbook Data Input</strong> opens <strong>OCR Data Input</strong>. Pick the <strong>Asset</strong> — <strong>Park view spa</strong> — and the <strong>Logbook Template</strong> — <strong>WAPP Logbook</strong> — then drag in a photo of the paper logbook or <strong>Click here to upload</strong> (JPG, PNG or JPEG, up to 100 MB). The readings are pulled off the page instead of being typed in.",
          voice: "Pick the asset and the logbook template, upload a photo of the paper logbook, and the readings are read off it for you.",
        },
        {
          label: 'Inventory', title: 'What the store holds',
          body: "<strong>Inventory</strong> lists every item in <strong>Park View Spa</strong> store — chemicals like <strong>Urea 38 Kg</strong>, <strong>Poly 0.9 Kg</strong>, <strong>Jaggery</strong>, <strong>Chlorine</strong>, <strong>Bio Culture</strong> and <strong>DAP</strong>, plus consumables like test kits — with <strong>Stock Available</strong>, <strong>Last Consumption</strong>, and consumption <strong>Actual</strong> against <strong>Expected</strong>. The red flag marks an item needing attention.",
          voice: "Every chemical in the store, with stock, last use, and actual against expected consumption. Red flags need attention.",
        },
        {
          label: 'Logs', title: 'Every kilo, in and out',
          body: "Open an item for its <strong>Chemical Logs</strong>: <strong>Current Balance 38 kg</strong>, <strong>Current Month Usage 1 kg</strong>, <strong>Last Month Usage 3 kg</strong>, then every movement — <strong>Consumed in the plant −1</strong>, <strong>−2</strong>, a <strong>Purchase +1</strong> — with date and time. The <strong>Date</strong> picker offers This Week, Last Week, Last 7 Days, Current Month and Last Month, and <strong>Filters</strong> narrow by remark or amount.",
          voice: "Each chemical keeps a log — balance, this month and last month's use, and every purchase and consumption by date.",
        },
        {
          label: 'Insights', title: 'The platform’s own findings',
          body: "<strong>Insight List</strong> is where the platform's findings collect: <strong>16264 All Insights</strong>, <strong>10 Open Alarms</strong>, <strong>16254 Closed Alarms</strong>. Filter by <strong>Type</strong>, <strong>Priority</strong>, <strong>Relative Time</strong> or a date range; each row — like <em>“ACF is choked”</em> or <em>“Reactor Feed Pump has been out of auto mode”</em> — opens to its description and comments. <strong>+ Create Insight</strong> adds one by hand.",
          voice: "Ten open alarms out of sixteen thousand findings, filtered by type, priority and time — and each one opens for detail.",
        },
        {
          label: 'Tickets', title: 'Every ticket, counted',
          body: "<strong>Tickets</strong> opens on the counts: <strong>5 open</strong> — 3 overdue, 3 escalated — against <strong>45 closed</strong>. To the right the same totals by team: <strong>Process</strong>, <strong>Electrical</strong>, <strong>Mechanical</strong>, <strong>Lab</strong>, <strong>Admin</strong>, <strong>Dp System</strong>. Each row carries its tags — <strong>automatic</strong>, <strong>overdue</strong>, <strong>Escalation Level 3</strong> — and <strong>Create New Ticket</strong> raises one by hand.",
          voice: "Five open tickets against forty five closed, split by overdue, escalated and team — each tagged automatic or manual.",
        },
        {
          label: 'Ticket', title: 'Inside a ticket',
          body: "A ticket holds the whole story: when it was created, the <strong>Plant</strong>, the <strong>Problem</strong> — <em>“Delta pressure across MGF is too high”</em> — and a <strong>Description</strong> that says what to do: <em>MGF backwash may be needed</em>. The <strong>History</strong> column is the audit trail, <strong>Add a comment</strong> records what was done, and <strong>Resolve</strong> closes it.",
          voice: "Each ticket carries the problem, what to do about it, and a history — comment as you work, then resolve.",
        },
        {
          label: 'ScadaView', title: 'The plant, running live',
          body: "<strong>ScadaView</strong> opens <strong>Park View Spa</strong> with a <strong>LIVE</strong> badge: the whole plant — bar screen, equalization tank, <strong>MBBR-1</strong> and <strong>MBBR-2</strong>, tube settler, chlorine contact, <strong>DMF</strong> and <strong>ACF</strong> filters, softener, UF and the treated-water tanks — each carrying its live value. The <strong>clock</strong> and <strong>play</strong> replay an earlier moment, with <strong>Group Control</strong> and <strong>Unit Processes</strong> beside them.",
          voice: "Scada View shows the whole plant live — every tank, filter and pump with its reading — and can replay an earlier moment.",
        },
        {
          label: 'Analytics', title: 'Analytics — the plant in depth',
          body: "<strong>Park view spa Analytics</strong>, on its <strong>Detailed View</strong> page, goes deeper. <strong>Water Quantity and Availability</strong> holds <strong>Inlet water 107.55 KL</strong>, five <strong>Tank Levels</strong>, <strong>Flow Meters (ref: 400 KLD)</strong> — inlet against outlet <strong>78.37</strong> — and <strong>Inlet and Outlet Flow</strong>. Further down: flushing and irrigation, water quality, biological health, backwash, screw press, auto-manual and trip status.",
          voice: "Analytics goes deeper — inlet water, every tank level, flow against the four hundred K L D reference, and the equipment below.",
        },
        {
          label: 'Range', title: 'Hours or days, any window',
          body: "The range picker sets the window for every widget: presets from <strong>Today</strong> to <strong>Last 6 Months</strong>, or <strong>Custom</strong> on the calendar, a <strong>12</strong> or <strong>24 Hour</strong> clock, and <strong>Smart Hours</strong> to repeat one daily time slot across the range. <strong>Granularity</strong> switches <strong>Hours</strong> to <strong>Days</strong> — the line turns into daily bars — and <strong>Apply Selection</strong> re-draws the page.",
          voice: "Choose any window, then switch granularity from hours to days — every chart re-draws as daily bars.",
        },
        {
          label: 'Layout', title: 'Arrange the page yourself',
          body: "The <strong>layout</strong> icon opens the page editor. Every section — <strong>Water Quantity and Availability</strong> first — lists its widgets as rows you can tick on or off, and each row has its own tools: <strong>duplicate</strong>, <strong>delete</strong>, <strong>move up</strong>, <strong>move down</strong>, and the <strong>chart type</strong>. Rename a section with its pencil, or add one with <strong>+</strong>.",
          voice: "The layout editor lists every widget — show or hide it, duplicate, delete, reorder, or change its chart type.",
        },
        {
          label: 'Tasks', title: 'Work, assigned',
          body: "<strong>Task List</strong> is the work queue: search, filter by <strong>Plant</strong>, <strong>User</strong>, <strong>Skill</strong> and <strong>Completion Status</strong>. Today it holds <strong>Perform Bar Screen Cleaning</strong> (<strong>High</strong>), <strong>Perform Sludge Wasting</strong>, <strong>Check SV-30</strong> and <strong>Perform Sensor Cleaning &amp; Calibration</strong> — each with priority, assignee <strong>Bhisham Kumar</strong>, skill <strong>Operator</strong> and status <strong>PENDING</strong>. <strong>Add Task</strong> creates a new one.",
          voice: "Task List holds the work — bar screen cleaning, sludge wasting, S V thirty — each with priority, assignee and status.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the shift — quantity, quality, biology, energy and flows in one scroll. <strong>Analytics</strong> when you need the process behind a number. <strong>Logbook Data Input</strong> for paper readings, <strong>Inventory</strong> for the store, <strong>Insight List</strong> and <strong>Tickets</strong> for what the plant is flagging, <strong>Task List</strong> for the work, and <strong>ScadaView</strong> to watch it run. One page, one granularity, one date range — everything follows.",
          voice: "Dashboard for the shift, Analytics for depth, Insights and Tickets for alerts, Tasks for the work, Scada View to watch it run.",
        },
      ],
    },
    hi: {
      title: 'पार्क व्यू स्पा,<br><em>पूरा प्लांट एक स्क्रीन पर।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का एक त्वरित दौरा — डैशबोर्ड, लॉगबुक, स्टोर, अलर्ट और टिकट, लाइव प्लांट, और उसके पीछे का काम।',
      chapter: 'डेमो · पार्क व्यू स्पा',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है: <strong>डैशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्वेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>टिकट</strong>, <strong>स्काडाव्यू — पार्क व्यू स्पा वर्कस्पेस</strong>, फिर दो समूह जो खुलते हैं — <strong>पार्क व्यू स्पा</strong>, जिसमें प्लांट का एनालिटिक्स है, और <strong>टास्क</strong>, जिसमें टास्क लिस्ट है। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
          voice: "हर स्क्रीन इसी मेन्यू में है — डैशबोर्ड, लॉगबुक, इन्वेंटरी, इनसाइट, टिकट, स्काडा व्यू, एनालिटिक्स और टास्क।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>STP</strong> पेज पर खुलता है। नीचे का सब कुछ तीन कंट्रोल से चलता है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong> — यहाँ <strong>पिछले 24 घंटे</strong> पर <strong>घंटे</strong> — और <strong>फ्रॉम</strong> व <strong>टू</strong> की सीमा। ऊपर दाईं ओर <strong>रिफ़्रेश</strong> लाइव डेटा लाता है, <strong>डाउनलोड</strong> एक्सपोर्ट करता है, और सेटिंग्स व लेआउट आइकन पेज संभालते हैं।",
          voice: "पेज, ग्रैन्युलैरिटी और समय सीमा नीचे का हर विजेट चलाते हैं। रिफ़्रेश लाइव डेटा लाता है, डाउनलोड उसे एक्सपोर्ट करता है।",
        },
        {
          label: 'मैप', title: 'प्लांट कहाँ है, उसने क्या उठाया',
          body: "<strong>मैप और टिकट एनालिटिक्स</strong> से पेज शुरू होता है। <strong>मैप व्यू</strong> प्लांट को उसकी लाइव रीडिंग के साथ दिखाता है — <strong>वॉटर क्वालिटी</strong> पर बदला जा सकता है — और <strong>टिकट हिस्ट्री</strong> उसके उठाए मुद्दे दिखाती है: <em>“ACF चोक है (इनलेट प्रेशर 1.7 kg/cm2 से ऊपर)”</em> और <em>“MGF पर डेल्टा प्रेशर बहुत ज़्यादा”</em>, हर एक के साथ प्लांट, समय और <strong>प्लांट प्रोसेस इश्यू</strong> टैग।",
          voice: "मैप आपके प्लांट को दिखाता है, और बगल में टिकट हिस्ट्री — एक ए सी एफ चोक और एक एम जी एफ प्रेशर अलार्म।",
        },
        {
          label: 'मात्रा', title: 'दक्षता, इनलेट, आउटलेट',
          body: "<strong>वॉटर क्वांटिटी</strong> चार कार्ड में प्लांट है: <strong>प्लांट एफ़िशिएंसी 72.58%</strong>, <strong>इनलेट वॉटर 106.05 KL</strong>, <strong>आउटलेट वॉटर 76.97 KL</strong>, और <strong>आउटलेट वॉटर डिस्ट्रीब्यूशन</strong> जो दोबारा उपयोग को <strong>फ्लशिंग 61.61</strong> और <strong>सिंचाई 63.78</strong> में बाँटता है। हर कार्ड के नीचे की पट्टी दो समय की तुलना करके बदलाव दिखाती है। किसी भी कार्ड पर होवर करें तो <strong>डाउनलोड CSV</strong>, एडिट और इन्फ़ो मिलते हैं।",
          voice: "प्लांट एफ़िशिएंसी बहत्तर दशमलव छह प्रतिशत, एक सौ छह किलोलीटर अंदर, सतहत्तर बाहर — और साफ़ पानी कहाँ गया।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, हर बिंदु पर',
          body: "<strong>वॉटर क्वालिटी</strong> में इनलेट और आउटलेट पैरामीटर हैं — इस अवधि में pH और TDS <em>नो डेटा अवेलेबल</em> दिखाते हैं — और <strong>ट्रीटेड वॉटर टर्बिडिटी (संदर्भ: &lt; 5 NTU)</strong>, नवीनतम <strong>2.16</strong>। हर चार्ट <strong>बार ग्राफ़</strong> और <strong>लाइन ग्राफ़</strong> के बीच बदल सकता है; <strong>एक्सपैंडेड व्यू</strong> उसे पूरी चौड़ाई में खोलता है, होवर से कोई भी बिंदु पढ़ें — 05:50 पर <strong>1.98 NTU</strong> — और <strong>रीसेट ज़ूम</strong> वापस लाता है।",
          voice: "टर्बिडिटी अपनी पाँच एन टी यू सीमा से काफ़ी नीचे है। चार्ट बड़ा करें, एक रीडिंग के लिए होवर करें, और रीसेट से वापस आएँ।",
        },
        {
          label: 'जैविक', title: 'जैविक प्रक्रिया, चार कार्ड में',
          body: "<strong>बायो रिएक्टर एनालिटिक्स</strong>: इस अवधि में <strong>एरेशन टैंक SV-30</strong> और <strong>एरेशन टैंक DO (संदर्भ: 2–4 ppm)</strong> <strong>NA</strong> दिखाते हैं, जबकि <strong>अपेक्षित एयर डिमांड</strong> <strong>36.08 M3/दिन</strong> और <strong>MBBR रिटेंशन टाइम 4.71</strong> है। नीचे <strong>स्लज ट्रीटमेंट</strong> स्लज होल्डिंग टैंक का स्तर और प्रति KL अपेक्षित स्लज वेस्टिंग दिखाता है।",
          voice: "अपेक्षित एयर डिमांड छत्तीस घन मीटर प्रतिदिन, एम बी बी आर रिटेंशन चार दशमलव सात — और ठीक नीचे स्लज ट्रीटमेंट।",
        },
        {
          label: 'ऊर्जा', title: 'उपचार की लागत',
          body: "<strong>एनर्जी कंजम्प्शन</strong> पूरी अवधि में मीटर दिखाता है, और दो कार्ड उसे लागत में बदलते हैं: <strong>एनर्जी प्रति KL 0.11</strong> — प्रति इकाई उपचारित पानी पर ऊर्जा — और अवधि की <strong>कुल ऊर्जा खपत 8.4</strong>, दोनों पिछली अवधि से बदलाव के साथ।",
          voice: "ऊर्जा मीटर, प्रति किलोलीटर ऊर्जा शून्य दशमलव एक एक, और इस अवधि में कुल खपत।",
        },
        {
          label: 'तालिका', title: 'चार अवधि, एक तालिका',
          body: "<strong>मैनुअल इनपुट – क्वालिटी पैरामीटर, फ़्लो और एनर्जी</strong> एक रजिस्टर जैसा है। <strong>आउटपुट क्वालिटी ऑफ़ वॉटर</strong> हर पैरामीटर का अंतिम मान, अधिकतम, न्यूनतम और वर्तमान देता है — <strong>टर्बिडिटी 2.16</strong>, अधिकतम <strong>4</strong>, न्यूनतम <strong>1</strong>। <strong>फ़्लो और एनर्जी</strong> इनलेट, आउटलेट, फ्लशिंग और सिंचाई को <strong>पिछले 24 घंटे</strong>, <strong>कल</strong>, <strong>पिछले 7 दिन</strong> और <strong>पिछले 30 दिन</strong> में रखता है — महीने में <strong>4022.84 KL</strong> अंदर।",
          voice: "अधिकतम और न्यूनतम के साथ गुणवत्ता, और हर फ़्लो आज, कल, हफ़्ते और महीने में — एक ही तालिका में।",
        },
        {
          label: 'लॉगबुक', title: 'लॉगबुक की फ़ोटो डेटा बनती है',
          body: "<strong>लॉगबुक डेटा इनपुट</strong> से <strong>OCR डेटा इनपुट</strong> खुलता है। <strong>एसेट</strong> — <strong>पार्क व्यू स्पा</strong> — और <strong>लॉगबुक टेम्पलेट</strong> — <strong>WAPP लॉगबुक</strong> — चुनें, फिर कागज़ी लॉगबुक की फ़ोटो खींचकर डालें या <strong>क्लिक हियर टू अपलोड</strong> दबाएँ (JPG, PNG या JPEG, 100 MB तक)। रीडिंग टाइप करने की बजाय पेज से पढ़ ली जाती हैं।",
          voice: "एसेट और लॉगबुक टेम्पलेट चुनें, कागज़ी लॉगबुक की फ़ोटो अपलोड करें, और रीडिंग अपने आप पढ़ ली जाती हैं।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टोर में क्या है',
          body: "<strong>इन्वेंटरी</strong> <strong>पार्क व्यू स्पा</strong> स्टोर की हर वस्तु दिखाती है — <strong>यूरिया 38 Kg</strong>, <strong>पॉली 0.9 Kg</strong>, <strong>गुड़</strong>, <strong>क्लोरीन</strong>, <strong>बायो कल्चर</strong> और <strong>DAP</strong> जैसे रसायन, और टेस्ट किट जैसी उपभोग्य वस्तुएँ — <strong>उपलब्ध स्टॉक</strong>, <strong>अंतिम खपत</strong>, और <strong>वास्तविक</strong> बनाम <strong>अपेक्षित</strong> खपत के साथ। लाल निशान ध्यान माँगने वाली वस्तु दिखाता है।",
          voice: "स्टोर का हर रसायन, स्टॉक, अंतिम उपयोग, और वास्तविक बनाम अपेक्षित खपत के साथ। लाल निशान पर ध्यान दें।",
        },
        {
          label: 'लॉग', title: 'हर किलो, अंदर और बाहर',
          body: "किसी वस्तु को खोलें तो उसके <strong>केमिकल लॉग</strong>: <strong>वर्तमान बैलेंस 38 kg</strong>, <strong>इस महीने उपयोग 1 kg</strong>, <strong>पिछले महीने उपयोग 3 kg</strong>, फिर हर लेन-देन — <strong>प्लांट में खपत −1</strong>, <strong>−2</strong>, एक <strong>खरीद +1</strong> — तारीख और समय के साथ। <strong>डेट</strong> पिकर में इस हफ़्ते, पिछले हफ़्ते, पिछले 7 दिन, इस महीने और पिछले महीने के विकल्प हैं, और <strong>फ़िल्टर</strong> रिमार्क या मात्रा से छाँटते हैं।",
          voice: "हर रसायन का लॉग — बैलेंस, इस और पिछले महीने का उपयोग, और तारीख़ के साथ हर खरीद और खपत।",
        },
        {
          label: 'इनसाइट', title: 'प्लेटफ़ॉर्म की अपनी खोजें',
          body: "<strong>इनसाइट लिस्ट</strong> में प्लेटफ़ॉर्म की खोजें जमा होती हैं: <strong>16264 सभी इनसाइट</strong>, <strong>10 खुले अलार्म</strong>, <strong>16254 बंद अलार्म</strong>। <strong>प्रकार</strong>, <strong>प्राथमिकता</strong>, <strong>सापेक्ष समय</strong> या तारीख़ सीमा से छाँटें; हर पंक्ति — जैसे <em>“ACF चोक है”</em> या <em>“रिएक्टर फ़ीड पंप ऑटो मोड से बाहर”</em> — विवरण और टिप्पणियों के लिए खुलती है। <strong>+ क्रिएट इनसाइट</strong> से हाथ से जोड़ें।",
          voice: "सोलह हज़ार खोजों में दस खुले अलार्म, प्रकार, प्राथमिकता और समय से छाँटे हुए — और हर एक विवरण के लिए खुलता है।",
        },
        {
          label: 'टिकट', title: 'हर टिकट, गिना हुआ',
          body: "<strong>टिकट</strong> पेज गिनती से खुलता है: <strong>5 खुले</strong> — 3 ओवरड्यू, 3 एस्केलेटेड — बनाम <strong>45 बंद</strong>। दाईं ओर वही आँकड़े टीम के अनुसार: <strong>प्रोसेस</strong>, <strong>इलेक्ट्रिकल</strong>, <strong>मैकेनिकल</strong>, <strong>लैब</strong>, <strong>एडमिन</strong>, <strong>Dp सिस्टम</strong>। हर पंक्ति पर टैग हैं — <strong>ऑटोमैटिक</strong>, <strong>ओवरड्यू</strong>, <strong>एस्केलेशन लेवल 3</strong> — और <strong>क्रिएट न्यू टिकट</strong> से हाथ से टिकट बनाएँ।",
          voice: "पाँच खुले टिकट बनाम पैंतालीस बंद, ओवरड्यू, एस्केलेटेड और टीम के अनुसार — हर एक ऑटोमैटिक या मैनुअल टैग के साथ।",
        },
        {
          label: 'विवरण', title: 'टिकट के अंदर',
          body: "टिकट में पूरी कहानी है: कब बना, <strong>प्लांट</strong>, <strong>समस्या</strong> — <em>“MGF पर डेल्टा प्रेशर बहुत ज़्यादा”</em> — और <strong>विवरण</strong> जो बताता है क्या करें: <em>MGF बैकवॉश की ज़रूरत हो सकती है</em>। <strong>हिस्ट्री</strong> कॉलम ऑडिट ट्रेल है, <strong>ऐड अ कमेंट</strong> किया गया काम दर्ज करता है, और <strong>रिज़ॉल्व</strong> उसे बंद करता है।",
          voice: "हर टिकट में समस्या, उसका उपाय और हिस्ट्री है — काम करते हुए टिप्पणी करें, फिर रिज़ॉल्व करें।",
        },
        {
          label: 'स्काडाव्यू', title: 'लाइव चलता प्लांट',
          body: "<strong>स्काडाव्यू</strong> <strong>पार्क व्यू स्पा</strong> को <strong>LIVE</strong> बैज के साथ खोलता है: पूरा प्लांट — बार स्क्रीन, इक्वलाइज़ेशन टैंक, <strong>MBBR-1</strong> और <strong>MBBR-2</strong>, ट्यूब सेटलर, क्लोरीन कॉन्टैक्ट, <strong>DMF</strong> और <strong>ACF</strong> फ़िल्टर, सॉफ़्टनर, UF और ट्रीटेड वॉटर टैंक — हर एक अपने लाइव मान के साथ। <strong>घड़ी</strong> और <strong>प्ले</strong> पुराना पल दोहराते हैं, बगल में <strong>ग्रुप कंट्रोल</strong> और <strong>यूनिट प्रोसेस</strong> हैं।",
          voice: "स्काडा व्यू पूरा प्लांट लाइव दिखाता है — हर टैंक, फ़िल्टर और पंप अपनी रीडिंग के साथ — और पुराना पल भी दोहरा सकता है।",
        },
        {
          label: 'एनालिटिक्स', title: 'एनालिटिक्स — प्लांट गहराई से',
          body: "<strong>पार्क व्यू स्पा एनालिटिक्स</strong>, अपने <strong>डिटेल्ड व्यू</strong> पेज पर, और गहराई में जाता है। <strong>वॉटर क्वांटिटी और उपलब्धता</strong> में <strong>इनलेट वॉटर 107.55 KL</strong>, पाँच <strong>टैंक लेवल</strong>, <strong>फ़्लो मीटर (संदर्भ: 400 KLD)</strong> — इनलेट बनाम आउटलेट <strong>78.37</strong> — और <strong>इनलेट और आउटलेट फ़्लो</strong> हैं। आगे नीचे: फ्लशिंग और सिंचाई, पानी की गुणवत्ता, जैविक स्वास्थ्य, बैकवॉश, स्क्रू प्रेस, ऑटो-मैनुअल और ट्रिप स्टेटस।",
          voice: "एनालिटिक्स और गहराई में जाता है — इनलेट पानी, हर टैंक का स्तर, चार सौ के एल डी संदर्भ पर फ़्लो, और नीचे उपकरण।",
        },
        {
          label: 'सीमा', title: 'घंटे या दिन, कोई भी अवधि',
          body: "रेंज पिकर हर विजेट की अवधि तय करता है: <strong>आज</strong> से <strong>पिछले 6 महीने</strong> तक के प्रीसेट, या कैलेंडर पर <strong>कस्टम</strong>, <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी, और <strong>स्मार्ट आवर्स</strong> जो एक दैनिक समय-खंड को पूरी सीमा में दोहराता है। <strong>ग्रैन्युलैरिटी</strong> <strong>घंटे</strong> से <strong>दिन</strong> करती है — लाइन दैनिक बार बन जाती है — और <strong>अप्लाई सिलेक्शन</strong> पेज दोबारा बनाता है।",
          voice: "कोई भी अवधि चुनें, फिर ग्रैन्युलैरिटी घंटों से दिनों पर करें — हर चार्ट दैनिक बार में दोबारा बनता है।",
        },
        {
          label: 'लेआउट', title: 'पेज खुद सजाएँ',
          body: "<strong>लेआउट</strong> आइकन पेज एडिटर खोलता है। हर सेक्शन — पहले <strong>वॉटर क्वांटिटी और उपलब्धता</strong> — अपने विजेट पंक्तियों में दिखाता है जिन्हें आप चालू या बंद कर सकते हैं, और हर पंक्ति के अपने टूल हैं: <strong>डुप्लिकेट</strong>, <strong>डिलीट</strong>, <strong>ऊपर</strong>, <strong>नीचे</strong>, और <strong>चार्ट प्रकार</strong>। पेंसिल से सेक्शन का नाम बदलें, या <strong>+</strong> से नया जोड़ें।",
          voice: "लेआउट एडिटर हर विजेट दिखाता है — दिखाएँ या छिपाएँ, डुप्लिकेट, डिलीट, क्रम बदलें, या चार्ट प्रकार बदलें।",
        },
        {
          label: 'टास्क', title: 'सौंपा हुआ काम',
          body: "<strong>टास्क लिस्ट</strong> काम की कतार है: खोजें, <strong>प्लांट</strong>, <strong>यूज़र</strong>, <strong>स्किल</strong> और <strong>कम्प्लीशन स्टेटस</strong> से छाँटें। आज इसमें <strong>बार स्क्रीन सफ़ाई</strong> (<strong>हाई</strong>), <strong>स्लज वेस्टिंग</strong>, <strong>SV-30 जाँच</strong> और <strong>सेंसर सफ़ाई और कैलिब्रेशन</strong> हैं — हर एक प्राथमिकता, असाइनी <strong>भीषम कुमार</strong>, स्किल <strong>ऑपरेटर</strong> और स्टेटस <strong>PENDING</strong> के साथ। <strong>ऐड टास्क</strong> नया काम बनाता है।",
          voice: "टास्क लिस्ट में काम है — बार स्क्रीन सफ़ाई, स्लज वेस्टिंग, एस वी तीस — हर एक प्राथमिकता, असाइनी और स्टेटस के साथ।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "तो: शिफ़्ट के लिए <strong>डैशबोर्ड</strong> — मात्रा, गुणवत्ता, जैविक, ऊर्जा और फ़्लो एक स्क्रॉल में। किसी संख्या के पीछे की प्रक्रिया के लिए <strong>एनालिटिक्स</strong>। कागज़ी रीडिंग के लिए <strong>लॉगबुक डेटा इनपुट</strong>, स्टोर के लिए <strong>इन्वेंटरी</strong>, प्लांट के संकेतों के लिए <strong>इनसाइट लिस्ट</strong> और <strong>टिकट</strong>, काम के लिए <strong>टास्क लिस्ट</strong>, और चलता देखने के लिए <strong>स्काडाव्यू</strong>। एक पेज, एक ग्रैन्युलैरिटी, एक समय सीमा — सब कुछ उसके साथ।",
          voice: "शिफ़्ट के लिए डैशबोर्ड, गहराई के लिए एनालिटिक्स, अलर्ट के लिए इनसाइट और टिकट, काम के लिए टास्क, और चलता देखने के लिए स्काडा व्यू।",
        },
      ],
    },
    ta: {
      title: 'பார்க் வியூ ஸ்பா,<br><em>முழு ஆலையும் ஒரே திரையில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் விரைவான சுற்றுலா — டாஷ்போர்டு, லாக்புக், ஸ்டோர், எச்சரிக்கைகள் மற்றும் டிக்கெட்டுகள், நேரலையில் ஆலை, அதன் பின்னால் உள்ள வேலை.',
      chapter: 'டெமோ · பார்க் வியூ ஸ்பா',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, ஒவ்வொரு திரையும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது: <strong>டாஷ்போர்டு</strong>, <strong>லாக்புக் டேட்டா இன்புட்</strong>, <strong>இன்வென்டரி</strong>, <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்டுகள்</strong>, <strong>ஸ்காடாவியூ — பார்க் வியூ ஸ்பா வொர்க்ஸ்பேஸ்</strong>, பின்னர் விரியும் இரண்டு குழுக்கள் — ஆலையின் அனலிட்டிக்ஸ் உள்ள <strong>பார்க் வியூ ஸ்பா</strong>, டாஸ்க் லிஸ்ட் உள்ள <strong>டாஸ்க்</strong>. மேலே உள்ள <strong>தேடல்</strong> பெட்டி எந்தத் திரைக்கும் நேரடியாகச் செல்லும்.",
          voice: "ஒவ்வொரு திரையும் இந்த மெனுவில் — டாஷ்போர்டு, லாக்புக், இன்வென்டரி, இன்சைட், டிக்கெட், ஸ்காடா வியூ, அனலிட்டிக்ஸ், டாஸ்க்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>STP</strong> பக்கத்தில் திறக்கிறது. கீழே உள்ள அனைத்தும் மூன்று கட்டுப்பாடுகளைப் பின்பற்றுகின்றன: <strong>பேஜ்</strong> தேர்வி, <strong>கிரானுலாரிட்டி</strong> — இங்கே <strong>கடைசி 24 மணி நேரம்</strong> மேல் <strong>மணிநேரம்</strong> — மற்றும் <strong>ஃப்ரம்</strong>, <strong>டு</strong> வரம்பு. மேல் வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong> நேரலைத் தரவை மீண்டும் எடுக்கிறது, <strong>டவுன்லோட்</strong> ஏற்றுமதி செய்கிறது, அமைப்புகள் மற்றும் லேஅவுட் ஐகான்கள் பக்கத்தை நிர்வகிக்கின்றன.",
          voice: "பக்கம், கிரானுலாரிட்டி, தேதி வரம்பு ஆகியவை கீழே உள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. ரிஃப்ரெஷ் நேரலைத் தரவைக் கொண்டுவரும்.",
        },
        {
          label: 'வரைபடம்', title: 'ஆலை எங்கே, அது என்ன எழுப்பியது',
          body: "<strong>மேப் &amp; டிக்கெட்ஸ் அனலிட்டிக்ஸ்</strong> பக்கத்தைத் தொடங்குகிறது. <strong>மேப் வியூ</strong> ஆலையை அதன் நேரலை அளவீட்டுடன் காட்டுகிறது — <strong>வாட்டர் குவாலிட்டி</strong>க்கு மாற்றலாம் — <strong>டிக்கெட் ஹிஸ்டரி</strong> அது எழுப்பியவற்றைப் பட்டியலிடுகிறது: <em>“ACF அடைபட்டுள்ளது (இன்லெட் அழுத்தம் 1.7 kg/cm2க்கு மேல்)”</em>, <em>“MGF முழுவதும் டெல்டா அழுத்தம் அதிகம்”</em> — ஒவ்வொன்றும் ஆலை, நேரம், <strong>பிளான்ட் புராசஸ் இஷ்யூஸ்</strong> குறிச்சொல்லுடன்.",
          voice: "வரைபடம் உங்கள் ஆலையைக் காட்டுகிறது, அருகில் டிக்கெட் ஹிஸ்டரி — ஒரு ஏ சி எஃப் அடைப்பு, ஒரு எம் ஜி எஃப் அழுத்த எச்சரிக்கை.",
        },
        {
          label: 'அளவு', title: 'செயல்திறன், உள்வரவு, வெளியேற்றம்',
          body: "<strong>வாட்டர் குவான்டிட்டி</strong> நான்கு அட்டைகளில் ஆலை: <strong>பிளான்ட் எஃபிஷியன்சி 72.58%</strong>, <strong>இன்லெட் வாட்டர் 106.05 KL</strong>, <strong>அவுட்லெட் வாட்டர் 76.97 KL</strong>, மற்றும் மறுபயன்பாட்டை <strong>ஃப்ளஷிங் 61.61</strong>, <strong>பாசனம் 63.78</strong> எனப் பிரிக்கும் <strong>அவுட்லெட் வாட்டர் டிஸ்ட்ரிபியூஷன்</strong>. ஒவ்வொரு அட்டையின் கீழ் உள்ள பட்டை இரண்டு நேரங்களை ஒப்பிட்டு மாற்றத்தைக் காட்டுகிறது. எந்த அட்டையின் மேலும் ஹோவர் செய்தால் <strong>டவுன்லோட் CSV</strong>, எடிட், இன்ஃபோ கிடைக்கும்.",
          voice: "ஆலை செயல்திறன் எழுபத்திரண்டு புள்ளி ஆறு சதவீதம், நூற்றாறு கிலோலிட்டர் உள்ளே, எழுபத்தேழு வெளியே — சுத்திகரித்த நீர் எங்கே சென்றது என்பதும்.",
        },
        {
          label: 'தரம்', title: 'தரம், புள்ளி வாரியாக',
          body: "<strong>வாட்டர் குவாலிட்டி</strong>யில் இன்லெட், அவுட்லெட் அளவுருக்கள் உள்ளன — இந்தக் காலத்தில் pH, TDS <em>நோ டேட்டா அவெய்லபிள்</em> எனக் காட்டுகின்றன — மற்றும் <strong>ட்ரீட்டட் வாட்டர் டர்பிடிட்டி (குறிப்பு: &lt; 5 NTU)</strong>, சமீபத்தியது <strong>2.16</strong>. ஒவ்வொரு விளக்கப்படமும் <strong>பார் கிராஃப்</strong>, <strong>லைன் கிராஃப்</strong> இடையே மாறலாம்; <strong>எக்ஸ்பான்டட் வியூ</strong> அதை முழு அகலத்தில் திறக்கிறது, ஹோவர் எந்தப் புள்ளியையும் படிக்கிறது — 05:50க்கு <strong>1.98 NTU</strong> — <strong>ரீசெட் ஜூம்</strong> மீண்டும் வெளியே கொண்டுவரும்.",
          voice: "டர்பிடிட்டி தன் ஐந்து என் டி யு வரம்புக்கு நன்றாகக் கீழே உள்ளது. விளக்கப்படத்தை விரித்து, ஒரு அளவீட்டுக்கு ஹோவர் செய்து, ரீசெட் செய்யுங்கள்.",
        },
        {
          label: 'உயிரியல்', title: 'உயிரியல், நான்கு அட்டைகளில்',
          body: "<strong>பயோ ரியாக்டர் அனலிட்டிக்ஸ்</strong>: இந்தக் காலத்தில் <strong>ஏரேஷன் டேங்க் SV-30</strong>, <strong>ஏரேஷன் டேங்க் DO (குறிப்பு: 2–4 ppm)</strong> <strong>NA</strong> எனக் காட்டுகின்றன; <strong>எதிர்பார்க்கப்படும் காற்றுத் தேவை</strong> <strong>36.08 M3/நாள்</strong>, <strong>MBBR ரிடென்ஷன் டைம் 4.71</strong>. கீழே <strong>ஸ்லட்ஜ் ட்ரீட்மென்ட்</strong> ஸ்லட்ஜ் ஹோல்டிங் டேங்க் நிலையையும் ஒரு KLக்கு எதிர்பார்க்கப்படும் ஸ்லட்ஜ் வேஸ்டிங்கையும் காட்டுகிறது.",
          voice: "எதிர்பார்க்கப்படும் காற்றுத் தேவை நாளொன்றுக்கு முப்பத்தாறு கன மீட்டர், எம் பி பி ஆர் ரிடென்ஷன் நான்கு புள்ளி ஏழு — கீழே ஸ்லட்ஜ் ட்ரீட்மென்ட்.",
        },
        {
          label: 'ஆற்றல்', title: 'சுத்திகரிப்பின் செலவு',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> காலம் முழுவதும் மீட்டரை வரைகிறது, இரண்டு அட்டைகள் அதைச் செலவாக மாற்றுகின்றன: <strong>ஒரு KLக்கு ஆற்றல் 0.11</strong> — சுத்திகரித்த ஒவ்வொரு அலகு நீருக்கும் ஆற்றல் — மற்றும் காலத்தின் <strong>மொத்த ஆற்றல் நுகர்வு 8.4</strong>, இரண்டும் முந்தைய காலத்துடன் மாற்றத்துடன்.",
          voice: "ஆற்றல் மீட்டர், ஒரு கிலோலிட்டருக்கு ஆற்றல் பூஜ்யம் புள்ளி ஒன்று ஒன்று, இந்தக் காலத்தின் மொத்த நுகர்வு.",
        },
        {
          label: 'அட்டவணை', title: 'நான்கு காலங்கள், ஒரு அட்டவணை',
          body: "<strong>மேனுவல் இன்புட் – குவாலிட்டி பாராமீட்டர்ஸ், ஃப்ளோ &amp; எனர்ஜி</strong> ஒரு பதிவேடு போல. <strong>அவுட்புட் குவாலிட்டி ஆஃப் வாட்டர்</strong> ஒவ்வொரு அளவுருவின் கடைசி மதிப்பு, அதிகபட்சம், குறைந்தபட்சம், தற்போதையதைத் தருகிறது — <strong>டர்பிடிட்டி 2.16</strong>, அதிகபட்சம் <strong>4</strong>, குறைந்தபட்சம் <strong>1</strong>. <strong>ஃப்ளோ &amp; எனர்ஜி</strong> இன்லெட், அவுட்லெட், ஃப்ளஷிங், பாசனம் ஆகியவற்றை <strong>கடைசி 24 மணி</strong>, <strong>நேற்று</strong>, <strong>கடைசி 7 நாட்கள்</strong>, <strong>கடைசி 30 நாட்கள்</strong> எனக் காட்டுகிறது — மாதத்தில் <strong>4022.84 KL</strong> உள்ளே.",
          voice: "அதிகபட்சம், குறைந்தபட்சத்துடன் தரம், ஒவ்வொரு ஓட்டமும் இன்று, நேற்று, வாரம், மாதம் — ஒரே அட்டவணையில்.",
        },
        {
          label: 'லாக்புக்', title: 'லாக்புக் புகைப்படம் தரவாகிறது',
          body: "<strong>லாக்புக் டேட்டா இன்புட்</strong> <strong>OCR டேட்டா இன்புட்</strong>டைத் திறக்கிறது. <strong>அசெட்</strong> — <strong>பார்க் வியூ ஸ்பா</strong> — மற்றும் <strong>லாக்புக் டெம்ப்ளேட்</strong> — <strong>WAPP லாக்புக்</strong> — தேர்ந்தெடுத்து, காகித லாக்புக்கின் புகைப்படத்தை இழுத்துப் போடுங்கள் அல்லது <strong>கிளிக் ஹியர் டு அப்லோட்</strong> (JPG, PNG, JPEG, 100 MB வரை). அளவீடுகள் தட்டச்சு செய்யப்படாமல் பக்கத்திலிருந்தே படிக்கப்படுகின்றன.",
          voice: "அசெட்டையும் லாக்புக் டெம்ப்ளேட்டையும் தேர்ந்தெடுத்து, காகித லாக்புக்கின் புகைப்படத்தைப் பதிவேற்றுங்கள் — அளவீடுகள் தானாகப் படிக்கப்படும்.",
        },
        {
          label: 'இன்வென்டரி', title: 'ஸ்டோரில் என்ன இருக்கிறது',
          body: "<strong>இன்வென்டரி</strong> <strong>பார்க் வியூ ஸ்பா</strong> ஸ்டோரின் ஒவ்வொரு பொருளையும் பட்டியலிடுகிறது — <strong>யூரியா 38 Kg</strong>, <strong>பாலி 0.9 Kg</strong>, <strong>வெல்லம்</strong>, <strong>குளோரின்</strong>, <strong>பயோ கல்ச்சர்</strong>, <strong>DAP</strong> போன்ற இரசாயனங்கள், சோதனைக் கிட்கள் போன்ற நுகர்பொருட்கள் — <strong>கிடைக்கும் இருப்பு</strong>, <strong>கடைசி நுகர்வு</strong>, <strong>உண்மை</strong> எதிர் <strong>எதிர்பார்ப்பு</strong> நுகர்வுடன். சிவப்புக் கொடி கவனம் தேவைப்படும் பொருளைக் குறிக்கிறது.",
          voice: "ஸ்டோரின் ஒவ்வொரு இரசாயனமும், இருப்பு, கடைசிப் பயன்பாடு, உண்மை எதிர் எதிர்பார்ப்பு நுகர்வுடன். சிவப்புக் கொடிகளைக் கவனியுங்கள்.",
        },
        {
          label: 'பதிவு', title: 'ஒவ்வொரு கிலோவும், உள்ளேயும் வெளியேயும்',
          body: "ஒரு பொருளைத் திறந்தால் அதன் <strong>கெமிக்கல் லாக்ஸ்</strong>: <strong>தற்போதைய இருப்பு 38 kg</strong>, <strong>இந்த மாதப் பயன்பாடு 1 kg</strong>, <strong>கடந்த மாதப் பயன்பாடு 3 kg</strong>, பின்னர் ஒவ்வொரு நகர்வும் — <strong>ஆலையில் நுகர்வு −1</strong>, <strong>−2</strong>, ஒரு <strong>கொள்முதல் +1</strong> — தேதி, நேரத்துடன். <strong>டேட்</strong> தேர்வியில் இந்த வாரம், கடந்த வாரம், கடைசி 7 நாட்கள், இந்த மாதம், கடந்த மாதம் உள்ளன; <strong>ஃபில்டர்கள்</strong> குறிப்பு அல்லது அளவு வாரியாகச் சுருக்குகின்றன.",
          voice: "ஒவ்வொரு இரசாயனத்துக்கும் ஒரு பதிவு — இருப்பு, இந்த மற்றும் கடந்த மாதப் பயன்பாடு, தேதியுடன் ஒவ்வொரு கொள்முதலும் நுகர்வும்.",
        },
        {
          label: 'இன்சைட்', title: 'தளத்தின் சொந்தக் கண்டுபிடிப்புகள்',
          body: "<strong>இன்சைட் லிஸ்ட்</strong>டில் தளத்தின் கண்டுபிடிப்புகள் சேர்கின்றன: <strong>16264 அனைத்து இன்சைட்கள்</strong>, <strong>10 திறந்த அலாரங்கள்</strong>, <strong>16254 மூடிய அலாரங்கள்</strong>. <strong>வகை</strong>, <strong>முன்னுரிமை</strong>, <strong>சார்பு நேரம்</strong> அல்லது தேதி வரம்பால் வடிகட்டுங்கள்; ஒவ்வொரு வரியும் — <em>“ACF அடைபட்டுள்ளது”</em> அல்லது <em>“ரியாக்டர் ஃபீட் பம்ப் ஆட்டோ மோடில் இல்லை”</em> போல — விவரம், கருத்துகளுக்குத் திறக்கிறது. <strong>+ கிரியேட் இன்சைட்</strong> கையால் சேர்க்கிறது.",
          voice: "பதினாறாயிரம் கண்டுபிடிப்புகளில் பத்து திறந்த அலாரங்கள், வகை, முன்னுரிமை, நேரத்தால் வடிகட்டப்பட்டவை — ஒவ்வொன்றும் விவரத்துக்குத் திறக்கும்.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒவ்வொரு டிக்கெட்டும், எண்ணப்பட்டது',
          body: "<strong>டிக்கெட்டுகள்</strong> எண்ணிக்கையுடன் திறக்கிறது: <strong>5 திறந்தவை</strong> — 3 தாமதம், 3 உயர்த்தப்பட்டவை — எதிராக <strong>45 மூடியவை</strong>. வலதுபுறம் அதே எண்ணிக்கை குழு வாரியாக: <strong>புராசஸ்</strong>, <strong>எலக்ட்ரிக்கல்</strong>, <strong>மெக்கானிக்கல்</strong>, <strong>லேப்</strong>, <strong>அட்மின்</strong>, <strong>Dp சிஸ்டம்</strong>. ஒவ்வொரு வரியிலும் குறிச்சொற்கள் — <strong>ஆட்டோமேட்டிக்</strong>, <strong>ஓவர்டியூ</strong>, <strong>எஸ்கலேஷன் லெவல் 3</strong> — <strong>கிரியேட் நியூ டிக்கெட்</strong> கையால் ஒன்றை உருவாக்குகிறது.",
          voice: "ஐந்து திறந்த டிக்கெட்டுகள் எதிராக நாற்பத்தைந்து மூடியவை, தாமதம், உயர்த்தல், குழு வாரியாக — ஒவ்வொன்றும் ஆட்டோமேட்டிக் அல்லது மேனுவல்.",
        },
        {
          label: 'விவரம்', title: 'ஒரு டிக்கெட்டின் உள்ளே',
          body: "ஒரு டிக்கெட்டில் முழுக் கதையும்: உருவான நேரம், <strong>ஆலை</strong>, <strong>பிரச்சனை</strong> — <em>“MGF முழுவதும் டெல்டா அழுத்தம் அதிகம்”</em> — மற்றும் என்ன செய்ய வேண்டும் எனச் சொல்லும் <strong>விளக்கம்</strong>: <em>MGF பேக்வாஷ் தேவைப்படலாம்</em>. <strong>ஹிஸ்டரி</strong> நெடுவரிசை தணிக்கைத் தடம், <strong>ஆட் அ கமென்ட்</strong> செய்ததைப் பதிவு செய்கிறது, <strong>ரிசால்வ்</strong> அதை மூடுகிறது.",
          voice: "ஒவ்வொரு டிக்கெட்டிலும் பிரச்சனை, அதற்கான தீர்வு, வரலாறு உள்ளன — வேலை செய்யும்போது கருத்திடுங்கள், பின் ரிசால்வ் செய்யுங்கள்.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'நேரலையில் இயங்கும் ஆலை',
          body: "<strong>ஸ்காடாவியூ</strong> <strong>பார்க் வியூ ஸ்பா</strong>வை <strong>LIVE</strong> பேட்ஜுடன் திறக்கிறது: முழு ஆலை — பார் ஸ்கிரீன், ஈக்வலைசேஷன் டேங்க், <strong>MBBR-1</strong>, <strong>MBBR-2</strong>, ட்யூப் செட்லர், குளோரின் கான்டாக்ட், <strong>DMF</strong>, <strong>ACF</strong> வடிகட்டிகள், சாஃப்ட்னர், UF, சுத்திகரித்த நீர்த் தொட்டிகள் — ஒவ்வொன்றும் நேரலை மதிப்புடன். <strong>கடிகாரம்</strong>, <strong>ப்ளே</strong> முந்தைய தருணத்தை மீண்டும் இயக்குகின்றன; அருகில் <strong>குரூப் கன்ட்ரோல்</strong>, <strong>யூனிட் புராசஸஸ்</strong>.",
          voice: "ஸ்காடா வியூ முழு ஆலையையும் நேரலையில் காட்டுகிறது — ஒவ்வொரு தொட்டி, வடிகட்டி, பம்ப் அதன் அளவீட்டுடன் — முந்தைய தருணத்தையும் மீண்டும் இயக்கலாம்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'அனலிட்டிக்ஸ் — ஆலை ஆழமாக',
          body: "<strong>பார்க் வியூ ஸ்பா அனலிட்டிக்ஸ்</strong>, தன் <strong>டீடெய்ல்டு வியூ</strong> பக்கத்தில், ஆழமாகச் செல்கிறது. <strong>வாட்டர் குவான்டிட்டி அண்ட் அவெய்லபிலிட்டி</strong>யில் <strong>இன்லெட் வாட்டர் 107.55 KL</strong>, ஐந்து <strong>டேங்க் லெவல்கள்</strong>, <strong>ஃப்ளோ மீட்டர்ஸ் (குறிப்பு: 400 KLD)</strong> — இன்லெட் எதிர் அவுட்லெட் <strong>78.37</strong> — மற்றும் <strong>இன்லெட் அண்ட் அவுட்லெட் ஃப்ளோ</strong>. மேலும் கீழே: ஃப்ளஷிங், பாசனம், நீர்த் தரம், உயிரியல் ஆரோக்கியம், பேக்வாஷ், ஸ்க்ரூ பிரஸ், ஆட்டோ-மேனுவல், ட்ரிப் நிலை.",
          voice: "அனலிட்டிக்ஸ் ஆழமாகச் செல்கிறது — இன்லெட் நீர், ஒவ்வொரு தொட்டி நிலை, நானூறு கே எல் டி குறிப்புக்கு எதிரான ஓட்டம், கீழே உபகரணங்கள்.",
        },
        {
          label: 'வரம்பு', title: 'மணிநேரமோ நாட்களோ, எந்தக் காலமும்',
          body: "ரேஞ்ச் தேர்வி ஒவ்வொரு விட்ஜெட்டுக்கும் காலத்தை அமைக்கிறது: <strong>இன்று</strong> முதல் <strong>கடைசி 6 மாதங்கள்</strong> வரை முன்னமைவுகள், அல்லது நாட்காட்டியில் <strong>கஸ்டம்</strong>, <strong>12</strong> அல்லது <strong>24 மணி</strong> கடிகாரம், மற்றும் ஒரு தினசரி நேரத் துண்டை வரம்பு முழுவதும் மீண்டும் பயன்படுத்தும் <strong>ஸ்மார்ட் அவர்ஸ்</strong>. <strong>கிரானுலாரிட்டி</strong> <strong>மணிநேரம்</strong> இலிருந்து <strong>நாட்கள்</strong>க்கு மாறுகிறது — கோடு தினசரி பார்களாகிறது — <strong>அப்ளை செலக்ஷன்</strong> பக்கத்தை மீண்டும் வரைகிறது.",
          voice: "எந்தக் காலத்தையும் தேர்ந்தெடுத்து, கிரானுலாரிட்டியை மணிநேரத்திலிருந்து நாட்களுக்கு மாற்றுங்கள் — ஒவ்வொரு விளக்கப்படமும் தினசரி பார்களாக மாறும்.",
        },
        {
          label: 'லேஅவுட்', title: 'பக்கத்தை நீங்களே அமையுங்கள்',
          body: "<strong>லேஅவுட்</strong> ஐகான் பக்க எடிட்டரைத் திறக்கிறது. ஒவ்வொரு பிரிவும் — முதலில் <strong>வாட்டர் குவான்டிட்டி அண்ட் அவெய்லபிலிட்டி</strong> — தன் விட்ஜெட்டுகளை ஆன்/ஆஃப் செய்யக்கூடிய வரிகளாகப் பட்டியலிடுகிறது; ஒவ்வொரு வரிக்கும் சொந்தக் கருவிகள்: <strong>நகல்</strong>, <strong>நீக்கு</strong>, <strong>மேலே</strong>, <strong>கீழே</strong>, <strong>விளக்கப்பட வகை</strong>. பென்சிலால் பிரிவின் பெயரை மாற்றலாம், <strong>+</strong> மூலம் புதியதைச் சேர்க்கலாம்.",
          voice: "லேஅவுட் எடிட்டர் ஒவ்வொரு விட்ஜெட்டையும் பட்டியலிடுகிறது — காட்டு அல்லது மறை, நகலெடு, நீக்கு, வரிசை மாற்று, விளக்கப்பட வகையை மாற்று.",
        },
        {
          label: 'டாஸ்க்', title: 'ஒதுக்கப்பட்ட வேலை',
          body: "<strong>டாஸ்க் லிஸ்ட்</strong> வேலை வரிசை: தேடுங்கள், <strong>ஆலை</strong>, <strong>பயனர்</strong>, <strong>திறன்</strong>, <strong>நிறைவு நிலை</strong> வாரியாக வடிகட்டுங்கள். இன்று இதில் <strong>பார் ஸ்கிரீன் சுத்தம்</strong> (<strong>ஹை</strong>), <strong>ஸ்லட்ஜ் வேஸ்டிங்</strong>, <strong>SV-30 சோதனை</strong>, <strong>சென்சார் சுத்தம் &amp; அளவுத்திருத்தம்</strong> — ஒவ்வொன்றும் முன்னுரிமை, ஒதுக்கப்பட்டவர் <strong>பீஷம் குமார்</strong>, திறன் <strong>ஆப்பரேட்டர்</strong>, நிலை <strong>PENDING</strong> உடன். <strong>ஆட் டாஸ்க்</strong> புதிய வேலையை உருவாக்குகிறது.",
          voice: "டாஸ்க் லிஸ்ட்டில் வேலை — பார் ஸ்கிரீன் சுத்தம், ஸ்லட்ஜ் வேஸ்டிங், எஸ் வி முப்பது — ஒவ்வொன்றும் முன்னுரிமை, பொறுப்பாளர், நிலையுடன்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "ஆக: ஷிஃப்ட்டுக்கு <strong>டாஷ்போர்டு</strong> — அளவு, தரம், உயிரியல், ஆற்றல், ஓட்டங்கள் ஒரே ஸ்க்ரோலில். ஒரு எண்ணின் பின்னால் உள்ள செயல்முறைக்கு <strong>அனலிட்டிக்ஸ்</strong>. காகித அளவீடுகளுக்கு <strong>லாக்புக் டேட்டா இன்புட்</strong>, ஸ்டோருக்கு <strong>இன்வென்டரி</strong>, ஆலை சுட்டுவதற்கு <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்டுகள்</strong>, வேலைக்கு <strong>டாஸ்க் லிஸ்ட்</strong>, இயங்குவதைப் பார்க்க <strong>ஸ்காடாவியூ</strong>. ஒரு பக்கம், ஒரு கிரானுலாரிட்டி, ஒரு தேதி வரம்பு — அனைத்தும் பின்பற்றும்.",
          voice: "ஷிஃப்ட்டுக்கு டாஷ்போர்டு, ஆழத்துக்கு அனலிட்டிக்ஸ், எச்சரிக்கைகளுக்கு இன்சைட், டிக்கெட், வேலைக்கு டாஸ்க், இயங்குவதைப் பார்க்க ஸ்காடா வியூ.",
        },
      ],
    },
    mr: {
      title: 'पार्क व्ह्यू स्पा,<br><em>संपूर्ण प्लांट एका स्क्रीनवर.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा एक झटपट दौरा — डॅशबोर्ड, लॉगबुक, स्टोअर, अलर्ट आणि तिकिटे, लाइव्ह प्लांट, आणि त्यामागचे काम.',
      chapter: 'डेमो · पार्क व्ह्यू स्पा',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेन्यू, प्रत्येक स्क्रीन',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो: <strong>डॅशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्व्हेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>तिकिटे</strong>, <strong>स्काडाव्ह्यू — पार्क व्ह्यू स्पा वर्कस्पेस</strong>, नंतर उघडणारे दोन गट — प्लांटचे ॲनालिटिक्स असलेला <strong>पार्क व्ह्यू स्पा</strong>, आणि टास्क लिस्ट असलेला <strong>टास्क</strong>. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "प्रत्येक स्क्रीन याच मेन्यूत आहे — डॅशबोर्ड, लॉगबुक, इन्व्हेंटरी, इनसाइट, तिकिटे, स्काडा व्ह्यू, ॲनालिटिक्स आणि टास्क.",
        },
        {
          label: 'नियंत्रण', title: 'पेज चालवणारी नियंत्रणे',
          body: "<strong>डॅशबोर्ड</strong> <strong>STP</strong> पेजवर उघडतो. खालचे सर्व काही तीन नियंत्रणांवर चालते: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong> — इथे <strong>मागील 24 तास</strong> वर <strong>तास</strong> — आणि <strong>फ्रॉम</strong> व <strong>टू</strong> ची मर्यादा. वर उजवीकडे <strong>रिफ्रेश</strong> लाइव्ह डेटा आणतो, <strong>डाउनलोड</strong> एक्सपोर्ट करतो, आणि सेटिंग्ज व लेआउट आयकॉन पेज सांभाळतात.",
          voice: "पेज, ग्रॅन्युलॅरिटी आणि तारीख मर्यादा खालचा प्रत्येक विजेट चालवतात. रिफ्रेश लाइव्ह डेटा आणतो, डाउनलोड तो एक्सपोर्ट करतो.",
        },
        {
          label: 'नकाशा', title: 'प्लांट कुठे आहे, त्याने काय उठवले',
          body: "<strong>मॅप आणि तिकिट ॲनालिटिक्स</strong> ने पेज सुरू होते. <strong>मॅप व्ह्यू</strong> प्लांटला त्याच्या लाइव्ह रीडिंगसह दाखवतो — <strong>वॉटर क्वालिटी</strong> वर बदलता येतो — आणि <strong>तिकिट हिस्ट्री</strong> त्याने उठवलेले मुद्दे दाखवते: <em>“ACF चोक झाला आहे (इनलेट प्रेशर 1.7 kg/cm2 पेक्षा जास्त)”</em> आणि <em>“MGF वर डेल्टा प्रेशर खूप जास्त”</em>, प्रत्येकासोबत प्लांट, वेळ आणि <strong>प्लांट प्रोसेस इश्यू</strong> टॅग.",
          voice: "नकाशा तुमचा प्लांट दाखवतो, आणि शेजारी तिकिट हिस्ट्री — एक ए सी एफ चोक आणि एक एम जी एफ प्रेशर अलार्म.",
        },
        {
          label: 'प्रमाण', title: 'कार्यक्षमता, इनलेट, आउटलेट',
          body: "<strong>वॉटर क्वांटिटी</strong> म्हणजे चार कार्डांत प्लांट: <strong>प्लांट एफिशियन्सी 72.58%</strong>, <strong>इनलेट वॉटर 106.05 KL</strong>, <strong>आउटलेट वॉटर 76.97 KL</strong>, आणि पुनर्वापर <strong>फ्लशिंग 61.61</strong> व <strong>सिंचन 63.78</strong> मध्ये विभागणारे <strong>आउटलेट वॉटर डिस्ट्रिब्युशन</strong>. प्रत्येक कार्डखालची पट्टी दोन वेळांची तुलना करून बदल दाखवते. कोणत्याही कार्डवर होव्हर केल्यास <strong>डाउनलोड CSV</strong>, एडिट आणि इन्फो मिळतात.",
          voice: "प्लांट एफिशियन्सी बहात्तर पूर्णांक सहा टक्के, एकशे सहा किलोलिटर आत, सत्याहत्तर बाहेर — आणि शुद्ध पाणी कुठे गेले.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, प्रत्येक बिंदूवर',
          body: "<strong>वॉटर क्वालिटी</strong> मध्ये इनलेट आणि आउटलेट पॅरामीटर आहेत — या कालावधीत pH आणि TDS <em>नो डेटा अव्हेलेबल</em> दाखवतात — आणि <strong>ट्रीटेड वॉटर टर्बिडिटी (संदर्भ: &lt; 5 NTU)</strong>, नवीनतम <strong>2.16</strong>. प्रत्येक चार्ट <strong>बार ग्राफ</strong> आणि <strong>लाइन ग्राफ</strong> मध्ये बदलू शकतो; <strong>एक्सपांडेड व्ह्यू</strong> तो पूर्ण रुंदीत उघडतो, होव्हरने कोणताही बिंदू वाचा — 05:50 ला <strong>1.98 NTU</strong> — आणि <strong>रीसेट झूम</strong> परत आणतो.",
          voice: "टर्बिडिटी आपल्या पाच एन टी यू मर्यादेच्या खूप खाली आहे. चार्ट मोठा करा, एका रीडिंगसाठी होव्हर करा, आणि रीसेटने परत या.",
        },
        {
          label: 'जैविक', title: 'जैविक प्रक्रिया, चार कार्डांत',
          body: "<strong>बायो रिॲक्टर ॲनालिटिक्स</strong>: या कालावधीत <strong>एरेशन टँक SV-30</strong> आणि <strong>एरेशन टँक DO (संदर्भ: 2–4 ppm)</strong> <strong>NA</strong> दाखवतात, तर <strong>अपेक्षित एअर डिमांड</strong> <strong>36.08 M3/दिवस</strong> आणि <strong>MBBR रिटेन्शन टाइम 4.71</strong> आहे. खाली <strong>स्लज ट्रीटमेंट</strong> स्लज होल्डिंग टँकची पातळी आणि प्रति KL अपेक्षित स्लज वेस्टिंग दाखवते.",
          voice: "अपेक्षित एअर डिमांड दररोज छत्तीस घनमीटर, एम बी बी आर रिटेन्शन चार पूर्णांक सात — आणि अगदी खाली स्लज ट्रीटमेंट.",
        },
        {
          label: 'ऊर्जा', title: 'प्रक्रियेचा खर्च',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> संपूर्ण कालावधीत मीटर दाखवतो, आणि दोन कार्डे त्याचे खर्चात रूपांतर करतात: <strong>एनर्जी प्रति KL 0.11</strong> — प्रक्रिया केलेल्या प्रत्येक एकक पाण्यावरील ऊर्जा — आणि कालावधीचा <strong>एकूण ऊर्जा वापर 8.4</strong>, दोन्ही मागील कालावधीतील बदलासह.",
          voice: "ऊर्जा मीटर, प्रति किलोलिटर ऊर्जा शून्य पूर्णांक एक एक, आणि या कालावधीतील एकूण वापर.",
        },
        {
          label: 'तक्ता', title: 'चार कालावधी, एक तक्ता',
          body: "<strong>मॅन्युअल इनपुट – क्वालिटी पॅरामीटर्स, फ्लो आणि एनर्जी</strong> एखाद्या रजिस्टरसारखे आहे. <strong>आउटपुट क्वालिटी ऑफ वॉटर</strong> प्रत्येक पॅरामीटरचे शेवटचे मूल्य, कमाल, किमान आणि सध्याचे देते — <strong>टर्बिडिटी 2.16</strong>, कमाल <strong>4</strong>, किमान <strong>1</strong>. <strong>फ्लो आणि एनर्जी</strong> इनलेट, आउटलेट, फ्लशिंग आणि सिंचन <strong>मागील 24 तास</strong>, <strong>काल</strong>, <strong>मागील 7 दिवस</strong> आणि <strong>मागील 30 दिवस</strong> मध्ये मांडते — महिन्यात <strong>4022.84 KL</strong> आत.",
          voice: "कमाल आणि किमानसह गुणवत्ता, आणि प्रत्येक प्रवाह आज, काल, आठवडा आणि महिन्यात — एकाच तक्त्यात.",
        },
        {
          label: 'लॉगबुक', title: 'लॉगबुकचा फोटो डेटा बनतो',
          body: "<strong>लॉगबुक डेटा इनपुट</strong> मधून <strong>OCR डेटा इनपुट</strong> उघडते. <strong>ॲसेट</strong> — <strong>पार्क व्ह्यू स्पा</strong> — आणि <strong>लॉगबुक टेम्पलेट</strong> — <strong>WAPP लॉगबुक</strong> — निवडा, मग कागदी लॉगबुकचा फोटो ओढून टाका किंवा <strong>क्लिक हिअर टू अपलोड</strong> दाबा (JPG, PNG किंवा JPEG, 100 MB पर्यंत). रीडिंग टाइप करण्याऐवजी पानावरून वाचली जातात.",
          voice: "ॲसेट आणि लॉगबुक टेम्पलेट निवडा, कागदी लॉगबुकचा फोटो अपलोड करा, आणि रीडिंग आपोआप वाचली जातात.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'स्टोअरमध्ये काय आहे',
          body: "<strong>इन्व्हेंटरी</strong> <strong>पार्क व्ह्यू स्पा</strong> स्टोअरमधील प्रत्येक वस्तू दाखवते — <strong>युरिया 38 Kg</strong>, <strong>पॉली 0.9 Kg</strong>, <strong>गूळ</strong>, <strong>क्लोरीन</strong>, <strong>बायो कल्चर</strong> आणि <strong>DAP</strong> सारखी रसायने, आणि टेस्ट किटसारख्या उपभोग्य वस्तू — <strong>उपलब्ध साठा</strong>, <strong>शेवटचा वापर</strong>, आणि <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित</strong> वापरासह. लाल खूण लक्ष हवी असलेली वस्तू दाखवते.",
          voice: "स्टोअरमधील प्रत्येक रसायन, साठा, शेवटचा वापर, आणि प्रत्यक्ष विरुद्ध अपेक्षित वापरासह. लाल खुणांकडे लक्ष द्या.",
        },
        {
          label: 'लॉग', title: 'प्रत्येक किलो, आत आणि बाहेर',
          body: "एखादी वस्तू उघडा की तिचे <strong>केमिकल लॉग</strong>: <strong>सध्याची शिल्लक 38 kg</strong>, <strong>या महिन्याचा वापर 1 kg</strong>, <strong>मागील महिन्याचा वापर 3 kg</strong>, मग प्रत्येक हालचाल — <strong>प्लांटमध्ये वापर −1</strong>, <strong>−2</strong>, एक <strong>खरेदी +1</strong> — तारीख आणि वेळेसह. <strong>डेट</strong> पिकरमध्ये हा आठवडा, मागील आठवडा, मागील 7 दिवस, हा महिना आणि मागील महिना आहेत, आणि <strong>फिल्टर</strong> शेरा किंवा रकमेनुसार निवडतात.",
          voice: "प्रत्येक रसायनाचा लॉग — शिल्लक, या आणि मागील महिन्याचा वापर, आणि तारखेसह प्रत्येक खरेदी आणि वापर.",
        },
        {
          label: 'इनसाइट', title: 'प्लॅटफॉर्मचे स्वतःचे निष्कर्ष',
          body: "<strong>इनसाइट लिस्ट</strong> मध्ये प्लॅटफॉर्मचे निष्कर्ष जमा होतात: <strong>16264 सर्व इनसाइट</strong>, <strong>10 उघडे अलार्म</strong>, <strong>16254 बंद अलार्म</strong>. <strong>प्रकार</strong>, <strong>प्राधान्य</strong>, <strong>सापेक्ष वेळ</strong> किंवा तारीख मर्यादेनुसार फिल्टर करा; प्रत्येक ओळ — जसे <em>“ACF चोक झाला आहे”</em> किंवा <em>“रिॲक्टर फीड पंप ऑटो मोडबाहेर”</em> — वर्णन आणि टिप्पण्यांसाठी उघडते. <strong>+ क्रिएट इनसाइट</strong> हाताने जोडतो.",
          voice: "सोळा हजार निष्कर्षांपैकी दहा उघडे अलार्म, प्रकार, प्राधान्य आणि वेळेनुसार फिल्टर — आणि प्रत्येक तपशिलासाठी उघडतो.",
        },
        {
          label: 'तिकिटे', title: 'प्रत्येक तिकिट, मोजलेले',
          body: "<strong>तिकिटे</strong> पेज मोजणीने उघडते: <strong>5 उघडी</strong> — 3 ओव्हरड्यू, 3 एस्कलेटेड — विरुद्ध <strong>45 बंद</strong>. उजवीकडे तीच आकडेवारी टीमनुसार: <strong>प्रोसेस</strong>, <strong>इलेक्ट्रिकल</strong>, <strong>मेकॅनिकल</strong>, <strong>लॅब</strong>, <strong>ॲडमिन</strong>, <strong>Dp सिस्टिम</strong>. प्रत्येक ओळीवर टॅग आहेत — <strong>ऑटोमॅटिक</strong>, <strong>ओव्हरड्यू</strong>, <strong>एस्कलेशन लेव्हल 3</strong> — आणि <strong>क्रिएट न्यू तिकिट</strong> हाताने तिकिट बनवते.",
          voice: "पाच उघडी तिकिटे विरुद्ध पंचेचाळीस बंद, ओव्हरड्यू, एस्कलेटेड आणि टीमनुसार — प्रत्येक ऑटोमॅटिक किंवा मॅन्युअल टॅगसह.",
        },
        {
          label: 'तपशील', title: 'तिकिटाच्या आत',
          body: "तिकिटात संपूर्ण कहाणी असते: ते कधी तयार झाले, <strong>प्लांट</strong>, <strong>समस्या</strong> — <em>“MGF वर डेल्टा प्रेशर खूप जास्त”</em> — आणि काय करायचे ते सांगणारे <strong>वर्णन</strong>: <em>MGF बॅकवॉशची गरज असू शकते</em>. <strong>हिस्ट्री</strong> स्तंभ ऑडिट ट्रेल आहे, <strong>ॲड अ कमेंट</strong> केलेले काम नोंदवतो, आणि <strong>रिझॉल्व्ह</strong> ते बंद करतो.",
          voice: "प्रत्येक तिकिटात समस्या, त्यावरचा उपाय आणि इतिहास असतो — काम करताना टिप्पणी करा, मग रिझॉल्व्ह करा.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'लाइव्ह चालणारा प्लांट',
          body: "<strong>स्काडाव्ह्यू</strong> <strong>पार्क व्ह्यू स्पा</strong> ला <strong>LIVE</strong> बॅजसह उघडतो: संपूर्ण प्लांट — बार स्क्रीन, इक्वलायझेशन टँक, <strong>MBBR-1</strong> आणि <strong>MBBR-2</strong>, ट्यूब सेटलर, क्लोरीन कॉन्टॅक्ट, <strong>DMF</strong> आणि <strong>ACF</strong> फिल्टर, सॉफ्टनर, UF आणि ट्रीटेड वॉटर टँक — प्रत्येक आपल्या लाइव्ह मूल्यासह. <strong>घड्याळ</strong> आणि <strong>प्ले</strong> आधीचा क्षण पुन्हा दाखवतात, शेजारी <strong>ग्रुप कंट्रोल</strong> आणि <strong>युनिट प्रोसेसेस</strong> आहेत.",
          voice: "स्काडा व्ह्यू संपूर्ण प्लांट लाइव्ह दाखवतो — प्रत्येक टाकी, फिल्टर आणि पंप आपल्या रीडिंगसह — आणि आधीचा क्षणही पुन्हा दाखवू शकतो.",
        },
        {
          label: 'ॲनालिटिक्स', title: 'ॲनालिटिक्स — प्लांट सखोल',
          body: "<strong>पार्क व्ह्यू स्पा ॲनालिटिक्स</strong>, आपल्या <strong>डिटेल्ड व्ह्यू</strong> पेजवर, अधिक खोलात जाते. <strong>वॉटर क्वांटिटी आणि उपलब्धता</strong> मध्ये <strong>इनलेट वॉटर 107.55 KL</strong>, पाच <strong>टँक लेव्हल</strong>, <strong>फ्लो मीटर (संदर्भ: 400 KLD)</strong> — इनलेट विरुद्ध आउटलेट <strong>78.37</strong> — आणि <strong>इनलेट आणि आउटलेट फ्लो</strong> आहेत. आणखी खाली: फ्लशिंग आणि सिंचन, पाण्याची गुणवत्ता, जैविक आरोग्य, बॅकवॉश, स्क्रू प्रेस, ऑटो-मॅन्युअल आणि ट्रिप स्टेटस.",
          voice: "ॲनालिटिक्स अधिक खोलात जाते — इनलेट पाणी, प्रत्येक टाकीची पातळी, चारशे के एल डी संदर्भावर प्रवाह, आणि खाली उपकरणे.",
        },
        {
          label: 'मर्यादा', title: 'तास किंवा दिवस, कोणताही कालावधी',
          body: "रेंज पिकर प्रत्येक विजेटचा कालावधी ठरवतो: <strong>आज</strong> पासून <strong>मागील 6 महिने</strong> पर्यंत प्रीसेट, किंवा कॅलेंडरवर <strong>कस्टम</strong>, <strong>12</strong> किंवा <strong>24 तास</strong> घड्याळ, आणि एक दैनिक वेळ-खंड संपूर्ण मर्यादेत पुन्हा लावणारे <strong>स्मार्ट अवर्स</strong>. <strong>ग्रॅन्युलॅरिटी</strong> <strong>तास</strong> वरून <strong>दिवस</strong> करते — रेषा दैनिक बार बनते — आणि <strong>अप्लाय सिलेक्शन</strong> पेज पुन्हा काढते.",
          voice: "कोणताही कालावधी निवडा, मग ग्रॅन्युलॅरिटी तासांवरून दिवसांवर करा — प्रत्येक चार्ट दैनिक बारमध्ये पुन्हा काढला जातो.",
        },
        {
          label: 'लेआउट', title: 'पेज स्वतः मांडा',
          body: "<strong>लेआउट</strong> आयकॉन पेज एडिटर उघडतो. प्रत्येक विभाग — आधी <strong>वॉटर क्वांटिटी आणि उपलब्धता</strong> — आपले विजेट चालू-बंद करता येणाऱ्या ओळींमध्ये दाखवतो, आणि प्रत्येक ओळीची स्वतःची साधने आहेत: <strong>डुप्लिकेट</strong>, <strong>डिलीट</strong>, <strong>वर</strong>, <strong>खाली</strong>, आणि <strong>चार्ट प्रकार</strong>. पेन्सिलने विभागाचे नाव बदला, किंवा <strong>+</strong> ने नवीन जोडा.",
          voice: "लेआउट एडिटर प्रत्येक विजेट दाखवतो — दाखवा किंवा लपवा, डुप्लिकेट, डिलीट, क्रम बदला, किंवा चार्ट प्रकार बदला.",
        },
        {
          label: 'टास्क', title: 'सोपवलेले काम',
          body: "<strong>टास्क लिस्ट</strong> कामाची रांग आहे: शोधा, <strong>प्लांट</strong>, <strong>युजर</strong>, <strong>स्किल</strong> आणि <strong>कम्प्लिशन स्टेटस</strong> नुसार फिल्टर करा. आज यात <strong>बार स्क्रीन स्वच्छता</strong> (<strong>हाय</strong>), <strong>स्लज वेस्टिंग</strong>, <strong>SV-30 तपासणी</strong> आणि <strong>सेन्सर स्वच्छता आणि कॅलिब्रेशन</strong> आहेत — प्रत्येक प्राधान्य, असाइनी <strong>भीषम कुमार</strong>, स्किल <strong>ऑपरेटर</strong> आणि स्टेटस <strong>PENDING</strong> सह. <strong>ॲड टास्क</strong> नवीन काम तयार करतो.",
          voice: "टास्क लिस्टमध्ये काम — बार स्क्रीन स्वच्छता, स्लज वेस्टिंग, एस व्ही तीस — प्रत्येक प्राधान्य, असाइनी आणि स्टेटससह.",
        },
        {
          label: 'सारांश', title: 'कोणते पेज कोणत्या कामासाठी',
          body: "तर: शिफ्टसाठी <strong>डॅशबोर्ड</strong> — प्रमाण, गुणवत्ता, जैविक, ऊर्जा आणि प्रवाह एका स्क्रोलमध्ये. एखाद्या आकड्यामागच्या प्रक्रियेसाठी <strong>ॲनालिटिक्स</strong>. कागदी रीडिंगसाठी <strong>लॉगबुक डेटा इनपुट</strong>, स्टोअरसाठी <strong>इन्व्हेंटरी</strong>, प्लांटच्या इशाऱ्यांसाठी <strong>इनसाइट लिस्ट</strong> आणि <strong>तिकिटे</strong>, कामासाठी <strong>टास्क लिस्ट</strong>, आणि चालताना पाहण्यासाठी <strong>स्काडाव्ह्यू</strong>. एक पेज, एक ग्रॅन्युलॅरिटी, एक तारीख मर्यादा — सर्व काही त्यानुसार.",
          voice: "शिफ्टसाठी डॅशबोर्ड, सखोलतेसाठी ॲनालिटिक्स, अलर्टसाठी इनसाइट आणि तिकिटे, कामासाठी टास्क, आणि चालताना पाहण्यासाठी स्काडा व्ह्यू.",
        },
      ],
    },
  },
};

export default lesson;
