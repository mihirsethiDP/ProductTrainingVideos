import type { AdvTableData, Lesson } from '../../types';

/**
 * Module 2 · Lesson 4 — Advanced Table.   Tag: M2.L4
 * The 3-axis table (Time × Sensor × Aggregation) with its own time reference.
 * Each step swaps the widget into one of the configurations from the reference
 * screenshots to demonstrate axis rearrangement.
 */

const v = (vals: (string | number)[]) => vals.map((x) => ({ value: String(x) }));

// Config 1 — Inlet/Outlet quality: aggregation rows × sensor columns, reference = Today (purple).
function inletOutlet(ring?: AdvTableData['ring']): AdvTableData {
  return {
    accent: 'purple',
    title: 'Inlet and Outlet Quality Parameters',
    referenceLabel: 'Today',
    ring,
    colHeaders: [
      'Inlet COD (Ref <600ppm)', 'Outlet COD (Ref <50ppm)', 'Inlet BOD (Ref <300ppm)',
      'Outlet BOD (Ref <10ppm)', 'Inlet TSS (Ref <400ppm)', 'Outlet TSS (Ref <10ppm)',
      'COD Reduction Efficiency (Ref >80%)', 'BOD Reduction Efficiency (Ref >80%)',
      'TSS Reduction Efficiency (Ref >80%)',
    ],
    rows: [
      { label: 'Current', cells: v([654.3, 74.6, 98.19, 5.98, 104.92, 8.99, 88.6, 93.91, 91.43]) },
      { label: 'Maximum', cells: v([699.56, 162.32, 353.93, 13, 485.98, 19.54, 98.66, 99.75, 99.73]) },
      { label: 'Minimum', cells: v([451.38, 9.35, 67.72, 0.75, 72.01, 1.12, 76.8, 93.91, 91.43]) },
      { label: 'Average', cells: v([657.56, 21.58, 214.89, 1.73, 259.25, 2.6, 96.74, 98.91, 98.54]) },
    ],
  };
}

// Config 2 — Raw water: time rows × sensor columns, reference = Current aggregation (teal).
const rawWater: AdvTableData = {
  accent: 'teal',
  title: 'Raw Water Quality Parameters',
  referenceLabel: 'Current',
  colHeaders: [
    'pH', 'Conductivity', 'TDS', 'Turbidity', 'Hardness', 'Calcium Hardness',
    'Magnesium Hardness', 'Chlorides', 'Phenolphthalein Alkalinity', 'Methyl Orange Alkalinity', 'Silica',
  ],
  rows: ['Today', 'Last 24 Hours', 'Yesterday', 'Last 7 Days', 'Last 30 Days'].map((label) => ({
    label,
    cells: v(['—', '—', '—', '—', '—', '—', '—', '—', '—', '—', '—']),
  })),
};

// Config 3 — Sensor rows (aggregation badge) × time column, reference = None (teal).
const sensorByTime: AdvTableData = {
  accent: 'teal',
  title: 'Advance Table Widget 1',
  referenceLabel: 'None',
  wideRowHeader: true,
  ring: 'columns',
  colHeaders: ['Today'],
  rows: [
    { label: 'SV30 Sensor (SV_ATdd1_1)', badge: 'Current', cells: v([100]) },
    { label: 'Total energy Used (EMKW_1)', badge: 'Current', cells: v([100]) },
  ],
};

// Config 4 — Sensor rows (time badge) × aggregation columns, reference = None (teal).
const sensorByAgg: AdvTableData = {
  accent: 'teal',
  title: 'Advance Table Widget 1',
  referenceLabel: 'None',
  wideRowHeader: true,
  ring: 'columns',
  colHeaders: ['Min', 'Cumulative'],
  rows: [
    { label: 'Level Transmitter (LT_CCTdd1_1)', badge: 'Today', cells: v([100, 100]) },
    { label: 'Total energy Used (EMKW_1)', badge: 'Last 24 Hours', cells: v([100, 100]) },
  ],
};

const lesson: Lesson = {
  id: 'lesson-04-advanced-table',
  moduleId: 'module-02-widgets',
  lessonNumber: 4,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'advancedTable', caption: 'Advanced Table',
      widgetState: { advTable: inletOutlet() }, cursor: [{ at: 0.1, x: 50, y: 28 }] },
    { mode: 'widget', widget: 'advancedTable', caption: 'Its own time reference',
      widgetState: { advTable: inletOutlet('reference') },
      cursor: [{ at: 0.15, x: 8, y: 22, click: true }, { at: 0.6, x: 8, y: 22 }] },
    { mode: 'widget', widget: 'advancedTable', caption: 'Time × Sensor × Aggregation',
      widgetState: { advTable: rawWater }, cursor: [{ at: 0.2, x: 8, y: 40 }, { at: 0.6, x: 45, y: 16 }] },
    { mode: 'widget', widget: 'advancedTable', caption: 'Set an axis to None',
      widgetState: { advTable: sensorByTime }, cursor: [{ at: 0.2, x: 8, y: 22, click: true }, { at: 0.6, x: 70, y: 18 }] },
    { mode: 'widget', widget: 'advancedTable', caption: 'Last axis becomes the columns',
      widgetState: { advTable: sensorByAgg }, cursor: [{ at: 0.3, x: 70, y: 18 }, { at: 0.7, x: 35, y: 45 }] },
    { mode: 'widget', widget: 'advancedTable', caption: 'Advanced Table',
      widgetState: { advTable: inletOutlet() }, cursor: [{ at: 0.2, x: 50, y: 25 }] },
  ],
  content: {
    en: {
      title: 'The <em>Advanced</em><br>Table.',
      subtitle:
        'The most powerful table in DigitalPaani — and the one the Elastic Table grew from. Three axes, fully rearrangeable, with a clock all its own.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'The original, most powerful table',
          body: "The <strong>Advanced Table</strong> is the most flexible table in DigitalPaani — in fact, the <strong>Elastic Table grew out of it</strong>. Here it shows inlet and outlet quality, with <strong>aggregations</strong> down the rows and <strong>sensors</strong> across the columns.",
          voice: "Last in our table family is the Advanced Table. This is the original, and the most powerful — in fact, the Elastic Table we just saw grew out of this one. Here it's showing inlet and outlet quality parameters, with aggregations like current, maximum, minimum and average running down the rows, and each sensor across the columns.",
        },
        {
          label: 'Its Own Time', title: 'It keeps its own clock',
          body: "Here's the crucial difference: the Advanced Table <strong>does not respect the dashboard time range</strong>. It has a <strong>relative time of its own</strong>, set in its <strong>Reference</strong> selector — here, <em>Today</em>. Every other widget follows the dashboard; this one is independent.",
          voice: "Now, the most important thing to understand about the Advanced Table. Unlike every other widget, it does not respect the dashboard's time range. It keeps its own clock. You set it right here, in the Reference selector — in this case, Today. So while the rest of your dashboard follows the time range at the top of the page, the Advanced Table marches to its own. Remember this — it's the single biggest difference from the Elastic Table.",
          tip: { type: 'noteLabel', text: 'If an Advanced Table seems out of step with the rest of your dashboard, check its Reference — it has its own time setting.' },
        },
        {
          label: 'Three Axes', title: 'Time × Sensor × Aggregation',
          body: "The Advanced Table is the <strong>only</strong> table with <strong>three axes</strong>: <strong>Time</strong>, <strong>Sensor</strong>, and <strong>Aggregation</strong>. Arrange them any way you like. Here <strong>time periods</strong> run down the rows and <strong>sensors</strong> across — with the aggregation fixed to <em>Current</em>.",
          voice: "Here's what makes it so powerful. It's the only table with three axes — time, sensor, and aggregation. And you can arrange those three in any order you like. In this view, we've put time periods like today, yesterday, and last seven days down the rows, sensors across the columns, and fixed the aggregation to current. Rearrange them, and the same data tells a completely different story.",
        },
        {
          label: 'The "None" Axis', title: 'Set one axis to None',
          body: "To work with just two axes at a time, set one to <strong>None</strong>. Here the reference is <strong>None</strong>, so we arrange <strong>Sensor</strong> and <strong>Time</strong>. Each sensor is a row — its aggregation shown as a badge (<em>Current</em>) — and <strong>time</strong> becomes the column (<em>Today</em>).",
          voice: "Often you only need two of the three axes at once. So you can set one of them to None. Here, the reference is set to None. That leaves sensor and time. Each sensor sits on its own row, with its aggregation shown as a little badge — current — and time becomes the column, today. Clean and simple.",
        },
        {
          label: 'Rearrange', title: 'Whichever axis is last becomes the columns',
          body: "Rearrange, and <strong>whichever axis you place last becomes the columns</strong>. Now <strong>aggregation</strong> is last — so <strong>Min</strong> and <strong>Cumulative</strong> are the columns, while <strong>time</strong> moves to the per-row badge (<em>Today</em>, <em>Last 24 Hours</em>).",
          voice: "And here's the rule for arranging them. Whichever axis you place last becomes the columns. Watch — now we've moved aggregation to the end. So minimum and cumulative become the columns, and time slides into the badge beside each sensor — today for one, last twenty four hours for the other. Same three axes, just reordered, and the table reshapes itself.",
          tip: { type: 'rememberLabel', text: 'Whichever axis is last in the arrangement is the one that spreads across the columns.' },
        },
        {
          label: 'Recap', title: 'Power, with its own clock',
          body: "So: the Advanced Table is the most powerful — three rearrangeable axes — but it keeps its <strong>own time</strong>, separate from the dashboard. The <strong>Elastic Table</strong> is its simpler cousin that <em>does</em> follow the dashboard time. Use the Advanced Table for flexibility; the Elastic Table when you want everything in sync.",
          voice: "So let's bring it together. The Advanced Table is the most powerful table you have — three axes, time, sensor and aggregation, arranged any way you like. But it keeps its own clock, separate from the dashboard. The Elastic Table is its simpler cousin, the one that does follow your dashboard's time range. Reach for the Advanced Table when you need maximum flexibility, and the Elastic Table when you want everything moving in sync. That completes our look at the table widgets.",
          tip: { type: 'upNextLabel', text: "Next: we'll explore another widget type." },
        },
      ],
    },
    hi: {
      title: '<em>एडवांस्ड</em><br>टेबल।',
      subtitle:
        'डिजिटलपानी की सबसे शक्तिशाली टेबल — और जिससे इलास्टिक टेबल बनी। तीन अक्ष, पूरी तरह पुनर्व्यवस्थित, और अपनी खुद की घड़ी के साथ।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'मूल, सबसे शक्तिशाली टेबल',
          body: '<strong>एडवांस्ड टेबल</strong> डिजिटलपानी की सबसे लचीली टेबल है — दरअसल, <strong>इलास्टिक टेबल इसी से बनी</strong>। यहाँ यह इनलेट और आउटलेट गुणवत्ता दिखाती है, <strong>एकत्रीकरण</strong> पंक्तियों में और <strong>सेंसर</strong> कॉलमों में।',
          voice: 'हमारी टेबल श्रृंखला में आखिरी है एडवांस्ड टेबल। यह मूल है, और सबसे शक्तिशाली — दरअसल, जो इलास्टिक टेबल हमने अभी देखी वह इसी से बनी। यहाँ यह इनलेट और आउटलेट गुणवत्ता मापदंड दिखा रही है, वर्तमान, अधिकतम, न्यूनतम और औसत जैसे एकत्रीकरण पंक्तियों में, और हर सेंसर कॉलमों में।',
        },
        {
          label: 'अपना समय', title: 'यह अपनी घड़ी रखती है',
          body: 'महत्वपूर्ण अंतर यह है: एडवांस्ड टेबल <strong>डैशबोर्ड की समय अवधि का पालन नहीं करती</strong>। इसका <strong>अपना सापेक्ष समय</strong> होता है, जो इसके <strong>Reference</strong> चयनकर्ता में सेट होता है — यहाँ <em>Today</em>। हर दूसरा विजेट डैशबोर्ड का पालन करता है; यह स्वतंत्र है।',
          voice: 'अब, एडवांस्ड टेबल के बारे में सबसे महत्वपूर्ण बात। हर दूसरे विजेट के विपरीत, यह डैशबोर्ड की समय अवधि का पालन नहीं करती। यह अपनी घड़ी रखती है। आप इसे यहीं Reference चयनकर्ता में सेट करते हैं — इस मामले में, Today। तो जबकि आपका बाकी डैशबोर्ड पेज के ऊपर की समय अवधि का पालन करता है, एडवांस्ड टेबल अपने हिसाब से चलती है। इसे याद रखें — यही इलास्टिक टेबल से इसका सबसे बड़ा अंतर है।',
          tip: { type: 'noteLabel', text: 'अगर एडवांस्ड टेबल बाकी डैशबोर्ड से अलग लगे, तो इसका Reference जाँचें — इसका अपना समय सेटिंग है।' },
        },
        {
          label: 'तीन अक्ष', title: 'समय × सेंसर × एकत्रीकरण',
          body: 'एडवांस्ड टेबल <strong>एकमात्र</strong> टेबल है जिसमें <strong>तीन अक्ष</strong> हैं: <strong>समय</strong>, <strong>सेंसर</strong>, और <strong>एकत्रीकरण</strong>। इन्हें किसी भी तरह व्यवस्थित करें। यहाँ <strong>समय अवधि</strong> पंक्तियों में और <strong>सेंसर</strong> कॉलमों में — एकत्रीकरण <em>Current</em> पर तय।',
          voice: 'यही इसे इतना शक्तिशाली बनाता है। यह एकमात्र टेबल है जिसमें तीन अक्ष हैं — समय, सेंसर, और एकत्रीकरण। और आप इन तीनों को किसी भी क्रम में व्यवस्थित कर सकते हैं। इस दृश्य में, हमने आज, कल, और पिछले सात दिन जैसी समय अवधि पंक्तियों में रखी है, सेंसर कॉलमों में, और एकत्रीकरण को Current पर तय किया है। इन्हें पुनर्व्यवस्थित करें, और वही डेटा बिल्कुल अलग कहानी बताता है।',
        },
        {
          label: 'None अक्ष', title: 'एक अक्ष को None पर सेट करें',
          body: 'एक बार में सिर्फ़ दो अक्ष के साथ काम करने के लिए, एक को <strong>None</strong> पर सेट करें। यहाँ reference <strong>None</strong> है, तो हम <strong>सेंसर</strong> और <strong>समय</strong> व्यवस्थित करते हैं। हर सेंसर एक पंक्ति है — उसका एकत्रीकरण बैज के रूप में (<em>Current</em>) — और <strong>समय</strong> कॉलम बन जाता है (<em>Today</em>)।',
          voice: 'अक्सर आपको एक बार में तीन में से सिर्फ़ दो अक्ष चाहिए होते हैं। तो आप एक को None पर सेट कर सकते हैं। यहाँ reference None पर सेट है। इससे सेंसर और समय बचते हैं। हर सेंसर अपनी पंक्ति में बैठता है, उसका एकत्रीकरण एक छोटे बैज के रूप में — current — और समय कॉलम बन जाता है, today। साफ़ और सरल।',
        },
        {
          label: 'पुनर्व्यवस्था', title: 'जो अक्ष आखिरी हो वही कॉलम बनता है',
          body: 'पुनर्व्यवस्थित करें, और <strong>जो अक्ष आप आखिरी रखते हैं वही कॉलम बनता है</strong>। अब <strong>एकत्रीकरण</strong> आखिरी है — तो <strong>Min</strong> और <strong>Cumulative</strong> कॉलम हैं, जबकि <strong>समय</strong> प्रति-पंक्ति बैज में चला जाता है (<em>Today</em>, <em>Last 24 Hours</em>)।',
          voice: 'और इन्हें व्यवस्थित करने का नियम यह है। जो अक्ष आप आखिरी रखते हैं वही कॉलमों में फैलता है। देखिए — अब हमने एकत्रीकरण को अंत में रखा है। तो न्यूनतम और संचयी कॉलम बन जाते हैं, और समय हर सेंसर के बगल वाले बैज में चला जाता है — एक के लिए today, दूसरे के लिए last 24 hours। वही तीन अक्ष, बस क्रम बदला, और टेबल खुद को फिर से आकार दे लेती है।',
          tip: { type: 'rememberLabel', text: 'व्यवस्था में जो अक्ष आखिरी होता है वही कॉलमों में फैलता है।' },
        },
        {
          label: 'सारांश', title: 'शक्ति, अपनी घड़ी के साथ',
          body: 'तो: एडवांस्ड टेबल सबसे शक्तिशाली है — तीन पुनर्व्यवस्थित अक्ष — लेकिन यह अपना <strong>खुद का समय</strong> रखती है, डैशबोर्ड से अलग। <strong>इलास्टिक टेबल</strong> इसकी सरल बहन है जो डैशबोर्ड समय का <em>पालन करती</em> है। लचीलेपन के लिए एडवांस्ड टेबल; सब कुछ समकालिक चाहिए तो इलास्टिक टेबल।',
          voice: 'तो इसे समेटते हैं। एडवांस्ड टेबल आपकी सबसे शक्तिशाली टेबल है — तीन अक्ष, समय, सेंसर और एकत्रीकरण, किसी भी तरह व्यवस्थित। लेकिन यह अपनी घड़ी रखती है, डैशबोर्ड से अलग। इलास्टिक टेबल इसकी सरल बहन है, जो आपके डैशबोर्ड की समय अवधि का पालन करती है। अधिकतम लचीलेपन के लिए एडवांस्ड टेबल चुनें, और जब सब कुछ समकालिक चाहिए तो इलास्टिक टेबल। यह हमारे टेबल विजेट्स का अध्ययन पूरा करता है।',
          tip: { type: 'upNextLabel', text: 'आगे: हम एक और विजेट प्रकार देखेंगे।' },
        },
      ],
    },
    ta: {
      title: '<em>அட்வான்ஸ்டு</em><br>அட்டவணை.',
      subtitle:
        'டிஜிட்டல்பானியின் மிக சக்திவாய்ந்த அட்டவணை — இலாஸ்டிக் அட்டவணை இதிலிருந்தே உருவானது. மூன்று அச்சுகள், முழுமையாக மறுசீரமைக்கக்கூடியவை, தனக்கேயான கடிகாரத்துடன்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'அசல், மிக சக்திவாய்ந்த அட்டவணை',
          body: '<strong>அட்வான்ஸ்டு அட்டவணை</strong> டிஜிட்டல்பானியின் மிக நெகிழ்வான அட்டவணை — உண்மையில், <strong>இலாஸ்டிக் அட்டவணை இதிலிருந்தே உருவானது</strong>. இங்கே இது உள்ளீடு மற்றும் வெளியீடு தரத்தைக் காட்டுகிறது, <strong>திரட்டல்கள்</strong> வரிசைகளில், <strong>சென்சார்கள்</strong> நெடுவரிசைகளில்.',
          voice: 'நமது அட்டவணை குடும்பத்தில் கடைசியாக அட்வான்ஸ்டு அட்டவணை. இது அசல், மிக சக்திவாய்ந்தது — உண்மையில், நாம் இப்போது பார்த்த இலாஸ்டிக் அட்டவணை இதிலிருந்தே உருவானது. இங்கே இது உள்ளீடு மற்றும் வெளியீடு தர அளவுருக்களைக் காட்டுகிறது, தற்போதைய, அதிகபட்சம், குறைந்தபட்சம், சராசரி போன்ற திரட்டல்கள் வரிசைகளில், ஒவ்வொரு சென்சாரும் நெடுவரிசைகளில்.',
        },
        {
          label: 'தனக்கேயான நேரம்', title: 'இது தனது கடிகாரத்தை வைத்திருக்கிறது',
          body: 'முக்கிய வேறுபாடு இதுதான்: அட்வான்ஸ்டு அட்டவணை <strong>டாஷ்போர்டின் கால அளவைப் பின்பற்றுவதில்லை</strong>. இதற்கு <strong>தனக்கேயான ஒப்பீட்டு நேரம்</strong> உள்ளது, அதன் <strong>Reference</strong> தேர்வியில் அமைக்கப்படுகிறது — இங்கே <em>Today</em>. மற்ற எல்லா விட்ஜெட்டும் டாஷ்போர்டைப் பின்பற்றும்; இது சுயாதீனமானது.',
          voice: 'இப்போது, அட்வான்ஸ்டு அட்டவணையைப் பற்றி தெரிந்துகொள்ள வேண்டிய மிக முக்கியமான விஷயம். மற்ற எல்லா விட்ஜெட்டையும் போலன்றி, இது டாஷ்போர்டின் கால அளவைப் பின்பற்றுவதில்லை. இது தனது கடிகாரத்தை வைத்திருக்கிறது. அதை இங்கே Reference தேர்வியில் அமைக்கிறீர்கள் — இந்த விஷயத்தில், Today. எனவே உங்கள் மற்ற டாஷ்போர்டு பக்கத்தின் மேலுள்ள கால அளவைப் பின்பற்றும்போது, அட்வான்ஸ்டு அட்டவணை தனக்கேயானபடி நகர்கிறது. இதை நினைவில் கொள்ளுங்கள் — இலாஸ்டிக் அட்டவணையிலிருந்து இதன் மிகப்பெரிய வேறுபாடு இதுவே.',
          tip: { type: 'noteLabel', text: 'அட்வான்ஸ்டு அட்டவணை மற்ற டாஷ்போர்டுடன் ஒத்துப்போகவில்லை எனத் தோன்றினால், அதன் Reference-ஐ சரிபார்க்கவும் — அதற்குத் தனக்கேயான நேர அமைப்பு உள்ளது.' },
        },
        {
          label: 'மூன்று அச்சுகள்', title: 'நேரம் × சென்சார் × திரட்டல்',
          body: 'அட்வான்ஸ்டு அட்டவணை <strong>மூன்று அச்சுகளைக்</strong> கொண்ட <strong>ஒரே</strong> அட்டவணை: <strong>நேரம்</strong>, <strong>சென்சார்</strong>, மற்றும் <strong>திரட்டல்</strong>. அவற்றை எப்படி வேண்டுமானாலும் அமைக்கலாம். இங்கே <strong>கால அளவுகள்</strong> வரிசைகளில், <strong>சென்சார்கள்</strong> நெடுவரிசைகளில் — திரட்டல் <em>Current</em>-இல் நிலைநிறுத்தப்பட்டுள்ளது.',
          voice: 'இதை இவ்வளவு சக்திவாய்ந்ததாக்குவது இதுதான். மூன்று அச்சுகளைக் கொண்ட ஒரே அட்டவணை இது — நேரம், சென்சார், மற்றும் திரட்டல். அந்த மூன்றையும் நீங்கள் விரும்பிய எந்த வரிசையிலும் அமைக்கலாம். இந்தக் காட்சியில், இன்று, நேற்று, கடந்த ஏழு நாட்கள் போன்ற கால அளவுகளை வரிசைகளில், சென்சார்களை நெடுவரிசைகளில் வைத்து, திரட்டலை current-இல் நிலைநிறுத்தியுள்ளோம். அவற்றை மறுசீரமைத்தால், அதே தரவு முற்றிலும் வேறு கதையைச் சொல்கிறது.',
        },
        {
          label: 'None அச்சு', title: 'ஒரு அச்சை None-ஆக அமைக்கவும்',
          body: 'ஒரே நேரத்தில் இரண்டு அச்சுகளுடன் மட்டும் வேலை செய்ய, ஒன்றை <strong>None</strong>-ஆக அமைக்கவும். இங்கே reference <strong>None</strong>, எனவே <strong>சென்சார்</strong> மற்றும் <strong>நேரத்தை</strong> அமைக்கிறோம். ஒவ்வொரு சென்சாரும் ஒரு வரிசை — அதன் திரட்டல் ஒரு பேட்ஜாக (<em>Current</em>) — மற்றும் <strong>நேரம்</strong> நெடுவரிசையாகிறது (<em>Today</em>).',
          voice: 'பெரும்பாலும் உங்களுக்கு மூன்றில் இரண்டு அச்சுகள் மட்டுமே தேவைப்படும். எனவே ஒன்றை None-ஆக அமைக்கலாம். இங்கே, reference None-ஆக அமைக்கப்பட்டுள்ளது. அது சென்சாரையும் நேரத்தையும் விட்டுச்செல்கிறது. ஒவ்வொரு சென்சாரும் தனது வரிசையில் அமர்கிறது, அதன் திரட்டல் ஒரு சிறிய பேட்ஜாக — current — மற்றும் நேரம் நெடுவரிசையாகிறது, today. தெளிவாகவும் எளிமையாகவும்.',
        },
        {
          label: 'மறுசீரமைப்பு', title: 'கடைசியாக வைக்கும் அச்சே நெடுவரிசையாகிறது',
          body: 'மறுசீரமைத்தால், <strong>நீங்கள் கடைசியாக வைக்கும் அச்சே நெடுவரிசைகளாகிறது</strong>. இப்போது <strong>திரட்டல்</strong> கடைசியாக உள்ளது — எனவே <strong>Min</strong> மற்றும் <strong>Cumulative</strong> நெடுவரிசைகள், <strong>நேரம்</strong> வரிசைக்கான பேட்ஜுக்கு நகர்கிறது (<em>Today</em>, <em>Last 24 Hours</em>).',
          voice: 'அவற்றை அமைப்பதற்கான விதி இதுதான். நீங்கள் கடைசியாக வைக்கும் அச்சே நெடுவரிசைகளில் பரவுகிறது. பாருங்கள் — இப்போது திரட்டலை கடைசியில் நகர்த்தியுள்ளோம். எனவே குறைந்தபட்சம் மற்றும் திரட்டப்பட்டது நெடுவரிசைகளாகின்றன, நேரம் ஒவ்வொரு சென்சாருக்கும் அருகிலுள்ள பேட்ஜுக்குள் நழுவுகிறது — ஒன்றுக்கு today, மற்றொன்றுக்கு last 24 hours. அதே மூன்று அச்சுகள், வரிசை மட்டும் மாறியது, அட்டவணை தன்னை மறுவடிவமைக்கிறது.',
          tip: { type: 'rememberLabel', text: 'அமைப்பில் கடைசியாக உள்ள அச்சே நெடுவரிசைகளில் பரவுகிறது.' },
        },
        {
          label: 'சுருக்கம்', title: 'சக்தி, தனக்கேயான கடிகாரத்துடன்',
          body: 'எனவே: அட்வான்ஸ்டு அட்டவணை மிக சக்திவாய்ந்தது — மூன்று மறுசீரமைக்கக்கூடிய அச்சுகள் — ஆனால் இது தனக்கேயான <strong>நேரத்தை</strong> வைத்திருக்கிறது, டாஷ்போர்டிலிருந்து தனியாக. <strong>இலாஸ்டிக் அட்டவணை</strong> டாஷ்போர்டு நேரத்தைப் <em>பின்பற்றும்</em> எளிய உறவினர். நெகிழ்வுக்கு அட்வான்ஸ்டு அட்டவணை; எல்லாம் ஒத்திசைக்க வேண்டுமானால் இலாஸ்டிக் அட்டவணை.',
          voice: 'இதை ஒன்றாகக் கொண்டுவருவோம். அட்வான்ஸ்டு அட்டவணை உங்களிடமுள்ள மிக சக்திவாய்ந்த அட்டவணை — மூன்று அச்சுகள், நேரம், சென்சார், திரட்டல், விரும்பிய எந்த வழியிலும் அமைக்கப்பட்டவை. ஆனால் இது தனது கடிகாரத்தை வைத்திருக்கிறது, டாஷ்போர்டிலிருந்து தனியாக. இலாஸ்டிக் அட்டவணை அதன் எளிய உறவினர், உங்கள் டாஷ்போர்டின் கால அளவைப் பின்பற்றுவது. அதிகபட்ச நெகிழ்வுக்கு அட்வான்ஸ்டு அட்டவணையை எடுங்கள், எல்லாம் ஒத்திசைந்து நகர வேண்டுமானால் இலாஸ்டிக் அட்டவணை. இது நமது அட்டவணை விட்ஜெட்களின் பார்வையை முடிக்கிறது.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: இன்னொரு விட்ஜெட் வகையைப் பார்ப்போம்.' },
        },
      ],
    },
    mr: {
      title: '<em>अॅडव्हान्स्ड</em><br>टेबल.',
      subtitle:
        'डिजिटलपानीमधील सर्वात शक्तिशाली टेबल — आणि जिच्यापासून इलास्टिक टेबल तयार झाली. तीन अक्ष, पूर्णपणे पुनर्रचना करण्यायोग्य, स्वतःच्या घड्याळासह.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'मूळ, सर्वात शक्तिशाली टेबल',
          body: '<strong>अॅडव्हान्स्ड टेबल</strong> डिजिटलपानीमधील सर्वात लवचिक टेबल आहे — खरे तर, <strong>इलास्टिक टेबल हिच्यापासूनच तयार झाली</strong>. इथे ती इनलेट आणि आउटलेट गुणवत्ता दाखवते, <strong>एकत्रीकरण</strong> पंक्तींमध्ये आणि <strong>सेन्सर</strong> कॉलममध्ये.',
          voice: 'आपल्या टेबल कुटुंबातील शेवटची आहे अॅडव्हान्स्ड टेबल. ही मूळ आहे, आणि सर्वात शक्तिशाली — खरे तर, आपण आत्ताच पाहिलेली इलास्टिक टेबल हिच्यापासूनच तयार झाली. इथे ती इनलेट आणि आउटलेट गुणवत्ता मापदंड दाखवत आहे, सध्याचे, कमाल, किमान आणि सरासरी असे एकत्रीकरण पंक्तींमध्ये, आणि प्रत्येक सेन्सर कॉलममध्ये.',
        },
        {
          label: 'स्वतःचा वेळ', title: 'ती स्वतःचे घड्याळ ठेवते',
          body: 'महत्त्वाचा फरक हा आहे: अॅडव्हान्स्ड टेबल <strong>डॅशबोर्डच्या वेळ अवधीचे पालन करत नाही</strong>. तिच्याकडे <strong>स्वतःचा सापेक्ष वेळ</strong> असतो, जो तिच्या <strong>Reference</strong> निवडकात सेट केला जातो — इथे <em>Today</em>. इतर प्रत्येक विजेट डॅशबोर्डचे पालन करते; ही स्वतंत्र आहे.',
          voice: 'आता, अॅडव्हान्स्ड टेबलबद्दल समजून घ्यायची सर्वात महत्त्वाची गोष्ट. इतर प्रत्येक विजेटच्या विपरीत, ती डॅशबोर्डच्या वेळ अवधीचे पालन करत नाही. ती स्वतःचे घड्याळ ठेवते. तुम्ही ते इथेच Reference निवडकात सेट करता — या प्रकरणात, Today. म्हणून तुमचा उरलेला डॅशबोर्ड पानाच्या वरच्या वेळ अवधीचे पालन करत असताना, अॅडव्हान्स्ड टेबल स्वतःच्या हिशोबाने चालते. हे लक्षात ठेवा — इलास्टिक टेबलपासून हिचा हाच सर्वात मोठा फरक आहे.',
          tip: { type: 'noteLabel', text: 'अॅडव्हान्स्ड टेबल उरलेल्या डॅशबोर्डशी जुळत नसेल, तर तिचे Reference तपासा — तिची स्वतःची वेळ सेटिंग आहे.' },
        },
        {
          label: 'तीन अक्ष', title: 'वेळ × सेन्सर × एकत्रीकरण',
          body: 'अॅडव्हान्स्ड टेबल <strong>तीन अक्ष</strong> असलेली <strong>एकमेव</strong> टेबल आहे: <strong>वेळ</strong>, <strong>सेन्सर</strong>, आणि <strong>एकत्रीकरण</strong>. त्यांना कोणत्याही प्रकारे मांडा. इथे <strong>वेळ अवधी</strong> पंक्तींमध्ये आणि <strong>सेन्सर</strong> कॉलममध्ये — एकत्रीकरण <em>Current</em> वर निश्चित.',
          voice: 'हेच तिला इतके शक्तिशाली बनवते. तीन अक्ष असलेली ही एकमेव टेबल आहे — वेळ, सेन्सर, आणि एकत्रीकरण. आणि तुम्ही त्या तिघांना कोणत्याही क्रमाने मांडू शकता. या दृश्यात, आम्ही आज, काल, आणि गेले सात दिवस अशा वेळ अवधी पंक्तींमध्ये, सेन्सर कॉलममध्ये ठेवले आहेत, आणि एकत्रीकरण current वर निश्चित केले आहे. त्यांची पुनर्रचना करा, आणि तोच डेटा पूर्णपणे वेगळी कहाणी सांगतो.',
        },
        {
          label: 'None अक्ष', title: 'एक अक्ष None वर सेट करा',
          body: 'एकावेळी फक्त दोन अक्षांसह काम करण्यासाठी, एक <strong>None</strong> वर सेट करा. इथे reference <strong>None</strong> आहे, म्हणून आपण <strong>सेन्सर</strong> आणि <strong>वेळ</strong> मांडतो. प्रत्येक सेन्सर एक पंक्ती आहे — त्याचे एकत्रीकरण बॅज म्हणून (<em>Current</em>) — आणि <strong>वेळ</strong> कॉलम बनतो (<em>Today</em>).',
          voice: 'बऱ्याचदा तुम्हाला तिनांपैकी फक्त दोन अक्ष लागतात. म्हणून तुम्ही एक None वर सेट करू शकता. इथे, reference None वर सेट आहे. त्यामुळे सेन्सर आणि वेळ उरतात. प्रत्येक सेन्सर स्वतःच्या पंक्तीत बसतो, त्याचे एकत्रीकरण एका छोट्या बॅजमध्ये — current — आणि वेळ कॉलम बनतो, today. स्वच्छ आणि सोपे.',
        },
        {
          label: 'पुनर्रचना', title: 'जो अक्ष शेवटी तोच कॉलम बनतो',
          body: 'पुनर्रचना करा, आणि <strong>तुम्ही जो अक्ष शेवटी ठेवता तोच कॉलम बनतो</strong>. आता <strong>एकत्रीकरण</strong> शेवटी आहे — म्हणून <strong>Min</strong> आणि <strong>Cumulative</strong> कॉलम आहेत, तर <strong>वेळ</strong> प्रति-पंक्ती बॅजमध्ये जातो (<em>Today</em>, <em>Last 24 Hours</em>).',
          voice: 'आणि त्यांना मांडण्याचा नियम हा आहे. तुम्ही जो अक्ष शेवटी ठेवता तोच कॉलममध्ये पसरतो. पाहा — आता आम्ही एकत्रीकरण शेवटी हलवले आहे. म्हणून किमान आणि संचयी कॉलम बनतात, आणि वेळ प्रत्येक सेन्सरशेजारच्या बॅजमध्ये सरकतो — एकासाठी today, दुसऱ्यासाठी last 24 hours. तेच तीन अक्ष, फक्त क्रम बदलला, आणि टेबल स्वतःला पुन्हा आकार देते.',
          tip: { type: 'rememberLabel', text: 'मांडणीत जो अक्ष शेवटी असतो तोच कॉलममध्ये पसरतो.' },
        },
        {
          label: 'सारांश', title: 'शक्ती, स्वतःच्या घड्याळासह',
          body: 'तर: अॅडव्हान्स्ड टेबल सर्वात शक्तिशाली आहे — तीन पुनर्रचना करण्यायोग्य अक्ष — पण ती स्वतःचा <strong>वेळ</strong> ठेवते, डॅशबोर्डपासून वेगळा. <strong>इलास्टिक टेबल</strong> ही तिची सोपी बहीण आहे जी डॅशबोर्ड वेळेचे <em>पालन करते</em>. लवचिकतेसाठी अॅडव्हान्स्ड टेबल; सर्व काही समकालिक हवे असल्यास इलास्टिक टेबल.',
          voice: 'तर हे एकत्र आणूया. अॅडव्हान्स्ड टेबल तुमच्याकडची सर्वात शक्तिशाली टेबल आहे — तीन अक्ष, वेळ, सेन्सर आणि एकत्रीकरण, कोणत्याही प्रकारे मांडलेले. पण ती स्वतःचे घड्याळ ठेवते, डॅशबोर्डपासून वेगळे. इलास्टिक टेबल ही तिची सोपी बहीण आहे, जी तुमच्या डॅशबोर्डच्या वेळ अवधीचे पालन करते. कमाल लवचिकतेसाठी अॅडव्हान्स्ड टेबल निवडा, आणि सर्व काही समकालिक हवे असेल तेव्हा इलास्टिक टेबल. यामुळे आपला टेबल विजेट्सचा अभ्यास पूर्ण होतो.',
          tip: { type: 'upNextLabel', text: 'पुढे: आपण आणखी एक विजेट प्रकार पाहू.' },
        },
      ],
    },
  },
};

export default lesson;
