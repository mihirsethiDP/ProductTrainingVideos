import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/analytical-settings`;

/**
 * M14 · Analytical Engine — L3: Sensor Settings. (INTERNAL ONLY)
 * The per-tag settings modal from the recording: Aggregator (Current / Raw /
 * Last Active Value / First Active Value / Time), First & Last Reference Time
 * (the T … T−N window), Data Completeness (the confidence threshold), and
 * Return. Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'analytical-engine-settings',
  moduleId: 'module-15-analytical-engine',
  lessonNumber: 3,
  estimatedMinutes: 5,
  screenshots: {
    settings: `${BASE}/settings.jpg`,
    aggregator: `${BASE}/aggregator.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'settings', caption: 'Every tag chip has settings',
      spotlight: { top: '16%', left: '40%', width: '20%', height: '68%' },
    },
    {
      mode: 'detail', screenshot: 'aggregator', caption: 'Aggregator — how to read the tag',
      spotlight: { top: '50%', left: '41.5%', width: '17%', height: '21%' },
    },
    {
      mode: 'detail', screenshot: 'settings', caption: 'First & Last Reference Time',
      spotlight: { top: '51%', left: '41.5%', width: '17%', height: '16%' },
    },
    {
      mode: 'detail', screenshot: 'settings', caption: 'Data Completeness',
      spotlight: { top: '32%', left: '41.5%', width: '17%', height: '10%' },
    },
    {
      mode: 'detail', screenshot: 'settings', caption: 'Return, then Submit',
      spotlight: { top: '68%', left: '41.5%', width: '17%', height: '14%' },
    },
  ],
  content: {
    en: {
      title: 'Sensor<br><em>Settings.</em>',
      subtitle:
        'A tag in a formula isn’t just a number — it’s a question: which values, from which window, read how, and with how much data required? Sensor Settings is where you answer it, per tag.',
      chapter: 'Analytical Engine · Sensor Settings',
      steps: [
        {
          label: 'The modal', title: 'Every tag chip has settings',
          body: "Click any <strong>tag chip</strong> in a formula and <strong>Sensor Settings</strong> opens for that tag. Four decisions live here: the <strong>Aggregator</strong> (how to read the tag's data), the <strong>Reference Times</strong> (which time window), <strong>Data Completeness</strong> (how much data must exist), and <strong>Return</strong> (what comes back). Each tag in a formula carries its own settings.",
          voice: "Click any tag chip inside a formula, and Sensor Settings opens for that specific tag. Four decisions live in this modal. The Aggregator — how to read the tag's data. The Reference Times — which time window to read. Data Completeness — how much data must actually exist. And Return — what the tag hands back to the formula. Every tag in a formula carries its own settings, so two tags in the same formula can be read completely differently.",
        },
        {
          label: 'Aggregator', title: 'How to read the tag',
          body: "The <strong>Aggregator</strong> decides what 'the tag's value' means: <strong>Current</strong> — the value right now. <strong>Raw</strong> — the <em>array</em> of readings in the window (feed it to AVERAGE, MIN, MAX…). <strong>Last Active Value</strong> / <strong>First Active Value</strong> — the newest or oldest reading in the window. <strong>Time</strong> — the reading's timestamp instead of its value.",
          voice: "The Aggregator decides what the tag's value actually means. Current gives you the value right now. Raw gives you the entire array of readings in the window — that's what you feed into functions like AVERAGE, MIN or MAX. Last Active Value and First Active Value give you the newest or the oldest reading in the window. And Time gives you the reading's timestamp instead of its value.",
          tip: { type: 'tipLabel', text: 'Raw + AVERAGE is the classic pair: average of the last hour of readings, Excel-style.' },
        },
        {
          label: 'The window', title: 'First & Last Reference Time',
          body: "The <strong>Reference Times</strong>, in minutes, set the window the aggregator reads. <strong>First Reference Time</strong> is your starting point <em>T</em>; <strong>Last Reference Time</strong> is how far back the window stretches. First <code>0</code>, Last <code>60</code> → the window is <em>the past hour</em> (T back to T−60). The example on screen — 0 and 1 — reads just the last minute.",
          voice: "The Reference Times, in minutes, set the window the aggregator reads. First Reference Time is your starting point — T. Last Reference Time is how far back the window stretches. Set First to zero and Last to sixty, and your window is the past hour — from T back to T minus sixty. The example on screen, zero and one, reads just the last minute.",
        },
        {
          label: 'Completeness', title: 'Data Completeness — the confidence bar',
          body: "Sensors drop readings — networks blip. <strong>Data Completeness</strong> (you may know it as the <em>confidence score</em>) sets how much of the window's expected data must exist for the calculation to run. At <strong>70%</strong> with a 60-minute window, the formula computes if at least 70% of the expected readings arrived; below that, it refuses rather than report a misleading number. Set <strong>50%</strong> and half the data is enough.",
          voice: "Sensors drop readings — networks blip. Data Completeness — you may know it as the confidence score — sets how much of the window's expected data must actually exist for the calculation to run. At seventy percent with a sixty-minute window, the formula computes as long as at least seventy percent of the expected readings arrived. Below that, it refuses — better no number than a misleading one. Set it to fifty percent, and half the data is enough.",
          tip: { type: 'noteLabel', text: 'The slider runs 10%–100%. Stricter = more trustworthy, but more likely to skip a beat on flaky links.' },
        },
        {
          label: 'Return', title: 'Return, then Submit',
          body: "<strong>Return</strong> chooses what the tag hands back — <strong>Value(s)</strong> for the reading(s) themselves. <strong>Submit</strong>, and the chip carries these settings inside the formula from now on. That's the full picture: tags, read exactly how you specify, feeding math that runs on a schedule.",
          voice: "Return chooses what the tag hands back to the formula — Values, for the readings themselves. Hit Submit, and from now on that chip carries these settings inside the formula. And that's the full picture: sensor tags, read exactly the way you specify, feeding math that runs on a schedule.",
          tip: { type: 'upNextLabel', text: 'Finale: Plant Score — a formula built entirely out of other formulas.' },
        },
      ],
    },
    hi: {
      title: 'Sensor<br><em>Settings.</em>',
      subtitle:
        'फ़ॉर्मूले में टैग सिर्फ़ एक संख्या नहीं — एक सवाल है: कौन-से मान, किस विंडो से, कैसे पढ़े जाएँ, और कितने डेटा की शर्त पर? Sensor Settings में आप हर टैग के लिए यही तय करते हैं।',
      chapter: 'Analytical Engine · Sensor Settings',
      steps: [
        {
          label: 'मोडल', title: 'हर टैग चिप की अपनी सेटिंग्स',
          body: "फ़ॉर्मूले में किसी भी <strong>टैग चिप</strong> पर क्लिक करें और उस टैग के लिए <strong>Sensor Settings</strong> खुलता है। यहाँ चार निर्णय रहते हैं: <strong>Aggregator</strong> (टैग का डेटा कैसे पढ़ें), <strong>Reference Times</strong> (कौन-सी समय-विंडो), <strong>Data Completeness</strong> (कितना डेटा होना ज़रूरी), और <strong>Return</strong> (वापिस क्या मिले)। फ़ॉर्मूले का हर टैग अपनी सेटिंग्स रखता है।",
          voice: "फ़ॉर्मूले के अंदर किसी भी टैग चिप पर क्लिक करें, और उसी टैग के लिए Sensor Settings खुल जाता है। इस मोडल में चार निर्णय रहते हैं। Aggregator — टैग का डेटा कैसे पढ़ा जाए। Reference Times — कौन-सी समय-विंडो पढ़ी जाए। Data Completeness — असल में कितना डेटा मौजूद होना चाहिए। और Return — टैग फ़ॉर्मूले को क्या लौटाए। फ़ॉर्मूले का हर टैग अपनी सेटिंग्स रखता है, इसलिए एक ही फ़ॉर्मूले के दो टैग बिल्कुल अलग तरह पढ़े जा सकते हैं।",
        },
        {
          label: 'Aggregator', title: 'टैग कैसे पढ़ें',
          body: "<strong>Aggregator</strong> तय करता है 'टैग का मान' का मतलब: <strong>Current</strong> — अभी का मान। <strong>Raw</strong> — विंडो की रीडिंग का <em>array</em> (इसे AVERAGE, MIN, MAX… को दें)। <strong>Last Active Value</strong> / <strong>First Active Value</strong> — विंडो की सबसे नई या सबसे पुरानी रीडिंग। <strong>Time</strong> — मान की जगह रीडिंग का timestamp।",
          voice: "Aggregator तय करता है कि टैग के मान का असल मतलब क्या है। Current आपको अभी का मान देता है। Raw विंडो की सारी रीडिंग का array देता है — यही आप AVERAGE, MIN या MAX जैसे फ़ंक्शनों को खिलाते हैं। Last Active Value और First Active Value विंडो की सबसे नई या सबसे पुरानी रीडिंग देते हैं। और Time मान की जगह रीडिंग का timestamp देता है।",
          tip: { type: 'tipLabel', text: 'Raw + AVERAGE क्लासिक जोड़ी है: पिछले घंटे की रीडिंग का औसत, Excel-शैली में।' },
        },
        {
          label: 'विंडो', title: 'First और Last Reference Time',
          body: "<strong>Reference Times</strong>, मिनटों में, वह विंडो तय करते हैं जिसे aggregator पढ़ता है। <strong>First Reference Time</strong> आपका आरंभ-बिंदु <em>T</em> है; <strong>Last Reference Time</strong> बताता है विंडो कितनी पीछे तक जाए। First <code>0</code>, Last <code>60</code> → विंडो <em>पिछला घंटा</em> (T से T−60 तक)। स्क्रीन का उदाहरण — 0 और 1 — सिर्फ़ आख़िरी मिनट पढ़ता है।",
          voice: "Reference Times, मिनटों में, वह विंडो तय करते हैं जिसे aggregator पढ़ता है। First Reference Time आपका आरंभ-बिंदु है — T। Last Reference Time बताता है कि विंडो कितनी पीछे तक फैले। First को शून्य और Last को साठ करें, और आपकी विंडो पिछला घंटा है — T से T माइनस साठ तक। स्क्रीन का उदाहरण, शून्य और एक, सिर्फ़ आख़िरी मिनट पढ़ता है।",
        },
        {
          label: 'Completeness', title: 'Data Completeness — भरोसे की शर्त',
          body: "सेंसर रीडिंग छोड़ते हैं — नेटवर्क लड़खड़ाते हैं। <strong>Data Completeness</strong> (आप इसे <em>confidence score</em> के नाम से जानते होंगे) तय करता है कि गणना चलने के लिए विंडो का कितना अपेक्षित डेटा मौजूद हो। 60-मिनट विंडो पर <strong>70%</strong> — कम से कम 70% अपेक्षित रीडिंग आई हों तो फ़ॉर्मूला चलेगा; उससे कम पर वह भ्रामक आँकड़ा देने की बजाय मना कर देता है। <strong>50%</strong> रखें तो आधा डेटा काफ़ी है।",
          voice: "सेंसर रीडिंग छोड़ देते हैं — नेटवर्क लड़खड़ाते हैं। Data Completeness — जिसे आप शायद confidence score के नाम से जानते हों — तय करता है कि गणना चलने के लिए विंडो का कितना अपेक्षित डेटा असल में मौजूद होना चाहिए। साठ-मिनट की विंडो पर सत्तर प्रतिशत का मतलब: जब तक कम से कम सत्तर प्रतिशत अपेक्षित रीडिंग आई हैं, फ़ॉर्मूला चलेगा। उससे नीचे वह मना कर देता है — भ्रामक आँकड़े से बेहतर है कोई आँकड़ा नहीं। पचास प्रतिशत रखें, तो आधा डेटा काफ़ी है।",
          tip: { type: 'noteLabel', text: 'स्लाइडर 10%–100% चलता है। सख़्त = ज़्यादा भरोसेमंद, पर कमज़ोर नेटवर्क पर गणना छूटने की संभावना ज़्यादा।' },
        },
        {
          label: 'Return', title: 'Return, फिर Submit',
          body: "<strong>Return</strong> चुनता है टैग क्या लौटाए — रीडिंग स्वयं के लिए <strong>Value(s)</strong>। <strong>Submit</strong> करें, और अब से वह चिप फ़ॉर्मूले के अंदर यही सेटिंग्स लेकर चलती है। यही पूरी तस्वीर है: टैग, ठीक आपकी बताई विधि से पढ़े हुए, शेड्यूल पर चलते गणित को खिलाते हुए।",
          voice: "Return चुनता है कि टैग फ़ॉर्मूले को क्या लौटाए — Values, यानी रीडिंग स्वयं। Submit दबाएँ, और अब से वह चिप फ़ॉर्मूले के अंदर यही सेटिंग्स लेकर चलती है। और यही पूरी तस्वीर है: सेंसर टैग, ठीक आपके बताए तरीक़े से पढ़े हुए, ऐसे गणित को खिलाते हुए जो शेड्यूल पर चलता है।",
          tip: { type: 'upNextLabel', text: 'समापन: Plant Score — पूरी तरह दूसरे फ़ॉर्मूलों से बना फ़ॉर्मूला।' },
        },
      ],
    },
    ta: {
      title: 'Sensor<br><em>Settings.</em>',
      subtitle:
        'சூத்திரத்தில் ஒரு டேக் வெறும் எண் அல்ல — ஒரு கேள்வி: எந்த மதிப்புகள், எந்தச் சாளரத்திலிருந்து, எப்படி வாசிக்கப்பட்டு, எவ்வளவு தரவு தேவை? ஒவ்வொரு டேக்கிற்கும் அதை Sensor Settings-இல் தீர்மானிக்கிறீர்கள்.',
      chapter: 'Analytical Engine · Sensor Settings',
      steps: [
        {
          label: 'மோடல்', title: 'ஒவ்வொரு டேக் சிப்புக்கும் அமைப்புகள்',
          body: "சூத்திரத்தில் எந்த <strong>டேக் சிப்பையும்</strong> கிளிக் செய்தால் அந்த டேக்கிற்கான <strong>Sensor Settings</strong> திறக்கிறது. இங்கே நான்கு முடிவுகள்: <strong>Aggregator</strong> (டேக்கின் தரவை எப்படி வாசிப்பது), <strong>Reference Times</strong> (எந்த நேரச் சாளரம்), <strong>Data Completeness</strong> (எவ்வளவு தரவு இருக்க வேண்டும்), <strong>Return</strong> (என்ன திரும்பும்). சூத்திரத்தின் ஒவ்வொரு டேக்கும் தன் சொந்த அமைப்புகளுடன்.",
          voice: "சூத்திரத்திற்குள் எந்த டேக் சிப்பையும் கிளிக் செய்யுங்கள், அந்தக் குறிப்பிட்ட டேக்கிற்கான Sensor Settings திறக்கிறது. இந்த மோடலில் நான்கு முடிவுகள். Aggregator — டேக்கின் தரவை எப்படி வாசிப்பது. Reference Times — எந்த நேரச் சாளரத்தை வாசிப்பது. Data Completeness — உண்மையில் எவ்வளவு தரவு இருக்க வேண்டும். மற்றும் Return — டேக் சூத்திரத்திற்கு என்ன திருப்பித் தருகிறது. சூத்திரத்தின் ஒவ்வொரு டேக்கும் தன் சொந்த அமைப்புகளைச் சுமக்கிறது, எனவே ஒரே சூத்திரத்தின் இரண்டு டேக்குகள் முற்றிலும் வேறுவிதமாக வாசிக்கப்படலாம்.",
        },
        {
          label: 'Aggregator', title: 'டேக்கை எப்படி வாசிப்பது',
          body: "<strong>Aggregator</strong> 'டேக்கின் மதிப்பு' என்பதன் பொருளைத் தீர்மானிக்கிறது: <strong>Current</strong> — இப்போதைய மதிப்பு. <strong>Raw</strong> — சாளரத்தின் அளவீடுகளின் <em>array</em> (AVERAGE, MIN, MAX…-க்கு ஊட்டுங்கள்). <strong>Last Active Value</strong> / <strong>First Active Value</strong> — சாளரத்தின் புதிய அல்லது பழைய அளவீடு. <strong>Time</strong> — மதிப்புக்குப் பதில் அளவீட்டின் timestamp.",
          voice: "Aggregator டேக்கின் மதிப்பு என்றால் என்ன என்பதைத் தீர்மானிக்கிறது. Current இப்போதைய மதிப்பைத் தருகிறது. Raw சாளரத்தின் அனைத்து அளவீடுகளின் array-ஐத் தருகிறது — அதைத்தான் AVERAGE, MIN அல்லது MAX போன்ற செயல்பாடுகளுக்கு ஊட்டுகிறீர்கள். Last Active Value மற்றும் First Active Value சாளரத்தின் மிகப் புதிய அல்லது மிகப் பழைய அளவீட்டைத் தருகின்றன. Time மதிப்புக்குப் பதில் அளவீட்டின் timestamp-ஐத் தருகிறது.",
          tip: { type: 'tipLabel', text: 'Raw + AVERAGE கிளாசிக் ஜோடி: கடந்த மணிநேர அளவீடுகளின் சராசரி, Excel-பாணியில்.' },
        },
        {
          label: 'சாளரம்', title: 'First & Last Reference Time',
          body: "<strong>Reference Times</strong>, நிமிடங்களில், aggregator வாசிக்கும் சாளரத்தை அமைக்கின்றன. <strong>First Reference Time</strong> உங்கள் தொடக்கப் புள்ளி <em>T</em>; <strong>Last Reference Time</strong> சாளரம் எவ்வளவு பின்னால் நீளும் என்பது. First <code>0</code>, Last <code>60</code> → சாளரம் <em>கடந்த மணிநேரம்</em> (T முதல் T−60 வரை). திரையின் உதாரணம் — 0-ம் 1-ம் — கடைசி நிமிடத்தை மட்டும் வாசிக்கிறது.",
          voice: "Reference Times, நிமிடங்களில், aggregator வாசிக்கும் சாளரத்தை அமைக்கின்றன. First Reference Time உங்கள் தொடக்கப் புள்ளி — T. Last Reference Time சாளரம் எவ்வளவு பின்னால் நீளும் என்பதைச் சொல்கிறது. First-ஐ பூஜ்ஜியமாகவும் Last-ஐ அறுபதாகவும் வையுங்கள், உங்கள் சாளரம் கடந்த மணிநேரம் — T-யிலிருந்து T கழித்தல் அறுபது வரை. திரையில் உள்ள உதாரணம், பூஜ்ஜியமும் ஒன்றும், கடைசி நிமிடத்தை மட்டும் வாசிக்கிறது.",
        },
        {
          label: 'Completeness', title: 'Data Completeness — நம்பிக்கை வரம்பு',
          body: "சென்சார்கள் அளவீடுகளைத் தவறவிடும் — நெட்வொர்க் தடுமாறும். <strong>Data Completeness</strong> (<em>confidence score</em> என்று அறிந்திருக்கலாம்) கணக்கீடு ஓட, சாளரத்தின் எதிர்பார்க்கப்படும் தரவில் எவ்வளவு இருக்க வேண்டும் என்பதை அமைக்கிறது. 60-நிமிட சாளரத்தில் <strong>70%</strong> — எதிர்பார்த்த அளவீடுகளில் குறைந்தது 70% வந்திருந்தால் சூத்திரம் கணக்கிடும்; அதற்குக் கீழே, தவறான எண்ணைச் சொல்வதற்குப் பதில் மறுக்கும். <strong>50%</strong> வைத்தால் பாதி தரவே போதும்.",
          voice: "சென்சார்கள் அளவீடுகளைத் தவறவிடுகின்றன — நெட்வொர்க்குகள் தடுமாறுகின்றன. Data Completeness — நீங்கள் confidence score என்ற பெயரில் அறிந்திருக்கலாம் — கணக்கீடு ஓடுவதற்கு சாளரத்தின் எதிர்பார்க்கப்படும் தரவில் எவ்வளவு உண்மையில் இருக்க வேண்டும் என்பதை அமைக்கிறது. அறுபது-நிமிட சாளரத்தில் எழுபது சதவீதம் என்றால்: எதிர்பார்த்த அளவீடுகளில் குறைந்தது எழுபது சதவீதம் வந்திருக்கும் வரை சூத்திரம் கணக்கிடும். அதற்குக் கீழே அது மறுக்கிறது — தவறாக வழிநடத்தும் எண்ணை விட எண்ணே இல்லாதது மேல். ஐம்பது சதவீதம் வைத்தால், பாதி தரவே போதும்.",
          tip: { type: 'noteLabel', text: 'ஸ்லைடர் 10%–100% வரை. கண்டிப்பானது = அதிக நம்பகம், ஆனால் பலவீன இணைப்புகளில் கணக்கீடு தவறும் வாய்ப்பும் அதிகம்.' },
        },
        {
          label: 'Return', title: 'Return, பின் Submit',
          body: "<strong>Return</strong> டேக் என்ன திருப்பித் தரும் எனத் தேர்கிறது — அளவீடுகளுக்கே <strong>Value(s)</strong>. <strong>Submit</strong> செய்தால், இனி அந்தச் சிப் சூத்திரத்திற்குள் இந்த அமைப்புகளைச் சுமக்கிறது. இதுவே முழு சித்திரம்: நீங்கள் குறிப்பிட்டபடி வாசிக்கப்படும் டேக்குகள், அட்டவணைப்படி ஓடும் கணிதத்திற்கு ஊட்டம்.",
          voice: "Return டேக் சூத்திரத்திற்கு என்ன திருப்பித் தரும் எனத் தேர்கிறது — Values, அதாவது அளவீடுகளே. Submit அழுத்துங்கள், இனி அந்தச் சிப் சூத்திரத்திற்குள் இந்த அமைப்புகளைச் சுமக்கிறது. இதுவே முழு சித்திரம்: சரியாக நீங்கள் குறிப்பிடும் விதத்தில் வாசிக்கப்படும் சென்சார் டேக்குகள், அட்டவணையில் ஓடும் கணிதத்திற்கு ஊட்டமளிக்கின்றன.",
          tip: { type: 'upNextLabel', text: 'இறுதி: Plant Score — முழுவதும் பிற சூத்திரங்களால் கட்டப்பட்ட சூத்திரம்.' },
        },
      ],
    },
    mr: {
      title: 'Sensor<br><em>Settings.</em>',
      subtitle:
        'फॉर्म्युल्यातला टॅग फक्त आकडा नाही — एक प्रश्न आहे: कोणती मूल्ये, कोणत्या विंडोतून, कशी वाचायची, आणि किती डेटाच्या अटीवर? Sensor Settings मध्ये तुम्ही प्रत्येक टॅगसाठी हेच ठरवता.',
      chapter: 'Analytical Engine · Sensor Settings',
      steps: [
        {
          label: 'मोडल', title: 'प्रत्येक टॅग चिपची स्वतःची सेटिंग्ज',
          body: "फॉर्म्युल्यातील कोणत्याही <strong>टॅग चिपवर</strong> क्लिक करा आणि त्या टॅगसाठी <strong>Sensor Settings</strong> उघडते. इथे चार निर्णय: <strong>Aggregator</strong> (टॅगचा डेटा कसा वाचायचा), <strong>Reference Times</strong> (कोणती वेळ-विंडो), <strong>Data Completeness</strong> (किती डेटा असायला हवा), आणि <strong>Return</strong> (परत काय मिळेल). फॉर्म्युल्यातील प्रत्येक टॅग स्वतःच्या सेटिंग्ज बाळगतो.",
          voice: "फॉर्म्युल्याच्या आत कोणत्याही टॅग चिपवर क्लिक करा, आणि त्या विशिष्ट टॅगसाठी Sensor Settings उघडते. या मोडलमध्ये चार निर्णय राहतात. Aggregator — टॅगचा डेटा कसा वाचायचा. Reference Times — कोणती वेळ-विंडो वाचायची. Data Completeness — प्रत्यक्षात किती डेटा असायला हवा. आणि Return — टॅग फॉर्म्युल्याला काय परत देतो. फॉर्म्युल्यातील प्रत्येक टॅग स्वतःच्या सेटिंग्ज बाळगतो, म्हणून एकाच फॉर्म्युल्यातील दोन टॅग पूर्णपणे वेगळ्या पद्धतीने वाचले जाऊ शकतात.",
        },
        {
          label: 'Aggregator', title: 'टॅग कसा वाचायचा',
          body: "<strong>Aggregator</strong> ठरवतो 'टॅगचे मूल्य' म्हणजे काय: <strong>Current</strong> — आत्ताचे मूल्य. <strong>Raw</strong> — विंडोतील रीडिंगचा <em>array</em> (AVERAGE, MIN, MAX… ला द्या). <strong>Last Active Value</strong> / <strong>First Active Value</strong> — विंडोतील सर्वात नवी किंवा जुनी रीडिंग. <strong>Time</strong> — मूल्याऐवजी रीडिंगचा timestamp.",
          voice: "Aggregator ठरवतो की टॅगच्या मूल्याचा खरा अर्थ काय. Current तुम्हाला आत्ताचे मूल्य देतो. Raw विंडोतील साऱ्या रीडिंगचा array देतो — तोच तुम्ही AVERAGE, MIN किंवा MAX सारख्या फंक्शन्सना खाऊ घालता. Last Active Value आणि First Active Value विंडोतील सर्वात नवी किंवा सर्वात जुनी रीडिंग देतात. आणि Time मूल्याऐवजी रीडिंगचा timestamp देतो.",
          tip: { type: 'tipLabel', text: 'Raw + AVERAGE ही क्लासिक जोडी: गेल्या तासाच्या रीडिंगची सरासरी, Excel-शैलीत.' },
        },
        {
          label: 'विंडो', title: 'First आणि Last Reference Time',
          body: "<strong>Reference Times</strong>, मिनिटांत, aggregator वाचणारी विंडो ठरवतात. <strong>First Reference Time</strong> तुमचा प्रारंभ-बिंदू <em>T</em>; <strong>Last Reference Time</strong> विंडो किती मागे जाईल ते. First <code>0</code>, Last <code>60</code> → विंडो <em>गेला तास</em> (T पासून T−60 पर्यंत). स्क्रीनवरचे उदाहरण — 0 आणि 1 — फक्त शेवटचे मिनिट वाचते.",
          voice: "Reference Times, मिनिटांत, aggregator वाचणारी विंडो ठरवतात. First Reference Time तुमचा प्रारंभ-बिंदू आहे — T. Last Reference Time सांगतो की विंडो किती मागे पसरेल. First शून्य आणि Last साठ ठेवा, आणि तुमची विंडो गेला तास आहे — T पासून T उणे साठ पर्यंत. स्क्रीनवरचे उदाहरण, शून्य आणि एक, फक्त शेवटचे मिनिट वाचते.",
        },
        {
          label: 'Completeness', title: 'Data Completeness — विश्वासाची अट',
          body: "सेन्सर रीडिंग गाळतात — नेटवर्क अडखळते. <strong>Data Completeness</strong> (तुम्ही याला <em>confidence score</em> म्हणून ओळखत असाल) ठरवते की गणित चालण्यासाठी विंडोतील किती अपेक्षित डेटा अस्तित्वात हवा. 60-मिनिटांच्या विंडोवर <strong>70%</strong> — किमान 70% अपेक्षित रीडिंग आल्या तर फॉर्म्युला चालतो; त्याखाली, दिशाभूल करणारा आकडा देण्याऐवजी तो नकार देतो. <strong>50%</strong> ठेवा तर अर्धा डेटा पुरेसा.",
          voice: "सेन्सर रीडिंग गाळतात — नेटवर्क अडखळते. Data Completeness — ज्याला तुम्ही कदाचित confidence score म्हणून ओळखता — ठरवते की गणित चालण्यासाठी विंडोतील किती अपेक्षित डेटा प्रत्यक्षात अस्तित्वात हवा. साठ-मिनिटांच्या विंडोवर सत्तर टक्के म्हणजे: किमान सत्तर टक्के अपेक्षित रीडिंग आल्या असतील तोवर फॉर्म्युला गणित करतो. त्याखाली तो नकार देतो — दिशाभूल करणाऱ्या आकड्यापेक्षा आकडा नसलेला बरा. पन्नास टक्के ठेवा, तर अर्धा डेटा पुरेसा.",
          tip: { type: 'noteLabel', text: 'स्लायडर 10%–100% चालतो. कठोर = अधिक विश्वासार्ह, पण कमकुवत नेटवर्कवर गणित हुकण्याची शक्यता जास्त.' },
        },
        {
          label: 'Return', title: 'Return, मग Submit',
          body: "<strong>Return</strong> निवडते टॅग काय परत देईल — रीडिंगसाठीच <strong>Value(s)</strong>. <strong>Submit</strong> करा, आणि यापुढे ती चिप फॉर्म्युल्याच्या आत याच सेटिंग्ज बाळगते. हेच संपूर्ण चित्र: तुम्ही सांगितल्या पद्धतीने वाचलेले टॅग, वेळापत्रकावर चालणाऱ्या गणिताला खाद्य.",
          voice: "Return निवडते की टॅग फॉर्म्युल्याला काय परत देईल — Values, म्हणजे रीडिंग स्वतः. Submit दाबा, आणि यापुढे ती चिप फॉर्म्युल्याच्या आत याच सेटिंग्ज बाळगते. आणि हेच संपूर्ण चित्र: सेन्सर टॅग, नेमके तुम्ही सांगितलेल्या पद्धतीने वाचलेले, वेळापत्रकावर चालणाऱ्या गणिताला खाद्य देणारे.",
          tip: { type: 'upNextLabel', text: 'शेवट: Plant Score — पूर्णपणे इतर फॉर्म्युल्यांनी बांधलेला फॉर्म्युला.' },
        },
      ],
    },
  },
};

export default lesson;
