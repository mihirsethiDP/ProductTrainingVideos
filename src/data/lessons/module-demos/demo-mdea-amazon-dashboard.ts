import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-mdea-amazon-dashboard`;

/**
 * Demo — Amazon MDEA (160 KLD).  (hidden module-demos)
 *
 * Built from one screen recording (4:49, Amazon MDEA account, 2026-09-11):
 * Dashboard "(Summary Page) - Capacity 160 KLD" with the range picker worked
 * hard (Hours/Days over a day, Weeks/Months over a quarter, Smart Hours, 12/24
 * hour) → a gauge's Current Threshold Configuration → Quality Parameter →
 * Equipment Running and Energy Consumption → the second page, "Unified Detailed
 * Analytics Page" → Primary Treatment with chart-type switching, reference
 * bands, tank volumes, pressures, a Manual Data Input widget, trip status and
 * pump on/off → Inventory (search + category filter) → Insights → Task List →
 * ScadaView - Amazon Workspace → Data Input.
 *
 * Style: `detailed` — 2-4 steps per page, key widgets opened individually,
 * voices of three sentences, 30 steps, ~6 minutes.
 *
 * The uploader's NOTES ask for the dashboard "in detail", naming ticket
 * granularity + data downloading, widget customization, daily/weekly/monthly
 * energy, insights, alerts, inventory and ticket management. Mapped on as:
 * granularity → steps 4-6 (and the point that the granularity list itself
 * changes with the window); downloading → step 10's widget toolbar and the
 * page-level download in step 2; widget customization → steps 7, 14-16 and the
 * saved view in step 12; energy day/week/month → steps 9-11 read against the
 * range control; insights and alerts → steps 23-25; inventory → 21-22.
 *
 * Two honest notes about this account:
 *  - it has NO Tickets page (unlike other deployments). Its alert surface is
 *    Insights — 2785 insights, 6 open alarms — plus Task List for the work that
 *    follows, so the notes' "ticket management" is mapped onto those two.
 *  - the recording opens from an internal Assets / "View As" screen that a
 *    client user never sees, so the demo starts at the Dashboard instead.
 *
 * Real 1280px frames from the recording; the baked OS cursor is erased from
 * every one (delogo on flat ground, an exact clone where it sat near text).
 */
const lesson: Lesson = {
  id: 'demo-mdea-amazon-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 10,
  estimatedMinutes: 6,
  expiresAt: '2026-10-11', // 30 days after the job's created_at (2026-09-11) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    controls: `${BASE}/controls.jpg`,
    range: `${BASE}/range.jpg`,
    monthkpi: `${BASE}/monthkpi.jpg`,
    threshold: `${BASE}/threshold.jpg`,
    quality: `${BASE}/quality.jpg`,
    energy: `${BASE}/energy.jpg`,
    runhours: `${BASE}/runhours.jpg`,
    plantsum: `${BASE}/plantsum.jpg`,
    charttype: `${BASE}/charttype.jpg`,
    bargraph: `${BASE}/bargraph.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    manual: `${BASE}/manual.jpg`,
    trip: `${BASE}/trip.jpg`,
    pumps: `${BASE}/pumps.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    categories: `${BASE}/categories.jpg`,
    insights: `${BASE}/insights.jpg`,
    tasklist: `${BASE}/tasklist.jpg`,
    scada1: `${BASE}/scada1.jpg`,
    scada2: `${BASE}/scada2.jpg`,
    datainput: `${BASE}/datainput.jpg`,
  },
  layouts: [
    // S1 — the side navigation
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '9.9%', left: '0%', width: '14.1%', height: '39.7%' },
      cursor: [
        { at: 0, x: 15.2, y: 4.4, click: true },
        { at: 0.3, x: 3.2, y: 12.6 },
        { at: 0.55, x: 3.2, y: 25 },
        { at: 0.8, x: 3, y: 31.1 },
        { at: 0.95, x: 5.3, y: 44.8, click: true },
      ],
    },
    // S2 — the header controls
    {
      mode: 'detail', screenshot: 'controls', caption: 'The controls that drive the page',
      spotlight: { top: '15%', left: '1.6%', width: '96.6%', height: '11%' },
      cursor: [
        { at: 0, x: 11.6, y: 23.9, click: true },
        { at: 0.35, x: 53.8, y: 23.9 },
        { at: 0.6, x: 72.7, y: 23.9 },
        { at: 0.85, x: 82.9, y: 13.7, click: true },
        { at: 0.97, x: 91.8, y: 13.7 },
      ],
    },
    // S3 — the plant in one row of numbers
    {
      mode: 'detail', screenshot: 'controls', caption: 'The plant in one row',
      spotlight: { top: '38.9%', left: '1.6%', width: '96.6%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.3, y: 53 },
        { at: 0.3, x: 25.5, y: 53 },
        { at: 0.55, x: 41.7, y: 53 },
        { at: 0.8, x: 74.2, y: 53 },
        { at: 0.95, x: 90.4, y: 53 },
      ],
    },
    // S4 — the range picker
    {
      mode: 'detail', screenshot: 'range', caption: 'Pick a window',
      spotlight: { top: '17.4%', left: '39.5%', width: '36.5%', height: '11.1%' },
      cursor: [
        { at: 0, x: 41.5, y: 19.7 },
        { at: 0.3, x: 65.5, y: 19.7 },
        { at: 0.6, x: 42.7, y: 25.6 },
        { at: 0.85, x: 29.3, y: 33.2 },
        { at: 0.97, x: 75.2, y: 82.1, click: true },
      ],
    },
    // S5 — granularity follows the window
    {
      mode: 'detail', screenshot: 'monthkpi', caption: 'The granularity follows the window',
      spotlight: { top: '18.8%', left: '50.8%', width: '20.3%', height: '9.4%' },
      cursor: [
        { at: 0, x: 53.1, y: 23.9, click: true },
        { at: 0.4, x: 60.7, y: 23.9 },
        { at: 0.7, x: 68.4, y: 23.9 },
        { at: 0.95, x: 84.4, y: 23.9 },
      ],
    },
    // S6 — the same page over a quarter
    {
      mode: 'detail', screenshot: 'monthkpi', caption: 'The same page over a quarter',
      spotlight: { top: '38.9%', left: '1.6%', width: '96.6%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.3, y: 53 },
        { at: 0.35, x: 33.6, y: 53 },
        { at: 0.65, x: 58, y: 53 },
        { at: 0.9, x: 9.3, y: 88.5 },
      ],
    },
    // S7 — the thresholds behind a gauge
    {
      mode: 'detail', screenshot: 'threshold', caption: 'The bands behind a gauge',
      spotlight: { top: '21.4%', left: '32.8%', width: '19.4%', height: '19.7%' },
      cursor: [
        { at: 0, x: 42.6, y: 62.4, click: true },
        { at: 0.35, x: 35.5, y: 28.2 },
        { at: 0.65, x: 36.3, y: 32.5 },
        { at: 0.9, x: 36.7, y: 40 },
      ],
    },
    // S8 — Quality Parameter
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, against its reference',
      spotlight: { top: '28.2%', left: '66.4%', width: '15.5%', height: '60%' },
      cursor: [
        { at: 0, x: 7.3, y: 24.4 },
        { at: 0.35, x: 33.6, y: 62.4 },
        { at: 0.7, x: 74.2, y: 46.8 },
        { at: 0.95, x: 74.2, y: 82.3 },
      ],
    },
    // S9 — total energy for the window
    {
      mode: 'detail', screenshot: 'energy', caption: 'What the plant drew',
      spotlight: { top: '27.4%', left: '1.6%', width: '32.8%', height: '67.5%' },
      cursor: [
        { at: 0, x: 15.8, y: 23.4 },
        { at: 0.35, x: 10, y: 60 },
        { at: 0.7, x: 25, y: 50 },
        { at: 0.95, x: 30.3, y: 45.9 },
      ],
    },
    // S10 — running hours, machine by machine
    {
      mode: 'detail', screenshot: 'runhours', caption: 'Hours, machine by machine',
      spotlight: { top: '27.4%', left: '34.1%', width: '31.6%', height: '67.5%' },
      cursor: [
        { at: 0, x: 41.4, y: 29.9 },
        { at: 0.3, x: 56.6, y: 30.6, click: true },
        { at: 0.6, x: 62.8, y: 30.6 },
        { at: 0.85, x: 59.8, y: 69.1 },
        { at: 0.97, x: 59.8, y: 87 },
      ],
    },
    // S11 — energy per KL beside the total
    {
      mode: 'detail', screenshot: 'runhours', caption: 'Per kilolitre, not just a total',
      spotlight: { top: '27.4%', left: '66.4%', width: '15.5%', height: '67.5%' },
      cursor: [
        { at: 0, x: 74.2, y: 29.6 },
        { at: 0.4, x: 74.2, y: 45.4 },
        { at: 0.7, x: 74.2, y: 57.4 },
        { at: 0.95, x: 74.2, y: 76.3 },
      ],
    },
    // S12 — keeping the view you built
    {
      mode: 'detail', screenshot: 'energy', caption: 'Keep the view you built',
      spotlight: { top: '91.5%', left: '7.5%', width: '85.3%', height: '7%' },
      cursor: [
        { at: 0, x: 12, y: 95.4 },
        { at: 0.4, x: 70.3, y: 95.4 },
        { at: 0.7, x: 79, y: 95.4, click: true },
        { at: 0.95, x: 87.7, y: 95.4 },
      ],
    },
    // S13 — the second page
    {
      mode: 'detail', screenshot: 'plantsum', caption: 'A second page, a second view',
      spotlight: { top: '18.8%', left: '1.6%', width: '17.2%', height: '9.4%' },
      cursor: [
        { at: 0, x: 10.5, y: 23.9, click: true },
        { at: 0.35, x: 9.3, y: 53 },
        { at: 0.65, x: 41.7, y: 53 },
        { at: 0.9, x: 58, y: 88.5 },
      ],
    },
    // S14 — Primary Treatment, with its reference bands
    {
      mode: 'detail', screenshot: 'charttype', caption: 'Primary Treatment',
      spotlight: { top: '17.1%', left: '1.6%', width: '31.6%', height: '68.4%' },
      cursor: [
        { at: 0, x: 7.5, y: 13.2 },
        { at: 0.35, x: 12.7, y: 29.9 },
        { at: 0.65, x: 8, y: 38.5 },
        { at: 0.9, x: 30.5, y: 62.6 },
      ],
    },
    // S15 — the chart-type menu
    {
      mode: 'detail', screenshot: 'charttype', caption: 'Table, or bar graph',
      spotlight: { top: '17.9%', left: '25.9%', width: '7%', height: '4.3%' },
      cursor: [
        { at: 0, x: 26.6, y: 19.5 },
        { at: 0.35, x: 27.9, y: 19.5 },
        { at: 0.7, x: 29.2, y: 19.5, click: true },
        { at: 0.95, x: 31.9, y: 19.5 },
      ],
    },
    // S16 — the same data as bars
    {
      mode: 'detail', screenshot: 'bargraph', caption: 'The same data, as bars',
      spotlight: { top: '28.2%', left: '2.3%', width: '30.5%', height: '55.6%' },
      cursor: [
        { at: 0, x: 8.6, y: 40 },
        { at: 0.35, x: 20.5, y: 40 },
        { at: 0.7, x: 30.8, y: 39.5 },
        { at: 0.95, x: 30.8, y: 46 },
      ],
    },
    // S17 — tank levels, volumes and pressures
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Levels, volumes, pressures',
      spotlight: { top: '8.5%', left: '1.6%', width: '96.6%', height: '68.4%' },
      cursor: [
        { at: 0, x: 13.5, y: 25 },
        { at: 0.35, x: 30.5, y: 51.3 },
        { at: 0.65, x: 50, y: 44.8 },
        { at: 0.9, x: 80.5, y: 40 },
      ],
    },
    // S18 — the Manual Data Input widget
    {
      mode: 'detail', screenshot: 'manual', caption: 'Readings typed in by hand',
      spotlight: { top: '43.6%', left: '34.1%', width: '31.6%', height: '48.7%' },
      cursor: [
        { at: 0, x: 15.8, y: 56.4 },
        { at: 0.35, x: 38.7, y: 46.2 },
        { at: 0.7, x: 38, y: 70.5 },
        { at: 0.95, x: 62, y: 82.7 },
      ],
    },
    // S19 — trip status and the current state of every machine
    {
      mode: 'detail', screenshot: 'trip', caption: 'Tripped, or running',
      spotlight: { top: '62.4%', left: '1.6%', width: '31.6%', height: '35.9%' },
      cursor: [
        { at: 0, x: 11.9, y: 64.4 },
        { at: 0.35, x: 24.3, y: 64.4, click: true },
        { at: 0.7, x: 11.9, y: 76.6 },
        { at: 0.95, x: 69.1, y: 45 },
      ],
    },
    // S20 — pump on/off, plotted
    {
      mode: 'detail', screenshot: 'pumps', caption: 'On, or off, all day',
      spotlight: { top: '28.2%', left: '1.6%', width: '96.6%', height: '64.1%' },
      cursor: [
        { at: 0, x: 17.4, y: 45.8 },
        { at: 0.35, x: 49.9, y: 45.8 },
        { at: 0.7, x: 82.3, y: 45.8 },
        { at: 0.95, x: 96.1, y: 67.2 },
      ],
    },
    // S21 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'What the store is using',
      spotlight: { top: '25.6%', left: '1.6%', width: '96.8%', height: '71.8%' },
      cursor: [
        { at: 0, x: 4.4, y: 46.3 },
        { at: 0.35, x: 4.4, y: 65.5 },
        { at: 0.7, x: 78.4, y: 46.2 },
        { at: 0.95, x: 91.1, y: 46.2 },
      ],
    },
    // S22 — filtering inventory by category
    {
      mode: 'detail', screenshot: 'categories', caption: 'Not only chemicals',
      spotlight: { top: '24.3%', left: '81.3%', width: '12.5%', height: '45.3%' },
      cursor: [
        { at: 0, x: 91.7, y: 19.7, click: true },
        { at: 0.35, x: 84.2, y: 33.8 },
        { at: 0.7, x: 86.7, y: 46.8 },
        { at: 0.95, x: 87.6, y: 66.3 },
      ],
    },
    // S23 — the Insights counters
    {
      mode: 'detail', screenshot: 'insights', caption: 'What the platform found',
      spotlight: { top: '35.9%', left: '1.6%', width: '96.6%', height: '11.1%' },
      cursor: [
        { at: 0, x: 5.7, y: 40.7 },
        { at: 0.35, x: 29.2, y: 40.7 },
        { at: 0.7, x: 54.3, y: 40.7 },
        { at: 0.95, x: 78, y: 40.7 },
      ],
    },
    // S24 — what an insight actually says
    {
      mode: 'detail', screenshot: 'insights', caption: 'Each one says what to do',
      spotlight: { top: '53.8%', left: '1.6%', width: '96.6%', height: '43.6%' },
      cursor: [
        { at: 0, x: 12.7, y: 57.6 },
        { at: 0.35, x: 26.8, y: 71.5 },
        { at: 0.7, x: 65.9, y: 71.5 },
        { at: 0.95, x: 91.6, y: 71.5 },
      ],
    },
    // S25 — narrowing them down
    {
      mode: 'detail', screenshot: 'insights', caption: 'Narrow them down',
      spotlight: { top: '17.9%', left: '1.6%', width: '96.6%', height: '17.1%' },
      cursor: [
        { at: 0, x: 13.5, y: 30.4 },
        { at: 0.3, x: 37.8, y: 30.4 },
        { at: 0.6, x: 58, y: 30.4 },
        { at: 0.85, x: 74.2, y: 20.7 },
        { at: 0.97, x: 94.1, y: 12.6, click: true },
      ],
    },
    // S26 — Task List
    {
      mode: 'detail', screenshot: 'tasklist', caption: 'The work that follows',
      spotlight: { top: '30.8%', left: '1.6%', width: '96.6%', height: '66.7%' },
      cursor: [
        { at: 0, x: 94.8, y: 12.6, click: true },
        { at: 0.3, x: 30.8, y: 21.9 },
        { at: 0.6, x: 55.5, y: 45.4 },
        { at: 0.85, x: 65.6, y: 53.3 },
        { at: 0.97, x: 82.8, y: 45.4 },
      ],
    },
    // S27 — ScadaView, the whole plant live
    {
      mode: 'detail', screenshot: 'scada1', caption: 'ScadaView — the plant, live',
      spotlight: { top: '38.5%', left: '1.6%', width: '96.6%', height: '41%' },
      cursor: [
        { at: 0, x: 9.4, y: 17.1 },
        { at: 0.3, x: 69.1, y: 17.1 },
        { at: 0.6, x: 82, y: 17.1, click: true },
        { at: 0.9, x: 41.6, y: 57.6 },
      ],
    },
    // S28 — inside the diagram
    {
      mode: 'detail', screenshot: 'scada2', caption: 'Right down to one pump',
      spotlight: { top: '20.5%', left: '33.6%', width: '32%', height: '55.6%' },
      cursor: [
        { at: 0, x: 6.8, y: 30 },
        { at: 0.35, x: 40.2, y: 33.8 },
        { at: 0.7, x: 29.4, y: 46.2 },
        { at: 0.95, x: 66, y: 76.9 },
      ],
    },
    // S29 — Data Input
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Lab readings, typed in',
      spotlight: { top: '27.4%', left: '1.6%', width: '96.6%', height: '52.1%' },
      cursor: [
        { at: 0, x: 9.6, y: 37 },
        { at: 0.3, x: 22.7, y: 37 },
        { at: 0.6, x: 38.4, y: 37, click: true },
        { at: 0.85, x: 63.4, y: 37 },
        { at: 0.97, x: 94.6, y: 14, click: true },
      ],
    },
    // S30 — wrap
    {
      mode: 'detail', screenshot: 'controls', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1.2, y: 4.4 },
        { at: 0.35, x: 11.6, y: 23.9 },
        { at: 0.7, x: 25.5, y: 53 },
        { at: 0.95, x: 61.2, y: 23.9 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Amazon MDEA,<br><em>160 KLD, end to end.</em>',
      subtitle:
        'A detailed walkthrough of your platform — the dashboard widget by widget, the treatment train behind it, and the insights, tasks and diagrams that go with it.',
      chapter: 'Demo · Amazon MDEA (160 KLD)',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens your side navigation, and every screen you have lives there: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Insight List</strong>, <strong>Data Input</strong>, <strong>Task List</strong>, and <strong>ScadaView — Amazon Workspace</strong>. The <strong>search</strong> box at the top jumps straight to any of them, so nothing is more than two clicks away.",
          voice: "Everything starts from this menu — Dashboard, Inventory, Insight List, Data Input, Task List, and Scada View. The search box jumps straight to any of them.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on <strong>(Summary Page) - Capacity 160 KLD</strong>. Everything below it is driven by three controls: the <strong>Page</strong> selector, the <strong>Granularity</strong>, and the <strong>From</strong> and <strong>To</strong> range. On the right sit <strong>refresh</strong>, a <strong>download</strong> that takes the whole page at once, the <strong>gear</strong> for page settings, <strong>Edit Page</strong> for the layout itself, and a <strong>share</strong> arrow.",
          voice: "The page selector, the granularity and the date range drive every widget below. On the right, refresh, a download for the whole page, page settings, and edit page for the layout.",
        },
        {
          label: 'Summary', title: 'The plant in one row',
          body: "<strong>Plant Health and Water Treatment Summary</strong> is the whole works in one row: <strong>STP Inlet 62.22 KL</strong>, <strong>Collection Tank to Main Collection Tank Flow 38.22</strong>, <strong>STP Outlet 62.29</strong>, <strong>Gardening Flow 2.06</strong>, <strong>Flushing Water Flow 42.67</strong> and <strong>Filter Backwash 0</strong>, then <strong>UF Permeate 23.54</strong> and <strong>UF Backwash 1.02</strong>. Every card carries the exact window it covers along its foot, so no number is ambiguous.",
          voice: "Inlet sixty two point two two K L against outlet sixty two point two nine, with gardening, flushing and backwash beside them. Every card stamps the window it covers.",
        },
        {
          label: 'Range', title: 'Pick a window',
          body: "Click the range and the picker opens. Presets run <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, three, seven, ten or thirty days, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars. <strong>Time Format</strong> switches between <strong>12</strong> and <strong>24 Hour</strong>, and <strong>Smart Hours</strong> re-applies one daily time slot across every date in the range — the same shift, every day of a month.",
          voice: "Presets from today out to six months, or pick your own dates. Smart hours re-applies one daily time slot across every date — the same shift, every day of a month.",
        },
        {
          label: 'Granularity', title: 'The granularity follows the window',
          body: "The <strong>Granularity</strong> list is not fixed — it changes with the window you ask for. Over a day it offers <strong>Hours</strong> and <strong>Days</strong>; stretch the range to a quarter and the same control offers <strong>Weeks</strong> and <strong>Months</strong> instead. You are never asked to plot three months by the hour, and never stuck reading a single shift in monthly buckets.",
          voice: "The granularity list changes with the window. Over a day it offers hours and days; over a quarter, weeks and months instead.",
        },
        {
          label: 'Quarter', title: 'The same page over a quarter',
          body: "With <strong>Months</strong> over the <strong>Last 3 Months</strong>, every card on the page re-computes without anything else changing: <strong>STP Inlet 32921.74 KL</strong>, <strong>5088.64</strong> into the main collection tank, <strong>STP Outlet 7000.04</strong>, <strong>Gardening 10002.66</strong>, <strong>Flushing 5536.89</strong> and <strong>Filter Backwash 3646.02</strong>, with <strong>UF Permeate 2998.54</strong> below. One control turns a shift report into a quarterly one.",
          voice: "Set to months over a quarter, every card re-computes — inlet thirty two thousand K L, outlet seven thousand. One control turns a shift report into a quarterly one.",
        },
        {
          label: 'Thresholds', title: 'The bands behind a gauge',
          body: "Every gauge carries its own bands, and the <strong>info</strong> icon shows them. <strong>Hydraulic Efficiency</strong> reads <strong>93.08%</strong>, and its <strong>Current Threshold Configuration</strong> spells out why the needle sits in green: <strong>Safe 80-100</strong>, <strong>Caution 70-80</strong>, <strong>Critical 0-70</strong>. The judgement is configured into the widget, so anyone reading the screen applies the same rule.",
          voice: "Hydraulic efficiency reads ninety three percent. Its threshold configuration spells out the bands — safe eighty to a hundred, caution seventy to eighty, critical below seventy.",
        },
        {
          label: 'Quality', title: 'Quality, against its reference',
          body: "<strong>Quality Parameter</strong> groups the lab-facing numbers. <strong>Outlet Turbidity</strong> sits at <strong>2.54</strong> in the green, and <strong>Aeration tank DO</strong> reads <strong>0.02</strong> — well under the <strong>Ref. 2-2.5 ppm</strong> printed in its own title, so the gauge shows it hard against the low end. <strong>Floc Detector</strong> is configured but has no data for this window, and says so rather than drawing a misleading line.",
          voice: "Outlet turbidity sits at two point five four in the green. Aeration tank D O reads zero point zero two against a reference of two to two point five, so the gauge pins it low.",
        },
        {
          label: 'Energy', title: 'What the plant drew',
          body: "<strong>Equipment Running and Energy Consumption</strong> opens with <strong>Total Energy Consumption</strong> as a cumulative curve across the day, climbing steadily to <strong>127.2</strong>. Because it is cumulative rather than instantaneous, a flat stretch means the plant stopped drawing — the shape itself tells you when it ran.",
          voice: "Total energy consumption climbs cumulatively across the day to one twenty seven point two. A flat stretch means the plant stopped drawing, so the shape tells you when it ran.",
        },
        {
          label: 'Hours', title: 'Hours, machine by machine',
          body: "<strong>Running Hours of each Equipment</strong> lays every machine against the window as a <strong>SENSOR × TIME</strong> table: <strong>Sewage Transfer Pump-2</strong> at <strong>6.9</strong> hours, <strong>Sludge Recirculation Pump-1</strong> at <strong>9.55</strong> and <strong>-2</strong> at <strong>11.67</strong>, <strong>Air Blower-1</strong> at <strong>19.85</strong>, while the collection transfer pumps sat at <strong>0</strong>. The widget's own toolbar carries a <strong>Filter</strong>, a <strong>download</strong>, <strong>expand</strong> and <strong>edit</strong>, so this table leaves as a CSV for whatever range is set above.",
          voice: "Every machine against the window — air blower one at nineteen point eight five hours, the collection transfer pumps at zero. Filter it, then download the table as a C S V.",
        },
        {
          label: 'Per KL', title: 'Per kilolitre, not just a total',
          body: "Beside the table, two cards close the loop: <strong>Energy per KL 2.17</strong> on a banded gauge, and <strong>Total Energy Consumption 127.2</strong> as a plain number. The per-kilolitre figure is the one that survives a change in flow — treat less water and the total falls on its own, but the cost of treating each kilolitre is what actually tells you whether the plant is running well.",
          voice: "Energy per kilolitre two point one seven, beside a total of one twenty seven point two. The per kilolitre figure is the one that survives a change in flow.",
        },
        {
          label: 'Saved view', title: 'Keep the view you built',
          body: "Any change you make to a page — a range, a chart type, a widget opened up — raises the <strong>Save Current View</strong> bar along the bottom. <strong>Save</strong> writes it back to the page you are on; <strong>Save As</strong> keeps it as a new one; <strong>Cancel</strong> throws it away. The layout you arrange for a morning review is there tomorrow morning too.",
          voice: "Any change raises the save current view bar. Save writes it back, save as keeps it as a new page, cancel throws it away.",
        },
        {
          label: 'Second page', title: 'A second page, a second view',
          body: "The <strong>Page</strong> selector holds more than one layout. <strong>Unified Detailed Analytics Page</strong> is the same plant arranged for a closer read: <strong>Plant Summary</strong> with <strong>STP Inlet 38.83</strong>, <strong>39.49</strong> transferred, <strong>STP Outlet 35.57</strong>, <strong>Gardening 2.06</strong> and <strong>Flushing 32.29</strong>, then <strong>Total Energy 92.13</strong>, <strong>Energy per KL 2.59</strong> and <strong>Hydraulic Efficiency 91.6%</strong> — and below it the treatment train, stage by stage.",
          voice: "The page selector holds more than one layout. The unified detailed analytics page is the same plant arranged for a closer read, with the treatment train below it.",
        },
        {
          label: 'Primary', title: 'Primary Treatment',
          body: "<strong>Primary Treatment</strong> starts at the front of the plant. <strong>Collection Tank Level</strong> plots <strong>Collection Tank (DED)</strong> against <strong>Main Collection Tank</strong> inside coloured reference bands — green is the working range, the pink above <strong>90%</strong> is not — and clicking a legend entry drops that series so you can read the other alone. <strong>STP Inlet Flow</strong> and <strong>STP Inlet Flow Totalizer</strong> sit beside it at <strong>38.83</strong>.",
          voice: "Collection tank level plots both tanks inside coloured reference bands — green is the working range, pink above ninety percent is not. Click a legend entry to drop a series.",
        },
        {
          label: 'Chart type', title: 'Table, or bar graph',
          body: "Hover any widget and the same toolbar appears: <strong>download</strong>, <strong>expand</strong>, a <strong>chart-type</strong> menu, <strong>edit</strong>, and <strong>info</strong>. The chart-type menu switches this line plot to a <strong>Table</strong> or a <strong>Bar Graph</strong> in one click — no dashboard rebuild, and nobody has to ask for a different view of a number that is already on screen.",
          voice: "Hover any widget for download, expand, chart type, edit and info. The chart type menu switches a line plot to a table or a bar graph in one click.",
        },
        {
          label: 'Bars', title: 'The same data, as bars',
          body: "Switched to <strong>Bar Graph</strong>, the same two series read as blocks: <strong>Collection Tank (DED)</strong> at <strong>48.51</strong> against <strong>Main Collection Tank</strong> at <strong>40.56</strong>. A line is better for the shape of a day; bars are better for comparing two tanks at a glance — the widget does both, and the choice travels with the saved view.",
          voice: "As bars, the same two series compare directly — collection tank forty eight point five one against main collection tank forty point five six.",
        },
        {
          label: 'Tanks', title: 'Levels, volumes, pressures',
          body: "Further down the train, <strong>Level of Tanks</strong> tracks <strong>Chlorine Contact</strong>, <strong>Treated Water</strong> and <strong>UF Treated Water</strong> at <strong>40.83</strong>, <strong>74.68</strong> and <strong>96.24%</strong>, while <strong>Volume of Effluent in Tanks</strong> turns those percentages into kilolitres — <strong>87.66</strong>, <strong>71.95</strong> and <strong>3.61 KL</strong>. Beside them, <strong>Pressure at MCF feed and UF Feed</strong> carries its own bands, so a rising filter pressure is visible before it becomes a problem.",
          voice: "Levels for all three tanks, the same tanks again in kilolitres, and filter pressures against their own bands — so a rising pressure shows before it becomes a problem.",
        },
        {
          label: 'Manual', title: 'Readings typed in by hand',
          body: "Not every number comes from a sensor. The <strong>Manual Data Input</strong> widget sits on the page beside the automatic ones, carrying <strong>Treated Water TDS</strong>, <strong>COD</strong>, <strong>BOD</strong> and <strong>TSS</strong> — lab results your team enters. Here they read <strong>No Data Available</strong> for the window, which is itself the useful signal: the lab entry for this period has not been made yet.",
          voice: "Not every number comes from a sensor. The manual data input widget carries treated water T D S, C O D, B O D and T S S — lab results your team enters by hand.",
        },
        {
          label: 'Trips', title: 'Tripped, or running',
          body: "<strong>Equipment Trip Status{1=Trip}</strong> is a straight audit of the whole machine list — every pump, blower, dosing pump and agitator, each reading <strong>0</strong> for the window, which is what a clean day looks like. Beside it the <strong>Current</strong> column shows what is running right now: <strong>Sludge Recirculation Pump-1</strong> and <strong>-2</strong> at <strong>1</strong>, the <strong>UV System</strong> at <strong>1</strong>, the garden pumps at <strong>0</strong>.",
          voice: "Trip status runs the whole machine list at zero — what a clean day looks like. Beside it, the current column shows what is running right now.",
        },
        {
          label: 'Pumps', title: 'On, or off, all day',
          body: "The same machines get plotted as one-or-zero lines, which is often easier to read than a table. <strong>UV System Status</strong> climbs from <strong>0</strong> to <strong>1</strong>; <strong>Flushing Transfer Pump Status</strong> shows pump <strong>1</strong> and pump <strong>2</strong> crossing as one takes over from the other; <strong>Gardening Pump Status</strong> stays flat at <strong>0</strong>. A handover, or a machine carrying the whole load, shows up in the shape.",
          voice: "The same machines as one or zero lines. The two flushing transfer pumps cross as one takes over from the other — a handover you can see in the shape.",
        },
        {
          label: 'Inventory', title: 'What the store is using',
          body: "<strong>Inventory</strong> lists the consumables for the <strong>Amazon MDEA</strong> store — <strong>Urea</strong>, <strong>DAP</strong>, <strong>Chlorine Balance</strong>, <strong>Poly</strong>, <strong>Caustic</strong> and <strong>HCL</strong> — with <strong>Stock Available</strong>, <strong>Last Consumption</strong>, and consumption compared as <strong>Actual</strong> against <strong>Expected</strong>. The expected rate is per item and per period — <strong>1 Kg a day</strong> for urea, <strong>0.5</strong> for DAP, <strong>2 L every 15 days</strong> for caustic — so drift is measured against a real target, not a guess.",
          voice: "Inventory lists every chemical with stock, last consumption, and actual against expected. The expected rate is per item — one kilo a day for urea, two litres a fortnight for caustic.",
        },
        {
          label: 'Categories', title: 'Not only chemicals',
          body: "The <strong>filter</strong> beside the search box opens the category list, and the store holds more than dosing chemicals: <strong>Chemicals</strong>, <strong>Consumables</strong>, <strong>Electronic Spares</strong>, <strong>Mechanical Spares</strong>, <strong>Tools</strong> and <strong>Tools For Cleaning</strong>. Tick one to narrow the table, or search by name — the flag beside an item marks the ones wanting attention.",
          voice: "The filter opens the category list — chemicals, consumables, electronic and mechanical spares, tools. Tick one to narrow the table, or search by name.",
        },
        {
          label: 'Insights', title: 'What the platform found',
          body: "<strong>Insight List</strong> is where the system's own findings collect, and the counters tell you the shape of it at a glance: <strong>2785 All Insights</strong>, <strong>06 Open Alarms</strong>, <strong>2779 Closed Alarms</strong>, <strong>00 Achievements</strong>. Nearly everything raised has been closed — the six that are open are the ones that want attention today.",
          voice: "Two thousand seven hundred and eighty five insights, six open alarms, two thousand seven hundred and seventy nine closed. The six open ones are today's work.",
        },
        {
          label: 'Findings', title: 'Each one says what to do',
          body: "Each row is a finding in plain words with the reasoning under it: <em>“Filter Feed pumps are running in manual mode”</em> — because manual running means manpower and risk of failure; <em>“CCT tank level is greater than 80% and Treated water tank level is less than 90% but both filter feed pumps are OFF”</em>, which would lead to tank overflow; <em>“ACF inlet pressure is above 2 kg/cm2”</em>. Each carries its <strong>Priority</strong>, its <strong>Asset</strong>, and a <strong>Type of Insight</strong> badge.",
          voice: "Each finding is in plain words with the reasoning under it — filter feed pumps running in manual mode, tank levels that would lead to overflow, filter pressure above two kilos.",
        },
        {
          label: 'Filters', title: 'Narrow them down',
          body: "Above the list, <strong>Type of Insight</strong>, <strong>Priority</strong> and <strong>Relative Time</strong> narrow what you are looking at, with a <strong>From</strong>–<strong>To</strong> range and <strong>Workspace</strong> and <strong>Asset</strong> filters beside them. <strong>+ Create Insight</strong> adds one by hand, for the findings that come from a person walking the plant rather than from the data.",
          voice: "Type, priority and relative time narrow the list, with workspace and asset filters beside them. Create insight adds one by hand.",
        },
        {
          label: 'Tasks', title: 'The work that follows',
          body: "<strong>Task List</strong> is where a finding becomes a job. Each row carries a <strong>Plant Name</strong>, a <strong>Priority Level</strong>, an <strong>Assignee</strong>, the <strong>Task Skills</strong> it needs — <strong>Operator</strong>, <strong>Mechanical</strong>, <strong>Electrical</strong> — and a <strong>Completion Status</strong>. <em>“Ensure Blowers are running in Auto mode”</em> and <em>“Check if filter feed pumps are running in Auto mode”</em> sit at <strong>High</strong>, both <strong>PENDING</strong>. Filter by plant, user, skill or status, and <strong>+ Add Task</strong> raises a new one.",
          voice: "Task list is where a finding becomes a job — with a priority, an assignee, the skills it needs, and a completion status. Filter by plant, user, skill or status.",
        },
        {
          label: 'ScadaView', title: 'ScadaView — the plant, live',
          body: "<strong>ScadaView — Amazon Workspace</strong> opens the plant as a single diagram with a <strong>LIVE</strong> badge and the timestamp of the last reading. The whole treatment train is on one canvas, from the collection tanks at the left through the MBBRs, tube settler and chlorine contact tank to the filters and treated water tanks at the right. <strong>Group Control</strong>, <strong>Unit Processes</strong> and <strong>Select Page</strong> sit in the bar above it.",
          voice: "Scada View opens the whole plant as one live diagram, from the collection tanks at the left through to the treated water tanks at the right.",
        },
        {
          label: 'Diagram', title: 'Right down to one pump',
          body: "Zoom in and every unit carries its own live state. <strong>MBBR 1</strong> and <strong>2</strong>, the <strong>Tube Settler</strong>, the <strong>Chlorine Contact Tank</strong>, the <strong>Poly Dosing Tank</strong> and the <strong>Pressure Sand Filter</strong> are all drawn as themselves, and each pump carries an <strong>ON/OFF</strong> marker — green for running, red for stopped. <strong>Sludge Recirculation Pump-1</strong> is on while <strong>-2</strong> is off, and the tank gauge at the left fills to its real level.",
          voice: "Zoomed in, each unit carries its live state and every pump an on-off marker — green for running, red for stopped, with tanks filled to their real level.",
        },
        {
          label: 'Data Input', title: 'Lab readings, typed in',
          body: "<strong>Data Input</strong> is the form behind those manual numbers. Each sensor row carries its <strong>Valid Range</strong> and <strong>Safe Range</strong>, an <strong>Enter Value</strong> box, a <strong>Media</strong> column for a photo where one is required, the <strong>Frequency</strong> it is expected at, the <strong>Last Value</strong> with its timestamp, and a <strong>Status</strong>. <strong>TDS</strong> is due <strong>once a day</strong> and shows <strong>Pending</strong>; <strong>COD</strong> and <strong>BOD</strong> monthly. <strong>Upload File</strong> takes a whole sheet at once.",
          voice: "Each sensor row carries its valid and safe range, the frequency it is expected at, the last value, and a status. Upload file takes a whole sheet at once.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the shift — flow, quality, energy and efficiency in one scroll, on whichever page suits the question. <strong>Insight List</strong> for what the platform has spotted, <strong>Task List</strong> for the work that follows. <strong>Inventory</strong> for what the store is consuming, <strong>Data Input</strong> for the readings that arrive by hand, and <strong>ScadaView</strong> when you want to watch the plant run. One page selector, one granularity, one date range — and everything follows.",
          voice: "Dashboard for the shift, Insights for what was spotted, Tasks for the work that follows, Inventory and Data Input for the rest, and Scada View to watch it run.",
        },
      ],
    },
    hi: {
      title: 'अमेज़न MDEA,<br><em>160 KLD, शुरू से अंत तक।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का विस्तृत दौरा — डैशबोर्ड विजेट-दर-विजेट, उसके पीछे की ट्रीटमेंट ट्रेन, और साथ चलने वाले इनसाइट, टास्क व डायग्राम।',
      chapter: 'डेमो · अमेज़न MDEA (160 KLD)',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और आपकी हर स्क्रीन वहीं है: <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>डेटा इनपुट</strong>, <strong>टास्क लिस्ट</strong>, और <strong>स्काडाव्यू — अमेज़न वर्कस्पेस</strong>। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है, इसलिए कुछ भी दो क्लिक से दूर नहीं।",
          voice: "सब कुछ इसी मेन्यू से — डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट, और स्काडा व्यू। सर्च बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>(समरी पेज) - कैपेसिटी 160 KLD</strong> पर खुलता है। नीचे का सब कुछ तीन कंट्रोल से चलता है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong>, और <strong>फ्रॉम</strong> व <strong>टू</strong> की समय सीमा। दाईं ओर <strong>रिफ़्रेश</strong>, पूरा पेज एक साथ लेने वाला <strong>डाउनलोड</strong>, सेटिंग्स का <strong>गियर</strong>, लेआउट के लिए <strong>एडिट पेज</strong>, और एक <strong>शेयर</strong> तीर है।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा नीचे का हर विजेट चलाते हैं। दाईं ओर रिफ़्रेश, पूरे पेज का डाउनलोड, सेटिंग्स, और लेआउट के लिए एडिट पेज।",
        },
        {
          label: 'सारांश', title: 'पूरा प्लांट एक पंक्ति में',
          body: "<strong>प्लांट हेल्थ एंड वॉटर ट्रीटमेंट समरी</strong> पूरा काम एक पंक्ति में रखती है: <strong>STP इनलेट 62.22 KL</strong>, <strong>कलेक्शन टैंक से मेन कलेक्शन टैंक फ़्लो 38.22</strong>, <strong>STP आउटलेट 62.29</strong>, <strong>गार्डनिंग फ़्लो 2.06</strong>, <strong>फ़्लशिंग वॉटर फ़्लो 42.67</strong> और <strong>फ़िल्टर बैकवॉश 0</strong>, फिर <strong>UF परमिएट 23.54</strong> तथा <strong>UF बैकवॉश 1.02</strong>। हर कार्ड के नीचे उसकी सटीक अवधि अंकित है।",
          voice: "इनलेट बासठ दशमलव दो दो के एल और आउटलेट बासठ दशमलव दो नौ, साथ में गार्डनिंग, फ़्लशिंग और बैकवॉश। हर कार्ड अपनी अवधि अंकित करता है।",
        },
        {
          label: 'समय सीमा', title: 'अवधि चुनिए',
          body: "समय सीमा पर क्लिक करने से पिकर खुलता है: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 आवर्स</strong>, तीन, सात, दस या तीस दिन, <strong>3</strong> या <strong>6 महीने</strong>, या दो कैलेंडरों पर <strong>कस्टम</strong>। <strong>टाइम फ़ॉर्मैट</strong> <strong>12</strong> और <strong>24 घंटे</strong> में बदलता है, और <strong>स्मार्ट आवर्स</strong> उसी दैनिक समय-खंड को सीमा की हर तारीख पर लागू करती है — यानी महीने भर की एक ही शिफ़्ट।",
          voice: "आज से छह महीने तक के प्रीसेट, या अपनी तारीखें। स्मार्ट आवर्स उसी दैनिक समय-खंड को हर तारीख पर लागू करती है — महीने भर की एक ही शिफ़्ट।",
        },
        {
          label: 'ग्रैन्युलैरिटी', title: 'ग्रैन्युलैरिटी अवधि के साथ चलती है',
          body: "<strong>ग्रैन्युलैरिटी</strong> की सूची स्थिर नहीं — वह आपकी माँगी अवधि के साथ बदलती है। एक दिन पर वह <strong>घंटे</strong> और <strong>दिन</strong> देती है; सीमा तिमाही तक खींचिए तो वही कंट्रोल <strong>सप्ताह</strong> और <strong>महीने</strong> देने लगता है। न तीन महीने घंटे-दर-घंटे बनाने पड़ते हैं, न एक शिफ़्ट महीनों के खानों में पढ़नी पड़ती है।",
          voice: "ग्रैन्युलैरिटी की सूची अवधि के साथ बदलती है। एक दिन पर घंटे और दिन; तिमाही पर सप्ताह और महीने।",
        },
        {
          label: 'तिमाही', title: 'वही पेज, एक तिमाही पर',
          body: "<strong>महीने</strong> और <strong>लास्ट 3 मंथ्स</strong> पर, पेज का हर कार्ड बिना और कुछ बदले फिर से गणना करता है: <strong>STP इनलेट 32921.74 KL</strong>, मेन कलेक्शन टैंक में <strong>5088.64</strong>, <strong>STP आउटलेट 7000.04</strong>, <strong>गार्डनिंग 10002.66</strong>, <strong>फ़्लशिंग 5536.89</strong> और <strong>फ़िल्टर बैकवॉश 3646.02</strong>, नीचे <strong>UF परमिएट 2998.54</strong>। एक कंट्रोल शिफ़्ट-रिपोर्ट को तिमाही रिपोर्ट बना देता है।",
          voice: "महीनों पर सेट करते ही हर कार्ड फिर से गणना करता है — इनलेट बत्तीस हज़ार के एल, आउटलेट सात हज़ार। एक कंट्रोल शिफ़्ट रिपोर्ट को तिमाही बना देता है।",
        },
        {
          label: 'सीमाएँ', title: 'गेज के पीछे की पट्टियाँ',
          body: "हर गेज की अपनी पट्टियाँ हैं, और <strong>info</strong> आइकन उन्हें दिखाता है। <strong>हाइड्रॉलिक एफ़िशिएंसी</strong> <strong>93.08%</strong> पढ़ती है, और उसका <strong>करंट थ्रेशोल्ड कॉन्फ़िगरेशन</strong> बताता है कि सुई हरे में क्यों है: <strong>सेफ़ 80-100</strong>, <strong>कॉशन 70-80</strong>, <strong>क्रिटिकल 0-70</strong>। निर्णय विजेट में ही तय है, इसलिए स्क्रीन पढ़ने वाला हर व्यक्ति एक ही नियम लगाता है।",
          voice: "हाइड्रॉलिक एफ़िशिएंसी तिरानवे प्रतिशत पढ़ती है। उसका थ्रेशोल्ड कॉन्फ़िगरेशन पट्टियाँ बताता है — सेफ़ अस्सी से सौ, कॉशन सत्तर से अस्सी, क्रिटिकल सत्तर से नीचे।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भ के सामने',
          body: "<strong>क्वालिटी पैरामीटर</strong> लैब से जुड़े आँकड़े समूहित करता है। <strong>आउटलेट टर्बिडिटी</strong> हरे में <strong>2.54</strong> पर है, और <strong>एरेशन टैंक DO</strong> <strong>0.02</strong> पढ़ता है — अपने ही शीर्षक में छपे <strong>Ref. 2-2.5 ppm</strong> से काफ़ी नीचे, इसलिए गेज उसे निचले सिरे पर दिखाता है। <strong>फ़्लॉक डिटेक्टर</strong> कॉन्फ़िगर है पर इस अवधि का डेटा नहीं, और यह भ्रामक रेखा खींचने के बजाय साफ़ कह देता है।",
          voice: "आउटलेट टर्बिडिटी हरे में दो दशमलव पाँच चार पर। एरेशन टैंक डी ओ दो से ढाई के संदर्भ के सामने शून्य दशमलव शून्य दो, इसलिए गेज उसे नीचे दिखाता है।",
        },
        {
          label: 'ऊर्जा', title: 'प्लांट ने कितनी खींची',
          body: "<strong>इक्विपमेंट रनिंग एंड एनर्जी कंजम्पशन</strong> <strong>टोटल एनर्जी कंजम्पशन</strong> से शुरू होता है — दिन भर की संचयी रेखा, जो लगातार चढ़कर <strong>127.2</strong> पर पहुँचती है। यह तात्कालिक नहीं बल्कि संचयी है, इसलिए सपाट हिस्सा बताता है कि प्लांट ने खींचना बंद किया — आकार ही बता देता है कि वह कब चला।",
          voice: "टोटल एनर्जी कंजम्पशन दिन भर संचयी रूप से चढ़कर एक सौ सत्ताईस दशमलव दो पर पहुँचती है। सपाट हिस्सा बताता है कि प्लांट कब रुका।",
        },
        {
          label: 'घंटे', title: 'घंटे, मशीन-दर-मशीन',
          body: "<strong>रनिंग ऑवर्स ऑफ़ ईच इक्विपमेंट</strong> हर मशीन को अवधि के सामने <strong>SENSOR × TIME</strong> तालिका में रखता है: <strong>सीवेज ट्रांसफ़र पंप-2</strong> <strong>6.9</strong> घंटे, <strong>स्लज रीसर्कुलेशन पंप-1</strong> <strong>9.55</strong> और <strong>-2</strong> <strong>11.67</strong>, <strong>एयर ब्लोअर-1</strong> <strong>19.85</strong>, जबकि कलेक्शन ट्रांसफ़र पंप <strong>0</strong> पर रहे। विजेट के अपने टूलबार में <strong>फ़िल्टर</strong>, <strong>डाउनलोड</strong>, <strong>एक्सपैंड</strong> और <strong>एडिट</strong> हैं, इसलिए यह तालिका ऊपर सेट सीमा के लिए CSV बनकर निकलती है।",
          voice: "हर मशीन अवधि के सामने — एयर ब्लोअर एक उन्नीस दशमलव आठ पाँच घंटे, कलेक्शन ट्रांसफ़र पंप शून्य पर। फ़िल्टर कीजिए, फिर तालिका CSV में उतार लीजिए।",
        },
        {
          label: 'प्रति KL', title: 'प्रति किलोलीटर, केवल कुल नहीं',
          body: "तालिका के बगल में दो कार्ड हिसाब पूरा करते हैं: पट्टीदार गेज पर <strong>एनर्जी पर KL 2.17</strong>, और सादा आँकड़ा <strong>टोटल एनर्जी कंजम्पशन 127.2</strong>। प्रवाह बदलने पर भी टिकने वाला आँकड़ा प्रति-किलोलीटर वाला है — कम पानी शोधित करें तो कुल अपने आप गिर जाएगा, पर हर किलोलीटर की लागत ही बताती है कि प्लांट ठीक चल रहा है या नहीं।",
          voice: "प्रति किलोलीटर दो दशमलव एक सात, और कुल एक सौ सत्ताईस दशमलव दो। प्रवाह बदलने पर टिकने वाला आँकड़ा प्रति किलोलीटर वाला है।",
        },
        {
          label: 'सेव व्यू', title: 'बनाया हुआ दृश्य सहेजिए',
          body: "पेज में किया हर बदलाव — सीमा, चार्ट का प्रकार, खोला हुआ विजेट — नीचे <strong>सेव करंट व्यू</strong> पट्टी ले आता है। <strong>सेव</strong> उसे उसी पेज पर लिख देता है; <strong>सेव ऐज़</strong> नया पेज बना देता है; <strong>कैंसिल</strong> उसे हटा देता है। सुबह की समीक्षा के लिए बनाया लेआउट अगली सुबह भी वहीं मिलेगा।",
          voice: "हर बदलाव सेव करंट व्यू पट्टी ले आता है। सेव उसे वापस लिखता है, सेव ऐज़ नया पेज बनाता है, कैंसिल हटा देता है।",
        },
        {
          label: 'दूसरा पेज', title: 'दूसरा पेज, दूसरा नज़रिया',
          body: "<strong>पेज</strong> सिलेक्टर में एक से ज़्यादा लेआउट हैं। <strong>यूनिफ़ाइड डिटेल्ड एनालिटिक्स पेज</strong> वही प्लांट है, बस गहराई से पढ़ने के लिए सजाया हुआ: <strong>प्लांट समरी</strong> में <strong>STP इनलेट 38.83</strong>, <strong>39.49</strong> स्थानांतरित, <strong>STP आउटलेट 35.57</strong>, <strong>गार्डनिंग 2.06</strong> और <strong>फ़्लशिंग 32.29</strong>, फिर <strong>टोटल एनर्जी 92.13</strong>, <strong>एनर्जी पर KL 2.59</strong> और <strong>हाइड्रॉलिक एफ़िशिएंसी 91.6%</strong> — और नीचे चरण-दर-चरण ट्रीटमेंट ट्रेन।",
          voice: "पेज सिलेक्टर में एक से ज़्यादा लेआउट हैं। यूनिफ़ाइड डिटेल्ड एनालिटिक्स पेज वही प्लांट है, गहराई से पढ़ने के लिए सजाया हुआ।",
        },
        {
          label: 'प्राथमिक', title: 'प्राइमरी ट्रीटमेंट',
          body: "<strong>प्राइमरी ट्रीटमेंट</strong> प्लांट के आरंभ से शुरू होता है। <strong>कलेक्शन टैंक लेवल</strong> <strong>कलेक्शन टैंक (DED)</strong> को <strong>मेन कलेक्शन टैंक</strong> के सामने रंगीन संदर्भ पट्टियों में रखता है — हरा कार्यशील सीमा है, <strong>90%</strong> से ऊपर का गुलाबी नहीं — और लेजेंड पर क्लिक करके कोई सीरीज़ हटाकर दूसरी अकेले पढ़ी जा सकती है। बगल में <strong>STP इनलेट फ़्लो</strong> और <strong>टोटलाइज़र</strong> <strong>38.83</strong> पर।",
          voice: "कलेक्शन टैंक लेवल दोनों टैंकों को रंगीन संदर्भ पट्टियों में रखता है — हरा कार्यशील सीमा, नब्बे से ऊपर गुलाबी। लेजेंड पर क्लिक करके कोई सीरीज़ हटाइए।",
        },
        {
          label: 'चार्ट', title: 'टेबल, या बार ग्राफ़',
          body: "किसी भी विजेट पर हॉवर कीजिए और वही टूलबार आता है: <strong>डाउनलोड</strong>, <strong>एक्सपैंड</strong>, <strong>चार्ट-टाइप</strong> मेन्यू, <strong>एडिट</strong>, और <strong>info</strong>। चार्ट-टाइप मेन्यू इस लाइन प्लॉट को एक क्लिक में <strong>टेबल</strong> या <strong>बार ग्राफ़</strong> बना देता है — कोई डैशबोर्ड दोबारा नहीं बनाना पड़ता।",
          voice: "किसी भी विजेट पर हॉवर कीजिए — डाउनलोड, एक्सपैंड, चार्ट टाइप, एडिट, info। मेन्यू लाइन प्लॉट को एक क्लिक में टेबल या बार ग्राफ़ बना देता है।",
        },
        {
          label: 'बार', title: 'वही डेटा, बार में',
          body: "<strong>बार ग्राफ़</strong> पर बदलते ही वही दो सीरीज़ ब्लॉक बन जाती हैं: <strong>कलेक्शन टैंक (DED)</strong> <strong>48.51</strong> और <strong>मेन कलेक्शन टैंक</strong> <strong>40.56</strong>। दिन के आकार के लिए रेखा बेहतर है; दो टैंकों की तुलना एक नज़र में करनी हो तो बार — विजेट दोनों करता है, और चुनाव सहेजे गए व्यू के साथ चलता है।",
          voice: "बार में वही दो सीरीज़ सीधे तुलना करती हैं — कलेक्शन टैंक अड़तालीस दशमलव पाँच एक और मेन कलेक्शन टैंक चालीस दशमलव पाँच छह।",
        },
        {
          label: 'टैंक', title: 'स्तर, मात्रा, दबाव',
          body: "आगे चलकर <strong>लेवल ऑफ़ टैंक्स</strong> <strong>क्लोरीन कॉन्टैक्ट</strong>, <strong>ट्रीटेड वॉटर</strong> और <strong>UF ट्रीटेड वॉटर</strong> को <strong>40.83</strong>, <strong>74.68</strong> और <strong>96.24%</strong> पर रखता है, जबकि <strong>वॉल्यूम ऑफ़ एफ़्लुएंट इन टैंक्स</strong> उन्हीं प्रतिशतों को किलोलीटर में बदल देता है — <strong>87.66</strong>, <strong>71.95</strong> और <strong>3.61 KL</strong>। बगल में <strong>MCF फ़ीड व UF फ़ीड का दबाव</strong> अपनी पट्टियों के साथ, ताकि बढ़ता फ़िल्टर दबाव समस्या बनने से पहले दिखे।",
          voice: "तीनों टैंकों के स्तर, वही टैंक किलोलीटर में, और फ़िल्टर दबाव अपनी पट्टियों के सामने — ताकि बढ़ता दबाव समस्या बनने से पहले दिखे।",
        },
        {
          label: 'मैनुअल', title: 'हाथ से भरी जाने वाली रीडिंग',
          body: "हर आँकड़ा सेंसर से नहीं आता। <strong>मैनुअल डेटा इनपुट</strong> विजेट स्वचालित विजेटों के बगल में ही बैठा है, और उसमें <strong>ट्रीटेड वॉटर TDS</strong>, <strong>COD</strong>, <strong>BOD</strong> व <strong>TSS</strong> हैं — आपकी टीम द्वारा दर्ज लैब परिणाम। यहाँ वे इस अवधि के लिए <strong>नो डेटा अवेलेबल</strong> पढ़ते हैं, जो स्वयं उपयोगी संकेत है: इस अवधि की लैब प्रविष्टि अभी नहीं हुई।",
          voice: "हर आँकड़ा सेंसर से नहीं आता। मैनुअल डेटा इनपुट विजेट में ट्रीटेड वॉटर टी डी एस, सी ओ डी, बी ओ डी और टी एस एस हैं — हाथ से दर्ज लैब परिणाम।",
        },
        {
          label: 'ट्रिप', title: 'ट्रिप, या चालू',
          body: "<strong>इक्विपमेंट ट्रिप स्टेटस{1=Trip}</strong> पूरी मशीन-सूची का सीधा ऑडिट है — हर पंप, ब्लोअर, डोज़िंग पंप और एजिटेटर, सब इस अवधि में <strong>0</strong> पढ़ रहे हैं, यानी एक साफ़ दिन। बगल का <strong>करंट</strong> कॉलम बताता है कि इस समय क्या चल रहा है: <strong>स्लज रीसर्कुलेशन पंप-1</strong> व <strong>-2</strong> <strong>1</strong> पर, <strong>UV सिस्टम</strong> <strong>1</strong> पर, गार्डन पंप <strong>0</strong> पर।",
          voice: "ट्रिप स्टेटस पूरी मशीन सूची शून्य पर रखता है — एक साफ़ दिन। बगल का करंट कॉलम बताता है कि इस समय क्या चल रहा है।",
        },
        {
          label: 'पंप', title: 'दिन भर, चालू या बंद',
          body: "वही मशीनें एक-या-शून्य रेखाओं में भी बनती हैं, जो अक्सर तालिका से आसान पढ़ी जाती हैं। <strong>UV सिस्टम स्टेटस</strong> <strong>0</strong> से <strong>1</strong> तक चढ़ता है; <strong>फ़्लशिंग ट्रांसफ़र पंप स्टेटस</strong> में पंप <strong>1</strong> और <strong>2</strong> एक-दूसरे को भार सौंपते हुए कटते हैं; <strong>गार्डनिंग पंप स्टेटस</strong> <strong>0</strong> पर सपाट रहता है। भार सौंपना, या किसी एक मशीन का पूरा भार ढोना, आकार में ही दिख जाता है।",
          voice: "वही मशीनें एक या शून्य रेखाओं में। दोनों फ़्लशिंग ट्रांसफ़र पंप एक-दूसरे को भार सौंपते हुए कटते हैं — यह आकार में ही दिख जाता है।",
        },
        {
          label: 'इन्वेंटरी', title: 'स्टोर क्या खर्च कर रहा है',
          body: "<strong>इन्वेंटरी</strong> <strong>अमेज़न MDEA</strong> स्टोर की उपभोग्य वस्तुएँ दिखाती है — <strong>यूरिया</strong>, <strong>DAP</strong>, <strong>क्लोरीन बैलेंस</strong>, <strong>पॉली</strong>, <strong>कॉस्टिक</strong> और <strong>HCL</strong> — साथ में <strong>स्टॉक अवेलेबल</strong>, <strong>लास्ट कंजम्पशन</strong>, और खपत की तुलना <strong>एक्चुअल</strong> बनाम <strong>एक्सपेक्टेड</strong>। अपेक्षित दर हर वस्तु और अवधि के हिसाब से है — यूरिया <strong>1 किलो प्रतिदिन</strong>, DAP <strong>0.5</strong>, कॉस्टिक <strong>2 लीटर हर 15 दिन</strong> — इसलिए भटकाव अनुमान से नहीं, असली लक्ष्य से नापा जाता है।",
          voice: "इन्वेंटरी हर केमिकल को स्टॉक, पिछली खपत और एक्चुअल बनाम एक्सपेक्टेड के साथ दिखाती है। अपेक्षित दर हर वस्तु की अपनी है — यूरिया एक किलो प्रतिदिन।",
        },
        {
          label: 'श्रेणियाँ', title: 'केवल केमिकल नहीं',
          body: "सर्च बॉक्स के बगल का <strong>फ़िल्टर</strong> श्रेणी-सूची खोलता है, और स्टोर में डोज़िंग केमिकल से कहीं अधिक है: <strong>केमिकल्स</strong>, <strong>कंज़्यूमेबल्स</strong>, <strong>इलेक्ट्रॉनिक स्पेयर्स</strong>, <strong>मैकेनिकल स्पेयर्स</strong>, <strong>टूल्स</strong> और <strong>टूल्स फ़ॉर क्लीनिंग</strong>। किसी एक पर टिक करके तालिका सीमित कीजिए, या नाम से खोजिए — नाम के बगल का निशान ध्यान माँगती वस्तुएँ दिखाता है।",
          voice: "फ़िल्टर श्रेणी सूची खोलता है — केमिकल्स, कंज़्यूमेबल्स, इलेक्ट्रॉनिक व मैकेनिकल स्पेयर्स, टूल्स। किसी एक पर टिक कीजिए, या नाम से खोजिए।",
        },
        {
          label: 'इनसाइट', title: 'प्लेटफ़ॉर्म को क्या मिला',
          body: "<strong>इनसाइट लिस्ट</strong> वह जगह है जहाँ सिस्टम के अपने निष्कर्ष जमा होते हैं, और गिनतियाँ एक नज़र में पूरा स्वरूप बता देती हैं: <strong>2785 ऑल इनसाइट्स</strong>, <strong>06 ओपन अलार्म्स</strong>, <strong>2779 क्लोज़्ड अलार्म्स</strong>, <strong>00 अचीवमेंट्स</strong>। उठाया गया लगभग सब कुछ बंद हो चुका है — खुले छह ही आज ध्यान माँगते हैं।",
          voice: "दो हज़ार सात सौ पचासी इनसाइट, छह खुले अलार्म, दो हज़ार सात सौ उन्यासी बंद। खुले छह ही आज का काम हैं।",
        },
        {
          label: 'निष्कर्ष', title: 'हर एक बताता है क्या करना है',
          body: "हर पंक्ति सरल शब्दों में एक निष्कर्ष है, और नीचे उसका कारण: <em>“फ़िल्टर फ़ीड पंप मैनुअल मोड में चल रहे हैं”</em> — क्योंकि मैनुअल चलाना श्रम और विफलता का जोखिम बढ़ाता है; <em>“CCT टैंक स्तर 80% से ऊपर और ट्रीटेड वॉटर टैंक 90% से नीचे है, पर दोनों फ़िल्टर फ़ीड पंप बंद हैं”</em>, जिससे टैंक ओवरफ़्लो होगा; <em>“ACF इनलेट प्रेशर 2 kg/cm2 से ऊपर है”</em>। हर एक के साथ <strong>प्रायोरिटी</strong>, <strong>एसेट</strong> और <strong>टाइप ऑफ़ इनसाइट</strong> बैज है।",
          voice: "हर निष्कर्ष सरल शब्दों में है, नीचे उसका कारण — फ़िल्टर फ़ीड पंप मैनुअल में, टैंक स्तर जो ओवरफ़्लो कराएँगे, फ़िल्टर दबाव दो किलो से ऊपर।",
        },
        {
          label: 'फ़िल्टर', title: 'सूची सीमित कीजिए',
          body: "सूची के ऊपर <strong>टाइप ऑफ़ इनसाइट</strong>, <strong>प्रायोरिटी</strong> और <strong>रिलेटिव टाइम</strong> दिखाई देने वाली सामग्री सीमित करते हैं, साथ में <strong>फ्रॉम</strong>–<strong>टू</strong> सीमा तथा <strong>वर्कस्पेस</strong> व <strong>एसेट</strong> फ़िल्टर। <strong>+ क्रिएट इनसाइट</strong> हाथ से एक जोड़ता है — उन निष्कर्षों के लिए जो डेटा से नहीं, प्लांट में घूमते व्यक्ति से आते हैं।",
          voice: "टाइप, प्रायोरिटी और रिलेटिव टाइम सूची सीमित करते हैं, साथ में वर्कस्पेस व एसेट फ़िल्टर। क्रिएट इनसाइट हाथ से एक जोड़ता है।",
        },
        {
          label: 'टास्क', title: 'उसके बाद का काम',
          body: "<strong>टास्क लिस्ट</strong> वह जगह है जहाँ निष्कर्ष काम बन जाता है। हर पंक्ति में <strong>प्लांट नेम</strong>, <strong>प्रायोरिटी लेवल</strong>, <strong>असाइनी</strong>, आवश्यक <strong>टास्क स्किल्स</strong> — <strong>ऑपरेटर</strong>, <strong>मैकेनिकल</strong>, <strong>इलेक्ट्रिकल</strong> — और <strong>कंप्लीशन स्टेटस</strong> है। <em>“ब्लोअर ऑटो मोड में चल रहे हैं यह सुनिश्चित करें”</em> और <em>“फ़िल्टर फ़ीड पंप ऑटो मोड में हैं या नहीं जाँचें”</em> <strong>हाई</strong> पर हैं, दोनों <strong>PENDING</strong>। प्लांट, यूज़र, स्किल या स्टेटस से छाँटिए, और <strong>+ ऐड टास्क</strong> नया उठाता है।",
          voice: "टास्क लिस्ट वह जगह है जहाँ निष्कर्ष काम बन जाता है — प्रायोरिटी, असाइनी, आवश्यक स्किल और कंप्लीशन स्टेटस के साथ।",
        },
        {
          label: 'स्काडाव्यू', title: 'स्काडाव्यू — प्लांट, लाइव',
          body: "<strong>स्काडाव्यू — अमेज़न वर्कस्पेस</strong> पूरे प्लांट को एक ही डायग्राम में खोलता है, <strong>LIVE</strong> बैज और आख़िरी रीडिंग के समय के साथ। पूरी ट्रीटमेंट ट्रेन एक कैनवास पर है — बाईं ओर के कलेक्शन टैंकों से MBBR, ट्यूब सेटलर और क्लोरीन कॉन्टैक्ट टैंक होते हुए दाईं ओर फ़िल्टर और ट्रीटेड वॉटर टैंक तक। ऊपर की पट्टी में <strong>ग्रुप कंट्रोल</strong>, <strong>यूनिट प्रोसेसेज़</strong> और <strong>सिलेक्ट पेज</strong> हैं।",
          voice: "स्काडा व्यू पूरे प्लांट को एक ही लाइव डायग्राम में खोलता है — बाईं ओर के कलेक्शन टैंकों से दाईं ओर के ट्रीटेड वॉटर टैंकों तक।",
        },
        {
          label: 'डायग्राम', title: 'एक पंप तक',
          body: "ज़ूम कीजिए और हर इकाई अपनी लाइव स्थिति दिखाती है। <strong>MBBR 1</strong> व <strong>2</strong>, <strong>ट्यूब सेटलर</strong>, <strong>क्लोरीन कॉन्टैक्ट टैंक</strong>, <strong>पॉली डोज़िंग टैंक</strong> और <strong>प्रेशर सैंड फ़िल्टर</strong> अपने ही रूप में बने हैं, और हर पंप पर <strong>ON/OFF</strong> निशान है — चालू के लिए हरा, बंद के लिए लाल। <strong>स्लज रीसर्कुलेशन पंप-1</strong> चालू है जबकि <strong>-2</strong> बंद, और बाईं ओर का टैंक गेज अपने असली स्तर तक भरा है।",
          voice: "ज़ूम करने पर हर इकाई अपनी लाइव स्थिति दिखाती है और हर पंप पर ऑन-ऑफ़ निशान — चालू के लिए हरा, बंद के लिए लाल।",
        },
        {
          label: 'डेटा इनपुट', title: 'लैब रीडिंग, हाथ से',
          body: "<strong>डेटा इनपुट</strong> उन मैनुअल आँकड़ों के पीछे का फ़ॉर्म है। हर सेंसर पंक्ति में उसकी <strong>वैलिड रेंज</strong> और <strong>सेफ़ रेंज</strong>, एक <strong>एंटर वैल्यू</strong> बॉक्स, जहाँ फ़ोटो ज़रूरी हो वहाँ <strong>मीडिया</strong> कॉलम, अपेक्षित <strong>फ़्रीक्वेंसी</strong>, समय सहित <strong>लास्ट वैल्यू</strong>, और एक <strong>स्टेटस</strong> है। <strong>TDS</strong> <strong>दिन में एक बार</strong> देय है और <strong>Pending</strong> दिखा रहा है; <strong>COD</strong> व <strong>BOD</strong> मासिक। <strong>अपलोड फ़ाइल</strong> पूरी शीट एक साथ ले लेती है।",
          voice: "हर सेंसर पंक्ति में वैलिड व सेफ़ रेंज, अपेक्षित फ़्रीक्वेंसी, पिछला मान और स्टेटस है। अपलोड फ़ाइल पूरी शीट एक साथ ले लेती है।",
        },
        {
          label: 'सारांश', title: 'किस काम के लिए कौन-सा पेज',
          body: "तो: शिफ़्ट के लिए <strong>डैशबोर्ड</strong> — प्रवाह, गुणवत्ता, ऊर्जा और दक्षता एक ही स्क्रॉल में, सवाल के अनुसार जिस पेज पर ठीक लगे। प्लेटफ़ॉर्म ने क्या पकड़ा उसके लिए <strong>इनसाइट लिस्ट</strong>, और उसके बाद के काम के लिए <strong>टास्क लिस्ट</strong>। स्टोर की खपत के लिए <strong>इन्वेंटरी</strong>, हाथ से आने वाली रीडिंग के लिए <strong>डेटा इनपुट</strong>, और प्लांट चलता देखना हो तो <strong>स्काडाव्यू</strong>। एक पेज सिलेक्टर, एक ग्रैन्युलैरिटी, एक समय सीमा — बाकी सब पीछे-पीछे।",
          voice: "शिफ़्ट के लिए डैशबोर्ड, पकड़ी गई बातों के लिए इनसाइट, उसके बाद के काम के लिए टास्क, बाकी के लिए इन्वेंटरी व डेटा इनपुट, और देखने के लिए स्काडा व्यू।",
        },
      ],
    },
    ta: {
      title: 'அமேசான் MDEA,<br><em>160 KLD, தொடக்கம் முதல் இறுதி வரை.</em>',
      subtitle:
        'உங்கள் தளத்தின் விரிவான சுற்றுப்பயணம் — டாஷ்போர்டு விட்ஜெட் வாரியாக, அதன் பின்னுள்ள சுத்திகரிப்புத் தொடர், மற்றும் உடன் வரும் இன்சைட், பணிகள், வரைபடங்கள்.',
      chapter: 'டெமோ · அமேசான் MDEA (160 KLD)',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, எல்லாத் திரைகளும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது; உங்கள் ஒவ்வொரு திரையும் அங்கே: <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>இன்சைட் லிஸ்ட்</strong>, <strong>டேட்டா இன்புட்</strong>, <strong>டாஸ்க் லிஸ்ட்</strong>, <strong>ஸ்காடாவியூ — அமேசான் வொர்க்ஸ்பேஸ்</strong>. மேலுள்ள <strong>தேடல்</strong> பெட்டி எதற்கும் நேரடியாகக் கொண்டு செல்லும்.",
          voice: "எல்லாம் இந்த மெனுவில் இருந்தே — டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டேட்டா இன்புட், டாஸ்க் லிஸ்ட், ஸ்காடா வியூ.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>(சம்மரி பேஜ்) - கெபாசிட்டி 160 KLD</strong>-இல் திறக்கிறது. கீழுள்ள அனைத்தும் மூன்று கட்டுப்பாடுகளால் இயங்குகின்றன: <strong>பேஜ்</strong> தேர்வி, <strong>கிரானுலாரிட்டி</strong>, <strong>ஃப்ரம்</strong>–<strong>டு</strong> வரம்பு. வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong>, முழுப் பக்கத்தையும் ஒரே சமயம் எடுக்கும் <strong>டவுன்லோட்</strong>, அமைப்புகளுக்கு <strong>கியர்</strong>, தளவமைப்புக்கு <strong>எடிட் பேஜ்</strong>, ஒரு <strong>பகிர்வு</strong> அம்பு.",
          voice: "பேஜ் தேர்வி, கிரானுலாரிட்டி, கால வரம்பு — இவை ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. வலதுபுறம் ரிஃப்ரெஷ், முழுப் பக்கப் பதிவிறக்கம், அமைப்புகள், எடிட் பேஜ்.",
        },
        {
          label: 'சுருக்கம்', title: 'ஆலை ஒரே வரிசையில்',
          body: "<strong>பிளான்ட் ஹெல்த் அண்ட் வாட்டர் ட்ரீட்மென்ட் சம்மரி</strong> முழுவதையும் ஒரே வரிசையில் வைக்கிறது: <strong>STP இன்லெட் 62.22 KL</strong>, <strong>கலெக்‌ஷன் டேங்க் முதல் மெயின் கலெக்‌ஷன் டேங்க் ஓட்டம் 38.22</strong>, <strong>STP அவுட்லெட் 62.29</strong>, <strong>கார்டனிங் 2.06</strong>, <strong>ஃப்ளஷிங் 42.67</strong>, <strong>ஃபில்டர் பேக்வாஷ் 0</strong>, பிறகு <strong>UF பெர்மியேட் 23.54</strong>, <strong>UF பேக்வாஷ் 1.02</strong>. ஒவ்வொரு அட்டையும் அது உள்ளடக்கிய காலத்தைத் தன் அடியில் பொறிக்கிறது.",
          voice: "இன்லெட் அறுபத்திரண்டு புள்ளி இரண்டு இரண்டு கே எல், அவுட்லெட் அறுபத்திரண்டு புள்ளி இரண்டு ஒன்பது. ஒவ்வொரு அட்டையும் தன் காலத்தைப் பொறிக்கிறது.",
        },
        {
          label: 'வரம்பு', title: 'ஒரு காலத்தைத் தேர்வு செய்யுங்கள்',
          body: "வரம்பைச் சொடுக்கினால் தேர்வி திறக்கிறது: <strong>டுடே</strong>, <strong>யெஸ்டர்டே</strong>, <strong>லாஸ்ட் 24 அவர்ஸ்</strong>, மூன்று, ஏழு, பத்து, முப்பது நாட்கள், <strong>3</strong> அல்லது <strong>6 மாதங்கள்</strong>, அல்லது <strong>கஸ்டம்</strong>. <strong>டைம் ஃபார்மேட்</strong> <strong>12</strong>, <strong>24 மணி</strong> இடையே மாறுகிறது; <strong>ஸ்மார்ட் அவர்ஸ்</strong> ஒரே நாளாந்திர நேரப் பகுதியை ஒவ்வொரு தேதிக்கும் பொருத்துகிறது — ஒரு மாதத்தின் ஒவ்வொரு நாளிலும் அதே ஷிப்ட்.",
          voice: "இன்று முதல் ஆறு மாதம் வரை முன்னமைவுகள். ஸ்மார்ட் அவர்ஸ் ஒரே நாளாந்திர நேரப் பகுதியை ஒவ்வொரு தேதிக்கும் பொருத்தும்.",
        },
        {
          label: 'கிரானுலாரிட்டி', title: 'கிரானுலாரிட்டி காலத்தைப் பின்தொடர்கிறது',
          body: "<strong>கிரானுலாரிட்டி</strong> பட்டியல் நிலையானது அல்ல — நீங்கள் கேட்கும் காலத்துடன் மாறுகிறது. ஒரு நாளுக்கு <strong>மணி</strong>, <strong>நாள்</strong>; வரம்பை ஒரு காலாண்டாக நீட்டினால் அதே கட்டுப்பாடு <strong>வாரங்கள்</strong>, <strong>மாதங்கள்</strong> தருகிறது. மூன்று மாதங்களை மணிக்கணக்கில் வரைய வேண்டியதில்லை; ஒரு ஷிப்டை மாதக் கட்டங்களில் படிக்க வேண்டியதுமில்லை.",
          voice: "கிரானுலாரிட்டி பட்டியல் காலத்துடன் மாறும். ஒரு நாளுக்கு மணியும் நாளும்; ஒரு காலாண்டுக்கு வாரமும் மாதமும்.",
        },
        {
          label: 'காலாண்டு', title: 'அதே பக்கம், ஒரு காலாண்டில்',
          body: "<strong>மாதங்கள்</strong> மற்றும் <strong>கடந்த 3 மாதங்கள்</strong> எனும்போது, வேறெதுவும் மாறாமல் ஒவ்வொரு அட்டையும் மீண்டும் கணக்கிடுகிறது: <strong>STP இன்லெட் 32921.74 KL</strong>, மெயின் கலெக்‌ஷன் டேங்குக்கு <strong>5088.64</strong>, <strong>STP அவுட்லெட் 7000.04</strong>, <strong>கார்டனிங் 10002.66</strong>, <strong>ஃப்ளஷிங் 5536.89</strong>, <strong>ஃபில்டர் பேக்வாஷ் 3646.02</strong>, கீழே <strong>UF பெர்மியேட் 2998.54</strong>.",
          voice: "மாதங்களுக்கு அமைத்தால் ஒவ்வொரு அட்டையும் மீண்டும் கணக்கிடுகிறது — இன்லெட் முப்பத்திரண்டாயிரம் கே எல், அவுட்லெட் ஏழாயிரம்.",
        },
        {
          label: 'வரம்புகள்', title: 'கேஜுக்குப் பின்னுள்ள பட்டைகள்',
          body: "ஒவ்வொரு கேஜுக்கும் அதன் சொந்தப் பட்டைகள் உண்டு; <strong>info</strong> ஐகான் அவற்றைக் காட்டும். <strong>ஹைட்ராலிக் எஃபிஷியன்சி</strong> <strong>93.08%</strong> படிக்கிறது, அதன் <strong>கரண்ட் த்ரெஷோல்ட் கான்ஃபிகரேஷன்</strong> ஊசி ஏன் பச்சையில் உள்ளது எனச் சொல்கிறது: <strong>சேஃப் 80-100</strong>, <strong>காஷன் 70-80</strong>, <strong>க்ரிட்டிக்கல் 0-70</strong>. தீர்ப்பு விட்ஜெட்டிலேயே அமைக்கப்பட்டுள்ளது.",
          voice: "ஹைட்ராலிக் எஃபிஷியன்சி தொண்ணூற்று மூன்று சதவீதம். அதன் வரம்புகள் — சேஃப் எண்பது முதல் நூறு, காஷன் எழுபது முதல் எண்பது, க்ரிட்டிக்கல் எழுபதுக்குக் கீழ்.",
        },
        {
          label: 'தரம்', title: 'தரம், அதன் குறிப்புக்கு எதிராக',
          body: "<strong>குவாலிட்டி பாராமீட்டர்</strong> ஆய்வகம் சார்ந்த எண்களைத் தொகுக்கிறது. <strong>அவுட்லெட் டர்பிடிட்டி</strong> பச்சையில் <strong>2.54</strong>; <strong>ஏரேஷன் டேங்க் DO</strong> <strong>0.02</strong> — தன் தலைப்பிலேயே அச்சிட்ட <strong>Ref. 2-2.5 ppm</strong>-க்கு மிகக் கீழ், எனவே கேஜ் அதைக் கீழ் முனையில் காட்டுகிறது. <strong>ஃப்ளாக் டிடெக்டர்</strong> அமைக்கப்பட்டுள்ளது ஆனால் இக்காலத்துக்குத் தரவு இல்லை; தவறான கோடு வரையாமல் அதைச் சொல்கிறது.",
          voice: "அவுட்லெட் டர்பிடிட்டி பச்சையில் இரண்டு புள்ளி ஐந்து நான்கு. ஏரேஷன் டேங்க் டி ஓ இரண்டு முதல் இரண்டரை என்ற குறிப்புக்கு எதிராக பூஜ்ஜியம் புள்ளி பூஜ்ஜியம் இரண்டு.",
        },
        {
          label: 'ஆற்றல்', title: 'ஆலை எவ்வளவு இழுத்தது',
          body: "<strong>இக்விப்மென்ட் ரன்னிங் அண்ட் எனர்ஜி கன்சம்ப்ஷன்</strong> <strong>டோட்டல் எனர்ஜி கன்சம்ப்ஷன்</strong>-உடன் தொடங்குகிறது — நாள் முழுவதும் திரட்டு வளைவாக ஏறி <strong>127.2</strong>-ஐ அடைகிறது. இது தற்காலிகமானது அல்ல, திரட்டானது; எனவே தட்டையான பகுதி ஆலை இழுப்பதை நிறுத்தியதைக் காட்டுகிறது.",
          voice: "மொத்த ஆற்றல் நுகர்வு நாள் முழுவதும் திரட்டாக ஏறி நூற்று இருபத்தேழு புள்ளி இரண்டை அடைகிறது. தட்டையான பகுதி ஆலை நின்றதைக் காட்டும்.",
        },
        {
          label: 'மணிகள்', title: 'மணிகள், இயந்திரம் வாரியாக',
          body: "<strong>ரன்னிங் அவர்ஸ் ஆஃப் ஈச் இக்விப்மென்ட்</strong> ஒவ்வொரு இயந்திரத்தையும் <strong>SENSOR × TIME</strong> அட்டவணையாக வைக்கிறது: <strong>சீவேஜ் டிரான்ஸ்ஃபர் பம்ப்-2</strong> <strong>6.9</strong> மணி, <strong>ஸ்லட்ஜ் ரீசர்குலேஷன் பம்ப்-1</strong> <strong>9.55</strong>, <strong>-2</strong> <strong>11.67</strong>, <strong>ஏர் ப்ளோயர்-1</strong> <strong>19.85</strong>; கலெக்‌ஷன் டிரான்ஸ்ஃபர் பம்ப்கள் <strong>0</strong>. விட்ஜெட்டின் கருவிப்பட்டையில் <strong>ஃபில்டர்</strong>, <strong>டவுன்லோட்</strong>, <strong>எக்ஸ்பாண்ட்</strong>, <strong>எடிட்</strong> — எனவே இந்த அட்டவணை CSV ஆக இறங்கும்.",
          voice: "ஒவ்வொரு இயந்திரமும் காலத்துக்கு எதிராக — ஏர் ப்ளோயர் ஒன்று பத்தொன்பது புள்ளி எட்டைந்து மணி, கலெக்‌ஷன் பம்ப்கள் பூஜ்ஜியம். வடிகட்டி, CSV ஆகப் பதிவிறக்குங்கள்.",
        },
        {
          label: 'ஒரு KL', title: 'ஒரு கிலோலிட்டருக்கு, மொத்தம் மட்டுமல்ல',
          body: "அட்டவணைக்கு அருகில் இரு அட்டைகள்: பட்டைக் கேஜில் <strong>எனர்ஜி பர் KL 2.17</strong>, எளிய எண்ணாக <strong>டோட்டல் எனர்ஜி கன்சம்ப்ஷன் 127.2</strong>. ஓட்டம் மாறினாலும் நிலைக்கும் எண் ஒரு கிலோலிட்டருக்கானதே — குறைவான நீரைச் சுத்திகரித்தால் மொத்தம் தானே குறையும், ஆனால் ஒவ்வொரு கிலோலிட்டரின் செலவே ஆலை நன்றாக இயங்குகிறதா எனச் சொல்லும்.",
          voice: "ஒரு கிலோலிட்டருக்கு இரண்டு புள்ளி ஒன்று ஏழு, மொத்தம் நூற்று இருபத்தேழு புள்ளி இரண்டு. ஓட்டம் மாறினாலும் நிலைக்கும் எண் இதுவே.",
        },
        {
          label: 'சேமித்த காட்சி', title: 'உருவாக்கிய காட்சியை வைத்திருங்கள்',
          body: "பக்கத்தில் செய்யும் எந்த மாற்றமும் — வரம்பு, வரைபட வகை, விரிவாக்கிய விட்ஜெட் — கீழே <strong>சேவ் கரண்ட் வியூ</strong> பட்டையைக் கொண்டுவரும். <strong>சேவ்</strong> அதே பக்கத்தில் எழுதும்; <strong>சேவ் ஆஸ்</strong> புதிய பக்கமாக வைக்கும்; <strong>கேன்சல்</strong> நீக்கும். காலை மதிப்பாய்வுக்காக அமைத்த தளவமைப்பு நாளை காலையும் இருக்கும்.",
          voice: "எந்த மாற்றமும் சேவ் கரண்ட் வியூ பட்டையைக் கொண்டுவரும். சேவ் அதே பக்கத்தில் எழுதும், சேவ் ஆஸ் புதிய பக்கமாக வைக்கும்.",
        },
        {
          label: 'இரண்டாம் பக்கம்', title: 'இரண்டாம் பக்கம், இரண்டாம் பார்வை',
          body: "<strong>பேஜ்</strong> தேர்வியில் ஒன்றுக்கு மேற்பட்ட தளவமைப்பு உள்ளது. <strong>யூனிஃபைட் டிடெய்ல்டு அனலிட்டிக்ஸ் பேஜ்</strong> அதே ஆலை, ஆழமாகப் படிக்க அமைக்கப்பட்டது: <strong>பிளான்ட் சம்மரி</strong>-இல் <strong>STP இன்லெட் 38.83</strong>, <strong>39.49</strong> மாற்றம், <strong>STP அவுட்லெட் 35.57</strong>, <strong>கார்டனிங் 2.06</strong>, <strong>ஃப்ளஷிங் 32.29</strong>, பிறகு <strong>டோட்டல் எனர்ஜி 92.13</strong>, <strong>எனர்ஜி பர் KL 2.59</strong>, <strong>ஹைட்ராலிக் எஃபிஷியன்சி 91.6%</strong> — கீழே சுத்திகரிப்புத் தொடர்.",
          voice: "பேஜ் தேர்வியில் ஒன்றுக்கு மேற்பட்ட தளவமைப்பு. யூனிஃபைட் டிடெய்ல்டு அனலிட்டிக்ஸ் பக்கம் அதே ஆலையை ஆழமாகப் படிக்க அமைக்கிறது.",
        },
        {
          label: 'முதன்மை', title: 'ப்ரைமரி ட்ரீட்மென்ட்',
          body: "<strong>ப்ரைமரி ட்ரீட்மென்ட்</strong> ஆலையின் முன்பகுதியில் தொடங்குகிறது. <strong>கலெக்‌ஷன் டேங்க் லெவல்</strong> <strong>கலெக்‌ஷன் டேங்க் (DED)</strong>-ஐ <strong>மெயின் கலெக்‌ஷன் டேங்க்</strong>-க்கு எதிராக வண்ணக் குறிப்புப் பட்டைகளுக்குள் வரைகிறது — பச்சை இயக்க வரம்பு, <strong>90%</strong>-க்கு மேலுள்ள இளஞ்சிவப்பு அல்ல — லெஜெண்டைச் சொடுக்கி ஒரு தொடரை நீக்கலாம். அருகில் <strong>STP இன்லெட் ஃப்ளோ</strong>, <strong>டோட்டலைசர்</strong> <strong>38.83</strong>.",
          voice: "கலெக்‌ஷன் டேங்க் லெவல் இரு தொட்டிகளையும் வண்ணக் குறிப்புப் பட்டைகளுக்குள் வரைகிறது — பச்சை இயக்க வரம்பு, தொண்ணூறுக்கு மேல் இளஞ்சிவப்பு.",
        },
        {
          label: 'வரைபடம்', title: 'அட்டவணை, அல்லது பார் கிராஃப்',
          body: "எந்த விட்ஜெட்டிலும் ஹோவர் செய்தால் அதே கருவிப்பட்டை: <strong>டவுன்லோட்</strong>, <strong>எக்ஸ்பாண்ட்</strong>, <strong>வரைபட வகை</strong> மெனு, <strong>எடிட்</strong>, <strong>info</strong>. வரைபட வகை மெனு இந்தக் கோட்டை ஒரே சொடுக்கில் <strong>டேபிள்</strong> அல்லது <strong>பார் கிராஃப்</strong> ஆக மாற்றும் — டாஷ்போர்டை மீண்டும் கட்ட வேண்டியதில்லை.",
          voice: "எந்த விட்ஜெட்டிலும் ஹோவர் செய்யுங்கள். வரைபட வகை மெனு கோட்டை ஒரே சொடுக்கில் அட்டவணையாகவோ பார் கிராஃப்பாகவோ மாற்றும்.",
        },
        {
          label: 'பார்', title: 'அதே தரவு, பார்களாக',
          body: "<strong>பார் கிராஃப்</strong> ஆக மாற்றியதும் அதே இரு தொடர்களும் கட்டைகளாகின்றன: <strong>கலெக்‌ஷன் டேங்க் (DED)</strong> <strong>48.51</strong>, <strong>மெயின் கலெக்‌ஷன் டேங்க்</strong> <strong>40.56</strong>. ஒரு நாளின் வடிவத்துக்குக் கோடு சிறந்தது; இரு தொட்டிகளை ஒரே பார்வையில் ஒப்பிட பார்கள் சிறந்தவை — விட்ஜெட் இரண்டையும் செய்கிறது.",
          voice: "பார்களாக அதே இரு தொடர்களும் நேரடியாக ஒப்பிடுகின்றன — நாற்பத்தெட்டு புள்ளி ஐந்து ஒன்று, நாற்பது புள்ளி ஐந்து ஆறு.",
        },
        {
          label: 'தொட்டிகள்', title: 'அளவுகள், கன அளவுகள், அழுத்தங்கள்',
          body: "தொடரின் கீழே <strong>லெவல் ஆஃப் டேங்க்ஸ்</strong> <strong>குளோரின் கான்டாக்ட்</strong>, <strong>ட்ரீட்டட் வாட்டர்</strong>, <strong>UF ட்ரீட்டட் வாட்டர்</strong> ஆகியவற்றை <strong>40.83</strong>, <strong>74.68</strong>, <strong>96.24%</strong> எனக் காட்டுகிறது; <strong>வால்யூம் ஆஃப் எஃப்ளூயன்ட் இன் டேங்க்ஸ்</strong> அதே சதவீதங்களைக் கிலோலிட்டராக மாற்றுகிறது — <strong>87.66</strong>, <strong>71.95</strong>, <strong>3.61 KL</strong>. அருகில் <strong>MCF, UF ஃபீட் அழுத்தம்</strong> தன் பட்டைகளுடன்.",
          voice: "மூன்று தொட்டிகளின் அளவுகள், அவையே கிலோலிட்டரில், மற்றும் வடிகட்டி அழுத்தங்கள் தம் பட்டைகளுக்கு எதிராக.",
        },
        {
          label: 'கைமுறை', title: 'கையால் பதியும் அளவீடுகள்',
          body: "எல்லா எண்ணும் சென்சாரிலிருந்து வருவதில்லை. <strong>மேனுவல் டேட்டா இன்புட்</strong> விட்ஜெட் தானியங்கி விட்ஜெட்களுக்கு அருகிலேயே அமர்ந்து <strong>ட்ரீட்டட் வாட்டர் TDS</strong>, <strong>COD</strong>, <strong>BOD</strong>, <strong>TSS</strong> சுமக்கிறது — உங்கள் குழு பதியும் ஆய்வக முடிவுகள். இங்கே இக்காலத்துக்கு <strong>No Data Available</strong> எனக் காட்டுகிறது, அதுவே பயனுள்ள சமிக்ஞை.",
          voice: "எல்லா எண்ணும் சென்சாரிலிருந்து வருவதில்லை. மேனுவல் டேட்டா இன்புட் விட்ஜெட் டி டி எஸ், சி ஓ டி, பி ஓ டி, டி எஸ் எஸ் சுமக்கிறது.",
        },
        {
          label: 'ட்ரிப்', title: 'ட்ரிப், அல்லது இயக்கம்',
          body: "<strong>இக்விப்மென்ட் ட்ரிப் ஸ்டேட்டஸ்{1=Trip}</strong> முழு இயந்திரப் பட்டியலின் நேரடித் தணிக்கை — ஒவ்வொரு பம்ப், ப்ளோயர், டோசிங் பம்ப், அஜிடேட்டரும் இக்காலத்தில் <strong>0</strong>, அதுவே ஒரு சுத்தமான நாள். அருகில் <strong>கரண்ட்</strong> நெடுவரிசை இப்போது என்ன இயங்குகிறது எனக் காட்டுகிறது: <strong>ஸ்லட்ஜ் ரீசர்குலேஷன் பம்ப்-1</strong>, <strong>-2</strong> <strong>1</strong>-இல், <strong>UV சிஸ்டம்</strong> <strong>1</strong>-இல்.",
          voice: "ட்ரிப் ஸ்டேட்டஸ் முழுப் பட்டியலையும் பூஜ்ஜியத்தில் வைக்கிறது — ஒரு சுத்தமான நாள். கரண்ட் நெடுவரிசை இப்போது இயங்குவதைக் காட்டும்.",
        },
        {
          label: 'பம்ப்', title: 'நாள் முழுவதும், ஆன் அல்லது ஆஃப்',
          body: "அதே இயந்திரங்கள் ஒன்று-அல்லது-பூஜ்ஜியக் கோடுகளாகவும் வரையப்படுகின்றன. <strong>UV சிஸ்டம் ஸ்டேட்டஸ்</strong> <strong>0</strong>-இலிருந்து <strong>1</strong>-க்கு ஏறுகிறது; <strong>ஃப்ளஷிங் டிரான்ஸ்ஃபர் பம்ப் ஸ்டேட்டஸ்</strong>-இல் பம்ப் <strong>1</strong>, <strong>2</strong> ஒன்றுக்கொன்று பொறுப்பை மாற்றிக்கொள்ளக் குறுக்கிடுகின்றன; <strong>கார்டனிங் பம்ப் ஸ்டேட்டஸ்</strong> <strong>0</strong>-இல் தட்டையாக இருக்கிறது.",
          voice: "அதே இயந்திரங்கள் ஒன்று அல்லது பூஜ்ஜியக் கோடுகளாக. இரு ஃப்ளஷிங் பம்ப்களும் பொறுப்பை மாற்றிக்கொள்ளக் குறுக்கிடுகின்றன.",
        },
        {
          label: 'இருப்பு', title: 'ஸ்டோர் என்ன செலவழிக்கிறது',
          body: "<strong>இன்வென்டரி</strong> <strong>அமேசான் MDEA</strong> ஸ்டோரின் நுகர்பொருட்களைப் பட்டியலிடுகிறது — <strong>யூரியா</strong>, <strong>DAP</strong>, <strong>குளோரின் பேலன்ஸ்</strong>, <strong>பாலி</strong>, <strong>காஸ்டிக்</strong>, <strong>HCL</strong> — <strong>ஸ்டாக் அவைலபிள்</strong>, <strong>லாஸ்ட் கன்சம்ப்ஷன்</strong>, நுகர்வு <strong>ஆக்சுவல்</strong> எதிராக <strong>எக்ஸ்பெக்டட்</strong>. எதிர்பார்க்கப்படும் விகிதம் பொருள் வாரியானது — யூரியாவுக்கு <strong>நாளொன்றுக்கு 1 கிலோ</strong>, காஸ்டிக்குக்கு <strong>15 நாளுக்கு 2 லிட்டர்</strong>.",
          voice: "இன்வென்டரி ஒவ்வொரு ரசாயனத்தையும் இருப்பு, கடைசி நுகர்வு, ஆக்சுவல் எதிராக எக்ஸ்பெக்டட் என்று காட்டுகிறது.",
        },
        {
          label: 'வகைகள்', title: 'ரசாயனங்கள் மட்டுமல்ல',
          body: "தேடல் பெட்டிக்கு அருகிலுள்ள <strong>ஃபில்டர்</strong> வகைப் பட்டியலைத் திறக்கிறது; ஸ்டோரில் டோசிங் ரசாயனங்களுக்கும் மேல் உள்ளது: <strong>கெமிக்கல்ஸ்</strong>, <strong>கன்சூமபிள்ஸ்</strong>, <strong>எலக்ட்ரானிக் ஸ்பேர்ஸ்</strong>, <strong>மெக்கானிக்கல் ஸ்பேர்ஸ்</strong>, <strong>டூல்ஸ்</strong>, <strong>டூல்ஸ் ஃபார் க்ளீனிங்</strong>. ஒன்றைத் தேர்ந்து அட்டவணையைக் குறுக்குங்கள், அல்லது பெயரால் தேடுங்கள்.",
          voice: "ஃபில்டர் வகைப் பட்டியலைத் திறக்கும் — ரசாயனங்கள், நுகர்பொருட்கள், மின்னணு மற்றும் இயந்திர உதிரிபாகங்கள், கருவிகள்.",
        },
        {
          label: 'இன்சைட்', title: 'தளம் கண்டறிந்தவை',
          body: "<strong>இன்சைட் லிஸ்ட்</strong>-இல் அமைப்பின் சொந்தக் கண்டறிதல்கள் சேர்கின்றன; எண்ணிக்கைகள் ஒரே பார்வையில் வடிவத்தைச் சொல்கின்றன: <strong>2785 ஆல் இன்சைட்ஸ்</strong>, <strong>06 ஓபன் அலாரம்ஸ்</strong>, <strong>2779 க்ளோஸ்டு அலாரம்ஸ்</strong>, <strong>00 அச்சீவ்மென்ட்ஸ்</strong>. எழுப்பப்பட்ட கிட்டத்தட்ட எல்லாம் மூடப்பட்டுவிட்டன — திறந்திருக்கும் ஆறே இன்றைய கவனம்.",
          voice: "இரண்டாயிரத்து எழுநூற்று எண்பத்தைந்து இன்சைட், ஆறு திறந்த அலாரம், இரண்டாயிரத்து எழுநூற்று எழுபத்தொன்பது மூடப்பட்டவை.",
        },
        {
          label: 'கண்டறிதல்', title: 'ஒவ்வொன்றும் என்ன செய்வதெனச் சொல்கிறது',
          body: "ஒவ்வொரு வரிசையும் எளிய சொற்களில் ஒரு கண்டறிதல், கீழே அதன் காரணம்: <em>“ஃபில்டர் ஃபீட் பம்ப்கள் மேனுவல் மோடில் இயங்குகின்றன”</em> — மேனுவல் இயக்கம் ஆள்பலத்தையும் செயலிழப்பு அபாயத்தையும் கூட்டும்; <em>“CCT அளவு 80%-க்கு மேல், ட்ரீட்டட் வாட்டர் 90%-க்குக் கீழ், ஆனால் இரு ஃபில்டர் ஃபீட் பம்ப்களும் ஆஃப்”</em>, இது வழிதலுக்கு இட்டுச் செல்லும்; <em>“ACF இன்லெட் அழுத்தம் 2 kg/cm2-க்கு மேல்”</em>.",
          voice: "ஒவ்வொரு கண்டறிதலும் எளிய சொற்களில், கீழே காரணத்துடன் — பம்ப்கள் மேனுவலில், வழிதலுக்கு இட்டுச் செல்லும் அளவுகள், அழுத்தம் இரண்டு கிலோவுக்கு மேல்.",
        },
        {
          label: 'வடிகட்டி', title: 'குறுக்குங்கள்',
          body: "பட்டியலுக்கு மேலே <strong>டைப் ஆஃப் இன்சைட்</strong>, <strong>ப்ரையாரிட்டி</strong>, <strong>ரிலேட்டிவ் டைம்</strong> பார்ப்பதைக் குறுக்குகின்றன; அருகில் <strong>ஃப்ரம்</strong>–<strong>டு</strong> வரம்பும் <strong>வொர்க்ஸ்பேஸ்</strong>, <strong>அஸெட்</strong> வடிகட்டிகளும். <strong>+ க்ரியேட் இன்சைட்</strong> கைமுறையாக ஒன்றைச் சேர்க்கிறது — தரவிலிருந்து அல்லாமல், ஆலையில் நடப்பவரிடமிருந்து வரும் கண்டறிதல்களுக்கு.",
          voice: "வகை, முன்னுரிமை, நேரம் பட்டியலைக் குறுக்குகின்றன; வொர்க்ஸ்பேஸ், அஸெட் வடிகட்டிகள் அருகில். க்ரியேட் இன்சைட் கைமுறையாக ஒன்றைச் சேர்க்கும்.",
        },
        {
          label: 'பணிகள்', title: 'அதன் பின் வரும் வேலை',
          body: "<strong>டாஸ்க் லிஸ்ட்</strong>-இல் ஒரு கண்டறிதல் வேலையாகிறது. ஒவ்வொரு வரிசையிலும் <strong>பிளான்ட் நேம்</strong>, <strong>ப்ரையாரிட்டி லெவல்</strong>, <strong>அசைனீ</strong>, தேவையான <strong>டாஸ்க் ஸ்கில்ஸ்</strong> — <strong>ஆபரேட்டர்</strong>, <strong>மெக்கானிக்கல்</strong>, <strong>எலக்ட்ரிக்கல்</strong> — <strong>கம்ப்ளீஷன் ஸ்டேட்டஸ்</strong>. <em>“ப்ளோயர்கள் ஆட்டோ மோடில் இயங்குவதை உறுதிசெய்”</em> <strong>ஹை</strong>-இல், <strong>PENDING</strong>. ஆலை, பயனர், திறன், நிலை வாரியாக வடிகட்டுங்கள்.",
          voice: "டாஸ்க் லிஸ்ட்-இல் ஒரு கண்டறிதல் வேலையாகிறது — முன்னுரிமை, பொறுப்பாளர், தேவையான திறன், நிறைவு நிலையுடன்.",
        },
        {
          label: 'ஸ்காடாவியூ', title: 'ஸ்காடாவியூ — ஆலை, நேரலையில்',
          body: "<strong>ஸ்காடாவியூ — அமேசான் வொர்க்ஸ்பேஸ்</strong> ஆலையை ஒரே வரைபடமாகத் திறக்கிறது, <strong>LIVE</strong> பேட்ஜுடன். முழு சுத்திகரிப்புத் தொடரும் ஒரே கேன்வாஸில் — இடதுபுற கலெக்‌ஷன் தொட்டிகளிலிருந்து MBBR, ட்யூப் செட்லர், குளோரின் கான்டாக்ட் டேங்க் வழியாக வலதுபுற வடிகட்டிகள், ட்ரீட்டட் வாட்டர் தொட்டிகள் வரை. மேலே <strong>க்ரூப் கன்ட்ரோல்</strong>, <strong>யூனிட் ப்ராசஸஸ்</strong>, <strong>செலக்ட் பேஜ்</strong>.",
          voice: "ஸ்காடா வியூ ஆலை முழுவதையும் ஒரே நேரலை வரைபடமாகத் திறக்கிறது — இடதுபுறத் தொட்டிகளிலிருந்து வலதுபுறச் சுத்திகரித்த நீர்த் தொட்டிகள் வரை.",
        },
        {
          label: 'வரைபடம்', title: 'ஒரு பம்ப் வரை',
          body: "பெரிதாக்கினால் ஒவ்வொரு அலகும் தன் நேரலை நிலையைக் காட்டும். <strong>MBBR 1</strong>, <strong>2</strong>, <strong>ட்யூப் செட்லர்</strong>, <strong>குளோரின் கான்டாக்ட் டேங்க்</strong>, <strong>பாலி டோசிங் டேங்க்</strong>, <strong>ப்ரஷர் சாண்ட் ஃபில்டர்</strong> அனைத்தும் தாமாகவே வரையப்பட்டுள்ளன; ஒவ்வொரு பம்பிலும் <strong>ON/OFF</strong> குறி — இயங்கினால் பச்சை, நின்றால் சிவப்பு. <strong>ஸ்லட்ஜ் ரீசர்குலேஷன் பம்ப்-1</strong> ஆன், <strong>-2</strong> ஆஃப்.",
          voice: "பெரிதாக்கினால் ஒவ்வொரு அலகும் தன் நேரலை நிலையை, ஒவ்வொரு பம்பும் ஆன்-ஆஃப் குறியைச் சுமக்கும் — பச்சை இயக்கம், சிவப்பு நிறுத்தம்.",
        },
        {
          label: 'டேட்டா இன்புட்', title: 'ஆய்வக அளவீடுகள், கையால்',
          body: "<strong>டேட்டா இன்புட்</strong> அந்தக் கைமுறை எண்களுக்குப் பின்னுள்ள படிவம். ஒவ்வொரு சென்சார் வரிசையிலும் <strong>வேலிட் ரேஞ்ச்</strong>, <strong>சேஃப் ரேஞ்ச்</strong>, <strong>எண்டர் வேல்யூ</strong> பெட்டி, தேவைப்படும்போது <strong>மீடியா</strong> நெடுவரிசை, எதிர்பார்க்கப்படும் <strong>ஃப்ரீக்வென்சி</strong>, நேரமுத்திரையுடன் <strong>லாஸ்ட் வேல்யூ</strong>, ஒரு <strong>ஸ்டேட்டஸ்</strong>. <strong>TDS</strong> <strong>நாளொன்றுக்கு ஒருமுறை</strong>, <strong>Pending</strong>; <strong>COD</strong>, <strong>BOD</strong> மாதந்தோறும். <strong>அப்லோட் ஃபைல்</strong> முழுத் தாளையும் ஒரே சமயம் ஏற்கும்.",
          voice: "ஒவ்வொரு சென்சார் வரிசையிலும் வேலிட், சேஃப் வரம்பு, ஃப்ரீக்வென்சி, கடைசி மதிப்பு, நிலை. அப்லோட் ஃபைல் முழுத் தாளையும் ஒரே சமயம் ஏற்கும்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "எனவே: ஷிஃப்டுக்கு <strong>டாஷ்போர்டு</strong> — ஓட்டம், தரம், ஆற்றல், திறன் ஒரே ஸ்க்ரோலில். தளம் கண்டறிந்தவற்றுக்கு <strong>இன்சைட் லிஸ்ட்</strong>, அதன்பின் வரும் வேலைக்கு <strong>டாஸ்க் லிஸ்ட்</strong>. ஸ்டோர் நுகர்வுக்கு <strong>இன்வென்டரி</strong>, கையால் வரும் அளவீடுகளுக்கு <strong>டேட்டா இன்புட்</strong>, ஆலை இயங்குவதைப் பார்க்க <strong>ஸ்காடாவியூ</strong>. ஒரு பேஜ் தேர்வி, ஒரு கிரானுலாரிட்டி, ஒரு வரம்பு — மற்றவை தொடரும்.",
          voice: "ஷிஃப்டுக்கு டாஷ்போர்டு, கண்டறிதலுக்கு இன்சைட், அதன்பின் வேலைக்கு டாஸ்க், மற்றவற்றுக்கு இன்வென்டரி, டேட்டா இன்புட், பார்க்க ஸ்காடா வியூ.",
        },
      ],
    },
    mr: {
      title: 'अमेझॉन MDEA,<br><em>160 KLD, सुरुवातीपासून शेवटपर्यंत.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मचा सविस्तर फेरफटका — डॅशबोर्ड विजेटनुसार, त्यामागची ट्रीटमेंट ट्रेन, आणि सोबत येणारे इनसाइट, टास्क व आकृत्या.',
      chapter: 'डेमो · अमेझॉन MDEA (160 KLD)',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेन्यू, प्रत्येक स्क्रीन',
          body: "<strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो आणि तुमची प्रत्येक स्क्रीन तिथेच आहे: <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>इनसाइट लिस्ट</strong>, <strong>डेटा इनपुट</strong>, <strong>टास्क लिस्ट</strong>, आणि <strong>स्काडाव्ह्यू — अमेझॉन वर्कस्पेस</strong>. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "सर्व काही याच मेन्यूतून — डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट, आणि स्काडा व्ह्यू.",
        },
        {
          label: 'नियंत्रणे', title: 'पान चालवणारी नियंत्रणे',
          body: "<strong>डॅशबोर्ड</strong> <strong>(समरी पेज) - कॅपॅसिटी 160 KLD</strong> वर उघडतो. खालचे सर्व तीन नियंत्रणांनी चालते: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong>, आणि <strong>फ्रॉम</strong>–<strong>टू</strong> कालमर्यादा. उजवीकडे <strong>रिफ्रेश</strong>, संपूर्ण पान एकाच वेळी घेणारा <strong>डाउनलोड</strong>, सेटिंग्जसाठी <strong>गिअर</strong>, मांडणीसाठी <strong>एडिट पेज</strong>, आणि <strong>शेअर</strong> बाण.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा प्रत्येक विजेट चालवतात. उजवीकडे रिफ्रेश, संपूर्ण पानाचा डाउनलोड, सेटिंग्ज, आणि एडिट पेज.",
        },
        {
          label: 'सारांश', title: 'संपूर्ण प्लांट एका ओळीत',
          body: "<strong>प्लांट हेल्थ अँड वॉटर ट्रीटमेंट समरी</strong> सर्व काही एका ओळीत ठेवते: <strong>STP इनलेट 62.22 KL</strong>, <strong>कलेक्शन टँक ते मेन कलेक्शन टँक फ्लो 38.22</strong>, <strong>STP आउटलेट 62.29</strong>, <strong>गार्डनिंग फ्लो 2.06</strong>, <strong>फ्लशिंग वॉटर फ्लो 42.67</strong> आणि <strong>फिल्टर बॅकवॉश 0</strong>, मग <strong>UF परमिएट 23.54</strong> व <strong>UF बॅकवॉश 1.02</strong>. प्रत्येक कार्डाच्या तळाशी त्याचा नेमका कालावधी आहे.",
          voice: "इनलेट बासष्ट पूर्णांक दोन दोन के एल आणि आउटलेट बासष्ट पूर्णांक दोन नऊ, सोबत गार्डनिंग, फ्लशिंग व बॅकवॉश.",
        },
        {
          label: 'कालमर्यादा', title: 'कालावधी निवडा',
          body: "कालमर्यादेवर क्लिक केल्यास पिकर उघडतो: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 अवर्स</strong>, तीन, सात, दहा किंवा तीस दिवस, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा <strong>कस्टम</strong>. <strong>टाइम फॉरमॅट</strong> <strong>12</strong> व <strong>24 तासांत</strong> बदलतो, आणि <strong>स्मार्ट अवर्स</strong> तोच दैनिक वेळखंड मर्यादेतील प्रत्येक तारखेला लावते — महिनाभराची तीच शिफ्ट.",
          voice: "आजपासून सहा महिन्यांपर्यंतचे प्रीसेट, किंवा तुमच्या तारखा. स्मार्ट अवर्स तोच दैनिक वेळखंड प्रत्येक तारखेला लावते.",
        },
        {
          label: 'ग्रॅन्युलॅरिटी', title: 'ग्रॅन्युलॅरिटी कालावधीसोबत बदलते',
          body: "<strong>ग्रॅन्युलॅरिटी</strong>ची यादी स्थिर नाही — ती तुम्ही मागितलेल्या कालावधीसोबत बदलते. एका दिवसासाठी ती <strong>तास</strong> व <strong>दिवस</strong> देते; मर्यादा तिमाहीपर्यंत नेली की तेच नियंत्रण <strong>आठवडे</strong> व <strong>महिने</strong> देते. तीन महिने तासावार काढावे लागत नाहीत, आणि एक शिफ्ट महिन्यांच्या कप्प्यांत वाचावी लागत नाही.",
          voice: "ग्रॅन्युलॅरिटीची यादी कालावधीसोबत बदलते. एका दिवसासाठी तास व दिवस; तिमाहीसाठी आठवडे व महिने.",
        },
        {
          label: 'तिमाही', title: 'तेच पान, एका तिमाहीवर',
          body: "<strong>महिने</strong> व <strong>लास्ट 3 मंथ्स</strong> वर, बाकी काहीही न बदलता पानावरचे प्रत्येक कार्ड पुन्हा मोजते: <strong>STP इनलेट 32921.74 KL</strong>, मेन कलेक्शन टँकमध्ये <strong>5088.64</strong>, <strong>STP आउटलेट 7000.04</strong>, <strong>गार्डनिंग 10002.66</strong>, <strong>फ्लशिंग 5536.89</strong> व <strong>फिल्टर बॅकवॉश 3646.02</strong>, खाली <strong>UF परमिएट 2998.54</strong>. एक नियंत्रण शिफ्ट-अहवालाचा तिमाही अहवाल करते.",
          voice: "महिन्यांवर सेट केल्यावर प्रत्येक कार्ड पुन्हा मोजते — इनलेट बत्तीस हजार के एल, आउटलेट सात हजार.",
        },
        {
          label: 'मर्यादा', title: 'गेजमागच्या पट्ट्या',
          body: "प्रत्येक गेजला स्वतःच्या पट्ट्या आहेत, आणि <strong>info</strong> आयकॉन त्या दाखवतो. <strong>हायड्रॉलिक एफिशियन्सी</strong> <strong>93.08%</strong> वाचते, आणि तिचे <strong>करंट थ्रेशोल्ड कॉन्फिगरेशन</strong> सांगते की सुई हिरव्यात का आहे: <strong>सेफ 80-100</strong>, <strong>कॉशन 70-80</strong>, <strong>क्रिटिकल 0-70</strong>. निर्णय विजेटमध्येच ठरलेला आहे.",
          voice: "हायड्रॉलिक एफिशियन्सी त्र्याण्णव टक्के वाचते. तिचे थ्रेशोल्ड कॉन्फिगरेशन पट्ट्या सांगते — सेफ ऐंशी ते शंभर, क्रिटिकल सत्तरच्या खाली.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, तिच्या संदर्भाच्या तुलनेत',
          body: "<strong>क्वालिटी पॅरामीटर</strong> प्रयोगशाळेशी संबंधित आकडे एकत्र करते. <strong>आउटलेट टर्बिडिटी</strong> हिरव्यात <strong>2.54</strong> वर आहे, आणि <strong>एरेशन टँक DO</strong> <strong>0.02</strong> वाचते — स्वतःच्याच शीर्षकात छापलेल्या <strong>Ref. 2-2.5 ppm</strong> पेक्षा खूप खाली, म्हणून गेज तिला खालच्या टोकाला दाखवतो. <strong>फ्लॉक डिटेक्टर</strong> कॉन्फिगर आहे पण या कालावधीचा डेटा नाही, आणि तो दिशाभूल करणारी रेषा न काढता तसे सांगतो.",
          voice: "आउटलेट टर्बिडिटी हिरव्यात दोन पूर्णांक पाच चार. एरेशन टँक डी ओ दोन ते अडीचच्या संदर्भापुढे शून्य पूर्णांक शून्य दोन.",
        },
        {
          label: 'ऊर्जा', title: 'प्लांटने किती घेतली',
          body: "<strong>इक्विपमेंट रनिंग अँड एनर्जी कन्झम्प्शन</strong> <strong>टोटल एनर्जी कन्झम्प्शन</strong>ने सुरू होते — दिवसभराची संचयी वक्र, सतत चढून <strong>127.2</strong> वर. ती तात्कालिक नसून संचयी असल्याने सपाट भाग म्हणजे प्लांटने घेणे थांबवले — आकारच सांगतो तो कधी चालला.",
          voice: "टोटल एनर्जी कन्झम्प्शन दिवसभर संचयी चढून एकशे सत्तावीस पूर्णांक दोनवर पोहोचते. सपाट भाग म्हणजे प्लांट थांबला.",
        },
        {
          label: 'तास', title: 'तास, यंत्रानुसार',
          body: "<strong>रनिंग अवर्स ऑफ इच इक्विपमेंट</strong> प्रत्येक यंत्र कालावधीसमोर <strong>SENSOR × TIME</strong> तक्त्यात ठेवते: <strong>सीवेज ट्रान्सफर पंप-2</strong> <strong>6.9</strong> तास, <strong>स्लज रीसर्क्युलेशन पंप-1</strong> <strong>9.55</strong> व <strong>-2</strong> <strong>11.67</strong>, <strong>एअर ब्लोअर-1</strong> <strong>19.85</strong>, तर कलेक्शन ट्रान्सफर पंप <strong>0</strong> वर. विजेटच्या टूलबारमध्ये <strong>फिल्टर</strong>, <strong>डाउनलोड</strong>, <strong>एक्सपांड</strong> व <strong>एडिट</strong> आहेत.",
          voice: "प्रत्येक यंत्र कालावधीसमोर — एअर ब्लोअर एक एकोणीस पूर्णांक आठ पाच तास, कलेक्शन ट्रान्सफर पंप शून्यावर. फिल्टर करा, मग CSV उतरवा.",
        },
        {
          label: 'प्रति KL', title: 'प्रति किलोलिटर, केवळ एकूण नव्हे',
          body: "तक्त्याशेजारी दोन कार्डे हिशेब पूर्ण करतात: पट्टेदार गेजवर <strong>एनर्जी पर KL 2.17</strong>, आणि साधा आकडा <strong>टोटल एनर्जी कन्झम्प्शन 127.2</strong>. प्रवाह बदलला तरी टिकणारा आकडा प्रति-किलोलिटरचाच — कमी पाणी प्रक्रिया केली तर एकूण आपोआप खाली येईल, पण प्रत्येक किलोलिटरचा खर्चच सांगतो प्लांट नीट चालतो का.",
          voice: "प्रति किलोलिटर दोन पूर्णांक एक सात, आणि एकूण एकशे सत्तावीस पूर्णांक दोन. प्रवाह बदलला तरी टिकणारा आकडा हाच.",
        },
        {
          label: 'सेव्ह व्ह्यू', title: 'बनवलेले दृश्य जपा',
          body: "पानावर केलेला कोणताही बदल — मर्यादा, चार्टचा प्रकार, उघडलेले विजेट — खाली <strong>सेव्ह करंट व्ह्यू</strong> पट्टी आणतो. <strong>सेव्ह</strong> तो त्याच पानावर लिहितो; <strong>सेव्ह अॅज</strong> नवे पान बनवतो; <strong>कॅन्सल</strong> टाकून देतो. सकाळच्या आढाव्यासाठी लावलेली मांडणी उद्या सकाळीही तिथेच असेल.",
          voice: "कोणताही बदल सेव्ह करंट व्ह्यू पट्टी आणतो. सेव्ह त्याच पानावर लिहितो, सेव्ह अॅज नवे पान बनवतो.",
        },
        {
          label: 'दुसरे पान', title: 'दुसरे पान, दुसरे दृश्य',
          body: "<strong>पेज</strong> सिलेक्टरमध्ये एकाहून अधिक मांडण्या आहेत. <strong>युनिफाइड डिटेल्ड अॅनालिटिक्स पेज</strong> तोच प्लांट, फक्त बारकाईने वाचण्यासाठी मांडलेला: <strong>प्लांट समरी</strong>मध्ये <strong>STP इनलेट 38.83</strong>, <strong>39.49</strong> हस्तांतरित, <strong>STP आउटलेट 35.57</strong>, <strong>गार्डनिंग 2.06</strong> व <strong>फ्लशिंग 32.29</strong>, मग <strong>टोटल एनर्जी 92.13</strong>, <strong>एनर्जी पर KL 2.59</strong> व <strong>हायड्रॉलिक एफिशियन्सी 91.6%</strong> — आणि खाली टप्प्याटप्प्याने ट्रीटमेंट ट्रेन.",
          voice: "पेज सिलेक्टरमध्ये एकाहून अधिक मांडण्या आहेत. युनिफाइड डिटेल्ड अॅनालिटिक्स पेज तोच प्लांट बारकाईने वाचण्यासाठी मांडतो.",
        },
        {
          label: 'प्राथमिक', title: 'प्रायमरी ट्रीटमेंट',
          body: "<strong>प्रायमरी ट्रीटमेंट</strong> प्लांटच्या सुरुवातीपासून सुरू होते. <strong>कलेक्शन टँक लेव्हल</strong> <strong>कलेक्शन टँक (DED)</strong> ला <strong>मेन कलेक्शन टँक</strong>समोर रंगीत संदर्भ पट्ट्यांत ठेवते — हिरवा कार्यरत टप्पा, <strong>90%</strong> वरचा गुलाबी नाही — आणि लेजंडवर क्लिक करून एक मालिका काढून दुसरी एकटी वाचता येते. शेजारी <strong>STP इनलेट फ्लो</strong> व <strong>टोटलायझर</strong> <strong>38.83</strong> वर.",
          voice: "कलेक्शन टँक लेव्हल दोन्ही टाक्या रंगीत संदर्भ पट्ट्यांत ठेवते — हिरवा कार्यरत टप्पा, नव्वदच्या वर गुलाबी.",
        },
        {
          label: 'चार्ट', title: 'टेबल, की बार ग्राफ',
          body: "कोणत्याही विजेटवर हॉवर करा आणि तोच टूलबार येतो: <strong>डाउनलोड</strong>, <strong>एक्सपांड</strong>, <strong>चार्ट-टाइप</strong> मेन्यू, <strong>एडिट</strong>, आणि <strong>info</strong>. चार्ट-टाइप मेन्यू या रेषेला एका क्लिकवर <strong>टेबल</strong> किंवा <strong>बार ग्राफ</strong> करतो — डॅशबोर्ड पुन्हा बांधावा लागत नाही.",
          voice: "कोणत्याही विजेटवर हॉवर करा. चार्ट टाइप मेन्यू रेषेला एका क्लिकवर टेबल किंवा बार ग्राफ करतो.",
        },
        {
          label: 'बार', title: 'तोच डेटा, बारमध्ये',
          body: "<strong>बार ग्राफ</strong>वर बदलल्यावर त्याच दोन मालिका ठोकळे होतात: <strong>कलेक्शन टँक (DED)</strong> <strong>48.51</strong> आणि <strong>मेन कलेक्शन टँक</strong> <strong>40.56</strong>. दिवसाच्या आकारासाठी रेषा बरी; दोन टाक्यांची एका नजरेत तुलना करायची तर बार — विजेट दोन्ही करते.",
          voice: "बारमध्ये त्याच दोन मालिका थेट तुलना करतात — अठ्ठेचाळीस पूर्णांक पाच एक आणि चाळीस पूर्णांक पाच सहा.",
        },
        {
          label: 'टाक्या', title: 'पातळ्या, आकारमान, दाब',
          body: "पुढे <strong>लेव्हल ऑफ टँक्स</strong> <strong>क्लोरीन कॉन्टॅक्ट</strong>, <strong>ट्रीटेड वॉटर</strong> व <strong>UF ट्रीटेड वॉटर</strong> यांना <strong>40.83</strong>, <strong>74.68</strong> व <strong>96.24%</strong> वर ठेवते, तर <strong>व्हॉल्यूम ऑफ एफ्लुएंट इन टँक्स</strong> त्याच टक्केवारीचे किलोलिटरमध्ये रूपांतर करते — <strong>87.66</strong>, <strong>71.95</strong> व <strong>3.61 KL</strong>. शेजारी <strong>MCF व UF फीडचा दाब</strong> स्वतःच्या पट्ट्यांसह.",
          voice: "तिन्ही टाक्यांच्या पातळ्या, त्याच टाक्या किलोलिटरमध्ये, आणि फिल्टर दाब त्यांच्या पट्ट्यांसमोर.",
        },
        {
          label: 'मॅन्युअल', title: 'हाताने भरली जाणारी नोंद',
          body: "प्रत्येक आकडा सेन्सरमधून येत नाही. <strong>मॅन्युअल डेटा इनपुट</strong> विजेट स्वयंचलित विजेटांशेजारीच बसते आणि <strong>ट्रीटेड वॉटर TDS</strong>, <strong>COD</strong>, <strong>BOD</strong> व <strong>TSS</strong> ठेवते — तुमच्या संघाने भरलेले प्रयोगशाळा निकाल. इथे ते या कालावधीसाठी <strong>No Data Available</strong> वाचतात, आणि तेच उपयुक्त संकेत आहे.",
          voice: "प्रत्येक आकडा सेन्सरमधून येत नाही. मॅन्युअल डेटा इनपुट विजेट टी डी एस, सी ओ डी, बी ओ डी व टी एस एस ठेवते.",
        },
        {
          label: 'ट्रिप', title: 'ट्रिप, की चालू',
          body: "<strong>इक्विपमेंट ट्रिप स्टेटस{1=Trip}</strong> संपूर्ण यंत्र-यादीचे थेट ऑडिट आहे — प्रत्येक पंप, ब्लोअर, डोसिंग पंप व अॅजिटेटर या कालावधीत <strong>0</strong> वाचतात, म्हणजे स्वच्छ दिवस. शेजारचा <strong>करंट</strong> स्तंभ आत्ता काय चालू आहे ते दाखवतो: <strong>स्लज रीसर्क्युलेशन पंप-1</strong> व <strong>-2</strong> <strong>1</strong> वर, <strong>UV सिस्टम</strong> <strong>1</strong> वर.",
          voice: "ट्रिप स्टेटस संपूर्ण यादी शून्यावर ठेवतो — स्वच्छ दिवस. शेजारचा करंट स्तंभ आत्ता काय चालू आहे ते दाखवतो.",
        },
        {
          label: 'पंप', title: 'दिवसभर, चालू की बंद',
          body: "तीच यंत्रे एक-किंवा-शून्य रेषांतही काढली जातात. <strong>UV सिस्टम स्टेटस</strong> <strong>0</strong> वरून <strong>1</strong> वर चढतो; <strong>फ्लशिंग ट्रान्सफर पंप स्टेटस</strong>मध्ये पंप <strong>1</strong> व <strong>2</strong> एकमेकांकडे भार देत छेदतात; <strong>गार्डनिंग पंप स्टेटस</strong> <strong>0</strong> वर सपाट राहतो. भार देणे, किंवा एकाच यंत्राने पूर्ण भार ओढणे, आकारातच दिसते.",
          voice: "तीच यंत्रे एक किंवा शून्य रेषांत. दोन्ही फ्लशिंग ट्रान्सफर पंप एकमेकांकडे भार देत छेदतात.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'स्टोअर काय वापरते आहे',
          body: "<strong>इन्व्हेंटरी</strong> <strong>अमेझॉन MDEA</strong> स्टोअरच्या उपभोग्य वस्तू दाखवते — <strong>युरिया</strong>, <strong>DAP</strong>, <strong>क्लोरीन बॅलन्स</strong>, <strong>पॉली</strong>, <strong>कॉस्टिक</strong> व <strong>HCL</strong> — सोबत <strong>स्टॉक अव्हेलेबल</strong>, <strong>लास्ट कन्झम्प्शन</strong>, आणि वापराची तुलना <strong>अॅक्च्युअल</strong> विरुद्ध <strong>एक्स्पेक्टेड</strong>. अपेक्षित दर प्रत्येक वस्तूचा स्वतःचा — युरियासाठी <strong>दिवसाला 1 किलो</strong>, कॉस्टिकसाठी <strong>15 दिवसांना 2 लिटर</strong>.",
          voice: "इन्व्हेंटरी प्रत्येक रसायन स्टॉक, शेवटचा वापर आणि अॅक्च्युअल विरुद्ध एक्स्पेक्टेडसह दाखवते.",
        },
        {
          label: 'श्रेणी', title: 'फक्त रसायने नाहीत',
          body: "सर्च बॉक्सशेजारचा <strong>फिल्टर</strong> श्रेणी-यादी उघडतो, आणि स्टोअरमध्ये डोसिंग रसायनांपेक्षा बरेच काही आहे: <strong>केमिकल्स</strong>, <strong>कन्झ्युमेबल्स</strong>, <strong>इलेक्ट्रॉनिक स्पेअर्स</strong>, <strong>मेकॅनिकल स्पेअर्स</strong>, <strong>टूल्स</strong> व <strong>टूल्स फॉर क्लीनिंग</strong>. एखादी निवडून तक्ता मर्यादित करा, किंवा नावाने शोधा.",
          voice: "फिल्टर श्रेणी-यादी उघडतो — केमिकल्स, कन्झ्युमेबल्स, इलेक्ट्रॉनिक व मेकॅनिकल स्पेअर्स, टूल्स.",
        },
        {
          label: 'इनसाइट', title: 'प्लॅटफॉर्मला काय सापडले',
          body: "<strong>इनसाइट लिस्ट</strong> इथे सिस्टमचे स्वतःचे निष्कर्ष जमा होतात, आणि आकडे एका नजरेत चित्र सांगतात: <strong>2785 ऑल इनसाइट्स</strong>, <strong>06 ओपन अलार्म्स</strong>, <strong>2779 क्लोज्ड अलार्म्स</strong>, <strong>00 अचिव्हमेंट्स</strong>. उपस्थित केलेले जवळपास सर्व बंद झाले आहे — उघडी सहाच आज लक्ष मागतात.",
          voice: "दोन हजार सातशे पंचाऐंशी इनसाइट, सहा उघडे अलार्म, दोन हजार सातशे एकोणऐंशी बंद. उघडी सहाच आजचे काम.",
        },
        {
          label: 'निष्कर्ष', title: 'प्रत्येक काय करायचे ते सांगतो',
          body: "प्रत्येक ओळ साध्या शब्दांत एक निष्कर्ष आहे, खाली त्याचे कारण: <em>“फिल्टर फीड पंप मॅन्युअल मोडमध्ये चालू आहेत”</em> — कारण मॅन्युअल चालवणे मनुष्यबळ व अपयशाचा धोका वाढवते; <em>“CCT टँक पातळी 80% पेक्षा जास्त आणि ट्रीटेड वॉटर टँक 90% पेक्षा कमी, पण दोन्ही फिल्टर फीड पंप बंद”</em>, ज्यामुळे टाकी ओसंडेल; <em>“ACF इनलेट प्रेशर 2 kg/cm2 पेक्षा जास्त”</em>.",
          voice: "प्रत्येक निष्कर्ष साध्या शब्दांत, खाली कारणासह — पंप मॅन्युअलमध्ये, पातळ्या ज्यामुळे टाकी ओसंडेल, दाब दोन किलोपेक्षा जास्त.",
        },
        {
          label: 'फिल्टर', title: 'यादी मर्यादित करा',
          body: "यादीच्या वर <strong>टाइप ऑफ इनसाइट</strong>, <strong>प्रायोरिटी</strong> व <strong>रिलेटिव्ह टाइम</strong> दिसणारे मर्यादित करतात, सोबत <strong>फ्रॉम</strong>–<strong>टू</strong> मर्यादा व <strong>वर्कस्पेस</strong> आणि <strong>अॅसेट</strong> फिल्टर. <strong>+ क्रिएट इनसाइट</strong> हाताने एक जोडते — जे निष्कर्ष डेटातून नव्हे तर प्लांटमध्ये फिरणाऱ्या माणसाकडून येतात त्यांसाठी.",
          voice: "टाइप, प्रायोरिटी व रिलेटिव्ह टाइम यादी मर्यादित करतात. क्रिएट इनसाइट हाताने एक जोडते.",
        },
        {
          label: 'टास्क', title: 'त्यानंतरचे काम',
          body: "<strong>टास्क लिस्ट</strong> इथे निष्कर्षाचे काम होते. प्रत्येक ओळीत <strong>प्लांट नेम</strong>, <strong>प्रायोरिटी लेव्हल</strong>, <strong>असाइनी</strong>, लागणारी <strong>टास्क स्किल्स</strong> — <strong>ऑपरेटर</strong>, <strong>मेकॅनिकल</strong>, <strong>इलेक्ट्रिकल</strong> — आणि <strong>कंप्लीशन स्टेटस</strong> आहे. <em>“ब्लोअर ऑटो मोडमध्ये चालू आहेत याची खात्री करा”</em> <strong>हाय</strong> वर, <strong>PENDING</strong>. प्लांट, युजर, स्किल किंवा स्टेटसनुसार गाळा, आणि <strong>+ अॅड टास्क</strong> नवे उपस्थित करते.",
          voice: "टास्क लिस्ट इथे निष्कर्षाचे काम होते — प्राधान्य, असाइनी, लागणारी कौशल्ये आणि पूर्णत्वाची स्थिती यांसह.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'स्काडाव्ह्यू — प्लांट, थेट',
          body: "<strong>स्काडाव्ह्यू — अमेझॉन वर्कस्पेस</strong> संपूर्ण प्लांट एकाच आकृतीत उघडतो, <strong>LIVE</strong> बॅज व शेवटच्या रीडिंगच्या वेळेसह. संपूर्ण ट्रीटमेंट ट्रेन एका कॅनव्हासवर — डावीकडील कलेक्शन टाक्यांपासून MBBR, ट्यूब सेटलर व क्लोरीन कॉन्टॅक्ट टँकमार्गे उजवीकडील फिल्टर व ट्रीटेड वॉटर टाक्यांपर्यंत. वरच्या पट्टीत <strong>ग्रुप कंट्रोल</strong>, <strong>युनिट प्रोसेसेस</strong> व <strong>सिलेक्ट पेज</strong>.",
          voice: "स्काडा व्ह्यू संपूर्ण प्लांट एकाच थेट आकृतीत उघडतो — डावीकडील टाक्यांपासून उजवीकडील ट्रीटेड वॉटर टाक्यांपर्यंत.",
        },
        {
          label: 'आकृती', title: 'एका पंपापर्यंत',
          body: "झूम केल्यावर प्रत्येक युनिट आपली थेट स्थिती दाखवते. <strong>MBBR 1</strong> व <strong>2</strong>, <strong>ट्यूब सेटलर</strong>, <strong>क्लोरीन कॉन्टॅक्ट टँक</strong>, <strong>पॉली डोसिंग टँक</strong> व <strong>प्रेशर सँड फिल्टर</strong> स्वतःच्याच रूपात काढलेले आहेत, आणि प्रत्येक पंपावर <strong>ON/OFF</strong> खूण — चालू असल्यास हिरवी, बंद असल्यास लाल. <strong>स्लज रीसर्क्युलेशन पंप-1</strong> चालू तर <strong>-2</strong> बंद.",
          voice: "झूम केल्यावर प्रत्येक युनिट आपली थेट स्थिती आणि प्रत्येक पंप ऑन-ऑफ खूण दाखवतो — चालू हिरवी, बंद लाल.",
        },
        {
          label: 'डेटा इनपुट', title: 'प्रयोगशाळेच्या नोंदी, हाताने',
          body: "<strong>डेटा इनपुट</strong> हा त्या मॅन्युअल आकड्यांमागचा फॉर्म आहे. प्रत्येक सेन्सर ओळीत त्याची <strong>व्हॅलिड रेंज</strong> व <strong>सेफ रेंज</strong>, <strong>एंटर व्हॅल्यू</strong> बॉक्स, आवश्यक तिथे <strong>मीडिया</strong> स्तंभ, अपेक्षित <strong>फ्रिक्वेन्सी</strong>, वेळेसह <strong>लास्ट व्हॅल्यू</strong>, आणि <strong>स्टेटस</strong> आहे. <strong>TDS</strong> <strong>दिवसातून एकदा</strong> अपेक्षित असून <strong>Pending</strong> दाखवते; <strong>COD</strong> व <strong>BOD</strong> महिन्यातून. <strong>अपलोड फाइल</strong> संपूर्ण शीट एकाच वेळी घेते.",
          voice: "प्रत्येक सेन्सर ओळीत व्हॅलिड व सेफ रेंज, अपेक्षित फ्रिक्वेन्सी, शेवटचे मूल्य आणि स्टेटस आहे. अपलोड फाइल संपूर्ण शीट घेते.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणते पान',
          body: "म्हणून: शिफ्टसाठी <strong>डॅशबोर्ड</strong> — प्रवाह, गुणवत्ता, ऊर्जा व कार्यक्षमता एकाच स्क्रोलमध्ये. प्लॅटफॉर्मला काय सापडले त्यासाठी <strong>इनसाइट लिस्ट</strong>, आणि त्यानंतरच्या कामासाठी <strong>टास्क लिस्ट</strong>. स्टोअरच्या वापरासाठी <strong>इन्व्हेंटरी</strong>, हाताने येणाऱ्या नोंदींसाठी <strong>डेटा इनपुट</strong>, आणि प्लांट चालताना पाहायचा असेल तर <strong>स्काडाव्ह्यू</strong>. एक पेज सिलेक्टर, एक ग्रॅन्युलॅरिटी, एक कालमर्यादा — आणि बाकी सर्व मागोमाग.",
          voice: "शिफ्टसाठी डॅशबोर्ड, सापडलेल्यासाठी इनसाइट, पुढच्या कामासाठी टास्क, बाकीसाठी इन्व्हेंटरी व डेटा इनपुट, आणि पाहण्यासाठी स्काडा व्ह्यू.",
        },
      ],
    },
  },
};

export default lesson;
