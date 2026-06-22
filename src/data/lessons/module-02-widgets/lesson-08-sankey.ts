import type { Lesson, SankeyData } from '../../types';

/**
 * Module 2 · Lesson 8 — Sankey (Plant Flow).   Tag: M2.L8
 * Shows how a value (water volume) flows from one source and bifurcates into
 * many destinations across several levels. Recreates the Plant Flow screenshot.
 */

function sankey(highlight?: string): SankeyData {
  return {
    title: 'Plant Flow',
    periodLabel: 'Jun 21 03:41 PM - Jun 22 03:41 PM | Hours',
    highlight,
    nodes: [
      { id: 'etpInlet', label: 'ETP Inlet', value: 610.9, level: 0, color: '#2b7bd6' },
      { id: 'etpOutlet', label: 'ETP Outlet', value: 406.5, level: 1, color: '#f08a24' },
      { id: 'sludge', label: 'Sludge Rejection', value: 108.3, level: 1, color: '#d6332b' },
      { id: 'waterLoss', label: 'Water Loss', value: 96.1, level: 1, color: '#d94fb0' },
      { id: 'uf', label: 'UF', value: 406.5, level: 2, color: '#2faa3f' },
      { id: 'roFeed', label: 'RO Feed', value: 299.2, level: 3, color: '#8e44c9' },
      { id: 'roPermeate', label: 'RO Permeate', value: 156.9, level: 4, color: '#2faa3f' },
      { id: 'roReject', label: 'RO Reject', value: 137.8, level: 4, color: '#9b6dd1' },
    ],
    links: [
      { source: 'etpInlet', target: 'etpOutlet', value: 406.5, color: '#e9e7a8' },
      { source: 'etpInlet', target: 'sludge', value: 108.3, color: '#bcd6ee' },
      { source: 'etpInlet', target: 'waterLoss', value: 96.1, color: '#f3c0c0' },
      { source: 'etpOutlet', target: 'uf', value: 406.5, color: '#aee3ec' },
      { source: 'uf', target: 'roFeed', value: 299.2, color: '#f7d3ad' },
      { source: 'roFeed', target: 'roPermeate', value: 156.9, color: '#bfe3c0' },
      { source: 'roFeed', target: 'roReject', value: 137.8, color: '#d8c7ec' },
    ],
  };
}

const lesson: Lesson = {
  id: 'lesson-08-sankey',
  moduleId: 'module-02-widgets',
  lessonNumber: 8,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'sankey', caption: 'Plant Flow',
      widgetState: { sankey: sankey() }, cursor: [{ at: 0.1, x: 45, y: 30 }] },
    { mode: 'widget', widget: 'sankey', caption: 'One source',
      widgetState: { sankey: sankey('etpInlet') }, cursor: [{ at: 0.2, x: 5, y: 45, click: true }] },
    { mode: 'widget', widget: 'sankey', caption: 'The first split',
      widgetState: { sankey: sankey('etpInlet') }, cursor: [{ at: 0.25, x: 25, y: 30 }, { at: 0.6, x: 25, y: 72 }] },
    { mode: 'widget', widget: 'sankey', caption: 'Following the chain',
      widgetState: { sankey: sankey('roFeed') }, cursor: [{ at: 0.2, x: 50, y: 25 }, { at: 0.7, x: 90, y: 28 }] },
    { mode: 'widget', widget: 'sankey', caption: 'Where every drop goes',
      widgetState: { sankey: sankey() }, cursor: [{ at: 0.2, x: 50, y: 30 }] },
  ],
  content: {
    en: {
      title: 'The <em>Sankey</em><br>Diagram.',
      subtitle:
        'Follow your water from a single source as it splits, level by level, into every destination — and see exactly where it all goes.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'See the whole flow at once',
          body: "The <strong>Sankey</strong> diagram shows how a value — for us, <strong>water</strong> — flows from one main source and <strong>bifurcates</strong> into different places across multiple levels. The <strong>width</strong> of each band is its volume.",
          voice: "Our final widget in this module is a beautiful one — the Sankey diagram. It shows how a value, and for us that value is water, flows from one main source and splits into different destinations, level by level. The clever part is the width of each band — the thicker the band, the more water is flowing through it. So you can read the whole plant's flow at a single glance.",
        },
        {
          label: 'The Source', title: 'It starts from one source',
          body: "Everything begins at the source on the left. Here it's the <strong>ETP Inlet</strong> at <strong>610.90</strong> — the total water entering the plant. Every band downstream comes out of this one node.",
          voice: "It all begins at the source, on the far left. Here that's the E T P inlet, at six hundred ten point nine — the total volume of water entering the plant. Notice how tall that bar is. Everything you see flowing to the right comes out of this single source.",
        },
        {
          label: 'The Split', title: 'One source, many destinations',
          body: "From the source, the flow <strong>splits</strong>. The ETP Inlet's 610.90 divides into <strong>ETP Outlet (406.50)</strong>, <strong>Sludge Rejection (108.30)</strong>, and <strong>Water Loss (96.10)</strong> — and they add up exactly to the source.",
          voice: "From the source, the flow splits apart. The inlet's six hundred ten point nine divides three ways — four hundred six point five goes on as treated E T P outlet, one hundred eight point three leaves as sludge rejection, and ninety six point one is water loss. And here's the nice thing — add those three up, and they come back to exactly six hundred ten point nine. Nothing is unaccounted for.",
          tip: { type: 'rememberLabel', text: 'The bands leaving a node always add up to the node — a quick visual water balance.' },
        },
        {
          label: 'The Chain', title: 'Following it level by level',
          body: "The main flow continues across <strong>levels</strong>: ETP Outlet → <strong>UF</strong> → <strong>RO Feed (299.20)</strong>, which itself splits into <strong>RO Permeate (156.90)</strong> and <strong>RO Reject (137.80)</strong>. Each stage is its own column.",
          voice: "Now follow the main stream as it moves to the right, one level at a time. The E T P outlet feeds the U F stage, the U F passes its water on as R O feed at two hundred ninety nine point two, and the R O feed then splits one last time — into R O permeate, the clean water you keep, and R O reject. Each treatment stage is its own column, so you can trace a drop of water all the way through the plant.",
        },
        {
          label: 'Why It Matters', title: 'See where every drop goes',
          body: "At a glance, the Sankey shows your whole <strong>water balance</strong> — how much is recovered, how much is lost, and where. It's the fastest way to spot losses and understand your plant end to end. That completes the widgets in this module.",
          voice: "So why is the Sankey so valuable? Because in one picture, it shows your entire water balance — how much water you recover, how much you lose, and exactly where those losses happen. If a loss band suddenly grows thicker, you'll see it immediately. It's the fastest way to understand your plant from end to end. And that completes our deep dive into the dashboard widgets.",
          tip: { type: 'upNextLabel', text: "You've now seen every widget type on the dashboard." },
        },
      ],
    },
    hi: {
      title: '<em>सैंकी</em><br>आरेख।',
      subtitle:
        'अपने पानी को एक स्रोत से तब तक देखें जब तक वह स्तर-दर-स्तर हर गंतव्य में बँट न जाए — और देखें कि सब कहाँ जाता है।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'पूरा प्रवाह एक साथ देखें',
          body: '<strong>सैंकी</strong> आरेख दिखाता है कि एक मान — हमारे लिए, <strong>पानी</strong> — एक मुख्य स्रोत से कैसे बहता है और कई स्तरों पर अलग-अलग जगहों में <strong>बँटता</strong> है। हर बैंड की <strong>चौड़ाई</strong> उसकी मात्रा है।',
          voice: 'इस मॉड्यूल का हमारा आख़िरी विजेट सुंदर है — सैंकी आरेख। यह दिखाता है कि एक मान, और हमारे लिए वह मान पानी है, एक मुख्य स्रोत से कैसे बहता है और स्तर-दर-स्तर अलग-अलग गंतव्यों में बँटता है। चतुर बात है हर बैंड की चौड़ाई — बैंड जितना मोटा, उतना अधिक पानी बह रहा है। तो आप पूरे प्लांट का प्रवाह एक ही नज़र में पढ़ सकते हैं।',
        },
        {
          label: 'स्रोत', title: 'यह एक स्रोत से शुरू होता है',
          body: 'सब कुछ बाईं ओर स्रोत से शुरू होता है। यहाँ वह <strong>ETP इनलेट</strong> है <strong>610.90</strong> पर — प्लांट में प्रवेश करने वाला कुल पानी। नीचे का हर बैंड इसी एक नोड से निकलता है।',
          voice: 'सब कुछ सबसे बाईं ओर स्रोत से शुरू होता है। यहाँ वह ई टी पी इनलेट है, छह सौ दस दशमलव नौ पर — प्लांट में प्रवेश करने वाला कुल पानी। देखिए वह बार कितना ऊँचा है। दाईं ओर बहता हुआ आप जो कुछ देखते हैं, वह इसी एक स्रोत से निकलता है।',
        },
        {
          label: 'विभाजन', title: 'एक स्रोत, कई गंतव्य',
          body: 'स्रोत से, प्रवाह <strong>बँटता</strong> है। ETP इनलेट के 610.90 <strong>ETP आउटलेट (406.50)</strong>, <strong>स्लज रिजेक्शन (108.30)</strong>, और <strong>वाटर लॉस (96.10)</strong> में बँटते हैं — और ये ठीक स्रोत के बराबर जुड़ते हैं।',
          voice: 'स्रोत से, प्रवाह अलग हो जाता है। इनलेट के छह सौ दस दशमलव नौ तीन तरह बँटते हैं — चार सौ छह दशमलव पाँच उपचारित ई टी पी आउटलेट के रूप में आगे जाता है, एक सौ आठ दशमलव तीन स्लज रिजेक्शन के रूप में निकलता है, और छियानबे दशमलव एक वाटर लॉस है। और अच्छी बात — इन तीनों को जोड़ें, तो वे ठीक छह सौ दस दशमलव नौ पर वापस आते हैं। कुछ भी बिना हिसाब नहीं।',
          tip: { type: 'rememberLabel', text: 'एक नोड से निकलने वाले बैंड हमेशा नोड के बराबर जुड़ते हैं — एक त्वरित दृश्य जल संतुलन।' },
        },
        {
          label: 'श्रृंखला', title: 'स्तर-दर-स्तर इसका अनुसरण',
          body: 'मुख्य प्रवाह <strong>स्तरों</strong> में आगे बढ़ता है: ETP आउटलेट → <strong>UF</strong> → <strong>RO फीड (299.20)</strong>, जो स्वयं <strong>RO परमिएट (156.90)</strong> और <strong>RO रिजेक्ट (137.80)</strong> में बँटता है। हर चरण अपना कॉलम है।',
          voice: 'अब मुख्य धारा का अनुसरण करें जैसे वह दाईं ओर एक-एक स्तर बढ़ती है। ई टी पी आउटलेट यू एफ चरण को फीड करता है, यू एफ अपना पानी आर ओ फीड के रूप में दो सौ निन्यानबे दशमलव दो पर आगे भेजता है, और आर ओ फीड फिर आख़िरी बार बँटता है — आर ओ परमिएट में, जो साफ़ पानी आप रखते हैं, और आर ओ रिजेक्ट में। हर उपचार चरण अपना कॉलम है, तो आप पानी की एक बूंद को पूरे प्लांट में ट्रेस कर सकते हैं।',
        },
        {
          label: 'यह क्यों मायने रखता है', title: 'देखें हर बूंद कहाँ जाती है',
          body: 'एक नज़र में, सैंकी आपका पूरा <strong>जल संतुलन</strong> दिखाता है — कितना पुनर्प्राप्त, कितना खोया, और कहाँ। नुकसान पहचानने और अपने प्लांट को पूरी तरह समझने का सबसे तेज़ तरीका। यह इस मॉड्यूल के विजेट्स को पूरा करता है।',
          voice: 'तो सैंकी इतना मूल्यवान क्यों है? क्योंकि एक ही तस्वीर में, यह आपका पूरा जल संतुलन दिखाता है — आप कितना पानी पुनर्प्राप्त करते हैं, कितना खोते हैं, और वे नुकसान कहाँ होते हैं। अगर कोई नुकसान बैंड अचानक मोटा हो जाए, आप उसे तुरंत देखेंगे। अपने प्लांट को आद्योपांत समझने का यह सबसे तेज़ तरीका है। और यह डैशबोर्ड विजेट्स में हमारी गहन पड़ताल को पूरा करता है।',
          tip: { type: 'upNextLabel', text: 'अब आपने डैशबोर्ड के हर विजेट प्रकार को देख लिया है।' },
        },
      ],
    },
    ta: {
      title: '<em>சான்கி</em><br>வரைபடம்.',
      subtitle:
        'உங்கள் நீரை ஒரே மூலத்திலிருந்து, அது நிலைக்கு நிலை ஒவ்வொரு இலக்காகப் பிரியும் வரை பின்தொடருங்கள் — அனைத்தும் எங்கே செல்கிறது என்பதைக் காணுங்கள்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'முழு ஓட்டத்தையும் ஒரே நேரத்தில் காணுங்கள்',
          body: '<strong>சான்கி</strong> வரைபடம் ஒரு மதிப்பு — நமக்கு, <strong>நீர்</strong> — ஒரு முக்கிய மூலத்திலிருந்து எப்படிப் பாய்ந்து பல நிலைகளில் வெவ்வேறு இடங்களாகப் <strong>பிரிகிறது</strong> என்பதைக் காட்டுகிறது. ஒவ்வொரு பட்டையின் <strong>அகலம்</strong> அதன் கனஅளவு.',
          voice: 'இந்தத் தொகுதியில் நமது இறுதி விட்ஜெட் ஒரு அழகானது — சான்கி வரைபடம். ஒரு மதிப்பு, நமக்கு அது நீர், ஒரு முக்கிய மூலத்திலிருந்து எப்படிப் பாய்ந்து நிலைக்கு நிலை வெவ்வேறு இலக்குகளாகப் பிரிகிறது என்பதைக் காட்டுகிறது. திறமையான பகுதி ஒவ்வொரு பட்டையின் அகலம் — பட்டை எவ்வளவு தடிமனாகவோ, அவ்வளவு நீர் பாய்கிறது. எனவே முழு ஆலையின் ஓட்டத்தையும் ஒரே பார்வையில் படிக்கலாம்.',
        },
        {
          label: 'மூலம்', title: 'இது ஒரே மூலத்திலிருந்து தொடங்குகிறது',
          body: 'அனைத்தும் இடதுபுறம் மூலத்தில் தொடங்குகிறது. இங்கே அது <strong>ETP இன்லெட்</strong> <strong>610.90</strong>-இல் — ஆலையில் நுழையும் மொத்த நீர். கீழ்நோக்கிய ஒவ்வொரு பட்டையும் இந்த ஒரு கணுவிலிருந்தே வருகிறது.',
          voice: 'அனைத்தும் இடது விளிம்பில் மூலத்தில் தொடங்குகிறது. இங்கே அது ஈ டி பி இன்லெட், அறுநூற்றி பத்து புள்ளி ஒன்பதில் — ஆலையில் நுழையும் மொத்த நீர் கனஅளவு. அந்தப் பட்டை எவ்வளவு உயரமாக உள்ளது என்பதைக் கவனியுங்கள். வலதுபுறம் பாய்வதாக நீங்கள் காண்பது அனைத்தும் இந்த ஒரே மூலத்திலிருந்தே வருகிறது.',
        },
        {
          label: 'பிரிவு', title: 'ஒரே மூலம், பல இலக்குகள்',
          body: 'மூலத்திலிருந்து ஓட்டம் <strong>பிரிகிறது</strong>. ETP இன்லெட்டின் 610.90 — <strong>ETP அவுட்லெட் (406.50)</strong>, <strong>ஸ்லட்ஜ் ரிஜெக்ஷன் (108.30)</strong>, <strong>வாட்டர் லாஸ் (96.10)</strong> எனப் பிரிகிறது — இவை சரியாக மூலத்திற்குச் சமமாகக் கூடுகின்றன.',
          voice: 'மூலத்திலிருந்து ஓட்டம் பிரிந்து செல்கிறது. இன்லெட்டின் அறுநூற்றி பத்து புள்ளி ஒன்பது மூன்று வழிகளில் பிரிகிறது — நானூற்றி ஆறு புள்ளி ஐந்து சுத்திகரிக்கப்பட்ட ஈ டி பி அவுட்லெட்டாக தொடர்கிறது, நூற்றி எட்டு புள்ளி மூன்று ஸ்லட்ஜ் ரிஜெக்ஷனாக வெளியேறுகிறது, தொண்ணூற்றி ஆறு புள்ளி ஒன்று வாட்டர் லாஸ். நல்ல விஷயம் — இம்மூன்றையும் கூட்டினால், சரியாக அறுநூற்றி பத்து புள்ளி ஒன்பதுக்கே திரும்புகின்றன. எதுவும் கணக்கில் வராமல் இல்லை.',
          tip: { type: 'rememberLabel', text: 'ஒரு கணுவிலிருந்து வெளியேறும் பட்டைகள் எப்போதும் கணுவுக்குச் சமமாகக் கூடும் — ஒரு விரைவான காட்சி நீர் சமநிலை.' },
        },
        {
          label: 'சங்கிலி', title: 'நிலைக்கு நிலை பின்தொடர்தல்',
          body: 'முதன்மை ஓட்டம் <strong>நிலைகளில்</strong> தொடர்கிறது: ETP அவுட்லெட் → <strong>UF</strong> → <strong>RO ஃபீட் (299.20)</strong>, அது <strong>RO பெர்மியேட் (156.90)</strong> மற்றும் <strong>RO ரிஜெக்ட் (137.80)</strong> எனப் பிரிகிறது. ஒவ்வொரு கட்டமும் தனி நெடுவரிசை.',
          voice: 'இப்போது முதன்மை ஓட்டத்தை அது வலதுபுறம் ஒவ்வொரு நிலையாக நகரும்போது பின்தொடருங்கள். ஈ டி பி அவுட்லெட் யு எஃப் கட்டத்திற்கு உணவளிக்கிறது, யு எஃப் தனது நீரை ஆர் ஓ ஃபீட்டாக இருநூற்றி தொண்ணூற்றி ஒன்பது புள்ளி இரண்டில் அனுப்புகிறது, பின்னர் ஆர் ஓ ஃபீட் கடைசியாக ஒருமுறை பிரிகிறது — நீங்கள் வைத்துக்கொள்ளும் சுத்தமான நீரான ஆர் ஓ பெர்மியேட், மற்றும் ஆர் ஓ ரிஜெக்ட். ஒவ்வொரு சுத்திகரிப்புக் கட்டமும் தனி நெடுவரிசை, எனவே ஒரு துளி நீரை ஆலை முழுவதும் கண்டறியலாம்.',
        },
        {
          label: 'ஏன் முக்கியம்', title: 'ஒவ்வொரு துளியும் எங்கே செல்கிறது',
          body: 'ஒரே பார்வையில், சான்கி உங்கள் முழு <strong>நீர் சமநிலையைக்</strong> காட்டுகிறது — எவ்வளவு மீட்கப்படுகிறது, எவ்வளவு இழக்கப்படுகிறது, எங்கே. இழப்புகளைக் கண்டறிந்து ஆலையை முழுமையாகப் புரிந்துகொள்ள வேகமான வழி. இது இந்தத் தொகுதியின் விட்ஜெட்களை முடிக்கிறது.',
          voice: 'எனவே சான்கி ஏன் இவ்வளவு மதிப்புமிக்கது? ஏனெனில் ஒரே படத்தில், அது உங்கள் முழு நீர் சமநிலையைக் காட்டுகிறது — எவ்வளவு நீரை மீட்கிறீர்கள், எவ்வளவு இழக்கிறீர்கள், அந்த இழப்புகள் சரியாக எங்கே நிகழ்கின்றன. ஒரு இழப்புப் பட்டை திடீரென தடிமனானால், உடனே காண்பீர்கள். ஆலையை ஆரம்பம் முதல் இறுதி வரை புரிந்துகொள்ள இது வேகமான வழி. இது டாஷ்போர்டு விட்ஜெட்களில் நமது ஆழ்ந்த பார்வையை முடிக்கிறது.',
          tip: { type: 'upNextLabel', text: 'இப்போது டாஷ்போர்டின் ஒவ்வொரு விட்ஜெட் வகையையும் பார்த்துவிட்டீர்கள்.' },
        },
      ],
    },
    mr: {
      title: '<em>सॅन्की</em><br>आकृती.',
      subtitle:
        'तुमचे पाणी एका स्रोतापासून, ते स्तर-दर-स्तर प्रत्येक गंतव्यात विभागले जाईपर्यंत अनुसरा — आणि सर्व कुठे जाते ते पाहा.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'संपूर्ण प्रवाह एकाच वेळी पाहा',
          body: '<strong>सॅन्की</strong> आकृती दाखवते की एक मूल्य — आपल्यासाठी, <strong>पाणी</strong> — एका मुख्य स्रोतापासून कसे वाहते आणि अनेक स्तरांवर वेगवेगळ्या ठिकाणी कसे <strong>विभागले</strong> जाते. प्रत्येक बँडची <strong>रुंदी</strong> म्हणजे त्याचे आकारमान.',
          voice: 'या मॉड्यूलमधील आपले शेवटचे विजेट सुंदर आहे — सॅन्की आकृती. ती दाखवते की एक मूल्य, आणि आपल्यासाठी ते मूल्य पाणी आहे, एका मुख्य स्रोतापासून कसे वाहते आणि स्तर-दर-स्तर वेगवेगळ्या गंतव्यांत विभागले जाते. हुशार भाग म्हणजे प्रत्येक बँडची रुंदी — बँड जितका जाड, तितके अधिक पाणी वाहत आहे. म्हणून तुम्ही संपूर्ण प्लांटचा प्रवाह एकाच दृष्टीक्षेपात वाचू शकता.',
        },
        {
          label: 'स्रोत', title: 'ते एका स्रोतापासून सुरू होते',
          body: 'सर्व काही डावीकडे स्रोतापासून सुरू होते. इथे तो <strong>ETP इनलेट</strong> आहे <strong>610.90</strong> वर — प्लांटमध्ये प्रवेश करणारे एकूण पाणी. खालचा प्रत्येक बँड याच एका नोडमधून बाहेर येतो.',
          voice: 'सर्व काही सर्वात डावीकडे स्रोतापासून सुरू होते. इथे तो ई टी पी इनलेट आहे, सहाशे दहा दशांश नऊ वर — प्लांटमध्ये प्रवेश करणारे एकूण पाण्याचे आकारमान. तो बार किती उंच आहे ते पाहा. उजवीकडे वाहताना तुम्ही जे काही पाहता, ते याच एका स्रोतातून बाहेर येते.',
        },
        {
          label: 'विभाजन', title: 'एक स्रोत, अनेक गंतव्ये',
          body: 'स्रोतापासून प्रवाह <strong>विभागतो</strong>. ETP इनलेटचे 610.90 — <strong>ETP आउटलेट (406.50)</strong>, <strong>स्लज रिजेक्शन (108.30)</strong>, आणि <strong>वॉटर लॉस (96.10)</strong> मध्ये विभागतात — आणि ते अचूक स्रोताइतके जुळतात.',
          voice: 'स्रोतापासून प्रवाह वेगळा होतो. इनलेटचे सहाशे दहा दशांश नऊ तीन प्रकारे विभागतात — चारशे सहा दशांश पाच उपचारित ई टी पी आउटलेट म्हणून पुढे जाते, एकशे आठ दशांश तीन स्लज रिजेक्शन म्हणून बाहेर पडते, आणि शहाण्णव दशांश एक वॉटर लॉस. आणि चांगली गोष्ट — हे तिन्ही जोडा, तर ते अचूक सहाशे दहा दशांश नऊ वर परत येतात. काहीही हिशोबाविना नाही.',
          tip: { type: 'rememberLabel', text: 'एका नोडमधून बाहेर जाणारे बँड नेहमी नोडइतके जुळतात — एक झटपट दृश्य जल संतुलन.' },
        },
        {
          label: 'साखळी', title: 'स्तर-दर-स्तर अनुसरण',
          body: 'मुख्य प्रवाह <strong>स्तरांमध्ये</strong> पुढे जातो: ETP आउटलेट → <strong>UF</strong> → <strong>RO फीड (299.20)</strong>, जो स्वतः <strong>RO परमिएट (156.90)</strong> आणि <strong>RO रिजेक्ट (137.80)</strong> मध्ये विभागतो. प्रत्येक टप्पा स्वतःचा कॉलम आहे.',
          voice: 'आता मुख्य प्रवाह उजवीकडे एक-एक स्तर सरकताना अनुसरा. ई टी पी आउटलेट यू एफ टप्प्याला पुरवते, यू एफ आपले पाणी आर ओ फीड म्हणून दोनशे नव्व्याण्णव दशांश दोन वर पुढे पाठवते, आणि आर ओ फीड मग शेवटचे एकदा विभागतो — तुम्ही ठेवता ते स्वच्छ पाणी आर ओ परमिएट, आणि आर ओ रिजेक्ट. प्रत्येक उपचार टप्पा स्वतःचा कॉलम आहे, म्हणून तुम्ही पाण्याचा एक थेंब संपूर्ण प्लांटमध्ये ट्रेस करू शकता.',
        },
        {
          label: 'हे का महत्त्वाचे', title: 'प्रत्येक थेंब कुठे जातो ते पाहा',
          body: 'एका दृष्टीक्षेपात, सॅन्की तुमचे संपूर्ण <strong>जल संतुलन</strong> दाखवते — किती पुनर्प्राप्त, किती गमावले, आणि कुठे. नुकसान ओळखण्याचा आणि प्लांट संपूर्णपणे समजून घेण्याचा सर्वात जलद मार्ग. यामुळे या मॉड्यूलमधील विजेट्स पूर्ण होतात.',
          voice: 'मग सॅन्की इतकी मौल्यवान का? कारण एकाच चित्रात, ती तुमचे संपूर्ण जल संतुलन दाखवते — तुम्ही किती पाणी पुनर्प्राप्त करता, किती गमावता, आणि ते नुकसान नेमके कुठे होते. एखादा नुकसान बँड अचानक जाड झाला, तर तुम्हाला लगेच दिसेल. प्लांट सुरुवातीपासून शेवटपर्यंत समजून घेण्याचा हा सर्वात जलद मार्ग आहे. आणि यामुळे डॅशबोर्ड विजेट्समधील आपली सखोल पडताळणी पूर्ण होते.',
          tip: { type: 'upNextLabel', text: 'आता तुम्ही डॅशबोर्डचा प्रत्येक विजेट प्रकार पाहिला आहे.' },
        },
      ],
    },
  },
};

export default lesson;
