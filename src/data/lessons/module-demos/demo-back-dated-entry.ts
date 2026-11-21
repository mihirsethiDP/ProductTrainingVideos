import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-back-dated-entry`;

/**
 * Personalized demo — Hindalco Mahaan · Back-dated entry in Data Input.  (hidden module-demos)
 * Built from the CSM's 43-second screen recording of 2026-11-21 (Studio job
 * bb44ee69, demo_style=overview, no notes). The recording is on the Hindalco
 * Mahaan account (Aditya Birla / Hindalco logo, "Hindalco Mahaan" under every
 * sensor), so the copy names the plant.
 *
 * Flow in the recording, all covered: Dashboard → menu drawer → Data Input →
 * Upload File dialog opened and closed → Entry Date & Time calendar: 13 Nov
 * picked, time set to 12:00 PM → amber "Backdated entry" banner + "Back to
 * today" → table scrolled right to the Status (Pending) column → value 45
 * typed into Silica Water Quality Boiler, tick / cross shown, then cancelled.
 *
 * Style: overview — brisk, one step per screen, navigation first, wrap last.
 * Real 1280px frames (browser chrome + taskbar cropped, OS pointer erased).
 */
const lesson: Lesson = {
  id: 'demo-back-dated-entry',
  moduleId: 'module-demos',
  lessonNumber: 3,
  estimatedMinutes: 2,
  expiresAt: '2026-12-21', // 30 days after generation — purged by cleanup-demos
  screenshots: {
    menu: `${BASE}/menu.jpg`,
    datainput: `${BASE}/datainput.jpg`,
    upload: `${BASE}/upload.jpg`,
    datetime: `${BASE}/datetime.jpg`,
    status: `${BASE}/status.jpg`,
    entry: `${BASE}/entry.jpg`,
  },
  layouts: [
    // S1 — menu drawer open over the dashboard, Data Input row highlighted.
    {
      mode: 'detail', screenshot: 'menu', caption: 'Open Data Input from the menu',
      spotlight: { top: '39%', left: '0%', width: '19%', height: '9%' },
      cursor: [
        { at: 0, x: 20, y: 6 },
        { at: 0.5, x: 8, y: 35 },
        { at: 0.85, x: 6, y: 44, click: true },
      ],
    },
    // S2 — the Data Input page; spotlight on Entry Date & Time (defaults to now).
    {
      mode: 'detail', screenshot: 'datainput', caption: 'Entry Date & Time decides when it is saved',
      spotlight: { top: '24%', left: '83%', width: '16.5%', height: '13%' },
      cursor: [
        { at: 0, x: 20, y: 55 },
        { at: 0.35, x: 50, y: 55 },
        { at: 0.8, x: 92, y: 31 },
      ],
    },
    // S3 — Upload File dialog (opened, then closed, in the recording).
    {
      mode: 'detail', screenshot: 'upload', caption: 'Upload File — for a whole sheet',
      spotlight: { top: '16%', left: '33.5%', width: '34.5%', height: '68%' },
      cursor: [
        { at: 0, x: 95, y: 20 },
        { at: 0.4, x: 51, y: 61 },
        { at: 0.85, x: 65, y: 24, click: true },
      ],
    },
    // S4 — calendar + time columns: 13 Nov, 12 : 00 PM.
    {
      mode: 'detail', screenshot: 'datetime', caption: 'Pick the past date and time',
      spotlight: { top: '36.5%', left: '62%', width: '38%', height: '63.5%' },
      cursor: [
        { at: 0, x: 97, y: 31, click: true },
        { at: 0.3, x: 81, y: 64, click: true },
        { at: 0.55, x: 89.6, y: 40.7, click: true },
        { at: 0.72, x: 94, y: 40.7, click: true },
        { at: 0.88, x: 98.5, y: 40.7, click: true },
      ],
    },
    // S5 — amber Backdated-entry banner + Back to today; table scrolled to Status.
    {
      mode: 'detail', screenshot: 'status', caption: 'The banner confirms the backdated slot',
      spotlight: { top: '37%', left: '2%', width: '97%', height: '10%' },
      cursor: [
        { at: 0, x: 23, y: 42 },
        { at: 0.35, x: 94, y: 42 },
        { at: 0.65, x: 84, y: 63 },
        { at: 0.85, x: 95, y: 63 },
      ],
    },
    // S6 — value typed into Silica Water Quality Boiler, with tick / cross.
    {
      mode: 'detail', screenshot: 'entry', caption: 'Enter the reading — tick to save',
      spotlight: { top: '59%', left: '42%', width: '16%', height: '9%' },
      cursor: [
        { at: 0, x: 46, y: 63.6, click: true },
        { at: 0.35, x: 30, y: 61 },
        { at: 0.6, x: 53, y: 63.6 },
        { at: 0.85, x: 55.2, y: 63.6, click: true },
      ],
    },
    // S7 — wrap.
    {
      mode: 'detail', screenshot: 'datetime', caption: 'Missed a day? Five clicks',
      spotlight: null,
      cursor: [
        { at: 0, x: 80, y: 40 },
        { at: 0.6, x: 92, y: 31 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Logging a reading<br><em>for a past date.</em>',
      subtitle:
        'A quick walkthrough for Hindalco Mahaan — missed a reading? Data Input lets you save it against the exact past date and time it belongs to.',
      chapter: 'Personalized demo · Hindalco Mahaan',
      steps: [
        {
          label: 'Data Input', title: 'Open Data Input from the menu',
          body: "From your dashboard, open the <strong>menu</strong> at the top-left. Alongside <strong>Dashboard, Inventory, Insight List</strong> and <strong>ScadaView</strong>, click <strong>Data Input</strong> — the page for every reading that's entered by hand.",
          voice: "Missed logging a reading? Here's how to save it for the day it belongs to. From your dashboard, open the menu at the top left, and click Data Input.",
        },
        {
          label: 'Entry date', title: 'Entry Date & Time decides when it is saved',
          body: "Each row is one sensor — its <strong>Valid</strong> and <strong>Safe</strong> ranges, an <strong>Enter Value</strong> box, how <strong>often</strong> it's read and its <strong>last value</strong>. Narrow the list with <strong>Search Sensor, Asset(s)</strong> and <strong>Equipment</strong>. Top-right, <strong>Entry Date & Time</strong> is the moment your values are saved against — by default, right now.",
          voice: "Every row is one of your sensors, with its valid and safe ranges, a box to enter the value, and its last reading. The key field is top right — Entry Date and Time. Whatever it shows is the moment your values are saved against, and by default that's right now.",
        },
        {
          label: 'Upload File', title: 'Upload File — for a whole sheet',
          body: "<strong>Upload File</strong> opens the <strong>Data Input Upload</strong> box, which takes a <strong>CSV or Excel</strong> file — drag it in or <strong>Browse</strong>. That's the route for a full sheet of readings. For one missed reading, close it with the <strong>×</strong>.",
          voice: "Upload File opens a box that takes a whole C S V or Excel sheet. That's handy for bulk readings. For a single missed reading, just close it.",
        },
        {
          label: 'Past date', title: 'Pick the past date and time',
          body: "Click the <strong>calendar</strong> in Entry Date & Time. Choose the day you missed — here <strong>13 November</strong> — then set the <strong>hour</strong>, <strong>minutes</strong> and <strong>AM / PM</strong> in the columns beside it: <strong>12 : 00 PM</strong>.",
          voice: "Click the calendar in Entry Date and Time. Pick the day you missed — here, the thirteenth of November. Then set the hour, the minutes, and A M or P M — twelve noon.",
        },
        {
          label: 'Banner', title: 'The banner confirms the backdated slot',
          body: "As soon as the date is in the past, an amber banner spells it out: <strong>Backdated entry — values you submit will be saved for 13 Nov 2026, 12:00 PM.</strong> <strong>Back to today</strong> resets it in one click. Scroll right and each sensor shows its <strong>Status</strong> — <strong>Pending</strong> here — with a history icon at the end of the row.",
          voice: "The moment the date is in the past, this amber banner confirms exactly where your values will land — the thirteenth of November, twelve noon. Back to today resets it in one click. Scroll right, and each sensor shows its status — pending here.",
          tip: { type: 'rememberLabel', text: 'Always read the banner before you submit — it names the exact date and time your values are saved for.' },
        },
        {
          label: 'Enter value', title: 'Enter the reading — tick to save',
          body: "Type the reading into <strong>Enter Value</strong>. The <strong>✓</strong> saves it against the backdated time; the <strong>✕</strong> cancels. Check the <strong>Valid Range</strong> beside it first — <strong>45</strong> is far outside <strong>0 – 2</strong> for Silica, so here it's cancelled.",
          voice: "Now type the reading into Enter Value. The tick saves it against that backdated time, and the cross cancels. Check the valid range first — forty-five is way outside zero to two for silica, so this one gets cancelled.",
        },
        {
          label: 'Recap', title: 'Missed a day? Five clicks',
          body: "<strong>Menu → Data Input → Entry Date & Time</strong> → pick the past date and time → check the <strong>amber banner</strong> → enter the value and <strong>✓</strong>. When you're done, hit <strong>Back to today</strong> so new readings go in at the current time.",
          voice: "That's it. Menu, Data Input, pick the past date and time, check the banner, then enter and tick. When you're finished, hit Back to today, so new readings are saved at the current time.",
          tip: { type: 'upNextLabel', text: 'Any missed reading, any past day — the same flow puts it in the right slot.' },
        },
      ],
    },
    hi: {
      title: 'पिछली तारीख़ के लिए<br><em>रीडिंग दर्ज करना।</em>',
      subtitle:
        'हिंडाल्को महान के लिए एक तेज़ वॉकथ्रू — कोई रीडिंग छूट गई? Data Input से उसे ठीक उसी पिछली तारीख़ और समय पर सहेजें जहाँ वह होनी चाहिए।',
      chapter: 'व्यक्तिगत डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'डेटा इनपुट', title: 'मेन्यू से Data Input खोलें',
          body: "अपने डैशबोर्ड से ऊपर-बाईं ओर का <strong>मेन्यू</strong> खोलें। <strong>Dashboard, Inventory, Insight List</strong> और <strong>ScadaView</strong> के साथ <strong>Data Input</strong> पर क्लिक करें — हाथ से दर्ज हर रीडिंग का पेज।",
          voice: "कोई रीडिंग दर्ज करना छूट गया? देखिए उसे उसी दिन के लिए कैसे सहेजें जिसकी वह है। अपने डैशबोर्ड से, ऊपर बाईं ओर का मेन्यू खोलें, और डेटा इनपुट पर क्लिक करें।",
        },
        {
          label: 'एंट्री तारीख़', title: 'Entry Date & Time तय करता है कब सहेजा जाए',
          body: "हर पंक्ति एक सेंसर है — उसकी <strong>Valid</strong> और <strong>Safe</strong> रेंज, एक <strong>Enter Value</strong> बॉक्स, वह कितनी <strong>बार</strong> पढ़ा जाता है और उसका <strong>पिछला मान</strong>। <strong>Search Sensor, Asset(s)</strong> और <strong>Equipment</strong> से सूची छोटी करें। ऊपर-दाईं ओर <strong>Entry Date & Time</strong> वह पल है जिस पर आपके मान सहेजे जाते हैं — डिफ़ॉल्ट रूप से, अभी।",
          voice: "हर पंक्ति आपका एक सेंसर है, उसकी वैलिड और सेफ रेंज, मान भरने का बॉक्स, और उसकी पिछली रीडिंग के साथ। सबसे ज़रूरी फ़ील्ड ऊपर दाईं ओर है — एंट्री डेट एंड टाइम। इसमें जो दिखता है, उसी पल पर आपके मान सहेजे जाते हैं, और डिफ़ॉल्ट रूप से वह है अभी।",
        },
        {
          label: 'अपलोड फ़ाइल', title: 'Upload File — पूरी शीट के लिए',
          body: "<strong>Upload File</strong> से <strong>Data Input Upload</strong> बॉक्स खुलता है, जो <strong>CSV या Excel</strong> फ़ाइल लेता है — खींचकर डालें या <strong>Browse</strong> करें। यह पूरी शीट की रीडिंग का रास्ता है। एक छूटी रीडिंग के लिए इसे <strong>×</strong> से बंद करें।",
          voice: "अपलोड फ़ाइल एक बॉक्स खोलता है जो पूरी सी एस वी या एक्सेल शीट लेता है। ढेर सारी रीडिंग के लिए यह काम का है। एक छूटी रीडिंग के लिए, इसे बस बंद कर दें।",
        },
        {
          label: 'पिछली तारीख़', title: 'पिछली तारीख़ और समय चुनें',
          body: "Entry Date & Time में <strong>कैलेंडर</strong> पर क्लिक करें। छूटा दिन चुनें — यहाँ <strong>13 नवंबर</strong> — फिर बगल के कॉलम में <strong>घंटा</strong>, <strong>मिनट</strong> और <strong>AM / PM</strong> सेट करें: <strong>12 : 00 PM</strong>।",
          voice: "एंट्री डेट एंड टाइम में कैलेंडर पर क्लिक करें। जो दिन छूटा था वह चुनें — यहाँ, तेरह नवंबर। फिर घंटा, मिनट, और ए एम या पी एम सेट करें — दोपहर बारह बजे।",
        },
        {
          label: 'बैनर', title: 'बैनर पिछली तारीख़ की पुष्टि करता है',
          body: "तारीख़ पीछे जाते ही एक एम्बर बैनर साफ़ बताता है: <strong>Backdated entry — values you submit will be saved for 13 Nov 2026, 12:00 PM.</strong> <strong>Back to today</strong> एक क्लिक में वापस ले आता है। दाईं ओर स्क्रॉल करें तो हर सेंसर का <strong>Status</strong> दिखता है — यहाँ <strong>Pending</strong> — और पंक्ति के अंत में एक हिस्ट्री आइकन।",
          voice: "तारीख़ पीछे जाते ही, यह एम्बर बैनर पक्का करता है कि आपके मान ठीक कहाँ जाएँगे — तेरह नवंबर, दोपहर बारह बजे। बैक टू टुडे एक क्लिक में इसे वापस ले आता है। दाईं ओर स्क्रॉल करें, तो हर सेंसर का स्टेटस दिखता है — यहाँ पेंडिंग।",
          tip: { type: 'rememberLabel', text: 'सबमिट करने से पहले हमेशा बैनर पढ़ें — उसमें ठीक वह तारीख़ और समय लिखा है जिस पर मान सहेजे जाएँगे।' },
        },
        {
          label: 'मान भरें', title: 'रीडिंग भरें — सहेजने के लिए टिक',
          body: "<strong>Enter Value</strong> में रीडिंग टाइप करें। <strong>✓</strong> उसे पिछली तारीख़ के समय पर सहेजता है; <strong>✕</strong> रद्द करता है। पहले बगल की <strong>Valid Range</strong> देखें — Silica के लिए <strong>45</strong>, <strong>0 – 2</strong> से बहुत बाहर है, इसलिए यहाँ इसे रद्द किया गया।",
          voice: "अब एंटर वैल्यू में रीडिंग टाइप करें। टिक उसे उस पिछली तारीख़ के समय पर सहेजता है, और क्रॉस रद्द करता है। पहले वैलिड रेंज देख लें — सिलिका के लिए पैंतालीस, शून्य से दो के बहुत बाहर है, इसलिए इसे रद्द किया गया।",
        },
        {
          label: 'सारांश', title: 'कोई दिन छूटा? पाँच क्लिक',
          body: "<strong>मेन्यू → Data Input → Entry Date & Time</strong> → पिछली तारीख़ और समय चुनें → <strong>एम्बर बैनर</strong> जाँचें → मान भरें और <strong>✓</strong>। काम पूरा होने पर <strong>Back to today</strong> दबाएँ ताकि नई रीडिंग मौजूदा समय पर जाएँ।",
          voice: "बस इतना ही। मेन्यू, डेटा इनपुट, पिछली तारीख़ और समय चुनें, बैनर जाँचें, फिर मान भरें और टिक करें। काम पूरा होने पर बैक टू टुडे दबाएँ, ताकि नई रीडिंग मौजूदा समय पर सहेजी जाएँ।",
          tip: { type: 'upNextLabel', text: 'कोई भी छूटी रीडिंग, कोई भी पिछला दिन — यही तरीका उसे सही जगह रखता है।' },
        },
      ],
    },
    ta: {
      title: 'கடந்த தேதிக்கு<br><em>அளவீட்டைப் பதிவு செய்தல்.</em>',
      subtitle:
        'ஹிண்டால்கோ மஹானுக்கான ஒரு விரைவு நடைப்பயணம் — ஒரு அளவீடு தவறியதா? Data Input அதை அது சேர வேண்டிய சரியான கடந்த தேதி, நேரத்தில் சேமிக்க உதவுகிறது.',
      chapter: 'தனிப்பயன் டெமோ · ஹிண்டால்கோ மஹான்',
      steps: [
        {
          label: 'டேட்டா இன்புட்', title: 'மெனுவிலிருந்து Data Input-ஐ திறக்கவும்',
          body: "உங்கள் டாஷ்போர்டிலிருந்து மேல்-இடதில் உள்ள <strong>மெனுவைத்</strong> திறங்கள். <strong>Dashboard, Inventory, Insight List</strong> மற்றும் <strong>ScadaView</strong>-உடன் இருக்கும் <strong>Data Input</strong>-ஐக் கிளிக் செய்யுங்கள் — கையால் பதியும் ஒவ்வொரு அளவீட்டின் பக்கம்.",
          voice: "ஒரு அளவீட்டைப் பதிய மறந்துவிட்டீர்களா? அது சேர வேண்டிய நாளுக்கே அதை எப்படிச் சேமிப்பது என்று பாருங்கள். உங்கள் டாஷ்போர்டிலிருந்து, மேல் இடதில் உள்ள மெனுவைத் திறந்து, டேட்டா இன்புட்டைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'பதிவு தேதி', title: 'Entry Date & Time எப்போது சேமிப்பது என்பதை முடிவு செய்கிறது',
          body: "ஒவ்வொரு வரிசையும் ஒரு சென்சார் — அதன் <strong>Valid</strong>, <strong>Safe</strong> வரம்புகள், ஒரு <strong>Enter Value</strong> பெட்டி, எத்தனை <strong>முறை</strong> படிக்கப்படுகிறது, அதன் <strong>கடைசி மதிப்பு</strong>. <strong>Search Sensor, Asset(s)</strong>, <strong>Equipment</strong> மூலம் பட்டியலைச் சுருக்கலாம். மேல்-வலதில் <strong>Entry Date & Time</strong> தான் உங்கள் மதிப்புகள் சேமிக்கப்படும் நேரம் — இயல்பாக, இப்போது.",
          voice: "ஒவ்வொரு வரிசையும் உங்கள் ஒரு சென்சார் — அதன் வேலிட், சேஃப் வரம்புகள், மதிப்பை உள்ளிடும் பெட்டி, அதன் கடைசி அளவீடு. முக்கியமான புலம் மேல் வலதில் — என்ட்ரி டேட் அண்ட் டைம். அதில் காட்டும் நேரத்தில்தான் உங்கள் மதிப்புகள் சேமிக்கப்படும், இயல்பாக அது இப்போது.",
        },
        {
          label: 'அப்லோட் ஃபைல்', title: 'Upload File — ஒரு முழுத் தாளுக்கு',
          body: "<strong>Upload File</strong> ஒரு <strong>Data Input Upload</strong> பெட்டியைத் திறக்கும்; அது <strong>CSV அல்லது Excel</strong> கோப்பை ஏற்கும் — இழுத்து விடுங்கள் அல்லது <strong>Browse</strong>. முழுத் தாள் அளவீடுகளுக்கு இதுதான் வழி. ஒரு தவறிய அளவீட்டுக்கு, <strong>×</strong> கொண்டு மூடுங்கள்.",
          voice: "அப்லோட் ஃபைல் ஒரு முழு சி எஸ் வி அல்லது எக்செல் தாளை ஏற்கும் பெட்டியைத் திறக்கிறது. மொத்த அளவீடுகளுக்கு இது உதவும். ஒரே ஒரு தவறிய அளவீட்டுக்கு, அதை மூடிவிடுங்கள்.",
        },
        {
          label: 'கடந்த தேதி', title: 'கடந்த தேதியையும் நேரத்தையும் தேர்ந்தெடுங்கள்',
          body: "Entry Date & Time-இல் உள்ள <strong>நாட்காட்டியைக்</strong> கிளிக் செய்யுங்கள். தவறிய நாளைத் தேர்ந்தெடுங்கள் — இங்கே <strong>நவம்பர் 13</strong> — பின் அருகிலுள்ள நெடுவரிசைகளில் <strong>மணி</strong>, <strong>நிமிடம்</strong>, <strong>AM / PM</strong> அமைக்கவும்: <strong>12 : 00 PM</strong>.",
          voice: "என்ட்ரி டேட் அண்ட் டைமில் உள்ள நாட்காட்டியைக் கிளிக் செய்யுங்கள். தவறிய நாளைத் தேர்ந்தெடுங்கள் — இங்கே, நவம்பர் பதின்மூன்று. பின் மணி, நிமிடம், ஏ எம் அல்லது பி எம் அமைக்கவும் — மதியம் பன்னிரண்டு மணி.",
        },
        {
          label: 'பேனர்', title: 'பேனர் கடந்த நேர இடத்தை உறுதிசெய்கிறது',
          body: "தேதி கடந்ததாக மாறியவுடன் ஒரு அம்பர் பேனர் தெளிவாகச் சொல்கிறது: <strong>Backdated entry — values you submit will be saved for 13 Nov 2026, 12:00 PM.</strong> <strong>Back to today</strong> ஒரே கிளிக்கில் திருப்பிவிடும். வலப்புறம் உருட்டினால் ஒவ்வொரு சென்சாரின் <strong>Status</strong> தெரியும் — இங்கே <strong>Pending</strong> — வரிசையின் முடிவில் ஒரு வரலாறு ஐகானுடன்.",
          voice: "தேதி கடந்ததாக மாறியவுடன், உங்கள் மதிப்புகள் சரியாக எங்கே சேரும் என்பதை இந்த அம்பர் பேனர் உறுதிசெய்கிறது — நவம்பர் பதின்மூன்று, மதியம் பன்னிரண்டு மணி. பேக் டு டுடே ஒரே கிளிக்கில் திருப்பிவிடும். வலப்புறம் உருட்டினால், ஒவ்வொரு சென்சாரின் நிலை தெரியும் — இங்கே பெண்டிங்.",
          tip: { type: 'rememberLabel', text: 'சமர்ப்பிப்பதற்கு முன் எப்போதும் பேனரைப் படியுங்கள் — மதிப்புகள் சேமிக்கப்படும் சரியான தேதியும் நேரமும் அதில் உள்ளது.' },
        },
        {
          label: 'மதிப்பு உள்ளிடு', title: 'அளவீட்டை உள்ளிடுங்கள் — சேமிக்க டிக்',
          body: "<strong>Enter Value</strong>-இல் அளவீட்டைத் தட்டச்சு செய்யுங்கள். <strong>✓</strong> அதைக் கடந்த நேரத்தில் சேமிக்கும்; <strong>✕</strong> ரத்து செய்யும். முதலில் அருகிலுள்ள <strong>Valid Range</strong>-ஐப் பாருங்கள் — Silica-வுக்கு <strong>45</strong> என்பது <strong>0 – 2</strong>-க்கு வெகு வெளியே, எனவே இங்கே ரத்து செய்யப்படுகிறது.",
          voice: "இப்போது என்டர் வேல்யூவில் அளவீட்டைத் தட்டச்சு செய்யுங்கள். டிக் அதை அந்தக் கடந்த நேரத்தில் சேமிக்கும், கிராஸ் ரத்து செய்யும். முதலில் வேலிட் வரம்பைப் பாருங்கள் — சிலிக்காவுக்கு நாற்பத்தைந்து, பூஜ்யம் முதல் இரண்டுக்கு வெகு வெளியே, எனவே இது ரத்து செய்யப்படுகிறது.",
        },
        {
          label: 'சுருக்கம்', title: 'ஒரு நாள் தவறியதா? ஐந்து கிளிக்குகள்',
          body: "<strong>மெனு → Data Input → Entry Date & Time</strong> → கடந்த தேதி, நேரம் தேர்வு → <strong>அம்பர் பேனரைச்</strong> சரிபார் → மதிப்பை உள்ளிட்டு <strong>✓</strong>. முடிந்ததும் <strong>Back to today</strong> அழுத்துங்கள், புதிய அளவீடுகள் தற்போதைய நேரத்தில் சேர.",
          voice: "அவ்வளவுதான். மெனு, டேட்டா இன்புட், கடந்த தேதி நேரம் தேர்வு, பேனரைச் சரிபார்த்து, மதிப்பை உள்ளிட்டு டிக். முடிந்ததும், பேக் டு டுடே அழுத்துங்கள், புதிய அளவீடுகள் தற்போதைய நேரத்தில் சேமிக்கப்படும்.",
          tip: { type: 'upNextLabel', text: 'எந்தத் தவறிய அளவீடும், எந்தக் கடந்த நாளும் — இதே வழி அதைச் சரியான இடத்தில் வைக்கும்.' },
        },
      ],
    },
    mr: {
      title: 'मागील तारखेसाठी<br><em>रीडिंग नोंदवणे.</em>',
      subtitle:
        'हिंडाल्को महानसाठी एक झटपट वॉकथ्रू — एखादी रीडिंग राहिली? Data Input मधून ती नेमक्या त्या मागील तारखेला आणि वेळेला जतन करा जिथे ती हवी.',
      chapter: 'वैयक्तिक डेमो · हिंडाल्को महान',
      steps: [
        {
          label: 'डेटा इनपुट', title: 'मेनूमधून Data Input उघडा',
          body: "तुमच्या डॅशबोर्डवरून वर-डावीकडचा <strong>मेनू</strong> उघडा. <strong>Dashboard, Inventory, Insight List</strong> आणि <strong>ScadaView</strong> सोबत असलेल्या <strong>Data Input</strong> वर क्लिक करा — हाताने भरल्या जाणाऱ्या प्रत्येक रीडिंगचे पान.",
          voice: "एखादी रीडिंग नोंदवायची राहिली? ती ज्या दिवसाची आहे त्याच दिवसासाठी कशी जतन करायची ते पाहूया. तुमच्या डॅशबोर्डवरून, वर डावीकडचा मेनू उघडा, आणि डेटा इनपुटवर क्लिक करा.",
        },
        {
          label: 'एंट्री तारीख', title: 'Entry Date & Time ठरवते कधी जतन व्हावे',
          body: "प्रत्येक पंक्ती एक सेन्सर — त्याची <strong>Valid</strong> व <strong>Safe</strong> श्रेणी, एक <strong>Enter Value</strong> बॉक्स, तो किती <strong>वेळा</strong> वाचला जातो आणि त्याचे <strong>शेवटचे मूल्य</strong>. <strong>Search Sensor, Asset(s)</strong> आणि <strong>Equipment</strong> ने यादी लहान करा. वर-उजवीकडे <strong>Entry Date & Time</strong> म्हणजे तुमची मूल्ये ज्या क्षणी जतन होतात तो — डिफॉल्टने, आत्ता.",
          voice: "प्रत्येक पंक्ती तुमचा एक सेन्सर आहे, त्याची व्हॅलिड व सेफ श्रेणी, मूल्य भरण्याचा बॉक्स, आणि त्याची शेवटची रीडिंग. महत्त्वाचे फील्ड वर उजवीकडे आहे — एंट्री डेट अँड टाइम. त्यात जे दिसते, त्याच क्षणी तुमची मूल्ये जतन होतात, आणि डिफॉल्टने तो क्षण आत्ताचा असतो.",
        },
        {
          label: 'अपलोड फाइल', title: 'Upload File — पूर्ण शीटसाठी',
          body: "<strong>Upload File</strong> ने <strong>Data Input Upload</strong> बॉक्स उघडतो, जो <strong>CSV किंवा Excel</strong> फाइल घेतो — ओढून टाका किंवा <strong>Browse</strong> करा. पूर्ण शीटभर रीडिंगसाठी हा मार्ग. एका राहिलेल्या रीडिंगसाठी तो <strong>×</strong> ने बंद करा.",
          voice: "अपलोड फाइल एक बॉक्स उघडतो जो पूर्ण सी एस व्ही किंवा एक्सेल शीट घेतो. एकदम बऱ्याच रीडिंगसाठी तो उपयोगी आहे. एका राहिलेल्या रीडिंगसाठी, तो फक्त बंद करा.",
        },
        {
          label: 'मागील तारीख', title: 'मागील तारीख आणि वेळ निवडा',
          body: "Entry Date & Time मधील <strong>कॅलेंडर</strong> वर क्लिक करा. राहिलेला दिवस निवडा — इथे <strong>13 नोव्हेंबर</strong> — मग शेजारच्या कॉलममध्ये <strong>तास</strong>, <strong>मिनिटे</strong> आणि <strong>AM / PM</strong> सेट करा: <strong>12 : 00 PM</strong>.",
          voice: "एंट्री डेट अँड टाइम मधील कॅलेंडरवर क्लिक करा. राहिलेला दिवस निवडा — इथे, तेरा नोव्हेंबर. मग तास, मिनिटे, आणि ए एम किंवा पी एम सेट करा — दुपारी बारा वाजता.",
        },
        {
          label: 'बॅनर', title: 'बॅनर मागील वेळेची खात्री देतो',
          body: "तारीख मागे जाताच एक अंबर बॅनर स्पष्ट सांगतो: <strong>Backdated entry — values you submit will be saved for 13 Nov 2026, 12:00 PM.</strong> <strong>Back to today</strong> एका क्लिकमध्ये परत आणते. उजवीकडे स्क्रोल केल्यावर प्रत्येक सेन्सरचा <strong>Status</strong> दिसतो — इथे <strong>Pending</strong> — आणि पंक्तीच्या शेवटी एक हिस्टरी आयकन.",
          voice: "तारीख मागे जाताच, हा अंबर बॅनर खात्री देतो की तुमची मूल्ये नेमकी कुठे जातील — तेरा नोव्हेंबर, दुपारी बारा वाजता. बॅक टू टुडे एका क्लिकमध्ये परत आणते. उजवीकडे स्क्रोल करा, आणि प्रत्येक सेन्सरचा स्टेटस दिसतो — इथे पेंडिंग.",
          tip: { type: 'rememberLabel', text: 'सबमिट करण्याआधी नेहमी बॅनर वाचा — मूल्ये ज्या नेमक्या तारखेला आणि वेळेला जतन होतील ती त्यात लिहिलेली असते.' },
        },
        {
          label: 'मूल्य भरा', title: 'रीडिंग भरा — जतन करण्यासाठी टिक',
          body: "<strong>Enter Value</strong> मध्ये रीडिंग टाइप करा. <strong>✓</strong> ती मागील वेळेवर जतन करते; <strong>✕</strong> रद्द करते. आधी शेजारची <strong>Valid Range</strong> पाहा — Silica साठी <strong>45</strong> हे <strong>0 – 2</strong> च्या खूप बाहेर आहे, म्हणून इथे ते रद्द केले.",
          voice: "आता एंटर व्हॅल्यूमध्ये रीडिंग टाइप करा. टिक ती त्या मागील वेळेवर जतन करते, आणि क्रॉस रद्द करते. आधी व्हॅलिड श्रेणी पाहा — सिलिकासाठी पंचेचाळीस, शून्य ते दोनच्या खूप बाहेर आहे, म्हणून हे रद्द केले जाते.",
        },
        {
          label: 'सारांश', title: 'एखादा दिवस राहिला? पाच क्लिक',
          body: "<strong>मेनू → Data Input → Entry Date & Time</strong> → मागील तारीख व वेळ निवडा → <strong>अंबर बॅनर</strong> तपासा → मूल्य भरा आणि <strong>✓</strong>. झाल्यावर <strong>Back to today</strong> दाबा, म्हणजे नवीन रीडिंग सध्याच्या वेळेवर जातील.",
          voice: "इतकेच. मेनू, डेटा इनपुट, मागील तारीख व वेळ निवडा, बॅनर तपासा, मग मूल्य भरा आणि टिक करा. झाल्यावर, बॅक टू टुडे दाबा, म्हणजे नवीन रीडिंग सध्याच्या वेळेवर जतन होतील.",
          tip: { type: 'upNextLabel', text: 'कोणतीही राहिलेली रीडिंग, कोणताही मागील दिवस — हाच मार्ग ती योग्य ठिकाणी ठेवतो.' },
        },
      ],
    },
  },
};

export default lesson;
