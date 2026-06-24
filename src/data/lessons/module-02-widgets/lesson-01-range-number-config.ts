import type { ConfigData, Lesson } from '../../types';

/**
 * Module 2 · Configure — The Number Widget.   Tag: M2.L1·C  (internal only)
 * The "how to build it" track for the Number widget, from the Widget
 * Specifications doc: Add Widget → sensors → theme → check-boxes →
 * aggregation → thresholds.
 */

const UNIT_MENU = ['Litres', 'Kilo litres', 'Kilo litre per hour', 'Metres', 'Percentage', 'Kilograms', 'NTU', 'pH', 'None'];
const CATEGORY_MENU = ['Water Quality', 'Energy Metrics', 'Plant Automation', 'Mechanical Metrics', 'Ticket Metrics', 'Chemical Metrics', 'None'];
const AGG_MENU = ['Raw', 'Average', 'Minimum', 'Maximum', 'Time Weighted Sum', 'Cumulative', 'Last Active'];

const BASE: ConfigData = {
  widget: 'Number Widget',
  sensors: [{ name: 'Permeate Flow', sub: 'Average', active: true }, { name: 'Inlet Flow' }, { add: true }],
  nickname: 'Permeate Flow',
  unit: 'Kilo litre per hour',
  category: 'Water Quality',
  checks: [
    { label: 'Show Percentage Change', on: true },
    { label: 'Treat Change as Neutral', on: false },
    { label: 'Treat Decrease as Improvement', on: false },
  ],
  aggregation: 'Average',
  threshold: { min: '0', max: '500', safe: '100 – 400', caution: '400 – 450', critical: '> 450' },
};

const cfg = (over: Partial<ConfigData>): { config: ConfigData } => ({ config: { ...BASE, ...over } });

const lesson: Lesson = {
  id: 'lesson-01-range-number-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'widgetConfig', caption: 'Add Widget', widgetState: cfg({ layoutChoice: 'auto', highlight: 'layout' }), cursor: [{ at: 0.4, x: 80, y: 12 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Add sensors', widgetState: cfg({ highlight: 'sensors' }), cursor: [{ at: 0.4, x: 12, y: 50 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Widget theme', widgetState: cfg({ highlight: 'theme', unitMenu: UNIT_MENU }), cursor: [{ at: 0.4, x: 70, y: 45 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Widget category', widgetState: cfg({ highlight: 'theme', categoryMenu: CATEGORY_MENU }), cursor: [{ at: 0.4, x: 70, y: 55 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'The check-boxes', widgetState: cfg({ highlight: 'checks' }), cursor: [{ at: 0.4, x: 60, y: 55 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Aggregation', widgetState: cfg({ highlight: 'aggregation', aggMenu: AGG_MENU }), cursor: [{ at: 0.4, x: 70, y: 60 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Thresholds', widgetState: cfg({ highlight: 'threshold' }), cursor: [{ at: 0.4, x: 70, y: 75 }] },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Number</em> Widget.',
      subtitle: 'The builder’s view — how to add a Number widget to a dashboard and shape every detail of it.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Add Widget', title: 'Add Widget — Auto or Drag-and-drop',
          body: 'Every widget starts from <strong>Add Widget</strong> on the dashboard. You choose a layout mode: <strong>Auto layout</strong>, where widget sizes are set for you, or <strong>Drag & drop</strong>, where you resize them to your own specifications.',
          voice: "Let's build a Number widget from scratch. Everything begins with the Add Widget button on the dashboard. The first choice is the layout mode. Auto layout sizes every widget for you automatically — quick and tidy. Drag and drop gives you full control, letting you resize each widget to your own specifications. For most dashboards, auto layout is the fastest way to get going, so we'll pick that and add a Number widget.",
        },
        {
          label: 'Sensors', title: 'Add one or many sensors',
          body: 'The Number widget first asks you to <strong>add sensors</strong> — a <strong>single sensor</strong>, or <strong>multiple</strong>. Each sensor you add becomes a value the widget displays. Everything after this point fine-tunes how those sensors look.',
          voice: "First, the widget asks you to add sensors. You can add a single sensor, or several. Here we've added Permeate Flow, and you could add Inlet Flow alongside it. Each sensor you add becomes a value the widget will show. Once your sensors are in, everything that follows is about shaping how those values look and behave — through the widget theme and the widget details.",
        },
        {
          label: 'Theme', title: 'Nickname & unit',
          body: 'In <strong>Widget Theme</strong>, give the widget a <strong>nickname</strong>, then pick a <strong>unit</strong> for the value — <em>litres, kilo litres, KL per hour, metres, percentage, kilograms, NTU, pH,</em> or <em>none</em>.',
          voice: "Now we shape it, starting with the Widget Theme. First, the nickname — this is simply the name the widget shows, so call it something clear like Permeate Flow. Next, the unit. This is how the sensor's value is labelled on screen, and you pick from the list: litres, kilo litres, kilo litre per hour, metres, percentage, kilograms, N T U, p H, or none. We're measuring a flow rate, so kilo litre per hour it is.",
        },
        {
          label: 'Category', title: 'Widget category',
          body: 'Still in the theme, choose a <strong>widget category</strong>: <em>water quality, energy metrics, plant automation, mechanical metrics, ticket metrics, chemical metrics,</em> or <em>none</em>. Categories help organise and colour-code widgets across the dashboard.',
          voice: "Below the unit is the widget category. You can tag the widget as water quality, energy metrics, plant automation, mechanical metrics, ticket metrics, chemical metrics, or leave it as none. Categorising widgets keeps a busy dashboard organised and makes related widgets easy to spot at a glance. A flow reading sits naturally under water quality.",
        },
        {
          label: 'Check-boxes', title: 'Three display check-boxes',
          body: 'Three check-boxes change how change is shown: <strong>Show Percentage Change</strong> (vs the previous time range), <strong>Treat Change as Neutral</strong> (show the % without up/down), and <strong>Treat Decrease as Improvement</strong> (a drop reads as good — ideal for energy).',
          voice: "Next come three check-boxes, and they're worth understanding. Show Percentage Change displays the change between the current time range and the one before it — the current range is the reference point. Treat Change as Neutral shows that percentage without judging it — no up or down, just the number. And Treat Decrease as Improvement flips the meaning so a drop counts as good news — exactly what you want for something like energy consumption, where less is better.",
        },
        {
          label: 'Aggregation', title: 'Widget Details — aggregation',
          body: 'In <strong>Widget Details</strong>, pick how the value is aggregated: <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> or <strong>Last Active</strong>. This decides what single number the widget actually shows.',
          voice: "Under Widget Details you set the aggregation — and this is what decides the single number the widget shows. Your choices are raw, average, minimum, maximum, time weighted sum, cumulative, and last active. Average is a sensible default for a flow rate. And a handy detail: if you add the same sensor with more than one aggregation, click that sensor to rename each value — so Average and Maximum can each carry their own label.",
        },
        {
          label: 'Thresholds', title: 'Threshold configuration',
          body: 'Finally, <strong>Threshold Configuration</strong>: set the sensor’s <strong>Minimum</strong> and <strong>Maximum</strong>, then the <strong>Safe</strong>, <strong>Caution</strong> and <strong>Critical</strong> ranges. These drive the colour bands operators see when they read the widget.',
          voice: "Last is the threshold configuration. You set the minimum and maximum for the sensor, then define the safe, caution, and critical ranges. This is the bridge back to the consumer view: these are the very bands that turn the number green, amber, or red when an operator reads it. Set them thoughtfully and the widget tells the story at a glance. Save, and your Number widget is live on the dashboard.",
          tip: { type: 'rememberLabel', text: 'Add Widget → sensors → theme (nickname/unit/category) → check-boxes → aggregation → thresholds. The Gauge widget is configured exactly the same way.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>नंबर</em> विजेट।',
      subtitle: 'बिल्डर का दृश्य — डैशबोर्ड पर नंबर विजेट कैसे जोड़ें और उसका हर विवरण कैसे आकार दें।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'विजेट जोड़ें', title: 'Add Widget — ऑटो या ड्रैग-एंड-ड्रॉप',
          body: 'हर विजेट डैशबोर्ड पर <strong>Add Widget</strong> से शुरू होता है। आप लेआउट मोड चुनते हैं: <strong>Auto layout</strong>, जहाँ विजेट के आकार स्वतः तय होते हैं, या <strong>Drag & drop</strong>, जहाँ आप अपनी पसंद से आकार बदलते हैं।',
          voice: "चलिए शुरू से एक नंबर विजेट बनाते हैं। सब कुछ डैशबोर्ड पर Add Widget बटन से शुरू होता है। पहला चुनाव लेआउट मोड है। Auto layout हर विजेट का आकार स्वतः तय करता है — तेज़ और साफ़। Drag and drop पूरा नियंत्रण देता है, जहाँ आप हर विजेट को अपनी पसंद के अनुसार आकार दे सकते हैं। ज़्यादातर डैशबोर्ड के लिए auto layout सबसे तेज़ तरीका है, तो हम वही चुनकर एक नंबर विजेट जोड़ते हैं।",
        },
        {
          label: 'सेंसर', title: 'एक या कई सेंसर जोड़ें',
          body: 'नंबर विजेट पहले <strong>सेंसर जोड़ने</strong> को कहता है — एक <strong>सिंगल सेंसर</strong>, या <strong>कई</strong>। हर जोड़ा गया सेंसर एक प्रदर्शित मान बन जाता है। इसके बाद सब कुछ इन सेंसरों का रूप तय करता है।',
          voice: "पहले, विजेट आपको सेंसर जोड़ने को कहता है। आप एक सेंसर जोड़ सकते हैं, या कई। यहाँ हमने Permeate Flow जोड़ा है, और इसके साथ Inlet Flow भी जोड़ सकते हैं। हर जोड़ा गया सेंसर एक मान बन जाता है जो विजेट दिखाएगा। सेंसर आ जाने के बाद, आगे सब कुछ इन मानों का रूप और व्यवहार तय करने के बारे में है — विजेट थीम और विजेट डिटेल्स के ज़रिए।",
        },
        {
          label: 'थीम', title: 'निकनेम और यूनिट',
          body: '<strong>Widget Theme</strong> में विजेट को एक <strong>निकनेम</strong> दें, फिर मान के लिए एक <strong>यूनिट</strong> चुनें — <em>लीटर, किलो लीटर, KL प्रति घंटा, मीटर, प्रतिशत, किलोग्राम, NTU, pH,</em> या <em>none</em>।',
          voice: "अब हम इसे आकार देते हैं, विजेट थीम से शुरू करते हुए। पहले, निकनेम — यह बस वह नाम है जो विजेट दिखाता है, तो इसे कुछ स्पष्ट रखें जैसे Permeate Flow। आगे, यूनिट। यह तय करती है कि सेंसर का मान स्क्रीन पर कैसे लेबल हो, और आप सूची से चुनते हैं: लीटर, किलो लीटर, किलो लीटर प्रति घंटा, मीटर, प्रतिशत, किलोग्राम, एन टी यू, पी एच, या none। हम एक फ़्लो रेट माप रहे हैं, तो किलो लीटर प्रति घंटा।",
        },
        {
          label: 'श्रेणी', title: 'विजेट श्रेणी',
          body: 'थीम में ही एक <strong>विजेट श्रेणी</strong> चुनें: <em>वॉटर क्वालिटी, एनर्जी मेट्रिक्स, प्लांट ऑटोमेशन, मैकेनिकल मेट्रिक्स, टिकट मेट्रिक्स, केमिकल मेट्रिक्स,</em> या <em>none</em>। श्रेणियाँ विजेट को व्यवस्थित और रंग-कोडित करने में मदद करती हैं।',
          voice: "यूनिट के नीचे विजेट श्रेणी है। आप विजेट को वॉटर क्वालिटी, एनर्जी मेट्रिक्स, प्लांट ऑटोमेशन, मैकेनिकल मेट्रिक्स, टिकट मेट्रिक्स, केमिकल मेट्रिक्स के रूप में टैग कर सकते हैं, या none छोड़ सकते हैं। विजेट को श्रेणीबद्ध करना एक व्यस्त डैशबोर्ड को व्यवस्थित रखता है और संबंधित विजेट को एक नज़र में पहचानने योग्य बनाता है। एक फ़्लो रीडिंग स्वाभाविक रूप से वॉटर क्वालिटी में आती है।",
        },
        {
          label: 'चेक-बॉक्स', title: 'तीन प्रदर्शन चेक-बॉक्स',
          body: 'तीन चेक-बॉक्स बदलते हैं कि बदलाव कैसे दिखे: <strong>Show Percentage Change</strong> (पिछली समय-सीमा की तुलना में), <strong>Treat Change as Neutral</strong> (बिना ऊपर/नीचे के % दिखाएँ), और <strong>Treat Decrease as Improvement</strong> (गिरावट को अच्छा माने — ऊर्जा के लिए उपयुक्त)।',
          voice: "आगे तीन चेक-बॉक्स आते हैं, और इन्हें समझना ज़रूरी है। Show Percentage Change वर्तमान समय-सीमा और उससे पिछली के बीच का बदलाव दिखाता है — वर्तमान सीमा संदर्भ बिंदु है। Treat Change as Neutral उस प्रतिशत को बिना आँके दिखाता है — कोई ऊपर या नीचे नहीं, बस संख्या। और Treat Decrease as Improvement अर्थ पलट देता है ताकि गिरावट अच्छी खबर मानी जाए — ठीक वैसा जैसा आप ऊर्जा खपत के लिए चाहते हैं, जहाँ कम बेहतर है।",
        },
        {
          label: 'एग्रीगेशन', title: 'विजेट डिटेल्स — एग्रीगेशन',
          body: '<strong>Widget Details</strong> में चुनें कि मान कैसे एग्रीगेट हो: <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> या <strong>Last Active</strong>। यह तय करता है कि विजेट वास्तव में कौन-सी एक संख्या दिखाता है।',
          voice: "Widget Details के तहत आप एग्रीगेशन सेट करते हैं — और यही तय करता है कि विजेट कौन-सी एक संख्या दिखाएगा। आपके विकल्प हैं raw, average, minimum, maximum, time weighted sum, cumulative, और last active। एक फ़्लो रेट के लिए average एक समझदार डिफ़ॉल्ट है। और एक उपयोगी बात: अगर आप वही सेंसर एक से ज़्यादा एग्रीगेशन के साथ जोड़ते हैं, तो उस सेंसर पर क्लिक करके हर मान का नाम बदलें — ताकि Average और Maximum अपना-अपना लेबल रख सकें।",
        },
        {
          label: 'थ्रेशोल्ड', title: 'थ्रेशोल्ड कॉन्फ़िगरेशन',
          body: 'अंत में, <strong>Threshold Configuration</strong>: सेंसर का <strong>Minimum</strong> और <strong>Maximum</strong> सेट करें, फिर <strong>Safe</strong>, <strong>Caution</strong> और <strong>Critical</strong> रेंज। ये वही रंग बैंड चलाते हैं जो ऑपरेटर विजेट पढ़ते समय देखते हैं।',
          voice: "अंत में थ्रेशोल्ड कॉन्फ़िगरेशन है। आप सेंसर का न्यूनतम और अधिकतम सेट करते हैं, फिर safe, caution, और critical रेंज तय करते हैं। यह उपभोक्ता दृश्य से वापस का पुल है: ये वही बैंड हैं जो ऑपरेटर के पढ़ते समय संख्या को हरा, अंबर, या लाल कर देते हैं। इन्हें सोच-समझकर सेट करें और विजेट एक नज़र में कहानी कह देता है। सेव करें, और आपका नंबर विजेट डैशबोर्ड पर लाइव है।",
          tip: { type: 'rememberLabel', text: 'Add Widget → सेंसर → थीम (निकनेम/यूनिट/श्रेणी) → चेक-बॉक्स → एग्रीगेशन → थ्रेशोल्ड। गेज विजेट बिल्कुल इसी तरह कॉन्फ़िगर होता है।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>எண்</em> விட்ஜெட்.',
      subtitle: 'கட்டுநரின் பார்வை — டாஷ்போர்டில் எண் விட்ஜெட்டை எப்படிச் சேர்ப்பது, அதன் ஒவ்வொரு விவரத்தையும் வடிவமைப்பது.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'விட்ஜெட் சேர்', title: 'Add Widget — ஆட்டோ அல்லது இழு-விடு',
          body: 'ஒவ்வொரு விட்ஜெட்டும் டாஷ்போர்டில் <strong>Add Widget</strong>-இல் தொடங்குகிறது. தளவமைப்பு முறையைத் தேர்வு செய்யுங்கள்: <strong>Auto layout</strong> (அளவுகள் தானாக அமைகின்றன) அல்லது <strong>Drag & drop</strong> (உங்கள் விருப்பப்படி அளவு மாற்றலாம்).',
          voice: "ஒரு எண் விட்ஜெட்டை முதலிலிருந்து கட்டுவோம். எல்லாம் டாஷ்போர்டில் Add Widget பொத்தானில் தொடங்குகிறது. முதல் தேர்வு தளவமைப்பு முறை. Auto layout ஒவ்வொரு விட்ஜெட்டின் அளவையும் தானாக அமைக்கிறது — விரைவு, நேர்த்தி. Drag and drop முழுக் கட்டுப்பாட்டைத் தருகிறது, ஒவ்வொரு விட்ஜெட்டையும் உங்கள் விருப்பப்படி அளவு மாற்ற விடுகிறது. பெரும்பாலான டாஷ்போர்டுகளுக்கு auto layout விரைவான வழி, எனவே அதைத் தேர்ந்து ஒரு எண் விட்ஜெட்டைச் சேர்ப்போம்.",
        },
        {
          label: 'சென்சார்கள்', title: 'ஒன்று அல்லது பல சென்சார்கள்',
          body: 'எண் விட்ஜெட் முதலில் <strong>சென்சார்களைச் சேர்க்க</strong> கேட்கிறது — ஒரு <strong>சென்சார்</strong> அல்லது <strong>பல</strong>. சேர்க்கும் ஒவ்வொரு சென்சாரும் விட்ஜெட் காட்டும் ஒரு மதிப்பாகும்.',
          voice: "முதலில், விட்ஜெட் சென்சார்களைச் சேர்க்கச் சொல்கிறது. ஒரு சென்சார் அல்லது பலவற்றைச் சேர்க்கலாம். இங்கே Permeate Flow சேர்த்துள்ளோம், அதனுடன் Inlet Flow-ஐயும் சேர்க்கலாம். சேர்க்கும் ஒவ்வொரு சென்சாரும் விட்ஜெட் காட்டும் ஒரு மதிப்பாகிறது. சென்சார்கள் வந்தபின், அடுத்து வருவதெல்லாம் அந்த மதிப்புகளின் தோற்றத்தையும் நடத்தையையும் வடிவமைப்பது — விட்ஜெட் தீம் மற்றும் விட்ஜெட் விவரங்கள் மூலம்.",
        },
        {
          label: 'தீம்', title: 'புனைப்பெயர் & அலகு',
          body: '<strong>Widget Theme</strong>-இல் விட்ஜெட்டுக்கு ஒரு <strong>புனைப்பெயர்</strong> கொடுங்கள், பின் மதிப்புக்கு ஒரு <strong>அலகு</strong> தேர்வு செய்யுங்கள் — <em>லிட்டர், கிலோ லிட்டர், KL/மணி, மீட்டர், சதவீதம், கிலோகிராம், NTU, pH,</em> அல்லது <em>none</em>.',
          voice: "இப்போது வடிவமைப்போம், விட்ஜெட் தீமில் தொடங்கி. முதலில், புனைப்பெயர் — இது விட்ஜெட் காட்டும் பெயர், எனவே Permeate Flow போல தெளிவாக வையுங்கள். அடுத்து, அலகு. சென்சாரின் மதிப்பு திரையில் எப்படி லேபிள் செய்யப்படும் என்பதை இது தீர்மானிக்கிறது: லிட்டர், கிலோ லிட்டர், கிலோ லிட்டர் ஒரு மணிக்கு, மீட்டர், சதவீதம், கிலோகிராம், என் டி யூ, பி எச், அல்லது none. நாம் ஒரு ஓட்ட வீதத்தை அளக்கிறோம், எனவே கிலோ லிட்டர் ஒரு மணிக்கு.",
        },
        {
          label: 'வகை', title: 'விட்ஜெட் வகை',
          body: 'தீமிலேயே ஒரு <strong>விட்ஜெட் வகையை</strong> தேர்வு செய்யுங்கள்: <em>நீர் தரம், ஆற்றல் அளவீடுகள், ஆலை தானியக்கம், இயந்திர அளவீடுகள், டிக்கெட் அளவீடுகள், வேதியியல் அளவீடுகள்,</em> அல்லது <em>none</em>. வகைகள் விட்ஜெட்களை ஒழுங்குபடுத்த உதவுகின்றன.',
          voice: "அலகுக்குக் கீழே விட்ஜெட் வகை. விட்ஜெட்டை நீர் தரம், ஆற்றல் அளவீடுகள், ஆலை தானியக்கம், இயந்திர அளவீடுகள், டிக்கெட் அளவீடுகள், வேதியியல் அளவீடுகள் எனக் குறிக்கலாம், அல்லது none விடலாம். விட்ஜெட்களை வகைப்படுத்துவது பரபரப்பான டாஷ்போர்டை ஒழுங்காக வைக்கிறது, தொடர்புடைய விட்ஜெட்களை ஒரே பார்வையில் அடையாளம் காண உதவுகிறது. ஒரு ஓட்ட அளவீடு இயல்பாக நீர் தரத்தின் கீழ் வருகிறது.",
        },
        {
          label: 'செக்-பாக்ஸ்', title: 'மூன்று காட்சி செக்-பாக்ஸ்',
          body: 'மூன்று செக்-பாக்ஸ் மாற்றம் எப்படிக் காட்டப்படுகிறது என்பதை மாற்றுகின்றன: <strong>Show Percentage Change</strong> (முந்தைய காலத்துடன் ஒப்பிட்டு), <strong>Treat Change as Neutral</strong> (மேல்/கீழ் இல்லாமல் % காட்டு), <strong>Treat Decrease as Improvement</strong> (குறைவு நல்லதாகக் கருதப்படும் — ஆற்றலுக்கு ஏற்றது).',
          voice: "அடுத்து மூன்று செக்-பாக்ஸ் வருகின்றன, இவற்றைப் புரிந்துகொள்வது முக்கியம். Show Percentage Change தற்போதைய காலத்துக்கும் அதற்கு முந்தையதற்கும் இடையிலான மாற்றத்தைக் காட்டுகிறது — தற்போதைய காலம் குறிப்புப் புள்ளி. Treat Change as Neutral அந்த சதவீதத்தை மதிப்பிடாமல் காட்டுகிறது — மேல் கீழ் இல்லை, வெறும் எண். Treat Decrease as Improvement அர்த்தத்தைப் புரட்டுகிறது, ஒரு குறைவு நல்ல செய்தியாகக் கருதப்படும் — ஆற்றல் நுகர்வுக்கு சரியாக நீங்கள் விரும்புவது, குறைவு சிறந்தது.",
        },
        {
          label: 'திரட்டல்', title: 'விட்ஜெட் விவரங்கள் — திரட்டல்',
          body: '<strong>Widget Details</strong>-இல் மதிப்பு எப்படித் திரட்டப்படும் எனத் தேர்வு செய்யுங்கள்: <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> அல்லது <strong>Last Active</strong>. விட்ஜெட் காட்டும் ஒற்றை எண் இதனால் தீர்மானிக்கப்படுகிறது.',
          voice: "Widget Details-இல் திரட்டலை அமைக்கிறீர்கள் — விட்ஜெட் காட்டும் ஒற்றை எண்ணை இதுவே தீர்மானிக்கிறது. உங்கள் தேர்வுகள்: raw, average, minimum, maximum, time weighted sum, cumulative, last active. ஒரு ஓட்ட வீதத்துக்கு average ஒரு நல்ல இயல்புநிலை. ஒரு பயனுள்ள விவரம்: அதே சென்சாரை ஒன்றுக்கு மேற்பட்ட திரட்டல்களுடன் சேர்த்தால், அந்த சென்சாரைக் கிளிக் செய்து ஒவ்வொரு மதிப்பையும் மறுபெயரிடுங்கள் — Average, Maximum தனித்தனி லேபிள் வைத்திருக்கலாம்.",
        },
        {
          label: 'வரம்புகள்', title: 'வரம்பு அமைவு',
          body: 'இறுதியாக, <strong>Threshold Configuration</strong>: சென்சாரின் <strong>Minimum</strong>, <strong>Maximum</strong> அமைத்து, பின் <strong>Safe</strong>, <strong>Caution</strong>, <strong>Critical</strong> வரம்புகள். இயக்குநர் விட்ஜெட்டைப் படிக்கும்போது காணும் நிற பட்டைகளை இவை இயக்குகின்றன.',
          voice: "இறுதியாக வரம்பு அமைவு. சென்சாரின் குறைந்தபட்சம், அதிகபட்சத்தை அமைத்து, பின் safe, caution, critical வரம்புகளை வரையறுக்கிறீர்கள். இது நுகர்வோர் பார்வைக்கு மீளும் பாலம்: இயக்குநர் படிக்கும்போது எண்ணைப் பச்சை, அம்பர், சிவப்பாக மாற்றும் அதே பட்டைகள் இவை. சிந்தித்து அமையுங்கள், விட்ஜெட் ஒரே பார்வையில் கதையைச் சொல்லும். சேமியுங்கள், உங்கள் எண் விட்ஜெட் டாஷ்போர்டில் நேரலை.",
          tip: { type: 'rememberLabel', text: 'Add Widget → சென்சார்கள் → தீம் (புனைப்பெயர்/அலகு/வகை) → செக்-பாக்ஸ் → திரட்டல் → வரம்புகள். கேஜ் விட்ஜெட்டும் இதேபோல் அமைக்கப்படுகிறது.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>नंबर</em> विजेट.',
      subtitle: 'बिल्डरचा दृष्टिकोन — डॅशबोर्डवर नंबर विजेट कसे जोडायचे आणि त्याचा प्रत्येक तपशील कसा घडवायचा.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'विजेट जोडा', title: 'Add Widget — ऑटो किंवा ड्रॅग-अँड-ड्रॉप',
          body: 'प्रत्येक विजेट डॅशबोर्डवर <strong>Add Widget</strong> ने सुरू होते. तुम्ही लेआउट मोड निवडता: <strong>Auto layout</strong>, जिथे आकार आपोआप ठरतात, किंवा <strong>Drag & drop</strong>, जिथे तुम्ही तुमच्या पसंतीने आकार बदलता.',
          voice: "चला सुरुवातीपासून एक नंबर विजेट बनवू. सर्व डॅशबोर्डवरील Add Widget बटणाने सुरू होते. पहिली निवड लेआउट मोड. Auto layout प्रत्येक विजेटचा आकार आपोआप ठरवते — जलद आणि नीटनेटके. Drag and drop पूर्ण नियंत्रण देते, प्रत्येक विजेट तुमच्या पसंतीने आकार बदलू देते. बहुतेक डॅशबोर्डसाठी auto layout सर्वात जलद मार्ग आहे, म्हणून तोच निवडून एक नंबर विजेट जोडू.",
        },
        {
          label: 'सेन्सर', title: 'एक किंवा अनेक सेन्सर जोडा',
          body: 'नंबर विजेट प्रथम <strong>सेन्सर जोडायला</strong> सांगते — एक <strong>सेन्सर</strong>, किंवा <strong>अनेक</strong>. जोडलेला प्रत्येक सेन्सर विजेट दाखवणारे एक मूल्य बनतो.',
          voice: "प्रथम, विजेट तुम्हाला सेन्सर जोडायला सांगते. तुम्ही एक सेन्सर जोडू शकता, किंवा अनेक. इथे आम्ही Permeate Flow जोडला आहे, आणि त्यासोबत Inlet Flow जोडू शकता. जोडलेला प्रत्येक सेन्सर विजेट दाखवणारे एक मूल्य बनतो. सेन्सर आल्यावर, पुढे सर्व या मूल्यांचे रूप आणि वर्तन घडवण्याबद्दल आहे — विजेट थीम आणि विजेट डिटेल्सद्वारे.",
        },
        {
          label: 'थीम', title: 'निकनेम आणि युनिट',
          body: '<strong>Widget Theme</strong> मध्ये विजेटला एक <strong>निकनेम</strong> द्या, मग मूल्यासाठी एक <strong>युनिट</strong> निवडा — <em>लिटर, किलो लिटर, KL प्रति तास, मीटर, टक्केवारी, किलोग्रॅम, NTU, pH,</em> किंवा <em>none</em>.',
          voice: "आता आपण ते घडवू, विजेट थीमपासून सुरुवात करून. प्रथम, निकनेम — हे फक्त विजेट दाखवणारे नाव आहे, म्हणून Permeate Flow सारखे स्पष्ट ठेवा. पुढे, युनिट. सेन्सरचे मूल्य स्क्रीनवर कसे लेबल होईल हे यावरून ठरते: लिटर, किलो लिटर, किलो लिटर प्रति तास, मीटर, टक्केवारी, किलोग्रॅम, एन टी यू, पी एच, किंवा none. आपण फ्लो रेट मोजत आहोत, म्हणून किलो लिटर प्रति तास.",
        },
        {
          label: 'श्रेणी', title: 'विजेट श्रेणी',
          body: 'थीममध्येच एक <strong>विजेट श्रेणी</strong> निवडा: <em>वॉटर क्वालिटी, एनर्जी मेट्रिक्स, प्लांट ऑटोमेशन, मेकॅनिकल मेट्रिक्स, तिकीट मेट्रिक्स, केमिकल मेट्रिक्स,</em> किंवा <em>none</em>. श्रेणी विजेट व्यवस्थित आणि रंग-कोडित ठेवायला मदत करतात.',
          voice: "युनिटखाली विजेट श्रेणी आहे. तुम्ही विजेटला वॉटर क्वालिटी, एनर्जी मेट्रिक्स, प्लांट ऑटोमेशन, मेकॅनिकल मेट्रिक्स, तिकीट मेट्रिक्स, केमिकल मेट्रिक्स म्हणून टॅग करू शकता, किंवा none ठेवू शकता. विजेट श्रेणीबद्ध केल्याने व्यस्त डॅशबोर्ड व्यवस्थित राहतो आणि संबंधित विजेट एका दृष्टीक्षेपात ओळखता येतात. एक फ्लो रीडिंग नैसर्गिकरीत्या वॉटर क्वालिटीमध्ये येते.",
        },
        {
          label: 'चेक-बॉक्स', title: 'तीन डिस्प्ले चेक-बॉक्स',
          body: 'तीन चेक-बॉक्स बदल कसा दाखवायचा ते बदलतात: <strong>Show Percentage Change</strong> (मागील कालावधीच्या तुलनेत), <strong>Treat Change as Neutral</strong> (वर/खाली न दाखवता % दाखवा), आणि <strong>Treat Decrease as Improvement</strong> (घट चांगली मानली जाते — ऊर्जेसाठी योग्य).',
          voice: "पुढे तीन चेक-बॉक्स येतात, आणि ते समजून घेणे महत्त्वाचे आहे. Show Percentage Change सध्याच्या कालावधी आणि त्याआधीच्या दरम्यानचा बदल दाखवते — सध्याचा कालावधी संदर्भबिंदू. Treat Change as Neutral ती टक्केवारी न मोजता दाखवते — वर किंवा खाली नाही, फक्त संख्या. आणि Treat Decrease as Improvement अर्थ उलटवते, जेणेकरून घट चांगली बातमी मानली जाते — ऊर्जा वापरासाठी अगदी हेच तुम्हाला हवे, जिथे कमी चांगले.",
        },
        {
          label: 'अ‍ॅग्रिगेशन', title: 'विजेट डिटेल्स — अ‍ॅग्रिगेशन',
          body: '<strong>Widget Details</strong> मध्ये मूल्य कसे अ‍ॅग्रिगेट करायचे ते निवडा: <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> किंवा <strong>Last Active</strong>. विजेट प्रत्यक्षात कोणती एक संख्या दाखवते हे यावरून ठरते.',
          voice: "Widget Details खाली तुम्ही अ‍ॅग्रिगेशन सेट करता — आणि विजेट कोणती एक संख्या दाखवेल हे यावरूनच ठरते. तुमचे पर्याय: raw, average, minimum, maximum, time weighted sum, cumulative, आणि last active. फ्लो रेटसाठी average एक समजूतदार डिफॉल्ट आहे. आणि एक उपयुक्त तपशील: तोच सेन्सर एकापेक्षा जास्त अ‍ॅग्रिगेशनसह जोडल्यास, त्या सेन्सरवर क्लिक करून प्रत्येक मूल्याचे नाव बदला — म्हणजे Average आणि Maximum स्वतःचे लेबल ठेवू शकतात.",
        },
        {
          label: 'थ्रेशोल्ड', title: 'थ्रेशोल्ड कॉन्फिगरेशन',
          body: 'शेवटी, <strong>Threshold Configuration</strong>: सेन्सरचे <strong>Minimum</strong> आणि <strong>Maximum</strong> सेट करा, मग <strong>Safe</strong>, <strong>Caution</strong> आणि <strong>Critical</strong> श्रेणी. ऑपरेटर विजेट वाचताना पाहतात ते रंग बँड हे चालवतात.',
          voice: "शेवटी थ्रेशोल्ड कॉन्फिगरेशन आहे. तुम्ही सेन्सरचे किमान आणि कमाल सेट करता, मग safe, caution, आणि critical श्रेणी ठरवता. हा ग्राहक दृश्याकडे परतीचा पूल आहे: ऑपरेटर वाचताना संख्येला हिरवा, अंबर, किंवा लाल करणारे हेच बँड आहेत. विचारपूर्वक सेट करा आणि विजेट एका दृष्टीक्षेपात कथा सांगते. सेव्ह करा, आणि तुमचे नंबर विजेट डॅशबोर्डवर लाइव्ह आहे.",
          tip: { type: 'rememberLabel', text: 'Add Widget → सेन्सर → थीम (निकनेम/युनिट/श्रेणी) → चेक-बॉक्स → अ‍ॅग्रिगेशन → थ्रेशोल्ड. गेज विजेट अगदी याच पद्धतीने कॉन्फिगर होते.' },
        },
      ],
    },
  },
};

export default lesson;
