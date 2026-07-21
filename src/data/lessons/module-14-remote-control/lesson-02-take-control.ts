import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/remote-control`;

/**
 * M14 · Remote Control — L2: take control. (all roles)
 * Switch a group into Remote mode, then control individual equipment On/Off with
 * live status. Covers the command flow (choose → confirm → processing → result),
 * the outcome states, and the permission gate. Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'remote-control-operate',
  moduleId: 'module-14-remote-control',
  lessonNumber: 2,
  estimatedMinutes: 5,
  screenshots: {
    mode: `${BASE}/mode.jpg`,
    equipments: `${BASE}/equipments.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'mode', caption: 'Remote vs Auto',
      spotlight: { top: '52%', left: '79%', width: '17.5%', height: '6%' },
    },
    {
      mode: 'detail', screenshot: 'mode', caption: 'Switch the group to Remote',
      spotlight: { top: '60%', left: '79%', width: '18%', height: '13%' },
    },
    {
      mode: 'detail', screenshot: 'equipments', caption: 'Control an equipment — live status',
      spotlight: { top: '65%', left: '79%', width: '19%', height: '7%' },
    },
    {
      mode: 'detail', screenshot: 'equipments', caption: 'Every command: confirm → processing → result',
      spotlight: { top: '54%', left: '78.5%', width: '20%', height: '44%' },
    },
    {
      mode: 'detail', screenshot: 'mode', caption: 'Permission & greyed-out controls',
      spotlight: { top: '45%', left: '79%', width: '19%', height: '28%' },
    },
  ],
  content: {
    en: {
      title: 'Remote Control:<br><em>take control.</em>',
      subtitle:
        'Two levels of control, one safe path. Switch a group between Remote and Auto, or turn a single equipment On and Off — always with a confirm step and a live status you can trust.',
      chapter: 'Remote Control · Taking action',
      steps: [
        {
          label: 'Two modes', title: 'Remote vs Auto',
          body: "A group is always in one of two modes, and it decides whether you can act. <strong>Auto</strong> — automation runs the equipment, and manual controls are off. <strong>Remote</strong> — you're in control, and manual commands are allowed. So the first move on any group in Auto is to switch it to Remote.",
          voice: "Before you can turn anything on or off, remember the group's mode, because it decides whether you can act at all. In Auto, automation runs the equipment and your manual controls are switched off. In Remote, you are in control and manual commands are allowed. So for any group sitting in Auto, the first move is to switch it to Remote.",
        },
        {
          label: 'Go Remote', title: 'Switch the group to Remote',
          body: "Tap <strong>Remote</strong>, and a short warning reminds you what it means: <em>Remote mode overrides automation and lets you control equipment manually.</em> Confirm with <strong>Switch to Remote</strong>. This is a <strong>group-level</strong> change — it hands every equipment in the group over to you at once.",
          voice: "To take control, tap Remote. A short warning reminds you what you're doing — Remote mode overrides automation and lets you control equipment manually. Confirm with Switch to Remote. Keep in mind this is a group-level change: it hands every equipment in the group over to you at once, not just one.",
          tip: { type: 'noteLabel', text: 'Use Refresh status any time to re-check the group and its equipment against the live plant.' },
        },
        {
          label: 'Control it', title: 'Control an equipment — live status',
          body: "With the group in Remote, the <strong>Equipments</strong> list comes alive. Each equipment shows its live <strong>On / Off status</strong> and a <strong>Control</strong> button. Open one — say a feed pump reading <strong>On</strong> — and you can turn it Off, or turn an Off one On. You act on exactly what the status shows.",
          voice: "With the group in Remote, the Equipments list comes alive. Each equipment shows its live status — On or Off — and a Control button. Open one; here Softener Feed Pump 1 is On. From there you can turn it Off, or take one that's Off and turn it On. You're always acting on exactly what the live status is telling you.",
        },
        {
          label: 'The flow', title: 'Every command: confirm → processing → result',
          body: "Whether you're switching a group's mode or flipping one equipment, every command takes the same safe path: <strong>choose the new state → confirm → Processing… → result</strong>. You'll get a clear <strong>Success</strong>, or an <strong>error</strong> that explains what went wrong with a <strong>Retry</strong>. Nothing changes on the plant without your confirm.",
          voice: "Whether you're switching a whole group's mode or flipping a single equipment, every command follows the same safe path. You choose the new state, you confirm, you watch a brief Processing while the plant responds, and then you get the result — a clear success, or an error that explains what went wrong with a Retry option. Nothing changes on the plant until you confirm, so there are no accidental commands.",
          tip: { type: 'tipLabel', text: 'Stuck on “Processing…”? The plant hasn’t confirmed yet. If it times out you’ll get an error — Refresh the status, then Retry.' },
        },
        {
          label: 'Who & when', title: 'Permission & greyed-out controls',
          body: "Sending commands needs <strong>Remote Control permission</strong>. Without it you can still see groups and status, but the control buttons are hidden — that's a setting, ask your administrator. And a button greys out for a good reason: the group is in <strong>Auto</strong> (switch to Remote), the equipment is <strong>unavailable</strong>, or it's <strong>already</strong> in that state.",
          voice: "Two last things about who can act, and when. Sending commands needs Remote Control permission. Without it, you can still see the groups and their status, but the control buttons are simply hidden — that's a permission setting, so ask your administrator. And when a button is greyed out, there's always a reason: the group is in Auto, so switch it to Remote first; or the equipment is unavailable right now; or it's already in the state you're asking for. That's the whole of Remote Control.",
          tip: { type: 'upNextLabel', text: 'Internal users: next, configure the control groups themselves — auto-detect or build from scratch.' },
        },
      ],
    },
    hi: {
      title: 'Remote Control:<br><em>नियंत्रण लें.</em>',
      subtitle:
        'नियंत्रण के दो स्तर, एक सुरक्षित रास्ता। किसी ग्रुप को Remote और Auto के बीच बदलें, या किसी एक उपकरण को On और Off करें — हमेशा एक confirm चरण और भरोसेमंद लाइव स्थिति के साथ।',
      chapter: 'Remote Control · कार्रवाई',
      steps: [
        {
          label: 'दो मोड', title: 'Remote बनाम Auto',
          body: "ग्रुप हमेशा दो मोड में से एक में रहता है, और यही तय करता है कि आप कार्रवाई कर सकते हैं या नहीं। <strong>Auto</strong> — ऑटोमेशन उपकरण चलाता है, मैनुअल नियंत्रण बंद। <strong>Remote</strong> — आप नियंत्रण में हैं, मैनुअल कमांड चलती हैं। तो Auto में किसी भी ग्रुप पर पहला कदम है उसे Remote में बदलना।",
          voice: "कुछ भी on या off करने से पहले, ग्रुप का मोड याद रखें, क्योंकि यही तय करता है कि आप कार्रवाई कर सकते हैं या नहीं। Auto में ऑटोमेशन उपकरण चलाता है और आपके मैनुअल नियंत्रण बंद रहते हैं। Remote में आप नियंत्रण में हैं और मैनुअल कमांड चलती हैं। तो Auto में बैठे किसी भी ग्रुप पर पहला कदम है उसे Remote में बदलना।",
        },
        {
          label: 'Remote लें', title: 'ग्रुप को Remote में बदलें',
          body: "<strong>Remote</strong> पर टैप करें, और एक छोटी चेतावनी याद दिलाती है इसका मतलब: <em>Remote mode ऑटोमेशन को ओवरराइड करता है और आपको उपकरण मैनुअली नियंत्रित करने देता है।</em> <strong>Switch to Remote</strong> से पुष्टि करें। यह एक <strong>ग्रुप-स्तरीय</strong> बदलाव है — यह ग्रुप के हर उपकरण को एक साथ आपके हवाले कर देता है।",
          voice: "नियंत्रण लेने के लिए, Remote पर टैप करें। एक छोटी चेतावनी याद दिलाती है कि आप क्या कर रहे हैं — Remote mode ऑटोमेशन को ओवरराइड करता है और आपको उपकरण मैनुअली नियंत्रित करने देता है। Switch to Remote से पुष्टि करें। ध्यान रखें यह ग्रुप-स्तरीय बदलाव है: यह ग्रुप के हर उपकरण को एक साथ आपके हवाले कर देता है, सिर्फ़ एक को नहीं।",
          tip: { type: 'noteLabel', text: 'Refresh status कभी भी उपयोग करें ताकि ग्रुप और उसके उपकरण की लाइव प्लांट से दोबारा जाँच हो सके।' },
        },
        {
          label: 'नियंत्रित करें', title: 'उपकरण नियंत्रित करें — लाइव स्थिति',
          body: "ग्रुप Remote में होते ही <strong>Equipments</strong> सूची सक्रिय हो जाती है। हर उपकरण अपनी लाइव <strong>On / Off स्थिति</strong> और एक <strong>Control</strong> बटन दिखाता है। किसी एक को खोलें — मान लें कोई feed pump जो <strong>On</strong> है — और उसे Off कर सकते हैं, या किसी Off को On। आप ठीक उसी पर कार्रवाई करते हैं जो स्थिति दिखाती है।",
          voice: "ग्रुप Remote में होते ही Equipments सूची सक्रिय हो जाती है। हर उपकरण अपनी लाइव स्थिति — On या Off — और एक Control बटन दिखाता है। किसी एक को खोलें; यहाँ Softener Feed Pump 1 On है। वहाँ से आप उसे Off कर सकते हैं, या किसी Off वाले को On। आप हमेशा ठीक उसी पर कार्रवाई करते हैं जो लाइव स्थिति बता रही है।",
        },
        {
          label: 'प्रवाह', title: 'हर कमांड: confirm → processing → परिणाम',
          body: "चाहे आप ग्रुप का मोड बदलें या किसी एक उपकरण को, हर कमांड एक ही सुरक्षित रास्ते से चलती है: <strong>नई स्थिति चुनें → confirm → Processing… → परिणाम</strong>। आपको साफ़ <strong>Success</strong> मिलेगा, या एक <strong>error</strong> जो बताता है क्या ग़लत हुआ, <strong>Retry</strong> के साथ। आपकी पुष्टि के बिना प्लांट पर कुछ नहीं बदलता।",
          voice: "चाहे आप पूरे ग्रुप का मोड बदलें या किसी एक उपकरण को, हर कमांड एक ही सुरक्षित रास्ते से चलती है। आप नई स्थिति चुनते हैं, पुष्टि करते हैं, प्लांट के जवाब देते समय एक छोटा Processing देखते हैं, और फिर परिणाम मिलता है — साफ़ success, या एक error जो बताता है क्या ग़लत हुआ, Retry विकल्प के साथ। आपकी पुष्टि तक प्लांट पर कुछ नहीं बदलता, तो कोई ग़लती से कमांड नहीं जाती।",
          tip: { type: 'tipLabel', text: '“Processing…” पर अटका? प्लांट ने अभी पुष्टि नहीं की। टाइम-आउट होने पर error मिलेगा — status Refresh करें, फिर Retry।' },
        },
        {
          label: 'कौन और कब', title: 'अनुमति और धूसर नियंत्रण',
          body: "कमांड भेजने के लिए <strong>Remote Control अनुमति</strong> चाहिए। इसके बिना आप ग्रुप और स्थिति देख सकते हैं, पर नियंत्रण बटन छिपे रहते हैं — यह एक सेटिंग है, अपने एडमिन से पूछें। और बटन किसी कारण से धूसर होता है: ग्रुप <strong>Auto</strong> में है (Remote में बदलें), उपकरण <strong>अनुपलब्ध</strong> है, या वह <strong>पहले से</strong> उसी स्थिति में है।",
          voice: "कौन कार्रवाई कर सकता है और कब, इस पर दो आख़िरी बातें। कमांड भेजने के लिए Remote Control अनुमति चाहिए। इसके बिना, आप ग्रुप और उनकी स्थिति देख सकते हैं, पर नियंत्रण बटन बस छिपे रहते हैं — यह एक अनुमति सेटिंग है, तो अपने एडमिन से पूछें। और जब कोई बटन धूसर होता है, हमेशा कोई कारण होता है: ग्रुप Auto में है, तो पहले Remote में बदलें; या उपकरण अभी अनुपलब्ध है; या वह पहले से उसी स्थिति में है जो आप माँग रहे हैं। यही पूरा Remote Control है।",
          tip: { type: 'upNextLabel', text: 'Internal यूज़र: आगे, control group ख़ुद कॉन्फ़िगर करें — auto-detect या शुरू से बनाएँ।' },
        },
      ],
    },
    ta: {
      title: 'Remote Control:<br><em>கட்டுப்பாட்டை எடு.</em>',
      subtitle:
        'இரண்டு நிலைக் கட்டுப்பாடு, ஒரு பாதுகாப்பான பாதை. ஒரு குழுவை Remote-க்கும் Auto-க்கும் இடையே மாற்றுங்கள், அல்லது ஒரு உபகரணத்தை On, Off செய்யுங்கள் — எப்போதும் ஒரு confirm படியுடனும் நம்பகமான நேரலை நிலையுடனும்.',
      chapter: 'Remote Control · செயல்படுதல்',
      steps: [
        {
          label: 'இரு பயன்முறை', title: 'Remote vs Auto',
          body: "ஒரு குழு எப்போதும் இரு பயன்முறைகளில் ஒன்றில் இருக்கும், அதுவே நீங்கள் செயல்பட முடியுமா என முடிவு செய்கிறது. <strong>Auto</strong> — தானியக்கம் உபகரணத்தை இயக்குகிறது, கைமுறை கட்டுப்பாடுகள் அணைப்பு. <strong>Remote</strong> — நீங்கள் கட்டுப்பாட்டில், கைமுறை கட்டளைகள் அனுமதி. எனவே Auto-வில் உள்ள எந்தக் குழுவிலும் முதல் நகர்வு அதை Remote-க்கு மாற்றுவது.",
          voice: "எதையும் on அல்லது off செய்வதற்கு முன், குழுவின் பயன்முறையை நினைவில் கொள்ளுங்கள், ஏனெனில் அதுவே நீங்கள் செயல்பட முடியுமா என முடிவு செய்கிறது. Auto-வில் தானியக்கம் உபகரணத்தை இயக்குகிறது, உங்கள் கைமுறை கட்டுப்பாடுகள் அணைக்கப்படும். Remote-இல் நீங்கள் கட்டுப்பாட்டில், கைமுறை கட்டளைகள் அனுமதிக்கப்படும். எனவே Auto-வில் உள்ள எந்தக் குழுவிலும் முதல் நகர்வு அதை Remote-க்கு மாற்றுவதே.",
        },
        {
          label: 'Remote-க்கு', title: 'குழுவை Remote-க்கு மாற்று',
          body: "<strong>Remote</strong>-ஐத் தட்டுங்கள், ஒரு சிறு எச்சரிக்கை அதன் பொருளை நினைவூட்டும்: <em>Remote mode தானியக்கத்தை மீறி, உபகரணங்களை கைமுறையாகக் கட்டுப்படுத்த அனுமதிக்கிறது.</em> <strong>Switch to Remote</strong>-ஆல் உறுதிப்படுத்துங்கள். இது ஒரு <strong>குழு-மட்ட</strong> மாற்றம் — குழுவின் ஒவ்வொரு உபகரணத்தையும் ஒரே நேரத்தில் உங்களிடம் ஒப்படைக்கிறது.",
          voice: "கட்டுப்பாட்டை எடுக்க, Remote-ஐத் தட்டுங்கள். ஒரு சிறு எச்சரிக்கை நீங்கள் என்ன செய்கிறீர்கள் என நினைவூட்டும் — Remote mode தானியக்கத்தை மீறி, உபகரணங்களை கைமுறையாகக் கட்டுப்படுத்த அனுமதிக்கிறது. Switch to Remote-ஆல் உறுதிப்படுத்துங்கள். இது ஒரு குழு-மட்ட மாற்றம் என்பதை நினைவில் கொள்ளுங்கள்: இது குழுவின் ஒவ்வொரு உபகரணத்தையும் ஒரே நேரத்தில் உங்களிடம் ஒப்படைக்கிறது, ஒன்றை மட்டுமல்ல.",
          tip: { type: 'noteLabel', text: 'Refresh status-ஐ எப்போது வேண்டுமானாலும் பயன்படுத்தி குழுவையும் அதன் உபகரணங்களையும் நேரலை ஆலையுடன் மீண்டும் சரிபார்க்கவும்.' },
        },
        {
          label: 'கட்டுப்படுத்து', title: 'உபகரணத்தைக் கட்டுப்படுத்து — நேரலை நிலை',
          body: "குழு Remote-இல் இருக்கும்போது <strong>Equipments</strong> பட்டியல் உயிர்பெறுகிறது. ஒவ்வொரு உபகரணமும் அதன் நேரலை <strong>On / Off நிலையையும்</strong> ஒரு <strong>Control</strong> பொத்தானையும் காட்டுகிறது. ஒன்றைத் திறங்கள் — <strong>On</strong> என இருக்கும் ஒரு feed pump சொல்லுங்கள் — அதை Off செய்யலாம், அல்லது Off-ஐ On செய்யலாம். நிலை காட்டுவதின் மீதே நீங்கள் செயல்படுகிறீர்கள்.",
          voice: "குழு Remote-இல் இருக்கும்போது Equipments பட்டியல் உயிர்பெறுகிறது. ஒவ்வொரு உபகரணமும் அதன் நேரலை நிலையையும் — On அல்லது Off — ஒரு Control பொத்தானையும் காட்டுகிறது. ஒன்றைத் திறங்கள்; இங்கே Softener Feed Pump 1 On. அங்கிருந்து அதை Off செய்யலாம், அல்லது Off-ஆக உள்ள ஒன்றை On செய்யலாம். நேரலை நிலை சொல்வதின் மீதே நீங்கள் எப்போதும் செயல்படுகிறீர்கள்.",
        },
        {
          label: 'ஓட்டம்', title: 'ஒவ்வொரு கட்டளை: confirm → processing → முடிவு',
          body: "நீங்கள் குழுவின் பயன்முறையை மாற்றினாலும் ஒரு உபகரணத்தை மாற்றினாலும், ஒவ்வொரு கட்டளையும் ஒரே பாதுகாப்பான பாதையில் செல்கிறது: <strong>புதிய நிலையைத் தேர் → confirm → Processing… → முடிவு</strong>. தெளிவான <strong>Success</strong> கிடைக்கும், அல்லது என்ன தவறு எனச் சொல்லும் <strong>error</strong>, ஒரு <strong>Retry</strong>-உடன். உங்கள் உறுதிப்படுத்தல் இன்றி ஆலையில் எதுவும் மாறாது.",
          voice: "நீங்கள் ஒரு முழு குழுவின் பயன்முறையை மாற்றினாலும் ஒரு உபகரணத்தை மாற்றினாலும், ஒவ்வொரு கட்டளையும் ஒரே பாதுகாப்பான பாதையில் செல்கிறது. புதிய நிலையைத் தேர்கிறீர்கள், உறுதிப்படுத்துகிறீர்கள், ஆலை பதிலளிக்கும்போது ஒரு சிறு Processing-ஐப் பார்க்கிறீர்கள், பின் முடிவு கிடைக்கிறது — தெளிவான success, அல்லது என்ன தவறு எனச் சொல்லும் error, Retry விருப்பத்துடன். நீங்கள் உறுதிப்படுத்தும் வரை ஆலையில் எதுவும் மாறாது, எனவே தற்செயலான கட்டளைகள் இல்லை.",
          tip: { type: 'tipLabel', text: '“Processing…”-இல் நிற்கிறதா? ஆலை இன்னும் உறுதிப்படுத்தவில்லை. நேரம் முடிந்தால் error கிடைக்கும் — status-ஐ Refresh செய்து, பின் Retry.' },
        },
        {
          label: 'யார், எப்போது', title: 'அனுமதி & மங்கிய கட்டுப்பாடுகள்',
          body: "கட்டளைகள் அனுப்ப <strong>Remote Control அனுமதி</strong> தேவை. அது இன்றி நீங்கள் குழுக்களையும் நிலையையும் காணலாம், ஆனால் கட்டுப்பாட்டுப் பொத்தான்கள் மறைக்கப்படும் — இது ஒரு அமைப்பு, உங்கள் நிர்வாகியிடம் கேளுங்கள். ஒரு பொத்தான் நல்ல காரணத்திற்காக மங்கும்: குழு <strong>Auto</strong>-வில் (Remote-க்கு மாற்று), உபகரணம் <strong>கிடைக்கவில்லை</strong>, அல்லது அது <strong>ஏற்கனவே</strong> அந்த நிலையில்.",
          voice: "யார் எப்போது செயல்படலாம் என இரண்டு கடைசி விஷயங்கள். கட்டளைகள் அனுப்ப Remote Control அனுமதி தேவை. அது இன்றி, நீங்கள் குழுக்களையும் அவற்றின் நிலையையும் காணலாம், ஆனால் கட்டுப்பாட்டுப் பொத்தான்கள் வெறுமனே மறைக்கப்படும் — இது ஒரு அனுமதி அமைப்பு, எனவே உங்கள் நிர்வாகியிடம் கேளுங்கள். ஒரு பொத்தான் மங்கும்போது எப்போதும் ஒரு காரணம் உண்டு: குழு Auto-வில், முதலில் Remote-க்கு மாற்று; அல்லது உபகரணம் இப்போது கிடைக்கவில்லை; அல்லது நீங்கள் கேட்கும் நிலையில் அது ஏற்கனவே உள்ளது. இதுவே முழு Remote Control.",
          tip: { type: 'upNextLabel', text: 'Internal பயனர்கள்: அடுத்து, control group-களை நீங்களே கட்டமைக்கவும் — auto-detect அல்லது புதிதாக உருவாக்கவும்.' },
        },
      ],
    },
    mr: {
      title: 'Remote Control:<br><em>नियंत्रण घ्या.</em>',
      subtitle:
        'नियंत्रणाचे दोन स्तर, एक सुरक्षित मार्ग. एखादा ग्रुप Remote आणि Auto दरम्यान बदला, किंवा एखादे उपकरण On आणि Off करा — नेहमी एका confirm पायरीसह आणि विश्वासार्ह लाइव्ह स्थितीसह.',
      chapter: 'Remote Control · कृती',
      steps: [
        {
          label: 'दोन मोड', title: 'Remote विरुद्ध Auto',
          body: "ग्रुप नेहमी दोनपैकी एका मोडमध्ये असतो, आणि तोच ठरवतो की तुम्ही कृती करू शकता का. <strong>Auto</strong> — ऑटोमेशन उपकरण चालवते, मॅन्युअल नियंत्रणे बंद. <strong>Remote</strong> — तुम्ही नियंत्रणात, मॅन्युअल कमांड चालतात. म्हणून Auto मधील कोणत्याही ग्रुपवर पहिली चाल म्हणजे तो Remote मध्ये बदलणे.",
          voice: "काहीही on किंवा off करण्याआधी, ग्रुपचा मोड लक्षात ठेवा, कारण तोच ठरवतो की तुम्ही मुळात कृती करू शकता का. Auto मध्ये ऑटोमेशन उपकरण चालवते आणि तुमची मॅन्युअल नियंत्रणे बंद राहतात. Remote मध्ये तुम्ही नियंत्रणात असता आणि मॅन्युअल कमांड चालतात. म्हणून Auto मध्ये बसलेल्या कोणत्याही ग्रुपवर पहिली चाल म्हणजे तो Remote मध्ये बदलणे.",
        },
        {
          label: 'Remote घ्या', title: 'ग्रुप Remote मध्ये बदला',
          body: "<strong>Remote</strong> वर टॅप करा, आणि एक छोटी सूचना त्याचा अर्थ आठवण करून देते: <em>Remote mode ऑटोमेशनला ओव्हरराइड करते आणि तुम्हाला उपकरणे मॅन्युअली नियंत्रित करू देते.</em> <strong>Switch to Remote</strong> ने पुष्टी करा. हा एक <strong>ग्रुप-स्तरीय</strong> बदल आहे — तो ग्रुपमधील प्रत्येक उपकरण एकाच वेळी तुमच्या हाती देतो.",
          voice: "नियंत्रण घेण्यासाठी, Remote वर टॅप करा. एक छोटी सूचना तुम्ही काय करताय ते आठवण करून देते — Remote mode ऑटोमेशनला ओव्हरराइड करते आणि तुम्हाला उपकरणे मॅन्युअली नियंत्रित करू देते. Switch to Remote ने पुष्टी करा. लक्षात ठेवा हा ग्रुप-स्तरीय बदल आहे: तो ग्रुपमधील प्रत्येक उपकरण एकाच वेळी तुमच्या हाती देतो, फक्त एक नाही.",
          tip: { type: 'noteLabel', text: 'Refresh status कधीही वापरा म्हणजे ग्रुप आणि त्याची उपकरणे लाइव्ह प्लांटशी पुन्हा तपासली जातील.' },
        },
        {
          label: 'नियंत्रित करा', title: 'उपकरण नियंत्रित करा — लाइव्ह स्थिती',
          body: "ग्रुप Remote मध्ये असताच <strong>Equipments</strong> यादी सक्रिय होते. प्रत्येक उपकरण त्याची लाइव्ह <strong>On / Off स्थिती</strong> आणि एक <strong>Control</strong> बटण दाखवते. एखादे उघडा — समजा एखादा feed pump जो <strong>On</strong> आहे — आणि तो Off करू शकता, किंवा Off असलेला On. स्थिती जे दाखवते नेमके त्यावरच तुम्ही कृती करता.",
          voice: "ग्रुप Remote मध्ये असताच Equipments यादी सक्रिय होते. प्रत्येक उपकरण त्याची लाइव्ह स्थिती — On किंवा Off — आणि एक Control बटण दाखवते. एखादे उघडा; इथे Softener Feed Pump 1 On आहे. तिथून तो Off करू शकता, किंवा Off असलेला एखादा On. लाइव्ह स्थिती जे सांगते नेमके त्यावरच तुम्ही नेहमी कृती करता.",
        },
        {
          label: 'प्रवाह', title: 'प्रत्येक कमांड: confirm → processing → निकाल',
          body: "तुम्ही ग्रुपचा मोड बदला किंवा एखादे उपकरण, प्रत्येक कमांड एकाच सुरक्षित मार्गाने जाते: <strong>नवी स्थिती निवडा → confirm → Processing… → निकाल</strong>. तुम्हाला स्पष्ट <strong>Success</strong> मिळेल, किंवा काय चुकले ते सांगणारा <strong>error</strong>, <strong>Retry</strong> सह. तुमच्या पुष्टीशिवाय प्लांटवर काहीही बदलत नाही.",
          voice: "तुम्ही संपूर्ण ग्रुपचा मोड बदला किंवा एखादे उपकरण, प्रत्येक कमांड एकाच सुरक्षित मार्गाने जाते. तुम्ही नवी स्थिती निवडता, पुष्टी करता, प्लांट प्रतिसाद देत असताना एक छोटा Processing पाहता, आणि मग निकाल मिळतो — स्पष्ट success, किंवा काय चुकले ते सांगणारा error, Retry पर्यायासह. तुमच्या पुष्टीपर्यंत प्लांटवर काहीही बदलत नाही, म्हणून चुकून कमांड जात नाही.",
          tip: { type: 'tipLabel', text: '“Processing…” वर अडकलंय? प्लांटने अजून पुष्टी केलेली नाही. टाइम-आउट झाल्यास error मिळेल — status Refresh करा, मग Retry.' },
        },
        {
          label: 'कोण आणि कधी', title: 'परवानगी व धूसर नियंत्रणे',
          body: "कमांड पाठवण्यासाठी <strong>Remote Control परवानगी</strong> लागते. तिच्याशिवाय तुम्ही ग्रुप आणि स्थिती पाहू शकता, पण नियंत्रण बटणे लपलेली राहतात — ही एक सेटिंग आहे, तुमच्या एडमिनला विचारा. आणि बटण काही कारणाने धूसर होते: ग्रुप <strong>Auto</strong> मध्ये आहे (Remote मध्ये बदला), उपकरण <strong>अनुपलब्ध</strong> आहे, किंवा ते <strong>आधीच</strong> त्याच स्थितीत आहे.",
          voice: "कोण कृती करू शकतो आणि कधी, याबद्दल दोन शेवटच्या गोष्टी. कमांड पाठवण्यासाठी Remote Control परवानगी लागते. तिच्याशिवाय, तुम्ही ग्रुप आणि त्यांची स्थिती पाहू शकता, पण नियंत्रण बटणे फक्त लपलेली राहतात — ही एक परवानगी सेटिंग आहे, म्हणून तुमच्या एडमिनला विचारा. आणि बटण धूसर असते तेव्हा नेहमी एक कारण असते: ग्रुप Auto मध्ये आहे, म्हणून आधी Remote मध्ये बदला; किंवा उपकरण आत्ता अनुपलब्ध आहे; किंवा तुम्ही मागताय त्याच स्थितीत ते आधीच आहे. एवढेच संपूर्ण Remote Control.",
          tip: { type: 'upNextLabel', text: 'Internal यूजर: पुढे, control group स्वतः कॉन्फिगर करा — auto-detect किंवा सुरवातीपासून तयार करा.' },
        },
      ],
    },
  },
};

export default lesson;
