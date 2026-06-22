import type { Lesson, VizData } from '../../types';

/**
 * Module 6 · Lesson 1 — The Digital Twin.   Tag: M6.L1
 * The Visualization module: a live, animated SVG replica of the plant — tank
 * levels, equipment on/off, animations, back-dated playback, and Pages.
 */

const viz = (o: Partial<VizData>): VizData => ({
  plant: 'EMS Haridwar', date: 'Jun 22, 2026 · 06:54 PM', live: true, page: 'Full Plant',
  collectionLevel: 60, aerationLevel: 70, pump1On: false, pump2On: true, ...o,
});

const lesson: Lesson = {
  id: 'lesson-01-digital-twin',
  moduleId: 'module-06-visualization',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'visualization', caption: 'A live digital twin',
      widgetState: { viz: viz({}) }, cursor: [{ at: 0.2, x: 50, y: 50 }] },
    { mode: 'widget', widget: 'visualization', caption: 'Live tank levels',
      widgetState: { viz: viz({ highlight: 'level', collectionLevel: 58 }) }, cursor: [{ at: 0.3, x: 13, y: 50 }] },
    { mode: 'widget', widget: 'visualization', caption: 'Live equipment on/off',
      widgetState: { viz: viz({ highlight: 'onoff' }) }, cursor: [{ at: 0.3, x: 40, y: 30 }, { at: 0.7, x: 40, y: 72 }] },
    { mode: 'widget', widget: 'visualization', caption: 'It comes alive',
      widgetState: { viz: viz({ highlight: 'animation', pump1On: true, pump2On: true }) }, cursor: [{ at: 0.3, x: 50, y: 50 }, { at: 0.7, x: 70, y: 45 }] },
    { mode: 'widget', widget: 'visualization', caption: 'Replay the past',
      widgetState: { viz: viz({ live: false, date: 'Apr 18, 2026 · 02:10 PM', pump1On: true, highlight: 'backdated' }) }, cursor: [{ at: 0.3, x: 28, y: 8, click: true }] },
    { mode: 'widget', widget: 'visualization', caption: 'Pages — section by section',
      widgetState: { viz: viz({ page: 'Full Plant', pageMenu: ['Full Plant', 'Primary', 'Secondary', 'Tertiary', 'All Pumps'], highlight: 'pages' }) }, cursor: [{ at: 0.3, x: 90, y: 8, click: true }] },
  ],
  content: {
    en: {
      title: 'The <em>Digital Twin.</em>',
      subtitle:
        'A living, animated replica of your plant — every tank, pump and pipe, moving in real time.',
      chapter: 'Chapter Six · Your Plant, Live',
      steps: [
        {
          label: 'Overview', title: 'A living replica of your plant',
          body: "<strong>Visualization</strong> is a <strong>digital twin</strong> of your plant — built from the <strong>real equipment</strong> installed on site, drawn as SVGs. Tanks, pumps, pipes and dosing units are laid out exactly as they are in reality, and the whole picture is <strong>live</strong>.",
          voice: "Now for one of our most loved features — Visualization. This is a digital twin of your plant. We build it for each client using the actual equipment installed on their site, drawn as detailed graphics — every tank, pump, pipe and dosing unit, laid out just as it is in reality. And it's live. What you see on screen is what's happening in the plant, right now.",
        },
        {
          label: 'Live Levels', title: 'Live tank levels',
          body: "Every tank shows its <strong>live level</strong> — the water fills and drains on screen as it does in the plant, with a <strong>level gauge</strong> reading it off. One glance tells you which tanks are full, and which are running low.",
          voice: "Let's start with the tanks. Each one reflects its live level — the water rises and falls on screen exactly as it does in the real tank, read off the level transmitter. There's a gauge beside it showing the exact percentage. So at a single glance across the whole plant, you can see which tanks are full, which are draining, and which are running dangerously low.",
        },
        {
          label: 'On / Off', title: 'Live equipment status',
          body: "Every pump, blower and valve shows its <strong>live status</strong>: <strong>green</strong> when running, <strong>red</strong> when off. Here Reactor Feed Pump 2 is running while Pump 1 is stopped — you see the plant's true state instantly.",
          voice: "Next, the equipment. Every pump, blower and motorised valve shows its live on-off status, right on the schematic. Green means it's running; red means it's off. Look here — reactor feed pump two is green and running, while pump one is red and stopped. No need to call the operator or check a log; the true state of every piece of equipment is right there in front of you.",
        },
        {
          label: 'Animation', title: 'It comes alive',
          body: "This is what makes it special — it <strong>animates</strong>. Running pumps <strong>spin</strong>, flowing pipes show <strong>moving water</strong>, blowers turn, and aeration tanks <strong>bubble</strong>. The plant on your screen behaves exactly like the real one.",
          voice: "And here's what really sets it apart — it moves. When a pump is running, its impeller spins. When water is flowing, the pipe shows it streaming along. Blowers turn, mixers rotate, and aeration tanks bubble away. Switch a pump on, and instantly the pipe downstream comes alive with flow. The plant on your screen behaves exactly like the real one out in the field. It isn't a diagram — it's the plant, alive.",
        },
        {
          label: 'Back-Dated', title: 'Replay any moment in the past',
          body: "Hit <strong>play</strong> and pick a <strong>date and time</strong>, and the twin replays the plant <strong>as it was then</strong> — every level, every pump, every flow. Perfect for investigating what happened during an upset, hours or days later.",
          voice: "It's not only live. Press play, choose any date and time in the past, and the digital twin rewinds — replaying the plant exactly as it was at that moment. Every tank level, every pump state, every flow, recreated. So if something went wrong overnight, you can come in the next morning, scrub back to that hour, and literally watch what the plant was doing. It's the best way to investigate an upset after the fact.",
          tip: { type: 'rememberLabel', text: 'Live mode shows now; press play and pick a time to replay the plant exactly as it was then.' },
        },
        {
          label: 'Pages', title: 'Sections, on their own page',
          body: "A big plant is a lot to take in at once. <strong>Pages</strong> let you cut it into sections — <em>Primary</em>, <em>Secondary</em>, <em>Tertiary</em>, or a page with just <em>all the pumps</em>. Pick a page from the selector to focus on exactly the part you care about.",
          voice: "Finally, for a large plant, seeing everything at once can be overwhelming. So we offer pages — think of them as section cuts of the plant. You might have a primary treatment page, a secondary page, a tertiary page, or even a page that gathers just the pumps together. You pick the page you want from the selector up top, and the view focuses on exactly that section. That's Visualization — your whole plant, live, animated, and yours to explore.",
          tip: { type: 'upNextLabel', text: 'Live, historical, and section by section — your plant at a glance.' },
        },
      ],
    },
    hi: {
      title: '<em>डिजिटल ट्विन।</em>',
      subtitle:
        'आपके प्लांट की एक जीवंत, एनिमेटेड प्रतिकृति — हर टैंक, पंप और पाइप, वास्तविक समय में चलते हुए।',
      chapter: 'अध्याय छह · आपका प्लांट, लाइव',
      steps: [
        {
          label: 'अवलोकन', title: 'आपके प्लांट की जीवंत प्रतिकृति',
          body: '<strong>विज़ुअलाइज़ेशन</strong> आपके प्लांट का एक <strong>डिजिटल ट्विन</strong> है — साइट पर लगे <strong>असली उपकरणों</strong> से बना, SVG के रूप में बनाया गया। टैंक, पंप, पाइप और डोज़िंग यूनिट ठीक वैसे ही व्यवस्थित हैं जैसे वास्तव में हैं, और पूरी तस्वीर <strong>लाइव</strong> है।',
          voice: 'अब हमारी सबसे पसंदीदा सुविधाओं में से एक — विज़ुअलाइज़ेशन। यह आपके प्लांट का एक डिजिटल ट्विन है। हम इसे हर क्लाइंट के लिए उनकी साइट पर लगे वास्तविक उपकरणों का उपयोग करके बनाते हैं, विस्तृत ग्राफ़िक्स के रूप में — हर टैंक, पंप, पाइप और डोज़िंग यूनिट, ठीक वैसे ही जैसे वास्तव में है। और यह लाइव है। स्क्रीन पर आप जो देखते हैं वही प्लांट में अभी हो रहा है।',
        },
        {
          label: 'लाइव स्तर', title: 'लाइव टैंक स्तर',
          body: 'हर टैंक अपना <strong>लाइव स्तर</strong> दिखाता है — पानी स्क्रीन पर वैसे ही भरता और घटता है जैसे प्लांट में, साथ में एक <strong>लेवल गेज</strong> इसे पढ़ता है। एक नज़र बताती है कौन से टैंक भरे हैं और कौन से कम हो रहे हैं।',
          voice: 'टैंक से शुरू करें। हर एक अपना लाइव स्तर दर्शाता है — पानी स्क्रीन पर ठीक वैसे ही ऊपर-नीचे होता है जैसे असली टैंक में, लेवल ट्रांसमीटर से पढ़ा गया। उसके बगल में एक गेज है जो सटीक प्रतिशत दिखाता है। तो पूरे प्लांट पर एक ही नज़र में, आप देख सकते हैं कौन से टैंक भरे हैं, कौन से घट रहे हैं, और कौन से ख़तरनाक रूप से कम हो रहे हैं।',
        },
        {
          label: 'ऑन / ऑफ', title: 'लाइव उपकरण स्थिति',
          body: 'हर पंप, ब्लोअर और वाल्व अपनी <strong>लाइव स्थिति</strong> दिखाता है: चलते समय <strong>हरा</strong>, बंद होने पर <strong>लाल</strong>। यहाँ रिएक्टर फ़ीड पंप 2 चल रहा है जबकि पंप 1 रुका है — आप प्लांट की वास्तविक स्थिति तुरंत देखते हैं।',
          voice: 'अगला, उपकरण। हर पंप, ब्लोअर और मोटराइज़्ड वाल्व अपनी लाइव ऑन-ऑफ स्थिति दिखाता है, सीधे स्कीमैटिक पर। हरा मतलब चल रहा है; लाल मतलब बंद है। यहाँ देखिए — रिएक्टर फ़ीड पंप दो हरा और चल रहा है, जबकि पंप एक लाल और रुका है। ऑपरेटर को कॉल करने या लॉग जाँचने की ज़रूरत नहीं; हर उपकरण की वास्तविक स्थिति आपके सामने है।',
        },
        {
          label: 'एनिमेशन', title: 'यह जीवंत हो उठता है',
          body: 'यही इसे ख़ास बनाता है — यह <strong>एनिमेट</strong> होता है। चलते पंप <strong>घूमते</strong> हैं, बहते पाइप <strong>चलता पानी</strong> दिखाते हैं, ब्लोअर घूमते हैं, और वातन टैंक <strong>बुलबुले</strong> छोड़ते हैं। स्क्रीन पर प्लांट ठीक असली जैसा व्यवहार करता है।',
          voice: 'और यही इसे वास्तव में अलग बनाता है — यह चलता है। जब कोई पंप चल रहा होता है, उसका इम्पेलर घूमता है। जब पानी बह रहा होता है, पाइप उसे बहता हुआ दिखाता है। ब्लोअर घूमते हैं, मिक्सर घूमते हैं, और वातन टैंक बुलबुले छोड़ते हैं। एक पंप चालू करें, और तुरंत नीचे का पाइप प्रवाह से जीवंत हो उठता है। स्क्रीन पर प्लांट ठीक वैसे ही व्यवहार करता है जैसे फ़ील्ड में असली। यह कोई आरेख नहीं — यह प्लांट है, जीवंत।',
        },
        {
          label: 'बैक-डेटेड', title: 'अतीत का कोई भी पल फिर से चलाएँ',
          body: '<strong>प्ले</strong> दबाएँ और एक <strong>तारीख़ व समय</strong> चुनें, और ट्विन प्लांट को <strong>जैसा तब था</strong> वैसा फिर से चलाता है — हर स्तर, हर पंप, हर प्रवाह। किसी गड़बड़ी की घंटों या दिनों बाद जाँच के लिए उपयुक्त।',
          voice: 'यह सिर्फ़ लाइव नहीं है। प्ले दबाएँ, अतीत की कोई भी तारीख़ और समय चुनें, और डिजिटल ट्विन पीछे चला जाता है — प्लांट को ठीक वैसा फिर से चलाते हुए जैसा वह उस पल था। हर टैंक स्तर, हर पंप स्थिति, हर प्रवाह, फिर से बनाया गया। तो अगर रात में कुछ गलत हुआ, आप अगली सुबह आकर उस घंटे तक पीछे जा सकते हैं, और सचमुच देख सकते हैं कि प्लांट क्या कर रहा था। किसी गड़बड़ी की बाद में जाँच का यह सबसे अच्छा तरीका है।',
          tip: { type: 'rememberLabel', text: 'लाइव मोड अभी दिखाता है; प्ले दबाएँ और एक समय चुनें ताकि प्लांट को ठीक वैसा फिर से चलाया जा सके जैसा तब था।' },
        },
        {
          label: 'पेज', title: 'सेक्शन, अपने पेज पर',
          body: 'एक बड़ा प्लांट एक साथ देखना बहुत हो जाता है। <strong>पेज</strong> इसे सेक्शन में काटने देते हैं — <em>प्राथमिक</em>, <em>द्वितीयक</em>, <em>तृतीयक</em>, या सिर्फ़ <em>सभी पंप</em> वाला पेज। चयनकर्ता से एक पेज चुनें ताकि ठीक उस हिस्से पर ध्यान दें जो आपको चाहिए।',
          voice: 'अंत में, एक बड़े प्लांट के लिए, सब कुछ एक साथ देखना भारी हो सकता है। तो हम पेज देते हैं — इन्हें प्लांट के सेक्शन कट समझें। आपके पास एक प्राथमिक उपचार पेज, एक द्वितीयक पेज, एक तृतीयक पेज, या एक ऐसा पेज भी हो सकता है जो सिर्फ़ पंपों को एक साथ इकट्ठा करता है। आप ऊपर के चयनकर्ता से अपना मनचाहा पेज चुनते हैं, और दृश्य ठीक उसी सेक्शन पर केंद्रित हो जाता है। यह है विज़ुअलाइज़ेशन — आपका पूरा प्लांट, लाइव, एनिमेटेड, और आपके खोजने के लिए।',
          tip: { type: 'upNextLabel', text: 'लाइव, ऐतिहासिक, और सेक्शन दर सेक्शन — आपका प्लांट एक नज़र में।' },
        },
      ],
    },
    ta: {
      title: '<em>டிஜிட்டல் ட்வின்.</em>',
      subtitle:
        'உங்கள் ஆலையின் உயிருள்ள, அசையும் பிரதி — ஒவ்வொரு தொட்டி, பம்ப், குழாயும் நிகழ் நேரத்தில் நகர்கிறது.',
      chapter: 'அத்தியாயம் ஆறு · உங்கள் ஆலை, நேரலையில்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'உங்கள் ஆலையின் உயிருள்ள பிரதி',
          body: '<strong>விஷுவலைசேஷன்</strong> என்பது உங்கள் ஆலையின் ஒரு <strong>டிஜிட்டல் ட்வின்</strong> — தளத்தில் நிறுவப்பட்ட <strong>உண்மையான உபகரணங்களைக்</strong> கொண்டு, SVG-களாக வரையப்பட்டது. தொட்டிகள், பம்புகள், குழாய்கள், டோசிங் யூனிட்கள் உண்மையில் உள்ளபடியே அமைக்கப்பட்டுள்ளன, முழுப் படமும் <strong>நேரலை</strong>.',
          voice: 'இப்போது நமது மிகவும் விரும்பப்படும் அம்சங்களில் ஒன்று — விஷுவலைசேஷன். இது உங்கள் ஆலையின் டிஜிட்டல் ட்வின். ஒவ்வொரு வாடிக்கையாளருக்கும் அவர்களின் தளத்தில் நிறுவப்பட்ட உண்மையான உபகரணங்களைப் பயன்படுத்தி இதை உருவாக்குகிறோம், விரிவான வரைகலையாக — ஒவ்வொரு தொட்டி, பம்ப், குழாய், டோசிங் யூனிட், உண்மையில் உள்ளபடியே. இது நேரலை. திரையில் நீங்கள் காண்பது ஆலையில் இப்போது நடப்பதே.',
        },
        {
          label: 'நேரலை மட்டங்கள்', title: 'நேரலை தொட்டி மட்டங்கள்',
          body: 'ஒவ்வொரு தொட்டியும் அதன் <strong>நேரலை மட்டத்தைக்</strong> காட்டுகிறது — தண்ணீர் ஆலையில் உள்ளபடியே திரையில் நிரம்பி வடிகிறது, ஒரு <strong>மட்ட அளவி</strong> அதைப் படிக்கிறது. ஒரே பார்வையில் எந்தத் தொட்டிகள் நிறைந்துள்ளன, எவை குறைகின்றன என்பது தெரியும்.',
          voice: 'தொட்டிகளிலிருந்து தொடங்குவோம். ஒவ்வொன்றும் அதன் நேரலை மட்டத்தைப் பிரதிபலிக்கிறது — தண்ணீர் உண்மையான தொட்டியில் உள்ளபடியே திரையில் உயர்ந்து தாழ்கிறது, மட்ட டிரான்ஸ்மிட்டரிலிருந்து படிக்கப்படுகிறது. அதன் அருகே சரியான சதவீதத்தைக் காட்டும் ஒரு அளவி உள்ளது. எனவே முழு ஆலையிலும் ஒரே பார்வையில், எந்தத் தொட்டிகள் நிறைந்துள்ளன, எவை வடிகின்றன, எவை ஆபத்தாகக் குறைகின்றன என்பதைக் காணலாம்.',
        },
        {
          label: 'ஆன் / ஆஃப்', title: 'நேரலை உபகரண நிலை',
          body: 'ஒவ்வொரு பம்ப், ப்ளோயர், வால்வும் அதன் <strong>நேரலை நிலையைக்</strong> காட்டுகிறது: இயங்கும்போது <strong>பச்சை</strong>, நின்றிருக்கும்போது <strong>சிவப்பு</strong>. இங்கே ரியாக்டர் ஃபீட் பம்ப் 2 இயங்குகிறது, பம்ப் 1 நின்றுள்ளது — ஆலையின் உண்மை நிலையை உடனே காண்கிறீர்கள்.',
          voice: 'அடுத்து, உபகரணம். ஒவ்வொரு பம்ப், ப்ளோயர், மோட்டார் வால்வும் அதன் நேரலை ஆன்-ஆஃப் நிலையை ஸ்கீமாட்டிக்கில் காட்டுகிறது. பச்சை என்றால் இயங்குகிறது; சிவப்பு என்றால் நின்றுள்ளது. இங்கே பாருங்கள் — ரியாக்டர் ஃபீட் பம்ப் இரண்டு பச்சையாக இயங்குகிறது, பம்ப் ஒன்று சிவப்பாக நின்றுள்ளது. இயக்குனரை அழைக்கவோ பதிவைச் சரிபார்க்கவோ தேவையில்லை; ஒவ்வொரு உபகரணத்தின் உண்மை நிலையும் உங்கள் முன் உள்ளது.',
        },
        {
          label: 'அனிமேஷன்', title: 'இது உயிர்பெறுகிறது',
          body: 'இதைச் சிறப்பாக்குவது இதுதான் — இது <strong>அசைகிறது</strong>. இயங்கும் பம்புகள் <strong>சுழல்கின்றன</strong>, பாயும் குழாய்கள் <strong>நகரும் தண்ணீரைக்</strong> காட்டுகின்றன, ப்ளோயர்கள் சுழல்கின்றன, காற்றோட்டத் தொட்டிகள் <strong>குமிழியிடுகின்றன</strong>. திரையில் உள்ள ஆலை உண்மையானது போலவே செயல்படுகிறது.',
          voice: 'இதை உண்மையில் வேறுபடுத்துவது இதுதான் — இது நகர்கிறது. ஒரு பம்ப் இயங்கும்போது, அதன் இம்பெல்லர் சுழல்கிறது. தண்ணீர் பாயும்போது, குழாய் அதைப் பாய்வதைக் காட்டுகிறது. ப்ளோயர்கள் சுழல்கின்றன, மிக்சர்கள் சுழல்கின்றன, காற்றோட்டத் தொட்டிகள் குமிழியிடுகின்றன. ஒரு பம்பை இயக்குங்கள், உடனே கீழ்நோக்கிய குழாய் பாய்வுடன் உயிர்பெறுகிறது. திரையில் உள்ள ஆலை வயலில் உள்ள உண்மையானது போலவே செயல்படுகிறது. இது வரைபடம் அல்ல — இது ஆலை, உயிருடன்.',
        },
        {
          label: 'பின்-தேதி', title: 'கடந்த எந்தக் கணத்தையும் மீண்டும் இயக்கு',
          body: '<strong>play</strong> அழுத்தி ஒரு <strong>தேதி & நேரத்தைத்</strong> தேர்வு செய்யுங்கள், ட்வின் ஆலையை <strong>அப்போது இருந்தபடி</strong> மீண்டும் இயக்குகிறது — ஒவ்வொரு மட்டம், பம்ப், பாய்வு. ஒரு சீர்குலைவை மணிநேரங்கள் அல்லது நாட்களுக்குப் பிறகு விசாரிக்க ஏற்றது.',
          voice: 'இது நேரலை மட்டுமல்ல. play அழுத்தி, கடந்த எந்த தேதி மற்றும் நேரத்தையும் தேர்வு செய்யுங்கள், டிஜிட்டல் ட்வின் பின்னோக்கிச் செல்கிறது — ஆலையை அந்தக் கணத்தில் இருந்தபடியே மீண்டும் இயக்குகிறது. ஒவ்வொரு தொட்டி மட்டம், பம்ப் நிலை, பாய்வு, மீண்டும் உருவாக்கப்படுகிறது. எனவே இரவில் ஏதாவது தவறு நடந்தால், அடுத்த காலை வந்து அந்த மணிநேரத்துக்குப் பின்னோக்கி, ஆலை என்ன செய்து கொண்டிருந்தது என்பதை நேரடியாகப் பார்க்கலாம். ஒரு சீர்குலைவை பின்னர் விசாரிக்க இதுவே சிறந்த வழி.',
          tip: { type: 'rememberLabel', text: 'நேரலை பயன்முறை இப்போதைக் காட்டுகிறது; play அழுத்தி ஒரு நேரத்தைத் தேர்வு செய்தால் ஆலையை அப்போது இருந்தபடியே மீண்டும் இயக்கலாம்.' },
        },
        {
          label: 'பக்கங்கள்', title: 'பிரிவுகள், தனித் தனிப் பக்கத்தில்',
          body: 'ஒரு பெரிய ஆலையை ஒரே நேரத்தில் பார்ப்பது அதிகம். <strong>பக்கங்கள்</strong> அதைப் பிரிவுகளாக வெட்ட அனுமதிக்கின்றன — <em>முதன்மை</em>, <em>இரண்டாம்நிலை</em>, <em>மூன்றாம்நிலை</em>, அல்லது <em>எல்லா பம்புகளும்</em> கொண்ட பக்கம். தேர்வியிலிருந்து ஒரு பக்கத்தைத் தேர்வு செய்து நீங்கள் விரும்பும் பகுதியில் கவனம் செலுத்துங்கள்.',
          voice: 'இறுதியாக, ஒரு பெரிய ஆலையில், எல்லாவற்றையும் ஒரே நேரத்தில் பார்ப்பது மிகையாக இருக்கலாம். எனவே பக்கங்களை வழங்குகிறோம் — அவற்றை ஆலையின் பிரிவு வெட்டுகளாகக் கருதுங்கள். உங்களிடம் ஒரு முதன்மை சுத்திகரிப்புப் பக்கம், ஒரு இரண்டாம்நிலைப் பக்கம், ஒரு மூன்றாம்நிலைப் பக்கம், அல்லது பம்புகளை மட்டும் ஒன்றாகச் சேர்க்கும் ஒரு பக்கமும் இருக்கலாம். மேலே உள்ள தேர்வியிலிருந்து விரும்பும் பக்கத்தைத் தேர்வு செய்கிறீர்கள், காட்சி சரியாக அந்தப் பிரிவில் கவனம் செலுத்துகிறது. இதுதான் விஷுவலைசேஷன் — உங்கள் முழு ஆலை, நேரலை, அசையும், உங்கள் ஆராய்ச்சிக்கு.',
          tip: { type: 'upNextLabel', text: 'நேரலை, வரலாறு, பிரிவு வாரியாக — உங்கள் ஆலை ஒரே பார்வையில்.' },
        },
      ],
    },
    mr: {
      title: '<em>डिजिटल ट्विन.</em>',
      subtitle:
        'तुमच्या प्लांटची एक जिवंत, अॅनिमेटेड प्रतिकृती — प्रत्येक टँक, पंप आणि पाइप, रिअल टाइममध्ये हलणारे.',
      chapter: 'अध्याय सहा · तुमचा प्लांट, लाइव्ह',
      steps: [
        {
          label: 'आढावा', title: 'तुमच्या प्लांटची जिवंत प्रतिकृती',
          body: '<strong>व्हिज्युअलायझेशन</strong> ही तुमच्या प्लांटची एक <strong>डिजिटल ट्विन</strong> आहे — साइटवर बसवलेल्या <strong>खऱ्या उपकरणांपासून</strong> बनवलेली, SVG म्हणून काढलेली. टँक, पंप, पाइप आणि डोसिंग युनिट्स प्रत्यक्षात जसे आहेत तसेच मांडलेले आहेत, आणि संपूर्ण चित्र <strong>लाइव्ह</strong> आहे.',
          voice: 'आता आमच्या सर्वात आवडत्या वैशिष्ट्यांपैकी एक — व्हिज्युअलायझेशन. ही तुमच्या प्लांटची डिजिटल ट्विन आहे. आम्ही ती प्रत्येक क्लायंटसाठी त्यांच्या साइटवर बसवलेल्या प्रत्यक्ष उपकरणांचा वापर करून बनवतो, तपशीलवार ग्राफिक्स म्हणून — प्रत्येक टँक, पंप, पाइप आणि डोसिंग युनिट, प्रत्यक्षात जसे आहे तसेच. आणि ती लाइव्ह आहे. स्क्रीनवर तुम्ही जे पाहता तेच प्लांटमध्ये आत्ता घडत आहे.',
        },
        {
          label: 'लाइव्ह पातळी', title: 'लाइव्ह टँक पातळी',
          body: 'प्रत्येक टँक त्याची <strong>लाइव्ह पातळी</strong> दाखवतो — पाणी स्क्रीनवर प्लांटप्रमाणेच भरते आणि कमी होते, सोबत एक <strong>लेव्हल गेज</strong> ती वाचतो. एका दृष्टीक्षेपात कोणते टँक भरले आहेत आणि कोणते कमी होत आहेत ते कळते.',
          voice: 'टँकपासून सुरू करू. प्रत्येक त्याची लाइव्ह पातळी दर्शवतो — पाणी खऱ्या टँकमध्ये जसे होते तसेच स्क्रीनवर वर-खाली होते, लेव्हल ट्रान्समीटरवरून वाचलेले. त्याच्या शेजारी एक गेज आहे जो अचूक टक्केवारी दाखवतो. म्हणून संपूर्ण प्लांटवर एका दृष्टीक्षेपात, कोणते टँक भरले आहेत, कोणते कमी होत आहेत, आणि कोणते धोकादायकरीत्या कमी होत आहेत ते तुम्ही पाहू शकता.',
        },
        {
          label: 'ऑन / ऑफ', title: 'लाइव्ह उपकरण स्थिती',
          body: 'प्रत्येक पंप, ब्लोअर आणि व्हॉल्व्ह त्याची <strong>लाइव्ह स्थिती</strong> दाखवतो: चालू असताना <strong>हिरवा</strong>, बंद असताना <strong>लाल</strong>. इथे रिअॅक्टर फीड पंप 2 चालू आहे तर पंप 1 थांबला आहे — तुम्ही प्लांटची खरी स्थिती लगेच पाहता.',
          voice: 'पुढे, उपकरण. प्रत्येक पंप, ब्लोअर आणि मोटराइज्ड व्हॉल्व्ह त्याची लाइव्ह ऑन-ऑफ स्थिती थेट स्कीमॅटिकवर दाखवतो. हिरवा म्हणजे चालू आहे; लाल म्हणजे बंद आहे. इथे पाहा — रिअॅक्टर फीड पंप दोन हिरवा आणि चालू आहे, तर पंप एक लाल आणि थांबला आहे. ऑपरेटरला फोन करण्याची किंवा लॉग तपासण्याची गरज नाही; प्रत्येक उपकरणाची खरी स्थिती तुमच्यासमोर आहे.',
        },
        {
          label: 'अॅनिमेशन', title: 'ती जिवंत होते',
          body: 'हेच तिला खास बनवते — ती <strong>अॅनिमेट</strong> होते. चालणारे पंप <strong>फिरतात</strong>, वाहणारे पाइप <strong>हलणारे पाणी</strong> दाखवतात, ब्लोअर फिरतात, आणि वायुवीजन टँक <strong>बुडबुडे</strong> सोडतात. स्क्रीनवरचा प्लांट अगदी खऱ्यासारखा वागतो.',
          voice: 'आणि हेच तिला खरोखर वेगळे बनवते — ती हलते. पंप चालू असताना, त्याचा इम्पेलर फिरतो. पाणी वाहत असताना, पाइप ते वाहताना दाखवतो. ब्लोअर फिरतात, मिक्सर फिरतात, आणि वायुवीजन टँक बुडबुडे सोडतात. एक पंप चालू करा, आणि लगेच खालचा पाइप प्रवाहाने जिवंत होतो. स्क्रीनवरचा प्लांट फील्डमधल्या खऱ्यासारखाच वागतो. हा आकृती नाही — हा प्लांट आहे, जिवंत.',
        },
        {
          label: 'बॅक-डेटेड', title: 'भूतकाळातील कोणताही क्षण पुन्हा चालवा',
          body: '<strong>play</strong> दाबा आणि एक <strong>तारीख व वेळ</strong> निवडा, आणि ट्विन प्लांट <strong>तेव्हा जसा होता</strong> तसा पुन्हा चालवते — प्रत्येक पातळी, प्रत्येक पंप, प्रत्येक प्रवाह. एखादी गडबड तास किंवा दिवसांनंतर तपासण्यासाठी योग्य.',
          voice: 'ती फक्त लाइव्ह नाही. play दाबा, भूतकाळातील कोणतीही तारीख आणि वेळ निवडा, आणि डिजिटल ट्विन मागे जाते — प्लांट त्या क्षणी जसा होता अगदी तसा पुन्हा चालवते. प्रत्येक टँक पातळी, प्रत्येक पंप स्थिती, प्रत्येक प्रवाह, पुन्हा तयार केलेला. म्हणून रात्री काही चुकले, तर तुम्ही दुसऱ्या सकाळी येऊन त्या तासापर्यंत मागे जाऊ शकता, आणि प्लांट काय करत होता ते अक्षरशः पाहू शकता. एखादी गडबड नंतर तपासण्याचा हा सर्वोत्तम मार्ग आहे.',
          tip: { type: 'rememberLabel', text: 'लाइव्ह मोड आता दाखवतो; play दाबा आणि एक वेळ निवडा म्हणजे प्लांट तेव्हा जसा होता तसा पुन्हा चालवता येईल.' },
        },
        {
          label: 'पेजेस', title: 'विभाग, स्वतःच्या पेजवर',
          body: 'मोठा प्लांट एकाच वेळी पाहणे खूप होते. <strong>पेजेस</strong> तो विभागांमध्ये कापू देतात — <em>प्राथमिक</em>, <em>दुय्यम</em>, <em>तृतीयक</em>, किंवा फक्त <em>सर्व पंप</em> असलेले पेज. निवडकातून एक पेज निवडा म्हणजे तुम्हाला हव्या त्या भागावर लक्ष केंद्रित करा.',
          voice: 'शेवटी, मोठ्या प्लांटसाठी, सर्व काही एकाच वेळी पाहणे जड होऊ शकते. म्हणून आम्ही पेजेस देतो — त्यांना प्लांटचे विभाग कट समजा. तुमच्याकडे एक प्राथमिक उपचार पेज, एक दुय्यम पेज, एक तृतीयक पेज, किंवा फक्त पंप एकत्र करणारे एक पेजही असू शकते. तुम्ही वरच्या निवडकातून हवे ते पेज निवडता, आणि दृश्य नेमक्या त्या विभागावर केंद्रित होते. हे आहे व्हिज्युअलायझेशन — तुमचा संपूर्ण प्लांट, लाइव्ह, अॅनिमेटेड, आणि तुम्हाला एक्सप्लोर करण्यासाठी.',
          tip: { type: 'upNextLabel', text: 'लाइव्ह, ऐतिहासिक, आणि विभागानुसार — तुमचा प्लांट एका दृष्टीक्षेपात.' },
        },
      ],
    },
  },
};

export default lesson;
