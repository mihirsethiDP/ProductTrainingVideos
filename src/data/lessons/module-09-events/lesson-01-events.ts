import type { EventRow, EventsData, Lesson } from '../../types';

/**
 * Module 9 · Lesson 1 — Events.   Tag: M9.L1
 * Events open and close on sensor conditions (like insights), and are shown on
 * the client dashboard with history logs and per-equipment sensor charts.
 */

const ROW: EventRow = {
  name: 'MBR Cleaning',
  desc: 'Cleaning of MBR',
  status: 'Active',
  createdAt: '29 May 2026 | 12:17 AM',
  equipment: ['MBR Tank-1', 'MBR Tank-2'],
  workspace: 'Amity University Workspace',
  asset: 'Amity University Noida',
  avgDuration: '1 hr 35 min',
  avgRecurrence: '5 min 50 sec',
  frequency: '2',
  ring: true,
};

const LOGS = [
  { start: '27 Nov 2025 | 6:33 PM', end: '27 Nov 2025 | 9:20 PM', duration: '2 hrs 47 min', active: true },
  { start: '27 Nov 2025 | 6:04 PM', end: '27 Nov 2025 | 6:27 PM', duration: '23 min' },
];

const X = ['16:33', '17:33', '18:33', '19:33', '20:33', '21:33', '22:33'];
const CHARTS = [
  { title: 'MBR Tank-2 LV', points: [72, 71, 71, 72, 96, 86, 73], xLabels: X, yMin: 70, yMax: 100 },
  { title: 'MBR Tank-1 LV', points: [91, 90, 90, 90, 85, 91, 88], xLabels: X, yMin: 84, yMax: 92 },
];

const list = (highlight: EventsData['highlight']): { events: EventsData } => ({
  events: { mode: 'list', rows: [ROW], assetFilter: 'Amity University Noida', highlight },
});
const detail = (highlight: EventsData['highlight']): { events: EventsData } => ({
  events: { mode: 'detail', event: ROW, logs: LOGS, charts: CHARTS, highlight },
});

const lesson: Lesson = {
  id: 'lesson-01-events',
  moduleId: 'module-09-events',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'events', caption: 'The Events page', widgetState: list(null), cursor: [{ at: 0.25, x: 40, y: 45 }] },
    { mode: 'widget', widget: 'events', caption: 'Open & close conditions', widgetState: list('status'), cursor: [{ at: 0.3, x: 30, y: 45 }] },
    { mode: 'widget', widget: 'events', caption: 'Equipment & asset', widgetState: list('equipment'), cursor: [{ at: 0.3, x: 45, y: 45 }, { at: 0.7, x: 58, y: 45 }] },
    { mode: 'widget', widget: 'events', caption: 'Duration, recurrence, frequency', widgetState: list('duration'), cursor: [{ at: 0.3, x: 70, y: 45 }, { at: 0.7, x: 90, y: 45 }] },
    { mode: 'widget', widget: 'events', caption: 'Open an event', widgetState: detail('summary'), cursor: [{ at: 0.3, x: 40, y: 22 }] },
    { mode: 'widget', widget: 'events', caption: 'Event History Logs', widgetState: detail('logs'), cursor: [{ at: 0.3, x: 45, y: 45 }] },
    { mode: 'widget', widget: 'events', caption: 'The sensor story', widgetState: detail('charts'), cursor: [{ at: 0.3, x: 30, y: 80 }, { at: 0.7, x: 70, y: 80 }] },
  ],
  content: {
    en: {
      title: 'The <em>Events</em><br>Module.',
      subtitle: 'Events open and close on sensor conditions — so the client can see exactly what happened, and when.',
      chapter: 'Chapter Nine · What Happened, and When',
      steps: [
        {
          label: 'Overview', title: 'What an event is',
          body: "An <strong>event</strong> is something the platform tracks because it matters — like an <em>MBR Cleaning</em>. Just like an insight, each event is <strong>triggered by conditions on sensor values</strong>, and it shows up here on the <strong>Events</strong> page, on the client's own dashboard.",
          voice: "Welcome to Events. An event is a meaningful happening at the plant that the platform watches for and records — here, an M B R cleaning. Events work much like insights: each one is driven by conditions on sensor values. But where an insight flags something needing attention, an event captures a span of activity — it begins, it runs for a while, and it ends. And all of it surfaces right here on the Events page, on the client's own dashboard, so they can see what's been going on.",
        },
        {
          label: 'Conditions', title: 'An opening and a closing condition',
          body: "Every event has two halves: an <strong>opening condition</strong> and a <strong>closing condition</strong>, both based on sensor values. When the opening condition is met the event goes <span style=\"color:#2d8659\">Active</span>; when the closing condition is met, it ends. That's how the platform knows precisely when something started and stopped.",
          voice: "The heart of an event is a pair of conditions. There's an opening condition — when the sensors hit it, the event starts and is marked active, shown here with a green tick. And there's a closing condition — when the sensors hit that, the event ends. Both are defined on sensor values. So for the M B R cleaning, a certain tank-level pattern opens the event, and another closes it. Because both edges are precise, the platform knows exactly when the activity began and exactly when it finished — no guesswork.",
        },
        {
          label: 'Equipment', title: 'Tied to equipment and asset',
          body: "Each event is anchored to real <strong>equipment</strong> — here <strong>MBR Tank-1</strong> and <strong>MBR Tank-2</strong> — and to a <strong>workspace and asset</strong>. So an event isn't abstract: it points at the exact tanks, in the exact plant, that it concerns. Filter by <strong>asset</strong> to focus on one site.",
          voice: "An event is always anchored to something real. You can see the equipment it concerns — here, M B R Tank one and M B R Tank two — and the workspace and asset it belongs to, in this case Amity University. That grounding matters: an event isn't a vague note, it points at the exact equipment in the exact plant. And at the top you can filter by workspace and by asset, so a client with many sites can zero in on just the one they care about.",
        },
        {
          label: 'Metrics', title: 'Duration, recurrence & frequency',
          body: "Three metrics summarise the event's behaviour: <strong>Average Event Duration</strong> (how long it typically runs — <em>1 hr 35 min</em>), <strong>Average Recurrence Time</strong> (how often it comes back), and <strong>Frequency</strong> (how many times it has occurred — <em>2</em>).",
          voice: "Across the row, three numbers tell you how this event behaves over time. Average event duration — how long it typically lasts once it opens, here one hour thirty-five. Average recurrence time — how long, on average, between one occurrence and the next. And frequency — how many times it has happened in total, here just twice. Together these turn a series of individual events into a pattern you can reason about: is this getting longer, more frequent, more of a concern?",
        },
        {
          label: 'Detail', title: 'Open it for the full picture',
          body: "Click an event and the <strong>Event Details</strong> open: the description, the same duration, recurrence, frequency, workspace, asset and equipment — all gathered in one place, ready to investigate.",
          voice: "Click into any event and the full details open up. At the top you get the description and the headline numbers again — duration, recurrence, frequency — along with the workspace, asset and the equipment involved, all gathered in one view. This is the jumping-off point for actually understanding the event: everything you need to know what it was, where it happened, and how it's been behaving, before you dig into the specifics.",
        },
        {
          label: 'History', title: 'Every occurrence, logged',
          body: "The <strong>Event History Logs</strong> list every time the event has opened and closed — each with its <strong>start</strong>, its <strong>end</strong>, and the <strong>duration</strong> in between. Here it ran <em>2 hrs 47 min</em> one time and <em>23 min</em> another. Nothing is lost; every occurrence is on record.",
          voice: "Below that are the event history logs — a record of every single time this event has opened and closed. Each entry shows when it started, when it ended, and exactly how long it ran. Here you can see one occurrence lasted two hours forty-seven minutes, and an earlier one just twenty-three. This is the audit trail: a client can scroll back through every instance of the event, with precise timestamps, and see how each one played out. Nothing is lost to memory.",
        },
        {
          label: 'Charts', title: 'The sensor story behind it',
          body: "Finally, per-equipment <strong>sensor charts</strong> plot the readings across the event's window — here <strong>MBR Tank-1 LV</strong> and <strong>MBR Tank-2 LV</strong>. You don't just see <em>that</em> it happened; you see the sensor values that <strong>opened and closed</strong> it — the why behind the when.",
          voice: "And finally, the part that ties it all together — the sensor charts. For each piece of equipment, the platform plots the relevant sensor readings across the window of the event. Here you can watch the level in M B R Tank two and M B R Tank one move through the cleaning — rising, peaking, settling. This is what makes an event so powerful: you don't just see that something happened and when, you see the actual sensor values that opened it and closed it. It's the why behind the when, laid out for the client to track exactly what happened.",
          tip: { type: 'rememberLabel', text: 'Event = opening condition → Active → closing condition. History logs every occurrence; sensor charts show the readings that drove it.' },
        },
      ],
    },
    hi: {
      title: '<em>इवेंट्स</em><br>मॉड्यूल।',
      subtitle: 'इवेंट सेंसर शर्तों पर खुलते और बंद होते हैं — ताकि क्लाइंट देख सके कि ठीक क्या हुआ, और कब।',
      chapter: 'अध्याय नौ · क्या हुआ, और कब',
      steps: [
        {
          label: 'अवलोकन', title: 'इवेंट क्या है',
          body: "एक <strong>इवेंट</strong> वह है जिसे प्लेटफ़ॉर्म ट्रैक करता है क्योंकि वह मायने रखता है — जैसे <em>MBR Cleaning</em>। इनसाइट की तरह, हर इवेंट <strong>सेंसर मानों की शर्तों से ट्रिगर</strong> होता है, और क्लाइंट के डैशबोर्ड पर <strong>Events</strong> पेज पर दिखता है।",
          voice: "इवेंट्स में स्वागत है। इवेंट प्लांट पर एक सार्थक घटना है जिसे प्लेटफ़ॉर्म देखता और रिकॉर्ड करता है — यहाँ, एक एम बी आर क्लीनिंग। इवेंट इनसाइट की तरह काम करते हैं: हर एक सेंसर मानों की शर्तों से चलता है। पर जहाँ इनसाइट किसी ध्यान-योग्य चीज़ को चिह्नित करता है, इवेंट गतिविधि की एक अवधि पकड़ता है — यह शुरू होता है, कुछ समय चलता है, और ख़त्म होता है। और यह सब यहीं Events पेज पर, क्लाइंट के अपने डैशबोर्ड पर सामने आता है।",
        },
        {
          label: 'शर्तें', title: 'एक खुलने और एक बंद होने की शर्त',
          body: "हर इवेंट के दो हिस्से हैं: एक <strong>खुलने की शर्त</strong> और एक <strong>बंद होने की शर्त</strong>, दोनों सेंसर मानों पर आधारित। खुलने की शर्त पूरी होने पर इवेंट <span style=\"color:#2d8659\">Active</span> हो जाता है; बंद होने की शर्त पूरी होने पर ख़त्म।",
          voice: "इवेंट का दिल शर्तों की एक जोड़ी है। एक खुलने की शर्त — सेंसर उस तक पहुँचते हैं तो इवेंट शुरू होकर सक्रिय चिह्नित होता है, यहाँ हरे टिक के साथ। और एक बंद होने की शर्त — सेंसर उस तक पहुँचते हैं तो इवेंट ख़त्म होता है। दोनों सेंसर मानों पर परिभाषित हैं। तो एम बी आर क्लीनिंग के लिए, एक ख़ास टैंक-लेवल पैटर्न इवेंट खोलता है, और दूसरा बंद करता है। चूँकि दोनों किनारे सटीक हैं, प्लेटफ़ॉर्म ठीक-ठीक जानता है कि गतिविधि कब शुरू हुई और कब ख़त्म।",
        },
        {
          label: 'उपकरण', title: 'उपकरण व एसेट से जुड़ा',
          body: "हर इवेंट वास्तविक <strong>उपकरण</strong> से जुड़ा है — यहाँ <strong>MBR Tank-1</strong> और <strong>MBR Tank-2</strong> — और एक <strong>वर्कस्पेस व एसेट</strong> से। तो इवेंट अमूर्त नहीं: यह ठीक उन टैंकों की ओर इशारा करता है। एक साइट पर ध्यान देने के लिए <strong>एसेट</strong> से फ़िल्टर करें।",
          voice: "इवेंट हमेशा किसी वास्तविक चीज़ से जुड़ा होता है। आप वह उपकरण देख सकते हैं जिससे यह संबंधित है — यहाँ, एम बी आर टैंक एक और एम बी आर टैंक दो — और जिस वर्कस्पेस व एसेट का है, इस मामले में एमिटी यूनिवर्सिटी। यह आधार मायने रखता है: इवेंट कोई अस्पष्ट नोट नहीं, यह ठीक उस प्लांट के ठीक उस उपकरण की ओर इशारा करता है। और ऊपर आप वर्कस्पेस और एसेट से फ़िल्टर कर सकते हैं, ताकि कई साइट वाला क्लाइंट सिर्फ़ अपनी इच्छित साइट पर ध्यान दे सके।",
        },
        {
          label: 'मेट्रिक्स', title: 'अवधि, पुनरावृत्ति व आवृत्ति',
          body: "तीन मेट्रिक्स इवेंट का व्यवहार सारांशित करते हैं: <strong>औसत इवेंट अवधि</strong> (आमतौर पर कितना चलता है — <em>1 hr 35 min</em>), <strong>औसत पुनरावृत्ति समय</strong> (कितनी बार लौटता है), और <strong>आवृत्ति</strong> (कितनी बार हुआ — <em>2</em>)।",
          voice: "पंक्ति भर में, तीन संख्याएँ बताती हैं कि यह इवेंट समय के साथ कैसे व्यवहार करता है। औसत इवेंट अवधि — खुलने के बाद यह आमतौर पर कितना चलता है, यहाँ एक घंटा पैंतीस। औसत पुनरावृत्ति समय — एक घटना और अगली के बीच औसतन कितना। और आवृत्ति — कुल कितनी बार हुआ, यहाँ सिर्फ़ दो बार। मिलकर ये अलग-अलग इवेंट की एक श्रृंखला को एक पैटर्न में बदल देते हैं जिस पर आप सोच सकते हैं: क्या यह लंबा होता जा रहा है, अधिक बार, अधिक चिंता का?",
        },
        {
          label: 'विवरण', title: 'पूरी तस्वीर के लिए खोलें',
          body: "इवेंट पर क्लिक करें और <strong>Event Details</strong> खुलते हैं: विवरण, वही अवधि, पुनरावृत्ति, आवृत्ति, वर्कस्पेस, एसेट और उपकरण — सब एक जगह, जाँच के लिए तैयार।",
          voice: "किसी भी इवेंट में क्लिक करें और पूरा विवरण खुल जाता है। ऊपर आपको फिर से विवरण और मुख्य संख्याएँ मिलती हैं — अवधि, पुनरावृत्ति, आवृत्ति — साथ ही वर्कस्पेस, एसेट और शामिल उपकरण, सब एक दृश्य में। यह इवेंट को सचमुच समझने का शुरुआती बिंदु है: वह सब जो आपको जानना चाहिए कि यह क्या था, कहाँ हुआ, और कैसे व्यवहार करता रहा, विशिष्ट बातों में गहरे जाने से पहले।",
        },
        {
          label: 'इतिहास', title: 'हर घटना, लॉग की गई',
          body: "<strong>Event History Logs</strong> हर बार सूचीबद्ध करते हैं जब इवेंट खुला और बंद हुआ — हर एक अपने <strong>शुरू</strong>, <strong>अंत</strong>, और बीच की <strong>अवधि</strong> के साथ। यहाँ यह एक बार <em>2 hrs 47 min</em> और दूसरी बार <em>23 min</em> चला।",
          voice: "उसके नीचे इवेंट हिस्ट्री लॉग्स हैं — हर एक बार का रिकॉर्ड जब यह इवेंट खुला और बंद हुआ। हर प्रविष्टि दिखाती है कि कब शुरू हुआ, कब ख़त्म, और ठीक कितना चला। यहाँ आप देख सकते हैं एक घटना दो घंटे सैंतालीस मिनट चली, और पहले की एक सिर्फ़ तेईस। यह ऑडिट ट्रेल है: क्लाइंट इवेंट की हर घटना को, सटीक टाइमस्टैम्प के साथ, पीछे स्क्रॉल कर सकता है, और देख सकता है हर एक कैसे चली। कुछ भी याददाश्त में खोता नहीं।",
        },
        {
          label: 'चार्ट', title: 'पीछे की सेंसर कहानी',
          body: "अंत में, प्रति-उपकरण <strong>सेंसर चार्ट</strong> इवेंट की अवधि भर रीडिंग प्लॉट करते हैं — यहाँ <strong>MBR Tank-1 LV</strong> और <strong>MBR Tank-2 LV</strong>। आप सिर्फ़ यह नहीं देखते कि यह हुआ; आप वे सेंसर मान देखते हैं जिन्होंने इसे <strong>खोला और बंद</strong> किया।",
          voice: "और अंत में, वह हिस्सा जो सब जोड़ता है — सेंसर चार्ट। हर उपकरण के लिए, प्लेटफ़ॉर्म इवेंट की अवधि भर प्रासंगिक सेंसर रीडिंग प्लॉट करता है। यहाँ आप एम बी आर टैंक दो और एम बी आर टैंक एक का लेवल क्लीनिंग के दौरान चलते देख सकते हैं — बढ़ता, चरम पर, थमता। यही इवेंट को इतना शक्तिशाली बनाता है: आप सिर्फ़ यह नहीं देखते कि कुछ हुआ और कब, आप वे असली सेंसर मान देखते हैं जिन्होंने इसे खोला और बंद किया। यह कब के पीछे का क्यों है, क्लाइंट के ठीक-ठीक ट्रैक करने के लिए सामने रखा।",
          tip: { type: 'rememberLabel', text: 'इवेंट = खुलने की शर्त → Active → बंद होने की शर्त। हिस्ट्री हर घटना लॉग करती है; सेंसर चार्ट उसे चलाने वाली रीडिंग दिखाते हैं।' },
        },
      ],
    },
    ta: {
      title: '<em>நிகழ்வுகள்</em><br>தொகுதி.',
      subtitle: 'நிகழ்வுகள் சென்சார் நிபந்தனைகளில் திறந்து மூடுகின்றன — என்ன நடந்தது, எப்போது என்று வாடிக்கையாளர் பார்க்கலாம்.',
      chapter: 'அத்தியாயம் ஒன்பது · என்ன நடந்தது, எப்போது',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'நிகழ்வு என்றால் என்ன',
          body: "ஒரு <strong>நிகழ்வு</strong> என்பது முக்கியமானதால் தளம் கண்காணிக்கும் ஒன்று — <em>MBR Cleaning</em> போல. இன்சைட் போலவே, ஒவ்வொரு நிகழ்வும் <strong>சென்சார் மதிப்புகளின் நிபந்தனைகளால் தூண்டப்படுகிறது</strong>, வாடிக்கையாளரின் டாஷ்போர்டில் <strong>Events</strong> பக்கத்தில் தோன்றுகிறது.",
          voice: "நிகழ்வுகளுக்கு வரவேற்கிறோம். நிகழ்வு என்பது ஆலையில் தளம் கண்காணித்துப் பதிவு செய்யும் ஒரு முக்கியமான நிகழ்வு — இங்கே, ஒரு எம் பி ஆர் சுத்தம். நிகழ்வுகள் இன்சைட் போலவே செயல்படுகின்றன: ஒவ்வொன்றும் சென்சார் மதிப்புகளின் நிபந்தனைகளால் இயக்கப்படுகிறது. ஆனால் இன்சைட் கவனம் தேவையானதைச் சுட்டிக்காட்டும்போது, நிகழ்வு ஒரு செயல்பாட்டுக் காலத்தைப் பிடிக்கிறது — அது தொடங்கி, சிறிது நேரம் இயங்கி, முடிகிறது. இவை அனைத்தும் இங்கே Events பக்கத்தில், வாடிக்கையாளரின் சொந்த டாஷ்போர்டில் தோன்றுகின்றன.",
        },
        {
          label: 'நிபந்தனைகள்', title: 'திறக்கும் & மூடும் நிபந்தனை',
          body: "ஒவ்வொரு நிகழ்வுக்கும் இரு பகுதிகள்: ஒரு <strong>திறக்கும் நிபந்தனை</strong> மற்றும் ஒரு <strong>மூடும் நிபந்தனை</strong>, இரண்டும் சென்சார் மதிப்புகளை அடிப்படையாகக் கொண்டவை. திறக்கும் நிபந்தனை பூர்த்தியானால் நிகழ்வு <span style=\"color:#2d8659\">Active</span> ஆகிறது; மூடும் நிபந்தனை பூர்த்தியானால் முடிகிறது.",
          voice: "நிகழ்வின் இதயம் ஒரு ஜோடி நிபந்தனைகள். ஒரு திறக்கும் நிபந்தனை — சென்சார்கள் அதை அடைந்தால் நிகழ்வு தொடங்கி செயலில் என்று குறிக்கப்படுகிறது, இங்கே பச்சை டிக்குடன். ஒரு மூடும் நிபந்தனை — சென்சார்கள் அதை அடைந்தால் நிகழ்வு முடிகிறது. இரண்டும் சென்சார் மதிப்புகளில் வரையறுக்கப்படுகின்றன. எம் பி ஆர் சுத்தத்துக்கு, ஒரு குறிப்பிட்ட தொட்டி-மட்ட வடிவம் நிகழ்வைத் திறக்கிறது, மற்றொன்று மூடுகிறது. இரு விளிம்புகளும் துல்லியமாக இருப்பதால், செயல்பாடு எப்போது தொடங்கியது எப்போது முடிந்தது என்று தளம் துல்லியமாக அறிகிறது.",
        },
        {
          label: 'உபகரணம்', title: 'உபகரணம் & சொத்துடன் இணைந்து',
          body: "ஒவ்வொரு நிகழ்வும் உண்மையான <strong>உபகரணத்துடன்</strong> இணைக்கப்பட்டுள்ளது — இங்கே <strong>MBR Tank-1</strong>, <strong>MBR Tank-2</strong> — மற்றும் ஒரு <strong>பணியிடம் & சொத்துடன்</strong>. ஒரு தளத்தில் கவனம் செலுத்த <strong>சொத்தால்</strong> வடிகட்டுங்கள்.",
          voice: "நிகழ்வு எப்போதும் உண்மையான ஒன்றுடன் இணைக்கப்பட்டுள்ளது. அது தொடர்புடைய உபகரணத்தைப் பார்க்கலாம் — இங்கே, எம் பி ஆர் டேங்க் ஒன்று, எம் பி ஆர் டேங்க் இரண்டு — அது சேர்ந்த பணியிடம், சொத்து, இந்த விஷயத்தில் அமிட்டி பல்கலைக்கழகம். இந்த அடித்தளம் முக்கியம்: நிகழ்வு ஒரு தெளிவற்ற குறிப்பு அல்ல, அது சரியான ஆலையின் சரியான உபகரணத்தைச் சுட்டுகிறது. மேலே பணியிடம், சொத்து வாரியாக வடிகட்டலாம், பல தளங்கள் உள்ள வாடிக்கையாளர் தாம் விரும்பும் ஒன்றில் கவனம் செலுத்த.",
        },
        {
          label: 'அளவீடுகள்', title: 'கால அளவு, மறுநிகழ்வு & அதிர்வெண்',
          body: "மூன்று அளவீடுகள் நிகழ்வின் நடத்தையைச் சுருக்குகின்றன: <strong>சராசரி நிகழ்வு கால அளவு</strong> (<em>1 hr 35 min</em>), <strong>சராசரி மறுநிகழ்வு நேரம்</strong> (எவ்வளவு அடிக்கடி திரும்புகிறது), <strong>அதிர்வெண்</strong> (எத்தனை முறை நடந்தது — <em>2</em>).",
          voice: "வரிசை முழுவதும், மூன்று எண்கள் இந்த நிகழ்வு காலப்போக்கில் எப்படி நடந்துகொள்கிறது என்று சொல்கின்றன. சராசரி நிகழ்வு கால அளவு — திறந்தபின் இது வழக்கமாக எவ்வளவு நேரம், இங்கே ஒரு மணி முப்பத்தைந்து. சராசரி மறுநிகழ்வு நேரம் — ஒரு நிகழ்வுக்கும் அடுத்ததற்கும் இடையே சராசரியாக எவ்வளவு. அதிர்வெண் — மொத்தம் எத்தனை முறை நடந்தது, இங்கே இருமுறை மட்டும். இவை சேர்ந்து தனித்த நிகழ்வுகளின் தொடரை நீங்கள் சிந்திக்கக்கூடிய ஒரு வடிவமாக மாற்றுகின்றன: இது நீளமாகிறதா, அடிக்கடியாகிறதா, அதிக கவலையாகிறதா?",
        },
        {
          label: 'விவரம்', title: 'முழுச் சித்திரத்துக்குத் திற',
          body: "ஒரு நிகழ்வைக் கிளிக் செய்தால் <strong>Event Details</strong> திறக்கின்றன: விளக்கம், அதே கால அளவு, மறுநிகழ்வு, அதிர்வெண், பணியிடம், சொத்து, உபகரணம் — அனைத்தும் ஒரே இடத்தில்.",
          voice: "எந்த நிகழ்வையும் கிளிக் செய்தால் முழு விவரம் திறக்கிறது. மேலே விளக்கமும் தலைப்பு எண்களும் மீண்டும் கிடைக்கின்றன — கால அளவு, மறுநிகழ்வு, அதிர்வெண் — பணியிடம், சொத்து, ஈடுபட்ட உபகரணத்துடன், அனைத்தும் ஒரே பார்வையில். இது நிகழ்வை உண்மையில் புரிந்துகொள்ளும் தொடக்கப் புள்ளி: அது என்ன, எங்கே நடந்தது, எப்படி நடந்துகொண்டது என்பதை அறிய வேண்டிய அனைத்தும், விவரங்களுக்குள் செல்வதற்கு முன்.",
        },
        {
          label: 'வரலாறு', title: 'ஒவ்வொரு நிகழ்வும் பதிவு',
          body: "<strong>Event History Logs</strong> நிகழ்வு திறந்து மூடிய ஒவ்வொரு முறையையும் பட்டியலிடுகின்றன — ஒவ்வொன்றும் அதன் <strong>தொடக்கம்</strong>, <strong>முடிவு</strong>, இடைப்பட்ட <strong>கால அளவு</strong> உடன். இங்கே ஒருமுறை <em>2 hrs 47 min</em>, மற்றொருமுறை <em>23 min</em> இயங்கியது.",
          voice: "அதற்குக் கீழே நிகழ்வு வரலாற்றுப் பதிவுகள் — இந்த நிகழ்வு திறந்து மூடிய ஒவ்வொரு முறையின் பதிவு. ஒவ்வொரு பதிவும் எப்போது தொடங்கியது, எப்போது முடிந்தது, சரியாக எவ்வளவு இயங்கியது என்று காட்டுகிறது. இங்கே ஒரு நிகழ்வு இரண்டு மணி நாற்பத்தேழு நிமிடம் இயங்கியது, முந்தையது இருபத்துமூன்று மட்டும். இது தணிக்கைத் தடம்: வாடிக்கையாளர் நிகழ்வின் ஒவ்வொரு நிகழ்வையும், துல்லியமான நேரமுத்திரைகளுடன், பின்னோக்கி உருட்டி, ஒவ்வொன்றும் எப்படி நடந்தது என்று பார்க்கலாம். எதுவும் நினைவில் தொலையாது.",
        },
        {
          label: 'வரைபடங்கள்', title: 'பின்னணியில் சென்சார் கதை',
          body: "இறுதியாக, உபகரண வாரியான <strong>சென்சார் வரைபடங்கள்</strong> நிகழ்வின் சாளரம் முழுவதும் அளவீடுகளை வரைகின்றன — இங்கே <strong>MBR Tank-1 LV</strong>, <strong>MBR Tank-2 LV</strong>. நடந்தது என்பதை மட்டுமல்ல; அதைத் <strong>திறந்து மூடிய</strong> சென்சார் மதிப்புகளையும் பார்க்கிறீர்கள்.",
          voice: "இறுதியாக, அனைத்தையும் இணைக்கும் பகுதி — சென்சார் வரைபடங்கள். ஒவ்வொரு உபகரணத்துக்கும், தளம் நிகழ்வின் சாளரம் முழுவதும் தொடர்புடைய சென்சார் அளவீடுகளை வரைகிறது. இங்கே எம் பி ஆர் டேங்க் இரண்டு, எம் பி ஆர் டேங்க் ஒன்றின் மட்டம் சுத்தத்தின்போது நகர்வதைப் பார்க்கலாம் — உயர்ந்து, உச்சத்தில், அமைதியாகி. இதுவே நிகழ்வை இவ்வளவு சக்திவாய்ந்ததாக்குகிறது: ஏதோ நடந்தது எப்போது என்பதை மட்டுமல்ல, அதைத் திறந்து மூடிய உண்மையான சென்சார் மதிப்புகளைப் பார்க்கிறீர்கள். எப்போது என்பதன் பின்னணியில் உள்ள ஏன், வாடிக்கையாளர் துல்லியமாகக் கண்காணிக்க வைக்கப்பட்டது.",
          tip: { type: 'rememberLabel', text: 'நிகழ்வு = திறக்கும் நிபந்தனை → Active → மூடும் நிபந்தனை. வரலாறு ஒவ்வொன்றையும் பதிவு செய்கிறது; சென்சார் வரைபடங்கள் காரணத்தைக் காட்டுகின்றன.' },
        },
      ],
    },
    mr: {
      title: '<em>इव्हेंट्स</em><br>मॉड्यूल.',
      subtitle: 'इव्हेंट सेन्सर अटींवर उघडतात आणि बंद होतात — म्हणजे क्लायंट नेमके काय झाले, आणि कधी ते पाहू शकतो.',
      chapter: 'अध्याय नऊ · काय झाले, आणि कधी',
      steps: [
        {
          label: 'आढावा', title: 'इव्हेंट म्हणजे काय',
          body: "<strong>इव्हेंट</strong> म्हणजे प्लॅटफॉर्म ट्रॅक करते ती महत्त्वाची गोष्ट — जसे <em>MBR Cleaning</em>. इनसाइटप्रमाणे, प्रत्येक इव्हेंट <strong>सेन्सर मूल्यांच्या अटींनी ट्रिगर</strong> होतो, आणि क्लायंटच्या डॅशबोर्डवर <strong>Events</strong> पेजवर दिसतो.",
          voice: "इव्हेंट्समध्ये स्वागत आहे. इव्हेंट म्हणजे प्लांटवरील एक अर्थपूर्ण घटना जी प्लॅटफॉर्म पाहते आणि नोंदवते — इथे, एक एम बी आर क्लीनिंग. इव्हेंट इनसाइटप्रमाणे काम करतात: प्रत्येक सेन्सर मूल्यांच्या अटींनी चालतो. पण इनसाइट लक्ष देण्याजोगे काहीतरी दर्शवते, तर इव्हेंट क्रियाकलापाचा एक कालावधी पकडतो — तो सुरू होतो, काही वेळ चालतो, आणि संपतो. आणि हे सर्व इथेच Events पेजवर, क्लायंटच्या स्वतःच्या डॅशबोर्डवर समोर येते.",
        },
        {
          label: 'अटी', title: 'एक उघडण्याची आणि एक बंद होण्याची अट',
          body: "प्रत्येक इव्हेंटला दोन भाग आहेत: एक <strong>उघडण्याची अट</strong> आणि एक <strong>बंद होण्याची अट</strong>, दोन्ही सेन्सर मूल्यांवर आधारित. उघडण्याची अट पूर्ण झाली की इव्हेंट <span style=\"color:#2d8659\">Active</span> होतो; बंद होण्याची अट पूर्ण झाली की संपतो.",
          voice: "इव्हेंटचे हृदय म्हणजे अटींची एक जोडी. एक उघडण्याची अट — सेन्सर तिथे पोहोचले की इव्हेंट सुरू होऊन सक्रिय म्हणून चिन्हांकित होतो, इथे हिरव्या टिकसह. आणि एक बंद होण्याची अट — सेन्सर तिथे पोहोचले की इव्हेंट संपतो. दोन्ही सेन्सर मूल्यांवर ठरवलेल्या आहेत. म्हणून एम बी आर क्लीनिंगसाठी, एक विशिष्ट टँक-लेव्हल पॅटर्न इव्हेंट उघडतो, आणि दुसरा बंद करतो. दोन्ही कडा अचूक असल्याने, क्रियाकलाप कधी सुरू झाला आणि कधी संपला हे प्लॅटफॉर्मला नेमके कळते.",
        },
        {
          label: 'उपकरण', title: 'उपकरण व अ‍ॅसेटशी जोडलेले',
          body: "प्रत्येक इव्हेंट खऱ्या <strong>उपकरणाशी</strong> जोडलेला असतो — इथे <strong>MBR Tank-1</strong> आणि <strong>MBR Tank-2</strong> — आणि एका <strong>वर्कस्पेस व अ‍ॅसेटशी</strong>. एका साइटवर लक्ष द्यायला <strong>अ‍ॅसेट</strong>ने फिल्टर करा.",
          voice: "इव्हेंट नेहमी खऱ्या गोष्टीशी जोडलेला असतो. त्याच्याशी संबंधित उपकरण तुम्ही पाहू शकता — इथे, एम बी आर टँक एक आणि एम बी आर टँक दोन — आणि तो ज्या वर्कस्पेस व अ‍ॅसेटचा आहे, या प्रकरणात अमिटी युनिव्हर्सिटी. हा आधार महत्त्वाचा आहे: इव्हेंट एक अस्पष्ट नोंद नाही, तो नेमक्या प्लांटमधील नेमक्या उपकरणाकडे निर्देश करतो. आणि वर तुम्ही वर्कस्पेस व अ‍ॅसेटने फिल्टर करू शकता, म्हणजे अनेक साइट्स असलेला क्लायंट फक्त त्याला हव्या त्या साइटवर लक्ष केंद्रित करू शकतो.",
        },
        {
          label: 'मेट्रिक्स', title: 'कालावधी, पुनरावृत्ती व वारंवारता',
          body: "तीन मेट्रिक्स इव्हेंटचे वर्तन सारांशित करतात: <strong>सरासरी इव्हेंट कालावधी</strong> (<em>1 hr 35 min</em>), <strong>सरासरी पुनरावृत्ती वेळ</strong> (किती वेळा परत येतो), आणि <strong>वारंवारता</strong> (किती वेळा झाला — <em>2</em>).",
          voice: "ओळभर, तीन संख्या हा इव्हेंट काळानुसार कसा वागतो ते सांगतात. सरासरी इव्हेंट कालावधी — उघडल्यावर तो साधारण किती चालतो, इथे एक तास पस्तीस. सरासरी पुनरावृत्ती वेळ — एका घटनेपासून पुढच्यापर्यंत सरासरी किती. आणि वारंवारता — एकूण किती वेळा झाला, इथे फक्त दोनदा. एकत्रितपणे हे वेगवेगळ्या इव्हेंट्सच्या मालिकेला एका पॅटर्नमध्ये बदलतात ज्यावर तुम्ही विचार करू शकता: हा लांब होत आहे का, अधिक वारंवार, अधिक चिंतेचा?",
        },
        {
          label: 'तपशील', title: 'पूर्ण चित्रासाठी उघडा',
          body: "इव्हेंटवर क्लिक करा आणि <strong>Event Details</strong> उघडतात: वर्णन, तोच कालावधी, पुनरावृत्ती, वारंवारता, वर्कस्पेस, अ‍ॅसेट आणि उपकरण — सर्व एका ठिकाणी.",
          voice: "कोणत्याही इव्हेंटवर क्लिक करा आणि पूर्ण तपशील उघडतो. वर तुम्हाला पुन्हा वर्णन आणि मुख्य संख्या मिळतात — कालावधी, पुनरावृत्ती, वारंवारता — सोबत वर्कस्पेस, अ‍ॅसेट आणि सामील उपकरण, सर्व एका दृश्यात. हा इव्हेंट खऱ्या अर्थाने समजून घेण्याचा सुरुवातीचा बिंदू आहे: तो काय होता, कुठे झाला, आणि कसा वागत आला हे जाणण्यासाठी लागणारे सर्व, तपशिलात जाण्याआधी.",
        },
        {
          label: 'इतिहास', title: 'प्रत्येक घटना, नोंदवलेली',
          body: "<strong>Event History Logs</strong> इव्हेंट उघडला आणि बंद झाला त्या प्रत्येक वेळेची यादी करतात — प्रत्येक त्याच्या <strong>सुरुवात</strong>, <strong>शेवट</strong>, आणि मधल्या <strong>कालावधी</strong>सह. इथे तो एकदा <em>2 hrs 47 min</em> आणि दुसऱ्यांदा <em>23 min</em> चालला.",
          voice: "त्याखाली इव्हेंट हिस्ट्री लॉग्स आहेत — हा इव्हेंट उघडला आणि बंद झाला त्या प्रत्येक वेळेची नोंद. प्रत्येक नोंद दाखवते कधी सुरू झाला, कधी संपला, आणि नेमका किती चालला. इथे तुम्ही पाहू शकता एक घटना दोन तास सत्तेचाळीस मिनिटे चालली, आणि आधीची फक्त तेवीस. हा ऑडिट ट्रेल आहे: क्लायंट इव्हेंटची प्रत्येक घटना, अचूक टाइमस्टॅम्पसह, मागे स्क्रोल करू शकतो, आणि प्रत्येक कशी घडली ते पाहू शकतो. काहीही स्मृतीतून हरवत नाही.",
        },
        {
          label: 'चार्ट', title: 'मागची सेन्सर कथा',
          body: "शेवटी, प्रति-उपकरण <strong>सेन्सर चार्ट</strong> इव्हेंटच्या कालावधीभर रीडिंग प्लॉट करतात — इथे <strong>MBR Tank-1 LV</strong> आणि <strong>MBR Tank-2 LV</strong>. तो झाला एवढेच नाही; तो <strong>उघडणारी आणि बंद करणारी</strong> सेन्सर मूल्ये तुम्ही पाहता.",
          voice: "आणि शेवटी, सर्व जोडणारा भाग — सेन्सर चार्ट. प्रत्येक उपकरणासाठी, प्लॅटफॉर्म इव्हेंटच्या कालावधीभर संबंधित सेन्सर रीडिंग प्लॉट करते. इथे तुम्ही एम बी आर टँक दोन आणि एम बी आर टँक एकची पातळी क्लीनिंगदरम्यान हलताना पाहू शकता — वाढत, शिखरावर, स्थिरावत. हेच इव्हेंटला इतके शक्तिशाली बनवते: काहीतरी झाले आणि कधी एवढेच नाही, तर ते उघडणारी आणि बंद करणारी खरी सेन्सर मूल्ये तुम्ही पाहता. कधीच्या मागचे का, क्लायंटला नेमके ट्रॅक करण्यासाठी मांडलेले.",
          tip: { type: 'rememberLabel', text: 'इव्हेंट = उघडण्याची अट → Active → बंद होण्याची अट. हिस्ट्री प्रत्येक घटना नोंदवते; सेन्सर चार्ट ती चालवणारी रीडिंग दाखवतात.' },
        },
      ],
    },
  },
};

export default lesson;
