import type { CommRow, Lesson } from '../../types';

/**
 * Module 8 · Lesson 2 — Emails, Reports & WhatsApp.   Tag: M8.L2
 * Open a communication: emails are recorded with their full content (with or
 * without attachments); reports carry a downloadable PDF; WhatsApp messages
 * are recorded too, each with a delivery status chip.
 */

const SENDER = 'Doctor Paani';

const EMAIL = {
  subject: 'Post escalation level 3 alerts for Plaksha STP + WTP',
  body: [
    'Dear Satyadev Singh,',
    'We would like to inform you that the following alerts for Plaksha STP + WTP have been open for a long time. As a result, they have escalated to escalation level 3 and are still pending resolution:',
    '• Utility block 2 flushing tank level is high (reached 90%) — Opened at 20:28 on 02 May 2026. 51 days and 11 hours have elapsed since the alert was raised.',
    'Please review these alerts at your earliest convenience to ensure timely handling. If you require additional information or assistance, do not hesitate to reach out.',
    'Kind regards,',
    'Team Digital Paani',
  ],
};

const REPORT_EMAIL = {
  subject: 'Ahmedabad Airport - Daily Report',
  body: [
    'Daily Report for date 22/06/2026 capturing all key metrics for your plant has been generated. Please click on the PDF below to view and download it. Should you require any further assistance, please write to us at support@digitalpaani.com.',
  ],
  attachment: 'Ahmedabad Airport - Daily Report.pdf',
};

const WA_TEXT =
  'FYI - ESCALATION 3 - In M3M, there is an unresolved problem (Bar screen is about to get choked 75%+ choked). It has not been resolved on time by Priyanka Ghlyan and it has been escalated to Omprakash Yadav, Estate Manager, Swadesh and Mansi jain. Please check the DigitalPaani portal for more details.';

// a WhatsApp-filtered list that shows every status chip
const WA_ROWS: CommRow[] = [
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 3 - Bar screen about to get choked (75%+).', text: WA_TEXT, time: 'about 1 hour ago', status: 'delivered' },
  { medium: 'whatsapp', sender: SENDER, title: 'INITIAL ALERT for M3M - Bar screen about to get choked (75%+).', text: 'Please address this. Priyanka Ghlyan has been notified. Check the DigitalPaani portal.', time: 'about 2 hours ago', status: 'read' },
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 2 - Bar screen about to get choked (75%+).', text: 'It has not been resolved on time by Priyanka Ghlyan. Check the DigitalPaani portal.', time: 'about 3 hours ago', status: 'sent' },
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 1 - Bar screen about to get choked (75%+).', text: 'It has not been resolved on time by Priyanka Ghlyan. Check the DigitalPaani portal.', time: 'about 4 hours ago', status: 'undelivered', ring: true },
  { medium: 'whatsapp', sender: SENDER, title: 'DUE: In M3M, an issue remains unresolved and has become overdue.', text: 'Priyanka Ghlyan must resolve it to avoid escalation. Check the DigitalPaani portal.', time: 'about 5 hours ago', status: 'failed' },
];

const lesson: Lesson = {
  id: 'lesson-02-emails-and-whatsapp',
  moduleId: 'module-08-communications',
  lessonNumber: 2,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'comm', caption: 'An email, in full', widgetState: { comm: { mode: 'email', email: EMAIL, highlight: 'content' } }, cursor: [{ at: 0.3, x: 40, y: 45 }] },
    { mode: 'widget', widget: 'comm', caption: 'Attachments & reports', widgetState: { comm: { mode: 'email', email: REPORT_EMAIL, highlight: 'attachment' } }, cursor: [{ at: 0.4, x: 40, y: 70 }] },
    { mode: 'widget', widget: 'comm', caption: 'A WhatsApp message, recorded', widgetState: { comm: { mode: 'whatsapp', whatsapp: { sender: SENDER, time: 'about 7 hours ago', text: WA_TEXT, status: 'delivered' }, highlight: 'content' } }, cursor: [{ at: 0.3, x: 45, y: 55 }] },
    { mode: 'widget', widget: 'comm', caption: 'Delivery status chips', widgetState: { comm: { mode: 'list', rows: WA_ROWS, filters: ['WhatsApp'], highlight: 'status' } }, cursor: [{ at: 0.3, x: 35, y: 30 }, { at: 0.7, x: 35, y: 70 }] },
    { mode: 'widget', widget: 'comm', caption: 'The five statuses', widgetState: { comm: { mode: 'list', rows: WA_ROWS, filters: ['WhatsApp'], highlight: 'status' } }, cursor: [{ at: 0.5, x: 35, y: 50 }] },
  ],
  content: {
    en: {
      title: 'Emails, Reports<br>& <em>WhatsApp.</em>',
      subtitle: "Open any communication and you see exactly what was sent — full content, attachments, and for WhatsApp, whether it landed.",
      chapter: 'Chapter Eight · Inside a Communication',
      steps: [
        {
          label: 'Email', title: 'The full email, recorded',
          body: "Open an email and the whole thing is here — its <strong>Subject</strong> and the complete <strong>Message</strong> body, word for word. Nothing is summarised or trimmed: the client sees the exact email that was sent, including who it was addressed to and the alerts it described.",
          voice: "Let's open an email. Everything about it is recorded — the subject line, and the complete message body, exactly as it was sent. We don't summarise it or trim it down; the full text is preserved. Here you can read the whole escalation email to the client — the greeting, the alerts that have been open too long, the details of each one, and the sign-off from Team Digital Paani. If a question ever comes up about what was communicated, the precise wording is right here on record.",
        },
        {
          label: 'Attachments', title: 'With or without attachments',
          body: "Emails are recorded <strong>with or without attachments</strong>. When there's a file — like a daily report's <strong>PDF</strong> — it's attached right in the record, with a <strong>download</strong> button. So a report email keeps both its message and its PDF, together, forever.",
          voice: "Emails are stored with or without their attachments — whatever was actually sent. When an email carried a file, it's kept right here in the record. Take a daily report: the email explains that the report has been generated, and attached underneath is the actual P D F, with a download button to open or save it. So the report email isn't just a note saying a report exists — the report itself travels with it, stored together, available to the client whenever they want it. This is exactly what the Report filter we saw earlier pulls together.",
        },
        {
          label: 'WhatsApp', title: 'Every WhatsApp message, kept',
          body: "WhatsApp messages are recorded too — the <strong>full text</strong> of every one. Open a WhatsApp entry and you see the message exactly as the client received it, with the sender and the time it went out.",
          voice: "It's not just email. Every WhatsApp message we send is recorded as well, with its full text preserved. Open a WhatsApp entry and you see the message exactly as the client received it on their phone — here, an escalation about the bar screen, naming who it was escalated to and pointing them to the DigitalPaani portal. Same complete record as email: the sender, the time it was sent, and every word of the message.",
        },
        {
          label: 'Status', title: 'Did it land? Status chips',
          body: "WhatsApp adds one more thing email can't: a <strong>delivery status</strong> chip on every message — <span style=\"color:#1f6b44\">Delivered</span>, <span style=\"color:#1d5a8a\">Read</span>, <span style=\"color:#5a6b8c\">Sent</span>, <span style=\"color:#b07d15\">Undelivered</span>, or <span style=\"color:#c74e3f\">Failed</span>. At a glance you know whether the message actually reached the client.",
          voice: "And WhatsApp gives us one thing email can't — we know what happened to the message after we sent it. Every WhatsApp communication carries a delivery status chip. Sent means it left our system. Delivered means it reached the client's phone. Read means they've actually opened it. And if something went wrong, you'll see undelivered, or failed. So you're never left wondering whether an important escalation got through — the status tells you, message by message, right in the list.",
        },
        {
          label: 'Recap', title: 'The whole picture',
          body: "Five statuses tell the whole delivery story — <strong>Sent → Delivered → Read</strong> when all goes well, and <strong>Undelivered</strong> or <strong>Failed</strong> when it doesn't. Together with full email and report records, Communications gives the client — and us — complete, lasting proof of every message.",
          voice: "So that's the whole picture. The five statuses tell the delivery story end to end: sent, then delivered, then read when everything goes smoothly — and undelivered or failed to flag the ones that need a follow-up. Put that together with the full content of every email, the PDFs of every report, and the complete text of every WhatsApp message, and Communications becomes a single, lasting, trustworthy record. For the client, it's transparency — they can see everything we sent. For us, it's proof — that the right people were told, the right way, at the right time.",
          tip: { type: 'rememberLabel', text: 'WhatsApp statuses: Sent → Delivered → Read; Undelivered / Failed flag a problem. Emails keep full content + attachments; reports carry their PDF.' },
        },
      ],
    },
    hi: {
      title: 'ईमेल, रिपोर्ट<br>और <em>WhatsApp.</em>',
      subtitle: 'कोई भी संदेश खोलें और ठीक देखें क्या भेजा गया — पूरी सामग्री, अटैचमेंट, और WhatsApp के लिए, क्या वह पहुँचा।',
      chapter: 'अध्याय आठ · संदेश के अंदर',
      steps: [
        {
          label: 'ईमेल', title: 'पूरा ईमेल, रिकॉर्ड किया',
          body: "ईमेल खोलें और पूरा यहाँ है — उसका <strong>Subject</strong> और पूरा <strong>Message</strong>, शब्द-दर-शब्द। कुछ संक्षिप्त या काटा नहीं जाता: क्लाइंट ठीक वही ईमेल देखता है जो भेजा गया।",
          voice: "चलिए एक ईमेल खोलते हैं। उसके बारे में सब रिकॉर्ड है — सब्जेक्ट लाइन, और पूरा संदेश, ठीक जैसा भेजा गया। हम उसे संक्षिप्त या कम नहीं करते; पूरा पाठ सुरक्षित रहता है। यहाँ आप क्लाइंट को पूरा एस्केलेशन ईमेल पढ़ सकते हैं — अभिवादन, बहुत देर से खुले अलर्ट, हर एक का विवरण, और Team Digital Paani का हस्ताक्षर। अगर कभी सवाल उठे कि क्या बताया गया, सटीक शब्द यहीं रिकॉर्ड पर हैं।",
        },
        {
          label: 'अटैचमेंट', title: 'अटैचमेंट के साथ या बिना',
          body: "ईमेल <strong>अटैचमेंट के साथ या बिना</strong> रिकॉर्ड होते हैं। जब कोई फ़ाइल हो — जैसे दैनिक रिपोर्ट की <strong>PDF</strong> — वह रिकॉर्ड में ही जुड़ी होती है, एक <strong>डाउनलोड</strong> बटन के साथ। तो रिपोर्ट ईमेल अपना संदेश और अपनी PDF दोनों रखता है।",
          voice: "ईमेल अपने अटैचमेंट के साथ या बिना संग्रहीत होते हैं — जो भी सचमुच भेजा गया। जब ईमेल में कोई फ़ाइल थी, वह यहीं रिकॉर्ड में रखी जाती है। एक दैनिक रिपोर्ट लीजिए: ईमेल बताता है कि रिपोर्ट तैयार हो गई, और नीचे जुड़ी है असली पी डी एफ़, खोलने या सहेजने के लिए एक डाउनलोड बटन के साथ। तो रिपोर्ट ईमेल सिर्फ़ एक नोट नहीं कि रिपोर्ट मौजूद है — रिपोर्ट ख़ुद उसके साथ चलती है, साथ संग्रहीत, क्लाइंट को जब चाहे उपलब्ध। यही वह है जो पहले देखा Report फ़िल्टर एक साथ लाता है।",
        },
        {
          label: 'WhatsApp', title: 'हर WhatsApp संदेश, रखा गया',
          body: "WhatsApp संदेश भी रिकॉर्ड होते हैं — हर एक का <strong>पूरा पाठ</strong>। WhatsApp प्रविष्टि खोलें और संदेश ठीक वैसा देखें जैसा क्लाइंट को मिला, भेजने वाले और समय के साथ।",
          voice: "सिर्फ़ ईमेल नहीं। हर WhatsApp संदेश जो हम भेजते हैं वह भी रिकॉर्ड होता है, अपने पूरे पाठ के साथ। WhatsApp प्रविष्टि खोलें और संदेश ठीक वैसा देखें जैसा क्लाइंट को उसके फ़ोन पर मिला — यहाँ, बार स्क्रीन के बारे में एक एस्केलेशन, यह बताते हुए कि किसे एस्केलेट किया और उन्हें डिजिटलपानी पोर्टल की ओर इशारा करते हुए। ईमेल जैसा ही पूरा रिकॉर्ड: भेजने वाला, भेजने का समय, और संदेश का हर शब्द।",
        },
        {
          label: 'स्टेटस', title: 'क्या वह पहुँचा? स्टेटस चिप्स',
          body: "WhatsApp एक और चीज़ जोड़ता है जो ईमेल नहीं कर सकता: हर संदेश पर एक <strong>डिलीवरी स्टेटस</strong> चिप — <span style=\"color:#1f6b44\">Delivered</span>, <span style=\"color:#1d5a8a\">Read</span>, <span style=\"color:#5a6b8c\">Sent</span>, <span style=\"color:#b07d15\">Undelivered</span>, या <span style=\"color:#c74e3f\">Failed</span>। एक नज़र में पता कि संदेश क्लाइंट तक पहुँचा या नहीं।",
          voice: "और WhatsApp हमें एक चीज़ देता है जो ईमेल नहीं दे सकता — भेजने के बाद संदेश का क्या हुआ हम जानते हैं। हर WhatsApp संदेश पर एक डिलीवरी स्टेटस चिप होती है। Sent मतलब वह हमारे सिस्टम से निकला। Delivered मतलब वह क्लाइंट के फ़ोन तक पहुँचा। Read मतलब उन्होंने सचमुच खोला। और अगर कुछ ग़लत हुआ, आप undelivered या failed देखेंगे। तो आप कभी असमंजस में नहीं कि कोई ज़रूरी एस्केलेशन पहुँचा या नहीं — स्टेटस बताता है, संदेश दर संदेश, सूची में ही।",
        },
        {
          label: 'सारांश', title: 'पूरी तस्वीर',
          body: "पाँच स्टेटस पूरी डिलीवरी कहानी बताते हैं — सब ठीक हो तो <strong>Sent → Delivered → Read</strong>, और न हो तो <strong>Undelivered</strong> या <strong>Failed</strong>। पूरे ईमेल व रिपोर्ट रिकॉर्ड के साथ, कम्युनिकेशन क्लाइंट को — और हमें — हर संदेश का पूरा, स्थायी प्रमाण देता है।",
          voice: "तो यह रही पूरी तस्वीर। पाँच स्टेटस डिलीवरी की कहानी अंत तक बताते हैं: sent, फिर delivered, फिर read जब सब सुचारू हो — और undelivered या failed उन्हें चिह्नित करने के लिए जिन्हें फ़ॉलो-अप चाहिए। इसे हर ईमेल की पूरी सामग्री, हर रिपोर्ट की पी डी एफ़, और हर WhatsApp संदेश के पूरे पाठ के साथ जोड़िए, और कम्युनिकेशन एक एकल, स्थायी, भरोसेमंद रिकॉर्ड बन जाता है। क्लाइंट के लिए, यह पारदर्शिता है — वे सब देख सकते हैं जो हमने भेजा। हमारे लिए, यह प्रमाण है — कि सही लोगों को, सही तरीके से, सही समय पर बताया गया।",
          tip: { type: 'rememberLabel', text: 'WhatsApp स्टेटस: Sent → Delivered → Read; Undelivered / Failed समस्या दर्शाते हैं। ईमेल पूरी सामग्री + अटैचमेंट रखते हैं; रिपोर्ट अपनी PDF रखती है।' },
        },
      ],
    },
    ta: {
      title: 'மின்னஞ்சல், அறிக்கைகள்<br>& <em>WhatsApp.</em>',
      subtitle: 'எந்த தொடர்பையும் திறந்தால் என்ன அனுப்பப்பட்டது என்று துல்லியமாகப் பார்க்கலாம் — முழு உள்ளடக்கம், இணைப்புகள், WhatsApp-க்கு அது சேர்ந்ததா.',
      chapter: 'அத்தியாயம் எட்டு · ஒரு தொடர்பின் உள்ளே',
      steps: [
        {
          label: 'மின்னஞ்சல்', title: 'முழு மின்னஞ்சல், பதிவு',
          body: "ஒரு மின்னஞ்சலைத் திறந்தால் முழுவதும் இங்கே — அதன் <strong>Subject</strong> மற்றும் முழு <strong>Message</strong>, வார்த்தைக்கு வார்த்தை. சுருக்கப்படவோ வெட்டப்படவோ இல்லை: அனுப்பப்பட்ட அதே மின்னஞ்சலை வாடிக்கையாளர் பார்க்கிறார்.",
          voice: "ஒரு மின்னஞ்சலைத் திறப்போம். அதைப் பற்றிய அனைத்தும் பதிவாகியுள்ளது — பொருள் வரி, முழு செய்தி உடல், அனுப்பப்பட்டபடியே. நாங்கள் சுருக்கவோ குறைக்கவோ இல்லை; முழு உரை பாதுகாக்கப்படுகிறது. இங்கே வாடிக்கையாளருக்கான முழு எஸ்கலேஷன் மின்னஞ்சலைப் படிக்கலாம் — வாழ்த்து, நீண்ட நாள் திறந்திருந்த எச்சரிக்கைகள், ஒவ்வொன்றின் விவரம், Team Digital Paani கையொப்பம். என்ன தெரிவிக்கப்பட்டது என்று கேள்வி எழுந்தால், சரியான வார்த்தைகள் இங்கே பதிவில்.",
        },
        {
          label: 'இணைப்புகள்', title: 'இணைப்புடன் அல்லது இல்லாமல்',
          body: "மின்னஞ்சல்கள் <strong>இணைப்புடன் அல்லது இல்லாமல்</strong> பதிவாகின்றன. ஒரு கோப்பு இருந்தால் — தினசரி அறிக்கையின் <strong>PDF</strong> போல — அது பதிவிலேயே இணைக்கப்பட்டுள்ளது, ஒரு <strong>download</strong> பொத்தானுடன். எனவே அறிக்கை மின்னஞ்சல் அதன் செய்தியையும் PDF-ஐயும் சேர்த்து வைக்கிறது.",
          voice: "மின்னஞ்சல்கள் அவற்றின் இணைப்புகளுடன் அல்லது இல்லாமல் சேமிக்கப்படுகின்றன — உண்மையில் என்ன அனுப்பப்பட்டதோ அது. ஒரு மின்னஞ்சல் ஒரு கோப்பைச் சுமந்திருந்தால், அது இங்கேயே பதிவில் வைக்கப்படுகிறது. ஒரு தினசரி அறிக்கையை எடுங்கள்: அறிக்கை உருவாக்கப்பட்டது என்று மின்னஞ்சல் விளக்குகிறது, கீழே இணைக்கப்பட்டுள்ளது உண்மையான பி டி எஃப், திறக்க அல்லது சேமிக்க ஒரு download பொத்தானுடன். எனவே அறிக்கை மின்னஞ்சல் வெறும் குறிப்பு அல்ல — அறிக்கையே அதனுடன் பயணிக்கிறது, சேர்ந்து சேமிக்கப்பட்டு, வாடிக்கையாளர் விரும்பும்போது கிடைக்கிறது. முன்பு பார்த்த Report வடிப்பான் இணைப்பதுதான் இது.",
        },
        {
          label: 'WhatsApp', title: 'ஒவ்வொரு WhatsApp செய்தியும் வைக்கப்படுகிறது',
          body: "WhatsApp செய்திகளும் பதிவாகின்றன — ஒவ்வொன்றின் <strong>முழு உரை</strong>. ஒரு WhatsApp பதிவைத் திறந்தால் வாடிக்கையாளர் பெற்றபடியே செய்தியைப் பார்க்கலாம், அனுப்பியவர் மற்றும் நேரத்துடன்.",
          voice: "மின்னஞ்சல் மட்டுமல்ல. நாம் அனுப்பும் ஒவ்வொரு WhatsApp செய்தியும் பதிவாகிறது, அதன் முழு உரையுடன். ஒரு WhatsApp பதிவைத் திறந்தால் வாடிக்கையாளர் தன் தொலைபேசியில் பெற்றபடியே செய்தியைப் பார்க்கலாம் — இங்கே, பார் ஸ்கிரீன் பற்றிய ஒரு எஸ்கலேஷன், யாருக்கு எஸ்கலேட் செய்யப்பட்டது என்று பெயரிட்டு, டிஜிட்டல்பானி போர்ட்டலை நோக்கிச் சுட்டிக்காட்டி. மின்னஞ்சல் போன்ற முழுப் பதிவு: அனுப்பியவர், அனுப்பிய நேரம், செய்தியின் ஒவ்வொரு வார்த்தையும்.",
        },
        {
          label: 'நிலை', title: 'அது சேர்ந்ததா? நிலை சில்லுகள்',
          body: "மின்னஞ்சலால் முடியாத ஒன்றை WhatsApp சேர்க்கிறது: ஒவ்வொரு செய்தியிலும் ஒரு <strong>டெலிவரி நிலை</strong> சில்லு — <span style=\"color:#1f6b44\">Delivered</span>, <span style=\"color:#1d5a8a\">Read</span>, <span style=\"color:#5a6b8c\">Sent</span>, <span style=\"color:#b07d15\">Undelivered</span>, அல்லது <span style=\"color:#c74e3f\">Failed</span>. செய்தி வாடிக்கையாளரை அடைந்ததா என்று ஒரே பார்வையில்.",
          voice: "மின்னஞ்சலால் முடியாத ஒன்றை WhatsApp தருகிறது — அனுப்பிய பிறகு செய்திக்கு என்ன ஆனது என்று தெரியும். ஒவ்வொரு WhatsApp தொடர்பும் ஒரு டெலிவரி நிலை சில்லைச் சுமக்கிறது. Sent என்றால் நம் சிஸ்டத்திலிருந்து வெளியேறியது. Delivered என்றால் வாடிக்கையாளரின் தொலைபேசியை அடைந்தது. Read என்றால் அவர்கள் உண்மையில் திறந்தார்கள். ஏதேனும் தவறானால், undelivered அல்லது failed காண்பீர்கள். எனவே ஒரு முக்கியமான எஸ்கலேஷன் சென்றடைந்ததா என்று குழம்ப வேண்டியதில்லை — நிலை சொல்கிறது, செய்திக்குச் செய்தி, பட்டியலிலேயே.",
        },
        {
          label: 'சுருக்கம்', title: 'முழுச் சித்திரம்',
          body: "ஐந்து நிலைகள் முழு டெலிவரி கதையைச் சொல்கின்றன — நன்றாக நடந்தால் <strong>Sent → Delivered → Read</strong>, இல்லையெனில் <strong>Undelivered</strong> அல்லது <strong>Failed</strong>. முழு மின்னஞ்சல் & அறிக்கைப் பதிவுகளுடன், தொடர்பு வாடிக்கையாளருக்கும் — நமக்கும் — ஒவ்வொரு செய்தியின் முழு, நிலையான சான்றைத் தருகிறது.",
          voice: "இதுதான் முழுச் சித்திரம். ஐந்து நிலைகள் டெலிவரி கதையை இறுதிவரை சொல்கின்றன: sent, பின் delivered, பின் read எல்லாம் சுமூகமாக நடந்தால் — undelivered அல்லது failed பின்தொடர்தல் தேவைப்படுபவற்றைக் குறிக்க. அதை ஒவ்வொரு மின்னஞ்சலின் முழு உள்ளடக்கம், ஒவ்வொரு அறிக்கையின் பி டி எஃப், ஒவ்வொரு WhatsApp செய்தியின் முழு உரையுடன் சேர்த்தால், தொடர்பு ஒரே, நிலையான, நம்பகமான பதிவாகிறது. வாடிக்கையாளருக்கு, இது வெளிப்படைத்தன்மை — நாம் அனுப்பிய அனைத்தையும் பார்க்கலாம். நமக்கு, இது சான்று — சரியான நபர்களுக்கு, சரியான முறையில், சரியான நேரத்தில் தெரிவிக்கப்பட்டது.",
          tip: { type: 'rememberLabel', text: 'WhatsApp நிலைகள்: Sent → Delivered → Read; Undelivered / Failed சிக்கலைக் குறிக்கும். மின்னஞ்சல்கள் முழு உள்ளடக்கம் + இணைப்புகள்; அறிக்கைகள் PDF சுமக்கும்.' },
        },
      ],
    },
    mr: {
      title: 'ईमेल, अहवाल<br>आणि <em>WhatsApp.</em>',
      subtitle: 'कोणताही संदेश उघडा आणि नेमके पाहा काय पाठवले — पूर्ण मजकूर, अटॅचमेंट, आणि WhatsAppसाठी, तो पोहोचला का.',
      chapter: 'अध्याय आठ · संदेशाच्या आत',
      steps: [
        {
          label: 'ईमेल', title: 'पूर्ण ईमेल, नोंदवलेला',
          body: "ईमेल उघडा आणि सर्व इथे आहे — त्याचा <strong>Subject</strong> आणि पूर्ण <strong>Message</strong>, शब्दशः. काहीही सारांशित किंवा कापलेले नाही: क्लायंट नेमका तोच ईमेल पाहतो जो पाठवला.",
          voice: "चला एक ईमेल उघडू. त्याबद्दल सर्व नोंदवलेले आहे — सब्जेक्ट ओळ, आणि पूर्ण संदेश, अगदी जसा पाठवला. आम्ही तो सारांशित किंवा कमी करत नाही; पूर्ण मजकूर जपला जातो. इथे तुम्ही क्लायंटला पूर्ण एस्केलेशन ईमेल वाचू शकता — अभिवादन, खूप वेळ उघडे राहिलेले अलर्ट, प्रत्येकाचे तपशील, आणि Team Digital Paani ची सही. काय कळवले याबद्दल कधी प्रश्न आला, तर नेमके शब्द इथेच नोंदीवर आहेत.",
        },
        {
          label: 'अटॅचमेंट', title: 'अटॅचमेंटसह किंवा त्याशिवाय',
          body: "ईमेल <strong>अटॅचमेंटसह किंवा त्याशिवाय</strong> नोंदवले जातात. जेव्हा एखादी फाइल असते — जसे दैनिक अहवालाची <strong>PDF</strong> — ती नोंदीतच जोडलेली असते, एका <strong>download</strong> बटणासह. म्हणून अहवाल ईमेल त्याचा संदेश आणि त्याची PDF दोन्ही ठेवतो.",
          voice: "ईमेल त्यांच्या अटॅचमेंटसह किंवा त्याशिवाय साठवले जातात — जे प्रत्यक्षात पाठवले तेच. जेव्हा ईमेलमध्ये एखादी फाइल होती, ती इथेच नोंदीत ठेवली जाते. एक दैनिक अहवाल घ्या: ईमेल सांगतो की अहवाल तयार झाला, आणि खाली जोडलेली आहे प्रत्यक्ष पी डी एफ, उघडायला किंवा सेव्ह करायला एका download बटणासह. म्हणून अहवाल ईमेल फक्त एक नोंद नाही की अहवाल अस्तित्वात आहे — अहवाल स्वतः त्यासोबत प्रवास करतो, एकत्र साठवलेला, क्लायंटला हवा तेव्हा उपलब्ध. आधी पाहिलेला Report फिल्टर हेच एकत्र आणतो.",
        },
        {
          label: 'WhatsApp', title: 'प्रत्येक WhatsApp संदेश, ठेवलेला',
          body: "WhatsApp संदेशही नोंदवले जातात — प्रत्येकाचा <strong>पूर्ण मजकूर</strong>. WhatsApp नोंद उघडा आणि संदेश अगदी जसा क्लायंटला मिळाला तसा पाहा, पाठवणारा आणि वेळेसह.",
          voice: "फक्त ईमेल नाही. आम्ही पाठवलेला प्रत्येक WhatsApp संदेशही नोंदवला जातो, त्याच्या पूर्ण मजकुरासह. WhatsApp नोंद उघडा आणि संदेश अगदी जसा क्लायंटला त्याच्या फोनवर मिळाला तसा पाहा — इथे, बार स्क्रीनबद्दल एक एस्केलेशन, कोणाला एस्केलेट केले ते नाव घेऊन, आणि त्यांना डिजिटलपानी पोर्टलकडे निर्देश करत. ईमेलसारखीच पूर्ण नोंद: पाठवणारा, पाठवण्याची वेळ, आणि संदेशाचा प्रत्येक शब्द.",
        },
        {
          label: 'स्टेटस', title: 'तो पोहोचला का? स्टेटस चिप्स',
          body: "WhatsApp एक गोष्ट जोडते जी ईमेल करू शकत नाही: प्रत्येक संदेशावर एक <strong>डिलिव्हरी स्टेटस</strong> चिप — <span style=\"color:#1f6b44\">Delivered</span>, <span style=\"color:#1d5a8a\">Read</span>, <span style=\"color:#5a6b8c\">Sent</span>, <span style=\"color:#b07d15\">Undelivered</span>, किंवा <span style=\"color:#c74e3f\">Failed</span>. एका दृष्टीक्षेपात कळते की संदेश क्लायंटपर्यंत पोहोचला का.",
          voice: "आणि WhatsApp आम्हाला एक गोष्ट देते जी ईमेल देऊ शकत नाही — पाठवल्यानंतर संदेशाचे काय झाले ते आम्हाला कळते. प्रत्येक WhatsApp संदेशावर एक डिलिव्हरी स्टेटस चिप असते. Sent म्हणजे तो आमच्या सिस्टममधून निघाला. Delivered म्हणजे तो क्लायंटच्या फोनपर्यंत पोहोचला. Read म्हणजे त्यांनी प्रत्यक्ष उघडला. आणि काही चुकले तर, तुम्हाला undelivered किंवा failed दिसेल. म्हणून एखादे महत्त्वाचे एस्केलेशन पोहोचले का याबद्दल तुम्ही कधीच संभ्रमात नसता — स्टेटस सांगते, संदेशागणिक, यादीतच.",
        },
        {
          label: 'सारांश', title: 'संपूर्ण चित्र',
          body: "पाच स्टेटस संपूर्ण डिलिव्हरी कथा सांगतात — सर्व ठीक असल्यास <strong>Sent → Delivered → Read</strong>, आणि नसल्यास <strong>Undelivered</strong> किंवा <strong>Failed</strong>. पूर्ण ईमेल व अहवाल नोंदींसह, कम्युनिकेशन क्लायंटला — आणि आम्हाला — प्रत्येक संदेशाचा पूर्ण, टिकाऊ पुरावा देते.",
          voice: "तर हे संपूर्ण चित्र. पाच स्टेटस डिलिव्हरीची कथा शेवटपर्यंत सांगतात: sent, मग delivered, मग read सर्व सुरळीत असल्यास — आणि undelivered किंवा failed फॉलो-अप लागणाऱ्यांना खूण करायला. ते प्रत्येक ईमेलच्या पूर्ण मजकुरासह, प्रत्येक अहवालाच्या पी डी एफसह, आणि प्रत्येक WhatsApp संदेशाच्या पूर्ण मजकुरासह जोडा, आणि कम्युनिकेशन एक एकल, टिकाऊ, विश्वासार्ह नोंद बनते. क्लायंटसाठी, ही पारदर्शकता आहे — आम्ही पाठवलेले सर्व ते पाहू शकतात. आमच्यासाठी, हा पुरावा आहे — की योग्य लोकांना, योग्य रीतीने, योग्य वेळी कळवले गेले.",
          tip: { type: 'rememberLabel', text: 'WhatsApp स्टेटस: Sent → Delivered → Read; Undelivered / Failed समस्या दर्शवतात. ईमेल पूर्ण मजकूर + अटॅचमेंट ठेवतात; अहवाल त्यांची PDF ठेवतात.' },
        },
      ],
    },
  },
};

export default lesson;
