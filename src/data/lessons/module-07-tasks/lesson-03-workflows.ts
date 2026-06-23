import type { Lesson, WfStep, WorkflowData } from '../../types';

/**
 * Module 7 · Lesson 3 — Workflows Behind Tasks.   Tag: M7.L3
 * Every task is backed by a workflow built in the system: a chain of steps
 * typed To Do, In Progress, Done and Action. Three real examples from the
 * field, plus the header (name, description, scope, user group).
 */

const SLUDGE: WfStep[] = [
  { label: 'Check SV and expected sludge generated per day', type: 'todo' },
  { label: 'Adjust the sludge wasting valve to maintain the SV in the range.', type: 'inProgress' },
  { label: 'SV is maintained. Expected and Calculated sludge wasting is nearly same.', type: 'done' },
];

const SV30: WfStep[] = [
  { label: 'Check SV-30 - Start', type: 'todo' },
  { label: 'Collect MLSS sample and start 30-minute settling (SV-30) - Done', type: 'inProgress' },
  { label: 'Note settled volume after 30 minutes - Done', type: 'inProgress' },
  { label: 'Check DO at aeration basin using handheld meter or probe - Done', type: 'inProgress' },
  { label: 'Confirm DO is within target range - Done', type: 'inProgress' },
  { label: 'Task Completed', type: 'done' },
  { label: 'Upload Media', type: 'action' },
];

const BARSCREEN: WfStep[] = [
  { label: 'Perform Bar Screen Cleaning - Start', type: 'todo' },
  { label: 'Carefully remove debris and dust from the bar screen - Done', type: 'inProgress' },
  { label: 'Ensure no obstruction remains to maintain smooth flow - Done', type: 'inProgress' },
  { label: 'Bar Screen Cleaned', type: 'done' },
  { label: 'Upload Media', type: 'action' },
];

const sludgeWf = (highlight: WorkflowData['highlight']): WorkflowData => ({
  name: 'Perform sludge wasting based on SV.',
  description: 'Perform sludge wasting based on SV to maintain optimal biomass levels. Adjust wasting volume as per process requirements and SV trends.',
  scope: 'System', nodes: SLUDGE, highlight,
});

const lesson: Lesson = {
  id: 'lesson-03-workflows',
  moduleId: 'module-07-tasks',
  lessonNumber: 3,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'workflow', caption: 'A workflow', widgetState: { workflow: sludgeWf('nodes') }, cursor: [{ at: 0.3, x: 50, y: 70 }] },
    { mode: 'widget', widget: 'workflow', caption: 'Four step types', widgetState: { workflow: sludgeWf('legend') }, cursor: [{ at: 0.2, x: 15, y: 48 }, { at: 0.7, x: 30, y: 48 }] },
    { mode: 'widget', widget: 'workflow', caption: 'To Do — the start', widgetState: { workflow: sludgeWf('todo') }, cursor: [{ at: 0.3, x: 33, y: 70 }] },
    { mode: 'widget', widget: 'workflow', caption: 'Done — the end', widgetState: { workflow: sludgeWf('done') }, cursor: [{ at: 0.3, x: 66, y: 70 }] },
    { mode: 'widget', widget: 'workflow', caption: 'A longer workflow', widgetState: { workflow: { name: 'Check SV-30', description: 'Check SV-30', scope: 'System', nodes: SV30, highlight: 'nodes' } }, cursor: [{ at: 0.3, x: 50, y: 70 }] },
    { mode: 'widget', widget: 'workflow', caption: 'The Action step & Scope', widgetState: { workflow: { name: 'Bar Screen Choked', description: 'Bar Screen Choked', scope: 'System', nodes: BARSCREEN, highlight: 'action' } }, cursor: [{ at: 0.3, x: 88, y: 70 }, { at: 0.7, x: 12, y: 30 }] },
  ],
  content: {
    en: {
      title: 'Workflows<br>Behind <em>Tasks.</em>',
      subtitle: 'Every task is backed by a workflow — a chain of typed steps, built once in the system.',
      chapter: 'Chapter Seven · How a Task is Built',
      steps: [
        {
          label: 'A workflow', title: 'The chain behind the task',
          body: "A <strong>workflow</strong> is the chain of steps a task moves through — laid out left to right on a canvas. This is the one behind sludge wasting: <em>check</em>, then <em>adjust the valve</em>, then the <em>outcome</em>. Each box is a step; the arrows are the path from start to finish.",
          voice: "In the last lesson the operator tapped through a task's steps. This is where those steps come from — the workflow. A workflow is simply the chain of steps a task moves through, laid out left to right on a canvas. Here's the very one behind the sludge wasting task we just did: check the S V, then adjust the wasting valve, then the outcome — S V maintained. Each box is a step, and the arrows show the path the task takes from start to finish. Build this once, attach it to a task, and every operator who gets that task is guided through exactly these steps.",
        },
        {
          label: 'Step types', title: 'To Do, In Progress, Done, Action',
          body: "Steps come in four <strong>types</strong>, colour-coded: <span style=\"color:#9c6f00\">To Do</span> (the start), <span style=\"color:#8a4b1d\">In Progress</span> (the work), <span style=\"color:#1f6b44\">Done</span> (the outcome), and <span style=\"color:#5f4585\">Action</span> (a final media upload or notification).",
          voice: "Every step is one of four types, and the colours tell you which. To Do, in yellow, is the start — the step that kicks the task off. In Progress, in orange, is the actual work — there can be several of these. Done, in green, is the outcome — the clearly defined finish. And Action, in purple, is a special final step: an automatic media upload or a notification once the work is complete. These four types are the entire vocabulary — every workflow, simple or long, is built from just these.",
        },
        {
          label: 'To Do', title: 'Where it begins',
          body: "Every workflow opens with a <span style=\"color:#9c6f00\"><strong>To Do</strong></span> step — the start the operator sees first. Here it's <em>Check SV and expected sludge generated per day.</em> This is the step the task lands on when it's triggered.",
          voice: "Let's walk this workflow. It begins with the To Do step — the yellow one on the left. This is the start, the step the operator lands on the moment the task is triggered to them. Here it reads: check S V and expected sludge generated per day. Simple, clear, and it's always the first thing the operator confirms. Every workflow has exactly one starting point, so there's never any confusion about where a task begins.",
        },
        {
          label: 'Done', title: 'Where it ends',
          body: "Following the arrows, the workflow lands on its <span style=\"color:#1f6b44\"><strong>Done</strong></span> step — the green box stating the outcome: <em>SV is maintained.</em> When the operator reaches this, the job is, by definition, complete.",
          voice: "Follow the arrows to the right and you reach the Done step — the green box. This one states the outcome plainly: S V is maintained; expected and calculated sludge wasting are nearly the same. This is the heart of why workflows matter. Done isn't just I finished — it's a defined outcome that says what success actually looks like. When the operator's task reaches this green step, the job is, by definition, complete and correct.",
        },
        {
          label: 'Longer', title: 'Workflows can be as long as the job',
          body: "Workflows scale to the job. This <strong>SV-30</strong> check runs through several <span style=\"color:#8a4b1d\">In Progress</span> steps — collect the sample, settle 30 minutes, note the volume, check DO, confirm the range — before <span style=\"color:#1f6b44\">Task Completed</span> and an <span style=\"color:#5f4585\">Upload Media</span> action.",
          voice: "Workflows are as long as the job needs. Here's a real one — the S V thirty check. It runs through a whole sequence of in-progress steps: collect the M L S S sample and start the thirty-minute settling, note the settled volume after thirty minutes, check the dissolved oxygen at the aeration basin, confirm D O is within range — and only then reaches Task Completed, in green, followed by an Upload Media action. Same four step types, just more of them. The workflow mirrors the real procedure, step for step, however many steps that takes.",
        },
        {
          label: 'Action & Scope', title: 'The Action step, and configuration',
          body: "This <strong>Bar Screen Choked</strong> workflow ends with a purple <span style=\"color:#5f4585\"><strong>Action</strong></span> — <em>Upload Media</em> as proof. Up top, the workflow's <strong>Name</strong>, <strong>Description</strong> and <strong>Scope</strong> (here <em>System</em>) are set when it's built — then it's attached to a task and triggered.",
          voice: "One last example — the Bar Screen Choked workflow. Clean the screen, remove the debris, ensure no obstruction, reach Bar Screen Cleaned in green, and finish with a purple Action step: upload media as proof. That Action is exactly what flowed through to the operator in the previous lesson. And all of this is configured up at the top: the workflow gets a name, a description, and a scope — here it's set to System, meaning it's available across the system, though it can be narrowed to a specific user group. Build the workflow, attach it to a task, set how the task is triggered — recurring or conditional — and the whole loop is complete. That's Tasks, end to end: a clear job, driven by a workflow, carried out and proven by the operator.",
          tip: { type: 'upNextLabel', text: 'Build a workflow once → attach to a task → trigger it (recurring or conditional). Four step types: To Do, In Progress, Done, Action.' },
        },
      ],
    },
    hi: {
      title: 'टास्क के पीछे<br>के <em>वर्कफ़्लो.</em>',
      subtitle: 'हर टास्क एक वर्कफ़्लो से समर्थित है — टाइप किए चरणों की एक श्रृंखला, सिस्टम में एक बार बनाई गई।',
      chapter: 'अध्याय सात · टास्क कैसे बनता है',
      steps: [
        {
          label: 'वर्कफ़्लो', title: 'टास्क के पीछे की श्रृंखला',
          body: "<strong>वर्कफ़्लो</strong> उन चरणों की श्रृंखला है जिनसे टास्क गुज़रता है — कैनवास पर बाएँ से दाएँ। यह स्लज वेस्टिंग के पीछे वाला है: <em>जाँचें</em>, फिर <em>वाल्व समायोजित</em>, फिर <em>परिणाम</em>। हर बॉक्स एक चरण; तीर शुरू से अंत का रास्ता।",
          voice: "पिछली लेसन में ऑपरेटर ने टास्क के चरणों से होकर टैप किया। ये चरण यहीं से आते हैं — वर्कफ़्लो। वर्कफ़्लो बस उन चरणों की श्रृंखला है जिनसे टास्क गुज़रता है, कैनवास पर बाएँ से दाएँ रखी हुई। यह रहा ठीक वही जो अभी की स्लज वेस्टिंग टास्क के पीछे था: एस वी जाँचें, फिर वेस्टिंग वाल्व समायोजित करें, फिर परिणाम — एस वी बना हुआ। हर बॉक्स एक चरण है, और तीर वह रास्ता दिखाते हैं जो टास्क शुरू से अंत तक लेता है। इसे एक बार बनाएँ, टास्क से जोड़ें, और जिस भी ऑपरेटर को वह टास्क मिले, ठीक इन्हीं चरणों से मार्गदर्शित होता है।",
        },
        {
          label: 'चरण प्रकार', title: 'To Do, In Progress, Done, Action',
          body: "चरण चार <strong>प्रकार</strong> के होते हैं, रंग-कोडित: <span style=\"color:#9c6f00\">To Do</span> (शुरुआत), <span style=\"color:#8a4b1d\">In Progress</span> (काम), <span style=\"color:#1f6b44\">Done</span> (परिणाम), और <span style=\"color:#5f4585\">Action</span> (अंतिम मीडिया अपलोड या सूचना)।",
          voice: "हर चरण चार प्रकारों में से एक है, और रंग बताते हैं कौन सा। To Do, पीले में, शुरुआत है — वह चरण जो टास्क शुरू करता है। In Progress, नारंगी में, असल काम है — इनमें से कई हो सकते हैं। Done, हरे में, परिणाम है — स्पष्ट रूप से परिभाषित अंत। और Action, बैंगनी में, एक विशेष अंतिम चरण है: काम पूरा होने पर अपने-आप मीडिया अपलोड या सूचना। ये चार प्रकार ही पूरी शब्दावली हैं — हर वर्कफ़्लो, सरल हो या लंबा, बस इन्हीं से बनता है।",
        },
        {
          label: 'To Do', title: 'जहाँ शुरू होता है',
          body: "हर वर्कफ़्लो एक <span style=\"color:#9c6f00\"><strong>To Do</strong></span> चरण से खुलता है — पहली शुरुआत जो ऑपरेटर देखता है। यहाँ यह है <em>Check SV and expected sludge generated per day.</em> टास्क ट्रिगर होने पर इसी चरण पर आता है।",
          voice: "चलिए इस वर्कफ़्लो को देखते हैं। यह To Do चरण से शुरू होता है — बाईं ओर पीला। यह शुरुआत है, वह चरण जिस पर ऑपरेटर तभी आता है जब टास्क उसे ट्रिगर होता है। यहाँ लिखा है: एस वी और प्रति दिन अपेक्षित स्लज जाँचें। सरल, स्पष्ट, और यह हमेशा पहली चीज़ है जिसकी ऑपरेटर पुष्टि करता है। हर वर्कफ़्लो में ठीक एक शुरुआती बिंदु होता है, तो कभी भ्रम नहीं कि टास्क कहाँ से शुरू होता है।",
        },
        {
          label: 'Done', title: 'जहाँ ख़त्म होता है',
          body: "तीरों के साथ, वर्कफ़्लो अपने <span style=\"color:#1f6b44\"><strong>Done</strong></span> चरण पर आता है — हरा बॉक्स जो परिणाम बताता है: <em>SV बना हुआ है।</em> ऑपरेटर जब यहाँ पहुँचता है, काम परिभाषा से पूर्ण है।",
          voice: "तीरों के साथ दाईं ओर जाएँ और आप Done चरण पर पहुँचते हैं — हरा बॉक्स। यह परिणाम साफ़ बताता है: एस वी बना हुआ है; अपेक्षित और गणना की गई स्लज वेस्टिंग लगभग समान हैं। यही दिल है कि वर्कफ़्लो क्यों मायने रखते हैं। Done सिर्फ़ मैंने ख़त्म किया नहीं है — यह एक परिभाषित परिणाम है जो बताता है कि सफलता असल में कैसी दिखती है। जब ऑपरेटर का टास्क इस हरे चरण पर पहुँचता है, काम परिभाषा से पूर्ण और सही है।",
        },
        {
          label: 'लंबा', title: 'वर्कफ़्लो काम जितना लंबा हो सकता है',
          body: "वर्कफ़्लो काम के अनुसार बढ़ते हैं। यह <strong>SV-30</strong> जाँच कई <span style=\"color:#8a4b1d\">In Progress</span> चरणों से गुज़रती है — सैंपल लें, 30 मिनट सेटल करें, वॉल्यूम नोट करें, DO जाँचें, रेंज पुष्टि करें — फिर <span style=\"color:#1f6b44\">Task Completed</span> और <span style=\"color:#5f4585\">Upload Media</span> एक्शन।",
          voice: "वर्कफ़्लो उतने ही लंबे होते हैं जितना काम को चाहिए। यह रहा एक असली — एस वी थर्टी जाँच। यह इन-प्रोग्रेस चरणों के एक पूरे क्रम से गुज़रती है: एम एल एस एस सैंपल लें और तीस मिनट का सेटलिंग शुरू करें, तीस मिनट बाद सेटल्ड वॉल्यूम नोट करें, एयरेशन बेसिन पर घुलित ऑक्सीजन जाँचें, पुष्टि करें कि डी ओ रेंज में है — और तभी Task Completed पर पहुँचती है, हरे में, फिर एक Upload Media एक्शन। वही चार चरण प्रकार, बस ज़्यादा। वर्कफ़्लो असली प्रक्रिया को, चरण दर चरण, हूबहू दर्शाता है, चाहे जितने चरण लगें।",
        },
        {
          label: 'एक्शन व स्कोप', title: 'एक्शन चरण, और कॉन्फ़िगरेशन',
          body: "यह <strong>Bar Screen Choked</strong> वर्कफ़्लो एक बैंगनी <span style=\"color:#5f4585\"><strong>Action</strong></span> पर ख़त्म होता है — प्रमाण के रूप में <em>Upload Media</em>। ऊपर, वर्कफ़्लो का <strong>Name</strong>, <strong>Description</strong> और <strong>Scope</strong> (यहाँ <em>System</em>) बनाते समय सेट होते हैं — फिर टास्क से जोड़कर ट्रिगर।",
          voice: "एक आख़िरी उदाहरण — बार स्क्रीन चोक्ड वर्कफ़्लो। स्क्रीन साफ़ करें, मलबा हटाएँ, पक्का करें कोई रुकावट नहीं, हरे में Bar Screen Cleaned पर पहुँचें, और एक बैंगनी Action चरण से ख़त्म करें: प्रमाण के रूप में मीडिया अपलोड। वही एक्शन पिछली लेसन में ऑपरेटर तक पहुँचा था। और यह सब ऊपर कॉन्फ़िगर होता है: वर्कफ़्लो को एक नाम, एक विवरण, और एक स्कोप मिलता है — यहाँ यह System पर सेट है, यानी पूरे सिस्टम में उपलब्ध, हालाँकि इसे किसी ख़ास यूज़र ग्रुप तक सीमित किया जा सकता है। वर्कफ़्लो बनाएँ, टास्क से जोड़ें, सेट करें टास्क कैसे ट्रिगर हो — आवर्ती या शर्त-आधारित — और पूरा चक्र पूरा। यही है टास्क, शुरू से अंत तक: एक स्पष्ट काम, वर्कफ़्लो से चालित, ऑपरेटर द्वारा किया और प्रमाणित।",
          tip: { type: 'upNextLabel', text: 'वर्कफ़्लो एक बार बनाएँ → टास्क से जोड़ें → ट्रिगर करें (आवर्ती या शर्त-आधारित)। चार चरण प्रकार: To Do, In Progress, Done, Action।' },
        },
      ],
    },
    ta: {
      title: 'பணிகளுக்குப்<br>பின் <em>பணிப்பாய்வுகள்.</em>',
      subtitle: 'ஒவ்வொரு பணியும் ஒரு பணிப்பாய்வால் ஆதரிக்கப்படுகிறது — வகைப்படுத்தப்பட்ட படிகளின் சங்கிலி, சிஸ்டத்தில் ஒருமுறை கட்டப்பட்டது.',
      chapter: 'அத்தியாயம் ஏழு · பணி எப்படிக் கட்டப்படுகிறது',
      steps: [
        {
          label: 'பணிப்பாய்வு', title: 'பணிக்குப் பின்னுள்ள சங்கிலி',
          body: "<strong>பணிப்பாய்வு</strong> என்பது பணி கடக்கும் படிகளின் சங்கிலி — கேன்வாஸில் இடமிருந்து வலமாக. இது கசடு வெளியேற்றத்துக்குப் பின்னுள்ளது: <em>சரிபார்</em>, பின் <em>வால்வை சரிசெய்</em>, பின் <em>முடிவு</em>. ஒவ்வொரு பெட்டியும் ஒரு படி; அம்புகள் தொடக்கம் முதல் முடிவு வரையான பாதை.",
          voice: "கடந்த பாடத்தில் இயக்குநர் ஒரு பணியின் படிகளைத் தட்டிக் கடந்தார். அந்தப் படிகள் இங்கிருந்துதான் வருகின்றன — பணிப்பாய்வு. பணிப்பாய்வு என்பது வெறுமனே பணி கடக்கும் படிகளின் சங்கிலி, கேன்வாஸில் இடமிருந்து வலமாக வைக்கப்பட்டது. இதோ நாம் இப்போது செய்த கசடு வெளியேற்றப் பணிக்குப் பின்னுள்ள அதே ஒன்று: எஸ் வி சரிபார், பின் வேஸ்டிங் வால்வை சரிசெய், பின் முடிவு — எஸ் வி பராமரிக்கப்படுகிறது. ஒவ்வொரு பெட்டியும் ஒரு படி, அம்புகள் பணி தொடக்கம் முதல் முடிவு வரை எடுக்கும் பாதையைக் காட்டுகின்றன. இதை ஒருமுறை கட்டி, ஒரு பணியுடன் இணைத்தால், அந்தப் பணியைப் பெறும் ஒவ்வொரு இயக்குநரும் இதே படிகளால் வழிநடத்தப்படுகிறார்.",
        },
        {
          label: 'படி வகைகள்', title: 'To Do, In Progress, Done, Action',
          body: "படிகள் நான்கு <strong>வகைகள்</strong>, நிற-குறியீடு: <span style=\"color:#9c6f00\">To Do</span> (தொடக்கம்), <span style=\"color:#8a4b1d\">In Progress</span> (வேலை), <span style=\"color:#1f6b44\">Done</span> (முடிவு), <span style=\"color:#5f4585\">Action</span> (இறுதி மீடியா பதிவேற்றம் அல்லது அறிவிப்பு).",
          voice: "ஒவ்வொரு படியும் நான்கு வகைகளில் ஒன்று, நிறங்கள் எது என்று சொல்கின்றன. To Do, மஞ்சளில், தொடக்கம் — பணியைத் தொடங்கும் படி. In Progress, ஆரஞ்சில், உண்மையான வேலை — இவை பல இருக்கலாம். Done, பச்சையில், முடிவு — தெளிவாக வரையறுக்கப்பட்ட நிறைவு. Action, ஊதாவில், ஒரு சிறப்பு இறுதிப் படி: வேலை முடிந்ததும் தானியங்கி மீடியா பதிவேற்றம் அல்லது அறிவிப்பு. இந்த நான்கு வகைகளே முழு சொல்லகராதி — ஒவ்வொரு பணிப்பாய்வும், எளிதோ நீளமோ, இவற்றிலிருந்தே கட்டப்படுகிறது.",
        },
        {
          label: 'To Do', title: 'எங்கே தொடங்குகிறது',
          body: "ஒவ்வொரு பணிப்பாய்வும் ஒரு <span style=\"color:#9c6f00\"><strong>To Do</strong></span> படியில் திறக்கிறது — இயக்குநர் முதலில் காணும் தொடக்கம். இங்கே <em>Check SV and expected sludge generated per day.</em> பணி தூண்டப்படும்போது இந்தப் படியில் வந்து நிற்கிறது.",
          voice: "இந்தப் பணிப்பாய்வை நடந்து பார்ப்போம். இது To Do படியில் தொடங்குகிறது — இடதுபுறம் மஞ்சள். இது தொடக்கம், பணி தூண்டப்பட்ட கணமே இயக்குநர் வந்து நிற்கும் படி. இங்கே படிக்கிறது: எஸ் வி மற்றும் ஒரு நாளைக்கு எதிர்பார்க்கப்படும் கசடு சரிபார். எளிய, தெளிவான, இது எப்போதும் இயக்குநர் உறுதிசெய்யும் முதல் விஷயம். ஒவ்வொரு பணிப்பாய்வுக்கும் சரியாக ஒரு தொடக்கப் புள்ளி உள்ளது, எனவே பணி எங்கே தொடங்குகிறது என்ற குழப்பம் இல்லை.",
        },
        {
          label: 'Done', title: 'எங்கே முடிகிறது',
          body: "அம்புகளைப் பின்தொடர்ந்து, பணிப்பாய்வு அதன் <span style=\"color:#1f6b44\"><strong>Done</strong></span> படியை அடைகிறது — முடிவைச் சொல்லும் பச்சைப் பெட்டி: <em>SV பராமரிக்கப்படுகிறது.</em> இயக்குநர் இதை அடைந்தால், வேலை வரையறையால் முழுமை.",
          voice: "அம்புகளை வலதுபுறம் பின்தொடர்ந்தால் Done படியை அடைகிறீர்கள் — பச்சைப் பெட்டி. இது முடிவைத் தெளிவாகச் சொல்கிறது: எஸ் வி பராமரிக்கப்படுகிறது; எதிர்பார்க்கப்பட்ட மற்றும் கணக்கிடப்பட்ட கசடு வெளியேற்றம் கிட்டத்தட்ட சமம். பணிப்பாய்வுகள் ஏன் முக்கியம் என்பதன் இதயம் இதுதான். Done என்பது வெறும் முடித்தேன் அல்ல — வெற்றி உண்மையில் எப்படி இருக்கும் என்று சொல்லும் வரையறுக்கப்பட்ட முடிவு. இயக்குநரின் பணி இந்தப் பச்சைப் படியை அடைந்தால், வேலை வரையறையால் முழுமையும் சரியும்.",
        },
        {
          label: 'நீளமான', title: 'வேலை எவ்வளவு நீளமோ அவ்வளவு',
          body: "பணிப்பாய்வுகள் வேலைக்கு ஏற்ப விரிகின்றன. இந்த <strong>SV-30</strong> சோதனை பல <span style=\"color:#8a4b1d\">In Progress</span> படிகளைக் கடக்கிறது — மாதிரி எடு, 30 நிமிடம் தங்கவை, அளவைக் குறி, DO சரிபார், வரம்பை உறுதிசெய் — பின் <span style=\"color:#1f6b44\">Task Completed</span> மற்றும் <span style=\"color:#5f4585\">Upload Media</span> செயல்.",
          voice: "பணிப்பாய்வுகள் வேலைக்குத் தேவையான அளவு நீளமானவை. இதோ ஒரு உண்மையானது — எஸ் வி முப்பது சோதனை. இது நடைபெறும் படிகளின் ஒரு முழுத் தொடரைக் கடக்கிறது: எம் எல் எஸ் எஸ் மாதிரியை எடுத்து முப்பது நிமிட தங்கலைத் தொடங்கு, முப்பது நிமிடம் கழித்து தங்கிய அளவைக் குறி, ஏரேஷன் பேசினில் கரைந்த ஆக்ஸிஜனைச் சரிபார், டி ஓ வரம்பில் உள்ளதா உறுதிசெய் — அப்போதுதான் Task Completed-ஐ அடைகிறது, பச்சையில், பின் ஒரு Upload Media செயல். அதே நான்கு படி வகைகள், கொஞ்சம் அதிகம். பணிப்பாய்வு உண்மையான செயல்முறையை, படிக்குப் படி, அப்படியே பிரதிபலிக்கிறது, எத்தனை படிகளானாலும்.",
        },
        {
          label: 'செயல் & நோக்கம்', title: 'செயல் படி, அமைப்பு',
          body: "இந்த <strong>Bar Screen Choked</strong> பணிப்பாய்வு ஒரு ஊதா <span style=\"color:#5f4585\"><strong>Action</strong></span>-இல் முடிகிறது — சான்றாக <em>Upload Media</em>. மேலே, பணிப்பாய்வின் <strong>Name</strong>, <strong>Description</strong>, <strong>Scope</strong> (இங்கே <em>System</em>) கட்டும்போது அமைக்கப்படுகின்றன — பின் பணியுடன் இணைத்துத் தூண்டப்படுகிறது.",
          voice: "ஒரு கடைசி உதாரணம் — பார் ஸ்கிரீன் சோக்டு பணிப்பாய்வு. ஸ்கிரீனைச் சுத்தம் செய், குப்பையை அகற்று, தடை இல்லை என்று உறுதிசெய், பச்சையில் Bar Screen Cleaned-ஐ அடை, ஒரு ஊதா Action படியால் முடி: சான்றாக மீடியா பதிவேற்று. அந்தச் செயல்தான் முந்தைய பாடத்தில் இயக்குநரை அடைந்தது. இவை அனைத்தும் மேலே கட்டமைக்கப்படுகின்றன: பணிப்பாய்வுக்கு ஒரு பெயர், விளக்கம், ஒரு நோக்கம் கிடைக்கிறது — இங்கே System-ஆக அமைக்கப்பட்டுள்ளது, அதாவது சிஸ்டம் முழுவதும் கிடைக்கிறது, ஆனால் ஒரு குறிப்பிட்ட பயனர் குழுவுக்குக் குறுக்கலாம். பணிப்பாய்வைக் கட்டு, பணியுடன் இணை, பணி எப்படித் தூண்டப்படும் என்று அமை — மீண்டும் வரும் அல்லது நிபந்தனை — முழு வளையமும் முழுமை. இதுதான் பணிகள், தொடக்கம் முதல் முடிவு வரை: ஒரு தெளிவான வேலை, பணிப்பாய்வால் இயக்கப்பட்டு, இயக்குநரால் செய்யப்பட்டு நிரூபிக்கப்படுகிறது.",
          tip: { type: 'upNextLabel', text: 'பணிப்பாய்வை ஒருமுறை கட்டு → பணியுடன் இணை → தூண்டு (மீண்டும் வரும் அல்லது நிபந்தனை). நான்கு படி வகைகள்: To Do, In Progress, Done, Action.' },
        },
      ],
    },
    mr: {
      title: 'टास्कमागचे<br><em>वर्कफ्लो.</em>',
      subtitle: 'प्रत्येक टास्क एका वर्कफ्लोने आधारलेले — टाइप केलेल्या टप्प्यांची साखळी, सिस्टममध्ये एकदा बांधलेली.',
      chapter: 'अध्याय सात · टास्क कसे बांधले जाते',
      steps: [
        {
          label: 'वर्कफ्लो', title: 'टास्कमागची साखळी',
          body: "<strong>वर्कफ्लो</strong> म्हणजे टास्क ज्या टप्प्यांतून जाते त्यांची साखळी — कॅनव्हासवर डावीकडून उजवीकडे. हा स्लज वेस्टिंगमागचा आहे: <em>तपासा</em>, मग <em>व्हॉल्व्ह समायोजित</em>, मग <em>निकाल</em>. प्रत्येक बॉक्स एक टप्पा; बाण सुरुवातीपासून शेवटपर्यंतचा मार्ग.",
          voice: "मागच्या धड्यात ऑपरेटरने टास्कच्या टप्प्यांतून टॅप केले. ते टप्पे इथूनच येतात — वर्कफ्लो. वर्कफ्लो म्हणजे फक्त टास्क ज्या टप्प्यांतून जाते त्यांची साखळी, कॅनव्हासवर डावीकडून उजवीकडे मांडलेली. हा आहे अगदी तोच जो आत्ताच्या स्लज वेस्टिंग टास्कमागे होता: एस व्ही तपासा, मग वेस्टिंग व्हॉल्व्ह समायोजित करा, मग निकाल — एस व्ही राखले. प्रत्येक बॉक्स एक टप्पा आहे, आणि बाण टास्क सुरुवातीपासून शेवटपर्यंत घेत असलेला मार्ग दाखवतात. हे एकदा बांधा, टास्कला जोडा, आणि ज्या ऑपरेटरला ते टास्क मिळेल तो अगदी याच टप्प्यांनी मार्गदर्शित होतो.",
        },
        {
          label: 'टप्पा प्रकार', title: 'To Do, In Progress, Done, Action',
          body: "टप्पे चार <strong>प्रकारांचे</strong>, रंग-कोडित: <span style=\"color:#9c6f00\">To Do</span> (सुरुवात), <span style=\"color:#8a4b1d\">In Progress</span> (काम), <span style=\"color:#1f6b44\">Done</span> (निकाल), आणि <span style=\"color:#5f4585\">Action</span> (शेवटचा मीडिया अपलोड किंवा सूचना).",
          voice: "प्रत्येक टप्पा चार प्रकारांपैकी एक आहे, आणि रंग कोणता ते सांगतात. To Do, पिवळ्यात, सुरुवात — टास्क सुरू करणारा टप्पा. In Progress, नारिंगीत, प्रत्यक्ष काम — यांपैकी अनेक असू शकतात. Done, हिरव्यात, निकाल — स्पष्टपणे ठरवलेला शेवट. आणि Action, जांभळ्यात, एक विशेष शेवटचा टप्पा: काम पूर्ण झाल्यावर आपोआप मीडिया अपलोड किंवा सूचना. हे चार प्रकार हीच संपूर्ण शब्दसंपदा — प्रत्येक वर्कफ्लो, साधा असो वा लांब, फक्त यांतूनच बांधला जातो.",
        },
        {
          label: 'To Do', title: 'कुठे सुरू होते',
          body: "प्रत्येक वर्कफ्लो एका <span style=\"color:#9c6f00\"><strong>To Do</strong></span> टप्प्याने उघडतो — ऑपरेटर पहिल्यांदा पाहतो ती सुरुवात. इथे ती आहे <em>Check SV and expected sludge generated per day.</em> टास्क ट्रिगर झाल्यावर याच टप्प्यावर येते.",
          voice: "चला हा वर्कफ्लो पाहू. तो To Do टप्प्याने सुरू होतो — डावीकडचा पिवळा. ही सुरुवात आहे, टास्क ट्रिगर होताच ऑपरेटर ज्यावर येतो तो टप्पा. इथे लिहिले आहे: एस व्ही आणि दररोज अपेक्षित स्लज तपासा. साधे, स्पष्ट, आणि हे नेहमी ऑपरेटर पुष्टी करतो ती पहिली गोष्ट. प्रत्येक वर्कफ्लोला नेमका एक सुरुवातीचा बिंदू असतो, म्हणून टास्क कुठे सुरू होते याबद्दल कधीच गोंधळ नाही.",
        },
        {
          label: 'Done', title: 'कुठे संपते',
          body: "बाणांसह, वर्कफ्लो त्याच्या <span style=\"color:#1f6b44\"><strong>Done</strong></span> टप्प्यावर पोहोचतो — निकाल सांगणारा हिरवा बॉक्स: <em>SV राखले आहे.</em> ऑपरेटर इथे पोहोचला की, काम व्याख्येनुसार पूर्ण.",
          voice: "बाणांसह उजवीकडे जा आणि तुम्ही Done टप्प्यावर पोहोचता — हिरवा बॉक्स. हा निकाल स्पष्ट सांगतो: एस व्ही राखले आहे; अपेक्षित आणि गणना केलेली स्लज वेस्टिंग जवळपास समान. वर्कफ्लो का महत्त्वाचे याचे हेच हृदय. Done म्हणजे फक्त मी संपवले नाही — यश प्रत्यक्षात कसे दिसते ते सांगणारा ठरवलेला निकाल. ऑपरेटरचे टास्क या हिरव्या टप्प्यावर पोहोचले की, काम व्याख्येनुसार पूर्ण आणि बरोबर.",
        },
        {
          label: 'लांब', title: 'वर्कफ्लो कामाइतका लांब असू शकतो',
          body: "वर्कफ्लो कामानुसार वाढतात. ही <strong>SV-30</strong> तपासणी अनेक <span style=\"color:#8a4b1d\">In Progress</span> टप्प्यांतून जाते — नमुना घ्या, 30 मिनिटे सेटल करा, आकारमान नोंदवा, DO तपासा, रेंज पुष्टी करा — मग <span style=\"color:#1f6b44\">Task Completed</span> आणि <span style=\"color:#5f4585\">Upload Media</span> अॅक्शन.",
          voice: "वर्कफ्लो कामाला जितके लागेल तितके लांब असतात. हा आहे एक खरा — एस व्ही तीस तपासणी. ती इन-प्रोग्रेस टप्प्यांच्या संपूर्ण क्रमातून जाते: एम एल एस एस नमुना घ्या आणि तीस मिनिटांचे सेटलिंग सुरू करा, तीस मिनिटांनंतर सेटल झालेले आकारमान नोंदवा, एरेशन बेसिनवर विरघळलेला ऑक्सिजन तपासा, डी ओ रेंजमध्ये आहे याची पुष्टी करा — आणि तेव्हाच Task Completed वर पोहोचते, हिरव्यात, मग एक Upload Media अॅक्शन. तेच चार टप्पा प्रकार, फक्त जास्त. वर्कफ्लो खऱ्या प्रक्रियेला, टप्प्या-टप्प्याने, हुबेहूब प्रतिबिंबित करतो, कितीही टप्पे लागोत.",
        },
        {
          label: 'अॅक्शन व स्कोप', title: 'अॅक्शन टप्पा, आणि कॉन्फिगरेशन',
          body: "हा <strong>Bar Screen Choked</strong> वर्कफ्लो एका जांभळ्या <span style=\"color:#5f4585\"><strong>Action</strong></span>वर संपतो — पुरावा म्हणून <em>Upload Media</em>. वर, वर्कफ्लोचे <strong>Name</strong>, <strong>Description</strong> आणि <strong>Scope</strong> (इथे <em>System</em>) बांधताना सेट होतात — मग टास्कला जोडून ट्रिगर.",
          voice: "एक शेवटचे उदाहरण — बार स्क्रीन चोक्ड वर्कफ्लो. स्क्रीन स्वच्छ करा, कचरा काढा, कोणताही अडथळा नाही याची खात्री करा, हिरव्यात Bar Screen Cleaned वर पोहोचा, आणि एका जांभळ्या Action टप्प्याने संपवा: पुरावा म्हणून मीडिया अपलोड. तोच अॅक्शन मागच्या धड्यात ऑपरेटरपर्यंत पोहोचला होता. आणि हे सर्व वर कॉन्फिगर होते: वर्कफ्लोला एक नाव, एक वर्णन, आणि एक स्कोप मिळतो — इथे तो System वर सेट आहे, म्हणजे संपूर्ण सिस्टममध्ये उपलब्ध, जरी तो एखाद्या विशिष्ट यूझर ग्रुपपुरता मर्यादित करता येतो. वर्कफ्लो बांधा, टास्कला जोडा, टास्क कसे ट्रिगर होईल ते सेट करा — आवर्ती किंवा अटीवर — आणि संपूर्ण चक्र पूर्ण. हेच आहे टास्क, सुरुवातीपासून शेवटपर्यंत: एक स्पष्ट काम, वर्कफ्लोने चालवलेले, ऑपरेटरने केलेले आणि सिद्ध केलेले.",
          tip: { type: 'upNextLabel', text: 'वर्कफ्लो एकदा बांधा → टास्कला जोडा → ट्रिगर करा (आवर्ती किंवा अटीवर). चार टप्पा प्रकार: To Do, In Progress, Done, Action.' },
        },
      ],
    },
  },
};

export default lesson;
