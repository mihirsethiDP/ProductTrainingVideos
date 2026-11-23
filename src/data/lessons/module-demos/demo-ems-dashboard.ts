import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-ems-dashboard`;

/**
 * Demo — EMS Haridwar, platform tour.  (hidden module-demos)
 *
 * Built from the 4:38 recording uploaded 2026-11-23 (Content Studio job
 * 68cd6c16, "EMS Dashboard", demo_style=overview, no notes). "EMS" is the
 * plant: the page selector reads "EMS Haridwar", tickets say "Plant EMS",
 * inventory sits in "EMS Store" and the analytics page is "EMS Analytics".
 * New demo — no earlier EMS demo.
 *
 * The recording: Dashboard "EMS Haridwar" scrolled top to bottom (Map Widgets
 * and Tickets, Water Quantity, Inlet & Treated Water Quality, Bio Reactor
 * Analytics + Bio Health Tracker, Energy Consumption, Sludge Treatment) → side
 * menu → Inventory → Chemical Logs → Tickets (one ticket opened, history
 * expanded) → EMS → EMS Analytics (Site Summary, expanded Inlet Flow with
 * tooltip, chart menu Table / Bar Graph, Save Current View, Primary /
 * Secondary / Tertiary Unit, Sludge Dewatering, Energy, Trip Status) → range
 * preset list → range picker (12/24 hour, Smart Hours, Last 6 Months with
 * Weeks/Months) → Visualisation → ScadaView.
 *
 * Style: `overview` — one step per page or feature area, short voices.
 * Real 1280px frames; the baked OS cursor is erased from every one (delogo on
 * flat ground, same-frame clones along rows and card borders, cross-frame
 * patches where it sat on a label, a value or a tooltip).
 *
 * Judgement calls:
 *  - Several quality tables (collection, equalization, tube settler, clarifier,
 *    outlet) and Chemical Logs show "No data" in the recorded window; the copy
 *    says so rather than inventing values.
 *  - "Maintenance" under EMS is named in the menu step only — the recording
 *    never opens it.
 *  - The secondary-unit charts (MBBR DO, blower status, vibration, air flow)
 *    scroll past quickly; they share one step with the tertiary unit, shown
 *    on the frame where the secondary KPI tiles meet Tertiary Unit.
 *  - The preset dropdown and the custom range picker are one "Range" step on
 *    the picker frame, which shows the same presets as buttons.
 */
const lesson: Lesson = {
  id: 'demo-ems-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 7,
  estimatedMinutes: 3,
  expiresAt: '2026-12-23', // 30 days after the job's upload (2026-11-23) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    dash: `${BASE}/dash.jpg`,
    water: `${BASE}/water.jpg`,
    quality: `${BASE}/quality.jpg`,
    bio: `${BASE}/bio.jpg`,
    energy: `${BASE}/energy.jpg`,
    sludge: `${BASE}/sludge.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    chemlogs: `${BASE}/chemlogs.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticket: `${BASE}/ticket.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    expand: `${BASE}/expand.jpg`,
    table: `${BASE}/table.jpg`,
    primary: `${BASE}/primary.jpg`,
    secondary: `${BASE}/secondary.jpg`,
    dewatering: `${BASE}/dewatering.jpg`,
    power: `${BASE}/power.jpg`,
    custom: `${BASE}/custom.jpg`,
    scada: `${BASE}/scada.jpg`,
  },
  layouts: [
    // S1 — side menu
    {
      mode: 'detail', screenshot: 'nav', caption: 'Everything, one menu away',
      spotlight: { top: '9.8%', left: '0%', width: '15.5%', height: '48%' },
      cursor: [
        { at: 0, x: 5, y: 13 },
        { at: 0.15, x: 5, y: 19.8 },
        { at: 0.3, x: 5, y: 26.6 },
        { at: 0.45, x: 6, y: 33.6, click: true },
        { at: 0.6, x: 8, y: 40.4 },
        { at: 0.75, x: 9, y: 47.3 },
        { at: 0.9, x: 6, y: 54.2 },
      ],
    },
    // S2 — page controls
    {
      mode: 'detail', screenshot: 'dash', caption: 'The controls that drive the page',
      spotlight: { top: '10%', left: '1.4%', width: '97%', height: '22%' },
      cursor: [
        { at: 0, x: 11, y: 25.6 },
        { at: 0.2, x: 47.5, y: 25.6 },
        { at: 0.35, x: 56, y: 25.6 },
        { at: 0.5, x: 69, y: 25.6 },
        { at: 0.6, x: 85, y: 25.6 },
        { at: 0.75, x: 75.8, y: 14 },
        { at: 0.85, x: 80.8, y: 14 },
        { at: 0.95, x: 95.8, y: 14 },
      ],
    },
    // S3 — Map Widget + Manual Tickets
    {
      mode: 'detail', screenshot: 'dash', caption: 'The plant on a map, with its tickets',
      spotlight: { top: '41.7%', left: '1.4%', width: '97%', height: '58%' },
      cursor: [
        { at: 0, x: 27, y: 79 },
        { at: 0.2, x: 42, y: 44.6 },
        { at: 0.4, x: 60, y: 58 },
        { at: 0.55, x: 60, y: 67 },
        { at: 0.7, x: 60, y: 76 },
        { at: 0.9, x: 94.5, y: 44 },
      ],
    },
    // S4 — Water Quantity
    {
      mode: 'detail', screenshot: 'water', caption: 'How much water came in',
      spotlight: { top: '34.9%', left: '1.4%', width: '31.8%', height: '33%' },
      cursor: [
        { at: 0, x: 9, y: 48.6 },
        { at: 0.45, x: 24.5, y: 49 },
        { at: 0.85, x: 15, y: 64 },
      ],
    },
    // S5 — Inlet & Treated Water Quality
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, tank by tank',
      spotlight: { top: '28%', left: '1.4%', width: '97%', height: '68.5%' },
      cursor: [
        { at: 0, x: 12, y: 31 },
        { at: 0.15, x: 45, y: 31 },
        { at: 0.3, x: 78, y: 31 },
        { at: 0.45, x: 12, y: 66 },
        { at: 0.6, x: 45, y: 66 },
        { at: 0.8, x: 78, y: 74.5 },
      ],
    },
    // S6 — Bio Reactor Analytics
    {
      mode: 'detail', screenshot: 'bio', caption: 'The biology, at a glance',
      spotlight: { top: '17.5%', left: '1.4%', width: '80.5%', height: '82%' },
      cursor: [
        { at: 0, x: 9, y: 31 },
        { at: 0.12, x: 25, y: 31 },
        { at: 0.25, x: 57, y: 31 },
        { at: 0.38, x: 73.5, y: 31 },
        { at: 0.52, x: 32, y: 55.4 },
        { at: 0.62, x: 45.7, y: 55.4 },
        { at: 0.75, x: 8, y: 75 },
        { at: 0.9, x: 74, y: 67 },
      ],
    },
    // S7 — Energy Consumption
    {
      mode: 'detail', screenshot: 'energy', caption: 'Every meter, one row',
      spotlight: { top: '31%', left: '1.4%', width: '97%', height: '69%' },
      cursor: [
        { at: 0, x: 15, y: 68 },
        { at: 0.15, x: 41.5, y: 45 },
        { at: 0.3, x: 57.8, y: 45 },
        { at: 0.42, x: 74, y: 45 },
        { at: 0.54, x: 90, y: 45 },
        { at: 0.68, x: 41.5, y: 80 },
        { at: 0.8, x: 57.8, y: 80 },
        { at: 0.92, x: 74, y: 80 },
      ],
    },
    // S8 — Sludge Treatment
    {
      mode: 'detail', screenshot: 'sludge', caption: 'Sludge, machines and automation',
      spotlight: { top: '30%', left: '1.4%', width: '64.3%', height: '68.5%' },
      cursor: [
        { at: 0, x: 8.6, y: 43 },
        { at: 0.15, x: 24.5, y: 43 },
        { at: 0.3, x: 50, y: 44.4 },
        { at: 0.42, x: 50, y: 57 },
        { at: 0.56, x: 9, y: 79 },
        { at: 0.7, x: 41.5, y: 79 },
        { at: 0.88, x: 58, y: 83 },
      ],
    },
    // S9 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Stock and consumption',
      spotlight: { top: '28.5%', left: '1.4%', width: '97%', height: '50%' },
      cursor: [
        { at: 0, x: 30, y: 21 },
        { at: 0.12, x: 91, y: 21 },
        { at: 0.26, x: 4, y: 51 },
        { at: 0.38, x: 19, y: 51 },
        { at: 0.5, x: 41, y: 51 },
        { at: 0.64, x: 54, y: 50 },
        { at: 0.78, x: 78, y: 50 },
        { at: 0.9, x: 91, y: 50 },
      ],
    },
    // S10 — Chemical Logs
    {
      mode: 'detail', screenshot: 'chemlogs', caption: 'Every chemical movement, logged',
      spotlight: { top: '16%', left: '1.4%', width: '97%', height: '61%' },
      cursor: [
        { at: 0, x: 4, y: 11.5 },
        { at: 0.12, x: 60, y: 18 },
        { at: 0.25, x: 12.5, y: 28.5 },
        { at: 0.38, x: 38, y: 28.5 },
        { at: 0.5, x: 62, y: 28.5 },
        { at: 0.64, x: 13, y: 39 },
        { at: 0.78, x: 13, y: 64 },
        { at: 0.9, x: 62.6, y: 49.5 },
      ],
    },
    // S11 — Tickets
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Tickets, counted and sorted',
      spotlight: { top: '18%', left: '1.4%', width: '97%', height: '16.5%' },
      cursor: [
        { at: 0, x: 13, y: 27 },
        { at: 0.25, x: 42, y: 27 },
        { at: 0.45, x: 66, y: 25 },
        { at: 0.65, x: 88, y: 25 },
        { at: 0.85, x: 20, y: 42, click: true },
      ],
    },
    // S12 — one ticket
    {
      mode: 'detail', screenshot: 'ticket', caption: 'The full story of a ticket',
      spotlight: { top: '12.2%', left: '9%', width: '81.6%', height: '75%' },
      cursor: [
        { at: 0, x: 27, y: 17.6 },
        { at: 0.1, x: 15, y: 25 },
        { at: 0.22, x: 20, y: 33 },
        { at: 0.34, x: 22, y: 59 },
        { at: 0.46, x: 32, y: 71 },
        { at: 0.6, x: 55, y: 41.5 },
        { at: 0.74, x: 68, y: 52 },
        { at: 0.9, x: 87, y: 82 },
      ],
    },
    // S13 — EMS Analytics, Site Summary
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Your analytics page',
      spotlight: { top: '34%', left: '1.4%', width: '97%', height: '58.5%' },
      cursor: [
        { at: 0, x: 11, y: 25.6 },
        { at: 0.15, x: 12, y: 43 },
        { at: 0.3, x: 34, y: 43 },
        { at: 0.45, x: 45, y: 43 },
        { at: 0.6, x: 62, y: 43 },
        { at: 0.75, x: 80.5, y: 54 },
        { at: 0.9, x: 92, y: 54 },
      ],
    },
    // S14 — expanded chart
    {
      mode: 'detail', screenshot: 'expand', caption: 'Open a chart, read any point',
      spotlight: { top: '14%', left: '4.7%', width: '90.3%', height: '71%' },
      cursor: [
        { at: 0, x: 45, y: 16.6 },
        { at: 0.15, x: 46, y: 24.7 },
        { at: 0.35, x: 45.3, y: 53 },
        { at: 0.55, x: 53, y: 53 },
        { at: 0.75, x: 87, y: 16.6 },
        { at: 0.9, x: 91, y: 31.7 },
      ],
    },
    // S15 — Table view + Save Current View
    {
      mode: 'detail', screenshot: 'table', caption: 'Chart, table or bars — then save it',
      spotlight: { top: '40.7%', left: '26.2%', width: '23.5%', height: '51.2%' },
      cursor: [
        { at: 0, x: 48.6, y: 43, click: true },
        { at: 0.25, x: 38, y: 69 },
        { at: 0.45, x: 48, y: 69 },
        { at: 0.7, x: 77, y: 94.5 },
        { at: 0.88, x: 87, y: 94.5 },
      ],
    },
    // S16 — Primary Unit
    {
      mode: 'detail', screenshot: 'primary', caption: 'Primary unit, chart by chart',
      spotlight: { top: '9%', left: '1.7%', width: '96.3%', height: '89%' },
      cursor: [
        { at: 0, x: 13, y: 30 },
        { at: 0.12, x: 37, y: 30 },
        { at: 0.24, x: 61, y: 30 },
        { at: 0.36, x: 85, y: 30 },
        { at: 0.5, x: 13, y: 75 },
        { at: 0.62, x: 37, y: 75 },
        { at: 0.74, x: 61, y: 75 },
        { at: 0.86, x: 85, y: 75 },
      ],
    },
    // S17 — Secondary KPIs + Tertiary Unit
    {
      mode: 'detail', screenshot: 'secondary', caption: 'Secondary and tertiary',
      spotlight: { top: '7.6%', left: '1.7%', width: '90%', height: '52%' },
      cursor: [
        { at: 0, x: 24, y: 30 },
        { at: 0.12, x: 51, y: 22 },
        { at: 0.22, x: 63, y: 22 },
        { at: 0.32, x: 75, y: 22 },
        { at: 0.42, x: 87, y: 22 },
        { at: 0.52, x: 51, y: 45 },
        { at: 0.62, x: 87, y: 45 },
        { at: 0.76, x: 7, y: 64 },
        { at: 0.9, x: 13, y: 80 },
      ],
    },
    // S18 — Sludge Dewatering Unit
    {
      mode: 'detail', screenshot: 'dewatering', caption: 'Sludge dewatering',
      spotlight: { top: '25.8%', left: '1.7%', width: '96.3%', height: '58%' },
      cursor: [
        { at: 0, x: 9, y: 27.8 },
        { at: 0.2, x: 13, y: 55 },
        { at: 0.4, x: 37, y: 55 },
        { at: 0.6, x: 61, y: 55 },
        { at: 0.8, x: 85, y: 55 },
      ],
    },
    // S19 — Energy, running hours, trips
    {
      mode: 'detail', screenshot: 'power', caption: 'Energy, and what ran',
      spotlight: { top: '44.4%', left: '1.7%', width: '96.3%', height: '55.6%' },
      cursor: [
        { at: 0, x: 12, y: 72 },
        { at: 0.2, x: 37, y: 72 },
        { at: 0.4, x: 61, y: 72 },
        { at: 0.6, x: 85, y: 60 },
        { at: 0.8, x: 85, y: 72 },
      ],
    },
    // S20 — range picker
    {
      mode: 'detail', screenshot: 'custom', caption: 'Any window, any resolution',
      spotlight: { top: '6%', left: '13.9%', width: '71.9%', height: '84.5%' },
      cursor: [
        { at: 0, x: 61, y: 15.6 },
        { at: 0.1, x: 56.8, y: 22.2, click: true },
        { at: 0.2, x: 20, y: 23.9 },
        { at: 0.28, x: 30, y: 23.9 },
        { at: 0.36, x: 30, y: 30.8 },
        { at: 0.46, x: 18, y: 41 },
        { at: 0.58, x: 19, y: 61.7 },
        { at: 0.68, x: 19, y: 67.6 },
        { at: 0.78, x: 55, y: 57 },
        { at: 0.9, x: 77.7, y: 85.4 },
      ],
    },
    // S21 — ScadaView
    {
      mode: 'detail', screenshot: 'scada', caption: 'The plant, live',
      spotlight: { top: '15.2%', left: '1.4%', width: '97%', height: '83.4%' },
      cursor: [
        { at: 0, x: 11.5, y: 18 },
        { at: 0.12, x: 56, y: 18 },
        { at: 0.22, x: 65, y: 18 },
        { at: 0.32, x: 71.5, y: 18 },
        { at: 0.42, x: 80.5, y: 18 },
        { at: 0.52, x: 91, y: 18 },
        { at: 0.7, x: 50, y: 55 },
        { at: 0.88, x: 91, y: 83 },
      ],
    },
    // S22 — wrap
    {
      mode: 'detail', screenshot: 'nav', caption: 'Which page for which job',
      spotlight: { top: '9.8%', left: '0%', width: '15.5%', height: '48%' },
      cursor: [
        { at: 0, x: 5, y: 13 },
        { at: 0.25, x: 5, y: 19.8 },
        { at: 0.45, x: 5, y: 26.6 },
        { at: 0.65, x: 9, y: 47.3 },
        { at: 0.85, x: 6, y: 54.2 },
      ],
    },
  ],
  content: {
    en: {
      title: 'EMS Haridwar,<br><em>the whole plant in one place.</em>',
      subtitle:
        'A quick tour of your platform — dashboard, inventory, chemical logs, tickets, EMS Analytics and ScadaView — and how to move between them.',
      chapter: 'Demo · EMS Haridwar',
      steps: [
        {
          label: 'Navigate', title: 'Everything, one menu away',
          body: "The <strong>menu icon</strong> opens the side navigation: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Tickets</strong>, <strong>EMS</strong> (with <strong>Maintenance</strong> and <strong>EMS Analytics</strong> inside) and <strong>Visualisation</strong>, which holds <strong>ScadaView – EMS Haridwar Workspace</strong>. The search box at the top finds any page by name.",
          voice: "The menu icon opens every page — the dashboard, inventory, tickets, EMS Analytics under EMS, and ScadaView under Visualisation.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "The dashboard opens on the <strong>EMS Haridwar</strong> page. <strong>Granularity</strong> (here <strong>Days</strong>), the preset <strong>Last 24 Hours</strong> and the <strong>From</strong> / <strong>To</strong> dates drive every widget below. Top right: <strong>refresh</strong>, <strong>download</strong>, <strong>settings</strong>, <strong>layout</strong> and <strong>share</strong>.",
          voice: "The page selector, granularity and date range drive every widget. Refresh, download, settings and share sit top right.",
        },
        {
          label: 'Map & tickets', title: 'The plant on a map, with its tickets',
          body: "<strong>Map Widgets and Tickets</strong> pins the plant on a map with its <strong>Plant Automation (%)</strong> — <strong>79.4</strong> — and lists <strong>Manual Tickets</strong> beside it: <em>DO in Aeration Tank</em>, <em>DO in MBBR-2</em> and <em>DO in MBBR-1 is equal to or below 1</em>, each a <strong>Plant process issue</strong>. The card's icons add, download, link or edit tickets.",
          voice: "A map pins the plant with its automation score of seventy-nine, next to the open manual tickets — here, low D O in the aeration tank and both MBBRs.",
        },
        {
          label: 'Water', title: 'How much water came in',
          body: "<strong>Water Quantity (KL)</strong> shows <strong>Inlet Flow – Collection to EQT-1</strong> at <strong>8913.89 KL</strong> (down <strong>6%</strong> on the previous period) and <strong>Inlet Flow – EQT to MBBR-1</strong> at <strong>9060.96 KL</strong>. The band at the bottom shows the window each number covers.",
          voice: "Water quantity shows the inlet flow into equalization and on to MBBR-1 — about nine thousand K L each — with the change from the previous period.",
        },
        {
          label: 'Quality', title: 'Quality, tank by tank',
          body: "<strong>Inlet &amp; Treated Water Quality</strong> groups parameters by stage: <strong>Collection Tank</strong>, <strong>Equalization Tank</strong>, <strong>Primary Tubesettler</strong>, <strong>Secondary Clarifier</strong> and <strong>Outlet</strong> (pH, TDS, COD, BOD, TSS — no lab entries in this window), plus live <strong>OCEMS Sensor Data</strong>: treated water COD <strong>0.00</strong>, BOD <strong>0.00</strong>, pH <strong>7.79</strong> and TSS <strong>0.00</strong>, each against its reference.",
          voice: "Quality is grouped stage by stage, from the collection tank to the outlet, with live OCEMS readings — treated water pH seven point seven nine.",
        },
        {
          label: 'Biology', title: 'The biology, at a glance',
          body: "<strong>Bio Reactor Analytics</strong> shows <strong>MBBR-2 DO</strong> <strong>2.04</strong>, <strong>MBBR-1 DO</strong> <strong>0.45</strong>, <strong>Actual Air Supply to MBBR-1</strong> <strong>3725 KL/H</strong>, <strong>Expected Air Demand</strong>, <strong>F/M Ratio</strong> (ref. 0.2–0.5) and <strong>COD Loading Rate</strong>. Below, the <strong>Bio Health Tracker</strong> plots the <strong>Sludge Settling Pattern</strong> of a sample, and <strong>Sludge Age</strong> (2.5–10 days) sits alongside.",
          voice: "Bio reactor analytics shows D O in both MBBRs, the air supplied, and the F by M ratio. The bio health tracker plots how a sample of sludge settles.",
        },
        {
          label: 'Energy', title: 'Every meter, one row',
          body: "<strong>Energy Consumption</strong> trends the total — <strong>7230</strong> — and breaks it down by meter: <strong>MCCB Panel-2 (UPPC-3)</strong> <strong>4.95</strong>, <strong>MCCB Panel (UPPC-1)</strong> <strong>2.28</strong>, <strong>MCCB Panel-3 (UPPC-4)</strong> and <strong>DG Meter (UPPC-2)</strong> at <strong>0</strong>. <strong>Energy Per KL</strong> is <strong>0.81</strong> against a baseline of <strong>0.96</strong>.",
          voice: "Energy is split meter by meter — every MCCB panel and the D G meter — and energy per K L is zero point eight one, under its baseline.",
        },
        {
          label: 'Sludge', title: 'Sludge, machines and automation',
          body: "<strong>Sludge Treatment</strong> tracks <strong>Expected</strong> and <strong>Actual Sludge Wasting</strong>, machine running hours (<strong>Screw Press</strong> <strong>17.53</strong>, <strong>Centrifuge-1</strong> and <strong>-2</strong> at 0), <strong>Sludge Generation Per KL</strong> <strong>0.24</strong> and <strong>Actual Solid Sludge Generation</strong> <strong>772.4 kg/day</strong>. The gauge shows <strong>Automation Success</strong> at <strong>79.85%</strong>.",
          voice: "Sludge treatment tracks wasting, screw press and centrifuge hours, and sludge generated — with automation success at nearly eighty percent.",
        },
        {
          label: 'Inventory', title: 'Stock and consumption',
          body: "<strong>Inventory</strong> lists each item with its <strong>Store</strong> (<strong>EMS Store</strong>), <strong>Category</strong>, <strong>Stock Available</strong>, <strong>Last Consumption</strong> and <strong>Actual</strong> vs <strong>Expected</strong> consumption — here <strong>Poly</strong> (Chemicals, <strong>23 Kg</strong>), <strong>V BELT</strong> and <strong>Disc Diffusers</strong>. A red warning flags low stock; search and filter sit on top.",
          voice: "Inventory shows every item in the EMS store, with stock, last consumption, and actual against expected use. Red flags mark low stock.",
        },
        {
          label: 'Chemical logs', title: 'Every chemical movement, logged',
          body: "<strong>Store Details › Chemical Logs</strong> switches between <strong>All Asset</strong> and <strong>EMS</strong>. Pick a chemical under <strong>Solutions</strong> to see its <strong>Current Balance</strong> (<strong>23 kg</strong>), <strong>Current Month</strong> and <strong>Last Month Usage</strong>, then filter the log by <strong>Date</strong>, <strong>Remarks</strong> or <strong>Amount</strong>. No movements were logged in this window.",
          voice: "Chemical logs show each chemical's balance and monthly usage, with a dated log you can filter by remarks or amount.",
        },
        {
          label: 'Tickets', title: 'Tickets, counted and sorted',
          body: "<strong>Tickets</strong> counts <strong>4 Open</strong> (3 overdue, 3 escalated) and <strong>16 Closed</strong>, and splits both by category — Admin, Electrical, Lab, <strong>Process</strong>, Dp System, Mechanical. Each row carries its tags (<em>normal</em>, <em>automatic</em>, <em>overdue</em>, <em>Escalation Level</em>), creation time, category and plant. <strong>Create New Ticket</strong> sits top right.",
          voice: "Tickets counts what's open and closed, split by category. Every row shows its tags, escalation level and when it was raised.",
        },
        {
          label: 'Ticket', title: 'The full story of a ticket',
          body: "A ticket opens with when it was created, the plant, the <strong>problem</strong> — <em>DO in MBBR-1 is equal to or below 1</em> — and a <strong>description</strong> of the likely cause: too much organic loading or poor blower / diffuser performance. The <strong>History</strong> records every event — raised, marked overdue, escalated — takes comments, and <strong>Resolve</strong> closes it.",
          voice: "Each ticket keeps the problem, the likely cause, and a full history you can comment on — then resolve it.",
        },
        {
          label: 'Analytics', title: 'Your analytics page',
          body: "<strong>EMS › EMS Analytics</strong> opens on <strong>Site Summary</strong>: <strong>Outlet Parameters – Manual Input</strong>, <strong>Inlet Flow (KLD) – MBBR Inlet</strong> (<strong>9082.63</strong>), <strong>Total Energy Consumption</strong> (<strong>7230 kWh/day</strong>), <strong>Inlet flow – Collection Outlet</strong> <strong>8911.91</strong> and <strong>Energy Per KL</strong> <strong>0.81</strong>. Hover a chart for its tools: download, expand, chart type, edit and info.",
          voice: "EMS Analytics opens on the site summary — outlet quality, inlet flow, total energy and energy per K L. Hover any chart for its tools.",
        },
        {
          label: 'Zoom', title: 'Open a chart, read any point',
          body: "<strong>Expand</strong> fills the screen. Hover a point for its window, value and <strong>Aggregation Type</strong> — here <strong>3959.08</strong> for 01:54–02:54 am, cumulative. Click the legend to hide a series, drag to zoom, and <strong>Reset Zoom</strong> returns.",
          voice: "Expanded, every point shows its time window, value and aggregation. Drag to zoom in, and reset zoom to come back.",
        },
        {
          label: 'Views', title: 'Chart, table or bars — then save it',
          body: "Each chart's menu switches it to a <strong>Table</strong> or a <strong>Bar Graph</strong> — here Inlet Flow becomes a one-line table, <strong>MBBR Inlet 1</strong> <strong>9082.63</strong>. As soon as the page changes, a <strong>Save Current View</strong> bar appears: <strong>Save</strong> keeps it, <strong>Save As</strong> makes a new view, <strong>Cancel</strong> drops it.",
          voice: "Any chart can switch to a table or a bar graph. Then save current view keeps the page the way you like it.",
        },
        {
          label: 'Primary', title: 'Primary unit, chart by chart',
          body: "<strong>Primary Unit</strong> follows the front of the plant: <strong>Inlet flow – Collection outlet</strong>, <strong>Collection to EQT-1</strong> and <strong>EQT to MBBR-1</strong> flows, <strong>Level of Primary Tanks</strong>, <strong>Bar Screen Choking</strong>, <strong>EQT Blower Operating Status</strong> and the <strong>Equalization blower vent valve</strong> — then blower vibration and tank quality tables below.",
          voice: "The primary unit charts inlet flows, tank levels, bar screen choking, and the equalization blowers and their vent valve.",
        },
        {
          label: 'Secondary', title: 'Secondary and tertiary',
          body: "<strong>Secondary Unit</strong> charts MBBR DO, blower running status, vibration and air flow, then the <strong>Aeration Tank Blower-1 VFD</strong> (frequency, current, RPM <strong>1350</strong>) and KPI tiles: <strong>MBBR-1 Retention Time</strong> <strong>2.03</strong>, <strong>Delta BOD</strong> <strong>514</strong>, <strong>Retention time in Aeration Tank</strong> <strong>6.83</strong>, COD loading, F/M ratio and air demand. <strong>Tertiary Unit</strong> follows with pressure across <strong>Filter Sets 1–3</strong> and <strong>Level of Final Tank</strong>.",
          voice: "The secondary unit covers the MBBRs, blowers and their V F D, with retention-time tiles. Tertiary shows filter pressures and the final tank level.",
        },
        {
          label: 'Dewatering', title: 'Sludge dewatering',
          body: "<strong>Sludge Dewatering Unit</strong> charts the <strong>Screw Press Flow</strong> (<strong>1.42 KL/hour</strong>), <strong>Screw Press Inlet Flow</strong> (<strong>34.26 KLD</strong>), <strong>Screw Press Machine</strong> running and agitator status and the <strong>Screw Poly Feed Pump</strong> — then the sludge feed pump, centrifuge machine, centrifuge poly and feed pumps, and the load cell totalizer.",
          voice: "The dewatering unit tracks the screw press — its flows, running status and poly feed pump — and the centrifuge line below it.",
        },
        {
          label: 'Power', title: 'Energy, and what ran',
          body: "The analytics page's <strong>Energy Consumption</strong> section splits energy <strong>by each meter</strong>, totals it (<strong>7230</strong>), charts the <strong>Blower Panel Meter</strong> (<strong>3.54 MW</strong>) and lists <strong>Equipment Running Hours</strong> — Equalization Blower-1 <strong>9.98</strong>, Aeration Blower-1 <strong>15.93</strong> and the rest. Below, <strong>Trip Status</strong> shows every blower at <strong>0</strong> trips.",
          voice: "Energy is broken down by meter, with each machine's running hours — and trip status shows no trips in this window.",
        },
        {
          label: 'Range', title: 'Any window, any resolution',
          body: "The range picker offers <strong>Today</strong> through <strong>Last 6 Months</strong> or <strong>Custom</strong>, <strong>From</strong> / <strong>To</strong> times on a <strong>12</strong> or <strong>24 hour</strong> clock, and <strong>Smart Hours</strong> to repeat a daily time slot. Granularity follows the window — <strong>Hours</strong> or <strong>Days</strong> for short ranges, <strong>Weeks</strong> or <strong>Months</strong> for <strong>Last 6 Months</strong>. <strong>Apply Selection</strong> redraws every chart.",
          voice: "Pick a preset or custom dates. Granularity follows the window — weeks or months for six months — and apply redraws every chart.",
        },
        {
          label: 'ScadaView', title: 'The plant, live',
          body: "<strong>Visualisation › ScadaView</strong> draws EMS Haridwar as a <strong>LIVE</strong> process diagram — collection tank, bar screen, oil &amp; grease trap, equalization, tube settlers, MBBRs, aeration tank, secondary clarifiers, filter feed tank, PSF and ACF filters, clear water tank and the screw press. Pick a time and press <strong>play</strong> to replay it, open <strong>Group Control</strong> or <strong>Unit Processes</strong>, and zoom with the controls bottom right.",
          voice: "ScadaView shows the whole plant live. Replay any moment, open group control or unit processes, and zoom in anywhere.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "<strong>Dashboard</strong> for the daily picture. <strong>Inventory</strong> and <strong>Chemical Logs</strong> for stock. <strong>Tickets</strong> for what needs attention. <strong>EMS Analytics</strong> for unit-by-unit trends. <strong>ScadaView</strong> for the live process.",
          voice: "Dashboard for the daily picture, inventory for stock, tickets for what needs attention, EMS Analytics for trends, and ScadaView live.",
        },
      ],
    },
    hi: {
      title: 'ईएमएस हरिद्वार,<br><em>पूरा प्लांट एक जगह।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का एक छोटा दौरा — डैशबोर्ड, इन्वेंटरी, केमिकल लॉग, टिकट, ईएमएस एनालिटिक्स और स्काडाव्यू — और इनके बीच कैसे जाएँ।',
      chapter: 'डेमो · ईएमएस हरिद्वार',
      steps: [
        {
          label: 'नेविगेशन', title: 'सब कुछ, एक मेन्यू दूर',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है: <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>टिकट</strong>, <strong>EMS</strong> (अंदर <strong>मेंटेनेंस</strong> और <strong>EMS एनालिटिक्स</strong>) और <strong>विज़ुअलाइज़ेशन</strong>, जिसमें <strong>स्काडाव्यू – EMS हरिद्वार वर्कस्पेस</strong> है। ऊपर का सर्च बॉक्स नाम से कोई भी पेज ढूँढता है।",
          voice: "मेन्यू आइकन हर पेज खोलता है — डैशबोर्ड, इन्वेंटरी, टिकट, ई एम एस के अंदर एनालिटिक्स, और विज़ुअलाइज़ेशन के अंदर स्काडाव्यू।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "डैशबोर्ड <strong>EMS हरिद्वार</strong> पेज पर खुलता है। <strong>ग्रैन्युलैरिटी</strong> (यहाँ <strong>दिन</strong>), <strong>पिछले 24 घंटे</strong> और <strong>से</strong> / <strong>तक</strong> की तारीखें नीचे के हर विजेट को चलाती हैं। ऊपर दाईं ओर: <strong>रिफ़्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्स</strong>, <strong>लेआउट</strong> और <strong>शेयर</strong>।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा हर विजेट को चलाते हैं। रिफ़्रेश, डाउनलोड, सेटिंग्स और शेयर ऊपर दाईं ओर हैं।",
        },
        {
          label: 'मैप और टिकट', title: 'मैप पर प्लांट, अपने टिकटों के साथ',
          body: "<strong>मैप विजेट्स एंड टिकट्स</strong> प्लांट को मैप पर उसके <strong>प्लांट ऑटोमेशन (%)</strong> — <strong>79.4</strong> — के साथ दिखाता है, और बगल में <strong>मैनुअल टिकट</strong>: <em>एरेशन टैंक में DO</em>, <em>MBBR-2 में DO</em> और <em>MBBR-1 में DO 1 या उससे कम</em>, हर एक <strong>प्लांट प्रोसेस इश्यू</strong>। कार्ड के आइकन टिकट जोड़ते, डाउनलोड, लिंक या एडिट करते हैं।",
          voice: "मैप प्लांट को उसके उनासी प्रतिशत ऑटोमेशन स्कोर के साथ दिखाता है, बगल में खुले मैनुअल टिकट — यहाँ एरेशन टैंक और दोनों एम बी बी आर में कम डी ओ।",
        },
        {
          label: 'पानी', title: 'कितना पानी आया',
          body: "<strong>वॉटर क्वांटिटी (KL)</strong> में <strong>इनलेट फ़्लो – कलेक्शन से EQT-1</strong> <strong>8913.89 KL</strong> (पिछली अवधि से <strong>6%</strong> कम) और <strong>इनलेट फ़्लो – EQT से MBBR-1</strong> <strong>9060.96 KL</strong> है। नीचे की पट्टी बताती है कि हर संख्या किस अवधि की है।",
          voice: "वॉटर क्वांटिटी इक्वलाइज़ेशन और फिर एम बी बी आर-1 में आने वाला इनलेट फ़्लो दिखाती है — हर एक लगभग नौ हज़ार के एल — पिछली अवधि से बदलाव के साथ।",
        },
        {
          label: 'गुणवत्ता', title: 'टैंक दर टैंक गुणवत्ता',
          body: "<strong>इनलेट और ट्रीटेड वॉटर क्वालिटी</strong> पैरामीटर को चरण के हिसाब से रखती है: <strong>कलेक्शन टैंक</strong>, <strong>इक्वलाइज़ेशन टैंक</strong>, <strong>प्राइमरी ट्यूबसेटलर</strong>, <strong>सेकेंडरी क्लैरिफ़ायर</strong> और <strong>आउटलेट</strong> (pH, TDS, COD, BOD, TSS — इस अवधि में कोई लैब एंट्री नहीं), साथ में लाइव <strong>OCEMS सेंसर डेटा</strong>: ट्रीटेड वॉटर COD <strong>0.00</strong>, BOD <strong>0.00</strong>, pH <strong>7.79</strong> और TSS <strong>0.00</strong>, हर एक अपने रेफ़रेंस के साथ।",
          voice: "गुणवत्ता कलेक्शन टैंक से आउटलेट तक चरण दर चरण है, साथ में लाइव ओ सी ई एम एस रीडिंग — ट्रीटेड पानी का पी एच सात दशमलव सात नौ।",
        },
        {
          label: 'बायोलॉजी', title: 'एक नज़र में बायोलॉजी',
          body: "<strong>बायो रिएक्टर एनालिटिक्स</strong> में <strong>MBBR-2 DO</strong> <strong>2.04</strong>, <strong>MBBR-1 DO</strong> <strong>0.45</strong>, <strong>MBBR-1 को वास्तविक एयर सप्लाई</strong> <strong>3725 KL/H</strong>, <strong>अपेक्षित एयर डिमांड</strong>, <strong>F/M रेशियो</strong> (रेफ़. 0.2–0.5) और <strong>COD लोडिंग रेट</strong> हैं। नीचे <strong>बायो हेल्थ ट्रैकर</strong> एक सैंपल का <strong>स्लज सेटलिंग पैटर्न</strong> दिखाता है, और बगल में <strong>स्लज एज</strong> (2.5–10 दिन)।",
          voice: "बायो रिएक्टर एनालिटिक्स दोनों एम बी बी आर का डी ओ, दी गई हवा और एफ बाय एम रेशियो दिखाता है। बायो हेल्थ ट्रैकर दिखाता है कि स्लज कैसे बैठता है।",
        },
        {
          label: 'ऊर्जा', title: 'हर मीटर, एक पंक्ति में',
          body: "<strong>एनर्जी कंज़म्प्शन</strong> कुल — <strong>7230</strong> — का ट्रेंड दिखाता है और मीटर के हिसाब से बाँटता है: <strong>MCCB पैनल-2 (UPPC-3)</strong> <strong>4.95</strong>, <strong>MCCB पैनल (UPPC-1)</strong> <strong>2.28</strong>, <strong>MCCB पैनल-3 (UPPC-4)</strong> और <strong>DG मीटर (UPPC-2)</strong> <strong>0</strong>। <strong>एनर्जी प्रति KL</strong> <strong>0.81</strong> है, बेसलाइन <strong>0.96</strong>।",
          voice: "ऊर्जा मीटर दर मीटर बँटी है — हर एम सी सी बी पैनल और डी जी मीटर — और प्रति के एल ऊर्जा शून्य दशमलव आठ एक है, बेसलाइन से कम।",
        },
        {
          label: 'स्लज', title: 'स्लज, मशीनें और ऑटोमेशन',
          body: "<strong>स्लज ट्रीटमेंट</strong> <strong>अपेक्षित</strong> और <strong>वास्तविक स्लज वेस्टिंग</strong>, मशीन रनिंग घंटे (<strong>स्क्रू प्रेस</strong> <strong>17.53</strong>, <strong>सेंट्रीफ़्यूज-1</strong> और <strong>-2</strong> पर 0), <strong>प्रति KL स्लज जनरेशन</strong> <strong>0.24</strong> और <strong>वास्तविक सॉलिड स्लज जनरेशन</strong> <strong>772.4 kg/दिन</strong> ट्रैक करता है। गेज <strong>ऑटोमेशन सक्सेस</strong> <strong>79.85%</strong> दिखाता है।",
          voice: "स्लज ट्रीटमेंट वेस्टिंग, स्क्रू प्रेस और सेंट्रीफ़्यूज के घंटे, और बना स्लज ट्रैक करता है — ऑटोमेशन सक्सेस लगभग अस्सी प्रतिशत।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टॉक और खपत',
          body: "<strong>इन्वेंटरी</strong> हर आइटम का <strong>स्टोर</strong> (<strong>EMS स्टोर</strong>), <strong>श्रेणी</strong>, <strong>उपलब्ध स्टॉक</strong>, <strong>पिछली खपत</strong> और <strong>वास्तविक</strong> बनाम <strong>अपेक्षित</strong> खपत दिखाती है — यहाँ <strong>पॉली</strong> (केमिकल, <strong>23 Kg</strong>), <strong>V बेल्ट</strong> और <strong>डिस्क डिफ़्यूज़र</strong>। लाल चेतावनी कम स्टॉक बताती है; ऊपर सर्च और फ़िल्टर हैं।",
          voice: "इन्वेंटरी ई एम एस स्टोर का हर आइटम दिखाती है — स्टॉक, पिछली खपत, और वास्तविक बनाम अपेक्षित उपयोग। लाल निशान कम स्टॉक बताते हैं।",
        },
        {
          label: 'केमिकल लॉग', title: 'हर केमिकल की आवाजाही दर्ज',
          body: "<strong>स्टोर डिटेल्स › केमिकल लॉग्स</strong> <strong>ऑल एसेट</strong> और <strong>EMS</strong> के बीच बदलता है। <strong>सॉल्यूशंस</strong> में केमिकल चुनें और उसका <strong>करंट बैलेंस</strong> (<strong>23 kg</strong>), <strong>इस महीने</strong> और <strong>पिछले महीने का उपयोग</strong> देखें, फिर लॉग को <strong>तारीख</strong>, <strong>रिमार्क्स</strong> या <strong>मात्रा</strong> से फ़िल्टर करें। इस अवधि में कोई एंट्री दर्ज नहीं थी।",
          voice: "केमिकल लॉग हर केमिकल का बैलेंस और महीने का उपयोग दिखाते हैं, तारीख वाले लॉग के साथ जिसे रिमार्क्स या मात्रा से फ़िल्टर कर सकते हैं।",
        },
        {
          label: 'टिकट', title: 'टिकट, गिने और छँटे हुए',
          body: "<strong>टिकट्स</strong> <strong>4 खुले</strong> (3 ओवरड्यू, 3 एस्केलेटेड) और <strong>16 बंद</strong> गिनता है, और दोनों को श्रेणी से बाँटता है — एडमिन, इलेक्ट्रिकल, लैब, <strong>प्रोसेस</strong>, Dp सिस्टम, मैकेनिकल। हर पंक्ति में टैग (<em>normal</em>, <em>automatic</em>, <em>overdue</em>, <em>Escalation Level</em>), बनने का समय, श्रेणी और प्लांट है। <strong>क्रिएट न्यू टिकट</strong> ऊपर दाईं ओर है।",
          voice: "टिकट्स खुले और बंद टिकट गिनता है, श्रेणी के हिसाब से। हर पंक्ति में टैग, एस्केलेशन लेवल और बनने का समय है।",
        },
        {
          label: 'टिकट', title: 'एक टिकट की पूरी कहानी',
          body: "टिकट खुलने पर दिखता है कि वह कब बना, प्लांट, <strong>समस्या</strong> — <em>MBBR-1 में DO 1 या उससे कम</em> — और संभावित कारण का <strong>विवरण</strong>: ज़्यादा ऑर्गेनिक लोडिंग या कमज़ोर ब्लोअर / डिफ़्यूज़र। <strong>हिस्ट्री</strong> हर घटना रखती है — बना, ओवरड्यू हुआ, एस्केलेट हुआ — कमेंट लेती है, और <strong>रिज़ॉल्व</strong> इसे बंद करता है।",
          voice: "हर टिकट में समस्या, संभावित कारण और पूरी हिस्ट्री रहती है जिस पर कमेंट कर सकते हैं — फिर उसे रिज़ॉल्व करें।",
        },
        {
          label: 'एनालिटिक्स', title: 'आपका एनालिटिक्स पेज',
          body: "<strong>EMS › EMS एनालिटिक्स</strong> <strong>साइट समरी</strong> पर खुलता है: <strong>आउटलेट पैरामीटर्स – मैनुअल इनपुट</strong>, <strong>इनलेट फ़्लो (KLD) – MBBR इनलेट</strong> (<strong>9082.63</strong>), <strong>कुल एनर्जी कंज़म्प्शन</strong> (<strong>7230 kWh/दिन</strong>), <strong>इनलेट फ़्लो – कलेक्शन आउटलेट</strong> <strong>8911.91</strong> और <strong>एनर्जी प्रति KL</strong> <strong>0.81</strong>। चार्ट पर होवर करें तो उसके टूल दिखते हैं: डाउनलोड, एक्सपैंड, चार्ट टाइप, एडिट और इन्फ़ो।",
          voice: "ई एम एस एनालिटिक्स साइट समरी पर खुलता है — आउटलेट गुणवत्ता, इनलेट फ़्लो, कुल ऊर्जा और प्रति के एल ऊर्जा। किसी भी चार्ट पर होवर करें तो टूल दिखते हैं।",
        },
        {
          label: 'ज़ूम', title: 'चार्ट खोलें, कोई भी बिंदु पढ़ें',
          body: "<strong>एक्सपैंड</strong> स्क्रीन भर देता है। किसी बिंदु पर होवर करें तो उसका समय, मान और <strong>एग्रीगेशन टाइप</strong> दिखता है — यहाँ 01:54–02:54 am का <strong>3959.08</strong>, क्यूम्युलेटिव। लेजेंड पर क्लिक कर सीरीज़ छिपाएँ, खींचकर ज़ूम करें, और <strong>रीसेट ज़ूम</strong> से वापस आएँ।",
          voice: "एक्सपैंड करने पर हर बिंदु अपना समय, मान और एग्रीगेशन दिखाता है। खींचकर ज़ूम करें, और रीसेट ज़ूम से वापस आएँ।",
        },
        {
          label: 'व्यू', title: 'चार्ट, टेबल या बार — फिर सेव करें',
          body: "हर चार्ट का मेन्यू उसे <strong>टेबल</strong> या <strong>बार ग्राफ़</strong> में बदलता है — यहाँ इनलेट फ़्लो एक पंक्ति की टेबल बन गया, <strong>MBBR इनलेट 1</strong> <strong>9082.63</strong>। पेज बदलते ही <strong>सेव करंट व्यू</strong> पट्टी आती है: <strong>सेव</strong> रखता है, <strong>सेव ऐज़</strong> नया व्यू बनाता है, <strong>कैंसल</strong> छोड़ देता है।",
          voice: "कोई भी चार्ट टेबल या बार ग्राफ़ में बदल सकता है। फिर सेव करंट व्यू पेज को आपकी पसंद जैसा रखता है।",
        },
        {
          label: 'प्राइमरी', title: 'प्राइमरी यूनिट, चार्ट दर चार्ट',
          body: "<strong>प्राइमरी यूनिट</strong> प्लांट के शुरुआती हिस्से को दिखाती है: <strong>इनलेट फ़्लो – कलेक्शन आउटलेट</strong>, <strong>कलेक्शन से EQT-1</strong> और <strong>EQT से MBBR-1</strong> फ़्लो, <strong>प्राइमरी टैंकों का लेवल</strong>, <strong>बार स्क्रीन चोकिंग</strong>, <strong>EQT ब्लोअर ऑपरेटिंग स्टेटस</strong> और <strong>इक्वलाइज़ेशन ब्लोअर वेंट वाल्व</strong> — फिर नीचे ब्लोअर वाइब्रेशन और टैंक गुणवत्ता की टेबल।",
          voice: "प्राइमरी यूनिट इनलेट फ़्लो, टैंक लेवल, बार स्क्रीन चोकिंग, और इक्वलाइज़ेशन ब्लोअर व उनके वेंट वाल्व के चार्ट दिखाती है।",
        },
        {
          label: 'सेकेंडरी', title: 'सेकेंडरी और टर्शियरी',
          body: "<strong>सेकेंडरी यूनिट</strong> MBBR DO, ब्लोअर रनिंग स्टेटस, वाइब्रेशन और एयर फ़्लो के चार्ट दिखाती है, फिर <strong>एरेशन टैंक ब्लोअर-1 VFD</strong> (फ़्रीक्वेंसी, करंट, RPM <strong>1350</strong>) और KPI टाइल: <strong>MBBR-1 रिटेंशन टाइम</strong> <strong>2.03</strong>, <strong>डेल्टा BOD</strong> <strong>514</strong>, <strong>एरेशन टैंक में रिटेंशन टाइम</strong> <strong>6.83</strong>, COD लोडिंग, F/M रेशियो और एयर डिमांड। फिर <strong>टर्शियरी यूनिट</strong> में <strong>फ़िल्टर सेट 1–3</strong> का प्रेशर और <strong>फ़ाइनल टैंक का लेवल</strong>।",
          voice: "सेकेंडरी यूनिट एम बी बी आर, ब्लोअर और उनके वी एफ डी को रिटेंशन टाइम टाइल के साथ दिखाती है। टर्शियरी में फ़िल्टर प्रेशर और फ़ाइनल टैंक लेवल है।",
        },
        {
          label: 'डीवॉटरिंग', title: 'स्लज डीवॉटरिंग',
          body: "<strong>स्लज डीवॉटरिंग यूनिट</strong> <strong>स्क्रू प्रेस फ़्लो</strong> (<strong>1.42 KL/घंटा</strong>), <strong>स्क्रू प्रेस इनलेट फ़्लो</strong> (<strong>34.26 KLD</strong>), <strong>स्क्रू प्रेस मशीन</strong> का रनिंग और एजिटेटर स्टेटस और <strong>स्क्रू पॉली फ़ीड पंप</strong> दिखाती है — फिर स्लज फ़ीड पंप, सेंट्रीफ़्यूज मशीन, सेंट्रीफ़्यूज पॉली और फ़ीड पंप, और लोड सेल टोटलाइज़र।",
          voice: "डीवॉटरिंग यूनिट स्क्रू प्रेस को ट्रैक करती है — उसके फ़्लो, रनिंग स्टेटस और पॉली फ़ीड पंप — और नीचे सेंट्रीफ़्यूज लाइन।",
        },
        {
          label: 'पावर', title: 'ऊर्जा, और क्या चला',
          body: "एनालिटिक्स पेज का <strong>एनर्जी कंज़म्प्शन</strong> हिस्सा ऊर्जा को <strong>हर मीटर</strong> से बाँटता है, कुल (<strong>7230</strong>) दिखाता है, <strong>ब्लोअर पैनल मीटर</strong> (<strong>3.54 MW</strong>) का चार्ट देता है और <strong>इक्विपमेंट रनिंग आवर्स</strong> सूची — इक्वलाइज़ेशन ब्लोअर-1 <strong>9.98</strong>, एरेशन ब्लोअर-1 <strong>15.93</strong> आदि। नीचे <strong>ट्रिप स्टेटस</strong> में हर ब्लोअर <strong>0</strong> ट्रिप पर है।",
          voice: "ऊर्जा मीटर के हिसाब से बँटी है, हर मशीन के रनिंग घंटों के साथ — और ट्रिप स्टेटस में इस अवधि में कोई ट्रिप नहीं।",
        },
        {
          label: 'समय सीमा', title: 'कोई भी अवधि, कोई भी रेज़ोल्यूशन',
          body: "रेंज पिकर में <strong>आज</strong> से <strong>पिछले 6 महीने</strong> तक या <strong>कस्टम</strong>, <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी पर <strong>से</strong> / <strong>तक</strong> समय, और रोज़ का एक समय स्लॉट दोहराने के लिए <strong>स्मार्ट आवर्स</strong> हैं। ग्रैन्युलैरिटी अवधि के साथ चलती है — छोटी अवधि के लिए <strong>घंटे</strong> या <strong>दिन</strong>, <strong>पिछले 6 महीने</strong> के लिए <strong>हफ़्ते</strong> या <strong>महीने</strong>। <strong>अप्लाई सिलेक्शन</strong> हर चार्ट दोबारा बनाता है।",
          voice: "कोई प्रीसेट या कस्टम तारीखें चुनें। ग्रैन्युलैरिटी अवधि के साथ चलती है — छह महीने के लिए हफ़्ते या महीने — और अप्लाई हर चार्ट दोबारा बनाता है।",
        },
        {
          label: 'स्काडाव्यू', title: 'प्लांट, लाइव',
          body: "<strong>विज़ुअलाइज़ेशन › स्काडाव्यू</strong> EMS हरिद्वार को <strong>LIVE</strong> प्रोसेस डायग्राम के रूप में दिखाता है — कलेक्शन टैंक, बार स्क्रीन, ऑयल और ग्रीस ट्रैप, इक्वलाइज़ेशन, ट्यूब सेटलर, MBBR, एरेशन टैंक, सेकेंडरी क्लैरिफ़ायर, फ़िल्टर फ़ीड टैंक, PSF और ACF फ़िल्टर, क्लियर वॉटर टैंक और स्क्रू प्रेस। समय चुनें और <strong>प्ले</strong> दबाकर दोबारा देखें, <strong>ग्रुप कंट्रोल</strong> या <strong>यूनिट प्रोसेसेज़</strong> खोलें, और नीचे दाईं ओर के कंट्रोल से ज़ूम करें।",
          voice: "स्काडाव्यू पूरा प्लांट लाइव दिखाता है। कोई भी पल दोबारा देखें, ग्रुप कंट्रोल या यूनिट प्रोसेसेज़ खोलें, और कहीं भी ज़ूम करें।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "रोज़ की तस्वीर के लिए <strong>डैशबोर्ड</strong>। स्टॉक के लिए <strong>इन्वेंटरी</strong> और <strong>केमिकल लॉग</strong>। ध्यान माँगने वाली बातों के लिए <strong>टिकट</strong>। यूनिट दर यूनिट ट्रेंड के लिए <strong>EMS एनालिटिक्स</strong>। लाइव प्रोसेस के लिए <strong>स्काडाव्यू</strong>।",
          voice: "रोज़ की तस्वीर के लिए डैशबोर्ड, स्टॉक के लिए इन्वेंटरी, ध्यान वाली बातों के लिए टिकट, ट्रेंड के लिए ई एम एस एनालिटिक्स, और लाइव के लिए स्काडाव्यू।",
        },
      ],
    },
    mr: {
      title: 'ईएमएस हरिद्वार,<br><em>संपूर्ण प्लांट एका ठिकाणी.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा एक छोटा दौरा — डॅशबोर्ड, इन्व्हेंटरी, केमिकल लॉग, तिकिटे, ईएमएस ॲनालिटिक्स आणि स्काडाव्ह्यू — आणि त्यांच्यात कसे जायचे.',
      chapter: 'डेमो · ईएमएस हरिद्वार',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'सर्व काही, एका मेन्यूवर',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो: <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>तिकिटे</strong>, <strong>EMS</strong> (आत <strong>मेंटेनन्स</strong> आणि <strong>EMS ॲनालिटिक्स</strong>) आणि <strong>व्हिज्युअलायझेशन</strong>, ज्यात <strong>स्काडाव्ह्यू – EMS हरिद्वार वर्कस्पेस</strong> आहे. वरचा सर्च बॉक्स नावाने कोणतेही पेज शोधतो.",
          voice: "मेन्यू आयकॉन प्रत्येक पेज उघडतो — डॅशबोर्ड, इन्व्हेंटरी, तिकिटे, ई एम एस खाली ॲनालिटिक्स, आणि व्हिज्युअलायझेशन खाली स्काडाव्ह्यू.",
        },
        {
          label: 'नियंत्रणे', title: 'पेज चालवणारी नियंत्रणे',
          body: "डॅशबोर्ड <strong>EMS हरिद्वार</strong> पेजवर उघडतो. <strong>ग्रॅन्युलॅरिटी</strong> (इथे <strong>दिवस</strong>), <strong>मागील 24 तास</strong> आणि <strong>पासून</strong> / <strong>पर्यंत</strong> तारखा खालील प्रत्येक विजेट चालवतात. वर उजवीकडे: <strong>रिफ्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्ज</strong>, <strong>लेआउट</strong> आणि <strong>शेअर</strong>.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालावधी प्रत्येक विजेट चालवतात. रिफ्रेश, डाउनलोड, सेटिंग्ज आणि शेअर वर उजवीकडे आहेत.",
        },
        {
          label: 'नकाशा व तिकिटे', title: 'नकाशावर प्लांट, त्याच्या तिकिटांसह',
          body: "<strong>मॅप विजेट्स अँड तिकिट्स</strong> प्लांटला नकाशावर त्याच्या <strong>प्लांट ऑटोमेशन (%)</strong> — <strong>79.4</strong> — सह दाखवतो, आणि शेजारी <strong>मॅन्युअल तिकिटे</strong>: <em>एरेशन टँकमधील DO</em>, <em>MBBR-2 मधील DO</em> आणि <em>MBBR-1 मधील DO 1 किंवा कमी</em>, प्रत्येक एक <strong>प्लांट प्रोसेस इश्यू</strong>. कार्डचे आयकॉन तिकिटे जोडतात, डाउनलोड, लिंक किंवा एडिट करतात.",
          voice: "नकाशा प्लांटला त्याच्या एकोणऐंशी टक्के ऑटोमेशन स्कोरसह दाखवतो, शेजारी उघडी मॅन्युअल तिकिटे — इथे एरेशन टँक आणि दोन्ही एम बी बी आर मध्ये कमी डी ओ.",
        },
        {
          label: 'पाणी', title: 'किती पाणी आले',
          body: "<strong>वॉटर क्वांटिटी (KL)</strong> मध्ये <strong>इनलेट फ्लो – कलेक्शन ते EQT-1</strong> <strong>8913.89 KL</strong> (मागील कालावधीपेक्षा <strong>6%</strong> कमी) आणि <strong>इनलेट फ्लो – EQT ते MBBR-1</strong> <strong>9060.96 KL</strong> आहे. खालची पट्टी प्रत्येक आकडा कोणत्या कालावधीचा आहे ते सांगते.",
          voice: "वॉटर क्वांटिटी इक्वलायझेशन आणि पुढे एम बी बी आर-1 मध्ये येणारा इनलेट फ्लो दाखवते — प्रत्येकी सुमारे नऊ हजार के एल — मागील कालावधीतील बदलासह.",
        },
        {
          label: 'गुणवत्ता', title: 'टाकीनुसार गुणवत्ता',
          body: "<strong>इनलेट आणि ट्रीटेड वॉटर क्वालिटी</strong> पॅरामीटर टप्प्यानुसार मांडते: <strong>कलेक्शन टँक</strong>, <strong>इक्वलायझेशन टँक</strong>, <strong>प्रायमरी ट्यूबसेटलर</strong>, <strong>सेकंडरी क्लॅरिफायर</strong> आणि <strong>आउटलेट</strong> (pH, TDS, COD, BOD, TSS — या कालावधीत लॅब नोंदी नाहीत), तसेच लाइव्ह <strong>OCEMS सेन्सर डेटा</strong>: ट्रीटेड वॉटर COD <strong>0.00</strong>, BOD <strong>0.00</strong>, pH <strong>7.79</strong> आणि TSS <strong>0.00</strong>, प्रत्येक आपल्या रेफरन्ससह.",
          voice: "गुणवत्ता कलेक्शन टँकपासून आउटलेटपर्यंत टप्प्याटप्प्याने आहे, सोबत लाइव्ह ओ सी ई एम एस रीडिंग — ट्रीटेड पाण्याचा पी एच सात पूर्णांक सात नऊ.",
        },
        {
          label: 'बायोलॉजी', title: 'एका नजरेत बायोलॉजी',
          body: "<strong>बायो रिॲक्टर ॲनालिटिक्स</strong> मध्ये <strong>MBBR-2 DO</strong> <strong>2.04</strong>, <strong>MBBR-1 DO</strong> <strong>0.45</strong>, <strong>MBBR-1 ला प्रत्यक्ष एअर सप्लाय</strong> <strong>3725 KL/H</strong>, <strong>अपेक्षित एअर डिमांड</strong>, <strong>F/M रेशो</strong> (रेफ. 0.2–0.5) आणि <strong>COD लोडिंग रेट</strong> आहेत. खाली <strong>बायो हेल्थ ट्रॅकर</strong> एका सॅम्पलचा <strong>स्लज सेटलिंग पॅटर्न</strong> दाखवतो, आणि शेजारी <strong>स्लज एज</strong> (2.5–10 दिवस).",
          voice: "बायो रिॲक्टर ॲनालिटिक्स दोन्ही एम बी बी आर चा डी ओ, दिलेली हवा आणि एफ बाय एम रेशो दाखवते. बायो हेल्थ ट्रॅकर स्लज कसा बसतो ते दाखवतो.",
        },
        {
          label: 'ऊर्जा', title: 'प्रत्येक मीटर, एका ओळीत',
          body: "<strong>एनर्जी कन्झम्प्शन</strong> एकूण — <strong>7230</strong> — चा ट्रेंड दाखवतो आणि मीटरनुसार विभागतो: <strong>MCCB पॅनल-2 (UPPC-3)</strong> <strong>4.95</strong>, <strong>MCCB पॅनल (UPPC-1)</strong> <strong>2.28</strong>, <strong>MCCB पॅनल-3 (UPPC-4)</strong> आणि <strong>DG मीटर (UPPC-2)</strong> <strong>0</strong>. <strong>प्रति KL ऊर्जा</strong> <strong>0.81</strong> आहे, बेसलाइन <strong>0.96</strong>.",
          voice: "ऊर्जा मीटरनुसार विभागली आहे — प्रत्येक एम सी सी बी पॅनल आणि डी जी मीटर — आणि प्रति के एल ऊर्जा शून्य पूर्णांक आठ एक आहे, बेसलाइनपेक्षा कमी.",
        },
        {
          label: 'स्लज', title: 'स्लज, मशीन आणि ऑटोमेशन',
          body: "<strong>स्लज ट्रीटमेंट</strong> <strong>अपेक्षित</strong> आणि <strong>प्रत्यक्ष स्लज वेस्टिंग</strong>, मशीन रनिंग तास (<strong>स्क्रू प्रेस</strong> <strong>17.53</strong>, <strong>सेंट्रीफ्यूज-1</strong> आणि <strong>-2</strong> वर 0), <strong>प्रति KL स्लज जनरेशन</strong> <strong>0.24</strong> आणि <strong>प्रत्यक्ष सॉलिड स्लज जनरेशन</strong> <strong>772.4 kg/दिवस</strong> ट्रॅक करते. गेज <strong>ऑटोमेशन सक्सेस</strong> <strong>79.85%</strong> दाखवतो.",
          voice: "स्लज ट्रीटमेंट वेस्टिंग, स्क्रू प्रेस आणि सेंट्रीफ्यूजचे तास, आणि तयार झालेला स्लज ट्रॅक करते — ऑटोमेशन सक्सेस जवळजवळ ऐंशी टक्के.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'स्टॉक आणि वापर',
          body: "<strong>इन्व्हेंटरी</strong> प्रत्येक आयटमचा <strong>स्टोअर</strong> (<strong>EMS स्टोअर</strong>), <strong>श्रेणी</strong>, <strong>उपलब्ध स्टॉक</strong>, <strong>शेवटचा वापर</strong> आणि <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित</strong> वापर दाखवते — इथे <strong>पॉली</strong> (केमिकल, <strong>23 Kg</strong>), <strong>V बेल्ट</strong> आणि <strong>डिस्क डिफ्यूझर</strong>. लाल इशारा कमी स्टॉक दाखवतो; वर सर्च आणि फिल्टर आहेत.",
          voice: "इन्व्हेंटरी ई एम एस स्टोअरमधील प्रत्येक आयटम दाखवते — स्टॉक, शेवटचा वापर, आणि प्रत्यक्ष विरुद्ध अपेक्षित वापर. लाल खुणा कमी स्टॉक दाखवतात.",
        },
        {
          label: 'केमिकल लॉग', title: 'प्रत्येक केमिकलची हालचाल नोंदलेली',
          body: "<strong>स्टोअर डिटेल्स › केमिकल लॉग्स</strong> <strong>ऑल ॲसेट</strong> आणि <strong>EMS</strong> मध्ये बदलते. <strong>सोल्यूशन्स</strong> मध्ये केमिकल निवडा आणि त्याचा <strong>करंट बॅलन्स</strong> (<strong>23 kg</strong>), <strong>या महिन्याचा</strong> आणि <strong>मागील महिन्याचा वापर</strong> पाहा, मग लॉग <strong>तारीख</strong>, <strong>रिमार्क्स</strong> किंवा <strong>रक्कम</strong> ने फिल्टर करा. या कालावधीत कोणतीही नोंद नव्हती.",
          voice: "केमिकल लॉग प्रत्येक केमिकलचा बॅलन्स आणि मासिक वापर दाखवतात, तारखेनुसार लॉगसह जो रिमार्क्स किंवा रकमेने फिल्टर करता येतो.",
        },
        {
          label: 'तिकिटे', title: 'तिकिटे, मोजलेली आणि वर्गीकृत',
          body: "<strong>तिकिट्स</strong> <strong>4 उघडी</strong> (3 ओव्हरड्यू, 3 एस्कलेटेड) आणि <strong>16 बंद</strong> मोजते, आणि दोन्ही श्रेणीनुसार विभागते — ॲडमिन, इलेक्ट्रिकल, लॅब, <strong>प्रोसेस</strong>, Dp सिस्टम, मेकॅनिकल. प्रत्येक ओळीत टॅग (<em>normal</em>, <em>automatic</em>, <em>overdue</em>, <em>Escalation Level</em>), तयार झाल्याची वेळ, श्रेणी आणि प्लांट आहे. <strong>क्रिएट न्यू तिकिट</strong> वर उजवीकडे आहे.",
          voice: "तिकिट्स उघडी आणि बंद तिकिटे श्रेणीनुसार मोजते. प्रत्येक ओळीत टॅग, एस्कलेशन लेव्हल आणि तयार झाल्याची वेळ आहे.",
        },
        {
          label: 'तिकिट', title: 'एका तिकिटाची पूर्ण कहाणी',
          body: "तिकिट उघडल्यावर ते कधी तयार झाले, प्लांट, <strong>समस्या</strong> — <em>MBBR-1 मधील DO 1 किंवा कमी</em> — आणि संभाव्य कारणाचे <strong>वर्णन</strong>: जास्त ऑरगॅनिक लोडिंग किंवा कमकुवत ब्लोअर / डिफ्यूझर. <strong>हिस्ट्री</strong> प्रत्येक घटना ठेवते — तयार, ओव्हरड्यू, एस्कलेट — कमेंट घेते, आणि <strong>रिझॉल्व्ह</strong> ते बंद करते.",
          voice: "प्रत्येक तिकिटात समस्या, संभाव्य कारण आणि पूर्ण हिस्ट्री असते ज्यावर कमेंट करता येते — मग ते रिझॉल्व्ह करा.",
        },
        {
          label: 'ॲनालिटिक्स', title: 'तुमचे ॲनालिटिक्स पेज',
          body: "<strong>EMS › EMS ॲनालिटिक्स</strong> <strong>साइट समरी</strong> वर उघडते: <strong>आउटलेट पॅरामीटर्स – मॅन्युअल इनपुट</strong>, <strong>इनलेट फ्लो (KLD) – MBBR इनलेट</strong> (<strong>9082.63</strong>), <strong>एकूण एनर्जी कन्झम्प्शन</strong> (<strong>7230 kWh/दिवस</strong>), <strong>इनलेट फ्लो – कलेक्शन आउटलेट</strong> <strong>8911.91</strong> आणि <strong>प्रति KL ऊर्जा</strong> <strong>0.81</strong>. चार्टवर होवर केल्यास त्याची टूल्स दिसतात: डाउनलोड, एक्सपँड, चार्ट टाइप, एडिट आणि इन्फो.",
          voice: "ई एम एस ॲनालिटिक्स साइट समरीवर उघडते — आउटलेट गुणवत्ता, इनलेट फ्लो, एकूण ऊर्जा आणि प्रति के एल ऊर्जा. कोणत्याही चार्टवर होवर केल्यास टूल्स दिसतात.",
        },
        {
          label: 'झूम', title: 'चार्ट उघडा, कोणताही बिंदू वाचा',
          body: "<strong>एक्सपँड</strong> स्क्रीन भरतो. बिंदूवर होवर केल्यास त्याची वेळ, मूल्य आणि <strong>ॲग्रिगेशन टाइप</strong> दिसतो — इथे 01:54–02:54 am चे <strong>3959.08</strong>, क्युम्युलेटिव्ह. लेजेंडवर क्लिक करून सिरीज लपवा, ओढून झूम करा, आणि <strong>रिसेट झूम</strong> ने परत या.",
          voice: "एक्सपँड केल्यावर प्रत्येक बिंदू आपली वेळ, मूल्य आणि ॲग्रिगेशन दाखवतो. ओढून झूम करा, आणि रिसेट झूमने परत या.",
        },
        {
          label: 'व्ह्यू', title: 'चार्ट, टेबल किंवा बार — मग सेव्ह करा',
          body: "प्रत्येक चार्टचा मेन्यू त्याला <strong>टेबल</strong> किंवा <strong>बार ग्राफ</strong> मध्ये बदलतो — इथे इनलेट फ्लो एका ओळीची टेबल झाला, <strong>MBBR इनलेट 1</strong> <strong>9082.63</strong>. पेज बदलताच <strong>सेव्ह करंट व्ह्यू</strong> पट्टी येते: <strong>सेव्ह</strong> ठेवतो, <strong>सेव्ह ॲज</strong> नवा व्ह्यू बनवतो, <strong>कॅन्सल</strong> सोडून देतो.",
          voice: "कोणताही चार्ट टेबल किंवा बार ग्राफमध्ये बदलता येतो. मग सेव्ह करंट व्ह्यू पेज तुम्हाला हवे तसे ठेवतो.",
        },
        {
          label: 'प्रायमरी', title: 'प्रायमरी युनिट, चार्टनुसार',
          body: "<strong>प्रायमरी युनिट</strong> प्लांटचा सुरुवातीचा भाग दाखवते: <strong>इनलेट फ्लो – कलेक्शन आउटलेट</strong>, <strong>कलेक्शन ते EQT-1</strong> आणि <strong>EQT ते MBBR-1</strong> फ्लो, <strong>प्रायमरी टँकची लेव्हल</strong>, <strong>बार स्क्रीन चोकिंग</strong>, <strong>EQT ब्लोअर ऑपरेटिंग स्टेटस</strong> आणि <strong>इक्वलायझेशन ब्लोअर व्हेंट व्हॉल्व्ह</strong> — मग खाली ब्लोअर व्हायब्रेशन आणि टँक गुणवत्ता टेबल.",
          voice: "प्रायमरी युनिट इनलेट फ्लो, टँक लेव्हल, बार स्क्रीन चोकिंग, आणि इक्वलायझेशन ब्लोअर व त्यांच्या व्हेंट व्हॉल्व्हचे चार्ट दाखवते.",
        },
        {
          label: 'सेकंडरी', title: 'सेकंडरी आणि टर्शियरी',
          body: "<strong>सेकंडरी युनिट</strong> MBBR DO, ब्लोअर रनिंग स्टेटस, व्हायब्रेशन आणि एअर फ्लोचे चार्ट दाखवते, मग <strong>एरेशन टँक ब्लोअर-1 VFD</strong> (फ्रिक्वेन्सी, करंट, RPM <strong>1350</strong>) आणि KPI टाइल: <strong>MBBR-1 रिटेन्शन टाइम</strong> <strong>2.03</strong>, <strong>डेल्टा BOD</strong> <strong>514</strong>, <strong>एरेशन टँकमधील रिटेन्शन टाइम</strong> <strong>6.83</strong>, COD लोडिंग, F/M रेशो आणि एअर डिमांड. मग <strong>टर्शियरी युनिट</strong> मध्ये <strong>फिल्टर सेट 1–3</strong> चा प्रेशर आणि <strong>फायनल टँकची लेव्हल</strong>.",
          voice: "सेकंडरी युनिट एम बी बी आर, ब्लोअर आणि त्यांचे व्ही एफ डी रिटेन्शन टाइम टाइलसह दाखवते. टर्शियरीमध्ये फिल्टर प्रेशर आणि फायनल टँक लेव्हल आहे.",
        },
        {
          label: 'डीवॉटरिंग', title: 'स्लज डीवॉटरिंग',
          body: "<strong>स्लज डीवॉटरिंग युनिट</strong> <strong>स्क्रू प्रेस फ्लो</strong> (<strong>1.42 KL/तास</strong>), <strong>स्क्रू प्रेस इनलेट फ्लो</strong> (<strong>34.26 KLD</strong>), <strong>स्क्रू प्रेस मशीन</strong> चा रनिंग आणि ॲजिटेटर स्टेटस आणि <strong>स्क्रू पॉली फीड पंप</strong> दाखवते — मग स्लज फीड पंप, सेंट्रीफ्यूज मशीन, सेंट्रीफ्यूज पॉली आणि फीड पंप, आणि लोड सेल टोटलायझर.",
          voice: "डीवॉटरिंग युनिट स्क्रू प्रेस ट्रॅक करते — त्याचे फ्लो, रनिंग स्टेटस आणि पॉली फीड पंप — आणि खाली सेंट्रीफ्यूज लाइन.",
        },
        {
          label: 'पॉवर', title: 'ऊर्जा, आणि काय चालले',
          body: "ॲनालिटिक्स पेजचा <strong>एनर्जी कन्झम्प्शन</strong> विभाग ऊर्जा <strong>प्रत्येक मीटरनुसार</strong> विभागतो, एकूण (<strong>7230</strong>) दाखवतो, <strong>ब्लोअर पॅनल मीटर</strong> (<strong>3.54 MW</strong>) चा चार्ट देतो आणि <strong>इक्विपमेंट रनिंग अवर्स</strong> यादी — इक्वलायझेशन ब्लोअर-1 <strong>9.98</strong>, एरेशन ब्लोअर-1 <strong>15.93</strong> इत्यादी. खाली <strong>ट्रिप स्टेटस</strong> मध्ये प्रत्येक ब्लोअर <strong>0</strong> ट्रिपवर आहे.",
          voice: "ऊर्जा मीटरनुसार विभागली आहे, प्रत्येक मशीनच्या रनिंग तासांसह — आणि ट्रिप स्टेटसमध्ये या कालावधीत एकही ट्रिप नाही.",
        },
        {
          label: 'कालावधी', title: 'कोणताही कालावधी, कोणतेही रिझोल्यूशन',
          body: "रेंज पिकरमध्ये <strong>आज</strong> पासून <strong>मागील 6 महिने</strong> पर्यंत किंवा <strong>कस्टम</strong>, <strong>12</strong> किंवा <strong>24 तास</strong> घड्याळावर <strong>पासून</strong> / <strong>पर्यंत</strong> वेळ, आणि रोजचा एक वेळ स्लॉट पुन्हा वापरण्यासाठी <strong>स्मार्ट अवर्स</strong> आहेत. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते — लहान कालावधीसाठी <strong>तास</strong> किंवा <strong>दिवस</strong>, <strong>मागील 6 महिने</strong> साठी <strong>आठवडे</strong> किंवा <strong>महिने</strong>. <strong>अप्लाय सिलेक्शन</strong> प्रत्येक चार्ट पुन्हा काढतो.",
          voice: "प्रीसेट किंवा कस्टम तारखा निवडा. ग्रॅन्युलॅरिटी कालावधीनुसार बदलते — सहा महिन्यांसाठी आठवडे किंवा महिने — आणि अप्लाय प्रत्येक चार्ट पुन्हा काढतो.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'प्लांट, लाइव्ह',
          body: "<strong>व्हिज्युअलायझेशन › स्काडाव्ह्यू</strong> EMS हरिद्वारला <strong>LIVE</strong> प्रोसेस डायग्राम म्हणून दाखवतो — कलेक्शन टँक, बार स्क्रीन, ऑइल आणि ग्रीस ट्रॅप, इक्वलायझेशन, ट्यूब सेटलर, MBBR, एरेशन टँक, सेकंडरी क्लॅरिफायर, फिल्टर फीड टँक, PSF आणि ACF फिल्टर, क्लिअर वॉटर टँक आणि स्क्रू प्रेस. वेळ निवडा आणि <strong>प्ले</strong> दाबून पुन्हा पाहा, <strong>ग्रुप कंट्रोल</strong> किंवा <strong>युनिट प्रोसेसेस</strong> उघडा, आणि खाली उजवीकडील नियंत्रणांनी झूम करा.",
          voice: "स्काडाव्ह्यू संपूर्ण प्लांट लाइव्ह दाखवतो. कोणताही क्षण पुन्हा पाहा, ग्रुप कंट्रोल किंवा युनिट प्रोसेसेस उघडा, आणि कुठेही झूम करा.",
        },
        {
          label: 'सारांश', title: 'कोणते पेज कोणत्या कामासाठी',
          body: "रोजच्या चित्रासाठी <strong>डॅशबोर्ड</strong>. स्टॉकसाठी <strong>इन्व्हेंटरी</strong> आणि <strong>केमिकल लॉग</strong>. लक्ष देण्यासारख्या गोष्टींसाठी <strong>तिकिटे</strong>. युनिटनुसार ट्रेंडसाठी <strong>EMS ॲनालिटिक्स</strong>. लाइव्ह प्रोसेससाठी <strong>स्काडाव्ह्यू</strong>.",
          voice: "रोजच्या चित्रासाठी डॅशबोर्ड, स्टॉकसाठी इन्व्हेंटरी, लक्ष देण्यासाठी तिकिटे, ट्रेंडसाठी ई एम एस ॲनालिटिक्स, आणि लाइव्हसाठी स्काडाव्ह्यू.",
        },
      ],
    },
    ta: {
      title: 'ஈஎம்எஸ் ஹரித்வார்,<br><em>முழு ஆலையும் ஒரே இடத்தில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் ஒரு விரைவுச் சுற்று — டாஷ்போர்டு, இன்வென்டரி, கெமிக்கல் லாக், டிக்கெட்டுகள், ஈஎம்எஸ் அனலிட்டிக்ஸ், ஸ்காடாவியூ — அவற்றுக்கிடையே எப்படிச் செல்வது.',
      chapter: 'டெமோ · ஈஎம்எஸ் ஹரித்வார்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'எல்லாமே ஒரு மெனு தூரத்தில்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது: <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>டிக்கெட்டுகள்</strong>, <strong>EMS</strong> (உள்ளே <strong>மெயின்டனன்ஸ்</strong>, <strong>EMS அனலிட்டிக்ஸ்</strong>), மற்றும் <strong>விஷுவலைசேஷன்</strong> — அதில் <strong>ஸ்காடாவியூ – EMS ஹரித்வார் வொர்க்ஸ்பேஸ்</strong>. மேலே உள்ள தேடல் பெட்டி எந்தப் பக்கத்தையும் பெயரால் கண்டுபிடிக்கும்.",
          voice: "மெனு ஐகான் ஒவ்வொரு பக்கத்தையும் திறக்கிறது — டாஷ்போர்டு, இன்வென்டரி, டிக்கெட்டுகள், ஈ எம் எஸ் கீழ் அனலிட்டிக்ஸ், விஷுவலைசேஷன் கீழ் ஸ்காடாவியூ.",
        },
        {
          label: 'கட்டுப்பாடுகள்', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "டாஷ்போர்டு <strong>EMS ஹரித்வார்</strong> பக்கத்தில் திறக்கிறது. <strong>கிரானுலாரிட்டி</strong> (இங்கே <strong>நாட்கள்</strong>), <strong>கடைசி 24 மணிநேரம்</strong>, <strong>இருந்து</strong> / <strong>வரை</strong> தேதிகள் கீழே உள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. மேல் வலதில்: <strong>ரிஃப்ரெஷ்</strong>, <strong>டவுன்லோட்</strong>, <strong>அமைப்புகள்</strong>, <strong>லேஅவுட்</strong>, <strong>பகிர்வு</strong>.",
          voice: "பக்கத் தேர்வு, கிரானுலாரிட்டி, தேதி வரம்பு ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. ரிஃப்ரெஷ், டவுன்லோட், அமைப்புகள், பகிர்வு மேல் வலதில் உள்ளன.",
        },
        {
          label: 'வரைபடம் & டிக்கெட்', title: 'வரைபடத்தில் ஆலை, அதன் டிக்கெட்டுகளுடன்',
          body: "<strong>மேப் விட்ஜெட்ஸ் அண்ட் டிக்கெட்ஸ்</strong> ஆலையை அதன் <strong>பிளான்ட் ஆட்டோமேஷன் (%)</strong> — <strong>79.4</strong> — உடன் வரைபடத்தில் காட்டுகிறது, அருகே <strong>மேனுவல் டிக்கெட்டுகள்</strong>: <em>ஏரேஷன் டேங்கில் DO</em>, <em>MBBR-2 இல் DO</em>, <em>MBBR-1 இல் DO 1 அல்லது குறைவு</em> — ஒவ்வொன்றும் <strong>பிளான்ட் ப்ராசஸ் பிரச்சினை</strong>. கார்டின் ஐகான்கள் டிக்கெட் சேர்க்க, டவுன்லோட், லிங்க், திருத்த உதவுகின்றன.",
          voice: "வரைபடம் ஆலையை அதன் எழுபத்தொன்பது சதவீத ஆட்டோமேஷன் மதிப்பெண்ணுடன் காட்டுகிறது, அருகே திறந்த மேனுவல் டிக்கெட்டுகள் — இங்கே ஏரேஷன் டேங்க் மற்றும் இரண்டு எம் பி பி ஆர் களிலும் குறைந்த டி ஓ.",
        },
        {
          label: 'நீர்', title: 'எவ்வளவு நீர் வந்தது',
          body: "<strong>வாட்டர் குவான்டிட்டி (KL)</strong> இல் <strong>இன்லெட் ஃப்ளோ – கலெக்ஷன் முதல் EQT-1</strong> <strong>8913.89 KL</strong> (முந்தைய காலத்தை விட <strong>6%</strong> குறைவு) மற்றும் <strong>இன்லெட் ஃப்ளோ – EQT முதல் MBBR-1</strong> <strong>9060.96 KL</strong>. கீழே உள்ள பட்டை ஒவ்வொரு எண்ணும் எந்தக் காலத்துக்கு என்று காட்டுகிறது.",
          voice: "வாட்டர் குவான்டிட்டி ஈக்வலைசேஷன் மற்றும் எம் பி பி ஆர்-1 க்கு வரும் இன்லெட் ஃப்ளோவைக் காட்டுகிறது — ஒவ்வொன்றும் சுமார் ஒன்பதாயிரம் கே எல் — முந்தைய காலத்திலிருந்து மாற்றத்துடன்.",
        },
        {
          label: 'தரம்', title: 'டேங்க் வாரியாக தரம்',
          body: "<strong>இன்லெட் & ட்ரீடட் வாட்டர் குவாலிட்டி</strong> அளவுருக்களை நிலை வாரியாகக் காட்டுகிறது: <strong>கலெக்ஷன் டேங்க்</strong>, <strong>ஈக்வலைசேஷன் டேங்க்</strong>, <strong>பிரைமரி ட்யூப்செட்லர்</strong>, <strong>செகண்டரி கிளாரிஃபையர்</strong>, <strong>அவுட்லெட்</strong> (pH, TDS, COD, BOD, TSS — இந்தக் காலத்தில் லேப் பதிவுகள் இல்லை), மேலும் நேரடி <strong>OCEMS சென்சார் டேட்டா</strong>: ட்ரீடட் வாட்டர் COD <strong>0.00</strong>, BOD <strong>0.00</strong>, pH <strong>7.79</strong>, TSS <strong>0.00</strong> — ஒவ்வொன்றும் அதன் குறிப்புடன்.",
          voice: "தரம் கலெக்ஷன் டேங்க் முதல் அவுட்லெட் வரை நிலை வாரியாக உள்ளது, நேரடி ஓ சி ஈ எம் எஸ் அளவீடுகளுடன் — ட்ரீடட் நீரின் பி எச் ஏழு புள்ளி ஏழு ஒன்பது.",
        },
        {
          label: 'உயிரியல்', title: 'ஒரே பார்வையில் உயிரியல்',
          body: "<strong>பயோ ரியாக்டர் அனலிட்டிக்ஸ்</strong> இல் <strong>MBBR-2 DO</strong> <strong>2.04</strong>, <strong>MBBR-1 DO</strong> <strong>0.45</strong>, <strong>MBBR-1 க்கு உண்மையான காற்று விநியோகம்</strong> <strong>3725 KL/H</strong>, <strong>எதிர்பார்க்கப்படும் காற்றுத் தேவை</strong>, <strong>F/M விகிதம்</strong> (குறிப்பு 0.2–0.5), <strong>COD லோடிங் ரேட்</strong> உள்ளன. கீழே <strong>பயோ ஹெல்த் டிராக்கர்</strong> ஒரு மாதிரியின் <strong>ஸ்லட்ஜ் செட்லிங் பேட்டர்ன்</strong> காட்டுகிறது, அருகே <strong>ஸ்லட்ஜ் ஏஜ்</strong> (2.5–10 நாட்கள்).",
          voice: "பயோ ரியாக்டர் அனலிட்டிக்ஸ் இரண்டு எம் பி பி ஆர் களின் டி ஓ, வழங்கப்பட்ட காற்று, எஃப் பை எம் விகிதத்தைக் காட்டுகிறது. பயோ ஹெல்த் டிராக்கர் ஸ்லட்ஜ் எப்படி படிகிறது என்று காட்டுகிறது.",
        },
        {
          label: 'ஆற்றல்', title: 'ஒவ்வொரு மீட்டரும், ஒரே வரிசையில்',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> மொத்தம் — <strong>7230</strong> — போக்கைக் காட்டி, மீட்டர் வாரியாகப் பிரிக்கிறது: <strong>MCCB பேனல்-2 (UPPC-3)</strong> <strong>4.95</strong>, <strong>MCCB பேனல் (UPPC-1)</strong> <strong>2.28</strong>, <strong>MCCB பேனல்-3 (UPPC-4)</strong>, <strong>DG மீட்டர் (UPPC-2)</strong> <strong>0</strong>. <strong>ஒரு KL க்கு ஆற்றல்</strong> <strong>0.81</strong>, அடிப்படை <strong>0.96</strong>.",
          voice: "ஆற்றல் மீட்டர் வாரியாகப் பிரிக்கப்பட்டுள்ளது — ஒவ்வொரு எம் சி சி பி பேனலும் டி ஜி மீட்டரும் — ஒரு கே எல் க்கு ஆற்றல் பூஜ்யம் புள்ளி எட்டு ஒன்று, அடிப்படைக்குக் கீழே.",
        },
        {
          label: 'ஸ்லட்ஜ்', title: 'ஸ்லட்ஜ், இயந்திரங்கள், ஆட்டோமேஷன்',
          body: "<strong>ஸ்லட்ஜ் ட்ரீட்மென்ட்</strong> <strong>எதிர்பார்க்கப்படும்</strong> மற்றும் <strong>உண்மையான ஸ்லட்ஜ் வேஸ்டிங்</strong>, இயந்திர இயக்க நேரம் (<strong>ஸ்க்ரூ பிரஸ்</strong> <strong>17.53</strong>, <strong>சென்ட்ரிஃப்யூஜ்-1</strong>, <strong>-2</strong> 0), <strong>ஒரு KL க்கு ஸ்லட்ஜ் உற்பத்தி</strong> <strong>0.24</strong>, <strong>உண்மையான திட ஸ்லட்ஜ் உற்பத்தி</strong> <strong>772.4 kg/நாள்</strong> ஆகியவற்றைக் கண்காணிக்கிறது. கேஜ் <strong>ஆட்டோமேஷன் சக்சஸ்</strong> <strong>79.85%</strong> காட்டுகிறது.",
          voice: "ஸ்லட்ஜ் ட்ரீட்மென்ட் வேஸ்டிங், ஸ்க்ரூ பிரஸ் மற்றும் சென்ட்ரிஃப்யூஜ் நேரம், உருவான ஸ்லட்ஜ் ஆகியவற்றைக் கண்காணிக்கிறது — ஆட்டோமேஷன் சக்சஸ் கிட்டத்தட்ட எண்பது சதவீதம்.",
        },
        {
          label: 'இன்வென்டரி', title: 'கையிருப்பும் நுகர்வும்',
          body: "<strong>இன்வென்டரி</strong> ஒவ்வொரு பொருளின் <strong>ஸ்டோர்</strong> (<strong>EMS ஸ்டோர்</strong>), <strong>வகை</strong>, <strong>கையிருப்பு</strong>, <strong>கடைசி நுகர்வு</strong>, <strong>உண்மையான</strong> மற்றும் <strong>எதிர்பார்க்கப்படும்</strong> நுகர்வைக் காட்டுகிறது — இங்கே <strong>பாலி</strong> (கெமிக்கல், <strong>23 Kg</strong>), <strong>V பெல்ட்</strong>, <strong>டிஸ்க் டிஃப்யூசர்</strong>. சிவப்பு எச்சரிக்கை குறைந்த கையிருப்பைக் குறிக்கிறது; மேலே தேடலும் வடிகட்டியும்.",
          voice: "இன்வென்டரி ஈ எம் எஸ் ஸ்டோரில் உள்ள ஒவ்வொரு பொருளையும் காட்டுகிறது — கையிருப்பு, கடைசி நுகர்வு, உண்மையான மற்றும் எதிர்பார்க்கப்படும் பயன்பாடு. சிவப்புக் குறிகள் குறைந்த கையிருப்பைக் காட்டுகின்றன.",
        },
        {
          label: 'கெமிக்கல் லாக்', title: 'ஒவ்வொரு ரசாயன நகர்வும் பதிவில்',
          body: "<strong>ஸ்டோர் டீடெயில்ஸ் › கெமிக்கல் லாக்ஸ்</strong> <strong>ஆல் அசெட்</strong> மற்றும் <strong>EMS</strong> இடையே மாறுகிறது. <strong>சொல்யூஷன்ஸ்</strong> இல் ரசாயனத்தைத் தேர்ந்து அதன் <strong>தற்போதைய இருப்பு</strong> (<strong>23 kg</strong>), <strong>இந்த மாத</strong> மற்றும் <strong>கடந்த மாதப் பயன்பாடு</strong> பார்க்கவும், பிறகு லாக்கை <strong>தேதி</strong>, <strong>குறிப்புகள்</strong> அல்லது <strong>அளவு</strong> மூலம் வடிகட்டவும். இந்தக் காலத்தில் பதிவுகள் இல்லை.",
          voice: "கெமிக்கல் லாக்ஸ் ஒவ்வொரு ரசாயனத்தின் இருப்பையும் மாதாந்திரப் பயன்பாட்டையும் காட்டுகின்றன, குறிப்புகள் அல்லது அளவால் வடிகட்டக்கூடிய தேதிப் பதிவுடன்.",
        },
        {
          label: 'டிக்கெட்டுகள்', title: 'எண்ணப்பட்டு வகைப்படுத்தப்பட்ட டிக்கெட்டுகள்',
          body: "<strong>டிக்கெட்ஸ்</strong> <strong>4 திறந்தவை</strong> (3 காலாவதியானவை, 3 எஸ்கலேட் செய்யப்பட்டவை), <strong>16 மூடியவை</strong> என எண்ணி, இரண்டையும் வகை வாரியாகப் பிரிக்கிறது — அட்மின், எலக்ட்ரிக்கல், லேப், <strong>ப்ராசஸ்</strong>, Dp சிஸ்டம், மெக்கானிக்கல். ஒவ்வொரு வரிசையிலும் குறிச்சொற்கள் (<em>normal</em>, <em>automatic</em>, <em>overdue</em>, <em>Escalation Level</em>), உருவான நேரம், வகை, ஆலை உள்ளன. <strong>கிரியேட் நியூ டிக்கெட்</strong> மேல் வலதில்.",
          voice: "டிக்கெட்ஸ் திறந்த மற்றும் மூடிய டிக்கெட்டுகளை வகை வாரியாக எண்ணுகிறது. ஒவ்வொரு வரிசையும் குறிச்சொற்கள், எஸ்கலேஷன் நிலை, உருவான நேரத்தைக் காட்டுகிறது.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒரு டிக்கெட்டின் முழுக் கதை',
          body: "டிக்கெட் திறக்கும்போது அது எப்போது உருவானது, ஆலை, <strong>பிரச்சினை</strong> — <em>MBBR-1 இல் DO 1 அல்லது குறைவு</em> — மற்றும் சாத்தியமான காரணத்தின் <strong>விளக்கம்</strong>: அதிக ஆர்கானிக் லோடிங் அல்லது பலவீனமான ப்ளோயர் / டிஃப்யூசர். <strong>ஹிஸ்டரி</strong> ஒவ்வொரு நிகழ்வையும் வைத்திருக்கிறது — உருவானது, காலாவதியானது, எஸ்கலேட் ஆனது — கருத்துகளை ஏற்கிறது, <strong>ரிசால்வ்</strong> அதை மூடுகிறது.",
          voice: "ஒவ்வொரு டிக்கெட்டும் பிரச்சினை, சாத்தியமான காரணம், கருத்து சேர்க்கக்கூடிய முழு ஹிஸ்டரியை வைத்திருக்கிறது — பிறகு அதை ரிசால்வ் செய்யுங்கள்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'உங்கள் அனலிட்டிக்ஸ் பக்கம்',
          body: "<strong>EMS › EMS அனலிட்டிக்ஸ்</strong> <strong>சைட் சம்மரி</strong> இல் திறக்கிறது: <strong>அவுட்லெட் பாராமீட்டர்ஸ் – மேனுவல் இன்புட்</strong>, <strong>இன்லெட் ஃப்ளோ (KLD) – MBBR இன்லெட்</strong> (<strong>9082.63</strong>), <strong>மொத்த எனர்ஜி கன்சம்ப்ஷன்</strong> (<strong>7230 kWh/நாள்</strong>), <strong>இன்லெட் ஃப்ளோ – கலெக்ஷன் அவுட்லெட்</strong> <strong>8911.91</strong>, <strong>ஒரு KL க்கு ஆற்றல்</strong> <strong>0.81</strong>. சார்ட்டின் மேல் ஹோவர் செய்தால் அதன் கருவிகள் தோன்றும்: டவுன்லோட், விரிவாக்கம், சார்ட் வகை, திருத்தம், தகவல்.",
          voice: "ஈ எம் எஸ் அனலிட்டிக்ஸ் சைட் சம்மரியில் திறக்கிறது — அவுட்லெட் தரம், இன்லெட் ஃப்ளோ, மொத்த ஆற்றல், ஒரு கே எல் க்கு ஆற்றல். எந்த சார்ட்டிலும் ஹோவர் செய்தால் கருவிகள் தோன்றும்.",
        },
        {
          label: 'ஜூம்', title: 'சார்ட்டைத் திறந்து, எந்தப் புள்ளியையும் படியுங்கள்',
          body: "<strong>எக்ஸ்பாண்ட்</strong> திரையை நிரப்புகிறது. ஒரு புள்ளியின் மேல் ஹோவர் செய்தால் அதன் நேரம், மதிப்பு, <strong>அக்ரிகேஷன் வகை</strong> தெரியும் — இங்கே 01:54–02:54 am க்கு <strong>3959.08</strong>, க்யுமுலேட்டிவ். லெஜண்டைக் கிளிக் செய்து தொடரை மறைக்கவும், இழுத்து ஜூம் செய்யவும், <strong>ரீசெட் ஜூம்</strong> மூலம் திரும்பவும்.",
          voice: "விரிவாக்கியதும் ஒவ்வொரு புள்ளியும் அதன் நேரம், மதிப்பு, அக்ரிகேஷனைக் காட்டுகிறது. இழுத்து ஜூம் செய்து, ரீசெட் ஜூம் மூலம் திரும்புங்கள்.",
        },
        {
          label: 'வியூ', title: 'சார்ட், டேபிள் அல்லது பார் — பிறகு சேமியுங்கள்',
          body: "ஒவ்வொரு சார்ட்டின் மெனுவும் அதை <strong>டேபிள்</strong> அல்லது <strong>பார் கிராஃப்</strong> ஆக மாற்றுகிறது — இங்கே இன்லெட் ஃப்ளோ ஒரு வரி டேபிள் ஆனது, <strong>MBBR இன்லெட் 1</strong> <strong>9082.63</strong>. பக்கம் மாறியதும் <strong>சேவ் கரண்ட் வியூ</strong> பட்டை தோன்றும்: <strong>சேவ்</strong> வைத்துக்கொள்ளும், <strong>சேவ் அஸ்</strong> புதிய வியூ உருவாக்கும், <strong>கேன்சல்</strong> கைவிடும்.",
          voice: "எந்த சார்ட்டையும் டேபிள் அல்லது பார் கிராஃப் ஆக மாற்றலாம். பிறகு சேவ் கரண்ட் வியூ பக்கத்தை நீங்கள் விரும்பியபடி வைத்திருக்கும்.",
        },
        {
          label: 'பிரைமரி', title: 'பிரைமரி யூனிட், சார்ட் வாரியாக',
          body: "<strong>பிரைமரி யூனிட்</strong> ஆலையின் தொடக்கப் பகுதியைக் காட்டுகிறது: <strong>இன்லெட் ஃப்ளோ – கலெக்ஷன் அவுட்லெட்</strong>, <strong>கலெக்ஷன் முதல் EQT-1</strong>, <strong>EQT முதல் MBBR-1</strong> ஃப்ளோக்கள், <strong>பிரைமரி டேங்க்குகளின் நிலை</strong>, <strong>பார் ஸ்கிரீன் சோக்கிங்</strong>, <strong>EQT ப்ளோயர் இயக்க நிலை</strong>, <strong>ஈக்வலைசேஷன் ப்ளோயர் வென்ட் வால்வ்</strong> — பிறகு கீழே ப்ளோயர் அதிர்வு மற்றும் டேங்க் தர அட்டவணைகள்.",
          voice: "பிரைமரி யூனிட் இன்லெட் ஃப்ளோ, டேங்க் நிலைகள், பார் ஸ்கிரீன் சோக்கிங், ஈக்வலைசேஷன் ப்ளோயர்கள் மற்றும் அவற்றின் வென்ட் வால்வ் சார்ட்டுகளைக் காட்டுகிறது.",
        },
        {
          label: 'செகண்டரி', title: 'செகண்டரி மற்றும் டெர்ஷியரி',
          body: "<strong>செகண்டரி யூனிட்</strong> MBBR DO, ப்ளோயர் இயக்க நிலை, அதிர்வு, காற்று ஓட்டம் சார்ட்டுகளைக் காட்டுகிறது, பிறகு <strong>ஏரேஷன் டேங்க் ப்ளோயர்-1 VFD</strong> (அதிர்வெண், மின்னோட்டம், RPM <strong>1350</strong>) மற்றும் KPI டைல்கள்: <strong>MBBR-1 ரிடென்ஷன் டைம்</strong> <strong>2.03</strong>, <strong>டெல்டா BOD</strong> <strong>514</strong>, <strong>ஏரேஷன் டேங்கில் ரிடென்ஷன் டைம்</strong> <strong>6.83</strong>, COD லோடிங், F/M விகிதம், காற்றுத் தேவை. பிறகு <strong>டெர்ஷியரி யூனிட்</strong> இல் <strong>ஃபில்டர் செட் 1–3</strong> அழுத்தம் மற்றும் <strong>இறுதி டேங்க் நிலை</strong>.",
          voice: "செகண்டரி யூனிட் எம் பி பி ஆர், ப்ளோயர்கள், அவற்றின் வி எஃப் டி யை ரிடென்ஷன் டைம் டைல்களுடன் காட்டுகிறது. டெர்ஷியரியில் ஃபில்டர் அழுத்தமும் இறுதி டேங்க் நிலையும்.",
        },
        {
          label: 'டீவாட்டரிங்', title: 'ஸ்லட்ஜ் டீவாட்டரிங்',
          body: "<strong>ஸ்லட்ஜ் டீவாட்டரிங் யூனிட்</strong> <strong>ஸ்க்ரூ பிரஸ் ஃப்ளோ</strong> (<strong>1.42 KL/மணி</strong>), <strong>ஸ்க்ரூ பிரஸ் இன்லெட் ஃப்ளோ</strong> (<strong>34.26 KLD</strong>), <strong>ஸ்க்ரூ பிரஸ் இயந்திரத்தின்</strong> இயக்கம் மற்றும் அஜிடேட்டர் நிலை, <strong>ஸ்க்ரூ பாலி ஃபீட் பம்ப்</strong> ஆகியவற்றைக் காட்டுகிறது — பிறகு ஸ்லட்ஜ் ஃபீட் பம்ப், சென்ட்ரிஃப்யூஜ் இயந்திரம், சென்ட்ரிஃப்யூஜ் பாலி மற்றும் ஃபீட் பம்ப்கள், லோட் செல் டோட்டலைசர்.",
          voice: "டீவாட்டரிங் யூனிட் ஸ்க்ரூ பிரஸ்ஸைக் கண்காணிக்கிறது — அதன் ஃப்ளோக்கள், இயக்க நிலை, பாலி ஃபீட் பம்ப் — கீழே சென்ட்ரிஃப்யூஜ் வரிசை.",
        },
        {
          label: 'பவர்', title: 'ஆற்றல், மற்றும் எது இயங்கியது',
          body: "அனலிட்டிக்ஸ் பக்கத்தின் <strong>எனர்ஜி கன்சம்ப்ஷன்</strong> பகுதி ஆற்றலை <strong>ஒவ்வொரு மீட்டர் வாரியாக</strong> பிரித்து, மொத்தத்தை (<strong>7230</strong>) காட்டி, <strong>ப்ளோயர் பேனல் மீட்டர்</strong> (<strong>3.54 MW</strong>) சார்ட் மற்றும் <strong>உபகரண இயக்க நேரம்</strong> பட்டியலைத் தருகிறது — ஈக்வலைசேஷன் ப்ளோயர்-1 <strong>9.98</strong>, ஏரேஷன் ப்ளோயர்-1 <strong>15.93</strong> போன்றவை. கீழே <strong>ட்ரிப் ஸ்டேட்டஸ்</strong> இல் ஒவ்வொரு ப்ளோயரும் <strong>0</strong> ட்ரிப்.",
          voice: "ஆற்றல் மீட்டர் வாரியாகப் பிரிக்கப்பட்டு, ஒவ்வொரு இயந்திரத்தின் இயக்க நேரத்துடன் — ட்ரிப் ஸ்டேட்டஸில் இந்தக் காலத்தில் ட்ரிப் எதுவும் இல்லை.",
        },
        {
          label: 'வரம்பு', title: 'எந்தக் காலமும், எந்தத் தெளிவுத்திறனும்',
          body: "ரேஞ்ச் பிக்கரில் <strong>இன்று</strong> முதல் <strong>கடைசி 6 மாதங்கள்</strong> வரை அல்லது <strong>கஸ்டம்</strong>, <strong>12</strong> அல்லது <strong>24 மணிநேர</strong> கடிகாரத்தில் <strong>இருந்து</strong> / <strong>வரை</strong> நேரம், தினசரி நேர இடைவெளியை மீண்டும் பயன்படுத்த <strong>ஸ்மார்ட் ஹவர்ஸ்</strong> உள்ளன. கிரானுலாரிட்டி காலத்தைப் பின்பற்றுகிறது — குறுகிய காலத்துக்கு <strong>மணிநேரம்</strong> அல்லது <strong>நாட்கள்</strong>, <strong>கடைசி 6 மாதங்களுக்கு</strong> <strong>வாரங்கள்</strong> அல்லது <strong>மாதங்கள்</strong>. <strong>அப்ளை செலக்ஷன்</strong> ஒவ்வொரு சார்ட்டையும் மீண்டும் வரைகிறது.",
          voice: "ப்ரீசெட் அல்லது கஸ்டம் தேதிகளைத் தேர்ந்தெடுங்கள். கிரானுலாரிட்டி காலத்தைப் பின்பற்றுகிறது — ஆறு மாதங்களுக்கு வாரங்கள் அல்லது மாதங்கள் — அப்ளை ஒவ்வொரு சார்ட்டையும் மீண்டும் வரைகிறது.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'ஆலை, நேரலையில்',
          body: "<strong>விஷுவலைசேஷன் › ஸ்காடாவியூ</strong> EMS ஹரித்வாரை <strong>LIVE</strong> செயல்முறை வரைபடமாகக் காட்டுகிறது — கலெக்ஷன் டேங்க், பார் ஸ்கிரீன், ஆயில் & கிரீஸ் ட்ராப், ஈக்வலைசேஷன், ட்யூப் செட்லர்கள், MBBR கள், ஏரேஷன் டேங்க், செகண்டரி கிளாரிஃபையர்கள், ஃபில்டர் ஃபீட் டேங்க், PSF மற்றும் ACF ஃபில்டர்கள், க்ளியர் வாட்டர் டேங்க், ஸ்க்ரூ பிரஸ். ஒரு நேரத்தைத் தேர்ந்து <strong>ப்ளே</strong> அழுத்தி மீண்டும் பாருங்கள், <strong>குரூப் கண்ட்ரோல்</strong> அல்லது <strong>யூனிட் ப்ராசஸஸ்</strong> திறங்கள், கீழ் வலதில் உள்ள கட்டுப்பாடுகளால் ஜூம் செய்யுங்கள்.",
          voice: "ஸ்காடாவியூ முழு ஆலையையும் நேரலையில் காட்டுகிறது. எந்தக் கணத்தையும் மீண்டும் பாருங்கள், குரூப் கண்ட்ரோல் அல்லது யூனிட் ப்ராசஸஸ் திறங்கள், எங்கும் ஜூம் செய்யுங்கள்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "தினசரிப் படத்துக்கு <strong>டாஷ்போர்டு</strong>. கையிருப்புக்கு <strong>இன்வென்டரி</strong>, <strong>கெமிக்கல் லாக்</strong>. கவனம் தேவைப்படுவதற்கு <strong>டிக்கெட்டுகள்</strong>. யூனிட் வாரியான போக்குகளுக்கு <strong>EMS அனலிட்டிக்ஸ்</strong>. நேரடி செயல்முறைக்கு <strong>ஸ்காடாவியூ</strong>.",
          voice: "தினசரிப் படத்துக்கு டாஷ்போர்டு, கையிருப்புக்கு இன்வென்டரி, கவனத்துக்கு டிக்கெட்டுகள், போக்குகளுக்கு ஈ எம் எஸ் அனலிட்டிக்ஸ், நேரலைக்கு ஸ்காடாவியூ.",
        },
      ],
    },
  },
};

export default lesson;
