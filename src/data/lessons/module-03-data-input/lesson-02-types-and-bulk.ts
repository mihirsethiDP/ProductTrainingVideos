import type { DataInputData, Lesson } from '../../types';

/**
 * Module 3 · Lesson 2 — Sensor Types & Bulk Input.   Tag: M3.L2
 * The four data-input sensor types (Number / Boolean / Text / Image) and what
 * each checks, plus submitting many readings at once.
 */

const booleanCard: DataInputData = {
  mode: 'card',
  submitLabel: 'Submit',
  highlight: 'value',
  card: {
    sensor: 'Aerator Running?',
    asset: 'Amazon NCRU · MBBR - 1',
    typeLabel: 'Boolean',
    booleanValue: 'yes',
    media: 'all',
    mediaState: 'pending',
  },
};

const imageCard: DataInputData = {
  mode: 'card',
  submitLabel: 'Submit',
  highlight: 'media',
  card: {
    sensor: 'Tank Condition Photo',
    asset: 'Amazon NCRU · Equalization Tank',
    typeLabel: 'Image',
    media: 'all',
    mediaState: 'pending',
  },
};

const bulk: DataInputData = {
  mode: 'table',
  title: 'Data Input',
  submitLabel: 'Submit All',
  highlight: 'submit',
  rows: [
    { sensor: 'pH Water Quality Equalization Tank', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day', enterValue: '7.8', status: 'ok' },
    { sensor: 'TDS Water Quality Equalization Tank', asset: 'Amazon NCRU', validRange: '0 - 2100', safeRange: '0 - 500', frequency: 'Once a day', enterValue: '1800', status: 'warning' },
    { sensor: 'pH Water Quality MBBR - 1', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day', enterValue: '16', status: 'error' },
    { sensor: 'DO Water Quality MBBR - 1', asset: 'Amazon NCRU', validRange: '0 - 100', safeRange: '0 - 8', frequency: 'Once a day', enterValue: '12', status: 'warning' },
    { sensor: 'pH Water Quality UF Water Storage Tank', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day', enterValue: '7.2', status: 'ok' },
  ],
};

const overview: DataInputData = {
  mode: 'table',
  title: 'Data Input',
  rows: [
    { sensor: 'pH Water Quality Equalization Tank', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day' },
    { sensor: 'Aerator Running?', asset: 'Amazon NCRU · MBBR - 1', frequency: 'Once a shift' },
    { sensor: 'Shift Handover Note', asset: 'Amazon NCRU', frequency: 'Once a shift' },
    { sensor: 'Tank Condition Photo', asset: 'Amazon NCRU', frequency: 'Once a day' },
  ],
};

const lesson: Lesson = {
  id: 'lesson-02-types-and-bulk',
  moduleId: 'module-03-data-input',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'dataInput', caption: 'Four sensor types',
      widgetState: { dataInput: overview }, cursor: [{ at: 0.2, x: 16, y: 40 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Boolean & Text — media only',
      widgetState: { dataInput: booleanCard }, cursor: [{ at: 0.25, x: 50, y: 46 }, { at: 0.6, x: 50, y: 68 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Image — no check, just upload',
      widgetState: { dataInput: imageCard }, cursor: [{ at: 0.3, x: 50, y: 55, click: true }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Bulk input — submit many at once',
      widgetState: { dataInput: bulk }, cursor: [{ at: 0.2, x: 50, y: 40 }, { at: 0.7, x: 90, y: 40 }] },
  ],
  content: {
    en: {
      title: 'Sensor Types &<br><em>Bulk Input.</em>',
      subtitle:
        'Not every reading is a number. Here are the four input types, what each one checks, and how to log many at once.',
      chapter: 'Chapter Three · Data at the Source',
      steps: [
        {
          label: 'Four Types', title: 'Four types of input sensor',
          body: "Data Input supports <strong>four sensor types</strong>: <strong>Number</strong> (a value, with ranges), <strong>Boolean</strong> (yes/no), <strong>Text</strong> (a note), and <strong>Image</strong> (a photo). Only Number has acceptance and warning ranges — the others are simpler.",
          voice: "We've seen number sensors in detail. But Data Input actually supports four different types. Number, which is a value with ranges, like we just covered. Boolean, a simple yes or no. Text, a free note. And Image, a photo. The key thing to remember — only number sensors have those acceptance and warning ranges. The other three are simpler.",
        },
        {
          label: 'Boolean & Text', title: 'Boolean & Text — media only',
          body: "<strong>Boolean</strong> sensors capture a yes/no — like <em>“Aerator running?”</em>. <strong>Text</strong> sensors capture a note. Neither has ranges to check; the only optional extra is a <strong>media upload</strong>, exactly like the number sensor.",
          voice: "Let's start with Boolean and Text. A Boolean sensor just captures a yes or a no — for example, is the aerator running? A Text sensor captures a short note, like a shift handover comment. Neither of these has acceptance or warning ranges — there's nothing numeric to check. The only extra you can add is a media upload, exactly the same All Media or Live Media option as on a number sensor.",
        },
        {
          label: 'Image', title: 'Image — no checks at all',
          body: "An <strong>Image</strong> sensor is just that — a <strong>photo</strong>. There are <strong>no ranges and no checks</strong>; the operator simply uploads the image and submits. Perfect for a daily visual record of equipment or tank condition.",
          voice: "The simplest of all is the Image sensor. It's purely a photo — there are no ranges, no warnings, no checks of any kind. The operator just uploads the image and submits. It's perfect for a daily visual record — a photo of a tank, a piece of equipment, or a meter reading you want on file.",
          tip: { type: 'noteLabel', text: 'Number has ranges + optional media. Boolean and Text have optional media only. Image has no checks at all.' },
        },
        {
          label: 'Bulk Input', title: 'Submit many readings at once',
          body: "Operators rarely log one reading at a time. With <strong>bulk input</strong>, fill in many parameters and <strong>submit them all together</strong>. The system checks each one — accepting the good, warning where needed, and <strong>blocking any that fail</strong> a range or a required input.",
          voice: "Finally, bulk input. In practice, an operator doesn't log one reading at a time — they walk the plant and fill in many at once. So you can enter values across lots of sensors, and submit them all together in one go. When you do, the system checks every single one. The good values are accepted, the borderline ones get a warning, and any that fall outside their acceptance range — or are missing a required photo — are flagged and held back, so you can fix just those. That's Data Input, end to end.",
          tip: { type: 'upNextLabel', text: "You've now mastered logging data at the source." },
        },
      ],
    },
    hi: {
      title: 'सेंसर प्रकार और<br><em>बल्क इनपुट।</em>',
      subtitle:
        'हर रीडिंग एक संख्या नहीं होती। यहाँ चार इनपुट प्रकार हैं, हर एक क्या जाँचता है, और एक साथ कई कैसे दर्ज करें।',
      chapter: 'अध्याय तीन · स्रोत पर डेटा',
      steps: [
        {
          label: 'चार प्रकार', title: 'इनपुट सेंसर के चार प्रकार',
          body: 'डेटा इनपुट <strong>चार सेंसर प्रकार</strong> समर्थित करता है: <strong>नंबर</strong> (रेंज के साथ मान), <strong>बूलियन</strong> (हाँ/नहीं), <strong>टेक्स्ट</strong> (एक नोट), और <strong>इमेज</strong> (एक फ़ोटो)। केवल नंबर में स्वीकृति और चेतावनी रेंज होती है — बाकी सरल हैं।',
          voice: 'हमने नंबर सेंसर विस्तार से देखे। पर डेटा इनपुट वास्तव में चार अलग प्रकार समर्थित करता है। नंबर, जो रेंज के साथ एक मान है, जैसा अभी देखा। बूलियन, एक सरल हाँ या नहीं। टेक्स्ट, एक मुक्त नोट। और इमेज, एक फ़ोटो। याद रखने की मुख्य बात — केवल नंबर सेंसर में वे स्वीकृति और चेतावनी रेंज होती हैं। बाकी तीन सरल हैं।',
        },
        {
          label: 'बूलियन और टेक्स्ट', title: 'बूलियन और टेक्स्ट — केवल मीडिया',
          body: '<strong>बूलियन</strong> सेंसर हाँ/नहीं पकड़ते हैं — जैसे <em>“एरेटर चल रहा है?”</em>। <strong>टेक्स्ट</strong> सेंसर एक नोट पकड़ते हैं। किसी में जाँचने को रेंज नहीं; एकमात्र वैकल्पिक अतिरिक्त है <strong>मीडिया अपलोड</strong>, बिल्कुल नंबर सेंसर की तरह।',
          voice: 'बूलियन और टेक्स्ट से शुरू करें। एक बूलियन सेंसर बस हाँ या नहीं पकड़ता है — उदाहरण के लिए, क्या एरेटर चल रहा है? एक टेक्स्ट सेंसर एक छोटा नोट पकड़ता है, जैसे शिफ्ट हैंडओवर टिप्पणी। इनमें से किसी में स्वीकृति या चेतावनी रेंज नहीं है — जाँचने को कुछ संख्यात्मक नहीं। एकमात्र अतिरिक्त जो आप जोड़ सकते हैं वह मीडिया अपलोड है, बिल्कुल वही All Media या Live Media विकल्प जो नंबर सेंसर पर है।',
        },
        {
          label: 'इमेज', title: 'इमेज — कोई जाँच नहीं',
          body: 'एक <strong>इमेज</strong> सेंसर बस वही है — एक <strong>फ़ोटो</strong>। कोई <strong>रेंज नहीं और कोई जाँच नहीं</strong>; ऑपरेटर बस छवि अपलोड करता है और जमा करता है। उपकरण या टैंक स्थिति के दैनिक दृश्य रिकॉर्ड के लिए उपयुक्त।',
          voice: 'सबसे सरल है इमेज सेंसर। यह विशुद्ध रूप से एक फ़ोटो है — कोई रेंज नहीं, कोई चेतावनी नहीं, किसी भी तरह की कोई जाँच नहीं। ऑपरेटर बस छवि अपलोड करता है और जमा करता है। यह दैनिक दृश्य रिकॉर्ड के लिए उपयुक्त है — एक टैंक की फ़ोटो, उपकरण का एक टुकड़ा, या एक मीटर रीडिंग जिसे आप फ़ाइल में रखना चाहते हैं।',
          tip: { type: 'noteLabel', text: 'नंबर में रेंज + वैकल्पिक मीडिया। बूलियन और टेक्स्ट में केवल वैकल्पिक मीडिया। इमेज में कोई जाँच नहीं।' },
        },
        {
          label: 'बल्क इनपुट', title: 'एक साथ कई रीडिंग जमा करें',
          body: 'ऑपरेटर शायद ही एक बार में एक रीडिंग दर्ज करते हैं। <strong>बल्क इनपुट</strong> से, कई मापदंड भरें और <strong>सबको एक साथ जमा करें</strong>। सिस्टम हर एक की जाँच करता है — अच्छों को स्वीकार, जहाँ ज़रूरी वहाँ चेतावनी, और रेंज या आवश्यक इनपुट में विफल किसी को <strong>रोकता है</strong>।',
          voice: 'अंत में, बल्क इनपुट। व्यवहार में, ऑपरेटर एक बार में एक रीडिंग दर्ज नहीं करता — वह प्लांट घूमता है और एक साथ कई भरता है। तो आप बहुत सारे सेंसर में मान दर्ज कर सकते हैं, और सबको एक बार में एक साथ जमा कर सकते हैं। जब आप ऐसा करते हैं, सिस्टम हर एक की जाँच करता है। अच्छे मान स्वीकार होते हैं, सीमावर्ती को चेतावनी मिलती है, और जो अपनी स्वीकृति रेंज के बाहर आते हैं — या जिनमें आवश्यक फ़ोटो नहीं — उन्हें चिह्नित कर रोक दिया जाता है, ताकि आप केवल उन्हें ठीक कर सकें। यह है डेटा इनपुट, आद्योपांत।',
          tip: { type: 'upNextLabel', text: 'अब आपने स्रोत पर डेटा दर्ज करना सीख लिया है।' },
        },
      ],
    },
    ta: {
      title: 'சென்சார் வகைகள் &<br><em>மொத்த உள்ளீடு.</em>',
      subtitle:
        'ஒவ்வொரு அளவீடும் ஒரு எண் அல்ல. இங்கே நான்கு உள்ளீட்டு வகைகள், ஒவ்வொன்றும் எதைச் சரிபார்க்கிறது, ஒரே நேரத்தில் பலவற்றை எப்படிப் பதிவு செய்வது.',
      chapter: 'அத்தியாயம் மூன்று · மூலத்தில் தரவு',
      steps: [
        {
          label: 'நான்கு வகைகள்', title: 'நான்கு வகை உள்ளீட்டு சென்சார்கள்',
          body: 'டேட்டா இன்புட் <strong>நான்கு சென்சார் வகைகளை</strong> ஆதரிக்கிறது: <strong>எண்</strong> (வரம்புகளுடன் மதிப்பு), <strong>பூலியன்</strong> (ஆம்/இல்லை), <strong>உரை</strong> (ஒரு குறிப்பு), <strong>படம்</strong> (ஒரு புகைப்படம்). எண்ணுக்கு மட்டுமே ஏற்பு மற்றும் எச்சரிக்கை வரம்புகள் — மற்றவை எளிமையானவை.',
          voice: 'எண் சென்சார்களை விரிவாகப் பார்த்தோம். ஆனால் டேட்டா இன்புட் உண்மையில் நான்கு வெவ்வேறு வகைகளை ஆதரிக்கிறது. எண், வரம்புகளுடன் ஒரு மதிப்பு, இப்போது பார்த்தது போல. பூலியன், ஒரு எளிய ஆம் அல்லது இல்லை. உரை, ஒரு சுதந்திரக் குறிப்பு. படம், ஒரு புகைப்படம். நினைவில் கொள்ள வேண்டிய முக்கிய விஷயம் — எண் சென்சார்களுக்கு மட்டுமே அந்த ஏற்பு மற்றும் எச்சரிக்கை வரம்புகள் உள்ளன. மற்ற மூன்றும் எளிமையானவை.',
        },
        {
          label: 'பூலியன் & உரை', title: 'பூலியன் & உரை — மீடியா மட்டுமே',
          body: '<strong>பூலியன்</strong> சென்சார்கள் ஆம்/இல்லையைப் பிடிக்கின்றன — <em>“ஏரேட்டர் இயங்குகிறதா?”</em> போல. <strong>உரை</strong> சென்சார்கள் ஒரு குறிப்பைப் பிடிக்கின்றன. இரண்டிற்கும் சரிபார்க்க வரம்புகள் இல்லை; ஒரே விருப்ப கூடுதல் <strong>மீடியா பதிவேற்றம்</strong>, சரியாக எண் சென்சார் போல.',
          voice: 'பூலியன் மற்றும் உரையிலிருந்து தொடங்குவோம். ஒரு பூலியன் சென்சார் ஆம் அல்லது இல்லையை மட்டும் பிடிக்கிறது — உதாரணமாக, ஏரேட்டர் இயங்குகிறதா? ஒரு உரை சென்சார் ஒரு குறுகிய குறிப்பைப் பிடிக்கிறது, ஷிஃப்ட் கையளிப்புக் கருத்து போல. இவை இரண்டிற்கும் ஏற்பு அல்லது எச்சரிக்கை வரம்புகள் இல்லை — சரிபார்க்க எண்ரீதியான எதுவும் இல்லை. நீங்கள் சேர்க்கக்கூடிய ஒரே கூடுதல் மீடியா பதிவேற்றம், எண் சென்சாரில் உள்ள அதே All Media அல்லது Live Media விருப்பம்.',
        },
        {
          label: 'படம்', title: 'படம் — எந்தச் சோதனையும் இல்லை',
          body: 'ஒரு <strong>படம்</strong> சென்சார் அதுதான் — ஒரு <strong>புகைப்படம்</strong>. <strong>வரம்புகள் இல்லை, சோதனைகள் இல்லை</strong>; இயக்குனர் படத்தைப் பதிவேற்றி சமர்ப்பிக்கிறார். உபகரணம் அல்லது டாங்க் நிலையின் தினசரி காட்சிப் பதிவுக்கு ஏற்றது.',
          voice: 'அனைத்திலும் எளிமையானது படம் சென்சார். இது முற்றிலும் ஒரு புகைப்படம் — வரம்புகள் இல்லை, எச்சரிக்கைகள் இல்லை, எந்த வகையான சோதனையும் இல்லை. இயக்குனர் படத்தைப் பதிவேற்றி சமர்ப்பிக்கிறார். தினசரி காட்சிப் பதிவுக்கு இது ஏற்றது — ஒரு டாங்க், ஒரு உபகரணம், அல்லது கோப்பில் வைக்க விரும்பும் மீட்டர் அளவீட்டின் புகைப்படம்.',
          tip: { type: 'noteLabel', text: 'எண்ணுக்கு வரம்புகள் + விருப்ப மீடியா. பூலியன் மற்றும் உரைக்கு விருப்ப மீடியா மட்டும். படத்துக்கு எந்தச் சோதனையும் இல்லை.' },
        },
        {
          label: 'மொத்த உள்ளீடு', title: 'பல அளவீடுகளை ஒரே நேரத்தில் சமர்ப்பிக்கவும்',
          body: 'இயக்குனர்கள் ஒரு நேரத்தில் ஒரு அளவீட்டை அரிதாகவே பதிவு செய்கிறார்கள். <strong>மொத்த உள்ளீட்டில்</strong>, பல அளவுருக்களை நிரப்பி <strong>அனைத்தையும் சேர்த்து சமர்ப்பிக்கவும்</strong>. சிஸ்டம் ஒவ்வொன்றையும் சரிபார்க்கிறது — நல்லதை ஏற்று, தேவையான இடத்தில் எச்சரித்து, வரம்பு அல்லது தேவையான உள்ளீட்டில் தோல்வியடைபவற்றை <strong>தடுக்கிறது</strong>.',
          voice: 'இறுதியாக, மொத்த உள்ளீடு. நடைமுறையில், ஒரு இயக்குனர் ஒரு நேரத்தில் ஒரு அளவீட்டைப் பதிவு செய்வதில்லை — அவர் ஆலையைச் சுற்றி நடந்து ஒரே நேரத்தில் பலவற்றை நிரப்புகிறார். எனவே பல சென்சார்களில் மதிப்புகளை உள்ளிட்டு, அனைத்தையும் ஒரே முறையில் சேர்த்து சமர்ப்பிக்கலாம். அப்படிச் செய்யும்போது, சிஸ்டம் ஒவ்வொன்றையும் சரிபார்க்கிறது. நல்ல மதிப்புகள் ஏற்கப்படுகின்றன, எல்லைக்கோட்டில் உள்ளவை எச்சரிக்கை பெறுகின்றன, ஏற்பு வரம்புக்கு வெளியே விழுபவை — அல்லது தேவையான புகைப்படம் இல்லாதவை — குறிக்கப்பட்டு பிடிக்கப்படுகின்றன, இதனால் அவற்றை மட்டும் சரிசெய்யலாம். அதுதான் டேட்டா இன்புட், ஆரம்பம் முதல் இறுதி வரை.',
          tip: { type: 'upNextLabel', text: 'இப்போது மூலத்தில் தரவைப் பதிவு செய்வதில் தேர்ச்சி பெற்றுவிட்டீர்கள்.' },
        },
      ],
    },
    mr: {
      title: 'सेन्सर प्रकार आणि<br><em>बल्क इनपुट.</em>',
      subtitle:
        'प्रत्येक रीडिंग एक संख्या नसते. इथे चार इनपुट प्रकार आहेत, प्रत्येक काय तपासतो, आणि एकाच वेळी अनेक कसे नोंदवायचे.',
      chapter: 'अध्याय तीन · स्रोतावर डेटा',
      steps: [
        {
          label: 'चार प्रकार', title: 'इनपुट सेन्सरचे चार प्रकार',
          body: 'डेटा इनपुट <strong>चार सेन्सर प्रकार</strong> समर्थित करते: <strong>नंबर</strong> (श्रेणीसह मूल्य), <strong>बूलियन</strong> (होय/नाही), <strong>टेक्स्ट</strong> (एक नोंद), आणि <strong>इमेज</strong> (एक फोटो). फक्त नंबरला स्वीकृती आणि इशारा श्रेणी असते — बाकी सोपे आहेत.',
          voice: 'आपण नंबर सेन्सर तपशीलवार पाहिले. पण डेटा इनपुट प्रत्यक्षात चार वेगळे प्रकार समर्थित करते. नंबर, जो श्रेणीसह एक मूल्य आहे, जसे आत्ता पाहिले. बूलियन, एक सोपा होय किंवा नाही. टेक्स्ट, एक मुक्त नोंद. आणि इमेज, एक फोटो. लक्षात ठेवण्याची मुख्य गोष्ट — फक्त नंबर सेन्सरला त्या स्वीकृती आणि इशारा श्रेणी असतात. बाकी तीन सोपे आहेत.',
        },
        {
          label: 'बूलियन आणि टेक्स्ट', title: 'बूलियन आणि टेक्स्ट — फक्त मीडिया',
          body: '<strong>बूलियन</strong> सेन्सर होय/नाही पकडतात — जसे <em>“एरेटर चालू आहे?”</em>. <strong>टेक्स्ट</strong> सेन्सर एक नोंद पकडतात. कोणाला तपासायला श्रेणी नाही; एकमेव पर्यायी जादा म्हणजे <strong>मीडिया अपलोड</strong>, अगदी नंबर सेन्सरसारखे.',
          voice: 'बूलियन आणि टेक्स्टपासून सुरू करू. एक बूलियन सेन्सर फक्त होय किंवा नाही पकडतो — उदाहरणार्थ, एरेटर चालू आहे का? एक टेक्स्ट सेन्सर एक छोटी नोंद पकडतो, जसे शिफ्ट हँडओव्हर टिप्पणी. यापैकी कोणाला स्वीकृती किंवा इशारा श्रेणी नाही — तपासायला संख्यात्मक काही नाही. तुम्ही जोडू शकता ती एकमेव जादा म्हणजे मीडिया अपलोड, अगदी तोच All Media किंवा Live Media पर्याय जो नंबर सेन्सरवर आहे.',
        },
        {
          label: 'इमेज', title: 'इमेज — कोणतीही तपासणी नाही',
          body: 'एक <strong>इमेज</strong> सेन्सर म्हणजे तेच — एक <strong>फोटो</strong>. <strong>श्रेणी नाही आणि तपासणी नाही</strong>; ऑपरेटर फक्त प्रतिमा अपलोड करतो आणि सबमिट करतो. उपकरण किंवा टँक स्थितीच्या दैनंदिन दृश्य नोंदीसाठी योग्य.',
          voice: 'सर्वात सोपा आहे इमेज सेन्सर. तो पूर्णपणे एक फोटो आहे — श्रेणी नाही, इशारे नाहीत, कोणत्याही प्रकारची तपासणी नाही. ऑपरेटर फक्त प्रतिमा अपलोड करतो आणि सबमिट करतो. दैनंदिन दृश्य नोंदीसाठी हे योग्य आहे — एका टँकचा फोटो, उपकरणाचा तुकडा, किंवा फाइलवर ठेवायची मीटर रीडिंग.',
          tip: { type: 'noteLabel', text: 'नंबरला श्रेणी + पर्यायी मीडिया. बूलियन आणि टेक्स्टला फक्त पर्यायी मीडिया. इमेजला कोणतीही तपासणी नाही.' },
        },
        {
          label: 'बल्क इनपुट', title: 'एकाच वेळी अनेक रीडिंग सबमिट करा',
          body: 'ऑपरेटर क्वचितच एका वेळी एक रीडिंग नोंदवतात. <strong>बल्क इनपुट</strong>ने, अनेक मापदंड भरा आणि <strong>सर्व एकत्र सबमिट करा</strong>. सिस्टम प्रत्येकाची तपासणी करते — चांगले स्वीकारते, जिथे गरज तिथे इशारा देते, आणि श्रेणी किंवा आवश्यक इनपुटमध्ये अपयशी ठरणारे <strong>रोखते</strong>.',
          voice: 'शेवटी, बल्क इनपुट. प्रत्यक्षात, ऑपरेटर एका वेळी एक रीडिंग नोंदवत नाही — तो प्लांट फिरतो आणि एकाच वेळी अनेक भरतो. म्हणून तुम्ही अनेक सेन्सरमध्ये मूल्ये भरू शकता, आणि सर्व एकाच वेळी एकत्र सबमिट करू शकता. तुम्ही असे करता तेव्हा, सिस्टम प्रत्येकाची तपासणी करते. चांगली मूल्ये स्वीकारली जातात, सीमारेषेवरची इशारा मिळवतात, आणि त्यांच्या स्वीकृती श्रेणीबाहेर पडणारी — किंवा आवश्यक फोटो नसलेली — चिन्हांकित करून रोखली जातात, जेणेकरून तुम्ही फक्त तीच दुरुस्त करू शकता. हे आहे डेटा इनपुट, सुरुवातीपासून शेवटपर्यंत.',
          tip: { type: 'upNextLabel', text: 'आता तुम्ही स्रोतावर डेटा नोंदवण्यात प्रभुत्व मिळवले आहे.' },
        },
      ],
    },
  },
};

export default lesson;
