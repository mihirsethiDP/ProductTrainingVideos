import type { Lesson } from '../../types';

/**
 * Module 2 · Lesson 2 — Gauge Widget (+ thresholds).   Tag: M2.L2
 * Uses the interactive `gauge` widget (no-threshold fill, and threshold bands)
 * plus a `rangeNumber` step to show thresholds work on the Number widget too.
 */
const lesson: Lesson = {
  id: 'lesson-02-gauge',
  moduleId: 'module-02-widgets',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    // S1 — overview (gauge, no thresholds, progress fill)
    {
      mode: 'widget', widget: 'gauge', caption: 'Gauge Widget',
      widgetState: {
        accent: 'teal', title: 'MBR-1 Flux (Ref. 20-30 LMH)', value: '42.08',
        min: 0, max: 100, unitTag: 'Amity University Noida',
        fromLabel: 'Jun 16 | 00:00', toLabel: 'Jun 16 | 23:59', highlight: 'value',
      },
      cursor: [{ at: 0.1, x: 50, y: 52, click: true }],
    },
    // S2 — the scale (min/max)
    {
      mode: 'widget', widget: 'gauge', caption: 'A minimum and a maximum',
      widgetState: {
        accent: 'teal', title: 'MBR-1 Flux (Ref. 20-30 LMH)', value: '42.08',
        min: 0, max: 100, unitTag: 'Amity University Noida',
        fromLabel: 'Jun 16 | 00:00', toLabel: 'Jun 16 | 23:59', highlight: 'scale',
      },
      cursor: [
        { at: 0.25, x: 20, y: 50 },
        { at: 0.6, x: 80, y: 50 },
      ],
    },
    // S3 — the reading on the arc
    {
      mode: 'widget', widget: 'gauge', caption: 'Where the reading sits',
      widgetState: {
        accent: 'teal', title: 'MBR-1 Flux (Ref. 20-30 LMH)', value: '42.08',
        min: 0, max: 100, unitTag: 'Amity University Noida',
        fromLabel: 'Jun 16 | 00:00', toLabel: 'Jun 16 | 23:59', highlight: 'value',
      },
      cursor: [{ at: 0.3, x: 42, y: 34 }],
    },
    // S4 — thresholds on the gauge
    {
      mode: 'widget', widget: 'gauge', caption: 'Good · Warning · Critical',
      widgetState: {
        accent: 'purple', title: 'STP Efficiency (%)', value: '78.48', unit: '%',
        min: 0, max: 100,
        thresholds: [
          { from: 0, to: 50, level: 'critical' },
          { from: 50, to: 75, level: 'warning' },
          { from: 75, to: 100, level: 'good' },
        ],
        unitTag: 'STP', fromLabel: 'Jun 16 | 18:46', toLabel: 'Jun 17 | 18:46',
        changePct: '0', highlight: 'thresholds',
      },
      cursor: [
        { at: 0.25, x: 30, y: 38 },
        { at: 0.55, x: 70, y: 36 },
        { at: 0.8, x: 60, y: 44 },
      ],
    },
    // S5 — thresholds on the number widget too
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Thresholds on the Number widget',
      widgetState: {
        accent: 'pink', title: 'MBR Flux (Ref. 20-30 LMH)- Phase-1', value: '36.28',
        min: 0, max: 50,
        thresholds: [
          { from: 0, to: 20, level: 'critical' },
          { from: 20, to: 30, level: 'good' },
          { from: 30, to: 50, level: 'critical' },
        ],
        unitTag: 'Adani Ahmedabad', fromLabel: 'Jun 16 | 18:46', toLabel: 'Jun 17 | 18:46',
        changePct: '0', highlight: 'thresholds',
      },
      cursor: [
        { at: 0.3, x: 50, y: 60 },
        { at: 0.6, x: 50, y: 46 },
      ],
    },
  ],
  content: {
    en: {
      title: 'The <em>Gauge</em><br>Widget.',
      subtitle:
        'Same engine as the Number widget — one tag, one aggregation, your time frame — but now you can see your reading against a scale, at a glance.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'A reading on a scale',
          body: "The <strong>Gauge</strong> widget works exactly like the Number widget — one <strong>sensor tag</strong>, one <strong>aggregation</strong>, respecting the <strong>dashboard time frame</strong>. What it adds is a visual <strong>scale</strong>, so you instantly see where the reading sits.",
          voice: "Our next widget is the Gauge. Here's the good news — it works exactly like the Range Number widget we just saw. One sensor tag, one aggregation, and it always respects your dashboard's time frame. What the gauge adds is a visual scale. Instead of just a number, you see where that reading sits along a range, at a single glance.",
        },
        {
          label: 'Scale', title: 'A minimum and a maximum',
          body: "Every gauge has a <strong>scale</strong> — a minimum and a maximum that define the arc. Here the scale runs from <strong>0 to 100</strong>. The left end of the arc is the minimum, the right end is the maximum.",
          voice: "Let's start with the scale. Every gauge has a minimum and a maximum, and together they define the arc. In this example, the scale runs from zero to one hundred. The left end of the arc is your minimum, the right end is your maximum, and everything in between is the range your reading can fall into.",
          tip: { type: 'tipLabel', text: 'Set the min and max to the sensible range for your reading — the gauge is easiest to read when the value usually sits in the middle.' },
        },
        {
          label: 'The Reading', title: 'Where the reading sits',
          body: "The sensor reading is plotted as a marker on the arc. Here the value is <strong>42.08</strong>, so the marker sits just under halfway between 0 and 100. The fill shows how far along the scale you are.",
          voice: "Now, the reading itself. The gauge takes your value — here it's forty two point zero eight — and places it as a marker on the arc. Because the scale is zero to one hundred, forty two sits just under halfway. The filled part of the arc shows how far along the scale your reading has reached. One look, and you know.",
        },
        {
          label: 'Thresholds', title: 'Good, warning & critical',
          body: "On both the Gauge and the Number widget, you can configure <strong>thresholds</strong> — bands for <strong>good</strong>, <strong>warning</strong>, and <strong>critical</strong>. The arc paints each band in colour — green, amber, red. Here <strong>STP Efficiency</strong> reads 78.48%, sitting in the healthy green band.",
          voice: "Here's where the gauge really earns its place. On both the gauge and the number widget, you can set up thresholds. You define bands — good, warning, and critical. The gauge then paints each band in colour. Green for good, amber for warning, and red for critical. So the instant a reading drifts toward the critical zone, you can see it without reading the number at all. Here, S T P efficiency is seventy eight point five percent, sitting comfortably in the green, good band.",
          tip: { type: 'rememberLabel', text: 'Thresholds turn a number into a signal — green, amber or red — so problems jump out before you have even read the value.' },
        },
        {
          label: 'On Numbers Too', title: 'Thresholds on the Number widget',
          body: "The same thresholds work on the <strong>Number</strong> widget. Below the value, a coloured bar marks where the reading falls, and the number itself turns <strong>red</strong> in a critical band. Here <strong>MBR Flux</strong> reads 36.28 — above the healthy range, so it shows red.",
          voice: "And remember, thresholds aren't just for gauges. The number widget uses them too. Below the value, a coloured bar shows where the reading falls between your bands. And the number itself changes colour — turning red when it lands in a critical band. Here, M B R flux reads thirty six point two eight. That's above the healthy range for this sensor, so the widget flags it in red. That's the gauge widget, and thresholds across both widgets. In the next lesson, we'll look at another widget.",
          tip: { type: 'upNextLabel', text: "Next: we'll explore another widget type." },
        },
      ],
    },
    hi: {
      title: '<em>गेज</em><br>विजेट।',
      subtitle:
        'नंबर विजेट जैसा ही इंजन — एक टैग, एक एकत्रीकरण, आपकी समय अवधि — लेकिन अब आप अपनी रीडिंग को एक स्केल पर एक नज़र में देख सकते हैं।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'स्केल पर एक रीडिंग',
          body: '<strong>गेज</strong> विजेट बिल्कुल नंबर विजेट की तरह काम करता है — एक <strong>सेंसर टैग</strong>, एक <strong>एकत्रीकरण</strong>, और <strong>डैशबोर्ड की समय अवधि</strong> का पालन। यह एक दृश्य <strong>स्केल</strong> जोड़ता है, ताकि आप तुरंत देख सकें कि रीडिंग कहाँ है।',
          voice: 'हमारा अगला विजेट है गेज। अच्छी खबर यह है — यह बिल्कुल उसी रेंज नंबर विजेट की तरह काम करता है जो हमने अभी देखा। एक सेंसर टैग, एक एकत्रीकरण, और यह हमेशा आपके डैशबोर्ड की समय अवधि का पालन करता है। गेज जो जोड़ता है वह है एक दृश्य स्केल। सिर्फ़ एक संख्या के बजाय, आप देखते हैं कि वह रीडिंग एक रेंज पर कहाँ बैठती है, एक ही नज़र में।',
        },
        {
          label: 'स्केल', title: 'एक न्यूनतम और एक अधिकतम',
          body: 'हर गेज में एक <strong>स्केल</strong> होता है — एक न्यूनतम और एक अधिकतम जो आर्क को परिभाषित करते हैं। यहाँ स्केल <strong>0 से 100</strong> तक चलता है। आर्क का बायाँ सिरा न्यूनतम है, दायाँ सिरा अधिकतम।',
          voice: 'स्केल से शुरू करते हैं। हर गेज में एक न्यूनतम और एक अधिकतम होता है, और मिलकर वे आर्क को परिभाषित करते हैं। इस उदाहरण में, स्केल शून्य से सौ तक चलता है। आर्क का बायाँ सिरा आपका न्यूनतम है, दायाँ सिरा आपका अधिकतम, और बीच में सब कुछ वह रेंज है जिसमें आपकी रीडिंग आ सकती है।',
          tip: { type: 'tipLabel', text: 'न्यूनतम और अधिकतम को अपनी रीडिंग की उचित रेंज पर सेट करें — गेज तब सबसे आसान होता है जब मान आमतौर पर बीच में रहे।' },
        },
        {
          label: 'रीडिंग', title: 'रीडिंग कहाँ बैठती है',
          body: 'सेंसर रीडिंग को आर्क पर एक मार्कर के रूप में दिखाया जाता है। यहाँ मान <strong>42.08</strong> है, इसलिए मार्कर 0 और 100 के बीच आधे से थोड़ा कम पर बैठता है। फिल दिखाता है कि आप स्केल पर कितनी दूर हैं।',
          voice: 'अब, रीडिंग खुद। गेज आपके मान को लेता है — यहाँ यह बयालीस दशमलव शून्य आठ है — और उसे आर्क पर एक मार्कर के रूप में रखता है। चूँकि स्केल शून्य से सौ है, बयालीस आधे से थोड़ा कम पर बैठता है। आर्क का भरा हुआ हिस्सा दिखाता है कि आपकी रीडिंग स्केल पर कितनी दूर पहुँची है। एक नज़र, और आप जान जाते हैं।',
        },
        {
          label: 'थ्रेशोल्ड', title: 'अच्छा, चेतावनी और गंभीर',
          body: 'गेज और नंबर दोनों विजेट पर, आप <strong>थ्रेशोल्ड</strong> कॉन्फ़िगर कर सकते हैं — <strong>अच्छा</strong>, <strong>चेतावनी</strong>, और <strong>गंभीर</strong> के लिए बैंड। आर्क हर बैंड को रंग में रंगता है — हरा, पीला, लाल। यहाँ <strong>STP दक्षता</strong> 78.48% है, स्वस्थ हरे बैंड में।',
          voice: 'यहाँ गेज वास्तव में अपनी जगह बनाता है। गेज और नंबर दोनों विजेट पर, आप थ्रेशोल्ड सेट कर सकते हैं। आप बैंड परिभाषित करते हैं — अच्छा, चेतावनी, और गंभीर। फिर गेज हर बैंड को रंग में रंगता है। अच्छे के लिए हरा, चेतावनी के लिए पीला, और गंभीर के लिए लाल। तो जैसे ही कोई रीडिंग गंभीर ज़ोन की ओर बढ़ती है, आप उसे संख्या पढ़े बिना ही देख सकते हैं। यहाँ, एस टी पी दक्षता अठहत्तर दशमलव पाँच प्रतिशत है, आराम से हरे, अच्छे बैंड में।',
          tip: { type: 'rememberLabel', text: 'थ्रेशोल्ड एक संख्या को संकेत में बदल देते हैं — हरा, पीला या लाल — ताकि मान पढ़ने से पहले ही समस्याएँ सामने आ जाएँ।' },
        },
        {
          label: 'नंबर पर भी', title: 'नंबर विजेट पर थ्रेशोल्ड',
          body: 'वही थ्रेशोल्ड <strong>नंबर</strong> विजेट पर भी काम करते हैं। मान के नीचे, एक रंगीन पट्टी दिखाती है कि रीडिंग कहाँ है, और गंभीर बैंड में संख्या स्वयं <strong>लाल</strong> हो जाती है। यहाँ <strong>MBR Flux</strong> 36.28 है — स्वस्थ रेंज से ऊपर, इसलिए लाल दिखता है।',
          voice: 'और याद रखें, थ्रेशोल्ड सिर्फ़ गेज के लिए नहीं हैं। नंबर विजेट भी इन्हें उपयोग करता है। मान के नीचे, एक रंगीन पट्टी दिखाती है कि रीडिंग आपके बैंड के बीच कहाँ है। और संख्या खुद रंग बदलती है — गंभीर बैंड में आने पर लाल हो जाती है। यहाँ, एम बी आर फ्लक्स छत्तीस दशमलव दो आठ है। यह इस सेंसर की स्वस्थ रेंज से ऊपर है, इसलिए विजेट इसे लाल में दिखाता है। यह था गेज विजेट, और दोनों विजेट पर थ्रेशोल्ड। अगले पाठ में, हम एक और विजेट देखेंगे।',
          tip: { type: 'upNextLabel', text: 'आगे: हम एक और विजेट प्रकार देखेंगे।' },
        },
      ],
    },
    ta: {
      title: '<em>கேஜ்</em><br>விட்ஜெட்.',
      subtitle:
        'எண் விட்ஜெட் போன்ற அதே இயந்திரம் — ஒரு டேக், ஒரு திரட்டல், உங்கள் கால அளவு — ஆனால் இப்போது உங்கள் அளவீட்டை ஒரு அளவுகோலில் ஒரே பார்வையில் காணலாம்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'ஒரு அளவுகோலில் ஒரு அளவீடு',
          body: '<strong>கேஜ்</strong> விட்ஜெட் சரியாக எண் விட்ஜெட் போலவே வேலை செய்கிறது — ஒரு <strong>சென்சார் டேக்</strong>, ஒரு <strong>திரட்டல்</strong>, <strong>டாஷ்போர்டின் கால அளவைப்</strong> பின்பற்றி. இது ஒரு காட்சி <strong>அளவுகோலைச்</strong> சேர்க்கிறது, இதனால் அளவீடு எங்கே உள்ளது என்பதை உடனே காணலாம்.',
          voice: 'நமது அடுத்த விட்ஜெட் கேஜ். நல்ல செய்தி என்னவென்றால் — இது நாம் இப்போது பார்த்த ரேஞ்ச் எண் விட்ஜெட் போலவே வேலை செய்கிறது. ஒரு சென்சார் டேக், ஒரு திரட்டல், மற்றும் இது எப்போதும் உங்கள் டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது. கேஜ் சேர்ப்பது ஒரு காட்சி அளவுகோல். வெறும் எண்ணுக்குப் பதிலாக, அந்த அளவீடு ஒரு வரம்பில் எங்கே அமர்ந்துள்ளது என்பதை ஒரே பார்வையில் காண்கிறீர்கள்.',
        },
        {
          label: 'அளவுகோல்', title: 'ஒரு குறைந்தபட்சம் மற்றும் அதிகபட்சம்',
          body: 'ஒவ்வொரு கேஜிலும் ஒரு <strong>அளவுகோல்</strong> உள்ளது — வளைவை வரையறுக்கும் ஒரு குறைந்தபட்சம் மற்றும் அதிகபட்சம். இங்கே அளவுகோல் <strong>0 முதல் 100</strong> வரை செல்கிறது. வளைவின் இடது முனை குறைந்தபட்சம், வலது முனை அதிகபட்சம்.',
          voice: 'அளவுகோலிலிருந்து தொடங்குவோம். ஒவ்வொரு கேஜிலும் ஒரு குறைந்தபட்சம் மற்றும் ஒரு அதிகபட்சம் உள்ளது, அவை இணைந்து வளைவை வரையறுக்கின்றன. இந்த உதாரணத்தில், அளவுகோல் பூஜ்ஜியத்திலிருந்து நூறு வரை செல்கிறது. வளைவின் இடது முனை உங்கள் குறைந்தபட்சம், வலது முனை உங்கள் அதிகபட்சம், இடையில் உள்ள அனைத்தும் உங்கள் அளவீடு வரக்கூடிய வரம்பு.',
          tip: { type: 'tipLabel', text: 'உங்கள் அளவீட்டின் பொருத்தமான வரம்பிற்கு குறைந்தபட்சம் மற்றும் அதிகபட்சத்தை அமைக்கவும் — மதிப்பு பொதுவாக நடுவில் இருக்கும்போது கேஜ் படிக்க எளிதானது.' },
        },
        {
          label: 'அளவீடு', title: 'அளவீடு எங்கே அமர்ந்துள்ளது',
          body: 'சென்சார் அளவீடு வளைவில் ஒரு குறியாகக் காட்டப்படுகிறது. இங்கே மதிப்பு <strong>42.08</strong>, எனவே குறி 0 மற்றும் 100 இடையே பாதிக்கு சற்று கீழே அமர்ந்துள்ளது. நிரப்பு நீங்கள் அளவுகோலில் எவ்வளவு தூரம் என்பதைக் காட்டுகிறது.',
          voice: 'இப்போது, அளவீடு. கேஜ் உங்கள் மதிப்பை எடுக்கிறது — இங்கே இது நாற்பத்தி இரண்டு புள்ளி பூஜ்ஜியம் எட்டு — அதை வளைவில் ஒரு குறியாக வைக்கிறது. அளவுகோல் பூஜ்ஜியத்திலிருந்து நூறு என்பதால், நாற்பத்தி இரண்டு பாதிக்கு சற்று கீழே அமர்கிறது. வளைவின் நிரப்பப்பட்ட பகுதி உங்கள் அளவீடு அளவுகோலில் எவ்வளவு தூரம் சென்றுள்ளது என்பதைக் காட்டுகிறது. ஒரு பார்வை, நீங்கள் அறிந்து கொள்கிறீர்கள்.',
        },
        {
          label: 'வரம்புகள்', title: 'நல்லது, எச்சரிக்கை & ஆபத்து',
          body: 'கேஜ் மற்றும் எண் இரண்டு விட்ஜெட்டிலும், நீங்கள் <strong>வரம்புகளை</strong> அமைக்கலாம் — <strong>நல்லது</strong>, <strong>எச்சரிக்கை</strong>, மற்றும் <strong>ஆபத்து</strong> பட்டைகள். வளைவு ஒவ்வொரு பட்டையையும் வண்ணத்தில் வரைகிறது — பச்சை, மஞ்சள், சிவப்பு. இங்கே <strong>STP செயல்திறன்</strong> 78.48%, ஆரோக்கியமான பச்சைப் பட்டையில்.',
          voice: 'இங்கே கேஜ் உண்மையில் தனது இடத்தைப் பெறுகிறது. கேஜ் மற்றும் எண் இரண்டு விட்ஜெட்டிலும், நீங்கள் வரம்புகளை அமைக்கலாம். நீங்கள் பட்டைகளை வரையறுக்கிறீர்கள் — நல்லது, எச்சரிக்கை, மற்றும் ஆபத்து. பின்னர் கேஜ் ஒவ்வொரு பட்டையையும் வண்ணத்தில் வரைகிறது. நல்லதற்கு பச்சை, எச்சரிக்கைக்கு மஞ்சள், ஆபத்துக்கு சிவப்பு. எனவே ஒரு அளவீடு ஆபத்து மண்டலத்தை நோக்கி நகரும் தருணத்தில், எண்ணைப் படிக்காமலேயே அதைக் காணலாம். இங்கே, எஸ் டி பி செயல்திறன் எழுபத்தி எட்டு புள்ளி ஐந்து சதவீதம், வசதியாக பச்சை, நல்ல பட்டையில்.',
          tip: { type: 'rememberLabel', text: 'வரம்புகள் ஒரு எண்ணை சமிக்ஞையாக மாற்றுகின்றன — பச்சை, மஞ்சள் அல்லது சிவப்பு — இதனால் மதிப்பைப் படிப்பதற்கு முன்பே சிக்கல்கள் தெரியும்.' },
        },
        {
          label: 'எண்ணிலும்', title: 'எண் விட்ஜெட்டிலும் வரம்புகள்',
          body: 'அதே வரம்புகள் <strong>எண்</strong> விட்ஜெட்டிலும் வேலை செய்கின்றன. மதிப்புக்குக் கீழே, ஒரு வண்ணப் பட்டை அளவீடு எங்கே விழுகிறது என்பதைக் குறிக்கிறது, ஆபத்துப் பட்டையில் எண்ணே <strong>சிவப்பாக</strong> மாறுகிறது. இங்கே <strong>MBR Flux</strong> 36.28 — ஆரோக்கிய வரம்பிற்கு மேலே, எனவே சிவப்பாகக் காட்டுகிறது.',
          voice: 'நினைவில் கொள்ளுங்கள், வரம்புகள் கேஜுக்கு மட்டுமல்ல. எண் விட்ஜெட்டும் அவற்றைப் பயன்படுத்துகிறது. மதிப்புக்குக் கீழே, ஒரு வண்ணப் பட்டை அளவீடு உங்கள் பட்டைகளுக்கு இடையே எங்கே விழுகிறது என்பதைக் காட்டுகிறது. எண்ணே வண்ணத்தை மாற்றுகிறது — ஆபத்துப் பட்டையில் வரும்போது சிவப்பாக மாறுகிறது. இங்கே, எம் பி ஆர் ஃப்ளக்ஸ் முப்பத்தி ஆறு புள்ளி இரண்டு எட்டு. இது இந்த சென்சாரின் ஆரோக்கிய வரம்பிற்கு மேலே, எனவே விட்ஜெட் அதை சிவப்பில் காட்டுகிறது. அதுதான் கேஜ் விட்ஜெட், மற்றும் இரண்டு விட்ஜெட்டிலும் வரம்புகள். அடுத்த பாடத்தில், இன்னொரு விட்ஜெட்டைப் பார்ப்போம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: இன்னொரு விட்ஜெட் வகையைப் பார்ப்போம்.' },
        },
      ],
    },
    mr: {
      title: '<em>गेज</em><br>विजेट.',
      subtitle:
        'नंबर विजेटसारखेच इंजिन — एक टॅग, एक एकत्रीकरण, तुमची वेळ अवधी — पण आता तुम्ही तुमची रीडिंग एका स्केलवर एका दृष्टीक्षेपात पाहू शकता.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'स्केलवर एक रीडिंग',
          body: '<strong>गेज</strong> विजेट अगदी नंबर विजेटसारखेच काम करते — एक <strong>सेन्सर टॅग</strong>, एक <strong>एकत्रीकरण</strong>, आणि <strong>डॅशबोर्डच्या वेळ अवधी</strong>चे पालन. ते एक दृश्य <strong>स्केल</strong> जोडते, जेणेकरून रीडिंग कुठे आहे ते तुम्ही लगेच पाहू शकता.',
          voice: 'आपले पुढचे विजेट आहे गेज. चांगली बातमी अशी — हे अगदी त्याच रेंज नंबर विजेटसारखे काम करते जे आपण आत्ताच पाहिले. एक सेन्सर टॅग, एक एकत्रीकरण, आणि ते नेहमी तुमच्या डॅशबोर्डच्या वेळ अवधीचे पालन करते. गेज जे जोडते ते म्हणजे एक दृश्य स्केल. फक्त एका संख्येऐवजी, ती रीडिंग एका श्रेणीवर कुठे बसते ते तुम्ही एका दृष्टीक्षेपात पाहता.',
        },
        {
          label: 'स्केल', title: 'एक किमान आणि एक कमाल',
          body: 'प्रत्येक गेजला एक <strong>स्केल</strong> असते — आर्क परिभाषित करणारे एक किमान आणि एक कमाल. इथे स्केल <strong>0 ते 100</strong> पर्यंत जाते. आर्कचे डावे टोक किमान आहे, उजवे टोक कमाल.',
          voice: 'स्केलपासून सुरुवात करूया. प्रत्येक गेजला एक किमान आणि एक कमाल असते, आणि मिळून ते आर्क परिभाषित करतात. या उदाहरणात, स्केल शून्य ते शंभर पर्यंत जाते. आर्कचे डावे टोक तुमचे किमान आहे, उजवे टोक तुमचे कमाल, आणि मधले सर्व काही ती श्रेणी आहे ज्यात तुमची रीडिंग येऊ शकते.',
          tip: { type: 'tipLabel', text: 'तुमच्या रीडिंगच्या योग्य श्रेणीवर किमान आणि कमाल सेट करा — मूल्य सहसा मध्यभागी असताना गेज वाचणे सर्वात सोपे असते.' },
        },
        {
          label: 'रीडिंग', title: 'रीडिंग कुठे बसते',
          body: 'सेन्सर रीडिंग आर्कवर एक मार्कर म्हणून दाखवली जाते. इथे मूल्य <strong>42.08</strong> आहे, म्हणून मार्कर 0 आणि 100 च्या मध्ये अर्ध्याहून थोडे कमी बसतो. फिल दाखवते की तुम्ही स्केलवर किती दूर आहात.',
          voice: 'आता, रीडिंग स्वतः. गेज तुमचे मूल्य घेते — इथे ते बेचाळीस दशांश शून्य आठ आहे — आणि ते आर्कवर एक मार्कर म्हणून ठेवते. स्केल शून्य ते शंभर असल्यामुळे, बेचाळीस अर्ध्याहून थोडे कमी बसते. आर्कचा भरलेला भाग दाखवतो की तुमची रीडिंग स्केलवर किती दूर पोहोचली आहे. एक नजर, आणि तुम्हाला कळते.',
        },
        {
          label: 'थ्रेशोल्ड', title: 'चांगले, इशारा आणि गंभीर',
          body: 'गेज आणि नंबर दोन्ही विजेटवर, तुम्ही <strong>थ्रेशोल्ड</strong> कॉन्फिगर करू शकता — <strong>चांगले</strong>, <strong>इशारा</strong>, आणि <strong>गंभीर</strong> साठी बँड. आर्क प्रत्येक बँड रंगात रंगवते — हिरवा, पिवळा, लाल. इथे <strong>STP कार्यक्षमता</strong> 78.48% आहे, निरोगी हिरव्या बँडमध्ये.',
          voice: 'इथे गेज खऱ्या अर्थाने आपली जागा कमावते. गेज आणि नंबर दोन्ही विजेटवर, तुम्ही थ्रेशोल्ड सेट करू शकता. तुम्ही बँड परिभाषित करता — चांगले, इशारा, आणि गंभीर. मग गेज प्रत्येक बँड रंगात रंगवते. चांगल्यासाठी हिरवा, इशाऱ्यासाठी पिवळा, आणि गंभीरसाठी लाल. म्हणून जसजशी एखादी रीडिंग गंभीर झोनकडे सरकते, तसतसे ते तुम्ही संख्या न वाचताच पाहू शकता. इथे, एस टी पी कार्यक्षमता अठ्ठ्याहत्तर दशांश पाच टक्के आहे, आरामात हिरव्या, चांगल्या बँडमध्ये.',
          tip: { type: 'rememberLabel', text: 'थ्रेशोल्ड एका संख्येला संकेतात बदलतात — हिरवा, पिवळा किंवा लाल — जेणेकरून मूल्य वाचण्याआधीच समस्या समोर येतात.' },
        },
        {
          label: 'नंबरवरही', title: 'नंबर विजेटवर थ्रेशोल्ड',
          body: 'तेच थ्रेशोल्ड <strong>नंबर</strong> विजेटवरही काम करतात. मूल्याखाली, एक रंगीत पट्टी रीडिंग कुठे आहे ते दर्शवते, आणि गंभीर बँडमध्ये संख्या स्वतः <strong>लाल</strong> होते. इथे <strong>MBR Flux</strong> 36.28 आहे — निरोगी श्रेणीच्या वर, म्हणून लाल दिसते.',
          voice: 'आणि लक्षात ठेवा, थ्रेशोल्ड फक्त गेजसाठी नाहीत. नंबर विजेटही ते वापरते. मूल्याखाली, एक रंगीत पट्टी रीडिंग तुमच्या बँडमध्ये कुठे आहे ते दाखवते. आणि संख्या स्वतः रंग बदलते — गंभीर बँडमध्ये आल्यावर लाल होते. इथे, एम बी आर फ्लक्स छत्तीस दशांश दोन आठ आहे. हे या सेन्सरच्या निरोगी श्रेणीच्या वर आहे, म्हणून विजेट ते लाल रंगात दाखवते. हे होते गेज विजेट, आणि दोन्ही विजेटवर थ्रेशोल्ड. पुढच्या पाठात, आपण आणखी एक विजेट पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: आपण आणखी एक विजेट प्रकार पाहू.' },
        },
      ],
    },
  },
};

export default lesson;
