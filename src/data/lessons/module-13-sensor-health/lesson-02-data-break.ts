import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/sensor-health-data-break`;

/**
 * M13 · Sensor Health — L2: Data Break (plant-level fault). (internal only)
 * From the monitoring doc: no data for 5+ minutes → plant-wide Data Break; all
 * that plant's open sensor faults become Obsolete; closes on the next reading.
 */
const lesson: Lesson = {
  id: 'sensor-health-data-break',
  moduleId: 'module-13-sensor-health',
  lessonNumber: 2,
  estimatedMinutes: 3,
  screenshots: {
    list: `${BASE}/list.jpg`,
    timeline: `${BASE}/timeline.jpg`,
    faults: `${BASE}/faults.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'list', caption: 'Internet & Last Contact — the plant’s pulse',
      spotlight: { top: '13%', left: '48%', width: '25%', height: '44%' },
    },
    {
      mode: 'detail', screenshot: 'timeline', caption: 'No data for 5+ minutes → Data Break',
      spotlight: { top: '38%', left: '69%', width: '30%', height: '20%' },
    },
    {
      mode: 'detail', screenshot: 'faults', caption: 'Other faults can’t be trusted → Obsolete',
      spotlight: { top: '26%', left: '0%', width: '68%', height: '40%' },
    },
    {
      mode: 'detail', screenshot: 'timeline', caption: 'New reading arrives → resolved',
      spotlight: { top: '20%', left: '69%', width: '30%', height: '14%' },
    },
  ],
  content: {
    en: {
      title: 'Plant-level:<br><em>Data Break.</em>',
      subtitle:
        'The one fault that isn’t about a single sensor — it means a whole plant has gone quiet. Here’s how the system detects it, what it does to the other faults, and when it clears.',
      chapter: 'Sensor Health · Plant-level fault',
      steps: [
        {
          label: 'The pulse', title: 'Every plant has a heartbeat',
          body: "The system tracks the <strong>last time each plant sent a reading</strong> — that's the <strong>Internet</strong> status and <strong>Last Contact</strong> you see on the list. A healthy plant reads <strong>Online · just now</strong>. When that heartbeat stops, it's not one sensor misbehaving — the whole site has gone silent.",
          voice: "Data Break is the one fault that isn't about a single sensor — it's about the whole plant. The system constantly tracks the last time each plant sent us a reading. That's the Internet status and Last Contact you see on the list. A healthy plant reads Online, last contact just now. When that heartbeat stops, it isn't one sensor misbehaving — the entire site has gone quiet.",
        },
        {
          label: 'Detected', title: 'Silent for 5 minutes → Data Break',
          body: "If a plant sends <strong>no data for more than 5 minutes</strong>, the system raises a <strong>Data Break</strong> for that plant. It's a <strong>plant-level</strong> alert — it doesn't point at a sensor, it points at <strong>connectivity</strong>. On the timeline you'll see it logged as <em>Data Break — No Data Received</em>, with the duration it lasted.",
          voice: "The rule is simple. If a plant sends no data at all for more than five minutes, the system raises a Data Break for that plant. This is a plant-level alert — it doesn't point at any one sensor, it points at connectivity. On the event timeline you'll see it logged as Data Break, No Data Received, along with how long the outage lasted.",
          tip: { type: 'noteLabel', text: 'A Data Break means the whole plant went silent — your first move is to check its network / connectivity.' },
        },
        {
          label: 'Obsolete', title: 'The other faults go Obsolete',
          body: "Here's the important part: the moment a Data Break opens, every <strong>other open fault</strong> for that plant — Stuck, Out of Range — is automatically marked <strong>Obsolete</strong>. Without live data those readings can't be trusted, so the system stops treating them as current. Don't chase a Stuck sensor during a Data Break — the plant simply isn't reporting.",
          voice: "Here's the important part. The moment a Data Break opens, every other open fault for that plant — every Stuck, every Out of Range — is automatically marked Obsolete. The reasoning is simple: without live data, those old readings can't be trusted, so the system stops treating them as current. So don't chase a Stuck or Out of Range sensor while a plant is in Data Break — the plant simply isn't reporting anything yet.",
          tip: { type: 'rememberLabel', text: 'During a Data Break the sensor-level faults are stale by definition — fix connectivity first, then re-read.' },
        },
        {
          label: 'Resolved', title: 'One reading, and it clears',
          body: "Recovery is automatic and instant. As soon as the plant sends <strong>any new reading</strong>, the Data Break <strong>closes on its own</strong> and the plant is marked <strong>online</strong> again — the timeline logs <em>Connection resumed</em>. Sensor-level detection then picks straight back up on the fresh data.",
          voice: "Recovery is automatic and instant. The moment the plant sends any new reading at all, the Data Break closes on its own and the plant is marked online again — you'll see Connection resumed on the timeline. From there, sensor-level detection picks straight back up on the fresh, live data. So your job on a Data Break is really about the site's connection — once data flows again, everything else resumes by itself.",
          tip: { type: 'upNextLabel', text: 'Next: Stuck detection — the first of the three sensor-level faults.' },
        },
      ],
    },
    hi: {
      title: 'प्लांट-स्तर:<br><em>Data Break.</em>',
      subtitle:
        'वह एकमात्र फ़ॉल्ट जो किसी एक सेंसर के बारे में नहीं — इसका मतलब है पूरा प्लांट चुप हो गया। देखिए सिस्टम इसे कैसे पकड़ता है, बाकी फ़ॉल्ट का क्या करता है, और कब साफ़ होता है।',
      chapter: 'Sensor Health · प्लांट-स्तरीय फ़ॉल्ट',
      steps: [
        {
          label: 'धड़कन', title: 'हर प्लांट की एक धड़कन होती है',
          body: "सिस्टम ट्रैक करता है कि <strong>हर प्लांट ने आख़िरी बार कब रीडिंग भेजी</strong> — यही <strong>Internet</strong> स्टेटस और <strong>Last Contact</strong> है जो सूची में दिखता है। स्वस्थ प्लांट <strong>Online · just now</strong> दिखाता है। जब यह धड़कन रुकती है, तो एक सेंसर गड़बड़ नहीं — पूरा साइट चुप हो गया।",
          voice: "Data Break वह एकमात्र फ़ॉल्ट है जो किसी एक सेंसर के बारे में नहीं — यह पूरे प्लांट के बारे में है। सिस्टम लगातार ट्रैक करता है कि हर प्लांट ने आख़िरी बार कब हमें रीडिंग भेजी। यही Internet स्टेटस और Last Contact है जो सूची में दिखता है। स्वस्थ प्लांट Online, last contact just now दिखाता है। जब यह धड़कन रुकती है, तो एक सेंसर की गड़बड़ी नहीं — पूरा साइट चुप हो गया।",
        },
        {
          label: 'पहचान', title: '5 मिनट चुप → Data Break',
          body: "अगर कोई प्लांट <strong>5 मिनट से ज़्यादा कोई डेटा नहीं</strong> भेजता, तो सिस्टम उस प्लांट के लिए <strong>Data Break</strong> उठाता है। यह <strong>प्लांट-स्तरीय</strong> अलर्ट है — यह सेंसर की ओर नहीं, <strong>कनेक्टिविटी</strong> की ओर इशारा करता है। टाइमलाइन पर यह <em>Data Break — No Data Received</em> के रूप में, कितनी देर चला उसके साथ, दर्ज दिखेगा।",
          voice: "नियम सीधा है। अगर कोई प्लांट पाँच मिनट से ज़्यादा बिल्कुल कोई डेटा नहीं भेजता, तो सिस्टम उस प्लांट के लिए Data Break उठाता है। यह प्लांट-स्तरीय अलर्ट है — यह किसी एक सेंसर की ओर नहीं, कनेक्टिविटी की ओर इशारा करता है। इवेंट टाइमलाइन पर यह Data Break, No Data Received के रूप में दिखेगा, साथ में यह भी कि आउटेज कितनी देर चला।",
          tip: { type: 'noteLabel', text: 'Data Break का मतलब पूरा प्लांट चुप — पहला कदम उसका नेटवर्क / कनेक्टिविटी जाँचना है।' },
        },
        {
          label: 'Obsolete', title: 'बाकी फ़ॉल्ट Obsolete हो जाते हैं',
          body: "ज़रूरी बात: जैसे ही Data Break खुलता है, उस प्लांट के हर <strong>दूसरे खुले फ़ॉल्ट</strong> — Stuck, Out of Range — को अपने-आप <strong>Obsolete</strong> चिह्नित कर दिया जाता है। लाइव डेटा के बिना उन रीडिंग पर भरोसा नहीं किया जा सकता, तो सिस्टम उन्हें मौजूदा मानना बंद कर देता है। Data Break के दौरान किसी Stuck सेंसर के पीछे न पड़ें — प्लांट कुछ रिपोर्ट ही नहीं कर रहा।",
          voice: "यह ज़रूरी हिस्सा है। जैसे ही Data Break खुलता है, उस प्लांट के हर दूसरे खुले फ़ॉल्ट — हर Stuck, हर Out of Range — को अपने-आप Obsolete चिह्नित कर दिया जाता है। कारण सीधा है: लाइव डेटा के बिना उन पुरानी रीडिंग पर भरोसा नहीं किया जा सकता, तो सिस्टम उन्हें मौजूदा मानना बंद कर देता है। इसलिए जब कोई प्लांट Data Break में हो तो किसी Stuck या Out of Range सेंसर के पीछे न पड़ें — प्लांट अभी कुछ रिपोर्ट ही नहीं कर रहा।",
          tip: { type: 'rememberLabel', text: 'Data Break के दौरान सेंसर-स्तरीय फ़ॉल्ट परिभाषा से ही बासी हैं — पहले कनेक्टिविटी ठीक करें, फिर दोबारा पढ़ें।' },
        },
        {
          label: 'हल', title: 'एक रीडिंग, और यह साफ़',
          body: "रिकवरी अपने-आप और तुरंत होती है। जैसे ही प्लांट <strong>कोई नई रीडिंग</strong> भेजता है, Data Break <strong>ख़ुद बंद</strong> हो जाता है और प्लांट फिर <strong>online</strong> चिह्नित — टाइमलाइन <em>Connection resumed</em> दर्ज करती है। फिर सेंसर-स्तरीय पहचान ताज़ा डेटा पर सीधे फिर शुरू हो जाती है।",
          voice: "रिकवरी अपने-आप और तुरंत होती है। जैसे ही प्लांट कोई भी नई रीडिंग भेजता है, Data Break ख़ुद बंद हो जाता है और प्लांट फिर online चिह्नित हो जाता है — टाइमलाइन पर आपको Connection resumed दिखेगा। वहाँ से, सेंसर-स्तरीय पहचान ताज़ा, लाइव डेटा पर सीधे फिर शुरू हो जाती है। तो Data Break पर आपका काम असल में साइट के कनेक्शन के बारे में है — डेटा फिर बहने लगे, बाकी सब अपने-आप फिर चालू हो जाता है।",
          tip: { type: 'upNextLabel', text: 'आगे: Stuck detection — तीन सेंसर-स्तरीय फ़ॉल्ट में से पहला।' },
        },
      ],
    },
    ta: {
      title: 'ஆலை மட்டம்:<br><em>Data Break.</em>',
      subtitle:
        'ஒரு சென்சார் பற்றியதல்லாத ஒரே கோளாறு — ஒரு முழு ஆலையும் அமைதியாகிவிட்டது என்று பொருள். சிஸ்டம் இதை எப்படிக் கண்டறிகிறது, மற்ற கோளாறுகளுக்கு என்ன செய்கிறது, எப்போது தெளிகிறது என்பது இங்கே.',
      chapter: 'Sensor Health · ஆலை-மட்டக் கோளாறு',
      steps: [
        {
          label: 'துடிப்பு', title: 'ஒவ்வொரு ஆலைக்கும் ஒரு இதயத்துடிப்பு',
          body: "<strong>ஒவ்வொரு ஆலையும் கடைசியாக எப்போது அளவீட்டை அனுப்பியது</strong> என்பதைச் சிஸ்டம் கண்காணிக்கிறது — அதுவே பட்டியலில் காணும் <strong>Internet</strong> நிலையும் <strong>Last Contact</strong>-ம். ஆரோக்கியமான ஆலை <strong>Online · just now</strong> எனக் காட்டும். அந்தத் துடிப்பு நின்றால், அது ஒரு சென்சாரின் பிழையல்ல — முழுத் தளமும் அமைதியாகிவிட்டது.",
          voice: "Data Break என்பது ஒரு சென்சார் பற்றியதல்லாத ஒரே கோளாறு — அது முழு ஆலை பற்றியது. ஒவ்வொரு ஆலையும் கடைசியாக எப்போது நமக்கு அளவீட்டை அனுப்பியது என்பதைச் சிஸ்டம் தொடர்ந்து கண்காணிக்கிறது. அதுவே பட்டியலில் காணும் Internet நிலையும் Last Contact-ம். ஆரோக்கியமான ஆலை Online, last contact just now எனக் காட்டும். அந்தத் துடிப்பு நின்றால், அது ஒரு சென்சாரின் பிழையல்ல — முழுத் தளமும் அமைதியாகிவிட்டது.",
        },
        {
          label: 'கண்டறிதல்', title: '5 நிமிடம் அமைதி → Data Break',
          body: "ஒரு ஆலை <strong>5 நிமிடத்துக்கு மேல் எந்த டேட்டாவும் அனுப்பாவிட்டால்</strong>, சிஸ்டம் அந்த ஆலைக்கு <strong>Data Break</strong> எழுப்புகிறது. இது <strong>ஆலை-மட்ட</strong> எச்சரிக்கை — இது ஒரு சென்சாரைச் சுட்டாது, <strong>இணைப்பைச்</strong> சுட்டுகிறது. டைம்லைனில் <em>Data Break — No Data Received</em> என, அது நீடித்த கால அளவுடன் பதியப்படும்.",
          voice: "விதி எளிது. ஒரு ஆலை ஐந்து நிமிடத்துக்கு மேல் எந்த டேட்டாவும் அனுப்பாவிட்டால், சிஸ்டம் அந்த ஆலைக்கு Data Break எழுப்புகிறது. இது ஆலை-மட்ட எச்சரிக்கை — இது எந்த ஒரு சென்சாரையும் சுட்டாது, இணைப்பைச் சுட்டுகிறது. நிகழ்வு டைம்லைனில் இது Data Break, No Data Received என, அந்த முடக்கம் எவ்வளவு நேரம் நீடித்தது என்பதுடன் தெரியும்.",
          tip: { type: 'noteLabel', text: 'Data Break என்றால் முழு ஆலையும் அமைதி — உங்கள் முதல் நடவடிக்கை அதன் நெட்வொர்க் / இணைப்பைச் சரிபார்ப்பது.' },
        },
        {
          label: 'Obsolete', title: 'மற்ற கோளாறுகள் Obsolete ஆகின்றன',
          body: "முக்கிய பகுதி இது: Data Break திறந்த நொடியில், அந்த ஆலையின் ஒவ்வொரு <strong>மற்ற திறந்த கோளாறும்</strong> — Stuck, Out of Range — தானாக <strong>Obsolete</strong> எனக் குறிக்கப்படும். நேரடி டேட்டா இல்லாமல் அந்த அளவீடுகளை நம்ப முடியாது, எனவே சிஸ்டம் அவற்றை நடப்பாகக் கருதுவதை நிறுத்துகிறது. Data Break-இன்போது ஒரு Stuck சென்சாரைத் துரத்த வேண்டாம் — ஆலை எதையும் அறிக்கை செய்யவில்லை.",
          voice: "முக்கியப் பகுதி இது. Data Break திறந்த நொடியில், அந்த ஆலையின் ஒவ்வொரு மற்ற திறந்த கோளாறும் — ஒவ்வொரு Stuck, ஒவ்வொரு Out of Range — தானாக Obsolete எனக் குறிக்கப்படும். காரணம் எளிது: நேரடி டேட்டா இல்லாமல் அந்தப் பழைய அளவீடுகளை நம்ப முடியாது, எனவே சிஸ்டம் அவற்றை நடப்பாகக் கருதுவதை நிறுத்துகிறது. எனவே ஒரு ஆலை Data Break-இல் இருக்கும்போது Stuck அல்லது Out of Range சென்சாரைத் துரத்த வேண்டாம் — ஆலை இன்னும் எதையும் அறிக்கை செய்யவில்லை.",
          tip: { type: 'rememberLabel', text: 'Data Break-இன்போது சென்சார்-மட்டக் கோளாறுகள் வரையறையாலேயே பழையவை — முதலில் இணைப்பைச் சரிசெய்து, பின் மீண்டும் படியுங்கள்.' },
        },
        {
          label: 'தீர்வு', title: 'ஒரு அளவீடு, அது தெளிகிறது',
          body: "மீட்பு தானியங்கி, உடனடி. ஆலை <strong>எந்த ஒரு புதிய அளவீட்டையும்</strong> அனுப்பியதும், Data Break <strong>தானே மூடும்</strong>, ஆலை மீண்டும் <strong>online</strong> எனக் குறிக்கப்படும் — டைம்லைன் <em>Connection resumed</em> பதியும். பின் சென்சார்-மட்டக் கண்டறிதல் புதிய டேட்டாவில் நேராக மீண்டும் தொடங்குகிறது.",
          voice: "மீட்பு தானியங்கி, உடனடி. ஆலை எந்த ஒரு புதிய அளவீட்டையும் அனுப்பிய நொடியில், Data Break தானே மூடி, ஆலை மீண்டும் online எனக் குறிக்கப்படும் — டைம்லைனில் Connection resumed காண்பீர்கள். அங்கிருந்து, சென்சார்-மட்டக் கண்டறிதல் புதிய, நேரடி டேட்டாவில் நேராக மீண்டும் தொடங்குகிறது. எனவே Data Break-இல் உங்கள் வேலை உண்மையில் தளத்தின் இணைப்பு பற்றியது — டேட்டா மீண்டும் பாய்ந்தால், மற்ற எல்லாம் தானாக மீண்டும் தொடங்கும்.",
          tip: { type: 'upNextLabel', text: 'அடுத்து: Stuck detection — மூன்று சென்சார்-மட்டக் கோளாறுகளில் முதலாவது.' },
        },
      ],
    },
    mr: {
      title: 'प्लांट-पातळी:<br><em>Data Break.</em>',
      subtitle:
        'एकाच सेन्सरबद्दल नसलेला एकमेव फॉल्ट — म्हणजे संपूर्ण प्लांट शांत झाला. सिस्टम हे कसे ओळखते, इतर फॉल्टचे काय करते, आणि कधी साफ होते ते इथे.',
      chapter: 'Sensor Health · प्लांट-पातळीचा फॉल्ट',
      steps: [
        {
          label: 'नाडी', title: 'प्रत्येक प्लांटची एक नाडी असते',
          body: "<strong>प्रत्येक प्लांटने शेवटची रीडिंग कधी पाठवली</strong> हे सिस्टम ट्रॅक करते — तेच यादीत दिसणारे <strong>Internet</strong> स्टेटस आणि <strong>Last Contact</strong>. निरोगी प्लांट <strong>Online · just now</strong> दाखवतो. ती नाडी थांबली, तर एक सेन्सर बिघडला नाही — संपूर्ण साइट शांत झाली.",
          voice: "Data Break हा एकाच सेन्सरबद्दल नसलेला एकमेव फॉल्ट — तो संपूर्ण प्लांटबद्दल आहे. प्रत्येक प्लांटने शेवटची रीडिंग आपल्याला कधी पाठवली हे सिस्टम सतत ट्रॅक करते. तेच यादीत दिसणारे Internet स्टेटस आणि Last Contact. निरोगी प्लांट Online, last contact just now दाखवतो. ती नाडी थांबली, तर एक सेन्सर बिघडला नाही — संपूर्ण साइट शांत झाली.",
        },
        {
          label: 'ओळख', title: '5 मिनिटे शांत → Data Break',
          body: "एखादा प्लांट <strong>5 मिनिटांहून अधिक काही डेटा न पाठवल्यास</strong>, सिस्टम त्या प्लांटसाठी <strong>Data Break</strong> उठवते. हा <strong>प्लांट-पातळीचा</strong> अलर्ट — तो सेन्सरकडे नाही, <strong>कनेक्टिव्हिटीकडे</strong> निर्देश करतो. टाइमलाइनवर हा <em>Data Break — No Data Received</em> म्हणून, तो किती वेळ टिकला त्यासह नोंदला जाईल.",
          voice: "नियम सरळ आहे. एखादा प्लांट पाच मिनिटांहून अधिक काहीच डेटा पाठवत नसेल, तर सिस्टम त्या प्लांटसाठी Data Break उठवते. हा प्लांट-पातळीचा अलर्ट — तो कोणत्याही एका सेन्सरकडे नाही, कनेक्टिव्हिटीकडे निर्देश करतो. इव्हेंट टाइमलाइनवर हा Data Break, No Data Received म्हणून दिसेल, सोबत आउटेज किती वेळ टिकला हेही.",
          tip: { type: 'noteLabel', text: 'Data Break म्हणजे संपूर्ण प्लांट शांत — पहिली कृती म्हणजे त्याचे नेटवर्क / कनेक्टिव्हिटी तपासणे.' },
        },
        {
          label: 'Obsolete', title: 'इतर फॉल्ट Obsolete होतात',
          body: "महत्त्वाचा भाग: Data Break उघडताच, त्या प्लांटचा प्रत्येक <strong>इतर उघडा फॉल्ट</strong> — Stuck, Out of Range — आपोआप <strong>Obsolete</strong> चिन्हांकित होतो. लाइव्ह डेटाशिवाय त्या रीडिंगवर विश्वास ठेवता येत नाही, म्हणून सिस्टम त्यांना चालू मानणे थांबवते. Data Break दरम्यान एखाद्या Stuck सेन्सरमागे लागू नका — प्लांट काहीच रिपोर्ट करत नाहीये.",
          voice: "हा महत्त्वाचा भाग. Data Break उघडताच, त्या प्लांटचा प्रत्येक इतर उघडा फॉल्ट — प्रत्येक Stuck, प्रत्येक Out of Range — आपोआप Obsolete चिन्हांकित होतो. कारण सरळ आहे: लाइव्ह डेटाशिवाय त्या जुन्या रीडिंगवर विश्वास ठेवता येत नाही, म्हणून सिस्टम त्यांना चालू मानणे थांबवते. त्यामुळे एखादा प्लांट Data Break मध्ये असताना Stuck किंवा Out of Range सेन्सरमागे लागू नका — प्लांट अजून काहीच रिपोर्ट करत नाहीये.",
          tip: { type: 'rememberLabel', text: 'Data Break दरम्यान सेन्सर-पातळीचे फॉल्ट व्याख्येनेच शिळे आहेत — आधी कनेक्टिव्हिटी दुरुस्त करा, मग पुन्हा वाचा.' },
        },
        {
          label: 'सुटका', title: 'एक रीडिंग, आणि तो साफ',
          body: "रिकव्हरी आपोआप आणि तत्काळ. प्लांटने <strong>कोणतीही नवी रीडिंग</strong> पाठवताच, Data Break <strong>स्वतः बंद</strong> होतो आणि प्लांट पुन्हा <strong>online</strong> चिन्हांकित होतो — टाइमलाइन <em>Connection resumed</em> नोंदवते. मग सेन्सर-पातळीची ओळख ताज्या डेटावर थेट पुन्हा सुरू होते.",
          voice: "रिकव्हरी आपोआप आणि तत्काळ. प्लांटने कोणतीही नवी रीडिंग पाठवताच, Data Break स्वतः बंद होतो आणि प्लांट पुन्हा online चिन्हांकित होतो — टाइमलाइनवर तुम्हाला Connection resumed दिसेल. तिथून, सेन्सर-पातळीची ओळख ताज्या, लाइव्ह डेटावर थेट पुन्हा सुरू होते. म्हणून Data Break वर तुमचे काम खरे तर साइटच्या कनेक्शनबद्दल आहे — डेटा पुन्हा वाहू लागला, की बाकी सर्व आपोआप पुन्हा सुरू होते.",
          tip: { type: 'upNextLabel', text: 'पुढे: Stuck detection — तीन सेन्सर-पातळीच्या फॉल्टपैकी पहिला.' },
        },
      ],
    },
  },
};

export default lesson;
