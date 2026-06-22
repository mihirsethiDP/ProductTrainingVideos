import type { Lesson, ModuleDef, RoleId } from './types';
import lesson01 from './lessons/module-01-dashboard/lesson-01-overview';
import lessonSmartHours from './lessons/module-01-dashboard/lesson-02-smart-hours';
import lessonRangeNumber from './lessons/module-02-widgets/lesson-01-range-number';
import lessonGauge from './lessons/module-02-widgets/lesson-02-gauge';
import lessonElastic from './lessons/module-02-widgets/lesson-03-elastic-table';
import lessonAdvanced from './lessons/module-02-widgets/lesson-04-advanced-table';
import lessonTable from './lessons/module-02-widgets/lesson-05-table';
import lessonGraphs from './lessons/module-02-widgets/lesson-06-graphs';
import lessonScatter from './lessons/module-02-widgets/lesson-07-scatter';
import lessonSankey from './lessons/module-02-widgets/lesson-08-sankey';
import lessonDataInput1 from './lessons/module-03-data-input/lesson-01-entering-readings';
import lessonDataInput2 from './lessons/module-03-data-input/lesson-02-types-and-bulk';
import lessonDataInput3 from './lessons/module-03-data-input/lesson-03-ocr';
import lessonDataInput4 from './lessons/module-03-data-input/lesson-04-bulk-upload';
import lessonInventory1 from './lessons/module-04-inventory/lesson-01-supervisor';
import lessonInventory2 from './lessons/module-04-inventory/lesson-02-operator';
import lessonInsights1 from './lessons/module-05-insights/lesson-01-insights-page';
import lessonInsights2 from './lessons/module-05-insights/lesson-02-on-the-go';

export const ROLES: RoleId[] = ['operator', 'supervisor', 'internal'];

/** All lessons with real content, keyed by id. */
export const LESSONS: Record<string, Lesson> = {
  [lesson01.id]: lesson01,
  [lessonSmartHours.id]: lessonSmartHours,
  [lessonRangeNumber.id]: lessonRangeNumber,
  [lessonGauge.id]: lessonGauge,
  [lessonElastic.id]: lessonElastic,
  [lessonAdvanced.id]: lessonAdvanced,
  [lessonTable.id]: lessonTable,
  [lessonGraphs.id]: lessonGraphs,
  [lessonScatter.id]: lessonScatter,
  [lessonSankey.id]: lessonSankey,
  [lessonDataInput1.id]: lessonDataInput1,
  [lessonDataInput2.id]: lessonDataInput2,
  [lessonDataInput3.id]: lessonDataInput3,
  [lessonDataInput4.id]: lessonDataInput4,
  [lessonInventory1.id]: lessonInventory1,
  [lessonInventory2.id]: lessonInventory2,
  [lessonInsights1.id]: lessonInsights1,
  [lessonInsights2.id]: lessonInsights2,
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
      en: "The operator's cockpit — every control at the top of your dashboard, from page selection to sharing.",
      hi: 'ऑपरेटर का कॉकपिट — पेज चयन से साझाकरण तक, डैशबोर्ड के ऊपर का हर नियंत्रण।',
      ta: 'இயக்குனரின் பணியிடம் — பக்கத் தேர்விலிருந்து பகிர்வு வரை, டாஷ்போர்டின் ஒவ்வொரு கட்டுப்பாடும்.',
      mr: 'ऑपरेटरचे कॉकपिट — पृष्ठ निवडीपासून शेअरिंगपर्यंत, डॅशबोर्डवरील प्रत्येक नियंत्रण.',
    },
    lessons: [{ id: 'lesson-01-overview' }, { id: 'lesson-02-smart-hours' }],
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
      { id: 'lesson-02-gauge' },
      { id: 'lesson-03-elastic-table' },
      { id: 'lesson-04-advanced-table' },
      { id: 'lesson-05-table' },
      { id: 'lesson-06-graphs' },
      { id: 'lesson-07-scatter' },
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
      { id: 'lesson-02-types-and-bulk' },
      { id: 'lesson-03-ocr' },
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
      { id: 'lesson-02-on-the-go' },
    ],
  },
  {
    id: 'module-06-daily-operations',
    number: 6,
    tag: 'M6',
    roles: ['operator'],
    name: {
      en: 'Daily Operations',
      hi: 'दैनिक संचालन',
      ta: 'தினசரி செயல்பாடுகள்',
      mr: 'दैनंदिन कामकाज',
    },
    description: {
      en: 'Tickets, manual inputs, and the readings you check every shift.',
      hi: 'टिकट, मैनुअल इनपुट, और हर शिफ्ट में जाँची जाने वाली रीडिंग्स।',
      ta: 'டிக்கெட்டுகள், கைமுறை உள்ளீடுகள், ஒவ்வொரு ஷிஃப்டிலும் சரிபார்க்கும் அளவீடுகள்.',
      mr: 'तिकिटे, मॅन्युअल इनपुट, आणि प्रत्येक शिफ्टमध्ये तपासायची वाचने.',
    },
    lessons: [
      { id: 'lesson-tickets', comingSoon: true },
      { id: 'lesson-shift-log', comingSoon: true },
    ],
  },
  {
    id: 'module-07-reports-insights',
    number: 7,
    tag: 'M7',
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
    id: 'module-08-internal-tools',
    number: 8,
    tag: 'M8',
    roles: ['internal'],
    name: {
      en: 'Internal Tools & Onboarding',
      hi: 'आंतरिक उपकरण और ऑनबोर्डिंग',
      ta: 'உள் கருவிகள் & சேர்க்கை',
      mr: 'अंतर्गत साधने आणि ऑनबोर्डिंग',
    },
    description: {
      en: 'Building dashboards for clients, widget configuration, the Customer Hub, and supporting users in the field.',
      hi: 'क्लाइंट के लिए डैशबोर्ड बनाना, विजेट कॉन्फ़िगरेशन, कस्टमर हब, और फील्ड में सहायता।',
      ta: 'வாடிக்கையாளர்களுக்கான டாஷ்போர்டுகள், விட்ஜெட் அமைப்பு, வாடிக்கையாளர் மையம், கள ஆதரவு.',
      mr: 'क्लायंटसाठी डॅशबोर्ड तयार करणे, विजेट कॉन्फिगरेशन, कस्टमर हब, आणि फील्ड सपोर्ट.',
    },
    lessons: [
      { id: 'lesson-building-dashboards', comingSoon: true },
      { id: 'lesson-customer-hub', comingSoon: true },
    ],
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
