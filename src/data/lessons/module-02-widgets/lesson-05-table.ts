import type { Lesson, SimpleTableData } from '../../types';

/**
 * Module 2 · Lesson 5 — Table Widget (simple table).   Tag: M2.L5
 * The simplest table: a flat list of sensor tags and their aggregated values.
 * Sensor × aggregation only, respects the dashboard time range.
 */

function equipment(opts: { ringRows?: boolean; values?: boolean } = {}): SimpleTableData {
  const r = (label: string, value: string, ring = false) => ({ label, value, ring });
  return {
    title: 'Equipment Running hours',
    plantTag: 'Adani Ahmedabad',
    highlight: opts.values ? 'values' : null,
    rows: [
      r('Raw Water transfer pump-1', '8', opts.ringRows),
      r('Raw Water transfer pump-2', '8.25', opts.ringRows),
      r('EQT bypass pump-1', '3.72', opts.ringRows),
      r('EQT bypass pump-2', '4'),
      r('Auto fine screen', '23.97'),
      r('Oil Skimmer', '23.98'),
      r('Anoxic Tank Agitator-1', '23.98'),
      r('Anoxic Tank Agitator-2', '23.98'),
      r('Aeration Blower-1', '12'),
      r('Aeration Blower-2', '11.98'),
      r('MBR Air blower-1', '10.73'),
      r('MBR Air blower-2', '11.98'),
      r('Permeate pump-1', '14.85'),
    ],
  };
}

const compliance: SimpleTableData = {
  title: 'Compliance Status (1=Compliant)',
  plantTag: 'All Plants',
  highlight: 'plant',
  rows: [
    { label: 'Modern Economic Town Limited', value: '1.00' },
    { label: 'India Habitat Center', value: '0.00' },
    { label: 'Adani Ahmedabad Airport', value: '1.00' },
  ],
};

// A table that can switch into a graph (menu open).
const utilityBlock: SimpleTableData = {
  title: 'Utility Block Flowmeters (KL)',
  menuItems: ['Bar Graph', 'Line Graph'],
  highlight: 'menu',
  rows: [
    { label: 'Utility Domestic Inlet', value: '3.47' },
    { label: 'Cooling Tower Inlet', value: '48.75' },
  ],
};

const lesson: Lesson = {
  id: 'lesson-05-table',
  moduleId: 'module-02-widgets',
  lessonNumber: 5,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'simpleTable', caption: 'Table Widget',
      widgetState: { simpleTable: equipment() }, cursor: [{ at: 0.1, x: 50, y: 30 }] },
    { mode: 'widget', widget: 'simpleTable', caption: 'One row per sensor tag',
      widgetState: { simpleTable: equipment({ ringRows: true }) },
      cursor: [{ at: 0.2, x: 30, y: 40 }, { at: 0.6, x: 30, y: 55 }] },
    { mode: 'widget', widget: 'simpleTable', caption: 'Sensor × aggregation',
      widgetState: { simpleTable: equipment({ values: true }) }, cursor: [{ at: 0.3, x: 85, y: 45 }] },
    { mode: 'widget', widget: 'simpleTable', caption: 'Respects the dashboard time',
      widgetState: { simpleTable: equipment() }, cursor: [{ at: 0.2, x: 50, y: 12 }] },
    { mode: 'widget', widget: 'simpleTable', caption: 'Switch table ⇄ graph',
      widgetState: { simpleTable: utilityBlock }, cursor: [{ at: 0.3, x: 88, y: 14, click: true }] },
    { mode: 'widget', widget: 'simpleTable', caption: 'Any sensors — even compliance',
      widgetState: { simpleTable: compliance }, cursor: [{ at: 0.3, x: 85, y: 16, click: true }] },
  ],
  content: {
    en: {
      title: 'The <em>Table</em><br>Widget.',
      subtitle:
        'Nothing fancy — just a clean list of sensors and their values. The simplest of the table widgets, and often the most useful.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'A simple list of sensors',
          body: "The <strong>Table</strong> widget is the simplest of the family — a clean list of sensors and their values. Here it shows <strong>Equipment Running hours</strong> for a plant, one row per piece of equipment.",
          voice: "After the elastic and advanced tables, here's the simplest one of all — just the Table widget. There's nothing fancy about it. It shows a clean list of sensors and their values, one per row. Here it's showing equipment running hours for a plant, with each pump, blower and screen on its own line.",
        },
        {
          label: 'Sensor Tags', title: 'One row per sensor tag',
          body: "Each row is a <strong>sensor tag</strong> you plot on the widget when you configure it. The widget simply shows those <strong>data points</strong> together — the label on the left, its value on the right.",
          voice: "Each row here is a sensor tag that you plotted on the widget when you set it up. That's all the table does — it takes the sensor tags you chose, and shows their values together in one place. The name on the left, the value on the right. Add as many as you need.",
        },
        {
          label: 'Aggregation', title: 'Set the aggregation',
          body: "Like the other widgets, you choose the <strong>aggregation</strong> for the values — <em>Current</em>, <em>Average</em>, <em>Maximum</em>, and so on. That's the table's only other axis: it supports <strong>sensor × aggregation</strong>, nothing more.",
          voice: "Just like the number, gauge and elastic widgets, you choose how each value is aggregated — current, average, maximum, and so on. And that's really all there is to configure. The table widget supports just two things — sensors, and an aggregation. Sensor times aggregation. No time axis to arrange, no grouping. Simple.",
        },
        {
          label: 'Dashboard Time', title: 'It follows the dashboard time',
          body: "Unlike the Advanced Table, the Table widget <strong>respects the dashboard time range</strong>. Change the time window at the top of the page, and every value here recalculates to match.",
          voice: "And here's a key point, especially after the advanced table. The simple table does respect your dashboard's time range. So unlike the advanced table, which keeps its own clock, this one follows the time window at the top of your page. Change that window, and every value in the table updates to match. It stays in sync with everything else.",
          tip: { type: 'rememberLabel', text: 'The Advanced Table keeps its own time; the simple Table follows the dashboard — an easy way to tell them apart.' },
        },
        {
          label: 'Switch View', title: 'Switch a table into a graph',
          body: "A table isn't locked in. Using the <strong>menu</strong> in the top-right, switch it straight into a <strong>Bar Graph</strong> or <strong>Line Graph</strong> — and switch a graph back to a table. Same data, different view.",
          voice: "One more handy thing. A table isn't locked into being a table. Using the menu in the top-right corner, you can switch it straight into a bar graph or a line graph — and switch a graph back into a table. It's the same data, shown a different way, in a single click.",
          tip: { type: 'tipLabel', text: 'Graphs and tables are two views of the same data — flip between them from the chart menu.' },
        },
        {
          label: 'Any Sensors', title: 'Any sensors — even compliance',
          body: "Because it's just sensors and values, the Table widget works for anything — even a <strong>compliance flag</strong>. Here <em>Compliance Status</em> shows 1 for compliant and 0 for non-compliant, across <strong>All Plants</strong>. That wraps up the table widgets.",
          voice: "And because it's nothing more than sensors and their values, you can use the table widget for almost anything. Here's a nice example — compliance status, where one means compliant and zero means not. India Habitat Center is reading zero, so it needs attention. Notice the All Plants label in the corner, showing this table spans every plant. And that completes our tour of the table widgets — simple, elastic, and advanced. In the next lesson, we'll move on to another kind of widget.",
          tip: { type: 'upNextLabel', text: 'Next: a different kind of widget.' },
        },
      ],
    },
    hi: {
      title: '<em>टेबल</em><br>विजेट।',
      subtitle:
        'कुछ ख़ास नहीं — बस सेंसर और उनके मानों की एक साफ़ सूची। टेबल विजेट्स में सबसे सरल, और अक्सर सबसे उपयोगी।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'सेंसर की एक सरल सूची',
          body: '<strong>टेबल</strong> विजेट इस परिवार में सबसे सरल है — सेंसर और उनके मानों की एक साफ़ सूची। यहाँ यह एक प्लांट के लिए <strong>उपकरण चलने के घंटे</strong> दिखाती है, हर उपकरण के लिए एक पंक्ति।',
          voice: 'इलास्टिक और एडवांस्ड टेबल के बाद, यह सबसे सरल है — बस टेबल विजेट। इसमें कुछ ख़ास नहीं है। यह सेंसर और उनके मानों की एक साफ़ सूची दिखाती है, हर एक अपनी पंक्ति में। यहाँ यह एक प्लांट के लिए उपकरण चलने के घंटे दिखा रही है, हर पंप, ब्लोअर और स्क्रीन अपनी लाइन में।',
        },
        {
          label: 'सेंसर टैग', title: 'प्रति सेंसर टैग एक पंक्ति',
          body: 'हर पंक्ति एक <strong>सेंसर टैग</strong> है जिसे आप कॉन्फ़िगर करते समय विजेट पर प्लॉट करते हैं। विजेट बस उन <strong>डेटा बिंदुओं</strong> को एक साथ दिखाता है — लेबल बाएँ, उसका मान दाएँ।',
          voice: 'यहाँ हर पंक्ति एक सेंसर टैग है जिसे आपने सेटअप के समय विजेट पर प्लॉट किया। टेबल बस इतना ही करती है — आपके चुने सेंसर टैग लेती है और उनके मान एक जगह एक साथ दिखाती है। नाम बाएँ, मान दाएँ। जितने चाहें उतने जोड़ें।',
        },
        {
          label: 'एकत्रीकरण', title: 'एकत्रीकरण सेट करें',
          body: 'अन्य विजेट की तरह, आप मानों के लिए <strong>एकत्रीकरण</strong> चुनते हैं — <em>वर्तमान</em>, <em>औसत</em>, <em>अधिकतम</em>, आदि। यही टेबल का एकमात्र दूसरा अक्ष है: यह <strong>सेंसर × एकत्रीकरण</strong> का समर्थन करती है, इससे ज़्यादा कुछ नहीं।',
          voice: 'नंबर, गेज और इलास्टिक विजेट की तरह, आप चुनते हैं कि हर मान कैसे एकत्रित हो — वर्तमान, औसत, अधिकतम, आदि। और बस इतना ही कॉन्फ़िगर करना है। टेबल विजेट सिर्फ़ दो चीज़ों का समर्थन करती है — सेंसर, और एक एकत्रीकरण। सेंसर गुणा एकत्रीकरण। कोई समय अक्ष नहीं, कोई समूहन नहीं। सरल।',
        },
        {
          label: 'डैशबोर्ड समय', title: 'यह डैशबोर्ड समय का पालन करती है',
          body: 'एडवांस्ड टेबल के विपरीत, टेबल विजेट <strong>डैशबोर्ड की समय अवधि का पालन करती है</strong>। पेज के ऊपर समय खिड़की बदलें, और यहाँ हर मान उसके अनुसार फिर से गणना हो जाता है।',
          voice: 'और यहाँ एक महत्वपूर्ण बात, ख़ासकर एडवांस्ड टेबल के बाद। सरल टेबल आपके डैशबोर्ड की समय अवधि का पालन करती है। तो एडवांस्ड टेबल के विपरीत, जो अपनी घड़ी रखती है, यह पेज के ऊपर की समय खिड़की का पालन करती है। उस खिड़की को बदलें, और टेबल में हर मान उसके अनुसार अपडेट हो जाता है। यह बाकी सब के साथ समकालिक रहती है।',
          tip: { type: 'rememberLabel', text: 'एडवांस्ड टेबल अपना समय रखती है; सरल टेबल डैशबोर्ड का पालन करती है — दोनों में फ़र्क पहचानने का आसान तरीका।' },
        },
        {
          label: 'दृश्य बदलें', title: 'टेबल को ग्राफ़ में बदलें',
          body: 'टेबल बंधी हुई नहीं है। ऊपर-दाएँ <strong>मेन्यू</strong> से, इसे सीधे <strong>बार ग्राफ़</strong> या <strong>लाइन ग्राफ़</strong> में बदलें — और ग्राफ़ को वापस टेबल में। वही डेटा, अलग दृश्य।',
          voice: 'एक और उपयोगी बात। टेबल केवल टेबल बने रहने तक सीमित नहीं है। ऊपर-दाएँ कोने के मेन्यू से, आप इसे सीधे बार ग्राफ़ या लाइन ग्राफ़ में बदल सकते हैं — और ग्राफ़ को वापस टेबल में। वही डेटा, एक अलग तरीके से दिखाया गया, एक ही क्लिक में।',
          tip: { type: 'tipLabel', text: 'ग्राफ़ और टेबल एक ही डेटा के दो दृश्य हैं — चार्ट मेन्यू से इनके बीच स्विच करें।' },
        },
        {
          label: 'कोई भी सेंसर', title: 'कोई भी सेंसर — अनुपालन भी',
          body: 'चूँकि यह बस सेंसर और मान है, टेबल विजेट किसी भी चीज़ के लिए काम करती है — एक <strong>अनुपालन फ़्लैग</strong> के लिए भी। यहाँ <em>Compliance Status</em> अनुपालक के लिए 1 और गैर-अनुपालक के लिए 0 दिखाती है, <strong>All Plants</strong> में। यह टेबल विजेट्स को समाप्त करता है।',
          voice: 'और चूँकि यह सेंसर और उनके मानों से ज़्यादा कुछ नहीं है, आप टेबल विजेट को लगभग किसी भी चीज़ के लिए उपयोग कर सकते हैं। यहाँ एक अच्छा उदाहरण है — अनुपालन स्थिति, जहाँ एक का मतलब अनुपालक और शून्य का मतलब नहीं। इंडिया हैबिटेट सेंटर शून्य पढ़ रहा है, तो उस पर ध्यान चाहिए। कोने में All Plants लेबल देखें, जो दिखाता है कि यह टेबल हर प्लांट तक फैली है। और यह टेबल विजेट्स का हमारा दौरा पूरा करता है — सरल, इलास्टिक, और एडवांस्ड। अगले पाठ में, हम एक अलग तरह के विजेट पर जाएँगे।',
          tip: { type: 'upNextLabel', text: 'आगे: एक अलग तरह का विजेट।' },
        },
      ],
    },
    ta: {
      title: '<em>டேபிள்</em><br>விட்ஜெட்.',
      subtitle:
        'விசேஷம் எதுவுமில்லை — சென்சார்கள் மற்றும் அவற்றின் மதிப்புகளின் ஒரு தெளிவான பட்டியல். டேபிள் விட்ஜெட்களில் எளிமையானது, பெரும்பாலும் மிகவும் பயனுள்ளது.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'சென்சார்களின் எளிய பட்டியல்',
          body: '<strong>டேபிள்</strong> விட்ஜெட் இக்குடும்பத்தில் எளிமையானது — சென்சார்கள் மற்றும் அவற்றின் மதிப்புகளின் தெளிவான பட்டியல். இங்கே இது ஒரு ஆலையின் <strong>உபகரண இயக்க மணிநேரங்களை</strong> காட்டுகிறது, ஒவ்வொரு உபகரணத்திற்கும் ஒரு வரிசை.',
          voice: 'இலாஸ்டிக் மற்றும் அட்வான்ஸ்டு அட்டவணைகளுக்குப் பிறகு, இதோ எல்லாவற்றிலும் எளிமையானது — டேபிள் விட்ஜெட். இதில் விசேஷம் எதுவுமில்லை. இது சென்சார்கள் மற்றும் அவற்றின் மதிப்புகளின் தெளிவான பட்டியலைக் காட்டுகிறது, ஒவ்வொன்றும் ஒரு வரிசையில். இங்கே இது ஒரு ஆலையின் உபகரண இயக்க மணிநேரங்களைக் காட்டுகிறது, ஒவ்வொரு பம்ப், ப்ளோயர், ஸ்கிரீனும் தனி வரியில்.',
        },
        {
          label: 'சென்சார் டேக்', title: 'ஒரு சென்சார் டேக்குக்கு ஒரு வரிசை',
          body: 'ஒவ்வொரு வரிசையும் நீங்கள் அமைக்கும்போது விட்ஜெட்டில் வரையும் <strong>சென்சார் டேக்</strong>. விட்ஜெட் அந்த <strong>தரவுப் புள்ளிகளை</strong> ஒன்றாகக் காட்டுகிறது — லேபிள் இடதுபுறம், மதிப்பு வலதுபுறம்.',
          voice: 'இங்கே ஒவ்வொரு வரிசையும் நீங்கள் அமைக்கும்போது விட்ஜெட்டில் வரைந்த சென்சார் டேக். அட்டவணை செய்வது இவ்வளவுதான் — நீங்கள் தேர்ந்த சென்சார் டேக்குகளை எடுத்து, அவற்றின் மதிப்புகளை ஒரே இடத்தில் ஒன்றாகக் காட்டுகிறது. பெயர் இடதுபுறம், மதிப்பு வலதுபுறம். தேவையான அளவு சேர்க்கலாம்.',
        },
        {
          label: 'திரட்டல்', title: 'திரட்டலை அமைக்கவும்',
          body: 'மற்ற விட்ஜெட்களைப் போல, மதிப்புகளுக்கான <strong>திரட்டலைத்</strong> தேர்வு செய்கிறீர்கள் — <em>தற்போதைய</em>, <em>சராசரி</em>, <em>அதிகபட்சம்</em> போன்றவை. அதுதான் அட்டவணையின் ஒரே மற்ற அச்சு: இது <strong>சென்சார் × திரட்டலை</strong> மட்டும் ஆதரிக்கிறது.',
          voice: 'எண், கேஜ், இலாஸ்டிக் விட்ஜெட்களைப் போல, ஒவ்வொரு மதிப்பும் எப்படி திரட்டப்படுகிறது என்பதைத் தேர்வு செய்கிறீர்கள் — தற்போதைய, சராசரி, அதிகபட்சம், போன்றவை. அமைக்க வேண்டியது இவ்வளவுதான். டேபிள் விட்ஜெட் இரண்டு விஷயங்களை மட்டும் ஆதரிக்கிறது — சென்சார்கள், மற்றும் ஒரு திரட்டல். சென்சார் பெருக்கல் திரட்டல். அமைக்க நேர அச்சு இல்லை, குழுவாக்கம் இல்லை. எளிமை.',
        },
        {
          label: 'டாஷ்போர்டு நேரம்', title: 'இது டாஷ்போர்டு நேரத்தைப் பின்பற்றுகிறது',
          body: 'அட்வான்ஸ்டு அட்டவணையைப் போலன்றி, டேபிள் விட்ஜெட் <strong>டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது</strong>. பக்கத்தின் மேலுள்ள கால சாளரத்தை மாற்றினால், இங்குள்ள ஒவ்வொரு மதிப்பும் அதற்கேற்ப மீண்டும் கணக்கிடப்படுகிறது.',
          voice: 'இதோ ஒரு முக்கியக் கருத்து, குறிப்பாக அட்வான்ஸ்டு அட்டவணைக்குப் பிறகு. எளிய அட்டவணை உங்கள் டாஷ்போர்டின் கால அளவைப் பின்பற்றுகிறது. எனவே தனது கடிகாரத்தை வைத்திருக்கும் அட்வான்ஸ்டு அட்டவணையைப் போலன்றி, இது பக்கத்தின் மேலுள்ள கால சாளரத்தைப் பின்பற்றுகிறது. அந்த சாளரத்தை மாற்றினால், அட்டவணையில் உள்ள ஒவ்வொரு மதிப்பும் அதற்கேற்ப புதுப்பிக்கப்படுகிறது. இது மற்ற அனைத்துடனும் ஒத்திசைந்திருக்கிறது.',
          tip: { type: 'rememberLabel', text: 'அட்வான்ஸ்டு அட்டவணை தனது நேரத்தை வைத்திருக்கிறது; எளிய அட்டவணை டாஷ்போர்டைப் பின்பற்றுகிறது — இரண்டையும் வேறுபடுத்த எளிய வழி.' },
        },
        {
          label: 'காட்சியை மாற்று', title: 'அட்டவணையை வரைபடமாக மாற்று',
          body: "அட்டவணை பூட்டப்படவில்லை. மேல்-வலதுபுற <strong>மெனுவைப்</strong> பயன்படுத்தி, அதை நேரடியாக <strong>பட்டை வரைபடமாக</strong> அல்லது <strong>கோடு வரைபடமாக</strong> மாற்றவும் — வரைபடத்தை மீண்டும் அட்டவணையாகவும். அதே தரவு, வேறு காட்சி.",
          voice: 'மேலும் ஒரு பயனுள்ள விஷயம். அட்டவணை அட்டவணையாகவே இருக்க வேண்டிய கட்டாயமில்லை. மேல்-வலது மூலையில் உள்ள மெனுவைப் பயன்படுத்தி, அதை நேரடியாக பட்டை வரைபடமாக அல்லது கோடு வரைபடமாக மாற்றலாம் — வரைபடத்தை மீண்டும் அட்டவணையாகவும். அதே தரவு, வேறு வழியில் காட்டப்படுகிறது, ஒரே கிளிக்கில்.',
          tip: { type: 'tipLabel', text: 'வரைபடங்களும் அட்டவணைகளும் ஒரே தரவின் இரண்டு காட்சிகள் — சார்ட் மெனுவிலிருந்து அவற்றுக்கு இடையே மாறவும்.' },
        },
        {
          label: 'எந்த சென்சாரும்', title: 'எந்த சென்சாரும் — இணக்கமும் கூட',
          body: 'இது வெறும் சென்சார்களும் மதிப்புகளும் என்பதால், டேபிள் விட்ஜெட் எதற்கும் வேலை செய்கிறது — ஒரு <strong>இணக்க கொடி</strong>க்கும் கூட. இங்கே <em>Compliance Status</em> இணக்கத்திற்கு 1, இணக்கமின்மைக்கு 0 காட்டுகிறது, <strong>All Plants</strong> முழுவதும். இது அட்டவணை விட்ஜெட்களை முடிக்கிறது.',
          voice: 'இது சென்சார்கள் மற்றும் அவற்றின் மதிப்புகளைத் தவிர வேறொன்றுமில்லை என்பதால், டேபிள் விட்ஜெட்டை கிட்டத்தட்ட எதற்கும் பயன்படுத்தலாம். இதோ ஒரு நல்ல உதாரணம் — இணக்க நிலை, ஒன்று என்றால் இணக்கம், பூஜ்ஜியம் என்றால் இல்லை. இந்தியா ஹேபிடாட் சென்டர் பூஜ்ஜியம் காட்டுகிறது, எனவே அதற்குக் கவனம் தேவை. மூலையில் All Plants லேபிளைக் கவனியுங்கள், இந்த அட்டவணை ஒவ்வொரு ஆலையையும் உள்ளடக்குகிறது என்பதைக் காட்டுகிறது. இது அட்டவணை விட்ஜெட்களின் நமது சுற்றுப்பயணத்தை முடிக்கிறது — எளிய, இலாஸ்டிக், மற்றும் அட்வான்ஸ்டு. அடுத்த பாடத்தில், வேறு வகை விட்ஜெட்டுக்கு செல்வோம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: வேறு வகை விட்ஜெட்.' },
        },
      ],
    },
    mr: {
      title: '<em>टेबल</em><br>विजेट.',
      subtitle:
        'खास काही नाही — फक्त सेन्सर आणि त्यांच्या मूल्यांची एक स्वच्छ यादी. टेबल विजेट्समधील सर्वात सोपे, आणि बहुधा सर्वात उपयुक्त.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'सेन्सरची एक सोपी यादी',
          body: '<strong>टेबल</strong> विजेट या कुटुंबातील सर्वात सोपे आहे — सेन्सर आणि त्यांच्या मूल्यांची एक स्वच्छ यादी. इथे ते एका प्लांटसाठी <strong>उपकरण चालण्याचे तास</strong> दाखवते, प्रत्येक उपकरणासाठी एक पंक्ती.',
          voice: 'इलास्टिक आणि अॅडव्हान्स्ड टेबलनंतर, हे सर्वात सोपे आहे — फक्त टेबल विजेट. यात खास काही नाही. ते सेन्सर आणि त्यांच्या मूल्यांची एक स्वच्छ यादी दाखवते, प्रत्येक स्वतःच्या पंक्तीत. इथे ते एका प्लांटसाठी उपकरण चालण्याचे तास दाखवत आहे, प्रत्येक पंप, ब्लोअर आणि स्क्रीन स्वतःच्या ओळीत.',
        },
        {
          label: 'सेन्सर टॅग', title: 'प्रति सेन्सर टॅग एक पंक्ती',
          body: 'प्रत्येक पंक्ती एक <strong>सेन्सर टॅग</strong> आहे जो तुम्ही कॉन्फिगर करताना विजेटवर प्लॉट करता. विजेट फक्त ते <strong>डेटा बिंदू</strong> एकत्र दाखवते — लेबल डावीकडे, त्याचे मूल्य उजवीकडे.',
          voice: 'इथे प्रत्येक पंक्ती एक सेन्सर टॅग आहे जो तुम्ही सेटअप करताना विजेटवर प्लॉट केला. टेबल एवढेच करते — तुम्ही निवडलेले सेन्सर टॅग घेते आणि त्यांची मूल्ये एकाच ठिकाणी एकत्र दाखवते. नाव डावीकडे, मूल्य उजवीकडे. हवे तितके जोडा.',
        },
        {
          label: 'एकत्रीकरण', title: 'एकत्रीकरण सेट करा',
          body: 'इतर विजेटप्रमाणे, तुम्ही मूल्यांसाठी <strong>एकत्रीकरण</strong> निवडता — <em>सध्याचे</em>, <em>सरासरी</em>, <em>कमाल</em>, इत्यादी. हाच टेबलचा एकमेव दुसरा अक्ष आहे: ती <strong>सेन्सर × एकत्रीकरण</strong> ला समर्थन देते, यापेक्षा अधिक काही नाही.',
          voice: 'नंबर, गेज आणि इलास्टिक विजेटप्रमाणे, प्रत्येक मूल्य कसे एकत्रित होते ते तुम्ही निवडता — सध्याचे, सरासरी, कमाल, इत्यादी. आणि कॉन्फिगर करायचे एवढेच आहे. टेबल विजेट फक्त दोन गोष्टींना समर्थन देते — सेन्सर, आणि एक एकत्रीकरण. सेन्सर गुणिले एकत्रीकरण. मांडायला वेळ अक्ष नाही, गटबद्धता नाही. सोपे.',
        },
        {
          label: 'डॅशबोर्ड वेळ', title: 'ती डॅशबोर्ड वेळेचे पालन करते',
          body: 'अॅडव्हान्स्ड टेबलच्या विपरीत, टेबल विजेट <strong>डॅशबोर्डच्या वेळ अवधीचे पालन करते</strong>. पानाच्या वरची वेळ खिडकी बदला, आणि इथले प्रत्येक मूल्य त्यानुसार पुन्हा मोजले जाते.',
          voice: 'आणि इथे एक महत्त्वाचा मुद्दा, विशेषतः अॅडव्हान्स्ड टेबलनंतर. सोपी टेबल तुमच्या डॅशबोर्डच्या वेळ अवधीचे पालन करते. म्हणून स्वतःचे घड्याळ ठेवणाऱ्या अॅडव्हान्स्ड टेबलच्या विपरीत, ही पानाच्या वरच्या वेळ खिडकीचे पालन करते. ती खिडकी बदला, आणि टेबलमधील प्रत्येक मूल्य त्यानुसार अपडेट होते. ती इतर सर्वांशी समकालिक राहते.',
          tip: { type: 'rememberLabel', text: 'अॅडव्हान्स्ड टेबल स्वतःचा वेळ ठेवते; सोपी टेबल डॅशबोर्डचे पालन करते — दोघांत फरक ओळखण्याचा सोपा मार्ग.' },
        },
        {
          label: 'दृश्य बदला', title: 'टेबल आलेखात बदला',
          body: 'टेबल बांधलेली नाही. वर-उजव्या <strong>मेनू</strong>ने, ती थेट <strong>बार आलेख</strong> किंवा <strong>लाइन आलेख</strong> मध्ये बदला — आणि आलेख पुन्हा टेबलमध्ये. तोच डेटा, वेगळे दृश्य.',
          voice: 'आणखी एक उपयुक्त गोष्ट. टेबल फक्त टेबल राहण्यापुरती मर्यादित नाही. वर-उजव्या कोपऱ्यातील मेनूने, तुम्ही ती थेट बार आलेख किंवा लाइन आलेखात बदलू शकता — आणि आलेख पुन्हा टेबलमध्ये. तोच डेटा, वेगळ्या प्रकारे दाखवलेला, एका क्लिकमध्ये.',
          tip: { type: 'tipLabel', text: 'आलेख आणि टेबल हे एकाच डेटाची दोन दृश्ये आहेत — चार्ट मेनूने त्यांच्यात स्विच करा.' },
        },
        {
          label: 'कोणतेही सेन्सर', title: 'कोणतेही सेन्सर — अनुपालनही',
          body: 'ही फक्त सेन्सर आणि मूल्ये असल्यामुळे, टेबल विजेट कशासाठीही काम करते — एका <strong>अनुपालन फ्लॅग</strong>साठीही. इथे <em>Compliance Status</em> अनुपालकासाठी 1 आणि गैर-अनुपालकासाठी 0 दाखवते, <strong>All Plants</strong> मध्ये. यामुळे टेबल विजेट्स पूर्ण होतात.',
          voice: 'आणि ही सेन्सर आणि त्यांच्या मूल्यांपेक्षा अधिक काही नसल्यामुळे, तुम्ही टेबल विजेट जवळपास कशासाठीही वापरू शकता. इथे एक छान उदाहरण आहे — अनुपालन स्थिती, जिथे एक म्हणजे अनुपालक आणि शून्य म्हणजे नाही. इंडिया हॅबिटॅट सेंटर शून्य दाखवत आहे, म्हणून त्याकडे लक्ष हवे. कोपऱ्यातील All Plants लेबल पाहा, जे दाखवते की ही टेबल प्रत्येक प्लांटपर्यंत पसरते. आणि यामुळे आपला टेबल विजेट्सचा दौरा पूर्ण होतो — सोपे, इलास्टिक, आणि अॅडव्हान्स्ड. पुढच्या पाठात, आपण वेगळ्या प्रकारच्या विजेटकडे जाऊ.',
          tip: { type: 'upNextLabel', text: 'पुढे: वेगळ्या प्रकारचे विजेट.' },
        },
      ],
    },
  },
};

export default lesson;
