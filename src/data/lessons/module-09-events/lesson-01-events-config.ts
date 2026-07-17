import type { Lesson } from '../../types';

/**
 * Module 9 · Configure — Setting up an Event.   Tag: M9.L1·C  (internal only)
 * The "how to build it" track, from the screen recording: create a reusable
 * event template → add an Event trigger component → pick the template →
 * associate equipment (fetches its sensors) → select sensors → plot on a graph.
 */

const BASE = `${import.meta.env.BASE_URL}screenshots/module-09-config`;

const lesson: Lesson = {
  id: 'lesson-01-events-config',
  moduleId: 'module-09-events',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    templates: `${BASE}/templates.jpg`,
    form: `${BASE}/template-form.jpg`,
    triggers: `${BASE}/triggers.jpg`,
    create: `${BASE}/create-event.jpg`,
    equipment: `${BASE}/equipment.jpg`,
    sensors: `${BASE}/sensors.jpg`,
  },
  layouts: [
    { mode: 'detail', screenshot: 'templates', caption: 'Event Templates', spotlight: { top: '8%', left: '84%', width: '15%', height: '10%' } },
    { mode: 'detail', screenshot: 'form', caption: 'Name & equipment type', spotlight: { top: '37%', left: '22%', width: '56%', height: '9%' } },
    { mode: 'detail', screenshot: 'triggers', caption: 'A conditional trigger', spotlight: { top: '30%', left: '1%', width: '60%', height: '8%' } },
    { mode: 'detail', screenshot: 'create', caption: 'Trigger component → Event', spotlight: { top: '14%', left: '24%', width: '24%', height: '34%' } },
    { mode: 'detail', screenshot: 'equipment', caption: 'Associate equipment', spotlight: { top: '20%', left: '50%', width: '26%', height: '52%' } },
    { mode: 'detail', screenshot: 'sensors', caption: 'Select the sensors', spotlight: { top: '38%', left: '25%', width: '50%', height: '24%' } },
    { mode: 'detail', screenshot: 'sensors', caption: 'Plot on the dashboard', spotlight: { top: '84%', left: '68%', width: '8%', height: '5%' } },
  ],
  content: {
    en: {
      title: 'Configure:<br>Setting up an <em>Event.</em>',
      subtitle: 'The builder\'s view — from a reusable template to live events on the client\'s graph.',
      chapter: 'Build Track · Events',
      steps: [
        {
          label: 'Template', title: 'Create an event template',
          body: 'Start in <strong>Event Templates</strong> and hit <strong>Create Event Template</strong>. A template defines an event once and can be <strong>reused across all plants</strong> — so common events like a cleaning cycle are set up a single time.',
          voice: "Setting up an event begins with a template. Head to Event Templates and click Create Event Template. The key idea here is reuse: a template defines an event once — its name, what kind of equipment it applies to — and you can then use that same template across every plant. So a common event, like a cleaning cycle, gets defined a single time and reused everywhere, rather than rebuilt for each site.",
        },
        {
          label: 'Type', title: 'Name it & pick the equipment type',
          body: 'Give the template a <strong>name</strong> and a <strong>description</strong>, then choose an <strong>Equipment Type</strong> — here <em>Tank</em>. The type matters: later, the platform will use it to fetch <strong>all the tanks</strong> at whichever plant you apply it to.',
          voice: "In the template form, give it a clear name — here, S B R Cleaning — and a description. Then the important field: Equipment Type. We choose Tank. This single choice does a lot of work down the line: because the template is typed to Tank, when you later attach it to a plant, the platform will automatically fetch every tank at that plant for you to choose from. Pick the type that matches the event, and submit — the template is now created and available everywhere.",
        },
        {
          label: 'Trigger', title: 'Open a conditional trigger',
          body: 'Events fire from <strong>conditional triggers</strong> — the same condition engine behind insights. Open an existing trigger (we\'ll cover building triggers separately). Each trigger can carry <strong>attached components</strong>; an event is one such component.',
          voice: "Now, where does an event actually get its opening and closing conditions? From a trigger. Events ride on conditional triggers — the same condition engine that powers insights. So we go to Triggers and open one that's already set up. Building triggers from scratch is a topic for another lesson; for now, the thing to know is that every trigger can carry attached components, and an event is one type of component you can attach to it.",
        },
        {
          label: 'Component', title: 'Add a trigger component — Event',
          body: 'Inside the trigger, add a component of type <strong>Event</strong>. In the <strong>Create Event</strong> dialog, the first step is to choose the <strong>event template</strong> you made — here <em>SBR Cleaning</em>.',
          voice: "Inside the trigger, we add a new component and choose its type as Event. That opens the Create Event dialog. The first thing it asks for is the event template — and here's where your reusable template pays off. We open the Select Event Template dropdown and pick the one we created, S B R Cleaning. The template brings along everything we defined earlier, including that Tank equipment type.",
        },
        {
          label: 'Equipment', title: 'Associate the equipment',
          body: 'Because the template was typed to <strong>Tank</strong>, the <strong>Related Equipment</strong> list now shows every tank at this plant — Equalisation Tank, Aeration Tank, Sludge Holding Tank and so on. Select the exact equipment this event concerns.',
          voice: "Now watch what the equipment type does. Open Related Equipment, and because the template was typed to Tank, the platform has fetched every tank at this plant — the equalisation tank, the aeration tank, the sludge holding tank, the chlorine tanks, all of them. You simply tick the exact equipment this event is about. We're setting up a cleaning event, so we pick the tanks involved. No typing, no hunting — the type filter did the work.",
        },
        {
          label: 'Sensors', title: 'Select the relevant sensors',
          body: 'Selecting equipment fetches <strong>its sensors</strong> into the <strong>Related Sensor Tag Selection Table</strong>. Tick the <strong>relevant sensors</strong> — for a tank cleaning, the level transmitters. These are the readings the event will be defined and shown against.',
          voice: "Choosing the equipment does the next bit of magic: it pulls in all the sensors attached to those tanks, listed in the Related Sensor Tag Selection Table. From there you select the sensors that actually matter for this event. For a tank cleaning, that's the level transmitters — the L V tags. Tick the relevant ones. These sensors are what the event is measured against, and they're what the client will see in the event's detail charts.",
        },
        {
          label: 'Plot', title: 'Plot it on the client\'s graph',
          body: 'Save, and the event is live. Now add those same sensors to a <strong>Graph widget</strong> on the client\'s dashboard — and the <strong>events plot right onto the graph</strong>, so the client sees each occurrence in the context of the readings that drove it.',
          voice: "Save the component, and the event is configured and live. There's one last, satisfying step that closes the loop. Take those very sensors and plot them on a graph widget on the client's dashboard — exactly the widget you learned to build in the configuration track. Once they're on the graph, the events themselves appear plotted along it. So the client doesn't just get a number; they see each occurrence of the event marked right on the sensor trend that opened and closed it. That's an event, from a reusable template all the way to a live, self-explaining graph.",
          tip: { type: 'rememberLabel', text: 'Template (typed to an equipment kind) → Event component on a trigger → pick template → equipment fetches sensors → select sensors → plot on a Graph widget.' },
        },
      ],
    },
    hi: {
      title: 'कॉन्फ़िगर:<br>एक <em>इवेंट</em> सेट करना।',
      subtitle: 'बिल्डर का दृश्य — एक पुन: प्रयोज्य टेम्पलेट से लेकर क्लाइंट के ग्राफ़ पर लाइव इवेंट तक।',
      chapter: 'बिल्ड ट्रैक · इवेंट्स',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक इवेंट टेम्पलेट बनाएँ',
          body: '<strong>Event Templates</strong> में जाएँ और <strong>Create Event Template</strong> दबाएँ। एक टेम्पलेट इवेंट को एक बार परिभाषित करता है और <strong>सभी प्लांट में पुन: उपयोग</strong> किया जा सकता है।',
          voice: "इवेंट सेट करना एक टेम्पलेट से शुरू होता है। Event Templates में जाएँ और Create Event Template पर क्लिक करें। मुख्य विचार है पुन: उपयोग: एक टेम्पलेट इवेंट को एक बार परिभाषित करता है — उसका नाम, किस तरह के उपकरण पर लागू होता है — और फिर वही टेम्पलेट हर प्लांट पर उपयोग कर सकते हैं। तो एक सामान्य इवेंट, जैसे क्लीनिंग साइकिल, एक बार परिभाषित होकर हर जगह पुन: उपयोग होता है।",
        },
        {
          label: 'प्रकार', title: 'नाम दें व उपकरण प्रकार चुनें',
          body: 'टेम्पलेट को एक <strong>नाम</strong> व <strong>विवरण</strong> दें, फिर एक <strong>Equipment Type</strong> चुनें — यहाँ <em>Tank</em>। यह प्रकार मायने रखता है: बाद में प्लेटफ़ॉर्म इससे उस प्लांट के <strong>सभी टैंक</strong> लाएगा।',
          voice: "टेम्पलेट फ़ॉर्म में, इसे एक स्पष्ट नाम दें — यहाँ, एस बी आर क्लीनिंग — और एक विवरण। फिर महत्वपूर्ण फ़ील्ड: Equipment Type। हम Tank चुनते हैं। यह एक चुनाव आगे बहुत काम करता है: चूँकि टेम्पलेट Tank टाइप है, जब आप इसे बाद में किसी प्लांट से जोड़ते हैं, प्लेटफ़ॉर्म अपने-आप उस प्लांट के हर टैंक को चुनने के लिए ले आता है। इवेंट से मेल खाता प्रकार चुनें, और सबमिट करें — टेम्पलेट अब बन गया और हर जगह उपलब्ध है।",
        },
        {
          label: 'ट्रिगर', title: 'एक कंडिशनल ट्रिगर खोलें',
          body: 'इवेंट <strong>कंडिशनल ट्रिगर</strong> से फ़ायर होते हैं — वही कंडीशन इंजन जो इनसाइट के पीछे है। एक मौजूदा ट्रिगर खोलें। हर ट्रिगर <strong>अटैच्ड कंपोनेंट</strong> रख सकता है; इवेंट एक ऐसा कंपोनेंट है।',
          voice: "अब, इवेंट को उसकी खुलने और बंद होने की शर्तें कहाँ से मिलती हैं? एक ट्रिगर से। इवेंट कंडिशनल ट्रिगर पर चलते हैं — वही कंडीशन इंजन जो इनसाइट चलाता है। तो हम Triggers में जाकर एक पहले से सेट किया ट्रिगर खोलते हैं। शुरू से ट्रिगर बनाना एक अलग लेसन का विषय है; अभी जानने की बात यह है कि हर ट्रिगर अटैच्ड कंपोनेंट रख सकता है, और इवेंट एक प्रकार का कंपोनेंट है जिसे आप उससे जोड़ सकते हैं।",
        },
        {
          label: 'कंपोनेंट', title: 'ट्रिगर कंपोनेंट जोड़ें — Event',
          body: 'ट्रिगर के भीतर, <strong>Event</strong> प्रकार का कंपोनेंट जोड़ें। <strong>Create Event</strong> डायलॉग में, पहला चरण है आपके बनाए <strong>इवेंट टेम्पलेट</strong> को चुनना — यहाँ <em>SBR Cleaning</em>।',
          voice: "ट्रिगर के भीतर, हम एक नया कंपोनेंट जोड़ते हैं और उसका प्रकार Event चुनते हैं। इससे Create Event डायलॉग खुलता है। यह सबसे पहले इवेंट टेम्पलेट माँगता है — और यहीं आपका पुन: प्रयोज्य टेम्पलेट काम आता है। हम Select Event Template ड्रॉपडाउन खोलकर अपने बनाए एस बी आर क्लीनिंग को चुनते हैं। टेम्पलेट वह सब साथ लाता है जो हमने पहले परिभाषित किया, उस Tank उपकरण प्रकार सहित।",
        },
        {
          label: 'उपकरण', title: 'उपकरण जोड़ें',
          body: 'चूँकि टेम्पलेट <strong>Tank</strong> टाइप था, <strong>Related Equipment</strong> सूची अब इस प्लांट का हर टैंक दिखाती है — इक्वलाइज़ेशन टैंक, एयरेशन टैंक, स्लज होल्डिंग टैंक आदि। ठीक वह उपकरण चुनें जिससे यह इवेंट संबंधित है।',
          voice: "अब देखें कि उपकरण प्रकार क्या करता है। Related Equipment खोलें, और चूँकि टेम्पलेट Tank टाइप था, प्लेटफ़ॉर्म ने इस प्लांट का हर टैंक ला दिया है — इक्वलाइज़ेशन टैंक, एयरेशन टैंक, स्लज होल्डिंग टैंक, क्लोरीन टैंक, सब। आप बस वह ठीक उपकरण टिक करते हैं जिसके बारे में यह इवेंट है। हम एक क्लीनिंग इवेंट सेट कर रहे हैं, तो शामिल टैंक चुनते हैं। कोई टाइपिंग नहीं, कोई खोज नहीं — टाइप फ़िल्टर ने काम कर दिया।",
        },
        {
          label: 'सेंसर', title: 'प्रासंगिक सेंसर चुनें',
          body: 'उपकरण चुनने से <strong>उसके सेंसर</strong> <strong>Related Sensor Tag Selection Table</strong> में आ जाते हैं। <strong>प्रासंगिक सेंसर</strong> टिक करें — टैंक क्लीनिंग के लिए, लेवल ट्रांसमीटर। इन्हीं रीडिंग के विरुद्ध इवेंट परिभाषित व दिखाया जाएगा।',
          voice: "उपकरण चुनना अगला जादू करता है: यह उन टैंकों से जुड़े सभी सेंसर खींच लाता है, Related Sensor Tag Selection Table में सूचीबद्ध। वहाँ से आप वे सेंसर चुनते हैं जो इस इवेंट के लिए सचमुच मायने रखते हैं। टैंक क्लीनिंग के लिए, वे लेवल ट्रांसमीटर हैं — एल वी टैग। प्रासंगिक टिक करें। इन्हीं सेंसर के विरुद्ध इवेंट मापा जाता है, और यही क्लाइंट इवेंट के डिटेल चार्ट में देखेगा।",
        },
        {
          label: 'प्लॉट', title: 'क्लाइंट के ग्राफ़ पर प्लॉट करें',
          body: 'सेव करें, इवेंट लाइव। अब उन्हीं सेंसर को क्लाइंट के डैशबोर्ड पर एक <strong>Graph विजेट</strong> में जोड़ें — और <strong>इवेंट सीधे ग्राफ़ पर प्लॉट</strong> हो जाते हैं, ताकि क्लाइंट हर घटना को उन रीडिंग के संदर्भ में देखे जिन्होंने उसे चलाया।',
          voice: "कंपोनेंट सेव करें, और इवेंट कॉन्फ़िगर होकर लाइव है। एक आख़िरी, संतोषजनक चरण है जो चक्र पूरा करता है। उन्हीं सेंसर को क्लाइंट के डैशबोर्ड पर एक ग्राफ़ विजेट में प्लॉट करें — ठीक वह विजेट जो आपने कॉन्फ़िगरेशन ट्रैक में बनाना सीखा। ग्राफ़ पर आते ही, इवेंट ख़ुद उस पर प्लॉट हो जाते हैं। तो क्लाइंट को सिर्फ़ एक संख्या नहीं मिलती; वे इवेंट की हर घटना को ठीक उस सेंसर रुझान पर अंकित देखते हैं जिसने उसे खोला और बंद किया। यही है एक इवेंट, एक पुन: प्रयोज्य टेम्पलेट से लेकर एक लाइव, ख़ुद-समझाने वाले ग्राफ़ तक।",
          tip: { type: 'rememberLabel', text: 'टेम्पलेट (उपकरण प्रकार से टाइप) → ट्रिगर पर Event कंपोनेंट → टेम्पलेट चुनें → उपकरण सेंसर लाता है → सेंसर चुनें → Graph विजेट पर प्लॉट करें।' },
        },
      ],
    },
    ta: {
      title: 'அமைவு:<br>ஒரு <em>நிகழ்வை</em> அமைத்தல்.',
      subtitle: 'கட்டுநரின் பார்வை — மறுபயன்படுத்தக்கூடிய டெம்ப்ளேட்டிலிருந்து வாடிக்கையாளரின் வரைபடத்தில் நேரலை நிகழ்வுகள் வரை.',
      chapter: 'கட்டுமான தடம் · நிகழ்வுகள்',
      steps: [
        {
          label: 'டெம்ப்ளேட்', title: 'ஒரு நிகழ்வு டெம்ப்ளேட்டை உருவாக்கு',
          body: '<strong>Event Templates</strong>-இல் <strong>Create Event Template</strong> அழுத்துங்கள். ஒரு டெம்ப்ளேட் நிகழ்வை ஒருமுறை வரையறுத்து <strong>எல்லா ஆலைகளிலும் மறுபயன்படுத்தலாம்</strong>.',
          voice: "ஒரு நிகழ்வை அமைப்பது ஒரு டெம்ப்ளேட்டில் தொடங்குகிறது. Event Templates-க்குச் சென்று Create Event Template-ஐ கிளிக் செய்யுங்கள். முக்கிய கருத்து மறுபயன்பாடு: ஒரு டெம்ப்ளேட் நிகழ்வை ஒருமுறை வரையறுக்கிறது — அதன் பெயர், எந்த வகை உபகரணத்துக்கு — பின் அதே டெம்ப்ளேட்டை ஒவ்வொரு ஆலையிலும் பயன்படுத்தலாம். எனவே சுத்தம் சுழற்சி போன்ற பொதுவான நிகழ்வு ஒருமுறை வரையறுக்கப்பட்டு எங்கும் மறுபயன்படுத்தப்படுகிறது.",
        },
        {
          label: 'வகை', title: 'பெயரிட்டு உபகரண வகையைத் தேர்வு செய்',
          body: 'டெம்ப்ளேட்டுக்கு ஒரு <strong>பெயர்</strong>, <strong>விளக்கம்</strong> கொடுத்து, ஒரு <strong>Equipment Type</strong> தேர்வு செய் — இங்கே <em>Tank</em>. இந்த வகை முக்கியம்: பின்னர் தளம் இதைக் கொண்டு அந்த ஆலையின் <strong>எல்லா தொட்டிகளையும்</strong> கொண்டுவரும்.',
          voice: "டெம்ப்ளேட் படிவத்தில், அதற்கு ஒரு தெளிவான பெயர் கொடுங்கள் — இங்கே, எஸ் பி ஆர் கிளீனிங் — ஒரு விளக்கம். பின் முக்கிய புலம்: Equipment Type. நாம் Tank தேர்ந்தெடுக்கிறோம். இந்த ஒரு தேர்வு பின்னால் நிறைய வேலை செய்கிறது: டெம்ப்ளேட் Tank வகையாக இருப்பதால், பின்னர் ஒரு ஆலையுடன் இணைக்கும்போது, தளம் அந்த ஆலையின் ஒவ்வொரு தொட்டியையும் தானாகக் கொண்டுவரும். நிகழ்வுக்குப் பொருந்தும் வகையைத் தேர்ந்து சமர்ப்பியுங்கள் — டெம்ப்ளேட் இப்போது உருவாகி எங்கும் கிடைக்கிறது.",
        },
        {
          label: 'தூண்டி', title: 'ஒரு நிபந்தனை தூண்டியைத் திற',
          body: 'நிகழ்வுகள் <strong>நிபந்தனை தூண்டிகளிலிருந்து</strong> தூண்டப்படுகின்றன — இன்சைட்டுக்குப் பின்னுள்ள அதே நிபந்தனை இயந்திரம். ஏற்கனவே உள்ள ஒரு தூண்டியைத் திறங்கள். ஒவ்வொரு தூண்டியும் <strong>இணைக்கப்பட்ட கூறுகளைக்</strong> கொள்ளலாம்; நிகழ்வு அத்தகைய ஒரு கூறு.',
          voice: "இப்போது, நிகழ்வுக்கு அதன் திறக்கும், மூடும் நிபந்தனைகள் எங்கிருந்து? ஒரு தூண்டியிலிருந்து. நிகழ்வுகள் நிபந்தனை தூண்டிகளில் சவாரி செய்கின்றன — இன்சைட்டை இயக்கும் அதே நிபந்தனை இயந்திரம். எனவே Triggers-க்குச் சென்று ஏற்கனவே அமைக்கப்பட்ட ஒன்றைத் திறக்கிறோம். தூண்டிகளை முதலிலிருந்து கட்டுவது வேறு பாடம்; இப்போது தெரிய வேண்டியது — ஒவ்வொரு தூண்டியும் இணைக்கப்பட்ட கூறுகளைக் கொள்ளலாம், நிகழ்வு அதனுடன் இணைக்கக்கூடிய ஒரு வகை கூறு.",
        },
        {
          label: 'கூறு', title: 'தூண்டி கூறு சேர் — Event',
          body: 'தூண்டிக்குள், <strong>Event</strong> வகை கூறைச் சேர். <strong>Create Event</strong> உரையாடலில், முதல் படி நீங்கள் உருவாக்கிய <strong>நிகழ்வு டெம்ப்ளேட்டைத்</strong> தேர்வது — இங்கே <em>SBR Cleaning</em>.',
          voice: "தூண்டிக்குள், ஒரு புதிய கூறைச் சேர்த்து அதன் வகையை Event என்று தேர்கிறோம். அது Create Event உரையாடலைத் திறக்கிறது. அது முதலில் நிகழ்வு டெம்ப்ளேட்டைக் கேட்கிறது — இங்கேதான் உங்கள் மறுபயன்படுத்தக்கூடிய டெம்ப்ளேட் பலனளிக்கிறது. Select Event Template கீழ்விரிவைத் திறந்து நாம் உருவாக்கிய எஸ் பி ஆர் கிளீனிங்கைத் தேர்கிறோம். டெம்ப்ளேட் நாம் முன் வரையறுத்த அனைத்தையும் கொண்டுவருகிறது, அந்த Tank உபகரண வகை உட்பட.",
        },
        {
          label: 'உபகரணம்', title: 'உபகரணத்தை இணை',
          body: 'டெம்ப்ளேட் <strong>Tank</strong> வகையாக இருந்ததால், <strong>Related Equipment</strong> பட்டியல் இப்போது இந்த ஆலையின் ஒவ்வொரு தொட்டியையும் காட்டுகிறது — ஈக்வலைசேஷன், ஏரேஷன், ஸ்லட்ஜ் ஹோல்டிங் தொட்டி போல. இந்த நிகழ்வு தொடர்பான சரியான உபகரணத்தைத் தேர்.',
          voice: "இப்போது உபகரண வகை என்ன செய்கிறது என்று பாருங்கள். Related Equipment-ஐத் திறங்கள், டெம்ப்ளேட் Tank வகையாக இருந்ததால், தளம் இந்த ஆலையின் ஒவ்வொரு தொட்டியையும் கொண்டுவந்துள்ளது — ஈக்வலைசேஷன் தொட்டி, ஏரேஷன் தொட்டி, ஸ்லட்ஜ் ஹோல்டிங் தொட்டி, குளோரின் தொட்டிகள், அனைத்தும். இந்த நிகழ்வு எதைப் பற்றியதோ அந்தச் சரியான உபகரணத்தை டிக் செய்கிறீர்கள். ஒரு சுத்தம் நிகழ்வை அமைக்கிறோம், எனவே சம்பந்தப்பட்ட தொட்டிகளைத் தேர்கிறோம். தட்டச்சு இல்லை, தேடல் இல்லை — வகை வடிப்பான் வேலையைச் செய்தது.",
        },
        {
          label: 'சென்சார்கள்', title: 'தொடர்புடைய சென்சார்களைத் தேர்',
          body: 'உபகரணத்தைத் தேர்வது <strong>அதன் சென்சார்களை</strong> <strong>Related Sensor Tag Selection Table</strong>-இல் கொண்டுவருகிறது. <strong>தொடர்புடைய சென்சார்களை</strong> டிக் செய் — தொட்டி சுத்தத்துக்கு, லெவல் டிரான்ஸ்மிட்டர்கள். இவற்றை எதிராக நிகழ்வு வரையறுக்கப்பட்டுக் காட்டப்படும்.',
          voice: "உபகரணத்தைத் தேர்வது அடுத்த மாயத்தைச் செய்கிறது: அந்தத் தொட்டிகளுடன் இணைந்த எல்லா சென்சார்களையும் இழுத்து, Related Sensor Tag Selection Table-இல் பட்டியலிடுகிறது. அங்கிருந்து இந்த நிகழ்வுக்கு உண்மையில் முக்கியமான சென்சார்களைத் தேர்கிறீர்கள். தொட்டி சுத்தத்துக்கு, அவை லெவல் டிரான்ஸ்மிட்டர்கள் — எல் வி குறிச்சொற்கள். தொடர்புடையதை டிக் செய். இந்த சென்சார்களுக்கு எதிராகவே நிகழ்வு அளவிடப்படுகிறது, இவையே வாடிக்கையாளர் நிகழ்வின் விவர வரைபடங்களில் காண்பார்.",
        },
        {
          label: 'வரைதல்', title: 'வாடிக்கையாளரின் வரைபடத்தில் வரை',
          body: 'சேமி, நிகழ்வு நேரலை. இப்போது அதே சென்சார்களை வாடிக்கையாளரின் டாஷ்போர்டில் ஒரு <strong>Graph விட்ஜெட்டில்</strong> சேர் — <strong>நிகழ்வுகள் நேரடியாக வரைபடத்தில் வரையப்படுகின்றன</strong>, வாடிக்கையாளர் ஒவ்வொரு நிகழ்வையும் அதை இயக்கிய அளவீடுகளின் சூழலில் காண்பார்.',
          voice: "கூறைச் சேமியுங்கள், நிகழ்வு அமைக்கப்பட்டு நேரலை. வளையத்தை மூடும் ஒரு கடைசி, திருப்திகரமான படி உள்ளது. அந்த சென்சார்களையே வாடிக்கையாளரின் டாஷ்போர்டில் ஒரு வரைபட விட்ஜெட்டில் வரையுங்கள் — அமைப்பு தடத்தில் நீங்கள் கட்டக் கற்ற அதே விட்ஜெட். அவை வரைபடத்தில் வந்தவுடன், நிகழ்வுகளே அதில் வரையப்படுகின்றன. எனவே வாடிக்கையாளருக்கு வெறும் எண் கிடைக்காது; நிகழ்வின் ஒவ்வொரு நிகழ்வையும் அதைத் திறந்து மூடிய சென்சார் போக்கில் குறிக்கப்பட்டுக் காண்கிறார்கள். இதுவே ஒரு நிகழ்வு, மறுபயன்படுத்தக்கூடிய டெம்ப்ளேட்டிலிருந்து நேரலை, தன்னை விளக்கும் வரைபடம் வரை.",
          tip: { type: 'rememberLabel', text: 'டெம்ப்ளேட் (உபகரண வகையால் டைப்) → தூண்டியில் Event கூறு → டெம்ப்ளேட் தேர் → உபகரணம் சென்சார்களைக் கொண்டுவரும் → சென்சார் தேர் → Graph விட்ஜெட்டில் வரை.' },
        },
      ],
    },
    mr: {
      title: 'कॉन्फिगर:<br>एक <em>इव्हेंट</em> सेट करणे.',
      subtitle: 'बिल्डरचा दृष्टिकोन — पुन्हा वापरता येणाऱ्या टेम्पलेटपासून क्लायंटच्या ग्राफवर लाइव्ह इव्हेंटपर्यंत.',
      chapter: 'बिल्ड ट्रॅक · इव्हेंट्स',
      steps: [
        {
          label: 'टेम्पलेट', title: 'एक इव्हेंट टेम्पलेट तयार करा',
          body: '<strong>Event Templates</strong> मध्ये जा आणि <strong>Create Event Template</strong> दाबा. एक टेम्पलेट इव्हेंट एकदा परिभाषित करते आणि <strong>सर्व प्लांटवर पुन्हा वापरता</strong> येते.',
          voice: "इव्हेंट सेट करणे एका टेम्पलेटने सुरू होते. Event Templates मध्ये जा आणि Create Event Template वर क्लिक करा. मुख्य कल्पना म्हणजे पुनर्वापर: एक टेम्पलेट इव्हेंट एकदा परिभाषित करते — त्याचे नाव, कोणत्या प्रकारच्या उपकरणाला लागू — आणि मग तेच टेम्पलेट प्रत्येक प्लांटवर वापरता येते. म्हणून क्लीनिंग सायकलसारखी सामान्य इव्हेंट एकदा परिभाषित होऊन सर्वत्र पुन्हा वापरली जाते.",
        },
        {
          label: 'प्रकार', title: 'नाव द्या व उपकरण प्रकार निवडा',
          body: 'टेम्पलेटला एक <strong>नाव</strong> व <strong>वर्णन</strong> द्या, मग एक <strong>Equipment Type</strong> निवडा — इथे <em>Tank</em>. हा प्रकार महत्त्वाचा: नंतर प्लॅटफॉर्म याने त्या प्लांटचे <strong>सर्व टँक</strong> आणेल.',
          voice: "टेम्पलेट फॉर्ममध्ये, त्याला एक स्पष्ट नाव द्या — इथे, एस बी आर क्लीनिंग — आणि एक वर्णन. मग महत्त्वाचे फील्ड: Equipment Type. आपण Tank निवडतो. ही एक निवड पुढे खूप काम करते: टेम्पलेट Tank प्रकाराचे असल्याने, नंतर तुम्ही ते एखाद्या प्लांटला जोडता तेव्हा, प्लॅटफॉर्म आपोआप त्या प्लांटचा प्रत्येक टँक निवडण्यासाठी आणतो. इव्हेंटशी जुळणारा प्रकार निवडा, आणि सबमिट करा — टेम्पलेट आता तयार झाले आणि सर्वत्र उपलब्ध आहे.",
        },
        {
          label: 'ट्रिगर', title: 'एक कंडिशनल ट्रिगर उघडा',
          body: 'इव्हेंट <strong>कंडिशनल ट्रिगर</strong>मधून फायर होतात — इनसाइटमागचेच कंडिशन इंजिन. एक आधीच सेट केलेला ट्रिगर उघडा. प्रत्येक ट्रिगर <strong>अटॅच्ड कंपोनेंट</strong> ठेवू शकतो; इव्हेंट असा एक कंपोनेंट आहे.',
          voice: "आता, इव्हेंटला त्याच्या उघडण्याच्या आणि बंद होण्याच्या अटी कुठून मिळतात? एका ट्रिगरमधून. इव्हेंट कंडिशनल ट्रिगरवर चालतात — इनसाइट चालवणारेच कंडिशन इंजिन. म्हणून आपण Triggers मध्ये जाऊन आधीच सेट केलेला एक उघडतो. ट्रिगर सुरुवातीपासून बनवणे हा वेगळ्या धड्याचा विषय; आत्ता जाणण्याची गोष्ट म्हणजे प्रत्येक ट्रिगर अटॅच्ड कंपोनेंट ठेवू शकतो, आणि इव्हेंट हा त्याला जोडता येणारा एक प्रकारचा कंपोनेंट आहे.",
        },
        {
          label: 'कंपोनेंट', title: 'ट्रिगर कंपोनेंट जोडा — Event',
          body: 'ट्रिगरमध्ये, <strong>Event</strong> प्रकाराचा कंपोनेंट जोडा. <strong>Create Event</strong> डायलॉगमध्ये, पहिली पायरी म्हणजे तुम्ही बनवलेले <strong>इव्हेंट टेम्पलेट</strong> निवडणे — इथे <em>SBR Cleaning</em>.',
          voice: "ट्रिगरमध्ये, आपण एक नवीन कंपोनेंट जोडतो आणि त्याचा प्रकार Event निवडतो. त्याने Create Event डायलॉग उघडतो. तो प्रथम इव्हेंट टेम्पलेट मागतो — आणि इथेच तुमचे पुन्हा वापरता येणारे टेम्पलेट फळते. Select Event Template ड्रॉपडाउन उघडून आपण बनवलेले एस बी आर क्लीनिंग निवडतो. टेम्पलेट आपण आधी परिभाषित केलेले सर्व आणते, त्या Tank उपकरण प्रकारासह.",
        },
        {
          label: 'उपकरण', title: 'उपकरण जोडा',
          body: 'टेम्पलेट <strong>Tank</strong> प्रकाराचे असल्याने, <strong>Related Equipment</strong> यादी आता या प्लांटचा प्रत्येक टँक दाखवते — इक्वलायझेशन, एरेशन, स्लज होल्डिंग टँक वगैरे. या इव्हेंटशी संबंधित नेमके उपकरण निवडा.',
          voice: "आता उपकरण प्रकार काय करतो ते पाहा. Related Equipment उघडा, आणि टेम्पलेट Tank प्रकाराचे असल्याने, प्लॅटफॉर्मने या प्लांटचा प्रत्येक टँक आणला आहे — इक्वलायझेशन टँक, एरेशन टँक, स्लज होल्डिंग टँक, क्लोरीन टँक, सर्व. ही इव्हेंट ज्याबद्दल आहे ते नेमके उपकरण तुम्ही टिक करता. आपण क्लीनिंग इव्हेंट सेट करत आहोत, म्हणून संबंधित टँक निवडतो. टायपिंग नाही, शोध नाही — प्रकार फिल्टरने काम केले.",
        },
        {
          label: 'सेन्सर', title: 'संबंधित सेन्सर निवडा',
          body: 'उपकरण निवडल्याने <strong>त्याचे सेन्सर</strong> <strong>Related Sensor Tag Selection Table</strong> मध्ये येतात. <strong>संबंधित सेन्सर</strong> टिक करा — टँक क्लीनिंगसाठी, लेव्हल ट्रान्समीटर. याच रीडिंगच्या विरुद्ध इव्हेंट परिभाषित व दाखवले जाईल.',
          voice: "उपकरण निवडणे पुढची जादू करते: ते त्या टँकशी जोडलेले सर्व सेन्सर खेचून आणते, Related Sensor Tag Selection Table मध्ये सूचीबद्ध. तिथून तुम्ही या इव्हेंटसाठी खरोखर महत्त्वाचे सेन्सर निवडता. टँक क्लीनिंगसाठी, ते लेव्हल ट्रान्समीटर आहेत — एल व्ही टॅग. संबंधित टिक करा. याच सेन्सरच्या विरुद्ध इव्हेंट मोजले जाते, आणि हेच क्लायंट इव्हेंटच्या तपशील चार्टमध्ये पाहील.",
        },
        {
          label: 'प्लॉट', title: 'क्लायंटच्या ग्राफवर प्लॉट करा',
          body: 'सेव्ह करा, इव्हेंट लाइव्ह. आता तेच सेन्सर क्लायंटच्या डॅशबोर्डवर एका <strong>Graph विजेटमध्ये</strong> जोडा — आणि <strong>इव्हेंट थेट ग्राफवर प्लॉट</strong> होतात, म्हणजे क्लायंट प्रत्येक घटना ती चालवणाऱ्या रीडिंगच्या संदर्भात पाहतो.',
          voice: "कंपोनेंट सेव्ह करा, आणि इव्हेंट कॉन्फिगर होऊन लाइव्ह आहे. एक शेवटची, समाधानकारक पायरी आहे जी चक्र पूर्ण करते. तेच सेन्सर क्लायंटच्या डॅशबोर्डवर एका ग्राफ विजेटमध्ये प्लॉट करा — अगदी तेच विजेट जे तुम्ही कॉन्फिगरेशन ट्रॅकमध्ये बनवायला शिकलात. ते ग्राफवर आल्यावर, इव्हेंट स्वतः त्यावर प्लॉट होतात. म्हणून क्लायंटला फक्त एक संख्या मिळत नाही; ते इव्हेंटची प्रत्येक घटना ती उघडणाऱ्या आणि बंद करणाऱ्या सेन्सर कलावर चिन्हांकित पाहतात. हीच एक इव्हेंट, पुन्हा वापरता येणाऱ्या टेम्पलेटपासून लाइव्ह, स्वतः स्पष्ट करणाऱ्या ग्राफपर्यंत.",
          tip: { type: 'rememberLabel', text: 'टेम्पलेट (उपकरण प्रकाराने टाइप) → ट्रिगरवर Event कंपोनेंट → टेम्पलेट निवडा → उपकरण सेन्सर आणते → सेन्सर निवडा → Graph विजेटवर प्लॉट करा.' },
        },
      ],
    },
  },
};

export default lesson;
