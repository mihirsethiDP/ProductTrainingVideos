import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/analytical-nested`;

/**
 * M14 · Analytical Engine — L4: formula inside formula. (INTERNAL ONLY)
 * The Plant Score walkthrough from the recording: Plant Score = HYDEff Score +
 * Quality Score + Energy per KL Score, where every operand is itself a formula
 * (and those formulas score OTHER formulas — Hydraulic Efficiency, Energy Per
 * KL — with IF/AND). Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'analytical-engine-nested',
  moduleId: 'module-15-analytical-engine',
  lessonNumber: 4,
  estimatedMinutes: 4,
  screenshots: {
    plantScore: `${BASE}/plant-score.jpg`,
    hydeff: `${BASE}/hydeff.jpg`,
    quality: `${BASE}/quality.jpg`,
    energy: `${BASE}/energy.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'plantScore', caption: 'Plant Score = three formulas',
      spotlight: { top: '35%', left: '1.5%', width: '32%', height: '6.5%' },
    },
    {
      mode: 'detail', screenshot: 'hydeff', caption: 'HYDEff Score — IF over a formula',
      spotlight: { top: '35%', left: '1.5%', width: '95%', height: '12%' },
    },
    {
      mode: 'detail', screenshot: 'quality', caption: 'Quality Score — four tags, one number',
      spotlight: { top: '35%', left: '1.5%', width: '96%', height: '12%' },
    },
    {
      mode: 'detail', screenshot: 'energy', caption: 'Energy — and the whole tree',
      spotlight: { top: '35%', left: '1.5%', width: '95%', height: '12%' },
    },
  ],
  content: {
    en: {
      title: 'Formula inside<br><em>formula.</em>',
      subtitle:
        'Because every formula gets a tag, formulas can use other formulas — and that’s how one honest number like Plant Score gets built: small pieces, composed.',
      chapter: 'Analytical Engine · Nesting',
      steps: [
        {
          label: 'The top', title: 'Plant Score = three formulas',
          body: "This is <strong>Plant Score</strong> — the single number that grades a whole plant. Look at its expression: <code>HYDEff Score + Quality Score + Energy per KL Score</code>. <em>Every operand is itself a formula.</em> No raw sensor tag in sight — the engine lets a formula's tag stand anywhere a sensor tag could.",
          voice: "This is Plant Score — the single number that grades a whole plant. Look at its expression: HYDEff Score, plus Quality Score, plus Energy per KL Score. Every operand here is itself a formula. There's no raw sensor tag in sight — because the engine lets a formula's tag stand anywhere a sensor tag could.",
        },
        {
          label: 'Layer two', title: 'HYDEff Score — IF over a formula',
          body: "Open the first piece. <strong>HYDEff Score</strong> = <code>IF(Hydraulic Efficiency &gt; 80, 2, IF(AND(&gt; 70, &lt; 80), 1, 0))</code> — a <strong>HyperFormula IF/AND</strong> grading… <em>another formula</em>: Hydraulic Efficiency, which is itself <code>Outlet / Inlet × 100</code> over sensor tags. Above 80% earns 2 points, 70–80% earns 1, below 70 earns 0. That's three layers: tags → efficiency → score.",
          voice: "Open the first piece. HYDEff Score is an IF: if Hydraulic Efficiency is above eighty, score two. If it's between seventy and eighty — that's the AND — score one. Otherwise zero. And notice what it's grading: another formula. Hydraulic Efficiency is itself Outlet over Inlet times one hundred, built on sensor tags. So that's three layers already: tags, then efficiency, then score.",
        },
        {
          label: 'Quality', title: 'Quality Score — four tags, one number',
          body: "<strong>Quality Score</strong> shows the same trick straight over tags: <code>IF(COD &lt; 50, 1, 0) + IF(BOD &lt; 10, 1, 0) + IF(TSS &lt; 10, 1, 0) + IF(AND(PH &gt; 6.5, PH &lt; 8.5), 1, 0)</code>. Four water-quality parameters, each earning a point when it's in spec — one clean 0-to-4 number out of four sensors.",
          voice: "Quality Score shows the same trick working straight over tags. IF COD is under fifty, one point. IF BOD is under ten, one point. IF TSS is under ten, one point. And IF pH sits between six-and-a-half and eight-and-a-half — the AND again — one more. Four water-quality parameters, each earning a point when it's in spec, folding into one clean zero-to-four number.",
        },
        {
          label: 'The tree', title: 'Energy — and the whole tree',
          body: "<strong>Energy per KL Score</strong> completes the set — an IF grading the <em>Energy Per KL</em> formula. Step back and see the tree: <strong>Plant Score</strong> ← three score formulas ← efficiency/energy formulas ← sensor tags. Each layer has its <em>own</em> tag, frequency and version — build small formulas that are easy to trust, then compose them into the big number.",
          voice: "Energy per KL Score completes the set — one more IF, grading the Energy Per KL formula. Now step back and see the whole tree. Plant Score sits on three score formulas. Those sit on efficiency and energy formulas. And those sit on sensor tags. Each layer has its own tag, its own frequency, its own version. That's the design lesson of the Analytical Engine: build small formulas that are easy to trust, then compose them into the big number.",
          tip: { type: 'upNextLabel', text: 'That’s the Analytical Engine — from one sensor tag to a plant-wide score.' },
        },
      ],
    },
    hi: {
      title: 'फ़ॉर्मूले के अंदर<br><em>फ़ॉर्मूला.</em>',
      subtitle:
        'हर फ़ॉर्मूले को टैग मिलता है, इसलिए फ़ॉर्मूले दूसरे फ़ॉर्मूलों का उपयोग कर सकते हैं — और इसी तरह Plant Score जैसा एक ईमानदार आँकड़ा बनता है: छोटे टुकड़े, जोड़े हुए।',
      chapter: 'Analytical Engine · नेस्टिंग',
      steps: [
        {
          label: 'शीर्ष', title: 'Plant Score = तीन फ़ॉर्मूले',
          body: "यह है <strong>Plant Score</strong> — पूरे प्लांट को ग्रेड करने वाला एक आँकड़ा। इसका एक्सप्रेशन देखें: <code>HYDEff Score + Quality Score + Energy per KL Score</code>। <em>हर operand ख़ुद एक फ़ॉर्मूला है।</em> कहीं कोई कच्चा सेंसर टैग नहीं — इंजन फ़ॉर्मूले के टैग को वहीं खड़ा होने देता है जहाँ सेंसर टैग हो सकता है।",
          voice: "यह है Plant Score — पूरे प्लांट को ग्रेड करने वाला एक अकेला आँकड़ा। इसका एक्सप्रेशन देखिए: HYDEff Score, जमा Quality Score, जमा Energy per KL Score। यहाँ हर operand ख़ुद एक फ़ॉर्मूला है। कहीं कोई कच्चा सेंसर टैग नहीं दिखता — क्योंकि इंजन फ़ॉर्मूले के टैग को हर उस जगह खड़ा होने देता है जहाँ सेंसर टैग हो सकता है।",
        },
        {
          label: 'परत दो', title: 'HYDEff Score — फ़ॉर्मूले पर IF',
          body: "पहला टुकड़ा खोलें। <strong>HYDEff Score</strong> = <code>IF(Hydraulic Efficiency &gt; 80, 2, IF(AND(&gt; 70, &lt; 80), 1, 0))</code> — एक <strong>HyperFormula IF/AND</strong>, जो ग्रेड कर रहा है… <em>एक और फ़ॉर्मूले</em> को: Hydraulic Efficiency, जो ख़ुद सेंसर टैग पर <code>Outlet / Inlet × 100</code> है। 80% से ऊपर = 2 अंक, 70–80% = 1, नीचे = 0। तीन परतें: टैग → एफ़िशिएंसी → स्कोर।",
          voice: "पहला टुकड़ा खोलिए। HYDEff Score एक IF है: अगर Hydraulic Efficiency अस्सी से ऊपर है, स्कोर दो। अगर वह सत्तर और अस्सी के बीच है — यही AND है — स्कोर एक। वरना शून्य। और ध्यान दीजिए यह किसे ग्रेड कर रहा है: एक और फ़ॉर्मूले को। Hydraulic Efficiency ख़ुद Outlet भाग Inlet गुणा सौ है, सेंसर टैग पर बनी। तो यहीं तीन परतें हो गईं: टैग, फिर एफ़िशिएंसी, फिर स्कोर।",
        },
        {
          label: 'Quality', title: 'Quality Score — चार टैग, एक आँकड़ा',
          body: "<strong>Quality Score</strong> वही तरकीब सीधे टैग पर दिखाता है: <code>IF(COD &lt; 50, 1, 0) + IF(BOD &lt; 10, 1, 0) + IF(TSS &lt; 10, 1, 0) + IF(AND(PH &gt; 6.5, PH &lt; 8.5), 1, 0)</code>। पानी की गुणवत्ता के चार पैरामीटर, हर एक स्पेक में होने पर एक अंक — चार सेंसरों से एक साफ़ 0-से-4 आँकड़ा।",
          voice: "Quality Score वही तरकीब सीधे टैग पर चलाकर दिखाता है। अगर COD पचास से नीचे है, एक अंक। अगर BOD दस से नीचे, एक अंक। अगर TSS दस से नीचे, एक अंक। और अगर pH साढ़े छह और साढ़े आठ के बीच बैठा है — फिर वही AND — एक और। पानी की गुणवत्ता के चार पैरामीटर, हर एक स्पेक में होने पर अंक कमाता हुआ, चार सेंसरों से एक साफ़ शून्य-से-चार आँकड़ा।",
        },
        {
          label: 'पेड़', title: 'Energy — और पूरा पेड़',
          body: "<strong>Energy per KL Score</strong> सेट पूरा करता है — <em>Energy Per KL</em> फ़ॉर्मूले को ग्रेड करता IF। पीछे हटकर पेड़ देखें: <strong>Plant Score</strong> ← तीन स्कोर फ़ॉर्मूले ← एफ़िशिएंसी/एनर्जी फ़ॉर्मूले ← सेंसर टैग। हर परत का <em>अपना</em> टैग, frequency और version है — छोटे, भरोसेमंद फ़ॉर्मूले बनाएँ, फिर उन्हें बड़े आँकड़े में जोड़ें।",
          voice: "Energy per KL Score सेट पूरा करता है — एक और IF, जो Energy Per KL फ़ॉर्मूले को ग्रेड करता है। अब पीछे हटकर पूरा पेड़ देखिए। Plant Score तीन स्कोर फ़ॉर्मूलों पर टिका है। वे एफ़िशिएंसी और एनर्जी फ़ॉर्मूलों पर टिके हैं। और वे सेंसर टैग पर। हर परत का अपना टैग, अपनी frequency, अपना version है। यही Analytical Engine का डिज़ाइन-सबक़ है: छोटे फ़ॉर्मूले बनाइए जिन पर भरोसा आसान हो, फिर उन्हें बड़े आँकड़े में जोड़िए।",
          tip: { type: 'upNextLabel', text: 'यही है Analytical Engine — एक सेंसर टैग से पूरे प्लांट के स्कोर तक।' },
        },
      ],
    },
    ta: {
      title: 'சூத்திரத்திற்குள்<br><em>சூத்திரம்.</em>',
      subtitle:
        'ஒவ்வொரு சூத்திரத்திற்கும் டேக் கிடைப்பதால், சூத்திரங்கள் பிற சூத்திரங்களைப் பயன்படுத்தலாம் — Plant Score போன்ற ஒரு நேர்மையான எண் அப்படித்தான் கட்டப்படுகிறது: சிறு துண்டுகள், இணைக்கப்பட்டவை.',
      chapter: 'Analytical Engine · உள்ளடுக்கு',
      steps: [
        {
          label: 'உச்சி', title: 'Plant Score = மூன்று சூத்திரங்கள்',
          body: "இதுவே <strong>Plant Score</strong> — முழு ஆலைக்கும் தரம் வழங்கும் ஒற்றை எண். அதன் கூற்றைப் பாருங்கள்: <code>HYDEff Score + Quality Score + Energy per KL Score</code>. <em>ஒவ்வொரு operand-ும் தானே ஒரு சூத்திரம்.</em> மூல சென்சார் டேக் எங்கும் இல்லை — சென்சார் டேக் நிற்கக்கூடிய எந்த இடத்திலும் சூத்திரத்தின் டேக்கை நிற்க இயந்திரம் அனுமதிக்கிறது.",
          voice: "இதுவே Plant Score — முழு ஆலைக்கும் தரம் வழங்கும் ஒற்றை எண். அதன் கூற்றைப் பாருங்கள்: HYDEff Score, கூட்டல் Quality Score, கூட்டல் Energy per KL Score. இங்கே ஒவ்வொரு operand-ும் தானே ஒரு சூத்திரம். மூல சென்சார் டேக் எங்குமே தெரியவில்லை — ஏனெனில் சென்சார் டேக் நிற்கக்கூடிய எந்த இடத்திலும் சூத்திரத்தின் டேக்கை இயந்திரம் நிற்க அனுமதிக்கிறது.",
        },
        {
          label: 'அடுக்கு இரண்டு', title: 'HYDEff Score — சூத்திரத்தின் மீது IF',
          body: "முதல் துண்டைத் திறங்கள். <strong>HYDEff Score</strong> = <code>IF(Hydraulic Efficiency &gt; 80, 2, IF(AND(&gt; 70, &lt; 80), 1, 0))</code> — ஒரு <strong>HyperFormula IF/AND</strong>, தரம் வழங்குவது… <em>இன்னொரு சூத்திரத்திற்கு</em>: Hydraulic Efficiency, அதுவே சென்சார் டேக்குகள் மீது <code>Outlet / Inlet × 100</code>. 80%-க்கு மேல் = 2 புள்ளி, 70–80% = 1, கீழே = 0. மூன்று அடுக்குகள்: டேக்குகள் → திறன் → மதிப்பெண்.",
          voice: "முதல் துண்டைத் திறங்கள். HYDEff Score ஒரு IF: Hydraulic Efficiency எண்பதுக்கு மேல் இருந்தால், மதிப்பெண் இரண்டு. எழுபதுக்கும் எண்பதுக்கும் இடையில் இருந்தால் — அதுதான் AND — மதிப்பெண் ஒன்று. இல்லையேல் பூஜ்ஜியம். அது எதற்குத் தரம் வழங்குகிறது என்று கவனியுங்கள்: இன்னொரு சூத்திரத்திற்கு. Hydraulic Efficiency தானே Outlet வகுத்தல் Inlet பெருக்கல் நூறு, சென்சார் டேக்குகளில் கட்டப்பட்டது. எனவே இப்போதே மூன்று அடுக்குகள்: டேக்குகள், பின் திறன், பின் மதிப்பெண்.",
        },
        {
          label: 'Quality', title: 'Quality Score — நான்கு டேக், ஒரு எண்',
          body: "<strong>Quality Score</strong> அதே உத்தியை நேரடியாக டேக்குகள் மீது காட்டுகிறது: <code>IF(COD &lt; 50, 1, 0) + IF(BOD &lt; 10, 1, 0) + IF(TSS &lt; 10, 1, 0) + IF(AND(PH &gt; 6.5, PH &lt; 8.5), 1, 0)</code>. நான்கு நீர்த்தர அளவுருக்கள், ஒவ்வொன்றும் வரம்பில் இருந்தால் ஒரு புள்ளி — நான்கு சென்சார்களிலிருந்து ஒரு சுத்தமான 0-முதல்-4 எண்.",
          voice: "Quality Score அதே உத்தியை நேரடியாக டேக்குகள் மீது இயக்கிக் காட்டுகிறது. COD ஐம்பதுக்குக் கீழ் என்றால், ஒரு புள்ளி. BOD பத்துக்குக் கீழ், ஒரு புள்ளி. TSS பத்துக்குக் கீழ், ஒரு புள்ளி. pH ஆறரைக்கும் எட்டரைக்கும் இடையில் அமர்ந்தால் — மீண்டும் அதே AND — இன்னொன்று. நான்கு நீர்த்தர அளவுருக்கள், ஒவ்வொன்றும் வரம்பில் இருக்கும்போது புள்ளி ஈட்டி, நான்கு சென்சார்களிலிருந்து ஒரு சுத்தமான பூஜ்ஜியம்-முதல்-நான்கு எண்ணாக மடிகின்றன.",
        },
        {
          label: 'மரம்', title: 'Energy — மற்றும் முழு மரம்',
          body: "<strong>Energy per KL Score</strong> தொகுப்பை நிறைவு செய்கிறது — <em>Energy Per KL</em> சூத்திரத்திற்குத் தரம் வழங்கும் IF. பின்வாங்கி மரத்தைப் பாருங்கள்: <strong>Plant Score</strong> ← மூன்று மதிப்பெண் சூத்திரங்கள் ← திறன்/எரிசக்தி சூத்திரங்கள் ← சென்சார் டேக்குகள். ஒவ்வொரு அடுக்கிற்கும் <em>தன்</em> டேக், frequency, version — நம்ப எளிய சிறு சூத்திரங்களைக் கட்டி, பெரிய எண்ணாக இணைக்கவும்.",
          voice: "Energy per KL Score தொகுப்பை நிறைவு செய்கிறது — இன்னொரு IF, Energy Per KL சூத்திரத்திற்குத் தரம் வழங்குகிறது. இப்போது பின்வாங்கி முழு மரத்தையும் பாருங்கள். Plant Score மூன்று மதிப்பெண் சூத்திரங்களின் மேல் அமர்ந்திருக்கிறது. அவை திறன், எரிசக்தி சூத்திரங்களின் மேல். அவை சென்சார் டேக்குகளின் மேல். ஒவ்வொரு அடுக்கிற்கும் தன் சொந்த டேக், சொந்த frequency, சொந்த version. இதுவே Analytical Engine-இன் வடிவமைப்புப் பாடம்: நம்புவதற்கு எளிதான சிறு சூத்திரங்களைக் கட்டுங்கள், பின் அவற்றைப் பெரிய எண்ணாக இணையுங்கள்.",
          tip: { type: 'upNextLabel', text: 'இதுவே Analytical Engine — ஒரு சென்சார் டேக்கிலிருந்து ஆலை முழுமைக்குமான மதிப்பெண் வரை.' },
        },
      ],
    },
    mr: {
      title: 'फॉर्म्युल्याच्या आत<br><em>फॉर्म्युला.</em>',
      subtitle:
        'प्रत्येक फॉर्म्युल्याला टॅग मिळतो, म्हणून फॉर्म्युले इतर फॉर्म्युले वापरू शकतात — आणि Plant Score सारखा एक प्रामाणिक आकडा असाच बनतो: छोटे तुकडे, जोडलेले.',
      chapter: 'Analytical Engine · नेस्टिंग',
      steps: [
        {
          label: 'शिखर', title: 'Plant Score = तीन फॉर्म्युले',
          body: "हा आहे <strong>Plant Score</strong> — संपूर्ण प्लांटला ग्रेड देणारा एक आकडा. त्याचे एक्स्प्रेशन पाहा: <code>HYDEff Score + Quality Score + Energy per KL Score</code>. <em>प्रत्येक operand स्वतःच एक फॉर्म्युला आहे.</em> कुठेही कच्चा सेन्सर टॅग नाही — सेन्सर टॅग उभा राहू शकेल तिथे इंजिन फॉर्म्युल्याच्या टॅगलाही उभे राहू देते.",
          voice: "हा आहे Plant Score — संपूर्ण प्लांटला ग्रेड देणारा एकच आकडा. त्याचे एक्स्प्रेशन पाहा: HYDEff Score, अधिक Quality Score, अधिक Energy per KL Score. इथे प्रत्येक operand स्वतःच एक फॉर्म्युला आहे. कुठेही कच्चा सेन्सर टॅग दिसत नाही — कारण सेन्सर टॅग उभा राहू शकेल अशा प्रत्येक जागी इंजिन फॉर्म्युल्याच्या टॅगला उभे राहू देते.",
        },
        {
          label: 'थर दोन', title: 'HYDEff Score — फॉर्म्युल्यावर IF',
          body: "पहिला तुकडा उघडा. <strong>HYDEff Score</strong> = <code>IF(Hydraulic Efficiency &gt; 80, 2, IF(AND(&gt; 70, &lt; 80), 1, 0))</code> — एक <strong>HyperFormula IF/AND</strong>, जो ग्रेड देतो… <em>दुसऱ्या फॉर्म्युल्याला</em>: Hydraulic Efficiency, जो स्वतः सेन्सर टॅगवर <code>Outlet / Inlet × 100</code> आहे. 80% वर = 2 गुण, 70–80% = 1, खाली = 0. तीन थर: टॅग → कार्यक्षमता → स्कोअर.",
          voice: "पहिला तुकडा उघडा. HYDEff Score एक IF आहे: Hydraulic Efficiency ऐंशीच्या वर असेल, तर स्कोअर दोन. ती सत्तर आणि ऐंशीच्या मध्ये असेल — तोच AND — तर स्कोअर एक. नाहीतर शून्य. आणि तो कशाला ग्रेड देतोय ते पाहा: दुसऱ्या फॉर्म्युल्याला. Hydraulic Efficiency स्वतः Outlet भागिले Inlet गुणिले शंभर आहे, सेन्सर टॅगवर बांधलेली. म्हणजे इथेच तीन थर झाले: टॅग, मग कार्यक्षमता, मग स्कोअर.",
        },
        {
          label: 'Quality', title: 'Quality Score — चार टॅग, एक आकडा',
          body: "<strong>Quality Score</strong> तीच युक्ती थेट टॅगवर दाखवतो: <code>IF(COD &lt; 50, 1, 0) + IF(BOD &lt; 10, 1, 0) + IF(TSS &lt; 10, 1, 0) + IF(AND(PH &gt; 6.5, PH &lt; 8.5), 1, 0)</code>. पाण्याच्या गुणवत्तेचे चार पॅरामीटर, प्रत्येक स्पेकमध्ये असल्यास एक गुण — चार सेन्सरमधून एक स्वच्छ 0-ते-4 आकडा.",
          voice: "Quality Score तीच युक्ती थेट टॅगवर चालवून दाखवतो. COD पन्नासच्या खाली असेल, तर एक गुण. BOD दहाच्या खाली, एक गुण. TSS दहाच्या खाली, एक गुण. आणि pH साडेसहा आणि साडेआठच्या मध्ये बसला असेल — पुन्हा तोच AND — तर आणखी एक. पाण्याच्या गुणवत्तेचे चार पॅरामीटर, प्रत्येक स्पेकमध्ये असताना गुण कमावणारे, चार सेन्सरमधून एका स्वच्छ शून्य-ते-चार आकड्यात मिटतात.",
        },
        {
          label: 'झाड', title: 'Energy — आणि संपूर्ण झाड',
          body: "<strong>Energy per KL Score</strong> संच पूर्ण करतो — <em>Energy Per KL</em> फॉर्म्युल्याला ग्रेड देणारा IF. मागे सरकून झाड पाहा: <strong>Plant Score</strong> ← तीन स्कोअर फॉर्म्युले ← कार्यक्षमता/ऊर्जा फॉर्म्युले ← सेन्सर टॅग. प्रत्येक थराचा <em>स्वतःचा</em> टॅग, frequency आणि version — विश्वास ठेवण्यास सोपे छोटे फॉर्म्युले बांधा, मग त्यांना मोठ्या आकड्यात जोडा.",
          voice: "Energy per KL Score संच पूर्ण करतो — आणखी एक IF, Energy Per KL फॉर्म्युल्याला ग्रेड देणारा. आता मागे सरकून संपूर्ण झाड पाहा. Plant Score तीन स्कोअर फॉर्म्युल्यांवर बसला आहे. ते कार्यक्षमता आणि ऊर्जा फॉर्म्युल्यांवर. आणि ते सेन्सर टॅगवर. प्रत्येक थराचा स्वतःचा टॅग, स्वतःची frequency, स्वतःचे version आहे. हाच Analytical Engine चा डिझाइन-धडा: विश्वास ठेवण्यास सोपे छोटे फॉर्म्युले बांधा, मग त्यांना मोठ्या आकड्यात जोडा.",
          tip: { type: 'upNextLabel', text: 'हेच Analytical Engine — एका सेन्सर टॅगपासून संपूर्ण प्लांटच्या स्कोअरपर्यंत.' },
        },
      ],
    },
  },
};

export default lesson;
