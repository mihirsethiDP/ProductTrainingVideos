import type { Lesson, SmartHoursData } from '../../types';

/**
 * Module 1 · Lesson 2 — Smart Hours.   Tag: M1.L2
 * A dashboard time-range feature: freeze a custom daily time window on a
 * rolling basis. Uses the interactive SmartHoursWidget (recreated dialog).
 */

function sh(o: Partial<SmartHoursData>): SmartHoursData {
  return {
    periodLabel: 'Jun 21 - Jun 22, 2026',
    from: '11:00 PM',
    to: '11:00 PM',
    preset: 'Last 24 Hours',
    smartActive: true,
    granularity: 'Hours',
    ...o,
  };
}

const lesson: Lesson = {
  id: 'lesson-02-smart-hours',
  moduleId: 'module-01-dashboard',
  lessonNumber: 3,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'smartHours', caption: 'Time range · Smart Hours',
      widgetState: { smartHours: sh({}) }, cursor: [{ at: 0.1, x: 30, y: 40 }] },
    { mode: 'widget', widget: 'smartHours', caption: 'Turn on Smart Hours',
      widgetState: { smartHours: sh({ highlight: 'smart' }) }, cursor: [{ at: 0.2, x: 18, y: 56, click: true }] },
    { mode: 'widget', widget: 'smartHours', caption: 'Set your daily window',
      widgetState: { smartHours: sh({ from: '9:00 AM', to: '5:00 PM', preset: 'Last 3 Days', note: 'Operational window · 9 AM – 5 PM', highlight: 'fromto' }) },
      cursor: [{ at: 0.2, x: 14, y: 28 }, { at: 0.6, x: 32, y: 28 }] },
    { mode: 'widget', widget: 'smartHours', caption: '9 AM – 5 PM, last 3 days (rolling)',
      widgetState: { smartHours: sh({ from: '9:00 AM', to: '5:00 PM', preset: 'Last 3 Days', note: '9 AM – 5 PM for the last 3 days' }) },
      cursor: [{ at: 0.3, x: 62, y: 13 }] },
    { mode: 'widget', widget: 'smartHours', caption: 'Why it matters',
      widgetState: { smartHours: sh({ note: '11 PM – 11 PM · resets daily at 11 PM' }) },
      cursor: [{ at: 0.2, x: 18, y: 50 }] },
  ],
  content: {
    en: {
      title: 'Smart <em>Hours.</em>',
      subtitle:
        'Freeze a custom daily time window — on a rolling basis — so you only ever see the hours that matter.',
      chapter: "Chapter One · The Operator's Cockpit",
      steps: [
        {
          label: 'Overview', title: 'Custom relative time',
          body: "Open the dashboard's <strong>time range</strong> settings and you'll find <strong>Smart Hours</strong> — a way to <strong>freeze a custom time slot</strong> on a rolling basis, so the dashboard only ever shows the hours you care about.",
          voice: "Let's look at a powerful setting tucked inside the dashboard's time range — Smart Hours. In plain terms, Smart Hours lets you freeze a custom time window, on a rolling basis. So instead of seeing every hour of the day, your dashboard shows only the hours that matter to you, and keeps doing so as time rolls forward.",
        },
        {
          label: 'The Toggle', title: 'Turn on Smart Hours',
          body: "Tick the <strong>Smart Hours</strong> box and it goes <strong>ACTIVE</strong>. From then on, the daily time slot you set is applied to <strong>historical and future</strong> date ranges alike.",
          voice: "Turning it on is simple. Tick the Smart Hours box, and it shows ACTIVE. Once it's on, the daily time slot you choose is applied across every day in your range — both historical days and future ones — automatically.",
        },
        {
          label: 'Your Window', title: 'Set your From and To',
          body: "Set your daily window with <strong>From</strong> and <strong>To</strong> — say <strong>9:00 AM to 5:00 PM</strong>. That's your operational window, and the dashboard will show <em>only</em> those hours, every day.",
          voice: "Next, you define your window using the From and To times. Let's say nine in the morning to five in the evening — your plant's operational hours. With Smart Hours on, the dashboard will show only that nine to five window, for every day in the range you pick.",
          tip: { type: 'tipLabel', text: 'Set From and To to your shift or operational hours to cut out the noise from idle periods.' },
        },
        {
          label: 'Rolling', title: 'It rolls forward, every day',
          body: "Combine the window with a range. <strong>9 AM – 5 PM for the last 3 days</strong> shows only those hours, across three days — and it keeps <strong>rolling forward</strong> as each new day arrives.",
          voice: "Here's where it gets clever. Combine your window with a date range. Nine to five for the last three days shows you only the nine-to-five data, across three days. And it rolls forward continuously — tomorrow, it's the last three days again, always just the operational hours. Perfect for comparing one shift against another.",
        },
        {
          label: 'Why It Matters', title: 'Cleaner data, fairer comparisons',
          body: "Different windows behave differently: <strong>11 PM – 11 PM, last 24 hours</strong> resets the dashboard daily at 11 PM. The payoff: <strong>shift-based analysis</strong>, no noise from non-operational periods, and <strong>fairer performance comparisons</strong>.",
          voice: "Different windows give you different behaviours. For example, eleven PM to eleven PM over the last twenty four hours makes the dashboard reset cleanly every day at eleven. Whatever window you choose, the payoff is the same — you can do shift-based analysis, you strip out the noise from non-operational hours, and you get far more accurate, like-for-like performance comparisons. That's Smart Hours — precise control over time on your dashboard.",
          tip: { type: 'upNextLabel', text: 'You now control time on the dashboard with precision.' },
        },
      ],
    },
    hi: {
      title: 'स्मार्ट <em>आवर्स।</em>',
      subtitle:
        'एक कस्टम दैनिक समय खिड़की को रोलिंग आधार पर फ़्रीज़ करें — ताकि आप हमेशा केवल वही घंटे देखें जो मायने रखते हैं।',
      chapter: 'अध्याय एक · ऑपरेटर का कॉकपिट',
      steps: [
        {
          label: 'अवलोकन', title: 'कस्टम सापेक्ष समय',
          body: "डैशबोर्ड की <strong>समय अवधि</strong> सेटिंग्स खोलें और आपको <strong>स्मार्ट आवर्स</strong> मिलेगा — एक कस्टम समय स्लॉट को रोलिंग आधार पर <strong>फ़्रीज़</strong> करने का तरीका, ताकि डैशबोर्ड हमेशा केवल वही घंटे दिखाए जो आपके लिए मायने रखते हैं।",
          voice: 'चलिए डैशबोर्ड की समय अवधि में छिपी एक शक्तिशाली सेटिंग देखते हैं — स्मार्ट आवर्स। सरल शब्दों में, स्मार्ट आवर्स आपको एक कस्टम समय खिड़की को रोलिंग आधार पर फ़्रीज़ करने देता है। तो दिन के हर घंटे के बजाय, आपका डैशबोर्ड केवल वही घंटे दिखाता है जो आपके लिए मायने रखते हैं, और समय आगे बढ़ने पर भी ऐसा करता रहता है।',
        },
        {
          label: 'टॉगल', title: 'स्मार्ट आवर्स चालू करें',
          body: '<strong>स्मार्ट आवर्स</strong> बॉक्स पर टिक करें और यह <strong>ACTIVE</strong> हो जाता है। उसके बाद, आपके द्वारा सेट किया गया दैनिक समय स्लॉट <strong>ऐतिहासिक और भविष्य</strong> दोनों तिथि श्रेणियों पर लागू होता है।',
          voice: 'इसे चालू करना सरल है। स्मार्ट आवर्स बॉक्स पर टिक करें, और यह ACTIVE दिखाता है। एक बार चालू होने पर, आपके चुने हुए दैनिक समय स्लॉट को आपकी श्रेणी के हर दिन पर लागू किया जाता है — ऐतिहासिक दिन और भविष्य के दिन दोनों — स्वचालित रूप से।',
        },
        {
          label: 'आपकी खिड़की', title: 'अपना From और To सेट करें',
          body: '<strong>From</strong> और <strong>To</strong> से अपनी दैनिक खिड़की सेट करें — जैसे <strong>सुबह 9 से शाम 5</strong>। यह आपकी परिचालन खिड़की है, और डैशबोर्ड हर दिन <em>केवल</em> वही घंटे दिखाएगा।',
          voice: 'अगला, आप From और To समय से अपनी खिड़की परिभाषित करते हैं। मान लीजिए सुबह नौ से शाम पाँच — आपके प्लांट के परिचालन घंटे। स्मार्ट आवर्स चालू होने पर, डैशबोर्ड आपकी चुनी श्रेणी के हर दिन के लिए केवल वही नौ से पाँच की खिड़की दिखाएगा।',
          tip: { type: 'tipLabel', text: 'निष्क्रिय अवधि का शोर हटाने के लिए From और To को अपनी शिफ्ट या परिचालन घंटों पर सेट करें।' },
        },
        {
          label: 'रोलिंग', title: 'यह हर दिन आगे बढ़ता है',
          body: 'खिड़की को एक श्रेणी के साथ मिलाएँ। <strong>पिछले 3 दिनों के लिए सुबह 9 – शाम 5</strong> केवल वही घंटे दिखाता है, तीन दिनों में — और हर नया दिन आने पर यह <strong>आगे बढ़ता रहता है</strong>।',
          voice: 'यहाँ यह दिलचस्प होता है। अपनी खिड़की को एक तिथि श्रेणी के साथ मिलाएँ। पिछले तीन दिनों के लिए नौ से पाँच आपको केवल नौ से पाँच का डेटा दिखाता है, तीन दिनों में। और यह लगातार आगे बढ़ता है — कल, यह फिर से पिछले तीन दिन है, हमेशा केवल परिचालन घंटे। एक शिफ्ट की दूसरी से तुलना करने के लिए बढ़िया।',
        },
        {
          label: 'यह क्यों मायने रखता है', title: 'साफ़ डेटा, निष्पक्ष तुलना',
          body: 'अलग-अलग खिड़कियाँ अलग व्यवहार करती हैं: <strong>रात 11 – रात 11, पिछले 24 घंटे</strong> डैशबोर्ड को हर दिन रात 11 बजे रीसेट करता है। फ़ायदा: <strong>शिफ्ट-आधारित विश्लेषण</strong>, गैर-परिचालन अवधि का कोई शोर नहीं, और <strong>निष्पक्ष प्रदर्शन तुलना</strong>।',
          voice: 'अलग-अलग खिड़कियाँ आपको अलग व्यवहार देती हैं। उदाहरण के लिए, पिछले चौबीस घंटों में रात ग्यारह से रात ग्यारह डैशबोर्ड को हर दिन ग्यारह बजे साफ़-साफ़ रीसेट करता है। आप जो भी खिड़की चुनें, फ़ायदा वही है — आप शिफ्ट-आधारित विश्लेषण कर सकते हैं, गैर-परिचालन घंटों का शोर हटा सकते हैं, और कहीं अधिक सटीक, समान-से-समान प्रदर्शन तुलना पा सकते हैं। यह है स्मार्ट आवर्स — आपके डैशबोर्ड पर समय का सटीक नियंत्रण।',
          tip: { type: 'upNextLabel', text: 'अब आप डैशबोर्ड पर समय को सटीकता से नियंत्रित करते हैं।' },
        },
      ],
    },
    ta: {
      title: 'ஸ்மார்ட் <em>அவர்ஸ்.</em>',
      subtitle:
        'ஒரு தனிப்பயன் தினசரி கால சாளரத்தை — ரோலிங் அடிப்படையில் — முடக்கி வைக்கவும், இதனால் முக்கியமான மணிநேரங்களை மட்டுமே காண்பீர்கள்.',
      chapter: 'அத்தியாயம் ஒன்று · இயக்குனரின் பணியிடம்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'தனிப்பயன் ஒப்பீட்டு நேரம்',
          body: "டாஷ்போர்டின் <strong>கால அளவு</strong> அமைப்புகளைத் திறந்தால் <strong>ஸ்மார்ட் அவர்ஸ்</strong> கிடைக்கும் — ஒரு தனிப்பயன் கால இடைவெளியை ரோலிங் அடிப்படையில் <strong>முடக்கும்</strong> வழி, இதனால் டாஷ்போர்டு உங்களுக்கு முக்கியமான மணிநேரங்களை மட்டுமே காட்டுகிறது.",
          voice: 'டாஷ்போர்டின் கால அளவில் மறைந்துள்ள ஒரு சக்திவாய்ந்த அமைப்பைப் பார்ப்போம் — ஸ்மார்ட் அவர்ஸ். எளிமையாகச் சொன்னால், ஸ்மார்ட் அவர்ஸ் ஒரு தனிப்பயன் கால சாளரத்தை ரோலிங் அடிப்படையில் முடக்க அனுமதிக்கிறது. எனவே நாளின் ஒவ்வொரு மணிநேரத்திற்கும் பதிலாக, உங்கள் டாஷ்போர்டு உங்களுக்கு முக்கியமான மணிநேரங்களை மட்டுமே காட்டுகிறது, காலம் முன்னேறும்போதும் அப்படியே செய்கிறது.',
        },
        {
          label: 'டாகிள்', title: 'ஸ்மார்ட் அவர்ஸ் இயக்கவும்',
          body: '<strong>ஸ்மார்ட் அவர்ஸ்</strong> பெட்டியைத் தேர்வு செய்தால் அது <strong>ACTIVE</strong> ஆகிறது. அதன் பிறகு, நீங்கள் அமைக்கும் தினசரி கால இடைவெளி <strong>கடந்த கால மற்றும் எதிர்கால</strong> தேதி வரம்புகள் இரண்டிற்கும் பயன்படுத்தப்படுகிறது.',
          voice: 'இயக்குவது எளிது. ஸ்மார்ட் அவர்ஸ் பெட்டியைத் தேர்வு செய்யுங்கள், அது ACTIVE எனக் காட்டுகிறது. இயக்கப்பட்டவுடன், நீங்கள் தேர்ந்த தினசரி கால இடைவெளி உங்கள் வரம்பின் ஒவ்வொரு நாளுக்கும் பயன்படுத்தப்படுகிறது — கடந்த கால நாட்கள் மற்றும் எதிர்கால நாட்கள் இரண்டும் — தானாகவே.',
        },
        {
          label: 'உங்கள் சாளரம்', title: 'உங்கள் From மற்றும் To அமைக்கவும்',
          body: '<strong>From</strong> மற்றும் <strong>To</strong> மூலம் உங்கள் தினசரி சாளரத்தை அமைக்கவும் — சொல்லுங்கள் <strong>காலை 9 முதல் மாலை 5</strong> வரை. அது உங்கள் செயல்பாட்டு சாளரம், டாஷ்போர்டு ஒவ்வொரு நாளும் அந்த மணிநேரங்களை <em>மட்டுமே</em> காட்டும்.',
          voice: 'அடுத்து, From மற்றும் To நேரங்களைப் பயன்படுத்தி உங்கள் சாளரத்தை வரையறுக்கிறீர்கள். காலை ஒன்பது முதல் மாலை ஐந்து வரை என்று வைத்துக்கொள்வோம் — உங்கள் ஆலையின் செயல்பாட்டு மணிநேரங்கள். ஸ்மார்ட் அவர்ஸ் இயக்கப்பட்டால், நீங்கள் தேர்ந்த வரம்பின் ஒவ்வொரு நாளுக்கும் டாஷ்போர்டு அந்த ஒன்பது முதல் ஐந்து சாளரத்தை மட்டுமே காட்டும்.',
          tip: { type: 'tipLabel', text: 'செயலற்ற காலங்களின் இரைச்சலை நீக்க From மற்றும் To-ஐ உங்கள் ஷிஃப்ட் அல்லது செயல்பாட்டு மணிநேரங்களுக்கு அமைக்கவும்.' },
        },
        {
          label: 'ரோலிங்', title: 'இது ஒவ்வொரு நாளும் முன்னேறுகிறது',
          body: 'சாளரத்தை ஒரு வரம்புடன் இணைக்கவும். <strong>கடந்த 3 நாட்களுக்கு காலை 9 – மாலை 5</strong> அந்த மணிநேரங்களை மட்டுமே காட்டுகிறது, மூன்று நாட்களில் — ஒவ்வொரு புதிய நாளும் வரும்போது இது <strong>முன்னேறிக் கொண்டே</strong> இருக்கிறது.',
          voice: 'இங்கே இது சுவாரஸ்யமாகிறது. உங்கள் சாளரத்தை ஒரு தேதி வரம்புடன் இணைக்கவும். கடந்த மூன்று நாட்களுக்கு ஒன்பது முதல் ஐந்து உங்களுக்கு ஒன்பது-முதல்-ஐந்து தரவை மட்டுமே காட்டுகிறது, மூன்று நாட்களில். இது தொடர்ந்து முன்னேறுகிறது — நாளை, அது மீண்டும் கடந்த மூன்று நாட்கள், எப்போதும் செயல்பாட்டு மணிநேரங்கள் மட்டுமே. ஒரு ஷிஃப்டை மற்றொன்றுடன் ஒப்பிட சிறந்தது.',
        },
        {
          label: 'ஏன் முக்கியம்', title: 'தெளிவான தரவு, நியாயமான ஒப்பீடுகள்',
          body: 'வெவ்வேறு சாளரங்கள் வெவ்வேறாக செயல்படுகின்றன: <strong>இரவு 11 – இரவு 11, கடந்த 24 மணி</strong> டாஷ்போர்டை ஒவ்வொரு நாளும் இரவு 11 மணிக்கு மீட்டமைக்கிறது. பலன்: <strong>ஷிஃப்ட் அடிப்படையிலான பகுப்பாய்வு</strong>, செயலற்ற காலங்களின் இரைச்சல் இல்லை, <strong>நியாயமான செயல்திறன் ஒப்பீடுகள்</strong>.',
          voice: 'வெவ்வேறு சாளரங்கள் வெவ்வேறு நடத்தைகளைத் தருகின்றன. உதாரணமாக, கடந்த இருபத்தி நான்கு மணியில் இரவு பதினொன்று முதல் இரவு பதினொன்று வரை டாஷ்போர்டை ஒவ்வொரு நாளும் பதினொன்று மணிக்கு தெளிவாக மீட்டமைக்கிறது. நீங்கள் எந்த சாளரத்தைத் தேர்ந்தாலும், பலன் ஒன்றுதான் — ஷிஃப்ட் அடிப்படையிலான பகுப்பாய்வு செய்யலாம், செயலற்ற மணிநேரங்களின் இரைச்சலை நீக்கலாம், மிகவும் துல்லியமான, சமமான செயல்திறன் ஒப்பீடுகளைப் பெறலாம். அதுதான் ஸ்மார்ட் அவர்ஸ் — உங்கள் டாஷ்போர்டில் காலத்தின் மீது துல்லியமான கட்டுப்பாடு.',
          tip: { type: 'upNextLabel', text: 'இப்போது டாஷ்போர்டில் காலத்தை துல்லியமாகக் கட்டுப்படுத்துகிறீர்கள்.' },
        },
      ],
    },
    mr: {
      title: 'स्मार्ट <em>अवर्स.</em>',
      subtitle:
        'एक कस्टम दैनंदिन वेळ खिडकी — रोलिंग आधारावर — फ्रीझ करा, जेणेकरून तुम्ही नेहमी फक्त महत्त्वाचे तासच पाहाल.',
      chapter: 'अध्याय एक · ऑपरेटरचे कॉकपिट',
      steps: [
        {
          label: 'आढावा', title: 'कस्टम सापेक्ष वेळ',
          body: "डॅशबोर्डच्या <strong>वेळ अवधी</strong> सेटिंग्ज उघडा आणि तुम्हाला <strong>स्मार्ट अवर्स</strong> मिळेल — एक कस्टम वेळ स्लॉट रोलिंग आधारावर <strong>फ्रीझ</strong> करण्याचा मार्ग, जेणेकरून डॅशबोर्ड नेहमी फक्त तुमच्यासाठी महत्त्वाचे तासच दाखवतो.",
          voice: 'डॅशबोर्डच्या वेळ अवधीत लपलेली एक शक्तिशाली सेटिंग पाहूया — स्मार्ट अवर्स. सोप्या भाषेत, स्मार्ट अवर्स तुम्हाला एक कस्टम वेळ खिडकी रोलिंग आधारावर फ्रीझ करू देते. म्हणून दिवसाच्या प्रत्येक तासाऐवजी, तुमचा डॅशबोर्ड फक्त तुमच्यासाठी महत्त्वाचे तासच दाखवतो, आणि वेळ पुढे सरकताना तसेच करत राहतो.',
        },
        {
          label: 'टॉगल', title: 'स्मार्ट अवर्स चालू करा',
          body: '<strong>स्मार्ट अवर्स</strong> बॉक्सवर टिक करा आणि ते <strong>ACTIVE</strong> होते. त्यानंतर, तुम्ही सेट केलेला दैनंदिन वेळ स्लॉट <strong>ऐतिहासिक आणि भविष्यातील</strong> दोन्ही तारीख श्रेणींवर लागू होतो.',
          voice: 'ते चालू करणे सोपे आहे. स्मार्ट अवर्स बॉक्सवर टिक करा, आणि ते ACTIVE दाखवते. एकदा चालू झाल्यावर, तुम्ही निवडलेला दैनंदिन वेळ स्लॉट तुमच्या श्रेणीतील प्रत्येक दिवसावर लागू होतो — ऐतिहासिक दिवस आणि भविष्यातील दिवस दोन्ही — आपोआप.',
        },
        {
          label: 'तुमची खिडकी', title: 'तुमचे From आणि To सेट करा',
          body: '<strong>From</strong> आणि <strong>To</strong> ने तुमची दैनंदिन खिडकी सेट करा — समजा <strong>सकाळी 9 ते संध्याकाळी 5</strong>. ही तुमची कामकाजाची खिडकी, आणि डॅशबोर्ड दररोज <em>फक्त</em> तेच तास दाखवेल.',
          voice: 'पुढे, तुम्ही From आणि To वेळेने तुमची खिडकी परिभाषित करता. समजा सकाळी नऊ ते संध्याकाळी पाच — तुमच्या प्लांटचे कामकाजाचे तास. स्मार्ट अवर्स चालू असताना, डॅशबोर्ड तुम्ही निवडलेल्या श्रेणीतील प्रत्येक दिवसासाठी फक्त ती नऊ ते पाच खिडकी दाखवेल.',
          tip: { type: 'tipLabel', text: 'निष्क्रिय कालावधीचा गोंगाट काढण्यासाठी From आणि To तुमच्या शिफ्ट किंवा कामकाजाच्या तासांवर सेट करा.' },
        },
        {
          label: 'रोलिंग', title: 'ते दररोज पुढे सरकते',
          body: 'खिडकी एका श्रेणीसोबत जोडा. <strong>गेल्या 3 दिवसांसाठी सकाळी 9 – संध्याकाळी 5</strong> फक्त तेच तास दाखवते, तीन दिवसांत — आणि प्रत्येक नवीन दिवस येताना ते <strong>पुढे सरकत राहते</strong>.',
          voice: 'इथे ते हुशार होते. तुमची खिडकी एका तारीख श्रेणीसोबत जोडा. गेल्या तीन दिवसांसाठी नऊ ते पाच तुम्हाला फक्त नऊ-ते-पाच डेटा दाखवते, तीन दिवसांत. आणि ते सतत पुढे सरकते — उद्या, ते पुन्हा गेले तीन दिवस, नेहमी फक्त कामकाजाचे तास. एका शिफ्टची दुसरीशी तुलना करण्यासाठी उत्तम.',
        },
        {
          label: 'हे का महत्त्वाचे', title: 'स्वच्छ डेटा, निष्पक्ष तुलना',
          body: 'वेगवेगळ्या खिडक्या वेगळ्या वागतात: <strong>रात्री 11 – रात्री 11, गेले 24 तास</strong> डॅशबोर्ड दररोज रात्री 11 वाजता रीसेट करते. फायदा: <strong>शिफ्ट-आधारित विश्लेषण</strong>, गैर-कामकाजी कालावधीचा गोंगाट नाही, आणि <strong>निष्पक्ष कामगिरी तुलना</strong>.',
          voice: 'वेगवेगळ्या खिडक्या तुम्हाला वेगळे वर्तन देतात. उदाहरणार्थ, गेल्या चोवीस तासांत रात्री अकरा ते रात्री अकरा डॅशबोर्ड दररोज अकरा वाजता स्वच्छपणे रीसेट करते. तुम्ही कोणतीही खिडकी निवडा, फायदा तोच — तुम्ही शिफ्ट-आधारित विश्लेषण करू शकता, गैर-कामकाजी तासांचा गोंगाट काढू शकता, आणि खूप अधिक अचूक, समान-ते-समान कामगिरी तुलना मिळवू शकता. हे आहे स्मार्ट अवर्स — तुमच्या डॅशबोर्डवर वेळेवर अचूक नियंत्रण.',
          tip: { type: 'upNextLabel', text: 'आता तुम्ही डॅशबोर्डवर वेळ अचूकपणे नियंत्रित करता.' },
        },
      ],
    },
  },
};

export default lesson;
