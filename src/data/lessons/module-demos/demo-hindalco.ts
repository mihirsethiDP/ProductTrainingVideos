import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-hindalco`;

/**
 * Personalized demo — Hindalco Mahaan.   (hidden module-demos)
 * Built from the CSM's two screen recordings. Style (per Mihir's feedback):
 * cover EVERYTHING in the context, move fast (pages & sections, not one
 * widget per step), and teach navigation know-how. Real screenshots from the
 * recordings; one quick interactive step teaches how to read any widget.
 */
const lesson: Lesson = {
  id: 'demo-hindalco',
  moduleId: 'module-demos',
  lessonNumber: 1,
  estimatedMinutes: 3,
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    summary: `${BASE}/summary.jpg`,
    analytics: `${BASE}/analytics.jpg`,
    twin: `${BASE}/twin.jpg`,
    datainput: `${BASE}/datainput.jpg`,
  },
  layouts: [
    // S1 — navigation: pages, time, refresh/download
    {
      mode: 'detail', screenshot: 'nav', caption: 'Navigating your dashboard',
      spotlight: { top: '22%', left: '1%', width: '98%', height: '28%' },
      cursor: [
        { at: 0.1, x: 13, y: 40, click: true },
        { at: 0.45, x: 38, y: 41 },
        { at: 0.7, x: 62, y: 41 },
        { at: 0.88, x: 74, y: 28, click: true },
      ],
    },
    // S2 — how to read ANY widget (one quick interactive step)
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Reading any widget — 3 seconds',
      widgetState: {
        accent: 'pink', title: 'CPP Water Consumption', value: '30220.77', unitTag: 'Hindalco Mahaan',
        fromLabel: 'Jun 29 | 23:00', toLabel: 'Jun 30 | 18:03', changePct: '45.4', highlight: 'change',
      },
      cursor: [
        { at: 0.15, x: 50, y: 12 },
        { at: 0.4, x: 50, y: 44 },
        { at: 0.75, x: 82, y: 88, click: true },
      ],
    },
    // S3 — the Summary Page, end to end
    {
      mode: 'detail', screenshot: 'summary', caption: 'Summary Page — your water balance',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 14, y: 27 },
        { at: 0.5, x: 55, y: 45 },
        { at: 0.8, x: 55, y: 80 },
      ],
    },
    // S4 — Detailed Analytics + automated water accounting
    {
      mode: 'detail', screenshot: 'analytics', caption: 'Detailed Analytics — water accounting',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 14, y: 30 },
        { at: 0.45, x: 50, y: 60 },
        { at: 0.78, x: 40, y: 92 },
      ],
    },
    // S5 — the live digital twin
    {
      mode: 'detail', screenshot: 'twin', caption: 'Plant View — your live digital twin',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 25, y: 45 },
        { at: 0.5, x: 55, y: 55 },
        { at: 0.8, x: 80, y: 50 },
      ],
    },
    // S6 — Data Input: daily lab readings
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Data Input — daily lab readings',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 25, y: 38 },
        { at: 0.5, x: 48, y: 58 },
        { at: 0.8, x: 90, y: 58 },
      ],
    },
    // S7 — wrap: how it all connects
    {
      mode: 'detail', screenshot: 'nav', caption: 'Your complete setup',
      spotlight: null,
      cursor: [
        { at: 0.25, x: 13, y: 40 },
        { at: 0.6, x: 50, y: 70 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Your <em>Hindalco Mahaan</em><br>setup.',
      subtitle:
        'A fast tour of everything we set up for your plant — how to move around, how to read it, and where each feature lives.',
      chapter: 'Personalized demo · Hindalco Mahaan',
      steps: [
        {
          label: 'Navigate', title: 'Moving around your dashboard',
          body: "The <strong>Page selector</strong> (top-left) switches between your dashboards — <strong>Summary, Detailed Analytics, MBR STP, Plant View</strong>. Next to it, <strong>Granularity</strong> and the <strong>time range</strong> drive every widget on the page at once. Top-right: <strong>refresh</strong> and <strong>download</strong>.",
          voice: "Welcome — here's everything we've set up for Hindalco Mahaan, and how to get around it. Top left, the Page selector switches between your dashboards: Summary, Detailed Analytics, M B R S T P, and Plant View. Beside it, granularity and the time range drive every widget on the page at once. And top right — refresh for the latest data, download to export.",
        },
        {
          label: 'Read', title: 'Reading any widget — three seconds',
          body: "Every card works the same way: the <strong>title</strong> says which reading, the <strong>big number</strong> is its value for your chosen time range, and the <strong>bottom %</strong> compares it to the previous period — red down, green up. Learn one card, and you've learnt them all.",
          voice: "Every card on every page works the same way. The title says which reading it is. The big number is its value over your chosen time range. And the bottom percentage compares it to the previous period — red means down, green means up. Here, C P P water consumption: thirty thousand kilolitres, down forty-five percent. Learn one card, and you've learnt them all.",
        },
        {
          label: 'Summary', title: 'Summary Page — the water balance',
          body: "Your <strong>Summary Page</strong> is the daily view: <strong>Plant Summary</strong> (reservoir draw, PT plant, CPP, metal), then <strong>Clarified Water</strong> (production, CT make-up, service water) and <strong>Potable Water</strong> (smelter, CPP, colony). One scroll = your entire balance, reservoir to tap.",
          voice: "Your Summary Page is the daily view. Plant Summary up top — reservoir draw, the P T plant, C P P and metal. Then clarified water: production, C T make-up, service water. And potable water across the smelter, C P P and colony. One scroll and you've read your entire water balance, reservoir to tap.",
        },
        {
          label: 'Analytics', title: 'Detailed Analytics — automated accounting',
          body: "The <strong>Detailed Analytics</strong> page goes deeper: <strong>Raw → Clarified → PT Quality → Evaporation Loss → DM Water</strong>, section by section. Best of all, it computes your <strong>Deviation</strong> and <strong>% Unaccounted Loss &amp; Leakages</strong> (−1.27%) automatically, every day.",
          voice: "When you need to go deeper, switch to Detailed Analytics. It walks the whole chain — raw water, clarified, P T quality, evaporation loss, D M water — section by section. And at the bottom, it does your water accounting for you: deviation and percentage of unaccounted loss and leakages, minus one point two seven percent, computed automatically every day.",
        },
        {
          label: 'Plant View', title: 'Your live digital twin',
          body: "<strong>Plant View</strong> is a live digital twin of Hindalco Mahaan — raw water tank, pumping, DM plant, CHP, filtration lines — with <strong>real flow rates animating</strong> on the diagram. Watch water move through your plant from your desk.",
          voice: "Plant View is our favourite — a live digital twin of Hindalco Mahaan. The raw water tank, pumping, the D M plant, C H P, the filtration lines — with real flow rates animating right on the diagram. You watch water move through your plant, live, from your desk.",
        },
        {
          label: 'Data Input', title: 'Daily lab readings',
          body: "Readings with no sensor — alkalinity, chlorides, hardness, pH — go in on <strong>Data Input</strong>, once a day. <strong>Search or filter</strong> to find the sensor, type the value, done; each row keeps its <strong>last value</strong>, and entries feed the same dashboards.",
          voice: "And the readings that come from your lab rather than a sensor — alkalinity, chlorides, hardness, p H — go in on the Data Input page, once a day. Search or filter to find the row, type the value, done. Each row remembers its last value, and everything you enter feeds those same dashboards.",
        },
        {
          label: 'Wrap', title: 'That’s your complete setup',
          body: "Four pages, one pattern: <strong>Summary</strong> for the daily glance, <strong>Analytics</strong> for the accounting, <strong>Plant View</strong> to see it live, <strong>Data Input</strong> for the lab. The full training inside covers every screen — and reach out any time to extend your setup.",
          voice: "And that's your complete setup. Summary for the daily glance, Detailed Analytics for the accounting, Plant View to see it live, and Data Input for the lab. The full training inside covers every screen in your language — and reach out any time you'd like us to extend it.",
        },
      ],
    },
    hi: {
      title: 'आपका <em>हिंडाल्को महान</em><br>सेटअप।',
      subtitle: 'आपके प्लांट के लिए तैयार हर चीज़ का तेज़ दौरा — कैसे घूमें, कैसे पढ़ें, और हर फ़ीचर कहाँ है।',
      chapter: 'व्यक्तिगत डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'नेविगेशन', title: 'डैशबोर्ड में घूमना',
          body: "<strong>पेज सिलेक्टर</strong> (ऊपर-बाएँ) आपके डैशबोर्ड बदलता है — <strong>समरी, डिटेल्ड एनालिटिक्स, MBR STP, प्लांट व्यू</strong>। उसके बगल में <strong>ग्रैन्युलैरिटी</strong> और <strong>समय सीमा</strong> पेज के हर विजेट को एक साथ चलाते हैं। ऊपर-दाएँ: <strong>रिफ्रेश</strong> और <strong>डाउनलोड</strong>।",
          voice: "स्वागत है — यह है हिंडाल्को महान के लिए तैयार हर चीज़, और उसमें घूमने का तरीका। ऊपर बाएँ, पेज सिलेक्टर आपके डैशबोर्ड बदलता है: समरी, डिटेल्ड एनालिटिक्स, एम बी आर एस टी पी, और प्लांट व्यू। उसके बगल में, ग्रैन्युलैरिटी और समय सीमा पेज के हर विजेट को एक साथ चलाते हैं। और ऊपर दाएँ — ताज़ा डेटा के लिए रिफ्रेश, निर्यात के लिए डाउनलोड।",
        },
        {
          label: 'पढ़ना', title: 'कोई भी विजेट — तीन सेकंड में',
          body: "हर कार्ड एक जैसे काम करता है: <strong>शीर्षक</strong> बताता है कौन सी रीडिंग, <strong>बड़ा नंबर</strong> चुनी हुई समय सीमा का मान है, और <strong>नीचे का %</strong> पिछली अवधि से तुलना — लाल नीचे, हरा ऊपर। एक कार्ड सीखा, सब सीख लिए।",
          voice: "हर पेज का हर कार्ड एक ही तरह काम करता है। शीर्षक बताता है कौन सी रीडिंग है। बड़ा नंबर आपकी चुनी समय सीमा का मान है। और नीचे का प्रतिशत पिछली अवधि से तुलना करता है — लाल यानी नीचे, हरा यानी ऊपर। यहाँ, सीपीपी जल खपत: तीस हज़ार किलोलीटर, पैंतालीस प्रतिशत नीचे। एक कार्ड सीखा, तो सब सीख लिए।",
        },
        {
          label: 'समरी', title: 'समरी पेज — जल संतुलन',
          body: "आपका <strong>समरी पेज</strong> रोज़ का दृश्य है: <strong>प्लांट समरी</strong> (जलाशय, पीटी प्लांट, सीपीपी, धातु), फिर <strong>क्लैरिफाइड वाटर</strong> (उत्पादन, सीटी मेक-अप, सर्विस वाटर) और <strong>पोटेबल वाटर</strong> (स्मेल्टर, सीपीपी, कॉलोनी)। एक स्क्रॉल = पूरा संतुलन।",
          voice: "आपका समरी पेज रोज़ का दृश्य है। ऊपर प्लांट समरी — जलाशय से खींचा पानी, पीटी प्लांट, सीपीपी और धातु। फिर क्लैरिफाइड वाटर: उत्पादन, सीटी मेक-अप, सर्विस वाटर। और स्मेल्टर, सीपीपी व कॉलोनी का पोटेबल वाटर। एक स्क्रॉल में आपने पूरा जल संतुलन पढ़ लिया, जलाशय से नल तक।",
        },
        {
          label: 'एनालिटिक्स', title: 'डिटेल्ड एनालिटिक्स — स्वचालित लेखा',
          body: "<strong>डिटेल्ड एनालिटिक्स</strong> पेज गहराई में जाता है: <strong>कच्चा → क्लैरिफाइड → पीटी क्वालिटी → वाष्पीकरण हानि → डीएम वाटर</strong>, खंड-दर-खंड। सबसे अच्छी बात — यह <strong>विचलन</strong> और <strong>बेहिसाब हानि व रिसाव %</strong> (−1.27%) हर दिन अपने-आप निकालता है।",
          voice: "जब गहराई में जाना हो, डिटेल्ड एनालिटिक्स पर जाएँ। यह पूरी शृंखला चलता है — कच्चा पानी, क्लैरिफाइड, पीटी क्वालिटी, वाष्पीकरण हानि, डीएम वाटर — खंड-दर-खंड। और नीचे, यह आपका जल लेखा खुद करता है: विचलन और बेहिसाब हानि व रिसाव का प्रतिशत, माइनस एक दशमलव दो सात प्रतिशत, हर दिन अपने-आप।",
        },
        {
          label: 'प्लांट व्यू', title: 'आपका लाइव डिजिटल ट्विन',
          body: "<strong>प्लांट व्यू</strong> हिंडाल्को महान का लाइव डिजिटल ट्विन है — कच्चे पानी की टंकी, पंपिंग, डीएम प्लांट, सीएचपी, फिल्ट्रेशन — आरेख पर <strong>असली प्रवाह दरें चलती</strong> हुईं। अपनी डेस्क से पानी को प्लांट में बहते देखें।",
          voice: "प्लांट व्यू हमारा पसंदीदा है — हिंडाल्को महान का लाइव डिजिटल ट्विन। कच्चे पानी की टंकी, पंपिंग, डीएम प्लांट, सीएचपी, फिल्ट्रेशन लाइनें — आरेख पर असली प्रवाह दरें चलती हुईं। आप अपनी डेस्क से, लाइव, पानी को अपने प्लांट में बहते देखते हैं।",
        },
        {
          label: 'डेटा इनपुट', title: 'दैनिक लैब रीडिंग',
          body: "जिनका सेंसर नहीं — क्षारीयता, क्लोराइड, कठोरता, pH — वे <strong>डेटा इनपुट</strong> पर दिन में एक बार दर्ज होती हैं। <strong>खोजें या फ़िल्टर करें</strong>, मान लिखें, हो गया; हर पंक्ति <strong>पिछला मान</strong> रखती है और उन्हीं डैशबोर्ड में जाती है।",
          voice: "और जो रीडिंग सेंसर से नहीं, लैब से आती हैं — क्षारीयता, क्लोराइड, कठोरता, पीएच — वे डेटा इनपुट पेज पर दिन में एक बार दर्ज होती हैं। खोजें या फ़िल्टर करें, मान लिखें, हो गया। हर पंक्ति अपना पिछला मान याद रखती है, और सब कुछ उन्हीं डैशबोर्ड में जाता है।",
        },
        {
          label: 'सारांश', title: 'यही है आपका पूरा सेटअप',
          body: "चार पेज, एक पैटर्न: <strong>समरी</strong> रोज़ की नज़र के लिए, <strong>एनालिटिक्स</strong> लेखे के लिए, <strong>प्लांट व्यू</strong> लाइव देखने के लिए, <strong>डेटा इनपुट</strong> लैब के लिए। अंदर की पूरी ट्रेनिंग हर स्क्रीन सिखाती है — और सेटअप बढ़ाने के लिए कभी भी संपर्क करें।",
          voice: "और यही है आपका पूरा सेटअप। रोज़ की नज़र के लिए समरी, लेखे के लिए डिटेल्ड एनालिटिक्स, लाइव देखने के लिए प्लांट व्यू, और लैब के लिए डेटा इनपुट। अंदर की पूरी ट्रेनिंग हर स्क्रीन आपकी भाषा में सिखाती है — और इसे बढ़ाने के लिए कभी भी संपर्क करें।",
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>ஹிண்டால்கோ மஹான்</em><br>அமைப்பு.',
      subtitle: 'உங்கள் ஆலைக்காக அமைத்த அனைத்தின் விரைவுச் சுற்று — எப்படி நகர்வது, எப்படிப் படிப்பது, ஒவ்வொரு அம்சமும் எங்கே உள்ளது.',
      chapter: 'தனிப்பயன் டெமோ · ஹிண்டால்கோ மஹான்',
      steps: [
        {
          label: 'வழிசெலுத்தல்', title: 'டாஷ்போர்டில் நகர்தல்',
          body: "<strong>பக்கத் தேர்வி</strong> (மேல்-இடது) உங்கள் டாஷ்போர்டுகளை மாற்றுகிறது — <strong>சுருக்கம், விரிவான அனலிட்டிக்ஸ், MBR STP, பிளாண்ட் வியூ</strong>. அதன் அருகில், <strong>நுணுக்கம்</strong> மற்றும் <strong>கால வரம்பு</strong> பக்கத்தின் ஒவ்வொரு விட்ஜெட்டையும் ஒரே நேரத்தில் இயக்குகின்றன. மேல்-வலது: <strong>ரிஃப்ரெஷ்</strong> & <strong>டவுன்லோட்</strong>.",
          voice: "வரவேற்கிறேன் — இதோ ஹிண்டால்கோ மஹானுக்காக அமைத்த அனைத்தும், அதில் நகரும் வழியும். மேல் இடதில், பக்கத் தேர்வி உங்கள் டாஷ்போர்டுகளை மாற்றுகிறது: சுருக்கம், விரிவான அனலிட்டிக்ஸ், எம் பி ஆர் எஸ் டி பி, பிளாண்ட் வியூ. அதன் அருகில், நுணுக்கமும் கால வரம்பும் பக்கத்தின் ஒவ்வொரு விட்ஜெட்டையும் ஒரே நேரத்தில் இயக்குகின்றன. மேல் வலதில் — புதிய தரவுக்கு ரிஃப்ரெஷ், ஏற்றுமதிக்கு டவுன்லோட்.",
        },
        {
          label: 'படித்தல்', title: 'எந்த விட்ஜெட்டும் — மூன்று நொடியில்',
          body: "ஒவ்வொரு கார்டும் ஒரே மாதிரி: <strong>தலைப்பு</strong> எந்த அளவீடு என்று சொல்கிறது, <strong>பெரிய எண்</strong> தேர்ந்த கால வரம்பின் மதிப்பு, <strong>கீழே %</strong> முந்தைய காலத்துடன் ஒப்பீடு — சிவப்பு கீழே, பச்சை மேலே. ஒரு கார்டு கற்றால், எல்லாம் கற்றது போலவே.",
          voice: "ஒவ்வொரு பக்கத்திலும் ஒவ்வொரு கார்டும் ஒரே மாதிரி வேலை செய்கிறது. தலைப்பு எந்த அளவீடு என்று சொல்கிறது. பெரிய எண் நீங்கள் தேர்ந்த கால வரம்பின் மதிப்பு. கீழே உள்ள சதவீதம் முந்தைய காலத்துடன் ஒப்பிடுகிறது — சிவப்பு கீழே, பச்சை மேலே. இங்கே, சிபிபி நீர் நுகர்வு: முப்பதாயிரம் கிலோலிட்டர், நாற்பத்தைந்து சதவீதம் கீழே. ஒரு கார்டு கற்றால், எல்லாம் கற்றுவிட்டீர்கள்.",
        },
        {
          label: 'சுருக்கம்', title: 'சுருக்கப் பக்கம் — நீர் சமநிலை',
          body: "உங்கள் <strong>சுருக்கப் பக்கம்</strong> தினசரி காட்சி: <strong>ஆலை சுருக்கம்</strong> (நீர்த்தேக்கம், பிடி ஆலை, சிபிபி, உலோகம்), பின் <strong>தெளிவுபடுத்தப்பட்ட நீர்</strong> (உற்பத்தி, சிடி மேக்-அப், சேவை நீர்) மற்றும் <strong>குடிநீர்</strong> (ஸ்மெல்டர், சிபிபி, காலனி). ஒரே ஸ்க்ரோலில் = முழு சமநிலை.",
          voice: "உங்கள் சுருக்கப் பக்கம் தினசரி காட்சி. மேலே ஆலை சுருக்கம் — நீர்த்தேக்க எடுப்பு, பிடி ஆலை, சிபிபி, உலோகம். பின் தெளிவுபடுத்தப்பட்ட நீர்: உற்பத்தி, சிடி மேக்-அப், சேவை நீர். ஸ்மெல்டர், சிபிபி, காலனியின் குடிநீர். ஒரே ஸ்க்ரோலில் உங்கள் முழு நீர் சமநிலையையும் படித்துவிட்டீர்கள், நீர்த்தேக்கத்திலிருந்து குழாய் வரை.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'விரிவான அனலிட்டிக்ஸ் — தானியங்கி கணக்கு',
          body: "<strong>விரிவான அனலிட்டிக்ஸ்</strong> பக்கம் ஆழமாகச் செல்கிறது: <strong>மூலம் → தெளிவு → பிடி தரம் → ஆவியாதல் இழப்பு → டிஎம் நீர்</strong>, பிரிவு-பிரிவாக. சிறப்பாக, அது <strong>விலகல்</strong> மற்றும் <strong>கணக்கில் வராத இழப்பு %</strong> (−1.27%) ஐ தினமும் தானாகக் கணக்கிடுகிறது.",
          voice: "ஆழமாகச் செல்ல வேண்டுமெனில், விரிவான அனலிட்டிக்ஸுக்கு மாறுங்கள். முழுச் சங்கிலியையும் நடக்கிறது — மூல நீர், தெளிவு, பிடி தரம், ஆவியாதல் இழப்பு, டிஎம் நீர் — பிரிவு-பிரிவாக. கீழே, உங்கள் நீர் கணக்கை அதுவே செய்கிறது: விலகலும், கணக்கில் வராத இழப்பு-கசிவு சதவீதமும் — மைனஸ் ஒன்று புள்ளி இரண்டு ஏழு — தினமும் தானாக.",
        },
        {
          label: 'பிளாண்ட் வியூ', title: 'உங்கள் நேரடி டிஜிட்டல் ட்வின்',
          body: "<strong>பிளாண்ட் வியூ</strong> ஹிண்டால்கோ மஹானின் நேரடி டிஜிட்டல் ட்வின் — மூல நீர் தொட்டி, பம்பிங், டிஎம் ஆலை, சிஎச்பி, வடிகட்டல் — வரைபடத்தில் <strong>உண்மையான ஓட்ட விகிதங்கள்</strong> அசைகின்றன. மேசையிலிருந்தே ஆலையில் நீர் ஓடுவதைப் பாருங்கள்.",
          voice: "பிளாண்ட் வியூ எங்களின் விருப்பம் — ஹிண்டால்கோ மஹானின் நேரடி டிஜிட்டல் ட்வின். மூல நீர் தொட்டி, பம்பிங், டிஎம் ஆலை, சிஎச்பி, வடிகட்டல் வரிசைகள் — வரைபடத்திலேயே உண்மையான ஓட்ட விகிதங்கள் அசைகின்றன. உங்கள் மேசையிலிருந்தே, நேரலையில், ஆலையில் நீர் ஓடுவதைப் பார்க்கிறீர்கள்.",
        },
        {
          label: 'தரவு உள்ளீடு', title: 'தினசரி ஆய்வக அளவீடுகள்',
          body: "சென்சார் இல்லாதவை — காரத்தன்மை, குளோரைடு, கடினத்தன்மை, pH — <strong>தரவு உள்ளீட்டில்</strong> தினம் ஒருமுறை. <strong>தேடுங்கள் அல்லது வடிகட்டுங்கள்</strong>, மதிப்பை உள்ளிடுங்கள், முடிந்தது; ஒவ்வொரு வரிசையும் <strong>கடைசி மதிப்பை</strong> வைத்திருக்கும், பதிவுகள் அதே டாஷ்போர்டுகளுக்குச் செல்லும்.",
          voice: "சென்சாரிலிருந்து அல்லாமல் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் — காரத்தன்மை, குளோரைடு, கடினத்தன்மை, பிஎச் — தரவு உள்ளீட்டுப் பக்கத்தில் தினம் ஒருமுறை பதிவாகின்றன. தேடுங்கள் அல்லது வடிகட்டுங்கள், மதிப்பை உள்ளிடுங்கள், முடிந்தது. ஒவ்வொரு வரிசையும் தன் கடைசி மதிப்பை நினைவில் வைத்திருக்கும், நீங்கள் உள்ளிடும் அனைத்தும் அதே டாஷ்போர்டுகளுக்குச் செல்லும்.",
        },
        {
          label: 'நிறைவு', title: 'இதுதான் உங்கள் முழு அமைப்பு',
          body: "நான்கு பக்கங்கள், ஒரே முறை: தினசரிப் பார்வைக்கு <strong>சுருக்கம்</strong>, கணக்குக்கு <strong>அனலிட்டிக்ஸ்</strong>, நேரலையில் காண <strong>பிளாண்ட் வியூ</strong>, ஆய்வகத்திற்கு <strong>தரவு உள்ளீடு</strong>. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் கற்பிக்கிறது — விரிவாக்க எப்போதும் தொடர்பு கொள்ளுங்கள்.",
          voice: "இதுதான் உங்கள் முழு அமைப்பு. தினசரிப் பார்வைக்கு சுருக்கம், கணக்குக்கு விரிவான அனலிட்டிக்ஸ், நேரலையில் காண பிளாண்ட் வியூ, ஆய்வகத்திற்கு தரவு உள்ளீடு. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் உங்கள் மொழியில் கற்பிக்கிறது — விரிவாக்க விரும்பினால் எப்போதும் தொடர்பு கொள்ளுங்கள்.",
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>हिंडाल्को महान</em><br>सेटअप.',
      subtitle: 'तुमच्या प्लांटसाठी तयार केलेल्या प्रत्येक गोष्टीचा जलद दौरा — कसे फिरावे, कसे वाचावे, आणि प्रत्येक फीचर कुठे आहे.',
      chapter: 'वैयक्तिक डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'नेव्हिगेशन', title: 'डॅशबोर्डमध्ये फिरणे',
          body: "<strong>पेज सिलेक्टर</strong> (वर-डावीकडे) तुमचे डॅशबोर्ड बदलतो — <strong>समरी, डिटेल्ड अ‍ॅनालिटिक्स, MBR STP, प्लांट व्ह्यू</strong>. त्याच्या शेजारी <strong>ग्रॅन्युलॅरिटी</strong> आणि <strong>वेळ श्रेणी</strong> पानावरील प्रत्येक विजेट एकाच वेळी चालवतात. वर-उजवीकडे: <strong>रिफ्रेश</strong> व <strong>डाउनलोड</strong>.",
          voice: "स्वागत आहे — हे आहे हिंडाल्को महानसाठी तयार केलेले सर्व काही, आणि त्यात फिरण्याची पद्धत. वर डावीकडे, पेज सिलेक्टर तुमचे डॅशबोर्ड बदलतो: समरी, डिटेल्ड अ‍ॅनालिटिक्स, एमबीआर एसटीपी, आणि प्लांट व्ह्यू. त्याच्या शेजारी, ग्रॅन्युलॅरिटी आणि वेळ श्रेणी पानावरील प्रत्येक विजेट एकाच वेळी चालवतात. आणि वर उजवीकडे — ताज्या डेटासाठी रिफ्रेश, निर्यातीसाठी डाउनलोड.",
        },
        {
          label: 'वाचन', title: 'कोणतेही विजेट — तीन सेकंदांत',
          body: "प्रत्येक कार्ड सारखेच: <strong>शीर्षक</strong> कोणते रीडिंग ते सांगते, <strong>मोठा आकडा</strong> निवडलेल्या वेळ श्रेणीचे मूल्य, आणि <strong>खालचा %</strong> मागील कालावधीशी तुलना — लाल खाली, हिरवा वर. एक कार्ड शिकलात, की सर्व शिकलात.",
          voice: "प्रत्येक पानावरचे प्रत्येक कार्ड एकाच पद्धतीने काम करते. शीर्षक कोणते रीडिंग ते सांगते. मोठा आकडा तुम्ही निवडलेल्या वेळ श्रेणीचे मूल्य आहे. आणि खालची टक्केवारी मागील कालावधीशी तुलना करते — लाल म्हणजे खाली, हिरवा म्हणजे वर. इथे, सीपीपी पाणी वापर: तीस हजार किलोलीटर, पंचेचाळीस टक्के खाली. एक कार्ड शिकलात, की सर्व शिकलात.",
        },
        {
          label: 'समरी', title: 'समरी पेज — जल संतुलन',
          body: "तुमचे <strong>समरी पेज</strong> रोजचे दृश्य: <strong>प्लांट समरी</strong> (जलाशय, पीटी प्लांट, सीपीपी, धातू), मग <strong>क्लॅरिफाइड वॉटर</strong> (उत्पादन, सीटी मेक-अप, सर्व्हिस वॉटर) आणि <strong>पोटेबल वॉटर</strong> (स्मेल्टर, सीपीपी, कॉलनी). एक स्क्रोल = संपूर्ण संतुलन.",
          voice: "तुमचे समरी पेज रोजचे दृश्य आहे. वर प्लांट समरी — जलाशयातून घेतलेले पाणी, पीटी प्लांट, सीपीपी आणि धातू. मग क्लॅरिफाइड वॉटर: उत्पादन, सीटी मेक-अप, सर्व्हिस वॉटर. आणि स्मेल्टर, सीपीपी व कॉलनीचे पोटेबल वॉटर. एका स्क्रोलमध्ये तुम्ही संपूर्ण जल संतुलन वाचले, जलाशयापासून नळापर्यंत.",
        },
        {
          label: 'अ‍ॅनालिटिक्स', title: 'डिटेल्ड अ‍ॅनालिटिक्स — स्वयंचलित लेखा',
          body: "<strong>डिटेल्ड अ‍ॅनालिटिक्स</strong> पान खोलात जाते: <strong>कच्चे → क्लॅरिफाइड → पीटी गुणवत्ता → बाष्पीभवन तोटा → डीएम वॉटर</strong>, विभाग-दर-विभाग. सर्वात चांगले — ते <strong>विचलन</strong> आणि <strong>बेहिशेबी तोटा व गळती %</strong> (−1.27%) दररोज आपोआप काढते.",
          voice: "खोलात जायचे असेल तेव्हा डिटेल्ड अ‍ॅनालिटिक्सवर जा. ते संपूर्ण साखळी चालते — कच्चे पाणी, क्लॅरिफाइड, पीटी गुणवत्ता, बाष्पीभवन तोटा, डीएम वॉटर — विभाग-दर-विभाग. आणि खाली, ते तुमचा जल लेखा स्वतः करते: विचलन आणि बेहिशेबी तोटा व गळतीची टक्केवारी, उणे एक पूर्णांक दोन सात टक्के, दररोज आपोआप.",
        },
        {
          label: 'प्लांट व्ह्यू', title: 'तुमचा लाइव्ह डिजिटल ट्विन',
          body: "<strong>प्लांट व्ह्यू</strong> हिंडाल्को महानचा लाइव्ह डिजिटल ट्विन — कच्च्या पाण्याची टाकी, पंपिंग, डीएम प्लांट, सीएचपी, गाळण — आकृतीवर <strong>खरे प्रवाह दर</strong> हलताना. डेस्कवरूनच पाणी प्लांटमधून वाहताना पाहा.",
          voice: "प्लांट व्ह्यू आमचा आवडता — हिंडाल्को महानचा लाइव्ह डिजिटल ट्विन. कच्च्या पाण्याची टाकी, पंपिंग, डीएम प्लांट, सीएचपी, गाळण रेषा — आकृतीवरच खरे प्रवाह दर हलताना. तुम्ही डेस्कवरूनच, लाइव्ह, पाणी तुमच्या प्लांटमधून वाहताना पाहता.",
        },
        {
          label: 'डेटा इनपुट', title: 'दैनिक लॅब रीडिंग',
          body: "ज्यांना सेन्सर नाही — क्षारता, क्लोराइड्स, कठीणता, pH — त्या <strong>डेटा इनपुटवर</strong> दिवसातून एकदा. <strong>शोधा किंवा फिल्टर करा</strong>, मूल्य टाका, झाले; प्रत्येक ओळ <strong>शेवटचे मूल्य</strong> ठेवते आणि नोंदी त्याच डॅशबोर्डमध्ये जातात.",
          voice: "आणि ज्या रीडिंग सेन्सरकडून नव्हे तर लॅबकडून येतात — क्षारता, क्लोराइड्स, कठीणता, पीएच — त्या डेटा इनपुट पानावर दिवसातून एकदा नोंदवल्या जातात. शोधा किंवा फिल्टर करा, मूल्य टाका, झाले. प्रत्येक ओळ आपले शेवटचे मूल्य लक्षात ठेवते, आणि तुम्ही नोंदवलेले सर्व त्याच डॅशबोर्डमध्ये जाते.",
        },
        {
          label: 'सारांश', title: 'हाच तुमचा संपूर्ण सेटअप',
          body: "चार पाने, एक पॅटर्न: रोजच्या नजरेसाठी <strong>समरी</strong>, लेख्यासाठी <strong>अ‍ॅनालिटिक्स</strong>, लाइव्ह पाहण्यासाठी <strong>प्लांट व्ह्यू</strong>, लॅबसाठी <strong>डेटा इनपुट</strong>. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन शिकवते — सेटअप वाढवण्यासाठी कधीही संपर्क करा.",
          voice: "आणि हाच तुमचा संपूर्ण सेटअप. रोजच्या नजरेसाठी समरी, लेख्यासाठी डिटेल्ड अ‍ॅनालिटिक्स, लाइव्ह पाहण्यासाठी प्लांट व्ह्यू, आणि लॅबसाठी डेटा इनपुट. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन तुमच्या भाषेत शिकवते — आणि सेटअप वाढवायचा असल्यास कधीही संपर्क करा.",
        },
      ],
    },
  },
};

export default lesson;
