import type { InsightRow, InsightsData, Lesson } from '../../types';

/**
 * Module 5 · Lesson 2 — Insights On the Go.   Tag: M5.L2
 * Time-sensitive insights via WhatsApp with a zero-auth link, and the Insights
 * Digest (new/closed/open counts, latest open insight, multi-plant config).
 */

const CHLORINE: InsightRow = {
  name: 'Chlorine Contact Tank Level has reached 90%',
  desc: 'Level Transmitter reports 90% — risk of overflow.',
  ago: 'just now', status: 'Open', priority: 'high', asset: 'Vatika Atrium (75 KLD)', type: 'Warning',
  action: "Stop the reactor feed pump and report to 'Supervisor' and 'Client'.",
};

const LATEST: InsightRow = {
  name: 'DO of Aeration tank-1 is less than 1 ppm',
  desc: 'DO less than 1 ppm could cause a hypoxic zone for the biomass.',
  ago: '20 minutes ago', status: 'Open', priority: 'medium', asset: 'Amity University Noida', equipment: 'Aeration Tank-1', type: 'Issue',
};

const digest = (highlight: InsightsData['highlight']): InsightsData => ({
  mode: 'digest', highlight,
  digest: {
    range: 'Last 24 Hours', newCount: '12', closedCount: '8', openTotal: '237',
    latest: LATEST,
    plants: ['Vatika Atrium', 'Amity University Noida', 'Parx Laureate STP'],
  },
});

const lesson: Lesson = {
  id: 'lesson-02-on-the-go',
  moduleId: 'module-05-insights',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'insights', caption: 'Time-sensitive — straight to WhatsApp',
      widgetState: { insights: { mode: 'whatsapp', insight: CHLORINE, highlight: 'link' } }, cursor: [{ at: 0.4, x: 50, y: 70, click: true }] },
    { mode: 'widget', widget: 'insights', caption: 'Zero-auth — opens with no login',
      widgetState: { insights: { mode: 'detail', insight: CHLORINE, zeroAuth: true, highlight: 'zeroauth' } }, cursor: [{ at: 0.3, x: 50, y: 14 }] },
    { mode: 'widget', widget: 'insights', caption: 'The Insights Digest',
      widgetState: { insights: digest('counts') }, cursor: [{ at: 0.3, x: 30, y: 22 }, { at: 0.7, x: 50, y: 55 }] },
    { mode: 'widget', widget: 'insights', caption: 'One digest, many plants',
      widgetState: { insights: digest('plants') }, cursor: [{ at: 0.4, x: 40, y: 90 }] },
  ],
  content: {
    en: {
      title: 'Insights <em>On the Go.</em>',
      subtitle:
        'The critical ones reach you instantly on WhatsApp, and a daily digest keeps the whole picture in view.',
      chapter: 'Chapter Five · Eyes on the Plant',
      steps: [
        {
          label: 'WhatsApp', title: 'Time-sensitive? Straight to WhatsApp',
          body: "Some insights can't wait for someone to open the app. For <strong>time-sensitive</strong> insights — chosen at configuration — the platform sends a <strong>WhatsApp message</strong> the moment the insight fires, with the details and a link.",
          voice: "Some insights are simply too urgent to wait for someone to log in and check the app. So for time-sensitive insights — and you choose which ones during configuration — the platform sends a WhatsApp message the instant the insight fires. It lands right where people already are, on their phone, with the key details and a link to act on.",
        },
        {
          label: 'Zero-Auth', title: 'A zero-auth link — no login',
          body: "Tap the link and it opens that <strong>specific insight</strong> with its <strong>full details</strong> — and <strong>no login required</strong>. We call this <strong>zero-auth access</strong>. In a critical moment, there's no password to fumble; the operator sees what's wrong and what to do, immediately.",
          voice: "And here's what makes it powerful. When you tap that link, it opens straight to that specific insight, showing the full details — and crucially, with no login required at all. We call this zero-auth access. Think about a critical moment at two in the morning — the last thing you want is to fumble with a password. Instead, the operator taps the link and immediately sees exactly what's wrong, and exactly what to do. Faster response, far less friction.",
          tip: { type: 'rememberLabel', text: 'Zero-auth links open one insight with full details and no login — built for fast response in critical moments.' },
        },
        {
          label: 'Digest', title: 'The Insights Digest',
          body: "Not everything is an emergency. The <strong>Insights Digest</strong> is a periodic summary: <strong>new</strong> and <strong>closed</strong> insights over a configured range, the <strong>total open</strong> right now, the <strong>latest open insight</strong> in full, and a <strong>link to the page</strong>.",
          voice: "Of course, not everything is an emergency. For everyday awareness, there's the Insights Digest — a periodic summary that lands in your inbox. It shows the new insights and the closed insights over a historical range you configure. It shows the total open insights right now, regardless of that range. It even includes the latest open insight in full, so you can act without opening anything. And there's a direct link straight to the Insights page when you want the rest.",
        },
        {
          label: 'Multi-Plant', title: 'One digest, many plants',
          body: "And you can now configure digests across <strong>multiple plants</strong> for the same user — previously limited to one. A supervisor watching several sites gets <strong>one digest</strong> covering them all, so nothing slips through the cracks.",
          voice: "And one more improvement. You can now set up a digest that spans multiple plants for the same person — previously, each user was limited to a single plant. So a supervisor looking after several sites gets one combined digest covering all of them, in one place. Between instant WhatsApp alerts for the urgent ones, and a clear digest for everything else, you're always on top of what your plants need. That completes Insights.",
          tip: { type: 'upNextLabel', text: 'Urgent insights find you instantly; the digest keeps the full picture in view.' },
        },
      ],
    },
    hi: {
      title: 'इनसाइट्स <em>चलते-फिरते।</em>',
      subtitle:
        'महत्वपूर्ण इनसाइट्स तुरंत WhatsApp पर पहुँचती हैं, और एक दैनिक डाइजेस्ट पूरी तस्वीर नज़र में रखता है।',
      chapter: 'अध्याय पाँच · प्लांट पर नज़र',
      steps: [
        {
          label: 'WhatsApp', title: 'समय-संवेदनशील? सीधे WhatsApp पर',
          body: 'कुछ इनसाइट्स किसी के ऐप खोलने का इंतज़ार नहीं कर सकतीं। <strong>समय-संवेदनशील</strong> इनसाइट्स के लिए — कॉन्फ़िगरेशन के समय चुनी गई — प्लेटफ़ॉर्म इनसाइट ट्रिगर होते ही विवरण और एक लिंक के साथ <strong>WhatsApp संदेश</strong> भेजता है।',
          voice: 'कुछ इनसाइट्स इतनी ज़रूरी होती हैं कि किसी के लॉगिन करके ऐप जाँचने का इंतज़ार नहीं कर सकतीं। तो समय-संवेदनशील इनसाइट्स के लिए — और कौन सी, यह आप कॉन्फ़िगरेशन के दौरान चुनते हैं — प्लेटफ़ॉर्म इनसाइट ट्रिगर होते ही एक WhatsApp संदेश भेजता है। यह ठीक वहाँ पहुँचता है जहाँ लोग पहले से हैं, उनके फ़ोन पर, मुख्य विवरण और कार्रवाई के लिए एक लिंक के साथ।',
        },
        {
          label: 'ज़ीरो-ऑथ', title: 'ज़ीरो-ऑथ लिंक — कोई लॉगिन नहीं',
          body: 'लिंक टैप करें और यह उस <strong>विशिष्ट इनसाइट</strong> को <strong>पूरे विवरण</strong> के साथ खोलता है — और <strong>कोई लॉगिन ज़रूरी नहीं</strong>। हम इसे <strong>ज़ीरो-ऑथ एक्सेस</strong> कहते हैं। महत्वपूर्ण क्षण में, कोई पासवर्ड टटोलना नहीं; ऑपरेटर तुरंत देखता है कि क्या गलत है और क्या करना है।',
          voice: 'और यही इसे शक्तिशाली बनाता है। जब आप वह लिंक टैप करते हैं, यह सीधे उस विशिष्ट इनसाइट को खोलता है, पूरा विवरण दिखाते हुए — और सबसे महत्वपूर्ण, बिल्कुल कोई लॉगिन ज़रूरी नहीं। हम इसे ज़ीरो-ऑथ एक्सेस कहते हैं। रात के दो बजे एक महत्वपूर्ण क्षण सोचिए — आख़िरी चीज़ जो आप चाहते हैं वह है पासवर्ड से जूझना। बजाय इसके, ऑपरेटर लिंक टैप करता है और तुरंत देखता है कि ठीक क्या गलत है, और ठीक क्या करना है। तेज़ प्रतिक्रिया, कहीं कम रुकावट।',
          tip: { type: 'rememberLabel', text: 'ज़ीरो-ऑथ लिंक एक इनसाइट को पूरे विवरण और बिना लॉगिन के खोलते हैं — महत्वपूर्ण क्षणों में तेज़ प्रतिक्रिया के लिए बने।' },
        },
        {
          label: 'डाइजेस्ट', title: 'इनसाइट्स डाइजेस्ट',
          body: 'हर चीज़ आपातकाल नहीं होती। <strong>इनसाइट्स डाइजेस्ट</strong> एक आवधिक सारांश है: एक कॉन्फ़िगर की गई सीमा में <strong>नई</strong> और <strong>बंद</strong> इनसाइट्स, अभी <strong>कुल खुली</strong>, पूरी <strong>नवीनतम खुली इनसाइट</strong>, और <strong>पेज का लिंक</strong>।',
          voice: 'बेशक, हर चीज़ आपातकाल नहीं होती। रोज़मर्रा की जागरूकता के लिए, इनसाइट्स डाइजेस्ट है — एक आवधिक सारांश जो आपके इनबॉक्स में आता है। यह आपकी कॉन्फ़िगर की गई ऐतिहासिक सीमा में नई और बंद इनसाइट्स दिखाता है। यह अभी कुल खुली इनसाइट्स दिखाता है, उस सीमा की परवाह किए बिना। इसमें पूरी नवीनतम खुली इनसाइट भी शामिल है, ताकि आप कुछ खोले बिना कार्रवाई कर सकें। और जब आप बाकी चाहते हैं तो सीधे इनसाइट्स पेज का एक लिंक भी।',
        },
        {
          label: 'बहु-प्लांट', title: 'एक डाइजेस्ट, कई प्लांट',
          body: 'और अब आप एक ही उपयोगकर्ता के लिए <strong>कई प्लांट</strong> में डाइजेस्ट कॉन्फ़िगर कर सकते हैं — पहले एक तक सीमित था। कई साइट देखने वाले सुपरवाइज़र को उन सबको कवर करता <strong>एक डाइजेस्ट</strong> मिलता है, ताकि कुछ छूटे नहीं।',
          voice: 'और एक और सुधार। अब आप एक ही व्यक्ति के लिए कई प्लांट तक फैला डाइजेस्ट सेट कर सकते हैं — पहले, हर उपयोगकर्ता एक ही प्लांट तक सीमित था। तो कई साइटों की देखरेख करने वाले सुपरवाइज़र को उन सबको कवर करता एक संयुक्त डाइजेस्ट मिलता है, एक ही जगह। ज़रूरी के लिए तुरंत WhatsApp अलर्ट, और बाकी सब के लिए एक स्पष्ट डाइजेस्ट — के बीच, आप हमेशा जानते हैं कि आपके प्लांट को क्या चाहिए। यह इनसाइट्स को पूरा करता है।',
          tip: { type: 'upNextLabel', text: 'ज़रूरी इनसाइट्स तुरंत आपको ढूँढती हैं; डाइजेस्ट पूरी तस्वीर नज़र में रखता है।' },
        },
      ],
    },
    ta: {
      title: 'இன்சைட்ஸ் <em>பயணத்தில்.</em>',
      subtitle:
        'முக்கியமானவை உடனே வாட்ஸ்ஆப்பில் உங்களை அடைகின்றன, ஒரு தினசரி டைஜெஸ்ட் முழுப் படத்தையும் கண்காணிப்பில் வைக்கிறது.',
      chapter: 'அத்தியாயம் ஐந்து · ஆலையின் மீது கண்',
      steps: [
        {
          label: 'வாட்ஸ்ஆப்', title: 'அவசரமா? நேராக வாட்ஸ்ஆப்புக்கு',
          body: 'சில இன்சைட்ஸ் யாரோ ஆப்பைத் திறப்பதற்குக் காத்திருக்க முடியாது. <strong>அவசர</strong> இன்சைட்ஸுக்கு — அமைப்பின்போது தேர்ந்தெடுக்கப்பட்டவை — இன்சைட் தூண்டப்படும் தருணத்தில் தளம் விவரங்களுடனும் ஒரு இணைப்புடனும் ஒரு <strong>வாட்ஸ்ஆப் செய்தியை</strong> அனுப்புகிறது.',
          voice: 'சில இன்சைட்ஸ் யாரோ உள்நுழைந்து ஆப்பைச் சரிபார்க்கக் காத்திருக்க முடியாத அளவுக்கு அவசரமானவை. எனவே அவசர இன்சைட்ஸுக்கு — எவை என்பதை அமைப்பின்போது நீங்கள் தேர்வு செய்கிறீர்கள் — இன்சைட் தூண்டப்படும் கணத்தில் தளம் ஒரு வாட்ஸ்ஆப் செய்தியை அனுப்புகிறது. மக்கள் ஏற்கனவே இருக்கும் இடத்திலேயே, அவர்களின் ஃபோனில், முக்கிய விவரங்களுடனும் நடவடிக்கைக்கான இணைப்புடனும் அது வந்து சேர்கிறது.',
        },
        {
          label: 'ஜீரோ-ஆத்', title: 'ஜீரோ-ஆத் இணைப்பு — உள்நுழைவு இல்லை',
          body: 'இணைப்பைத் தட்டினால் அந்த <strong>குறிப்பிட்ட இன்சைட்டை</strong> அதன் <strong>முழு விவரங்களுடன்</strong> திறக்கிறது — <strong>உள்நுழைவு தேவையில்லை</strong>. இதை <strong>ஜீரோ-ஆத் அணுகல்</strong> என்கிறோம். அவசர தருணத்தில், கடவுச்சொல்லுடன் தடுமாற வேண்டாம்; இயக்குனர் என்ன தவறு, என்ன செய்வது என்பதை உடனே காண்கிறார்.',
          voice: 'இதைச் சக்திவாய்ந்ததாக்குவது இதுதான். அந்த இணைப்பைத் தட்டும்போது, அது நேராக அந்தக் குறிப்பிட்ட இன்சைட்டுக்குத் திறக்கிறது, முழு விவரங்களைக் காட்டி — முக்கியமாக, எந்த உள்நுழைவும் இல்லாமல். இதை ஜீரோ-ஆத் அணுகல் என்கிறோம். அதிகாலை இரண்டு மணிக்கு ஒரு அவசர தருணத்தை நினைத்துப் பாருங்கள் — நீங்கள் விரும்பாத கடைசி விஷயம் கடவுச்சொல்லுடன் தடுமாறுவது. மாறாக, இயக்குனர் இணைப்பைத் தட்டி, என்ன தவறு, என்ன செய்வது என்பதை உடனே காண்கிறார். வேகமான பதில், மிகக் குறைந்த இடையூறு.',
          tip: { type: 'rememberLabel', text: 'ஜீரோ-ஆத் இணைப்புகள் ஒரு இன்சைட்டை முழு விவரங்களுடன், உள்நுழைவின்றித் திறக்கின்றன — அவசர தருணங்களில் வேக பதிலுக்காக.' },
        },
        {
          label: 'டைஜெஸ்ட்', title: 'இன்சைட்ஸ் டைஜெஸ்ட்',
          body: 'எல்லாமே அவசரம் அல்ல. <strong>இன்சைட்ஸ் டைஜெஸ்ட்</strong> ஒரு கால சுருக்கம்: அமைக்கப்பட்ட வரம்பில் <strong>புதிய</strong> மற்றும் <strong>மூடிய</strong> இன்சைட்ஸ், இப்போது <strong>மொத்தத் திறந்த</strong> எண், முழு <strong>சமீபத்திய திறந்த இன்சைட்</strong>, ஒரு <strong>பக்க இணைப்பு</strong>.',
          voice: 'நிச்சயமாக, எல்லாமே அவசரம் அல்ல. அன்றாட விழிப்புணர்வுக்கு, இன்சைட்ஸ் டைஜெஸ்ட் உள்ளது — உங்கள் இன்பாக்ஸுக்கு வரும் ஒரு கால சுருக்கம். நீங்கள் அமைக்கும் வரலாற்று வரம்பில் புதிய இன்சைட்ஸையும் மூடிய இன்சைட்ஸையும் காட்டுகிறது. அந்த வரம்பைப் பொருட்படுத்தாமல், இப்போது மொத்தத் திறந்த இன்சைட்ஸையும் காட்டுகிறது. சமீபத்திய திறந்த இன்சைட்டை முழுமையாகவும் சேர்க்கிறது, எதையும் திறக்காமல் நடவடிக்கை எடுக்கலாம். மீதியை விரும்பும்போது இன்சைட்ஸ் பக்கத்திற்கு நேரடி இணைப்பும் உள்ளது.',
        },
        {
          label: 'பல-ஆலை', title: 'ஒரு டைஜெஸ்ட், பல ஆலைகள்',
          body: 'இப்போது அதே பயனருக்கு <strong>பல ஆலைகள்</strong> முழுவதும் டைஜெஸ்ட்களை அமைக்கலாம் — முன்பு ஒன்றுக்கு வரம்பிடப்பட்டது. பல தளங்களைக் கவனிக்கும் மேற்பார்வையாளர் அவை அனைத்தையும் உள்ளடக்கிய <strong>ஒரே டைஜெஸ்ட்</strong> பெறுகிறார், எதுவும் தவறாமல்.',
          voice: 'மேலும் ஒரு மேம்பாடு. இப்போது அதே நபருக்கு பல ஆலைகள் முழுவதும் பரவும் ஒரு டைஜெஸ்ட்டை அமைக்கலாம் — முன்பு, ஒவ்வொரு பயனரும் ஒரே ஆலைக்கு வரம்பிடப்பட்டிருந்தார். எனவே பல தளங்களைக் கவனிக்கும் மேற்பார்வையாளர் அவை அனைத்தையும் உள்ளடக்கிய ஒரே ஒருங்கிணைந்த டைஜெஸ்ட்டை, ஒரே இடத்தில் பெறுகிறார். அவசரமானவற்றுக்கு உடனடி வாட்ஸ்ஆப் அலர்ட்ஸ், மற்றவை அனைத்துக்கும் தெளிவான டைஜெஸ்ட் — இவற்றுக்கிடையே, உங்கள் ஆலைகளுக்கு என்ன தேவை என்பதில் நீங்கள் எப்போதும் முன்னிலையில் இருக்கிறீர்கள். இது இன்சைட்ஸை முடிக்கிறது.',
          tip: { type: 'upNextLabel', text: 'அவசர இன்சைட்ஸ் உடனே உங்களைக் கண்டறிகின்றன; டைஜெஸ்ட் முழுப் படத்தைக் கண்காணிப்பில் வைக்கிறது.' },
        },
      ],
    },
    mr: {
      title: 'इनसाइट्स <em>फिरतीवर.</em>',
      subtitle:
        'महत्त्वाच्या तुम्हाला लगेच WhatsApp वर पोहोचतात, आणि एक दैनंदिन डायजेस्ट संपूर्ण चित्र नजरेत ठेवतो.',
      chapter: 'अध्याय पाच · प्लांटवर नजर',
      steps: [
        {
          label: 'WhatsApp', title: 'वेळ-संवेदनशील? थेट WhatsApp वर',
          body: 'काही इनसाइट्स कुणीतरी अॅप उघडण्याची वाट पाहू शकत नाहीत. <strong>वेळ-संवेदनशील</strong> इनसाइट्ससाठी — कॉन्फिगरेशनच्या वेळी निवडलेल्या — इनसाइट ट्रिगर होताच प्लॅटफॉर्म तपशील आणि एक लिंकसह <strong>WhatsApp संदेश</strong> पाठवतो.',
          voice: 'काही इनसाइट्स इतक्या तातडीच्या असतात की कुणीतरी लॉगिन करून अॅप तपासण्याची वाट पाहू शकत नाहीत. म्हणून वेळ-संवेदनशील इनसाइट्ससाठी — आणि कोणत्या, हे तुम्ही कॉन्फिगरेशनदरम्यान निवडता — इनसाइट ट्रिगर होताच प्लॅटफॉर्म एक WhatsApp संदेश पाठवतो. लोक आधीच जिथे आहेत तिथेच, त्यांच्या फोनवर, मुख्य तपशील आणि कृतीसाठी एक लिंकसह तो येतो.',
        },
        {
          label: 'झिरो-ऑथ', title: 'झिरो-ऑथ लिंक — लॉगिन नाही',
          body: 'लिंक टॅप करा आणि ती त्या <strong>विशिष्ट इनसाइट</strong>ला तिच्या <strong>संपूर्ण तपशीला</strong>सह उघडते — आणि <strong>लॉगिन आवश्यक नाही</strong>. आम्ही याला <strong>झिरो-ऑथ ऍक्सेस</strong> म्हणतो. महत्त्वाच्या क्षणी, पासवर्डशी झगडणे नाही; ऑपरेटर लगेच पाहतो काय चुकले आणि काय करायचे.',
          voice: 'आणि हेच याला शक्तिशाली बनवते. तुम्ही ती लिंक टॅप करता तेव्हा, ती थेट त्या विशिष्ट इनसाइटला उघडते, संपूर्ण तपशील दाखवत — आणि महत्त्वाचे, अजिबात लॉगिन आवश्यक नाही. आम्ही याला झिरो-ऑथ ऍक्सेस म्हणतो. पहाटे दोनच्या एका महत्त्वाच्या क्षणाचा विचार करा — तुम्हाला नको असलेली शेवटची गोष्ट म्हणजे पासवर्डशी झगडणे. त्याऐवजी, ऑपरेटर लिंक टॅप करतो आणि लगेच पाहतो नेमके काय चुकले, आणि नेमके काय करायचे. जलद प्रतिसाद, खूप कमी अडथळा.',
          tip: { type: 'rememberLabel', text: 'झिरो-ऑथ लिंक एक इनसाइट संपूर्ण तपशीलासह आणि लॉगिनशिवाय उघडतात — महत्त्वाच्या क्षणी जलद प्रतिसादासाठी.' },
        },
        {
          label: 'डायजेस्ट', title: 'इनसाइट्स डायजेस्ट',
          body: 'प्रत्येक गोष्ट आणीबाणी नसते. <strong>इनसाइट्स डायजेस्ट</strong> एक नियतकालिक सारांश आहे: कॉन्फिगर केलेल्या श्रेणीत <strong>नवीन</strong> आणि <strong>बंद</strong> इनसाइट्स, आता <strong>एकूण उघड्या</strong>, संपूर्ण <strong>नवीनतम उघडी इनसाइट</strong>, आणि <strong>पेजची लिंक</strong>.',
          voice: 'अर्थात, प्रत्येक गोष्ट आणीबाणी नसते. रोजच्या जागरूकतेसाठी, इनसाइट्स डायजेस्ट आहे — तुमच्या इनबॉक्समध्ये येणारा एक नियतकालिक सारांश. तो तुम्ही कॉन्फिगर केलेल्या ऐतिहासिक श्रेणीत नवीन आणि बंद इनसाइट्स दाखवतो. त्या श्रेणीची पर्वा न करता, आता एकूण उघड्या इनसाइट्स दाखवतो. त्यात संपूर्ण नवीनतम उघडी इनसाइटही असते, जेणेकरून काहीही न उघडता तुम्ही कृती करू शकता. आणि उरलेले हवे असल्यास थेट इनसाइट्स पेजची लिंकही.',
        },
        {
          label: 'बहु-प्लांट', title: 'एक डायजेस्ट, अनेक प्लांट',
          body: 'आणि आता तुम्ही एकाच वापरकर्त्यासाठी <strong>अनेक प्लांट</strong>मध्ये डायजेस्ट कॉन्फिगर करू शकता — पूर्वी एकापुरते मर्यादित. अनेक साइट पाहणाऱ्या पर्यवेक्षकाला त्या सर्वांना कव्हर करणारा <strong>एक डायजेस्ट</strong> मिळतो, जेणेकरून काहीही सुटत नाही.',
          voice: 'आणि आणखी एक सुधारणा. आता तुम्ही एकाच व्यक्तीसाठी अनेक प्लांटमध्ये पसरणारा डायजेस्ट सेट करू शकता — पूर्वी, प्रत्येक वापरकर्ता एकाच प्लांटपुरता मर्यादित होता. म्हणून अनेक साइट सांभाळणाऱ्या पर्यवेक्षकाला त्या सर्वांना कव्हर करणारा एक एकत्रित डायजेस्ट मिळतो, एकाच ठिकाणी. तातडीच्यांसाठी तात्काळ WhatsApp अलर्ट, आणि बाकी सर्वांसाठी एक स्पष्ट डायजेस्ट — यांच्यामध्ये, तुमच्या प्लांटना काय हवे आहे यावर तुम्ही नेहमी पुढे असता. यामुळे इनसाइट्स पूर्ण होते.',
          tip: { type: 'upNextLabel', text: 'तातडीच्या इनसाइट्स लगेच तुम्हाला शोधतात; डायजेस्ट संपूर्ण चित्र नजरेत ठेवतो.' },
        },
      ],
    },
  },
};

export default lesson;
