import type { Lesson } from '../../types';

/** Module 2 · Configure — The Gauge Widget.   Tag: M2.L2·C  (internal only) */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-02-config`;

const lesson: Lesson = {
  id: 'lesson-02-gauge-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {
    config: `${BASE}/gauge-config.png`,
    agg: `${BASE}/gauge-agg.png`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'config', caption: 'Same as Number', spotlight: { top: '18%', left: '34%', width: '32%', height: '40%' } },
    { mode: 'detail', screenshot: 'agg', caption: 'Aggregation', spotlight: { top: '18%', left: '33%', width: '34%', height: '60%' } },
    { mode: 'detail', screenshot: 'config', caption: 'Thresholds → the arc', spotlight: { top: '28%', left: '66%', width: '33%', height: '22%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Gauge</em> Widget.',
      subtitle: 'Identical to the Number widget — the value just shows as a gauge instead of a number.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Same engine', title: 'Configured just like a Number widget',
          body: 'The Gauge widget is <strong>configured exactly like the Number widget</strong>. You add <strong>sensors</strong>, set the <strong>Widget Theme</strong> (nickname, unit, category) and the same <strong>display check-boxes</strong>. The only difference is the value is drawn as a <strong>gauge</strong> rather than a plain number.',
          voice: "The Gauge widget is the easiest one to learn, because you already know it. It's configured exactly like the Number widget. You add your sensors, set the widget theme — nickname, unit, category — and you get the same three display check-boxes. The one and only difference is visual: instead of showing the value as a plain number, the Gauge draws it on a dial. So everything you learned for the Number widget applies here, one to one.",
        },
        {
          label: 'Aggregation', title: 'Pick the value to show',
          body: 'As with the Number widget, choose the <strong>aggregation</strong> — Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative or Last Active — to decide the single value the needle points to.',
          voice: "Just like the Number widget, you choose an aggregation under widget details — raw, average, minimum, maximum, time weighted sum, cumulative, or last active. This is the single value the gauge's needle will point to. For something like a tank level, last active is a natural fit, since you want the most recent reading.",
        },
        {
          label: 'Thresholds', title: 'Thresholds colour the dial',
          body: 'Set the <strong>Minimum</strong> and <strong>Maximum</strong> to fix the gauge’s scale, then the <strong>Safe</strong>, <strong>Caution</strong> and <strong>Critical</strong> ranges — these paint the coloured arc, so a glance at the needle’s zone tells the story.',
          voice: "Thresholds matter a little extra on a gauge, because they don't just colour a number — they paint the arc of the dial. The minimum and maximum fix the gauge's scale, and the safe, caution and critical ranges become the green, amber and red bands around it. So when an operator glances at the gauge, the zone the needle sits in tells them instantly whether things are fine or need attention. Save, and the gauge is live.",
          tip: { type: 'rememberLabel', text: 'Gauge = Number widget, shown as a dial. Min/Max set the scale; Safe/Caution/Critical paint the arc.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>गेज</em> विजेट।',
      subtitle: 'नंबर विजेट के समान — मान बस संख्या के बजाय एक गेज के रूप में दिखता है।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'वही इंजन', title: 'बिल्कुल नंबर विजेट की तरह कॉन्फ़िगर',
          body: 'गेज विजेट <strong>बिल्कुल नंबर विजेट की तरह कॉन्फ़िगर</strong> होता है। आप <strong>सेंसर</strong> जोड़ते हैं, <strong>Widget Theme</strong> (निकनेम, यूनिट, श्रेणी) और वही <strong>चेक-बॉक्स</strong> सेट करते हैं। एकमात्र अंतर यह है कि मान <strong>गेज</strong> के रूप में दिखता है।',
          voice: "गेज विजेट सीखना सबसे आसान है, क्योंकि आप इसे पहले से जानते हैं। यह बिल्कुल नंबर विजेट की तरह कॉन्फ़िगर होता है। आप अपने सेंसर जोड़ते हैं, विजेट थीम सेट करते हैं — निकनेम, यूनिट, श्रेणी — और वही तीन चेक-बॉक्स मिलते हैं। एकमात्र अंतर दृश्य है: मान को सादी संख्या के रूप में दिखाने के बजाय, गेज इसे एक डायल पर बनाता है। तो नंबर विजेट के लिए जो सीखा, वह यहाँ हूबहू लागू होता है।",
        },
        {
          label: 'एग्रीगेशन', title: 'दिखाने का मान चुनें',
          body: 'नंबर विजेट की तरह, <strong>एग्रीगेशन</strong> चुनें — Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative या Last Active — ताकि सुई जिस एक मान की ओर इशारा करे वह तय हो।',
          voice: "नंबर विजेट की तरह ही, आप विजेट डिटेल्स में एक एग्रीगेशन चुनते हैं — raw, average, minimum, maximum, time weighted sum, cumulative, या last active। यही वह एक मान है जिसकी ओर गेज की सुई इशारा करेगी। टैंक लेवल जैसी किसी चीज़ के लिए, last active स्वाभाविक है, क्योंकि आप सबसे हालिया रीडिंग चाहते हैं।",
        },
        {
          label: 'थ्रेशोल्ड', title: 'थ्रेशोल्ड डायल को रंगते हैं',
          body: 'गेज का स्केल तय करने के लिए <strong>Minimum</strong> और <strong>Maximum</strong> सेट करें, फिर <strong>Safe</strong>, <strong>Caution</strong> और <strong>Critical</strong> रेंज — ये रंगीन चाप बनाते हैं, ताकि सुई के क्षेत्र पर एक नज़र कहानी बता दे।',
          voice: "गेज पर थ्रेशोल्ड थोड़े ज़्यादा मायने रखते हैं, क्योंकि वे सिर्फ़ एक संख्या को नहीं रंगते — वे डायल का चाप रंगते हैं। न्यूनतम और अधिकतम गेज का स्केल तय करते हैं, और safe, caution तथा critical रेंज इसके चारों ओर हरे, अंबर और लाल बैंड बन जाती हैं। तो जब ऑपरेटर गेज पर नज़र डालता है, सुई जिस क्षेत्र में है वह तुरंत बता देता है कि सब ठीक है या ध्यान चाहिए। सेव करें, और गेज लाइव है।",
          tip: { type: 'rememberLabel', text: 'गेज = नंबर विजेट, डायल के रूप में। Min/Max स्केल तय करते हैं; Safe/Caution/Critical चाप रंगते हैं।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>கேஜ்</em> விட்ஜெட்.',
      subtitle: 'எண் விட்ஜெட்டுக்குச் சமம் — மதிப்பு எண்ணுக்குப் பதிலாக ஒரு கேஜாகக் காட்டப்படுகிறது.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'அதே இயந்திரம்', title: 'எண் விட்ஜெட் போலவே அமைவு',
          body: 'கேஜ் விட்ஜெட் <strong>சரியாக எண் விட்ஜெட் போலவே அமைக்கப்படுகிறது</strong>. <strong>சென்சார்கள்</strong> சேர்த்து, <strong>Widget Theme</strong> (புனைப்பெயர், அலகு, வகை), அதே <strong>செக்-பாக்ஸ்</strong>. ஒரே வேறுபாடு — மதிப்பு ஒரு <strong>கேஜாக</strong> வரையப்படுகிறது.',
          voice: "கேஜ் விட்ஜெட் கற்க எளிதானது, ஏனெனில் இதை நீங்கள் ஏற்கனவே அறிவீர்கள். இது சரியாக எண் விட்ஜெட் போலவே அமைக்கப்படுகிறது. சென்சார்களைச் சேர்த்து, விட்ஜெட் தீம் — புனைப்பெயர், அலகு, வகை — அமைத்து, அதே மூன்று செக்-பாக்ஸ் கிடைக்கின்றன. ஒரே ஒரு வேறுபாடு காட்சி: மதிப்பை வெறும் எண்ணாகக் காட்டுவதற்குப் பதிலாக, கேஜ் அதை ஒரு டயலில் வரைகிறது. எனவே எண் விட்ஜெட்டுக்குக் கற்றதெல்லாம் இங்கே ஒன்றுக்கொன்று பொருந்தும்.",
        },
        {
          label: 'திரட்டல்', title: 'காட்ட வேண்டிய மதிப்பு',
          body: 'எண் விட்ஜெட் போல, <strong>திரட்டலைத்</strong> தேர்வு செய்யுங்கள் — Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative அல்லது Last Active — ஊசி சுட்டிக்காட்டும் ஒற்றை மதிப்பைத் தீர்மானிக்க.',
          voice: "எண் விட்ஜெட் போலவே, விட்ஜெட் விவரங்களில் ஒரு திரட்டலைத் தேர்வு செய்கிறீர்கள் — raw, average, minimum, maximum, time weighted sum, cumulative, அல்லது last active. கேஜின் ஊசி சுட்டிக்காட்டும் ஒற்றை மதிப்பு இதுவே. தொட்டி மட்டம் போன்ற ஒன்றுக்கு, last active இயல்பானது, ஏனெனில் சமீபத்திய அளவீட்டை விரும்புகிறீர்கள்.",
        },
        {
          label: 'வரம்புகள்', title: 'வரம்புகள் டயலை வண்ணமிடுகின்றன',
          body: 'கேஜின் அளவீட்டை நிர்ணயிக்க <strong>Minimum</strong>, <strong>Maximum</strong> அமைத்து, பின் <strong>Safe</strong>, <strong>Caution</strong>, <strong>Critical</strong> வரம்புகள் — இவை வண்ண வளைவை வரைகின்றன, ஊசியின் மண்டலத்தைப் பார்த்தாலே கதை தெரியும்.',
          voice: "கேஜில் வரம்புகள் கொஞ்சம் கூடுதல் முக்கியம், ஏனெனில் அவை வெறும் எண்ணை வண்ணமிடவில்லை — அவை டயலின் வளைவை வரைகின்றன. குறைந்தபட்சமும் அதிகபட்சமும் கேஜின் அளவீட்டை நிர்ணயிக்கின்றன, safe, caution, critical வரம்புகள் அதைச் சுற்றி பச்சை, அம்பர், சிவப்பு பட்டைகளாகின்றன. எனவே இயக்குநர் கேஜைப் பார்க்கும்போது, ஊசி இருக்கும் மண்டலம் எல்லாம் சரியா கவனம் தேவையா என உடனே சொல்கிறது. சேமியுங்கள், கேஜ் நேரலை.",
          tip: { type: 'rememberLabel', text: 'கேஜ் = எண் விட்ஜெட், டயலாக. Min/Max அளவீட்டை நிர்ணயிக்கும்; Safe/Caution/Critical வளைவை வண்ணமிடும்.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>गेज</em> विजेट.',
      subtitle: 'नंबर विजेटसारखेच — मूल्य फक्त संख्येऐवजी गेज म्हणून दिसते.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'तेच इंजिन', title: 'अगदी नंबर विजेटसारखे कॉन्फिगर',
          body: 'गेज विजेट <strong>अगदी नंबर विजेटसारखे कॉन्फिगर</strong> होते. तुम्ही <strong>सेन्सर</strong> जोडता, <strong>Widget Theme</strong> (निकनेम, युनिट, श्रेणी) आणि तेच <strong>चेक-बॉक्स</strong> सेट करता. एकमेव फरक — मूल्य <strong>गेज</strong> म्हणून काढले जाते.',
          voice: "गेज विजेट शिकायला सर्वात सोपे आहे, कारण तुम्हाला ते आधीच माहीत आहे. ते अगदी नंबर विजेटसारखे कॉन्फिगर होते. तुम्ही तुमचे सेन्सर जोडता, विजेट थीम सेट करता — निकनेम, युनिट, श्रेणी — आणि तेच तीन चेक-बॉक्स मिळतात. एकमेव फरक दृश्यात्मक आहे: मूल्य साध्या संख्येऐवजी, गेज ते एका डायलवर काढते. म्हणून नंबर विजेटसाठी शिकलेले सर्व इथे जसेच्या तसे लागू होते.",
        },
        {
          label: 'अ‍ॅग्रिगेशन', title: 'दाखवायचे मूल्य निवडा',
          body: 'नंबर विजेटप्रमाणे, <strong>अ‍ॅग्रिगेशन</strong> निवडा — Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative किंवा Last Active — सुई कोणत्या एका मूल्याकडे निर्देश करते ते ठरवण्यासाठी.',
          voice: "नंबर विजेटप्रमाणेच, तुम्ही विजेट डिटेल्समध्ये एक अ‍ॅग्रिगेशन निवडता — raw, average, minimum, maximum, time weighted sum, cumulative, किंवा last active. गेजची सुई ज्या एका मूल्याकडे निर्देश करेल ते हेच. टँक लेव्हलसारख्या गोष्टीसाठी, last active नैसर्गिक आहे, कारण तुम्हाला सर्वात अलीकडचे रीडिंग हवे.",
        },
        {
          label: 'थ्रेशोल्ड', title: 'थ्रेशोल्ड डायलला रंग देतात',
          body: 'गेजचा स्केल ठरवण्यासाठी <strong>Minimum</strong> आणि <strong>Maximum</strong> सेट करा, मग <strong>Safe</strong>, <strong>Caution</strong> आणि <strong>Critical</strong> श्रेणी — या रंगीत कमान काढतात, म्हणजे सुईच्या क्षेत्रावर एक नजर कथा सांगते.',
          voice: "गेजवर थ्रेशोल्ड थोडे जास्त महत्त्वाचे आहेत, कारण ते फक्त संख्येला रंग देत नाहीत — ते डायलची कमान रंगवतात. किमान आणि कमाल गेजचा स्केल ठरवतात, आणि safe, caution व critical श्रेणी त्याभोवती हिरव्या, अंबर आणि लाल बँड बनतात. म्हणून ऑपरेटर गेजकडे नजर टाकतो तेव्हा, सुई ज्या क्षेत्रात आहे ते लगेच सांगते की सर्व ठीक आहे की लक्ष हवे. सेव्ह करा, आणि गेज लाइव्ह आहे.",
          tip: { type: 'rememberLabel', text: 'गेज = नंबर विजेट, डायल म्हणून. Min/Max स्केल ठरवतात; Safe/Caution/Critical कमान रंगवतात.' },
        },
      ],
    },
  },
};

export default lesson;
