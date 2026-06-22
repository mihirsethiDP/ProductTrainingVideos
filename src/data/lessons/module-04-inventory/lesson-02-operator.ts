import type { InventoryData, Lesson } from '../../types';

/**
 * Module 4 · Lesson 2 — Inventory for Operators.   Tag: M4.L2
 * Operators log what they take out of (Remove from Store) or add to (Add to
 * Store) the inventory; every movement syncs to the supervisor dashboard.
 */

const categories: InventoryData = {
  mode: 'opCategories',
  stores: ['STP STORE', 'ADANI AHMEDABAD', 'HINDALCO MAHAAN'],
  activeStore: 'STP STORE',
  highlight: 'category',
  categories: [
    { name: 'CHEMICALS', color: 'chem' },
    { name: 'SOLUTION', color: 'solution' },
    { name: 'CONSUMABLES', color: 'consumable' },
    { name: 'ELECTRONIC SPARES', disabled: true },
    { name: 'MECHANICAL SPARES', disabled: true },
    { name: 'TOOLS', disabled: true },
    { name: 'TOOLS FOR CLEANING', disabled: true },
  ],
};

const item: InventoryData = { mode: 'opItem', selectedItem: 'Chlorine Balance', highlight: 'addremove' };

const removeForm: InventoryData = {
  mode: 'opForm', formType: 'remove', itemName: 'LIME', available: '0.47',
  remark: 'Consumed in the plant', highlight: 'remark',
  remarkOptions: ['Consumed in the plant', 'Expiry', 'Sent to other sources', 'Wasted', 'Not fit for use', 'Returned to the vendor', 'Prepared Solution', 'Reconcile Subtraction'],
};

const addForm: InventoryData = {
  mode: 'opForm', formType: 'add', itemName: 'LIME', available: '0.47',
  remark: 'Received from Other Sources', unit: 'Kg', quantity: '22', highlight: 'submit',
};

const syncLog: InventoryData = {
  mode: 'supLog', chemical: 'LIME', balance: '22.47 kg', monthUsage: '1 kg', lastMonthUsage: '1 kg',
  dateRange: '22nd May 2026 — 22nd Jun 2026', highlight: 'amounts',
  logs: [
    { remark: 'Received from Other Sources', amount: '+ 22', positive: true, unit: 'Kg', datetime: 'just now' },
    { remark: 'Consumed in the plant', amount: '- 0.02', positive: false, unit: 'Kg', datetime: 'today at 09:40 am' },
    { amount: '- 0.03', positive: false, unit: 'kg', datetime: '1/6/2026 at 12:15 am' },
    { amount: '- 0.04', positive: false, unit: 'kg', datetime: '30/5/2026 at 12:15 am' },
  ],
};

const lesson: Lesson = {
  id: 'lesson-02-operator',
  moduleId: 'module-04-inventory',
  lessonNumber: 2,
  estimatedMinutes: 4,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'inventory', caption: 'Pick a store & category',
      widgetState: { inventory: categories }, cursor: [{ at: 0.3, x: 25, y: 30, click: true }] },
    { mode: 'widget', widget: 'inventory', caption: 'Choose Add or Remove',
      widgetState: { inventory: item }, cursor: [{ at: 0.3, x: 50, y: 70 }, { at: 0.6, x: 75, y: 70 }] },
    { mode: 'widget', widget: 'inventory', caption: 'Remove from Store — give a reason',
      widgetState: { inventory: removeForm }, cursor: [{ at: 0.3, x: 50, y: 45 }, { at: 0.7, x: 50, y: 65 }] },
    { mode: 'widget', widget: 'inventory', caption: 'Add to Store — quantity & submit',
      widgetState: { inventory: addForm }, cursor: [{ at: 0.4, x: 50, y: 80, click: true }] },
    { mode: 'widget', widget: 'inventory', caption: 'It syncs to the supervisor',
      widgetState: { inventory: syncLog }, cursor: [{ at: 0.3, x: 55, y: 25 }] },
  ],
  content: {
    en: {
      title: 'Inventory for<br><em>Operators.</em>',
      subtitle:
        'Took something out of the store, or added new stock? Log it in seconds — and the supervisor sees it instantly.',
      chapter: 'Chapter Four · The Store Room',
      steps: [
        {
          label: 'Categories', title: 'Pick a store and category',
          body: "As an operator, you keep the store up to date. Choose your <strong>store</strong>, then a <strong>category</strong> — <strong>Chemicals</strong>, <strong>Solution</strong>, <strong>Consumables</strong>, and more. Greyed-out categories simply aren't set up for this store.",
          voice: "Now let's switch to the operator's side. Your job is to keep the store accurate — to record what you take out and what comes in. You start by choosing your store, then tapping a category. Chemicals, solution, consumables, spares, tools. The bright tiles are the categories set up for your store; the greyed-out ones just aren't in use here. Let's go into chemicals.",
        },
        {
          label: 'Add or Remove', title: 'Choose Add or Remove',
          body: "Pick the item you used — say a chemical — then choose what you're doing: <strong>Add to Store</strong> for new stock coming in, or <strong>Remove from Store</strong> for anything taken out or used.",
          voice: "Once you pick the item — let's say a chemical — you get two choices. Add to Store, for when new stock arrives. Or Remove from Store, for anything you've taken out or used up. Whichever you choose, the next screen asks for the details. Let's start with removing something.",
        },
        {
          label: 'Remove', title: 'Remove from Store — give a reason',
          body: "When you remove stock, the system asks <strong>why</strong>. Pick a <strong>reason</strong> — <em>Consumed in the plant</em>, <em>Expiry</em>, <em>Wasted</em>, <em>Returned to the vendor</em>, <em>Prepared Solution</em>, and more — then enter the <strong>quantity</strong> and the <strong>asset</strong> it was used on, and submit.",
          voice: "When you remove something, the system always asks why. You pick a reason from the list — consumed in the plant, expiry, wasted, sent to other sources, returned to the vendor, prepared solution, and so on. That reason is what shows up later in the log. Then you enter the quantity you took — say zero point zero two kilograms — pick the asset it was used on, and hit submit. The stock drops by exactly that amount.",
          tip: { type: 'rememberLabel', text: 'Always pick the right reason — it becomes the remark the supervisor sees against that entry.' },
        },
        {
          label: 'Add', title: 'Add to Store — log new stock',
          body: "Adding stock works the same way. Choose a reason — <em>Purchase</em>, <em>Received from Other Sources</em>, <em>Reconcile Addition</em>, or <em>Reverse Inventory</em> — enter the <strong>quantity</strong>, and submit. The available stock goes up.",
          voice: "Adding new stock is just as quick. You pick a reason — a purchase, stock received from another source, a reconcile addition to fix a count, or a reverse inventory. Then you enter the quantity received — here, twenty two kilograms — and submit. The available quantity goes straight up by that amount. So whether stock is coming in or going out, it's the same simple flow — reason, quantity, submit.",
        },
        {
          label: 'It Syncs', title: 'Every entry reaches the supervisor',
          body: "Here's the point: <strong>every</strong> add or remove you submit appears <strong>instantly on the supervisor's dashboard</strong> — in that chemical's log, as a green plus or a red minus. One shared, always-current picture of the store.",
          voice: "And here's why it all matters. Every single entry you make — every add, every remove — flows straight through to the supervisor's dashboard, in real time. The twenty two kilograms you just added shows up in lime's log as a green plus. The point zero two you consumed shows as a red minus. So the operator keeps the store accurate from the floor, and the supervisor always sees a live, trustworthy picture — no paperwork in between. That completes Inventory Management.",
          tip: { type: 'upNextLabel', text: 'Operators keep it current; supervisors see it live.' },
        },
      ],
    },
    hi: {
      title: 'ऑपरेटर के लिए<br><em>इन्वेंटरी।</em>',
      subtitle:
        'स्टोर से कुछ निकाला, या नया स्टॉक जोड़ा? सेकंडों में दर्ज करें — और सुपरवाइज़र तुरंत देख लेता है।',
      chapter: 'अध्याय चार · स्टोर रूम',
      steps: [
        {
          label: 'श्रेणियाँ', title: 'स्टोर और श्रेणी चुनें',
          body: 'एक ऑपरेटर के रूप में, आप स्टोर को अद्यतन रखते हैं। अपना <strong>स्टोर</strong> चुनें, फिर एक <strong>श्रेणी</strong> — <strong>रसायन</strong>, <strong>घोल</strong>, <strong>उपभोग्य</strong>, और अधिक। धूसर श्रेणियाँ इस स्टोर के लिए सेट नहीं हैं।',
          voice: 'अब ऑपरेटर की ओर चलते हैं। आपका काम है स्टोर को सटीक रखना — आप जो निकालते हैं और जो आता है उसे दर्ज करना। आप अपना स्टोर चुनकर शुरू करते हैं, फिर एक श्रेणी पर टैप करते हैं। रसायन, घोल, उपभोग्य, स्पेयर, उपकरण। चमकीली टाइलें आपके स्टोर के लिए सेट श्रेणियाँ हैं; धूसर वाली यहाँ उपयोग में नहीं हैं। चलिए रसायन में जाते हैं।',
        },
        {
          label: 'जोड़ें या हटाएँ', title: 'जोड़ें या हटाएँ चुनें',
          body: 'जो वस्तु आपने उपयोग की उसे चुनें — जैसे एक रसायन — फिर चुनें कि आप क्या कर रहे हैं: नया स्टॉक आने पर <strong>Add to Store</strong>, या निकाली/उपयोग की गई किसी चीज़ के लिए <strong>Remove from Store</strong>।',
          voice: 'जब आप वस्तु चुनते हैं — मान लीजिए एक रसायन — तो आपको दो विकल्प मिलते हैं। ऐड टू स्टोर, जब नया स्टॉक आता है। या रिमूव फ्रॉम स्टोर, आपके द्वारा निकाली या उपयोग की गई किसी भी चीज़ के लिए। आप जो भी चुनें, अगली स्क्रीन विवरण माँगती है। चलिए कुछ हटाने से शुरू करते हैं।',
        },
        {
          label: 'हटाएँ', title: 'Remove from Store — कारण बताएँ',
          body: 'जब आप स्टॉक हटाते हैं, सिस्टम <strong>क्यों</strong> पूछता है। एक <strong>कारण</strong> चुनें — <em>प्लांट में खपत</em>, <em>एक्सपायरी</em>, <em>बर्बाद</em>, <em>वेंडर को वापस</em>, <em>तैयार घोल</em>, और अधिक — फिर <strong>मात्रा</strong> और जिस <strong>एसेट</strong> पर उपयोग हुआ वह दर्ज करके जमा करें।',
          voice: 'जब आप कुछ हटाते हैं, सिस्टम हमेशा क्यों पूछता है। आप सूची से एक कारण चुनते हैं — प्लांट में खपत, एक्सपायरी, बर्बाद, अन्य स्रोतों को भेजा, वेंडर को वापस, तैयार घोल, इत्यादि। वही कारण बाद में लॉग में दिखता है। फिर आप ली गई मात्रा दर्ज करते हैं — मान लीजिए शून्य दशमलव शून्य दो किलोग्राम — जिस एसेट पर उपयोग हुआ वह चुनते हैं, और जमा करते हैं। स्टॉक ठीक उतना ही घट जाता है।',
          tip: { type: 'rememberLabel', text: 'हमेशा सही कारण चुनें — यही वह रिमार्क बनता है जो सुपरवाइज़र उस प्रविष्टि के सामने देखता है।' },
        },
        {
          label: 'जोड़ें', title: 'Add to Store — नया स्टॉक दर्ज करें',
          body: 'स्टॉक जोड़ना भी वैसे ही काम करता है। एक कारण चुनें — <em>खरीद</em>, <em>अन्य स्रोतों से प्राप्त</em>, <em>रिकंसाइल एडिशन</em>, या <em>रिवर्स इन्वेंटरी</em> — <strong>मात्रा</strong> दर्ज करें, और जमा करें। उपलब्ध स्टॉक बढ़ जाता है।',
          voice: 'नया स्टॉक जोड़ना भी उतना ही तेज़ है। आप एक कारण चुनते हैं — खरीद, किसी अन्य स्रोत से प्राप्त स्टॉक, गिनती ठीक करने के लिए रिकंसाइल एडिशन, या रिवर्स इन्वेंटरी। फिर आप प्राप्त मात्रा दर्ज करते हैं — यहाँ, बाईस किलोग्राम — और जमा करते हैं। उपलब्ध मात्रा सीधे उतनी बढ़ जाती है। तो स्टॉक आ रहा हो या जा रहा हो, वही सरल प्रवाह है — कारण, मात्रा, जमा।',
        },
        {
          label: 'सिंक', title: 'हर प्रविष्टि सुपरवाइज़र तक पहुँचती है',
          body: 'मुख्य बात: आपकी <strong>हर</strong> जोड़ या हटाव <strong>तुरंत सुपरवाइज़र के डैशबोर्ड पर</strong> दिखता है — उस रसायन के लॉग में, हरे प्लस या लाल माइनस के रूप में। स्टोर की एक साझा, हमेशा-वर्तमान तस्वीर।',
          voice: 'और यही सब क्यों मायने रखता है। आपकी हर एक प्रविष्टि — हर जोड़, हर हटाव — सीधे सुपरवाइज़र के डैशबोर्ड तक, रीयल टाइम में पहुँचती है। आपने अभी जो बाईस किलोग्राम जोड़े वे चूने के लॉग में हरे प्लस के रूप में दिखते हैं। आपने जो शून्य दशमलव शून्य दो खपत किए वे लाल माइनस के रूप में। तो ऑपरेटर फ़्लोर से स्टोर को सटीक रखता है, और सुपरवाइज़र हमेशा एक जीवंत, भरोसेमंद तस्वीर देखता है — बीच में कोई कागज़ी काम नहीं। यह इन्वेंटरी प्रबंधन को पूरा करता है।',
          tip: { type: 'upNextLabel', text: 'ऑपरेटर इसे वर्तमान रखते हैं; सुपरवाइज़र इसे लाइव देखते हैं।' },
        },
      ],
    },
    ta: {
      title: 'இயக்குனர்களுக்கான<br><em>சரக்கு.</em>',
      subtitle:
        'கடையிலிருந்து ஏதாவது எடுத்தீர்களா, அல்லது புதிய இருப்பைச் சேர்த்தீர்களா? விநாடிகளில் பதிவு செய்யுங்கள் — மேற்பார்வையாளர் உடனே பார்க்கிறார்.',
      chapter: 'அத்தியாயம் நான்கு · சேமிப்பு அறை',
      steps: [
        {
          label: 'வகைகள்', title: 'கடை மற்றும் வகையைத் தேர்வு செய்',
          body: 'ஒரு இயக்குனராக, நீங்கள் கடையை புதுப்பித்து வைக்கிறீர்கள். உங்கள் <strong>கடையைத்</strong> தேர்வு செய்து, பின் ஒரு <strong>வகையை</strong> — <strong>ரசாயனங்கள்</strong>, <strong>கரைசல்</strong>, <strong>நுகர்பொருட்கள்</strong>, மேலும். மங்கிய வகைகள் இந்தக் கடைக்கு அமைக்கப்படவில்லை.',
          voice: 'இப்போது இயக்குனர் பக்கத்திற்கு மாறுவோம். உங்கள் வேலை கடையைத் துல்லியமாக வைப்பது — நீங்கள் எடுப்பதையும் வருவதையும் பதிவு செய்வது. உங்கள் கடையைத் தேர்வு செய்து தொடங்குகிறீர்கள், பின் ஒரு வகையைத் தட்டுகிறீர்கள். ரசாயனங்கள், கரைசல், நுகர்பொருட்கள், உதிரிபாகங்கள், கருவிகள். பிரகாசமான ஓடுகள் உங்கள் கடைக்கு அமைக்கப்பட்ட வகைகள்; மங்கியவை இங்கே பயன்பாட்டில் இல்லை. ரசாயனங்களுக்குள் செல்வோம்.',
        },
        {
          label: 'சேர் அல்லது நீக்கு', title: 'சேர் அல்லது நீக்கு என்பதைத் தேர்வு செய்',
          body: 'நீங்கள் பயன்படுத்திய பொருளைத் தேர்வு செய்யுங்கள் — ஒரு ரசாயனம் — பின் என்ன செய்கிறீர்கள் என்பதைத் தேர்வு செய்யுங்கள்: புதிய இருப்பு வருவதற்கு <strong>Add to Store</strong>, அல்லது எடுக்கப்பட்ட/பயன்படுத்தப்பட்ட எதற்கும் <strong>Remove from Store</strong>.',
          voice: 'பொருளைத் தேர்வு செய்தவுடன் — ஒரு ரசாயனம் என்று வைத்துக்கொள்வோம் — இரண்டு தேர்வுகள் கிடைக்கின்றன. ஆட் டு ஸ்டோர், புதிய இருப்பு வரும்போது. அல்லது ரிமூவ் ஃப்ரம் ஸ்டோர், நீங்கள் எடுத்த அல்லது பயன்படுத்திய எதற்கும். எதைத் தேர்ந்தாலும், அடுத்த திரை விவரங்களைக் கேட்கிறது. ஏதாவது நீக்குவதிலிருந்து தொடங்குவோம்.',
        },
        {
          label: 'நீக்கு', title: 'Remove from Store — காரணம் சொல்',
          body: 'இருப்பை நீக்கும்போது, சிஸ்டம் <strong>ஏன்</strong> எனக் கேட்கிறது. ஒரு <strong>காரணத்தைத்</strong> தேர்வு செய்யுங்கள் — <em>ஆலையில் நுகரப்பட்டது</em>, <em>காலாவதி</em>, <em>வீணானது</em>, <em>விற்பனையாளருக்குத் திருப்பியது</em>, <em>தயாரிக்கப்பட்ட கரைசல்</em> — பின் <strong>அளவு</strong> மற்றும் பயன்படுத்திய <strong>சொத்தை</strong> உள்ளிட்டு சமர்ப்பிக்கவும்.',
          voice: 'நீங்கள் ஏதாவது நீக்கும்போது, சிஸ்டம் எப்போதும் ஏன் எனக் கேட்கிறது. பட்டியலிலிருந்து ஒரு காரணத்தைத் தேர்வு செய்கிறீர்கள் — ஆலையில் நுகரப்பட்டது, காலாவதி, வீணானது, மற்ற மூலங்களுக்கு அனுப்பப்பட்டது, விற்பனையாளருக்குத் திருப்பியது, தயாரிக்கப்பட்ட கரைசல், போன்றவை. அந்தக் காரணம்தான் பின்னர் பதிவில் தோன்றுகிறது. பின் நீங்கள் எடுத்த அளவை உள்ளிடுகிறீர்கள் — பூஜ்ஜியம் புள்ளி பூஜ்ஜியம் இரண்டு கிலோகிராம் என்று வைத்துக்கொள்வோம் — பயன்படுத்திய சொத்தைத் தேர்வு செய்து, சமர்ப்பிக்கிறீர்கள். இருப்பு சரியாக அந்த அளவு குறைகிறது.',
          tip: { type: 'rememberLabel', text: 'எப்போதும் சரியான காரணத்தைத் தேர்வு செய்யுங்கள் — அதுவே மேற்பார்வையாளர் அந்தப் பதிவுக்கு எதிராகக் காணும் குறிப்பாகும்.' },
        },
        {
          label: 'சேர்', title: 'Add to Store — புதிய இருப்பைப் பதிவு செய்',
          body: 'இருப்பைச் சேர்ப்பதும் அப்படியே வேலை செய்கிறது. ஒரு காரணத்தைத் தேர்வு செய்யுங்கள் — <em>கொள்முதல்</em>, <em>மற்ற மூலங்களிலிருந்து பெறப்பட்டது</em>, <em>சரிசெய்தல் சேர்த்தல்</em>, அல்லது <em>தலைகீழ் சரக்கு</em> — <strong>அளவை</strong> உள்ளிட்டு, சமர்ப்பிக்கவும். கிடைக்கும் இருப்பு உயர்கிறது.',
          voice: 'புதிய இருப்பைச் சேர்ப்பதும் அவ்வளவு வேகமானது. ஒரு காரணத்தைத் தேர்வு செய்கிறீர்கள் — கொள்முதல், மற்றொரு மூலத்திலிருந்து பெறப்பட்ட இருப்பு, எண்ணிக்கையைச் சரிசெய்ய சரிசெய்தல் சேர்த்தல், அல்லது தலைகீழ் சரக்கு. பின் பெறப்பட்ட அளவை உள்ளிடுகிறீர்கள் — இங்கே, இருபத்தி இரண்டு கிலோகிராம் — சமர்ப்பிக்கிறீர்கள். கிடைக்கும் அளவு நேராக அந்த அளவு உயர்கிறது. எனவே இருப்பு வந்தாலும் சென்றாலும், அதே எளிய ஓட்டம் — காரணம், அளவு, சமர்ப்பி.',
        },
        {
          label: 'ஒத்திசைவு', title: 'ஒவ்வொரு பதிவும் மேற்பார்வையாளரை அடைகிறது',
          body: 'முக்கிய விஷயம்: நீங்கள் சமர்ப்பிக்கும் <strong>ஒவ்வொரு</strong> சேர்த்தல் அல்லது நீக்கலும் <strong>உடனடியாக மேற்பார்வையாளரின் டாஷ்போர்டில்</strong> தோன்றுகிறது — அந்த ரசாயனத்தின் பதிவில், பச்சை கூட்டல் அல்லது சிவப்பு கழித்தலாக. கடையின் ஒரு பகிரப்பட்ட, எப்போதும்-நிகழ்கால படம்.',
          voice: 'இவை அனைத்தும் ஏன் முக்கியம் என்பது இங்கே. நீங்கள் செய்யும் ஒவ்வொரு பதிவும் — ஒவ்வொரு சேர்த்தல், ஒவ்வொரு நீக்கல் — நேராக மேற்பார்வையாளரின் டாஷ்போர்டுக்கு, நிகழ் நேரத்தில் பாய்கிறது. நீங்கள் இப்போது சேர்த்த இருபத்தி இரண்டு கிலோகிராம் சுண்ணாம்பின் பதிவில் பச்சை கூட்டலாகத் தோன்றுகிறது. நீங்கள் நுகர்ந்த பூஜ்ஜியம் புள்ளி பூஜ்ஜியம் இரண்டு சிவப்பு கழித்தலாக. எனவே இயக்குனர் தளத்திலிருந்து கடையைத் துல்லியமாக வைக்கிறார், மேற்பார்வையாளர் எப்போதும் ஒரு நேரடி, நம்பகமான படத்தைப் பார்க்கிறார் — இடையில் காகித வேலை இல்லை. இது சரக்கு மேலாண்மையை முடிக்கிறது.',
          tip: { type: 'upNextLabel', text: 'இயக்குனர்கள் நிகழ்காலமாக வைக்கிறார்கள்; மேற்பார்வையாளர்கள் நேரடியாகப் பார்க்கிறார்கள்.' },
        },
      ],
    },
    mr: {
      title: 'ऑपरेटरसाठी<br><em>इन्व्हेंटरी.</em>',
      subtitle:
        'स्टोअरमधून काही काढले, किंवा नवीन स्टॉक जोडला? सेकंदात नोंदवा — आणि पर्यवेक्षक लगेच पाहतो.',
      chapter: 'अध्याय चार · स्टोअर रूम',
      steps: [
        {
          label: 'श्रेणी', title: 'स्टोअर आणि श्रेणी निवडा',
          body: 'ऑपरेटर म्हणून, तुम्ही स्टोअर अद्ययावत ठेवता. तुमचे <strong>स्टोअर</strong> निवडा, मग एक <strong>श्रेणी</strong> — <strong>रसायने</strong>, <strong>द्रावण</strong>, <strong>उपभोग्य</strong>, आणि अधिक. राखाडी श्रेणी या स्टोअरसाठी सेट नाहीत.',
          voice: 'आता ऑपरेटरच्या बाजूकडे वळूया. तुमचे काम स्टोअर अचूक ठेवणे आहे — तुम्ही जे काढता आणि जे येते ते नोंदवणे. तुम्ही तुमचे स्टोअर निवडून सुरुवात करता, मग एका श्रेणीवर टॅप करता. रसायने, द्रावण, उपभोग्य, स्पेअर, साधने. चमकदार टाइल्स तुमच्या स्टोअरसाठी सेट केलेल्या श्रेणी आहेत; राखाडी इथे वापरात नाहीत. चला रसायनांमध्ये जाऊ.',
        },
        {
          label: 'जोडा किंवा काढा', title: 'जोडा किंवा काढा निवडा',
          body: 'तुम्ही वापरलेली वस्तू निवडा — एक रसायन — मग तुम्ही काय करत आहात ते निवडा: नवीन स्टॉक येण्यासाठी <strong>Add to Store</strong>, किंवा काढलेल्या/वापरलेल्या कशासाठीही <strong>Remove from Store</strong>.',
          voice: 'तुम्ही वस्तू निवडल्यावर — एक रसायन समजा — तुम्हाला दोन पर्याय मिळतात. ऍड टू स्टोअर, जेव्हा नवीन स्टॉक येतो. किंवा रिमूव्ह फ्रॉम स्टोअर, तुम्ही काढलेल्या किंवा वापरलेल्या कशासाठीही. तुम्ही जे निवडाल, पुढची स्क्रीन तपशील विचारते. काहीतरी काढण्यापासून सुरू करूया.',
        },
        {
          label: 'काढा', title: 'Remove from Store — कारण द्या',
          body: 'तुम्ही स्टॉक काढता तेव्हा, सिस्टम <strong>का</strong> विचारते. एक <strong>कारण</strong> निवडा — <em>प्लांटमध्ये वापरले</em>, <em>एक्सपायरी</em>, <em>नासाडी</em>, <em>विक्रेत्याला परत</em>, <em>तयार द्रावण</em>, आणि अधिक — मग <strong>प्रमाण</strong> आणि ज्या <strong>असेट</strong>वर वापरले ते भरून सबमिट करा.',
          voice: 'तुम्ही काही काढता तेव्हा, सिस्टम नेहमी का विचारते. तुम्ही यादीतून एक कारण निवडता — प्लांटमध्ये वापरले, एक्सपायरी, नासाडी, इतर स्रोतांना पाठवले, विक्रेत्याला परत, तयार द्रावण, इत्यादी. तेच कारण नंतर लॉगमध्ये दिसते. मग तुम्ही काढलेले प्रमाण भरता — शून्य दशांश शून्य दोन किलोग्रॅम समजा — ज्या असेटवर वापरले ते निवडता, आणि सबमिट करता. स्टॉक अगदी तेवढाच कमी होतो.',
          tip: { type: 'rememberLabel', text: 'नेहमी योग्य कारण निवडा — तेच ते रिमार्क बनते जे पर्यवेक्षक त्या नोंदीसमोर पाहतो.' },
        },
        {
          label: 'जोडा', title: 'Add to Store — नवीन स्टॉक नोंदवा',
          body: 'स्टॉक जोडणेही तसेच काम करते. एक कारण निवडा — <em>खरेदी</em>, <em>इतर स्रोतांकडून मिळाले</em>, <em>रिकन्साइल अॅडिशन</em>, किंवा <em>रिव्हर्स इन्व्हेंटरी</em> — <strong>प्रमाण</strong> भरा, आणि सबमिट करा. उपलब्ध स्टॉक वाढतो.',
          voice: 'नवीन स्टॉक जोडणेही तितकेच जलद आहे. तुम्ही एक कारण निवडता — खरेदी, दुसऱ्या स्रोताकडून मिळालेला स्टॉक, मोजणी दुरुस्त करण्यासाठी रिकन्साइल अॅडिशन, किंवा रिव्हर्स इन्व्हेंटरी. मग तुम्ही मिळालेले प्रमाण भरता — इथे, बावीस किलोग्रॅम — आणि सबमिट करता. उपलब्ध प्रमाण थेट तेवढे वाढते. म्हणून स्टॉक येत असो वा जात असो, तोच सोपा प्रवाह — कारण, प्रमाण, सबमिट.',
        },
        {
          label: 'सिंक', title: 'प्रत्येक नोंद पर्यवेक्षकापर्यंत पोहोचते',
          body: 'मुख्य मुद्दा: तुम्ही सबमिट करता ती <strong>प्रत्येक</strong> भर किंवा वजावट <strong>लगेच पर्यवेक्षकाच्या डॅशबोर्डवर</strong> दिसते — त्या रसायनाच्या लॉगमध्ये, हिरवा अधिक किंवा लाल वजा म्हणून. स्टोअरचे एक सामायिक, नेहमी-चालू चित्र.',
          voice: 'आणि हे सर्व का महत्त्वाचे आहे ते इथे. तुम्ही करता ती प्रत्येक नोंद — प्रत्येक भर, प्रत्येक वजावट — थेट पर्यवेक्षकाच्या डॅशबोर्डवर, रिअल टाइममध्ये पोहोचते. तुम्ही आत्ता जोडलेले बावीस किलोग्रॅम चुन्याच्या लॉगमध्ये हिरवा अधिक म्हणून दिसतात. तुम्ही वापरलेले शून्य दशांश शून्य दोन लाल वजा म्हणून. म्हणून ऑपरेटर फ्लोअरवरून स्टोअर अचूक ठेवतो, आणि पर्यवेक्षक नेहमी एक जिवंत, विश्वसनीय चित्र पाहतो — मध्ये कोणतेही कागदी काम नाही. यामुळे इन्व्हेंटरी व्यवस्थापन पूर्ण होते.',
          tip: { type: 'upNextLabel', text: 'ऑपरेटर ते चालू ठेवतात; पर्यवेक्षक ते लाइव्ह पाहतात.' },
        },
      ],
    },
  },
};

export default lesson;
