import type { Lesson, ModuleDef, RoleId } from './types';
import demoHindalco from './lessons/module-demos/demo-hindalco';
import demoHindalcoDataInput from './lessons/module-demos/demo-hindalco-data-input';
import shortOperational from './lessons/module-shorts/short-operational';
import shortNonOperational from './lessons/module-shorts/short-non-operational';
import lessonReading from './lessons/module-01-dashboard/lesson-01-reading';
import lesson01 from './lessons/module-01-dashboard/lesson-01-overview';
import lessonSmartHours from './lessons/module-01-dashboard/lesson-02-smart-hours';
import lessonRangeNumber from './lessons/module-02-widgets/lesson-01-range-number';
import lessonRangeNumberConfig from './lessons/module-02-widgets/lesson-01-range-number-config';
import lessonGaugeConfig from './lessons/module-02-widgets/lesson-02-gauge-config';
import lessonElasticConfig from './lessons/module-02-widgets/lesson-03-elastic-table-config';
import lessonAdvancedConfig from './lessons/module-02-widgets/lesson-04-advanced-table-config';
import lessonTableConfig from './lessons/module-02-widgets/lesson-05-table-config';
import lessonGraphsConfig from './lessons/module-02-widgets/lesson-06-graphs-config';
import lessonScatterConfig from './lessons/module-02-widgets/lesson-07-scatter-config';
import lessonGauge from './lessons/module-02-widgets/lesson-02-gauge';
import lessonElastic from './lessons/module-02-widgets/lesson-03-elastic-table';
import lessonAdvanced from './lessons/module-02-widgets/lesson-04-advanced-table';
import lessonTable from './lessons/module-02-widgets/lesson-05-table';
import lessonGraphs from './lessons/module-02-widgets/lesson-06-graphs';
import lessonScatter from './lessons/module-02-widgets/lesson-07-scatter';
import lessonSankey from './lessons/module-02-widgets/lesson-08-sankey';
import lessonDataInput1 from './lessons/module-03-data-input/lesson-01-entering-readings';
import lessonDataInput1Config from './lessons/module-03-data-input/lesson-01-entering-readings-config';
import lessonDataInput2 from './lessons/module-03-data-input/lesson-02-types-and-bulk';
import lessonDataInput3 from './lessons/module-03-data-input/lesson-03-ocr';
import lessonDataInput3Config from './lessons/module-03-data-input/lesson-03-ocr-config';
import lessonDataInput4 from './lessons/module-03-data-input/lesson-04-bulk-upload';
import lessonInventory1 from './lessons/module-04-inventory/lesson-01-supervisor';
import lessonInventory2 from './lessons/module-04-inventory/lesson-02-operator';
import lessonInsights1 from './lessons/module-05-insights/lesson-01-insights-page';
import lessonInsights1Config from './lessons/module-05-insights/lesson-01-insights-page-config';
import lessonInsights2 from './lessons/module-05-insights/lesson-02-on-the-go';
import lessonViz from './lessons/module-06-visualization/lesson-01-digital-twin';
import lessonTask1 from './lessons/module-07-tasks/lesson-01-task-list';
import lessonTask1Config from './lessons/module-07-tasks/lesson-01-task-list-config';
import lessonTask2 from './lessons/module-07-tasks/lesson-02-doing-a-task';
import lessonTask3 from './lessons/module-07-tasks/lesson-03-workflows';
import lessonComm1 from './lessons/module-08-communications/lesson-01-communications-page';
import lessonComm2 from './lessons/module-08-communications/lesson-02-emails-and-whatsapp';
import lessonEvents from './lessons/module-09-events/lesson-01-events';
import lessonEventsConfig from './lessons/module-09-events/lesson-01-events-config';
import lessonTriggers from './lessons/module-10-triggers/lesson-01-triggers';
import lessonSensorDashboard from './lessons/module-13-sensor-health/lesson-01-dashboard';
import lessonSensorDataBreak from './lessons/module-13-sensor-health/lesson-02-data-break';
import lessonSensorStuck from './lessons/module-13-sensor-health/lesson-03-stuck';
import lessonSensorOutOfRange from './lessons/module-13-sensor-health/lesson-04-out-of-range';
import lessonRemoteGroups from './lessons/module-14-remote-control/lesson-01-group-control';
import lessonRemoteOperate from './lessons/module-14-remote-control/lesson-02-take-control';
import lessonRemoteConfig from './lessons/module-14-remote-control/lesson-03-configure';

export const ROLES: RoleId[] = ['operator', 'supervisor', 'internal'];

/** All lessons with real content, keyed by id. */
export const LESSONS: Record<string, Lesson> = {
  [demoHindalco.id]: demoHindalco,
  [demoHindalcoDataInput.id]: demoHindalcoDataInput,
  [shortOperational.id]: shortOperational,
  [shortNonOperational.id]: shortNonOperational,
  [lessonReading.id]: lessonReading,
  [lesson01.id]: lesson01,
  [lessonSmartHours.id]: lessonSmartHours,
  [lessonRangeNumber.id]: lessonRangeNumber,
  [lessonRangeNumberConfig.id]: lessonRangeNumberConfig,
  [lessonGaugeConfig.id]: lessonGaugeConfig,
  [lessonElasticConfig.id]: lessonElasticConfig,
  [lessonAdvancedConfig.id]: lessonAdvancedConfig,
  [lessonTableConfig.id]: lessonTableConfig,
  [lessonGraphsConfig.id]: lessonGraphsConfig,
  [lessonScatterConfig.id]: lessonScatterConfig,
  [lessonGauge.id]: lessonGauge,
  [lessonElastic.id]: lessonElastic,
  [lessonAdvanced.id]: lessonAdvanced,
  [lessonTable.id]: lessonTable,
  [lessonGraphs.id]: lessonGraphs,
  [lessonScatter.id]: lessonScatter,
  [lessonSankey.id]: lessonSankey,
  [lessonDataInput1.id]: lessonDataInput1,
  [lessonDataInput1Config.id]: lessonDataInput1Config,
  [lessonDataInput2.id]: lessonDataInput2,
  [lessonDataInput3.id]: lessonDataInput3,
  [lessonDataInput3Config.id]: lessonDataInput3Config,
  [lessonDataInput4.id]: lessonDataInput4,
  [lessonInventory1.id]: lessonInventory1,
  [lessonInventory2.id]: lessonInventory2,
  [lessonInsights1.id]: lessonInsights1,
  [lessonInsights1Config.id]: lessonInsights1Config,
  [lessonInsights2.id]: lessonInsights2,
  [lessonViz.id]: lessonViz,
  [lessonTask1.id]: lessonTask1,
  [lessonTask1Config.id]: lessonTask1Config,
  [lessonTask2.id]: lessonTask2,
  [lessonTask3.id]: lessonTask3,
  [lessonComm1.id]: lessonComm1,
  [lessonComm2.id]: lessonComm2,
  [lessonEvents.id]: lessonEvents,
  [lessonEventsConfig.id]: lessonEventsConfig,
  [lessonTriggers.id]: lessonTriggers,
  [lessonSensorDashboard.id]: lessonSensorDashboard,
  [lessonSensorDataBreak.id]: lessonSensorDataBreak,
  [lessonSensorStuck.id]: lessonSensorStuck,
  [lessonSensorOutOfRange.id]: lessonSensorOutOfRange,
  [lessonRemoteGroups.id]: lessonRemoteGroups,
  [lessonRemoteOperate.id]: lessonRemoteOperate,
  [lessonRemoteConfig.id]: lessonRemoteConfig,
};

/**
 * Module catalog. Dashboard Fundamentals and Widget Deep-Dive are shared by all
 * three audiences; the remaining modules are role-specific and fill in as new
 * videos are added.
 *
 * Tagging: every module has a short `tag` (M1, M2, …). A lesson's tag is
 * `<moduleTag>.L<lessonNumber>` and a step's tag is `<lessonTag>.S<n>`. These
 * tags are shown in the UI so any piece of content can be referenced for edits
 * (e.g. "change M2.L1.S3").
 */
export const MODULES: ModuleDef[] = [
  {
    id: 'module-01-dashboard',
    number: 1,
    tag: 'M1',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Dashboard Fundamentals',
      hi: 'डैशबोर्ड की मूल बातें',
      ta: 'டாஷ்போர்டு அடிப்படைகள்',
      mr: 'डॅशबोर्डची मूलतत्त्वे',
    },
    description: {
      en: "The operator's cockpit — learn to read every widget on your dashboard, then master the controls that drive the page.",
      hi: 'ऑपरेटर का कॉकपिट — डैशबोर्ड के हर विजेट को पढ़ना सीखें, फिर पेज चलाने वाले नियंत्रणों में महारत पाएँ।',
      ta: 'இயக்குனரின் பணியிடம் — டாஷ்போர்டின் ஒவ்வொரு விட்ஜெட்டையும் படிக்கக் கற்று, பின் பக்கத்தை இயக்கும் கட்டுப்பாடுகளில் தேர்ச்சி பெறுங்கள்.',
      mr: 'ऑपरेटरचे कॉकपिट — डॅशबोर्डवरील प्रत्येक विजेट वाचायला शिका, मग पान चालवणाऱ्या नियंत्रणांवर प्रभुत्व मिळवा.',
    },
    lessons: [{ id: 'lesson-01-reading' }, { id: 'lesson-01-overview' }, { id: 'lesson-02-smart-hours' }],
  },
  {
    id: 'module-02-widgets',
    number: 2,
    tag: 'M2',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Widget Deep-Dive',
      hi: 'विजेट गहन अध्ययन',
      ta: 'விட்ஜெட் ஆழ்ந்த பார்வை',
      mr: 'विजेट सखोल अभ्यास',
    },
    description: {
      en: 'One widget at a time — what each one shows, how it gets its data, and how to read it.',
      hi: 'एक बार में एक विजेट — हर एक क्या दिखाता है, उसका डेटा कैसे आता है, और उसे कैसे पढ़ें।',
      ta: 'ஒரு நேரத்தில் ஒரு விட்ஜெட் — ஒவ்வொன்றும் எதைக் காட்டுகிறது, தரவு எப்படி வருகிறது, படிப்பது எப்படி.',
      mr: 'एका वेळी एक विजेट — प्रत्येक काय दाखवतो, डेटा कसा येतो, आणि तो कसा वाचायचा.',
    },
    lessons: [
      { id: 'lesson-01-range-number' },
      { id: 'lesson-01-range-number-config', internalOnly: true },
      { id: 'lesson-02-gauge' },
      { id: 'lesson-02-gauge-config', internalOnly: true },
      { id: 'lesson-03-elastic-table' },
      { id: 'lesson-03-elastic-table-config', internalOnly: true },
      { id: 'lesson-04-advanced-table' },
      { id: 'lesson-04-advanced-table-config', internalOnly: true },
      { id: 'lesson-05-table' },
      { id: 'lesson-05-table-config', internalOnly: true },
      { id: 'lesson-06-graphs' },
      { id: 'lesson-06-graphs-config', internalOnly: true },
      { id: 'lesson-07-scatter' },
      { id: 'lesson-07-scatter-config', internalOnly: true },
      { id: 'lesson-08-sankey' },
      { id: 'lesson-09-map-tickets', comingSoon: true },
    ],
  },
  {
    id: 'module-03-data-input',
    number: 3,
    tag: 'M3',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Data Input',
      hi: 'डेटा इनपुट',
      ta: 'டேட்டா இன்புட்',
      mr: 'डेटा इनपुट',
    },
    description: {
      en: 'How operators log readings by hand — sensor types, acceptance and warning ranges, media proof, and bulk entry.',
      hi: 'ऑपरेटर हाथ से रीडिंग कैसे दर्ज करते हैं — सेंसर प्रकार, स्वीकृति और चेतावनी रेंज, मीडिया प्रमाण, और बल्क प्रविष्टि।',
      ta: 'இயக்குனர்கள் கையால் அளவீடுகளை எப்படிப் பதிவு செய்கிறார்கள் — சென்சார் வகைகள், ஏற்பு மற்றும் எச்சரிக்கை வரம்புகள், மீடியா சான்று, மொத்த உள்ளீடு.',
      mr: 'ऑपरेटर हाताने रीडिंग कशी नोंदवतात — सेन्सर प्रकार, स्वीकृती आणि इशारा श्रेणी, मीडिया पुरावा, आणि बल्क प्रविष्टी.',
    },
    lessons: [
      { id: 'lesson-01-entering-readings' },
      { id: 'lesson-01-entering-readings-config', internalOnly: true },
      { id: 'lesson-02-types-and-bulk' },
      { id: 'lesson-03-ocr' },
      { id: 'lesson-03-ocr-config', internalOnly: true },
      { id: 'lesson-04-bulk-upload' },
    ],
  },
  {
    id: 'module-04-inventory',
    number: 4,
    tag: 'M4',
    roles: ['operator', 'supervisor'],
    name: {
      en: 'Inventory Management',
      hi: 'इन्वेंटरी प्रबंधन',
      ta: 'சரக்கு மேலாண்மை',
      mr: 'इन्व्हेंटरी व्यवस्थापन',
    },
    description: {
      en: 'The store room — supervisors track stock and consumption logs; operators add and remove stock, and it all stays in sync.',
      hi: 'स्टोर रूम — सुपरवाइज़र स्टॉक और खपत लॉग ट्रैक करते हैं; ऑपरेटर स्टॉक जोड़ते-हटाते हैं, और सब समकालिक रहता है।',
      ta: 'சேமிப்பு அறை — மேற்பார்வையாளர்கள் இருப்பு மற்றும் நுகர்வுப் பதிவுகளைக் கண்காணிக்கிறார்கள்; இயக்குனர்கள் இருப்பைச் சேர்த்து நீக்குகிறார்கள், அனைத்தும் ஒத்திசைந்திருக்கும்.',
      mr: 'स्टोअर रूम — पर्यवेक्षक स्टॉक आणि वापर लॉग ट्रॅक करतात; ऑपरेटर स्टॉक जोडतात-काढतात, आणि सर्व समकालिक राहते.',
    },
    lessons: [
      { id: 'lesson-01-supervisor' },
      { id: 'lesson-02-operator' },
    ],
  },
  {
    id: 'module-05-insights',
    number: 5,
    tag: 'M5',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Insights',
      hi: 'इनसाइट्स',
      ta: 'இன்சைட்ஸ்',
      mr: 'इनसाइट्स',
    },
    description: {
      en: 'How the platform flags what needs attention — the Insights page, plus instant WhatsApp zero-auth links and the Insights Digest.',
      hi: 'प्लेटफ़ॉर्म कैसे संकेत देता है कि किस पर ध्यान चाहिए — इनसाइट्स पेज, साथ ही तुरंत WhatsApp ज़ीरो-ऑथ लिंक और इनसाइट्स डाइजेस्ट।',
      ta: 'எது கவனம் தேவை என்பதை தளம் எப்படிச் சுட்டிக்காட்டுகிறது — இன்சைட்ஸ் பக்கம், உடனடி வாட்ஸ்ஆப் ஜீரோ-ஆத் இணைப்புகள், இன்சைட்ஸ் டைஜெஸ்ட்.',
      mr: 'कशाकडे लक्ष हवे हे प्लॅटफॉर्म कसे दर्शवते — इनसाइट्स पेज, तसेच तात्काळ WhatsApp झिरो-ऑथ लिंक आणि इनसाइट्स डायजेस्ट.',
    },
    lessons: [
      { id: 'lesson-01-insights-page' },
      { id: 'lesson-01-insights-page-config', internalOnly: true },
      { id: 'lesson-02-on-the-go' },
    ],
  },
  {
    id: 'module-06-visualization',
    number: 6,
    tag: 'M6',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Visualization',
      hi: 'विज़ुअलाइज़ेशन',
      ta: 'விஷுவலைசேஷன்',
      mr: 'व्हिज्युअलायझेशन',
    },
    description: {
      en: 'The digital twin — a live, animated replica of your plant, with historical playback and section-by-section Pages.',
      hi: 'डिजिटल ट्विन — आपके प्लांट की एक लाइव, एनिमेटेड प्रतिकृति, ऐतिहासिक प्लेबैक और सेक्शन-दर-सेक्शन पेज के साथ।',
      ta: 'டிஜிட்டல் ட்வின் — உங்கள் ஆலையின் நேரலை, அசையும் பிரதி, வரலாற்று மறுஇயக்கம் மற்றும் பிரிவு வாரியான பக்கங்களுடன்.',
      mr: 'डिजिटल ट्विन — तुमच्या प्लांटची एक लाइव्ह, अॅनिमेटेड प्रतिकृती, ऐतिहासिक प्लेबॅक आणि विभाग-निहाय पेजेससह.',
    },
    lessons: [{ id: 'lesson-01-digital-twin' }],
  },
  {
    id: 'module-07-tasks',
    number: 7,
    tag: 'M7',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Tasks',
      hi: 'टास्क',
      ta: 'பணிகள்',
      mr: 'टास्क',
    },
    description: {
      en: "The operator's day — recurring and condition-triggered jobs, each backed by a configured workflow that the operator walks from start to done.",
      hi: 'ऑपरेटर का दिन — आवर्ती और शर्त-आधारित काम, हर एक कॉन्फ़िगर किए वर्कफ़्लो से समर्थित जिसे ऑपरेटर शुरू से पूरा तक चलाता है।',
      ta: 'இயக்குநரின் நாள் — மீண்டும் வரும் மற்றும் நிபந்தனை அடிப்படையிலான வேலைகள், ஒவ்வொன்றும் இயக்குநர் தொடக்கம் முதல் முடிவு வரை நகர்த்தும் ஒரு பணிப்பாய்வால் ஆதரிக்கப்படுகிறது.',
      mr: 'ऑपरेटरचा दिवस — आवर्ती आणि अटीवर ट्रिगर होणारी कामे, प्रत्येक एका कॉन्फिगर केलेल्या वर्कफ्लोने आधारलेले जे ऑपरेटर सुरुवातीपासून पूर्णापर्यंत चालवतो.',
    },
    lessons: [
      { id: 'lesson-01-task-list' },
      { id: 'lesson-01-task-list-config', internalOnly: true },
      { id: 'lesson-02-doing-a-task' },
      { id: 'lesson-03-workflows' },
    ],
  },
  {
    id: 'module-08-communications',
    number: 8,
    tag: 'M8',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Communications',
      hi: 'कम्युनिकेशन',
      ta: 'தொடர்பு',
      mr: 'कम्युनिकेशन',
    },
    description: {
      en: 'Every message sent to the client — email, SMS, call, WhatsApp — stored and searchable, with a Report filter and WhatsApp delivery status.',
      hi: 'क्लाइंट को भेजा हर संदेश — ईमेल, SMS, कॉल, WhatsApp — संग्रहीत और खोजने योग्य, एक Report फ़िल्टर और WhatsApp डिलीवरी स्टेटस के साथ।',
      ta: 'வாடிக்கையாளருக்கு அனுப்பப்பட்ட ஒவ்வொரு செய்தியும் — மின்னஞ்சல், SMS, அழைப்பு, WhatsApp — சேமிக்கப்பட்டு தேடக்கூடியது, Report வடிப்பான் மற்றும் WhatsApp டெலிவரி நிலையுடன்.',
      mr: 'क्लायंटला पाठवलेला प्रत्येक संदेश — ईमेल, SMS, कॉल, WhatsApp — साठवलेला आणि शोधण्याजोगा, Report फिल्टर आणि WhatsApp डिलिव्हरी स्टेटससह.',
    },
    lessons: [
      { id: 'lesson-01-communications-page' },
      { id: 'lesson-02-emails-and-whatsapp' },
    ],
  },
  {
    id: 'module-09-events',
    number: 9,
    tag: 'M9',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Events',
      hi: 'इवेंट्स',
      ta: 'நிகழ்வுகள்',
      mr: 'इव्हेंट्स',
    },
    description: {
      en: 'Activities the platform tracks via opening and closing sensor conditions — shown on the dashboard with history logs and the sensor charts behind each occurrence.',
      hi: 'प्लेटफ़ॉर्म जिन गतिविधियों को खुलने और बंद होने की सेंसर शर्तों से ट्रैक करता है — डैशबोर्ड पर हिस्ट्री लॉग और हर घटना के पीछे के सेंसर चार्ट के साथ।',
      ta: 'திறக்கும், மூடும் சென்சார் நிபந்தனைகளால் தளம் கண்காணிக்கும் செயல்பாடுகள் — வரலாற்றுப் பதிவுகள் மற்றும் ஒவ்வொரு நிகழ்வின் பின்னணி சென்சார் வரைபடங்களுடன் டாஷ்போர்டில்.',
      mr: 'उघडण्याच्या आणि बंद होण्याच्या सेन्सर अटींनी प्लॅटफॉर्म ट्रॅक करते ते क्रियाकलाप — हिस्ट्री लॉग आणि प्रत्येक घटनेमागील सेन्सर चार्टसह डॅशबोर्डवर.',
    },
    lessons: [
      { id: 'lesson-01-events' },
      { id: 'lesson-01-events-config', internalOnly: true },
    ],
  },
  {
    id: 'module-10-triggers',
    number: 10,
    tag: 'M10',
    roles: ['internal'],
    name: {
      en: 'Triggers',
      hi: 'ट्रिगर',
      ta: 'ட்ரிகர்கள்',
      mr: 'ट्रिगर',
    },
    description: {
      en: 'The automation engine behind Events, Insights and Tasks — One Time, Recurring and Conditional triggers, with opening/closing conditions and the components they fire.',
      hi: 'इवेंट, इनसाइट और टास्क के पीछे का ऑटोमेशन इंजन — One Time, Recurring और Conditional ट्रिगर, खुलने/बंद होने की शर्तों और वे जो कंपोनेंट फ़ायर करते हैं उनके साथ।',
      ta: 'நிகழ்வுகள், இன்சைட்கள், பணிகளுக்குப் பின்னுள்ள தானியக்க இயந்திரம் — One Time, Recurring, Conditional ட்ரிகர்கள், திறக்கும்/மூடும் நிபந்தனைகள், அவை தூண்டும் கூறுகளுடன்.',
      mr: 'इव्हेंट, इनसाइट आणि टास्कमागचे ऑटोमेशन इंजिन — One Time, Recurring आणि Conditional ट्रिगर, उघडण्याच्या/बंद होण्याच्या अटी आणि ते फायर करणारे कंपोनेंट यांसह.',
    },
    lessons: [{ id: 'lesson-01-triggers' }],
  },
  {
    id: 'module-11-reports-insights',
    number: 11,
    tag: 'M11',
    roles: ['supervisor'],
    name: {
      en: 'Reports & Team Access',
      hi: 'रिपोर्ट और टीम एक्सेस',
      ta: 'அறிக்கைகள் & குழு அணுகல்',
      mr: 'अहवाल आणि टीम प्रवेश',
    },
    description: {
      en: 'Exports, scheduled reports, sharing dashboards with your team, and tracking performance trends.',
      hi: 'निर्यात, अनुसूचित रिपोर्ट, टीम के साथ डैशबोर्ड साझा करना, और प्रदर्शन रुझान।',
      ta: 'ஏற்றுமதிகள், திட்டமிடப்பட்ட அறிக்கைகள், டாஷ்போர்டு பகிர்வு, செயல்திறன் போக்குகள்.',
      mr: 'निर्यात, नियोजित अहवाल, टीमसोबत डॅशबोर्ड शेअरिंग, आणि कामगिरी कल.',
    },
    lessons: [
      { id: 'lesson-reports-exports', comingSoon: true },
      { id: 'lesson-sharing-permissions', comingSoon: true },
    ],
  },
  {
    id: 'module-12-internal-tools',
    number: 12,
    tag: 'M12',
    roles: ['internal'],
    name: {
      en: 'Internal Tools & Onboarding',
      hi: 'आंतरिक उपकरण और ऑनबोर्डिंग',
      ta: 'உள் கருவிகள் & சேர்க்கை',
      mr: 'अंतर्गत साधने आणि ऑनबोर्डिंग',
    },
    description: {
      en: 'Building & configuring client dashboards. Until these lessons ship, open any Data & Widgets lesson and switch to the ⚙ Configure track for step-by-step widget setup (also linked from each widget lesson below); see M10 for triggers & alerts.',
      hi: 'क्लाइंट डैशबोर्ड बनाना और कॉन्फ़िगर करना। जब तक ये पाठ आते हैं, कोई भी डेटा और विजेट पाठ खोलें और चरण-दर-चरण विजेट सेटअप के लिए ⚙ कॉन्फ़िगर ट्रैक पर जाएँ (नीचे हर विजेट पाठ से भी लिंक); ट्रिगर और अलर्ट के लिए M10 देखें।',
      ta: 'வாடிக்கையாளர் டாஷ்போர்டுகளை உருவாக்குதல் & அமைத்தல். இந்தப் பாடங்கள் வரும் வரை, எந்த Data & Widgets பாடத்தையும் திறந்து படிப்படியான விட்ஜெட் அமைப்பிற்கு ⚙ Configure தடத்திற்கு மாறவும் (கீழே ஒவ்வொரு விட்ஜெட் பாடத்திலிருந்தும் இணைக்கப்பட்டுள்ளது); டிரிக்கர்கள் & எச்சரிக்கைகளுக்கு M10 ஐப் பார்க்கவும்.',
      mr: 'क्लायंट डॅशबोर्ड तयार करणे आणि कॉन्फिगर करणे. हे धडे येईपर्यंत, कोणताही Data & Widgets धडा उघडा आणि टप्प्याटप्प्याने विजेट सेटअपसाठी ⚙ Configure ट्रॅकवर जा (खालील प्रत्येक विजेट धड्यातूनही लिंक केलेले); ट्रिगर आणि अलर्टसाठी M10 पाहा.',
    },
    lessons: [
      { id: 'lesson-building-dashboards', comingSoon: true },
      { id: 'lesson-customer-hub', comingSoon: true },
    ],
  },
  {
    id: 'module-13-sensor-health',
    number: 13,
    tag: 'M13',
    roles: ['internal'],
    name: {
      en: 'Sensor Health Dashboard',
      hi: 'सेंसर हेल्थ डैशबोर्ड',
      ta: 'சென்சார் ஹெல்த் டாஷ்போர்டு',
      mr: 'सेन्सर हेल्थ डॅशबोर्ड',
    },
    description: {
      en: 'The monitoring team’s cockpit — read the plant-by-plant fault dashboard, then learn the four faults the system raises automatically: plant-level Data Break, and sensor-level Stuck, Persistent and Fluttering Out-of-Range.',
      hi: 'मॉनिटरिंग टीम का कॉकपिट — प्लांट-दर-प्लांट फ़ॉल्ट डैशबोर्ड पढ़ें, फिर सिस्टम अपने-आप उठाने वाले चार फ़ॉल्ट सीखें: प्लांट-स्तरीय Data Break, और सेंसर-स्तरीय Stuck, Persistent और Fluttering Out-of-Range।',
      ta: 'கண்காணிப்புக் குழுவின் பணியிடம் — ஆலை வாரியான கோளாறு டாஷ்போர்டைப் படியுங்கள், பின் சிஸ்டம் தானாக எழுப்பும் நான்கு கோளாறுகளைக் கற்றுக்கொள்ளுங்கள்: ஆலை-மட்ட Data Break, மற்றும் சென்சார்-மட்ட Stuck, Persistent, Fluttering Out-of-Range.',
      mr: 'मॉनिटरिंग टीमचे कॉकपिट — प्लांट-निहाय फॉल्ट डॅशबोर्ड वाचा, मग सिस्टम आपोआप उठवणारे चार फॉल्ट शिका: प्लांट-पातळीचा Data Break, आणि सेन्सर-पातळीचे Stuck, Persistent आणि Fluttering Out-of-Range.',
    },
    lessons: [
      { id: 'sensor-health-dashboard' },
      { id: 'sensor-health-data-break' },
      { id: 'sensor-health-stuck' },
      { id: 'sensor-health-out-of-range' },
    ],
  },
  {
    id: 'module-14-remote-control',
    number: 14,
    tag: 'M14',
    roles: ['operator', 'supervisor', 'internal'],
    name: {
      en: 'Remote Control',
      hi: 'रिमोट कंट्रोल',
      ta: 'ரிமோட் கண்ட்ரோல்',
      mr: 'रिमोट कंट्रोल',
    },
    description: {
      en: 'Operate plant equipment from the SCADA screen — open Group Control, take a control group into Remote mode, and turn equipment On/Off with live status. Internal users also configure the groups: auto-detect or build from scratch.',
      hi: 'प्लांट के उपकरण SCADA स्क्रीन से चलाएँ — Group Control खोलें, किसी control group को Remote मोड में लें, और लाइव स्थिति के साथ उपकरण On/Off करें। Internal यूज़र ग्रुप भी कॉन्फ़िगर करते हैं: auto-detect या शुरू से बनाएँ।',
      ta: 'ஆலை உபகரணங்களை SCADA திரையிலிருந்து இயக்குங்கள் — Group Control-ஐத் திறந்து, ஒரு control group-ஐ Remote பயன்முறைக்குக் கொண்டுசென்று, நேரலை நிலையுடன் உபகரணங்களை On/Off செய்யுங்கள். Internal பயனர்கள் குழுக்களையும் கட்டமைப்பர்: auto-detect அல்லது புதிதாக உருவாக்கல்.',
      mr: 'प्लांटची उपकरणे SCADA स्क्रीनवरून चालवा — Group Control उघडा, एखादा control group Remote मोडमध्ये घ्या, आणि लाइव्ह स्थितीसह उपकरणे On/Off करा. Internal यूजर ग्रुपही कॉन्फिगर करतात: auto-detect किंवा सुरवातीपासून तयार करा.',
    },
    lessons: [
      { id: 'remote-control-groups' },
      { id: 'remote-control-groups-config', internalOnly: true },
      { id: 'remote-control-operate' },
    ],
  },
  // Hidden holder for generated personalized demos. roles: [] keeps it out of
  // every home list, but the route still resolves so demos open via their link.
  {
    id: 'module-demos',
    number: 99,
    tag: 'DEMO',
    roles: [],
    name: { en: 'Personalized Demos', hi: 'व्यक्तिगत डेमो', ta: 'தனிப்பயன் டெமோக்கள்', mr: 'वैयक्तिक डेमो' },
    description: {
      en: 'Client-specific demos generated from a recording — reachable by link, not listed.',
      hi: 'रिकॉर्डिंग से बनाए गए क्लाइंट-विशिष्ट डेमो — लिंक से पहुँच योग्य, सूचीबद्ध नहीं।',
      ta: 'பதிவிலிருந்து உருவாக்கப்பட்ட வாடிக்கையாளர் டெமோக்கள் — இணைப்பால் அணுகலாம், பட்டியலிடப்படவில்லை.',
      mr: 'रेकॉर्डिंगमधून तयार केलेले क्लायंट-विशिष्ट डेमो — लिंकद्वारे उपलब्ध, सूचीबद्ध नाही.',
    },
    lessons: [{ id: 'demo-hindalco' }, { id: 'demo-hindalco-data-input' }],
  },
  // Hidden holder for the forwardable persona shorts. roles: [] keeps them out
  // of every home list; the /watch/* routes serve them WITHOUT login.
  // NOTE: re-edit both shorts whenever a new module/lesson ships.
  {
    id: 'module-shorts',
    number: 98,
    tag: 'SHORT',
    roles: [],
    name: { en: 'Quick Tours', hi: 'क्विक टूर', ta: 'விரைவுச் சுற்றுகள்', mr: 'क्विक टूर' },
    description: {
      en: 'Two-minute persona reels — forwardable to anyone, no sign-in needed.',
      hi: 'दो मिनट के पर्सोना वीडियो — किसी को भी भेजें, साइन-इन ज़रूरी नहीं।',
      ta: 'இரண்டு நிமிட பர்சோனா சுருள்கள் — யாருக்கும் அனுப்பலாம், உள்நுழைவு தேவையில்லை.',
      mr: 'दोन मिनिटांचे पर्सोना व्हिडिओ — कोणालाही पाठवा, साइन-इन आवश्यक नाही.',
    },
    lessons: [{ id: 'short-operational' }, { id: 'short-non-operational' }],
  },
];

export function modulesForRole(role: RoleId): ModuleDef[] {
  return MODULES.filter((m) => m.roles.includes(role));
}

export function getLesson(id: string): Lesson | undefined {
  return LESSONS[id];
}

// ---- content tags ----
export function lessonTagFor(module: ModuleDef, lessonNumber: number): string {
  return `${module.tag}.L${lessonNumber}`;
}

export function stepTagFor(lessonTag: string, stepIndex: number): string {
  return `${lessonTag}.S${stepIndex + 1}`;
}
