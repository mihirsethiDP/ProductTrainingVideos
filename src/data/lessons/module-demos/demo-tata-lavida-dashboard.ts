import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-tata-lavida-dashboard`;

/**
 * Demo — Tata Lavida, dashboard tour.  (hidden module-demos)
 *
 * Built from the 3:43 recording uploaded 2026-11-19 (Content Studio job
 * c04aa7fc, demo_style=overview, no notes). New demo — no earlier Tata Lavida
 * demo exists.
 *
 * The recording: Dashboard "Tata Lavida Analytics", page "Detailed View" →
 * a scroll through every section (Water Quantity and Availability, Inlet and
 * Outlet Water Quality, Biological Process Health, Safety, Energy Consumption,
 * Equipment Performance and Maintenance, SBR Status) → the expanded Tank Levels
 * chart with drag-zoom and Reset Zoom → the widget tools (Table / Bar Graph,
 * Download CSV) → the range picker worked hard (presets, Smart Hours, Hours /
 * Days, then Weeks / Months for Last 6 Months, Save Current View) → Edit Page,
 * i.e. Dashboard Configuration, with one widget opened and switched from a line
 * graph to a Number card.
 *
 * Style: `overview` — one step per page or feature area, two-sentence voices.
 *
 * Real 1280px frames from the recording; the baked OS cursor is erased from
 * every one (delogo on flat ground, an in-frame clone where it sat on a chart
 * border, a legend swatch or the picker's divider).
 *
 * Judgement calls:
 *  - From ~2:56 the presenter uses the internal "View As" switch to open a
 *    DIFFERENT client's account (Park View Spa). That tail is not Tata Lavida
 *    and is left out entirely.
 *  - The recording never opens the side navigation for this account, so step 1
 *    teaches the page header (menu icon, Page, Granularity, range, the header
 *    icons) rather than showing a drawer we have no frame of.
 *  - Quality parameters (pH, TDS) and two biological cards read "No Data
 *    Available" in this window; the copy says so instead of inventing values.
 */
const lesson: Lesson = {
  id: 'demo-tata-lavida-dashboard',
  moduleId: 'module-demos',
  lessonNumber: 1,
  estimatedMinutes: 3,
  expiresAt: '2026-12-19', // 30 days after the job's created_at (2026-11-19) — purged by cleanup-demos
  screenshots: {
    header: `${BASE}/header.jpg`,
    range: `${BASE}/range.jpg`,
    expand: `${BASE}/expand.jpg`,
    tools: `${BASE}/tools.jpg`,
    quality: `${BASE}/quality.jpg`,
    bio: `${BASE}/bio.jpg`,
    safety: `${BASE}/safety.jpg`,
    energy: `${BASE}/energy.jpg`,
    sbr: `${BASE}/sbr.jpg`,
    config: `${BASE}/config.jpg`,
    widget: `${BASE}/widget.jpg`,
  },
  layouts: [
    // S1 — the page header: menu, Page, Granularity, range, header icons
    {
      mode: 'detail', screenshot: 'header', caption: 'The controls that drive the page',
      spotlight: { top: '10.2%', left: '1.4%', width: '96.7%', height: '21.7%' },
      cursor: [
        { at: 0, x: 0.9, y: 3.9, click: true },
        { at: 0.25, x: 10.7, y: 25.8 },
        { at: 0.45, x: 47.6, y: 25.8 },
        { at: 0.65, x: 69, y: 25.8 },
        { at: 0.82, x: 80.8, y: 14.2 },
        { at: 0.95, x: 95.9, y: 14.2 },
      ],
    },
    // S2 — the range picker: presets, Smart Hours, granularity, Save Current View
    {
      mode: 'detail', screenshot: 'range', caption: 'Any window, any resolution',
      spotlight: { top: '13.2%', left: '16%', width: '61.7%', height: '62.2%' },
      cursor: [
        { at: 0, x: 56.8, y: 22.5, click: true },
        { at: 0.3, x: 18.8, y: 62, click: true },
        { at: 0.5, x: 18.8, y: 68 },
        { at: 0.7, x: 18.1, y: 43.2 },
        { at: 0.85, x: 77.7, y: 85.9, click: true },
        { at: 0.97, x: 87.1, y: 94.9 },
      ],
    },
    // S3 — Water Quantity and Availability
    {
      mode: 'detail', screenshot: 'header', caption: 'Water in, water held',
      spotlight: { top: '40.7%', left: '1.7%', width: '96.1%', height: '51.9%' },
      cursor: [
        { at: 0, x: 13, y: 52 },
        { at: 0.3, x: 42.6, y: 55.8 },
        { at: 0.55, x: 67, y: 59 },
        { at: 0.8, x: 88, y: 58 },
        { at: 0.95, x: 6.9, y: 97.5 },
      ],
    },
    // S4 — expanded chart: legend toggles, drag-zoom, Reset Zoom
    {
      mode: 'detail', screenshot: 'expand', caption: 'Open it up, zoom in',
      spotlight: { top: '20.3%', left: '12.5%', width: '78.1%', height: '4.6%' },
      cursor: [
        { at: 0, x: 17, y: 22.4, click: true },
        { at: 0.3, x: 60, y: 50 },
        { at: 0.55, x: 85, y: 50 },
        { at: 0.8, x: 77, y: 62 },
        { at: 0.95, x: 97, y: 13.3, click: true },
      ],
    },
    // S5 — the tools on every widget
    {
      mode: 'detail', screenshot: 'tools', caption: 'Download it, or re-draw it',
      spotlight: { top: '42.7%', left: '18.6%', width: '7.8%', height: '3.6%' },
      cursor: [
        { at: 0, x: 19.2, y: 44.4, click: true },
        { at: 0.3, x: 20.9, y: 44.4 },
        { at: 0.5, x: 22.4, y: 44.4 },
        { at: 0.7, x: 24, y: 44.4 },
        { at: 0.85, x: 25.6, y: 44.4 },
        { at: 0.97, x: 12.5, y: 69.5 },
      ],
    },
    // S6 — Inlet and Outlet Water Quality
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality, against the reference',
      spotlight: { top: '38.1%', left: '1.7%', width: '54.7%', height: '61.9%' },
      cursor: [
        { at: 0, x: 7, y: 50 },
        { at: 0.35, x: 11, y: 65.8 },
        { at: 0.6, x: 40.6, y: 86 },
        { at: 0.9, x: 48, y: 86.9 },
      ],
    },
    // S7 — Biological Process Health
    {
      mode: 'detail', screenshot: 'bio', caption: 'How the biology is doing',
      spotlight: { top: '45.8%', left: '1.7%', width: '22.1%', height: '54.2%' },
      cursor: [
        { at: 0, x: 7, y: 64.6 },
        { at: 0.3, x: 18.6, y: 64.6 },
        { at: 0.6, x: 4.5, y: 90.8 },
        { at: 0.9, x: 15.5, y: 90.8 },
      ],
    },
    // S8 — Safety: the flooding sensor
    {
      mode: 'detail', screenshot: 'safety', caption: 'Safety, at a glance',
      spotlight: { top: '26.3%', left: '1.7%', width: '43%', height: '51.7%' },
      cursor: [
        { at: 0, x: 5, y: 21.6 },
        { at: 0.35, x: 22, y: 51 },
        { at: 0.7, x: 42.4, y: 51.2 },
        { at: 0.95, x: 8.8, y: 82.9 },
      ],
    },
    // S9 — Energy Consumption, then Equipment Performance and Maintenance
    {
      mode: 'detail', screenshot: 'energy', caption: 'Energy, and the machines that use it',
      spotlight: { top: '7.6%', left: '1.7%', width: '66.3%', height: '50.5%' },
      cursor: [
        { at: 0, x: 40.3, y: 21.5 },
        { at: 0.3, x: 48, y: 19.2 },
        { at: 0.55, x: 60.5, y: 20.8 },
        { at: 0.8, x: 23.4, y: 89.2 },
        { at: 0.95, x: 68.4, y: 71.4 },
      ],
    },
    // S10 — pump status and SBR Status
    {
      mode: 'detail', screenshot: 'sbr', caption: 'Which SBR is running',
      spotlight: { top: '46.6%', left: '1.7%', width: '43%', height: '51.7%' },
      cursor: [
        { at: 0, x: 61, y: 12.4 },
        { at: 0.3, x: 85, y: 12.4 },
        { at: 0.6, x: 34.4, y: 72 },
        { at: 0.9, x: 42.3, y: 56 },
      ],
    },
    // S11 — Edit Page: Dashboard Configuration
    {
      mode: 'detail', screenshot: 'config', caption: 'Edit the page itself',
      spotlight: { top: '24.7%', left: '1.4%', width: '96.7%', height: '15.6%' },
      cursor: [
        { at: 0, x: 13.5, y: 11.7 },
        { at: 0.25, x: 19, y: 32.5 },
        { at: 0.45, x: 42, y: 32.5 },
        { at: 0.6, x: 55, y: 32.5 },
        { at: 0.75, x: 84, y: 29.5, click: true },
        { at: 0.9, x: 8.6, y: 60 },
        { at: 0.97, x: 92.9, y: 60 },
      ],
    },
    // S12 — one widget opened: sensors, value type, widget type, live preview
    {
      mode: 'detail', screenshot: 'widget', caption: 'Change a widget, see it live',
      spotlight: { top: '55.3%', left: '34.2%', width: '62.1%', height: '40.2%' },
      cursor: [
        { at: 0, x: 11.1, y: 61.4 },
        { at: 0.25, x: 49.2, y: 36.9 },
        { at: 0.45, x: 38.5, y: 65.3 },
        { at: 0.65, x: 49, y: 74.4, click: true },
        { at: 0.9, x: 69, y: 67.8 },
      ],
    },
    // S13 — wrap: which part of the page serves which job
    {
      mode: 'detail', screenshot: 'header', caption: 'Which section for which job',
      spotlight: null,
      cursor: [
        { at: 0, x: 0.9, y: 3.9 },
        { at: 0.35, x: 10.7, y: 25.8 },
        { at: 0.7, x: 42.6, y: 55.8 },
        { at: 0.95, x: 95.9, y: 14.2 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Tata Lavida,<br><em>the whole plant on one page.</em>',
      subtitle:
        'A quick tour of your dashboard — water, quality, biology, safety, energy and equipment — and how to shape the page yourself.',
      chapter: 'Demo · Tata Lavida',
      steps: [
        {
          label: 'Navigate', title: 'The controls that drive the page',
          body: "Your dashboard opens as <strong>Tata Lavida Analytics</strong>. The <strong>menu icon</strong> at the top left opens the side navigation. Everything below is driven by the <strong>Page</strong> selector (here <strong>Detailed View</strong>), the <strong>Granularity</strong>, and the <strong>From</strong> and <strong>To</strong> range. On the right, <strong>refresh</strong> re-pulls live data, <strong>download</strong> and the <strong>gear</strong> sit beside it, and the last icon, <strong>Edit Page</strong>, changes the page itself.",
          voice: "The page selector, the granularity and the date range drive every widget on this page. Refresh pulls live data, and the last icon edits the page itself.",
        },
        {
          label: 'Range', title: 'Any window, any resolution',
          body: "Click the range and the picker opens. Presets run <strong>Today</strong>, <strong>Yesterday</strong>, <strong>Last 24 Hours</strong>, <strong>3</strong>, <strong>7</strong>, <strong>10</strong> or <strong>30 Days</strong>, <strong>3</strong> or <strong>6 Months</strong>, or <strong>Custom</strong> on the twin calendars, with a <strong>12</strong> or <strong>24 Hour</strong> clock. <strong>Granularity</strong> follows the window: <strong>Hours</strong> or <strong>Days</strong> for short ranges, <strong>Weeks</strong> or <strong>Months</strong> once you pick <strong>Last 6 Months</strong>. <strong>Smart Hours</strong> applies one daily time slot across every date. <strong>Apply Selection</strong> re-draws the page, and the <strong>Save Current View</strong> bar keeps it — <strong>Save</strong>, or <strong>Save As</strong> a new view.",
          voice: "Pick a preset or your own dates. Granularity follows the window, from hours and days up to weeks and months, and Save Current View keeps the result.",
        },
        {
          label: 'Water', title: 'Water in, water held',
          body: "<strong>Water Quantity and Availability</strong> comes first. <strong>Tank Levels</strong> plots all seven tanks in percent — Equalization, SBR-1, SBR-2, Treated Water, UF, Sludge Holding and Chlorine Contact. <strong>Inlet Water</strong> reached <strong>90.73 KL</strong> over the last 24 hours, <strong>Inlet Flow</strong> shows when it arrived, and <strong>Water Volume in tanks</strong> turns levels into kilolitres against each tank's size — <strong>SBR-1 192.79</strong> of <strong>198 KL</strong>, <strong>EQT 88.29</strong> of <strong>180 KL</strong>, <strong>UF Tank 71.65</strong> of <strong>132 KL</strong>.",
          voice: "Seven tank levels, the water that came in — ninety point seven K L today — and the volume each tank is holding against its size.",
        },
        {
          label: 'Zoom', title: 'Open it up, zoom in',
          body: "Expand any chart and it fills the screen. Click a name in the <strong>legend</strong> to hide or show that tank, drag across the plot to <strong>zoom</strong> into a stretch of time, and hover a point for its exact reading — the tooltip also names the <strong>Aggregation Type</strong>. <strong>Reset Zoom</strong>, top right, takes you back to the full window.",
          voice: "Expanded, a chart fills the screen. Toggle tanks from the legend, drag to zoom into any stretch, and Reset Zoom brings the full window back.",
        },
        {
          label: 'Tools', title: 'Download it, or re-draw it',
          body: "Hover a widget and its tools appear: <strong>Download CSV</strong> saves the data behind it as a spreadsheet, then <strong>expand</strong>, <strong>choose chart</strong>, <strong>edit</strong> and <strong>info</strong>. The <strong>menu</strong> on each card switches the same data between a <strong>Table</strong> and a <strong>Bar Graph</strong> — the table view lists each tank with its latest value.",
          voice: "Every widget carries the same tools — download its data as a C S V, expand it, or switch it between a chart, a table and a bar graph.",
        },
        {
          label: 'Quality', title: 'Quality, against the reference',
          body: "<strong>Inlet and Outlet Water Quality</strong> pairs a <strong>Quality Parameters</strong> table — Inlet, SBR and Outlet <strong>pH</strong>, Inlet and Outlet <strong>TDS</strong> — with a <strong>Treated Water Turbidity</strong> card that carries its own reference, <strong>below 5 NTU</strong>; it reads <strong>0.00</strong>. In this window the pH and TDS rows show <strong>No Data Available</strong>, so the table tells you plainly when a reading is missing rather than showing a stale one.",
          voice: "Quality sits next to its reference. Treated water turbidity reads zero against a limit of five, and missing readings are flagged as no data.",
        },
        {
          label: 'Biology', title: 'How the biology is doing',
          body: "<strong>Biological Process Health</strong> watches the SBRs: <strong>SBR DO</strong> in ppm and <strong>SBR SV30</strong> — both showing <strong>No Data Available</strong> in this window — alongside <strong>Sludge Generation</strong> at <strong>0.04</strong> and <strong>Air Demand</strong> at <strong>1.66</strong>.",
          voice: "Biological process health tracks dissolved oxygen, settling, sludge generation and air demand for the S B R tanks.",
        },
        {
          label: 'Safety', title: 'Safety, at a glance',
          body: "<strong>Safety</strong> carries the <strong>Flooding Sensor</strong>. It held flat at <strong>0</strong> for the whole 24 hours — no flooding — and any change would show up here first.",
          voice: "The flooding sensor sits at zero for the whole day — no flooding. Any change shows up here first.",
        },
        {
          label: 'Energy', title: 'Energy, and the machines that use it',
          body: "<strong>Energy Consumption</strong> climbs through the day to <strong>164.6</strong>, with <strong>Energy Per KL</strong> at <strong>1.81</strong> beside it — what each kilolitre cost to treat. Below, <strong>Equipment Performance and Maintenance</strong> lists <strong>Equipment running Hours</strong> per blower (<strong>SBR-1 Blower 7</strong>, the others <strong>0</strong>), the <strong>Bar screen level</strong> and <strong>Bar screen choking</strong>, and the <strong>EQT Blowers</strong> on their six-batch operation.",
          voice: "Energy consumption sits beside energy per K L — what each kilolitre cost. Below it, running hours per blower and the bar screen's level and choking.",
        },
        {
          label: 'SBR', title: 'Which SBR is running',
          body: "The status charts plot each machine as <strong>1</strong> for running and <strong>0</strong> for stopped — the reactor and filter feed pumps, <strong>RFP</strong>, <strong>FFP</strong> and <strong>SRP</strong> pumps and <strong>SBR Blower-5</strong>. <strong>SBR Status</strong> shows the hand-over between the two reactors: <strong>SBR-1</strong> ran until mid-morning on the 19th, then <strong>SBR-2</strong> took over.",
          voice: "Each machine plots as one or zero. SBR status shows the hand-over — SBR one ran until mid-morning, then SBR two took over.",
        },
        {
          label: 'Edit page', title: 'Edit the page itself',
          body: "<strong>Edit Page</strong> opens <strong>Dashboard Configuration</strong>. At the top: <strong>Auto Refresh Seconds</strong>, the <strong>Page Name</strong>, its default <strong>Time</strong>, the linked plant (<strong>STP</strong>), <strong>Is this a public page?</strong> and <strong>Show Embedded Links?</strong>. Below, each section lists its widgets — tick to show, untick to hide (the <strong>BOD</strong>, <strong>COD</strong> and <strong>TSS</strong> widgets are unticked here) — with buttons to copy, delete, move up or down, and expand.",
          voice: "Edit Page opens the dashboard configuration — the page name, its default time, who can see it, and every widget, which you can show, hide, copy or reorder.",
        },
        {
          label: 'Widget', title: 'Change a widget, see it live',
          body: "Expand a widget to edit it. Add sensors on the <strong>Sensors</strong> or <strong>Dynamic Sensors</strong> tab (here <strong>Inlet_Water</strong>), set the <strong>Nick Name</strong> and <strong>description</strong>, choose the value type (<strong>cumulative</strong>) and the widget type — <strong>graph</strong>, <strong>Number</strong> or <strong>Table</strong>. Switch <strong>graph</strong> to <strong>Number</strong> and the preview on the right turns into a <strong>90.73</strong> card at once; <strong>Advanced Widget Settings</strong>, <strong>Threshold Configuration</strong> and <strong>Range Settings</strong> sit above it.",
          voice: "Open a widget to change its sensors, its value type and how it draws. Switch the line graph to a number, and the preview updates on the spot.",
        },
        {
          label: 'Wrap', title: 'Which section for which job',
          body: "So: <strong>Water Quantity</strong> for what came in and what the tanks hold; <strong>Water Quality</strong> and <strong>Biological Process Health</strong> for how well it is being treated; <strong>Safety</strong> for flooding; <strong>Energy</strong> and <strong>Equipment</strong> for what it cost and what ran. One page selector, one granularity, one date range drive it all — and <strong>Edit Page</strong> lets you reshape it.",
          voice: "Water quantity for what came in, quality and biology for the treatment, energy and equipment for what it cost. Edit Page lets you reshape all of it.",
        },
      ],
    },
    hi: {
      title: 'टाटा लविडा,<br><em>पूरा प्लांट एक पेज पर।</em>',
      subtitle:
        'आपके डैशबोर्ड का एक छोटा दौरा — पानी, गुणवत्ता, बायोलॉजी, सुरक्षा, ऊर्जा और उपकरण — और पेज को खुद कैसे बदलें।',
      chapter: 'डेमो · टाटा लविडा',
      steps: [
        {
          label: 'नेविगेशन', title: 'पेज चलाने वाले कंट्रोल',
          body: "आपका डैशबोर्ड <strong>टाटा लविडा एनालिटिक्स</strong> के रूप में खुलता है। ऊपर बाईं ओर का <strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है। नीचे का सब कुछ <strong>पेज</strong> सिलेक्टर (यहाँ <strong>डिटेल्ड व्यू</strong>), <strong>ग्रैन्युलैरिटी</strong> और <strong>फ्रॉम</strong>–<strong>टू</strong> समय सीमा से चलता है। दाईं ओर <strong>रिफ़्रेश</strong> लाइव डेटा फिर से लाता है, उसके पास <strong>डाउनलोड</strong> और <strong>गियर</strong> हैं, और आख़िरी आइकन <strong>एडिट पेज</strong> पेज को ही बदलता है।",
          voice: "पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा इस पेज का हर विजेट चलाते हैं। रिफ़्रेश लाइव डेटा लाता है, और आख़िरी आइकन पेज को एडिट करता है।",
        },
        {
          label: 'समय सीमा', title: 'कोई भी अवधि, कोई भी स्तर',
          body: "समय सीमा पर क्लिक करें और पिकर खुलता है। प्रीसेट हैं <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>पिछले 24 घंटे</strong>, <strong>3</strong>, <strong>7</strong>, <strong>10</strong> या <strong>30 दिन</strong>, <strong>3</strong> या <strong>6 महीने</strong>, या दोनों कैलेंडर पर <strong>कस्टम</strong> — <strong>12</strong> या <strong>24 घंटे</strong> की घड़ी के साथ। <strong>ग्रैन्युलैरिटी</strong> अवधि के साथ बदलती है: छोटी अवधि के लिए <strong>घंटे</strong> या <strong>दिन</strong>, और <strong>पिछले 6 महीने</strong> चुनने पर <strong>हफ़्ते</strong> या <strong>महीने</strong>। <strong>स्मार्ट आवर्स</strong> एक ही दैनिक समय-खंड हर तारीख पर लागू करता है। <strong>अप्लाई सिलेक्शन</strong> पेज दोबारा बनाता है, और <strong>सेव करंट व्यू</strong> पट्टी उसे सहेजती है — <strong>सेव</strong>, या नए व्यू के रूप में <strong>सेव ऐज़</strong>।",
          voice: "कोई प्रीसेट चुनें या अपनी तारीखें। ग्रैन्युलैरिटी अवधि के साथ बदलती है, घंटों और दिनों से हफ़्तों और महीनों तक, और सेव करंट व्यू नतीजा सहेज लेता है।",
        },
        {
          label: 'पानी', title: 'आया पानी, रखा पानी',
          body: "सबसे पहले <strong>वॉटर क्वांटिटी एंड अवेलेबिलिटी</strong>। <strong>टैंक लेवल्स</strong> सातों टैंकों को प्रतिशत में दिखाता है — इक्वलाइज़ेशन, SBR-1, SBR-2, ट्रीटेड वॉटर, UF, स्लज होल्डिंग और क्लोरीन कॉन्टैक्ट। <strong>इनलेट वॉटर</strong> पिछले 24 घंटों में <strong>90.73 KL</strong> तक पहुँचा, <strong>इनलेट फ़्लो</strong> बताता है कि वह कब आया, और <strong>वॉटर वॉल्यूम इन टैंक्स</strong> हर टैंक के आकार के सामने लेवल को किलोलीटर में बदलता है — <strong>SBR-1 192.79</strong>/<strong>198 KL</strong>, <strong>EQT 88.29</strong>/<strong>180 KL</strong>, <strong>UF टैंक 71.65</strong>/<strong>132 KL</strong>।",
          voice: "सात टैंकों के लेवल, आज आया पानी — लगभग नब्बे किलोलीटर — और हर टैंक अपने आकार के मुकाबले कितना पानी रखे है।",
        },
        {
          label: 'ज़ूम', title: 'खोलें, ज़ूम करें',
          body: "किसी भी चार्ट को एक्सपैंड करें तो वह पूरी स्क्रीन भर देता है। <strong>लेजेंड</strong> में किसी नाम पर क्लिक करके उस टैंक को छिपाएँ या दिखाएँ, प्लॉट पर खींचकर किसी समय-खंड में <strong>ज़ूम</strong> करें, और किसी बिंदु पर होवर करके सटीक रीडिंग देखें — टूलटिप <strong>एग्रीगेशन टाइप</strong> भी बताता है। ऊपर दाईं ओर <strong>रीसेट ज़ूम</strong> पूरी अवधि पर वापस ले आता है।",
          voice: "एक्सपैंड करने पर चार्ट पूरी स्क्रीन भरता है। लेजेंड से टैंक चालू-बंद करें, खींचकर ज़ूम करें, और रीसेट ज़ूम पूरी अवधि वापस लाता है।",
        },
        {
          label: 'टूल्स', title: 'डाउनलोड करें, या दोबारा बनाएँ',
          body: "विजेट पर होवर करें तो उसके टूल दिखते हैं: <strong>डाउनलोड CSV</strong> उसके पीछे का डेटा स्प्रेडशीट के रूप में सहेजता है, फिर <strong>एक्सपैंड</strong>, <strong>चूज़ चार्ट</strong>, <strong>एडिट</strong> और <strong>इन्फ़ो</strong>। हर कार्ड का <strong>मेन्यू</strong> उसी डेटा को <strong>टेबल</strong> और <strong>बार ग्राफ़</strong> के बीच बदलता है — टेबल व्यू हर टैंक को उसके ताज़ा मान के साथ दिखाता है।",
          voice: "हर विजेट में वही टूल हैं — उसका डेटा सी एस वी में डाउनलोड करें, उसे एक्सपैंड करें, या चार्ट, टेबल और बार ग्राफ़ के बीच बदलें।",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भ के सामने',
          body: "<strong>इनलेट एंड आउटलेट वॉटर क्वालिटी</strong> में एक <strong>क्वालिटी पैरामीटर्स</strong> टेबल है — इनलेट, SBR और आउटलेट <strong>pH</strong>, इनलेट और आउटलेट <strong>TDS</strong> — और साथ में <strong>ट्रीटेड वॉटर टर्बिडिटी</strong> कार्ड जिसका अपना संदर्भ है, <strong>5 NTU से कम</strong>; यह <strong>0.00</strong> दिखाता है। इस अवधि में pH और TDS की पंक्तियाँ <strong>नो डेटा अवेलेबल</strong> दिखाती हैं, यानी रीडिंग न होने पर टेबल साफ़ बताती है, पुराना मान नहीं दिखाती।",
          voice: "गुणवत्ता अपने संदर्भ के साथ दिखती है। ट्रीटेड वॉटर की टर्बिडिटी पाँच की सीमा के सामने शून्य है, और गायब रीडिंग नो डेटा के रूप में दिखती हैं।",
        },
        {
          label: 'बायोलॉजी', title: 'बायोलॉजी कैसी चल रही है',
          body: "<strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> SBR पर नज़र रखता है: ppm में <strong>SBR DO</strong> और <strong>SBR SV30</strong> — दोनों इस अवधि में <strong>नो डेटा अवेलेबल</strong> — और साथ में <strong>स्लज जनरेशन</strong> <strong>0.04</strong> तथा <strong>एयर डिमांड</strong> <strong>1.66</strong>।",
          voice: "बायोलॉजिकल प्रोसेस हेल्थ एस बी आर टैंकों के लिए घुली ऑक्सीजन, सेटलिंग, स्लज जनरेशन और एयर डिमांड देखता है।",
        },
        {
          label: 'सुरक्षा', title: 'सुरक्षा, एक नज़र में',
          body: "<strong>सेफ़्टी</strong> में <strong>फ़्लडिंग सेंसर</strong> है। पूरे 24 घंटे यह <strong>0</strong> पर सपाट रहा — कोई बाढ़ नहीं — और कोई भी बदलाव सबसे पहले यहीं दिखेगा।",
          voice: "फ़्लडिंग सेंसर पूरे दिन शून्य पर है — कोई बाढ़ नहीं। कोई भी बदलाव सबसे पहले यहीं दिखेगा।",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, और उसे इस्तेमाल करने वाली मशीनें',
          body: "<strong>एनर्जी कंजम्पशन</strong> दिन भर बढ़कर <strong>164.6</strong> तक पहुँचता है, और साथ में <strong>एनर्जी पर KL</strong> <strong>1.81</strong> — हर किलोलीटर के ट्रीटमेंट की लागत। नीचे <strong>इक्विपमेंट परफ़ॉर्मेंस एंड मेंटेनेंस</strong> में हर ब्लोअर के <strong>रनिंग आवर्स</strong> (<strong>SBR-1 ब्लोअर 7</strong>, बाकी <strong>0</strong>), <strong>बार स्क्रीन लेवल</strong> और <strong>बार स्क्रीन चोकिंग</strong>, और छह-बैच संचालन पर <strong>EQT ब्लोअर्स</strong> हैं।",
          voice: "एनर्जी कंजम्पशन के साथ एनर्जी पर के एल है — हर किलोलीटर की लागत। नीचे हर ब्लोअर के रनिंग आवर्स और बार स्क्रीन का लेवल व चोकिंग।",
        },
        {
          label: 'SBR', title: 'कौन सा SBR चल रहा है',
          body: "स्टेटस चार्ट हर मशीन को चलने पर <strong>1</strong> और रुकने पर <strong>0</strong> दिखाते हैं — रिएक्टर और फ़िल्टर फ़ीड पंप, <strong>RFP</strong>, <strong>FFP</strong> और <strong>SRP</strong> पंप और <strong>SBR ब्लोअर-5</strong>। <strong>SBR स्टेटस</strong> दोनों रिएक्टरों का हस्तांतरण दिखाता है: <strong>SBR-1</strong> 19 तारीख की सुबह तक चला, फिर <strong>SBR-2</strong> ने काम संभाला।",
          voice: "हर मशीन एक या शून्य के रूप में दिखती है। एस बी आर स्टेटस हस्तांतरण दिखाता है — एस बी आर एक सुबह तक चला, फिर एस बी आर दो ने संभाला।",
        },
        {
          label: 'एडिट पेज', title: 'पेज को ही बदलें',
          body: "<strong>एडिट पेज</strong> <strong>डैशबोर्ड कॉन्फ़िगरेशन</strong> खोलता है। ऊपर: <strong>ऑटो रिफ़्रेश सेकंड्स</strong>, <strong>पेज नेम</strong>, उसका डिफ़ॉल्ट <strong>टाइम</strong>, जुड़ा प्लांट (<strong>STP</strong>), <strong>क्या यह पब्लिक पेज है?</strong> और <strong>एम्बेडेड लिंक्स दिखाएँ?</strong>। नीचे हर सेक्शन अपने विजेट दिखाता है — दिखाने के लिए टिक करें, छिपाने के लिए हटाएँ (यहाँ <strong>BOD</strong>, <strong>COD</strong> और <strong>TSS</strong> बिना टिक के हैं) — साथ में कॉपी, डिलीट, ऊपर-नीचे करने और एक्सपैंड करने के बटन।",
          voice: "एडिट पेज डैशबोर्ड कॉन्फ़िगरेशन खोलता है — पेज का नाम, डिफ़ॉल्ट समय, कौन देख सकता है, और हर विजेट, जिसे आप दिखा, छिपा, कॉपी या क्रम बदल सकते हैं।",
        },
        {
          label: 'विजेट', title: 'विजेट बदलें, तुरंत देखें',
          body: "किसी विजेट को एडिट करने के लिए उसे एक्सपैंड करें। <strong>सेंसर्स</strong> या <strong>डायनामिक सेंसर्स</strong> टैब पर सेंसर जोड़ें (यहाँ <strong>Inlet_Water</strong>), <strong>निक नेम</strong> और <strong>डिस्क्रिप्शन</strong> भरें, मान का प्रकार (<strong>क्यूम्युलेटिव</strong>) और विजेट का प्रकार चुनें — <strong>ग्राफ़</strong>, <strong>नंबर</strong> या <strong>टेबल</strong>। <strong>ग्राफ़</strong> को <strong>नंबर</strong> में बदलें और दाईं ओर का प्रीव्यू तुरंत <strong>90.73</strong> का कार्ड बन जाता है; उसके ऊपर <strong>एडवांस्ड विजेट सेटिंग्स</strong>, <strong>थ्रेशोल्ड कॉन्फ़िगरेशन</strong> और <strong>रेंज सेटिंग्स</strong> हैं।",
          voice: "विजेट खोलकर उसके सेंसर, मान का प्रकार और दिखने का ढंग बदलें। लाइन ग्राफ़ को नंबर में बदलें, और प्रीव्यू तुरंत बदल जाता है।",
        },
        {
          label: 'सारांश', title: 'किस काम के लिए कौन सा सेक्शन',
          body: "तो: क्या आया और टैंकों में क्या है, उसके लिए <strong>वॉटर क्वांटिटी</strong>; ट्रीटमेंट कितना अच्छा है, उसके लिए <strong>वॉटर क्वालिटी</strong> और <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong>; बाढ़ के लिए <strong>सेफ़्टी</strong>; लागत और क्या चला, उसके लिए <strong>एनर्जी</strong> और <strong>इक्विपमेंट</strong>। एक पेज सिलेक्टर, एक ग्रैन्युलैरिटी, एक समय सीमा सब चलाते हैं — और <strong>एडिट पेज</strong> से आप इसे नया रूप दे सकते हैं।",
          voice: "आए पानी के लिए वॉटर क्वांटिटी, ट्रीटमेंट के लिए गुणवत्ता और बायोलॉजी, लागत के लिए एनर्जी और इक्विपमेंट। एडिट पेज से सब कुछ नया रूप ले सकता है।",
        },
      ],
    },
    ta: {
      title: 'டாடா லவிடா,<br><em>முழு ஆலையும் ஒரே பக்கத்தில்.</em>',
      subtitle:
        'உங்கள் டாஷ்போர்டின் சுருக்கமான சுற்றுலா — நீர், தரம், உயிரியல், பாதுகாப்பு, ஆற்றல், உபகரணங்கள் — மற்றும் பக்கத்தை நீங்களே எப்படி மாற்றுவது.',
      chapter: 'டெமோ · டாடா லவிடா',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "உங்கள் டாஷ்போர்டு <strong>டாடா லவிடா அனலிட்டிக்ஸ்</strong> ஆகத் திறக்கிறது. மேல் இடதுபுற <strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது. கீழே உள்ள அனைத்தையும் <strong>பேஜ்</strong> தேர்வி (இங்கே <strong>டீடெயில்டு வியூ</strong>), <strong>கிரானுலாரிட்டி</strong>, <strong>ஃப்ரம்</strong>–<strong>டு</strong> கால வரம்பு இயக்குகின்றன. வலதுபுறம் <strong>ரெஃப்ரெஷ்</strong> நேரடி தரவை மீண்டும் கொண்டுவருகிறது, அருகில் <strong>டவுன்லோட்</strong>, <strong>கியர்</strong>; கடைசி ஐகான் <strong>எடிட் பேஜ்</strong> பக்கத்தையே மாற்றுகிறது.",
          voice: "பேஜ் தேர்வி, கிரானுலாரிட்டி, கால வரம்பு ஆகியவை இந்தப் பக்கத்தின் ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன. ரெஃப்ரெஷ் நேரடி தரவைக் கொண்டுவருகிறது; கடைசி ஐகான் பக்கத்தைத் திருத்துகிறது.",
        },
        {
          label: 'கால வரம்பு', title: 'எந்தக் காலமும், எந்த அளவிலும்',
          body: "கால வரம்பைக் கிளிக் செய்தால் பிக்கர் திறக்கும். முன்னமைவுகள்: <strong>இன்று</strong>, <strong>நேற்று</strong>, <strong>கடந்த 24 மணி நேரம்</strong>, <strong>3</strong>, <strong>7</strong>, <strong>10</strong> அல்லது <strong>30 நாட்கள்</strong>, <strong>3</strong> அல்லது <strong>6 மாதங்கள்</strong>, அல்லது இரட்டை நாட்காட்டியில் <strong>கஸ்டம்</strong> — <strong>12</strong> அல்லது <strong>24 மணி</strong> கடிகாரத்துடன். <strong>கிரானுலாரிட்டி</strong> காலத்தைப் பின்பற்றுகிறது: குறுகிய வரம்புக்கு <strong>மணிநேரம்</strong> அல்லது <strong>நாட்கள்</strong>, <strong>கடந்த 6 மாதங்கள்</strong> தேர்ந்தால் <strong>வாரங்கள்</strong> அல்லது <strong>மாதங்கள்</strong>. <strong>ஸ்மார்ட் ஹவர்ஸ்</strong> ஒரே தினசரி நேரப் பகுதியை ஒவ்வொரு தேதிக்கும் பொருத்துகிறது. <strong>அப்ளை செலக்ஷன்</strong> பக்கத்தை மீண்டும் வரைகிறது; <strong>சேவ் கரண்ட் வியூ</strong> பட்டை அதைச் சேமிக்கிறது — <strong>சேவ்</strong>, அல்லது புதிய வியூவாக <strong>சேவ் ஆஸ்</strong>.",
          voice: "ஒரு முன்னமைவையோ உங்கள் சொந்த தேதிகளையோ தேர்ந்தெடுங்கள். கிரானுலாரிட்டி மணிநேரம், நாட்களிலிருந்து வாரங்கள், மாதங்கள் வரை மாறுகிறது; சேவ் கரண்ட் வியூ முடிவைச் சேமிக்கிறது.",
        },
        {
          label: 'நீர்', title: 'வந்த நீர், தேக்கிய நீர்',
          body: "முதலில் <strong>வாட்டர் குவான்டிட்டி அண்ட் அவைலபிலிட்டி</strong>. <strong>டேங்க் லெவல்ஸ்</strong> ஏழு தொட்டிகளையும் சதவீதத்தில் காட்டுகிறது — ஈக்வலைசேஷன், SBR-1, SBR-2, ட்ரீட்டட் வாட்டர், UF, ஸ்லட்ஜ் ஹோல்டிங், குளோரின் கான்டாக்ட். <strong>இன்லெட் வாட்டர்</strong> கடந்த 24 மணி நேரத்தில் <strong>90.73 KL</strong> ஐ எட்டியது, <strong>இன்லெட் ஃப்ளோ</strong> அது எப்போது வந்தது எனக் காட்டுகிறது, <strong>வாட்டர் வால்யூம் இன் டேங்க்ஸ்</strong> ஒவ்வொரு தொட்டியின் அளவுக்கு எதிராக நிலையைக் கிலோலிட்டராக மாற்றுகிறது — <strong>SBR-1 192.79</strong>/<strong>198 KL</strong>, <strong>EQT 88.29</strong>/<strong>180 KL</strong>, <strong>UF டேங்க் 71.65</strong>/<strong>132 KL</strong>.",
          voice: "ஏழு தொட்டிகளின் நிலை, இன்று வந்த நீர் — சுமார் தொண்ணூறு கிலோலிட்டர் — மற்றும் ஒவ்வொரு தொட்டியும் தன் அளவுக்கு எதிராக எவ்வளவு வைத்திருக்கிறது.",
        },
        {
          label: 'ஜூம்', title: 'திறந்து, பெரிதாக்குங்கள்',
          body: "எந்த சார்ட்டையும் விரிவாக்கினால் அது திரை முழுவதையும் நிரப்பும். <strong>லெஜெண்டில்</strong> ஒரு பெயரைக் கிளிக் செய்து அந்தத் தொட்டியை மறைக்கவோ காட்டவோ செய்யுங்கள், ப்ளாட்டின் மீது இழுத்து ஒரு காலப் பகுதியை <strong>ஜூம்</strong> செய்யுங்கள், ஒரு புள்ளியின் மேல் ஹோவர் செய்து துல்லியமான அளவைப் பாருங்கள் — டூல்டிப் <strong>அக்ரிகேஷன் டைப்</strong> ஐயும் சொல்கிறது. மேல் வலதுபுற <strong>ரீசெட் ஜூம்</strong> முழு காலத்துக்குத் திருப்பும்.",
          voice: "விரிவாக்கிய சார்ட் திரையை நிரப்புகிறது. லெஜெண்டிலிருந்து தொட்டிகளை மாற்றுங்கள், இழுத்து ஜூம் செய்யுங்கள்; ரீசெட் ஜூம் முழு காலத்தைத் திருப்புகிறது.",
        },
        {
          label: 'கருவிகள்', title: 'பதிவிறக்குங்கள், அல்லது மீண்டும் வரையுங்கள்',
          body: "விட்ஜெட்டின் மேல் ஹோவர் செய்தால் அதன் கருவிகள் தோன்றும்: <strong>டவுன்லோட் CSV</strong> அதன் பின்னுள்ள தரவை விரிதாளாகச் சேமிக்கிறது, பின் <strong>எக்ஸ்பாண்ட்</strong>, <strong>சூஸ் சார்ட்</strong>, <strong>எடிட்</strong>, <strong>இன்ஃபோ</strong>. ஒவ்வொரு கார்டின் <strong>மெனு</strong> அதே தரவை <strong>டேபிள்</strong> மற்றும் <strong>பார் கிராஃப்</strong> இடையே மாற்றுகிறது — டேபிள் வியூ ஒவ்வொரு தொட்டியையும் அதன் சமீபத்திய மதிப்புடன் காட்டுகிறது.",
          voice: "ஒவ்வொரு விட்ஜெட்டிலும் அதே கருவிகள் — அதன் தரவை சி எஸ் வி ஆகப் பதிவிறக்குங்கள், விரிவாக்குங்கள், அல்லது சார்ட், டேபிள், பார் கிராஃப் இடையே மாற்றுங்கள்.",
        },
        {
          label: 'தரம்', title: 'தரம், குறிப்புக்கு எதிராக',
          body: "<strong>இன்லெட் அண்ட் அவுட்லெட் வாட்டர் குவாலிட்டி</strong>யில் ஒரு <strong>குவாலிட்டி பாராமீட்டர்ஸ்</strong> அட்டவணை — இன்லெட், SBR, அவுட்லெட் <strong>pH</strong>, இன்லெட், அவுட்லெட் <strong>TDS</strong> — உடன் தனக்கென குறிப்பு கொண்ட <strong>ட்ரீட்டட் வாட்டர் டர்பிடிட்டி</strong> கார்டு, <strong>5 NTU க்குக் கீழ்</strong>; அது <strong>0.00</strong> காட்டுகிறது. இந்தக் காலத்தில் pH, TDS வரிசைகள் <strong>நோ டேட்டா அவைலபிள்</strong> எனக் காட்டுகின்றன — அளவீடு இல்லாதபோது பழைய மதிப்பைக் காட்டாமல் அட்டவணை தெளிவாகச் சொல்கிறது.",
          voice: "தரம் அதன் குறிப்புடன் காட்டப்படுகிறது. ட்ரீட்டட் வாட்டர் டர்பிடிட்டி ஐந்து என்ற வரம்புக்கு எதிராகப் பூஜ்ஜியம்; இல்லாத அளவீடுகள் நோ டேட்டா எனக் குறிக்கப்படுகின்றன.",
        },
        {
          label: 'உயிரியல்', title: 'உயிரியல் எப்படி இருக்கிறது',
          body: "<strong>பயலாஜிக்கல் ப்ராசஸ் ஹெல்த்</strong> SBR களைக் கண்காணிக்கிறது: ppm இல் <strong>SBR DO</strong>, <strong>SBR SV30</strong> — இரண்டும் இந்தக் காலத்தில் <strong>நோ டேட்டா அவைலபிள்</strong> — உடன் <strong>ஸ்லட்ஜ் ஜெனரேஷன்</strong> <strong>0.04</strong>, <strong>ஏர் டிமாண்ட்</strong> <strong>1.66</strong>.",
          voice: "பயலாஜிக்கல் ப்ராசஸ் ஹெல்த், எஸ் பி ஆர் தொட்டிகளுக்கான கரைந்த ஆக்சிஜன், படிதல், ஸ்லட்ஜ் உருவாக்கம், காற்றுத் தேவை ஆகியவற்றைக் கண்காணிக்கிறது.",
        },
        {
          label: 'பாதுகாப்பு', title: 'பாதுகாப்பு, ஒரே பார்வையில்',
          body: "<strong>சேஃப்டி</strong>யில் <strong>ஃப்ளடிங் சென்சார்</strong> உள்ளது. முழு 24 மணி நேரமும் அது <strong>0</strong> இல் சமமாக இருந்தது — வெள்ளம் இல்லை — எந்த மாற்றமும் முதலில் இங்கேயே தெரியும்.",
          voice: "ஃப்ளடிங் சென்சார் நாள் முழுவதும் பூஜ்ஜியத்தில் — வெள்ளம் இல்லை. எந்த மாற்றமும் முதலில் இங்கே தெரியும்.",
        },
        {
          label: 'ஆற்றல்', title: 'ஆற்றல், அதைப் பயன்படுத்தும் இயந்திரங்கள்',
          body: "<strong>எனர்ஜி கன்சம்ப்ஷன்</strong> நாள் முழுவதும் உயர்ந்து <strong>164.6</strong> ஐ எட்டுகிறது, அருகில் <strong>எனர்ஜி பெர் KL</strong> <strong>1.81</strong> — ஒவ்வொரு கிலோலிட்டரையும் சுத்திகரிக்க ஆன செலவு. கீழே <strong>எக்விப்மென்ட் பெர்ஃபார்மன்ஸ் அண்ட் மெயின்டனன்ஸ்</strong> ஒவ்வொரு ப்ளோயரின் <strong>ரன்னிங் ஹவர்ஸ்</strong> (<strong>SBR-1 ப்ளோயர் 7</strong>, மற்றவை <strong>0</strong>), <strong>பார் ஸ்க்ரீன் லெவல்</strong>, <strong>பார் ஸ்க்ரீன் சோக்கிங்</strong>, ஆறு-பேட்ச் இயக்கத்தில் <strong>EQT ப்ளோயர்ஸ்</strong> ஆகியவற்றைக் காட்டுகிறது.",
          voice: "எனர்ஜி கன்சம்ப்ஷனுடன் எனர்ஜி பெர் கே எல் — ஒவ்வொரு கிலோலிட்டரின் செலவு. கீழே ஒவ்வொரு ப்ளோயரின் இயக்க நேரமும் பார் ஸ்க்ரீனின் நிலையும் அடைப்பும்.",
        },
        {
          label: 'SBR', title: 'எந்த SBR இயங்குகிறது',
          body: "ஸ்டேட்டஸ் சார்ட்கள் ஒவ்வொரு இயந்திரத்தையும் இயங்கும்போது <strong>1</strong>, நின்றால் <strong>0</strong> எனக் காட்டுகின்றன — ரியாக்டர், ஃபில்டர் ஃபீட் பம்புகள், <strong>RFP</strong>, <strong>FFP</strong>, <strong>SRP</strong> பம்புகள், <strong>SBR ப்ளோயர்-5</strong>. <strong>SBR ஸ்டேட்டஸ்</strong> இரண்டு ரியாக்டர்களுக்கு இடையிலான மாற்றத்தைக் காட்டுகிறது: <strong>SBR-1</strong> 19 ஆம் தேதி காலை வரை இயங்கியது, பின் <strong>SBR-2</strong> பொறுப்பேற்றது.",
          voice: "ஒவ்வொரு இயந்திரமும் ஒன்று அல்லது பூஜ்ஜியமாகக் காட்டப்படுகிறது. எஸ் பி ஆர் ஒன்று காலை வரை இயங்கியது, பின் எஸ் பி ஆர் இரண்டு பொறுப்பேற்றது.",
        },
        {
          label: 'பக்கத் திருத்தம்', title: 'பக்கத்தையே மாற்றுங்கள்',
          body: "<strong>எடிட் பேஜ்</strong> <strong>டாஷ்போர்டு கான்ஃபிகரேஷன்</strong>ஐத் திறக்கிறது. மேலே: <strong>ஆட்டோ ரெஃப்ரெஷ் செகண்ட்ஸ்</strong>, <strong>பேஜ் நேம்</strong>, அதன் இயல்புநிலை <strong>டைம்</strong>, இணைக்கப்பட்ட ஆலை (<strong>STP</strong>), <strong>இது பொதுப் பக்கமா?</strong>, <strong>எம்பெடட் லிங்க்ஸ் காட்டவா?</strong>. கீழே ஒவ்வொரு பிரிவும் அதன் விட்ஜெட்களைப் பட்டியலிடுகிறது — காட்ட டிக் செய்யுங்கள், மறைக்க நீக்குங்கள் (இங்கே <strong>BOD</strong>, <strong>COD</strong>, <strong>TSS</strong> டிக் இல்லாமல் உள்ளன) — நகலெடுக்க, நீக்க, மேலே-கீழே நகர்த்த, விரிவாக்கப் பொத்தான்களுடன்.",
          voice: "எடிட் பேஜ் டாஷ்போர்டு கான்ஃபிகரேஷனைத் திறக்கிறது — பக்கப் பெயர், இயல்புநிலை நேரம், யார் பார்க்கலாம், மற்றும் ஒவ்வொரு விட்ஜெட்டையும் காட்ட, மறைக்க, நகலெடுக்க, வரிசை மாற்றலாம்.",
        },
        {
          label: 'விட்ஜெட்', title: 'விட்ஜெட்டை மாற்றி, உடனே பாருங்கள்',
          body: "ஒரு விட்ஜெட்டைத் திருத்த அதை விரிவாக்குங்கள். <strong>சென்சார்ஸ்</strong> அல்லது <strong>டைனமிக் சென்சார்ஸ்</strong> தாவலில் சென்சார்களைச் சேருங்கள் (இங்கே <strong>Inlet_Water</strong>), <strong>நிக் நேம்</strong>, <strong>டிஸ்க்ரிப்ஷன்</strong> அமைத்து, மதிப்பின் வகை (<strong>க்யூமுலேட்டிவ்</strong>), விட்ஜெட் வகை — <strong>கிராஃப்</strong>, <strong>நம்பர்</strong> அல்லது <strong>டேபிள்</strong> — தேர்ந்தெடுங்கள். <strong>கிராஃப்</strong> ஐ <strong>நம்பர்</strong> ஆக மாற்றினால் வலதுபுற முன்னோட்டம் உடனே <strong>90.73</strong> கார்டாக மாறுகிறது; அதன் மேலே <strong>அட்வான்ஸ்டு விட்ஜெட் செட்டிங்ஸ்</strong>, <strong>த்ரெஷோல்ட் கான்ஃபிகரேஷன்</strong>, <strong>ரேஞ்ச் செட்டிங்ஸ்</strong>.",
          voice: "விட்ஜெட்டைத் திறந்து அதன் சென்சார்கள், மதிப்பு வகை, வரையும் விதத்தை மாற்றுங்கள். லைன் கிராஃபை நம்பராக மாற்றினால் முன்னோட்டம் உடனே மாறுகிறது.",
        },
        {
          label: 'சுருக்கம்', title: 'எந்த வேலைக்கு எந்தப் பிரிவு',
          body: "ஆக: வந்தது என்ன, தொட்டிகளில் இருப்பது என்ன என்பதற்கு <strong>வாட்டர் குவான்டிட்டி</strong>; சுத்திகரிப்பு எவ்வளவு நன்றாக நடக்கிறது என்பதற்கு <strong>வாட்டர் குவாலிட்டி</strong>, <strong>பயலாஜிக்கல் ப்ராசஸ் ஹெல்த்</strong>; வெள்ளத்துக்கு <strong>சேஃப்டி</strong>; செலவுக்கும் இயங்கியதற்கும் <strong>எனர்ஜி</strong>, <strong>எக்விப்மென்ட்</strong>. ஒரே பேஜ் தேர்வி, ஒரே கிரானுலாரிட்டி, ஒரே கால வரம்பு அனைத்தையும் இயக்குகின்றன — <strong>எடிட் பேஜ்</strong> அதை மறுவடிவமைக்க உதவுகிறது.",
          voice: "வந்த நீருக்கு வாட்டர் குவான்டிட்டி, சுத்திகரிப்புக்கு தரமும் உயிரியலும், செலவுக்கு எனர்ஜியும் எக்விப்மென்ட்டும். எடிட் பேஜ் அனைத்தையும் மறுவடிவமைக்கிறது.",
        },
      ],
    },
    mr: {
      title: 'टाटा लविडा,<br><em>संपूर्ण प्लांट एका पानावर.</em>',
      subtitle:
        'तुमच्या डॅशबोर्डची छोटी सफर — पाणी, गुणवत्ता, बायोलॉजी, सुरक्षा, ऊर्जा आणि उपकरणे — आणि पान स्वतः कसे बदलायचे.',
      chapter: 'डेमो · टाटा लविडा',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'पान चालवणारी नियंत्रणे',
          body: "तुमचा डॅशबोर्ड <strong>टाटा लविडा अॅनालिटिक्स</strong> म्हणून उघडतो. वर डावीकडील <strong>मेन्यू आयकॉन</strong> साइड नेव्हिगेशन उघडतो. खालचे सर्व काही <strong>पेज</strong> सिलेक्टर (इथे <strong>डिटेल्ड व्ह्यू</strong>), <strong>ग्रॅन्युलॅरिटी</strong> आणि <strong>फ्रॉम</strong>–<strong>टू</strong> कालमर्यादेवर चालते. उजवीकडे <strong>रिफ्रेश</strong> लाइव्ह डेटा पुन्हा आणतो, शेजारी <strong>डाउनलोड</strong> आणि <strong>गियर</strong> आहेत, आणि शेवटचा आयकॉन <strong>एडिट पेज</strong> पानच बदलतो.",
          voice: "पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि कालमर्यादा या पानावरील प्रत्येक विजेट चालवतात. रिफ्रेश लाइव्ह डेटा आणतो, आणि शेवटचा आयकॉन पान एडिट करतो.",
        },
        {
          label: 'कालमर्यादा', title: 'कोणताही काळ, कोणत्याही स्तरावर',
          body: "कालमर्यादेवर क्लिक करा आणि पिकर उघडतो. प्रीसेट: <strong>टुडे</strong>, <strong>यस्टरडे</strong>, <strong>मागील 24 तास</strong>, <strong>3</strong>, <strong>7</strong>, <strong>10</strong> किंवा <strong>30 दिवस</strong>, <strong>3</strong> किंवा <strong>6 महिने</strong>, किंवा दोन कॅलेंडरवर <strong>कस्टम</strong> — <strong>12</strong> किंवा <strong>24 तासांच्या</strong> घड्याळासह. <strong>ग्रॅन्युलॅरिटी</strong> कालावधीनुसार बदलते: छोट्या कालावधीसाठी <strong>तास</strong> किंवा <strong>दिवस</strong>, आणि <strong>मागील 6 महिने</strong> निवडल्यावर <strong>आठवडे</strong> किंवा <strong>महिने</strong>. <strong>स्मार्ट अवर्स</strong> एकच दैनिक वेळ-खंड प्रत्येक तारखेला लागू करतो. <strong>अप्लाय सिलेक्शन</strong> पान पुन्हा काढतो, आणि <strong>सेव्ह करंट व्ह्यू</strong> पट्टी ते जतन करते — <strong>सेव्ह</strong>, किंवा नवीन व्ह्यू म्हणून <strong>सेव्ह अॅज</strong>.",
          voice: "एखादा प्रीसेट निवडा किंवा स्वतःच्या तारखा. ग्रॅन्युलॅरिटी तास आणि दिवसांपासून आठवडे आणि महिन्यांपर्यंत बदलते, आणि सेव्ह करंट व्ह्यू निकाल जतन करतो.",
        },
        {
          label: 'पाणी', title: 'आलेले पाणी, साठवलेले पाणी',
          body: "सर्वात आधी <strong>वॉटर क्वांटिटी अँड अव्हेलेबिलिटी</strong>. <strong>टँक लेव्हल्स</strong> सातही टाक्या टक्केवारीत दाखवतो — इक्वलायझेशन, SBR-1, SBR-2, ट्रीटेड वॉटर, UF, स्लज होल्डिंग आणि क्लोरीन कॉन्टॅक्ट. <strong>इनलेट वॉटर</strong> मागील 24 तासांत <strong>90.73 KL</strong> पर्यंत पोहोचले, <strong>इनलेट फ्लो</strong> ते कधी आले ते दाखवतो, आणि <strong>वॉटर व्हॉल्यूम इन टँक्स</strong> प्रत्येक टाकीच्या आकारासमोर पातळी किलोलिटरमध्ये बदलतो — <strong>SBR-1 192.79</strong>/<strong>198 KL</strong>, <strong>EQT 88.29</strong>/<strong>180 KL</strong>, <strong>UF टँक 71.65</strong>/<strong>132 KL</strong>.",
          voice: "सात टाक्यांच्या पातळ्या, आज आलेले पाणी — सुमारे नव्वद किलोलिटर — आणि प्रत्येक टाकी आपल्या आकारासमोर किती पाणी धरून आहे.",
        },
        {
          label: 'झूम', title: 'उघडा, झूम करा',
          body: "कोणताही चार्ट एक्सपँड करा आणि तो संपूर्ण स्क्रीन भरतो. <strong>लेजेंड</strong>मधील नावावर क्लिक करून ती टाकी लपवा किंवा दाखवा, प्लॉटवर ओढून एखाद्या कालखंडात <strong>झूम</strong> करा, आणि एखाद्या बिंदूवर होव्हर करून अचूक रीडिंग पाहा — टूलटिप <strong>अॅग्रिगेशन टाइप</strong>ही सांगते. वर उजवीकडील <strong>रीसेट झूम</strong> पूर्ण कालावधीवर परत नेतो.",
          voice: "एक्सपँड केल्यावर चार्ट संपूर्ण स्क्रीन भरतो. लेजेंडमधून टाक्या चालू-बंद करा, ओढून झूम करा, आणि रीसेट झूम पूर्ण कालावधी परत आणतो.",
        },
        {
          label: 'टूल्स', title: 'डाउनलोड करा, किंवा पुन्हा काढा',
          body: "विजेटवर होव्हर करा आणि त्याची टूल्स दिसतात: <strong>डाउनलोड CSV</strong> त्यामागचा डेटा स्प्रेडशीट म्हणून जतन करतो, मग <strong>एक्सपँड</strong>, <strong>चूज चार्ट</strong>, <strong>एडिट</strong> आणि <strong>इन्फो</strong>. प्रत्येक कार्डचा <strong>मेन्यू</strong> तोच डेटा <strong>टेबल</strong> आणि <strong>बार ग्राफ</strong> यांमध्ये बदलतो — टेबल व्ह्यू प्रत्येक टाकी तिच्या ताज्या मूल्यासह दाखवतो.",
          voice: "प्रत्येक विजेटमध्ये तीच टूल्स — त्याचा डेटा सी एस व्ही मध्ये डाउनलोड करा, तो एक्सपँड करा, किंवा चार्ट, टेबल आणि बार ग्राफ यांत बदला.",
        },
        {
          label: 'गुणवत्ता', title: 'गुणवत्ता, संदर्भासमोर',
          body: "<strong>इनलेट अँड आउटलेट वॉटर क्वालिटी</strong>मध्ये एक <strong>क्वालिटी पॅरामीटर्स</strong> टेबल आहे — इनलेट, SBR आणि आउटलेट <strong>pH</strong>, इनलेट आणि आउटलेट <strong>TDS</strong> — आणि सोबत स्वतःचा संदर्भ असलेले <strong>ट्रीटेड वॉटर टर्बिडिटी</strong> कार्ड, <strong>5 NTU पेक्षा कमी</strong>; ते <strong>0.00</strong> दाखवते. या कालावधीत pH आणि TDS च्या ओळी <strong>नो डेटा अव्हेलेबल</strong> दाखवतात, म्हणजे रीडिंग नसताना टेबल जुने मूल्य न दाखवता स्पष्ट सांगते.",
          voice: "गुणवत्ता तिच्या संदर्भासोबत दिसते. ट्रीटेड वॉटरची टर्बिडिटी पाचच्या मर्यादेसमोर शून्य आहे, आणि नसलेली रीडिंग्स नो डेटा म्हणून दाखवली जातात.",
        },
        {
          label: 'बायोलॉजी', title: 'बायोलॉजी कशी चालली आहे',
          body: "<strong>बायोलॉजिकल प्रोसेस हेल्थ</strong> SBR वर लक्ष ठेवतो: ppm मध्ये <strong>SBR DO</strong> आणि <strong>SBR SV30</strong> — दोन्ही या कालावधीत <strong>नो डेटा अव्हेलेबल</strong> — सोबत <strong>स्लज जनरेशन</strong> <strong>0.04</strong> आणि <strong>एअर डिमांड</strong> <strong>1.66</strong>.",
          voice: "बायोलॉजिकल प्रोसेस हेल्थ एस बी आर टाक्यांसाठी विरघळलेला ऑक्सिजन, सेटलिंग, स्लज जनरेशन आणि एअर डिमांड पाहतो.",
        },
        {
          label: 'सुरक्षा', title: 'सुरक्षा, एका नजरेत',
          body: "<strong>सेफ्टी</strong>मध्ये <strong>फ्लडिंग सेन्सर</strong> आहे. संपूर्ण 24 तास तो <strong>0</strong> वर सपाट राहिला — पूर नाही — आणि कोणताही बदल आधी इथेच दिसेल.",
          voice: "फ्लडिंग सेन्सर दिवसभर शून्यावर आहे — पूर नाही. कोणताही बदल आधी इथेच दिसेल.",
        },
        {
          label: 'ऊर्जा', title: 'ऊर्जा, आणि ती वापरणारी यंत्रे',
          body: "<strong>एनर्जी कंझम्प्शन</strong> दिवसभर वाढत <strong>164.6</strong> पर्यंत जाते, शेजारी <strong>एनर्जी पर KL</strong> <strong>1.81</strong> — प्रत्येक किलोलिटर प्रक्रियेचा खर्च. खाली <strong>इक्विपमेंट परफॉर्मन्स अँड मेंटेनन्स</strong>मध्ये प्रत्येक ब्लोअरचे <strong>रनिंग अवर्स</strong> (<strong>SBR-1 ब्लोअर 7</strong>, बाकी <strong>0</strong>), <strong>बार स्क्रीन लेव्हल</strong> आणि <strong>बार स्क्रीन चोकिंग</strong>, आणि सहा-बॅच कार्यावरील <strong>EQT ब्लोअर्स</strong> आहेत.",
          voice: "एनर्जी कंझम्प्शनशेजारी एनर्जी पर के एल — प्रत्येक किलोलिटरचा खर्च. खाली प्रत्येक ब्लोअरचे रनिंग अवर्स आणि बार स्क्रीनची पातळी व चोकिंग.",
        },
        {
          label: 'SBR', title: 'कोणता SBR चालू आहे',
          body: "स्टेटस चार्ट प्रत्येक यंत्र चालू असताना <strong>1</strong> आणि बंद असताना <strong>0</strong> दाखवतात — रिअॅक्टर आणि फिल्टर फीड पंप, <strong>RFP</strong>, <strong>FFP</strong> आणि <strong>SRP</strong> पंप आणि <strong>SBR ब्लोअर-5</strong>. <strong>SBR स्टेटस</strong> दोन रिअॅक्टरमधील हस्तांतरण दाखवतो: <strong>SBR-1</strong> 19 तारखेच्या सकाळपर्यंत चालला, मग <strong>SBR-2</strong> ने काम हाती घेतले.",
          voice: "प्रत्येक यंत्र एक किंवा शून्य म्हणून दिसते. एस बी आर एक सकाळपर्यंत चालला, मग एस बी आर दोनने काम हाती घेतले.",
        },
        {
          label: 'एडिट पेज', title: 'पानच बदला',
          body: "<strong>एडिट पेज</strong> <strong>डॅशबोर्ड कॉन्फिगरेशन</strong> उघडतो. वर: <strong>ऑटो रिफ्रेश सेकंड्स</strong>, <strong>पेज नेम</strong>, त्याचा डीफॉल्ट <strong>टाइम</strong>, जोडलेला प्लांट (<strong>STP</strong>), <strong>हे पब्लिक पेज आहे का?</strong> आणि <strong>एम्बेडेड लिंक्स दाखवायच्या?</strong>. खाली प्रत्येक विभाग त्याचे विजेट दाखवतो — दाखवण्यासाठी टिक करा, लपवण्यासाठी काढा (इथे <strong>BOD</strong>, <strong>COD</strong> आणि <strong>TSS</strong> टिकशिवाय आहेत) — सोबत कॉपी, डिलीट, वर-खाली हलवणे आणि एक्सपँडची बटणे.",
          voice: "एडिट पेज डॅशबोर्ड कॉन्फिगरेशन उघडतो — पानाचे नाव, डीफॉल्ट वेळ, कोण पाहू शकतो, आणि प्रत्येक विजेट, जे तुम्ही दाखवू, लपवू, कॉपी करू किंवा क्रम बदलू शकता.",
        },
        {
          label: 'विजेट', title: 'विजेट बदला, लगेच पाहा',
          body: "विजेट एडिट करण्यासाठी ते एक्सपँड करा. <strong>सेन्सर्स</strong> किंवा <strong>डायनॅमिक सेन्सर्स</strong> टॅबवर सेन्सर जोडा (इथे <strong>Inlet_Water</strong>), <strong>निक नेम</strong> आणि <strong>डिस्क्रिप्शन</strong> भरा, मूल्याचा प्रकार (<strong>क्युम्युलेटिव्ह</strong>) आणि विजेटचा प्रकार निवडा — <strong>ग्राफ</strong>, <strong>नंबर</strong> किंवा <strong>टेबल</strong>. <strong>ग्राफ</strong> बदलून <strong>नंबर</strong> करा आणि उजवीकडील प्रिव्ह्यू लगेच <strong>90.73</strong> चे कार्ड बनतो; त्यावर <strong>अॅडव्हान्स्ड विजेट सेटिंग्ज</strong>, <strong>थ्रेशोल्ड कॉन्फिगरेशन</strong> आणि <strong>रेंज सेटिंग्ज</strong> आहेत.",
          voice: "विजेट उघडून त्याचे सेन्सर, मूल्याचा प्रकार आणि ते कसे दिसते ते बदला. लाइन ग्राफ बदलून नंबर करा, आणि प्रिव्ह्यू लगेच बदलतो.",
        },
        {
          label: 'सारांश', title: 'कोणत्या कामासाठी कोणता विभाग',
          body: "म्हणून: काय आले आणि टाक्यांत काय आहे यासाठी <strong>वॉटर क्वांटिटी</strong>; प्रक्रिया किती चांगली होते आहे यासाठी <strong>वॉटर क्वालिटी</strong> आणि <strong>बायोलॉजिकल प्रोसेस हेल्थ</strong>; पुरासाठी <strong>सेफ्टी</strong>; खर्च आणि काय चालले यासाठी <strong>एनर्जी</strong> आणि <strong>इक्विपमेंट</strong>. एक पेज सिलेक्टर, एक ग्रॅन्युलॅरिटी, एक कालमर्यादा सर्व चालवतात — आणि <strong>एडिट पेज</strong>ने तुम्ही ते नव्याने घडवू शकता.",
          voice: "आलेल्या पाण्यासाठी वॉटर क्वांटिटी, प्रक्रियेसाठी गुणवत्ता आणि बायोलॉजी, खर्चासाठी एनर्जी आणि इक्विपमेंट. एडिट पेजने सर्व काही नव्याने घडवता येते.",
        },
      ],
    },
  },
};

export default lesson;
