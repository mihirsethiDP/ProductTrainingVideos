import type { ElasticTableData, Lesson } from '../../types';

/**
 * Module 2 · Lesson 3 — Elastic Table.   Tag: M2.L3
 * Interactive `elasticTable` widget driven by WidgetState.table. Datasets are
 * built once below and reused across steps (the time dataset is shown in both
 * rows and columns layouts to demonstrate the flexible layout).
 */

const TIME_1 = [{ label: 'Jun 21 - Jun 22', sub: '14:28 - 14:28' }];
const cells = (vals: string[]) => vals.map((value) => ({ value }));

// The Water Quality table from the reference screenshot.
function waterQuality(opts: { groupRing?: boolean; bodCaution?: boolean; errorRing?: boolean } = {}): ElasticTableData {
  return {
    timeColumns: TIME_1,
    groups: [
      {
        name: 'Ahmedabad Airport',
        ring: opts.groupRing,
        sensors: [
          { name: 'Outlet pH (Ref. 6.5-8.5)', rows: [{ aggregation: 'Current', cells: [{ value: '7.87' }] }] },
          { name: 'Outlet BOD (Ref. < 10ppm)', rows: [{ aggregation: 'Current', cells: [{ value: '9.15', level: opts.bodCaution ? 'caution' : undefined }] }] },
          { name: 'Outlet COD (Ref. < 50ppm)', rows: [{ aggregation: 'Current', cells: [{ value: '24.56' }] }] },
          { name: 'Outlet TSS (Ref. < 5ppm)', rows: [{ aggregation: 'Current', cells: [{ value: '5' }] }] },
          { name: 'MBR Flux (Ref. 20-30 LMH)- Phase-1', rows: [{ aggregation: 'Current', cells: [{ value: '26.34' }] }] },
          { name: 'MBR Flux (Ref. 20-30 LMH)- Phase-2', rows: [{ aggregation: 'Current', cells: [{ value: '0', level: 'error', ring: opts.errorRing }] }] },
        ],
      },
      { name: 'Model Economic Township Limited', collapsed: true, summary: '5 sensors' },
      {
        name: 'India Habitat Centre',
        sensors: [
          { name: 'pH', rows: [{ aggregation: 'Current', cells: [{ value: '7.74' }] }] },
          { name: 'TSS', rows: [{ aggregation: 'Current', cells: [{ value: '6.04' }] }] },
          { name: 'COD', rows: [{ aggregation: 'Current', cells: [{ value: '30.91' }] }] },
          { name: 'Turbidity', rows: [{ aggregation: 'Current', cells: [{ value: '7.31' }] }] },
        ],
      },
    ],
  };
}

// One sensor with several aggregations.
const multiAgg: ElasticTableData = {
  timeColumns: TIME_1,
  groups: [
    {
      name: 'Ahmedabad Airport',
      sensors: [
        {
          name: 'Outlet pH (Ref. 6.5-8.5)',
          ring: true,
          rows: [
            { aggregation: 'Current', cells: [{ value: '7.87' }] },
            { aggregation: 'Average', cells: [{ value: '7.62' }] },
            { aggregation: 'Maximum', cells: [{ value: '8.10' }] },
          ],
        },
        { name: 'Outlet COD (Ref. < 50ppm)', rows: [{ aggregation: 'Current', cells: [{ value: '24.56' }] }] },
      ],
    },
  ],
};

// Hourly time slots, two groups — shown in both rows and columns layouts.
const HOURS = ['14:00', '15:00', '16:00', '17:00', '18:00'];
function tankTable(opts: { headerRing?: boolean; layout?: 'rows' | 'columns' } = {}): ElasticTableData {
  return {
    layout: opts.layout,
    timeColumns: HOURS.map((label) => ({ label, ring: opts.headerRing })),
    groups: [
      {
        name: 'Tank Levels',
        sensors: [
          { name: 'Tank 1 Level', rows: [{ aggregation: 'Current', cells: cells(['3.2', '3.4', '3.5', '3.6', '3.4']) }] },
          { name: 'Tank 2 Level', rows: [{ aggregation: 'Current', cells: cells(['2.8', '2.9', '3.1', '3.0', '2.7']) }] },
          { name: 'Tank 3 Level', rows: [{ aggregation: 'Current', cells: cells(['4.1', '4.0', '3.9', '4.2', '4.3']) }] },
        ],
      },
      {
        name: 'Pressure Transmitters',
        sensors: [
          { name: 'PT-1', rows: [{ aggregation: 'Current', cells: cells(['1.20', '1.30', '1.25', '1.40', '1.35']) }] },
          { name: 'PT-2', rows: [{ aggregation: 'Current', cells: cells(['0.90', '0.95', '1.00', '0.92', '0.88']) }] },
        ],
      },
    ],
  };
}

const lesson: Lesson = {
  id: 'lesson-03-elastic-table',
  moduleId: 'module-02-widgets',
  lessonNumber: 3,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'elasticTable', caption: 'Elastic Table',
      widgetState: { table: waterQuality() }, cursor: [{ at: 0.1, x: 50, y: 28 }] },
    { mode: 'widget', widget: 'elasticTable', caption: 'Sensor grouping',
      widgetState: { table: waterQuality({ groupRing: true }) },
      cursor: [{ at: 0.15, x: 18, y: 18, click: true }, { at: 0.6, x: 18, y: 60 }] },
    { mode: 'widget', widget: 'elasticTable', caption: 'Multiple aggregations per sensor',
      widgetState: { table: multiAgg }, cursor: [{ at: 0.25, x: 30, y: 40 }] },
    { mode: 'widget', widget: 'elasticTable', caption: 'Up to 200 time slots',
      widgetState: { table: tankTable({ headerRing: true }) },
      cursor: [{ at: 0.2, x: 55, y: 14 }, { at: 0.6, x: 80, y: 14 }] },
    { mode: 'widget', widget: 'elasticTable', caption: 'Layout: rows or columns',
      widgetState: { table: tankTable({ layout: 'columns' }) }, cursor: [{ at: 0.3, x: 50, y: 16 }] },
    { mode: 'widget', widget: 'elasticTable', caption: 'Caution & Error highlighting',
      widgetState: { table: waterQuality({ bodCaution: true, errorRing: true }) },
      cursor: [{ at: 0.3, x: 82, y: 56, click: true }] },
  ],
  content: {
    en: {
      title: 'The <em>Elastic</em><br>Table.',
      subtitle:
        'When you need to watch many sensors at once, the Elastic Table is your widget — grouped, flexible, and built to scale.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'A flexible, grouped data table',
          body: "The <strong>Elastic Table</strong> is a vibrant, flexible way to see many sensors at once. Unlike the Advanced Table, it <strong>respects the dashboard time range</strong>. Sensors are organised into groups, each showing its readings.",
          voice: "Let's meet the Elastic Table. When you need to see lots of sensors together, this is the widget. It's vibrant, it's flexible, and unlike the older Advanced Table, it always respects your dashboard's time range. Here it's showing water quality readings, with sensors neatly organised into groups.",
        },
        {
          label: 'Grouping', title: 'Organise sensors into groups',
          body: "Sensors are gathered into <strong>groups</strong> you define — here <strong>Ahmedabad Airport</strong>, <strong>Model Economic Township</strong>, and <strong>India Habitat Centre</strong>. You might group all your <strong>tank-level</strong> sensors together, or all your <strong>pressure transmitters</strong>. Each group collapses and expands.",
          voice: "The first big idea is grouping. You decide how sensors are bundled together. You could put all your tank level sensors in one group, and all your pressure transmitters in another. Here they're grouped by site. And see — each group can be collapsed or expanded, so you can focus on just the section you care about.",
          tip: { type: 'tipLabel', text: "Collapse the groups you're not watching to keep a large table readable." },
        },
        {
          label: 'Aggregations', title: 'Multiple aggregations per sensor',
          body: "Each sensor shows an <strong>aggregation</strong> — here <em>Current</em> — but you can add <strong>several per sensor</strong>. Show the <strong>Current</strong>, <strong>Average</strong>, and <strong>Maximum</strong> of the same tag, stacked together.",
          voice: "Just like the number and gauge widgets, each sensor has an aggregation. But the Elastic Table lets you show more than one at a time. For a single sensor, you might display the current value, the average, and the maximum, all together. It's a quick way to understand not just where a reading is now, but how it's been behaving.",
        },
        {
          label: 'Time Slots', title: 'Up to 200 time slots',
          body: "The table follows the dashboard's <strong>granularity</strong> and splits the range into <strong>time slots</strong> — up to <strong>200</strong>. Set granularity to <em>hourly</em>, and you can read the last 200 hours, hour by hour, across the columns.",
          voice: "Here's where it scales. The Elastic Table follows your dashboard's granularity and cuts the time range into slots — up to two hundred of them. So if your granularity is hourly, you can lay out the past two hundred hours, hour by hour. Here we're looking at tank levels and pressure transmitters across several hourly slots. That's powerful operational analysis, at scale.",
          tip: { type: 'rememberLabel', text: 'Granularity (minutes, hours, days) sets the size of each slot; the dashboard time range sets how many you see — up to 200.' },
        },
        {
          label: 'Layout', title: 'Rows or columns — your choice',
          body: "The layout is <strong>fully configurable</strong>. Keep sensors as <strong>rows</strong> with time across the columns, or <strong>flip it</strong> — time down the rows and sensors across the columns. Same data, whichever way reads best.",
          voice: "And you're not locked into one layout. By default, sensors run down the rows and time runs across the columns. But you can flip the whole thing — put time down the side and sensors across the top. It's the same data, just arranged whichever way makes it easiest for your team to read.",
        },
        {
          label: 'Thresholds', title: 'Caution & Error highlighting',
          body: "Like the other widgets, the Elastic Table supports <strong>thresholds</strong>. A reading in <strong>caution</strong> is highlighted amber, and an <strong>error</strong> turns the cell red. Here <strong>MBR Flux Phase-2</strong> reads 0 — flagged red so it can't be missed.",
          voice: "Finally, thresholds. The Elastic Table highlights them right in the cells. A reading in the caution band turns amber, and an error turns the cell red. Look here — M B R Flux Phase two is reading zero, and the table has flagged it in red, so a problem like that jumps straight out, even in a big table. That's the Elastic Table — grouping, multiple aggregations, up to two hundred time slots, a flexible layout, and threshold highlighting. In the next lesson, we'll look at another widget.",
          tip: { type: 'upNextLabel', text: "Next: we'll explore another widget type." },
        },
      ],
    },
    hi: {
      title: '<em>इलास्टिक</em><br>टेबल।',
      subtitle:
        'जब आपको एक साथ कई सेंसर देखने हों, तो इलास्टिक टेबल आपका विजेट है — समूहबद्ध, लचीला, और बड़े पैमाने के लिए बना।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'एक लचीली, समूहबद्ध डेटा टेबल',
          body: '<strong>इलास्टिक टेबल</strong> एक साथ कई सेंसर देखने का एक जीवंत, लचीला तरीका है। एडवांस्ड टेबल के विपरीत, यह <strong>डैशबोर्ड की समय अवधि का पालन करती है</strong>। सेंसर समूहों में व्यवस्थित होते हैं।',
          voice: 'आइए इलास्टिक टेबल से मिलते हैं। जब आपको कई सेंसर एक साथ देखने हों, तो यही विजेट है। यह जीवंत है, लचीला है, और पुरानी एडवांस्ड टेबल के विपरीत, यह हमेशा आपके डैशबोर्ड की समय अवधि का पालन करती है। यहाँ यह जल गुणवत्ता रीडिंग्स दिखा रही है, सेंसर समूहों में व्यवस्थित।',
        },
        {
          label: 'समूहन', title: 'सेंसर को समूहों में व्यवस्थित करें',
          body: 'सेंसर आपके द्वारा परिभाषित <strong>समूहों</strong> में इकट्ठे होते हैं — यहाँ <strong>अहमदाबाद एयरपोर्ट</strong>, <strong>मॉडल इकोनॉमिक टाउनशिप</strong>, और <strong>इंडिया हैबिटेट सेंटर</strong>। आप सभी <strong>टैंक-लेवल</strong> सेंसर एक साथ, या सभी <strong>प्रेशर ट्रांसमीटर</strong> एक साथ समूहित कर सकते हैं।',
          voice: 'पहला बड़ा विचार है समूहन। आप तय करते हैं कि सेंसर कैसे एक साथ बंडल किए जाएँ। आप अपने सभी टैंक लेवल सेंसर एक समूह में, और सभी प्रेशर ट्रांसमीटर दूसरे में रख सकते हैं। यहाँ वे साइट के अनुसार समूहित हैं। और देखिए — हर समूह को छोटा या बड़ा किया जा सकता है, ताकि आप सिर्फ़ उस भाग पर ध्यान दे सकें जो आपको चाहिए।',
          tip: { type: 'tipLabel', text: 'जिन समूहों को आप नहीं देख रहे उन्हें छोटा कर दें ताकि बड़ी टेबल पढ़ने में आसान रहे।' },
        },
        {
          label: 'एकत्रीकरण', title: 'प्रति सेंसर कई एकत्रीकरण',
          body: 'हर सेंसर एक <strong>एकत्रीकरण</strong> दिखाता है — यहाँ <em>वर्तमान</em> — लेकिन आप <strong>प्रति सेंसर कई</strong> जोड़ सकते हैं। एक ही टैग का <strong>वर्तमान</strong>, <strong>औसत</strong>, और <strong>अधिकतम</strong> एक साथ दिखाएँ।',
          voice: 'नंबर और गेज विजेट की तरह, हर सेंसर का एक एकत्रीकरण होता है। लेकिन इलास्टिक टेबल आपको एक से अधिक दिखाने देती है। एक सेंसर के लिए, आप वर्तमान मान, औसत, और अधिकतम — सब एक साथ दिखा सकते हैं। यह जानने का तेज़ तरीका है कि रीडिंग अभी कहाँ है, और यह कैसा व्यवहार कर रही है।',
        },
        {
          label: 'समय स्लॉट', title: '200 तक समय स्लॉट',
          body: 'टेबल डैशबोर्ड की <strong>ग्रैन्युलैरिटी</strong> का पालन करती है और रेंज को <strong>समय स्लॉट</strong> में बाँटती है — <strong>200</strong> तक। ग्रैन्युलैरिटी <em>घंटेवार</em> सेट करें, और आप पिछले 200 घंटे, घंटे-दर-घंटे, कॉलमों में देख सकते हैं।',
          voice: 'यहाँ यह बड़े पैमाने पर काम करती है। इलास्टिक टेबल आपके डैशबोर्ड की ग्रैन्युलैरिटी का पालन करती है और समय अवधि को स्लॉट में काटती है — दो सौ तक। तो अगर आपकी ग्रैन्युलैरिटी घंटेवार है, तो आप पिछले दो सौ घंटे, घंटे-दर-घंटे रख सकते हैं। यहाँ हम टैंक लेवल और प्रेशर ट्रांसमीटर को कई घंटेवार स्लॉट में देख रहे हैं। यह बड़े पैमाने पर शक्तिशाली परिचालन विश्लेषण है।',
          tip: { type: 'rememberLabel', text: 'ग्रैन्युलैरिटी (मिनट, घंटे, दिन) हर स्लॉट का आकार तय करती है; डैशबोर्ड समय अवधि तय करती है कि आप कितने देखते हैं — 200 तक।' },
        },
        {
          label: 'लेआउट', title: 'पंक्तियाँ या कॉलम — आपकी पसंद',
          body: 'लेआउट <strong>पूरी तरह कॉन्फ़िगर करने योग्य</strong> है। सेंसर को <strong>पंक्तियों</strong> में रखें और समय कॉलमों में, या <strong>इसे पलट दें</strong> — समय पंक्तियों में और सेंसर कॉलमों में। एक ही डेटा, जो भी तरीका सबसे अच्छा पढ़े।',
          voice: 'और आप एक ही लेआउट तक सीमित नहीं हैं। डिफ़ॉल्ट रूप से, सेंसर पंक्तियों में चलते हैं और समय कॉलमों में। लेकिन आप पूरी चीज़ पलट सकते हैं — समय को किनारे और सेंसर को ऊपर रखें। यह वही डेटा है, बस जिस तरह आपकी टीम के लिए पढ़ना सबसे आसान हो, उस तरह व्यवस्थित।',
        },
        {
          label: 'थ्रेशोल्ड', title: 'चेतावनी और त्रुटि हाइलाइटिंग',
          body: 'अन्य विजेट की तरह, इलास्टिक टेबल <strong>थ्रेशोल्ड</strong> का समर्थन करती है। <strong>चेतावनी</strong> में रीडिंग पीले रंग में, और <strong>त्रुटि</strong> सेल को लाल कर देती है। यहाँ <strong>MBR Flux Phase-2</strong> 0 है — लाल में चिह्नित ताकि छूट न जाए।',
          voice: 'अंत में, थ्रेशोल्ड। इलास्टिक टेबल उन्हें सीधे सेल में हाइलाइट करती है। चेतावनी बैंड में रीडिंग पीली हो जाती है, और त्रुटि सेल को लाल कर देती है। यहाँ देखिए — एम बी आर फ्लक्स फेज़ टू शून्य पढ़ रहा है, और टेबल ने इसे लाल में चिह्नित किया है, ताकि ऐसी समस्या बड़ी टेबल में भी तुरंत सामने आ जाए। यह थी इलास्टिक टेबल — समूहन, कई एकत्रीकरण, दो सौ तक समय स्लॉट, लचीला लेआउट, और थ्रेशोल्ड हाइलाइटिंग। अगले पाठ में, हम एक और विजेट देखेंगे।',
          tip: { type: 'upNextLabel', text: 'आगे: हम एक और विजेट प्रकार देखेंगे।' },
        },
      ],
    },
    ta: {
      title: '<em>இலாஸ்டிக்</em><br>அட்டவணை.',
      subtitle:
        'பல சென்சார்களை ஒரே நேரத்தில் கண்காணிக்க வேண்டியிருக்கும்போது, இலாஸ்டிக் அட்டவணை உங்கள் விட்ஜெட் — குழுவாக்கப்பட்ட, நெகிழ்வான, பெரிய அளவில் செயல்படும்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'நெகிழ்வான, குழு தரவு அட்டவணை',
          body: '<strong>இலாஸ்டிக் அட்டவணை</strong> பல சென்சார்களை ஒரே நேரத்தில் பார்க்க ஒரு துடிப்பான, நெகிழ்வான வழி. அட்வான்ஸ்டு அட்டவணையைப் போலன்றி, இது <strong>டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது</strong>. சென்சார்கள் குழுக்களாக ஒழுங்கமைக்கப்படுகின்றன.',
          voice: 'இலாஸ்டிக் அட்டவணையைச் சந்திப்போம். பல சென்சார்களை ஒன்றாகப் பார்க்க வேண்டியிருக்கும்போது, இதுதான் விட்ஜெட். இது துடிப்பானது, நெகிழ்வானது, மற்றும் பழைய அட்வான்ஸ்டு அட்டவணையைப் போலன்றி, இது எப்போதும் உங்கள் டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது. இங்கே இது நீர் தர அளவீடுகளை, சென்சார்களை குழுக்களாக ஒழுங்கமைத்துக் காட்டுகிறது.',
        },
        {
          label: 'குழுவாக்கம்', title: 'சென்சார்களை குழுக்களாக ஒழுங்கமைக்கவும்',
          body: 'சென்சார்கள் நீங்கள் வரையறுக்கும் <strong>குழுக்களாக</strong> சேர்க்கப்படுகின்றன — இங்கே <strong>அகமதாபாத் விமான நிலையம்</strong>, <strong>மாடல் எகனாமிக் டவுன்ஷிப்</strong>, மற்றும் <strong>இந்தியா ஹேபிடாட் சென்டர்</strong>. அனைத்து <strong>டாங்க்-லெவல்</strong> சென்சார்களையும், அல்லது அனைத்து <strong>அழுத்த டிரான்ஸ்மிட்டர்களையும்</strong> குழுவாக்கலாம்.',
          voice: 'முதல் பெரிய கருத்து குழுவாக்கம். சென்சார்கள் எப்படி ஒன்றாக இணைக்கப்படுகின்றன என்பதை நீங்கள் தீர்மானிக்கிறீர்கள். உங்கள் அனைத்து டாங்க் லெவல் சென்சார்களையும் ஒரு குழுவிலும், அனைத்து அழுத்த டிரான்ஸ்மிட்டர்களையும் இன்னொன்றிலும் வைக்கலாம். இங்கே அவை தளத்தின்படி குழுவாக்கப்பட்டுள்ளன. ஒவ்வொரு குழுவையும் சுருக்கவோ விரிக்கவோ முடியும், எனவே உங்களுக்குத் தேவையான பகுதியில் மட்டும் கவனம் செலுத்தலாம்.',
          tip: { type: 'tipLabel', text: 'நீங்கள் பார்க்காத குழுக்களைச் சுருக்கி, பெரிய அட்டவணையைப் படிக்க எளிதாக வைத்திருங்கள்.' },
        },
        {
          label: 'திரட்டல்கள்', title: 'ஒரு சென்சாருக்கு பல திரட்டல்கள்',
          body: 'ஒவ்வொரு சென்சாரும் ஒரு <strong>திரட்டலைக்</strong> காட்டுகிறது — இங்கே <em>தற்போதைய</em> — ஆனால் ஒரு <strong>சென்சாருக்கு பலவற்றைச்</strong> சேர்க்கலாம். ஒரே டேக்கின் <strong>தற்போதைய</strong>, <strong>சராசரி</strong>, மற்றும் <strong>அதிகபட்சத்தை</strong> ஒன்றாகக் காட்டுங்கள்.',
          voice: 'எண் மற்றும் கேஜ் விட்ஜெட்களைப் போல, ஒவ்வொரு சென்சாருக்கும் ஒரு திரட்டல் உள்ளது. ஆனால் இலாஸ்டிக் அட்டவணை ஒன்றுக்கு மேற்பட்டதைக் காட்ட அனுமதிக்கிறது. ஒரு சென்சாருக்கு, தற்போதைய மதிப்பு, சராசரி, மற்றும் அதிகபட்சம் அனைத்தையும் ஒன்றாகக் காட்டலாம். அளவீடு இப்போது எங்கே உள்ளது மட்டுமல்ல, அது எப்படி நடந்து வருகிறது என்பதையும் அறிய இது விரைவான வழி.',
        },
        {
          label: 'நேர இடைவெளிகள்', title: '200 நேர இடைவெளிகள் வரை',
          body: 'அட்டவணை டாஷ்போர்டின் <strong>நுட்பத்தைப்</strong> பின்பற்றி வரம்பை <strong>நேர இடைவெளிகளாகப்</strong> பிரிக்கிறது — <strong>200</strong> வரை. நுட்பத்தை <em>மணிநேரம்</em> என அமைத்தால், கடந்த 200 மணிநேரத்தை, மணிக்கு மணி, நெடுவரிசைகளில் படிக்கலாம்.',
          voice: 'இங்கே இது பெரிய அளவில் செயல்படுகிறது. இலாஸ்டிக் அட்டவணை உங்கள் டாஷ்போர்டின் நுட்பத்தைப் பின்பற்றி கால அளவை இடைவெளிகளாக வெட்டுகிறது — இருநூறு வரை. எனவே உங்கள் நுட்பம் மணிநேரமாக இருந்தால், கடந்த இருநூறு மணிநேரத்தை மணிக்கு மணி அமைக்கலாம். இங்கே நாம் டாங்க் லெவல்கள் மற்றும் அழுத்த டிரான்ஸ்மிட்டர்களை பல மணிநேர இடைவெளிகளில் பார்க்கிறோம். இது பெரிய அளவில் சக்திவாய்ந்த செயல்பாட்டு பகுப்பாய்வு.',
          tip: { type: 'rememberLabel', text: 'நுட்பம் (நிமிடங்கள், மணி, நாட்கள்) ஒவ்வொரு இடைவெளியின் அளவை அமைக்கிறது; டாஷ்போர்டு கால அளவு எத்தனை பார்க்கிறீர்கள் என்பதை அமைக்கிறது — 200 வரை.' },
        },
        {
          label: 'அமைப்பு', title: 'வரிசைகள் அல்லது நெடுவரிசைகள் — உங்கள் விருப்பம்',
          body: 'அமைப்பு <strong>முழுமையாக அமைக்கக்கூடியது</strong>. சென்சார்களை <strong>வரிசைகளாக</strong> வைத்து நேரத்தை நெடுவரிசைகளில், அல்லது <strong>புரட்டி</strong> — நேரத்தை வரிசைகளில், சென்சார்களை நெடுவரிசைகளில். ஒரே தரவு, எது நன்றாகப் படிக்கிறதோ அப்படி.',
          voice: 'நீங்கள் ஒரே அமைப்பில் கட்டுப்படவில்லை. இயல்பாக, சென்சார்கள் வரிசைகளில், நேரம் நெடுவரிசைகளில் இயங்குகின்றன. ஆனால் முழுவதையும் புரட்டலாம் — நேரத்தைப் பக்கத்திலும், சென்சார்களை மேலேயும் வைக்கலாம். இது ஒரே தரவு, உங்கள் குழுவுக்குப் படிக்க எளிதான வழியில் அமைக்கப்பட்டது.',
        },
        {
          label: 'வரம்புகள்', title: 'எச்சரிக்கை & பிழை சிறப்பித்தல்',
          body: 'மற்ற விட்ஜெட்களைப் போல, இலாஸ்டிக் அட்டவணை <strong>வரம்புகளை</strong> ஆதரிக்கிறது. <strong>எச்சரிக்கையில்</strong> உள்ள அளவீடு மஞ்சளாகவும், <strong>பிழை</strong> கட்டத்தை சிவப்பாகவும் மாற்றுகிறது. இங்கே <strong>MBR Flux Phase-2</strong> 0 — தவறவிடாதபடி சிவப்பில் குறிக்கப்பட்டுள்ளது.',
          voice: 'இறுதியாக, வரம்புகள். இலாஸ்டிக் அட்டவணை அவற்றை நேரடியாக கட்டங்களில் சிறப்பிக்கிறது. எச்சரிக்கைப் பட்டையில் உள்ள அளவீடு மஞ்சளாகவும், பிழை கட்டத்தை சிவப்பாகவும் மாற்றுகிறது. இங்கே பாருங்கள் — எம் பி ஆர் ஃப்ளக்ஸ் ஃபேஸ் டூ பூஜ்ஜியம் காட்டுகிறது, அட்டவணை அதை சிவப்பில் குறித்துள்ளது, எனவே அத்தகைய சிக்கல் பெரிய அட்டவணையிலும் உடனே தெரியும். அதுதான் இலாஸ்டிக் அட்டவணை — குழுவாக்கம், பல திரட்டல்கள், இருநூறு வரை நேர இடைவெளிகள், நெகிழ்வான அமைப்பு, மற்றும் வரம்பு சிறப்பித்தல். அடுத்த பாடத்தில், இன்னொரு விட்ஜெட்டைப் பார்ப்போம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: இன்னொரு விட்ஜெட் வகையைப் பார்ப்போம்.' },
        },
      ],
    },
    mr: {
      title: '<em>इलास्टिक</em><br>टेबल.',
      subtitle:
        'जेव्हा तुम्हाला एकाच वेळी अनेक सेन्सर पाहायचे असतात, तेव्हा इलास्टिक टेबल तुमचे विजेट आहे — गटबद्ध, लवचिक, आणि मोठ्या प्रमाणासाठी बनवलेले.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'एक लवचिक, गटबद्ध डेटा टेबल',
          body: '<strong>इलास्टिक टेबल</strong> एकाच वेळी अनेक सेन्सर पाहण्याचा एक चैतन्यमय, लवचिक मार्ग आहे. अॅडव्हान्स्ड टेबलच्या विपरीत, ती <strong>डॅशबोर्डच्या वेळ अवधीचे पालन करते</strong>. सेन्सर गटांमध्ये व्यवस्थित केले जातात.',
          voice: 'चला इलास्टिक टेबल पाहूया. जेव्हा तुम्हाला अनेक सेन्सर एकत्र पाहायचे असतात, तेव्हा हेच विजेट आहे. ते चैतन्यमय आहे, लवचिक आहे, आणि जुन्या अॅडव्हान्स्ड टेबलच्या विपरीत, ते नेहमी तुमच्या डॅशबोर्डच्या वेळ अवधीचे पालन करते. इथे ते पाणी गुणवत्ता रीडिंग दाखवत आहे, सेन्सर गटांमध्ये व्यवस्थित.',
        },
        {
          label: 'गटबद्धता', title: 'सेन्सर गटांमध्ये व्यवस्थित करा',
          body: 'सेन्सर तुम्ही परिभाषित केलेल्या <strong>गटांमध्ये</strong> एकत्र केले जातात — इथे <strong>अहमदाबाद एअरपोर्ट</strong>, <strong>मॉडेल इकॉनॉमिक टाउनशिप</strong>, आणि <strong>इंडिया हॅबिटॅट सेंटर</strong>. तुम्ही सर्व <strong>टँक-लेव्हल</strong> सेन्सर एकत्र, किंवा सर्व <strong>प्रेशर ट्रान्समीटर</strong> एकत्र गटबद्ध करू शकता.',
          voice: 'पहिली मोठी कल्पना म्हणजे गटबद्धता. सेन्सर कसे एकत्र बांधले जातील ते तुम्ही ठरवता. तुम्ही तुमचे सर्व टँक लेव्हल सेन्सर एका गटात, आणि सर्व प्रेशर ट्रान्समीटर दुसऱ्यात ठेवू शकता. इथे ते साइटनुसार गटबद्ध आहेत. आणि पाहा — प्रत्येक गट लहान किंवा मोठा करता येतो, जेणेकरून तुम्हाला हव्या त्या भागावर लक्ष केंद्रित करता येते.',
          tip: { type: 'tipLabel', text: 'तुम्ही पाहत नसलेले गट लहान करा जेणेकरून मोठी टेबल वाचायला सोपी राहील.' },
        },
        {
          label: 'एकत्रीकरण', title: 'प्रति सेन्सर अनेक एकत्रीकरण',
          body: 'प्रत्येक सेन्सर एक <strong>एकत्रीकरण</strong> दाखवतो — इथे <em>सध्याचे</em> — पण तुम्ही <strong>प्रति सेन्सर अनेक</strong> जोडू शकता. एकाच टॅगचे <strong>सध्याचे</strong>, <strong>सरासरी</strong>, आणि <strong>कमाल</strong> एकत्र दाखवा.',
          voice: 'नंबर आणि गेज विजेटप्रमाणे, प्रत्येक सेन्सरला एक एकत्रीकरण असते. पण इलास्टिक टेबल तुम्हाला एकापेक्षा जास्त दाखवू देते. एका सेन्सरसाठी, तुम्ही सध्याचे मूल्य, सरासरी, आणि कमाल — सर्व एकत्र दाखवू शकता. रीडिंग आता कुठे आहे एवढेच नाही, तर ती कशी वागत आहे हे समजण्याचा हा जलद मार्ग आहे.',
        },
        {
          label: 'वेळ स्लॉट', title: '200 पर्यंत वेळ स्लॉट',
          body: 'टेबल डॅशबोर्डच्या <strong>ग्रॅन्युलॅरिटी</strong>चे पालन करते आणि श्रेणीला <strong>वेळ स्लॉट</strong>मध्ये विभाजित करते — <strong>200</strong> पर्यंत. ग्रॅन्युलॅरिटी <em>तासाला</em> सेट करा, आणि तुम्ही गेले 200 तास, तासागणिक, कॉलममध्ये पाहू शकता.',
          voice: 'इथे ती मोठ्या प्रमाणावर काम करते. इलास्टिक टेबल तुमच्या डॅशबोर्डच्या ग्रॅन्युलॅरिटीचे पालन करते आणि वेळ श्रेणीला स्लॉटमध्ये कापते — दोनशे पर्यंत. म्हणून तुमची ग्रॅन्युलॅरिटी तासाला असेल, तर तुम्ही गेले दोनशे तास तासागणिक मांडू शकता. इथे आपण टँक लेव्हल आणि प्रेशर ट्रान्समीटर अनेक तासाच्या स्लॉटमध्ये पाहत आहोत. हे मोठ्या प्रमाणावर शक्तिशाली परिचालन विश्लेषण आहे.',
          tip: { type: 'rememberLabel', text: 'ग्रॅन्युलॅरिटी (मिनिटे, तास, दिवस) प्रत्येक स्लॉटचा आकार ठरवते; डॅशबोर्ड वेळ अवधी तुम्ही किती पाहता ते ठरवते — 200 पर्यंत.' },
        },
        {
          label: 'लेआउट', title: 'पंक्ती किंवा कॉलम — तुमची निवड',
          body: 'लेआउट <strong>पूर्णपणे कॉन्फिगर करण्यायोग्य</strong> आहे. सेन्सर <strong>पंक्तींमध्ये</strong> ठेवा आणि वेळ कॉलममध्ये, किंवा <strong>उलट करा</strong> — वेळ पंक्तींमध्ये आणि सेन्सर कॉलममध्ये. तोच डेटा, जो मार्ग सर्वोत्तम वाचतो तो.',
          voice: 'आणि तुम्ही एकाच लेआउटपुरते मर्यादित नाही. डीफॉल्टनुसार, सेन्सर पंक्तींमध्ये आणि वेळ कॉलममध्ये चालते. पण तुम्ही संपूर्ण गोष्ट उलटवू शकता — वेळ बाजूला आणि सेन्सर वर ठेवा. तोच डेटा, फक्त तुमच्या टीमला वाचायला सर्वात सोपा असेल त्या मार्गाने मांडलेला.',
        },
        {
          label: 'थ्रेशोल्ड', title: 'इशारा आणि त्रुटी हायलाइटिंग',
          body: 'इतर विजेटप्रमाणे, इलास्टिक टेबल <strong>थ्रेशोल्ड</strong>ला समर्थन देते. <strong>इशारा</strong> मधील रीडिंग पिवळ्या रंगात, आणि <strong>त्रुटी</strong> सेलला लाल करते. इथे <strong>MBR Flux Phase-2</strong> 0 आहे — चुकू नये म्हणून लाल रंगात चिन्हांकित.',
          voice: 'शेवटी, थ्रेशोल्ड. इलास्टिक टेबल त्यांना थेट सेलमध्ये हायलाइट करते. इशारा बँडमधील रीडिंग पिवळी होते, आणि त्रुटी सेलला लाल करते. इथे पाहा — एम बी आर फ्लक्स फेज टू शून्य दाखवत आहे, आणि टेबलने ते लाल रंगात चिन्हांकित केले आहे, जेणेकरून अशी समस्या मोठ्या टेबलमध्येही लगेच समोर येते. हे होते इलास्टिक टेबल — गटबद्धता, अनेक एकत्रीकरण, दोनशे पर्यंत वेळ स्लॉट, लवचिक लेआउट, आणि थ्रेशोल्ड हायलाइटिंग. पुढच्या पाठात, आपण आणखी एक विजेट पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: आपण आणखी एक विजेट प्रकार पाहू.' },
        },
      ],
    },
  },
};

export default lesson;
