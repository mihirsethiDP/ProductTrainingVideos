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
        "Before the buttons and menus, let's learn to read the dashboard itself. The widgets are the same for every plant — only the sensors and numbers behind them change — so once you can read the types, you can read any dashboard.",
      chapter: "Chapter One · The Operator's Cockpit",
      steps: [
        {
          label: 'Overview', title: 'A wall of live widgets',
          body: "A dashboard is a set of <strong>live widgets</strong>, grouped into sections. Each widget reads one sensor and refreshes every minute. The widget <em>types</em> are always the same — only the sensors and readings behind them differ from plant to plant.",
          voice: "Let's learn to read your dashboard. However busy it looks, it's really just a set of live widgets, grouped into sections, each reading one sensor and refreshing every minute. Here's the useful part: the widget types are the same on every dashboard — only the sensors and numbers behind them change. So once you can read the handful of types, you can read any dashboard. Let's go through them.",
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
          body: "That's the whole thing in four building blocks — <strong>Number, Gauge, Table and Graph</strong>. Every dashboard is built from these, so no matter which sensors your plant uses, you already know how to read them. Next, let's learn the controls that drive the page.",
          voice: "And that's it — four simple building blocks. The Number, the Gauge, the Table and the Graph. Every dashboard is built from these, so whichever sensors your plant uses, you already know how to read them. Next, let's learn the controls at the top that drive the whole page.",
          tip: { type: 'rememberLabel', text: 'Same widgets everywhere — only the sensors and numbers behind them change.' },
        },
      ],
    },
    hi: {
      title: 'आपका <em>डैशबोर्ड</em><br>क्या दिखाता है।',
      subtitle:
        'बटन और मेन्यू से पहले, आइए डैशबोर्ड को ही पढ़ना सीखें। विजेट हर प्लांट के लिए एक जैसे होते हैं — बस उनके पीछे के सेंसर और आँकड़े बदलते हैं — इसलिए एक बार प्रकार पढ़ना आ गया, तो कोई भी डैशबोर्ड पढ़ सकते हैं।',
      chapter: 'अध्याय एक · ऑपरेटर का कॉकपिट',
      steps: [
        {
          label: 'अवलोकन', title: 'लाइव विजेट्स की एक दीवार',
          body: 'डैशबोर्ड <strong>लाइव विजेट्स</strong> का समूह है, जो खंडों में बँटा है। हर विजेट एक सेंसर पढ़ता है और हर मिनट अपडेट होता है। विजेट के <em>प्रकार</em> हमेशा एक जैसे होते हैं — बस उनके पीछे के सेंसर और रीडिंग प्लांट-दर-प्लांट बदलते हैं।',
          voice: "आइए आपका डैशबोर्ड पढ़ना सीखें। यह कितना भी व्यस्त दिखे, असल में यह बस लाइव विजेट्स का समूह है, खंडों में बँटा, हर एक एक सेंसर पढ़ता और हर मिनट ताज़ा होता। काम की बात यह है: विजेट के प्रकार हर डैशबोर्ड पर एक जैसे होते हैं — बस उनके पीछे के सेंसर और आँकड़े बदलते हैं। तो एक बार ये कुछ प्रकार पढ़ना आ गया, तो आप कोई भी डैशबोर्ड पढ़ सकते हैं। आइए इन्हें देखें।",
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
          body: 'यही है पूरी बात, चार बुनियादी ब्लॉक्स में — <strong>नंबर, गेज, टेबल और ग्राफ़</strong>। हर डैशबोर्ड इन्हीं से बना है, तो आपका प्लांट जो भी सेंसर इस्तेमाल करे, आप उन्हें पढ़ना जानते हैं। आगे, पेज चलाने वाले नियंत्रण सीखें।',
          voice: "और बस — चार साधारण बुनियादी ब्लॉक्स। नंबर, गेज, टेबल और ग्राफ़। हर डैशबोर्ड इन्हीं से बना है, तो आपका प्लांट चाहे जो सेंसर इस्तेमाल करे, आप उन्हें पढ़ना पहले से जानते हैं। आगे, ऊपर के वे नियंत्रण सीखें जो पूरे पेज को चलाते हैं।",
          tip: { type: 'rememberLabel', text: 'विजेट हर जगह एक जैसे — बस उनके पीछे के सेंसर और आँकड़े बदलते हैं।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>டாஷ்போர்டு</em><br>என்ன காட்டுகிறது.',
      subtitle:
        'பொத்தான்கள், மெனுக்களுக்கு முன், டாஷ்போர்டையே படிக்கக் கற்போம். விட்ஜெட்டுகள் ஒவ்வொரு ஆலைக்கும் ஒரே மாதிரிதான் — அவற்றின் பின்னால் உள்ள சென்சார்களும் எண்களும் மட்டுமே மாறும் — எனவே வகைகளைப் படிக்கக் கற்றால், எந்த டாஷ்போர்டையும் படிக்கலாம்.',
      chapter: 'அத்தியாயம் ஒன்று · இயக்குநரின் பணியிடம்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'நேரடி விட்ஜெட்டுகளின் சுவர்',
          body: 'டாஷ்போர்டு என்பது பிரிவுகளாகப் பிரிக்கப்பட்ட <strong>நேரடி விட்ஜெட்டுகளின்</strong> தொகுப்பு. ஒவ்வொரு விட்ஜெட்டும் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. விட்ஜெட் <em>வகைகள்</em> எப்போதும் ஒரே மாதிரி — பின்னால் உள்ள சென்சார்களும் அளவீடுகளும் மட்டுமே ஆலைக்கு ஆலை மாறும்.',
          voice: "உங்கள் டாஷ்போர்டைப் படிக்கக் கற்போம். இது எவ்வளவு நெரிசலாகத் தோன்றினாலும், உண்மையில் இது பிரிவுகளாகப் பிரிக்கப்பட்ட நேரடி விட்ஜெட்டுகளின் தொகுப்புதான், ஒவ்வொன்றும் ஒரு சென்சாரைப் படித்து ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது. முக்கியமான விஷயம்: விட்ஜெட் வகைகள் ஒவ்வொரு டாஷ்போர்டிலும் ஒரே மாதிரி — பின்னால் உள்ள சென்சார்களும் எண்களும் மட்டுமே மாறும். எனவே இந்த சில வகைகளைப் படிக்கக் கற்றால், எந்த டாஷ்போர்டையும் படிக்கலாம். அவற்றைப் பார்ப்போம்.",
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
          body: 'இதுதான் முழுவதும், நான்கு அடிப்படை கட்டகங்களில் — <strong>எண், கேஜ், அட்டவணை, வரைபடம்</strong>. ஒவ்வொரு டாஷ்போர்டும் இவற்றால் ஆனது, எனவே உங்கள் ஆலை எந்தச் சென்சார்களைப் பயன்படுத்தினாலும், அவற்றைப் படிக்க உங்களுக்குத் தெரியும். அடுத்து, பக்கத்தை இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.',
          voice: "அவ்வளவுதான் — நான்கு எளிய அடிப்படை கட்டகங்கள். எண், கேஜ், அட்டவணை, வரைபடம். ஒவ்வொரு டாஷ்போர்டும் இவற்றால் ஆனது, எனவே உங்கள் ஆலை எந்தச் சென்சார்களைப் பயன்படுத்தினாலும், அவற்றைப் படிக்க உங்களுக்கு ஏற்கனவே தெரியும். அடுத்து, மேலே பக்கத்தை இயக்கும் கட்டுப்பாடுகளைக் கற்போம்.",
          tip: { type: 'rememberLabel', text: 'விட்ஜெட்டுகள் எல்லா இடத்திலும் ஒரே மாதிரி — பின்னால் உள்ள சென்சார்களும் எண்களும் மட்டுமே மாறும்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>डॅशबोर्ड</em><br>काय दाखवतो.',
      subtitle:
        'बटणे आणि मेनूंच्या आधी, चला डॅशबोर्डच वाचायला शिकूया. विजेट्स प्रत्येक प्लांटसाठी सारखेच असतात — फक्त त्यांच्यामागील सेन्सर आणि आकडे बदलतात — म्हणून एकदा प्रकार वाचता आले, की कोणताही डॅशबोर्ड वाचता येतो.',
      chapter: 'अध्याय एक · ऑपरेटरचे कॉकपिट',
      steps: [
        {
          label: 'आढावा', title: 'लाइव्ह विजेट्सची भिंत',
          body: 'डॅशबोर्ड म्हणजे विभागांमध्ये विभागलेला <strong>लाइव्ह विजेट्सचा</strong> संच. प्रत्येक विजेट एक सेन्सर वाचतो आणि दर मिनिटाला अपडेट होतो. विजेटचे <em>प्रकार</em> नेहमी सारखेच असतात — फक्त त्यांच्यामागील सेन्सर आणि रीडिंग प्लांटनुसार बदलतात.',
          voice: "चला तुमचा डॅशबोर्ड वाचायला शिकूया. तो कितीही गर्दीचा वाटला तरी, खरं तर हा विभागांमध्ये विभागलेला लाइव्ह विजेट्सचा संच आहे, प्रत्येक एक सेन्सर वाचतो आणि दर मिनिटाला ताजा होतो. महत्त्वाची गोष्ट: विजेटचे प्रकार प्रत्येक डॅशबोर्डवर सारखेच असतात — फक्त त्यांच्यामागील सेन्सर आणि आकडे बदलतात. म्हणून एकदा हे काही प्रकार वाचता आले, की तुम्ही कोणताही डॅशबोर्ड वाचू शकता. चला ते पाहूया.",
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
          body: 'हीच संपूर्ण गोष्ट, चार मूलभूत घटकांमध्ये — <strong>नंबर, गेज, टेबल आणि ग्राफ</strong>. प्रत्येक डॅशबोर्ड यांपासूनच बनतो, म्हणून तुमचा प्लांट कोणतेही सेन्सर वापरत असो, ते वाचायला तुम्हाला येते. पुढे, पान चालवणारी नियंत्रणे शिकूया.',
          voice: "आणि एवढेच — चार साधे मूलभूत घटक. नंबर, गेज, टेबल आणि ग्राफ. प्रत्येक डॅशबोर्ड यांपासूनच बनतो, म्हणून तुमचा प्लांट कोणतेही सेन्सर वापरत असो, ते वाचायला तुम्हाला आधीच येते. पुढे, वरची पान चालवणारी नियंत्रणे शिकूया.",
          tip: { type: 'rememberLabel', text: 'विजेट्स सगळीकडे सारखेच — फक्त त्यांच्यामागील सेन्सर आणि आकडे बदलतात.' },
        },
      ],
    },
  },
};

export default lesson;
