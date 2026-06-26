import type { Lesson } from '../../types';

/**
 * Module 10 · Triggers.   Tag: M10.L1  (internal only)
 * The automation engine behind Events, Insights and Tasks. Three types — One
 * Time, Recurring, Conditional. Conditional triggers open on an observation
 * condition (held for an observation frequency) and close on a resolution
 * condition (with a resolution frequency) or after a time.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-10-triggers`;

const lesson: Lesson = {
  id: 'lesson-01-triggers',
  moduleId: 'module-10-triggers',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    conditional: `${BASE}/conditional.jpg`,
    onetime: `${BASE}/onetime.jpg`,
    recurring: `${BASE}/recurring.jpg`,
    formula: `${BASE}/formula.jpg`,
    saved: `${BASE}/saved.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'conditional', caption: 'Three types of trigger', spotlight: { top: '9%', left: '1%', width: '33%', height: '11%' } },
    { mode: 'detail', screenshot: 'onetime', caption: 'One Time', spotlight: { top: '26%', left: '1%', width: '98%', height: '12%' } },
    { mode: 'detail', screenshot: 'recurring', caption: 'Recurring', spotlight: { top: '28%', left: '40%', width: '20%', height: '12%' } },
    { mode: 'detail', screenshot: 'conditional', caption: 'Conditional: the opening logic', spotlight: { top: '40%', left: '1%', width: '49%', height: '20%' } },
    { mode: 'detail', screenshot: 'formula', caption: 'Build the condition formula', spotlight: { top: '46%', left: '19%', width: '62%', height: '12%' } },
    { mode: 'detail', screenshot: 'conditional', caption: 'Resolution: condition or time', spotlight: { top: '40%', left: '50%', width: '49%', height: '20%' } },
    { mode: 'detail', screenshot: 'saved', caption: 'Components attach here', spotlight: { top: '40%', left: '1%', width: '98%', height: '20%' } },
  ],
  content: {
    en: {
      title: 'The <em>Triggers</em><br>Engine.',
      subtitle: 'The automation under it all — what fires Events, Insights, Tasks and Communications, and when.',
      chapter: 'Build Track · The Engine Room',
      steps: [
        {
          label: 'Types', title: 'Three types of trigger',
          body: 'A <strong>trigger</strong> is what makes something happen automatically. There are three <strong>types</strong>: <strong>One Time</strong> (fires once, at a set moment), <strong>Recurring</strong> (fires on a schedule), and <strong>Conditional</strong> (fires when sensor logic becomes true). Every trigger has a name, scope, workspace and asset.',
          voice: "Throughout the configuration lessons we kept saying \"this rides on a trigger.\" This is that trigger — the engine room of the platform. A trigger is simply the thing that makes something happen automatically. When you create one, the first choice is its type, and there are three. One Time fires exactly once, at a moment you set. Recurring fires over and over on a schedule. And Conditional fires whenever a piece of sensor logic becomes true. Every trigger also carries a name, a scope, and the workspace and asset it belongs to. The type you pick changes the rest of the form, so let's walk all three.",
        },
        {
          label: 'One Time', title: 'One Time — a single moment',
          body: 'A <strong>One Time</strong> trigger is the simplest: you just set a <strong>Start Date and Time</strong>. When that moment arrives, it fires once and it\'s done. Good for a planned, one-off action.',
          voice: "The simplest is One Time. Choose the type, and the form collapses down to a single field: a start date and time. You pick the moment, and when it arrives the trigger fires once — then it's finished. This is for a planned, one-off action: a single reminder, a one-time task on a specific date. No conditions, no repetition, just a moment on the calendar.",
        },
        {
          label: 'Recurring', title: 'Recurring — on a schedule',
          body: 'A <strong>Recurring</strong> trigger fires on a repeating <strong>schedule</strong>: a start, an <strong>interval</strong> (every <em>N</em> days/weeks), the <strong>days</strong> it runs, and an end date. Perfect for routine, clock-driven work.',
          voice: "Next is Recurring. Here you define a schedule: a start date, an interval — every so many days or weeks — the specific days of the week it should run, and an end date or a total number of occurrences. So a recurring trigger is your clock-driven automation: a daily check, a weekly cleaning reminder, anything that should happen on a regular cadence regardless of plant conditions. It just keeps firing on schedule until it ends.",
        },
        {
          label: 'Conditional', title: 'Conditional — the opening logic',
          body: 'A <strong>Conditional</strong> trigger fires on sensor logic. It needs an <strong>Observation Condition</strong> (the opening logic) and an <strong>Observation Frequency</strong> in <strong>minutes</strong> — the condition must stay true for that long before the trigger opens, filtering out brief blips.',
          voice: "The most powerful type is Conditional — this is what's behind insights and events. A conditional trigger watches sensor values and fires when a condition becomes true. It has two parts on the left, under Observation. First, the observation condition — that's the opening logic, the rule that decides when to fire. And crucially, an observation frequency, set in minutes. The condition has to stay true for that whole window before the trigger actually opens. So if you set five minutes, a one-second spike won't fire it — the value has to genuinely hold. That frequency is what filters out noise and false alarms.",
        },
        {
          label: 'Formula', title: 'Build the condition formula',
          body: 'The condition itself is built in <strong>Create Conditional Formula</strong> — a visual builder. Pick sensors and operators to express logic like <em>IF ( level &gt; 90 ) then 1 else 0</em>. Give it a name and tag; it becomes the <strong>Observation Condition Formula</strong>.',
          voice: "The condition itself is built in a dedicated formula editor. You give it a name and a tag, then assemble the logic visually — choosing a sensor, an operator, a value. Here we're building something like: if the level transmitter reading is greater than ninety, return one, otherwise zero. In other words, the trigger opens when that tank level crosses ninety. You can compose quite rich logic this way, combining sensors and thresholds. Save it, and it drops into the trigger as the observation condition formula. The exact same builder is used for the closing logic too.",
        },
        {
          label: 'Resolution', title: 'Resolution — close on condition or time',
          body: 'Once open, a trigger needs to <strong>close</strong>. Under <strong>Resolution</strong>, choose the <strong>Resolution Type</strong>: by <strong>Condition</strong> — a <strong>Resolution Condition Formula</strong> plus a <strong>Resolution Frequency</strong> — or by <strong>time</strong>. Closing only applies after the trigger has opened.',
          voice: "A trigger that opens also needs to close, and that's the Resolution section on the right. You choose the resolution type. One option is by condition: you give a resolution condition formula — the closing logic — built in that same editor, with its own resolution frequency it must hold for, just like the opening side. The other option is by time: the trigger simply closes after a set duration. The key thing to remember is that resolution only ever applies once the trigger has already opened on its observation condition — closing logic is meaningless until something's been opened. So a conditional trigger has a clean lifecycle: open when the observation condition holds, close when the resolution condition holds or time runs out.",
        },
        {
          label: 'Components', title: 'Components attach to the trigger',
          body: 'Finally, a trigger carries <strong>components</strong> — the actions it fires. For conditional triggers, <strong>Insights</strong> and <strong>Events</strong> become available alongside <strong>Tasks</strong>, <strong>Communications</strong> and notifications. This is the link back to every config lesson: that\'s where those components live.',
          voice: "And this closes the loop on everything we've configured. A trigger doesn't just open and close — it carries components, the actual actions it fires. For conditional triggers specifically, Insights and Events become available as component types, joining Tasks, Communications, and custom notifications. This is exactly the spot you reached in the events, insights, and tasks configuration lessons — when you added a component to a trigger, this is the trigger you were on. So now the whole picture connects: a trigger watches the plant through its observation condition, opens when the logic holds, fires its attached components — an insight, an event, a task — and closes on its resolution. Triggers are the engine; everything else is what they set in motion.",
          tip: { type: 'rememberLabel', text: 'Types: One Time / Recurring / Conditional. Conditional = Observation (open + frequency in mins) → Resolution (close by condition+frequency or by time). Components (Insights/Events/Tasks/Comms) attach to the trigger.' },
        },
      ],
    },
    hi: {
      title: '<em>ट्रिगर</em><br>इंजन।',
      subtitle: 'सबके नीचे का ऑटोमेशन — क्या इवेंट, इनसाइट, टास्क और कम्युनिकेशन फ़ायर करता है, और कब।',
      chapter: 'बिल्ड ट्रैक · इंजन रूम',
      steps: [
        {
          label: 'प्रकार', title: 'ट्रिगर के तीन प्रकार',
          body: 'एक <strong>ट्रिगर</strong> वह है जो किसी चीज़ को अपने-आप घटित कराता है। तीन <strong>प्रकार</strong> हैं: <strong>One Time</strong> (एक तय पल पर एक बार), <strong>Recurring</strong> (शेड्यूल पर), और <strong>Conditional</strong> (जब सेंसर लॉजिक सच हो)। हर ट्रिगर का नाम, स्कोप, वर्कस्पेस व एसेट होता है।',
          voice: "कॉन्फ़िगरेशन लेसनों भर में हम कहते रहे \"यह एक ट्रिगर पर चलता है।\" यही वह ट्रिगर है — प्लेटफ़ॉर्म का इंजन रूम। ट्रिगर बस वह चीज़ है जो किसी चीज़ को अपने-आप घटित कराती है। जब आप एक बनाते हैं, पहला चुनाव इसका प्रकार है, और तीन हैं। One Time ठीक एक बार फ़ायर होता है, एक तय पल पर। Recurring बार-बार एक शेड्यूल पर फ़ायर होता है। और Conditional तब फ़ायर होता है जब कोई सेंसर लॉजिक सच हो जाए। हर ट्रिगर का एक नाम, स्कोप, और वर्कस्पेस व एसेट भी होता है। आप जो प्रकार चुनते हैं वह बाक़ी फ़ॉर्म बदल देता है, तो चलिए तीनों देखते हैं।",
        },
        {
          label: 'वन टाइम', title: 'One Time — एक अकेला पल',
          body: '<strong>One Time</strong> ट्रिगर सबसे सरल है: आप बस एक <strong>Start Date and Time</strong> सेट करते हैं। वह पल आने पर, यह एक बार फ़ायर होकर ख़त्म। किसी नियोजित, एक-बार की कार्रवाई के लिए अच्छा।',
          voice: "सबसे सरल One Time है। प्रकार चुनें, और फ़ॉर्म एक अकेले फ़ील्ड तक सिमट जाता है: एक स्टार्ट डेट और टाइम। आप पल चुनते हैं, और वह आने पर ट्रिगर एक बार फ़ायर होता है — फिर ख़त्म। यह एक नियोजित, एक-बार की कार्रवाई के लिए है: एक अकेला रिमाइंडर, किसी ख़ास तारीख़ पर एक-बार का टास्क। कोई शर्त नहीं, कोई दोहराव नहीं, बस कैलेंडर पर एक पल।",
        },
        {
          label: 'रिकरिंग', title: 'Recurring — एक शेड्यूल पर',
          body: '<strong>Recurring</strong> ट्रिगर एक दोहराते <strong>शेड्यूल</strong> पर फ़ायर होता है: एक शुरुआत, एक <strong>अंतराल</strong> (हर <em>N</em> दिन/सप्ताह), जिन <strong>दिनों</strong> चले, और एक अंत तारीख़। नियमित, घड़ी-आधारित काम के लिए उपयुक्त।',
          voice: "अगला Recurring है। यहाँ आप एक शेड्यूल परिभाषित करते हैं: एक स्टार्ट डेट, एक अंतराल — हर इतने दिन या सप्ताह — सप्ताह के विशिष्ट दिन जिन पर चले, और एक अंत तारीख़ या कुल घटनाओं की संख्या। तो एक रिकरिंग ट्रिगर आपका घड़ी-आधारित ऑटोमेशन है: एक दैनिक जाँच, एक साप्ताहिक क्लीनिंग रिमाइंडर, कुछ भी जो प्लांट स्थितियों की परवाह किए बिना नियमित अंतराल पर होना चाहिए। यह बस शेड्यूल पर फ़ायर होता रहता है जब तक ख़त्म न हो।",
        },
        {
          label: 'कंडिशनल', title: 'Conditional — खुलने का लॉजिक',
          body: '<strong>Conditional</strong> ट्रिगर सेंसर लॉजिक पर फ़ायर होता है। इसे एक <strong>Observation Condition</strong> (खुलने का लॉजिक) और मिनटों में एक <strong>Observation Frequency</strong> चाहिए — ट्रिगर खुलने से पहले शर्त उतनी देर सच रहनी चाहिए, जिससे क्षणिक झटके छनकर निकल जाएँ।',
          voice: "सबसे शक्तिशाली प्रकार Conditional है — यही इनसाइट और इवेंट के पीछे है। एक कंडिशनल ट्रिगर सेंसर मानों को देखता है और तब फ़ायर होता है जब कोई शर्त सच हो। बाईं ओर, Observation के तहत इसके दो हिस्से हैं। पहला, ऑब्ज़र्वेशन कंडीशन — वह खुलने का लॉजिक, वह नियम जो तय करता है कब फ़ायर हो। और महत्वपूर्ण रूप से, एक ऑब्ज़र्वेशन फ़्रीक्वेंसी, मिनटों में सेट। ट्रिगर के सचमुच खुलने से पहले शर्त को उस पूरी अवधि तक सच रहना होगा। तो अगर आप पाँच मिनट सेट करें, एक-सेकंड का उछाल इसे फ़ायर नहीं करेगा — मान को सचमुच बना रहना होगा। वही फ़्रीक्वेंसी शोर और झूठे अलार्म को छानती है।",
        },
        {
          label: 'फ़ॉर्मूला', title: 'कंडीशन फ़ॉर्मूला बनाएँ',
          body: 'शर्त ख़ुद <strong>Create Conditional Formula</strong> में बनती है — एक विज़ुअल बिल्डर। सेंसर और ऑपरेटर चुनकर लॉजिक व्यक्त करें जैसे <em>IF ( level &gt; 90 ) तो 1 वरना 0</em>। इसे नाम व टैग दें; यह <strong>Observation Condition Formula</strong> बन जाता है।',
          voice: "शर्त ख़ुद एक समर्पित फ़ॉर्मूला एडिटर में बनती है। आप इसे एक नाम और टैग देते हैं, फिर लॉजिक को विज़ुअली जोड़ते हैं — एक सेंसर, एक ऑपरेटर, एक मान चुनकर। यहाँ हम कुछ ऐसा बना रहे हैं: अगर लेवल ट्रांसमीटर रीडिंग नब्बे से ज़्यादा हो, तो एक लौटाएँ, वरना शून्य। दूसरे शब्दों में, ट्रिगर तब खुलता है जब वह टैंक लेवल नब्बे पार करे। आप इस तरह काफ़ी समृद्ध लॉजिक रच सकते हैं, सेंसर और थ्रेशोल्ड मिलाकर। इसे सेव करें, और यह ट्रिगर में ऑब्ज़र्वेशन कंडीशन फ़ॉर्मूला के रूप में आ जाता है। बिल्कुल यही बिल्डर बंद होने के लॉजिक के लिए भी उपयोग होता है।",
        },
        {
          label: 'रिज़ॉल्यूशन', title: 'Resolution — शर्त या समय पर बंद',
          body: 'एक बार खुलने पर, ट्रिगर को <strong>बंद</strong> होना है। <strong>Resolution</strong> के तहत, <strong>Resolution Type</strong> चुनें: <strong>Condition</strong> से — एक <strong>Resolution Condition Formula</strong> और एक <strong>Resolution Frequency</strong> — या <strong>समय</strong> से। बंद होना तभी लागू होता है जब ट्रिगर खुल चुका हो।',
          voice: "जो ट्रिगर खुलता है उसे बंद भी होना है, और वह दाईं ओर Resolution सेक्शन है। आप रिज़ॉल्यूशन प्रकार चुनते हैं। एक विकल्प शर्त से है: आप एक रिज़ॉल्यूशन कंडीशन फ़ॉर्मूला देते हैं — बंद होने का लॉजिक — उसी एडिटर में बना, अपनी रिज़ॉल्यूशन फ़्रीक्वेंसी के साथ जितनी देर इसे बने रहना है, ठीक खुलने वाली ओर की तरह। दूसरा विकल्प समय से है: ट्रिगर बस एक तय अवधि बाद बंद हो जाता है। याद रखने की मुख्य बात यह है कि रिज़ॉल्यूशन तभी लागू होता है जब ट्रिगर पहले से अपनी ऑब्ज़र्वेशन कंडीशन पर खुल चुका हो — बंद होने का लॉजिक तब तक अर्थहीन है जब तक कुछ खुला न हो। तो एक कंडिशनल ट्रिगर का एक साफ़ जीवनचक्र है: ऑब्ज़र्वेशन कंडीशन बने रहने पर खुलना, रिज़ॉल्यूशन कंडीशन बनने या समय ख़त्म होने पर बंद होना।",
        },
        {
          label: 'कंपोनेंट', title: 'कंपोनेंट ट्रिगर से जुड़ते हैं',
          body: 'अंत में, एक ट्रिगर <strong>कंपोनेंट</strong> रखता है — वे कार्रवाइयाँ जो यह फ़ायर करता है। कंडिशनल ट्रिगर के लिए, <strong>Insights</strong> और <strong>Events</strong> <strong>Tasks</strong>, <strong>Communications</strong> और सूचनाओं के साथ उपलब्ध हो जाते हैं। यही हर कॉन्फ़िग लेसन से वापस का लिंक है।',
          voice: "और यह हमारे कॉन्फ़िगर किए सब को जोड़ता है। एक ट्रिगर सिर्फ़ खुलता-बंद नहीं होता — यह कंपोनेंट रखता है, वे असली कार्रवाइयाँ जो यह फ़ायर करता है। ख़ासकर कंडिशनल ट्रिगर के लिए, Insights और Events कंपोनेंट प्रकार के रूप में उपलब्ध हो जाते हैं, Tasks, Communications, और कस्टम नोटिफ़िकेशन के साथ। यही ठीक वह जगह है जहाँ आप इवेंट, इनसाइट, और टास्क कॉन्फ़िगरेशन लेसनों में पहुँचे — जब आपने एक ट्रिगर में कंपोनेंट जोड़ा, यही वह ट्रिगर था जिस पर आप थे। तो अब पूरी तस्वीर जुड़ती है: एक ट्रिगर अपनी ऑब्ज़र्वेशन कंडीशन से प्लांट देखता है, लॉजिक बने रहने पर खुलता है, अपने जुड़े कंपोनेंट फ़ायर करता है — एक इनसाइट, एक इवेंट, एक टास्क — और अपने रिज़ॉल्यूशन पर बंद होता है। ट्रिगर इंजन हैं; बाक़ी सब वह है जो वे गति में लाते हैं।",
          tip: { type: 'rememberLabel', text: 'प्रकार: One Time / Recurring / Conditional। Conditional = Observation (खुलना + फ़्रीक्वेंसी मिनटों में) → Resolution (शर्त+फ़्रीक्वेंसी या समय से बंद)। कंपोनेंट (Insights/Events/Tasks/Comms) ट्रिगर से जुड़ते हैं।' },
        },
      ],
    },
    ta: {
      title: '<em>ட்ரிகர்</em><br>இயந்திரம்.',
      subtitle: 'அனைத்தின் அடியில் உள்ள தானியக்கம் — நிகழ்வுகள், இன்சைட்கள், பணிகள், தொடர்புகளை எது தூண்டுகிறது, எப்போது.',
      chapter: 'கட்டுமான தடம் · இயந்திர அறை',
      steps: [
        {
          label: 'வகைகள்', title: 'ட்ரிகரின் மூன்று வகைகள்',
          body: 'ஒரு <strong>ட்ரிகர்</strong> என்பது ஏதோ ஒன்றைத் தானாக நடக்கச் செய்வது. மூன்று <strong>வகைகள்</strong>: <strong>One Time</strong> (ஒரு நேரத்தில் ஒருமுறை), <strong>Recurring</strong> (அட்டவணையில்), <strong>Conditional</strong> (சென்சார் தர்க்கம் உண்மையானால்). ஒவ்வொரு ட்ரிகருக்கும் பெயர், நோக்கம், பணியிடம், சொத்து உண்டு.',
          voice: "அமைப்பு பாடங்கள் முழுவதும் \"இது ஒரு ட்ரிகரில் சவாரி செய்கிறது\" என்று சொல்லிக்கொண்டே இருந்தோம். இதுதான் அந்த ட்ரிகர் — தளத்தின் இயந்திர அறை. ட்ரிகர் என்பது ஏதோ ஒன்றைத் தானாக நடக்கச் செய்வது. ஒன்றை உருவாக்கும்போது, முதல் தேர்வு அதன் வகை, மூன்று உள்ளன. One Time சரியாக ஒருமுறை, நீங்கள் அமைத்த ஒரு நேரத்தில் தூண்டுகிறது. Recurring ஒரு அட்டவணையில் மீண்டும் மீண்டும் தூண்டுகிறது. Conditional, ஒரு சென்சார் தர்க்கம் உண்மையாகும்போது தூண்டுகிறது. ஒவ்வொரு ட்ரிகருக்கும் ஒரு பெயர், நோக்கம், அது சேர்ந்த பணியிடம், சொத்தும் உண்டு. நீங்கள் தேர்ந்த வகை மற்ற படிவத்தை மாற்றுகிறது, எனவே மூன்றையும் பார்ப்போம்.",
        },
        {
          label: 'வன் டைம்', title: 'One Time — ஒரு தனி நேரம்',
          body: '<strong>One Time</strong> ட்ரிகர் எளிமையானது: ஒரு <strong>Start Date and Time</strong> மட்டும் அமைக்கிறீர்கள். அந்த நேரம் வரும்போது, ஒருமுறை தூண்டி முடிகிறது. திட்டமிட்ட ஒரு-முறை செயலுக்கு நல்லது.',
          voice: "எளிமையானது One Time. வகையைத் தேர்ந்தால், படிவம் ஒரே புலமாகச் சுருங்குகிறது: ஒரு தொடக்க தேதி, நேரம். நீங்கள் நேரத்தைத் தேர்கிறீர்கள், அது வரும்போது ட்ரிகர் ஒருமுறை தூண்டுகிறது — பின் முடிந்தது. இது ஒரு திட்டமிட்ட, ஒரு-முறை செயலுக்கு: ஒரு நினைவூட்டல், ஒரு குறிப்பிட்ட தேதியில் ஒரு-முறை பணி. நிபந்தனைகள் இல்லை, மறுபடியும் இல்லை, காலண்டரில் ஒரு நேரம் மட்டும்.",
        },
        {
          label: 'ரிக்கரிங்', title: 'Recurring — ஒரு அட்டவணையில்',
          body: '<strong>Recurring</strong> ட்ரிகர் ஒரு மீளும் <strong>அட்டவணையில்</strong> தூண்டுகிறது: ஒரு தொடக்கம், ஒரு <strong>இடைவெளி</strong> (ஒவ்வொரு <em>N</em> நாள்/வாரம்), அது இயங்கும் <strong>நாட்கள்</strong>, ஒரு முடிவு தேதி. வழக்கமான, கடிகார வேலைக்கு ஏற்றது.',
          voice: "அடுத்தது Recurring. இங்கே ஒரு அட்டவணையை வரையறுக்கிறீர்கள்: ஒரு தொடக்க தேதி, ஒரு இடைவெளி — ஒவ்வொரு சில நாட்கள் அல்லது வாரங்கள் — அது இயங்க வேண்டிய வாரத்தின் குறிப்பிட்ட நாட்கள், ஒரு முடிவு தேதி அல்லது மொத்த நிகழ்வுகளின் எண்ணிக்கை. எனவே ஒரு ரிக்கரிங் ட்ரிகர் உங்கள் கடிகார தானியக்கம்: ஒரு தினசரி சோதனை, ஒரு வாராந்திர சுத்தம் நினைவூட்டல், ஆலை நிலைமைகளைப் பொருட்படுத்தாமல் வழக்கமாக நடக்க வேண்டிய எதுவும். அது முடியும் வரை அட்டவணையில் தூண்டிக்கொண்டே இருக்கிறது.",
        },
        {
          label: 'கண்டிஷனல்', title: 'Conditional — திறக்கும் தர்க்கம்',
          body: '<strong>Conditional</strong> ட்ரிகர் சென்சார் தர்க்கத்தில் தூண்டுகிறது. ஒரு <strong>Observation Condition</strong> (திறக்கும் தர்க்கம்) மற்றும் நிமிடங்களில் ஒரு <strong>Observation Frequency</strong> தேவை — ட்ரிகர் திறக்கும் முன் நிபந்தனை அவ்வளவு நேரம் உண்மையாக இருக்க வேண்டும், கணநேர ஏற்றங்களை வடிகட்டி.',
          voice: "மிக சக்திவாய்ந்த வகை Conditional — இதுதான் இன்சைட்களுக்கும் நிகழ்வுகளுக்கும் பின்னுள்ளது. ஒரு கண்டிஷனல் ட்ரிகர் சென்சார் மதிப்புகளைப் பார்த்து, ஒரு நிபந்தனை உண்மையாகும்போது தூண்டுகிறது. இடதுபுறம், Observation கீழ் இரு பகுதிகள். முதலில், அப்சர்வேஷன் நிபந்தனை — அது திறக்கும் தர்க்கம், எப்போது தூண்டுவது என்று தீர்மானிக்கும் விதி. முக்கியமாக, ஒரு அப்சர்வேஷன் அதிர்வெண், நிமிடங்களில். ட்ரிகர் உண்மையில் திறக்கும் முன் நிபந்தனை அந்த முழு காலத்துக்கும் உண்மையாக இருக்க வேண்டும். ஐந்து நிமிடம் அமைத்தால், ஒரு வினாடி ஏற்றம் தூண்டாது — மதிப்பு உண்மையில் நிலைத்திருக்க வேண்டும். அந்த அதிர்வெண்தான் இரைச்சலையும் தவறான அலாரங்களையும் வடிகட்டுகிறது.",
        },
        {
          label: 'சூத்திரம்', title: 'நிபந்தனை சூத்திரத்தை உருவாக்கு',
          body: 'நிபந்தனை <strong>Create Conditional Formula</strong>-இல் உருவாக்கப்படுகிறது — ஒரு காட்சி கட்டுநர். சென்சார்கள், ஆபரேட்டர்களைத் தேர்ந்து <em>IF ( level &gt; 90 ) எனில் 1 இல்லையெனில் 0</em> போன்ற தர்க்கத்தை வெளிப்படுத்து. பெயர், டேக் கொடு; அது <strong>Observation Condition Formula</strong> ஆகிறது.',
          voice: "நிபந்தனை ஒரு தனி சூத்திர எடிட்டரில் உருவாக்கப்படுகிறது. அதற்கு ஒரு பெயரும் டேக்கும் கொடுத்து, தர்க்கத்தைக் காட்சியாக ஒன்றுசேர்க்கிறீர்கள் — ஒரு சென்சார், ஒரு ஆபரேட்டர், ஒரு மதிப்பு தேர்ந்து. இங்கே நாம் இப்படி ஒன்றை உருவாக்குகிறோம்: லெவல் டிரான்ஸ்மிட்டர் அளவீடு தொண்ணூறுக்கு மேல் இருந்தால், ஒன்று திருப்பு, இல்லையெனில் சூன்யம். வேறு வார்த்தைகளில், அந்த தொட்டி மட்டம் தொண்ணூறைக் கடக்கும்போது ட்ரிகர் திறக்கிறது. சென்சார்களையும் வரம்புகளையும் இணைத்து வளமான தர்க்கத்தை இப்படி இயற்றலாம். சேமி, அது ட்ரிகரில் அப்சர்வேஷன் நிபந்தனை சூத்திரமாக விழுகிறது. அதே கட்டுநர் மூடும் தர்க்கத்துக்கும் பயன்படுகிறது.",
        },
        {
          label: 'ரெசலூஷன்', title: 'Resolution — நிபந்தனை அல்லது நேரத்தில் மூடு',
          body: 'திறந்தபின், ட்ரிகர் <strong>மூட</strong> வேண்டும். <strong>Resolution</strong> கீழ், <strong>Resolution Type</strong> தேர்: <strong>Condition</strong> மூலம் — ஒரு <strong>Resolution Condition Formula</strong> + ஒரு <strong>Resolution Frequency</strong> — அல்லது <strong>நேரத்தால்</strong>. மூடல் ட்ரிகர் திறந்தபின் மட்டுமே பொருந்தும்.',
          voice: "திறக்கும் ட்ரிகர் மூடவும் வேண்டும், அது வலதுபுற Resolution பகுதி. ரெசலூஷன் வகையைத் தேர்கிறீர்கள். ஒரு வழி நிபந்தனையால்: ஒரு ரெசலூஷன் நிபந்தனை சூத்திரம் கொடுக்கிறீர்கள் — மூடும் தர்க்கம் — அதே எடிட்டரில் கட்டப்பட்டு, அதன் சொந்த ரெசலூஷன் அதிர்வெண்ணுடன் எவ்வளவு நேரம் நிலைக்க வேண்டும், திறக்கும் பக்கம் போலவே. மற்ற வழி நேரத்தால்: ட்ரிகர் ஒரு குறிப்பிட்ட காலத்துக்குப் பின் மூடுகிறது. நினைவில் வைக்க வேண்டிய முக்கிய விஷயம் — ரெசலூஷன் ட்ரிகர் ஏற்கனவே அதன் அப்சர்வேஷன் நிபந்தனையில் திறந்தபின்தான் பொருந்தும் — ஏதோ திறக்கப்படும் வரை மூடும் தர்க்கம் அர்த்தமற்றது. எனவே ஒரு கண்டிஷனல் ட்ரிகருக்கு ஒரு தெளிவான வாழ்க்கைச் சுழற்சி: அப்சர்வேஷன் நிபந்தனை நிலைக்கும்போது திற, ரெசலூஷன் நிபந்தனை நிலைக்கும்போது அல்லது நேரம் முடியும்போது மூடு.",
        },
        {
          label: 'கூறுகள்', title: 'கூறுகள் ட்ரிகருடன் இணைகின்றன',
          body: 'இறுதியாக, ஒரு ட்ரிகர் <strong>கூறுகளைச்</strong> சுமக்கிறது — அது தூண்டும் செயல்கள். கண்டிஷனல் ட்ரிகர்களுக்கு, <strong>Insights</strong>, <strong>Events</strong> ஆகியவை <strong>Tasks</strong>, <strong>Communications</strong>, அறிவிப்புகளுடன் கிடைக்கின்றன. இதுதான் ஒவ்வொரு அமைப்பு பாடத்துக்கும் மீளும் இணைப்பு.',
          voice: "இது நாம் அமைத்த அனைத்தையும் இணைக்கிறது. ஒரு ட்ரிகர் வெறும் திறந்து மூடவில்லை — அது கூறுகளைச் சுமக்கிறது, அது தூண்டும் உண்மையான செயல்கள். குறிப்பாக கண்டிஷனல் ட்ரிகர்களுக்கு, Insights, Events கூறு வகைகளாகக் கிடைக்கின்றன, Tasks, Communications, தனிப்பயன் அறிவிப்புகளுடன் சேர்ந்து. இதுதான் நீங்கள் நிகழ்வு, இன்சைட், பணி அமைப்பு பாடங்களில் அடைந்த அதே இடம் — ஒரு ட்ரிகரில் கூறைச் சேர்த்தபோது, நீங்கள் இருந்த ட்ரிகர் இதுவே. இப்போது முழுச் சித்திரம் இணைகிறது: ஒரு ட்ரிகர் அதன் அப்சர்வேஷன் நிபந்தனை மூலம் ஆலையைப் பார்க்கிறது, தர்க்கம் நிலைக்கும்போது திறக்கிறது, அதன் இணைந்த கூறுகளைத் தூண்டுகிறது — ஒரு இன்சைட், ஒரு நிகழ்வு, ஒரு பணி — அதன் ரெசலூஷனில் மூடுகிறது. ட்ரிகர்கள் இயந்திரம்; மற்றதெல்லாம் அவை இயக்குவது.",
          tip: { type: 'rememberLabel', text: 'வகைகள்: One Time / Recurring / Conditional. Conditional = Observation (திற + அதிர்வெண் நிமிடங்களில்) → Resolution (நிபந்தனை+அதிர்வெண் அல்லது நேரத்தால் மூடு). கூறுகள் (Insights/Events/Tasks/Comms) ட்ரிகருடன் இணைகின்றன.' },
        },
      ],
    },
    mr: {
      title: '<em>ट्रिगर</em><br>इंजिन.',
      subtitle: 'सर्वांच्या तळाशी असलेले ऑटोमेशन — इव्हेंट, इनसाइट, टास्क आणि कम्युनिकेशन कशामुळे फायर होतात, आणि कधी.',
      chapter: 'बिल्ड ट्रॅक · इंजिन रूम',
      steps: [
        {
          label: 'प्रकार', title: 'ट्रिगरचे तीन प्रकार',
          body: 'एक <strong>ट्रिगर</strong> म्हणजे काहीतरी आपोआप घडवणारी गोष्ट. तीन <strong>प्रकार</strong> आहेत: <strong>One Time</strong> (ठरलेल्या क्षणी एकदा), <strong>Recurring</strong> (शेड्यूलवर), आणि <strong>Conditional</strong> (सेन्सर लॉजिक खरे झाल्यावर). प्रत्येक ट्रिगरला नाव, स्कोप, वर्कस्पेस व अॅसेट असते.',
          voice: "कॉन्फिगरेशन धड्यांभर आपण म्हणत राहिलो \"हे एका ट्रिगरवर चालते.\" हाच तो ट्रिगर — प्लॅटफॉर्मचे इंजिन रूम. ट्रिगर म्हणजे फक्त काहीतरी आपोआप घडवणारी गोष्ट. तुम्ही एक तयार करता तेव्हा, पहिली निवड त्याचा प्रकार, आणि तीन आहेत. One Time नेमके एकदा, तुम्ही ठरवलेल्या क्षणी फायर होते. Recurring एका शेड्यूलवर पुन्हा पुन्हा फायर होते. आणि Conditional, एखादे सेन्सर लॉजिक खरे झाल्यावर फायर होते. प्रत्येक ट्रिगरला एक नाव, स्कोप, आणि तो ज्या वर्कस्पेस व अॅसेटचा आहे ते असते. तुम्ही निवडलेला प्रकार उरलेला फॉर्म बदलतो, म्हणून तिन्ही पाहू.",
        },
        {
          label: 'वन टाइम', title: 'One Time — एक एकटा क्षण',
          body: '<strong>One Time</strong> ट्रिगर सर्वात साधा: तुम्ही फक्त एक <strong>Start Date and Time</strong> सेट करता. तो क्षण आल्यावर, एकदा फायर होऊन संपते. नियोजित, एक-वेळच्या कृतीसाठी चांगले.',
          voice: "सर्वात साधा One Time. प्रकार निवडा, आणि फॉर्म एका एकट्या फील्डपर्यंत आकसतो: एक स्टार्ट डेट आणि टाइम. तुम्ही क्षण निवडता, आणि तो आल्यावर ट्रिगर एकदा फायर होते — मग संपते. हे एका नियोजित, एक-वेळच्या कृतीसाठी आहे: एक स्मरण, एखाद्या विशिष्ट तारखेला एक-वेळचे टास्क. अटी नाहीत, पुनरावृत्ती नाही, फक्त कॅलेंडरवर एक क्षण.",
        },
        {
          label: 'रिकरिंग', title: 'Recurring — एका शेड्यूलवर',
          body: '<strong>Recurring</strong> ट्रिगर एका पुनरावृत्ती <strong>शेड्यूलवर</strong> फायर होते: एक सुरुवात, एक <strong>अंतराल</strong> (दर <em>N</em> दिवस/आठवडे), ज्या <strong>दिवशी</strong> चालते, आणि एक अंतिम तारीख. नियमित, घड्याळ-आधारित कामासाठी योग्य.',
          voice: "पुढे Recurring. इथे तुम्ही एक शेड्यूल परिभाषित करता: एक स्टार्ट डेट, एक अंतराल — दर इतके दिवस किंवा आठवडे — आठवड्याचे विशिष्ट दिवस ज्यावर चालावे, आणि एक अंतिम तारीख किंवा एकूण घटनांची संख्या. म्हणून रिकरिंग ट्रिगर हे तुमचे घड्याळ-आधारित ऑटोमेशन आहे: एक दैनिक तपासणी, एक साप्ताहिक क्लीनिंग स्मरण, प्लांट परिस्थितीची पर्वा न करता नियमितपणे घडावे असे काहीही. ते संपेपर्यंत शेड्यूलवर फायर होत राहते.",
        },
        {
          label: 'कंडिशनल', title: 'Conditional — उघडण्याचे लॉजिक',
          body: '<strong>Conditional</strong> ट्रिगर सेन्सर लॉजिकवर फायर होते. त्याला एक <strong>Observation Condition</strong> (उघडण्याचे लॉजिक) आणि मिनिटांत एक <strong>Observation Frequency</strong> लागते — ट्रिगर उघडण्यापूर्वी अट तितका वेळ खरी राहावी लागते, क्षणिक उसळ्या गाळून.',
          voice: "सर्वात शक्तिशाली प्रकार Conditional — हाच इनसाइट आणि इव्हेंटमागे आहे. एक कंडिशनल ट्रिगर सेन्सर मूल्ये पाहते आणि एखादी अट खरी झाल्यावर फायर होते. डावीकडे, Observation खाली त्याचे दोन भाग. पहिला, ऑब्झर्व्हेशन कंडिशन — ते उघडण्याचे लॉजिक, कधी फायर करायचे ते ठरवणारा नियम. आणि महत्त्वाचे, एक ऑब्झर्व्हेशन फ्रिक्वेन्सी, मिनिटांत. ट्रिगर खरोखर उघडण्यापूर्वी अट त्या पूर्ण कालावधीसाठी खरी राहावी लागते. म्हणून तुम्ही पाच मिनिटे सेट केल्यास, एक-सेकंदाची उसळी ते फायर करणार नाही — मूल्य खरोखर टिकावे लागते. तीच फ्रिक्वेन्सी आवाज आणि खोट्या अलार्म्सना गाळते.",
        },
        {
          label: 'फॉर्म्युला', title: 'कंडिशन फॉर्म्युला तयार करा',
          body: 'अट स्वतः <strong>Create Conditional Formula</strong> मध्ये तयार होते — एक व्हिज्युअल बिल्डर. सेन्सर आणि ऑपरेटर निवडून <em>IF ( level &gt; 90 ) तर 1 अन्यथा 0</em> सारखे लॉजिक व्यक्त करा. त्याला नाव व टॅग द्या; ते <strong>Observation Condition Formula</strong> बनते.',
          voice: "अट स्वतः एका समर्पित फॉर्म्युला एडिटरमध्ये तयार होते. तुम्ही त्याला एक नाव आणि टॅग देता, मग लॉजिक व्हिज्युअली जोडता — एक सेन्सर, एक ऑपरेटर, एक मूल्य निवडून. इथे आपण असे काहीतरी तयार करतो: लेव्हल ट्रान्समीटर रीडिंग नव्वदपेक्षा जास्त असेल, तर एक परत करा, अन्यथा शून्य. दुसऱ्या शब्दांत, तो टँक लेव्हल नव्वद ओलांडल्यावर ट्रिगर उघडते. सेन्सर आणि थ्रेशोल्ड एकत्र करून तुम्ही अशा प्रकारे बरेच समृद्ध लॉजिक रचू शकता. सेव्ह करा, आणि ते ट्रिगरमध्ये ऑब्झर्व्हेशन कंडिशन फॉर्म्युला म्हणून येते. अगदी तोच बिल्डर बंद होण्याच्या लॉजिकसाठीही वापरला जातो.",
        },
        {
          label: 'रिझोल्यूशन', title: 'Resolution — अट किंवा वेळेवर बंद',
          body: 'एकदा उघडल्यावर, ट्रिगरला <strong>बंद</strong> व्हावे लागते. <strong>Resolution</strong> खाली, <strong>Resolution Type</strong> निवडा: <strong>Condition</strong> ने — एक <strong>Resolution Condition Formula</strong> आणि एक <strong>Resolution Frequency</strong> — किंवा <strong>वेळेने</strong>. बंद होणे फक्त ट्रिगर उघडल्यानंतरच लागू.',
          voice: "उघडणारे ट्रिगर बंदही व्हावे लागते, आणि तो उजवीकडचा Resolution विभाग. तुम्ही रिझोल्यूशन प्रकार निवडता. एक पर्याय अटीने: तुम्ही एक रिझोल्यूशन कंडिशन फॉर्म्युला देता — बंद होण्याचे लॉजिक — त्याच एडिटरमध्ये तयार केलेले, त्याच्या स्वतःच्या रिझोल्यूशन फ्रिक्वेन्सीसह किती वेळ टिकावे, अगदी उघडण्याच्या बाजूप्रमाणे. दुसरा पर्याय वेळेने: ट्रिगर फक्त एका ठरलेल्या कालावधीनंतर बंद होते. लक्षात ठेवण्याची मुख्य गोष्ट म्हणजे रिझोल्यूशन फक्त ट्रिगर आधीच त्याच्या ऑब्झर्व्हेशन कंडिशनवर उघडल्यानंतरच लागू होते — काहीतरी उघडेपर्यंत बंद होण्याचे लॉजिक निरर्थक आहे. म्हणून कंडिशनल ट्रिगरला एक स्वच्छ जीवनचक्र आहे: ऑब्झर्व्हेशन कंडिशन टिकल्यावर उघड, रिझोल्यूशन कंडिशन टिकल्यावर किंवा वेळ संपल्यावर बंद.",
        },
        {
          label: 'कंपोनेंट', title: 'कंपोनेंट ट्रिगरला जोडतात',
          body: 'शेवटी, एक ट्रिगर <strong>कंपोनेंट</strong> ठेवते — त्याने फायर केलेल्या कृती. कंडिशनल ट्रिगरसाठी, <strong>Insights</strong> आणि <strong>Events</strong> <strong>Tasks</strong>, <strong>Communications</strong> आणि सूचनांसह उपलब्ध होतात. हाच प्रत्येक कॉन्फिग धड्याकडे परतीचा दुवा.',
          voice: "आणि हे आपण कॉन्फिगर केलेल्या सर्वांना जोडते. एक ट्रिगर फक्त उघडत-बंद होत नाही — ते कंपोनेंट ठेवते, त्याने फायर केलेल्या खऱ्या कृती. विशेषतः कंडिशनल ट्रिगरसाठी, Insights आणि Events कंपोनेंट प्रकार म्हणून उपलब्ध होतात, Tasks, Communications, आणि कस्टम नोटिफिकेशनसह. हीच अगदी ती जागा जिथे तुम्ही इव्हेंट, इनसाइट, आणि टास्क कॉन्फिगरेशन धड्यांत पोहोचलात — तुम्ही एका ट्रिगरला कंपोनेंट जोडले तेव्हा, तुम्ही ज्यावर होतात तो हाच ट्रिगर. म्हणून आता संपूर्ण चित्र जुळते: एक ट्रिगर त्याच्या ऑब्झर्व्हेशन कंडिशनने प्लांट पाहते, लॉजिक टिकल्यावर उघडते, त्याचे जोडलेले कंपोनेंट फायर करते — एक इनसाइट, एक इव्हेंट, एक टास्क — आणि त्याच्या रिझोल्यूशनवर बंद होते. ट्रिगर हे इंजिन; बाकी सर्व ते गतीमान करते ते.",
          tip: { type: 'rememberLabel', text: 'प्रकार: One Time / Recurring / Conditional. Conditional = Observation (उघड + फ्रिक्वेन्सी मिनिटांत) → Resolution (अट+फ्रिक्वेन्सी किंवा वेळेने बंद). कंपोनेंट (Insights/Events/Tasks/Comms) ट्रिगरला जोडतात.' },
        },
      ],
    },
  },
};

export default lesson;
