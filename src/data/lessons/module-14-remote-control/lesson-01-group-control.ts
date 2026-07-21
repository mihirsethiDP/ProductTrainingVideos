import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/remote-control`;

/**
 * M14 · Remote Control — L1: Group Control on the plant. (all roles)
 * Built from the monitoring-team screen recording. Real 1280px frames as detail
 * screenshots, spotlight-driven (no guide cursor). Orientation lesson: open Group
 * Control, read the Control groups panel, find a group on the plant diagram, and
 * check its mode — before L2 takes control.
 */
const lesson: Lesson = {
  id: 'remote-control-groups',
  moduleId: 'module-14-remote-control',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {
    groups: `${BASE}/groups.jpg`,
    mode: `${BASE}/mode.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'groups', caption: 'Open Group Control',
      spotlight: { top: '11.5%', left: '75.5%', width: '7%', height: '5.5%' },
    },
    {
      mode: 'detail', screenshot: 'groups', caption: 'The Control groups panel',
      spotlight: { top: '26%', left: '77.5%', width: '21%', height: '27%' },
    },
    {
      mode: 'detail', screenshot: 'groups', caption: 'Find it on the plant',
      spotlight: { top: '50%', left: '53%', width: '16%', height: '22%' },
    },
    {
      mode: 'detail', screenshot: 'mode', caption: 'Open a group — Remote or Auto',
      spotlight: { top: '45%', left: '79%', width: '19%', height: '12%' },
    },
  ],
  content: {
    en: {
      title: 'Remote Control:<br><em>Group Control.</em>',
      subtitle:
        'Operate plant equipment straight from the SCADA screen — one piece at a time, or a whole group at once. This first lesson is the lay of the land: opening Group Control and reading what it shows you.',
      chapter: 'Remote Control · On the plant',
      steps: [
        {
          label: 'Open it', title: 'Open Group Control',
          body: "<strong>Remote Control</strong> lets you change equipment at a plant right from the live SCADA screen — turn one equipment On or Off, or switch a whole group between modes. It starts with one button on the plant's top bar: <strong>Group Control</strong>. Click it and a panel slides in from the right.",
          voice: "Remote Control lets you operate a plant's equipment straight from the live SCADA screen — turning a single equipment on or off, or switching a whole group of them between modes. It all starts with one button on the plant's top bar: Group Control. Click it, and a panel slides in from the right.",
        },
        {
          label: 'The panel', title: 'The Control groups panel',
          body: "The panel lists every <strong>control group</strong> set up for this plant — a named set of equipment you operate together, like <strong>Softener-1</strong> or <strong>Membrane Tank-1</strong>. Each row shows how many <strong>equipments</strong> it holds. Groups are configured once (internal users do that in the next lesson); after that, everyone controls them from here.",
          voice: "The panel lists every control group set up for this plant. A control group is simply a named set of equipment you operate together — here, Softener-1, Softener-2, and two Membrane Tanks. Each row tells you how many equipments the group holds. Groups are set up once — internal users do that in the configuration lesson — and after that, anyone with access controls them from this panel.",
        },
        {
          label: 'Find it', title: 'Find it on the plant',
          body: "Hover a group — or one of its equipment — in the panel and the plant diagram slides over and <strong>highlights</strong> exactly that equipment, so you always see what you're about to control. Hovering equipment directly on the diagram highlights it in place without moving the view, keeping it easy to click.",
          voice: "You never control something you can't see. Hover a group, or one of its equipment, in the panel — and the plant diagram slides over and highlights exactly that equipment. Here, Softener-1 lights up with all its valves and pumps. Hovering equipment directly on the diagram highlights it in place without moving the view, so it stays easy to click.",
          tip: { type: 'noteLabel', text: 'If a group’s equipment isn’t drawn on the current layout, its header notes “N members not on this layout” — informational only.' },
        },
        {
          label: 'The mode', title: 'Open a group — Remote or Auto',
          body: "Expand a group to see two things. First, its <strong>mode</strong>: <strong>Remote</strong> (you are in control — manual commands allowed) or <strong>Auto</strong> (automation is in control — manual commands are off). Second, each <strong>equipment's</strong> live On / Off status, ready to open. That mode is the gate for everything you do next.",
          voice: "Expand a group and you see two things. First, the group's mode. Remote means you are in control — manual commands are allowed. Auto means automation is in control, and manual commands are switched off until you hand control back to yourself. Second, you see each equipment's live on-or-off status. That mode — Remote or Auto — is the gate for everything you do next.",
          tip: { type: 'upNextLabel', text: 'Next: take a group into Remote mode and turn equipment on and off.' },
        },
      ],
    },
    hi: {
      title: 'Remote Control:<br><em>Group Control.</em>',
      subtitle:
        'प्लांट के उपकरण सीधे SCADA स्क्रीन से चलाएँ — एक बार में एक, या पूरा ग्रुप एक साथ। यह पहला पाठ पूरे लेआउट का परिचय है: Group Control खोलना और वह क्या दिखाता है, यह पढ़ना।',
      chapter: 'Remote Control · प्लांट पर',
      steps: [
        {
          label: 'इसे खोलें', title: 'Group Control खोलें',
          body: "<strong>Remote Control</strong> आपको प्लांट के उपकरण सीधे लाइव SCADA स्क्रीन से बदलने देता है — किसी एक उपकरण को On या Off करें, या पूरे ग्रुप का मोड बदलें। यह प्लांट की ऊपरी पट्टी पर एक बटन से शुरू होता है: <strong>Group Control</strong>। उस पर क्लिक करें और दाईं ओर से एक पैनल आ जाता है।",
          voice: "Remote Control आपको प्लांट के उपकरण सीधे लाइव SCADA स्क्रीन से चलाने देता है — किसी एक उपकरण को on या off करना, या पूरे ग्रुप का मोड बदलना। यह सब प्लांट की ऊपरी पट्टी पर एक बटन से शुरू होता है: Group Control। उस पर क्लिक करें, और दाईं ओर से एक पैनल आ जाता है।",
        },
        {
          label: 'पैनल', title: 'Control groups पैनल',
          body: "पैनल इस प्लांट के हर <strong>control group</strong> की सूची देता है — उपकरणों का एक नामित समूह जिन्हें आप एक साथ चलाते हैं, जैसे <strong>Softener-1</strong> या <strong>Membrane Tank-1</strong>। हर पंक्ति बताती है उसमें कितने <strong>equipments</strong> हैं। ग्रुप एक बार कॉन्फ़िगर होते हैं (अगले पाठ में internal यूज़र करते हैं); उसके बाद हर कोई उन्हें यहीं से चलाता है।",
          voice: "पैनल इस प्लांट के हर control group की सूची देता है। control group बस उपकरणों का एक नामित समूह है जिन्हें आप एक साथ चलाते हैं — यहाँ Softener-1, Softener-2, और दो Membrane Tank। हर पंक्ति बताती है ग्रुप में कितने equipments हैं। ग्रुप एक बार सेट होते हैं — internal यूज़र यह configuration पाठ में करते हैं — और उसके बाद, एक्सेस वाला कोई भी इस पैनल से उन्हें चलाता है।",
        },
        {
          label: 'ढूँढें', title: 'इसे प्लांट पर ढूँढें',
          body: "पैनल में किसी ग्रुप — या उसके किसी उपकरण — पर होवर करें और प्लांट डायग्राम सरककर ठीक उसी उपकरण को <strong>हाइलाइट</strong> करता है, ताकि आप हमेशा देखें कि आप क्या नियंत्रित करने वाले हैं। डायग्राम पर सीधे उपकरण पर होवर करने से वह अपनी जगह हाइलाइट होता है, व्यू हिलता नहीं — क्लिक करना आसान रहता है।",
          voice: "आप वह कभी नियंत्रित नहीं करते जो आपको दिख न रहा हो। पैनल में किसी ग्रुप, या उसके किसी उपकरण, पर होवर करें — और प्लांट डायग्राम सरककर ठीक उसी उपकरण को हाइलाइट करता है। यहाँ, Softener-1 अपने सभी वाल्व और पंप के साथ रोशन हो जाता है। डायग्राम पर सीधे उपकरण पर होवर करने से वह अपनी जगह हाइलाइट होता है, व्यू हिलता नहीं, तो क्लिक करना आसान रहता है।",
          tip: { type: 'noteLabel', text: 'अगर किसी ग्रुप के उपकरण मौजूदा लेआउट पर नहीं बने हैं, तो उसके हेडर पर “N members not on this layout” लिखा दिखता है — केवल सूचना के लिए।' },
        },
        {
          label: 'मोड', title: 'ग्रुप खोलें — Remote या Auto',
          body: "किसी ग्रुप को विस्तृत करें और दो चीज़ें दिखती हैं। पहला, उसका <strong>मोड</strong>: <strong>Remote</strong> (आप नियंत्रण में हैं — मैनुअल कमांड चलती हैं) या <strong>Auto</strong> (ऑटोमेशन नियंत्रण में है — मैनुअल कमांड बंद)। दूसरा, हर <strong>equipment</strong> की लाइव On / Off स्थिति, खोलने के लिए तैयार। यह मोड आगे की हर चीज़ का द्वार है।",
          voice: "किसी ग्रुप को विस्तृत करें और दो चीज़ें दिखती हैं। पहला, ग्रुप का मोड। Remote का मतलब आप नियंत्रण में हैं — मैनुअल कमांड चलती हैं। Auto का मतलब ऑटोमेशन नियंत्रण में है, और मैनुअल कमांड तब तक बंद रहती हैं जब तक आप नियंत्रण वापस अपने पास न लें। दूसरा, आप हर उपकरण की लाइव on-या-off स्थिति देखते हैं। यह मोड — Remote या Auto — आगे की हर चीज़ का द्वार है।",
          tip: { type: 'upNextLabel', text: 'आगे: किसी ग्रुप को Remote मोड में लें और उपकरण on और off करें।' },
        },
      ],
    },
    ta: {
      title: 'Remote Control:<br><em>Group Control.</em>',
      subtitle:
        'ஆலை உபகரணங்களை நேரடியாக SCADA திரையிலிருந்து இயக்குங்கள் — ஒரு நேரத்தில் ஒன்று, அல்லது ஒரு முழு குழு ஒரே நேரத்தில். இந்த முதல் பாடம் அறிமுகம்: Group Control-ஐத் திறப்பதும், அது காட்டுவதைப் படிப்பதும்.',
      chapter: 'Remote Control · ஆலையில்',
      steps: [
        {
          label: 'திற', title: 'Group Control-ஐத் திற',
          body: "<strong>Remote Control</strong> ஆலை உபகரணங்களை நேரடியாக நேரலை SCADA திரையிலிருந்து மாற்ற அனுமதிக்கிறது — ஒரு உபகரணத்தை On அல்லது Off செய்யலாம், அல்லது ஒரு முழு குழுவின் பயன்முறையை மாற்றலாம். இது ஆலையின் மேல் பட்டியில் உள்ள ஒரு பொத்தானில் தொடங்குகிறது: <strong>Group Control</strong>. கிளிக் செய்தால் வலதுபுறமிருந்து ஒரு பேனல் வருகிறது.",
          voice: "Remote Control ஆலையின் உபகரணங்களை நேரடியாக நேரலை SCADA திரையிலிருந்து இயக்க அனுமதிக்கிறது — ஒரு உபகரணத்தை on அல்லது off செய்வது, அல்லது ஒரு முழு குழுவின் பயன்முறையை மாற்றுவது. இது எல்லாம் ஆலையின் மேல் பட்டியில் உள்ள ஒரு பொத்தானில் தொடங்குகிறது: Group Control. கிளிக் செய்யுங்கள், வலதுபுறமிருந்து ஒரு பேனல் வருகிறது.",
        },
        {
          label: 'பேனல்', title: 'Control groups பேனல்',
          body: "பேனல் இந்த ஆலைக்கு அமைக்கப்பட்ட ஒவ்வொரு <strong>control group</strong>-ஐயும் பட்டியலிடுகிறது — நீங்கள் ஒன்றாக இயக்கும் உபகரணங்களின் ஒரு பெயரிட்ட தொகுப்பு, <strong>Softener-1</strong> அல்லது <strong>Membrane Tank-1</strong> போல. ஒவ்வொரு வரிசையும் அதில் எத்தனை <strong>equipments</strong> உள்ளன எனக் காட்டுகிறது. குழுக்கள் ஒருமுறை அமைக்கப்படும் (internal பயனர்கள் அடுத்த பாடத்தில் செய்வர்); அதன்பின் அனைவரும் இங்கிருந்தே அவற்றை இயக்குவர்.",
          voice: "பேனல் இந்த ஆலைக்கு அமைக்கப்பட்ட ஒவ்வொரு control group-ஐயும் பட்டியலிடுகிறது. control group என்பது நீங்கள் ஒன்றாக இயக்கும் உபகரணங்களின் ஒரு பெயரிட்ட தொகுப்பு — இங்கே Softener-1, Softener-2, மற்றும் இரண்டு Membrane Tank. ஒவ்வொரு வரிசையும் குழுவில் எத்தனை equipments உள்ளன எனச் சொல்கிறது. குழுக்கள் ஒருமுறை அமைக்கப்படும் — internal பயனர்கள் அதை configuration பாடத்தில் செய்வர் — அதன்பின், அணுகல் உள்ள யாரும் இந்தப் பேனலிலிருந்து அவற்றை இயக்குவர்.",
        },
        {
          label: 'கண்டுபிடி', title: 'ஆலையில் கண்டுபிடி',
          body: "பேனலில் ஒரு குழு — அல்லது அதன் ஒரு உபகரணம் — மீது ஹோவர் செய்யுங்கள், ஆலை வரைபடம் நகர்ந்து சரியாக அந்த உபகரணத்தை <strong>தனிப்படுத்திக் காட்டும்</strong>, எனவே நீங்கள் எதைக் கட்டுப்படுத்தப் போகிறீர்கள் என்பது எப்போதும் தெரியும். வரைபடத்தில் நேரடியாக உபகரணத்தின் மீது ஹோவர் செய்தால் அது இருந்த இடத்திலேயே தனிப்படுத்தப்படும், காட்சி நகராது — கிளிக் செய்ய எளிதாக இருக்கும்.",
          voice: "உங்களுக்குத் தெரியாத ஒன்றை நீங்கள் ஒருபோதும் கட்டுப்படுத்துவதில்லை. பேனலில் ஒரு குழு, அல்லது அதன் ஒரு உபகரணம், மீது ஹோவர் செய்யுங்கள் — ஆலை வரைபடம் நகர்ந்து சரியாக அந்த உபகரணத்தைத் தனிப்படுத்திக் காட்டும். இங்கே, Softener-1 அதன் அனைத்து வால்வுகள், பம்புகளுடன் ஒளிரும். வரைபடத்தில் நேரடியாக உபகரணத்தின் மீது ஹோவர் செய்தால் அது இருந்த இடத்திலேயே தனிப்படுத்தப்படும், காட்சி நகராது, எனவே கிளிக் செய்ய எளிதாக இருக்கும்.",
          tip: { type: 'noteLabel', text: 'ஒரு குழுவின் உபகரணம் தற்போதைய லேஅவுட்டில் வரையப்படவில்லை எனில், அதன் தலைப்பில் “N members not on this layout” எனக் குறிக்கும் — தகவலுக்கு மட்டுமே.' },
        },
        {
          label: 'பயன்முறை', title: 'குழுவைத் திற — Remote அல்லது Auto',
          body: "ஒரு குழுவை விரிவாக்கினால் இரண்டு விஷயங்கள் தெரியும். முதலில், அதன் <strong>பயன்முறை</strong>: <strong>Remote</strong> (நீங்கள் கட்டுப்பாட்டில் — கைமுறை கட்டளைகள் அனுமதிக்கப்படும்) அல்லது <strong>Auto</strong> (தானியக்கம் கட்டுப்பாட்டில் — கைமுறை கட்டளைகள் அணைக்கப்படும்). இரண்டாவது, ஒவ்வொரு <strong>equipment</strong>-இன் நேரலை On / Off நிலை, திறக்கத் தயார். அந்தப் பயன்முறையே அடுத்து நீங்கள் செய்யும் அனைத்துக்கும் வாயில்.",
          voice: "ஒரு குழுவை விரிவாக்கினால் இரண்டு விஷயங்கள் தெரியும். முதலில், குழுவின் பயன்முறை. Remote என்றால் நீங்கள் கட்டுப்பாட்டில் — கைமுறை கட்டளைகள் அனுமதிக்கப்படும். Auto என்றால் தானியக்கம் கட்டுப்பாட்டில், நீங்கள் கட்டுப்பாட்டைத் திரும்பப் பெறும் வரை கைமுறை கட்டளைகள் அணைக்கப்படும். இரண்டாவது, ஒவ்வொரு உபகரணத்தின் நேரலை on-அல்லது-off நிலையைக் காண்பீர்கள். அந்தப் பயன்முறை — Remote அல்லது Auto — அடுத்து நீங்கள் செய்யும் அனைத்துக்கும் வாயில்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: ஒரு குழுவை Remote பயன்முறைக்குக் கொண்டுசென்று உபகரணங்களை on, off செய்யுங்கள்.' },
        },
      ],
    },
    mr: {
      title: 'Remote Control:<br><em>Group Control.</em>',
      subtitle:
        'प्लांटची उपकरणे थेट SCADA स्क्रीनवरून चालवा — एका वेळी एक, किंवा संपूर्ण ग्रुप एकाच वेळी. हा पहिला धडा म्हणजे संपूर्ण मांडणीची ओळख: Group Control उघडणे आणि ते काय दाखवते ते वाचणे.',
      chapter: 'Remote Control · प्लांटवर',
      steps: [
        {
          label: 'उघडा', title: 'Group Control उघडा',
          body: "<strong>Remote Control</strong> तुम्हाला प्लांटची उपकरणे थेट लाइव्ह SCADA स्क्रीनवरून बदलू देते — एखादे उपकरण On किंवा Off करा, किंवा संपूर्ण ग्रुपचा मोड बदला. हे प्लांटच्या वरच्या पट्टीवरील एका बटणाने सुरू होते: <strong>Group Control</strong>. त्यावर क्लिक करा आणि उजवीकडून एक पॅनेल येते.",
          voice: "Remote Control तुम्हाला प्लांटची उपकरणे थेट लाइव्ह SCADA स्क्रीनवरून चालवू देते — एखादे उपकरण on किंवा off करणे, किंवा संपूर्ण ग्रुपचा मोड बदलणे. हे सर्व प्लांटच्या वरच्या पट्टीवरील एका बटणाने सुरू होते: Group Control. त्यावर क्लिक करा, आणि उजवीकडून एक पॅनेल येते.",
        },
        {
          label: 'पॅनेल', title: 'Control groups पॅनेल',
          body: "पॅनेल या प्लांटसाठी सेट केलेल्या प्रत्येक <strong>control group</strong> ची यादी देते — तुम्ही एकत्र चालवता अशा उपकरणांचा एक नावाचा संच, जसे <strong>Softener-1</strong> किंवा <strong>Membrane Tank-1</strong>. प्रत्येक ओळ त्यात किती <strong>equipments</strong> आहेत ते दाखवते. ग्रुप एकदाच कॉन्फिगर होतात (पुढील धड्यात internal यूजर करतात); त्यानंतर प्रत्येकजण त्यांना इथूनच चालवतो.",
          voice: "पॅनेल या प्लांटसाठी सेट केलेल्या प्रत्येक control group ची यादी देते. control group म्हणजे तुम्ही एकत्र चालवता अशा उपकरणांचा एक नावाचा संच — इथे Softener-1, Softener-2, आणि दोन Membrane Tank. प्रत्येक ओळ ग्रुपमध्ये किती equipments आहेत ते सांगते. ग्रुप एकदाच सेट होतात — internal यूजर ते configuration धड्यात करतात — आणि त्यानंतर, एक्सेस असलेला कोणीही या पॅनेलवरून त्यांना चालवतो.",
        },
        {
          label: 'शोधा', title: 'प्लांटवर शोधा',
          body: "पॅनेलमध्ये एखाद्या ग्रुपवर — किंवा त्याच्या एखाद्या उपकरणावर — होव्हर करा आणि प्लांट डायग्राम सरकून नेमके तेच उपकरण <strong>हायलाइट</strong> करते, म्हणजे तुम्ही काय नियंत्रित करणार आहात ते नेहमी दिसते. डायग्रामवर थेट उपकरणावर होव्हर केल्यास ते जागच्या जागी हायलाइट होते, व्ह्यू हलत नाही — क्लिक करणे सोपे राहते.",
          voice: "तुम्हाला जे दिसत नाही ते तुम्ही कधीही नियंत्रित करत नाही. पॅनेलमध्ये एखाद्या ग्रुपवर, किंवा त्याच्या एखाद्या उपकरणावर, होव्हर करा — आणि प्लांट डायग्राम सरकून नेमके तेच उपकरण हायलाइट करते. इथे, Softener-1 त्याच्या सर्व व्हॉल्व्ह आणि पंपांसह उजळतो. डायग्रामवर थेट उपकरणावर होव्हर केल्यास ते जागच्या जागी हायलाइट होते, व्ह्यू हलत नाही, म्हणून क्लिक करणे सोपे राहते.",
          tip: { type: 'noteLabel', text: 'एखाद्या ग्रुपची उपकरणे सध्याच्या लेआउटवर काढलेली नसतील, तर त्याच्या हेडरवर “N members not on this layout” असे दिसते — फक्त माहितीसाठी.' },
        },
        {
          label: 'मोड', title: 'ग्रुप उघडा — Remote किंवा Auto',
          body: "एखादा ग्रुप विस्तृत करा आणि दोन गोष्टी दिसतात. पहिली, त्याचा <strong>मोड</strong>: <strong>Remote</strong> (तुम्ही नियंत्रणात — मॅन्युअल कमांड चालतात) किंवा <strong>Auto</strong> (ऑटोमेशन नियंत्रणात — मॅन्युअल कमांड बंद). दुसरी, प्रत्येक <strong>equipment</strong> ची लाइव्ह On / Off स्थिती, उघडायला तयार. हा मोड पुढील प्रत्येक गोष्टीचे प्रवेशद्वार आहे.",
          voice: "एखादा ग्रुप विस्तृत करा आणि दोन गोष्टी दिसतात. पहिली, ग्रुपचा मोड. Remote म्हणजे तुम्ही नियंत्रणात — मॅन्युअल कमांड चालतात. Auto म्हणजे ऑटोमेशन नियंत्रणात, आणि तुम्ही नियंत्रण परत स्वतःकडे घेईपर्यंत मॅन्युअल कमांड बंद राहतात. दुसरी, तुम्हाला प्रत्येक उपकरणाची लाइव्ह on-किंवा-off स्थिती दिसते. हा मोड — Remote किंवा Auto — पुढील प्रत्येक गोष्टीचे प्रवेशद्वार आहे.",
          tip: { type: 'upNextLabel', text: 'पुढे: एखादा ग्रुप Remote मोडमध्ये घ्या आणि उपकरणे on आणि off करा.' },
        },
      ],
    },
  },
};

export default lesson;
