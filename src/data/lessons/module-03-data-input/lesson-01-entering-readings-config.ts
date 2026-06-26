import type { Lesson } from '../../types';

/**
 * Module 3 · Configure — Data Input sensors.   Tag: M3.L1·C  (internal only)
 * The "how to build it" track, from the screen recording: create a manual
 * data-input sensor template (with thresholds), apply it at a plant via
 * Visualization to mint a real sensor tag, then the operator enters data —
 * including the out-of-range / invalid flow.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-03-config`;

const lesson: Lesson = {
  id: 'lesson-01-entering-readings-config',
  moduleId: 'module-03-data-input',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    list: `${BASE}/list.jpg`,
    add: `${BASE}/add-sensor.jpg`,
    thresholds: `${BASE}/thresholds.jpg`,
    viz: `${BASE}/visualization.jpg`,
    apply: `${BASE}/apply.jpg`,
    operator: `${BASE}/operator.jpg`,
    outOfRange: `${BASE}/out-of-range.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'list', caption: 'Add Manual Sensor', spotlight: { top: '4%', left: '87%', width: '12%', height: '9%' } },
    { mode: 'detail', screenshot: 'add', caption: 'Category, type & name', spotlight: { top: '27%', left: '24%', width: '52%', height: '20%' } },
    { mode: 'detail', screenshot: 'thresholds', caption: 'Apply thresholds', spotlight: { top: '49%', left: '25%', width: '50%', height: '38%' } },
    { mode: 'detail', screenshot: 'viz', caption: 'Go to the plant’s Visualization', spotlight: { top: '90%', left: '12%', width: '15%', height: '8%' } },
    { mode: 'detail', screenshot: 'apply', caption: 'Apply it → a real sensor tag', spotlight: { top: '13%', left: '28%', width: '44%', height: '14%' } },
    { mode: 'detail', screenshot: 'operator', caption: 'On the operator dashboard', spotlight: { top: '27%', left: '1%', width: '40%', height: '8%' } },
    { mode: 'detail', screenshot: 'outOfRange', caption: 'Enter data — and out-of-range', spotlight: { top: '27%', left: '20%', width: '78%', height: '12%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>Data Input <em>Sensors.</em>',
      subtitle: 'The builder’s view — a reusable sensor template, applied to a plant, then filled in by the operator.',
      chapter: 'Build Track · Data Input',
      steps: [
        {
          label: 'Template', title: 'Create a manual sensor',
          body: 'Open <strong>Data Input</strong> and hit <strong>Add Manual Sensor</strong>. Like everything else, sensors are <strong>templatized</strong> — you define one here and it can be applied across <strong>all plants</strong>, instead of recreating it per site.',
          voice: "Data input sensors are configured the same templatized way as everything else. Open the Data Input section — this is the library of manual sensors, each with its name, category, and tag. To make a new one, click Add Manual Sensor. The key idea, again, is reuse: what you define here is a template, and you can apply it across every plant, rather than rebuilding the same sensor for each site.",
        },
        {
          label: 'Details', title: 'Category, type & name',
          body: 'In <strong>Add Sensor Details</strong>, pick a <strong>Category</strong> (e.g. <em>Water Quality</em>), a <strong>Type</strong> — <em>Number, Boolean, Text</em> or <em>Image</em> — and give the sensor a <strong>name</strong>. The type decides how operators will enter the reading.',
          voice: "The Add Sensor Details dialog asks for the essentials. Choose a category — here Water Quality. Pick the type, which is how the operator will record the reading: a number, a yes-no boolean, free text, or an image. And give the sensor a clear name, like S B R quality. The type matters because it shapes the input the operator sees down the line — a number field, a toggle, a text box, or a media upload.",
        },
        {
          label: 'Thresholds', title: 'Apply thresholds to the template',
          body: 'For a number sensor, set <strong>thresholds</strong> right on the template: a <strong>Range Min / Max</strong> (valid range) and a <strong>Safe Min / Max</strong> band. Values outside safe show as <span style=\"color:#c74e3f\">Critical</span>; inside, <span style=\"color:#2d8659\">Safe</span>. These travel with the template everywhere it’s used.',
          voice: "For a number sensor, you can attach thresholds right here on the template, using the slider. The range minimum and maximum define what's even a valid value — here zero to forty. And the safe minimum and maximum define the green, healthy band within that. Anything inside the safe band reads as safe; outside it reads as critical. Because these thresholds live on the template, every plant that uses this sensor inherits the same validation automatically. Submit, and the sensor template is created.",
        },
        {
          label: 'Plant', title: 'Go to the plant’s Visualization',
          body: 'A template alone isn’t a live sensor yet. Open the target plant’s <strong>Visualization</strong> editor and switch to the <strong>Template</strong> panel — this is where a template becomes an actual sensor tag on a specific plant.',
          voice: "So far we have a template, but not a live sensor anywhere. To make it real, we go to the specific plant — here the C E T P under Demo Workspace — and open its Visualization editor. Down in the left panel, alongside Equipment and Widget, there's a Template tab. This is the bridge between the reusable template and an actual, named sensor tag living on this particular plant.",
        },
        {
          label: 'Apply', title: 'Apply it → a real sensor tag',
          body: 'Apply the template here and a <strong>Sensor Configuration</strong> opens: pick a <strong>Frequency</strong> (once a day, weekly…), confirm the <strong>thresholds</strong>, and save. The platform mints a real <strong>sensor tag</strong> (like <em>DI_WQ_SBR…</em>) on this plant.',
          voice: "Applying the template opens Sensor Configuration. Here you set how often the reading is expected — the frequency, like once a day, twice a day, weekly, and so on — and you can confirm or tweak the thresholds for this specific plant. When you add the sensor configuration, the platform generates a real, unique sensor tag on this plant — something like D I underscore W Q underscore S B R — turning the abstract template into a concrete sensor the operators here will actually fill in.",
        },
        {
          label: 'Operator', title: 'On the operator dashboard',
          body: 'On the dashboard of the operator assigned to that plant, the new sensor now appears in <strong>Data Input</strong> — with its <strong>valid and safe ranges</strong>, its <strong>frequency</strong>, and an <strong>Enter Value</strong> field, ready for readings.',
          voice: "Now switch to the operator who's assigned to that plant. On their Data Input page, the sensor we just created shows up automatically — S B R quality, with its valid range zero to forty and its safe range twenty to forty displayed right there, its frequency of once a day, and an enter-value field waiting. Everything we configured upstream — the type, the ranges, the frequency — has flowed all the way down to the operator's screen with no extra setup.",
        },
        {
          label: 'Input', title: 'Enter data — and out-of-range',
          body: 'The operator types a reading. If it falls outside the safe band, the field flags <em>“outside the safe range”</em> and the status turns <span style=\"color:#c74e3f\">Invalid</span> — a guardrail straight from the template’s thresholds — before they Submit.',
          voice: "Finally, the operator enters a reading. If the value sits inside the safe band, all is well. But enter something outside it — and instantly the field warns outside the safe range, and the status flips to a red Invalid. That guardrail comes directly from the thresholds we set on the template, all the way back at the start. So a single template definition gives you a consistent sensor, on every plant, that actively catches bad readings at the point of entry. That's the whole lifecycle: template, applied to a plant as a real tag, filled in and validated by the operator.",
          tip: { type: 'rememberLabel', text: 'Manual sensor template (type + thresholds) → apply at a plant’s Visualization (frequency) = real sensor tag → operator enters data, validated against the ranges.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br>डेटा इनपुट <em>सेंसर।</em>',
      subtitle: 'बिल्डर का दृश्य — एक पुन: प्रयोज्य सेंसर टेम्पलेट, एक प्लांट पर लागू, फिर ऑपरेटर द्वारा भरा गया।',
      chapter: 'बिल्ड ट्रैक · डेटा इनपुट',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक मैनुअल सेंसर बनाएँ',
          body: '<strong>Data Input</strong> खोलें और <strong>Add Manual Sensor</strong> दबाएँ। बाक़ी सब की तरह, सेंसर भी <strong>टेम्पलेटाइज़्ड</strong> हैं — एक बार परिभाषित करके <strong>सभी प्लांट</strong> पर लागू कर सकते हैं।',
          voice: "डेटा इनपुट सेंसर बाक़ी सब की तरह टेम्पलेटाइज़्ड तरीके से कॉन्फ़िगर होते हैं। Data Input खोलें — यह मैनुअल सेंसरों की लाइब्रेरी है, हर एक अपने नाम, श्रेणी और टैग के साथ। नया बनाने के लिए, Add Manual Sensor क्लिक करें। मुख्य विचार, फिर से, पुन: उपयोग है: जो आप यहाँ परिभाषित करते हैं वह एक टेम्पलेट है, और आप इसे हर प्लांट पर लागू कर सकते हैं।",
        },
        {
          label: 'विवरण', title: 'श्रेणी, प्रकार व नाम',
          body: '<strong>Add Sensor Details</strong> में एक <strong>Category</strong> (जैसे <em>Water Quality</em>), एक <strong>Type</strong> — <em>Number, Boolean, Text</em> या <em>Image</em> — चुनें और सेंसर को एक <strong>नाम</strong> दें। प्रकार तय करता है कि ऑपरेटर रीडिंग कैसे दर्ज करेंगे।',
          voice: "Add Sensor Details डायलॉग ज़रूरी चीज़ें पूछता है। एक श्रेणी चुनें — यहाँ Water Quality। प्रकार चुनें, जो है कि ऑपरेटर रीडिंग कैसे दर्ज करेगा: एक संख्या, एक हाँ-ना बूलियन, मुक्त टेक्स्ट, या एक छवि। और सेंसर को एक स्पष्ट नाम दें, जैसे एस बी आर क्वालिटी। प्रकार मायने रखता है क्योंकि यह आगे ऑपरेटर को दिखने वाला इनपुट तय करता है।",
        },
        {
          label: 'थ्रेशोल्ड', title: 'टेम्पलेट पर थ्रेशोल्ड लागू करें',
          body: 'नंबर सेंसर के लिए, टेम्पलेट पर ही <strong>थ्रेशोल्ड</strong> सेट करें: एक <strong>Range Min / Max</strong> (वैध रेंज) और एक <strong>Safe Min / Max</strong> बैंड। सुरक्षित के बाहर मान <span style=\"color:#c74e3f\">Critical</span>; अंदर <span style=\"color:#2d8659\">Safe</span>।',
          voice: "नंबर सेंसर के लिए, आप यहीं टेम्पलेट पर स्लाइडर से थ्रेशोल्ड जोड़ सकते हैं। रेंज न्यूनतम और अधिकतम परिभाषित करते हैं कि कौन सा मान वैध है — यहाँ शून्य से चालीस। और सेफ़ न्यूनतम और अधिकतम उसके भीतर हरा, स्वस्थ बैंड तय करते हैं। चूँकि ये थ्रेशोल्ड टेम्पलेट पर रहते हैं, हर प्लांट जो इस सेंसर को उपयोग करता है वही वैधता अपने-आप पाता है। सबमिट करें, सेंसर टेम्पलेट बन गया।",
        },
        {
          label: 'प्लांट', title: 'प्लांट के Visualization पर जाएँ',
          body: 'अकेला टेम्पलेट अभी लाइव सेंसर नहीं है। लक्षित प्लांट का <strong>Visualization</strong> एडिटर खोलें और <strong>Template</strong> पैनल पर जाएँ — यहीं टेम्पलेट एक वास्तविक सेंसर टैग बनता है।',
          voice: "अभी तक हमारे पास एक टेम्पलेट है, पर कहीं लाइव सेंसर नहीं। इसे वास्तविक बनाने के लिए, हम विशिष्ट प्लांट पर जाते हैं — यहाँ डेमो वर्कस्पेस के अंतर्गत सी ई टी पी — और इसका Visualization एडिटर खोलते हैं। बाएँ पैनल में, Equipment और Widget के साथ, एक Template टैब है। यही पुन: प्रयोज्य टेम्पलेट और इस प्लांट पर एक वास्तविक नामवाले सेंसर टैग के बीच का पुल है।",
        },
        {
          label: 'लागू', title: 'इसे लागू करें → एक वास्तविक सेंसर टैग',
          body: 'टेम्पलेट लागू करें और <strong>Sensor Configuration</strong> खुलता है: एक <strong>Frequency</strong> (दिन में एक बार, साप्ताहिक…) चुनें, <strong>थ्रेशोल्ड</strong> पुष्टि करें, सेव करें। प्लेटफ़ॉर्म इस प्लांट पर एक वास्तविक <strong>सेंसर टैग</strong> (जैसे <em>DI_WQ_SBR…</em>) बनाता है।',
          voice: "टेम्पलेट लागू करने से Sensor Configuration खुलता है। यहाँ आप सेट करते हैं कि रीडिंग कितनी बार अपेक्षित है — आवृत्ति, जैसे दिन में एक बार, दिन में दो बार, साप्ताहिक — और इस विशिष्ट प्लांट के लिए थ्रेशोल्ड पुष्टि या बदल सकते हैं। जब आप सेंसर कॉन्फ़िगरेशन जोड़ते हैं, प्लेटफ़ॉर्म इस प्लांट पर एक वास्तविक, अद्वितीय सेंसर टैग बनाता है — डी आई डब्ल्यू क्यू एस बी आर जैसा — जो अमूर्त टेम्पलेट को एक ठोस सेंसर बना देता है।",
        },
        {
          label: 'ऑपरेटर', title: 'ऑपरेटर डैशबोर्ड पर',
          body: 'उस प्लांट को सौंपे गए ऑपरेटर के डैशबोर्ड पर, नया सेंसर अब <strong>Data Input</strong> में दिखता है — अपनी <strong>वैध और सेफ़ रेंज</strong>, <strong>आवृत्ति</strong>, और एक <strong>Enter Value</strong> फ़ील्ड के साथ।',
          voice: "अब उस प्लांट को सौंपे गए ऑपरेटर पर जाएँ। उनके Data Input पेज पर, हमारा बनाया सेंसर अपने-आप दिखता है — एस बी आर क्वालिटी, अपनी वैध रेंज शून्य से चालीस और सेफ़ रेंज बीस से चालीस वहीं दिखाई, दिन में एक बार की आवृत्ति, और एक एंटर-वैल्यू फ़ील्ड इंतज़ार में। जो कुछ हमने ऊपर कॉन्फ़िगर किया — प्रकार, रेंज, आवृत्ति — वह बिना किसी अतिरिक्त सेटअप के ऑपरेटर की स्क्रीन तक पहुँच गया।",
        },
        {
          label: 'इनपुट', title: 'डेटा दर्ज — और आउट-ऑफ़-रेंज',
          body: 'ऑपरेटर एक रीडिंग टाइप करता है। अगर वह सेफ़ बैंड के बाहर हो, फ़ील्ड <em>“outside the safe range”</em> चिह्नित करता है और स्थिति <span style=\"color:#c74e3f\">Invalid</span> हो जाती है — टेम्पलेट के थ्रेशोल्ड से सीधा एक गार्डरेल।',
          voice: "अंत में, ऑपरेटर एक रीडिंग दर्ज करता है। अगर मान सेफ़ बैंड के भीतर हो, सब ठीक। पर उसके बाहर कुछ दर्ज करें — और तुरंत फ़ील्ड चेतावनी देता है outside the safe range, और स्थिति एक लाल Invalid में बदल जाती है। वह गार्डरेल सीधे उन थ्रेशोल्ड से आती है जो हमने शुरुआत में टेम्पलेट पर सेट कीं। तो एक टेम्पलेट परिभाषा आपको हर प्लांट पर एक सुसंगत सेंसर देती है जो दर्ज के समय ही गलत रीडिंग पकड़ता है। यही पूरा जीवनचक्र है: टेम्पलेट, एक प्लांट पर वास्तविक टैग के रूप में लागू, ऑपरेटर द्वारा भरा और मान्य।",
          tip: { type: 'rememberLabel', text: 'मैनुअल सेंसर टेम्पलेट (प्रकार + थ्रेशोल्ड) → प्लांट के Visualization पर लागू (आवृत्ति) = वास्तविक सेंसर टैग → ऑपरेटर डेटा दर्ज करता है, रेंज के विरुद्ध मान्य।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br>டேட்டா உள்ளீட்டு <em>சென்சார்கள்.</em>',
      subtitle: 'கட்டுநரின் பார்வை — மறுபயன்படுத்தக்கூடிய சென்சார் டெம்ப்ளேட், ஒரு ஆலையில் பயன்படுத்தப்பட்டு, பின் இயக்குநரால் நிரப்பப்படுகிறது.',
      chapter: 'கட்டுமான தடம் · டேட்டா உள்ளீட்டு',
      steps: [
        {
          label: 'டெம்ப்ளேட்', title: 'ஒரு கைமுறை சென்சார் உருவாக்கு',
          body: '<strong>Data Input</strong> திறந்து <strong>Add Manual Sensor</strong> அழுத்துங்கள். மற்றவை போல, சென்சார்களும் <strong>டெம்ப்ளேட்டாக்கப்பட்டவை</strong> — ஒருமுறை வரையறுத்தி <strong>எல்லா ஆலைகளிலும்</strong> பயன்படுத்தலாம்.',
          voice: "டேட்டா உள்ளீட்டு சென்சார்கள் மற்றவை போல்வே டெம்ப்ளேட்டாக்கப்பட்ட வகையில் அமைக்கப்படுகின்றன. Data Input-ஐத் திறக்குங்கள் — இது கைமுறை சென்சார்களின் நூலகம், ஒவ்வொன்றுக்கும் பெயர், வகை, குறிச்சொல் உண்டு. புதியதை உருவாக்க, Add Manual Sensor கிளிக் செய்யுங்கள். முக்கிய கருத்து, மீண்டும், மறுபயன்பாடு: இங்கே வரையறுபவது ஒரு டெம்ப்ளேட், அதை ஒவ்வொரு ஆலையிலும் பயன்படுத்தலாம்.",
        },
        {
          label: 'விவரம்', title: 'வகை, வகைப்பாடு & பெயர்',
          body: '<strong>Add Sensor Details</strong>-இல் ஒரு <strong>Category</strong> (<em>Water Quality</em>), ஒரு <strong>Type</strong> — <em>Number, Boolean, Text</em> அல்லது <em>Image</em> — தேர்ந்து, சென்சாருக்கு ஒரு <strong>பெயர்</strong> கொடு. வகை இயக்குநர் எப்படி பதிவிடுவார் என்பதை தீர்மானிக்கிறது.',
          voice: "Add Sensor Details உரையாடல் அத்தியாவசியங்களைக் கேட்கிறது. ஒரு வகையைத் தேர்ந்தெடு — இங்கே Water Quality. வகைப்பாடு, அதாவது இயக்குநர் அளவீட்டை எப்படிப் பதிவு செய்வார்: ஒரு எண், ஆம்-இல்லை பூலியன், சுதந்திர உரை, அல்லது ஒரு படம். சென்சாருக்கு ஒரு தெளிவான பெயர் கொடுங்கள், எஸ் பி ஆர் க்வாலிடி போல. வகைப்பாடு முக்கியம், ஏனெனில் அது பின்னர் இயக்குநர் காணும் உள்ளீட்டை வடிவமைக்கிறது.",
        },
        {
          label: 'வரம்புகள்', title: 'டெம்ப்ளேட்டில் வரம்புகள் அமை',
          body: 'எண் சென்சாருக்கு, டெம்ப்ளேட்டிலேயே <strong>வரம்புகளை</strong> அமை: ஒரு <strong>Range Min / Max</strong> (செல்லுபடியாகும் வரம்பு) மற்றும் ஒரு <strong>Safe Min / Max</strong> பட்டை. பாதுகாப்புக்கு வெளியே <span style=\"color:#c74e3f\">Critical</span>; உள்ளே <span style=\"color:#2d8659\">Safe</span>.',
          voice: "எண் சென்சாருக்கு, இங்கேயே டெம்ப்ளேட்டில் ஸ்லைடரால் வரம்புகளை இணைக்கலாம். ரேஞ்ச் குறைந்தபட்சமும் அதிகபட்சமும் என்ன சரியான மதிப்பு என்பதை வரையறுகின்றன — இங்கே பூஜ்ஜியம் முதல் நாற்பது. ஸேப் குறைந்தபட்சமும் அதிகபட்சமும் அதை மீறின பச்சை, ஆரோக்கியமான பட்டையை வரையறுகின்றன. இந்த வரம்புகள் டெம்ப்ளேட்டில் இருப்பதால், இந்த சென்சாரைப் பயன்படுத்தும் ஒவ்வொரு ஆலையும் அதே சரிபார்ப்பைப் பெறுகிறது. சமர்ப்பி, சென்சார் டெம்ப்ளேட் உருவானது.",
        },
        {
          label: 'ஆலை', title: 'ஆலையின் Visualization-க்குச் செல்',
          body: 'டெம்ப்ளேட் மட்டும் இன்னும் நேரலை சென்சார் அல்ல. இலக்கு ஆலையின் <strong>Visualization</strong> எடிட்டரைத் திறந்து <strong>Template</strong> பலகத்திற்கு மாறுங்கள் — இங்கே டெம்ப்ளேட் ஒரு உண்மையான சென்சார் டேக் ஆகிறது.',
          voice: "இதுவரை நம்மிடம் ஒரு டெம்ப்ளேட் உள்ளது, ஆனால் எங்கும் நேரலை சென்சார் இல்லை. அதை நிஜமாக்க, குறிப்பிட்ட ஆலைக்குச் செல்கிறோம் — இங்கே டெமோ வர்க்ஸ்பேஸின் கீழ் சி ஈ டி பி — அதன் Visualization எடிட்டரைத் திறக்கிறோம். இடது பலகத்தில், Equipment, Widget-உடன் ஒரு Template டாப் உள்ளது. இதுதான் மறுபயன்பாடு டெம்ப்ளேட்டுக்கும் இந்த ஆலையில் உண்மையான சென்சார் டேக்-கும் இடையிலான பாலம்.",
        },
        {
          label: 'பயன்படுத்து', title: 'அதைப் பயன்படுத்து → ஒரு உண்மை டேக்',
          body: 'டெம்ப்ளேட்டைப் பயன்படுத்த <strong>Sensor Configuration</strong> திறக்கிறது: ஒரு <strong>Frequency</strong> (நாளைக்கொருமுறை, வாராந்திறு…) தேர்ந்து, <strong>வரம்புகளை</strong> உறுதி செய்து சேமி. இந்த ஆலையில் ஒரு உண்மை <strong>சென்சார் டேக்</strong> (<em>DI_WQ_SBR…</em>) உருவாகுகிறது.',
          voice: "டெம்ப்ளேட்டைப் பயன்படுத்துவது Sensor Configuration-ஐத் திறக்கிறது. இங்கே அளவீடு எவ்வளவு அடிக்கடி எதிர்பார்க்கப்படுகிறது என்பதை — அதிர்வெண், நாளைக்கொருமுறை, வாராந்திறு — அமைகிறீர்கள், இந்த குறிப்பிட்ட ஆலைக்கு வரம்புகளை உறுதி செய்யலாம். Sensor Configuration சேர்க்கும்போது, தளம் இந்த ஆலையில் ஒரு உண்மையான, தனித்துவமான சென்சார் டேக் உருவாக்குகிறது — டி ஐ அண்டர்ஸ்கோர் டபிள்யூ க்யூ அண்டர்ஸ்கோர் எஸ் பி ஆர் போல — அமூர்த டெம்ப்ளேட்டை ஒரு உறுதியான சென்சாராக்குகிறது.",
        },
        {
          label: 'இயக்குநர்', title: 'இயக்குநர் டாஷ்போர்டில்',
          body: 'அந்த ஆலைக்கு நியமிக்கப்பட்ட இயக்குநரின் டாஷ்போர்டில், புதிய சென்சார் இப்போது <strong>Data Input</strong>-இல் தோன்றுகிறது — அதன் <strong>செல்லுபடியாகும் & பாதுகாப்பு வரம்புகள்</strong>, <strong>அதிர்வெண்</strong>, ஒரு <strong>Enter Value</strong> புலம்.',
          voice: "இப்போது அந்த ஆலைக்கு நியமிக்கப்பட்ட இயக்குநருக்கு மாறுங்கள். அவரது Data Input பக்கத்தில், நாம் உருவாக்கிய சென்சார் தானாகவே தோன்றுகிறது — எஸ் பி ஆர் க்வாலிடி, அதன் செல்லுபடியாகும் வரம்பு சூன்யம் முதல் நாற்பது, பாதுகாப்பு வரம்பு இருபது முதல் நாற்பது அங்கேயே காட்டப்பட்டு, நாளைக்கொருமுறை அதிர்வெண், ஒரு enter-value புலம் காத்திருக்கிறது. மேலே நாம் அமைத்ததெல்லாம் கீழே எவ்வித கூடுதல் அமைப்பின்றி இயக்குநரின் திரைக்கு வந்தது.",
        },
        {
          label: 'உள்ளீடு', title: 'தரவு உள்ளிடு — வரம்புக்கு வெளியே',
          body: 'இயக்குநர் ஒரு அளவீட்டைத் தட்டச்சு செய்கிறார். அது பாதுகாப்பு பட்டைக்கு வெளியே இருந்தால், புலம் <em>“outside the safe range”</em> எனக் காட்டி, நிலை <span style=\"color:#c74e3f\">Invalid</span> ஆகிறது — டெம்ப்ளேட்டின் வரம்புகளிலிருந்தே வரும் பாதுகாப்பு.',
          voice: "இறுதியாக, இயக்குநர் ஒரு அளவீட்டை உள்ளிடுகிறார். மதிப்பு பாதுகாப்பு பட்டைக்குள் இருந்தால் எல்லாம் சரி. ஆனால் அதற்கு வெளியே எதையேனும் உள்ளிடுங்கள் — உடனே புலம் outside the safe range என எச்சரிக்கிறது, நிலை சிவப்பு Invalid-ஆக மாறுகிறது. அந்தக் காப்பு நேரடியாக தொடக்கத்தில் டெம்ப்ளேட்டில் நாம் அமைத்த வரம்புகளிலிருந்தே வருகிறது. இதுதான் முழு வாழ்க்கைச் சுழற்சி: டெம்ப்ளேட், ஒரு ஆலையில் உண்மை டேக் ஆக பயன்படுத்தப்பட்டு, இயக்குநரால் நிரப்பப்பட்டு சரிபார்க்கப்படுகிறது.",
          tip: { type: 'rememberLabel', text: 'கைமுறை சென்சார் டெம்ப்ளேட் (வகை + வரம்புகள்) → ஆலையின் Visualization-இல் பயன்படுத்து (அதிர்வெண்) = உண்மை டேக் → இயக்குநர் தரவு உள்ளிட, வரம்புகள் எதிராக சரிபார்க்கப்படுகிறது.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br>डेटा इनपुट <em>सेन्सर.</em>',
      subtitle: 'बिल्डरचा दृष्टिकोन — एक पुन्हा वापरता येणारा सेन्सर टेम्पलेट, एका प्लांटवर लागू, मग ऑपरेटरने भरलेला.',
      chapter: 'बिल्ड ट्रॅक · डेटा इनपुट',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक मॅन्युअल सेन्सर तयार करा',
          body: '<strong>Data Input</strong> उघडा आणि <strong>Add Manual Sensor</strong> दाबा. इतर सर्वांप्रमाणे, सेन्सरही <strong>टेम्पलेटाइज्ड</strong> आहेत — एकदा परिभाषित करून <strong>सर्व प्लांटवर</strong> लागू करता येतात.',
          voice: "डेटा इनपुट सेन्सर इतर सर्वांप्रमाणेच टेम्पलेटाइज्ड पद्धतीने कॉन्फिगर होतात. Data Input उघडा — ही मॅन्युअल सेन्सर्सची लायब्ररी आहे, प्रत्येक आपल्या नाव, श्रेणी आणि टॅगसह. नवीन तयार करायला, Add Manual Sensor क्लिक करा. मुख्य कल्पना, पुन्हा, पुनर्वापर आहे: इथे तुम्ही जे परिभाषित करता ते एक टेम्पलेट आहे, आणि ते तुम्ही प्रत्येक प्लांटवर लागू करू शकता.",
        },
        {
          label: 'तपशील', title: 'श्रेणी, प्रकार व नाव',
          body: '<strong>Add Sensor Details</strong> मध्ये एक <strong>Category</strong> (<em>Water Quality</em>), एक <strong>Type</strong> — <em>Number, Boolean, Text</em> किंवा <em>Image</em> — निवडा, आणि सेन्सरला एक <strong>नाव</strong> द्या. प्रकार ऑपरेटर रीडिंग कसे भरेल हे ठरवतो.',
          voice: "Add Sensor Details डायलॉग आवश्यक गोष्टी विचारतो. एक श्रेणी निवडा — इथे Water Quality. प्रकार निवडा, जो ऑपरेटर रीडिंग कसे नोंदवेल ते आहे: एक संख्या, होय-नाही बुलियन, मुक्त मजकूर, किंवा एक प्रतिमा. आणि सेन्सरला एक स्पष्ट नाव द्या, जसे एस बी आर क्वॉलिटी. प्रकार महत्त्वाचा कारण तो पुढे ऑपरेटरला दिसणारे इनपुट घडवतो.",
        },
        {
          label: 'थ्रेशोल्ड', title: 'टेम्पलेटवर थ्रेशोल्ड लागू करा',
          body: 'नंबर सेन्सरसाठी, टेम्पलेटवरच <strong>थ्रेशोल्ड</strong> सेट करा: एक <strong>Range Min / Max</strong> (वैध श्रेणी) आणि एक <strong>Safe Min / Max</strong> बॅंड. सेफच्या बाहेरची मूल्ये <span style=\"color:#c74e3f\">Critical</span>; आत <span style=\"color:#2d8659\">Safe</span>.',
          voice: "नंबर सेन्सरसाठी, तुम्ही इथेच टेम्पलेटवर स्लाइडरने थ्रेशोल्ड जोडू शकता. रेंज किमान आणि कमाल कोणते मूल्य वैध आहे हे ठरवतात — इथे शून्य ते चाळीस. आणि सेफ किमान आणि कमाल त्यातील हिरवा, निरोगी बॅंड ठरवतात. हे थ्रेशोल्ड टेम्पलेटवर असल्याने, हा सेन्सर वापरणारा प्रत्येक प्लांट तीच वैधता आपोआप मिळवतो. सबमिट करा, सेन्सर टेम्पलेट तयार झाले.",
        },
        {
          label: 'प्लांट', title: 'प्लांटच्या Visualization वर जा',
          body: 'टेम्पलेट एकटे अजून लाइव्ह सेन्सर नाही. लक्ष्य प्लांटचे <strong>Visualization</strong> एडिटर उघडा आणि <strong>Template</strong> पॅनलवर जा — इथेच टेम्पलेट एक खरा सेन्सर टॅग बनतो.',
          voice: "आतापर्यंत आपल्याकडे एक टेम्पलेट आहे, पण कुठेही लाइव्ह सेन्सर नाही. तो खरा करायला, आपण विशिष्ट प्लांटवर जातो — इथे डेमो वर्कस्पेस अंतर्गत सी ई टी पी — आणि त्याचे Visualization एडिटर उघडतो. डाव्या पॅनलमध्ये, Equipment आणि Widget सोबत, एक Template टॅब आहे. हाच पुन्हा वापरता येणारा टेम्पलेट आणि या प्लांटवरील खर्या सेन्सर टॅगमधला पूल आहे.",
        },
        {
          label: 'लागू', title: 'ते लागू करा → एक खरा सेन्सर टॅग',
          body: 'टेम्पलेट लागू करा आणि <strong>Sensor Configuration</strong> उघडते: एक <strong>Frequency</strong> (दिवसातून एकदा, साप्ताहिक…) निवडा, <strong>थ्रेशोल्ड</strong> पुष्टी करा, सेव्ह करा. प्लॅटफॉर्म या प्लांटवर एक खरा <strong>सेन्सर टॅग</strong> (जसा <em>DI_WQ_SBR…</em>) तयार करतो.',
          voice: "टेम्पलेट लागू केल्याने Sensor Configuration उघडते. इथे तुम्ही रीडिंग कितीदा अपेक्षित आहे ते सेट करता — वारंवारता, जसे दिवसातून एकदा, दिवसातून दोनदा, साप्ताहिक — आणि या विशिष्ट प्लांटसाठी थ्रेशोल्ड पुष्टी किंवा बदलू शकता. जेव्हा तुम्ही सेन्सर कॉन्फिगरेशन जोडता, प्लॅटफॉर्म या प्लांटवर एक खरा, अनन्य सेन्सर टॅग तयार करतो — डी आय डब्ल्यू क्यू एस बी आर सारखा — अमूर्त टेम्पलेटला एक ठोस सेन्सर बनवतो.",
        },
        {
          label: 'ऑपरेटर', title: 'ऑपरेटर डॅशबोर्डवर',
          body: 'त्या प्लांटला नेमलेल्या ऑपरेटरच्या डॅशबोर्डवर, नवीन सेन्सर आता <strong>Data Input</strong> मध्ये दिसतो — त्याच्या <strong>वैध आणि सेफ श्रेणी</strong>, <strong>वारंवारता</strong>, आणि एक <strong>Enter Value</strong> फील्डसह.',
          voice: "आता त्या प्लांटला नेमलेल्या ऑपरेटरकडे जा. त्यांच्या Data Input पेजवर, आपण आत्ताच तयार केलेला सेन्सर आपोआप दिसतो — एस बी आर क्वॉलिटी, त्याची वैध श्रेणी शून्य ते चाळीस आणि सेफ श्रेणी वीस ते चाळीस तिथेच दाखवलेली, दिवसातून एकदाची वारंवारता, आणि एक enter-value फील्ड वाट पाहताना. आपण वर जे काही कॉन्फिगर केले — प्रकार, श्रेणी, वारंवारता — ते कोणत्याही अतिरिक्त सेटअपशिवाय ऑपरेटरच्या स्क्रीनपर्यंत पोहोचले.",
        },
        {
          label: 'इनपुट', title: 'डेटा भरा — आणि आउट-ऑफ-रेंज',
          body: 'ऑपरेटर एक रीडिंग टाइप करतो. ते सेफ बॅंडच्या बाहेर असल्यास, फील्ड <em>“outside the safe range”</em> दर्शवतो आणि स्थिती <span style=\"color:#c74e3f\">Invalid</span> होते — टेम्पलेटच्या थ्रेशोल्डमधून थेट एक गार्डरेल.',
          voice: "शेवटी, ऑपरेटर एक रीडिंग भरतो. मूल्य सेफ बॅंडच्या आत असल्यास सर्व ठीक. पण त्याच्या बाहेर काही भरा — आणि ताबडतोब फील्ड outside the safe range असा इशारा देतो, आणि स्थिती एका लाल Invalid मध्ये बदलते. ती गार्डरेल थेट आपण सुरुवातीला टेम्पलेटवर सेट केलेल्या थ्रेशोल्डमधून येते. म्हणून एक टेम्पलेट व्याख्या तुम्हाला प्रत्येक प्लांटवर एक सुसंगत सेन्सर देते जो भरतानाच चुकीची रीडिंग पकडतो. हेच संपूर्ण जीवनचक्र: टेम्पलेट, एका प्लांटवर खरा टॅग म्हणून लागू, ऑपरेटरने भरलेला व पडताळलेला.",
          tip: { type: 'rememberLabel', text: 'मॅन्युअल सेन्सर टेम्पलेट (प्रकार + थ्रेशोल्ड) → प्लांटच्या Visualization वर लागू (वारंवारता) = खरा सेन्सर टॅग → ऑपरेटर डेटा भरतो, श्रेणींविरुद्ध पडताळलेला.' },
        },
      ],
    },
  },
};

export default lesson;
