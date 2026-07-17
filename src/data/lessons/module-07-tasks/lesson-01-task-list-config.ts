import type { Lesson } from '../../types';

/**
 * Module 7 · Configure — Setting up a Task.   Tag: M7.L1·C  (internal only)
 * The "how to build it" track, from the screen recording: build a workflow →
 * create a task template that houses that workflow → attach a Task trigger
 * component (with escalations). Templatized, like events and insights.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-07-config`;

const lesson: Lesson = {
  id: 'lesson-01-task-list-config',
  moduleId: 'module-07-tasks',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    workflow: `${BASE}/workflow.jpg`,
    template: `${BASE}/task-template.jpg`,
    type: `${BASE}/task-type.jpg`,
    list: `${BASE}/templates-list.jpg`,
    component: `${BASE}/task-component.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'workflow', caption: 'Build the workflow', spotlight: { top: '55%', left: '12%', width: '76%', height: '20%' } },
    { mode: 'detail', screenshot: 'template', caption: 'Create a task template', spotlight: { top: '11%', left: '1%', width: '64%', height: '19%' } },
    { mode: 'detail', screenshot: 'type', caption: 'Task type & details', spotlight: { top: '26%', left: '40%', width: '20%', height: '31%' } },
    { mode: 'detail', screenshot: 'template', caption: 'House the workflow', spotlight: { top: '20%', left: '60%', width: '38%', height: '8%' } },
    { mode: 'detail', screenshot: 'list', caption: 'Saved to Fixed Tasks', spotlight: { top: '3%', left: '80%', width: '18%', height: '9%' } },
    { mode: 'detail', screenshot: 'component', caption: 'Task component on a trigger', spotlight: { top: '12%', left: '25%', width: '50%', height: '13%' } },
    { mode: 'detail', screenshot: 'component', caption: 'Escalations & notifications', spotlight: { top: '40%', left: '25%', width: '52%', height: '15%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>Setting up a <em>Task.</em>',
      subtitle: 'The builder\'s view — a workflow, wrapped in a reusable task template, attached to a trigger.',
      chapter: 'Build Track · Tasks',
      steps: [
        {
          label: 'Workflow', title: 'Build the workflow first',
          body: 'A task is driven by a <strong>workflow</strong>, so we build that first — the chain of <strong>To Do → In Progress → Done → Action</strong> steps. Here, the <em>SBR Cycle Cleaning</em> workflow: Clean SBR, Decanting, Tank Empty, and so on. (Workflows are covered in depth in the Read track.)',
          voice: "Setting up a task starts one level down, with a workflow — because a task is really just a workflow with a wrapper around it. So first we build the workflow on the canvas: the chain of steps an operator walks through, typed as To Do, In Progress, Done, and Action. Here we're building the S B R Cycle Cleaning workflow — clean the S B R, decanting, tank empty, and so on. We covered building workflows in detail in the Read track, so here we'll move quickly: name it, lay out the steps, set the scope, and save.",
        },
        {
          label: 'Template', title: 'Create a task template',
          body: 'Next, in <strong>Fixed Tasks Configuration → Create Task</strong>, make a <strong>task template</strong> — reusable across plants, like event and insight templates. Give it a <strong>name</strong>, <strong>description</strong> and <strong>priority</strong>.',
          voice: "With the workflow ready, we wrap it in a task template. Go to Fixed Tasks Configuration and Create Task. Just like events and insights, tasks are templatized — you define one once and reuse it everywhere. Give the template a name — S B R Cleaning — a description, and a priority. This template is the thing that will actually get triggered to operators, and it's where the workflow gets attached.",
        },
        {
          label: 'Details', title: 'Task type & details',
          body: 'Set the <strong>Task Type</strong> — <em>Routine</em> or <em>Emergency</em> × <em>Process / Maintenance / Electrical</em>, etc. On the right, configure <strong>Task Completion</strong> (e.g. Manual Update), <strong>Assignee Method</strong> (Shift Based), <strong>Complexity</strong>, <strong>Deadline & Expected Time</strong>, <strong>Skills</strong>, and optional <strong>Data Entry</strong>.',
          voice: "The template carries a lot of useful configuration. Pick a task type — routine or emergency, crossed with process, maintenance, or electrical. Then on the right panel you tune how the task behaves: how it's marked complete, here Manual Update; the assignee method, here Shift Based, so it goes to whoever's on shift; a complexity rating; the deadline and expected times with their units; the skills required to do it; and whether the task also captures a data entry. All of this travels with the template, so every task it produces is set up the same way.",
        },
        {
          label: 'Workflow link', title: 'House the workflow inside it',
          body: 'The key link: use <strong>Search Workflow</strong> to attach the workflow you built. The template now <strong>houses that workflow</strong> — so when the task is triggered, the operator gets exactly those To Do → Done steps.',
          voice: "Here's the crucial connection. In the Search Workflow field, find and attach the workflow we built at the start — S B R Cycle Cleaning. This is what ties everything together: the task template now houses that workflow. So later, when this task gets triggered to an operator, they're handed exactly those steps — clean the S B R, decanting, tank empty — to tap through from start to done, just like you saw in the Read track. Save, and the template is created.",
        },
        {
          label: 'Saved', title: 'Saved to Fixed Tasks',
          body: 'The template is saved and now appears in the <strong>Fixed Tasks Configuration</strong> list, tagged with its <strong>Task Type</strong>. It can be reused for any plant — add more anytime with <strong>Add Task Template</strong>.',
          voice: "A success toast confirms the task template is saved, and it now shows up in the Fixed Tasks Configuration list alongside all the others, tagged with its task type — routine maintenance, routine process, and so on. Because it's a template, it's available to reuse across plants, and you can keep adding more with the Add Task Template button. That's the reusable definition done; now we make it actually fire.",
        },
        {
          label: 'Component', title: 'Attach a Task component to a trigger',
          body: 'Finally, on a <strong>conditional trigger</strong>, add a <strong>Task</strong> component. In the dialog, use <strong>Task Template Search</strong> to pick your template (<em>SBR Cleaning</em>), then set the <strong>asset</strong>, <strong>assigning method</strong>, and <strong>expected / deadline times</strong>.',
          voice: "To make the task trigger automatically, we attach it to a conditional trigger — the same trigger engine behind events and insights. In the trigger's actions you add a Task component, which opens this dialog. Search for and select the task template we just made, S B R Cleaning. Then confirm the asset it applies to, the assigning method, and the expected and deadline times. Now this task will be raised automatically whenever the trigger's condition is met.",
        },
        {
          label: 'Escalations', title: 'Escalations & notifications',
          body: 'The component also configures <strong>Escalations</strong> — after a set <strong>time</strong>, notify chosen <strong>users</strong> by a <strong>communication type</strong> if the task isn\'t actioned. That closes the loop: a task that fires on a condition, runs its workflow, and escalates if ignored.',
          voice: "The last piece is escalations. Right here you set them up: if the task isn't actioned within a chosen time — say thirty minutes — the platform notifies the users you pick, through the communication type you choose. So the loop is complete: a condition fires the task, the operator works through the attached workflow step by step, and if it's ignored, it automatically escalates to the right people. Submit, and the whole task is live — though, as with the other components, you'd only submit when you genuinely want to create it. That's task configuration end to end: workflow, wrapped in a template, fired and escalated by a trigger.",
          tip: { type: 'rememberLabel', text: 'Workflow → task template (houses the workflow, sets type/completion/skills) → Task component on a trigger → escalations. Templatized like events & insights.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br>एक <em>टास्क</em> सेट करना।',
      subtitle: 'बिल्डर का दृश्य — एक वर्कफ़्लो, एक पुन: प्रयोज्य टास्क टेम्पलेट में लिपटा, एक ट्रिगर से जुड़ा।',
      chapter: 'बिल्ड ट्रैक · टास्क',
      steps: [
        {
          label: 'वर्कफ़्लो', title: 'पहले वर्कफ़्लो बनाएँ',
          body: 'एक टास्क एक <strong>वर्कफ़्लो</strong> से चलता है, तो हम पहले वही बनाते हैं — <strong>To Do → In Progress → Done → Action</strong> चरणों की श्रृंखला। यहाँ <em>SBR Cycle Cleaning</em> वर्कफ़्लो। (वर्कफ़्लो Read ट्रैक में विस्तार से हैं।)',
          voice: "टास्क सेट करना एक स्तर नीचे, एक वर्कफ़्लो से शुरू होता है — क्योंकि टास्क असल में बस एक वर्कफ़्लो है जिसके चारों ओर एक आवरण है। तो पहले हम कैनवास पर वर्कफ़्लो बनाते हैं: चरणों की श्रृंखला जिनसे ऑपरेटर गुज़रता है, To Do, In Progress, Done, और Action के रूप में टाइप की। यहाँ हम एस बी आर साइकिल क्लीनिंग वर्कफ़्लो बना रहे हैं — एस बी आर साफ़ करें, डिकैंटिंग, टैंक खाली, इत्यादि। वर्कफ़्लो बनाना हमने Read ट्रैक में विस्तार से देखा, तो यहाँ तेज़ी से चलेंगे: नाम दें, चरण रखें, स्कोप सेट करें, सेव करें।",
        },
        {
          label: 'टेम्पलेट', title: 'एक टास्क टेम्पलेट बनाएँ',
          body: 'आगे, <strong>Fixed Tasks Configuration → Create Task</strong> में एक <strong>टास्क टेम्पलेट</strong> बनाएँ — प्लांट भर में पुन: प्रयोज्य, इवेंट व इनसाइट टेम्पलेट की तरह। एक <strong>नाम</strong>, <strong>विवरण</strong> व <strong>प्राथमिकता</strong> दें।',
          voice: "वर्कफ़्लो तैयार होने पर, हम उसे एक टास्क टेम्पलेट में लपेटते हैं। Fixed Tasks Configuration में जाएँ और Create Task। इवेंट और इनसाइट की तरह, टास्क भी टेम्पलेटाइज़्ड हैं — आप एक बार परिभाषित करके हर जगह पुन: उपयोग करते हैं। टेम्पलेट को नाम दें — एस बी आर क्लीनिंग — एक विवरण, और एक प्राथमिकता। यही टेम्पलेट वास्तव में ऑपरेटर को ट्रिगर होगा, और यहीं वर्कफ़्लो जुड़ता है।",
        },
        {
          label: 'विवरण', title: 'टास्क प्रकार व विवरण',
          body: '<strong>Task Type</strong> सेट करें — <em>Routine</em> या <em>Emergency</em> × <em>Process / Maintenance / Electrical</em> आदि। दाईं ओर, <strong>Task Completion</strong> (जैसे Manual Update), <strong>Assignee Method</strong> (Shift Based), <strong>Complexity</strong>, <strong>Deadline व Expected Time</strong>, <strong>Skills</strong>, और वैकल्पिक <strong>Data Entry</strong> कॉन्फ़िगर करें।',
          voice: "टेम्पलेट बहुत उपयोगी कॉन्फ़िगरेशन रखता है। एक टास्क प्रकार चुनें — रूटीन या इमरजेंसी, प्रोसेस, मेंटेनेंस, या इलेक्ट्रिकल के साथ। फिर दाएँ पैनल पर आप तय करते हैं कि टास्क कैसे व्यवहार करे: यह कैसे पूर्ण चिह्नित हो, यहाँ Manual Update; असाइनी मेथड, यहाँ Shift Based, ताकि जो शिफ़्ट पर हो उसे जाए; एक जटिलता रेटिंग; समय-सीमा और अपेक्षित समय उनके यूनिट के साथ; इसे करने के लिए ज़रूरी स्किल्स; और क्या टास्क डेटा एंट्री भी पकड़े। यह सब टेम्पलेट के साथ चलता है, ताकि हर टास्क एक जैसा सेट हो।",
        },
        {
          label: 'वर्कफ़्लो लिंक', title: 'वर्कफ़्लो को इसके अंदर रखें',
          body: 'मुख्य लिंक: <strong>Search Workflow</strong> से आपका बनाया वर्कफ़्लो जोड़ें। टेम्पलेट अब उस <strong>वर्कफ़्लो को रखता है</strong> — तो टास्क ट्रिगर होने पर ऑपरेटर को ठीक वही To Do → Done चरण मिलते हैं।',
          voice: "यह रहा महत्वपूर्ण कनेक्शन। Search Workflow फ़ील्ड में, शुरू में बनाया वर्कफ़्लो ढूँढकर जोड़ें — एस बी आर साइकिल क्लीनिंग। यही सब कुछ जोड़ता है: टास्क टेम्पलेट अब उस वर्कफ़्लो को रखता है। तो बाद में, जब यह टास्क ऑपरेटर को ट्रिगर होता है, उन्हें ठीक वही चरण मिलते हैं — एस बी आर साफ़ करें, डिकैंटिंग, टैंक खाली — शुरू से पूरा तक टैप करने के लिए, जैसा आपने Read ट्रैक में देखा। सेव करें, टेम्पलेट बन गया।",
        },
        {
          label: 'सेव', title: 'Fixed Tasks में सेव',
          body: 'टेम्पलेट सेव होकर अब <strong>Fixed Tasks Configuration</strong> सूची में दिखता है, अपने <strong>Task Type</strong> के साथ टैग। किसी भी प्लांट के लिए पुन: उपयोग — <strong>Add Task Template</strong> से कभी भी और जोड़ें।',
          voice: "एक सक्सेस टोस्ट पुष्टि करता है कि टास्क टेम्पलेट सेव हो गया, और यह अब Fixed Tasks Configuration सूची में बाक़ी सब के साथ दिखता है, अपने टास्क प्रकार के साथ टैग — रूटीन मेंटेनेंस, रूटीन प्रोसेस, इत्यादि। चूँकि यह टेम्पलेट है, यह प्लांट भर में पुन: उपयोग के लिए उपलब्ध है, और आप Add Task Template बटन से और जोड़ते रह सकते हैं। पुन: प्रयोज्य परिभाषा हो गई; अब हम इसे सचमुच फ़ायर करते हैं।",
        },
        {
          label: 'कंपोनेंट', title: 'ट्रिगर से Task कंपोनेंट जोड़ें',
          body: 'अंत में, एक <strong>कंडिशनल ट्रिगर</strong> पर एक <strong>Task</strong> कंपोनेंट जोड़ें। डायलॉग में, <strong>Task Template Search</strong> से अपना टेम्पलेट चुनें (<em>SBR Cleaning</em>), फिर <strong>एसेट</strong>, <strong>असाइनिंग मेथड</strong>, और <strong>अपेक्षित / समय-सीमा</strong> सेट करें।',
          voice: "टास्क को अपने-आप ट्रिगर करने के लिए, हम उसे एक कंडिशनल ट्रिगर से जोड़ते हैं — वही ट्रिगर इंजन जो इवेंट और इनसाइट के पीछे है। ट्रिगर के एक्शन में आप एक Task कंपोनेंट जोड़ते हैं, जो यह डायलॉग खोलता है। अभी बनाया टास्क टेम्पलेट ढूँढकर चुनें, एस बी आर क्लीनिंग। फिर जिस एसेट पर लागू है, असाइनिंग मेथड, और अपेक्षित व समय-सीमा की पुष्टि करें। अब यह टास्क हर बार अपने-आप उठेगा जब ट्रिगर की शर्त पूरी हो।",
        },
        {
          label: 'एस्केलेशन', title: 'एस्केलेशन व सूचनाएँ',
          body: 'कंपोनेंट <strong>Escalations</strong> भी कॉन्फ़िगर करता है — एक तय <strong>समय</strong> बाद, अगर टास्क पर कार्रवाई न हो तो चुने <strong>यूज़र्स</strong> को एक <strong>संचार प्रकार</strong> से सूचित करें। चक्र पूरा: एक टास्क जो शर्त पर फ़ायर हो, वर्कफ़्लो चलाए, और अनदेखा होने पर एस्केलेट हो।',
          voice: "आख़िरी हिस्सा एस्केलेशन है। यहीं आप इन्हें सेट करते हैं: अगर टास्क एक चुने समय में — मान लें तीस मिनट — कार्रवाई न हो, तो प्लेटफ़ॉर्म आपके चुने यूज़र्स को, आपके चुने संचार प्रकार से सूचित करता है। तो चक्र पूरा: एक शर्त टास्क फ़ायर करती है, ऑपरेटर जुड़े वर्कफ़्लो से चरण-दर-चरण काम करता है, और अगर अनदेखा हो, तो यह अपने-आप सही लोगों को एस्केलेट हो जाता है। सबमिट करें, और पूरा टास्क लाइव — हालाँकि बाक़ी कंपोनेंट की तरह, आप तभी सबमिट करते जब आप सचमुच इसे बनाना चाहें। यही है टास्क कॉन्फ़िगरेशन अंत तक: वर्कफ़्लो, एक टेम्पलेट में लिपटा, एक ट्रिगर से फ़ायर व एस्केलेट।",
          tip: { type: 'rememberLabel', text: 'वर्कफ़्लो → टास्क टेम्पलेट (वर्कफ़्लो रखता है, प्रकार/पूर्णता/स्किल्स सेट करता है) → ट्रिगर पर Task कंपोनेंट → एस्केलेशन। इवेंट व इनसाइट की तरह टेम्पलेटाइज़्ड।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br>ஒரு <em>பணியை</em> அமைத்தல்.',
      subtitle: 'கட்டுநரின் பார்வை — ஒரு பணிப்பாய்வு, மறுபயன்படுத்தக்கூடிய பணி டெம்ப்ளேட்டில் சுற்றப்பட்டு, ஒரு தூண்டியுடன் இணைக்கப்பட்டது.',
      chapter: 'கட்டுமான தடம் · பணிகள்',
      steps: [
        {
          label: 'பணிப்பாய்வு', title: 'முதலில் பணிப்பாய்வை உருவாக்கு',
          body: 'ஒரு பணி ஒரு <strong>பணிப்பாய்வால்</strong> இயக்கப்படுகிறது, எனவே முதலில் அதை உருவாக்குகிறோம் — <strong>To Do → In Progress → Done → Action</strong> படிகளின் சங்கிலி. இங்கே <em>SBR Cycle Cleaning</em> பணிப்பாய்வு. (பணிப்பாய்வுகள் Read தடத்தில் விரிவாக.)',
          voice: "ஒரு பணியை அமைப்பது ஒரு படி கீழே, ஒரு பணிப்பாய்வில் தொடங்குகிறது — ஏனெனில் பணி உண்மையில் ஒரு பணிப்பாய்வைச் சுற்றி ஒரு உறையே. எனவே முதலில் கேன்வாஸில் பணிப்பாய்வை உருவாக்குகிறோம்: இயக்குநர் கடக்கும் படிகளின் சங்கிலி, To Do, In Progress, Done, Action ஆக வகைப்படுத்தப்பட்டது. இங்கே எஸ் பி ஆர் சைக்கிள் கிளீனிங் பணிப்பாய்வை உருவாக்குகிறோம் — எஸ் பி ஆரை சுத்தம் செய், டிகான்டிங், தொட்டி காலி, இப்படி. பணிப்பாய்வு உருவாக்கத்தை Read தடத்தில் விரிவாகப் பார்த்தோம், எனவே இங்கே வேகமாக நகர்வோம்: பெயரிட்டு, படிகளை அமைத்து, நோக்கத்தை அமைத்து, சேமி.",
        },
        {
          label: 'டெம்ப்ளேட்', title: 'ஒரு பணி டெம்ப்ளேட்டை உருவாக்கு',
          body: 'அடுத்து, <strong>Fixed Tasks Configuration → Create Task</strong>-இல் ஒரு <strong>பணி டெம்ப்ளேட்</strong> உருவாக்கு — நிகழ்வு, இன்சைட் டெம்ப்ளேட்கள் போல ஆலைகளில் மறுபயன்படுத்தக்கூடியது. ஒரு <strong>பெயர்</strong>, <strong>விளக்கம்</strong>, <strong>முன்னுரிமை</strong> கொடு.',
          voice: "பணிப்பாய்வு தயாரானதும், அதை ஒரு பணி டெம்ப்ளேட்டில் சுற்றுகிறோம். Fixed Tasks Configuration-க்குச் சென்று Create Task. நிகழ்வுகள், இன்சைட்கள் போலவே, பணிகளும் டெம்ப்ளேட்டாக்கப்பட்டவை — ஒருமுறை வரையறுத்து எங்கும் மறுபயன்படுத்துகிறீர்கள். டெம்ப்ளேட்டுக்கு ஒரு பெயர் — எஸ் பி ஆர் கிளீனிங் — ஒரு விளக்கம், ஒரு முன்னுரிமை கொடுங்கள். இந்த டெம்ப்ளேட்தான் உண்மையில் இயக்குநருக்குத் தூண்டப்படும், இங்கேதான் பணிப்பாய்வு இணைக்கப்படுகிறது.",
        },
        {
          label: 'விவரம்', title: 'பணி வகை & விவரங்கள்',
          body: '<strong>Task Type</strong> அமை — <em>Routine</em> அல்லது <em>Emergency</em> × <em>Process / Maintenance / Electrical</em> போன்றவை. வலதுபுறம், <strong>Task Completion</strong> (Manual Update), <strong>Assignee Method</strong> (Shift Based), <strong>Complexity</strong>, <strong>Deadline & Expected Time</strong>, <strong>Skills</strong>, விருப்ப <strong>Data Entry</strong> அமை.',
          voice: "டெம்ப்ளேட் நிறைய பயனுள்ள அமைப்பைக் கொண்டுள்ளது. ஒரு பணி வகையைத் தேர் — ரொட்டீன் அல்லது எமர்ஜென்சி, ப்ராசஸ், மெயின்டெனன்ஸ், அல்லது எலக்ட்ரிக்கலுடன். பின் வலது பேனலில் பணி எப்படி நடந்துகொள்கிறது என்று அமைக்கிறீர்கள்: எப்படி முடிந்ததாகக் குறிக்கப்படுகிறது, இங்கே Manual Update; ஒதுக்கீட்டு முறை, இங்கே Shift Based, ஷிஃப்டில் உள்ளவருக்குச் செல்ல; ஒரு சிக்கல் மதிப்பீடு; காலக்கெடு, எதிர்பார்க்கப்படும் நேரங்கள் அவற்றின் அலகுகளுடன்; செய்யத் தேவையான திறன்கள்; பணி ஒரு டேட்டா என்ட்ரியையும் பிடிக்குமா. இவை அனைத்தும் டெம்ப்ளேட்டுடன் பயணிக்கின்றன, ஒவ்வொரு பணியும் ஒரே மாதிரி அமைக்கப்படுகிறது.",
        },
        {
          label: 'பணிப்பாய்வு இணைப்பு', title: 'பணிப்பாய்வை இதனுள் வை',
          body: 'முக்கிய இணைப்பு: <strong>Search Workflow</strong> மூலம் நீங்கள் உருவாக்கிய பணிப்பாய்வை இணை. டெம்ப்ளேட் இப்போது அந்த <strong>பணிப்பாய்வை வைத்திருக்கிறது</strong> — பணி தூண்டப்படும்போது இயக்குநருக்கு அதே To Do → Done படிகள் கிடைக்கின்றன.',
          voice: "இதோ முக்கிய இணைப்பு. Search Workflow புலத்தில், தொடக்கத்தில் உருவாக்கிய பணிப்பாய்வைக் கண்டுபிடித்து இணையுங்கள் — எஸ் பி ஆர் சைக்கிள் கிளீனிங். இதுவே எல்லாவற்றையும் இணைக்கிறது: பணி டெம்ப்ளேட் இப்போது அந்த பணிப்பாய்வை வைத்திருக்கிறது. எனவே பின்னர், இந்தப் பணி ஒரு இயக்குநருக்குத் தூண்டப்படும்போது, அவர்களுக்கு அதே படிகள் கொடுக்கப்படுகின்றன — எஸ் பி ஆரை சுத்தம் செய், டிகான்டிங், தொட்டி காலி — தொடக்கம் முதல் முடிவு வரை தட்ட, Read தடத்தில் பார்த்தபடியே. சேமி, டெம்ப்ளேட் உருவானது.",
        },
        {
          label: 'சேமி', title: 'Fixed Tasks-இல் சேமிக்கப்பட்டது',
          body: 'டெம்ப்ளேட் சேமிக்கப்பட்டு இப்போது <strong>Fixed Tasks Configuration</strong> பட்டியலில் அதன் <strong>Task Type</strong> உடன் குறிக்கப்பட்டுத் தோன்றுகிறது. எந்த ஆலைக்கும் மறுபயன்படுத்தலாம் — <strong>Add Task Template</strong> மூலம் எப்போதும் சேர்.',
          voice: "ஒரு வெற்றி டோஸ்ட் பணி டெம்ப்ளேட் சேமிக்கப்பட்டதை உறுதிசெய்கிறது, இப்போது அது Fixed Tasks Configuration பட்டியலில் மற்ற அனைத்துடனும் தோன்றுகிறது, அதன் பணி வகையுடன் குறிக்கப்பட்டு — ரொட்டீன் மெயின்டெனன்ஸ், ரொட்டீன் ப்ராசஸ், இப்படி. இது ஒரு டெம்ப்ளேட் என்பதால், ஆலைகளில் மறுபயன்படுத்தக் கிடைக்கிறது, Add Task Template பொத்தானால் மேலும் சேர்க்கலாம். மறுபயன்படுத்தக்கூடிய வரையறை முடிந்தது; இப்போது அதை உண்மையில் தூண்டச் செய்வோம்.",
        },
        {
          label: 'கூறு', title: 'தூண்டியில் Task கூறைச் சேர்',
          body: 'இறுதியாக, ஒரு <strong>நிபந்தனை தூண்டியில்</strong> ஒரு <strong>Task</strong> கூறைச் சேர். உரையாடலில், <strong>Task Template Search</strong> மூலம் உங்கள் டெம்ப்ளேட்டைத் தேர் (<em>SBR Cleaning</em>), பின் <strong>சொத்து</strong>, <strong>ஒதுக்கீட்டு முறை</strong>, <strong>எதிர்பார்க்கப்படும் / காலக்கெடு நேரங்கள்</strong> அமை.',
          voice: "பணியைத் தானாகத் தூண்ட, அதை ஒரு நிபந்தனை தூண்டியுடன் இணைக்கிறோம் — நிகழ்வுகள், இன்சைட்களுக்குப் பின்னுள்ள அதே தூண்டி இயந்திரம். தூண்டியின் செயல்களில் ஒரு Task கூறைச் சேர்க்கிறீர்கள், அது இந்த உரையாடலைத் திறக்கிறது. இப்போது உருவாக்கிய பணி டெம்ப்ளேட்டைத் தேடித் தேர்ந்தெடுங்கள், எஸ் பி ஆர் கிளீனிங். பின் அது பொருந்தும் சொத்து, ஒதுக்கீட்டு முறை, எதிர்பார்க்கப்படும், காலக்கெடு நேரங்களை உறுதிசெய். இப்போது தூண்டியின் நிபந்தனை பூர்த்தியாகும்போதெல்லாம் இந்தப் பணி தானாக எழுப்பப்படும்.",
        },
        {
          label: 'எஸ்கலேஷன்', title: 'எஸ்கலேஷன்கள் & அறிவிப்புகள்',
          body: 'கூறு <strong>Escalations</strong>-ஐயும் அமைக்கிறது — ஒரு குறிப்பிட்ட <strong>நேரத்துக்குப்</strong> பின், பணி கையாளப்படாவிட்டால் தேர்ந்த <strong>பயனர்களுக்கு</strong> ஒரு <strong>தொடர்பு வகையால்</strong> அறிவி. வளையம் முழுமை: ஒரு நிபந்தனையில் தூண்டும் பணி, பணிப்பாய்வை இயக்கி, புறக்கணிக்கப்பட்டால் எஸ்கலேட் ஆகிறது.',
          voice: "கடைசிப் பகுதி எஸ்கலேஷன்கள். இங்கேயே அவற்றை அமைக்கிறீர்கள்: பணி ஒரு தேர்ந்த நேரத்துக்குள் — சொல்லுங்கள் முப்பது நிமிடம் — கையாளப்படாவிட்டால், தளம் நீங்கள் தேர்ந்த பயனர்களுக்கு, நீங்கள் தேர்ந்த தொடர்பு வகையால் அறிவிக்கிறது. எனவே வளையம் முழுமை: ஒரு நிபந்தனை பணியைத் தூண்டுகிறது, இயக்குநர் இணைந்த பணிப்பாய்வால் படிப்படியாக வேலை செய்கிறார், புறக்கணிக்கப்பட்டால், தானாக சரியான நபர்களுக்கு எஸ்கலேட் ஆகிறது. சமர்ப்பி, முழுப் பணி நேரலை — இருப்பினும், மற்ற கூறுகள் போல, உண்மையில் உருவாக்க விரும்பும்போதே சமர்ப்பிப்பீர்கள். இதுவே பணி அமைவு முழுவதும்: பணிப்பாய்வு, ஒரு டெம்ப்ளேட்டில் சுற்றப்பட்டு, ஒரு தூண்டியால் தூண்டப்பட்டு எஸ்கலேட் ஆகிறது.",
          tip: { type: 'rememberLabel', text: 'பணிப்பாய்வு → பணி டெம்ப்ளேட் (பணிப்பாய்வை வைக்கிறது, வகை/நிறைவு/திறன் அமைக்கிறது) → தூண்டியில் Task கூறு → எஸ்கலேஷன்கள். நிகழ்வு, இன்சைட் போல டெம்ப்ளேட்டாக்கப்பட்டது.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br>एक <em>टास्क</em> सेट करणे.',
      subtitle: 'बिल्डरचा दृष्टिकोन — एक वर्कफ्लो, पुन्हा वापरता येणाऱ्या टास्क टेम्पलेटमध्ये गुंडाळलेला, एका ट्रिगरला जोडलेला.',
      chapter: 'बिल्ड ट्रॅक · टास्क',
      steps: [
        {
          label: 'वर्कफ्लो', title: 'आधी वर्कफ्लो तयार करा',
          body: 'टास्क एका <strong>वर्कफ्लो</strong>ने चालते, म्हणून आधी तोच तयार करतो — <strong>To Do → In Progress → Done → Action</strong> टप्प्यांची साखळी. इथे <em>SBR Cycle Cleaning</em> वर्कफ्लो. (वर्कफ्लो Read ट्रॅकमध्ये सविस्तर.)',
          voice: "टास्क सेट करणे एक पातळी खाली, एका वर्कफ्लोने सुरू होते — कारण टास्क खरे तर एका वर्कफ्लोभोवती एक आवरण आहे. म्हणून आधी कॅनव्हासवर वर्कफ्लो तयार करतो: ऑपरेटर ज्या टप्प्यांतून जातो त्यांची साखळी, To Do, In Progress, Done, आणि Action म्हणून टाइप केलेली. इथे आपण एस बी आर सायकल क्लीनिंग वर्कफ्लो तयार करतो — एस बी आर स्वच्छ करा, डिकँटिंग, टँक रिकामा, वगैरे. वर्कफ्लो तयार करणे आपण Read ट्रॅकमध्ये सविस्तर पाहिले, म्हणून इथे झटपट जाऊ: नाव द्या, टप्पे मांडा, स्कोप सेट करा, सेव्ह करा.",
        },
        {
          label: 'टेम्पलेट', title: 'एक टास्क टेम्पलेट तयार करा',
          body: 'पुढे, <strong>Fixed Tasks Configuration → Create Task</strong> मध्ये एक <strong>टास्क टेम्पलेट</strong> बनवा — इव्हेंट व इनसाइट टेम्पलेटप्रमाणे प्लांटभर पुन्हा वापरता येणारे. एक <strong>नाव</strong>, <strong>वर्णन</strong> व <strong>प्राधान्य</strong> द्या.',
          voice: "वर्कफ्लो तयार झाल्यावर, आपण तो एका टास्क टेम्पलेटमध्ये गुंडाळतो. Fixed Tasks Configuration मध्ये जा आणि Create Task. इव्हेंट आणि इनसाइटप्रमाणे, टास्कही टेम्पलेटाइज्ड आहेत — एकदा परिभाषित करून सर्वत्र पुन्हा वापरता. टेम्पलेटला नाव द्या — एस बी आर क्लीनिंग — एक वर्णन, आणि एक प्राधान्य. हेच टेम्पलेट प्रत्यक्षात ऑपरेटरला ट्रिगर होईल, आणि इथेच वर्कफ्लो जोडला जातो.",
        },
        {
          label: 'तपशील', title: 'टास्क प्रकार व तपशील',
          body: '<strong>Task Type</strong> सेट करा — <em>Routine</em> किंवा <em>Emergency</em> × <em>Process / Maintenance / Electrical</em> वगैरे. उजवीकडे, <strong>Task Completion</strong> (Manual Update), <strong>Assignee Method</strong> (Shift Based), <strong>Complexity</strong>, <strong>Deadline व Expected Time</strong>, <strong>Skills</strong>, आणि पर्यायी <strong>Data Entry</strong> कॉन्फिगर करा.',
          voice: "टेम्पलेट बरेच उपयुक्त कॉन्फिगरेशन ठेवते. एक टास्क प्रकार निवडा — रूटीन किंवा इमर्जन्सी, प्रोसेस, मेंटेनन्स, किंवा इलेक्ट्रिकलसह. मग उजव्या पॅनलवर टास्क कसे वागते ते ठरवता: ते कसे पूर्ण चिन्हांकित होते, इथे Manual Update; असाइनी मेथड, इथे Shift Based, म्हणजे शिफ्टवर असेल त्याला जाते; एक गुंतागुंत रेटिंग; डेडलाइन आणि अपेक्षित वेळा त्यांच्या युनिटसह; ते करायला लागणारी स्किल्स; आणि टास्क डेटा एंट्रीही पकडते का. हे सर्व टेम्पलेटसोबत प्रवास करते, म्हणून प्रत्येक टास्क सारखेच सेट होते.",
        },
        {
          label: 'वर्कफ्लो लिंक', title: 'वर्कफ्लो याच्यात ठेवा',
          body: 'मुख्य दुवा: <strong>Search Workflow</strong>ने तुम्ही बनवलेला वर्कफ्लो जोडा. टेम्पलेट आता तो <strong>वर्कफ्लो ठेवते</strong> — म्हणून टास्क ट्रिगर झाल्यावर ऑपरेटरला अगदी तेच To Do → Done टप्पे मिळतात.',
          voice: "हा महत्त्वाचा संबंध. Search Workflow फील्डमध्ये, सुरुवातीला बनवलेला वर्कफ्लो शोधून जोडा — एस बी आर सायकल क्लीनिंग. हेच सर्व जोडते: टास्क टेम्पलेट आता तो वर्कफ्लो ठेवते. म्हणून नंतर, हे टास्क एखाद्या ऑपरेटरला ट्रिगर झाल्यावर, त्यांना अगदी तेच टप्पे दिले जातात — एस बी आर स्वच्छ करा, डिकँटिंग, टँक रिकामा — सुरुवातीपासून पूर्णापर्यंत टॅप करण्यासाठी, जसे तुम्ही Read ट्रॅकमध्ये पाहिले. सेव्ह करा, टेम्पलेट तयार झाले.",
        },
        {
          label: 'सेव्ह', title: 'Fixed Tasks मध्ये सेव्ह',
          body: 'टेम्पलेट सेव्ह होऊन आता <strong>Fixed Tasks Configuration</strong> यादीत त्याच्या <strong>Task Type</strong>सह टॅग होऊन दिसते. कोणत्याही प्लांटसाठी पुन्हा वापरता येते — <strong>Add Task Template</strong>ने कधीही आणखी जोडा.',
          voice: "एक यशस्वी टोस्ट टास्क टेम्पलेट सेव्ह झाल्याची पुष्टी करतो, आणि ते आता Fixed Tasks Configuration यादीत इतर सर्वांसोबत दिसते, त्याच्या टास्क प्रकारासह टॅग — रूटीन मेंटेनन्स, रूटीन प्रोसेस, वगैरे. हे टेम्पलेट असल्याने, ते प्लांटभर पुन्हा वापरायला उपलब्ध आहे, आणि Add Task Template बटणाने आणखी जोडत राहू शकता. पुन्हा वापरता येणारी व्याख्या झाली; आता आपण ते प्रत्यक्ष फायर करू.",
        },
        {
          label: 'कंपोनेंट', title: 'ट्रिगरला Task कंपोनेंट जोडा',
          body: 'शेवटी, एका <strong>कंडिशनल ट्रिगर</strong>वर एक <strong>Task</strong> कंपोनेंट जोडा. डायलॉगमध्ये, <strong>Task Template Search</strong>ने तुमचे टेम्पलेट निवडा (<em>SBR Cleaning</em>), मग <strong>अॅसेट</strong>, <strong>असाइनिंग मेथड</strong>, आणि <strong>अपेक्षित / डेडलाइन वेळा</strong> सेट करा.',
          voice: "टास्क आपोआप ट्रिगर करण्यासाठी, आपण ते एका कंडिशनल ट्रिगरला जोडतो — इव्हेंट आणि इनसाइटमागचेच ट्रिगर इंजिन. ट्रिगरच्या अॅक्शनमध्ये तुम्ही एक Task कंपोनेंट जोडता, जो हा डायलॉग उघडतो. आत्ता बनवलेले टास्क टेम्पलेट शोधून निवडा, एस बी आर क्लीनिंग. मग ते ज्या अॅसेटला लागू आहे, असाइनिंग मेथड, आणि अपेक्षित व डेडलाइन वेळांची पुष्टी करा. आता ट्रिगरची अट पूर्ण होईल तेव्हा हे टास्क आपोआप उठेल.",
        },
        {
          label: 'एस्केलेशन', title: 'एस्केलेशन व सूचना',
          body: 'कंपोनेंट <strong>Escalations</strong>ही कॉन्फिगर करतो — एका ठरलेल्या <strong>वेळेनंतर</strong>, टास्कवर कारवाई न झाल्यास निवडलेल्या <strong>यूझर्सना</strong> एका <strong>कम्युनिकेशन प्रकाराने</strong> कळवा. चक्र पूर्ण: अटीवर फायर होणारे टास्क, वर्कफ्लो चालवते, आणि दुर्लक्षित झाल्यास एस्केलेट होते.',
          voice: "शेवटचा भाग एस्केलेशन. इथेच तुम्ही ते सेट करता: टास्कवर एका निवडलेल्या वेळेत — समजा तीस मिनिटे — कारवाई न झाल्यास, प्लॅटफॉर्म तुम्ही निवडलेल्या यूझर्सना, तुम्ही निवडलेल्या कम्युनिकेशन प्रकाराने कळवते. म्हणून चक्र पूर्ण: एक अट टास्क फायर करते, ऑपरेटर जोडलेल्या वर्कफ्लोने टप्प्या-टप्प्याने काम करतो, आणि दुर्लक्षित झाल्यास, ते आपोआप योग्य लोकांना एस्केलेट होते. सबमिट करा, आणि संपूर्ण टास्क लाइव्ह — तरी, इतर कंपोनेंटप्रमाणे, खरोखर बनवायचे असेल तेव्हाच सबमिट कराल. हीच संपूर्ण टास्क कॉन्फिगरेशन: वर्कफ्लो, एका टेम्पलेटमध्ये गुंडाळलेला, एका ट्रिगरने फायर व एस्केलेट.",
          tip: { type: 'rememberLabel', text: 'वर्कफ्लो → टास्क टेम्पलेट (वर्कफ्लो ठेवते, प्रकार/पूर्णता/स्किल्स सेट करते) → ट्रिगरवर Task कंपोनेंट → एस्केलेशन. इव्हेंट व इनसाइटप्रमाणे टेम्पलेटाइज्ड.' },
        },
      ],
    },
  },
};

export default lesson;
