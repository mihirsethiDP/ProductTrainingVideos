import type { ConfigData, Lesson } from '../../types';

/** Module 2 · Configure — The Advanced Table.   Tag: M2.L4·C  (internal only) */

const AGG_MENU = ['Average', 'Cumulative', 'Maximum', 'Minimum', 'Current', 'Time Weighted Sum', 'Last Active', 'Percentage Uptime'];

const BASE: ConfigData = {
  widget: 'Advanced Table',
  sensors: [{ name: 'Inlet Quality', active: true }, { name: 'Outlet Quality' }, { add: true }],
  nickname: 'Inlet vs Outlet Quality',
  axes: [
    { label: 'X · Relative time', value: 'Today' },
    { label: 'Y · Sensors', value: 'Inlet, Outlet' },
    { label: 'Z · Aggregations', value: 'Current · Max · Min · Avg' },
  ],
  aggregation: 'Current',
  extras: [
    { label: 'Granularity', value: 'Hours' },
    { label: 'Relative time', value: 'Today' },
  ],
  threshold: { min: '0', max: '120', safe: '0 – 80', caution: '80 – 100', critical: '> 100' },
};
const cfg = (over: Partial<ConfigData>): { config: ConfigData } => ({ config: { ...BASE, ...over } });

const lesson: Lesson = {
  id: 'lesson-04-advanced-table-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 4,
  estimatedMinutes: 5,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'widgetConfig', caption: 'Three axes', widgetState: cfg({ highlight: 'axes' }), cursor: [{ at: 0.4, x: 70, y: 35 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Aggregations', widgetState: cfg({ highlight: 'aggregation', aggMenu: AGG_MENU }), cursor: [{ at: 0.4, x: 70, y: 55 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Relative time & granularity', widgetState: cfg({ highlight: 'extras' }), cursor: [{ at: 0.4, x: 70, y: 65 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Per-sensor thresholds', widgetState: cfg({ highlight: 'threshold' }), cursor: [{ at: 0.4, x: 70, y: 80 }] },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Advanced</em> Table.',
      subtitle: 'The only three-axis widget — plot sensors, aggregations and relative time however you like.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Three axes', title: 'Sensors × Aggregations × Relative time',
          body: 'The Advanced Table is the <strong>only three-axis widget</strong>. You assign three things — <strong>Sensors</strong>, <strong>Aggregations</strong> and <strong>Relative time</strong> — onto the <strong>X, Y and Z</strong> axes in any combination. <em>Note: set X to None and it defaults to Sensors, leaving Aggregations and Relative time for Y and X.</em>',
          voice: "The Advanced Table is special — it's the only widget with three axes. You're working with three ingredients: sensors, aggregations, and relative time. And you can plot any of them on any axis you like. In this example, relative time is on the X axis, the sensors are on the Y axis, and the aggregations are on the Z axis — so you see the current, maximum, minimum and average of each sensor, for today. One rule to remember: if you set the X axis to None, it defaults back to sensors, and you're left choosing between aggregations and relative time for the other two axes.",
        },
        {
          label: 'Aggregations', title: 'Choose the aggregations',
          body: 'At the <strong>aggregation level</strong> pick any of: <strong>Average, Cumulative, Maximum, Minimum, Current, Time Weighted Sum, Last Active</strong> and <strong>Percentage Uptime</strong> — each becomes a value shown for every sensor.',
          voice: "On the aggregation axis you choose which values to show, and the Advanced Table has the richest set of any widget: average, cumulative, maximum, minimum, current, time weighted sum, last active, and percentage uptime. Each one you pick becomes a value displayed for every sensor on the table. So selecting current, max, min and average gives you four readings per sensor, all at once.",
        },
        {
          label: 'Relative time', title: 'Relative time & granularity',
          body: 'At the <strong>relative time level</strong> choose <strong>Today, Last 24 hours, Yesterday, Last 7 / 30 days, Last 3 months,</strong> or a <strong>custom</strong> range. You can also set the <strong>granularity</strong> in hours or days, and rename the widget.',
          voice: "On the relative time axis you set the window: today, last twenty-four hours, yesterday, last seven days, last thirty days, last three months, or a custom relative time. Alongside that you can set the granularity — hours or days — and give the widget a clear name. Between the three axes and these options, the Advanced Table can express almost any comparison you need.",
        },
        {
          label: 'Thresholds', title: 'Per-sensor thresholds',
          body: 'At the <strong>sensor level</strong> you can configure the <strong>threshold</strong> — Minimum, Maximum, and the Safe, Caution and Critical ranges — so each sensor’s cells carry their own colour coding.',
          voice: "Finally, just like the simpler widgets, you can configure thresholds — but here it's per sensor. At the sensor level you set the minimum and maximum, then the safe, caution and critical ranges, so each sensor's cells light up in their own colours. That keeps a dense, three-dimensional table readable: even with dozens of values on screen, the colours pull your eye straight to what's out of range. Save, and it's on the dashboard.",
          tip: { type: 'rememberLabel', text: 'Three axes: Sensors × Aggregations × Relative time. X = None defaults to Sensors. Thresholds are set per sensor.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>एडवांस्ड</em> टेबल।',
      subtitle: 'एकमात्र तीन-अक्ष विजेट — सेंसर, एग्रीगेशन और रिलेटिव टाइम जैसे चाहें प्लॉट करें।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'तीन अक्ष', title: 'सेंसर × एग्रीगेशन × रिलेटिव टाइम',
          body: 'एडवांस्ड टेबल <strong>एकमात्र तीन-अक्ष विजेट</strong> है। आप तीन चीज़ें — <strong>सेंसर</strong>, <strong>एग्रीगेशन</strong> और <strong>रिलेटिव टाइम</strong> — किसी भी संयोजन में <strong>X, Y और Z</strong> अक्षों पर रखते हैं। <em>नोट: X को None करें तो यह सेंसर पर डिफ़ॉल्ट हो जाता है।</em>',
          voice: "एडवांस्ड टेबल ख़ास है — यह एकमात्र विजेट है जिसके तीन अक्ष हैं। आप तीन सामग्रियों के साथ काम करते हैं: सेंसर, एग्रीगेशन, और रिलेटिव टाइम। और आप इनमें से किसी को भी किसी भी अक्ष पर प्लॉट कर सकते हैं। इस उदाहरण में, रिलेटिव टाइम X अक्ष पर है, सेंसर Y अक्ष पर, और एग्रीगेशन Z अक्ष पर — तो आप हर सेंसर का करंट, मैक्सिमम, मिनिमम और औसत देखते हैं, आज के लिए। एक नियम याद रखें: अगर आप X अक्ष को None करते हैं, यह वापस सेंसर पर डिफ़ॉल्ट हो जाता है, और बाक़ी दो अक्षों के लिए आप एग्रीगेशन और रिलेटिव टाइम के बीच चुनते हैं।",
        },
        {
          label: 'एग्रीगेशन', title: 'एग्रीगेशन चुनें',
          body: '<strong>एग्रीगेशन स्तर</strong> पर चुनें: <strong>Average, Cumulative, Maximum, Minimum, Current, Time Weighted Sum, Last Active</strong> और <strong>Percentage Uptime</strong> — हर एक हर सेंसर के लिए दिखाया गया मान बनता है।',
          voice: "एग्रीगेशन अक्ष पर आप चुनते हैं कि कौन-से मान दिखाने हैं, और एडवांस्ड टेबल के पास किसी भी विजेट का सबसे समृद्ध सेट है: average, cumulative, maximum, minimum, current, time weighted sum, last active, और percentage uptime। आप जो भी चुनते हैं वह टेबल के हर सेंसर के लिए दिखाया गया मान बनता है। तो current, max, min और average चुनने से आपको प्रति सेंसर चार रीडिंग मिलती हैं, एक साथ।",
        },
        {
          label: 'रिलेटिव टाइम', title: 'रिलेटिव टाइम और ग्रैन्युलैरिटी',
          body: '<strong>रिलेटिव टाइम स्तर</strong> पर चुनें <strong>Today, Last 24 hours, Yesterday, Last 7 / 30 days, Last 3 months,</strong> या <strong>कस्टम</strong> रेंज। आप <strong>ग्रैन्युलैरिटी</strong> घंटे या दिन में सेट कर सकते हैं, और विजेट का नाम बदल सकते हैं।',
          voice: "रिलेटिव टाइम अक्ष पर आप विंडो सेट करते हैं: आज, पिछले चौबीस घंटे, कल, पिछले सात दिन, पिछले तीस दिन, पिछले तीन महीने, या कस्टम रिलेटिव टाइम। इसके साथ आप ग्रैन्युलैरिटी सेट कर सकते हैं — घंटे या दिन — और विजेट को स्पष्ट नाम दे सकते हैं। तीन अक्षों और इन विकल्पों के बीच, एडवांस्ड टेबल लगभग कोई भी तुलना व्यक्त कर सकती है जो आपको चाहिए।",
        },
        {
          label: 'थ्रेशोल्ड', title: 'प्रति-सेंसर थ्रेशोल्ड',
          body: '<strong>सेंसर स्तर</strong> पर आप <strong>थ्रेशोल्ड</strong> कॉन्फ़िगर कर सकते हैं — Minimum, Maximum, और Safe, Caution तथा Critical रेंज — ताकि हर सेंसर की सेल अपना रंग-कोडिंग रखें।',
          voice: "अंत में, सरल विजेट की तरह ही, आप थ्रेशोल्ड कॉन्फ़िगर कर सकते हैं — पर यहाँ यह प्रति सेंसर है। सेंसर स्तर पर आप न्यूनतम और अधिकतम सेट करते हैं, फिर safe, caution और critical रेंज, ताकि हर सेंसर की सेल अपने रंगों में जगमगाए। यह एक घनी, त्रि-आयामी टेबल को पठनीय रखता है: स्क्रीन पर दर्जनों मानों के बावजूद, रंग आपकी नज़र सीधे उस ओर खींचते हैं जो रेंज से बाहर है। सेव करें, और यह डैशबोर्ड पर है।",
          tip: { type: 'rememberLabel', text: 'तीन अक्ष: सेंसर × एग्रीगेशन × रिलेटिव टाइम। X = None सेंसर पर डिफ़ॉल्ट। थ्रेशोल्ड प्रति सेंसर सेट होते हैं।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>மேம்பட்ட</em> அட்டவணை.',
      subtitle: 'மூன்று-அச்சு கொண்ட ஒரே விட்ஜெட் — சென்சார்கள், திரட்டல்கள், சார்பு நேரத்தை விரும்பியபடி வரையவும்.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'மூன்று அச்சுகள்', title: 'சென்சார் × திரட்டல் × சார்பு நேரம்',
          body: 'மேம்பட்ட அட்டவணை <strong>மூன்று அச்சு கொண்ட ஒரே விட்ஜெட்</strong>. மூன்று விஷயங்களை — <strong>சென்சார்கள்</strong>, <strong>திரட்டல்கள்</strong>, <strong>சார்பு நேரம்</strong> — <strong>X, Y, Z</strong> அச்சுகளில் எந்தச் சேர்க்கையிலும் வைக்கலாம். <em>குறிப்பு: X-ஐ None ஆக்கினால் சென்சாருக்கு இயல்பாகிறது.</em>',
          voice: "மேம்பட்ட அட்டவணை சிறப்பானது — மூன்று அச்சுகள் கொண்ட ஒரே விட்ஜெட் இதுவே. மூன்று மூலப்பொருட்களுடன் வேலை செய்கிறீர்கள்: சென்சார்கள், திரட்டல்கள், சார்பு நேரம். இவற்றில் எதையும் எந்த அச்சிலும் வரையலாம். இந்த எடுத்துக்காட்டில், சார்பு நேரம் X அச்சில், சென்சார்கள் Y அச்சில், திரட்டல்கள் Z அச்சில் — எனவே ஒவ்வொரு சென்சாரின் தற்போதைய, அதிகபட்ச, குறைந்தபட்ச, சராசரியை இன்றைக்குப் பார்க்கிறீர்கள். ஒரு விதி: X அச்சை None ஆக்கினால், அது மீண்டும் சென்சாருக்கு இயல்பாகி, மற்ற இரு அச்சுகளுக்கு திரட்டல், சார்பு நேரம் இடையே தேர்வு செய்கிறீர்கள்.",
        },
        {
          label: 'திரட்டல்கள்', title: 'திரட்டல்களைத் தேர்வு செய்',
          body: '<strong>திரட்டல் மட்டத்தில்</strong> தேர்வு: <strong>Average, Cumulative, Maximum, Minimum, Current, Time Weighted Sum, Last Active</strong>, <strong>Percentage Uptime</strong> — ஒவ்வொன்றும் ஒவ்வொரு சென்சாருக்கும் காட்டப்படும் மதிப்பாகும்.',
          voice: "திரட்டல் அச்சில் எந்த மதிப்புகளைக் காட்ட எனத் தேர்வு செய்கிறீர்கள், எந்த விட்ஜெட்டையும் விட மேம்பட்ட அட்டவணைக்கு வளமான தொகுப்பு உள்ளது: average, cumulative, maximum, minimum, current, time weighted sum, last active, percentage uptime. தேர்ந்த ஒவ்வொன்றும் அட்டவணையின் ஒவ்வொரு சென்சாருக்கும் காட்டப்படும் மதிப்பாகிறது. current, max, min, average தேர்ந்தால் ஒவ்வொரு சென்சாருக்கும் நான்கு அளவீடுகள், ஒரே நேரத்தில்.",
        },
        {
          label: 'சார்பு நேரம்', title: 'சார்பு நேரம் & நுண்மை',
          body: '<strong>சார்பு நேர மட்டத்தில்</strong> தேர்வு <strong>Today, Last 24 hours, Yesterday, Last 7 / 30 days, Last 3 months,</strong> அல்லது <strong>தனிப்பயன்</strong>. <strong>நுண்மையை</strong> மணி அல்லது நாட்களில் அமைத்து, விட்ஜெட்டை மறுபெயரிடலாம்.',
          voice: "சார்பு நேர அச்சில் சாளரத்தை அமைக்கிறீர்கள்: இன்று, கடந்த இருபத்திநான்கு மணி, நேற்று, கடந்த ஏழு நாட்கள், கடந்த முப்பது நாட்கள், கடந்த மூன்று மாதங்கள், அல்லது தனிப்பயன் சார்பு நேரம். அதனுடன் நுண்மையை அமைக்கலாம் — மணி அல்லது நாட்கள் — விட்ஜெட்டுக்கு தெளிவான பெயர் கொடுக்கலாம். மூன்று அச்சுகளுக்கும் இந்த விருப்பங்களுக்கும் இடையே, மேம்பட்ட அட்டவணை உங்களுக்குத் தேவையான கிட்டத்தட்ட எந்த ஒப்பீட்டையும் வெளிப்படுத்தும்.",
        },
        {
          label: 'வரம்புகள்', title: 'சென்சார் வாரியான வரம்புகள்',
          body: '<strong>சென்சார் மட்டத்தில்</strong> <strong>வரம்பை</strong> அமைக்கலாம் — Minimum, Maximum, Safe, Caution, Critical வரம்புகள் — ஒவ்வொரு சென்சாரின் கலங்களும் தனி வண்ணக் குறியீடு கொள்ளும்.',
          voice: "இறுதியாக, எளிய விட்ஜெட்கள் போலவே, வரம்புகளை அமைக்கலாம் — ஆனால் இங்கே சென்சார் வாரியாக. சென்சார் மட்டத்தில் குறைந்தபட்சம், அதிகபட்சம் அமைத்து, பின் safe, caution, critical வரம்புகள், ஒவ்வொரு சென்சாரின் கலங்களும் தம் வண்ணங்களில் ஒளிரும். இது அடர்த்தியான, முப்பரிமாண அட்டவணையைப் படிக்கக்கூடியதாக வைக்கிறது: திரையில் டஜன் கணக்கான மதிப்புகள் இருந்தாலும், வண்ணங்கள் வரம்புக்கு வெளியே உள்ளதை நோக்கி உங்கள் கண்ணை இழுக்கின்றன. சேமியுங்கள், டாஷ்போர்டில்.",
          tip: { type: 'rememberLabel', text: 'மூன்று அச்சுகள்: சென்சார் × திரட்டல் × சார்பு நேரம். X = None சென்சாருக்கு இயல்பு. வரம்புகள் சென்சார் வாரியாக.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>अ‍ॅडव्हान्स्ड</em> टेबल.',
      subtitle: 'एकमेव तीन-अक्ष विजेट — सेन्सर, अ‍ॅग्रिगेशन आणि रिलेटिव्ह टाइम हवे तसे प्लॉट करा.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'तीन अक्ष', title: 'सेन्सर × अ‍ॅग्रिगेशन × रिलेटिव्ह टाइम',
          body: 'अ‍ॅडव्हान्स्ड टेबल हे <strong>एकमेव तीन-अक्ष विजेट</strong> आहे. तुम्ही तीन गोष्टी — <strong>सेन्सर</strong>, <strong>अ‍ॅग्रिगेशन</strong> आणि <strong>रिलेटिव्ह टाइम</strong> — कोणत्याही संयोजनात <strong>X, Y आणि Z</strong> अक्षांवर ठेवता. <em>टीप: X ला None केल्यास ते सेन्सरवर डिफॉल्ट होते.</em>',
          voice: "अ‍ॅडव्हान्स्ड टेबल खास आहे — तीन अक्ष असलेले एकमेव विजेट हेच आहे. तुम्ही तीन घटकांसह काम करता: सेन्सर, अ‍ॅग्रिगेशन, आणि रिलेटिव्ह टाइम. आणि यांपैकी कोणतेही कोणत्याही अक्षावर प्लॉट करू शकता. या उदाहरणात, रिलेटिव्ह टाइम X अक्षावर, सेन्सर Y अक्षावर, आणि अ‍ॅग्रिगेशन Z अक्षावर — म्हणून तुम्ही प्रत्येक सेन्सरचे करंट, मॅक्सिमम, मिनिमम आणि सरासरी पाहता, आजसाठी. एक नियम लक्षात ठेवा: X अक्ष None केल्यास, ते पुन्हा सेन्सरवर डिफॉल्ट होते, आणि उरलेल्या दोन अक्षांसाठी तुम्ही अ‍ॅग्रिगेशन आणि रिलेटिव्ह टाइममध्ये निवडता.",
        },
        {
          label: 'अ‍ॅग्रिगेशन', title: 'अ‍ॅग्रिगेशन निवडा',
          body: '<strong>अ‍ॅग्रिगेशन स्तरावर</strong> निवडा: <strong>Average, Cumulative, Maximum, Minimum, Current, Time Weighted Sum, Last Active</strong> आणि <strong>Percentage Uptime</strong> — प्रत्येक प्रत्येक सेन्सरसाठी दाखवलेले मूल्य बनते.',
          voice: "अ‍ॅग्रिगेशन अक्षावर तुम्ही कोणती मूल्ये दाखवायची ते निवडता, आणि अ‍ॅडव्हान्स्ड टेबलकडे कोणत्याही विजेटपेक्षा समृद्ध संच आहे: average, cumulative, maximum, minimum, current, time weighted sum, last active, आणि percentage uptime. तुम्ही जे निवडता ते टेबलवरील प्रत्येक सेन्सरसाठी दाखवलेले मूल्य बनते. म्हणून current, max, min आणि average निवडल्याने तुम्हाला प्रति सेन्सर चार रीडिंग मिळतात, एकाच वेळी.",
        },
        {
          label: 'रिलेटिव्ह टाइम', title: 'रिलेटिव्ह टाइम आणि ग्रॅन्युलॅरिटी',
          body: '<strong>रिलेटिव्ह टाइम स्तरावर</strong> निवडा <strong>Today, Last 24 hours, Yesterday, Last 7 / 30 days, Last 3 months,</strong> किंवा <strong>कस्टम</strong> श्रेणी. <strong>ग्रॅन्युलॅरिटी</strong> तास किंवा दिवसांत सेट करा, आणि विजेटचे नाव बदला.',
          voice: "रिलेटिव्ह टाइम अक्षावर तुम्ही विंडो सेट करता: आज, मागचे चोवीस तास, काल, मागचे सात दिवस, मागचे तीस दिवस, मागचे तीन महिने, किंवा कस्टम रिलेटिव्ह टाइम. त्यासोबत तुम्ही ग्रॅन्युलॅरिटी सेट करू शकता — तास किंवा दिवस — आणि विजेटला स्पष्ट नाव देऊ शकता. तीन अक्ष आणि या पर्यायांदरम्यान, अ‍ॅडव्हान्स्ड टेबल तुम्हाला हवी असलेली जवळपास कोणतीही तुलना व्यक्त करू शकते.",
        },
        {
          label: 'थ्रेशोल्ड', title: 'प्रति-सेन्सर थ्रेशोल्ड',
          body: '<strong>सेन्सर स्तरावर</strong> तुम्ही <strong>थ्रेशोल्ड</strong> कॉन्फिगर करू शकता — Minimum, Maximum, आणि Safe, Caution व Critical श्रेणी — म्हणजे प्रत्येक सेन्सरच्या सेल्स स्वतःचे रंग-कोडिंग ठेवतात.',
          voice: "शेवटी, साध्या विजेटप्रमाणेच, तुम्ही थ्रेशोल्ड कॉन्फिगर करू शकता — पण इथे ते प्रति सेन्सर आहे. सेन्सर स्तरावर तुम्ही किमान आणि कमाल सेट करता, मग safe, caution आणि critical श्रेणी, म्हणजे प्रत्येक सेन्सरच्या सेल्स स्वतःच्या रंगांत उजळतात. हे एका दाट, त्रिमितीय टेबलला वाचनीय ठेवते: स्क्रीनवर डझनभर मूल्ये असूनही, रंग तुमची नजर थेट श्रेणीबाहेर असलेल्याकडे खेचतात. सेव्ह करा, आणि ते डॅशबोर्डवर आहे.",
          tip: { type: 'rememberLabel', text: 'तीन अक्ष: सेन्सर × अ‍ॅग्रिगेशन × रिलेटिव्ह टाइम. X = None सेन्सरवर डिफॉल्ट. थ्रेशोल्ड प्रति सेन्सर.' },
        },
      ],
    },
  },
};

export default lesson;
