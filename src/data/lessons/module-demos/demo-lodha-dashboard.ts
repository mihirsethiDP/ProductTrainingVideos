import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-lodha-dashboard`;

/**
 * Demo — Lodha (STP-1 720 KLD, STP-2 810 KLD, WTP 2560 KLD), platform tour.
 * (hidden module-demos)
 *
 * Built from the 7:44 recording uploaded 2026-11-23 (Content Studio job
 * dfae7833, demo_style=overview, no notes). New demo — no earlier Lodha demo.
 *
 * The recording: Dashboard scrolled top to bottom (Map View & Ticket history,
 * Water Quantity cards for all three plants, Water Quality Parameters,
 * Biological Process Health, Energy Consumption, Current Status tank levels
 * with the widget tools, Choose chart → Table / Bar Graph, an expanded tank
 * chart) → side menu → Logbook Data Input (OCR Data Input, asset dropdown) →
 * Inventory (All Asset + per-plant tabs) → Chemical Logs → Tickets (counters,
 * list, one ticket opened with its escalation history) → ScadaView – Lodha
 * Workspace → STP-1 and STP-2 process diagrams → Lodha STP-1 Analytics
 * (Plant Summary, expanded Total Energy Consumption with tooltip, Table / Bar
 * Graph, Primary / Secondary / Sludge Dewatering / Energy and Equipment) →
 * Lodha STP-2 Analytics (summary, expanded chart, Primary / Secondary /
 * Tertiary units, Auto Manual and Trip Status, granularity dropdown, range
 * picker with 12/24 hour, Smart Hours, Last 3 Months, Days / Weeks) → Lodha
 * WTP Analytics (summary + Outlet Quality, KPI tiles, Flow and Quality with
 * the expanded Tank Levels chart and series toggling, banded pH / FRC /
 * turbidity charts, conductivity, feed TDS, energy, pressure of filters,
 * Equipment Performance and Maintenance, running hours, Auto Manual, Trip).
 *
 * Style: `overview` — one step per page or feature area, short voices.
 * Real 1280px frames; the baked OS cursor is erased from every one (delogo on
 * flat ground, cross-frame patches from neighbouring frames, and in-frame
 * clones on the ticket history row and the energy card border).
 *
 * Judgement calls:
 *  - The dashboard's page header and controls are never on screen (the
 *    recording starts scrolled), so the controls step uses the identical bar
 *    on the STP-2 analytics page.
 *  - The expanded-chart step uses a frame without the hover tooltip: in every
 *    tooltip frame the pointer sits on the tooltip text. The copy still
 *    describes the tooltip (value + Aggregation Type: Cumulative).
 *  - STP-1's unit sections and STP-2's unit sections look alike; STP-1's are
 *    named in the analytics step, STP-2's get the unit step.
 *  - Task List and each plant's Maintenance entry appear in the menu only
 *    (never opened), so they are named, not demonstrated.
 *  - Chemical Logs had no entries in the recorded window; the copy says so.
 */
const lesson: Lesson = {
  id: 'demo-lodha-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 6,
  estimatedMinutes: 3,
  expiresAt: '2026-12-23', // 30 days after the job's upload (2026-11-23) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    controls: `${BASE}/controls.jpg`,
    map: `${BASE}/map.jpg`,
    quantity: `${BASE}/quantity.jpg`,
    quality: `${BASE}/quality.jpg`,
    energy: `${BASE}/energy.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    ocr: `${BASE}/ocr.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    chemlogs: `${BASE}/chemlogs.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    ticket: `${BASE}/ticket.jpg`,
    scada: `${BASE}/scada.jpg`,
    process: `${BASE}/process.jpg`,
    expand: `${BASE}/expand.jpg`,
    stp2: `${BASE}/stp2.jpg`,
    stp2units: `${BASE}/stp2units.jpg`,
    range: `${BASE}/range.jpg`,
    wtp: `${BASE}/wtp.jpg`,
    wtpquality: `${BASE}/wtpquality.jpg`,
    wtpequip: `${BASE}/wtpequip.jpg`,
  },
  layouts: [
    // S1 — side menu
    {
      mode: 'detail', screenshot: 'nav', caption: 'Everything, one menu away',
      spotlight: { top: '9%', left: '0%', width: '15.6%', height: '66%' },
      cursor: [
        { at: 0, x: 5, y: 12.8 },
        { at: 0.15, x: 6, y: 19.7 },
        { at: 0.3, x: 5, y: 26.5 },
        { at: 0.45, x: 4, y: 33.3 },
        { at: 0.6, x: 6, y: 49 },
        { at: 0.75, x: 8, y: 57.7 },
        { at: 0.85, x: 8, y: 64.6 },
        { at: 0.95, x: 8, y: 71.6 },
      ],
    },
    // S2 — page controls (analytics page bar)
    {
      mode: 'detail', screenshot: 'controls', caption: 'The controls that drive every page',
      spotlight: { top: '19%', left: '1.5%', width: '97%', height: '13%' },
      cursor: [
        { at: 0, x: 11, y: 25.3 },
        { at: 0.25, x: 46, y: 25.3 },
        { at: 0.4, x: 55, y: 25.3 },
        { at: 0.55, x: 68, y: 25.3 },
        { at: 0.65, x: 85, y: 25.3 },
        { at: 0.8, x: 80.9, y: 13.8 },
        { at: 0.9, x: 85.9, y: 13.8 },
        { at: 0.97, x: 90.9, y: 13.8 },
      ],
    },
    // S3 — Map View & Ticket history
    {
      mode: 'detail', screenshot: 'map', caption: 'Your plants on a map',
      spotlight: { top: '14%', left: '1.5%', width: '97%', height: '69%' },
      cursor: [
        { at: 0, x: 27.1, y: 51.9 },
        { at: 0.3, x: 42.2, y: 17 },
        { at: 0.55, x: 63.3, y: 30.6 },
        { at: 0.75, x: 63.3, y: 40.8 },
        { at: 0.9, x: 80, y: 79.9 },
      ],
    },
    // S4 — Water Quantity cards
    {
      mode: 'detail', screenshot: 'quantity', caption: 'Water in, water out, per plant',
      spotlight: { top: '15%', left: '1.5%', width: '80.5%', height: '69%' },
      cursor: [
        { at: 0, x: 9.1, y: 28.9 },
        { at: 0.15, x: 25.5, y: 28.9 },
        { at: 0.3, x: 41.6, y: 28.9 },
        { at: 0.45, x: 57.9, y: 28.9 },
        { at: 0.55, x: 74, y: 28.9 },
        { at: 0.7, x: 9.1, y: 64.6 },
        { at: 0.8, x: 25.5, y: 64.6 },
        { at: 0.9, x: 41.6, y: 64.6 },
      ],
    },
    // S5 — Water Quality Parameters + Biological Process Health
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality against its reference',
      spotlight: { top: '20.5%', left: '1.5%', width: '97%', height: '34.5%' },
      cursor: [
        { at: 0, x: 22, y: 33 },
        { at: 0.25, x: 54, y: 40 },
        { at: 0.5, x: 86, y: 38 },
        { at: 0.75, x: 9, y: 79 },
        { at: 0.9, x: 25.5, y: 79 },
      ],
    },
    // S6 — Energy Consumption
    {
      mode: 'detail', screenshot: 'energy', caption: 'Energy, plant by plant',
      spotlight: { top: '59.5%', left: '1.5%', width: '97%', height: '34%' },
      cursor: [
        { at: 0, x: 25.5, y: 30 },
        { at: 0.25, x: 9.1, y: 74 },
        { at: 0.4, x: 25.5, y: 74 },
        { at: 0.55, x: 41.6, y: 74 },
        { at: 0.7, x: 57.9, y: 74 },
        { at: 0.82, x: 74, y: 74 },
        { at: 0.94, x: 90.3, y: 74 },
      ],
    },
    // S7 — Current Status tank levels + widget tools
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Tank levels, and how to change a chart',
      spotlight: { top: '30%', left: '1.5%', width: '97%', height: '69%' },
      cursor: [
        { at: 0, x: 23, y: 60 },
        { at: 0.3, x: 28.5, y: 32.8, click: true },
        { at: 0.6, x: 51, y: 55 },
        { at: 0.85, x: 83, y: 55 },
      ],
    },
    // S8 — Logbook Data Input (OCR)
    {
      mode: 'detail', screenshot: 'ocr', caption: 'Logbook entries from a photo',
      spotlight: { top: '18%', left: '1.5%', width: '48.5%', height: '27%' },
      cursor: [
        { at: 0, x: 47, y: 22.5, click: true },
        { at: 0.25, x: 10, y: 30.1 },
        { at: 0.4, x: 10, y: 35.2 },
        { at: 0.55, x: 10, y: 40.3 },
        { at: 0.75, x: 74, y: 22.3 },
        { at: 0.9, x: 50, y: 47 },
      ],
    },
    // S9 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Stock and consumption',
      spotlight: { top: '38.5%', left: '1.5%', width: '97%', height: '61%' },
      cursor: [
        { at: 0, x: 4.9, y: 19.6 },
        { at: 0.12, x: 16, y: 19.6 },
        { at: 0.24, x: 30.7, y: 19.6 },
        { at: 0.36, x: 44, y: 19.6 },
        { at: 0.5, x: 5, y: 83 },
        { at: 0.65, x: 36, y: 83 },
        { at: 0.8, x: 77, y: 51 },
        { at: 0.92, x: 90, y: 51 },
      ],
    },
    // S10 — Chemical Logs
    {
      mode: 'detail', screenshot: 'chemlogs', caption: 'Every movement, logged',
      spotlight: { top: '9.5%', left: '1.5%', width: '97%', height: '67%' },
      cursor: [
        { at: 0, x: 4, y: 11.2 },
        { at: 0.15, x: 52, y: 17.8 },
        { at: 0.3, x: 38.5, y: 28.4 },
        { at: 0.45, x: 63, y: 28.4 },
        { at: 0.6, x: 87, y: 28.4 },
        { at: 0.75, x: 13, y: 40 },
        { at: 0.9, x: 13, y: 64 },
      ],
    },
    // S11 — Tickets
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Tickets, counted and sorted',
      spotlight: { top: '17.5%', left: '1.5%', width: '97%', height: '17.5%' },
      cursor: [
        { at: 0, x: 15, y: 23 },
        { at: 0.2, x: 41, y: 23 },
        { at: 0.4, x: 63, y: 25 },
        { at: 0.55, x: 85, y: 25 },
        { at: 0.75, x: 20, y: 41.7 },
        { at: 0.92, x: 93, y: 13.8 },
      ],
    },
    // S12 — one ticket opened
    {
      mode: 'detail', screenshot: 'ticket', caption: 'The full story of a ticket',
      spotlight: { top: '28%', left: '52.5%', width: '37.5%', height: '47%' },
      cursor: [
        { at: 0, x: 22, y: 24.7 },
        { at: 0.2, x: 30, y: 59 },
        { at: 0.35, x: 30, y: 71 },
        { at: 0.5, x: 56, y: 30.6 },
        { at: 0.62, x: 72, y: 45 },
        { at: 0.72, x: 72, y: 55 },
        { at: 0.82, x: 72, y: 65 },
        { at: 0.94, x: 87.7, y: 82 },
      ],
    },
    // S13 — ScadaView workspace
    {
      mode: 'detail', screenshot: 'scada', caption: 'All three plants, live',
      spotlight: { top: '38%', left: '4%', width: '89%', height: '39%' },
      cursor: [
        { at: 0, x: 13, y: 13.3 },
        { at: 0.25, x: 16, y: 58 },
        { at: 0.45, x: 47, y: 58 },
        { at: 0.65, x: 81, y: 58 },
        { at: 0.85, x: 83, y: 13.1 },
      ],
    },
    // S14 — STP-1 process diagram
    {
      mode: 'detail', screenshot: 'process', caption: 'The process, end to end',
      spotlight: { top: '40%', left: '3%', width: '94%', height: '41%' },
      cursor: [
        { at: 0, x: 6, y: 12 },
        { at: 0.15, x: 16, y: 17.7 },
        { at: 0.3, x: 50, y: 52 },
        { at: 0.5, x: 65.2, y: 17.7 },
        { at: 0.62, x: 71, y: 17.7 },
        { at: 0.74, x: 80, y: 17.7 },
        { at: 0.9, x: 91, y: 83 },
      ],
    },
    // S15 — STP-1 Analytics, expanded chart
    {
      mode: 'detail', screenshot: 'expand', caption: 'Open a chart, read any point',
      spotlight: { top: '14%', left: '4.8%', width: '90.3%', height: '71%' },
      cursor: [
        { at: 0, x: 13, y: 16.5 },
        { at: 0.2, x: 47, y: 24.6 },
        { at: 0.45, x: 52, y: 50 },
        { at: 0.65, x: 93, y: 31 },
        { at: 0.8, x: 87.8, y: 16.3 },
        { at: 0.93, x: 94.3, y: 16.3 },
      ],
    },
    // S16 — STP-2 Analytics summary + KPI tiles
    {
      mode: 'detail', screenshot: 'stp2', caption: 'STP-2 at a glance',
      spotlight: { top: '55.5%', left: '1.8%', width: '22.3%', height: '44.5%' },
      cursor: [
        { at: 0, x: 13, y: 25 },
        { at: 0.15, x: 37, y: 25 },
        { at: 0.3, x: 62, y: 25 },
        { at: 0.45, x: 86, y: 25 },
        { at: 0.6, x: 7, y: 70 },
        { at: 0.72, x: 18.5, y: 70 },
        { at: 0.84, x: 7, y: 90 },
        { at: 0.94, x: 18.5, y: 90 },
      ],
    },
    // S17 — STP-2 unit status
    {
      mode: 'detail', screenshot: 'stp2units', caption: 'Unit by unit, pump by pump',
      spotlight: { top: '46%', left: '1.5%', width: '96%', height: '52%' },
      cursor: [
        { at: 0, x: 57, y: 20 },
        { at: 0.25, x: 12, y: 48.5 },
        { at: 0.45, x: 33, y: 48.5 },
        { at: 0.65, x: 57, y: 48.5 },
        { at: 0.8, x: 81, y: 55 },
        { at: 0.92, x: 93, y: 55 },
      ],
    },
    // S18 — range picker
    {
      mode: 'detail', screenshot: 'range', caption: 'Any window, any resolution',
      spotlight: { top: '13%', left: '37.5%', width: '40%', height: '12%' },
      cursor: [
        { at: 0, x: 52.4, y: 15.5 },
        { at: 0.15, x: 48.8, y: 22 },
        { at: 0.28, x: 63.6, y: 22 },
        { at: 0.4, x: 26, y: 30.6 },
        { at: 0.52, x: 18.3, y: 41 },
        { at: 0.64, x: 19, y: 61.7 },
        { at: 0.74, x: 19, y: 67.7 },
        { at: 0.84, x: 52.5, y: 51 },
        { at: 0.95, x: 77.8, y: 85.7, click: true },
      ],
    },
    // S19 — WTP Analytics summary
    {
      mode: 'detail', screenshot: 'wtp', caption: "The WTP's summary",
      spotlight: { top: '19%', left: '1.5%', width: '97%', height: '52%' },
      cursor: [
        { at: 0, x: 9.5, y: 21.5 },
        { at: 0.15, x: 36, y: 46 },
        { at: 0.3, x: 66, y: 34 },
        { at: 0.45, x: 85, y: 28 },
        { at: 0.58, x: 85, y: 60 },
        { at: 0.72, x: 7, y: 80 },
        { at: 0.82, x: 18.3, y: 80 },
        { at: 0.9, x: 30, y: 80 },
        { at: 0.97, x: 42, y: 80 },
      ],
    },
    // S20 — WTP Flow and Quality, banded charts
    {
      mode: 'detail', screenshot: 'wtpquality', caption: 'Inside or outside the band',
      spotlight: { top: '36.7%', left: '1.5%', width: '97%', height: '52%' },
      cursor: [
        { at: 0, x: 20, y: 10 },
        { at: 0.2, x: 9, y: 39 },
        { at: 0.4, x: 45.5, y: 59.2 },
        { at: 0.65, x: 67.4, y: 72.5 },
        { at: 0.88, x: 91.7, y: 63 },
      ],
    },
    // S21 — WTP equipment
    {
      mode: 'detail', screenshot: 'wtpequip', caption: 'Equipment, valves and trips',
      spotlight: { top: '46%', left: '1.5%', width: '97%', height: '52%' },
      cursor: [
        { at: 0, x: 85, y: 15 },
        { at: 0.3, x: 15, y: 48.5 },
        { at: 0.5, x: 49, y: 48.5 },
        { at: 0.68, x: 65, y: 60 },
        { at: 0.88, x: 82, y: 48.5 },
      ],
    },
    // S22 — wrap
    {
      mode: 'detail', screenshot: 'nav', caption: 'Which page for which job',
      spotlight: { top: '9%', left: '0%', width: '15.6%', height: '66%' },
      cursor: [
        { at: 0, x: 5, y: 12.8 },
        { at: 0.2, x: 4, y: 33.3 },
        { at: 0.4, x: 6, y: 19.7 },
        { at: 0.55, x: 5, y: 26.5 },
        { at: 0.7, x: 6, y: 49 },
        { at: 0.85, x: 8, y: 64.6 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Lodha,<br><em>three plants in one place.</em>',
      subtitle:
        'A quick tour of your platform — dashboard, logbook, inventory, tickets, ScadaView and the analytics for STP-1, STP-2 and the WTP — and how to move between them.',
      chapter: 'Demo · Lodha',
      steps: [
        {
          label: 'Navigate', title: 'Everything, one menu away',
          body: "The <strong>menu icon</strong> opens the side navigation: <strong>Dashboard</strong>, <strong>Logbook Data Input</strong>, <strong>Inventory</strong>, <strong>Tickets</strong>, <strong>Task List</strong>, <strong>ScadaView – Lodha Workspace</strong>, and one entry per plant — <strong>Lodha STP-1 (720 KLD)</strong>, <strong>Lodha STP-2 (810 KLD)</strong> and <strong>Lodha WTP (2560 KLD)</strong> — each opening to its <strong>Analytics</strong> and <strong>Maintenance</strong> pages.",
          voice: "The menu opens every page — the dashboard, logbook input, inventory, tickets, ScadaView, and an analytics page for each of your three plants.",
        },
        {
          label: 'Controls', title: 'The controls that drive every page',
          body: "Every page shares one bar: the <strong>Page</strong> selector, <strong>Granularity</strong> (here <strong>Hours</strong>), the preset <strong>Last 24 Hours</strong> and the <strong>From</strong> / <strong>To</strong> dates — together they drive every widget below. Top right sit <strong>refresh</strong>, <strong>download</strong>, <strong>settings</strong> and <strong>edit layout</strong>, and <strong>Save Current View</strong> keeps your choices.",
          voice: "On every page, the page selector, granularity and date range drive all the widgets. Refresh, download and settings sit top right.",
        },
        {
          label: 'Map', title: 'Your plants on a map',
          body: "The <strong>Dashboard</strong> opens on <strong>Map View &amp; Ticket history</strong>. The map pins your site with its score — here <strong>3.1</strong> — and can switch to <strong>Plant Score</strong>. Beside it, <strong>Tickets History</strong> lists each issue with its plant, time and type, like <em>ACF water is turbid (&gt;5 NTU)</em> at Lodha STP-2.",
          voice: "The dashboard opens on a map of your site and its score, next to the ticket history for all three plants.",
        },
        {
          label: 'Quantity', title: 'Water in, water out, per plant',
          body: "<strong>Water Quantity</strong> puts every plant side by side since <strong>May 01</strong>: the WTP's <strong>Hydraulic Efficiency</strong> <strong>88.76%</strong>, inlet <strong>255,494.78 KL</strong> and outlet <strong>226,773.81 KL</strong>; STP-1 outlet <strong>58,410 KL</strong>; STP-2 inlet <strong>88,525.57 KL</strong> and outlet <strong>7,411 KL</strong>. Each card shows its window and the change against the previous one.",
          voice: "Water quantity puts inlet, outlet and hydraulic efficiency for all three plants side by side, each with its change from the last period.",
        },
        {
          label: 'Quality', title: 'Quality against its reference',
          body: "<strong>Water Quality Parameters</strong> lists inlet and outlet <strong>pH</strong> and <strong>TDS</strong> for STP-1 and STP-2 against their references, and <strong>Outlet Water Quality Parameters</strong> gives the WTP's turbidity <strong>2.76 NTU</strong>, pH <strong>8.34</strong> and FRC <strong>0.04 ppm</strong>. <strong>Biological Process Health</strong> follows with MBBR SV-30, pH and DO cards.",
          voice: "Quality tables show pH, TDS, turbidity and chlorine against their references, followed by the biological health of each M B B R.",
        },
        {
          label: 'Energy', title: 'Energy, plant by plant',
          body: "<strong>Energy Consumption</strong> pairs total energy with <strong>Energy Per KL</strong> for each plant: STP-1 <strong>95,177.1</strong> at <strong>1.63</strong> per KL, STP-2 <strong>116,866.5</strong> at <strong>1.32</strong>, and the WTP <strong>141,307.9</strong> at <strong>0.62</strong>. Above it, the second row of bio cards shows MBBR-2 SV-30 <strong>10</strong> and MBBR DO.",
          voice: "Energy cards pair each plant's total consumption with its energy per kilolitre — the W T P runs leanest, at point six two.",
        },
        {
          label: 'Tanks', title: 'Tank levels, and how to change a chart',
          body: "<strong>Current Status</strong> charts <strong>Tank Levels (%)</strong> for each plant — equalization, treated water, intermediate and sludge holding tanks. Hover a widget for its tools: <strong>download</strong>, <strong>expand</strong>, <strong>Choose chart</strong> (switch to a <strong>Table</strong> or <strong>Bar Graph</strong>), <strong>edit</strong> and <strong>info</strong>.",
          voice: "Current status charts every tank level. Hover any widget to download it, expand it, or switch it to a table or bar graph.",
        },
        {
          label: 'Logbook', title: 'Logbook entries from a photo',
          body: "<strong>Logbook Data Input</strong> opens <strong>OCR Data Input</strong>: choose the <strong>Asset</strong> — Lodha STP-1, STP-2 or WTP — and its <strong>Logbook Template</strong>, then drag in or browse for a photo of the logbook page (JPG, PNG or JPEG, up to 100 MB).",
          voice: "Logbook data input reads a photo of your logbook. Pick the plant and its template, then upload the page.",
        },
        {
          label: 'Inventory', title: 'Stock and consumption',
          body: "<strong>Inventory</strong> has a tab for <strong>All Asset</strong> and for each plant. Every chemical — <strong>Urea</strong>, <strong>DAP</strong>, <strong>Hypo</strong>, <strong>Poly</strong>, <strong>Alum</strong>, <strong>Jaggery</strong> — shows its store, <strong>Stock Available</strong> (Hypo <strong>5,700 Kg</strong>), <strong>Last Consumption</strong>, and <strong>Actual</strong> against <strong>Expected</strong> consumption. A warning icon flags items that need attention.",
          voice: "Inventory tracks every chemical's stock and last use, with actual against expected consumption, for each plant.",
        },
        {
          label: 'Chemical logs', title: 'Every movement, logged',
          body: "Opening an item leads to <strong>Chemical Logs</strong>: <strong>Current Balance</strong>, <strong>Current Month Usage</strong> and <strong>Last Month Usage</strong> for each plant tab, a <strong>Date</strong> range, and filters for <strong>Remarks</strong> and <strong>Amount</strong>. No entries were recorded in this window.",
          voice: "Chemical logs show the balance and monthly usage, with every entry filterable by date, remark and amount.",
        },
        {
          label: 'Tickets', title: 'Tickets, counted and sorted',
          body: "<strong>Tickets</strong> counts <strong>15 open</strong> (15 overdue, 15 escalated) and <strong>53 closed</strong>, split by category — Electrical, Process, Mechanical and more. Each ticket shows its tags (<em>automatic</em>, <em>overdue</em>, <em>Escalation Level 3</em>), created time, category and plant. <strong>Create New Ticket</strong> sits top right.",
          voice: "Tickets counts open and closed issues by category. Each one shows its tags, its plant and its escalation level.",
        },
        {
          label: 'Ticket', title: 'The full story of a ticket',
          body: "A ticket opens with when it was created, the plant, the <strong>Problem</strong> — here <em>Any of the EQT Blower is in Manual mode</em> — and the <strong>Description</strong> of what to do. The <strong>History</strong> records each escalation, Level 1 through Level 3; add a comment, or <strong>Resolve</strong> it.",
          voice: "Each ticket keeps the problem, what to do, and a history of every escalation. Comment on it, then resolve it.",
        },
        {
          label: 'ScadaView', title: 'All three plants, live',
          body: "<strong>ScadaView – Lodha Workspace</strong> shows <strong>Lodha STP-1 (720 KLD)</strong>, <strong>Lodha STP-2 (810 KLD)</strong> and <strong>Lodha WTP (2560 KLD)</strong> on one <strong>LIVE</strong> canvas. Pick a time and press <strong>play</strong> to replay it; click a plant to open its process.",
          voice: "ScadaView puts all three plants on one live canvas. Click a plant to open its process.",
        },
        {
          label: 'Process', title: 'The process, end to end',
          body: "<strong>Lodha STP-1</strong> opens as a live process diagram — screens, equalization, MBBR tanks, tube settlers, sludge sumps, the filter press, PSF and ACF filters and the treated sewage tank. Use <strong>Group Control</strong> and <strong>Unit Processes</strong>, <strong>Set as Default</strong>, and zoom bottom right. STP-2 opens the same way.",
          voice: "Each plant opens as a live process diagram. Replay any moment, open group control or unit processes, and zoom in.",
        },
        {
          label: 'Analytics', title: 'Open a chart, read any point',
          body: "Each plant's <strong>Analytics</strong> page opens on <strong>Plant Summary</strong> — for STP-1, <strong>Total Energy Consumption</strong>, a custom widget and KPI cards. <strong>Expand</strong> any chart: hover a point for its value and <strong>Aggregation Type</strong> (here <strong>Cumulative</strong>, ending at <strong>459.82</strong>), drag to zoom, and <strong>Reset Zoom</strong> returns. Below, the page follows the plant — <strong>Primary</strong>, <strong>Secondary</strong>, sludge dewatering, energy and equipment.",
          voice: "Each plant's analytics page opens on its summary. Expand any chart to read each point, zoom in, and reset.",
        },
        {
          label: 'STP-2', title: 'STP-2 at a glance',
          body: "<strong>Lodha STP-2 (810 KLD) Analytics</strong> charts <strong>Energy Consumption</strong> (<strong>429.69</strong>), <strong>Inlet Water per day</strong> (<strong>248.95 KL</strong>) and <strong>Outlet Water per day</strong> (<strong>175 KL</strong>), then KPI tiles: <strong>Inlet flow</strong> against the 810 KLD capacity, <strong>Outlet Flow</strong> <strong>175.00</strong>, <strong>Energy Per KL</strong> <strong>1.73</strong> and <strong>Hydraulic Efficiency</strong>.",
          voice: "STP-2's summary charts energy, inlet and outlet water, then tiles for flow against capacity and energy per kilolitre.",
        },
        {
          label: 'Units', title: 'Unit by unit, pump by pump',
          body: "The page then walks the <strong>Primary</strong>, <strong>Secondary</strong> and <strong>Tertiary</strong> units — running hours for each pump (Raw Sewage Transfer Pump-4 <strong>5.58</strong>, Recycle Pump-1 <strong>8.07</strong>), <strong>Auto Manual Status</strong> for secondary and tertiary equipment, <strong>Trip Status</strong>, and tiles for <strong>Total Energy</strong> and <strong>Energy Per KL</strong>.",
          voice: "Further down, every unit shows running hours, auto or manual status, and trips for each pump and blower.",
        },
        {
          label: 'Range', title: 'Any window, any resolution',
          body: "The range picker offers <strong>Today</strong> through <strong>Last 6 Months</strong> or <strong>Custom</strong> dates, a <strong>12</strong> or <strong>24 Hour</strong> clock, and <strong>Smart Hours</strong> to repeat a daily time slot. Granularity follows the window — <strong>Days</strong> or <strong>Weeks</strong> here — and <strong>Apply Selection</strong> redraws every chart.",
          voice: "Pick a preset or custom dates. Granularity follows the window, and apply selection redraws every chart.",
        },
        {
          label: 'WTP', title: "The WTP's summary",
          body: "<strong>Lodha WTP (2560 KLD) Analytics</strong> opens on inlet flow at the cascade aerator, outlet flow, <strong>Total Energy Consumption</strong> (<strong>733.91</strong>) and an <strong>Outlet Quality</strong> table — pH <strong>8.18</strong>, turbidity <strong>2.30</strong>, conductivity <strong>62.83</strong>, FRC <strong>0.05</strong>, temperature <strong>23.19</strong>. KPI tiles add energy per KL, outlet pH and TDS.",
          voice: "The W T P page opens on flow, energy and an outlet quality table — pH, turbidity, conductivity and chlorine.",
        },
        {
          label: 'Bands', title: 'Inside or outside the band',
          body: "<strong>Flow and Quality</strong> charts tank levels and volumes, then shades each quality chart with its acceptable band: <strong>pH at Outlet</strong> <strong>8.36</strong> sits in the green, <strong>FRC at Outlet</strong> <strong>0.04 ppm</strong> sits below its 0.2–0.5 band, and <strong>Turbidity at Outlet</strong> ends at <strong>2.88</strong>. Conductivity, feed water TDS and filter pressures follow.",
          voice: "Quality charts are shaded with their acceptable band — here pH is in range, while free chlorine sits below it.",
        },
        {
          label: 'Equipment', title: 'Equipment, valves and trips',
          body: "<strong>Energy Consumption</strong> and <strong>Pressure of filters</strong> lead into <strong>Equipment Performance and Maintenance</strong>: <strong>DMF-1 to DMF-4 motorized valve status</strong>, dosing and backwash pumps, then <strong>All equipment running hours</strong>, <strong>Auto Manual</strong> and <strong>Trip Status</strong> for every pump.",
          voice: "Then energy, filter pressures and valve status, and running hours, auto-manual and trip status for every pump.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "<strong>Dashboard</strong> for all three plants at a glance. <strong>Tickets</strong> for what needs attention. <strong>Logbook Data Input</strong> and <strong>Inventory</strong> for the records. <strong>ScadaView</strong> for the live process. Each plant's <strong>Analytics</strong> for unit-by-unit trends.",
          voice: "Dashboard for the overview, tickets for what needs attention, logbook and inventory for records, ScadaView live, and analytics for each plant.",
        },
      ],
    },
    hi: {
      title: 'लोढ़ा,<br><em>तीन प्लांट, एक जगह।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का एक छोटा दौरा — डैशबोर्ड, लॉगबुक, इन्वेंटरी, टिकट, स्काडाव्यू और STP-1, STP-2 व WTP के एनालिटिक्स — और इनके बीच कैसे जाएँ।',
      chapter: 'डेमो · लोढ़ा',
      steps: [
        {
          label: 'नेविगेशन', title: 'सब कुछ, एक मेन्यू दूर',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है: <strong>डैशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्वेंटरी</strong>, <strong>टिकट</strong>, <strong>टास्क लिस्ट</strong>, <strong>स्काडाव्यू – लोढ़ा वर्कस्पेस</strong>, और हर प्लांट की एक एंट्री — <strong>लोढ़ा STP-1 (720 KLD)</strong>, <strong>लोढ़ा STP-2 (810 KLD)</strong> और <strong>लोढ़ा WTP (2560 KLD)</strong> — जिसमें उसके <strong>एनालिटिक्स</strong> और <strong>मेंटेनेंस</strong> पेज हैं।",
          voice: "मेन्यू हर पेज खोलता है — डैशबोर्ड, लॉगबुक इनपुट, इन्वेंटरी, टिकट, स्काडाव्यू, और आपके तीनों प्लांट का एनालिटिक्स पेज।",
        },
        {
          label: 'कंट्रोल', title: 'हर पेज चलाने वाले कंट्रोल',
          body: "हर पेज पर एक ही बार है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong> (यहाँ <strong>घंटे</strong>), <strong>पिछले 24 घंटे</strong> और <strong>से</strong> / <strong>तक</strong> की तारीखें — ये मिलकर नीचे के हर विजेट को चलाते हैं। ऊपर दाईं ओर <strong>रिफ़्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्स</strong> और <strong>लेआउट एडिट</strong> हैं, और <strong>सेव करंट व्यू</strong> आपकी पसंद सहेजता है।",
          voice: "हर पेज पर पेज सिलेक्टर, ग्रैन्युलैरिटी और तारीख सीमा सभी विजेट चलाते हैं। रिफ़्रेश, डाउनलोड और सेटिंग्स ऊपर दाईं ओर हैं।",
        },
        {
          label: 'मैप', title: 'मैप पर आपके प्लांट',
          body: "<strong>डैशबोर्ड</strong> <strong>मैप व्यू और टिकट हिस्ट्री</strong> पर खुलता है। मैप आपकी साइट को उसके स्कोर के साथ दिखाता है — यहाँ <strong>3.1</strong> — और <strong>प्लांट स्कोर</strong> पर बदला जा सकता है। साथ में <strong>टिकट हिस्ट्री</strong> हर समस्या को प्लांट, समय और प्रकार के साथ दिखाती है, जैसे लोढ़ा STP-2 पर <em>ACF पानी गंदला है (&gt;5 NTU)</em>।",
          voice: "डैशबोर्ड आपकी साइट के मैप और स्कोर पर खुलता है, साथ में तीनों प्लांट की टिकट हिस्ट्री है।",
        },
        {
          label: 'मात्रा', title: 'हर प्लांट का आता-जाता पानी',
          body: "<strong>वॉटर क्वांटिटी</strong> <strong>1 मई</strong> से हर प्लांट को साथ-साथ रखता है: WTP की <strong>हाइड्रॉलिक एफ़िशिएंसी</strong> <strong>88.76%</strong>, इनलेट <strong>2,55,494.78 KL</strong> और आउटलेट <strong>2,26,773.81 KL</strong>; STP-1 आउटलेट <strong>58,410 KL</strong>; STP-2 इनलेट <strong>88,525.57 KL</strong> और आउटलेट <strong>7,411 KL</strong>। हर कार्ड अपनी अवधि और पिछली अवधि से बदलाव दिखाता है।",
          voice: "वॉटर क्वांटिटी तीनों प्लांट का इनलेट, आउटलेट और हाइड्रॉलिक एफ़िशिएंसी साथ-साथ दिखाती है, हर एक पिछली अवधि से बदलाव के साथ।",
        },
        {
          label: 'गुणवत्ता', title: 'रेफ़रेंस के सामने गुणवत्ता',
          body: "<strong>वॉटर क्वालिटी पैरामीटर्स</strong> STP-1 और STP-2 का इनलेट और आउटलेट <strong>pH</strong> और <strong>TDS</strong> उनके रेफ़रेंस के सामने दिखाता है, और <strong>आउटलेट वॉटर क्वालिटी</strong> WTP की टर्बिडिटी <strong>2.76 NTU</strong>, pH <strong>8.34</strong> और FRC <strong>0.04 ppm</strong> देता है। फिर <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> में MBBR SV-30, pH और DO कार्ड हैं।",
          voice: "क्वालिटी टेबल pH, TDS, टर्बिडिटी और क्लोरीन को उनके रेफ़रेंस के सामने दिखाती हैं, फिर हर एम बी बी आर की बायोलॉजिकल हेल्थ।",
        },
        {
          label: 'ऊर्जा', title: 'हर प्लांट की ऊर्जा',
          body: "<strong>एनर्जी कंज़म्प्शन</strong> हर प्लांट की कुल ऊर्जा को <strong>एनर्जी पर KL</strong> के साथ रखता है: STP-1 <strong>95,177.1</strong> पर <strong>1.63</strong> प्रति KL, STP-2 <strong>1,16,866.5</strong> पर <strong>1.32</strong>, और WTP <strong>1,41,307.9</strong> पर <strong>0.62</strong>। ऊपर बायो कार्ड की दूसरी पंक्ति में MBBR-2 SV-30 <strong>10</strong> और MBBR DO है।",
          voice: "एनर्जी कार्ड हर प्लांट की कुल खपत को प्रति किलोलीटर ऊर्जा के साथ दिखाते हैं — डब्ल्यू टी पी सबसे कम, शून्य दशमलव छह दो पर।",
        },
        {
          label: 'टैंक', title: 'टैंक लेवल, और चार्ट कैसे बदलें',
          body: "<strong>करंट स्टेटस</strong> हर प्लांट के <strong>टैंक लेवल (%)</strong> दिखाता है — इक्वलाइज़ेशन, ट्रीटेड वॉटर, इंटरमीडिएट और स्लज होल्डिंग टैंक। विजेट पर होवर करें तो उसके टूल दिखते हैं: <strong>डाउनलोड</strong>, <strong>एक्सपैंड</strong>, <strong>चूज़ चार्ट</strong> (<strong>टेबल</strong> या <strong>बार ग्राफ़</strong> पर बदलें), <strong>एडिट</strong> और <strong>इन्फ़ो</strong>।",
          voice: "करंट स्टेटस हर टैंक का लेवल दिखाता है। किसी भी विजेट पर होवर करके उसे डाउनलोड, बड़ा, या टेबल और बार ग्राफ़ में बदलें।",
        },
        {
          label: 'लॉगबुक', title: 'फ़ोटो से लॉगबुक एंट्री',
          body: "<strong>लॉगबुक डेटा इनपुट</strong> <strong>OCR डेटा इनपुट</strong> खोलता है: <strong>एसेट</strong> चुनें — लोढ़ा STP-1, STP-2 या WTP — और उसका <strong>लॉगबुक टेम्पलेट</strong>, फिर लॉगबुक पेज की फ़ोटो खींचकर डालें या ब्राउज़ करें (JPG, PNG या JPEG, 100 MB तक)।",
          voice: "लॉगबुक डेटा इनपुट आपकी लॉगबुक की फ़ोटो पढ़ता है। प्लांट और टेम्पलेट चुनें, फिर पेज अपलोड करें।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टॉक और खपत',
          body: "<strong>इन्वेंटरी</strong> में <strong>सभी एसेट</strong> और हर प्लांट का टैब है। हर केमिकल — <strong>यूरिया</strong>, <strong>DAP</strong>, <strong>हाइपो</strong>, <strong>पॉली</strong>, <strong>एलम</strong>, <strong>गुड़</strong> — अपना स्टोर, <strong>उपलब्ध स्टॉक</strong> (हाइपो <strong>5,700 Kg</strong>), <strong>पिछली खपत</strong>, और <strong>वास्तविक</strong> बनाम <strong>अपेक्षित</strong> खपत दिखाता है। चेतावनी आइकन ध्यान देने वाले आइटम बताता है।",
          voice: "इन्वेंटरी हर केमिकल का स्टॉक और पिछली खपत, वास्तविक बनाम अपेक्षित खपत के साथ, हर प्लांट के लिए ट्रैक करती है।",
        },
        {
          label: 'केमिकल लॉग', title: 'हर आवाजाही दर्ज',
          body: "किसी आइटम को खोलने पर <strong>केमिकल लॉग्स</strong> आते हैं: हर प्लांट टैब के लिए <strong>करंट बैलेंस</strong>, <strong>इस महीने की खपत</strong> और <strong>पिछले महीने की खपत</strong>, एक <strong>तारीख</strong> सीमा, और <strong>रिमार्क्स</strong> व <strong>अमाउंट</strong> के फ़िल्टर। इस अवधि में कोई एंट्री दर्ज नहीं थी।",
          voice: "केमिकल लॉग बैलेंस और महीने की खपत दिखाते हैं, और हर एंट्री तारीख, रिमार्क और मात्रा से फ़िल्टर होती है।",
        },
        {
          label: 'टिकट', title: 'टिकट, गिने और छाँटे हुए',
          body: "<strong>टिकट</strong> <strong>15 खुले</strong> (15 ओवरड्यू, 15 एस्केलेटेड) और <strong>53 बंद</strong> गिनता है, श्रेणी के अनुसार — इलेक्ट्रिकल, प्रोसेस, मैकेनिकल और अन्य। हर टिकट अपने टैग (<em>automatic</em>, <em>overdue</em>, <em>Escalation Level 3</em>), बनने का समय, श्रेणी और प्लांट दिखाता है। <strong>क्रिएट न्यू टिकट</strong> ऊपर दाईं ओर है।",
          voice: "टिकट पेज खुले और बंद मामलों को श्रेणी के अनुसार गिनता है। हर टिकट अपने टैग, प्लांट और एस्केलेशन लेवल दिखाता है।",
        },
        {
          label: 'टिकट विवरण', title: 'एक टिकट की पूरी कहानी',
          body: "टिकट में बनने का समय, प्लांट, <strong>समस्या</strong> — यहाँ <em>कोई EQT ब्लोअर मैनुअल मोड में है</em> — और क्या करना है उसका <strong>विवरण</strong> होता है। <strong>हिस्ट्री</strong> हर एस्केलेशन दर्ज करती है, लेवल 1 से लेवल 3 तक; कमेंट जोड़ें, या <strong>रिज़ॉल्व</strong> करें।",
          voice: "हर टिकट में समस्या, क्या करना है, और हर एस्केलेशन की हिस्ट्री है। कमेंट करें, फिर रिज़ॉल्व करें।",
        },
        {
          label: 'स्काडाव्यू', title: 'तीनों प्लांट, लाइव',
          body: "<strong>स्काडाव्यू – लोढ़ा वर्कस्पेस</strong> <strong>लोढ़ा STP-1 (720 KLD)</strong>, <strong>लोढ़ा STP-2 (810 KLD)</strong> और <strong>लोढ़ा WTP (2560 KLD)</strong> को एक <strong>लाइव</strong> कैनवास पर दिखाता है। समय चुनें और दोबारा देखने के लिए <strong>प्ले</strong> दबाएँ; प्रोसेस खोलने के लिए किसी प्लांट पर क्लिक करें।",
          voice: "स्काडाव्यू तीनों प्लांट को एक लाइव कैनवास पर रखता है। प्रोसेस खोलने के लिए किसी प्लांट पर क्लिक करें।",
        },
        {
          label: 'प्रोसेस', title: 'शुरू से अंत तक प्रोसेस',
          body: "<strong>लोढ़ा STP-1</strong> एक लाइव प्रोसेस डायग्राम के रूप में खुलता है — स्क्रीन, इक्वलाइज़ेशन, MBBR टैंक, ट्यूब सेटलर, स्लज संप, फ़िल्टर प्रेस, PSF और ACF फ़िल्टर और ट्रीटेड सीवेज टैंक। <strong>ग्रुप कंट्रोल</strong> और <strong>यूनिट प्रोसेसेस</strong>, <strong>सेट ऐज़ डिफ़ॉल्ट</strong>, और नीचे दाईं ओर ज़ूम का उपयोग करें। STP-2 भी ऐसे ही खुलता है।",
          voice: "हर प्लांट एक लाइव प्रोसेस डायग्राम के रूप में खुलता है। कोई भी पल दोबारा देखें, ग्रुप कंट्रोल या यूनिट प्रोसेस खोलें, और ज़ूम करें।",
        },
        {
          label: 'एनालिटिक्स', title: 'चार्ट खोलें, हर पॉइंट पढ़ें',
          body: "हर प्लांट का <strong>एनालिटिक्स</strong> पेज <strong>प्लांट समरी</strong> पर खुलता है — STP-1 के लिए <strong>टोटल एनर्जी कंज़म्प्शन</strong>, एक कस्टम विजेट और KPI कार्ड। कोई भी चार्ट <strong>एक्सपैंड</strong> करें: पॉइंट पर होवर करके उसका मान और <strong>एग्रीगेशन टाइप</strong> देखें (यहाँ <strong>क्यूम्युलेटिव</strong>, अंत में <strong>459.82</strong>), ड्रैग करके ज़ूम करें, और <strong>रीसेट ज़ूम</strong> से लौटें। नीचे पेज प्लांट के क्रम में चलता है — <strong>प्राइमरी</strong>, <strong>सेकेंडरी</strong>, स्लज डीवॉटरिंग, ऊर्जा और उपकरण।",
          voice: "हर प्लांट का एनालिटिक्स पेज उसकी समरी पर खुलता है। कोई भी चार्ट बड़ा करके हर पॉइंट पढ़ें, ज़ूम करें, और रीसेट करें।",
        },
        {
          label: 'STP-2', title: 'एक नज़र में STP-2',
          body: "<strong>लोढ़ा STP-2 (810 KLD) एनालिटिक्स</strong> <strong>एनर्जी कंज़म्प्शन</strong> (<strong>429.69</strong>), <strong>रोज़ का इनलेट पानी</strong> (<strong>248.95 KL</strong>) और <strong>रोज़ का आउटलेट पानी</strong> (<strong>175 KL</strong>) दिखाता है, फिर KPI टाइल: 810 KLD क्षमता के सामने <strong>इनलेट फ़्लो</strong>, <strong>आउटलेट फ़्लो</strong> <strong>175.00</strong>, <strong>एनर्जी पर KL</strong> <strong>1.73</strong> और <strong>हाइड्रॉलिक एफ़िशिएंसी</strong>।",
          voice: "STP-2 की समरी ऊर्जा, इनलेट और आउटलेट पानी दिखाती है, फिर क्षमता के सामने फ़्लो और प्रति किलोलीटर ऊर्जा की टाइल।",
        },
        {
          label: 'यूनिट', title: 'यूनिट दर यूनिट, पंप दर पंप',
          body: "फिर पेज <strong>प्राइमरी</strong>, <strong>सेकेंडरी</strong> और <strong>टर्शियरी</strong> यूनिट से गुज़रता है — हर पंप के रनिंग घंटे (रॉ सीवेज ट्रांसफ़र पंप-4 <strong>5.58</strong>, रीसायकल पंप-1 <strong>8.07</strong>), सेकेंडरी और टर्शियरी उपकरणों का <strong>ऑटो मैनुअल स्टेटस</strong>, <strong>ट्रिप स्टेटस</strong>, और <strong>टोटल एनर्जी</strong> व <strong>एनर्जी पर KL</strong> की टाइल।",
          voice: "आगे हर यूनिट हर पंप और ब्लोअर के रनिंग घंटे, ऑटो या मैनुअल स्थिति, और ट्रिप दिखाती है।",
        },
        {
          label: 'समय सीमा', title: 'कोई भी अवधि, कोई भी रिज़ॉल्यूशन',
          body: "रेंज पिकर में <strong>आज</strong> से <strong>पिछले 6 महीने</strong> तक या <strong>कस्टम</strong> तारीखें, <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी, और रोज़ का एक समय-स्लॉट दोहराने के लिए <strong>स्मार्ट आवर्स</strong> हैं। ग्रैन्युलैरिटी अवधि के अनुसार चलती है — यहाँ <strong>दिन</strong> या <strong>हफ़्ते</strong> — और <strong>अप्लाई सिलेक्शन</strong> हर चार्ट दोबारा बनाता है।",
          voice: "कोई प्रीसेट या कस्टम तारीख चुनें। ग्रैन्युलैरिटी अवधि के अनुसार चलती है, और अप्लाई सिलेक्शन हर चार्ट दोबारा बनाता है।",
        },
        {
          label: 'WTP', title: 'WTP की समरी',
          body: "<strong>लोढ़ा WTP (2560 KLD) एनालिटिक्स</strong> कैस्केड एरेटर पर इनलेट फ़्लो, आउटलेट फ़्लो, <strong>टोटल एनर्जी कंज़म्प्शन</strong> (<strong>733.91</strong>) और <strong>आउटलेट क्वालिटी</strong> टेबल पर खुलता है — pH <strong>8.18</strong>, टर्बिडिटी <strong>2.30</strong>, कंडक्टिविटी <strong>62.83</strong>, FRC <strong>0.05</strong>, तापमान <strong>23.19</strong>। KPI टाइल प्रति KL ऊर्जा, आउटलेट pH और TDS जोड़ती हैं।",
          voice: "डब्ल्यू टी पी पेज फ़्लो, ऊर्जा और आउटलेट क्वालिटी टेबल पर खुलता है — pH, टर्बिडिटी, कंडक्टिविटी और क्लोरीन।",
        },
        {
          label: 'सीमाएँ', title: 'सीमा के अंदर या बाहर',
          body: "<strong>फ़्लो एंड क्वालिटी</strong> टैंक लेवल और वॉल्यूम दिखाता है, फिर हर क्वालिटी चार्ट पर उसकी स्वीकार्य सीमा छायांकित करता है: <strong>आउटलेट pH</strong> <strong>8.36</strong> हरे में है, <strong>आउटलेट FRC</strong> <strong>0.04 ppm</strong> अपनी 0.2–0.5 सीमा से नीचे है, और <strong>आउटलेट टर्बिडिटी</strong> <strong>2.88</strong> पर खत्म होती है। फिर कंडक्टिविटी, फ़ीड वॉटर TDS और फ़िल्टर प्रेशर।",
          voice: "क्वालिटी चार्ट अपनी स्वीकार्य सीमा के साथ छायांकित हैं — यहाँ pH सीमा में है, जबकि फ़्री क्लोरीन उससे नीचे है।",
        },
        {
          label: 'उपकरण', title: 'उपकरण, वाल्व और ट्रिप',
          body: "<strong>एनर्जी कंज़म्प्शन</strong> और <strong>फ़िल्टर प्रेशर</strong> के बाद <strong>इक्विपमेंट परफ़ॉर्मेंस एंड मेंटेनेंस</strong> आता है: <strong>DMF-1 से DMF-4 मोटराइज़्ड वाल्व स्टेटस</strong>, डोज़िंग और बैकवॉश पंप, फिर हर पंप के <strong>रनिंग घंटे</strong>, <strong>ऑटो मैनुअल</strong> और <strong>ट्रिप स्टेटस</strong>।",
          voice: "फिर ऊर्जा, फ़िल्टर प्रेशर और वाल्व स्टेटस, और हर पंप के रनिंग घंटे, ऑटो-मैनुअल और ट्रिप स्टेटस।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "तीनों प्लांट की झलक के लिए <strong>डैशबोर्ड</strong>। ध्यान देने वाली बातों के लिए <strong>टिकट</strong>। रिकॉर्ड के लिए <strong>लॉगबुक डेटा इनपुट</strong> और <strong>इन्वेंटरी</strong>। लाइव प्रोसेस के लिए <strong>स्काडाव्यू</strong>। यूनिट दर यूनिट ट्रेंड के लिए हर प्लांट का <strong>एनालिटिक्स</strong>।",
          voice: "झलक के लिए डैशबोर्ड, ज़रूरी बातों के लिए टिकट, रिकॉर्ड के लिए लॉगबुक और इन्वेंटरी, लाइव स्काडाव्यू, और हर प्लांट का एनालिटिक्स।",
        },
      ],
    },
    ta: {
      title: 'லோதா,<br><em>மூன்று ஆலைகள், ஒரே இடத்தில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் ஒரு சிறு சுற்றுலா — டாஷ்போர்டு, லாக்புக், இன்வென்டரி, டிக்கெட்டுகள், ஸ்காடாவியூ மற்றும் STP-1, STP-2, WTP அனலிட்டிக்ஸ் — அவற்றுக்கிடையே எப்படி நகர்வது.',
      chapter: 'டெமோ · லோதா',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'எல்லாமே ஒரு மெனு தூரத்தில்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது: <strong>டாஷ்போர்டு</strong>, <strong>லாக்புக் டேட்டா இன்புட்</strong>, <strong>இன்வென்டரி</strong>, <strong>டிக்கெட்டுகள்</strong>, <strong>டாஸ்க் லிஸ்ட்</strong>, <strong>ஸ்காடாவியூ – லோதா வொர்க்ஸ்பேஸ்</strong>, மற்றும் ஒவ்வொரு ஆலைக்கும் ஒரு பதிவு — <strong>லோதா STP-1 (720 KLD)</strong>, <strong>லோதா STP-2 (810 KLD)</strong>, <strong>லோதா WTP (2560 KLD)</strong> — ஒவ்வொன்றும் அதன் <strong>அனலிட்டிக்ஸ்</strong> மற்றும் <strong>மெயின்டனன்ஸ்</strong> பக்கங்களைத் திறக்கும்.",
          voice: "மெனு ஒவ்வொரு பக்கத்தையும் திறக்கிறது — டாஷ்போர்டு, லாக்புக் இன்புட், இன்வென்டரி, டிக்கெட்டுகள், ஸ்காடாவியூ, மற்றும் உங்கள் மூன்று ஆலைகளுக்கும் அனலிட்டிக்ஸ் பக்கம்.",
        },
        {
          label: 'கட்டுப்பாடுகள்', title: 'ஒவ்வொரு பக்கத்தையும் இயக்கும் கட்டுப்பாடுகள்',
          body: "ஒவ்வொரு பக்கத்திலும் ஒரே பட்டை: <strong>பக்கத்</strong> தேர்வு, <strong>கிரானுலாரிட்டி</strong> (இங்கே <strong>மணிநேரம்</strong>), <strong>கடந்த 24 மணிநேரம்</strong> மற்றும் <strong>தொடக்க</strong> / <strong>முடிவு</strong> தேதிகள் — இவை சேர்ந்து கீழே உள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. மேல் வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong>, <strong>டவுன்லோட்</strong>, <strong>அமைப்புகள்</strong>, <strong>லேஅவுட் திருத்தம்</strong>; <strong>சேவ் கரண்ட் வியூ</strong> உங்கள் தேர்வுகளைச் சேமிக்கிறது.",
          voice: "ஒவ்வொரு பக்கத்திலும், பக்கத் தேர்வு, கிரானுலாரிட்டி, தேதி வரம்பு எல்லா விட்ஜெட்டுகளையும் இயக்குகின்றன. ரிஃப்ரெஷ், டவுன்லோட், அமைப்புகள் மேல் வலதுபுறம் உள்ளன.",
        },
        {
          label: 'வரைபடம்', title: 'வரைபடத்தில் உங்கள் ஆலைகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>மேப் வியூ &amp; டிக்கெட் ஹிஸ்டரி</strong>யில் திறக்கிறது. வரைபடம் உங்கள் தளத்தை அதன் மதிப்பெண்ணுடன் காட்டுகிறது — இங்கே <strong>3.1</strong> — <strong>பிளான்ட் ஸ்கோர்</strong>க்கு மாற்றலாம். அருகில் <strong>டிக்கெட் ஹிஸ்டரி</strong> ஒவ்வொரு சிக்கலையும் ஆலை, நேரம், வகையுடன் பட்டியலிடுகிறது, உதா. லோதா STP-2-இல் <em>ACF நீர் கலங்கலாக உள்ளது (&gt;5 NTU)</em>.",
          voice: "டாஷ்போர்டு உங்கள் தளத்தின் வரைபடம் மற்றும் மதிப்பெண்ணுடன் திறக்கிறது, அருகில் மூன்று ஆலைகளின் டிக்கெட் வரலாறு.",
        },
        {
          label: 'அளவு', title: 'ஒவ்வொரு ஆலையின் உள்ளே, வெளியே நீர்',
          body: "<strong>வாட்டர் குவான்டிட்டி</strong> <strong>மே 01</strong> முதல் எல்லா ஆலைகளையும் அருகருகே வைக்கிறது: WTP-யின் <strong>ஹைட்ராலிக் எஃபிஷியன்சி</strong> <strong>88.76%</strong>, இன்லெட் <strong>2,55,494.78 KL</strong>, அவுட்லெட் <strong>2,26,773.81 KL</strong>; STP-1 அவுட்லெட் <strong>58,410 KL</strong>; STP-2 இன்லெட் <strong>88,525.57 KL</strong>, அவுட்லெட் <strong>7,411 KL</strong>. ஒவ்வொரு கார்டும் அதன் காலத்தையும் முந்தைய காலத்திலிருந்து மாற்றத்தையும் காட்டுகிறது.",
          voice: "வாட்டர் குவான்டிட்டி மூன்று ஆலைகளின் இன்லெட், அவுட்லெட், ஹைட்ராலிக் திறனை அருகருகே காட்டுகிறது, ஒவ்வொன்றும் முந்தைய காலத்திலிருந்து மாற்றத்துடன்.",
        },
        {
          label: 'தரம்', title: 'குறிப்புக்கு எதிரான தரம்',
          body: "<strong>வாட்டர் குவாலிட்டி பாராமீட்டர்ஸ்</strong> STP-1, STP-2 இன் இன்லெட், அவுட்லெட் <strong>pH</strong>, <strong>TDS</strong> ஆகியவற்றை அவற்றின் குறிப்புகளுக்கு எதிராகக் காட்டுகிறது; <strong>அவுட்லெட் வாட்டர் குவாலிட்டி</strong> WTP-யின் கலங்கல் <strong>2.76 NTU</strong>, pH <strong>8.34</strong>, FRC <strong>0.04 ppm</strong> தருகிறது. பின்னர் <strong>பயாலஜிக்கல் புராசஸ் ஹெல்த்</strong> MBBR SV-30, pH, DO கார்டுகளுடன்.",
          voice: "தர அட்டவணைகள் pH, TDS, கலங்கல், குளோரின் ஆகியவற்றை குறிப்புகளுக்கு எதிராகக் காட்டுகின்றன, பிறகு ஒவ்வொரு எம் பி பி ஆர்-இன் உயிரியல் நிலை.",
        },
        {
          label: 'ஆற்றல்', title: 'ஆலை வாரியாக ஆற்றல்',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> ஒவ்வொரு ஆலையின் மொத்த ஆற்றலை <strong>ஒரு KL-க்கான ஆற்றலுடன்</strong> இணைக்கிறது: STP-1 <strong>95,177.1</strong>, KL-க்கு <strong>1.63</strong>; STP-2 <strong>1,16,866.5</strong>, <strong>1.32</strong>; WTP <strong>1,41,307.9</strong>, <strong>0.62</strong>. மேலே பயோ கார்டுகளின் இரண்டாம் வரிசையில் MBBR-2 SV-30 <strong>10</strong> மற்றும் MBBR DO.",
          voice: "ஆற்றல் கார்டுகள் ஒவ்வொரு ஆலையின் மொத்த நுகர்வை ஒரு கிலோலிட்டருக்கான ஆற்றலுடன் இணைக்கின்றன — டபிள்யு டி பி மிகக் குறைவாக, பூஜ்யம் புள்ளி ஆறு இரண்டு.",
        },
        {
          label: 'தொட்டிகள்', title: 'தொட்டி நிலைகள், சார்ட்டை மாற்றுவது எப்படி',
          body: "<strong>கரண்ட் ஸ்டேட்டஸ்</strong> ஒவ்வொரு ஆலையின் <strong>டேங்க் லெவல்ஸ் (%)</strong> காட்டுகிறது — ஈக்வலைசேஷன், சுத்திகரிக்கப்பட்ட நீர், இடைநிலை, கசடு தொட்டிகள். விட்ஜெட் மேல் ஹோவர் செய்தால் கருவிகள்: <strong>டவுன்லோட்</strong>, <strong>விரிவாக்கு</strong>, <strong>சூஸ் சார்ட்</strong> (<strong>டேபிள்</strong> அல்லது <strong>பார் கிராஃப்</strong>), <strong>திருத்து</strong>, <strong>தகவல்</strong>.",
          voice: "கரண்ட் ஸ்டேட்டஸ் ஒவ்வொரு தொட்டியின் நிலையையும் காட்டுகிறது. எந்த விட்ஜெட்டையும் ஹோவர் செய்து டவுன்லோட், விரிவாக்கம், அல்லது டேபிள், பார் கிராஃப் ஆக மாற்றலாம்.",
        },
        {
          label: 'லாக்புக்', title: 'புகைப்படத்திலிருந்து லாக்புக் பதிவுகள்',
          body: "<strong>லாக்புக் டேட்டா இன்புட்</strong> <strong>OCR டேட்டா இன்புட்</strong>-ஐத் திறக்கிறது: <strong>அசெட்</strong> — லோதா STP-1, STP-2 அல்லது WTP — மற்றும் அதன் <strong>லாக்புக் டெம்ப்ளேட்</strong>-ஐத் தேர்ந்தெடுத்து, லாக்புக் பக்கத்தின் புகைப்படத்தை இழுத்து விடுங்கள் அல்லது உலாவுங்கள் (JPG, PNG, JPEG, 100 MB வரை).",
          voice: "லாக்புக் டேட்டா இன்புட் உங்கள் லாக்புக் புகைப்படத்தைப் படிக்கிறது. ஆலையையும் டெம்ப்ளேட்டையும் தேர்ந்தெடுத்து பக்கத்தைப் பதிவேற்றுங்கள்.",
        },
        {
          label: 'இன்வென்டரி', title: 'இருப்பு மற்றும் நுகர்வு',
          body: "<strong>இன்வென்டரி</strong>யில் <strong>ஆல் அசெட்</strong> மற்றும் ஒவ்வொரு ஆலைக்கும் ஒரு தாவல் உள்ளது. ஒவ்வொரு ரசாயனமும் — <strong>யூரியா</strong>, <strong>DAP</strong>, <strong>ஹைப்போ</strong>, <strong>பாலி</strong>, <strong>ஆலம்</strong>, <strong>வெல்லம்</strong> — அதன் ஸ்டோர், <strong>கிடைக்கும் இருப்பு</strong> (ஹைப்போ <strong>5,700 Kg</strong>), <strong>கடைசி நுகர்வு</strong>, <strong>உண்மை</strong> vs <strong>எதிர்பார்க்கப்பட்ட</strong> நுகர்வு காட்டுகிறது. எச்சரிக்கை ஐகான் கவனிக்க வேண்டியவற்றைக் குறிக்கிறது.",
          voice: "இன்வென்டரி ஒவ்வொரு ரசாயனத்தின் இருப்பு, கடைசி பயன்பாடு, உண்மை மற்றும் எதிர்பார்க்கப்பட்ட நுகர்வை ஒவ்வொரு ஆலைக்கும் கண்காணிக்கிறது.",
        },
        {
          label: 'ரசாயனப் பதிவு', title: 'ஒவ்வொரு நகர்வும் பதிவு',
          body: "ஒரு பொருளைத் திறந்தால் <strong>கெமிக்கல் லாக்ஸ்</strong>: ஒவ்வொரு ஆலைத் தாவலுக்கும் <strong>தற்போதைய இருப்பு</strong>, <strong>இந்த மாத பயன்பாடு</strong>, <strong>கடந்த மாத பயன்பாடு</strong>, ஒரு <strong>தேதி</strong> வரம்பு, <strong>குறிப்புகள்</strong>, <strong>அளவு</strong> வடிகட்டிகள். இந்தக் காலத்தில் பதிவுகள் இல்லை.",
          voice: "ரசாயனப் பதிவுகள் இருப்பையும் மாதப் பயன்பாட்டையும் காட்டுகின்றன, ஒவ்வொரு பதிவையும் தேதி, குறிப்பு, அளவால் வடிகட்டலாம்.",
        },
        {
          label: 'டிக்கெட்டுகள்', title: 'எண்ணி, வகைப்படுத்திய டிக்கெட்டுகள்',
          body: "<strong>டிக்கெட்டுகள்</strong> <strong>15 திறந்தவை</strong> (15 தாமதம், 15 உயர்த்தப்பட்டவை) மற்றும் <strong>53 மூடியவை</strong> எண்ணுகிறது, வகை வாரியாக — எலக்ட்ரிக்கல், புராசஸ், மெக்கானிக்கல் மற்றும் பிற. ஒவ்வொரு டிக்கெட்டும் அதன் குறிச்சொற்கள் (<em>automatic</em>, <em>overdue</em>, <em>Escalation Level 3</em>), உருவான நேரம், வகை, ஆலையைக் காட்டுகிறது. <strong>கிரியேட் நியூ டிக்கெட்</strong> மேல் வலதுபுறம்.",
          voice: "டிக்கெட் பக்கம் திறந்த, மூடிய சிக்கல்களை வகை வாரியாக எண்ணுகிறது. ஒவ்வொன்றும் அதன் குறிச்சொற்கள், ஆலை, உயர்த்தல் நிலையைக் காட்டுகிறது.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒரு டிக்கெட்டின் முழுக் கதை',
          body: "டிக்கெட் உருவான நேரம், ஆலை, <strong>சிக்கல்</strong> — இங்கே <em>EQT ப்ளோயர் ஏதேனும் மேனுவல் மோடில் உள்ளது</em> — மற்றும் செய்ய வேண்டியதன் <strong>விவரம்</strong> உடன் திறக்கிறது. <strong>ஹிஸ்டரி</strong> ஒவ்வொரு உயர்த்தலையும் பதிவு செய்கிறது, நிலை 1 முதல் நிலை 3 வரை; கருத்து சேர்க்கலாம், அல்லது <strong>ரிசால்வ்</strong> செய்யலாம்.",
          voice: "ஒவ்வொரு டிக்கெட்டிலும் சிக்கல், செய்ய வேண்டியது, ஒவ்வொரு உயர்த்தலின் வரலாறு உள்ளது. கருத்து சேர்த்து, பின்னர் தீர்க்கவும்.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'மூன்று ஆலைகளும், நேரலையில்',
          body: "<strong>ஸ்காடாவியூ – லோதா வொர்க்ஸ்பேஸ்</strong> <strong>லோதா STP-1 (720 KLD)</strong>, <strong>லோதா STP-2 (810 KLD)</strong>, <strong>லோதா WTP (2560 KLD)</strong> ஆகியவற்றை ஒரே <strong>லைவ்</strong> கேன்வாஸில் காட்டுகிறது. நேரத்தைத் தேர்ந்தெடுத்து <strong>ப்ளே</strong> அழுத்தி மீண்டும் பாருங்கள்; செயல்முறையைத் திறக்க ஒரு ஆலையைக் கிளிக் செய்யுங்கள்.",
          voice: "ஸ்காடாவியூ மூன்று ஆலைகளையும் ஒரே நேரலை கேன்வாஸில் வைக்கிறது. செயல்முறையைத் திறக்க ஒரு ஆலையைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'செயல்முறை', title: 'தொடக்கம் முதல் முடிவு வரை செயல்முறை',
          body: "<strong>லோதா STP-1</strong> ஒரு நேரலை செயல்முறை வரைபடமாகத் திறக்கிறது — ஸ்கிரீன்கள், ஈக்வலைசேஷன், MBBR தொட்டிகள், டியூப் செட்லர்கள், கசடு சம்ப்கள், ஃபில்டர் பிரஸ், PSF, ACF வடிகட்டிகள், சுத்திகரிக்கப்பட்ட கழிவுநீர் தொட்டி. <strong>குரூப் கண்ட்ரோல்</strong>, <strong>யூனிட் புராசஸஸ்</strong>, <strong>செட் அஸ் டிஃபால்ட்</strong>, கீழ் வலதுபுற ஜூம் பயன்படுத்துங்கள். STP-2 அதே போல் திறக்கிறது.",
          voice: "ஒவ்வொரு ஆலையும் நேரலை செயல்முறை வரைபடமாகத் திறக்கிறது. எந்தத் தருணத்தையும் மீண்டும் பாருங்கள், குரூப் கண்ட்ரோல் அல்லது யூனிட் புராசஸ் திறந்து, ஜூம் செய்யுங்கள்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'சார்ட்டைத் திறந்து, எந்தப் புள்ளியையும் படியுங்கள்',
          body: "ஒவ்வொரு ஆலையின் <strong>அனலிட்டிக்ஸ்</strong> பக்கமும் <strong>பிளான்ட் சம்மரி</strong>யில் திறக்கிறது — STP-1-க்கு <strong>டோட்டல் எனர்ஜி கன்சம்ப்ஷன்</strong>, ஒரு கஸ்டம் விட்ஜெட், KPI கார்டுகள். எந்த சார்ட்டையும் <strong>விரிவாக்குங்கள்</strong>: ஒரு புள்ளியை ஹோவர் செய்து மதிப்பையும் <strong>அக்ரிகேஷன் டைப்</strong>-ஐயும் பாருங்கள் (இங்கே <strong>க்யூமுலேட்டிவ்</strong>, முடிவில் <strong>459.82</strong>), இழுத்து ஜூம் செய்து, <strong>ரீசெட் ஜூம்</strong> மூலம் திரும்புங்கள். கீழே பக்கம் ஆலையைப் பின்தொடர்கிறது — <strong>பிரைமரி</strong>, <strong>செகண்டரி</strong>, கசடு நீர்நீக்கம், ஆற்றல், உபகரணங்கள்.",
          voice: "ஒவ்வொரு ஆலையின் அனலிட்டிக்ஸ் பக்கமும் அதன் சுருக்கத்தில் திறக்கிறது. எந்த சார்ட்டையும் விரிவாக்கி ஒவ்வொரு புள்ளியையும் படித்து, ஜூம் செய்து, ரீசெட் செய்யுங்கள்.",
        },
        {
          label: 'STP-2', title: 'ஒரு பார்வையில் STP-2',
          body: "<strong>லோதா STP-2 (810 KLD) அனலிட்டிக்ஸ்</strong> <strong>எனர்ஜி கன்சம்ப்ஷன்</strong> (<strong>429.69</strong>), <strong>நாள் இன்லெட் நீர்</strong> (<strong>248.95 KL</strong>), <strong>நாள் அவுட்லெட் நீர்</strong> (<strong>175 KL</strong>) காட்டுகிறது, பின்னர் KPI டைல்கள்: 810 KLD திறனுக்கு எதிரான <strong>இன்லெட் ஃப்ளோ</strong>, <strong>அவுட்லெட் ஃப்ளோ</strong> <strong>175.00</strong>, <strong>எனர்ஜி பெர் KL</strong> <strong>1.73</strong>, <strong>ஹைட்ராலிக் எஃபிஷியன்சி</strong>.",
          voice: "STP-2 சுருக்கம் ஆற்றல், இன்லெட், அவுட்லெட் நீரைக் காட்டுகிறது, பிறகு திறனுக்கு எதிரான ஓட்டம் மற்றும் ஒரு கிலோலிட்டருக்கான ஆற்றல் டைல்கள்.",
        },
        {
          label: 'அலகுகள்', title: 'அலகு அலகாக, பம்ப் பம்பாக',
          body: "பிறகு பக்கம் <strong>பிரைமரி</strong>, <strong>செகண்டரி</strong>, <strong>டெர்ஷியரி</strong> அலகுகள் வழியாகச் செல்கிறது — ஒவ்வொரு பம்பின் இயங்கும் நேரம் (ரா சீவேஜ் டிரான்ஸ்ஃபர் பம்ப்-4 <strong>5.58</strong>, ரீசைக்கிள் பம்ப்-1 <strong>8.07</strong>), செகண்டரி, டெர்ஷியரி உபகரணங்களின் <strong>ஆட்டோ மேனுவல் ஸ்டேட்டஸ்</strong>, <strong>டிரிப் ஸ்டேட்டஸ்</strong>, <strong>மொத்த ஆற்றல்</strong>, <strong>எனர்ஜி பெர் KL</strong> டைல்கள்.",
          voice: "மேலும் கீழே, ஒவ்வொரு அலகும் ஒவ்வொரு பம்ப், ப்ளோயரின் இயங்கும் நேரம், ஆட்டோ அல்லது மேனுவல் நிலை, டிரிப்களைக் காட்டுகிறது.",
        },
        {
          label: 'வரம்பு', title: 'எந்தக் காலமும், எந்தத் தெளிவுத்திறனும்',
          body: "ரேஞ்ச் பிக்கரில் <strong>இன்று</strong> முதல் <strong>கடந்த 6 மாதங்கள்</strong> வரை அல்லது <strong>கஸ்டம்</strong> தேதிகள், <strong>12</strong> அல்லது <strong>24 மணிநேர</strong> கடிகாரம், தினசரி நேர இடைவெளியை மீண்டும் செய்ய <strong>ஸ்மார்ட் ஹவர்ஸ்</strong> உள்ளன. கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது — இங்கே <strong>நாட்கள்</strong> அல்லது <strong>வாரங்கள்</strong> — <strong>அப்ளை செலக்ஷன்</strong> ஒவ்வொரு சார்ட்டையும் மீண்டும் வரைகிறது.",
          voice: "ஒரு முன்னமைவு அல்லது தனிப்பயன் தேதிகளைத் தேர்ந்தெடுங்கள். கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது, அப்ளை செலக்ஷன் ஒவ்வொரு சார்ட்டையும் மீண்டும் வரைகிறது.",
        },
        {
          label: 'WTP', title: 'WTP சுருக்கம்',
          body: "<strong>லோதா WTP (2560 KLD) அனலிட்டிக்ஸ்</strong> கேஸ்கேட் ஏரேட்டரில் இன்லெட் ஓட்டம், அவுட்லெட் ஓட்டம், <strong>டோட்டல் எனர்ஜி கன்சம்ப்ஷன்</strong> (<strong>733.91</strong>), <strong>அவுட்லெட் குவாலிட்டி</strong> அட்டவணையுடன் திறக்கிறது — pH <strong>8.18</strong>, கலங்கல் <strong>2.30</strong>, கடத்துத்திறன் <strong>62.83</strong>, FRC <strong>0.05</strong>, வெப்பநிலை <strong>23.19</strong>. KPI டைல்கள் KL-க்கான ஆற்றல், அவுட்லெட் pH, TDS சேர்க்கின்றன.",
          voice: "டபிள்யு டி பி பக்கம் ஓட்டம், ஆற்றல், அவுட்லெட் தர அட்டவணையுடன் திறக்கிறது — pH, கலங்கல், கடத்துத்திறன், குளோரின்.",
        },
        {
          label: 'வரம்புகள்', title: 'வரம்புக்குள்ளா, வெளியிலா',
          body: "<strong>ஃப்ளோ அண்ட் குவாலிட்டி</strong> தொட்டி நிலைகளையும் அளவுகளையும் காட்டுகிறது, பின்னர் ஒவ்வொரு தர சார்ட்டிலும் ஏற்கத்தக்க வரம்பை நிழலிடுகிறது: <strong>அவுட்லெட் pH</strong> <strong>8.36</strong> பச்சையில் உள்ளது, <strong>அவுட்லெட் FRC</strong> <strong>0.04 ppm</strong> அதன் 0.2–0.5 வரம்புக்குக் கீழே உள்ளது, <strong>அவுட்லெட் கலங்கல்</strong> <strong>2.88</strong>-இல் முடிகிறது. பின்னர் கடத்துத்திறன், ஃபீட் வாட்டர் TDS, ஃபில்டர் அழுத்தங்கள்.",
          voice: "தர சார்ட்டுகள் அவற்றின் ஏற்கத்தக்க வரம்புடன் நிழலிடப்பட்டுள்ளன — இங்கே pH வரம்பில் உள்ளது, ஆனால் குளோரின் அதற்குக் கீழே உள்ளது.",
        },
        {
          label: 'உபகரணங்கள்', title: 'உபகரணங்கள், வால்வுகள், டிரிப்கள்',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong>, <strong>ஃபில்டர் அழுத்தம்</strong> ஆகியவை <strong>இக்விப்மென்ட் பர்ஃபார்மன்ஸ் அண்ட் மெயின்டனன்ஸ்</strong>-க்கு இட்டுச் செல்கின்றன: <strong>DMF-1 முதல் DMF-4 மோட்டார் வால்வு நிலை</strong>, டோசிங், பேக்வாஷ் பம்ப்கள், பின்னர் ஒவ்வொரு பம்பின் <strong>இயங்கும் நேரம்</strong>, <strong>ஆட்டோ மேனுவல்</strong>, <strong>டிரிப் ஸ்டேட்டஸ்</strong>.",
          voice: "பிறகு ஆற்றல், ஃபில்டர் அழுத்தம், வால்வு நிலை, மற்றும் ஒவ்வொரு பம்பின் இயங்கும் நேரம், ஆட்டோ-மேனுவல், டிரிப் நிலை.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "மூன்று ஆலைகளின் ஒரு பார்வைக்கு <strong>டாஷ்போர்டு</strong>. கவனிக்க வேண்டியவற்றுக்கு <strong>டிக்கெட்டுகள்</strong>. பதிவுகளுக்கு <strong>லாக்புக் டேட்டா இன்புட்</strong>, <strong>இன்வென்டரி</strong>. நேரலை செயல்முறைக்கு <strong>ஸ்காடாவியூ</strong>. அலகு வாரியான போக்குகளுக்கு ஒவ்வொரு ஆலையின் <strong>அனலிட்டிக்ஸ்</strong>.",
          voice: "மேலோட்டத்திற்கு டாஷ்போர்டு, கவனிக்க வேண்டியவற்றுக்கு டிக்கெட்டுகள், பதிவுகளுக்கு லாக்புக் மற்றும் இன்வென்டரி, நேரலை ஸ்காடாவியூ, ஒவ்வொரு ஆலைக்கும் அனலிட்டிக்ஸ்.",
        },
      ],
    },
    mr: {
      title: 'लोढा,<br><em>तीन प्लांट, एकाच ठिकाणी.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मची एक छोटी सफर — डॅशबोर्ड, लॉगबुक, इन्व्हेंटरी, तिकिटे, स्काडाव्ह्यू आणि STP-1, STP-2 व WTP चे ॲनालिटिक्स — आणि त्यांच्यात कसे फिरायचे.',
      chapter: 'डेमो · लोढा',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'सर्व काही, एका मेन्यूवर',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो: <strong>डॅशबोर्ड</strong>, <strong>लॉगबुक डेटा इनपुट</strong>, <strong>इन्व्हेंटरी</strong>, <strong>तिकिटे</strong>, <strong>टास्क लिस्ट</strong>, <strong>स्काडाव्ह्यू – लोढा वर्कस्पेस</strong>, आणि प्रत्येक प्लांटची एक नोंद — <strong>लोढा STP-1 (720 KLD)</strong>, <strong>लोढा STP-2 (810 KLD)</strong> आणि <strong>लोढा WTP (2560 KLD)</strong> — ज्यात त्याची <strong>ॲनालिटिक्स</strong> आणि <strong>मेंटेनन्स</strong> पेजेस आहेत.",
          voice: "मेन्यू प्रत्येक पेज उघडतो — डॅशबोर्ड, लॉगबुक इनपुट, इन्व्हेंटरी, तिकिटे, स्काडाव्ह्यू, आणि तुमच्या तीनही प्लांटचे ॲनालिटिक्स पेज.",
        },
        {
          label: 'नियंत्रणे', title: 'प्रत्येक पेज चालवणारी नियंत्रणे',
          body: "प्रत्येक पेजवर एकच बार आहे: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong> (इथे <strong>तास</strong>), <strong>मागील 24 तास</strong> आणि <strong>पासून</strong> / <strong>पर्यंत</strong> तारखा — हे मिळून खालचे प्रत्येक विजेट चालवतात. वर उजवीकडे <strong>रिफ्रेश</strong>, <strong>डाउनलोड</strong>, <strong>सेटिंग्ज</strong> आणि <strong>लेआउट एडिट</strong> आहेत, आणि <strong>सेव्ह करंट व्ह्यू</strong> तुमच्या निवडी जपतो.",
          voice: "प्रत्येक पेजवर पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि तारीख कालावधी सर्व विजेट चालवतात. रिफ्रेश, डाउनलोड आणि सेटिंग्ज वर उजवीकडे आहेत.",
        },
        {
          label: 'नकाशा', title: 'नकाशावर तुमचे प्लांट',
          body: "<strong>डॅशबोर्ड</strong> <strong>मॅप व्ह्यू आणि तिकीट हिस्ट्री</strong>वर उघडतो. नकाशा तुमची साइट तिच्या स्कोअरसह दाखवतो — इथे <strong>3.1</strong> — आणि <strong>प्लांट स्कोअर</strong>वर बदलता येतो. शेजारी <strong>तिकीट हिस्ट्री</strong> प्रत्येक समस्या प्लांट, वेळ आणि प्रकारासह दाखवते, उदा. लोढा STP-2 वर <em>ACF पाणी गढूळ आहे (&gt;5 NTU)</em>.",
          voice: "डॅशबोर्ड तुमच्या साइटच्या नकाशा आणि स्कोअरवर उघडतो, शेजारी तीनही प्लांटची तिकीट हिस्ट्री आहे.",
        },
        {
          label: 'प्रमाण', title: 'प्रत्येक प्लांटचे येणारे-जाणारे पाणी',
          body: "<strong>वॉटर क्वांटिटी</strong> <strong>1 मे</strong>पासून प्रत्येक प्लांट शेजारी-शेजारी ठेवते: WTP ची <strong>हायड्रॉलिक एफिशियन्सी</strong> <strong>88.76%</strong>, इनलेट <strong>2,55,494.78 KL</strong> आणि आउटलेट <strong>2,26,773.81 KL</strong>; STP-1 आउटलेट <strong>58,410 KL</strong>; STP-2 इनलेट <strong>88,525.57 KL</strong> आणि आउटलेट <strong>7,411 KL</strong>. प्रत्येक कार्ड त्याचा कालावधी आणि मागील कालावधीपासूनचा बदल दाखवते.",
          voice: "वॉटर क्वांटिटी तीनही प्लांटचे इनलेट, आउटलेट आणि हायड्रॉलिक एफिशियन्सी शेजारी-शेजारी दाखवते, प्रत्येक मागील कालावधीपासूनच्या बदलासह.",
        },
        {
          label: 'गुणवत्ता', title: 'संदर्भाच्या तुलनेत गुणवत्ता',
          body: "<strong>वॉटर क्वालिटी पॅरामीटर्स</strong> STP-1 आणि STP-2 चे इनलेट व आउटलेट <strong>pH</strong> आणि <strong>TDS</strong> त्यांच्या संदर्भासमोर दाखवते, आणि <strong>आउटलेट वॉटर क्वालिटी</strong> WTP ची टर्बिडिटी <strong>2.76 NTU</strong>, pH <strong>8.34</strong> आणि FRC <strong>0.04 ppm</strong> देते. नंतर <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> MBBR SV-30, pH आणि DO कार्डांसह.",
          voice: "क्वालिटी टेबल pH, TDS, टर्बिडिटी आणि क्लोरीन संदर्भासमोर दाखवतात, नंतर प्रत्येक एम बी बी आर ची जैविक स्थिती.",
        },
        {
          label: 'ऊर्जा', title: 'प्लांटनिहाय ऊर्जा',
          body: "<strong>एनर्जी कंझम्प्शन</strong> प्रत्येक प्लांटची एकूण ऊर्जा <strong>प्रति KL ऊर्जे</strong>सोबत ठेवते: STP-1 <strong>95,177.1</strong>, प्रति KL <strong>1.63</strong>; STP-2 <strong>1,16,866.5</strong>, <strong>1.32</strong>; आणि WTP <strong>1,41,307.9</strong>, <strong>0.62</strong>. वर बायो कार्डांच्या दुसऱ्या ओळीत MBBR-2 SV-30 <strong>10</strong> आणि MBBR DO आहे.",
          voice: "एनर्जी कार्ड प्रत्येक प्लांटचा एकूण वापर प्रति किलोलिटर ऊर्जेसोबत दाखवतात — डब्ल्यू टी पी सर्वात कमी, शून्य पूर्णांक सहा दोन वर.",
        },
        {
          label: 'टाक्या', title: 'टाकी पातळी, आणि चार्ट कसा बदलायचा',
          body: "<strong>करंट स्टेटस</strong> प्रत्येक प्लांटच्या <strong>टँक लेव्हल (%)</strong> दाखवते — इक्वलायझेशन, ट्रीटेड वॉटर, इंटरमीडिएट आणि स्लज होल्डिंग टाक्या. विजेटवर होव्हर केल्यास त्याची साधने दिसतात: <strong>डाउनलोड</strong>, <strong>एक्सपँड</strong>, <strong>चूज चार्ट</strong> (<strong>टेबल</strong> किंवा <strong>बार ग्राफ</strong>), <strong>एडिट</strong> आणि <strong>इन्फो</strong>.",
          voice: "करंट स्टेटस प्रत्येक टाकीची पातळी दाखवते. कोणत्याही विजेटवर होव्हर करून ते डाउनलोड करा, मोठे करा, किंवा टेबल आणि बार ग्राफमध्ये बदला.",
        },
        {
          label: 'लॉगबुक', title: 'फोटोमधून लॉगबुक नोंदी',
          body: "<strong>लॉगबुक डेटा इनपुट</strong> <strong>OCR डेटा इनपुट</strong> उघडतो: <strong>ॲसेट</strong> निवडा — लोढा STP-1, STP-2 किंवा WTP — आणि त्याचा <strong>लॉगबुक टेम्पलेट</strong>, मग लॉगबुक पानाचा फोटो ओढून टाका किंवा ब्राउझ करा (JPG, PNG किंवा JPEG, 100 MB पर्यंत).",
          voice: "लॉगबुक डेटा इनपुट तुमच्या लॉगबुकचा फोटो वाचतो. प्लांट आणि टेम्पलेट निवडा, मग पान अपलोड करा.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'साठा आणि वापर',
          body: "<strong>इन्व्हेंटरी</strong>मध्ये <strong>सर्व ॲसेट</strong> आणि प्रत्येक प्लांटचा टॅब आहे. प्रत्येक रसायन — <strong>युरिया</strong>, <strong>DAP</strong>, <strong>हायपो</strong>, <strong>पॉली</strong>, <strong>तुरटी</strong>, <strong>गूळ</strong> — त्याचे स्टोअर, <strong>उपलब्ध साठा</strong> (हायपो <strong>5,700 Kg</strong>), <strong>मागील वापर</strong>, आणि <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित</strong> वापर दाखवते. इशारा आयकॉन लक्ष देण्याजोग्या वस्तू दाखवतो.",
          voice: "इन्व्हेंटरी प्रत्येक रसायनाचा साठा आणि मागील वापर, प्रत्यक्ष विरुद्ध अपेक्षित वापरासह, प्रत्येक प्लांटसाठी ट्रॅक करते.",
        },
        {
          label: 'केमिकल लॉग', title: 'प्रत्येक हालचाल नोंदलेली',
          body: "एखादी वस्तू उघडल्यावर <strong>केमिकल लॉग्स</strong> येतात: प्रत्येक प्लांट टॅबसाठी <strong>करंट बॅलन्स</strong>, <strong>या महिन्याचा वापर</strong> आणि <strong>मागील महिन्याचा वापर</strong>, एक <strong>तारीख</strong> कालावधी, आणि <strong>रिमार्क्स</strong> व <strong>अमाउंट</strong> फिल्टर. या कालावधीत एकही नोंद नव्हती.",
          voice: "केमिकल लॉग बॅलन्स आणि मासिक वापर दाखवतात, आणि प्रत्येक नोंद तारीख, शेरा आणि प्रमाणाने फिल्टर होते.",
        },
        {
          label: 'तिकिटे', title: 'तिकिटे, मोजलेली आणि वर्गीकृत',
          body: "<strong>तिकिटे</strong> <strong>15 उघडी</strong> (15 थकीत, 15 एस्कलेटेड) आणि <strong>53 बंद</strong> मोजते, वर्गानुसार — इलेक्ट्रिकल, प्रोसेस, मेकॅनिकल आणि इतर. प्रत्येक तिकीट त्याचे टॅग (<em>automatic</em>, <em>overdue</em>, <em>Escalation Level 3</em>), तयार झाल्याची वेळ, वर्ग आणि प्लांट दाखवते. <strong>क्रिएट न्यू तिकीट</strong> वर उजवीकडे आहे.",
          voice: "तिकिटे पेज उघड्या आणि बंद समस्या वर्गानुसार मोजते. प्रत्येक तिकीट त्याचे टॅग, प्लांट आणि एस्कलेशन लेव्हल दाखवते.",
        },
        {
          label: 'तिकीट', title: 'एका तिकिटाची पूर्ण कहाणी',
          body: "तिकीट तयार झाल्याची वेळ, प्लांट, <strong>समस्या</strong> — इथे <em>कोणताही EQT ब्लोअर मॅन्युअल मोडमध्ये आहे</em> — आणि काय करायचे याचे <strong>वर्णन</strong> यासह उघडते. <strong>हिस्ट्री</strong> प्रत्येक एस्कलेशन नोंदवते, लेव्हल 1 ते लेव्हल 3; टिप्पणी जोडा, किंवा <strong>रिझॉल्व्ह</strong> करा.",
          voice: "प्रत्येक तिकिटात समस्या, काय करायचे, आणि प्रत्येक एस्कलेशनची हिस्ट्री आहे. टिप्पणी करा, मग रिझॉल्व्ह करा.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'तीनही प्लांट, लाइव्ह',
          body: "<strong>स्काडाव्ह्यू – लोढा वर्कस्पेस</strong> <strong>लोढा STP-1 (720 KLD)</strong>, <strong>लोढा STP-2 (810 KLD)</strong> आणि <strong>लोढा WTP (2560 KLD)</strong> एकाच <strong>लाइव्ह</strong> कॅनव्हासवर दाखवतो. वेळ निवडा आणि पुन्हा पाहण्यासाठी <strong>प्ले</strong> दाबा; प्रोसेस उघडण्यासाठी प्लांटवर क्लिक करा.",
          voice: "स्काडाव्ह्यू तीनही प्लांट एकाच लाइव्ह कॅनव्हासवर ठेवतो. प्रोसेस उघडण्यासाठी प्लांटवर क्लिक करा.",
        },
        {
          label: 'प्रोसेस', title: 'सुरुवातीपासून शेवटपर्यंत प्रोसेस',
          body: "<strong>लोढा STP-1</strong> लाइव्ह प्रोसेस डायग्राम म्हणून उघडतो — स्क्रीन, इक्वलायझेशन, MBBR टाक्या, ट्यूब सेटलर, स्लज संप, फिल्टर प्रेस, PSF आणि ACF फिल्टर आणि ट्रीटेड सीवेज टाकी. <strong>ग्रुप कंट्रोल</strong> आणि <strong>युनिट प्रोसेसेस</strong>, <strong>सेट ॲज डिफॉल्ट</strong>, आणि खाली उजवीकडे झूम वापरा. STP-2 सुद्धा असाच उघडतो.",
          voice: "प्रत्येक प्लांट लाइव्ह प्रोसेस डायग्राम म्हणून उघडतो. कोणताही क्षण पुन्हा पाहा, ग्रुप कंट्रोल किंवा युनिट प्रोसेस उघडा, आणि झूम करा.",
        },
        {
          label: 'ॲनालिटिक्स', title: 'चार्ट उघडा, प्रत्येक बिंदू वाचा',
          body: "प्रत्येक प्लांटचे <strong>ॲनालिटिक्स</strong> पेज <strong>प्लांट समरी</strong>वर उघडते — STP-1 साठी <strong>टोटल एनर्जी कंझम्प्शन</strong>, एक कस्टम विजेट आणि KPI कार्ड. कोणताही चार्ट <strong>एक्सपँड</strong> करा: बिंदूवर होव्हर करून त्याचे मूल्य आणि <strong>ॲग्रिगेशन टाइप</strong> पाहा (इथे <strong>क्युम्युलेटिव्ह</strong>, शेवटी <strong>459.82</strong>), ओढून झूम करा, आणि <strong>रीसेट झूम</strong>ने परत या. खाली पेज प्लांटच्या क्रमाने जाते — <strong>प्रायमरी</strong>, <strong>सेकंडरी</strong>, स्लज डीवॉटरिंग, ऊर्जा आणि उपकरणे.",
          voice: "प्रत्येक प्लांटचे ॲनालिटिक्स पेज त्याच्या समरीवर उघडते. कोणताही चार्ट मोठा करून प्रत्येक बिंदू वाचा, झूम करा, आणि रीसेट करा.",
        },
        {
          label: 'STP-2', title: 'एका नजरेत STP-2',
          body: "<strong>लोढा STP-2 (810 KLD) ॲनालिटिक्स</strong> <strong>एनर्जी कंझम्प्शन</strong> (<strong>429.69</strong>), <strong>दररोजचे इनलेट पाणी</strong> (<strong>248.95 KL</strong>) आणि <strong>दररोजचे आउटलेट पाणी</strong> (<strong>175 KL</strong>) दाखवते, मग KPI टाइल: 810 KLD क्षमतेसमोर <strong>इनलेट फ्लो</strong>, <strong>आउटलेट फ्लो</strong> <strong>175.00</strong>, <strong>प्रति KL ऊर्जा</strong> <strong>1.73</strong> आणि <strong>हायड्रॉलिक एफिशियन्सी</strong>.",
          voice: "STP-2 ची समरी ऊर्जा, इनलेट आणि आउटलेट पाणी दाखवते, मग क्षमतेसमोर फ्लो आणि प्रति किलोलिटर ऊर्जेच्या टाइल.",
        },
        {
          label: 'युनिट', title: 'युनिटनुसार, पंपनुसार',
          body: "मग पेज <strong>प्रायमरी</strong>, <strong>सेकंडरी</strong> आणि <strong>टर्शियरी</strong> युनिटमधून जाते — प्रत्येक पंपचे रनिंग तास (रॉ सीवेज ट्रान्सफर पंप-4 <strong>5.58</strong>, रिसायकल पंप-1 <strong>8.07</strong>), सेकंडरी आणि टर्शियरी उपकरणांचा <strong>ऑटो मॅन्युअल स्टेटस</strong>, <strong>ट्रिप स्टेटस</strong>, आणि <strong>एकूण ऊर्जा</strong> व <strong>प्रति KL ऊर्जा</strong> टाइल.",
          voice: "पुढे प्रत्येक युनिट प्रत्येक पंप आणि ब्लोअरचे रनिंग तास, ऑटो किंवा मॅन्युअल स्थिती, आणि ट्रिप दाखवते.",
        },
        {
          label: 'कालावधी', title: 'कोणताही कालावधी, कोणतेही रिझोल्यूशन',
          body: "रेंज पिकरमध्ये <strong>आज</strong> पासून <strong>मागील 6 महिने</strong> पर्यंत किंवा <strong>कस्टम</strong> तारखा, <strong>12</strong> किंवा <strong>24 तासांचे</strong> घड्याळ, आणि रोजचा एक वेळ-स्लॉट पुन्हा वापरण्यासाठी <strong>स्मार्ट अवर्स</strong> आहेत. ग्रॅन्युलॅरिटी कालावधीनुसार चालते — इथे <strong>दिवस</strong> किंवा <strong>आठवडे</strong> — आणि <strong>अप्लाय सिलेक्शन</strong> प्रत्येक चार्ट पुन्हा काढते.",
          voice: "प्रीसेट किंवा कस्टम तारखा निवडा. ग्रॅन्युलॅरिटी कालावधीनुसार चालते, आणि अप्लाय सिलेक्शन प्रत्येक चार्ट पुन्हा काढते.",
        },
        {
          label: 'WTP', title: 'WTP ची समरी',
          body: "<strong>लोढा WTP (2560 KLD) ॲनालिटिक्स</strong> कॅस्केड एरेटरवरचा इनलेट फ्लो, आउटलेट फ्लो, <strong>टोटल एनर्जी कंझम्प्शन</strong> (<strong>733.91</strong>) आणि <strong>आउटलेट क्वालिटी</strong> टेबलवर उघडते — pH <strong>8.18</strong>, टर्बिडिटी <strong>2.30</strong>, कंडक्टिव्हिटी <strong>62.83</strong>, FRC <strong>0.05</strong>, तापमान <strong>23.19</strong>. KPI टाइल प्रति KL ऊर्जा, आउटलेट pH आणि TDS जोडतात.",
          voice: "डब्ल्यू टी पी पेज फ्लो, ऊर्जा आणि आउटलेट क्वालिटी टेबलवर उघडते — pH, टर्बिडिटी, कंडक्टिव्हिटी आणि क्लोरीन.",
        },
        {
          label: 'मर्यादा', title: 'मर्यादेच्या आत की बाहेर',
          body: "<strong>फ्लो अँड क्वालिटी</strong> टाकी पातळी आणि आकारमान दाखवते, मग प्रत्येक क्वालिटी चार्टवर त्याची स्वीकार्य मर्यादा छायांकित करते: <strong>आउटलेट pH</strong> <strong>8.36</strong> हिरव्यात आहे, <strong>आउटलेट FRC</strong> <strong>0.04 ppm</strong> त्याच्या 0.2–0.5 मर्यादेखाली आहे, आणि <strong>आउटलेट टर्बिडिटी</strong> <strong>2.88</strong> वर संपते. मग कंडक्टिव्हिटी, फीड वॉटर TDS आणि फिल्टर प्रेशर.",
          voice: "क्वालिटी चार्ट त्यांच्या स्वीकार्य मर्यादेसह छायांकित आहेत — इथे pH मर्यादेत आहे, तर फ्री क्लोरीन तिच्या खाली आहे.",
        },
        {
          label: 'उपकरणे', title: 'उपकरणे, व्हॉल्व्ह आणि ट्रिप',
          body: "<strong>एनर्जी कंझम्प्शन</strong> आणि <strong>फिल्टर प्रेशर</strong> नंतर <strong>इक्विपमेंट परफॉर्मन्स अँड मेंटेनन्स</strong> येते: <strong>DMF-1 ते DMF-4 मोटराइज्ड व्हॉल्व्ह स्टेटस</strong>, डोसिंग आणि बॅकवॉश पंप, मग प्रत्येक पंपचे <strong>रनिंग तास</strong>, <strong>ऑटो मॅन्युअल</strong> आणि <strong>ट्रिप स्टेटस</strong>.",
          voice: "मग ऊर्जा, फिल्टर प्रेशर आणि व्हॉल्व्ह स्टेटस, आणि प्रत्येक पंपचे रनिंग तास, ऑटो-मॅन्युअल आणि ट्रिप स्टेटस.",
        },
        {
          label: 'सारांश', title: 'कोणते पेज कोणत्या कामासाठी',
          body: "तीनही प्लांटच्या झलकेसाठी <strong>डॅशबोर्ड</strong>. लक्ष देण्याच्या गोष्टींसाठी <strong>तिकिटे</strong>. नोंदींसाठी <strong>लॉगबुक डेटा इनपुट</strong> आणि <strong>इन्व्हेंटरी</strong>. लाइव्ह प्रोसेससाठी <strong>स्काडाव्ह्यू</strong>. युनिटनिहाय ट्रेंडसाठी प्रत्येक प्लांटचे <strong>ॲनालिटिक्स</strong>.",
          voice: "झलकेसाठी डॅशबोर्ड, महत्त्वाच्या गोष्टींसाठी तिकिटे, नोंदींसाठी लॉगबुक आणि इन्व्हेंटरी, लाइव्ह स्काडाव्ह्यू, आणि प्रत्येक प्लांटचे ॲनालिटिक्स.",
        },
      ],
    },
  },
};

export default lesson;
