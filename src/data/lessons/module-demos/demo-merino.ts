import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-merino`;

/**
 * Personalized demo — Merino Industries Limited.   (hidden module-demos)
 * Built from the CSM's screen recording of the client's water/effluent
 * treatment plant (bag filters → GMF/ACF/COD → UF → RO trains).
 * Style: overview (brisk page-per-feature tour, ~3 min).
 * Notes from the uploader (AI instruction layer):
 *   1. "Include the side navigation for each feature" → every step is framed
 *      around opening the feature from the side menu; step 1 shows the drawer.
 *   2. "Don't go into details of the data points shown on the dashboard" →
 *      the Dashboard step stays high-level, no widget values enumerated.
 */
const lesson: Lesson = {
  id: 'demo-merino',
  moduleId: 'module-demos',
  lessonNumber: 3,
  estimatedMinutes: 3,
  expiresAt: '2026-08-20', // 30 days after the job's created_at (2026-07-21) — purged by cleanup-demos
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    dashboard: `${BASE}/dashboard.jpg`,
    inventory: `${BASE}/inventory.jpg`,
    insights: `${BASE}/insights.jpg`,
    datainput: `${BASE}/datainput.jpg`,
    tasks: `${BASE}/tasks.jpg`,
    plant: `${BASE}/plant.jpg`,
  },
  layouts: [
    // S1 — the side navigation: where every feature lives
    {
      mode: 'detail', screenshot: 'nav', caption: 'Your side navigation',
      spotlight: { top: '6%', left: '0%', width: '14%', height: '92%' },
      cursor: [
        { at: 0, x: 12, y: 4, click: true },
        { at: 0.4, x: 8, y: 10 },
        { at: 0.65, x: 9, y: 20 },
        { at: 0.88, x: 10, y: 38, click: true },
      ],
    },
    // S2 — Dashboard (kept high-level per the uploader's note)
    {
      mode: 'detail', screenshot: 'dashboard', caption: 'Dashboard — plant at a glance',
      spotlight: null,
      cursor: [
        { at: 0, x: 6, y: 20, click: true },
        { at: 0.45, x: 32, y: 50 },
        { at: 0.8, x: 72, y: 74 },
      ],
    },
    // S3 — Inventory
    {
      mode: 'detail', screenshot: 'inventory', caption: 'Inventory — chemical stock',
      spotlight: null,
      cursor: [
        { at: 0, x: 8, y: 9 },
        { at: 0.45, x: 28, y: 45 },
        { at: 0.8, x: 82, y: 42 },
      ],
    },
    // S4 — Insight List
    {
      mode: 'detail', screenshot: 'insights', caption: 'Insight List — alarms that find you',
      spotlight: { top: '30%', left: '0%', width: '100%', height: '12%' },
      cursor: [
        { at: 0, x: 20, y: 34, click: true },
        { at: 0.45, x: 40, y: 34 },
        { at: 0.8, x: 42, y: 62 },
      ],
    },
    // S5 — Data Input
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Data Input — daily lab readings',
      spotlight: null,
      cursor: [
        { at: 0, x: 8, y: 10 },
        { at: 0.45, x: 40, y: 26 },
        { at: 0.82, x: 90, y: 12, click: true },
      ],
    },
    // S6 — Task List
    {
      mode: 'detail', screenshot: 'tasks', caption: 'Task List — work routed by skill',
      spotlight: null,
      cursor: [
        { at: 0, x: 8, y: 10 },
        { at: 0.45, x: 40, y: 42 },
        { at: 0.8, x: 82, y: 62 },
      ],
    },
    // S7 — ScadaView (live digital twin with its own page selector)
    {
      mode: 'detail', screenshot: 'plant', caption: 'ScadaView — your live plant',
      spotlight: { top: '9%', left: '86%', width: '13%', height: '12%' },
      cursor: [
        { at: 0, x: 9, y: 10 },
        { at: 0.45, x: 42, y: 45 },
        { at: 0.82, x: 92, y: 14, click: true },
      ],
    },
    // S8 — wrap: how it all connects, back to the menu
    {
      mode: 'detail', screenshot: 'nav', caption: 'Your complete setup',
      spotlight: null,
      cursor: [
        { at: 0.1, x: 8, y: 10 },
        { at: 0.55, x: 9, y: 25 },
        { at: 0.85, x: 10, y: 38 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Your <em>Merino Industries Limited</em><br>setup.',
      subtitle:
        'A fast tour of everything we set up for your plant — where each feature lives in the side menu, and what it does.',
      chapter: 'Personalized demo · Merino Industries Limited',
      steps: [
        {
          label: 'Navigate', title: 'Your side menu — where everything lives',
          body: "Tap the <strong>menu icon</strong> (top-left) to open your <strong>side navigation</strong>. Every feature sits here: <strong>Dashboard, Inventory, Insight List, Data Input, Task List</strong> and <strong>ScadaView</strong>. Along the top, the <strong>page selector</strong>, <strong>granularity</strong> and <strong>time range</strong> drive the widgets; <strong>refresh</strong> and <strong>download</strong> are top-right.",
          voice: "Welcome — here's everything we've set up for Merino Industries Limited, and how to move around it. Tap the menu icon, top left, to open your side navigation. Everything lives here: Dashboard, Inventory, Insight List, Data Input, Task List, and Scada View. We'll open each one from this same menu. And along the top, the page selector, granularity and time range drive every widget, with refresh and download on the right.",
        },
        {
          label: 'Dashboard', title: 'Dashboard — your plant at a glance',
          body: "From the side menu, open <strong>Dashboard</strong>. The <strong>page selector</strong> switches between your <strong>Unified Dashboard</strong> and <strong>Detailed Analytics</strong> views. Here the <strong>Plant Summary</strong> lays out inlet flows, R O feeds, recovery and reject as simple cards — one look tells you how the day is running.",
          voice: "From the side menu, open Dashboard. The page selector up top switches between your Unified Dashboard and the Detailed Analytics view. Here, the Plant Summary lays out your inlet flows, R O feeds, recovery and reject as simple cards. One look, and you know how the day is running.",
        },
        {
          label: 'Inventory', title: 'Inventory — your chemical stock',
          body: "Back in the side menu, <strong>Inventory</strong> tracks your treatment chemicals — <strong>Hypo, Caustic, H C L, Citric Acid, S M B S, Antiscalant, Salt</strong>. Each row shows <strong>stock available</strong> and <strong>daily consumption</strong>, actual against expected, so you re-order before you run short.",
          voice: "Next in the side menu, Inventory. It tracks your treatment chemicals — hypo, caustic, H C L, citric acid, S M B S, antiscalant and salt. Each row shows what's in stock and how much you're using a day, actual against expected — so you re-order well before anything runs short.",
        },
        {
          label: 'Insights', title: 'Insight List — alarms that find you',
          body: "<strong>Insight List</strong> is where the system flags problems for you — <strong>open alarms</strong>, closed ones, and achievements, all counted at the top. A pump stuck in manual mode, a tank over level, a reading out of range — each opens with a plain-language explanation, and you can <strong>Create Insight</strong> yourself.",
          voice: "Open Insight List, and the system does the watching for you. Open alarms, closed ones, and achievements are counted right at the top. A pump left in manual mode, a tank over level, a reading out of range — each one opens with a plain-language explanation of what happened and why it matters. You can raise your own with Create Insight too.",
        },
        {
          label: 'Data Input', title: 'Data Input — your daily lab readings',
          body: "Readings that come from the lab, not a sensor — <strong>C O D, B O D, T S S, silica, pressures, T D S</strong> — go in on <strong>Data Input</strong>. <strong>Search or filter</strong> to the sensor, type the value, done; or <strong>upload a file</strong> for many at once. Every entry feeds the same dashboards.",
          voice: "The readings that come from your lab rather than a sensor — C O D, B O D, T S S, silica, pressures, T D S — go in on Data Input. Search or filter to find the row, type the value, done. Or upload a file to enter many at once. Everything you record here feeds those same dashboards.",
        },
        {
          label: 'Task List', title: 'Task List — work routed by skill',
          body: "<strong>Task List</strong> turns those alerts into work: chemical dosing, putting a pump back in auto, preventive maintenance. Each task carries a <strong>skill tag</strong> — Operator, Electrical, Mechanical — and a <strong>completion status</strong>, so the right person picks it up and nothing slips.",
          voice: "Task List turns those alerts into action. Chemical dosing, putting a pump back into auto, preventive maintenance of the pumps — each task carries a skill tag, operator, electrical or mechanical, and a completion status. So the right job reaches the right person, and nothing slips through.",
        },
        {
          label: 'ScadaView', title: 'ScadaView — your live plant',
          body: "<strong>ScadaView</strong> is your live plant on one screen — <strong>bag filters, G M F, A C F, U F</strong> and the <strong>R O trains</strong>, with real flows, levels and pump states animating on the diagram. Its own <strong>page selector</strong> jumps between the <strong>Filtration, U F</strong> and <strong>R O System</strong> views.",
          voice: "And ScadaView is your whole plant, live, on one screen. The bag filters, glass media and carbon filters, the U F system, and the R O trains — with real flows, levels and pump states animating right on the diagram. Its own page selector jumps between the filtration, U F and R O system views. You watch water move through the plant from your desk.",
        },
        {
          label: 'Wrap', title: "That's your complete setup",
          body: "Six features, one menu: <strong>Dashboard</strong> to glance, <strong>ScadaView</strong> to watch it live, <strong>Insight List</strong> for alarms, <strong>Task List</strong> for the fix, <strong>Data Input</strong> for lab readings, <strong>Inventory</strong> for chemicals. The full training inside covers every screen — reach out any time to extend your setup.",
          voice: "And that's your complete setup — six features, all from one side menu. Dashboard to glance, Scada View to watch it live, Insight List for the alarms, Task List for the fix, Data Input for your lab readings, and Inventory for chemicals. The full training inside covers every screen in your language — and reach out any time you'd like us to extend it.",
        },
      ],
    },
    hi: {
      title: 'आपका <em>मेरिनो इंडस्ट्रीज़ लिमिटेड</em><br>सेटअप।',
      subtitle: 'आपके प्लांट के लिए तैयार हर चीज़ का तेज़ दौरा — साइड मेन्यू में हर फ़ीचर कहाँ है और क्या करता है।',
      chapter: 'व्यक्तिगत डेमो · मेरिनो इंडस्ट्रीज़ लिमिटेड',
      steps: [
        {
          label: 'नेविगेशन', title: 'आपका साइड मेन्यू — सब कुछ यहीं',
          body: "<strong>मेन्यू आइकन</strong> (ऊपर-बाएँ) दबाएँ और अपना <strong>साइड नेविगेशन</strong> खोलें। हर फ़ीचर यहीं है: <strong>डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट</strong> और <strong>स्काडा व्यू</strong>। ऊपर <strong>पेज सिलेक्टर</strong>, <strong>ग्रैन्युलैरिटी</strong> और <strong>समय सीमा</strong> विजेट चलाते हैं; <strong>रिफ्रेश</strong> और <strong>डाउनलोड</strong> ऊपर-दाएँ।",
          voice: "स्वागत है — यह है मेरिनो इंडस्ट्रीज़ लिमिटेड के लिए तैयार हर चीज़, और उसमें घूमने का तरीका। ऊपर बाएँ मेन्यू आइकन दबाएँ और साइड नेविगेशन खोलें। सब कुछ यहीं है: डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट, और स्काडा व्यू। हर एक को हम इसी मेन्यू से खोलेंगे। और ऊपर की पट्टी में — पेज सिलेक्टर, ग्रैन्युलैरिटी और समय सीमा हर विजेट को चलाते हैं, दाईं ओर रिफ्रेश और डाउनलोड।",
        },
        {
          label: 'डैशबोर्ड', title: 'डैशबोर्ड — एक नज़र में पूरा प्लांट',
          body: "साइड मेन्यू से <strong>डैशबोर्ड</strong> खोलें। <strong>पेज सिलेक्टर</strong> आपके <strong>यूनिफाइड डैशबोर्ड</strong> और <strong>डिटेल्ड एनालिटिक्स</strong> दृश्यों के बीच बदलता है। यहाँ <strong>प्लांट समरी</strong> इनलेट फ्लो, आर ओ फ़ीड, रिकवरी और रिजेक्ट को सरल कार्ड में रखती है — एक नज़र और दिन का हाल पता।",
          voice: "साइड मेन्यू से डैशबोर्ड खोलें। ऊपर का पेज सिलेक्टर आपके यूनिफाइड डैशबोर्ड और डिटेल्ड एनालिटिक्स दृश्य के बीच बदलता है। यहाँ प्लांट समरी आपके इनलेट फ्लो, आर ओ फ़ीड, रिकवरी और रिजेक्ट को सरल कार्ड में रखती है। एक नज़र, और पता चल जाता है कि दिन कैसा चल रहा है।",
        },
        {
          label: 'इन्वेंटरी', title: 'इन्वेंटरी — केमिकल स्टॉक',
          body: "साइड मेन्यू में <strong>इन्वेंटरी</strong> आपके ट्रीटमेंट केमिकल पर नज़र रखती है — <strong>हाइपो, कॉस्टिक, एच सी एल, सिट्रिक एसिड, एस एम बी एस, एंटीस्केलेंट, सॉल्ट</strong>। हर पंक्ति <strong>उपलब्ध स्टॉक</strong> और <strong>रोज़ की खपत</strong> दिखाती है, वास्तविक बनाम अपेक्षित — ताकि कम होने से पहले मंगा लें।",
          voice: "साइड मेन्यू में अगला, इन्वेंटरी। यह आपके ट्रीटमेंट केमिकल पर नज़र रखती है — हाइपो, कॉस्टिक, एच सी एल, सिट्रिक एसिड, एस एम बी एस, एंटीस्केलेंट और सॉल्ट। हर पंक्ति दिखाती है कि स्टॉक में क्या है और रोज़ कितना इस्तेमाल हो रहा है, वास्तविक बनाम अपेक्षित — ताकि कुछ भी खत्म होने से बहुत पहले आप मंगा लें।",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — अलार्म जो खुद ढूँढ लें',
          body: "<strong>इनसाइट लिस्ट</strong> यहीं सिस्टम आपके लिए समस्याएँ चिह्नित करता है — <strong>खुले अलार्म</strong>, बंद, और उपलब्धियाँ, सब ऊपर गिने हुए। मैनुअल मोड में अटका पंप, ओवर-लेवल टैंक, रेंज से बाहर रीडिंग — हर एक सरल भाषा में समझ के साथ खुलता है, और आप खुद <strong>इनसाइट बना</strong> सकते हैं।",
          voice: "इनसाइट लिस्ट खोलें, और निगरानी सिस्टम आपके लिए करता है। खुले अलार्म, बंद, और उपलब्धियाँ ठीक ऊपर गिनी हुई हैं। मैनुअल मोड में छूटा पंप, ओवर-लेवल टैंक, रेंज से बाहर रीडिंग — हर एक सरल भाषा में बताता है कि क्या हुआ और क्यों मायने रखता है। इनसाइट बनाएँ से आप अपनी भी दर्ज कर सकते हैं।",
        },
        {
          label: 'डेटा इनपुट', title: 'डेटा इनपुट — दैनिक लैब रीडिंग',
          body: "जो रीडिंग सेंसर से नहीं, लैब से आती हैं — <strong>सी ओ डी, बी ओ डी, टी एस एस, सिलिका, प्रेशर, टी डी एस</strong> — वे <strong>डेटा इनपुट</strong> पर जाती हैं। <strong>खोजें या फ़िल्टर करें</strong>, मान लिखें, हो गया; या कई एक साथ के लिए <strong>फ़ाइल अपलोड</strong> करें। हर प्रविष्टि उन्हीं डैशबोर्ड में जाती है।",
          voice: "जो रीडिंग सेंसर से नहीं बल्कि लैब से आती हैं — सी ओ डी, बी ओ डी, टी एस एस, सिलिका, प्रेशर, टी डी एस — वे डेटा इनपुट पर दर्ज होती हैं। खोजें या फ़िल्टर करके पंक्ति ढूँढें, मान लिखें, हो गया। या कई एक साथ दर्ज करने के लिए फ़ाइल अपलोड करें। यहाँ दर्ज सब कुछ उन्हीं डैशबोर्ड में जाता है।",
        },
        {
          label: 'टास्क लिस्ट', title: 'टास्क लिस्ट — स्किल के अनुसार काम',
          body: "<strong>टास्क लिस्ट</strong> उन अलर्ट को काम में बदलती है: केमिकल डोज़िंग, पंप वापस ऑटो में, प्रिवेंटिव मेंटेनेंस। हर टास्क पर <strong>स्किल टैग</strong> होता है — ऑपरेटर, इलेक्ट्रिकल, मैकेनिकल — और <strong>पूर्णता स्थिति</strong>, ताकि सही व्यक्ति उठाए और कुछ छूटे नहीं।",
          voice: "टास्क लिस्ट उन अलर्ट को कार्रवाई में बदलती है। केमिकल डोज़िंग, पंप को वापस ऑटो में डालना, पंपों की प्रिवेंटिव मेंटेनेंस — हर टास्क पर एक स्किल टैग होता है, ऑपरेटर, इलेक्ट्रिकल या मैकेनिकल, और एक पूर्णता स्थिति। ताकि सही काम सही व्यक्ति तक पहुँचे, और कुछ भी छूटे नहीं।",
        },
        {
          label: 'स्काडा व्यू', title: 'स्काडा व्यू — आपका लाइव प्लांट',
          body: "<strong>स्काडा व्यू</strong> एक स्क्रीन पर आपका लाइव प्लांट है — <strong>बैग फ़िल्टर, जी एम एफ, ए सी एफ, यू एफ</strong> और <strong>आर ओ ट्रेनें</strong>, आरेख पर असली फ्लो, लेवल और पंप स्थिति चलती हुईं। इसका अपना <strong>पेज सिलेक्टर</strong> <strong>फ़िल्ट्रेशन, यू एफ</strong> और <strong>आर ओ सिस्टम</strong> दृश्यों के बीच जाता है।",
          voice: "और स्काडा व्यू आपका पूरा प्लांट, लाइव, एक स्क्रीन पर है। बैग फ़िल्टर, ग्लास मीडिया और कार्बन फ़िल्टर, यू एफ सिस्टम और आर ओ ट्रेनें — आरेख पर असली फ्लो, लेवल और पंप स्थिति चलती हुईं। इसका अपना पेज सिलेक्टर फ़िल्ट्रेशन, यू एफ और आर ओ सिस्टम दृश्यों के बीच जाता है। आप अपनी डेस्क से प्लांट में पानी को बहते देखते हैं।",
        },
        {
          label: 'सारांश', title: 'यही है आपका पूरा सेटअप',
          body: "छह फ़ीचर, एक मेन्यू: नज़र के लिए <strong>डैशबोर्ड</strong>, लाइव देखने के लिए <strong>स्काडा व्यू</strong>, अलार्म के लिए <strong>इनसाइट लिस्ट</strong>, समाधान के लिए <strong>टास्क लिस्ट</strong>, लैब रीडिंग के लिए <strong>डेटा इनपुट</strong>, केमिकल के लिए <strong>इन्वेंटरी</strong>। अंदर की पूरी ट्रेनिंग हर स्क्रीन सिखाती है — सेटअप बढ़ाने के लिए कभी भी संपर्क करें।",
          voice: "और यही है आपका पूरा सेटअप — छह फ़ीचर, सब एक ही साइड मेन्यू से। नज़र के लिए डैशबोर्ड, लाइव देखने के लिए स्काडा व्यू, अलार्म के लिए इनसाइट लिस्ट, समाधान के लिए टास्क लिस्ट, लैब रीडिंग के लिए डेटा इनपुट, और केमिकल के लिए इन्वेंटरी। अंदर की पूरी ट्रेनिंग हर स्क्रीन आपकी भाषा में सिखाती है — और इसे बढ़ाने के लिए कभी भी संपर्क करें।",
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>மெரினோ இண்டஸ்ட்ரீஸ் லிமிடெட்</em><br>அமைப்பு.',
      subtitle: 'உங்கள் ஆலைக்காக அமைத்த அனைத்தின் விரைவுச் சுற்று — பக்க மெனுவில் ஒவ்வொரு அம்சமும் எங்கே உள்ளது, என்ன செய்கிறது.',
      chapter: 'தனிப்பயன் டெமோ · மெரினோ இண்டஸ்ட்ரீஸ் லிமிடெட்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'உங்கள் பக்க மெனு — அனைத்தும் இங்கே',
          body: "<strong>மெனு ஐகானை</strong> (மேல்-இடது) தட்டி உங்கள் <strong>பக்க வழிசெலுத்தலைத்</strong> திறக்கவும். ஒவ்வொரு அம்சமும் இங்கே: <strong>டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டேட்டா இன்புட், டாஸ்க் லிஸ்ட்</strong> மற்றும் <strong>ஸ்காடா வியூ</strong>. மேலே <strong>பக்கத் தேர்வி</strong>, <strong>நுணுக்கம்</strong>, <strong>கால வரம்பு</strong> விட்ஜெட்களை இயக்குகின்றன; <strong>ரிஃப்ரெஷ்</strong> & <strong>டவுன்லோட்</strong> மேல்-வலது.",
          voice: "வரவேற்கிறேன் — இதோ மெரினோ இண்டஸ்ட்ரீஸ் லிமிடெட்டுக்காக அமைத்த அனைத்தும், அதில் நகரும் வழியும். மேல் இடதில் மெனு ஐகானைத் தட்டி பக்க வழிசெலுத்தலைத் திறக்கவும். அனைத்தும் இங்கே: டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், டேட்டா இன்புட், டாஸ்க் லிஸ்ட், மற்றும் ஸ்காடா வியூ. ஒவ்வொன்றையும் இதே மெனுவிலிருந்து திறப்போம். மேலே உள்ள பட்டியில் — பக்கத் தேர்வி, நுணுக்கம், கால வரம்பு ஒவ்வொரு விட்ஜெட்டையும் இயக்குகின்றன, வலதில் ரிஃப்ரெஷ், டவுன்லோட்.",
        },
        {
          label: 'டாஷ்போர்டு', title: 'டாஷ்போர்டு — ஒரே பார்வையில் ஆலை',
          body: "பக்க மெனுவிலிருந்து <strong>டாஷ்போர்டைத்</strong> திறக்கவும். <strong>பக்கத் தேர்வி</strong> உங்கள் <strong>யூனிஃபைடு டாஷ்போர்டு</strong> மற்றும் <strong>டீடெயில்ட் அனலிட்டிக்ஸ்</strong> காட்சிகளுக்கு இடையே மாறுகிறது. இங்கே <strong>பிளாண்ட் சம்மரி</strong> இன்லெட் ஓட்டம், ஆர் ஓ ஃபீட், மீட்பு, ரிஜெக்ட்டை எளிய கார்டுகளாக வைக்கிறது — ஒரே பார்வை, நாள் எப்படி என்று தெரியும்.",
          voice: "பக்க மெனுவிலிருந்து டாஷ்போர்டைத் திறக்கவும். மேலே உள்ள பக்கத் தேர்வி உங்கள் யூனிஃபைடு டாஷ்போர்டு மற்றும் டீடெயில்ட் அனலிட்டிக்ஸ் காட்சிக்கு இடையே மாறுகிறது. இங்கே பிளாண்ட் சம்மரி உங்கள் இன்லெட் ஓட்டம், ஆர் ஓ ஃபீட், மீட்பு, ரிஜெக்ட்டை எளிய கார்டுகளாக வைக்கிறது. ஒரே பார்வை, நாள் எப்படி நடக்கிறது என்று தெரிந்துவிடும்.",
        },
        {
          label: 'இன்வென்டரி', title: 'இன்வென்டரி — வேதிப்பொருள் இருப்பு',
          body: "பக்க மெனுவில் <strong>இன்வென்டரி</strong> உங்கள் சுத்திகரிப்பு வேதிப்பொருட்களைக் கண்காணிக்கிறது — <strong>ஹைப்போ, காஸ்டிக், எச் சி எல், சிட்ரிக் அமிலம், எஸ் எம் பி எஸ், ஆன்ட்டிஸ்கேலன்ட், உப்பு</strong>. ஒவ்வொரு வரிசையும் <strong>கையிருப்பு</strong> மற்றும் <strong>தினசரி நுகர்வு</strong> காட்டுகிறது, உண்மை vs எதிர்பார்ப்பு — குறையும் முன் ஆர்டர் செய்ய.",
          voice: "பக்க மெனுவில் அடுத்து, இன்வென்டரி. இது உங்கள் சுத்திகரிப்பு வேதிப்பொருட்களைக் கண்காணிக்கிறது — ஹைப்போ, காஸ்டிக், எச் சி எல், சிட்ரிக் அமிலம், எஸ் எம் பி எஸ், ஆன்ட்டிஸ்கேலன்ட், உப்பு. ஒவ்வொரு வரிசையும் கையிருப்பில் என்ன, தினமும் எவ்வளவு பயன்படுகிறது என்று காட்டுகிறது, உண்மை vs எதிர்பார்ப்பு — எதுவும் தீரும் முன் நீங்கள் ஆர்டர் செய்யலாம்.",
        },
        {
          label: 'இன்சைட்ஸ்', title: 'இன்சைட் லிஸ்ட் — உங்களைத் தேடும் அலாரம்கள்',
          body: "<strong>இன்சைட் லிஸ்ட்</strong> தான் சிஸ்டம் உங்களுக்குச் சிக்கல்களைச் சுட்டிக்காட்டும் இடம் — <strong>திறந்த அலாரம்கள்</strong>, மூடியவை, சாதனைகள், எல்லாம் மேலே எண்ணிக்கையுடன். மேனுவல் மோடில் நின்ற பம்ப், ஓவர்-லெவல் தொட்டி, வரம்பு மீறிய அளவீடு — ஒவ்வொன்றும் எளிய மொழியில் விளக்கத்துடன் திறக்கும், நீங்களும் <strong>இன்சைட் உருவாக்கலாம்</strong>.",
          voice: "இன்சைட் லிஸ்ட் திறக்கவும், கண்காணிப்பை சிஸ்டமே செய்கிறது. திறந்த அலாரம்கள், மூடியவை, சாதனைகள் மேலேயே எண்ணப்பட்டுள்ளன. மேனுவல் மோடில் விடப்பட்ட பம்ப், ஓவர்-லெவல் தொட்டி, வரம்பு மீறிய அளவீடு — ஒவ்வொன்றும் என்ன நடந்தது, ஏன் முக்கியம் என்பதை எளிய மொழியில் விளக்குகிறது. இன்சைட் உருவாக்கு மூலம் உங்களுடையதையும் பதிவு செய்யலாம்.",
        },
        {
          label: 'டேட்டா இன்புட்', title: 'டேட்டா இன்புட் — தினசரி ஆய்வக அளவீடு',
          body: "சென்சாரிலிருந்து அல்லாமல் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் — <strong>சி ஓ டி, பி ஓ டி, டி எஸ் எஸ், சிலிக்கா, அழுத்தம், டி டி எஸ்</strong> — <strong>டேட்டா இன்புட்டில்</strong> செல்கின்றன. <strong>தேடு அல்லது வடிகட்டு</strong>, மதிப்பை உள்ளிடு, முடிந்தது; அல்லது பலவற்றை ஒரே நேரத்தில் <strong>ஃபைல் அப்லோட்</strong> செய். ஒவ்வொரு பதிவும் அதே டாஷ்போர்டுகளுக்குச் செல்லும்.",
          voice: "சென்சாரிலிருந்து அல்லாமல் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் — சி ஓ டி, பி ஓ டி, டி எஸ் எஸ், சிலிக்கா, அழுத்தம், டி டி எஸ் — டேட்டா இன்புட்டில் பதிவாகும். தேடி அல்லது வடிகட்டி வரிசையைக் கண்டுபிடி, மதிப்பை உள்ளிடு, முடிந்தது. அல்லது பலவற்றை ஒரே நேரத்தில் உள்ளிட ஃபைல் அப்லோட் செய். இங்கே பதிவு செய்யும் அனைத்தும் அதே டாஷ்போர்டுகளுக்குச் செல்லும்.",
        },
        {
          label: 'டாஸ்க் லிஸ்ட்', title: 'டாஸ்க் லிஸ்ட் — திறனுக்கேற்ப வேலை',
          body: "<strong>டாஸ்க் லிஸ்ட்</strong> அந்த அலர்ட்களை வேலையாக மாற்றுகிறது: கெமிக்கல் டோசிங், பம்பை மீண்டும் ஆட்டோவில், ப்ரிவென்டிவ் மெயின்டெனன்ஸ். ஒவ்வொரு பணிக்கும் <strong>திறன் குறிச்சொல்</strong> — ஆபரேட்டர், எலெக்ட்ரிக்கல், மெக்கானிக்கல் — மற்றும் <strong>நிறைவு நிலை</strong>, சரியான நபர் எடுக்க, எதுவும் தவறாமல்.",
          voice: "டாஸ்க் லிஸ்ட் அந்த அலர்ட்களைச் செயலாக மாற்றுகிறது. கெமிக்கல் டோசிங், பம்பை மீண்டும் ஆட்டோவில் போடுவது, பம்புகளின் ப்ரிவென்டிவ் மெயின்டெனன்ஸ் — ஒவ்வொரு பணிக்கும் ஒரு திறன் குறிச்சொல், ஆபரேட்டர், எலெக்ட்ரிக்கல் அல்லது மெக்கானிக்கல், மற்றும் ஒரு நிறைவு நிலை. சரியான வேலை சரியான நபரை அடைகிறது, எதுவும் தவறவிடப்படவில்லை.",
        },
        {
          label: 'ஸ்காடா வியூ', title: 'ஸ்காடா வியூ — உங்கள் நேரடி ஆலை',
          body: "<strong>ஸ்காடா வியூ</strong> ஒரே திரையில் உங்கள் நேரடி ஆலை — <strong>பேக் ஃபில்டர், ஜி எம் எஃப், ஏ சி எஃப், யு எஃப்</strong> மற்றும் <strong>ஆர் ஓ ட்ரெயின்கள்</strong>, வரைபடத்தில் உண்மையான ஓட்டம், நிலை, பம்ப் நிலை அசைந்து. அதன் சொந்த <strong>பக்கத் தேர்வி</strong> <strong>ஃபில்டரேஷன், யு எஃப், ஆர் ஓ சிஸ்டம்</strong> காட்சிகளுக்கு இடையே நகர்கிறது.",
          voice: "ஸ்காடா வியூ உங்கள் முழு ஆலையும், நேரலையில், ஒரே திரையில். பேக் ஃபில்டர்கள், கிளாஸ் மீடியா மற்றும் கார்பன் ஃபில்டர்கள், யு எஃப் சிஸ்டம், ஆர் ஓ ட்ரெயின்கள் — வரைபடத்திலேயே உண்மையான ஓட்டம், நிலை, பம்ப் நிலைகள் அசைந்து. அதன் சொந்த பக்கத் தேர்வி ஃபில்டரேஷன், யு எஃப், ஆர் ஓ சிஸ்டம் காட்சிகளுக்கு இடையே நகர்கிறது. உங்கள் மேசையிலிருந்தே ஆலையில் நீர் ஓடுவதைப் பார்க்கிறீர்கள்.",
        },
        {
          label: 'நிறைவு', title: 'இதுதான் உங்கள் முழு அமைப்பு',
          body: "ஆறு அம்சங்கள், ஒரே மெனு: பார்வைக்கு <strong>டாஷ்போர்டு</strong>, நேரலைக்கு <strong>ஸ்காடா வியூ</strong>, அலாரம்களுக்கு <strong>இன்சைட் லிஸ்ட்</strong>, சரிசெய்ய <strong>டாஸ்க் லிஸ்ட்</strong>, ஆய்வக அளவீட்டுக்கு <strong>டேட்டா இன்புட்</strong>, வேதிப்பொருளுக்கு <strong>இன்வென்டரி</strong>. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் கற்பிக்கிறது — விரிவாக்க எப்போதும் தொடர்பு கொள்ளுங்கள்.",
          voice: "இதுதான் உங்கள் முழு அமைப்பு — ஆறு அம்சங்கள், அனைத்தும் ஒரே பக்க மெனுவிலிருந்து. பார்வைக்கு டாஷ்போர்டு, நேரலைக்கு ஸ்காடா வியூ, அலாரம்களுக்கு இன்சைட் லிஸ்ட், சரிசெய்ய டாஸ்க் லிஸ்ட், ஆய்வக அளவீட்டுக்கு டேட்டா இன்புட், வேதிப்பொருளுக்கு இன்வென்டரி. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் உங்கள் மொழியில் கற்பிக்கிறது — விரிவாக்க விரும்பினால் எப்போதும் தொடர்பு கொள்ளுங்கள்.",
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>मेरिनो इंडस्ट्रीज लिमिटेड</em><br>सेटअप.',
      subtitle: 'तुमच्या प्लांटसाठी तयार केलेल्या प्रत्येक गोष्टीचा जलद दौरा — साइड मेनूमध्ये प्रत्येक फीचर कुठे आहे आणि काय करते.',
      chapter: 'वैयक्तिक डेमो · मेरिनो इंडस्ट्रीज लिमिटेड',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'तुमचा साइड मेनू — सर्व काही इथेच',
          body: "<strong>मेनू आयकॉन</strong> (वर-डावीकडे) दाबा आणि तुमचे <strong>साइड नेव्हिगेशन</strong> उघडा. प्रत्येक फीचर इथेच: <strong>डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट</strong> आणि <strong>स्काडा व्ह्यू</strong>. वर <strong>पेज सिलेक्टर</strong>, <strong>ग्रॅन्युलॅरिटी</strong> व <strong>वेळ श्रेणी</strong> विजेट चालवतात; <strong>रिफ्रेश</strong> व <strong>डाउनलोड</strong> वर-उजवीकडे.",
          voice: "स्वागत आहे — हे आहे मेरिनो इंडस्ट्रीज लिमिटेडसाठी तयार केलेले सर्व काही, आणि त्यात फिरण्याची पद्धत. वर डावीकडे मेनू आयकॉन दाबा आणि साइड नेव्हिगेशन उघडा. सर्व काही इथेच आहे: डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट, डेटा इनपुट, टास्क लिस्ट, आणि स्काडा व्ह्यू. प्रत्येक आपण याच मेनूमधून उघडू. आणि वरच्या पट्टीत — पेज सिलेक्टर, ग्रॅन्युलॅरिटी आणि वेळ श्रेणी प्रत्येक विजेट चालवतात, उजवीकडे रिफ्रेश आणि डाउनलोड.",
        },
        {
          label: 'डॅशबोर्ड', title: 'डॅशबोर्ड — एका नजरेत प्लांट',
          body: "साइड मेनूमधून <strong>डॅशबोर्ड</strong> उघडा. <strong>पेज सिलेक्टर</strong> तुमच्या <strong>युनिफाइड डॅशबोर्ड</strong> आणि <strong>डिटेल्ड अ‍ॅनालिटिक्स</strong> दृश्यांमध्ये बदलतो. इथे <strong>प्लांट समरी</strong> इनलेट फ्लो, आर ओ फीड, रिकव्हरी आणि रिजेक्ट सोप्या कार्डांत मांडते — एक नजर आणि दिवसाचा हाल कळतो.",
          voice: "साइड मेनूमधून डॅशबोर्ड उघडा. वरचा पेज सिलेक्टर तुमच्या युनिफाइड डॅशबोर्ड आणि डिटेल्ड अ‍ॅनालिटिक्स दृश्यामध्ये बदलतो. इथे प्लांट समरी तुमचे इनलेट फ्लो, आर ओ फीड, रिकव्हरी आणि रिजेक्ट सोप्या कार्डांत मांडते. एक नजर, आणि दिवस कसा चालला आहे ते कळते.",
        },
        {
          label: 'इन्व्हेंटरी', title: 'इन्व्हेंटरी — केमिकल स्टॉक',
          body: "साइड मेनूमध्ये <strong>इन्व्हेंटरी</strong> तुमच्या ट्रीटमेंट केमिकलवर लक्ष ठेवते — <strong>हायपो, कॉस्टिक, एच सी एल, सिट्रिक अ‍ॅसिड, एस एम बी एस, अँटिस्केलंट, सॉल्ट</strong>. प्रत्येक ओळ <strong>उपलब्ध स्टॉक</strong> व <strong>रोजचा वापर</strong> दाखवते, वास्तविक विरुद्ध अपेक्षित — कमी होण्याआधी मागवण्यासाठी.",
          voice: "साइड मेनूमध्ये पुढे, इन्व्हेंटरी. ती तुमच्या ट्रीटमेंट केमिकलवर लक्ष ठेवते — हायपो, कॉस्टिक, एच सी एल, सिट्रिक अ‍ॅसिड, एस एम बी एस, अँटिस्केलंट आणि सॉल्ट. प्रत्येक ओळ स्टॉकमध्ये काय आहे आणि रोज किती वापरले जाते ते दाखवते, वास्तविक विरुद्ध अपेक्षित — काहीही संपण्याआधीच तुम्ही मागवू शकता.",
        },
        {
          label: 'इनसाइट्स', title: 'इनसाइट लिस्ट — तुम्हाला शोधणारे अलार्म',
          body: "<strong>इनसाइट लिस्ट</strong> इथेच सिस्टम तुमच्यासाठी समस्या दाखवते — <strong>खुले अलार्म</strong>, बंद, आणि यश, सर्व वर मोजलेले. मॅन्युअल मोडमध्ये अडकलेला पंप, ओव्हर-लेव्हल टँक, रेंजबाहेर रीडिंग — प्रत्येक सोप्या भाषेत स्पष्टीकरणासह उघडते, आणि तुम्ही स्वतः <strong>इनसाइट तयार</strong> करू शकता.",
          voice: "इनसाइट लिस्ट उघडा, आणि देखरेख सिस्टम तुमच्यासाठी करते. खुले अलार्म, बंद, आणि यश अगदी वर मोजलेले आहेत. मॅन्युअल मोडमध्ये सुटलेला पंप, ओव्हर-लेव्हल टँक, रेंजबाहेर रीडिंग — प्रत्येक सोप्या भाषेत सांगते काय झाले आणि का महत्त्वाचे आहे. इनसाइट तयार कराद्वारे तुम्ही तुमचेही नोंदवू शकता.",
        },
        {
          label: 'डेटा इनपुट', title: 'डेटा इनपुट — रोजची लॅब रीडिंग',
          body: "जी रीडिंग सेन्सरकडून नव्हे तर लॅबकडून येतात — <strong>सी ओ डी, बी ओ डी, टी एस एस, सिलिका, प्रेशर, टी डी एस</strong> — ती <strong>डेटा इनपुट</strong>वर जातात. <strong>शोधा किंवा फिल्टर करा</strong>, मूल्य टाका, झाले; किंवा अनेक एकाच वेळी <strong>फाइल अपलोड</strong> करा. प्रत्येक नोंद त्याच डॅशबोर्डमध्ये जाते.",
          voice: "जी रीडिंग सेन्सरकडून नव्हे तर लॅबकडून येतात — सी ओ डी, बी ओ डी, टी एस एस, सिलिका, प्रेशर, टी डी एस — ती डेटा इनपुटवर नोंदवली जातात. शोधा किंवा फिल्टर करून ओळ शोधा, मूल्य टाका, झाले. किंवा अनेक एकाच वेळी नोंदवण्यासाठी फाइल अपलोड करा. इथे नोंदवलेले सर्व त्याच डॅशबोर्डमध्ये जाते.",
        },
        {
          label: 'टास्क लिस्ट', title: 'टास्क लिस्ट — स्किलनुसार काम',
          body: "<strong>टास्क लिस्ट</strong> त्या अलर्टचे कामात रूपांतर करते: केमिकल डोसिंग, पंप पुन्हा ऑटोमध्ये, प्रिव्हेंटिव्ह मेंटेनन्स. प्रत्येक टास्कवर <strong>स्किल टॅग</strong> — ऑपरेटर, इलेक्ट्रिकल, मेकॅनिकल — आणि <strong>पूर्णता स्थिती</strong>, म्हणजे योग्य व्यक्ती उचलते आणि काही सुटत नाही.",
          voice: "टास्क लिस्ट त्या अलर्टचे कृतीत रूपांतर करते. केमिकल डोसिंग, पंप पुन्हा ऑटोमध्ये टाकणे, पंपांची प्रिव्हेंटिव्ह मेंटेनन्स — प्रत्येक टास्कवर एक स्किल टॅग असतो, ऑपरेटर, इलेक्ट्रिकल किंवा मेकॅनिकल, आणि एक पूर्णता स्थिती. म्हणजे योग्य काम योग्य व्यक्तीकडे पोहोचते, आणि काहीही सुटत नाही.",
        },
        {
          label: 'स्काडा व्ह्यू', title: 'स्काडा व्ह्यू — तुमचा लाइव्ह प्लांट',
          body: "<strong>स्काडा व्ह्यू</strong> एका स्क्रीनवर तुमचा लाइव्ह प्लांट — <strong>बॅग फिल्टर, जी एम एफ, ए सी एफ, यू एफ</strong> आणि <strong>आर ओ ट्रेन</strong>, आकृतीवर खरे फ्लो, लेव्हल आणि पंप स्थिती हलताना. त्याचा स्वतःचा <strong>पेज सिलेक्टर</strong> <strong>फिल्ट्रेशन, यू एफ</strong> आणि <strong>आर ओ सिस्टम</strong> दृश्यांमध्ये जातो.",
          voice: "आणि स्काडा व्ह्यू तुमचा संपूर्ण प्लांट, लाइव्ह, एका स्क्रीनवर. बॅग फिल्टर, ग्लास मीडिया आणि कार्बन फिल्टर, यू एफ सिस्टम आणि आर ओ ट्रेन — आकृतीवरच खरे फ्लो, लेव्हल आणि पंप स्थिती हलताना. त्याचा स्वतःचा पेज सिलेक्टर फिल्ट्रेशन, यू एफ आणि आर ओ सिस्टम दृश्यांमध्ये जातो. तुम्ही तुमच्या डेस्कवरूनच प्लांटमध्ये पाणी वाहताना पाहता.",
        },
        {
          label: 'सारांश', title: 'हाच तुमचा संपूर्ण सेटअप',
          body: "सहा फीचर, एक मेनू: नजरेसाठी <strong>डॅशबोर्ड</strong>, लाइव्ह पाहण्यासाठी <strong>स्काडा व्ह्यू</strong>, अलार्मसाठी <strong>इनसाइट लिस्ट</strong>, उपायासाठी <strong>टास्क लिस्ट</strong>, लॅब रीडिंगसाठी <strong>डेटा इनपुट</strong>, केमिकलसाठी <strong>इन्व्हेंटरी</strong>. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन शिकवते — सेटअप वाढवण्यासाठी कधीही संपर्क करा.",
          voice: "आणि हाच तुमचा संपूर्ण सेटअप — सहा फीचर, सर्व एकाच साइड मेनूमधून. नजरेसाठी डॅशबोर्ड, लाइव्ह पाहण्यासाठी स्काडा व्ह्यू, अलार्मसाठी इनसाइट लिस्ट, उपायासाठी टास्क लिस्ट, लॅब रीडिंगसाठी डेटा इनपुट, आणि केमिकलसाठी इन्व्हेंटरी. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन तुमच्या भाषेत शिकवते — आणि सेटअप वाढवायचा असल्यास कधीही संपर्क करा.",
        },
      ],
    },
  },
};

export default lesson;
