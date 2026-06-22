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
    { mode: 'widget', widget: 'visualization', caption: 'Pages — pick a section',
      widgetState: { viz: viz({ page: 'Full Plant', pageMenu: ['Full Plant', 'Primary Treatment', 'Secondary Treatment', 'SBR Section', 'Ultrafiltration Section', 'Dosing System', 'Sludge System', 'Pumps', 'RO System'], highlight: 'pages' }) }, cursor: [{ at: 0.3, x: 90, y: 8, click: true }] },
    { mode: 'widget', widget: 'visualization', caption: 'The Primary Treatment page',
      widgetState: { viz: viz({ page: 'Primary Treatment', section: 'primary' }) }, cursor: [{ at: 0.3, x: 40, y: 25 }, { at: 0.7, x: 65, y: 55 }] },
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
          body: "This is what makes it special — it <strong>animates</strong>, and each machine moves in its own way. A running <strong>pump</strong> spins its <strong>impeller</strong>; a <strong>blower</strong> spins its <strong>gear-style rotor</strong>; a <strong>flocculator's paddle</strong> turns slowly; flowing pipes show <strong>moving water</strong>; aeration tanks <strong>bubble</strong>; and the <strong>clarifier</strong> holds clear water over a bed of settled <strong>sludge</strong>.",
          voice: "And here's what really sets it apart — it moves, and each machine animates in its own distinct way. A running pump spins its impeller — that four-bladed propeller. A blower is different — it spins a gear-like rotor, the way a real air blower does. A flocculator turns its paddle slowly to gently mix the chemistry. When water is flowing, the pipe shows it streaming along. Aeration tanks bubble away as the blower feeds them air. And the clarifier sits at the end — clear water on top, a bed of brown sludge settled below, with its inlet, outlet and sludge-draw pipes flowing. Switch a pump on, and instantly the pipe downstream comes alive with flow. The plant on your screen behaves exactly like the real one out in the field. It isn't a diagram — it's the plant, alive.",
        },
        {
          label: 'Back-Dated', title: 'Replay any moment in the past',
          body: "Hit <strong>play</strong> and pick a <strong>date and time</strong>, and the twin replays the plant <strong>as it was then</strong> — every level, every pump, every flow. Perfect for investigating what happened during an upset, hours or days later.",
          voice: "It's not only live. Press play, choose any date and time in the past, and the digital twin rewinds — replaying the plant exactly as it was at that moment. Every tank level, every pump state, every flow, recreated. So if something went wrong overnight, you can come in the next morning, scrub back to that hour, and literally watch what the plant was doing. It's the best way to investigate an upset after the fact.",
          tip: { type: 'rememberLabel', text: 'Live mode shows now; press play and pick a time to replay the plant exactly as it was then.' },
        },
        {
          label: 'Pages', title: 'Cut the plant into sections',
          body: "A big plant is a lot to take in at once. <strong>Pages</strong> let you focus on one section at a time. Pick from the <strong>Select Page</strong> list — <em>Primary Treatment</em>, <em>Secondary Treatment</em>, <em>SBR</em>, <em>Ultrafiltration</em>, <em>Dosing</em>, <em>Sludge System</em>, <em>RO System</em>, a <em>Pumps</em> page, and more.",
          voice: "Finally, a full plant can be a lot to take in at once. So we cut it into pages — section views you pick from the Select Page list at the top. There might be a primary treatment page, a secondary page, an S B R section, ultrafiltration, the dosing system, the sludge system, an R O system page, even a page that gathers just the pumps. You choose the section you want to focus on.",
          tip: { type: 'tipLabel', text: 'Pages are configured per plant — each one is a focused cut of the full schematic.' },
        },
        {
          label: 'A Section', title: 'A page loads just that section',
          body: "Choose a page and the view switches to <strong>just that section</strong> — here <strong>Primary Treatment</strong>: the inlet flow, the <strong>coarse and fine screens</strong> with their on/off status, level gauges, and the <strong>grit channels</strong>. Same live data, focused on what you need.",
          voice: "And when you pick a page, the view switches to show only that section — fully live, just like the full plant. Here's the primary treatment page. You see the inlet flow rate, the coarse and fine screens with their on-off status, the level gauges on each channel, and the grit channels with their settled solids. Everything is still updating in real time, but now you're looking at exactly the part of the plant you care about, with nothing else in the way. That's Visualization — your whole plant, live, animated, section by section, and yours to explore.",
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
          body: 'यही इसे ख़ास बनाता है — यह <strong>एनिमेट</strong> होता है, और हर मशीन अपने अंदाज़ में चलती है। चलता <strong>पंप</strong> अपना <strong>इम्पेलर</strong> घुमाता है; <strong>ब्लोअर</strong> अपना <strong>गियर जैसा रोटर</strong> घुमाता है; <strong>फ़्लॉकुलेटर का पैडल</strong> धीरे-धीरे घूमता है; बहते पाइप <strong>चलता पानी</strong> दिखाते हैं; वातन टैंक <strong>बुलबुले</strong> छोड़ते हैं; और <strong>क्लैरिफ़ायर</strong> जमी हुई <strong>स्लज</strong> के ऊपर साफ़ पानी रखता है।',
          voice: 'और यही इसे वास्तव में अलग बनाता है — यह चलता है, और हर मशीन अपने अलग अंदाज़ में एनिमेट होती है। चलता पंप अपना इम्पेलर घुमाता है — वह चार-ब्लेड वाला प्रोपेलर। ब्लोअर अलग है — यह एक गियर जैसा रोटर घुमाता है, जैसे असली एयर ब्लोअर करता है। फ़्लॉकुलेटर अपना पैडल धीरे-धीरे घुमाता है ताकि केमिस्ट्री हल्के से मिलती रहे। जब पानी बह रहा होता है, पाइप उसे बहता हुआ दिखाता है। वातन टैंक बुलबुले छोड़ते हैं जैसे ब्लोअर उन्हें हवा देता है। और अंत में क्लैरिफ़ायर बैठा है — ऊपर साफ़ पानी, नीचे जमी भूरी स्लज, और उसके इनलेट, आउटलेट व स्लज पाइप बहते हुए। एक पंप चालू करें, और तुरंत नीचे का पाइप प्रवाह से जीवंत हो उठता है। स्क्रीन पर प्लांट ठीक वैसे ही व्यवहार करता है जैसे फ़ील्ड में असली। यह कोई आरेख नहीं — यह प्लांट है, जीवंत।',
        },
        {
          label: 'बैक-डेटेड', title: 'अतीत का कोई भी पल फिर से चलाएँ',
          body: '<strong>प्ले</strong> दबाएँ और एक <strong>तारीख़ व समय</strong> चुनें, और ट्विन प्लांट को <strong>जैसा तब था</strong> वैसा फिर से चलाता है — हर स्तर, हर पंप, हर प्रवाह। किसी गड़बड़ी की घंटों या दिनों बाद जाँच के लिए उपयुक्त।',
          voice: 'यह सिर्फ़ लाइव नहीं है। प्ले दबाएँ, अतीत की कोई भी तारीख़ और समय चुनें, और डिजिटल ट्विन पीछे चला जाता है — प्लांट को ठीक वैसा फिर से चलाते हुए जैसा वह उस पल था। हर टैंक स्तर, हर पंप स्थिति, हर प्रवाह, फिर से बनाया गया। तो अगर रात में कुछ गलत हुआ, आप अगली सुबह आकर उस घंटे तक पीछे जा सकते हैं, और सचमुच देख सकते हैं कि प्लांट क्या कर रहा था। किसी गड़बड़ी की बाद में जाँच का यह सबसे अच्छा तरीका है।',
          tip: { type: 'rememberLabel', text: 'लाइव मोड अभी दिखाता है; प्ले दबाएँ और एक समय चुनें ताकि प्लांट को ठीक वैसा फिर से चलाया जा सके जैसा तब था।' },
        },
        {
          label: 'पेज', title: 'प्लांट को सेक्शन में काटें',
          body: 'एक बड़ा प्लांट एक साथ देखना बहुत हो जाता है। <strong>पेज</strong> आपको एक बार में एक सेक्शन पर ध्यान देने देते हैं। <strong>Select Page</strong> सूची से चुनें — <em>प्राथमिक उपचार</em>, <em>द्वितीयक उपचार</em>, <em>SBR</em>, <em>अल्ट्राफ़िल्ट्रेशन</em>, <em>डोज़िंग</em>, <em>स्लज सिस्टम</em>, <em>RO सिस्टम</em>, एक <em>पंप</em> पेज, और अधिक।',
          voice: 'अंत में, एक पूरा प्लांट एक साथ देखना भारी हो सकता है। तो हम इसे पेजों में काटते हैं — सेक्शन दृश्य जो आप ऊपर की Select Page सूची से चुनते हैं। एक प्राथमिक उपचार पेज, एक द्वितीयक पेज, एक एस बी आर सेक्शन, अल्ट्राफ़िल्ट्रेशन, डोज़िंग सिस्टम, स्लज सिस्टम, एक आर ओ सिस्टम पेज, या एक ऐसा पेज भी जो सिर्फ़ पंप इकट्ठा करता है। आप जिस सेक्शन पर ध्यान देना चाहें उसे चुनते हैं।',
          tip: { type: 'tipLabel', text: 'पेज हर प्लांट के लिए कॉन्फ़िगर होते हैं — हर एक पूरे स्कीमैटिक का एक केंद्रित कट है।' },
        },
        {
          label: 'एक सेक्शन', title: 'पेज सिर्फ़ वह सेक्शन लोड करता है',
          body: 'एक पेज चुनें और दृश्य <strong>सिर्फ़ उस सेक्शन</strong> पर बदल जाता है — यहाँ <strong>प्राथमिक उपचार</strong>: इनलेट प्रवाह, <strong>कोर्स और फ़ाइन स्क्रीन</strong> उनकी ऑन/ऑफ़ स्थिति के साथ, लेवल गेज, और <strong>ग्रिट चैनल</strong>। वही लाइव डेटा, जो आपको चाहिए उस पर केंद्रित।',
          voice: 'और जब आप एक पेज चुनते हैं, दृश्य सिर्फ़ उस सेक्शन को दिखाने के लिए बदल जाता है — पूरी तरह लाइव, पूरे प्लांट की तरह। यह रहा प्राथमिक उपचार पेज। आप इनलेट प्रवाह दर देखते हैं, कोर्स और फ़ाइन स्क्रीन उनकी ऑन-ऑफ़ स्थिति के साथ, हर चैनल पर लेवल गेज, और ग्रिट चैनल अपने जमे ठोस के साथ। सब कुछ अभी भी रीयल टाइम में अपडेट हो रहा है, पर अब आप प्लांट के ठीक उस हिस्से को देख रहे हैं जो आपको चाहिए, बीच में कुछ और नहीं। यह है विज़ुअलाइज़ेशन — आपका पूरा प्लांट, लाइव, एनिमेटेड, सेक्शन दर सेक्शन, और आपके खोजने के लिए।',
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
          body: 'இதைச் சிறப்பாக்குவது இதுதான் — இது <strong>அசைகிறது</strong>, ஒவ்வொரு இயந்திரமும் தனக்கேயான முறையில் நகர்கிறது. இயங்கும் <strong>பம்ப்</strong> அதன் <strong>இம்பெல்லரை</strong> சுழற்றுகிறது; <strong>ப்ளோயர்</strong> அதன் <strong>கியர் போன்ற ரோட்டரை</strong> சுழற்றுகிறது; <strong>ஃப்ளோகுலேட்டரின் இதழ்</strong> மெதுவாகச் சுழல்கிறது; பாயும் குழாய்கள் <strong>நகரும் தண்ணீரைக்</strong> காட்டுகின்றன; காற்றோட்டத் தொட்டிகள் <strong>குமிழியிடுகின்றன</strong>; <strong>க்ளாரிஃபையர்</strong> படிந்த <strong>கசட்டுக்கு</strong> மேல் தெளிந்த தண்ணீரை வைத்திருக்கிறது.',
          voice: 'இதை உண்மையில் வேறுபடுத்துவது இதுதான் — இது நகர்கிறது, ஒவ்வொரு இயந்திரமும் தனக்கேயான தனித்த முறையில் அசைகிறது. இயங்கும் பம்ப் அதன் இம்பெல்லரை — அந்த நான்கு-இதழ் ப்ரொப்பெல்லரை — சுழற்றுகிறது. ப்ளோயர் வேறுபட்டது — அது ஒரு கியர் போன்ற ரோட்டரை சுழற்றுகிறது, ஒரு உண்மையான ஏர் ப்ளோயர் செய்வது போல. ஃப்ளோகுலேட்டர் அதன் இதழை மெதுவாகச் சுழற்றி வேதியியலை மெதுவாகக் கலக்கிறது. தண்ணீர் பாயும்போது, குழாய் அதைப் பாய்வதைக் காட்டுகிறது. ப்ளோயர் அவற்றுக்குக் காற்றூட்டும்போது காற்றோட்டத் தொட்டிகள் குமிழியிடுகின்றன. இறுதியில் க்ளாரிஃபையர் அமர்ந்துள்ளது — மேலே தெளிந்த தண்ணீர், கீழே படிந்த பழுப்புக் கசடு, அதன் உள்ளீடு, வெளியீடு, கசடு குழாய்கள் பாய்கின்றன. ஒரு பம்பை இயக்குங்கள், உடனே கீழ்நோக்கிய குழாய் பாய்வுடன் உயிர்பெறுகிறது. திரையில் உள்ள ஆலை வயலில் உள்ள உண்மையானது போலவே செயல்படுகிறது. இது வரைபடம் அல்ல — இது ஆலை, உயிருடன்.',
        },
        {
          label: 'பின்-தேதி', title: 'கடந்த எந்தக் கணத்தையும் மீண்டும் இயக்கு',
          body: '<strong>play</strong> அழுத்தி ஒரு <strong>தேதி & நேரத்தைத்</strong> தேர்வு செய்யுங்கள், ட்வின் ஆலையை <strong>அப்போது இருந்தபடி</strong> மீண்டும் இயக்குகிறது — ஒவ்வொரு மட்டம், பம்ப், பாய்வு. ஒரு சீர்குலைவை மணிநேரங்கள் அல்லது நாட்களுக்குப் பிறகு விசாரிக்க ஏற்றது.',
          voice: 'இது நேரலை மட்டுமல்ல. play அழுத்தி, கடந்த எந்த தேதி மற்றும் நேரத்தையும் தேர்வு செய்யுங்கள், டிஜிட்டல் ட்வின் பின்னோக்கிச் செல்கிறது — ஆலையை அந்தக் கணத்தில் இருந்தபடியே மீண்டும் இயக்குகிறது. ஒவ்வொரு தொட்டி மட்டம், பம்ப் நிலை, பாய்வு, மீண்டும் உருவாக்கப்படுகிறது. எனவே இரவில் ஏதாவது தவறு நடந்தால், அடுத்த காலை வந்து அந்த மணிநேரத்துக்குப் பின்னோக்கி, ஆலை என்ன செய்து கொண்டிருந்தது என்பதை நேரடியாகப் பார்க்கலாம். ஒரு சீர்குலைவை பின்னர் விசாரிக்க இதுவே சிறந்த வழி.',
          tip: { type: 'rememberLabel', text: 'நேரலை பயன்முறை இப்போதைக் காட்டுகிறது; play அழுத்தி ஒரு நேரத்தைத் தேர்வு செய்தால் ஆலையை அப்போது இருந்தபடியே மீண்டும் இயக்கலாம்.' },
        },
        {
          label: 'பக்கங்கள்', title: 'ஆலையைப் பிரிவுகளாக வெட்டுங்கள்',
          body: 'ஒரு பெரிய ஆலையை ஒரே நேரத்தில் பார்ப்பது அதிகம். <strong>பக்கங்கள்</strong> ஒரு நேரத்தில் ஒரு பிரிவில் கவனம் செலுத்த உதவுகின்றன. <strong>Select Page</strong> பட்டியலிலிருந்து தேர்வு செய்யுங்கள் — <em>முதன்மை சுத்திகரிப்பு</em>, <em>இரண்டாம்நிலை</em>, <em>SBR</em>, <em>அல்ட்ராஃபில்ட்ரேஷன்</em>, <em>டோசிங்</em>, <em>ஸ்லட்ஜ் சிஸ்டம்</em>, <em>RO சிஸ்டம்</em>, ஒரு <em>பம்புகள்</em> பக்கம், மேலும்.',
          voice: 'இறுதியாக, ஒரு முழு ஆலை ஒரே நேரத்தில் பார்ப்பது மிகையாக இருக்கலாம். எனவே அதைப் பக்கங்களாக வெட்டுகிறோம் — மேலே உள்ள Select Page பட்டியலிலிருந்து தேர்வு செய்யும் பிரிவு காட்சிகள். ஒரு முதன்மை சுத்திகரிப்புப் பக்கம், ஒரு இரண்டாம்நிலைப் பக்கம், ஒரு எஸ் பி ஆர் பிரிவு, அல்ட்ராஃபில்ட்ரேஷன், டோசிங் சிஸ்டம், ஸ்லட்ஜ் சிஸ்டம், ஒரு ஆர் ஓ சிஸ்டம் பக்கம், பம்புகளை மட்டும் சேர்க்கும் ஒரு பக்கமும் இருக்கலாம். கவனம் செலுத்த விரும்பும் பிரிவைத் தேர்வு செய்கிறீர்கள்.',
          tip: { type: 'tipLabel', text: 'பக்கங்கள் ஒவ்வொரு ஆலைக்கும் அமைக்கப்படுகின்றன — ஒவ்வொன்றும் முழு ஸ்கீமாட்டிக்கின் ஒரு கவனம் செலுத்திய வெட்டு.' },
        },
        {
          label: 'ஒரு பிரிவு', title: 'பக்கம் அந்தப் பிரிவை மட்டும் ஏற்றுகிறது',
          body: 'ஒரு பக்கத்தைத் தேர்வு செய்தால் காட்சி <strong>அந்தப் பிரிவுக்கு மட்டும்</strong> மாறுகிறது — இங்கே <strong>முதன்மை சுத்திகரிப்பு</strong>: உள்ளீட்டு ஓட்டம், <strong>கோர்ஸ் மற்றும் ஃபைன் ஸ்கிரீன்கள்</strong> அவற்றின் ஆன்/ஆஃப் நிலையுடன், மட்ட அளவிகள், மற்றும் <strong>க்ரிட் சேனல்கள்</strong>. அதே நேரலை தரவு, உங்களுக்குத் தேவையானதில் கவனம்.',
          voice: 'ஒரு பக்கத்தைத் தேர்வு செய்யும்போது, காட்சி அந்தப் பிரிவை மட்டும் காட்ட மாறுகிறது — முழு ஆலையைப் போலவே, முழுமையாக நேரலை. இதோ முதன்மை சுத்திகரிப்புப் பக்கம். உள்ளீட்டு ஓட்ட விகிதம், கோர்ஸ் மற்றும் ஃபைன் ஸ்கிரீன்கள் அவற்றின் ஆன்-ஆஃப் நிலையுடன், ஒவ்வொரு சேனலிலும் மட்ட அளவிகள், மற்றும் படிந்த திடப்பொருளுடன் க்ரிட் சேனல்களைக் காண்கிறீர்கள். எல்லாம் இன்னும் நிகழ் நேரத்தில் புதுப்பிக்கப்படுகிறது, ஆனால் இப்போது உங்களுக்குத் தேவையான ஆலையின் சரியான பகுதியை, வேறு எதுவும் இடையில் இல்லாமல் பார்க்கிறீர்கள். இதுதான் விஷுவலைசேஷன் — உங்கள் முழு ஆலை, நேரலை, அசையும், பிரிவு வாரியாக, உங்கள் ஆராய்ச்சிக்கு.',
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
          body: 'हेच तिला खास बनवते — ती <strong>अॅनिमेट</strong> होते, आणि प्रत्येक मशीन स्वतःच्या पद्धतीने हलते. चालणारा <strong>पंप</strong> त्याचा <strong>इम्पेलर</strong> फिरवतो; <strong>ब्लोअर</strong> त्याचा <strong>गियरसारखा रोटर</strong> फिरवतो; <strong>फ्लॉक्युलेटरचे पॅडल</strong> हळूहळू फिरते; वाहणारे पाइप <strong>हलणारे पाणी</strong> दाखवतात; वायुवीजन टँक <strong>बुडबुडे</strong> सोडतात; आणि <strong>क्लॅरिफायर</strong> साचलेल्या <strong>स्लजवर</strong> स्वच्छ पाणी ठेवतो.',
          voice: 'आणि हेच तिला खरोखर वेगळे बनवते — ती हलते, आणि प्रत्येक मशीन स्वतःच्या वेगळ्या पद्धतीने अॅनिमेट होते. चालणारा पंप त्याचा इम्पेलर फिरवतो — तो चार-ब्लेडचा प्रोपेलर. ब्लोअर वेगळा आहे — तो एका गियरसारख्या रोटरला फिरवतो, अगदी खऱ्या एअर ब्लोअरसारखा. फ्लॉक्युलेटर त्याचे पॅडल हळूहळू फिरवून केमिस्ट्री हळुवारपणे मिसळतो. पाणी वाहत असताना, पाइप ते वाहताना दाखवतो. ब्लोअर त्यांना हवा देताना वायुवीजन टँक बुडबुडे सोडतात. आणि शेवटी क्लॅरिफायर बसलेला असतो — वर स्वच्छ पाणी, खाली साचलेली तपकिरी स्लज, आणि त्याचे इनलेट, आउटलेट व स्लज पाइप वाहत असतात. एक पंप चालू करा, आणि लगेच खालचा पाइप प्रवाहाने जिवंत होतो. स्क्रीनवरचा प्लांट फील्डमधल्या खऱ्यासारखाच वागतो. हा आकृती नाही — हा प्लांट आहे, जिवंत.',
        },
        {
          label: 'बॅक-डेटेड', title: 'भूतकाळातील कोणताही क्षण पुन्हा चालवा',
          body: '<strong>play</strong> दाबा आणि एक <strong>तारीख व वेळ</strong> निवडा, आणि ट्विन प्लांट <strong>तेव्हा जसा होता</strong> तसा पुन्हा चालवते — प्रत्येक पातळी, प्रत्येक पंप, प्रत्येक प्रवाह. एखादी गडबड तास किंवा दिवसांनंतर तपासण्यासाठी योग्य.',
          voice: 'ती फक्त लाइव्ह नाही. play दाबा, भूतकाळातील कोणतीही तारीख आणि वेळ निवडा, आणि डिजिटल ट्विन मागे जाते — प्लांट त्या क्षणी जसा होता अगदी तसा पुन्हा चालवते. प्रत्येक टँक पातळी, प्रत्येक पंप स्थिती, प्रत्येक प्रवाह, पुन्हा तयार केलेला. म्हणून रात्री काही चुकले, तर तुम्ही दुसऱ्या सकाळी येऊन त्या तासापर्यंत मागे जाऊ शकता, आणि प्लांट काय करत होता ते अक्षरशः पाहू शकता. एखादी गडबड नंतर तपासण्याचा हा सर्वोत्तम मार्ग आहे.',
          tip: { type: 'rememberLabel', text: 'लाइव्ह मोड आता दाखवतो; play दाबा आणि एक वेळ निवडा म्हणजे प्लांट तेव्हा जसा होता तसा पुन्हा चालवता येईल.' },
        },
        {
          label: 'पेजेस', title: 'प्लांट विभागांमध्ये कापा',
          body: 'मोठा प्लांट एकाच वेळी पाहणे खूप होते. <strong>पेजेस</strong> तुम्हाला एका वेळी एका विभागावर लक्ष केंद्रित करू देतात. <strong>Select Page</strong> यादीतून निवडा — <em>प्राथमिक उपचार</em>, <em>दुय्यम उपचार</em>, <em>SBR</em>, <em>अल्ट्राफिल्ट्रेशन</em>, <em>डोसिंग</em>, <em>स्लज सिस्टम</em>, <em>RO सिस्टम</em>, एक <em>पंप</em> पेज, आणि अधिक.',
          voice: 'शेवटी, संपूर्ण प्लांट एकाच वेळी पाहणे जड होऊ शकते. म्हणून आम्ही तो पेजेसमध्ये कापतो — वरच्या Select Page यादीतून तुम्ही निवडता ते विभाग दृश्य. एक प्राथमिक उपचार पेज, एक दुय्यम पेज, एक एस बी आर विभाग, अल्ट्राफिल्ट्रेशन, डोसिंग सिस्टम, स्लज सिस्टम, एक आर ओ सिस्टम पेज, किंवा फक्त पंप एकत्र करणारे एक पेजही असू शकते. तुम्ही लक्ष केंद्रित करू इच्छिता तो विभाग निवडता.',
          tip: { type: 'tipLabel', text: 'पेजेस प्रत्येक प्लांटसाठी कॉन्फिगर होतात — प्रत्येक संपूर्ण स्कीमॅटिकचा एक केंद्रित कट आहे.' },
        },
        {
          label: 'एक विभाग', title: 'पेज फक्त तो विभाग लोड करतो',
          body: 'एक पेज निवडा आणि दृश्य <strong>फक्त त्या विभागावर</strong> बदलते — इथे <strong>प्राथमिक उपचार</strong>: इनलेट प्रवाह, <strong>कोर्स आणि फाइन स्क्रीन</strong> त्यांच्या ऑन/ऑफ स्थितीसह, लेव्हल गेज, आणि <strong>ग्रिट चॅनेल</strong>. तोच लाइव्ह डेटा, तुम्हाला हव्या त्यावर केंद्रित.',
          voice: 'आणि तुम्ही एक पेज निवडता तेव्हा, दृश्य फक्त तो विभाग दाखवण्यासाठी बदलते — संपूर्ण प्लांटप्रमाणेच, पूर्णपणे लाइव्ह. हा प्राथमिक उपचार पेज आहे. तुम्ही इनलेट प्रवाह दर पाहता, कोर्स आणि फाइन स्क्रीन त्यांच्या ऑन-ऑफ स्थितीसह, प्रत्येक चॅनेलवर लेव्हल गेज, आणि स्थिरावलेल्या घन पदार्थांसह ग्रिट चॅनेल. सर्व काही अजूनही रिअल टाइममध्ये अपडेट होत आहे, पण आता तुम्ही प्लांटचा नेमका तोच भाग पाहत आहात जो तुम्हाला हवा, मध्ये दुसरे काहीही नाही. हे आहे व्हिज्युअलायझेशन — तुमचा संपूर्ण प्लांट, लाइव्ह, अॅनिमेटेड, विभागानुसार, आणि तुम्हाला एक्सप्लोर करण्यासाठी.',
          tip: { type: 'upNextLabel', text: 'लाइव्ह, ऐतिहासिक, आणि विभागानुसार — तुमचा प्लांट एका दृष्टीक्षेपात.' },
        },
      ],
    },
  },
};

export default lesson;
