import type { InventoryData, Lesson } from '../../types';

/**
 * Module 4 · Lesson 1 — Inventory for Supervisors.   Tag: M4.L1
 * Browse stock by store, see consumption, and drill into a chemical's full
 * consumption log (additions green, removals red).
 */

const STORES = ['ALL STORE', 'PLAKSHA STORE', 'STP STORE', 'ADANI AHMEDABAD', 'HINDALCO MAHAAN', 'INDIA HABITAT'];

const table = (highlight: InventoryData['highlight']): InventoryData => ({
  mode: 'supTable', stores: STORES, activeStore: 'STP STORE', highlight,
  items: [
    { name: 'Chlorine Balance', category: 'Chemicals', stock: '47.8 Kg', lastConsumption: '- 3 Kg', lastUpdated: '11 hours ago', actual: '3 Kg', actualPeriod: '1 day', expected: '-' },
    { name: 'Jaggery', category: 'Chemicals', stock: '87.32 Kg', lastConsumption: '- 2 Kg', lastUpdated: '11 hours ago', actual: '2 Kg', actualPeriod: '1 day', expected: '-' },
    { name: 'Urea', category: 'Chemicals', stock: '37.83 Kg', lastConsumption: '- 0.4 Kg', lastUpdated: '11 hours ago', actual: '1 Kg', actualPeriod: '1 day', expected: '-' },
    { name: 'DAP', category: 'Chemicals', stock: '39.1 Kg', lastConsumption: '- 3.9 Kg', lastUpdated: '11 hours ago', actual: '4 Kg', actualPeriod: '1 day', expected: '-' },
    { name: 'Hypo', category: 'Chemicals', stock: '51.4 L', lastConsumption: '- 3.8 L', lastUpdated: '11 hours ago', actual: '4 L', actualPeriod: '1 day', expected: '-' },
    { name: 'LIME', category: 'Chemicals', stock: '0.47 Kg', lastConsumption: '- 0.03 Kg', lastUpdated: '11 hours ago', actual: '1 Kg', actualPeriod: '1 month', expected: '-', ring: true },
  ],
});

const log = (highlight: InventoryData['highlight']): InventoryData => ({
  mode: 'supLog', chemical: 'LIME', balance: '0.47 kg', monthUsage: '1 kg', lastMonthUsage: '1 kg',
  dateRange: '22nd May 2026 — 22nd Jun 2026', highlight,
  logs: [
    { amount: '- 0.03', positive: false, unit: 'kg', datetime: '1/6/2026 at 12:15 am' },
    { amount: '+ 1', positive: true, unit: 'kg', datetime: '1/6/2026 at 12:15 am' },
    { amount: '- 0.02', positive: false, unit: 'kg', datetime: '31/5/2026 at 12:15 am' },
    { amount: '- 0.04', positive: false, unit: 'kg', datetime: '30/5/2026 at 12:15 am' },
    { amount: '- 0.03', positive: false, unit: 'kg', datetime: '29/5/2026 at 12:15 am' },
    { remark: 'Consumed in the plant', amount: '- 0.03', positive: false, unit: 'Kg', datetime: '25/5/2026 at 07:48 am' },
    { remark: 'Consumed in the plant', amount: '- 0.04', positive: false, unit: 'Kg', datetime: '24/5/2026 at 05:02 pm' },
  ],
});

const lesson: Lesson = {
  id: 'lesson-01-supervisor',
  moduleId: 'module-04-inventory',
  lessonNumber: 1,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'inventory', caption: 'Inventory — by store',
      widgetState: { inventory: table('store') }, cursor: [{ at: 0.2, x: 20, y: 18 }, { at: 0.6, x: 12, y: 50 }] },
    { mode: 'widget', widget: 'inventory', caption: 'Stock & consumption',
      widgetState: { inventory: table('consumption') }, cursor: [{ at: 0.3, x: 60, y: 18 }, { at: 0.7, x: 80, y: 50 }] },
    { mode: 'widget', widget: 'inventory', caption: "Open a chemical's log",
      widgetState: { inventory: log('balance') }, cursor: [{ at: 0.3, x: 30, y: 14 }] },
    { mode: 'widget', widget: 'inventory', caption: 'Additions vs removals',
      widgetState: { inventory: log('amounts') }, cursor: [{ at: 0.3, x: 55, y: 30 }, { at: 0.7, x: 55, y: 18 }] },
  ],
  content: {
    en: {
      title: 'Inventory for<br><em>Supervisors.</em>',
      subtitle:
        'See what every store holds, how fast it is being used, and the full history behind each chemical.',
      chapter: 'Chapter Four · The Store Room',
      steps: [
        {
          label: 'Overview', title: 'Every store, every item',
          body: "The <strong>Inventory</strong> dashboard lists everything in your stores. Switch between stores with the tabs — <strong>STP Store</strong>, <strong>Adani Ahmedabad</strong>, and so on. Each item shows its <strong>category</strong> and how much is in stock.",
          voice: "Welcome to Inventory. As a supervisor, this dashboard shows you everything held across your stores. Along the top, you switch between stores — your S T P store, Adani Ahmedabad, Hindalco, and the rest. Every item is listed with its category — chemicals, consumables, spares — and exactly how much is currently in stock. It's the single place to see what you've got, plant by plant.",
        },
        {
          label: 'Consumption', title: 'Stock and how fast it moves',
          body: "Beyond the <strong>Stock Available</strong>, each row shows the <strong>Last Consumption</strong> and a <strong>Consumption</strong> rate — <strong>Actual</strong> against <strong>Expected</strong>. So you can see not just how much is left, but how quickly it's being used.",
          voice: "It's not just a stock count. For every item, you can see the last consumption — how much was used and when — and a consumption rate, the actual usage against what's expected. So at a glance you know not only how much chlorine or lime is left, but how fast it's going. That's what tells you when you'll need to reorder.",
          tip: { type: 'tipLabel', text: 'Watch the Actual vs Expected consumption to spot items being used faster — or slower — than planned.' },
        },
        {
          label: 'The Log', title: "Open a chemical's full log",
          body: "Click any chemical — here <strong>LIME</strong> — to open its complete log. Up top: <strong>Current Balance</strong>, <strong>Current</strong> and <strong>Last Month Usage</strong>. Below, every single entry with its date and time.",
          voice: "Now for the real depth. Click on any chemical — let's take lime — and you open its complete log. At the top, you get the headline numbers: the current balance, this month's usage, and last month's usage. And below that, every single entry that's ever been recorded for this chemical — each one stamped with its exact date and time. Nothing is hidden.",
        },
        {
          label: 'In & Out', title: 'Additions in green, removals in red',
          body: "Each entry is colour-coded: <strong>removals</strong> (consumption, wastage) show a <strong>red</strong> minus, <strong>additions</strong> (purchases, receipts) a <strong>green</strong> plus. Filter by <strong>remark</strong>, <strong>amount</strong> or <strong>date</strong> to find exactly what you need.",
          voice: "And reading the log is easy. Every entry is colour-coded. A removal — something consumed in the plant, or wasted — shows up as a red minus. An addition — a purchase, or stock received — shows as a green plus. You'll even see the remark, like consumed in the plant, against each one. And you can filter the whole log by remark, by amount, or by date range, to find exactly the movements you're looking for. So you always know where every kilogram went, and when. In the next lesson, we'll see how the operator actually records these movements.",
          tip: { type: 'upNextLabel', text: 'Next: how operators log what they add and remove.' },
        },
      ],
    },
    hi: {
      title: 'सुपरवाइज़र के लिए<br><em>इन्वेंटरी।</em>',
      subtitle:
        'देखें कि हर स्टोर में क्या है, कितनी तेज़ी से उपयोग हो रहा है, और हर रसायन के पीछे का पूरा इतिहास।',
      chapter: 'अध्याय चार · स्टोर रूम',
      steps: [
        {
          label: 'अवलोकन', title: 'हर स्टोर, हर वस्तु',
          body: '<strong>इन्वेंटरी</strong> डैशबोर्ड आपके स्टोर की हर चीज़ सूचीबद्ध करता है। टैब से स्टोर बदलें — <strong>STP स्टोर</strong>, <strong>अडानी अहमदाबाद</strong>, आदि। हर वस्तु अपनी <strong>श्रेणी</strong> और स्टॉक दिखाती है।',
          voice: 'इन्वेंटरी में आपका स्वागत है। एक सुपरवाइज़र के रूप में, यह डैशबोर्ड आपको आपके सभी स्टोर में रखी हर चीज़ दिखाता है। ऊपर, आप स्टोर बदलते हैं — आपका एस टी पी स्टोर, अडानी अहमदाबाद, हिंडाल्को, और बाकी। हर वस्तु अपनी श्रेणी के साथ सूचीबद्ध है — रसायन, उपभोग्य, स्पेयर — और अभी कितना स्टॉक में है। यह एक ही जगह है यह देखने के लिए कि आपके पास क्या है, प्लांट दर प्लांट।',
        },
        {
          label: 'खपत', title: 'स्टॉक और कितनी तेज़ी से चलता है',
          body: '<strong>स्टॉक उपलब्ध</strong> के अलावा, हर पंक्ति <strong>अंतिम खपत</strong> और एक <strong>खपत</strong> दर दिखाती है — <strong>वास्तविक</strong> बनाम <strong>अपेक्षित</strong>। तो आप देख सकते हैं कि न केवल कितना बचा है, बल्कि कितनी तेज़ी से उपयोग हो रहा है।',
          voice: 'यह केवल स्टॉक गिनती नहीं है। हर वस्तु के लिए, आप अंतिम खपत देख सकते हैं — कितना उपयोग हुआ और कब — और एक खपत दर, अपेक्षित के मुकाबले वास्तविक उपयोग। तो एक नज़र में आप जानते हैं कि न केवल कितना क्लोरीन या चूना बचा है, बल्कि कितनी तेज़ी से जा रहा है। यही बताता है कि आपको कब फिर से ऑर्डर करना होगा।',
          tip: { type: 'tipLabel', text: 'योजना से तेज़ — या धीमी — उपयोग हो रही वस्तुओं को पहचानने के लिए वास्तविक बनाम अपेक्षित खपत देखें।' },
        },
        {
          label: 'लॉग', title: 'किसी रसायन का पूरा लॉग खोलें',
          body: 'किसी भी रसायन पर क्लिक करें — यहाँ <strong>LIME</strong> — उसका पूरा लॉग खोलने के लिए। ऊपर: <strong>वर्तमान शेष</strong>, <strong>वर्तमान</strong> और <strong>पिछले महीने का उपयोग</strong>। नीचे, हर एक प्रविष्टि अपनी तारीख़ और समय के साथ।',
          voice: 'अब असली गहराई। किसी भी रसायन पर क्लिक करें — चलिए चूना लेते हैं — और आप उसका पूरा लॉग खोलते हैं। ऊपर, आपको मुख्य संख्याएँ मिलती हैं: वर्तमान शेष, इस महीने का उपयोग, और पिछले महीने का उपयोग। और उसके नीचे, इस रसायन के लिए दर्ज की गई हर एक प्रविष्टि — हर एक अपनी सटीक तारीख़ और समय के साथ। कुछ भी छुपा नहीं।',
        },
        {
          label: 'आना-जाना', title: 'जोड़ हरे में, घटाव लाल में',
          body: 'हर प्रविष्टि रंग-कोडित है: <strong>घटाव</strong> (खपत, बर्बादी) <strong>लाल</strong> माइनस, <strong>जोड़</strong> (खरीद, प्राप्ति) <strong>हरा</strong> प्लस। जो चाहिए वह ढूँढने के लिए <strong>रिमार्क</strong>, <strong>राशि</strong> या <strong>तारीख़</strong> से फ़िल्टर करें।',
          voice: 'और लॉग पढ़ना आसान है। हर प्रविष्टि रंग-कोडित है। एक घटाव — प्लांट में खपत, या बर्बाद — लाल माइनस के रूप में दिखता है। एक जोड़ — खरीद, या प्राप्त स्टॉक — हरे प्लस के रूप में। आप हर एक के सामने रिमार्क भी देखेंगे, जैसे प्लांट में खपत। और आप पूरे लॉग को रिमार्क, राशि, या तारीख़ सीमा से फ़िल्टर कर सकते हैं, ठीक वही गतिविधि ढूँढने के लिए। तो आप हमेशा जानते हैं कि हर किलोग्राम कहाँ गया, और कब। अगले पाठ में, हम देखेंगे कि ऑपरेटर वास्तव में इन गतिविधियों को कैसे दर्ज करता है।',
          tip: { type: 'upNextLabel', text: 'आगे: ऑपरेटर जो जोड़ते और हटाते हैं उसे कैसे दर्ज करते हैं।' },
        },
      ],
    },
    ta: {
      title: 'மேற்பார்வையாளர்களுக்கான<br><em>சரக்கு.</em>',
      subtitle:
        'ஒவ்வொரு கடையிலும் என்ன உள்ளது, எவ்வளவு வேகமாகப் பயன்படுத்தப்படுகிறது, ஒவ்வொரு ரசாயனத்தின் முழு வரலாறு என்பதைப் பாருங்கள்.',
      chapter: 'அத்தியாயம் நான்கு · சேமிப்பு அறை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'ஒவ்வொரு கடை, ஒவ்வொரு பொருள்',
          body: '<strong>சரக்கு</strong> டாஷ்போர்டு உங்கள் கடைகளில் உள்ள அனைத்தையும் பட்டியலிடுகிறது. தாவல்களால் கடைகளை மாற்றுங்கள் — <strong>STP கடை</strong>, <strong>அதானி அகமதாபாத்</strong> போன்றவை. ஒவ்வொரு பொருளும் அதன் <strong>வகை</strong> மற்றும் இருப்பைக் காட்டுகிறது.',
          voice: 'சரக்குக்கு வரவேற்கிறேன். ஒரு மேற்பார்வையாளராக, இந்த டாஷ்போர்டு உங்கள் கடைகள் முழுவதும் வைத்திருக்கும் அனைத்தையும் காட்டுகிறது. மேலே, கடைகளை மாற்றுகிறீர்கள் — உங்கள் எஸ் டி பி கடை, அதானி அகமதாபாத், ஹிண்டால்கோ, மற்றவை. ஒவ்வொரு பொருளும் அதன் வகையுடன் பட்டியலிடப்பட்டுள்ளது — ரசாயனங்கள், நுகர்பொருட்கள், உதிரிபாகங்கள் — மற்றும் இப்போது எவ்வளவு இருப்பில் உள்ளது. உங்களிடம் என்ன உள்ளது என்பதை ஆலை வாரியாகப் பார்க்க இதுவே ஒரே இடம்.',
        },
        {
          label: 'நுகர்வு', title: 'இருப்பு மற்றும் எவ்வளவு வேகமாக நகர்கிறது',
          body: '<strong>இருப்பு</strong>க்கு அப்பால், ஒவ்வொரு வரிசையும் <strong>கடைசி நுகர்வு</strong> மற்றும் ஒரு <strong>நுகர்வு</strong> விகிதத்தைக் காட்டுகிறது — <strong>உண்மையான</strong> எதிராக <strong>எதிர்பார்க்கப்பட்டது</strong>. எனவே எவ்வளவு மிச்சம் என்பது மட்டுமல்ல, எவ்வளவு வேகமாகப் பயன்படுத்தப்படுகிறது என்பதையும் காணலாம்.',
          voice: 'இது வெறும் இருப்பு எண்ணிக்கை அல்ல. ஒவ்வொரு பொருளுக்கும், கடைசி நுகர்வைப் பார்க்கலாம் — எவ்வளவு பயன்படுத்தப்பட்டது, எப்போது — மற்றும் ஒரு நுகர்வு விகிதம், எதிர்பார்க்கப்பட்டதற்கு எதிராக உண்மையான பயன்பாடு. எனவே ஒரே பார்வையில், எவ்வளவு குளோரின் அல்லது சுண்ணாம்பு மிச்சம் என்பது மட்டுமல்ல, எவ்வளவு வேகமாகப் போகிறது என்பதையும் அறிவீர்கள். எப்போது மீண்டும் ஆர்டர் செய்ய வேண்டும் என்பதை இதுவே சொல்கிறது.',
          tip: { type: 'tipLabel', text: 'திட்டத்தை விட வேகமாக — அல்லது மெதுவாக — பயன்படுத்தப்படும் பொருட்களைக் கண்டறிய உண்மையான எதிராக எதிர்பார்க்கப்பட்ட நுகர்வைப் பாருங்கள்.' },
        },
        {
          label: 'பதிவு', title: 'ஒரு ரசாயனத்தின் முழுப் பதிவைத் திற',
          body: 'எந்த ரசாயனத்தையும் கிளிக் செய்யுங்கள் — இங்கே <strong>LIME</strong> — அதன் முழுப் பதிவைத் திறக்க. மேலே: <strong>தற்போதைய இருப்பு</strong>, <strong>இந்த</strong> மற்றும் <strong>கடந்த மாத பயன்பாடு</strong>. கீழே, ஒவ்வொரு பதிவும் அதன் தேதி மற்றும் நேரத்துடன்.',
          voice: 'இப்போது உண்மையான ஆழம். எந்த ரசாயனத்தையும் கிளிக் செய்யுங்கள் — சுண்ணாம்பை எடுத்துக்கொள்வோம் — அதன் முழுப் பதிவைத் திறக்கிறீர்கள். மேலே, தலைப்பு எண்களைப் பெறுகிறீர்கள்: தற்போதைய இருப்பு, இந்த மாத பயன்பாடு, கடந்த மாத பயன்பாடு. அதற்குக் கீழே, இந்த ரசாயனத்துக்காக பதிவு செய்யப்பட்ட ஒவ்வொரு பதிவும் — ஒவ்வொன்றும் அதன் சரியான தேதி மற்றும் நேரத்துடன். எதுவும் மறைக்கப்படவில்லை.',
        },
        {
          label: 'வரவு-செலவு', title: 'சேர்த்தல் பச்சை, நீக்கல் சிவப்பு',
          body: 'ஒவ்வொரு பதிவும் வண்ணமிடப்பட்டது: <strong>நீக்கல்கள்</strong> (நுகர்வு, விரயம்) <strong>சிவப்பு</strong> கழித்தல், <strong>சேர்த்தல்கள்</strong> (கொள்முதல், பெறுதல்) <strong>பச்சை</strong> கூட்டல். தேவையானதைக் கண்டறிய <strong>குறிப்பு</strong>, <strong>அளவு</strong> அல்லது <strong>தேதி</strong> மூலம் வடிகட்டுங்கள்.',
          voice: 'பதிவைப் படிப்பது எளிது. ஒவ்வொரு பதிவும் வண்ணமிடப்பட்டது. ஒரு நீக்கல் — ஆலையில் நுகரப்பட்டது அல்லது வீணானது — சிவப்பு கழித்தலாகத் தோன்றுகிறது. ஒரு சேர்த்தல் — கொள்முதல் அல்லது பெறப்பட்ட இருப்பு — பச்சை கூட்டலாகத் தோன்றுகிறது. ஒவ்வொன்றுக்கும் எதிராக ஆலையில் நுகரப்பட்டது போன்ற குறிப்பையும் காண்பீர்கள். முழுப் பதிவையும் குறிப்பு, அளவு, அல்லது தேதி வரம்பு மூலம் வடிகட்டலாம், சரியாக நீங்கள் தேடும் நகர்வுகளைக் கண்டறிய. எனவே ஒவ்வொரு கிலோகிராமும் எங்கே சென்றது, எப்போது என்பது எப்போதும் தெரியும். அடுத்த பாடத்தில், இயக்குனர் இந்த நகர்வுகளை உண்மையில் எப்படிப் பதிவு செய்கிறார் என்று பார்ப்போம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: இயக்குனர்கள் சேர்ப்பதையும் நீக்குவதையும் எப்படிப் பதிவு செய்கிறார்கள்.' },
        },
      ],
    },
    mr: {
      title: 'पर्यवेक्षकांसाठी<br><em>इन्व्हेंटरी.</em>',
      subtitle:
        'प्रत्येक स्टोअरमध्ये काय आहे, किती वेगाने वापरले जात आहे, आणि प्रत्येक रसायनामागचा संपूर्ण इतिहास पाहा.',
      chapter: 'अध्याय चार · स्टोअर रूम',
      steps: [
        {
          label: 'आढावा', title: 'प्रत्येक स्टोअर, प्रत्येक वस्तू',
          body: '<strong>इन्व्हेंटरी</strong> डॅशबोर्ड तुमच्या स्टोअरमधील सर्व काही सूचीबद्ध करते. टॅबने स्टोअर बदला — <strong>STP स्टोअर</strong>, <strong>अदानी अहमदाबाद</strong>, इत्यादी. प्रत्येक वस्तू तिची <strong>श्रेणी</strong> आणि स्टॉक दाखवते.',
          voice: 'इन्व्हेंटरीमध्ये स्वागत आहे. पर्यवेक्षक म्हणून, हा डॅशबोर्ड तुम्हाला तुमच्या सर्व स्टोअरमध्ये ठेवलेले सर्व काही दाखवतो. वर, तुम्ही स्टोअर बदलता — तुमचे एस टी पी स्टोअर, अदानी अहमदाबाद, हिंडाल्को, आणि बाकी. प्रत्येक वस्तू तिच्या श्रेणीसह सूचीबद्ध आहे — रसायने, उपभोग्य, स्पेअर — आणि आता किती स्टॉकमध्ये आहे. तुमच्याकडे काय आहे हे प्लांटनिहाय पाहण्यासाठी ही एकमेव जागा आहे.',
        },
        {
          label: 'वापर', title: 'स्टॉक आणि किती वेगाने हलतो',
          body: '<strong>उपलब्ध स्टॉक</strong>पलीकडे, प्रत्येक पंक्ती <strong>शेवटचा वापर</strong> आणि एक <strong>वापर</strong> दर दाखवते — <strong>प्रत्यक्ष</strong> विरुद्ध <strong>अपेक्षित</strong>. म्हणून किती शिल्लक एवढेच नाही, तर किती वेगाने वापरले जात आहे तेही पाहता येते.',
          voice: 'ही फक्त स्टॉक मोजणी नाही. प्रत्येक वस्तूसाठी, तुम्ही शेवटचा वापर पाहू शकता — किती वापरले आणि केव्हा — आणि एक वापर दर, अपेक्षितच्या तुलनेत प्रत्यक्ष वापर. म्हणून एका दृष्टीक्षेपात तुम्हाला किती क्लोरीन किंवा चुना शिल्लक आहे एवढेच नाही, तर किती वेगाने जात आहे तेही कळते. तुम्हाला कधी पुन्हा ऑर्डर करावी लागेल हे हेच सांगते.',
          tip: { type: 'tipLabel', text: 'योजनेपेक्षा वेगाने — किंवा हळू — वापरल्या जाणाऱ्या वस्तू ओळखण्यासाठी प्रत्यक्ष विरुद्ध अपेक्षित वापर पाहा.' },
        },
        {
          label: 'लॉग', title: 'एखाद्या रसायनाचा संपूर्ण लॉग उघडा',
          body: 'कोणत्याही रसायनावर क्लिक करा — इथे <strong>LIME</strong> — त्याचा संपूर्ण लॉग उघडण्यासाठी. वर: <strong>सध्याची शिल्लक</strong>, <strong>चालू</strong> आणि <strong>मागील महिन्याचा वापर</strong>. खाली, प्रत्येक नोंद तिच्या तारीख व वेळेसह.',
          voice: 'आता खरी खोली. कोणत्याही रसायनावर क्लिक करा — चुना घेऊया — आणि तुम्ही त्याचा संपूर्ण लॉग उघडता. वर, तुम्हाला मुख्य आकडे मिळतात: सध्याची शिल्लक, या महिन्याचा वापर, आणि मागील महिन्याचा वापर. आणि त्याखाली, या रसायनासाठी कधीही नोंदवलेली प्रत्येक नोंद — प्रत्येक तिच्या अचूक तारीख व वेळेसह. काहीही लपलेले नाही.',
        },
        {
          label: 'येणे-जाणे', title: 'भर हिरव्यात, वजावट लाल मध्ये',
          body: 'प्रत्येक नोंद रंग-कोडित आहे: <strong>वजावट</strong> (वापर, नासाडी) <strong>लाल</strong> वजा, <strong>भर</strong> (खरेदी, प्राप्ती) <strong>हिरवा</strong> अधिक. हवे ते शोधण्यासाठी <strong>रिमार्क</strong>, <strong>रक्कम</strong> किंवा <strong>तारीख</strong>ने फिल्टर करा.',
          voice: 'आणि लॉग वाचणे सोपे आहे. प्रत्येक नोंद रंग-कोडित आहे. एक वजावट — प्लांटमध्ये वापरलेले, किंवा नासाडी — लाल वजा म्हणून दिसते. एक भर — खरेदी, किंवा मिळालेला स्टॉक — हिरवा अधिक म्हणून. प्रत्येकासमोर तुम्हाला रिमार्कही दिसेल, जसे प्लांटमध्ये वापरलेले. आणि तुम्ही संपूर्ण लॉग रिमार्क, रक्कम, किंवा तारीख श्रेणीने फिल्टर करू शकता, नेमक्या तुम्ही शोधत असलेल्या हालचाली शोधण्यासाठी. म्हणून प्रत्येक किलोग्रॅम कुठे गेला, आणि केव्हा हे तुम्हाला नेहमी कळते. पुढच्या पाठात, ऑपरेटर या हालचाली प्रत्यक्षात कशा नोंदवतो ते पाहू.',
          tip: { type: 'upNextLabel', text: 'पुढे: ऑपरेटर जे भरतात आणि काढतात ते कसे नोंदवतात.' },
        },
      ],
    },
  },
};

export default lesson;
