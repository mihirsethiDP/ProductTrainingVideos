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
  estimatedMinutes: 3,
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
          body: "Finally, <strong>Total Potable Water</strong> — 1,314 KL across smelter, CPP and colony. From reservoir to potable, your entire balance is on one page. Explore the rest of your widgets, and reach out any time to add more.",
          voice: "And finally, total potable water — about thirteen hundred kilolitres across the smelter, C P P and colony. From the reservoir all the way to potable, your entire water balance lives on this one page. Take a look around the rest of your widgets, and reach out any time if you'd like us to add more.",
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
          body: "अंत में, <strong>कुल पीने योग्य पानी</strong> — स्मेल्टर, सीपीपी और कॉलोनी में 1,314 KL। जलाशय से पीने योग्य पानी तक, आपका पूरा संतुलन एक पृष्ठ पर। बाकी विजेट देखें, और और जोड़ने के लिए कभी भी संपर्क करें।",
          voice: "और अंत में, कुल पीने योग्य पानी — स्मेल्टर, सीपीपी और कॉलोनी में लगभग तेरह सौ किलोलीटर। जलाशय से लेकर पीने योग्य पानी तक, आपका पूरा जल संतुलन इसी एक पृष्ठ पर रहता है। बाकी विजेट देखें, और अगर आप और जोड़वाना चाहें तो कभी भी संपर्क करें।",
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
          body: "இறுதியாக, <strong>மொத்த குடிநீர்</strong> — ஸ்மெல்டர், சிபிபி மற்றும் காலனி முழுவதும் 1,314 KL. நீர்த்தேக்கம் முதல் குடிநீர் வரை, உங்கள் முழு சமநிலையும் ஒரே பக்கத்தில். மற்ற விட்ஜெட்டுகளைப் பாருங்கள், மேலும் சேர்க்க எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளுங்கள்.",
          voice: "இறுதியாக, மொத்த குடிநீர் — ஸ்மெல்டர், சிபிபி மற்றும் காலனி முழுவதும் சுமார் ஆயிரத்து முந்நூறு கிலோலிட்டர். நீர்த்தேக்கத்திலிருந்து குடிநீர் வரை, உங்கள் முழு நீர் சமநிலையும் இந்த ஒரே பக்கத்தில் இருக்கிறது. மற்ற விட்ஜெட்டுகளைப் பார்வையிடுங்கள், மேலும் சேர்க்க விரும்பினால் எப்போது வேண்டுமானாலும் எங்களைத் தொடர்பு கொள்ளுங்கள்.",
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
          body: "शेवटी, <strong>एकूण पिण्यायोग्य पाणी</strong> — स्मेल्टर, सीपीपी आणि कॉलनीमध्ये 1,314 KL. जलाशयापासून पिण्यायोग्य पाण्यापर्यंत, तुमचे संपूर्ण संतुलन एकाच पानावर. बाकीचे विजेट पाहा, आणि अधिक जोडण्यासाठी कधीही संपर्क करा.",
          voice: "आणि शेवटी, एकूण पिण्यायोग्य पाणी — स्मेल्टर, सीपीपी आणि कॉलनीमध्ये सुमारे तेराशे किलोलीटर. जलाशयापासून पिण्यायोग्य पाण्यापर्यंत, तुमचे संपूर्ण जल संतुलन याच एका पानावर राहते. बाकीचे विजेट पाहा, आणि अधिक जोडायचे असल्यास कधीही आमच्याशी संपर्क करा.",
        },
      ],
    },
  },
};

export default lesson;
