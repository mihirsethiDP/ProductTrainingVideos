import type { DataInputData, Lesson } from '../../types';

/**
 * Module 3 · Lesson 4 — Bulk Upload by Spreadsheet.   Tag: M3.L4
 * Upload a CSV/Excel; the model auto-detects the Sensor Tag and Date/Time axes
 * (rows or columns, any order, ignoring extra columns), validates every value,
 * and lets the user edit values + timestamps before submitting.
 */

type Lvl = 'safe' | 'warning' | 'error' | 'validation';
const c = (value: string, level: Lvl) => ({ value, level });

// DAILY-report style: descriptive columns + Sensor Tag, dates across the top.
const rich: DataInputData['preview'] = {
  extraColumns: [
    { header: 'Parameters', values: ['pH', 'Conductivity', 'TDS', 'Turbidity', 'T.Hard as CaCO₃', 'Chloride as Cl'] },
    { header: 'Unit', values: ['—', 'µS/cm', 'ppm', 'NTU', 'ppm', 'ppm'] },
    { header: 'Limiting', values: ['7.50-8.50', '<300', '<195', '<500', '<93', '<24'] },
  ],
  timeColumns: ['01/01/2026 12:00:00', '02/01/2026 12:00:00', '03/01/2026 12:00:00'],
  rows: [
    { tag: 'DI_WQ_PH_OWT_1:WSW', cells: [c('6.99', 'safe'), c('7.02', 'safe'), c('8.71', 'error')] },
    { tag: 'DI_WQ_CON_OS_TANK_RWT_1', cells: [c('65.2', 'safe'), c('290', 'warning'), c('243', 'safe')] },
    { tag: 'DI_WQ_TDS_OS_TANK_RWT_1', cells: [c('42.38', 'safe'), c('45.43', 'safe'), c('157.93', 'safe')] },
    { tag: 'DI_WQ_TUR_OS_TANK_RWT_1', cells: [c('32.4', 'safe'), c('480', 'warning'), c('15.3', 'safe')] },
    { tag: 'DI_WQ_TOT_OS_TANK_RWT_1', cells: [c('22', 'safe'), c('95', 'error'), c('102', 'error')] },
    { tag: 'DI_WQ_CHL_OS_TANK_RWT_1', cells: [c('7.1', 'safe'), c('24.14', 'error'), c('NIL', 'validation')] },
  ],
  total: 18, success: 11, failed: 7,
};

// asdfg style: one tag, first column has a time (07:00), the rest are date-only (→ 12:00 PM).
const simple: DataInputData['preview'] = {
  timeColumns: [
    '01/01/2026 07:00:00', '02/01/2026 12:00:00', '03/01/2026 12:00:00',
    '04/01/2026 12:00:00', '05/01/2026 12:00:00',
  ],
  rows: [
    { tag: 'DI_WQ_PH_SBR_TANK_Z3_1:AM', cells: [c('15', 'error'), c('30', 'error'), c('44', 'error'), c('77', 'error'), c('1000', 'error')] },
  ],
  total: 5, success: 0, failed: 5,
};

const prev = (preview: DataInputData['preview'], highlight: DataInputData['highlight']): DataInputData => ({
  mode: 'preview', preview, highlight,
});

const lesson: Lesson = {
  id: 'lesson-04-bulk-upload',
  moduleId: 'module-03-data-input',
  lessonNumber: 4,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'dataInput', caption: 'Upload a CSV or Excel file',
      widgetState: { dataInput: { mode: 'fileUpload', highlight: 'upload' } },
      cursor: [{ at: 0.3, x: 50, y: 60, click: true }] },
    { mode: 'widget', widget: 'dataInput', caption: 'It finds the Sensor Tag & Date axes',
      widgetState: { dataInput: prev(rich, 'detect') }, cursor: [{ at: 0.2, x: 36, y: 18 }, { at: 0.6, x: 70, y: 18 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Every value validated',
      widgetState: { dataInput: prev(rich, 'stats') }, cursor: [{ at: 0.3, x: 88, y: 14 }, { at: 0.7, x: 60, y: 50 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Date-only columns default to 12:00 PM',
      widgetState: { dataInput: prev(simple, 'editcol') }, cursor: [{ at: 0.3, x: 35, y: 22 }, { at: 0.7, x: 55, y: 22 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Revalidate, then submit',
      widgetState: { dataInput: prev(rich, 'submit') }, cursor: [{ at: 0.4, x: 92, y: 92, click: true }] },
  ],
  content: {
    en: {
      title: 'Bulk Upload by<br><em>Spreadsheet.</em>',
      subtitle:
        'Keep your readings in Excel? Upload the file — the system finds your sensors and dates, validates every value, and lets you fix and submit in one go.',
      chapter: 'Chapter Three · Data at the Source',
      steps: [
        {
          label: 'Upload', title: 'Upload a CSV or Excel file',
          body: "Beyond typing and photos, you can <strong>upload a spreadsheet</strong>. On the Data Input screen, hit <strong>Upload File</strong> and drop in a <strong>CSV or Excel</strong> file — a whole month of readings at once.",
          voice: "Here's a third way to get data in — straight from a spreadsheet. On the Data Input screen, there's an Upload File button in the top right. Click it, and you can drag in, or browse for, a C S V or Excel file. This is perfect when you already keep your readings in a spreadsheet — you can bring in a whole month in a single upload.",
        },
        {
          label: 'Auto-Detect', title: 'It finds your sensors and dates',
          body: "The system scans the file for <strong>two things</strong>: the <strong>sensor tags</strong> and the <strong>date &amp; time</strong>. One must run down the rows, the other across the columns — <strong>in any order</strong>. It happily ignores extra columns like <em>Parameters</em>, <em>Unit</em> or <em>Limiting</em>.",
          voice: "Now here's the clever bit. The system doesn't need your spreadsheet in a fixed format. It scans the file looking for two things — the sensor tags, and the date and time. One of them has to run down the rows, and the other across the columns, but it doesn't matter which way round they are. And it simply ignores any extra descriptive columns you keep for yourself, like parameter names, units, or limiting values. As soon as it locks onto both axes, it pulls out the data.",
          tip: { type: 'rememberLabel', text: 'One axis must be Sensor Tags, the other Date & Time — rows or columns, in any order. Everything else is ignored.' },
        },
        {
          label: 'Validate', title: 'Every value is checked',
          body: "It builds a preview grid — <strong>sensor tag × timestamp</strong> — and validates each value against its ranges. Cells are colour-coded <strong>Safe</strong>, <strong>Warning</strong>, <strong>Error</strong> or <strong>Validation Error</strong>, and the <strong>Validation Stats</strong> tally Total, Success and Failed.",
          voice: "Once detected, the system lays everything out in a preview grid — every sensor tag against every timestamp — and checks each value against the ranges we set up earlier. Each cell is colour-coded. Green for safe, yellow for a warning, red for an error, and grey when a value couldn't be validated at all. And up in the corner, the validation stats give you the headline — how many values in total, how many passed, and how many failed. You see the health of the whole upload at a glance.",
        },
        {
          label: 'Edit & Time', title: 'Fix values and timestamps',
          body: "Nothing is saved yet — you stay in control. Use the <strong>pencil</strong> to edit any value, and to set the <strong>date &amp; time</strong> for each column. If a column has only a <strong>date</strong>, the time defaults to <strong>12:00 PM</strong>; a cell that already has a time keeps it.",
          voice: "Importantly, nothing is saved yet — you're still in full control. You can click the pencil to edit any value the system flagged. And you can set the date and time for each column of readings. Here's a handy detail. If a column only carries a date, with no time, the system assumes twelve noon by default — so all you really need is the date. But if a cell already has a specific time, like seven in the morning, it keeps that exact time.",
          tip: { type: 'noteLabel', text: 'A date-only column defaults to 12:00 PM. Only the date is required; the time is optional.' },
        },
        {
          label: 'Submit', title: 'Revalidate, then submit',
          body: "After your edits, hit <strong>Revalidate</strong> to re-check everything, then <strong>Submit</strong>. All the readings are written into the matching <strong>Data Input sensors</strong> in one shot — a whole spreadsheet logged in seconds.",
          voice: "Once you've made your corrections, hit Revalidate, and the system re-checks everything with your changes applied. When you're happy, hit Submit. Every value in the grid is written into its matching Data Input sensor, all at once. So an entire spreadsheet — a month of readings across dozens of sensors — gets logged in just a few seconds. That's bulk upload, and that wraps up Data Input.",
          tip: { type: 'upNextLabel', text: 'Type it, photograph it, or upload it — three ways to get data in.' },
        },
      ],
    },
    hi: {
      title: 'स्प्रेडशीट से<br><em>बल्क अपलोड।</em>',
      subtitle:
        'रीडिंग्स एक्सेल में रखते हैं? फ़ाइल अपलोड करें — सिस्टम आपके सेंसर और तारीख़ें ढूँढता है, हर मान जाँचता है, और एक ही बार में ठीक करके जमा करने देता है।',
      chapter: 'अध्याय तीन · स्रोत पर डेटा',
      steps: [
        {
          label: 'अपलोड', title: 'CSV या Excel फ़ाइल अपलोड करें',
          body: 'टाइपिंग और फ़ोटो के अलावा, आप एक <strong>स्प्रेडशीट अपलोड</strong> कर सकते हैं। Data Input स्क्रीन पर, <strong>Upload File</strong> दबाएँ और एक <strong>CSV या Excel</strong> फ़ाइल डालें — एक साथ पूरे महीने की रीडिंग्स।',
          voice: 'डेटा दर्ज करने का तीसरा तरीका — सीधे स्प्रेडशीट से। डेटा इनपुट स्क्रीन पर, ऊपर दाईं ओर एक अपलोड फ़ाइल बटन है। इस पर क्लिक करें, और आप एक सी एस वी या एक्सेल फ़ाइल खींचकर डाल सकते हैं या ब्राउज़ कर सकते हैं। यह तब उपयुक्त है जब आप पहले से अपनी रीडिंग्स स्प्रेडशीट में रखते हैं — आप एक ही अपलोड में पूरा महीना ला सकते हैं।',
        },
        {
          label: 'स्वतः-पहचान', title: 'यह आपके सेंसर और तारीख़ें ढूँढता है',
          body: 'सिस्टम फ़ाइल में <strong>दो चीज़ें</strong> खोजता है: <strong>सेंसर टैग</strong> और <strong>तारीख़ व समय</strong>। एक पंक्तियों में और दूसरा कॉलमों में होना चाहिए — <strong>किसी भी क्रम में</strong>। यह <em>Parameters</em>, <em>Unit</em> या <em>Limiting</em> जैसे अतिरिक्त कॉलम को अनदेखा कर देता है।',
          voice: 'अब चतुर हिस्सा। सिस्टम को आपकी स्प्रेडशीट किसी तय फ़ॉर्मेट में नहीं चाहिए। यह फ़ाइल में दो चीज़ें खोजता है — सेंसर टैग, और तारीख़ व समय। इनमें से एक पंक्तियों में और दूसरा कॉलमों में होना चाहिए, पर किस तरफ़ हो इससे फ़र्क नहीं पड़ता। और यह आपके रखे किसी भी अतिरिक्त वर्णनात्मक कॉलम को बस अनदेखा कर देता है — जैसे पैरामीटर नाम, इकाइयाँ, या लिमिटिंग मान। जैसे ही यह दोनों अक्षों को पकड़ लेता है, यह डेटा निकाल लेता है।',
          tip: { type: 'rememberLabel', text: 'एक अक्ष सेंसर टैग, दूसरा तारीख़ व समय होना चाहिए — पंक्तियाँ या कॉलम, किसी भी क्रम में। बाकी सब अनदेखा।' },
        },
        {
          label: 'जाँच', title: 'हर मान जाँचा जाता है',
          body: 'यह एक प्रीव्यू ग्रिड बनाता है — <strong>सेंसर टैग × समय</strong> — और हर मान को उसकी रेंज से जाँचता है। सेल रंग-कोडित होते हैं <strong>Safe</strong>, <strong>Warning</strong>, <strong>Error</strong> या <strong>Validation Error</strong>, और <strong>Validation Stats</strong> Total, Success व Failed गिनते हैं।',
          voice: 'पहचान के बाद, सिस्टम सब कुछ एक प्रीव्यू ग्रिड में रखता है — हर सेंसर टैग हर समय के सामने — और हर मान को पहले सेट की गई रेंज से जाँचता है। हर सेल रंग-कोडित है। सुरक्षित के लिए हरा, चेतावनी के लिए पीला, त्रुटि के लिए लाल, और जब कोई मान बिल्कुल जाँचा न जा सके तब ग्रे। और कोने में, वैलिडेशन स्टैट्स मुख्य बात बताते हैं — कुल कितने मान, कितने पास, और कितने फ़ेल। आप पूरे अपलोड की स्थिति एक नज़र में देख लेते हैं।',
        },
        {
          label: 'संपादन व समय', title: 'मान और समय ठीक करें',
          body: 'अभी कुछ सहेजा नहीं गया — नियंत्रण आपके पास। किसी भी मान को संपादित करने और हर कॉलम के लिए <strong>तारीख़ व समय</strong> सेट करने के लिए <strong>पेंसिल</strong> का उपयोग करें। अगर किसी कॉलम में केवल <strong>तारीख़</strong> है, तो समय <strong>12:00 PM</strong> पर डिफ़ॉल्ट होता है; जिस सेल में पहले से समय है वह बना रहता है।',
          voice: 'ज़रूरी बात — अभी कुछ सहेजा नहीं गया, नियंत्रण पूरी तरह आपके पास है। सिस्टम ने जो मान चिह्नित किए उन्हें संपादित करने के लिए पेंसिल पर क्लिक करें। और आप रीडिंग्स के हर कॉलम के लिए तारीख़ व समय सेट कर सकते हैं। एक उपयोगी बात। अगर किसी कॉलम में केवल तारीख़ है, समय नहीं, तो सिस्टम डिफ़ॉल्ट रूप से दोपहर बारह बजे मान लेता है — तो आपको बस तारीख़ चाहिए। पर अगर किसी सेल में पहले से कोई ख़ास समय है, जैसे सुबह सात बजे, तो वह वही समय बनाए रखता है।',
          tip: { type: 'noteLabel', text: 'केवल-तारीख़ वाला कॉलम 12:00 PM पर डिफ़ॉल्ट होता है। केवल तारीख़ ज़रूरी है; समय वैकल्पिक।' },
        },
        {
          label: 'जमा करें', title: 'फिर से जाँचें, फिर जमा करें',
          body: 'अपने संपादन के बाद, सब कुछ फिर जाँचने के लिए <strong>Revalidate</strong> दबाएँ, फिर <strong>Submit</strong>। सारी रीडिंग्स एक ही बार में मिलते <strong>Data Input सेंसर</strong> में लिखी जाती हैं — सेकंडों में पूरी स्प्रेडशीट दर्ज।',
          voice: 'सुधार करने के बाद, रीवैलिडेट दबाएँ, और सिस्टम आपके बदलावों के साथ सब कुछ फिर से जाँचता है। संतुष्ट होने पर, सबमिट दबाएँ। ग्रिड का हर मान अपने मिलते डेटा इनपुट सेंसर में, एक साथ लिखा जाता है। तो एक पूरी स्प्रेडशीट — दर्जनों सेंसर पर एक महीने की रीडिंग्स — बस कुछ सेकंडों में दर्ज हो जाती है। यह है बल्क अपलोड, और यह डेटा इनपुट को पूरा करता है।',
          tip: { type: 'upNextLabel', text: 'टाइप करें, फ़ोटो लें, या अपलोड करें — डेटा दर्ज करने के तीन तरीके।' },
        },
      ],
    },
    ta: {
      title: 'ஸ்ப்ரெட்ஷீட் வழியாக<br><em>மொத்த பதிவேற்றம்.</em>',
      subtitle:
        'அளவீடுகளை எக்செலில் வைக்கிறீர்களா? கோப்பைப் பதிவேற்றுங்கள் — சிஸ்டம் உங்கள் சென்சார்களையும் தேதிகளையும் கண்டறிந்து, ஒவ்வொரு மதிப்பையும் சரிபார்த்து, சரிசெய்து சமர்ப்பிக்க அனுமதிக்கிறது.',
      chapter: 'அத்தியாயம் மூன்று · மூலத்தில் தரவு',
      steps: [
        {
          label: 'பதிவேற்று', title: 'CSV அல்லது Excel கோப்பைப் பதிவேற்று',
          body: 'தட்டச்சு மற்றும் புகைப்படங்களுக்கு அப்பால், ஒரு <strong>ஸ்ப்ரெட்ஷீட்டைப் பதிவேற்றலாம்</strong>. Data Input திரையில், <strong>Upload File</strong> அழுத்தி ஒரு <strong>CSV அல்லது Excel</strong> கோப்பை இடுங்கள் — ஒரே நேரத்தில் ஒரு மாத அளவீடுகள்.',
          voice: 'தரவைப் பெற மூன்றாவது வழி — நேராக ஒரு ஸ்ப்ரெட்ஷீட்டிலிருந்து. டேட்டா இன்புட் திரையில், மேல் வலதுபுறம் ஒரு அப்லோட் ஃபைல் பொத்தான் உள்ளது. அதை கிளிக் செய்து, ஒரு சி எஸ் வி அல்லது எக்செல் கோப்பை இழுத்து விடலாம் அல்லது உலாவலாம். உங்கள் அளவீடுகளை ஏற்கனவே ஒரு ஸ்ப்ரெட்ஷீட்டில் வைத்திருந்தால் இது ஏற்றது — ஒரே பதிவேற்றத்தில் ஒரு முழு மாதத்தைக் கொண்டுவரலாம்.',
        },
        {
          label: 'தானாகக் கண்டறிதல்', title: 'உங்கள் சென்சார்களையும் தேதிகளையும் கண்டறிகிறது',
          body: 'சிஸ்டம் கோப்பில் <strong>இரண்டு விஷயங்களைத்</strong> தேடுகிறது: <strong>சென்சார் டேக்குகள்</strong> மற்றும் <strong>தேதி & நேரம்</strong>. ஒன்று வரிசைகளில், மற்றொன்று நெடுவரிசைகளில் இருக்க வேண்டும் — <strong>எந்த வரிசையிலும்</strong>. <em>Parameters</em>, <em>Unit</em> அல்லது <em>Limiting</em> போன்ற கூடுதல் நெடுவரிசைகளை அது புறக்கணிக்கிறது.',
          voice: 'இப்போது புத்திசாலித்தனமான பகுதி. சிஸ்டத்துக்கு உங்கள் ஸ்ப்ரெட்ஷீட் ஒரு நிலையான வடிவத்தில் தேவையில்லை. அது கோப்பில் இரண்டு விஷயங்களைத் தேடுகிறது — சென்சார் டேக்குகள், மற்றும் தேதி மற்றும் நேரம். அவற்றில் ஒன்று வரிசைகளிலும், மற்றொன்று நெடுவரிசைகளிலும் இருக்க வேண்டும், ஆனால் எந்தப் பக்கம் என்பது முக்கியமல்ல. உங்களுக்காக நீங்கள் வைத்திருக்கும் கூடுதல் விளக்க நெடுவரிசைகளை — அளவுரு பெயர்கள், அலகுகள், அல்லது வரம்பு மதிப்புகள் — அது வெறுமனே புறக்கணிக்கிறது. இரண்டு அச்சுகளையும் பிடித்தவுடன், தரவைப் பிரித்தெடுக்கிறது.',
          tip: { type: 'rememberLabel', text: 'ஒரு அச்சு சென்சார் டேக்குகள், மற்றொன்று தேதி & நேரம் — வரிசைகள் அல்லது நெடுவரிசைகள், எந்த வரிசையிலும். மற்றவை புறக்கணிக்கப்படும்.' },
        },
        {
          label: 'சரிபார்ப்பு', title: 'ஒவ்வொரு மதிப்பும் சரிபார்க்கப்படுகிறது',
          body: 'இது ஒரு முன்னோட்டக் கட்டத்தை உருவாக்குகிறது — <strong>சென்சார் டேக் × நேரமுத்திரை</strong> — ஒவ்வொரு மதிப்பையும் அதன் வரம்புகளுடன் சரிபார்க்கிறது. கட்டங்கள் <strong>Safe</strong>, <strong>Warning</strong>, <strong>Error</strong> அல்லது <strong>Validation Error</strong> எனப் வண்ணமிடப்படுகின்றன, <strong>Validation Stats</strong> Total, Success, Failed எண்ணிக்கையைக் காட்டுகிறது.',
          voice: 'கண்டறிந்தவுடன், சிஸ்டம் அனைத்தையும் ஒரு முன்னோட்டக் கட்டத்தில் வைக்கிறது — ஒவ்வொரு சென்சார் டேக்கையும் ஒவ்வொரு நேரமுத்திரைக்கு எதிராக — ஒவ்வொரு மதிப்பையும் முன்பு அமைத்த வரம்புகளுடன் சரிபார்க்கிறது. ஒவ்வொரு கட்டமும் வண்ணமிடப்பட்டுள்ளது. பாதுகாப்பானதற்கு பச்சை, எச்சரிக்கைக்கு மஞ்சள், பிழைக்கு சிவப்பு, ஒரு மதிப்பை சரிபார்க்கவே முடியாதபோது சாம்பல். மூலையில், வேலிடேஷன் ஸ்டாட்ஸ் தலைப்புச் செய்தியைத் தருகிறது — மொத்தம் எத்தனை, எத்தனை தேர்ச்சி, எத்தனை தோல்வி. முழு பதிவேற்றத்தின் நிலையையும் ஒரே பார்வையில் காண்கிறீர்கள்.',
        },
        {
          label: 'திருத்தம் & நேரம்', title: 'மதிப்புகளையும் நேரமுத்திரைகளையும் சரிசெய்',
          body: 'இன்னும் எதுவும் சேமிக்கப்படவில்லை — கட்டுப்பாடு உங்களிடம். எந்த மதிப்பையும் திருத்தவும், ஒவ்வொரு நெடுவரிசைக்கும் <strong>தேதி & நேரத்தை</strong> அமைக்கவும் <strong>பென்சிலைப்</strong> பயன்படுத்துங்கள். ஒரு நெடுவரிசையில் <strong>தேதி</strong> மட்டும் இருந்தால், நேரம் <strong>12:00 PM</strong>-ஆக இயல்பாகிறது; ஏற்கனவே நேரம் உள்ள கட்டம் அதைத் தக்கவைக்கிறது.',
          voice: 'முக்கியமாக, இன்னும் எதுவும் சேமிக்கப்படவில்லை — கட்டுப்பாடு முழுவதும் உங்களிடம். சிஸ்டம் குறித்த எந்த மதிப்பையும் திருத்த பென்சிலைக் கிளிக் செய்யலாம். ஒவ்வொரு அளவீட்டு நெடுவரிசைக்கும் தேதி மற்றும் நேரத்தை அமைக்கலாம். ஒரு பயனுள்ள விவரம். ஒரு நெடுவரிசையில் தேதி மட்டும் இருந்தால், நேரம் இல்லாமல், சிஸ்டம் இயல்பாக நண்பகல் பன்னிரெண்டு மணி எனக் கருதுகிறது — எனவே உங்களுக்குத் தேதி மட்டும் போதும். ஆனால் ஒரு கட்டத்தில் ஏற்கனவே ஒரு குறிப்பிட்ட நேரம் இருந்தால், காலை ஏழு மணி போல, அது அந்த நேரத்தைத் தக்கவைக்கிறது.',
          tip: { type: 'noteLabel', text: 'தேதி-மட்டும் நெடுவரிசை 12:00 PM-ஆக இயல்பாகிறது. தேதி மட்டுமே தேவை; நேரம் விருப்பம்.' },
        },
        {
          label: 'சமர்ப்பி', title: 'மீண்டும் சரிபார்த்து, பின் சமர்ப்பி',
          body: 'உங்கள் திருத்தங்களுக்குப் பிறகு, அனைத்தையும் மீண்டும் சரிபார்க்க <strong>Revalidate</strong> அழுத்துங்கள், பின் <strong>Submit</strong>. அனைத்து அளவீடுகளும் ஒரே நேரத்தில் பொருந்தும் <strong>Data Input சென்சார்களில்</strong> எழுதப்படுகின்றன — விநாடிகளில் ஒரு முழு ஸ்ப்ரெட்ஷீட்.',
          voice: 'திருத்தங்களைச் செய்த பிறகு, ரீவேலிடேட் அழுத்துங்கள், சிஸ்டம் உங்கள் மாற்றங்களுடன் அனைத்தையும் மீண்டும் சரிபார்க்கிறது. திருப்தி அடைந்தவுடன், சமர்ப்பி அழுத்துங்கள். கட்டத்தில் உள்ள ஒவ்வொரு மதிப்பும் அதன் பொருந்தும் டேட்டா இன்புட் சென்சாரில், ஒரே நேரத்தில் எழுதப்படுகிறது. எனவே ஒரு முழு ஸ்ப்ரெட்ஷீட் — டஜன் கணக்கான சென்சார்களில் ஒரு மாத அளவீடுகள் — சில விநாடிகளில் பதிவாகிறது. அதுதான் மொத்த பதிவேற்றம், இது டேட்டா இன்புட்டை முடிக்கிறது.',
          tip: { type: 'upNextLabel', text: 'தட்டச்சு செய், படமெடு, அல்லது பதிவேற்று — தரவைப் பெற மூன்று வழிகள்.' },
        },
      ],
    },
    mr: {
      title: 'स्प्रेडशीटने<br><em>बल्क अपलोड.</em>',
      subtitle:
        'रीडिंग एक्सेलमध्ये ठेवता? फाइल अपलोड करा — सिस्टम तुमचे सेन्सर आणि तारखा शोधते, प्रत्येक मूल्य पडताळते, आणि एकाच वेळी दुरुस्त करून सबमिट करू देते.',
      chapter: 'अध्याय तीन · स्रोतावर डेटा',
      steps: [
        {
          label: 'अपलोड', title: 'CSV किंवा Excel फाइल अपलोड करा',
          body: 'टायपिंग आणि फोटोंपलीकडे, तुम्ही एक <strong>स्प्रेडशीट अपलोड</strong> करू शकता. Data Input स्क्रीनवर, <strong>Upload File</strong> दाबा आणि एक <strong>CSV किंवा Excel</strong> फाइल टाका — एकाच वेळी पूर्ण महिन्याची रीडिंग.',
          voice: 'डेटा भरण्याचा तिसरा मार्ग — थेट स्प्रेडशीटमधून. डेटा इनपुट स्क्रीनवर, वर उजवीकडे एक अपलोड फाइल बटण आहे. त्यावर क्लिक करा, आणि तुम्ही एक सी एस व्ही किंवा एक्सेल फाइल ओढून टाकू शकता किंवा ब्राउझ करू शकता. तुम्ही आधीच तुमची रीडिंग स्प्रेडशीटमध्ये ठेवत असाल तेव्हा हे योग्य आहे — तुम्ही एकाच अपलोडमध्ये पूर्ण महिना आणू शकता.',
        },
        {
          label: 'स्वयं-शोध', title: 'ते तुमचे सेन्सर आणि तारखा शोधते',
          body: 'सिस्टम फाइलमध्ये <strong>दोन गोष्टी</strong> शोधते: <strong>सेन्सर टॅग</strong> आणि <strong>तारीख व वेळ</strong>. एक पंक्तींमध्ये आणि दुसरे कॉलममध्ये असावे — <strong>कोणत्याही क्रमाने</strong>. ते <em>Parameters</em>, <em>Unit</em> किंवा <em>Limiting</em> सारखे अतिरिक्त कॉलम दुर्लक्षित करते.',
          voice: 'आता हुशार भाग. सिस्टमला तुमची स्प्रेडशीट ठराविक स्वरूपात लागत नाही. ती फाइलमध्ये दोन गोष्टी शोधते — सेन्सर टॅग, आणि तारीख व वेळ. यापैकी एक पंक्तींमध्ये आणि दुसरे कॉलममध्ये असावे, पण कोणत्या बाजूला हे महत्त्वाचे नाही. आणि तुम्ही स्वतःसाठी ठेवलेले कोणतेही अतिरिक्त वर्णनात्मक कॉलम ती दुर्लक्षित करते — जसे पॅरामीटर नावे, एकके, किंवा लिमिटिंग मूल्ये. दोन्ही अक्ष पकडताच, ती डेटा काढते.',
          tip: { type: 'rememberLabel', text: 'एक अक्ष सेन्सर टॅग, दुसरा तारीख व वेळ असावा — पंक्ती किंवा कॉलम, कोणत्याही क्रमाने. बाकी सर्व दुर्लक्षित.' },
        },
        {
          label: 'पडताळणी', title: 'प्रत्येक मूल्य तपासले जाते',
          body: 'ते एक प्रीव्ह्यू ग्रिड तयार करते — <strong>सेन्सर टॅग × वेळ</strong> — आणि प्रत्येक मूल्य त्याच्या श्रेणीशी तपासते. सेल रंग-कोडित असतात <strong>Safe</strong>, <strong>Warning</strong>, <strong>Error</strong> किंवा <strong>Validation Error</strong>, आणि <strong>Validation Stats</strong> Total, Success व Failed मोजतात.',
          voice: 'शोधल्यानंतर, सिस्टम सर्व काही एका प्रीव्ह्यू ग्रिडमध्ये मांडते — प्रत्येक सेन्सर टॅग प्रत्येक वेळेसमोर — आणि प्रत्येक मूल्य आधी सेट केलेल्या श्रेणीशी तपासते. प्रत्येक सेल रंग-कोडित आहे. सुरक्षितसाठी हिरवा, इशाऱ्यासाठी पिवळा, त्रुटीसाठी लाल, आणि एखादे मूल्य अजिबात पडताळता न आल्यास राखाडी. आणि कोपऱ्यात, व्हॅलिडेशन स्टॅट्स मुख्य गोष्ट सांगतात — एकूण किती, किती पास, आणि किती फेल. तुम्ही पूर्ण अपलोडची स्थिती एका दृष्टीक्षेपात पाहता.',
        },
        {
          label: 'संपादन व वेळ', title: 'मूल्ये आणि वेळा दुरुस्त करा',
          body: 'अजून काहीही जतन झालेले नाही — नियंत्रण तुमच्याकडे. कोणतेही मूल्य संपादित करण्यासाठी आणि प्रत्येक कॉलमसाठी <strong>तारीख व वेळ</strong> सेट करण्यासाठी <strong>पेन्सिल</strong> वापरा. एखाद्या कॉलममध्ये फक्त <strong>तारीख</strong> असेल, तर वेळ <strong>12:00 PM</strong> वर डीफॉल्ट होते; आधीच वेळ असलेला सेल ती ठेवतो.',
          voice: 'महत्त्वाचे — अजून काहीही जतन झालेले नाही, नियंत्रण पूर्णपणे तुमच्याकडे आहे. सिस्टमने चिन्हांकित केलेले कोणतेही मूल्य संपादित करण्यासाठी पेन्सिलवर क्लिक करा. आणि तुम्ही रीडिंगच्या प्रत्येक कॉलमसाठी तारीख व वेळ सेट करू शकता. एक उपयुक्त तपशील. एखाद्या कॉलममध्ये फक्त तारीख असेल, वेळ नसेल, तर सिस्टम डीफॉल्टनुसार दुपारी बारा वाजता गृहीत धरते — म्हणून तुम्हाला फक्त तारीख हवी. पण एखाद्या सेलमध्ये आधीच विशिष्ट वेळ असेल, जसे सकाळी सात, तर ती तीच वेळ ठेवते.',
          tip: { type: 'noteLabel', text: 'फक्त-तारीख कॉलम 12:00 PM वर डीफॉल्ट होतो. फक्त तारीख आवश्यक; वेळ पर्यायी.' },
        },
        {
          label: 'सबमिट', title: 'पुन्हा पडताळा, मग सबमिट करा',
          body: 'तुमच्या संपादनानंतर, सर्व काही पुन्हा तपासण्यासाठी <strong>Revalidate</strong> दाबा, मग <strong>Submit</strong>. सर्व रीडिंग एकाच वेळी जुळणाऱ्या <strong>Data Input सेन्सरमध्ये</strong> लिहिली जातात — सेकंदात पूर्ण स्प्रेडशीट नोंदली.',
          voice: 'दुरुस्त्या केल्यानंतर, रीव्हॅलिडेट दाबा, आणि सिस्टम तुमच्या बदलांसह सर्व काही पुन्हा तपासते. समाधानी झाल्यावर, सबमिट दाबा. ग्रिडमधील प्रत्येक मूल्य त्याच्या जुळणाऱ्या डेटा इनपुट सेन्सरमध्ये, एकाच वेळी लिहिले जाते. म्हणून एक पूर्ण स्प्रेडशीट — डझनभर सेन्सरवर एका महिन्याची रीडिंग — फक्त काही सेकंदात नोंदली जाते. हे आहे बल्क अपलोड, आणि यामुळे डेटा इनपुट पूर्ण होते.',
          tip: { type: 'upNextLabel', text: 'टाइप करा, फोटो घ्या, किंवा अपलोड करा — डेटा भरण्याचे तीन मार्ग.' },
        },
      ],
    },
  },
};

export default lesson;
