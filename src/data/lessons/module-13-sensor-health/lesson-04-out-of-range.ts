import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/sensor-health-out-of-range`;

/**
 * M13 · Sensor Health — L4: Out of Range — Persistent & Fluttering + Threshold
 * Pending. (internal only) From the monitoring doc:
 *  · Persistent: 3 consecutive readings OOR → open; 3 consecutive in-range → close.
 *  · Fluttering: 3+ in→out trips within a 30-min window → open; closes after
 *    30 min continuously in-range. Mutually exclusive with Persistent (flutter
 *    paused while Persistent active; counter resets when Persistent closes).
 *  · Sensor List "Threshold Pending": needs validMin/validMax to be monitored.
 */
const lesson: Lesson = {
  id: 'sensor-health-out-of-range',
  moduleId: 'module-13-sensor-health',
  lessonNumber: 4,
  estimatedMinutes: 5,
  screenshots: {
    faults: `${BASE}/faults.jpg`,
    readings: `${BASE}/readings-oor.jpg`,
    sensorList: `${BASE}/sensor-list.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'faults', caption: 'OUT OF RANGE — past a valid limit',
      spotlight: { top: '28%', left: '0%', width: '50%', height: '11%' },
    },
    {
      mode: 'detail', screenshot: 'readings', caption: 'Persistent — 3 in a row, out',
      spotlight: { top: '30%', left: '69%', width: '30%', height: '34%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Fluttering — 3+ trips in 30 min',
      spotlight: { top: '28%', left: '0%', width: '50%', height: '11%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'The two are mutually exclusive',
      spotlight: { top: '40%', left: '69%', width: '30%', height: '30%' },
    },
    {
      mode: 'detail', screenshot: 'sensorList', caption: 'No range set → Threshold Pending',
      spotlight: { top: '30%', left: '15%', width: '84%', height: '8%' },
    },
  ],
  content: {
    en: {
      title: 'Sensor-level:<br><em>Out of Range.</em>',
      subtitle:
        'When a reading crosses its valid limits, the system tells apart two very different stories — a sensor stuck in a bad state, and one that keeps flickering across the line. Here’s how to read each.',
      chapter: 'Sensor Health · Sensor-level fault',
      steps: [
        {
          label: 'The basics', title: 'Past a valid limit',
          body: "Every sensor has a configured <strong>Valid Min</strong> and <strong>Valid Max</strong>. Each reading is checked against them, and when readings cross that line the system raises an <strong>OUT OF RANGE</strong> fault — but not on a single blip. It distinguishes two patterns: <strong>Persistent</strong> (stuck out) and <strong>Fluttering</strong> (bouncing across). The badge on each row tells you which.",
          voice: "Every sensor has a configured valid minimum and valid maximum. Each reading is checked against those limits, and when readings cross the line the system raises an Out of Range fault. But — and this matters — it never fires on a single blip. Instead it distinguishes two very different patterns: Persistent, where the sensor is stuck out of range, and Fluttering, where it keeps bouncing across the line. The badge on each fault row tells you which one you're looking at.",
        },
        {
          label: 'Persistent', title: 'Persistent — stuck in a bad state',
          body: "<strong>Persistent</strong> means the sensor is <strong>consistently</strong> outside its range — a real, ongoing bad condition, not a spike. The rule: <strong>3 consecutive readings</strong> outside the valid range and the fault <strong>opens</strong>. It <strong>closes</strong> only after the sensor is back in range for <strong>3 consecutive readings</strong>. On the readings chart you'll see the line sitting clearly outside the shaded valid band.",
          voice: "Persistent means the sensor is consistently outside its range — a real, ongoing bad condition, not just a momentary spike. The rule is clean: three consecutive readings outside the valid range, and the Persistent fault opens. And it closes only after the sensor comes back and stays in range for three consecutive readings. On the readings chart, you'll see the line sitting clearly outside the shaded valid band — for example a pH sensor with a valid range of six to nine reading ten-point-two, ten-point-five, ten-point-one three times in a row.",
          tip: { type: 'tipLabel', text: 'Persistent = the sensor is genuinely off. Investigate the process or the probe — the numbers are real.' },
        },
        {
          label: 'Fluttering', title: 'Fluttering — bouncing across the line',
          body: "<strong>Fluttering</strong> is different: the sensor <strong>does</strong> come back in range, but keeps crossing out again. The system counts <strong>trips</strong> — each time it goes from in-range to out-of-range. A <strong>30-minute window</strong> starts on the first trip; <strong>3 or more trips</strong> inside that window opens a Fluttering fault. It <strong>closes</strong> once the sensor stays in range continuously for <strong>30 minutes</strong>. Only in→out crossings count — sitting out doesn't add trips.",
          voice: "Fluttering is a different story. Here the sensor does come back into range, but it keeps crossing out again. The system counts trips — each time the reading goes from in-range to out-of-range counts as one trip. A thirty-minute window starts on the first trip, and if three or more trips happen inside that window, a Fluttering fault opens. It closes once the sensor stays in range continuously for a full thirty minutes. And note — only in-to-out crossings count as trips. A sensor that just sits out of range isn't fluttering, it's persistent.",
        },
        {
          label: 'The rule', title: 'The two can’t both be open',
          body: "Persistent and Fluttering are <strong>mutually exclusive</strong> — a sensor that's steadily out of range isn't oscillating. So while a <strong>Persistent fault is active, Fluttering detection is paused</strong>. When the Persistent fault resolves, the <strong>flutter counter resets to zero</strong> and has to rebuild from scratch. That's why you'll never see both badges on the same sensor at once.",
          voice: "There's one rule that ties these two together: they are mutually exclusive. A sensor that's steadily out of range isn't oscillating — so while a Persistent fault is active, Fluttering detection is paused entirely. And when that Persistent fault finally resolves, the flutter counter resets to zero and has to rebuild from scratch. That's exactly why you'll never see both a Persistent and a Fluttering badge on the same sensor at the same time.",
          tip: { type: 'rememberLabel', text: 'One sensor, one OOR fault at a time — Persistent takes priority and pauses flutter counting.' },
        },
        {
          label: 'Threshold', title: 'No range set → Threshold Pending',
          body: "None of this works without a range. A sensor with no <strong>Valid Min / Max</strong> configured <strong>can't be monitored</strong> — it shows as <strong>Threshold Pending</strong> on the Sensor List and feeds the <strong>No Range Config</strong> count on the home dashboard. Configure its valid range and it immediately joins Stuck and Out-of-Range monitoring. Clearing this list is the single highest-leverage thing the monitoring team does — no range, no coverage.",
          voice: "One last thing — and it's the foundation for everything in this module. None of this detection works without a range. A sensor with no valid minimum and maximum configured simply can't be monitored. It shows up as Threshold Pending on the Sensor List, and it's what feeds the No Range Config count you saw on the home dashboard. The moment you configure its valid range, it immediately joins both Stuck and Out-of-Range monitoring. So clearing this list is the single highest-leverage thing the monitoring team does — because if there's no range, there's no coverage. That completes the Sensor Health module.",
          tip: { type: 'upNextLabel', text: 'That’s Sensor Health — one plant-level fault, three sensor-level, and the ranges that power them all.' },
        },
      ],
    },
    hi: {
      title: 'सेंसर-स्तर:<br><em>Out of Range.</em>',
      subtitle:
        'जब रीडिंग अपनी वैध सीमाएँ पार करती है, सिस्टम दो बहुत अलग कहानियाँ पहचानता है — एक ख़राब स्थिति में अटका सेंसर, और एक जो बार-बार रेखा के आर-पार टिमटिमाता है। हर एक को पढ़ना यहाँ सीखिए।',
      chapter: 'Sensor Health · सेंसर-स्तरीय फ़ॉल्ट',
      steps: [
        {
          label: 'बुनियाद', title: 'वैध सीमा के पार',
          body: "हर सेंसर की एक कॉन्फ़िगर की गई <strong>Valid Min</strong> और <strong>Valid Max</strong> होती है। हर रीडिंग उनके सामने जाँची जाती है, और जब रीडिंग वह रेखा पार करती है तो सिस्टम <strong>OUT OF RANGE</strong> फ़ॉल्ट उठाता है — पर एक झटके पर नहीं। यह दो पैटर्न पहचानता है: <strong>Persistent</strong> (बाहर अटका) और <strong>Fluttering</strong> (आर-पार उछलता)। हर पंक्ति का बैज बताता है कौन-सा।",
          voice: "हर सेंसर की एक कॉन्फ़िगर की गई वैध न्यूनतम और वैध अधिकतम होती है। हर रीडिंग उन सीमाओं के सामने जाँची जाती है, और जब रीडिंग रेखा पार करती है तो सिस्टम Out of Range फ़ॉल्ट उठाता है। पर — और यह मायने रखता है — यह कभी एक झटके पर फ़ायर नहीं होता। बल्कि यह दो बहुत अलग पैटर्न पहचानता है: Persistent, जहाँ सेंसर रेंज के बाहर अटका है, और Fluttering, जहाँ यह बार-बार रेखा के आर-पार उछलता है। हर फ़ॉल्ट पंक्ति का बैज बताता है कि आप कौन-सा देख रहे हैं।",
        },
        {
          label: 'Persistent', title: 'Persistent — ख़राब स्थिति में अटका',
          body: "<strong>Persistent</strong> का मतलब है सेंसर <strong>लगातार</strong> अपनी रेंज के बाहर है — एक असली, चलती ख़राब स्थिति, झटका नहीं। नियम: <strong>3 लगातार रीडिंग</strong> वैध रेंज के बाहर और फ़ॉल्ट <strong>खुल</strong> जाता है। यह तभी <strong>बंद</strong> होता है जब सेंसर <strong>3 लगातार रीडिंग</strong> तक रेंज में वापस रहे। readings chart पर आपको रेखा छायांकित वैध बैंड के साफ़ बाहर दिखेगी।",
          voice: "Persistent का मतलब है सेंसर लगातार अपनी रेंज के बाहर है — एक असली, चलती ख़राब स्थिति, सिर्फ़ पल भर का झटका नहीं। नियम साफ़ है: तीन लगातार रीडिंग वैध रेंज के बाहर, और Persistent फ़ॉल्ट खुल जाता है। और यह तभी बंद होता है जब सेंसर वापस आकर तीन लगातार रीडिंग तक रेंज में रहे। readings chart पर आपको रेखा छायांकित वैध बैंड के साफ़ बाहर दिखेगी — उदाहरण के लिए छह से नौ की वैध रेंज वाला pH सेंसर लगातार तीन बार दस-दशमलव-दो, दस-दशमलव-पाँच, दस-दशमलव-एक पढ़ रहा हो।",
          tip: { type: 'tipLabel', text: 'Persistent = सेंसर सचमुच ग़लत है। प्रोसेस या प्रोब जाँचें — संख्याएँ असली हैं।' },
        },
        {
          label: 'Fluttering', title: 'Fluttering — रेखा के आर-पार उछलता',
          body: "<strong>Fluttering</strong> अलग है: सेंसर रेंज में वापस आता <strong>तो</strong> है, पर बार-बार फिर बाहर निकलता है। सिस्टम <strong>trips</strong> गिनता है — हर बार जब यह in-range से out-of-range जाता है। पहली trip पर एक <strong>30-मिनट विंडो</strong> शुरू होती है; उस विंडो में <strong>3 या ज़्यादा trips</strong> एक Fluttering फ़ॉल्ट खोलती हैं। यह तभी <strong>बंद</strong> होता है जब सेंसर लगातार <strong>30 मिनट</strong> रेंज में रहे। सिर्फ़ in→out क्रॉसिंग गिनी जाती हैं — बाहर बैठे रहना trip नहीं जोड़ता।",
          voice: "Fluttering एक अलग कहानी है। यहाँ सेंसर रेंज में वापस आता तो है, पर बार-बार फिर बाहर निकलता रहता है। सिस्टम trips गिनता है — हर बार जब रीडिंग in-range से out-of-range जाती है वह एक trip गिनी जाती है। पहली trip पर एक तीस-मिनट विंडो शुरू होती है, और अगर उस विंडो के अंदर तीन या ज़्यादा trips होती हैं, तो एक Fluttering फ़ॉल्ट खुल जाता है। यह तभी बंद होता है जब सेंसर पूरे तीस मिनट लगातार रेंज में रहे। और ध्यान दें — सिर्फ़ in-से-out क्रॉसिंग trips गिनी जाती हैं। जो सेंसर बस रेंज के बाहर बैठा रहता है वह fluttering नहीं, persistent है।",
        },
        {
          label: 'नियम', title: 'दोनों एक साथ नहीं खुल सकते',
          body: "Persistent और Fluttering <strong>परस्पर अनन्य</strong> हैं — जो सेंसर स्थिर रूप से रेंज के बाहर है वह दोल नहीं रहा। तो जब तक <strong>Persistent फ़ॉल्ट सक्रिय है, Fluttering पहचान रुकी रहती है</strong>। जब Persistent फ़ॉल्ट हल होता है, <strong>flutter काउंटर शून्य पर रीसेट</strong> हो जाता है और शुरू से बनना पड़ता है। इसीलिए आप एक ही सेंसर पर दोनों बैज एक साथ कभी नहीं देखेंगे।",
          voice: "एक नियम इन दोनों को जोड़ता है: ये परस्पर अनन्य हैं। जो सेंसर स्थिर रूप से रेंज के बाहर है वह दोल नहीं रहा — तो जब तक Persistent फ़ॉल्ट सक्रिय है, Fluttering पहचान पूरी तरह रुकी रहती है। और जब वह Persistent फ़ॉल्ट आख़िरकार हल होता है, flutter काउंटर शून्य पर रीसेट हो जाता है और शुरू से बनना पड़ता है। ठीक इसीलिए आप एक ही सेंसर पर एक साथ Persistent और Fluttering दोनों बैज कभी नहीं देखेंगे।",
          tip: { type: 'rememberLabel', text: 'एक सेंसर, एक बार में एक OOR फ़ॉल्ट — Persistent को प्राथमिकता, और यह flutter गिनती रोक देता है।' },
        },
        {
          label: 'थ्रेशोल्ड', title: 'रेंज सेट नहीं → Threshold Pending',
          body: "रेंज के बिना यह कुछ भी काम नहीं करता। जिस सेंसर की <strong>Valid Min / Max</strong> कॉन्फ़िगर नहीं है उसे <strong>मॉनिटर नहीं किया जा सकता</strong> — वह Sensor List पर <strong>Threshold Pending</strong> दिखता है और होम डैशबोर्ड की <strong>No Range Config</strong> गिनती में जुड़ता है। उसकी वैध रेंज कॉन्फ़िगर करें और वह तुरंत Stuck और Out-of-Range निगरानी में शामिल हो जाता है। इस सूची को साफ़ करना मॉनिटरिंग टीम का सबसे असरदार काम है — रेंज नहीं, तो कवरेज नहीं।",
          voice: "एक आख़िरी बात — और यह इस पूरे मॉड्यूल की बुनियाद है। रेंज के बिना यह कोई पहचान काम नहीं करती। जिस सेंसर की वैध न्यूनतम और अधिकतम कॉन्फ़िगर नहीं है उसे बस मॉनिटर नहीं किया जा सकता। वह Sensor List पर Threshold Pending दिखता है, और यही होम डैशबोर्ड पर देखी गई No Range Config गिनती में जुड़ता है। जैसे ही आप उसकी वैध रेंज कॉन्फ़िगर करते हैं, वह तुरंत Stuck और Out-of-Range दोनों निगरानी में शामिल हो जाता है। तो इस सूची को साफ़ करना मॉनिटरिंग टीम का सबसे असरदार काम है — क्योंकि अगर रेंज नहीं, तो कवरेज नहीं। यह Sensor Health मॉड्यूल पूरा करता है।",
          tip: { type: 'upNextLabel', text: 'यह रहा Sensor Health — एक प्लांट-स्तरीय फ़ॉल्ट, तीन सेंसर-स्तरीय, और वे रेंज जो सबको चलाती हैं।' },
        },
      ],
    },
    ta: {
      title: 'சென்சார் மட்டம்:<br><em>Out of Range.</em>',
      subtitle:
        'ஒரு அளவீடு அதன் செல்லுபடி வரம்புகளைத் தாண்டும்போது, சிஸ்டம் இரு வேறுபட்ட கதைகளை வேறுபடுத்துகிறது — ஒரு மோசமான நிலையில் சிக்கிய சென்சார், மற்றும் கோட்டைத் தொடர்ந்து கடந்து மினுமினுக்கும் ஒன்று. ஒவ்வொன்றையும் படிப்பது எப்படி என்பது இங்கே.',
      chapter: 'Sensor Health · சென்சார்-மட்டக் கோளாறு',
      steps: [
        {
          label: 'அடிப்படை', title: 'செல்லுபடி வரம்பைத் தாண்டி',
          body: "ஒவ்வொரு சென்சாருக்கும் அமைக்கப்பட்ட <strong>Valid Min</strong> மற்றும் <strong>Valid Max</strong> உண்டு. ஒவ்வொரு அளவீடும் அவற்றுக்கு எதிராகச் சரிபார்க்கப்படும், அளவீடுகள் அந்தக் கோட்டைக் கடந்தால் சிஸ்டம் <strong>OUT OF RANGE</strong> கோளாறு எழுப்பும் — ஆனால் ஒரே ஒரு தடுமாற்றத்தில் அல்ல. இது இரு வடிவங்களை வேறுபடுத்தும்: <strong>Persistent</strong> (வெளியே சிக்கியது) மற்றும் <strong>Fluttering</strong> (குறுக்கே தாவுவது). ஒவ்வொரு வரிசையின் பேட்ஜ் எது என்பதைச் சொல்லும்.",
          voice: "ஒவ்வொரு சென்சாருக்கும் அமைக்கப்பட்ட செல்லுபடி குறைந்தபட்சமும் அதிகபட்சமும் உண்டு. ஒவ்வொரு அளவீடும் அந்த வரம்புகளுக்கு எதிராகச் சரிபார்க்கப்படும், அளவீடுகள் கோட்டைக் கடந்தால் சிஸ்டம் Out of Range கோளாறு எழுப்பும். ஆனால் — இது முக்கியம் — இது ஒருபோதும் ஒரே ஒரு தடுமாற்றத்தில் எழுப்பாது. மாறாக இது இரு மிக வேறுபட்ட வடிவங்களை வேறுபடுத்தும்: Persistent, சென்சார் வரம்புக்கு வெளியே சிக்கியிருக்கும் நிலை, மற்றும் Fluttering, அது தொடர்ந்து கோட்டைக் குறுக்கே தாவும் நிலை. ஒவ்வொரு கோளாறு வரிசையின் பேட்ஜ் நீங்கள் எதைப் பார்க்கிறீர்கள் என்பதைச் சொல்லும்.",
        },
        {
          label: 'Persistent', title: 'Persistent — மோசமான நிலையில் சிக்கியது',
          body: "<strong>Persistent</strong> என்றால் சென்சார் <strong>தொடர்ந்து</strong> தன் வரம்புக்கு வெளியே உள்ளது — ஒரு உண்மையான, தொடரும் மோசமான நிலை, தடுமாற்றமல்ல. விதி: <strong>3 தொடர்ச்சியான அளவீடுகள்</strong> வரம்புக்கு வெளியே, கோளாறு <strong>திறக்கும்</strong>. சென்சார் <strong>3 தொடர்ச்சியான அளவீடுகள்</strong> வரம்புக்குள் திரும்பியபின்னரே அது <strong>மூடும்</strong>. readings chart-இல் கோடு நிழலிட்ட செல்லுபடி பட்டைக்குத் தெளிவாக வெளியே இருப்பதைக் காண்பீர்கள்.",
          voice: "Persistent என்றால் சென்சார் தொடர்ந்து தன் வரம்புக்கு வெளியே உள்ளது — ஒரு உண்மையான, தொடரும் மோசமான நிலை, வெறும் கண நேரத் தடுமாற்றமல்ல. விதி தெளிவானது: மூன்று தொடர்ச்சியான அளவீடுகள் வரம்புக்கு வெளியே, Persistent கோளாறு திறக்கும். சென்சார் திரும்பி வந்து மூன்று தொடர்ச்சியான அளவீடுகள் வரம்புக்குள் இருந்தபின்னரே அது மூடும். readings chart-இல் கோடு நிழலிட்ட செல்லுபடி பட்டைக்குத் தெளிவாக வெளியே இருப்பதைக் காண்பீர்கள் — உதாரணமாக ஆறு முதல் ஒன்பது செல்லுபடி வரம்புள்ள pH சென்சார் தொடர்ச்சியாக மூன்று முறை பத்து-புள்ளி-இரண்டு, பத்து-புள்ளி-ஐந்து, பத்து-புள்ளி-ஒன்று படித்தால்.",
          tip: { type: 'tipLabel', text: 'Persistent = சென்சார் உண்மையிலேயே தவறாக உள்ளது. செயல்முறை அல்லது ஆய்வியை விசாரியுங்கள் — எண்கள் உண்மையானவை.' },
        },
        {
          label: 'Fluttering', title: 'Fluttering — கோட்டைக் குறுக்கே தாவுவது',
          body: "<strong>Fluttering</strong> வேறு: சென்சார் வரம்புக்குள் திரும்பி <strong>வருகிறது</strong>, ஆனால் தொடர்ந்து மீண்டும் வெளியே செல்கிறது. சிஸ்டம் <strong>trips</strong> எண்ணும் — ஒவ்வொரு முறை in-range-இலிருந்து out-of-range செல்லும்போது. முதல் trip-இல் ஒரு <strong>30-நிமிட சாளரம்</strong> தொடங்கும்; அந்தச் சாளரத்தில் <strong>3 அல்லது அதற்கு மேற்பட்ட trips</strong> ஒரு Fluttering கோளாறைத் திறக்கும். சென்சார் தொடர்ந்து <strong>30 நிமிடம்</strong> வரம்புக்குள் இருந்தபின்னரே அது <strong>மூடும்</strong>. in→out கடப்புகள் மட்டுமே எண்ணப்படும் — வெளியே இருப்பது trips சேர்க்காது.",
          voice: "Fluttering வேறு கதை. இங்கே சென்சார் வரம்புக்குள் திரும்பி வருகிறது, ஆனால் தொடர்ந்து மீண்டும் வெளியே செல்கிறது. சிஸ்டம் trips எண்ணும் — அளவீடு in-range-இலிருந்து out-of-range செல்லும் ஒவ்வொரு முறையும் ஒரு trip. முதல் trip-இல் ஒரு முப்பது-நிமிட சாளரம் தொடங்கும், அந்தச் சாளரத்துக்குள் மூன்று அல்லது அதற்கு மேற்பட்ட trips நடந்தால், ஒரு Fluttering கோளாறு திறக்கும். சென்சார் முழு முப்பது நிமிடம் தொடர்ந்து வரம்புக்குள் இருந்தபின்னரே அது மூடும். கவனியுங்கள் — in-இலிருந்து-out கடப்புகள் மட்டுமே trips ஆக எண்ணப்படும். வரம்புக்கு வெளியே வெறுமனே அமர்ந்திருக்கும் சென்சார் fluttering அல்ல, persistent.",
        },
        {
          label: 'விதி', title: 'இரண்டும் ஒருங்கே திறக்க முடியாது',
          body: "Persistent-ம் Fluttering-ம் <strong>பரஸ்பர விலக்கானவை</strong> — நிலையாக வரம்புக்கு வெளியே உள்ள சென்சார் அலைவதில்லை. எனவே <strong>Persistent கோளாறு செயலில் இருக்கும்வரை, Fluttering கண்டறிதல் இடைநிறுத்தப்படும்</strong>. Persistent கோளாறு தீர்ந்ததும், <strong>flutter எண்ணி பூஜ்ஜியத்துக்கு மீட்டமைந்து</strong> புதிதாக உருவாக வேண்டும். அதனால்தான் ஒரே சென்சாரில் இரு பேட்ஜ்களையும் ஒரே நேரத்தில் ஒருபோதும் காணமாட்டீர்கள்.",
          voice: "இந்த இரண்டையும் இணைக்கும் ஒரு விதி உண்டு: அவை பரஸ்பர விலக்கானவை. நிலையாக வரம்புக்கு வெளியே உள்ள சென்சார் அலைவதில்லை — எனவே Persistent கோளாறு செயலில் இருக்கும்வரை, Fluttering கண்டறிதல் முழுவதுமாக இடைநிறுத்தப்படும். அந்த Persistent கோளாறு இறுதியில் தீர்ந்ததும், flutter எண்ணி பூஜ்ஜியத்துக்கு மீட்டமைந்து புதிதாக உருவாக வேண்டும். சரியாக அதனால்தான் ஒரே சென்சாரில் Persistent-ஐயும் Fluttering-ஐயும் ஒரே நேரத்தில் ஒருபோதும் காணமாட்டீர்கள்.",
          tip: { type: 'rememberLabel', text: 'ஒரு சென்சார், ஒரு நேரத்தில் ஒரு OOR கோளாறு — Persistent-க்கு முன்னுரிமை, அது flutter எண்ணிக்கையை இடைநிறுத்தும்.' },
        },
        {
          label: 'த்ரெஷோல்டு', title: 'வரம்பு அமைக்கவில்லை → Threshold Pending',
          body: "வரம்பு இல்லாமல் இதில் எதுவும் வேலை செய்யாது. <strong>Valid Min / Max</strong> அமைக்கப்படாத சென்சாரைக் <strong>கண்காணிக்க முடியாது</strong> — அது Sensor List-இல் <strong>Threshold Pending</strong> எனக் காட்டும், முகப்பு டாஷ்போர்டின் <strong>No Range Config</strong> எண்ணிக்கையையும் ஊட்டும். அதன் செல்லுபடி வரம்பை அமைத்ததும் அது உடனே Stuck மற்றும் Out-of-Range கண்காணிப்பில் சேரும். இந்தப் பட்டியலைச் சுத்தம் செய்வதே கண்காணிப்புக் குழு செய்யும் மிக அதிக தாக்கமுள்ள வேலை — வரம்பு இல்லை எனில், கவரேஜ் இல்லை.",
          voice: "ஒரு கடைசி விஷயம் — இது இந்த முழு மாட்யூலின் அடித்தளம். வரம்பு இல்லாமல் இந்தக் கண்டறிதல் எதுவும் வேலை செய்யாது. செல்லுபடி குறைந்தபட்சமும் அதிகபட்சமும் அமைக்கப்படாத சென்சாரை வெறுமனே கண்காணிக்க முடியாது. அது Sensor List-இல் Threshold Pending எனக் காட்டும், முகப்பு டாஷ்போர்டில் நீங்கள் பார்த்த No Range Config எண்ணிக்கையையும் ஊட்டுவது இதுவே. அதன் செல்லுபடி வரம்பை அமைத்த நொடியில், அது உடனே Stuck மற்றும் Out-of-Range இரண்டு கண்காணிப்பிலும் சேரும். எனவே இந்தப் பட்டியலைச் சுத்தம் செய்வதே கண்காணிப்புக் குழு செய்யும் மிக அதிக தாக்கமுள்ள வேலை — ஏனெனில் வரம்பு இல்லை எனில், கவரேஜ் இல்லை. இதுடன் Sensor Health மாட்யூல் நிறைவடைகிறது.",
          tip: { type: 'upNextLabel', text: 'இது Sensor Health — ஒரு ஆலை-மட்டக் கோளாறு, மூன்று சென்சார்-மட்டக் கோளாறுகள், அனைத்தையும் இயக்கும் வரம்புகள்.' },
        },
      ],
    },
    mr: {
      title: 'सेन्सर-पातळी:<br><em>Out of Range.</em>',
      subtitle:
        'रीडिंग आपल्या वैध मर्यादा ओलांडते तेव्हा सिस्टम दोन अगदी वेगळ्या कहाण्या ओळखते — वाईट स्थितीत अडकलेला सेन्सर, आणि रेषेच्या आरपार सतत लुकलुकणारा एक. प्रत्येक कशी वाचायची ते इथे.',
      chapter: 'Sensor Health · सेन्सर-पातळीचा फॉल्ट',
      steps: [
        {
          label: 'मूलतत्त्व', title: 'वैध मर्यादेपलीकडे',
          body: "प्रत्येक सेन्सरची एक कॉन्फिगर केलेली <strong>Valid Min</strong> आणि <strong>Valid Max</strong> असते. प्रत्येक रीडिंग त्यांच्याशी तपासले जाते, आणि रीडिंग ती रेषा ओलांडताच सिस्टम <strong>OUT OF RANGE</strong> फॉल्ट उठवते — पण एका झटक्यावर नाही. ते दोन पॅटर्न ओळखते: <strong>Persistent</strong> (बाहेर अडकलेला) आणि <strong>Fluttering</strong> (आरपार उसळणारा). प्रत्येक ओळीचा बॅज कोणता ते सांगतो.",
          voice: "प्रत्येक सेन्सरची एक कॉन्फिगर केलेली वैध किमान आणि वैध कमाल असते. प्रत्येक रीडिंग त्या मर्यादांशी तपासले जाते, आणि रीडिंग रेषा ओलांडताच सिस्टम Out of Range फॉल्ट उठवते. पण — आणि हे महत्त्वाचे — ते कधीही एका झटक्यावर फायर होत नाही. उलट ते दोन अगदी वेगळे पॅटर्न ओळखते: Persistent, जिथे सेन्सर श्रेणीबाहेर अडकलेला असतो, आणि Fluttering, जिथे तो सतत रेषेच्या आरपार उसळतो. प्रत्येक फॉल्ट ओळीचा बॅज तुम्ही कोणता पाहताय ते सांगतो.",
        },
        {
          label: 'Persistent', title: 'Persistent — वाईट स्थितीत अडकलेला',
          body: "<strong>Persistent</strong> म्हणजे सेन्सर <strong>सातत्याने</strong> आपल्या श्रेणीबाहेर आहे — एक खरी, चालू वाईट स्थिती, झटका नव्हे. नियम: <strong>3 सलग रीडिंग</strong> वैध श्रेणीबाहेर आणि फॉल्ट <strong>उघडतो</strong>. सेन्सर <strong>3 सलग रीडिंग</strong> श्रेणीत परत आल्यावरच तो <strong>बंद</strong> होतो. readings chart वर तुम्हाला रेषा छायांकित वैध पट्ट्याच्या स्पष्ट बाहेर दिसेल.",
          voice: "Persistent म्हणजे सेन्सर सातत्याने आपल्या श्रेणीबाहेर आहे — एक खरी, चालू वाईट स्थिती, फक्त क्षणिक झटका नव्हे. नियम स्वच्छ आहे: तीन सलग रीडिंग वैध श्रेणीबाहेर, आणि Persistent फॉल्ट उघडतो. आणि सेन्सर परत येऊन तीन सलग रीडिंग श्रेणीत राहिल्यावरच तो बंद होतो. readings chart वर तुम्हाला रेषा छायांकित वैध पट्ट्याच्या स्पष्ट बाहेर दिसेल — उदाहरणार्थ सहा ते नऊ वैध श्रेणी असलेला pH सेन्सर सलग तीन वेळा दहा-दशांश-दोन, दहा-दशांश-पाच, दहा-दशांश-एक वाचत असेल.",
          tip: { type: 'tipLabel', text: 'Persistent = सेन्सर खरोखर चुकीचा आहे. प्रक्रिया किंवा प्रोब तपासा — आकडे खरे आहेत.' },
        },
        {
          label: 'Fluttering', title: 'Fluttering — रेषेच्या आरपार उसळणारा',
          body: "<strong>Fluttering</strong> वेगळे आहे: सेन्सर श्रेणीत परत <strong>येतो</strong>, पण सतत पुन्हा बाहेर जातो. सिस्टम <strong>trips</strong> मोजते — प्रत्येक वेळी तो in-range वरून out-of-range जातो तेव्हा. पहिल्या trip वर एक <strong>30-मिनिटांची विंडो</strong> सुरू होते; त्या विंडोत <strong>3 किंवा अधिक trips</strong> एक Fluttering फॉल्ट उघडतात. सेन्सर सलग <strong>30 मिनिटे</strong> श्रेणीत राहिल्यावरच तो <strong>बंद</strong> होतो. फक्त in→out क्रॉसिंग मोजल्या जातात — बाहेर बसून राहणे trip जोडत नाही.",
          voice: "Fluttering ही वेगळी कहाणी आहे. इथे सेन्सर श्रेणीत परत येतो, पण सतत पुन्हा बाहेर जात राहतो. सिस्टम trips मोजते — रीडिंग in-range वरून out-of-range जाते ती प्रत्येक वेळ एक trip. पहिल्या trip वर एक तीस-मिनिटांची विंडो सुरू होते, आणि त्या विंडोत तीन किंवा अधिक trips झाल्या, तर एक Fluttering फॉल्ट उघडतो. सेन्सर पूर्ण तीस मिनिटे सलग श्रेणीत राहिल्यावरच तो बंद होतो. आणि लक्षात ठेवा — फक्त in-वरून-out क्रॉसिंग trips म्हणून मोजल्या जातात. जो सेन्सर फक्त श्रेणीबाहेर बसून राहतो तो fluttering नाही, persistent आहे.",
        },
        {
          label: 'नियम', title: 'दोन्ही एकाच वेळी उघडू शकत नाहीत',
          body: "Persistent आणि Fluttering <strong>परस्पर वर्जक</strong> आहेत — जो सेन्सर स्थिरपणे श्रेणीबाहेर आहे तो दोलायमान नसतो. म्हणून <strong>Persistent फॉल्ट सक्रिय असेपर्यंत, Fluttering ओळख थांबवली जाते</strong>. Persistent फॉल्ट सुटल्यावर, <strong>flutter काउंटर शून्यावर रीसेट</strong> होतो आणि पुन्हा शून्यापासून तयार व्हावा लागतो. म्हणूनच तुम्ही एकाच सेन्सरवर दोन्ही बॅज एकाच वेळी कधीही पाहणार नाही.",
          voice: "एक नियम या दोघांना जोडतो: ते परस्पर वर्जक आहेत. जो सेन्सर स्थिरपणे श्रेणीबाहेर आहे तो दोलायमान नसतो — म्हणून Persistent फॉल्ट सक्रिय असेपर्यंत, Fluttering ओळख पूर्णपणे थांबवली जाते. आणि तो Persistent फॉल्ट अखेर सुटल्यावर, flutter काउंटर शून्यावर रीसेट होतो आणि पुन्हा शून्यापासून तयार व्हावा लागतो. नेमक्या याच कारणाने तुम्ही एकाच सेन्सरवर Persistent आणि Fluttering दोन्ही बॅज एकाच वेळी कधीही पाहणार नाही.",
          tip: { type: 'rememberLabel', text: 'एक सेन्सर, एका वेळी एक OOR फॉल्ट — Persistent ला प्राधान्य, आणि तो flutter मोजणी थांबवतो.' },
        },
        {
          label: 'थ्रेशोल्ड', title: 'श्रेणी सेट नाही → Threshold Pending',
          body: "श्रेणीशिवाय यातले काहीही चालत नाही. ज्या सेन्सरची <strong>Valid Min / Max</strong> कॉन्फिगर नाही त्याला <strong>मॉनिटर करता येत नाही</strong> — तो Sensor List वर <strong>Threshold Pending</strong> दिसतो आणि होम डॅशबोर्डवरील <strong>No Range Config</strong> मोजणीत भर घालतो. त्याची वैध श्रेणी कॉन्फिगर करा आणि तो लगेच Stuck आणि Out-of-Range निगराणीत सामील होतो. ही यादी साफ करणे हे मॉनिटरिंग टीमचे सर्वात प्रभावी काम आहे — श्रेणी नाही, तर कव्हरेज नाही.",
          voice: "एक शेवटची गोष्ट — आणि ती या संपूर्ण मॉड्यूलचा पाया आहे. श्रेणीशिवाय ही कोणतीही ओळख चालत नाही. वैध किमान आणि कमाल कॉन्फिगर नसलेल्या सेन्सरला फक्त मॉनिटर करता येत नाही. तो Sensor List वर Threshold Pending दिसतो, आणि होम डॅशबोर्डवर तुम्ही पाहिलेल्या No Range Config मोजणीत भर घालणारा तोच. त्याची वैध श्रेणी कॉन्फिगर करताच, तो लगेच Stuck आणि Out-of-Range दोन्ही निगराणीत सामील होतो. म्हणून ही यादी साफ करणे हे मॉनिटरिंग टीमचे सर्वात प्रभावी काम आहे — कारण श्रेणी नाही, तर कव्हरेज नाही. यासह Sensor Health मॉड्यूल पूर्ण होतो.",
          tip: { type: 'upNextLabel', text: 'हा झाला Sensor Health — एक प्लांट-पातळीचा फॉल्ट, तीन सेन्सर-पातळीचे, आणि त्या सर्वांना चालना देणाऱ्या श्रेणी.' },
        },
      ],
    },
  },
};

export default lesson;
