import type { Lesson } from '../../types';

/**
 * Module 3 · Configure — OCR logbooks.   Tag: M3.L3·C  (internal only)
 * The "how to build it" track, from the screen recording: create a logbook
 * template → configure it on a plant (annotate cells for OCR) → map data-input
 * sensor tags to those cells → on the plant, upload a logbook photo → OCR
 * extracts the values → cross-check → set date & time → Save.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-03-ocr-config`;

const lesson: Lesson = {
  id: 'lesson-03-ocr-config',
  moduleId: 'module-03-data-input',
  lessonNumber: 3,
  estimatedMinutes: 5,
  screenshots: {
    templates: `${BASE}/templates.jpg`,
    configure: `${BASE}/configure.jpg`,
    annotate: `${BASE}/annotate.jpg`,
    mapping: `${BASE}/mapping.jpg`,
    upload: `${BASE}/upload.jpg`,
    extracted: `${BASE}/extracted.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'templates', caption: 'Create a logbook template', spotlight: { top: '4%', left: '87%', width: '12%', height: '9%' } },
    { mode: 'detail', screenshot: 'configure', caption: 'Configure it on a plant', spotlight: { top: '9%', left: '1%', width: '98%', height: '11%' } },
    { mode: 'detail', screenshot: 'annotate', caption: 'Annotate the OCR cells', spotlight: { top: '29%', left: '33%', width: '36%', height: '43%' } },
    { mode: 'detail', screenshot: 'mapping', caption: 'Map sensor tags to cells', spotlight: { top: '22%', left: '52%', width: '46%', height: '62%' } },
    { mode: 'detail', screenshot: 'upload', caption: 'On the plant: upload a photo', spotlight: { top: '13%', left: '1%', width: '98%', height: '13%' } },
    { mode: 'detail', screenshot: 'extracted', caption: 'OCR extracts — cross-check', spotlight: { top: '24%', left: '52%', width: '46%', height: '45%' } },
    { mode: 'detail', screenshot: 'extracted', caption: 'Date & time → Save', spotlight: { top: '19%', left: '80%', width: '19%', height: '9%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>OCR <em>Logbooks.</em>',
      subtitle: 'The builder’s view — map a paper logbook to sensor tags once, then let OCR read the handwriting.',
      chapter: 'Build Track · Data Input',
      steps: [
        {
          label: 'Template', title: 'Create a logbook template',
          body: 'Under <strong>Templates → Logbook Templates</strong>, hit <strong>Add Template</strong>. A logbook template represents one paper logbook layout and, like everything else, is reusable.',
          voice: "OCR data input lets operators photograph a paper logbook and have the platform read it. To set that up, we start with a logbook template. Go to Templates, then Logbook Templates — this lists every logbook layout we've defined. Click Add Template to make a new one. The template captures the structure of a particular paper logbook, and once built it can be reused wherever that same logbook is used.",
        },
        {
          label: 'Configure', title: 'Configure it on a plant',
          body: 'Open <strong>Log Books → Configure Logbook</strong> and pick your <strong>logbook template</strong>. This is where you teach the platform how to read that logbook for a plant, against a sample scan in the <strong>Document Preview</strong>.',
          voice: "Next, we attach the template to a plant and teach the system how to read it. Go to Log Books and Configure Logbook, then choose the logbook template you just made. A document preview opens — this is where a sample scan of the logbook is loaded, and where you'll mark up exactly which parts of the page the OCR should read. At this point there's no extracted data yet; we have to define the regions.",
        },
        {
          label: 'Annotate', title: 'Annotate the OCR cells',
          body: 'Use the <strong>Annotate</strong> tool to draw a box around each region of the logbook you want read. Hit <strong>Analyze</strong> and the platform runs <strong>OCR</strong> on that area, extracting the cells into a table.',
          voice: "Now the core step. Using the annotate tool, you draw a box around each part of the logbook you care about — a block of readings, a column of values. For each region you hit Analyze, and the platform runs O C R on just that area, pulling the handwritten cells out into a structured table. You're essentially showing the system where the data lives on the page, so it knows what to read every time a similar logbook comes in.",
        },
        {
          label: 'Mapping', title: 'Map sensor tags to the cells',
          body: 'In <strong>Extracted &amp; Custom Data</strong>, assign a <strong>data-input sensor tag</strong> to each OCR-identified cell — STP Inlet, STP Outlet, Horticulture and so on each get their <strong>DI Sensor</strong>. <strong>Save</strong>. Now the platform knows which reading feeds which sensor.',
          voice: "This is what makes the OCR meaningful. On the right, in Extracted and Custom Data, every cell the O C R found is listed — and beside each one is a sensor dropdown. You map each cell to a data-input sensor tag: this column is the S T P inlet reading, that one is the S T P outlet, this is horticulture, and so on. Each gets its D I sensor. Save, and the link is permanent: from now on the platform knows exactly which number on the page feeds which sensor. The template is configured.",
        },
        {
          label: 'Upload', title: 'On the plant: upload a photo',
          body: 'Now the day-to-day use. On the plant, open <strong>OCR Data Input</strong>, pick the <strong>asset</strong> and <strong>logbook template</strong>, and <strong>upload a photo</strong> of the filled logbook. A <strong>Preview &amp; Correct Orientation</strong> step lets you straighten it before processing.',
          voice: "With the template configured, here's how it's used day to day. On the plant, open O C R Data Input. Pick the asset and the logbook template — here, Daily Flow Data Input. Then drag in or browse for a photo of the filled-out paper logbook. Before processing, a preview lets you correct the orientation, so a slightly rotated phone photo still reads correctly. Then the platform processes the image.",
        },
        {
          label: 'Extract', title: 'OCR extracts — cross-check',
          body: 'The platform reads the photo and shows <strong>Extracted Data</strong> beside the image: STP Inlet 370, STP Outlet 381, and so on. <strong>Cross-check</strong> each value against the scan and correct any the OCR misread — the fields are editable.',
          voice: "A moment later: image processed and data extracted successfully. The uploaded and processed images sit on the left, and on the right is the extracted data — S T P inlet three-seventy, S T P outlet three-eighty-one, horticulture eighteen, and so on, each landing in the sensor it was mapped to. This is the cross-check step, and it matters: O C R on handwriting isn't perfect, so you eyeball each value against the scan and fix anything it misread. The fields are fully editable, so a stray digit is a quick correction.",
        },
        {
          label: 'Save', title: 'Set the date & time, then Save',
          body: 'Finally, set the <strong>Date &amp; Time</strong> the readings belong to, and hit <strong>Save</strong>. Every value lands on its mapped sensor at that timestamp — a whole paper logbook digitised in seconds.',
          voice: "The last step is the timestamp. Set the date and time these readings were actually taken — it defaults to now, but you'd back-date it to match the logbook entry. Then hit Save. Every cross-checked value is written to its mapped sensor at that exact time, just as if an operator had typed each one by hand. That's the whole point of O C R configuration: you map a paper logbook to sensors once, and from then on a single photo digitises an entire page in seconds, validated by a quick human check.",
          tip: { type: 'rememberLabel', text: 'Logbook template → Configure on plant (annotate cells → map DI sensor tags) → upload photo → OCR extracts → cross-check → date & time → Save.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br>OCR <em>लॉगबुक।</em>',
      subtitle: 'बिल्डर का दृश्य — एक बार कागज़ी लॉगबुक को सेंसर टैग से मैप करें, फिर OCR को लिखावट पढ़ने दें।',
      chapter: 'बिल्ड ट्रैक · डेटा इनपुट',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक लॉगबुक टेम्पलेट बनाएँ',
          body: '<strong>Templates → Logbook Templates</strong> में <strong>Add Template</strong> दबाएँ। एक लॉगबुक टेम्पलेट एक कागज़ी लॉगबुक लेआउट को दर्शाता है और, बाक़ी सब की तरह, पुन: प्रयोज्य है।',
          voice: "OCR डेटा इनपुट ऑपरेटर को कागज़ी लॉगबुक की फ़ोटो खींचकर प्लेटफ़ॉर्म से पढ़वाने देता है। इसे सेट करने के लिए, हम एक लॉगबुक टेम्पलेट से शुरू करते हैं। Templates में जाएँ, फिर Logbook Templates — यह हर परिभाषित लॉगबुक लेआउट सूचीबद्ध करता है। नया बनाने के लिए Add Template क्लिक करें। टेम्पलेट एक ख़ास कागज़ी लॉगबुक की संरचना पकड़ता है, और एक बार बन जाने पर जहाँ भी वही लॉगबुक उपयोग हो वहाँ पुन: प्रयोग होता है।",
        },
        {
          label: 'कॉन्फ़िगर', title: 'इसे एक प्लांट पर कॉन्फ़िगर करें',
          body: '<strong>Log Books → Configure Logbook</strong> खोलें और अपना <strong>लॉगबुक टेम्पलेट</strong> चुनें। यहीं आप प्लेटफ़ॉर्म को सिखाते हैं कि उस लॉगबुक को कैसे पढ़े, <strong>Document Preview</strong> में एक नमूना स्कैन के विरुद्ध।',
          voice: "आगे, हम टेम्पलेट को एक प्लांट से जोड़ते हैं और सिस्टम को इसे पढ़ना सिखाते हैं। Log Books और Configure Logbook में जाएँ, फिर अभी बनाया लॉगबुक टेम्पलेट चुनें। एक डॉक्यूमेंट प्रीव्यू खुलता है — यहीं लॉगबुक का एक नमूना स्कैन लोड होता है, और यहीं आप ठीक-ठीक चिह्नित करेंगे कि पेज के कौन से हिस्से OCR को पढ़ने चाहिए। इस बिंदु पर अभी कोई निकाला डेटा नहीं है; हमें क्षेत्र परिभाषित करने होंगे।",
        },
        {
          label: 'एनोटेट', title: 'OCR सेल एनोटेट करें',
          body: '<strong>Annotate</strong> टूल से लॉगबुक के हर उस क्षेत्र के चारों ओर बॉक्स बनाएँ जिसे पढ़ना है। <strong>Analyze</strong> दबाएँ और प्लेटफ़ॉर्म उस क्षेत्र पर <strong>OCR</strong> चलाकर सेल को एक टेबल में निकालता है।',
          voice: "अब मुख्य चरण। एनोटेट टूल से, आप लॉगबुक के हर उस हिस्से के चारों ओर बॉक्स बनाते हैं जो आपको चाहिए — रीडिंग का एक ब्लॉक, मानों का एक कॉलम। हर क्षेत्र के लिए आप Analyze दबाते हैं, और प्लेटफ़ॉर्म सिर्फ़ उस क्षेत्र पर OCR चलाता है, हस्तलिखित सेल को एक संरचित टेबल में निकालता है। आप मूलतः सिस्टम को दिखा रहे हैं कि पेज पर डेटा कहाँ है, ताकि हर बार समान लॉगबुक आने पर वह जाने कि क्या पढ़ना है।",
        },
        {
          label: 'मैपिंग', title: 'सेल को सेंसर टैग से मैप करें',
          body: '<strong>Extracted &amp; Custom Data</strong> में हर OCR-पहचाने सेल को एक <strong>डेटा-इनपुट सेंसर टैग</strong> सौंपें — STP Inlet, STP Outlet, Horticulture आदि को अपना <strong>DI Sensor</strong> मिलता है। <strong>Save</strong>। अब प्लेटफ़ॉर्म जानता है कौन सी रीडिंग किस सेंसर को जाती है।',
          voice: "यही OCR को सार्थक बनाता है। दाईं ओर, Extracted and Custom Data में, OCR को मिला हर सेल सूचीबद्ध है — और हर एक के बगल एक सेंसर ड्रॉपडाउन। आप हर सेल को एक डेटा-इनपुट सेंसर टैग से मैप करते हैं: यह कॉलम एस टी पी इनलेट रीडिंग है, वह एस टी पी आउटलेट, यह हॉर्टिकल्चर, इत्यादि। हर को अपना डी आई सेंसर मिलता है। सेव करें, और लिंक स्थायी है: अब से प्लेटफ़ॉर्म ठीक जानता है कि पेज पर कौन सी संख्या किस सेंसर को जाती है। टेम्पलेट कॉन्फ़िगर हो गया।",
        },
        {
          label: 'अपलोड', title: 'प्लांट पर: एक फ़ोटो अपलोड करें',
          body: 'अब रोज़मर्रा उपयोग। प्लांट पर, <strong>OCR Data Input</strong> खोलें, <strong>एसेट</strong> और <strong>लॉगबुक टेम्पलेट</strong> चुनें, और भरी लॉगबुक की <strong>फ़ोटो अपलोड</strong> करें। एक <strong>Preview &amp; Correct Orientation</strong> चरण इसे प्रोसेस से पहले सीधा करने देता है।',
          voice: "टेम्पलेट कॉन्फ़िगर होने पर, यह रोज़ कैसे उपयोग होता है। प्लांट पर, O C R Data Input खोलें। एसेट और लॉगबुक टेम्पलेट चुनें — यहाँ Daily Flow Data Input। फिर भरी हुई कागज़ी लॉगबुक की फ़ोटो खींचकर लाएँ या ब्राउज़ करें। प्रोसेस से पहले, एक प्रीव्यू आपको ओरिएंटेशन ठीक करने देता है, ताकि थोड़ी घुमी फ़ोन फ़ोटो भी सही पढ़े। फिर प्लेटफ़ॉर्म छवि प्रोसेस करता है।",
        },
        {
          label: 'निकालना', title: 'OCR निकालता है — क्रॉस-चेक',
          body: 'प्लेटफ़ॉर्म फ़ोटो पढ़ता है और छवि के बगल <strong>Extracted Data</strong> दिखाता है: STP Inlet 370, STP Outlet 381, इत्यादि। हर मान को स्कैन के विरुद्ध <strong>क्रॉस-चेक</strong> करें और OCR की कोई ग़लती सुधारें — फ़ील्ड संपादन योग्य हैं।',
          voice: "एक पल बाद: छवि प्रोसेस होकर डेटा सफलतापूर्वक निकाला गया। अपलोड की और प्रोसेस्ड छवियाँ बाईं ओर हैं, और दाईं ओर निकाला डेटा है — एस टी पी इनलेट तीन सौ सत्तर, एस टी पी आउटलेट तीन सौ इक्यासी, हॉर्टिकल्चर अठारह, इत्यादि, हर अपने मैप किए सेंसर में। यह क्रॉस-चेक चरण है, और यह मायने रखता है: लिखावट पर OCR सटीक नहीं होता, तो आप हर मान को स्कैन के विरुद्ध देखते हैं और जो ग़लत पढ़ा हो सुधारते हैं। फ़ील्ड पूरी तरह संपादन योग्य हैं।",
        },
        {
          label: 'सेव', title: 'तारीख़ व समय सेट करें, फिर Save',
          body: 'अंत में, वह <strong>Date &amp; Time</strong> सेट करें जिससे रीडिंग संबंधित हैं, और <strong>Save</strong> दबाएँ। हर मान उस टाइमस्टैम्प पर अपने मैप किए सेंसर पर आता है — एक पूरी कागज़ी लॉगबुक सेकंडों में डिजिटल।',
          voice: "आख़िरी चरण टाइमस्टैम्प है। वह तारीख़ और समय सेट करें जब ये रीडिंग वास्तव में ली गईं — यह अभी पर डिफ़ॉल्ट होता है, पर आप इसे लॉगबुक प्रविष्टि से मेल खाने के लिए बैक-डेट करेंगे। फिर Save दबाएँ। हर क्रॉस-चेक किया मान उसी ठीक समय पर अपने मैप किए सेंसर पर लिखा जाता है, मानो ऑपरेटर ने हर एक हाथ से टाइप किया हो। यही OCR कॉन्फ़िगरेशन का पूरा उद्देश्य है: आप एक बार कागज़ी लॉगबुक को सेंसर से मैप करते हैं, और उसके बाद एक फ़ोटो पूरे पेज को सेकंडों में डिजिटल कर देती है, एक त्वरित मानवीय जाँच से मान्य।",
          tip: { type: 'rememberLabel', text: 'लॉगबुक टेम्पलेट → प्लांट पर कॉन्फ़िगर (सेल एनोटेट → DI सेंसर टैग मैप) → फ़ोटो अपलोड → OCR निकालता है → क्रॉस-चेक → तारीख़ व समय → Save।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br>OCR <em>பதிவேடுகள்.</em>',
      subtitle: 'கட்டுநரின் பார்வை — காகிதப் பதிவேட்டை சென்சார் குறிச்சொற்களுடன் ஒருமுறை இணைத்து, பின் OCR கையெழுத்தைப் படிக்கட்டும்.',
      chapter: 'கட்டுமான தடம் · டேட்டா உள்ளீட்டு',
      steps: [
        {
          label: 'டெம்ப்ளேட்', title: 'ஒரு பதிவேடு டெம்ப்ளேட்டை உருவாக்கு',
          body: '<strong>Templates → Logbook Templates</strong>-இல் <strong>Add Template</strong> அழுத்துங்கள். ஒரு பதிவேடு டெம்ப்ளேட் ஒரு காகிதப் பதிவேடு அமைப்பைக் குறிக்கிறது, மற்றவை போல மறுபயன்படுத்தக்கூடியது.',
          voice: "OCR டேட்டா உள்ளீடு, இயக்குநர்கள் காகிதப் பதிவேட்டைப் புகைப்படம் எடுத்து தளம் படிக்க அனுமதிக்கிறது. அதை அமைக்க, ஒரு பதிவேடு டெம்ப்ளேட்டில் தொடங்குகிறோம். Templates-க்குச் சென்று Logbook Templates — இது நாம் வரையறுத்த ஒவ்வொரு பதிவேடு அமைப்பையும் பட்டியலிடுகிறது. புதியதை உருவாக்க Add Template கிளிக் செய்யுங்கள். டெம்ப்ளேட் ஒரு குறிப்பிட்ட காகிதப் பதிவேட்டின் கட்டமைப்பைப் பிடிக்கிறது, ஒருமுறை கட்டப்பட்டால் அதே பதிவேடு பயன்படும் எங்கும் மறுபயன்படுத்தலாம்.",
        },
        {
          label: 'அமைவு', title: 'ஒரு ஆலையில் அதை அமை',
          body: '<strong>Log Books → Configure Logbook</strong> திறந்து உங்கள் <strong>பதிவேடு டெம்ப்ளேட்டைத்</strong> தேர்ந்தெடு. இங்கேதான் அந்தப் பதிவேட்டை எப்படிப் படிப்பது என்று தளத்துக்குக் கற்பிக்கிறீர்கள், <strong>Document Preview</strong>-இல் ஒரு மாதிரி ஸ்கேனுக்கு எதிராக.',
          voice: "அடுத்து, டெம்ப்ளேட்டை ஒரு ஆலையுடன் இணைத்து, அதை எப்படிப் படிப்பது என்று சிஸ்டத்துக்குக் கற்பிக்கிறோம். Log Books, Configure Logbook-க்குச் சென்று, இப்போது உருவாக்கிய பதிவேடு டெம்ப்ளேட்டைத் தேர்ந்தெடு. ஒரு ஆவணப் பார்வை திறக்கிறது — இங்கே பதிவேட்டின் ஒரு மாதிரி ஸ்கேன் ஏற்றப்படுகிறது, பக்கத்தின் எந்தப் பகுதிகளை OCR படிக்க வேண்டும் என்று துல்லியமாகக் குறிப்பீர்கள். இந்த நேரத்தில் எடுக்கப்பட்ட தரவு இல்லை; நாம் பகுதிகளை வரையறுக்க வேண்டும்.",
        },
        {
          label: 'குறிப்பீடு', title: 'OCR கலங்களைக் குறிப்பிடு',
          body: '<strong>Annotate</strong> கருவியால் படிக்க வேண்டிய பதிவேட்டின் ஒவ்வொரு பகுதியையும் சுற்றி ஒரு பெட்டி வரை. <strong>Analyze</strong> அழுத்த, தளம் அந்தப் பகுதியில் <strong>OCR</strong> இயக்கி, கலங்களை ஒரு அட்டவணையாக எடுக்கிறது.',
          voice: "இப்போது மைய படி. குறிப்பீட்டுக் கருவியால், பதிவேட்டின் உங்களுக்குத் தேவையான ஒவ்வொரு பகுதியையும் சுற்றி ஒரு பெட்டி வரைகிறீர்கள் — அளவீடுகளின் ஒரு தொகுதி, மதிப்புகளின் ஒரு நெடுவரிசை. ஒவ்வொரு பகுதிக்கும் Analyze அழுத்துகிறீர்கள், தளம் அந்தப் பகுதியில் மட்டும் OCR இயக்கி, கையெழுத்துக் கலங்களை ஒரு கட்டமைக்கப்பட்ட அட்டவணையாக வெளியே எடுக்கிறது. பக்கத்தில் தரவு எங்கே உள்ளது என்று சிஸ்டத்துக்குக் காட்டுகிறீர்கள், அதே போன்ற பதிவேடு வரும்போதெல்லாம் எதைப் படிக்க வேண்டும் என்று அறிகிறது.",
        },
        {
          label: 'இணைப்பு', title: 'கலங்களுக்கு சென்சார் குறிச்சொற்களை இணை',
          body: '<strong>Extracted &amp; Custom Data</strong>-இல் OCR கண்ட ஒவ்வொரு கலத்துக்கும் ஒரு <strong>டேட்டா-உள்ளீட்டு சென்சார் குறிச்சொல்</strong> ஒதுக்கு — STP Inlet, STP Outlet, Horticulture போன்றவை ஒவ்வொன்றும் தம் <strong>DI Sensor</strong> பெறுகின்றன. <strong>Save</strong>. இப்போது எந்த அளவீடு எந்த சென்சாருக்கு என்று தளம் அறிகிறது.',
          voice: "இதுதான் OCR-ஐ அர்த்தமுள்ளதாக்குகிறது. வலதுபுறம், Extracted and Custom Data-இல், OCR கண்ட ஒவ்வொரு கலமும் பட்டியலிடப்பட்டுள்ளது — ஒவ்வொன்றுக்கும் அருகில் ஒரு சென்சார் கீழ்விரிவு. ஒவ்வொரு கலத்தையும் ஒரு டேட்டா-உள்ளீட்டு சென்சார் குறிச்சொல்லுடன் இணைக்கிறீர்கள்: இந்த நெடுவரிசை எஸ் டி பி இன்லெட் அளவீடு, அது எஸ் டி பி அவுட்லெட், இது ஹார்டிகல்ச்சர், இப்படி. ஒவ்வொன்றும் தம் டி ஐ சென்சார் பெறுகிறது. சேமி, இணைப்பு நிரந்தரம்: இனிமேல் பக்கத்தில் எந்த எண் எந்த சென்சாருக்கு என்று தளம் துல்லியமாக அறிகிறது. டெம்ப்ளேட் அமைக்கப்பட்டது.",
        },
        {
          label: 'பதிவேற்று', title: 'ஆலையில்: ஒரு புகைப்படம் பதிவேற்று',
          body: 'இப்போது அன்றாட பயன்பாடு. ஆலையில், <strong>OCR Data Input</strong> திறந்து, <strong>சொத்து</strong> மற்றும் <strong>பதிவேடு டெம்ப்ளேட்</strong> தேர்ந்து, நிரப்பிய பதிவேட்டின் <strong>புகைப்படத்தைப் பதிவேற்று</strong>. ஒரு <strong>Preview &amp; Correct Orientation</strong> படி, செயலாக்கத்துக்கு முன் அதை நேராக்க அனுமதிக்கிறது.',
          voice: "டெம்ப்ளேட் அமைக்கப்பட்டதும், அன்றாடம் இது எப்படிப் பயன்படுகிறது. ஆலையில், O C R Data Input திறக்குங்கள். சொத்தையும் பதிவேடு டெம்ப்ளேட்டையும் தேர்ந்தெடு — இங்கே Daily Flow Data Input. பின் நிரப்பப்பட்ட காகிதப் பதிவேட்டின் புகைப்படத்தை இழுத்துப்போடு அல்லது தேடு. செயலாக்கத்துக்கு முன், ஒரு பார்வை திசையமைப்பைச் சரிசெய்ய அனுமதிக்கிறது, சற்று சாய்ந்த தொலைபேசிப் புகைப்படமும் சரியாகப் படிக்கும். பின் தளம் படத்தைச் செயலாக்குகிறது.",
        },
        {
          label: 'எடுத்தல்', title: 'OCR எடுக்கிறது — குறுக்கு-சரிபார்',
          body: 'தளம் புகைப்படத்தைப் படித்து, படத்துக்கு அருகில் <strong>Extracted Data</strong> காட்டுகிறது: STP Inlet 370, STP Outlet 381, இப்படி. ஒவ்வொரு மதிப்பையும் ஸ்கேனுக்கு எதிராக <strong>குறுக்கு-சரிபார்</strong> செய்து OCR தவறாகப் படித்ததைச் சரிசெய் — புலங்கள் திருத்தக்கூடியவை.',
          voice: "ஒரு கணம் கழித்து: படம் செயலாக்கப்பட்டு தரவு வெற்றிகரமாக எடுக்கப்பட்டது. பதிவேற்றிய, செயலாக்கப்பட்ட படங்கள் இடதுபுறம், வலதுபுறம் எடுக்கப்பட்ட தரவு — எஸ் டி பி இன்லெட் முந்நூற்று எழுபது, எஸ் டி பி அவுட்லெட் முந்நூற்று எண்பத்தொன்று, ஹார்டிகல்ச்சர் பதினெட்டு, இப்படி, ஒவ்வொன்றும் அது இணைக்கப்பட்ட சென்சாரில் வந்து விழுகிறது. இது குறுக்கு-சரிபார் படி, இது முக்கியம்: கையெழுத்தில் OCR சரியாக இருக்காது, எனவே ஒவ்வொரு மதிப்பையும் ஸ்கேனுக்கு எதிராகப் பார்த்து தவறாகப் படித்ததைச் சரிசெய்கிறீர்கள். புலங்கள் முழுமையாகத் திருத்தக்கூடியவை.",
        },
        {
          label: 'சேமி', title: 'தேதி & நேரத்தை அமைத்து, பின் Save',
          body: 'இறுதியாக, அளவீடுகள் சேர்ந்த <strong>Date &amp; Time</strong>-ஐ அமைத்து, <strong>Save</strong> அழுத்து. ஒவ்வொரு மதிப்பும் அந்த நேரமுத்திரையில் தன் இணைந்த சென்சாரில் வந்து விழுகிறது — ஒரு முழுக் காகிதப் பதிவேடு விநாடிகளில் டிஜிட்டலாக்கப்படுகிறது.',
          voice: "கடைசிப் படி நேரமுத்திரை. இந்த அளவீடுகள் உண்மையில் எடுக்கப்பட்ட தேதி, நேரத்தை அமை — இது இப்போதைக்கு இயல்பாகிறது, ஆனால் பதிவேட்டு உள்ளீட்டுக்குப் பொருந்த பின்-தேதியிடுவீர்கள். பின் Save அழுத்து. குறுக்கு-சரிபார்க்கப்பட்ட ஒவ்வொரு மதிப்பும் அந்தச் சரியான நேரத்தில் தன் இணைந்த சென்சாரில் எழுதப்படுகிறது, இயக்குநர் ஒவ்வொன்றையும் கையால் தட்டச்சு செய்தது போல. இதுதான் OCR அமைவின் முழு நோக்கம்: ஒரு காகிதப் பதிவேட்டை சென்சார்களுடன் ஒருமுறை இணைக்கிறீர்கள், அதன் பிறகு ஒரு புகைப்படம் முழுப் பக்கத்தையும் விநாடிகளில் டிஜிட்டலாக்குகிறது, ஒரு விரைவு மனிதச் சோதனையால் சரிபார்க்கப்படுகிறது.",
          tip: { type: 'rememberLabel', text: 'பதிவேடு டெம்ப்ளேட் → ஆலையில் அமை (கலங்களைக் குறிப்பிடு → DI சென்சார் குறிச்சொற்களை இணை) → புகைப்படம் பதிவேற்று → OCR எடுக்கிறது → குறுக்கு-சரிபார் → தேதி & நேரம் → Save.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br>OCR <em>लॉगबुक.</em>',
      subtitle: 'बिल्डरचा दृष्टिकोन — कागदी लॉगबुक एकदा सेन्सर टॅगशी मॅप करा, मग OCR ला हस्ताक्षर वाचू द्या.',
      chapter: 'बिल्ड ट्रॅक · डेटा इनपुट',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक लॉगबुक टेम्पलेट तयार करा',
          body: '<strong>Templates → Logbook Templates</strong> मध्ये <strong>Add Template</strong> दाबा. एक लॉगबुक टेम्पलेट एक कागदी लॉगबुक लेआउट दर्शवते आणि, इतर सर्वांप्रमाणे, पुन्हा वापरता येते.',
          voice: "OCR डेटा इनपुट ऑपरेटरला कागदी लॉगबुकचा फोटो काढून प्लॅटफॉर्मकडून वाचवू देते. ते सेट करायला, आपण एका लॉगबुक टेम्पलेटने सुरुवात करतो. Templates मध्ये जा, मग Logbook Templates — हे आपण परिभाषित केलेला प्रत्येक लॉगबुक लेआउट सूचीबद्ध करते. नवीन तयार करायला Add Template क्लिक करा. टेम्पलेट एका विशिष्ट कागदी लॉगबुकची रचना पकडते, आणि एकदा बनवल्यावर तीच लॉगबुक वापरली जाते तिथे पुन्हा वापरता येते.",
        },
        {
          label: 'कॉन्फिगर', title: 'एका प्लांटवर ते कॉन्फिगर करा',
          body: '<strong>Log Books → Configure Logbook</strong> उघडा आणि तुमचे <strong>लॉगबुक टेम्पलेट</strong> निवडा. इथेच तुम्ही प्लॅटफॉर्मला ती लॉगबुक कशी वाचायची ते शिकवता, <strong>Document Preview</strong> मध्ये एका नमुना स्कॅनविरुद्ध.',
          voice: "पुढे, आपण टेम्पलेट एका प्लांटला जोडतो आणि सिस्टमला ते कसे वाचायचे ते शिकवतो. Log Books आणि Configure Logbook मध्ये जा, मग आत्ता बनवलेले लॉगबुक टेम्पलेट निवडा. एक डॉक्युमेंट प्रिव्ह्यू उघडतो — इथे लॉगबुकचा एक नमुना स्कॅन लोड होतो, आणि इथेच तुम्ही नेमके चिन्हांकित कराल की पानाचे कोणते भाग OCR ने वाचायचे. या टप्प्यावर अजून काढलेला डेटा नाही; आपल्याला क्षेत्रे परिभाषित करावी लागतील.",
        },
        {
          label: 'अॅनोटेट', title: 'OCR सेल अॅनोटेट करा',
          body: '<strong>Annotate</strong> टूलने लॉगबुकच्या वाचायच्या प्रत्येक क्षेत्राभोवती एक बॉक्स काढा. <strong>Analyze</strong> दाबा आणि प्लॅटफॉर्म त्या क्षेत्रावर <strong>OCR</strong> चालवून सेल एका टेबलमध्ये काढते.',
          voice: "आता मुख्य टप्पा. अॅनोटेट टूलने, तुम्ही लॉगबुकच्या हव्या त्या प्रत्येक भागाभोवती एक बॉक्स काढता — रीडिंगचा एक ब्लॉक, मूल्यांचा एक स्तंभ. प्रत्येक क्षेत्रासाठी तुम्ही Analyze दाबता, आणि प्लॅटफॉर्म फक्त त्या क्षेत्रावर OCR चालवते, हस्तलिखित सेल एका संरचित टेबलमध्ये बाहेर काढते. तुम्ही मुळात सिस्टमला दाखवता की पानावर डेटा कुठे आहे, म्हणजे तत्सम लॉगबुक आल्यावर प्रत्येक वेळी काय वाचायचे ते कळते.",
        },
        {
          label: 'मॅपिंग', title: 'सेलना सेन्सर टॅग मॅप करा',
          body: '<strong>Extracted &amp; Custom Data</strong> मध्ये प्रत्येक OCR-ओळखलेल्या सेलला एक <strong>डेटा-इनपुट सेन्सर टॅग</strong> नेमा — STP Inlet, STP Outlet, Horticulture वगैरे प्रत्येकाला आपला <strong>DI Sensor</strong> मिळतो. <strong>Save</strong>. आता कोणती रीडिंग कोणत्या सेन्सरला जाते हे प्लॅटफॉर्मला कळते.',
          voice: "हेच OCR ला अर्थपूर्ण बनवते. उजवीकडे, Extracted and Custom Data मध्ये, OCR ला सापडलेला प्रत्येक सेल सूचीबद्ध आहे — आणि प्रत्येकाशेजारी एक सेन्सर ड्रॉपडाउन. तुम्ही प्रत्येक सेल एका डेटा-इनपुट सेन्सर टॅगशी मॅप करता: हा स्तंभ एस टी पी इनलेट रीडिंग, तो एस टी पी आउटलेट, हे हॉर्टिकल्चर, वगैरे. प्रत्येकाला आपला डी आय सेन्सर मिळतो. सेव्ह करा, आणि दुवा कायमस्वरूपी आहे: आतापासून पानावरची कोणती संख्या कोणत्या सेन्सरला जाते हे प्लॅटफॉर्मला नेमके कळते. टेम्पलेट कॉन्फिगर झाले.",
        },
        {
          label: 'अपलोड', title: 'प्लांटवर: एक फोटो अपलोड करा',
          body: 'आता रोजचा वापर. प्लांटवर, <strong>OCR Data Input</strong> उघडा, <strong>अॅसेट</strong> आणि <strong>लॉगबुक टेम्पलेट</strong> निवडा, आणि भरलेल्या लॉगबुकचा <strong>फोटो अपलोड</strong> करा. एक <strong>Preview &amp; Correct Orientation</strong> टप्पा प्रोसेसपूर्वी तो सरळ करू देतो.',
          voice: "टेम्पलेट कॉन्फिगर झाल्यावर, रोज हे कसे वापरले जाते. प्लांटवर, O C R Data Input उघडा. अॅसेट आणि लॉगबुक टेम्पलेट निवडा — इथे Daily Flow Data Input. मग भरलेल्या कागदी लॉगबुकचा फोटो ड्रॅग करा किंवा ब्राउझ करा. प्रोसेसपूर्वी, एक प्रिव्ह्यू तुम्हाला ओरिएंटेशन दुरुस्त करू देतो, म्हणजे थोडासा फिरलेला फोन फोटोही बरोबर वाचतो. मग प्लॅटफॉर्म प्रतिमा प्रोसेस करते.",
        },
        {
          label: 'काढणे', title: 'OCR काढते — क्रॉस-चेक',
          body: 'प्लॅटफॉर्म फोटो वाचते आणि प्रतिमेशेजारी <strong>Extracted Data</strong> दाखवते: STP Inlet 370, STP Outlet 381, वगैरे. प्रत्येक मूल्य स्कॅनविरुद्ध <strong>क्रॉस-चेक</strong> करा आणि OCR ची कोणतीही चूक दुरुस्त करा — फील्ड संपादन करण्याजोगी आहेत.',
          voice: "एका क्षणानंतर: प्रतिमा प्रोसेस होऊन डेटा यशस्वीरीत्या काढला. अपलोड केलेल्या आणि प्रोसेस्ड प्रतिमा डावीकडे आहेत, आणि उजवीकडे काढलेला डेटा — एस टी पी इनलेट तीनशे सत्तर, एस टी पी आउटलेट तीनशे एक्याऐंशी, हॉर्टिकल्चर अठरा, वगैरे, प्रत्येक त्याच्या मॅप केलेल्या सेन्सरमध्ये येऊन पडते. हा क्रॉस-चेक टप्पा आहे, आणि तो महत्त्वाचा आहे: हस्ताक्षरावर OCR अचूक नसते, म्हणून तुम्ही प्रत्येक मूल्य स्कॅनविरुद्ध पाहता आणि चुकीचे वाचलेले दुरुस्त करता. फील्ड पूर्णपणे संपादन करण्याजोगी आहेत.",
        },
        {
          label: 'सेव्ह', title: 'तारीख व वेळ सेट करा, मग Save',
          body: 'शेवटी, रीडिंग ज्याच्याशी संबंधित आहेत ती <strong>Date &amp; Time</strong> सेट करा, आणि <strong>Save</strong> दाबा. प्रत्येक मूल्य त्या टाइमस्टॅम्पवर त्याच्या मॅप केलेल्या सेन्सरवर येते — एक संपूर्ण कागदी लॉगबुक सेकंदात डिजिटल.',
          voice: "शेवटचा टप्पा टाइमस्टॅम्प. ही रीडिंग प्रत्यक्षात कधी घेतली ती तारीख आणि वेळ सेट करा — ती आत्तावर डिफॉल्ट होते, पण तुम्ही ती लॉगबुक नोंदीशी जुळायला बॅक-डेट कराल. मग Save दाबा. प्रत्येक क्रॉस-चेक केलेले मूल्य त्याच नेमक्या वेळी त्याच्या मॅप केलेल्या सेन्सरवर लिहिले जाते, जणू ऑपरेटरने प्रत्येक हाताने टाइप केले. हाच OCR कॉन्फिगरेशनचा संपूर्ण उद्देश: तुम्ही कागदी लॉगबुक एकदा सेन्सरशी मॅप करता, आणि त्यानंतर एक फोटो संपूर्ण पान सेकंदात डिजिटल करतो, एका झटपट मानवी तपासणीने पडताळलेला.",
          tip: { type: 'rememberLabel', text: 'लॉगबुक टेम्पलेट → प्लांटवर कॉन्फिगर (सेल अॅनोटेट → DI सेन्सर टॅग मॅप) → फोटो अपलोड → OCR काढते → क्रॉस-चेक → तारीख व वेळ → Save.' },
        },
      ],
    },
  },
};

export default lesson;
