import type { Lesson, OcrData } from '../../types';

/**
 * Module 3 · Lesson 3 — OCR Data Input.   Tag: M3.L3
 * Reworked to match the real product flow: Logbook Data Input → OCR Data Input
 * → pick Asset + Logbook Template → upload photo → Preview/Correct → Processing
 * → review & correct extracted values → Save (writes to DI sensors).
 */

const LOGBOOK_ROWS: OcrData['logbookRows'] = [
  { label: 'STP Inlet', reading: '370 KL' },
  { label: 'STP Outlet', reading: '381 KL' },
  { label: 'Horticulture', reading: '18 KL' },
  { label: 'Electric Energy', reading: '676 KWh' },
];

// As OCR first reads them — raw, with units / stray characters
const RAW_FIELDS: OcrData['fields'] = [
  { field: 'STP Inlet', dayConsumption: '370KL', parameter: '7-0' },
  { field: 'STP Outlet', dayConsumption: '381KL' },
  { field: 'Horticulture', dayConsumption: '18KL' },
  { field: 'Electric Energy', dayConsumption: '676Kwh' },
];

// After the operator cleans them up
const CLEAN_FIELDS: OcrData['fields'] = [
  { field: 'STP Inlet', dayConsumption: '370', parameter: '7' },
  { field: 'STP Outlet', dayConsumption: '381' },
  { field: 'Horticulture', dayConsumption: '18' },
  { field: 'Electric Energy', dayConsumption: '676' },
];

const upload = (highlight: OcrData['highlight']): OcrData => ({
  mode: 'upload', asset: 'CETP', template: 'Daily Flow Data Input', highlight,
});

const review = (over: Partial<OcrData>): OcrData => ({
  mode: 'review', logbookRows: LOGBOOK_ROWS, dateTime: '20/02/2026 01:27 PM', ...over,
});

const lesson: Lesson = {
  id: 'lesson-03-ocr',
  moduleId: 'module-03-data-input',
  lessonNumber: 3,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'ocr', caption: 'OCR Data Input — pick Asset & Template',
      widgetState: { ocr: upload('template') }, cursor: [{ at: 0.2, x: 25, y: 22 }, { at: 0.6, x: 75, y: 22 }] },
    { mode: 'widget', widget: 'ocr', caption: 'Upload a photo of the logbook',
      widgetState: { ocr: upload('upload') }, cursor: [{ at: 0.3, x: 50, y: 62, click: true }] },
    { mode: 'widget', widget: 'ocr', caption: 'Preview, correct orientation & process',
      widgetState: { ocr: review({ processing: true }) }, cursor: [{ at: 0.3, x: 75, y: 45 }] },
    { mode: 'widget', widget: 'ocr', caption: 'Review the extracted values',
      widgetState: { ocr: review({ fields: RAW_FIELDS, highlight: 'extracted' }) },
      cursor: [{ at: 0.3, x: 78, y: 40 }, { at: 0.7, x: 78, y: 60 }] },
    { mode: 'widget', widget: 'ocr', caption: 'Correct & Save → writes to DI sensors',
      widgetState: { ocr: review({ fields: CLEAN_FIELDS, highlight: 'save' }) },
      cursor: [{ at: 0.4, x: 88, y: 22, click: true }] },
  ],
  content: {
    en: {
      title: 'OCR <em>Data Input.</em>',
      subtitle:
        'Skip the typing — photograph your logbook, and the system reads the readings, ready for you to check and save.',
      chapter: 'Chapter Three · Data at the Source',
      steps: [
        {
          label: 'Open OCR', title: 'Open OCR Data Input',
          body: "From <strong>Logbook Data Input</strong> in the menu, open <strong>OCR Data Input</strong>. Pick the <strong>Asset</strong> and the <strong>Logbook Template</strong> — the template tells the system how your logbook is laid out, and is set up once per plant.",
          voice: "Here's a faster way to log readings — O C R Data Input. You'll find it under Logbook Data Input in the menu. Once it opens, you make two quick choices. First, the asset you're logging for — here, C E T P. And second, the logbook template. That template tells the system how your particular logbook is laid out — which line maps to which sensor. It's configured just once for each plant, and then reused every day.",
        },
        {
          label: 'Upload', title: 'Upload a photo of the page',
          body: "Once you've recorded readings in the logbook, <strong>drag a photo in</strong> or <strong>Browse</strong> to upload it. It accepts <strong>JPG, PNG or JPEG</strong>, up to 100MB — a normal phone photo is fine.",
          voice: "Next, the part that saves all the time. After you've filled in the paper logbook, you simply upload a photo of the page. Drag the file straight in, or browse for it. It takes a normal phone photo — J P G, P N G or J P E G — up to a hundred megabytes. No typing yet. Just the photo.",
        },
        {
          label: 'Process', title: 'Preview, then let it process',
          body: "A <strong>Preview & Correct Orientation</strong> step lets you make sure the page is the right way up. Confirm, and the system <strong>processes the image</strong> — reading the handwriting off the page.",
          voice: "When the photo lands, you get a quick preview, where you can correct the orientation if the page is sideways or upside down. Once it looks right, you confirm, and the system goes to work. It processes the image, reading the handwritten numbers straight off the page. This only takes a few seconds.",
        },
        {
          label: 'Review', title: 'Review the extracted values',
          body: "The system lays the <strong>uploaded image</strong> beside the <strong>extracted data</strong>, field by field. OCR isn't perfect — it might read <em>“370KL”</em> or <em>“7-0”</em>. Every value is <strong>editable</strong>, so you check it against the photo and fix anything that's off.",
          voice: "Now the clever part. The system shows you the original image right next to the data it extracted, field by field — S T P inlet, S T P outlet, horticulture, electric energy. Now, O C R isn't perfect. It might pull in the unit, like three seventy K L, or misread a digit. So every extracted value is fully editable. You glance from the photo to the field, and fix anything that doesn't look right. You're always in control — the system reads, but you confirm.",
          tip: { type: 'rememberLabel', text: 'OCR drafts the values; you verify and correct them against the photo before saving. Always give them a quick check.' },
        },
        {
          label: 'Save', title: 'Save — straight into your sensors',
          body: "Once the values look right, set the <strong>Date & Time</strong> and hit <strong>Save</strong>. The readings are written straight into the matching <strong>Data Input sensors</strong> — exactly as if you'd typed them, but in a fraction of the time.",
          voice: "Once everything checks out, you set the date and time for the reading, and hit Save. That's it. The values are written straight into the matching Data Input sensors — the very same ones we filled in by hand earlier — and you'll see a confirmation that the entries were saved. So you get all the accuracy of manual entry, with almost none of the typing. That's O C R Data Input.",
          tip: { type: 'upNextLabel', text: 'Photograph, check, save — the logbook practically enters itself.' },
        },
      ],
    },
    hi: {
      title: 'OCR <em>डेटा इनपुट।</em>',
      subtitle:
        'टाइपिंग छोड़ें — अपने लॉगबुक की फ़ोटो लें, सिस्टम रीडिंग्स पढ़ लेता है, जिन्हें आप जाँचकर सहेज सकते हैं।',
      chapter: 'अध्याय तीन · स्रोत पर डेटा',
      steps: [
        {
          label: 'OCR खोलें', title: 'OCR डेटा इनपुट खोलें',
          body: 'मेन्यू में <strong>Logbook Data Input</strong> से, <strong>OCR Data Input</strong> खोलें। <strong>Asset</strong> और <strong>Logbook Template</strong> चुनें — टेम्पलेट सिस्टम को बताता है कि आपकी लॉगबुक कैसी है, और हर प्लांट के लिए एक बार सेट होता है।',
          voice: 'रीडिंग दर्ज करने का एक तेज़ तरीका — ओ सी आर डेटा इनपुट। यह मेन्यू में लॉगबुक डेटा इनपुट के अंदर मिलेगा। खुलते ही, आप दो त्वरित चुनाव करते हैं। पहला, जिस एसेट के लिए दर्ज कर रहे हैं — यहाँ, सी ई टी पी। और दूसरा, लॉगबुक टेम्पलेट। वह टेम्पलेट सिस्टम को बताता है कि आपकी ख़ास लॉगबुक कैसी है — कौन सी लाइन किस सेंसर से जुड़ती है। यह हर प्लांट के लिए बस एक बार कॉन्फ़िगर होता है, फिर रोज़ इस्तेमाल होता है।',
        },
        {
          label: 'अपलोड', title: 'पेज की फ़ोटो अपलोड करें',
          body: 'लॉगबुक में रीडिंग दर्ज करने के बाद, एक <strong>फ़ोटो खींचकर डालें</strong> या <strong>Browse</strong> करके अपलोड करें। यह <strong>JPG, PNG या JPEG</strong> लेता है, 100MB तक — एक सामान्य फ़ोन फ़ोटो ठीक है।',
          voice: 'अगला, वह हिस्सा जो सारा समय बचाता है। कागज़ी लॉगबुक भरने के बाद, आप बस पेज की एक फ़ोटो अपलोड करते हैं। फ़ाइल को सीधे खींचकर डालें, या ब्राउज़ करें। यह एक सामान्य फ़ोन फ़ोटो लेता है — जे पी जी, पी एन जी या जे पी ई जी — सौ मेगाबाइट तक। अभी तक कोई टाइपिंग नहीं। बस फ़ोटो।',
        },
        {
          label: 'प्रोसेस', title: 'पूर्वावलोकन करें, फिर प्रोसेस होने दें',
          body: 'एक <strong>Preview & Correct Orientation</strong> चरण आपको पक्का करने देता है कि पेज सही दिशा में है। पुष्टि करें, और सिस्टम <strong>छवि को प्रोसेस</strong> करता है — पेज से लिखावट पढ़ता है।',
          voice: 'फ़ोटो आते ही, आपको एक त्वरित पूर्वावलोकन मिलता है, जहाँ पेज टेढ़ा या उल्टा होने पर आप दिशा सही कर सकते हैं। सही दिखने पर, आप पुष्टि करते हैं, और सिस्टम काम पर लग जाता है। यह छवि को प्रोसेस करता है, पेज से सीधे हस्तलिखित संख्याएँ पढ़ता है। इसमें बस कुछ सेकंड लगते हैं।',
        },
        {
          label: 'समीक्षा', title: 'निकाले गए मानों की समीक्षा करें',
          body: 'सिस्टम <strong>अपलोड की गई छवि</strong> को <strong>निकाले गए डेटा</strong> के बगल में, फ़ील्ड-दर-फ़ील्ड रखता है। OCR सटीक नहीं — यह <em>“370KL”</em> या <em>“7-0”</em> पढ़ सकता है। हर मान <strong>संपादन योग्य</strong> है, तो आप फ़ोटो से मिलाकर जो गलत हो उसे ठीक करें।',
          voice: 'अब चतुर हिस्सा। सिस्टम आपको मूल छवि उस डेटा के ठीक बगल में दिखाता है जो उसने निकाला, फ़ील्ड-दर-फ़ील्ड — एस टी पी इनलेट, एस टी पी आउटलेट, हॉर्टिकल्चर, इलेक्ट्रिक एनर्जी। अब, ओ सी आर सटीक नहीं है। यह इकाई खींच सकता है, जैसे तीन सौ सत्तर के एल, या कोई अंक गलत पढ़ सकता है। तो हर निकाला गया मान पूरी तरह संपादन योग्य है। आप फ़ोटो से फ़ील्ड पर नज़र डालते हैं, और जो ठीक न दिखे उसे सुधारते हैं। नियंत्रण हमेशा आपके पास — सिस्टम पढ़ता है, पर पुष्टि आप करते हैं।',
          tip: { type: 'rememberLabel', text: 'OCR मानों का मसौदा बनाता है; सहेजने से पहले आप उन्हें फ़ोटो से मिलाकर सत्यापित और सुधारते हैं। हमेशा एक त्वरित जाँच करें।' },
        },
        {
          label: 'सहेजें', title: 'सहेजें — सीधे आपके सेंसर में',
          body: 'मान सही दिखने पर, <strong>Date & Time</strong> सेट करें और <strong>Save</strong> दबाएँ। रीडिंग्स सीधे मिलते <strong>Data Input सेंसर</strong> में लिखी जाती हैं — ठीक वैसे जैसे आपने टाइप किया हो, पर बहुत कम समय में।',
          voice: 'सब ठीक होने पर, आप रीडिंग के लिए तारीख़ और समय सेट करते हैं, और सेव दबाते हैं। बस। मान सीधे मिलते डेटा इनपुट सेंसर में लिखे जाते हैं — वही सेंसर जो हमने पहले हाथ से भरे थे — और आपको पुष्टि दिखेगी कि एंट्रियाँ सहेज ली गईं। तो आपको मैनुअल एंट्री की पूरी सटीकता मिलती है, लगभग बिना किसी टाइपिंग के। यह है ओ सी आर डेटा इनपुट।',
          tip: { type: 'upNextLabel', text: 'फ़ोटो लें, जाँचें, सहेजें — लॉगबुक लगभग खुद ही दर्ज हो जाती है।' },
        },
      ],
    },
    ta: {
      title: 'OCR <em>டேட்டா இன்புட்.</em>',
      subtitle:
        'தட்டச்சை விடுங்கள் — உங்கள் லாக்புக்கைப் படமெடுங்கள், சிஸ்டம் அளவீடுகளைப் படிக்கிறது, நீங்கள் சரிபார்த்து சேமிக்கத் தயார்.',
      chapter: 'அத்தியாயம் மூன்று · மூலத்தில் தரவு',
      steps: [
        {
          label: 'OCR திற', title: 'OCR டேட்டா இன்புட்டைத் திற',
          body: 'மெனுவில் <strong>Logbook Data Input</strong>-இலிருந்து, <strong>OCR Data Input</strong>-ஐத் திறக்கவும். <strong>Asset</strong> மற்றும் <strong>Logbook Template</strong>-ஐத் தேர்வு செய்யவும் — டெம்ப்ளேட் உங்கள் லாக்புக் எப்படி அமைக்கப்பட்டுள்ளது என்பதைச் சொல்கிறது, ஒவ்வொரு ஆலைக்கும் ஒருமுறை அமைக்கப்படுகிறது.',
          voice: 'அளவீடுகளைப் பதிவு செய்ய ஒரு வேகமான வழி — ஓ சி ஆர் டேட்டா இன்புட். மெனுவில் லாக்புக் டேட்டா இன்புட்டுக்குள் இதைக் காணலாம். திறந்தவுடன், இரண்டு விரைவான தேர்வுகளைச் செய்கிறீர்கள். முதலில், நீங்கள் பதிவு செய்யும் சொத்து — இங்கே, சி இ டி பி. இரண்டாவது, லாக்புக் டெம்ப்ளேட். அந்த டெம்ப்ளேட் உங்கள் குறிப்பிட்ட லாக்புக் எப்படி அமைக்கப்பட்டுள்ளது என்பதைச் சொல்கிறது — எந்த வரி எந்த சென்சாருடன் இணைகிறது. இது ஒவ்வொரு ஆலைக்கும் ஒருமுறை மட்டுமே அமைக்கப்பட்டு, பின் தினமும் பயன்படுத்தப்படுகிறது.',
        },
        {
          label: 'பதிவேற்று', title: 'பக்கத்தின் புகைப்படத்தைப் பதிவேற்று',
          body: 'லாக்புக்கில் அளவீடுகளைப் பதிவு செய்த பிறகு, ஒரு <strong>புகைப்படத்தை இழுத்து விடுங்கள்</strong> அல்லது <strong>Browse</strong> செய்து பதிவேற்றுங்கள். இது <strong>JPG, PNG அல்லது JPEG</strong> ஏற்கிறது, 100MB வரை — சாதாரண ஃபோன் புகைப்படம் போதும்.',
          voice: 'அடுத்து, எல்லா நேரத்தையும் சேமிக்கும் பகுதி. காகித லாக்புக்கை நிரப்பிய பிறகு, பக்கத்தின் ஒரு புகைப்படத்தைப் பதிவேற்றுகிறீர்கள். கோப்பை நேராக இழுத்து விடுங்கள், அல்லது உலாவுங்கள். இது சாதாரண ஃபோன் புகைப்படத்தை ஏற்கிறது — ஜே பி ஜி, பி என் ஜி அல்லது ஜே பி இ ஜி — நூறு மெகாபைட் வரை. இன்னும் தட்டச்சு இல்லை. புகைப்படம் மட்டும்.',
        },
        {
          label: 'செயலாக்கம்', title: 'முன்னோட்டம், பின் செயலாக்க விடுங்கள்',
          body: 'ஒரு <strong>Preview & Correct Orientation</strong> படி பக்கம் சரியான திசையில் உள்ளதா எனப் பார்க்க உதவுகிறது. உறுதிப்படுத்துங்கள், சிஸ்டம் <strong>படத்தைச் செயலாக்குகிறது</strong> — பக்கத்திலிருந்து கையெழுத்தைப் படிக்கிறது.',
          voice: 'புகைப்படம் வந்ததும், ஒரு விரைவான முன்னோட்டம் கிடைக்கிறது, பக்கம் பக்கவாட்டாகவோ தலைகீழாகவோ இருந்தால் திசையைச் சரிசெய்யலாம். சரியாகத் தோன்றியதும், உறுதிப்படுத்துகிறீர்கள், சிஸ்டம் வேலையில் இறங்குகிறது. படத்தைச் செயலாக்கி, பக்கத்திலிருந்து நேராக கையெழுத்து எண்களைப் படிக்கிறது. இதற்கு சில வினாடிகள் மட்டுமே ஆகும்.',
        },
        {
          label: 'மதிப்பாய்வு', title: 'பிரித்தெடுத்த மதிப்புகளை மதிப்பாய்வு செய்',
          body: 'சிஸ்டம் <strong>பதிவேற்றிய படத்தை</strong> <strong>பிரித்தெடுத்த தரவுக்கு</strong> அருகில், புலம் புலமாக வைக்கிறது. OCR சரியானதல்ல — அது <em>“370KL”</em> அல்லது <em>“7-0”</em> எனப் படிக்கலாம். ஒவ்வொரு மதிப்பும் <strong>திருத்தக்கூடியது</strong>, எனவே புகைப்படத்துடன் ஒப்பிட்டு தவறானதைச் சரிசெய்யுங்கள்.',
          voice: 'இப்போது புத்திசாலித்தனமான பகுதி. சிஸ்டம் மூலப் படத்தை அது பிரித்தெடுத்த தரவுக்கு அருகிலேயே காட்டுகிறது, புலம் புலமாக — எஸ் டி பி இன்லெட், எஸ் டி பி அவுட்லெட், ஹார்டிகல்ச்சர், எலக்ட்ரிக் எனர்ஜி. இப்போது, ஓ சி ஆர் சரியானதல்ல. அலகை இழுக்கலாம், மூன்று எழுபது கே எல் போல, அல்லது ஒரு இலக்கத்தைத் தவறாகப் படிக்கலாம். எனவே ஒவ்வொரு பிரித்தெடுத்த மதிப்பும் முழுமையாகத் திருத்தக்கூடியது. புகைப்படத்திலிருந்து புலத்துக்குப் பார்த்து, சரியாகத் தோன்றாததைச் சரிசெய்கிறீர்கள். கட்டுப்பாடு எப்போதும் உங்களிடம் — சிஸ்டம் படிக்கிறது, ஆனால் நீங்கள் உறுதிப்படுத்துகிறீர்கள்.',
          tip: { type: 'rememberLabel', text: 'OCR மதிப்புகளை வரைவாக்குகிறது; சேமிப்பதற்கு முன் புகைப்படத்துடன் ஒப்பிட்டு சரிபார்த்துத் திருத்துகிறீர்கள். எப்போதும் ஒரு விரைவான சோதனை செய்யுங்கள்.' },
        },
        {
          label: 'சேமி', title: 'சேமி — நேராக உங்கள் சென்சார்களுக்கு',
          body: 'மதிப்புகள் சரியாகத் தோன்றியதும், <strong>Date & Time</strong> அமைத்து <strong>Save</strong> அழுத்துங்கள். அளவீடுகள் நேராக பொருந்தும் <strong>Data Input சென்சார்களில்</strong> எழுதப்படுகின்றன — நீங்கள் தட்டச்சு செய்தது போலவே, ஆனால் மிகக் குறைந்த நேரத்தில்.',
          voice: 'எல்லாம் சரியாக இருந்ததும், அளவீட்டுக்கான தேதி மற்றும் நேரத்தை அமைத்து, சேமி அழுத்துகிறீர்கள். அவ்வளவுதான். மதிப்புகள் நேராக பொருந்தும் டேட்டா இன்புட் சென்சார்களில் எழுதப்படுகின்றன — நாம் முன்பு கையால் நிரப்பிய அதே சென்சார்கள் — மற்றும் பதிவுகள் சேமிக்கப்பட்டதற்கான உறுதிப்படுத்தலைக் காண்பீர்கள். எனவே கைமுறை உள்ளீட்டின் முழு துல்லியமும் கிட்டத்தட்ட எந்தத் தட்டச்சும் இல்லாமல் கிடைக்கிறது. அதுதான் ஓ சி ஆர் டேட்டா இன்புட்.',
          tip: { type: 'upNextLabel', text: 'படமெடு, சரிபார், சேமி — லாக்புக் கிட்டத்தட்ட தானே பதிவாகிறது.' },
        },
      ],
    },
    mr: {
      title: 'OCR <em>डेटा इनपुट.</em>',
      subtitle:
        'टायपिंग सोडा — तुमच्या लॉगबुकचा फोटो घ्या, सिस्टम रीडिंग वाचते, जी तुम्ही तपासून सेव्ह करू शकता.',
      chapter: 'अध्याय तीन · स्रोतावर डेटा',
      steps: [
        {
          label: 'OCR उघडा', title: 'OCR डेटा इनपुट उघडा',
          body: 'मेनूमधील <strong>Logbook Data Input</strong>मधून, <strong>OCR Data Input</strong> उघडा. <strong>Asset</strong> आणि <strong>Logbook Template</strong> निवडा — टेम्पलेट सिस्टमला सांगते की तुमची लॉगबुक कशी मांडलेली आहे, आणि प्रत्येक प्लांटसाठी एकदा सेट होते.',
          voice: 'रीडिंग नोंदवण्याचा एक जलद मार्ग — ओ सी आर डेटा इनपुट. हे मेनूमध्ये लॉगबुक डेटा इनपुटच्या आत मिळेल. उघडल्यावर, तुम्ही दोन झटपट निवडी करता. पहिली, ज्या असेटसाठी नोंदवत आहात ती — इथे, सी ई टी पी. आणि दुसरी, लॉगबुक टेम्पलेट. ते टेम्पलेट सिस्टमला सांगते की तुमची विशिष्ट लॉगबुक कशी मांडलेली आहे — कोणती ओळ कोणत्या सेन्सरशी जुळते. हे प्रत्येक प्लांटसाठी फक्त एकदा कॉन्फिगर होते, मग रोज वापरले जाते.',
        },
        {
          label: 'अपलोड', title: 'पानाचा फोटो अपलोड करा',
          body: 'लॉगबुकमध्ये रीडिंग नोंदवल्यानंतर, एक <strong>फोटो ओढून टाका</strong> किंवा <strong>Browse</strong> करून अपलोड करा. हे <strong>JPG, PNG किंवा JPEG</strong> घेते, 100MB पर्यंत — सामान्य फोन फोटो चालतो.',
          voice: 'पुढे, सर्व वेळ वाचवणारा भाग. कागदी लॉगबुक भरल्यानंतर, तुम्ही फक्त पानाचा एक फोटो अपलोड करता. फाइल थेट ओढून टाका, किंवा ब्राउझ करा. हे सामान्य फोन फोटो घेते — जे पी जी, पी एन जी किंवा जे पी ई जी — शंभर मेगाबाइटपर्यंत. अजून टायपिंग नाही. फक्त फोटो.',
        },
        {
          label: 'प्रोसेस', title: 'पूर्वावलोकन करा, मग प्रोसेस होऊ द्या',
          body: 'एक <strong>Preview & Correct Orientation</strong> टप्पा तुम्हाला पान योग्य दिशेने आहे याची खात्री करू देतो. पुष्टी करा, आणि सिस्टम <strong>प्रतिमा प्रोसेस</strong> करते — पानावरून हस्ताक्षर वाचते.',
          voice: 'फोटो आल्यावर, तुम्हाला एक झटपट पूर्वावलोकन मिळते, जिथे पान तिरके किंवा उलटे असल्यास तुम्ही दिशा दुरुस्त करू शकता. योग्य दिसल्यावर, तुम्ही पुष्टी करता, आणि सिस्टम कामाला लागते. ती प्रतिमा प्रोसेस करते, पानावरून थेट हस्तलिखित संख्या वाचते. याला फक्त काही सेकंद लागतात.',
        },
        {
          label: 'पुनरावलोकन', title: 'काढलेल्या मूल्यांचे पुनरावलोकन करा',
          body: 'सिस्टम <strong>अपलोड केलेली प्रतिमा</strong> <strong>काढलेल्या डेटा</strong>शेजारी, फील्ड-दर-फील्ड ठेवते. OCR अचूक नाही — ते <em>“370KL”</em> किंवा <em>“7-0”</em> वाचू शकते. प्रत्येक मूल्य <strong>संपादन करण्यायोग्य</strong> आहे, म्हणून फोटोशी ताडून जे चुकीचे ते दुरुस्त करा.',
          voice: 'आता हुशार भाग. सिस्टम तुम्हाला मूळ प्रतिमा तिने काढलेल्या डेटाशेजारीच दाखवते, फील्ड-दर-फील्ड — एस टी पी इनलेट, एस टी पी आउटलेट, हॉर्टिकल्चर, इलेक्ट्रिक एनर्जी. आता, ओ सी आर अचूक नाही. ते एकक ओढू शकते, जसे तीनशे सत्तर के एल, किंवा एखादा अंक चुकीचा वाचू शकते. म्हणून प्रत्येक काढलेले मूल्य पूर्णपणे संपादन करण्यायोग्य आहे. तुम्ही फोटोवरून फील्डकडे नजर टाकता, आणि जे योग्य दिसत नाही ते दुरुस्त करता. नियंत्रण नेहमी तुमच्याकडे — सिस्टम वाचते, पण पुष्टी तुम्ही करता.',
          tip: { type: 'rememberLabel', text: 'OCR मूल्यांचा मसुदा तयार करते; सेव्ह करण्याआधी तुम्ही ती फोटोशी ताडून पडताळता आणि दुरुस्त करता. नेहमी एक झटपट तपासणी करा.' },
        },
        {
          label: 'सेव्ह', title: 'सेव्ह — थेट तुमच्या सेन्सरमध्ये',
          body: 'मूल्ये योग्य दिसल्यावर, <strong>Date & Time</strong> सेट करा आणि <strong>Save</strong> दाबा. रीडिंग थेट जुळणाऱ्या <strong>Data Input सेन्सरमध्ये</strong> लिहिली जातात — अगदी तुम्ही टाइप केल्यासारखी, पण खूप कमी वेळात.',
          voice: 'सर्व ठीक झाल्यावर, तुम्ही रीडिंगसाठी तारीख आणि वेळ सेट करता, आणि सेव्ह दाबता. एवढेच. मूल्ये थेट जुळणाऱ्या डेटा इनपुट सेन्सरमध्ये लिहिली जातात — तेच सेन्सर जे आपण आधी हाताने भरले होते — आणि नोंदी सेव्ह झाल्याची पुष्टी तुम्हाला दिसेल. म्हणून तुम्हाला मॅन्युअल एंट्रीची पूर्ण अचूकता मिळते, जवळपास कोणत्याही टायपिंगशिवाय. हे आहे ओ सी आर डेटा इनपुट.',
          tip: { type: 'upNextLabel', text: 'फोटो घ्या, तपासा, सेव्ह करा — लॉगबुक जवळपास स्वतःच नोंदते.' },
        },
      ],
    },
  },
};

export default lesson;
