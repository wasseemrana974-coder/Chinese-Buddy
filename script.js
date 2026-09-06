/* =========================================================
   Chinese Buddy 🇨🇳
   Main JavaScript
   ========================================================= */

"use strict";

/* =========================================================
   HELPERS
   ========================================================= */

const $ = (id) => document.getElementById(id);

const STORAGE_KEY = "chineseBuddyData";

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function loadData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

let data = {
  username: "",
  loggedIn: false,
  xp: 0,
  streak: 0,
  lastStudyDate: "",
  completedLessons: [],
  review: [],
  favorites: [],
  testResults: [],
  darkMode: false,
  language: "ar",
  notificationsAsked: false,
  ...loadData()
};

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   MOTIVATION
   ========================================================= */

const quotes = [
  "خذ خطوة صغيرة لتقربك أكثر ❤️",
  "لا تجعل الخوف من الخطأ يهدم حلمك كاملًا 🌱",
  "كل كلمة صينية جديدة هي تقدم حقيقي 🇨🇳",
  "错误也是学习的一部分 — الخطأ جزء من التعلم 💪",
  "استمر، حتى لو كانت خطوة واحدة اليوم ⭐",
  "你可以 — أنت تستطيع! 🔥",
  "لا تحتاج أن تكون مثاليًا، فقط استمر.",
  "اليوم كلمة، غدًا جملة، وبعدها محادثة كاملة 🗣️",
  "رحلتك في الصينية بدأت، فلا تتوقف الآن 🚀",
  "التقدم البطيء أفضل من التوقف."
];

function randomQuote() {
  const last = localStorage.getItem("lastChineseBuddyQuote");

  let available = quotes.filter(q => q !== last);

  if (!available.length) available = quotes;

  const quote = available[Math.floor(Math.random() * available.length)];

  localStorage.setItem("lastChineseBuddyQuote", quote);

  return quote;
}


/* =========================================================
   VOCABULARY
   ========================================================= */

const hskData = {

  1: [
    ["我", "wǒ", "أنا"],
    ["你", "nǐ", "أنت"],
    ["他", "tā", "هو"],
    ["她", "tā", "هي"],
    ["我们", "wǒmen", "نحن"],
    ["好", "hǎo", "جيد"],
    ["你好", "nǐ hǎo", "مرحبًا"],
    ["谢谢", "xièxie", "شكرًا"],
    ["再见", "zàijiàn", "إلى اللقاء"],
    ["是", "shì", "يكون / نعم"],
    ["不", "bù", "لا / ليس"],
    ["有", "yǒu", "لديه / يوجد"],
    ["没有", "méiyǒu", "ليس لديه"],
    ["人", "rén", "شخص"],
    ["家", "jiā", "بيت / عائلة"],
    ["学校", "xuéxiào", "مدرسة"],
    ["学生", "xuésheng", "طالب"],
    ["老师", "lǎoshī", "معلم"],
    ["朋友", "péngyou", "صديق"],
    ["中国", "Zhōngguó", "الصين"],
    ["中文", "Zhōngwén", "اللغة الصينية"],
    ["学习", "xuéxí", "يدرس / يتعلم"],
    ["吃", "chī", "يأكل"],
    ["喝", "hē", "يشرب"],
    ["水", "shuǐ", "ماء"],
    ["茶", "chá", "شاي"],
    ["咖啡", "kāfēi", "قهوة"],
    ["喜欢", "xǐhuan", "يحب"],
    ["看", "kàn", "يرى / يشاهد / يقرأ"],
    ["书", "shū", "كتاب"],
    ["今天", "jīntiān", "اليوم"],
    ["明天", "míngtiān", "غدًا"],
    ["昨天", "zuótiān", "أمس"],
    ["现在", "xiànzài", "الآن"],
    ["什么", "shénme", "ماذا"],
    ["谁", "shéi", "من"],
    ["哪儿", "nǎr", "أين"],
    ["多少", "duōshao", "كم"],
    ["一", "yī", "واحد"],
    ["二", "èr", "اثنان"],
    ["三", "sān", "ثلاثة"],
    ["四", "sì", "أربعة"],
    ["五", "wǔ", "خمسة"],
    ["六", "liù", "ستة"],
    ["七", "qī", "سبعة"],
    ["八", "bā", "ثمانية"],
    ["九", "jiǔ", "تسعة"],
    ["十", "shí", "عشرة"]
  ],

  2: [
    ["工作", "gōngzuò", "عمل"],
    ["医生", "yīshēng", "طبيب"],
    ["医院", "yīyuàn", "مستشفى"],
    ["公司", "gōngsī", "شركة"],
    ["商店", "shāngdiàn", "متجر"],
    ["饭店", "fàndiàn", "مطعم"],
    ["早上", "zǎoshang", "الصباح"],
    ["晚上", "wǎnshang", "المساء"],
    ["时间", "shíjiān", "وقت"],
    ["时候", "shíhou", "وقت / عندما"],
    ["分钟", "fēnzhōng", "دقيقة"],
    ["小时", "xiǎoshí", "ساعة"],
    ["星期", "xīngqī", "أسبوع"],
    ["周末", "zhōumò", "عطلة نهاية الأسبوع"],
    ["天气", "tiānqì", "الطقس"],
    ["下雨", "xiàyǔ", "تمطر"],
    ["热", "rè", "حار"],
    ["冷", "lěng", "بارد"],
    ["漂亮", "piàoliang", "جميل"],
    ["高兴", "gāoxìng", "سعيد"],
    ["快乐", "kuàilè", "سعيد"],
    ["累", "lèi", "متعب"],
    ["忙", "máng", "مشغول"],
    ["认识", "rènshi", "يتعرف / يعرف شخصًا"],
    ["告诉", "gàosu", "يخبر"],
    ["觉得", "juéde", "يعتقد / يشعر"],
    ["知道", "zhīdào", "يعرف"],
    ["希望", "xīwàng", "يأمل"],
    ["准备", "zhǔnbèi", "يستعد"],
    ["开始", "kāishǐ", "يبدأ"],
    ["结束", "jiéshù", "ينتهي"]
  ],

  3: [
    ["问题", "wèntí", "مشكلة / سؤال"],
    ["办法", "bànfǎ", "طريقة / حل"],
    ["帮助", "bāngzhù", "مساعدة"],
    ["机会", "jīhuì", "فرصة"],
    ["决定", "juédìng", "يقرر / قرار"],
    ["需要", "xūyào", "يحتاج"],
    ["应该", "yīnggāi", "ينبغي"],
    ["可能", "kěnéng", "ممكن / ربما"],
    ["当然", "dāngrán", "بالطبع"],
    ["特别", "tèbié", "خاص / بشكل خاص"],
    ["重要", "zhòngyào", "مهم"],
    ["简单", "jiǎndān", "بسيط"],
    ["容易", "róngyì", "سهل"],
    ["困难", "kùnnan", "صعب"],
    ["认真", "rènzhēn", "جاد / بجدية"],
    ["努力", "nǔlì", "يجتهد"],
    ["练习", "liànxí", "يتدرب / تدريب"],
    ["考试", "kǎoshì", "امتحان"],
    ["成绩", "chéngjì", "درجة / نتيجة"],
    ["经验", "jīngyàn", "خبرة"],
    ["计划", "jìhuà", "خطة"],
    ["习惯", "xíguàn", "عادة"],
    ["生活", "shēnghuó", "حياة"],
    ["健康", "jiànkāng", "صحة"],
    ["身体", "shēntǐ", "جسم"],
    ["运动", "yùndòng", "رياضة"],
    ["旅行", "lǚxíng", "سفر"],
    ["城市", "chéngshì", "مدينة"],
    ["国家", "guójiā", "دولة"],
    ["文化", "wénhuà", "ثقافة"]
  ],

  4: [
    ["社会", "shèhuì", "مجتمع"],
    ["经济", "jīngjì", "اقتصاد"],
    ["发展", "fāzhǎn", "تطور / تطوير"],
    ["教育", "jiàoyù", "تعليم"],
    ["环境", "huánjìng", "بيئة"],
    ["保护", "bǎohù", "يحمي / حماية"],
    ["影响", "yǐngxiǎng", "تأثير / يؤثر"],
    ["成功", "chénggōng", "نجاح"],
    ["失败", "shībài", "فشل"],
    ["选择", "xuǎnzé", "اختيار / يختار"],
    ["决定", "juédìng", "قرار / يقرر"],
    ["解决", "jiějué", "يحل"],
    ["提高", "tígāo", "يحسن / يرفع"],
    ["减少", "jiǎnshǎo", "يقلل"],
    ["增加", "zēngjiā", "يزيد"],
    ["改变", "gǎibiàn", "يغير"],
    ["保持", "bǎochí", "يحافظ على"],
    ["发现", "fāxiàn", "يكتشف"],
    ["了解", "liǎojiě", "يفهم / يتعرف على"],
    ["相信", "xiāngxìn", "يصدق / يثق"],
    ["接受", "jiēshòu", "يقبل"],
    ["拒绝", "jùjué", "يرفض"],
    ["建议", "jiànyì", "اقتراح / يقترح"],
    ["讨论", "tǎolùn", "يناقش"],
    ["关系", "guānxi", "علاقة"],
    ["责任", "zérèn", "مسؤولية"],
    ["机会", "jīhuì", "فرصة"],
    ["未来", "wèilái", "مستقبل"],
    ["目标", "mùbiāo", "هدف"],
    ["梦想", "mèngxiǎng", "حلم"]
  ],

  5: [
    ["技术", "jìshù", "تكنولوجيا"],
    ["科学", "kēxué", "علم"],
    ["研究", "yánjiū", "بحث"],
    ["人工智能", "réngōng zhìnéng", "ذكاء اصطناعي"],
    ["信息", "xìnxī", "معلومات"],
    ["数据", "shùjù", "بيانات"],
    ["网络", "wǎngluò", "شبكة / إنترنت"],
    ["互联网", "hùliánwǎng", "الإنترنت"],
    ["国际", "guójì", "دولي"],
    ["交流", "jiāoliú", "تواصل / تبادل"],
    ["机会", "jīhuì", "فرصة"],
    ["竞争", "jìngzhēng", "منافسة"],
    ["市场", "shìchǎng", "سوق"],
    ["企业", "qǐyè", "مؤسسة / شركة"],
    ["管理", "guǎnlǐ", "إدارة"],
    ["经济", "jīngjì", "اقتصاد"],
    ["资源", "zīyuán", "موارد"],
    ["能源", "néngyuán", "طاقة"],
    ["自然", "zìrán", "طبيعة"],
    ["污染", "wūrǎn", "تلوث"],
    ["法律", "fǎlǜ", "قانون"],
    ["政治", "zhèngzhì", "سياسة"],
    ["社会", "shèhuì", "مجتمع"],
    ["个人", "gèrén", "فردي / شخص"],
    ["价值", "jiàzhí", "قيمة"],
    ["观点", "guāndiǎn", "وجهة نظر"],
    ["情况", "qíngkuàng", "وضع / حالة"],
    ["结果", "jiéguǒ", "نتيجة"],
    ["原因", "yuányīn", "سبب"],
    ["因此", "yīncǐ", "لذلك"]
  ],

  6: [
    ["哲学", "zhéxué", "فلسفة"],
    ["理论", "lǐlùn", "نظرية"],
    ["概念", "gàiniàn", "مفهوم"],
    ["本质", "běnzhì", "جوهر"],
    ["现象", "xiànxiàng", "ظاهرة"],
    ["复杂", "fùzá", "معقد"],
    ["客观", "kèguān", "موضوعي"],
    ["主观", "zhǔguān", "ذاتي"],
    ["传统", "chuántǒng", "تقليد"],
    ["现代", "xiàndài", "حديث"],
    ["创造", "chuàngzào", "يبتكر / إبداع"],
    ["创新", "chuàngxīn", "ابتكار"],
    ["独立", "dúlì", "استقلال / مستقل"],
    ["批评", "pīpíng", "ينتقد / نقد"],
    ["分析", "fēnxī", "تحليل"],
    ["判断", "pànduàn", "يحكم / حكم"],
    ["证明", "zhèngmíng", "يثبت"],
    ["原则", "yuánzé", "مبدأ"],
    ["现状", "xiànzhuàng", "الوضع الحالي"],
    ["趋势", "qūshì", "اتجاه"],
    ["意义", "yìyì", "معنى / أهمية"],
    ["贡献", "gòngxiàn", "مساهمة"],
    ["实现", "shíxiàn", "يحقق"],
    ["推动", "tuīdòng", "يدفع / يعزز"],
    ["面临", "miànlín", "يواجه"],
    ["逐渐", "zhújiàn", "تدريجيًا"],
    ["尤其", "yóuqí", "خصوصًا"],
    ["实际上", "shíjìshàng", "في الواقع"],
    ["无论", "wúlùn", "بغض النظر عن"],
    ["尽管", "jǐnguǎn", "على الرغم من"]
  ]
};


/* =========================================================
   LESSONS
   ========================================================= */

const lessons = [
  {
    id: 1,
    hsk: 1,
    title: "التحية والتعارف",
    icon: "👋",
    description: "تعلم أول الجمل التي تحتاجها للتعارف.",
    words: ["你好", "谢谢", "再见", "我", "你", "是"]
  },

  {
    id: 2,
    hsk: 1,
    title: "الأشخاص والعائلة",
    icon: "👨‍👩‍👧",
    description: "كلمات أساسية عن الأشخاص والعائلة.",
    words: ["他", "她", "我们", "人", "家", "朋友"]
  },

  {
    id: 3,
    hsk: 1,
    title: "المدرسة والدراسة",
    icon: "🏫",
    description: "مفردات الدراسة والمدرسة.",
    words: ["学校", "学生", "老师", "学习", "中文", "书"]
  },

  {
    id: 4,
    hsk: 1,
    title: "الأكل والشرب",
    icon: "🍜",
    description: "تعلم كلمات الطعام والشراب.",
    words: ["吃", "喝", "水", "茶", "咖啡", "喜欢"]
  },

  {
    id: 5,
    hsk: 1,
    title: "الوقت والأيام",
    icon: "⏰",
    description: "اليوم وغدًا وأمس والوقت.",
    words: ["今天", "明天", "昨天", "现在", "早上", "晚上"]
  },

  {
    id: 6,
    hsk: 1,
    title: "الأرقام والأسئلة",
    icon: "🔢",
    description: "الأرقام وأهم كلمات السؤال.",
    words: ["一", "二", "三", "四", "五", "什么", "谁", "哪儿"]
  },

  {
    id: 7,
    hsk: 2,
    title: "الحياة اليومية",
    icon: "🏠",
    description: "كلمات تستخدمها في حياتك اليومية.",
    words: ["工作", "时间", "时候", "忙", "累", "生活"]
  },

  {
    id: 8,
    hsk: 2,
    title: "المشاعر والصفات",
    icon: "😊",
    description: "عبّر عن مشاعرك وصفات الأشياء.",
    words: ["高兴", "快乐", "漂亮", "热", "冷", "特别"]
  },

  {
    id: 9,
    hsk: 3,
    title: "الدراسة والنجاح",
    icon: "🎓",
    description: "مفردات تساعدك في الدراسة والاختبارات.",
    words: ["努力", "练习", "考试", "成绩", "经验", "计划"]
  },

  {
    id: 10,
    hsk: 3,
    title: "الصحة والرياضة",
    icon: "🏃",
    description: "تعلم الحديث عن الصحة والرياضة.",
    words: ["健康", "身体", "运动", "生活", "需要", "应该"]
  },

  {
    id: 11,
    hsk: 4,
    title: "المجتمع والمستقبل",
    icon: "🌍",
    description: "مفردات عن المجتمع والتطور.",
    words: ["社会", "经济", "发展", "教育", "未来", "目标"]
  },

  {
    id: 12,
    hsk: 4,
    title: "المشكلات والحلول",
    icon: "💡",
    description: "تحدث عن المشكلات والقرارات.",
    words: ["问题", "解决", "决定", "选择", "建议", "改变"]
  },

  {
    id: 13,
    hsk: 5,
    title: "التكنولوجيا",
    icon: "💻",
    description: "مفردات التكنولوجيا والذكاء الاصطناعي.",
    words: ["技术", "科学", "研究", "人工智能", "数据", "网络"]
  },

  {
    id: 14,
    hsk: 5,
    title: "الاقتصاد والعمل",
    icon: "📈",
    description: "مفردات عن الشركات والسوق والعمل.",
    words: ["企业", "市场", "竞争", "管理", "资源", "价值"]
  },

  {
    id: 15,
    hsk: 6,
    title: "التفكير والابتكار",
    icon: "🧠",
    description: "مفردات متقدمة للتحليل والابتكار.",
    words: ["哲学", "理论", "概念", "分析", "创新", "创造"]
  },

  {
    id: 16,
    hsk: 6,
    title: "النقاش ووجهات النظر",
    icon: "💬",
    description: "تعلم التعبير عن الرأي والتحليل.",
    words: ["观点", "判断", "证明", "原则", "意义", "批评"]
  }
];


/* =========================================================
   STORIES
   ========================================================= */

const stories = [
  {
    title: "يوم في المدرسة",
    text: "我每天去学校。我和我的朋友学习中文。中午我们吃饭，下午回家。",
    translation: "أذهب إلى المدرسة كل يوم. أتعلم الصينية مع صديقي. نتناول الطعام ظهرًا ثم نعود إلى المنزل بعد الظهر."
  },

  {
    title: "في الصباح",
    text: "早上好！我在家喝茶，然后学习中文。今天我很高兴。",
    translation: "صباح الخير! أنا في المنزل أشرب الشاي، ثم أدرس الصينية. أنا سعيد جدًا اليوم."
  },

  {
    title: "حلم المستقبل",
    text: "我喜欢学习中文。我希望有一天去中国，了解中国文化。",
    translation: "أحب تعلم الصينية. أتمنى أن أذهب إلى الصين يومًا ما وأتعرف على الثقافة الصينية."
  }
];


/* =========================================================
   FIND WORD
   ========================================================= */

function findWord(hanzi) {

  for (const level of Object.keys(hskData)) {

    const found = hskData[level].find(word => word[0] === hanzi);

    if (found) {
      return {
        hanzi: found[0],
        pinyin: found[1],
        meaning: found[2],
        hsk: Number(level)
      };
    }
  }

  return {
    hanzi,
    pinyin: "",
    meaning: "مفردة صينية",
    hsk: 1
  };
}


/* =========================================================
   AUDIO
   ========================================================= */

function speakChinese(text) {

  if (!("speechSynthesis" in window)) {
    alert("المتصفح لا يدعم النطق الصوتي.");
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "zh-CN";
  utterance.rate = 0.8;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
}


/* =========================================================
   LEVEL SYSTEM
   ========================================================= */

function calculateLevel() {

  return Math.max(1, Math.floor(data.xp / 100) + 1);

}

function xpToNextLevel() {

  const level = calculateLevel();

  return level * 100;

}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak() {

  const today = todayKey();

  if (!data.lastStudyDate) {
    data.streak = 0;
    return;
  }

  if (data.lastStudyDate === today) {
    return;
  }

  const last = new Date(data.lastStudyDate);
  const current = new Date(today);

  const difference =
    Math.floor(
      (current - last) / (1000 * 60 * 60 * 24)
    );

  if (difference > 1) {
    data.streak = 0;
  }

  saveData();
}


function recordStudy() {

  const today = todayKey();

  if (data.lastStudyDate === today) {
    return;
  }

  if (!data.lastStudyDate) {
    data.streak = 1;
  } else {

    const last = new Date(data.lastStudyDate);
    const current = new Date(today);

    const difference =
      Math.floor(
        (current - last) / (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {
      data.streak += 1;
    } else {
      data.streak = 1;
    }
  }

  data.lastStudyDate = today;

  saveData();
}


/* =========================================================
   XP
   ========================================================= */

function addXP(amount) {

  data.xp += amount;

  recordStudy();

  saveData();

  updateStats();
}


/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

  const level = calculateLevel();

  if ($("xpValue")) $("xpValue").textContent = data.xp;
  if ($("streakValue")) $("streakValue").textContent = data.streak;
  if ($("levelValue")) $("levelValue").textContent = level;

  if ($("profileLevel")) {
    $("profileLevel").textContent = level;
  }

  if ($("profileXP")) {
    $("profileXP").textContent = data.xp;
  }

  if ($("completedLessons")) {
    $("completedLessons").textContent =
      data.completedLessons.length;
  }

  if ($("profileStreak")) {
    $("profileStreak").textContent =
      data.streak;
  }
}


/* =========================================================
   HOME
   ========================================================= */

function updateHome() {

  updateStats();

  const completedToday =
    data.lastStudyDate === todayKey();

  if ($("dailyMotivation")) {
    $("dailyMotivation").textContent =
      randomQuote();
  }

  if ($("goalProgress")) {

    const percent =
      completedToday ? 100 : 0;

    $("goalProgress").textContent =
      `${percent}%`;

    const circle =
      $("goalProgress").parentElement;

    circle.style.background =
      `conic-gradient(
        var(--red) ${percent * 3.6}deg,
        var(--gray-2) ${percent * 3.6}deg
      )`;
  }

  if ($("goalText")) {

    $("goalText").textContent =
      completedToday
        ? "أحسنت! حققت هدف اليوم 🎉"
        : "أكمل درسًا واحدًا اليوم";
  }

  renderHomeLessons();
}


/* =========================================================
   LESSON CARDS
   ========================================================= */

function lessonCardHTML(lesson) {

  const completed =
    data.completedLessons.includes(lesson.id);

  return `
    <div
      class="lesson-card"
      onclick="openLesson(${lesson.id})">

      <div class="lesson-icon">
        ${lesson.icon}
      </div>

      <div class="lesson-info">

        <h3>
          ${escapeHTML(lesson.title)}
        </h3>

        <p>
          HSK ${lesson.hsk} •
          ${lesson.words.length} كلمات
        </p>

      </div>

      <div class="lesson-status">
        ${completed ? "✅" : "›"}
      </div>

    </div>
  `;
}


function renderHomeLessons() {

  const container = $("lessonList");

  if (!container) return;

  const nextLessons =
    lessons.slice(0, 4);

  container.innerHTML =
    nextLessons.map(lessonCardHTML).join("");
}


function renderLessons() {

  const container = $("allLessons");

  if (!container) return;

  container.innerHTML =
    lessons.map(lessonCardHTML).join("");
}


/* =========================================================
   LESSON PAGE
   ========================================================= */

let currentLesson = null;
let currentQuiz = [];
let currentQuizIndex = 0;
let currentQuizScore = 0;


function openLesson(id) {

  currentLesson =
    lessons.find(l => l.id === id);

  if (!currentLesson) return;

  currentQuiz = [];
  currentQuizIndex = 0;
  currentQuizScore = 0;

  showPage("lessonPage");

  renderLesson();

}


function renderLesson() {

  const container = $("lessonContent");

  if (!container || !currentLesson) return;

  const words =
    currentLesson.words.map(findWord);

  container.innerHTML = `

    <div class="lesson-title-card">

      <small>
        HSK ${currentLesson.hsk}
      </small>

      <h1>
        ${escapeHTML(currentLesson.title)}
      </h1>

      <p>
        ${escapeHTML(currentLesson.description)}
      </p>

    </div>

    <div class="vocab-grid">

      ${words.map(word => `

        <div class="vocab-card">

          <div class="hanzi">
            ${escapeHTML(word.hanzi)}
          </div>

          <div class="pinyin">
            ${escapeHTML(word.pinyin)}
          </div>

          <div class="meaning">
            ${escapeHTML(word.meaning)}
          </div>

          <div class="vocab-actions">

            <button
              class="audio-btn"
              onclick="speakChinese('${word.hanzi}')">
              🔊 نطق
            </button>

            <button
              class="favorite-btn ${
                data.favorites.includes(word.hanzi)
                  ? "active"
                  : ""
              }"
              onclick="toggleFavorite('${word.hanzi}')">

              ${
                data.favorites.includes(word.hanzi)
                  ? "❤️"
                  : "♡"
              }

            </button>

          </div>

        </div>

      `).join("")}

    </div>

    <div class="quiz-box">

      <h2>
        📝 اختبار الدرس
      </h2>

      <p style="margin:10px 0;color:var(--muted);">
        يجب إكمال الاختبار لإنهاء الدرس.
      </p>

      <button
        class="primary-btn"
        onclick="startLessonQuiz()">

        ابدأ الاختبار

      </button>

    </div>
  `;
}


/* =========================================================
   QUIZ GENERATION
   ========================================================= */

function shuffle(array) {

  return [...array].sort(
    () => Math.random() - 0.5
  );

}


function generateQuiz(lesson) {

  const words =
    lesson.words.map(findWord);

  const questions = [];

  words.forEach((word, index) => {

    const mode = index % 4;

    let question;

    if (mode === 0) {

      const options =
        shuffle([
          word.meaning,
          ...shuffle(
            words
              .filter(w => w.hanzi !== word.hanzi)
              .map(w => w.meaning)
          ).slice(0, 3)
        ]);

      question = {
        type: "mc",
        prompt: `ما معنى: ${word.hanzi}؟`,
        answer: word.meaning,
        options
      };

    } else if (mode === 1) {

      const options =
        shuffle([
          word.hanzi,
          ...shuffle(
            words
              .filter(w => w.hanzi !== word.hanzi)
              .map(w => w.hanzi)
          ).slice(0, 3)
        ]);

      question = {
        type: "mc",
        prompt: `ما الكلمة الصينية التي تعني "${word.meaning}"؟`,
        answer: word.hanzi,
        options
      };

    } else if (mode === 2) {

      question = {
        type: "input",
        prompt: `اكتب الـ Pinyin للكلمة: ${word.hanzi}`,
        answer: word.pinyin
      };

    } else {

      question = {
        type: "listen",
        prompt: `استمع للكلمة واختر معناها.`,
        answer: word.meaning,
        audio: word.hanzi,
        options: shuffle([
          word.meaning,
          ...shuffle(
            words
              .filter(w => w.hanzi !== word.hanzi)
              .map(w => w.meaning)
          ).slice(0, 3)
        ])
      };
    }

    questions.push(question);

  });

  return shuffle(questions);
}


/* =========================================================
   START QUIZ
   ========================================================= */

function startLessonQuiz() {

  if (!currentLesson) return;

  currentQuiz =
    generateQuiz(currentLesson);

  currentQuizIndex = 0;
  currentQuizScore = 0;

  renderQuizQuestion();

}


function renderQuizQuestion() {

  const container = $("lessonContent");

  if (!container) return;

  const question =
    currentQuiz[currentQuizIndex];

  if (!question) {
    finishLessonQuiz();
    return;
  }

  let questionHTML = "";

  if (question.type === "input") {

    questionHTML = `

      <input
        id="quizInput"
        class="quiz-input"
        placeholder="اكتب الإجابة هنا"
        autocomplete="off">

      <button
        class="primary-btn"
        onclick="submitInputAnswer()">

        تحقق

      </button>

    `;

  } else {

    questionHTML = `

      <div class="quiz-options">

        ${
          question.options.map(option => `

            <button
              class="quiz-option"
              onclick="answerQuiz('${escapeHTML(option)}')">

              ${escapeHTML(option)}

            </button>

          `).join("")
        }

      </div>

    `;

    if (question.type === "listen") {

      questionHTML = `

        <button
          class="primary-btn"
          style="margin-bottom:15px;"
          onclick="speakChinese('${question.audio}')">

          🔊 استمع

        </button>

      ` + questionHTML;
    }
  }

  container.innerHTML = `

    <div class="quiz-box">

      <div class="quiz-progress">

        السؤال ${currentQuizIndex + 1}
        من
        ${currentQuiz.length}

      </div>

      <div class="quiz-question">

        ${escapeHTML(question.prompt)}

      </div>

      ${questionHTML}

    </div>
  `;
}


function answerQuiz(answer) {

  const question =
    currentQuiz[currentQuizIndex];

  const correct =
    answer.trim().toLowerCase() ===
    question.answer.trim().toLowerCase();

  if (correct) {

    currentQuizScore++;

    addXP(10);

    showTemporaryMessage("إجابة صحيحة! 🎉");

  } else {

    const word =
      currentLesson.words[currentQuizIndex];

    addToReview(word);

    showTemporaryMessage(
      `قريب! الإجابة الصحيحة: ${question.answer}`
    );
  }

  setTimeout(() => {

    currentQuizIndex++;

    renderQuizQuestion();

  }, 700);
}


function submitInputAnswer() {

  const input = $("quizInput");

  if (!input) return;

  answerQuiz(input.value);

}


/* =========================================================
   FINISH LESSON
   ========================================================= */

function finishLessonQuiz() {

  const passed =
    currentQuizScore >=
    Math.ceil(currentQuiz.length * 0.7);

  const container = $("lessonContent");

  if (!container) return;

  if (passed) {

    if (
      !data.completedLessons.includes(
        currentLesson.id
      )
    ) {

      data.completedLessons.push(
        currentLesson.id
      );

      addXP(50);

      saveData();
    }

    container.innerHTML = `

      <div class="quiz-box">

        <div style="font-size:50px;text-align:center;">
          🎉
        </div>

        <h2 style="text-align:center;margin:10px 0;">
          أحسنت!
        </h2>

        <p style="text-align:center;color:var(--muted);">
          نجحت في اختبار الدرس.
        </p>

        <p style="text-align:center;margin:15px;">
          نتيجتك:
          <strong>
            ${currentQuizScore}/${currentQuiz.length}
          </strong>
        </p>

        <button
          class="primary-btn"
          onclick="showPage('lessonsPage')">

          العودة للدروس

        </button>

      </div>
    `;

  } else {

    container.innerHTML = `

      <div class="quiz-box">

        <div style="font-size:50px;text-align:center;">
          💪
        </div>

        <h2 style="text-align:center;margin:10px 0;">
          لا بأس!
        </h2>

        <p style="text-align:center;color:var(--muted);">
          راجع الكلمات وحاول مرة أخرى.
        </p>

        <p style="text-align:center;margin:15px;">
          نتيجتك:
          <strong>
            ${currentQuizScore}/${currentQuiz.length}
          </strong>
        </p>

        <button
          class="primary-btn"
          onclick="startLessonQuiz()">

          حاول مرة أخرى

        </button>

      </div>
    `;
  }

  updateStats();
  renderLessons();
  renderHomeLessons();
}


/* =========================================================
   REVIEW
   ========================================================= */

function addToReview(hanzi) {

  if (!hanzi) return;

  if (!data.review.includes(hanzi)) {
    data.review.push(hanzi);
    saveData();
  }

}


function renderReview() {

  const container = $("reviewList");

  if (!container) return;

  if (!data.review.length) {

    container.innerHTML = `

      <div class="quiz-box" style="text-align:center;">

        <div style="font-size:45px;">
          🎉
        </div>

        <h2 style="margin:10px 0;">
          لا توجد كلمات للمراجعة
        </h2>

        <p style="color:var(--muted);">
          عندما تخطئ في اختبار، ستظهر الكلمة هنا.
        </p>

      </div>
    `;

    return;
  }

  container.innerHTML =
    data.review.map(hanzi => {

      const word = findWord(hanzi);

      return `

        <div class="review-card">

          <div class="hanzi">
            ${word.hanzi}
          </div>

          <div class="pinyin">
            ${word.pinyin}
          </div>

          <div class="meaning">
            ${word.meaning}
          </div>

          <div class="review-buttons">

            <button onclick="reviewAnswer('${hanzi}', 'again')">
              Again
            </button>

            <button onclick="reviewAnswer('${hanzi}', 'hard')">
              Hard
            </button>

            <button onclick="reviewAnswer('${hanzi}', 'good')">
              Good
            </button>

            <button onclick="reviewAnswer('${hanzi}', 'easy')">
              Easy
            </button>

          </div>

        </div>

      `;

    }).join("");
}


function reviewAnswer(hanzi, level) {

  if (level === "easy") {

    data.review =
      data.review.filter(
        word => word !== hanzi
      );

    addXP(5);

  } else if (level === "good") {

    addXP(3);

  } else if (level === "hard") {

    addXP(1);

  }

  saveData();

  renderReview();

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(hanzi) {

  if (data.favorites.includes(hanzi)) {

    data.favorites =
      data.favorites.filter(
        word => word !== hanzi
      );

  } else {

    data.favorites.push(hanzi);

    addXP(2);
  }

  saveData();

  renderLesson();
}


/* =========================================================
   HSK PAGE
   ========================================================= */

function renderHSK() {

  const container = $("hskContent");

  if (!container) return;

  container.innerHTML =
    [1, 2, 3, 4, 5, 6].map(level => {

      const words =
        hskData[level].length;

      const lessonsCount =
        lessons.filter(
          lesson => lesson.hsk === level
        ).length;

      return `

        <div class="hsk-card">

          <div class="hsk-number">
            ${level}
          </div>

          <div class="hsk-info">

            <h3>
              HSK ${level}
            </h3>

            <p>
              ${words} مفردة •
              ${lessonsCount} دروس
            </p>

          </div>

          <button
            onclick="startHSKTest(${level})">

            اختبار

          </button>

        </div>
      `;

    }).join("");
}


/* =========================================================
   HSK TEST
   ========================================================= */

let currentTestQuestions = [];
let currentTestIndex = 0;
let currentTestScore = 0;


function startHSKTest(level) {

  const words =
    hskData[level].map(w => ({
      hanzi: w[0],
      pinyin: w[1],
      meaning: w[2]
    }));

  currentTestQuestions =
    shuffle(words)
      .slice(0, Math.min(10, words.length))
      .map(word => {

        const options =
          shuffle([
            word.meaning,
            ...shuffle(
              words
                .filter(w => w.hanzi !== word.hanzi)
                .map(w => w.meaning)
            ).slice(0, 3)
          ]);

        return {
          level,
          word,
          options
        };
      });

  currentTestIndex = 0;
  currentTestScore = 0;

  showPage("testsPage");

  renderTestQuestion();

}


function renderTestQuestion() {

  const container = $("testsContent");

  if (!container) return;

  const question =
    currentTestQuestions[currentTestIndex];

  if (!question) {

    finishTest();

    return;
  }

  container.innerHTML = `

    <div class="quiz-box">

      <div class="quiz-progress">

        السؤال ${currentTestIndex + 1}
        من
        ${currentTestQuestions.length}

      </div>

      <div class="quiz-question">

        ما معنى:
        <strong>
          ${question.word.hanzi}
        </strong>

      </div>

      <div style="text-align:center;margin-bottom:15px;">

        <button
          class="audio-btn"
          onclick="speakChinese('${question.word.hanzi}')">

          🔊 استمع

        </button>

      </div>

      <div class="quiz-options">

        ${
          question.options.map(option => `

            <button
              class="quiz-option"
              onclick="answerTest('${escapeHTML(option)}')">

              ${escapeHTML(option)}

            </button>

          `).join("")
        }

      </div>

    </div>
  `;
}


function answerTest(answer) {

  const question =
    currentTestQuestions[currentTestIndex];

  if (
    answer ===
    question.word.meaning
  ) {

    currentTestScore++;

    addXP(10);

    showTemporaryMessage("صحيح! 🎉");

  } else {

    addToReview(question.word.hanzi);

    showTemporaryMessage(
      `الإجابة الصحيحة: ${question.word.meaning}`
    );
  }

  setTimeout(() => {

    currentTestIndex++;

    renderTestQuestion();

  }, 700);
}


function finishTest() {

  const total =
    currentTestQuestions.length;

  const percentage =
    Math.round(
      (currentTestScore / total) * 100
    );

  data.testResults.push({
    date: todayKey(),
    score: currentTestScore,
    total,
    percentage
  });

  saveData();

  const container = $("testsContent");

  if (!container) return;

  container.innerHTML = `

    <div class="quiz-box" style="text-align:center;">

      <div style="font-size:55px;">
        ${percentage >= 70 ? "🏆" : "💪"}
      </div>

      <h2 style="margin:10px 0;">
        ${percentage >= 70
          ? "اختبار رائع!"
          : "استمر في التدريب!"}
      </h2>

      <p style="color:var(--muted);">
        نتيجتك
      </p>

      <div style="font-size:32px;margin:15px;">
        ${currentTestScore}/${total}
      </div>

      <p>
        ${percentage}%
      </p>

      <button
        class="primary-btn"
        onclick="renderTests()">

        اختبارات أخرى

      </button>

    </div>
  `;
}


/* =========================================================
   TESTS PAGE
   ========================================================= */

function renderTests() {

  const container = $("testsContent");

  if (!container) return;

  container.innerHTML = `

    <div class="test-card">

      <h3>
        🧠 اختبار مختلط
      </h3>

      <p>
        اختبار سريع من المفردات الصينية المختلفة.
      </p>

      <button
        onclick="startMixedTest()">

        ابدأ الاختبار

      </button>

    </div>


    <div class="test-card">

      <h3>
        🇨🇳 اختبار HSK
      </h3>

      <p>
        اختر مستوى HSK واختبر مفرداتك.
      </p>

      <button
        onclick="showPage('hskPage')">

        اختر المستوى

      </button>

    </div>


    <div class="test-card">

      <h3>
        🔄 مراجعة الأخطاء
      </h3>

      <p>
        اختبر الكلمات التي أخطأت فيها سابقًا.
      </p>

      <button
        onclick="showPage('reviewPage')">

        ابدأ المراجعة

      </button>

    </div>

  `;
}


function startMixedTest() {

  const allWords =
    Object.values(hskData).flat();

  const selected =
    shuffle(allWords)
      .slice(0, 10);

  currentTestQuestions =
    selected.map(w => {

      const word = {
        hanzi: w[0],
        pinyin: w[1],
        meaning: w[2]
      };

      return {
        word,
        options: shuffle([
          word.meaning,
          ...shuffle(
            allWords
              .filter(x => x[0] !== word.hanzi)
              .map(x => x[2])
          ).slice(0, 3)
        ])
      };
    });

  currentTestIndex = 0;
  currentTestScore = 0;

  renderTestQuestion();
}


/* =========================================================
   STORIES
   ========================================================= */

function renderStories() {

  const container =
    $("storiesList");

  if (!container) return;

  container.innerHTML =
    stories.map(story => `

      <div class="story-card">

        <h3>
          ${escapeHTML(story.title)}
        </h3>

        <div class="story-text">
          ${escapeHTML(story.text)}
        </div>

        <div class="story-translation">
          ${escapeHTML(story.translation)}
        </div>

        <button
          class="audio-btn"
          style="margin-top:12px;"
          onclick="speakChinese('${story.text}')">

          🔊 استمع

        </button>

      </div>

    `).join("");
}


/* =========================================================
   CHAT
   ========================================================= */

function sendMessage() {

  const input = $("chatInput");
  const box = $("chatBox");

  if (!input || !box) return;

  const message =
    input.value.trim();

  if (!message) return;

  const userMessage =
    document.createElement("div");

  userMessage.className =
    "user-message";

  userMessage.textContent =
    message;

  box.appendChild(userMessage);

  input.value = "";

  setTimeout(() => {

    const bot =
      document.createElement("div");

    bot.className =
      "bot-message";

    bot.innerHTML =
      "很好！👏<br>继续练习中文吧！";

    box.appendChild(bot);

    box.scrollTop =
      box.scrollHeight;

  }, 500);
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function hideAllPages() {

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });

}


function showPage(pageId) {

  hideAllPages();

  const page = $(pageId);

  if (!page) return;

  page.classList.add("active");

  document
    .querySelectorAll(".nav-btn")
    .forEach(btn => {
      btn.classList.remove("active");
    });

  const navMap = {
    homePage: 0,
    lessonsPage: 1,
    reviewPage: 2,
    testsPage: 3,
    profilePage: 4
  };

  if (navMap[pageId] !== undefined) {

    const buttons =
      document.querySelectorAll(".nav-btn");

    if (buttons[navMap[pageId]]) {
      buttons[navMap[pageId]]
        .classList.add("active");
    }
  }

  if (pageId === "homePage") {
    updateHome();
  }

  if (pageId === "lessonsPage") {
    renderLessons();
  }

  if (pageId === "reviewPage") {
    renderReview();
  }

  if (pageId === "storiesPage") {
    renderStories();
  }

  if (pageId === "hskPage") {
    renderHSK();
  }

  if (pageId === "testsPage") {
    renderTests();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   TEMPORARY MESSAGE
   ========================================================= */

function showTemporaryMessage(message) {

  const old =
    document.querySelector(".temporary-message");

  if (old) old.remove();

  const div =
    document.createElement("div");

  div.className =
    "temporary-message";

  div.textContent =
    message;

  Object.assign(div.style, {
    position: "fixed",
    top: "85px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "var(--card)",
    color: "var(--text)",
    border: "1px solid var(--border)",
    padding: "12px 18px",
    borderRadius: "14px",
    boxShadow: "var(--shadow)",
    zIndex: "9999",
    fontWeight: "bold"
  });

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 650);
}


/* =========================================================
   DARK MODE
   ========================================================= */

function setupTheme() {

  if (data.darkMode) {
    document.body.classList.add("dark");
  }

  const button = $("themeBtn");

  if (!button) return;

  button.textContent =
    data.darkMode ? "☀️" : "🌙";

  button.onclick = () => {

    data.darkMode =
      !data.darkMode;

    document.body.classList.toggle(
      "dark",
      data.darkMode
    );

    button.textContent =
      data.darkMode ? "☀️" : "🌙";

    saveData();
  };
}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

function setupLanguage() {

  const button = $("langBtn");

  if (!button) return;

  button.onclick = () => {

    if (data.language === "ar") {

      data.language = "en";

      button.textContent = "AR";

      alert(
        "English mode is being expanded. Chinese Buddy will continue using the current learning content."
      );

    } else {

      data.language = "ar";

      button.textContent = "EN";

    }

    saveData();
  };

  button.textContent =
    data.language === "ar"
      ? "EN"
      : "AR";
}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function setupNotifications() {

  const button =
    $("notificationBtn");

  if (!button) return;

  button.onclick = async () => {

    if (!("Notification" in window)) {

      alert(
        "المتصفح لا يدعم إشعارات الويب."
      );

      return;
    }

    try {

      const permission =
        await Notification.requestPermission();

      if (permission === "granted") {

        data.notificationsAsked = true;

        saveData();

        new Notification(
          "Chinese Buddy 🇨🇳",
          {
            body:
              "حان وقت خطوة جديدة في رحلتك الصينية! 📚"
          }
        );

        button.textContent =
          "✅ الإشعارات مفعلة";

      } else {

        button.textContent =
          "🔔 تفعيل الإشعارات";

      }

    } catch (error) {

      console.log(error);

      alert(
        "لم نتمكن من تفعيل الإشعارات من هذا المتصفح."
      );
    }
  };

  if (
    "Notification" in window &&
    Notification.permission === "granted"
  ) {

    button.textContent =
      "✅ الإشعارات مفعلة";
  }
}


/* =========================================================
   LOGIN SYSTEM
   ========================================================= */

function createLoginScreen() {

  if (data.loggedIn) return;

  const existing =
    document.querySelector(".login-overlay");

  if (existing) return;

  const overlay =
    document.createElement("div");

  overlay.className =
    "login-overlay";

  overlay.innerHTML = `

    <div class="login-box">

      <div class="login-logo">
        中
      </div>

      <h1>
        Chinese Buddy
      </h1>

      <p>
        ابدأ رحلتك في تعلم اللغة الصينية 🇨🇳
      </p>

      <input
        id="loginName"
        type="text"
        placeholder="اسمك"
        autocomplete="name">

      <input
        id="loginPassword"
        type="password"
        placeholder="كلمة المرور"
        autocomplete="current-password">

      <button
        id="loginButton">

        دخول

      </button>

      <button
        id="guestButton"
        class="login-switch">

        المتابعة كزائر

      </button>

    </div>

  `;

  document.body.appendChild(overlay);

  $("loginButton").onclick =
    handleLogin;

  $("guestButton").onclick =
    () => {

      data.loggedIn = true;
      data.username = "Chinese Learner";

      saveData();

      overlay.remove();

      startApp();

    };
}


function handleLogin() {

  const name =
    $("loginName").value.trim();

  const password =
    $("loginPassword").value.trim();

  if (!name || !password) {

    alert(
      "اكتبي الاسم وكلمة المرور أولًا."
    );

    return;
  }

  /*
    هذا تسجيل دخول محلي فقط.
    لا يتم إرسال البيانات لأي خادم.
  */

  data.username = name;
  data.loggedIn = true;

  saveData();

  const overlay =
    document.querySelector(".login-overlay");

  if (overlay) overlay.remove();

  startApp();
}


/* =========================================================
   PROFILE
   ========================================================= */

function updateProfile() {

  if ($("profileName")) {

    $("profileName").textContent =
      data.username ||
      "Chinese Learner";
  }

  updateStats();
}


/* =========================================================
   INITIALIZE
   ========================================================= */

function startApp() {

  const app =
    $("app");

  if (!app) {

    console.error(
      "Chinese Buddy: #app not found."
    );

    return;
  }

  app.classList.remove("hidden");
  app.style.display = "block";

  updateStreak();

  setupTheme();
  setupLanguage();
  setupNotifications();

  renderLessons();
  renderReview();
  renderStories();
  renderHSK();
  renderTests();

  updateProfile();
  updateHome();

  showPage("homePage");
}


/* =========================================================
   LOADING
   ========================================================= */

function startLoading() {

  const screen =
    $("loadingScreen");

  const quote =
    $("loadingQuote");

  if (quote) {
    quote.textContent =
      randomQuote();
  }

  setTimeout(() => {

    if (screen) {
      screen.style.opacity = "0";
      screen.style.transition =
        "opacity .4s ease";
    }

    setTimeout(() => {

      if (screen) {
        screen.style.display = "none";
      }

      if (data.loggedIn) {

        startApp();

      } else {

        createLoginScreen();

      }

    }, 450);

  }, 1200);
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    try {

      startLoading();

    } catch (error) {

      console.error(
        "Chinese Buddy error:",
        error
      );

      /*
        في حالة وجود خطأ، نحاول إظهار التطبيق
        بدل الصفحة البيضاء.
      */

      const screen =
        $("loadingScreen");

      if (screen) {
        screen.style.display = "none";
      }

      if (data.loggedIn) {
        startApp();
      } else {
        createLoginScreen();
      }
    }

  }
);
