import type { Lesson } from '../../types';

/**
 * Personalized demo — Hindalco Mahaan.   (hidden module-demos)
 * Built from the CSM's screen recording of Hindalco's Summary Page: a
 * water-balance dashboard of Range-Number widgets. Each step recreates one of
 * their real widgets and explains what it means for their plant.
 */
const FROM = 'Jun 29 | 23:00';
const TO = 'Jun 30 | 18:03';

const lesson: Lesson = {
  id: 'demo-hindalco',
  moduleId: 'module-demos',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {},
  layouts: [
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Plant Summary',
      widgetState: {
        accent: 'teal', title: 'Raw Water Drawn From Reservoir', value: '31660.6', unitTag: 'Hindalco Mahaan',
        timeframeLabel: 'Last 24 Hours', fromLabel: FROM, toLabel: TO, changePct: '43.5', highlight: 'value',
      },
      cursor: [{ at: 0.2, x: 50, y: 44, click: true }],
    },
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Where the water goes',
      widgetState: {
        accent: 'teal', title: 'Raw Water Consumption to PT Plant', value: '31657', unitTag: 'Hindalco Mahaan',
        fromLabel: FROM, toLabel: TO, changePct: '43.5', highlight: 'value',
      },
      cursor: [{ at: 0.3, x: 50, y: 44 }],
    },
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'CPP & Metal demand',
      widgetState: {
        accent: 'pink', title: 'CPP Water Consumption', value: '30220.77', unitTag: 'Hindalco Mahaan',
        fromLabel: FROM, toLabel: TO, changePct: '45.4', highlight: 'value',
      },
      cursor: [{ at: 0.3, x: 50, y: 44 }],
    },
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Clarified water',
      widgetState: {
        accent: 'pink', title: 'CT Make Up (Fresh Water)', value: '28529', unitTag: 'Hindalco Mahaan',
        fromLabel: FROM, toLabel: TO, changePct: '7.4', highlight: 'change',
      },
      cursor: [{ at: 0.2, x: 28, y: 88 }, { at: 0.6, x: 82, y: 88, click: true }],
    },
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Potable water',
      widgetState: {
        accent: 'purple', title: 'Total Potable Water', value: '1314.25', unitTag: 'Hindalco Mahaan',
        fromLabel: FROM, toLabel: TO, changePct: '2.1', highlight: 'value',
      },
      cursor: [{ at: 0.3, x: 50, y: 44 }],
    },
    // — extended from the second (full) recording: Detailed Analytics, the
    //   live digital twin, and the Data Input page —
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Detailed Analytics',
      widgetState: {
        accent: 'teal', title: '% of Unaccounted Loss & Leakages', value: '-1.27', unit: '%',
        unitTag: 'Hindalco Mahaan', fromLabel: 'Jun 29 | 17:20', toLabel: 'Jun 30 | 17:20',
        changePct: '0', highlight: 'value',
      },
      cursor: [{ at: 0.25, x: 50, y: 44 }, { at: 0.7, x: 50, y: 64 }],
    },
    {
      mode: 'widget', widget: 'visualization', caption: 'Your plant, live',
      widgetState: {
        viz: {
          plant: 'Hindalco Mahaan', date: 'Jun 30, 2026 · 05:27 PM', live: true, page: 'Full Plant',
          collectionLevel: 62, aerationLevel: 70, pump1On: true, pump2On: true, highlight: 'animation',
        },
      },
      cursor: [{ at: 0.25, x: 30, y: 45 }, { at: 0.65, x: 65, y: 50 }],
    },
    {
      mode: 'widget', widget: 'dataInput', caption: 'Daily lab readings',
      widgetState: {
        dataInput: {
          mode: 'card',
          submitLabel: 'Submit Reading',
          card: {
            sensor: 'pH Water Quality — Joint 6 CT CPP',
            asset: 'Hindalco Mahaan',
            typeLabel: 'Number',
            validRange: '0 – 14',
            safeRange: '6.5 – 8.5',
          },
        },
      },
      cursor: [{ at: 0.3, x: 50, y: 40 }, { at: 0.7, x: 50, y: 78, click: true }],
    },
  ],
  content: {
    en: {
      title: 'Your <em>Hindalco Mahaan</em><br>dashboard.',
      subtitle:
        'A quick tour of the Summary Page we set up for your plant — your full water balance, reservoir to potable, in one glance.',
      chapter: 'Personalized demo · Hindalco Mahaan',
      steps: [
        {
          label: 'Plant Summary', title: 'Your water balance at a glance',
          body: "Your Summary Page opens with <strong>Plant Summary</strong>. The first reading is <strong>Raw Water Drawn From Reservoir</strong> — 31,660 KL over the last 24 hours. Every widget is tagged <strong>Hindalco Mahaan</strong> and refreshes every minute.",
          voice: "Welcome — this is the dashboard we've set up for Hindalco Mahaan. It opens on your Plant Summary, your whole water balance in one view. The first reading is raw water drawn from the reservoir — about thirty-one thousand six hundred kilolitres over the last twenty-four hours. Every widget here is tagged to Hindalco Mahaan and refreshes every minute.",
        },
        {
          label: 'To PT Plant', title: 'Raw water into treatment',
          body: "Next, <strong>Raw Water Consumption to PT Plant</strong> — 31,657 KL. Reading it right beside the reservoir draw lets you confirm, at a glance, that what you pull in is what reaches treatment.",
          voice: "Right next to it is raw water consumption to the P T plant — thirty-one thousand six hundred and fifty-seven kilolitres. Reading it beside the reservoir draw lets you confirm, at a glance, that what you pull in is what actually reaches treatment.",
        },
        {
          label: 'CPP & Metal', title: 'Where demand is highest',
          body: "<strong>CPP Water Consumption</strong> sits at 30,220 KL — your single biggest draw. The dashboard groups the captive power plant and metal demand together so you can see where your water is really going.",
          voice: "Your captive power plant is the biggest draw — C P P water consumption at thirty thousand two hundred kilolitres. The dashboard groups power-plant and metal demand together, so you can see exactly where your water is really going.",
        },
        {
          label: 'Clarified', title: 'Reading the trend, not just the number',
          body: "<strong>CT Make Up (Fresh Water)</strong> is 28,529 KL. Notice the figure at the bottom — <strong>+7.4%</strong> versus the previous period. That little number tells you whether a reading is climbing or easing, without studying a chart.",
          voice: "Now look at C T make-up fresh water — twenty-eight thousand kilolitres. See the small figure at the bottom? Plus seven point four percent against the previous period. That one number tells you whether a reading is climbing or easing, without you having to study a chart.",
          tip: { type: 'tipLabel', text: 'Green is up versus the last period, red is down — your fastest signal that something changed.' },
        },
        {
          label: 'Potable', title: 'Down to the last litre',
          body: "<strong>Total Potable Water</strong> — 1,314 KL across smelter, CPP and colony. From reservoir to potable, your entire balance is on one page. And that's just the Summary — there's more.",
          voice: "Total potable water — about thirteen hundred kilolitres across the smelter, C P P and colony. From the reservoir all the way to potable, your entire water balance lives on this one page. And that's just the Summary Page — let me show you what else we've set up for you.",
        },
        {
          label: 'Analytics', title: 'Water accounting, automated',
          body: "Your <strong>Detailed Analytics</strong> page reconciles the whole balance for you — every section, plus a computed <strong>Deviation</strong> and <strong>% of Unaccounted Loss &amp; Leakages</strong>. At −1.27%, your books balance almost to the litre, checked automatically every day.",
          voice: "Beyond the summary, your Detailed Analytics page does the water accounting for you. It reconciles every section — raw water, clarified, D M water — and computes the deviation and the percentage of unaccounted loss and leakages. Yours reads minus one point two seven percent — your water books balance almost to the litre, and the system checks it automatically, every single day.",
        },
        {
          label: 'Digital Twin', title: 'Your plant, live on screen',
          body: "Your <strong>Plant View</strong> is a live digital twin of Hindalco Mahaan — raw water tank, PDMS pumping, the DM plant, CHP, filtration — with real flow rates animating on the diagram. Watch water move through your plant from your desk.",
          voice: "And here is our favourite part — your plant view. It's a live digital twin of Hindalco Mahaan: the raw water tank, the pumping station, the D M plant, C H P, the filtration lines — with real flow rates animating right on the diagram. You can watch water move through your plant, live, from your desk.",
        },
        {
          label: 'Data Input', title: 'Daily lab readings, one page',
          body: "Lab chemistry that has no sensor — alkalinity, chlorides, hardness, <strong>pH at Joint 6 CT CPP</strong> — goes in on the <strong>Data Input</strong> page, once a day. Each entry keeps its last value and feeds the same dashboards. That's your complete setup — reach out any time to extend it.",
          voice: "Finally, the readings that come from your lab rather than a sensor — alkalinity, chlorides, hardness, the p H at joint six C T C P P — go in on the Data Input page, once a day. Each entry keeps its last value and feeds the very same dashboards. And that's your complete setup: summary, analytics, a living twin, and daily lab entry. Reach out any time you'd like us to extend it.",
        },
      ],
    },
    hi: {
      title: 'आपका <em>हिंडाल्को महान</em><br>डैशबोर्ड।',
      subtitle: 'आपके प्लांट के लिए तैयार किए गए सारांश पृष्ठ की एक झलक — जलाशय से पीने योग्य पानी तक, आपका पूरा जल संतुलन एक नज़र में।',
      chapter: 'व्यक्तिगत डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'प्लांट सारांश', title: 'एक नज़र में आपका जल संतुलन',
          body: "आपका सारांश पृष्ठ <strong>प्लांट सारांश</strong> से खुलता है। पहली रीडिंग है <strong>जलाशय से खींचा गया कच्चा पानी</strong> — पिछले 24 घंटों में 31,660 KL। हर विजेट <strong>हिंडाल्को महान</strong> से टैग है और हर मिनट अपडेट होता है।",
          voice: "स्वागत है — यह वह डैशबोर्ड है जो हमने हिंडाल्को महान के लिए तैयार किया है। यह आपके प्लांट सारांश से खुलता है, आपका पूरा जल संतुलन एक ही दृश्य में। पहली रीडिंग है जलाशय से खींचा गया कच्चा पानी — पिछले चौबीस घंटों में लगभग इकतीस हज़ार छह सौ किलोलीटर। यहाँ हर विजेट हिंडाल्को महान से टैग है और हर मिनट ताज़ा होता है।",
        },
        {
          label: 'पीटी प्लांट तक', title: 'उपचार में कच्चा पानी',
          body: "इसके बाद, <strong>पीटी प्लांट तक कच्चे पानी की खपत</strong> — 31,657 KL। इसे जलाशय की रीडिंग के बगल में पढ़ने से आप एक नज़र में पुष्टि कर सकते हैं कि जो खींचा गया वही उपचार तक पहुँचा।",
          voice: "इसके ठीक बगल में है पीटी प्लांट तक कच्चे पानी की खपत — इकतीस हज़ार छह सौ सत्तावन किलोलीटर। इसे जलाशय की रीडिंग के बगल में पढ़ने से आप एक नज़र में पुष्टि कर सकते हैं कि जो खींचा गया वही वास्तव में उपचार तक पहुँचा।",
        },
        {
          label: 'सीपीपी और धातु', title: 'सबसे अधिक माँग कहाँ है',
          body: "<strong>सीपीपी जल खपत</strong> 30,220 KL पर है — आपकी सबसे बड़ी खपत। डैशबोर्ड कैप्टिव पावर प्लांट और धातु की माँग को एक साथ समूहित करता है ताकि आप देख सकें कि आपका पानी कहाँ जा रहा है।",
          voice: "आपका कैप्टिव पावर प्लांट सबसे बड़ी खपत है — सीपीपी जल खपत तीस हज़ार दो सौ किलोलीटर पर। डैशबोर्ड पावर प्लांट और धातु की माँग को एक साथ समूहित करता है, ताकि आप ठीक-ठीक देख सकें कि आपका पानी वास्तव में कहाँ जा रहा है।",
        },
        {
          label: 'स्पष्ट किया जल', title: 'सिर्फ़ संख्या नहीं, रुझान पढ़ें',
          body: "<strong>सीटी मेक-अप (ताज़ा पानी)</strong> 28,529 KL है। नीचे का आँकड़ा देखें — पिछली अवधि की तुलना में <strong>+7.4%</strong>। यह छोटा सा अंक बताता है कि रीडिंग बढ़ रही है या घट रही है, बिना चार्ट देखे।",
          voice: "अब सीटी मेक-अप ताज़ा पानी देखें — अट्ठाईस हज़ार किलोलीटर। नीचे का छोटा आँकड़ा देखें? पिछली अवधि की तुलना में प्लस सात दशमलव चार प्रतिशत। यह एक अंक बताता है कि कोई रीडिंग बढ़ रही है या घट रही है, बिना आपको चार्ट का अध्ययन किए।",
          tip: { type: 'tipLabel', text: 'हरा यानी पिछली अवधि से ऊपर, लाल यानी नीचे — कुछ बदला है इसका सबसे तेज़ संकेत।' },
        },
        {
          label: 'पीने योग्य', title: 'आख़िरी लीटर तक',
          body: "<strong>कुल पीने योग्य पानी</strong> — स्मेल्टर, सीपीपी और कॉलोनी में 1,314 KL। जलाशय से पीने योग्य पानी तक, आपका पूरा संतुलन एक पृष्ठ पर। और यह तो सिर्फ़ सारांश है — आगे और भी है।",
          voice: "कुल पीने योग्य पानी — स्मेल्टर, सीपीपी और कॉलोनी में लगभग तेरह सौ किलोलीटर। जलाशय से लेकर पीने योग्य पानी तक, आपका पूरा जल संतुलन इसी एक पृष्ठ पर रहता है। और यह तो सिर्फ़ सारांश पृष्ठ है — आइए दिखाएँ कि हमने आपके लिए और क्या तैयार किया है।",
        },
        {
          label: 'एनालिटिक्स', title: 'जल लेखा, स्वचालित',
          body: "आपका <strong>विस्तृत एनालिटिक्स</strong> पृष्ठ पूरा संतुलन खुद मिलाता है — हर खंड, साथ में परिकलित <strong>विचलन</strong> और <strong>अस्पष्ट हानि व रिसाव %</strong>। −1.27% पर, आपका जल-लेखा लगभग लीटर तक मिलता है — हर दिन अपने-आप जाँचा हुआ।",
          voice: "सारांश से आगे, आपका विस्तृत एनालिटिक्स पृष्ठ आपके लिए जल लेखा करता है। यह हर खंड का मिलान करता है — कच्चा पानी, स्पष्ट किया पानी, डीएम पानी — और विचलन तथा अस्पष्ट हानि और रिसाव का प्रतिशत निकालता है। आपका माइनस एक दशमलव दो सात प्रतिशत है — आपका जल-लेखा लगभग लीटर तक मिलता है, और सिस्टम इसे हर दिन अपने-आप जाँचता है।",
        },
        {
          label: 'डिजिटल ट्विन', title: 'आपका प्लांट, स्क्रीन पर लाइव',
          body: "आपका <strong>प्लांट व्यू</strong> हिंडाल्को महान का लाइव डिजिटल ट्विन है — कच्चे पानी की टंकी, पीडीएमएस पंपिंग, डीएम प्लांट, सीएचपी, फिल्ट्रेशन — आरेख पर असली प्रवाह दरों के साथ। अपनी डेस्क से पानी को प्लांट में बहते देखें।",
          voice: "और यह हमारा पसंदीदा हिस्सा — आपका प्लांट व्यू। यह हिंडाल्को महान का लाइव डिजिटल ट्विन है: कच्चे पानी की टंकी, पंपिंग स्टेशन, डीएम प्लांट, सीएचपी, फिल्ट्रेशन लाइनें — आरेख पर असली प्रवाह दरें चलती हुईं। आप अपनी डेस्क से, लाइव, पानी को अपने प्लांट में बहते देख सकते हैं।",
        },
        {
          label: 'डेटा इनपुट', title: 'दैनिक लैब रीडिंग, एक पृष्ठ',
          body: "जिस लैब केमिस्ट्री का कोई सेंसर नहीं — क्षारीयता, क्लोराइड, कठोरता, <strong>जॉइंट 6 सीटी सीपीपी का pH</strong> — वह <strong>डेटा इनपुट</strong> पृष्ठ पर दिन में एक बार दर्ज होती है। हर प्रविष्टि अपना पिछला मान रखती है और उन्हीं डैशबोर्ड में जाती है। यही है आपका पूरा सेटअप — बढ़ाने के लिए कभी भी संपर्क करें।",
          voice: "अंत में, जो रीडिंग सेंसर से नहीं बल्कि आपकी लैब से आती हैं — क्षारीयता, क्लोराइड, कठोरता, जॉइंट छह सीटी सीपीपी का पी एच — वे डेटा इनपुट पृष्ठ पर दिन में एक बार दर्ज होती हैं। हर प्रविष्टि अपना पिछला मान रखती है और उन्हीं डैशबोर्ड में जाती है। और यही है आपका पूरा सेटअप: सारांश, एनालिटिक्स, एक जीवंत ट्विन, और दैनिक लैब प्रविष्टि। इसे बढ़ाने के लिए कभी भी संपर्क करें।",
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>ஹிண்டால்கோ மஹான்</em><br>டாஷ்போர்டு.',
      subtitle: 'உங்கள் ஆலைக்காக அமைத்த சுருக்கப் பக்கத்தின் விரைவுச் சுற்று — நீர்த்தேக்கம் முதல் குடிநீர் வரை, உங்கள் முழு நீர் சமநிலை ஒரே பார்வையில்.',
      chapter: 'தனிப்பயன் டெமோ · ஹிண்டால்கோ மஹான்',
      steps: [
        {
          label: 'ஆலை சுருக்கம்', title: 'ஒரே பார்வையில் உங்கள் நீர் சமநிலை',
          body: "உங்கள் சுருக்கப் பக்கம் <strong>ஆலை சுருக்கத்துடன்</strong> தொடங்குகிறது. முதல் அளவீடு <strong>நீர்த்தேக்கத்திலிருந்து எடுக்கப்பட்ட மூல நீர்</strong> — கடந்த 24 மணிநேரத்தில் 31,660 KL. ஒவ்வொரு விட்ஜெட்டும் <strong>ஹிண்டால்கோ மஹான்</strong> எனக் குறிக்கப்பட்டு ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது.",
          voice: "வரவேற்கிறேன் — இது ஹிண்டால்கோ மஹானுக்காக நாங்கள் அமைத்த டாஷ்போர்டு. இது உங்கள் ஆலை சுருக்கத்துடன் தொடங்குகிறது, உங்கள் முழு நீர் சமநிலையும் ஒரே காட்சியில். முதல் அளவீடு நீர்த்தேக்கத்திலிருந்து எடுக்கப்பட்ட மூல நீர் — கடந்த இருபத்து நான்கு மணிநேரத்தில் சுமார் முப்பத்தோராயிரத்து அறுநூறு கிலோலிட்டர். இங்கே ஒவ்வொரு விட்ஜெட்டும் ஹிண்டால்கோ மஹானுக்குக் குறிக்கப்பட்டு ஒவ்வொரு நிமிடமும் புதுப்பிக்கிறது.",
        },
        {
          label: 'பிடி ஆலைக்கு', title: 'சுத்திகரிப்புக்கு மூல நீர்',
          body: "அடுத்து, <strong>பிடி ஆலைக்கு மூல நீர் நுகர்வு</strong> — 31,657 KL. இதை நீர்த்தேக்க அளவீட்டின் அருகில் படிப்பது, நீங்கள் எடுப்பதே சுத்திகரிப்பை அடைகிறது என ஒரே பார்வையில் உறுதிசெய்ய உதவுகிறது.",
          voice: "அதற்கு அருகிலேயே பிடி ஆலைக்கு மூல நீர் நுகர்வு — முப்பத்தோராயிரத்து அறுநூற்று ஐம்பத்தேழு கிலோலிட்டர். இதை நீர்த்தேக்க அளவீட்டின் அருகில் படிப்பது, நீங்கள் எடுப்பதே உண்மையில் சுத்திகரிப்பை அடைகிறதா என ஒரே பார்வையில் உறுதிசெய்ய உதவுகிறது.",
        },
        {
          label: 'சிபிபி & உலோகம்', title: 'அதிக தேவை எங்கே',
          body: "<strong>சிபிபி நீர் நுகர்வு</strong> 30,220 KL — உங்கள் மிகப்பெரிய எடுப்பு. டாஷ்போர்டு கேப்டிவ் பவர் பிளांட் மற்றும் உலோகத் தேவையை ஒன்றாகத் தொகுக்கிறது, உங்கள் நீர் எங்கே செல்கிறது எனப் பார்க்க.",
          voice: "உங்கள் கேப்டிவ் பவர் பிளांட்தான் மிகப்பெரிய எடுப்பு — சிபிபி நீர் நுகர்வு முப்பதாயிரத்து இருநூறு கிலோலிட்டர். டாஷ்போர்டு பவர் பிளांட் மற்றும் உலோகத் தேவையை ஒன்றாகத் தொகுக்கிறது, உங்கள் நீர் உண்மையில் எங்கே செல்கிறது என நீங்கள் பார்க்கலாம்.",
        },
        {
          label: 'தெளிவுபடுத்தப்பட்ட', title: 'எண் மட்டுமல்ல, போக்கைப் படியுங்கள்',
          body: "<strong>சிடி மேக்-அப் (புதிய நீர்)</strong> 28,529 KL. கீழே உள்ள எண்ணைக் கவனியுங்கள் — முந்தைய காலத்துடன் ஒப்பிடுகையில் <strong>+7.4%</strong>. அந்தச் சிறிய எண் ஒரு அளவீடு ஏறுகிறதா இறங்குகிறதா எனச் சொல்கிறது, விளக்கப்படம் இல்லாமல்.",
          voice: "இப்போது சிடி மேக்-அப் புதிய நீரைப் பாருங்கள் — இருபத்தெட்டாயிரம் கிலோலிட்டர். கீழே உள்ள சிறிய எண்ணைப் பார்த்தீர்களா? முந்தைய காலத்துடன் ஒப்பிடுகையில் கூட்டல் ஏழு புள்ளி நான்கு சதவீதம். அந்த ஒரு எண் ஒரு அளவீடு ஏறுகிறதா இறங்குகிறதா எனச் சொல்கிறது, நீங்கள் விளக்கப்படத்தைப் படிக்காமலேயே.",
          tip: { type: 'tipLabel', text: 'பச்சை என்றால் முந்தைய காலத்தை விட அதிகம், சிவப்பு என்றால் குறைவு — ஏதோ மாறியதற்கான வேகமான சமிக்ஞை.' },
        },
        {
          label: 'குடிநீர்', title: 'கடைசி லிட்டர் வரை',
          body: "<strong>மொத்த குடிநீர்</strong> — ஸ்மெல்டர், சிபிபி மற்றும் காலனி முழுவதும் 1,314 KL. நீர்த்தேக்கம் முதல் குடிநீர் வரை, உங்கள் முழு சமநிலையும் ஒரே பக்கத்தில். இது சுருக்கம் மட்டுமே — இன்னும் இருக்கிறது.",
          voice: "மொத்த குடிநீர் — ஸ்மெல்டர், சிபிபி மற்றும் காலனி முழுவதும் சுமார் ஆயிரத்து முந்நூறு கிலோலிட்டர். நீர்த்தேக்கத்திலிருந்து குடிநீர் வரை, உங்கள் முழு நீர் சமநிலையும் இந்த ஒரே பக்கத்தில் இருக்கிறது. இது சுருக்கப் பக்கம் மட்டுமே — உங்களுக்காக நாங்கள் வேறு என்ன அமைத்திருக்கிறோம் என்பதைக் காட்டுகிறேன்.",
        },
        {
          label: 'அனலிட்டிக்ஸ்', title: 'நீர் கணக்கு, தானியங்கி',
          body: "உங்கள் <strong>விரிவான அனலிட்டிக்ஸ்</strong> பக்கம் முழு சமநிலையையும் தானே சரிபார்க்கிறது — ஒவ்வொரு பிரிவும், கணக்கிடப்பட்ட <strong>விலகல்</strong> மற்றும் <strong>கணக்கில் வராத இழப்பு & கசிவு %</strong> உடன். −1.27% — உங்கள் நீர்க் கணக்கு கிட்டத்தட்ட லிட்டர் அளவுக்குச் சரியாக உள்ளது, தினமும் தானாகச் சரிபார்க்கப்படுகிறது.",
          voice: "சுருக்கத்திற்கு அப்பால், உங்கள் விரிவான அனலிட்டிக்ஸ் பக்கம் உங்களுக்காக நீர் கணக்கைச் செய்கிறது. ஒவ்வொரு பிரிவையும் சரிபார்க்கிறது — மூல நீர், தெளிவுபடுத்தப்பட்ட நீர், டி எம் நீர் — விலகலையும், கணக்கில் வராத இழப்பு மற்றும் கசிவின் சதவீதத்தையும் கணக்கிடுகிறது. உங்களுடையது மைனஸ் ஒன்று புள்ளி இரண்டு ஏழு சதவீதம் — உங்கள் நீர்க் கணக்கு கிட்டத்தட்ட லிட்டர் அளவுக்குச் சரியாக உள்ளது, சிஸ்டம் அதை ஒவ்வொரு நாளும் தானாகச் சரிபார்க்கிறது.",
        },
        {
          label: 'டிஜிட்டல் ட்வின்', title: 'உங்கள் ஆலை, திரையில் நேரலை',
          body: "உங்கள் <strong>பிளாண்ட் வியூ</strong> ஹிண்டால்கோ மஹானின் நேரடி டிஜிட்டல் ட்வின் — மூல நீர் தொட்டி, பிடிஎம்எஸ் பம்பிங், டிஎம் ஆலை, சிஎச்பி, வடிகட்டல் — வரைபடத்தில் உண்மையான ஓட்ட விகிதங்கள் அசைகின்றன. உங்கள் மேசையிலிருந்தே ஆலையில் நீர் ஓடுவதைப் பாருங்கள்.",
          voice: "இதோ எங்களின் விருப்பமான பகுதி — உங்கள் பிளாண்ட் வியூ. இது ஹிண்டால்கோ மஹானின் நேரடி டிஜிட்டல் ட்வின்: மூல நீர் தொட்டி, பம்பிங் நிலையம், டி எம் ஆலை, சி எச் பி, வடிகட்டல் வரிசைகள் — வரைபடத்திலேயே உண்மையான ஓட்ட விகிதங்கள் அசைகின்றன. உங்கள் மேசையிலிருந்தே, நேரலையில், உங்கள் ஆலையில் நீர் ஓடுவதைப் பார்க்கலாம்.",
        },
        {
          label: 'தரவு உள்ளீடு', title: 'தினசரி ஆய்வக அளவீடுகள், ஒரே பக்கம்',
          body: "சென்சார் இல்லாத ஆய்வக வேதியியல் — காரத்தன்மை, குளோரைடுகள், கடினத்தன்மை, <strong>ஜாயிண்ட் 6 சிடி சிபிபி pH</strong> — <strong>தரவு உள்ளீடு</strong> பக்கத்தில் தினம் ஒருமுறை பதிவாகிறது. ஒவ்வொரு பதிவும் தன் கடைசி மதிப்பை வைத்திருந்து அதே டாஷ்போர்டுகளுக்குச் செல்கிறது. இதுதான் உங்கள் முழு அமைப்பு — விரிவாக்க எப்போதும் தொடர்பு கொள்ளுங்கள்.",
          voice: "இறுதியாக, சென்சாரிலிருந்து அல்லாமல் உங்கள் ஆய்வகத்திலிருந்து வரும் அளவீடுகள் — காரத்தன்மை, குளோரைடுகள், கடினத்தன்மை, ஜாயிண்ட் ஆறு சிடி சிபிபியின் பி எச் — தரவு உள்ளீடு பக்கத்தில் தினம் ஒருமுறை பதிவாகின்றன. ஒவ்வொரு பதிவும் தன் கடைசி மதிப்பை வைத்திருந்து, அதே டாஷ்போர்டுகளுக்குச் செல்கிறது. இதுதான் உங்கள் முழு அமைப்பு: சுருக்கம், அனலிட்டிக்ஸ், ஒரு உயிருள்ள ட்வின், தினசரி ஆய்வகப் பதிவு. விரிவாக்க விரும்பினால் எப்போதும் தொடர்பு கொள்ளுங்கள்.",
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>हिंडाल्को महान</em><br>डॅशबोर्ड.',
      subtitle: 'तुमच्या प्लांटसाठी तयार केलेल्या सारांश पानाची झलक — जलाशयापासून पिण्यायोग्य पाण्यापर्यंत, तुमचे संपूर्ण जल संतुलन एका नजरेत.',
      chapter: 'वैयक्तिक डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'प्लांट सारांश', title: 'एका नजरेत तुमचे जल संतुलन',
          body: "तुमचे सारांश पान <strong>प्लांट सारांशाने</strong> सुरू होते. पहिले रीडिंग आहे <strong>जलाशयातून काढलेले कच्चे पाणी</strong> — मागील 24 तासांत 31,660 KL. प्रत्येक विजेट <strong>हिंडाल्को महान</strong> ने टॅग केलेले आहे आणि दर मिनिटाला अपडेट होते.",
          voice: "स्वागत आहे — हा तो डॅशबोर्ड आहे जो आम्ही हिंडाल्को महानसाठी तयार केला आहे. तो तुमच्या प्लांट सारांशाने सुरू होतो, तुमचे संपूर्ण जल संतुलन एकाच दृश्यात. पहिले रीडिंग आहे जलाशयातून काढलेले कच्चे पाणी — मागील चोवीस तासांत सुमारे एकतीस हजार सहाशे किलोलीटर. इथे प्रत्येक विजेट हिंडाल्को महानने टॅग केलेले आहे आणि दर मिनिटाला ताजे होते.",
        },
        {
          label: 'पीटी प्लांटकडे', title: 'उपचारात कच्चे पाणी',
          body: "त्यानंतर, <strong>पीटी प्लांटकडे कच्च्या पाण्याचा वापर</strong> — 31,657 KL. हे जलाशयाच्या रीडिंगशेजारी वाचल्याने तुम्ही एका नजरेत खात्री करू शकता की जे काढले तेच उपचारापर्यंत पोहोचले.",
          voice: "त्याच्या अगदी शेजारी आहे पीटी प्लांटकडे कच्च्या पाण्याचा वापर — एकतीस हजार सहाशे सत्तावन्न किलोलीटर. हे जलाशयाच्या रीडिंगशेजारी वाचल्याने तुम्ही एका नजरेत खात्री करू शकता की जे काढले तेच खरोखर उपचारापर्यंत पोहोचले.",
        },
        {
          label: 'सीपीपी व धातू', title: 'सर्वाधिक मागणी कुठे',
          body: "<strong>सीपीपी पाणी वापर</strong> 30,220 KL वर आहे — तुमचा सर्वात मोठा वापर. डॅशबोर्ड कॅप्टिव्ह पॉवर प्लांट आणि धातूची मागणी एकत्र गटात ठेवतो, जेणेकरून तुमचे पाणी कुठे जात आहे ते दिसेल.",
          voice: "तुमचा कॅप्टिव्ह पॉवर प्लांट सर्वात मोठा वापर आहे — सीपीपी पाणी वापर तीस हजार दोनशे किलोलीटरवर. डॅशबोर्ड पॉवर प्लांट आणि धातूची मागणी एकत्र गटात ठेवतो, जेणेकरून तुमचे पाणी खरोखर कुठे जात आहे ते तुम्ही पाहू शकता.",
        },
        {
          label: 'स्पष्ट केलेले', title: 'फक्त आकडा नव्हे, कल वाचा',
          body: "<strong>सीटी मेक-अप (ताजे पाणी)</strong> 28,529 KL आहे. खालचा आकडा पाहा — मागील कालावधीच्या तुलनेत <strong>+7.4%</strong>. तो छोटा आकडा सांगतो की रीडिंग वाढत आहे की कमी होत आहे, आलेख न पाहता.",
          voice: "आता सीटी मेक-अप ताजे पाणी पाहा — अठ्ठावीस हजार किलोलीटर. खालचा छोटा आकडा पाहिला का? मागील कालावधीच्या तुलनेत अधिक सात पूर्णांक चार टक्के. तो एक आकडा सांगतो की एखादे रीडिंग वाढत आहे की कमी होत आहे, तुम्हाला आलेखाचा अभ्यास न करता.",
          tip: { type: 'tipLabel', text: 'हिरवा म्हणजे मागील कालावधीपेक्षा वर, लाल म्हणजे खाली — काहीतरी बदलल्याचा सर्वात जलद संकेत.' },
        },
        {
          label: 'पिण्यायोग्य', title: 'शेवटच्या लिटरपर्यंत',
          body: "<strong>एकूण पिण्यायोग्य पाणी</strong> — स्मेल्टर, सीपीपी आणि कॉलनीमध्ये 1,314 KL. जलाशयापासून पिण्यायोग्य पाण्यापर्यंत, तुमचे संपूर्ण संतुलन एकाच पानावर. आणि हा तर फक्त सारांश आहे — अजून बरेच आहे.",
          voice: "एकूण पिण्यायोग्य पाणी — स्मेल्टर, सीपीपी आणि कॉलनीमध्ये सुमारे तेराशे किलोलीटर. जलाशयापासून पिण्यायोग्य पाण्यापर्यंत, तुमचे संपूर्ण जल संतुलन याच एका पानावर राहते. आणि हे तर फक्त सारांश पान आहे — तुमच्यासाठी आम्ही आणखी काय तयार केले आहे ते दाखवतो.",
        },
        {
          label: 'अ‍ॅनालिटिक्स', title: 'जल लेखा, स्वयंचलित',
          body: "तुमचे <strong>तपशीलवार अ‍ॅनालिटिक्स</strong> पान संपूर्ण संतुलन स्वतः जुळवते — प्रत्येक विभाग, शिवाय गणना केलेले <strong>विचलन</strong> आणि <strong>बेहिशेबी तोटा व गळती %</strong>. −1.27% वर, तुमचा जल-हिशेब जवळजवळ लिटरपर्यंत जुळतो — दररोज आपोआप तपासलेला.",
          voice: "सारांशाच्या पुढे, तुमचे तपशीलवार अ‍ॅनालिटिक्स पान तुमच्यासाठी जल लेखा करते. ते प्रत्येक विभाग जुळवते — कच्चे पाणी, स्पष्ट केलेले पाणी, डीएम पाणी — आणि विचलन तसेच बेहिशेबी तोटा आणि गळतीची टक्केवारी काढते. तुमची उणे एक पूर्णांक दोन सात टक्के आहे — तुमचा जल-हिशेब जवळजवळ लिटरपर्यंत जुळतो, आणि सिस्टीम ते दररोज आपोआप तपासते.",
        },
        {
          label: 'डिजिटल ट्विन', title: 'तुमचा प्लांट, स्क्रीनवर लाइव्ह',
          body: "तुमचा <strong>प्लांट व्ह्यू</strong> हिंडाल्को महानचा लाइव्ह डिजिटल ट्विन आहे — कच्च्या पाण्याची टाकी, पीडीएमएस पंपिंग, डीएम प्लांट, सीएचपी, गाळण — आकृतीवर खऱ्या प्रवाह दरांसह. तुमच्या डेस्कवरूनच पाणी प्लांटमधून वाहताना पाहा.",
          voice: "आणि हा आमचा आवडता भाग — तुमचा प्लांट व्ह्यू. हा हिंडाल्को महानचा लाइव्ह डिजिटल ट्विन आहे: कच्च्या पाण्याची टाकी, पंपिंग स्टेशन, डीएम प्लांट, सीएचपी, गाळण रेषा — आकृतीवरच खरे प्रवाह दर हलताना. तुम्ही तुमच्या डेस्कवरूनच, लाइव्ह, पाणी तुमच्या प्लांटमधून वाहताना पाहू शकता.",
        },
        {
          label: 'डेटा इनपुट', title: 'दैनिक लॅब रीडिंग, एक पान',
          body: "ज्या लॅब रसायनशास्त्राला सेन्सर नाही — क्षारता, क्लोराइड्स, कठीणता, <strong>जॉइंट 6 सीटी सीपीपीचे pH</strong> — ते <strong>डेटा इनपुट</strong> पानावर दिवसातून एकदा नोंदवले जाते. प्रत्येक नोंद आपले शेवटचे मूल्य ठेवते आणि त्याच डॅशबोर्डमध्ये जाते. हाच तुमचा संपूर्ण सेटअप — वाढवण्यासाठी कधीही संपर्क करा.",
          voice: "शेवटी, ज्या रीडिंग सेन्सरकडून नव्हे तर तुमच्या लॅबकडून येतात — क्षारता, क्लोराइड्स, कठीणता, जॉइंट सहा सीटी सीपीपीचे पीएच — त्या डेटा इनपुट पानावर दिवसातून एकदा नोंदवल्या जातात. प्रत्येक नोंद आपले शेवटचे मूल्य ठेवते आणि त्याच डॅशबोर्डमध्ये जाते. आणि हाच तुमचा संपूर्ण सेटअप: सारांश, अ‍ॅनालिटिक्स, एक जिवंत ट्विन, आणि दैनिक लॅब नोंद. वाढवायचे असल्यास कधीही संपर्क करा.",
        },
      ],
    },
  },
};

export default lesson;
