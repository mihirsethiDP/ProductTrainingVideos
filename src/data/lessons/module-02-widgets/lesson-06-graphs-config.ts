import type { Lesson } from '../../types';

/** Module 2 · Configure — The Graph Widget.   Tag: M2.L6·C  (internal only) */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-02-config`;

const lesson: Lesson = {
  id: 'lesson-06-graphs-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 6,
  estimatedMinutes: 4,
  screenshots: {
    config: `${BASE}/graph-config.png`,
    type: `${BASE}/graph-type.png`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'config', caption: 'Sensors & aggregations', spotlight: { top: '20%', left: '1%', width: '32%', height: '72%' } },
    { mode: 'detail', screenshot: 'type', caption: 'Line or Bar', spotlight: { top: '18%', left: '1%', width: '34%', height: '78%' } },
    { mode: 'detail', screenshot: 'config', caption: 'Colour theme', spotlight: { top: '80%', left: '33%', width: '34%', height: '16%' } },
    { mode: 'detail', screenshot: 'config', caption: 'Per-sensor thresholds', spotlight: { top: '30%', left: '66%', width: '33%', height: '14%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Graph</em> Widget.',
      subtitle: 'Plot sensors over time as lines or bars — with multiple values, thresholds and a colour theme.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'Sensors', title: 'Sensors & multiple values',
          body: 'Add your <strong>sensors</strong>, then click any one to add <strong>multiple aggregate values</strong> — each plots as its own line or set of bars. You can <strong>rename each aggregate value</strong> so the legend reads clearly.',
          voice: "The Graph widget plots sensors over time. Start by adding your sensors — here, inlet and outlet flow. Then, just like the table, you can click into any sensor and add multiple aggregate values, and each one plots as its own series on the graph. And you can rename each aggregate value, so the legend stays clear instead of repeating the sensor's name. That's the data in place — now we shape how it looks.",
        },
        {
          label: 'Line or Bar', title: 'Choose line or bar',
          body: 'Switch the chart between a <strong>Line</strong> graph and a <strong>Bar</strong> graph with one control — lines for trends over time, bars for comparing discrete periods.',
          voice: "First, the chart type. With a single control you switch between a line graph and a bar graph. Lines are best for showing a trend flowing over time — a flow rate through the day. Bars are better when you're comparing distinct periods side by side, like daily totals. Pick whichever tells your story best; you can flip between them anytime.",
        },
        {
          label: 'Colour', title: 'Pick a colour theme',
          body: 'Choose a <strong>colour theme</strong> for the graph so its series are easy to tell apart and match the rest of the dashboard.',
          voice: "Next, the colour theme. You can choose a palette for the graph so its lines or bars are easy to tell apart, and so the widget sits nicely alongside everything else on the dashboard. It's a small touch, but a consistent colour scheme makes a wall of widgets feel like one coherent dashboard rather than a jumble.",
        },
        {
          label: 'Thresholds', title: 'Thresholds per sensor',
          body: 'Configure a <strong>threshold</strong> for each sensor — the Safe, Caution and Critical ranges draw as coloured bands behind the plot. At the widget level, set the <strong>name</strong>. <em>A graph can be switched to a table and back at any time.</em>',
          voice: "Finally, thresholds — and on a graph these become something powerful. For each sensor you set the safe, caution and critical ranges, and they're drawn as coloured bands running behind the plot. So the moment a line crosses into the red band, it's obvious. Set the widget's name at the top level, and you're done. And remember the handy twin of the table: a graph can be switched to a table and back at any time, so the same data can be read either way. Save, and it's on the dashboard.",
          tip: { type: 'rememberLabel', text: 'Sensors (+ multiple aggregations) → line/bar → colour theme → per-sensor thresholds. A Graph ↔ Table any time.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>ग्राफ़</em> विजेट।',
      subtitle: 'सेंसरों को समय के साथ लाइन या बार के रूप में प्लॉट करें — कई मान, थ्रेशोल्ड और रंग थीम के साथ।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'सेंसर', title: 'सेंसर और कई मान',
          body: 'अपने <strong>सेंसर</strong> जोड़ें, फिर किसी पर क्लिक करके <strong>कई एग्रीगेट मान</strong> जोड़ें — हर एक अपनी लाइन या बार के रूप में प्लॉट होता है। आप <strong>हर एग्रीगेट मान का नाम बदल</strong> सकते हैं।',
          voice: "ग्राफ़ विजेट सेंसरों को समय के साथ प्लॉट करता है। अपने सेंसर जोड़कर शुरू करें — यहाँ, इनलेट और आउटलेट फ़्लो। फिर, टेबल की तरह ही, आप किसी भी सेंसर में जाकर कई एग्रीगेट मान जोड़ सकते हैं, और हर एक ग्राफ़ पर अपनी सीरीज़ के रूप में प्लॉट होता है। और आप हर एग्रीगेट मान का नाम बदल सकते हैं, ताकि लेजेंड साफ़ रहे बजाय सेंसर का नाम दोहराने के। यह डेटा तैयार है — अब हम इसका रूप तय करते हैं।",
        },
        {
          label: 'लाइन या बार', title: 'लाइन या बार चुनें',
          body: 'एक नियंत्रण से चार्ट को <strong>लाइन</strong> ग्राफ़ और <strong>बार</strong> ग्राफ़ के बीच बदलें — रुझानों के लिए लाइन, अलग अवधियों की तुलना के लिए बार।',
          voice: "पहले, चार्ट प्रकार। एक नियंत्रण से आप लाइन ग्राफ़ और बार ग्राफ़ के बीच बदलते हैं। समय के साथ बहते रुझान दिखाने के लिए लाइन सबसे अच्छी है — दिन भर की फ़्लो रेट। जब आप अलग-अलग अवधियों की साथ-साथ तुलना कर रहे हों तो बार बेहतर है, जैसे दैनिक कुल। जो भी आपकी कहानी बेहतर बताए चुनें; आप कभी भी इनके बीच पलट सकते हैं।",
        },
        {
          label: 'रंग', title: 'एक रंग थीम चुनें',
          body: 'ग्राफ़ के लिए एक <strong>रंग थीम</strong> चुनें ताकि इसकी सीरीज़ आसानी से अलग पहचानी जाएँ और बाक़ी डैशबोर्ड से मेल खाएँ।',
          voice: "आगे, रंग थीम। आप ग्राफ़ के लिए एक पैलेट चुन सकते हैं ताकि इसकी लाइनें या बार आसानी से अलग पहचानी जाएँ, और विजेट डैशबोर्ड पर बाक़ी सब के साथ अच्छा बैठे। यह एक छोटी बात है, पर एक सुसंगत रंग योजना विजेट की दीवार को एक संगठित डैशबोर्ड जैसा महसूस कराती है, बजाय एक गड़बड़ी के।",
        },
        {
          label: 'थ्रेशोल्ड', title: 'प्रति सेंसर थ्रेशोल्ड',
          body: 'हर सेंसर के लिए <strong>थ्रेशोल्ड</strong> कॉन्फ़िगर करें — Safe, Caution और Critical रेंज प्लॉट के पीछे रंगीन बैंड के रूप में बनती हैं। विजेट स्तर पर <strong>नाम</strong> सेट करें। <em>ग्राफ़ को कभी भी टेबल में और वापस बदला जा सकता है।</em>',
          voice: "अंत में, थ्रेशोल्ड — और ग्राफ़ पर ये कुछ शक्तिशाली बन जाते हैं। हर सेंसर के लिए आप safe, caution और critical रेंज सेट करते हैं, और वे प्लॉट के पीछे चलने वाले रंगीन बैंड के रूप में बनते हैं। तो जिस पल कोई लाइन लाल बैंड में जाती है, वह स्पष्ट है। ऊपरी स्तर पर विजेट का नाम सेट करें, और हो गया। और टेबल के उपयोगी जुड़वाँ को याद रखें: ग्राफ़ को कभी भी टेबल में और वापस बदला जा सकता है, ताकि वही डेटा दोनों तरह पढ़ा जा सके। सेव करें, और यह डैशबोर्ड पर है।",
          tip: { type: 'rememberLabel', text: 'सेंसर (+ कई एग्रीगेशन) → लाइन/बार → रंग थीम → प्रति-सेंसर थ्रेशोल्ड। ग्राफ़ ↔ टेबल कभी भी।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>வரைபட</em> விட்ஜெட்.',
      subtitle: 'சென்சார்களைக் காலத்தின் குறுக்கே கோடுகளாக அல்லது பட்டைகளாக வரையுங்கள் — பல மதிப்புகள், வரம்புகள், வண்ண தீமுடன்.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'சென்சார்கள்', title: 'சென்சார்கள் & பல மதிப்புகள்',
          body: 'உங்கள் <strong>சென்சார்களைச்</strong> சேர்த்து, எதையும் கிளிக் செய்து <strong>பல திரட்டல் மதிப்புகளைச்</strong> சேர் — ஒவ்வொன்றும் தனி கோடாக அல்லது பட்டைகளாக வரையப்படுகிறது. ஒவ்வொரு மதிப்பையும் <strong>மறுபெயரிடலாம்</strong>.',
          voice: "வரைபட விட்ஜெட் சென்சார்களைக் காலத்தின் குறுக்கே வரைகிறது. சென்சார்களைச் சேர்த்து தொடங்குங்கள் — இங்கே, உள்ளீடு, வெளியீடு ஓட்டம். பின், அட்டவணை போலவே, எந்த சென்சாருக்குள்ளும் சென்று பல திரட்டல் மதிப்புகளைச் சேர்க்கலாம், ஒவ்வொன்றும் வரைபடத்தில் தனி தொடராக வரையப்படுகிறது. ஒவ்வொரு திரட்டல் மதிப்பையும் மறுபெயரிடலாம், சென்சாரின் பெயரை மீண்டும் சொல்வதற்குப் பதிலாக லெஜண்ட் தெளிவாக இருக்கும். தரவு தயார் — இப்போது தோற்றத்தை வடிவமைப்போம்.",
        },
        {
          label: 'கோடு அல்லது பட்டை', title: 'கோடு அல்லது பட்டை தேர்வு',
          body: 'ஒரே கட்டுப்பாட்டால் விளக்கப்படத்தை <strong>கோட்டு</strong> வரைபடத்துக்கும் <strong>பட்டை</strong> வரைபடத்துக்கும் இடையே மாற்று — போக்குகளுக்குக் கோடு, தனித்த காலங்களை ஒப்பிட பட்டை.',
          voice: "முதலில், விளக்கப்பட வகை. ஒரே கட்டுப்பாட்டால் கோட்டு வரைபடத்துக்கும் பட்டை வரைபடத்துக்கும் இடையே மாறுகிறீர்கள். காலத்தின் குறுக்கே பாயும் போக்கைக் காட்டக் கோடு சிறந்தது — நாள் முழுவதும் ஓட்ட வீதம். தனித்த காலங்களை அருகருகே ஒப்பிடும்போது பட்டை சிறந்தது, தினசரி மொத்தங்கள் போல. உங்கள் கதையை எது நன்றாகச் சொல்கிறதோ அதைத் தேர்ந்தெடுங்கள்; எப்போதும் மாற்றலாம்.",
        },
        {
          label: 'வண்ணம்', title: 'வண்ண தீம் தேர்வு',
          body: 'வரைபடத்துக்கு ஒரு <strong>வண்ண தீம்</strong> தேர்ந்தெடு, அதன் தொடர்களை எளிதாக வேறுபடுத்தவும் டாஷ்போர்டின் மற்றதோடு பொருந்தவும்.',
          voice: "அடுத்து, வண்ண தீம். வரைபடத்துக்கு ஒரு வண்ணத்தட்டைத் தேர்வு செய்யலாம், அதன் கோடுகள் அல்லது பட்டைகளை எளிதாக வேறுபடுத்தலாம், விட்ஜெட் டாஷ்போர்டில் மற்ற அனைத்தோடும் நன்றாக அமரும். இது ஒரு சிறிய தொடுதல், ஆனால் ஒரு சீரான வண்ணத் திட்டம் விட்ஜெட்களின் சுவரை ஒரு ஒருங்கிணைந்த டாஷ்போர்டாக உணரச் செய்கிறது.",
        },
        {
          label: 'வரம்புகள்', title: 'சென்சார் வாரியான வரம்புகள்',
          body: 'ஒவ்வொரு சென்சாருக்கும் <strong>வரம்பை</strong> அமை — Safe, Caution, Critical வரம்புகள் வரைபடத்தின் பின்னால் வண்ணப் பட்டைகளாக வரையப்படுகின்றன. விட்ஜெட் மட்டத்தில் <strong>பெயரை</strong> அமை. <em>வரைபடத்தை எப்போதும் அட்டவணையாக மாற்றலாம்.</em>',
          voice: "இறுதியாக, வரம்புகள் — வரைபடத்தில் இவை சக்திவாய்ந்ததாகின்றன. ஒவ்வொரு சென்சாருக்கும் safe, caution, critical வரம்புகளை அமைக்கிறீர்கள், அவை வரைபடத்தின் பின்னால் ஓடும் வண்ணப் பட்டைகளாக வரையப்படுகின்றன. ஒரு கோடு சிவப்புப் பட்டைக்குள் கடக்கும் கணமே, அது தெளிவாகத் தெரியும். மேல் மட்டத்தில் விட்ஜெட்டின் பெயரை அமையுங்கள், முடிந்தது. அட்டவணையின் பயனுள்ள இரட்டையை நினைவில் — வரைபடத்தை எப்போதும் அட்டவணையாக மாற்றி மீண்டும் கொண்டுவரலாம், அதே தரவை இருவழியிலும் படிக்கலாம். சேமியுங்கள், டாஷ்போர்டில்.",
          tip: { type: 'rememberLabel', text: 'சென்சார்கள் (+ பல திரட்டல்) → கோடு/பட்டை → வண்ண தீம் → சென்சார் வாரியான வரம்புகள். வரைபடம் ↔ அட்டவணை எப்போதும்.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>ग्राफ</em> विजेट.',
      subtitle: 'सेन्सर काळानुसार रेषा किंवा बार म्हणून प्लॉट करा — अनेक मूल्ये, थ्रेशोल्ड आणि रंग थीमसह.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'सेन्सर', title: 'सेन्सर आणि अनेक मूल्ये',
          body: 'तुमचे <strong>सेन्सर</strong> जोडा, मग कोणत्याही एकावर क्लिक करून <strong>अनेक अ‍ॅग्रिगेट मूल्ये</strong> जोडा — प्रत्येक स्वतःची रेषा किंवा बार म्हणून प्लॉट होते. तुम्ही <strong>प्रत्येक मूल्याचे नाव बदलू</strong> शकता.',
          voice: "ग्राफ विजेट सेन्सर काळानुसार प्लॉट करते. तुमचे सेन्सर जोडून सुरुवात करा — इथे, इनलेट आणि आउटलेट फ्लो. मग, टेबलप्रमाणेच, तुम्ही कोणत्याही सेन्सरमध्ये जाऊन अनेक अ‍ॅग्रिगेट मूल्ये जोडू शकता, आणि प्रत्येक ग्राफवर स्वतःची सीरीज म्हणून प्लॉट होते. आणि तुम्ही प्रत्येक अ‍ॅग्रिगेट मूल्याचे नाव बदलू शकता, म्हणजे सेन्सरचे नाव पुन्हा सांगण्याऐवजी लेजेंड स्पष्ट राहते. डेटा तयार आहे — आता आपण त्याचे रूप घडवू.",
        },
        {
          label: 'रेषा किंवा बार', title: 'रेषा किंवा बार निवडा',
          body: 'एका नियंत्रणाने चार्ट <strong>रेषा</strong> ग्राफ आणि <strong>बार</strong> ग्राफ दरम्यान बदला — कलांसाठी रेषा, वेगळे कालावधी तुलना करण्यासाठी बार.',
          voice: "प्रथम, चार्ट प्रकार. एका नियंत्रणाने तुम्ही रेषा ग्राफ आणि बार ग्राफ दरम्यान बदलता. काळानुसार वाहणारा कल दाखवायला रेषा सर्वोत्तम — दिवसभराचा फ्लो रेट. वेगळे कालावधी शेजारी-शेजारी तुलना करताना बार चांगले, जसे दैनिक एकूण. तुमची कथा जे चांगले सांगते ते निवडा; तुम्ही कधीही यांदरम्यान बदलू शकता.",
        },
        {
          label: 'रंग', title: 'एक रंग थीम निवडा',
          body: 'ग्राफसाठी एक <strong>रंग थीम</strong> निवडा म्हणजे त्याच्या सीरीज सहज वेगळ्या ओळखता येतील आणि उर्वरित डॅशबोर्डशी जुळतील.',
          voice: "पुढे, रंग थीम. तुम्ही ग्राफसाठी एक पॅलेट निवडू शकता म्हणजे त्याच्या रेषा किंवा बार सहज वेगळे ओळखता येतील, आणि विजेट डॅशबोर्डवर इतर सर्वांसोबत छान बसेल. ही एक छोटी गोष्ट आहे, पण एक सुसंगत रंगयोजना विजेटच्या भिंतीला एका सुसंगत डॅशबोर्डसारखे वाटायला लावते, गोंधळाऐवजी.",
        },
        {
          label: 'थ्रेशोल्ड', title: 'प्रति सेन्सर थ्रेशोल्ड',
          body: 'प्रत्येक सेन्सरसाठी <strong>थ्रेशोल्ड</strong> कॉन्फिगर करा — Safe, Caution आणि Critical श्रेणी प्लॉटमागे रंगीत बँड म्हणून काढल्या जातात. विजेट स्तरावर <strong>नाव</strong> सेट करा. <em>ग्राफ कधीही टेबलमध्ये आणि परत बदलता येतो.</em>',
          voice: "शेवटी, थ्रेशोल्ड — आणि ग्राफवर हे काहीतरी शक्तिशाली बनतात. प्रत्येक सेन्सरसाठी तुम्ही safe, caution आणि critical श्रेणी सेट करता, आणि त्या प्लॉटमागे चालणाऱ्या रंगीत बँड म्हणून काढल्या जातात. म्हणून ज्या क्षणी एखादी रेषा लाल बँडमध्ये जाते, ते स्पष्ट होते. वरच्या स्तरावर विजेटचे नाव सेट करा, आणि झाले. आणि टेबलच्या उपयुक्त जुळ्याला लक्षात ठेवा: ग्राफ कधीही टेबलमध्ये आणि परत बदलता येतो, म्हणजे तोच डेटा दोन्ही प्रकारे वाचता येतो. सेव्ह करा, आणि ते डॅशबोर्डवर आहे.",
          tip: { type: 'rememberLabel', text: 'सेन्सर (+ अनेक अ‍ॅग्रिगेशन) → रेषा/बार → रंग थीम → प्रति-सेन्सर थ्रेशोल्ड. ग्राफ ↔ टेबल कधीही.' },
        },
      ],
    },
  },
};

export default lesson;
