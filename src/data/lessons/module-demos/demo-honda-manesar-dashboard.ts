import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-honda-manesar-dashboard`;

/**
 * Demo — Honda Manesar, platform tour.  (hidden module-demos)
 *
 * Built from the 6:35 recording uploaded 2026-11-23 (Content Studio job
 * 6db016a9, demo_style=overview, no notes). New demo — no earlier Honda demo.
 *
 * The recording: Dashboard "Unified Dashboard" scrolled top to bottom (Plant
 * Hydraulics, Water Flow table, Quality Parameters gauges, Bio Health Track
 * expanded, Energy, Equipment Running and Trip Status, Tickets and Plant Score)
 * → side menu → Inventory (empty) → Insight List (counters, filters, one insight
 * opened) → Tickets (one ticket opened, history expanded) → ScadaView → side
 * menu → Honda Manesar → Honda Manesar Analytics (chart menu, Download CSV,
 * expanded Inlet Flow with tooltip, Primary / Secondary / Tertiary Unit, Sludge,
 * Equipment Status, Trip Status) → range picker (Smart Hours, 12/24 hour,
 * Last 3 Months with Weeks/Months) → Save Current View → Task → Task List.
 *
 * Style: `overview` — one step per page or feature area, short voices.
 * Real 1280px frames; the baked OS cursor is erased from every one (delogo on
 * flat ground, cross-frame patches where it sat on text or a chart line, and a
 * recoloured donor patch on the highlighted drawer row).
 *
 * Judgement calls:
 *  - Inventory shows no items for this account; the copy says so.
 *  - The "Maintenance" entry under Honda Manesar is named in the menu step
 *    only; the recording opens it to a "no analytics page configured" notice.
 *  - Logbook Data Input, Data Input and Roster Planning appear in the menu but
 *    are never opened, so they are named, not demonstrated.
 */
const lesson: Lesson = {
  id: 'demo-honda-manesar-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 5,
  estimatedMinutes: 4,
  expiresAt: '2026-12-23', // 30 days after the job's upload (2026-11-23) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    waterflow: `${BASE}/waterflow.jpg`,
    quality: `${BASE}/quality.jpg`,
    bio: `${BASE}/bio.jpg`,
    energy: `${BASE}/energy.jpg`,
    tickmap: `${BASE}/tickmap.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    insights: `${BASE}/insights.jpg`,
    insight: `${BASE}/insight.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticket: `${BASE}/ticket.jpg`,
    scada: `${BASE}/scada.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    expand: `${BASE}/expand.jpg`,
    units: `${BASE}/units.jpg`,
    range: `${BASE}/range.jpg`,
    tasks: `${BASE}/tasks.jpg`,
  },
  layouts: [
    // S1 — side menu
    {
      mode: 'detail', screenshot: 'nav', caption: 'Everything, one menu away',
      spotlight: { top: '9.5%', left: '0.5%', width: '15%', height: '73%' },
      cursor: [
        { at: 0, x: 16.9, y: 3.4, click: true },
        { at: 0.2, x: 5, y: 26.5 },
        { at: 0.4, x: 8, y: 54 },
        { at: 0.6, x: 8, y: 61 },
        { at: 0.75, x: 6, y: 67.8 },
        { at: 0.85, x: 10, y: 74.7, click: true },
        { at: 0.95, x: 3, y: 81.5 },
      ],
    },
    // S2 — page controls
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '19%', left: '1.5%', width: '97%', height: '12.5%' },
      cursor: [
        { at: 0, x: 15, y: 25.3 },
        { at: 0.3, x: 49.8, y: 25.3 },
        { at: 0.5, x: 58, y: 25.3 },
        { at: 0.7, x: 72.5, y: 25.3 },
        { at: 0.85, x: 75.8, y: 13.4 },
        { at: 0.95, x: 96, y: 13.4 },
      ],
    },
    // S3 — Plant Hydraulics cards
    {
      mode: 'detail', screenshot: 'header', caption: 'Plant hydraulics at a glance',
      spotlight: { top: '41%', left: '1.5%', width: '97%', height: '34%' },
      cursor: [
        { at: 0, x: 9, y: 57 },
        { at: 0.25, x: 25, y: 56 },
        { at: 0.45, x: 41, y: 56 },
        { at: 0.65, x: 57.5, y: 56 },
        { at: 0.8, x: 73.5, y: 56 },
        { at: 0.95, x: 90, y: 56 },
      ],
    },
    // S4 — Water Flow table
    {
      mode: 'detail', screenshot: 'waterflow', caption: 'Today, yesterday, week, month',
      spotlight: { top: '17%', left: '1.5%', width: '48%', height: '69.5%' },
      cursor: [
        { at: 0, x: 11, y: 31.7 },
        { at: 0.3, x: 24, y: 31.7 },
        { at: 0.5, x: 37.6, y: 43 },
        { at: 0.7, x: 47, y: 43 },
        { at: 0.9, x: 47, y: 75.4 },
      ],
    },
    // S5 — Quality Parameters gauges
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality against its reference',
      spotlight: { top: '35%', left: '1.5%', width: '80.5%', height: '34.5%' },
      cursor: [
        { at: 0, x: 8.5, y: 53 },
        { at: 0.25, x: 25, y: 53 },
        { at: 0.45, x: 41, y: 53 },
        { at: 0.65, x: 57.5, y: 54 },
        { at: 0.85, x: 74, y: 54 },
      ],
    },
    // S6 — Bio Health Track, expanded
    {
      mode: 'detail', screenshot: 'bio', caption: 'How the sludge settles',
      spotlight: { top: '26%', left: '10%', width: '79.5%', height: '55%' },
      cursor: [
        { at: 0, x: 21, y: 19.7, click: true },
        { at: 0.3, x: 36, y: 35 },
        { at: 0.6, x: 58, y: 73 },
        { at: 0.9, x: 80, y: 73 },
      ],
    },
    // S7 — Energy + Equipment Running and Trip Status
    {
      mode: 'detail', screenshot: 'energy', caption: 'Energy, and what ran',
      spotlight: { top: '44%', left: '1.5%', width: '97%', height: '55%' },
      cursor: [
        { at: 0, x: 8, y: 63 },
        { at: 0.35, x: 25.5, y: 63 },
        { at: 0.7, x: 20, y: 96 },
        { at: 0.9, x: 70, y: 96 },
      ],
    },
    // S8 — Tickets and Plant Score
    {
      mode: 'detail', screenshot: 'tickmap', caption: 'Map and open alerts',
      spotlight: { top: '29%', left: '1.5%', width: '97%', height: '70%' },
      cursor: [
        { at: 0, x: 27, y: 68 },
        { at: 0.3, x: 46, y: 32.5 },
        { at: 0.55, x: 62, y: 46.6 },
        { at: 0.75, x: 62, y: 67 },
        { at: 0.95, x: 61, y: 95.3 },
      ],
    },
    // S9 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Stock and consumption',
      spotlight: { top: '16.5%', left: '1.5%', width: '97%', height: '25%' },
      cursor: [
        { at: 0, x: 30, y: 20.7 },
        { at: 0.3, x: 8, y: 32.7 },
        { at: 0.55, x: 43, y: 32.7 },
        { at: 0.75, x: 68, y: 32.7 },
        { at: 0.9, x: 84, y: 41 },
      ],
    },
    // S10 — Insight List
    {
      mode: 'detail', screenshot: 'insights', caption: 'Every insight, filtered your way',
      spotlight: { top: '17%', left: '1.5%', width: '97%', height: '33%' },
      cursor: [
        { at: 0, x: 32, y: 21.8 },
        { at: 0.2, x: 13, y: 32.7 },
        { at: 0.35, x: 38, y: 32.7 },
        { at: 0.5, x: 57, y: 32.7 },
        { at: 0.65, x: 10, y: 44 },
        { at: 0.75, x: 32, y: 44 },
        { at: 0.85, x: 56, y: 44 },
        { at: 0.95, x: 80, y: 44 },
      ],
    },
    // S11 — one insight opened
    {
      mode: 'detail', screenshot: 'insight', caption: 'How often it comes back',
      spotlight: { top: '11.5%', left: '61%', width: '22.5%', height: '9%' },
      cursor: [
        { at: 0, x: 31, y: 15 },
        { at: 0.35, x: 67.5, y: 15.7 },
        { at: 0.55, x: 77, y: 15.7 },
        { at: 0.75, x: 53, y: 40 },
        { at: 0.9, x: 67.6, y: 85 },
      ],
    },
    // S12 — Tickets
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Tickets, counted and sorted',
      spotlight: { top: '17.5%', left: '1.5%', width: '97%', height: '17.5%' },
      cursor: [
        { at: 0, x: 15, y: 25 },
        { at: 0.25, x: 43, y: 25 },
        { at: 0.45, x: 65, y: 25 },
        { at: 0.6, x: 88, y: 25 },
        { at: 0.8, x: 26, y: 41.5 },
        { at: 0.95, x: 24, y: 45.5 },
      ],
    },
    // S13 — one ticket opened
    {
      mode: 'detail', screenshot: 'ticket', caption: 'The full story of a ticket',
      spotlight: { top: '28%', left: '52.5%', width: '37.2%', height: '46.6%' },
      cursor: [
        { at: 0, x: 12, y: 32 },
        { at: 0.3, x: 15, y: 55 },
        { at: 0.5, x: 60, y: 37.8 },
        { at: 0.75, x: 60, y: 46 },
        { at: 0.95, x: 87.3, y: 81.9 },
      ],
    },
    // S14 — ScadaView
    {
      mode: 'detail', screenshot: 'scada', caption: 'The plant, live',
      spotlight: { top: '14.5%', left: '1.5%', width: '97.3%', height: '6.5%' },
      cursor: [
        { at: 0, x: 12.5, y: 17.7 },
        { at: 0.25, x: 57, y: 17.7 },
        { at: 0.4, x: 65.5, y: 17.7 },
        { at: 0.55, x: 71.5, y: 17.7 },
        { at: 0.7, x: 80.5, y: 17.7 },
        { at: 0.85, x: 49, y: 51 },
        { at: 0.95, x: 94, y: 82.7 },
      ],
    },
    // S15 — Honda Manesar Analytics: Plant Summary + chart menu
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Your analytics page',
      spotlight: { top: '39.5%', left: '1.5%', width: '97%', height: '53%' },
      cursor: [
        { at: 0, x: 13.5, y: 25.4 },
        { at: 0.25, x: 13, y: 57 },
        { at: 0.45, x: 22.6, y: 47.5 },
        { at: 0.6, x: 23.8, y: 52.7, click: true },
        { at: 0.8, x: 82, y: 47 },
        { at: 0.95, x: 80, y: 73 },
      ],
    },
    // S16 — expanded chart with tooltip
    {
      mode: 'detail', screenshot: 'expand', caption: 'Open a chart, read any point',
      spotlight: { top: '45%', left: '41.2%', width: '13.5%', height: '9%' },
      cursor: [
        { at: 0, x: 47, y: 24.5 },
        { at: 0.3, x: 40, y: 66 },
        { at: 0.6, x: 55, y: 49.7 },
        { at: 0.9, x: 88.7, y: 16.3, click: true },
      ],
    },
    // S17 — unit sections
    {
      mode: 'detail', screenshot: 'units', caption: 'Unit by unit',
      spotlight: { top: '21%', left: '1.5%', width: '97.5%', height: '52%' },
      cursor: [
        { at: 0, x: 5, y: 16.3 },
        { at: 0.25, x: 13, y: 40 },
        { at: 0.45, x: 37, y: 40 },
        { at: 0.65, x: 62, y: 23.4 },
        { at: 0.85, x: 85, y: 40 },
      ],
    },
    // S18 — range picker
    {
      mode: 'detail', screenshot: 'range', caption: 'Any window, any resolution',
      spotlight: { top: '13%', left: '37.7%', width: '40%', height: '11.5%' },
      cursor: [
        { at: 0, x: 40, y: 15.4 },
        { at: 0.2, x: 48.8, y: 22, click: true },
        { at: 0.4, x: 31, y: 30.5 },
        { at: 0.55, x: 18.2, y: 42 },
        { at: 0.7, x: 19, y: 61.5 },
        { at: 0.85, x: 19, y: 67.6 },
        { at: 0.95, x: 77.7, y: 85.3, click: true },
      ],
    },
    // S19 — Task List
    {
      mode: 'detail', screenshot: 'tasks', caption: 'Work that needs doing',
      spotlight: { top: '17.5%', left: '1.5%', width: '97%', height: '10%' },
      cursor: [
        { at: 0, x: 22, y: 23 },
        { at: 0.15, x: 30, y: 23 },
        { at: 0.3, x: 48, y: 23 },
        { at: 0.42, x: 65, y: 23 },
        { at: 0.55, x: 88, y: 23 },
        { at: 0.7, x: 46.3, y: 43.7 },
        { at: 0.85, x: 79, y: 74.5 },
        { at: 0.95, x: 94.5, y: 12.6 },
      ],
    },
    // S20 — wrap
    {
      mode: 'detail', screenshot: 'header', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1, y: 3.4 },
        { at: 0.4, x: 15, y: 25 },
        { at: 0.8, x: 57, y: 56 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Honda Manesar,<br><em>the whole plant in one place.</em>',
      subtitle:
        'A quick tour of your platform — dashboard, insights, tickets, ScadaView, analytics and tasks — and how to move between them.',
      chapter: 'Demo · Honda Manesar',
      steps: [
        {
          label: 'Navigate', title: 'Everything, one menu away',
          body: "The <strong>menu icon</strong> opens the side navigation: <strong>Dashboard</strong>, <strong>Logbook Data Input</strong>, <strong>Inventory</strong>, <strong>Insight List</strong>, <strong>Tickets</strong>, <strong>Data Input</strong> and <strong>ScadaView – Honda Manesar</strong>. <strong>Honda Manesar</strong> unfolds into <strong>Maintenance</strong> and <strong>Honda Manesar Analytics</strong>, and <strong>Task</strong> holds <strong>Roster Planning</strong> and the <strong>Task List</strong>.",
          voice: "The menu icon opens every page — the dashboard, insights, tickets, ScadaView, your analytics page under Honda Manesar, and tasks.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "The dashboard opens on the <strong>Unified Dashboard</strong> page. <strong>Granularity</strong> (here <strong>Hours</strong>), the preset <strong>Last 24 Hours</strong> and the <strong>From</strong> / <strong>To</strong> dates drive every widget below. Top right: <strong>refresh</strong>, <strong>download</strong>, <strong>settings</strong>, <strong>edit page</strong> and <strong>share</strong>.",
          voice: "The page selector, granularity and date range drive every widget. Refresh, download, edit and share sit top right.",
        },
        {
          label: 'Hydraulics', title: 'Plant hydraulics at a glance',
          body: "<strong>Plant Hydraulics</strong> leads with six cards: <strong>Plant Efficiency</strong>, <strong>Inlet Flow</strong> <strong>178.53 KL</strong>, <strong>MBR-1 Permeate Flow</strong> <strong>169.95</strong>, <strong>MBR-2 Permeate Flow</strong> <strong>115.9</strong>, <strong>Total Outlet Water</strong> and the <strong>Air Washer tank level</strong>. The footer of each card shows the window and the change against the previous one.",
          voice: "Six cards open the page — inlet flow, both M B R permeate flows, outlet water and plant efficiency, each with its change against the previous window.",
        },
        {
          label: 'Water Flow', title: 'Today, yesterday, week, month',
          body: "The <strong>Water Flow (KL)</strong> table lines up <strong>Inlet Water</strong>, <strong>MBR-1</strong> and <strong>MBR-2 Permeate Flow</strong> and <strong>Outlet Water</strong> across <strong>Last 24 Hours</strong>, <strong>Yesterday</strong>, <strong>Last 7 Days</strong> and <strong>Last 30 Days</strong> — inlet reached <strong>11,421.89 KL</strong> over the month.",
          voice: "One table compares inlet, permeate and outlet water across the last day, yesterday, the week and the month.",
        },
        {
          label: 'Quality', title: 'Quality against its reference',
          body: "<strong>Quality Parameters</strong> shows gauges that carry their own reference: <strong>MBR Permeate Turbidity</strong> (ref. &lt;5 NTU) at <strong>0</strong>, <strong>MBR-1 Flux</strong> <strong>11.08</strong> and <strong>MBR-2 Flux</strong> <strong>7.56</strong> against a 20–30 LMH band, and the <strong>trans-membrane pressure</strong> of each MBR at <strong>-0.15</strong> and <strong>-0.19</strong>.",
          voice: "Each gauge carries its reference — permeate turbidity, flux on both M B Rs, and trans-membrane pressure.",
        },
        {
          label: 'Biology', title: 'How the sludge settles',
          body: "<strong>Bio Health Track</strong> plots the <strong>Sludge Settling Pattern</strong> from a sample — here <strong>13 November</strong> — with markers at <strong>30</strong>, <strong>60</strong> and <strong>90 minutes</strong>. Switch between line and bar, step through samples with the arrows, or use <strong>Expanded View</strong> as shown.",
          voice: "Bio health track plots how the sludge settles over time, with markers at thirty, sixty and ninety minutes.",
        },
        {
          label: 'Energy', title: 'Energy, and what ran',
          body: "<strong>Energy Consumption</strong> reads <strong>344.3 kWh/day</strong> and <strong>1.93</strong> energy per KL. Below, <strong>Equipment Running and Trip Status</strong> lists running hours for every pump, blower, mixer and screen beside a <strong>Trip Status</strong> table (1 = trip).",
          voice: "Energy reads three hundred forty-four kilowatt hours a day. Below, every machine's running hours sit beside its trip status.",
        },
        {
          label: 'Tickets & Map', title: 'Map and open alerts',
          body: "<strong>Tickets and Plant Score</strong> pairs a <strong>Map View</strong> (switchable to <strong>Plant Score</strong>) with <strong>Tickets and Alerts</strong> — each row gives the description, plant, time and type, such as <em>MBR Water tank level has reached 95%</em> or <em>Membrane outlet water is turbid</em>.",
          voice: "The map sits beside the live list of tickets and alerts, each with its plant, time and type.",
        },
        {
          label: 'Inventory', title: 'Stock and consumption',
          body: "<strong>Inventory</strong> lists each item with its <strong>store</strong>, <strong>category</strong>, <strong>stock available</strong>, <strong>last consumption</strong>, and <strong>actual</strong> versus <strong>expected consumption</strong>, with search and filters. No items are configured for this account yet.",
          voice: "Inventory tracks stock and actual against expected consumption. No items are set up here yet.",
        },
        {
          label: 'Insights', title: 'Every insight, filtered your way',
          body: "<strong>Insights</strong> counts <strong>34,478 All Insights</strong>, <strong>19 Open Alarms</strong>, <strong>34,459 Closed Alarms</strong> and <strong>Achievements</strong>. Filter by <strong>Type of Insight</strong>, <strong>Priority</strong> (Low, Medium, High), <strong>Relative Time</strong> (Today to Last 6 Months, or Custom), workspace or asset — or <strong>Create Insight</strong>.",
          voice: "Insights counts every alarm, open and closed. Filter by type, priority or time, or create your own.",
        },
        {
          label: 'Insight', title: 'How often it comes back',
          body: "Open an insight to see its full name, type and priority, plus how it behaves: this MBR tank-level alarm recurs every <strong>6.66 days</strong> on average and has opened <strong>84 times</strong>. <strong>Details</strong> and <strong>Comments</strong> sit below, and <strong>Mark Insight Closed</strong> ends it.",
          voice: "Open one and you see how it recurs — every six point six days, eighty-four times so far — with details and comments.",
        },
        {
          label: 'Tickets', title: 'Tickets, counted and sorted',
          body: "<strong>Tickets</strong> shows <strong>10 Open</strong> (10 overdue, 8 escalated) and <strong>23 Closed</strong>, split by category — Admin, Electrical, Lab, Process, Dp System, Mechanical. Each ticket carries tags such as <strong>automatic</strong>, <strong>overdue</strong> or <strong>Escalation Level 1</strong>, its time, category and plant.",
          voice: "Tickets are counted open and closed, split by category, and tagged when they're overdue or escalated.",
        },
        {
          label: 'Ticket', title: 'The full story of a ticket',
          body: "A ticket opens with when it was created, the plant, the <strong>problem</strong> and the <strong>description</strong> of what to do — here <em>Turn ON the Sludge Recirculation Pump</em>. The <strong>History</strong> keeps every event with comments, and <strong>Resolve</strong> closes it.",
          voice: "Each ticket keeps the problem, what to do, and a full history you can comment on — then resolve it.",
        },
        {
          label: 'ScadaView', title: 'The plant, live',
          body: "<strong>ScadaView</strong> draws Honda Manesar as a <strong>LIVE</strong> process diagram — screens, equalization, aeration tanks, MBRs, dosing and the treated water tank. Pick a time and press <strong>play</strong> to replay it, open <strong>Group Control</strong> or <strong>Unit Processes</strong>, and zoom with the controls bottom right.",
          voice: "ScadaView shows the plant live. Replay any moment, open group control or unit processes, and zoom in anywhere.",
        },
        {
          label: 'Analytics', title: 'Your analytics page',
          body: "<strong>Honda Manesar Analytics</strong> opens on <strong>Plant Summary</strong>: <strong>Inlet Flow</strong>, <strong>Turbidity at MBR Permeate Tank</strong>, <strong>Hydraulic Efficiency</strong>, and cards for MBR-1 and MBR-2 permeate flow and clarifier outlet pH. Each chart's menu switches it to a <strong>Table</strong> or <strong>Bar Graph</strong>, and its tools include <strong>Download CSV</strong>.",
          voice: "Your analytics page opens on the plant summary. Any chart can switch to a table or bar graph, or download as C S V.",
        },
        {
          label: 'Zoom', title: 'Open a chart, read any point',
          body: "<strong>Expanded View</strong> fills the screen. Hover a point for its window, value and <strong>Aggregation Type</strong> — here <strong>87.29</strong> inlet flow, cumulative. Click a legend entry to hide a series, drag to zoom, and <strong>Reset Zoom</strong> returns.",
          voice: "Expanded, every point shows its value and aggregation. Toggle series, drag to zoom, and reset.",
        },
        {
          label: 'Units', title: 'Unit by unit',
          body: "Below the summary the page follows the plant: <strong>Primary Unit</strong> (equalization, inlet flow, running hours, energy meter), <strong>Secondary Unit</strong> (MBR levels, backpulse flows, MBR pressures, motorized valves, SV-30), <strong>Tertiary Unit</strong> (dosing tank levels, UV valves), <strong>Sludge</strong>, and <strong>Equipment Status</strong> with <strong>Trip Status</strong>.",
          voice: "Then it follows the plant — primary, secondary and tertiary units, sludge, and equipment and trip status.",
        },
        {
          label: 'Range', title: 'Any window, any resolution',
          body: "The range picker offers <strong>Today</strong> through <strong>Last 6 Months</strong> or <strong>Custom</strong>, a <strong>12</strong> or <strong>24 hour</strong> clock, and <strong>Smart Hours</strong> to repeat a daily time slot. Granularity follows the window — <strong>Weeks</strong> or <strong>Months</strong> for <strong>Last 3 Months</strong>. <strong>Save Current View</strong> keeps the result.",
          voice: "Pick a preset or custom dates. Granularity follows the window, and Save Current View keeps it.",
        },
        {
          label: 'Tasks', title: 'Work that needs doing',
          body: "<strong>Task → Task List</strong> shows each task's description, plant, <strong>priority</strong>, assignee, required <strong>skills</strong> (Operator, Supervisor) and <strong>completion status</strong> — here <em>Basic Cleaning of the Sensor</em> and <em>Check and Validate the data of all sensors</em>, <strong>Pending</strong>. Filter by plant, user, skill or status, open a task for its details, or <strong>Add Task</strong>.",
          voice: "The task list shows who needs to do what, with priority, skills and status. Open any task, or add a new one.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "<strong>Dashboard</strong> for the daily picture. <strong>Insight List</strong> and <strong>Tickets</strong> for what needs attention. <strong>ScadaView</strong> for the live process. <strong>Honda Manesar Analytics</strong> for unit-by-unit trends. <strong>Task List</strong> for the work on the ground.",
          voice: "Dashboard for the daily picture, insights and tickets for what needs attention, ScadaView live, analytics for trends, and tasks for the work.",
        },
      ],
    },
    hi: {
      title: 'होंडा मानेसर,<br><em>पूरा प्लांट एक जगह।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का एक छोटा दौरा — डैशबोर्ड, इनसाइट्स, टिकट, स्काडाव्यू, एनालिटिक्स और टास्क — और इनके बीच कैसे जाएँ।',
      chapter: 'डेमो · होंडा मानेसर',
      steps: [
        {
          label: 'नेविगेशन', title: 'सब कुछ, एक मेन्यू दूर',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है: <strong>डैशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्वेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>टिकट</strong>, <strong>डेटा इनपुट</strong> और <strong>स्काडाव्यू – होंडा मानेसर</strong>। <strong>होंडा मानेसर</strong> के अंदर <strong>मेंटेनेंस</strong> और <strong>होंडा मानेसर एनालिटिक्स</strong> हैं, और <strong>टास्क</strong> में <strong>रोस्टर प्लानिंग</strong> और <strong>टास्क लिस्ट</strong>।",
          voice: "मेन्यू आइकन हर पेज खोलता है — डैशबोर्ड, इनसाइट्स, टिकट, स्काडाव्यू, होंडा मानेसर के अंदर एनालिटिक्स पेज, और टास्क।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "डैशबोर्ड <strong>यूनिफ़ाइड डैशबोर्ड</strong> पेज पर खुलता है। <strong>ग्रैन्युलैरिटी</strong> (यहाँ <strong>घंटे</strong>), <strong>पिछले 24 घंटे</strong> और <strong>से</strong> / <strong>तक</strong> की तारीखें नीचे के हर विजेट को चलाती हैं। ऊपर दाईं ओर: <strong>रिफ़्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्स</strong>, <strong>पेज एडिट</strong> और <strong>शेयर</strong>।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा हर विजेट को चलाते हैं। रिफ़्रेश, डाउनलोड, एडिट और शेयर ऊपर दाईं ओर हैं।",
        },
        {
          label: 'हाइड्रॉलिक्स', title: 'एक नज़र में प्लांट हाइड्रॉलिक्स',
          body: "<strong>प्लांट हाइड्रॉलिक्स</strong> में छह कार्ड हैं: <strong>प्लांट एफ़िशिएंसी</strong>, <strong>इनलेट फ़्लो</strong> <strong>178.53 KL</strong>, <strong>MBR-1 परमिएट फ़्लो</strong> <strong>169.95</strong>, <strong>MBR-2 परमिएट फ़्लो</strong> <strong>115.9</strong>, <strong>टोटल आउटलेट वॉटर</strong> और <strong>एयर वॉशर टैंक लेवल</strong>। हर कार्ड के नीचे समय और पिछली अवधि से बदलाव दिखता है।",
          voice: "छह कार्ड पेज की शुरुआत करते हैं — इनलेट फ़्लो, दोनों एम बी आर परमिएट फ़्लो, आउटलेट वॉटर और प्लांट एफ़िशिएंसी, हर एक पिछली अवधि से बदलाव के साथ।",
        },
        {
          label: 'वॉटर फ़्लो', title: 'आज, कल, हफ़्ता, महीना',
          body: "<strong>वॉटर फ़्लो (KL)</strong> टेबल <strong>इनलेट वॉटर</strong>, <strong>MBR-1</strong> और <strong>MBR-2 परमिएट फ़्लो</strong> और <strong>आउटलेट वॉटर</strong> को <strong>पिछले 24 घंटे</strong>, <strong>कल</strong>, <strong>पिछले 7 दिन</strong> और <strong>पिछले 30 दिन</strong> में दिखाती है — महीने में इनलेट <strong>11,421.89 KL</strong> रहा।",
          voice: "एक टेबल इनलेट, परमिएट और आउटलेट पानी की तुलना पिछले दिन, कल, हफ़्ते और महीने में करती है।",
        },
        {
          label: 'गुणवत्ता', title: 'रेफ़रेंस के सामने गुणवत्ता',
          body: "<strong>क्वालिटी पैरामीटर्स</strong> में हर गेज अपना रेफ़रेंस रखता है: <strong>MBR परमिएट टर्बिडिटी</strong> (रेफ़. &lt;5 NTU) <strong>0</strong>, <strong>MBR-1 फ़्लक्स</strong> <strong>11.08</strong> और <strong>MBR-2 फ़्लक्स</strong> <strong>7.56</strong> (20–30 LMH), और दोनों MBR का <strong>ट्रांस-मेम्ब्रेन प्रेशर</strong> <strong>-0.15</strong> और <strong>-0.19</strong>।",
          voice: "हर गेज अपना रेफ़रेंस रखता है — परमिएट टर्बिडिटी, दोनों एम बी आर का फ़्लक्स, और ट्रांस-मेम्ब्रेन प्रेशर।",
        },
        {
          label: 'बायोलॉजी', title: 'स्लज कैसे बैठता है',
          body: "<strong>बायो हेल्थ ट्रैक</strong> एक सैंपल से <strong>स्लज सेटलिंग पैटर्न</strong> दिखाता है — यहाँ <strong>13 नवंबर</strong> — <strong>30</strong>, <strong>60</strong> और <strong>90 मिनट</strong> पर मार्कर के साथ। लाइन और बार के बीच बदलें, तीरों से सैंपल बदलें, या <strong>एक्सपैंडेड व्यू</strong> खोलें।",
          voice: "बायो हेल्थ ट्रैक दिखाता है कि स्लज समय के साथ कैसे बैठता है, तीस, साठ और नब्बे मिनट पर मार्कर के साथ।",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, और क्या चला',
          body: "<strong>एनर्जी कंज़म्प्शन</strong> <strong>344.3 kWh/दिन</strong> और प्रति KL <strong>1.93</strong> दिखाता है। नीचे <strong>इक्विपमेंट रनिंग एंड ट्रिप स्टेटस</strong> हर पंप, ब्लोअर, मिक्सर और स्क्रीन के रनिंग घंटे और <strong>ट्रिप स्टेटस</strong> टेबल (1 = ट्रिप) देता है।",
          voice: "ऊर्जा रोज़ तीन सौ चौवालीस किलोवाट घंटे है। नीचे हर मशीन के रनिंग घंटे उसके ट्रिप स्टेटस के साथ हैं।",
        },
        {
          label: 'टिकट और मैप', title: 'मैप और खुले अलर्ट',
          body: "<strong>टिकट्स एंड प्लांट स्कोर</strong> में <strong>मैप व्यू</strong> (जिसे <strong>प्लांट स्कोर</strong> पर बदला जा सकता है) के साथ <strong>टिकट्स एंड अलर्ट्स</strong> हैं — हर पंक्ति में विवरण, प्लांट, समय और प्रकार, जैसे <em>MBR वॉटर टैंक लेवल 95% पहुँचा</em> या <em>मेम्ब्रेन आउटलेट पानी गंदला है</em>।",
          voice: "मैप के साथ टिकट और अलर्ट की लाइव सूची है, हर एक का प्लांट, समय और प्रकार।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टॉक और खपत',
          body: "<strong>इन्वेंटरी</strong> हर आइटम का <strong>स्टोर</strong>, <strong>श्रेणी</strong>, <strong>उपलब्ध स्टॉक</strong>, <strong>पिछली खपत</strong>, और <strong>वास्तविक</strong> बनाम <strong>अपेक्षित खपत</strong> दिखाती है, सर्च और फ़िल्टर के साथ। इस अकाउंट में अभी कोई आइटम सेट नहीं है।",
          voice: "इन्वेंटरी स्टॉक और वास्तविक बनाम अपेक्षित खपत ट्रैक करती है। यहाँ अभी कोई आइटम सेट नहीं है।",
        },
        {
          label: 'इनसाइट्स', title: 'हर इनसाइट, आपके फ़िल्टर से',
          body: "<strong>इनसाइट्स</strong> में <strong>34,478 सभी इनसाइट्स</strong>, <strong>19 खुले अलार्म</strong>, <strong>34,459 बंद अलार्म</strong> और <strong>अचीवमेंट्स</strong> गिने जाते हैं। <strong>इनसाइट का प्रकार</strong>, <strong>प्राथमिकता</strong> (कम, मध्यम, ऊँची), <strong>समय</strong> (आज से पिछले 6 महीने, या कस्टम), वर्कस्पेस या एसेट से फ़िल्टर करें — या <strong>क्रिएट इनसाइट</strong>।",
          voice: "इनसाइट्स हर अलार्म गिनता है, खुला और बंद। प्रकार, प्राथमिकता या समय से फ़िल्टर करें, या अपना बनाएँ।",
        },
        {
          label: 'इनसाइट', title: 'यह कितनी बार लौटता है',
          body: "इनसाइट खोलें तो पूरा नाम, प्रकार और प्राथमिकता दिखते हैं, साथ में उसका व्यवहार: यह MBR टैंक-लेवल अलार्म औसतन हर <strong>6.66 दिन</strong> में लौटता है और <strong>84 बार</strong> खुला है। नीचे <strong>विवरण</strong> और <strong>टिप्पणियाँ</strong> हैं, और <strong>मार्क इनसाइट क्लोज़्ड</strong> इसे बंद करता है।",
          voice: "एक खोलें तो दिखता है वह कैसे लौटता है — हर छह दशमलव छह दिन, अब तक चौरासी बार — विवरण और टिप्पणियों के साथ।",
        },
        {
          label: 'टिकट', title: 'टिकट, गिने और छाँटे हुए',
          body: "<strong>टिकट</strong> में <strong>10 खुले</strong> (10 ओवरड्यू, 8 एस्केलेटेड) और <strong>23 बंद</strong> हैं, श्रेणी के हिसाब से — एडमिन, इलेक्ट्रिकल, लैब, प्रोसेस, Dp सिस्टम, मैकेनिकल। हर टिकट पर <strong>automatic</strong>, <strong>overdue</strong> या <strong>Escalation Level 1</strong> जैसे टैग, समय, श्रेणी और प्लांट होते हैं।",
          voice: "टिकट खुले और बंद गिने जाते हैं, श्रेणी में बँटे होते हैं, और ओवरड्यू या एस्केलेट होने पर टैग होते हैं।",
        },
        {
          label: 'टिकट', title: 'एक टिकट की पूरी कहानी',
          body: "टिकट में बनने का समय, प्लांट, <strong>समस्या</strong> और करने का <strong>विवरण</strong> होता है — यहाँ <em>स्लज रीसर्कुलेशन पंप चालू करें</em>। <strong>हिस्ट्री</strong> हर घटना टिप्पणियों के साथ रखती है, और <strong>रिज़ॉल्व</strong> इसे बंद करता है।",
          voice: "हर टिकट में समस्या, क्या करना है, और पूरी हिस्ट्री होती है जिस पर टिप्पणी कर सकते हैं — फिर रिज़ॉल्व करें।",
        },
        {
          label: 'स्काडाव्यू', title: 'प्लांट, लाइव',
          body: "<strong>स्काडाव्यू</strong> होंडा मानेसर को <strong>लाइव</strong> प्रोसेस डायग्राम में दिखाता है — स्क्रीन, इक्वलाइज़ेशन, एरेशन टैंक, MBR, डोज़िंग और ट्रीटेड वॉटर टैंक। समय चुनकर <strong>प्ले</strong> से दोबारा देखें, <strong>ग्रुप कंट्रोल</strong> या <strong>यूनिट प्रोसेसेज़</strong> खोलें, और नीचे दाईं ओर के कंट्रोल से ज़ूम करें।",
          voice: "स्काडाव्यू प्लांट को लाइव दिखाता है। कोई भी पल दोबारा देखें, ग्रुप कंट्रोल या यूनिट प्रोसेसेज़ खोलें, और कहीं भी ज़ूम करें।",
        },
        {
          label: 'एनालिटिक्स', title: 'आपका एनालिटिक्स पेज',
          body: "<strong>होंडा मानेसर एनालिटिक्स</strong> <strong>प्लांट समरी</strong> पर खुलता है: <strong>इनलेट फ़्लो</strong>, <strong>MBR परमिएट टैंक पर टर्बिडिटी</strong>, <strong>हाइड्रॉलिक एफ़िशिएंसी</strong>, और MBR-1, MBR-2 परमिएट फ़्लो व क्लैरिफ़ायर आउटलेट pH के कार्ड। हर चार्ट का मेन्यू उसे <strong>टेबल</strong> या <strong>बार ग्राफ़</strong> में बदलता है, और टूल्स में <strong>CSV डाउनलोड</strong> है।",
          voice: "आपका एनालिटिक्स पेज प्लांट समरी पर खुलता है। कोई भी चार्ट टेबल या बार ग्राफ़ बन सकता है, या सी एस वी में डाउनलोड हो सकता है।",
        },
        {
          label: 'ज़ूम', title: 'चार्ट खोलें, हर बिंदु पढ़ें',
          body: "<strong>एक्सपैंडेड व्यू</strong> स्क्रीन भर देता है। किसी बिंदु पर होवर करें तो समय, मान और <strong>एग्रीगेशन टाइप</strong> दिखता है — यहाँ इनलेट फ़्लो <strong>87.29</strong>, क्यूम्युलेटिव। लेजेंड पर क्लिक करके सीरीज़ छिपाएँ, ड्रैग करके ज़ूम करें, और <strong>रीसेट ज़ूम</strong> से वापस आएँ।",
          voice: "बड़ा करने पर हर बिंदु अपना मान और एग्रीगेशन दिखाता है। सीरीज़ बदलें, ड्रैग करके ज़ूम करें, और रीसेट करें।",
        },
        {
          label: 'यूनिट', title: 'यूनिट दर यूनिट',
          body: "समरी के नीचे पेज प्लांट के क्रम में चलता है: <strong>प्राइमरी यूनिट</strong> (इक्वलाइज़ेशन, इनलेट फ़्लो, रनिंग घंटे, एनर्जी मीटर), <strong>सेकेंडरी यूनिट</strong> (MBR लेवल, बैकपल्स फ़्लो, MBR प्रेशर, मोटराइज़्ड वाल्व, SV-30), <strong>टर्शियरी यूनिट</strong> (डोज़िंग टैंक लेवल, UV वाल्व), <strong>स्लज</strong>, और <strong>इक्विपमेंट स्टेटस</strong> व <strong>ट्रिप स्टेटस</strong>।",
          voice: "फिर पेज प्लांट के क्रम में चलता है — प्राइमरी, सेकेंडरी और टर्शियरी यूनिट, स्लज, और इक्विपमेंट व ट्रिप स्टेटस।",
        },
        {
          label: 'समय सीमा', title: 'कोई भी अवधि, कोई भी रिज़ॉल्यूशन',
          body: "रेंज पिकर में <strong>आज</strong> से <strong>पिछले 6 महीने</strong> या <strong>कस्टम</strong>, <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी, और रोज़ का एक समय-खंड दोहराने के लिए <strong>स्मार्ट आवर्स</strong> हैं। ग्रैन्युलैरिटी अवधि के साथ बदलती है — <strong>पिछले 3 महीने</strong> के लिए <strong>हफ़्ते</strong> या <strong>महीने</strong>। <strong>सेव करंट व्यू</strong> इसे सहेजता है।",
          voice: "प्रीसेट या अपनी तारीखें चुनें। ग्रैन्युलैरिटी अवधि के साथ बदलती है, और सेव करंट व्यू इसे सहेजता है।",
        },
        {
          label: 'टास्क', title: 'जो काम करना है',
          body: "<strong>टास्क → टास्क लिस्ट</strong> हर टास्क का विवरण, प्लांट, <strong>प्राथमिकता</strong>, असाइनी, ज़रूरी <strong>स्किल</strong> (ऑपरेटर, सुपरवाइज़र) और <strong>स्थिति</strong> दिखाती है — यहाँ <em>सेंसर की बेसिक सफ़ाई</em> और <em>सभी सेंसर का डेटा जाँचें</em>, <strong>पेंडिंग</strong>। प्लांट, यूज़र, स्किल या स्थिति से फ़िल्टर करें, विवरण के लिए टास्क खोलें, या <strong>ऐड टास्क</strong>।",
          voice: "टास्क लिस्ट दिखाती है कि किसे क्या करना है, प्राथमिकता, स्किल और स्थिति के साथ। कोई भी टास्क खोलें, या नया जोड़ें।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "रोज़ की तस्वीर के लिए <strong>डैशबोर्ड</strong>। ध्यान देने वाली बातों के लिए <strong>इनसाइट लिस्ट</strong> और <strong>टिकट</strong>। लाइव प्रोसेस के लिए <strong>स्काडाव्यू</strong>। यूनिट-वार ट्रेंड के लिए <strong>होंडा मानेसर एनालिटिक्स</strong>। ज़मीनी काम के लिए <strong>टास्क लिस्ट</strong>।",
          voice: "रोज़ की तस्वीर के लिए डैशबोर्ड, ज़रूरी बातों के लिए इनसाइट्स और टिकट, लाइव के लिए स्काडाव्यू, ट्रेंड के लिए एनालिटिक्स, और काम के लिए टास्क।",
        },
      ],
    },
    ta: {
      title: 'ஹோண்டா மானேசர்,<br><em>முழு ஆலையும் ஒரே இடத்தில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் ஒரு விரைவுச் சுற்று — டாஷ்போர்டு, இன்சைட்ஸ், டிக்கெட்டுகள், ஸ்காடாவியூ, அனலிட்டிக்ஸ், டாஸ்க்குகள் — அவற்றுக்கிடையே எப்படிச் செல்வது.',
      chapter: 'டெமோ · ஹோண்டா மானேசர்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'எல்லாமே ஒரு மெனு தூரத்தில்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது: <strong>டாஷ்போர்டு</strong>, <strong>லாக்புக் டேட்டா இன்புட்</strong>, <strong>இன்வென்டரி</strong>, <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்டுகள்</strong>, <strong>டேட்டா இன்புட்</strong>, <strong>ஸ்காடாவியூ – ஹோண்டா மானேசர்</strong>. <strong>ஹோண்டா மானேசர்</strong> உள்ளே <strong>மெயின்டனன்ஸ்</strong>, <strong>ஹோண்டா மானேசர் அனலிட்டிக்ஸ்</strong>; <strong>டாஸ்க்</strong> உள்ளே <strong>ரோஸ்டர் பிளானிங்</strong>, <strong>டாஸ்க் லிஸ்ட்</strong>.",
          voice: "மெனு ஐகான் ஒவ்வொரு பக்கத்தையும் திறக்கிறது — டாஷ்போர்டு, இன்சைட்ஸ், டிக்கெட்டுகள், ஸ்காடாவியூ, ஹோண்டா மானேசர் கீழ் அனலிட்டிக்ஸ், மற்றும் டாஸ்க்குகள்.",
        },
        {
          label: 'கட்டுப்பாடுகள்', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "டாஷ்போர்டு <strong>யூனிஃபைட் டாஷ்போர்டு</strong> பக்கத்தில் திறக்கிறது. <strong>கிரானுலாரிட்டி</strong> (இங்கே <strong>மணிநேரம்</strong>), <strong>கடைசி 24 மணிநேரம்</strong>, <strong>இருந்து</strong> / <strong>வரை</strong> தேதிகள் கீழே உள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. மேல் வலது: <strong>ரிஃப்ரெஷ்</strong>, <strong>டவுன்லோட்</strong>, <strong>செட்டிங்ஸ்</strong>, <strong>பக்கத் திருத்தம்</strong>, <strong>பகிர்</strong>.",
          voice: "பக்கத் தேர்வு, கிரானுலாரிட்டி, தேதி வரம்பு ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. ரிஃப்ரெஷ், டவுன்லோட், திருத்தம், பகிர்வு மேல் வலதில் உள்ளன.",
        },
        {
          label: 'ஹைட்ராலிக்ஸ்', title: 'ஒரு பார்வையில் ஆலை ஹைட்ராலிக்ஸ்',
          body: "<strong>பிளான்ட் ஹைட்ராலிக்ஸ்</strong> ஆறு கார்டுகளுடன் தொடங்குகிறது: <strong>பிளான்ட் எஃபிஷியன்சி</strong>, <strong>இன்லெட் ஃப்ளோ</strong> <strong>178.53 KL</strong>, <strong>MBR-1 பெர்மியேட் ஃப்ளோ</strong> <strong>169.95</strong>, <strong>MBR-2 பெர்மியேட் ஃப்ளோ</strong> <strong>115.9</strong>, <strong>மொத்த அவுட்லெட் நீர்</strong>, <strong>ஏர் வாஷர் டேங்க் நிலை</strong>. ஒவ்வொரு கார்டின் அடியிலும் காலம் மற்றும் முந்தைய காலத்துடனான மாற்றம்.",
          voice: "ஆறு கார்டுகள் பக்கத்தைத் தொடங்குகின்றன — இன்லெட் ஃப்ளோ, இரண்டு எம் பி ஆர் பெர்மியேட் ஃப்ளோ, அவுட்லெட் நீர், ஆலைத் திறன், ஒவ்வொன்றும் முந்தைய காலத்துடனான மாற்றத்துடன்.",
        },
        {
          label: 'நீர் ஓட்டம்', title: 'இன்று, நேற்று, வாரம், மாதம்',
          body: "<strong>வாட்டர் ஃப்ளோ (KL)</strong> அட்டவணை <strong>இன்லெட் நீர்</strong>, <strong>MBR-1</strong>, <strong>MBR-2 பெர்மியேட் ஃப்ளோ</strong>, <strong>அவுட்லெட் நீர்</strong> ஆகியவற்றை <strong>கடைசி 24 மணிநேரம்</strong>, <strong>நேற்று</strong>, <strong>கடைசி 7 நாட்கள்</strong>, <strong>கடைசி 30 நாட்கள்</strong> என ஒப்பிடுகிறது — மாதத்தில் இன்லெட் <strong>11,421.89 KL</strong>.",
          voice: "ஒரே அட்டவணை இன்லெட், பெர்மியேட், அவுட்லெட் நீரை கடைசி நாள், நேற்று, வாரம், மாதம் என ஒப்பிடுகிறது.",
        },
        {
          label: 'தரம்', title: 'குறிப்புடன் தரம்',
          body: "<strong>குவாலிட்டி பாராமீட்டர்ஸ்</strong> கேஜ்கள் தங்கள் குறிப்பைக் கொண்டுள்ளன: <strong>MBR பெர்மியேட் டர்பிடிட்டி</strong> (குறிப்பு &lt;5 NTU) <strong>0</strong>, <strong>MBR-1 ஃப்ளக்ஸ்</strong> <strong>11.08</strong>, <strong>MBR-2 ஃப்ளக்ஸ்</strong> <strong>7.56</strong> (20–30 LMH), இரு MBR-களின் <strong>டிரான்ஸ்-மெம்ப்ரேன் அழுத்தம்</strong> <strong>-0.15</strong>, <strong>-0.19</strong>.",
          voice: "ஒவ்வொரு கேஜும் தன் குறிப்பைக் கொண்டுள்ளது — பெர்மியேட் டர்பிடிட்டி, இரு எம் பி ஆர் ஃப்ளக்ஸ், டிரான்ஸ்-மெம்ப்ரேன் அழுத்தம்.",
        },
        {
          label: 'உயிரியல்', title: 'கசடு எப்படி படிகிறது',
          body: "<strong>பயோ ஹெல்த் டிராக்</strong> ஒரு மாதிரியிலிருந்து <strong>ஸ்லட்ஜ் செட்லிங் பேட்டர்ன்</strong> காட்டுகிறது — இங்கே <strong>13 நவம்பர்</strong> — <strong>30</strong>, <strong>60</strong>, <strong>90 நிமிட</strong> குறிகளுடன். லைன், பார் இடையே மாற்றலாம், அம்புகளால் மாதிரிகளை மாற்றலாம், அல்லது <strong>எக்ஸ்பாண்டட் வியூ</strong> திறக்கலாம்.",
          voice: "பயோ ஹெல்த் டிராக் கசடு காலப்போக்கில் எப்படி படிகிறது என்பதை முப்பது, அறுபது, தொண்ணூறு நிமிடக் குறிகளுடன் காட்டுகிறது.",
        },
        {
          label: 'ஆற்றல்', title: 'ஆற்றல், எது இயங்கியது',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> <strong>344.3 kWh/நாள்</strong>, ஒரு KL-க்கு <strong>1.93</strong>. கீழே <strong>எக்விப்மென்ட் ரன்னிங் அண்ட் டிரிப் ஸ்டேட்டஸ்</strong> ஒவ்வொரு பம்ப், ப்ளோயர், மிக்ஸர், ஸ்கிரீனின் இயக்க நேரத்தையும் <strong>டிரிப் ஸ்டேட்டஸ்</strong> அட்டவணையையும் (1 = டிரிப்) காட்டுகிறது.",
          voice: "ஆற்றல் நாளுக்கு முன்னூற்று நாற்பத்து நான்கு கிலோவாட் மணிநேரம். கீழே ஒவ்வொரு இயந்திரத்தின் இயக்க நேரமும் டிரிப் நிலையும்.",
        },
        {
          label: 'டிக்கெட் & வரைபடம்', title: 'வரைபடமும் திறந்த அலர்ட்களும்',
          body: "<strong>டிக்கெட்ஸ் அண்ட் பிளான்ட் ஸ்கோர்</strong> <strong>மேப் வியூ</strong> (<strong>பிளான்ட் ஸ்கோர்</strong> ஆக மாற்றலாம்) உடன் <strong>டிக்கெட்ஸ் அண்ட் அலர்ட்ஸ்</strong> பட்டியலை இணைக்கிறது — ஒவ்வொரு வரிசையிலும் விளக்கம், ஆலை, நேரம், வகை, உதா. <em>MBR நீர் டேங்க் நிலை 95% எட்டியது</em>.",
          voice: "வரைபடத்துடன் டிக்கெட்டுகள், அலர்ட்களின் நேரடிப் பட்டியல், ஒவ்வொன்றும் அதன் ஆலை, நேரம், வகையுடன்.",
        },
        {
          label: 'இன்வென்டரி', title: 'இருப்பும் நுகர்வும்',
          body: "<strong>இன்வென்டரி</strong> ஒவ்வொரு பொருளின் <strong>ஸ்டோர்</strong>, <strong>வகை</strong>, <strong>கிடைக்கும் இருப்பு</strong>, <strong>கடைசி நுகர்வு</strong>, <strong>உண்மை</strong> மற்றும் <strong>எதிர்பார்த்த நுகர்வு</strong> ஆகியவற்றைத் தேடல், வடிகட்டிகளுடன் காட்டுகிறது. இந்தக் கணக்கில் இன்னும் பொருட்கள் அமைக்கப்படவில்லை.",
          voice: "இன்வென்டரி இருப்பையும் உண்மை, எதிர்பார்த்த நுகர்வையும் கண்காணிக்கிறது. இங்கே இன்னும் பொருட்கள் இல்லை.",
        },
        {
          label: 'இன்சைட்ஸ்', title: 'ஒவ்வொரு இன்சைட்டும், உங்கள் வடிகட்டியில்',
          body: "<strong>இன்சைட்ஸ்</strong> <strong>34,478 அனைத்து இன்சைட்ஸ்</strong>, <strong>19 திறந்த அலாரங்கள்</strong>, <strong>34,459 மூடிய அலாரங்கள்</strong>, <strong>அச்சீவ்மென்ட்ஸ்</strong> எண்ணுகிறது. <strong>வகை</strong>, <strong>முன்னுரிமை</strong> (குறைவு, நடுத்தரம், அதிகம்), <strong>காலம்</strong> (இன்று முதல் கடைசி 6 மாதம், அல்லது தனிப்பயன்), வொர்க்ஸ்பேஸ், அசெட் மூலம் வடிகட்டலாம் — அல்லது <strong>கிரியேட் இன்சைட்</strong>.",
          voice: "இன்சைட்ஸ் ஒவ்வொரு அலாரத்தையும், திறந்தவை மூடியவை என எண்ணுகிறது. வகை, முன்னுரிமை, காலம் மூலம் வடிகட்டலாம், அல்லது புதியது உருவாக்கலாம்.",
        },
        {
          label: 'இன்சைட்', title: 'இது எத்தனை முறை திரும்புகிறது',
          body: "ஒரு இன்சைட்டைத் திறந்தால் முழுப் பெயர், வகை, முன்னுரிமை, அதன் நடத்தையும் தெரியும்: இந்த MBR டேங்க் நிலை அலாரம் சராசரியாக <strong>6.66 நாட்களுக்கு</strong> ஒருமுறை திரும்புகிறது, <strong>84 முறை</strong> திறந்துள்ளது. கீழே <strong>விவரங்கள்</strong>, <strong>கருத்துகள்</strong>; <strong>மார்க் இன்சைட் க்ளோஸ்டு</strong> அதை முடிக்கிறது.",
          voice: "ஒன்றைத் திறந்தால் அது எப்படித் திரும்புகிறது என்று தெரியும் — ஆறு புள்ளி ஆறு நாட்களுக்கு ஒருமுறை, இதுவரை எண்பத்து நான்கு முறை.",
        },
        {
          label: 'டிக்கெட்டுகள்', title: 'எண்ணி வரிசைப்படுத்திய டிக்கெட்டுகள்',
          body: "<strong>டிக்கெட்டுகள்</strong> <strong>10 திறந்தவை</strong> (10 காலம் கடந்தவை, 8 உயர்த்தப்பட்டவை), <strong>23 மூடியவை</strong> — அட்மின், எலக்ட்ரிகல், லேப், புராசஸ், Dp சிஸ்டம், மெக்கானிகல் என வகைப்படி. ஒவ்வொன்றிலும் <strong>automatic</strong>, <strong>overdue</strong>, <strong>Escalation Level 1</strong> போன்ற குறிச்சொற்கள், நேரம், வகை, ஆலை.",
          voice: "டிக்கெட்டுகள் திறந்தவை மூடியவை என எண்ணப்பட்டு, வகைப்படி பிரிக்கப்பட்டு, காலம் கடந்தால் அல்லது உயர்த்தப்பட்டால் குறிக்கப்படுகின்றன.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒரு டிக்கெட்டின் முழுக் கதை',
          body: "டிக்கெட்டில் உருவான நேரம், ஆலை, <strong>பிரச்சனை</strong>, செய்ய வேண்டியதின் <strong>விளக்கம்</strong> — இங்கே <em>ஸ்லட்ஜ் ரீசர்குலேஷன் பம்பை இயக்கவும்</em>. <strong>ஹிஸ்டரி</strong> ஒவ்வொரு நிகழ்வையும் கருத்துகளுடன் வைத்திருக்கிறது; <strong>ரிசால்வ்</strong> அதை மூடுகிறது.",
          voice: "ஒவ்வொரு டிக்கெட்டும் பிரச்சனை, செய்ய வேண்டியது, கருத்து சேர்க்கக்கூடிய முழு வரலாறு வைத்திருக்கிறது — பின் தீர்க்கவும்.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'ஆலை, நேரலையில்',
          body: "<strong>ஸ்காடாவியூ</strong> ஹோண்டா மானேசரை <strong>லைவ்</strong> செயல்முறை வரைபடமாகக் காட்டுகிறது — ஸ்கிரீன்கள், ஈக்வலைசேஷன், ஏரேஷன் டேங்க்குகள், MBR-கள், டோசிங், சுத்திகரிக்கப்பட்ட நீர் டேங்க். நேரத்தைத் தேர்ந்து <strong>ப்ளே</strong> செய்து மீண்டும் பார்க்கலாம், <strong>குரூப் கண்ட்ரோல்</strong> அல்லது <strong>யூனிட் புராசஸஸ்</strong> திறக்கலாம், கீழ் வலது கட்டுப்பாடுகளால் பெரிதாக்கலாம்.",
          voice: "ஸ்காடாவியூ ஆலையை நேரலையில் காட்டுகிறது. எந்தத் தருணத்தையும் மீண்டும் பார்க்கலாம், குரூப் கண்ட்ரோல் திறக்கலாம், எங்கும் பெரிதாக்கலாம்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'உங்கள் அனலிட்டிக்ஸ் பக்கம்',
          body: "<strong>ஹோண்டா மானேசர் அனலிட்டிக்ஸ்</strong> <strong>பிளான்ட் சம்மரி</strong>யில் திறக்கிறது: <strong>இன்லெட் ஃப்ளோ</strong>, <strong>MBR பெர்மியேட் டேங்க் டர்பிடிட்டி</strong>, <strong>ஹைட்ராலிக் எஃபிஷியன்சி</strong>, MBR-1, MBR-2 பெர்மியேட் ஃப்ளோ, கிளாரிஃபையர் அவுட்லெட் pH கார்டுகள். ஒவ்வொரு சார்ட்டின் மெனுவும் அதை <strong>டேபிள்</strong> அல்லது <strong>பார் கிராஃப்</strong> ஆக மாற்றுகிறது; கருவிகளில் <strong>CSV டவுன்லோட்</strong>.",
          voice: "உங்கள் அனலிட்டிக்ஸ் பக்கம் ஆலைச் சுருக்கத்தில் திறக்கிறது. எந்த சார்ட்டும் அட்டவணை அல்லது பார் கிராஃப் ஆகலாம், அல்லது சி எஸ் வி ஆக டவுன்லோட் ஆகலாம்.",
        },
        {
          label: 'பெரிதாக்கு', title: 'சார்ட்டைத் திறந்து எந்தப் புள்ளியையும் படியுங்கள்',
          body: "<strong>எக்ஸ்பாண்டட் வியூ</strong> திரையை நிரப்புகிறது. ஒரு புள்ளியின் மேல் வைத்தால் காலம், மதிப்பு, <strong>அக்ரிகேஷன் வகை</strong> தெரியும் — இங்கே இன்லெட் ஃப்ளோ <strong>87.29</strong>, கியூமுலேட்டிவ். லெஜெண்டில் கிளிக் செய்து தொடரை மறைக்கலாம், இழுத்துப் பெரிதாக்கலாம், <strong>ரீசெட் ஜூம்</strong> திரும்பக் கொண்டுவருகிறது.",
          voice: "பெரிதாக்கினால் ஒவ்வொரு புள்ளியும் மதிப்பையும் அக்ரிகேஷனையும் காட்டுகிறது. தொடர்களை மாற்றலாம், இழுத்துப் பெரிதாக்கலாம், ரீசெட் செய்யலாம்.",
        },
        {
          label: 'யூனிட்டுகள்', title: 'யூனிட் வாரியாக',
          body: "சுருக்கத்துக்குக் கீழே பக்கம் ஆலையின் வரிசையில் செல்கிறது: <strong>பிரைமரி யூனிட்</strong> (ஈக்வலைசேஷன், இன்லெட் ஃப்ளோ, இயக்க நேரம், எனர்ஜி மீட்டர்), <strong>செகண்டரி யூனிட்</strong> (MBR நிலைகள், பேக்பல்ஸ் ஃப்ளோ, MBR அழுத்தம், மோட்டார் வால்வுகள், SV-30), <strong>டெர்ஷியரி யூனிட்</strong> (டோசிங் டேங்க் நிலைகள், UV வால்வுகள்), <strong>ஸ்லட்ஜ்</strong>, <strong>எக்விப்மென்ட் ஸ்டேட்டஸ்</strong>, <strong>டிரிப் ஸ்டேட்டஸ்</strong>.",
          voice: "பின் பக்கம் ஆலையின் வரிசையில் செல்கிறது — பிரைமரி, செகண்டரி, டெர்ஷியரி யூனிட்டுகள், கசடு, உபகரண மற்றும் டிரிப் நிலை.",
        },
        {
          label: 'வரம்பு', title: 'எந்தக் காலமும், எந்தத் தெளிவும்',
          body: "வரம்புத் தேர்வியில் <strong>இன்று</strong> முதல் <strong>கடைசி 6 மாதம்</strong> அல்லது <strong>தனிப்பயன்</strong>, <strong>12</strong> அல்லது <strong>24 மணிநேர</strong> கடிகாரம், தினசரி நேரத்தை மீண்டும் பயன்படுத்த <strong>ஸ்மார்ட் ஹவர்ஸ்</strong>. கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது — <strong>கடைசி 3 மாதம்</strong> என்றால் <strong>வாரங்கள்</strong> அல்லது <strong>மாதங்கள்</strong>. <strong>சேவ் கரண்ட் வியூ</strong> அதைச் சேமிக்கிறது.",
          voice: "முன்னமைவு அல்லது உங்கள் தேதிகளைத் தேர்ந்தெடுங்கள். கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது, சேவ் கரண்ட் வியூ அதைச் சேமிக்கிறது.",
        },
        {
          label: 'டாஸ்க்குகள்', title: 'செய்ய வேண்டிய வேலை',
          body: "<strong>டாஸ்க் → டாஸ்க் லிஸ்ட்</strong> ஒவ்வொரு டாஸ்க்கின் விளக்கம், ஆலை, <strong>முன்னுரிமை</strong>, ஒதுக்கப்பட்டவர், தேவையான <strong>திறன்கள்</strong> (ஆபரேட்டர், சூப்பர்வைசர்), <strong>நிலை</strong> காட்டுகிறது — இங்கே <em>சென்சாரின் அடிப்படைச் சுத்தம்</em>, <em>அனைத்து சென்சார்களின் தரவைச் சரிபார்க்கவும்</em>, <strong>நிலுவையில்</strong>. ஆலை, பயனர், திறன், நிலை மூலம் வடிகட்டலாம், டாஸ்க்கைத் திறக்கலாம், அல்லது <strong>ஆட் டாஸ்க்</strong>.",
          voice: "டாஸ்க் லிஸ்ட் யார் என்ன செய்ய வேண்டும் என்பதை முன்னுரிமை, திறன், நிலையுடன் காட்டுகிறது. எந்த டாஸ்க்கையும் திறக்கலாம், அல்லது புதியது சேர்க்கலாம்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "தினசரிப் படத்துக்கு <strong>டாஷ்போர்டு</strong>. கவனம் தேவைப்படுவதற்கு <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்டுகள்</strong>. நேரடிச் செயல்முறைக்கு <strong>ஸ்காடாவியூ</strong>. யூனிட் வாரிப் போக்குகளுக்கு <strong>ஹோண்டா மானேசர் அனலிட்டிக்ஸ்</strong>. களப்பணிக்கு <strong>டாஸ்க் லிஸ்ட்</strong>.",
          voice: "தினசரிப் படத்துக்கு டாஷ்போர்டு, கவனிக்க வேண்டியதற்கு இன்சைட்ஸும் டிக்கெட்டுகளும், நேரலைக்கு ஸ்காடாவியூ, போக்குகளுக்கு அனலிட்டிக்ஸ், வேலைக்கு டாஸ்க்குகள்.",
        },
      ],
    },
    mr: {
      title: 'होंडा मानेसर,<br><em>संपूर्ण प्लांट एका ठिकाणी.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा एक छोटा दौरा — डॅशबोर्ड, इनसाइट्स, तिकिटे, स्काडाव्ह्यू, ॲनालिटिक्स आणि टास्क — आणि त्यांच्यात कसे जायचे.',
      chapter: 'डेमो · होंडा मानेसर',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'सर्व काही, एका मेन्यूवर',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो: <strong>डॅशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्व्हेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>तिकिटे</strong>, <strong>डेटा इनपुट</strong> आणि <strong>स्काडाव्ह्यू – होंडा मानेसर</strong>. <strong>होंडा मानेसर</strong> मध्ये <strong>मेंटेनन्स</strong> आणि <strong>होंडा मानेसर ॲनालिटिक्स</strong>, आणि <strong>टास्क</strong> मध्ये <strong>रोस्टर प्लॅनिंग</strong> व <strong>टास्क लिस्ट</strong>.",
          voice: "मेन्यू आयकॉन प्रत्येक पेज उघडतो — डॅशबोर्ड, इनसाइट्स, तिकिटे, स्काडाव्ह्यू, होंडा मानेसरखाली ॲनालिटिक्स पेज, आणि टास्क.",
        },
        {
          label: 'नियंत्रणे', title: 'पेज चालवणारी नियंत्रणे',
          body: "डॅशबोर्ड <strong>युनिफाइड डॅशबोर्ड</strong> पेजवर उघडतो. <strong>ग्रॅन्युलॅरिटी</strong> (इथे <strong>तास</strong>), <strong>मागील 24 तास</strong> आणि <strong>पासून</strong> / <strong>पर्यंत</strong> तारखा खालील प्रत्येक विजेट चालवतात. वर उजवीकडे: <strong>रिफ्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्ज</strong>, <strong>पेज एडिट</strong> आणि <strong>शेअर</strong>.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालावधी प्रत्येक विजेट चालवतात. रिफ्रेश, डाउनलोड, एडिट आणि शेअर वर उजवीकडे आहेत.",
        },
        {
          label: 'हायड्रॉलिक्स', title: 'एका नजरेत प्लांट हायड्रॉलिक्स',
          body: "<strong>प्लांट हायड्रॉलिक्स</strong> सहा कार्डांनी सुरू होते: <strong>प्लांट एफिशियन्सी</strong>, <strong>इनलेट फ्लो</strong> <strong>178.53 KL</strong>, <strong>MBR-1 परमिएट फ्लो</strong> <strong>169.95</strong>, <strong>MBR-2 परमिएट फ्लो</strong> <strong>115.9</strong>, <strong>एकूण आउटलेट पाणी</strong> आणि <strong>एअर वॉशर टँक लेव्हल</strong>. प्रत्येक कार्डच्या खाली कालावधी आणि मागील कालावधीशी तुलना.",
          voice: "सहा कार्डे पेजची सुरुवात करतात — इनलेट फ्लो, दोन्ही एम बी आर परमिएट फ्लो, आउटलेट पाणी आणि प्लांट एफिशियन्सी, प्रत्येक मागील कालावधीशी तुलनेसह.",
        },
        {
          label: 'वॉटर फ्लो', title: 'आज, काल, आठवडा, महिना',
          body: "<strong>वॉटर फ्लो (KL)</strong> टेबल <strong>इनलेट पाणी</strong>, <strong>MBR-1</strong> आणि <strong>MBR-2 परमिएट फ्लो</strong> आणि <strong>आउटलेट पाणी</strong> <strong>मागील 24 तास</strong>, <strong>काल</strong>, <strong>मागील 7 दिवस</strong> आणि <strong>मागील 30 दिवस</strong> यांत दाखवते — महिन्यात इनलेट <strong>11,421.89 KL</strong>.",
          voice: "एक टेबल इनलेट, परमिएट आणि आउटलेट पाण्याची तुलना मागील दिवस, काल, आठवडा आणि महिन्यात करते.",
        },
        {
          label: 'गुणवत्ता', title: 'संदर्भासमोर गुणवत्ता',
          body: "<strong>क्वालिटी पॅरामीटर्स</strong> मधील प्रत्येक गेज आपला संदर्भ ठेवतो: <strong>MBR परमिएट टर्बिडिटी</strong> (संदर्भ &lt;5 NTU) <strong>0</strong>, <strong>MBR-1 फ्लक्स</strong> <strong>11.08</strong> आणि <strong>MBR-2 फ्लक्स</strong> <strong>7.56</strong> (20–30 LMH), आणि दोन्ही MBR चा <strong>ट्रान्स-मेम्ब्रेन प्रेशर</strong> <strong>-0.15</strong> व <strong>-0.19</strong>.",
          voice: "प्रत्येक गेज आपला संदर्भ ठेवतो — परमिएट टर्बिडिटी, दोन्ही एम बी आरचा फ्लक्स, आणि ट्रान्स-मेम्ब्रेन प्रेशर.",
        },
        {
          label: 'बायोलॉजी', title: 'गाळ कसा बसतो',
          body: "<strong>बायो हेल्थ ट्रॅक</strong> एका नमुन्यातून <strong>स्लज सेटलिंग पॅटर्न</strong> दाखवतो — इथे <strong>13 नोव्हेंबर</strong> — <strong>30</strong>, <strong>60</strong> आणि <strong>90 मिनिटांवर</strong> खुणांसह. लाइन व बार यांत बदला, बाणांनी नमुने बदला, किंवा <strong>एक्स्पँडेड व्ह्यू</strong> उघडा.",
          voice: "बायो हेल्थ ट्रॅक दाखवतो की गाळ वेळेनुसार कसा बसतो, तीस, साठ आणि नव्वद मिनिटांच्या खुणांसह.",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, आणि काय चालले',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> <strong>344.3 kWh/दिवस</strong> आणि प्रति KL <strong>1.93</strong>. खाली <strong>इक्विपमेंट रनिंग अँड ट्रिप स्टेटस</strong> प्रत्येक पंप, ब्लोअर, मिक्सर आणि स्क्रीनचे चालू तास आणि <strong>ट्रिप स्टेटस</strong> टेबल (1 = ट्रिप) देते.",
          voice: "ऊर्जा दिवसाला तीनशे चव्वेचाळीस किलोवॅट तास आहे. खाली प्रत्येक मशीनचे चालू तास त्याच्या ट्रिप स्टेटससह आहेत.",
        },
        {
          label: 'तिकिटे व नकाशा', title: 'नकाशा आणि उघडे अलर्ट',
          body: "<strong>टिकेट्स अँड प्लांट स्कोअर</strong> मध्ये <strong>मॅप व्ह्यू</strong> (<strong>प्लांट स्कोअर</strong> वर बदलता येतो) सोबत <strong>टिकेट्स अँड अलर्ट्स</strong> आहेत — प्रत्येक ओळीत वर्णन, प्लांट, वेळ आणि प्रकार, जसे <em>MBR वॉटर टँक लेव्हल 95% पोहोचली</em>.",
          voice: "नकाशासोबत तिकिटे आणि अलर्टची थेट यादी आहे, प्रत्येकाचा प्लांट, वेळ आणि प्रकार.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'साठा आणि वापर',
          body: "<strong>इन्व्हेंटरी</strong> प्रत्येक वस्तूचे <strong>स्टोअर</strong>, <strong>श्रेणी</strong>, <strong>उपलब्ध साठा</strong>, <strong>शेवटचा वापर</strong>, आणि <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित वापर</strong> शोध व फिल्टरसह दाखवते. या खात्यात अजून कोणतीही वस्तू सेट नाही.",
          voice: "इन्व्हेंटरी साठा आणि प्रत्यक्ष विरुद्ध अपेक्षित वापर ट्रॅक करते. इथे अजून वस्तू सेट नाहीत.",
        },
        {
          label: 'इनसाइट्स', title: 'प्रत्येक इनसाइट, तुमच्या फिल्टरने',
          body: "<strong>इनसाइट्स</strong> <strong>34,478 सर्व इनसाइट्स</strong>, <strong>19 उघडे अलार्म</strong>, <strong>34,459 बंद अलार्म</strong> आणि <strong>अचिव्हमेंट्स</strong> मोजते. <strong>प्रकार</strong>, <strong>प्राधान्य</strong> (कमी, मध्यम, जास्त), <strong>कालावधी</strong> (आज ते मागील 6 महिने, किंवा कस्टम), वर्कस्पेस किंवा ॲसेटने फिल्टर करा — किंवा <strong>क्रिएट इनसाइट</strong>.",
          voice: "इनसाइट्स प्रत्येक अलार्म मोजते, उघडे आणि बंद. प्रकार, प्राधान्य किंवा वेळेने फिल्टर करा, किंवा स्वतःचे तयार करा.",
        },
        {
          label: 'इनसाइट', title: 'हे किती वेळा परत येते',
          body: "इनसाइट उघडल्यावर पूर्ण नाव, प्रकार, प्राधान्य आणि त्याचे वर्तन दिसते: हा MBR टँक-लेव्हल अलार्म सरासरी दर <strong>6.66 दिवसांनी</strong> परत येतो आणि <strong>84 वेळा</strong> उघडला आहे. खाली <strong>तपशील</strong> आणि <strong>टिप्पण्या</strong>, आणि <strong>मार्क इनसाइट क्लोज्ड</strong> ते बंद करते.",
          voice: "एक उघडल्यावर दिसते ते कसे परत येते — दर सहा पूर्णांक सहा दिवसांनी, आतापर्यंत चौऱ्याऐंशी वेळा — तपशील आणि टिप्पण्यांसह.",
        },
        {
          label: 'तिकिटे', title: 'तिकिटे, मोजलेली आणि वर्गीकृत',
          body: "<strong>तिकिटे</strong> मध्ये <strong>10 उघडी</strong> (10 मुदत संपलेली, 8 एस्केलेटेड) आणि <strong>23 बंद</strong>, श्रेणीनुसार — ॲडमिन, इलेक्ट्रिकल, लॅब, प्रोसेस, Dp सिस्टम, मेकॅनिकल. प्रत्येक तिकिटावर <strong>automatic</strong>, <strong>overdue</strong> किंवा <strong>Escalation Level 1</strong> असे टॅग, वेळ, श्रेणी आणि प्लांट.",
          voice: "तिकिटे उघडी आणि बंद मोजली जातात, श्रेणीत विभागली जातात, आणि मुदत संपल्यावर किंवा एस्केलेट झाल्यावर टॅग होतात.",
        },
        {
          label: 'तिकीट', title: 'एका तिकिटाची संपूर्ण कथा',
          body: "तिकिटात तयार झाल्याची वेळ, प्लांट, <strong>समस्या</strong> आणि काय करायचे याचे <strong>वर्णन</strong> असते — इथे <em>स्लज रीसर्क्युलेशन पंप चालू करा</em>. <strong>हिस्ट्री</strong> प्रत्येक घटना टिप्पण्यांसह ठेवते, आणि <strong>रिझॉल्व्ह</strong> ते बंद करते.",
          voice: "प्रत्येक तिकिटात समस्या, काय करायचे, आणि टिप्पणी करता येणारा पूर्ण इतिहास असतो — मग रिझॉल्व्ह करा.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'प्लांट, थेट',
          body: "<strong>स्काडाव्ह्यू</strong> होंडा मानेसरला <strong>लाइव्ह</strong> प्रोसेस आकृतीत दाखवतो — स्क्रीन, इक्वलायझेशन, एरेशन टँक, MBR, डोसिंग आणि ट्रीटेड वॉटर टँक. वेळ निवडून <strong>प्ले</strong> ने पुन्हा पाहा, <strong>ग्रुप कंट्रोल</strong> किंवा <strong>युनिट प्रोसेसेस</strong> उघडा, आणि खाली उजवीकडील नियंत्रणांनी झूम करा.",
          voice: "स्काडाव्ह्यू प्लांट थेट दाखवतो. कोणताही क्षण पुन्हा पाहा, ग्रुप कंट्रोल किंवा युनिट प्रोसेसेस उघडा, आणि कुठेही झूम करा.",
        },
        {
          label: 'ॲनालिटिक्स', title: 'तुमचे ॲनालिटिक्स पेज',
          body: "<strong>होंडा मानेसर ॲनालिटिक्स</strong> <strong>प्लांट समरी</strong> वर उघडते: <strong>इनलेट फ्लो</strong>, <strong>MBR परमिएट टँकवरील टर्बिडिटी</strong>, <strong>हायड्रॉलिक एफिशियन्सी</strong>, आणि MBR-1, MBR-2 परमिएट फ्लो व क्लॅरिफायर आउटलेट pH ची कार्डे. प्रत्येक चार्टचा मेन्यू त्याला <strong>टेबल</strong> किंवा <strong>बार ग्राफ</strong> मध्ये बदलतो, आणि टूल्समध्ये <strong>CSV डाउनलोड</strong>.",
          voice: "तुमचे ॲनालिटिक्स पेज प्लांट समरीवर उघडते. कोणताही चार्ट टेबल किंवा बार ग्राफ होऊ शकतो, किंवा सी एस व्ही म्हणून डाउनलोड होऊ शकतो.",
        },
        {
          label: 'झूम', title: 'चार्ट उघडा, कोणताही बिंदू वाचा',
          body: "<strong>एक्स्पँडेड व्ह्यू</strong> स्क्रीन भरतो. बिंदूवर होव्हर केल्यावर कालावधी, मूल्य आणि <strong>ॲग्रिगेशन प्रकार</strong> दिसतो — इथे इनलेट फ्लो <strong>87.29</strong>, क्युम्युलेटिव्ह. लेजेंडवर क्लिक करून मालिका लपवा, ड्रॅग करून झूम करा, आणि <strong>रीसेट झूम</strong> ने परत या.",
          voice: "मोठे केल्यावर प्रत्येक बिंदू आपले मूल्य आणि ॲग्रिगेशन दाखवतो. मालिका बदला, ड्रॅग करून झूम करा, आणि रीसेट करा.",
        },
        {
          label: 'युनिट', title: 'युनिटनुसार',
          body: "समरीखाली पेज प्लांटच्या क्रमाने चालते: <strong>प्रायमरी युनिट</strong> (इक्वलायझेशन, इनलेट फ्लो, चालू तास, एनर्जी मीटर), <strong>सेकंडरी युनिट</strong> (MBR लेव्हल, बॅकपल्स फ्लो, MBR प्रेशर, मोटराइज्ड व्हॉल्व्ह, SV-30), <strong>टर्शरी युनिट</strong> (डोसिंग टँक लेव्हल, UV व्हॉल्व्ह), <strong>स्लज</strong>, आणि <strong>इक्विपमेंट स्टेटस</strong> व <strong>ट्रिप स्टेटस</strong>.",
          voice: "मग पेज प्लांटच्या क्रमाने चालते — प्रायमरी, सेकंडरी आणि टर्शरी युनिट, गाळ, आणि उपकरण व ट्रिप स्टेटस.",
        },
        {
          label: 'कालावधी', title: 'कोणताही कालावधी, कोणतेही रिझोल्यूशन',
          body: "रेंज पिकरमध्ये <strong>आज</strong> ते <strong>मागील 6 महिने</strong> किंवा <strong>कस्टम</strong>, <strong>12</strong> किंवा <strong>24 तासांचे</strong> घड्याळ, आणि रोजचा वेळ-खंड पुन्हा वापरण्यासाठी <strong>स्मार्ट अवर्स</strong>. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते — <strong>मागील 3 महिने</strong> साठी <strong>आठवडे</strong> किंवा <strong>महिने</strong>. <strong>सेव्ह करंट व्ह्यू</strong> ते जतन करते.",
          voice: "प्रीसेट किंवा तुमच्या तारखा निवडा. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते, आणि सेव्ह करंट व्ह्यू ते जतन करते.",
        },
        {
          label: 'टास्क', title: 'करायचे काम',
          body: "<strong>टास्क → टास्क लिस्ट</strong> प्रत्येक टास्कचे वर्णन, प्लांट, <strong>प्राधान्य</strong>, नेमलेली व्यक्ती, आवश्यक <strong>कौशल्ये</strong> (ऑपरेटर, सुपरवायझर) आणि <strong>स्थिती</strong> दाखवते — इथे <em>सेन्सरची मूलभूत स्वच्छता</em> आणि <em>सर्व सेन्सरचा डेटा तपासा</em>, <strong>प्रलंबित</strong>. प्लांट, यूजर, कौशल्य किंवा स्थितीने फिल्टर करा, तपशीलासाठी टास्क उघडा, किंवा <strong>ॲड टास्क</strong>.",
          voice: "टास्क लिस्ट दाखवते की कोणाला काय करायचे आहे, प्राधान्य, कौशल्ये आणि स्थितीसह. कोणताही टास्क उघडा, किंवा नवीन जोडा.",
        },
        {
          label: 'सारांश', title: 'कोणते पेज कोणत्या कामासाठी',
          body: "रोजच्या चित्रासाठी <strong>डॅशबोर्ड</strong>. लक्ष देण्याच्या गोष्टींसाठी <strong>इनसाइट लिस्ट</strong> आणि <strong>तिकिटे</strong>. थेट प्रोसेससाठी <strong>स्काडाव्ह्यू</strong>. युनिटनिहाय ट्रेंडसाठी <strong>होंडा मानेसर ॲनालिटिक्स</strong>. प्रत्यक्ष कामासाठी <strong>टास्क लिस्ट</strong>.",
          voice: "रोजच्या चित्रासाठी डॅशबोर्ड, महत्त्वाच्या गोष्टींसाठी इनसाइट्स आणि तिकिटे, थेट पाहण्यासाठी स्काडाव्ह्यू, ट्रेंडसाठी ॲनालिटिक्स, आणि कामासाठी टास्क.",
        },
      ],
    },
  },
};

export default lesson;
