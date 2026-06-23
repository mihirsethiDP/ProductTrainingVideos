import type { Lesson, TaskData, TaskRow } from '../../types';

/**
 * Module 7 · Lesson 1 — The Task List.   Tag: M7.L1
 * Tasks are the operator's day — recurring or condition-triggered jobs, each
 * backed by a configured workflow. This lesson covers the Task List page:
 * filters, columns, priority, skills and completion status.
 */

const PLANT = 'Adani Navi Mumbai 4.5 MLD';

const ROWS: TaskRow[] = [
  { name: 'Perform filter backwash', desc: 'Perform filter backwash to remove trapped impurities and restore filtration efficiency.', plant: PLANT, priority: 'High', skills: ['Operator'], status: 'Pending' },
  { name: 'Check if SBR cycle is running in Auto mode.', desc: 'Check if the SBR cycle is running in auto mode to ensure proper sequencing of operations and consistent effluent quality.', plant: PLANT, priority: 'High', skills: ['Operator'], status: 'Pending' },
  { name: 'Check if UF feed pumps are running in Auto mode.', desc: 'Check if UF feed pumps are running in Auto mode.', plant: PLANT, priority: 'High', skills: ['Operator'], status: 'Pending' },
  { name: 'Bar Screen Cleaning', desc: 'Bar screens are the first line of defense — remove large solids, rags and debris from influent water to protect downstream pumps and valves from clogging.', plant: PLANT, priority: 'Medium', skills: ['Operator'], status: 'Pending', ring: true },
  { name: 'Perform Equalisation tank cleaning', desc: 'Clean the equalisation tank by removing sludge, debris and accumulated solids for effective treatment.', plant: PLANT, priority: 'Medium', skills: ['Operator'], status: 'Pending' },
  { name: 'Perform Sludge holding tank cleaning.', desc: 'Perform sludge holding tank cleaning to ensure proper storage capacity and prevent operational issues.', plant: PLANT, priority: 'Medium', skills: ['Operator'], status: 'Pending' },
  { name: 'Perform UF feed tank cleaning', desc: 'Perform UF feed tank cleaning to remove accumulated solids and ensure uninterrupted filtration efficiency.', plant: PLANT, priority: 'Medium', assignee: 'Vivek Singh', skills: ['Electrical', 'Operator', 'Digital Paani Team'], status: 'Pending' },
];

const list = (highlight: TaskData['highlight']): TaskData => ({ mode: 'list', rows: ROWS, completionFilter: 'Pending', highlight });

const lesson: Lesson = {
  id: 'lesson-01-task-list',
  moduleId: 'module-07-tasks',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'task', caption: 'The Task List', widgetState: { task: list(null) }, cursor: [{ at: 0.2, x: 40, y: 50 }] },
    { mode: 'widget', widget: 'task', caption: 'Filters', widgetState: { task: list('filters') }, cursor: [{ at: 0.2, x: 15, y: 16 }, { at: 0.7, x: 85, y: 16 }] },
    { mode: 'widget', widget: 'task', caption: 'Columns', widgetState: { task: list('columns') }, cursor: [{ at: 0.3, x: 50, y: 30 }] },
    { mode: 'widget', widget: 'task', caption: 'Priority Level', widgetState: { task: list('priority') }, cursor: [{ at: 0.3, x: 56, y: 45 }] },
    { mode: 'widget', widget: 'task', caption: 'Task Skills', widgetState: { task: list('skills') }, cursor: [{ at: 0.3, x: 72, y: 60 }] },
    { mode: 'widget', widget: 'task', caption: 'Status & Add Task', widgetState: { task: list('status') }, cursor: [{ at: 0.3, x: 82, y: 45 }, { at: 0.7, x: 92, y: 12 }] },
  ],
  content: {
    en: {
      title: 'The <em>Task</em><br>List.',
      subtitle: 'A task is a job the operator does — triggered on a schedule or by a condition, and backed by a workflow.',
      chapter: 'Chapter Seven · The Operator\'s Day',
      steps: [
        {
          label: 'Overview', title: 'What a task is',
          body: "A <strong>task</strong> is a job for an operator to carry out — a backwash, a tank cleaning, a check. Tasks arrive in two ways: on a <strong>recurring</strong> schedule (e.g. every shift), or on a <strong>conditional</strong> basis — fired by an observation condition, just like an insight. Every task is backed by a <strong>workflow</strong> configured in the system, assigned to the task, and then triggered.",
          voice: "Welcome to Tasks — this is the operator's day, laid out. A task is simply a job for an operator to carry out: a filter backwash, a tank cleaning, a quick check that a pump is in auto mode. Tasks reach the operator in two ways. Some are recurring — they repeat on a schedule, like once every shift. Others are conditional — they fire when a condition is met out in the plant, exactly the way an insight does. And here's the key idea: every single task is backed by a workflow. That workflow is configured once in the system, assigned to the task, and then the task gets triggered to the operator. We'll see the workflow itself in a later lesson.",
        },
        {
          label: 'Filters', title: 'Find the right tasks fast',
          body: "Up top you can <strong>search</strong> by name and filter by <strong>Plant</strong>, <strong>User</strong>, <strong>Skill</strong>, and <strong>Completion Status</strong>. Here the list is scoped to one plant and to <em>Pending</em> tasks — the ones still waiting to be done.",
          voice: "Across the top is a row of filters. You can search for a task by name, and narrow the list by plant, by user — that's the assignee — by skill, and by completion status. Right now we're looking at one plant, Adani Navi Mumbai, and the status filter is set to Pending, so we only see the tasks that still need doing. Change these and the list updates instantly.",
        },
        {
          label: 'Columns', title: 'What each row tells you',
          body: "Each task is a row: <strong>Name &amp; Description</strong>, the <strong>Plant</strong> it belongs to, its <strong>Priority Level</strong>, the <strong>Assignee</strong>, the <strong>Task Skills</strong> needed, the <strong>Completion Status</strong>, and an <strong>Action</strong> menu.",
          voice: "Each task is one row, and the columns tell you everything at a glance. The name and a short description of what to do. The plant it belongs to. Its priority level. The assignee, if one is set. The skills required to do it. The completion status. And on the far right, an action menu — the three dots — for editing or managing the task.",
        },
        {
          label: 'Priority', title: 'High, Medium, Low',
          body: "Every task carries a <strong>priority</strong> — <span style=\"color:#c74e3f\">High</span>, <span style=\"color:#b07d15\">Medium</span> or <span style=\"color:#2d8659\">Low</span> — so operators know what to tackle first when the shift is busy.",
          voice: "Every task carries a priority — high, medium or low. It's a simple but important cue: when the shift gets busy and several tasks are pending, priority tells the operator what to take care of first. The high-priority checks — like making sure the S B R cycle and the U F feed pumps are running in auto mode — come before the routine cleanings.",
        },
        {
          label: 'Skills', title: 'Who can do it',
          body: "<strong>Task Skills</strong> say what's needed to carry a task out. Most are tagged <strong>Operator</strong>, but some need more — here one task is tagged <strong>Electrical</strong>, <strong>Operator</strong> and <strong>Digital Paani Team</strong>, meaning it takes the right people together.",
          voice: "The task skills column says who is qualified to do the job. Most tasks are simply tagged Operator — routine work any operator can handle. But some need more than that. Look at this last one — it's tagged Electrical, Operator, and Digital Paani Team. That tells you it isn't a solo job; it needs the right combination of skills, and possibly support from our team. Skills make sure the right task reaches the right person.",
        },
        {
          label: 'Status & Add', title: 'Pending, and adding tasks',
          body: "<strong>Completion Status</strong> shows where a task stands — <span style=\"color:#c74e3f\">PENDING</span> until it's worked through and marked done. New tasks can be created any time with <strong>+ ADD TASK</strong>, picking the workflow that backs it.",
          voice: "The completion status shows where each task stands. Everything here reads pending — meaning it's still waiting to be worked through. Once an operator completes it, the status flips to completed and it drops out of this pending view. And if you need a new task, the Add Task button up in the corner creates one — you give it a name, a priority, the skills, and you attach the workflow that will guide the operator through it. That workflow is what we'll open up next.",
          tip: { type: 'upNextLabel', text: 'Next: open a task and walk it from start to done.' },
        },
      ],
    },
    hi: {
      title: '<em>टास्क</em><br>सूची।',
      subtitle: 'टास्क ऑपरेटर का काम है — शेड्यूल या किसी शर्त पर ट्रिगर होता, और एक वर्कफ़्लो से समर्थित।',
      chapter: 'अध्याय सात · ऑपरेटर का दिन',
      steps: [
        {
          label: 'अवलोकन', title: 'टास्क क्या है',
          body: "एक <strong>टास्क</strong> ऑपरेटर के करने का काम है — बैकवॉश, टैंक सफ़ाई, कोई जाँच। टास्क दो तरह से आते हैं: <strong>आवर्ती</strong> शेड्यूल पर (जैसे हर शिफ़्ट), या <strong>शर्त-आधारित</strong> — किसी ऑब्ज़र्वेशन कंडीशन से, बिल्कुल इनसाइट की तरह। हर टास्क सिस्टम में कॉन्फ़िगर किए गए एक <strong>वर्कफ़्लो</strong> से समर्थित होता है।",
          voice: "टास्क में आपका स्वागत है — यह ऑपरेटर का दिन है, सामने रखा हुआ। टास्क बस ऑपरेटर के करने का एक काम है: फ़िल्टर बैकवॉश, टैंक की सफ़ाई, या यह जाँच कि पंप ऑटो मोड में है। टास्क ऑपरेटर तक दो तरह से पहुँचते हैं। कुछ आवर्ती होते हैं — शेड्यूल पर दोहराते हैं, जैसे हर शिफ़्ट में एक बार। कुछ शर्त-आधारित होते हैं — जब प्लांट में कोई शर्त पूरी होती है तब फ़ायर होते हैं, बिल्कुल इनसाइट की तरह। और मुख्य बात: हर टास्क एक वर्कफ़्लो से समर्थित होता है। वह वर्कफ़्लो सिस्टम में एक बार कॉन्फ़िगर होता है, टास्क को सौंपा जाता है, और फिर टास्क ट्रिगर होता है। वर्कफ़्लो खुद हम आगे की लेसन में देखेंगे।",
        },
        {
          label: 'फ़िल्टर', title: 'सही टास्क तेज़ी से ढूँढें',
          body: "ऊपर आप नाम से <strong>खोज</strong> सकते हैं और <strong>प्लांट</strong>, <strong>यूज़र</strong>, <strong>स्किल</strong>, और <strong>कंप्लीशन स्टेटस</strong> से फ़िल्टर कर सकते हैं। यहाँ सूची एक प्लांट और <em>Pending</em> टास्क तक सीमित है।",
          voice: "ऊपर फ़िल्टर की एक पंक्ति है। आप नाम से टास्क खोज सकते हैं, और सूची को प्लांट से, यूज़र से — यानी असाइनी से — स्किल से, और कंप्लीशन स्टेटस से सीमित कर सकते हैं। अभी हम एक प्लांट, अदानी नवी मुंबई देख रहे हैं, और स्टेटस फ़िल्टर Pending पर सेट है, तो हमें सिर्फ़ वे टास्क दिखते हैं जो अभी करने बाकी हैं। इन्हें बदलें और सूची तुरंत अपडेट होती है।",
        },
        {
          label: 'कॉलम', title: 'हर पंक्ति क्या बताती है',
          body: "हर टास्क एक पंक्ति है: <strong>नाम व विवरण</strong>, जिस <strong>प्लांट</strong> का है, उसकी <strong>प्राथमिकता</strong>, <strong>असाइनी</strong>, ज़रूरी <strong>टास्क स्किल्स</strong>, <strong>कंप्लीशन स्टेटस</strong>, और एक <strong>एक्शन</strong> मेन्यू।",
          voice: "हर टास्क एक पंक्ति है, और कॉलम एक नज़र में सब कुछ बताते हैं। नाम और क्या करना है उसका संक्षिप्त विवरण। जिस प्लांट का है। उसकी प्राथमिकता। असाइनी, अगर सेट हो। काम के लिए ज़रूरी स्किल्स। कंप्लीशन स्टेटस। और सबसे दाईं ओर, एक एक्शन मेन्यू — तीन बिंदु — संपादन या प्रबंधन के लिए।",
        },
        {
          label: 'प्राथमिकता', title: 'उच्च, मध्यम, निम्न',
          body: "हर टास्क की एक <strong>प्राथमिकता</strong> होती है — <span style=\"color:#c74e3f\">उच्च</span>, <span style=\"color:#b07d15\">मध्यम</span> या <span style=\"color:#2d8659\">निम्न</span> — ताकि व्यस्त शिफ़्ट में ऑपरेटर जानें कि पहले क्या करना है।",
          voice: "हर टास्क की एक प्राथमिकता होती है — उच्च, मध्यम या निम्न। यह एक सरल पर महत्वपूर्ण संकेत है: जब शिफ़्ट व्यस्त हो और कई टास्क लंबित हों, प्राथमिकता बताती है कि ऑपरेटर पहले किसका ध्यान रखे। उच्च-प्राथमिकता की जाँचें — जैसे यह पक्का करना कि एस बी आर साइकिल और यू एफ़ फ़ीड पंप ऑटो मोड में हैं — नियमित सफ़ाई से पहले आती हैं।",
        },
        {
          label: 'स्किल्स', title: 'कौन कर सकता है',
          body: "<strong>टास्क स्किल्स</strong> बताते हैं कि टास्क करने के लिए क्या चाहिए। ज़्यादातर <strong>Operator</strong> टैग होते हैं, पर कुछ को और चाहिए — यहाँ एक टास्क <strong>Electrical</strong>, <strong>Operator</strong> और <strong>Digital Paani Team</strong> टैग है।",
          voice: "टास्क स्किल्स कॉलम बताता है कि काम के लिए कौन योग्य है। ज़्यादातर टास्क बस Operator टैग होते हैं — नियमित काम जो कोई भी ऑपरेटर संभाल सकता है। पर कुछ को इससे ज़्यादा चाहिए। इस आख़िरी को देखिए — यह Electrical, Operator और Digital Paani Team टैग है। यह बताता है कि यह अकेले का काम नहीं है; इसके लिए स्किल्स का सही संयोजन, और शायद हमारी टीम का साथ चाहिए। स्किल्स यह पक्का करते हैं कि सही टास्क सही व्यक्ति तक पहुँचे।",
        },
        {
          label: 'स्टेटस व जोड़ें', title: 'पेंडिंग, और टास्क जोड़ना',
          body: "<strong>कंप्लीशन स्टेटस</strong> दिखाता है टास्क कहाँ है — पूरा होने तक <span style=\"color:#c74e3f\">PENDING</span>। <strong>+ ADD TASK</strong> से कभी भी नया टास्क बना सकते हैं, उसे समर्थन देने वाला वर्कफ़्लो चुनकर।",
          voice: "कंप्लीशन स्टेटस दिखाता है कि हर टास्क कहाँ है। यहाँ सब Pending पढ़ते हैं — यानी अभी करने बाकी हैं। जैसे ही ऑपरेटर पूरा करता है, स्टेटस Completed हो जाता है और यह इस पेंडिंग दृश्य से हट जाता है। और अगर नया टास्क चाहिए, तो कोने में Add Task बटन एक बनाता है — आप उसे नाम, प्राथमिकता, स्किल्स देते हैं, और वह वर्कफ़्लो जोड़ते हैं जो ऑपरेटर को मार्गदर्शन देगा। वही वर्कफ़्लो हम आगे खोलेंगे।",
          tip: { type: 'upNextLabel', text: 'आगे: एक टास्क खोलें और उसे शुरू से पूरा होने तक चलाएँ।' },
        },
      ],
    },
    ta: {
      title: '<em>பணி</em><br>பட்டியல்.',
      subtitle: 'பணி என்பது இயக்குநர் செய்யும் வேலை — அட்டவணை அல்லது நிபந்தனையால் தூண்டப்பட்டு, ஒரு பணிப்பாய்வால் ஆதரிக்கப்படுகிறது.',
      chapter: 'அத்தியாயம் ஏழு · இயக்குநரின் நாள்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'பணி என்றால் என்ன',
          body: "ஒரு <strong>பணி</strong> என்பது இயக்குநர் செய்ய வேண்டிய வேலை — பேக்வாஷ், தொட்டி சுத்தம், ஒரு சோதனை. பணிகள் இரு வழிகளில் வருகின்றன: <strong>மீண்டும் வரும்</strong> அட்டவணையில் (ஒவ்வொரு ஷிஃப்டிலும்), அல்லது <strong>நிபந்தனை</strong> அடிப்படையில் — ஒரு கண்காணிப்பு நிபந்தனையால், இன்சைட் போலவே. ஒவ்வொரு பணியும் சிஸ்டத்தில் அமைக்கப்பட்ட ஒரு <strong>பணிப்பாய்வால்</strong> ஆதரிக்கப்படுகிறது.",
          voice: "பணிகளுக்கு வரவேற்கிறோம் — இது இயக்குநரின் நாள், விரிக்கப்பட்டுள்ளது. பணி என்பது இயக்குநர் செய்ய வேண்டிய ஒரு வேலை: ஃபில்டர் பேக்வாஷ், தொட்டி சுத்தம், அல்லது பம்ப் ஆட்டோ மோடில் உள்ளதா என்ற சோதனை. பணிகள் இயக்குநரை இரு வழிகளில் அடைகின்றன. சில மீண்டும் வருபவை — அட்டவணையில் திரும்பத் திரும்ப, ஒவ்வொரு ஷிஃப்டிலும் ஒருமுறை போல. சில நிபந்தனை அடிப்படையிலானவை — ஆலையில் ஒரு நிபந்தனை பூர்த்தியாகும்போது தூண்டப்படுகின்றன, இன்சைட் போலவே. முக்கிய கருத்து: ஒவ்வொரு பணியும் ஒரு பணிப்பாய்வால் ஆதரிக்கப்படுகிறது. அந்தப் பணிப்பாய்வு சிஸ்டத்தில் ஒருமுறை அமைக்கப்பட்டு, பணிக்கு ஒதுக்கப்பட்டு, பின் பணி தூண்டப்படுகிறது. பணிப்பாய்வை அடுத்த பாடத்தில் பார்ப்போம்.",
        },
        {
          label: 'வடிப்பான்கள்', title: 'சரியான பணிகளை வேகமாகக் கண்டறியுங்கள்',
          body: "மேலே பெயரால் <strong>தேடலாம்</strong>, <strong>ஆலை</strong>, <strong>பயனர்</strong>, <strong>திறன்</strong>, <strong>நிறைவு நிலை</strong> மூலம் வடிகட்டலாம். இங்கே பட்டியல் ஒரு ஆலைக்கும் <em>Pending</em> பணிகளுக்கும் வரம்பிடப்பட்டுள்ளது.",
          voice: "மேலே வடிப்பான்களின் ஒரு வரிசை உள்ளது. பெயரால் பணியைத் தேடலாம், பட்டியலை ஆலையால், பயனரால் — அதாவது ஒதுக்கப்பட்டவரால் — திறனால், நிறைவு நிலையால் குறுக்கலாம். இப்போது ஒரு ஆலையை, அதானி நவி மும்பையைப் பார்க்கிறோம், நிலை வடிப்பான் Pending-ல் அமைக்கப்பட்டுள்ளது, எனவே செய்ய வேண்டிய பணிகளை மட்டும் பார்க்கிறோம். இவற்றை மாற்றினால் பட்டியல் உடனே புதுப்பிக்கிறது.",
        },
        {
          label: 'நெடுவரிசைகள்', title: 'ஒவ்வொரு வரிசையும் சொல்வது',
          body: "ஒவ்வொரு பணியும் ஒரு வரிசை: <strong>பெயர் & விளக்கம்</strong>, சேர்ந்த <strong>ஆலை</strong>, அதன் <strong>முன்னுரிமை</strong>, <strong>ஒதுக்கப்பட்டவர்</strong>, தேவையான <strong>பணித் திறன்கள்</strong>, <strong>நிறைவு நிலை</strong>, ஒரு <strong>செயல்</strong> மெனு.",
          voice: "ஒவ்வொரு பணியும் ஒரு வரிசை, நெடுவரிசைகள் ஒரே பார்வையில் எல்லாவற்றையும் சொல்கின்றன. பெயரும் என்ன செய்ய வேண்டும் என்ற சிறு விளக்கமும். சேர்ந்த ஆலை. அதன் முன்னுரிமை. ஒதுக்கப்பட்டவர், அமைக்கப்பட்டிருந்தால். வேலைக்குத் தேவையான திறன்கள். நிறைவு நிலை. வலதுபுறம், ஒரு செயல் மெனு — மூன்று புள்ளிகள் — திருத்த அல்லது நிர்வகிக்க.",
        },
        {
          label: 'முன்னுரிமை', title: 'உயர், நடுத்தர, குறைந்த',
          body: "ஒவ்வொரு பணிக்கும் ஒரு <strong>முன்னுரிமை</strong> உண்டு — <span style=\"color:#c74e3f\">உயர்</span>, <span style=\"color:#b07d15\">நடுத்தர</span> அல்லது <span style=\"color:#2d8659\">குறைந்த</span> — பரபரப்பான ஷிஃப்டில் முதலில் எதைச் செய்வது என்று இயக்குநர் அறிய.",
          voice: "ஒவ்வொரு பணிக்கும் ஒரு முன்னுரிமை உண்டு — உயர், நடுத்தர அல்லது குறைந்த. இது எளிய ஆனால் முக்கியமான குறிப்பு: ஷிஃப்ட் பரபரப்பாகி பல பணிகள் நிலுவையில் இருக்கும்போது, முதலில் எதைக் கவனிப்பது என்று முன்னுரிமை சொல்கிறது. உயர் முன்னுரிமைச் சோதனைகள் — எஸ் பி ஆர் சுழற்சியும் யு எஃப் ஃபீட் பம்புகளும் ஆட்டோ மோடில் உள்ளதா என்பது போல — வழக்கமான சுத்தம் செய்வதற்கு முன் வருகின்றன.",
        },
        {
          label: 'திறன்கள்', title: 'யார் செய்யலாம்',
          body: "<strong>பணித் திறன்கள்</strong> பணியைச் செய்ய என்ன தேவை என்று சொல்கின்றன. பெரும்பாலானவை <strong>Operator</strong> எனக் குறிக்கப்பட்டவை, சில இன்னும் தேவை — இங்கே ஒரு பணி <strong>Electrical</strong>, <strong>Operator</strong>, <strong>Digital Paani Team</strong> எனக் குறிக்கப்பட்டுள்ளது.",
          voice: "பணித் திறன்கள் நெடுவரிசை வேலைக்கு யார் தகுதியானவர் என்று சொல்கிறது. பெரும்பாலான பணிகள் வெறுமனே Operator எனக் குறிக்கப்படுகின்றன — எந்த இயக்குநரும் செய்யக்கூடிய வழக்கமான வேலை. ஆனால் சிலவற்றுக்கு இதற்கு மேல் தேவை. இந்தக் கடைசியைப் பாருங்கள் — இது Electrical, Operator, Digital Paani Team எனக் குறிக்கப்பட்டுள்ளது. இது தனி வேலை அல்ல; சரியான திறன்களின் கலவையும், ஒருவேளை எங்கள் குழுவின் ஆதரவும் தேவை என்று சொல்கிறது. திறன்கள் சரியான பணி சரியான நபரை அடைய உறுதிசெய்கின்றன.",
        },
        {
          label: 'நிலை & சேர்', title: 'நிலுவை, பணி சேர்ப்பது',
          body: "<strong>நிறைவு நிலை</strong> பணி எங்குள்ளது என்று காட்டுகிறது — முடிக்கப்படும் வரை <span style=\"color:#c74e3f\">PENDING</span>. <strong>+ ADD TASK</strong> மூலம் எப்போதும் புதிய பணியை, அதை ஆதரிக்கும் பணிப்பாய்வைத் தேர்ந்து உருவாக்கலாம்.",
          voice: "நிறைவு நிலை ஒவ்வொரு பணியும் எங்குள்ளது என்று காட்டுகிறது. இங்கே எல்லாம் Pending என்று படிக்கின்றன — இன்னும் செய்ய வேண்டியவை. இயக்குநர் முடித்தவுடன், நிலை Completed ஆகி இந்த நிலுவைப் பார்வையிலிருந்து விலகுகிறது. புதிய பணி தேவைப்பட்டால், மூலையில் உள்ள Add Task பொத்தான் ஒன்றை உருவாக்குகிறது — பெயர், முன்னுரிமை, திறன்கள் கொடுத்து, இயக்குநருக்கு வழிகாட்டும் பணிப்பாய்வை இணைக்கிறீர்கள். அந்தப் பணிப்பாய்வைத்தான் அடுத்து திறப்போம்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: ஒரு பணியைத் திறந்து தொடக்கம் முதல் முடிவு வரை நகர்த்துங்கள்.' },
        },
      ],
    },
    mr: {
      title: '<em>टास्क</em><br>यादी.',
      subtitle: 'टास्क म्हणजे ऑपरेटरचे काम — शेड्यूलवर किंवा अटीवर ट्रिगर होणारे, आणि वर्कफ्लोने आधारलेले.',
      chapter: 'अध्याय सात · ऑपरेटरचा दिवस',
      steps: [
        {
          label: 'आढावा', title: 'टास्क म्हणजे काय',
          body: "<strong>टास्क</strong> म्हणजे ऑपरेटरने करायचे काम — बॅकवॉश, टँक स्वच्छता, एखादी तपासणी. टास्क दोन प्रकारे येतात: <strong>आवर्ती</strong> शेड्यूलवर (जसे प्रत्येक शिफ्ट), किंवा <strong>अटीवर</strong> — एखाद्या ऑब्झर्व्हेशन कंडिशनने, अगदी इनसाइटसारखे. प्रत्येक टास्क सिस्टममध्ये कॉन्फिगर केलेल्या <strong>वर्कफ्लो</strong>ने आधारलेले असते.",
          voice: "टास्कमध्ये स्वागत आहे — हा ऑपरेटरचा दिवस आहे, समोर मांडलेला. टास्क म्हणजे ऑपरेटरने करायचे एक काम: फिल्टर बॅकवॉश, टँकची स्वच्छता, किंवा पंप ऑटो मोडमध्ये आहे का ही तपासणी. टास्क ऑपरेटरपर्यंत दोन प्रकारे पोहोचतात. काही आवर्ती असतात — शेड्यूलवर पुन्हा येतात, जसे प्रत्येक शिफ्टमध्ये एकदा. काही अटीवर असतात — प्लांटमध्ये एखादी अट पूर्ण झाली की ट्रिगर होतात, अगदी इनसाइटसारखे. आणि मुख्य गोष्ट: प्रत्येक टास्क एका वर्कफ्लोने आधारलेले असते. तो वर्कफ्लो सिस्टममध्ये एकदा कॉन्फिगर होतो, टास्कला नेमला जातो, आणि मग टास्क ट्रिगर होते. वर्कफ्लो स्वतः आपण पुढच्या धड्यात पाहू.",
        },
        {
          label: 'फिल्टर', title: 'योग्य टास्क झटकन शोधा',
          body: "वर तुम्ही नावाने <strong>शोधू</strong> शकता आणि <strong>प्लांट</strong>, <strong>यूझर</strong>, <strong>स्किल</strong>, आणि <strong>कंप्लिशन स्टेटस</strong>ने फिल्टर करू शकता. इथे यादी एका प्लांटपुरती आणि <em>Pending</em> टास्कपुरती मर्यादित आहे.",
          voice: "वर फिल्टरची एक रांग आहे. तुम्ही नावाने टास्क शोधू शकता, आणि यादी प्लांटने, यूझरने — म्हणजे असाइनीने — स्किलने, आणि कंप्लिशन स्टेटसने मर्यादित करू शकता. आत्ता आपण एक प्लांट, अदानी नवी मुंबई पाहत आहोत, आणि स्टेटस फिल्टर Pending वर सेट आहे, म्हणून फक्त करायची बाकी असलेली टास्क दिसतात. ही बदला आणि यादी लगेच अपडेट होते.",
        },
        {
          label: 'स्तंभ', title: 'प्रत्येक ओळ काय सांगते',
          body: "प्रत्येक टास्क एक ओळ आहे: <strong>नाव व वर्णन</strong>, ज्या <strong>प्लांट</strong>चे आहे, त्याची <strong>प्राधान्य पातळी</strong>, <strong>असाइनी</strong>, लागणारे <strong>टास्क स्किल्स</strong>, <strong>कंप्लिशन स्टेटस</strong>, आणि एक <strong>अॅक्शन</strong> मेनू.",
          voice: "प्रत्येक टास्क एक ओळ आहे, आणि स्तंभ एका दृष्टीक्षेपात सर्व सांगतात. नाव आणि काय करायचे याचे थोडक्यात वर्णन. ज्या प्लांटचे आहे. त्याची प्राधान्य पातळी. असाइनी, सेट असल्यास. कामासाठी लागणारी स्किल्स. कंप्लिशन स्टेटस. आणि सर्वात उजवीकडे, एक अॅक्शन मेनू — तीन ठिपके — संपादन किंवा व्यवस्थापनासाठी.",
        },
        {
          label: 'प्राधान्य', title: 'उच्च, मध्यम, कमी',
          body: "प्रत्येक टास्कला एक <strong>प्राधान्य</strong> असते — <span style=\"color:#c74e3f\">उच्च</span>, <span style=\"color:#b07d15\">मध्यम</span> किंवा <span style=\"color:#2d8659\">कमी</span> — म्हणजे व्यस्त शिफ्टमध्ये आधी काय करायचे हे ऑपरेटरला कळते.",
          voice: "प्रत्येक टास्कला एक प्राधान्य असते — उच्च, मध्यम किंवा कमी. हा सोपा पण महत्त्वाचा संकेत आहे: शिफ्ट व्यस्त होते आणि अनेक टास्क प्रलंबित असतात तेव्हा, आधी कशाची काळजी घ्यायची हे प्राधान्य सांगते. उच्च-प्राधान्य तपासण्या — जसे एस बी आर सायकल आणि यू एफ फीड पंप ऑटो मोडमध्ये आहेत याची खात्री — नियमित स्वच्छतेआधी येतात.",
        },
        {
          label: 'स्किल्स', title: 'कोण करू शकतो',
          body: "<strong>टास्क स्किल्स</strong> टास्क करायला काय लागते ते सांगतात. बहुतेक <strong>Operator</strong> टॅग असतात, पण काहींना अधिक लागते — इथे एक टास्क <strong>Electrical</strong>, <strong>Operator</strong> आणि <strong>Digital Paani Team</strong> टॅग आहे.",
          voice: "टास्क स्किल्स स्तंभ कामासाठी कोण पात्र आहे ते सांगतो. बहुतेक टास्क फक्त Operator टॅग असतात — कोणताही ऑपरेटर हाताळू शकेल असे नियमित काम. पण काहींना त्याहून अधिक लागते. ही शेवटची पाहा — ती Electrical, Operator आणि Digital Paani Team टॅग आहे. हे सांगते की हे एकट्याचे काम नाही; त्याला स्किल्सचे योग्य संयोजन, आणि कदाचित आमच्या टीमची साथ लागते. स्किल्स योग्य टास्क योग्य व्यक्तीपर्यंत पोहोचण्याची खात्री करतात.",
        },
        {
          label: 'स्टेटस व जोडा', title: 'पेंडिंग, आणि टास्क जोडणे',
          body: "<strong>कंप्लिशन स्टेटस</strong> टास्क कुठे आहे ते दाखवते — पूर्ण होईपर्यंत <span style=\"color:#c74e3f\">PENDING</span>. <strong>+ ADD TASK</strong>ने कधीही नवीन टास्क, त्याला आधार देणारा वर्कफ्लो निवडून तयार करता येते.",
          voice: "कंप्लिशन स्टेटस प्रत्येक टास्क कुठे आहे ते दाखवते. इथे सर्व Pending वाचतात — म्हणजे अजून करायची बाकी आहेत. ऑपरेटर पूर्ण करताच, स्टेटस Completed होते आणि हे या पेंडिंग दृश्यातून बाहेर पडते. आणि नवीन टास्क हवे असल्यास, कोपऱ्यातील Add Task बटण एक तयार करते — तुम्ही त्याला नाव, प्राधान्य, स्किल्स देता, आणि ऑपरेटरला मार्गदर्शन करणारा वर्कफ्लो जोडता. तोच वर्कफ्लो आपण पुढे उघडू.",
          tip: { type: 'upNextLabel', text: 'पुढे: एक टास्क उघडा आणि सुरुवातीपासून पूर्ण होईपर्यंत चालवा.' },
        },
      ],
    },
  },
};

export default lesson;
