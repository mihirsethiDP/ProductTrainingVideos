import type { AdvTableData, GraphData, Lesson } from '../../types';

// BASE_URL respects the Vite `base` (GitHub Pages subpath)
const BASE = `${import.meta.env.BASE_URL}screenshots/module-01`;

const v = (vals: (string | number)[]) => vals.map((x) => ({ value: String(x) }));

// A neutral, illustrative table — generic parameters, not any client's data.
const exampleTable: AdvTableData = {
  accent: 'purple',
  title: 'Comparing several sensors',
  referenceLabel: 'Today',
  colHeaders: ['Flow', 'Level', 'pH', 'D.O.', 'Turbidity'],
  rows: [
    { label: 'Current', cells: v([128, 62, 7.2, 2.1, 3.4]) },
    { label: 'Maximum', cells: v([164, 88, 7.8, 3.0, 6.1]) },
    { label: 'Minimum', cells: v([96, 41, 6.7, 1.2, 1.1]) },
    { label: 'Average', cells: v([131, 60, 7.1, 2.2, 3.0]) },
  ],
};

// An illustrative trend with a green "safe range" band — no plant-specific data.
const exampleTrend = (highlight?: GraphData['highlight']): GraphData => ({
  type: 'line',
  title: 'A reading over time',
  xLabels: [
    '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00',
    '20:00', '22:00', '00:00', '02:00', '04:00', '06:00',
  ],
  yMin: 0,
  yMax: 100,
  yStep: 20,
  fixedRanges: [
    { from: 0, to: 35, level: 'critical' },
    { from: 35, to: 75, level: 'good' },
    { from: 75, to: 100, level: 'critical' },
  ],
  series: [
    {
      name: 'Reading',
      color: '#a4248f',
      endLabel: '58',
      points: [52, 58, 61, 55, 49, 57, 66, 71, 63, 55, 50, 56, 58],
    },
  ],
  highlight,
});

/**
 * Module 1 · Lesson 1 — What your dashboard shows.   Tag: M1.L1
 * GENERAL know-how: teaches the widget *types* and how to read each at a glance.
 * The widgets look the same for every client — only the sensors & numbers behind
 * them differ — so this lesson stays deliberately generic. Client-specific data
 * lives in personalized demos, never here. Controls are in the next lesson.
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
    // S1 — the big picture (auto-scrolling tour of a dashboard)
    { mode: 'showcase' },
    // S2 — the Number widget + its period comparison
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'The Number widget',
      widgetState: {
        accent: 'pink', title: 'Flow Rate', value: '128', unitTag: 'Your Plant',
        timeframeLabel: 'Last 24 Hours', fromLabel: 'Yesterday', toLabel: 'Today',
        changePct: '8', highlight: 'value',
      },
      cursor: [
        { at: 0.2, x: 50, y: 44, click: true },
        { at: 0.7, x: 82, y: 88, click: true },
      ],
    },
    // S3 — the Gauge: a reading against its safe range
    {
      mode: 'widget', widget: 'gauge', caption: 'The Gauge widget',
      widgetState: {
        accent: 'teal', title: 'Reading vs. safe range', value: '72', unitTag: 'Your Plant',
        min: 0, max: 100,
        thresholds: [
          { from: 0, to: 35, level: 'critical' },
          { from: 35, to: 55, level: 'warning' },
          { from: 55, to: 85, level: 'good' },
          { from: 85, to: 100, level: 'warning' },
        ],
        fromLabel: 'Yesterday', toLabel: 'Today', changePct: '0', highlight: 'thresholds',
      },
      cursor: [
        { at: 0.25, x: 30, y: 40 },
        { at: 0.6, x: 70, y: 38 },
        { at: 0.85, x: 50, y: 46 },
      ],
    },
    // S4 — the Table: many sensors side by side
    {
      mode: 'widget', widget: 'advancedTable', caption: 'The Table widget',
      widgetState: { advTable: exampleTable },
      cursor: [
        { at: 0.2, x: 20, y: 30 },
        { at: 0.6, x: 60, y: 22 },
      ],
    },
    // S5 — the Graph: a reading over time with a safe-range band
    {
      mode: 'widget', widget: 'graph', caption: 'The Graph widget',
      widgetState: { graph: exampleTrend('ranges') },
      cursor: [
        { at: 0.25, x: 18, y: 50 },
        { at: 0.7, x: 80, y: 46 },
      ],
    },
    // S6 — recap on a full dashboard
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
        "Before the buttons and menus, let's learn to read the dashboard itself. Every dashboard is a different mix of widgets, arranged however the plant needs — but each one is assembled from the same small set of widget types. Learn to read the types, and you can read any dashboard.",
      chapter: "Chapter One · The Operator's Cockpit",
      steps: [
        {
          label: 'Overview', title: 'A mix of live widgets',
          body: "A dashboard is a set of <strong>live widgets</strong>, mixed and matched in whatever order suits the plant — so no two dashboards look alike. Each reads one sensor and refreshes every minute. What they all share is a small palette of widget <em>types</em>; learn those and any dashboard makes sense.",
          voice: "Let's learn to read your dashboard. However busy it looks, it's just a set of live widgets, each reading one sensor and refreshing every minute. Now, every plant's dashboard is a different mix — the widgets are arranged in whatever order suits that plant, so no two look the same. But here's the useful part: they're all assembled from the same small set of widget types. So instead of memorising a layout, you learn the few types — and then you can read any dashboard. Let's go through them.",
        },
        {
          label: 'The Number', title: 'One reading, and its trend',
          body: "The <strong>Number</strong> widget shows a single reading, big and clear — whatever sensor is plotted on it. The percentage at the bottom compares this period with the one before, so you instantly see whether it's rising or falling.",
          voice: "First, the Number widget. It shows one reading, big and clear — whatever sensor you've put on it. The important habit is the figure at the bottom: it compares the current period against the one before, with a small arrow. Up or down — you spot a change at a glance, whatever the reading happens to be.",
        },
        {
          label: 'The Gauge', title: 'Is the reading in a safe range?',
          body: "A <strong>Gauge</strong> shows a reading against its <strong>safe range</strong>. Green means healthy, amber is caution, red means act. Whatever the parameter, if the needle sits in the green you're fine — the colours mean you never have to memorise the limits.",
          voice: "Next, the Gauge. A gauge doesn't just show a number — it shows that number against its safe range. Green means healthy, amber is a caution, red means act now. Whatever the parameter behind it, all you do is check where the needle sits. The colours carry the meaning, so you never have to remember anyone's limits.",
        },
        {
          label: 'The Table', title: 'Many sensors, side by side',
          body: "A <strong>Table</strong> lays several sensors out in a grid — each row an aggregation like Current, Maximum or Average, each column a sensor. It's how you compare a set of readings at once, whatever your plant tracks.",
          voice: "When one number isn't enough, the Table widget lays many sensors side by side. Each row is an aggregation — current, maximum, minimum, average — and each column is a sensor. It's how you'd compare a whole set of readings in one place, whatever your plant happens to measure.",
        },
        {
          label: 'The Graph', title: 'How a reading moves over time',
          body: "A <strong>Graph</strong> plots a reading over time, so you can spot trends, spikes and dips. A shaded <strong>green band</strong> marks the safe range — as long as the line stays inside it, you're fine. The shape tells the story, whatever the sensor.",
          voice: "Finally, the Graph. It plots a reading over time, so you see the story — a slow drift, a sudden spike, a dip overnight. The shaded green band is the safe range: as long as the line stays inside it, all is well. Whatever the sensor, the shape of the line is what you're reading.",
        },
        {
          label: 'Recap', title: 'You can now read any dashboard',
          body: "That's the toolkit — <strong>Number, Gauge, Table and Graph</strong>. Every dashboard is just some mix of these, arranged its own way, so however your plant's dashboard is laid out, you can now read it. Next, let's learn the controls that drive the page.",
          voice: "And that's the toolkit — the Number, the Gauge, the Table and the Graph. Every dashboard is just some mix of these, arranged in its own way. So however your plant's dashboard happens to be laid out, and whichever sensors it uses, you can now read it. Next, let's learn the controls at the top that drive the whole page.",
          tip: { type: 'rememberLabel', text: 'No two dashboards look alike — but every one is a mix of these same few widget types.' },
        },
      ],
    },
    hi: {
      title: 'आपका <em>डैशबोर्ड</em><br>क्या दिखाता है।',
      subtitle:
        'बटन और मेन्यू से पहले, आइए डैशबोर्ड को ही पढ़ना सीखें। हर डैशबोर्ड इन्हीं विजेट्स का एक अलग मिश्रण होता है, प्लांट की ज़रूरत के अनुसार सजाया गया — पर हर एक बस कुछ ही विजेट प्रकारों से बना होता है। प्रकार पढ़ना सीख लें, तो कोई भी डैशबोर्ड पढ़ सकते हैं।',
      chapter: 'अध्याय एक · ऑपरेटर का कॉकपिट',
      steps: [
        {
          label: 'अवलोकन', title: 'लाइव विजेट्स का मिश्रण',
          body: 'डैशबोर्ड <strong>लाइव विजेट्स</strong> का समूह है — प्लांट की ज़रूरत के अनुसार किसी भी क्रम में मिलाए-जुलाए, इसलिए कोई दो डैशबोर्ड एक जैसे नहीं दिखते। हर विजेट एक सेंसर पढ़ता है और हर मिनट अपडेट होता है। इन सबमें समान है कुछ ही विजेट <em>प्रकार</em>; वे सीख लें तो कोई भी डैशबोर्ड समझ आ जाता है।',
          voice: "आइए आपका डैशबोर्ड पढ़ना सीखें। यह कितना भी व्यस्त दिखे, यह बस लाइव विजेट्स का समूह है, हर एक एक सेंसर पढ़ता और हर मिनट ताज़ा होता। अब, हर प्लांट का डैशबोर्ड एक अलग मिश्रण है — विजेट उस प्लांट की ज़रूरत के अनुसार किसी भी क्रम में सजे होते हैं, इसलिए कोई दो एक जैसे नहीं दिखते। पर काम की बात यह है: ये सब बस कुछ ही विजेट प्रकारों से बने होते हैं। तो किसी लेआउट को याद करने के बजाय, आप ये कुछ प्रकार सीखते हैं — और फिर कोई भी डैशबोर्ड पढ़ सकते हैं। आइए इन्हें देखें।",
        },
        {
          label: 'नंबर', title: 'एक रीडिंग, और उसका रुझान',
          body: '<strong>नंबर</strong> विजेट एक रीडिंग बड़ा और साफ़ दिखाता है — जो भी सेंसर उस पर लगाया हो। नीचे का प्रतिशत इस अवधि की तुलना पिछली से करता है, जिससे तुरंत पता चलता है कि यह बढ़ रहा है या घट रहा है।',
          voice: "सबसे पहले, नंबर विजेट। यह एक रीडिंग बड़ा और साफ़ दिखाता है — जो भी सेंसर आपने उस पर लगाया हो। ज़रूरी आदत है नीचे का आँकड़ा: यह इस अवधि की तुलना पिछली अवधि से करता है, एक छोटे तीर के साथ। ऊपर या नीचे — आप एक नज़र में बदलाव पकड़ लेते हैं, रीडिंग चाहे जो भी हो।",
        },
        {
          label: 'गेज', title: 'क्या रीडिंग सुरक्षित सीमा में है?',
          body: '<strong>गेज</strong> किसी रीडिंग को उसकी <strong>सुरक्षित सीमा</strong> के सामने दिखाता है। हरा यानी स्वस्थ, पीला यानी सावधानी, लाल यानी कार्रवाई। पैरामीटर चाहे जो हो, अगर सुई हरे में है तो सब ठीक — रंग बताते हैं, सीमाएँ याद रखने की ज़रूरत नहीं।',
          voice: "अब, गेज। गेज सिर्फ़ नंबर नहीं दिखाता — यह उस नंबर को उसकी सुरक्षित सीमा के सामने दिखाता है। हरा यानी स्वस्थ, पीला यानी सावधानी, लाल यानी अभी कार्रवाई करें। पीछे का पैरामीटर चाहे जो हो, आपको बस देखना है कि सुई कहाँ है। अर्थ रंग बताते हैं, तो आपको किसी की सीमाएँ याद रखने की ज़रूरत नहीं।",
        },
        {
          label: 'टेबल', title: 'कई सेंसर, साथ-साथ',
          body: 'एक <strong>टेबल</strong> कई सेंसर को एक ग्रिड में रखती है — हर पंक्ति एक एग्रीगेशन जैसे करंट, मैक्सिमम या औसत, हर कॉलम एक सेंसर। यह एक साथ कई रीडिंग की तुलना करने का तरीका है, आपका प्लांट जो भी मापे।',
          voice: "जब एक नंबर काफ़ी न हो, टेबल विजेट कई सेंसर साथ-साथ रखता है। हर पंक्ति एक एग्रीगेशन है — करंट, मैक्सिमम, मिनिमम, औसत — और हर कॉलम एक सेंसर। यह पूरे सेट की रीडिंग एक जगह तुलना करने का तरीका है, आपका प्लांट चाहे जो भी मापे।",
        },
        {
          label: 'ग्राफ़', title: 'समय के साथ रीडिंग कैसे बदलती है',
          body: 'एक <strong>ग्राफ़</strong> रीडिंग को समय के साथ दिखाता है, जिससे आप रुझान, उछाल और गिरावट पहचानते हैं। छायांकित <strong>हरा बैंड</strong> सुरक्षित सीमा है — जब तक लाइन इसके अंदर है, सब ठीक। सेंसर चाहे जो हो, आकार कहानी बताता है।',
          voice: "अंत में, ग्राफ़। यह रीडिंग को समय के साथ दिखाता है, ताकि आप पूरी कहानी देखें — धीमी खिसकन, अचानक उछाल, रात भर की गिरावट। छायांकित हरा बैंड सुरक्षित सीमा है: जब तक लाइन इसके अंदर है, सब ठीक। सेंसर चाहे जो हो, आप लाइन का आकार ही पढ़ रहे हैं।",
        },
        {
          label: 'सारांश', title: 'अब आप कोई भी डैशबोर्ड पढ़ सकते हैं',
          body: 'यही है टूलकिट — <strong>नंबर, गेज, टेबल और ग्राफ़</strong>। हर डैशबोर्ड इन्हीं का कोई मिश्रण है, अपने ढंग से सजा हुआ, इसलिए आपके प्लांट का डैशबोर्ड चाहे जैसे भी बना हो, अब आप उसे पढ़ सकते हैं। आगे, पेज चलाने वाले नियंत्रण सीखें।',
          voice: "और यही है टूलकिट — नंबर, गेज, टेबल और ग्राफ़। हर डैशबोर्ड बस इन्हीं का कोई मिश्रण है, अपने ढंग से सजा हुआ। तो आपके प्लांट का डैशबोर्ड चाहे जैसे भी बना हो, और चाहे जो सेंसर इस्तेमाल करे, अब आप उसे पढ़ सकते हैं। आगे, ऊपर के वे नियंत्रण सीखें जो पूरे पेज को चलाते हैं।",
          tip: { type: 'rememberLabel', text: 'कोई दो डैशबोर्ड एक जैसे नहीं होते — पर हर एक इन्हीं कुछ विजेट प्रकारों का मिश्रण है।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>டாஷ்போர்டு</em><br>என்ன காட்டுகிறது.',
      subtitle:
        'பொத்தான்கள், மெனுக்களுக்கு முன், டாஷ்போர்டையே படிக்கக் கற்போம். ஒவ்வொரு டாஷ்போர்டும் இந்த விட்ஜெட்டுகளின் வெவ்வேறு கலவை, ஆலையின் தேவைக்கேற்ப அமைக்கப்பட்டது — ஆனால் ஒவ்வொன்றும் அதே சில விட்ஜெட் வகைகளால் ஆனது. வகைகளைப் படிக்கக் கற்றால், எந்த டாஷ்போர்டையும் படிக்கலாம்.',
      chapter: 'அத்தியாயம் ஒன்று · இயக்குநரின் பணியிடம்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'நேரடி விட்ஜெட்டுகளின் கலவை',
          body: 'டாஷ்போர்டு என்பது <strong>நேரடி விட்ஜெட்டுகளின்</strong> தொகுப்பு — ஆலையின் தேவைக்கேற்ப எந்த வரிசையிலும் கலந்து அமைக்கப்பட்டவை, எனவே இரண்டு டாஷ்போர்டுகள் ஒரே மாதிரி இருப்பதில்லை. ஒவ்வொன்றும் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. அவை அனைத்திற்கும் பொதுவானது சில விட்ஜெட் <em>வகைகள்</em>; அவற்றைக் கற்றால் எந்த டாஷ்போர்டும் புரியும்.',
          voice: "உங்கள் டாஷ்போர்டைப் படிக்கக் கற்போம். இது எவ்வளவு நெரிசலாகத் தோன்றினாலும், இது நேரடி விட்ஜெட்டுகளின் தொகுப்புதான், ஒவ்வொன்றும் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. இப்போது, ஒவ்வொரு ஆலையின் டாஷ்போர்டும் வெவ்வேறு கலவை — விட்ஜெட்டுகள் அந்த ஆலையின் தேவைக்கேற்ப எந்த வரிசையிலும் அமைக்கப்படுகின்றன, எனவே இரண்டு ஒரே மாதிரி இருப்பதில்லை. ஆனால் முக்கியமான விஷயம்: அவை அனைத்தும் அதே சில விட்ஜெட் வகைகளால் ஆனவை. எனவே ஒரு லேஅவுட்டை மனப்பாடம் செய்வதற்குப் பதிலாக, இந்த சில வகைகளைக் கற்கிறீர்கள் — பிறகு எந்த டாஷ்போர்டையும் படிக்கலாம். அவற்றைப் பார்ப்போம்.",
        },
        {
          label: 'எண்', title: 'ஒரு அளவீடு, அதன் போக்கு',
          body: '<strong>எண்</strong> விட்ஜெட் ஒரு அளவீட்டைப் பெரியதாகவும் தெளிவாகவும் காட்டுகிறது — அதில் எந்தச் சென்சார் இட்டாலும். கீழே உள்ள சதவீதம் இந்தக் காலத்தை முந்தையதுடன் ஒப்பிடுகிறது, எனவே அது ஏறுகிறதா இறங்குகிறதா உடனே தெரியும்.',
          voice: "முதலில், எண் விட்ஜெட். இது ஒரு அளவீட்டைப் பெரியதாகவும் தெளிவாகவும் காட்டுகிறது — நீங்கள் அதில் எந்தச் சென்சார் இட்டாலும். முக்கியப் பழக்கம் கீழே உள்ள எண்: இது இந்தக் காலத்தை முந்தைய காலத்துடன் ஒரு சிறிய அம்புடன் ஒப்பிடுகிறது. மேலே அல்லது கீழே — அளவீடு எதுவாக இருந்தாலும், ஒரே பார்வையில் மாற்றத்தை அறிகிறீர்கள்.",
        },
        {
          label: 'கேஜ்', title: 'அளவீடு பாதுகாப்பான வரம்பில் உள்ளதா?',
          body: '<strong>கேஜ்</strong> ஒரு அளவீட்டை அதன் <strong>பாதுகாப்பான வரம்புக்கு</strong> எதிராகக் காட்டுகிறது. பச்சை ஆரோக்கியம், மஞ்சள் எச்சரிக்கை, சிவப்பு செயல்படு. அளவுரு எதுவாக இருந்தாலும், ஊசி பச்சையில் இருந்தால் சரி — வண்ணங்கள் பொருள் தருகின்றன, வரம்புகளை நினைவில் வைக்க வேண்டாம்.',
          voice: "அடுத்து, கேஜ். கேஜ் வெறும் எண்ணைக் காட்டுவதில்லை — அந்த எண்ணை அதன் பாதுகாப்பான வரம்புக்கு எதிராகக் காட்டுகிறது. பச்சை ஆரோக்கியம், மஞ்சள் எச்சரிக்கை, சிவப்பு இப்போதே செயல்படு. பின்னால் உள்ள அளவுரு எதுவாக இருந்தாலும், ஊசி எங்கே இருக்கிறது என்பதைப் பார்த்தால் போதும். வண்ணங்கள் பொருளைச் சுமக்கின்றன, எனவே யாருடைய வரம்புகளையும் நினைவில் வைக்க வேண்டாம்.",
        },
        {
          label: 'அட்டவணை', title: 'பல சென்சார்கள், அருகருகே',
          body: 'ஒரு <strong>அட்டவணை</strong> பல சென்சார்களை ஒரு கட்டத்தில் அமைக்கிறது — ஒவ்வொரு வரிசையும் கரண்ட், மேக்சிமம் அல்லது சராசரி போன்ற திரட்டல், ஒவ்வொரு நெடுவரிசையும் ஒரு சென்சார். உங்கள் ஆலை எதை அளந்தாலும், ஒரே நேரத்தில் பல அளவீடுகளை ஒப்பிட இது உதவும்.',
          voice: "ஒரு எண் போதாதபோது, அட்டவணை விட்ஜெட் பல சென்சார்களை அருகருகே அமைக்கிறது. ஒவ்வொரு வரிசையும் ஒரு திரட்டல் — கரண்ட், மேக்சிமம், மினிமம், சராசரி — ஒவ்வொரு நெடுவரிசையும் ஒரு சென்சார். உங்கள் ஆலை எதை அளந்தாலும், முழு அளவீட்டுத் தொகுப்பையும் ஒரே இடத்தில் ஒப்பிட இது வழி.",
        },
        {
          label: 'வரைபடம்', title: 'காலப்போக்கில் அளவீடு எப்படி நகர்கிறது',
          body: 'ஒரு <strong>வரைபடம்</strong> அளவீட்டைக் காலப்போக்கில் காட்டுகிறது, எனவே போக்குகள், உச்சங்கள், சரிவுகளை அறியலாம். நிழலிட்ட <strong>பச்சை பட்டை</strong> பாதுகாப்பான வரம்பு — கோடு அதற்குள் இருக்கும் வரை சரி. சென்சார் எதுவாக இருந்தாலும், வடிவம் கதையைச் சொல்கிறது.',
          voice: "இறுதியாக, வரைபடம். இது அளவீட்டைக் காலப்போக்கில் காட்டுகிறது, எனவே கதையைப் பார்க்கிறீர்கள் — மெதுவான நகர்வு, திடீர் உச்சம், இரவில் சரிவு. நிழலிட்ட பச்சை பட்டை பாதுகாப்பான வரம்பு: கோடு அதற்குள் இருக்கும் வரை எல்லாம் நலம். சென்சார் எதுவாக இருந்தாலும், கோட்டின் வடிவம்தான் நீங்கள் படிப்பது.",
        },
        {
          label: 'மீள்பார்வை', title: 'இப்போது எந்த டாஷ்போர்டையும் படிக்கலாம்',
          body: 'இதுதான் கருவித்தொகுப்பு — <strong>எண், கேஜ், அட்டவணை, வரைபடம்</strong>. ஒவ்வொரு டாஷ்போர்டும் இவற்றின் ஏதோ ஒரு கலவைதான், தனது சொந்த முறையில் அமைக்கப்பட்டது, எனவே உங்கள் ஆலையின் டாஷ்போர்டு எப்படி அமைக்கப்பட்டிருந்தாலும், இப்போது அதைப் படிக்கலாம். அடுத்து, பக்கத்தை இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.',
          voice: "இதுதான் கருவித்தொகுப்பு — எண், கேஜ், அட்டவணை, வரைபடம். ஒவ்வொரு டாஷ்போர்டும் இவற்றின் ஏதோ ஒரு கலவைதான், தனது சொந்த முறையில் அமைக்கப்பட்டது. எனவே உங்கள் ஆலையின் டாஷ்போர்டு எப்படி அமைக்கப்பட்டிருந்தாலும், எந்தச் சென்சார்களைப் பயன்படுத்தினாலும், இப்போது அதைப் படிக்கலாம். அடுத்து, மேலே பக்கத்தை இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.",
          tip: { type: 'rememberLabel', text: 'இரண்டு டாஷ்போர்டுகள் ஒரே மாதிரி இருப்பதில்லை — ஆனால் ஒவ்வொன்றும் இதே சில விட்ஜெட் வகைகளின் கலவைதான்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>डॅशबोर्ड</em><br>काय दाखवतो.',
      subtitle:
        'बटणे आणि मेनूंच्या आधी, चला डॅशबोर्डच वाचायला शिकूया. प्रत्येक डॅशबोर्ड याच विजेट्सचे वेगळे मिश्रण असते, प्लांटच्या गरजेनुसार मांडलेले — पण प्रत्येक त्याच काही विजेट प्रकारांपासून बनलेला असतो. प्रकार वाचायला शिका, की कोणताही डॅशबोर्ड वाचता येतो.',
      chapter: 'अध्याय एक · ऑपरेटरचे कॉकपिट',
      steps: [
        {
          label: 'आढावा', title: 'लाइव्ह विजेट्सचे मिश्रण',
          body: 'डॅशबोर्ड म्हणजे <strong>लाइव्ह विजेट्सचा</strong> संच — प्लांटच्या गरजेनुसार कोणत्याही क्रमात मिसळून मांडलेले, त्यामुळे कोणतेही दोन डॅशबोर्ड सारखे दिसत नाहीत. प्रत्येक विजेट एक सेन्सर वाचतो आणि दर मिनिटाला अपडेट होतो. या सगळ्यांत समान म्हणजे काही विजेट <em>प्रकार</em>; ते शिका की कोणताही डॅशबोर्ड समजतो.',
          voice: "चला तुमचा डॅशबोर्ड वाचायला शिकूया. तो कितीही गर्दीचा वाटला तरी, हा लाइव्ह विजेट्सचा संच आहे, प्रत्येक एक सेन्सर वाचतो आणि दर मिनिटाला ताजा होतो. आता, प्रत्येक प्लांटचा डॅशबोर्ड वेगळे मिश्रण आहे — विजेट्स त्या प्लांटच्या गरजेनुसार कोणत्याही क्रमात मांडलेले असतात, त्यामुळे कोणतेही दोन सारखे दिसत नाहीत. पण महत्त्वाची गोष्ट: हे सर्व त्याच काही विजेट प्रकारांपासून बनलेले असतात. म्हणून एखादा लेआउट लक्षात ठेवण्याऐवजी, तुम्ही हे काही प्रकार शिकता — आणि मग कोणताही डॅशबोर्ड वाचू शकता. चला ते पाहूया.",
        },
        {
          label: 'नंबर', title: 'एक रीडिंग, आणि त्याचा कल',
          body: '<strong>नंबर</strong> विजेट एक रीडिंग मोठे आणि स्पष्ट दाखवते — त्यावर जो सेन्सर लावला असेल तो. खालची टक्केवारी या कालावधीची मागील कालावधीशी तुलना करते, त्यामुळे ते वाढत आहे की घटत आहे हे लगेच कळते.',
          voice: "सर्वप्रथम, नंबर विजेट. हे एक रीडिंग मोठे आणि स्पष्ट दाखवते — तुम्ही त्यावर जो सेन्सर लावला असेल तो. महत्त्वाची सवय म्हणजे खालचा आकडा: तो या कालावधीची मागील कालावधीशी एका लहान बाणासह तुलना करतो. वर किंवा खाली — रीडिंग काहीही असो, तुम्ही एका नजरेत बदल ओळखता.",
        },
        {
          label: 'गेज', title: 'रीडिंग सुरक्षित श्रेणीत आहे का?',
          body: '<strong>गेज</strong> एखादे रीडिंग त्याच्या <strong>सुरक्षित श्रेणीसमोर</strong> दाखवते. हिरवा म्हणजे निरोगी, पिवळा म्हणजे सावधानता, लाल म्हणजे कृती. पॅरामीटर काहीही असो, सुई हिरव्यात असेल तर ठीक — रंग अर्थ सांगतात, मर्यादा लक्षात ठेवण्याची गरज नाही.',
          voice: "पुढे, गेज. गेज फक्त आकडा दाखवत नाही — तो आकडा त्याच्या सुरक्षित श्रेणीसमोर दाखवते. हिरवा म्हणजे निरोगी, पिवळा म्हणजे सावधानता, लाल म्हणजे आत्ता कृती करा. मागचा पॅरामीटर काहीही असो, तुम्हाला फक्त सुई कुठे आहे ते पाहायचे आहे. रंग अर्थ वाहून नेतात, त्यामुळे कोणाच्याही मर्यादा लक्षात ठेवण्याची गरज नाही.",
        },
        {
          label: 'टेबल', title: 'अनेक सेन्सर्स, शेजारी-शेजारी',
          body: 'एक <strong>टेबल</strong> अनेक सेन्सर्स एका ग्रिडमध्ये मांडते — प्रत्येक ओळ करंट, मॅक्सिमम किंवा सरासरीसारखे एक एकत्रीकरण, प्रत्येक स्तंभ एक सेन्सर. तुमचा प्लांट जे काही मोजतो, ते एकाच वेळी तुलना करण्याचा हा मार्ग आहे.',
          voice: "जेव्हा एक आकडा पुरेसा नसतो, तेव्हा टेबल विजेट अनेक सेन्सर्स शेजारी-शेजारी मांडते. प्रत्येक ओळ एक एकत्रीकरण आहे — करंट, मॅक्सिमम, मिनिमम, सरासरी — आणि प्रत्येक स्तंभ एक सेन्सर. तुमचा प्लांट जे काही मोजतो, त्या संपूर्ण संचाची एकाच ठिकाणी तुलना करण्याचा हा मार्ग आहे.",
        },
        {
          label: 'ग्राफ', title: 'कालांतराने रीडिंग कसे बदलते',
          body: 'एक <strong>ग्राफ</strong> रीडिंग कालांतराने दाखवतो, त्यामुळे तुम्ही कल, उसळी आणि घसरण ओळखता. छायांकित <strong>हिरवा पट्टा</strong> सुरक्षित श्रेणी आहे — जोपर्यंत रेषा आत आहे, तोपर्यंत ठीक. सेन्सर काहीही असो, आकार कथा सांगतो.',
          voice: "शेवटी, ग्राफ. तो रीडिंग कालांतराने दाखवतो, जेणेकरून तुम्ही संपूर्ण कथा पाहता — हळू सरकणे, अचानक उसळी, रात्रभरातील घसरण. छायांकित हिरवा पट्टा सुरक्षित श्रेणी आहे: जोपर्यंत रेषा आत आहे, तोपर्यंत सर्व ठीक. सेन्सर काहीही असो, रेषेचा आकार हेच तुम्ही वाचत आहात.",
        },
        {
          label: 'सारांश', title: 'आता तुम्ही कोणताही डॅशबोर्ड वाचू शकता',
          body: 'हेच आहे टूलकिट — <strong>नंबर, गेज, टेबल आणि ग्राफ</strong>. प्रत्येक डॅशबोर्ड यांचेच कोणते तरी मिश्रण आहे, स्वतःच्या पद्धतीने मांडलेले, म्हणून तुमच्या प्लांटचा डॅशबोर्ड कसाही मांडलेला असो, आता तुम्ही तो वाचू शकता. पुढे, पान चालवणारी नियंत्रणे शिकूया.',
          voice: "आणि हेच आहे टूलकिट — नंबर, गेज, टेबल आणि ग्राफ. प्रत्येक डॅशबोर्ड यांचेच कोणते तरी मिश्रण आहे, स्वतःच्या पद्धतीने मांडलेले. म्हणून तुमच्या प्लांटचा डॅशबोर्ड कसाही मांडलेला असो, आणि कोणतेही सेन्सर वापरत असो, आता तुम्ही तो वाचू शकता. पुढे, वरची पान चालवणारी नियंत्रणे शिकूया.",
          tip: { type: 'rememberLabel', text: 'कोणतेही दोन डॅशबोर्ड सारखे नसतात — पण प्रत्येक याच काही विजेट प्रकारांचे मिश्रण असतो.' },
        },
      ],
    },
  },
};

export default lesson;
