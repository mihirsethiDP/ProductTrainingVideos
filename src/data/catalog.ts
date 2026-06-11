import type { Lesson, ModuleDef, RoleId } from './types';
import lesson01 from './lessons/module-01-dashboard/lesson-01-overview';

export const ROLES: RoleId[] = ['operator', 'supervisor', 'internal'];

/** All lessons with real content, keyed by id. */
export const LESSONS: Record<string, Lesson> = {
  [lesson01.id]: lesson01,
};

/**
 * Module catalog. The Dashboard Fundamentals module is shared by all three
 * audiences; the other modules are role-specific placeholders that light up
 * as new videos are added.
 */
export const MODULES: ModuleDef[] = [
  {
    id: 'module-01-dashboard',
    number: 1,
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
    lessons: [
      { id: 'lesson-01-overview' },
      { id: 'lesson-02-widgets', comingSoon: true },
    ],
  },
  {
    id: 'module-02-daily-operations',
    number: 2,
    roles: ['operator'],
    name: {
      en: 'Daily Operations',
      hi: 'दैनिक संचालन',
      ta: 'தினசரி செயல்பாடுகள்',
      mr: 'दैनंदिन कामकाज',
    },
    description: {
      en: 'Widget deep-dives, tickets, manual inputs, and the readings you check every shift.',
      hi: 'विजेट की गहराई, टिकट, मैनुअल इनपुट, और हर शिफ्ट में जाँची जाने वाली रीडिंग्स।',
      ta: 'விட்ஜெட் விவரங்கள், டிக்கெட்டுகள், கைமுறை உள்ளீடுகள், ஒவ்வொரு ஷிஃப்டிலும் சரிபார்க்கும் அளவீடுகள்.',
      mr: 'विजेट तपशील, तिकिटे, मॅन्युअल इनपुट, आणि प्रत्येक शिफ्टमध्ये तपासायची वाचने.',
    },
    lessons: [
      { id: 'lesson-widgets-map-tickets', comingSoon: true },
      { id: 'lesson-widgets-gauges', comingSoon: true },
    ],
  },
  {
    id: 'module-03-reports-insights',
    number: 3,
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
    id: 'module-04-internal-tools',
    number: 4,
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
