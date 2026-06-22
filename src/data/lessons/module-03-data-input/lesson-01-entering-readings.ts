import type { DataInputData, Lesson } from '../../types';

/**
 * Module 3 · Lesson 1 — Entering a Reading.   Tag: M3.L1
 * The Data Input screen and the Number-sensor flow: acceptance range (blocks),
 * warning range (allows), media upload (All vs Live), and the guided flow.
 */

const overview: DataInputData = {
  mode: 'table',
  title: 'Data Input',
  rows: [
    { sensor: 'pH Water Quality Equalization Tank', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day' },
    { sensor: 'TDS Water Quality Equalization Tank', asset: 'Amazon NCRU', validRange: '0 - 2100', safeRange: '0 - 500', frequency: 'Once a day' },
    { sensor: 'pH Water Quality MBBR - 1', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day' },
    { sensor: 'DO Water Quality MBBR - 1', asset: 'Amazon NCRU', validRange: '0 - 100', safeRange: '0 - 8', frequency: 'Once a day' },
    { sensor: 'SV 30 Water Quality MBBR - 1', asset: 'Amazon NCRU', validRange: '0 - 100', safeRange: '10 - 20', frequency: 'Once a day' },
    { sensor: 'pH Water Quality UF Water Storage Tank', asset: 'Amazon NCRU', validRange: '0 - 14', safeRange: '6.5 - 8.5', frequency: 'Once a day' },
  ],
};

function card(over: Partial<DataInputData['card']> & object, highlight?: DataInputData['highlight']) {
  const data: DataInputData = {
    mode: 'card',
    highlight,
    submitLabel: 'Submit Reading',
    card: {
      sensor: 'pH Water Quality Equalization Tank',
      asset: 'Amazon NCRU',
      typeLabel: 'Number',
      validRange: '0 – 14',
      safeRange: '6.5 – 8.5',
      ...over,
    } as DataInputData['card'],
  };
  return { dataInput: data };
}

const lesson: Lesson = {
  id: 'lesson-01-entering-readings',
  moduleId: 'module-03-data-input',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'dataInput', caption: 'The Data Input screen',
      widgetState: { dataInput: overview }, cursor: [{ at: 0.15, x: 16, y: 40 }, { at: 0.6, x: 45, y: 40 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Acceptance Range — blocks bad values',
      widgetState: card({ enteredValue: '15', state: 'error', message: '15 is outside the Acceptance Range (0 – 14). This value cannot be saved.' }, 'state'),
      cursor: [{ at: 0.2, x: 50, y: 42 }, { at: 0.6, x: 50, y: 60 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Warning Range — allows, but warns',
      widgetState: card({ enteredValue: '9.2', state: 'warning', message: '9.2 is outside the Safe Range (6.5 – 8.5), but within Acceptance. You can submit — please double-check.' }, 'state'),
      cursor: [{ at: 0.3, x: 50, y: 60 }] },
    { mode: 'widget', widget: 'dataInput', caption: 'Add media — All Media or Live Media',
      widgetState: card({ enteredValue: '7.8', state: 'ok', message: 'Looks good — now add a photo to confirm.', media: 'live', mediaState: 'pending' }, 'media'),
      cursor: [{ at: 0.3, x: 50, y: 70, click: true }] },
    { mode: 'widget', widget: 'dataInput', caption: 'The guided flow',
      widgetState: card({ enteredValue: '7.8', state: 'ok', message: 'Value accepted.', media: 'live', mediaState: 'done' }, 'submit'),
      cursor: [{ at: 0.3, x: 50, y: 88, click: true }] },
  ],
  content: {
    en: {
      title: 'Entering a <em>Reading.</em>',
      subtitle:
        'How operators log plant readings — and how the system catches mistakes before they ever reach the dashboard.',
      chapter: 'Chapter Three · Data at the Source',
      steps: [
        {
          label: 'Overview', title: 'The Data Input screen',
          body: "<strong>Data Input</strong> is where operators log readings for parameters set up during configuration — things like <strong>inlet and outlet pH, TSS, BOD, COD</strong>. Each row is a sensor, with its <strong>ranges</strong>, an <strong>Enter Value</strong> box, and how often it's due.",
          voice: "Welcome to Data Input. This is the screen operators use to log readings by hand — for parameters that were set up during configuration. Things like inlet and outlet water quality — pH, T S S, B O D, C O D, and sometimes conductivity or alkalinity. Each row is one sensor, showing its ranges, a box to enter the value, and how often the reading is due. Let's see what happens when you type a value in.",
        },
        {
          label: 'Acceptance Range', title: 'Acceptance Range — bad values are blocked',
          body: "For a <strong>Number</strong> sensor you can set an <strong>Acceptance Range</strong>. A value outside it throws an <strong>error</strong> and <strong>won't be saved</strong>. Here pH is 0–14, so entering <strong>15</strong> is rejected outright.",
          voice: "Number sensors can have an Acceptance Range. Think of it as the hard limit. If a value falls outside it, the system throws an error and simply won't let you save it. Here, pH only makes sense from zero to fourteen. So if the operator types fifteen, it's rejected on the spot. This stops impossible readings — a typo, a wrong unit — from ever reaching the dashboard.",
          tip: { type: 'noteLabel', text: 'A value outside the Acceptance Range cannot be submitted at all — it must be corrected first.' },
        },
        {
          label: 'Warning Range', title: 'Warning Range — allowed, but flagged',
          body: "You can also set a tighter <strong>Safe Range</strong>. A value <strong>inside</strong> Acceptance but <strong>outside</strong> Safe throws a <strong>warning</strong> — the operator is alerted, but <strong>can still submit</strong>. Here 9.2 is valid, but above the safe 6.5–8.5.",
          voice: "Inside the acceptance range, you can set a tighter safe range. A value that's acceptable, but outside this safe band, raises a warning rather than an error. The operator sees the alert, but they're still allowed to submit. Here, a pH of nine point two is perfectly valid, but it's above the safe range of six point five to eight point five. So Riya warns — maybe something needs attention — but trusts the operator to confirm.",
          tip: { type: 'rememberLabel', text: 'Acceptance Range = a hard stop (error). Safe / Warning Range = a soft flag (warning, still submittable).' },
        },
        {
          label: 'Media', title: 'Add media — All Media or Live Media',
          body: "A Number sensor can also require a <strong>photo</strong>. <strong>All Media</strong> lets the operator pick from the gallery or take a photo; <strong>Live Media</strong> allows <strong>only a freshly-taken photo</strong> — proof the reading was just made on-site.",
          voice: "On top of ranges, a number sensor can require a photo with the reading. There are two modes. All Media lets the operator either pick an existing photo from the gallery, or take a new one. Live Media is stricter — it only allows a photo taken live, right now, on the device. That's your guarantee the operator was actually standing at the equipment when they logged it.",
          tip: { type: 'proTipLabel', text: 'Use Live Media when you need proof the reading was taken on-site, in the moment.' },
        },
        {
          label: 'The Flow', title: 'The guided flow',
          body: "These combine. The operator enters a value — if it's <strong>accepted</strong> (or accepted with a <strong>warning</strong>) they're taken to <strong>upload media</strong>, then submit. With Acceptance Range <em>and</em> Live Media on, there are two checks: a bad value, then a missing photo.",
          voice: "And these all work together. The flow is simple. The operator enters a value. If it's accepted — or accepted with a warning — they're taken straight on to upload the media, and then submit. So if you've configured an acceptance range and live media together, there are two gates to clear. First, the value has to be in range. Second, a live photo has to be attached. Only then does the reading save. That's how Data Input keeps your numbers clean, right at the source.",
          tip: { type: 'upNextLabel', text: 'Next: the other sensor types, and submitting in bulk.' },
        },
      ],
    },
    hi: {
      title: 'रीडिंग <em>दर्ज करना।</em>',
      subtitle:
        'ऑपरेटर प्लांट रीडिंग कैसे दर्ज करते हैं — और सिस्टम गलतियों को डैशबोर्ड तक पहुँचने से पहले कैसे पकड़ता है।',
      chapter: 'अध्याय तीन · स्रोत पर डेटा',
      steps: [
        {
          label: 'अवलोकन', title: 'डेटा इनपुट स्क्रीन',
          body: '<strong>डेटा इनपुट</strong> वह जगह है जहाँ ऑपरेटर कॉन्फ़िगरेशन के दौरान सेट किए गए मापदंडों के लिए रीडिंग दर्ज करते हैं — जैसे <strong>इनलेट और आउटलेट pH, TSS, BOD, COD</strong>। हर पंक्ति एक सेंसर है, उसकी <strong>रेंज</strong>, एक <strong>Enter Value</strong> बॉक्स, और यह कितनी बार चाहिए।',
          voice: 'डेटा इनपुट में आपका स्वागत है। यह वह स्क्रीन है जिसका उपयोग ऑपरेटर हाथ से रीडिंग दर्ज करने के लिए करते हैं — उन मापदंडों के लिए जो कॉन्फ़िगरेशन के दौरान सेट किए गए थे। जैसे इनलेट और आउटलेट जल गुणवत्ता — pH, टी एस एस, बी ओ डी, सी ओ डी, और कभी-कभी चालकता या क्षारीयता। हर पंक्ति एक सेंसर है, जो उसकी रेंज, मान दर्ज करने का बॉक्स, और रीडिंग कितनी बार चाहिए, दिखाती है। आइए देखें कि जब आप कोई मान टाइप करते हैं तो क्या होता है।',
        },
        {
          label: 'स्वीकृति रेंज', title: 'स्वीकृति रेंज — गलत मान रोके जाते हैं',
          body: 'एक <strong>नंबर</strong> सेंसर के लिए आप <strong>स्वीकृति रेंज</strong> सेट कर सकते हैं। इसके बाहर का मान <strong>त्रुटि</strong> देता है और <strong>सहेजा नहीं जाएगा</strong>। यहाँ pH 0–14 है, तो <strong>15</strong> दर्ज करना सीधे अस्वीकार होता है।',
          voice: 'नंबर सेंसर में स्वीकृति रेंज हो सकती है। इसे कठोर सीमा समझें। अगर कोई मान इसके बाहर आता है, तो सिस्टम त्रुटि देता है और आपको सहेजने ही नहीं देता। यहाँ, pH केवल शून्य से चौदह तक समझ में आता है। तो अगर ऑपरेटर पंद्रह टाइप करता है, यह तुरंत अस्वीकार हो जाता है। यह असंभव रीडिंग — एक टाइपो, गलत इकाई — को डैशबोर्ड तक पहुँचने से रोकता है।',
          tip: { type: 'noteLabel', text: 'स्वीकृति रेंज के बाहर का मान बिल्कुल जमा नहीं किया जा सकता — पहले उसे ठीक करना होगा।' },
        },
        {
          label: 'चेतावनी रेंज', title: 'चेतावनी रेंज — अनुमति है, पर चिह्नित',
          body: 'आप एक सख़्त <strong>सुरक्षित रेंज</strong> भी सेट कर सकते हैं। स्वीकृति के <strong>अंदर</strong> पर सुरक्षित के <strong>बाहर</strong> का मान <strong>चेतावनी</strong> देता है — ऑपरेटर को सूचित किया जाता है, पर वह <strong>फिर भी जमा कर सकता</strong> है। यहाँ 9.2 वैध है, पर सुरक्षित 6.5–8.5 से ऊपर।',
          voice: 'स्वीकृति रेंज के अंदर, आप एक सख़्त सुरक्षित रेंज सेट कर सकते हैं। एक मान जो स्वीकार्य है, पर इस सुरक्षित बैंड के बाहर है, त्रुटि के बजाय चेतावनी देता है। ऑपरेटर अलर्ट देखता है, पर उसे फिर भी जमा करने की अनुमति है। यहाँ, नौ दशमलव दो का pH पूरी तरह वैध है, पर यह छह दशमलव पाँच से आठ दशमलव पाँच की सुरक्षित रेंज से ऊपर है। तो रिया चेतावनी देती है — शायद कुछ ध्यान चाहिए — पर पुष्टि के लिए ऑपरेटर पर भरोसा करती है।',
          tip: { type: 'rememberLabel', text: 'स्वीकृति रेंज = कठोर रोक (त्रुटि)। सुरक्षित / चेतावनी रेंज = नरम संकेत (चेतावनी, फिर भी जमा करने योग्य)।' },
        },
        {
          label: 'मीडिया', title: 'मीडिया जोड़ें — All Media या Live Media',
          body: 'एक नंबर सेंसर <strong>फ़ोटो</strong> भी माँग सकता है। <strong>All Media</strong> ऑपरेटर को गैलरी से चुनने या फ़ोटो लेने देता है; <strong>Live Media</strong> केवल <strong>तुरंत ली गई फ़ोटो</strong> की अनुमति देता है — प्रमाण कि रीडिंग अभी साइट पर ली गई।',
          voice: 'रेंज के अलावा, एक नंबर सेंसर रीडिंग के साथ फ़ोटो माँग सकता है। दो मोड हैं। All Media ऑपरेटर को या तो गैलरी से मौजूदा फ़ोटो चुनने, या नई लेने देता है। Live Media सख़्त है — यह केवल अभी, उसी समय, डिवाइस पर ली गई फ़ोटो की अनुमति देता है। यह आपकी गारंटी है कि ऑपरेटर वास्तव में उपकरण के पास खड़ा था जब उसने इसे दर्ज किया।',
          tip: { type: 'proTipLabel', text: 'जब आपको प्रमाण चाहिए कि रीडिंग साइट पर, उसी क्षण ली गई, तो Live Media उपयोग करें।' },
        },
        {
          label: 'प्रवाह', title: 'मार्गदर्शित प्रवाह',
          body: 'ये जुड़ते हैं। ऑपरेटर मान दर्ज करता है — अगर वह <strong>स्वीकृत</strong> है (या <strong>चेतावनी</strong> के साथ स्वीकृत) तो उसे <strong>मीडिया अपलोड</strong> पर ले जाया जाता है, फिर जमा। स्वीकृति रेंज <em>और</em> Live Media चालू होने पर दो जाँच: गलत मान, फिर अनुपस्थित फ़ोटो।',
          voice: 'और ये सब मिलकर काम करते हैं। प्रवाह सरल है। ऑपरेटर मान दर्ज करता है। अगर वह स्वीकृत है — या चेतावनी के साथ स्वीकृत — तो उसे सीधे मीडिया अपलोड पर ले जाया जाता है, और फिर जमा। तो अगर आपने स्वीकृति रेंज और लाइव मीडिया एक साथ कॉन्फ़िगर किए हैं, तो पार करने के लिए दो द्वार हैं। पहला, मान रेंज में होना चाहिए। दूसरा, एक लाइव फ़ोटो जुड़ी होनी चाहिए। तभी रीडिंग सहेजी जाती है। इस तरह डेटा इनपुट आपके आँकड़ों को स्रोत पर ही साफ़ रखता है।',
          tip: { type: 'upNextLabel', text: 'आगे: अन्य सेंसर प्रकार, और बल्क में जमा करना।' },
        },
      ],
    },
    ta: {
      title: 'ஒரு <em>அளவீட்டை</em> பதிவு செய்தல்.',
      subtitle:
        'இயக்குனர்கள் ஆலை அளவீடுகளை எப்படிப் பதிவு செய்கிறார்கள் — மற்றும் தவறுகள் டாஷ்போர்டை அடைவதற்கு முன்பே சிஸ்டம் எப்படிப் பிடிக்கிறது.',
      chapter: 'அத்தியாயம் மூன்று · மூலத்தில் தரவு',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'டேட்டா இன்புட் திரை',
          body: '<strong>டேட்டா இன்புட்</strong> என்பது அமைப்பின்போது நிர்ணயிக்கப்பட்ட அளவுருக்களுக்கு இயக்குனர்கள் அளவீடுகளைப் பதிவு செய்யும் இடம் — <strong>உள்ளீடு மற்றும் வெளியீடு pH, TSS, BOD, COD</strong> போன்றவை. ஒவ்வொரு வரிசையும் ஒரு சென்சார், அதன் <strong>வரம்புகள்</strong>, ஒரு <strong>Enter Value</strong> பெட்டி, அது எவ்வளவு அடிக்கடி தேவை.',
          voice: 'டேட்டா இன்புட்டுக்கு வரவேற்கிறேன். அமைப்பின்போது நிர்ணயிக்கப்பட்ட அளவுருக்களுக்கு இயக்குனர்கள் கையால் அளவீடுகளைப் பதிவு செய்யப் பயன்படுத்தும் திரை இது. உள்ளீடு மற்றும் வெளியீடு நீர் தரம் — pH, டி எஸ் எஸ், பி ஓ டி, சி ஓ டி, சில நேரங்களில் கடத்துத்திறன் அல்லது காரத்தன்மை. ஒவ்வொரு வரிசையும் ஒரு சென்சார், அதன் வரம்புகள், மதிப்பை உள்ளிட ஒரு பெட்டி, அளவீடு எவ்வளவு அடிக்கடி தேவை என்பதைக் காட்டுகிறது. ஒரு மதிப்பை உள்ளிடும்போது என்ன நடக்கிறது என்று பார்ப்போம்.',
        },
        {
          label: 'ஏற்பு வரம்பு', title: 'ஏற்பு வரம்பு — தவறான மதிப்புகள் தடுக்கப்படுகின்றன',
          body: 'ஒரு <strong>எண்</strong> சென்சாருக்கு <strong>ஏற்பு வரம்பை</strong> அமைக்கலாம். அதற்கு வெளியே உள்ள மதிப்பு <strong>பிழையை</strong> ஏற்படுத்தி <strong>சேமிக்கப்படாது</strong>. இங்கே pH 0–14, எனவே <strong>15</strong> உள்ளிடுவது நேரடியாக நிராகரிக்கப்படுகிறது.',
          voice: 'எண் சென்சார்களுக்கு ஏற்பு வரம்பு இருக்கலாம். இதை கடினமான எல்லையாகக் கருதுங்கள். ஒரு மதிப்பு அதற்கு வெளியே விழுந்தால், சிஸ்டம் பிழையை ஏற்படுத்தி உங்களைச் சேமிக்கவே விடாது. இங்கே, pH பூஜ்ஜியத்திலிருந்து பதினான்கு வரை மட்டுமே அர்த்தமுள்ளது. எனவே இயக்குனர் பதினைந்து தட்டச்சு செய்தால், அது உடனே நிராகரிக்கப்படுகிறது. இது சாத்தியமற்ற அளவீடுகள் — ஒரு தட்டச்சுப் பிழை, தவறான அலகு — டாஷ்போர்டை அடைவதைத் தடுக்கிறது.',
          tip: { type: 'noteLabel', text: 'ஏற்பு வரம்புக்கு வெளியே உள்ள மதிப்பை சமர்ப்பிக்கவே முடியாது — முதலில் சரிசெய்ய வேண்டும்.' },
        },
        {
          label: 'எச்சரிக்கை வரம்பு', title: 'எச்சரிக்கை வரம்பு — அனுமதிக்கப்படும், ஆனால் குறிக்கப்படும்',
          body: 'இறுக்கமான <strong>பாதுகாப்பு வரம்பையும்</strong> அமைக்கலாம். ஏற்புக்கு <strong>உள்ளே</strong> ஆனால் பாதுகாப்புக்கு <strong>வெளியே</strong> உள்ள மதிப்பு <strong>எச்சரிக்கையை</strong> ஏற்படுத்துகிறது — இயக்குனருக்கு அறிவிக்கப்படுகிறது, ஆனால் <strong>சமர்ப்பிக்க முடியும்</strong>. இங்கே 9.2 செல்லுபடியாகும், ஆனால் பாதுகாப்பு 6.5–8.5-க்கு மேலே.',
          voice: 'ஏற்பு வரம்புக்குள், இறுக்கமான பாதுகாப்பு வரம்பை அமைக்கலாம். ஏற்கத்தக்கது, ஆனால் இந்தப் பாதுகாப்புப் பட்டைக்கு வெளியே உள்ள மதிப்பு, பிழைக்குப் பதிலாக எச்சரிக்கையை எழுப்புகிறது. இயக்குனர் அறிவிப்பைப் பார்க்கிறார், ஆனால் சமர்ப்பிக்க அனுமதிக்கப்படுகிறார். இங்கே, ஒன்பது புள்ளி இரண்டு pH முற்றிலும் செல்லுபடியாகும், ஆனால் ஆறு புள்ளி ஐந்து முதல் எட்டு புள்ளி ஐந்து பாதுகாப்பு வரம்புக்கு மேலே. எனவே ரியா எச்சரிக்கிறாள் — ஒருவேளை கவனம் தேவைப்படலாம் — ஆனால் உறுதிப்படுத்த இயக்குனரை நம்புகிறாள்.',
          tip: { type: 'rememberLabel', text: 'ஏற்பு வரம்பு = கடினமான தடை (பிழை). பாதுகாப்பு / எச்சரிக்கை வரம்பு = மென்மையான குறி (எச்சரிக்கை, இன்னும் சமர்ப்பிக்கலாம்).' },
        },
        {
          label: 'மீடியா', title: 'மீடியா சேர் — All Media அல்லது Live Media',
          body: 'ஒரு எண் சென்சார் <strong>புகைப்படத்தையும்</strong> கோரலாம். <strong>All Media</strong> கேலரியிலிருந்து தேர்வு செய்யவோ புகைப்படம் எடுக்கவோ அனுமதிக்கிறது; <strong>Live Media</strong> <strong>இப்போது எடுத்த புகைப்படத்தை</strong> மட்டுமே அனுமதிக்கிறது — அளவீடு தளத்தில் இப்போது எடுக்கப்பட்டதற்கான சான்று.',
          voice: 'வரம்புகளுக்கு மேலதிகமாக, ஒரு எண் சென்சார் அளவீட்டுடன் புகைப்படத்தைக் கோரலாம். இரண்டு முறைகள் உள்ளன. All Media இயக்குனர் கேலரியிலிருந்து ஏற்கனவே உள்ள புகைப்படத்தைத் தேர்வு செய்யவோ, புதியதை எடுக்கவோ அனுமதிக்கிறது. Live Media கடுமையானது — இப்போது, உடனடியாக, சாதனத்தில் எடுக்கப்பட்ட புகைப்படத்தை மட்டுமே அனுமதிக்கிறது. இயக்குனர் அதைப் பதிவு செய்தபோது உண்மையில் உபகரணத்தின் அருகே நின்றார் என்பதற்கான உங்கள் உத்தரவாதம் இது.',
          tip: { type: 'proTipLabel', text: 'அளவீடு தளத்தில், அந்தக் கணத்தில் எடுக்கப்பட்டதற்கான சான்று தேவைப்படும்போது Live Media-வைப் பயன்படுத்துங்கள்.' },
        },
        {
          label: 'ஓட்டம்', title: 'வழிகாட்டப்பட்ட ஓட்டம்',
          body: 'இவை இணைகின்றன. இயக்குனர் மதிப்பை உள்ளிடுகிறார் — அது <strong>ஏற்கப்பட்டால்</strong> (அல்லது <strong>எச்சரிக்கையுடன்</strong> ஏற்கப்பட்டால்) <strong>மீடியா பதிவேற்றத்திற்கு</strong> அழைத்துச் செல்லப்படுகிறார், பின்னர் சமர்ப்பிக்கிறார். ஏற்பு வரம்பு <em>மற்றும்</em> Live Media இயக்கப்பட்டால் இரண்டு சோதனைகள்: தவறான மதிப்பு, பின்னர் இல்லாத புகைப்படம்.',
          voice: 'இவை அனைத்தும் சேர்ந்து வேலை செய்கின்றன. ஓட்டம் எளிது. இயக்குனர் மதிப்பை உள்ளிடுகிறார். அது ஏற்கப்பட்டால் — அல்லது எச்சரிக்கையுடன் ஏற்கப்பட்டால் — நேராக மீடியா பதிவேற்றத்திற்கு அழைத்துச் செல்லப்படுகிறார், பின்னர் சமர்ப்பிக்கிறார். எனவே ஏற்பு வரம்பையும் லைவ் மீடியாவையும் சேர்த்து அமைத்திருந்தால், கடக்க இரண்டு வாயில்கள். முதலில், மதிப்பு வரம்பில் இருக்க வேண்டும். இரண்டாவது, ஒரு லைவ் புகைப்படம் இணைக்கப்பட வேண்டும். அப்போதுதான் அளவீடு சேமிக்கப்படுகிறது. இப்படித்தான் டேட்டா இன்புட் உங்கள் எண்களை மூலத்திலேயே சுத்தமாக வைக்கிறது.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: மற்ற சென்சார் வகைகள், மற்றும் மொத்தமாக சமர்ப்பித்தல்.' },
        },
      ],
    },
    mr: {
      title: 'एक <em>रीडिंग</em> नोंदवणे.',
      subtitle:
        'ऑपरेटर प्लांट रीडिंग कशी नोंदवतात — आणि सिस्टम चुका डॅशबोर्डपर्यंत पोहोचण्याआधीच कशा पकडते.',
      chapter: 'अध्याय तीन · स्रोतावर डेटा',
      steps: [
        {
          label: 'आढावा', title: 'डेटा इनपुट स्क्रीन',
          body: '<strong>डेटा इनपुट</strong> ही अशी जागा आहे जिथे ऑपरेटर कॉन्फिगरेशनदरम्यान सेट केलेल्या मापदंडांसाठी रीडिंग नोंदवतात — जसे <strong>इनलेट आणि आउटलेट pH, TSS, BOD, COD</strong>. प्रत्येक पंक्ती एक सेन्सर आहे, त्याची <strong>श्रेणी</strong>, एक <strong>Enter Value</strong> बॉक्स, आणि किती वेळा हवी.',
          voice: 'डेटा इनपुटमध्ये स्वागत आहे. कॉन्फिगरेशनदरम्यान सेट केलेल्या मापदंडांसाठी ऑपरेटर हाताने रीडिंग नोंदवण्यासाठी वापरतात ती ही स्क्रीन. इनलेट आणि आउटलेट पाणी गुणवत्ता — pH, टी एस एस, बी ओ डी, सी ओ डी, आणि कधी कधी चालकता किंवा क्षारता. प्रत्येक पंक्ती एक सेन्सर आहे, जी त्याची श्रेणी, मूल्य भरण्याचा बॉक्स, आणि रीडिंग किती वेळा हवी ते दाखवते. तुम्ही मूल्य टाइप करता तेव्हा काय होते ते पाहूया.',
        },
        {
          label: 'स्वीकृती श्रेणी', title: 'स्वीकृती श्रेणी — चुकीची मूल्ये रोखली जातात',
          body: 'एका <strong>नंबर</strong> सेन्सरसाठी तुम्ही <strong>स्वीकृती श्रेणी</strong> सेट करू शकता. तिच्या बाहेरचे मूल्य <strong>त्रुटी</strong> देते आणि <strong>जतन होणार नाही</strong>. इथे pH 0–14 आहे, म्हणून <strong>15</strong> भरणे थेट नाकारले जाते.',
          voice: 'नंबर सेन्सरला स्वीकृती श्रेणी असू शकते. ती कठोर मर्यादा समजा. एखादे मूल्य तिच्या बाहेर पडले, तर सिस्टम त्रुटी देते आणि तुम्हाला जतन करूच देत नाही. इथे, pH फक्त शून्य ते चौदा पर्यंत अर्थपूर्ण आहे. म्हणून ऑपरेटरने पंधरा टाइप केले, तर ते लगेच नाकारले जाते. यामुळे अशक्य रीडिंग — एक टायपो, चुकीचे एकक — डॅशबोर्डपर्यंत पोहोचण्यापासून रोखली जातात.',
          tip: { type: 'noteLabel', text: 'स्वीकृती श्रेणीबाहेरचे मूल्य अजिबात सबमिट करता येत नाही — आधी ते दुरुस्त करावे लागते.' },
        },
        {
          label: 'इशारा श्रेणी', title: 'इशारा श्रेणी — परवानगी, पण चिन्हांकित',
          body: 'तुम्ही एक घट्ट <strong>सुरक्षित श्रेणी</strong> देखील सेट करू शकता. स्वीकृतीच्या <strong>आत</strong> पण सुरक्षिततेच्या <strong>बाहेर</strong> असलेले मूल्य <strong>इशारा</strong> देते — ऑपरेटरला सूचित केले जाते, पण तो <strong>तरीही सबमिट करू शकतो</strong>. इथे 9.2 वैध आहे, पण सुरक्षित 6.5–8.5 च्या वर.',
          voice: 'स्वीकृती श्रेणीच्या आत, तुम्ही एक घट्ट सुरक्षित श्रेणी सेट करू शकता. स्वीकार्य पण या सुरक्षित पट्ट्याबाहेरचे मूल्य त्रुटीऐवजी इशारा देते. ऑपरेटर अलर्ट पाहतो, पण त्याला तरीही सबमिट करण्याची परवानगी आहे. इथे, नऊ दशांश दोन चा pH पूर्णपणे वैध आहे, पण तो सहा दशांश पाच ते आठ दशांश पाच च्या सुरक्षित श्रेणीच्या वर आहे. म्हणून रिया इशारा देते — कदाचित काहीतरी लक्ष हवे — पण पुष्टीसाठी ऑपरेटरवर विश्वास ठेवते.',
          tip: { type: 'rememberLabel', text: 'स्वीकृती श्रेणी = कठोर थांबा (त्रुटी). सुरक्षित / इशारा श्रेणी = मऊ चिन्ह (इशारा, तरीही सबमिट करण्यायोग्य).' },
        },
        {
          label: 'मीडिया', title: 'मीडिया जोडा — All Media किंवा Live Media',
          body: 'एक नंबर सेन्सर <strong>फोटो</strong> देखील मागू शकतो. <strong>All Media</strong> ऑपरेटरला गॅलरीतून निवडू किंवा फोटो काढू देते; <strong>Live Media</strong> फक्त <strong>आत्ता काढलेला फोटो</strong> परवानगी देते — रीडिंग आत्ता साइटवर घेतल्याचा पुरावा.',
          voice: 'श्रेणींव्यतिरिक्त, एक नंबर सेन्सर रीडिंगसोबत फोटो मागू शकतो. दोन मोड आहेत. All Media ऑपरेटरला गॅलरीतून अस्तित्वात असलेला फोटो निवडू, किंवा नवीन काढू देते. Live Media कठोर आहे — फक्त आत्ता, याच क्षणी, डिव्हाइसवर काढलेला फोटो परवानगी देते. ऑपरेटर खरोखर उपकरणाजवळ उभा होता हे नोंदवताना याची तुमची हमी आहे.',
          tip: { type: 'proTipLabel', text: 'रीडिंग साइटवर, त्याच क्षणी घेतल्याचा पुरावा हवा असेल तेव्हा Live Media वापरा.' },
        },
        {
          label: 'प्रवाह', title: 'मार्गदर्शित प्रवाह',
          body: 'हे एकत्र येतात. ऑपरेटर मूल्य भरतो — ते <strong>स्वीकृत</strong> असल्यास (किंवा <strong>इशाऱ्यासह</strong> स्वीकृत) त्याला <strong>मीडिया अपलोड</strong>कडे नेले जाते, मग सबमिट. स्वीकृती श्रेणी <em>आणि</em> Live Media चालू असल्यास दोन तपासण्या: चुकीचे मूल्य, मग अनुपस्थित फोटो.',
          voice: 'आणि हे सर्व एकत्र काम करतात. प्रवाह सोपा आहे. ऑपरेटर मूल्य भरतो. ते स्वीकृत असल्यास — किंवा इशाऱ्यासह स्वीकृत — त्याला थेट मीडिया अपलोडकडे नेले जाते, आणि मग सबमिट. म्हणून तुम्ही स्वीकृती श्रेणी आणि लाइव्ह मीडिया एकत्र कॉन्फिगर केले असल्यास, पार करायला दोन दरवाजे आहेत. पहिले, मूल्य श्रेणीत असावे. दुसरे, एक लाइव्ह फोटो जोडलेला असावा. तरच रीडिंग जतन होते. अशा प्रकारे डेटा इनपुट तुमचे आकडे स्रोतावरच स्वच्छ ठेवते.',
          tip: { type: 'upNextLabel', text: 'पुढे: इतर सेन्सर प्रकार, आणि बल्कमध्ये सबमिट करणे.' },
        },
      ],
    },
  },
};

export default lesson;
