import type { Lesson } from '../../types';

/** Module 2 · Configure — The Table Widget.   Tag: M2.L5·C  (internal only) */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-02-config`;

const lesson: Lesson = {
  id: 'lesson-05-table-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 5,
  estimatedMinutes: 3,
  screenshots: {
    config: `${BASE}/table-config.png`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'config', caption: 'Select sensors', spotlight: { top: '16%', left: '1%', width: '32%', height: '72%' } },
    { mode: 'detail', screenshot: 'config', caption: 'Name the widget', spotlight: { top: '2%', left: '5%', width: '40%', height: '14%' } },
    { mode: 'detail', screenshot: 'config', caption: 'Multiple aggregations', spotlight: { top: '20%', left: '33%', width: '34%', height: '20%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Table</em> Widget.',
      subtitle: 'Show several sensors — and several values per sensor — in one simple table.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Sensors', title: 'Select your sensors',
          body: 'Begin by <strong>selecting the sensors</strong> you want to show. The Table widget simply lists the data of <strong>multiple sensors</strong> together — start by adding them.',
          voice: "The Table widget is the straightforward one: it shows the data of multiple sensors together in a plain table. So we begin the same way as always — by selecting the sensors we want to show. Add as many as you'd like to see listed side by side; here we've added aeration dissolved oxygen and M L S S.",
        },
        {
          label: 'Name', title: 'Edit the widget name',
          body: 'Once your sensors are in, <strong>edit the widget name</strong> so it reads clearly on the dashboard — something like <em>Aeration Snapshot</em>.',
          voice: "Once your sensors are in, give the widget a name. This is the only theme setting the Table needs — just a clear title so anyone glancing at the dashboard knows what the table is showing. We'll call this one Aeration Snapshot.",
        },
        {
          label: 'Aggregations', title: 'Multiple values per sensor',
          body: 'Click any sensor to add <strong>multiple aggregations</strong> to it — each becomes its own row of the table. You can also <strong>rename each aggregate value</strong>, so <em>Average</em> and <em>Maximum</em> of the same sensor read clearly.',
          voice: "Here's the useful part. Click on any sensor and you can add more than one aggregation to it — and each aggregate value becomes its own line in the table. So for aeration D O you might show both the average and the maximum, side by side. And just like the other widgets, you can rename each aggregate value, so the table reads cleanly instead of showing the same sensor name twice. Save, and your table is on the dashboard. Remember — a table can be switched to a graph and back at any time.",
          tip: { type: 'rememberLabel', text: 'Sensors → name → click a sensor to add & rename multiple aggregations. A Table can convert to a Graph and back.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>टेबल</em> विजेट।',
      subtitle: 'कई सेंसर — और प्रति सेंसर कई मान — एक सरल टेबल में दिखाएँ।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'सेंसर', title: 'अपने सेंसर चुनें',
          body: 'उन <strong>सेंसरों को चुनकर</strong> शुरू करें जो आप दिखाना चाहते हैं। टेबल विजेट बस <strong>कई सेंसरों</strong> का डेटा एक साथ सूचीबद्ध करता है।',
          voice: "टेबल विजेट सीधा-सादा है: यह कई सेंसरों का डेटा एक सादी टेबल में एक साथ दिखाता है। तो हम हमेशा की तरह शुरू करते हैं — उन सेंसरों को चुनकर जो हम दिखाना चाहते हैं। जितने चाहें जोड़ें जिन्हें आप साथ-साथ सूचीबद्ध देखना चाहते हैं; यहाँ हमने एयरेशन डिज़ॉल्व्ड ऑक्सीजन और एम एल एस एस जोड़े हैं।",
        },
        {
          label: 'नाम', title: 'विजेट का नाम संपादित करें',
          body: 'सेंसर आ जाने के बाद, <strong>विजेट का नाम संपादित करें</strong> ताकि डैशबोर्ड पर स्पष्ट पढ़े — जैसे <em>Aeration Snapshot</em>।',
          voice: "सेंसर आ जाने के बाद, विजेट को एक नाम दें। यह एकमात्र थीम सेटिंग है जो टेबल को चाहिए — बस एक स्पष्ट शीर्षक ताकि डैशबोर्ड पर नज़र डालने वाला कोई भी जान सके कि टेबल क्या दिखा रही है। हम इसे Aeration Snapshot कहेंगे।",
        },
        {
          label: 'एग्रीगेशन', title: 'प्रति सेंसर कई मान',
          body: 'किसी भी सेंसर पर क्लिक करके उसमें <strong>कई एग्रीगेशन</strong> जोड़ें — हर एक टेबल की अपनी पंक्ति बनता है। आप <strong>हर एग्रीगेट मान का नाम बदल</strong> भी सकते हैं।',
          voice: "यह रहा उपयोगी हिस्सा। किसी भी सेंसर पर क्लिक करें और आप उसमें एक से ज़्यादा एग्रीगेशन जोड़ सकते हैं — और हर एग्रीगेट मान टेबल में अपनी लाइन बनता है। तो एयरेशन डी ओ के लिए आप औसत और अधिकतम दोनों दिखा सकते हैं, साथ-साथ। और बाक़ी विजेट की तरह, आप हर एग्रीगेट मान का नाम बदल सकते हैं, ताकि टेबल साफ़ पढ़े बजाय एक ही सेंसर नाम दो बार दिखाने के। सेव करें, और आपकी टेबल डैशबोर्ड पर है। याद रखें — एक टेबल को कभी भी ग्राफ़ में और वापस बदला जा सकता है।",
          tip: { type: 'rememberLabel', text: 'सेंसर → नाम → सेंसर पर क्लिक करके कई एग्रीगेशन जोड़ें व नाम बदलें। टेबल को ग्राफ़ में और वापस बदला जा सकता है।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>அட்டவணை</em> விட்ஜெட்.',
      subtitle: 'பல சென்சார்களை — சென்சாருக்கு பல மதிப்புகளை — ஒரே எளிய அட்டவணையில் காட்டுங்கள்.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'சென்சார்கள்', title: 'உங்கள் சென்சார்களைத் தேர்வு செய்',
          body: 'காட்ட விரும்பும் <strong>சென்சார்களைத் தேர்ந்து</strong> தொடங்குங்கள். அட்டவணை விட்ஜெட் <strong>பல சென்சார்களின்</strong> தரவை ஒன்றாகப் பட்டியலிடுகிறது.',
          voice: "அட்டவணை விட்ஜெட் நேரடியானது: பல சென்சார்களின் தரவை ஒரே எளிய அட்டவணையில் ஒன்றாகக் காட்டுகிறது. எனவே எப்போதும் போல் தொடங்குகிறோம் — காட்ட விரும்பும் சென்சார்களைத் தேர்ந்து. அருகருகே பட்டியலிட விரும்பும் அளவுக்குச் சேர்க்கவும்; இங்கே ஏரேஷன் கரைந்த ஆக்ஸிஜனும் எம் எல் எஸ் எஸ்-ஐயும் சேர்த்துள்ளோம்.",
        },
        {
          label: 'பெயர்', title: 'விட்ஜெட் பெயரைத் திருத்து',
          body: 'சென்சார்கள் வந்தபின், <strong>விட்ஜெட் பெயரைத் திருத்துங்கள்</strong> — டாஷ்போர்டில் தெளிவாகப் படிக்க, <em>Aeration Snapshot</em> போல.',
          voice: "சென்சார்கள் வந்தபின், விட்ஜெட்டுக்கு ஒரு பெயர் கொடுங்கள். அட்டவணைக்குத் தேவையான ஒரே தீம் அமைப்பு இதுவே — டாஷ்போர்டைப் பார்க்கும் எவரும் அட்டவணை எதைக் காட்டுகிறது என அறிய ஒரு தெளிவான தலைப்பு. இதை Aeration Snapshot என அழைப்போம்.",
        },
        {
          label: 'திரட்டல்கள்', title: 'சென்சாருக்கு பல மதிப்புகள்',
          body: 'எந்த சென்சாரையும் கிளிக் செய்து அதில் <strong>பல திரட்டல்களைச்</strong> சேர் — ஒவ்வொன்றும் அட்டவணையின் தனி வரிசை. ஒவ்வொரு திரட்டல் மதிப்பையும் <strong>மறுபெயரிடலாம்</strong>.',
          voice: "இதோ பயனுள்ள பகுதி. எந்த சென்சாரையும் கிளிக் செய்து அதில் ஒன்றுக்கு மேற்பட்ட திரட்டல்களைச் சேர்க்கலாம் — ஒவ்வொரு திரட்டல் மதிப்பும் அட்டவணையில் தனி வரியாகிறது. ஏரேஷன் டி ஓ-வுக்கு சராசரியும் அதிகபட்சமும் அருகருகே காட்டலாம். மற்ற விட்ஜெட்கள் போலவே, ஒவ்வொரு திரட்டல் மதிப்பையும் மறுபெயரிடலாம், அதே சென்சார் பெயரை இருமுறை காட்டுவதற்குப் பதிலாக அட்டவணை தெளிவாகப் படிக்கும். சேமியுங்கள், அட்டவணை டாஷ்போர்டில். நினைவில் — அட்டவணையை எப்போதும் வரைபடமாக மாற்றி மீண்டும் கொண்டுவரலாம்.",
          tip: { type: 'rememberLabel', text: 'சென்சார்கள் → பெயர் → சென்சாரைக் கிளிக் செய்து பல திரட்டல்கள் சேர்த்து மறுபெயரிடு. அட்டவணை ↔ வரைபடம் மாற்றலாம்.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>टेबल</em> विजेट.',
      subtitle: 'अनेक सेन्सर — आणि प्रति सेन्सर अनेक मूल्ये — एका साध्या टेबलमध्ये दाखवा.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'सेन्सर', title: 'तुमचे सेन्सर निवडा',
          body: 'दाखवायचे <strong>सेन्सर निवडून</strong> सुरुवात करा. टेबल विजेट फक्त <strong>अनेक सेन्सरांचा</strong> डेटा एकत्र सूचीबद्ध करते.',
          voice: "टेबल विजेट सरळ आहे: ते अनेक सेन्सरांचा डेटा एका साध्या टेबलमध्ये एकत्र दाखवते. म्हणून आपण नेहमीप्रमाणे सुरुवात करतो — दाखवायचे सेन्सर निवडून. शेजारी-शेजारी सूचीबद्ध पाहायचे तितके जोडा; इथे आम्ही एरेशन डिझॉल्व्ह्ड ऑक्सिजन आणि एम एल एस एस जोडले आहेत.",
        },
        {
          label: 'नाव', title: 'विजेटचे नाव संपादित करा',
          body: 'सेन्सर आल्यावर, <strong>विजेटचे नाव संपादित करा</strong> म्हणजे डॅशबोर्डवर स्पष्ट वाचेल — जसे <em>Aeration Snapshot</em>.',
          voice: "सेन्सर आल्यावर, विजेटला एक नाव द्या. टेबलला लागणारी हीच एकमेव थीम सेटिंग आहे — फक्त एक स्पष्ट शीर्षक म्हणजे डॅशबोर्डकडे पाहणाऱ्या कोणालाही टेबल काय दाखवते ते कळेल. आपण याला Aeration Snapshot म्हणू.",
        },
        {
          label: 'अ‍ॅग्रिगेशन', title: 'प्रति सेन्सर अनेक मूल्ये',
          body: 'कोणत्याही सेन्सरवर क्लिक करून त्यात <strong>अनेक अ‍ॅग्रिगेशन</strong> जोडा — प्रत्येक टेबलची स्वतःची ओळ बनते. तुम्ही <strong>प्रत्येक अ‍ॅग्रिगेट मूल्याचे नाव बदलू</strong> शकता.',
          voice: "हा उपयुक्त भाग. कोणत्याही सेन्सरवर क्लिक करा आणि तुम्ही त्यात एकापेक्षा जास्त अ‍ॅग्रिगेशन जोडू शकता — आणि प्रत्येक अ‍ॅग्रिगेट मूल्य टेबलमध्ये स्वतःची ओळ बनते. म्हणून एरेशन डी ओ साठी तुम्ही सरासरी आणि कमाल दोन्ही दाखवू शकता, शेजारी-शेजारी. आणि इतर विजेटप्रमाणे, तुम्ही प्रत्येक अ‍ॅग्रिगेट मूल्याचे नाव बदलू शकता, म्हणजे तोच सेन्सर दोनदा दाखवण्याऐवजी टेबल स्वच्छ वाचते. सेव्ह करा, आणि तुमची टेबल डॅशबोर्डवर आहे. लक्षात ठेवा — टेबल कधीही ग्राफमध्ये आणि परत बदलता येते.",
          tip: { type: 'rememberLabel', text: 'सेन्सर → नाव → सेन्सरवर क्लिक करून अनेक अ‍ॅग्रिगेशन जोडा व नाव बदला. टेबल ↔ ग्राफ बदलता येते.' },
        },
      ],
    },
  },
};

export default lesson;
