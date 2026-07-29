import type { Lesson } from '../../types';

const BASE = `${import.meta.env.BASE_URL}screenshots/inventory-config`;

/**
 * M4 · Inventory — the Configure track of L1 (INTERNAL ONLY).
 * Id ends in "-config" and matches base lesson `lesson-01-supervisor`, so it
 * surfaces via the Read⇄Configure toggle on that lesson for internal users (the
 * standard config-track mechanism — see LessonPage). Shares L1's lessonNumber.
 *
 * The setup behind both role views: Asset Management → Store Configuration.
 * Create a store (name → auto abbreviation → user group → assets), then add
 * items to it (category → item from the master list → unit → expected
 * consumption per time window → assets). Real 1280px frames, spotlight-driven.
 */
const lesson: Lesson = {
  id: 'lesson-01-supervisor-config',
  moduleId: 'module-04-inventory',
  lessonNumber: 1,
  estimatedMinutes: 5,
  screenshots: {
    nav: `${BASE}/nav.jpg`,
    stores: `${BASE}/stores.jpg`,
    create: `${BASE}/create.jpg`,
    assets: `${BASE}/assets.jpg`,
    items: `${BASE}/items.jpg`,
    additem: `${BASE}/additem.jpg`,
    consumption: `${BASE}/consumption.jpg`,
    saved: `${BASE}/saved.jpg`,
  },
  layouts: [
    {
      mode: 'detail', screenshot: 'nav', caption: 'Asset Management → Store Configuration',
      spotlight: { top: '59.5%', left: '0.6%', width: '11%', height: '5.4%' },
    },
    {
      mode: 'detail', screenshot: 'stores', caption: 'One row per store',
      spotlight: { top: '22%', left: '1.4%', width: '97.3%', height: '20.9%' },
    },
    {
      mode: 'detail', screenshot: 'create', caption: 'Name it, and attach it to a user group',
      spotlight: { top: '34.8%', left: '41.5%', width: '17.2%', height: '24%' },
    },
    {
      mode: 'detail', screenshot: 'assets', caption: 'Which assets this store serves',
      spotlight: { top: '53.4%', left: '41.8%', width: '16.7%', height: '27.8%' },
    },
    {
      mode: 'detail', screenshot: 'items', caption: 'An empty store — and the columns to fill',
      spotlight: { top: '24.1%', left: '1.4%', width: '97.3%', height: '13.2%' },
    },
    {
      mode: 'detail', screenshot: 'additem', caption: 'Category first, then the item',
      spotlight: { top: '23.8%', left: '41.5%', width: '17.2%', height: '35.6%' },
    },
    {
      mode: 'detail', screenshot: 'consumption', caption: 'Unit, and how much should be used',
      spotlight: { top: '40%', left: '41.5%', width: '17.2%', height: '33.1%' },
    },
    {
      mode: 'detail', screenshot: 'saved', caption: 'Configured — now the plant can use it',
      spotlight: { top: '38.1%', left: '1.4%', width: '97.3%', height: '7.4%' },
    },
  ],
  content: {
    en: {
      title: 'Inventory:<br><em>configure a store.</em>',
      subtitle:
        'Neither the supervisor dashboard nor the operator form has anything in it until someone sets the store up. That is this lesson: create the store, attach it to a user group and its assets, then add each item with the unit it is measured in and how much of it should be used.',
      chapter: 'Inventory · Configuration',
      steps: [
        {
          label: 'Where', title: 'It lives under Asset Management',
          body: "Inventory setup is not on the Inventory page — it is in the nav drawer under <strong>Asset Management → Store Configuration</strong>. That placement is deliberate: a store belongs to an asset, the same way a dashboard does. Operators and supervisors never see this screen.",
          voice: "Before anything, know where the setup lives. It is not on the Inventory page that operators and supervisors use. Open the nav drawer, go to Asset Management, and choose Store Configuration. That placement is deliberate — a store belongs to an asset, the same way a dashboard does. And this screen is ours; operators and supervisors never see it.",
        },
        {
          label: 'The list', title: 'One row per store, across every client',
          body: "This is every store on the platform. <strong>Name of Store</strong> carries a three-letter code underneath — that code is generated for you. <strong>User Group Name</strong> is the client the store belongs to, <strong>Asset Name</strong> is the plant it serves, and <strong>No. of Items</strong> tells you how much has actually been configured. A store showing a low item count is usually one somebody created and never finished.",
          voice: "This is every store on the platform, one row each. Name of Store carries a three-letter code underneath it, which the system generates for you. User Group Name is the client the store belongs to. Asset Name is the plant it serves. And No. of Items tells you how much has actually been configured inside it. That last column is the one to scan — a store with a low item count is usually one somebody created and then never finished.",
          tip: { type: 'tipLabel', text: 'The search box takes an asset, a store name or a client name, so you can find a client\'s store without scrolling.' },
        },
        {
          label: 'Create', title: 'Name it, and attach it to a user group',
          body: "<strong>+ Create</strong> opens a short form. Type a <strong>Store Name</strong> and watch the line underneath: <em>Abbreviation for the store is DEM</em> — the code is derived from the name, and the pencil lets you override it. Then pick the <strong>User Group Name</strong>. This field is the access boundary: whoever is in that user group is who will see this store.",
          voice: "Create opens a short form. Type a store name, then look at the line underneath it. Abbreviation for the store is D-E-M. The system derives a three-letter code from the name you typed, and the little pencil lets you override it if you want something clearer. Then pick the user group. Take this field seriously — it is the access boundary. Whoever is in that user group is exactly who will see this store.",
        },
        {
          label: 'Assets', title: 'Then choose which assets it serves',
          body: "The last field is <strong>Assets</strong>, and it takes more than one. Tick each asset this store supplies — here STP and CETP — and they appear as chips in the field. One store can serve several assets, which is the normal case when a site has a couple of plants drawing from the same shelf. This choice matters later: it decides which assets you can point an item at.",
          voice: "The last field is Assets, and unlike the others it takes more than one. Tick each asset this store supplies. Here that is S-T-P and C-E-T-P, and each one appears as a chip in the field. One store serving several assets is completely normal — it is what you want when a site has a couple of plants drawing chemicals from the same shelf. Remember this choice, because it comes back: it decides which assets you can point an item at.",
        },
        {
          label: 'Empty', title: 'A new store starts empty',
          body: "Save, open the store, and you land on <strong>Store Management</strong> — empty, showing you the shape of what you are about to fill in. <strong>Item Name</strong> and <strong>Category</strong> identify the item; under <strong>Config Details</strong> sit the two things you configure: <strong>Units</strong> and <strong>Expected Consumption</strong>. Until there is a row here, the operator's form has nothing to offer and the supervisor's table is blank.",
          voice: "Save, then open the store, and you land on Store Management. It is empty, but it shows you the shape of what you are about to fill in. Item Name and Category identify the item. And under the Config Details heading sit the two things you actually configure: Units, and Expected Consumption. This is worth saying plainly — until there is at least one row on this page, the operator's form has nothing to offer, and the supervisor's stock table is blank.",
        },
        {
          label: 'Add item', title: 'Category first, then the item',
          body: "<strong>Add Item</strong> asks for the <strong>Category</strong> first — Chemicals, Solution, Consumables and so on — because the category filters what comes next. <strong>Item Name</strong> is then a searchable list, not a text box: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. You are choosing from a master list, so the same chemical is spelled the same way at every plant and stays comparable across them.",
          voice: "Add Item asks for the category first — Chemicals, Solution, Consumables and so on — because the category filters what comes next. Item Name is then a searchable list rather than a free text box: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. This is the important detail. You are choosing from a master list, not typing a name. That is what keeps the same chemical spelled the same way at every plant, and it is why consumption stays comparable across them.",
          tip: { type: 'noteLabel', text: 'If an item genuinely is not in the list, it has to be added to the master list first — you cannot invent one here.' },
        },
        {
          label: 'Consumption', title: 'The unit, and how much should be used',
          body: "<strong>Store Consumption</strong> is where the number in the supervisor's <em>Expected</em> column comes from. <strong>Unit</strong> is how the item is measured — Kg, L. Then <strong>Expected Value</strong>, <strong>Time</strong> and <strong>Time Unit</strong> together read as a rate: <em>1 Kg every 4 days</em>. Finally <strong>Asset</strong> — and note it only offers the assets you attached to the store. Set the rate honestly; it is what makes real consumption look high or low.",
          voice: "Store Consumption is the part that matters most, because it is where the number in the supervisor's Expected column comes from. Unit is how the item is measured — kilograms, litres. Then Expected Value, Time and Time Unit combine into a rate: one kilogram every four days. Finally Asset, and notice it only offers the assets you attached to the store earlier. Set this rate honestly, from what the plant actually doses. It is the benchmark that makes real consumption look high or low.",
          tip: { type: 'rememberLabel', text: 'Expected consumption is a benchmark, not a limit. Nothing blocks an operator from removing more than this — it just shows up as a gap.' },
        },
        {
          label: 'Done', title: 'One row here, and both role views come alive',
          body: "Create, and the item lands in the table: <strong>Jaggery · Chemicals · Kg · 1 every 4 day</strong>. That single row is now doing two jobs. The operator sees Jaggery under Chemicals with Kg pre-filled, so <em>Add to Store</em> and <em>Remove from Store</em> just work. The supervisor sees it in the stock table with a balance, a consumption rate, and an expected figure to compare against. Repeat per item, and the store is done.",
          voice: "Hit Create, and the item lands in the table: Jaggery, Chemicals, kilograms, one every four days. That single row is now doing two jobs at once. The operator opens Inventory and sees Jaggery under Chemicals with kilograms already filled in, so Add to Store and Remove from Store simply work. The supervisor sees the same item in the stock table with a balance, a consumption rate, and an expected figure to compare it against. Repeat that for each item the plant holds, and the store is configured.",
          tip: { type: 'upNextLabel', text: 'Switch back to the Read track to see exactly what this configuration produces for supervisors and for operators.' },
        },
      ],
    },
    hi: {
      title: 'इन्वेंटरी:<br><em>स्टोर कॉन्फ़िगर करें।</em>',
      subtitle:
        'जब तक कोई स्टोर सेट नहीं करता, न सुपरवाइज़र का डैशबोर्ड कुछ दिखाता है और न ऑपरेटर का फ़ॉर्म। यही यह पाठ है: स्टोर बनाएँ, उसे यूज़र ग्रुप और उसके एसेट से जोड़ें, फिर हर वस्तु उसकी इकाई और अपेक्षित खपत के साथ जोड़ें।',
      chapter: 'इन्वेंटरी · कॉन्फ़िगरेशन',
      steps: [
        {
          label: 'कहाँ', title: 'यह Asset Management के नीचे है',
          body: "इन्वेंटरी सेटअप Inventory पेज पर नहीं है — यह नैव ड्रॉअर में <strong>Asset Management → Store Configuration</strong> के नीचे है। यह जगह जान-बूझकर है: स्टोर किसी एसेट का होता है, ठीक जैसे डैशबोर्ड होता है। ऑपरेटर और सुपरवाइज़र यह स्क्रीन कभी नहीं देखते।",
          voice: "सबसे पहले यह जान लें कि सेटअप कहाँ है। यह उस Inventory पेज पर नहीं है जिसे ऑपरेटर और सुपरवाइज़र इस्तेमाल करते हैं। नैव ड्रॉअर खोलें, Asset Management पर जाएँ, और Store Configuration चुनें। यह जगह जान-बूझकर है — स्टोर किसी एसेट का होता है, ठीक जैसे डैशबोर्ड होता है। और यह स्क्रीन हमारी है; ऑपरेटर और सुपरवाइज़र इसे कभी नहीं देखते।",
        },
        {
          label: 'सूची', title: 'हर स्टोर की एक पंक्ति, हर क्लाइंट की',
          body: "यह प्लेटफ़ॉर्म का हर स्टोर है। <strong>Name of Store</strong> के नीचे तीन अक्षर का कोड होता है — वह कोड आपके लिए बनता है। <strong>User Group Name</strong> वह क्लाइंट है जिसका स्टोर है, <strong>Asset Name</strong> वह प्लांट है जिसे वह सेवा देता है, और <strong>No. of Items</strong> बताता है कि असल में कितना कॉन्फ़िगर हुआ है। कम आइटम गिनती वाला स्टोर आम तौर पर वही है जिसे किसी ने बनाया और पूरा नहीं किया।",
          voice: "यह प्लेटफ़ॉर्म का हर स्टोर है, एक-एक पंक्ति में। Name of Store के नीचे तीन अक्षर का कोड होता है, जो सिस्टम आपके लिए बनाता है। User Group Name वह क्लाइंट है जिसका स्टोर है। Asset Name वह प्लांट है जिसे वह सेवा देता है। और No. of Items बताता है कि उसके अंदर असल में कितना कॉन्फ़िगर हुआ है। यही आख़िरी कॉलम देखने लायक है — कम आइटम गिनती वाला स्टोर आम तौर पर वही होता है जिसे किसी ने बनाया और फिर कभी पूरा नहीं किया।",
          tip: { type: 'tipLabel', text: 'सर्च बॉक्स एसेट, स्टोर नाम या क्लाइंट नाम लेता है, तो क्लाइंट का स्टोर बिना स्क्रॉल किए मिल जाता है।' },
        },
        {
          label: 'बनाएँ', title: 'नाम दें, और यूज़र ग्रुप से जोड़ें',
          body: "<strong>+ Create</strong> एक छोटा फ़ॉर्म खोलता है। <strong>Store Name</strong> लिखें और नीचे की पंक्ति देखें: <em>Abbreviation for the store is DEM</em> — कोड नाम से बनता है, और पेंसिल से आप उसे बदल सकते हैं। फिर <strong>User Group Name</strong> चुनें। यह फ़ील्ड एक्सेस की सीमा है: जो उस यूज़र ग्रुप में है, वही यह स्टोर देखेगा।",
          voice: "Create एक छोटा फ़ॉर्म खोलता है। स्टोर का नाम लिखें, फिर उसके नीचे की पंक्ति देखें। Abbreviation for the store is डी-ई-एम। सिस्टम आपके लिखे नाम से तीन अक्षर का कोड बनाता है, और छोटी पेंसिल से आप उसे बदल सकते हैं अगर कुछ और साफ़ चाहिए। फिर यूज़र ग्रुप चुनें। इस फ़ील्ड को गंभीरता से लें — यह एक्सेस की सीमा है। जो उस यूज़र ग्रुप में है, बिल्कुल वही यह स्टोर देखेगा।",
        },
        {
          label: 'एसेट', title: 'फिर चुनें यह किन एसेट को सेवा देता है',
          body: "आख़िरी फ़ील्ड <strong>Assets</strong> है, और यह एक से ज़्यादा लेता है। हर उस एसेट पर टिक करें जिसे यह स्टोर सप्लाई करता है — यहाँ STP और CETP — और वे फ़ील्ड में चिप बनकर दिखते हैं। एक स्टोर कई एसेट को सेवा दे सकता है, जो सामान्य बात है जब एक साइट के दो प्लांट एक ही शेल्फ़ से लेते हैं। यह चुनाव आगे मायने रखता है: यही तय करता है कि किसी वस्तु को किन एसेट पर लगाया जा सकता है।",
          voice: "आख़िरी फ़ील्ड Assets है, और बाक़ी से अलग यह एक से ज़्यादा लेता है। हर उस एसेट पर टिक करें जिसे यह स्टोर सप्लाई करता है। यहाँ वे एस-टी-पी और सी-ई-टी-पी हैं, और हर एक फ़ील्ड में चिप बनकर दिखता है। एक स्टोर कई एसेट को सेवा दे — यह पूरी तरह सामान्य है, और तब ज़रूरी है जब एक साइट के दो प्लांट एक ही शेल्फ़ से रसायन लेते हैं। यह चुनाव याद रखें, क्योंकि यह लौटकर आता है: यही तय करता है कि किसी वस्तु को किन एसेट पर लगाया जा सकता है।",
        },
        {
          label: 'ख़ाली', title: 'नया स्टोर ख़ाली शुरू होता है',
          body: "सेव करें, स्टोर खोलें, और आप <strong>Store Management</strong> पर पहुँचते हैं — ख़ाली, लेकिन दिखाता है कि आपको क्या भरना है। <strong>Item Name</strong> और <strong>Category</strong> वस्तु की पहचान हैं; <strong>Config Details</strong> के नीचे वे दो चीज़ें हैं जो आप कॉन्फ़िगर करते हैं: <strong>Units</strong> और <strong>Expected Consumption</strong>। जब तक यहाँ एक पंक्ति नहीं है, ऑपरेटर के फ़ॉर्म में देने को कुछ नहीं और सुपरवाइज़र की तालिका ख़ाली है।",
          voice: "सेव करें, फिर स्टोर खोलें, और आप Store Management पर पहुँचते हैं। यह ख़ाली है, लेकिन दिखाता है कि आपको क्या भरना है। Item Name और Category वस्तु की पहचान हैं। और Config Details शीर्षक के नीचे वे दो चीज़ें हैं जो आप असल में कॉन्फ़िगर करते हैं: Units, और Expected Consumption। यह साफ़ कहना ज़रूरी है — जब तक इस पेज पर कम से कम एक पंक्ति नहीं है, ऑपरेटर के फ़ॉर्म में देने को कुछ नहीं है, और सुपरवाइज़र की स्टॉक तालिका ख़ाली है।",
        },
        {
          label: 'वस्तु जोड़ें', title: 'पहले श्रेणी, फिर वस्तु',
          body: "<strong>Add Item</strong> पहले <strong>Category</strong> पूछता है — Chemicals, Solution, Consumables वगैरह — क्योंकि श्रेणी तय करती है कि आगे क्या दिखेगा। फिर <strong>Item Name</strong> एक खोजने योग्य सूची है, टेक्स्ट बॉक्स नहीं: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. आप एक मास्टर सूची से चुन रहे हैं, इसलिए वही रसायन हर प्लांट में एक ही तरह लिखा जाता है और तुलना योग्य रहता है।",
          voice: "Add Item पहले श्रेणी पूछता है — Chemicals, Solution, Consumables वगैरह — क्योंकि श्रेणी तय करती है कि आगे क्या दिखेगा। फिर Item Name एक खोजने योग्य सूची है, कोई खुला टेक्स्ट बॉक्स नहीं: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. यह अहम बात है। आप मास्टर सूची से चुन रहे हैं, नाम टाइप नहीं कर रहे। इसी से वही रसायन हर प्लांट में एक ही तरह लिखा जाता है, और इसी से खपत प्लांटों के बीच तुलना योग्य रहती है।",
          tip: { type: 'noteLabel', text: 'अगर कोई वस्तु वाक़ई सूची में नहीं है, तो पहले उसे मास्टर सूची में जोड़ना होगा — यहाँ नई नहीं बनाई जा सकती।' },
        },
        {
          label: 'खपत', title: 'इकाई, और कितना इस्तेमाल होना चाहिए',
          body: "<strong>Store Consumption</strong> से ही सुपरवाइज़र के <em>Expected</em> कॉलम का आँकड़ा आता है। <strong>Unit</strong> वस्तु का माप है — Kg, L. फिर <strong>Expected Value</strong>, <strong>Time</strong> और <strong>Time Unit</strong> मिलकर एक दर बनाते हैं: <em>हर 4 दिन में 1 Kg</em>। आख़िर में <strong>Asset</strong> — और ध्यान दें, यह वही एसेट देता है जो आपने स्टोर से जोड़े थे। दर ईमानदारी से रखें; इसी से असली खपत ज़्यादा या कम लगती है।",
          voice: "Store Consumption सबसे अहम हिस्सा है, क्योंकि सुपरवाइज़र के Expected कॉलम का आँकड़ा यहीं से आता है। Unit वस्तु का माप है — किलोग्राम, लीटर। फिर Expected Value, Time और Time Unit मिलकर एक दर बनाते हैं: हर चार दिन में एक किलोग्राम। आख़िर में Asset, और ध्यान दें कि यह वही एसेट देता है जो आपने पहले स्टोर से जोड़े थे। यह दर ईमानदारी से रखें, उसी के मुताबिक़ जो प्लांट असल में डोज़ करता है। यही वह मानक है जिससे असली खपत ज़्यादा या कम लगती है।",
          tip: { type: 'rememberLabel', text: 'अपेक्षित खपत एक मानक है, सीमा नहीं। ऑपरेटर इससे ज़्यादा निकाल सकता है — वह बस अंतर के रूप में दिखता है।' },
        },
        {
          label: 'पूरा', title: 'यहाँ एक पंक्ति, और दोनों भूमिकाएँ जीवित',
          body: "Create करें, और वस्तु तालिका में आ जाती है: <strong>Jaggery · Chemicals · Kg · हर 4 दिन में 1</strong>। वह एक पंक्ति अब दो काम कर रही है। ऑपरेटर को Chemicals के नीचे Jaggery दिखता है, Kg पहले से भरा हुआ, तो <em>Add to Store</em> और <em>Remove from Store</em> काम करते हैं। सुपरवाइज़र को वही वस्तु स्टॉक तालिका में बैलेंस, खपत दर और तुलना के लिए अपेक्षित आँकड़े के साथ दिखती है। हर वस्तु के लिए दोहराएँ, और स्टोर तैयार।",
          voice: "Create दबाएँ, और वस्तु तालिका में आ जाती है: Jaggery, Chemicals, किलोग्राम, हर चार दिन में एक। वह एक पंक्ति अब एक साथ दो काम कर रही है। ऑपरेटर Inventory खोलता है और उसे Chemicals के नीचे Jaggery दिखता है, किलोग्राम पहले से भरा हुआ, तो Add to Store और Remove from Store सीधे काम करते हैं। सुपरवाइज़र को वही वस्तु स्टॉक तालिका में बैलेंस, खपत दर, और तुलना के लिए अपेक्षित आँकड़े के साथ दिखती है। प्लांट की हर वस्तु के लिए यही दोहराएँ, और स्टोर कॉन्फ़िगर हो गया।",
          tip: { type: 'upNextLabel', text: 'Read ट्रैक पर लौटें और देखें कि यह कॉन्फ़िगरेशन सुपरवाइज़र और ऑपरेटर के लिए क्या बनाता है।' },
        },
      ],
    },
    ta: {
      title: 'சரக்கு:<br><em>ஒரு கடையை அமையுங்கள்.</em>',
      subtitle:
        'யாராவது கடையை அமைக்கும் வரை மேற்பார்வையாளர் டாஷ்போர்டிலும் இயக்குநர் படிவத்திலும் ஒன்றும் இருக்காது. இதுவே இந்தப் பாடம்: கடையை உருவாக்கி, பயனர் குழு மற்றும் அதன் சொத்துகளுடன் இணைத்து, பின் ஒவ்வொரு பொருளையும் அதன் அளவீட்டு அலகு மற்றும் எதிர்பார்க்கப்படும் நுகர்வுடன் சேர்க்கவும்.',
      chapter: 'சரக்கு · அமைப்பு',
      steps: [
        {
          label: 'எங்கே', title: 'இது Asset Management-க்கு கீழே உள்ளது',
          body: "சரக்கு அமைப்பு Inventory பக்கத்தில் இல்லை — அது நேவ் டிராயரில் <strong>Asset Management → Store Configuration</strong>-க்கு கீழே உள்ளது. இந்த இடம் வேண்டுமென்றே: டாஷ்போர்டு போலவே ஒரு கடையும் ஒரு சொத்துக்கு உரியது. இயக்குநர்களும் மேற்பார்வையாளர்களும் இந்தத் திரையை ஒருபோதும் பார்ப்பதில்லை.",
          voice: "முதலில், அமைப்பு எங்கே உள்ளது என்பதை அறியுங்கள். இயக்குநர்களும் மேற்பார்வையாளர்களும் பயன்படுத்தும் Inventory பக்கத்தில் அது இல்லை. நேவ் டிராயரைத் திறந்து, Asset Management-க்குச் சென்று, Store Configuration-ஐத் தேர்வு செய்யுங்கள். இந்த இடம் வேண்டுமென்றே வைக்கப்பட்டது — டாஷ்போர்டு போலவே ஒரு கடையும் ஒரு சொத்துக்கு உரியது. மேலும் இந்தத் திரை நமக்கானது; இயக்குநர்களும் மேற்பார்வையாளர்களும் இதை ஒருபோதும் பார்ப்பதில்லை.",
        },
        {
          label: 'பட்டியல்', title: 'ஒவ்வொரு கடைக்கும் ஒரு வரிசை, ஒவ்வொரு வாடிக்கையாளருக்கும்',
          body: "இது தளத்தின் ஒவ்வொரு கடையும். <strong>Name of Store</strong>-க்கு கீழே மூன்று எழுத்துக் குறியீடு உள்ளது — அது உங்களுக்காக உருவாக்கப்படுகிறது. <strong>User Group Name</strong> கடை சேர்ந்த வாடிக்கையாளர், <strong>Asset Name</strong> அது சேவை செய்யும் ஆலை, <strong>No. of Items</strong> உண்மையில் எவ்வளவு அமைக்கப்பட்டுள்ளது என்பதைக் கூறுகிறது. குறைந்த பொருள் எண்ணிக்கை கொண்ட கடை பொதுவாக யாரோ உருவாக்கி முடிக்காத ஒன்று.",
          voice: "இது தளத்தின் ஒவ்வொரு கடையும், தனித்தனி வரிசையில். Name of Store-க்கு கீழே மூன்று எழுத்துக் குறியீடு உள்ளது, அதை சிஸ்டம் உங்களுக்காக உருவாக்குகிறது. User Group Name கடை சேர்ந்த வாடிக்கையாளர். Asset Name அது சேவை செய்யும் ஆலை. மேலும் No. of Items அதற்குள் உண்மையில் எவ்வளவு அமைக்கப்பட்டுள்ளது என்பதைக் கூறுகிறது. அந்தக் கடைசி நிரலைத்தான் கவனிக்க வேண்டும் — குறைந்த பொருள் எண்ணிக்கை கொண்ட கடை பொதுவாக யாரோ உருவாக்கி பின் ஒருபோதும் முடிக்காத ஒன்று.",
          tip: { type: 'tipLabel', text: 'தேடல் பெட்டி சொத்து, கடைப் பெயர் அல்லது வாடிக்கையாளர் பெயரை ஏற்கும், எனவே ஸ்க்ரோல் செய்யாமல் கடையைக் கண்டறியலாம்.' },
        },
        {
          label: 'உருவாக்கு', title: 'பெயரிடுங்கள், பயனர் குழுவுடன் இணைக்கவும்',
          body: "<strong>+ Create</strong> ஒரு சிறிய படிவத்தைத் திறக்கும். <strong>Store Name</strong>-ஐத் தட்டச்சு செய்து கீழே உள்ள வரியைப் பாருங்கள்: <em>Abbreviation for the store is DEM</em> — குறியீடு பெயரிலிருந்து பெறப்படுகிறது, பென்சில் மூலம் மாற்றலாம். பின் <strong>User Group Name</strong>-ஐத் தேர்வு செய்யுங்கள். இந்தப் புலம் அணுகல் எல்லை: அந்தக் குழுவில் இருப்பவர்கள்தான் இந்தக் கடையைப் பார்ப்பார்கள்.",
          voice: "Create ஒரு சிறிய படிவத்தைத் திறக்கும். கடையின் பெயரைத் தட்டச்சு செய்து, பின் அதற்குக் கீழே உள்ள வரியைப் பாருங்கள். Abbreviation for the store is டி-இ-எம். நீங்கள் தட்டச்சு செய்த பெயரிலிருந்து சிஸ்டம் மூன்று எழுத்துக் குறியீட்டைப் பெறுகிறது, தெளிவான ஒன்று வேண்டுமெனில் சிறிய பென்சில் மூலம் மாற்றலாம். பின் பயனர் குழுவைத் தேர்வு செய்யுங்கள். இந்தப் புலத்தை தீவிரமாக எடுத்துக்கொள்ளுங்கள் — இது அணுகல் எல்லை. அந்தக் குழுவில் இருப்பவர்கள் யார் என்பதுதான் இந்தக் கடையைப் பார்ப்பவர்கள்.",
        },
        {
          label: 'சொத்துகள்', title: 'பின் எந்தச் சொத்துகளுக்குச் சேவை என்பதைத் தேர்வு செய்யுங்கள்',
          body: "கடைசிப் புலம் <strong>Assets</strong>, இது ஒன்றுக்கு மேற்பட்டதை ஏற்கும். இந்தக் கடை வழங்கும் ஒவ்வொரு சொத்தையும் டிக் செய்யுங்கள் — இங்கே STP மற்றும் CETP — அவை புலத்தில் சிப்களாகத் தோன்றும். ஒரு கடை பல சொத்துகளுக்குச் சேவை செய்வது இயல்பானது, ஒரு தளத்தில் இரு ஆலைகள் ஒரே அலமாரியிலிருந்து எடுக்கும்போது. இந்தத் தேர்வு பின்னர் முக்கியம்: ஒரு பொருளை எந்தச் சொத்துகளுக்குச் சுட்டலாம் என்பதை இது தீர்மானிக்கிறது.",
          voice: "கடைசிப் புலம் Assets, மற்றவற்றைப் போலல்லாமல் இது ஒன்றுக்கு மேற்பட்டதை ஏற்கும். இந்தக் கடை வழங்கும் ஒவ்வொரு சொத்தையும் டிக் செய்யுங்கள். இங்கே அவை எஸ்-டி-பி மற்றும் சி-இ-டி-பி, ஒவ்வொன்றும் புலத்தில் சிப்பாகத் தோன்றும். ஒரு கடை பல சொத்துகளுக்குச் சேவை செய்வது முழுக்க இயல்பானது — ஒரு தளத்தில் இரு ஆலைகள் ஒரே அலமாரியிலிருந்து ரசாயனங்களை எடுக்கும்போது இதுவே தேவை. இந்தத் தேர்வை நினைவில் வையுங்கள், ஏனெனில் இது திரும்பி வரும்: ஒரு பொருளை எந்தச் சொத்துகளுக்குச் சுட்டலாம் என்பதை இது தீர்மானிக்கிறது.",
        },
        {
          label: 'காலி', title: 'புதிய கடை காலியாகத் தொடங்குகிறது',
          body: "சேமித்து, கடையைத் திறந்தால் <strong>Store Management</strong>-க்கு வருகிறீர்கள் — காலி, ஆனால் நிரப்பப் போவதின் வடிவத்தைக் காட்டுகிறது. <strong>Item Name</strong> மற்றும் <strong>Category</strong> பொருளை அடையாளப்படுத்துகின்றன; <strong>Config Details</strong>-க்கு கீழே நீங்கள் அமைக்கும் இரண்டு விஷயங்கள்: <strong>Units</strong> மற்றும் <strong>Expected Consumption</strong>. இங்கே ஒரு வரிசை வரும் வரை இயக்குநரின் படிவத்தில் வழங்க ஒன்றுமில்லை, மேற்பார்வையாளரின் அட்டவணை காலி.",
          voice: "சேமித்து, பின் கடையைத் திறந்தால் Store Management-க்கு வருகிறீர்கள். அது காலி, ஆனால் நீங்கள் நிரப்பப் போவதின் வடிவத்தைக் காட்டுகிறது. Item Name மற்றும் Category பொருளை அடையாளப்படுத்துகின்றன. மேலும் Config Details தலைப்புக்குக் கீழே நீங்கள் உண்மையில் அமைக்கும் இரண்டு விஷயங்கள் உள்ளன: Units, மற்றும் Expected Consumption. இதை தெளிவாகச் சொல்ல வேண்டும் — இந்தப் பக்கத்தில் குறைந்தது ஒரு வரிசை வரும் வரை, இயக்குநரின் படிவத்தில் வழங்க ஒன்றுமில்லை, மேற்பார்வையாளரின் இருப்பு அட்டவணை காலியாக இருக்கும்.",
        },
        {
          label: 'பொருள் சேர்', title: 'முதலில் வகை, பின் பொருள்',
          body: "<strong>Add Item</strong> முதலில் <strong>Category</strong>-ஐக் கேட்கிறது — Chemicals, Solution, Consumables போன்றவை — ஏனெனில் வகை அடுத்து வருவதை வடிகட்டுகிறது. பின் <strong>Item Name</strong> ஒரு தேடக்கூடிய பட்டியல், உரைப் பெட்டி அல்ல: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. நீங்கள் ஒரு முதன்மைப் பட்டியலிலிருந்து தேர்வு செய்கிறீர்கள், எனவே அதே ரசாயனம் எல்லா ஆலைகளிலும் ஒரே எழுத்தில் இருந்து ஒப்பிடத்தக்கதாக இருக்கும்.",
          voice: "Add Item முதலில் வகையைக் கேட்கிறது — Chemicals, Solution, Consumables போன்றவை — ஏனெனில் வகை அடுத்து வருவதை வடிகட்டுகிறது. பின் Item Name ஒரு தேடக்கூடிய பட்டியல், திறந்த உரைப் பெட்டி அல்ல: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. இதுவே முக்கியமான விவரம். நீங்கள் முதன்மைப் பட்டியலிலிருந்து தேர்வு செய்கிறீர்கள், பெயரைத் தட்டச்சு செய்யவில்லை. அதுவே அதே ரசாயனம் எல்லா ஆலைகளிலும் ஒரே எழுத்தில் இருக்கச் செய்கிறது, அதனால்தான் நுகர்வு ஆலைகளுக்கு இடையே ஒப்பிடத்தக்கதாக இருக்கிறது.",
          tip: { type: 'noteLabel', text: 'ஒரு பொருள் உண்மையில் பட்டியலில் இல்லையெனில், அதை முதலில் முதன்மைப் பட்டியலில் சேர்க்க வேண்டும் — இங்கே புதிதாக உருவாக்க முடியாது.' },
        },
        {
          label: 'நுகர்வு', title: 'அலகு, மற்றும் எவ்வளவு பயன்படுத்த வேண்டும்',
          body: "மேற்பார்வையாளரின் <em>Expected</em> நிரலில் உள்ள எண் <strong>Store Consumption</strong>-லிருந்து வருகிறது. <strong>Unit</strong> பொருள் அளக்கப்படும் விதம் — Kg, L. பின் <strong>Expected Value</strong>, <strong>Time</strong> மற்றும் <strong>Time Unit</strong> சேர்ந்து ஒரு விகிதமாகப் படிக்கின்றன: <em>4 நாட்களுக்கு 1 Kg</em>. இறுதியாக <strong>Asset</strong> — கடையுடன் இணைத்த சொத்துகளை மட்டுமே இது வழங்குகிறது. விகிதத்தை நேர்மையாக அமைக்கவும்; உண்மையான நுகர்வு அதிகமா குறைவா என்பதை இதுவே காட்டுகிறது.",
          voice: "Store Consumption மிக முக்கியமான பகுதி, ஏனெனில் மேற்பார்வையாளரின் Expected நிரலில் உள்ள எண் இங்கிருந்தே வருகிறது. Unit பொருள் அளக்கப்படும் விதம் — கிலோகிராம், லிட்டர். பின் Expected Value, Time மற்றும் Time Unit சேர்ந்து ஒரு விகிதமாகின்றன: நான்கு நாட்களுக்கு ஒரு கிலோகிராம். இறுதியாக Asset, மேலும் நீங்கள் முன்பு கடையுடன் இணைத்த சொத்துகளை மட்டுமே இது வழங்குவதைக் கவனியுங்கள். ஆலை உண்மையில் அளிப்பதின் அடிப்படையில் இந்த விகிதத்தை நேர்மையாக அமைக்கவும். உண்மையான நுகர்வு அதிகமாகவோ குறைவாகவோ தெரிவதற்கான அளவுகோல் இதுவே.",
          tip: { type: 'rememberLabel', text: 'எதிர்பார்க்கப்படும் நுகர்வு ஒரு அளவுகோல், வரம்பு அல்ல. இதற்கு மேல் எடுப்பதை எதுவும் தடுக்காது — அது இடைவெளியாகத் தெரியும்.' },
        },
        {
          label: 'முடிந்தது', title: 'இங்கே ஒரு வரிசை, இரு பாத்திரங்களும் உயிர்பெறும்',
          body: "Create செய்யுங்கள், பொருள் அட்டவணையில் வரும்: <strong>Jaggery · Chemicals · Kg · 4 நாளுக்கு 1</strong>. அந்த ஒரு வரிசை இப்போது இரு வேலைகளைச் செய்கிறது. இயக்குநர் Chemicals-க்கு கீழே Jaggery-ஐப் பார்க்கிறார், Kg முன்பே நிரப்பப்பட்டு, எனவே <em>Add to Store</em> மற்றும் <em>Remove from Store</em> வேலை செய்கின்றன. மேற்பார்வையாளர் அதே பொருளை இருப்பு அட்டவணையில் இருப்பு, நுகர்வு விகிதம், ஒப்பிட எதிர்பார்க்கப்படும் எண்ணுடன் பார்க்கிறார். ஒவ்வொரு பொருளுக்கும் மீண்டும் செய்யுங்கள், கடை தயார்.",
          voice: "Create அழுத்துங்கள், பொருள் அட்டவணையில் வரும்: Jaggery, Chemicals, கிலோகிராம், நான்கு நாளுக்கு ஒன்று. அந்த ஒரு வரிசை இப்போது ஒரே நேரத்தில் இரு வேலைகளைச் செய்கிறது. இயக்குநர் Inventory-ஐத் திறந்து Chemicals-க்கு கீழே Jaggery-ஐப் பார்க்கிறார், கிலோகிராம் ஏற்கனவே நிரப்பப்பட்டு, எனவே Add to Store மற்றும் Remove from Store நேரடியாக வேலை செய்கின்றன. மேற்பார்வையாளர் அதே பொருளை இருப்பு அட்டவணையில் இருப்பு, நுகர்வு விகிதம், ஒப்பிடுவதற்கான எதிர்பார்க்கப்படும் எண்ணுடன் பார்க்கிறார். ஆலை வைத்திருக்கும் ஒவ்வொரு பொருளுக்கும் இதை மீண்டும் செய்யுங்கள், கடை அமைக்கப்பட்டுவிட்டது.",
          tip: { type: 'upNextLabel', text: 'Read தடத்திற்குத் திரும்பி, இந்த அமைப்பு மேற்பார்வையாளருக்கும் இயக்குநருக்கும் என்ன உருவாக்குகிறது என்பதைப் பாருங்கள்.' },
        },
      ],
    },
    mr: {
      title: 'इन्व्हेंटरी:<br><em>स्टोअर कॉन्फिगर करा.</em>',
      subtitle:
        'कोणी स्टोअर सेट करेपर्यंत पर्यवेक्षकाच्या डॅशबोर्डवर आणि ऑपरेटरच्या फॉर्ममध्ये काहीच नसते. हाच हा धडा: स्टोअर तयार करा, ते यूजर ग्रुप आणि त्याच्या अॅसेटशी जोडा, मग प्रत्येक वस्तू तिच्या मापन एककासह आणि अपेक्षित वापरासह जोडा.',
      chapter: 'इन्व्हेंटरी · कॉन्फिगरेशन',
      steps: [
        {
          label: 'कुठे', title: 'हे Asset Management खाली आहे',
          body: "इन्व्हेंटरी सेटअप Inventory पानावर नाही — तो नॅव्ह ड्रॉवरमध्ये <strong>Asset Management → Store Configuration</strong> खाली आहे. ही जागा मुद्दाम: डॅशबोर्डप्रमाणेच स्टोअरही एका अॅसेटचे असते. ऑपरेटर आणि पर्यवेक्षक ही स्क्रीन कधीच पाहत नाहीत.",
          voice: "सर्वप्रथम सेटअप कुठे आहे हे जाणून घ्या. ऑपरेटर आणि पर्यवेक्षक वापरतात त्या Inventory पानावर तो नाही. नॅव्ह ड्रॉवर उघडा, Asset Management वर जा, आणि Store Configuration निवडा. ही जागा मुद्दाम ठेवली आहे — डॅशबोर्डप्रमाणेच स्टोअरही एका अॅसेटचे असते. आणि ही स्क्रीन आपली आहे; ऑपरेटर आणि पर्यवेक्षक ती कधीच पाहत नाहीत.",
        },
        {
          label: 'यादी', title: 'प्रत्येक स्टोअरची एक ओळ, प्रत्येक क्लायंटची',
          body: "हे प्लॅटफॉर्मवरील प्रत्येक स्टोअर आहे. <strong>Name of Store</strong> खाली तीन अक्षरी कोड असतो — तो कोड तुमच्यासाठी तयार होतो. <strong>User Group Name</strong> हा स्टोअर ज्याचे आहे तो क्लायंट, <strong>Asset Name</strong> ते सेवा देणारा प्लांट, आणि <strong>No. of Items</strong> प्रत्यक्षात किती कॉन्फिगर झाले ते सांगते. कमी आयटम संख्या असलेले स्टोअर बहुतेकदा कोणी तयार करून अपूर्ण सोडलेले असते.",
          voice: "हे प्लॅटफॉर्मवरील प्रत्येक स्टोअर आहे, एक-एक ओळीत. Name of Store खाली तीन अक्षरी कोड असतो, जो सिस्टम तुमच्यासाठी तयार करते. User Group Name हा स्टोअर ज्याचे आहे तो क्लायंट. Asset Name ते सेवा देणारा प्लांट. आणि No. of Items त्याच्या आत प्रत्यक्षात किती कॉन्फिगर झाले ते सांगते. तोच शेवटचा स्तंभ पाहण्यासारखा आहे — कमी आयटम संख्या असलेले स्टोअर बहुतेकदा कोणी तयार करून मग कधीच पूर्ण न केलेले असते.",
          tip: { type: 'tipLabel', text: 'सर्च बॉक्स अॅसेट, स्टोअरचे नाव किंवा क्लायंटचे नाव घेतो, म्हणून स्क्रोल न करता क्लायंटचे स्टोअर सापडते.' },
        },
        {
          label: 'तयार करा', title: 'नाव द्या, आणि यूजर ग्रुपशी जोडा',
          body: "<strong>+ Create</strong> एक छोटा फॉर्म उघडतो. <strong>Store Name</strong> टाइप करा आणि खालची ओळ पाहा: <em>Abbreviation for the store is DEM</em> — कोड नावावरून तयार होतो, आणि पेन्सिलने तो बदलता येतो. मग <strong>User Group Name</strong> निवडा. हे फील्ड अॅक्सेसची सीमा आहे: त्या यूजर ग्रुपमध्ये जे आहेत तेच हे स्टोअर पाहतील.",
          voice: "Create एक छोटा फॉर्म उघडतो. स्टोअरचे नाव टाइप करा, मग त्याखालची ओळ पाहा. Abbreviation for the store is डी-ई-एम. तुम्ही टाइप केलेल्या नावावरून सिस्टम तीन अक्षरी कोड तयार करते, आणि लहान पेन्सिलने तो बदलता येतो जर काही स्पष्ट हवे असेल. मग यूजर ग्रुप निवडा. हे फील्ड गांभीर्याने घ्या — ती अॅक्सेसची सीमा आहे. त्या यूजर ग्रुपमध्ये जे आहेत तेच हे स्टोअर पाहतील.",
        },
        {
          label: 'अॅसेट', title: 'मग ते कोणत्या अॅसेटला सेवा देते ते निवडा',
          body: "शेवटचे फील्ड <strong>Assets</strong> आहे, आणि ते एकापेक्षा जास्त घेते. हे स्टोअर पुरवठा करते त्या प्रत्येक अॅसेटवर टिक करा — येथे STP आणि CETP — आणि ते फील्डमध्ये चिप म्हणून दिसतात. एक स्टोअर अनेक अॅसेटला सेवा देऊ शकते, जे एका साइटवर दोन प्लांट एकाच शेल्फमधून घेत असतील तेव्हा सामान्य असते. ही निवड पुढे महत्त्वाची: कोणत्या अॅसेटवर वस्तू लावता येईल हे तीच ठरवते.",
          voice: "शेवटचे फील्ड Assets आहे, आणि इतरांपेक्षा वेगळे ते एकापेक्षा जास्त घेते. हे स्टोअर पुरवठा करते त्या प्रत्येक अॅसेटवर टिक करा. येथे ते एस-टी-पी आणि सी-ई-टी-पी आहेत, आणि प्रत्येक फील्डमध्ये चिप म्हणून दिसतो. एक स्टोअर अनेक अॅसेटला सेवा देणे पूर्णपणे सामान्य आहे — एका साइटवर दोन प्लांट एकाच शेल्फमधून रसायने घेत असतील तेव्हा तेच हवे असते. ही निवड लक्षात ठेवा, कारण ती परत येते: कोणत्या अॅसेटवर वस्तू लावता येईल हे तीच ठरवते.",
        },
        {
          label: 'रिकामे', title: 'नवे स्टोअर रिकामे सुरू होते',
          body: "सेव्ह करा, स्टोअर उघडा, आणि तुम्ही <strong>Store Management</strong> वर पोहोचता — रिकामे, पण तुम्हाला काय भरायचे आहे त्याचा आकार दाखवणारे. <strong>Item Name</strong> आणि <strong>Category</strong> वस्तूची ओळख; <strong>Config Details</strong> खाली तुम्ही कॉन्फिगर करता त्या दोन गोष्टी: <strong>Units</strong> आणि <strong>Expected Consumption</strong>. येथे एक ओळ येईपर्यंत ऑपरेटरच्या फॉर्ममध्ये देण्यासारखे काही नाही आणि पर्यवेक्षकाची तालिका रिकामी आहे.",
          voice: "सेव्ह करा, मग स्टोअर उघडा, आणि तुम्ही Store Management वर पोहोचता. ते रिकामे आहे, पण तुम्हाला काय भरायचे आहे त्याचा आकार दाखवते. Item Name आणि Category वस्तूची ओळख आहेत. आणि Config Details शीर्षकाखाली तुम्ही प्रत्यक्षात कॉन्फिगर करता त्या दोन गोष्टी आहेत: Units, आणि Expected Consumption. हे स्पष्ट सांगायला हवे — या पानावर कमीत कमी एक ओळ येईपर्यंत ऑपरेटरच्या फॉर्ममध्ये देण्यासारखे काही नाही, आणि पर्यवेक्षकाची स्टॉक तालिका रिकामी असते.",
        },
        {
          label: 'वस्तू जोडा', title: 'आधी वर्ग, मग वस्तू',
          body: "<strong>Add Item</strong> आधी <strong>Category</strong> विचारते — Chemicals, Solution, Consumables वगैरे — कारण वर्ग पुढे काय दिसेल ते ठरवतो. मग <strong>Item Name</strong> ही शोधता येणारी यादी आहे, टेक्स्ट बॉक्स नाही: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. तुम्ही मास्टर यादीतून निवडत आहात, म्हणून तेच रसायन प्रत्येक प्लांटमध्ये एकाच पद्धतीने लिहिले जाते आणि तुलनायोग्य राहते.",
          voice: "Add Item आधी वर्ग विचारते — Chemicals, Solution, Consumables वगैरे — कारण वर्ग पुढे काय दिसेल ते ठरवतो. मग Item Name ही शोधता येणारी यादी आहे, मोकळा टेक्स्ट बॉक्स नाही: Urea, Chlorine Balance, DAP, Jaggery, LIME, ALUM. हाच महत्त्वाचा तपशील. तुम्ही मास्टर यादीतून निवडत आहात, नाव टाइप करत नाही. त्यामुळेच तेच रसायन प्रत्येक प्लांटमध्ये एकाच पद्धतीने लिहिले जाते, आणि म्हणूनच वापर प्लांटांमध्ये तुलनायोग्य राहतो.",
          tip: { type: 'noteLabel', text: 'एखादी वस्तू खरोखर यादीत नसेल, तर आधी ती मास्टर यादीत जोडावी लागते — येथे नवी तयार करता येत नाही.' },
        },
        {
          label: 'वापर', title: 'एकक, आणि किती वापरले जावे',
          body: "पर्यवेक्षकाच्या <em>Expected</em> स्तंभातील आकडा <strong>Store Consumption</strong> मधून येतो. <strong>Unit</strong> म्हणजे वस्तू कशात मोजली जाते — Kg, L. मग <strong>Expected Value</strong>, <strong>Time</strong> आणि <strong>Time Unit</strong> मिळून एक दर बनतो: <em>दर 4 दिवसांत 1 Kg</em>. शेवटी <strong>Asset</strong> — आणि लक्षात घ्या, तुम्ही स्टोअरशी जोडलेले अॅसेटच ते देते. दर प्रामाणिकपणे ठेवा; त्यामुळेच खरा वापर जास्त की कमी दिसतो.",
          voice: "Store Consumption हा सर्वात महत्त्वाचा भाग, कारण पर्यवेक्षकाच्या Expected स्तंभातील आकडा येथूनच येतो. Unit म्हणजे वस्तू कशात मोजली जाते — किलोग्रॅम, लिटर. मग Expected Value, Time आणि Time Unit मिळून एक दर बनतो: दर चार दिवसांत एक किलोग्रॅम. शेवटी Asset, आणि लक्षात घ्या की तुम्ही आधी स्टोअरशी जोडलेले अॅसेटच ते देते. प्लांट प्रत्यक्षात जे डोस करतो त्यावरून हा दर प्रामाणिकपणे ठेवा. खरा वापर जास्त की कमी दिसतो याचा तो मापदंड आहे.",
          tip: { type: 'rememberLabel', text: 'अपेक्षित वापर हा मापदंड आहे, मर्यादा नाही. ऑपरेटरला यापेक्षा जास्त काढण्यापासून काहीच अडवत नाही — तो फक्त तफावत म्हणून दिसतो.' },
        },
        {
          label: 'पूर्ण', title: 'येथे एक ओळ, आणि दोन्ही भूमिका जिवंत',
          body: "Create करा, आणि वस्तू तालिकेत येते: <strong>Jaggery · Chemicals · Kg · दर 4 दिवसांत 1</strong>. ती एक ओळ आता दोन कामे करत आहे. ऑपरेटरला Chemicals खाली Jaggery दिसते, Kg आधीच भरलेले, म्हणून <em>Add to Store</em> आणि <em>Remove from Store</em> चालतात. पर्यवेक्षकाला तीच वस्तू स्टॉक तालिकेत शिल्लक, वापराचा दर आणि तुलनेसाठी अपेक्षित आकड्यासह दिसते. प्रत्येक वस्तूसाठी हेच करा, आणि स्टोअर तयार.",
          voice: "Create दाबा, आणि वस्तू तालिकेत येते: Jaggery, Chemicals, किलोग्रॅम, दर चार दिवसांत एक. ती एक ओळ आता एकाच वेळी दोन कामे करत आहे. ऑपरेटर Inventory उघडतो आणि त्याला Chemicals खाली Jaggery दिसते, किलोग्रॅम आधीच भरलेले, म्हणून Add to Store आणि Remove from Store थेट चालतात. पर्यवेक्षकाला तीच वस्तू स्टॉक तालिकेत शिल्लक, वापराचा दर, आणि तुलनेसाठी अपेक्षित आकड्यासह दिसते. प्लांट ठेवतो त्या प्रत्येक वस्तूसाठी हेच करा, आणि स्टोअर कॉन्फिगर झाले.",
          tip: { type: 'upNextLabel', text: 'Read ट्रॅकवर परत जा आणि हे कॉन्फिगरेशन पर्यवेक्षकासाठी व ऑपरेटरसाठी काय तयार करते ते पाहा.' },
        },
      ],
    },
  },
};

export default lesson;
