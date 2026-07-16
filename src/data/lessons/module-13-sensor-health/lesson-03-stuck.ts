import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/sensor-health-stuck`;

/**
 * M13 · Sensor Health — L3: Stuck detection (sensor-level fault). (internal only)
 * From the monitoring doc: rolling window per category; if the spread stays
 * within Epsilon for the whole window → Stuck ("Frozen at X"); closes when a
 * reading moves > Epsilon. Epsilon is Fixed (absolute) or Range-Based (% of
 * valid range); Energy Meters tolerance = 0 → disabled.
 */
const lesson: Lesson = {
  id: 'sensor-health-stuck',
  moduleId: 'module-13-sensor-health',
  lessonNumber: 3,
  estimatedMinutes: 5,
  screenshots: {
    faults: `${BASE}/faults.jpg`,
    fixed: `${BASE}/fixed-stuck.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'faults', caption: 'STUCK · Frozen at a value',
      spotlight: { top: '28%', left: '0%', width: '50%', height: '11%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'A rolling window, checked for spread',
      spotlight: { top: '40%', left: '69%', width: '30%', height: '32%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Epsilon — the allowed wiggle room',
      spotlight: { top: '26%', left: '69%', width: '30%', height: '14%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Window & tolerance vary by category',
      spotlight: { top: '28%', left: '0%', width: '68%', height: '30%' },
    },
    {
      mode: 'detail', screenshot: 'fixed', caption: 'Reading moves → Stuck clears',
      spotlight: { top: '17%', left: '1%', width: '30%', height: '7%' },
    },
  ],
  content: {
    en: {
      title: 'Sensor-level:<br><em>Stuck.</em>',
      subtitle:
        'A reading that stops moving — the classic sign of a sensor that’s clogged, jammed or dead. The detection is smarter than “the number didn’t change”; here’s exactly how it works.',
      chapter: 'Sensor Health · Sensor-level fault',
      steps: [
        {
          label: 'What it is', title: 'A reading that stops moving',
          body: "A <strong>Stuck</strong> fault means a sensor's reading <strong>hasn't changed meaningfully</strong> for a sustained stretch — usually the sensor is physically <strong>clogged, jammed, or has failed</strong>. On the row you'll see the <strong>STUCK</strong> badge and <strong>Frozen at…</strong> the value it's been holding.",
          voice: "A Stuck fault means a sensor's reading hasn't changed meaningfully for a sustained stretch of time. In the field, that usually means the sensor is physically clogged, jammed, or has simply failed. On the fault row you'll see the STUCK badge, and Frozen at — followed by the exact value the sensor has been holding.",
        },
        {
          label: 'The window', title: 'A rolling window, checked for spread',
          body: "The system keeps a <strong>rolling window</strong> of the sensor's most recent readings. After every new reading it measures the <strong>spread</strong> — the gap between the highest and lowest value in that window. If the spread stays within a tiny tolerance for the <strong>entire window</strong>, the sensor is flagged <strong>Stuck</strong>. It's not “did the last reading change” — it's “has this been flat the whole window”.",
          voice: "The detection is smarter than just checking if the last number changed. The system keeps a rolling window of the sensor's most recent readings. After every new reading, it measures the spread — the gap between the highest and lowest value across that whole window. If the spread stays within a tiny tolerance band for the entire window, the sensor is flagged as Stuck. So the question isn't did the last reading change — it's has this sensor been flat for the whole window.",
        },
        {
          label: 'Epsilon', title: 'Epsilon — the allowed wiggle room',
          body: "That tolerance band is called <strong>Epsilon</strong> — the movement we allow before calling a reading “alive”. A sensor is Stuck only if <strong>every reading in the window</strong> sits within ±Epsilon of the others. It's set one of two ways: <strong>Fixed</strong> (an absolute value — pH uses 0.01) or <strong>Range-Based</strong> (a percentage of the sensor's valid range — e.g. Equipment Power uses 2% of Max−Min).",
          voice: "That tolerance band has a name — Epsilon. Think of it as the allowed wiggle room: the amount a reading must move before we consider it alive. A sensor is called Stuck only if every reading in the window sits within plus-or-minus Epsilon of the others. Epsilon is set one of two ways. Fixed tolerance — an absolute value, like pH which uses 0.01. Or Range-Based — a percentage of the sensor's valid range. For example Equipment Power uses two percent of its max minus min.",
          tip: { type: 'noteLabel', text: 'Energy Meters have Epsilon = 0, so Stuck detection is disabled for them — they’re meant to hold a steady accumulated value.' },
        },
        {
          label: 'By category', title: 'Window & tolerance vary by category',
          body: "Each sensor category has its own window and Epsilon, tuned to how that sensor behaves. A few: <strong>pH</strong> ±0.01 / 30 min · <strong>DO</strong> ±0.05 / 20 min · <strong>Turbidity</strong> ±0.1 / 45 min · <strong>Temperature</strong> ±0.2 / 90 min · <strong>MLSS</strong> ±50 / 60 min. Equipment sensors use Range-Based: <strong>RPM</strong> 0.5% / 20 min, <strong>Torque</strong> 1% / 20 min, <strong>Power</strong> 2% / 20 min. You don't set these — but knowing a slow sensor like Temperature checks a 90-minute window explains why some Stuck faults take longer to appear.",
          voice: "Each sensor category has its own window length and Epsilon, tuned to how that kind of sensor normally behaves. A few examples: pH allows point-oh-one over a thirty-minute window. DO, point-oh-five over twenty minutes. Turbidity, point-one over forty-five minutes. Temperature, point-two over a full ninety minutes. MLSS, fifty over sixty minutes. Equipment sensors use Range-Based tolerance — RPM at half a percent, Torque at one percent, Power at two percent. You don't configure any of this, but it helps to know: a slow-moving sensor like Temperature checks a ninety-minute window, which is why some Stuck faults take longer to surface than others.",
        },
        {
          label: 'Resolves', title: 'One real move, and it clears',
          body: "The moment any new reading moves the spread <strong>beyond Epsilon</strong>, the window resets and the <strong>Stuck fault closes automatically</strong> — you'll find it in <strong>Fixed Faults</strong> with its duration. If a sensor keeps landing back on the Fixed list, that's your cue it needs a physical clean or replacement, not just a reset.",
          voice: "Recovery is automatic. The moment any new reading pushes the spread beyond Epsilon, the window resets and the Stuck fault closes on its own — you'll find it in the Fixed Faults list with how long it lasted. And here's the practical tip: if the same sensor keeps landing back on that Fixed list, that's your signal it needs a physical clean or a replacement on site — not just a software reset.",
          tip: { type: 'upNextLabel', text: 'Next: Out of Range — Persistent and Fluttering, the last two sensor-level faults.' },
        },
      ],
    },
    hi: {
      title: 'सेंसर-स्तर:<br><em>Stuck.</em>',
      subtitle:
        'रीडिंग जो हिलना बंद कर दे — सेंसर के जाम, क्लॉग या ख़राब होने का क्लासिक संकेत। पहचान “नंबर नहीं बदला” से ज़्यादा समझदार है; देखिए यह ठीक कैसे काम करती है।',
      chapter: 'Sensor Health · सेंसर-स्तरीय फ़ॉल्ट',
      steps: [
        {
          label: 'यह क्या है', title: 'रीडिंग जो हिलना बंद कर दे',
          body: "<strong>Stuck</strong> फ़ॉल्ट का मतलब है सेंसर की रीडिंग एक लंबे समय तक <strong>अर्थपूर्ण रूप से नहीं बदली</strong> — आमतौर पर सेंसर भौतिक रूप से <strong>क्लॉग, जाम, या ख़राब</strong> है। पंक्ति पर आपको <strong>STUCK</strong> बैज और <strong>Frozen at…</strong> वह मान दिखेगा जिस पर वह अटका है।",
          voice: "Stuck फ़ॉल्ट का मतलब है सेंसर की रीडिंग एक लंबे समय तक अर्थपूर्ण रूप से नहीं बदली। फ़ील्ड में इसका आमतौर पर मतलब है कि सेंसर भौतिक रूप से क्लॉग, जाम, या बस ख़राब हो गया है। फ़ॉल्ट पंक्ति पर आपको STUCK बैज दिखेगा, और Frozen at — उसके बाद वह ठीक मान जिस पर सेंसर अटका हुआ है।",
        },
        {
          label: 'विंडो', title: 'एक रोलिंग विंडो, स्प्रेड के लिए जाँची गई',
          body: "सिस्टम सेंसर की सबसे हाल की रीडिंग की एक <strong>रोलिंग विंडो</strong> रखता है। हर नई रीडिंग के बाद यह <strong>स्प्रेड</strong> मापता है — उस विंडो में सबसे ऊँचे और सबसे नीचे मान के बीच का अंतर। अगर स्प्रेड <strong>पूरी विंडो</strong> भर एक छोटी सहनशीलता के भीतर रहे, तो सेंसर <strong>Stuck</strong> चिह्नित होता है। यह “क्या आख़िरी रीडिंग बदली” नहीं — “क्या यह पूरी विंडो सपाट रहा” है।",
          voice: "पहचान सिर्फ़ यह जाँचने से ज़्यादा समझदार है कि आख़िरी नंबर बदला या नहीं। सिस्टम सेंसर की सबसे हाल की रीडिंग की एक रोलिंग विंडो रखता है। हर नई रीडिंग के बाद यह स्प्रेड मापता है — उस पूरी विंडो में सबसे ऊँचे और सबसे नीचे मान के बीच का अंतर। अगर स्प्रेड पूरी विंडो भर एक छोटी सहनशीलता बैंड के भीतर रहे, तो सेंसर Stuck चिह्नित होता है। तो सवाल यह नहीं कि आख़िरी रीडिंग बदली — बल्कि यह कि क्या यह सेंसर पूरी विंडो सपाट रहा।",
        },
        {
          label: 'Epsilon', title: 'Epsilon — अनुमत हिलने की जगह',
          body: "उस सहनशीलता बैंड को <strong>Epsilon</strong> कहते हैं — रीडिंग को “जीवित” कहने से पहले जितना हिलना हम अनुमति देते हैं। सेंसर तभी Stuck है जब विंडो की <strong>हर रीडिंग</strong> बाक़ी के ±Epsilon के भीतर हो। यह दो में से एक तरीक़े से सेट होता है: <strong>Fixed</strong> (एक निरपेक्ष मान — pH 0.01 उपयोग करता है) या <strong>Range-Based</strong> (सेंसर की वैध रेंज का प्रतिशत — जैसे Equipment Power, Max−Min का 2%)।",
          voice: "उस सहनशीलता बैंड का एक नाम है — Epsilon। इसे अनुमत हिलने की जगह समझें: रीडिंग को जीवित मानने से पहले उसे कितना हिलना चाहिए। सेंसर तभी Stuck कहलाता है जब विंडो की हर रीडिंग बाक़ी के प्लस-माइनस Epsilon के भीतर हो। Epsilon दो में से एक तरीक़े से सेट होता है। Fixed सहनशीलता — एक निरपेक्ष मान, जैसे pH जो 0.01 उपयोग करता है। या Range-Based — सेंसर की वैध रेंज का प्रतिशत। उदाहरण के लिए Equipment Power अपने max घटा min का दो प्रतिशत उपयोग करता है।",
          tip: { type: 'noteLabel', text: 'Energy Meters का Epsilon = 0 है, तो उनके लिए Stuck detection बंद है — वे एक स्थिर संचित मान रखने के लिए बने हैं।' },
        },
        {
          label: 'श्रेणी अनुसार', title: 'विंडो और सहनशीलता श्रेणी अनुसार बदलती है',
          body: "हर सेंसर श्रेणी की अपनी विंडो और Epsilon है, उस सेंसर के व्यवहार के अनुसार। कुछ: <strong>pH</strong> ±0.01 / 30 मिनट · <strong>DO</strong> ±0.05 / 20 मिनट · <strong>Turbidity</strong> ±0.1 / 45 मिनट · <strong>Temperature</strong> ±0.2 / 90 मिनट · <strong>MLSS</strong> ±50 / 60 मिनट। इक्विपमेंट सेंसर Range-Based उपयोग करते हैं: <strong>RPM</strong> 0.5% / 20 मिनट, <strong>Torque</strong> 1% / 20 मिनट, <strong>Power</strong> 2% / 20 मिनट। आप इन्हें सेट नहीं करते — पर यह जानना कि Temperature जैसा धीमा सेंसर 90-मिनट की विंडो जाँचता है, समझाता है कि कुछ Stuck फ़ॉल्ट देर से क्यों दिखते हैं।",
          voice: "हर सेंसर श्रेणी की अपनी विंडो लंबाई और Epsilon है, उस तरह के सेंसर के सामान्य व्यवहार के अनुसार। कुछ उदाहरण: pH तीस-मिनट की विंडो पर शून्य-दशमलव-शून्य-एक अनुमति देता है। DO, बीस मिनट पर शून्य-दशमलव-शून्य-पाँच। Turbidity, पैंतालीस मिनट पर शून्य-दशमलव-एक। Temperature, पूरे नब्बे मिनट पर शून्य-दशमलव-दो। MLSS, साठ मिनट पर पचास। इक्विपमेंट सेंसर Range-Based सहनशीलता उपयोग करते हैं — RPM आधा प्रतिशत, Torque एक प्रतिशत, Power दो प्रतिशत। आप इनमें से कुछ भी कॉन्फ़िगर नहीं करते, पर यह जानना उपयोगी है: Temperature जैसा धीमा सेंसर नब्बे-मिनट की विंडो जाँचता है, इसीलिए कुछ Stuck फ़ॉल्ट दूसरों से देर से सामने आते हैं।",
        },
        {
          label: 'हल', title: 'एक असली हलचल, और यह साफ़',
          body: "जैसे ही कोई नई रीडिंग स्प्रेड को <strong>Epsilon से आगे</strong> ले जाती है, विंडो रीसेट हो जाती है और <strong>Stuck फ़ॉल्ट अपने-आप बंद</strong> हो जाता है — यह आपको <strong>Fixed Faults</strong> में उसकी अवधि के साथ मिलेगा। अगर कोई सेंसर बार-बार Fixed सूची में लौटता है, तो यह संकेत है कि उसे भौतिक सफ़ाई या बदलाव चाहिए, सिर्फ़ रीसेट नहीं।",
          voice: "रिकवरी अपने-आप होती है। जैसे ही कोई नई रीडिंग स्प्रेड को Epsilon से आगे धकेलती है, विंडो रीसेट हो जाती है और Stuck फ़ॉल्ट ख़ुद बंद हो जाता है — यह आपको Fixed Faults सूची में मिलेगा, कितनी देर चला उसके साथ। और यह व्यावहारिक सुझाव है: अगर वही सेंसर बार-बार उस Fixed सूची में लौटता है, तो यह संकेत है कि उसे साइट पर भौतिक सफ़ाई या बदलाव चाहिए — सिर्फ़ सॉफ़्टवेयर रीसेट नहीं।",
          tip: { type: 'upNextLabel', text: 'आगे: Out of Range — Persistent और Fluttering, आख़िरी दो सेंसर-स्तरीय फ़ॉल्ट।' },
        },
      ],
    },
    ta: {
      title: 'சென்சார் மட்டம்:<br><em>Stuck.</em>',
      subtitle:
        'நகர்வதை நிறுத்திய அளவீடு — சென்சார் அடைபட்ட, சிக்கிய அல்லது செயலிழந்ததன் உன்னதமான அறிகுறி. கண்டறிதல் “எண் மாறவில்லை” என்பதைவிட புத்திசாலித்தனமானது; அது எப்படி வேலை செய்கிறது என்பது இங்கே.',
      chapter: 'Sensor Health · சென்சார்-மட்டக் கோளாறு',
      steps: [
        {
          label: 'என்ன', title: 'நகர்வதை நிறுத்திய அளவீடு',
          body: "<strong>Stuck</strong> கோளாறு என்றால் ஒரு சென்சாரின் அளவீடு நீண்ட நேரம் <strong>அர்த்தமுள்ளதாக மாறவில்லை</strong> — பொதுவாக சென்சார் உடல்ரீதியாக <strong>அடைபட்டு, சிக்கி, அல்லது செயலிழந்து</strong> உள்ளது. வரிசையில் <strong>STUCK</strong> பேட்ஜும், அது நிலைத்திருக்கும் மதிப்பில் <strong>Frozen at…</strong>-ம் காணும்.",
          voice: "Stuck கோளாறு என்றால் ஒரு சென்சாரின் அளவீடு நீண்ட நேரம் அர்த்தமுள்ளதாக மாறவில்லை. களத்தில், அது பொதுவாக சென்சார் உடல்ரீதியாக அடைபட்டு, சிக்கி, அல்லது வெறுமனே செயலிழந்துவிட்டது என்று பொருள். கோளாறு வரிசையில் STUCK பேட்ஜும், Frozen at — பின் சென்சார் நிலைத்திருக்கும் சரியான மதிப்பும் காணும்.",
        },
        {
          label: 'சாளரம்', title: 'ஒரு உருளும் சாளரம், பரவலுக்குச் சரிபார்க்கப்படுகிறது',
          body: "சிஸ்டம் சென்சாரின் மிக அண்மைய அளவீடுகளின் ஒரு <strong>உருளும் சாளரத்தை</strong> வைத்திருக்கிறது. ஒவ்வொரு புதிய அளவீட்டுக்குப் பின் <strong>பரவலை</strong> அளக்கிறது — அந்தச் சாளரத்தில் மிக உயர்ந்த, மிகத் தாழ்ந்த மதிப்புகளுக்கு இடையிலான இடைவெளி. பரவல் <strong>முழுச் சாளரமும்</strong> ஒரு சிறிய சகிப்புக்குள் இருந்தால், சென்சார் <strong>Stuck</strong> எனக் குறிக்கப்படும். “கடைசி அளவீடு மாறியதா” அல்ல — “இது முழுச் சாளரமும் தட்டையாக இருந்ததா” என்பது.",
          voice: "கண்டறிதல் கடைசி எண் மாறியதா என்று மட்டும் சரிபார்ப்பதைவிட புத்திசாலித்தனமானது. சிஸ்டம் சென்சாரின் மிக அண்மைய அளவீடுகளின் ஒரு உருளும் சாளரத்தை வைத்திருக்கிறது. ஒவ்வொரு புதிய அளவீட்டுக்குப் பின், பரவலை அளக்கிறது — அந்த முழுச் சாளரத்திலும் மிக உயர்ந்த, மிகத் தாழ்ந்த மதிப்புகளுக்கு இடையிலான இடைவெளி. பரவல் முழுச் சாளரமும் ஒரு சிறிய சகிப்புப் பட்டைக்குள் இருந்தால், சென்சார் Stuck எனக் குறிக்கப்படும். எனவே கேள்வி கடைசி அளவீடு மாறியதா அல்ல — இந்தச் சென்சார் முழுச் சாளரமும் தட்டையாக இருந்ததா என்பதே.",
        },
        {
          label: 'Epsilon', title: 'Epsilon — அனுமதிக்கப்பட்ட அசைவு',
          body: "அந்தச் சகிப்புப் பட்டையின் பெயர் <strong>Epsilon</strong> — ஒரு அளவீட்டை “உயிருள்ளது” என்பதற்கு முன் நாம் அனுமதிக்கும் அசைவு. சாளரத்தின் <strong>ஒவ்வொரு அளவீடும்</strong> மற்றவற்றின் ±Epsilon-க்குள் இருந்தால் மட்டுமே சென்சார் Stuck. இது இரண்டில் ஒரு வழியில் அமைக்கப்படும்: <strong>Fixed</strong> (ஒரு தனி மதிப்பு — pH 0.01 பயன்படுத்தும்) அல்லது <strong>Range-Based</strong> (சென்சாரின் செல்லுபடி வரம்பின் சதவீதம் — எ.கா. Equipment Power, Max−Min-இன் 2%).",
          voice: "அந்தச் சகிப்புப் பட்டைக்கு ஒரு பெயர் உண்டு — Epsilon. அதை அனுமதிக்கப்பட்ட அசைவாக எண்ணுங்கள்: ஒரு அளவீட்டை உயிருள்ளதாகக் கருதுவதற்கு முன் அது எவ்வளவு நகர வேண்டும். சாளரத்தின் ஒவ்வொரு அளவீடும் மற்றவற்றின் கூட்டல்-கழித்தல் Epsilon-க்குள் இருந்தால் மட்டுமே சென்சார் Stuck எனப்படும். Epsilon இரண்டில் ஒரு வழியில் அமைக்கப்படும். Fixed சகிப்பு — ஒரு தனி மதிப்பு, pH 0.01 பயன்படுத்துவது போல. அல்லது Range-Based — சென்சாரின் செல்லுபடி வரம்பின் சதவீதம். உதாரணமாக Equipment Power அதன் max கழித்தல் min-இன் இரண்டு சதவீதம் பயன்படுத்தும்.",
          tip: { type: 'noteLabel', text: 'Energy Meters-இன் Epsilon = 0, எனவே அவற்றுக்கு Stuck detection முடக்கப்பட்டுள்ளது — அவை ஒரு நிலையான திரட்டு மதிப்பை வைத்திருக்கவே வடிவமைக்கப்பட்டவை.' },
        },
        {
          label: 'வகை வாரியாக', title: 'சாளரமும் சகிப்பும் வகை வாரியாக மாறும்',
          body: "ஒவ்வொரு சென்சார் வகைக்கும் அதன் சொந்த சாளரமும் Epsilon-ம் உண்டு, அந்தச் சென்சார் நடந்துகொள்ளும் விதத்திற்கு ஏற்ப. சில: <strong>pH</strong> ±0.01 / 30 நிமிடம் · <strong>DO</strong> ±0.05 / 20 நிமிடம் · <strong>Turbidity</strong> ±0.1 / 45 நிமிடம் · <strong>Temperature</strong> ±0.2 / 90 நிமிடம் · <strong>MLSS</strong> ±50 / 60 நிமிடம். உபகரணச் சென்சார்கள் Range-Based பயன்படுத்தும்: <strong>RPM</strong> 0.5% / 20 நிமிடம், <strong>Torque</strong> 1% / 20 நிமிடம், <strong>Power</strong> 2% / 20 நிமிடம். இவற்றை நீங்கள் அமைக்கவில்லை — ஆனால் Temperature போன்ற மெதுவான சென்சார் 90-நிமிட சாளரத்தைச் சரிபார்க்கிறது என்று அறிவது, சில Stuck கோளாறுகள் ஏன் தாமதமாகத் தோன்றுகின்றன என விளக்குகிறது.",
          voice: "ஒவ்வொரு சென்சார் வகைக்கும் அதன் சொந்த சாளர நீளமும் Epsilon-ம் உண்டு, அந்த வகைச் சென்சார் சாதாரணமாக நடந்துகொள்ளும் விதத்திற்கு ஏற்ப. சில உதாரணங்கள்: pH முப்பது-நிமிட சாளரத்தில் புள்ளி-பூஜ்ஜியம்-ஒன்று அனுமதிக்கும். DO, இருபது நிமிடத்தில் புள்ளி-பூஜ்ஜியம்-ஐந்து. Turbidity, நாற்பத்தைந்து நிமிடத்தில் புள்ளி-ஒன்று. Temperature, முழு தொண்ணூறு நிமிடத்தில் புள்ளி-இரண்டு. MLSS, அறுபது நிமிடத்தில் ஐம்பது. உபகரணச் சென்சார்கள் Range-Based சகிப்பு பயன்படுத்தும் — RPM அரை சதவீதம், Torque ஒரு சதவீதம், Power இரண்டு சதவீதம். இவற்றில் எதையும் நீங்கள் அமைக்கவில்லை, ஆனால் அறிவது உதவும்: Temperature போன்ற மெதுவான சென்சார் தொண்ணூறு-நிமிட சாளரத்தைச் சரிபார்க்கிறது, அதனால்தான் சில Stuck கோளாறுகள் மற்றவற்றைவிடத் தாமதமாக வெளிப்படுகின்றன.",
        },
        {
          label: 'தீர்வு', title: 'ஒரு உண்மையான அசைவு, அது தெளிகிறது',
          body: "ஏதேனும் ஒரு புதிய அளவீடு பரவலை <strong>Epsilon-ஐ மீறி</strong> நகர்த்திய நொடியில், சாளரம் மீட்டமைக்கப்பட்டு <strong>Stuck கோளாறு தானாக மூடும்</strong> — அது <strong>Fixed Faults</strong>-இல் அதன் கால அளவுடன் கிடைக்கும். ஒரு சென்சார் மீண்டும் மீண்டும் Fixed பட்டியலுக்கு வந்தால், அதற்கு உடல்ரீதியான சுத்தம் அல்லது மாற்றம் தேவை என்பதற்கான குறிப்பு அது — வெறும் மீட்டமைப்பு அல்ல.",
          voice: "மீட்பு தானியங்கி. ஏதேனும் ஒரு புதிய அளவீடு பரவலை Epsilon-ஐ மீறித் தள்ளிய நொடியில், சாளரம் மீட்டமைக்கப்பட்டு Stuck கோளாறு தானே மூடும் — அது Fixed Faults பட்டியலில், எவ்வளவு நேரம் நீடித்தது என்பதுடன் கிடைக்கும். மேலும் இதோ ஒரு நடைமுறைக் குறிப்பு: அதே சென்சார் மீண்டும் மீண்டும் அந்த Fixed பட்டியலுக்கு வந்தால், அதற்குக் களத்தில் உடல்ரீதியான சுத்தம் அல்லது மாற்றம் தேவை என்பதற்கான சமிக்ஞை அது — வெறும் மென்பொருள் மீட்டமைப்பு அல்ல.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: Out of Range — Persistent மற்றும் Fluttering, கடைசி இரண்டு சென்சார்-மட்டக் கோளாறுகள்.' },
        },
      ],
    },
    mr: {
      title: 'सेन्सर-पातळी:<br><em>Stuck.</em>',
      subtitle:
        'हलणे थांबलेले रीडिंग — सेन्सर जाम, क्लॉग किंवा निकामी झाल्याचे उत्कृष्ट लक्षण. ओळख “आकडा बदलला नाही” यापेक्षा हुशार आहे; ती नेमकी कशी चालते ते इथे.',
      chapter: 'Sensor Health · सेन्सर-पातळीचा फॉल्ट',
      steps: [
        {
          label: 'हे काय', title: 'हलणे थांबलेले रीडिंग',
          body: "<strong>Stuck</strong> फॉल्ट म्हणजे सेन्सरचे रीडिंग दीर्घ काळ <strong>अर्थपूर्णरीत्या बदलले नाही</strong> — सहसा सेन्सर प्रत्यक्षात <strong>क्लॉग, जाम, किंवा निकामी</strong> झाला आहे. ओळीवर तुम्हाला <strong>STUCK</strong> बॅज आणि तो ज्या मूल्यावर अडकला त्यावर <strong>Frozen at…</strong> दिसेल.",
          voice: "Stuck फॉल्ट म्हणजे सेन्सरचे रीडिंग दीर्घ काळ अर्थपूर्णरीत्या बदलले नाही. प्रत्यक्ष जागी, याचा सहसा अर्थ म्हणजे सेन्सर प्रत्यक्षात क्लॉग, जाम, किंवा फक्त निकामी झाला आहे. फॉल्ट ओळीवर तुम्हाला STUCK बॅज दिसेल, आणि Frozen at — त्यानंतर सेन्सर ज्या नेमक्या मूल्यावर अडकला ते.",
        },
        {
          label: 'विंडो', title: 'एक रोलिंग विंडो, स्प्रेडसाठी तपासली',
          body: "सिस्टम सेन्सरच्या अगदी अलीकडच्या रीडिंगची एक <strong>रोलिंग विंडो</strong> ठेवते. प्रत्येक नव्या रीडिंगनंतर ती <strong>स्प्रेड</strong> मोजते — त्या विंडोतील सर्वोच्च आणि सर्वात कमी मूल्यातील फरक. स्प्रेड <strong>संपूर्ण विंडोभर</strong> एका लहान सहनशीलतेत राहिला, तर सेन्सर <strong>Stuck</strong> म्हणून चिन्हांकित होतो. हे “शेवटचे रीडिंग बदलले का” नाही — “हे संपूर्ण विंडोभर सपाट होते का” आहे.",
          voice: "ओळख फक्त शेवटचा आकडा बदलला का हे तपासण्यापेक्षा हुशार आहे. सिस्टम सेन्सरच्या अगदी अलीकडच्या रीडिंगची एक रोलिंग विंडो ठेवते. प्रत्येक नव्या रीडिंगनंतर ती स्प्रेड मोजते — त्या संपूर्ण विंडोतील सर्वोच्च आणि सर्वात कमी मूल्यातील फरक. स्प्रेड संपूर्ण विंडोभर एका लहान सहनशीलता पट्ट्यात राहिला, तर सेन्सर Stuck म्हणून चिन्हांकित होतो. म्हणून प्रश्न शेवटचे रीडिंग बदलले का नाही — तर हा सेन्सर संपूर्ण विंडोभर सपाट होता का हा आहे.",
        },
        {
          label: 'Epsilon', title: 'Epsilon — अनुमत हलण्याची जागा',
          body: "त्या सहनशीलता पट्ट्याला <strong>Epsilon</strong> म्हणतात — रीडिंगला “जिवंत” म्हणण्याआधी आपण जेवढे हलणे अनुमती देतो ते. विंडोतील <strong>प्रत्येक रीडिंग</strong> इतरांच्या ±Epsilon मध्ये असेल तरच सेन्सर Stuck. हे दोनपैकी एका मार्गाने सेट होते: <strong>Fixed</strong> (एक निरपेक्ष मूल्य — pH 0.01 वापरतो) किंवा <strong>Range-Based</strong> (सेन्सरच्या वैध श्रेणीची टक्केवारी — उदा. Equipment Power, Max−Min च्या 2%).",
          voice: "त्या सहनशीलता पट्ट्याला एक नाव आहे — Epsilon. त्याला अनुमत हलण्याची जागा समजा: रीडिंगला जिवंत मानण्याआधी ते किती हलले पाहिजे. विंडोतील प्रत्येक रीडिंग इतरांच्या अधिक-उणे Epsilon मध्ये असेल तरच सेन्सर Stuck म्हणतात. Epsilon दोनपैकी एका मार्गाने सेट होते. Fixed सहनशीलता — एक निरपेक्ष मूल्य, जसे pH जो 0.01 वापरतो. किंवा Range-Based — सेन्सरच्या वैध श्रेणीची टक्केवारी. उदाहरणार्थ Equipment Power त्याच्या max वजा min च्या दोन टक्के वापरतो.",
          tip: { type: 'noteLabel', text: 'Energy Meters चे Epsilon = 0 आहे, म्हणून त्यांच्यासाठी Stuck detection बंद आहे — ते एक स्थिर संचित मूल्य ठेवण्यासाठी बनलेले आहेत.' },
        },
        {
          label: 'श्रेणीनुसार', title: 'विंडो आणि सहनशीलता श्रेणीनुसार बदलते',
          body: "प्रत्येक सेन्सर श्रेणीची स्वतःची विंडो आणि Epsilon आहे, त्या सेन्सरच्या वर्तनानुसार. काही: <strong>pH</strong> ±0.01 / 30 मि · <strong>DO</strong> ±0.05 / 20 मि · <strong>Turbidity</strong> ±0.1 / 45 मि · <strong>Temperature</strong> ±0.2 / 90 मि · <strong>MLSS</strong> ±50 / 60 मि. इक्विपमेंट सेन्सर Range-Based वापरतात: <strong>RPM</strong> 0.5% / 20 मि, <strong>Torque</strong> 1% / 20 मि, <strong>Power</strong> 2% / 20 मि. तुम्ही हे सेट करत नाही — पण Temperature सारखा संथ सेन्सर 90-मिनिटांची विंडो तपासतो हे जाणल्याने काही Stuck फॉल्ट उशिरा का दिसतात हे समजते.",
          voice: "प्रत्येक सेन्सर श्रेणीची स्वतःची विंडो लांबी आणि Epsilon आहे, त्या प्रकारच्या सेन्सरच्या सामान्य वर्तनानुसार. काही उदाहरणे: pH तीस-मिनिटांच्या विंडोवर शून्य-दशांश-शून्य-एक अनुमती देतो. DO, वीस मिनिटांवर शून्य-दशांश-शून्य-पाच. Turbidity, पंचेचाळीस मिनिटांवर शून्य-दशांश-एक. Temperature, पूर्ण नव्वद मिनिटांवर शून्य-दशांश-दोन. MLSS, साठ मिनिटांवर पन्नास. इक्विपमेंट सेन्सर Range-Based सहनशीलता वापरतात — RPM अर्धा टक्का, Torque एक टक्का, Power दोन टक्के. यापैकी काहीही तुम्ही कॉन्फिगर करत नाही, पण जाणणे उपयुक्त आहे: Temperature सारखा संथ सेन्सर नव्वद-मिनिटांची विंडो तपासतो, म्हणूनच काही Stuck फॉल्ट इतरांपेक्षा उशिरा समोर येतात.",
        },
        {
          label: 'सुटका', title: 'एक खरी हालचाल, आणि तो साफ',
          body: "कोणतेही नवे रीडिंग स्प्रेडला <strong>Epsilon पलीकडे</strong> नेताच, विंडो रीसेट होते आणि <strong>Stuck फॉल्ट आपोआप बंद</strong> होतो — तो तुम्हाला <strong>Fixed Faults</strong> मध्ये त्याच्या कालावधीसह मिळेल. एखादा सेन्सर वारंवार Fixed यादीत परत येत असेल, तर त्याला फक्त रीसेट नव्हे, तर प्रत्यक्ष स्वच्छता किंवा बदल हवा हे तुमचे संकेत.",
          voice: "रिकव्हरी आपोआप होते. कोणतेही नवे रीडिंग स्प्रेडला Epsilon पलीकडे ढकलताच, विंडो रीसेट होते आणि Stuck फॉल्ट स्वतः बंद होतो — तो तुम्हाला Fixed Faults यादीत, तो किती वेळ टिकला त्यासह मिळेल. आणि हा व्यावहारिक सल्ला: तोच सेन्सर वारंवार त्या Fixed यादीत परत येत असेल, तर त्याला जागेवर प्रत्यक्ष स्वच्छता किंवा बदल हवा हे तुमचे संकेत — फक्त सॉफ्टवेअर रीसेट नाही.",
          tip: { type: 'upNextLabel', text: 'पुढे: Out of Range — Persistent आणि Fluttering, शेवटचे दोन सेन्सर-पातळीचे फॉल्ट.' },
        },
      ],
    },
  },
};

export default lesson;
