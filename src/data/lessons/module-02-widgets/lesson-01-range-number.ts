import type { Lesson } from '../../types';

/**
 * Module 2 · Lesson 1 — Range Number Widget.   Tag: M2.L1
 * Built with the interactive `widget` layout mode (no screenshots): each step
 * drives the recreated RangeNumberWidget into a different state and points the
 * guide cursor at the part being explained.
 */
const lesson: Lesson = {
  id: 'lesson-01-range-number',
  moduleId: 'module-02-widgets',
  lessonNumber: 1,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    // S1 — overview
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Range Number Widget',
      widgetState: { highlight: 'value' },
      cursor: [{ at: 0.1, x: 50, y: 46, click: true }],
    },
    // S2 — sensor tag
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Range Number Widget',
      widgetState: { highlight: 'tag' },
      cursor: [
        { at: 0.15, x: 50, y: 46 },
        { at: 0.4, x: 50, y: 64, click: true },
      ],
    },
    // S3 — aggregation menu open
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Aggregation options',
      widgetState: { aggregationMenu: true, aggregation: 'Average', highlight: 'menu' },
      cursor: [
        { at: 0.08, x: 90, y: 12, click: true },
        { at: 0.5, x: 55, y: 38 },
      ],
    },
    // S4 — respects the dashboard time frame
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Calculated over the dashboard time frame',
      widgetState: { aggregation: 'Average', timeframeLabel: 'Last 24 Hours', highlight: 'timeframe' },
      cursor: [
        { at: 0.3, x: 28, y: 88 },
        { at: 0.7, x: 50, y: 46 },
      ],
    },
    // S5 — footer + recap
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Range Number Widget',
      widgetState: { highlight: 'change' },
      cursor: [
        { at: 0.15, x: 28, y: 88 },
        { at: 0.4, x: 82, y: 88, click: true },
      ],
    },
  ],
  content: {
    en: {
      title: 'The <em>Range Number</em><br>Widget.',
      subtitle:
        "Sometimes a single number tells the whole story. The Range Number widget puts one key reading front and centre — and it's smarter than it looks.",
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'A single number, at a glance',
          body: "The <strong>Range Number</strong> widget displays one data point, big and clear. Here it's showing <strong>STP Energy Consumption</strong> — perfect for the readings you want to check in a single glance, without studying a chart.",
          voice: "Let's open up our first widget. This is the Range Number widget. Its job is simple — it shows you one important number, big and clear. Here, it's showing S T P energy consumption. It's perfect for the kind of reading you want to check at a single glance, without having to study a chart.",
        },
        {
          label: 'Sensor Tag', title: 'One sensor tag drives it',
          body: "Every Range Number widget is powered by exactly one <strong>sensor tag</strong> — the data source plotted on it. That little <strong>STP</strong> label tells you which tag is feeding this number. Plot a different tag, and the widget shows a different reading.",
          voice: "So where does this number come from? Every Range Number widget is driven by exactly one sensor tag. A sensor tag is the data source you plot onto the widget. See that small S T P label? That tells you which tag is feeding this number. If you plotted a different tag, the widget would simply show a different reading.",
          tip: { type: 'rememberLabel', text: 'One widget, one tag. To show another reading, add another widget.' },
        },
        {
          label: 'Aggregation', title: 'Choose how the number is calculated',
          body: "The widget doesn't just show the raw reading. You pick an <strong>aggregation</strong> — how the data is summarised: <strong>Raw</strong> (the current value), <strong>Average</strong>, <strong>Maximum</strong>, <strong>Minimum</strong>, <strong>Last active value</strong>, <strong>Cumulative</strong>, or <strong>Time-weighted sum</strong>.",
          voice: "Now here's where it gets clever. The widget doesn't have to show the raw reading. You choose an aggregation — that's how the data gets summarised. You can pick raw, which is the current value. Or average. Maximum. Minimum. Last active value. Cumulative. Or time-weighted sum. Whichever makes the most sense for that reading.",
          tip: { type: 'tipLabel', text: 'Pick the aggregation that matches your question — average for a typical value, maximum for a peak.' },
        },
        {
          label: 'Time Frame', title: "It respects the dashboard's time frame",
          body: "Here's the key idea: the widget always calculates over the <strong>dashboard's selected time frame</strong>. Set the dashboard to <em>Last 24 Hours</em> with the <strong>Average</strong> aggregation, and the widget shows the average of that tag across the past 24 hours. Change the time frame, and the number recalculates instantly.",
          voice: "And here's the most important idea of all. The widget always calculates over the dashboard's selected time frame. Let me give you an example. Say the aggregation is set to average, the X Y Z sensor tag is plotted on it, and the dashboard's time frame is the last 24 hours. The widget will show the average value of that tag across the past 24 hours. Change the dashboard's time frame, and the number recalculates instantly, all on its own.",
          tip: { type: 'rememberLabel', text: 'Aggregation decides how the value is calculated. The dashboard time frame decides the window it is calculated over.' },
        },
        {
          label: 'Footer', title: 'Reading the footer',
          body: "At the bottom, the widget shows the <strong>time window</strong> the value covers — a from and a to timestamp. The small <strong>percentage</strong> compares the current value against the previous equivalent period, so you can spot a rise or a fall at a glance.",
          voice: "Finally, look at the footer. It shows the time window the value covers — a from and a to timestamp, matching your dashboard. And that small percentage on the right compares the current value against the previous period, so you can spot a rise or a fall at a glance. And that's the Range Number widget. One tag, one aggregation, always respecting your time frame. In the next lesson, we'll look at another widget.",
          tip: { type: 'upNextLabel', text: "Next: we'll explore another widget type." },
        },
      ],
    },
    hi: {
      title: 'रेंज <em>नंबर</em><br>विजेट।',
      subtitle:
        'कभी-कभी एक ही संख्या पूरी कहानी बता देती है। रेंज नंबर विजेट एक मुख्य रीडिंग को सामने रखता है — और यह दिखने से कहीं ज़्यादा स्मार्ट है।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'एक नज़र में एक संख्या',
          body: '<strong>रेंज नंबर</strong> विजेट एक डेटा बिंदु को बड़ा और स्पष्ट दिखाता है। यहाँ यह <strong>STP ऊर्जा खपत</strong> दिखा रहा है — उन रीडिंग्स के लिए उपयुक्त जिन्हें आप चार्ट पढ़े बिना एक नज़र में देखना चाहते हैं।',
          voice: 'चलिए अपना पहला विजेट खोलते हैं। यह रेंज नंबर विजेट है। इसका काम सरल है — यह आपको एक महत्वपूर्ण संख्या बड़ी और स्पष्ट रूप से दिखाता है। यहाँ यह एस टी पी ऊर्जा खपत दिखा रहा है। यह उन रीडिंग्स के लिए आदर्श है जिन्हें आप चार्ट पढ़े बिना, एक ही नज़र में देखना चाहते हैं।',
        },
        {
          label: 'सेंसर टैग', title: 'इसे एक सेंसर टैग चलाता है',
          body: 'हर रेंज नंबर विजेट केवल एक <strong>सेंसर टैग</strong> से चलता है — उस पर प्लॉट किया गया डेटा स्रोत। वह छोटा <strong>STP</strong> लेबल बताता है कि कौन सा टैग इस संख्या को फीड कर रहा है। दूसरा टैग प्लॉट करें, और विजेट दूसरी रीडिंग दिखाएगा।',
          voice: 'तो यह संख्या कहाँ से आती है? हर रेंज नंबर विजेट केवल एक सेंसर टैग से चलता है। सेंसर टैग वह डेटा स्रोत है जिसे आप विजेट पर प्लॉट करते हैं। वह छोटा एस टी पी लेबल देखें? वह बताता है कि कौन सा टैग इस संख्या को फीड कर रहा है। अगर आप कोई दूसरा टैग प्लॉट करते, तो विजेट बस कोई दूसरी रीडिंग दिखाता।',
          tip: { type: 'rememberLabel', text: 'एक विजेट, एक टैग। दूसरी रीडिंग दिखाने के लिए, दूसरा विजेट जोड़ें।' },
        },
        {
          label: 'एकत्रीकरण', title: 'चुनें कि संख्या कैसे गणना हो',
          body: 'विजेट सिर्फ़ कच्ची रीडिंग नहीं दिखाता। आप एक <strong>एकत्रीकरण</strong> चुनते हैं — डेटा को कैसे संक्षेपित करें: <strong>कच्चा</strong> (वर्तमान मान), <strong>औसत</strong>, <strong>अधिकतम</strong>, <strong>न्यूनतम</strong>, <strong>अंतिम सक्रिय मान</strong>, <strong>संचयी</strong>, या <strong>समय-भारित योग</strong>।',
          voice: 'अब यहाँ बात दिलचस्प होती है। विजेट को कच्ची रीडिंग दिखाने की ज़रूरत नहीं है। आप एक एकत्रीकरण चुनते हैं — यानी डेटा कैसे संक्षेपित होगा। आप कच्चा मान चुन सकते हैं, जो वर्तमान मान है। या औसत। अधिकतम। न्यूनतम। अंतिम सक्रिय मान। संचयी। या समय-भारित योग। जो भी उस रीडिंग के लिए सबसे उपयुक्त हो।',
          tip: { type: 'tipLabel', text: 'वही एकत्रीकरण चुनें जो आपके प्रश्न से मेल खाता हो — सामान्य मान के लिए औसत, शिखर के लिए अधिकतम।' },
        },
        {
          label: 'समय अवधि', title: 'यह डैशबोर्ड की समय अवधि का पालन करता है',
          body: 'मुख्य बात यह है: विजेट हमेशा <strong>डैशबोर्ड की चुनी हुई समय अवधि</strong> पर गणना करता है। डैशबोर्ड को <em>पिछले 24 घंटे</em> और <strong>औसत</strong> एकत्रीकरण पर सेट करें, और विजेट पिछले 24 घंटों में उस टैग का औसत दिखाएगा। समय अवधि बदलें, और संख्या तुरंत फिर से गणना कर लेती है।',
          voice: 'और अब सबसे महत्वपूर्ण बात। विजेट हमेशा डैशबोर्ड की चुनी हुई समय अवधि पर गणना करता है। एक उदाहरण लेते हैं। मान लीजिए एकत्रीकरण औसत पर सेट है, एक्स वाई ज़ेड सेंसर टैग उस पर प्लॉट किया गया है, और डैशबोर्ड की समय अवधि पिछले 24 घंटे है। विजेट पिछले 24 घंटों में उस टैग का औसत मान दिखाएगा। डैशबोर्ड की समय अवधि बदलें, और संख्या तुरंत खुद-ब-खुद फिर से गणना कर लेती है।',
          tip: { type: 'rememberLabel', text: 'एकत्रीकरण तय करता है कि मान कैसे गणना हो। डैशबोर्ड की समय अवधि तय करती है कि किस अवधि पर।' },
        },
        {
          label: 'फुटर', title: 'फुटर को पढ़ना',
          body: 'नीचे, विजेट वह <strong>समय अवधि</strong> दिखाता है जिसे मान कवर करता है — एक "से" और "तक" समय। छोटा <strong>प्रतिशत</strong> वर्तमान मान की तुलना पिछली समान अवधि से करता है, ताकि आप एक नज़र में वृद्धि या गिरावट देख सकें।',
          voice: 'अंत में, फुटर देखें। यह वह समय अवधि दिखाता है जिसे मान कवर करता है — एक से और एक तक का समय, जो आपके डैशबोर्ड से मेल खाता है। और दाईं ओर वह छोटा प्रतिशत वर्तमान मान की तुलना पिछली अवधि से करता है, ताकि आप एक नज़र में वृद्धि या गिरावट देख सकें। और यही है रेंज नंबर विजेट। एक टैग, एक एकत्रीकरण, हमेशा आपकी समय अवधि का पालन करते हुए। अगले पाठ में, हम एक और विजेट देखेंगे।',
          tip: { type: 'upNextLabel', text: 'आगे: हम एक और विजेट प्रकार देखेंगे।' },
        },
      ],
    },
    ta: {
      title: 'ரேஞ்ச் <em>எண்</em><br>விட்ஜெட்.',
      subtitle:
        'சில நேரங்களில் ஒரே எண் முழுக் கதையையும் சொல்லிவிடும். ரேஞ்ச் எண் விட்ஜெட் ஒரு முக்கிய அளவீட்டை முன்னணியில் வைக்கிறது — பார்ப்பதை விட இது புத்திசாலித்தனமானது.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'ஒரே பார்வையில் ஒரு எண்',
          body: '<strong>ரேஞ்ச் எண்</strong> விட்ஜெட் ஒரு தரவுப் புள்ளியை பெரிதாகவும் தெளிவாகவும் காட்டுகிறது. இங்கே இது <strong>STP ஆற்றல் நுகர்வை</strong> காட்டுகிறது — வரைபடத்தைப் படிக்காமல் ஒரே பார்வையில் பார்க்க விரும்பும் அளவீடுகளுக்கு ஏற்றது.',
          voice: 'நமது முதல் விட்ஜெட்டைத் திறப்போம். இது ரேஞ்ச் எண் விட்ஜெட். இதன் வேலை எளிமையானது — இது உங்களுக்கு ஒரு முக்கியமான எண்ணை பெரிதாகவும் தெளிவாகவும் காட்டுகிறது. இங்கே இது எஸ் டி பி ஆற்றல் நுகர்வைக் காட்டுகிறது. வரைபடத்தைப் படிக்காமல், ஒரே பார்வையில் நீங்கள் பார்க்க விரும்பும் அளவீடுகளுக்கு இது ஏற்றது.',
        },
        {
          label: 'சென்சார் டேக்', title: 'ஒரு சென்சார் டேக் இதை இயக்குகிறது',
          body: 'ஒவ்வொரு ரேஞ்ச் எண் விட்ஜெட்டும் ஒரே ஒரு <strong>சென்சார் டேக்</strong> மூலம் இயக்கப்படுகிறது — அதில் வரையப்பட்ட தரவு மூலம். அந்த சிறிய <strong>STP</strong> லேபிள் எந்த டேக் இந்த எண்ணை வழங்குகிறது என்பதைக் கூறுகிறது.',
          voice: 'இந்த எண் எங்கிருந்து வருகிறது? ஒவ்வொரு ரேஞ்ச் எண் விட்ஜெட்டும் ஒரே ஒரு சென்சார் டேக் மூலம் இயக்கப்படுகிறது. சென்சார் டேக் என்பது விட்ஜெட்டில் நீங்கள் வரையும் தரவு மூலமாகும். அந்த சிறிய எஸ் டி பி லேபிளைப் பாருங்கள். எந்த டேக் இந்த எண்ணை வழங்குகிறது என்பதை அது கூறுகிறது. வேறு டேக்கை வரைந்தால், விட்ஜெட் வேறு அளவீட்டைக் காட்டும்.',
          tip: { type: 'rememberLabel', text: 'ஒரு விட்ஜெட், ஒரு டேக். வேறு அளவீட்டைக் காட்ட, இன்னொரு விட்ஜெட்டைச் சேர்க்கவும்.' },
        },
        {
          label: 'திரட்டல்', title: 'எண் எப்படிக் கணக்கிடப்படுகிறது என்பதைத் தேர்வு செய்யுங்கள்',
          body: 'விட்ஜெட் வெறும் மூல அளவீட்டைக் காட்டுவதில்லை. நீங்கள் ஒரு <strong>திரட்டலைத்</strong> தேர்வு செய்கிறீர்கள்: <strong>மூலம்</strong> (தற்போதைய மதிப்பு), <strong>சராசரி</strong>, <strong>அதிகபட்சம்</strong>, <strong>குறைந்தபட்சம்</strong>, <strong>கடைசி செயலில் மதிப்பு</strong>, <strong>திரட்டப்பட்டது</strong>, அல்லது <strong>நேர-எடையிட்ட கூட்டுத்தொகை</strong>.',
          voice: 'இப்போது இது சுவாரஸ்யமாகிறது. விட்ஜெட் மூல அளவீட்டைக் காட்ட வேண்டிய அவசியமில்லை. நீங்கள் ஒரு திரட்டலைத் தேர்வு செய்கிறீர்கள் — அதாவது தரவு எப்படிச் சுருக்கப்படுகிறது. மூலம், அதாவது தற்போதைய மதிப்பு. அல்லது சராசரி. அதிகபட்சம். குறைந்தபட்சம். கடைசி செயலில் மதிப்பு. திரட்டப்பட்டது. அல்லது நேர-எடையிட்ட கூட்டுத்தொகை. அந்த அளவீட்டுக்கு எது பொருத்தமோ அதை.',
          tip: { type: 'tipLabel', text: 'உங்கள் கேள்விக்கு ஏற்ற திரட்டலைத் தேர்வு செய்யுங்கள் — வழக்கமான மதிப்புக்கு சராசரி, உச்சத்திற்கு அதிகபட்சம்.' },
        },
        {
          label: 'கால அளவு', title: 'இது டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது',
          body: 'முக்கியக் கருத்து இதுதான்: விட்ஜெட் எப்போதும் <strong>டாஷ்போர்டின் தேர்ந்தெடுக்கப்பட்ட கால அளவில்</strong> கணக்கிடுகிறது. டாஷ்போர்டை <em>கடந்த 24 மணி</em> மற்றும் <strong>சராசரி</strong> திரட்டலில் அமைத்தால், விட்ஜெட் கடந்த 24 மணிநேரத்தில் அந்த டேக்கின் சராசரியைக் காட்டும்.',
          voice: 'இப்போது மிக முக்கியமான கருத்து. விட்ஜெட் எப்போதும் டாஷ்போர்டின் தேர்ந்தெடுக்கப்பட்ட கால அளவில் கணக்கிடுகிறது. ஒரு உதாரணம் தருகிறேன். திரட்டல் சராசரியாக அமைக்கப்பட்டுள்ளது, எக்ஸ் வை இசட் சென்சார் டேக் வரையப்பட்டுள்ளது, டாஷ்போர்டின் கால அளவு கடந்த 24 மணி என்று வைத்துக்கொள்வோம். விட்ஜெட் கடந்த 24 மணிநேரத்தில் அந்த டேக்கின் சராசரி மதிப்பைக் காட்டும். டாஷ்போர்டின் கால அளவை மாற்றினால், எண் உடனடியாகவே தானாகவே மீண்டும் கணக்கிடப்படும்.',
          tip: { type: 'rememberLabel', text: 'திரட்டல் மதிப்பு எப்படிக் கணக்கிடப்படுகிறது என்பதை முடிவு செய்கிறது. கால அளவு எந்தக் காலத்தில் என்பதை முடிவு செய்கிறது.' },
        },
        {
          label: 'அடிக்குறிப்பு', title: 'அடிக்குறிப்பைப் படித்தல்',
          body: 'கீழே, விட்ஜெட் மதிப்பு உள்ளடக்கிய <strong>கால அளவைக்</strong> காட்டுகிறது — ஒரு "முதல்" மற்றும் "வரை" நேரம். சிறிய <strong>சதவீதம்</strong> தற்போதைய மதிப்பை முந்தைய காலத்துடன் ஒப்பிடுகிறது, இதனால் உயர்வையோ வீழ்ச்சியையோ ஒரே பார்வையில் காணலாம்.',
          voice: 'இறுதியாக, அடிக்குறிப்பைப் பாருங்கள். மதிப்பு உள்ளடக்கிய கால அளவை இது காட்டுகிறது — உங்கள் டாஷ்போர்டுடன் பொருந்தும் முதல் மற்றும் வரை நேரம். வலதுபுறத்தில் உள்ள அந்த சிறிய சதவீதம் தற்போதைய மதிப்பை முந்தைய காலத்துடன் ஒப்பிடுகிறது, இதனால் உயர்வையோ வீழ்ச்சியையோ ஒரே பார்வையில் காணலாம். இதுதான் ரேஞ்ச் எண் விட்ஜெட். ஒரு டேக், ஒரு திரட்டல், எப்போதும் உங்கள் கால அளவைப் பின்பற்றுகிறது. அடுத்த பாடத்தில், இன்னொரு விட்ஜெட்டைப் பார்ப்போம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: இன்னொரு விட்ஜெட் வகையைப் பார்ப்போம்.' },
        },
      ],
    },
    mr: {
      title: 'रेंज <em>नंबर</em><br>विजेट.',
      subtitle:
        'कधी कधी एकच संख्या संपूर्ण कहाणी सांगते. रेंज नंबर विजेट एक महत्त्वाची रीडिंग समोर ठेवतो — आणि तो दिसतो त्यापेक्षा हुशार आहे.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'एका दृष्टीक्षेपात एक संख्या',
          body: '<strong>रेंज नंबर</strong> विजेट एक डेटा बिंदू मोठ्या आणि स्पष्टपणे दाखवतो. इथे तो <strong>STP ऊर्जा वापर</strong> दाखवत आहे — चार्ट न वाचता एका दृष्टीक्षेपात पाहायच्या रीडिंगसाठी योग्य.',
          voice: 'चला आपले पहिले विजेट उघडूया. हे रेंज नंबर विजेट आहे. याचे काम सोपे आहे — ते तुम्हाला एक महत्त्वाची संख्या मोठ्या आणि स्पष्टपणे दाखवते. इथे ते एस टी पी ऊर्जा वापर दाखवत आहे. चार्ट न वाचता, एका दृष्टीक्षेपात तुम्हाला पाहायच्या असलेल्या रीडिंगसाठी हे आदर्श आहे.',
        },
        {
          label: 'सेन्सर टॅग', title: 'एक सेन्सर टॅग हे चालवतो',
          body: 'प्रत्येक रेंज नंबर विजेट फक्त एका <strong>सेन्सर टॅग</strong>ने चालतो — त्यावर प्लॉट केलेला डेटा स्रोत. तो छोटा <strong>STP</strong> लेबल कोणता टॅग ही संख्या पुरवत आहे ते सांगतो. दुसरा टॅग प्लॉट करा, आणि विजेट दुसरी रीडिंग दाखवेल.',
          voice: 'मग ही संख्या कुठून येते? प्रत्येक रेंज नंबर विजेट फक्त एका सेन्सर टॅगने चालतो. सेन्सर टॅग म्हणजे विजेटवर तुम्ही प्लॉट करता तो डेटा स्रोत. तो छोटा एस टी पी लेबल पाहा? कोणता टॅग ही संख्या पुरवत आहे ते तो सांगतो. तुम्ही दुसरा टॅग प्लॉट केला, तर विजेट दुसरी रीडिंग दाखवेल.',
          tip: { type: 'rememberLabel', text: 'एक विजेट, एक टॅग. दुसरी रीडिंग दाखवण्यासाठी, दुसरे विजेट जोडा.' },
        },
        {
          label: 'एकत्रीकरण', title: 'संख्या कशी मोजली जाते ते निवडा',
          body: 'विजेट फक्त कच्ची रीडिंग दाखवत नाही. तुम्ही एक <strong>एकत्रीकरण</strong> निवडता: <strong>कच्चे</strong> (सध्याचे मूल्य), <strong>सरासरी</strong>, <strong>कमाल</strong>, <strong>किमान</strong>, <strong>शेवटचे सक्रिय मूल्य</strong>, <strong>संचयी</strong>, किंवा <strong>वेळ-भारित बेरीज</strong>.',
          voice: 'आता इथे गंमत आहे. विजेटला कच्ची रीडिंग दाखवण्याची गरज नाही. तुम्ही एक एकत्रीकरण निवडता — म्हणजे डेटा कसा सारांशित होतो. कच्चे, म्हणजे सध्याचे मूल्य. किंवा सरासरी. कमाल. किमान. शेवटचे सक्रिय मूल्य. संचयी. किंवा वेळ-भारित बेरीज. त्या रीडिंगसाठी जे योग्य असेल ते.',
          tip: { type: 'tipLabel', text: 'तुमच्या प्रश्नाशी जुळणारे एकत्रीकरण निवडा — सामान्य मूल्यासाठी सरासरी, शिखरासाठी कमाल.' },
        },
        {
          label: 'वेळ अवधी', title: 'तो डॅशबोर्डच्या वेळ अवधीचे पालन करतो',
          body: 'मुख्य कल्पना अशी: विजेट नेहमी <strong>डॅशबोर्डच्या निवडलेल्या वेळ अवधी</strong>वर मोजतो. डॅशबोर्ड <em>शेवटचे 24 तास</em> आणि <strong>सरासरी</strong> एकत्रीकरणावर सेट करा, आणि विजेट गेल्या 24 तासांतील त्या टॅगची सरासरी दाखवेल.',
          voice: 'आणि आता सर्वात महत्त्वाची कल्पना. विजेट नेहमी डॅशबोर्डच्या निवडलेल्या वेळ अवधीवर मोजतो. एक उदाहरण देतो. समजा एकत्रीकरण सरासरीवर सेट आहे, एक्स वाय झेड सेन्सर टॅग त्यावर प्लॉट केला आहे, आणि डॅशबोर्डची वेळ अवधी शेवटचे 24 तास आहे. विजेट गेल्या 24 तासांतील त्या टॅगचे सरासरी मूल्य दाखवेल. डॅशबोर्डची वेळ अवधी बदला, आणि संख्या लगेच आपोआप पुन्हा मोजली जाते.',
          tip: { type: 'rememberLabel', text: 'एकत्रीकरण मूल्य कसे मोजले जाते ते ठरवते. वेळ अवधी कोणत्या कालावधीवर ते ठरवते.' },
        },
        {
          label: 'तळटीप', title: 'तळटीप वाचणे',
          body: 'खाली, विजेट मूल्य व्यापणारी <strong>वेळ अवधी</strong> दाखवतो — एक "पासून" आणि "पर्यंत" वेळ. छोटी <strong>टक्केवारी</strong> सध्याच्या मूल्याची तुलना मागील समान कालावधीशी करते, जेणेकरून वाढ किंवा घट एका दृष्टीक्षेपात दिसेल.',
          voice: 'शेवटी, तळटीप पाहा. मूल्य व्यापणारी वेळ अवधी ती दाखवते — तुमच्या डॅशबोर्डशी जुळणारी पासून आणि पर्यंत वेळ. आणि उजवीकडची ती छोटी टक्केवारी सध्याच्या मूल्याची तुलना मागील कालावधीशी करते, जेणेकरून वाढ किंवा घट तुम्हाला एका दृष्टीक्षेपात दिसेल. आणि हेच आहे रेंज नंबर विजेट. एक टॅग, एक एकत्रीकरण, नेहमी तुमच्या वेळ अवधीचे पालन करत. पुढच्या पाठात, आपण आणखी एक विजेट पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: आपण आणखी एक विजेट प्रकार पाहू.' },
        },
      ],
    },
  },
};

export default lesson;
