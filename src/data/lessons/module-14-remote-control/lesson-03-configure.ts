import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/remote-control-config`;

/**
 * M14 · Remote Control — the Configure track of L1 (INTERNAL ONLY).
 * Id ends in "-config" and matches base lesson `remote-control-groups`, so it
 * surfaces via the Read⇄Configure toggle on that lesson for internal users (the
 * standard config-track mechanism — see LessonPage). Shares L1's lessonNumber.
 * The one-time setup internal users do so operators/supervisors have groups to
 * control. Auto-detect (detecting → review draft: keep all / keep selective /
 * delete / run again) and Create from scratch; edit any group's name, equipment
 * and sensors. Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'remote-control-groups-config',
  moduleId: 'module-14-remote-control',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {
    config: `${BASE}/config.jpg`,
    detecting: `${BASE}/detecting.jpg`,
    detected: `${BASE}/detected.jpg`,
    form: `${BASE}/form.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'config', caption: 'Two ways to build groups',
      spotlight: { top: '17.5%', left: '78%', width: '20%', height: '5%' },
    },
    {
      mode: 'detail', screenshot: 'detecting', caption: 'Auto-detect suggests groups',
      spotlight: { top: '35%', left: '38.5%', width: '23%', height: '30%' },
    },
    {
      mode: 'detail', screenshot: 'detected', caption: 'Review the draft — keep all or pick',
      spotlight: { top: '14.5%', left: '24%', width: '52%', height: '5.5%' },
    },
    {
      mode: 'detail', screenshot: 'form', caption: 'Edit a group, or build one',
      spotlight: { top: '39%', left: '25%', width: '49%', height: '20%' },
    },
  ],
  content: {
    en: {
      title: 'Remote Control:<br><em>configure groups.</em>',
      subtitle:
        'The one-time setup behind everything operators do. Build the control groups a plant offers — let the system suggest them, or craft them by hand — so live control is just a few clicks for everyone else.',
      chapter: 'Remote Control · Configuration',
      steps: [
        {
          label: 'Two ways', title: 'Two ways to build groups',
          body: "Group setup is done once per plant, on the <strong>Group Remote Control Configuration</strong> panel. You have two routes: <strong>Auto-detect groups</strong> — let the system read the plant and propose groups for you — or <strong>+ Create group</strong> — build one by hand. Most plants start with auto-detect and refine from there.",
          voice: "Everything the operators do rests on this one-time setup, done once per plant on the Group Remote Control Configuration panel. You have two routes to build groups. Auto-detect groups lets the system read the plant and propose groups for you. Or Create group lets you build one entirely by hand. Most plants start with auto-detect and refine from there.",
        },
        {
          label: 'Auto-detect', title: 'Auto-detect suggests groups',
          body: "Click <strong>Auto-detect groups</strong> and the system analyses the plant's equipment and proposes draft groups. It runs on the server and takes a moment. Crucially, this is only a suggestion — <strong>nothing is saved until you review it</strong>, so there's no risk in trying it.",
          voice: "Click Auto-detect groups, and the system analyses the plant's equipment to suggest sensible control groups. It runs on the server, so it takes a moment. The important thing to know is that this is only a suggestion — nothing is saved until you review it — so there is no risk at all in running it, even on a live plant.",
        },
        {
          label: 'Review', title: 'Review the draft — keep all or pick',
          body: "You get a <strong>draft</strong> of detected groups, clearly marked <em>Not saved</em>. Now you decide: <strong>Save all</strong> to keep every one, or hit each group's own <strong>Save</strong> to keep only the ones you want. <strong>Delete</strong> the ones you don't, or <strong>Run again</strong> to re-detect. Nothing becomes real until you save it.",
          voice: "Auto-detect hands you a draft of the groups it found, clearly marked as not saved. Now you're in charge. Save all keeps every group in one go. Or, to be selective, use each group's own Save button to keep just the ones you want and delete the rest. Not happy with any of it? Run again re-detects from scratch. Nothing becomes real on the plant until you choose to save it.",
          tip: { type: 'tipLabel', text: 'Add group to draft drops a blank group into the same review list, so you can mix detected and hand-built groups before saving.' },
        },
        {
          label: 'Edit or build', title: 'Edit a group, or build one',
          body: "Expand any group to shape it: a <strong>name</strong>, an optional description, its <strong>equipment</strong> (add or remove them as chips), and optionally which <strong>sensors</strong> to show. <strong>Create group</strong> opens this same form empty, to build one from scratch. Get the groups right here, and live control stays effortless for every operator.",
          voice: "Whether you're refining a detected group or building one from nothing, it's the same simple form. Give it a clear name, an optional description, and its equipment — added and removed as chips — and optionally choose which sensors to show. Create group opens this exact form empty, to build one by hand. Get the groups right here, once, and live control stays effortless for every operator who uses them.",
          tip: { type: 'upNextLabel', text: 'That’s Remote Control — configured by internal users, controlled by everyone on the plant.' },
        },
      ],
    },
    hi: {
      title: 'Remote Control:<br><em>ग्रुप कॉन्फ़िगर करें.</em>',
      subtitle:
        'वह एक-बार का सेटअप जिस पर ऑपरेटर की हर कार्रवाई टिकी है। प्लांट जो control group देता है उन्हें बनाएँ — सिस्टम को सुझाव देने दें, या हाथ से गढ़ें — ताकि बाक़ी सबके लिए लाइव नियंत्रण कुछ ही क्लिक रहे।',
      chapter: 'Remote Control · कॉन्फ़िगरेशन',
      steps: [
        {
          label: 'दो तरीके', title: 'ग्रुप बनाने के दो तरीके',
          body: "ग्रुप सेटअप हर प्लांट के लिए एक बार होता है, <strong>Group Remote Control Configuration</strong> पैनल पर। दो रास्ते हैं: <strong>Auto-detect groups</strong> — सिस्टम को प्लांट पढ़ने दें और आपके लिए ग्रुप सुझाने दें — या <strong>+ Create group</strong> — हाथ से बनाएँ। अधिकांश प्लांट auto-detect से शुरू करते हैं और वहीं से सुधारते हैं।",
          voice: "ऑपरेटर जो कुछ करते हैं वह सब इस एक-बार के सेटअप पर टिका है, जो हर प्लांट के लिए एक बार Group Remote Control Configuration पैनल पर होता है। ग्रुप बनाने के दो रास्ते हैं। Auto-detect groups सिस्टम को प्लांट पढ़ने और आपके लिए ग्रुप सुझाने देता है। या Create group आपको पूरी तरह हाथ से बनाने देता है। अधिकांश प्लांट auto-detect से शुरू करते हैं और वहीं से सुधारते हैं।",
        },
        {
          label: 'Auto-detect', title: 'Auto-detect ग्रुप सुझाता है',
          body: "<strong>Auto-detect groups</strong> पर क्लिक करें और सिस्टम प्लांट के उपकरण का विश्लेषण कर ड्राफ़्ट ग्रुप सुझाता है। यह सर्वर पर चलता है और एक पल लेता है। ख़ास बात — यह सिर्फ़ सुझाव है; <strong>जब तक आप समीक्षा न करें कुछ सेव नहीं होता</strong>, तो आज़माने में कोई ख़तरा नहीं।",
          voice: "Auto-detect groups पर क्लिक करें, और सिस्टम प्लांट के उपकरण का विश्लेषण कर समझदार control group सुझाता है। यह सर्वर पर चलता है, तो एक पल लेता है। जानने की ख़ास बात यह है कि यह सिर्फ़ सुझाव है — जब तक आप समीक्षा न करें कुछ सेव नहीं होता — तो इसे चलाने में, लाइव प्लांट पर भी, बिल्कुल कोई ख़तरा नहीं।",
        },
        {
          label: 'समीक्षा', title: 'ड्राफ़्ट देखें — सब रखें या चुनें',
          body: "आपको पहचाने गए ग्रुप का एक <strong>ड्राफ़्ट</strong> मिलता है, साफ़ <em>Not saved</em> चिह्नित। अब आप तय करें: सब रखने के लिए <strong>Save all</strong>, या सिर्फ़ मनचाहे रखने के लिए हर ग्रुप का अपना <strong>Save</strong> दबाएँ। जो न चाहिए उन्हें <strong>Delete</strong>, या फिर से पहचानने के लिए <strong>Run again</strong>। सेव करने तक कुछ असली नहीं होता।",
          voice: "Auto-detect आपको मिले ग्रुप का एक ड्राफ़्ट देता है, साफ़ तौर पर not saved चिह्नित। अब कमान आपके हाथ। Save all एक बार में हर ग्रुप रख लेता है। या, चुनिंदा रखने के लिए, हर ग्रुप का अपना Save बटन उपयोग करें ताकि सिर्फ़ मनचाहे रहें और बाक़ी delete हो जाएँ। इनमें से कुछ पसंद नहीं? Run again शुरू से फिर पहचानता है। जब तक आप सेव न चुनें, प्लांट पर कुछ असली नहीं होता।",
          tip: { type: 'tipLabel', text: 'Add group to draft उसी समीक्षा सूची में एक ख़ाली ग्रुप जोड़ देता है, ताकि सेव करने से पहले आप पहचाने और हाथ से बने ग्रुप मिला सकें।' },
        },
        {
          label: 'संपादन या निर्माण', title: 'ग्रुप संपादित करें, या बनाएँ',
          body: "किसी भी ग्रुप को विस्तृत करके गढ़ें: एक <strong>नाम</strong>, वैकल्पिक विवरण, उसके <strong>equipment</strong> (chips के रूप में जोड़ें/हटाएँ), और वैकल्पिक रूप से कौन-से <strong>sensors</strong> दिखाने हैं। <strong>Create group</strong> यही फ़ॉर्म ख़ाली खोलता है, शुरू से बनाने के लिए। ग्रुप यहीं ठीक कर लें, और हर ऑपरेटर के लिए लाइव नियंत्रण आसान बना रहता है।",
          voice: "चाहे आप पहचाने गए ग्रुप को सुधार रहे हों या शून्य से बना रहे हों, फ़ॉर्म वही सरल है। उसे एक साफ़ नाम दें, एक वैकल्पिक विवरण, और उसके equipment — chips के रूप में जोड़े और हटाए — और वैकल्पिक रूप से चुनें कौन-से sensors दिखाने हैं। Create group यही फ़ॉर्म ख़ाली खोलता है, हाथ से बनाने के लिए। ग्रुप यहीं, एक बार ठीक कर लें, और उन्हें उपयोग करने वाले हर ऑपरेटर के लिए लाइव नियंत्रण आसान बना रहता है।",
          tip: { type: 'upNextLabel', text: 'यह रहा Remote Control — internal यूज़र कॉन्फ़िगर करते हैं, प्लांट पर हर कोई नियंत्रित करता है।' },
        },
      ],
    },
    ta: {
      title: 'Remote Control:<br><em>குழுக்களை அமை.</em>',
      subtitle:
        'இயக்குநர்கள் செய்யும் அனைத்துக்கும் பின்னால் உள்ள ஒருமுறை அமைப்பு. ஒரு ஆலை வழங்கும் control group-களை உருவாக்குங்கள் — சிஸ்டம் பரிந்துரைக்கட்டும், அல்லது கையால் வடிவமைக்கவும் — மற்ற அனைவருக்கும் நேரலைக் கட்டுப்பாடு சில கிளிக்குகளாக இருக்க.',
      chapter: 'Remote Control · கட்டமைப்பு',
      steps: [
        {
          label: 'இரு வழி', title: 'குழுக்களை உருவாக்க இரு வழி',
          body: "குழு அமைப்பு ஒவ்வொரு ஆலைக்கும் ஒருமுறை, <strong>Group Remote Control Configuration</strong> பேனலில் செய்யப்படுகிறது. இரு வழிகள்: <strong>Auto-detect groups</strong> — சிஸ்டம் ஆலையைப் படித்து உங்களுக்குக் குழுக்களைப் பரிந்துரைக்கட்டும் — அல்லது <strong>+ Create group</strong> — கையால் உருவாக்கவும். பெரும்பாலான ஆலைகள் auto-detect-இல் தொடங்கி அங்கிருந்து செம்மைப்படுத்தும்.",
          voice: "இயக்குநர்கள் செய்யும் அனைத்தும் இந்த ஒருமுறை அமைப்பில் தங்கியுள்ளது, ஒவ்வொரு ஆலைக்கும் ஒருமுறை Group Remote Control Configuration பேனலில் செய்யப்படுகிறது. குழுக்களை உருவாக்க இரு வழிகள். Auto-detect groups சிஸ்டம் ஆலையைப் படித்து உங்களுக்குக் குழுக்களைப் பரிந்துரைக்க அனுமதிக்கிறது. அல்லது Create group முழுவதுமாக கையால் உருவாக்க அனுமதிக்கிறது. பெரும்பாலான ஆலைகள் auto-detect-இல் தொடங்கி அங்கிருந்து செம்மைப்படுத்தும்.",
        },
        {
          label: 'Auto-detect', title: 'Auto-detect குழுக்களைப் பரிந்துரைக்கிறது',
          body: "<strong>Auto-detect groups</strong>-ஐக் கிளிக் செய்யுங்கள், சிஸ்டம் ஆலையின் உபகரணங்களைப் பகுப்பாய்ந்து வரைவுக் குழுக்களைப் பரிந்துரைக்கிறது. இது சர்வரில் இயங்குகிறது, சிறிது நேரம் எடுக்கும். முக்கியமாக, இது ஒரு பரிந்துரை மட்டுமே — <strong>நீங்கள் மதிப்பாய்வு செய்யும் வரை எதுவும் சேமிக்கப்படாது</strong>, எனவே முயற்சிப்பதில் எந்த ஆபத்தும் இல்லை.",
          voice: "Auto-detect groups-ஐக் கிளிக் செய்யுங்கள், சிஸ்டம் ஆலையின் உபகரணங்களைப் பகுப்பாய்ந்து பொருத்தமான control group-களைப் பரிந்துரைக்கிறது. இது சர்வரில் இயங்குகிறது, எனவே சிறிது நேரம் எடுக்கும். தெரிந்துகொள்ள வேண்டிய முக்கிய விஷயம், இது ஒரு பரிந்துரை மட்டுமே — நீங்கள் மதிப்பாய்வு செய்யும் வரை எதுவும் சேமிக்கப்படாது — எனவே இதை இயக்குவதில், நேரலை ஆலையில் கூட, எந்த ஆபத்தும் இல்லை.",
        },
        {
          label: 'மதிப்பாய்வு', title: 'வரைவைப் பார் — அனைத்தையும் அல்லது தேர்ந்தெடு',
          body: "கண்டறியப்பட்ட குழுக்களின் ஒரு <strong>வரைவு</strong> கிடைக்கும், தெளிவாக <em>Not saved</em> எனக் குறிக்கப்பட்டு. இப்போது நீங்கள் முடிவு செய்யுங்கள்: அனைத்தையும் வைக்க <strong>Save all</strong>, அல்லது வேண்டியவற்றை மட்டும் வைக்க ஒவ்வொரு குழுவின் சொந்த <strong>Save</strong>. வேண்டாதவற்றை <strong>Delete</strong>, அல்லது மீண்டும் கண்டறிய <strong>Run again</strong>. நீங்கள் சேமிக்கும் வரை எதுவும் உண்மையாகாது.",
          voice: "Auto-detect அது கண்டறிந்த குழுக்களின் ஒரு வரைவைத் தருகிறது, தெளிவாக not saved எனக் குறிக்கப்பட்டு. இப்போது கட்டுப்பாடு உங்களிடம். Save all ஒரே நேரத்தில் ஒவ்வொரு குழுவையும் வைக்கிறது. அல்லது, தேர்ந்தெடுக்க, ஒவ்வொரு குழுவின் சொந்த Save பொத்தானைப் பயன்படுத்தி வேண்டியவற்றை மட்டும் வைத்து மற்றவற்றை delete செய்யுங்கள். எதுவும் பிடிக்கவில்லையா? Run again புதிதாக மீண்டும் கண்டறியும். நீங்கள் சேமிக்கத் தேர்வதுவரை ஆலையில் எதுவும் உண்மையாகாது.",
          tip: { type: 'tipLabel', text: 'Add group to draft அதே மதிப்பாய்வுப் பட்டியலில் ஒரு காலி குழுவைச் சேர்க்கிறது, எனவே சேமிப்பதற்கு முன் கண்டறிந்த மற்றும் கையால் உருவாக்கிய குழுக்களைக் கலக்கலாம்.' },
        },
        {
          label: 'திருத்து அல்லது உருவாக்கு', title: 'குழுவைத் திருத்து, அல்லது உருவாக்கு',
          body: "எந்தக் குழுவையும் விரிவாக்கி வடிவமைக்கவும்: ஒரு <strong>பெயர்</strong>, விருப்ப விளக்கம், அதன் <strong>equipment</strong> (chips-ஆக சேர்/நீக்கு), மற்றும் விருப்பமாக எந்த <strong>sensors</strong> காட்ட வேண்டும். <strong>Create group</strong> இதே படிவத்தைக் காலியாகத் திறக்கிறது, புதிதாக உருவாக்க. குழுக்களை இங்கே சரியாக்குங்கள், ஒவ்வொரு இயக்குநருக்கும் நேரலைக் கட்டுப்பாடு சிரமமின்றி இருக்கும்.",
          voice: "நீங்கள் கண்டறிந்த குழுவைச் செம்மைப்படுத்தினாலும் ஒன்றை அடியிலிருந்து உருவாக்கினாலும், அதே எளிய படிவம்தான். ஒரு தெளிவான பெயர், ஒரு விருப்ப விளக்கம், அதன் equipment — chips-ஆக சேர்த்து நீக்கி — மற்றும் விருப்பமாக எந்த sensors காட்ட வேண்டும் எனத் தேர்வு. Create group இதே படிவத்தைக் காலியாகத் திறக்கிறது, கையால் உருவாக்க. குழுக்களை இங்கே, ஒருமுறை சரியாக்குங்கள், அவற்றைப் பயன்படுத்தும் ஒவ்வொரு இயக்குநருக்கும் நேரலைக் கட்டுப்பாடு சிரமமின்றி இருக்கும்.",
          tip: { type: 'upNextLabel', text: 'இது Remote Control — internal பயனர்கள் கட்டமைக்கிறார்கள், ஆலையில் அனைவரும் கட்டுப்படுத்துகிறார்கள்.' },
        },
      ],
    },
    mr: {
      title: 'Remote Control:<br><em>ग्रुप कॉन्फिगर करा.</em>',
      subtitle:
        'ऑपरेटर जे काही करतात त्यामागचा एक-वेळचा सेटअप. प्लांट देत असलेले control group तयार करा — सिस्टमला सुचवू द्या, किंवा हाताने घडवा — म्हणजे इतर सर्वांसाठी लाइव्ह नियंत्रण काही क्लिकचेच राहील.',
      chapter: 'Remote Control · कॉन्फिगरेशन',
      steps: [
        {
          label: 'दोन मार्ग', title: 'ग्रुप तयार करण्याचे दोन मार्ग',
          body: "ग्रुप सेटअप प्रत्येक प्लांटसाठी एकदाच होतो, <strong>Group Remote Control Configuration</strong> पॅनेलवर. दोन मार्ग आहेत: <strong>Auto-detect groups</strong> — सिस्टमला प्लांट वाचू द्या आणि तुमच्यासाठी ग्रुप सुचवू द्या — किंवा <strong>+ Create group</strong> — हाताने तयार करा. बहुतेक प्लांट auto-detect ने सुरू करतात आणि तिथूनच सुधारतात.",
          voice: "ऑपरेटर जे काही करतात ते सर्व या एक-वेळच्या सेटअपवर अवलंबून आहे, जो प्रत्येक प्लांटसाठी एकदाच Group Remote Control Configuration पॅनेलवर होतो. ग्रुप तयार करण्याचे दोन मार्ग आहेत. Auto-detect groups सिस्टमला प्लांट वाचून तुमच्यासाठी ग्रुप सुचवू देते. किंवा Create group तुम्हाला पूर्णपणे हाताने तयार करू देते. बहुतेक प्लांट auto-detect ने सुरू करतात आणि तिथूनच सुधारतात.",
        },
        {
          label: 'Auto-detect', title: 'Auto-detect ग्रुप सुचवते',
          body: "<strong>Auto-detect groups</strong> वर क्लिक करा आणि सिस्टम प्लांटच्या उपकरणांचे विश्लेषण करून मसुदा ग्रुप सुचवते. हे सर्व्हरवर चालते आणि थोडा वेळ घेते. महत्त्वाचे — ही फक्त सूचना आहे; <strong>तुम्ही आढावा घेईपर्यंत काहीही सेव्ह होत नाही</strong>, म्हणून वापरून पाहण्यात कोणताही धोका नाही.",
          voice: "Auto-detect groups वर क्लिक करा, आणि सिस्टम प्लांटच्या उपकरणांचे विश्लेषण करून समजूतदार control group सुचवते. हे सर्व्हरवर चालते, म्हणून थोडा वेळ घेते. जाणून घेण्याची महत्त्वाची गोष्ट म्हणजे ही फक्त सूचना आहे — तुम्ही आढावा घेईपर्यंत काहीही सेव्ह होत नाही — म्हणून हे चालवण्यात, लाइव्ह प्लांटवरही, अजिबात धोका नाही.",
        },
        {
          label: 'आढावा', title: 'मसुदा पाहा — सर्व ठेवा किंवा निवडा',
          body: "तुम्हाला शोधलेल्या ग्रुपचा एक <strong>मसुदा</strong> मिळतो, स्पष्ट <em>Not saved</em> चिन्हांकित. आता तुम्ही ठरवा: सर्व ठेवण्यासाठी <strong>Save all</strong>, किंवा फक्त हवे तेच ठेवण्यासाठी प्रत्येक ग्रुपचे स्वतःचे <strong>Save</strong> दाबा. नको ते <strong>Delete</strong>, किंवा पुन्हा शोधण्यासाठी <strong>Run again</strong>. तुम्ही सेव्ह करेपर्यंत काहीही खरे होत नाही.",
          voice: "Auto-detect तुम्हाला त्याने शोधलेल्या ग्रुपचा मसुदा देते, स्पष्टपणे not saved चिन्हांकित. आता सूत्रे तुमच्या हाती. Save all एकाच वेळी प्रत्येक ग्रुप ठेवते. किंवा, निवडक ठेवण्यासाठी, प्रत्येक ग्रुपचे स्वतःचे Save बटण वापरा म्हणजे फक्त हवे तेच राहतील आणि बाकी delete होतील. यातले काही आवडले नाही? Run again सुरवातीपासून पुन्हा शोधते. तुम्ही सेव्ह निवडेपर्यंत प्लांटवर काहीही खरे होत नाही.",
          tip: { type: 'tipLabel', text: 'Add group to draft त्याच आढावा यादीत एक रिकामा ग्रुप टाकते, म्हणजे सेव्ह करण्याआधी तुम्ही शोधलेले आणि हाताने बनवलेले ग्रुप एकत्र करू शकता.' },
        },
        {
          label: 'संपादन किंवा निर्मिती', title: 'ग्रुप संपादित करा, किंवा तयार करा',
          body: "कोणताही ग्रुप विस्तृत करून घडवा: एक <strong>नाव</strong>, ऐच्छिक वर्णन, त्याची <strong>equipment</strong> (chips म्हणून जोडा/काढा), आणि ऐच्छिकपणे कोणते <strong>sensors</strong> दाखवायचे. <strong>Create group</strong> हाच फॉर्म रिकामा उघडते, सुरवातीपासून तयार करायला. ग्रुप इथेच नीट करा, आणि प्रत्येक ऑपरेटरसाठी लाइव्ह नियंत्रण सहज राहते.",
          voice: "तुम्ही शोधलेला ग्रुप सुधारत असा किंवा शून्यातून एक तयार करत असा, तोच सोपा फॉर्म आहे. त्याला एक स्पष्ट नाव द्या, एक ऐच्छिक वर्णन, आणि त्याची equipment — chips म्हणून जोडलेली आणि काढलेली — आणि ऐच्छिकपणे कोणते sensors दाखवायचे ते निवडा. Create group हाच फॉर्म रिकामा उघडते, हाताने तयार करायला. ग्रुप इथे, एकदाच नीट करा, आणि ते वापरणाऱ्या प्रत्येक ऑपरेटरसाठी लाइव्ह नियंत्रण सहज राहते.",
          tip: { type: 'upNextLabel', text: 'हे झाले Remote Control — internal यूजर कॉन्फिगर करतात, प्लांटवर प्रत्येकजण नियंत्रित करतो.' },
        },
      ],
    },
  },
};

export default lesson;
