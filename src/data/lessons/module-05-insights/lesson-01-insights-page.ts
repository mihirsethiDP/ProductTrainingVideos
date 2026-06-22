import type { InsightRow, InsightsData, Lesson } from '../../types';

/**
 * Module 5 · Lesson 1 — The Insights Page.   Tag: M5.L1
 * Insights (formerly "alerts") triggered by observation conditions: the page,
 * its counters, types/priority/status, filters, and a single insight up close.
 */

const ROWS: InsightRow[] = [
  { name: 'Customer Jigar Industries — Flow meter data is touching the minimum of range of measurement', desc: 'Flow meter reading is at the lower limit of the measurement range.', ago: '2 months ago', status: 'Open', priority: 'high', asset: 'SteamHouse India', equipment: 'Jigar Industries', type: 'Warning' },
  { name: 'DMF PT showing 0 for more than 1 hour', desc: 'DMF PT is not working properly — check and report to Supervisor.', ago: '8 months ago', status: 'Open', priority: 'high', asset: 'Vatika Tower (75 KLD)', type: 'Issue' },
  { name: 'Chlorine Contact Tank Level has reached 90%, as indicated by the Level Transmitter', desc: "Stop the reactor feed pump and report to 'Supervisor' and 'Client'.", ago: 'a year ago', status: 'Open', priority: 'high', asset: 'Vatika Atrium (75 KLD)', type: 'Warning', action: "Stop the reactor feed pump and report to 'Supervisor' and 'Client'.", ring: true },
  { name: 'DO of Aeration tank-1 is less than 1 ppm', desc: 'DO less than 1 ppm could cause a hypoxic zone for the biomass.', ago: '2 months ago', status: 'Open', priority: 'medium', asset: 'Amity University Noida', equipment: 'Aeration Tank-1', type: 'Issue' },
  { name: 'Sludge holding tank level is high (reached 90%)', desc: 'Empty the sludge holding tank to avoid an overflow.', ago: '2 months ago', status: 'Open', priority: 'medium', asset: 'Parx Laureate STP', type: 'Issue' },
  { name: 'Plant ran within all quality limits for 30 days straight', desc: 'All treated-water parameters stayed within spec for a full month.', ago: '3 days ago', status: 'Closed', priority: 'low', asset: 'Plaksha STP', type: 'Achievement' },
];

const STATS = { all: '189,145', openAlarms: '237', closedAlarms: '174,334', achievements: '14,574' };
const CHLORINE = ROWS[2];

const page = (highlight: InsightsData['highlight']): InsightsData => ({ mode: 'page', stats: STATS, insights: ROWS, highlight });

const lesson: Lesson = {
  id: 'lesson-01-insights-page',
  moduleId: 'module-05-insights',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'insights', caption: 'The Insights page',
      widgetState: { insights: page(null) }, cursor: [{ at: 0.2, x: 40, y: 55 }] },
    { mode: 'widget', widget: 'insights', caption: 'The four counters',
      widgetState: { insights: page('stats') }, cursor: [{ at: 0.2, x: 25, y: 32 }, { at: 0.6, x: 80, y: 32 }] },
    { mode: 'widget', widget: 'insights', caption: 'Type, priority & status',
      widgetState: { insights: page('types') }, cursor: [{ at: 0.3, x: 88, y: 55 }, { at: 0.7, x: 68, y: 55 }] },
    { mode: 'widget', widget: 'insights', caption: 'Filter, search & create',
      widgetState: { insights: page('filters') }, cursor: [{ at: 0.2, x: 30, y: 20 }, { at: 0.7, x: 90, y: 10 }] },
    { mode: 'widget', widget: 'insights', caption: 'An insight up close',
      widgetState: { insights: { mode: 'detail', insight: CHLORINE, highlight: 'action' } }, cursor: [{ at: 0.4, x: 50, y: 75 }] },
  ],
  content: {
    en: {
      title: 'The <em>Insights</em><br>Page.',
      subtitle:
        'Insights are how the platform tells you something needs attention — every one in a single, filterable place.',
      chapter: 'Chapter Five · Eyes on the Plant',
      steps: [
        {
          label: 'Overview', title: 'What an insight is',
          body: "An <strong>insight</strong> is the platform flagging that something needs your attention. (We used to call these <em>alerts</em>.) Each one is triggered by an <strong>observation condition</strong> set up during configuration — when that condition is met, an insight fires. The <strong>Insights</strong> page is the home for all of them.",
          voice: "This is one of the most important features in the whole platform — Insights. As a company we used to call these alerts, but they're now insights. An insight is simply the system telling you that something needs your attention. Every insight is triggered by what we call an observation condition — a rule we set up during configuration. When that condition is met out in the plant, an insight fires automatically. And this page is the single home for every insight across your sites.",
        },
        {
          label: 'Counters', title: 'Four counters at the top',
          body: "Four tallies sit up top: <strong>All Insights</strong>, <strong>Open Alarms</strong> (still needing action), <strong>Closed Alarms</strong> (resolved), and <strong>Achievements</strong> (the good news — targets met). At a glance you know how much is open right now.",
          voice: "Across the top, four counters give you the headline. All insights ever raised. Open alarms — the ones still needing action. Closed alarms — those already resolved. And achievements — these are the good news insights, like a target being met or a clean run. So before you read a single row, you already know how many things are open and demanding attention right now.",
          tip: { type: 'tipLabel', text: 'Open Alarms is the number to watch — it is what still needs someone to act.' },
        },
        {
          label: 'Type & Priority', title: 'Type, priority and status',
          body: "Each insight has a <strong>type</strong> — <strong>Warning</strong>, <strong>Issue</strong>, or <strong>Achievement</strong> — a <strong>priority</strong> (high, medium, low), and a <strong>status</strong> (Open or Closed). The arrows and colours let you triage the list in seconds.",
          voice: "Now reading the list. Every insight carries three quick signals. A type — a warning, an issue, or a positive achievement. A priority — high, medium, or low, shown by the arrow on the right. And a status — open or closed. So you can scan down the page and immediately spot the high-priority, open issues that need you first, and tell them apart from the achievements, which are simply good to know.",
        },
        {
          label: 'Filters', title: 'Filter, search and create',
          body: "Narrow the list by <strong>type</strong>, <strong>priority</strong>, or <strong>relative time</strong>, or filter by <strong>workspace</strong> and <strong>asset</strong>. Search by keyword. And from here you can also <strong>Create Insight</strong> — define a new observation condition.",
          voice: "With nearly two hundred thousand insights in the system, filtering is everything. You can narrow the list by type, by priority, by a relative time range, or by workspace and asset. You can search by keyword to find a specific one. And from the top right, you can also create a new insight — which means defining a new observation condition for the system to watch for. So this page isn't just for reading insights, it's where you set them up too.",
        },
        {
          label: 'Up Close', title: 'An insight up close',
          body: "Open any insight for the full picture: its <strong>type</strong>, <strong>priority</strong>, the <strong>asset</strong> it relates to, when it fired, a clear <strong>description</strong>, and — crucially — the <strong>recommended action</strong> telling the operator exactly what to do.",
          voice: "And when you open a single insight, you get the full picture. The type and priority, the asset and equipment it relates to, exactly when it fired, and a plain description of what's happening. But the most valuable part is the recommended action — it tells the operator exactly what to do about it. Like here: stop the reactor feed pump and report to the supervisor and client. An insight doesn't just raise a flag, it tells you how to respond. In the next lesson, we'll see how these reach you the moment they fire.",
          tip: { type: 'upNextLabel', text: 'Next: insights delivered to you instantly, wherever you are.' },
        },
      ],
    },
    hi: {
      title: '<em>इनसाइट्स</em><br>पेज।',
      subtitle:
        'इनसाइट्स वह तरीका है जिससे प्लेटफ़ॉर्म आपको बताता है कि किसी चीज़ पर ध्यान चाहिए — हर एक एक ही, फ़िल्टर-योग्य जगह पर।',
      chapter: 'अध्याय पाँच · प्लांट पर नज़र',
      steps: [
        {
          label: 'अवलोकन', title: 'इनसाइट क्या है',
          body: 'एक <strong>इनसाइट</strong> वह है जब प्लेटफ़ॉर्म संकेत देता है कि किसी चीज़ पर आपका ध्यान चाहिए। (पहले हम इन्हें <em>अलर्ट</em> कहते थे।) हर एक कॉन्फ़िगरेशन के समय सेट की गई <strong>ऑब्ज़र्वेशन कंडीशन</strong> से ट्रिगर होती है। <strong>इनसाइट्स</strong> पेज इन सबका घर है।',
          voice: 'यह पूरे प्लेटफ़ॉर्म की सबसे महत्वपूर्ण सुविधाओं में से एक है — इनसाइट्स। एक कंपनी के रूप में हम इन्हें अलर्ट कहते थे, पर अब ये इनसाइट्स हैं। एक इनसाइट बस सिस्टम का आपको यह बताना है कि किसी चीज़ पर आपका ध्यान चाहिए। हर इनसाइट उस चीज़ से ट्रिगर होती है जिसे हम ऑब्ज़र्वेशन कंडीशन कहते हैं — एक नियम जो हम कॉन्फ़िगरेशन के समय सेट करते हैं। जब वह कंडीशन प्लांट में पूरी होती है, एक इनसाइट अपने आप ट्रिगर होती है। और यह पेज आपकी सभी साइटों की हर इनसाइट का एकमात्र घर है।',
        },
        {
          label: 'काउंटर', title: 'ऊपर चार काउंटर',
          body: 'ऊपर चार गिनतियाँ हैं: <strong>All Insights</strong>, <strong>Open Alarms</strong> (अभी भी कार्रवाई चाहिए), <strong>Closed Alarms</strong> (हल हो गई), और <strong>Achievements</strong> (अच्छी खबर — लक्ष्य पूरे)। एक नज़र में आप जानते हैं कि अभी कितना खुला है।',
          voice: 'ऊपर, चार काउंटर आपको मुख्य बात देते हैं। अब तक उठाई गई सभी इनसाइट्स। ओपन अलार्म — जिन्हें अभी कार्रवाई चाहिए। क्लोज़्ड अलार्म — जो पहले ही हल हो गईं। और अचीवमेंट्स — ये अच्छी खबर वाली इनसाइट्स हैं, जैसे कोई लक्ष्य पूरा होना या साफ़ संचालन। तो एक भी पंक्ति पढ़ने से पहले, आप पहले से जानते हैं कि अभी कितनी चीज़ें खुली हैं और ध्यान माँग रही हैं।',
          tip: { type: 'tipLabel', text: 'ओपन अलार्म वह संख्या है जिस पर नज़र रखें — यही अभी भी किसी की कार्रवाई चाहती है।' },
        },
        {
          label: 'प्रकार और प्राथमिकता', title: 'प्रकार, प्राथमिकता और स्थिति',
          body: 'हर इनसाइट का एक <strong>प्रकार</strong> है — <strong>Warning</strong>, <strong>Issue</strong>, या <strong>Achievement</strong> — एक <strong>प्राथमिकता</strong> (उच्च, मध्यम, निम्न), और एक <strong>स्थिति</strong> (Open या Closed)। तीर और रंग सेकंडों में सूची को छाँटने देते हैं।',
          voice: 'अब सूची पढ़ना। हर इनसाइट तीन त्वरित संकेत रखती है। एक प्रकार — चेतावनी, समस्या, या सकारात्मक उपलब्धि। एक प्राथमिकता — उच्च, मध्यम, या निम्न, दाईं ओर तीर से दिखाई गई। और एक स्थिति — खुली या बंद। तो आप पेज पर नज़र दौड़ाकर तुरंत उच्च-प्राथमिकता, खुली समस्याएँ पहचान सकते हैं जिन्हें पहले आपकी ज़रूरत है, और उन्हें उपलब्धियों से अलग बता सकते हैं, जो बस जानना अच्छा है।',
        },
        {
          label: 'फ़िल्टर', title: 'फ़िल्टर, खोज और बनाएँ',
          body: '<strong>प्रकार</strong>, <strong>प्राथमिकता</strong>, या <strong>सापेक्ष समय</strong> से सूची संकीर्ण करें, या <strong>वर्कस्पेस</strong> और <strong>एसेट</strong> से फ़िल्टर करें। कीवर्ड से खोजें। और यहाँ से आप <strong>Create Insight</strong> भी कर सकते हैं — एक नई ऑब्ज़र्वेशन कंडीशन परिभाषित करें।',
          voice: 'सिस्टम में लगभग दो लाख इनसाइट्स के साथ, फ़िल्टरिंग ही सब कुछ है। आप सूची को प्रकार, प्राथमिकता, सापेक्ष समय सीमा, या वर्कस्पेस और एसेट से संकीर्ण कर सकते हैं। किसी विशिष्ट को ढूँढने के लिए कीवर्ड से खोज सकते हैं। और ऊपर दाईं ओर से, आप एक नई इनसाइट भी बना सकते हैं — जिसका मतलब है सिस्टम के देखने के लिए एक नई ऑब्ज़र्वेशन कंडीशन परिभाषित करना। तो यह पेज सिर्फ़ इनसाइट्स पढ़ने के लिए नहीं, यहाँ आप उन्हें सेट भी करते हैं।',
        },
        {
          label: 'करीब से', title: 'एक इनसाइट करीब से',
          body: 'पूरी तस्वीर के लिए कोई भी इनसाइट खोलें: उसका <strong>प्रकार</strong>, <strong>प्राथमिकता</strong>, संबंधित <strong>एसेट</strong>, यह कब ट्रिगर हुई, एक स्पष्ट <strong>विवरण</strong>, और — सबसे महत्वपूर्ण — <strong>अनुशंसित कार्रवाई</strong> जो ऑपरेटर को बताती है कि वास्तव में क्या करना है।',
          voice: 'और जब आप एक इनसाइट खोलते हैं, आपको पूरी तस्वीर मिलती है। प्रकार और प्राथमिकता, संबंधित एसेट और उपकरण, यह ठीक कब ट्रिगर हुई, और क्या हो रहा है उसका सरल विवरण। पर सबसे मूल्यवान हिस्सा है अनुशंसित कार्रवाई — यह ऑपरेटर को ठीक-ठीक बताती है कि इसके बारे में क्या करना है। जैसे यहाँ: रिएक्टर फ़ीड पंप रोकें और सुपरवाइज़र व क्लाइंट को रिपोर्ट करें। एक इनसाइट सिर्फ़ झंडा नहीं उठाती, यह बताती है कि कैसे प्रतिक्रिया देनी है। अगले पाठ में, हम देखेंगे कि ये ट्रिगर होते ही आप तक कैसे पहुँचती हैं।',
          tip: { type: 'upNextLabel', text: 'आगे: इनसाइट्स जो आप तक तुरंत पहुँचती हैं, जहाँ भी आप हों।' },
        },
      ],
    },
    ta: {
      title: '<em>இன்சைட்ஸ்</em><br>பக்கம்.',
      subtitle:
        'ஏதாவது கவனம் தேவை என்பதை தளம் உங்களுக்குச் சொல்லும் வழியே இன்சைட்ஸ் — ஒவ்வொன்றும் ஒரே, வடிகட்டக்கூடிய இடத்தில்.',
      chapter: 'அத்தியாயம் ஐந்து · ஆலையின் மீது கண்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'இன்சைட் என்றால் என்ன',
          body: 'ஏதாவது உங்கள் கவனம் தேவை என்பதை தளம் சுட்டிக்காட்டுவதே ஒரு <strong>இன்சைட்</strong>. (முன்பு இவற்றை <em>அலர்ட்</em> என்றோம்.) ஒவ்வொன்றும் அமைப்பின்போது அமைக்கப்பட்ட ஒரு <strong>கண்காணிப்பு நிபந்தனையால்</strong> தூண்டப்படுகிறது. <strong>இன்சைட்ஸ்</strong> பக்கம் இவை அனைத்தின் இல்லம்.',
          voice: 'இது முழு தளத்திலும் மிக முக்கியமான அம்சங்களில் ஒன்று — இன்சைட்ஸ். ஒரு நிறுவனமாக இவற்றை அலர்ட் என்றோம், ஆனால் இப்போது இவை இன்சைட்ஸ். ஏதாவது உங்கள் கவனம் தேவை என்பதை சிஸ்டம் உங்களுக்குச் சொல்வதே ஒரு இன்சைட். ஒவ்வொரு இன்சைட்டும் கண்காணிப்பு நிபந்தனை எனப்படும் ஒரு விதியால் தூண்டப்படுகிறது — அமைப்பின்போது நாம் அமைக்கும் விதி. அந்த நிபந்தனை ஆலையில் பூர்த்தியாகும்போது, ஒரு இன்சைட் தானாகத் தூண்டப்படுகிறது. இந்தப் பக்கம் உங்கள் தளங்கள் முழுவதிலுமான ஒவ்வொரு இன்சைட்டின் ஒரே இல்லம்.',
        },
        {
          label: 'எண்ணிக்கைகள்', title: 'மேலே நான்கு எண்ணிக்கைகள்',
          body: 'மேலே நான்கு கணக்குகள்: <strong>All Insights</strong>, <strong>Open Alarms</strong> (இன்னும் நடவடிக்கை தேவை), <strong>Closed Alarms</strong> (தீர்க்கப்பட்டது), <strong>Achievements</strong> (நல்ல செய்தி — இலக்குகள் எட்டப்பட்டன). இப்போது எவ்வளவு திறந்துள்ளது என்பதை ஒரே பார்வையில் அறிவீர்கள்.',
          voice: 'மேலே, நான்கு எண்ணிக்கைகள் தலைப்புச் செய்தியைத் தருகின்றன. இதுவரை எழுப்பப்பட்ட அனைத்து இன்சைட்ஸ். ஓபன் அலர்ம்ஸ் — இன்னும் நடவடிக்கை தேவையானவை. க்ளோஸ்டு அலர்ம்ஸ் — ஏற்கனவே தீர்க்கப்பட்டவை. மற்றும் அச்சீவ்மென்ட்ஸ் — இவை நல்ல செய்தி இன்சைட்ஸ், ஒரு இலக்கு எட்டப்படுதல் அல்லது சுத்தமான இயக்கம் போல. எனவே ஒரு வரியையும் படிக்கும் முன், எத்தனை திறந்து கவனம் கோருகின்றன என்பது உங்களுக்கு ஏற்கனவே தெரியும்.',
          tip: { type: 'tipLabel', text: 'ஓபன் அலர்ம்ஸ்தான் கவனிக்க வேண்டிய எண் — இன்னும் யாரோ நடவடிக்கை எடுக்க வேண்டியது இதுவே.' },
        },
        {
          label: 'வகை & முன்னுரிமை', title: 'வகை, முன்னுரிமை, நிலை',
          body: 'ஒவ்வொரு இன்சைட்டுக்கும் ஒரு <strong>வகை</strong> — <strong>Warning</strong>, <strong>Issue</strong>, அல்லது <strong>Achievement</strong> — ஒரு <strong>முன்னுரிமை</strong> (உயர், நடுத்தர, குறை), ஒரு <strong>நிலை</strong> (Open அல்லது Closed). அம்புகளும் வண்ணங்களும் பட்டியலை விநாடிகளில் வரிசைப்படுத்த உதவுகின்றன.',
          voice: 'இப்போது பட்டியலைப் படிப்பது. ஒவ்வொரு இன்சைட்டும் மூன்று விரைவு சமிக்ஞைகளைக் கொண்டுள்ளது. ஒரு வகை — எச்சரிக்கை, சிக்கல், அல்லது நேர்மறை சாதனை. ஒரு முன்னுரிமை — உயர், நடுத்தர, அல்லது குறை, வலதுபுற அம்பால் காட்டப்படுகிறது. ஒரு நிலை — திறந்த அல்லது மூடிய. எனவே பக்கத்தில் கண்ணோட்டமிட்டு, முதலில் உங்கள் தேவைப்படும் உயர்-முன்னுரிமை, திறந்த சிக்கல்களை உடனே கண்டறிந்து, அவற்றை சாதனைகளிலிருந்து வேறுபடுத்தலாம்.',
        },
        {
          label: 'வடிகட்டிகள்', title: 'வடிகட்டு, தேடு, உருவாக்கு',
          body: '<strong>வகை</strong>, <strong>முன்னுரிமை</strong>, அல்லது <strong>ஒப்பீட்டு நேரம்</strong> மூலம் பட்டியலைச் சுருக்குங்கள், அல்லது <strong>பணியிடம்</strong> மற்றும் <strong>சொத்து</strong> மூலம் வடிகட்டுங்கள். முக்கிய வார்த்தையால் தேடுங்கள். இங்கிருந்து <strong>Create Insight</strong>-உம் செய்யலாம் — ஒரு புதிய கண்காணிப்பு நிபந்தனையை வரையறுக்கலாம்.',
          voice: 'சிஸ்டத்தில் கிட்டத்தட்ட இரண்டு லட்சம் இன்சைட்ஸுடன், வடிகட்டுதலே எல்லாம். பட்டியலை வகை, முன்னுரிமை, ஒப்பீட்டு நேர வரம்பு, அல்லது பணியிடம் மற்றும் சொத்து மூலம் சுருக்கலாம். ஒரு குறிப்பிட்டதைக் கண்டறிய முக்கிய வார்த்தையால் தேடலாம். மேல் வலதுபுறத்திலிருந்து, ஒரு புதிய இன்சைட்டையும் உருவாக்கலாம் — அதாவது சிஸ்டம் கவனிக்க ஒரு புதிய கண்காணிப்பு நிபந்தனையை வரையறுப்பது. எனவே இந்தப் பக்கம் இன்சைட்ஸைப் படிக்க மட்டுமல்ல, அவற்றை அமைக்கவும்.',
        },
        {
          label: 'நெருக்கமாக', title: 'ஒரு இன்சைட் நெருக்கமாக',
          body: 'முழுப் படத்திற்கு எந்த இன்சைட்டையும் திறங்கள்: அதன் <strong>வகை</strong>, <strong>முன்னுரிமை</strong>, தொடர்புடைய <strong>சொத்து</strong>, எப்போது தூண்டப்பட்டது, ஒரு தெளிவான <strong>விளக்கம்</strong>, மற்றும் — முக்கியமாக — இயக்குனர் என்ன செய்ய வேண்டும் என்பதைச் சொல்லும் <strong>பரிந்துரைக்கப்பட்ட நடவடிக்கை</strong>.',
          voice: 'ஒரு இன்சைட்டைத் திறக்கும்போது, முழுப் படத்தைப் பெறுகிறீர்கள். வகை, முன்னுரிமை, தொடர்புடைய சொத்து மற்றும் உபகரணம், எப்போது தூண்டப்பட்டது, என்ன நடக்கிறது என்பதன் எளிய விளக்கம். ஆனால் மிக மதிப்புமிக்க பகுதி பரிந்துரைக்கப்பட்ட நடவடிக்கை — இயக்குனர் இதைப் பற்றி என்ன செய்ய வேண்டும் என்பதைச் சரியாகச் சொல்கிறது. இங்கே போல: ரியாக்டர் ஃபீட் பம்பை நிறுத்தி மேற்பார்வையாளர் மற்றும் வாடிக்கையாளருக்குப் புகாரளிக்கவும். ஒரு இன்சைட் வெறும் கொடியை உயர்த்தவில்லை, எப்படிப் பதிலளிப்பது என்பதையும் சொல்கிறது. அடுத்த பாடத்தில், இவை தூண்டப்படும் தருணத்தில் உங்களை எப்படி அடைகின்றன என்று பார்ப்போம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: நீங்கள் எங்கிருந்தாலும் உடனே உங்களை அடையும் இன்சைட்ஸ்.' },
        },
      ],
    },
    mr: {
      title: '<em>इनसाइट्स</em><br>पेज.',
      subtitle:
        'एखाद्या गोष्टीकडे लक्ष हवे हे प्लॅटफॉर्म तुम्हाला सांगण्याचा मार्ग म्हणजे इनसाइट्स — प्रत्येक एकाच, फिल्टर करण्यायोग्य ठिकाणी.',
      chapter: 'अध्याय पाच · प्लांटवर नजर',
      steps: [
        {
          label: 'आढावा', title: 'इनसाइट म्हणजे काय',
          body: 'एखाद्या गोष्टीकडे तुमचे लक्ष हवे हे प्लॅटफॉर्म दर्शवते तीच एक <strong>इनसाइट</strong>. (पूर्वी आम्ही यांना <em>अलर्ट</em> म्हणत असू.) प्रत्येक कॉन्फिगरेशनच्या वेळी सेट केलेल्या <strong>ऑब्झर्वेशन कंडिशन</strong>ने ट्रिगर होते. <strong>इनसाइट्स</strong> पेज या सर्वांचे घर आहे.',
          voice: 'हे संपूर्ण प्लॅटफॉर्ममधील सर्वात महत्त्वाच्या वैशिष्ट्यांपैकी एक आहे — इनसाइट्स. कंपनी म्हणून आम्ही यांना अलर्ट म्हणत असू, पण आता या इनसाइट्स आहेत. एखाद्या गोष्टीकडे तुमचे लक्ष हवे हे सिस्टमने तुम्हाला सांगणे म्हणजे एक इनसाइट. प्रत्येक इनसाइट आम्ही ज्याला ऑब्झर्वेशन कंडिशन म्हणतो त्याने ट्रिगर होते — कॉन्फिगरेशनच्या वेळी आम्ही सेट केलेला नियम. ती कंडिशन प्लांटमध्ये पूर्ण झाली की, एक इनसाइट आपोआप ट्रिगर होते. आणि हे पेज तुमच्या सर्व साइट्सवरील प्रत्येक इनसाइटचे एकमेव घर आहे.',
        },
        {
          label: 'काउंटर', title: 'वर चार काउंटर',
          body: 'वर चार मोजण्या आहेत: <strong>All Insights</strong>, <strong>Open Alarms</strong> (अजून कृती हवी), <strong>Closed Alarms</strong> (सोडवलेल्या), आणि <strong>Achievements</strong> (चांगली बातमी — लक्ष्ये पूर्ण). आता किती उघडे आहे ते एका दृष्टीक्षेपात कळते.',
          voice: 'वर, चार काउंटर तुम्हाला मुख्य गोष्ट देतात. आतापर्यंत उठवलेल्या सर्व इनसाइट्स. ओपन अलार्म — ज्यांना अजून कृती हवी. क्लोज्ड अलार्म — ज्या आधीच सोडवल्या. आणि अचिव्हमेंट्स — या चांगल्या बातमीच्या इनसाइट्स आहेत, जसे एखादे लक्ष्य पूर्ण होणे किंवा स्वच्छ कामकाज. म्हणून एकही ओळ वाचण्याआधी, आता किती गोष्टी उघड्या आहेत आणि लक्ष मागत आहेत हे तुम्हाला आधीच कळते.',
          tip: { type: 'tipLabel', text: 'ओपन अलार्म हा लक्ष ठेवायचा आकडा — अजून कुणाची तरी कृती हवी असलेला तोच आहे.' },
        },
        {
          label: 'प्रकार व प्राधान्य', title: 'प्रकार, प्राधान्य आणि स्थिती',
          body: 'प्रत्येक इनसाइटला एक <strong>प्रकार</strong> आहे — <strong>Warning</strong>, <strong>Issue</strong>, किंवा <strong>Achievement</strong> — एक <strong>प्राधान्य</strong> (उच्च, मध्यम, कमी), आणि एक <strong>स्थिती</strong> (Open किंवा Closed). बाण आणि रंग सेकंदात यादी क्रमवारी लावू देतात.',
          voice: 'आता यादी वाचणे. प्रत्येक इनसाइट तीन झटपट संकेत बाळगते. एक प्रकार — इशारा, समस्या, किंवा सकारात्मक यश. एक प्राधान्य — उच्च, मध्यम, किंवा कमी, उजवीकडच्या बाणाने दाखवलेले. आणि एक स्थिती — उघडी किंवा बंद. म्हणून तुम्ही पेजवर नजर टाकून लगेच उच्च-प्राधान्य, उघड्या समस्या ओळखू शकता ज्यांना आधी तुमची गरज आहे, आणि त्यांना यशांपासून वेगळे करू शकता.',
        },
        {
          label: 'फिल्टर', title: 'फिल्टर, शोध आणि तयार करा',
          body: '<strong>प्रकार</strong>, <strong>प्राधान्य</strong>, किंवा <strong>सापेक्ष वेळ</strong>ने यादी संकुचित करा, किंवा <strong>वर्कस्पेस</strong> आणि <strong>असेट</strong>ने फिल्टर करा. कीवर्डने शोधा. आणि इथून तुम्ही <strong>Create Insight</strong>ही करू शकता — एक नवीन ऑब्झर्वेशन कंडिशन परिभाषित करा.',
          voice: 'सिस्टममध्ये जवळपास दोन लाख इनसाइट्ससह, फिल्टरिंग हेच सर्व काही. तुम्ही यादी प्रकार, प्राधान्य, सापेक्ष वेळ श्रेणी, किंवा वर्कस्पेस आणि असेटने संकुचित करू शकता. विशिष्ट शोधण्यासाठी कीवर्डने शोधू शकता. आणि वर उजवीकडून, तुम्ही एक नवीन इनसाइटही तयार करू शकता — म्हणजे सिस्टमने पाहण्यासाठी एक नवीन ऑब्झर्वेशन कंडिशन परिभाषित करणे. म्हणून हे पेज फक्त इनसाइट्स वाचण्यासाठी नाही, इथे तुम्ही त्या सेटही करता.',
        },
        {
          label: 'जवळून', title: 'एक इनसाइट जवळून',
          body: 'संपूर्ण चित्रासाठी कोणतीही इनसाइट उघडा: तिचा <strong>प्रकार</strong>, <strong>प्राधान्य</strong>, संबंधित <strong>असेट</strong>, ती कधी ट्रिगर झाली, एक स्पष्ट <strong>वर्णन</strong>, आणि — महत्त्वाचे — ऑपरेटरला नेमके काय करायचे ते सांगणारी <strong>शिफारस केलेली कृती</strong>.',
          voice: 'आणि तुम्ही एक इनसाइट उघडता तेव्हा, तुम्हाला संपूर्ण चित्र मिळते. प्रकार आणि प्राधान्य, संबंधित असेट आणि उपकरण, ती नेमकी कधी ट्रिगर झाली, आणि काय घडत आहे याचे साधे वर्णन. पण सर्वात मौल्यवान भाग म्हणजे शिफारस केलेली कृती — ती ऑपरेटरला याबद्दल नेमके काय करायचे ते सांगते. जसे इथे: रिअॅक्टर फीड पंप थांबवा आणि पर्यवेक्षक व क्लायंटला कळवा. एक इनसाइट फक्त झेंडा उभारत नाही, ती कसा प्रतिसाद द्यायचा तेही सांगते. पुढच्या पाठात, या ट्रिगर होताच तुमच्यापर्यंत कशा पोहोचतात ते पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: तुम्ही कुठेही असाल, तुमच्यापर्यंत लगेच पोहोचणाऱ्या इनसाइट्स.' },
        },
      ],
    },
  },
};

export default lesson;
