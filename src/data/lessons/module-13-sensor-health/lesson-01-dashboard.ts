import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/sensor-health-dashboard`;

/**
 * M13 · Sensor Health — L1: reading the dashboard. (internal only)
 * Built from the monitoring-team screen recording. Real 1280px frames as detail
 * screenshots (spotlight-driven, no guide cursor — the recording already has an
 * OS pointer). Teaches the navigation first: the plant list, opening a plant,
 * the Faults view (summary chips, Active/Fixed/Sensor-List tabs, fault rows, and
 * the detail panel with the readings chart + event timeline), then hands off to
 * the four fault-type lessons.
 */
const lesson: Lesson = {
  id: 'sensor-health-dashboard',
  moduleId: 'module-13-sensor-health',
  lessonNumber: 1,
  estimatedMinutes: 4,
  screenshots: {
    list: `${BASE}/list.jpg`,
    faults: `${BASE}/faults.jpg`,
    fixed: `${BASE}/fixed-stuck.jpg`,
    sensorList: `${BASE}/sensor-list.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'list', caption: 'Every plant, and its live fault counts',
      spotlight: { top: '13%', left: '62%', width: '37%', height: '44%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Open a plant — the Faults view',
      spotlight: { top: '9%', left: '68%', width: '31%', height: '8%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Active faults — one row per open flag',
      spotlight: { top: '28%', left: '0%', width: '68%', height: '10%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Click a fault — the full story',
      spotlight: { top: '26%', left: '69%', width: '30%', height: '60%' },
    },
    {
      mode: 'detail', screenshot: 'fixed', caption: 'Fixed Faults — the resolved history',
      spotlight: { top: '17%', left: '1%', width: '22%', height: '7%' },
    },
    {
      mode: 'detail', screenshot: 'sensorList', caption: 'Sensor List — what still needs a range',
      spotlight: { top: '30%', left: '15%', width: '84%', height: '8%' },
    },
  ],
  content: {
    en: {
      title: 'The <em>Sensor Health</em><br>dashboard.',
      subtitle:
        'Your monitoring cockpit — every plant, every open fault, in one place. This first lesson is the lay of the land; the four that follow explain each fault the system raises.',
      chapter: 'Sensor Health · The dashboard',
      steps: [
        {
          label: 'The list', title: 'Every plant, at a glance',
          body: "<strong>Sensor Health</strong> opens on one row per plant. Each row tells you the essentials — a status <strong>dot</strong>, the <strong>Workspace</strong>, whether it's <strong>Online</strong>, and its <strong>Last Contact</strong> — then the counts that matter: <strong>Stuck</strong>, <strong>Out of Range</strong>, <strong>No Range Config</strong> (sensors we can't watch yet) and <strong>Total Faults</strong>. Sort by Total Faults and you know exactly where to look first. Filter by <strong>Status, Workspace</strong> or <strong>Asset</strong> up top.",
          voice: "Welcome to Sensor Health — the monitoring team's cockpit. It opens on one row per plant. Each row gives you the essentials: a status dot, the workspace, whether the plant is online, and when we last heard from it. Then the numbers that matter — how many sensors are Stuck, how many are Out of Range, how many have No Range Config yet, and the Total Faults. Sort by total faults and you know exactly which plant to open first. The filters up top narrow it by status, workspace or asset.",
        },
        {
          label: 'Open a plant', title: 'Open a plant to see its faults',
          body: "Click any plant to drop into its <strong>Faults</strong> view. The header repeats the essentials — name, <strong>Online</strong>, last contact — and the chips on the right give you the tally at a glance: <strong>Active Faults</strong>, <strong>Stuck</strong>, <strong>Out of Range</strong>, and <strong>Threshold Due</strong> (sensors still waiting on a valid range).",
          voice: "Click any plant — here, METL WTP — and you drop into its Faults view. The header repeats the essentials: the plant name, that it's online, and the last contact time. The chips on the right give you the tally at a glance — active faults, how many are stuck, how many out of range, and threshold due, which is the sensors still waiting on a valid range before we can watch them.",
        },
        {
          label: 'Active faults', title: 'One row per open fault',
          body: "The <strong>Active Faults</strong> tab lists everything open right now. Each row leads with a <strong>badge</strong> — <strong>STUCK</strong> or <strong>OUT OF RANGE</strong> (with a <strong>Persistent</strong> or <strong>Fluttering</strong> tag) — then the sensor, its tag, its reading against the valid range (or <strong>Frozen at…</strong> when stuck), and how long it's been active. Use the <strong>Stuck</strong> and <strong>Out of Range</strong> chips to filter.",
          voice: "The Active Faults tab lists everything open right now. Every row leads with a badge — Stuck, or Out of Range with a Persistent or Fluttering tag — then the sensor and its tag, its current reading against the valid range, or Frozen at a value when it's stuck, and how long the fault has been active. The Stuck and Out of Range chips let you filter the list down to one type.",
        },
        {
          label: 'The detail', title: 'Click a fault for the full story',
          body: "Select a fault and the panel on the right opens up. You get the <strong>current value</strong>, a <strong>history</strong> — total events, average duration, percent of time in fault, and the most common type — a <strong>readings chart</strong> with the valid range drawn in so you can see exactly when it drifted, and an <strong>event timeline</strong> logging every open and close. This is where you investigate before you act.",
          voice: "Select any fault and the panel on the right opens up. You get the current value, a short history — total events, average duration, the percent of time this sensor has spent in fault, and its most common fault type. Below that, a readings chart with the valid range drawn in, so you can see exactly when it drifted out. And an event timeline logging every open and close. This panel is where you investigate a fault before acting on it.",
          tip: { type: 'tipLabel', text: 'The readings chart shades the valid range — points outside it are the ones that raised the fault.' },
        },
        {
          label: 'Fixed faults', title: 'Fixed Faults — the resolved history',
          body: "The <strong>Fixed Faults</strong> tab is the same list, but for faults that have already closed — useful for spotting a sensor that keeps flapping. Everything is <strong>automatic</strong>: the system opens and closes each fault on its own. The timeline entries — <em>Started</em>, <em>Resolved</em>, <em>Back in Range</em> — are your audit trail.",
          voice: "The Fixed Faults tab is the same list, but for faults that have already closed — handy for spotting a sensor that keeps flapping in and out. Remember, everything here is automatic: the system opens and closes each fault on its own. The timeline entries — started, resolved, back in range — are your audit trail of what happened and when.",
        },
        {
          label: 'Sensor List', title: 'Sensor List — what still needs a range',
          body: "The <strong>Sensor List (Due)</strong> tab is the to-do: sensors that <strong>can't be monitored yet</strong> because their <strong>valid min / max</strong> aren't configured. These are the <strong>No Range Config</strong> and <strong>Threshold Due</strong> counts from before. Flip <strong>Threshold Pending only</strong> to see just those, set their ranges, and they join the watch. That's the tour — next, the four faults the system raises.",
          voice: "The Sensor List, marked Due, is your to-do. These are sensors we can't monitor yet because their valid minimum and maximum aren't configured — the same No Range Config and Threshold Due numbers you saw earlier. Flip on Threshold Pending only to see just those, configure their ranges, and they join the watch. That's the whole dashboard. Next, we'll walk through the four faults the system raises — one plant-level, and three at the sensor level.",
          tip: { type: 'upNextLabel', text: 'Next: Data Break — the plant-level fault that fires when a whole site goes quiet.' },
        },
      ],
    },
    hi: {
      title: '<em>Sensor Health</em><br>डैशबोर्ड।',
      subtitle:
        'आपका मॉनिटरिंग कॉकपिट — हर प्लांट, हर खुला फ़ॉल्ट, एक ही जगह। यह पहला पाठ पूरे लेआउट का परिचय है; आगे के चार पाठ हर उस फ़ॉल्ट को समझाते हैं जो सिस्टम उठाता है।',
      chapter: 'Sensor Health · डैशबोर्ड',
      steps: [
        {
          label: 'सूची', title: 'हर प्लांट, एक नज़र में',
          body: "<strong>Sensor Health</strong> हर प्लांट की एक पंक्ति के साथ खुलता है। हर पंक्ति ज़रूरी बातें बताती है — एक स्टेटस <strong>डॉट</strong>, <strong>Workspace</strong>, प्लांट <strong>Online</strong> है या नहीं, और उसका <strong>Last Contact</strong> — फिर मायने रखने वाली गिनतियाँ: <strong>Stuck</strong>, <strong>Out of Range</strong>, <strong>No Range Config</strong> (जिन्हें हम अभी नहीं देख सकते) और <strong>Total Faults</strong>। Total Faults से क्रमबद्ध करें और आपको पता चल जाता है कि पहले कहाँ देखना है। ऊपर <strong>Status, Workspace</strong> या <strong>Asset</strong> से फ़िल्टर करें।",
          voice: "Sensor Health में आपका स्वागत है — मॉनिटरिंग टीम का कॉकपिट। यह हर प्लांट की एक पंक्ति के साथ खुलता है। हर पंक्ति ज़रूरी बातें देती है: एक स्टेटस डॉट, वर्कस्पेस, प्लांट ऑनलाइन है या नहीं, और हमने आख़िरी बार कब सुना। फिर मायने रखने वाली संख्याएँ — कितने सेंसर Stuck हैं, कितने Out of Range, कितनों की अभी No Range Config है, और कुल फ़ॉल्ट। Total Faults से क्रमबद्ध करें और आपको ठीक-ठीक पता चल जाता है कि पहले कौन-सा प्लांट खोलना है। ऊपर के फ़िल्टर इसे स्टेटस, वर्कस्पेस या ऐसेट से छाँटते हैं।",
        },
        {
          label: 'प्लांट खोलें', title: 'फ़ॉल्ट देखने के लिए प्लांट खोलें',
          body: "किसी भी प्लांट पर क्लिक करें और उसके <strong>Faults</strong> व्यू में पहुँचें। हेडर ज़रूरी बातें दोहराता है — नाम, <strong>Online</strong>, last contact — और दाईं ओर के चिप्स एक नज़र में जोड़ देते हैं: <strong>Active Faults</strong>, <strong>Stuck</strong>, <strong>Out of Range</strong>, और <strong>Threshold Due</strong> (वे सेंसर जो अभी वैध रेंज का इंतज़ार कर रहे हैं)।",
          voice: "किसी भी प्लांट पर क्लिक करें — यहाँ METL WTP — और आप उसके Faults व्यू में पहुँच जाते हैं। हेडर ज़रूरी बातें दोहराता है: प्लांट का नाम, कि वह ऑनलाइन है, और आख़िरी संपर्क का समय। दाईं ओर के चिप्स एक नज़र में जोड़ देते हैं — सक्रिय फ़ॉल्ट, कितने stuck, कितने out of range, और threshold due, यानी वे सेंसर जो अभी वैध रेंज का इंतज़ार कर रहे हैं ताकि हम उन्हें देख सकें।",
        },
        {
          label: 'सक्रिय फ़ॉल्ट', title: 'हर खुले फ़ॉल्ट की एक पंक्ति',
          body: "<strong>Active Faults</strong> टैब अभी खुली हर चीज़ दिखाता है। हर पंक्ति एक <strong>बैज</strong> से शुरू होती है — <strong>STUCK</strong> या <strong>OUT OF RANGE</strong> (<strong>Persistent</strong> या <strong>Fluttering</strong> टैग के साथ) — फिर सेंसर, उसका टैग, वैध रेंज के सामने उसकी रीडिंग (या stuck होने पर <strong>Frozen at…</strong>), और वह कितनी देर से सक्रिय है। <strong>Stuck</strong> और <strong>Out of Range</strong> चिप्स से फ़िल्टर करें।",
          voice: "Active Faults टैब अभी खुली हर चीज़ की सूची है। हर पंक्ति एक बैज से शुरू होती है — Stuck, या Out of Range एक Persistent या Fluttering टैग के साथ — फिर सेंसर और उसका टैग, वैध रेंज के सामने उसकी मौजूदा रीडिंग, या stuck होने पर किसी मान पर Frozen, और फ़ॉल्ट कितनी देर से सक्रिय है। Stuck और Out of Range चिप्स सूची को एक ही प्रकार तक छाँट देते हैं।",
        },
        {
          label: 'विवरण', title: 'पूरी कहानी के लिए फ़ॉल्ट पर क्लिक करें',
          body: "कोई फ़ॉल्ट चुनें और दाईं ओर का पैनल खुल जाता है। आपको मिलता है <strong>current value</strong>, एक <strong>history</strong> — कुल इवेंट, औसत अवधि, फ़ॉल्ट में बिताए समय का प्रतिशत, और सबसे आम प्रकार — एक <strong>readings chart</strong> जिसमें वैध रेंज खींची है ताकि आप ठीक देख सकें कब भटका, और एक <strong>event timeline</strong> जो हर खुलना-बंद होना दर्ज करती है। कार्रवाई से पहले जाँच यहीं होती है।",
          voice: "कोई भी फ़ॉल्ट चुनें और दाईं ओर का पैनल खुल जाता है। आपको मिलता है current value, एक छोटी history — कुल इवेंट, औसत अवधि, इस सेंसर ने फ़ॉल्ट में कितने प्रतिशत समय बिताया, और उसका सबसे आम फ़ॉल्ट प्रकार। नीचे, वैध रेंज के साथ एक readings chart, ताकि आप ठीक देख सकें कब यह बाहर भटका। और एक event timeline जो हर खुलना और बंद होना दर्ज करती है। कार्रवाई से पहले फ़ॉल्ट की जाँच इसी पैनल में होती है।",
          tip: { type: 'tipLabel', text: 'Readings chart वैध रेंज को छायांकित करता है — उसके बाहर के बिंदु ही फ़ॉल्ट उठाते हैं।' },
        },
        {
          label: 'फ़िक्स्ड फ़ॉल्ट', title: 'Fixed Faults — सुलझा इतिहास',
          body: "<strong>Fixed Faults</strong> टैब वही सूची है, पर उन फ़ॉल्ट के लिए जो पहले ही बंद हो चुके — किसी बार-बार भटकते सेंसर को पकड़ने में मददगार। सब कुछ <strong>स्वचालित</strong> है: सिस्टम हर फ़ॉल्ट को ख़ुद खोलता और बंद करता है। टाइमलाइन प्रविष्टियाँ — <em>Started</em>, <em>Resolved</em>, <em>Back in Range</em> — आपका ऑडिट ट्रेल हैं।",
          voice: "Fixed Faults टैब वही सूची है, पर उन फ़ॉल्ट के लिए जो पहले ही बंद हो चुके — किसी ऐसे सेंसर को पकड़ने में सुविधाजनक जो बार-बार अंदर-बाहर होता रहता है। याद रखें, यहाँ सब कुछ स्वचालित है: सिस्टम हर फ़ॉल्ट को ख़ुद खोलता और बंद करता है। टाइमलाइन की प्रविष्टियाँ — started, resolved, back in range — क्या हुआ और कब, इसका आपका ऑडिट ट्रेल हैं।",
        },
        {
          label: 'सेंसर सूची', title: 'Sensor List — जिन्हें अभी रेंज चाहिए',
          body: "<strong>Sensor List (Due)</strong> टैब आपका टू-डू है: वे सेंसर जिन्हें <strong>अभी मॉनिटर नहीं किया जा सकता</strong> क्योंकि उनका <strong>valid min / max</strong> कॉन्फ़िगर नहीं है। यही पहले वाली <strong>No Range Config</strong> और <strong>Threshold Due</strong> गिनती है। <strong>Threshold Pending only</strong> चालू करें, उनकी रेंज सेट करें, और वे निगरानी में शामिल हो जाते हैं। यह रहा टूर — आगे, सिस्टम जो चार फ़ॉल्ट उठाता है।",
          voice: "Sensor List, जिस पर Due लिखा है, आपका टू-डू है। ये वे सेंसर हैं जिन्हें हम अभी मॉनिटर नहीं कर सकते क्योंकि उनका valid minimum और maximum कॉन्फ़िगर नहीं है — वही No Range Config और Threshold Due संख्याएँ जो पहले दिखीं। Threshold Pending only चालू करें ताकि केवल वही दिखें, उनकी रेंज कॉन्फ़िगर करें, और वे निगरानी में शामिल हो जाते हैं। यह रहा पूरा डैशबोर्ड। आगे, हम उन चार फ़ॉल्ट को देखेंगे जो सिस्टम उठाता है — एक प्लांट स्तर पर, और तीन सेंसर स्तर पर।",
          tip: { type: 'upNextLabel', text: 'आगे: Data Break — प्लांट-स्तरीय फ़ॉल्ट जो तब फ़ायर होता है जब पूरा साइट चुप हो जाए।' },
        },
      ],
    },
    ta: {
      title: '<em>Sensor Health</em><br>டாஷ்போர்டு.',
      subtitle:
        'உங்கள் கண்காணிப்பு காக்பிட் — ஒவ்வொரு ஆலையும், ஒவ்வொரு திறந்த கோளாறும், ஒரே இடத்தில். இந்த முதல் பாடம் ஒட்டுமொத்த அமைப்பின் அறிமுகம்; அடுத்த நான்கு பாடங்கள் சிஸ்டம் எழுப்பும் ஒவ்வொரு கோளாற்றையும் விளக்குகின்றன.',
      chapter: 'Sensor Health · டாஷ்போர்டு',
      steps: [
        {
          label: 'பட்டியல்', title: 'ஒவ்வொரு ஆலையும், ஒரே பார்வையில்',
          body: "<strong>Sensor Health</strong> ஒவ்வொரு ஆலைக்கும் ஒரு வரிசையுடன் திறக்கிறது. ஒவ்வொரு வரிசையும் அத்தியாவசியத்தைச் சொல்கிறது — ஒரு நிலை <strong>புள்ளி</strong>, <strong>Workspace</strong>, ஆலை <strong>Online</strong>-ஆ, அதன் <strong>Last Contact</strong> — பின் முக்கிய எண்ணிக்கைகள்: <strong>Stuck</strong>, <strong>Out of Range</strong>, <strong>No Range Config</strong> (இன்னும் கண்காணிக்க முடியாதவை), <strong>Total Faults</strong>. Total Faults வாரியாக வரிசைப்படுத்தினால் எங்கே முதலில் பார்ப்பது என்று தெரியும். மேலே <strong>Status, Workspace</strong> அல்லது <strong>Asset</strong> வடிகட்டவும்.",
          voice: "Sensor Health-க்கு வரவேற்கிறோம் — கண்காணிப்புக் குழுவின் காக்பிட். இது ஒவ்வொரு ஆலைக்கும் ஒரு வரிசையுடன் திறக்கிறது. ஒவ்வொரு வரிசையும் அத்தியாவசியத்தைத் தருகிறது: ஒரு நிலைப் புள்ளி, ஒர்க்ஸ்பேஸ், ஆலை ஆன்லைனில் உள்ளதா, கடைசியாக எப்போது தொடர்பு கொண்டோம். பின் முக்கிய எண்கள் — எத்தனை சென்சார்கள் Stuck, எத்தனை Out of Range, எத்தனைக்கு இன்னும் No Range Config, மொத்தக் கோளாறுகள். Total Faults வாரியாக வரிசைப்படுத்தினால், முதலில் எந்த ஆலையைத் திறப்பது என்று சரியாகத் தெரியும். மேலே உள்ள வடிகட்டிகள் நிலை, ஒர்க்ஸ்பேஸ் அல்லது அசெட் வாரியாகக் குறைக்கின்றன.",
        },
        {
          label: 'ஆலையைத் திற', title: 'கோளாறுகளைப் பார்க்க ஆலையைத் திறக்கவும்',
          body: "எந்த ஆலையையும் கிளிக் செய்து அதன் <strong>Faults</strong> பார்வைக்குள் செல்லுங்கள். தலைப்பு அத்தியாவசியத்தை மீண்டும் சொல்கிறது — பெயர், <strong>Online</strong>, last contact — வலதுபுறச் சிப்கள் ஒரே பார்வையில் கூட்டித் தருகின்றன: <strong>Active Faults</strong>, <strong>Stuck</strong>, <strong>Out of Range</strong>, <strong>Threshold Due</strong> (செல்லுபடியான வரம்புக்குக் காத்திருக்கும் சென்சார்கள்).",
          voice: "எந்த ஆலையையும் கிளிக் செய்யுங்கள் — இங்கே METL WTP — அதன் Faults பார்வைக்குள் செல்கிறீர்கள். தலைப்பு அத்தியாவசியத்தை மீண்டும் சொல்கிறது: ஆலையின் பெயர், அது ஆன்லைனில் உள்ளது, கடைசித் தொடர்பு நேரம். வலதுபுறச் சிப்கள் ஒரே பார்வையில் கூட்டித் தருகின்றன — செயலில் உள்ள கோளாறுகள், எத்தனை stuck, எத்தனை out of range, threshold due — அதாவது நாம் கண்காணிக்க முன் செல்லுபடியான வரம்புக்குக் காத்திருக்கும் சென்சார்கள்.",
        },
        {
          label: 'செயல் கோளாறுகள்', title: 'ஒவ்வொரு திறந்த கோளாற்றுக்கும் ஒரு வரிசை',
          body: "<strong>Active Faults</strong> டேப் இப்போது திறந்திருக்கும் அனைத்தையும் பட்டியலிடுகிறது. ஒவ்வொரு வரிசையும் ஒரு <strong>பேட்ஜ்</strong>-உடன் தொடங்குகிறது — <strong>STUCK</strong> அல்லது <strong>OUT OF RANGE</strong> (<strong>Persistent</strong> அல்லது <strong>Fluttering</strong> டேக்குடன்) — பின் சென்சார், அதன் டேக், செல்லுபடி வரம்புக்கு எதிரான அளவீடு (அல்லது stuck எனில் <strong>Frozen at…</strong>), எவ்வளவு நேரம் செயலில். <strong>Stuck</strong> மற்றும் <strong>Out of Range</strong> சிப்களால் வடிகட்டவும்.",
          voice: "Active Faults டேப் இப்போது திறந்திருக்கும் அனைத்தையும் பட்டியலிடுகிறது. ஒவ்வொரு வரிசையும் ஒரு பேட்ஜுடன் தொடங்குகிறது — Stuck, அல்லது Out of Range ஒரு Persistent அல்லது Fluttering டேக்குடன் — பின் சென்சாரும் அதன் டேக்கும், செல்லுபடி வரம்புக்கு எதிரான தற்போதைய அளவீடு, அல்லது stuck எனில் ஒரு மதிப்பில் Frozen, மேலும் கோளாறு எவ்வளவு நேரம் செயலில் உள்ளது. Stuck மற்றும் Out of Range சிப்கள் பட்டியலை ஒரே வகைக்குக் குறைக்கின்றன.",
        },
        {
          label: 'விவரம்', title: 'முழுக் கதைக்கும் கோளாற்றைக் கிளிக் செய்யுங்கள்',
          body: "ஒரு கோளாற்றைத் தேர்ந்தால் வலதுபுறப் பேனல் திறக்கிறது. உங்களுக்குக் கிடைக்கும்: <strong>current value</strong>, ஒரு <strong>history</strong> — மொத்த நிகழ்வுகள், சராசரி கால அளவு, கோளாற்றில் இருந்த நேர சதவீதம், மிகப் பொதுவான வகை — செல்லுபடி வரம்பு வரையப்பட்ட <strong>readings chart</strong>, எப்போது விலகியது எனத் தெளிவாகக் காண, மற்றும் ஒவ்வொரு திறப்பு-மூடலையும் பதியும் <strong>event timeline</strong>. செயல்படுவதற்கு முன் விசாரணை இங்கே.",
          voice: "எந்தக் கோளாற்றையும் தேர்ந்தால் வலதுபுறப் பேனல் திறக்கிறது. உங்களுக்குக் கிடைக்கும் current value, ஒரு சிறு history — மொத்த நிகழ்வுகள், சராசரி கால அளவு, இந்தச் சென்சார் கோளாற்றில் இருந்த நேர சதவீதம், அதன் மிகப் பொதுவான கோளாறு வகை. கீழே, செல்லுபடி வரம்புடன் ஒரு readings chart, எப்போது வெளியே விலகியது எனத் தெளிவாகக் காண. மற்றும் ஒவ்வொரு திறப்பையும் மூடலையும் பதியும் event timeline. செயல்படுவதற்கு முன் கோளாற்றை விசாரிக்கும் இடம் இதுவே.",
          tip: { type: 'tipLabel', text: 'Readings chart செல்லுபடி வரம்பை நிழலிடுகிறது — அதற்கு வெளியே உள்ள புள்ளிகளே கோளாற்றை எழுப்பியவை.' },
        },
        {
          label: 'சரிசெய்தவை', title: 'Fixed Faults — தீர்ந்த வரலாறு',
          body: "<strong>Fixed Faults</strong> டேப் அதே பட்டியல், ஆனால் ஏற்கனவே மூடிய கோளாறுகளுக்கு — மீண்டும் மீண்டும் ஏற்ற-இறங்கும் சென்சாரைக் கண்டறிய உதவும். எல்லாம் <strong>தானியங்கி</strong>: சிஸ்டம் ஒவ்வொரு கோளாற்றையும் தானே திறந்து மூடுகிறது. டைம்லைன் பதிவுகள் — <em>Started</em>, <em>Resolved</em>, <em>Back in Range</em> — உங்கள் தணிக்கைத் தடம்.",
          voice: "Fixed Faults டேப் அதே பட்டியல், ஆனால் ஏற்கனவே மூடிய கோளாறுகளுக்கு — மீண்டும் மீண்டும் உள்ளே-வெளியே ஏற்ற-இறங்கும் சென்சாரைக் கண்டறிய வசதியானது. நினைவில் கொள்ளுங்கள், இங்கே எல்லாம் தானியங்கி: சிஸ்டம் ஒவ்வொரு கோளாற்றையும் தானே திறந்து மூடுகிறது. டைம்லைன் பதிவுகள் — started, resolved, back in range — என்ன நடந்தது, எப்போது என்பதற்கான உங்கள் தணிக்கைத் தடம்.",
        },
        {
          label: 'சென்சார் பட்டியல்', title: 'Sensor List — இன்னும் வரம்பு தேவைப்படுபவை',
          body: "<strong>Sensor List (Due)</strong> டேப் உங்கள் செய்யவேண்டியது: <strong>இன்னும் கண்காணிக்க முடியாத</strong> சென்சார்கள், ஏனெனில் அவற்றின் <strong>valid min / max</strong> அமைக்கப்படவில்லை. இவையே முன் பார்த்த <strong>No Range Config</strong> மற்றும் <strong>Threshold Due</strong> எண்கள். <strong>Threshold Pending only</strong>-ஐ இயக்கி, அவற்றின் வரம்புகளை அமைத்தால் அவை கண்காணிப்பில் சேர்கின்றன. இது சுற்றுலா — அடுத்து, சிஸ்டம் எழுப்பும் நான்கு கோளாறுகள்.",
          voice: "Due எனக் குறிக்கப்பட்ட Sensor List உங்கள் செய்யவேண்டியது. இவை நாம் இன்னும் கண்காணிக்க முடியாத சென்சார்கள், ஏனெனில் அவற்றின் valid minimum, maximum அமைக்கப்படவில்லை — முன் பார்த்த அதே No Range Config, Threshold Due எண்கள். Threshold Pending only-ஐ இயக்கினால் அவை மட்டும் தெரியும், அவற்றின் வரம்புகளை அமைத்தால் அவை கண்காணிப்பில் சேர்கின்றன. இது முழு டாஷ்போர்டு. அடுத்து, சிஸ்டம் எழுப்பும் நான்கு கோளாறுகளைப் பார்ப்போம் — ஒன்று ஆலை மட்டத்தில், மூன்று சென்சார் மட்டத்தில்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: Data Break — ஒரு முழு தளமும் அமைதியாகும்போது எழும் ஆலை-மட்டக் கோளாறு.' },
        },
      ],
    },
    mr: {
      title: '<em>Sensor Health</em><br>डॅशबोर्ड.',
      subtitle:
        'तुमचे मॉनिटरिंग कॉकपिट — प्रत्येक प्लांट, प्रत्येक उघडा फॉल्ट, एकाच ठिकाणी. हा पहिला धडा संपूर्ण मांडणीची ओळख आहे; पुढील चार धडे सिस्टम उठवणारा प्रत्येक फॉल्ट समजावतात.',
      chapter: 'Sensor Health · डॅशबोर्ड',
      steps: [
        {
          label: 'यादी', title: 'प्रत्येक प्लांट, एका नजरेत',
          body: "<strong>Sensor Health</strong> प्रत्येक प्लांटच्या एका ओळीने उघडते. प्रत्येक ओळ आवश्यक गोष्टी सांगते — एक स्टेटस <strong>डॉट</strong>, <strong>Workspace</strong>, प्लांट <strong>Online</strong> आहे का, आणि त्याचा <strong>Last Contact</strong> — मग महत्त्वाच्या मोजण्या: <strong>Stuck</strong>, <strong>Out of Range</strong>, <strong>No Range Config</strong> (जे आपण अजून पाहू शकत नाही) आणि <strong>Total Faults</strong>. Total Faults नुसार क्रमवारी लावा आणि आधी कुठे पाहायचे हे कळते. वर <strong>Status, Workspace</strong> किंवा <strong>Asset</strong> ने फिल्टर करा.",
          voice: "Sensor Health मध्ये स्वागत — मॉनिटरिंग टीमचे कॉकपिट. ते प्रत्येक प्लांटच्या एका ओळीने उघडते. प्रत्येक ओळ आवश्यक गोष्टी देते: एक स्टेटस डॉट, वर्कस्पेस, प्लांट ऑनलाइन आहे का, आणि आपण शेवटचे कधी ऐकले. मग महत्त्वाच्या संख्या — किती सेन्सर Stuck आहेत, किती Out of Range, कितींना अजून No Range Config आहे, आणि एकूण फॉल्ट. Total Faults नुसार क्रमवारी लावा आणि आधी कोणता प्लांट उघडायचा हे नेमके कळते. वरचे फिल्टर ते स्टेटस, वर्कस्पेस किंवा ॲसेटने कमी करतात.",
        },
        {
          label: 'प्लांट उघडा', title: 'फॉल्ट पाहण्यासाठी प्लांट उघडा',
          body: "कोणत्याही प्लांटवर क्लिक करून त्याच्या <strong>Faults</strong> व्ह्यूमध्ये जा. हेडर आवश्यक गोष्टी पुन्हा सांगते — नाव, <strong>Online</strong>, last contact — आणि उजवीकडचे चिप्स एका नजरेत बेरीज देतात: <strong>Active Faults</strong>, <strong>Stuck</strong>, <strong>Out of Range</strong>, आणि <strong>Threshold Due</strong> (वैध श्रेणीची वाट पाहणारे सेन्सर).",
          voice: "कोणत्याही प्लांटवर क्लिक करा — इथे METL WTP — आणि तुम्ही त्याच्या Faults व्ह्यूमध्ये पोहोचता. हेडर आवश्यक गोष्टी पुन्हा सांगते: प्लांटचे नाव, तो ऑनलाइन आहे, आणि शेवटच्या संपर्काची वेळ. उजवीकडचे चिप्स एका नजरेत बेरीज देतात — सक्रिय फॉल्ट, किती stuck, किती out of range, आणि threshold due — म्हणजे आपण पाहण्याआधी वैध श्रेणीची वाट पाहणारे सेन्सर.",
        },
        {
          label: 'सक्रिय फॉल्ट', title: 'प्रत्येक उघड्या फॉल्टची एक ओळ',
          body: "<strong>Active Faults</strong> टॅब आत्ता उघडे असलेले सर्व दाखवते. प्रत्येक ओळ एका <strong>बॅजने</strong> सुरू होते — <strong>STUCK</strong> किंवा <strong>OUT OF RANGE</strong> (<strong>Persistent</strong> किंवा <strong>Fluttering</strong> टॅगसह) — मग सेन्सर, त्याचा टॅग, वैध श्रेणीसमोर त्याचे रीडिंग (किंवा stuck असल्यास <strong>Frozen at…</strong>), आणि तो किती वेळ सक्रिय आहे. <strong>Stuck</strong> आणि <strong>Out of Range</strong> चिप्सने फिल्टर करा.",
          voice: "Active Faults टॅब आत्ता उघडे असलेले सर्व दाखवते. प्रत्येक ओळ एका बॅजने सुरू होते — Stuck, किंवा Out of Range एका Persistent किंवा Fluttering टॅगसह — मग सेन्सर आणि त्याचा टॅग, वैध श्रेणीसमोर त्याचे सध्याचे रीडिंग, किंवा stuck असल्यास एका मूल्यावर Frozen, आणि फॉल्ट किती वेळ सक्रिय आहे. Stuck आणि Out of Range चिप्स यादी एकाच प्रकारापर्यंत कमी करतात.",
        },
        {
          label: 'तपशील', title: 'पूर्ण कहाणीसाठी फॉल्टवर क्लिक करा',
          body: "एखादा फॉल्ट निवडा आणि उजवीकडचे पॅनेल उघडते. तुम्हाला मिळते <strong>current value</strong>, एक <strong>history</strong> — एकूण इव्हेंट, सरासरी कालावधी, फॉल्टमध्ये घालवलेल्या वेळेची टक्केवारी, आणि सर्वात सामान्य प्रकार — वैध श्रेणी काढलेला <strong>readings chart</strong>, कधी भरकटले हे नेमके पाहण्यासाठी, आणि प्रत्येक उघडणे-बंद होणे नोंदवणारी <strong>event timeline</strong>. कृतीआधी तपासणी इथेच.",
          voice: "कोणताही फॉल्ट निवडा आणि उजवीकडचे पॅनेल उघडते. तुम्हाला मिळते current value, एक छोटी history — एकूण इव्हेंट, सरासरी कालावधी, या सेन्सरने फॉल्टमध्ये किती टक्के वेळ घालवला, आणि त्याचा सर्वात सामान्य फॉल्ट प्रकार. खाली, वैध श्रेणीसह एक readings chart, कधी बाहेर भरकटले हे नेमके पाहण्यासाठी. आणि प्रत्येक उघडणे आणि बंद होणे नोंदवणारी event timeline. कृती करण्याआधी फॉल्ट तपासण्याचे ठिकाण हेच.",
          tip: { type: 'tipLabel', text: 'Readings chart वैध श्रेणी छायांकित करतो — तिच्या बाहेरचे बिंदूच फॉल्ट उठवतात.' },
        },
        {
          label: 'फिक्स्ड फॉल्ट', title: 'Fixed Faults — सुटलेला इतिहास',
          body: "<strong>Fixed Faults</strong> टॅब तीच यादी, पण आधीच बंद झालेल्या फॉल्टसाठी — वारंवार हेलकावणारा सेन्सर ओळखण्यास उपयुक्त. सर्व काही <strong>स्वयंचलित</strong> आहे: सिस्टम प्रत्येक फॉल्ट स्वतः उघडते आणि बंद करते. टाइमलाइन नोंदी — <em>Started</em>, <em>Resolved</em>, <em>Back in Range</em> — हा तुमचा ऑडिट ट्रेल.",
          voice: "Fixed Faults टॅब तीच यादी, पण आधीच बंद झालेल्या फॉल्टसाठी — वारंवार आत-बाहेर हेलकावणारा सेन्सर ओळखण्यास सोयीचे. लक्षात ठेवा, इथे सर्व काही स्वयंचलित आहे: सिस्टम प्रत्येक फॉल्ट स्वतः उघडते आणि बंद करते. टाइमलाइन नोंदी — started, resolved, back in range — काय झाले आणि कधी याचा तुमचा ऑडिट ट्रेल.",
        },
        {
          label: 'सेन्सर यादी', title: 'Sensor List — ज्यांना अजून श्रेणी हवी',
          body: "<strong>Sensor List (Due)</strong> टॅब तुमची टू-डू: <strong>अजून मॉनिटर करता न येणारे</strong> सेन्सर, कारण त्यांचे <strong>valid min / max</strong> कॉन्फिगर नाही. हेच आधीचे <strong>No Range Config</strong> आणि <strong>Threshold Due</strong> आकडे. <strong>Threshold Pending only</strong> चालू करा, त्यांच्या श्रेणी सेट करा, आणि ते निगराणीत सामील होतात. हा झाला दौरा — पुढे, सिस्टम उठवणारे चार फॉल्ट.",
          voice: "Due असे चिन्हांकित Sensor List तुमची टू-डू आहे. हे असे सेन्सर आहेत जे आपण अजून मॉनिटर करू शकत नाही कारण त्यांचे valid minimum आणि maximum कॉन्फिगर नाही — तेच No Range Config आणि Threshold Due आकडे जे आधी दिसले. Threshold Pending only चालू करा म्हणजे फक्त तेच दिसतील, त्यांच्या श्रेणी कॉन्फिगर करा, आणि ते निगराणीत सामील होतात. हा झाला संपूर्ण डॅशबोर्ड. पुढे, सिस्टम उठवणारे चार फॉल्ट पाहू — एक प्लांट पातळीवर, आणि तीन सेन्सर पातळीवर.",
          tip: { type: 'upNextLabel', text: 'पुढे: Data Break — संपूर्ण साइट शांत झाल्यावर उठणारा प्लांट-पातळीचा फॉल्ट.' },
        },
      ],
    },
  },
};

export default lesson;
