import type { ConfigData, Lesson } from '../../types';

/** Module 2 · Configure — The Elastic Table.   Tag: M2.L3·C  (internal only) */

const BASE: ConfigData = {
  widget: 'Elastic Table',
  sensors: [
    { name: 'Inlet COD', sub: 'Inlet group', active: true },
    { name: 'Inlet BOD', sub: 'Inlet group' },
    { name: 'Outlet COD', sub: 'Outlet group' },
    { add: true },
  ],
  nickname: 'Inlet vs Outlet Quality',
  extras: [
    { label: 'Grouping', value: 'Inlet group · Outlet group' },
    { label: 'Granularity', value: 'Days' },
    { label: 'Time windows', value: '30  (max 200)' },
    { label: 'Layout', value: 'Sensors as rows' },
  ],
};
const cfg = (over: Partial<ConfigData>): { config: ConfigData } => ({ config: { ...BASE, ...over } });

const lesson: Lesson = {
  id: 'lesson-03-elastic-table-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 3,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'widgetConfig', caption: 'Select sensors', widgetState: cfg({ highlight: 'sensors' }), cursor: [{ at: 0.4, x: 12, y: 45 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Group sensors', widgetState: cfg({ highlight: 'extras' }), cursor: [{ at: 0.4, x: 70, y: 40 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Layout: granularity & windows', widgetState: cfg({ highlight: 'extras' }), cursor: [{ at: 0.4, x: 70, y: 55 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Two axes & column view', widgetState: cfg({ highlight: 'extras' }), cursor: [{ at: 0.4, x: 70, y: 70 }] },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Elastic</em> Table.',
      subtitle: 'Group many sensors into one table and lay their values out across time.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Sensors', title: 'List your sensors',
          body: 'Start by <strong>selecting the sensors</strong> you want in the table and listing them. The Elastic Table is built to hold <strong>many sensors at once</strong>, so add everything you want to compare side by side.',
          voice: "The Elastic Table is the widget for putting lots of sensors into a single, organised table. So we start by selecting the sensors we want and listing them. Here we've picked inlet and outlet quality parameters — C O D and B O D on each side. The Elastic Table is designed to hold many sensors at once, so add everything you'd like to see side by side.",
        },
        {
          label: 'Grouping', title: 'Group related sensors',
          body: 'Next, use the grouping option to <strong>group desired sensors together</strong> inside the table — for example an <em>Inlet</em> group and an <em>Outlet</em> group. Grouping keeps a large table readable.',
          voice: "Now the feature that gives this widget its power — grouping. You can select sensors and group them together inside the same table. Here we make an Inlet group and an Outlet group, so the related parameters sit together. On a table with a dozen or more sensors, grouping is what keeps it readable, instead of one long undifferentiated list.",
        },
        {
          label: 'Layout', title: 'Name, granularity & time windows',
          body: 'Under <strong>Layout</strong>, rename a sensor, set the <strong>time range and granularity</strong> (months, weeks, days…), and choose how many <strong>time windows</strong> to display — up to a maximum of <strong>200</strong>.',
          voice: "Under layout you control how the table reads across time. You can rename any sensor, set the granularity — months, weeks, days, and so on — and then choose how many time windows to show. So at a daily granularity you might show the last thirty days, each day its own column. The maximum is two hundred time windows, which is a lot of history in one table when you need it.",
        },
        {
          label: 'Axes & views', title: 'Two axes, and a column view',
          body: 'The Elastic Table has <strong>two axes</strong> — one for the sensor, one for its value over time. You can show just the <strong>last time range</strong>, or switch to a <strong>column view</strong> where sensors sit on the rows and time windows run across the columns.',
          voice: "Finally, the views. The Elastic Table has two axes — one showing each sensor, the other showing its value over time. You can choose to show only the last time range when you just want the latest snapshot. Or you can switch to a column view, where the sensor metrics run down the rows and the time windows run across the columns. Pick whichever orientation reads best for your data, save, and the table is on the dashboard.",
          tip: { type: 'rememberLabel', text: 'Sensors → group them → set granularity & up to 200 time windows → choose row or column view.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>इलास्टिक</em> टेबल।',
      subtitle: 'कई सेंसरों को एक टेबल में समूहित करें और उनके मानों को समय के साथ व्यवस्थित करें।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'सेंसर', title: 'अपने सेंसर सूचीबद्ध करें',
          body: 'सबसे पहले उन <strong>सेंसरों को चुनें</strong> जो आप टेबल में चाहते हैं और उन्हें सूचीबद्ध करें। इलास्टिक टेबल <strong>एक साथ कई सेंसर</strong> रखने के लिए बनी है।',
          voice: "इलास्टिक टेबल वह विजेट है जो बहुत सारे सेंसरों को एक संगठित टेबल में रखता है। तो हम उन सेंसरों को चुनकर शुरू करते हैं जो हम चाहते हैं और उन्हें सूचीबद्ध करते हैं। यहाँ हमने इनलेट और आउटलेट क्वालिटी पैरामीटर चुने हैं — हर ओर सी ओ डी और बी ओ डी। इलास्टिक टेबल एक साथ कई सेंसर रखने के लिए बनी है, तो वह सब जोड़ें जो आप साथ-साथ देखना चाहते हैं।",
        },
        {
          label: 'समूहन', title: 'संबंधित सेंसर समूहित करें',
          body: 'आगे, ग्रुपिंग विकल्प से टेबल के भीतर <strong>वांछित सेंसरों को समूहित करें</strong> — जैसे एक <em>इनलेट</em> समूह और एक <em>आउटलेट</em> समूह। समूहन एक बड़ी टेबल को पठनीय रखता है।',
          voice: "अब वह विशेषता जो इस विजेट को ताक़त देती है — ग्रुपिंग। आप सेंसर चुनकर उन्हें एक ही टेबल के भीतर समूहित कर सकते हैं। यहाँ हम एक इनलेट समूह और एक आउटलेट समूह बनाते हैं, ताकि संबंधित पैरामीटर साथ रहें। एक दर्जन या अधिक सेंसर वाली टेबल पर, ग्रुपिंग ही उसे पठनीय रखती है, एक लंबी अविभाजित सूची के बजाय।",
        },
        {
          label: 'लेआउट', title: 'नाम, ग्रैन्युलैरिटी और टाइम विंडो',
          body: '<strong>Layout</strong> के तहत सेंसर का नाम बदलें, <strong>समय-सीमा और ग्रैन्युलैरिटी</strong> (महीने, सप्ताह, दिन…) सेट करें, और कितनी <strong>टाइम विंडो</strong> दिखानी हैं चुनें — अधिकतम <strong>200</strong> तक।',
          voice: "लेआउट के तहत आप नियंत्रित करते हैं कि टेबल समय के साथ कैसे पढ़ती है। आप किसी भी सेंसर का नाम बदल सकते हैं, ग्रैन्युलैरिटी सेट कर सकते हैं — महीने, सप्ताह, दिन, इत्यादि — और फिर चुनें कि कितनी टाइम विंडो दिखानी हैं। तो दैनिक ग्रैन्युलैरिटी पर आप पिछले तीस दिन दिखा सकते हैं, हर दिन अपना कॉलम। अधिकतम दो सौ टाइम विंडो हैं, जो ज़रूरत पड़ने पर एक टेबल में काफ़ी इतिहास है।",
        },
        {
          label: 'अक्ष व दृश्य', title: 'दो अक्ष, और एक कॉलम दृश्य',
          body: 'इलास्टिक टेबल के <strong>दो अक्ष</strong> हैं — एक सेंसर के लिए, एक समय के साथ उसके मान के लिए। आप सिर्फ़ <strong>अंतिम समय-सीमा</strong> दिखा सकते हैं, या <strong>कॉलम दृश्य</strong> पर स्विच कर सकते हैं जहाँ सेंसर पंक्तियों पर और टाइम विंडो कॉलम पर होती हैं।',
          voice: "अंत में, दृश्य। इलास्टिक टेबल के दो अक्ष हैं — एक हर सेंसर दिखाता है, दूसरा समय के साथ उसका मान। आप सिर्फ़ अंतिम समय-सीमा दिखाना चुन सकते हैं जब आपको बस नवीनतम स्नैपशॉट चाहिए। या आप कॉलम दृश्य पर स्विच कर सकते हैं, जहाँ सेंसर मेट्रिक्स पंक्तियों में और टाइम विंडो कॉलम में चलती हैं। जो भी दिशा आपके डेटा के लिए बेहतर पढ़े उसे चुनें, सेव करें, और टेबल डैशबोर्ड पर है।",
          tip: { type: 'rememberLabel', text: 'सेंसर → समूहित करें → ग्रैन्युलैरिटी व अधिकतम 200 टाइम विंडो सेट करें → पंक्ति या कॉलम दृश्य चुनें।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>இலாஸ்டிக்</em> அட்டவணை.',
      subtitle: 'பல சென்சார்களை ஒரே அட்டவணையில் குழுவாக்கி, அவற்றின் மதிப்புகளைக் காலத்தின் குறுக்கே அமைக்கவும்.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'சென்சார்கள்', title: 'உங்கள் சென்சார்களைப் பட்டியலிடுங்கள்',
          body: 'அட்டவணையில் வேண்டிய <strong>சென்சார்களைத் தேர்ந்து</strong> பட்டியலிடுவதில் தொடங்குங்கள். இலாஸ்டிக் அட்டவணை <strong>பல சென்சார்களை ஒரே நேரத்தில்</strong> வைக்கக் கட்டப்பட்டது.',
          voice: "இலாஸ்டிக் அட்டவணை, நிறைய சென்சார்களை ஒரே ஒழுங்கான அட்டவணையில் வைக்கும் விட்ஜெட். எனவே வேண்டிய சென்சார்களைத் தேர்ந்து பட்டியலிடுவதில் தொடங்குகிறோம். இங்கே உள்ளீடு, வெளியீடு தர அளவுருக்களைத் தேர்ந்துள்ளோம் — இரு பக்கமும் சி ஓ டி, பி ஓ டி. இலாஸ்டிக் அட்டவணை பல சென்சார்களை ஒரே நேரத்தில் வைக்க வடிவமைக்கப்பட்டது, எனவே அருகருகே பார்க்க விரும்புவதையெல்லாம் சேர்க்கவும்.",
        },
        {
          label: 'குழுவாக்கம்', title: 'தொடர்புடைய சென்சார்களைக் குழுவாக்கு',
          body: 'அடுத்து, குழுவாக்க விருப்பத்தால் அட்டவணைக்குள் <strong>வேண்டிய சென்சார்களைக் குழுவாக்குங்கள்</strong> — எடுத்துக்காட்டாக ஒரு <em>உள்ளீடு</em> குழு, ஒரு <em>வெளியீடு</em> குழு. குழுவாக்கம் பெரிய அட்டவணையைப் படிக்கக்கூடியதாக வைக்கிறது.',
          voice: "இப்போது இந்த விட்ஜெட்டுக்கு வலிமை தரும் அம்சம் — குழுவாக்கம். சென்சார்களைத் தேர்ந்து அதே அட்டவணைக்குள் குழுவாக்கலாம். இங்கே ஒரு உள்ளீடு குழுவும் வெளியீடு குழுவும் உருவாக்குகிறோம், தொடர்புடைய அளவுருக்கள் சேர்ந்திருக்க. டஜன் அல்லது அதற்கு மேற்பட்ட சென்சார்கள் உள்ள அட்டவணையில், குழுவாக்கமே அதைப் படிக்கக்கூடியதாக வைக்கிறது, ஒரு நீண்ட பிரிக்கப்படாத பட்டியலுக்குப் பதிலாக.",
        },
        {
          label: 'தளவமைப்பு', title: 'பெயர், நுண்மை & நேர சாளரங்கள்',
          body: '<strong>Layout</strong>-இல் சென்சாரை மறுபெயரிடு, <strong>நேர வரம்பு & நுண்மை</strong> (மாதம், வாரம், நாள்…) அமை, எத்தனை <strong>நேர சாளரங்கள்</strong> காட்ட எனத் தேர்வு செய் — அதிகபட்சம் <strong>200</strong>.',
          voice: "தளவமைப்பில் அட்டவணை காலத்தின் குறுக்கே எப்படிப் படிக்கிறது என்பதைக் கட்டுப்படுத்துகிறீர்கள். எந்த சென்சாரையும் மறுபெயரிடலாம், நுண்மையை அமைக்கலாம் — மாதம், வாரம், நாள் — பின் எத்தனை நேர சாளரங்கள் காட்ட எனத் தேர்வு செய்யலாம். தினசரி நுண்மையில் கடந்த முப்பது நாட்களைக் காட்டலாம், ஒவ்வொரு நாளும் தனி நெடுவரிசை. அதிகபட்சம் இருநூறு நேர சாளரங்கள், தேவைப்படும்போது ஒரே அட்டவணையில் நிறைய வரலாறு.",
        },
        {
          label: 'அச்சுகள் & பார்வைகள்', title: 'இரு அச்சுகள், ஒரு நெடுவரிசைப் பார்வை',
          body: 'இலாஸ்டிக் அட்டவணைக்கு <strong>இரு அச்சுகள்</strong> — ஒன்று சென்சார், மற்றொன்று காலத்தின் குறுக்கே அதன் மதிப்பு. <strong>கடைசி நேர வரம்பை</strong> மட்டும் காட்டலாம், அல்லது சென்சார்கள் வரிசைகளிலும் நேர சாளரங்கள் நெடுவரிசைகளிலும் இருக்கும் <strong>நெடுவரிசைப் பார்வைக்கு</strong> மாறலாம்.',
          voice: "இறுதியாக, பார்வைகள். இலாஸ்டிக் அட்டவணைக்கு இரு அச்சுகள் — ஒன்று ஒவ்வொரு சென்சாரைக் காட்டுகிறது, மற்றொன்று காலத்தின் குறுக்கே அதன் மதிப்பு. சமீபத்திய படத்தை மட்டும் வேண்டும்போது கடைசி நேர வரம்பை மட்டும் காட்டலாம். அல்லது நெடுவரிசைப் பார்வைக்கு மாறலாம், அங்கு சென்சார் அளவீடுகள் வரிசைகளில், நேர சாளரங்கள் நெடுவரிசைகளில். உங்கள் தரவுக்கு எது நன்றாகப் படிக்கிறதோ அதைத் தேர்ந்து, சேமியுங்கள், அட்டவணை டாஷ்போர்டில்.",
          tip: { type: 'rememberLabel', text: 'சென்சார்கள் → குழுவாக்கு → நுண்மை & அதிகபட்சம் 200 நேர சாளரங்கள் → வரிசை அல்லது நெடுவரிசைப் பார்வை.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>इलास्टिक</em> टेबल.',
      subtitle: 'अनेक सेन्सर एका टेबलमध्ये गटबद्ध करा आणि त्यांची मूल्ये काळानुसार मांडा.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'सेन्सर', title: 'तुमचे सेन्सर सूचीबद्ध करा',
          body: 'टेबलमध्ये हवे ते <strong>सेन्सर निवडून</strong> सूचीबद्ध करा. इलास्टिक टेबल <strong>एकाच वेळी अनेक सेन्सर</strong> ठेवण्यासाठी बनवली आहे.',
          voice: "इलास्टिक टेबल हे विजेट आहे जे खूप सारे सेन्सर एका व्यवस्थित टेबलमध्ये ठेवते. म्हणून हवे ते सेन्सर निवडून सुरुवात करतो आणि त्यांना सूचीबद्ध करतो. इथे आम्ही इनलेट आणि आउटलेट क्वालिटी पॅरामीटर निवडले आहेत — दोन्ही बाजूंना सी ओ डी आणि बी ओ डी. इलास्टिक टेबल एकाच वेळी अनेक सेन्सर ठेवण्यासाठी बनवली आहे, म्हणून शेजारी-शेजारी पाहायचे ते सर्व जोडा.",
        },
        {
          label: 'गटबद्धता', title: 'संबंधित सेन्सर गटबद्ध करा',
          body: 'पुढे, ग्रुपिंग पर्यायाने टेबलमध्ये <strong>हवे ते सेन्सर गटबद्ध करा</strong> — उदा. एक <em>इनलेट</em> गट आणि एक <em>आउटलेट</em> गट. गटबद्धता मोठी टेबल वाचनीय ठेवते.',
          voice: "आता या विजेटला ताकद देणारे वैशिष्ट्य — ग्रुपिंग. तुम्ही सेन्सर निवडून त्याच टेबलमध्ये गटबद्ध करू शकता. इथे आम्ही एक इनलेट गट आणि एक आउटलेट गट बनवतो, म्हणजे संबंधित पॅरामीटर एकत्र राहतात. डझनभर किंवा अधिक सेन्सर असलेल्या टेबलवर, गटबद्धताच ती वाचनीय ठेवते, एका लांब अविभाजित यादीऐवजी.",
        },
        {
          label: 'लेआउट', title: 'नाव, ग्रॅन्युलॅरिटी आणि टाइम विंडो',
          body: '<strong>Layout</strong> खाली सेन्सरचे नाव बदला, <strong>कालावधी आणि ग्रॅन्युलॅरिटी</strong> (महिने, आठवडे, दिवस…) सेट करा, आणि किती <strong>टाइम विंडो</strong> दाखवायच्या ते निवडा — कमाल <strong>200</strong> पर्यंत.',
          voice: "लेआउटखाली टेबल काळानुसार कशी वाचते ते तुम्ही नियंत्रित करता. तुम्ही कोणत्याही सेन्सरचे नाव बदलू शकता, ग्रॅन्युलॅरिटी सेट करू शकता — महिने, आठवडे, दिवस — आणि मग किती टाइम विंडो दाखवायच्या ते निवडा. दैनिक ग्रॅन्युलॅरिटीवर तुम्ही मागचे तीस दिवस दाखवू शकता, प्रत्येक दिवस स्वतःचा स्तंभ. कमाल दोनशे टाइम विंडो आहेत, जे गरज पडल्यास एका टेबलमध्ये बराच इतिहास आहे.",
        },
        {
          label: 'अक्ष व दृश्ये', title: 'दोन अक्ष, आणि एक स्तंभ दृश्य',
          body: 'इलास्टिक टेबलला <strong>दोन अक्ष</strong> आहेत — एक सेन्सरसाठी, एक काळानुसार त्याच्या मूल्यासाठी. तुम्ही फक्त <strong>शेवटचा कालावधी</strong> दाखवू शकता, किंवा <strong>स्तंभ दृश्यावर</strong> स्विच करू शकता जिथे सेन्सर ओळींवर आणि टाइम विंडो स्तंभांवर असतात.',
          voice: "शेवटी, दृश्ये. इलास्टिक टेबलला दोन अक्ष आहेत — एक प्रत्येक सेन्सर दाखवतो, दुसरा काळानुसार त्याचे मूल्य. तुम्हाला फक्त नवीनतम स्नॅपशॉट हवा असेल तेव्हा फक्त शेवटचा कालावधी दाखवू शकता. किंवा स्तंभ दृश्यावर स्विच करू शकता, जिथे सेन्सर मेट्रिक्स ओळींमध्ये आणि टाइम विंडो स्तंभांमध्ये चालतात. तुमच्या डेटासाठी जे चांगले वाचते ते निवडा, सेव्ह करा, आणि टेबल डॅशबोर्डवर आहे.",
          tip: { type: 'rememberLabel', text: 'सेन्सर → गटबद्ध करा → ग्रॅन्युलॅरिटी व कमाल 200 टाइम विंडो सेट करा → ओळ किंवा स्तंभ दृश्य निवडा.' },
        },
      ],
    },
  },
};

export default lesson;
