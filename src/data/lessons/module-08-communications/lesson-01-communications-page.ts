import type { CommData, CommRow, Lesson } from '../../types';

/**
 * Module 8 · Lesson 1 — The Communications Page.   Tag: M8.L1
 * Communications stores every message sent to the client across mediums —
 * Email, SMS, Call, WhatsApp — and a dedicated Report filter for reports.
 */

const SENDER = 'Doctor Paani';

const ROWS: CommRow[] = [
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 3 - In M3M, Bar screen is about to get choked (75%+).', text: 'It has not been resolved on time by Priyanka Ghlyan and has been escalated to Omprakash Yadav, Estate Manager. Please check the DigitalPaani portal.', time: 'about 1 hour ago', status: 'delivered' },
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 2 - In M3M, Bar screen is about to get choked (75%+).', text: 'It has not been resolved on time by Priyanka Ghlyan. Please check the DigitalPaani portal for more details.', time: 'about 2 hours ago', status: 'undelivered' },
  { medium: 'whatsapp', sender: SENDER, title: 'FYI - ESCALATION 1 - In M3M, Bar screen is about to get choked (75%+).', text: 'It has not been resolved on time by Priyanka Ghlyan. Please check the DigitalPaani portal for more details.', time: 'about 3 hours ago', status: 'sent', ring: true },
  { medium: 'email', sender: SENDER, title: 'Post escalation level 3 alerts for Plaksha STP + WTP', text: 'The following alerts have been open for a long time and have escalated to level 3.', time: 'about 9 hours ago' },
  { medium: 'email', sender: SENDER, title: 'Post escalation level 3 alerts for Amazon AMD-2', text: 'The following alerts have been open for a long time and have escalated to level 3.', time: 'about 9 hours ago' },
  { medium: 'email', sender: SENDER, title: 'Ahmedabad Airport - Daily Report', text: 'Daily Report for 22/06/2026 capturing all key metrics for your plant has been generated.', time: 'about 11 hours ago', isReport: true, attachment: 'Ahmedabad Airport - Daily Report.pdf' },
  { medium: 'email', sender: SENDER, title: 'Amity University - Amity University Daily Report', text: 'Daily Report capturing all key metrics for your plant has been generated.', time: 'about 11 hours ago', isReport: true, attachment: 'Amity University - Daily Report.pdf' },
];

const REPORTS = ROWS.filter((r) => r.isReport);

const list = (rows: CommRow[], filters: string[], highlight: CommData['highlight']): { comm: CommData } => ({
  comm: { mode: 'list', rows, filters, highlight },
});

const lesson: Lesson = {
  id: 'lesson-01-communications-page',
  moduleId: 'module-08-communications',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'comm', caption: 'The Communications page', widgetState: list(ROWS, [], null), cursor: [{ at: 0.2, x: 40, y: 50 }] },
    { mode: 'widget', widget: 'comm', caption: 'Four mediums', widgetState: list(ROWS, [], 'mediums'), cursor: [{ at: 0.2, x: 8, y: 26 }, { at: 0.7, x: 30, y: 26 }] },
    { mode: 'widget', widget: 'comm', caption: 'Search & filter', widgetState: list(ROWS, ['WhatsApp'], 'filters'), cursor: [{ at: 0.3, x: 30, y: 26 }] },
    { mode: 'widget', widget: 'comm', caption: 'The Report filter', widgetState: list(REPORTS, ['Report'], 'report'), cursor: [{ at: 0.3, x: 38, y: 26 }, { at: 0.7, x: 50, y: 50 }] },
    { mode: 'widget', widget: 'comm', caption: 'Reading a row', widgetState: list(ROWS, [], 'row'), cursor: [{ at: 0.3, x: 50, y: 42 }, { at: 0.7, x: 92, y: 42 }] },
  ],
  content: {
    en: {
      title: 'The <em>Communications</em><br>Module.',
      subtitle: 'Every message ever sent to the client — email, SMS, call, WhatsApp — stored in one place they can always refer back to.',
      chapter: 'Chapter Eight · Every Message, on Record',
      steps: [
        {
          label: 'Overview', title: 'One home for every message',
          body: "The <strong>Communications</strong> module houses <strong>every communication sent to the client</strong>, across every medium. Nothing is lost — it's all stored here and made available to the client, so they can always look back at exactly what was sent, and when.",
          voice: "Welcome to Communications. Think of this as the complete record of everything we've ever sent to a client. Every message — across every channel — is stored right here, and it's made available to the client themselves. So whether it was sent yesterday or three months ago, the client can come to this one page and see exactly what was communicated, and when. Nothing slips through the cracks; it's all on record.",
        },
        {
          label: 'Mediums', title: 'Email, SMS, Call, WhatsApp',
          body: "Communications go out over four <strong>mediums</strong>: <strong>Email</strong>, <strong>SMS</strong>, <strong>Call</strong>, and <strong>WhatsApp</strong>. Whatever channel a message went out on, it lands here in the same unified list — each row tagged with where it came from.",
          voice: "We reach clients over four different mediums: email, S M S, a phone call, and WhatsApp. The important thing is that no matter which channel a message went out on, it all ends up in this one unified list. An escalation might go out as a WhatsApp message and an email both — and you'll find each of them here, side by side, every row marked with the medium it was sent on. One inbox for everything.",
        },
        {
          label: 'Filter', title: 'Search and filter by channel',
          body: "Up top, <strong>search</strong> the full text of every message, and use the <strong>filter chips</strong> — <em>Email, SMS, Call, WhatsApp</em> — to narrow to one channel. Tap a chip to switch it on; <strong>Clear all</strong> resets. Here we've filtered to just WhatsApp.",
          voice: "Finding a specific message is easy. There's a search box that looks through the full text of every communication, and a row of filter chips to narrow by channel — email, S M S, call, or WhatsApp. Tap a chip and the list instantly shows only that medium; tap clear all to go back to everything. Right now we've filtered down to just the WhatsApp messages. So if a client asks did you message me about that bar screen, you can pull it up in seconds.",
        },
        {
          label: 'Reports', title: 'A dedicated Report filter',
          body: "Reports get their own filter. Tap <strong>Report</strong> and the list narrows to just the <strong>reports sent to the client</strong> — daily reports and the like — so they can refer back to them easily, without digging through every escalation message.",
          voice: "There's one more filter that's a little special — Report. Alongside the channel filters, the Report filter pulls up just the reports we've sent the client — their daily reports, plant summaries, and so on. We give reports their own filter on purpose, because clients refer back to them often, and they shouldn't have to scroll past dozens of escalation messages to find last Tuesday's daily report. One tap, and there they all are.",
        },
        {
          label: 'A row', title: 'What each entry shows',
          body: "Each entry shows the <strong>sender</strong> (Doctor Paani), the <strong>message</strong> itself, and a <strong>timestamp</strong> — <em>about 1 hour ago</em>. WhatsApp entries also carry a <strong>delivery status</strong> chip. Tap any row to open the full communication — which is exactly where we head next.",
          voice: "Each entry in the list tells you the essentials at a glance: who it's from — that's Doctor Paani, us — the message itself, and when it was sent, shown as a friendly timestamp like about one hour ago. WhatsApp entries carry one extra thing, a little status chip showing whether the message was delivered — we'll dig into those next. And every row is clickable: tap it, and the full communication opens up, with its complete content. Let's open a few.",
          tip: { type: 'upNextLabel', text: 'Next: open an email, see attachments and reports, and read WhatsApp status chips.' },
        },
      ],
    },
    hi: {
      title: '<em>कम्युनिकेशन</em><br>मॉड्यूल।',
      subtitle: 'क्लाइंट को भेजा हर संदेश — ईमेल, SMS, कॉल, WhatsApp — एक जगह संग्रहीत, जिसे वे हमेशा देख सकें।',
      chapter: 'अध्याय आठ · हर संदेश, रिकॉर्ड पर',
      steps: [
        {
          label: 'अवलोकन', title: 'हर संदेश का एक घर',
          body: "<strong>कम्युनिकेशन</strong> मॉड्यूल <strong>क्लाइंट को भेजे हर संदेश</strong> को रखता है, हर माध्यम पर। कुछ नहीं खोता — सब यहाँ संग्रहीत है और क्लाइंट को उपलब्ध है, ताकि वे हमेशा देख सकें कि क्या भेजा गया, और कब।",
          voice: "कम्युनिकेशन में स्वागत है। इसे उस पूरे रिकॉर्ड के रूप में सोचिए जो हमने कभी किसी क्लाइंट को भेजा। हर संदेश — हर चैनल पर — यहीं संग्रहीत है, और वह क्लाइंट को ख़ुद उपलब्ध कराया जाता है। तो चाहे कल भेजा हो या तीन महीने पहले, क्लाइंट इस एक पेज पर आकर ठीक-ठीक देख सकता है कि क्या बताया गया, और कब। कुछ भी छूटता नहीं; सब रिकॉर्ड पर है।",
        },
        {
          label: 'माध्यम', title: 'ईमेल, SMS, कॉल, WhatsApp',
          body: "संदेश चार <strong>माध्यमों</strong> से जाते हैं: <strong>Email</strong>, <strong>SMS</strong>, <strong>Call</strong>, और <strong>WhatsApp</strong>। संदेश जिस भी चैनल से गया, यहीं उसी एकीकृत सूची में आता है — हर पंक्ति पर उसका माध्यम अंकित।",
          voice: "हम क्लाइंट तक चार अलग माध्यमों से पहुँचते हैं: ईमेल, एस एम एस, फ़ोन कॉल, और WhatsApp। ख़ास बात यह है कि संदेश चाहे किसी भी चैनल से गया हो, सब इस एक एकीकृत सूची में आता है। एक एस्केलेशन WhatsApp संदेश और ईमेल दोनों से जा सकता है — और दोनों आपको यहाँ मिलेंगे, साथ-साथ, हर पंक्ति पर भेजे गए माध्यम का निशान। सब कुछ के लिए एक इनबॉक्स।",
        },
        {
          label: 'फ़िल्टर', title: 'चैनल से खोजें और फ़िल्टर करें',
          body: "ऊपर, हर संदेश का पूरा पाठ <strong>खोजें</strong>, और <strong>फ़िल्टर चिप्स</strong> — <em>Email, SMS, Call, WhatsApp</em> — से एक चैनल तक सीमित करें। चिप टैप करके चालू करें; <strong>Clear all</strong> रीसेट करता है। यहाँ हमने सिर्फ़ WhatsApp फ़िल्टर किया है।",
          voice: "कोई ख़ास संदेश ढूँढना आसान है। एक सर्च बॉक्स है जो हर संदेश का पूरा पाठ देखता है, और चैनल से सीमित करने के लिए फ़िल्टर चिप्स की एक पंक्ति — ईमेल, एस एम एस, कॉल, या WhatsApp। चिप टैप करें और सूची तुरंत सिर्फ़ वही माध्यम दिखाती है; clear all टैप करें और सब वापस। अभी हमने सिर्फ़ WhatsApp संदेशों तक सीमित किया है। तो अगर क्लाइंट पूछे कि क्या आपने उस बार स्क्रीन के बारे में संदेश भेजा था, आप सेकंडों में निकाल सकते हैं।",
        },
        {
          label: 'रिपोर्ट', title: 'एक समर्पित Report फ़िल्टर',
          body: "रिपोर्ट को अपना फ़िल्टर मिलता है। <strong>Report</strong> टैप करें और सूची सिर्फ़ <strong>क्लाइंट को भेजी रिपोर्ट</strong> तक सीमित हो जाती है — दैनिक रिपोर्ट आदि — ताकि वे आसानी से देख सकें, हर एस्केलेशन संदेश में खोजे बिना।",
          voice: "एक और फ़िल्टर है जो थोड़ा ख़ास है — Report। चैनल फ़िल्टरों के साथ, Report फ़िल्टर सिर्फ़ वे रिपोर्ट निकालता है जो हमने क्लाइंट को भेजीं — उनकी दैनिक रिपोर्ट, प्लांट सारांश, इत्यादि। हम रिपोर्ट को जान-बूझकर अपना फ़िल्टर देते हैं, क्योंकि क्लाइंट उन्हें अक्सर देखते हैं, और उन्हें पिछले मंगलवार की दैनिक रिपोर्ट ढूँढने के लिए दर्जनों एस्केलेशन संदेशों से नहीं गुज़रना चाहिए। एक टैप, और सब वहाँ हैं।",
        },
        {
          label: 'एक पंक्ति', title: 'हर प्रविष्टि क्या दिखाती है',
          body: "हर प्रविष्टि दिखाती है <strong>भेजने वाला</strong> (Doctor Paani), <strong>संदेश</strong>, और एक <strong>टाइमस्टैम्प</strong> — <em>about 1 hour ago</em>। WhatsApp प्रविष्टियों पर एक <strong>डिलीवरी स्टेटस</strong> चिप भी होती है। पूरा संदेश खोलने के लिए किसी पंक्ति को टैप करें — जहाँ हम आगे जाते हैं।",
          voice: "सूची में हर प्रविष्टि एक नज़र में ज़रूरी बातें बताती है: किससे है — वह Doctor Paani है, यानी हम — संदेश ख़ुद, और कब भेजा गया, एक सहज टाइमस्टैम्प जैसे about one hour ago के रूप में। WhatsApp प्रविष्टियों पर एक अतिरिक्त चीज़ होती है, एक छोटी स्टेटस चिप जो दिखाती है कि संदेश डिलीवर हुआ या नहीं — हम इन्हें आगे देखेंगे। और हर पंक्ति क्लिक करने योग्य है: टैप करें, और पूरा संदेश अपनी पूरी सामग्री के साथ खुल जाता है। चलिए कुछ खोलते हैं।",
          tip: { type: 'upNextLabel', text: 'आगे: एक ईमेल खोलें, अटैचमेंट व रिपोर्ट देखें, और WhatsApp स्टेटस चिप्स पढ़ें।' },
        },
      ],
    },
    ta: {
      title: '<em>தொடர்பு</em><br>தொகுதி.',
      subtitle: 'வாடிக்கையாளருக்கு அனுப்பப்பட்ட ஒவ்வொரு செய்தியும் — மின்னஞ்சல், SMS, அழைப்பு, WhatsApp — ஒரே இடத்தில் சேமிக்கப்பட்டு, அவர்கள் எப்போதும் பார்க்கலாம்.',
      chapter: 'அத்தியாயம் எட்டு · ஒவ்வொரு செய்தியும் பதிவில்',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'ஒவ்வொரு செய்திக்கும் ஒரு வீடு',
          body: "<strong>தொடர்பு</strong> தொகுதி <strong>வாடிக்கையாளருக்கு அனுப்பப்பட்ட ஒவ்வொரு செய்தியையும்</strong> வைத்திருக்கிறது, ஒவ்வொரு ஊடகத்திலும். எதுவும் தொலையாது — அனைத்தும் இங்கே சேமிக்கப்பட்டு வாடிக்கையாளருக்குக் கிடைக்கிறது, எது எப்போது அனுப்பப்பட்டது என்று எப்போதும் பார்க்கலாம்.",
          voice: "தொடர்புக்கு வரவேற்கிறோம். ஒரு வாடிக்கையாளருக்கு நாம் எப்போதேனும் அனுப்பிய அனைத்தின் முழுப் பதிவாக இதை எண்ணுங்கள். ஒவ்வொரு செய்தியும் — ஒவ்வொரு சேனலிலும் — இங்கேயே சேமிக்கப்படுகிறது, அது வாடிக்கையாளருக்கே கிடைக்கச் செய்யப்படுகிறது. நேற்று அனுப்பினாலும், மூன்று மாதங்களுக்கு முன் அனுப்பினாலும், வாடிக்கையாளர் இந்த ஒரே பக்கத்துக்கு வந்து என்ன தெரிவிக்கப்பட்டது, எப்போது என்று துல்லியமாகப் பார்க்கலாம். எதுவும் நழுவாது; அனைத்தும் பதிவில்.",
        },
        {
          label: 'ஊடகங்கள்', title: 'மின்னஞ்சல், SMS, அழைப்பு, WhatsApp',
          body: "செய்திகள் நான்கு <strong>ஊடகங்கள்</strong> வழியாகச் செல்கின்றன: <strong>Email</strong>, <strong>SMS</strong>, <strong>Call</strong>, <strong>WhatsApp</strong>. எந்த சேனலில் சென்றாலும், இங்கே அதே ஒருங்கிணைந்த பட்டியலில் வந்து சேர்கிறது — ஒவ்வொரு வரிசையும் அதன் ஊடகத்துடன் குறிக்கப்படுகிறது.",
          voice: "வாடிக்கையாளர்களை நான்கு வெவ்வேறு ஊடகங்களில் அடைகிறோம்: மின்னஞ்சல், எஸ் எம் எஸ், தொலைபேசி அழைப்பு, WhatsApp. முக்கியமானது — செய்தி எந்த சேனலில் சென்றாலும், அனைத்தும் இந்த ஒரே ஒருங்கிணைந்த பட்டியலில் வந்து சேர்கிறது. ஒரு எஸ்கலேஷன் WhatsApp செய்தியாகவும் மின்னஞ்சலாகவும் செல்லலாம் — இரண்டையும் இங்கே அருகருகே காண்பீர்கள், ஒவ்வொரு வரிசையும் அனுப்பப்பட்ட ஊடகத்துடன் குறிக்கப்பட்டு. எல்லாவற்றுக்கும் ஒரே இன்பாக்ஸ்.",
        },
        {
          label: 'வடிப்பான்', title: 'சேனலால் தேடி வடிகட்டு',
          body: "மேலே, ஒவ்வொரு செய்தியின் முழு உரையையும் <strong>தேடுங்கள்</strong>, <strong>வடிப்பான் சில்லுகள்</strong> — <em>Email, SMS, Call, WhatsApp</em> — மூலம் ஒரு சேனலுக்குக் குறுக்குங்கள். சில்லைத் தட்டி இயக்குங்கள்; <strong>Clear all</strong> மீட்டமைக்கிறது. இங்கே WhatsApp-ஐ மட்டும் வடிகட்டியுள்ளோம்.",
          voice: "ஒரு குறிப்பிட்ட செய்தியைக் கண்டறிவது எளிது. ஒவ்வொரு தொடர்பின் முழு உரையையும் பார்க்கும் ஒரு தேடல் பெட்டி, சேனலால் குறுக்க வடிப்பான் சில்லுகளின் ஒரு வரிசை — மின்னஞ்சல், எஸ் எம் எஸ், அழைப்பு, அல்லது WhatsApp. சில்லைத் தட்டினால் பட்டியல் உடனே அந்த ஊடகத்தை மட்டும் காட்டுகிறது; clear all தட்டினால் அனைத்தும் திரும்பும். இப்போது WhatsApp செய்திகளை மட்டும் வடிகட்டியுள்ளோம். வாடிக்கையாளர் அந்த பார் ஸ்கிரீன் பற்றி செய்தி அனுப்பினீர்களா எனக் கேட்டால், விநாடிகளில் காட்டலாம்.",
        },
        {
          label: 'அறிக்கைகள்', title: 'ஒரு தனி Report வடிப்பான்',
          body: "அறிக்கைகளுக்குத் தனி வடிப்பான். <strong>Report</strong>-ஐத் தட்டினால் பட்டியல் <strong>வாடிக்கையாளருக்கு அனுப்பிய அறிக்கைகளுக்கு</strong> மட்டும் குறுகுகிறது — தினசரி அறிக்கைகள் போல — ஒவ்வொரு எஸ்கலேஷன் செய்தியிலும் தேடாமல் எளிதாகப் பார்க்க.",
          voice: "இன்னொரு வடிப்பான் கொஞ்சம் சிறப்பானது — Report. சேனல் வடிப்பான்களுடன், Report வடிப்பான் நாம் வாடிக்கையாளருக்கு அனுப்பிய அறிக்கைகளை மட்டும் கொண்டுவருகிறது — அவர்களின் தினசரி அறிக்கைகள், ஆலை சுருக்கங்கள் போன்றவை. அறிக்கைகளுக்கு வேண்டுமென்றே தனி வடிப்பான் தருகிறோம், ஏனெனில் வாடிக்கையாளர்கள் அவற்றை அடிக்கடி பார்க்கிறார்கள், கடந்த செவ்வாயின் தினசரி அறிக்கையைக் கண்டறிய டஜன் கணக்கான எஸ்கலேஷன் செய்திகளைக் கடக்க வேண்டியதில்லை. ஒரு தட்டல், அனைத்தும் அங்கே.",
        },
        {
          label: 'ஒரு வரிசை', title: 'ஒவ்வொரு பதிவும் காட்டுவது',
          body: "ஒவ்வொரு பதிவும் காட்டுகிறது <strong>அனுப்பியவர்</strong> (Doctor Paani), <strong>செய்தி</strong>, ஒரு <strong>நேரமுத்திரை</strong> — <em>about 1 hour ago</em>. WhatsApp பதிவுகளில் ஒரு <strong>டெலிவரி நிலை</strong> சில்லும் உண்டு. முழு செய்தியைத் திறக்க எந்த வரிசையையும் தட்டுங்கள் — அதைத்தான் அடுத்து செய்வோம்.",
          voice: "பட்டியலில் ஒவ்வொரு பதிவும் அத்தியாவசியங்களை ஒரே பார்வையில் சொல்கிறது: யாரிடமிருந்து — அது Doctor Paani, நாம் — செய்தி, எப்போது அனுப்பப்பட்டது, about one hour ago போன்ற நட்பு நேரமுத்திரையாக. WhatsApp பதிவுகளில் ஒரு கூடுதல் விஷயம், செய்தி டெலிவர் ஆனதா என்று காட்டும் ஒரு சிறு நிலை சில்லு — அவற்றை அடுத்து ஆராய்வோம். ஒவ்வொரு வரிசையும் கிளிக் செய்யத்தக்கது: தட்டினால், முழு செய்தி அதன் முழு உள்ளடக்கத்துடன் திறக்கிறது. சிலவற்றைத் திறப்போம்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: ஒரு மின்னஞ்சலைத் திற, இணைப்புகள் & அறிக்கைகள், WhatsApp நிலை சில்லுகள்.' },
        },
      ],
    },
    mr: {
      title: '<em>कम्युनिकेशन</em><br>मॉड्यूल.',
      subtitle: 'क्लायंटला पाठवलेला प्रत्येक संदेश — ईमेल, SMS, कॉल, WhatsApp — एका ठिकाणी साठवलेला, जो ते नेहमी पाहू शकतात.',
      chapter: 'अध्याय आठ · प्रत्येक संदेश, नोंदीवर',
      steps: [
        {
          label: 'आढावा', title: 'प्रत्येक संदेशाचे एक घर',
          body: "<strong>कम्युनिकेशन</strong> मॉड्यूल <strong>क्लायंटला पाठवलेला प्रत्येक संदेश</strong> ठेवते, प्रत्येक माध्यमावर. काहीही हरवत नाही — सर्व इथे साठवलेले आणि क्लायंटला उपलब्ध, म्हणून ते नेहमी पाहू शकतात की काय पाठवले, आणि कधी.",
          voice: "कम्युनिकेशनमध्ये स्वागत आहे. आम्ही एखाद्या क्लायंटला कधीही पाठवलेल्या सर्वाची संपूर्ण नोंद म्हणून याकडे पाहा. प्रत्येक संदेश — प्रत्येक चॅनेलवर — इथेच साठवला जातो, आणि तो क्लायंटला स्वतःला उपलब्ध केला जातो. म्हणून काल पाठवला असो वा तीन महिन्यांपूर्वी, क्लायंट या एका पेजवर येऊन नेमके पाहू शकतो की काय कळवले, आणि कधी. काहीही निसटत नाही; सर्व नोंदीवर आहे.",
        },
        {
          label: 'माध्यमे', title: 'ईमेल, SMS, कॉल, WhatsApp',
          body: "संदेश चार <strong>माध्यमांनी</strong> जातात: <strong>Email</strong>, <strong>SMS</strong>, <strong>Call</strong>, आणि <strong>WhatsApp</strong>. संदेश ज्या चॅनेलने गेला, तो इथेच त्याच एकत्रित यादीत येतो — प्रत्येक ओळीवर त्याचे माध्यम नोंदवलेले.",
          voice: "आम्ही क्लायंटपर्यंत चार वेगळ्या माध्यमांनी पोहोचतो: ईमेल, एस एम एस, फोन कॉल, आणि WhatsApp. महत्त्वाचे म्हणजे संदेश कोणत्याही चॅनेलने गेला असो, सर्व या एका एकत्रित यादीत येते. एक एस्केलेशन WhatsApp संदेश आणि ईमेल दोन्हीने जाऊ शकते — आणि दोन्ही तुम्हाला इथे शेजारी-शेजारी मिळतील, प्रत्येक ओळीवर पाठवलेल्या माध्यमाची खूण. सर्वांसाठी एक इनबॉक्स.",
        },
        {
          label: 'फिल्टर', title: 'चॅनेलने शोधा आणि फिल्टर करा',
          body: "वर, प्रत्येक संदेशाचा पूर्ण मजकूर <strong>शोधा</strong>, आणि <strong>फिल्टर चिप्स</strong> — <em>Email, SMS, Call, WhatsApp</em> — ने एका चॅनेलपुरते मर्यादित करा. चिप टॅप करून चालू करा; <strong>Clear all</strong> रीसेट करते. इथे आम्ही फक्त WhatsApp फिल्टर केले आहे.",
          voice: "एखादा विशिष्ट संदेश शोधणे सोपे आहे. प्रत्येक संदेशाचा पूर्ण मजकूर पाहणारा एक सर्च बॉक्स आहे, आणि चॅनेलने मर्यादित करायला फिल्टर चिप्सची एक रांग — ईमेल, एस एम एस, कॉल, किंवा WhatsApp. चिप टॅप करा आणि यादी लगेच फक्त ते माध्यम दाखवते; clear all टॅप करा आणि सर्व परत. आत्ता आम्ही फक्त WhatsApp संदेशांपुरते मर्यादित केले आहे. म्हणून क्लायंटने विचारले की त्या बार स्क्रीनबद्दल तुम्ही संदेश पाठवला का, तुम्ही सेकंदात काढू शकता.",
        },
        {
          label: 'अहवाल', title: 'एक समर्पित Report फिल्टर',
          body: "अहवालांना स्वतःचा फिल्टर मिळतो. <strong>Report</strong> टॅप करा आणि यादी फक्त <strong>क्लायंटला पाठवलेल्या अहवालांपुरती</strong> मर्यादित होते — दैनिक अहवाल इत्यादी — म्हणजे ते प्रत्येक एस्केलेशन संदेशात न शोधता सहज पाहू शकतात.",
          voice: "आणखी एक फिल्टर थोडा खास आहे — Report. चॅनेल फिल्टरांसोबत, Report फिल्टर फक्त आम्ही क्लायंटला पाठवलेले अहवाल काढतो — त्यांचे दैनिक अहवाल, प्लांट सारांश वगैरे. आम्ही अहवालांना मुद्दाम स्वतःचा फिल्टर देतो, कारण क्लायंट त्यांना वारंवार पाहतात, आणि मागच्या मंगळवारचा दैनिक अहवाल शोधायला त्यांना डझनभर एस्केलेशन संदेशांतून जायला नको. एक टॅप, आणि सर्व तिथे.",
        },
        {
          label: 'एक ओळ', title: 'प्रत्येक नोंद काय दाखवते',
          body: "प्रत्येक नोंद दाखवते <strong>पाठवणारा</strong> (Doctor Paani), <strong>संदेश</strong>, आणि एक <strong>टाइमस्टॅम्प</strong> — <em>about 1 hour ago</em>. WhatsApp नोंदींवर एक <strong>डिलिव्हरी स्टेटस</strong> चिपही असते. पूर्ण संदेश उघडायला कोणतीही ओळ टॅप करा — तिकडेच आपण पुढे जातो.",
          voice: "यादीतील प्रत्येक नोंद एका दृष्टीक्षेपात आवश्यक गोष्टी सांगते: कोणाकडून — तो Doctor Paani, म्हणजे आम्ही — संदेश स्वतः, आणि कधी पाठवला, about one hour ago सारख्या सोप्या टाइमस्टॅम्पने. WhatsApp नोंदींवर एक अतिरिक्त गोष्ट असते, एक छोटी स्टेटस चिप जी संदेश डिलिव्हर झाला का ते दाखवते — त्या आपण पुढे पाहू. आणि प्रत्येक ओळ क्लिक करण्याजोगी आहे: टॅप करा, आणि पूर्ण संदेश त्याच्या संपूर्ण मजकुरासह उघडतो. चला काही उघडू.",
          tip: { type: 'upNextLabel', text: 'पुढे: एक ईमेल उघडा, अटॅचमेंट व अहवाल पाहा, आणि WhatsApp स्टेटस चिप्स वाचा.' },
        },
      ],
    },
  },
};

export default lesson;
