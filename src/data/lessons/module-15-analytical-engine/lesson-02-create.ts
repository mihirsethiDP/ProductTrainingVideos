import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/analytical-create`;

/**
 * M14 · Analytical Engine — L2: create a formula. (INTERNAL ONLY)
 * The Create Formula flow from the recording: the form (name/description/type,
 * tag, unit, user group, workspace & plant filters), the Frequency modal
 * (anchor + every N minutes), summoning sensor tags with @, the chip-based
 * expression editor with Excel-style HyperFormula functions, and Apply to
 * Historical Data + Submit. Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'analytical-engine-create',
  moduleId: 'module-15-analytical-engine',
  lessonNumber: 2,
  estimatedMinutes: 5,
  screenshots: {
    form: `${BASE}/form.jpg`,
    frequency: `${BASE}/frequency.jpg`,
    tags: `${BASE}/tags.jpg`,
    chips: `${BASE}/chips.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'form', caption: 'The Create Formula form',
      spotlight: { top: '12%', left: '1%', width: '97.5%', height: '17%' },
    },
    {
      mode: 'detail', screenshot: 'frequency', caption: 'Anchor + every N minutes',
      spotlight: { top: '37%', left: '38.5%', width: '23%', height: '26%' },
    },
    {
      mode: 'detail', screenshot: 'tags', caption: '@ summons sensor tags',
      spotlight: { top: '33%', left: '3%', width: '13%', height: '30%' },
    },
    {
      mode: 'detail', screenshot: 'chips', caption: 'The expression becomes chips',
      spotlight: { top: '31.5%', left: '1.5%', width: '34%', height: '7%' },
    },
    {
      mode: 'detail', screenshot: 'chips', caption: 'Backfill the past, then Submit',
      spotlight: { top: '64.5%', left: '1%', width: '98%', height: '7%' },
    },
  ],
  content: {
    en: {
      title: 'Create a<br><em>formula.</em>',
      subtitle:
        'From a blank form to a live calculated data point: scope it, schedule it, then write the math — with sensor tags a single @ away and Excel-style functions on tap.',
      chapter: 'Analytical Engine · Creating',
      steps: [
        {
          label: 'The form', title: 'Name it, type it, scope it',
          body: "<strong>+ Add Formula</strong> opens this form. Give the formula a <strong>Name</strong>, a <strong>Description</strong>, and a <strong>Type</strong> (Value). Then its identity and scope: the <strong>Formula tag</strong> (how dashboards and other formulas will call it), a <strong>Unit</strong> (Litres, Kl/h, %, pH…), the <strong>User Group</strong>, and the <strong>Workspace</strong> and <strong>Plant filters</strong> — which also decide <em>which sensor tags the editor will offer you</em>.",
          voice: "Add Formula opens this form. Give the formula a name, a description, and a type — value. Then its identity and scope. The formula tag is how dashboards and other formulas will call it. Pick a unit — litres, kilolitres per hour, percent, pH. And then the user group, workspace and plant filters. These do double duty: they place the formula with the right client, and they decide which sensor tags the editor will offer you in a moment.",
        },
        {
          label: 'Frequency', title: 'Anchor + every N minutes',
          body: "<strong>Set Frequency</strong> opens this modal: pick an <strong>anchor date-time</strong> and an <strong>interval in minutes</strong>. From that anchor, the engine recalculates the formula every N minutes — every minute for a live number, every 60 for an hourly one. This is the <em>Per Minute / Per 60 Minute</em> you saw on the list page.",
          voice: "Set Frequency opens this small modal. Pick an anchor date and time, and an interval in minutes. From that anchor, the engine recalculates the formula every N minutes — every minute for a live number, every sixty for an hourly one. This is exactly the Per Minute and Per 60 Minute you saw on the list page.",
        },
        {
          label: '@ tags', title: 'Summon sensor tags with @',
          body: "Now the math. In the editor, type <strong>@</strong> and start a tag name — an <strong>autocomplete of sensor tags</strong> appears, scoped by your workspace and plant filters. Pick one and the live sensor becomes an input of your formula. Use as many tags as the calculation needs — a total outlet flow can sum two or more flow meters.",
          voice: "Now the math. In the editor, type the at-sign and start a tag name — an autocomplete of sensor tags appears, scoped by the workspace and plant filters you chose. Pick one, and that live sensor becomes an input of your formula. Use as many tags as the calculation needs — a total outlet flow, for example, simply sums two or more flow meters.",
        },
        {
          label: 'Chips', title: 'The expression becomes chips',
          body: "As you write, the expression turns into <strong>chips</strong> — tags, operators, numbers, parentheses, each its own token: here <code>( LT_EQTdd1_1:DEM_WTP × 100 ) / 70</code>. And it's not just arithmetic: the editor speaks <strong>HyperFormula</strong>, so Excel-style functions — <strong>IF, AND, AVERAGE, MIN, MAX, FILTER…</strong> — work on sensor tags and their data, just like in a spreadsheet.",
          voice: "As you write, the expression turns into chips — tags, operators, numbers, parentheses, each one its own token. Here: open bracket, the level transmitter tag, times one hundred, close bracket, divided by seventy. And it's not just arithmetic. The editor speaks HyperFormula, so Excel-style functions — IF, AND, AVERAGE, MIN, MAX, FILTER — work directly on sensor tags and their data, just like in a spreadsheet.",
          tip: { type: 'tipLabel', text: 'You’ll meet IF and AND on real formulas in the Plant Score lesson.' },
        },
        {
          label: 'Submit', title: 'Backfill the past, then Submit',
          body: "One last decision: <strong>Apply to Historical Data</strong>. Tick it and the engine computes your formula <em>backwards over the data that already exists</em> — trends from day one, not from today. Then <strong>Submit</strong>: the formula joins the library, gets its tag, and starts recalculating on schedule.",
          voice: "One last decision before you submit: Apply to Historical Data. Tick it, and the engine computes your formula backwards over the data that already exists — so you get trends from day one, not just from today. Then Submit. The formula joins the library, gets its tag, and starts recalculating on its schedule.",
          tip: { type: 'upNextLabel', text: 'Next: click any tag chip — Sensor Settings is where aggregations, time windows and data completeness live.' },
        },
      ],
    },
    hi: {
      title: 'फ़ॉर्मूला<br><em>बनाएँ.</em>',
      subtitle:
        'ख़ाली फ़ॉर्म से लाइव परिकलित डेटा पॉइंट तक: स्कोप दें, शेड्यूल दें, फिर गणित लिखें — सेंसर टैग एक @ की दूरी पर और Excel-शैली फ़ंक्शन हाथ में।',
      chapter: 'Analytical Engine · निर्माण',
      steps: [
        {
          label: 'फ़ॉर्म', title: 'नाम, प्रकार, स्कोप',
          body: "<strong>+ Add Formula</strong> यह फ़ॉर्म खोलता है। फ़ॉर्मूले को <strong>Name</strong>, <strong>Description</strong> और <strong>Type</strong> (Value) दें। फिर पहचान और स्कोप: <strong>Formula tag</strong> (डैशबोर्ड और दूसरे फ़ॉर्मूले इसे इसी से पुकारेंगे), <strong>Unit</strong> (Litres, Kl/h, %, pH…), <strong>User Group</strong>, और <strong>Workspace</strong> व <strong>Plant filters</strong> — जो यह भी तय करते हैं कि <em>एडिटर आपको कौन-से सेंसर टैग दिखाएगा</em>।",
          voice: "Add Formula यह फ़ॉर्म खोलता है। फ़ॉर्मूले को नाम, विवरण और प्रकार दें — value। फिर उसकी पहचान और स्कोप। Formula tag वही है जिससे डैशबोर्ड और दूसरे फ़ॉर्मूले इसे पुकारेंगे। एक unit चुनें — litres, kilolitres per hour, percent, pH। और फिर user group, workspace और plant फ़िल्टर। ये दोहरा काम करते हैं: फ़ॉर्मूले को सही क्लाइंट के पास रखते हैं, और तय करते हैं कि एडिटर आपको अभी कौन-से सेंसर टैग देगा।",
        },
        {
          label: 'Frequency', title: 'एंकर + हर N मिनट',
          body: "<strong>Set Frequency</strong> यह मोडल खोलता है: एक <strong>एंकर date-time</strong> और <strong>मिनटों में अंतराल</strong> चुनें। उस एंकर से, इंजन हर N मिनट पर फ़ॉर्मूला पुनर्गणित करता है — लाइव आँकड़े के लिए हर मिनट, घंटेवार के लिए हर 60। यही सूची पेज का <em>Per Minute / Per 60 Minute</em> है।",
          voice: "Set Frequency यह छोटा मोडल खोलता है। एक एंकर तारीख़-समय चुनें, और मिनटों में अंतराल। उस एंकर से, इंजन हर N मिनट पर फ़ॉर्मूला पुनर्गणित करता है — लाइव आँकड़े के लिए हर मिनट, घंटेवार के लिए हर साठ। यही ठीक वही Per Minute और Per 60 Minute है जो आपने सूची पेज पर देखा।",
        },
        {
          label: '@ टैग', title: '@ से सेंसर टैग बुलाएँ',
          body: "अब गणित। एडिटर में <strong>@</strong> टाइप करें और टैग का नाम शुरू करें — <strong>सेंसर टैग का autocomplete</strong> खुलता है, आपके workspace और plant फ़िल्टर के दायरे में। एक चुनें और वह लाइव सेंसर आपके फ़ॉर्मूले का इनपुट बन जाता है। जितने टैग चाहिए उतने लें — कुल आउटलेट फ़्लो दो या अधिक flow meter जोड़ सकता है।",
          voice: "अब गणित। एडिटर में at-sign टाइप करें और टैग का नाम शुरू करें — सेंसर टैग का autocomplete खुलता है, आपके चुने workspace और plant फ़िल्टर के दायरे में। एक चुनें, और वह लाइव सेंसर आपके फ़ॉर्मूले का इनपुट बन जाता है। गणना को जितने टैग चाहिए उतने लें — कुल आउटलेट फ़्लो, उदाहरण के लिए, बस दो या अधिक flow meter का योग है।",
        },
        {
          label: 'चिप्स', title: 'एक्सप्रेशन चिप्स बन जाता है',
          body: "जैसे-जैसे आप लिखते हैं, एक्सप्रेशन <strong>चिप्स</strong> में बदलता है — टैग, ऑपरेटर, संख्याएँ, कोष्ठक, हर एक अपना टोकन: यहाँ <code>( LT_EQTdd1_1:DEM_WTP × 100 ) / 70</code>। और यह सिर्फ़ अंकगणित नहीं: एडिटर <strong>HyperFormula</strong> बोलता है, तो Excel-शैली फ़ंक्शन — <strong>IF, AND, AVERAGE, MIN, MAX, FILTER…</strong> — सेंसर टैग और उनके डेटा पर वैसे ही चलते हैं जैसे स्प्रेडशीट में।",
          voice: "जैसे-जैसे आप लिखते हैं, एक्सप्रेशन चिप्स में बदलता जाता है — टैग, ऑपरेटर, संख्याएँ, कोष्ठक, हर एक अपना टोकन। यहाँ: खुला कोष्ठक, level transmitter टैग, गुणा सौ, बंद कोष्ठक, भाग सत्तर। और यह सिर्फ़ अंकगणित नहीं है। एडिटर HyperFormula बोलता है, तो Excel-शैली फ़ंक्शन — IF, AND, AVERAGE, MIN, MAX, FILTER — सीधे सेंसर टैग और उनके डेटा पर चलते हैं, बिल्कुल स्प्रेडशीट की तरह।",
          tip: { type: 'tipLabel', text: 'IF और AND असली फ़ॉर्मूलों पर Plant Score पाठ में मिलेंगे।' },
        },
        {
          label: 'Submit', title: 'अतीत भरें, फिर Submit',
          body: "एक आख़िरी निर्णय: <strong>Apply to Historical Data</strong>। टिक करें और इंजन आपका फ़ॉर्मूला <em>पहले से मौजूद डेटा पर पीछे की ओर</em> गणना करता है — ट्रेंड पहले दिन से, आज से नहीं। फिर <strong>Submit</strong>: फ़ॉर्मूला लाइब्रेरी में जुड़ता है, अपना टैग पाता है, और शेड्यूल पर पुनर्गणना शुरू कर देता है।",
          voice: "Submit से पहले एक आख़िरी निर्णय: Apply to Historical Data। इसे टिक करें, और इंजन आपका फ़ॉर्मूला पहले से मौजूद डेटा पर पीछे की ओर गणना करता है — ताकि ट्रेंड पहले दिन से मिलें, सिर्फ़ आज से नहीं। फिर Submit। फ़ॉर्मूला लाइब्रेरी में जुड़ जाता है, अपना टैग पाता है, और अपने शेड्यूल पर पुनर्गणना शुरू कर देता है।",
          tip: { type: 'upNextLabel', text: 'आगे: किसी भी टैग चिप पर क्लिक करें — Sensor Settings में aggregation, time window और data completeness रहते हैं।' },
        },
      ],
    },
    ta: {
      title: 'சூத்திரம்<br><em>உருவாக்கு.</em>',
      subtitle:
        'காலி படிவத்திலிருந்து நேரலை கணக்கிடப்பட்ட தரவுப் புள்ளி வரை: எல்லை கொடுங்கள், அட்டவணை கொடுங்கள், பின் கணிதம் எழுதுங்கள் — சென்சார் டேக்குகள் ஒரு @ தூரத்தில், Excel-பாணி செயல்பாடுகள் கையருகில்.',
      chapter: 'Analytical Engine · உருவாக்கம்',
      steps: [
        {
          label: 'படிவம்', title: 'பெயர், வகை, எல்லை',
          body: "<strong>+ Add Formula</strong> இந்தப் படிவத்தைத் திறக்கிறது. சூத்திரத்திற்கு <strong>Name</strong>, <strong>Description</strong>, <strong>Type</strong> (Value) கொடுங்கள். பின் அடையாளமும் எல்லையும்: <strong>Formula tag</strong> (டாஷ்போர்டுகளும் பிற சூத்திரங்களும் இதை இப்படித்தான் அழைக்கும்), <strong>Unit</strong> (Litres, Kl/h, %, pH…), <strong>User Group</strong>, மற்றும் <strong>Workspace</strong> & <strong>Plant filters</strong> — இவை <em>எடிட்டர் எந்தச் சென்சார் டேக்குகளை உங்களுக்குக் காட்டும்</em> என்பதையும் தீர்மானிக்கின்றன.",
          voice: "Add Formula இந்தப் படிவத்தைத் திறக்கிறது. சூத்திரத்திற்கு பெயர், விளக்கம், வகை கொடுங்கள் — value. பின் அதன் அடையாளமும் எல்லையும். Formula tag என்பதுதான் டாஷ்போர்டுகளும் பிற சூத்திரங்களும் இதை அழைக்கும் பெயர். ஒரு unit தேர்வு செய்யுங்கள் — litres, kilolitres per hour, percent, pH. பின் user group, workspace, plant வடிப்பான்கள். இவை இரட்டை வேலை செய்கின்றன: சூத்திரத்தை சரியான வாடிக்கையாளரிடம் வைக்கின்றன, மேலும் சிறிது நேரத்தில் எடிட்டர் எந்தச் சென்சார் டேக்குகளைக் காட்டும் என்பதைத் தீர்மானிக்கின்றன.",
        },
        {
          label: 'Frequency', title: 'நங்கூரம் + ஒவ்வொரு N நிமிடம்',
          body: "<strong>Set Frequency</strong> இந்த மோடலைத் திறக்கிறது: ஒரு <strong>நங்கூர date-time</strong> மற்றும் <strong>நிமிடங்களில் இடைவெளி</strong> தேர்வு. அந்த நங்கூரத்திலிருந்து, ஒவ்வொரு N நிமிடமும் இயந்திரம் சூத்திரத்தை மறுகணக்கிடும் — நேரலை எண்ணுக்கு ஒவ்வொரு நிமிடமும், மணிநேர எண்ணுக்கு ஒவ்வொரு 60-ம். பட்டியல் பக்கத்தில் பார்த்த <em>Per Minute / Per 60 Minute</em> இதுவே.",
          voice: "Set Frequency இந்தச் சிறிய மோடலைத் திறக்கிறது. ஒரு நங்கூர தேதி-நேரம், நிமிடங்களில் ஒரு இடைவெளி தேர்வு செய்யுங்கள். அந்த நங்கூரத்திலிருந்து, இயந்திரம் ஒவ்வொரு N நிமிடமும் சூத்திரத்தை மறுகணக்கிடும் — நேரலை எண்ணுக்கு ஒவ்வொரு நிமிடமும், மணிநேர எண்ணுக்கு ஒவ்வொரு அறுபதும். பட்டியல் பக்கத்தில் நீங்கள் பார்த்த Per Minute மற்றும் Per 60 Minute சரியாக இதுவே.",
        },
        {
          label: '@ டேக்குகள்', title: '@ சென்சார் டேக்குகளை அழைக்கிறது',
          body: "இப்போது கணிதம். எடிட்டரில் <strong>@</strong> தட்டச்சு செய்து டேக் பெயரைத் தொடங்குங்கள் — <strong>சென்சார் டேக்குகளின் autocomplete</strong> தோன்றும், உங்கள் workspace, plant வடிப்பான்களின் எல்லைக்குள். ஒன்றைத் தேர்ந்தால் அந்த நேரலை சென்சார் உங்கள் சூத்திரத்தின் உள்ளீடாகிறது. கணக்கீட்டுக்குத் தேவையான அத்தனை டேக்குகள் — மொத்த outlet ஓட்டம் இரண்டோ மேற்பட்டோ flow meter-களைக் கூட்டலாம்.",
          voice: "இப்போது கணிதம். எடிட்டரில் at-sign தட்டச்சு செய்து ஒரு டேக் பெயரைத் தொடங்குங்கள் — சென்சார் டேக்குகளின் autocomplete தோன்றும், நீங்கள் தேர்ந்த workspace மற்றும் plant வடிப்பான்களின் எல்லைக்குள். ஒன்றைத் தேர்ந்தெடுங்கள், அந்த நேரலை சென்சார் உங்கள் சூத்திரத்தின் உள்ளீடாகிறது. கணக்கீட்டுக்கு எத்தனை டேக்குகள் தேவையோ அத்தனை பயன்படுத்துங்கள் — உதாரணமாக மொத்த outlet ஓட்டம் வெறுமனே இரண்டோ மேற்பட்டோ flow meter-களின் கூட்டுத்தொகை.",
        },
        {
          label: 'சிப்கள்', title: 'கூற்று சிப்களாகிறது',
          body: "நீங்கள் எழுத எழுத, கூற்று <strong>சிப்களாக</strong> மாறுகிறது — டேக்குகள், ஆபரேட்டர்கள், எண்கள், அடைப்புகள், ஒவ்வொன்றும் தனித் டோக்கன்: இங்கே <code>( LT_EQTdd1_1:DEM_WTP × 100 ) / 70</code>. இது வெறும் எண்கணிதம் அல்ல: எடிட்டர் <strong>HyperFormula</strong> பேசுகிறது — Excel-பாணி செயல்பாடுகள் — <strong>IF, AND, AVERAGE, MIN, MAX, FILTER…</strong> — சென்சார் டேக்குகளிலும் அவற்றின் தரவிலும் ஸ்ப்ரெட்ஷீட் போலவே இயங்கும்.",
          voice: "நீங்கள் எழுத எழுத, கூற்று சிப்களாக மாறுகிறது — டேக்குகள், ஆபரேட்டர்கள், எண்கள், அடைப்புகள், ஒவ்வொன்றும் தனித் டோக்கன். இங்கே: திறந்த அடைப்பு, level transmitter டேக், பெருக்கல் நூறு, மூடிய அடைப்பு, வகுத்தல் எழுபது. இது வெறும் எண்கணிதம் அல்ல. எடிட்டர் HyperFormula பேசுகிறது, எனவே Excel-பாணி செயல்பாடுகள் — IF, AND, AVERAGE, MIN, MAX, FILTER — நேரடியாக சென்சார் டேக்குகளிலும் அவற்றின் தரவிலும் இயங்கும், ஸ்ப்ரெட்ஷீட்டில் போலவே.",
          tip: { type: 'tipLabel', text: 'IF, AND ஆகியவற்றை உண்மையான சூத்திரங்களில் Plant Score பாடத்தில் சந்திப்பீர்கள்.' },
        },
        {
          label: 'Submit', title: 'கடந்த காலத்தை நிரப்பி, Submit',
          body: "கடைசி முடிவு: <strong>Apply to Historical Data</strong>. டிக் செய்தால் இயந்திரம் <em>ஏற்கனவே உள்ள தரவின் மீது பின்னோக்கி</em> உங்கள் சூத்திரத்தைக் கணக்கிடும் — போக்குகள் முதல் நாளிலிருந்து, இன்றிலிருந்து அல்ல. பின் <strong>Submit</strong>: சூத்திரம் நூலகத்தில் சேர்ந்து, தன் டேக்கைப் பெற்று, அட்டவணைப்படி மறுகணக்கீட்டைத் தொடங்குகிறது.",
          voice: "Submit-க்கு முன் ஒரு கடைசி முடிவு: Apply to Historical Data. டிக் செய்யுங்கள், இயந்திரம் ஏற்கனவே இருக்கும் தரவின் மீது பின்னோக்கி உங்கள் சூத்திரத்தைக் கணக்கிடும் — போக்குகள் முதல் நாளிலிருந்து கிடைக்கும், இன்றிலிருந்து மட்டும் அல்ல. பின் Submit. சூத்திரம் நூலகத்தில் சேர்கிறது, தன் டேக்கைப் பெறுகிறது, தன் அட்டவணைப்படி மறுகணக்கீட்டைத் தொடங்குகிறது.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: எந்த டேக் சிப்பையும் கிளிக் செய்யுங்கள் — aggregation, time window, data completeness எல்லாம் Sensor Settings-இல்.' },
        },
      ],
    },
    mr: {
      title: 'फॉर्म्युला<br><em>तयार करा.</em>',
      subtitle:
        'रिकाम्या फॉर्मपासून लाइव्ह गणित डेटा पॉइंटपर्यंत: व्याप्ती द्या, वेळापत्रक द्या, मग गणित लिहा — सेन्सर टॅग एका @ वर आणि Excel-शैली फंक्शन्स हाताशी.',
      chapter: 'Analytical Engine · निर्मिती',
      steps: [
        {
          label: 'फॉर्म', title: 'नाव, प्रकार, व्याप्ती',
          body: "<strong>+ Add Formula</strong> हा फॉर्म उघडतो. फॉर्म्युल्याला <strong>Name</strong>, <strong>Description</strong> आणि <strong>Type</strong> (Value) द्या. मग ओळख आणि व्याप्ती: <strong>Formula tag</strong> (डॅशबोर्ड व इतर फॉर्म्युले याच नावाने त्याला बोलावतील), <strong>Unit</strong> (Litres, Kl/h, %, pH…), <strong>User Group</strong>, आणि <strong>Workspace</strong> व <strong>Plant filters</strong> — जे <em>एडिटर तुम्हाला कोणते सेन्सर टॅग दाखवेल</em> हेही ठरवतात.",
          voice: "Add Formula हा फॉर्म उघडतो. फॉर्म्युल्याला नाव, वर्णन आणि प्रकार द्या — value. मग त्याची ओळख आणि व्याप्ती. Formula tag म्हणजे डॅशबोर्ड आणि इतर फॉर्म्युले त्याला बोलावतील ते नाव. एक unit निवडा — litres, kilolitres per hour, percent, pH. आणि मग user group, workspace आणि plant फिल्टर. हे दुहेरी काम करतात: फॉर्म्युला योग्य क्लायंटकडे ठेवतात, आणि क्षणात एडिटर तुम्हाला कोणते सेन्सर टॅग देईल हे ठरवतात.",
        },
        {
          label: 'Frequency', title: 'अँकर + दर N मिनिटांनी',
          body: "<strong>Set Frequency</strong> हे मोडल उघडते: एक <strong>अँकर date-time</strong> आणि <strong>मिनिटांतील अंतराल</strong> निवडा. त्या अँकरपासून इंजिन दर N मिनिटांनी फॉर्म्युला पुनर्गणित करते — लाइव्ह आकड्यासाठी दर मिनिटाला, तासागणिकसाठी दर 60 ला. हेच यादी पेजवरचे <em>Per Minute / Per 60 Minute</em>.",
          voice: "Set Frequency हे छोटे मोडल उघडते. एक अँकर तारीख-वेळ निवडा, आणि मिनिटांतील अंतराल. त्या अँकरपासून, इंजिन दर N मिनिटांनी फॉर्म्युला पुनर्गणित करते — लाइव्ह आकड्यासाठी दर मिनिटाला, तासागणिकसाठी दर साठ मिनिटांनी. यादी पेजवर तुम्ही पाहिलेले Per Minute आणि Per 60 Minute अगदी हेच.",
        },
        {
          label: '@ टॅग', title: '@ ने सेन्सर टॅग बोलवा',
          body: "आता गणित. एडिटरमध्ये <strong>@</strong> टाइप करून टॅगचे नाव सुरू करा — <strong>सेन्सर टॅगचे autocomplete</strong> उघडते, तुमच्या workspace व plant फिल्टरच्या व्याप्तीत. एक निवडा आणि तो लाइव्ह सेन्सर तुमच्या फॉर्म्युल्याचा इनपुट बनतो. गणनेला हवे तितके टॅग वापरा — एकूण आउटलेट फ्लो दोन किंवा अधिक flow meter जोडू शकतो.",
          voice: "आता गणित. एडिटरमध्ये at-sign टाइप करा आणि टॅगचे नाव सुरू करा — सेन्सर टॅगचे autocomplete उघडते, तुम्ही निवडलेल्या workspace आणि plant फिल्टरच्या व्याप्तीत. एक निवडा, आणि तो लाइव्ह सेन्सर तुमच्या फॉर्म्युल्याचा इनपुट बनतो. गणनेला जितके टॅग हवेत तितके वापरा — एकूण आउटलेट फ्लो, उदाहरणार्थ, फक्त दोन किंवा अधिक flow meter ची बेरीज आहे.",
        },
        {
          label: 'चिप्स', title: 'एक्स्प्रेशन चिप्स बनते',
          body: "तुम्ही लिहिता तसे एक्स्प्रेशन <strong>चिप्स</strong> मध्ये बदलते — टॅग, ऑपरेटर, आकडे, कंस, प्रत्येक स्वतःचा टोकन: इथे <code>( LT_EQTdd1_1:DEM_WTP × 100 ) / 70</code>. आणि हे फक्त अंकगणित नाही: एडिटर <strong>HyperFormula</strong> बोलतो — Excel-शैली फंक्शन्स — <strong>IF, AND, AVERAGE, MIN, MAX, FILTER…</strong> — सेन्सर टॅग व त्यांच्या डेटावर स्प्रेडशीटसारखीच चालतात.",
          voice: "तुम्ही लिहिता तसे एक्स्प्रेशन चिप्समध्ये बदलत जाते — टॅग, ऑपरेटर, आकडे, कंस, प्रत्येक स्वतःचा टोकन. इथे: उघडा कंस, level transmitter टॅग, गुणिले शंभर, बंद कंस, भागिले सत्तर. आणि हे फक्त अंकगणित नाही. एडिटर HyperFormula बोलतो, म्हणून Excel-शैली फंक्शन्स — IF, AND, AVERAGE, MIN, MAX, FILTER — थेट सेन्सर टॅग आणि त्यांच्या डेटावर चालतात, अगदी स्प्रेडशीटसारखी.",
          tip: { type: 'tipLabel', text: 'IF आणि AND खऱ्या फॉर्म्युल्यांवर Plant Score धड्यात भेटतील.' },
        },
        {
          label: 'Submit', title: 'भूतकाळ भरा, मग Submit',
          body: "एक शेवटचा निर्णय: <strong>Apply to Historical Data</strong>. टिक करा आणि इंजिन तुमचा फॉर्म्युला <em>आधीच अस्तित्वात असलेल्या डेटावर मागे जाऊन</em> गणित करते — ट्रेंड पहिल्या दिवसापासून, आजपासून नाही. मग <strong>Submit</strong>: फॉर्म्युला लायब्ररीत सामील होतो, स्वतःचा टॅग मिळवतो, आणि वेळापत्रकानुसार पुनर्गणना सुरू करतो.",
          voice: "Submit करण्याआधी एक शेवटचा निर्णय: Apply to Historical Data. टिक करा, आणि इंजिन तुमचा फॉर्म्युला आधीच अस्तित्वात असलेल्या डेटावर मागे जाऊन गणित करते — म्हणजे ट्रेंड पहिल्या दिवसापासून मिळतात, फक्त आजपासून नाही. मग Submit. फॉर्म्युला लायब्ररीत सामील होतो, स्वतःचा टॅग मिळवतो, आणि त्याच्या वेळापत्रकावर पुनर्गणना सुरू करतो.",
          tip: { type: 'upNextLabel', text: 'पुढे: कोणत्याही टॅग चिपवर क्लिक करा — aggregation, time window आणि data completeness हे सर्व Sensor Settings मध्ये.' },
        },
      ],
    },
  },
};

export default lesson;
