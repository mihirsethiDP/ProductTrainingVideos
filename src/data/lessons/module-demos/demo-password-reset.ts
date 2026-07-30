import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-password-reset`;

/**
 * Demo — resetting your own password from the dashboard.   (hidden module-demos)
 * Built from one screen recording (19s, Hindalco Mahaan login): dashboard →
 * account menu → Profile → Change Password → the old/new/confirm panel.
 * Style: `overview` — one step per screen, brisk voices, ~2–3 min. Every screen
 * in the recording is covered, and the profile page's other fields (phone/OTP,
 * read-only email, language) are named in passing since the recording shows them.
 * Real 1280px frames from the recording; the baked OS cursor is patched out.
 */
const lesson: Lesson = {
  id: 'demo-password-reset',
  moduleId: 'module-demos',
  lessonNumber: 5,
  estimatedMinutes: 3,
  expiresAt: '2026-08-29', // 30 days after job created_at (2026-07-30) — purged by cleanup-demos
  screenshots: {
    dashboard: `${BASE}/dashboard.jpg`,
    menu: `${BASE}/menu.jpg`,
    profile: `${BASE}/profile.jpg`,
    changepw: `${BASE}/changepw.jpg`,
    password: `${BASE}/password.jpg`,
  },
  layouts: [
    // S1 — orientation: the top bar travels with you; your name is the way in
    {
      mode: 'detail', screenshot: 'dashboard', caption: 'Your account lives in the top bar',
      spotlight: { top: '18%', left: '78%', width: '22%', height: '9%' },
      cursor: [
        { at: 0.2, x: 81, y: 23 },
        { at: 0.5, x: 85, y: 23 },
        { at: 0.85, x: 95, y: 23, click: true },
      ],
    },
    // S2 — the account menu: Profile / Logout / About
    {
      mode: 'detail', screenshot: 'menu', caption: 'Profile, Logout, About',
      spotlight: { top: '20%', left: '89%', width: '10%', height: '18%' },
      cursor: [
        { at: 0.3, x: 92, y: 24 },
        { at: 0.75, x: 92, y: 24, click: true },
      ],
    },
    // S3 — what the profile page holds (name, phone+OTP, read-only email, language)
    {
      mode: 'detail', screenshot: 'profile', caption: 'Your profile page',
      spotlight: null,
      cursor: [
        { at: 0.15, x: 74, y: 47 },
        { at: 0.45, x: 74, y: 60 },
        { at: 0.7, x: 74, y: 81 },
        { at: 0.9, x: 74, y: 93 },
      ],
    },
    // S4 — scroll down: Change Password / Save / Log Out
    {
      mode: 'detail', screenshot: 'changepw', caption: 'Scroll down to Change Password',
      spotlight: { top: '78%', left: '62%', width: '23%', height: '7%' },
      cursor: [
        { at: 0.25, x: 74, y: 70 },
        { at: 0.7, x: 74, y: 81, click: true },
      ],
    },
    // S5 — the panel: old, new, confirm, eye toggles, keep me logged in
    {
      mode: 'detail', screenshot: 'password', caption: 'Old, new, confirm',
      spotlight: { top: '50%', left: '70%', width: '23%', height: '49%' },
      cursor: [
        { at: 0.2, x: 82, y: 55 },
        { at: 0.45, x: 82, y: 66 },
        { at: 0.65, x: 82, y: 77 },
        { at: 0.9, x: 82, y: 97, click: true },
      ],
    },
    // S6 — wrap: Confirm vs Cancel vs Save, and the admin escape hatch
    {
      mode: 'detail', screenshot: 'password', caption: 'Confirm, Cancel — and if you forgot it',
      spotlight: null,
      cursor: [
        { at: 0.25, x: 82, y: 97 },
        { at: 0.6, x: 50, y: 96 },
        { at: 0.85, x: 41, y: 92 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Reset your <em>password</em><br>from the dashboard.',
      subtitle:
        'Your account name in the top bar is the way in — Profile, then Change Password. Two minutes, start to finish.',
      chapter: 'Demo · Password reset',
      steps: [
        {
          label: 'Start', title: 'Your account lives in the top bar',
          body: "The <strong>top bar</strong> follows you on every page. On the right sit <strong>notifications</strong>, <strong>messages</strong> and your <strong>account name</strong> — and that name is the door to everything about your login.",
          voice: "Let's change your password. Wherever you are, look at the top bar — it follows you on every page. On the right you have notifications, messages, and your own account name. That name is the way in. Click it.",
        },
        {
          label: 'Menu', title: 'Open your account menu',
          body: "Your name opens three choices: <strong>Profile</strong>, <strong>Logout</strong> and <strong>About</strong>. Anything to do with your own account — name, phone, language, password — sits behind <strong>Profile</strong>.",
          voice: "Your name opens three choices: Profile, Logout, and About. Everything about your own account lives behind Profile — your name, your phone number, your language, and your password. Choose Profile.",
        },
        {
          label: 'Profile', title: 'Your profile page at a glance',
          body: "<strong>Name</strong> you can edit. <strong>Phone Number</strong> has <strong>Generate OTP</strong> to verify it. <strong>Email Id</strong> is greyed out — that's your login, so only an admin changes it. <strong>Select Language</strong> switches the whole app between English, Hindi, Tamil and Marathi.",
          voice: "Here's your profile. Your name, which you can edit. Your phone number, with Generate O T P to verify it. Your email is greyed out, because it's your login — only an admin can change that. And Select Language switches the whole app between four languages.",
        },
        {
          label: 'Find it', title: 'Scroll down to Change Password',
          body: "Under the language selector sit three controls: <strong>Change Password</strong>, <strong>Save</strong> for profile edits, and a <strong>Log Out</strong> link. Click <strong>Change Password</strong> — it opens a panel beside your details instead of loading a new page.",
          voice: "Scroll the profile column down. Below the language selector you get three more controls: Change Password, Save for profile edits, and a Log Out link. Click Change Password — it opens a panel right beside your details, so you never leave the page.",
        },
        {
          label: 'Reset', title: 'Old, new, confirm',
          body: "Your <strong>Old password</strong> first, then the new one twice — <strong>New password</strong> and <strong>Confirm password</strong>. Each field has an <strong>eye icon</strong> to check what you typed. Leave <strong>Keep me logged in</strong> ticked to stay signed in here, then press <strong>Confirm</strong>.",
          voice: "Your old password first — that proves it's you. Then the new one twice, so a typo can't lock you out. Each field has an eye icon if you want to check what you typed. Keep me logged in is already ticked. Then press Confirm.",
        },
        {
          label: 'Wrap', title: 'Confirm, Cancel — and if you forgot it',
          body: "<strong>Confirm</strong> saves it immediately — use the new password from your next sign-in. <strong>Cancel</strong> closes the panel and changes nothing. Note this panel <em>needs</em> the old password: if you genuinely can't remember it, an <strong>admin</strong> has to reset it for you.",
          voice: "Confirm saves it straight away — use the new password from your next sign-in. Cancel closes the panel and changes nothing. And remember: this panel needs your old password, so if you truly can't recall it, ask an admin to reset it for you.",
        },
      ],
    },
    hi: {
      title: 'डैशबोर्ड से अपना<br><em>पासवर्ड</em> बदलें।',
      subtitle:
        'ऊपर की पट्टी में आपका नाम ही रास्ता है — प्रोफ़ाइल, फिर चेंज पासवर्ड। शुरू से अंत तक दो मिनट।',
      chapter: 'डेमो · पासवर्ड रीसेट',
      steps: [
        {
          label: 'शुरुआत', title: 'आपका खाता ऊपर की पट्टी में है',
          body: "<strong>ऊपर की पट्टी</strong> हर पेज पर साथ चलती है। दाईं ओर <strong>नोटिफ़िकेशन</strong>, <strong>मैसेज</strong> और आपका <strong>खाता नाम</strong> — और वही नाम आपके लॉगिन से जुड़ी हर चीज़ का दरवाज़ा है।",
          voice: "चलिए आपका पासवर्ड बदलें। आप कहीं भी हों, ऊपर की पट्टी देखिए — यह हर पेज पर साथ चलती है। दाईं ओर नोटिफ़िकेशन, मैसेज और आपका खाता नाम है। वही नाम रास्ता है। उस पर क्लिक कीजिए।",
        },
        {
          label: 'मेन्यू', title: 'अपना खाता मेन्यू खोलिए',
          body: "नाम पर क्लिक करने से तीन विकल्प खुलते हैं: <strong>प्रोफ़ाइल</strong>, <strong>लॉगआउट</strong> और <strong>अबाउट</strong>। अपने खाते से जुड़ी हर चीज़ — नाम, फ़ोन, भाषा, पासवर्ड — <strong>प्रोफ़ाइल</strong> के पीछे है।",
          voice: "नाम पर क्लिक करते ही तीन विकल्प खुलते हैं: प्रोफ़ाइल, लॉगआउट और अबाउट। आपके खाते से जुड़ी हर चीज़ प्रोफ़ाइल में है — नाम, फ़ोन नंबर, भाषा और पासवर्ड। प्रोफ़ाइल चुनिए।",
        },
        {
          label: 'प्रोफ़ाइल', title: 'एक नज़र में आपका प्रोफ़ाइल',
          body: "<strong>नाम</strong> बदल सकते हैं। <strong>फ़ोन नंबर</strong> के साथ <strong>जेनरेट ओटीपी</strong> है सत्यापन के लिए। <strong>ईमेल आईडी</strong> धूसर है — वही आपका लॉगिन है, उसे सिर्फ़ एडमिन बदल सकता है। <strong>भाषा चुनें</strong> से पूरा ऐप अंग्रेज़ी, हिंदी, तमिल और मराठी में बदलता है।",
          voice: "यह आपका प्रोफ़ाइल है। नाम, जिसे आप बदल सकते हैं। फ़ोन नंबर, जिसे जेनरेट ओ टी पी से सत्यापित करते हैं। ईमेल धूसर है क्योंकि वही आपका लॉगिन है — उसे सिर्फ़ एडमिन बदल सकता है। और भाषा चुनें से पूरा ऐप चार भाषाओं में बदलता है।",
        },
        {
          label: 'ढूँढिए', title: 'नीचे स्क्रॉल कर चेंज पासवर्ड',
          body: "भाषा चुनने के नीचे तीन नियंत्रण हैं: <strong>चेंज पासवर्ड</strong>, प्रोफ़ाइल बदलावों के लिए <strong>सेव</strong>, और <strong>लॉग आउट</strong> लिंक। <strong>चेंज पासवर्ड</strong> दबाइए — यह नया पेज नहीं, बगल में एक पैनल खोलता है।",
          voice: "प्रोफ़ाइल वाले हिस्से को नीचे स्क्रॉल कीजिए। भाषा चुनने के नीचे तीन नियंत्रण मिलते हैं: चेंज पासवर्ड, प्रोफ़ाइल बदलावों के लिए सेव, और लॉग आउट लिंक। चेंज पासवर्ड दबाइए — यह आपके विवरण के बगल में ही पैनल खोल देता है।",
        },
        {
          label: 'रीसेट', title: 'पुराना, नया, पुष्टि',
          body: "पहले <strong>पुराना पासवर्ड</strong>, फिर नया दो बार — <strong>नया पासवर्ड</strong> और <strong>पासवर्ड की पुष्टि</strong>। हर खाने में <strong>आँख का निशान</strong> है, टाइप किया देखने के लिए। <strong>मुझे लॉग इन रखें</strong> टिक रहने दें, फिर <strong>कन्फ़र्म</strong> दबाएँ।",
          voice: "पहले पुराना पासवर्ड — इससे साबित होता है कि यह आप ही हैं। फिर नया पासवर्ड दो बार, ताकि टाइपिंग की ग़लती आपको बाहर न कर दे। हर खाने में आँख का निशान है, जिससे टाइप किया देख सकते हैं। मुझे लॉग इन रखें पहले से टिक है। फिर कन्फ़र्म दबाएँ।",
        },
        {
          label: 'सारांश', title: 'कन्फ़र्म, कैंसल — और भूल जाने पर',
          body: "<strong>कन्फ़र्म</strong> तुरंत सहेज देता है — अगली बार नए पासवर्ड से साइन इन कीजिए। <strong>कैंसल</strong> पैनल बंद करता है, कुछ नहीं बदलता। ध्यान रहे, इस पैनल को पुराना पासवर्ड <em>चाहिए</em>: अगर वाकई याद न हो तो <strong>एडमिन</strong> को रीसेट करना पड़ेगा।",
          voice: "कन्फ़र्म तुरंत सहेज देता है — अगली बार से नया पासवर्ड इस्तेमाल कीजिए। कैंसल पैनल बंद कर देता है और कुछ नहीं बदलता। और याद रखिए: इस पैनल को पुराना पासवर्ड चाहिए, इसलिए अगर वाकई याद न आए तो एडमिन से रीसेट कराइए।",
        },
      ],
    },
    ta: {
      title: 'டாஷ்போர்டில் இருந்தே<br><em>கடவுச்சொல்</em> மாற்றுங்கள்.',
      subtitle:
        'மேல் பட்டியில் உள்ள உங்கள் பெயரே வழி — சுயவிவரம், பிறகு கடவுச்சொல் மாற்றம். தொடக்கம் முதல் முடிவு வரை இரண்டு நிமிடம்.',
      chapter: 'டெமோ · கடவுச்சொல் மாற்றம்',
      steps: [
        {
          label: 'தொடக்கம்', title: 'உங்கள் கணக்கு மேல் பட்டியில்',
          body: "<strong>மேல் பட்டி</strong> எல்லாப் பக்கத்திலும் உடன் வரும். வலதுபுறம் <strong>அறிவிப்புகள்</strong>, <strong>செய்திகள்</strong> மற்றும் உங்கள் <strong>கணக்குப் பெயர்</strong> — அந்தப் பெயரே உங்கள் உள்நுழைவு தொடர்பான அனைத்திற்கும் கதவு.",
          voice: "உங்கள் கடவுச்சொல்லை மாற்றுவோம். நீங்கள் எங்கிருந்தாலும் மேல் பட்டியைப் பாருங்கள் — அது எல்லாப் பக்கத்திலும் உடன் வரும். வலதுபுறம் அறிவிப்புகள், செய்திகள், உங்கள் கணக்குப் பெயர். அந்தப் பெயரே வழி. அதைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'மெனு', title: 'கணக்கு மெனுவைத் திறங்கள்',
          body: "பெயரைக் கிளிக் செய்தால் மூன்று தேர்வுகள்: <strong>சுயவிவரம்</strong>, <strong>வெளியேறு</strong>, <strong>பற்றி</strong>. உங்கள் கணக்கு சார்ந்த அனைத்தும் — பெயர், தொலைபேசி, மொழி, கடவுச்சொல் — <strong>சுயவிவரத்திற்குள்</strong>.",
          voice: "பெயரைக் கிளிக் செய்தால் மூன்று தேர்வுகள் திறக்கும்: சுயவிவரம், வெளியேறு, பற்றி. உங்கள் கணக்கு சார்ந்த அனைத்தும் சுயவிவரத்தில் இருக்கும் — பெயர், தொலைபேசி எண், மொழி, கடவுச்சொல். சுயவிவரத்தைத் தேர்ந்தெடுங்கள்.",
        },
        {
          label: 'சுயவிவரம்', title: 'ஒரே பார்வையில் உங்கள் சுயவிவரம்',
          body: "<strong>பெயரை</strong> மாற்றலாம். <strong>தொலைபேசி எண்</strong>ணுடன் சரிபார்க்க <strong>ஓ.டி.பி உருவாக்கு</strong>. <strong>மின்னஞ்சல்</strong> சாம்பல் நிறத்தில் — அதுவே உங்கள் உள்நுழைவு, நிர்வாகி மட்டுமே மாற்ற முடியும். <strong>மொழி தேர்வு</strong> முழு செயலியையும் ஆங்கிலம், இந்தி, தமிழ், மராத்தியில் மாற்றும்.",
          voice: "இது உங்கள் சுயவிவரம். பெயர், நீங்கள் மாற்றக்கூடியது. தொலைபேசி எண், ஓ டி பி உருவாக்கு மூலம் சரிபார்க்கலாம். மின்னஞ்சல் சாம்பல் நிறத்தில் உள்ளது, ஏனெனில் அதுவே உங்கள் உள்நுழைவு — நிர்வாகி மட்டுமே மாற்ற முடியும். மொழி தேர்வு முழு செயலியையும் நான்கு மொழிகளில் மாற்றும்.",
        },
        {
          label: 'கண்டுபிடி', title: 'கீழே ஸ்க்ரோல் செய்து கடவுச்சொல் மாற்றம்',
          body: "மொழித் தேர்வுக்குக் கீழே மூன்று கட்டுப்பாடுகள்: <strong>கடவுச்சொல் மாற்று</strong>, சுயவிவர மாற்றங்களுக்கு <strong>சேமி</strong>, மற்றும் <strong>வெளியேறு</strong> இணைப்பு. <strong>கடவுச்சொல் மாற்று</strong> அழுத்தினால் புதிய பக்கம் அல்ல, பக்கத்திலேயே ஒரு பேனல் திறக்கும்.",
          voice: "சுயவிவரப் பகுதியைக் கீழே ஸ்க்ரோல் செய்யுங்கள். மொழித் தேர்வுக்குக் கீழே மூன்று கட்டுப்பாடுகள் தெரியும்: கடவுச்சொல் மாற்று, சுயவிவர மாற்றங்களுக்கு சேமி, வெளியேறு இணைப்பு. கடவுச்சொல் மாற்று அழுத்துங்கள் — உங்கள் விவரங்களுக்குப் பக்கத்திலேயே பேனல் திறக்கும்.",
        },
        {
          label: 'மாற்றம்', title: 'பழையது, புதியது, உறுதி',
          body: "முதலில் <strong>பழைய கடவுச்சொல்</strong>, பிறகு புதியது இரண்டு முறை — <strong>புதிய கடவுச்சொல்</strong> மற்றும் <strong>உறுதிப்படுத்து</strong>. ஒவ்வொரு புலத்திலும் <strong>கண் சின்னம்</strong> உள்ளது. <strong>உள்நுழைந்தே இரு</strong> டிக் அப்படியே விட்டு <strong>உறுதி</strong> அழுத்துங்கள்.",
          voice: "முதலில் பழைய கடவுச்சொல் — அது நீங்களே என்பதை உறுதிப்படுத்தும். பிறகு புதியதை இரண்டு முறை, ஒரு எழுத்துப் பிழை உங்களைத் தடுத்துவிடாமல் இருக்க. ஒவ்வொரு புலத்திலும் கண் சின்னம் உள்ளது, தட்டச்சு செய்ததைப் பார்க்க. உள்நுழைந்தே இரு ஏற்கனவே டிக் செய்யப்பட்டுள்ளது. பிறகு உறுதி அழுத்துங்கள்.",
        },
        {
          label: 'சுருக்கம்', title: 'உறுதி, ரத்து — மறந்துவிட்டால்',
          body: "<strong>உறுதி</strong> உடனே சேமிக்கும் — அடுத்த உள்நுழைவில் புதியதைப் பயன்படுத்துங்கள். <strong>ரத்து</strong> பேனலை மூடும், எதுவும் மாறாது. இந்தப் பேனலுக்கு பழைய கடவுச்சொல் <em>தேவை</em>: உண்மையிலேயே நினைவில் இல்லையெனில் <strong>நிர்வாகி</strong> மீட்டமைக்க வேண்டும்.",
          voice: "உறுதி உடனடியாக சேமிக்கும் — அடுத்த உள்நுழைவில் புதிய கடவுச்சொல்லைப் பயன்படுத்துங்கள். ரத்து பேனலை மூடும், எதுவும் மாறாது. நினைவில் வைக்கவும்: இந்தப் பேனலுக்கு பழைய கடவுச்சொல் தேவை, எனவே உண்மையிலேயே நினைவில் இல்லையெனில் நிர்வாகியிடம் மீட்டமைக்கச் சொல்லுங்கள்.",
        },
      ],
    },
    mr: {
      title: 'डॅशबोर्डवरूनच तुमचा<br><em>पासवर्ड</em> बदला.',
      subtitle:
        'वरच्या पट्टीतले तुमचे नावच वाट आहे — प्रोफाइल, मग चेंज पासवर्ड. सुरुवातीपासून शेवटपर्यंत दोन मिनिटे.',
      chapter: 'डेमो · पासवर्ड रीसेट',
      steps: [
        {
          label: 'सुरुवात', title: 'तुमचे खाते वरच्या पट्टीत',
          body: "<strong>वरची पट्टी</strong> प्रत्येक पानावर सोबत असते. उजवीकडे <strong>नोटिफिकेशन</strong>, <strong>मेसेज</strong> आणि तुमचे <strong>खाते नाव</strong> — आणि तेच नाव तुमच्या लॉगिनशी संबंधित सगळ्याचा दरवाजा आहे.",
          voice: "चला तुमचा पासवर्ड बदलू. तुम्ही कुठेही असाल, वरची पट्टी पाहा — ती प्रत्येक पानावर सोबत असते. उजवीकडे नोटिफिकेशन, मेसेज आणि तुमचे खाते नाव. तेच नाव वाट आहे. त्यावर क्लिक करा.",
        },
        {
          label: 'मेन्यू', title: 'तुमचे खाते मेन्यू उघडा',
          body: "नावावर क्लिक केल्यास तीन पर्याय: <strong>प्रोफाइल</strong>, <strong>लॉगआउट</strong> आणि <strong>अबाउट</strong>. तुमच्या खात्याशी संबंधित सगळे — नाव, फोन, भाषा, पासवर्ड — <strong>प्रोफाइल</strong>मध्ये आहे.",
          voice: "नावावर क्लिक केल्यावर तीन पर्याय उघडतात: प्रोफाइल, लॉगआउट आणि अबाउट. तुमच्या खात्याशी संबंधित सगळे प्रोफाइलमध्ये असते — नाव, फोन नंबर, भाषा आणि पासवर्ड. प्रोफाइल निवडा.",
        },
        {
          label: 'प्रोफाइल', title: 'एका नजरेत तुमचे प्रोफाइल',
          body: "<strong>नाव</strong> बदलू शकता. <strong>फोन नंबर</strong>सोबत पडताळणीसाठी <strong>जनरेट ओटीपी</strong>. <strong>ईमेल आयडी</strong> फिकट आहे — तोच तुमचा लॉगिन, तो फक्त अ‍ॅडमिनच बदलतो. <strong>भाषा निवडा</strong>ने संपूर्ण अ‍ॅप इंग्रजी, हिंदी, तमिळ आणि मराठीत बदलते.",
          voice: "हे तुमचे प्रोफाइल. नाव, जे तुम्ही बदलू शकता. फोन नंबर, जनरेट ओ टी पी ने पडताळता येतो. ईमेल फिकट आहे कारण तोच तुमचा लॉगिन — तो फक्त अ‍ॅडमिनच बदलू शकतो. आणि भाषा निवडा ने संपूर्ण अ‍ॅप चार भाषांत बदलते.",
        },
        {
          label: 'शोधा', title: 'खाली स्क्रोल करून चेंज पासवर्ड',
          body: "भाषा निवडीखाली तीन नियंत्रणे: <strong>चेंज पासवर्ड</strong>, प्रोफाइल बदलांसाठी <strong>सेव्ह</strong>, आणि <strong>लॉग आउट</strong> दुवा. <strong>चेंज पासवर्ड</strong> दाबा — नवे पान नाही, बाजूलाच एक पॅनेल उघडते.",
          voice: "प्रोफाइलचा भाग खाली स्क्रोल करा. भाषा निवडीखाली तीन नियंत्रणे दिसतात: चेंज पासवर्ड, प्रोफाइल बदलांसाठी सेव्ह, आणि लॉग आउट दुवा. चेंज पासवर्ड दाबा — तुमच्या तपशिलांच्या बाजूलाच पॅनेल उघडते.",
        },
        {
          label: 'रीसेट', title: 'जुना, नवा, खात्री',
          body: "आधी <strong>जुना पासवर्ड</strong>, मग नवा दोन वेळा — <strong>नवा पासवर्ड</strong> आणि <strong>पासवर्डची खात्री</strong>. प्रत्येक रकान्यात <strong>डोळ्याचे चिन्ह</strong> आहे. <strong>मला लॉग इन ठेवा</strong> टिक तसेच ठेवा, मग <strong>कन्फर्म</strong> दाबा.",
          voice: "आधी जुना पासवर्ड — त्यामुळे तुम्हीच आहात हे सिद्ध होते. मग नवा पासवर्ड दोन वेळा, म्हणजे टायपिंगची चूक तुम्हाला बाहेर काढणार नाही. प्रत्येक रकान्यात डोळ्याचे चिन्ह आहे, टाइप केलेले पाहण्यासाठी. मला लॉग इन ठेवा आधीच टिक आहे. मग कन्फर्म दाबा.",
        },
        {
          label: 'सारांश', title: 'कन्फर्म, कॅन्सल — आणि विसरल्यास',
          body: "<strong>कन्फर्म</strong> लगेच सेव्ह करते — पुढच्या साइन इनला नवा पासवर्ड वापरा. <strong>कॅन्सल</strong> पॅनेल बंद करते, काहीच बदलत नाही. लक्षात ठेवा, या पॅनेलला जुना पासवर्ड <em>लागतो</em>: खरोखर आठवत नसेल तर <strong>अ‍ॅडमिन</strong>ला रीसेट करावा लागेल.",
          voice: "कन्फर्म लगेच सेव्ह करते — पुढच्या साइन इनपासून नवा पासवर्ड वापरा. कॅन्सल पॅनेल बंद करते आणि काहीच बदलत नाही. आणि लक्षात ठेवा: या पॅनेलला जुना पासवर्ड लागतो, म्हणून खरोखर आठवत नसेल तर अ‍ॅडमिनकडून रीसेट करून घ्या.",
        },
      ],
    },
  },
};

export default lesson;
