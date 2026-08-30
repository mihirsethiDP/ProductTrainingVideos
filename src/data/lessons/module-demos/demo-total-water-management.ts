import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-total-water-management`;

/**
 * Demo — Total Water Management, large development.   (hidden module-demos)
 * Built from one screen recording (3:54, Satyadev Singh / demo account): the
 * unified "Total Water Management - Large Development" dashboard across
 * Plaksha, Model Economic Town, India Habitat Center, Adani Ahmedabad Airport
 * and the Filter house / ZLD / CETP assets, then Communications, Insight List,
 * ScadaView + Group Control, Task List, Inventory, Logbook (OCR) Data Input and
 * the profile language switch that flips the whole product into Hindi.
 * Style: `overview` — one step per page/feature area, real 1280px frames.
 * Notes from the uploader (AI instruction layer):
 *   1. "Similar content could be used" → every screen in the recording is still
 *      covered, in the order the product flows.
 *   2. "Remove all pauses and gaps … no more than 2.5 minutes" → the recording's
 *      long dwells (25s on one insight, 20s on the task detail) are dropped;
 *      each step carries ONE short two-sentence voice, ~350 words total ≈ 2:15.
 *   3. "Smooth rendition from one screen to another" → every step opens on the
 *      control that leads to the next screen and the cursor tracks the sentence,
 *      so the tour reads as one continuous move rather than fifteen stops.
 * The baked macOS pointer is erased from every frame (delogo; `comms` needed a
 * clean-tab composite from t=54 so the SMS pill stayed intact).
 */
const lesson: Lesson = {
  id: 'demo-total-water-management',
  moduleId: 'module-demos',
  lessonNumber: 7,
  estimatedMinutes: 3,
  expiresAt: '2026-09-29', // 30 days after the job's created_at (2026-08-30) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    dashboard: `${BASE}/dashboard.jpg`,
    flow: `${BASE}/flow.jpg`,
    efficiency: `${BASE}/efficiency.jpg`,
    tanks: `${BASE}/tanks.jpg`,
    aeration: `${BASE}/aeration.jpg`,
    comms: `${BASE}/comms.jpg`,
    insights: `${BASE}/insights.jpg`,
    scada: `${BASE}/scada.jpg`,
    control: `${BASE}/control.jpg`,
    tasks: `${BASE}/tasks.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    ocr: `${BASE}/ocr.jpg`,
    profile: `${BASE}/profile.jpg`,
    hindi: `${BASE}/hindi.jpg`,
  },
  layouts: [
    // S1 — the side navigation, drawer open, Visualisation expanded
    {
      mode: 'detail', screenshot: 'nav', caption: 'One menu, every feature',
      spotlight: { top: '8%', left: '0%', width: '17%', height: '92%' },
      cursor: [
        { at: 0, x: 18.4, y: 4.4, click: true },
        { at: 0.3, x: 4.5, y: 13.3 },
        { at: 0.6, x: 3.6, y: 39.5 },
        { at: 0.9, x: 5, y: 78.7, click: true },
      ],
    },
    // S2 — the Dashboard and the controls that drive every widget on it
    {
      mode: 'detail', screenshot: 'dashboard', caption: 'The controls that drive the page',
      spotlight: { top: '20%', left: '2.6%', width: '94.8%', height: '10.5%' },
      cursor: [
        { at: 0, x: 16.6, y: 25.2, click: true },
        { at: 0.35, x: 53.1, y: 25.2 },
        { at: 0.65, x: 66.8, y: 25.2 },
        { at: 0.9, x: 28.7, y: 65 },
      ],
    },
    // S3 — Plant Flow (sankey) + Compliance Status
    {
      mode: 'detail', screenshot: 'flow', caption: 'Plant Flow & Compliance Status',
      spotlight: { top: '14.4%', left: '2.7%', width: '94.8%', height: '61.9%' },
      cursor: [
        { at: 0, x: 6.5, y: 45.3 },
        { at: 0.35, x: 22.1, y: 35.3 },
        { at: 0.65, x: 61.3, y: 26.4 },
        { at: 0.9, x: 81.8, y: 51.9 },
      ],
    },
    // S4 — Plant Efficiency gauges + Energy Consumption tiles
    {
      mode: 'detail', screenshot: 'efficiency', caption: 'Plant Efficiency & Energy',
      spotlight: { top: '59.1%', left: '2.7%', width: '94.8%', height: '29.7%' },
      cursor: [
        { at: 0, x: 10.1, y: 64.5 },
        { at: 0.35, x: 26.1, y: 64.5 },
        { at: 0.65, x: 58, y: 64.5 },
        { at: 0.9, x: 26.1, y: 90.5 },
      ],
    },
    // S5 — Water Quantity & Availability, per site
    {
      mode: 'detail', screenshot: 'tanks', caption: 'Live levels, site by site',
      spotlight: { top: '13.3%', left: '2.7%', width: '94.8%', height: '63.3%' },
      cursor: [
        { at: 0, x: 13.5, y: 16.1 },
        { at: 0.35, x: 41.2, y: 49.7 },
        { at: 0.65, x: 55.7, y: 34.4 },
        { at: 0.9, x: 87.3, y: 42.7 },
      ],
    },
    // S6 — Aeration Health: D.O. against its reference band
    {
      mode: 'detail', screenshot: 'aeration', caption: 'Aeration Health',
      spotlight: { top: '29.4%', left: '2.7%', width: '62.8%', height: '62%' },
      cursor: [
        { at: 0, x: 10.8, y: 31.7 },
        { at: 0.4, x: 17.6, y: 55 },
        { at: 0.75, x: 43.9, y: 31.7 },
        { at: 0.95, x: 55.3, y: 55 },
      ],
    },
    // S7 — Communications: every alert Doctor Paani has sent
    {
      mode: 'detail', screenshot: 'comms', caption: 'Communications',
      spotlight: { top: '7.2%', left: '46%', width: '42.3%', height: '77.7%' },
      cursor: [
        { at: 0, x: 87, y: 4.4, click: true },
        { at: 0.35, x: 58.8, y: 18 },
        { at: 0.6, x: 66.3, y: 18 },
        { at: 0.9, x: 56.3, y: 40.6 },
      ],
    },
    // S8 — Insight List: the counters and the rows behind them
    {
      mode: 'detail', screenshot: 'insights', caption: 'Insight List',
      spotlight: { top: '39.1%', left: '2.7%', width: '94.8%', height: '8.1%' },
      cursor: [
        { at: 0, x: 30.4, y: 43.1 },
        { at: 0.4, x: 62, y: 43.1 },
        { at: 0.7, x: 22.3, y: 59.4 },
        { at: 0.95, x: 60.8, y: 62.3 },
      ],
    },
    // S9 — ScadaView: the site running live
    {
      mode: 'detail', screenshot: 'scada', caption: 'ScadaView — live',
      spotlight: null,
      cursor: [
        { at: 0, x: 6.8, y: 12.7 },
        { at: 0.35, x: 10.9, y: 18.1, click: true },
        { at: 0.7, x: 25.9, y: 68.1 },
        { at: 0.95, x: 71.1, y: 61.7 },
      ],
    },
    // S10 — Group Control: Auto / Remote and the equipment underneath
    {
      mode: 'detail', screenshot: 'control', caption: 'Group Control',
      spotlight: { top: '21.9%', left: '67.7%', width: '29.7%', height: '75%' },
      cursor: [
        { at: 0, x: 69.5, y: 18.1, click: true },
        { at: 0.4, x: 76.3, y: 44.8 },
        { at: 0.7, x: 88.6, y: 44.8 },
        { at: 0.95, x: 90.8, y: 90.2 },
      ],
    },
    // S11 — Task List: the work, and what sits behind one row
    {
      mode: 'detail', screenshot: 'tasks', caption: 'Task List',
      spotlight: null,
      cursor: [
        { at: 0, x: 8.8, y: 33.8 },
        { at: 0.35, x: 23.9, y: 47 },
        { at: 0.65, x: 47.2, y: 47 },
        { at: 0.9, x: 76.3, y: 77.3 },
      ],
    },
    // S12 — Inventory: stock and consumption, store by store
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Inventory',
      spotlight: null,
      cursor: [
        { at: 0, x: 7.4, y: 40.6 },
        { at: 0.35, x: 34.5, y: 40.6 },
        { at: 0.65, x: 52.2, y: 61.1 },
        { at: 0.9, x: 82.8, y: 61.1 },
      ],
    },
    // S13 — Profile: the language switch (before the Hindi pages that follow)
    {
      mode: 'detail', screenshot: 'profile', caption: 'Your profile, your language',
      spotlight: { top: '67.2%', left: '64.2%', width: '19.1%', height: '19.1%' },
      cursor: [
        { at: 0, x: 73.8, y: 28.6 },
        { at: 0.4, x: 73.8, y: 51.4, click: true },
        { at: 0.75, x: 66.6, y: 83.3, click: true },
        { at: 0.95, x: 73.8, y: 90.3, click: true },
      ],
    },
    // S14 — Logbook (OCR) Data Input — already rendering in Hindi
    {
      mode: 'detail', screenshot: 'ocr', caption: 'Logbook Data Input',
      spotlight: { top: '20%', left: '2.7%', width: '95%', height: '41.3%' },
      cursor: [
        { at: 0, x: 26.2, y: 23.4, click: true },
        { at: 0.4, x: 74, y: 23.4 },
        { at: 0.75, x: 50.1, y: 40 },
        { at: 0.95, x: 50.1, y: 46.7, click: true },
      ],
    },
    // S15 — wrap: the whole product in Hindi
    {
      mode: 'detail', screenshot: 'hindi', caption: 'The whole product, in your language',
      spotlight: { top: '8.8%', left: '0.6%', width: '16.4%', height: '91%' },
      cursor: [
        { at: 0, x: 5.5, y: 13.1 },
        { at: 0.4, x: 4.4, y: 26.3 },
        { at: 0.75, x: 3.3, y: 46 },
        { at: 0.95, x: 60, y: 27 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Total Water Management,<br><em>every site on one screen.</em>',
      subtitle:
        'A two-minute tour of the unified platform — the dashboard, the live plant, the work it creates, and the language it speaks.',
      chapter: 'Demo · Total Water Management',
      steps: [
        {
          label: 'Navigate', title: 'One menu, every feature',
          body: "The <strong>menu icon</strong> opens your side navigation, and everything lives there: <strong>Dashboard, Logbook Data Input, Inventory, Insight List</strong> and <strong>Tickets</strong> up top, then a section per asset — <strong>STP, ZLD, Filter house, CETP</strong> — with <strong>Task</strong> and <strong>Visualisation</strong> below. We'll open each one from here.",
          voice: "Everything starts from this menu: Dashboard, Logbook Data Input, Inventory, Insight List and Tickets, then a section per asset, Task and Visualisation.",
        },
        {
          label: 'Dashboard', title: 'The controls that drive the page',
          body: "<strong>Dashboard</strong> opens on <strong>Total Water Management — Large Development</strong>. The <strong>Page</strong> selector switches views; <strong>Granularity</strong> and the <strong>time range</strong> re-draw every widget below them. <strong>Map & Ticket View</strong> then scores each site on the map and lists open tickets beside it, tagged by plant.",
          voice: "Dashboard opens on Total Water Management. The page selector picks the view; granularity and the time range drive every widget below.",
        },
        {
          label: 'Flow', title: 'Where every drop goes',
          body: "<strong>Plant Flow</strong> traces the whole development in one diagram — <strong>ETP inlet 614.20</strong> into <strong>ETP outlet</strong> and <strong>UF</strong>, then <strong>RO feed 300.20</strong> splitting into <strong>permeate 156.00</strong> and <strong>reject 137.40</strong>, with <strong>sludge rejection</strong> and <strong>water loss</strong> branching off. <strong>Compliance Status</strong> scores each site 1 or 0.",
          voice: "Plant Flow traces every drop — E T P inlet, U F, R O feed, permeate and reject — and compliance is scored per site.",
        },
        {
          label: 'Efficiency', title: 'Efficiency and the energy behind it',
          body: "<strong>Plant Efficiency</strong> puts the sites side by side on identical gauges — <strong>STP efficiency, filter efficiency, RO recovery</strong>, then <strong>India Habitat Center, Adani Ahmedabad Airport</strong> and <strong>Model Economic Town</strong>, each with its day-on-day change. <strong>Energy Consumption</strong> carries the STP, WTP, ZLD and CETP draw underneath.",
          voice: "Plant Efficiency puts each site side by side — S T P, filters, R O recovery — and Energy Consumption tracks the power behind them.",
        },
        {
          label: 'Levels', title: 'Live levels, site by site',
          body: "<strong>Water Quantity & Availability</strong> gives every site its own live panel — <strong>UGT, OHT, intake sumps</strong> and <strong>RWR tanks</strong> for Model Economic Town; <strong>equalization, MBR, soft water</strong> and both <strong>sludge holding tanks</strong> for Adani Ahmedabad. Anything off its range is coloured, so a filling tank is obvious.",
          voice: "Water Quantity shows live tank levels per site, with anything out of range in colour.",
        },
        {
          label: 'Aeration', title: 'Aeration health, against the band',
          body: "<strong>Aeration Health</strong> plots dissolved oxygen for each aeration tank against its <strong>2–4 ppm reference band</strong> — green inside, red outside. A night in the red is visible at a glance, and <strong>Energy per KL</strong> sits directly below so you can price what the blowers cost you.",
          voice: "Aeration Health plots dissolved oxygen against its two to four p p m band, so a drift out of the green shows up instantly.",
        },
        {
          label: 'Alerts', title: 'Every alert already sent',
          body: "The <strong>message icon</strong> in the top bar opens <strong>Communications</strong> — every alert <strong>Doctor Paani</strong> has pushed out, split across <strong>All, WhatsApp, SMS, Call</strong> and <strong>Email</strong>. It's the audit trail of who was told what, so an alarm never dies quietly in one person's inbox.",
          voice: "The message icon collects every alert Doctor Paani has sent — WhatsApp, S M S, call and email — so nothing is lost in one person's inbox.",
        },
        {
          label: 'Insights', title: 'Insight List — the system watching',
          body: "<strong>Insight List</strong> counts <strong>all insights, open alarms, closed alarms</strong> and <strong>achievements</strong> across the estate. Each row names its <strong>asset</strong>, its <strong>priority</strong> and its type, and opens into a plain-language description with how often it has recurred. Filter by workspace, asset, type, priority or date.",
          voice: "Insight List does the watching: open alarms, closed ones, achievements. Each row names the asset and explains itself in plain language.",
        },
        {
          label: 'ScadaView', title: 'The plant, running live',
          body: "Under <strong>Visualisation</strong> there's a <strong>ScadaView</strong> per site — Plaksha, Model Economic Town, Hindalco Mahan, India Habitat, Adani. Open one and the plant runs <strong>LIVE</strong> on the diagram: screens, <strong>OGT</strong>, EQT tank, rotary drum, anoxic and aeration tanks, with real levels, <strong>DO</strong>, pressures and flow rates.",
          voice: "Visualisation holds a Scada View per site. Adani's S T P runs live — blowers, tanks, D O and flow animating on the diagram.",
        },
        {
          label: 'Control', title: 'Group Control — auto or remote',
          body: "<strong>Group Control</strong> opens the plant's control groups. Each group carries a <strong>mode</strong> — in <strong>Auto</strong> the automation drives it and manual control is disabled; switch to <strong>Remote</strong> and the <strong>12 equipments</strong> underneath become individually controllable: permeate suction, backwash discharge, membrane blowers, each with live status.",
          voice: "Group Control switches a group between Auto and Remote, then lets you run its twelve equipments individually — permeate suction, backwash, blowers.",
        },
        {
          label: 'Tasks', title: 'Task List — findings become work',
          body: "<strong>Task List</strong> is where all of it becomes a job. Filter by <strong>plant, user, skill</strong> or <strong>completion status</strong>; each row carries a <strong>priority</strong>, an <strong>assignee</strong> and a <strong>skill tag</strong>. Open one and the panel holds the method, deadline and completion times, task history, and the photo the operator uploaded.",
          voice: "Task List turns findings into work — plant, priority, assignee, skill and status — and each one opens with the method, history and photos.",
        },
        {
          label: 'Inventory', title: 'Inventory — stock, store by store',
          body: "<strong>Inventory</strong> splits by <strong>store</strong> and by <strong>asset</strong> — Plaksha, STP, Adani Ahmedabad, Hindalco Mahaan, India Habitat, Adani Mumbai Airport. Each chemical shows <strong>stock available</strong>, its <strong>last consumption</strong> and, side by side, <strong>actual against expected</strong> usage, so overdosing shows up as a number rather than a hunch.",
          voice: "Inventory tracks chemicals store by store: stock available, last consumption, and actual usage against expected, so overdosing shows up as a number.",
        },
        {
          label: 'Language', title: 'Your profile, your language',
          body: "<strong>Profile</strong> holds your <strong>name</strong>, your <strong>phone number</strong> with <strong>Generate OTP</strong> to verify it, your email, your password — and <strong>Select Language</strong>. Choose <strong>Hindi</strong> instead of English and press <strong>Save</strong>.",
          voice: "Profile carries your name, phone verification, password and language. Pick Hindi from Select Language, then save.",
        },
        {
          label: 'Logbook', title: 'Logbook Data Input — from paper',
          body: "From here on the product is in Hindi — including <strong>Logbook Data Input</strong>, where readings still written on paper come in. Pick the <strong>asset</strong> and the <strong>logbook template</strong>, drop in a photo of the sheet — JPG, PNG or JPEG, up to 100 MB — and <strong>OCR</strong> reads it against that template and files the readings for you.",
          voice: "And the pages follow. Logbook Data Input reads a photo of the paper logbook with O C R and files the readings.",
        },
        {
          label: 'Wrap', title: 'One platform, every site',
          body: "And the whole product follows — the <strong>menu</strong>, the <strong>dashboard widgets</strong>, the <strong>OCR page</strong>, all of it in Hindi. Every site on one screen, from portfolio compliance down to a single blower, in the language your team actually works in.",
          voice: "And the whole product follows — menu, widgets and pages, all in Hindi. One platform, every site, in your team's own language.",
        },
      ],
    },
    hi: {
      title: 'टोटल वॉटर मैनेजमेंट,<br><em>हर साइट एक स्क्रीन पर।</em>',
      subtitle:
        'एकीकृत प्लेटफ़ॉर्म का दो मिनट का दौरा — डैशबोर्ड, लाइव प्लांट, उससे बनने वाला काम, और उसकी भाषा।',
      chapter: 'डेमो · टोटल वॉटर मैनेजमेंट',
      steps: [
        {
          label: 'नेविगेशन', title: 'एक मेन्यू, हर फ़ीचर',
          body: "<strong>मेन्यू आइकन</strong> साइड नेविगेशन खोलता है और सब कुछ वहीं है: ऊपर <strong>डैशबोर्ड, लॉगबुक डेटा इनपुट, इन्वेंटरी, इनसाइट लिस्ट</strong> और <strong>टिकट</strong>, फिर हर एसेट का सेक्शन — <strong>एसटीपी, ZLD, फ़िल्टर हाउस, सीईटीपी</strong> — और नीचे <strong>टास्क</strong> व <strong>विज़ुअलाइज़ेशन</strong>।",
          voice: "सब कुछ इसी मेन्यू से शुरू होता है: डैशबोर्ड, लॉगबुक डेटा इनपुट, इन्वेंटरी, इनसाइट लिस्ट और टिकट, फिर हर एसेट का सेक्शन, टास्क और विज़ुअलाइज़ेशन।",
        },
        {
          label: 'डैशबोर्ड', title: 'पेज चलाने वाले कंट्रोल',
          body: "<strong>डैशबोर्ड</strong> <strong>टोटल वॉटर मैनेजमेंट — लार्ज डेवलपमेंट</strong> पर खुलता है। <strong>पेज</strong> सिलेक्टर दृश्य बदलता है; <strong>ग्रैन्युलैरिटी</strong> और <strong>समय सीमा</strong> नीचे का हर विजेट फिर से बनाते हैं। <strong>मैप और टिकट व्यू</strong> हर साइट को मैप पर स्कोर देता है और साथ में खुले टिकट दिखाता है।",
          voice: "डैशबोर्ड टोटल वॉटर मैनेजमेंट पर खुलता है। पेज सिलेक्टर दृश्य चुनता है, और ग्रैन्युलैरिटी व समय सीमा नीचे का हर विजेट चलाते हैं।",
        },
        {
          label: 'फ्लो', title: 'हर बूँद कहाँ जाती है',
          body: "<strong>प्लांट फ्लो</strong> पूरे डेवलपमेंट को एक आरेख में दिखाता है — <strong>ईटीपी इनलेट 614.20</strong> से <strong>ईटीपी आउटलेट</strong> और <strong>यूएफ</strong>, फिर <strong>आरओ फ़ीड 300.20</strong> जो <strong>परमीट 156.00</strong> और <strong>रिजेक्ट 137.40</strong> में बँटता है, साथ में <strong>स्लज रिजेक्शन</strong> और <strong>पानी की कमी</strong>। <strong>अनुपालन स्थिति</strong> हर साइट को 1 या 0 देती है।",
          voice: "प्लांट फ्लो हर बूँद का रास्ता दिखाता है — ई टी पी इनलेट, यू एफ, आर ओ फ़ीड, परमीट और रिजेक्ट — और अनुपालन हर साइट का अलग।",
        },
        {
          label: 'दक्षता', title: 'दक्षता और उसके पीछे की ऊर्जा',
          body: "<strong>प्लांट दक्षता</strong> साइटों को एक जैसे गेज पर साथ रखती है — <strong>एसटीपी दक्षता, फ़िल्टर दक्षता, आरओ रिकवरी</strong>, फिर <strong>इंडिया हैबिटेट सेंटर, अदानी अहमदाबाद एयरपोर्ट</strong> और <strong>मॉडल इकोनॉमिक टाउन</strong>, हर एक के दिन-दर-दिन बदलाव के साथ। नीचे <strong>ऊर्जा खपत</strong> एसटीपी, डब्ल्यूटीपी, ZLD और सीईटीपी की खपत रखती है।",
          voice: "प्लांट दक्षता हर साइट को साथ-साथ रखती है — एस टी पी, फ़िल्टर, आर ओ रिकवरी — और ऊर्जा खपत उनके पीछे की बिजली दिखाती है।",
        },
        {
          label: 'लेवल', title: 'हर साइट के लाइव लेवल',
          body: "<strong>जल मात्रा और उपलब्धता</strong> हर साइट को अपना लाइव पैनल देती है — मॉडल इकोनॉमिक टाउन के लिए <strong>यूजीटी, ओएचटी, इनटेक सम्प</strong> और <strong>आरडब्ल्यूआर टैंक</strong>; अदानी अहमदाबाद के लिए <strong>इक्वलाइज़ेशन, एमबीआर, सॉफ़्ट वॉटर</strong> और दोनों <strong>स्लज होल्डिंग टैंक</strong>। रेंज से बाहर सब कुछ रंग में दिखता है।",
          voice: "जल मात्रा हर साइट के लाइव टैंक लेवल दिखाती है, और रेंज से बाहर सब कुछ रंग में।",
        },
        {
          label: 'एरेशन', title: 'एरेशन की सेहत, बैंड के सामने',
          body: "<strong>एरेशन हेल्थ</strong> हर एरेशन टैंक की घुलित ऑक्सीजन को उसके <strong>2–4 पीपीएम रेफरेंस बैंड</strong> के सामने प्लॉट करती है — अंदर हरा, बाहर लाल। रात भर लाल में रहना एक नज़र में दिखता है, और ठीक नीचे <strong>प्रति केएल ऊर्जा</strong> बताती है कि ब्लोअर की कीमत क्या रही।",
          voice: "एरेशन हेल्थ घुलित ऑक्सीजन को दो से चार पी पी एम बैंड के सामने दिखाती है, इसलिए हरे से बाहर जाना तुरंत पकड़ में आता है।",
        },
        {
          label: 'अलर्ट', title: 'भेजा जा चुका हर अलर्ट',
          body: "ऊपर की पट्टी का <strong>मैसेज आइकन</strong> <strong>कम्युनिकेशंस</strong> खोलता है — <strong>डॉक्टर पानी</strong> द्वारा भेजा हर अलर्ट, <strong>ऑल, व्हाट्सएप, एसएमएस, कॉल</strong> और <strong>ईमेल</strong> में बँटा हुआ। यही रिकॉर्ड है कि किसे क्या बताया गया, ताकि कोई अलार्म किसी एक इनबॉक्स में दबा न रह जाए।",
          voice: "मैसेज आइकन डॉक्टर पानी के भेजे हर अलर्ट को जमा करता है — व्हाट्सएप, एस एम एस, कॉल और ईमेल — ताकि कुछ भी किसी एक इनबॉक्स में न खोए।",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — सिस्टम की निगरानी',
          body: "<strong>इनसाइट लिस्ट</strong> पूरे एस्टेट के <strong>सभी इनसाइट, खुले अलार्म, बंद अलार्म</strong> और <strong>उपलब्धियाँ</strong> गिनती है। हर पंक्ति अपना <strong>एसेट</strong>, <strong>प्राथमिकता</strong> और प्रकार बताती है, और खुलने पर सरल भाषा में विवरण देती है कि वह कितनी बार दोहराई गई। वर्कस्पेस, एसेट, प्रकार, प्राथमिकता या तारीख़ से फ़िल्टर करें।",
          voice: "इनसाइट लिस्ट निगरानी करती है: खुले अलार्म, बंद अलार्म, उपलब्धियाँ। हर पंक्ति एसेट बताती है और सरल भाषा में खुद समझाती है।",
        },
        {
          label: 'स्काडा व्यू', title: 'प्लांट, लाइव चलता हुआ',
          body: "<strong>विज़ुअलाइज़ेशन</strong> के नीचे हर साइट का अपना <strong>स्काडा व्यू</strong> है — प्लाक्षा, मॉडल इकोनॉमिक टाउन, हिंडाल्को महान, इंडिया हैबिटेट, अदानी। कोई एक खोलें और प्लांट आरेख पर <strong>LIVE</strong> चलता है: स्क्रीन, <strong>ओजीटी</strong>, ईक्यूटी टैंक, रोटरी ड्रम, एनॉक्सिक और एरेशन टैंक — असली लेवल, <strong>डीओ</strong>, प्रेशर और फ्लो।",
          voice: "विज़ुअलाइज़ेशन में हर साइट का स्काडा व्यू है। अदानी का एस टी पी लाइव चलता है — ब्लोअर, टैंक, डी ओ और फ्लो आरेख पर।",
        },
        {
          label: 'कंट्रोल', title: 'ग्रुप कंट्रोल — ऑटो या रिमोट',
          body: "<strong>ग्रुप कंट्रोल</strong> प्लांट के कंट्रोल ग्रुप खोलता है। हर ग्रुप का एक <strong>मोड</strong> है — <strong>ऑटो</strong> में ऑटोमेशन चलाता है और मैनुअल कंट्रोल बंद रहता है; <strong>रिमोट</strong> पर स्विच करें और नीचे के <strong>12 उपकरण</strong> अलग-अलग नियंत्रित होने लगते हैं: परमीट सक्शन, बैकवॉश डिस्चार्ज, मेम्ब्रेन ब्लोअर — हर एक की लाइव स्थिति के साथ।",
          voice: "ग्रुप कंट्रोल ग्रुप को ऑटो और रिमोट के बीच बदलता है, फिर उसके बारह उपकरण अलग-अलग चलाने देता है — परमीट सक्शन, बैकवॉश, ब्लोअर।",
        },
        {
          label: 'टास्क', title: 'टास्क लिस्ट — निष्कर्ष से काम तक',
          body: "<strong>टास्क लिस्ट</strong> में यह सब काम बन जाता है। <strong>प्लांट, यूज़र, स्किल</strong> या <strong>पूर्णता स्थिति</strong> से फ़िल्टर करें; हर पंक्ति पर <strong>प्राथमिकता</strong>, <strong>असाइनी</strong> और <strong>स्किल टैग</strong> है। कोई एक खोलें और पैनल में तरीका, डेडलाइन व पूर्णता समय, टास्क हिस्ट्री और ऑपरेटर की अपलोड की गई फ़ोटो मिलती है।",
          voice: "टास्क लिस्ट निष्कर्षों को काम में बदलती है — प्लांट, प्राथमिकता, असाइनी, स्किल और स्थिति — और हर टास्क तरीका, हिस्ट्री और फ़ोटो के साथ खुलता है।",
        },
        {
          label: 'इन्वेंटरी', title: 'इन्वेंटरी — स्टोर दर स्टोर स्टॉक',
          body: "<strong>इन्वेंटरी</strong> <strong>स्टोर</strong> और <strong>एसेट</strong> के हिसाब से बँटी है — प्लाक्षा, एसटीपी, अदानी अहमदाबाद, हिंडाल्को महान, इंडिया हैबिटेट, अदानी मुंबई एयरपोर्ट। हर केमिकल पर <strong>उपलब्ध स्टॉक</strong>, <strong>पिछली खपत</strong> और साथ-साथ <strong>वास्तविक बनाम अपेक्षित</strong> उपयोग दिखता है, ताकि ज़्यादा डोज़िंग अंदाज़े से नहीं, आँकड़े से पकड़ में आए।",
          voice: "इन्वेंटरी हर स्टोर के केमिकल पर नज़र रखती है: उपलब्ध स्टॉक, पिछली खपत, और वास्तविक बनाम अपेक्षित उपयोग — ज़्यादा डोज़िंग आँकड़े में दिखती है।",
        },
        {
          label: 'भाषा', title: 'आपकी प्रोफ़ाइल, आपकी भाषा',
          body: "<strong>प्रोफ़ाइल</strong> में आपका <strong>नाम</strong>, <strong>फ़ोन नंबर</strong> उसे सत्यापित करने के लिए <strong>ओटीपी बनाएँ</strong> के साथ, ईमेल, पासवर्ड — और <strong>भाषा चुनें</strong> है। अंग्रेज़ी की जगह <strong>हिंदी</strong> चुनें और <strong>सेव</strong> दबाएँ।",
          voice: "प्रोफ़ाइल में नाम, फ़ोन सत्यापन, पासवर्ड और भाषा है। भाषा चुनें में हिंदी चुनें, फिर सेव करें।",
        },
        {
          label: 'लॉगबुक', title: 'लॉगबुक डेटा इनपुट — काग़ज़ से',
          body: "यहाँ से प्रोडक्ट हिंदी में है — <strong>लॉगबुक डेटा इनपुट</strong> भी, जहाँ काग़ज़ पर लिखी रीडिंग आती हैं। <strong>एसेट</strong> और <strong>लॉगबुक टेम्पलेट</strong> चुनें, शीट की फ़ोटो डालें — JPG, PNG या JPEG, 100 एमबी तक — और <strong>ओसीआर</strong> उसे उसी टेम्पलेट के अनुसार पढ़कर रीडिंग दर्ज कर देता है।",
          voice: "और पेज तुरंत बदल जाते हैं। लॉगबुक डेटा इनपुट काग़ज़ी लॉगबुक की फ़ोटो ओ सी आर से पढ़कर रीडिंग दर्ज कर देता है।",
        },
        {
          label: 'सारांश', title: 'एक प्लेटफ़ॉर्म, हर साइट',
          body: "और पूरा प्रोडक्ट साथ बदल जाता है — <strong>मेन्यू</strong>, <strong>डैशबोर्ड विजेट</strong>, <strong>ओसीआर पेज</strong>, सब हिंदी में। हर साइट एक स्क्रीन पर — पोर्टफ़ोलियो अनुपालन से लेकर एक ब्लोअर तक — उसी भाषा में जिसमें आपकी टीम काम करती है।",
          voice: "और पूरा प्रोडक्ट साथ बदल जाता है — मेन्यू, विजेट और पेज, सब हिंदी में। एक प्लेटफ़ॉर्म, हर साइट, आपकी टीम की अपनी भाषा में।",
        },
      ],
    },
    ta: {
      title: 'டோட்டல் வாட்டர் மேனேஜ்மென்ட்,<br><em>ஒவ்வொரு தளமும் ஒரே திரையில்.</em>',
      subtitle:
        'ஒருங்கிணைந்த தளத்தின் இரண்டு நிமிடச் சுற்று — டாஷ்போர்டு, நேரலை ஆலை, அது உருவாக்கும் வேலை, அதன் மொழி.',
      chapter: 'டெமோ · டோட்டல் வாட்டர் மேனேஜ்மென்ட்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'ஒரே மெனு, எல்லா அம்சங்களும்',
          body: "<strong>மெனு ஐகான்</strong> பக்க வழிசெலுத்தலைத் திறக்கிறது; அனைத்தும் அங்கே: மேலே <strong>டாஷ்போர்டு, லாக்புக் டேட்டா இன்புட், இன்வென்டரி, இன்சைட் லிஸ்ட்</strong>, <strong>டிக்கெட்</strong>, பின் ஒவ்வொரு சொத்துக்கும் ஒரு பிரிவு — <strong>எஸ் டி பி, இஸட் எல் டி, ஃபில்டர் ஹவுஸ், சி இ டி பி</strong> — கீழே <strong>டாஸ்க்</strong> மற்றும் <strong>விஷுவலைசேஷன்</strong>.",
          voice: "எல்லாம் இந்த மெனுவிலிருந்தே தொடங்குகிறது: டாஷ்போர்டு, லாக்புக் டேட்டா இன்புட், இன்வென்டரி, இன்சைட் லிஸ்ட், டிக்கெட், பின் ஒவ்வொரு சொத்துக்கும் ஒரு பிரிவு, டாஸ்க், விஷுவலைசேஷன்.",
        },
        {
          label: 'டாஷ்போர்டு', title: 'பக்கத்தை இயக்கும் கட்டுப்பாடுகள்',
          body: "<strong>டாஷ்போர்டு</strong> <strong>டோட்டல் வாட்டர் மேனேஜ்மென்ட் — லார்ஜ் டெவலப்மென்ட்</strong> பக்கத்தில் திறக்கிறது. <strong>பக்கத் தேர்வி</strong> காட்சிகளை மாற்றுகிறது; <strong>நுணுக்கமும்</strong> <strong>கால வரம்பும்</strong> கீழுள்ள ஒவ்வொரு விட்ஜெட்டையும் மீண்டும் வரைகின்றன. <strong>மேப் & டிக்கெட் வியூ</strong> ஒவ்வொரு தளத்திற்கும் மதிப்பெண் தந்து திறந்த டிக்கெட்டுகளைப் பட்டியலிடுகிறது.",
          voice: "டாஷ்போர்டு டோட்டல் வாட்டர் மேனேஜ்மென்ட்டில் திறக்கிறது. பக்கத் தேர்வி காட்சியைத் தேர்கிறது; நுணுக்கமும் கால வரம்பும் ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன.",
        },
        {
          label: 'ஓட்டம்', title: 'ஒவ்வொரு துளியும் எங்கே',
          body: "<strong>பிளாண்ட் ஃப்ளோ</strong> முழு டெவலப்மென்ட்டையும் ஒரே வரைபடத்தில் காட்டுகிறது — <strong>இ டி பி இன்லெட் 614.20</strong> இலிருந்து <strong>இ டி பி அவுட்லெட்</strong>, <strong>யு எஃப்</strong>, பின் <strong>ஆர் ஓ ஃபீட் 300.20</strong> <strong>பெர்மியேட் 156.00</strong> மற்றும் <strong>ரிஜெக்ட் 137.40</strong> என பிரிகிறது; <strong>சேறு நிராகரிப்பு</strong>, <strong>நீர் இழப்பு</strong> தனியாக. <strong>இணக்க நிலை</strong> ஒவ்வொரு தளத்திற்கும் 1 அல்லது 0.",
          voice: "பிளாண்ட் ஃப்ளோ ஒவ்வொரு துளியின் பாதையையும் காட்டுகிறது — இ டி பி இன்லெட், யு எஃப், ஆர் ஓ ஃபீட், பெர்மியேட், ரிஜெக்ட் — இணக்கம் தளம் வாரியாக.",
        },
        {
          label: 'திறன்', title: 'திறனும் அதன் பின்னுள்ள ஆற்றலும்',
          body: "<strong>பிளாண்ட் எஃபிஷியன்சி</strong> தளங்களை ஒரே மாதிரியான கேஜ்களில் அருகருகே வைக்கிறது — <strong>எஸ் டி பி திறன், ஃபில்டர் திறன், ஆர் ஓ மீட்பு</strong>, பின் <strong>இந்தியா ஹேபிடேட் சென்டர், அதானி அகமதாபாத் விமான நிலையம்</strong>, <strong>மாடல் எகனாமிக் டவுன்</strong> — ஒவ்வொன்றின் நாள் மாற்றத்துடன். கீழே <strong>ஆற்றல் நுகர்வு</strong>.",
          voice: "பிளாண்ட் எஃபிஷியன்சி ஒவ்வொரு தளத்தையும் அருகருகே வைக்கிறது — எஸ் டி பி, ஃபில்டர், ஆர் ஓ மீட்பு — ஆற்றல் நுகர்வு அதன் பின்னுள்ள மின்சாரத்தைக் காட்டுகிறது.",
        },
        {
          label: 'நிலைகள்', title: 'தளம் வாரியாக நேரடி நிலைகள்',
          body: "<strong>நீர் அளவு & கிடைப்பு</strong> ஒவ்வொரு தளத்திற்கும் தனிப் பலகம் தருகிறது — மாடல் எகனாமிக் டவுனுக்கு <strong>யு ஜி டி, ஓ எச் டி, இன்டேக் சம்ப்</strong>, <strong>ஆர் டபிள்யூ ஆர் தொட்டிகள்</strong>; அதானி அகமதாபாத்திற்கு <strong>ஈக்வலைசேஷன், எம் பி ஆர், சாஃப்ட் வாட்டர்</strong> மற்றும் இரு <strong>சேறு தேக்கத் தொட்டிகள்</strong>. வரம்புக்கு வெளியே உள்ளவை நிறத்தில்.",
          voice: "நீர் அளவு தளம் வாரியாக நேரடித் தொட்டி நிலைகளைக் காட்டுகிறது; வரம்புக்கு வெளியே உள்ளவை நிறத்தில்.",
        },
        {
          label: 'ஏரேஷன்', title: 'ஏரேஷன் நலம், வரம்புக்கு எதிராக',
          body: "<strong>ஏரேஷன் ஹெல்த்</strong> ஒவ்வொரு ஏரேஷன் தொட்டியின் கரைந்த ஆக்சிஜனை அதன் <strong>2–4 பி பி எம் குறிப்பு வரம்புக்கு</strong> எதிராக வரைகிறது — உள்ளே பச்சை, வெளியே சிவப்பு. இரவு முழுவதும் சிவப்பில் இருந்தது ஒரே பார்வையில் தெரியும்; கீழே <strong>ஒரு கே எல்-க்கு ஆற்றல்</strong>.",
          voice: "ஏரேஷன் ஹெல்த் கரைந்த ஆக்சிஜனை இரண்டு முதல் நான்கு பி பி எம் வரம்புக்கு எதிராகக் காட்டுகிறது; பச்சையை விட்டு விலகுவது உடனே தெரியும்.",
        },
        {
          label: 'எச்சரிக்கை', title: 'அனுப்பப்பட்ட ஒவ்வொரு எச்சரிக்கையும்',
          body: "மேல் பட்டியின் <strong>செய்தி ஐகான்</strong> <strong>கம்யூனிகேஷன்ஸ்</strong>-ஐத் திறக்கிறது — <strong>டாக்டர் பானி</strong> அனுப்பிய ஒவ்வொரு எச்சரிக்கையும், <strong>ஆல், வாட்ஸ்அப், எஸ் எம் எஸ், கால், மெயில்</strong> என பிரிக்கப்பட்டு. யாருக்கு என்ன சொல்லப்பட்டது என்பதற்கான பதிவு இது.",
          voice: "செய்தி ஐகான் டாக்டர் பானி அனுப்பிய ஒவ்வொரு எச்சரிக்கையையும் சேர்க்கிறது — வாட்ஸ்அப், எஸ் எம் எஸ், கால், மெயில் — எதுவும் ஒருவரின் இன்பாக்ஸில் தொலையாது.",
        },
        {
          label: 'இன்சைட்ஸ்', title: 'இன்சைட் லிஸ்ட் — கண்காணிப்பு',
          body: "<strong>இன்சைட் லிஸ்ட்</strong> முழு தொகுப்பின் <strong>அனைத்து இன்சைட்கள், திறந்த அலாரங்கள், மூடிய அலாரங்கள், சாதனைகள்</strong> என எண்ணிக் காட்டுகிறது. ஒவ்வொரு வரிசையும் அதன் <strong>சொத்து</strong>, <strong>முன்னுரிமை</strong>, வகையைச் சொல்லி, எளிய மொழி விளக்கத்துடன் திறக்கிறது.",
          voice: "இன்சைட் லிஸ்ட் கண்காணிப்பைச் செய்கிறது: திறந்த அலாரங்கள், மூடியவை, சாதனைகள். ஒவ்வொரு வரிசையும் சொத்தைச் சொல்லி எளிய மொழியில் விளக்குகிறது.",
        },
        {
          label: 'ஸ்காடா வியூ', title: 'ஆலை, நேரலையில்',
          body: "<strong>விஷுவலைசேஷன்</strong> கீழ் ஒவ்வொரு தளத்திற்கும் ஒரு <strong>ஸ்காடா வியூ</strong> — பிளக்ஷா, மாடல் எகனாமிக் டவுன், ஹிண்டால்கோ மஹான், இந்தியா ஹேபிடேட், அதானி. ஒன்றைத் திறந்தால் ஆலை வரைபடத்தில் <strong>LIVE</strong> ஓடுகிறது: ஸ்க்ரீன்கள், <strong>ஓ ஜி டி</strong>, ஈக்யூடி தொட்டி, ரோட்டரி டிரம், அனாக்சிக் மற்றும் ஏரேஷன் தொட்டிகள்.",
          voice: "விஷுவலைசேஷனில் ஒவ்வொரு தளத்திற்கும் ஸ்காடா வியூ உண்டு. அதானியின் எஸ் டி பி நேரலையில் ஓடுகிறது — பிளோயர், தொட்டி, டி ஓ, ஓட்டம் வரைபடத்தில்.",
        },
        {
          label: 'கட்டுப்பாடு', title: 'குரூப் கன்ட்ரோல் — ஆட்டோ அல்லது ரிமோட்',
          body: "<strong>குரூப் கன்ட்ரோல்</strong> ஆலையின் கட்டுப்பாட்டுக் குழுக்களைத் திறக்கிறது. ஒவ்வொரு குழுவுக்கும் ஒரு <strong>முறை</strong> — <strong>ஆட்டோ</strong>-வில் ஆட்டோமேஷன் இயக்கும், கைமுறை முடக்கப்படும்; <strong>ரிமோட்</strong>-க்கு மாற்றினால் கீழுள்ள <strong>12 உபகரணங்கள்</strong> தனித்தனியாகக் கட்டுப்படுத்தலாம்: பெர்மியேட் சக்ஷன், பேக்வாஷ், மெம்பரேன் பிளோயர்கள்.",
          voice: "குரூப் கன்ட்ரோல் குழுவை ஆட்டோ மற்றும் ரிமோட் இடையே மாற்றி, பின் அதன் பன்னிரண்டு உபகரணங்களைத் தனித்தனியாக இயக்க விடுகிறது.",
        },
        {
          label: 'டாஸ்க்', title: 'டாஸ்க் லிஸ்ட் — கண்டுபிடிப்பு வேலையாக',
          body: "<strong>டாஸ்க் லிஸ்ட்</strong>-இல் இவை அனைத்தும் வேலையாகும். <strong>ஆலை, பயனர், திறன்</strong> அல்லது <strong>நிறைவு நிலை</strong> மூலம் வடிகட்டுங்கள்; ஒவ்வொரு வரிசையிலும் <strong>முன்னுரிமை</strong>, <strong>ஒப்படைப்பு</strong>, <strong>திறன் குறிச்சொல்</strong>. திறந்தால் முறை, காலக்கெடு, டாஸ்க் வரலாறு, ஆபரேட்டர் பதிவேற்றிய புகைப்படம்.",
          voice: "டாஸ்க் லிஸ்ட் கண்டுபிடிப்புகளை வேலையாக்குகிறது — ஆலை, முன்னுரிமை, ஒப்படைப்பு, திறன், நிலை — ஒவ்வொன்றும் முறை, வரலாறு, புகைப்படத்துடன் திறக்கிறது.",
        },
        {
          label: 'இன்வென்டரி', title: 'இன்வென்டரி — ஸ்டோர் வாரியாக',
          body: "<strong>இன்வென்டரி</strong> <strong>ஸ்டோர்</strong> மற்றும் <strong>சொத்து</strong> வாரியாகப் பிரிகிறது — பிளக்ஷா, எஸ் டி பி, அதானி அகமதாபாத், ஹிண்டால்கோ மஹான், இந்தியா ஹேபிடேட், அதானி மும்பை. ஒவ்வொரு வேதிப்பொருளுக்கும் <strong>கையிருப்பு</strong>, <strong>கடைசி நுகர்வு</strong>, <strong>உண்மை vs எதிர்பார்ப்பு</strong>.",
          voice: "இன்வென்டரி ஸ்டோர் வாரியாக வேதிப்பொருட்களைக் கண்காணிக்கிறது: கையிருப்பு, கடைசி நுகர்வு, உண்மை மற்றும் எதிர்பார்க்கப்பட்ட பயன்பாடு.",
        },
        {
          label: 'மொழி', title: 'உங்கள் சுயவிவரம், உங்கள் மொழி',
          body: "<strong>சுயவிவரத்தில்</strong> உங்கள் <strong>பெயர்</strong>, <strong>தொலைபேசி எண்</strong> சரிபார்க்க <strong>ஓ டி பி உருவாக்கு</strong>, மின்னஞ்சல், கடவுச்சொல் — மற்றும் <strong>மொழியைத் தேர்வு செய்</strong>. ஆங்கிலத்திற்குப் பதிலாக <strong>இந்தி</strong> தேர்ந்து <strong>சேமி</strong> அழுத்துங்கள்.",
          voice: "சுயவிவரத்தில் பெயர், தொலைபேசி சரிபார்ப்பு, கடவுச்சொல், மொழி உள்ளன. மொழியைத் தேர்வு செய்-இல் இந்தியைத் தேர்ந்து சேமியுங்கள்.",
        },
        {
          label: 'லாக்புக்', title: 'லாக்புக் டேட்டா இன்புட் — காகிதத்திலிருந்து',
          body: "இங்கிருந்து தயாரிப்பு இந்தியில் — <strong>லாக்புக் டேட்டா இன்புட்</strong> உட்பட, காகிதத்தில் எழுதப்படும் அளவீடுகள் வரும் இடம். <strong>சொத்து</strong> மற்றும் <strong>லாக்புக் டெம்ப்ளேட்</strong> தேர்ந்து, தாளின் புகைப்படத்தைப் போடுங்கள் — JPG, PNG, JPEG, 100 எம் பி வரை — <strong>ஓ சி ஆர்</strong> அதைப் படித்து அளவீடுகளைப் பதிவு செய்யும்.",
          voice: "பக்கங்கள் உடனே மாறுகின்றன. லாக்புக் டேட்டா இன்புட் காகித லாக்புக்கின் புகைப்படத்தை ஓ சி ஆர் மூலம் படித்துப் பதிவு செய்கிறது.",
        },
        {
          label: 'நிறைவு', title: 'ஒரே தளம், ஒவ்வொரு இடமும்',
          body: "முழு தயாரிப்பும் உடன் மாறுகிறது — <strong>மெனு</strong>, <strong>டாஷ்போர்டு விட்ஜெட்கள்</strong>, <strong>ஓ சி ஆர் பக்கம்</strong>, எல்லாம் இந்தியில். ஒவ்வொரு தளமும் ஒரே திரையில் — போர்ட்ஃபோலியோ இணக்கம் முதல் ஒரு பிளோயர் வரை — உங்கள் குழு பயன்படுத்தும் மொழியில்.",
          voice: "முழு தயாரிப்பும் உடன் மாறுகிறது — மெனு, விட்ஜெட், பக்கங்கள், எல்லாம் இந்தியில். ஒரே தளம், ஒவ்வொரு இடமும், உங்கள் குழுவின் மொழியில்.",
        },
      ],
    },
    mr: {
      title: 'टोटल वॉटर मॅनेजमेंट,<br><em>प्रत्येक साइट एका स्क्रीनवर.</em>',
      subtitle:
        'एकत्रित प्लॅटफॉर्मचा दोन मिनिटांचा दौरा — डॅशबोर्ड, लाइव्ह प्लांट, त्यातून तयार होणारे काम, आणि त्याची भाषा.',
      chapter: 'डेमो · टोटल वॉटर मॅनेजमेंट',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'एक मेनू, प्रत्येक फीचर',
          body: "<strong>मेनू आयकॉन</strong> साइड नेव्हिगेशन उघडतो आणि सर्व काही तिथेच आहे: वर <strong>डॅशबोर्ड, लॉगबुक डेटा इनपुट, इन्व्हेंटरी, इनसाइट लिस्ट</strong> व <strong>तिकिटे</strong>, मग प्रत्येक अ‍ॅसेटचा विभाग — <strong>एसटीपी, ZLD, फिल्टर हाउस, सीईटीपी</strong> — आणि खाली <strong>टास्क</strong> व <strong>व्हिज्युअलायझेशन</strong>.",
          voice: "सर्व काही याच मेनूपासून सुरू होते: डॅशबोर्ड, लॉगबुक डेटा इनपुट, इन्व्हेंटरी, इनसाइट लिस्ट, तिकिटे, मग प्रत्येक अ‍ॅसेटचा विभाग, टास्क आणि व्हिज्युअलायझेशन.",
        },
        {
          label: 'डॅशबोर्ड', title: 'पेज चालवणारे कंट्रोल',
          body: "<strong>डॅशबोर्ड</strong> <strong>टोटल वॉटर मॅनेजमेंट — लार्ज डेव्हलपमेंट</strong> वर उघडतो. <strong>पेज</strong> सिलेक्टर दृश्ये बदलतो; <strong>ग्रॅन्युलॅरिटी</strong> आणि <strong>वेळ श्रेणी</strong> खालचे प्रत्येक विजेट पुन्हा तयार करतात. <strong>मॅप आणि तिकीट व्ह्यू</strong> प्रत्येक साइटला नकाशावर गुण देतो आणि शेजारी खुली तिकिटे दाखवतो.",
          voice: "डॅशबोर्ड टोटल वॉटर मॅनेजमेंटवर उघडतो. पेज सिलेक्टर दृश्य निवडतो, आणि ग्रॅन्युलॅरिटी व वेळ श्रेणी खालचे प्रत्येक विजेट चालवतात.",
        },
        {
          label: 'फ्लो', title: 'प्रत्येक थेंब कुठे जातो',
          body: "<strong>प्लांट फ्लो</strong> संपूर्ण डेव्हलपमेंट एका आकृतीत दाखवतो — <strong>ईटीपी इनलेट 614.20</strong> पासून <strong>ईटीपी आउटलेट</strong> व <strong>यूएफ</strong>, मग <strong>आरओ फीड 300.20</strong> जो <strong>परमीट 156.00</strong> आणि <strong>रिजेक्ट 137.40</strong> मध्ये विभागतो, सोबत <strong>स्लज रिजेक्शन</strong> व <strong>पाण्याची हानी</strong>. <strong>अनुपालन स्थिती</strong> प्रत्येक साइटला 1 किंवा 0 देते.",
          voice: "प्लांट फ्लो प्रत्येक थेंबाचा मार्ग दाखवतो — ई टी पी इनलेट, यू एफ, आर ओ फीड, परमीट व रिजेक्ट — अनुपालन प्रत्येक साइटचे वेगळे.",
        },
        {
          label: 'कार्यक्षमता', title: 'कार्यक्षमता आणि मागची ऊर्जा',
          body: "<strong>प्लांट कार्यक्षमता</strong> साइट्स एकसारख्या गेजवर शेजारी ठेवते — <strong>एसटीपी कार्यक्षमता, फिल्टर कार्यक्षमता, आरओ रिकव्हरी</strong>, मग <strong>इंडिया हॅबिटॅट सेंटर, अदानी अहमदाबाद एअरपोर्ट</strong> व <strong>मॉडेल इकॉनॉमिक टाउन</strong>, प्रत्येकाच्या दिवसागणिक बदलासह. खाली <strong>ऊर्जा वापर</strong> एसटीपी, डब्ल्यूटीपी, ZLD व सीईटीपीचा वापर दाखवतो.",
          voice: "प्लांट कार्यक्षमता प्रत्येक साइट शेजारी ठेवते — एस टी पी, फिल्टर, आर ओ रिकव्हरी — आणि ऊर्जा वापर त्यामागची वीज दाखवतो.",
        },
        {
          label: 'पातळी', title: 'प्रत्येक साइटच्या लाइव्ह पातळ्या',
          body: "<strong>पाण्याचे प्रमाण व उपलब्धता</strong> प्रत्येक साइटला स्वतःचे लाइव्ह पॅनेल देते — मॉडेल इकॉनॉमिक टाउनसाठी <strong>यूजीटी, ओएचटी, इनटेक सम्प</strong> व <strong>आरडब्ल्यूआर टाक्या</strong>; अदानी अहमदाबादसाठी <strong>इक्वलायझेशन, एमबीआर, सॉफ्ट वॉटर</strong> व दोन्ही <strong>स्लज होल्डिंग टाक्या</strong>. श्रेणीबाहेरचे सर्व रंगात दिसते.",
          voice: "पाण्याचे प्रमाण प्रत्येक साइटच्या लाइव्ह टाकी पातळ्या दाखवते, आणि श्रेणीबाहेरचे सर्व रंगात.",
        },
        {
          label: 'एरेशन', title: 'एरेशनचे आरोग्य, बँडसमोर',
          body: "<strong>एरेशन हेल्थ</strong> प्रत्येक एरेशन टाकीतील विरघळलेला ऑक्सिजन त्याच्या <strong>2–4 पीपीएम संदर्भ बँड</strong>समोर दाखवते — आत हिरवे, बाहेर लाल. रात्रभर लाल राहणे एका नजरेत दिसते, आणि खालीच <strong>प्रति केएल ऊर्जा</strong> ब्लोअरची किंमत सांगते.",
          voice: "एरेशन हेल्थ विरघळलेला ऑक्सिजन दोन ते चार पी पी एम बँडसमोर दाखवते, त्यामुळे हिरव्यातून बाहेर जाणे लगेच लक्षात येते.",
        },
        {
          label: 'अलर्ट', title: 'पाठवलेला प्रत्येक अलर्ट',
          body: "वरच्या पट्टीतील <strong>मेसेज आयकॉन</strong> <strong>कम्युनिकेशन्स</strong> उघडतो — <strong>डॉक्टर पानी</strong>ने पाठवलेला प्रत्येक अलर्ट, <strong>ऑल, व्हॉट्सअ‍ॅप, एसएमएस, कॉल</strong> व <strong>ईमेल</strong> मध्ये विभागलेला. कोणाला काय कळवले याची हीच नोंद आहे.",
          voice: "मेसेज आयकॉन डॉक्टर पानीने पाठवलेला प्रत्येक अलर्ट एकत्र करतो — व्हॉट्सअ‍ॅप, एस एम एस, कॉल आणि ईमेल — काहीही एका इनबॉक्समध्ये हरवत नाही.",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — सिस्टमचे लक्ष',
          body: "<strong>इनसाइट लिस्ट</strong> संपूर्ण इस्टेटचे <strong>सर्व इनसाइट, खुले अलार्म, बंद अलार्म</strong> व <strong>अचिव्हमेंट्स</strong> मोजते. प्रत्येक ओळ आपला <strong>अ‍ॅसेट</strong>, <strong>प्राधान्य</strong> व प्रकार सांगते आणि सोप्या भाषेतील वर्णनासह उघडते. वर्कस्पेस, अ‍ॅसेट, प्रकार, प्राधान्य किंवा तारखेने फिल्टर करा.",
          voice: "इनसाइट लिस्ट लक्ष ठेवते: खुले अलार्म, बंद अलार्म, अचिव्हमेंट्स. प्रत्येक ओळ अ‍ॅसेट सांगते आणि सोप्या भाषेत स्वतः समजावते.",
        },
        {
          label: 'स्काडा व्ह्यू', title: 'प्लांट, लाइव्ह चालू',
          body: "<strong>व्हिज्युअलायझेशन</strong> खाली प्रत्येक साइटचा स्वतःचा <strong>स्काडा व्ह्यू</strong> आहे — प्लाक्षा, मॉडेल इकॉनॉमिक टाउन, हिंडाल्को महान, इंडिया हॅबिटॅट, अदानी. एक उघडा आणि प्लांट आकृतीवर <strong>LIVE</strong> चालतो: स्क्रीन, <strong>ओजीटी</strong>, ईक्यूटी टाकी, रोटरी ड्रम, अ‍ॅनॉक्सिक व एरेशन टाक्या — खऱ्या पातळ्या, <strong>डीओ</strong>, दाब व फ्लो.",
          voice: "व्हिज्युअलायझेशनमध्ये प्रत्येक साइटचा स्काडा व्ह्यू आहे. अदानीचा एस टी पी लाइव्ह चालतो — ब्लोअर, टाक्या, डी ओ आणि फ्लो आकृतीवर.",
        },
        {
          label: 'कंट्रोल', title: 'ग्रुप कंट्रोल — ऑटो की रिमोट',
          body: "<strong>ग्रुप कंट्रोल</strong> प्लांटचे कंट्रोल ग्रुप उघडतो. प्रत्येक ग्रुपला एक <strong>मोड</strong> आहे — <strong>ऑटो</strong> मध्ये ऑटोमेशन चालवते आणि मॅन्युअल कंट्रोल बंद असतो; <strong>रिमोट</strong> वर बदला आणि खालील <strong>12 उपकरणे</strong> स्वतंत्रपणे नियंत्रित होतात: परमीट सक्शन, बॅकवॉश डिस्चार्ज, मेम्ब्रेन ब्लोअर — प्रत्येकाच्या लाइव्ह स्थितीसह.",
          voice: "ग्रुप कंट्रोल ग्रुप ऑटो आणि रिमोटमध्ये बदलतो, मग त्याची बारा उपकरणे स्वतंत्रपणे चालवू देतो — परमीट सक्शन, बॅकवॉश, ब्लोअर.",
        },
        {
          label: 'टास्क', title: 'टास्क लिस्ट — निष्कर्षाचे काम',
          body: "<strong>टास्क लिस्ट</strong> मध्ये हे सर्व काम बनते. <strong>प्लांट, यूजर, स्किल</strong> किंवा <strong>पूर्णता स्थिती</strong> ने फिल्टर करा; प्रत्येक ओळीवर <strong>प्राधान्य</strong>, <strong>असाइनी</strong> व <strong>स्किल टॅग</strong>. एक उघडा आणि पॅनेलमध्ये पद्धत, डेडलाइन व पूर्णता वेळा, टास्क हिस्ट्री, आणि ऑपरेटरने अपलोड केलेला फोटो मिळतो.",
          voice: "टास्क लिस्ट निष्कर्षांचे काम करते — प्लांट, प्राधान्य, असाइनी, स्किल व स्थिती — आणि प्रत्येक टास्क पद्धत, हिस्ट्री व फोटोसह उघडतो.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'इन्व्हेंटरी — स्टोअरनुसार स्टॉक',
          body: "<strong>इन्व्हेंटरी</strong> <strong>स्टोअर</strong> आणि <strong>अ‍ॅसेट</strong> नुसार विभागते — प्लाक्षा, एसटीपी, अदानी अहमदाबाद, हिंडाल्को महान, इंडिया हॅबिटॅट, अदानी मुंबई एअरपोर्ट. प्रत्येक केमिकलवर <strong>उपलब्ध स्टॉक</strong>, <strong>शेवटचा वापर</strong> आणि शेजारी <strong>प्रत्यक्ष विरुद्ध अपेक्षित</strong> वापर दिसतो.",
          voice: "इन्व्हेंटरी स्टोअरनुसार केमिकल्सचा मागोवा घेते: उपलब्ध स्टॉक, शेवटचा वापर, आणि प्रत्यक्ष विरुद्ध अपेक्षित वापर — जास्त डोसिंग आकड्यात दिसते.",
        },
        {
          label: 'भाषा', title: 'तुमचे प्रोफाइल, तुमची भाषा',
          body: "<strong>प्रोफाइल</strong> मध्ये तुमचे <strong>नाव</strong>, <strong>फोन नंबर</strong> तो पडताळण्यासाठी <strong>ओटीपी तयार करा</strong> सह, ईमेल, पासवर्ड — आणि <strong>भाषा निवडा</strong> आहे. इंग्रजीऐवजी <strong>हिंदी</strong> निवडा आणि <strong>सेव्ह</strong> दाबा.",
          voice: "प्रोफाइलमध्ये नाव, फोन पडताळणी, पासवर्ड आणि भाषा आहे. भाषा निवडा मध्ये हिंदी निवडा, मग सेव्ह करा.",
        },
        {
          label: 'लॉगबुक', title: 'लॉगबुक डेटा इनपुट — कागदावरून',
          body: "इथून पुढे प्रॉडक्ट हिंदीत आहे — <strong>लॉगबुक डेटा इनपुट</strong> सुद्धा, जिथे कागदावर लिहिलेली रीडिंग्ज येतात. <strong>अ‍ॅसेट</strong> व <strong>लॉगबुक टेम्प्लेट</strong> निवडा, शीटचा फोटो टाका — JPG, PNG किंवा JPEG, 100 एमबी पर्यंत — आणि <strong>ओसीआर</strong> तो त्याच टेम्प्लेटनुसार वाचून रीडिंग्ज नोंदवते.",
          voice: "आणि पेजेस लगेच बदलतात. लॉगबुक डेटा इनपुट कागदी लॉगबुकचा फोटो ओ सी आर ने वाचून रीडिंग्ज नोंदवतो.",
        },
        {
          label: 'सारांश', title: 'एक प्लॅटफॉर्म, प्रत्येक साइट',
          body: "आणि संपूर्ण प्रॉडक्ट सोबत बदलते — <strong>मेनू</strong>, <strong>डॅशबोर्ड विजेट</strong>, <strong>ओसीआर पेज</strong>, सर्व हिंदीत. प्रत्येक साइट एका स्क्रीनवर — पोर्टफोलिओ अनुपालनापासून एका ब्लोअरपर्यंत — तुमची टीम ज्या भाषेत काम करते त्याच भाषेत.",
          voice: "आणि संपूर्ण प्रॉडक्ट सोबत बदलते — मेनू, विजेट आणि पेजेस, सर्व हिंदीत. एक प्लॅटफॉर्म, प्रत्येक साइट, तुमच्या टीमच्या भाषेत.",
        },
      ],
    },
  },
};

export default lesson;
