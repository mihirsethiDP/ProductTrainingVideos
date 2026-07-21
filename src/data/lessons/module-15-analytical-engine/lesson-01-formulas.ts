import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/analytical-formulas`;

/**
 * M14 · Analytical Engine — L1: the formula library. (INTERNAL ONLY)
 * What the engine is (formulas over sensor tags → calculated data points), the
 * Formula list page, and the real formulas that power client plants: expected
 * chlorine dosing, cumulative flows, and the Hydraulic Efficiency family
 * (Outlet / Inlet × 100). Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'analytical-engine-formulas',
  moduleId: 'module-15-analytical-engine',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {
    list: `${BASE}/list.jpg`,
    search: `${BASE}/search.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'list', caption: 'The Analytical Engine',
      spotlight: { top: '8%', left: '0.5%', width: '16%', height: '11%' },
    },
    {
      mode: 'detail', screenshot: 'list', caption: 'Name · tag · home · frequency',
      spotlight: { top: '31%', left: '1%', width: '96.5%', height: '12%' },
    },
    {
      mode: 'detail', screenshot: 'search', caption: 'Search & filters',
      spotlight: { top: '15%', left: '1%', width: '97%', height: '8.5%' },
    },
    {
      mode: 'detail', screenshot: 'search', caption: 'One recipe, every plant',
      spotlight: { top: '31%', left: '0.5%', width: '97.5%', height: '56%' },
    },
  ],
  content: {
    en: {
      title: 'The <em>Analytical</em><br><em>Engine.</em>',
      subtitle:
        'Sensors give you raw readings — the Analytical Engine turns them into every calculated number the platform shows: dosing targets, cumulative flows, efficiencies, scores. This lesson is the lay of the land.',
      chapter: 'Analytical Engine · The library',
      steps: [
        {
          label: 'What it is', title: 'Formulas over sensor tags',
          body: "The <strong>Analytical Engine</strong> is where we define <strong>formulas</strong>: calculations whose inputs are <strong>sensor tags</strong> and whose output is a new <strong>data point</strong> the platform can use anywhere. Expected chlorine dosing, for example, is <code>(3 × Inlet Flow × 1000) / 120000</code> — where Inlet Flow arrives live from a sensor tag. The <strong>Formula</strong> page (Analytical Engine tab) lists every formula defined.",
          voice: "Sensors give us raw readings. The Analytical Engine is where we turn those readings into every calculated number the platform shows. A formula's inputs are sensor tags, and its output is a brand-new data point. Take expected chlorine dosing: three, times Inlet Flow, times one thousand, divided by one hundred and twenty thousand — where Inlet Flow arrives live from a sensor tag. The Formula page, on its Analytical Engine tab, lists every formula we've defined.",
        },
        {
          label: 'The columns', title: 'Name, tag, home, frequency',
          body: "Every row tells you four things. The <strong>Formula Name</strong> and description. The <strong>Formula Tag</strong> — the formula's own tag, so its result can be used <em>exactly like a sensor tag</em>, on dashboards or inside other formulas. The <strong>Asset & Workspace</strong> it belongs to. And its <strong>Frequency</strong> — how often it recalculates: <em>Per Minute</em>, <em>Per 60 Minute</em>, whatever the number needs.",
          voice: "Every row tells you four things. The formula's name and description. Its Formula Tag — and this is important — the formula gets a tag of its own, so its result can be used exactly like a sensor tag: on dashboards, in widgets, or inside other formulas. Then the asset and workspace it belongs to. And finally its frequency — how often it recalculates. Some run every minute, some every sixty; whatever the number needs.",
          tip: { type: 'noteLabel', text: 'HRT of EQT, COD Load rate, BOD reduction — the list you’re looking at is real production formulas doing real monitoring work.' },
        },
        {
          label: 'Find it', title: 'Search and filters',
          body: "The library spans every client, so the top bar matters: <strong>search</strong> by name, or narrow by <strong>Workspace</strong> and <strong>Asset</strong>. Typing <em>Hydeff</em> pulls up the whole <strong>Hydraulic Efficiency</strong> family in one shot.",
          voice: "The library spans every client we run, so the top bar matters. Search by name, or narrow the list by workspace and asset. Here, typing Hydeff pulls up the whole Hydraulic Efficiency family in one shot.",
        },
        {
          label: 'The classics', title: 'One recipe, every plant',
          body: "And there they are — <strong>Hydraulic Efficiency</strong> on Manohar Airport, Amity, Welspun, Adani, Tata, Parx… all built on the same recipe: <code>Outlet / Inlet × 100</code>, each flow arriving from a sensor tag. The same pattern gives us <strong>cumulative flows</strong> — a plant's total outlet as the sum of two or more flow meters. Define the recipe once per plant, and the engine keeps the number live.",
          voice: "And there they are — Hydraulic Efficiency on Manohar Airport, Amity, Welspun, Adani, Tata, Parx — every one built on the same recipe: Outlet divided by Inlet, times one hundred, with each flow arriving from a sensor tag. The same pattern gives us cumulative flows, where a plant's total outlet is simply the sum of two or more flow meters. Define the recipe once per plant, and the engine keeps the number live from then on.",
          tip: { type: 'upNextLabel', text: 'Next: create a formula from scratch — form, frequency, and the @ that summons sensor tags.' },
        },
      ],
    },
    hi: {
      title: '<em>Analytical</em><br><em>Engine.</em>',
      subtitle:
        'सेंसर कच्ची रीडिंग देते हैं — Analytical Engine उन्हें प्लेटफ़ॉर्म के हर परिकलित आँकड़े में बदलता है: डोज़िंग लक्ष्य, संचयी फ़्लो, एफ़िशिएंसी, स्कोर। यह पाठ पूरे परिदृश्य का परिचय है।',
      chapter: 'Analytical Engine · लाइब्रेरी',
      steps: [
        {
          label: 'यह क्या है', title: 'सेंसर टैग पर फ़ॉर्मूले',
          body: "<strong>Analytical Engine</strong> वह जगह है जहाँ हम <strong>फ़ॉर्मूले</strong> परिभाषित करते हैं: ऐसी गणनाएँ जिनके इनपुट <strong>सेंसर टैग</strong> हैं और आउटपुट एक नया <strong>डेटा पॉइंट</strong>, जिसे प्लेटफ़ॉर्म कहीं भी उपयोग कर सकता है। जैसे अपेक्षित क्लोरीन डोज़िंग: <code>(3 × Inlet Flow × 1000) / 120000</code> — जहाँ Inlet Flow एक सेंसर टैग से लाइव आता है। <strong>Formula</strong> पेज (Analytical Engine टैब) हर परिभाषित फ़ॉर्मूला सूचीबद्ध करता है।",
          voice: "सेंसर हमें कच्ची रीडिंग देते हैं। Analytical Engine वह जगह है जहाँ हम उन रीडिंग को प्लेटफ़ॉर्म के हर परिकलित आँकड़े में बदलते हैं। फ़ॉर्मूले के इनपुट सेंसर टैग होते हैं, और आउटपुट एक बिल्कुल नया डेटा पॉइंट। अपेक्षित क्लोरीन डोज़िंग को लें: तीन, गुणा Inlet Flow, गुणा एक हज़ार, भाग एक लाख बीस हज़ार — जहाँ Inlet Flow सेंसर टैग से लाइव आता है। Formula पेज, अपने Analytical Engine टैब पर, हमारा हर परिभाषित फ़ॉर्मूला सूचीबद्ध करता है।",
        },
        {
          label: 'कॉलम', title: 'नाम, टैग, ठिकाना, फ़्रीक्वेंसी',
          body: "हर पंक्ति चार बातें बताती है। <strong>Formula Name</strong> और विवरण। <strong>Formula Tag</strong> — फ़ॉर्मूले का अपना टैग, ताकि उसका परिणाम <em>बिल्कुल सेंसर टैग की तरह</em> उपयोग हो सके — डैशबोर्ड पर या दूसरे फ़ॉर्मूलों के अंदर। उसका <strong>Asset और Workspace</strong>। और उसकी <strong>Frequency</strong> — वह कितनी बार पुनर्गणना करता है: <em>Per Minute</em>, <em>Per 60 Minute</em>, जो भी उस आँकड़े को चाहिए।",
          voice: "हर पंक्ति चार बातें बताती है। फ़ॉर्मूले का नाम और विवरण। उसका Formula Tag — और यह अहम है — फ़ॉर्मूले को अपना टैग मिलता है, ताकि उसका परिणाम बिल्कुल सेंसर टैग की तरह इस्तेमाल हो: डैशबोर्ड पर, विजेट में, या दूसरे फ़ॉर्मूलों के अंदर। फिर वह asset और workspace जिसका वह है। और आख़िर में उसकी frequency — वह कितनी बार पुनर्गणना करता है। कुछ हर मिनट चलते हैं, कुछ हर साठ मिनट; जो भी उस आँकड़े को चाहिए।",
          tip: { type: 'noteLabel', text: 'HRT of EQT, COD Load rate, BOD reduction — जो सूची आप देख रहे हैं वह असली production फ़ॉर्मूले हैं, असली निगरानी का काम करते हुए।' },
        },
        {
          label: 'खोजें', title: 'खोज और फ़िल्टर',
          body: "लाइब्रेरी हर क्लाइंट तक फैली है, इसलिए ऊपर की पट्टी मायने रखती है: नाम से <strong>खोजें</strong>, या <strong>Workspace</strong> और <strong>Asset</strong> से सीमित करें। <em>Hydeff</em> टाइप करते ही पूरा <strong>Hydraulic Efficiency</strong> परिवार एक झटके में सामने आ जाता है।",
          voice: "लाइब्रेरी हमारे हर क्लाइंट तक फैली है, इसलिए ऊपर की पट्टी मायने रखती है। नाम से खोजें, या सूची को workspace और asset से सीमित करें। यहाँ, Hydeff टाइप करते ही पूरा Hydraulic Efficiency परिवार एक झटके में सामने आ जाता है।",
        },
        {
          label: 'क्लासिक', title: 'एक नुस्ख़ा, हर प्लांट',
          body: "और ये रहे — <strong>Hydraulic Efficiency</strong> Manohar Airport, Amity, Welspun, Adani, Tata, Parx पर… सब एक ही नुस्ख़े पर: <code>Outlet / Inlet × 100</code>, हर फ़्लो एक सेंसर टैग से। यही पैटर्न हमें <strong>संचयी फ़्लो</strong> देता है — प्लांट का कुल आउटलेट दो या अधिक flow meter का योग। नुस्ख़ा हर प्लांट पर एक बार परिभाषित करें, और इंजन आँकड़ा लाइव रखता है।",
          voice: "और ये रहे — Hydraulic Efficiency, Manohar Airport, Amity, Welspun, Adani, Tata, Parx पर — हर एक, एक ही नुस्ख़े पर बना: Outlet भाग Inlet, गुणा सौ, जहाँ हर फ़्लो सेंसर टैग से आता है। यही पैटर्न हमें संचयी फ़्लो देता है, जहाँ प्लांट का कुल आउटलेट बस दो या अधिक flow meter का योग है। नुस्ख़ा हर प्लांट पर एक बार परिभाषित कीजिए, और इंजन उसके बाद वह आँकड़ा लाइव रखता है।",
          tip: { type: 'upNextLabel', text: 'आगे: शुरू से फ़ॉर्मूला बनाएँ — फ़ॉर्म, frequency, और वह @ जो सेंसर टैग बुलाता है।' },
        },
      ],
    },
    ta: {
      title: '<em>Analytical</em><br><em>Engine.</em>',
      subtitle:
        'சென்சார்கள் மூல அளவீடுகளைத் தருகின்றன — Analytical Engine அவற்றை தளம் காட்டும் ஒவ்வொரு கணக்கிடப்பட்ட எண்ணாக மாற்றுகிறது: டோசிங் இலக்குகள், திரட்டு ஓட்டங்கள், திறன்கள், மதிப்பெண்கள். இந்தப் பாடம் அறிமுகம்.',
      chapter: 'Analytical Engine · நூலகம்',
      steps: [
        {
          label: 'என்ன இது', title: 'சென்சார் டேக்குகள் மீது சூத்திரங்கள்',
          body: "<strong>Analytical Engine</strong>-இல் நாம் <strong>சூத்திரங்களை</strong> வரையறுக்கிறோம்: உள்ளீடுகள் <strong>சென்சார் டேக்குகள்</strong>, வெளியீடு தளம் எங்கும் பயன்படுத்தக்கூடிய புதிய <strong>தரவுப் புள்ளி</strong>. உதாரணம், எதிர்பார்க்கப்படும் குளோரின் டோசிங்: <code>(3 × Inlet Flow × 1000) / 120000</code> — Inlet Flow ஒரு சென்சார் டேக்கிலிருந்து நேரலையாக வருகிறது. <strong>Formula</strong> பக்கம் (Analytical Engine டேப்) வரையறுத்த ஒவ்வொரு சூத்திரத்தையும் பட்டியலிடுகிறது.",
          voice: "சென்சார்கள் நமக்கு மூல அளவீடுகளைத் தருகின்றன. Analytical Engine-இல்தான் அவற்றை தளம் காட்டும் ஒவ்வொரு கணக்கிடப்பட்ட எண்ணாக மாற்றுகிறோம். ஒரு சூத்திரத்தின் உள்ளீடுகள் சென்சார் டேக்குகள், வெளியீடு ஒரு புத்தம்புதிய தரவுப் புள்ளி. எதிர்பார்க்கப்படும் குளோரின் டோசிங்கை எடுங்கள்: மூன்று, பெருக்கல் Inlet Flow, பெருக்கல் ஆயிரம், வகுத்தல் ஒரு லட்சத்து இருபதாயிரம் — Inlet Flow சென்சார் டேக்கிலிருந்து நேரலையாக வருகிறது. Formula பக்கம், அதன் Analytical Engine டேப்பில், நாம் வரையறுத்த ஒவ்வொரு சூத்திரத்தையும் பட்டியலிடுகிறது.",
        },
        {
          label: 'நெடுவரிசைகள்', title: 'பெயர், டேக், இடம், அலைவெண்',
          body: "ஒவ்வொரு வரிசையும் நான்கு விஷயங்களைச் சொல்கிறது. <strong>Formula Name</strong> மற்றும் விளக்கம். <strong>Formula Tag</strong> — சூத்திரத்தின் சொந்த டேக், அதன் முடிவு <em>சரியாக ஒரு சென்சார் டேக் போலப்</em> பயன்படும் — டாஷ்போர்டுகளில் அல்லது பிற சூத்திரங்களுக்குள். அதன் <strong>Asset & Workspace</strong>. மற்றும் அதன் <strong>Frequency</strong> — எத்தனை முறை மறுகணக்கீடு: <em>Per Minute</em>, <em>Per 60 Minute</em>, அந்த எண்ணுக்கு எது தேவையோ.",
          voice: "ஒவ்வொரு வரிசையும் நான்கு விஷயங்களைச் சொல்கிறது. சூத்திரத்தின் பெயரும் விளக்கமும். அதன் Formula Tag — இது முக்கியம் — சூத்திரத்திற்கே ஒரு டேக் கிடைக்கிறது, எனவே அதன் முடிவு சரியாக ஒரு சென்சார் டேக் போலப் பயன்படும்: டாஷ்போர்டுகளில், விட்ஜெட்டுகளில், அல்லது பிற சூத்திரங்களுக்குள். பின் அது சேர்ந்த asset மற்றும் workspace. இறுதியாக அதன் frequency — எத்தனை முறை மறுகணக்கீடு செய்கிறது. சில ஒவ்வொரு நிமிடமும் ஓடுகின்றன, சில ஒவ்வொரு அறுபது நிமிடமும்; அந்த எண்ணுக்கு எது தேவையோ அது.",
          tip: { type: 'noteLabel', text: 'HRT of EQT, COD Load rate, BOD reduction — நீங்கள் பார்க்கும் பட்டியல் உண்மையான production சூத்திரங்கள், உண்மையான கண்காணிப்பு வேலை செய்பவை.' },
        },
        {
          label: 'கண்டுபிடி', title: 'தேடலும் வடிப்பான்களும்',
          body: "நூலகம் ஒவ்வொரு வாடிக்கையாளரையும் தழுவுகிறது, எனவே மேல் பட்டை முக்கியம்: பெயரால் <strong>தேடுங்கள்</strong>, அல்லது <strong>Workspace</strong> மற்றும் <strong>Asset</strong>-ஆல் சுருக்குங்கள். <em>Hydeff</em> என தட்டச்சு செய்தால் முழு <strong>Hydraulic Efficiency</strong> குடும்பமும் ஒரே அடியில் வருகிறது.",
          voice: "நூலகம் நாம் இயக்கும் ஒவ்வொரு வாடிக்கையாளரையும் தழுவுகிறது, எனவே மேல் பட்டை முக்கியம். பெயரால் தேடுங்கள், அல்லது பட்டியலை workspace மற்றும் asset-ஆல் சுருக்குங்கள். இங்கே, Hydeff என தட்டச்சு செய்தவுடன் முழு Hydraulic Efficiency குடும்பமும் ஒரே அடியில் வருகிறது.",
        },
        {
          label: 'கிளாசிக்', title: 'ஒரு செய்முறை, ஒவ்வொரு ஆலை',
          body: "இதோ — <strong>Hydraulic Efficiency</strong>: Manohar Airport, Amity, Welspun, Adani, Tata, Parx… எல்லாம் ஒரே செய்முறையில்: <code>Outlet / Inlet × 100</code>, ஒவ்வொரு ஓட்டமும் சென்சார் டேக்கிலிருந்து. இதே வடிவம் <strong>திரட்டு ஓட்டங்களைத்</strong> தருகிறது — ஆலையின் மொத்த outlet இரண்டோ அதற்கு மேற்பட்டோ flow meter-களின் கூட்டுத்தொகை. செய்முறையை ஆலைக்கு ஒருமுறை வரையறுங்கள், இயந்திரம் எண்ணை நேரலையாக வைத்திருக்கும்.",
          voice: "இதோ அவை — Hydraulic Efficiency, Manohar Airport, Amity, Welspun, Adani, Tata, Parx-இல் — ஒவ்வொன்றும் ஒரே செய்முறையில்: Outlet வகுத்தல் Inlet, பெருக்கல் நூறு, ஒவ்வொரு ஓட்டமும் சென்சார் டேக்கிலிருந்து வருகிறது. இதே வடிவம்தான் திரட்டு ஓட்டங்களையும் தருகிறது — ஆலையின் மொத்த outlet வெறுமனே இரண்டோ மேற்பட்டோ flow meter-களின் கூட்டுத்தொகை. செய்முறையை ஒவ்வொரு ஆலைக்கும் ஒருமுறை வரையறுங்கள், அதன்பின் இயந்திரம் அந்த எண்ணை நேரலையாக வைத்திருக்கும்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: புதிதாக ஒரு சூத்திரம் — படிவம், frequency, சென்சார் டேக்குகளை அழைக்கும் @.' },
        },
      ],
    },
    mr: {
      title: '<em>Analytical</em><br><em>Engine.</em>',
      subtitle:
        'सेन्सर कच्च्या रीडिंग देतात — Analytical Engine त्यांना प्लॅटफॉर्म दाखवत असलेल्या प्रत्येक गणित आकड्यात बदलते: डोसिंग लक्ष्ये, एकत्रित फ्लो, कार्यक्षमता, स्कोअर. हा धडा संपूर्ण परिचय आहे.',
      chapter: 'Analytical Engine · लायब्ररी',
      steps: [
        {
          label: 'हे काय', title: 'सेन्सर टॅगवर फॉर्म्युले',
          body: "<strong>Analytical Engine</strong> मध्ये आपण <strong>फॉर्म्युले</strong> परिभाषित करतो: अशी गणिते ज्यांचे इनपुट <strong>सेन्सर टॅग</strong> आणि आउटपुट एक नवा <strong>डेटा पॉइंट</strong>, जो प्लॅटफॉर्म कुठेही वापरू शकतो. उदा. अपेक्षित क्लोरीन डोसिंग: <code>(3 × Inlet Flow × 1000) / 120000</code> — जिथे Inlet Flow सेन्सर टॅगमधून लाइव्ह येतो. <strong>Formula</strong> पेज (Analytical Engine टॅब) परिभाषित प्रत्येक फॉर्म्युला सूचीबद्ध करते.",
          voice: "सेन्सर आपल्याला कच्च्या रीडिंग देतात. Analytical Engine मध्ये आपण त्या रीडिंगना प्लॅटफॉर्म दाखवत असलेल्या प्रत्येक गणित आकड्यात बदलतो. फॉर्म्युल्याचे इनपुट सेन्सर टॅग असतात, आणि आउटपुट एक अगदी नवा डेटा पॉइंट. अपेक्षित क्लोरीन डोसिंग घ्या: तीन, गुणिले Inlet Flow, गुणिले एक हजार, भागिले एक लाख वीस हजार — जिथे Inlet Flow सेन्सर टॅगमधून लाइव्ह येतो. Formula पेज, त्याच्या Analytical Engine टॅबवर, आपण परिभाषित केलेला प्रत्येक फॉर्म्युला सूचीबद्ध करते.",
        },
        {
          label: 'कॉलम', title: 'नाव, टॅग, ठिकाण, फ्रिक्वेन्सी',
          body: "प्रत्येक ओळ चार गोष्टी सांगते. <strong>Formula Name</strong> आणि वर्णन. <strong>Formula Tag</strong> — फॉर्म्युल्याचा स्वतःचा टॅग, म्हणजे त्याचा निकाल <em>अगदी सेन्सर टॅगसारखा</em> वापरता येतो — डॅशबोर्डवर किंवा इतर फॉर्म्युल्यांच्या आत. त्याचे <strong>Asset व Workspace</strong>. आणि त्याची <strong>Frequency</strong> — तो किती वेळा पुनर्गणना करतो: <em>Per Minute</em>, <em>Per 60 Minute</em>, त्या आकड्याला जे हवे ते.",
          voice: "प्रत्येक ओळ चार गोष्टी सांगते. फॉर्म्युल्याचे नाव आणि वर्णन. त्याचा Formula Tag — आणि हे महत्त्वाचे — फॉर्म्युल्याला स्वतःचा टॅग मिळतो, म्हणजे त्याचा निकाल अगदी सेन्सर टॅगसारखा वापरता येतो: डॅशबोर्डवर, विजेटमध्ये, किंवा इतर फॉर्म्युल्यांच्या आत. मग तो ज्याचा आहे ते asset आणि workspace. आणि शेवटी त्याची frequency — तो किती वेळा पुनर्गणना करतो. काही दर मिनिटाला चालतात, काही दर साठ मिनिटांनी; त्या आकड्याला जे हवे ते.",
          tip: { type: 'noteLabel', text: 'HRT of EQT, COD Load rate, BOD reduction — तुम्ही पाहत असलेली यादी खरे production फॉर्म्युले आहेत, खरे निगराणी काम करणारे.' },
        },
        {
          label: 'शोधा', title: 'शोध आणि फिल्टर',
          body: "लायब्ररी प्रत्येक क्लायंटपर्यंत पसरली आहे, म्हणून वरची पट्टी महत्त्वाची: नावाने <strong>शोधा</strong>, किंवा <strong>Workspace</strong> व <strong>Asset</strong> ने मर्यादित करा. <em>Hydeff</em> टाइप करताच संपूर्ण <strong>Hydraulic Efficiency</strong> कुटुंब एका दमात समोर येते.",
          voice: "लायब्ररी आपण चालवत असलेल्या प्रत्येक क्लायंटपर्यंत पसरली आहे, म्हणून वरची पट्टी महत्त्वाची. नावाने शोधा, किंवा यादी workspace आणि asset ने मर्यादित करा. इथे, Hydeff टाइप करताच संपूर्ण Hydraulic Efficiency कुटुंब एका दमात समोर येते.",
        },
        {
          label: 'क्लासिक', title: 'एक कृती, प्रत्येक प्लांट',
          body: "आणि हे पाहा — <strong>Hydraulic Efficiency</strong>: Manohar Airport, Amity, Welspun, Adani, Tata, Parx… सर्व एकाच कृतीवर: <code>Outlet / Inlet × 100</code>, प्रत्येक फ्लो सेन्सर टॅगमधून. हाच पॅटर्न आपल्याला <strong>एकत्रित फ्लो</strong> देतो — प्लांटचा एकूण outlet दोन किंवा अधिक flow meter ची बेरीज. कृती प्रत्येक प्लांटवर एकदा परिभाषित करा, आणि इंजिन तो आकडा लाइव्ह ठेवते.",
          voice: "आणि ती पाहा — Hydraulic Efficiency, Manohar Airport, Amity, Welspun, Adani, Tata, Parx वर — प्रत्येक एकाच कृतीवर बांधलेली: Outlet भागिले Inlet, गुणिले शंभर, जिथे प्रत्येक फ्लो सेन्सर टॅगमधून येतो. हाच पॅटर्न आपल्याला एकत्रित फ्लो देतो, जिथे प्लांटचा एकूण outlet फक्त दोन किंवा अधिक flow meter ची बेरीज असतो. कृती प्रत्येक प्लांटवर एकदा परिभाषित करा, आणि इंजिन त्यानंतर तो आकडा लाइव्ह ठेवते.",
          tip: { type: 'upNextLabel', text: 'पुढे: सुरवातीपासून फॉर्म्युला तयार करा — फॉर्म, frequency, आणि सेन्सर टॅग बोलावणारा @.' },
        },
      ],
    },
  },
};

export default lesson;
