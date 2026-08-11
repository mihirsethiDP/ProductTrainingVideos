import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/demo-phone-verification`;

/**
 * Demo — verifying your phone number from the dashboard.   (hidden module-demos)
 * Built from one screen recording (24s, Harvindar / Adani Navi Mumbai 4.5 MLD):
 * dashboard → account menu → Logout → sign-in screen → Profile → the "Please
 * verify your phone number" warning → Generate OTP → the OTP-on-WhatsApp
 * toast → Enter OTP + Verify & Save → the rest of the profile column.
 * Style: `overview` — one step per screen, brisk voices, ~3 min. Every screen in
 * the recording is covered; the steps are ordered by the product flow (account
 * menu before the sign-in screen it leads to) rather than the presenter's
 * back-and-forth.
 * Real 1280px frames from the recording; the baked OS cursor is patched out of
 * every one (delogo, and for `menu` a clean-row composite so the "Profile"
 * label stayed intact). The recording never completes the verification — the
 * presenter typed a placeholder into Enter OTP — so no step shows or claims a
 * "verified" end state; step 8 describes what to expect instead.
 */
const lesson: Lesson = {
  id: 'demo-phone-verification',
  moduleId: 'module-demos',
  lessonNumber: 6,
  estimatedMinutes: 3,
  expiresAt: '2026-09-06', // 30 days after job created_at (2026-08-07) — purged by cleanup-demos
  screenshots: {
    dashboard: `${BASE}/dashboard.jpg`,
    menu: `${BASE}/menu.jpg`,
    login: `${BASE}/login.jpg`,
    profile: `${BASE}/profile.jpg`,
    otpsent: `${BASE}/otpsent.jpg`,
    scrolled: `${BASE}/scrolled.jpg`,
  },
  layouts: [
    // S1 — orientation: the top bar travels with you; your name is the way in
    {
      mode: 'detail', screenshot: 'dashboard', caption: 'Your account lives in the top bar',
      spotlight: { top: '18.2%', left: '83.2%', width: '16.6%', height: '9.1%' },
      cursor: [
        { at: 0, x: 50, y: 33 },
        { at: 0.45, x: 85, y: 22.6 },
        { at: 0.85, x: 96.7, y: 22.6, click: true },
      ],
    },
    // S2 — the account menu: Profile / Logout / About
    {
      mode: 'detail', screenshot: 'menu', caption: 'Profile, Logout, About',
      spotlight: { top: '20.8%', left: '89.8%', width: '9.1%', height: '17.1%' },
      cursor: [
        { at: 0, x: 96.7, y: 22.6 },
        { at: 0.45, x: 95.3, y: 24.3 },
        { at: 0.7, x: 95.3, y: 29.6 },
        { at: 0.9, x: 95.3, y: 35 },
      ],
    },
    // S3 — where Logout lands you: saved accounts, Keep Credentials, Forgot Password
    {
      mode: 'detail', screenshot: 'login', caption: 'The sign-in screen',
      spotlight: { top: '47.6%', left: '20.8%', width: '30%', height: '43.8%' },
      cursor: [
        { at: 0, x: 36, y: 62 },
        { at: 0.4, x: 67.6, y: 53.9 },
        { at: 0.65, x: 57.5, y: 73.1 },
        { at: 0.9, x: 67.6, y: 81, click: true },
      ],
    },
    // S4 — the profile page, and the warning that starts this whole job
    {
      mode: 'detail', screenshot: 'profile', caption: 'Please verify your phone number',
      spotlight: { top: '54.8%', left: '62.9%', width: '22%', height: '12.5%' },
      cursor: [
        { at: 0, x: 73.8, y: 47 },
        { at: 0.35, x: 73.8, y: 59.5 },
        { at: 0.6, x: 73.8, y: 65.3 },
        { at: 0.8, x: 73.8, y: 81.1 },
        { at: 0.95, x: 73.8, y: 93.5 },
      ],
    },
    // S5 — one button: Generate OTP
    {
      mode: 'detail', screenshot: 'profile', caption: 'Generate OTP',
      spotlight: { top: '68.9%', left: '62.9%', width: '22%', height: '6.1%' },
      cursor: [
        { at: 0, x: 73.8, y: 65.3 },
        { at: 0.55, x: 73.8, y: 71.9 },
        { at: 0.85, x: 73.8, y: 71.9, click: true },
      ],
    },
    // S6 — the code arrives on WhatsApp, valid five minutes
    {
      mode: 'detail', screenshot: 'otpsent', caption: 'The code arrives on WhatsApp',
      spotlight: { top: '20.8%', left: '70.9%', width: '27.8%', height: '9.7%' },
      cursor: [
        { at: 0, x: 73.8, y: 71.9 },
        { at: 0.45, x: 84.8, y: 25.6 },
        { at: 0.85, x: 73.4, y: 66.7 },
      ],
    },
    // S7 — Enter OTP → Verify & Save, and the resend timer
    {
      mode: 'detail', screenshot: 'otpsent', caption: 'Enter OTP, then Verify & Save',
      spotlight: { top: '71.4%', left: '62.9%', width: '22%', height: '9.7%' },
      cursor: [
        { at: 0, x: 73.4, y: 66.7 },
        { at: 0.4, x: 68.1, y: 74.4 },
        { at: 0.75, x: 79.1, y: 74.4, click: true },
        { at: 0.95, x: 80.4, y: 79.3 },
      ],
    },
    // S8 — wrap: the rest of the column, and what a verified number buys you
    {
      mode: 'detail', screenshot: 'scrolled', caption: 'Save, Change Password, Log Out',
      spotlight: null,
      cursor: [
        { at: 0, x: 73.8, y: 68.9 },
        { at: 0.35, x: 73.8, y: 80.1 },
        { at: 0.65, x: 73.8, y: 89.9, click: true },
        { at: 0.9, x: 64.8, y: 96 },
      ],
    },
  ],
  content: {
    en: {
      title: 'Verify your<br><em>phone number.</em>',
      subtitle:
        'Your number is where WhatsApp alerts land — so the platform asks you to prove it is yours. Profile, Generate OTP, type the code. Under a minute.',
      chapter: 'Demo · Phone verification',
      steps: [
        {
          label: 'Start', title: 'Your account lives in the top bar',
          body: "The <strong>top bar</strong> follows you on every page. On the right sit <strong>notifications</strong>, <strong>messages</strong> and your <strong>account name</strong> — and that name is the door to everything about your own login.",
          voice: "Let's get your phone number verified. Wherever you are in the platform, look at the top bar — it follows you on every page. On the right you have notifications, messages, and your own account name. Click that name.",
        },
        {
          label: 'Menu', title: 'Open your account menu',
          body: "Your name opens three choices: <strong>Profile</strong>, <strong>Logout</strong> and <strong>About</strong>. Everything about your own account — name, phone number, language, password — sits behind <strong>Profile</strong>.",
          voice: "Your name opens three choices. Profile, where your own details live. Logout, which signs you out. And About, for the version you're running. We want Profile.",
        },
        {
          label: 'Sign in', title: 'What Logout brings you back to',
          body: "<strong>Logout</strong> returns you here. The card on the left remembers the <strong>accounts used on this device</strong>, each with its email and the last sign-in time — pick one instead of typing. On the right: <strong>Email</strong>, <strong>Password</strong> with an eye toggle, <strong>Keep Credentials</strong>, and <strong>Forgot Password?</strong>",
          voice: "Worth knowing what Logout brings you back to. This card remembers the accounts used on this device, each with its email and when it last signed in, so you can pick yours instead of typing it. Fill in email and password, leave Keep Credentials ticked, and press Login.",
        },
        {
          label: 'Profile', title: 'The warning that starts this job',
          body: "Your <strong>Name</strong> you can edit. Under <strong>Phone Number</strong> sits the line that brought you here: <strong>Please verify your phone number</strong>. <strong>Email Id</strong> is greyed out — that's your login, so only an admin changes it — and <strong>Select Language</strong> switches the whole app between four languages.",
          voice: "Here's your profile. Your name, which you can edit. Then your phone number — and under it, the amber line that brought us here: please verify your phone number. Your email is greyed out, because it's your login. And Select Language switches the whole app between English, Hindi, Tamil and Marathi.",
        },
        {
          label: 'Send it', title: 'One button: Generate OTP',
          body: "Check the number shown is really the phone in your pocket, then press <strong>Generate OTP</strong>. That's the whole action — the platform sends a one-time code to that number and waits for you to type it back.",
          voice: "First check the number on screen is really the phone in your pocket. Then press Generate OTP. That's the whole action — the platform sends a one-time code to that number, and waits for you to type it back.",
        },
        {
          label: 'WhatsApp', title: 'The code arrives on WhatsApp',
          body: "A green banner confirms it: <strong>OTP sent on WhatsApp. The OTP is valid for 5 minutes.</strong> Not SMS — <strong>WhatsApp</strong>, the same channel the platform uses for insight alerts and digests. The field below repeats the instruction while you fetch it.",
          voice: "A green banner confirms it — O T P sent on WhatsApp, valid for five minutes. Note the channel: not S M S, but WhatsApp. That's the same channel the platform uses for time-sensitive insight alerts and your daily digest, which is exactly why it wants this number confirmed. Open WhatsApp on that phone and read the code.",
        },
        {
          label: 'Verify', title: 'Type it in, then Verify & Save',
          body: "Type the code into <strong>Enter OTP</strong> and press <strong>Verify & Save</strong> — that one button both checks the code and stores the number, so there's nothing else to press. A pencil has appeared beside the number if you need to correct it, and <strong>Resend OTP</strong> counts down a minute in case the code never lands.",
          voice: "Type the code into Enter OTP, then press Verify and Save. That one button both checks the code and stores the number, so there's nothing else to press. If the code never lands, the Resend line counts down a minute and then lets you ask again. And if the number itself was wrong, the pencil beside it lets you fix it and start over.",
        },
        {
          label: 'Wrap', title: 'And the rest of the column',
          body: "Below sit <strong>Change Password</strong>, <strong>Save</strong> for profile edits like your name or language, and a <strong>Log Out</strong> link. Once the number is verified the amber warning goes away — and WhatsApp alerts and digests can reach you. Leave it unverified and those messages have nowhere to go.",
          voice: "The rest of the column is quick. Change Password opens a panel beside your details. Save keeps profile edits like your name or your language — the number is already stored by Verify and Save. And Log Out signs you out. Once verified, the amber warning disappears, and WhatsApp alerts and digests can actually reach you. Leave it unverified and those messages have nowhere to go — which is why this is worth the sixty seconds.",
          tip: { type: 'rememberLabel', text: 'Top bar → your name → Profile → Generate OTP → read the code on WhatsApp (5 min) → Verify & Save. Resend after a minute; the pencil fixes a wrong number.' },
        },
      ],
    },
    hi: {
      title: 'अपना <em>फ़ोन नंबर</em><br>सत्यापित कीजिए।',
      subtitle:
        'WhatsApp अलर्ट आपके इसी नंबर पर आते हैं — इसलिए प्लेटफ़ॉर्म पुष्टि माँगता है। प्रोफ़ाइल, जेनरेट ओटीपी, कोड डालिए। एक मिनट से कम।',
      chapter: 'डेमो · फ़ोन सत्यापन',
      steps: [
        {
          label: 'शुरुआत', title: 'आपका खाता ऊपर की पट्टी में है',
          body: "<strong>ऊपर की पट्टी</strong> हर पेज पर साथ चलती है। दाईं ओर <strong>नोटिफ़िकेशन</strong>, <strong>मैसेज</strong> और आपका <strong>खाता नाम</strong> — और वही नाम आपके लॉगिन से जुड़ी हर चीज़ का दरवाज़ा है।",
          voice: "चलिए आपका फ़ोन नंबर सत्यापित करें। आप प्लेटफ़ॉर्म में कहीं भी हों, ऊपर की पट्टी देखिए — यह हर पेज पर साथ चलती है। दाईं ओर नोटिफ़िकेशन, मैसेज और आपका खाता नाम है। उस नाम पर क्लिक कीजिए।",
        },
        {
          label: 'मेन्यू', title: 'अपना खाता मेन्यू खोलिए',
          body: "नाम पर क्लिक करने से तीन विकल्प खुलते हैं: <strong>प्रोफ़ाइल</strong>, <strong>लॉगआउट</strong> और <strong>अबाउट</strong>। अपने खाते से जुड़ी हर चीज़ — नाम, फ़ोन नंबर, भाषा, पासवर्ड — <strong>प्रोफ़ाइल</strong> के पीछे है।",
          voice: "नाम से तीन विकल्प खुलते हैं। प्रोफ़ाइल, जहाँ आपका विवरण रहता है। लॉगआउट, जो आपको साइन आउट करता है। और अबाउट, चल रहे वर्शन के लिए। हमें प्रोफ़ाइल चाहिए।",
        },
        {
          label: 'साइन इन', title: 'लॉगआउट आपको यहीं लाता है',
          body: "<strong>लॉगआउट</strong> आपको यहाँ लौटाता है। बाईं ओर का कार्ड <strong>इस डिवाइस पर इस्तेमाल हुए खाते</strong> याद रखता है — हर एक का ईमेल और पिछली साइन-इन का समय, ताकि टाइप करने की ज़रूरत न पड़े। दाईं ओर: <strong>ईमेल</strong>, आँख के निशान वाला <strong>पासवर्ड</strong>, <strong>कीप क्रेडेंशियल्स</strong>, और <strong>फ़ॉरगॉट पासवर्ड?</strong>",
          voice: "यह जानना उपयोगी है कि लॉगआउट आपको कहाँ लाता है। यह कार्ड इस डिवाइस पर इस्तेमाल हुए खाते याद रखता है — हर एक का ईमेल और पिछली साइन-इन का समय, इसलिए टाइप करने के बजाय अपना चुन लीजिए। ईमेल और पासवर्ड भरिए, कीप क्रेडेंशियल्स टिक रहने दीजिए, और लॉगिन दबाइए।",
        },
        {
          label: 'प्रोफ़ाइल', title: 'वही चेतावनी, जिससे यह काम शुरू होता है',
          body: "<strong>नाम</strong> बदल सकते हैं। <strong>फ़ोन नंबर</strong> के नीचे वही पंक्ति है जो आपको यहाँ लाई: <strong>कृपया अपना फ़ोन नंबर सत्यापित करें</strong>। <strong>ईमेल आईडी</strong> धूसर है — वही आपका लॉगिन है, उसे सिर्फ़ एडमिन बदलता है — और <strong>भाषा चुनें</strong> से पूरा ऐप चार भाषाओं में बदलता है।",
          voice: "यह आपका प्रोफ़ाइल है। नाम, जिसे आप बदल सकते हैं। फिर आपका फ़ोन नंबर — और उसके नीचे वही पीली पंक्ति जो हमें यहाँ लाई: कृपया अपना फ़ोन नंबर सत्यापित करें। ईमेल धूसर है, क्योंकि वही आपका लॉगिन है। और भाषा चुनें से पूरा ऐप अंग्रेज़ी, हिंदी, तमिल और मराठी में बदलता है।",
        },
        {
          label: 'भेजिए', title: 'एक ही बटन: जेनरेट ओटीपी',
          body: "देख लीजिए कि दिख रहा नंबर वाकई आपकी जेब वाले फ़ोन का है, फिर <strong>जेनरेट ओटीपी</strong> दबाइए। बस इतना ही — प्लेटफ़ॉर्म उस नंबर पर एक बार का कोड भेजता है और आपके टाइप करने का इंतज़ार करता है।",
          voice: "पहले देख लीजिए कि स्क्रीन पर दिख रहा नंबर वाकई आपकी जेब वाले फ़ोन का है। फिर जेनरेट ओटीपी दबाइए। बस इतना ही काम है — प्लेटफ़ॉर्म उस नंबर पर एक बार का कोड भेजता है और आपके उसे टाइप करने का इंतज़ार करता है।",
        },
        {
          label: 'WhatsApp', title: 'कोड WhatsApp पर आता है',
          body: "हरी पट्टी पुष्टि करती है: <strong>ओटीपी WhatsApp पर भेजा गया। यह 5 मिनट तक मान्य है।</strong> एसएमएस नहीं — <strong>WhatsApp</strong>, वही चैनल जिससे प्लेटफ़ॉर्म इनसाइट अलर्ट और डाइजेस्ट भेजता है। नीचे का खाना निर्देश दोहराता रहता है।",
          voice: "हरी पट्टी पुष्टि करती है — ओ टी पी WhatsApp पर भेजा गया, पाँच मिनट तक मान्य। चैनल पर ध्यान दीजिए: एसएमएस नहीं, बल्कि WhatsApp। यही चैनल प्लेटफ़ॉर्म समय-संवेदनशील इनसाइट अलर्ट और आपके दैनिक डाइजेस्ट के लिए इस्तेमाल करता है — इसीलिए वह इस नंबर की पुष्टि चाहता है। उस फ़ोन पर WhatsApp खोलिए और कोड पढ़िए।",
        },
        {
          label: 'सत्यापन', title: 'कोड डालिए, फिर वेरिफ़ाई एंड सेव',
          body: "कोड <strong>एंटर ओटीपी</strong> में डालिए और <strong>वेरिफ़ाई एंड सेव</strong> दबाइए — यही एक बटन कोड जाँचता है और नंबर सहेजता भी है, कुछ और दबाने की ज़रूरत नहीं। नंबर के बगल में <strong>पेंसिल</strong> आ गई है, ग़लत हो तो सुधार लीजिए, और <strong>रीसेंड ओटीपी</strong> एक मिनट गिनता है, अगर कोड न पहुँचे।",
          voice: "कोड एंटर ओटीपी में डालिए, फिर वेरिफ़ाई एंड सेव दबाइए। यही एक बटन कोड जाँचता है और नंबर सहेजता भी है, इसलिए कुछ और दबाने की ज़रूरत नहीं। अगर कोड न पहुँचे तो रीसेंड वाली पंक्ति एक मिनट गिनती है और फिर दोबारा माँगने देती है। और अगर नंबर ही ग़लत था, तो बगल की पेंसिल से उसे सुधारकर फिर से शुरू कर सकते हैं।",
        },
        {
          label: 'सारांश', title: 'और बाक़ी का हिस्सा',
          body: "नीचे <strong>चेंज पासवर्ड</strong>, प्रोफ़ाइल बदलावों के लिए <strong>सेव</strong>, और <strong>लॉग आउट</strong> लिंक है। नंबर सत्यापित होने पर पीली चेतावनी हट जाती है — और WhatsApp अलर्ट व डाइजेस्ट आप तक पहुँच पाते हैं। असत्यापित छोड़ दें, तो उन संदेशों के पास जाने की जगह नहीं रहती।",
          voice: "बाक़ी हिस्सा जल्दी हो जाएगा। चेंज पासवर्ड आपके विवरण के बगल में पैनल खोलता है। सेव प्रोफ़ाइल बदलाव जैसे नाम या भाषा सहेजता है — नंबर तो वेरिफ़ाई एंड सेव पहले ही सहेज चुका है। और लॉग आउट आपको साइन आउट करता है। सत्यापन के बाद पीली चेतावनी हट जाती है, और WhatsApp अलर्ट व डाइजेस्ट वाकई आप तक पहुँचते हैं। असत्यापित छोड़ दें तो उन संदेशों के पास जाने की जगह नहीं होती — इसीलिए ये साठ सेकंड देने लायक हैं।",
          tip: { type: 'rememberLabel', text: 'ऊपर की पट्टी → अपना नाम → प्रोफ़ाइल → जेनरेट ओटीपी → WhatsApp पर कोड पढ़ें (5 मिनट) → वेरिफ़ाई एंड सेव। एक मिनट बाद रीसेंड; ग़लत नंबर पेंसिल से सुधारें।' },
        },
      ],
    },
    ta: {
      title: 'உங்கள் <em>தொலைபேசி எண்</em><br>சரிபாருங்கள்.',
      subtitle:
        'WhatsApp எச்சரிக்கைகள் இந்த எண்ணுக்கே வரும் — அதனால் இது உங்களுடையது என்பதை உறுதிப்படுத்தச் சொல்கிறது. சுயவிவரம், ஓ.டி.பி உருவாக்கு, குறியீட்டைத் தட்டச்சு. ஒரு நிமிடத்திற்கும் குறைவு.',
      chapter: 'டெமோ · தொலைபேசி சரிபார்ப்பு',
      steps: [
        {
          label: 'தொடக்கம்', title: 'உங்கள் கணக்கு மேல் பட்டியில்',
          body: "<strong>மேல் பட்டி</strong> எல்லாப் பக்கத்திலும் உடன் வரும். வலதுபுறம் <strong>அறிவிப்புகள்</strong>, <strong>செய்திகள்</strong> மற்றும் உங்கள் <strong>கணக்குப் பெயர்</strong> — அந்தப் பெயரே உங்கள் உள்நுழைவு தொடர்பான அனைத்திற்கும் கதவு.",
          voice: "உங்கள் தொலைபேசி எண்ணைச் சரிபார்ப்போம். நீங்கள் எங்கிருந்தாலும் மேல் பட்டியைப் பாருங்கள் — அது எல்லாப் பக்கத்திலும் உடன் வரும். வலதுபுறம் அறிவிப்புகள், செய்திகள், உங்கள் கணக்குப் பெயர். அந்தப் பெயரைக் கிளிக் செய்யுங்கள்.",
        },
        {
          label: 'மெனு', title: 'கணக்கு மெனுவைத் திறங்கள்',
          body: "பெயரைக் கிளிக் செய்தால் மூன்று தேர்வுகள்: <strong>சுயவிவரம்</strong>, <strong>வெளியேறு</strong>, <strong>பற்றி</strong>. உங்கள் கணக்கு சார்ந்த அனைத்தும் — பெயர், தொலைபேசி எண், மொழி, கடவுச்சொல் — <strong>சுயவிவரத்திற்குள்</strong>.",
          voice: "பெயர் மூன்று தேர்வுகளைத் திறக்கும். சுயவிவரம், உங்கள் விவரங்கள் இருக்கும் இடம். வெளியேறு, உங்களை வெளியேற்றும். பற்றி, நடப்பு பதிப்பைக் காட்டும். நமக்கு சுயவிவரம் வேண்டும்.",
        },
        {
          label: 'உள்நுழைவு', title: 'வெளியேறினால் வந்து சேரும் இடம்',
          body: "<strong>வெளியேறு</strong> உங்களை இங்கே திரும்பக் கொண்டுவரும். இடதுபுற அட்டை <strong>இந்தச் சாதனத்தில் பயன்படுத்திய கணக்குகளை</strong> நினைவில் வைக்கும் — ஒவ்வொன்றின் மின்னஞ்சலும் கடைசி உள்நுழைவு நேரமும் இருக்கும். வலதுபுறம்: <strong>மின்னஞ்சல்</strong>, கண் சின்னத்துடன் <strong>கடவுச்சொல்</strong>, <strong>Keep Credentials</strong>, மற்றும் <strong>Forgot Password?</strong>",
          voice: "வெளியேறு உங்களை எங்கே கொண்டுவரும் என்பதை அறிவது பயனுள்ளது. இந்த அட்டை இந்தச் சாதனத்தில் பயன்படுத்திய கணக்குகளை நினைவில் வைக்கிறது — ஒவ்வொன்றின் மின்னஞ்சலும் கடைசியாக உள்நுழைந்த நேரமும் இருக்கும், எனவே தட்டச்சு செய்யாமல் உங்களுடையதைத் தேர்ந்தெடுக்கலாம். மின்னஞ்சல், கடவுச்சொல் நிரப்பி, Keep Credentials டிக் அப்படியே விட்டு, Login அழுத்துங்கள்.",
        },
        {
          label: 'சுயவிவரம்', title: 'இந்த வேலையைத் தொடங்கிய எச்சரிக்கை',
          body: "<strong>பெயரை</strong> மாற்றலாம். <strong>தொலைபேசி எண்</strong>ணுக்குக் கீழே நம்மை இங்கே கொண்டுவந்த வரி: <strong>உங்கள் தொலைபேசி எண்ணைச் சரிபாருங்கள்</strong>. <strong>மின்னஞ்சல்</strong> சாம்பல் நிறத்தில் — அதுவே உள்நுழைவு, நிர்வாகி மட்டுமே மாற்ற முடியும் — <strong>மொழி தேர்வு</strong> முழு செயலியையும் நான்கு மொழிகளில் மாற்றும்.",
          voice: "இது உங்கள் சுயவிவரம். பெயர், நீங்கள் மாற்றக்கூடியது. பிறகு உங்கள் தொலைபேசி எண் — அதற்குக் கீழே நம்மை இங்கே கொண்டுவந்த மஞ்சள் வரி: உங்கள் தொலைபேசி எண்ணைச் சரிபாருங்கள். மின்னஞ்சல் சாம்பல் நிறத்தில், ஏனெனில் அதுவே உங்கள் உள்நுழைவு. மொழி தேர்வு முழு செயலியையும் ஆங்கிலம், இந்தி, தமிழ், மராத்தியில் மாற்றும்.",
        },
        {
          label: 'அனுப்பு', title: 'ஒரே பொத்தான்: ஓ.டி.பி உருவாக்கு',
          body: "திரையில் தெரியும் எண் உண்மையிலேயே உங்கள் கையிலுள்ள தொலைபேசியா என்று பாருங்கள், பிறகு <strong>ஓ.டி.பி உருவாக்கு</strong> அழுத்துங்கள். அதுவே முழு வேலை — அந்த எண்ணுக்கு ஒரு முறை மட்டும் செல்லும் குறியீடு அனுப்பப்படும்.",
          voice: "முதலில் திரையில் தெரியும் எண் உண்மையிலேயே உங்கள் கையிலுள்ள தொலைபேசியா என்று உறுதி செய்யுங்கள். பிறகு ஓ டி பி உருவாக்கு அழுத்துங்கள். அதுவே முழு வேலை — அந்த எண்ணுக்கு ஒரு முறை மட்டும் செல்லும் குறியீட்டை அனுப்பி, நீங்கள் திரும்பத் தட்டச்சு செய்யக் காத்திருக்கும்.",
        },
        {
          label: 'WhatsApp', title: 'குறியீடு WhatsApp-இல் வரும்',
          body: "பச்சை அறிவிப்பு உறுதி செய்யும்: <strong>ஓ.டி.பி WhatsApp-இல் அனுப்பப்பட்டது. 5 நிமிடங்கள் செல்லும்.</strong> எஸ்.எம்.எஸ் அல்ல — <strong>WhatsApp</strong>, செயலி இன்சைட் எச்சரிக்கைகளுக்கும் டைஜெஸ்ட்டுக்கும் பயன்படுத்தும் அதே வழி. கீழே உள்ள புலம் அறிவுறுத்தலைத் திரும்பச் சொல்லும்.",
          voice: "பச்சை அறிவிப்பு உறுதி செய்கிறது — ஓ டி பி WhatsApp-இல் அனுப்பப்பட்டது, ஐந்து நிமிடங்கள் செல்லும். வழியைக் கவனியுங்கள்: எஸ் எம் எஸ் அல்ல, WhatsApp. காலம் தவறாத இன்சைட் எச்சரிக்கைகளுக்கும் உங்கள் தினசரி டைஜெஸ்ட்டுக்கும் செயலி பயன்படுத்தும் அதே வழி இது — அதனால்தான் இந்த எண்ணை உறுதிப்படுத்தச் சொல்கிறது. அந்தத் தொலைபேசியில் WhatsApp திறந்து குறியீட்டைப் படியுங்கள்.",
        },
        {
          label: 'சரிபார்ப்பு', title: 'தட்டச்சு செய்து Verify & Save',
          body: "குறியீட்டை <strong>Enter OTP</strong>-இல் தட்டச்சு செய்து <strong>Verify & Save</strong> அழுத்துங்கள் — அந்த ஒரு பொத்தானே குறியீட்டைச் சரிபார்த்து எண்ணையும் சேமிக்கும், வேறு எதுவும் அழுத்த வேண்டாம். எண்ணுக்குப் பக்கத்தில் <strong>பென்சில்</strong> வந்துவிட்டது, தவறெனில் திருத்தலாம். குறியீடு வரவில்லையெனில் <strong>Resend OTP</strong> ஒரு நிமிடம் எண்ணும்.",
          voice: "குறியீட்டை Enter OTP-இல் தட்டச்சு செய்து, Verify and Save அழுத்துங்கள். அந்த ஒரு பொத்தானே குறியீட்டைச் சரிபார்த்து எண்ணையும் சேமிக்கும், எனவே வேறு எதுவும் அழுத்த வேண்டாம். குறியீடு வரவில்லையெனில் Resend வரி ஒரு நிமிடம் எண்ணி, பிறகு மீண்டும் கேட்க அனுமதிக்கும். எண்ணே தவறாக இருந்தால், பக்கத்தில் உள்ள பென்சிலால் திருத்தி மீண்டும் தொடங்கலாம்.",
        },
        {
          label: 'சுருக்கம்', title: 'மீதமுள்ள பகுதி',
          body: "கீழே <strong>கடவுச்சொல் மாற்று</strong>, சுயவிவர மாற்றங்களுக்கு <strong>சேமி</strong>, மற்றும் <strong>வெளியேறு</strong> இணைப்பு. எண் சரிபார்க்கப்பட்டதும் மஞ்சள் எச்சரிக்கை மறையும் — WhatsApp எச்சரிக்கைகளும் டைஜெஸ்ட்டும் உங்களை வந்தடையும். சரிபார்க்காமல் விட்டால் அந்தச் செய்திகளுக்குச் செல்ல இடமில்லை.",
          voice: "மீதமுள்ளது விரைவில் முடியும். கடவுச்சொல் மாற்று உங்கள் விவரங்களுக்குப் பக்கத்தில் பேனலைத் திறக்கும். சேமி என்பது பெயர், மொழி போன்ற சுயவிவர மாற்றங்களைச் சேமிக்கும் — எண்ணை Verify and Save ஏற்கனவே சேமித்துவிட்டது. வெளியேறு உங்களை வெளியேற்றும். சரிபார்த்ததும் மஞ்சள் எச்சரிக்கை மறையும், WhatsApp எச்சரிக்கைகளும் டைஜெஸ்ட்டும் உண்மையிலேயே உங்களை வந்தடையும். சரிபார்க்காமல் விட்டால் அந்தச் செய்திகளுக்குச் செல்ல இடமில்லை — அதனால் இந்த அறுபது வினாடிகள் மதிப்புள்ளவை.",
          tip: { type: 'rememberLabel', text: 'மேல் பட்டி → உங்கள் பெயர் → சுயவிவரம் → ஓ.டி.பி உருவாக்கு → WhatsApp-இல் குறியீடு (5 நிமிடம்) → Verify & Save. ஒரு நிமிடம் கழித்து Resend; தவறான எண்ணைப் பென்சிலால் திருத்துங்கள்.' },
        },
      ],
    },
    mr: {
      title: 'तुमचा <em>फोन नंबर</em><br>पडताळून घ्या.',
      subtitle:
        'WhatsApp अलर्ट याच नंबरवर येतात — म्हणून प्लॅटफॉर्म खात्री मागतो. प्रोफाइल, जनरेट ओटीपी, कोड टाका. एक मिनिटापेक्षा कमी.',
      chapter: 'डेमो · फोन पडताळणी',
      steps: [
        {
          label: 'सुरुवात', title: 'तुमचे खाते वरच्या पट्टीत',
          body: "<strong>वरची पट्टी</strong> प्रत्येक पानावर सोबत असते. उजवीकडे <strong>नोटिफिकेशन</strong>, <strong>मेसेज</strong> आणि तुमचे <strong>खाते नाव</strong> — आणि तेच नाव तुमच्या लॉगिनशी संबंधित सगळ्याचा दरवाजा आहे.",
          voice: "चला तुमचा फोन नंबर पडताळून घेऊ. तुम्ही प्लॅटफॉर्ममध्ये कुठेही असाल, वरची पट्टी पाहा — ती प्रत्येक पानावर सोबत असते. उजवीकडे नोटिफिकेशन, मेसेज आणि तुमचे खाते नाव आहे. त्या नावावर क्लिक करा.",
        },
        {
          label: 'मेन्यू', title: 'तुमचे खाते मेन्यू उघडा',
          body: "नावावर क्लिक केल्यास तीन पर्याय: <strong>प्रोफाइल</strong>, <strong>लॉगआउट</strong> आणि <strong>अबाउट</strong>. तुमच्या खात्याशी संबंधित सगळे — नाव, फोन नंबर, भाषा, पासवर्ड — <strong>प्रोफाइल</strong>मध्ये आहे.",
          voice: "नावाने तीन पर्याय उघडतात. प्रोफाइल, जिथे तुमचे तपशील असतात. लॉगआउट, जे तुम्हाला साइन आउट करते. आणि अबाउट, चालू आवृत्तीसाठी. आपल्याला प्रोफाइल हवे आहे.",
        },
        {
          label: 'साइन इन', title: 'लॉगआउट तुम्हाला येथेच आणते',
          body: "<strong>लॉगआउट</strong> तुम्हाला येथे परत आणते. डावीकडचे कार्ड <strong>या डिव्हाइसवर वापरलेली खाती</strong> लक्षात ठेवते — प्रत्येकाचा ईमेल आणि शेवटची साइन-इन वेळ, म्हणजे टाइप करावे लागत नाही. उजवीकडे: <strong>ईमेल</strong>, डोळ्याच्या चिन्हासह <strong>पासवर्ड</strong>, <strong>कीप क्रेडेन्शियल्स</strong>, आणि <strong>फरगॉट पासवर्ड?</strong>",
          voice: "लॉगआउट तुम्हाला कुठे आणते हे माहीत असणे उपयोगी आहे. हे कार्ड या डिव्हाइसवर वापरलेली खाती लक्षात ठेवते — प्रत्येकाचा ईमेल आणि शेवटची साइन-इन वेळ, म्हणून टाइप करण्याऐवजी तुमचे निवडा. ईमेल आणि पासवर्ड भरा, कीप क्रेडेन्शियल्स टिक तसेच ठेवा, आणि लॉगिन दाबा.",
        },
        {
          label: 'प्रोफाइल', title: 'हेच काम सुरू करणारी सूचना',
          body: "<strong>नाव</strong> बदलू शकता. <strong>फोन नंबर</strong>खाली तीच ओळ आहे जी आपल्याला येथे आणली: <strong>कृपया तुमचा फोन नंबर पडताळा</strong>. <strong>ईमेल आयडी</strong> फिकट आहे — तोच तुमचा लॉगिन, तो फक्त अ‍ॅडमिनच बदलतो — आणि <strong>भाषा निवडा</strong>ने संपूर्ण अ‍ॅप चार भाषांत बदलते.",
          voice: "हे तुमचे प्रोफाइल. नाव, जे तुम्ही बदलू शकता. मग तुमचा फोन नंबर — आणि त्याखाली तीच पिवळी ओळ जी आपल्याला येथे आणली: कृपया तुमचा फोन नंबर पडताळा. ईमेल फिकट आहे, कारण तोच तुमचा लॉगिन आहे. आणि भाषा निवडा ने संपूर्ण अ‍ॅप इंग्रजी, हिंदी, तमिळ आणि मराठीत बदलते.",
        },
        {
          label: 'पाठवा', title: 'एकच बटण: जनरेट ओटीपी',
          body: "स्क्रीनवरचा नंबर खरोखर तुमच्या खिशातल्या फोनचा आहे का पाहा, मग <strong>जनरेट ओटीपी</strong> दाबा. एवढेच काम — प्लॅटफॉर्म त्या नंबरवर एकदाच वापरायचा कोड पाठवतो आणि तुम्ही तो टाकण्याची वाट पाहतो.",
          voice: "आधी स्क्रीनवरचा नंबर खरोखर तुमच्या खिशातल्या फोनचा आहे याची खात्री करा. मग जनरेट ओटीपी दाबा. एवढेच काम आहे — प्लॅटफॉर्म त्या नंबरवर एकदाच वापरायचा कोड पाठवतो आणि तुम्ही तो परत टाकण्याची वाट पाहतो.",
        },
        {
          label: 'WhatsApp', title: 'कोड WhatsApp वर येतो',
          body: "हिरवी पट्टी खात्री देते: <strong>ओटीपी WhatsApp वर पाठवला. तो 5 मिनिटे वैध आहे.</strong> एसएमएस नाही — <strong>WhatsApp</strong>, जो चॅनेल प्लॅटफॉर्म इनसाइट अलर्ट आणि डायजेस्टसाठी वापरतो. खालचा रकाना सूचना पुन्हा सांगत राहतो.",
          voice: "हिरवी पट्टी खात्री देते — ओ टी पी WhatsApp वर पाठवला, पाच मिनिटे वैध. चॅनेलकडे लक्ष द्या: एसएमएस नाही, तर WhatsApp. वेळेवर लागणाऱ्या इनसाइट अलर्टसाठी आणि तुमच्या रोजच्या डायजेस्टसाठी प्लॅटफॉर्म हाच चॅनेल वापरतो — म्हणूनच त्याला या नंबरची खात्री हवी आहे. त्या फोनवर WhatsApp उघडा आणि कोड वाचा.",
        },
        {
          label: 'पडताळणी', title: 'कोड टाका, मग व्हेरिफाय अँड सेव्ह',
          body: "कोड <strong>एंटर ओटीपी</strong>मध्ये टाका आणि <strong>व्हेरिफाय अँड सेव्ह</strong> दाबा — तेच एक बटण कोड तपासते आणि नंबर सेव्हही करते, दुसरे काही दाबायची गरज नाही. नंबराशेजारी <strong>पेन्सिल</strong> आली आहे, चुकला असेल तर दुरुस्त करा, आणि <strong>रीसेंड ओटीपी</strong> एक मिनिट मोजते, कोड न आल्यास.",
          voice: "कोड एंटर ओटीपीमध्ये टाका, मग व्हेरिफाय अँड सेव्ह दाबा. तेच एक बटण कोड तपासते आणि नंबर सेव्हही करते, म्हणून दुसरे काही दाबायची गरज नाही. कोड न आल्यास रीसेंडची ओळ एक मिनिट मोजते आणि मग पुन्हा मागू देते. आणि नंबरच चुकीचा असेल, तर शेजारच्या पेन्सिलने तो दुरुस्त करून पुन्हा सुरू करा.",
        },
        {
          label: 'सारांश', title: 'आणि उरलेला भाग',
          body: "खाली <strong>चेंज पासवर्ड</strong>, प्रोफाइल बदलांसाठी <strong>सेव्ह</strong>, आणि <strong>लॉग आउट</strong> दुवा आहे. नंबर पडताळल्यावर पिवळी सूचना जाते — आणि WhatsApp अलर्ट व डायजेस्ट तुमच्यापर्यंत पोहोचू शकतात. न पडताळता ठेवले, तर त्या संदेशांना जायला जागाच नसते.",
          voice: "उरलेला भाग पटकन होईल. चेंज पासवर्ड तुमच्या तपशिलांशेजारी पॅनेल उघडते. सेव्ह नाव किंवा भाषा असे प्रोफाइल बदल जपते — नंबर तर व्हेरिफाय अँड सेव्हने आधीच जपला आहे. आणि लॉग आउट तुम्हाला साइन आउट करते. पडताळणीनंतर पिवळी सूचना जाते, आणि WhatsApp अलर्ट व डायजेस्ट खरोखर तुमच्यापर्यंत पोहोचतात. न पडताळता ठेवले तर त्या संदेशांना जायला जागाच नसते — म्हणून हे साठ सेकंद देण्यासारखे आहेत.",
          tip: { type: 'rememberLabel', text: 'वरची पट्टी → तुमचे नाव → प्रोफाइल → जनरेट ओटीपी → WhatsApp वर कोड वाचा (5 मिनिटे) → व्हेरिफाय अँड सेव्ह. एक मिनिटानंतर रीसेंड; चुकीचा नंबर पेन्सिलने दुरुस्त करा.' },
        },
      ],
    },
  },
};

export default lesson;
