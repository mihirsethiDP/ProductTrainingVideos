import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-adani-mumbai`;

/**
 * Personalized demo — Adani Airport, Mumbai.   (hidden module-demos)
 * Built from the CSM's screen recording of the client's STP + tertiary + RO
 * plant (screens → grit → CASS basins → PSF → UF → RO, with sludge dewatering
 * and dosing).
 * Style: overview (brisk page-per-feature tour, ~3 min).
 * Notes from the uploader (AI instruction layer):
 *   1. "Emphasis on Navigation" → step 1 is a full orientation of the side menu
 *      and the dashboard's own controls (page selector, granularity, time range,
 *      the action icons); every later step is framed as "open it from here",
 *      the Scada page selector gets its own step, and the wrap re-maps the menu.
 */
const lesson: Lesson = {
  id: 'demo-adani-mumbai',
  moduleId: 'module-demos',
  lessonNumber: 4,
  estimatedMinutes: 3,
  expiresAt: '2026-08-28', // 30 days after the job's created_at (2026-07-29) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    dashboard: `${BASE}/dashboard.jpg`,
    quality: `${BASE}/quality.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    process: `${BASE}/process.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    chemlogs: `${BASE}/chemlogs.jpg`,
    insights: `${BASE}/insights.jpg`,
    datainput: `${BASE}/datainput.jpg`,
    scada: `${BASE}/scada.jpg`,
    scadapages: `${BASE}/scadapages.jpg`,
    tasks: `${BASE}/tasks.jpg`,
  },
  layouts: [
    // S1 — the side navigation: where every feature lives
    {
      mode: 'detail', screenshot: 'nav', caption: 'Your side navigation',
      spotlight: { top: '6%', left: '0%', width: '13%', height: '94%' },
      cursor: [
        { at: 0, x: 13.5, y: 3.5, click: true },
        { at: 0.35, x: 4, y: 10.5 },
        { at: 0.6, x: 4, y: 21 },
        { at: 0.85, x: 7, y: 31.5, click: true },
      ],
    },
    // S2 — Dashboard, Summary Page + the controls that drive every widget
    {
      mode: 'detail', screenshot: 'dashboard', caption: 'Dashboard — Summary Page',
      spotlight: null,
      cursor: [
        { at: 0, x: 6.4, y: 20, click: true },
        { at: 0.4, x: 61, y: 20 },
        { at: 0.7, x: 88, y: 20 },
        { at: 0.9, x: 81, y: 11, click: true },
      ],
    },
    // S3 — Water Quality Parameters (gauges carry their reference ranges)
    {
      mode: 'detail', screenshot: 'quality', caption: 'Water Quality Parameters',
      spotlight: null,
      cursor: [
        { at: 0, x: 9, y: 37 },
        { at: 0.4, x: 9, y: 57 },
        { at: 0.7, x: 58, y: 57 },
        { at: 0.9, x: 20, y: 85 },
      ],
    },
    // S4 — the second page: Detailed Analytics
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Detailed Analytics Page',
      spotlight: null,
      cursor: [
        { at: 0, x: 7.8, y: 10, click: true },
        { at: 0.4, x: 42, y: 41 },
        { at: 0.7, x: 82, y: 41 },
        { at: 0.9, x: 17, y: 74 },
      ],
    },
    // S5 — the process sections further down that page
    {
      mode: 'detail', screenshot: 'process', caption: 'Section-by-section trends',
      spotlight: null,
      cursor: [
        { at: 0, x: 6.6, y: 24 },
        { at: 0.4, x: 17, y: 61 },
        { at: 0.75, x: 50, y: 61 },
        { at: 0.95, x: 82, y: 61 },
      ],
    },
    // S6 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Inventory — chemical stock',
      spotlight: null,
      cursor: [
        { at: 0, x: 4.7, y: 10 },
        { at: 0.35, x: 45, y: 29 },
        { at: 0.65, x: 5, y: 56 },
        { at: 0.9, x: 85, y: 29 },
      ],
    },
    // S7 — Chemical Logs behind an inventory row
    {
      mode: 'detail', screenshot: 'chemlogs', caption: 'Chemical Logs — every movement',
      spotlight: null,
      cursor: [
        { at: 0, x: 3.4, y: 9, click: true },
        { at: 0.4, x: 38, y: 22 },
        { at: 0.7, x: 13, y: 30 },
        { at: 0.9, x: 55, y: 41 },
      ],
    },
    // S8 — Insight List
    {
      mode: 'detail', screenshot: 'insights', caption: 'Insight List — alarms that find you',
      spotlight: { top: '30%', left: '0%', width: '100%', height: '12%' },
      cursor: [
        { at: 0, x: 13, y: 34 },
        { at: 0.35, x: 38, y: 34 },
        { at: 0.7, x: 16, y: 49 },
        { at: 0.92, x: 94, y: 10, click: true },
      ],
    },
    // S9 — Data Input
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Data Input — lab readings',
      spotlight: null,
      cursor: [
        { at: 0, x: 5, y: 12 },
        { at: 0.35, x: 25, y: 18 },
        { at: 0.65, x: 39, y: 50 },
        { at: 0.9, x: 95, y: 11.5, click: true },
      ],
    },
    // S10 — ScadaView, the live digital twin
    {
      mode: 'detail', screenshot: 'scada', caption: 'ScadaView — your live plant',
      spotlight: null,
      cursor: [
        { at: 0, x: 9.3, y: 14 },
        { at: 0.35, x: 17, y: 38 },
        { at: 0.7, x: 72, y: 35 },
        { at: 0.92, x: 77, y: 14.5 },
      ],
    },
    // S11 — the Scada page selector: ten section views
    {
      mode: 'detail', screenshot: 'scadapages', caption: 'Ten section views',
      spotlight: { top: '13%', left: '87%', width: '12%', height: '37%' },
      cursor: [
        { at: 0, x: 92.8, y: 11, click: true },
        { at: 0.35, x: 90, y: 19 },
        { at: 0.65, x: 90, y: 33 },
        { at: 0.9, x: 90, y: 46.6, click: true },
      ],
    },
    // S12 — Task List
    {
      mode: 'detail', screenshot: 'tasks', caption: 'Task List — work routed by skill',
      spotlight: null,
      cursor: [
        { at: 0, x: 50, y: 18.6 },
        { at: 0.35, x: 41, y: 42 },
        { at: 0.7, x: 82, y: 60 },
        { at: 0.92, x: 95, y: 10.4, click: true },
      ],
    },
    // S13 — wrap: back to the menu, feature by feature
    {
      mode: 'detail', screenshot: 'nav', caption: 'Your complete setup',
      spotlight: null,
      cursor: [
        { at: 0.1, x: 4, y: 10.5 },
        { at: 0.5, x: 4, y: 21 },
        { at: 0.85, x: 6, y: 31.5 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Your <em>Adani Airport, Mumbai</em><br>setup.',
      subtitle:
        'A fast tour of everything we set up for your plant — how to move around it, and what each screen does.',
      chapter: 'Personalized demo · Adani Airport, Mumbai',
      steps: [
        {
          label: 'Navigate', title: 'Your side menu — where everything lives',
          body: "Tap the <strong>menu icon</strong> (top-left) to open your <strong>side navigation</strong>. Everything sits here: <strong>Dashboard, Inventory, Insight List, Data Input, ScadaView — Adani Mumbai</strong> and <strong>Task</strong>. We'll open each one from this same menu.",
          voice: "Welcome — here's everything we've set up for Adani Airport, Mumbai, and how to move around it. Tap the menu icon, top left, to open your side navigation. Everything lives here: Dashboard, Inventory, Insight List, Data Input, Scada View, and Task. We'll open each one from this same menu.",
        },
        {
          label: 'Dashboard', title: 'Dashboard — and the controls that drive it',
          body: "Open <strong>Dashboard</strong>. Top-left, the <strong>Page selector</strong> switches views — start on <strong>Summary Page</strong>. Top-right, <strong>granularity</strong> and the <strong>time range</strong> drive every widget on the screen, and the icon row gives you <strong>refresh, download, settings, add widget</strong> and <strong>share</strong>.",
          voice: "Open Dashboard. Top left, the Page selector switches between your views — we're on Summary Page. Top right, granularity and the time range drive every widget on the screen, so change them once and the whole page follows. And that icon row is refresh, download, settings, add widget, and share.",
        },
        {
          label: 'Summary', title: 'Plant health, at a glance',
          body: "The <strong>Summary Page</strong> opens with your site map and the numbers that matter — <strong>S T P inlet flow, total U F inlet, hydraulic efficiency</strong>, each U F line. Scroll on and the <strong>Water Quality Parameters</strong> gauges carry their own <strong>reference ranges</strong>: <strong>D O, M L S S, filter inlet pH, F R C, U F turbidity, R O conductivity</strong>.",
          voice: "The Summary Page opens with your site map and the numbers that matter — S T P inlet flow, total U F inlet, hydraulic efficiency, and each U F line. Scroll on and the water quality gauges carry their own reference ranges. D O, M L S S, filter inlet pH, F R C, U F turbidity, R O conductivity — colour tells you at a glance what's inside spec.",
        },
        {
          label: 'Analytics', title: 'Detailed Analytics — the deeper view',
          body: "Same <strong>Page selector</strong>, second view: <strong>Detailed Analytics Page</strong>. <strong>Plant Summary</strong> puts S T P inlet, U F inlet, <strong>hydraulic efficiency</strong> and <strong>energy per K L</strong> side by side, with <strong>R O-1 and R O-2 flow and recovery</strong> and daily <strong>energy consumption</strong> underneath.",
          voice: "Same Page selector, second view — Detailed Analytics. Plant Summary puts S T P inlet, U F inlet, hydraulic efficiency and energy per kilolitre side by side. Below it, R O one and R O two flow and recovery, and your daily energy consumption per meter.",
        },
        {
          label: 'Trends', title: 'Every section, its own block of trends',
          body: "Keep scrolling and the page is grouped by process: <strong>Biological System Performance</strong> (CASS basin levels, valve status), <strong>Tertiary Treatment</strong> (differential pressure across the <strong>P S F</strong> filters against its 0.7 bar reference), then <strong>flushing, sludge dewatering, dosing</strong> and equipment run status.",
          voice: "Keep scrolling and the page is grouped by process. Biological system performance — CASS basin levels and valve status. Tertiary treatment — differential pressure across the P S F filters, drawn against its point-seven bar reference, so an overdue backwash is obvious. Then flushing, sludge dewatering, dosing, and equipment run status.",
        },
        {
          label: 'Inventory', title: 'Inventory — your chemical stock',
          body: "<strong>Inventory</strong> tracks the chemicals at Adani Mumbai Airport — <strong>urea, chlorine balance, D A P, S M B S, antiscalant, citric acid, poly-cationic, H C L</strong>. Each row shows <strong>stock available</strong>, last consumption, and <strong>actual against expected</strong> usage; a red flag marks anything that's run dry.",
          voice: "Inventory tracks the chemicals at Adani Mumbai Airport — urea, chlorine balance, D A P, S M B S, antiscalant, citric acid, poly-cationic and H C L. Each row shows stock available, last consumption, and actual usage against expected. The red flags mark what's run dry, so you re-order before it bites.",
        },
        {
          label: 'Chemical Logs', title: 'Chemical Logs — every movement, dated',
          body: "Open any item and you're in <strong>Store Details → Chemical Logs</strong>: <strong>current balance</strong>, <strong>this month's usage</strong> and last month's across the top, then every <strong>purchase</strong> and every <strong>consumption</strong> as a dated entry. Filter by <strong>date, remark</strong> or <strong>amount</strong> to reconcile a month.",
          voice: "Open any item and you're in Store Details, Chemical Logs. Current balance, this month's usage and last month's sit across the top. Below, every purchase and every consumption as a dated entry — filter by date, remark or amount when you need to reconcile a month.",
        },
        {
          label: 'Insights', title: 'Insight List — alarms that find you',
          body: "<strong>Insight List</strong> is where the system does the watching: <strong>open alarms</strong>, closed ones and achievements counted at the top. A blower left in manual, R O feed <strong>O R P</strong> too high, a centrifuge that hasn't run — each opens with a plain-language explanation. <strong>Filter</strong> by type, priority or asset, or raise your own with <strong>Create Insight</strong>.",
          voice: "Insight List is where the system does the watching for you. Open alarms, closed ones and achievements are counted right at the top. A blower left in manual mode, R O feed O R P too high, a centrifuge that hasn't run for a day — each one opens with a plain-language explanation of what happened and why it matters.",
        },
        {
          label: 'Data Input', title: 'Data Input — your lab readings',
          body: "Readings that come from the lab rather than a sensor go in here — <strong>P S F outlet fecal coliform, total nitrogen, N H four, silica, sulphate, phosphorous</strong>, <strong>R O outlet C O D</strong>. Each row carries its <strong>valid and safe range</strong>, its <strong>frequency</strong> and last value; or use <strong>Upload File</strong> for many at once.",
          voice: "The readings that come from your lab rather than a sensor go in on Data Input. P S F outlet fecal coliform, total nitrogen, N H four, silica, sulphate, phosphorous, R O outlet C O D. Each row carries its valid and safe range, how often it's due, and the last value recorded. Type it in, or upload a file for many at once.",
        },
        {
          label: 'ScadaView', title: 'ScadaView — your live plant',
          body: "<strong>ScadaView</strong> is the whole plant on one screen, marked <strong>LIVE</strong> — inlet, <strong>coarse and fine screens</strong>, grit channels, the <strong>CASS distribution chamber</strong>, four <strong>S B R blowers</strong> and both <strong>CASS basins</strong> with their R A S pumps, real levels and flows animating on the diagram.",
          voice: "Scada View is your whole plant on one screen, marked live. Inlet, coarse and fine screens, grit channels, the CASS distribution chamber, four S B R blowers, and both CASS basins with their R A S pumps — real levels, flows and D O animating right on the diagram. Group Control and Unit Processes sit along the top.",
        },
        {
          label: 'Scada pages', title: 'Ten section views, one selector',
          body: "That diagram has its own <strong>Select Page</strong> menu, top-right — jump straight to <strong>Primary Treatment, S B R Section, Secondary Treatment, Ultrafiltration, Filtration Section, R O System, Dosing System, Sludge System</strong> or <strong>Pumps</strong>. Pick the section you're troubleshooting instead of hunting across the full plant.",
          voice: "And that diagram has its own Select Page menu, top right. Primary treatment, S B R section, secondary treatment, ultrafiltration, filtration, R O system, dosing, sludge, and pumps. Jump straight to the section you're troubleshooting instead of hunting across the full plant.",
        },
        {
          label: 'Task List', title: 'Task List — work routed by skill',
          body: "<strong>Task</strong> turns all of that into work: put the blowers back in auto, bar screen chamber cleaning, U F feed tank cleaning. Each carries a <strong>priority</strong>, a <strong>skill tag</strong> — Operator, Electrical, Digital Paani Team — and a <strong>completion status</strong>; open one and the <strong>Details</strong> panel spells out the method.",
          voice: "Task turns all of that into work. Put the blowers back in auto, bar screen chamber cleaning, U F feed tank cleaning. Each task carries a priority, a skill tag — operator, electrical, or Digital Paani team — and a completion status. Open one and the details panel spells out the method, step by step.",
        },
        {
          label: 'Wrap', title: "That's your complete setup",
          body: "Six features, one menu: <strong>Dashboard</strong> to glance, <strong>ScadaView</strong> to watch it live, <strong>Insight List</strong> for alarms, <strong>Task</strong> for the fix, <strong>Data Input</strong> for lab readings, <strong>Inventory</strong> for chemicals. The full training inside covers every screen — reach out any time to extend your setup.",
          voice: "And that's your complete setup — six features, all reached from one side menu. Dashboard to glance, Scada View to watch it live, Insight List for the alarms, Task for the fix, Data Input for your lab readings, and Inventory for chemicals. The full training inside covers every screen in your language — and reach out any time you'd like us to extend it.",
        },
      ],
    },
    hi: {
      title: 'आपका <em>अदाणी एयरपोर्ट, मुंबई</em><br>सेटअप।',
      subtitle: 'आपके प्लांट के लिए तैयार हर चीज़ का तेज़ दौरा — उसमें घूमने का तरीका और हर स्क्रीन का काम।',
      chapter: 'व्यक्तिगत डेमो · अदाणी एयरपोर्ट, मुंबई',
      steps: [
        {
          label: 'नेविगेशन', title: 'आपका साइड मेन्यू — सब कुछ यहीं',
          body: "<strong>मेन्यू आइकन</strong> (ऊपर-बाएँ) दबाकर <strong>साइड नेविगेशन</strong> खोलें। सब कुछ यहीं है: <strong>डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, डेटा इनपुट, स्काडा व्यू — अदाणी मुंबई</strong> और <strong>टास्क</strong>। हर एक को हम इसी मेन्यू से खोलेंगे।",
          voice: "स्वागत है — यह है अदाणी एयरपोर्ट, मुंबई के लिए तैयार हर चीज़, और उसमें घूमने का तरीका। ऊपर बाएँ मेन्यू आइकन दबाकर साइड नेविगेशन खोलें। सब कुछ यहीं है: डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, डेटा इनपुट, स्काडा व्यू, और टास्क। हर एक को हम इसी मेन्यू से खोलेंगे।",
        },
        {
          label: 'डैशबोर्ड', title: 'डैशबोर्ड — और उसे चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> खोलें। ऊपर-बाएँ <strong>पेज सिलेक्टर</strong> दृश्य बदलता है — शुरुआत <strong>समरी पेज</strong> से। ऊपर-दाएँ <strong>ग्रैन्युलैरिटी</strong> और <strong>समय सीमा</strong> स्क्रीन का हर विजेट चलाते हैं, और आइकन पंक्ति में <strong>रिफ्रेश, डाउनलोड, सेटिंग्स, विजेट जोड़ें</strong> और <strong>शेयर</strong> हैं।",
          voice: "डैशबोर्ड खोलें। ऊपर बाएँ पेज सिलेक्टर आपके दृश्यों के बीच बदलता है — हम समरी पेज पर हैं। ऊपर दाएँ ग्रैन्युलैरिटी और समय सीमा स्क्रीन का हर विजेट चलाते हैं, एक बार बदलिए और पूरा पेज साथ चलता है। और वह आइकन पंक्ति है रिफ्रेश, डाउनलोड, सेटिंग्स, विजेट जोड़ें, और शेयर।",
        },
        {
          label: 'समरी', title: 'एक नज़र में प्लांट की सेहत',
          body: "<strong>समरी पेज</strong> साइट मैप और ज़रूरी आँकड़ों से खुलता है — <strong>एस टी पी इनलेट फ्लो, कुल यू एफ इनलेट, हाइड्रॉलिक एफिशिएंसी</strong>, हर यू एफ लाइन। आगे स्क्रॉल करें तो <strong>वॉटर क्वालिटी पैरामीटर</strong> गेज अपनी <strong>रेफरेंस रेंज</strong> के साथ: <strong>डी ओ, एम एल एस एस, फ़िल्टर इनलेट पी एच, एफ आर सी, यू एफ टर्बिडिटी, आर ओ कंडक्टिविटी</strong>।",
          voice: "समरी पेज आपके साइट मैप और ज़रूरी आँकड़ों से खुलता है — एस टी पी इनलेट फ्लो, कुल यू एफ इनलेट, हाइड्रॉलिक एफिशिएंसी, और हर यू एफ लाइन। आगे स्क्रॉल करें तो वॉटर क्वालिटी गेज अपनी रेफरेंस रेंज के साथ दिखते हैं। डी ओ, एम एल एस एस, फ़िल्टर इनलेट पी एच, एफ आर सी, यू एफ टर्बिडिटी, आर ओ कंडक्टिविटी — रंग से एक नज़र में पता कि क्या स्पेक के अंदर है।",
        },
        {
          label: 'एनालिटिक्स', title: 'डिटेल्ड एनालिटिक्स — गहरा दृश्य',
          body: "वही <strong>पेज सिलेक्टर</strong>, दूसरा दृश्य: <strong>डिटेल्ड एनालिटिक्स पेज</strong>। <strong>प्लांट समरी</strong> एस टी पी इनलेट, यू एफ इनलेट, <strong>हाइड्रॉलिक एफिशिएंसी</strong> और <strong>प्रति के एल एनर्जी</strong> साथ-साथ रखती है, नीचे <strong>आर ओ-1 और आर ओ-2 फ्लो व रिकवरी</strong> तथा रोज़ की <strong>एनर्जी खपत</strong>।",
          voice: "वही पेज सिलेक्टर, दूसरा दृश्य — डिटेल्ड एनालिटिक्स। प्लांट समरी एस टी पी इनलेट, यू एफ इनलेट, हाइड्रॉलिक एफिशिएंसी और प्रति किलोलीटर एनर्जी साथ-साथ रखती है। उसके नीचे आर ओ एक और आर ओ दो का फ्लो व रिकवरी, और हर मीटर की रोज़ की एनर्जी खपत।",
        },
        {
          label: 'ट्रेंड', title: 'हर सेक्शन का अपना ट्रेंड ब्लॉक',
          body: "और स्क्रॉल करें — पेज प्रोसेस के हिसाब से बँटा है: <strong>बायोलॉजिकल सिस्टम परफ़ॉर्मेंस</strong> (CASS बेसिन लेवल, वाल्व स्थिति), <strong>टर्शियरी ट्रीटमेंट</strong> (<strong>पी एस एफ</strong> फ़िल्टरों पर डिफरेंशियल प्रेशर, 0.7 बार रेफरेंस के सामने), फिर <strong>फ्लशिंग, स्लज डीवॉटरिंग, डोज़िंग</strong> और उपकरण रन स्थिति।",
          voice: "और स्क्रॉल करें — पेज प्रोसेस के हिसाब से बँटा है। बायोलॉजिकल सिस्टम परफ़ॉर्मेंस — CASS बेसिन लेवल और वाल्व स्थिति। टर्शियरी ट्रीटमेंट — पी एस एफ फ़िल्टरों पर डिफरेंशियल प्रेशर, अपने ज़ीरो पॉइंट सेवन बार रेफरेंस के सामने खिंचा, ताकि देर हुआ बैकवॉश तुरंत दिखे। फिर फ्लशिंग, स्लज डीवॉटरिंग, डोज़िंग, और उपकरण रन स्थिति।",
        },
        {
          label: 'इन्वेंटरी', title: 'इन्वेंटरी — केमिकल स्टॉक',
          body: "<strong>इन्वेंटरी</strong> अदाणी मुंबई एयरपोर्ट के केमिकल पर नज़र रखती है — <strong>यूरिया, क्लोरीन बैलेंस, डी ए पी, एस एम बी एस, एंटीस्केलेंट, सिट्रिक एसिड, पॉली-कैटायनिक, एच सी एल</strong>। हर पंक्ति <strong>उपलब्ध स्टॉक</strong>, पिछली खपत और <strong>वास्तविक बनाम अपेक्षित</strong> उपयोग दिखाती है; लाल निशान बताता है क्या खत्म है।",
          voice: "इन्वेंटरी अदाणी मुंबई एयरपोर्ट के केमिकल पर नज़र रखती है — यूरिया, क्लोरीन बैलेंस, डी ए पी, एस एम बी एस, एंटीस्केलेंट, सिट्रिक एसिड, पॉली-कैटायनिक और एच सी एल। हर पंक्ति उपलब्ध स्टॉक, पिछली खपत, और वास्तविक बनाम अपेक्षित उपयोग दिखाती है। लाल निशान बताते हैं क्या खत्म हो चुका है, ताकि दिक्कत से पहले मंगा लें।",
        },
        {
          label: 'केमिकल लॉग', title: 'केमिकल लॉग — हर हलचल, तारीख़ के साथ',
          body: "कोई भी आइटम खोलें और आप <strong>स्टोर डिटेल्स → केमिकल लॉग</strong> में हैं: ऊपर <strong>मौजूदा बैलेंस</strong>, <strong>इस महीने की खपत</strong> और पिछले महीने की; नीचे हर <strong>खरीद</strong> और हर <strong>खपत</strong> तारीख़ के साथ। महीना मिलाने के लिए <strong>तारीख़, रिमार्क</strong> या <strong>राशि</strong> से फ़िल्टर करें।",
          voice: "कोई भी आइटम खोलें और आप स्टोर डिटेल्स, केमिकल लॉग में हैं। ऊपर मौजूदा बैलेंस, इस महीने की खपत और पिछले महीने की। नीचे हर खरीद और हर खपत तारीख़ के साथ — महीना मिलाना हो तो तारीख़, रिमार्क या राशि से फ़िल्टर कर लें।",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — अलार्म जो खुद ढूँढ लें',
          body: "<strong>इनसाइट लिस्ट</strong> में निगरानी सिस्टम करता है: ऊपर <strong>खुले अलार्म</strong>, बंद और उपलब्धियाँ गिनी हुईं। मैनुअल में छूटा ब्लोअर, ज़्यादा आर ओ फ़ीड <strong>ओ आर पी</strong>, न चला सेंट्रीफ्यूज — हर एक सरल भाषा में खुलता है। प्रकार, प्राथमिकता या एसेट से <strong>फ़िल्टर</strong> करें, या <strong>इनसाइट बनाएँ</strong>।",
          voice: "इनसाइट लिस्ट में निगरानी सिस्टम आपके लिए करता है। खुले अलार्म, बंद, और उपलब्धियाँ ठीक ऊपर गिनी हुई हैं। मैनुअल मोड में छूटा ब्लोअर, ज़्यादा आर ओ फ़ीड ओ आर पी, एक दिन से न चला सेंट्रीफ्यूज — हर एक सरल भाषा में बताता है कि क्या हुआ और क्यों मायने रखता है।",
        },
        {
          label: 'डेटा इनपुट', title: 'डेटा इनपुट — लैब रीडिंग',
          body: "जो रीडिंग सेंसर से नहीं, लैब से आती हैं वे यहीं जाती हैं — <strong>पी एस एफ आउटलेट फ़ीकल कोलिफ़ॉर्म, टोटल नाइट्रोजन, एन एच फोर, सिलिका, सल्फेट, फॉस्फोरस</strong>, <strong>आर ओ आउटलेट सी ओ डी</strong>। हर पंक्ति पर <strong>वैलिड व सेफ़ रेंज</strong>, <strong>आवृत्ति</strong> और पिछला मान; कई एक साथ के लिए <strong>फ़ाइल अपलोड</strong>।",
          voice: "जो रीडिंग सेंसर से नहीं बल्कि लैब से आती हैं, वे डेटा इनपुट पर दर्ज होती हैं। पी एस एफ आउटलेट फ़ीकल कोलिफ़ॉर्म, टोटल नाइट्रोजन, एन एच फोर, सिलिका, सल्फेट, फॉस्फोरस, आर ओ आउटलेट सी ओ डी। हर पंक्ति पर वैलिड और सेफ़ रेंज, कितनी बार देनी है, और पिछला दर्ज मान। टाइप कर दें, या कई एक साथ के लिए फ़ाइल अपलोड करें।",
        },
        {
          label: 'स्काडा व्यू', title: 'स्काडा व्यू — आपका लाइव प्लांट',
          body: "<strong>स्काडा व्यू</strong> एक स्क्रीन पर पूरा प्लांट है, <strong>LIVE</strong> चिह्न के साथ — इनलेट, <strong>कोर्स व फाइन स्क्रीन</strong>, ग्रिट चैनल, <strong>CASS डिस्ट्रीब्यूशन चैंबर</strong>, चार <strong>एस बी आर ब्लोअर</strong> और दोनों <strong>CASS बेसिन</strong> अपने आर ए एस पंप के साथ, आरेख पर असली लेवल और फ्लो चलते हुए।",
          voice: "स्काडा व्यू एक स्क्रीन पर आपका पूरा प्लांट है, लाइव चिह्न के साथ। इनलेट, कोर्स और फाइन स्क्रीन, ग्रिट चैनल, CASS डिस्ट्रीब्यूशन चैंबर, चार एस बी आर ब्लोअर, और दोनों CASS बेसिन अपने आर ए एस पंप के साथ — असली लेवल, फ्लो और डी ओ आरेख पर चलते हुए। ऊपर ग्रुप कंट्रोल और यूनिट प्रोसेस हैं।",
        },
        {
          label: 'स्काडा पेज', title: 'दस सेक्शन दृश्य, एक सिलेक्टर',
          body: "उस आरेख का अपना <strong>सिलेक्ट पेज</strong> मेन्यू ऊपर-दाएँ है — सीधे <strong>प्राइमरी ट्रीटमेंट, एस बी आर सेक्शन, सेकेंडरी ट्रीटमेंट, अल्ट्राफ़िल्ट्रेशन, फ़िल्ट्रेशन सेक्शन, आर ओ सिस्टम, डोज़िंग सिस्टम, स्लज सिस्टम</strong> या <strong>पंप्स</strong> पर जाएँ। पूरे प्लांट में ढूँढने के बजाय सीधा सेक्शन खोलें।",
          voice: "और उस आरेख का अपना सिलेक्ट पेज मेन्यू ऊपर दाएँ है। प्राइमरी ट्रीटमेंट, एस बी आर सेक्शन, सेकेंडरी ट्रीटमेंट, अल्ट्राफ़िल्ट्रेशन, फ़िल्ट्रेशन, आर ओ सिस्टम, डोज़िंग, स्लज, और पंप्स। पूरे प्लांट में ढूँढने के बजाय सीधे उसी सेक्शन पर जाएँ जिसकी जाँच करनी है।",
        },
        {
          label: 'टास्क लिस्ट', title: 'टास्क — स्किल के अनुसार काम',
          body: "<strong>टास्क</strong> इन सबको काम में बदलता है: ब्लोअर वापस ऑटो में, बार स्क्रीन चैंबर सफ़ाई, यू एफ फ़ीड टैंक सफ़ाई। हर टास्क पर <strong>प्राथमिकता</strong>, <strong>स्किल टैग</strong> — ऑपरेटर, इलेक्ट्रिकल, डिजिटल पानी टीम — और <strong>पूर्णता स्थिति</strong>; खोलें तो <strong>डिटेल्स</strong> पैनल तरीका बताता है।",
          voice: "टास्क इन सबको काम में बदलता है। ब्लोअर वापस ऑटो में डालना, बार स्क्रीन चैंबर की सफ़ाई, यू एफ फ़ीड टैंक की सफ़ाई। हर टास्क पर प्राथमिकता, एक स्किल टैग — ऑपरेटर, इलेक्ट्रिकल, या डिजिटल पानी टीम — और पूर्णता स्थिति। कोई एक खोलें तो डिटेल्स पैनल कदम-दर-कदम तरीका बताता है।",
        },
        {
          label: 'सारांश', title: 'यही है आपका पूरा सेटअप',
          body: "छह फ़ीचर, एक मेन्यू: नज़र के लिए <strong>डैशबोर्ड</strong>, लाइव देखने के लिए <strong>स्काडा व्यू</strong>, अलार्म के लिए <strong>इनसाइट लिस्ट</strong>, समाधान के लिए <strong>टास्क</strong>, लैब रीडिंग के लिए <strong>डेटा इनपुट</strong>, केमिकल के लिए <strong>इन्वेंटरी</strong>। अंदर की पूरी ट्रेनिंग हर स्क्रीन सिखाती है — सेटअप बढ़ाने के लिए कभी भी संपर्क करें।",
          voice: "और यही है आपका पूरा सेटअप — छह फ़ीचर, सब एक ही साइड मेन्यू से। नज़र के लिए डैशबोर्ड, लाइव देखने के लिए स्काडा व्यू, अलार्म के लिए इनसाइट लिस्ट, समाधान के लिए टास्क, लैब रीडिंग के लिए डेटा इनपुट, और केमिकल के लिए इन्वेंटरी। अंदर की पूरी ट्रेनिंग हर स्क्रीन आपकी भाषा में सिखाती है — और इसे बढ़ाने के लिए कभी भी संपर्क करें।",
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>அதானி விமான நிலையம், மும்பை</em><br>அமைப்பு.',
      subtitle: 'உங்கள் ஆலைக்காக அமைத்த அனைத்தின் விரைவுச் சுற்று — அதில் நகரும் வழியும், ஒவ்வொரு திரையின் வேலையும்.',
      chapter: 'தனிப்பயன் டெமோ · அதானி விமான நிலையம், மும்பை',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'உங்கள் பக்க மெனு — அனைத்தும் இங்கே',
          body: "<strong>மெனு ஐகானைத்</strong> (மேல்-இடது) தட்டி <strong>பக்க வழிசெலுத்தலைத்</strong> திறக்கவும். அனைத்தும் இங்கே: <strong>டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டேட்டா இன்புட், ஸ்காடா வியூ — அதானி மும்பை</strong> மற்றும் <strong>டாஸ்க்</strong>. ஒவ்வொன்றையும் இதே மெனுவிலிருந்து திறப்போம்.",
          voice: "வரவேற்கிறேன் — இதோ அதானி விமான நிலையம், மும்பைக்காக அமைத்த அனைத்தும், அதில் நகரும் வழியும். மேல் இடதில் மெனு ஐகானைத் தட்டி பக்க வழிசெலுத்தலைத் திறக்கவும். அனைத்தும் இங்கே: டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டேட்டா இன்புட், ஸ்காடா வியூ, மற்றும் டாஸ்க். ஒவ்வொன்றையும் இதே மெனுவிலிருந்து திறப்போம்.",
        },
        {
          label: 'டாஷ்போர்டு', title: 'டாஷ்போர்டு — அதை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டைத்</strong> திறக்கவும். மேல்-இடதில் <strong>பக்கத் தேர்வி</strong> காட்சிகளை மாற்றுகிறது — <strong>சம்மரி பக்கத்தில்</strong> தொடங்குகிறோம். மேல்-வலதில் <strong>நுணுக்கம்</strong> மற்றும் <strong>கால வரம்பு</strong> ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன; ஐகான் வரிசையில் <strong>ரிஃப்ரெஷ், டவுன்லோட், அமைப்புகள், விட்ஜெட் சேர், பகிர்</strong>.",
          voice: "டாஷ்போர்டைத் திறக்கவும். மேல் இடதில் பக்கத் தேர்வி உங்கள் காட்சிகளுக்கு இடையே மாறுகிறது — நாம் சம்மரி பக்கத்தில் இருக்கிறோம். மேல் வலதில் நுணுக்கமும் கால வரம்பும் திரையின் ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன, ஒருமுறை மாற்றினால் பக்கம் முழுவதும் பின்தொடரும். அந்த ஐகான் வரிசை ரிஃப்ரெஷ், டவுன்லோட், அமைப்புகள், விட்ஜெட் சேர், மற்றும் பகிர்.",
        },
        {
          label: 'சம்மரி', title: 'ஒரே பார்வையில் ஆலையின் நலம்',
          body: "<strong>சம்மரி பக்கம்</strong> உங்கள் தள வரைபடத்துடனும் முக்கிய எண்களுடனும் திறக்கிறது — <strong>எஸ் டி பி இன்லெட் ஓட்டம், மொத்த யு எஃப் இன்லெட், ஹைட்ராலிக் திறன்</strong>, ஒவ்வொரு யு எஃப் வரிசை. கீழே <strong>நீர் தர அளவுருக்கள்</strong> கேஜ்கள் தங்கள் <strong>குறிப்பு வரம்புடன்</strong>: <strong>டி ஓ, எம் எல் எஸ் எஸ், ஃபில்டர் இன்லெட் பி எச், எஃப் ஆர் சி, யு எஃப் கலங்கல், ஆர் ஓ கடத்துத்திறன்</strong>.",
          voice: "சம்மரி பக்கம் உங்கள் தள வரைபடத்துடனும் முக்கியமான எண்களுடனும் திறக்கிறது — எஸ் டி பி இன்லெட் ஓட்டம், மொத்த யு எஃப் இன்லெட், ஹைட்ராலிக் திறன், ஒவ்வொரு யு எஃப் வரிசை. கீழே ஸ்க்ரோல் செய்தால் நீர் தர கேஜ்கள் தங்கள் குறிப்பு வரம்புடன் தெரியும். டி ஓ, எம் எல் எஸ் எஸ், ஃபில்டர் இன்லெட் பி எச், எஃப் ஆர் சி, யு எஃப் கலங்கல், ஆர் ஓ கடத்துத்திறன் — நிறமே எது வரம்புக்குள் என்று சொல்லும்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'டீடெயில்ட் அனலிட்டிக்ஸ் — ஆழமான காட்சி',
          body: "அதே <strong>பக்கத் தேர்வி</strong>, இரண்டாம் காட்சி: <strong>டீடெயில்ட் அனலிட்டிக்ஸ் பக்கம்</strong>. <strong>பிளாண்ட் சம்மரி</strong> எஸ் டி பி இன்லெட், யு எஃப் இன்லெட், <strong>ஹைட்ராலிக் திறன்</strong>, <strong>ஒரு கே எல்-க்கு ஆற்றல்</strong> ஆகியவற்றை அருகருகே வைக்கிறது; கீழே <strong>ஆர் ஓ-1, ஆர் ஓ-2 ஓட்டம் & மீட்பு</strong> மற்றும் தினசரி <strong>ஆற்றல் நுகர்வு</strong>.",
          voice: "அதே பக்கத் தேர்வி, இரண்டாம் காட்சி — டீடெயில்ட் அனலிட்டிக்ஸ். பிளாண்ட் சம்மரி எஸ் டி பி இன்லெட், யு எஃப் இன்லெட், ஹைட்ராலிக் திறன், ஒரு கிலோலிட்டருக்கான ஆற்றல் ஆகியவற்றை அருகருகே வைக்கிறது. அதற்குக் கீழே ஆர் ஓ ஒன்று, ஆர் ஓ இரண்டின் ஓட்டமும் மீட்பும், ஒவ்வொரு மீட்டரின் தினசரி ஆற்றல் நுகர்வும்.",
        },
        {
          label: 'போக்குகள்', title: 'ஒவ்வொரு பிரிவுக்கும் தனி போக்குத் தொகுதி',
          body: "மேலும் ஸ்க்ரோல் செய்யுங்கள் — பக்கம் செயல்முறை வாரியாகப் பிரிக்கப்பட்டுள்ளது: <strong>உயிரியல் அமைப்புச் செயல்திறன்</strong> (CASS பேசின் நிலைகள், வால்வு நிலை), <strong>மூன்றாம் நிலை சுத்திகரிப்பு</strong> (<strong>பி எஸ் எஃப்</strong> வடிகட்டிகளின் அழுத்த வேறுபாடு, 0.7 பார் குறிப்புக்கு எதிராக), பின் <strong>ஃபிளஷிங், சேறு நீக்கம், டோசிங்</strong> மற்றும் உபகரண இயக்க நிலை.",
          voice: "மேலும் ஸ்க்ரோல் செய்யுங்கள் — பக்கம் செயல்முறை வாரியாகப் பிரிக்கப்பட்டுள்ளது. உயிரியல் அமைப்புச் செயல்திறன் — CASS பேசின் நிலைகளும் வால்வு நிலையும். மூன்றாம் நிலை சுத்திகரிப்பு — பி எஸ் எஃப் வடிகட்டிகளின் அழுத்த வேறுபாடு, அதன் பூஜ்ஜியம் புள்ளி ஏழு பார் குறிப்புக்கு எதிராக வரையப்பட்டு, தாமதமான பேக்வாஷ் உடனே தெரியும். பின் ஃபிளஷிங், சேறு நீக்கம், டோசிங், உபகரண இயக்க நிலை.",
        },
        {
          label: 'இன்வென்டரி', title: 'இன்வென்டரி — வேதிப்பொருள் இருப்பு',
          body: "<strong>இன்வென்டரி</strong> அதானி மும்பை விமான நிலைய வேதிப்பொருட்களைக் கண்காணிக்கிறது — <strong>யூரியா, குளோரின் பேலன்ஸ், டி ஏ பி, எஸ் எம் பி எஸ், ஆன்ட்டிஸ்கேலன்ட், சிட்ரிக் அமிலம், பாலி-கேட்டயானிக், எச் சி எல்</strong>. ஒவ்வொரு வரிசையும் <strong>கையிருப்பு</strong>, கடைசி நுகர்வு, <strong>உண்மை vs எதிர்பார்ப்பு</strong> காட்டுகிறது; சிவப்புக் கொடி தீர்ந்ததைக் குறிக்கும்.",
          voice: "இன்வென்டரி அதானி மும்பை விமான நிலையத்தின் வேதிப்பொருட்களைக் கண்காணிக்கிறது — யூரியா, குளோரின் பேலன்ஸ், டி ஏ பி, எஸ் எம் பி எஸ், ஆன்ட்டிஸ்கேலன்ட், சிட்ரிக் அமிலம், பாலி-கேட்டயானிக், எச் சி எல். ஒவ்வொரு வரிசையும் கையிருப்பு, கடைசி நுகர்வு, உண்மையான பயன்பாட்டை எதிர்பார்ப்புக்கு எதிராகக் காட்டுகிறது. சிவப்புக் கொடிகள் தீர்ந்தவற்றைக் குறிக்கின்றன — சிக்கலுக்கு முன் ஆர்டர் செய்யலாம்.",
        },
        {
          label: 'கெமிக்கல் லாக்', title: 'கெமிக்கல் லாக் — ஒவ்வொரு நகர்வும், தேதியுடன்',
          body: "எந்தப் பொருளையும் திறந்தால் <strong>ஸ்டோர் டீடெய்ல்ஸ் → கெமிக்கல் லாக்</strong>: மேலே <strong>தற்போதைய இருப்பு</strong>, <strong>இந்த மாத பயன்பாடு</strong>, கடந்த மாதம்; கீழே ஒவ்வொரு <strong>கொள்முதலும்</strong> ஒவ்வொரு <strong>நுகர்வும்</strong> தேதியுடன். <strong>தேதி, குறிப்பு</strong> அல்லது <strong>தொகை</strong> மூலம் வடிகட்டி மாதத்தைச் சரிபார்க்கவும்.",
          voice: "எந்தப் பொருளையும் திறந்தால் நீங்கள் ஸ்டோர் டீடெய்ல்ஸ், கெமிக்கல் லாக்-இல் இருப்பீர்கள். மேலே தற்போதைய இருப்பு, இந்த மாதப் பயன்பாடு, கடந்த மாதம். கீழே ஒவ்வொரு கொள்முதலும் ஒவ்வொரு நுகர்வும் தேதியுடன் — ஒரு மாதத்தைச் சரிபார்க்க தேதி, குறிப்பு அல்லது தொகை மூலம் வடிகட்டுங்கள்.",
        },
        {
          label: 'இன்சைட்ஸ்', title: 'இன்சைட் லிஸ்ட் — உங்களைத் தேடும் அலாரம்கள்',
          body: "<strong>இன்சைட் லிஸ்ட்</strong>-இல் கண்காணிப்பை சிஸ்டமே செய்கிறது: மேலே <strong>திறந்த அலாரம்கள்</strong>, மூடியவை, சாதனைகள். மேனுவலில் விடப்பட்ட பிளோயர், அதிக ஆர் ஓ ஃபீட் <strong>ஓ ஆர் பி</strong>, ஓடாத சென்ட்ரிஃபியூஜ் — ஒவ்வொன்றும் எளிய மொழியில் திறக்கும். வகை, முன்னுரிமை, சொத்து மூலம் <strong>வடிகட்டவும்</strong>, அல்லது <strong>இன்சைட் உருவாக்கவும்</strong>.",
          voice: "இன்சைட் லிஸ்ட்-இல் கண்காணிப்பை சிஸ்டமே உங்களுக்காகச் செய்கிறது. திறந்த அலாரம்கள், மூடியவை, சாதனைகள் மேலேயே எண்ணப்பட்டுள்ளன. மேனுவல் மோடில் விடப்பட்ட பிளோயர், அதிகமான ஆர் ஓ ஃபீட் ஓ ஆர் பி, ஒரு நாளாக ஓடாத சென்ட்ரிஃபியூஜ் — ஒவ்வொன்றும் என்ன நடந்தது, ஏன் முக்கியம் என்பதை எளிய மொழியில் விளக்குகிறது.",
        },
        {
          label: 'டேட்டா இன்புட்', title: 'டேட்டா இன்புட் — ஆய்வக அளவீடுகள்',
          body: "சென்சாரிலிருந்து அல்லாமல் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் இங்கே — <strong>பி எஸ் எஃப் அவுட்லெட் ஃபீக்கல் கோலிஃபார்ம், மொத்த நைட்ரஜன், என் எச் ஃபோர், சிலிக்கா, சல்ஃபேட், பாஸ்பரஸ்</strong>, <strong>ஆர் ஓ அவுட்லெட் சி ஓ டி</strong>. ஒவ்வொரு வரிசைக்கும் <strong>செல்லுபடி & பாதுகாப்பு வரம்பு</strong>, <strong>அதிர்வெண்</strong>, கடைசி மதிப்பு; பலவற்றுக்கு <strong>ஃபைல் அப்லோட்</strong>.",
          voice: "சென்சாரிலிருந்து அல்லாமல் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் டேட்டா இன்புட்டில் பதிவாகும். பி எஸ் எஃப் அவுட்லெட் ஃபீக்கல் கோலிஃபார்ம், மொத்த நைட்ரஜன், என் எச் ஃபோர், சிலிக்கா, சல்ஃபேட், பாஸ்பரஸ், ஆர் ஓ அவுட்லெட் சி ஓ டி. ஒவ்வொரு வரிசைக்கும் செல்லுபடியாகும், பாதுகாப்பான வரம்பு, எத்தனை முறை தேவை, கடைசி மதிப்பு. தட்டச்சு செய்யுங்கள், அல்லது பலவற்றுக்கு ஃபைல் அப்லோட் செய்யுங்கள்.",
        },
        {
          label: 'ஸ்காடா வியூ', title: 'ஸ்காடா வியூ — உங்கள் நேரடி ஆலை',
          body: "<strong>ஸ்காடா வியூ</strong> ஒரே திரையில் முழு ஆலை, <strong>LIVE</strong> குறியுடன் — இன்லெட், <strong>கோர்ஸ் & ஃபைன் ஸ்க்ரீன்கள்</strong>, கிரிட் சேனல்கள், <strong>CASS விநியோக அறை</strong>, நான்கு <strong>எஸ் பி ஆர் பிளோயர்கள்</strong>, இரு <strong>CASS பேசின்கள்</strong> அவற்றின் ஆர் ஏ எஸ் பம்புகளுடன் — வரைபடத்தில் உண்மையான நிலைகளும் ஓட்டமும் அசைந்து.",
          voice: "ஸ்காடா வியூ ஒரே திரையில் உங்கள் முழு ஆலை, நேரலைக் குறியுடன். இன்லெட், கோர்ஸ் மற்றும் ஃபைன் ஸ்க்ரீன்கள், கிரிட் சேனல்கள், CASS விநியோக அறை, நான்கு எஸ் பி ஆர் பிளோயர்கள், இரண்டு CASS பேசின்கள் அவற்றின் ஆர் ஏ எஸ் பம்புகளுடன் — உண்மையான நிலை, ஓட்டம், டி ஓ வரைபடத்திலேயே அசைந்து. மேலே குரூப் கண்ட்ரோலும் யூனிட் ப்ராசஸஸும்.",
        },
        {
          label: 'ஸ்காடா பக்கங்கள்', title: 'பத்து பிரிவுக் காட்சிகள், ஒரே தேர்வி',
          body: "அந்த வரைபடத்திற்கே <strong>செலக்ட் பேஜ்</strong> மெனு மேல்-வலதில் உள்ளது — நேரடியாக <strong>ப்ரைமரி ட்ரீட்மென்ட், எஸ் பி ஆர் பிரிவு, செகண்டரி ட்ரீட்மென்ட், அல்ட்ராஃபில்டரேஷன், ஃபில்டரேஷன், ஆர் ஓ சிஸ்டம், டோசிங் சிஸ்டம், ஸ்லட்ஜ் சிஸ்டம்</strong> அல்லது <strong>பம்ப்ஸ்</strong>. முழு ஆலையிலும் தேடாமல் நேரே பிரிவைத் திறக்கவும்.",
          voice: "அந்த வரைபடத்திற்கே செலக்ட் பேஜ் மெனு மேல் வலதில் உள்ளது. ப்ரைமரி ட்ரீட்மென்ட், எஸ் பி ஆர் பிரிவு, செகண்டரி ட்ரீட்மென்ட், அல்ட்ராஃபில்டரேஷன், ஃபில்டரேஷன், ஆர் ஓ சிஸ்டம், டோசிங், ஸ்லட்ஜ், பம்ப்ஸ். முழு ஆலையிலும் தேடாமல் நீங்கள் ஆராயும் பிரிவுக்கு நேரடியாகச் செல்லுங்கள்.",
        },
        {
          label: 'டாஸ்க் லிஸ்ட்', title: 'டாஸ்க் — திறனுக்கேற்ப வேலை',
          body: "<strong>டாஸ்க்</strong> இவை அனைத்தையும் வேலையாக மாற்றுகிறது: பிளோயர்களை ஆட்டோவில், பார் ஸ்க்ரீன் அறை சுத்தம், யு எஃப் ஃபீட் டேங்க் சுத்தம். ஒவ்வொன்றுக்கும் <strong>முன்னுரிமை</strong>, <strong>திறன் குறிச்சொல்</strong> — ஆபரேட்டர், எலெக்ட்ரிக்கல், டிஜிட்டல் பானி டீம் — <strong>நிறைவு நிலை</strong>; திறந்தால் <strong>விவரங்கள்</strong> பலகம் முறையைச் சொல்லும்.",
          voice: "டாஸ்க் இவை அனைத்தையும் வேலையாக மாற்றுகிறது. பிளோயர்களை மீண்டும் ஆட்டோவில் போடுவது, பார் ஸ்க்ரீன் அறை சுத்தம், யு எஃப் ஃபீட் டேங்க் சுத்தம். ஒவ்வொரு பணிக்கும் ஒரு முன்னுரிமை, ஒரு திறன் குறிச்சொல் — ஆபரேட்டர், எலெக்ட்ரிக்கல், அல்லது டிஜிட்டல் பானி டீம் — மற்றும் நிறைவு நிலை. ஒன்றைத் திறந்தால் விவரப் பலகம் முறையை படிப்படியாகச் சொல்லும்.",
        },
        {
          label: 'நிறைவு', title: 'இதுதான் உங்கள் முழு அமைப்பு',
          body: "ஆறு அம்சங்கள், ஒரே மெனு: பார்வைக்கு <strong>டாஷ்போர்டு</strong>, நேரலைக்கு <strong>ஸ்காடா வியூ</strong>, அலாரம்களுக்கு <strong>இன்சைட் லிஸ்ட்</strong>, சரிசெய்ய <strong>டாஸ்க்</strong>, ஆய்வக அளவீட்டுக்கு <strong>டேட்டா இன்புட்</strong>, வேதிப்பொருளுக்கு <strong>இன்வென்டரி</strong>. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் கற்பிக்கிறது — விரிவாக்க எப்போதும் தொடர்பு கொள்ளுங்கள்.",
          voice: "இதுதான் உங்கள் முழு அமைப்பு — ஆறு அம்சங்கள், அனைத்தும் ஒரே பக்க மெனுவிலிருந்து. பார்வைக்கு டாஷ்போர்டு, நேரலைக்கு ஸ்காடா வியூ, அலாரம்களுக்கு இன்சைட் லிஸ்ட், சரிசெய்ய டாஸ்க், ஆய்வக அளவீட்டுக்கு டேட்டா இன்புட், வேதிப்பொருளுக்கு இன்வென்டரி. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் உங்கள் மொழியில் கற்பிக்கிறது — விரிவாக்க விரும்பினால் எப்போதும் தொடர்பு கொள்ளுங்கள்.",
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>अदानी एअरपोर्ट, मुंबई</em><br>सेटअप.',
      subtitle: 'तुमच्या प्लांटसाठी तयार केलेल्या प्रत्येक गोष्टीचा जलद दौरा — त्यात फिरण्याची पद्धत आणि प्रत्येक स्क्रीनचे काम.',
      chapter: 'वैयक्तिक डेमो · अदानी एअरपोर्ट, मुंबई',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'तुमचा साइड मेनू — सर्व काही इथेच',
          body: "<strong>मेनू आयकॉन</strong> (वर-डावीकडे) दाबून <strong>साइड नेव्हिगेशन</strong> उघडा. सर्व काही इथेच आहे: <strong>डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, डेटा इनपुट, स्काडा व्ह्यू — अदानी मुंबई</strong> आणि <strong>टास्क</strong>. प्रत्येक आपण याच मेनूमधून उघडू.",
          voice: "स्वागत आहे — हे आहे अदानी एअरपोर्ट, मुंबईसाठी तयार केलेले सर्व काही, आणि त्यात फिरण्याची पद्धत. वर डावीकडे मेनू आयकॉन दाबून साइड नेव्हिगेशन उघडा. सर्व काही इथेच आहे: डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, डेटा इनपुट, स्काडा व्ह्यू, आणि टास्क. प्रत्येक आपण याच मेनूमधून उघडू.",
        },
        {
          label: 'डॅशबोर्ड', title: 'डॅशबोर्ड — आणि तो चालवणारे कंट्रोल',
          body: "<strong>डॅशबोर्ड</strong> उघडा. वर-डावीकडे <strong>पेज सिलेक्टर</strong> दृश्ये बदलतो — सुरुवात <strong>समरी पेज</strong>ने. वर-उजवीकडे <strong>ग्रॅन्युलॅरिटी</strong> आणि <strong>वेळ श्रेणी</strong> स्क्रीनवरचे प्रत्येक विजेट चालवतात, आणि आयकॉन रांगेत <strong>रिफ्रेश, डाउनलोड, सेटिंग्ज, विजेट जोडा</strong> व <strong>शेअर</strong> आहेत.",
          voice: "डॅशबोर्ड उघडा. वर डावीकडे पेज सिलेक्टर तुमच्या दृश्यांमध्ये बदलतो — आपण समरी पेजवर आहोत. वर उजवीकडे ग्रॅन्युलॅरिटी आणि वेळ श्रेणी स्क्रीनवरचे प्रत्येक विजेट चालवतात, एकदा बदला आणि संपूर्ण पेज सोबत बदलते. आणि ती आयकॉन रांग म्हणजे रिफ्रेश, डाउनलोड, सेटिंग्ज, विजेट जोडा, आणि शेअर.",
        },
        {
          label: 'समरी', title: 'एका नजरेत प्लांटची तब्येत',
          body: "<strong>समरी पेज</strong> तुमचा साइट मॅप आणि महत्त्वाचे आकडे दाखवून सुरू होते — <strong>एस टी पी इनलेट फ्लो, एकूण यू एफ इनलेट, हायड्रॉलिक एफिशियन्सी</strong>, प्रत्येक यू एफ लाइन. खाली <strong>वॉटर क्वालिटी पॅरामीटर</strong> गेज त्यांच्या <strong>रेफरन्स रेंज</strong>सह: <strong>डी ओ, एम एल एस एस, फिल्टर इनलेट पी एच, एफ आर सी, यू एफ टर्बिडिटी, आर ओ कंडक्टिव्हिटी</strong>.",
          voice: "समरी पेज तुमचा साइट मॅप आणि महत्त्वाचे आकडे दाखवून सुरू होते — एस टी पी इनलेट फ्लो, एकूण यू एफ इनलेट, हायड्रॉलिक एफिशियन्सी, आणि प्रत्येक यू एफ लाइन. खाली स्क्रोल केल्यावर वॉटर क्वालिटी गेज त्यांच्या रेफरन्स रेंजसह दिसतात. डी ओ, एम एल एस एस, फिल्टर इनलेट पी एच, एफ आर सी, यू एफ टर्बिडिटी, आर ओ कंडक्टिव्हिटी — रंगावरूनच कळते काय स्पेकमध्ये आहे.",
        },
        {
          label: 'अ‍ॅनालिटिक्स', title: 'डिटेल्ड अ‍ॅनालिटिक्स — सखोल दृश्य',
          body: "तोच <strong>पेज सिलेक्टर</strong>, दुसरे दृश्य: <strong>डिटेल्ड अ‍ॅनालिटिक्स पेज</strong>. <strong>प्लांट समरी</strong> एस टी पी इनलेट, यू एफ इनलेट, <strong>हायड्रॉलिक एफिशियन्सी</strong> आणि <strong>प्रति के एल ऊर्जा</strong> शेजारी-शेजारी ठेवते; खाली <strong>आर ओ-1 व आर ओ-2 फ्लो आणि रिकव्हरी</strong> आणि रोजचा <strong>ऊर्जा वापर</strong>.",
          voice: "तोच पेज सिलेक्टर, दुसरे दृश्य — डिटेल्ड अ‍ॅनालिटिक्स. प्लांट समरी एस टी पी इनलेट, यू एफ इनलेट, हायड्रॉलिक एफिशियन्सी आणि प्रति किलोलिटर ऊर्जा शेजारी-शेजारी ठेवते. त्याखाली आर ओ एक आणि आर ओ दोनचा फ्लो व रिकव्हरी, आणि प्रत्येक मीटरचा रोजचा ऊर्जा वापर.",
        },
        {
          label: 'ट्रेंड', title: 'प्रत्येक विभागाचा स्वतःचा ट्रेंड ब्लॉक',
          body: "आणखी स्क्रोल करा — पेज प्रक्रियेनुसार गटांत आहे: <strong>बायोलॉजिकल सिस्टम परफॉर्मन्स</strong> (CASS बेसिन लेव्हल, व्हॉल्व्ह स्थिती), <strong>टर्शरी ट्रीटमेंट</strong> (<strong>पी एस एफ</strong> फिल्टरवरील डिफरेन्शियल प्रेशर, 0.7 बार रेफरन्ससमोर), मग <strong>फ्लशिंग, स्लज डीवॉटरिंग, डोसिंग</strong> आणि उपकरण रन स्थिती.",
          voice: "आणखी स्क्रोल करा — पेज प्रक्रियेनुसार गटांत आहे. बायोलॉजिकल सिस्टम परफॉर्मन्स — CASS बेसिन लेव्हल आणि व्हॉल्व्ह स्थिती. टर्शरी ट्रीटमेंट — पी एस एफ फिल्टरवरील डिफरेन्शियल प्रेशर, त्याच्या शून्य पूर्णांक सात बार रेफरन्ससमोर काढलेले, त्यामुळे उशिरा झालेला बॅकवॉश लगेच दिसतो. मग फ्लशिंग, स्लज डीवॉटरिंग, डोसिंग, आणि उपकरण रन स्थिती.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'इन्व्हेंटरी — केमिकल स्टॉक',
          body: "<strong>इन्व्हेंटरी</strong> अदानी मुंबई एअरपोर्टच्या केमिकलवर लक्ष ठेवते — <strong>युरिया, क्लोरीन बॅलन्स, डी ए पी, एस एम बी एस, अँटिस्केलंट, सिट्रिक अ‍ॅसिड, पॉली-कॅटायनिक, एच सी एल</strong>. प्रत्येक ओळ <strong>उपलब्ध स्टॉक</strong>, शेवटचा वापर आणि <strong>वास्तविक विरुद्ध अपेक्षित</strong> वापर दाखवते; लाल खूण संपलेले दर्शवते.",
          voice: "इन्व्हेंटरी अदानी मुंबई एअरपोर्टच्या केमिकलवर लक्ष ठेवते — युरिया, क्लोरीन बॅलन्स, डी ए पी, एस एम बी एस, अँटिस्केलंट, सिट्रिक अ‍ॅसिड, पॉली-कॅटायनिक आणि एच सी एल. प्रत्येक ओळ उपलब्ध स्टॉक, शेवटचा वापर, आणि वास्तविक वापर अपेक्षितसमोर दाखवते. लाल खुणा संपलेले दर्शवतात, म्हणजे अडचण येण्याआधीच मागवता येते.",
        },
        {
          label: 'केमिकल लॉग', title: 'केमिकल लॉग — प्रत्येक हालचाल, तारखेसह',
          body: "कोणतीही वस्तू उघडा आणि तुम्ही <strong>स्टोअर डिटेल्स → केमिकल लॉग</strong>मध्ये: वर <strong>सध्याचा बॅलन्स</strong>, <strong>या महिन्याचा वापर</strong> व गेल्या महिन्याचा; खाली प्रत्येक <strong>खरेदी</strong> आणि प्रत्येक <strong>वापर</strong> तारखेसह. महिना जुळवण्यासाठी <strong>तारीख, रिमार्क</strong> किंवा <strong>रक्कम</strong>ने फिल्टर करा.",
          voice: "कोणतीही वस्तू उघडा आणि तुम्ही स्टोअर डिटेल्स, केमिकल लॉगमध्ये असता. वर सध्याचा बॅलन्स, या महिन्याचा वापर आणि गेल्या महिन्याचा. खाली प्रत्येक खरेदी आणि प्रत्येक वापर तारखेसह — महिना जुळवायचा असेल तर तारीख, रिमार्क किंवा रक्कमेने फिल्टर करा.",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — तुम्हाला शोधणारे अलार्म',
          body: "<strong>इनसाइट लिस्ट</strong>मध्ये देखरेख सिस्टम करते: वर <strong>खुले अलार्म</strong>, बंद आणि यश मोजलेले. मॅन्युअलमध्ये राहिलेला ब्लोअर, जास्त आर ओ फीड <strong>ओ आर पी</strong>, न चाललेले सेंट्रिफ्यूज — प्रत्येक सोप्या भाषेत उघडते. प्रकार, प्राधान्य किंवा अ‍ॅसेटने <strong>फिल्टर</strong> करा, किंवा <strong>इनसाइट तयार करा</strong>.",
          voice: "इनसाइट लिस्टमध्ये देखरेख सिस्टम तुमच्यासाठी करते. खुले अलार्म, बंद, आणि यश अगदी वर मोजलेले आहेत. मॅन्युअल मोडमध्ये राहिलेला ब्लोअर, जास्त आर ओ फीड ओ आर पी, एक दिवसापासून न चाललेले सेंट्रिफ्यूज — प्रत्येक सोप्या भाषेत सांगते काय झाले आणि का महत्त्वाचे आहे.",
        },
        {
          label: 'डेटा इनपुट', title: 'डेटा इनपुट — लॅब रीडिंग',
          body: "जी रीडिंग सेन्सरकडून नव्हे तर लॅबकडून येतात ती इथे — <strong>पी एस एफ आउटलेट फीकल कोलिफॉर्म, टोटल नायट्रोजन, एन एच फोर, सिलिका, सल्फेट, फॉस्फोरस</strong>, <strong>आर ओ आउटलेट सी ओ डी</strong>. प्रत्येक ओळीवर <strong>व्हॅलिड व सेफ रेंज</strong>, <strong>वारंवारता</strong> व शेवटचे मूल्य; अनेकांसाठी <strong>फाइल अपलोड</strong>.",
          voice: "जी रीडिंग सेन्सरकडून नव्हे तर लॅबकडून येतात ती डेटा इनपुटवर नोंदवली जातात. पी एस एफ आउटलेट फीकल कोलिफॉर्म, टोटल नायट्रोजन, एन एच फोर, सिलिका, सल्फेट, फॉस्फोरस, आर ओ आउटलेट सी ओ डी. प्रत्येक ओळीवर व्हॅलिड आणि सेफ रेंज, किती वेळा द्यायची, आणि शेवटचे नोंदवलेले मूल्य. टाइप करा, किंवा अनेकांसाठी फाइल अपलोड करा.",
        },
        {
          label: 'स्काडा व्ह्यू', title: 'स्काडा व्ह्यू — तुमचा लाइव्ह प्लांट',
          body: "<strong>स्काडा व्ह्यू</strong> एका स्क्रीनवर संपूर्ण प्लांट, <strong>LIVE</strong> खुणेसह — इनलेट, <strong>कोर्स व फाइन स्क्रीन</strong>, ग्रिट चॅनेल, <strong>CASS डिस्ट्रिब्यूशन चेंबर</strong>, चार <strong>एस बी आर ब्लोअर</strong> आणि दोन्ही <strong>CASS बेसिन</strong> त्यांच्या आर ए एस पंपांसह, आकृतीवर खरे लेव्हल व फ्लो हलताना.",
          voice: "स्काडा व्ह्यू एका स्क्रीनवर तुमचा संपूर्ण प्लांट आहे, लाइव्ह खुणेसह. इनलेट, कोर्स आणि फाइन स्क्रीन, ग्रिट चॅनेल, CASS डिस्ट्रिब्यूशन चेंबर, चार एस बी आर ब्लोअर, आणि दोन्ही CASS बेसिन त्यांच्या आर ए एस पंपांसह — खरे लेव्हल, फ्लो आणि डी ओ आकृतीवरच हलताना. वर ग्रुप कंट्रोल आणि युनिट प्रोसेसेस आहेत.",
        },
        {
          label: 'स्काडा पेज', title: 'दहा विभाग दृश्ये, एक सिलेक्टर',
          body: "त्या आकृतीचा स्वतःचा <strong>सिलेक्ट पेज</strong> मेनू वर-उजवीकडे आहे — थेट <strong>प्रायमरी ट्रीटमेंट, एस बी आर सेक्शन, सेकंडरी ट्रीटमेंट, अल्ट्राफिल्ट्रेशन, फिल्ट्रेशन सेक्शन, आर ओ सिस्टम, डोसिंग सिस्टम, स्लज सिस्टम</strong> किंवा <strong>पंप्स</strong>. संपूर्ण प्लांटमध्ये शोधण्याऐवजी थेट विभाग उघडा.",
          voice: "आणि त्या आकृतीचा स्वतःचा सिलेक्ट पेज मेनू वर उजवीकडे आहे. प्रायमरी ट्रीटमेंट, एस बी आर सेक्शन, सेकंडरी ट्रीटमेंट, अल्ट्राफिल्ट्रेशन, फिल्ट्रेशन, आर ओ सिस्टम, डोसिंग, स्लज, आणि पंप्स. संपूर्ण प्लांटमध्ये शोधण्याऐवजी थेट ज्या विभागाची तपासणी करायची त्यावर जा.",
        },
        {
          label: 'टास्क लिस्ट', title: 'टास्क — स्किलनुसार काम',
          body: "<strong>टास्क</strong> या सर्वांचे कामात रूपांतर करते: ब्लोअर पुन्हा ऑटोमध्ये, बार स्क्रीन चेंबर साफसफाई, यू एफ फीड टँक साफसफाई. प्रत्येकावर <strong>प्राधान्य</strong>, <strong>स्किल टॅग</strong> — ऑपरेटर, इलेक्ट्रिकल, डिजिटल पानी टीम — आणि <strong>पूर्णता स्थिती</strong>; उघडल्यावर <strong>डिटेल्स</strong> पॅनेल पद्धत सांगते.",
          voice: "टास्क या सर्वांचे कामात रूपांतर करते. ब्लोअर पुन्हा ऑटोमध्ये टाकणे, बार स्क्रीन चेंबरची साफसफाई, यू एफ फीड टँकची साफसफाई. प्रत्येक टास्कवर प्राधान्य, एक स्किल टॅग — ऑपरेटर, इलेक्ट्रिकल, किंवा डिजिटल पानी टीम — आणि पूर्णता स्थिती. एखादे उघडल्यावर डिटेल्स पॅनेल पद्धत टप्प्याटप्प्याने सांगते.",
        },
        {
          label: 'सारांश', title: 'हाच तुमचा संपूर्ण सेटअप',
          body: "सहा फीचर, एक मेनू: नजरेसाठी <strong>डॅशबोर्ड</strong>, लाइव्ह पाहण्यासाठी <strong>स्काडा व्ह्यू</strong>, अलार्मसाठी <strong>इनसाइट लिस्ट</strong>, उपायासाठी <strong>टास्क</strong>, लॅब रीडिंगसाठी <strong>डेटा इनपुट</strong>, केमिकलसाठी <strong>इन्व्हेंटरी</strong>. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन शिकवते — सेटअप वाढवण्यासाठी कधीही संपर्क करा.",
          voice: "आणि हाच तुमचा संपूर्ण सेटअप — सहा फीचर, सर्व एकाच साइड मेनूमधून. नजरेसाठी डॅशबोर्ड, लाइव्ह पाहण्यासाठी स्काडा व्ह्यू, अलार्मसाठी इनसाइट लिस्ट, उपायासाठी टास्क, लॅब रीडिंगसाठी डेटा इनपुट, आणि केमिकलसाठी इन्व्हेंटरी. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन तुमच्या भाषेत शिकवते — आणि सेटअप वाढवायचा असल्यास कधीही संपर्क करा.",
        },
      ],
    },
  },
};

export default lesson;
