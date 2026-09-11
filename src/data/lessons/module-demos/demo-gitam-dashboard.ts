import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-gitam-dashboard`;

/**
 * Demo — Gitam University, campus water network.  (hidden module-demos)
 *
 * Built from one screen recording (4:34, Gitam University account, 2026-09-11):
 * Dashboard "Dashboard page-New" → the Page menu (Unified Dashboard, Borewell
 * Flow Data, Overhead Tank (Daily), Analysis, each with report sub-pages) → the
 * range picker → the Borewell Flow Data and Overhead Tank pages → underground
 * tanks, individual borewells, UG sump input, STP treated water and its
 * flushing and irrigation usage, Input & Balance → a custom widget and the
 * Tickets History widget → Inventory → Tickets (counts, rows, Create New
 * Ticket) → Visualisation (the whole campus as one live diagram) → Gitam
 * University Analytics (Flow at each point, Level of each tank, Automation
 * Status, Plant Summary).
 *
 * Style: `detailed` — 2-4 steps per page, key widgets opened individually,
 * 27 steps, ~5.5 minutes.
 *
 * The uploader's NOTES ask for the dashboard "in detail", naming ticket
 * granularity + data downloading, widget customization, daily/weekly/monthly
 * energy, insights, alerts, inventory and ticket management. Mapped on as:
 * granularity → steps 5-6; downloading → step 9's Download CSV; widget
 * customization → steps 12 and 15 (Edit Widget, the custom widget, saved
 * views); daily/weekly/monthly → step 4, where the Page menu carries GITAM
 * Daily, Weekly and Monthly report pages; alerts and ticket management →
 * steps 16, 18-20; inventory → step 17.
 *
 * Gitam is a CAMPUS water network — borewells, sumps, overhead tanks and
 * buildings — not a single treatment plant, and the copy talks that way.
 *
 * Things the copy deliberately does NOT overclaim:
 *  - this account has NO Insight List, Data Input or Task List in its menu. The
 *    alert surface is Tickets, which the system raises automatically (pumps
 *    left in manual mode, tank levels past 90%), so the notes' "insights and
 *    alerts" are mapped there rather than invented.
 *  - Inventory is wired up but holds no items for this account ("No inventory
 *    items to show"), so step 17 says exactly that instead of describing stock
 *    figures that do not exist.
 *  - there is no energy widget on this dashboard — the "energy" card on the
 *    Analysis page reads "No Metric Selected" — so no energy figures are
 *    claimed; the daily/weekly/monthly intent is served by the report pages.
 *  - the recording opens from an internal Assets / "View As" screen that a
 *    client user never sees, so the demo starts at the Dashboard.
 *
 * Real 1280px frames from the recording; the baked OS cursor is erased from
 * every one (delogo on flat ground, boxes trimmed to spare tooltip text).
 */
const lesson: Lesson = {
  id: 'demo-gitam-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 11,
  estimatedMinutes: 6,
  expiresAt: '2026-10-11', // 30 days after the job's created_at (2026-09-11) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    controls: `${BASE}/controls.jpg`,
    pages: `${BASE}/pages.jpg`,
    range: `${BASE}/range.jpg`,
    thirty: `${BASE}/thirty.jpg`,
    borewellpage: `${BASE}/borewellpage.jpg`,
    overhead: `${BASE}/overhead.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    borewells: `${BASE}/borewells.jpg`,
    sumpinput: `${BASE}/sumpinput.jpg`,
    stpwater: `${BASE}/stpwater.jpg`,
    irrigation: `${BASE}/irrigation.jpg`,
    custom: `${BASE}/custom.jpg`,
    ticketshist: `${BASE}/ticketshist.jpg`,
    ticketscount: `${BASE}/ticketscount.jpg`,
    ticketrows: `${BASE}/ticketrows.jpg`,
    createticket: `${BASE}/createticket.jpg`,
    viz1: `${BASE}/viz1.jpg`,
    viz2: `${BASE}/viz2.jpg`,
    flowpoints: `${BASE}/flowpoints.jpg`,
    tanklevels: `${BASE}/tanklevels.jpg`,
    automation: `${BASE}/automation.jpg`,
    plantsummary: `${BASE}/plantsummary.jpg`,
  },
  layouts: [
    // S1 — the side navigation
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '9.9%', left: '0%', width: '14.1%', height: '30.8%' },
      cursor: [
        { at: 0, x: 15.2, y: 4.4, click: true },
        { at: 0.3, x: 3.2, y: 12.6 },
        { at: 0.55, x: 2.9, y: 18.8 },
        { at: 0.8, x: 4.3, y: 31.1 },
        { at: 0.95, x: 3.6, y: 37.3, click: true },
      ],
    },
    // S2 — the header controls
    {
      mode: 'detail', screenshot: 'controls', caption: 'The controls that drive the page',
      spotlight: { top: '15%', left: '1.6%', width: '96.6%', height: '11%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.35, x: 53.8, y: 23.9 },
        { at: 0.6, x: 72.7, y: 23.9 },
        { at: 0.85, x: 82.9, y: 13.7, click: true },
        { at: 0.97, x: 91.8, y: 13.7 },
      ],
    },
    // S3 — water supplied to each building
    {
      mode: 'detail', screenshot: 'controls', caption: 'Water into each building',
      spotlight: { top: '38.9%', left: '1.6%', width: '81.7%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.3, y: 53 },
        { at: 0.3, x: 25.5, y: 53 },
        { at: 0.55, x: 41.7, y: 53 },
        { at: 0.8, x: 58, y: 53 },
        { at: 0.95, x: 41.7, y: 88.5 },
      ],
    },
    // S4 — the Page menu: pages and report pages
    {
      mode: 'detail', screenshot: 'pages', caption: 'Pages, and report pages',
      spotlight: { top: '28.2%', left: '2.3%', width: '17.2%', height: '20.5%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.3, x: 6.8, y: 30.8 },
        { at: 0.55, x: 6.9, y: 35.2 },
        { at: 0.8, x: 7.4, y: 39.7 },
        { at: 0.95, x: 5, y: 43.9 },
      ],
    },
    // S5 — the range picker
    {
      mode: 'detail', screenshot: 'range', caption: 'Pick a window',
      spotlight: { top: '55.6%', left: '20.4%', width: '17.2%', height: '15.4%' },
      cursor: [
        { at: 0, x: 41.5, y: 19.5 },
        { at: 0.3, x: 42.7, y: 25.6 },
        { at: 0.6, x: 23, y: 60.7 },
        { at: 0.85, x: 23, y: 66.2 },
        { at: 0.97, x: 75.2, y: 82.1, click: true },
      ],
    },
    // S6 — a month of the same page
    {
      mode: 'detail', screenshot: 'thirty', caption: 'A month of the same page',
      spotlight: { top: '38.9%', left: '1.6%', width: '81.7%', height: '33.3%' },
      cursor: [
        { at: 0, x: 53.8, y: 23.9, click: true },
        { at: 0.3, x: 60.9, y: 23.9 },
        { at: 0.6, x: 9.3, y: 53 },
        { at: 0.9, x: 41.7, y: 53 },
      ],
    },
    // S7 — the Borewell Flow Data page
    {
      mode: 'detail', screenshot: 'borewellpage', caption: 'Every borewell, raw and daily',
      spotlight: { top: '38.9%', left: '1.6%', width: '64.1%', height: '60%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.35, x: 13.5, y: 49.6 },
        { at: 0.65, x: 45.5, y: 49.6 },
        { at: 0.9, x: 82.3, y: 49.6 },
      ],
    },
    // S8 — the Overhead Tank (Daily) page
    {
      mode: 'detail', screenshot: 'overhead', caption: 'Tank by tank, day by day',
      spotlight: { top: '38.9%', left: '1.6%', width: '96.6%', height: '58.1%' },
      cursor: [
        { at: 0, x: 9.8, y: 23.9, click: true },
        { at: 0.35, x: 25.5, y: 53 },
        { at: 0.65, x: 58, y: 53 },
        { at: 0.9, x: 86.2, y: 53 },
      ],
    },
    // S9 — underground tanks, and getting the data out
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Take the table with you',
      spotlight: { top: '20.5%', left: '24%', width: '9%', height: '6%' },
      cursor: [
        { at: 0, x: 11.7, y: 22.4 },
        { at: 0.35, x: 26.6, y: 23.2, click: true },
        { at: 0.7, x: 28.1, y: 23.2 },
        { at: 0.95, x: 31.1, y: 23.2 },
      ],
    },
    // S10 — the individual borewells
    {
      mode: 'detail', screenshot: 'borewells', caption: 'Which borewell is actually pumping',
      spotlight: { top: '64.1%', left: '1.6%', width: '32.8%', height: '35%' },
      cursor: [
        { at: 0, x: 7.5, y: 60.5 },
        { at: 0.35, x: 11, y: 74.7 },
        { at: 0.7, x: 31.6, y: 80.7 },
        { at: 0.95, x: 31.6, y: 92.5 },
      ],
    },
    // S11 — UG Sump Input
    {
      mode: 'detail', screenshot: 'sumpinput', caption: 'What each sump took in',
      spotlight: { top: '13.7%', left: '1.6%', width: '81.7%', height: '35.9%' },
      cursor: [
        { at: 0, x: 9.3, y: 28.2 },
        { at: 0.35, x: 25.5, y: 28.2 },
        { at: 0.65, x: 41.7, y: 28.2 },
        { at: 0.9, x: 74.2, y: 28.2 },
      ],
    },
    // S12 — STP treated water, and editing a widget
    {
      mode: 'detail', screenshot: 'stpwater', caption: 'Treated water, and the tools on it',
      spotlight: { top: '12.8%', left: '1.6%', width: '48.6%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.3, y: 25.6 },
        { at: 0.35, x: 25.5, y: 25.6 },
        { at: 0.65, x: 41.7, y: 25.6 },
        { at: 0.95, x: 47.3, y: 59.5, click: true },
      ],
    },
    // S13 — where the treated water goes
    {
      mode: 'detail', screenshot: 'stpwater', caption: 'Where the treated water goes',
      spotlight: { top: '55.6%', left: '1.6%', width: '64.1%', height: '35.9%' },
      cursor: [
        { at: 0, x: 9.3, y: 70.9 },
        { at: 0.35, x: 25.5, y: 70.9 },
        { at: 0.65, x: 41.7, y: 70.9 },
        { at: 0.9, x: 58, y: 70.9 },
      ],
    },
    // S14 — irrigation, and the balance that closes the loop
    {
      mode: 'detail', screenshot: 'irrigation', caption: 'In, out, and the balance',
      spotlight: { top: '58.1%', left: '1.6%', width: '64.1%', height: '35.9%' },
      cursor: [
        { at: 0, x: 9.3, y: 28.2 },
        { at: 0.35, x: 9.3, y: 72.6 },
        { at: 0.65, x: 25.5, y: 72.6 },
        { at: 0.9, x: 58, y: 72.6 },
      ],
    },
    // S15 — building a widget of your own
    {
      mode: 'detail', screenshot: 'custom', caption: 'Build a widget of your own',
      spotlight: { top: '18.8%', left: '1.6%', width: '48.6%', height: '68.4%' },
      cursor: [
        { at: 0, x: 43, y: 20.7 },
        { at: 0.35, x: 46.7, y: 20.7, click: true },
        { at: 0.7, x: 79, y: 95.4, click: true },
        { at: 0.95, x: 87.7, y: 95.4 },
      ],
    },
    // S16 — the tickets the campus has raised, on the dashboard
    {
      mode: 'detail', screenshot: 'ticketshist', caption: 'Alerts, on the dashboard',
      spotlight: { top: '45.3%', left: '1.6%', width: '64.1%', height: '52.1%' },
      cursor: [
        { at: 0, x: 5.5, y: 47.5 },
        { at: 0.35, x: 14.8, y: 57.8 },
        { at: 0.7, x: 40.2, y: 57.8 },
        { at: 0.95, x: 49.1, y: 65.8 },
      ],
    },
    // S17 — Inventory, wired up and waiting
    {
      mode: 'detail', screenshot: 'nav', caption: 'Inventory, ready for your store',
      spotlight: { top: '28.2%', left: '14.1%', width: '83.9%', height: '60%' },
      cursor: [
        { at: 0, x: 2.9, y: 18.8, click: true },
        { at: 0.35, x: 30, y: 34 },
        { at: 0.7, x: 81.5, y: 37.4 },
        { at: 0.95, x: 92.3, y: 37.4 },
      ],
    },
    // S18 — the Tickets page: counts and severity
    {
      mode: 'detail', screenshot: 'ticketscount', caption: 'Every ticket, counted',
      spotlight: { top: '17.1%', left: '1.6%', width: '96.6%', height: '14.5%' },
      cursor: [
        { at: 0, x: 14.7, y: 21.4 },
        { at: 0.3, x: 18.7, y: 28.2 },
        { at: 0.55, x: 43.4, y: 21.4 },
        { at: 0.8, x: 65.6, y: 22.6 },
        { at: 0.95, x: 87.5, y: 22.6 },
      ],
    },
    // S19 — what a ticket says, and how it is tagged
    {
      mode: 'detail', screenshot: 'ticketrows', caption: 'Tagged, timed, categorised',
      spotlight: { top: '34.2%', left: '1.6%', width: '96.6%', height: '29.9%' },
      cursor: [
        { at: 0, x: 15.6, y: 37.3 },
        { at: 0.35, x: 12.5, y: 42.6 },
        { at: 0.7, x: 21.3, y: 42.6 },
        { at: 0.95, x: 88.8, y: 40 },
      ],
    },
    // S20 — raising one by hand
    {
      mode: 'detail', screenshot: 'createticket', caption: 'Raise one yourself',
      spotlight: { top: '26.5%', left: '24.8%', width: '50.3%', height: '47%' },
      cursor: [
        { at: 0, x: 93.8, y: 13.7, click: true },
        { at: 0.3, x: 50, y: 34.9 },
        { at: 0.6, x: 50, y: 53.7 },
        { at: 0.85, x: 50, y: 62.2 },
        { at: 0.97, x: 50, y: 70.1, click: true },
      ],
    },
    // S21 — the whole campus as one diagram
    {
      mode: 'detail', screenshot: 'viz1', caption: 'The whole campus, live',
      spotlight: { top: '20.5%', left: '9.4%', width: '81.3%', height: '75.2%' },
      cursor: [
        { at: 0, x: 5.5, y: 12 },
        { at: 0.3, x: 61.7, y: 17.1 },
        { at: 0.6, x: 82, y: 17.1, click: true },
        { at: 0.9, x: 38.9, y: 53 },
      ],
    },
    // S22 — down to a single pump
    {
      mode: 'detail', screenshot: 'viz2', caption: 'Down to a single pump',
      spotlight: { top: '48.7%', left: '4.7%', width: '46.9%', height: '45.3%' },
      cursor: [
        { at: 0, x: 13, y: 74.7 },
        { at: 0.35, x: 38.6, y: 62.4 },
        { at: 0.7, x: 75.3, y: 59 },
        { at: 0.95, x: 60.2, y: 28.2 },
      ],
    },
    // S23 — Analytics: flow at each point
    {
      mode: 'detail', screenshot: 'flowpoints', caption: 'Flow at each point',
      spotlight: { top: '18.8%', left: '1.6%', width: '96.6%', height: '46.2%' },
      cursor: [
        { at: 0, x: 6.6, y: 13.7 },
        { at: 0.35, x: 13.5, y: 31.6 },
        { at: 0.65, x: 37.7, y: 38.5 },
        { at: 0.9, x: 86.2, y: 49.6 },
      ],
    },
    // S24 — Analytics: level of each tank
    {
      mode: 'detail', screenshot: 'tanklevels', caption: 'Level of each tank',
      spotlight: { top: '39.3%', left: '1.6%', width: '96.6%', height: '46.2%' },
      cursor: [
        { at: 0, x: 6.6, y: 34.7 },
        { at: 0.35, x: 13.5, y: 60 },
        { at: 0.65, x: 49.9, y: 60 },
        { at: 0.9, x: 86.2, y: 60 },
      ],
    },
    // S25 — Analytics: automation status
    {
      mode: 'detail', screenshot: 'automation', caption: 'Auto, manual, or tripped',
      spotlight: { top: '32.5%', left: '1.6%', width: '96.6%', height: '46.2%' },
      cursor: [
        { at: 0, x: 6.6, y: 27.7 },
        { at: 0.35, x: 26.2, y: 34.9 },
        { at: 0.65, x: 60.2, y: 34.9 },
        { at: 0.9, x: 41.4, y: 82.9 },
      ],
    },
    // S26 — Analytics: plant summary
    {
      mode: 'detail', screenshot: 'plantsummary', caption: 'The campus in one panel',
      spotlight: { top: '36.8%', left: '1.6%', width: '96.6%', height: '57.3%' },
      cursor: [
        { at: 0, x: 6.6, y: 33.3 },
        { at: 0.3, x: 6.6, y: 51.3 },
        { at: 0.6, x: 27.3, y: 51.3 },
        { at: 0.85, x: 58.4, y: 48 },
        { at: 0.97, x: 79.2, y: 70.9 },
      ],
    },
    // S27 — wrap
    {
      mode: 'detail', screenshot: 'controls', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1.2, y: 4.4 },
        { at: 0.35, x: 9.8, y: 23.9 },
        { at: 0.7, x: 25.5, y: 53 },
        { at: 0.95, x: 61.2, y: 23.9 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Gitam University,<br><em>the whole campus, borewell to building.</em>',
      subtitle:
        'A detailed walkthrough of your platform — the dashboard page by page, the tickets the network raises by itself, and the campus running live as one diagram.',
      chapter: 'Demo · Gitam University',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens your side navigation, and every screen you have lives there: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Tickets</strong>, then <strong>Gitam University</strong> — which expands to the analytics pages — and <strong>Visualisation</strong>, the live diagram of the campus. The <strong>search</strong> box at the top jumps straight to any of them.",
          voice: "Everything starts from this menu — Dashboard, Inventory, Tickets, Gitam University with its analytics, and Visualisation for the live diagram.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "Everything on a dashboard is driven by three controls: the <strong>Page</strong> selector on the left, the <strong>Granularity</strong>, and the <strong>From</strong> and <strong>To</strong> range. On the right sit <strong>refresh</strong>, the <strong>gear</strong> for page settings, the <strong>grid</strong> that manages the layout itself, and a <strong>share</strong> arrow — and on the analytics pages, a <strong>sparkle</strong> for AI insights.",
          voice: "The page selector, the granularity and the date range drive every widget below. Refresh, page settings, layout and share sit on the right.",
        },
        {
          label: 'Buildings', title: 'Water into each building',
          body: "<strong>Water Supplied to Individual Building</strong> is the campus in one row: <strong>Total Water Supplied 426.39 KL</strong>, then <strong>Vinay Sadan 69</strong>, <strong>North Block Overhead 218</strong>, <strong>Staff Quarter 117</strong> and <strong>Kokila Sadan 0</strong>, with <strong>Overhead AB-2 21.39</strong>, <strong>AB-1 1</strong> and <strong>Total Borewell Flow 428.02</strong> below. Each card carries the exact window it covers and the change against the one before.",
          voice: "Four hundred twenty six K L supplied in all, split by building — Vinay Sadan sixty nine, North Block two eighteen, Staff Quarter one seventeen.",
        },
        {
          label: 'Pages', title: 'Pages, and report pages',
          body: "The <strong>Page</strong> menu holds more than one dashboard. <strong>Unified Dashboard</strong>, <strong>Borewell Flow Data</strong>, <strong>Overhead Tank (Daily)</strong> and <strong>Analysis</strong> each arrange the same campus for a different question — and the arrow beside several of them opens their report pages, including <strong>GITAM Daily</strong>, <strong>Weekly</strong> and <strong>Monthly report</strong>. A period summary is a page you open, not a date you type.",
          voice: "The page menu holds several dashboards, and the arrow beside them opens report pages — GITAM daily, weekly and monthly. A period summary is one click.",
        },
        {
          label: 'Range', title: 'Pick a window',
          body: "Click the range and the picker opens. Presets run <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, three, seven, ten or thirty days, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars. <strong>Granularity</strong> follows what you pick — <strong>Days</strong> and <strong>Weeks</strong> across a month — <strong>Time Format</strong> switches between <strong>12</strong> and <strong>24 Hour</strong>, and <strong>Smart Hours</strong> re-applies one daily time slot across every date in the range.",
          voice: "Presets from today out to six months, or your own dates. The granularity follows the window, and smart hours repeats one daily slot across every date.",
        },
        {
          label: 'Month', title: 'A month of the same page',
          body: "Set to <strong>Days</strong> over the <strong>Last 30 Days</strong> and every card re-computes without anything else changing: <strong>Total Water Supplied 15599.79 KL</strong>, <strong>Vinay Sadan 4485</strong>, <strong>North Block 5581</strong>, <strong>Staff Quarter 3545</strong>, <strong>Kokila Sadan 6</strong>, with <strong>Overhead AB-2 1264.79</strong>, <strong>AB-1 718</strong> and <strong>Total Borewell Flow 13558.03</strong>. The same page answers the shift question and the month question.",
          voice: "Over thirty days the same cards read fifteen thousand six hundred K L supplied against thirteen and a half thousand pumped from the borewells.",
        },
        {
          label: 'Borewells', title: 'Every borewell, raw and daily',
          body: "<strong>Borewell Flow Data</strong> puts the meters side by side. <strong>Borewell Raw data</strong> carries the running totalizer readings — <strong>AB-1 Fashion Street 16.88</strong>, <strong>Kempegowda Park 39710</strong>, <strong>AB-1 South West corner 65535</strong> — while <strong>Borewell Flow (KL per Day)</strong> puts the same meters as daily volumes beside them. Each borewell also gets its own chart, so a meter that has stopped reporting is obvious.",
          voice: "Raw totalizer readings on the left, the same meters as daily volumes beside them, and a chart per borewell so a stalled meter shows up.",
        },
        {
          label: 'Tanks', title: 'Tank by tank, day by day',
          body: "<strong>Overhead Tank (Daily)</strong> gives every tank its own plot: <strong>AB-1 Overhead tank-1</strong> and <strong>-2</strong>, <strong>AB-2 Overhead Tank-1</strong> at <strong>16</strong> and <strong>-2</strong> at <strong>5.38</strong>, then the <strong>NBH(N) Sump Tanks</strong>, <strong>Vinay Sadan</strong> and <strong>Kokila Sadan</strong> flowmeters. Every tank on one page, each on the same time axis, so you can see which filled and which did not.",
          voice: "Every overhead tank gets its own plot on one page, all on the same time axis — so you see which filled and which did not.",
        },
        {
          label: 'Download', title: 'Take the table with you',
          body: "Every widget carries the same tools on hover: <strong>Download CSV</strong>, <strong>Expanded View</strong>, a chart-type menu, <strong>Edit Widget</strong> and an <strong>info</strong> note. Here <strong>Water Available in Underground tanks</strong> holds <strong>Heritage Area 249.18</strong>, <strong>North Block 231.82</strong>, <strong>AB-1 Cornor Sump 0.00</strong> and <strong>Staf quarters East side 682.28</strong> — and the CSV comes down for whatever range is set above, so a monthly return is two clicks.",
          voice: "Hover any widget for download, expand, chart type and edit. The C S V comes down for whatever range is set above — a monthly return in two clicks.",
        },
        {
          label: 'Pumping', title: 'Which borewell is actually pumping',
          body: "<strong>Individual Borewell</strong> lists the day's flow per well: <strong>AB-1 Fashion Street 0.01</strong>, <strong>Kempegowda Park 58.00</strong>, <strong>AB-1 South West corner 0.00</strong>, <strong>Kokila Sadan East side 43.00</strong> and <strong>West Side 0.00</strong>. Two wells carrying the day while the others sit at zero is exactly the pattern worth knowing before a pump fails from overuse.",
          voice: "Kempegowda Park at fifty eight and Kokila Sadan East at forty three carry the day while the rest sit at zero — the pattern worth knowing before a pump fails.",
        },
        {
          label: 'Sumps', title: 'What each sump took in',
          body: "<strong>UG Sump Input</strong> reads the intake per underground tank: <strong>Heritage Tank 58.02 KL</strong>, down <strong>32%</strong>; <strong>AB-1 Sump tank 0</strong>; <strong>North Block Tank 144</strong>, down <strong>40%</strong>; <strong>Vinay Sadan East 75</strong>, down <strong>26%</strong>; <strong>Staff East tank 14</strong>, down <strong>83%</strong>. The change against the previous window sits on every card, so a tank that stopped filling stands out without comparing anything by hand.",
          voice: "Intake per underground tank, each with its change — Heritage fifty eight, North Block one forty four, Staff East fourteen and down eighty three percent.",
        },
        {
          label: 'Treated', title: 'Treated water, and the tools on it',
          body: "<strong>STP Treated Water</strong> carries <strong>Total Flow in Treated Water Tank 201.32 KL</strong>, with <strong>STP Treated Water-1</strong> at <strong>172.32</strong> and <strong>-2</strong> at <strong>92.76</strong>. Hover any of them and the toolbar appears — here <strong>Edit Widget</strong>, which is how a card's sensor, name, unit and thresholds are changed without anyone rebuilding the page.",
          voice: "Treated water two hundred one K L in the tank. Hover any card for edit widget — how its sensor, name and thresholds are changed without rebuilding the page.",
        },
        {
          label: 'Flushing', title: 'Where the treated water goes',
          body: "<strong>STP Treated Water Usage (Flushing System)</strong> follows it to the buildings: <strong>Total Water Used in Flushing 89 KL</strong>, split as <strong>Vinay Sadan 75</strong>, <strong>Staff Quarter 14</strong> and <strong>Kokila Sadan 0</strong>. Treated water reused for flushing is water the campus did not have to pump, and this is where that saving is counted.",
          voice: "Eighty nine K L of treated water reused for flushing — seventy five to Vinay Sadan, fourteen to Staff Quarter. Water the campus did not have to pump.",
        },
        {
          label: 'Balance', title: 'In, out, and the balance',
          body: "<strong>STP Treated Water Usage (Irrigation System)</strong> adds <strong>126 KL</strong> of irrigation flow, up <strong>5%</strong>. Then <strong>Input & Balance</strong> closes the loop for the day: <strong>Water received from Tankers 0.01</strong>, <strong>from Borewell 291.01</strong>, <strong>from Pipeline 0</strong>, and <strong>Total inlet 291.02 KL</strong>. Every source on one row, so the day's water balance needs no spreadsheet.",
          voice: "Irrigation takes another one twenty six K L. Input and balance closes the day — tankers, borewells and pipeline adding to two ninety one total inlet.",
        },
        {
          label: 'Custom', title: 'Build a widget of your own',
          body: "A page is not fixed. A <strong>Custom Widget</strong> can be added and pointed at any sensor on the campus — here one is being built against an <strong>Overhead Tank AB-1</strong> level sensor. Anything you change raises the <strong>Save Current View</strong> bar along the bottom: <strong>Save</strong> writes it back to this page, <strong>Save As</strong> keeps it as a new one, <strong>Cancel</strong> throws it away.",
          voice: "A custom widget can be added and pointed at any sensor on campus. Save current view then keeps the page you built, or saves it as a new one.",
        },
        {
          label: 'Alerts', title: 'Alerts, on the dashboard',
          body: "The <strong>Tickets History</strong> widget puts the campus's own findings on the dashboard itself. These are raised automatically from the data, not typed in: <em>“Any of the New Heritage Tank to Overhead tank AB pump in Manual mode”</em>, <em>“Borewell 4 - Kokila Sadan West Side Pump in Manual mode”</em>, <em>“Inside Staff Hostel level has reached 90%”</em> — each with its plant, its timestamp and a <strong>Type & Tags</strong> column naming the teams it concerns.",
          voice: "The tickets history widget puts the campus's own findings on the dashboard — pumps left in manual mode, a hostel tank past ninety percent.",
        },
        {
          label: 'Inventory', title: 'Inventory, ready for your store',
          body: "<strong>Inventory</strong> is wired up for this account but holds no items yet — it reads <strong>No inventory items to show</strong>. The columns are already there and waiting: <strong>Name</strong>, <strong>Store Name</strong>, <strong>Category</strong>, <strong>Stock Available</strong>, <strong>Last Consumption</strong>, and consumption compared as <strong>Actual</strong> against <strong>Expected</strong> — the column that tells you whether dosing is drifting, once your store list is loaded.",
          voice: "Inventory is wired up but holds no items yet. The columns are waiting — stock, last consumption, and actual against expected, once your store list is loaded.",
        },
        {
          label: 'Tickets', title: 'Every ticket, counted',
          body: "The <strong>Tickets</strong> page opens on the counts: <strong>12 open</strong> — none critical, <strong>11 overdue</strong>, <strong>11 escalated</strong> — against <strong>14 closed</strong>, of which <strong>10 overdue</strong> and <strong>8 escalated</strong>. To the right the same totals split by team: open work sits at <strong>7 Electrical</strong>, <strong>2 Process</strong> and <strong>1 Admin</strong>, closed at <strong>4 Electrical</strong>. Eleven of twelve overdue is the number to act on.",
          voice: "Twelve open tickets against fourteen closed, eleven of them overdue, and the split by team puts seven of the open ones on electrical.",
        },
        {
          label: 'Detail', title: 'Tagged, timed, categorised',
          body: "Each row is a finding in plain words: <em>“Inside New Heritage Tank has reached 90% as indicated by the level transmitter”</em>, <em>“Borewell 12 - NBH North Side Pump in Manual mode”</em>, <em>“Borewell 7 - Parking Borewell-1 (opp MG) Pump in Manual mode”</em>. The tags carry the rest — <strong>normal</strong>, <strong>automatic</strong>, <strong>overdue</strong>, <strong>Escalation Level 3</strong>, <strong>verified</strong> — with the <strong>Created At</strong> time and a <strong>Category</strong> naming <strong>Electrical</strong>, <strong>Mechnical</strong> or <strong>System</strong>.",
          voice: "Each ticket is a finding in plain words, tagged automatic or manual, overdue, escalated or verified, with its time and the teams it concerns.",
        },
        {
          label: 'Create', title: 'Raise one yourself',
          body: "<strong>Create New Ticket</strong> is the manual route: a <strong>Problem Statement</strong>, an optional <strong>Description</strong>, the <strong>Equipment</strong> it concerns and an <strong>Issue Type</strong>. That is why rows are tagged <strong>automatic</strong> or <strong>manual</strong> — the system raises most of them from the data, and your team raises the rest.",
          voice: "Create new ticket takes a problem statement, the equipment and an issue type — which is why every ticket is tagged automatic or manual.",
        },
        {
          label: 'Live', title: 'The whole campus, live',
          body: "<strong>Visualisation</strong> opens the campus as a single diagram with a <strong>LIVE</strong> badge and the timestamp of the last reading. Every borewell, sump, overhead tank and building is drawn where it actually sits — <strong>AB-1 Fashion Street</strong>, <strong>Kempegowda Park</strong>, <strong>Nearby NBH Portico</strong> and <strong>NBH North Side</strong> down the left, the overhead tanks through the middle, <strong>Vinay Sadan</strong> and <strong>Kokila Sadan</strong> to the right, with <strong>STP Treated Water</strong> at the bottom.",
          voice: "Visualisation opens the whole campus as one live diagram — every borewell, sump, overhead tank and building drawn where it actually sits.",
        },
        {
          label: 'Zoom', title: 'Down to a single pump',
          body: "Zoom in and every unit carries its own live state. Each pump shows a coloured marker, each tank fills to its real level with a <strong>Level</strong> gauge beside it, and each line carries its <strong>Flow{KL/hr}</strong> readout — <strong>5.8</strong> on the Vinay Sadan West line while the others read <strong>0.00</strong>. <strong>Group Control</strong>, <strong>Unit Processes</strong> and <strong>Select Page</strong> sit above, and the clock and play controls replay an earlier moment.",
          voice: "Zoomed in, every pump shows its state, every tank fills to its real level, and each line carries its own flow readout.",
        },
        {
          label: 'Flow', title: 'Flow at each point',
          body: "<strong>Gitam University Analytics</strong> groups the network by question. <strong>Flow at each point</strong> holds <strong>Borewell Flow</strong> per well — <strong>Kempegowda Park 77.00</strong>, <strong>Parking Borewell-1 100.00</strong>, <strong>Vinay Sadan West 36.00</strong> — beside <strong>Tanker Flow</strong>, <strong>Pipeline flow</strong>, and <strong>Flow from sump/tank to OHT</strong>, which reads <strong>AB-1 Sump Tank to West Vinay Sadan 69.00</strong>. Hover any chart and it names the series, the window and the aggregation.",
          voice: "Analytics groups the network by question. Flow at each point covers every borewell, the tankers, the pipeline, and sump to overhead tank transfers.",
        },
        {
          label: 'Levels', title: 'Level of each tank',
          body: "<strong>Level of each tank</strong> runs three charts across the day. <strong>Sump Level</strong> tracks the New Heritage, Sump Tank-1, Staff East, WTP Collection, NBH(N) and Vinay Sadan East tanks, ending between <strong>89.02</strong> and <strong>15.64</strong>. <strong>Over Head Tank Levels</strong> holds the six AB tanks between <strong>74.84</strong> and <strong>66.69</strong>, and <strong>Hostels Tank Levels</strong> follows Vinay Sadan, Kokila Sadan, Staff Quarter, Boys and Staff Hostel.",
          voice: "Three charts across the day — sump levels, overhead tank levels, and hostel tank levels, each series ending with its own reading.",
        },
        {
          label: 'Automation', title: 'Auto, manual, or tripped',
          body: "<strong>Automation Status</strong> answers the question behind most of those tickets. <strong>Pump ONOFF status</strong> shows what is running; <strong>Borewell Pump Automation Status</strong> and <strong>Pump Automation Status</strong> show what is in auto — <strong>Fashion Street</strong>, <strong>Kempegowda Park</strong> and <strong>Parking Borewell-1</strong> at <strong>1.00</strong>, the rest at <strong>0.00</strong>, which is the manual-mode alert in its raw form. <strong>Trip Status</strong> stays at <strong>0.00</strong> throughout.",
          voice: "Automation status answers what most of those tickets ask — which pumps are running, which are in auto, and which are not. Trip status stays at zero.",
        },
        {
          label: 'Summary', title: 'The campus in one panel',
          body: "<strong>Plant Summary</strong> is the whole network as colour-coded tiles, each with its sensor tag and an <strong>info</strong> note: <strong>Total Water Received 428.04 KLD</strong> against <strong>Total water supplied 425.38</strong> and a <strong>Balance water 2.66</strong>, then the intake per tank — <strong>NBH(N) 215.00</strong>, <strong>Heritage 77.04</strong>, <strong>Staff East 36.00</strong>, <strong>Vinay Sadan East 100.00</strong> — and the flow into each building beside them.",
          voice: "Plant summary is the whole network as tiles — four twenty eight received, four twenty five supplied, and a balance of two point six six.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the day — every building, tank, borewell and the treated water in one scroll, on whichever page suits the question, with <strong>Daily</strong>, <strong>Weekly</strong> and <strong>Monthly report</strong> pages when someone asks for a period. <strong>Tickets</strong> for what the network is flagging by itself. <strong>Analytics</strong> when you need the flows, levels and automation behind a number. <strong>Visualisation</strong> when you want to watch the campus run.",
          voice: "Dashboard for the day, the report pages when someone asks for a period, Tickets for what the network flags, Analytics for the detail, Visualisation to watch it run.",
        },
      ],
    },
    hi: {
      title: 'गीतम यूनिवर्सिटी,<br><em>पूरा कैंपस, बोरवेल से इमारत तक।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का विस्तृत दौरा — डैशबोर्ड पेज-दर-पेज, नेटवर्क द्वारा स्वयं उठाए गए टिकट, और पूरा कैंपस एक लाइव डायग्राम में।',
      chapter: 'डेमो · गीतम यूनिवर्सिटी',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और आपकी हर स्क्रीन वहीं है: <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>टिकट</strong>, फिर <strong>गीतम यूनिवर्सिटी</strong> — जो एनालिटिक्स पेजों में खुलता है — और <strong>विज़ुअलाइज़ेशन</strong>, कैंपस का लाइव डायग्राम। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
          voice: "सब कुछ इसी मेन्यू से — डैशबोर्ड, इन्वेंटरी, टिकट, गीतम यूनिवर्सिटी के एनालिटिक्स, और लाइव डायग्राम के लिए विज़ुअलाइज़ेशन।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "डैशबोर्ड का सब कुछ तीन कंट्रोल से चलता है: बाईं ओर <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong>, और <strong>फ्रॉम</strong> व <strong>टू</strong> की समय सीमा। दाईं ओर <strong>रिफ़्रेश</strong>, सेटिंग्स का <strong>गियर</strong>, लेआउट संभालने वाला <strong>ग्रिड</strong>, और एक <strong>शेयर</strong> तीर — और एनालिटिक्स पेजों पर AI इनसाइट के लिए <strong>स्पार्कल</strong>।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा नीचे का हर विजेट चलाते हैं। दाईं ओर रिफ़्रेश, सेटिंग्स, लेआउट और शेयर।",
        },
        {
          label: 'इमारतें', title: 'हर इमारत में गया पानी',
          body: "<strong>वॉटर सप्लाइड टू इंडिविजुअल बिल्डिंग</strong> पूरे कैंपस को एक पंक्ति में रखता है: <strong>टोटल वॉटर सप्लाइड 426.39 KL</strong>, फिर <strong>विनय सदन 69</strong>, <strong>नॉर्थ ब्लॉक ओवरहेड 218</strong>, <strong>स्टाफ़ क्वार्टर 117</strong> और <strong>कोकिला सदन 0</strong>, नीचे <strong>ओवरहेड AB-2 21.39</strong>, <strong>AB-1 1</strong> और <strong>टोटल बोरवेल फ़्लो 428.02</strong>। हर कार्ड पर उसकी सटीक अवधि और पिछली अवधि से बदलाव अंकित है।",
          voice: "कुल चार सौ छब्बीस के एल आपूर्ति, इमारत-वार बँटी — विनय सदन उनहत्तर, नॉर्थ ब्लॉक दो सौ अठारह, स्टाफ़ क्वार्टर एक सौ सत्रह।",
        },
        {
          label: 'पेज', title: 'पेज, और रिपोर्ट पेज',
          body: "<strong>पेज</strong> मेन्यू में एक से ज़्यादा डैशबोर्ड हैं। <strong>यूनिफ़ाइड डैशबोर्ड</strong>, <strong>बोरवेल फ़्लो डेटा</strong>, <strong>ओवरहेड टैंक (डेली)</strong> और <strong>एनालिसिस</strong> — हर एक उसी कैंपस को अलग सवाल के लिए सजाता है — और कई के बगल का तीर उनके रिपोर्ट पेज खोलता है, जिनमें <strong>GITAM डेली</strong>, <strong>वीकली</strong> और <strong>मंथली रिपोर्ट</strong> शामिल हैं। अवधि का सारांश टाइप की गई तारीख नहीं, खोला गया पेज है।",
          voice: "पेज मेन्यू में कई डैशबोर्ड हैं, और उनके बगल का तीर रिपोर्ट पेज खोलता है — GITAM डेली, वीकली और मंथली। अवधि का सारांश एक क्लिक पर।",
        },
        {
          label: 'समय सीमा', title: 'अवधि चुनिए',
          body: "समय सीमा पर क्लिक करने से पिकर खुलता है: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 आवर्स</strong>, तीन, सात, दस या तीस दिन, <strong>3</strong> या <strong>6 महीने</strong>, या दो कैलेंडरों पर <strong>कस्टम</strong>। <strong>ग्रैन्युलैरिटी</strong> आपकी चुनी अवधि के साथ चलती है — महीने भर पर <strong>दिन</strong> और <strong>सप्ताह</strong> — <strong>टाइम फ़ॉर्मैट</strong> <strong>12</strong> व <strong>24 घंटे</strong> में बदलता है, और <strong>स्मार्ट आवर्स</strong> उसी दैनिक समय-खंड को हर तारीख पर लागू करती है।",
          voice: "आज से छह महीने तक के प्रीसेट, या अपनी तारीखें। ग्रैन्युलैरिटी अवधि के साथ चलती है, और स्मार्ट आवर्स एक ही दैनिक खंड हर तारीख पर दोहराती है।",
        },
        {
          label: 'महीना', title: 'वही पेज, पूरे महीने पर',
          body: "<strong>दिन</strong> और <strong>लास्ट 30 डेज़</strong> पर सेट कीजिए और बाकी कुछ बदले बिना हर कार्ड फिर से गणना करता है: <strong>टोटल वॉटर सप्लाइड 15599.79 KL</strong>, <strong>विनय सदन 4485</strong>, <strong>नॉर्थ ब्लॉक 5581</strong>, <strong>स्टाफ़ क्वार्टर 3545</strong>, <strong>कोकिला सदन 6</strong>, साथ में <strong>ओवरहेड AB-2 1264.79</strong>, <strong>AB-1 718</strong> और <strong>टोटल बोरवेल फ़्लो 13558.03</strong>। वही पेज शिफ़्ट का सवाल भी सँभालता है और महीने का भी।",
          voice: "तीस दिनों पर वही कार्ड पंद्रह हज़ार छह सौ के एल आपूर्ति और साढ़े तेरह हज़ार बोरवेल से पढ़ते हैं।",
        },
        {
          label: 'बोरवेल', title: 'हर बोरवेल, रॉ और दैनिक',
          body: "<strong>बोरवेल फ़्लो डेटा</strong> मीटरों को अगल-बगल रखता है। <strong>बोरवेल रॉ डेटा</strong> में चलती टोटलाइज़र रीडिंग हैं — <strong>AB-1 फ़ैशन स्ट्रीट 16.88</strong>, <strong>केम्पेगौड़ा पार्क 39710</strong>, <strong>AB-1 साउथ वेस्ट कॉर्नर 65535</strong> — जबकि <strong>बोरवेल फ़्लो (KL प्रति दिन)</strong> वही मीटर दैनिक मात्रा में रखता है। हर बोरवेल का अपना चार्ट भी है, इसलिए रिपोर्ट करना बंद कर चुका मीटर तुरंत दिखता है।",
          voice: "बाईं ओर रॉ टोटलाइज़र रीडिंग, बगल में वही मीटर दैनिक मात्रा में, और हर बोरवेल का अपना चार्ट — रुका हुआ मीटर तुरंत दिखता है।",
        },
        {
          label: 'टैंक', title: 'टैंक-दर-टैंक, दिन-दर-दिन',
          body: "<strong>ओवरहेड टैंक (डेली)</strong> हर टैंक को अपना प्लॉट देता है: <strong>AB-1 ओवरहेड टैंक-1</strong> व <strong>-2</strong>, <strong>AB-2 ओवरहेड टैंक-1</strong> <strong>16</strong> पर और <strong>-2</strong> <strong>5.38</strong> पर, फिर <strong>NBH(N) सम्प टैंक</strong>, <strong>विनय सदन</strong> व <strong>कोकिला सदन</strong> फ़्लोमीटर। हर टैंक एक ही पेज पर, सब एक ही समय-अक्ष पर।",
          voice: "हर ओवरहेड टैंक का अपना प्लॉट एक ही पेज पर, सब एक ही समय-अक्ष पर — कौन भरा और कौन नहीं, साफ़ दिखता है।",
        },
        {
          label: 'डाउनलोड', title: 'तालिका साथ ले जाइए',
          body: "हर विजेट पर हॉवर करते ही वही टूल आते हैं: <strong>डाउनलोड CSV</strong>, <strong>एक्सपैंडेड व्यू</strong>, चार्ट-टाइप मेन्यू, <strong>एडिट विजेट</strong> और <strong>info</strong>। यहाँ <strong>वॉटर अवेलेबल इन अंडरग्राउंड टैंक्स</strong> में <strong>हेरिटेज एरिया 249.18</strong>, <strong>नॉर्थ ब्लॉक 231.82</strong>, <strong>AB-1 कॉर्नर सम्प 0.00</strong> और <strong>स्टाफ़ क्वार्टर्स ईस्ट साइड 682.28</strong> हैं — और CSV ऊपर सेट सीमा के लिए उतरती है, इसलिए मासिक रिटर्न दो क्लिक में।",
          voice: "किसी भी विजेट पर हॉवर कीजिए — डाउनलोड, एक्सपैंड, चार्ट टाइप, एडिट। CSV ऊपर सेट सीमा के लिए उतरती है — मासिक रिटर्न दो क्लिक में।",
        },
        {
          label: 'पंपिंग', title: 'असल में कौन-सा बोरवेल चल रहा है',
          body: "<strong>इंडिविजुअल बोरवेल</strong> हर कुएँ का दिन भर का प्रवाह देता है: <strong>AB-1 फ़ैशन स्ट्रीट 0.01</strong>, <strong>केम्पेगौड़ा पार्क 58.00</strong>, <strong>AB-1 साउथ वेस्ट कॉर्नर 0.00</strong>, <strong>कोकिला सदन ईस्ट साइड 43.00</strong> और <strong>वेस्ट साइड 0.00</strong>। दो कुएँ पूरा दिन ढोएँ और बाकी शून्य पर रहें — यही वह पैटर्न है जो पंप के अधिक उपयोग से बिगड़ने से पहले जानना चाहिए।",
          voice: "केम्पेगौड़ा पार्क अट्ठावन और कोकिला सदन ईस्ट तैंतालीस पर पूरा दिन ढोते हैं जबकि बाकी शून्य पर — पंप बिगड़ने से पहले जानने लायक पैटर्न।",
        },
        {
          label: 'सम्प', title: 'हर सम्प ने कितना लिया',
          body: "<strong>UG सम्प इनपुट</strong> हर भूमिगत टैंक का इनटेक पढ़ता है: <strong>हेरिटेज टैंक 58.02 KL</strong>, <strong>32% नीचे</strong>; <strong>AB-1 सम्प टैंक 0</strong>; <strong>नॉर्थ ब्लॉक टैंक 144</strong>, <strong>40% नीचे</strong>; <strong>विनय सदन ईस्ट 75</strong>, <strong>26% नीचे</strong>; <strong>स्टाफ़ ईस्ट टैंक 14</strong>, <strong>83% नीचे</strong>। हर कार्ड पर पिछली अवधि से बदलाव है, इसलिए भरना बंद कर चुका टैंक अपने आप उभर आता है।",
          voice: "हर भूमिगत टैंक का इनटेक, साथ में बदलाव — हेरिटेज अट्ठावन, नॉर्थ ब्लॉक एक सौ चौवालीस, स्टाफ़ ईस्ट चौदह और तिरासी प्रतिशत नीचे।",
        },
        {
          label: 'शोधित', title: 'शोधित पानी, और उस पर के टूल',
          body: "<strong>STP ट्रीटेड वॉटर</strong> में <strong>टोटल फ़्लो इन ट्रीटेड वॉटर टैंक 201.32 KL</strong> है, तथा <strong>STP ट्रीटेड वॉटर-1</strong> <strong>172.32</strong> और <strong>-2</strong> <strong>92.76</strong> पर। किसी पर हॉवर कीजिए और टूलबार आता है — यहाँ <strong>एडिट विजेट</strong>, जिससे कार्ड का सेंसर, नाम, इकाई और सीमाएँ बदली जाती हैं, बिना कोई पेज दोबारा बनाए।",
          voice: "टैंक में दो सौ एक के एल शोधित पानी। किसी भी कार्ड पर एडिट विजेट — जिससे उसका सेंसर, नाम और सीमाएँ बदलती हैं, पेज दोबारा बनाए बिना।",
        },
        {
          label: 'फ़्लशिंग', title: 'शोधित पानी कहाँ जाता है',
          body: "<strong>STP ट्रीटेड वॉटर यूसेज (फ़्लशिंग सिस्टम)</strong> उसे इमारतों तक ले जाता है: <strong>टोटल वॉटर यूज़्ड इन फ़्लशिंग 89 KL</strong>, जिसमें <strong>विनय सदन 75</strong>, <strong>स्टाफ़ क्वार्टर 14</strong> और <strong>कोकिला सदन 0</strong>। फ़्लशिंग में दोबारा उपयोग हुआ शोधित पानी वह है जो कैंपस को खींचना नहीं पड़ा, और यही वह जगह है जहाँ यह बचत गिनी जाती है।",
          voice: "नवासी के एल शोधित पानी फ़्लशिंग में दोबारा उपयोग — पचहत्तर विनय सदन को, चौदह स्टाफ़ क्वार्टर को। यह पानी कैंपस को खींचना नहीं पड़ा।",
        },
        {
          label: 'संतुलन', title: 'आया, गया, और संतुलन',
          body: "<strong>STP ट्रीटेड वॉटर यूसेज (इरिगेशन सिस्टम)</strong> <strong>126 KL</strong> सिंचाई प्रवाह जोड़ता है, <strong>5% ऊपर</strong>। फिर <strong>इनपुट एंड बैलेंस</strong> दिन का हिसाब पूरा करता है: <strong>टैंकरों से 0.01</strong>, <strong>बोरवेल से 291.01</strong>, <strong>पाइपलाइन से 0</strong>, और <strong>टोटल इनलेट 291.02 KL</strong>। हर स्रोत एक पंक्ति में, इसलिए दिन के जल-संतुलन के लिए किसी स्प्रेडशीट की ज़रूरत नहीं।",
          voice: "सिंचाई एक सौ छब्बीस के एल और लेती है। इनपुट एंड बैलेंस दिन पूरा करता है — टैंकर, बोरवेल और पाइपलाइन मिलकर दो सौ इक्यानबे।",
        },
        {
          label: 'कस्टम', title: 'अपना विजेट बनाइए',
          body: "पेज स्थिर नहीं है। <strong>कस्टम विजेट</strong> जोड़कर उसे कैंपस के किसी भी सेंसर पर लगाया जा सकता है — यहाँ एक <strong>ओवरहेड टैंक AB-1</strong> लेवल सेंसर पर बनाया जा रहा है। कोई भी बदलाव नीचे <strong>सेव करंट व्यू</strong> पट्टी ले आता है: <strong>सेव</strong> उसे इसी पेज पर लिखता है, <strong>सेव ऐज़</strong> नया पेज बनाता है, <strong>कैंसिल</strong> हटा देता है।",
          voice: "कस्टम विजेट जोड़कर कैंपस के किसी भी सेंसर पर लगाया जा सकता है। फिर सेव करंट व्यू आपका बनाया पेज रख लेता है।",
        },
        {
          label: 'अलर्ट', title: 'डैशबोर्ड पर ही अलर्ट',
          body: "<strong>टिकट्स हिस्ट्री</strong> विजेट कैंपस के अपने निष्कर्ष डैशबोर्ड पर ही रखता है। ये डेटा से स्वतः उठते हैं, कोई टाइप नहीं करता: <em>“न्यू हेरिटेज टैंक से ओवरहेड टैंक AB का कोई पंप मैनुअल मोड में”</em>, <em>“बोरवेल 4 - कोकिला सदन वेस्ट साइड पंप मैनुअल मोड में”</em>, <em>“इनसाइड स्टाफ़ हॉस्टल स्तर 90% पहुँचा”</em> — हर एक अपने प्लांट, समय और <strong>टाइप व टैग्स</strong> कॉलम के साथ जो संबंधित टीमों का नाम लेता है।",
          voice: "टिकट्स हिस्ट्री विजेट कैंपस के अपने निष्कर्ष डैशबोर्ड पर रखता है — मैनुअल मोड में छूटे पंप, नब्बे प्रतिशत पार कर चुका हॉस्टल टैंक।",
        },
        {
          label: 'इन्वेंटरी', title: 'इन्वेंटरी, आपके स्टोर के लिए तैयार',
          body: "इस अकाउंट के लिए <strong>इन्वेंटरी</strong> जुड़ी हुई है पर अभी उसमें कोई वस्तु नहीं — वह <strong>नो इन्वेंटरी आइटम्स टू शो</strong> दिखाती है। कॉलम पहले से तैयार हैं: <strong>नेम</strong>, <strong>स्टोर नेम</strong>, <strong>कैटेगरी</strong>, <strong>स्टॉक अवेलेबल</strong>, <strong>लास्ट कंजम्पशन</strong>, और खपत की तुलना <strong>एक्चुअल</strong> बनाम <strong>एक्सपेक्टेड</strong> — वही कॉलम जो स्टोर सूची लोड होते ही बताएगा कि डोज़िंग भटक रही है या नहीं।",
          voice: "इन्वेंटरी जुड़ी है पर अभी खाली है। कॉलम तैयार हैं — स्टॉक, पिछली खपत, और एक्चुअल बनाम एक्सपेक्टेड, जैसे ही स्टोर सूची लोड हो।",
        },
        {
          label: 'टिकट', title: 'हर टिकट, गिना हुआ',
          body: "<strong>टिकट</strong> पेज गिनती से खुलता है: <strong>12 खुले</strong> — कोई क्रिटिकल नहीं, <strong>11 ओवरड्यू</strong>, <strong>11 एस्केलेटेड</strong> — और <strong>14 बंद</strong>, जिनमें <strong>10 ओवरड्यू</strong> और <strong>8 एस्केलेटेड</strong>। दाईं ओर वही कुल टीम के हिसाब से: खुला काम <strong>7 इलेक्ट्रिकल</strong>, <strong>2 प्रोसेस</strong> और <strong>1 एडमिन</strong> पर, बंद <strong>4 इलेक्ट्रिकल</strong> पर। बारह में ग्यारह ओवरड्यू — यही वह आँकड़ा है जिस पर कार्रवाई चाहिए।",
          voice: "बारह खुले टिकट और चौदह बंद, उनमें ग्यारह ओवरड्यू, और टीम के हिसाब से खुले सात इलेक्ट्रिकल पर।",
        },
        {
          label: 'विवरण', title: 'टैग, समय, श्रेणी',
          body: "हर पंक्ति सरल शब्दों में एक निष्कर्ष है: <em>“इनसाइड न्यू हेरिटेज टैंक लेवल ट्रांसमीटर के अनुसार 90% पहुँच गया”</em>, <em>“बोरवेल 12 - NBH नॉर्थ साइड पंप मैनुअल मोड में”</em>, <em>“बोरवेल 7 - पार्किंग बोरवेल-1 (opp MG) पंप मैनुअल मोड में”</em>। बाकी टैग बताते हैं — <strong>नॉर्मल</strong>, <strong>ऑटोमैटिक</strong>, <strong>ओवरड्यू</strong>, <strong>एस्केलेशन लेवल 3</strong>, <strong>वेरिफ़ाइड</strong> — साथ में <strong>क्रिएटेड ऐट</strong> समय और <strong>कैटेगरी</strong> जो <strong>इलेक्ट्रिकल</strong>, <strong>मैकेनिकल</strong> या <strong>सिस्टम</strong> बताती है।",
          voice: "हर टिकट सरल शब्दों में एक निष्कर्ष है — ऑटोमैटिक या मैनुअल, ओवरड्यू, एस्केलेटेड या वेरिफ़ाइड, समय और संबंधित टीमों के साथ।",
        },
        {
          label: 'नया टिकट', title: 'खुद भी उठाइए',
          body: "<strong>क्रिएट न्यू टिकट</strong> मैनुअल रास्ता है: एक <strong>प्रॉब्लम स्टेटमेंट</strong>, वैकल्पिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>इक्विपमेंट</strong> और एक <strong>इशू टाइप</strong>। इसी कारण पंक्तियों पर <strong>ऑटोमैटिक</strong> या <strong>मैनुअल</strong> टैग लगता है — अधिकतर सिस्टम डेटा से उठाता है, बाकी आपकी टीम।",
          voice: "क्रिएट न्यू टिकट में प्रॉब्लम स्टेटमेंट, इक्विपमेंट और इशू टाइप भरते हैं — इसीलिए हर टिकट ऑटोमैटिक या मैनुअल टैग रखता है।",
        },
        {
          label: 'लाइव', title: 'पूरा कैंपस, लाइव',
          body: "<strong>विज़ुअलाइज़ेशन</strong> कैंपस को एक ही डायग्राम में खोलता है, <strong>LIVE</strong> बैज और आख़िरी रीडिंग के समय के साथ। हर बोरवेल, सम्प, ओवरहेड टैंक और इमारत वहीं बनी है जहाँ वह वास्तव में है — बाईं ओर <strong>AB-1 फ़ैशन स्ट्रीट</strong>, <strong>केम्पेगौड़ा पार्क</strong>, <strong>नियरबाय NBH पोर्टिको</strong> और <strong>NBH नॉर्थ साइड</strong>, बीच में ओवरहेड टैंक, दाईं ओर <strong>विनय सदन</strong> व <strong>कोकिला सदन</strong>, और नीचे <strong>STP ट्रीटेड वॉटर</strong>।",
          voice: "विज़ुअलाइज़ेशन पूरे कैंपस को एक लाइव डायग्राम में खोलता है — हर बोरवेल, सम्प, ओवरहेड टैंक और इमारत अपनी असली जगह पर।",
        },
        {
          label: 'ज़ूम', title: 'एक पंप तक',
          body: "ज़ूम कीजिए और हर इकाई अपनी लाइव स्थिति दिखाती है। हर पंप पर रंगीन निशान, हर टैंक अपने असली स्तर तक भरा और बगल में <strong>लेवल</strong> गेज, और हर लाइन पर उसका <strong>Flow{KL/hr}</strong> पाठ — विनय सदन वेस्ट लाइन पर <strong>5.8</strong> जबकि बाकी <strong>0.00</strong>। ऊपर <strong>ग्रुप कंट्रोल</strong>, <strong>यूनिट प्रोसेसेज़</strong> और <strong>सिलेक्ट पेज</strong>, और घड़ी व प्ले कंट्रोल पुराना समय दोबारा चलाते हैं।",
          voice: "ज़ूम करने पर हर पंप अपनी स्थिति दिखाता है, हर टैंक असली स्तर तक भरा है, और हर लाइन पर उसका अपना फ़्लो पाठ।",
        },
        {
          label: 'प्रवाह', title: 'हर बिंदु पर प्रवाह',
          body: "<strong>गीतम यूनिवर्सिटी एनालिटिक्स</strong> नेटवर्क को सवाल के हिसाब से बाँटता है। <strong>फ़्लो ऐट ईच पॉइंट</strong> में हर कुएँ का <strong>बोरवेल फ़्लो</strong> है — <strong>केम्पेगौड़ा पार्क 77.00</strong>, <strong>पार्किंग बोरवेल-1 100.00</strong>, <strong>विनय सदन वेस्ट 36.00</strong> — साथ में <strong>टैंकर फ़्लो</strong>, <strong>पाइपलाइन फ़्लो</strong>, और <strong>फ़्लो फ़्रॉम सम्प/टैंक टू OHT</strong>, जिसमें <strong>AB-1 सम्प टैंक से वेस्ट विनय सदन 69.00</strong>। किसी चार्ट पर हॉवर कीजिए और वह सीरीज़, अवधि और एग्रीगेशन बता देता है।",
          voice: "एनालिटिक्स नेटवर्क को सवाल के हिसाब से बाँटता है। हर बिंदु पर प्रवाह — हर बोरवेल, टैंकर, पाइपलाइन, और सम्प से ओवरहेड टैंक तक।",
        },
        {
          label: 'स्तर', title: 'हर टैंक का स्तर',
          body: "<strong>लेवल ऑफ़ ईच टैंक</strong> दिन भर के तीन चार्ट चलाता है। <strong>सम्प लेवल</strong> न्यू हेरिटेज, सम्प टैंक-1, स्टाफ़ ईस्ट, WTP कलेक्शन, NBH(N) और विनय सदन ईस्ट टैंकों को <strong>89.02</strong> से <strong>15.64</strong> के बीच समाप्त करता है। <strong>ओवर हेड टैंक लेवल्स</strong> छह AB टैंकों को <strong>74.84</strong> और <strong>66.69</strong> के बीच रखता है, और <strong>हॉस्टल्स टैंक लेवल्स</strong> विनय सदन, कोकिला सदन, स्टाफ़ क्वार्टर, बॉयज़ व स्टाफ़ हॉस्टल को दिखाता है।",
          voice: "दिन भर के तीन चार्ट — सम्प स्तर, ओवरहेड टैंक स्तर, और हॉस्टल टैंक स्तर, हर सीरीज़ अपने पाठ पर समाप्त।",
        },
        {
          label: 'ऑटोमेशन', title: 'ऑटो, मैनुअल, या ट्रिप',
          body: "<strong>ऑटोमेशन स्टेटस</strong> उन अधिकतर टिकटों के पीछे का सवाल हल करता है। <strong>पंप ONOFF स्टेटस</strong> बताता है क्या चल रहा है; <strong>बोरवेल पंप ऑटोमेशन स्टेटस</strong> और <strong>पंप ऑटोमेशन स्टेटस</strong> बताते हैं क्या ऑटो में है — <strong>फ़ैशन स्ट्रीट</strong>, <strong>केम्पेगौड़ा पार्क</strong> और <strong>पार्किंग बोरवेल-1</strong> <strong>1.00</strong> पर, बाकी <strong>0.00</strong> पर, यानी मैनुअल-मोड अलर्ट अपने कच्चे रूप में। <strong>ट्रिप स्टेटस</strong> पूरे समय <strong>0.00</strong> पर रहता है।",
          voice: "ऑटोमेशन स्टेटस उन टिकटों का सवाल हल करता है — कौन-से पंप चल रहे हैं, कौन ऑटो में हैं, कौन नहीं। ट्रिप स्टेटस शून्य पर रहता है।",
        },
        {
          label: 'सारांश', title: 'पूरा कैंपस एक पैनल में',
          body: "<strong>प्लांट समरी</strong> पूरे नेटवर्क को रंग-कोडित टाइलों में रखता है, हर एक पर उसका सेंसर टैग और <strong>info</strong> नोट: <strong>टोटल वॉटर रिसीव्ड 428.04 KLD</strong> बनाम <strong>टोटल वॉटर सप्लाइड 425.38</strong> और <strong>बैलेंस वॉटर 2.66</strong>, फिर हर टैंक का इनटेक — <strong>NBH(N) 215.00</strong>, <strong>हेरिटेज 77.04</strong>, <strong>स्टाफ़ ईस्ट 36.00</strong>, <strong>विनय सदन ईस्ट 100.00</strong> — और बगल में हर इमारत में गया प्रवाह।",
          voice: "प्लांट समरी पूरे नेटवर्क को टाइलों में रखता है — चार सौ अट्ठाईस प्राप्त, चार सौ पच्चीस आपूर्ति, और दो दशमलव छह छह का संतुलन।",
        },
        {
          label: 'निष्कर्ष', title: 'किस काम के लिए कौन-सा पेज',
          body: "तो: दिन के लिए <strong>डैशबोर्ड</strong> — हर इमारत, टैंक, बोरवेल और शोधित पानी एक ही स्क्रॉल में, सवाल के अनुसार जिस पेज पर ठीक लगे, और कोई अवधि माँगे तो <strong>डेली</strong>, <strong>वीकली</strong> व <strong>मंथली रिपोर्ट</strong> पेज। नेटवर्क खुद जो संकेत दे उसके लिए <strong>टिकट</strong>। किसी आँकड़े के पीछे के प्रवाह, स्तर और ऑटोमेशन के लिए <strong>एनालिटिक्स</strong>। कैंपस चलता देखना हो तो <strong>विज़ुअलाइज़ेशन</strong>।",
          voice: "दिन के लिए डैशबोर्ड, अवधि के लिए रिपोर्ट पेज, संकेतों के लिए टिकट, विस्तार के लिए एनालिटिक्स, और देखने के लिए विज़ुअलाइज़ेशन।",
        },
      ],
    },
    ta: {
      title: 'கீதம் பல்கலைக்கழகம்,<br><em>போர்வெல் முதல் கட்டிடம் வரை, முழு வளாகம்.</em>',
      subtitle:
        'உங்கள் தளத்தின் விரிவான சுற்றுப்பயணம் — டாஷ்போர்டு பக்கம் பக்கமாக, வலையமைப்பே எழுப்பும் டிக்கெட்டுகள், மற்றும் முழு வளாகமும் ஒரே நேரலை வரைபடமாக.',
      chapter: 'டெமோ · கீதம் பல்கலைக்கழகம்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, எல்லாத் திரைகளும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது; உங்கள் ஒவ்வொரு திரையும் அங்கே: <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>டிக்கெட்ஸ்</strong>, பிறகு <strong>கீதம் யுனிவர்சிட்டி</strong> — அனலிட்டிக்ஸ் பக்கங்களுக்கு விரிகிறது — மற்றும் வளாகத்தின் நேரலை வரைபடமான <strong>விஷுவலைசேஷன்</strong>. மேலுள்ள <strong>தேடல்</strong> பெட்டி எதற்கும் நேரடியாகக் கொண்டு செல்லும்.",
          voice: "எல்லாம் இந்த மெனுவில் இருந்தே — டாஷ்போர்டு, இன்வென்டரி, டிக்கெட்ஸ், கீதத்தின் அனலிட்டிக்ஸ், மற்றும் நேரலை வரைபடத்துக்கு விஷுவலைசேஷன்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "டாஷ்போர்டில் உள்ள அனைத்தும் மூன்று கட்டுப்பாடுகளால் இயங்குகின்றன: இடதுபுறம் <strong>பேஜ்</strong> தேர்வி, <strong>கிரானுலாரிட்டி</strong>, மற்றும் <strong>ஃப்ரம்</strong>–<strong>டு</strong> வரம்பு. வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong>, அமைப்புகளுக்கு <strong>கியர்</strong>, தளவமைப்பை நிர்வகிக்கும் <strong>கிரிட்</strong>, ஒரு <strong>பகிர்வு</strong> அம்பு — அனலிட்டிக்ஸ் பக்கங்களில் AI இன்சைட்டுக்கு ஒரு <strong>ஸ்பார்க்கிள்</strong>.",
          voice: "பேஜ் தேர்வி, கிரானுலாரிட்டி, கால வரம்பு — இவை கீழுள்ள ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன.",
        },
        {
          label: 'கட்டிடங்கள்', title: 'ஒவ்வொரு கட்டிடத்துக்கும் சென்ற நீர்',
          body: "<strong>வாட்டர் சப்ளைடு டு இன்டிவிஜுவல் பில்டிங்</strong> வளாகத்தை ஒரே வரிசையில் வைக்கிறது: <strong>மொத்த வழங்கல் 426.39 KL</strong>, பிறகு <strong>வினய் சதன் 69</strong>, <strong>நார்த் பிளாக் ஓவர்ஹெட் 218</strong>, <strong>ஸ்டாஃப் குவார்ட்டர் 117</strong>, <strong>கோகிலா சதன் 0</strong>, கீழே <strong>ஓவர்ஹெட் AB-2 21.39</strong>, <strong>AB-1 1</strong>, <strong>மொத்த போர்வெல் ஓட்டம் 428.02</strong>. ஒவ்வொரு அட்டையும் தன் காலத்தையும் முந்தைய காலத்துடனான மாற்றத்தையும் சுமக்கிறது.",
          voice: "மொத்தம் நானூற்று இருபத்தாறு கே எல் வழங்கல், கட்டிட வாரியாக — வினய் சதன் அறுபத்தொன்பது, நார்த் பிளாக் இருநூற்று பதினெட்டு.",
        },
        {
          label: 'பக்கங்கள்', title: 'பக்கங்கள், அறிக்கைப் பக்கங்கள்',
          body: "<strong>பேஜ்</strong> மெனுவில் ஒன்றுக்கு மேற்பட்ட டாஷ்போர்டு உள்ளது. <strong>யூனிஃபைட் டாஷ்போர்டு</strong>, <strong>போர்வெல் ஃப்ளோ டேட்டா</strong>, <strong>ஓவர்ஹெட் டேங்க் (டெய்லி)</strong>, <strong>அனாலிசிஸ்</strong> — ஒவ்வொன்றும் அதே வளாகத்தை வேறு கேள்விக்காக அமைக்கிறது — சிலவற்றின் அருகிலுள்ள அம்பு அவற்றின் அறிக்கைப் பக்கங்களைத் திறக்கிறது: <strong>GITAM டெய்லி</strong>, <strong>வீக்லி</strong>, <strong>மந்த்லி ரிப்போர்ட்</strong>. கால சுருக்கம் என்பது தட்டச்சும் தேதி அல்ல, திறக்கும் பக்கம்.",
          voice: "பேஜ் மெனுவில் பல டாஷ்போர்டுகள், அருகிலுள்ள அம்பு அறிக்கைப் பக்கங்களைத் திறக்கிறது — டெய்லி, வீக்லி, மந்த்லி.",
        },
        {
          label: 'வரம்பு', title: 'ஒரு காலத்தைத் தேர்வு செய்யுங்கள்',
          body: "வரம்பைச் சொடுக்கினால் தேர்வி திறக்கிறது: <strong>டுடே</strong>, <strong>யெஸ்டர்டே</strong>, <strong>லாஸ்ட் 24 அவர்ஸ்</strong>, மூன்று, ஏழு, பத்து, முப்பது நாட்கள், <strong>3</strong> அல்லது <strong>6 மாதங்கள்</strong>, அல்லது <strong>கஸ்டம்</strong>. <strong>கிரானுலாரிட்டி</strong> நீங்கள் தேர்ந்ததைப் பின்தொடர்கிறது — ஒரு மாதத்துக்கு <strong>நாட்கள்</strong>, <strong>வாரங்கள்</strong> — <strong>டைம் ஃபார்மேட்</strong> <strong>12</strong>, <strong>24 மணி</strong> இடையே மாறுகிறது, <strong>ஸ்மார்ட் அவர்ஸ்</strong> ஒரே நாளாந்திர நேரப் பகுதியை ஒவ்வொரு தேதிக்கும் பொருத்துகிறது.",
          voice: "இன்று முதல் ஆறு மாதம் வரை முன்னமைவுகள். கிரானுலாரிட்டி காலத்தைப் பின்தொடரும், ஸ்மார்ட் அவர்ஸ் ஒரே நாளாந்திர பகுதியை மீண்டும் பொருத்தும்.",
        },
        {
          label: 'மாதம்', title: 'அதே பக்கம், ஒரு மாதத்தில்',
          body: "<strong>நாட்கள்</strong> மற்றும் <strong>கடந்த 30 நாட்கள்</strong> என அமைத்தால் வேறெதுவும் மாறாமல் ஒவ்வொரு அட்டையும் மீண்டும் கணக்கிடுகிறது: <strong>மொத்த வழங்கல் 15599.79 KL</strong>, <strong>வினய் சதன் 4485</strong>, <strong>நார்த் பிளாக் 5581</strong>, <strong>ஸ்டாஃப் குவார்ட்டர் 3545</strong>, <strong>கோகிலா சதன் 6</strong>, உடன் <strong>ஓவர்ஹெட் AB-2 1264.79</strong>, <strong>AB-1 718</strong>, <strong>மொத்த போர்வெல் ஓட்டம் 13558.03</strong>.",
          voice: "முப்பது நாட்களில் அதே அட்டைகள் பதினைந்தாயிரத்து அறுநூறு கே எல் வழங்கலையும், பதின்மூன்றரை ஆயிரம் போர்வெல் ஓட்டத்தையும் படிக்கின்றன.",
        },
        {
          label: 'போர்வெல்', title: 'ஒவ்வொரு போர்வெல்லும், மூலமும் நாளாந்திரமும்',
          body: "<strong>போர்வெல் ஃப்ளோ டேட்டா</strong> மீட்டர்களை அருகருகே வைக்கிறது. <strong>போர்வெல் ரா டேட்டா</strong> ஓடும் டோட்டலைசர் அளவீடுகளைச் சுமக்கிறது — <strong>AB-1 ஃபேஷன் ஸ்ட்ரீட் 16.88</strong>, <strong>கெம்பேகௌடா பார்க் 39710</strong>, <strong>AB-1 சவுத் வெஸ்ட் கார்னர் 65535</strong> — <strong>போர்வெல் ஃப்ளோ (நாளொன்றுக்கு KL)</strong> அதே மீட்டர்களை நாளாந்திர அளவாக வைக்கிறது. ஒவ்வொரு போர்வெல்லுக்கும் தனி வரைபடம் உண்டு.",
          voice: "இடதுபுறம் மூல டோட்டலைசர் அளவீடுகள், அருகில் அதே மீட்டர்கள் நாளாந்திர அளவாக, ஒவ்வொன்றுக்கும் தனி வரைபடம்.",
        },
        {
          label: 'தொட்டிகள்', title: 'தொட்டி வாரியாக, நாள் வாரியாக',
          body: "<strong>ஓவர்ஹெட் டேங்க் (டெய்லி)</strong> ஒவ்வொரு தொட்டிக்கும் தனி வரைபடம் தருகிறது: <strong>AB-1 ஓவர்ஹெட் டேங்க்-1</strong>, <strong>-2</strong>, <strong>AB-2 ஓவர்ஹெட் டேங்க்-1</strong> <strong>16</strong>, <strong>-2</strong> <strong>5.38</strong>, பிறகு <strong>NBH(N) சம்ப் டேங்க்கள்</strong>, <strong>வினய் சதன்</strong>, <strong>கோகிலா சதன்</strong> ஃப்ளோமீட்டர்கள். ஒவ்வொரு தொட்டியும் ஒரே பக்கத்தில், அனைத்தும் ஒரே கால அச்சில்.",
          voice: "ஒவ்வொரு ஓவர்ஹெட் தொட்டிக்கும் தனி வரைபடம், அனைத்தும் ஒரே கால அச்சில் — எது நிரம்பியது, எது இல்லை எனத் தெரியும்.",
        },
        {
          label: 'பதிவிறக்கம்', title: 'அட்டவணையை எடுத்துச் செல்லுங்கள்',
          body: "ஒவ்வொரு விட்ஜெட்டிலும் அதே கருவிகள்: <strong>டவுன்லோட் CSV</strong>, <strong>எக்ஸ்பாண்டட் வியூ</strong>, வரைபட வகை மெனு, <strong>எடிட் விட்ஜெட்</strong>, <strong>info</strong>. இங்கே <strong>வாட்டர் அவைலபிள் இன் அண்டர்கிரவுண்ட் டேங்க்ஸ்</strong>-இல் <strong>ஹெரிட்டேஜ் ஏரியா 249.18</strong>, <strong>நார்த் பிளாக் 231.82</strong>, <strong>AB-1 கார்னர் சம்ப் 0.00</strong>, <strong>ஸ்டாஃப் குவார்ட்டர்ஸ் ஈஸ்ட் 682.28</strong> — CSV மேலே அமைத்த வரம்புக்கே இறங்கும்.",
          voice: "எந்த விட்ஜெட்டிலும் பதிவிறக்கம், விரிவாக்கம், வரைபட வகை, திருத்தம். CSV மேலே அமைத்த வரம்புக்கே இறங்கும் — மாத அறிக்கை இரண்டு சொடுக்கில்.",
        },
        {
          label: 'இறைத்தல்', title: 'உண்மையில் எந்த போர்வெல் இயங்குகிறது',
          body: "<strong>இன்டிவிஜுவல் போர்வெல்</strong> ஒவ்வொரு கிணற்றின் நாள் ஓட்டத்தைப் பட்டியலிடுகிறது: <strong>AB-1 ஃபேஷன் ஸ்ட்ரீட் 0.01</strong>, <strong>கெம்பேகௌடா பார்க் 58.00</strong>, <strong>AB-1 சவுத் வெஸ்ட் 0.00</strong>, <strong>கோகிலா சதன் ஈஸ்ட் 43.00</strong>, <strong>வெஸ்ட் 0.00</strong>. இரு கிணறுகள் நாளைச் சுமக்க மற்றவை பூஜ்ஜியத்தில் இருப்பது — ஒரு பம்ப் அதிகப் பயன்பாட்டால் செயலிழப்பதற்கு முன் அறிய வேண்டிய வடிவம்.",
          voice: "கெம்பேகௌடா பார்க் ஐம்பத்தெட்டு, கோகிலா சதன் ஈஸ்ட் நாற்பத்து மூன்று நாளைச் சுமக்க மற்றவை பூஜ்ஜியத்தில்.",
        },
        {
          label: 'சம்ப்', title: 'ஒவ்வொரு சம்ப்பும் எவ்வளவு எடுத்தது',
          body: "<strong>UG சம்ப் இன்புட்</strong> ஒவ்வொரு நிலத்தடித் தொட்டியின் உள்வரவைப் படிக்கிறது: <strong>ஹெரிட்டேஜ் டேங்க் 58.02 KL</strong>, <strong>32% குறைவு</strong>; <strong>AB-1 சம்ப் 0</strong>; <strong>நார்த் பிளாக் 144</strong>, <strong>40% குறைவு</strong>; <strong>வினய் சதன் ஈஸ்ட் 75</strong>, <strong>26% குறைவு</strong>; <strong>ஸ்டாஃப் ஈஸ்ட் 14</strong>, <strong>83% குறைவு</strong>. ஒவ்வொரு அட்டையிலும் முந்தைய காலத்துடனான மாற்றம் உள்ளது.",
          voice: "ஒவ்வொரு நிலத்தடித் தொட்டியின் உள்வரவும், அதன் மாற்றமும் — ஹெரிட்டேஜ் ஐம்பத்தெட்டு, நார்த் பிளாக் நூற்று நாற்பத்து நான்கு.",
        },
        {
          label: 'சுத்திகரிப்பு', title: 'சுத்திகரித்த நீர், அதன் கருவிகள்',
          body: "<strong>STP ட்ரீட்டட் வாட்டர்</strong>-இல் <strong>டோட்டல் ஃப்ளோ இன் ட்ரீட்டட் வாட்டர் டேங்க் 201.32 KL</strong>, <strong>STP ட்ரீட்டட் வாட்டர்-1</strong> <strong>172.32</strong>, <strong>-2</strong> <strong>92.76</strong>. எதிலும் ஹோவர் செய்தால் கருவிப்பட்டை தோன்றும் — இங்கே <strong>எடிட் விட்ஜெட்</strong>, ஒரு அட்டையின் சென்சார், பெயர், அலகு, வரம்புகளை பக்கத்தை மீண்டும் கட்டாமல் மாற்றும் வழி.",
          voice: "தொட்டியில் இருநூற்று ஒன்று கே எல் சுத்திகரித்த நீர். எடிட் விட்ஜெட் மூலம் சென்சார், பெயர், வரம்புகளை மாற்றலாம்.",
        },
        {
          label: 'ஃப்ளஷிங்', title: 'சுத்திகரித்த நீர் எங்கே செல்கிறது',
          body: "<strong>STP ட்ரீட்டட் வாட்டர் யூசேஜ் (ஃப்ளஷிங் சிஸ்டம்)</strong> அதைக் கட்டிடங்களுக்குப் பின்தொடர்கிறது: <strong>மொத்த ஃப்ளஷிங் பயன்பாடு 89 KL</strong>, <strong>வினய் சதன் 75</strong>, <strong>ஸ்டாஃப் குவார்ட்டர் 14</strong>, <strong>கோகிலா சதன் 0</strong>. ஃப்ளஷிங்குக்கு மீண்டும் பயன்படுத்திய சுத்திகரித்த நீர் என்பது வளாகம் இறைக்க வேண்டியிராத நீர்.",
          voice: "எண்பத்தொன்பது கே எல் சுத்திகரித்த நீர் ஃப்ளஷிங்குக்கு மீண்டும் பயன்பாடு — வளாகம் இறைக்க வேண்டியிராத நீர்.",
        },
        {
          label: 'சமநிலை', title: 'வந்தது, சென்றது, சமநிலை',
          body: "<strong>STP ட்ரீட்டட் வாட்டர் யூசேஜ் (இரிகேஷன் சிஸ்டம்)</strong> மேலும் <strong>126 KL</strong> பாசன ஓட்டத்தைச் சேர்க்கிறது, <strong>5% அதிகம்</strong>. பிறகு <strong>இன்புட் & பேலன்ஸ்</strong> நாளை முடிக்கிறது: <strong>டேங்கர்களிலிருந்து 0.01</strong>, <strong>போர்வெல்லிலிருந்து 291.01</strong>, <strong>பைப்லைனிலிருந்து 0</strong>, <strong>மொத்த உள்வரவு 291.02 KL</strong>.",
          voice: "பாசனம் மேலும் நூற்று இருபத்தாறு கே எல். இன்புட் அண்ட் பேலன்ஸ் நாளை முடிக்கிறது — மொத்த உள்வரவு இருநூற்று தொண்ணூற்றொன்று.",
        },
        {
          label: 'கஸ்டம்', title: 'உங்கள் சொந்த விட்ஜெட்',
          body: "பக்கம் நிலையானது அல்ல. ஒரு <strong>கஸ்டம் விட்ஜெட்</strong> சேர்த்து வளாகத்தின் எந்த சென்சாரிலும் சுட்டலாம் — இங்கே ஒன்று <strong>ஓவர்ஹெட் டேங்க் AB-1</strong> நிலை சென்சாருக்கு எதிராகக் கட்டப்படுகிறது. நீங்கள் மாற்றும் எதுவும் கீழே <strong>சேவ் கரண்ட் வியூ</strong> பட்டையைக் கொண்டுவரும்: <strong>சேவ்</strong> இப்பக்கத்தில் எழுதும், <strong>சேவ் ஆஸ்</strong> புதிய பக்கமாக வைக்கும்.",
          voice: "ஒரு கஸ்டம் விட்ஜெட் சேர்த்து எந்த சென்சாரிலும் சுட்டலாம். சேவ் கரண்ட் வியூ நீங்கள் கட்டிய பக்கத்தை வைத்திருக்கும்.",
        },
        {
          label: 'எச்சரிக்கை', title: 'டாஷ்போர்டிலேயே எச்சரிக்கைகள்',
          body: "<strong>டிக்கெட்ஸ் ஹிஸ்டரி</strong> விட்ஜெட் வளாகத்தின் சொந்தக் கண்டறிதல்களை டாஷ்போர்டிலேயே வைக்கிறது. இவை தரவிலிருந்து தானாக எழுபவை: <em>“நியூ ஹெரிட்டேஜ் டேங்க் முதல் ஓவர்ஹெட் டேங்க் AB வரையிலான ஏதேனும் பம்ப் மேனுவல் மோடில்”</em>, <em>“போர்வெல் 4 - கோகிலா சதன் வெஸ்ட் சைட் பம்ப் மேனுவல் மோடில்”</em>, <em>“இன்சைட் ஸ்டாஃப் ஹாஸ்டல் அளவு 90% எட்டியது”</em>.",
          voice: "டிக்கெட்ஸ் ஹிஸ்டரி விட்ஜெட் வளாகத்தின் கண்டறிதல்களை டாஷ்போர்டில் வைக்கிறது — மேனுவல் மோடில் விடப்பட்ட பம்ப்கள், தொண்ணூறு சதவீதம் எட்டிய தொட்டி.",
        },
        {
          label: 'இருப்பு', title: 'இன்வென்டரி, உங்கள் ஸ்டோருக்குத் தயார்',
          body: "இந்தக் கணக்குக்கு <strong>இன்வென்டரி</strong> இணைக்கப்பட்டுள்ளது, ஆனால் இன்னும் பொருட்கள் இல்லை — <strong>No inventory items to show</strong> எனக் காட்டுகிறது. நெடுவரிசைகள் தயாராக உள்ளன: <strong>நேம்</strong>, <strong>ஸ்டோர் நேம்</strong>, <strong>கேட்டகரி</strong>, <strong>ஸ்டாக் அவைலபிள்</strong>, <strong>லாஸ்ட் கன்சம்ப்ஷன்</strong>, நுகர்வு <strong>ஆக்சுவல்</strong> எதிராக <strong>எக்ஸ்பெக்டட்</strong>.",
          voice: "இன்வென்டரி இணைக்கப்பட்டுள்ளது ஆனால் இன்னும் காலியாக உள்ளது. நெடுவரிசைகள் தயார் — இருப்பு, கடைசி நுகர்வு, ஆக்சுவல் எதிராக எக்ஸ்பெக்டட்.",
        },
        {
          label: 'டிக்கெட்', title: 'ஒவ்வொரு டிக்கெட்டும் எண்ணப்பட்டது',
          body: "<strong>டிக்கெட்ஸ்</strong> பக்கம் எண்ணிக்கையுடன் திறக்கிறது: <strong>12 திறந்தவை</strong> — எதுவும் கிரிட்டிகல் இல்லை, <strong>11 ஓவர்டியூ</strong>, <strong>11 எஸ்கலேட்டட்</strong> — <strong>14 மூடப்பட்டவை</strong>, அவற்றில் <strong>10 ஓவர்டியூ</strong>, <strong>8 எஸ்கலேட்டட்</strong>. வலதுபுறம் குழுவாரியாக: திறந்த வேலை <strong>7 எலக்ட்ரிக்கல்</strong>, <strong>2 ப்ராசஸ்</strong>, <strong>1 அட்மின்</strong>.",
          voice: "பன்னிரண்டு திறந்த டிக்கெட்டுகள், பதினான்கு மூடப்பட்டவை, பதினொன்று ஓவர்டியூ, திறந்தவற்றில் ஏழு எலக்ட்ரிக்கலில்.",
        },
        {
          label: 'விவரம்', title: 'குறிச்சொல், நேரம், வகை',
          body: "ஒவ்வொரு வரிசையும் எளிய சொற்களில் ஒரு கண்டறிதல்: <em>“இன்சைட் நியூ ஹெரிட்டேஜ் டேங்க் 90% எட்டியது”</em>, <em>“போர்வெல் 12 - NBH நார்த் சைட் பம்ப் மேனுவல் மோடில்”</em>, <em>“போர்வெல் 7 - பார்க்கிங் போர்வெல்-1 பம்ப் மேனுவல் மோடில்”</em>. குறிச்சொற்கள் மீதியைச் சொல்கின்றன — <strong>நார்மல்</strong>, <strong>ஆட்டோமேட்டிக்</strong>, <strong>ஓவர்டியூ</strong>, <strong>எஸ்கலேஷன் லெவல் 3</strong>, <strong>வெரிஃபைடு</strong>.",
          voice: "ஒவ்வொரு டிக்கெட்டும் எளிய சொற்களில், ஆட்டோமேட்டிக் அல்லது மேனுவல், ஓவர்டியூ, எஸ்கலேட்டட் அல்லது வெரிஃபைடு எனக் குறிக்கப்பட்டு.",
        },
        {
          label: 'உருவாக்கு', title: 'நீங்களே ஒன்றை எழுப்புங்கள்',
          body: "<strong>க்ரியேட் நியூ டிக்கெட்</strong> கைமுறை வழி: ஒரு <strong>ப்ராப்ளம் ஸ்டேட்மென்ட்</strong>, விருப்பமான <strong>டெஸ்கிரிப்ஷன்</strong>, தொடர்புடைய <strong>இக்விப்மென்ட்</strong>, ஒரு <strong>இஷ்யூ டைப்</strong>. அதனால்தான் வரிசைகளில் <strong>ஆட்டோமேட்டிக்</strong> அல்லது <strong>மேனுவல்</strong> குறிச்சொல்.",
          voice: "க்ரியேட் நியூ டிக்கெட் ப்ராப்ளம் ஸ்டேட்மென்ட், இக்விப்மென்ட், இஷ்யூ டைப் கேட்கிறது — அதனால்தான் ஒவ்வொன்றும் ஆட்டோமேட்டிக் அல்லது மேனுவல்.",
        },
        {
          label: 'நேரலை', title: 'முழு வளாகமும், நேரலையில்',
          body: "<strong>விஷுவலைசேஷன்</strong> வளாகத்தை ஒரே வரைபடமாகத் திறக்கிறது, <strong>LIVE</strong> பேட்ஜுடன். ஒவ்வொரு போர்வெல், சம்ப், ஓவர்ஹெட் தொட்டி, கட்டிடமும் உண்மையான இடத்திலேயே வரையப்பட்டுள்ளன — இடதுபுறம் <strong>AB-1 ஃபேஷன் ஸ்ட்ரீட்</strong>, <strong>கெம்பேகௌடா பார்க்</strong>, <strong>NBH போர்ட்டிகோ</strong>, <strong>NBH நார்த் சைட்</strong>, நடுவில் ஓவர்ஹெட் தொட்டிகள், வலதுபுறம் <strong>வினய் சதன்</strong>, <strong>கோகிலா சதன்</strong>, கீழே <strong>STP ட்ரீட்டட் வாட்டர்</strong>.",
          voice: "விஷுவலைசேஷன் முழு வளாகத்தையும் ஒரே நேரலை வரைபடமாகத் திறக்கிறது — ஒவ்வொன்றும் உண்மையான இடத்தில்.",
        },
        {
          label: 'பெரிதாக்கல்', title: 'ஒரு பம்ப் வரை',
          body: "பெரிதாக்கினால் ஒவ்வொரு அலகும் தன் நேரலை நிலையைக் காட்டும். ஒவ்வொரு பம்பிலும் வண்ணக் குறி, ஒவ்வொரு தொட்டியும் உண்மையான அளவுக்கு நிரம்பி அருகில் <strong>லெவல்</strong> கேஜ், ஒவ்வொரு கோட்டிலும் <strong>Flow{KL/hr}</strong> — வினய் சதன் வெஸ்ட் கோட்டில் <strong>5.8</strong>, மற்றவை <strong>0.00</strong>. மேலே <strong>க்ரூப் கன்ட்ரோல்</strong>, <strong>யூனிட் ப்ராசஸஸ்</strong>, <strong>செலக்ட் பேஜ்</strong>.",
          voice: "பெரிதாக்கினால் ஒவ்வொரு பம்பும் தன் நிலையை, ஒவ்வொரு தொட்டியும் உண்மையான அளவை, ஒவ்வொரு கோடும் தன் ஓட்டத்தைக் காட்டும்.",
        },
        {
          label: 'ஓட்டம்', title: 'ஒவ்வொரு புள்ளியிலும் ஓட்டம்',
          body: "<strong>கீதம் யுனிவர்சிட்டி அனலிட்டிக்ஸ்</strong> வலையமைப்பைக் கேள்வி வாரியாகத் தொகுக்கிறது. <strong>ஃப்ளோ அட் ஈச் பாயிண்ட்</strong>-இல் ஒவ்வொரு கிணற்றின் <strong>போர்வெல் ஓட்டம்</strong> — <strong>கெம்பேகௌடா பார்க் 77.00</strong>, <strong>பார்க்கிங் போர்வெல்-1 100.00</strong>, <strong>வினய் சதன் வெஸ்ட் 36.00</strong> — உடன் <strong>டேங்கர் ஓட்டம்</strong>, <strong>பைப்லைன் ஓட்டம்</strong>, <strong>சம்ப்/தொட்டியிலிருந்து OHT-க்கு ஓட்டம்</strong>.",
          voice: "அனலிட்டிக்ஸ் வலையமைப்பைக் கேள்வி வாரியாகப் பிரிக்கிறது — ஒவ்வொரு போர்வெல், டேங்கர், பைப்லைன், சம்ப் முதல் ஓவர்ஹெட் தொட்டி வரை.",
        },
        {
          label: 'அளவுகள்', title: 'ஒவ்வொரு தொட்டியின் அளவு',
          body: "<strong>லெவல் ஆஃப் ஈச் டேங்க்</strong> நாள் முழுவதும் மூன்று வரைபடங்களை ஓட்டுகிறது. <strong>சம்ப் லெவல்</strong> நியூ ஹெரிட்டேஜ், சம்ப் டேங்க்-1, ஸ்டாஃப் ஈஸ்ட், WTP கலெக்‌ஷன், NBH(N), வினய் சதன் ஈஸ்ட் தொட்டிகளை <strong>89.02</strong> முதல் <strong>15.64</strong> வரை முடிக்கிறது. <strong>ஓவர் ஹெட் டேங்க் லெவல்ஸ்</strong> ஆறு AB தொட்டிகளை <strong>74.84</strong>–<strong>66.69</strong> இடையே வைக்கிறது.",
          voice: "நாள் முழுவதும் மூன்று வரைபடங்கள் — சம்ப் அளவுகள், ஓவர்ஹெட் தொட்டி அளவுகள், விடுதித் தொட்டி அளவுகள்.",
        },
        {
          label: 'தானியக்கம்', title: 'ஆட்டோ, மேனுவல், அல்லது ட்ரிப்',
          body: "<strong>ஆட்டோமேஷன் ஸ்டேட்டஸ்</strong> அந்த டிக்கெட்டுகளுக்குப் பின்னுள்ள கேள்விக்குப் பதில் தருகிறது. <strong>பம்ப் ONOFF ஸ்டேட்டஸ்</strong> எது இயங்குகிறது எனக் காட்டும்; <strong>போர்வெல் பம்ப் ஆட்டோமேஷன் ஸ்டேட்டஸ்</strong> எது ஆட்டோவில் உள்ளது எனக் காட்டும் — <strong>ஃபேஷன் ஸ்ட்ரீட்</strong>, <strong>கெம்பேகௌடா பார்க்</strong>, <strong>பார்க்கிங் போர்வெல்-1</strong> <strong>1.00</strong>, மற்றவை <strong>0.00</strong>. <strong>ட்ரிப் ஸ்டேட்டஸ்</strong> <strong>0.00</strong>-இல் இருக்கிறது.",
          voice: "ஆட்டோமேஷன் ஸ்டேட்டஸ் அந்த டிக்கெட்டுகளின் கேள்விக்குப் பதில் தருகிறது — எது இயங்குகிறது, எது ஆட்டோவில், எது இல்லை.",
        },
        {
          label: 'சுருக்கம்', title: 'வளாகம் ஒரே பலகையில்',
          body: "<strong>பிளான்ட் சம்மரி</strong> முழு வலையமைப்பையும் வண்ணத் தட்டுகளாக வைக்கிறது, ஒவ்வொன்றிலும் சென்சார் குறியும் <strong>info</strong> குறிப்பும்: <strong>மொத்தம் பெறப்பட்டது 428.04 KLD</strong> எதிராக <strong>மொத்தம் வழங்கப்பட்டது 425.38</strong>, <strong>சமநிலை 2.66</strong>, பிறகு தொட்டி வாரியான உள்வரவு — <strong>NBH(N) 215.00</strong>, <strong>ஹெரிட்டேஜ் 77.04</strong>, <strong>ஸ்டாஃப் ஈஸ்ட் 36.00</strong>, <strong>வினய் சதன் ஈஸ்ட் 100.00</strong>.",
          voice: "பிளான்ட் சம்மரி முழு வலையமைப்பையும் தட்டுகளாக வைக்கிறது — நானூற்று இருபத்தெட்டு பெறப்பட்டது, நானூற்று இருபத்தைந்து வழங்கப்பட்டது.",
        },
        {
          label: 'நிறைவு', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "எனவே: நாளுக்கு <strong>டாஷ்போர்டு</strong> — ஒவ்வொரு கட்டிடம், தொட்டி, போர்வெல், சுத்திகரித்த நீர் ஒரே ஸ்க்ரோலில்; கால சுருக்கம் கேட்டால் <strong>டெய்லி</strong>, <strong>வீக்லி</strong>, <strong>மந்த்லி ரிப்போர்ட்</strong> பக்கங்கள். வலையமைப்பே சுட்டுவதற்கு <strong>டிக்கெட்ஸ்</strong>. ஓட்டம், அளவு, தானியக்கத்துக்கு <strong>அனலிட்டிக்ஸ்</strong>. வளாகம் இயங்குவதைப் பார்க்க <strong>விஷுவலைசேஷன்</strong>.",
          voice: "நாளுக்கு டாஷ்போர்டு, காலத்துக்கு அறிக்கைப் பக்கங்கள், சுட்டுவதற்கு டிக்கெட்ஸ், விவரத்துக்கு அனலிட்டிக்ஸ், பார்க்க விஷுவலைசேஷன்.",
        },
      ],
    },
    mr: {
      title: 'गीतम विद्यापीठ,<br><em>बोअरवेलपासून इमारतीपर्यंत, संपूर्ण कॅम्पस.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा सविस्तर फेरफटका — डॅशबोर्ड पानानुसार, नेटवर्क स्वतः उपस्थित करणारी तिकिटे, आणि संपूर्ण कॅम्पस एका थेट आकृतीत.',
      chapter: 'डेमो · गीतम विद्यापीठ',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेन्यू, प्रत्येक स्क्रीन',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो आणि तुमची प्रत्येक स्क्रीन तिथेच आहे: <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>तिकिटे</strong>, मग <strong>गीतम विद्यापीठ</strong> — जे अॅनालिटिक्स पानांत उघडते — आणि <strong>व्हिज्युअलायझेशन</strong>, कॅम्पसची थेट आकृती. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "सर्व काही याच मेन्यूतून — डॅशबोर्ड, इन्व्हेंटरी, तिकिटे, गीतमचे अॅनालिटिक्स, आणि थेट आकृतीसाठी व्हिज्युअलायझेशन.",
        },
        {
          label: 'नियंत्रणे', title: 'पान चालवणारी नियंत्रणे',
          body: "डॅशबोर्डवरचे सर्व काही तीन नियंत्रणांनी चालते: डावीकडे <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong>, आणि <strong>फ्रॉम</strong>–<strong>टू</strong> कालमर्यादा. उजवीकडे <strong>रिफ्रेश</strong>, सेटिंग्जसाठी <strong>गिअर</strong>, मांडणी सांभाळणारा <strong>ग्रिड</strong>, आणि <strong>शेअर</strong> बाण — आणि अॅनालिटिक्स पानांवर AI इनसाइटसाठी <strong>स्पार्कल</strong>.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा प्रत्येक विजेट चालवतात. उजवीकडे रिफ्रेश, सेटिंग्ज, मांडणी आणि शेअर.",
        },
        {
          label: 'इमारती', title: 'प्रत्येक इमारतीत गेलेले पाणी',
          body: "<strong>वॉटर सप्लाइड टू इंडिव्हिज्युअल बिल्डिंग</strong> संपूर्ण कॅम्पस एका ओळीत ठेवते: <strong>एकूण पुरवठा 426.39 KL</strong>, मग <strong>विनय सदन 69</strong>, <strong>नॉर्थ ब्लॉक ओव्हरहेड 218</strong>, <strong>स्टाफ क्वार्टर 117</strong> आणि <strong>कोकिला सदन 0</strong>, खाली <strong>ओव्हरहेड AB-2 21.39</strong>, <strong>AB-1 1</strong> आणि <strong>एकूण बोअरवेल फ्लो 428.02</strong>. प्रत्येक कार्डावर त्याचा कालावधी आणि मागच्या कालावधीशी बदल आहे.",
          voice: "एकूण चारशे सव्वीस के एल पुरवठा, इमारतीनुसार विभागलेला — विनय सदन एकोणसत्तर, नॉर्थ ब्लॉक दोनशे अठरा.",
        },
        {
          label: 'पाने', title: 'पाने, आणि अहवाल पाने',
          body: "<strong>पेज</strong> मेन्यूमध्ये एकाहून अधिक डॅशबोर्ड आहेत. <strong>युनिफाइड डॅशबोर्ड</strong>, <strong>बोअरवेल फ्लो डेटा</strong>, <strong>ओव्हरहेड टँक (डेली)</strong> आणि <strong>अॅनालिसिस</strong> — प्रत्येक तोच कॅम्पस वेगळ्या प्रश्नासाठी मांडतो — आणि अनेकांशेजारचा बाण त्यांची अहवाल पाने उघडतो, ज्यात <strong>GITAM डेली</strong>, <strong>वीकली</strong> व <strong>मंथली रिपोर्ट</strong> आहेत. कालावधीचा सारांश म्हणजे टाइप केलेली तारीख नव्हे, उघडलेले पान.",
          voice: "पेज मेन्यूमध्ये अनेक डॅशबोर्ड आहेत, आणि शेजारचा बाण अहवाल पाने उघडतो — GITAM डेली, वीकली आणि मंथली.",
        },
        {
          label: 'कालमर्यादा', title: 'कालावधी निवडा',
          body: "कालमर्यादेवर क्लिक केल्यास पिकर उघडतो: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 अवर्स</strong>, तीन, सात, दहा किंवा तीस दिवस, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा <strong>कस्टम</strong>. <strong>ग्रॅन्युलॅरिटी</strong> तुम्ही निवडलेल्यासोबत चालते — महिन्यासाठी <strong>दिवस</strong> व <strong>आठवडे</strong> — <strong>टाइम फॉरमॅट</strong> <strong>12</strong> व <strong>24 तासांत</strong> बदलतो, आणि <strong>स्मार्ट अवर्स</strong> तोच दैनिक वेळखंड प्रत्येक तारखेला लावते.",
          voice: "आजपासून सहा महिन्यांपर्यंतचे प्रीसेट, किंवा तुमच्या तारखा. ग्रॅन्युलॅरिटी कालावधीसोबत चालते.",
        },
        {
          label: 'महिना', title: 'तेच पान, पूर्ण महिन्यावर',
          body: "<strong>दिवस</strong> व <strong>लास्ट 30 डेज</strong> ठेवा आणि बाकी काहीही न बदलता प्रत्येक कार्ड पुन्हा मोजते: <strong>एकूण पुरवठा 15599.79 KL</strong>, <strong>विनय सदन 4485</strong>, <strong>नॉर्थ ब्लॉक 5581</strong>, <strong>स्टाफ क्वार्टर 3545</strong>, <strong>कोकिला सदन 6</strong>, सोबत <strong>ओव्हरहेड AB-2 1264.79</strong>, <strong>AB-1 718</strong> आणि <strong>एकूण बोअरवेल फ्लो 13558.03</strong>.",
          voice: "तीस दिवसांवर तीच कार्डे पंधरा हजार सहाशे के एल पुरवठा आणि साडेतेरा हजार बोअरवेल फ्लो वाचतात.",
        },
        {
          label: 'बोअरवेल', title: 'प्रत्येक बोअरवेल, रॉ आणि दैनिक',
          body: "<strong>बोअरवेल फ्लो डेटा</strong> मीटर शेजारी शेजारी ठेवतो. <strong>बोअरवेल रॉ डेटा</strong>मध्ये चालू टोटलायझर नोंदी आहेत — <strong>AB-1 फॅशन स्ट्रीट 16.88</strong>, <strong>केम्पेगौडा पार्क 39710</strong>, <strong>AB-1 साउथ वेस्ट कॉर्नर 65535</strong> — तर <strong>बोअरवेल फ्लो (KL प्रति दिवस)</strong> तेच मीटर दैनिक आकारमानात ठेवतो. प्रत्येक बोअरवेलचा स्वतःचा चार्टही आहे.",
          voice: "डावीकडे रॉ टोटलायझर नोंदी, शेजारी तेच मीटर दैनिक आकारमानात, आणि प्रत्येक बोअरवेलचा स्वतःचा चार्ट.",
        },
        {
          label: 'टाक्या', title: 'टाकीनुसार, दिवसानुसार',
          body: "<strong>ओव्हरहेड टँक (डेली)</strong> प्रत्येक टाकीला स्वतःचा प्लॉट देतो: <strong>AB-1 ओव्हरहेड टँक-1</strong> व <strong>-2</strong>, <strong>AB-2 ओव्हरहेड टँक-1</strong> <strong>16</strong> वर व <strong>-2</strong> <strong>5.38</strong> वर, मग <strong>NBH(N) सम्प टँक</strong>, <strong>विनय सदन</strong> व <strong>कोकिला सदन</strong> फ्लोमीटर. प्रत्येक टाकी एकाच पानावर, सर्व एकाच कालअक्षावर.",
          voice: "प्रत्येक ओव्हरहेड टाकीचा स्वतःचा प्लॉट एकाच पानावर, सर्व एकाच कालअक्षावर.",
        },
        {
          label: 'डाउनलोड', title: 'तक्ता सोबत घ्या',
          body: "प्रत्येक विजेटवर हॉवर केल्यास तीच साधने येतात: <strong>डाउनलोड CSV</strong>, <strong>एक्सपांडेड व्ह्यू</strong>, चार्ट-टाइप मेन्यू, <strong>एडिट विजेट</strong> आणि <strong>info</strong>. इथे <strong>वॉटर अव्हेलेबल इन अंडरग्राउंड टँक्स</strong>मध्ये <strong>हेरिटेज एरिया 249.18</strong>, <strong>नॉर्थ ब्लॉक 231.82</strong>, <strong>AB-1 कॉर्नर सम्प 0.00</strong> आणि <strong>स्टाफ क्वार्टर्स ईस्ट साइड 682.28</strong> — आणि CSV वरच्या मर्यादेसाठी उतरते.",
          voice: "कोणत्याही विजेटवर हॉवर करा — डाउनलोड, एक्सपांड, चार्ट टाइप, एडिट. CSV वरच्या मर्यादेसाठी उतरते.",
        },
        {
          label: 'उपसा', title: 'प्रत्यक्षात कोणता बोअरवेल चालतो',
          body: "<strong>इंडिव्हिज्युअल बोअरवेल</strong> प्रत्येक विहिरीचा दिवसाचा प्रवाह देते: <strong>AB-1 फॅशन स्ट्रीट 0.01</strong>, <strong>केम्पेगौडा पार्क 58.00</strong>, <strong>AB-1 साउथ वेस्ट कॉर्नर 0.00</strong>, <strong>कोकिला सदन ईस्ट साइड 43.00</strong> आणि <strong>वेस्ट साइड 0.00</strong>. दोन विहिरी पूर्ण दिवस ओढत असताना बाकी शून्यावर — पंप अतिवापराने बिघडण्याआधी कळण्यासारखा नमुना.",
          voice: "केम्पेगौडा पार्क अठ्ठावन्न आणि कोकिला सदन ईस्ट त्रेचाळीस दिवस ओढतात तर बाकी शून्यावर.",
        },
        {
          label: 'सम्प', title: 'प्रत्येक सम्पने किती घेतले',
          body: "<strong>UG सम्प इनपुट</strong> प्रत्येक भूमिगत टाकीचे इनटेक वाचते: <strong>हेरिटेज टँक 58.02 KL</strong>, <strong>32% खाली</strong>; <strong>AB-1 सम्प टँक 0</strong>; <strong>नॉर्थ ब्लॉक टँक 144</strong>, <strong>40% खाली</strong>; <strong>विनय सदन ईस्ट 75</strong>, <strong>26% खाली</strong>; <strong>स्टाफ ईस्ट टँक 14</strong>, <strong>83% खाली</strong>. प्रत्येक कार्डावर मागच्या कालावधीशी बदल आहे.",
          voice: "प्रत्येक भूमिगत टाकीचे इनटेक आणि त्याचा बदल — हेरिटेज अठ्ठावन्न, नॉर्थ ब्लॉक एकशे चव्वेचाळीस, स्टाफ ईस्ट चौदा.",
        },
        {
          label: 'प्रक्रिया', title: 'प्रक्रिया केलेले पाणी, आणि त्यावरची साधने',
          body: "<strong>STP ट्रीटेड वॉटर</strong>मध्ये <strong>टोटल फ्लो इन ट्रीटेड वॉटर टँक 201.32 KL</strong>, तसेच <strong>STP ट्रीटेड वॉटर-1</strong> <strong>172.32</strong> व <strong>-2</strong> <strong>92.76</strong>. कोणत्याहीवर हॉवर करा आणि टूलबार येतो — इथे <strong>एडिट विजेट</strong>, ज्याने कार्डाचा सेन्सर, नाव, एकक व मर्यादा बदलतात, पान पुन्हा न बांधता.",
          voice: "टाकीत दोनशे एक के एल प्रक्रिया केलेले पाणी. एडिट विजेटने सेन्सर, नाव आणि मर्यादा बदलतात, पान पुन्हा न बांधता.",
        },
        {
          label: 'फ्लशिंग', title: 'प्रक्रिया केलेले पाणी कुठे जाते',
          body: "<strong>STP ट्रीटेड वॉटर युसेज (फ्लशिंग सिस्टम)</strong> ते इमारतींपर्यंत नेते: <strong>फ्लशिंगमध्ये वापरलेले एकूण 89 KL</strong>, त्यात <strong>विनय सदन 75</strong>, <strong>स्टाफ क्वार्टर 14</strong> व <strong>कोकिला सदन 0</strong>. फ्लशिंगसाठी पुन्हा वापरलेले प्रक्रिया केलेले पाणी म्हणजे कॅम्पसला उपसावे न लागलेले पाणी.",
          voice: "एकोणनव्वद के एल प्रक्रिया केलेले पाणी फ्लशिंगसाठी पुन्हा वापरले — कॅम्पसला उपसावे न लागलेले पाणी.",
        },
        {
          label: 'संतुलन', title: 'आले, गेले, आणि संतुलन',
          body: "<strong>STP ट्रीटेड वॉटर युसेज (इरिगेशन सिस्टम)</strong> आणखी <strong>126 KL</strong> सिंचन प्रवाह जोडते, <strong>5% वर</strong>. मग <strong>इनपुट अँड बॅलन्स</strong> दिवस पूर्ण करते: <strong>टँकरकडून 0.01</strong>, <strong>बोअरवेलकडून 291.01</strong>, <strong>पाइपलाइनकडून 0</strong>, आणि <strong>एकूण इनलेट 291.02 KL</strong>.",
          voice: "सिंचन आणखी एकशे सव्वीस के एल घेते. इनपुट अँड बॅलन्स दिवस पूर्ण करते — एकूण इनलेट दोनशे एक्याण्णव.",
        },
        {
          label: 'कस्टम', title: 'स्वतःचे विजेट बनवा',
          body: "पान स्थिर नाही. <strong>कस्टम विजेट</strong> जोडून कॅम्पसमधील कोणत्याही सेन्सरवर लावता येते — इथे एक <strong>ओव्हरहेड टँक AB-1</strong> लेव्हल सेन्सरवर बांधले जात आहे. कोणताही बदल खाली <strong>सेव्ह करंट व्ह्यू</strong> पट्टी आणतो: <strong>सेव्ह</strong> याच पानावर लिहितो, <strong>सेव्ह अॅज</strong> नवे पान बनवतो.",
          voice: "कस्टम विजेट जोडून कोणत्याही सेन्सरवर लावता येते. सेव्ह करंट व्ह्यू तुम्ही बांधलेले पान ठेवते.",
        },
        {
          label: 'अलर्ट', title: 'डॅशबोर्डवरच अलर्ट',
          body: "<strong>तिकिटे इतिहास</strong> विजेट कॅम्पसचे स्वतःचे निष्कर्ष डॅशबोर्डवरच ठेवते. ही डेटावरून आपोआप उठतात: <em>“न्यू हेरिटेज टँक ते ओव्हरहेड टँक AB चा कोणताही पंप मॅन्युअल मोडमध्ये”</em>, <em>“बोअरवेल 4 - कोकिला सदन वेस्ट साइड पंप मॅन्युअल मोडमध्ये”</em>, <em>“इनसाइड स्टाफ हॉस्टेल पातळी 90% झाली”</em> — प्रत्येक आपला प्लांट, वेळ व <strong>टाइप व टॅग्ज</strong> स्तंभासह.",
          voice: "तिकिटे इतिहास विजेट कॅम्पसचे निष्कर्ष डॅशबोर्डवर ठेवते — मॅन्युअल मोडमध्ये राहिलेले पंप, नव्वद टक्के गाठलेली टाकी.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'इन्व्हेंटरी, तुमच्या स्टोअरसाठी तयार',
          body: "या अकाउंटसाठी <strong>इन्व्हेंटरी</strong> जोडलेली आहे पण अजून वस्तू नाहीत — ती <strong>No inventory items to show</strong> दाखवते. स्तंभ आधीच तयार आहेत: <strong>नेम</strong>, <strong>स्टोअर नेम</strong>, <strong>कॅटेगरी</strong>, <strong>स्टॉक अव्हेलेबल</strong>, <strong>लास्ट कन्झम्प्शन</strong>, आणि वापराची तुलना <strong>अॅक्च्युअल</strong> विरुद्ध <strong>एक्स्पेक्टेड</strong>.",
          voice: "इन्व्हेंटरी जोडलेली आहे पण अजून रिकामी. स्तंभ तयार आहेत — स्टॉक, शेवटचा वापर, आणि अॅक्च्युअल विरुद्ध एक्स्पेक्टेड.",
        },
        {
          label: 'तिकिटे', title: 'प्रत्येक तिकीट, मोजलेले',
          body: "<strong>तिकिटे</strong> पान मोजणीने उघडते: <strong>12 खुली</strong> — एकही क्रिटिकल नाही, <strong>11 ओव्हरड्यू</strong>, <strong>11 एस्कलेटेड</strong> — आणि <strong>14 बंद</strong>, त्यांत <strong>10 ओव्हरड्यू</strong> व <strong>8 एस्कलेटेड</strong>. उजवीकडे तेच संघानुसार: खुले काम <strong>7 इलेक्ट्रिकल</strong>, <strong>2 प्रोसेस</strong> व <strong>1 अॅडमिन</strong>वर. बारापैकी अकरा ओव्हरड्यू — कृती मागणारा आकडा हाच.",
          voice: "बारा खुली तिकिटे आणि चौदा बंद, त्यांत अकरा ओव्हरड्यू, आणि खुल्यांपैकी सात इलेक्ट्रिकलवर.",
        },
        {
          label: 'तपशील', title: 'टॅग, वेळ, श्रेणी',
          body: "प्रत्येक ओळ साध्या शब्दांत एक निष्कर्ष आहे: <em>“इनसाइड न्यू हेरिटेज टँक लेव्हल ट्रान्समीटरनुसार 90% झाली”</em>, <em>“बोअरवेल 12 - NBH नॉर्थ साइड पंप मॅन्युअल मोडमध्ये”</em>, <em>“बोअरवेल 7 - पार्किंग बोअरवेल-1 पंप मॅन्युअल मोडमध्ये”</em>. बाकी टॅग सांगतात — <strong>नॉर्मल</strong>, <strong>ऑटोमॅटिक</strong>, <strong>ओव्हरड्यू</strong>, <strong>एस्कलेशन लेव्हल 3</strong>, <strong>व्हेरिफाइड</strong>.",
          voice: "प्रत्येक तिकीट साध्या शब्दांत एक निष्कर्ष, ऑटोमॅटिक किंवा मॅन्युअल, ओव्हरड्यू, एस्कलेटेड किंवा व्हेरिफाइड म्हणून टॅग केलेले.",
        },
        {
          label: 'नवे तिकीट', title: 'तुम्हीही एक उपस्थित करा',
          body: "<strong>क्रिएट न्यू तिकीट</strong> हा हाताने करण्याचा मार्ग: एक <strong>प्रॉब्लेम स्टेटमेंट</strong>, ऐच्छिक <strong>डिस्क्रिप्शन</strong>, संबंधित <strong>इक्विपमेंट</strong> आणि एक <strong>इश्यू टाइप</strong>. म्हणूनच ओळींवर <strong>ऑटोमॅटिक</strong> किंवा <strong>मॅन्युअल</strong> टॅग असतो.",
          voice: "क्रिएट न्यू तिकीट प्रॉब्लेम स्टेटमेंट, इक्विपमेंट आणि इश्यू टाइप घेते — म्हणूनच प्रत्येक तिकीट ऑटोमॅटिक किंवा मॅन्युअल असते.",
        },
        {
          label: 'थेट', title: 'संपूर्ण कॅम्पस, थेट',
          body: "<strong>व्हिज्युअलायझेशन</strong> कॅम्पस एकाच आकृतीत उघडते, <strong>LIVE</strong> बॅज व शेवटच्या रीडिंगच्या वेळेसह. प्रत्येक बोअरवेल, सम्प, ओव्हरहेड टाकी व इमारत प्रत्यक्ष जागी काढलेली आहे — डावीकडे <strong>AB-1 फॅशन स्ट्रीट</strong>, <strong>केम्पेगौडा पार्क</strong>, <strong>नियरबाय NBH पोर्टिको</strong> व <strong>NBH नॉर्थ साइड</strong>, मध्यभागी ओव्हरहेड टाक्या, उजवीकडे <strong>विनय सदन</strong> व <strong>कोकिला सदन</strong>, आणि खाली <strong>STP ट्रीटेड वॉटर</strong>.",
          voice: "व्हिज्युअलायझेशन संपूर्ण कॅम्पस एका थेट आकृतीत उघडते — प्रत्येक बोअरवेल, सम्प, टाकी आणि इमारत प्रत्यक्ष जागी.",
        },
        {
          label: 'झूम', title: 'एका पंपापर्यंत',
          body: "झूम करा आणि प्रत्येक युनिट आपली थेट स्थिती दाखवते. प्रत्येक पंपावर रंगीत खूण, प्रत्येक टाकी आपल्या प्रत्यक्ष पातळीपर्यंत भरलेली आणि शेजारी <strong>लेव्हल</strong> गेज, आणि प्रत्येक ओळीवर तिचे <strong>Flow{KL/hr}</strong> वाचन — विनय सदन वेस्ट ओळीवर <strong>5.8</strong> तर बाकी <strong>0.00</strong>. वर <strong>ग्रुप कंट्रोल</strong>, <strong>युनिट प्रोसेसेस</strong> व <strong>सिलेक्ट पेज</strong>.",
          voice: "झूम केल्यावर प्रत्येक पंप आपली स्थिती, प्रत्येक टाकी प्रत्यक्ष पातळी, आणि प्रत्येक ओळ आपले फ्लो वाचन दाखवते.",
        },
        {
          label: 'प्रवाह', title: 'प्रत्येक बिंदूवर प्रवाह',
          body: "<strong>गीतम युनिव्हर्सिटी अॅनालिटिक्स</strong> नेटवर्कला प्रश्नानुसार गटबद्ध करते. <strong>फ्लो अॅट इच पॉइंट</strong>मध्ये प्रत्येक विहिरीचा <strong>बोअरवेल फ्लो</strong> आहे — <strong>केम्पेगौडा पार्क 77.00</strong>, <strong>पार्किंग बोअरवेल-1 100.00</strong>, <strong>विनय सदन वेस्ट 36.00</strong> — सोबत <strong>टँकर फ्लो</strong>, <strong>पाइपलाइन फ्लो</strong>, आणि <strong>सम्प/टँक ते OHT प्रवाह</strong>.",
          voice: "अॅनालिटिक्स नेटवर्कला प्रश्नानुसार गटबद्ध करते — प्रत्येक बोअरवेल, टँकर, पाइपलाइन, आणि सम्पपासून ओव्हरहेड टाकीपर्यंत.",
        },
        {
          label: 'पातळ्या', title: 'प्रत्येक टाकीची पातळी',
          body: "<strong>लेव्हल ऑफ इच टँक</strong> दिवसभराचे तीन चार्ट चालवते. <strong>सम्प लेव्हल</strong> न्यू हेरिटेज, सम्प टँक-1, स्टाफ ईस्ट, WTP कलेक्शन, NBH(N) व विनय सदन ईस्ट टाक्या <strong>89.02</strong> ते <strong>15.64</strong> दरम्यान संपवते. <strong>ओव्हर हेड टँक लेव्हल्स</strong> सहा AB टाक्या <strong>74.84</strong> व <strong>66.69</strong> दरम्यान ठेवते.",
          voice: "दिवसभराचे तीन चार्ट — सम्प पातळ्या, ओव्हरहेड टाकी पातळ्या, आणि हॉस्टेल टाकी पातळ्या.",
        },
        {
          label: 'ऑटोमेशन', title: 'ऑटो, मॅन्युअल, की ट्रिप',
          body: "<strong>ऑटोमेशन स्टेटस</strong> त्या बहुतेक तिकिटांमागच्या प्रश्नाचे उत्तर देते. <strong>पंप ONOFF स्टेटस</strong> काय चालू आहे ते दाखवतो; <strong>बोअरवेल पंप ऑटोमेशन स्टेटस</strong> काय ऑटोमध्ये आहे ते — <strong>फॅशन स्ट्रीट</strong>, <strong>केम्पेगौडा पार्क</strong> व <strong>पार्किंग बोअरवेल-1</strong> <strong>1.00</strong> वर, बाकी <strong>0.00</strong> वर. <strong>ट्रिप स्टेटस</strong> <strong>0.00</strong> वर राहतो.",
          voice: "ऑटोमेशन स्टेटस त्या तिकिटांच्या प्रश्नाचे उत्तर देते — कोणते पंप चालू, कोणते ऑटोमध्ये, कोणते नाहीत.",
        },
        {
          label: 'पॅनेल', title: 'संपूर्ण कॅम्पस एका पॅनेलमध्ये',
          body: "<strong>प्लांट समरी</strong> संपूर्ण नेटवर्क रंग-संकेतित टाइल्समध्ये ठेवते, प्रत्येकावर सेन्सर टॅग व <strong>info</strong> नोट: <strong>एकूण प्राप्त 428.04 KLD</strong> विरुद्ध <strong>एकूण पुरवठा 425.38</strong> आणि <strong>बॅलन्स 2.66</strong>, मग टाकीनुसार इनटेक — <strong>NBH(N) 215.00</strong>, <strong>हेरिटेज 77.04</strong>, <strong>स्टाफ ईस्ट 36.00</strong>, <strong>विनय सदन ईस्ट 100.00</strong>.",
          voice: "प्लांट समरी संपूर्ण नेटवर्क टाइल्समध्ये ठेवते — चारशे अठ्ठावीस प्राप्त, चारशे पंचवीस पुरवठा, आणि दोन पूर्णांक सहा सहा संतुलन.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणते पान',
          body: "म्हणून: दिवसासाठी <strong>डॅशबोर्ड</strong> — प्रत्येक इमारत, टाकी, बोअरवेल आणि प्रक्रिया केलेले पाणी एकाच स्क्रोलमध्ये, प्रश्नानुसार योग्य त्या पानावर, आणि कोणी कालावधी विचारला तर <strong>डेली</strong>, <strong>वीकली</strong> व <strong>मंथली रिपोर्ट</strong> पाने. नेटवर्क स्वतः काय सूचित करते त्यासाठी <strong>तिकिटे</strong>. आकड्यामागच्या प्रवाह, पातळ्या व ऑटोमेशनसाठी <strong>अॅनालिटिक्स</strong>. कॅम्पस चालताना पाहायचा असेल तर <strong>व्हिज्युअलायझेशन</strong>.",
          voice: "दिवसासाठी डॅशबोर्ड, कालावधीसाठी अहवाल पाने, सूचनांसाठी तिकिटे, तपशिलासाठी अॅनालिटिक्स, आणि पाहण्यासाठी व्हिज्युअलायझेशन.",
        },
      ],
    },
  },
};

export default lesson;
