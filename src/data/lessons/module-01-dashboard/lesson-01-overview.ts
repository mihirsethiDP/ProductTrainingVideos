import type { Lesson } from '../../types';

// BASE_URL ends with '/' and respects the Vite `base` (e.g. GitHub Pages subpath)
const BASE = `${import.meta.env.BASE_URL}screenshots/module-01`;

/**
 * Lesson 1 — Dashboard Overview.
 * Layouts are language-independent: screenshots, spotlights and the guide
 * cursor path. `cursor` keyframes fire as speech progress (0..1 of the voice
 * text) passes `at`, moving the animated pointer to that spot on the stage.
 */
const lesson: Lesson = {
  id: 'lesson-01-overview',
  moduleId: 'module-01-dashboard',
  lessonNumber: 1,
  estimatedMinutes: 3,
  screenshots: {
    fullDashboard: `${BASE}/fullDashboard.jpg`,
    pageSelector: `${BASE}/pageSelector.png`,
    timeSelector: `${BASE}/timeSelector.png`,
    controls: `${BASE}/controls.png`,
    downloadMenu: `${BASE}/downloadMenu.png`,
    manageDashboards: `${BASE}/manageDashboards.png`,
    shareModal: `${BASE}/shareModal.png`,
  },
  layouts: [
    { mode: 'showcase' },
    {
      mode: 'detail', screenshot: 'pageSelector',
      spotlight: { top: '0%', left: '0%', width: '100%', height: '100%' },
      caption: 'Page Selector',
      cursor: [
        { at: 0.05, x: 50, y: 14, click: true },
        { at: 0.35, x: 50, y: 45 },
        { at: 0.6, x: 50, y: 70 },
        { at: 0.85, x: 50, y: 88 },
      ],
    },
    {
      mode: 'detail', screenshot: 'timeSelector',
      spotlight: { top: '0%', left: '0%', width: '100%', height: '100%' },
      caption: 'Time Range Selector',
      cursor: [
        { at: 0.05, x: 18, y: 50 },
        { at: 0.22, x: 18, y: 50, click: true },
        { at: 0.45, x: 50, y: 50, click: true },
        { at: 0.7, x: 80, y: 50 },
      ],
    },
    {
      mode: 'detail', screenshot: 'controls',
      spotlight: { top: '0%', left: '0%', width: '23%', height: '100%' },
      caption: 'Refresh',
      cursor: [
        { at: 0.08, x: 11, y: 50, click: true },
        { at: 0.55, x: 11, y: 50, click: true },
      ],
    },
    {
      mode: 'detail', screenshot: 'downloadMenu',
      spotlight: { top: '0%', left: '10%', width: '65%', height: '100%' },
      caption: 'Download Menu',
      cursor: [
        { at: 0.05, x: 40, y: 18, click: true },
        { at: 0.25, x: 40, y: 38 },
        { at: 0.45, x: 40, y: 58 },
        { at: 0.65, x: 40, y: 78 },
      ],
    },
    {
      mode: 'detail', screenshot: 'manageDashboards',
      spotlight: null,
      caption: 'Manage Dashboards Panel',
      cursor: [
        { at: 0.05, x: 50, y: 12, click: true },
        { at: 0.3, x: 14, y: 38 },
        { at: 0.5, x: 88, y: 20 },
        { at: 0.72, x: 92, y: 42, click: true },
      ],
    },
    {
      mode: 'detail', screenshot: 'shareModal',
      spotlight: null,
      caption: 'Share Dashboard',
      cursor: [
        { at: 0.05, x: 50, y: 10, click: true },
        { at: 0.25, x: 38, y: 30 },
        { at: 0.42, x: 70, y: 30 },
        { at: 0.55, x: 88, y: 30, click: true },
        { at: 0.75, x: 50, y: 62 },
        { at: 0.88, x: 88, y: 62, click: true },
      ],
    },
  ],
  content: {
    en: {
      title: 'Your <em>Dashboard,</em><br>end to end.',
      subtitle: "Sensors stream data every minute from your plant. The dashboard turns that stream into something you can act on. In the next few steps, you'll learn every control that lives at the top of the page.",
      chapter: "Chapter One · The Operator's Cockpit",
      steps: [
        {
          label: 'Tour', title: 'A quick tour of your Dashboard',
          body: "This is your complete dashboard, end to end. At the top, you'll find the <strong>Map & Tickets</strong>. Below that, <strong>Plant Flow & Efficiency</strong> — the heartbeat of treatment performance. Then <strong>Inlet/Outlet flows</strong>, <strong>Energy Consumption</strong>, <strong>Treated Water Quality</strong>, and <strong>Aeration Health</strong>. Sensors push fresh data here every minute. Watch the tour, then we'll dive into the controls that drive it all.",
          voice: "Hi there, and welcome! I'm Riya, your guide through DigitalPaani. What you're looking at is your complete dashboard — every widget your plant uses, end to end. At the top, you have the map and tickets. Below that, plant flow and efficiency, the heartbeat of treatment performance. Then inlet and outlet flows, energy consumption, treated water quality, and aeration health. Sensors push fresh readings here every single minute. Take a moment to see the full picture. In the next steps, we'll dive into the controls at the top that bring all of this to life.",
        },
        {
          label: 'Page Selector', title: 'Switch between dashboard pages',
          body: "In the top-left, the <strong>Page Selector</strong> lets you jump between dashboards. Each plant can have multiple dashboards — for instance, separate pages for <strong>Primary, Secondary, and Tertiary</strong> treatment stages, or for different facilities entirely.",
          voice: "Let's start in the top left. This is your Page Selector. Click it, and you'll see every dashboard set up for your plant. You can create separate pages for primary, secondary, and tertiary treatment stages, or even for entirely different facilities. Organize them however makes sense for your team.",
          tip: { type: 'tipLabel', text: "Create as many dashboards as you need — there's no limit." },
        },
        {
          label: 'Time Range', title: 'Choose the time window',
          body: "On the right, set the <strong>time range</strong> for every widget on the page. Pick a granularity (Minutes, Hours, Days), then choose a preset like <em>Last 24 Hours</em> or <em>Last 30 Days</em>, or punch in a custom From / To window. Every widget on the dashboard re-renders to match.",
          voice: "Over on the right, you'll find the Time Range selector. First, pick your granularity. Minutes, hours, or days. Then choose a preset, like the last 24 hours or last 30 days. Or, set a custom From and To window. Whatever you pick, every widget on this dashboard updates to match.",
          tip: { type: 'rememberLabel', text: 'The time range applies globally — Refresh, Download, and every widget all respect this selection.' },
        },
        {
          label: 'Refresh', title: 'Refresh — pull the latest data',
          body: "The <strong>Refresh</strong> icon pulls the most recent sensor readings into every widget right now. Useful when you don't want to wait for the auto-refresh, or when you've just made a change on-site and want to confirm the data flowing in.",
          voice: "Next up, the Refresh button. It pulls the latest sensor readings into every widget on the page, instantly. Use it when you don't want to wait for the auto-refresh, or when you've just adjusted something on-site and want to see the impact right away.",
        },
        {
          label: 'Download', title: 'Download — three export formats',
          body: "The <strong>Download</strong> icon offers three formats. <strong>Single-page PDF</strong> captures the whole dashboard as one image. <strong>A4 PDF</strong> paginates everything for printing or sharing. <strong>Excel</strong> exports the raw data behind any graph widgets — only graph widgets, not gauges or tickets.",
          voice: "The Download button gives you three export options. Single page PDF captures the whole dashboard as one tall image. A4 PDF paginates everything cleanly for printing or sharing. And Excel exports the raw data behind your graph widgets. One important note. Excel only works for graph widgets, not gauges or tickets. And all three formats respect your selected time range.",
          tip: { type: 'noteLabel', text: "All three formats respect the time range you've selected." },
        },
        {
          label: 'Manage', title: 'Manage Dashboards & Reports',
          body: "The <strong>gear icon</strong> opens your dashboard management panel — a list view of every dashboard set up for this plant. From here you can <strong>set a default dashboard</strong> (the one that opens first when you log in), add a new page, edit, clone, or delete a dashboard.",
          voice: "The gear icon is your control center for dashboards. Click it, and you'll see a list of every dashboard at your plant. From here, you can set a default dashboard, the one that opens first when you log in. You can add a new page, edit, clone an existing dashboard, or delete one you no longer need. Cloning is especially handy when you want to spin up a similar dashboard quickly.",
          tip: { type: 'proTipLabel', text: 'Cloning is the fastest way to spin up a similar dashboard for a new asset.' },
        },
        {
          label: 'Share', title: 'Share Page with your team',
          body: "The <strong>Share</strong> icon opens a dialog where you can grant other users access to this dashboard. Type a user's email, choose their <strong>Permission</strong> level (View only, for now), and click the plus icon to add them. You'll see a list of everyone with access, and you can revoke it anytime with the trash icon.",
          voice: "Finally, the Share icon. Click it, and a dialog opens where you can grant other users access to this dashboard. Type their email, pick their permission level — currently View only — and click the plus icon to add them. You'll see a list of everyone with access. To revoke someone's access, just click the trash icon next to their name. That's it! You now know every control at the top of your dashboard. In the next lesson, we'll dive into the widgets themselves.",
          tip: { type: 'upNextLabel', text: "Next lesson: we'll explore the widgets themselves." },
        },
      ],
    },
    hi: {
      title: 'आपका <em>डैशबोर्ड,</em><br>शुरू से अंत तक।',
      subtitle: 'आपके प्लांट से सेंसर हर मिनट डेटा भेजते हैं। डैशबोर्ड उस डेटा को ऐसी जानकारी में बदलता है जिस पर आप कार्रवाई कर सकें।',
      chapter: 'अध्याय एक · ऑपरेटर का कॉकपिट',
      steps: [
        {
          label: 'टूर', title: 'आपके डैशबोर्ड का त्वरित अवलोकन',
          body: 'यह आपका पूरा डैशबोर्ड है, शुरू से अंत तक। ऊपर, <strong>मानचित्र और टिकट</strong> मिलेंगे। उसके नीचे, <strong>प्लांट प्रवाह और दक्षता</strong> — उपचार प्रदर्शन की धड़कन। फिर <strong>इनलेट/आउटलेट प्रवाह</strong>, <strong>ऊर्जा खपत</strong>, <strong>उपचारित जल गुणवत्ता</strong>, और <strong>वातन स्वास्थ्य</strong>।',
          voice: 'नमस्ते, और स्वागत है! मैं रिया हूँ, डिजिटलपानी के माध्यम से आपकी मार्गदर्शक। आप जो देख रहे हैं वह आपका पूरा डैशबोर्ड है — आपके प्लांट का हर विजेट, शुरू से अंत तक। ऊपर, आपके पास मानचित्र और टिकट हैं। उसके नीचे, प्लांट प्रवाह और दक्षता, उपचार प्रदर्शन की धड़कन। फिर इनलेट और आउटलेट प्रवाह, ऊर्जा खपत, उपचारित जल की गुणवत्ता, और वातन स्वास्थ्य। सेंसर हर एक मिनट में नया डेटा भेजते हैं। पूरी तस्वीर देखने के लिए एक पल लें। अगले चरणों में, हम ऊपर के नियंत्रणों में गहराई से जाएँगे जो इन सब को जीवंत करते हैं।',
        },
        {
          label: 'पेज चयनकर्ता', title: 'डैशबोर्ड पृष्ठों के बीच स्विच करें',
          body: 'ऊपर-बाएँ कोने में, <strong>पेज चयनकर्ता</strong> आपको डैशबोर्ड के बीच स्विच करने देता है। हर प्लांट के पास कई डैशबोर्ड हो सकते हैं — जैसे <strong>प्राथमिक, द्वितीयक, और तृतीयक</strong> उपचार चरणों के लिए अलग-अलग पेज।',
          voice: 'चलिए ऊपर बाएँ कोने से शुरू करते हैं। यह आपका पेज सिलेक्टर है। इस पर क्लिक करें, और आप अपने प्लांट के लिए सेट किए गए हर डैशबोर्ड को देखेंगे। प्राथमिक, द्वितीयक, और तृतीयक उपचार चरणों के लिए अलग-अलग पेज बना सकते हैं।',
          tip: { type: 'tipLabel', text: 'जितने चाहें उतने डैशबोर्ड बनाएँ — कोई सीमा नहीं है।' },
        },
        {
          label: 'समय अवधि', title: 'समय की खिड़की चुनें',
          body: 'दाईं ओर, पेज पर हर विजेट के लिए <strong>समय अवधि</strong> सेट करें। ग्रैन्युलैरिटी चुनें (मिनट, घंटे, दिन), फिर <em>पिछले 24 घंटे</em> जैसा प्रीसेट चुनें।',
          voice: 'दाईं ओर, आपको समय अवधि चयनकर्ता मिलेगा। पहले अपनी ग्रैन्युलैरिटी चुनें। मिनट, घंटे, या दिन। फिर एक प्रीसेट चुनें, जैसे पिछले 24 घंटे या पिछले 30 दिन। आप जो भी चुनें, इस डैशबोर्ड पर हर विजेट उसके अनुसार अपडेट हो जाता है।',
          tip: { type: 'rememberLabel', text: 'समय अवधि सब जगह लागू होती है।' },
        },
        {
          label: 'रिफ्रेश', title: 'रिफ्रेश — नवीनतम डेटा प्राप्त करें',
          body: '<strong>रिफ्रेश</strong> आइकन हर विजेट में नवीनतम सेंसर रीडिंग्स को तुरंत लाता है।',
          voice: 'अगला है रिफ्रेश बटन। यह पेज पर हर विजेट में नवीनतम सेंसर रीडिंग्स को तुरंत खींच लाता है। इसका उपयोग तब करें जब आप ऑटो-रिफ्रेश का इंतज़ार नहीं करना चाहते।',
        },
        {
          label: 'डाउनलोड', title: 'डाउनलोड — तीन निर्यात प्रारूप',
          body: '<strong>डाउनलोड</strong> आइकन तीन प्रारूप देता है। <strong>सिंगल-पेज पीडीएफ</strong>, <strong>A4 पीडीएफ</strong>, और <strong>एक्सेल</strong> — केवल ग्राफ़ विजेट के लिए।',
          voice: 'डाउनलोड बटन आपको तीन निर्यात विकल्प देता है। सिंगल-पेज पीडीएफ पूरे डैशबोर्ड को एक लंबी छवि के रूप में कैप्चर करता है। A4 पीडीएफ सब कुछ प्रिंटिंग के लिए पेजों में बाँटता है। और एक्सेल आपके ग्राफ़ विजेट के पीछे का कच्चा डेटा निर्यात करता है। एक महत्वपूर्ण बात — एक्सेल केवल ग्राफ़ विजेट के लिए काम करता है।',
          tip: { type: 'noteLabel', text: 'तीनों प्रारूप आपकी चुनी हुई समय अवधि का पालन करते हैं।' },
        },
        {
          label: 'प्रबंधन', title: 'डैशबोर्ड और रिपोर्ट प्रबंधन',
          body: '<strong>गियर आइकन</strong> डैशबोर्ड प्रबंधन पैनल खोलता है। यहाँ से <strong>डिफ़ॉल्ट डैशबोर्ड सेट करें</strong>, नया पेज जोड़ें, संपादित करें, क्लोन करें, या हटाएँ।',
          voice: 'गियर आइकन डैशबोर्ड के लिए आपका नियंत्रण केंद्र है। आप डिफ़ॉल्ट डैशबोर्ड सेट कर सकते हैं — वह जो लॉगिन करते ही पहले खुलता है। आप नया पेज जोड़ सकते हैं, संपादित कर सकते हैं, मौजूदा डैशबोर्ड को क्लोन कर सकते हैं, या जो अब चाहिए नहीं उसे हटा सकते हैं।',
          tip: { type: 'proTipLabel', text: 'क्लोनिंग एक नए संपत्ति के लिए जल्दी से डैशबोर्ड बनाने का सबसे तेज़ तरीका है।' },
        },
        {
          label: 'साझा करें', title: 'अपनी टीम के साथ साझा करें',
          body: '<strong>शेयर</strong> आइकन एक डायलॉग खोलता है जहाँ आप दूसरे उपयोगकर्ताओं को इस डैशबोर्ड तक पहुँच दे सकते हैं।',
          voice: 'अंत में, शेयर आइकन। इस पर क्लिक करें, और एक डायलॉग खुलता है जहाँ आप दूसरे उपयोगकर्ताओं को पहुँच दे सकते हैं। उनका ईमेल दर्ज करें, अनुमति स्तर चुनें — अभी केवल देखें — और प्लस आइकन पर क्लिक करें। किसी की पहुँच रद्द करने के लिए, ट्रैश आइकन पर क्लिक करें। अब आप अपने डैशबोर्ड के ऊपर के हर कंट्रोल को जानते हैं। अगले पाठ में, हम विजेट्स की गहराई में जाएँगे।',
          tip: { type: 'upNextLabel', text: 'अगला पाठ: हम विजेट्स की गहराई में जाएँगे।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>டாஷ்போர்டு,</em><br>முழுமையாக.',
      subtitle: 'உங்கள் ஆலையின் சென்சார்கள் ஒவ்வொரு நிமிடமும் தரவை அனுப்புகின்றன. டாஷ்போர்டு அந்த தரவை செயல்படக்கூடிய நுண்ணறிவாக மாற்றுகிறது.',
      chapter: 'அத்தியாயம் ஒன்று · இயக்குனரின் பணியிடம்',
      steps: [
        {
          label: 'சுற்றுப்பயணம்', title: 'உங்கள் டாஷ்போர்டின் விரைவான சுற்றுப்பயணம்',
          body: 'இது உங்கள் முழுமையான டாஷ்போர்டு. மேலே, <strong>வரைபடம் & டிக்கெட்டுகள்</strong>. அதற்குக் கீழே, <strong>ஆலை ஓட்டம் & செயல்திறன்</strong>. பின்னர் <strong>உள்ளீடு/வெளியீடு ஓட்டங்கள்</strong>, <strong>ஆற்றல் நுகர்வு</strong>, <strong>சுத்திகரிக்கப்பட்ட நீர் தரம்</strong>, மற்றும் <strong>காற்றோட்ட நலம்</strong>.',
          voice: 'வணக்கம், வரவேற்கிறேன்! நான் ரியா, டிஜிட்டல்பானி மூலம் உங்கள் வழிகாட்டி. நீங்கள் பார்ப்பது உங்கள் முழுமையான டாஷ்போர்டு — உங்கள் ஆலை பயன்படுத்தும் ஒவ்வொரு விட்ஜெட்டும். மேலே, வரைபடம் மற்றும் டிக்கெட்டுகள் உள்ளன. அதற்குக் கீழே, ஆலை ஓட்டம் மற்றும் செயல்திறன், சுத்திகரிப்பு செயல்திறனின் இதயத்துடிப்பு. பின்னர் உள்ளீடு மற்றும் வெளியீடு ஓட்டங்கள், ஆற்றல் நுகர்வு, சுத்திகரிக்கப்பட்ட நீர் தரம், மற்றும் காற்றோட்ட நலம். சென்சார்கள் ஒவ்வொரு நிமிடமும் புதிய தரவை அனுப்புகின்றன. முழுப் படத்தையும் காண ஒரு கணம் எடுத்துக் கொள்ளுங்கள். அடுத்த படிகளில், மேல் உள்ள கட்டுப்பாடுகளை ஆராய்வோம்.',
        },
        {
          label: 'பக்க தேர்வு', title: 'டாஷ்போர்டு பக்கங்களுக்கு இடையே மாறவும்',
          body: 'மேல்-இடதுபுறத்தில், <strong>பக்கம் தேர்ந்தெடுப்பான்</strong> டாஷ்போர்டுகளுக்கு இடையே நகர அனுமதிக்கிறது.',
          voice: 'மேல் இடது பகுதியில் தொடங்குவோம். இது உங்கள் பக்கம் தேர்ந்தெடுப்பான். அதை கிளிக் செய்தால், உங்கள் ஆலைக்காக அமைக்கப்பட்ட ஒவ்வொரு டாஷ்போர்டும் தெரியும்.',
          tip: { type: 'tipLabel', text: 'எத்தனை வேண்டுமானாலும் டாஷ்போர்டுகள் உருவாக்கலாம் — வரம்பு இல்லை.' },
        },
        {
          label: 'கால அளவு', title: 'கால வரம்பை தேர்ந்தெடுக்கவும்',
          body: 'வலதுபுறத்தில், ஒவ்வொரு விட்ஜெட்டுக்கும் <strong>கால வரம்பை</strong> அமைக்கவும்.',
          voice: 'வலதுபுறத்தில், கால வரம்பு தேர்ந்தெடுப்பானை காண்பீர்கள். துல்லியத்தை தேர்ந்தெடுக்கவும் — நிமிடம், மணி, அல்லது நாட்கள். பின்னர் கடந்த 24 மணி அல்லது கடந்த 30 நாட்கள் போல ஒரு முன்னமைப்பை தேர்ந்தெடுக்கவும்.',
          tip: { type: 'rememberLabel', text: 'கால வரம்பு அனைத்திற்கும் பொருந்தும்.' },
        },
        {
          label: 'ரீஃப்ரெஷ்', title: 'ரீஃப்ரெஷ் — சமீபத்திய தரவைப் பெறுங்கள்',
          body: '<strong>ரீஃப்ரெஷ்</strong> ஐகான் ஒவ்வொரு விட்ஜெட்டுக்கும் சமீபத்திய சென்சார் வாசிப்புகளை உடனடியாக கொண்டு வருகிறது.',
          voice: 'அடுத்து, ரீஃப்ரெஷ் பொத்தான். இது பக்கத்தில் உள்ள ஒவ்வொரு விட்ஜெட்டுக்கும் சமீபத்திய சென்சார் வாசிப்புகளை உடனடியாக இழுக்கிறது.',
        },
        {
          label: 'பதிவிறக்கம்', title: 'பதிவிறக்கம் — மூன்று ஏற்றுமதி வடிவங்கள்',
          body: '<strong>பதிவிறக்கம்</strong> ஐகான் மூன்று வடிவங்களை வழங்குகிறது. <strong>ஒற்றை-பக்க PDF</strong>, <strong>A4 PDF</strong>, மற்றும் <strong>எக்செல்</strong> — வரைபட விட்ஜெட்டுக்கு மட்டுமே.',
          voice: 'பதிவிறக்க பொத்தான் உங்களுக்கு மூன்று ஏற்றுமதி விருப்பங்களை வழங்குகிறது. ஒற்றை பக்க PDF முழு டாஷ்போர்டையும் ஒரு நீண்ட படமாக எடுக்கிறது. A4 PDF அனைத்தையும் அச்சிடுவதற்கு பக்கங்களாக பிரிக்கிறது. மற்றும் எக்செல் உங்கள் வரைபட விட்ஜெட்டுக்கு பின்னால் உள்ள மூல தரவை ஏற்றுமதி செய்கிறது.',
          tip: { type: 'noteLabel', text: 'மூன்று வடிவங்களும் தேர்ந்தெடுக்கப்பட்ட கால வரம்பை பின்பற்றுகின்றன.' },
        },
        {
          label: 'நிர்வாகம்', title: 'டாஷ்போர்டு & அறிக்கைகள் நிர்வாகம்',
          body: '<strong>கியர் ஐகான்</strong> டாஷ்போர்டு நிர்வாக பேனலை திறக்கிறது.',
          voice: 'கியர் ஐகான் டாஷ்போர்டுகளுக்கான உங்கள் கட்டுப்பாட்டு மையம். இங்கிருந்து, இயல்புநிலை டாஷ்போர்டை அமைக்கலாம், புதிய பக்கத்தை சேர்க்கலாம், திருத்தலாம், குளோன் செய்யலாம், அல்லது நீக்கலாம்.',
          tip: { type: 'proTipLabel', text: 'குளோனிங் ஒரு புதிய சொத்துக்கு டாஷ்போர்டை உருவாக்க வேகமான வழி.' },
        },
        {
          label: 'பகிர்வு', title: 'உங்கள் குழுவுடன் பகிரவும்',
          body: '<strong>பகிர்</strong> ஐகான் ஒரு உரையாடலைத் திறக்கிறது.',
          voice: 'இறுதியாக, பகிர் ஐகான். மற்ற பயனர்களுக்கு அணுகலை வழங்க, அவர்களின் மின்னஞ்சலைத் தட்டச்சு செய்யவும், அவர்களின் அனுமதி நிலையை தேர்ந்தெடுக்கவும், மற்றும் பிளஸ் ஐகானைக் கிளிக் செய்யவும். அடுத்த பாடத்தில், விட்ஜெட்களின் ஆழத்திற்கு செல்வோம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்த பாடம்: விட்ஜெட்களை ஆராய்வோம்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>डॅशबोर्ड,</em><br>संपूर्ण.',
      subtitle: 'तुमच्या प्लांटमधील सेन्सर्स दर मिनिटाला डेटा पाठवतात. डॅशबोर्ड त्या डेटाचे कृती करण्यायोग्य माहितीमध्ये रूपांतर करतो.',
      chapter: 'अध्याय एक · ऑपरेटरचे कॉकपिट',
      steps: [
        {
          label: 'टूर', title: 'तुमच्या डॅशबोर्डचा झटपट दौरा',
          body: 'हा तुमचा संपूर्ण डॅशबोर्ड आहे. वर, <strong>नकाशा आणि तिकिटे</strong>. त्याखाली, <strong>प्लांट प्रवाह आणि कार्यक्षमता</strong>. नंतर <strong>इनलेट/आउटलेट प्रवाह</strong>, <strong>ऊर्जा वापर</strong>, <strong>उपचारित पाण्याची गुणवत्ता</strong>, आणि <strong>वायुवीजन आरोग्य</strong>.',
          voice: 'नमस्कार, स्वागत आहे! मी रिया, डिजिटलपानीद्वारे तुमची मार्गदर्शक. तुम्ही पाहत आहात तो तुमचा संपूर्ण डॅशबोर्ड आहे — तुमच्या प्लांटचे प्रत्येक विजेट. वर, नकाशा आणि तिकिटे आहेत. त्याखाली, प्लांट प्रवाह आणि कार्यक्षमता, उपचार कामगिरीचे हृदय. नंतर इनलेट आणि आउटलेट प्रवाह, ऊर्जा वापर, उपचारित पाण्याची गुणवत्ता, आणि वायुवीजन आरोग्य. सेन्सर्स दर मिनिटाला नवीन डेटा पाठवतात. संपूर्ण चित्र पाहण्यासाठी एक क्षण घ्या. पुढच्या पायऱ्यांमध्ये, आम्ही हे सर्व चालवणाऱ्या वरच्या नियंत्रणांचा अभ्यास करू.',
        },
        {
          label: 'पृष्ठ निवडक', title: 'डॅशबोर्ड पृष्ठांमध्ये बदला',
          body: 'वर-डाव्या कोपऱ्यात, <strong>पृष्ठ निवडक</strong> तुम्हाला डॅशबोर्डमध्ये बदल करू देते.',
          voice: 'वर डाव्या कोपऱ्यापासून सुरुवात करूया. हे तुमचे पृष्ठ निवडक आहे. यावर क्लिक केल्यास, तुमच्या प्लांटसाठी सेट केलेले प्रत्येक डॅशबोर्ड दिसेल.',
          tip: { type: 'tipLabel', text: 'जितके हवे तितके डॅशबोर्ड तयार करा — मर्यादा नाही.' },
        },
        {
          label: 'वेळ श्रेणी', title: 'वेळेची खिडकी निवडा',
          body: 'उजव्या बाजूला, प्रत्येक विजेटसाठी <strong>वेळ श्रेणी</strong> सेट करा.',
          voice: 'उजव्या बाजूला, तुम्हाला वेळ श्रेणी निवडक मिळेल. ग्रॅन्युलॅरिटी निवडा — मिनिटे, तास, किंवा दिवस. नंतर एक प्रीसेट निवडा, जसे शेवटचे 24 तास किंवा शेवटचे 30 दिवस.',
          tip: { type: 'rememberLabel', text: 'वेळ श्रेणी सर्वत्र लागू होते.' },
        },
        {
          label: 'रिफ्रेश', title: 'रिफ्रेश — नवीनतम डेटा मिळवा',
          body: '<strong>रिफ्रेश</strong> चिन्ह प्रत्येक विजेटमध्ये नवीनतम सेन्सर वाचने त्वरित आणते.',
          voice: 'पुढे, रिफ्रेश बटण. हे पानावरील प्रत्येक विजेटमध्ये नवीनतम सेन्सर वाचने त्वरित आणते.',
        },
        {
          label: 'डाउनलोड', title: 'डाउनलोड — तीन निर्यात स्वरूपे',
          body: '<strong>डाउनलोड</strong> चिन्ह तीन स्वरूपे देते. <strong>एक-पान PDF</strong>, <strong>A4 PDF</strong>, आणि <strong>Excel</strong> — फक्त ग्राफ विजेटसाठी.',
          voice: 'डाउनलोड बटण तुम्हाला तीन निर्यात पर्याय देते. एक-पान PDF संपूर्ण डॅशबोर्डला एक लांब प्रतिमा म्हणून कॅप्चर करतो. A4 PDF सर्व काही पानांमध्ये विभाजित करतो. आणि Excel तुमच्या ग्राफ विजेटमागील कच्चा डेटा निर्यात करतो.',
          tip: { type: 'noteLabel', text: 'तिन्ही स्वरूपे निवडलेल्या वेळ श्रेणीचे पालन करतात.' },
        },
        {
          label: 'व्यवस्थापन', title: 'डॅशबोर्ड आणि अहवाल व्यवस्थापन',
          body: '<strong>गियर चिन्ह</strong> डॅशबोर्ड व्यवस्थापन पॅनेल उघडते.',
          voice: 'गियर चिन्ह डॅशबोर्डसाठी तुमचे नियंत्रण केंद्र आहे. येथून, तुम्ही डीफॉल्ट डॅशबोर्ड सेट करू शकता, नवीन पान जोडू शकता, संपादित करू शकता, क्लोन करू शकता, किंवा हटवू शकता.',
          tip: { type: 'proTipLabel', text: 'क्लोनिंग नवीन मालमत्तेसाठी डॅशबोर्ड तयार करण्याचा सर्वात जलद मार्ग आहे.' },
        },
        {
          label: 'शेअर', title: 'तुमच्या संघासोबत शेअर करा',
          body: '<strong>शेअर</strong> चिन्ह एक डायलॉग उघडते जिथे तुम्ही इतर वापरकर्त्यांना प्रवेश देऊ शकता.',
          voice: 'शेवटी, शेअर चिन्ह. यावर क्लिक करा, आणि एक डायलॉग उघडतो. त्यांचा ईमेल टाइप करा, परवानगी पातळी निवडा — सध्या फक्त पहा — आणि प्लस चिन्हावर क्लिक करा. पुढच्या धड्यात, आम्ही विजेटची खोलात जाऊ.',
          tip: { type: 'upNextLabel', text: 'पुढचा धडा: विजेटची सखोल माहिती.' },
        },
      ],
    },
  },
};

export default lesson;
