import type { Lesson, TaskRow } from '../../types';

/**
 * Persona short — OPERATIONAL (hidden module-shorts, PUBLIC: no login needed).
 * A ~2-minute forwardable reel for the people who run the plant: read the
 * data, enter readings, do tasks, act on insights. Deliberately generic — no
 * client data. NOTE: re-edit this short whenever a new module/lesson ships so
 * it always reflects the tool's current capabilities.
 */

const TASKS: TaskRow[] = [
  { name: 'Perform filter backwash', desc: 'Remove trapped impurities and restore filtration efficiency.', plant: 'Your Plant', priority: 'High', skills: ['Operator'], status: 'Pending' },
  { name: 'Bar screen cleaning', desc: 'Clear large solids and debris to protect downstream pumps.', plant: 'Your Plant', priority: 'Medium', skills: ['Operator'], status: 'Pending' },
  { name: 'Check aeration blower is in Auto', desc: 'Confirm the blower is running in auto mode.', plant: 'Your Plant', priority: 'Medium', skills: ['Operator'], status: 'Pending' },
];

const lesson: Lesson = {
  id: 'short-operational',
  moduleId: 'module-shorts',
  lessonNumber: 1,
  estimatedMinutes: 2,
  screenshots: {},
  layouts: [
    // S1 — read the data
    {
      mode: 'widget', widget: 'gauge', caption: 'Read your plant at a glance',
      widgetState: {
        accent: 'teal', title: 'Reading vs. safe range', value: '72', unitTag: 'Your Plant',
        min: 0, max: 100,
        thresholds: [
          { from: 0, to: 35, level: 'critical' },
          { from: 35, to: 55, level: 'warning' },
          { from: 55, to: 85, level: 'good' },
          { from: 85, to: 100, level: 'warning' },
        ],
        fromLabel: 'Yesterday', toLabel: 'Today', changePct: '0', highlight: 'thresholds',
      },
      cursor: [{ at: 0.3, x: 50, y: 40 }, { at: 0.7, x: 50, y: 46 }],
    },
    // S2 — enter readings
    {
      mode: 'widget', widget: 'dataInput', caption: 'Enter readings in seconds',
      widgetState: {
        dataInput: {
          mode: 'card',
          submitLabel: 'Submit Reading',
          card: {
            sensor: 'pH — Equalization Tank',
            asset: 'Your Plant',
            typeLabel: 'Number',
            validRange: '0 – 14',
            safeRange: '6.5 – 8.5',
          },
        },
      },
      cursor: [{ at: 0.25, x: 50, y: 40 }, { at: 0.7, x: 50, y: 78, click: true }],
    },
    // S3 — do your tasks
    {
      mode: 'widget', widget: 'task', caption: 'Your day, as a task list',
      widgetState: { task: { mode: 'list', rows: TASKS, completionFilter: 'Pending' } },
      cursor: [{ at: 0.2, x: 40, y: 40 }, { at: 0.7, x: 82, y: 40 }],
    },
    // S4 — act on insights
    {
      mode: 'widget', widget: 'insights', caption: 'Urgent things find you',
      widgetState: {
        insights: {
          mode: 'whatsapp',
          insight: {
            name: 'Chlorine Contact Tank Level has reached 90%',
            desc: 'Level Transmitter reports 90% — risk of overflow.',
            ago: 'just now', status: 'Open', priority: 'high', asset: 'Your Plant', type: 'Warning',
          },
          highlight: 'link',
        },
      },
      cursor: [{ at: 0.4, x: 50, y: 60, click: true }],
    },
  ],
  content: {
    en: {
      title: 'DigitalPaani for <em>operators</em> —<br>in two minutes.',
      subtitle:
        'You run the plant. Here is how DigitalPaani helps you read it, record it, and act on it — every day. Forward this to anyone joining the team.',
      chapter: 'Quick Tour · Operational',
      steps: [
        {
          label: 'Read', title: 'Read your plant at a glance',
          body: "Your dashboard turns sensor data into <strong>live widgets</strong>. A gauge shows every key reading against its <strong>safe range</strong> — green is healthy, amber is caution, red means act. No limits to memorise.",
          voice: "If you run a plant, this is DigitalPaani in two minutes. First: reading your plant. Your dashboard turns sensor data into live widgets. A gauge shows each key reading against its safe range — green is healthy, amber is caution, red means act now. You judge plant health at a glance, with no limits to memorise.",
        },
        {
          label: 'Record', title: 'Enter readings in seconds',
          body: "Manual readings go in through a simple <strong>data-entry card</strong> — it shows the valid and safe ranges as you type, flags anything out of range, and can even read values off a <strong>photo</strong> of a meter.",
          voice: "Second: recording. Manual readings go in through a simple card like this one. It shows the valid and safe ranges as you type and flags anything unusual immediately. You can even snap a photo of a meter, and the system reads the value off it.",
        },
        {
          label: 'Do', title: 'Your day, as a task list',
          body: "Every job — backwashes, cleanings, checks — arrives as a <strong>task</strong> with a priority, needed skills, and step-by-step instructions. Tasks come on a schedule or fire automatically when a condition is met.",
          voice: "Third: doing. Every job — backwashes, cleanings, quick checks — arrives as a task, with a priority, the skills it needs, and step-by-step instructions. Some repeat on a schedule; others fire automatically the moment a condition is met in the plant.",
        },
        {
          label: 'Act', title: 'Urgent things find you',
          body: "When something needs you <em>now</em>, an <strong>insight</strong> lands on <strong>WhatsApp</strong> with a link that opens with no login. See it, act on it, close it. That's the loop — and the full training inside covers every screen, in your language.",
          voice: "And fourth: acting. When something needs you right now, an insight lands directly on WhatsApp, with a link that opens without any login. See it, act on it, close it. Read, record, do, act — that's your day with DigitalPaani. The full training inside covers every screen, step by step, in your language.",
        },
      ],
    },
    hi: {
      title: '<em>ऑपरेटरों</em> के लिए डिजिटलपानी —<br>दो मिनट में।',
      subtitle:
        'प्लांट आप चलाते हैं। डिजिटलपानी हर दिन उसे पढ़ने, दर्ज करने और उस पर कार्रवाई करने में ऐसे मदद करता है। टीम में आने वाले किसी भी व्यक्ति को यह आगे भेजें।',
      chapter: 'क्विक टूर · ऑपरेशनल',
      steps: [
        {
          label: 'पढ़ें', title: 'एक नज़र में अपना प्लांट पढ़ें',
          body: 'आपका डैशबोर्ड सेंसर डेटा को <strong>लाइव विजेट्स</strong> में बदलता है। गेज हर मुख्य रीडिंग को उसकी <strong>सुरक्षित सीमा</strong> के सामने दिखाता है — हरा स्वस्थ, पीला सावधानी, लाल यानी कार्रवाई। कोई सीमा याद नहीं रखनी।',
          voice: "अगर आप प्लांट चलाते हैं, तो यह है डिजिटलपानी दो मिनट में। पहला: अपना प्लांट पढ़ना। आपका डैशबोर्ड सेंसर डेटा को लाइव विजेट्स में बदलता है। गेज हर मुख्य रीडिंग को उसकी सुरक्षित सीमा के सामने दिखाता है — हरा स्वस्थ, पीला सावधानी, लाल यानी अभी कार्रवाई करें। एक नज़र में प्लांट की सेहत, बिना कोई सीमा याद किए।",
        },
        {
          label: 'दर्ज करें', title: 'सेकंडों में रीडिंग दर्ज करें',
          body: 'मैनुअल रीडिंग एक सरल <strong>डेटा-एंट्री कार्ड</strong> से जाती हैं — टाइप करते समय यह मान्य और सुरक्षित सीमाएँ दिखाता है, गड़बड़ को तुरंत चिह्नित करता है, और मीटर की <strong>फोटो</strong> से भी मान पढ़ सकता है।',
          voice: "दूसरा: दर्ज करना। मैनुअल रीडिंग इस जैसे सरल कार्ड से जाती हैं। टाइप करते समय यह मान्य और सुरक्षित सीमाएँ दिखाता है और कुछ भी असामान्य हो तो तुरंत चिह्नित करता है। आप मीटर की फोटो भी खींच सकते हैं, और सिस्टम उससे मान पढ़ लेता है।",
        },
        {
          label: 'करें', title: 'आपका दिन, टास्क लिस्ट के रूप में',
          body: 'हर काम — बैकवॉश, सफाई, जाँच — एक <strong>टास्क</strong> के रूप में आता है, प्राथमिकता, ज़रूरी कौशल और चरण-दर-चरण निर्देशों के साथ। टास्क शेड्यूल पर आते हैं या शर्त पूरी होते ही अपने-आप।',
          voice: "तीसरा: करना। हर काम — बैकवॉश, सफाई, त्वरित जाँच — एक टास्क के रूप में आता है, प्राथमिकता, ज़रूरी कौशल और चरण-दर-चरण निर्देशों के साथ। कुछ शेड्यूल पर दोहराते हैं; बाकी प्लांट में शर्त पूरी होते ही अपने-आप चालू हो जाते हैं।",
        },
        {
          label: 'कार्रवाई', title: 'ज़रूरी चीज़ें खुद आप तक पहुँचती हैं',
          body: 'जब कुछ <em>अभी</em> आपकी ज़रूरत हो, तो <strong>इनसाइट</strong> सीधे <strong>व्हाट्सएप</strong> पर आती है — बिना लॉगिन खुलने वाले लिंक के साथ। देखें, कार्रवाई करें, बंद करें। यही है पूरा चक्र — और अंदर की पूरी ट्रेनिंग हर स्क्रीन को आपकी भाषा में सिखाती है।',
          voice: "और चौथा: कार्रवाई। जब कुछ अभी आपकी ज़रूरत हो, तो इनसाइट सीधे व्हाट्सएप पर आती है, ऐसे लिंक के साथ जो बिना लॉगिन खुलता है। देखें, कार्रवाई करें, बंद करें। पढ़ें, दर्ज करें, करें, कार्रवाई करें — डिजिटलपानी के साथ यही आपका दिन है। अंदर की पूरी ट्रेनिंग हर स्क्रीन को चरण-दर-चरण, आपकी भाषा में सिखाती है।",
        },
      ],
    },
    ta: {
      title: '<em>இயக்குநர்களுக்கு</em> டிஜிட்டல்பானி —<br>இரண்டு நிமிடத்தில்.',
      subtitle:
        'ஆலையை இயக்குவது நீங்கள். அதைப் படிக்க, பதிவு செய்ய, செயல்பட — ஒவ்வொரு நாளும் டிஜிட்டல்பானி எப்படி உதவுகிறது என்பது இதோ. அணியில் சேரும் யாருக்கும் இதை அனுப்புங்கள்.',
      chapter: 'விரைவுச் சுற்று · இயக்கம்',
      steps: [
        {
          label: 'படியுங்கள்', title: 'ஒரே பார்வையில் உங்கள் ஆலையைப் படியுங்கள்',
          body: 'உங்கள் டாஷ்போர்டு சென்சார் தரவை <strong>நேரடி விட்ஜெட்டுகளாக</strong> மாற்றுகிறது. கேஜ் ஒவ்வொரு முக்கிய அளவீட்டையும் அதன் <strong>பாதுகாப்பான வரம்புக்கு</strong> எதிராகக் காட்டுகிறது — பச்சை ஆரோக்கியம், மஞ்சள் எச்சரிக்கை, சிவப்பு செயல்படு. வரம்புகளை நினைவில் வைக்க வேண்டாம்.',
          voice: "நீங்கள் ஆலை இயக்குபவர் என்றால், இதோ டிஜிட்டல்பானி இரண்டு நிமிடத்தில். முதலில்: உங்கள் ஆலையைப் படித்தல். உங்கள் டாஷ்போர்டு சென்சார் தரவை நேரடி விட்ஜெட்டுகளாக மாற்றுகிறது. கேஜ் ஒவ்வொரு முக்கிய அளவீட்டையும் அதன் பாதுகாப்பான வரம்புக்கு எதிராகக் காட்டுகிறது — பச்சை ஆரோக்கியம், மஞ்சள் எச்சரிக்கை, சிவப்பு என்றால் இப்போதே செயல்படுங்கள். எந்த வரம்பையும் நினைவில் வைக்காமல், ஒரே பார்வையில் ஆலையின் நலனை அறியலாம்.",
        },
        {
          label: 'பதிவு', title: 'சில நொடிகளில் அளவீடுகளைப் பதிவு செய்யுங்கள்',
          body: 'கையேடு அளவீடுகள் எளிய <strong>பதிவு அட்டை</strong> வழியாகச் செல்கின்றன — தட்டச்சு செய்யும்போதே சரியான, பாதுகாப்பான வரம்புகளைக் காட்டி, தவறானதை உடனே சுட்டிக்காட்டுகிறது; மீட்டரின் <strong>புகைப்படத்திலிருந்தும்</strong> மதிப்பைப் படிக்கும்.',
          voice: "இரண்டாவது: பதிவு செய்தல். கையேடு அளவீடுகள் இதுபோன்ற எளிய அட்டை வழியாகச் செல்கின்றன. தட்டச்சு செய்யும்போதே சரியான மற்றும் பாதுகாப்பான வரம்புகளைக் காட்டி, அசாதாரணமான எதையும் உடனே சுட்டிக்காட்டுகிறது. மீட்டரின் புகைப்படம் எடுத்தால், சிஸ்டமே அதிலிருந்து மதிப்பைப் படித்துக்கொள்ளும்.",
        },
        {
          label: 'செய்யுங்கள்', title: 'உங்கள் நாள், பணிப் பட்டியலாக',
          body: 'ஒவ்வொரு வேலையும் — பேக்வாஷ், சுத்தம், சரிபார்ப்பு — முன்னுரிமை, தேவையான திறன்கள், படிப்படியான வழிமுறைகளுடன் ஒரு <strong>பணியாக</strong> வருகிறது. பணிகள் அட்டவணைப்படி வரும், அல்லது நிபந்தனை பூர்த்தியானதும் தாமாக வரும்.',
          voice: "மூன்றாவது: செய்தல். ஒவ்வொரு வேலையும் — பேக்வாஷ், தொட்டி சுத்தம், விரைவு சரிபார்ப்பு — ஒரு பணியாக வருகிறது; முன்னுரிமை, தேவையான திறன்கள், படிப்படியான வழிமுறைகளுடன். சில அட்டவணைப்படி மீண்டும் வரும்; மற்றவை ஆலையில் நிபந்தனை பூர்த்தியான கணத்தில் தாமாகவே வரும்.",
        },
        {
          label: 'செயல்படுங்கள்', title: 'அவசர விஷயங்கள் உங்களைத் தேடி வரும்',
          body: 'ஏதாவது <em>இப்போதே</em> உங்களைத் தேவைப்பட்டால், <strong>இன்சைட்</strong> நேரடியாக <strong>வாட்ஸ்அப்பில்</strong> வரும் — உள்நுழைவு இல்லாமல் திறக்கும் இணைப்புடன். பாருங்கள், செயல்படுங்கள், மூடுங்கள். அதுதான் சுழற்சி — உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் உங்கள் மொழியில் கற்பிக்கிறது.',
          voice: "நான்காவது: செயல்படுதல். ஏதாவது இப்போதே உங்களைத் தேவைப்பட்டால், இன்சைட் நேரடியாக வாட்ஸ்அப்பில் வரும் — உள்நுழைவு எதுவும் இல்லாமல் திறக்கும் இணைப்புடன். பாருங்கள், செயல்படுங்கள், மூடுங்கள். படியுங்கள், பதிவு செய்யுங்கள், செய்யுங்கள், செயல்படுங்கள் — டிஜிட்டல்பானியுடன் உங்கள் நாள் இதுதான். உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையையும் படிப்படியாக, உங்கள் மொழியில் கற்பிக்கிறது.",
        },
      ],
    },
    mr: {
      title: '<em>ऑपरेटरसाठी</em> डिजिटलपानी —<br>दोन मिनिटांत.',
      subtitle:
        'प्लांट तुम्ही चालवता. तो वाचायला, नोंदवायला आणि त्यावर कृती करायला डिजिटलपानी दररोज अशी मदत करते. टीममध्ये येणाऱ्या कोणालाही हे पुढे पाठवा.',
      chapter: 'क्विक टूर · ऑपरेशनल',
      steps: [
        {
          label: 'वाचा', title: 'एका नजरेत तुमचा प्लांट वाचा',
          body: 'तुमचा डॅशबोर्ड सेन्सर डेटाला <strong>लाइव्ह विजेट्समध्ये</strong> बदलतो. गेज प्रत्येक महत्त्वाचे रीडिंग त्याच्या <strong>सुरक्षित श्रेणीसमोर</strong> दाखवते — हिरवा निरोगी, पिवळा सावधानता, लाल म्हणजे कृती. मर्यादा लक्षात ठेवायची गरज नाही.',
          voice: "तुम्ही प्लांट चालवत असाल, तर हे आहे डिजिटलपानी दोन मिनिटांत. पहिले: तुमचा प्लांट वाचणे. तुमचा डॅशबोर्ड सेन्सर डेटाला लाइव्ह विजेट्समध्ये बदलतो. गेज प्रत्येक महत्त्वाचे रीडिंग त्याच्या सुरक्षित श्रेणीसमोर दाखवते — हिरवा निरोगी, पिवळा सावधानता, लाल म्हणजे आत्ता कृती करा. कोणतीही मर्यादा लक्षात न ठेवता, एका नजरेत प्लांटचे आरोग्य.",
        },
        {
          label: 'नोंदवा', title: 'सेकंदांत रीडिंग नोंदवा',
          body: 'मॅन्युअल रीडिंग एका साध्या <strong>डेटा-एंट्री कार्डमधून</strong> जातात — टाइप करताना ते वैध आणि सुरक्षित श्रेणी दाखवते, चुकीचे लगेच चिन्हांकित करते, आणि मीटरच्या <strong>फोटोवरूनही</strong> मूल्य वाचू शकते.',
          voice: "दुसरे: नोंदवणे. मॅन्युअल रीडिंग या सारख्या साध्या कार्डमधून जातात. टाइप करताना ते वैध आणि सुरक्षित श्रेणी दाखवते आणि काहीही असामान्य असल्यास लगेच चिन्हांकित करते. तुम्ही मीटरचा फोटोही काढू शकता, आणि सिस्टीम त्यावरून मूल्य वाचते.",
        },
        {
          label: 'करा', title: 'तुमचा दिवस, टास्क लिस्ट म्हणून',
          body: 'प्रत्येक काम — बॅकवॉश, स्वच्छता, तपासणी — प्राधान्य, आवश्यक कौशल्ये आणि टप्प्याटप्प्याच्या सूचनांसह <strong>टास्क</strong> म्हणून येते. टास्क वेळापत्रकानुसार येतात किंवा अट पूर्ण होताच आपोआप.',
          voice: "तिसरे: करणे. प्रत्येक काम — बॅकवॉश, टाकी स्वच्छता, जलद तपासणी — टास्क म्हणून येते; प्राधान्य, आवश्यक कौशल्ये आणि टप्प्याटप्प्याच्या सूचनांसह. काही वेळापत्रकानुसार पुनरावृत्त होतात; बाकी प्लांटमध्ये अट पूर्ण होताच आपोआप सुरू होतात.",
        },
        {
          label: 'कृती', title: 'तातडीच्या गोष्टी तुम्हाला शोधतात',
          body: 'जेव्हा काही <em>आत्ता</em> तुमची गरज असते, तेव्हा <strong>इनसाइट</strong> थेट <strong>व्हॉट्सअ‍ॅपवर</strong> येते — लॉगिनशिवाय उघडणाऱ्या लिंकसह. पाहा, कृती करा, बंद करा. हेच चक्र — आणि आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन तुमच्या भाषेत शिकवते.',
          voice: "आणि चौथे: कृती. जेव्हा काही आत्ता तुमची गरज असते, तेव्हा इनसाइट थेट व्हॉट्सअ‍ॅपवर येते, लॉगिनशिवाय उघडणाऱ्या लिंकसह. पाहा, कृती करा, बंद करा. वाचा, नोंदवा, करा, कृती करा — डिजिटलपानीसोबत हाच तुमचा दिवस. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीन टप्प्याटप्प्याने, तुमच्या भाषेत शिकवते.",
        },
      ],
    },
  },
};

export default lesson;
