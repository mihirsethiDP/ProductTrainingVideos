import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-amazon-lucknow-dashboard`;

/**
 * Demo — Amazon Lucknow, platform tour.  (hidden module-demos)
 *
 * Built from the 8:25 recording uploaded 2026-11-21 (Content Studio job
 * 810aceeb, demo_style=overview, no notes). New demo — the earlier
 * demo-mdea-amazon-dashboard (a different Amazon site) was purged on retention.
 *
 * The recording: Dashboard "Dashboard page" (Tickets history across all plants,
 * Map Widget, Water Quantity and Availability for eight Amazon sites, expanded
 * chart, chart menu / table view, Inlet & Outlet m3/hr, Aeration DO per site)
 * → Inventory (store tabs, Amazon Lucknow Store items) → Chemical Logs →
 * Tickets (one opened, history) → ScadaView workspace → Amazon Lucknow live
 * diagram → Amazon Lucknow → Maintenance (equipment, breakdown actions, See
 * history) → Amazon Lucknow Analytics, Detailed View (page menu, Tank Levels
 * expanded, volumes, quality, biology, safety, energy, equipment) → range
 * picker (Last 7 Days, Last 30 Days, Days/Weeks, Custom Oct 1 – Nov 21).
 *
 * Style: `overview` — one step per page or feature area, short voices.
 * Real 1280px frames; the baked OS cursor is erased from every one (delogo on
 * flat ground, cross-frame patches where it sat on text). A faint remnant
 * remains in three places where the pointer sat on a chart line or a word.
 *
 * Judgement calls:
 *  - The menu lists eight sites (Amazon Lucknow, DED, DEL-5, DEL-2, DEL-4,
 *    ISK 3, AMD-2, MBOX); only Amazon Lucknow is opened, so the others are
 *    named on the dashboard and in the menu.
 *  - Quality parameters (pH, TDS) and two biology cards read "No Data
 *    Available" in this window; the copy says so.
 *  - Chemical Logs shows "No details available" for the window; said as such.
 */
const lesson: Lesson = {
  id: 'demo-amazon-lucknow-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 4,
  estimatedMinutes: 4,
  expiresAt: '2026-12-21', // 30 days after the job's upload (2026-11-21) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    water: `${BASE}/water.jpg`,
    expand: `${BASE}/expand.jpg`,
    tools: `${BASE}/tools.jpg`,
    dosites: `${BASE}/dosites.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    chemlog: `${BASE}/chemlog.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticket: `${BASE}/ticket.jpg`,
    scada: `${BASE}/scada.jpg`,
    maint: `${BASE}/maint.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    volumes: `${BASE}/volumes.jpg`,
    quality: `${BASE}/quality.jpg`,
    bio: `${BASE}/bio.jpg`,
    energy: `${BASE}/energy.jpg`,
    equip: `${BASE}/equip.jpg`,
    range: `${BASE}/range.jpg`,
  },
  layouts: [
    // S1 — side menu, Amazon Lucknow unfolded
    {
      mode: 'detail', screenshot: 'nav', caption: 'Every site, one menu',
      spotlight: { top: '9.5%', left: '0%', width: '15.2%', height: '90%' },
      cursor: [
        { at: 0, x: 16.7, y: 3.4, click: true },
        { at: 0.2, x: 4, y: 19.8 },
        { at: 0.35, x: 4, y: 35.3 },
        { at: 0.5, x: 6, y: 44, click: true },
        { at: 0.62, x: 5, y: 50.9 },
        { at: 0.75, x: 6, y: 59.5 },
        { at: 0.88, x: 5, y: 75 },
        { at: 0.97, x: 5, y: 89 },
      ],
    },
    // S2 — page controls
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '19.5%', left: '1.5%', width: '97%', height: '12.5%' },
      cursor: [
        { at: 0, x: 15, y: 25.6 },
        { at: 0.3, x: 49, y: 25.6 },
        { at: 0.5, x: 57, y: 25.6 },
        { at: 0.65, x: 71, y: 25.6 },
        { at: 0.8, x: 70.7, y: 13.6 },
        { at: 0.9, x: 75.7, y: 13.6 },
        { at: 0.97, x: 95.8, y: 13.6 },
      ],
    },
    // S3 — Tickets history + Map Widget
    {
      mode: 'detail', screenshot: 'header', caption: 'Alerts across all plants',
      spotlight: { top: '40.5%', left: '1.5%', width: '87.5%', height: '52.5%' },
      cursor: [
        { at: 0, x: 8, y: 53 },
        { at: 0.3, x: 23, y: 60 },
        { at: 0.45, x: 23, y: 70.5 },
        { at: 0.6, x: 8, y: 78 },
        { at: 0.8, x: 70, y: 63 },
        { at: 0.95, x: 82, y: 43.5 },
      ],
    },
    // S4 — Water Quantity and Availability, site by site
    {
      mode: 'detail', screenshot: 'water', caption: 'Water, site by site',
      spotlight: { top: '35%', left: '1.5%', width: '96.5%', height: '52%' },
      cursor: [
        { at: 0, x: 21, y: 42 },
        { at: 0.25, x: 20, y: 53 },
        { at: 0.45, x: 46, y: 51 },
        { at: 0.65, x: 70, y: 61.4 },
        { at: 0.85, x: 93, y: 60.7 },
        { at: 0.95, x: 20, y: 96 },
      ],
    },
    // S5 — expanded chart with tooltip
    {
      mode: 'detail', screenshot: 'expand', caption: 'Open a chart, read any point',
      spotlight: { top: '41.5%', left: '45%', width: '13.4%', height: '9.7%' },
      cursor: [
        { at: 0, x: 47, y: 24.7 },
        { at: 0.3, x: 30, y: 57 },
        { at: 0.6, x: 59, y: 46.5 },
        { at: 0.9, x: 88, y: 16.4, click: true },
      ],
    },
    // S6 — widget tools and chart menu
    {
      mode: 'detail', screenshot: 'tools', caption: 'Download it, or re-draw it',
      spotlight: { top: '38.9%', left: '20%', width: '6.8%', height: '12.3%' },
      cursor: [
        { at: 0, x: 41.6, y: 37.2 },
        { at: 0.15, x: 43.1, y: 37.2 },
        { at: 0.3, x: 44.6, y: 37.2 },
        { at: 0.45, x: 47.6, y: 37.2 },
        { at: 0.6, x: 23.7, y: 37.2, click: true },
        { at: 0.75, x: 22.2, y: 42.2 },
        { at: 0.9, x: 23.3, y: 47.3 },
      ],
    },
    // S7 — Inlet & Outlet m3/hr + water quality heading
    {
      mode: 'detail', screenshot: 'dosites', caption: 'Every flow, hour by hour',
      spotlight: { top: '28.7%', left: '1.5%', width: '43%', height: '52%' },
      cursor: [
        { at: 0, x: 8, y: 43.7 },
        { at: 0.25, x: 20, y: 43.7 },
        { at: 0.45, x: 41.5, y: 54 },
        { at: 0.65, x: 41.5, y: 64.3 },
        { at: 0.85, x: 10, y: 85.5 },
        { at: 0.95, x: 4, y: 93 },
      ],
    },
    // S8 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'One store per site',
      spotlight: { top: '18%', left: '1.5%', width: '97%', height: '6.5%' },
      cursor: [
        { at: 0, x: 4.7, y: 21 },
        { at: 0.15, x: 15.6, y: 21 },
        { at: 0.3, x: 31, y: 21 },
        { at: 0.45, x: 4.5, y: 60.5 },
        { at: 0.6, x: 22.5, y: 60.5 },
        { at: 0.75, x: 74.5, y: 59 },
        { at: 0.9, x: 89.8, y: 59 },
        { at: 0.97, x: 5.2, y: 61.5 },
      ],
    },
    // S9 — Chemical Logs
    {
      mode: 'detail', screenshot: 'chemlog', caption: 'Every chemical movement',
      spotlight: { top: '25.3%', left: '26.7%', width: '71.6%', height: '6.7%' },
      cursor: [
        { at: 0, x: 4, y: 11.3 },
        { at: 0.2, x: 12.6, y: 28.3 },
        { at: 0.35, x: 37, y: 28.5 },
        { at: 0.5, x: 62, y: 28.5 },
        { at: 0.65, x: 86.7, y: 28.5 },
        { at: 0.8, x: 12.6, y: 39 },
        { at: 0.9, x: 8, y: 60.6 },
        { at: 0.97, x: 62.5, y: 49.6 },
      ],
    },
    // S10 — Tickets
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Tickets, counted and sorted',
      spotlight: { top: '17.5%', left: '1.3%', width: '97.4%', height: '17%' },
      cursor: [
        { at: 0, x: 15, y: 25 },
        { at: 0.25, x: 43, y: 25 },
        { at: 0.45, x: 70, y: 25 },
        { at: 0.6, x: 93, y: 25 },
        { at: 0.75, x: 15, y: 41.8 },
        { at: 0.9, x: 88, y: 44.5 },
      ],
    },
    // S11 — one ticket opened
    {
      mode: 'detail', screenshot: 'ticket', caption: 'The full story of a ticket',
      spotlight: { top: '28%', left: '52.5%', width: '37.2%', height: '47%' },
      cursor: [
        { at: 0, x: 29.7, y: 24.8 },
        { at: 0.25, x: 15, y: 44 },
        { at: 0.4, x: 30, y: 57.3 },
        { at: 0.55, x: 15, y: 71 },
        { at: 0.7, x: 63.5, y: 52.2 },
        { at: 0.85, x: 66, y: 72.5 },
        { at: 0.95, x: 86.8, y: 82.3 },
      ],
    },
    // S12 — ScadaView, Amazon Lucknow
    {
      mode: 'detail', screenshot: 'scada', caption: 'The plant, live',
      spotlight: { top: '15%', left: '1.5%', width: '97%', height: '5.6%' },
      cursor: [
        { at: 0, x: 5, y: 12 },
        { at: 0.2, x: 13, y: 17.7 },
        { at: 0.35, x: 55, y: 17.7 },
        { at: 0.5, x: 71.4, y: 17.7 },
        { at: 0.62, x: 79.6, y: 17.7 },
        { at: 0.75, x: 22.6, y: 77 },
        { at: 0.85, x: 84.7, y: 69 },
        { at: 0.95, x: 92.6, y: 83.6 },
      ],
    },
    // S13 — Maintenance
    {
      mode: 'detail', screenshot: 'maint', caption: 'Every breakdown, on record',
      spotlight: { top: '46%', left: '1.5%', width: '70%', height: '12%' },
      cursor: [
        { at: 0, x: 8.5, y: 14.5 },
        { at: 0.2, x: 6, y: 32 },
        { at: 0.35, x: 15, y: 48.5 },
        { at: 0.5, x: 30, y: 48.5 },
        { at: 0.65, x: 55.5, y: 48.5 },
        { at: 0.85, x: 70, y: 48.5, click: true },
        { at: 0.95, x: 70, y: 55 },
      ],
    },
    // S14 — Amazon Lucknow Analytics, page menu
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Pages within your analytics',
      spotlight: { top: '30.7%', left: '2.3%', width: '16.7%', height: '34%' },
      cursor: [
        { at: 0, x: 13, y: 25.4, click: true },
        { at: 0.2, x: 8, y: 33 },
        { at: 0.35, x: 10, y: 38.4 },
        { at: 0.5, x: 8, y: 43.5 },
        { at: 0.62, x: 10, y: 48.6 },
        { at: 0.75, x: 10, y: 53.3 },
        { at: 0.87, x: 10, y: 58 },
        { at: 0.97, x: 6, y: 62.8 },
      ],
    },
    // S15 — Tank Levels expanded
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Five tanks on one chart',
      spotlight: { top: '23%', left: '18.5%', width: '56.8%', height: '3.5%' },
      cursor: [
        { at: 0, x: 22, y: 24.6 },
        { at: 0.2, x: 33, y: 24.6 },
        { at: 0.35, x: 46, y: 24.6 },
        { at: 0.5, x: 60, y: 24.6 },
        { at: 0.65, x: 85, y: 29.5 },
        { at: 0.8, x: 85, y: 36 },
        { at: 0.95, x: 88.4, y: 16.4, click: true },
      ],
    },
    // S16 — flows and Water Volume in Tanks
    {
      mode: 'detail', screenshot: 'volumes', caption: 'What each tank holds',
      spotlight: { top: '8.9%', left: '50.7%', width: '23.4%', height: '51.7%' },
      cursor: [
        { at: 0, x: 9, y: 11 },
        { at: 0.2, x: 30, y: 11 },
        { at: 0.4, x: 56, y: 24.2 },
        { at: 0.55, x: 56, y: 30.8 },
        { at: 0.7, x: 56, y: 43.9 },
        { at: 0.85, x: 78, y: 22.5 },
      ],
    },
    // S17 — Inlet and Outlet Water Quality
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, against the limit',
      spotlight: { top: '22.2%', left: '45.7%', width: '43%', height: '52%' },
      cursor: [
        { at: 0, x: 10, y: 24.4 },
        { at: 0.25, x: 41.4, y: 45.4 },
        { at: 0.45, x: 52, y: 37.7 },
        { at: 0.6, x: 84.5, y: 37.7 },
        { at: 0.75, x: 52, y: 64 },
        { at: 0.9, x: 10, y: 79 },
      ],
    },
    // S18 — Biological Process Health + Safety
    {
      mode: 'detail', screenshot: 'bio', caption: 'How the biology is doing',
      spotlight: { top: '31.5%', left: '1.5%', width: '96%', height: '52.5%' },
      cursor: [
        { at: 0, x: 12, y: 34.5 },
        { at: 0.2, x: 4, y: 49.5 },
        { at: 0.4, x: 48, y: 46.5 },
        { at: 0.55, x: 69.5, y: 64 },
        { at: 0.7, x: 82, y: 36 },
        { at: 0.82, x: 82, y: 70 },
        { at: 0.92, x: 93, y: 70 },
        { at: 0.97, x: 4, y: 88.6 },
      ],
    },
    // S19 — Energy
    {
      mode: 'detail', screenshot: 'energy', caption: 'Energy, and energy per KL',
      spotlight: { top: '37%', left: '1.5%', width: '55%', height: '52%' },
      cursor: [
        { at: 0, x: 10, y: 39.4 },
        { at: 0.35, x: 39, y: 51.2 },
        { at: 0.65, x: 51, y: 50 },
        { at: 0.9, x: 14, y: 94 },
      ],
    },
    // S20 — Equipment Performance and Maintenance
    {
      mode: 'detail', screenshot: 'equip', caption: 'Every machine, accounted for',
      spotlight: { top: '35.3%', left: '1.5%', width: '96.5%', height: '52%' },
      cursor: [
        { at: 0, x: 6, y: 43.3 },
        { at: 0.2, x: 22, y: 43.3 },
        { at: 0.35, x: 36, y: 37.5 },
        { at: 0.5, x: 62, y: 52.7 },
        { at: 0.7, x: 87, y: 49.4 },
        { at: 0.85, x: 4, y: 91.8 },
      ],
    },
    // S21 — range picker
    {
      mode: 'detail', screenshot: 'range', caption: 'Any window, any resolution',
      spotlight: { top: '13.1%', left: '37.6%', width: '40%', height: '11.6%' },
      cursor: [
        { at: 0, x: 40, y: 15.5 },
        { at: 0.2, x: 42.9, y: 22.2, click: true },
        { at: 0.35, x: 63.4, y: 22.2 },
        { at: 0.5, x: 31, y: 30.9 },
        { at: 0.62, x: 18.2, y: 41.5 },
        { at: 0.75, x: 18.6, y: 62 },
        { at: 0.85, x: 18.6, y: 68 },
        { at: 0.95, x: 77.6, y: 85.8, click: true },
      ],
    },
    // S22 — wrap
    {
      mode: 'detail', screenshot: 'header', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1, y: 3.4 },
        { at: 0.4, x: 15, y: 25.6 },
        { at: 0.8, x: 23, y: 60 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Amazon Lucknow,<br><em>every site, one platform.</em>',
      subtitle:
        'A quick tour — the multi-site dashboard, inventory, tickets, ScadaView, maintenance and your Amazon Lucknow analytics.',
      chapter: 'Demo · Amazon Lucknow',
      steps: [
        {
          label: 'Navigate', title: 'Every site, one menu',
          body: "The <strong>menu icon</strong> opens <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Tickets</strong> and <strong>ScadaView – Amazon Workspace</strong>, then one entry per site: <strong>Amazon Lucknow</strong>, <strong>DED</strong>, <strong>DEL-5</strong>, <strong>DEL-2</strong>, <strong>DEL-4</strong>, <strong>ISK 3</strong>, <strong>AMD-2</strong> and <strong>MBOX</strong>. Each site unfolds into <strong>Maintenance</strong> and its own <strong>Analytics</strong> page.",
          voice: "The menu opens the dashboard, inventory, tickets and ScadaView, then every Amazon site — each with its own maintenance and analytics page.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "The dashboard opens on <strong>Dashboard page</strong>. <strong>Granularity</strong> (<strong>Hours</strong>), <strong>Last 24 Hours</strong> and the <strong>From</strong> / <strong>To</strong> dates drive every widget. Top right: the <strong>AI assistant</strong>, <strong>refresh</strong>, <strong>download</strong>, <strong>settings</strong>, <strong>edit page</strong> and <strong>share</strong>.",
          voice: "The page selector, granularity and date range drive every widget. The icons top right refresh, download, edit and share the page.",
        },
        {
          label: 'Alerts', title: 'Alerts across all plants',
          body: "<strong>Tickets history</strong> counts across <strong>All Plants</strong>: <strong>2 Open Alerts (Critical)</strong>, <strong>47 Open Alerts</strong>, <strong>191 Closed Alerts</strong> and <strong>6 Closed Critical</strong>. Expand a row to read them — <em>Reactor Feed Pump has been out of auto mode</em>, <em>DO in aeration tank is equal to or below 1</em> — and <strong>Show More</strong> for the rest. <strong>Map Widget</strong> plots the sites by <strong>Turbidity</strong>.",
          voice: "Tickets history counts open and closed alerts across all plants. Expand any row to read them, beside a map of every site.",
        },
        {
          label: 'Water', title: 'Water, site by site',
          body: "<strong>Water Quantity and Availability</strong> gives each site its own card: <strong>Amazon Lucknow</strong> inlet water <strong>43.7 KL</strong>, <strong>AMD-2</strong>, <strong>DED</strong>, and <strong>DEL-5</strong> with outlet, irrigation, UF and inlet flowmeters — then <strong>MBOX</strong>, <strong>DEL-4</strong>, <strong>DEL-2</strong> and <strong>ISK 3</strong> below.",
          voice: "Each site gets its own water card — Amazon Lucknow took in forty-three point seven K L today — so you can compare sites side by side.",
        },
        {
          label: 'Zoom', title: 'Open a chart, read any point',
          body: "<strong>Expand</strong> a card and it fills the screen. Hover a point for its window, value and <strong>Aggregation Type</strong> — <strong>25.57 KL</strong> cumulative by 6:34 am. Drag to zoom, and <strong>Reset Zoom</strong> brings the full window back.",
          voice: "Expanded, every point shows its value and aggregation. Drag to zoom in, and reset zoom brings it back.",
        },
        {
          label: 'Tools', title: 'Download it, or re-draw it',
          body: "Hover a widget for its tools: <strong>Download CSV</strong>, <strong>expand</strong>, <strong>choose chart</strong>, <strong>edit</strong> and <strong>info</strong>. The <strong>menu</strong> switches it to a <strong>Table</strong> or <strong>Bar Graph</strong>. Any change offers <strong>Save Current View</strong> — <strong>Save</strong> or <strong>Save As</strong>.",
          voice: "Every widget can download its data as C S V, or switch to a table or bar graph — then save the view.",
        },
        {
          label: 'Flows', title: 'Every flow, hour by hour',
          body: "<strong>Inlet &amp; Outlet (m3/hr)</strong> plots Amazon Lucknow's <strong>inlet</strong>, <strong>sludge</strong>, <strong>garden</strong>, <strong>UF</strong> and <strong>flushing</strong> flows together. Below, <strong>Inlet and Outlet Water Quality</strong> shows <strong>Aeration DO</strong> for each site against its band.",
          voice: "Five flows on one chart, hour by hour. Below, aeration D O for each site, against its band.",
        },
        {
          label: 'Inventory', title: 'One store per site',
          body: "<strong>Inventory</strong> has a tab per store — <strong>All Store</strong>, <strong>Amazon Lucknow Store</strong>, DEL-5, DEL-4, AMD-2, MBOX, DED and more. Amazon Lucknow lists <strong>12 items</strong> — HCL, Poly, Urea, DAP, Caustic, Hypo, Chlorine Balance, Jaggery, pH and TDS kits — with stock, last consumption, and <strong>actual</strong> versus <strong>expected</strong> consumption. The red mark flags items that need attention.",
          voice: "Each site has its own store. Every chemical shows stock and actual against expected use, and a red mark flags what needs attention.",
        },
        {
          label: 'Chemical Logs', title: 'Every chemical movement',
          body: "Open an item for its <strong>Chemical Logs</strong>: <strong>Current Balance</strong>, <strong>Current Month Usage</strong> and <strong>Last Month Usage</strong>, a <strong>date range</strong>, and <strong>Remarks</strong> / <strong>Amount</strong> filters over the log. No entries were recorded in this window.",
          voice: "Each item keeps a chemical log — balance, this month's and last month's usage — filterable by date. This window has no entries yet.",
        },
        {
          label: 'Tickets', title: 'Tickets, counted and sorted',
          body: "<strong>Tickets</strong> shows <strong>47 Open</strong> (2 critical, 43 overdue, 43 escalated) and <strong>191 Closed</strong>, split by category. Every ticket names its plant — <em>EQT tank level is high</em> at Amazon MBOX, <em>Sludge Transfer Pump out of auto mode</em> at Amazon Lucknow — with tags up to <strong>Escalation Level 3</strong>.",
          voice: "Tickets from every site in one list — counted, split by category, and tagged as they're escalated.",
        },
        {
          label: 'Ticket', title: 'The full story of a ticket',
          body: "A ticket gives the plant, <strong>problem</strong>, <strong>description</strong> of what to do, <strong>equipment</strong> (here the <strong>Equalization Tank</strong>) and category. The <strong>History</strong> logs every event — raised, marked overdue, escalated — with comments, and <strong>Resolve</strong> closes it.",
          voice: "Each ticket holds the problem, what to do, the equipment, and a history of every escalation — then resolve it.",
        },
        {
          label: 'ScadaView', title: 'The plant, live',
          body: "<strong>ScadaView – Amazon Workspace</strong> shows every site as a tile; open <strong>Amazon Lucknow</strong> for its <strong>LIVE</strong> diagram — bar screen, oil &amp; grease trap, equalization, anoxic and MBBR tanks, tube settler, filters, UF and filter press. Pick a time and <strong>play</strong>, open <strong>Group Control</strong> or <strong>Unit Processes</strong>, and zoom.",
          voice: "ScadaView opens each site as a live diagram. Replay any moment, open group control or unit processes, and zoom in anywhere.",
        },
        {
          label: 'Maintenance', title: 'Every breakdown, on record',
          body: "<strong>Amazon Lucknow → Maintenance</strong> lists every machine — filter feed, sludge, UF feed, irrigation, flushing and dosing pumps, blowers. Open one for its make and model and every <strong>Breakdown</strong> action with when it was raised and completed; hover for the full text, and <strong>See history</strong> for the timeline.",
          voice: "Maintenance lists every machine and each breakdown — when it was raised, when it was fixed, and its history.",
        },
        {
          label: 'Analytics', title: 'Pages within your analytics',
          body: "<strong>Amazon Lucknow Analytics</strong> has several pages: <strong>Detailed View</strong>, <strong>Water Quantity and Availability</strong>, <strong>Quality Parameters</strong>, <strong>Inlet Water &amp; Energy Consumption</strong>, <strong>Equipment Running Status</strong> and <strong>Detailed View monthly</strong>.",
          voice: "Your analytics has several pages — a detailed view, water, quality, energy, equipment, and a monthly view.",
        },
        {
          label: 'Tanks', title: 'Five tanks on one chart',
          body: "<strong>Tank Levels (%)</strong> plots the <strong>Clear Water Tank</strong>, <strong>EQT</strong>, <strong>UF Product Tank</strong>, <strong>Treated Water Tank</strong> and <strong>Sludge Holding Tank</strong> together — UF product at <strong>96.08%</strong>, sludge holding at <strong>84.61%</strong>. Toggle any tank from the legend.",
          voice: "Five tank levels on one chart. Toggle any tank from the legend to read it on its own.",
        },
        {
          label: 'Volumes', title: 'What each tank holds',
          body: "<strong>Other Flow</strong> and <strong>Backwash Flow</strong> track irrigation, flushing, UF and MGF-ACF backwash. <strong>Water Volume in Tanks</strong> turns levels into volume against capacity — Equalization <strong>39.26</strong> of 100 KL, Treated Water <strong>18.67</strong> of 40 — beside the <strong>Inlet Flow Meter</strong> at <strong>43.77 KL</strong>.",
          voice: "Levels become volumes — each tank's contents against its size — beside the inlet flow meter.",
        },
        {
          label: 'Quality', title: 'Quality, against the limit',
          body: "<strong>Treated Water Turbidity</strong> reads <strong>4.05 NTU</strong>, plotted inside its green band. <strong>Quality Parameters</strong> — Equalization and Treated Water <strong>pH</strong> and <strong>TDS</strong>, Aeration Tank pH — show <strong>No Data Available</strong> in this window.",
          voice: "Treated water turbidity sits at four point zero five, inside its band. The p H and T D S readings show no data in this window.",
        },
        {
          label: 'Biology', title: 'How the biology is doing',
          body: "<strong>Biological Process Health</strong> charts <strong>Aeration tank DO</strong> (ref. &lt;2 ppm) and <strong>VFD frequency at the MBBR tank</strong> (37.69), with cards for <strong>sludge settling</strong>, <strong>MBBR pH</strong>, <strong>Sludge Generation</strong> and <strong>Air Demand</strong>. <strong>Safety</strong> follows with the <strong>Flooding Sensor</strong>.",
          voice: "Biological health tracks aeration D O, blower frequency, sludge and air demand. Safety watches the flooding sensor.",
        },
        {
          label: 'Energy', title: 'Energy, and energy per KL',
          body: "<strong>Energy Consumption</strong> climbed to <strong>284.5 kW</strong> over the window, and <strong>Energy per KL</strong> reads <strong>6.50</strong>.",
          voice: "Energy consumption reached two hundred eighty-four kilowatts, at six point five per K L.",
        },
        {
          label: 'Equipment', title: 'Every machine, accounted for',
          body: "<strong>Equipment Performance and Maintenance</strong> lists <strong>running hours</strong> (Reactor Feed Pump-1 <strong>18.73</strong>), <strong>Bar screen choking</strong>, pump on/off traces and <strong>Blower Header Pressure</strong> (ref. 0.6 kg/cm2, <strong>0.61</strong>) — then blowers, MGF and UF pressures, dosing, <strong>Auto/Manual Status</strong> and <strong>Trip Status</strong>.",
          voice: "Every machine is accounted for — running hours, on-off status, pressures, auto or manual, and trips.",
        },
        {
          label: 'Range', title: 'Any window, any resolution',
          body: "Presets run <strong>Today</strong> to <strong>Last 6 Months</strong>, or <strong>Custom</strong> dates, with a <strong>12</strong> or <strong>24 hour</strong> clock and <strong>Smart Hours</strong>. Granularity follows the window — <strong>Days</strong> or <strong>Weeks</strong> for <strong>Last 30 Days</strong>. <strong>Apply Selection</strong>, then <strong>Save Current View</strong>.",
          voice: "Pick a preset or custom dates. Granularity follows the window, from hours to days and weeks.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "<strong>Dashboard</strong> to compare every site. <strong>Tickets</strong> for what needs attention. <strong>Inventory</strong> for chemicals. <strong>ScadaView</strong> for the live process. <strong>Maintenance</strong> for breakdowns. <strong>Amazon Lucknow Analytics</strong> for the plant in depth.",
          voice: "Dashboard to compare sites, tickets for what needs attention, inventory for chemicals, ScadaView live, maintenance for breakdowns, and analytics in depth.",
        },
      ],
    },
    hi: {
      title: 'अमेज़न लखनऊ,<br><em>हर साइट, एक प्लेटफ़ॉर्म।</em>',
      subtitle:
        'एक छोटा दौरा — मल्टी-साइट डैशबोर्ड, इन्वेंटरी, टिकट, स्काडाव्यू, मेंटेनेंस और आपका अमेज़न लखनऊ एनालिटिक्स।',
      chapter: 'डेमो · अमेज़न लखनऊ',
      steps: [
        {
          label: 'नेविगेशन', title: 'हर साइट, एक मेन्यू',
          body: "<strong>मेन्यू आइकन</strong> <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>टिकट</strong> और <strong>स्काडाव्यू – अमेज़न वर्कस्पेस</strong> खोलता है, फिर हर साइट: <strong>अमेज़न लखनऊ</strong>, <strong>DED</strong>, <strong>DEL-5</strong>, <strong>DEL-2</strong>, <strong>DEL-4</strong>, <strong>ISK 3</strong>, <strong>AMD-2</strong> और <strong>MBOX</strong>। हर साइट में <strong>मेंटेनेंस</strong> और उसका अपना <strong>एनालिटिक्स</strong> पेज है।",
          voice: "मेन्यू डैशबोर्ड, इन्वेंटरी, टिकट और स्काडाव्यू खोलता है, फिर हर अमेज़न साइट — हर एक का अपना मेंटेनेंस और एनालिटिक्स पेज।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "डैशबोर्ड <strong>डैशबोर्ड पेज</strong> पर खुलता है। <strong>ग्रैन्युलैरिटी</strong> (<strong>घंटे</strong>), <strong>पिछले 24 घंटे</strong> और <strong>से</strong> / <strong>तक</strong> की तारीखें हर विजेट चलाती हैं। ऊपर दाईं ओर: <strong>AI असिस्टेंट</strong>, <strong>रिफ़्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्स</strong>, <strong>पेज एडिट</strong> और <strong>शेयर</strong>।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा हर विजेट चलाते हैं। ऊपर दाईं ओर के आइकन पेज को रिफ़्रेश, डाउनलोड, एडिट और शेयर करते हैं।",
        },
        {
          label: 'अलर्ट', title: 'सभी प्लांट के अलर्ट',
          body: "<strong>टिकट्स हिस्ट्री</strong> <strong>सभी प्लांट</strong> में गिनती करता है: <strong>2 खुले क्रिटिकल अलर्ट</strong>, <strong>47 खुले अलर्ट</strong>, <strong>191 बंद अलर्ट</strong> और <strong>6 बंद क्रिटिकल</strong>। पंक्ति खोलकर पढ़ें — <em>रिएक्टर फ़ीड पंप ऑटो मोड से बाहर है</em>, <em>एरेशन टैंक में DO 1 या उससे कम है</em> — और बाकी के लिए <strong>शो मोर</strong>। <strong>मैप विजेट</strong> साइटों को <strong>टर्बिडिटी</strong> से दिखाता है।",
          voice: "टिकट्स हिस्ट्री सभी प्लांट के खुले और बंद अलर्ट गिनता है। कोई भी पंक्ति खोलकर पढ़ें, साथ में हर साइट का मैप।",
        },
        {
          label: 'पानी', title: 'साइट दर साइट पानी',
          body: "<strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong> में हर साइट का अपना कार्ड है: <strong>अमेज़न लखनऊ</strong> इनलेट पानी <strong>43.7 KL</strong>, <strong>AMD-2</strong>, <strong>DED</strong>, और आउटलेट, इरिगेशन, UF व इनलेट फ़्लोमीटर के साथ <strong>DEL-5</strong> — फिर नीचे <strong>MBOX</strong>, <strong>DEL-4</strong>, <strong>DEL-2</strong> और <strong>ISK 3</strong>।",
          voice: "हर साइट का अपना पानी कार्ड है — अमेज़न लखनऊ ने आज तैंतालीस दशमलव सात के एल लिया — ताकि साइटों की तुलना साथ-साथ हो।",
        },
        {
          label: 'ज़ूम', title: 'चार्ट खोलें, हर बिंदु पढ़ें',
          body: "कार्ड <strong>एक्सपैंड</strong> करें तो स्क्रीन भर जाती है। बिंदु पर होवर करें तो समय, मान और <strong>एग्रीगेशन टाइप</strong> दिखते हैं — सुबह 6:34 तक <strong>25.57 KL</strong> क्यूम्युलेटिव। ड्रैग करके ज़ूम करें, और <strong>रीसेट ज़ूम</strong> पूरी अवधि लौटाता है।",
          voice: "बड़ा करने पर हर बिंदु अपना मान और एग्रीगेशन दिखाता है। ड्रैग करके ज़ूम करें, और रीसेट ज़ूम वापस लाता है।",
        },
        {
          label: 'टूल्स', title: 'डाउनलोड करें, या दोबारा बनाएँ',
          body: "विजेट पर होवर करें: <strong>CSV डाउनलोड</strong>, <strong>एक्सपैंड</strong>, <strong>चार्ट चुनें</strong>, <strong>एडिट</strong> और <strong>इन्फ़ो</strong>। <strong>मेन्यू</strong> उसे <strong>टेबल</strong> या <strong>बार ग्राफ़</strong> में बदलता है। कोई भी बदलाव <strong>सेव करंट व्यू</strong> देता है — <strong>सेव</strong> या <strong>सेव ऐज़</strong>।",
          voice: "हर विजेट अपना डेटा सी एस वी में डाउनलोड कर सकता है, या टेबल या बार ग्राफ़ बन सकता है — फिर व्यू सेव करें।",
        },
        {
          label: 'फ़्लो', title: 'हर फ़्लो, घंटे दर घंटे',
          body: "<strong>इनलेट और आउटलेट (m3/hr)</strong> अमेज़न लखनऊ के <strong>इनलेट</strong>, <strong>स्लज</strong>, <strong>गार्डन</strong>, <strong>UF</strong> और <strong>फ़्लशिंग</strong> फ़्लो एक साथ दिखाता है। नीचे <strong>इनलेट एंड आउटलेट वॉटर क्वालिटी</strong> हर साइट का <strong>एरेशन DO</strong> उसकी सीमा के साथ दिखाता है।",
          voice: "एक चार्ट पर पाँच फ़्लो, घंटे दर घंटे। नीचे हर साइट का एरेशन डी ओ, उसकी सीमा के साथ।",
        },
        {
          label: 'इन्वेंटरी', title: 'हर साइट का अपना स्टोर',
          body: "<strong>इन्वेंटरी</strong> में हर स्टोर का टैब है — <strong>ऑल स्टोर</strong>, <strong>अमेज़न लखनऊ स्टोर</strong>, DEL-5, DEL-4, AMD-2, MBOX, DED आदि। अमेज़न लखनऊ में <strong>12 आइटम</strong> हैं — HCL, पॉली, यूरिया, DAP, कॉस्टिक, हाइपो, क्लोरीन बैलेंस, गुड़, pH और TDS किट — स्टॉक, पिछली खपत, और <strong>वास्तविक</strong> बनाम <strong>अपेक्षित</strong> खपत के साथ। लाल निशान ध्यान देने वाले आइटम बताता है।",
          voice: "हर साइट का अपना स्टोर है। हर केमिकल स्टॉक और वास्तविक बनाम अपेक्षित खपत दिखाता है, और लाल निशान ज़रूरी चीज़ें बताता है।",
        },
        {
          label: 'केमिकल लॉग', title: 'हर केमिकल का हिसाब',
          body: "आइटम खोलें तो उसका <strong>केमिकल लॉग</strong>: <strong>करंट बैलेंस</strong>, <strong>इस महीने का उपयोग</strong> और <strong>पिछले महीने का उपयोग</strong>, <strong>तारीख सीमा</strong>, और <strong>रिमार्क्स</strong> / <strong>अमाउंट</strong> फ़िल्टर। इस अवधि में कोई प्रविष्टि नहीं है।",
          voice: "हर आइटम का केमिकल लॉग है — बैलेंस, इस और पिछले महीने का उपयोग — तारीख से फ़िल्टर। इस अवधि में अभी कोई प्रविष्टि नहीं।",
        },
        {
          label: 'टिकट', title: 'टिकट, गिने और छाँटे हुए',
          body: "<strong>टिकट</strong> में <strong>47 खुले</strong> (2 क्रिटिकल, 43 ओवरड्यू, 43 एस्केलेटेड) और <strong>191 बंद</strong> हैं, श्रेणी के हिसाब से। हर टिकट अपना प्लांट बताता है — अमेज़न MBOX पर <em>EQT टैंक लेवल ऊँचा है</em>, अमेज़न लखनऊ पर <em>स्लज ट्रांसफ़र पंप ऑटो मोड से बाहर</em> — <strong>एस्केलेशन लेवल 3</strong> तक के टैग के साथ।",
          voice: "हर साइट के टिकट एक सूची में — गिने हुए, श्रेणी में बँटे, और एस्केलेट होने पर टैग किए हुए।",
        },
        {
          label: 'टिकट', title: 'एक टिकट की पूरी कहानी',
          body: "टिकट में प्लांट, <strong>समस्या</strong>, करने का <strong>विवरण</strong>, <strong>उपकरण</strong> (यहाँ <strong>इक्वलाइज़ेशन टैंक</strong>) और श्रेणी है। <strong>हिस्ट्री</strong> हर घटना दर्ज करती है — बना, ओवरड्यू हुआ, एस्केलेट हुआ — टिप्पणियों के साथ, और <strong>रिज़ॉल्व</strong> इसे बंद करता है।",
          voice: "हर टिकट में समस्या, क्या करना है, उपकरण, और हर एस्केलेशन की हिस्ट्री है — फिर रिज़ॉल्व करें।",
        },
        {
          label: 'स्काडाव्यू', title: 'प्लांट, लाइव',
          body: "<strong>स्काडाव्यू – अमेज़न वर्कस्पेस</strong> हर साइट को टाइल के रूप में दिखाता है; <strong>अमेज़न लखनऊ</strong> खोलें तो उसका <strong>लाइव</strong> डायग्राम — बार स्क्रीन, ऑयल व ग्रीस ट्रैप, इक्वलाइज़ेशन, एनॉक्सिक व MBBR टैंक, ट्यूब सेटलर, फ़िल्टर, UF और फ़िल्टर प्रेस। समय चुनकर <strong>प्ले</strong> करें, <strong>ग्रुप कंट्रोल</strong> या <strong>यूनिट प्रोसेसेज़</strong> खोलें, और ज़ूम करें।",
          voice: "स्काडाव्यू हर साइट को लाइव डायग्राम में खोलता है। कोई भी पल दोबारा देखें, ग्रुप कंट्रोल खोलें, और कहीं भी ज़ूम करें।",
        },
        {
          label: 'मेंटेनेंस', title: 'हर ब्रेकडाउन, दर्ज',
          body: "<strong>अमेज़न लखनऊ → मेंटेनेंस</strong> हर मशीन की सूची है — फ़िल्टर फ़ीड, स्लज, UF फ़ीड, इरिगेशन, फ़्लशिंग और डोज़िंग पंप, ब्लोअर। एक खोलें तो मेक, मॉडल और हर <strong>ब्रेकडाउन</strong> एक्शन, कब बना और कब पूरा हुआ; पूरा टेक्स्ट होवर पर, और टाइमलाइन के लिए <strong>सी हिस्ट्री</strong>।",
          voice: "मेंटेनेंस हर मशीन और हर ब्रेकडाउन दिखाता है — कब आया, कब ठीक हुआ, और उसकी हिस्ट्री।",
        },
        {
          label: 'एनालिटिक्स', title: 'आपके एनालिटिक्स के पेज',
          body: "<strong>अमेज़न लखनऊ एनालिटिक्स</strong> में कई पेज हैं: <strong>डिटेल्ड व्यू</strong>, <strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong>, <strong>क्वालिटी पैरामीटर्स</strong>, <strong>इनलेट वॉटर व एनर्जी कंज़म्प्शन</strong>, <strong>इक्विपमेंट रनिंग स्टेटस</strong> और <strong>डिटेल्ड व्यू मंथली</strong>।",
          voice: "आपके एनालिटिक्स में कई पेज हैं — डिटेल्ड व्यू, पानी, गुणवत्ता, ऊर्जा, उपकरण, और मासिक व्यू।",
        },
        {
          label: 'टैंक', title: 'एक चार्ट पर पाँच टैंक',
          body: "<strong>टैंक लेवल (%)</strong> <strong>क्लियर वॉटर टैंक</strong>, <strong>EQT</strong>, <strong>UF प्रोडक्ट टैंक</strong>, <strong>ट्रीटेड वॉटर टैंक</strong> और <strong>स्लज होल्डिंग टैंक</strong> एक साथ दिखाता है — UF प्रोडक्ट <strong>96.08%</strong>, स्लज होल्डिंग <strong>84.61%</strong>। लेजेंड से कोई भी टैंक चालू/बंद करें।",
          voice: "एक चार्ट पर पाँच टैंक लेवल। लेजेंड से कोई भी टैंक अलग से पढ़ें।",
        },
        {
          label: 'मात्रा', title: 'हर टैंक में कितना',
          body: "<strong>अदर फ़्लो</strong> और <strong>बैकवॉश फ़्लो</strong> इरिगेशन, फ़्लशिंग, UF और MGF-ACF बैकवॉश दिखाते हैं। <strong>वॉटर वॉल्यूम इन टैंक्स</strong> लेवल को क्षमता के सामने मात्रा में बदलता है — इक्वलाइज़ेशन 100 में से <strong>39.26</strong> KL, ट्रीटेड वॉटर 40 में से <strong>18.67</strong> — साथ में <strong>इनलेट फ़्लो मीटर</strong> <strong>43.77 KL</strong>।",
          voice: "लेवल मात्रा बन जाते हैं — हर टैंक में कितना, उसकी क्षमता के सामने — साथ में इनलेट फ़्लो मीटर।",
        },
        {
          label: 'गुणवत्ता', title: 'सीमा के सामने गुणवत्ता',
          body: "<strong>ट्रीटेड वॉटर टर्बिडिटी</strong> <strong>4.05 NTU</strong> है, अपनी हरी सीमा के अंदर। <strong>क्वालिटी पैरामीटर्स</strong> — इक्वलाइज़ेशन और ट्रीटेड वॉटर <strong>pH</strong> और <strong>TDS</strong>, एरेशन टैंक pH — इस अवधि में <strong>नो डेटा अवेलेबल</strong> दिखाते हैं।",
          voice: "ट्रीटेड वॉटर टर्बिडिटी चार दशमलव शून्य पाँच है, सीमा के अंदर। पी एच और टी डी एस में इस अवधि का डेटा नहीं है।",
        },
        {
          label: 'बायोलॉजी', title: 'बायोलॉजी कैसी है',
          body: "<strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> <strong>एरेशन टैंक DO</strong> (रेफ़. &lt;2 ppm) और <strong>MBBR टैंक पर VFD फ़्रीक्वेंसी</strong> (37.69) दिखाता है, साथ में <strong>स्लज सेटलिंग</strong>, <strong>MBBR pH</strong>, <strong>स्लज जनरेशन</strong> और <strong>एयर डिमांड</strong> के कार्ड। फिर <strong>सेफ़्टी</strong> में <strong>फ़्लडिंग सेंसर</strong>।",
          voice: "बायोलॉजिकल हेल्थ एरेशन डी ओ, ब्लोअर फ़्रीक्वेंसी, स्लज और एयर डिमांड ट्रैक करता है। सेफ़्टी फ़्लडिंग सेंसर देखता है।",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, और प्रति KL ऊर्जा',
          body: "<strong>एनर्जी कंज़म्प्शन</strong> इस अवधि में <strong>284.5 kW</strong> तक पहुँचा, और <strong>एनर्जी पर KL</strong> <strong>6.50</strong> है।",
          voice: "ऊर्जा खपत दो सौ चौरासी किलोवाट तक पहुँची, प्रति के एल छह दशमलव पाँच।",
        },
        {
          label: 'उपकरण', title: 'हर मशीन का हिसाब',
          body: "<strong>इक्विपमेंट परफ़ॉर्मेंस एंड मेंटेनेंस</strong> में <strong>रनिंग घंटे</strong> (रिएक्टर फ़ीड पंप-1 <strong>18.73</strong>), <strong>बार स्क्रीन चोकिंग</strong>, पंप ऑन/ऑफ़ और <strong>ब्लोअर हेडर प्रेशर</strong> (रेफ़. 0.6 kg/cm2, <strong>0.61</strong>) — फिर ब्लोअर, MGF और UF प्रेशर, डोज़िंग, <strong>ऑटो/मैनुअल स्टेटस</strong> और <strong>ट्रिप स्टेटस</strong>।",
          voice: "हर मशीन का हिसाब है — रनिंग घंटे, ऑन-ऑफ़, प्रेशर, ऑटो या मैनुअल, और ट्रिप।",
        },
        {
          label: 'समय सीमा', title: 'कोई भी अवधि, कोई भी रिज़ॉल्यूशन',
          body: "प्रीसेट <strong>आज</strong> से <strong>पिछले 6 महीने</strong> तक, या <strong>कस्टम</strong> तारीखें, <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी और <strong>स्मार्ट आवर्स</strong>। ग्रैन्युलैरिटी अवधि के साथ बदलती है — <strong>पिछले 30 दिन</strong> के लिए <strong>दिन</strong> या <strong>हफ़्ते</strong>। <strong>अप्लाई सिलेक्शन</strong>, फिर <strong>सेव करंट व्यू</strong>।",
          voice: "प्रीसेट या अपनी तारीखें चुनें। ग्रैन्युलैरिटी अवधि के साथ बदलती है, घंटों से दिन और हफ़्तों तक।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "हर साइट की तुलना के लिए <strong>डैशबोर्ड</strong>। ध्यान देने वाली बातों के लिए <strong>टिकट</strong>। केमिकल के लिए <strong>इन्वेंटरी</strong>। लाइव प्रोसेस के लिए <strong>स्काडाव्यू</strong>। ब्रेकडाउन के लिए <strong>मेंटेनेंस</strong>। प्लांट की गहराई के लिए <strong>अमेज़न लखनऊ एनालिटिक्स</strong>।",
          voice: "साइटों की तुलना के लिए डैशबोर्ड, ज़रूरी बातों के लिए टिकट, केमिकल के लिए इन्वेंटरी, लाइव के लिए स्काडाव्यू, ब्रेकडाउन के लिए मेंटेनेंस, और गहराई के लिए एनालिटिक्स।",
        },
      ],
    },
    ta: {
      title: 'அமேசான் லக்னோ,<br><em>ஒவ்வொரு தளமும், ஒரே தளத்தில்.</em>',
      subtitle:
        'ஒரு விரைவுச் சுற்று — பல-தள டாஷ்போர்டு, இன்வென்டரி, டிக்கெட்டுகள், ஸ்காடாவியூ, மெயின்டனன்ஸ், உங்கள் அமேசான் லக்னோ அனலிட்டிக்ஸ்.',
      chapter: 'டெமோ · அமேசான் லக்னோ',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒவ்வொரு தளமும், ஒரே மெனு',
          body: "<strong>மெனு ஐகான்</strong> <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>டிக்கெட்டுகள்</strong>, <strong>ஸ்காடாவியூ – அமேசான் வொர்க்ஸ்பேஸ்</strong>, பின் ஒவ்வொரு தளத்தையும் திறக்கிறது: <strong>அமேசான் லக்னோ</strong>, <strong>DED</strong>, <strong>DEL-5</strong>, <strong>DEL-2</strong>, <strong>DEL-4</strong>, <strong>ISK 3</strong>, <strong>AMD-2</strong>, <strong>MBOX</strong>. ஒவ்வொரு தளத்திலும் <strong>மெயின்டனன்ஸ்</strong>, அதன் சொந்த <strong>அனலிட்டிக்ஸ்</strong> பக்கம்.",
          voice: "மெனு டாஷ்போர்டு, இன்வென்டரி, டிக்கெட்டுகள், ஸ்காடாவியூ, பின் ஒவ்வொரு அமேசான் தளத்தையும் திறக்கிறது — ஒவ்வொன்றுக்கும் மெயின்டனன்ஸ், அனலிட்டிக்ஸ் பக்கம்.",
        },
        {
          label: 'கட்டுப்பாடுகள்', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "டாஷ்போர்டு <strong>டாஷ்போர்டு பேஜ்</strong>-இல் திறக்கிறது. <strong>கிரானுலாரிட்டி</strong> (<strong>மணிநேரம்</strong>), <strong>கடைசி 24 மணிநேரம்</strong>, <strong>இருந்து</strong> / <strong>வரை</strong> தேதிகள் ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. மேல் வலது: <strong>AI உதவியாளர்</strong>, <strong>ரிஃப்ரெஷ்</strong>, <strong>டவுன்லோட்</strong>, <strong>செட்டிங்ஸ்</strong>, <strong>பக்கத் திருத்தம்</strong>, <strong>பகிர்</strong>.",
          voice: "பக்கத் தேர்வு, கிரானுலாரிட்டி, தேதி வரம்பு ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. மேல் வலது ஐகான்கள் பக்கத்தை ரிஃப்ரெஷ், டவுன்லோட், திருத்தம், பகிர்வு செய்கின்றன.",
        },
        {
          label: 'அலர்ட்கள்', title: 'அனைத்து ஆலைகளின் அலர்ட்கள்',
          body: "<strong>டிக்கெட்ஸ் ஹிஸ்டரி</strong> <strong>அனைத்து ஆலைகளிலும்</strong> எண்ணுகிறது: <strong>2 திறந்த முக்கிய அலர்ட்கள்</strong>, <strong>47 திறந்த அலர்ட்கள்</strong>, <strong>191 மூடிய அலர்ட்கள்</strong>, <strong>6 மூடிய முக்கியம்</strong>. வரிசையைத் திறந்து படிக்கலாம் — <em>ரியாக்டர் ஃபீட் பம்ப் ஆட்டோ மோடில் இல்லை</em> — மீதிக்கு <strong>ஷோ மோர்</strong>. <strong>மேப் விட்ஜெட்</strong> தளங்களை <strong>டர்பிடிட்டி</strong> மூலம் காட்டுகிறது.",
          voice: "டிக்கெட்ஸ் ஹிஸ்டரி அனைத்து ஆலைகளின் திறந்த, மூடிய அலர்ட்களை எண்ணுகிறது. எந்த வரிசையையும் திறந்து படிக்கலாம், அருகில் ஒவ்வொரு தளத்தின் வரைபடம்.",
        },
        {
          label: 'நீர்', title: 'தளம் வாரியாக நீர்',
          body: "<strong>வாட்டர் குவான்டிட்டி அண்ட் அவைலபிலிட்டி</strong> ஒவ்வொரு தளத்துக்கும் தனிக் கார்டு: <strong>அமேசான் லக்னோ</strong> இன்லெட் நீர் <strong>43.7 KL</strong>, <strong>AMD-2</strong>, <strong>DED</strong>, அவுட்லெட், பாசனம், UF, இன்லெட் ஃப்ளோமீட்டர்களுடன் <strong>DEL-5</strong> — கீழே <strong>MBOX</strong>, <strong>DEL-4</strong>, <strong>DEL-2</strong>, <strong>ISK 3</strong>.",
          voice: "ஒவ்வொரு தளத்துக்கும் தனி நீர் கார்டு — அமேசான் லக்னோ இன்று நாற்பத்து மூன்று புள்ளி ஏழு கே எல் பெற்றது — தளங்களை அருகருகே ஒப்பிடலாம்.",
        },
        {
          label: 'பெரிதாக்கு', title: 'சார்ட்டைத் திறந்து எந்தப் புள்ளியையும் படியுங்கள்',
          body: "கார்டை <strong>எக்ஸ்பாண்ட்</strong> செய்தால் திரையை நிரப்புகிறது. ஒரு புள்ளியின் மேல் வைத்தால் காலம், மதிப்பு, <strong>அக்ரிகேஷன் வகை</strong> — காலை 6:34 வரை <strong>25.57 KL</strong> கியூமுலேட்டிவ். இழுத்துப் பெரிதாக்கலாம், <strong>ரீசெட் ஜூம்</strong> முழுக் காலத்தைத் திருப்பித் தருகிறது.",
          voice: "பெரிதாக்கினால் ஒவ்வொரு புள்ளியும் மதிப்பையும் அக்ரிகேஷனையும் காட்டுகிறது. இழுத்துப் பெரிதாக்கலாம், ரீசெட் ஜூம் திருப்பித் தருகிறது.",
        },
        {
          label: 'கருவிகள்', title: 'டவுன்லோட் செய்யுங்கள், அல்லது மீண்டும் வரையுங்கள்',
          body: "விட்ஜெட்டின் மேல் வைத்தால் கருவிகள்: <strong>CSV டவுன்லோட்</strong>, <strong>எக்ஸ்பாண்ட்</strong>, <strong>சார்ட் தேர்வு</strong>, <strong>திருத்தம்</strong>, <strong>தகவல்</strong>. <strong>மெனு</strong> அதை <strong>டேபிள்</strong> அல்லது <strong>பார் கிராஃப்</strong> ஆக மாற்றுகிறது. எந்த மாற்றமும் <strong>சேவ் கரண்ட் வியூ</strong> — <strong>சேவ்</strong> அல்லது <strong>சேவ் அஸ்</strong>.",
          voice: "ஒவ்வொரு விட்ஜெட்டும் தரவை சி எஸ் வி ஆக டவுன்லோட் செய்யலாம், அல்லது அட்டவணை, பார் கிராஃப் ஆகலாம் — பின் வியூவைச் சேமிக்கலாம்.",
        },
        {
          label: 'ஓட்டங்கள்', title: 'ஒவ்வொரு ஓட்டமும், மணிநேர வாரியாக',
          body: "<strong>இன்லெட் &amp; அவுட்லெட் (m3/hr)</strong> அமேசான் லக்னோவின் <strong>இன்லெட்</strong>, <strong>ஸ்லட்ஜ்</strong>, <strong>தோட்டம்</strong>, <strong>UF</strong>, <strong>ஃப்ளஷிங்</strong> ஓட்டங்களை ஒன்றாகக் காட்டுகிறது. கீழே <strong>இன்லெட் அண்ட் அவுட்லெட் வாட்டர் குவாலிட்டி</strong> ஒவ்வொரு தளத்தின் <strong>ஏரேஷன் DO</strong>-வை அதன் வரம்புடன் காட்டுகிறது.",
          voice: "ஒரே சார்ட்டில் ஐந்து ஓட்டங்கள், மணிநேர வாரியாக. கீழே ஒவ்வொரு தளத்தின் ஏரேஷன் டி ஓ, அதன் வரம்புடன்.",
        },
        {
          label: 'இன்வென்டரி', title: 'ஒவ்வொரு தளத்துக்கும் ஒரு ஸ்டோர்',
          body: "<strong>இன்வென்டரி</strong>-இல் ஒவ்வொரு ஸ்டோருக்கும் ஒரு டேப் — <strong>ஆல் ஸ்டோர்</strong>, <strong>அமேசான் லக்னோ ஸ்டோர்</strong>, DEL-5, DEL-4, AMD-2, MBOX, DED மற்றும் பல. அமேசான் லக்னோவில் <strong>12 பொருட்கள்</strong> — HCL, பாலி, யூரியா, DAP, காஸ்டிக், ஹைப்போ, குளோரின் பேலன்ஸ், வெல்லம், pH, TDS கிட்கள் — இருப்பு, கடைசி நுகர்வு, <strong>உண்மை</strong> மற்றும் <strong>எதிர்பார்த்த</strong> நுகர்வுடன். சிவப்புக் குறி கவனம் தேவையானவற்றைக் காட்டுகிறது.",
          voice: "ஒவ்வொரு தளத்துக்கும் தனி ஸ்டோர். ஒவ்வொரு ரசாயனமும் இருப்பையும் உண்மை, எதிர்பார்த்த பயன்பாட்டையும் காட்டுகிறது, சிவப்புக் குறி கவனிக்க வேண்டியதைக் காட்டுகிறது.",
        },
        {
          label: 'ரசாயனப் பதிவு', title: 'ஒவ்வொரு ரசாயன நகர்வும்',
          body: "ஒரு பொருளைத் திறந்தால் அதன் <strong>கெமிக்கல் லாக்ஸ்</strong>: <strong>தற்போதைய இருப்பு</strong>, <strong>இந்த மாதப் பயன்பாடு</strong>, <strong>கடந்த மாதப் பயன்பாடு</strong>, <strong>தேதி வரம்பு</strong>, <strong>ரிமார்க்ஸ்</strong> / <strong>அமவுண்ட்</strong> வடிகட்டிகள். இந்தக் காலத்தில் பதிவுகள் இல்லை.",
          voice: "ஒவ்வொரு பொருளுக்கும் ரசாயனப் பதிவு — இருப்பு, இந்த மற்றும் கடந்த மாதப் பயன்பாடு — தேதியால் வடிகட்டலாம். இந்தக் காலத்தில் இன்னும் பதிவுகள் இல்லை.",
        },
        {
          label: 'டிக்கெட்டுகள்', title: 'எண்ணி வரிசைப்படுத்திய டிக்கெட்டுகள்',
          body: "<strong>டிக்கெட்டுகள்</strong> <strong>47 திறந்தவை</strong> (2 முக்கியம், 43 காலம் கடந்தவை, 43 உயர்த்தப்பட்டவை), <strong>191 மூடியவை</strong>, வகைப்படி. ஒவ்வொரு டிக்கெட்டும் அதன் ஆலையைக் குறிப்பிடுகிறது — அமேசான் MBOX-இல் <em>EQT டேங்க் நிலை அதிகம்</em>, அமேசான் லக்னோவில் <em>ஸ்லட்ஜ் டிரான்ஸ்ஃபர் பம்ப் ஆட்டோ மோடில் இல்லை</em> — <strong>எஸ்கலேஷன் லெவல் 3</strong> வரை குறிச்சொற்கள்.",
          voice: "ஒவ்வொரு தளத்தின் டிக்கெட்டுகளும் ஒரே பட்டியலில் — எண்ணப்பட்டு, வகைப்படி பிரிக்கப்பட்டு, உயர்த்தப்படும்போது குறிக்கப்படுகின்றன.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒரு டிக்கெட்டின் முழுக் கதை',
          body: "டிக்கெட்டில் ஆலை, <strong>பிரச்சனை</strong>, செய்ய வேண்டியதின் <strong>விளக்கம்</strong>, <strong>உபகரணம்</strong> (இங்கே <strong>ஈக்வலைசேஷன் டேங்க்</strong>), வகை. <strong>ஹிஸ்டரி</strong> ஒவ்வொரு நிகழ்வையும் பதிவு செய்கிறது — உருவானது, காலம் கடந்தது, உயர்த்தப்பட்டது — கருத்துகளுடன்; <strong>ரிசால்வ்</strong> அதை மூடுகிறது.",
          voice: "ஒவ்வொரு டிக்கெட்டிலும் பிரச்சனை, செய்ய வேண்டியது, உபகரணம், ஒவ்வொரு உயர்த்தலின் வரலாறு — பின் தீர்க்கவும்.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'ஆலை, நேரலையில்',
          body: "<strong>ஸ்காடாவியூ – அமேசான் வொர்க்ஸ்பேஸ்</strong> ஒவ்வொரு தளத்தையும் ஒரு டைலாகக் காட்டுகிறது; <strong>அமேசான் லக்னோ</strong> திறந்தால் அதன் <strong>லைவ்</strong> வரைபடம் — பார் ஸ்கிரீன், ஆயில் &amp; கிரீஸ் டிராப், ஈக்வலைசேஷன், அனாக்ஸிக், MBBR டேங்க்குகள், டியூப் செட்லர், வடிகட்டிகள், UF, ஃபில்டர் பிரஸ். நேரத்தைத் தேர்ந்து <strong>ப்ளே</strong>, <strong>குரூப் கண்ட்ரோல்</strong> அல்லது <strong>யூனிட் புராசஸஸ்</strong>, பெரிதாக்கல்.",
          voice: "ஸ்காடாவியூ ஒவ்வொரு தளத்தையும் நேரலை வரைபடமாகத் திறக்கிறது. எந்தத் தருணத்தையும் மீண்டும் பார்க்கலாம், குரூப் கண்ட்ரோல் திறக்கலாம், எங்கும் பெரிதாக்கலாம்.",
        },
        {
          label: 'மெயின்டனன்ஸ்', title: 'ஒவ்வொரு பழுதும், பதிவில்',
          body: "<strong>அமேசான் லக்னோ → மெயின்டனன்ஸ்</strong> ஒவ்வொரு இயந்திரத்தையும் பட்டியலிடுகிறது — ஃபில்டர் ஃபீட், ஸ்லட்ஜ், UF ஃபீட், பாசனம், ஃப்ளஷிங், டோசிங் பம்புகள், ப்ளோயர்கள். ஒன்றைத் திறந்தால் மேக், மாடல், ஒவ்வொரு <strong>பிரேக்டவுன்</strong> செயலும் — எப்போது உருவானது, எப்போது முடிந்தது; முழு உரைக்கு மேல் வைக்கவும், காலவரிசைக்கு <strong>சீ ஹிஸ்டரி</strong>.",
          voice: "மெயின்டனன்ஸ் ஒவ்வொரு இயந்திரத்தையும் ஒவ்வொரு பழுதையும் காட்டுகிறது — எப்போது வந்தது, எப்போது சரிசெய்யப்பட்டது, அதன் வரலாறு.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'உங்கள் அனலிட்டிக்ஸின் பக்கங்கள்',
          body: "<strong>அமேசான் லக்னோ அனலிட்டிக்ஸ்</strong>-இல் பல பக்கங்கள்: <strong>டீடெய்ல்டு வியூ</strong>, <strong>வாட்டர் குவான்டிட்டி அண்ட் அவைலபிலிட்டி</strong>, <strong>குவாலிட்டி பாராமீட்டர்ஸ்</strong>, <strong>இன்லெட் வாட்டர் &amp; எனர்ஜி கன்சம்ப்ஷன்</strong>, <strong>எக்விப்மென்ட் ரன்னிங் ஸ்டேட்டஸ்</strong>, <strong>டீடெய்ல்டு வியூ மன்த்லி</strong>.",
          voice: "உங்கள் அனலிட்டிக்ஸில் பல பக்கங்கள் — விரிவான பார்வை, நீர், தரம், ஆற்றல், உபகரணம், மாதாந்திரப் பார்வை.",
        },
        {
          label: 'டேங்க்குகள்', title: 'ஒரே சார்ட்டில் ஐந்து டேங்க்குகள்',
          body: "<strong>டேங்க் லெவல்ஸ் (%)</strong> <strong>கிளியர் வாட்டர் டேங்க்</strong>, <strong>EQT</strong>, <strong>UF புராடக்ட் டேங்க்</strong>, <strong>ட்ரீட்டட் வாட்டர் டேங்க்</strong>, <strong>ஸ்லட்ஜ் ஹோல்டிங் டேங்க்</strong> ஆகியவற்றை ஒன்றாகக் காட்டுகிறது — UF புராடக்ட் <strong>96.08%</strong>, ஸ்லட்ஜ் ஹோல்டிங் <strong>84.61%</strong>. லெஜெண்டிலிருந்து எந்த டேங்க்கையும் மாற்றலாம்.",
          voice: "ஒரே சார்ட்டில் ஐந்து டேங்க் நிலைகள். லெஜெண்டிலிருந்து எந்த டேங்க்கையும் தனியாகப் படிக்கலாம்.",
        },
        {
          label: 'அளவுகள்', title: 'ஒவ்வொரு டேங்க்கிலும் எவ்வளவு',
          body: "<strong>அதர் ஃப்ளோ</strong>, <strong>பேக்வாஷ் ஃப்ளோ</strong> பாசனம், ஃப்ளஷிங், UF, MGF-ACF பேக்வாஷைக் காட்டுகின்றன. <strong>வாட்டர் வால்யூம் இன் டேங்க்ஸ்</strong> நிலைகளைக் கொள்ளளவுக்கு எதிரான அளவாக மாற்றுகிறது — ஈக்வலைசேஷன் 100-இல் <strong>39.26</strong> KL, ட்ரீட்டட் வாட்டர் 40-இல் <strong>18.67</strong> — அருகில் <strong>இன்லெட் ஃப்ளோ மீட்டர்</strong> <strong>43.77 KL</strong>.",
          voice: "நிலைகள் அளவுகளாகின்றன — ஒவ்வொரு டேங்க்கிலும் எவ்வளவு, அதன் கொள்ளளவுக்கு எதிராக — அருகில் இன்லெட் ஃப்ளோ மீட்டர்.",
        },
        {
          label: 'தரம்', title: 'வரம்புக்கு எதிராக தரம்',
          body: "<strong>ட்ரீட்டட் வாட்டர் டர்பிடிட்டி</strong> <strong>4.05 NTU</strong>, அதன் பச்சை வரம்புக்குள். <strong>குவாலிட்டி பாராமீட்டர்ஸ்</strong> — ஈக்வலைசேஷன், ட்ரீட்டட் வாட்டர் <strong>pH</strong>, <strong>TDS</strong>, ஏரேஷன் டேங்க் pH — இந்தக் காலத்தில் <strong>நோ டேட்டா அவைலபிள்</strong>.",
          voice: "சுத்திகரிக்கப்பட்ட நீரின் டர்பிடிட்டி நான்கு புள்ளி பூஜ்யம் ஐந்து, வரம்புக்குள். பி எச், டி டி எஸ் இந்தக் காலத்தில் தரவு இல்லை.",
        },
        {
          label: 'உயிரியல்', title: 'உயிரியல் எப்படி இருக்கிறது',
          body: "<strong>பயலாஜிக்கல் புராசஸ் ஹெல்த்</strong> <strong>ஏரேஷன் டேங்க் DO</strong> (குறிப்பு &lt;2 ppm), <strong>MBBR டேங்க் VFD அதிர்வெண்</strong> (37.69) காட்டுகிறது; <strong>கசடு படிவு</strong>, <strong>MBBR pH</strong>, <strong>ஸ்லட்ஜ் ஜெனரேஷன்</strong>, <strong>ஏர் டிமாண்ட்</strong> கார்டுகளுடன். பின் <strong>சேஃப்டி</strong>-இல் <strong>ஃப்ளடிங் சென்சார்</strong>.",
          voice: "உயிரியல் ஆரோக்கியம் ஏரேஷன் டி ஓ, ப்ளோயர் அதிர்வெண், கசடு, காற்றுத் தேவையைக் கண்காணிக்கிறது. சேஃப்டி வெள்ள சென்சாரைக் கவனிக்கிறது.",
        },
        {
          label: 'ஆற்றல்', title: 'ஆற்றல், ஒரு KL-க்கான ஆற்றல்',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> இந்தக் காலத்தில் <strong>284.5 kW</strong> வரை உயர்ந்தது, <strong>எனர்ஜி பெர் KL</strong> <strong>6.50</strong>.",
          voice: "ஆற்றல் நுகர்வு இருநூற்று எண்பத்து நான்கு கிலோவாட் எட்டியது, ஒரு கே எல்-க்கு ஆறு புள்ளி ஐந்து.",
        },
        {
          label: 'உபகரணம்', title: 'ஒவ்வொரு இயந்திரத்தின் கணக்கு',
          body: "<strong>எக்விப்மென்ட் பெர்ஃபார்மன்ஸ் அண்ட் மெயின்டனன்ஸ்</strong>: <strong>இயக்க நேரம்</strong> (ரியாக்டர் ஃபீட் பம்ப்-1 <strong>18.73</strong>), <strong>பார் ஸ்கிரீன் அடைப்பு</strong>, பம்ப் ஆன்/ஆஃப், <strong>ப்ளோயர் ஹெடர் அழுத்தம்</strong> (குறிப்பு 0.6 kg/cm2, <strong>0.61</strong>) — பின் ப்ளோயர்கள், MGF, UF அழுத்தம், டோசிங், <strong>ஆட்டோ/மேனுவல் நிலை</strong>, <strong>டிரிப் நிலை</strong>.",
          voice: "ஒவ்வொரு இயந்திரத்துக்கும் கணக்கு — இயக்க நேரம், ஆன் ஆஃப், அழுத்தம், ஆட்டோ அல்லது மேனுவல், டிரிப்கள்.",
        },
        {
          label: 'வரம்பு', title: 'எந்தக் காலமும், எந்தத் தெளிவும்',
          body: "முன்னமைவுகள் <strong>இன்று</strong> முதல் <strong>கடைசி 6 மாதம்</strong> வரை, அல்லது <strong>தனிப்பயன்</strong> தேதிகள், <strong>12</strong> அல்லது <strong>24 மணிநேர</strong> கடிகாரம், <strong>ஸ்மார்ட் ஹவர்ஸ்</strong>. கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது — <strong>கடைசி 30 நாட்கள்</strong> என்றால் <strong>நாட்கள்</strong> அல்லது <strong>வாரங்கள்</strong>. <strong>அப்ளை செலக்ஷன்</strong>, பின் <strong>சேவ் கரண்ட் வியூ</strong>.",
          voice: "முன்னமைவு அல்லது உங்கள் தேதிகளைத் தேர்ந்தெடுங்கள். கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது, மணிநேரம் முதல் நாட்கள், வாரங்கள் வரை.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "ஒவ்வொரு தளத்தையும் ஒப்பிட <strong>டாஷ்போர்டு</strong>. கவனம் தேவைப்படுவதற்கு <strong>டிக்கெட்டுகள்</strong>. ரசாயனங்களுக்கு <strong>இன்வென்டரி</strong>. நேரடிச் செயல்முறைக்கு <strong>ஸ்காடாவியூ</strong>. பழுதுகளுக்கு <strong>மெயின்டனன்ஸ்</strong>. ஆலையை ஆழமாகப் பார்க்க <strong>அமேசான் லக்னோ அனலிட்டிக்ஸ்</strong>.",
          voice: "தளங்களை ஒப்பிட டாஷ்போர்டு, கவனிக்க வேண்டியதற்கு டிக்கெட்டுகள், ரசாயனங்களுக்கு இன்வென்டரி, நேரலைக்கு ஸ்காடாவியூ, பழுதுகளுக்கு மெயின்டனன்ஸ், ஆழமாக அனலிட்டிக்ஸ்.",
        },
      ],
    },
    mr: {
      title: 'ॲमेझॉन लखनऊ,<br><em>प्रत्येक साइट, एक प्लॅटफॉर्म.</em>',
      subtitle:
        'एक छोटा दौरा — मल्टी-साइट डॅशबोर्ड, इन्व्हेंटरी, तिकिटे, स्काडाव्ह्यू, मेंटेनन्स आणि तुमचे ॲमेझॉन लखनऊ ॲनालिटिक्स.',
      chapter: 'डेमो · ॲमेझॉन लखनऊ',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'प्रत्येक साइट, एक मेन्यू',
          body: "<strong>मेन्यू आयकॉन</strong> <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>तिकिटे</strong> आणि <strong>स्काडाव्ह्यू – ॲमेझॉन वर्कस्पेस</strong> उघडतो, मग प्रत्येक साइट: <strong>ॲमेझॉन लखनऊ</strong>, <strong>DED</strong>, <strong>DEL-5</strong>, <strong>DEL-2</strong>, <strong>DEL-4</strong>, <strong>ISK 3</strong>, <strong>AMD-2</strong> आणि <strong>MBOX</strong>. प्रत्येक साइटमध्ये <strong>मेंटेनन्स</strong> आणि तिचे स्वतःचे <strong>ॲनालिटिक्स</strong> पेज.",
          voice: "मेन्यू डॅशबोर्ड, इन्व्हेंटरी, तिकिटे आणि स्काडाव्ह्यू उघडतो, मग प्रत्येक ॲमेझॉन साइट — प्रत्येकीचे स्वतःचे मेंटेनन्स आणि ॲनालिटिक्स पेज.",
        },
        {
          label: 'नियंत्रणे', title: 'पेज चालवणारी नियंत्रणे',
          body: "डॅशबोर्ड <strong>डॅशबोर्ड पेज</strong> वर उघडतो. <strong>ग्रॅन्युलॅरिटी</strong> (<strong>तास</strong>), <strong>मागील 24 तास</strong> आणि <strong>पासून</strong> / <strong>पर्यंत</strong> तारखा प्रत्येक विजेट चालवतात. वर उजवीकडे: <strong>AI सहाय्यक</strong>, <strong>रिफ्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्ज</strong>, <strong>पेज एडिट</strong> आणि <strong>शेअर</strong>.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालावधी प्रत्येक विजेट चालवतात. वर उजवीकडील आयकॉन पेज रिफ्रेश, डाउनलोड, एडिट आणि शेअर करतात.",
        },
        {
          label: 'अलर्ट', title: 'सर्व प्लांटचे अलर्ट',
          body: "<strong>टिकेट्स हिस्ट्री</strong> <strong>सर्व प्लांट</strong> मध्ये मोजते: <strong>2 उघडे क्रिटिकल अलर्ट</strong>, <strong>47 उघडे अलर्ट</strong>, <strong>191 बंद अलर्ट</strong> आणि <strong>6 बंद क्रिटिकल</strong>. ओळ उघडून वाचा — <em>रिॲक्टर फीड पंप ऑटो मोडमधून बाहेर आहे</em>, <em>एरेशन टँकमध्ये DO 1 किंवा कमी आहे</em> — आणि उरलेल्यांसाठी <strong>शो मोअर</strong>. <strong>मॅप विजेट</strong> साइट्स <strong>टर्बिडिटी</strong> ने दाखवतो.",
          voice: "टिकेट्स हिस्ट्री सर्व प्लांटचे उघडे आणि बंद अलर्ट मोजते. कोणतीही ओळ उघडून वाचा, शेजारी प्रत्येक साइटचा नकाशा.",
        },
        {
          label: 'पाणी', title: 'साइटनुसार पाणी',
          body: "<strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong> मध्ये प्रत्येक साइटचे स्वतःचे कार्ड: <strong>ॲमेझॉन लखनऊ</strong> इनलेट पाणी <strong>43.7 KL</strong>, <strong>AMD-2</strong>, <strong>DED</strong>, आणि आउटलेट, सिंचन, UF व इनलेट फ्लोमीटरसह <strong>DEL-5</strong> — मग खाली <strong>MBOX</strong>, <strong>DEL-4</strong>, <strong>DEL-2</strong> आणि <strong>ISK 3</strong>.",
          voice: "प्रत्येक साइटचे स्वतःचे पाणी कार्ड — ॲमेझॉन लखनऊने आज त्रेचाळीस पूर्णांक सात के एल घेतले — म्हणजे साइट्सची शेजारी तुलना होते.",
        },
        {
          label: 'झूम', title: 'चार्ट उघडा, कोणताही बिंदू वाचा',
          body: "कार्ड <strong>एक्स्पँड</strong> केल्यावर स्क्रीन भरते. बिंदूवर होव्हर केल्यावर कालावधी, मूल्य आणि <strong>ॲग्रिगेशन प्रकार</strong> — सकाळी 6:34 पर्यंत <strong>25.57 KL</strong> क्युम्युलेटिव्ह. ड्रॅग करून झूम करा, आणि <strong>रीसेट झूम</strong> पूर्ण कालावधी परत आणतो.",
          voice: "मोठे केल्यावर प्रत्येक बिंदू आपले मूल्य आणि ॲग्रिगेशन दाखवतो. ड्रॅग करून झूम करा, आणि रीसेट झूम परत आणतो.",
        },
        {
          label: 'टूल्स', title: 'डाउनलोड करा, किंवा पुन्हा काढा',
          body: "विजेटवर होव्हर करा: <strong>CSV डाउनलोड</strong>, <strong>एक्स्पँड</strong>, <strong>चार्ट निवडा</strong>, <strong>एडिट</strong> आणि <strong>माहिती</strong>. <strong>मेन्यू</strong> त्याला <strong>टेबल</strong> किंवा <strong>बार ग्राफ</strong> मध्ये बदलतो. कोणताही बदल <strong>सेव्ह करंट व्ह्यू</strong> देतो — <strong>सेव्ह</strong> किंवा <strong>सेव्ह ॲज</strong>.",
          voice: "प्रत्येक विजेट आपला डेटा सी एस व्ही मध्ये डाउनलोड करू शकतो, किंवा टेबल किंवा बार ग्राफ होऊ शकतो — मग व्ह्यू सेव्ह करा.",
        },
        {
          label: 'फ्लो', title: 'प्रत्येक फ्लो, तासानुसार',
          body: "<strong>इनलेट व आउटलेट (m3/hr)</strong> ॲमेझॉन लखनऊचे <strong>इनलेट</strong>, <strong>स्लज</strong>, <strong>गार्डन</strong>, <strong>UF</strong> आणि <strong>फ्लशिंग</strong> फ्लो एकत्र दाखवतो. खाली <strong>इनलेट अँड आउटलेट वॉटर क्वालिटी</strong> प्रत्येक साइटचा <strong>एरेशन DO</strong> त्याच्या मर्यादेसह दाखवते.",
          voice: "एका चार्टवर पाच फ्लो, तासानुसार. खाली प्रत्येक साइटचा एरेशन डी ओ, त्याच्या मर्यादेसह.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'प्रत्येक साइटचे स्टोअर',
          body: "<strong>इन्व्हेंटरी</strong> मध्ये प्रत्येक स्टोअरचा टॅब — <strong>ऑल स्टोअर</strong>, <strong>ॲमेझॉन लखनऊ स्टोअर</strong>, DEL-5, DEL-4, AMD-2, MBOX, DED इ. ॲमेझॉन लखनऊमध्ये <strong>12 वस्तू</strong> — HCL, पॉली, युरिया, DAP, कॉस्टिक, हायपो, क्लोरीन बॅलन्स, गूळ, pH व TDS किट — साठा, शेवटचा वापर, आणि <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित</strong> वापरासह. लाल खूण लक्ष देण्याच्या वस्तू दाखवते.",
          voice: "प्रत्येक साइटचे स्वतःचे स्टोअर आहे. प्रत्येक रसायन साठा आणि प्रत्यक्ष विरुद्ध अपेक्षित वापर दाखवते, आणि लाल खूण महत्त्वाचे दाखवते.",
        },
        {
          label: 'केमिकल लॉग', title: 'प्रत्येक रसायनाची नोंद',
          body: "वस्तू उघडल्यावर तिचा <strong>केमिकल लॉग</strong>: <strong>चालू शिल्लक</strong>, <strong>या महिन्याचा वापर</strong> आणि <strong>मागील महिन्याचा वापर</strong>, <strong>तारीख श्रेणी</strong>, आणि <strong>रिमार्क्स</strong> / <strong>अमाउंट</strong> फिल्टर. या कालावधीत कोणतीही नोंद नाही.",
          voice: "प्रत्येक वस्तूचा केमिकल लॉग आहे — शिल्लक, या आणि मागील महिन्याचा वापर — तारखेने फिल्टर. या कालावधीत अजून नोंद नाही.",
        },
        {
          label: 'तिकिटे', title: 'तिकिटे, मोजलेली आणि वर्गीकृत',
          body: "<strong>तिकिटे</strong> मध्ये <strong>47 उघडी</strong> (2 क्रिटिकल, 43 मुदत संपलेली, 43 एस्केलेटेड) आणि <strong>191 बंद</strong>, श्रेणीनुसार. प्रत्येक तिकीट आपला प्लांट सांगते — ॲमेझॉन MBOX वर <em>EQT टँक लेव्हल जास्त आहे</em>, ॲमेझॉन लखनऊ वर <em>स्लज ट्रान्सफर पंप ऑटो मोडमधून बाहेर</em> — <strong>एस्केलेशन लेव्हल 3</strong> पर्यंतच्या टॅगसह.",
          voice: "प्रत्येक साइटची तिकिटे एका यादीत — मोजलेली, श्रेणीत विभागलेली, आणि एस्केलेट झाल्यावर टॅग केलेली.",
        },
        {
          label: 'तिकीट', title: 'एका तिकिटाची संपूर्ण कथा',
          body: "तिकिटात प्लांट, <strong>समस्या</strong>, काय करायचे याचे <strong>वर्णन</strong>, <strong>उपकरण</strong> (इथे <strong>इक्वलायझेशन टँक</strong>) आणि श्रेणी. <strong>हिस्ट्री</strong> प्रत्येक घटना नोंदवते — तयार झाले, मुदत संपली, एस्केलेट झाले — टिप्पण्यांसह, आणि <strong>रिझॉल्व्ह</strong> ते बंद करते.",
          voice: "प्रत्येक तिकिटात समस्या, काय करायचे, उपकरण, आणि प्रत्येक एस्केलेशनचा इतिहास — मग रिझॉल्व्ह करा.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'प्लांट, थेट',
          body: "<strong>स्काडाव्ह्यू – ॲमेझॉन वर्कस्पेस</strong> प्रत्येक साइट टाइल म्हणून दाखवतो; <strong>ॲमेझॉन लखनऊ</strong> उघडल्यावर तिची <strong>लाइव्ह</strong> आकृती — बार स्क्रीन, ऑइल व ग्रीस ट्रॅप, इक्वलायझेशन, ॲनॉक्सिक व MBBR टँक, ट्यूब सेटलर, फिल्टर, UF आणि फिल्टर प्रेस. वेळ निवडून <strong>प्ले</strong>, <strong>ग्रुप कंट्रोल</strong> किंवा <strong>युनिट प्रोसेसेस</strong>, आणि झूम.",
          voice: "स्काडाव्ह्यू प्रत्येक साइट थेट आकृतीत उघडतो. कोणताही क्षण पुन्हा पाहा, ग्रुप कंट्रोल उघडा, आणि कुठेही झूम करा.",
        },
        {
          label: 'मेंटेनन्स', title: 'प्रत्येक बिघाड, नोंदीत',
          body: "<strong>ॲमेझॉन लखनऊ → मेंटेनन्स</strong> प्रत्येक मशीनची यादी — फिल्टर फीड, स्लज, UF फीड, सिंचन, फ्लशिंग आणि डोसिंग पंप, ब्लोअर. एक उघडल्यावर मेक, मॉडेल आणि प्रत्येक <strong>ब्रेकडाउन</strong> कृती, केव्हा आली आणि केव्हा पूर्ण झाली; पूर्ण मजकुरासाठी होव्हर, आणि टाइमलाइनसाठी <strong>सी हिस्ट्री</strong>.",
          voice: "मेंटेनन्स प्रत्येक मशीन आणि प्रत्येक बिघाड दाखवते — केव्हा आला, केव्हा दुरुस्त झाला, आणि त्याचा इतिहास.",
        },
        {
          label: 'ॲनालिटिक्स', title: 'तुमच्या ॲनालिटिक्सची पेजेस',
          body: "<strong>ॲमेझॉन लखनऊ ॲनालिटिक्स</strong> मध्ये अनेक पेजेस: <strong>डिटेल्ड व्ह्यू</strong>, <strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong>, <strong>क्वालिटी पॅरामीटर्स</strong>, <strong>इनलेट वॉटर व एनर्जी कन्झम्प्शन</strong>, <strong>इक्विपमेंट रनिंग स्टेटस</strong> आणि <strong>डिटेल्ड व्ह्यू मंथली</strong>.",
          voice: "तुमच्या ॲनालिटिक्समध्ये अनेक पेजेस आहेत — डिटेल्ड व्ह्यू, पाणी, गुणवत्ता, ऊर्जा, उपकरण, आणि मासिक व्ह्यू.",
        },
        {
          label: 'टँक', title: 'एका चार्टवर पाच टँक',
          body: "<strong>टँक लेव्हल (%)</strong> <strong>क्लिअर वॉटर टँक</strong>, <strong>EQT</strong>, <strong>UF प्रॉडक्ट टँक</strong>, <strong>ट्रीटेड वॉटर टँक</strong> आणि <strong>स्लज होल्डिंग टँक</strong> एकत्र दाखवतो — UF प्रॉडक्ट <strong>96.08%</strong>, स्लज होल्डिंग <strong>84.61%</strong>. लेजेंडमधून कोणताही टँक चालू/बंद करा.",
          voice: "एका चार्टवर पाच टँक लेव्हल. लेजेंडमधून कोणताही टँक वेगळा वाचा.",
        },
        {
          label: 'प्रमाण', title: 'प्रत्येक टँकमध्ये किती',
          body: "<strong>अदर फ्लो</strong> आणि <strong>बॅकवॉश फ्लो</strong> सिंचन, फ्लशिंग, UF आणि MGF-ACF बॅकवॉश दाखवतात. <strong>वॉटर व्हॉल्यूम इन टँक्स</strong> लेव्हलला क्षमतेसमोर प्रमाणात बदलतो — इक्वलायझेशन 100 पैकी <strong>39.26</strong> KL, ट्रीटेड वॉटर 40 पैकी <strong>18.67</strong> — शेजारी <strong>इनलेट फ्लो मीटर</strong> <strong>43.77 KL</strong>.",
          voice: "लेव्हल प्रमाण बनतात — प्रत्येक टँकमध्ये किती, त्याच्या क्षमतेसमोर — शेजारी इनलेट फ्लो मीटर.",
        },
        {
          label: 'गुणवत्ता', title: 'मर्यादेसमोर गुणवत्ता',
          body: "<strong>ट्रीटेड वॉटर टर्बिडिटी</strong> <strong>4.05 NTU</strong>, आपल्या हिरव्या मर्यादेत. <strong>क्वालिटी पॅरामीटर्स</strong> — इक्वलायझेशन व ट्रीटेड वॉटर <strong>pH</strong> आणि <strong>TDS</strong>, एरेशन टँक pH — या कालावधीत <strong>नो डेटा अव्हेलेबल</strong> दाखवतात.",
          voice: "ट्रीटेड वॉटर टर्बिडिटी चार पूर्णांक शून्य पाच आहे, मर्यादेत. पी एच आणि टी डी एस मध्ये या कालावधीचा डेटा नाही.",
        },
        {
          label: 'बायोलॉजी', title: 'बायोलॉजी कशी आहे',
          body: "<strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> <strong>एरेशन टँक DO</strong> (संदर्भ &lt;2 ppm) आणि <strong>MBBR टँकवरील VFD फ्रिक्वेन्सी</strong> (37.69) दाखवतो, सोबत <strong>स्लज सेटलिंग</strong>, <strong>MBBR pH</strong>, <strong>स्लज जनरेशन</strong> आणि <strong>एअर डिमांड</strong> कार्डे. मग <strong>सेफ्टी</strong> मध्ये <strong>फ्लडिंग सेन्सर</strong>.",
          voice: "बायोलॉजिकल हेल्थ एरेशन डी ओ, ब्लोअर फ्रिक्वेन्सी, गाळ आणि हवेची गरज ट्रॅक करते. सेफ्टी फ्लडिंग सेन्सरवर लक्ष ठेवते.",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, आणि प्रति KL ऊर्जा',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> या कालावधीत <strong>284.5 kW</strong> पर्यंत पोहोचले, आणि <strong>एनर्जी पर KL</strong> <strong>6.50</strong>.",
          voice: "ऊर्जा वापर दोनशे चौऱ्याऐंशी किलोवॅटपर्यंत पोहोचला, प्रति के एल सहा पूर्णांक पाच.",
        },
        {
          label: 'उपकरणे', title: 'प्रत्येक मशीनचा हिशोब',
          body: "<strong>इक्विपमेंट परफॉर्मन्स अँड मेंटेनन्स</strong> मध्ये <strong>चालू तास</strong> (रिॲक्टर फीड पंप-1 <strong>18.73</strong>), <strong>बार स्क्रीन चोकिंग</strong>, पंप ऑन/ऑफ आणि <strong>ब्लोअर हेडर प्रेशर</strong> (संदर्भ 0.6 kg/cm2, <strong>0.61</strong>) — मग ब्लोअर, MGF आणि UF प्रेशर, डोसिंग, <strong>ऑटो/मॅन्युअल स्टेटस</strong> आणि <strong>ट्रिप स्टेटस</strong>.",
          voice: "प्रत्येक मशीनचा हिशोब — चालू तास, ऑन-ऑफ, प्रेशर, ऑटो किंवा मॅन्युअल, आणि ट्रिप.",
        },
        {
          label: 'कालावधी', title: 'कोणताही कालावधी, कोणतेही रिझोल्यूशन',
          body: "प्रीसेट <strong>आज</strong> ते <strong>मागील 6 महिने</strong>, किंवा <strong>कस्टम</strong> तारखा, <strong>12</strong> किंवा <strong>24 तासांचे</strong> घड्याळ आणि <strong>स्मार्ट अवर्स</strong>. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते — <strong>मागील 30 दिवस</strong> साठी <strong>दिवस</strong> किंवा <strong>आठवडे</strong>. <strong>अप्लाय सिलेक्शन</strong>, मग <strong>सेव्ह करंट व्ह्यू</strong>.",
          voice: "प्रीसेट किंवा तुमच्या तारखा निवडा. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते, तासांपासून दिवस आणि आठवड्यांपर्यंत.",
        },
        {
          label: 'सारांश', title: 'कोणते पेज कोणत्या कामासाठी',
          body: "प्रत्येक साइटची तुलना करण्यासाठी <strong>डॅशबोर्ड</strong>. लक्ष देण्याच्या गोष्टींसाठी <strong>तिकिटे</strong>. रसायनांसाठी <strong>इन्व्हेंटरी</strong>. थेट प्रोसेससाठी <strong>स्काडाव्ह्यू</strong>. बिघाडांसाठी <strong>मेंटेनन्स</strong>. प्लांटच्या सखोल माहितीसाठी <strong>ॲमेझॉन लखनऊ ॲनालिटिक्स</strong>.",
          voice: "साइट्सची तुलना करण्यासाठी डॅशबोर्ड, महत्त्वाच्या गोष्टींसाठी तिकिटे, रसायनांसाठी इन्व्हेंटरी, थेट पाहण्यासाठी स्काडाव्ह्यू, बिघाडांसाठी मेंटेनन्स, आणि सखोल ॲनालिटिक्स.",
        },
      ],
    },
  },
};

export default lesson;
