import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-hindalco-data-input`;

/**
 * Personalized demo — Hindalco Mahaan · Data Input upload.  (hidden module-demos)
 * Built from the CSM's screen recording of uploading the updated MIS-format
 * report through Data Input. Kept as its own focused demo rather than folding
 * into demo-hindalco (the setup tour) so both survive.
 *
 * Style (per Mihir's feedback): overview — brisk page-per-step, cover EVERYTHING
 * in the recording, teach the navigation first. Real 1280px frames from the
 * recording as detail screenshots so the client sees their own screens. The
 * uploader's notes ("Log in → Data Input → Upload File → Browse → choose file,
 * the file is already prepared") drive the step order.
 */
const lesson: Lesson = {
  id: 'demo-hindalco-data-input',
  moduleId: 'module-demos',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {
    login: `${BASE}/login.jpg`,
    menu: `${BASE}/menu.jpg`,
    datainput: `${BASE}/datainput.jpg`,
    upload: `${BASE}/upload.jpg`,
    preview: `${BASE}/preview.jpg`,
    done: `${BASE}/done.jpg`,
  },
  layouts: [
    // S1 — sign in
    {
      mode: 'detail', screenshot: 'login', caption: 'Sign in with your saved account',
      spotlight: { top: '46%', left: '55%', width: '28%', height: '38%' },
      cursor: [
        { at: 0.15, x: 35, y: 59 },
        { at: 0.5, x: 67, y: 54 },
        { at: 0.82, x: 67, y: 81, click: true },
      ],
    },
    // S2 — open Data Input from the menu
    {
      mode: 'detail', screenshot: 'menu', caption: 'Open Data Input from the menu',
      spotlight: { top: '28%', left: '0%', width: '19%', height: '42%' },
      cursor: [
        { at: 0.15, x: 20, y: 23, click: true },
        { at: 0.65, x: 9, y: 54, click: true },
      ],
    },
    // S3 — the Data Input page + Upload File
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Your Data Input page',
      spotlight: null,
      cursor: [
        { at: 0.2, x: 30, y: 60 },
        { at: 0.55, x: 15, y: 42 },
        { at: 0.85, x: 93, y: 34, click: true },
      ],
    },
    // S4 — Browse & choose the file
    {
      mode: 'detail', screenshot: 'upload', caption: 'Browse for your MIS file',
      spotlight: { top: '43%', left: '33%', width: '34%', height: '38%' },
      cursor: [
        { at: 0.3, x: 50, y: 60 },
        { at: 0.72, x: 50, y: 68, click: true },
      ],
    },
    // S5 — the validation preview
    {
      mode: 'detail', screenshot: 'preview', caption: 'Review before it saves',
      spotlight: null,
      cursor: [
        { at: 0.2, x: 78, y: 38 },
        { at: 0.5, x: 45, y: 55 },
        { at: 0.75, x: 15, y: 86 },
        { at: 0.9, x: 85, y: 93 },
      ],
    },
    // S6 — submit & done
    {
      mode: 'detail', screenshot: 'done', caption: 'Submit — done in seconds',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 93, y: 93, click: true },
        { at: 0.45, x: 82, y: 26 },
        { at: 0.7, x: 78, y: 34 },
        { at: 0.92, x: 93, y: 93, click: true },
      ],
    },
  ],
  content: {
    en: {
      title: 'Uploading your<br><em>MIS report.</em>',
      subtitle:
        'A quick walkthrough for Hindalco Mahaan — sign in, and push your updated MIS format straight into the platform through Data Input, in a single upload.',
      chapter: 'Personalized demo · Hindalco Mahaan',
      steps: [
        {
          label: 'Sign in', title: 'Sign in with your credentials',
          body: "Open <strong>app.digitalpaani.com</strong> and sign in. Your account — <strong>hindalco@digitalpaani.com</strong> — is saved on the left, so one tap fills it in. Keep <strong>Keep Credentials</strong> ticked to stay signed in, then hit <strong>Login</strong>.",
          voice: "Let's walk through getting your updated M I S report into the platform. Start at app dot digitalpaani dot com and sign in. Your account is already saved here on the left, so a single tap fills in your details. Leave Keep Credentials ticked so you stay signed in, and hit Login.",
        },
        {
          label: 'Data Input', title: 'Open Data Input from the menu',
          body: "Once you're in, open the <strong>menu</strong> at the top-left. Alongside <strong>Dashboard, Inventory, Insight List</strong> and <strong>ScadaView</strong>, you'll find <strong>Data Input</strong> — the home for every reading that isn't from a sensor, including the ones you upload. Click it.",
          voice: "Once you're in, open the menu on the top left. Along with your Dashboard, Inventory, Insight List and ScadaView, you'll see Data Input. That's the page where every reading that doesn't come from a sensor lives — including the ones you upload. Click Data Input.",
        },
        {
          label: 'Upload File', title: 'Your Data Input page',
          body: "Here's your <strong>Data Input</strong> page. Each row is one of your sensors — with its <strong>Valid</strong> and <strong>Safe</strong> ranges, how <strong>often</strong> it's read, and its <strong>last value</strong>. You could type readings in one by one, but to bring the whole MIS report in at once, hit <strong>Upload File</strong>, top-right.",
          voice: "Here's your Data Input page. Every row is one of your sensors — its valid and safe ranges, how often it's read, and the last value we have. You can type readings straight in, one at a time. But since your M I S report holds a whole month across dozens of sensors, we'll bring it in all at once. Top right — click Upload File.",
        },
        {
          label: 'Browse', title: 'Choose your MIS file',
          body: "The <strong>Data Input Upload</strong> box takes a <strong>CSV or Excel</strong> file. Drag your file in, or click <strong>Browse</strong> and pick it — your prepared <strong>WATER ANALYSIS REPORT.xlsx</strong>. The moment you choose it, the system reads the file and matches each column to the right sensor.",
          voice: "The Data Input Upload box accepts a C S V or Excel file. You can drag your file straight in, or click Browse and select it — here, your prepared Water Analysis Report. As soon as you choose it, the system reads the file and starts matching each column to the right sensor. Your M I S format is ready as-is, so there's nothing to reformat.",
          tip: { type: 'noteLabel', text: 'Your file is already in the updated MIS format — just Browse and pick it, no rework needed.' },
        },
        {
          label: 'Review', title: 'Review before it saves',
          body: "Everything lands in a <strong>preview grid</strong> first — <strong>sensor tag × date &amp; time</strong> — with every value checked against its ranges and colour-coded <strong>Safe, Warning, Error</strong> or <strong>Validation Error</strong>. The <strong>Validation Stats</strong> tally it up: <strong>1032</strong> cells, <strong>227</strong> ready, the blanks flagged. Use the <strong>pencil</strong> to fix anything, then <strong>Revalidate</strong>.",
          voice: "Nothing's saved yet — everything lands in a preview grid first. Every sensor tag against every date and time, each value checked against the ranges we set up, and colour-coded: green is safe, yellow a warning, red an error, grey when a cell couldn't be read. Up top, the validation stats give you the headline — one thousand and thirty-two cells in the file, two hundred and twenty-seven with real readings ready to go, and the empty cells simply flagged so nothing blank slips in. If anything needs a fix, click the pencil, then hit Revalidate.",
          tip: { type: 'rememberLabel', text: 'Nothing is written until you submit — the preview is yours to check and correct first.' },
        },
        {
          label: 'Submit', title: 'Submit — done in seconds',
          body: "Happy with it? Hit <strong>Submit</strong>. Every valid reading is written into its matching sensor at once — here, <strong>227 readings logged</strong> in one go, flowing straight into your dashboards. Hit <strong>Done</strong>, and your MIS report is in.",
          voice: "When you're happy, hit Submit. Every valid reading is written into its matching sensor in one shot — here, two hundred and twenty-seven readings logged in seconds, and they flow straight through to your dashboards. Hit Done, and your whole M I S report is in. That's the entire flow — sign in, Data Input, Upload File, Browse, and submit.",
          tip: { type: 'upNextLabel', text: 'Any month, any time — the same five steps get your MIS report in.' },
        },
      ],
    },
    hi: {
      title: 'अपनी <em>MIS रिपोर्ट</em><br>अपलोड करना।',
      subtitle:
        'हिंडाल्को महान के लिए एक तेज़ वॉकथ्रू — साइन इन करें, और अपने अपडेटेड MIS फ़ॉर्मेट को Data Input के ज़रिए एक ही अपलोड में सीधे प्लेटफ़ॉर्म में डालें।',
      chapter: 'व्यक्तिगत डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'साइन इन', title: 'अपनी क्रेडेंशियल से साइन इन करें',
          body: "<strong>app.digitalpaani.com</strong> खोलें और साइन इन करें। आपका अकाउंट — <strong>hindalco@digitalpaani.com</strong> — बाईं ओर सहेजा है, एक टैप से भर जाता है। साइन इन बने रहने के लिए <strong>Keep Credentials</strong> टिक रखें, फिर <strong>Login</strong> दबाएँ।",
          voice: "चलिए देखते हैं आपकी अपडेटेड एम आई एस रिपोर्ट को प्लेटफ़ॉर्म में कैसे डालें। ऐप डॉट डिजिटलपानी डॉट कॉम पर जाएँ और साइन इन करें। आपका अकाउंट यहाँ बाईं ओर पहले से सहेजा है, तो एक टैप से आपकी जानकारी भर जाती है। साइन इन बने रहने के लिए कीप क्रेडेंशियल्स टिक रहने दें, और लॉगिन दबाएँ।",
        },
        {
          label: 'डेटा इनपुट', title: 'मेन्यू से Data Input खोलें',
          body: "अंदर आते ही, ऊपर-बाईं ओर <strong>मेन्यू</strong> खोलें। <strong>Dashboard, Inventory, Insight List</strong> और <strong>ScadaView</strong> के साथ आपको <strong>Data Input</strong> मिलेगा — हर उस रीडिंग का घर जो सेंसर से नहीं आती, जिनमें आपकी अपलोड की गई रीडिंग भी शामिल हैं। इस पर क्लिक करें।",
          voice: "अंदर आते ही, ऊपर बाईं ओर का मेन्यू खोलें। आपके डैशबोर्ड, इन्वेंटरी, इनसाइट लिस्ट और स्काडाव्यू के साथ आपको डेटा इनपुट दिखेगा। यही वह पेज है जहाँ हर वह रीडिंग रहती है जो सेंसर से नहीं आती — जिनमें आपकी अपलोड की गई रीडिंग भी शामिल हैं। डेटा इनपुट पर क्लिक करें।",
        },
        {
          label: 'अपलोड फ़ाइल', title: 'आपका Data Input पेज',
          body: "यह है आपका <strong>Data Input</strong> पेज। हर पंक्ति आपके एक सेंसर की है — उसकी <strong>Valid</strong> और <strong>Safe</strong> रेंज, वह कितनी <strong>बार</strong> पढ़ी जाती है, और उसका <strong>पिछला मान</strong>। आप एक-एक करके रीडिंग टाइप कर सकते हैं, पर पूरी MIS रिपोर्ट एक साथ लाने के लिए ऊपर-दाईं ओर <strong>Upload File</strong> दबाएँ।",
          voice: "यह है आपका डेटा इनपुट पेज। हर पंक्ति आपके एक सेंसर की है — उसकी वैलिड और सेफ रेंज, वह कितनी बार पढ़ी जाती है, और हमारे पास उसका पिछला मान। आप सीधे एक-एक करके रीडिंग टाइप कर सकते हैं। पर चूँकि आपकी एम आई एस रिपोर्ट में दर्जनों सेंसर पर पूरे महीने की रीडिंग है, हम इसे एक साथ लाएँगे। ऊपर दाईं ओर — अपलोड फ़ाइल पर क्लिक करें।",
        },
        {
          label: 'ब्राउज़', title: 'अपनी MIS फ़ाइल चुनें',
          body: "<strong>Data Input Upload</strong> बॉक्स एक <strong>CSV या Excel</strong> फ़ाइल लेता है। फ़ाइल खींचकर डालें, या <strong>Browse</strong> दबाकर उसे चुनें — आपकी तैयार <strong>WATER ANALYSIS REPORT.xlsx</strong>। चुनते ही सिस्टम फ़ाइल पढ़ता है और हर कॉलम को सही सेंसर से मिलाता है।",
          voice: "डेटा इनपुट अपलोड बॉक्स एक सी एस वी या एक्सेल फ़ाइल स्वीकार करता है। आप फ़ाइल सीधे खींचकर डाल सकते हैं, या ब्राउज़ दबाकर चुन सकते हैं — यहाँ, आपकी तैयार वॉटर एनालिसिस रिपोर्ट। चुनते ही सिस्टम फ़ाइल पढ़ता है और हर कॉलम को सही सेंसर से मिलाना शुरू कर देता है। आपका एम आई एस फ़ॉर्मेट जैसा है वैसा ही तैयार है, तो कुछ दोबारा फ़ॉर्मेट करने की ज़रूरत नहीं।",
          tip: { type: 'noteLabel', text: 'आपकी फ़ाइल पहले से अपडेटेड MIS फ़ॉर्मेट में है — बस Browse करके चुनें, कोई फेरबदल नहीं।' },
        },
        {
          label: 'समीक्षा', title: 'सहेजने से पहले समीक्षा करें',
          body: "सब कुछ पहले एक <strong>प्रीव्यू ग्रिड</strong> में आता है — <strong>सेंसर टैग × तारीख़ व समय</strong> — हर मान अपनी रेंज से जाँचा और रंग-कोडित <strong>Safe, Warning, Error</strong> या <strong>Validation Error</strong>। <strong>Validation Stats</strong> जोड़ देते हैं: <strong>1032</strong> सेल, <strong>227</strong> तैयार, खाली चिह्नित। कुछ ठीक करना हो तो <strong>पेंसिल</strong>, फिर <strong>Revalidate</strong>।",
          voice: "अभी कुछ सहेजा नहीं गया — सब कुछ पहले एक प्रीव्यू ग्रिड में आता है। हर सेंसर टैग हर तारीख़ और समय के सामने, हर मान पहले सेट की रेंज से जाँचा, और रंग-कोडित: हरा सुरक्षित, पीला चेतावनी, लाल त्रुटि, ग्रे जब कोई सेल पढ़ी न जा सके। ऊपर, वैलिडेशन स्टैट्स मुख्य बात बताते हैं — फ़ाइल में एक हज़ार बत्तीस सेल, दो सौ सत्ताईस में असली रीडिंग तैयार, और खाली सेल बस चिह्नित कर दिए ताकि कोई ख़ाली मान अंदर न जाए। कुछ ठीक करना हो तो पेंसिल पर क्लिक करें, फिर रीवैलिडेट दबाएँ।",
          tip: { type: 'rememberLabel', text: 'जब तक आप सबमिट न करें कुछ नहीं लिखा जाता — प्रीव्यू पहले जाँचने और सुधारने के लिए है।' },
        },
        {
          label: 'सबमिट', title: 'सबमिट — सेकंडों में हो गया',
          body: "संतुष्ट हैं? <strong>Submit</strong> दबाएँ। हर वैध रीडिंग एक साथ अपने मिलते सेंसर में लिखी जाती है — यहाँ, एक बार में <strong>227 रीडिंग दर्ज</strong>, जो सीधे आपके डैशबोर्ड में बहती हैं। <strong>Done</strong> दबाएँ, और आपकी MIS रिपोर्ट अंदर।",
          voice: "संतुष्ट होने पर, सबमिट दबाएँ। हर वैध रीडिंग एक ही बार में अपने मिलते सेंसर में लिखी जाती है — यहाँ, सेकंडों में दो सौ सत्ताईस रीडिंग दर्ज, और वे सीधे आपके डैशबोर्ड तक बहती हैं। डन दबाएँ, और आपकी पूरी एम आई एस रिपोर्ट अंदर। यही है पूरा तरीका — साइन इन, डेटा इनपुट, अपलोड फ़ाइल, ब्राउज़, और सबमिट।",
          tip: { type: 'upNextLabel', text: 'कोई भी महीना, कभी भी — यही पाँच कदम आपकी MIS रिपोर्ट अंदर ले आते हैं।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>MIS அறிக்கையை</em><br>பதிவேற்றுதல்.',
      subtitle:
        'ஹிண்டால்கோ மஹானுக்கான ஒரு விரைவு நடைப்பயணம் — உள்நுழைந்து, உங்கள் புதுப்பிக்கப்பட்ட MIS வடிவத்தை Data Input வழியாக ஒரே பதிவேற்றத்தில் நேராக இயங்குதளத்தில் சேர்க்கவும்.',
      chapter: 'தனிப்பயன் டெமோ · ஹிண்டால்கோ மஹான்',
      steps: [
        {
          label: 'உள்நுழை', title: 'உங்கள் விவரங்களால் உள்நுழையுங்கள்',
          body: "<strong>app.digitalpaani.com</strong> திறந்து உள்நுழையுங்கள். உங்கள் கணக்கு — <strong>hindalco@digitalpaani.com</strong> — இடதுபுறம் சேமிக்கப்பட்டுள்ளது, ஒரு தட்டலில் நிரப்பப்படும். உள்நுழைந்தே இருக்க <strong>Keep Credentials</strong> டிக் செய்து வையுங்கள், பின் <strong>Login</strong> அழுத்துங்கள்.",
          voice: "உங்கள் புதுப்பிக்கப்பட்ட எம் ஐ எஸ் அறிக்கையை இயங்குதளத்தில் எப்படிச் சேர்ப்பது என்று பார்ப்போம். ஆப் டாட் டிஜிட்டல்பானி டாட் காம்-க்குச் சென்று உள்நுழையுங்கள். உங்கள் கணக்கு இங்கே இடதுபுறம் ஏற்கனவே சேமிக்கப்பட்டுள்ளது, எனவே ஒரே தட்டலில் உங்கள் விவரங்கள் நிரப்பப்படும். உள்நுழைந்தே இருக்க கீப் கிரெடென்ஷியல்ஸ் டிக் செய்திருங்கள், லாகின் அழுத்துங்கள்.",
        },
        {
          label: 'டேட்டா இன்புட்', title: 'மெனுவிலிருந்து Data Input-ஐ திறக்கவும்',
          body: "உள்ளே வந்ததும், மேல்-இடதில் உள்ள <strong>மெனுவைத்</strong> திறங்கள். <strong>Dashboard, Inventory, Insight List</strong> மற்றும் <strong>ScadaView</strong>-உடன் <strong>Data Input</strong>-ஐக் காண்பீர்கள் — சென்சாரிலிருந்து வராத ஒவ்வொரு அளவீட்டின் இடம், நீங்கள் பதிவேற்றுபவை உட்பட. அதைக் கிளிக் செய்யுங்கள்.",
          voice: "உள்ளே வந்ததும், மேல் இடதில் உள்ள மெனுவைத் திறங்கள். உங்கள் டாஷ்போர்டு, இன்வென்டரி, இன்சைட் லிஸ்ட், ஸ்காடாவியூ-உடன் டேட்டா இன்புட்டைக் காண்பீர்கள். சென்சாரிலிருந்து வராத ஒவ்வொரு அளவீடும் இருக்கும் பக்கம் அதுதான் — நீங்கள் பதிவேற்றுபவை உட்பட. டேட்டா இன்புட்டைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'அப்லோட் ஃபைல்', title: 'உங்கள் Data Input பக்கம்',
          body: "இதோ உங்கள் <strong>Data Input</strong> பக்கம். ஒவ்வொரு வரிசையும் உங்கள் ஒரு சென்சார் — அதன் <strong>Valid</strong> மற்றும் <strong>Safe</strong> வரம்புகள், எத்தனை <strong>முறை</strong> படிக்கப்படுகிறது, அதன் <strong>கடைசி மதிப்பு</strong>. ஒவ்வொன்றாகத் தட்டச்சு செய்யலாம், ஆனால் முழு MIS அறிக்கையையும் ஒரே நேரத்தில் கொண்டுவர, மேல்-வலதில் <strong>Upload File</strong> அழுத்துங்கள்.",
          voice: "இதோ உங்கள் டேட்டா இன்புட் பக்கம். ஒவ்வொரு வரிசையும் உங்கள் ஒரு சென்சார் — அதன் வேலிட் மற்றும் சேஃப் வரம்புகள், எத்தனை முறை படிக்கப்படுகிறது, எங்களிடம் உள்ள கடைசி மதிப்பு. நேரடியாக ஒவ்வொன்றாகத் தட்டச்சு செய்யலாம். ஆனால் உங்கள் எம் ஐ எஸ் அறிக்கையில் டஜன் கணக்கான சென்சார்களில் ஒரு முழு மாத அளவீடுகள் இருப்பதால், அதை ஒரே நேரத்தில் கொண்டுவருவோம். மேல் வலதில் — அப்லோட் ஃபைலைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'உலாவு', title: 'உங்கள் MIS கோப்பைத் தேர்ந்தெடுங்கள்',
          body: "<strong>Data Input Upload</strong> பெட்டி ஒரு <strong>CSV அல்லது Excel</strong> கோப்பை ஏற்கிறது. கோப்பை இழுத்து விடுங்கள், அல்லது <strong>Browse</strong> அழுத்தித் தேர்ந்தெடுங்கள் — உங்கள் தயாரான <strong>WATER ANALYSIS REPORT.xlsx</strong>. தேர்ந்ததும் சிஸ்டம் கோப்பைப் படித்து ஒவ்வொரு நெடுவரிசையையும் சரியான சென்சாருடன் பொருத்துகிறது.",
          voice: "டேட்டா இன்புட் அப்லோட் பெட்டி ஒரு சி எஸ் வி அல்லது எக்செல் கோப்பை ஏற்கிறது. கோப்பை நேராக இழுத்து விடலாம், அல்லது ப்ரவுஸ் அழுத்தித் தேர்ந்தெடுக்கலாம் — இங்கே, உங்கள் தயாரான வாட்டர் அனாலிசிஸ் ரிப்போர்ட். தேர்ந்தவுடன் சிஸ்டம் கோப்பைப் படித்து ஒவ்வொரு நெடுவரிசையையும் சரியான சென்சாருடன் பொருத்தத் தொடங்குகிறது. உங்கள் எம் ஐ எஸ் வடிவம் இருக்கும் நிலையிலேயே தயார், எனவே மறுபடியும் வடிவமைக்க எதுவும் இல்லை.",
          tip: { type: 'noteLabel', text: 'உங்கள் கோப்பு ஏற்கனவே புதுப்பிக்கப்பட்ட MIS வடிவத்தில் உள்ளது — Browse செய்து தேர்ந்தெடுங்கள், மாற்றம் தேவையில்லை.' },
        },
        {
          label: 'சரிபார்', title: 'சேமிப்பதற்கு முன் சரிபாருங்கள்',
          body: "அனைத்தும் முதலில் ஒரு <strong>முன்னோட்டக் கட்டத்தில்</strong> வரும் — <strong>சென்சார் டேக் × தேதி & நேரம்</strong> — ஒவ்வொரு மதிப்பும் அதன் வரம்புகளுடன் சரிபார்க்கப்பட்டு <strong>Safe, Warning, Error</strong> அல்லது <strong>Validation Error</strong> என வண்ணமிடப்படும். <strong>Validation Stats</strong> கூட்டித் தரும்: <strong>1032</strong> கட்டங்கள், <strong>227</strong> தயார், காலிகள் குறிக்கப்படும். சரிசெய்ய <strong>பென்சில்</strong>, பின் <strong>Revalidate</strong>.",
          voice: "இன்னும் எதுவும் சேமிக்கப்படவில்லை — அனைத்தும் முதலில் ஒரு முன்னோட்டக் கட்டத்தில் வரும். ஒவ்வொரு சென்சார் டேக்கும் ஒவ்வொரு தேதி நேரத்துக்கு எதிராக, ஒவ்வொரு மதிப்பும் நாம் அமைத்த வரம்புகளுடன் சரிபார்க்கப்பட்டு, வண்ணமிடப்படும்: பச்சை பாதுகாப்பு, மஞ்சள் எச்சரிக்கை, சிவப்பு பிழை, ஒரு கட்டம் படிக்க முடியாதபோது சாம்பல். மேலே, வேலிடேஷன் ஸ்டாட்ஸ் தலைப்புச் செய்தியைத் தரும் — கோப்பில் ஆயிரத்து முப்பத்திரண்டு கட்டங்கள், இருநூற்று இருபத்தேழில் உண்மையான அளவீடுகள் தயார், காலி கட்டங்கள் வெறுமனே குறிக்கப்படும் — காலி எதுவும் உள்ளே செல்லாது. ஏதேனும் சரிசெய்ய வேண்டுமெனில் பென்சிலைக் கிளிக் செய்து, பின் ரீவேலிடேட் அழுத்துங்கள்.",
          tip: { type: 'rememberLabel', text: 'நீங்கள் சமர்ப்பிக்கும் வரை எதுவும் எழுதப்படாது — முன்னோட்டம் முதலில் சரிபார்த்துத் திருத்த உங்களுக்கானது.' },
        },
        {
          label: 'சமர்ப்பி', title: 'சமர்ப்பி — விநாடிகளில் முடிந்தது',
          body: "திருப்தியா? <strong>Submit</strong> அழுத்துங்கள். ஒவ்வொரு செல்லுபடியான அளவீடும் ஒரே நேரத்தில் அதன் பொருந்தும் சென்சாரில் எழுதப்படும் — இங்கே, ஒரே முறையில் <strong>227 அளவீடுகள் பதிவு</strong>, நேராக உங்கள் டாஷ்போர்டுகளுக்குச் செல்கின்றன. <strong>Done</strong> அழுத்துங்கள், உங்கள் MIS அறிக்கை உள்ளே.",
          voice: "திருப்தியடைந்தவுடன், சமர்ப்பி அழுத்துங்கள். ஒவ்வொரு செல்லுபடியான அளவீடும் ஒரே நேரத்தில் அதன் பொருந்தும் சென்சாரில் எழுதப்படும் — இங்கே, விநாடிகளில் இருநூற்று இருபத்தேழு அளவீடுகள் பதிவாகி, நேராக உங்கள் டாஷ்போர்டுகளுக்குச் செல்கின்றன. டன் அழுத்துங்கள், உங்கள் முழு எம் ஐ எஸ் அறிக்கையும் உள்ளே. இதுதான் முழு வழி — உள்நுழை, டேட்டா இன்புட், அப்லோட் ஃபைல், ப்ரவுஸ், சமர்ப்பி.",
          tip: { type: 'upNextLabel', text: 'எந்த மாதமும், எப்போதும் — இதே ஐந்து படிகள் உங்கள் MIS அறிக்கையை உள்ளே கொண்டுவரும்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>MIS अहवाल</em><br>अपलोड करणे.',
      subtitle:
        'हिंडाल्को महानसाठी एक झटपट वॉकथ्रू — साइन इन करा, आणि तुमचे अपडेटेड MIS फॉरमॅट Data Input द्वारे एकाच अपलोडमध्ये थेट प्लॅटफॉर्ममध्ये टाका.',
      chapter: 'वैयक्तिक डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'साइन इन', title: 'तुमच्या क्रेडेन्शियलने साइन इन करा',
          body: "<strong>app.digitalpaani.com</strong> उघडा आणि साइन इन करा. तुमचे खाते — <strong>hindalco@digitalpaani.com</strong> — डावीकडे साठवलेले आहे, एका टॅपने भरते. साइन इन राहण्यासाठी <strong>Keep Credentials</strong> टिक ठेवा, मग <strong>Login</strong> दाबा.",
          voice: "चला बघूया तुमचा अपडेटेड एम आय एस अहवाल प्लॅटफॉर्ममध्ये कसा टाकायचा. ॲप डॉट डिजिटलपानी डॉट कॉमवर जा आणि साइन इन करा. तुमचे खाते इथे डावीकडे आधीच साठवलेले आहे, त्यामुळे एका टॅपने तुमची माहिती भरते. साइन इन राहण्यासाठी कीप क्रेडेन्शियल्स टिक ठेवा, आणि लॉगिन दाबा.",
        },
        {
          label: 'डेटा इनपुट', title: 'मेनूमधून Data Input उघडा',
          body: "आत आल्यावर, वर-डावीकडचा <strong>मेनू</strong> उघडा. <strong>Dashboard, Inventory, Insight List</strong> आणि <strong>ScadaView</strong> सोबत तुम्हाला <strong>Data Input</strong> दिसेल — सेन्सरकडून न येणाऱ्या प्रत्येक रीडिंगचे घर, तुम्ही अपलोड करता त्यांसह. त्यावर क्लिक करा.",
          voice: "आत आल्यावर, वर डावीकडचा मेनू उघडा. तुमच्या डॅशबोर्ड, इन्व्हेंटरी, इनसाइट लिस्ट आणि स्काडाव्ह्यूसोबत तुम्हाला डेटा इनपुट दिसेल. सेन्सरकडून न येणारी प्रत्येक रीडिंग जिथे राहते ते पान तेच — तुम्ही अपलोड करता त्यांसह. डेटा इनपुटवर क्लिक करा.",
        },
        {
          label: 'अपलोड फाइल', title: 'तुमचे Data Input पान',
          body: "हे तुमचे <strong>Data Input</strong> पान. प्रत्येक पंक्ती तुमचा एक सेन्सर — त्याची <strong>Valid</strong> व <strong>Safe</strong> श्रेणी, ती किती <strong>वेळा</strong> वाचली जाते, आणि तिचे <strong>शेवटचे मूल्य</strong>. तुम्ही एक-एक करून रीडिंग टाइप करू शकता, पण पूर्ण MIS अहवाल एकाच वेळी आणण्यासाठी वर-उजवीकडे <strong>Upload File</strong> दाबा.",
          voice: "हे तुमचे डेटा इनपुट पान. प्रत्येक पंक्ती तुमचा एक सेन्सर — त्याची व्हॅलिड व सेफ श्रेणी, ती किती वेळा वाचली जाते, आणि आमच्याकडे असलेले तिचे शेवटचे मूल्य. तुम्ही थेट एक-एक करून रीडिंग टाइप करू शकता. पण तुमच्या एम आय एस अहवालात डझनभर सेन्सरवर पूर्ण महिन्याची रीडिंग असल्याने, आपण ते एकाच वेळी आणू. वर उजवीकडे — अपलोड फाइलवर क्लिक करा.",
        },
        {
          label: 'ब्राउझ', title: 'तुमची MIS फाइल निवडा',
          body: "<strong>Data Input Upload</strong> बॉक्स एक <strong>CSV किंवा Excel</strong> फाइल घेतो. फाइल ओढून टाका, किंवा <strong>Browse</strong> दाबून निवडा — तुमची तयार <strong>WATER ANALYSIS REPORT.xlsx</strong>. निवडताच सिस्टम फाइल वाचते आणि प्रत्येक कॉलम योग्य सेन्सरशी जुळवते.",
          voice: "डेटा इनपुट अपलोड बॉक्स एक सी एस व्ही किंवा एक्सेल फाइल स्वीकारतो. तुम्ही फाइल थेट ओढून टाकू शकता, किंवा ब्राउझ दाबून निवडू शकता — इथे, तुमची तयार वॉटर ॲनालिसिस रिपोर्ट. निवडताच सिस्टम फाइल वाचते आणि प्रत्येक कॉलम योग्य सेन्सरशी जुळवू लागते. तुमचे एम आय एस फॉरमॅट आहे तसेच तयार आहे, त्यामुळे पुन्हा फॉरमॅट करण्यासारखे काही नाही.",
          tip: { type: 'noteLabel', text: 'तुमची फाइल आधीच अपडेटेड MIS फॉरमॅटमध्ये आहे — फक्त Browse करून निवडा, कोणताही बदल नको.' },
        },
        {
          label: 'पुनरावलोकन', title: 'जतन होण्याआधी पुनरावलोकन करा',
          body: "सर्व काही आधी एका <strong>प्रीव्ह्यू ग्रिड</strong>मध्ये येते — <strong>सेन्सर टॅग × तारीख व वेळ</strong> — प्रत्येक मूल्य त्याच्या श्रेणीशी तपासलेले आणि रंग-कोडित <strong>Safe, Warning, Error</strong> किंवा <strong>Validation Error</strong>. <strong>Validation Stats</strong> बेरीज करतात: <strong>1032</strong> सेल, <strong>227</strong> तयार, रिकामे चिन्हांकित. काही दुरुस्त करायचे असेल तर <strong>पेन्सिल</strong>, मग <strong>Revalidate</strong>.",
          voice: "अजून काहीही जतन झालेले नाही — सर्व काही आधी एका प्रीव्ह्यू ग्रिडमध्ये येते. प्रत्येक सेन्सर टॅग प्रत्येक तारीख व वेळेसमोर, प्रत्येक मूल्य आपण सेट केलेल्या श्रेणीशी तपासलेले, आणि रंग-कोडित: हिरवा सुरक्षित, पिवळा इशारा, लाल त्रुटी, राखाडी जेव्हा एखादा सेल वाचता येत नाही. वर, व्हॅलिडेशन स्टॅट्स मुख्य गोष्ट सांगतात — फाइलमध्ये एक हजार बत्तीस सेल, दोनशे सत्तावीसमध्ये खरी रीडिंग तयार, आणि रिकामे सेल फक्त चिन्हांकित केले जेणेकरून काहीही रिकामे आत जाणार नाही. काही दुरुस्त करायचे असेल तर पेन्सिलवर क्लिक करा, मग रीव्हॅलिडेट दाबा.",
          tip: { type: 'rememberLabel', text: 'तुम्ही सबमिट करेपर्यंत काहीही लिहिले जात नाही — प्रीव्ह्यू आधी तपासून दुरुस्त करण्यासाठी तुमचा आहे.' },
        },
        {
          label: 'सबमिट', title: 'सबमिट — सेकंदात पूर्ण',
          body: "समाधानी? <strong>Submit</strong> दाबा. प्रत्येक वैध रीडिंग एकाच वेळी त्याच्या जुळणाऱ्या सेन्सरमध्ये लिहिली जाते — इथे, एकाच वेळी <strong>227 रीडिंग नोंदली</strong>, थेट तुमच्या डॅशबोर्डमध्ये वाहत. <strong>Done</strong> दाबा, आणि तुमचा MIS अहवाल आत.",
          voice: "समाधानी झाल्यावर, सबमिट दाबा. प्रत्येक वैध रीडिंग एकाच वेळी त्याच्या जुळणाऱ्या सेन्सरमध्ये लिहिली जाते — इथे, सेकंदात दोनशे सत्तावीस रीडिंग नोंदली, आणि ती थेट तुमच्या डॅशबोर्डपर्यंत वाहते. डन दाबा, आणि तुमचा पूर्ण एम आय एस अहवाल आत. हाच संपूर्ण मार्ग — साइन इन, डेटा इनपुट, अपलोड फाइल, ब्राउझ, आणि सबमिट.",
          tip: { type: 'upNextLabel', text: 'कोणताही महिना, कधीही — हेच पाच टप्पे तुमचा MIS अहवाल आत आणतात.' },
        },
      ],
    },
  },
};

export default lesson;
