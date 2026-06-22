import type { GraphData, Lesson } from '../../types';

/**
 * Module 2 · Lesson 6 — Graphs (line / bar).   Tag: M2.L6
 * Sensor × time, time from the dashboard, one or more aggregations per sensor
 * (each its own line), Fixed Range threshold bands, and switching graph ⇄ table.
 */

const MBR_X = [
  '21Jun 03:04pm', '05:04pm', '07:04pm', '09:04pm', '11:04pm', '22Jun 01:04am',
  '03:04am', '05:04am', '07:04am', '09:04am', '11:04am', '01:04pm', '03:04pm',
];
function mbr(highlight?: GraphData['highlight']): GraphData {
  return {
    type: 'line',
    title: 'MBR Tank Phase - 2 Level (in %)',
    plantTag: 'Adani Ahmedabad',
    fullIcons: true,
    highlight,
    xLabels: MBR_X,
    yMin: 0, yMax: 100, yStep: 10,
    thresholdLine: 90,
    fixedRanges: [
      { from: 0, to: 80, level: 'good' },
      { from: 80, to: 90, level: 'warning' },
      { from: 90, to: 100, level: 'critical' },
    ],
    series: [
      { name: 'MBR Tank Phase - 2 Level', color: '#7cc242', endLabel: '83.23',
        points: [80, 88, 89, 84, 80, 86, 92, 94, 90, 86, 84, 87, 83.23] },
    ],
  };
}

const WTP_X = [
  '21Jun 03:16pm', '05:16pm', '07:16pm', '09:16pm', '11:16pm', '22Jun 01:16am',
  '03:16am', '05:16am', '07:16am', '09:16am', '11:16am', '01:16pm', '03:16pm',
];
function wtp(type: 'line' | 'bar', extra: Partial<GraphData> = {}): GraphData {
  return {
    type,
    title: 'WTP FlowMeters (KL)',
    plantTag: 'Plaksha STP + WTP',
    xLabels: WTP_X,
    yMin: 0, yMax: 160, yStep: 20,
    series: [
      { name: 'WTP Outlet - 1', color: '#a4248f', endLabel: '93',
        points: [5, 12, 22, 30, 38, 44, 50, 56, 62, 70, 78, 86, 93] },
      { name: 'WTP Outlet - 2', color: '#b5c918', endLabel: '142',
        points: [6, 18, 30, 42, 52, 64, 76, 88, 100, 112, 124, 134, 142] },
      { name: 'GMADA Inlet', color: '#1a9e8f', endLabel: '54.19',
        points: [0, 0, 0, 0, 0, 0, 0, 0, 8, 30, 48, 53, 54.19] },
    ],
    ...extra,
  };
}

const multiAgg: GraphData = {
  type: 'line',
  title: 'STP Inlet COD (Ref <600ppm)',
  plantTag: 'Adani Ahmedabad',
  xLabels: ['09:00am', '10:00am', '11:00am', '12:00pm', '01:00pm', '02:00pm', '03:00pm', '04:00pm', '05:00pm', '06:00pm'],
  yMin: 400, yMax: 700, yStep: 50,
  series: [
    { name: 'Current', color: '#a4248f', endLabel: '654.3',
      points: [654, 640, 661, 650, 648, 655, 662, 651, 649, 654.3] },
    { name: 'Average', color: '#1a9e8f', endLabel: '657.5',
      points: [657, 657, 656, 658, 657, 656, 657, 658, 657, 657.5] },
  ],
};

const lesson: Lesson = {
  id: 'lesson-06-graphs',
  moduleId: 'module-02-widgets',
  lessonNumber: 6,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'graph', caption: 'Graph widget',
      widgetState: { graph: mbr() }, cursor: [{ at: 0.1, x: 50, y: 45 }] },
    { mode: 'widget', widget: 'graph', caption: 'Multiple sensors, sensor × time',
      widgetState: { graph: wtp('line', { highlight: 'legend' }) }, cursor: [{ at: 0.2, x: 50, y: 22 }, { at: 0.6, x: 85, y: 40 }] },
    { mode: 'widget', widget: 'graph', caption: 'Multiple aggregations = multiple lines',
      widgetState: { graph: multiAgg }, cursor: [{ at: 0.3, x: 50, y: 22 }] },
    { mode: 'widget', widget: 'graph', caption: 'Fixed Range highlighting',
      widgetState: { graph: mbr('ranges') }, cursor: [{ at: 0.25, x: 50, y: 30 }, { at: 0.6, x: 50, y: 55 }] },
    { mode: 'widget', widget: 'graph', caption: 'Bar graph',
      widgetState: { graph: wtp('bar') }, cursor: [{ at: 0.3, x: 50, y: 50 }] },
    { mode: 'widget', widget: 'graph', caption: 'Switch graph ⇄ table',
      widgetState: { graph: wtp('line', { fullIcons: true, highlight: 'choose', menuItems: ['Table', 'Bar Graph'] }) },
      cursor: [{ at: 0.3, x: 88, y: 12, click: true }] },
  ],
  content: {
    en: {
      title: 'Graphs —<br><em>line</em> & <em>bar.</em>',
      subtitle:
        'Plot sensors over time, compare aggregations on the same chart, and highlight your safe and danger zones right on the graph.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'Plot sensors over time',
          body: "Like the table, a <strong>Graph</strong> plots the sensor tags you chose at configuration — but over <strong>time</strong>. Here <strong>MBR Tank Level</strong> is drawn across the day, with its latest value, <strong>83.23</strong>, called out on the right.",
          voice: "Now we move from tables to graphs. Just like the table widget, a graph plots the sensor tags you picked when you configured it. The difference is that a graph shows them over time. Here's the M B R tank level, drawn across a full day, with the latest reading — eighty three point two three — called out on the right edge.",
        },
        {
          label: 'Sensor × Time', title: 'Sensor × time, time from the dashboard',
          body: "Graphs follow a <strong>sensor × time</strong> concept, and the <strong>time comes from the dashboard</strong>. Plot <strong>multiple sensors</strong> and each becomes its own line — here three flow meters, <strong>WTP Outlet 1 & 2</strong> and <strong>GMADA Inlet</strong>.",
          voice: "Graphs work on a simple idea — sensor times time. And the time axis comes straight from your dashboard's time range. You can plot as many sensors as you like, and each one becomes its own line. Here we have three flow meters together — W T P outlet one, outlet two, and the GMADA inlet — each tracking across the same time window.",
        },
        {
          label: 'Aggregations', title: 'Multiple aggregations, multiple lines',
          body: "Each sensor carries the <strong>aggregation</strong> set at configuration. Add <strong>more than one</strong>, and each is drawn as a <strong>separate line</strong> on the same graph. Here the same tag shows <strong>Current</strong> and <strong>Average</strong> side by side.",
          voice: "And here's a neat trick. Each sensor carries the aggregation you set when you configured it. But you can give one sensor more than one aggregation — and each is drawn as its own separate line on the same graph. Here, a single inlet C O D tag is showing both its current value and its average, as two lines, so you can compare them at a glance.",
        },
        {
          label: 'Fixed Range', title: 'Fixed Range highlighting',
          body: "The <strong>Fixed Range</strong> feature paints threshold zones right onto the graph: <strong>green</strong> for the optimal range, <strong>yellow</strong> for warning, <strong>red</strong> for danger. Set custom <strong>Y-axis</strong> ranges so the bands reflect what matters. Here anything above 90% is in the red.",
          voice: "Now for something powerful — Fixed Range highlighting. You can paint your threshold zones directly onto the graph. Green for the optimal range, yellow for warning, and red for the danger range. And you set your own Y axis ranges, so the bands reflect exactly what matters for your operation. Here, the tank level is fine in the green, drifts into yellow as a warning, and anything above ninety percent lands in the red. You can spot a problem, or an ideal value, at a single glance.",
          tip: { type: 'rememberLabel', text: 'Green = optimal, Yellow = warning, Red = danger. Set custom Y-axis ranges to match your process.' },
        },
        {
          label: 'Line or Bar', title: 'Two types: line or bar',
          body: "There are <strong>two graph types</strong> — <strong>line</strong> and <strong>bar</strong>. Lines suit trends over time; bars suit comparing volumes. Here the same flow meters are shown as a <strong>bar graph</strong>.",
          voice: "Graphs come in two types — line and bar. Line graphs are great for trends over time, like we've just seen. Bar graphs are better when you're comparing volumes side by side. Here are the same three flow meters, now drawn as a bar graph. Same data, a different shape.",
        },
        {
          label: 'Switch View', title: 'Switch between graph and table',
          body: "A graph and a table are just two views of the same data. Using the <strong>chart menu</strong> in the top-right, switch a graph into a <strong>Table</strong> — or a table into a <strong>Bar</strong> or <strong>Line Graph</strong>. That completes the table and graph widgets.",
          voice: "And finally, remember this — a graph and a table are simply two ways of looking at the same data. Using the chart menu in the top right corner, you can switch a graph straight into a table, or flip a table into a bar or line graph, in a single click. So pick whichever view tells the story best. That completes our look at the table and graph widgets. In the next lesson, we'll explore another part of the dashboard.",
          tip: { type: 'upNextLabel', text: 'Next: more of the dashboard.' },
        },
      ],
    },
    hi: {
      title: 'ग्राफ़ —<br><em>लाइन</em> और <em>बार।</em>',
      subtitle:
        'सेंसर को समय के साथ प्लॉट करें, एक ही चार्ट पर एकत्रीकरणों की तुलना करें, और अपने सुरक्षित व खतरे के क्षेत्रों को ग्राफ़ पर ही दिखाएँ।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'सेंसर को समय के साथ प्लॉट करें',
          body: 'टेबल की तरह, एक <strong>ग्राफ़</strong> भी कॉन्फ़िगरेशन के समय चुने गए सेंसर टैग प्लॉट करता है — लेकिन <strong>समय</strong> के साथ। यहाँ <strong>MBR टैंक स्तर</strong> पूरे दिन में खींचा गया है, उसका नवीनतम मान <strong>83.23</strong> दाईं ओर दिखाया गया है।',
          voice: 'अब हम टेबल से ग्राफ़ की ओर बढ़ते हैं। टेबल विजेट की तरह, एक ग्राफ़ उन सेंसर टैग को प्लॉट करता है जो आपने कॉन्फ़िगर करते समय चुने। फ़र्क यह है कि ग्राफ़ उन्हें समय के साथ दिखाता है। यहाँ एम बी आर टैंक स्तर है, पूरे दिन में खींचा गया, उसका नवीनतम मान — तिरासी दशमलव दो तीन — दाएँ किनारे पर दिखाया गया।',
        },
        {
          label: 'सेंसर × समय', title: 'सेंसर × समय, समय डैशबोर्ड से',
          body: 'ग्राफ़ <strong>सेंसर × समय</strong> की अवधारणा पर चलते हैं, और <strong>समय डैशबोर्ड से आता है</strong>। <strong>कई सेंसर</strong> प्लॉट करें और हर एक अपनी लाइन बन जाता है — यहाँ तीन फ़्लो मीटर, <strong>WTP आउटलेट 1 और 2</strong> तथा <strong>GMADA इनलेट</strong>।',
          voice: 'ग्राफ़ एक सरल विचार पर काम करते हैं — सेंसर गुणा समय। और समय अक्ष सीधे आपके डैशबोर्ड की समय अवधि से आता है। आप जितने चाहें उतने सेंसर प्लॉट कर सकते हैं, और हर एक अपनी लाइन बन जाता है। यहाँ तीन फ़्लो मीटर एक साथ हैं — डब्ल्यू टी पी आउटलेट एक, आउटलेट दो, और GMADA इनलेट — हर एक उसी समय खिड़की में ट्रैक करता हुआ।',
        },
        {
          label: 'एकत्रीकरण', title: 'कई एकत्रीकरण, कई लाइनें',
          body: 'हर सेंसर कॉन्फ़िगरेशन पर सेट <strong>एकत्रीकरण</strong> रखता है। <strong>एक से ज़्यादा</strong> जोड़ें, और हर एक उसी ग्राफ़ पर <strong>अलग लाइन</strong> के रूप में खींचा जाता है। यहाँ वही टैग <strong>वर्तमान</strong> और <strong>औसत</strong> साथ-साथ दिखाता है।',
          voice: 'और यहाँ एक अच्छी तरकीब है। हर सेंसर वह एकत्रीकरण रखता है जो आपने कॉन्फ़िगर करते समय सेट किया। लेकिन आप एक सेंसर को एक से ज़्यादा एकत्रीकरण दे सकते हैं — और हर एक उसी ग्राफ़ पर अपनी अलग लाइन के रूप में खींचा जाता है। यहाँ एक ही इनलेट सी ओ डी टैग अपना वर्तमान मान और औसत, दोनों दो लाइनों के रूप में दिखा रहा है, ताकि आप एक नज़र में तुलना कर सकें।',
        },
        {
          label: 'फ़िक्स्ड रेंज', title: 'फ़िक्स्ड रेंज हाइलाइटिंग',
          body: '<strong>फ़िक्स्ड रेंज</strong> सुविधा थ्रेशोल्ड क्षेत्रों को सीधे ग्राफ़ पर रंगती है: इष्टतम के लिए <strong>हरा</strong>, चेतावनी के लिए <strong>पीला</strong>, खतरे के लिए <strong>लाल</strong>। कस्टम <strong>Y-अक्ष</strong> रेंज सेट करें ताकि बैंड वही दर्शाएँ जो मायने रखता है। यहाँ 90% से ऊपर कुछ भी लाल में है।',
          voice: 'अब कुछ शक्तिशाली — फ़िक्स्ड रेंज हाइलाइटिंग। आप अपने थ्रेशोल्ड क्षेत्रों को सीधे ग्राफ़ पर रंग सकते हैं। इष्टतम रेंज के लिए हरा, चेतावनी के लिए पीला, और खतरे की रेंज के लिए लाल। और आप अपनी खुद की Y अक्ष रेंज सेट करते हैं, ताकि बैंड वही दर्शाएँ जो आपके संचालन के लिए मायने रखता है। यहाँ टैंक स्तर हरे में ठीक है, चेतावनी के रूप में पीले में जाता है, और नब्बे प्रतिशत से ऊपर कुछ भी लाल में आता है। आप एक नज़र में समस्या, या आदर्श मान देख सकते हैं।',
          tip: { type: 'rememberLabel', text: 'हरा = इष्टतम, पीला = चेतावनी, लाल = खतरा। अपनी प्रक्रिया से मेल खाने के लिए कस्टम Y-अक्ष रेंज सेट करें।' },
        },
        {
          label: 'लाइन या बार', title: 'दो प्रकार: लाइन या बार',
          body: 'दो <strong>ग्राफ़ प्रकार</strong> हैं — <strong>लाइन</strong> और <strong>बार</strong>। लाइनें समय के रुझान के लिए, बार मात्रा की तुलना के लिए उपयुक्त हैं। यहाँ वही फ़्लो मीटर <strong>बार ग्राफ़</strong> के रूप में दिखाए गए हैं।',
          voice: 'ग्राफ़ दो प्रकार में आते हैं — लाइन और बार। लाइन ग्राफ़ समय के रुझान के लिए बढ़िया हैं, जैसा हमने अभी देखा। बार ग्राफ़ तब बेहतर हैं जब आप मात्राओं की साथ-साथ तुलना कर रहे हों। यहाँ वही तीन फ़्लो मीटर हैं, अब बार ग्राफ़ के रूप में खींचे गए। वही डेटा, एक अलग आकार।',
        },
        {
          label: 'दृश्य बदलें', title: 'ग्राफ़ और टेबल के बीच स्विच करें',
          body: 'ग्राफ़ और टेबल एक ही डेटा के दो दृश्य हैं। ऊपर-दाएँ <strong>चार्ट मेन्यू</strong> से, ग्राफ़ को <strong>टेबल</strong> में — या टेबल को <strong>बार</strong> या <strong>लाइन ग्राफ़</strong> में बदलें। यह टेबल और ग्राफ़ विजेट्स को पूरा करता है।',
          voice: 'और अंत में, यह याद रखें — ग्राफ़ और टेबल एक ही डेटा को देखने के दो तरीके हैं। ऊपर दाएँ कोने के चार्ट मेन्यू से, आप ग्राफ़ को सीधे टेबल में बदल सकते हैं, या टेबल को बार या लाइन ग्राफ़ में, एक ही क्लिक में। तो जो दृश्य कहानी सबसे अच्छी बताए वही चुनें। यह टेबल और ग्राफ़ विजेट्स का हमारा अध्ययन पूरा करता है। अगले पाठ में, हम डैशबोर्ड के एक और हिस्से को देखेंगे।',
          tip: { type: 'upNextLabel', text: 'आगे: डैशबोर्ड का और हिस्सा।' },
        },
      ],
    },
    ta: {
      title: 'வரைபடங்கள் —<br><em>கோடு</em> & <em>பட்டை.</em>',
      subtitle:
        'சென்சார்களை காலத்துடன் வரையுங்கள், ஒரே வரைபடத்தில் திரட்டல்களை ஒப்பிடுங்கள், உங்கள் பாதுகாப்பான மற்றும் ஆபத்து மண்டலங்களை வரைபடத்திலேயே சிறப்பிக்கவும்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'சென்சார்களை காலத்துடன் வரையுங்கள்',
          body: 'அட்டவணையைப் போல, ஒரு <strong>வரைபடம்</strong> அமைப்பின்போது தேர்ந்த சென்சார் டேக்குகளை வரைகிறது — ஆனால் <strong>காலத்துடன்</strong>. இங்கே <strong>MBR டாங்க் நிலை</strong> நாள் முழுவதும் வரையப்பட்டுள்ளது, அதன் சமீபத்திய மதிப்பு <strong>83.23</strong> வலதுபுறம் காட்டப்படுகிறது.',
          voice: 'இப்போது அட்டவணைகளிலிருந்து வரைபடங்களுக்கு நகர்கிறோம். டேபிள் விட்ஜெட்டைப் போல, ஒரு வரைபடம் நீங்கள் அமைக்கும்போது தேர்ந்த சென்சார் டேக்குகளை வரைகிறது. வித்தியாசம் என்னவென்றால், வரைபடம் அவற்றைக் காலத்துடன் காட்டுகிறது. இங்கே எம் பி ஆர் டாங்க் நிலை, ஒரு நாள் முழுவதும் வரையப்பட்டு, அதன் சமீபத்திய அளவீடு — எண்பத்தி மூன்று புள்ளி இரண்டு மூன்று — வலது விளிம்பில் காட்டப்படுகிறது.',
        },
        {
          label: 'சென்சார் × காலம்', title: 'சென்சார் × காலம், காலம் டாஷ்போர்டிலிருந்து',
          body: 'வரைபடங்கள் <strong>சென்சார் × காலம்</strong> கருத்தைப் பின்பற்றுகின்றன, <strong>காலம் டாஷ்போர்டிலிருந்து வருகிறது</strong>. <strong>பல சென்சார்களை</strong> வரையுங்கள், ஒவ்வொன்றும் தனி கோடாகிறது — இங்கே மூன்று ஃப்ளோ மீட்டர்கள், <strong>WTP அவுட்லெட் 1 & 2</strong> மற்றும் <strong>GMADA இன்லெட்</strong>.',
          voice: 'வரைபடங்கள் ஒரு எளிய கருத்தில் வேலை செய்கின்றன — சென்சார் பெருக்கல் காலம். கால அச்சு உங்கள் டாஷ்போர்டின் கால அளவிலிருந்து நேரடியாக வருகிறது. நீங்கள் விரும்பிய அளவு சென்சார்களை வரையலாம், ஒவ்வொன்றும் தனி கோடாகிறது. இங்கே மூன்று ஃப்ளோ மீட்டர்கள் ஒன்றாக உள்ளன — டபிள்யூ டி பி அவுட்லெட் ஒன்று, அவுட்லெட் இரண்டு, மற்றும் GMADA இன்லெட் — ஒவ்வொன்றும் அதே கால சாளரத்தில் கண்காணிக்கிறது.',
        },
        {
          label: 'திரட்டல்கள்', title: 'பல திரட்டல்கள், பல கோடுகள்',
          body: 'ஒவ்வொரு சென்சாரும் அமைப்பின்போது அமைத்த <strong>திரட்டலைக்</strong> கொண்டுள்ளது. <strong>ஒன்றுக்கு மேற்பட்டதைச்</strong> சேர்த்தால், ஒவ்வொன்றும் அதே வரைபடத்தில் <strong>தனி கோடாக</strong> வரையப்படுகிறது. இங்கே அதே டேக் <strong>தற்போதைய</strong> மற்றும் <strong>சராசரி</strong> அருகருகே காட்டுகிறது.',
          voice: 'இதோ ஒரு அழகான தந்திரம். ஒவ்வொரு சென்சாரும் நீங்கள் அமைக்கும்போது அமைத்த திரட்டலைக் கொண்டுள்ளது. ஆனால் ஒரு சென்சாருக்கு ஒன்றுக்கு மேற்பட்ட திரட்டலைக் கொடுக்கலாம் — ஒவ்வொன்றும் அதே வரைபடத்தில் தனி கோடாக வரையப்படுகிறது. இங்கே ஒரே இன்லெட் சி ஓ டி டேக் அதன் தற்போதைய மதிப்பையும் சராசரியையும் இரண்டு கோடுகளாகக் காட்டுகிறது, இதனால் ஒரே பார்வையில் ஒப்பிடலாம்.',
        },
        {
          label: 'நிலையான வரம்பு', title: 'நிலையான வரம்பு சிறப்பித்தல்',
          body: '<strong>நிலையான வரம்பு</strong> அம்சம் வரம்பு மண்டலங்களை நேரடியாக வரைபடத்தில் வண்ணமிடுகிறது: உகந்ததற்கு <strong>பச்சை</strong>, எச்சரிக்கைக்கு <strong>மஞ்சள்</strong>, ஆபத்துக்கு <strong>சிவப்பு</strong>. தனிப்பயன் <strong>Y-அச்சு</strong> வரம்புகளை அமைக்கவும். இங்கே 90%-க்கு மேல் எதுவும் சிவப்பில்.',
          voice: 'இப்போது சக்திவாய்ந்த ஒன்று — நிலையான வரம்பு சிறப்பித்தல். உங்கள் வரம்பு மண்டலங்களை நேரடியாக வரைபடத்தில் வண்ணமிடலாம். உகந்த வரம்புக்கு பச்சை, எச்சரிக்கைக்கு மஞ்சள், ஆபத்து வரம்புக்கு சிவப்பு. மேலும் உங்கள் சொந்த Y அச்சு வரம்புகளை அமைக்கிறீர்கள், இதனால் பட்டைகள் உங்கள் செயல்பாட்டுக்கு முக்கியமானதைப் பிரதிபலிக்கின்றன. இங்கே டாங்க் நிலை பச்சையில் நன்றாக உள்ளது, எச்சரிக்கையாக மஞ்சளுக்குச் செல்கிறது, தொண்ணூறு சதவீதத்திற்கு மேல் எதுவும் சிவப்பில் வருகிறது. ஒரே பார்வையில் சிக்கலையோ உகந்த மதிப்பையோ காணலாம்.',
          tip: { type: 'rememberLabel', text: 'பச்சை = உகந்தது, மஞ்சள் = எச்சரிக்கை, சிவப்பு = ஆபத்து. உங்கள் செயல்முறைக்கு ஏற்ப தனிப்பயன் Y-அச்சு வரம்புகளை அமைக்கவும்.' },
        },
        {
          label: 'கோடு அல்லது பட்டை', title: 'இரண்டு வகைகள்: கோடு அல்லது பட்டை',
          body: 'இரண்டு <strong>வரைபட வகைகள்</strong> உள்ளன — <strong>கோடு</strong> மற்றும் <strong>பட்டை</strong>. கோடுகள் காலப் போக்குகளுக்கு, பட்டைகள் அளவுகளை ஒப்பிட ஏற்றவை. இங்கே அதே ஃப்ளோ மீட்டர்கள் <strong>பட்டை வரைபடமாக</strong> காட்டப்படுகின்றன.',
          voice: 'வரைபடங்கள் இரண்டு வகைகளில் வருகின்றன — கோடு மற்றும் பட்டை. கோடு வரைபடங்கள் காலப் போக்குகளுக்கு சிறந்தவை, நாம் இப்போது பார்த்தது போல. பட்டை வரைபடங்கள் அளவுகளை அருகருகே ஒப்பிடும்போது சிறந்தவை. இங்கே அதே மூன்று ஃப்ளோ மீட்டர்கள், இப்போது பட்டை வரைபடமாக வரையப்பட்டுள்ளன. அதே தரவு, வேறு வடிவம்.',
        },
        {
          label: 'காட்சியை மாற்று', title: 'வரைபடம் & அட்டவணை இடையே மாறவும்',
          body: 'வரைபடமும் அட்டவணையும் ஒரே தரவின் இரண்டு காட்சிகள். மேல்-வலதுபுற <strong>சார்ட் மெனுவைப்</strong> பயன்படுத்தி, வரைபடத்தை <strong>அட்டவணையாக</strong> — அல்லது அட்டவணையை <strong>பட்டை</strong> அல்லது <strong>கோடு வரைபடமாக</strong> மாற்றவும். இது அட்டவணை மற்றும் வரைபட விட்ஜெட்களை முடிக்கிறது.',
          voice: 'இறுதியாக, இதை நினைவில் கொள்ளுங்கள் — வரைபடமும் அட்டவணையும் ஒரே தரவைப் பார்க்கும் இரண்டு வழிகள். மேல் வலது மூலையில் உள்ள சார்ட் மெனுவைப் பயன்படுத்தி, வரைபடத்தை நேரடியாக அட்டவணையாக மாற்றலாம், அல்லது அட்டவணையை பட்டை அல்லது கோடு வரைபடமாக ஒரே கிளிக்கில். எனவே கதையை சிறப்பாகச் சொல்லும் காட்சியைத் தேர்வு செய்யுங்கள். இது அட்டவணை மற்றும் வரைபட விட்ஜெட்களின் நமது பார்வையை முடிக்கிறது. அடுத்த பாடத்தில், டாஷ்போர்டின் மற்றொரு பகுதியை ஆராய்வோம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: டாஷ்போர்டின் மேலும்.' },
        },
      ],
    },
    mr: {
      title: 'आलेख —<br><em>लाइन</em> आणि <em>बार.</em>',
      subtitle:
        'सेन्सर वेळेनुसार प्लॉट करा, एकाच आलेखावर एकत्रीकरणांची तुलना करा, आणि तुमचे सुरक्षित व धोक्याचे क्षेत्र आलेखावरच ठळक करा.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'सेन्सर वेळेनुसार प्लॉट करा',
          body: 'टेबलप्रमाणे, एक <strong>आलेख</strong> कॉन्फिगरेशनच्या वेळी निवडलेले सेन्सर टॅग प्लॉट करतो — पण <strong>वेळेनुसार</strong>. इथे <strong>MBR टँक पातळी</strong> संपूर्ण दिवसभर काढली आहे, तिचे नवीनतम मूल्य <strong>83.23</strong> उजवीकडे दाखवले आहे.',
          voice: 'आता आपण टेबलकडून आलेखांकडे जातो. टेबल विजेटप्रमाणे, एक आलेख तुम्ही कॉन्फिगर करताना निवडलेले सेन्सर टॅग प्लॉट करतो. फरक हा की आलेख ते वेळेनुसार दाखवतो. इथे एम बी आर टँक पातळी, संपूर्ण दिवसभर काढलेली, तिचे नवीनतम वाचन — त्र्याऐंशी दशांश दोन तीन — उजव्या कडेला दाखवले आहे.',
        },
        {
          label: 'सेन्सर × वेळ', title: 'सेन्सर × वेळ, वेळ डॅशबोर्डकडून',
          body: 'आलेख <strong>सेन्सर × वेळ</strong> संकल्पनेवर चालतात, आणि <strong>वेळ डॅशबोर्डकडून येते</strong>. <strong>अनेक सेन्सर</strong> प्लॉट करा आणि प्रत्येक स्वतःची लाइन बनतो — इथे तीन फ्लो मीटर, <strong>WTP आउटलेट 1 आणि 2</strong> आणि <strong>GMADA इनलेट</strong>.',
          voice: 'आलेख एका सोप्या कल्पनेवर काम करतात — सेन्सर गुणिले वेळ. आणि वेळ अक्ष थेट तुमच्या डॅशबोर्डच्या वेळ अवधीतून येतो. तुम्ही हवे तितके सेन्सर प्लॉट करू शकता, आणि प्रत्येक स्वतःची लाइन बनतो. इथे तीन फ्लो मीटर एकत्र आहेत — डब्ल्यू टी पी आउटलेट एक, आउटलेट दोन, आणि GMADA इनलेट — प्रत्येक त्याच वेळ खिडकीत ट्रॅक करत.',
        },
        {
          label: 'एकत्रीकरण', title: 'अनेक एकत्रीकरण, अनेक लाइन',
          body: 'प्रत्येक सेन्सर कॉन्फिगरेशनला सेट केलेले <strong>एकत्रीकरण</strong> बाळगतो. <strong>एकापेक्षा जास्त</strong> जोडा, आणि प्रत्येक त्याच आलेखावर <strong>वेगळी लाइन</strong> म्हणून काढली जाते. इथे तोच टॅग <strong>सध्याचे</strong> आणि <strong>सरासरी</strong> शेजारी दाखवतो.',
          voice: 'आणि इथे एक छान युक्ती आहे. प्रत्येक सेन्सर तुम्ही कॉन्फिगर करताना सेट केलेले एकत्रीकरण बाळगतो. पण तुम्ही एका सेन्सरला एकापेक्षा जास्त एकत्रीकरण देऊ शकता — आणि प्रत्येक त्याच आलेखावर स्वतःची वेगळी लाइन म्हणून काढली जाते. इथे एकच इनलेट सी ओ डी टॅग त्याचे सध्याचे मूल्य आणि सरासरी, दोन्ही दोन लाइन म्हणून दाखवत आहे, जेणेकरून तुम्ही एका दृष्टीक्षेपात तुलना करू शकता.',
        },
        {
          label: 'फिक्स्ड रेंज', title: 'फिक्स्ड रेंज हायलाइटिंग',
          body: '<strong>फिक्स्ड रेंज</strong> वैशिष्ट्य थ्रेशोल्ड क्षेत्रे थेट आलेखावर रंगवते: इष्टतमसाठी <strong>हिरवा</strong>, इशाऱ्यासाठी <strong>पिवळा</strong>, धोक्यासाठी <strong>लाल</strong>. कस्टम <strong>Y-अक्ष</strong> रेंज सेट करा. इथे 90% च्या वर काहीही लाल मध्ये आहे.',
          voice: 'आता काहीतरी शक्तिशाली — फिक्स्ड रेंज हायलाइटिंग. तुम्ही तुमची थ्रेशोल्ड क्षेत्रे थेट आलेखावर रंगवू शकता. इष्टतम रेंजसाठी हिरवा, इशाऱ्यासाठी पिवळा, आणि धोक्याच्या रेंजसाठी लाल. आणि तुम्ही तुमची स्वतःची Y अक्ष रेंज सेट करता, जेणेकरून बँड तुमच्या कामकाजासाठी महत्त्वाचे तेच दर्शवतात. इथे टँक पातळी हिरव्यात ठीक आहे, इशारा म्हणून पिवळ्यात जाते, आणि नव्वद टक्क्यांच्या वर काहीही लाल मध्ये येते. तुम्ही एका दृष्टीक्षेपात समस्या किंवा आदर्श मूल्य पाहू शकता.',
          tip: { type: 'rememberLabel', text: 'हिरवा = इष्टतम, पिवळा = इशारा, लाल = धोका. तुमच्या प्रक्रियेशी जुळण्यासाठी कस्टम Y-अक्ष रेंज सेट करा.' },
        },
        {
          label: 'लाइन की बार', title: 'दोन प्रकार: लाइन किंवा बार',
          body: 'दोन <strong>आलेख प्रकार</strong> आहेत — <strong>लाइन</strong> आणि <strong>बार</strong>. लाइन वेळेच्या कलांसाठी, बार प्रमाणांची तुलना करण्यासाठी योग्य. इथे तेच फ्लो मीटर <strong>बार आलेख</strong> म्हणून दाखवले आहेत.',
          voice: 'आलेख दोन प्रकारात येतात — लाइन आणि बार. लाइन आलेख वेळेच्या कलांसाठी उत्तम, जसे आपण आत्ता पाहिले. बार आलेख तुम्ही प्रमाणे शेजारी तुलना करता तेव्हा चांगले. इथे तेच तीन फ्लो मीटर, आता बार आलेख म्हणून काढलेले. तोच डेटा, वेगळा आकार.',
        },
        {
          label: 'दृश्य बदला', title: 'आलेख आणि टेबल दरम्यान स्विच करा',
          body: 'आलेख आणि टेबल हे एकाच डेटाची दोन दृश्ये आहेत. वर-उजव्या <strong>चार्ट मेनू</strong>ने, आलेख <strong>टेबल</strong> मध्ये — किंवा टेबल <strong>बार</strong> किंवा <strong>लाइन आलेख</strong> मध्ये बदला. यामुळे टेबल आणि आलेख विजेट्स पूर्ण होतात.',
          voice: 'आणि शेवटी, हे लक्षात ठेवा — आलेख आणि टेबल हे एकाच डेटाकडे पाहण्याचे दोन मार्ग आहेत. वर उजव्या कोपऱ्यातील चार्ट मेनूने, तुम्ही आलेख थेट टेबलमध्ये बदलू शकता, किंवा टेबल बार किंवा लाइन आलेखात, एका क्लिकमध्ये. म्हणून कथा सर्वोत्तम सांगणारे दृश्य निवडा. यामुळे टेबल आणि आलेख विजेट्सचा आपला अभ्यास पूर्ण होतो. पुढच्या पाठात, आपण डॅशबोर्डचा आणखी एक भाग पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: डॅशबोर्डचा आणखी भाग.' },
        },
      ],
    },
  },
};

export default lesson;
