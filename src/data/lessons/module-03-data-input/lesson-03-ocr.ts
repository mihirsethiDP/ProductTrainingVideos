import type { Lesson, OcrData } from '../../types';

/**
 * Module 3 · Lesson 3 — OCR Data Input.   Tag: M3.L3
 * Photograph a filled logbook page and let OCR auto-populate the sensor tags,
 * via a one-time per-plant template that maps logbook fields to sensor tags.
 */

const ENTRIES: OcrData['entries'] = [
  { label: 'Inlet pH', value: '7.6' },
  { label: 'Inlet TSS', value: '210' },
  { label: 'Inlet COD', value: '480' },
  { label: 'Outlet pH', value: '7.8' },
  { label: 'Outlet TSS', value: '8' },
  { label: 'Outlet COD', value: '32' },
];

const MAPPINGS: OcrData['mappings'] = [
  { logbookField: 'Inlet pH', sensorTag: 'pH Inlet (Equalization)' },
  { logbookField: 'Inlet TSS', sensorTag: 'TSS Inlet' },
  { logbookField: 'Inlet COD', sensorTag: 'COD Inlet' },
  { logbookField: 'Outlet pH', sensorTag: 'pH Outlet' },
  { logbookField: 'Outlet TSS', sensorTag: 'TSS Outlet' },
  { logbookField: 'Outlet COD', sensorTag: 'COD Outlet' },
];

const lesson: Lesson = {
  id: 'lesson-03-ocr',
  moduleId: 'module-03-data-input',
  lessonNumber: 3,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'ocr', caption: 'Photograph the logbook',
      widgetState: { ocr: { mode: 'logbook', entries: ENTRIES, scanState: 'idle', highlight: 'upload' } },
      cursor: [{ at: 0.3, x: 50, y: 78, click: true }] },
    { mode: 'widget', widget: 'ocr', caption: 'One-time template — reusable across plants',
      widgetState: { ocr: { mode: 'template', title: 'ETP Logbook Template', mappings: MAPPINGS, highlight: 'mapping' } },
      cursor: [{ at: 0.2, x: 80, y: 14 }, { at: 0.6, x: 50, y: 45 }] },
    { mode: 'widget', widget: 'ocr', caption: 'Upload, and it auto-fills',
      widgetState: { ocr: { mode: 'flow', entries: ENTRIES, mappings: MAPPINGS, highlight: 'result' } },
      cursor: [{ at: 0.2, x: 22, y: 45 }, { at: 0.7, x: 82, y: 45 }] },
    { mode: 'widget', widget: 'ocr', caption: 'Less admin, better data',
      widgetState: { ocr: { mode: 'logbook', entries: ENTRIES, scanState: 'done' } },
      cursor: [{ at: 0.3, x: 50, y: 40 }] },
  ],
  content: {
    en: {
      title: 'OCR <em>Data Input.</em>',
      subtitle:
        'Skip the typing — photograph your logbook, and the system reads the readings straight into the right sensor tags.',
      chapter: 'Chapter Three · Data at the Source',
      steps: [
        {
          label: 'Overview', title: 'Snap the logbook, skip the typing',
          body: "Operators used to type every logbook reading into the system by hand. With <strong>OCR Data Input</strong>, you just <strong>upload a photo</strong> of the logbook page — and the system reads the values and fills in the sensor tags for you.",
          voice: "Here's a clever extension to Data Input — O C R Data Input. Until now, an operator had to copy every reading from the paper logbook into the system by hand. With this, you simply take a photo of the logbook page after you've filled it in. The system reads the numbers straight off the page, and populates the right sensor tags automatically. No more retyping.",
        },
        {
          label: 'One-Time Setup', title: 'Set up the template once',
          body: "First, a quick one-time setup. You build a <strong>template</strong> that maps each <strong>logbook field</strong> to its matching <strong>sensor tag</strong>, configured at the plant level. Build it once — and it's <strong>reusable across plants</strong>.",
          voice: "It does need one piece of setup, done just once. You create a template that tells the system how your logbook is laid out — which line on the page maps to which sensor tag. This is configured at the plant level, to match that plant's logbook. The nice part is, once you've built a template, you can reuse it across other plants, so you're not starting from scratch each time.",
          tip: { type: 'noteLabel', text: 'The template is configured once per plant logbook, then reused — a one-time job.' },
        },
        {
          label: 'The Flow', title: 'Upload, and it auto-fills',
          body: "Day to day, the operator records readings in the logbook as usual, then <strong>uploads a photo</strong>. OCR reads each field and <strong>auto-populates the matching sensor tags</strong> — ready to review and submit.",
          voice: "Once the template is set, the daily flow couldn't be simpler. The operator records the readings in the logbook, just as they always have. Then they upload a photo of the page. O C R reads each value, matches it to the right sensor tag using your template, and fills everything in automatically. The operator just gives it a quick check, and submits.",
        },
        {
          label: 'Why It Matters', title: 'Less admin, better data',
          body: "The result: far <strong>less manual typing</strong>, so operators spend more time on the plant and less on paperwork — and readings get entered <strong>more consistently and on time</strong>.",
          voice: "And the payoff is real. There's far less manual data entry, so operators can focus on running the plant instead of retyping numbers. And because it's so quick, readings tend to get entered more consistently, and more on time — which means cleaner, more reliable data on your dashboard. That's O C R Data Input.",
          tip: { type: 'upNextLabel', text: 'Photograph, auto-fill, submit — data entry made effortless.' },
        },
      ],
    },
    hi: {
      title: 'OCR <em>डेटा इनपुट।</em>',
      subtitle:
        'टाइपिंग छोड़ें — अपने लॉगबुक की फ़ोटो लें, और सिस्टम रीडिंग्स को सीधे सही सेंसर टैग में पढ़ लेता है।',
      chapter: 'अध्याय तीन · स्रोत पर डेटा',
      steps: [
        {
          label: 'अवलोकन', title: 'लॉगबुक की फ़ोटो लें, टाइपिंग छोड़ें',
          body: 'पहले ऑपरेटर हर लॉगबुक रीडिंग को हाथ से सिस्टम में टाइप करते थे। <strong>OCR डेटा इनपुट</strong> के साथ, आप बस लॉगबुक पेज की <strong>फ़ोटो अपलोड</strong> करते हैं — और सिस्टम मान पढ़कर सेंसर टैग खुद भर देता है।',
          voice: 'यहाँ डेटा इनपुट का एक चतुर विस्तार है — ओ सी आर डेटा इनपुट। अब तक, ऑपरेटर को कागज़ी लॉगबुक से हर रीडिंग को हाथ से सिस्टम में नकल करना पड़ता था। इसके साथ, आप बस लॉगबुक पेज भरने के बाद उसकी फ़ोटो लेते हैं। सिस्टम पेज से सीधे संख्याएँ पढ़ता है, और सही सेंसर टैग अपने आप भर देता है। अब दोबारा टाइप करने की ज़रूरत नहीं।',
        },
        {
          label: 'एक-बार सेटअप', title: 'टेम्पलेट एक बार सेट करें',
          body: 'पहले, एक त्वरित एक-बार सेटअप। आप एक <strong>टेम्पलेट</strong> बनाते हैं जो हर <strong>लॉगबुक फ़ील्ड</strong> को उसके मिलते-जुलते <strong>सेंसर टैग</strong> से जोड़ता है, प्लांट स्तर पर कॉन्फ़िगर किया जाता है। एक बार बनाएँ — और यह <strong>कई प्लांट में पुन: उपयोग योग्य</strong> है।',
          voice: 'इसमें एक सेटअप की ज़रूरत होती है, जो बस एक बार किया जाता है। आप एक टेम्पलेट बनाते हैं जो सिस्टम को बताता है कि आपकी लॉगबुक कैसी है — पेज की कौन सी लाइन किस सेंसर टैग से जुड़ती है। यह प्लांट स्तर पर उस प्लांट की लॉगबुक से मेल खाने के लिए कॉन्फ़िगर होता है। अच्छी बात यह है, एक बार टेम्पलेट बना लेने पर, आप इसे दूसरे प्लांट में भी पुन: उपयोग कर सकते हैं, तो हर बार शुरू से शुरू नहीं करना पड़ता।',
          tip: { type: 'noteLabel', text: 'टेम्पलेट हर प्लांट की लॉगबुक के लिए एक बार कॉन्फ़िगर होता है, फिर पुन: उपयोग — एक-बार का काम।' },
        },
        {
          label: 'प्रवाह', title: 'अपलोड करें, और यह खुद भर जाता है',
          body: 'रोज़, ऑपरेटर हमेशा की तरह लॉगबुक में रीडिंग दर्ज करता है, फिर <strong>एक फ़ोटो अपलोड</strong> करता है। OCR हर फ़ील्ड पढ़ता है और <strong>मिलते सेंसर टैग खुद भर देता है</strong> — समीक्षा और जमा करने को तैयार।',
          voice: 'टेम्पलेट सेट होने के बाद, दैनिक प्रवाह इससे सरल नहीं हो सकता। ऑपरेटर हमेशा की तरह लॉगबुक में रीडिंग दर्ज करता है। फिर वह पेज की फ़ोटो अपलोड करता है। ओ सी आर हर मान पढ़ता है, आपके टेम्पलेट का उपयोग करके उसे सही सेंसर टैग से मिलाता है, और सब कुछ अपने आप भर देता है। ऑपरेटर बस एक त्वरित जाँच करता है, और जमा कर देता है।',
        },
        {
          label: 'यह क्यों मायने रखता है', title: 'कम कागज़ी काम, बेहतर डेटा',
          body: 'परिणाम: बहुत <strong>कम मैनुअल टाइपिंग</strong>, तो ऑपरेटर प्लांट पर ज़्यादा और कागज़ी काम पर कम समय बिताते हैं — और रीडिंग्स <strong>अधिक नियमित और समय पर</strong> दर्ज होती हैं।',
          voice: 'और फ़ायदा वास्तविक है। बहुत कम मैनुअल डेटा प्रविष्टि होती है, तो ऑपरेटर संख्याएँ दोबारा टाइप करने के बजाय प्लांट चलाने पर ध्यान दे सकते हैं। और चूँकि यह इतना तेज़ है, रीडिंग्स अधिक नियमित रूप से, और अधिक समय पर दर्ज होती हैं — जिसका मतलब है आपके डैशबोर्ड पर साफ़, अधिक विश्वसनीय डेटा। यह है ओ सी आर डेटा इनपुट।',
          tip: { type: 'upNextLabel', text: 'फ़ोटो लें, खुद भरें, जमा करें — डेटा प्रविष्टि अब आसान।' },
        },
      ],
    },
    ta: {
      title: 'OCR <em>டேட்டா இன்புட்.</em>',
      subtitle:
        'தட்டச்சை விடுங்கள் — உங்கள் லாக்புக்கைப் புகைப்படம் எடுங்கள், சிஸ்டம் அளவீடுகளை நேராக சரியான சென்சார் டேக்குகளில் படிக்கிறது.',
      chapter: 'அத்தியாயம் மூன்று · மூலத்தில் தரவு',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'லாக்புக்கைப் படமெடுங்கள், தட்டச்சை விடுங்கள்',
          body: 'முன்பு இயக்குனர்கள் ஒவ்வொரு லாக்புக் அளவீட்டையும் கையால் சிஸ்டத்தில் தட்டச்சு செய்தனர். <strong>OCR டேட்டா இன்புட்</strong>-உடன், லாக்புக் பக்கத்தின் <strong>புகைப்படத்தை</strong> பதிவேற்றினால் போதும் — சிஸ்டம் மதிப்புகளைப் படித்து சென்சார் டேக்குகளை நிரப்புகிறது.',
          voice: 'டேட்டா இன்புட்டுக்கு ஒரு புத்திசாலித்தனமான நீட்டிப்பு இதோ — ஓ சி ஆர் டேட்டா இன்புட். இதுவரை, இயக்குனர் காகித லாக்புக்கிலிருந்து ஒவ்வொரு அளவீட்டையும் கையால் சிஸ்டத்தில் நகலெடுக்க வேண்டியிருந்தது. இதனுடன், லாக்புக் பக்கத்தை நிரப்பிய பிறகு அதன் புகைப்படத்தை எடுத்தால் போதும். சிஸ்டம் பக்கத்திலிருந்து நேராக எண்களைப் படித்து, சரியான சென்சார் டேக்குகளைத் தானாக நிரப்புகிறது. இனி மீண்டும் தட்டச்சு செய்ய வேண்டாம்.',
        },
        {
          label: 'ஒரு-முறை அமைப்பு', title: 'டெம்ப்ளேட்டை ஒருமுறை அமைக்கவும்',
          body: 'முதலில், ஒரு விரைவான ஒரு-முறை அமைப்பு. ஒவ்வொரு <strong>லாக்புக் புலத்தையும்</strong> அதன் பொருந்தும் <strong>சென்சார் டேக்குடன்</strong> இணைக்கும் ஒரு <strong>டெம்ப்ளேட்டை</strong> உருவாக்குகிறீர்கள், ஆலை மட்டத்தில் அமைக்கப்படுகிறது. ஒருமுறை உருவாக்குங்கள் — இது <strong>பல ஆலைகளில் மீண்டும் பயன்படுத்தக்கூடியது</strong>.',
          voice: 'இதற்கு ஒரு அமைப்பு தேவை, அது ஒருமுறை மட்டுமே செய்யப்படுகிறது. உங்கள் லாக்புக் எப்படி அமைக்கப்பட்டுள்ளது என்பதை சிஸ்டத்துக்குச் சொல்லும் ஒரு டெம்ப்ளேட்டை உருவாக்குகிறீர்கள் — பக்கத்தின் எந்த வரி எந்த சென்சார் டேக்குடன் இணைகிறது. இது அந்த ஆலையின் லாக்புக்குடன் பொருந்த ஆலை மட்டத்தில் அமைக்கப்படுகிறது. நல்ல விஷயம், ஒருமுறை டெம்ப்ளேட்டை உருவாக்கியதும், அதை மற்ற ஆலைகளிலும் மீண்டும் பயன்படுத்தலாம், எனவே ஒவ்வொரு முறையும் புதிதாகத் தொடங்க வேண்டாம்.',
          tip: { type: 'noteLabel', text: 'டெம்ப்ளேட் ஒவ்வொரு ஆலை லாக்புக்குக்கும் ஒருமுறை அமைக்கப்பட்டு, பின் மீண்டும் பயன்படுத்தப்படுகிறது — ஒரு-முறை வேலை.' },
        },
        {
          label: 'ஓட்டம்', title: 'பதிவேற்றுங்கள், அது தானே நிரப்புகிறது',
          body: 'தினமும், இயக்குனர் வழக்கம் போல லாக்புக்கில் அளவீடுகளைப் பதிவு செய்து, ஒரு <strong>புகைப்படத்தைப் பதிவேற்றுகிறார்</strong>. OCR ஒவ்வொரு புலத்தையும் படித்து <strong>பொருந்தும் சென்சார் டேக்குகளைத் தானே நிரப்புகிறது</strong> — மதிப்பாய்வு செய்து சமர்ப்பிக்கத் தயார்.',
          voice: 'டெம்ப்ளேட் அமைக்கப்பட்டதும், தினசரி ஓட்டம் இதைவிட எளிமையாக இருக்க முடியாது. இயக்குனர் எப்போதும் போல லாக்புக்கில் அளவீடுகளைப் பதிவு செய்கிறார். பின்னர் பக்கத்தின் புகைப்படத்தைப் பதிவேற்றுகிறார். ஓ சி ஆர் ஒவ்வொரு மதிப்பையும் படித்து, உங்கள் டெம்ப்ளேட்டைப் பயன்படுத்தி அதைச் சரியான சென்சார் டேக்குடன் பொருத்தி, அனைத்தையும் தானே நிரப்புகிறது. இயக்குனர் ஒரு விரைவான சோதனை செய்து சமர்ப்பிக்கிறார்.',
        },
        {
          label: 'ஏன் முக்கியம்', title: 'குறைந்த நிர்வாகம், சிறந்த தரவு',
          body: 'விளைவு: மிகக் <strong>குறைந்த கைமுறை தட்டச்சு</strong>, எனவே இயக்குனர்கள் ஆலையில் அதிக நேரமும் காகித வேலையில் குறைந்த நேரமும் செலவிடுகிறார்கள் — அளவீடுகள் <strong>மிகவும் சீராகவும் சரியான நேரத்திலும்</strong> பதிவாகின்றன.',
          voice: 'பலன் உண்மையானது. கைமுறை தரவு உள்ளீடு மிகக் குறைவு, எனவே இயக்குனர்கள் எண்களை மீண்டும் தட்டச்சு செய்வதற்குப் பதிலாக ஆலையை இயக்குவதில் கவனம் செலுத்தலாம். இது மிக விரைவாக இருப்பதால், அளவீடுகள் மிகவும் சீராகவும், சரியான நேரத்திலும் பதிவாகின்றன — அதாவது உங்கள் டாஷ்போர்டில் தெளிவான, நம்பகமான தரவு. அதுதான் ஓ சி ஆர் டேட்டா இன்புட்.',
          tip: { type: 'upNextLabel', text: 'படமெடுங்கள், தானே நிரப்புங்கள், சமர்ப்பிக்கவும் — தரவு உள்ளீடு எளிதானது.' },
        },
      ],
    },
    mr: {
      title: 'OCR <em>डेटा इनपुट.</em>',
      subtitle:
        'टायपिंग सोडा — तुमच्या लॉगबुकचा फोटो घ्या, आणि सिस्टम रीडिंग थेट योग्य सेन्सर टॅगमध्ये वाचते.',
      chapter: 'अध्याय तीन · स्रोतावर डेटा',
      steps: [
        {
          label: 'आढावा', title: 'लॉगबुकचा फोटो घ्या, टायपिंग सोडा',
          body: 'पूर्वी ऑपरेटर प्रत्येक लॉगबुक रीडिंग हाताने सिस्टममध्ये टाइप करत. <strong>OCR डेटा इनपुट</strong>सह, तुम्ही फक्त लॉगबुक पानाचा <strong>फोटो अपलोड</strong> करता — आणि सिस्टम मूल्ये वाचून सेन्सर टॅग स्वतः भरते.',
          voice: 'इथे डेटा इनपुटचा एक हुशार विस्तार आहे — ओ सी आर डेटा इनपुट. आतापर्यंत, ऑपरेटरला कागदी लॉगबुकमधून प्रत्येक रीडिंग हाताने सिस्टममध्ये कॉपी करावी लागे. यासह, तुम्ही लॉगबुक पान भरल्यानंतर फक्त त्याचा फोटो घेता. सिस्टम पानावरून थेट संख्या वाचते, आणि योग्य सेन्सर टॅग आपोआप भरते. आता पुन्हा टाइप करण्याची गरज नाही.',
        },
        {
          label: 'एक-वेळ सेटअप', title: 'टेम्पलेट एकदा सेट करा',
          body: 'प्रथम, एक झटपट एक-वेळ सेटअप. तुम्ही एक <strong>टेम्पलेट</strong> तयार करता जे प्रत्येक <strong>लॉगबुक फील्ड</strong> त्याच्या जुळणाऱ्या <strong>सेन्सर टॅग</strong>शी जोडते, प्लांट स्तरावर कॉन्फिगर केले जाते. एकदा तयार करा — आणि ते <strong>अनेक प्लांटमध्ये पुन्हा वापरण्यायोग्य</strong> आहे.',
          voice: 'यासाठी एक सेटअप लागतो, जो फक्त एकदाच केला जातो. तुम्ही एक टेम्पलेट तयार करता जे सिस्टमला सांगते की तुमची लॉगबुक कशी मांडलेली आहे — पानावरची कोणती ओळ कोणत्या सेन्सर टॅगशी जुळते. हे त्या प्लांटच्या लॉगबुकशी जुळण्यासाठी प्लांट स्तरावर कॉन्फिगर केले जाते. चांगली गोष्ट म्हणजे, एकदा टेम्पलेट तयार केल्यावर, तुम्ही ते इतर प्लांटमध्येही पुन्हा वापरू शकता, म्हणून दरवेळी सुरुवातीपासून सुरू करावे लागत नाही.',
          tip: { type: 'noteLabel', text: 'टेम्पलेट प्रत्येक प्लांटच्या लॉगबुकसाठी एकदा कॉन्फिगर होते, मग पुन्हा वापरले जाते — एक-वेळचे काम.' },
        },
        {
          label: 'प्रवाह', title: 'अपलोड करा, आणि ते स्वतः भरते',
          body: 'रोज, ऑपरेटर नेहमीप्रमाणे लॉगबुकमध्ये रीडिंग नोंदवतो, मग एक <strong>फोटो अपलोड</strong> करतो. OCR प्रत्येक फील्ड वाचते आणि <strong>जुळणारे सेन्सर टॅग स्वतः भरते</strong> — पुनरावलोकन आणि सबमिट करायला तयार.',
          voice: 'टेम्पलेट सेट झाल्यावर, दैनंदिन प्रवाह यापेक्षा सोपा असू शकत नाही. ऑपरेटर नेहमीप्रमाणे लॉगबुकमध्ये रीडिंग नोंदवतो. मग तो पानाचा फोटो अपलोड करतो. ओ सी आर प्रत्येक मूल्य वाचते, तुमच्या टेम्पलेटचा वापर करून ते योग्य सेन्सर टॅगशी जुळवते, आणि सर्व काही आपोआप भरते. ऑपरेटर फक्त एक झटपट तपासणी करतो, आणि सबमिट करतो.',
        },
        {
          label: 'हे का महत्त्वाचे', title: 'कमी कागदी काम, चांगला डेटा',
          body: 'परिणाम: खूप <strong>कमी मॅन्युअल टायपिंग</strong>, म्हणून ऑपरेटर प्लांटवर जास्त आणि कागदी कामावर कमी वेळ घालवतात — आणि रीडिंग <strong>अधिक सातत्याने आणि वेळेवर</strong> नोंदवली जातात.',
          voice: 'आणि फायदा खरा आहे. खूप कमी मॅन्युअल डेटा एंट्री होते, म्हणून ऑपरेटर संख्या पुन्हा टाइप करण्याऐवजी प्लांट चालवण्यावर लक्ष देऊ शकतात. आणि हे इतके जलद असल्यामुळे, रीडिंग अधिक सातत्याने, आणि अधिक वेळेवर नोंदवली जातात — म्हणजे तुमच्या डॅशबोर्डवर स्वच्छ, अधिक विश्वसनीय डेटा. हे आहे ओ सी आर डेटा इनपुट.',
          tip: { type: 'upNextLabel', text: 'फोटो घ्या, स्वतः भरा, सबमिट करा — डेटा एंट्री सोपी झाली.' },
        },
      ],
    },
  },
};

export default lesson;
