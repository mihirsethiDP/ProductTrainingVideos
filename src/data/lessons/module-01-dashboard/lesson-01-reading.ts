import type { AdvTableData, GraphData, Lesson } from '../../types';

// BASE_URL respects the Vite `base` (GitHub Pages subpath)
const BASE = `${import.meta.env.BASE_URL}screenshots/module-01`;

const v = (vals: (string | number)[]) => vals.map((x) => ({ value: String(x) }));

// A compact inlet/outlet quality table for the "Tables" step.
const qualityTable: AdvTableData = {
  accent: 'purple',
  title: 'Inlet & Outlet Quality',
  referenceLabel: 'Today',
  colHeaders: ['Inlet COD', 'Outlet COD', 'Inlet BOD', 'Outlet BOD', 'Outlet TSS'],
  rows: [
    { label: 'Current', cells: v([654.3, 24.16, 98.19, 8.69, 5.0]) },
    { label: 'Maximum', cells: v([699.56, 48.32, 353.93, 13.0, 9.5]) },
    { label: 'Minimum', cells: v([451.38, 9.35, 67.72, 0.75, 1.1]) },
    { label: 'Average', cells: v([657.56, 21.58, 214.89, 6.7, 2.6]) },
  ],
};

// A pH trend with a green "safe range" band for the "Trends" step.
const phTrend = (highlight?: GraphData['highlight']): GraphData => ({
  type: 'line',
  title: 'Outlet pH (Ref. 6.5 - 8.5)',
  plantTag: 'Adani Ahmedabad',
  xLabels: [
    '28Jun 06:00pm', '08:00pm', '10:00pm', '29Jun 12:00am', '02:00am', '04:00am',
    '06:00am', '08:00am', '10:00am', '12:00pm', '02:00pm', '04:00pm', '06:00pm',
  ],
  yMin: 0,
  yMax: 14,
  yStep: 2,
  fixedRanges: [
    { from: 0, to: 6.5, level: 'critical' },
    { from: 6.5, to: 8.5, level: 'good' },
    { from: 8.5, to: 14, level: 'critical' },
  ],
  series: [
    {
      name: 'Outlet pH',
      color: '#a4248f',
      endLabel: '7.02',
      points: [7.1, 7.0, 6.9, 7.2, 7.05, 6.85, 7.0, 7.15, 7.0, 6.95, 7.1, 7.0, 7.02],
    },
  ],
  highlight,
});

/**
 * Module 1 · Lesson 1 — What your dashboard shows.   Tag: M1.L1
 * An interactive orientation: instead of static screenshots, each step drives a
 * live widget recreation so the learner sees the *content* of a dashboard —
 * numbers, gauges, tables, trends — and how to read each at a glance. The
 * controls (page selector, time range, etc.) live in the next lesson.
 */
const lesson: Lesson = {
  id: 'lesson-01-reading',
  moduleId: 'module-01-dashboard',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {
    fullDashboard: `${BASE}/fullDashboard.jpg`,
  },
  layouts: [
    // S1 — the big picture (auto-scrolling tour of the real dashboard)
    { mode: 'showcase' },
    // S2 — Flow Metrics: a range-number widget + its period comparison
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Flow Metrics',
      widgetState: {
        accent: 'pink', title: 'MBR Permeate Flow (KL) - Phase-1', value: '354.05', unitTag: 'MBR',
        timeframeLabel: 'Last 24 Hours', fromLabel: 'Jun 28 | 17:50', toLabel: 'Jun 29 | 17:50',
        changePct: '13', highlight: 'value',
      },
      cursor: [
        { at: 0.2, x: 50, y: 44, click: true },
        { at: 0.7, x: 82, y: 88, click: true },
      ],
    },
    // S3 — Quality Parameters: a gauge read against safe limits
    {
      mode: 'widget', widget: 'gauge', caption: 'Quality Parameters',
      widgetState: {
        accent: 'teal', title: 'Outlet pH (Ref. 6.5 - 8.5)', value: '7.19', unitTag: 'Adani Ahmedabad',
        min: 0, max: 14,
        thresholds: [
          { from: 0, to: 6, level: 'critical' },
          { from: 6, to: 6.5, level: 'warning' },
          { from: 6.5, to: 8.5, level: 'good' },
          { from: 8.5, to: 9, level: 'warning' },
          { from: 9, to: 14, level: 'critical' },
        ],
        fromLabel: 'Jun 28 | 17:50', toLabel: 'Jun 29 | 17:50', changePct: '0', highlight: 'thresholds',
      },
      cursor: [
        { at: 0.25, x: 30, y: 40 },
        { at: 0.6, x: 70, y: 38 },
        { at: 0.85, x: 50, y: 46 },
      ],
    },
    // S4 — Tables: many sensors side by side
    {
      mode: 'widget', widget: 'advancedTable', caption: 'Tables',
      widgetState: { advTable: qualityTable },
      cursor: [
        { at: 0.2, x: 20, y: 30 },
        { at: 0.6, x: 60, y: 22 },
      ],
    },
    // S5 — Trends: a graph with a safe-range band
    {
      mode: 'widget', widget: 'graph', caption: 'Trends',
      widgetState: { graph: phTrend('ranges') },
      cursor: [
        { at: 0.25, x: 18, y: 50 },
        { at: 0.7, x: 80, y: 46 },
      ],
    },
    // S6 — recap on the full dashboard
    {
      mode: 'detail', screenshot: 'fullDashboard',
      spotlight: null, caption: 'The full picture',
      cursor: [
        { at: 0.2, x: 50, y: 20 },
        { at: 0.5, x: 50, y: 50 },
        { at: 0.8, x: 50, y: 80 },
      ],
    },
  ],
  content: {
    en: {
      title: 'What your <em>dashboard</em><br>shows.',
      subtitle:
        "Before the buttons and menus, let's learn to read the dashboard itself — the live widgets that turn a stream of sensor data into something you can act on at a glance.",
      chapter: "Chapter One · The Operator's Cockpit",
      steps: [
        {
          label: 'Overview', title: 'What you are looking at',
          body: "Your dashboard is a wall of <strong>live widgets</strong>, grouped into sections — flow metrics, quality parameters, tables, and trends. Each one reads a sensor in your plant and refreshes every minute. Let's learn to read each kind at a glance.",
          voice: "Welcome to your dashboard. At first glance it can look busy — but it's really just a set of live widgets, grouped into sections. Flow metrics near the top, then quality parameters, tables, and trend graphs. Every widget reads a sensor in your plant and refreshes every single minute. In this lesson, we'll learn to read each kind at a glance.",
        },
        {
          label: 'Flow Metrics', title: 'The big number — and the trend',
          body: "A <strong>Range Number</strong> widget shows one key reading, big and clear — here, <strong>MBR Permeate Flow</strong> at 354 KL. The percentage at the bottom compares it to the previous period, so you instantly know whether you're up or down.",
          voice: "First, the flow metrics. Each of these is a Range Number widget — one important reading, shown big and clear. This one is M B R permeate flow, three hundred fifty four kilolitres. Now look at the bottom: that percentage compares this period against the one before it. A small arrow tells you whether you've gone up or down — so you spot a change without doing any maths.",
          tip: { type: 'tipLabel', text: 'Down on permeate flow but steady on inlet? That is your cue to investigate.' },
        },
        {
          label: 'Quality Parameters', title: 'Reading against safe limits',
          body: "<strong>Gauge</strong> widgets show a reading against its safe range. Here, <strong>Outlet pH</strong> is 7.19, sitting in the <strong>green</strong> zone of the 6.5–8.5 limit. Green is healthy, yellow is caution, red means act now — no numbers to memorise.",
          voice: "Next, the quality parameters. These are gauge widgets. A gauge doesn't just show a number — it shows that number against its safe range. Here, outlet p H is seven point one nine, and the needle sits right in the green zone, between six point five and eight point five. Green means healthy. Yellow is a caution. Red means act now. So you can judge plant health in a single glance, without memorising any limits.",
        },
        {
          label: 'Tables', title: 'Many sensors, side by side',
          body: "When you need to compare lots of sensors at once, a <strong>Table</strong> widget lays them out in a grid — each row an aggregation like Current or Average, each column a sensor. Perfect for inlet-versus-outlet quality or a full shift summary.",
          voice: "Sometimes one number isn't enough — you want to compare many sensors together. That's what table widgets are for. They lay your readings out in a grid: each row an aggregation, like current, maximum, or average, and each column a sensor. This is how you'd check inlet against outlet quality, or read a full shift summary all at once.",
        },
        {
          label: 'Trends', title: 'How a reading moves over time',
          body: "A <strong>Graph</strong> plots a reading over time, so you can spot trends, spikes, and dips. The shaded <strong>green band</strong> is the safe range — as long as the line stays inside it, you're fine. Here, outlet pH holds steady around 7.",
          voice: "Finally, the trend graphs. A graph plots a reading over time, so you can see the whole story — a slow drift, a sudden spike, a dip overnight. The shaded green band is the safe range. As long as your line stays inside it, all is well. Here, outlet p H holds steady around seven, comfortably in the safe zone.",
        },
        {
          label: 'Recap', title: 'You can now read your dashboard',
          body: "That's the whole dashboard in a few building blocks: <strong>numbers, gauges, tables, and graphs</strong> — plus tickets and tank levels that work the same way. In <strong>Module 2</strong> we open each widget up in detail. Next, let's learn the controls that drive the whole page.",
          voice: "And that's your dashboard — just a few simple building blocks. Range numbers for a single reading, gauges for safe ranges, tables to compare many sensors, and graphs for trends over time. Tickets and tank levels follow the very same logic. In Module Two, we'll open up each of these widgets in detail. But next, let's learn the controls at the top that drive the entire page.",
          tip: { type: 'rememberLabel', text: 'Every widget refreshes on its own — but you can force a refresh any time. That is the next lesson.' },
        },
      ],
    },
    hi: {
      title: 'आपका <em>डैशबोर्ड</em><br>क्या दिखाता है।',
      subtitle:
        'बटन और मेन्यू से पहले, आइए डैशबोर्ड को ही पढ़ना सीखें — वे लाइव विजेट जो सेंसर डेटा की धारा को एक नज़र में समझने योग्य बना देते हैं।',
      chapter: 'अध्याय एक · ऑपरेटर का कॉकपिट',
      steps: [
        {
          label: 'अवलोकन', title: 'आप क्या देख रहे हैं',
          body: 'आपका डैशबोर्ड <strong>लाइव विजेट्स</strong> की एक दीवार है, जो खंडों में बँटी है — फ्लो मेट्रिक्स, क्वालिटी पैरामीटर, टेबल और ट्रेंड। हर विजेट आपके प्लांट के एक सेंसर को पढ़ता है और हर मिनट अपडेट होता है। आइए हर प्रकार को एक नज़र में पढ़ना सीखें।',
          voice: 'आपके डैशबोर्ड में आपका स्वागत है। पहली नज़र में यह व्यस्त लग सकता है — पर असल में यह बस लाइव विजेट्स का एक समूह है, जो खंडों में बँटा है। ऊपर फ्लो मेट्रिक्स, फिर क्वालिटी पैरामीटर, टेबल, और ट्रेंड ग्राफ़। हर विजेट आपके प्लांट के एक सेंसर को पढ़ता है और हर मिनट ताज़ा होता है। इस पाठ में, हम हर प्रकार को एक नज़र में पढ़ना सीखेंगे।',
        },
        {
          label: 'फ्लो मेट्रिक्स', title: 'बड़ा नंबर — और रुझान',
          body: '<strong>रेंज नंबर</strong> विजेट एक मुख्य रीडिंग को बड़ा और साफ़ दिखाता है — यहाँ <strong>MBR परमिएट फ्लो</strong> 354 KL पर है। नीचे का प्रतिशत इसे पिछली अवधि से तुलना करता है, जिससे आपको तुरंत पता चलता है कि यह बढ़ा या घटा।',
          voice: 'सबसे पहले, फ्लो मेट्रिक्स। इनमें से हर एक रेंज नंबर विजेट है — एक महत्वपूर्ण रीडिंग, बड़ा और साफ़। यह M B R परमिएट फ्लो है, तीन सौ चौवन किलोलीटर। अब नीचे देखें: वह प्रतिशत इस अवधि की तुलना पिछली अवधि से करता है। एक छोटा तीर बताता है कि आप बढ़े या घटे — तो आप बिना कोई गणित किए बदलाव पहचान लेते हैं।',
          tip: { type: 'tipLabel', text: 'परमिएट फ्लो घटा पर इनलेट स्थिर? यही जाँच करने का संकेत है।' },
        },
        {
          label: 'क्वालिटी पैरामीटर', title: 'सुरक्षित सीमा के सामने पढ़ना',
          body: '<strong>गेज</strong> विजेट किसी रीडिंग को उसकी सुरक्षित सीमा के सामने दिखाता है। यहाँ <strong>आउटलेट pH</strong> 7.19 है, जो 6.5–8.5 सीमा के <strong>हरे</strong> क्षेत्र में है। हरा यानी स्वस्थ, पीला यानी सावधानी, लाल यानी अभी कार्रवाई करें — कोई नंबर याद रखने की ज़रूरत नहीं।',
          voice: 'अब, क्वालिटी पैरामीटर। ये गेज विजेट हैं। गेज सिर्फ़ नंबर नहीं दिखाता — यह उस नंबर को उसकी सुरक्षित सीमा के सामने दिखाता है। यहाँ आउटलेट p H सात दशमलव एक नौ है, और सुई ठीक हरे क्षेत्र में बैठी है, छह दशमलव पाँच और आठ दशमलव पाँच के बीच। हरा यानी स्वस्थ। पीला यानी सावधानी। लाल यानी अभी कार्रवाई करें। तो आप एक नज़र में प्लांट की सेहत आँक सकते हैं, बिना कोई सीमा याद किए।',
        },
        {
          label: 'टेबल', title: 'कई सेंसर, साथ-साथ',
          body: 'जब आपको एक साथ कई सेंसर की तुलना करनी हो, तो <strong>टेबल</strong> विजेट उन्हें एक ग्रिड में रखता है — हर पंक्ति एक एग्रीगेशन जैसे करंट या औसत, हर कॉलम एक सेंसर। इनलेट बनाम आउटलेट क्वालिटी या पूरी शिफ्ट के सारांश के लिए बढ़िया।',
          voice: 'कभी-कभी एक नंबर काफ़ी नहीं होता — आप कई सेंसर एक साथ तुलना करना चाहते हैं। टेबल विजेट इसी के लिए हैं। ये आपकी रीडिंग्स को एक ग्रिड में रखते हैं: हर पंक्ति एक एग्रीगेशन, जैसे करंट, मैक्सिमम, या औसत, और हर कॉलम एक सेंसर। इसी तरह आप इनलेट की आउटलेट से तुलना करते हैं, या पूरी शिफ्ट का सारांश एक साथ पढ़ते हैं।',
        },
        {
          label: 'रुझान', title: 'समय के साथ रीडिंग कैसे बदलती है',
          body: 'एक <strong>ग्राफ़</strong> रीडिंग को समय के साथ दिखाता है, जिससे आप रुझान, उछाल और गिरावट पहचान सकते हैं। छायांकित <strong>हरा बैंड</strong> सुरक्षित सीमा है — जब तक लाइन इसके अंदर रहती है, सब ठीक है। यहाँ आउटलेट pH लगभग 7 पर स्थिर है।',
          voice: 'अंत में, ट्रेंड ग्राफ़। एक ग्राफ़ रीडिंग को समय के साथ दिखाता है, ताकि आप पूरी कहानी देख सकें — धीमी खिसकन, अचानक उछाल, रात भर की गिरावट। छायांकित हरा बैंड सुरक्षित सीमा है। जब तक आपकी लाइन इसके अंदर रहती है, सब ठीक है। यहाँ आउटलेट p H लगभग सात पर स्थिर है, आराम से सुरक्षित क्षेत्र में।',
        },
        {
          label: 'सारांश', title: 'अब आप अपना डैशबोर्ड पढ़ सकते हैं',
          body: 'यही है पूरा डैशबोर्ड, कुछ बुनियादी ब्लॉक्स में: <strong>नंबर, गेज, टेबल और ग्राफ़</strong> — साथ ही टिकट और टैंक लेवल जो इसी तरह काम करते हैं। <strong>मॉड्यूल 2</strong> में हम हर विजेट को विस्तार से खोलते हैं। आगे, आइए वे नियंत्रण सीखें जो पूरे पेज को चलाते हैं।',
          voice: 'और यही है आपका डैशबोर्ड — बस कुछ साधारण बुनियादी ब्लॉक्स। एक रीडिंग के लिए रेंज नंबर, सुरक्षित सीमा के लिए गेज, कई सेंसर की तुलना के लिए टेबल, और समय के साथ रुझान के लिए ग्राफ़। टिकट और टैंक लेवल भी ठीक इसी तर्क पर चलते हैं। मॉड्यूल दो में, हम इनमें से हर विजेट को विस्तार से खोलेंगे। पर आगे, आइए ऊपर के वे नियंत्रण सीखें जो पूरे पेज को चलाते हैं।',
          tip: { type: 'rememberLabel', text: 'हर विजेट खुद ताज़ा होता है — पर आप कभी भी रिफ्रेश कर सकते हैं। वह अगला पाठ है।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>டாஷ்போர்டு</em><br>என்ன காட்டுகிறது.',
      subtitle:
        'பொத்தான்கள், மெனுக்களுக்கு முன், டாஷ்போர்டையே படிக்கக் கற்போம் — சென்சார் தரவுப் பெருக்கை ஒரே பார்வையில் புரியும்படி மாற்றும் நேரடி விட்ஜெட்டுகள்.',
      chapter: 'அத்தியாயம் ஒன்று · இயக்குநரின் பணியிடம்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'நீங்கள் பார்ப்பது என்ன',
          body: 'உங்கள் டாஷ்போர்டு <strong>நேரடி விட்ஜெட்டுகளின்</strong> ஒரு சுவர், பிரிவுகளாகப் பிரிக்கப்பட்டது — ஃப்ளோ மெட்ரிக்ஸ், தர அளவுருக்கள், அட்டவணைகள், போக்குகள். ஒவ்வொன்றும் உங்கள் ஆலையின் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. ஒவ்வொரு வகையையும் ஒரே பார்வையில் படிக்கக் கற்போம்.',
          voice: 'உங்கள் டாஷ்போர்டுக்கு வரவேற்கிறேன். முதல் பார்வையில் இது நெரிசலாகத் தோன்றலாம் — ஆனால் இது உண்மையில் பிரிவுகளாகப் பிரிக்கப்பட்ட நேரடி விட்ஜெட்டுகளின் தொகுப்புதான். மேலே ஃப்ளோ மெட்ரிக்ஸ், பின் தர அளவுருக்கள், அட்டவணைகள், போக்கு வரைபடங்கள். ஒவ்வொரு விட்ஜெட்டும் உங்கள் ஆலையின் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. இந்தப் பாடத்தில், ஒவ்வொரு வகையையும் ஒரே பார்வையில் படிக்கக் கற்போம்.',
        },
        {
          label: 'ஃப்ளோ மெட்ரிக்ஸ்', title: 'பெரிய எண் — மற்றும் போக்கு',
          body: '<strong>ரேஞ்ச் நம்பர்</strong> விட்ஜெட் ஒரு முக்கிய அளவீட்டைப் பெரியதாகவும் தெளிவாகவும் காட்டுகிறது — இங்கே <strong>MBR பெர்மியேட் ஃப்ளோ</strong> 354 KL. கீழே உள்ள சதவீதம் அதை முந்தைய காலத்துடன் ஒப்பிடுகிறது, எனவே நீங்கள் உயர்ந்தீர்களா குறைந்தீர்களா என உடனே தெரியும்.',
          voice: 'முதலில், ஃப்ளோ மெட்ரிக்ஸ். இவை ஒவ்வொன்றும் ஒரு ரேஞ்ச் நம்பர் விட்ஜெட் — ஒரு முக்கிய அளவீடு, பெரியதாகவும் தெளிவாகவும். இது M B R பெர்மியேட் ஃப்ளோ, முந்நூற்று ஐம்பத்து நான்கு கிலோலிட்டர். இப்போது கீழே பாருங்கள்: அந்த சதவீதம் இந்தக் காலத்தை முந்தைய காலத்துடன் ஒப்பிடுகிறது. ஒரு சிறிய அம்பு நீங்கள் உயர்ந்தீர்களா குறைந்தீர்களா எனக் காட்டுகிறது — எந்தக் கணக்கும் இல்லாமல் மாற்றத்தை அறிகிறீர்கள்.',
          tip: { type: 'tipLabel', text: 'பெர்மியேட் ஃப்ளோ குறைந்து இன்லெட் நிலையாக உள்ளதா? அதுதான் ஆராயும் அறிகுறி.' },
        },
        {
          label: 'தர அளவுருக்கள்', title: 'பாதுகாப்பான வரம்புகளுக்கு எதிராக படித்தல்',
          body: '<strong>கேஜ்</strong> விட்ஜெட் ஒரு அளவீட்டை அதன் பாதுகாப்பான வரம்புக்கு எதிராகக் காட்டுகிறது. இங்கே <strong>அவுட்லெட் pH</strong> 7.19, 6.5–8.5 வரம்பின் <strong>பச்சை</strong> மண்டலத்தில் உள்ளது. பச்சை என்றால் ஆரோக்கியம், மஞ்சள் என்றால் எச்சரிக்கை, சிவப்பு என்றால் இப்போதே செயல்படுங்கள் — எந்த எண்ணையும் நினைவில் வைக்க வேண்டாம்.',
          voice: 'அடுத்து, தர அளவுருக்கள். இவை கேஜ் விட்ஜெட்டுகள். ஒரு கேஜ் வெறும் எண்ணைக் காட்டுவதில்லை — அந்த எண்ணை அதன் பாதுகாப்பான வரம்புக்கு எதிராகக் காட்டுகிறது. இங்கே அவுட்லெட் p H ஏழு புள்ளி ஒன்று ஒன்பது, ஊசி சரியாக பச்சை மண்டலத்தில், ஆறு புள்ளி ஐந்துக்கும் எட்டு புள்ளி ஐந்துக்கும் இடையில் உள்ளது. பச்சை என்றால் ஆரோக்கியம். மஞ்சள் எச்சரிக்கை. சிவப்பு என்றால் இப்போதே செயல்படுங்கள். எனவே எந்த வரம்பையும் நினைவில் வைக்காமல், ஒரே பார்வையில் ஆலையின் ஆரோக்கியத்தை மதிப்பிடலாம்.',
        },
        {
          label: 'அட்டவணைகள்', title: 'பல சென்சார்கள், அருகருகே',
          body: 'பல சென்சார்களை ஒரே நேரத்தில் ஒப்பிட வேண்டியிருந்தால், <strong>அட்டவணை</strong> விட்ஜெட் அவற்றை ஒரு கட்டத்தில் அமைக்கிறது — ஒவ்வொரு வரிசையும் கரண்ட் அல்லது சராசரி போன்ற ஒரு திரட்டல், ஒவ்வொரு நெடுவரிசையும் ஒரு சென்சார். இன்லெட்-அவுட்லெட் தரம் அல்லது முழு ஷிஃப்ட் சுருக்கத்திற்கு ஏற்றது.',
          voice: 'சில நேரம் ஒரு எண் போதாது — பல சென்சார்களை ஒன்றாக ஒப்பிட விரும்புகிறீர்கள். அதற்குத்தான் அட்டவணை விட்ஜெட்டுகள். உங்கள் அளவீடுகளை ஒரு கட்டத்தில் அமைக்கின்றன: ஒவ்வொரு வரிசையும் கரண்ட், மேக்சிமம், அல்லது சராசரி போன்ற ஒரு திரட்டல், ஒவ்வொரு நெடுவரிசையும் ஒரு சென்சார். இப்படித்தான் இன்லெட்டை அவுட்லெட்டுடன் ஒப்பிடுவீர்கள், அல்லது முழு ஷிஃப்ட் சுருக்கத்தை ஒரே நேரத்தில் படிப்பீர்கள்.',
        },
        {
          label: 'போக்குகள்', title: 'காலப்போக்கில் அளவீடு எப்படி நகர்கிறது',
          body: 'ஒரு <strong>வரைபடம்</strong> அளவீட்டைக் காலப்போக்கில் வரைகிறது, எனவே போக்குகள், உச்சங்கள், சரிவுகளை அறியலாம். நிழலிட்ட <strong>பச்சை பட்டை</strong> பாதுகாப்பான வரம்பு — கோடு அதற்குள் இருக்கும் வரை, எல்லாம் சரி. இங்கே அவுட்லெட் pH சுமார் 7-இல் நிலையாக உள்ளது.',
          voice: 'கடைசியாக, போக்கு வரைபடங்கள். ஒரு வரைபடம் அளவீட்டைக் காலப்போக்கில் வரைகிறது, எனவே முழுக் கதையையும் காணலாம் — மெதுவான நகர்வு, திடீர் உச்சம், இரவில் ஒரு சரிவு. நிழலிட்ட பச்சை பட்டை பாதுகாப்பான வரம்பு. உங்கள் கோடு அதற்குள் இருக்கும் வரை, எல்லாம் நலம். இங்கே அவுட்லெட் p H சுமார் ஏழில் நிலையாக, பாதுகாப்பான மண்டலத்தில் வசதியாக உள்ளது.',
        },
        {
          label: 'மீள்பார்வை', title: 'இப்போது உங்கள் டாஷ்போர்டைப் படிக்கலாம்',
          body: 'இதுதான் முழு டாஷ்போர்டு, சில அடிப்படை கட்டகங்களில்: <strong>எண்கள், கேஜ்கள், அட்டவணைகள், வரைபடங்கள்</strong> — மேலும் இதே போல் வேலை செய்யும் டிக்கெட்டுகள், டேங்க் அளவுகள். <strong>தொகுதி 2</strong>-இல் ஒவ்வொரு விட்ஜெட்டையும் விரிவாகத் திறக்கிறோம். அடுத்து, முழு பக்கத்தையும் இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.',
          voice: 'இதுதான் உங்கள் டாஷ்போர்டு — சில எளிய அடிப்படை கட்டகங்கள். ஒரு அளவீட்டிற்கு ரேஞ்ச் நம்பர், பாதுகாப்பான வரம்புகளுக்கு கேஜ், பல சென்சார்களை ஒப்பிட அட்டவணை, காலப்போக்கில் போக்குகளுக்கு வரைபடம். டிக்கெட்டுகளும் டேங்க் அளவுகளும் இதே தர்க்கத்தைப் பின்பற்றுகின்றன. தொகுதி இரண்டில், இந்த ஒவ்வொரு விட்ஜெட்டையும் விரிவாகத் திறப்போம். ஆனால் அடுத்து, மேலே முழு பக்கத்தையும் இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.',
          tip: { type: 'rememberLabel', text: 'ஒவ்வொரு விட்ஜெட்டும் தானாகப் புதுப்பிக்கிறது — ஆனால் எப்போது வேண்டுமானாலும் ரிஃப்ரெஷ் செய்யலாம். அது அடுத்த பாடம்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>डॅशबोर्ड</em><br>काय दाखवतो.',
      subtitle:
        'बटणे आणि मेनूंच्या आधी, चला डॅशबोर्डच वाचायला शिकूया — ते लाइव्ह विजेट्स जे सेन्सर डेटाच्या प्रवाहाला एका नजरेत समजेल असे बनवतात.',
      chapter: 'अध्याय एक · ऑपरेटरचे कॉकपिट',
      steps: [
        {
          label: 'आढावा', title: 'तुम्ही काय पाहत आहात',
          body: 'तुमचा डॅशबोर्ड <strong>लाइव्ह विजेट्सची</strong> एक भिंत आहे, विभागांमध्ये विभागलेली — फ्लो मेट्रिक्स, क्वालिटी पॅरामीटर्स, टेबल्स आणि ट्रेंड्स. प्रत्येक तुमच्या प्लांटमधील एक सेन्सर वाचतो आणि दर मिनिटाला अपडेट होतो. चला प्रत्येक प्रकार एका नजरेत वाचायला शिकूया.',
          voice: 'तुमच्या डॅशबोर्डवर स्वागत आहे. पहिल्या नजरेत हा गर्दीचा वाटू शकतो — पण खरं तर हा फक्त विभागांमध्ये विभागलेल्या लाइव्ह विजेट्सचा संच आहे. वर फ्लो मेट्रिक्स, मग क्वालिटी पॅरामीटर्स, टेबल्स, आणि ट्रेंड ग्राफ. प्रत्येक विजेट तुमच्या प्लांटमधील एक सेन्सर वाचतो आणि दर मिनिटाला ताजा होतो. या धड्यात, आपण प्रत्येक प्रकार एका नजरेत वाचायला शिकू.',
        },
        {
          label: 'फ्लो मेट्रिक्स', title: 'मोठा आकडा — आणि कल',
          body: '<strong>रेंज नंबर</strong> विजेट एक महत्त्वाचे रीडिंग मोठे आणि स्पष्ट दाखवते — येथे <strong>MBR परमिएट फ्लो</strong> 354 KL वर आहे. खालची टक्केवारी त्याची मागील कालावधीशी तुलना करते, त्यामुळे तुम्ही वाढलात की घटलात हे लगेच कळते.',
          voice: 'सर्वप्रथम, फ्लो मेट्रिक्स. यातील प्रत्येक एक रेंज नंबर विजेट आहे — एक महत्त्वाचे रीडिंग, मोठे आणि स्पष्ट. हे M B R परमिएट फ्लो आहे, तीनशे चौपन्न किलोलीटर. आता खाली पाहा: ती टक्केवारी या कालावधीची मागील कालावधीशी तुलना करते. एक लहान बाण सांगतो की तुम्ही वाढलात की घटलात — म्हणजे कोणतेही गणित न करता तुम्ही बदल ओळखता.',
          tip: { type: 'tipLabel', text: 'परमिएट फ्लो घटला पण इनलेट स्थिर? तीच तपासणीची खूण आहे.' },
        },
        {
          label: 'क्वालिटी पॅरामीटर्स', title: 'सुरक्षित मर्यादांसमोर वाचणे',
          body: '<strong>गेज</strong> विजेट एखादे रीडिंग त्याच्या सुरक्षित श्रेणीसमोर दाखवते. येथे <strong>आउटलेट pH</strong> 7.19 आहे, जो 6.5–8.5 मर्यादेच्या <strong>हिरव्या</strong> क्षेत्रात आहे. हिरवा म्हणजे निरोगी, पिवळा म्हणजे सावधानता, लाल म्हणजे आत्ता कृती करा — कोणतेही आकडे लक्षात ठेवण्याची गरज नाही.',
          voice: 'पुढे, क्वालिटी पॅरामीटर्स. ही गेज विजेट्स आहेत. गेज फक्त आकडा दाखवत नाही — तो आकडा त्याच्या सुरक्षित श्रेणीसमोर दाखवते. येथे आउटलेट p H सात पूर्णांक एकोणीस आहे, आणि सुई बरोबर हिरव्या क्षेत्रात, सहा पूर्णांक पाच आणि आठ पूर्णांक पाच यांच्या दरम्यान आहे. हिरवा म्हणजे निरोगी. पिवळा म्हणजे सावधानता. लाल म्हणजे आत्ता कृती करा. म्हणजे कोणतीही मर्यादा लक्षात न ठेवता, एका नजरेत प्लांटचे आरोग्य ठरवू शकता.',
        },
        {
          label: 'टेबल्स', title: 'अनेक सेन्सर्स, शेजारी-शेजारी',
          body: 'जेव्हा तुम्हाला एकाच वेळी अनेक सेन्सर्सची तुलना करायची असते, तेव्हा <strong>टेबल</strong> विजेट त्यांना एका ग्रिडमध्ये मांडते — प्रत्येक ओळ करंट किंवा सरासरीसारखे एक एकत्रीकरण, प्रत्येक स्तंभ एक सेन्सर. इनलेट विरुद्ध आउटलेट क्वालिटी किंवा संपूर्ण शिफ्ट सारांशासाठी उत्तम.',
          voice: 'कधी कधी एक आकडा पुरेसा नसतो — तुम्हाला अनेक सेन्सर्स एकत्र तुलना करायचे असतात. त्यासाठीच टेबल विजेट्स आहेत. ते तुमची रीडिंग्ज एका ग्रिडमध्ये मांडतात: प्रत्येक ओळ करंट, मॅक्सिमम किंवा सरासरीसारखे एक एकत्रीकरण, आणि प्रत्येक स्तंभ एक सेन्सर. अशा प्रकारे तुम्ही इनलेटची आउटलेटशी तुलना करता, किंवा संपूर्ण शिफ्टचा सारांश एकाच वेळी वाचता.',
        },
        {
          label: 'ट्रेंड्स', title: 'कालांतराने रीडिंग कसे बदलते',
          body: 'एक <strong>ग्राफ</strong> रीडिंग कालांतराने रेखाटतो, त्यामुळे तुम्ही कल, उसळी आणि घसरण ओळखू शकता. छायांकित <strong>हिरवा पट्टा</strong> सुरक्षित श्रेणी आहे — जोपर्यंत रेषा त्याच्या आत राहते, तोपर्यंत सर्व ठीक. येथे आउटलेट pH सुमारे 7 वर स्थिर आहे.',
          voice: 'शेवटी, ट्रेंड ग्राफ. एक ग्राफ रीडिंग कालांतराने रेखाटतो, त्यामुळे तुम्ही संपूर्ण कथा पाहू शकता — हळू सरकणे, अचानक उसळी, रात्रभरातील घसरण. छायांकित हिरवा पट्टा सुरक्षित श्रेणी आहे. जोपर्यंत तुमची रेषा त्याच्या आत राहते, तोपर्यंत सर्व ठीक. येथे आउटलेट p H सुमारे सातवर स्थिर आहे, आरामात सुरक्षित क्षेत्रात.',
        },
        {
          label: 'सारांश', title: 'आता तुम्ही तुमचा डॅशबोर्ड वाचू शकता',
          body: 'हाच आहे संपूर्ण डॅशबोर्ड, काही मूलभूत घटकांमध्ये: <strong>आकडे, गेज, टेबल्स आणि ग्राफ</strong> — तसेच याच पद्धतीने काम करणारे तिकिटे आणि टँक लेव्हल्स. <strong>मॉड्यूल 2</strong> मध्ये आपण प्रत्येक विजेट सविस्तर उघडतो. पुढे, संपूर्ण पान चालवणारी नियंत्रणे शिकूया.',
          voice: 'आणि हाच तुमचा डॅशबोर्ड — फक्त काही साधे मूलभूत घटक. एका रीडिंगसाठी रेंज नंबर, सुरक्षित श्रेणींसाठी गेज, अनेक सेन्सर्सच्या तुलनेसाठी टेबल, आणि कालांतराने कलांसाठी ग्राफ. तिकिटे आणि टँक लेव्हल्सही याच तर्कावर चालतात. मॉड्यूल दोनमध्ये, आपण यातील प्रत्येक विजेट सविस्तर उघडू. पण पुढे, वरची संपूर्ण पान चालवणारी नियंत्रणे शिकूया.',
          tip: { type: 'rememberLabel', text: 'प्रत्येक विजेट आपोआप ताजे होते — पण तुम्ही कधीही रिफ्रेश करू शकता. तो पुढचा धडा आहे.' },
        },
      ],
    },
  },
};

export default lesson;
