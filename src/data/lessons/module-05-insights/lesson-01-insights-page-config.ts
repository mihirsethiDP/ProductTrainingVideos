import type { Lesson } from '../../types';

/**
 * Module 5 · Configure — Setting up an Insight.   Tag: M5.L1·C  (internal only)
 * The "how to build it" track, from the screen recording: create a reusable
 * insight template (with optional AI RCA) → add an Insight trigger component on
 * a conditional trigger (opening + closing conditions) → optionally make it
 * Time Sensitive (fires a WhatsApp + pick the user). Mirrors event setup.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-05-config`;

const lesson: Lesson = {
  id: 'lesson-01-insights-page-config',
  moduleId: 'module-05-insights',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    templates: `${BASE}/templates.jpg`,
    form: `${BASE}/template-form.jpg`,
    rca: `${BASE}/template-rca.jpg`,
    trigger: `${BASE}/trigger.jpg`,
    create: `${BASE}/create-insight.jpg`,
    timeSensitive: `${BASE}/time-sensitive.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'templates', caption: 'Insight Templates', spotlight: { top: '4%', left: '85%', width: '14%', height: '9%' } },
    { mode: 'detail', screenshot: 'form', caption: 'Name, type & classification', spotlight: { top: '11%', left: '1%', width: '98%', height: '19%' } },
    { mode: 'detail', screenshot: 'rca', caption: 'Add an AI-generated RCA', spotlight: { top: '26%', left: '1%', width: '97%', height: '22%' } },
    { mode: 'detail', screenshot: 'trigger', caption: 'Opening & closing conditions', spotlight: { top: '40%', left: '24%', width: '70%', height: '14%' } },
    { mode: 'detail', screenshot: 'create', caption: 'Trigger component → Insight', spotlight: { top: '18%', left: '25%', width: '50%', height: '10%' } },
    { mode: 'detail', screenshot: 'timeSensitive', caption: 'Time Sensitive → WhatsApp + user', spotlight: { top: '36%', left: '46%', width: '33%', height: '11%' } },
    { mode: 'detail', screenshot: 'timeSensitive', caption: 'Save — or cancel', spotlight: { top: '91%', left: '60%', width: '33%', height: '9%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>Setting up an <em>Insight.</em>',
      subtitle: 'The builder\'s view — a reusable template, opening and closing conditions, and an optional time-sensitive WhatsApp.',
      chapter: 'Build Track · Insights',
      steps: [
        {
          label: 'Template', title: 'Create an insight template',
          body: 'Just like events, insights are <strong>templatized</strong>. Open <strong>Insight Templates</strong> and hit <strong>Create Insight Template</strong> — a template is defined once and reused across plants.',
          voice: "Insights are configured almost exactly like events, so a lot of this will feel familiar. They're templatized: you define an insight once as a template, then reuse it across plants. So we start in Insight Templates and click Create Insight Template. The list here shows every template — each with its type of insight, equipment type, and whether it carries media or an R C A. Let's make a new one.",
        },
        {
          label: 'Form', title: 'Name, type & classification',
          body: 'Give the template a <strong>name</strong> and <strong>description</strong>, pick an <strong>Equipment Type</strong> (here <em>Valve</em>), an <strong>Insight Classification</strong> (<em>Alarm</em>), and a <strong>Type of Insight</strong> — <span style=\"color:#a3791a\">Warning</span>, <span style=\"color:#a3791a\">Issue</span> or <span style=\"color:#c74e3f\">Incident</span>. You can also <strong>Upload Media</strong> and write the insight details.',
          voice: "The template form mirrors the event one. Give it a clear name and description. Pick the equipment type — here, Valve — which, just like with events, lets the platform fetch the right equipment later. Then set the insight classification, here Alarm, and the type of insight: Warning, Issue, or Incident — the same three types your clients see on the Insights page. You can upload reference media and write out the insight details in the rich text editor, so anyone who receives this insight has the full context.",
        },
        {
          label: 'RCA', title: 'Add an AI-generated RCA',
          body: 'Tick <strong>Add RCA</strong> and the platform generates a <strong>root-cause analysis</strong> for the insight — the likely causes, ready-made. It\'s the same RCA your clients see in the insight detail view.',
          voice: "Here's a nice touch. Tick the Add R C A box, and the platform generates a root-cause analysis for this insight — a set of likely causes, written for you. For an S B R cycle cleaning insight, it suggests things like inadequate settling periods or improper mix timing. This is exactly the R C A that shows up in the insight's detail view on the client side, so by adding it to the template you're enriching every insight this template ever produces. Save, and the template is ready.",
        },
        {
          label: 'Conditions', title: 'Opening & closing conditions',
          body: 'Like events, insights ride on a <strong>conditional trigger</strong>. The trigger carries an <strong>Observation Condition</strong> (the opening — <em>25open:AMB</em>) and a <strong>Resolution Condition</strong> (the closing — <em>25close:AMB</em>). Open the trigger and use <strong>Trigger Actions</strong> to add a component.',
          voice: "Now to wire it to conditions. Open a conditional trigger — the same trigger engine behind events. Every trigger has two formulas: the observation condition, which is the opening condition that fires the insight, and the resolution condition, which is the closing condition that resolves it. Both are defined on sensor values, exactly like the opening and closing of an event. Down in Trigger Actions you can attach components — task, communication, event — and the one we want here is Insights.",
        },
        {
          label: 'Component', title: 'Add an Insight component',
          body: 'Choose <strong>Insights</strong> from Trigger Actions to open <strong>Create Insight</strong>. Select the <strong>insight template</strong> you made, then set the <strong>user group, asset, classification, type, equipment</strong> and <strong>priority</strong> — most of it pre-filled from the template.',
          voice: "Selecting Insights opens the Create Insight dialog. The first field is Select Insight Template — pick the one you created, and it pre-fills the classification, the type, the description, even the R C A. You then confirm the user group, the asset, the equipment this applies to, and a priority — low, medium or high. It's the same pattern as the event component: the template does the heavy lifting, and you just point it at the right place.",
        },
        {
          label: 'Time-sensitive', title: 'Time Sensitive → WhatsApp + user',
          body: 'Tick <strong>Time Sensitive</strong> and the insight fires a <strong>WhatsApp the instant the opening condition becomes true</strong>. Checking it activates the <strong>Select User</strong> field — choose who gets that message.',
          voice: "Here's the important option. Tick Time Sensitive, and this insight becomes urgent: the moment its opening condition becomes true, the platform fires off a WhatsApp message immediately — no waiting for someone to check the dashboard. And the instant you check that box, the Select User field beside it activates. That's where you choose exactly who receives the WhatsApp. So for a critical insight, you can make sure the right person is pinged on their phone the second it opens.",
        },
        {
          label: 'Save', title: 'Submit — or cancel',
          body: 'Submit to attach the insight component to the trigger. In this walkthrough we <strong>cancelled</strong> at the end — there\'s no need to create templates or components you don\'t actually want. The flow is the takeaway: <em>template → trigger → insight component → (optional) time-sensitive WhatsApp</em>.',
          voice: "Finally, you'd hit Submit to attach the insight component to the trigger and make it live. In this walkthrough, though, we cancelled at the end on purpose — there was no reason to create a template or a component we didn't actually need, and you should avoid cluttering the system with test artifacts. So treat the flow itself as the takeaway: a reusable template, attached to a trigger's opening and closing conditions as an insight component, optionally made time-sensitive to fire a WhatsApp to a chosen user. That's the whole of insight configuration, and it's the same shape as events.",
          tip: { type: 'rememberLabel', text: 'Template (+ optional AI RCA) → conditional trigger (open/close) → Insight component → optional Time Sensitive = WhatsApp to a selected user.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br>एक <em>इनसाइट</em> सेट करना।',
      subtitle: 'बिल्डर का दृश्य — एक पुन: प्रयोज्य टेम्पलेट, खुलने व बंद होने की शर्तें, और एक वैकल्पिक टाइम-सेंसिटिव WhatsApp।',
      chapter: 'बिल्ड ट्रैक · इनसाइट्स',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक इनसाइट टेम्पलेट बनाएँ',
          body: 'इवेंट की तरह, इनसाइट भी <strong>टेम्पलेटाइज़्ड</strong> हैं। <strong>Insight Templates</strong> खोलें और <strong>Create Insight Template</strong> दबाएँ — टेम्पलेट एक बार परिभाषित होकर प्लांट भर में पुन: उपयोग होता है।',
          voice: "इनसाइट लगभग बिल्कुल इवेंट की तरह कॉन्फ़िगर होते हैं, तो बहुत कुछ परिचित लगेगा। ये टेम्पलेटाइज़्ड हैं: आप इनसाइट को एक बार टेम्पलेट के रूप में परिभाषित करते हैं, फिर प्लांट भर में पुन: उपयोग करते हैं। तो हम Insight Templates में शुरू करते हैं और Create Insight Template पर क्लिक करते हैं। यहाँ सूची हर टेम्पलेट दिखाती है — हर एक अपने इनसाइट प्रकार, उपकरण प्रकार, और मीडिया या आर सी ए के साथ। चलिए एक नया बनाते हैं।",
        },
        {
          label: 'फ़ॉर्म', title: 'नाम, प्रकार व वर्गीकरण',
          body: 'टेम्पलेट को <strong>नाम</strong> व <strong>विवरण</strong> दें, एक <strong>Equipment Type</strong> (यहाँ <em>Valve</em>), एक <strong>Insight Classification</strong> (<em>Alarm</em>), और <strong>Type of Insight</strong> चुनें — <span style=\"color:#a3791a\">Warning</span>, <span style=\"color:#a3791a\">Issue</span> या <span style=\"color:#c74e3f\">Incident</span>। <strong>Upload Media</strong> भी कर सकते हैं।',
          voice: "टेम्पलेट फ़ॉर्म इवेंट वाले जैसा है। इसे एक स्पष्ट नाम और विवरण दें। उपकरण प्रकार चुनें — यहाँ, Valve — जो इवेंट की तरह ही प्लेटफ़ॉर्म को बाद में सही उपकरण लाने देता है। फिर इनसाइट वर्गीकरण सेट करें, यहाँ Alarm, और इनसाइट प्रकार: Warning, Issue, या Incident — वही तीन प्रकार जो आपके क्लाइंट इनसाइट्स पेज पर देखते हैं। आप संदर्भ मीडिया अपलोड कर सकते हैं और रिच टेक्स्ट एडिटर में इनसाइट विवरण लिख सकते हैं, ताकि इसे पाने वाले को पूरा संदर्भ मिले।",
        },
        {
          label: 'आरसीए', title: 'एक AI-जनित RCA जोड़ें',
          body: '<strong>Add RCA</strong> टिक करें और प्लेटफ़ॉर्म इनसाइट के लिए एक <strong>रूट-कॉज़ एनालिसिस</strong> बनाता है — संभावित कारण, तैयार। यह वही RCA है जो क्लाइंट इनसाइट विवरण में देखते हैं।',
          voice: "यह रहा एक बढ़िया फ़ीचर। Add R C A बॉक्स टिक करें, और प्लेटफ़ॉर्म इस इनसाइट के लिए एक रूट-कॉज़ एनालिसिस बनाता है — संभावित कारणों का एक सेट, आपके लिए लिखा हुआ। एस बी आर साइकिल क्लीनिंग इनसाइट के लिए, यह अपर्याप्त सेटलिंग पीरियड या ग़लत मिक्स टाइमिंग जैसी बातें सुझाता है। यह ठीक वही आर सी ए है जो क्लाइंट साइड पर इनसाइट के विवरण में दिखता है, तो इसे टेम्पलेट में जोड़कर आप हर इनसाइट को समृद्ध कर रहे हैं। सेव करें, टेम्पलेट तैयार।",
        },
        {
          label: 'शर्तें', title: 'खुलने व बंद होने की शर्तें',
          body: 'इवेंट की तरह, इनसाइट एक <strong>कंडिशनल ट्रिगर</strong> पर चलते हैं। ट्रिगर में एक <strong>Observation Condition</strong> (खुलना — <em>25open:AMB</em>) और एक <strong>Resolution Condition</strong> (बंद होना — <em>25close:AMB</em>) होती है। ट्रिगर खोलें और <strong>Trigger Actions</strong> से कंपोनेंट जोड़ें।',
          voice: "अब इसे शर्तों से जोड़ते हैं। एक कंडिशनल ट्रिगर खोलें — वही ट्रिगर इंजन जो इवेंट के पीछे है। हर ट्रिगर में दो फ़ॉर्मूले होते हैं: ऑब्ज़र्वेशन कंडीशन, जो खुलने की शर्त है जो इनसाइट फ़ायर करती है, और रिज़ॉल्यूशन कंडीशन, जो बंद होने की शर्त है जो उसे हल करती है। दोनों सेंसर मानों पर परिभाषित हैं, बिल्कुल इवेंट के खुलने और बंद होने जैसी। नीचे Trigger Actions में आप कंपोनेंट जोड़ सकते हैं — टास्क, कम्युनिकेशन, इवेंट — और यहाँ हमें Insights चाहिए।",
        },
        {
          label: 'कंपोनेंट', title: 'एक Insight कंपोनेंट जोड़ें',
          body: 'Trigger Actions से <strong>Insights</strong> चुनें ताकि <strong>Create Insight</strong> खुले। अपना बनाया <strong>इनसाइट टेम्पलेट</strong> चुनें, फिर <strong>यूज़र ग्रुप, एसेट, वर्गीकरण, प्रकार, उपकरण</strong> और <strong>प्राथमिकता</strong> सेट करें — ज़्यादातर टेम्पलेट से पहले से भरा।',
          voice: "Insights चुनने से Create Insight डायलॉग खुलता है। पहला फ़ील्ड है Select Insight Template — अपना बनाया चुनें, और यह वर्गीकरण, प्रकार, विवरण, यहाँ तक कि आर सी ए भी पहले से भर देता है। फिर आप यूज़र ग्रुप, एसेट, यह जिस उपकरण पर लागू है, और एक प्राथमिकता — निम्न, मध्यम या उच्च — की पुष्टि करते हैं। यह इवेंट कंपोनेंट जैसा ही पैटर्न है: टेम्पलेट भारी काम करता है, आप बस इसे सही जगह पर इंगित करते हैं।",
        },
        {
          label: 'टाइम-सेंसिटिव', title: 'Time Sensitive → WhatsApp + यूज़र',
          body: '<strong>Time Sensitive</strong> टिक करें और इनसाइट <strong>खुलने की शर्त सच होते ही एक WhatsApp फ़ायर</strong> करती है। इसे टिक करने से <strong>Select User</strong> फ़ील्ड सक्रिय होता है — चुनें कि वह संदेश किसे मिले।',
          voice: "यह रहा महत्वपूर्ण विकल्प। Time Sensitive टिक करें, और यह इनसाइट अत्यावश्यक बन जाती है: जिस पल इसकी खुलने की शर्त सच होती है, प्लेटफ़ॉर्म तुरंत एक WhatsApp संदेश भेज देता है — किसी के डैशबोर्ड जाँचने का इंतज़ार नहीं। और जिस पल आप वह बॉक्स टिक करते हैं, उसके बगल का Select User फ़ील्ड सक्रिय हो जाता है। वहीं आप चुनते हैं कि WhatsApp किसे मिले। तो किसी क्रिटिकल इनसाइट के लिए, आप पक्का कर सकते हैं कि खुलते ही सही व्यक्ति को उनके फ़ोन पर पिंग मिले।",
        },
        {
          label: 'सेव', title: 'सबमिट — या कैंसिल',
          body: 'इनसाइट कंपोनेंट को ट्रिगर से जोड़ने के लिए सबमिट करें। इस वॉकथ्रू में हमने अंत में <strong>कैंसिल</strong> किया — अनावश्यक टेम्पलेट या कंपोनेंट बनाने की ज़रूरत नहीं। मुख्य बात प्रवाह है: <em>टेम्पलेट → ट्रिगर → इनसाइट कंपोनेंट → (वैकल्पिक) टाइम-सेंसिटिव WhatsApp</em>।',
          voice: "अंत में, आप इनसाइट कंपोनेंट को ट्रिगर से जोड़ने और लाइव करने के लिए Submit दबाते। पर इस वॉकथ्रू में हमने अंत में जान-बूझकर कैंसिल किया — ऐसा टेम्पलेट या कंपोनेंट बनाने का कोई कारण नहीं था जो हमें सचमुच चाहिए नहीं था, और सिस्टम को टेस्ट चीज़ों से भरने से बचना चाहिए। तो प्रवाह को ही मुख्य बात मानें: एक पुन: प्रयोज्य टेम्पलेट, एक ट्रिगर की खुलने और बंद होने की शर्तों से इनसाइट कंपोनेंट के रूप में जुड़ा, वैकल्पिक रूप से टाइम-सेंसिटिव बनाकर एक चुने हुए यूज़र को WhatsApp फ़ायर करता है। यही पूरी इनसाइट कॉन्फ़िगरेशन है, और यह इवेंट जैसा ही आकार है।",
          tip: { type: 'rememberLabel', text: 'टेम्पलेट (+ वैकल्पिक AI RCA) → कंडिशनल ट्रिगर (खुलना/बंद) → Insight कंपोनेंट → वैकल्पिक Time Sensitive = चुने यूज़र को WhatsApp।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br>ஒரு <em>இன்சைட்டை</em> அமைத்தல்.',
      subtitle: 'கட்டுநரின் பார்வை — மறுபயன்படுத்தக்கூடிய டெம்ப்ளேட், திறக்கும்/மூடும் நிபந்தனைகள், விருப்ப நேர-உணர்வு WhatsApp.',
      chapter: 'கட்டுமான தடம் · இன்சைட்ஸ்',
      steps: [
        {
          label: 'டெம்ப்ளேட்', title: 'ஒரு இன்சைட் டெம்ப்ளேட்டை உருவாக்கு',
          body: 'நிகழ்வுகள் போலவே, இன்சைட்களும் <strong>டெம்ப்ளேட்டாக்கப்பட்டவை</strong>. <strong>Insight Templates</strong> திறந்து <strong>Create Insight Template</strong> அழுத்துங்கள் — டெம்ப்ளேட் ஒருமுறை வரையறுக்கப்பட்டு ஆலைகளில் மறுபயன்படுத்தப்படுகிறது.',
          voice: "இன்சைட்கள் கிட்டத்தட்ட நிகழ்வுகள் போலவே அமைக்கப்படுகின்றன, எனவே நிறையப் பழக்கமாகத் தோன்றும். அவை டெம்ப்ளேட்டாக்கப்பட்டவை: ஒரு இன்சைட்டை ஒருமுறை டெம்ப்ளேட்டாக வரையறுத்து, ஆலைகளில் மறுபயன்படுத்துகிறீர்கள். எனவே Insight Templates-இல் தொடங்கி Create Insight Template-ஐ கிளிக் செய்கிறோம். இங்கே பட்டியல் ஒவ்வொரு டெம்ப்ளேட்டையும் காட்டுகிறது — ஒவ்வொன்றும் அதன் இன்சைட் வகை, உபகரண வகை, மீடியா அல்லது ஆர் சி ஏ உடன். ஒரு புதியதை உருவாக்குவோம்.",
        },
        {
          label: 'படிவம்', title: 'பெயர், வகை & வகைப்பாடு',
          body: 'டெம்ப்ளேட்டுக்கு <strong>பெயர்</strong>, <strong>விளக்கம்</strong> கொடுத்து, ஒரு <strong>Equipment Type</strong> (இங்கே <em>Valve</em>), ஒரு <strong>Insight Classification</strong> (<em>Alarm</em>), <strong>Type of Insight</strong> — <span style=\"color:#a3791a\">Warning</span>, <span style=\"color:#a3791a\">Issue</span> அல்லது <span style=\"color:#c74e3f\">Incident</span> தேர்வு செய். <strong>Upload Media</strong>வும் செய்யலாம்.',
          voice: "டெம்ப்ளேட் படிவம் நிகழ்வுப் படிவத்தை ஒத்திருக்கிறது. ஒரு தெளிவான பெயரும் விளக்கமும் கொடுங்கள். உபகரண வகையைத் தேர்ந்தெடுங்கள் — இங்கே, Valve — இது நிகழ்வுகள் போலவே சரியான உபகரணத்தைப் பின்னர் கொண்டுவர அனுமதிக்கிறது. பின் இன்சைட் வகைப்பாடு, இங்கே Alarm, மற்றும் இன்சைட் வகை: Warning, Issue, அல்லது Incident — உங்கள் வாடிக்கையாளர்கள் இன்சைட்ஸ் பக்கத்தில் காணும் அதே மூன்று வகைகள். குறிப்பு மீடியாவைப் பதிவேற்றி, ரிச் டெக்ஸ்ட் எடிட்டரில் இன்சைட் விவரங்களை எழுதலாம், இதைப் பெறுபவருக்கு முழு சூழல் கிடைக்கும்.",
        },
        {
          label: 'ஆர்சிஏ', title: 'ஒரு AI-உருவாக்கிய RCA சேர்',
          body: '<strong>Add RCA</strong> டிக் செய், தளம் இன்சைட்டுக்கு ஒரு <strong>மூல-காரண பகுப்பாய்வை</strong> உருவாக்குகிறது — சாத்தியமான காரணங்கள், தயாராக. இது வாடிக்கையாளர் இன்சைட் விவரத்தில் காணும் அதே RCA.',
          voice: "இதோ ஒரு நல்ல அம்சம். Add ஆர் சி ஏ பெட்டியை டிக் செய்யுங்கள், தளம் இந்த இன்சைட்டுக்கு ஒரு மூல-காரண பகுப்பாய்வை உருவாக்குகிறது — சாத்தியமான காரணங்களின் தொகுப்பு, உங்களுக்காக எழுதப்பட்டது. எஸ் பி ஆர் சுழற்சி சுத்தம் இன்சைட்டுக்கு, போதிய தங்கல் காலம் இல்லாமை அல்லது தவறான கலவை நேரம் போன்றவற்றை இது பரிந்துரைக்கிறது. இது வாடிக்கையாளர் பக்கத்தில் இன்சைட்டின் விவரத்தில் தோன்றும் அதே ஆர் சி ஏ, எனவே இதை டெம்ப்ளேட்டில் சேர்ப்பதால் ஒவ்வொரு இன்சைட்டையும் வளப்படுத்துகிறீர்கள். சேமி, டெம்ப்ளேட் தயார்.",
        },
        {
          label: 'நிபந்தனைகள்', title: 'திறக்கும் & மூடும் நிபந்தனைகள்',
          body: 'நிகழ்வுகள் போல, இன்சைட்கள் ஒரு <strong>நிபந்தனை தூண்டியில்</strong> சவாரி செய்கின்றன. தூண்டியில் ஒரு <strong>Observation Condition</strong> (திறப்பு — <em>25open:AMB</em>), ஒரு <strong>Resolution Condition</strong> (மூடல் — <em>25close:AMB</em>) உள்ளன. தூண்டியைத் திறந்து <strong>Trigger Actions</strong> மூலம் கூறு சேர்.',
          voice: "இப்போது நிபந்தனைகளுடன் இணைக்கிறோம். ஒரு நிபந்தனை தூண்டியைத் திறங்கள் — நிகழ்வுகளுக்குப் பின்னுள்ள அதே தூண்டி இயந்திரம். ஒவ்வொரு தூண்டிக்கும் இரு சூத்திரங்கள்: அப்சர்வேஷன் நிபந்தனை, இது இன்சைட்டைத் தூண்டும் திறக்கும் நிபந்தனை, ரெசல்யூஷன் நிபந்தனை, இது அதைத் தீர்க்கும் மூடும் நிபந்தனை. இரண்டும் சென்சார் மதிப்புகளில் வரையறுக்கப்படுகின்றன, நிகழ்வின் திறப்பு மூடல் போலவே. கீழே Trigger Actions-இல் கூறுகளை இணைக்கலாம் — பணி, தொடர்பு, நிகழ்வு — இங்கே நமக்கு வேண்டியது Insights.",
        },
        {
          label: 'கூறு', title: 'ஒரு Insight கூறைச் சேர்',
          body: 'Trigger Actions-இல் <strong>Insights</strong> தேர்ந்தால் <strong>Create Insight</strong> திறக்கிறது. நீங்கள் உருவாக்கிய <strong>இன்சைட் டெம்ப்ளேட்டைத்</strong> தேர்ந்து, பின் <strong>பயனர் குழு, சொத்து, வகைப்பாடு, வகை, உபகரணம், முன்னுரிமை</strong> அமை — பெரும்பாலும் டெம்ப்ளேட்டிலிருந்து முன்நிரப்பப்பட்டது.',
          voice: "Insights தேர்வது Create Insight உரையாடலைத் திறக்கிறது. முதல் புலம் Select Insight Template — நீங்கள் உருவாக்கியதைத் தேர்ந்தால், வகைப்பாடு, வகை, விளக்கம், ஆர் சி ஏ கூட முன்நிரப்பப்படுகிறது. பின் பயனர் குழு, சொத்து, இது பொருந்தும் உபகரணம், ஒரு முன்னுரிமை — குறைந்த, நடுத்தர, உயர் — உறுதிசெய்கிறீர்கள். நிகழ்வு கூறு போன்ற அதே வடிவம்: டெம்ப்ளேட் கடின வேலையைச் செய்கிறது, நீங்கள் சரியான இடத்தைச் சுட்டுகிறீர்கள்.",
        },
        {
          label: 'நேர-உணர்வு', title: 'Time Sensitive → WhatsApp + பயனர்',
          body: '<strong>Time Sensitive</strong> டிக் செய், திறக்கும் நிபந்தனை உண்மையானதும் இன்சைட் ஒரு <strong>WhatsApp-ஐ உடனே தூண்டுகிறது</strong>. இதை டிக் செய்தால் <strong>Select User</strong> புலம் செயல்படுகிறது — அந்தச் செய்தி யாருக்கு என்று தேர்.',
          voice: "இதோ முக்கிய விருப்பம். Time Sensitive-ஐ டிக் செய்யுங்கள், இந்த இன்சைட் அவசரமாகிறது: அதன் திறக்கும் நிபந்தனை உண்மையாகும் கணமே, தளம் உடனடியாக ஒரு WhatsApp செய்தியை அனுப்புகிறது — யாரோ டாஷ்போர்டைப் பார்க்கக் காத்திருக்காமல். அந்தப் பெட்டியை டிக் செய்த கணமே, அதன் அருகில் உள்ள Select User புலம் செயல்படுகிறது. அங்கேதான் WhatsApp யாருக்கு வரும் என்று தேர்கிறீர்கள். எனவே ஒரு முக்கியமான இன்சைட்டுக்கு, அது திறந்த நொடியில் சரியான நபர் அவர்களின் தொலைபேசியில் அறிவிக்கப்படுவதை உறுதிசெய்யலாம்.",
        },
        {
          label: 'சேமி', title: 'சமர்ப்பி — அல்லது ரத்து',
          body: 'இன்சைட் கூறைத் தூண்டியுடன் இணைக்க சமர்ப்பி. இந்த நடைப்பயிற்சியில் இறுதியில் <strong>ரத்து</strong> செய்தோம் — வேண்டாத டெம்ப்ளேட்களையோ கூறுகளையோ உருவாக்கத் தேவையில்லை. பாய்வே முக்கியம்: <em>டெம்ப்ளேட் → தூண்டி → இன்சைட் கூறு → (விருப்ப) நேர-உணர்வு WhatsApp</em>.',
          voice: "இறுதியாக, இன்சைட் கூறைத் தூண்டியுடன் இணைத்து நேரலையாக்க Submit அழுத்துவீர்கள். ஆனால் இந்த நடைப்பயிற்சியில், வேண்டுமென்றே இறுதியில் ரத்து செய்தோம் — உண்மையில் தேவையில்லாத ஒரு டெம்ப்ளேட்டையோ கூறையோ உருவாக்க காரணம் இல்லை, சோதனைப் பொருட்களால் சிஸ்டத்தை நிரப்புவதைத் தவிர்க்க வேண்டும். எனவே பாய்வையே முக்கியமாக எடுங்கள்: ஒரு மறுபயன்படுத்தக்கூடிய டெம்ப்ளேட், ஒரு தூண்டியின் திறக்கும் மூடும் நிபந்தனைகளுடன் இன்சைட் கூறாக இணைந்து, விருப்பப்படி நேர-உணர்வாக்கப்பட்டு தேர்ந்த பயனருக்கு WhatsApp அனுப்புகிறது. இதுவே முழு இன்சைட் அமைவு, நிகழ்வுகள் போன்ற அதே வடிவம்.",
          tip: { type: 'rememberLabel', text: 'டெம்ப்ளேட் (+ விருப்ப AI RCA) → நிபந்தனை தூண்டி (திற/மூடு) → Insight கூறு → விருப்ப Time Sensitive = தேர்ந்த பயனருக்கு WhatsApp.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br>एक <em>इनसाइट</em> सेट करणे.',
      subtitle: 'बिल्डरचा दृष्टिकोन — पुन्हा वापरता येणारे टेम्पलेट, उघडण्याच्या व बंद होण्याच्या अटी, आणि एक पर्यायी टाइम-सेन्सिटिव्ह WhatsApp.',
      chapter: 'बिल्ड ट्रॅक · इनसाइट्स',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक इनसाइट टेम्पलेट तयार करा',
          body: 'इव्हेंटप्रमाणे, इनसाइटही <strong>टेम्पलेटाइज्ड</strong> आहेत. <strong>Insight Templates</strong> उघडा आणि <strong>Create Insight Template</strong> दाबा — टेम्पलेट एकदा परिभाषित होऊन प्लांटभर पुन्हा वापरले जाते.',
          voice: "इनसाइट जवळपास अगदी इव्हेंटप्रमाणे कॉन्फिगर होतात, म्हणून बरेच काही परिचित वाटेल. ते टेम्पलेटाइज्ड आहेत: तुम्ही इनसाइट एकदा टेम्पलेट म्हणून परिभाषित करता, मग प्लांटभर पुन्हा वापरता. म्हणून आपण Insight Templates मध्ये सुरुवात करतो आणि Create Insight Template वर क्लिक करतो. इथली यादी प्रत्येक टेम्पलेट दाखवते — प्रत्येक त्याच्या इनसाइट प्रकार, उपकरण प्रकार, आणि मीडिया किंवा आर सी ए सह. चला एक नवीन बनवू.",
        },
        {
          label: 'फॉर्म', title: 'नाव, प्रकार व वर्गीकरण',
          body: 'टेम्पलेटला <strong>नाव</strong> व <strong>वर्णन</strong> द्या, एक <strong>Equipment Type</strong> (इथे <em>Valve</em>), एक <strong>Insight Classification</strong> (<em>Alarm</em>), आणि <strong>Type of Insight</strong> निवडा — <span style=\"color:#a3791a\">Warning</span>, <span style=\"color:#a3791a\">Issue</span> किंवा <span style=\"color:#c74e3f\">Incident</span>. <strong>Upload Media</strong>ही करता येते.',
          voice: "टेम्पलेट फॉर्म इव्हेंटच्या फॉर्मसारखाच आहे. त्याला एक स्पष्ट नाव आणि वर्णन द्या. उपकरण प्रकार निवडा — इथे, Valve — जो इव्हेंटप्रमाणेच प्लॅटफॉर्मला नंतर योग्य उपकरण आणू देतो. मग इनसाइट वर्गीकरण सेट करा, इथे Alarm, आणि इनसाइट प्रकार: Warning, Issue, किंवा Incident — तेच तीन प्रकार जे तुमचे क्लायंट इनसाइट्स पेजवर पाहतात. तुम्ही संदर्भ मीडिया अपलोड करू शकता आणि रिच टेक्स्ट एडिटरमध्ये इनसाइट तपशील लिहू शकता, म्हणजे हे मिळणाऱ्याला पूर्ण संदर्भ मिळेल.",
        },
        {
          label: 'आरसीए', title: 'एक AI-निर्मित RCA जोडा',
          body: '<strong>Add RCA</strong> टिक करा आणि प्लॅटफॉर्म इनसाइटसाठी एक <strong>रूट-कॉज अॅनालिसिस</strong> तयार करतो — संभाव्य कारणे, तयार. हे तेच RCA आहे जे क्लायंट इनसाइट तपशिलात पाहतात.',
          voice: "हे एक छान वैशिष्ट्य. Add आर सी ए बॉक्स टिक करा, आणि प्लॅटफॉर्म या इनसाइटसाठी एक रूट-कॉज अॅनालिसिस तयार करतो — संभाव्य कारणांचा संच, तुमच्यासाठी लिहिलेला. एस बी आर सायकल क्लीनिंग इनसाइटसाठी, तो अपुरा सेटलिंग काळ किंवा चुकीची मिक्स टाइमिंग यांसारख्या गोष्टी सुचवतो. हे अगदी तेच आर सी ए आहे जे क्लायंट बाजूला इनसाइटच्या तपशिलात दिसते, म्हणून ते टेम्पलेटमध्ये जोडून तुम्ही प्रत्येक इनसाइट समृद्ध करता. सेव्ह करा, टेम्पलेट तयार.",
        },
        {
          label: 'अटी', title: 'उघडण्याच्या व बंद होण्याच्या अटी',
          body: 'इव्हेंटप्रमाणे, इनसाइट एका <strong>कंडिशनल ट्रिगर</strong>वर चालतात. ट्रिगरमध्ये एक <strong>Observation Condition</strong> (उघडणे — <em>25open:AMB</em>) आणि एक <strong>Resolution Condition</strong> (बंद होणे — <em>25close:AMB</em>) असते. ट्रिगर उघडा आणि <strong>Trigger Actions</strong>ने कंपोनेंट जोडा.',
          voice: "आता ते अटींशी जोडतो. एक कंडिशनल ट्रिगर उघडा — इव्हेंटमागचेच ट्रिगर इंजिन. प्रत्येक ट्रिगरमध्ये दोन सूत्रे असतात: ऑब्झर्वेशन कंडिशन, जी इनसाइट फायर करणारी उघडण्याची अट आहे, आणि रिझोल्यूशन कंडिशन, जी ती सोडवणारी बंद होण्याची अट आहे. दोन्ही सेन्सर मूल्यांवर परिभाषित आहेत, अगदी इव्हेंटच्या उघडण्या-बंद होण्यासारख्या. खाली Trigger Actions मध्ये तुम्ही कंपोनेंट जोडू शकता — टास्क, कम्युनिकेशन, इव्हेंट — आणि इथे आपल्याला Insights हवे.",
        },
        {
          label: 'कंपोनेंट', title: 'एक Insight कंपोनेंट जोडा',
          body: 'Trigger Actions मधून <strong>Insights</strong> निवडा म्हणजे <strong>Create Insight</strong> उघडेल. तुम्ही बनवलेले <strong>इनसाइट टेम्पलेट</strong> निवडा, मग <strong>यूझर ग्रुप, अॅसेट, वर्गीकरण, प्रकार, उपकरण</strong> आणि <strong>प्राधान्य</strong> सेट करा — बहुतेक टेम्पलेटमधून आधीच भरलेले.',
          voice: "Insights निवडल्याने Create Insight डायलॉग उघडतो. पहिले फील्ड Select Insight Template — तुम्ही बनवलेले निवडा, आणि ते वर्गीकरण, प्रकार, वर्णन, अगदी आर सी ए ही आधीच भरते. मग तुम्ही यूझर ग्रुप, अॅसेट, हे ज्या उपकरणाला लागू आहे ते, आणि एक प्राधान्य — कमी, मध्यम किंवा उच्च — याची पुष्टी करता. हा इव्हेंट कंपोनेंटसारखाच पॅटर्न आहे: टेम्पलेट जड काम करते, तुम्ही फक्त ते योग्य ठिकाणी दाखवता.",
        },
        {
          label: 'टाइम-सेन्सिटिव्ह', title: 'Time Sensitive → WhatsApp + यूझर',
          body: '<strong>Time Sensitive</strong> टिक करा आणि उघडण्याची अट खरी होताच इनसाइट एक <strong>WhatsApp फायर</strong> करते. ती टिक केल्याने <strong>Select User</strong> फील्ड सक्रिय होते — तो संदेश कोणाला मिळावा ते निवडा.',
          voice: "हा महत्त्वाचा पर्याय. Time Sensitive टिक करा, आणि ही इनसाइट तातडीची बनते: तिची उघडण्याची अट खरी होण्याच्या क्षणी, प्लॅटफॉर्म लगेच एक WhatsApp संदेश पाठवतो — कोणी डॅशबोर्ड तपासण्याची वाट न पाहता. आणि तो बॉक्स टिक करण्याच्या क्षणी, त्याशेजारचे Select User फील्ड सक्रिय होते. तिथेच तुम्ही WhatsApp कोणाला मिळावा ते निवडता. म्हणून एखाद्या क्रिटिकल इनसाइटसाठी, ती उघडताच योग्य व्यक्तीला त्यांच्या फोनवर पिंग मिळेल याची खात्री करू शकता.",
        },
        {
          label: 'सेव्ह', title: 'सबमिट — किंवा कॅन्सल',
          body: 'इनसाइट कंपोनेंट ट्रिगरला जोडण्यासाठी सबमिट करा. या वॉकथ्रूमध्ये आम्ही शेवटी <strong>कॅन्सल</strong> केले — नको असलेले टेम्पलेट किंवा कंपोनेंट तयार करायची गरज नाही. प्रवाह हाच महत्त्वाचा: <em>टेम्पलेट → ट्रिगर → इनसाइट कंपोनेंट → (पर्यायी) टाइम-सेन्सिटिव्ह WhatsApp</em>.',
          voice: "शेवटी, इनसाइट कंपोनेंट ट्रिगरला जोडून लाइव्ह करण्यासाठी तुम्ही Submit दाबाल. पण या वॉकथ्रूमध्ये, आम्ही मुद्दाम शेवटी कॅन्सल केले — खरोखर नको असलेले टेम्पलेट किंवा कंपोनेंट तयार करायचे कारण नव्हते, आणि सिस्टम टेस्ट गोष्टींनी भरणे टाळावे. म्हणून प्रवाहालाच मुख्य गोष्ट माना: एक पुन्हा वापरता येणारे टेम्पलेट, एका ट्रिगरच्या उघडण्याच्या आणि बंद होण्याच्या अटींना इनसाइट कंपोनेंट म्हणून जोडलेले, पर्यायाने टाइम-सेन्सिटिव्ह बनवून निवडलेल्या यूझरला WhatsApp फायर करते. हीच संपूर्ण इनसाइट कॉन्फिगरेशन, आणि ती इव्हेंटसारख्याच आकाराची आहे.",
          tip: { type: 'rememberLabel', text: 'टेम्पलेट (+ पर्यायी AI RCA) → कंडिशनल ट्रिगर (उघड/बंद) → Insight कंपोनेंट → पर्यायी Time Sensitive = निवडलेल्या यूझरला WhatsApp.' },
        },
      ],
    },
  },
};

export default lesson;
