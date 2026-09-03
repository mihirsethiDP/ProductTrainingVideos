import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-taj-exotica-dashboard`;

/**
 * Demo — Taj Exotica (250 KLD), dashboard overview.   (hidden module-demos)
 * Built from one screen recording (4:45, Anupam Vivek / Taj Exotica account):
 * login → the "Taj Hotel Goa" Dashboard page (Water Quantity KPIs, the quality
 * row, widget tools + expand/zoom/CSV, Energy Consumption, Current Status,
 * Total Inlet & Outlet Water, Tickets Generated & Closed, the full-width
 * Equipments Running Hours table) → the side navigation → ScadaView (Taj Hotels
 * Workspace, live) → Taj Exotica (250 KLD) Analytics (Water Quantity and
 * Availability, Inlet and Outlet Water Quality, Biological Process Health,
 * Energy, Equipment Performance and Maintenance) → the Weekly and Monthly
 * Report pages.
 * Style: `overview` — one step per page/feature area, two-sentence voices,
 * ~2.5 minutes. `job.notes` was empty, so nothing overrides the default style;
 * every screen and widget group that appears in the recording is covered, in
 * product-flow order (navigation first, then Dashboard top-to-bottom, then the
 * pages the menu leads to) rather than the presenter's back-and-forth.
 * Real 1280px frames from the recording; the baked OS cursor is patched out of
 * every one (delogo; `nav` uses the second drawer opening because in the first
 * the pointer sat on top of the "Taj Exotica (250 KLD)" label).
 * Two things the recording shows that the copy deliberately does NOT overclaim:
 * the Dashboard's Page selector holds only "Taj Hotel Goa" for this account,
 * and Inventory / Insight List / Tickets / Maintenance are named in step 1 from
 * the menu but never opened, so no step describes their contents.
 */
const lesson: Lesson = {
  id: 'demo-taj-exotica-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 8,
  estimatedMinutes: 3,
  expiresAt: '2026-10-03', // 30 days after the job's created_at (2026-09-03) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    header: `${BASE}/header.jpg`,
    range: `${BASE}/range.jpg`,
    kpi: `${BASE}/kpi.jpg`,
    quality: `${BASE}/quality.jpg`,
    widget: `${BASE}/widget.jpg`,
    energy: `${BASE}/energy.jpg`,
    status: `${BASE}/status.jpg`,
    tickets: `${BASE}/tickets.jpg`,
    hours: `${BASE}/hours.jpg`,
    scada: `${BASE}/scada.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    equipment: `${BASE}/equipment.jpg`,
    reports: `${BASE}/reports.jpg`,
    wrap: `${BASE}/wrap.jpg`,
  },
  layouts: [
    // S1 — the side navigation: every screen this account can reach
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every screen',
      spotlight: { top: '8%', left: '0%', width: '14%', height: '44%' },
      cursor: [
        { at: 0, x: 15.2, y: 4.3, click: true },
        { at: 0.3, x: 4.5, y: 12.6 },
        { at: 0.55, x: 5, y: 24.9 },
        { at: 0.8, x: 5.6, y: 37.2 },
        { at: 0.95, x: 6.5, y: 46.4, click: true },
      ],
    },
    // S2 — the header controls that drive every widget on the page
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '17.1%', left: '1.5%', width: '97%', height: '11%' },
      cursor: [
        { at: 0, x: 6.8, y: 23.8, click: true },
        { at: 0.35, x: 55.7, y: 23.8 },
        { at: 0.6, x: 74.2, y: 23.8 },
        { at: 0.85, x: 82.9, y: 13.7, click: true },
        { at: 0.97, x: 91.8, y: 13.7 },
      ],
    },
    // S3 — the range picker: presets, custom dates, granularity, Smart Hours
    {
      mode: 'detail', screenshot: 'range', caption: 'Pick a window, the page follows',
      spotlight: { top: '17.9%', left: '39.5%', width: '34.8%', height: '10.2%' },
      cursor: [
        { at: 0, x: 46.8, y: 20 },
        { at: 0.3, x: 42.1, y: 25.8 },
        { at: 0.55, x: 25.4, y: 60.6 },
        { at: 0.8, x: 26.3, y: 66 },
        { at: 0.95, x: 74.6, y: 82.3, click: true },
      ],
    },
    // S4 — Water Quantity: efficiency, inlet, outlet + the comparison strips
    {
      mode: 'detail', screenshot: 'kpi', caption: 'Efficiency, in and out',
      spotlight: { top: '31.6%', left: '1.6%', width: '47.8%', height: '33.3%' },
      cursor: [
        { at: 0, x: 9.3, y: 49.8 },
        { at: 0.35, x: 25.4, y: 45 },
        { at: 0.6, x: 41.7, y: 45 },
        { at: 0.9, x: 14.8, y: 61.4 },
      ],
    },
    // S5 — the quality row, each number carrying its own reference
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, against the reference',
      spotlight: { top: '16.2%', left: '1.6%', width: '64.1%', height: '69.1%' },
      cursor: [
        { at: 0, x: 7, y: 18.3 },
        { at: 0.35, x: 17.4, y: 55 },
        { at: 0.65, x: 41.7, y: 29.5 },
        { at: 0.9, x: 57.3, y: 29.5 },
      ],
    },
    // S6 — the tools on every widget: CSV, expand, chart type, edit, zoom
    {
      mode: 'detail', screenshot: 'widget', caption: 'Open any widget up',
      spotlight: { top: '18.4%', left: '85.9%', width: '9%', height: '4.8%' },
      cursor: [
        { at: 0, x: 20, y: 30 },
        { at: 0.35, x: 45, y: 58 },
        { at: 0.7, x: 70, y: 58 },
        { at: 0.95, x: 89.1, y: 20.8, click: true },
      ],
    },
    // S7 — Energy Consumption, and the per-KL number beside the total
    {
      mode: 'detail', screenshot: 'energy', caption: 'What the treatment cost',
      spotlight: { top: '63.1%', left: '85.2%', width: '8.6%', height: '5.1%' },
      cursor: [
        { at: 0, x: 12.3, y: 28 },
        { at: 0.35, x: 40, y: 45 },
        { at: 0.7, x: 70, y: 45 },
        { at: 0.95, x: 89, y: 65.5 },
      ],
    },
    // S8 — Current Status: tanks, flow cycles, running hours
    {
      mode: 'detail', screenshot: 'status', caption: 'The plant right now',
      spotlight: { top: '21.8%', left: '1.5%', width: '97%', height: '68.3%' },
      cursor: [
        { at: 0, x: 5.6, y: 23.5 },
        { at: 0.35, x: 15.9, y: 55.8 },
        { at: 0.65, x: 49.9, y: 45.4 },
        { at: 0.9, x: 73.1, y: 31.5 },
      ],
    },
    // S9 — cumulative water, and the tickets the plant has raised
    {
      mode: 'detail', screenshot: 'tickets', caption: 'Findings become tickets',
      spotlight: { top: '47.4%', left: '34.1%', width: '64.1%', height: '25.1%' },
      cursor: [
        { at: 0, x: 15.9, y: 62.6 },
        { at: 0.35, x: 45, y: 60.2 },
        { at: 0.65, x: 72.7, y: 60.4 },
        { at: 0.9, x: 81.6, y: 68 },
      ],
    },
    // S10 — Equipments Running Hours: four windows on the same machines
    {
      mode: 'detail', screenshot: 'hours', caption: 'Hours, four windows at once',
      spotlight: { top: '38.9%', left: '39.5%', width: '58.2%', height: '6.8%' },
      cursor: [
        { at: 0, x: 10.5, y: 41.5 },
        { at: 0.35, x: 44.8, y: 41.6 },
        { at: 0.6, x: 58.9, y: 41.6 },
        { at: 0.85, x: 89.5, y: 41.6 },
        { at: 0.97, x: 21, y: 51.9 },
      ],
    },
    // S11 — ScadaView: the workspace, live, and the way into the plant diagram
    {
      mode: 'detail', screenshot: 'scada', caption: 'ScadaView — live',
      spotlight: { top: '35.8%', left: '35.5%', width: '25%', height: '42.7%' },
      cursor: [
        { at: 0, x: 6.7, y: 13.1 },
        { at: 0.3, x: 13.5, y: 13.1 },
        { at: 0.6, x: 84.8, y: 13, click: true },
        { at: 0.9, x: 47.9, y: 52.9, click: true },
      ],
    },
    // S12 — the Analytics page, grouped by question
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Analytics — the plant in depth',
      spotlight: { top: '36.2%', left: '1.5%', width: '97%', height: '46.1%' },
      cursor: [
        { at: 0, x: 6.2, y: 22.2, click: true },
        { at: 0.3, x: 13.5, y: 60 },
        { at: 0.55, x: 37.7, y: 62.4 },
        { at: 0.8, x: 86.2, y: 56.3 },
        { at: 0.95, x: 45.5, y: 96.1 },
      ],
    },
    // S13 — Equipment Performance: the blower rotation, one or zero
    {
      mode: 'detail', screenshot: 'equipment', caption: 'Which blower is actually running',
      spotlight: { top: '29%', left: '10.2%', width: '81.3%', height: '41.8%' },
      cursor: [
        { at: 0, x: 42.7, y: 28 },
        { at: 0.35, x: 17.2, y: 31 },
        { at: 0.65, x: 28.4, y: 31 },
        { at: 0.9, x: 60, y: 31 },
      ],
    },
    // S14 — the Weekly and Monthly Report pages, each with its own range
    {
      mode: 'detail', screenshot: 'reports', caption: 'A week, and a month',
      spotlight: { top: '18.8%', left: '1.6%', width: '11.3%', height: '10.2%' },
      cursor: [
        { at: 0, x: 7.2, y: 23.8, click: true },
        { at: 0.35, x: 55.8, y: 23.8 },
        { at: 0.6, x: 63.3, y: 23.8 },
        { at: 0.9, x: 6.6, y: 97.4 },
        { at: 0.97, x: 16.9, y: 97.4 },
      ],
    },
    // S15 — wrap: which page serves which job
    {
      mode: 'detail', screenshot: 'wrap', caption: 'Which page for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 1.2, y: 4.3 },
        { at: 0.35, x: 6.8, y: 23.8 },
        { at: 0.7, x: 20, y: 50 },
        { at: 0.95, x: 82.9, y: 13.7 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Taj Exotica,<br><em>the whole plant on one screen.</em>',
      subtitle:
        'A two-and-a-half-minute tour of your platform — the dashboard, the numbers behind it, the plant running live, and the reports that summarise it.',
      chapter: 'Demo · Taj Exotica (250 KLD)',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every screen',
          body: "The <strong>menu icon</strong> opens your side navigation, and everything lives there: <strong>Dashboard</strong>, <strong>Inventory</strong>, <strong>Insight List</strong> and <strong>Tickets</strong> at the top, then <strong>ScadaView — Taj Hotels Workspace</strong>, and the plant itself, <strong>Taj Exotica (250 KLD)</strong> — expand it for <strong>Maintenance</strong> and <strong>Taj Exotica (250 KLD) Analytics</strong>. The <strong>search</strong> box above jumps straight to any of them.",
          voice: "Everything starts from this menu — Dashboard, Inventory, Insight List, Tickets, Scada View, and the plant with its own Analytics.",
        },
        {
          label: 'Controls', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on the <strong>Taj Hotel Goa</strong> page. Everything below it is driven by three controls: the <strong>Page</strong> selector, the <strong>Granularity</strong> — minutes, hours or days — and the <strong>From</strong> and <strong>To</strong> range. On the right, <strong>refresh</strong> re-pulls live data, the <strong>gear</strong> holds page settings, and <strong>Manage Reports/Dashboard</strong> is where the layout itself is edited.",
          voice: "The page selector, the granularity and the date range drive every widget below. Refresh pulls live data; manage reports edits the layout.",
        },
        {
          label: 'Range', title: 'Pick a window, the page follows',
          body: "Clicking the range opens the picker: <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, three, seven, ten or thirty days, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars. <strong>Granularity</strong> switches between <strong>Minutes</strong>, <strong>Hours</strong> and <strong>Days</strong>, and <strong>Smart Hours</strong> re-applies the same daily time slot across every date in the range. <strong>Apply Selection</strong> re-draws everything.",
          voice: "Presets from today out to six months, or pick your own dates. Choose minutes, hours or days, then apply.",
        },
        {
          label: 'Flows', title: 'Efficiency, in and out',
          body: "The first row is the plant in three numbers: <strong>Plant Efficiency 62.06%</strong> on a gauge, <strong>Inlet Flow 154.73 KL</strong> and <strong>Outlet Flow 96.03 KL</strong>. The strip under each card carries the two timestamps it is comparing and the change between them — efficiency <strong>up 2%</strong>, both flows <strong>down</strong> on the day before.",
          voice: "Plant efficiency sixty two percent, inlet one fifty four K L, outlet ninety six. Each card carries its change against the day before.",
        },
        {
          label: 'Quality', title: 'Quality, against the reference',
          body: "Below it, the quality row. <strong>Outlet Turbidity</strong> is plotted against its reference band — the pink zone is out of spec — with <strong>SBR DO 0.3 ppm</strong> and <strong>Average Outlet Turbidity 6.64 NTU</strong> beside it. That card is labelled <strong>ref: &lt;5 NTU</strong>, so the target travels with the number instead of living in someone's head.",
          voice: "Outlet turbidity against its reference band, S B R D O at zero point three p p m, and average turbidity at six point six four N T U.",
        },
        {
          label: 'Widgets', title: 'Open any widget up',
          body: "Every widget carries the same tools on hover: <strong>Download CSV</strong>, <strong>Expanded View</strong>, a chart-type menu that switches between <strong>Table</strong> and <strong>Bar Graph</strong>, <strong>Edit Widget</strong>, and an <strong>info</strong> note explaining what is plotted. Expanded, you can drag across the chart to zoom into a few minutes, then press <strong>Reset Zoom</strong> to come back out.",
          voice: "Hover any widget for download, expand, table or bar graph, and edit. Expanded, drag to zoom in and reset to come back.",
        },
        {
          label: 'Energy', title: 'What the treatment cost',
          body: "<strong>Energy Consumption</strong> pairs the draw with the water it treated: <strong>367</strong> over the day, <strong>down 9%</strong>, and <strong>Energy Per KL 3.82</strong>, <strong>up 8%</strong> — cost per unit of water, not just a total. Stretched over thirty days the daily draw sits between <strong>380</strong> and <strong>460</strong>, which is what makes the fall to <strong>247.7</strong> obvious.",
          voice: "Energy consumption three sixty seven, and three point eight two per K L. Over thirty days, the daily draw makes any drop obvious.",
        },
        {
          label: 'Status', title: 'The plant right now',
          body: "<strong>Current Status</strong> is the live picture. <strong>Tank Levels</strong> holds <strong>Equalization 43.02</strong>, <strong>Intermediate Water 34.86</strong> and <strong>Sludge holding 0.74</strong> — click a legend entry to drop that series and read the rest. <strong>Inlet & Outlet Flow</strong> shows the pumping cycles, and <strong>Equipments Running Hours</strong> lists every pump and blower with its hours.",
          voice: "Tank levels for all three tanks, the pumping cycles beside them, and running hours for every pump and blower.",
        },
        {
          label: 'Tickets', title: 'Findings become tickets',
          body: "<strong>Total Inlet & Outlet Water</strong> runs the two cumulative curves side by side. Beside it, <strong>Tickets Generated & Closed</strong> carries the work: <em>“Inlet flow is less as 1 flowmeter is not connected”</em> and <em>“Reactor feed Pump running in Auto mode”</em>, each tagged <strong>Plant process issues</strong> with the plant name and the date it was raised.",
          voice: "Cumulative inlet against outlet, and beside it the open tickets — a flowmeter not connected, a feed pump left in auto.",
        },
        {
          label: 'Hours', title: 'Hours, four windows at once',
          body: "The full-width <strong>Equipments Running Hours</strong> table reads every pump and blower across four windows at the same time — <strong>Today</strong>, <strong>Last 24 Hours</strong>, <strong>Yesterday</strong> and <strong>Last 7 Days</strong>. <strong>Reactor Feed Pump-1</strong> at <strong>174.48</strong> hours over the week, against <strong>0</strong> for pumps 2 and 3, says which unit is carrying the plant.",
          voice: "The same equipment across today, last twenty four hours, yesterday and last seven days — so you can see which unit carries the plant.",
        },
        {
          label: 'ScadaView', title: 'The plant, running live',
          body: "<strong>ScadaView — Taj Hotels Workspace</strong> opens the workspace with a <strong>LIVE</strong> badge and the timestamp of the last reading. Click the <strong>Taj</strong> node to drop into the plant diagram itself, where each tank, flowmeter and blower carries its own live value, and the zoom controls let you get right up to a single unit.",
          voice: "Scada View opens the workspace live. Click the plant to drop into the diagram, where every tank and flowmeter reads live.",
        },
        {
          label: 'Analytics', title: 'Analytics — the plant in depth',
          body: "<strong>Taj Exotica (250 KLD) Analytics</strong> is the deeper page, grouped by question. <strong>Water Quantity and Availability</strong> holds <strong>Tank Levels</strong>, <strong>Flow rate</strong>, <strong>Sludge Wasting flowmeter</strong>, <strong>Flow Meters</strong>, <strong>Backwash Flowmeter</strong> and the <strong>Treated</strong> and <strong>Inlet Water</strong> totals — then come <strong>Inlet and Outlet Water Quality</strong>, <strong>Biological Process Health</strong>, <strong>Energy Consumption</strong> and <strong>Equipment Performance and Maintenance</strong>.",
          voice: "Analytics groups the plant by question — quantity and availability, water quality, biological health, energy, and equipment performance.",
        },
        {
          label: 'Equipment', title: 'Which blower is actually running',
          body: "<strong>Equipment Performance and Maintenance</strong> plots every machine as a one-or-zero line. <strong>Aeration Blowers</strong> shows <strong>Blower-1</strong>, <strong>2</strong> and <strong>3</strong> handing over in a clean rotation, so no single machine takes the whole load. The same section carries the <strong>reactor</strong> and <strong>filter feed pumps</strong>, <strong>MGF &amp; ACF pressure</strong>, <strong>UF pressure</strong>, and the <strong>Auto/Manual</strong> and <strong>Trip status</strong> lists.",
          voice: "Each machine plots as one or zero. Here the three aeration blowers hand over in a clean rotation, and trip status stays at zero.",
        },
        {
          label: 'Reports', title: 'A week, and a month',
          body: "The <strong>Page</strong> selector on Analytics holds three views: <strong>Main Page</strong>, <strong>Weekly Report</strong> and <strong>Monthly Report</strong>. Each sets its own range as it opens — the weekly totals <strong>809.37 KL</strong> treated against <strong>1375.64 KL</strong> in, the monthly <strong>3089.21</strong> against <strong>5507.95</strong> — so a period summary is one click instead of a date entry.",
          voice: "Weekly and monthly report pages set their own range on open — eight hundred nine K L treated in the week, three thousand in the month.",
        },
        {
          label: 'Wrap', title: 'Which page for which job',
          body: "So: <strong>Dashboard</strong> for the shift — efficiency, flow, quality, energy, tanks and tickets in one scroll. <strong>Analytics</strong> when you need the process behind a number. <strong>ScadaView</strong> when you want to watch the plant run. <strong>Weekly</strong> and <strong>Monthly Report</strong> when someone asks for the period. One page selector, one date range, and everything follows.",
          voice: "Dashboard for the shift, Analytics for the process, Scada View to watch it run, and the report pages when someone asks for the period.",
        },
      ],
    },
    hi: {
      title: 'ताज एक्सोटिका,<br><em>पूरा प्लांट एक स्क्रीन पर।</em>',
      subtitle:
        'आपके प्लेटफ़ॉर्म का ढाई मिनट का दौरा — डैशबोर्ड, उसके पीछे के आँकड़े, लाइव चलता प्लांट, और उसे समेटने वाली रिपोर्ट।',
      chapter: 'डेमो · ताज एक्सोटिका (250 KLD)',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर स्क्रीन',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और सब कुछ वहीं है: ऊपर <strong>डैशबोर्ड</strong>, <strong>इन्वेंटरी</strong>, <strong>इनसाइट लिस्ट</strong> और <strong>टिकट</strong>, फिर <strong>स्काडाव्यू — ताज होटल्स वर्कस्पेस</strong>, और प्लांट स्वयं, <strong>ताज एक्सोटिका (250 KLD)</strong> — उसे खोलें तो <strong>मेंटेनेंस</strong> और <strong>ताज एक्सोटिका (250 KLD) एनालिटिक्स</strong> मिलते हैं। ऊपर का <strong>सर्च</strong> बॉक्स सीधे किसी भी स्क्रीन पर ले जाता है।",
          voice: "सब कुछ इसी मेन्यू से — डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, टिकट, स्काडा व्यू, और प्लांट के साथ उसका एनालिटिक्स।",
        },
        {
          label: 'कंट्रोल', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>ताज होटल गोवा</strong> पेज पर खुलता है। नीचे का सब कुछ तीन कंट्रोल से चलता है: <strong>पेज</strong> सिलेक्टर, <strong>ग्रैन्युलैरिटी</strong> — मिनट, घंटे या दिन — और <strong>फ्रॉम</strong> व <strong>टू</strong> की समय सीमा। दाईं ओर <strong>रिफ़्रेश</strong> लाइव डेटा फिर से लाता है, <strong>गियर</strong> में पेज सेटिंग्स हैं, और <strong>मैनेज रिपोर्ट्स/डैशबोर्ड</strong> से लेआउट खुद बदला जाता है।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा नीचे का हर विजेट चलाते हैं। रिफ़्रेश लाइव डेटा लाता है; मैनेज रिपोर्ट्स लेआउट बदलता है।",
        },
        {
          label: 'समय सीमा', title: 'सीमा चुनें, पूरा पेज बदल जाएगा',
          body: "समय सीमा पर क्लिक करने से पिकर खुलता है: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>लास्ट 24 आवर्स</strong>, तीन, सात, दस या तीस दिन, <strong>3</strong> या <strong>6 महीने</strong>, या दो कैलेंडरों पर <strong>कस्टम</strong>। <strong>ग्रैन्युलैरिटी</strong> <strong>मिनट</strong>, <strong>घंटे</strong> और <strong>दिन</strong> के बीच बदलती है, और <strong>स्मार्ट आवर्स</strong> उसी दैनिक समय-खंड को सीमा की हर तारीख पर लागू करती है। <strong>अप्लाई सिलेक्शन</strong> सब फिर से बनाता है।",
          voice: "आज से छह महीने तक के प्रीसेट, या अपनी तारीखें चुनें। मिनट, घंटे या दिन चुनकर अप्लाई करें।",
        },
        {
          label: 'फ्लो', title: 'दक्षता, अंदर और बाहर',
          body: "पहली पंक्ति प्लांट को तीन आँकड़ों में रखती है: गेज पर <strong>प्लांट दक्षता 62.06%</strong>, <strong>इनलेट फ्लो 154.73 KL</strong> और <strong>आउटलेट फ्लो 96.03 KL</strong>। हर कार्ड के नीचे की पट्टी वे दोनों समय बताती है जिनकी तुलना हो रही है और उनके बीच का बदलाव — दक्षता <strong>2% ऊपर</strong>, दोनों फ्लो पिछले दिन से <strong>नीचे</strong>।",
          voice: "प्लांट दक्षता बासठ प्रतिशत, इनलेट एक सौ चौवन के एल, आउटलेट छियानवे। हर कार्ड पिछले दिन से अपना बदलाव दिखाता है।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, रेफरेंस के सामने',
          body: "उसके नीचे गुणवत्ता की पंक्ति। <strong>आउटलेट टर्बिडिटी</strong> अपने रेफरेंस बैंड के सामने प्लॉट होती है — गुलाबी क्षेत्र सीमा से बाहर है — और साथ में <strong>SBR DO 0.3 ppm</strong> व <strong>औसत आउटलेट टर्बिडिटी 6.64 NTU</strong>। उस कार्ड पर <strong>ref: &lt;5 NTU</strong> लिखा है, यानी लक्ष्य आँकड़े के साथ ही चलता है, किसी के दिमाग़ में नहीं रहता।",
          voice: "आउटलेट टर्बिडिटी अपने रेफरेंस बैंड के सामने, एस बी आर डी ओ शून्य दशमलव तीन पी पी एम, और औसत टर्बिडिटी छह दशमलव छह चार एन टी यू।",
        },
        {
          label: 'विजेट', title: 'कोई भी विजेट खोलकर देखें',
          body: "हर विजेट पर हॉवर करने से वही टूल मिलते हैं: <strong>डाउनलोड CSV</strong>, <strong>एक्सपैंडेड व्यू</strong>, चार्ट-टाइप मेन्यू जो <strong>टेबल</strong> और <strong>बार ग्राफ़</strong> के बीच बदलता है, <strong>एडिट विजेट</strong>, और एक <strong>इन्फ़ो</strong> नोट जो बताता है कि क्या प्लॉट हुआ है। एक्सपैंड करके चार्ट पर ड्रैग करें तो कुछ मिनटों तक ज़ूम हो जाता है, और <strong>रीसेट ज़ूम</strong> वापस ले आता है।",
          voice: "किसी भी विजेट पर हॉवर करें — डाउनलोड, एक्सपैंड, टेबल या बार ग्राफ़, और एडिट। एक्सपैंड करके ड्रैग से ज़ूम करें, रीसेट से वापस।",
        },
        {
          label: 'ऊर्जा', title: 'शोधन की लागत क्या रही',
          body: "<strong>ऊर्जा खपत</strong> खपत को शोधित पानी के साथ जोड़ती है: दिन भर में <strong>367</strong>, <strong>9% नीचे</strong>, और <strong>प्रति KL ऊर्जा 3.82</strong>, <strong>8% ऊपर</strong> — यानी प्रति इकाई पानी की लागत, सिर्फ़ कुल नहीं। तीस दिनों तक फैलाएँ तो दैनिक खपत <strong>380</strong> और <strong>460</strong> के बीच रहती है, इसी से <strong>247.7</strong> तक की गिरावट तुरंत दिख जाती है।",
          voice: "ऊर्जा खपत तीन सौ सड़सठ, और प्रति के एल तीन दशमलव आठ दो। तीस दिनों की दैनिक खपत में कोई भी गिरावट साफ़ दिखती है।",
        },
        {
          label: 'स्थिति', title: 'इस समय का प्लांट',
          body: "<strong>करंट स्टेटस</strong> लाइव तस्वीर है। <strong>टैंक लेवल</strong> में <strong>इक्वलाइज़ेशन 43.02</strong>, <strong>इंटरमीडिएट वॉटर 34.86</strong> और <strong>स्लज होल्डिंग 0.74</strong> हैं — लेजेंड पर क्लिक करके किसी सीरीज़ को हटाकर बाकी पढ़ सकते हैं। <strong>इनलेट और आउटलेट फ्लो</strong> पंपिंग चक्र दिखाता है, और <strong>इक्विपमेंट्स रनिंग आवर्स</strong> हर पंप व ब्लोअर के घंटे गिनता है।",
          voice: "तीनों टैंक के लेवल, साथ में पंपिंग चक्र, और हर पंप व ब्लोअर के चलने के घंटे।",
        },
        {
          label: 'टिकट', title: 'जो मिला, वही टिकट बन गया',
          body: "<strong>टोटल इनलेट और आउटलेट वॉटर</strong> दोनों संचयी वक्र साथ-साथ चलाता है। उसके बगल में <strong>टिकट्स जेनरेटेड और क्लोज़्ड</strong> काम रखता है: <em>“इनलेट फ्लो कम है क्योंकि 1 फ्लोमीटर जुड़ा नहीं है”</em> और <em>“रिएक्टर फ़ीड पंप ऑटो मोड में चल रहा है”</em> — हर एक <strong>प्लांट प्रोसेस इश्यूज़</strong> टैग के साथ, प्लांट का नाम और उठाए जाने की तारीख लिए हुए।",
          voice: "संचयी इनलेट और आउटलेट, और बगल में खुले टिकट — एक फ्लोमीटर जुड़ा नहीं, एक फ़ीड पंप ऑटो में छूटा हुआ।",
        },
        {
          label: 'घंटे', title: 'घंटे, चार खिड़कियाँ एक साथ',
          body: "पूरी चौड़ाई वाली <strong>इक्विपमेंट्स रनिंग आवर्स</strong> टेबल हर पंप और ब्लोअर को एक ही समय चार खिड़कियों में पढ़ती है — <strong>टुडे</strong>, <strong>लास्ट 24 आवर्स</strong>, <strong>यस्टरडे</strong> और <strong>लास्ट 7 डेज़</strong>। हफ़्ते में <strong>रिएक्टर फ़ीड पंप-1</strong> के <strong>174.48</strong> घंटे, और पंप 2 व 3 के <strong>0</strong> — इससे साफ़ है कि प्लांट कौन सी इकाई उठा रही है।",
          voice: "वही उपकरण आज, पिछले चौबीस घंटे, कल और पिछले सात दिन में — जिससे दिखे कि प्लांट कौन सी इकाई उठा रही है।",
        },
        {
          label: 'स्काडाव्यू', title: 'प्लांट, लाइव चलता हुआ',
          body: "<strong>स्काडाव्यू — ताज होटल्स वर्कस्पेस</strong> वर्कस्पेस को <strong>LIVE</strong> बैज और आख़िरी रीडिंग के समय के साथ खोलता है। <strong>ताज</strong> नोड पर क्लिक करके सीधे प्लांट के आरेख में उतरें, जहाँ हर टैंक, फ्लोमीटर और ब्लोअर अपना लाइव मान रखता है, और ज़ूम कंट्रोल से किसी एक इकाई तक पहुँचा जा सकता है।",
          voice: "स्काडा व्यू वर्कस्पेस को लाइव खोलता है। प्लांट पर क्लिक करके आरेख में उतरें, जहाँ हर टैंक और फ्लोमीटर लाइव पढ़ता है।",
        },
        {
          label: 'एनालिटिक्स', title: 'एनालिटिक्स — प्लांट गहराई में',
          body: "<strong>ताज एक्सोटिका (250 KLD) एनालिटिक्स</strong> गहरा पेज है, सवालों के हिसाब से बँटा हुआ। <strong>जल मात्रा और उपलब्धता</strong> में <strong>टैंक लेवल</strong>, <strong>फ्लो रेट</strong>, <strong>स्लज वेस्टिंग फ्लोमीटर</strong>, <strong>फ्लो मीटर</strong>, <strong>बैकवॉश फ्लोमीटर</strong> और <strong>शोधित</strong> व <strong>इनलेट पानी</strong> के कुल हैं — फिर <strong>इनलेट और आउटलेट जल गुणवत्ता</strong>, <strong>जैविक प्रक्रिया स्वास्थ्य</strong>, <strong>ऊर्जा खपत</strong> और <strong>उपकरण प्रदर्शन और मेंटेनेंस</strong> आते हैं।",
          voice: "एनालिटिक्स प्लांट को सवालों में बाँटता है — मात्रा और उपलब्धता, जल गुणवत्ता, जैविक स्वास्थ्य, ऊर्जा, और उपकरण प्रदर्शन।",
        },
        {
          label: 'उपकरण', title: 'असल में कौन सा ब्लोअर चल रहा है',
          body: "<strong>उपकरण प्रदर्शन और मेंटेनेंस</strong> हर मशीन को एक-या-शून्य की रेखा में प्लॉट करता है। <strong>एरेशन ब्लोअर</strong> दिखाता है कि <strong>ब्लोअर-1</strong>, <strong>2</strong> और <strong>3</strong> साफ़ बारी-बारी से चलते हैं, यानी पूरा भार किसी एक मशीन पर नहीं पड़ता। उसी सेक्शन में <strong>रिएक्टर</strong> व <strong>फ़िल्टर फ़ीड पंप</strong>, <strong>MGF और ACF प्रेशर</strong>, <strong>UF प्रेशर</strong>, और <strong>ऑटो/मैनुअल</strong> व <strong>ट्रिप स्टेटस</strong> की सूचियाँ हैं।",
          voice: "हर मशीन एक या शून्य में दिखती है। यहाँ तीनों एरेशन ब्लोअर साफ़ बारी-बारी से चलते हैं, और ट्रिप स्टेटस शून्य पर रहता है।",
        },
        {
          label: 'रिपोर्ट', title: 'एक हफ़्ता, और एक महीना',
          body: "एनालिटिक्स के <strong>पेज</strong> सिलेक्टर में तीन दृश्य हैं: <strong>मेन पेज</strong>, <strong>वीकली रिपोर्ट</strong> और <strong>मंथली रिपोर्ट</strong>। हर एक खुलते ही अपनी समय सीमा तय कर लेता है — हफ़्ते का कुल <strong>809.37 KL</strong> शोधित बनाम <strong>1375.64 KL</strong> अंदर, महीने का <strong>3089.21</strong> बनाम <strong>5507.95</strong> — यानी अवधि का सारांश तारीख भरने के बजाय एक क्लिक है।",
          voice: "वीकली और मंथली रिपोर्ट पेज खुलते ही अपनी सीमा तय कर लेते हैं — हफ़्ते में आठ सौ नौ के एल शोधित, महीने में तीन हज़ार से ऊपर।",
        },
        {
          label: 'सारांश', title: 'कौन सा पेज किस काम के लिए',
          body: "तो: शिफ़्ट के लिए <strong>डैशबोर्ड</strong> — दक्षता, फ्लो, गुणवत्ता, ऊर्जा, टैंक और टिकट एक ही स्क्रॉल में। किसी आँकड़े के पीछे की प्रक्रिया चाहिए तो <strong>एनालिटिक्स</strong>। प्लांट को चलते देखना है तो <strong>स्काडाव्यू</strong>। कोई अवधि पूछे तो <strong>वीकली</strong> और <strong>मंथली रिपोर्ट</strong>। एक पेज सिलेक्टर, एक समय सीमा, और बाकी सब उसके पीछे चलता है।",
          voice: "शिफ़्ट के लिए डैशबोर्ड, प्रक्रिया के लिए एनालिटिक्स, चलते देखने के लिए स्काडा व्यू, और अवधि पूछे जाने पर रिपोर्ट पेज।",
        },
      ],
    },
    ta: {
      title: 'தாஜ் எக்ஸோட்டிகா,<br><em>முழு ஆலையும் ஒரே திரையில்.</em>',
      subtitle:
        'உங்கள் தளத்தின் இரண்டரை நிமிட சுற்றுப்பயணம் — டாஷ்போர்டு, அதற்குப் பின்னால் இருக்கும் எண்கள், நேரலையில் ஓடும் ஆலை, மற்றும் அதைச் சுருக்கும் அறிக்கைகள்.',
      chapter: 'டெமோ · தாஜ் எக்ஸோட்டிகா (250 KLD)',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரு மெனு, எல்லா திரைகளும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது, எல்லாமும் அங்கேயே: மேலே <strong>டாஷ்போர்டு</strong>, <strong>இன்வென்டரி</strong>, <strong>இன்சைட் லிஸ்ட்</strong> மற்றும் <strong>டிக்கெட்</strong>, பிறகு <strong>ஸ்கேடாவியூ — தாஜ் ஹோட்டல்ஸ் வொர்க்ஸ்பேஸ்</strong>, மற்றும் ஆலையே, <strong>தாஜ் எக்ஸோட்டிகா (250 KLD)</strong> — அதை விரித்தால் <strong>பராமரிப்பு</strong> மற்றும் <strong>தாஜ் எக்ஸோட்டிகா (250 KLD) அனலிட்டிக்ஸ்</strong> கிடைக்கும். மேலிருக்கும் <strong>தேடல்</strong> பெட்டி நேரடியாக எதற்கும் அழைத்துச் செல்லும்.",
          voice: "எல்லாம் இந்த மெனுவில் தொடங்குகிறது — டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டிக்கெட், ஸ்கேடா வியூ, மற்றும் ஆலையுடன் அதன் அனலிட்டிக்ஸ்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>தாஜ் ஹோட்டல் கோவா</strong> பக்கத்தில் திறக்கிறது. கீழே இருக்கும் அனைத்தையும் மூன்று கட்டுப்பாடுகள் இயக்குகின்றன: <strong>பேஜ்</strong> தேர்வு, <strong>கிரானுலாரிட்டி</strong> — நிமிடம், மணி அல்லது நாள் — மற்றும் <strong>From</strong> முதல் <strong>To</strong> வரையிலான காலவரம்பு. வலதுபுறம் <strong>ரிஃப்ரெஷ்</strong> நேரலைத் தரவை மீண்டும் இழுக்கிறது, <strong>கியர்</strong> பக்க அமைப்புகளை வைத்திருக்கிறது, <strong>மேனேஜ் ரிப்போர்ட்ஸ்/டாஷ்போர்டு</strong> தளவமைப்பையே மாற்றுகிறது.",
          voice: "பேஜ் தேர்வு, கிரானுலாரிட்டி மற்றும் காலவரம்பு கீழிருக்கும் ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. ரிஃப்ரெஷ் நேரலைத் தரவைக் கொண்டுவரும்.",
        },
        {
          label: 'காலவரம்பு', title: 'ஒரு காலத்தைத் தேர்வு செய், பக்கம் பின்தொடரும்',
          body: "காலவரம்பைக் கிளிக் செய்தால் தேர்வுப் பெட்டி திறக்கிறது: <strong>இன்று</strong>, <strong>நேற்று</strong>, <strong>கடந்த 24 மணி</strong>, மூன்று, ஏழு, பத்து அல்லது முப்பது நாட்கள், <strong>3</strong> அல்லது <strong>6 மாதம்</strong>, அல்லது இரட்டை நாட்காட்டியில் <strong>கஸ்டம்</strong>. <strong>கிரானுலாரிட்டி</strong> <strong>நிமிடம்</strong>, <strong>மணி</strong>, <strong>நாள்</strong> இடையே மாறுகிறது; <strong>ஸ்மார்ட் ஹவர்ஸ்</strong> அதே தினசரி நேரப் பகுதியை வரம்பின் ஒவ்வொரு தேதிக்கும் பயன்படுத்துகிறது. <strong>அப்ளை செலக்ஷன்</strong> அனைத்தையும் மீண்டும் வரையும்.",
          voice: "இன்று முதல் ஆறு மாதம் வரையிலான முன்னமைவுகள், அல்லது உங்கள் தேதிகள். நிமிடம், மணி அல்லது நாள் தேர்வு செய்து அப்ளை செய்யுங்கள்.",
        },
        {
          label: 'ஓட்டம்', title: 'செயல்திறன், உள்ளே வெளியே',
          body: "முதல் வரிசை ஆலையை மூன்று எண்களில் வைக்கிறது: கேஜில் <strong>ஆலை செயல்திறன் 62.06%</strong>, <strong>இன்லெட் ஓட்டம் 154.73 KL</strong> மற்றும் <strong>அவுட்லெட் ஓட்டம் 96.03 KL</strong>. ஒவ்வொரு அட்டையின் கீழிருக்கும் பட்டை ஒப்பிடப்படும் இரு நேரங்களையும் அவற்றுக்கிடையான மாற்றத்தையும் சொல்கிறது — செயல்திறன் <strong>2% மேலே</strong>, இரு ஓட்டங்களும் முந்தைய நாளை விட <strong>கீழே</strong>.",
          voice: "ஆலை செயல்திறன் அறுபத்திரண்டு சதவீதம், இன்லெட் நூற்று ஐம்பத்து நான்கு கே எல், அவுட்லெட் தொண்ணூற்று ஆறு. ஒவ்வொரு அட்டையும் முந்தைய நாள் மாற்றத்தைக் காட்டுகிறது.",
        },
        {
          label: 'தரம்', title: 'தரம், குறிப்புக்கு எதிராக',
          body: "அதற்குக் கீழே தரத்தின் வரிசை. <strong>அவுட்லெட் டர்பிடிட்டி</strong> அதன் குறிப்புப் பட்டைக்கு எதிராக வரையப்படுகிறது — இளஞ்சிவப்புப் பகுதி வரம்புக்கு வெளியே — உடன் <strong>SBR DO 0.3 ppm</strong> மற்றும் <strong>சராசரி அவுட்லெட் டர்பிடிட்டி 6.64 NTU</strong>. அந்த அட்டையில் <strong>ref: &lt;5 NTU</strong> என்றே எழுதப்பட்டுள்ளது, எனவே இலக்கு எண்ணுடன் சேர்ந்தே பயணிக்கிறது.",
          voice: "அவுட்லெட் டர்பிடிட்டி அதன் குறிப்புப் பட்டைக்கு எதிராக, எஸ் பி ஆர் டி ஓ பூஜ்யம் புள்ளி மூன்று பி பி எம், சராசரி டர்பிடிட்டி ஆறு புள்ளி ஆறு நான்கு என் டி யூ.",
        },
        {
          label: 'விட்ஜெட்', title: 'எந்த விட்ஜெட்டையும் விரித்துப் பாருங்கள்',
          body: "ஒவ்வொரு விட்ஜெட்டிலும் ஹோவரில் அதே கருவிகள்: <strong>டவுன்லோட் CSV</strong>, <strong>எக்ஸ்பாண்டட் வியூ</strong>, <strong>டேபிள்</strong> மற்றும் <strong>பார் கிராஃப்</strong> இடையே மாற்றும் வரைபட வகை மெனு, <strong>எடிட் விட்ஜெட்</strong>, மற்றும் என்ன வரையப்பட்டது என்பதை விளக்கும் <strong>இன்ஃபோ</strong> குறிப்பு. விரித்த பிறகு வரைபடத்தில் இழுத்து சில நிமிடங்களுக்கு ஜூம் செய்யலாம், <strong>ரீசெட் ஜூம்</strong> மீண்டும் வெளியே கொண்டுவரும்.",
          voice: "எந்த விட்ஜெட்டிலும் ஹோவர் செய்யுங்கள் — டவுன்லோட், விரிவு, டேபிள் அல்லது பார் கிராஃப், எடிட். விரித்து இழுத்து ஜூம் செய்யுங்கள், ரீசெட்டில் திரும்பவும்.",
        },
        {
          label: 'ஆற்றல்', title: 'சுத்திகரிப்பின் விலை என்ன',
          body: "<strong>ஆற்றல் நுகர்வு</strong> நுகர்வை சுத்திகரித்த நீருடன் இணைக்கிறது: நாளுக்கு <strong>367</strong>, <strong>9% கீழே</strong>, மற்றும் <strong>KL-க்கு ஆற்றல் 3.82</strong>, <strong>8% மேலே</strong> — அதாவது ஒரு அலகு நீருக்கான விலை, வெறும் மொத்தம் அல்ல. முப்பது நாட்களுக்கு விரித்தால் தினசரி நுகர்வு <strong>380</strong> முதல் <strong>460</strong> இடையே இருக்கிறது, அதனால்தான் <strong>247.7</strong> வரையிலான வீழ்ச்சி உடனே தெரிகிறது.",
          voice: "ஆற்றல் நுகர்வு முந்நூற்று அறுபத்தேழு, கே எல்-க்கு மூன்று புள்ளி எட்டு இரண்டு. முப்பது நாள் தினசரி நுகர்வில் எந்த வீழ்ச்சியும் தெளிவாகும்.",
        },
        {
          label: 'நிலை', title: 'இந்த நேரத்தின் ஆலை',
          body: "<strong>கரண்ட் ஸ்டேட்டஸ்</strong> நேரலைப் படம். <strong>டேங்க் லெவல்ஸ்</strong> <strong>ஈக்வலைசேஷன் 43.02</strong>, <strong>இண்டர்மீடியட் வாட்டர் 34.86</strong> மற்றும் <strong>ஸ்லட்ஜ் ஹோல்டிங் 0.74</strong> வைத்திருக்கிறது — லெஜெண்டைக் கிளிக் செய்து ஒரு தொடரை நீக்கி மற்றதைப் படிக்கலாம். <strong>இன்லெட் & அவுட்லெட் ஓட்டம்</strong> பம்பிங் சுழற்சிகளைக் காட்டுகிறது, <strong>இக்விப்மென்ட்ஸ் ரன்னிங் ஹவர்ஸ்</strong> ஒவ்வொரு பம்ப் மற்றும் பிளோயரின் மணிநேரங்களைப் பட்டியலிடுகிறது.",
          voice: "மூன்று தொட்டிகளின் அளவுகள், அருகில் பம்பிங் சுழற்சிகள், மற்றும் ஒவ்வொரு பம்ப் பிளோயரின் ஓடிய மணிநேரம்.",
        },
        {
          label: 'டிக்கெட்', title: 'கண்டறிந்தது டிக்கெட்டாகிறது',
          body: "<strong>டோட்டல் இன்லெட் & அவுட்லெட் வாட்டர்</strong> இரு திரள் வளைவுகளையும் அருகருகே ஓட்டுகிறது. அதன் பக்கத்தில் <strong>டிக்கெட்ஸ் ஜெனரேட்டட் & க்ளோஸ்டு</strong> வேலையை வைத்திருக்கிறது: <em>“ஒரு ஃப்ளோமீட்டர் இணைக்கப்படாததால் இன்லெட் ஓட்டம் குறைவு”</em> மற்றும் <em>“ரியாக்டர் ஃபீட் பம்ப் ஆட்டோ மோடில் ஓடுகிறது”</em> — ஒவ்வொன்றும் <strong>பிளான்ட் பிராசஸ் இஷ்யூஸ்</strong> என டேக் செய்யப்பட்டு, ஆலைப் பெயர் மற்றும் எழுப்பப்பட்ட தேதியுடன்.",
          voice: "திரள் இன்லெட் மற்றும் அவுட்லெட், அருகில் திறந்த டிக்கெட்டுகள் — இணைக்கப்படாத ஃப்ளோமீட்டர், ஆட்டோவில் விடப்பட்ட ஃபீட் பம்ப்.",
        },
        {
          label: 'மணிநேரம்', title: 'மணிநேரம், நான்கு சாளரங்கள் ஒரே சமயம்',
          body: "முழு அகல <strong>இக்விப்மென்ட்ஸ் ரன்னிங் ஹவர்ஸ்</strong> அட்டவணை ஒவ்வொரு பம்ப் மற்றும் பிளோயரையும் ஒரே சமயத்தில் நான்கு சாளரங்களில் படிக்கிறது — <strong>இன்று</strong>, <strong>கடந்த 24 மணி</strong>, <strong>நேற்று</strong> மற்றும் <strong>கடந்த 7 நாட்கள்</strong>. வாரத்தில் <strong>ரியாக்டர் ஃபீட் பம்ப்-1</strong> <strong>174.48</strong> மணி, பம்ப் 2 மற்றும் 3 <strong>0</strong> — எந்த அலகு ஆலையைச் சுமக்கிறது என்பதைச் சொல்கிறது.",
          voice: "அதே உபகரணம் இன்று, கடந்த இருபத்து நான்கு மணி, நேற்று மற்றும் கடந்த ஏழு நாட்களில் — எந்த அலகு ஆலையைச் சுமக்கிறது என்று தெரியும்.",
        },
        {
          label: 'ஸ்கேடாவியூ', title: 'ஆலை, நேரலையில் ஓடுகிறது',
          body: "<strong>ஸ்கேடாவியூ — தாஜ் ஹோட்டல்ஸ் வொர்க்ஸ்பேஸ்</strong> வொர்க்ஸ்பேஸை <strong>LIVE</strong> பேட்ஜ் மற்றும் கடைசி வாசிப்பின் நேரத்துடன் திறக்கிறது. <strong>தாஜ்</strong> நோடைக் கிளிக் செய்து ஆலை வரைபடத்திற்குள் இறங்குங்கள் — அங்கே ஒவ்வொரு தொட்டி, ஃப்ளோமீட்டர், பிளோயரும் தன் நேரலை மதிப்பை வைத்திருக்கிறது, ஜூம் கட்டுப்பாடுகள் ஒரு அலகு வரை நெருங்க அனுமதிக்கின்றன.",
          voice: "ஸ்கேடா வியூ வொர்க்ஸ்பேஸை நேரலையில் திறக்கிறது. ஆலையைக் கிளிக் செய்து வரைபடத்தில் இறங்குங்கள், ஒவ்வொரு தொட்டியும் நேரலையில் படிக்கிறது.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'அனலிட்டிக்ஸ் — ஆலை ஆழத்தில்',
          body: "<strong>தாஜ் எக்ஸோட்டிகா (250 KLD) அனலிட்டிக்ஸ்</strong> ஆழமான பக்கம், கேள்விகளின்படி பிரிக்கப்பட்டது. <strong>நீர் அளவு மற்றும் கிடைப்பு</strong> பகுதியில் <strong>டேங்க் லெவல்ஸ்</strong>, <strong>ஓட்ட வீதம்</strong>, <strong>ஸ்லட்ஜ் வேஸ்டிங் ஃப்ளோமீட்டர்</strong>, <strong>ஃப்ளோ மீட்டர்ஸ்</strong>, <strong>பேக்வாஷ் ஃப்ளோமீட்டர்</strong> மற்றும் <strong>சுத்திகரித்த நீர்</strong> மற்றும் <strong>இன்லெட் நீர்</strong> மொத்தங்கள் — பிறகு <strong>இன்லெட் மற்றும் அவுட்லெட் நீர் தரம்</strong>, <strong>உயிரியல் செயல்முறை ஆரோக்கியம்</strong>, <strong>ஆற்றல் நுகர்வு</strong> மற்றும் <strong>உபகரண செயல்திறன் மற்றும் பராமரிப்பு</strong>.",
          voice: "அனலிட்டிக்ஸ் ஆலையைக் கேள்விகளாகப் பிரிக்கிறது — அளவு மற்றும் கிடைப்பு, நீர் தரம், உயிரியல் ஆரோக்கியம், ஆற்றல், உபகரண செயல்திறன்.",
        },
        {
          label: 'உபகரணம்', title: 'உண்மையில் எந்த பிளோயர் ஓடுகிறது',
          body: "<strong>உபகரண செயல்திறன் மற்றும் பராமரிப்பு</strong> ஒவ்வொரு இயந்திரத்தையும் ஒன்று-அல்லது-பூஜ்யம் கோடாக வரைகிறது. <strong>ஏரேஷன் பிளோயர்ஸ்</strong> <strong>பிளோயர்-1</strong>, <strong>2</strong>, <strong>3</strong> ஒழுங்காக மாறி மாறி ஓடுவதைக் காட்டுகிறது, எனவே முழு சுமையும் ஒரே இயந்திரத்தின் மேல் விழுவதில்லை. அதே பகுதியில் <strong>ரியாக்டர்</strong> மற்றும் <strong>ஃபில்டர் ஃபீட் பம்ப்கள்</strong>, <strong>MGF & ACF அழுத்தம்</strong>, <strong>UF அழுத்தம்</strong>, மற்றும் <strong>ஆட்டோ/மேனுவல்</strong> மற்றும் <strong>ட்ரிப் ஸ்டேட்டஸ்</strong> பட்டியல்கள் உள்ளன.",
          voice: "ஒவ்வொரு இயந்திரமும் ஒன்று அல்லது பூஜ்யமாக வரையப்படுகிறது. இங்கே மூன்று ஏரேஷன் பிளோயர்களும் ஒழுங்காக மாறி ஓடுகின்றன, ட்ரிப் ஸ்டேட்டஸ் பூஜ்யத்தில் இருக்கிறது.",
        },
        {
          label: 'அறிக்கை', title: 'ஒரு வாரம், ஒரு மாதம்',
          body: "அனலிட்டிக்ஸின் <strong>பேஜ்</strong> தேர்வில் மூன்று காட்சிகள்: <strong>மெயின் பேஜ்</strong>, <strong>வீக்லி ரிப்போர்ட்</strong> மற்றும் <strong>மந்த்லி ரிப்போர்ட்</strong>. ஒவ்வொன்றும் திறக்கும்போதே தன் காலவரம்பை அமைத்துக்கொள்கிறது — வாரத்தின் மொத்தம் <strong>809.37 KL</strong> சுத்திகரிக்கப்பட்டது, <strong>1375.64 KL</strong> உள்ளே; மாதத்தில் <strong>3089.21</strong> மற்றும் <strong>5507.95</strong> — எனவே காலகட்டச் சுருக்கம் தேதி எழுதுவதற்குப் பதிலாக ஒரே கிளிக்.",
          voice: "வீக்லி மற்றும் மந்த்லி ரிப்போர்ட் பக்கங்கள் திறக்கும்போதே தன் வரம்பை அமைக்கின்றன — வாரத்தில் எண்ணூற்று ஒன்பது கே எல் சுத்திகரிப்பு, மாதத்தில் மூவாயிரத்திற்கு மேல்.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பக்கம்',
          body: "எனவே: ஷிஃப்டுக்கு <strong>டாஷ்போர்டு</strong> — செயல்திறன், ஓட்டம், தரம், ஆற்றல், தொட்டிகள், டிக்கெட் அனைத்தும் ஒரே ஸ்க்ரோலில். ஒரு எண்ணுக்குப் பின்னால் இருக்கும் செயல்முறை வேண்டுமெனில் <strong>அனலிட்டிக்ஸ்</strong>. ஆலை ஓடுவதைப் பார்க்க <strong>ஸ்கேடாவியூ</strong>. யாராவது காலகட்டம் கேட்டால் <strong>வீக்லி</strong> மற்றும் <strong>மந்த்லி ரிப்போர்ட்</strong>. ஒரு பேஜ் தேர்வு, ஒரு காலவரம்பு, மற்ற அனைத்தும் பின்தொடரும்.",
          voice: "ஷிஃப்டுக்கு டாஷ்போர்டு, செயல்முறைக்கு அனலிட்டிக்ஸ், ஓடுவதைப் பார்க்க ஸ்கேடா வியூ, காலகட்டம் கேட்கும்போது ரிப்போர்ட் பக்கங்கள்.",
        },
      ],
    },
    mr: {
      title: 'ताज एक्सोटिका,<br><em>संपूर्ण प्लांट एका स्क्रीनवर.</em>',
      subtitle:
        'तुमच्या प्लॅटफॉर्मची अडीच मिनिटांची फेरी — डॅशबोर्ड, त्यामागील आकडे, लाइव्ह चालणारा प्लांट, आणि ते सगळे थोडक्यात मांडणारे अहवाल.',
      chapter: 'डेमो · ताज एक्सोटिका (250 KLD)',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेनू, प्रत्येक स्क्रीन',
          body: "<strong>मेनू आयकॉन</strong> बाजूचे नेव्हिगेशन उघडतो आणि सर्व काही तिथेच आहे: वर <strong>डॅशबोर्ड</strong>, <strong>इन्व्हेंटरी</strong>, <strong>इनसाइट लिस्ट</strong> आणि <strong>तिकिटे</strong>, नंतर <strong>स्काडाव्ह्यू — ताज हॉटेल्स वर्कस्पेस</strong>, आणि प्लांट स्वतः, <strong>ताज एक्सोटिका (250 KLD)</strong> — तो उघडल्यावर <strong>मेंटेनन्स</strong> आणि <strong>ताज एक्सोटिका (250 KLD) अॅनालिटिक्स</strong> दिसतात. वरचा <strong>सर्च</strong> बॉक्स थेट कोणत्याही स्क्रीनवर नेतो.",
          voice: "सर्व काही या मेनूपासून — डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, तिकिटे, स्काडा व्ह्यू, आणि प्लांटसोबत त्याचे अॅनालिटिक्स.",
        },
        {
          label: 'नियंत्रणे', title: 'पेज चालवणारी नियंत्रणे',
          body: "<strong>डॅशबोर्ड</strong> <strong>ताज हॉटेल गोवा</strong> पेजवर उघडतो. खालचे सर्व तीन नियंत्रणांवर चालते: <strong>पेज</strong> सिलेक्टर, <strong>ग्रॅन्युलॅरिटी</strong> — मिनिटे, तास किंवा दिवस — आणि <strong>From</strong> ते <strong>To</strong> ही कालमर्यादा. उजवीकडे <strong>रिफ्रेश</strong> लाइव्ह डेटा पुन्हा आणतो, <strong>गियर</strong> मध्ये पेज सेटिंग्ज आहेत, आणि <strong>मॅनेज रिपोर्ट्स/डॅशबोर्ड</strong> मधून लेआउटच बदलतो.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा खालचे प्रत्येक विजेट चालवतात. रिफ्रेश लाइव्ह डेटा आणतो; मॅनेज रिपोर्ट्स लेआउट बदलतो.",
        },
        {
          label: 'कालमर्यादा', title: 'कालावधी निवडा, पेज मागोमाग येईल',
          body: "कालमर्यादेवर क्लिक केल्यावर पिकर उघडतो: <strong>आज</strong>, <strong>काल</strong>, <strong>शेवटचे 24 तास</strong>, तीन, सात, दहा किंवा तीस दिवस, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा दोन कॅलेंडरवर <strong>कस्टम</strong>. <strong>ग्रॅन्युलॅरिटी</strong> <strong>मिनिटे</strong>, <strong>तास</strong> आणि <strong>दिवस</strong> यांमध्ये बदलते, आणि <strong>स्मार्ट अवर्स</strong> तोच रोजचा वेळखंड मर्यादेतील प्रत्येक तारखेला लागू करते. <strong>अप्लाय सिलेक्शन</strong> सर्व पुन्हा काढते.",
          voice: "आजपासून सहा महिन्यांपर्यंतचे प्रीसेट, किंवा स्वतःच्या तारखा. मिनिटे, तास किंवा दिवस निवडून अप्लाय करा.",
        },
        {
          label: 'प्रवाह', title: 'कार्यक्षमता, आत आणि बाहेर',
          body: "पहिली ओळ प्लांटला तीन आकड्यांत मांडते: गेजवर <strong>प्लांट कार्यक्षमता 62.06%</strong>, <strong>इनलेट प्रवाह 154.73 KL</strong> आणि <strong>आउटलेट प्रवाह 96.03 KL</strong>. प्रत्येक कार्डाखालची पट्टी कोणत्या दोन वेळांची तुलना होत आहे आणि त्यांतील बदल सांगते — कार्यक्षमता <strong>2% वर</strong>, दोन्ही प्रवाह आधीच्या दिवसापेक्षा <strong>खाली</strong>.",
          voice: "प्लांट कार्यक्षमता बासष्ट टक्के, इनलेट एकशे चोपन्न के एल, आउटलेट शहाण्णव. प्रत्येक कार्ड आधीच्या दिवसाशी बदल दाखवते.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भासमोर',
          body: "त्याखाली गुणवत्तेची ओळ. <strong>आउटलेट टर्बिडिटी</strong> तिच्या संदर्भ पट्ट्यासमोर काढली जाते — गुलाबी भाग मर्यादेबाहेर आहे — सोबत <strong>SBR DO 0.3 ppm</strong> आणि <strong>सरासरी आउटलेट टर्बिडिटी 6.64 NTU</strong>. त्या कार्डावर <strong>ref: &lt;5 NTU</strong> लिहिलेले आहे, म्हणजे लक्ष्य आकड्यासोबतच फिरते, कोणाच्या डोक्यात राहत नाही.",
          voice: "आउटलेट टर्बिडिटी तिच्या संदर्भ पट्ट्यासमोर, एस बी आर डी ओ शून्य पूर्णांक तीन पी पी एम, आणि सरासरी टर्बिडिटी सहा पूर्णांक सहा चार एन टी यू.",
        },
        {
          label: 'विजेट', title: 'कोणतेही विजेट उघडून पहा',
          body: "प्रत्येक विजेटवर हॉवर केल्यास तीच साधने मिळतात: <strong>डाउनलोड CSV</strong>, <strong>एक्सपांडेड व्ह्यू</strong>, <strong>टेबल</strong> आणि <strong>बार ग्राफ</strong> यांमध्ये बदलणारा चार्ट-टाइप मेनू, <strong>एडिट विजेट</strong>, आणि काय काढले आहे ते सांगणारी <strong>इन्फो</strong> नोंद. एक्सपांड केल्यावर चार्टवर ड्रॅग करून काही मिनिटांपर्यंत झूम करता येते, आणि <strong>रीसेट झूम</strong> पुन्हा बाहेर आणते.",
          voice: "कोणत्याही विजेटवर हॉवर करा — डाउनलोड, एक्सपांड, टेबल किंवा बार ग्राफ, आणि एडिट. एक्सपांड करून ड्रॅगने झूम करा, रीसेटने परत.",
        },
        {
          label: 'ऊर्जा', title: 'प्रक्रियेची किंमत काय पडली',
          body: "<strong>ऊर्जा वापर</strong> वापराला प्रक्रिया केलेल्या पाण्याशी जोडतो: दिवसभरात <strong>367</strong>, <strong>9% खाली</strong>, आणि <strong>प्रति KL ऊर्जा 3.82</strong>, <strong>8% वर</strong> — म्हणजे प्रति एकक पाण्याची किंमत, फक्त एकूण नाही. तीस दिवसांवर पसरवल्यास रोजचा वापर <strong>380</strong> ते <strong>460</strong> दरम्यान राहतो, त्यामुळेच <strong>247.7</strong> पर्यंतची घट लगेच दिसते.",
          voice: "ऊर्जा वापर तीनशे सदुसष्ट, आणि प्रति के एल तीन पूर्णांक आठ दोन. तीस दिवसांच्या रोजच्या वापरात कोणतीही घट स्पष्ट दिसते.",
        },
        {
          label: 'स्थिती', title: 'याक्षणीचा प्लांट',
          body: "<strong>करंट स्टेटस</strong> हे लाइव्ह चित्र आहे. <strong>टँक लेव्हल्स</strong> मध्ये <strong>इक्वलायझेशन 43.02</strong>, <strong>इंटरमीडिएट वॉटर 34.86</strong> आणि <strong>स्लज होल्डिंग 0.74</strong> आहेत — लेजंडवर क्लिक करून एक मालिका काढून बाकीचे वाचता येतात. <strong>इनलेट व आउटलेट प्रवाह</strong> पंपिंग चक्रे दाखवतो, आणि <strong>इक्विपमेंट्स रनिंग अवर्स</strong> प्रत्येक पंप व ब्लोअरचे तास मांडते.",
          voice: "तिन्ही टाक्यांच्या पातळ्या, बाजूला पंपिंग चक्रे, आणि प्रत्येक पंप व ब्लोअरचे चालण्याचे तास.",
        },
        {
          label: 'तिकिटे', title: 'सापडलेले तिकीट बनते',
          body: "<strong>टोटल इनलेट व आउटलेट वॉटर</strong> दोन्ही संचयी वक्र शेजारी चालवतो. त्याच्या बाजूला <strong>तिकिटे तयार व बंद</strong> काम सांभाळते: <em>“1 फ्लोमीटर जोडलेला नसल्याने इनलेट प्रवाह कमी आहे”</em> आणि <em>“रिअॅक्टर फीड पंप ऑटो मोडमध्ये चालू आहे”</em> — प्रत्येक <strong>प्लांट प्रोसेस इश्यूज</strong> टॅगसह, प्लांटचे नाव आणि नोंद झाल्याची तारीख घेऊन.",
          voice: "संचयी इनलेट आणि आउटलेट, आणि बाजूला उघडी तिकिटे — एक फ्लोमीटर जोडलेला नाही, एक फीड पंप ऑटोमध्ये राहिलेला.",
        },
        {
          label: 'तास', title: 'तास, चार खिडक्या एकाच वेळी',
          body: "पूर्ण रुंदीचे <strong>इक्विपमेंट्स रनिंग अवर्स</strong> टेबल प्रत्येक पंप व ब्लोअर एकाच वेळी चार खिडक्यांमध्ये वाचते — <strong>आज</strong>, <strong>शेवटचे 24 तास</strong>, <strong>काल</strong> आणि <strong>शेवटचे 7 दिवस</strong>. आठवड्यात <strong>रिअॅक्टर फीड पंप-1</strong> चे <strong>174.48</strong> तास, आणि पंप 2 व 3 चे <strong>0</strong> — यावरून कोणते युनिट प्लांट पेलत आहे ते कळते.",
          voice: "तेच उपकरण आज, शेवटचे चोवीस तास, काल आणि शेवटच्या सात दिवसांत — म्हणजे कोणते युनिट प्लांट पेलते ते दिसते.",
        },
        {
          label: 'स्काडाव्ह्यू', title: 'प्लांट, लाइव्ह चालताना',
          body: "<strong>स्काडाव्ह्यू — ताज हॉटेल्स वर्कस्पेस</strong> वर्कस्पेस <strong>LIVE</strong> बॅज आणि शेवटच्या रीडिंगच्या वेळेसह उघडतो. <strong>ताज</strong> नोडवर क्लिक करून थेट प्लांटच्या आकृतीत उतरा, जिथे प्रत्येक टाकी, फ्लोमीटर आणि ब्लोअर आपले लाइव्ह मूल्य दाखवतो, आणि झूम नियंत्रणे एका युनिटपर्यंत जवळ जाऊ देतात.",
          voice: "स्काडा व्ह्यू वर्कस्पेस लाइव्ह उघडतो. प्लांटवर क्लिक करून आकृतीत उतरा, जिथे प्रत्येक टाकी आणि फ्लोमीटर लाइव्ह वाचतो.",
        },
        {
          label: 'अॅनालिटिक्स', title: 'अॅनालिटिक्स — प्लांट खोलात',
          body: "<strong>ताज एक्सोटिका (250 KLD) अॅनालिटिक्स</strong> हे खोलात जाणारे पेज आहे, प्रश्नांनुसार विभागलेले. <strong>पाण्याचे प्रमाण व उपलब्धता</strong> मध्ये <strong>टँक लेव्हल्स</strong>, <strong>फ्लो रेट</strong>, <strong>स्लज वेस्टिंग फ्लोमीटर</strong>, <strong>फ्लो मीटर्स</strong>, <strong>बॅकवॉश फ्लोमीटर</strong> आणि <strong>प्रक्रिया केलेले</strong> व <strong>इनलेट पाणी</strong> यांची एकूण आहेत — नंतर <strong>इनलेट व आउटलेट पाण्याची गुणवत्ता</strong>, <strong>जैविक प्रक्रिया आरोग्य</strong>, <strong>ऊर्जा वापर</strong> आणि <strong>उपकरण कामगिरी व मेंटेनन्स</strong> येतात.",
          voice: "अॅनालिटिक्स प्लांटला प्रश्नांनुसार विभागते — प्रमाण व उपलब्धता, पाण्याची गुणवत्ता, जैविक आरोग्य, ऊर्जा, आणि उपकरण कामगिरी.",
        },
        {
          label: 'उपकरणे', title: 'प्रत्यक्षात कोणता ब्लोअर चालू आहे',
          body: "<strong>उपकरण कामगिरी व मेंटेनन्स</strong> प्रत्येक यंत्राला एक-किंवा-शून्य रेषेत काढते. <strong>एरेशन ब्लोअर्स</strong> दाखवते की <strong>ब्लोअर-1</strong>, <strong>2</strong> आणि <strong>3</strong> स्वच्छ आवर्तनात एकमेकांकडे भार देतात, म्हणजे संपूर्ण भार एकाच यंत्रावर पडत नाही. त्याच विभागात <strong>रिअॅक्टर</strong> व <strong>फिल्टर फीड पंप</strong>, <strong>MGF व ACF दाब</strong>, <strong>UF दाब</strong>, आणि <strong>ऑटो/मॅन्युअल</strong> व <strong>ट्रिप स्टेटस</strong> याद्या आहेत.",
          voice: "प्रत्येक यंत्र एक किंवा शून्य म्हणून दिसते. येथे तिन्ही एरेशन ब्लोअर स्वच्छ आवर्तनात चालतात, आणि ट्रिप स्टेटस शून्यावर राहतो.",
        },
        {
          label: 'अहवाल', title: 'एक आठवडा, आणि एक महिना',
          body: "अॅनालिटिक्सच्या <strong>पेज</strong> सिलेक्टरमध्ये तीन दृश्ये आहेत: <strong>मेन पेज</strong>, <strong>वीकली रिपोर्ट</strong> आणि <strong>मंथली रिपोर्ट</strong>. प्रत्येक उघडतानाच आपली कालमर्यादा ठरवते — आठवड्याचे एकूण <strong>809.37 KL</strong> प्रक्रिया केलेले विरुद्ध <strong>1375.64 KL</strong> आत, महिन्याचे <strong>3089.21</strong> विरुद्ध <strong>5507.95</strong> — म्हणजे कालावधीचा सारांश तारीख भरण्याऐवजी एका क्लिकवर.",
          voice: "वीकली आणि मंथली रिपोर्ट पेजे उघडतानाच आपली मर्यादा ठरवतात — आठवड्यात आठशे नऊ के एल प्रक्रिया, महिन्यात तीन हजारांहून अधिक.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणते पेज',
          body: "म्हणून: शिफ्टसाठी <strong>डॅशबोर्ड</strong> — कार्यक्षमता, प्रवाह, गुणवत्ता, ऊर्जा, टाक्या आणि तिकिटे एकाच स्क्रोलमध्ये. एखाद्या आकड्यामागची प्रक्रिया हवी असेल तर <strong>अॅनालिटिक्स</strong>. प्लांट चालताना पाहायचा असेल तर <strong>स्काडाव्ह्यू</strong>. कोणी कालावधी विचारला तर <strong>वीकली</strong> आणि <strong>मंथली रिपोर्ट</strong>. एक पेज सिलेक्टर, एक कालमर्यादा, आणि बाकी सर्व मागोमाग येते.",
          voice: "शिफ्टसाठी डॅशबोर्ड, प्रक्रियेसाठी अॅनालिटिक्स, चालताना पाहण्यासाठी स्काडा व्ह्यू, आणि कालावधी विचारल्यावर रिपोर्ट पेजे.",
        },
      ],
    },
  },
};

export default lesson;
