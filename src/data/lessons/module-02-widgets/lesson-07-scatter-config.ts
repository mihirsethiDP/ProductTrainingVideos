import type { ConfigData, Lesson } from '../../types';

/** Module 2 · Configure — The Scatter Graph.   Tag: M2.L7·C  (internal only) */

const AGG_MENU = ['Raw', 'Average', 'Minimum', 'Maximum', 'Time Weighted Sum', 'Cumulative', 'Last Active'];

const BASE: ConfigData = {
  widget: 'Scatter Graph',
  sensors: [{ name: 'Pressure  (Y-axis)', sub: 'Average', active: true }, { name: 'Flow  (X-axis)', sub: 'Average' }],
  nickname: 'Flow vs Pressure',
  extras: [
    { label: 'X-axis sensor', value: 'Flow' },
    { label: 'Y-axis sensor', value: 'Pressure' },
    { label: 'Description', value: 'Relationship between flow and pressure' },
  ],
  aggregation: 'Average',
};
const cfg = (over: Partial<ConfigData>): { config: ConfigData } => ({ config: { ...BASE, ...over } });

const lesson: Lesson = {
  id: 'lesson-07-scatter-config',
  moduleId: 'module-02-widgets',
  lessonNumber: 7,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'widgetConfig', caption: 'X & Y sensors', widgetState: cfg({ highlight: 'extras' }), cursor: [{ at: 0.4, x: 70, y: 50 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Name & description', widgetState: cfg({ highlight: 'theme' }), cursor: [{ at: 0.4, x: 65, y: 35 }] },
    { mode: 'widget', widget: 'widgetConfig', caption: 'Aggregation', widgetState: cfg({ highlight: 'aggregation', aggMenu: AGG_MENU }), cursor: [{ at: 0.4, x: 70, y: 65 }] },
  ],
  content: {
    en: {
      title: 'Configure:<br>The <em>Scatter</em> Graph.',
      subtitle: 'Put one sensor on each axis to reveal the relationship between two readings.',
      chapter: 'Build Track · Dashboard Widgets',
      steps: [
        {
          label: 'X & Y sensors', title: 'A sensor on each axis',
          body: 'The Scatter Graph plots <strong>sensor values on both the X and Y axes</strong>, revealing the <strong>relationship between two sensors</strong> — for example a <em>flow</em> sensor against a <em>pressure</em> sensor. Add a sensor to each axis.',
          voice: "The Scatter Graph answers a different kind of question: not how does this change over time, but how do two readings relate to each other. You put a sensor value on the X axis and another on the Y axis, and the plot reveals the relationship between them. A classic example is flow against pressure — plot one on each axis and the shape of the cloud tells you how they move together. So we add a sensor to each axis.",
        },
        {
          label: 'Name & description', title: 'Name and describe it',
          body: 'Edit the <strong>widget name</strong> and add a <strong>widget description</strong>, then name the <strong>Y-axis sensor</strong>. A clear name and description matter here, because a scatter plot is less self-explanatory than a number or a line.',
          voice: "Next, give it a clear name and a widget description. This matters a little more on a scatter graph than elsewhere, because a cloud of points is less obvious at a glance than a single number or a trend line. A short description — like relationship between flow and pressure — tells the reader exactly what they're looking at. You can also rename the Y-axis sensor so the axis label reads cleanly.",
        },
        {
          label: 'Aggregation', title: 'Aggregate value per sensor',
          body: 'Add an <strong>aggregate value</strong> to the sensor — <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> or <strong>Last Active</strong> — to set how each axis’s value is calculated before it’s plotted.',
          voice: "Finally, set the aggregation for the sensor — the same family you've seen throughout: raw, average, minimum, maximum, time weighted sum, cumulative, or last active. This decides how each axis's value is calculated before it's plotted as a point. Raw is common on a scatter when you want every individual reading; an average smooths the cloud. Save, and the relationship is live on the dashboard.",
          tip: { type: 'rememberLabel', text: 'Scatter = X sensor vs Y sensor. Name + describe it, set the aggregation per sensor.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br><em>स्कैटर</em> ग्राफ़।',
      subtitle: 'हर अक्ष पर एक सेंसर रखें ताकि दो रीडिंग के बीच का संबंध सामने आए।',
      chapter: 'बिल्ड ट्रैक · डैशबोर्ड विजेट',
      steps: [
        {
          label: 'X व Y सेंसर', title: 'हर अक्ष पर एक सेंसर',
          body: 'स्कैटर ग्राफ़ <strong>X और Y दोनों अक्षों पर सेंसर मान</strong> प्लॉट करता है, जो <strong>दो सेंसरों के बीच संबंध</strong> दिखाता है — जैसे एक <em>फ़्लो</em> सेंसर बनाम एक <em>प्रेशर</em> सेंसर। हर अक्ष पर एक सेंसर जोड़ें।',
          voice: "स्कैटर ग्राफ़ एक अलग तरह के सवाल का जवाब देता है: यह समय के साथ कैसे बदलता है नहीं, बल्कि दो रीडिंग एक-दूसरे से कैसे संबंधित हैं। आप X अक्ष पर एक सेंसर मान और Y अक्ष पर दूसरा रखते हैं, और प्लॉट उनके बीच के संबंध को दिखाता है। एक क्लासिक उदाहरण है फ़्लो बनाम प्रेशर — हर अक्ष पर एक प्लॉट करें और बिंदुओं के बादल का आकार बताता है कि वे साथ कैसे चलते हैं। तो हम हर अक्ष पर एक सेंसर जोड़ते हैं।",
        },
        {
          label: 'नाम व विवरण', title: 'नाम और विवरण दें',
          body: '<strong>विजेट नाम</strong> संपादित करें और एक <strong>विजेट विवरण</strong> जोड़ें, फिर <strong>Y-अक्ष सेंसर</strong> का नाम दें। यहाँ स्पष्ट नाम और विवरण मायने रखते हैं, क्योंकि स्कैटर प्लॉट एक संख्या या लाइन से कम स्वतःस्पष्ट है।',
          voice: "आगे, इसे एक स्पष्ट नाम और एक विजेट विवरण दें। यह स्कैटर ग्राफ़ पर कहीं और से थोड़ा ज़्यादा मायने रखता है, क्योंकि बिंदुओं का बादल एक नज़र में एक संख्या या रुझान रेखा जितना स्पष्ट नहीं होता। एक छोटा विवरण — जैसे फ़्लो और प्रेशर के बीच संबंध — पाठक को ठीक-ठीक बताता है कि वे क्या देख रहे हैं। आप Y-अक्ष सेंसर का नाम भी बदल सकते हैं ताकि अक्ष लेबल साफ़ पढ़े।",
        },
        {
          label: 'एग्रीगेशन', title: 'प्रति सेंसर एग्रीगेट मान',
          body: 'सेंसर में एक <strong>एग्रीगेट मान</strong> जोड़ें — <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> या <strong>Last Active</strong> — ताकि प्लॉट होने से पहले हर अक्ष का मान कैसे गणना हो वह तय हो।',
          voice: "अंत में, सेंसर के लिए एग्रीगेशन सेट करें — वही परिवार जो आपने हर जगह देखा: raw, average, minimum, maximum, time weighted sum, cumulative, या last active। यह तय करता है कि एक बिंदु के रूप में प्लॉट होने से पहले हर अक्ष का मान कैसे गणना होता है। जब आप हर व्यक्तिगत रीडिंग चाहते हैं तो स्कैटर पर raw आम है; औसत बादल को चिकना करता है। सेव करें, और संबंध डैशबोर्ड पर लाइव है।",
          tip: { type: 'rememberLabel', text: 'स्कैटर = X सेंसर बनाम Y सेंसर। नाम + विवरण दें, प्रति सेंसर एग्रीगेशन सेट करें।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br><em>ஸ்கேட்டர்</em> வரைபடம்.',
      subtitle: 'ஒவ்வொரு அச்சிலும் ஒரு சென்சாரை வைத்து இரு அளவீடுகளுக்கிடையேயான தொடர்பைக் காட்டுங்கள்.',
      chapter: 'கட்டுமான தடம் · டாஷ்போர்டு விட்ஜெட்கள்',
      steps: [
        {
          label: 'X & Y சென்சார்கள்', title: 'ஒவ்வொரு அச்சிலும் ஒரு சென்சார்',
          body: 'ஸ்கேட்டர் வரைபடம் <strong>X, Y இரு அச்சுகளிலும் சென்சார் மதிப்புகளை</strong> வரைந்து, <strong>இரு சென்சார்களுக்கிடையேயான தொடர்பைக்</strong> காட்டுகிறது — எடுத்துக்காட்டாக ஒரு <em>ஓட்ட</em> சென்சார் எதிராக ஒரு <em>அழுத்த</em> சென்சார். ஒவ்வொரு அச்சிலும் ஒரு சென்சார் சேர்.',
          voice: "ஸ்கேட்டர் வரைபடம் வேறு வகை கேள்விக்குப் பதிலளிக்கிறது: இது காலத்தின் குறுக்கே எப்படி மாறுகிறது அல்ல, மாறாக இரு அளவீடுகள் ஒன்றோடொன்று எப்படித் தொடர்புடையவை. X அச்சில் ஒரு சென்சார் மதிப்பையும் Y அச்சில் மற்றொன்றையும் வைக்கிறீர்கள், வரைபடம் அவற்றுக்கிடையேயான தொடர்பைக் காட்டுகிறது. ஒரு உன்னதமான எடுத்துக்காட்டு ஓட்டம் எதிராக அழுத்தம் — ஒவ்வொரு அச்சிலும் ஒன்றை வரையுங்கள், புள்ளிகளின் மேகத்தின் வடிவம் அவை எப்படி ஒன்றாக நகர்கின்றன என்று சொல்கிறது. எனவே ஒவ்வொரு அச்சிலும் ஒரு சென்சார் சேர்க்கிறோம்.",
        },
        {
          label: 'பெயர் & விளக்கம்', title: 'பெயரிட்டு விவரி',
          body: '<strong>விட்ஜெட் பெயரைத்</strong> திருத்தி ஒரு <strong>விட்ஜெட் விளக்கத்தைச்</strong> சேர், பின் <strong>Y-அச்சு சென்சாருக்குப்</strong> பெயரிடு. தெளிவான பெயரும் விளக்கமும் இங்கே முக்கியம், ஏனெனில் ஸ்கேட்டர் ஒரு எண் அல்லது கோட்டைவிட குறைவாகவே தன்னை விளக்குகிறது.',
          voice: "அடுத்து, அதற்கு ஒரு தெளிவான பெயரும் விட்ஜெட் விளக்கமும் கொடுங்கள். இது ஸ்கேட்டர் வரைபடத்தில் மற்ற இடங்களைவிடச் சற்று அதிகம் முக்கியம், ஏனெனில் புள்ளிகளின் மேகம் ஒரே பார்வையில் ஒற்றை எண் அல்லது போக்குக் கோடு போல தெளிவாக இல்லை. ஒரு சிறு விளக்கம் — ஓட்டத்துக்கும் அழுத்தத்துக்கும் இடையேயான தொடர்பு போல — பார்ப்பவருக்கு அவர்கள் என்ன பார்க்கிறார்கள் என்று துல்லியமாகச் சொல்கிறது. Y-அச்சு சென்சாரையும் மறுபெயரிடலாம், அச்சு லேபிள் தெளிவாகப் படிக்கும்.",
        },
        {
          label: 'திரட்டல்', title: 'சென்சாருக்கு திரட்டல் மதிப்பு',
          body: 'சென்சாருக்கு ஒரு <strong>திரட்டல் மதிப்பைச்</strong> சேர் — <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> அல்லது <strong>Last Active</strong> — வரையப்படும் முன் ஒவ்வொரு அச்சின் மதிப்பு எப்படிக் கணக்கிடப்படுகிறது என அமைக்க.',
          voice: "இறுதியாக, சென்சாருக்கு திரட்டலை அமையுங்கள் — எங்கும் கண்ட அதே குடும்பம்: raw, average, minimum, maximum, time weighted sum, cumulative, அல்லது last active. ஒரு புள்ளியாக வரையப்படும் முன் ஒவ்வொரு அச்சின் மதிப்பு எப்படிக் கணக்கிடப்படுகிறது என்பதை இது தீர்மானிக்கிறது. ஒவ்வொரு தனி அளவீட்டையும் வேண்டும்போது ஸ்கேட்டரில் raw பொதுவானது; சராசரி மேகத்தை மென்மையாக்குகிறது. சேமியுங்கள், தொடர்பு டாஷ்போர்டில் நேரலை.",
          tip: { type: 'rememberLabel', text: 'ஸ்கேட்டர் = X சென்சார் எதிராக Y சென்சார். பெயரிட்டு விவரி, சென்சார் வாரியாக திரட்டல் அமை.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br><em>स्कॅटर</em> ग्राफ.',
      subtitle: 'प्रत्येक अक्षावर एक सेन्सर ठेवा म्हणजे दोन रीडिंगमधील नाते समोर येते.',
      chapter: 'बिल्ड ट्रॅक · डॅशबोर्ड विजेट',
      steps: [
        {
          label: 'X व Y सेन्सर', title: 'प्रत्येक अक्षावर एक सेन्सर',
          body: 'स्कॅटर ग्राफ <strong>X आणि Y दोन्ही अक्षांवर सेन्सर मूल्ये</strong> प्लॉट करतो, जो <strong>दोन सेन्सरांमधील नाते</strong> दाखवतो — उदा. एक <em>फ्लो</em> सेन्सर विरुद्ध एक <em>प्रेशर</em> सेन्सर. प्रत्येक अक्षावर एक सेन्सर जोडा.',
          voice: "स्कॅटर ग्राफ वेगळ्या प्रकारच्या प्रश्नाचे उत्तर देतो: हे काळानुसार कसे बदलते नाही, तर दोन रीडिंग एकमेकांशी कशी संबंधित आहेत. तुम्ही X अक्षावर एक सेन्सर मूल्य आणि Y अक्षावर दुसरे ठेवता, आणि प्लॉट त्यांच्यातील नाते दाखवतो. एक उत्कृष्ट उदाहरण म्हणजे फ्लो विरुद्ध प्रेशर — प्रत्येक अक्षावर एक प्लॉट करा आणि बिंदूंच्या ढगाचा आकार सांगतो की ते एकत्र कसे हलतात. म्हणून आपण प्रत्येक अक्षावर एक सेन्सर जोडतो.",
        },
        {
          label: 'नाव व वर्णन', title: 'नाव आणि वर्णन द्या',
          body: '<strong>विजेट नाव</strong> संपादित करा आणि एक <strong>विजेट वर्णन</strong> जोडा, मग <strong>Y-अक्ष सेन्सरला</strong> नाव द्या. इथे स्पष्ट नाव आणि वर्णन महत्त्वाचे, कारण स्कॅटर प्लॉट संख्या किंवा रेषेपेक्षा कमी स्वयंस्पष्ट असतो.',
          voice: "पुढे, त्याला एक स्पष्ट नाव आणि एक विजेट वर्णन द्या. हे स्कॅटर ग्राफवर इतर ठिकाणांपेक्षा थोडे जास्त महत्त्वाचे आहे, कारण बिंदूंचा ढग एका दृष्टीक्षेपात एका संख्येपेक्षा किंवा कल रेषेपेक्षा कमी स्पष्ट असतो. एक छोटे वर्णन — जसे फ्लो आणि प्रेशरमधील नाते — वाचकाला नेमके सांगते की ते काय पाहत आहेत. तुम्ही Y-अक्ष सेन्सरचेही नाव बदलू शकता म्हणजे अक्ष लेबल स्वच्छ वाचेल.",
        },
        {
          label: 'अ‍ॅग्रिगेशन', title: 'प्रति सेन्सर अ‍ॅग्रिगेट मूल्य',
          body: 'सेन्सरमध्ये एक <strong>अ‍ॅग्रिगेट मूल्य</strong> जोडा — <strong>Raw, Average, Minimum, Maximum, Time Weighted Sum, Cumulative,</strong> किंवा <strong>Last Active</strong> — म्हणजे प्लॉट होण्यापूर्वी प्रत्येक अक्षाचे मूल्य कसे मोजले जाते ते ठरते.',
          voice: "शेवटी, सेन्सरसाठी अ‍ॅग्रिगेशन सेट करा — तेच कुटुंब जे तुम्ही सर्वत्र पाहिले: raw, average, minimum, maximum, time weighted sum, cumulative, किंवा last active. एक बिंदू म्हणून प्लॉट होण्यापूर्वी प्रत्येक अक्षाचे मूल्य कसे मोजले जाते हे यावरून ठरते. प्रत्येक वैयक्तिक रीडिंग हवे तेव्हा स्कॅटरवर raw सामान्य आहे; सरासरी ढग गुळगुळीत करते. सेव्ह करा, आणि नाते डॅशबोर्डवर लाइव्ह आहे.",
          tip: { type: 'rememberLabel', text: 'स्कॅटर = X सेन्सर विरुद्ध Y सेन्सर. नाव + वर्णन द्या, प्रति सेन्सर अ‍ॅग्रिगेशन सेट करा.' },
        },
      ],
    },
  },
};

export default lesson;
