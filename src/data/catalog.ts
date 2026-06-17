import type { Lesson, ModuleDef, RoleId } from './types';
import lesson01 from './lessons/module-01-dashboard/lesson-01-overview';
import lessonRangeNumber from './lessons/module-02-widgets/lesson-01-range-number';
import lessonGauge from './lessons/module-02-widgets/lesson-02-gauge';

export const ROLES: RoleId[] = ['operator', 'supervisor', 'internal'];

/** All lessons with real content, keyed by id. */
export const LESSONS: Record<string, Lesson> = {
  [lesson01.id]: lesson01,
  [lessonRangeNumber.id]: lessonRangeNumber,
  [lessonGauge.id]: lessonGauge,
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
    lessons: [{ id: 'lesson-01-overview' }],
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
      { id: 'lesson-03-map-tickets', comingSoon: true },
    ],
  },
  {
    id: 'module-03-daily-operations',
    number: 3,
    tag: 'M3',
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
      { id: 'lesson-manual-input', comingSoon: true },
    ],
  },
  {
    id: 'module-04-reports-insights',
    number: 4,
    tag: 'M4',
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
    id: 'module-05-internal-tools',
    number: 5,
    tag: 'M5',
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
