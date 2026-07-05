import type { GraphData, Lesson, TaskRow } from '../../types';

/**
 * Persona short — NON-OPERATIONAL (hidden module-shorts, PUBLIC: no login).
 * A ~2-minute forwardable reel for the people who steer: end results, reading
 * the data at a glance, and knowing who is doing what — without chasing
 * anyone. Deliberately generic — no client data. NOTE: re-edit this short
 * whenever a new module/lesson ships so it reflects current capabilities.
 */

const TREND: GraphData = {
  type: 'line',
  title: 'Treated water quality — this week',
  xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  yMin: 0,
  yMax: 100,
  yStep: 20,
  fixedRanges: [
    { from: 0, to: 40, level: 'critical' },
    { from: 40, to: 90, level: 'good' },
    { from: 90, to: 100, level: 'critical' },
  ],
  series: [
    { name: 'Compliance', color: '#1a9e8f', endLabel: '86', points: [78, 81, 84, 80, 83, 85, 86] },
  ],
  highlight: 'ranges',
};

const TEAM: TaskRow[] = [
  { name: 'Perform filter backwash', desc: 'Restore filtration efficiency.', plant: 'Your Plant', priority: 'High', assignee: 'R. Kumar', skills: ['Operator'], status: 'Completed' },
  { name: 'Bar screen cleaning', desc: 'Clear debris from the intake.', plant: 'Your Plant', priority: 'Medium', assignee: 'S. Patil', skills: ['Operator'], status: 'Pending' },
  { name: 'Monthly pump maintenance', desc: 'Scheduled preventive maintenance.', plant: 'Your Plant', priority: 'Medium', assignee: 'V. Singh', skills: ['Electrical'], status: 'Pending' },
];

const lesson: Lesson = {
  id: 'short-non-operational',
  moduleId: 'module-shorts',
  lessonNumber: 2,
  estimatedMinutes: 2,
  screenshots: {},
  layouts: [
    // S1 — end results over time
    {
      mode: 'widget', widget: 'graph', caption: 'End results, over time',
      widgetState: { graph: TREND },
      cursor: [{ at: 0.25, x: 20, y: 50 }, { at: 0.7, x: 80, y: 42 }],
    },
    // S2 — better or worse than last period
    {
      mode: 'widget', widget: 'rangeNumber', caption: 'Better or worse than last period?',
      widgetState: {
        accent: 'purple', title: 'Water treated this month', value: '12,480', unitTag: 'Your Plant',
        timeframeLabel: 'This Month', fromLabel: 'Last month', toLabel: 'This month',
        changePct: '6', highlight: 'change',
      },
      cursor: [{ at: 0.3, x: 50, y: 44 }, { at: 0.7, x: 82, y: 88, click: true }],
    },
    // S3 — the digest: know without chasing
    {
      mode: 'widget', widget: 'insights', caption: 'The daily digest',
      widgetState: {
        insights: {
          mode: 'digest',
          highlight: 'counts',
          digest: {
            range: 'Last 24 Hours', newCount: '4', closedCount: '7', openTotal: '12',
            latest: {
              name: 'DO of Aeration Tank-1 is below 1 ppm',
              desc: 'Low dissolved oxygen risks a hypoxic zone for the biomass.',
              ago: '20 minutes ago', status: 'Open', priority: 'medium', asset: 'Your Plant', equipment: 'Aeration Tank-1', type: 'Issue',
            },
            plants: ['Plant One', 'Plant Two', 'Plant Three'],
          },
        },
      },
      cursor: [{ at: 0.3, x: 30, y: 22 }, { at: 0.7, x: 50, y: 55 }],
    },
    // S4 — who's doing what
    {
      mode: 'widget', widget: 'task', caption: "Who's doing what",
      widgetState: { task: { mode: 'list', rows: TEAM, completionFilter: 'All' } },
      cursor: [{ at: 0.25, x: 60, y: 35 }, { at: 0.7, x: 82, y: 55 }],
    },
  ],
  content: {
    en: {
      title: 'DigitalPaani for <em>decision-makers</em> —<br>in two minutes.',
      subtitle:
        "You're accountable for the results, not the valves. Here's how DigitalPaani shows you outcomes, trends, and who's doing what — without chasing anyone. Forward this to anyone who steers.",
      chapter: 'Quick Tour · Non-operational',
      steps: [
        {
          label: 'Results', title: 'End results, over time',
          body: "Every outcome that matters — quality, compliance, volumes — is a <strong>live chart</strong> with the <strong>safe range shaded green</strong>. If the line is in the band, things are fine. You read the story of the week in five seconds.",
          voice: "If you're accountable for a plant's results but don't run it day to day, this is DigitalPaani in two minutes. First: end results. Every outcome that matters — quality, compliance, volumes — is a live chart, with the safe range shaded green. Line inside the band? Things are fine. You read the whole week's story in five seconds.",
        },
        {
          label: 'Trends', title: 'Better or worse than last period?',
          body: "Key figures come with a built-in <strong>period comparison</strong> — this month against last, at the bottom of the widget. Up or down, you see the direction instantly, with no spreadsheet.",
          voice: "Second: direction. Key figures carry a built-in comparison against the previous period — this month against last, right at the bottom of the widget. Up or down, you see the direction instantly. No spreadsheet, no asking anyone.",
        },
        {
          label: 'Digest', title: 'Know, without chasing',
          body: "A daily <strong>digest</strong> tells you what's new, what got resolved, and what's still open — across <strong>all your plants</strong> — delivered to you. Anything urgent reaches you on WhatsApp the moment it happens.",
          voice: "Third: staying informed. A daily digest tells you what's new, what got resolved, and what's still open — across all your plants — delivered straight to you. And anything truly urgent doesn't wait for the digest: it reaches you on WhatsApp the moment it happens.",
        },
        {
          label: 'Team', title: "Who's doing what",
          body: "Every job in the plant is a <strong>task</strong> with an <strong>assignee</strong> and a live <strong>status</strong>. One list shows what's done, what's pending, and who owns it — accountability without a single phone call. The full training inside goes deeper on every screen.",
          voice: "And fourth: your team. Every job in the plant is a task, with a named assignee and a live status. One list shows what's done, what's pending, and exactly who owns it — accountability without a single phone call. That's the view from the top. The full training inside goes deeper on every screen, in your language.",
        },
      ],
    },
    hi: {
      title: '<em>निर्णयकर्ताओं</em> के लिए डिजिटलपानी —<br>दो मिनट में।',
      subtitle:
        'आप नतीजों के लिए जवाबदेह हैं, वाल्वों के लिए नहीं। डिजिटलपानी आपको परिणाम, रुझान और कौन क्या कर रहा है — बिना किसी के पीछे भागे — ऐसे दिखाता है। संचालन देखने वाले किसी भी व्यक्ति को यह भेजें।',
      chapter: 'क्विक टूर · नॉन-ऑपरेशनल',
      steps: [
        {
          label: 'नतीजे', title: 'अंतिम परिणाम, समय के साथ',
          body: 'हर महत्वपूर्ण परिणाम — गुणवत्ता, अनुपालन, मात्रा — एक <strong>लाइव चार्ट</strong> है, जिसमें <strong>सुरक्षित सीमा हरे रंग</strong> में है। लाइन बैंड के अंदर है तो सब ठीक। पूरे हफ्ते की कहानी पाँच सेकंड में।',
          voice: "अगर आप प्लांट के नतीजों के लिए जवाबदेह हैं पर उसे रोज़ नहीं चलाते, तो यह है डिजिटलपानी दो मिनट में। पहला: अंतिम परिणाम। हर महत्वपूर्ण परिणाम — गुणवत्ता, अनुपालन, मात्रा — एक लाइव चार्ट है, जिसमें सुरक्षित सीमा हरे रंग में छायांकित है। लाइन बैंड के अंदर? सब ठीक। पूरे हफ्ते की कहानी पाँच सेकंड में पढ़ लेते हैं।",
        },
        {
          label: 'रुझान', title: 'पिछली अवधि से बेहतर या बदतर?',
          body: 'मुख्य आँकड़ों में अंतर्निहित <strong>अवधि तुलना</strong> है — इस महीने बनाम पिछला, विजेट के नीचे। ऊपर या नीचे, दिशा तुरंत दिखती है, बिना किसी स्प्रेडशीट के।',
          voice: "दूसरा: दिशा। मुख्य आँकड़े पिछली अवधि से अंतर्निहित तुलना के साथ आते हैं — इस महीने बनाम पिछला, विजेट के ठीक नीचे। ऊपर या नीचे, दिशा तुरंत दिखती है। न स्प्रेडशीट, न किसी से पूछना।",
        },
        {
          label: 'डाइजेस्ट', title: 'बिना पीछे भागे, सब पता',
          body: 'दैनिक <strong>डाइजेस्ट</strong> बताता है क्या नया है, क्या सुलझा, क्या खुला है — <strong>आपके सभी प्लांट्स</strong> में — सीधे आप तक। कुछ भी अत्यावश्यक हो तो उसी क्षण व्हाट्सएप पर पहुँचता है।',
          voice: "तीसरा: सूचित रहना। दैनिक डाइजेस्ट बताता है क्या नया है, क्या सुलझ गया, और क्या अभी खुला है — आपके सभी प्लांट्स में — सीधे आप तक पहुँचता है। और कुछ भी वाकई अत्यावश्यक हो, तो वह डाइजेस्ट का इंतज़ार नहीं करता: उसी क्षण व्हाट्सएप पर आप तक पहुँचता है।",
        },
        {
          label: 'टीम', title: 'कौन क्या कर रहा है',
          body: 'प्लांट का हर काम एक <strong>टास्क</strong> है — <strong>असाइनी</strong> और लाइव <strong>स्टेटस</strong> के साथ। एक सूची दिखाती है क्या हुआ, क्या बाकी है, और ज़िम्मेदार कौन है — बिना एक भी फोन कॉल के। अंदर की पूरी ट्रेनिंग हर स्क्रीन में गहराई से जाती है।',
          voice: "और चौथा: आपकी टीम। प्लांट का हर काम एक टास्क है, नामित असाइनी और लाइव स्टेटस के साथ। एक सूची दिखाती है क्या पूरा हुआ, क्या बाकी है, और ज़िम्मेदार ठीक-ठीक कौन है — बिना एक भी फोन कॉल के। यही है ऊपर से नज़ारा। अंदर की पूरी ट्रेनिंग हर स्क्रीन में गहराई से, आपकी भाषा में जाती है।",
        },
      ],
    },
    ta: {
      title: '<em>முடிவெடுப்பவர்களுக்கு</em> டிஜிட்டல்பானி —<br>இரண்டு நிமிடத்தில்.',
      subtitle:
        'நீங்கள் முடிவுகளுக்குப் பொறுப்பு, வால்வுகளுக்கு அல்ல. முடிவுகள், போக்குகள், யார் என்ன செய்கிறார்கள் — யாரையும் துரத்தாமல் — டிஜிட்டல்பானி எப்படிக் காட்டுகிறது என்பது இதோ. வழிநடத்தும் யாருக்கும் இதை அனுப்புங்கள்.',
      chapter: 'விரைவுச் சுற்று · நிர்வாகம்',
      steps: [
        {
          label: 'முடிவுகள்', title: 'இறுதி முடிவுகள், காலப்போக்கில்',
          body: 'முக்கியமான ஒவ்வொரு முடிவும் — தரம், இணக்கம், அளவுகள் — <strong>நேரடி வரைபடம்</strong>; <strong>பாதுகாப்பான வரம்பு பச்சையில்</strong> நிழலிடப்பட்டுள்ளது. கோடு பட்டைக்குள் இருந்தால் எல்லாம் சரி. வாரத்தின் கதையை ஐந்து நொடிகளில் படிக்கலாம்.',
          voice: "ஆலையின் முடிவுகளுக்கு நீங்கள் பொறுப்பு, ஆனால் தினமும் அதை இயக்குவதில்லை என்றால், இதோ டிஜிட்டல்பானி இரண்டு நிமிடத்தில். முதலில்: இறுதி முடிவுகள். முக்கியமான ஒவ்வொரு முடிவும் — தரம், இணக்கம், அளவுகள் — நேரடி வரைபடம்; பாதுகாப்பான வரம்பு பச்சையில் நிழலிடப்பட்டுள்ளது. கோடு பட்டைக்குள் இருக்கிறதா? எல்லாம் சரி. வாரம் முழுவதின் கதையை ஐந்து நொடிகளில் படிக்கிறீர்கள்.",
        },
        {
          label: 'போக்குகள்', title: 'முந்தைய காலத்தை விட சிறப்பா, மோசமா?',
          body: 'முக்கிய எண்கள் உள்ளமைந்த <strong>கால ஒப்பீட்டுடன்</strong> வருகின்றன — இந்த மாதம் கடந்த மாதத்துடன், விட்ஜெட்டின் கீழே. மேலா கீழா, திசை உடனே தெரியும் — ஸ்ப்ரெட்ஷீட் இல்லாமல்.',
          voice: "இரண்டாவது: திசை. முக்கிய எண்கள் முந்தைய காலத்துடன் உள்ளமைந்த ஒப்பீட்டுடன் வருகின்றன — இந்த மாதம் கடந்த மாதத்துடன், விட்ஜெட்டின் கீழேயே. மேலா கீழா, திசையை உடனே பார்க்கிறீர்கள். ஸ்ப்ரெட்ஷீட் இல்லை, யாரிடமும் கேட்க வேண்டாம்.",
        },
        {
          label: 'டைஜெஸ்ட்', title: 'துரத்தாமல் தெரிந்துகொள்ளுங்கள்',
          body: 'தினசரி <strong>டைஜெஸ்ட்</strong> — புதியது என்ன, தீர்ந்தது என்ன, திறந்திருப்பது என்ன — <strong>உங்கள் எல்லா ஆலைகளிலும்</strong> — உங்களிடம் வந்து சேரும். அவசரமானது எதுவும் நிகழ்ந்த கணமே வாட்ஸ்அப்பில் வரும்.',
          voice: "மூன்றாவது: தகவலோடு இருத்தல். தினசரி டைஜெஸ்ட் — புதியது என்ன, தீர்க்கப்பட்டது என்ன, இன்னும் திறந்திருப்பது என்ன — உங்கள் எல்லா ஆலைகளிலும் — நேரடியாக உங்களிடம் வந்து சேரும். உண்மையில் அவசரமானது டைஜெஸ்ட்டுக்குக் காத்திருக்காது: நிகழ்ந்த கணமே வாட்ஸ்அப்பில் உங்களை அடையும்.",
        },
        {
          label: 'அணி', title: 'யார் என்ன செய்கிறார்கள்',
          body: 'ஆலையின் ஒவ்வொரு வேலையும் <strong>பணி</strong> — <strong>பொறுப்பாளருடன்</strong>, நேரடி <strong>நிலையுடன்</strong>. ஒரே பட்டியலில் முடிந்தது, நிலுவையில் இருப்பது, பொறுப்பாளர் யார் — ஒரு தொலைபேசி அழைப்பும் இல்லாமல். உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையிலும் ஆழமாகச் செல்கிறது.',
          voice: "நான்காவது: உங்கள் அணி. ஆலையின் ஒவ்வொரு வேலையும் ஒரு பணி — பெயரிடப்பட்ட பொறுப்பாளருடன், நேரடி நிலையுடன். ஒரே பட்டியலில் முடிந்தது என்ன, நிலுவையில் என்ன, பொறுப்பாளர் சரியாக யார் என்பதைக் காட்டுகிறது — ஒரு தொலைபேசி அழைப்பும் இல்லாமல். இதுதான் மேலிருந்து பார்வை. உள்ளே உள்ள முழு பயிற்சி ஒவ்வொரு திரையிலும் ஆழமாக, உங்கள் மொழியில் செல்கிறது.",
        },
      ],
    },
    mr: {
      title: '<em>निर्णयकर्त्यांसाठी</em> डिजिटलपानी —<br>दोन मिनिटांत.',
      subtitle:
        'तुम्ही निकालांसाठी जबाबदार आहात, व्हॉल्व्हसाठी नाही. परिणाम, कल आणि कोण काय करत आहे — कोणाच्याही मागे न लागता — डिजिटलपानी असे दाखवते. मार्गदर्शन करणाऱ्या कोणालाही हे पाठवा.',
      chapter: 'क्विक टूर · नॉन-ऑपरेशनल',
      steps: [
        {
          label: 'निकाल', title: 'अंतिम निकाल, कालांतराने',
          body: 'महत्त्वाचा प्रत्येक निकाल — गुणवत्ता, अनुपालन, प्रमाण — एक <strong>लाइव्ह चार्ट</strong> आहे, ज्यात <strong>सुरक्षित श्रेणी हिरव्या</strong> रंगात आहे. रेषा पट्ट्याच्या आत असेल तर सर्व ठीक. आठवड्याची कथा पाच सेकंदांत.',
          voice: "प्लांटच्या निकालांसाठी तुम्ही जबाबदार आहात पण तो रोज चालवत नाही, तर हे आहे डिजिटलपानी दोन मिनिटांत. पहिले: अंतिम निकाल. महत्त्वाचा प्रत्येक निकाल — गुणवत्ता, अनुपालन, प्रमाण — एक लाइव्ह चार्ट आहे, ज्यात सुरक्षित श्रेणी हिरव्या रंगात छायांकित आहे. रेषा पट्ट्याच्या आत? सर्व ठीक. संपूर्ण आठवड्याची कथा पाच सेकंदांत वाचता.",
        },
        {
          label: 'कल', title: 'मागील कालावधीपेक्षा चांगले की वाईट?',
          body: 'मुख्य आकड्यांमध्ये अंगभूत <strong>कालावधी तुलना</strong> आहे — हा महिना विरुद्ध मागचा, विजेटच्या तळाशी. वर की खाली, दिशा लगेच दिसते — कोणत्याही स्प्रेडशीटशिवाय.',
          voice: "दुसरे: दिशा. मुख्य आकडे मागील कालावधीशी अंगभूत तुलनेसह येतात — हा महिना विरुद्ध मागचा, विजेटच्या अगदी तळाशी. वर की खाली, दिशा लगेच दिसते. स्प्रेडशीट नाही, कोणाला विचारायचे नाही.",
        },
        {
          label: 'डायजेस्ट', title: 'मागे न लागता, सर्व माहिती',
          body: 'दैनिक <strong>डायजेस्ट</strong> सांगतो काय नवीन आहे, काय सुटले, काय खुले आहे — <strong>तुमच्या सर्व प्लांट्समध्ये</strong> — थेट तुमच्यापर्यंत. काहीही तातडीचे असेल तर ते त्याच क्षणी व्हॉट्सअ‍ॅपवर पोहोचते.',
          voice: "तिसरे: माहितीत राहणे. दैनिक डायजेस्ट सांगतो काय नवीन आहे, काय सुटले, आणि काय अजून खुले आहे — तुमच्या सर्व प्लांट्समध्ये — थेट तुमच्यापर्यंत पोहोचतो. आणि खरोखर तातडीचे काहीही डायजेस्टची वाट पाहत नाही: घडल्याच्या क्षणीच व्हॉट्सअ‍ॅपवर तुमच्यापर्यंत पोहोचते.",
        },
        {
          label: 'टीम', title: 'कोण काय करत आहे',
          body: 'प्लांटमधले प्रत्येक काम एक <strong>टास्क</strong> आहे — <strong>जबाबदार व्यक्ती</strong> आणि लाइव्ह <strong>स्थितीसह</strong>. एका यादीत काय झाले, काय बाकी, आणि जबाबदार कोण — एकाही फोन कॉलशिवाय. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीनमध्ये खोलात जाते.',
          voice: "आणि चौथे: तुमची टीम. प्लांटमधले प्रत्येक काम एक टास्क आहे, नावानिशी जबाबदार व्यक्ती आणि लाइव्ह स्थितीसह. एका यादीत काय पूर्ण झाले, काय बाकी आहे, आणि जबाबदार नेमके कोण हे दिसते — एकाही फोन कॉलशिवाय. हेच आहे वरून दृश्य. आतले संपूर्ण प्रशिक्षण प्रत्येक स्क्रीनमध्ये खोलात, तुमच्या भाषेत जाते.",
        },
      ],
    },
  },
};

export default lesson;
