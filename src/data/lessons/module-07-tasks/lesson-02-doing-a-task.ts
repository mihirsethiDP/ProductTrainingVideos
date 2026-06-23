import type { Lesson, TaskDetail, TaskData } from '../../types';

/**
 * Module 7 · Lesson 2 — Doing a Task.   Tag: M7.L2
 * Open a task and walk it from its start step to done. Each tap advances the
 * workflow (To Do → In Progress → Done) with a "Transition updated" toast, and
 * the final Action step asks for media / a notification before it's complete.
 * Modelled on the "Perform sludge wasting based on SV" task from the video.
 */

const WORKFLOW: TaskDetail['workflow'] = [
  { label: 'Check SV and expected sludge generated per day', type: 'todo' },
  { label: 'Adjust the sludge wasting valve to maintain the SV in the range.', type: 'inProgress' },
  { label: 'SV is maintained. Expected and Calculated sludge wasting is nearly same.', type: 'done' },
  { label: 'Upload Media', type: 'action' },
];

const BASE: Omit<TaskDetail, 'currentStep'> = {
  name: 'Perform sludge wasting based on SV.',
  desc: 'Perform sludge wasting based on SV to maintain optimal biomass levels. Adjust wasting volume as per process requirements and SV trends.',
  steps: [
    'Check SV in the aeration tank at the start of the shift to determine the need for sludge wasting.',
    'Calculate the required sludge volume to be wasted based on SV trends.',
    'Open the sludge wasting valve to begin wasting.',
    'Monitor the SV while wasting so it moves toward the target range.',
    'Stop the wasting pump (or close the valve) once the target volume is reached.',
    'Record the SV and volume wasted in the logbook and DigitalPaani system.',
  ],
  skills: ['Operator'],
  meta: [
    { label: 'Plant', value: 'STP' },
    { label: 'Priority', value: 'Medium' },
    { label: 'Task Type', value: 'Routine Process' },
    { label: 'Complexity', value: '5' },
    { label: 'Created At', value: '10 Sep 2025, 04:00 PM' },
    { label: 'Deadline', value: '10 Sep 2025, 05:00 PM' },
  ],
  workflow: WORKFLOW,
};

const detail = (currentStep: number, extra: Partial<TaskDetail> = {}): TaskDetail => ({ ...BASE, currentStep, ...extra });
const D = (currentStep: number, highlight: TaskData['highlight'], extra?: Partial<TaskDetail>): { task: TaskData } => ({
  task: { mode: 'detail', detail: detail(currentStep, extra), highlight },
});

const lesson: Lesson = {
  id: 'lesson-02-doing-a-task',
  moduleId: 'module-07-tasks',
  lessonNumber: 2,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'task', caption: 'The method — Details', widgetState: D(0, 'details'), cursor: [{ at: 0.3, x: 40, y: 35 }] },
    { mode: 'widget', widget: 'task', caption: 'Skills & Additional Details', widgetState: D(0, 'meta'), cursor: [{ at: 0.3, x: 40, y: 55 }] },
    { mode: 'widget', widget: 'task', caption: 'The start step', widgetState: D(0, 'step', { expanded: true }), cursor: [{ at: 0.4, x: 50, y: 78 }, { at: 0.8, x: 50, y: 78, click: true }] },
    { mode: 'widget', widget: 'task', caption: 'Transition: In Progress', widgetState: D(1, 'step', { toast: true }), cursor: [{ at: 0.5, x: 50, y: 78, click: true }] },
    { mode: 'widget', widget: 'task', caption: 'Transition: Done', widgetState: D(2, 'step', { toast: true }), cursor: [{ at: 0.5, x: 50, y: 78, click: true }] },
    { mode: 'widget', widget: 'task', caption: 'The Action step', widgetState: D(3, 'action', { showMedia: true }), cursor: [{ at: 0.4, x: 50, y: 82 }] },
  ],
  content: {
    en: {
      title: 'Doing a<br><em>Task.</em>',
      subtitle: 'Open a task and walk it from its start step all the way to done — one tap at a time.',
      chapter: 'Chapter Seven · From Start to Done',
      steps: [
        {
          label: 'The method', title: 'Details tell you how',
          body: "Open a task and the <strong>Details</strong> lay out the method — the numbered steps to carry the job out correctly. For sludge wasting: check the SV, calculate the volume, open the valve, monitor, stop at target, and record it. It's the standard procedure, right where the operator needs it.",
          voice: "Let's open a task and actually do it. We've picked Perform sludge wasting based on S V. The first thing you see is the Details — the method, written out as numbered steps, so the operator knows exactly how to carry the job out correctly. For this task: check the S V in the aeration tank, calculate how much sludge to waste, open the wasting valve, monitor the S V as it moves toward target, stop once you hit the target volume, and finally record everything in the logbook and the DigitalPaani system. It's the standard operating procedure, right where the operator needs it.",
        },
        {
          label: 'Context', title: 'Skills & Additional Details',
          body: "Below the method, the task carries its <strong>Skills</strong> and <strong>Additional Details</strong>: the plant, priority, task type, complexity, and the timestamps — when it was created, its deadline, and the expected completion. Everything the operator needs to judge the job at a glance.",
          voice: "Below the method, the task carries its context. The skills required — here, Operator. And a block of additional details: which plant it's for, its priority, the task type — this one is a routine process — its complexity rating, and the key timestamps: when it was created, its deadline, and the expected completion time. So before lifting a finger, the operator understands exactly what this job is, how urgent it is, and when it's due.",
        },
        {
          label: 'Start', title: 'The current step',
          body: "At the bottom sits the <strong>workflow</strong> that drives the task. It opens on the first step — the <strong>To Do</strong> start. The operator taps it to confirm that step and move the task forward. The very next step is shown just below, so they always know what's coming.",
          voice: "Now here's what makes a task a task, and not just a description. At the bottom sits the workflow that actually drives it — a chain of steps the operator works through. It opens on the very first step, the start, shown in yellow as a To Do. The operator reads it — check S V and expected sludge generated per day — and when that's done, they simply tap it. Notice the next step is already shown just below, so they always know what's coming. Let's tap it.",
        },
        {
          label: 'In Progress', title: 'Tap to transition',
          body: "Tap, and the task <strong>transitions</strong> — a green <em>\"Transition updated successfully\"</em> confirms it, and the current step advances to the <strong>In Progress</strong> step. The operator carries that out — adjusting the sludge wasting valve — and taps again when it's done.",
          voice: "And there it is — a green toast, transition updated successfully, and the task has moved forward. The current step is now the in-progress step: adjust the sludge wasting valve to maintain the S V in the range. The operator goes and does exactly that out in the plant, and when it's done, taps again. Each tap is one clean transition, logged with a timestamp, so there's a complete record of who moved the task and when.",
        },
        {
          label: 'Done', title: 'Reaching the end',
          body: "One more tap and the task reaches its <strong>Done</strong> step — shown in green: <em>SV is maintained; expected and calculated sludge wasting is nearly the same.</em> The job itself is finished; the workflow has carried the operator cleanly from start to outcome.",
          voice: "One more tap, another transition confirmed, and we've reached the done step — shown in green. S V is maintained; the expected and calculated sludge wasting are nearly the same. That's the outcome we wanted. The workflow has carried the operator all the way from the start, through the work, to a clearly defined finish. No guesswork about whether the job is really complete — the step itself says so.",
        },
        {
          label: 'Action', title: 'Proof, then complete',
          body: "Many workflows end with an <strong>Action</strong> step — set up during configuration. Here it's <strong>Upload Media</strong>: a photo as proof. It could just as easily be a <strong>communication</strong> — notifying the supervisor or anyone chosen. Once that's done, the task is complete and a full <strong>history</strong> of every transition is kept.",
          voice: "And there's often one final piece. Many workflows end with an action step, configured when the workflow was set up. Here it's Upload Media — the operator attaches a photo as proof that the work was actually done. It doesn't have to be a photo; the action could just as easily be a communication — automatically notifying the supervisor, or anyone the workflow was configured to alert. Once that action is complete, the task is truly done — it drops out of the pending list, and a full history of every transition, with timestamps, stays on record. That's a task, start to finish.",
          tip: { type: 'rememberLabel', text: 'Each tap = one logged transition. The final Action step (media or a notification) is set during configuration.' },
        },
      ],
    },
    hi: {
      title: 'टास्क<br><em>करना.</em>',
      subtitle: 'एक टास्क खोलें और उसे शुरुआती चरण से पूरा होने तक चलाएँ — एक-एक टैप में।',
      chapter: 'अध्याय सात · शुरू से पूरा तक',
      steps: [
        {
          label: 'विधि', title: 'Details बताते हैं कैसे',
          body: "टास्क खोलें और <strong>Details</strong> विधि बताते हैं — काम सही ढंग से करने के क्रमांकित चरण। स्लज वेस्टिंग के लिए: SV जाँचें, मात्रा निकालें, वाल्व खोलें, निगरानी करें, लक्ष्य पर रोकें, और दर्ज करें।",
          voice: "चलिए एक टास्क खोलकर उसे सचमुच करते हैं। हमने चुना है — परफ़ॉर्म स्लज वेस्टिंग बेस्ड ऑन एस वी। पहली चीज़ जो दिखती है वह है Details — विधि, क्रमांकित चरणों में लिखी हुई, ताकि ऑपरेटर ठीक-ठीक जाने कि काम सही ढंग से कैसे करना है। इस टास्क के लिए: एयरेशन टैंक में एस वी जाँचें, कितनी स्लज वेस्ट करनी है निकालें, वेस्टिंग वाल्व खोलें, एस वी की निगरानी करें जैसे वह लक्ष्य की ओर बढ़ती है, लक्ष्य मात्रा पर रोकें, और अंत में सब कुछ लॉगबुक और डिजिटलपानी सिस्टम में दर्ज करें। यह मानक प्रक्रिया है, ठीक वहाँ जहाँ ऑपरेटर को चाहिए।",
        },
        {
          label: 'संदर्भ', title: 'स्किल्स व Additional Details',
          body: "विधि के नीचे टास्क के <strong>Skills</strong> और <strong>Additional Details</strong> हैं: प्लांट, प्राथमिकता, टास्क प्रकार, जटिलता, और टाइमस्टैम्प — कब बना, समय-सीमा, और अपेक्षित पूर्णता।",
          voice: "विधि के नीचे टास्क अपना संदर्भ रखता है। ज़रूरी स्किल्स — यहाँ, Operator। और अतिरिक्त विवरण का एक खंड: किस प्लांट के लिए है, उसकी प्राथमिकता, टास्क प्रकार — यह एक रूटीन प्रोसेस है — उसकी जटिलता रेटिंग, और मुख्य टाइमस्टैम्प: कब बनाया गया, समय-सीमा, और अपेक्षित पूर्णता समय। तो उँगली उठाने से पहले ही ऑपरेटर ठीक-ठीक समझता है कि यह काम क्या है, कितना ज़रूरी है, और कब तक करना है।",
        },
        {
          label: 'शुरू', title: 'वर्तमान चरण',
          body: "नीचे वह <strong>वर्कफ़्लो</strong> है जो टास्क चलाता है। यह पहले चरण पर खुलता है — <strong>To Do</strong> शुरुआत। ऑपरेटर उसे टैप करके पुष्टि करता और टास्क आगे बढ़ाता है। अगला चरण ठीक नीचे दिखता है।",
          voice: "अब यही चीज़ टास्क को टास्क बनाती है, सिर्फ़ विवरण नहीं। नीचे वह वर्कफ़्लो है जो उसे सचमुच चलाता है — चरणों की एक श्रृंखला जिसे ऑपरेटर पार करता है। यह सबसे पहले चरण पर खुलता है, शुरुआत, पीले रंग में To Do के रूप में। ऑपरेटर उसे पढ़ता है — एस वी और प्रति दिन अपेक्षित स्लज जाँचें — और जब वह हो जाए, बस टैप करता है। ध्यान दें अगला चरण पहले से ठीक नीचे दिखता है, तो हमेशा पता रहता है आगे क्या है। चलिए टैप करते हैं।",
        },
        {
          label: 'इन प्रोग्रेस', title: 'टैप करके ट्रांज़िशन',
          body: "टैप करें, और टास्क <strong>ट्रांज़िशन</strong> करता है — हरा <em>\"Transition updated successfully\"</em> पुष्टि करता है, और वर्तमान चरण <strong>In Progress</strong> पर बढ़ता है। ऑपरेटर वह करता — स्लज वेस्टिंग वाल्व समायोजित — और फिर टैप करता है।",
          voice: "और यह रहा — एक हरा टोस्ट, ट्रांज़िशन अपडेटेड सक्सेसफ़ुली, और टास्क आगे बढ़ गया। वर्तमान चरण अब इन-प्रोग्रेस चरण है: स्लज वेस्टिंग वाल्व को समायोजित करें ताकि एस वी रेंज में बना रहे। ऑपरेटर प्लांट में जाकर ठीक वही करता है, और हो जाने पर फिर टैप करता है। हर टैप एक साफ़ ट्रांज़िशन है, टाइमस्टैम्प के साथ लॉग किया गया, तो पूरा रिकॉर्ड रहता है कि टास्क किसने और कब बढ़ाया।",
        },
        {
          label: 'हो गया', title: 'अंत तक पहुँचना',
          body: "एक और टैप और टास्क अपने <strong>Done</strong> चरण पर पहुँचता है — हरे में: <em>SV बना हुआ है; अपेक्षित और गणना की गई स्लज वेस्टिंग लगभग समान है।</em> काम ख़त्म; वर्कफ़्लो ने ऑपरेटर को शुरू से परिणाम तक पहुँचाया।",
          voice: "एक और टैप, एक और ट्रांज़िशन की पुष्टि, और हम done चरण पर पहुँच गए — हरे में दिखा। एस वी बना हुआ है; अपेक्षित और गणना की गई स्लज वेस्टिंग लगभग समान हैं। यही परिणाम हम चाहते थे। वर्कफ़्लो ने ऑपरेटर को शुरुआत से, काम के बीच से होते हुए, एक स्पष्ट रूप से परिभाषित अंत तक पहुँचाया। कोई अंदाज़ा नहीं कि काम सचमुच पूरा हुआ या नहीं — चरण ख़ुद यह कहता है।",
        },
        {
          label: 'एक्शन', title: 'प्रमाण, फिर पूर्ण',
          body: "कई वर्कफ़्लो एक <strong>Action</strong> चरण पर ख़त्म होते हैं — कॉन्फ़िगरेशन में सेट। यहाँ यह <strong>Upload Media</strong> है: प्रमाण के रूप में फ़ोटो। यह एक <strong>संचार</strong> भी हो सकता है — सुपरवाइज़र या किसी को सूचित करना। फिर टास्क पूर्ण, और हर ट्रांज़िशन का <strong>इतिहास</strong> रखा जाता है।",
          voice: "और अक्सर एक आख़िरी हिस्सा होता है। कई वर्कफ़्लो एक एक्शन चरण पर ख़त्म होते हैं, जो वर्कफ़्लो सेट करते समय कॉन्फ़िगर होता है। यहाँ यह Upload Media है — ऑपरेटर प्रमाण के रूप में एक फ़ोटो जोड़ता है कि काम सचमुच हुआ। यह फ़ोटो होना ज़रूरी नहीं; एक्शन एक संचार भी हो सकता है — सुपरवाइज़र को, या जिसे भी वर्कफ़्लो में सेट किया हो, अपने-आप सूचित करना। वह एक्शन पूरा होते ही, टास्क सचमुच हो गया — यह पेंडिंग सूची से हट जाता है, और हर ट्रांज़िशन का पूरा इतिहास, टाइमस्टैम्प के साथ, रिकॉर्ड पर रहता है। यही है एक टास्क, शुरू से अंत तक।",
          tip: { type: 'rememberLabel', text: 'हर टैप = एक लॉग किया ट्रांज़िशन। आख़िरी Action चरण (मीडिया या सूचना) कॉन्फ़िगरेशन में सेट होता है।' },
        },
      ],
    },
    ta: {
      title: 'பணியைச்<br><em>செய்தல்.</em>',
      subtitle: 'ஒரு பணியைத் திறந்து தொடக்க நிலையிலிருந்து முடிவு வரை நகர்த்துங்கள் — ஒவ்வொரு தட்டலாக.',
      chapter: 'அத்தியாயம் ஏழு · தொடக்கம் முதல் முடிவு வரை',
      steps: [
        {
          label: 'முறை', title: 'Details எப்படி என்று சொல்கின்றன',
          body: "ஒரு பணியைத் திறந்தால் <strong>Details</strong> முறையை விவரிக்கின்றன — வேலையைச் சரியாகச் செய்ய எண்ணிடப்பட்ட படிகள். கசடு வெளியேற்றத்துக்கு: SV சரிபார், அளவைக் கணக்கிடு, வால்வைத் திற, கண்காணி, இலக்கில் நிறுத்து, பதிவு செய்.",
          voice: "ஒரு பணியைத் திறந்து உண்மையில் செய்வோம். நாங்கள் தேர்ந்தது — பெர்ஃபார்ம் ஸ்லட்ஜ் வேஸ்டிங் பேஸ்டு ஆன் எஸ் வி. முதலில் தெரிவது Details — முறை, எண்ணிடப்பட்ட படிகளாக எழுதப்பட்டது, இயக்குநர் வேலையைச் சரியாக எப்படிச் செய்வது என்று துல்லியமாக அறிய. இந்தப் பணிக்கு: ஏரேஷன் தொட்டியில் எஸ் வி சரிபார், எவ்வளவு கசடு வெளியேற்ற வேண்டும் என்று கணக்கிடு, வேஸ்டிங் வால்வைத் திற, எஸ் வி இலக்கை நோக்கி நகர்வதைக் கண்காணி, இலக்கு அளவில் நிறுத்து, இறுதியில் எல்லாவற்றையும் லாக்புக் மற்றும் டிஜிட்டல்பானி சிஸ்டத்தில் பதிவு செய். இது நிலையான செயல்முறை, இயக்குநருக்குத் தேவையான இடத்தில்.",
        },
        {
          label: 'சூழல்', title: 'திறன்கள் & Additional Details',
          body: "முறைக்குக் கீழே பணியின் <strong>Skills</strong> மற்றும் <strong>Additional Details</strong>: ஆலை, முன்னுரிமை, பணி வகை, சிக்கல், டைம்ஸ்டாம்ப்கள் — உருவாக்கப்பட்ட நேரம், காலக்கெடு, எதிர்பார்க்கப்படும் நிறைவு.",
          voice: "முறைக்குக் கீழே பணி அதன் சூழலைக் கொண்டுள்ளது. தேவையான திறன்கள் — இங்கே, Operator. மேலும் கூடுதல் விவரங்களின் ஒரு பகுதி: எந்த ஆலைக்கு, அதன் முன்னுரிமை, பணி வகை — இது ஒரு வழக்கமான செயல்முறை — அதன் சிக்கல் மதிப்பீடு, முக்கிய டைம்ஸ்டாம்ப்கள்: எப்போது உருவாக்கப்பட்டது, காலக்கெடு, எதிர்பார்க்கப்படும் நிறைவு நேரம். எனவே விரலை உயர்த்தும் முன்னரே இயக்குநர் இந்த வேலை என்ன, எவ்வளவு அவசரம், எப்போது செய்ய வேண்டும் என்று துல்லியமாகப் புரிந்துகொள்கிறார்.",
        },
        {
          label: 'தொடக்கம்', title: 'தற்போதைய படி',
          body: "கீழே பணியை இயக்கும் <strong>பணிப்பாய்வு</strong> உள்ளது. இது முதல் படியில் — <strong>To Do</strong> தொடக்கத்தில் — திறக்கிறது. இயக்குநர் அதைத் தட்டி உறுதிசெய்து பணியை முன்னேற்றுகிறார். அடுத்த படி கீழே காட்டப்படுகிறது.",
          voice: "இப்போது ஒரு பணியைப் பணியாக்குவது இதுதான், வெறும் விளக்கம் அல்ல. கீழே அதை உண்மையில் இயக்கும் பணிப்பாய்வு உள்ளது — இயக்குநர் கடக்கும் படிகளின் சங்கிலி. இது முதல் படியில் திறக்கிறது, தொடக்கம், மஞ்சள் நிறத்தில் To Do ஆக. இயக்குநர் படிக்கிறார் — எஸ் வி மற்றும் ஒரு நாளைக்கு எதிர்பார்க்கப்படும் கசடு சரிபார் — அது முடிந்ததும், வெறுமனே தட்டுகிறார். அடுத்த படி ஏற்கனவே கீழே காட்டப்படுவதைக் கவனியுங்கள், எனவே அடுத்து என்ன என்று எப்போதும் தெரியும். தட்டுவோம்.",
        },
        {
          label: 'நடைபெறுகிறது', title: 'தட்டி நகர்த்து',
          body: "தட்டுங்கள், பணி <strong>நகர்கிறது</strong> — பச்சை <em>\"Transition updated successfully\"</em> உறுதிசெய்கிறது, தற்போதைய படி <strong>In Progress</strong>-க்கு முன்னேறுகிறது. இயக்குநர் அதைச் செய்து — கசடு வேஸ்டிங் வால்வை சரிசெய்து — மீண்டும் தட்டுகிறார்.",
          voice: "இதோ — ஒரு பச்சை டோஸ்ட், டிரான்சிஷன் அப்டேட்டட் சக்சஸ்ஃபுல்லி, பணி முன்னேறிவிட்டது. தற்போதைய படி இப்போது நடைபெறும் படி: எஸ் வி-ஐ வரம்பில் வைக்க கசடு வேஸ்டிங் வால்வை சரிசெய். இயக்குநர் ஆலையில் சென்று அதையே செய்து, முடிந்ததும் மீண்டும் தட்டுகிறார். ஒவ்வொரு தட்டலும் ஒரு தெளிவான நகர்வு, டைம்ஸ்டாம்ப்புடன் பதிவாகிறது, எனவே பணியை யார் எப்போது நகர்த்தினார் என்ற முழுப் பதிவு இருக்கும்.",
        },
        {
          label: 'முடிந்தது', title: 'முடிவை அடைதல்',
          body: "இன்னொரு தட்டல், பணி அதன் <strong>Done</strong> படியை அடைகிறது — பச்சையில்: <em>SV பராமரிக்கப்படுகிறது; எதிர்பார்க்கப்பட்ட மற்றும் கணக்கிடப்பட்ட கசடு வேஸ்டிங் கிட்டத்தட்ட சமம்.</em> வேலை முடிந்தது; பணிப்பாய்வு இயக்குநரை தொடக்கம் முதல் முடிவு வரை நகர்த்தியது.",
          voice: "இன்னொரு தட்டல், மற்றொரு நகர்வு உறுதிசெய்யப்பட்டது, done படியை அடைந்தோம் — பச்சையில் காட்டப்பட்டது. எஸ் வி பராமரிக்கப்படுகிறது; எதிர்பார்க்கப்பட்ட மற்றும் கணக்கிடப்பட்ட கசடு வேஸ்டிங் கிட்டத்தட்ட சமம். இதுதான் நாம் விரும்பிய முடிவு. பணிப்பாய்வு இயக்குநரை தொடக்கத்திலிருந்து, வேலையின் வழியாக, தெளிவாக வரையறுக்கப்பட்ட முடிவுக்கு நகர்த்தியது. வேலை உண்மையில் முடிந்ததா என்ற ஊகம் இல்லை — படியே அதைச் சொல்கிறது.",
        },
        {
          label: 'செயல்', title: 'சான்று, பின் நிறைவு',
          body: "பல பணிப்பாய்வுகள் ஒரு <strong>Action</strong> படியில் முடிகின்றன — அமைப்பின்போது அமைக்கப்படும். இங்கே <strong>Upload Media</strong>: சான்றாக ஒரு புகைப்படம். இது ஒரு <strong>தொடர்பு</strong>வாகவும் இருக்கலாம் — மேற்பார்வையாளரை அல்லது யாரையும் அறிவிப்பது. பின் பணி நிறைவு, ஒவ்வொரு நகர்வின் <strong>வரலாறு</strong> வைக்கப்படுகிறது.",
          voice: "பெரும்பாலும் ஒரு இறுதிப் பகுதி உண்டு. பல பணிப்பாய்வுகள் ஒரு செயல் படியில் முடிகின்றன, பணிப்பாய்வை அமைக்கும்போது கட்டமைக்கப்படுகிறது. இங்கே இது Upload Media — வேலை உண்மையில் செய்யப்பட்டது என்பதற்குச் சான்றாக இயக்குநர் ஒரு புகைப்படத்தை இணைக்கிறார். இது புகைப்படமாக இருக்க வேண்டியதில்லை; செயல் ஒரு தொடர்பாகவும் இருக்கலாம் — மேற்பார்வையாளரையோ, பணிப்பாய்வில் அமைக்கப்பட்ட எவரையோ தானாக அறிவிப்பது. அந்தச் செயல் முடிந்ததும், பணி உண்மையில் முடிந்தது — நிலுவைப் பட்டியலிலிருந்து விலகுகிறது, ஒவ்வொரு நகர்வின் முழு வரலாறும், டைம்ஸ்டாம்ப்புடன், பதிவில் இருக்கும். இதுதான் ஒரு பணி, தொடக்கம் முதல் முடிவு வரை.",
          tip: { type: 'rememberLabel', text: 'ஒவ்வொரு தட்டல் = ஒரு பதிவான நகர்வு. இறுதி Action படி (மீடியா அல்லது அறிவிப்பு) அமைப்பின்போது அமைக்கப்படுகிறது.' },
        },
      ],
    },
    mr: {
      title: 'टास्क<br><em>करणे.</em>',
      subtitle: 'एक टास्क उघडा आणि सुरुवातीच्या टप्प्यापासून पूर्ण होईपर्यंत चालवा — एक-एक टॅपने.',
      chapter: 'अध्याय सात · सुरुवातीपासून पूर्णापर्यंत',
      steps: [
        {
          label: 'पद्धत', title: 'Details कसे ते सांगतात',
          body: "टास्क उघडा आणि <strong>Details</strong> पद्धत मांडतात — काम योग्य रीतीने करायचे क्रमांकित टप्पे. स्लज वेस्टिंगसाठी: SV तपासा, आकारमान काढा, व्हॉल्व्ह उघडा, देखरेख करा, लक्ष्यावर थांबा, आणि नोंदवा.",
          voice: "चला एक टास्क उघडून ते प्रत्यक्ष करूया. आम्ही निवडले आहे — परफॉर्म स्लज वेस्टिंग बेस्ड ऑन एस व्ही. पहिली गोष्ट दिसते ती Details — पद्धत, क्रमांकित टप्प्यांत लिहिलेली, म्हणजे ऑपरेटरला नेमके कळते की काम योग्य रीतीने कसे करायचे. या टास्कसाठी: एरेशन टँकमध्ये एस व्ही तपासा, किती स्लज वेस्ट करायची ते काढा, वेस्टिंग व्हॉल्व्ह उघडा, एस व्ही लक्ष्याकडे जाताना देखरेख करा, लक्ष्य आकारमानावर थांबा, आणि शेवटी सर्व लॉगबुक व डिजिटलपानी सिस्टममध्ये नोंदवा. ही प्रमाणित प्रक्रिया आहे, अगदी जिथे ऑपरेटरला हवी तिथे.",
        },
        {
          label: 'संदर्भ', title: 'स्किल्स व Additional Details',
          body: "पद्धतीखाली टास्कचे <strong>Skills</strong> आणि <strong>Additional Details</strong>: प्लांट, प्राधान्य, टास्क प्रकार, गुंतागुंत, आणि टाइमस्टॅम्प — कधी तयार झाले, डेडलाइन, अपेक्षित पूर्णता.",
          voice: "पद्धतीखाली टास्क त्याचा संदर्भ ठेवते. लागणारी स्किल्स — इथे, Operator. आणि अतिरिक्त तपशिलांचा एक विभाग: कोणत्या प्लांटसाठी, त्याचे प्राधान्य, टास्क प्रकार — हा एक रूटीन प्रोसेस आहे — त्याची गुंतागुंत रेटिंग, आणि मुख्य टाइमस्टॅम्प: कधी तयार झाले, डेडलाइन, आणि अपेक्षित पूर्णता वेळ. म्हणून बोट उचलण्याआधीच ऑपरेटरला नेमके कळते की हे काम काय आहे, किती तातडीचे आहे, आणि कधीपर्यंत करायचे.",
        },
        {
          label: 'सुरुवात', title: 'सध्याचा टप्पा',
          body: "खाली तो <strong>वर्कफ्लो</strong> आहे जो टास्क चालवतो. तो पहिल्या टप्प्यावर — <strong>To Do</strong> सुरुवातीवर — उघडतो. ऑपरेटर तो टॅप करून पुष्टी करतो आणि टास्क पुढे नेतो. पुढचा टप्पा खाली दिसतो.",
          voice: "आता हीच गोष्ट टास्कला टास्क बनवते, फक्त वर्णन नाही. खाली तो वर्कफ्लो आहे जो प्रत्यक्ष चालवतो — टप्प्यांची एक साखळी जी ऑपरेटर पार करतो. तो पहिल्याच टप्प्यावर उघडतो, सुरुवात, पिवळ्या रंगात To Do म्हणून. ऑपरेटर तो वाचतो — एस व्ही आणि दररोज अपेक्षित स्लज तपासा — आणि ते झाले की फक्त टॅप करतो. लक्ष द्या पुढचा टप्पा आधीच खाली दिसतो, म्हणून पुढे काय आहे ते नेहमी कळते. चला टॅप करू.",
        },
        {
          label: 'इन प्रोग्रेस', title: 'टॅप करून ट्रांझिशन',
          body: "टॅप करा, आणि टास्क <strong>ट्रांझिशन</strong> होते — हिरवा <em>\"Transition updated successfully\"</em> पुष्टी करतो, आणि सध्याचा टप्पा <strong>In Progress</strong>वर पुढे जातो. ऑपरेटर ते करतो — स्लज वेस्टिंग व्हॉल्व्ह समायोजित — आणि पुन्हा टॅप करतो.",
          voice: "आणि हे बघा — एक हिरवा टोस्ट, ट्रांझिशन अपडेटेड सक्सेसफुली, आणि टास्क पुढे गेले. सध्याचा टप्पा आता इन-प्रोग्रेस टप्पा आहे: एस व्ही रेंजमध्ये ठेवण्यासाठी स्लज वेस्टिंग व्हॉल्व्ह समायोजित करा. ऑपरेटर प्लांटमध्ये जाऊन नेमके तेच करतो, आणि झाल्यावर पुन्हा टॅप करतो. प्रत्येक टॅप एक स्वच्छ ट्रांझिशन आहे, टाइमस्टॅम्पसह लॉग केलेले, म्हणून टास्क कोणी आणि कधी पुढे नेले याची पूर्ण नोंद राहते.",
        },
        {
          label: 'झाले', title: 'शेवटापर्यंत पोहोचणे',
          body: "आणखी एक टॅप आणि टास्क त्याच्या <strong>Done</strong> टप्प्यावर पोहोचते — हिरव्यात: <em>SV राखले आहे; अपेक्षित आणि गणना केलेली स्लज वेस्टिंग जवळपास समान.</em> काम संपले; वर्कफ्लोने ऑपरेटरला सुरुवातीपासून निकालापर्यंत नेले.",
          voice: "आणखी एक टॅप, आणखी एक ट्रांझिशन पुष्ट, आणि आपण done टप्प्यावर पोहोचलो — हिरव्यात दाखवले. एस व्ही राखले आहे; अपेक्षित आणि गणना केलेली स्लज वेस्टिंग जवळपास समान आहेत. हाच निकाल आपल्याला हवा होता. वर्कफ्लोने ऑपरेटरला सुरुवातीपासून, कामातून, स्पष्टपणे ठरवलेल्या शेवटापर्यंत नेले. काम खरेच पूर्ण झाले का याचा अंदाज नाही — टप्पा स्वतःच ते सांगतो.",
        },
        {
          label: 'अॅक्शन', title: 'पुरावा, मग पूर्ण',
          body: "अनेक वर्कफ्लो एका <strong>Action</strong> टप्प्यावर संपतात — कॉन्फिगरेशनमध्ये सेट. इथे ते <strong>Upload Media</strong> आहे: पुरावा म्हणून फोटो. ते एक <strong>संवाद</strong>ही असू शकते — पर्यवेक्षकाला किंवा कोणालाही कळवणे. मग टास्क पूर्ण, आणि प्रत्येक ट्रांझिशनचा <strong>इतिहास</strong> ठेवला जातो.",
          voice: "आणि बऱ्याचदा एक शेवटचा भाग असतो. अनेक वर्कफ्लो एका अॅक्शन टप्प्यावर संपतात, जो वर्कफ्लो सेट करताना कॉन्फिगर होतो. इथे तो Upload Media आहे — काम खरेच झाले याचा पुरावा म्हणून ऑपरेटर एक फोटो जोडतो. तो फोटोच असावा असे नाही; अॅक्शन एक संवादही असू शकतो — पर्यवेक्षकाला, किंवा वर्कफ्लोमध्ये जो सेट केला त्याला, आपोआप कळवणे. तो अॅक्शन पूर्ण होताच, टास्क खरेच झाले — ते पेंडिंग यादीतून बाहेर पडते, आणि प्रत्येक ट्रांझिशनचा पूर्ण इतिहास, टाइमस्टॅम्पसह, नोंदीवर राहतो. हेच आहे एक टास्क, सुरुवातीपासून शेवटपर्यंत.",
          tip: { type: 'rememberLabel', text: 'प्रत्येक टॅप = एक लॉग केलेले ट्रांझिशन. शेवटचा Action टप्पा (मीडिया किंवा सूचना) कॉन्फिगरेशनमध्ये सेट होतो.' },
        },
      ],
    },
  },
};

export default lesson;
