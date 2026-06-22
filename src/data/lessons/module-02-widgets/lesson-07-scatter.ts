import type { Lesson, ScatterData } from '../../types';

/**
 * Module 2 · Lesson 7 — Scatter Graph.   Tag: M2.L7
 * Plots one sensor against another (X = sensor A, Y = sensor B) to reveal
 * correlations, instead of plotting a sensor against time.
 */

const POINTS = [
  { x: 1, y: 8 }, { x: 1, y: 2 }, { x: 2, y: 9 }, { x: 2, y: 7 }, { x: 2, y: 6 },
  { x: 2, y: 5 }, { x: 3, y: 8 }, { x: 3, y: 7 }, { x: 3, y: 5 }, { x: 3, y: 4 },
  { x: 3, y: 3 }, { x: 4, y: 8 }, { x: 4, y: 7 }, { x: 4, y: 6 }, { x: 4, y: 5 },
  { x: 4, y: 3 }, { x: 5, y: 9 }, { x: 5, y: 8 }, { x: 5, y: 6 }, { x: 5, y: 4 },
  { x: 5, y: 2 }, { x: 6, y: 8 }, { x: 6, y: 7 }, { x: 6, y: 5 }, { x: 6, y: 4 },
  { x: 7, y: 6 }, { x: 7, y: 3 }, { x: 7, y: 2 },
];

function scatter(highlight?: ScatterData['highlight']): ScatterData {
  return {
    title: 'Scatter Graph 1',
    seriesName: 'Sensor Readings',
    color: '#1f5f4f',
    points: POINTS,
    xLabel: 'Level',
    yLabel: 'Flow',
    xMin: 1, xMax: 7,
    yMin: 2, yMax: 9,
    highlight,
  };
}

const lesson: Lesson = {
  id: 'lesson-07-scatter',
  moduleId: 'module-02-widgets',
  lessonNumber: 7,
  estimatedMinutes: 3,
  screenshots: {},
  layouts: [
    { mode: 'widget', widget: 'scatter', caption: 'Scatter Graph',
      widgetState: { scatter: scatter('points') }, cursor: [{ at: 0.1, x: 50, y: 45 }] },
    { mode: 'widget', widget: 'scatter', caption: 'One sensor on the Y-axis',
      widgetState: { scatter: scatter('yaxis') }, cursor: [{ at: 0.2, x: 7, y: 45 }] },
    { mode: 'widget', widget: 'scatter', caption: 'A second sensor on the X-axis',
      widgetState: { scatter: scatter('xaxis') }, cursor: [{ at: 0.2, x: 50, y: 88 }] },
    { mode: 'widget', widget: 'scatter', caption: 'See correlations at a glance',
      widgetState: { scatter: scatter('points') }, cursor: [{ at: 0.3, x: 35, y: 55 }, { at: 0.7, x: 65, y: 35 }] },
    { mode: 'widget', widget: 'scatter', caption: 'Sensor-to-sensor, not just over time',
      widgetState: { scatter: scatter('legend') }, cursor: [{ at: 0.2, x: 50, y: 12 }] },
  ],
  content: {
    en: {
      title: '<em>Scatter</em><br>Graphs.',
      subtitle:
        'Plot one sensor against another and see the relationship between two data streams at a glance.',
      chapter: 'Chapter Two · Widget Deep-Dive',
      steps: [
        {
          label: 'Overview', title: 'Two sensors, one graph',
          body: "A <strong>Scatter Graph</strong> plots <strong>two sensors against each other</strong> on the same graph. Each dot is a moment where both sensors were read — here <strong>Flow</strong> against <strong>Level</strong>.",
          voice: "Our last graph is a special one — the Scatter Graph. Instead of plotting a sensor over time, a scatter graph plots two sensors against each other on the same chart. Every dot you see is a single moment, where both sensors were read at once. Here we're looking at flow against level.",
        },
        {
          label: 'Y-Axis', title: 'One sensor on the Y-axis',
          body: "The <strong>Y-axis</strong> — the vertical one — carries the values from <strong>one sensor</strong>. Here that's <strong>Flow</strong>, running from 2 up to 9. Higher up the chart means a higher flow reading.",
          voice: "Let's break it down. The vertical Y axis carries the readings from one sensor. In this example, that's Flow, running from two at the bottom up to nine at the top. The higher up the chart a dot sits, the higher its flow reading.",
        },
        {
          label: 'X-Axis', title: 'A second sensor on the X-axis',
          body: "The <strong>X-axis</strong> — the horizontal one — carries a <strong>second sensor</strong>. Here it's <strong>Level</strong>, from 1 to 7. So a dot's position shows both readings at once: its Level across, its Flow up.",
          voice: "And the horizontal X axis carries a second, different sensor. Here it's Level, running from one to seven. So every dot's position tells you two things at once — how far across shows its level, and how far up shows its flow. Two sensor readings, captured in a single point.",
        },
        {
          label: 'Relationships', title: 'See correlations at a glance',
          body: "This is what makes scatter graphs powerful — you can <strong>see the relationship</strong> between two data streams directly. For example, how <strong>pressure varies with temperature</strong>. Patterns and correlations that are invisible on a time graph jump straight out.",
          voice: "Now, why does this matter? Because it lets you see the relationship between two data streams directly. For instance, how pressure varies with temperature, or how flow responds to level. If the dots trend upward together, the two sensors rise together. If they scatter randomly, there's no strong link. These patterns are invisible on an ordinary time graph, but on a scatter graph, they jump straight out.",
          tip: { type: 'rememberLabel', text: "Time graphs answer 'how did this change over time?'. Scatter graphs answer 'how do these two move together?'." },
        },
        {
          label: 'Recap', title: 'Sensor-to-sensor, not just over time',
          body: "Until now, graphs plotted values against <strong>time</strong>. The Scatter Graph adds a new lens — <strong>sensor against sensor</strong> — so you can compare two data streams directly. That completes the graph widgets.",
          voice: "So to sum up. Until now, our graphs plotted values against time on the X axis. The scatter graph adds a completely new lens — sensor against sensor — letting you compare two data streams directly, and spot correlations at a glance. That completes our tour of the graph widgets. In the next lesson, we'll move on to another part of the dashboard.",
          tip: { type: 'upNextLabel', text: 'Next: more of the dashboard.' },
        },
      ],
    },
    hi: {
      title: '<em>स्कैटर</em><br>ग्राफ़।',
      subtitle:
        'एक सेंसर को दूसरे के सामने प्लॉट करें और दो डेटा धाराओं के बीच संबंध एक नज़र में देखें।',
      chapter: 'अध्याय दो · विजेट गहन अध्ययन',
      steps: [
        {
          label: 'अवलोकन', title: 'दो सेंसर, एक ग्राफ़',
          body: 'एक <strong>स्कैटर ग्राफ़</strong> एक ही ग्राफ़ पर <strong>दो सेंसर को एक-दूसरे के सामने</strong> प्लॉट करता है। हर बिंदु एक पल है जहाँ दोनों सेंसर पढ़े गए — यहाँ <strong>Flow</strong> बनाम <strong>Level</strong>।',
          voice: 'हमारा आख़िरी ग्राफ़ ख़ास है — स्कैटर ग्राफ़। एक सेंसर को समय के साथ प्लॉट करने के बजाय, स्कैटर ग्राफ़ एक ही चार्ट पर दो सेंसर को एक-दूसरे के सामने प्लॉट करता है। आप जो हर बिंदु देखते हैं वह एक पल है, जहाँ दोनों सेंसर एक साथ पढ़े गए। यहाँ हम फ़्लो बनाम लेवल देख रहे हैं।',
        },
        {
          label: 'Y-अक्ष', title: 'Y-अक्ष पर एक सेंसर',
          body: '<strong>Y-अक्ष</strong> — ऊर्ध्वाधर वाला — <strong>एक सेंसर</strong> के मान रखता है। यहाँ वह <strong>Flow</strong> है, 2 से 9 तक। चार्ट में जितना ऊपर, उतनी अधिक फ़्लो रीडिंग।',
          voice: 'आइए इसे समझें। ऊर्ध्वाधर Y अक्ष एक सेंसर की रीडिंग रखता है। इस उदाहरण में, वह फ़्लो है, नीचे दो से ऊपर नौ तक। बिंदु चार्ट में जितना ऊपर बैठता है, उसकी फ़्लो रीडिंग उतनी ही अधिक।',
        },
        {
          label: 'X-अक्ष', title: 'X-अक्ष पर दूसरा सेंसर',
          body: '<strong>X-अक्ष</strong> — क्षैतिज वाला — एक <strong>दूसरा सेंसर</strong> रखता है। यहाँ वह <strong>Level</strong> है, 1 से 7 तक। तो एक बिंदु की स्थिति दोनों रीडिंग एक साथ दिखाती है: उसका लेवल आड़े में, उसका फ़्लो ऊपर।',
          voice: 'और क्षैतिज X अक्ष एक दूसरा, अलग सेंसर रखता है। यहाँ वह लेवल है, एक से सात तक। तो हर बिंदु की स्थिति आपको एक साथ दो चीज़ें बताती है — कितना आड़े में उसका लेवल दिखाता है, और कितना ऊपर उसका फ़्लो। दो सेंसर रीडिंग, एक ही बिंदु में।',
        },
        {
          label: 'संबंध', title: 'एक नज़र में सहसंबंध देखें',
          body: 'यही स्कैटर ग्राफ़ को शक्तिशाली बनाता है — आप दो डेटा धाराओं के बीच <strong>संबंध</strong> सीधे देख सकते हैं। जैसे, <strong>दबाव तापमान के साथ कैसे बदलता है</strong>। समय ग्राफ़ पर अदृश्य पैटर्न और सहसंबंध यहाँ तुरंत सामने आ जाते हैं।',
          voice: 'अब, यह क्यों मायने रखता है? क्योंकि यह आपको दो डेटा धाराओं के बीच संबंध सीधे देखने देता है। जैसे, दबाव तापमान के साथ कैसे बदलता है, या फ़्लो लेवल पर कैसे प्रतिक्रिया करता है। अगर बिंदु एक साथ ऊपर की ओर बढ़ते हैं, तो दोनों सेंसर साथ बढ़ते हैं। अगर वे यादृच्छिक रूप से बिखरते हैं, तो कोई मज़बूत संबंध नहीं है। ये पैटर्न सामान्य समय ग्राफ़ पर अदृश्य होते हैं, लेकिन स्कैटर ग्राफ़ पर तुरंत सामने आ जाते हैं।',
          tip: { type: 'rememberLabel', text: "समय ग्राफ़ बताता है 'यह समय के साथ कैसे बदला?'। स्कैटर ग्राफ़ बताता है 'ये दोनों एक साथ कैसे चलते हैं?'।" },
        },
        {
          label: 'सारांश', title: 'सेंसर-से-सेंसर, सिर्फ़ समय के साथ नहीं',
          body: 'अब तक, ग्राफ़ मानों को <strong>समय</strong> के सामने प्लॉट करते थे। स्कैटर ग्राफ़ एक नया नज़रिया जोड़ता है — <strong>सेंसर बनाम सेंसर</strong> — ताकि आप दो डेटा धाराओं की सीधे तुलना कर सकें। यह ग्राफ़ विजेट्स को पूरा करता है।',
          voice: 'तो संक्षेप में। अब तक, हमारे ग्राफ़ X अक्ष पर मानों को समय के सामने प्लॉट करते थे। स्कैटर ग्राफ़ एक बिल्कुल नया नज़रिया जोड़ता है — सेंसर बनाम सेंसर — जिससे आप दो डेटा धाराओं की सीधे तुलना कर सकते हैं, और एक नज़र में सहसंबंध देख सकते हैं। यह ग्राफ़ विजेट्स का हमारा दौरा पूरा करता है। अगले पाठ में, हम डैशबोर्ड के एक और हिस्से पर जाएँगे।',
          tip: { type: 'upNextLabel', text: 'आगे: डैशबोर्ड का और हिस्सा।' },
        },
      ],
    },
    ta: {
      title: '<em>ஸ்கேட்டர்</em><br>வரைபடங்கள்.',
      subtitle:
        'ஒரு சென்சாரை மற்றொன்றுக்கு எதிராக வரைந்து, இரண்டு தரவுத் தாரைகளுக்கு இடையேயான தொடர்பை ஒரே பார்வையில் காணுங்கள்.',
      chapter: 'அத்தியாயம் இரண்டு · விட்ஜெட் ஆழ்ந்த பார்வை',
      steps: [
        {
          label: 'மேலோட்டம்', title: 'இரண்டு சென்சார்கள், ஒரு வரைபடம்',
          body: 'ஒரு <strong>ஸ்கேட்டர் வரைபடம்</strong> ஒரே வரைபடத்தில் <strong>இரண்டு சென்சார்களை ஒன்றுக்கொன்று எதிராக</strong> வரைகிறது. ஒவ்வொரு புள்ளியும் இரண்டு சென்சார்களும் படிக்கப்பட்ட ஒரு கணம் — இங்கே <strong>Flow</strong> எதிராக <strong>Level</strong>.',
          voice: 'நமது கடைசி வரைபடம் சிறப்பானது — ஸ்கேட்டர் வரைபடம். ஒரு சென்சாரை காலத்துடன் வரைவதற்குப் பதிலாக, ஸ்கேட்டர் வரைபடம் ஒரே சார்ட்டில் இரண்டு சென்சார்களை ஒன்றுக்கொன்று எதிராக வரைகிறது. நீங்கள் காணும் ஒவ்வொரு புள்ளியும் ஒரு கணம், இரண்டு சென்சார்களும் ஒரே நேரத்தில் படிக்கப்பட்டது. இங்கே ஃப்ளோ எதிராக லெவலைப் பார்க்கிறோம்.',
        },
        {
          label: 'Y-அச்சு', title: 'Y-அச்சில் ஒரு சென்சார்',
          body: '<strong>Y-அச்சு</strong> — செங்குத்தானது — <strong>ஒரு சென்சாரின்</strong> மதிப்புகளைக் கொண்டுள்ளது. இங்கே அது <strong>Flow</strong>, 2 முதல் 9 வரை. வரைபடத்தில் மேலே செல்லச்செல்ல அதிக ஃப்ளோ அளவீடு.',
          voice: 'இதைப் பிரித்துப் பார்ப்போம். செங்குத்து Y அச்சு ஒரு சென்சாரின் அளவீடுகளைக் கொண்டுள்ளது. இந்த உதாரணத்தில், அது ஃப்ளோ, கீழே இரண்டிலிருந்து மேலே ஒன்பது வரை. ஒரு புள்ளி வரைபடத்தில் எவ்வளவு மேலே அமர்கிறதோ, அதன் ஃப்ளோ அளவீடு அவ்வளவு அதிகம்.',
        },
        {
          label: 'X-அச்சு', title: 'X-அச்சில் இரண்டாவது சென்சார்',
          body: '<strong>X-அச்சு</strong> — கிடைமட்டமானது — ஒரு <strong>இரண்டாவது சென்சாரைக்</strong> கொண்டுள்ளது. இங்கே அது <strong>Level</strong>, 1 முதல் 7 வரை. எனவே ஒரு புள்ளியின் இடம் இரண்டு அளவீடுகளையும் ஒரே நேரத்தில் காட்டுகிறது: அதன் லெவல் குறுக்கே, அதன் ஃப்ளோ மேலே.',
          voice: 'கிடைமட்ட X அச்சு ஒரு இரண்டாவது, வேறு சென்சாரைக் கொண்டுள்ளது. இங்கே அது லெவல், ஒன்று முதல் ஏழு வரை. எனவே ஒவ்வொரு புள்ளியின் இடமும் உங்களுக்கு ஒரே நேரத்தில் இரண்டு விஷயங்களைச் சொல்கிறது — குறுக்கே எவ்வளவு என்பது அதன் லெவலைக் காட்டுகிறது, மேலே எவ்வளவு என்பது அதன் ஃப்ளோவைக் காட்டுகிறது. இரண்டு சென்சார் அளவீடுகள், ஒரே புள்ளியில்.',
        },
        {
          label: 'தொடர்புகள்', title: 'தொடர்புகளை ஒரே பார்வையில் காணுங்கள்',
          body: 'இதுவே ஸ்கேட்டர் வரைபடங்களை சக்திவாய்ந்ததாக்குகிறது — இரண்டு தரவுத் தாரைகளுக்கு இடையேயான <strong>தொடர்பை</strong> நேரடியாகக் காணலாம். உதாரணமாக, <strong>அழுத்தம் வெப்பநிலையுடன் எப்படி மாறுகிறது</strong>. கால வரைபடத்தில் கண்ணுக்குத் தெரியாத வடிவங்களும் தொடர்புகளும் இங்கே உடனே தெரிகின்றன.',
          voice: 'இது ஏன் முக்கியம்? ஏனெனில் இரண்டு தரவுத் தாரைகளுக்கு இடையேயான தொடர்பை நேரடியாகக் காண இது உதவுகிறது. உதாரணமாக, அழுத்தம் வெப்பநிலையுடன் எப்படி மாறுகிறது, அல்லது ஃப்ளோ லெவலுக்கு எப்படி பதிலளிக்கிறது. புள்ளிகள் ஒன்றாக மேல்நோக்கி நகர்ந்தால், இரண்டு சென்சார்களும் சேர்ந்து உயர்கின்றன. அவை சீரற்ற முறையில் சிதறினால், வலுவான தொடர்பு இல்லை. இந்த வடிவங்கள் சாதாரண கால வரைபடத்தில் கண்ணுக்குத் தெரியாது, ஆனால் ஸ்கேட்டர் வரைபடத்தில் உடனே தெரிகின்றன.',
          tip: { type: 'rememberLabel', text: "கால வரைபடங்கள் 'இது காலப்போக்கில் எப்படி மாறியது?' என்பதைப் பதிலளிக்கின்றன. ஸ்கேட்டர் வரைபடங்கள் 'இவை இரண்டும் எப்படி சேர்ந்து நகர்கின்றன?' என்பதைப் பதிலளிக்கின்றன." },
        },
        {
          label: 'சுருக்கம்', title: 'சென்சார்-க்கு-சென்சார், காலத்துடன் மட்டுமல்ல',
          body: 'இதுவரை, வரைபடங்கள் மதிப்புகளை <strong>காலத்துக்கு</strong> எதிராக வரைந்தன. ஸ்கேட்டர் வரைபடம் ஒரு புதிய பார்வையைச் சேர்க்கிறது — <strong>சென்சார் எதிராக சென்சார்</strong> — இதனால் இரண்டு தரவுத் தாரைகளை நேரடியாக ஒப்பிடலாம். இது வரைபட விட்ஜெட்களை முடிக்கிறது.',
          voice: 'எனவே சுருக்கமாக. இதுவரை, நமது வரைபடங்கள் X அச்சில் மதிப்புகளை காலத்துக்கு எதிராக வரைந்தன. ஸ்கேட்டர் வரைபடம் ஒரு முற்றிலும் புதிய பார்வையைச் சேர்க்கிறது — சென்சார் எதிராக சென்சார் — இரண்டு தரவுத் தாரைகளை நேரடியாக ஒப்பிட்டு, தொடர்புகளை ஒரே பார்வையில் காண அனுமதிக்கிறது. இது வரைபட விட்ஜெட்களின் நமது சுற்றுப்பயணத்தை முடிக்கிறது. அடுத்த பாடத்தில், டாஷ்போர்டின் மற்றொரு பகுதிக்கு செல்வோம்.',
          tip: { type: 'upNextLabel', text: 'அடுத்து: டாஷ்போர்டின் மேலும்.' },
        },
      ],
    },
    mr: {
      title: '<em>स्कॅटर</em><br>आलेख.',
      subtitle:
        'एक सेन्सर दुसऱ्याविरुद्ध प्लॉट करा आणि दोन डेटा प्रवाहांमधील संबंध एका दृष्टीक्षेपात पाहा.',
      chapter: 'अध्याय दोन · विजेट सखोल अभ्यास',
      steps: [
        {
          label: 'आढावा', title: 'दोन सेन्सर, एक आलेख',
          body: 'एक <strong>स्कॅटर आलेख</strong> एकाच आलेखावर <strong>दोन सेन्सर एकमेकांविरुद्ध</strong> प्लॉट करतो. प्रत्येक बिंदू एक क्षण आहे जिथे दोन्ही सेन्सर वाचले गेले — इथे <strong>Flow</strong> विरुद्ध <strong>Level</strong>.',
          voice: 'आपला शेवटचा आलेख खास आहे — स्कॅटर आलेख. एक सेन्सर वेळेनुसार प्लॉट करण्याऐवजी, स्कॅटर आलेख एकाच चार्टवर दोन सेन्सर एकमेकांविरुद्ध प्लॉट करतो. तुम्ही पाहता तो प्रत्येक बिंदू एक क्षण आहे, जिथे दोन्ही सेन्सर एकाच वेळी वाचले गेले. इथे आपण फ्लो विरुद्ध लेव्हल पाहत आहोत.',
        },
        {
          label: 'Y-अक्ष', title: 'Y-अक्षावर एक सेन्सर',
          body: '<strong>Y-अक्ष</strong> — उभा — <strong>एका सेन्सरची</strong> मूल्ये बाळगतो. इथे तो <strong>Flow</strong> आहे, 2 ते 9 पर्यंत. आलेखात जितके वर, तितकी अधिक फ्लो रीडिंग.',
          voice: 'चला हे समजून घेऊ. उभा Y अक्ष एका सेन्सरची वाचने बाळगतो. या उदाहरणात, तो फ्लो आहे, खाली दोन ते वर नऊ पर्यंत. बिंदू आलेखात जितका वर बसतो, त्याची फ्लो रीडिंग तितकी अधिक.',
        },
        {
          label: 'X-अक्ष', title: 'X-अक्षावर दुसरा सेन्सर',
          body: '<strong>X-अक्ष</strong> — आडवा — एक <strong>दुसरा सेन्सर</strong> बाळगतो. इथे तो <strong>Level</strong> आहे, 1 ते 7 पर्यंत. म्हणून एका बिंदूचे स्थान दोन्ही वाचने एकाच वेळी दाखवते: त्याचा लेव्हल आडवा, त्याचा फ्लो वर.',
          voice: 'आणि आडवा X अक्ष एक दुसरा, वेगळा सेन्सर बाळगतो. इथे तो लेव्हल आहे, एक ते सात पर्यंत. म्हणून प्रत्येक बिंदूचे स्थान तुम्हाला एकाच वेळी दोन गोष्टी सांगते — आडवे किती हे त्याचा लेव्हल दाखवते, आणि वर किती हे त्याचा फ्लो दाखवते. दोन सेन्सर वाचने, एकाच बिंदूत.',
        },
        {
          label: 'संबंध', title: 'संबंध एका दृष्टीक्षेपात पाहा',
          body: 'हेच स्कॅटर आलेखांना शक्तिशाली बनवते — तुम्ही दोन डेटा प्रवाहांमधील <strong>संबंध</strong> थेट पाहू शकता. उदाहरणार्थ, <strong>दाब तापमानानुसार कसा बदलतो</strong>. वेळ आलेखावर अदृश्य असलेले नमुने आणि संबंध इथे लगेच समोर येतात.',
          voice: 'आता, हे का महत्त्वाचे? कारण ते तुम्हाला दोन डेटा प्रवाहांमधील संबंध थेट पाहू देते. उदाहरणार्थ, दाब तापमानानुसार कसा बदलतो, किंवा फ्लो लेव्हलला कसा प्रतिसाद देतो. बिंदू एकत्र वर सरकले, तर दोन्ही सेन्सर एकत्र वाढतात. ते यादृच्छिकपणे विखुरले, तर मजबूत संबंध नाही. हे नमुने सामान्य वेळ आलेखावर अदृश्य असतात, पण स्कॅटर आलेखावर लगेच समोर येतात.',
          tip: { type: 'rememberLabel', text: "वेळ आलेख सांगतो 'हे वेळेनुसार कसे बदलले?'. स्कॅटर आलेख सांगतो 'हे दोन्ही एकत्र कसे चालतात?'." },
        },
        {
          label: 'सारांश', title: 'सेन्सर-ते-सेन्सर, फक्त वेळेनुसार नाही',
          body: 'आतापर्यंत, आलेख मूल्ये <strong>वेळेविरुद्ध</strong> प्लॉट करत. स्कॅटर आलेख एक नवीन दृष्टिकोन जोडतो — <strong>सेन्सर विरुद्ध सेन्सर</strong> — जेणेकरून तुम्ही दोन डेटा प्रवाहांची थेट तुलना करू शकता. यामुळे आलेख विजेट्स पूर्ण होतात.',
          voice: 'तर थोडक्यात. आतापर्यंत, आपले आलेख X अक्षावर मूल्ये वेळेविरुद्ध प्लॉट करत. स्कॅटर आलेख एक पूर्णपणे नवीन दृष्टिकोन जोडतो — सेन्सर विरुद्ध सेन्सर — ज्यामुळे तुम्ही दोन डेटा प्रवाहांची थेट तुलना करू शकता, आणि एका दृष्टीक्षेपात संबंध पाहू शकता. यामुळे आलेख विजेट्सचा आपला दौरा पूर्ण होतो. पुढच्या पाठात, आपण डॅशबोर्डच्या आणखी एका भागाकडे जाऊ.',
          tip: { type: 'upNextLabel', text: 'पुढे: डॅशबोर्डचा आणखी भाग.' },
        },
      ],
    },
  },
};

export default lesson;
