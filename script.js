/* =========================================================
   CHINESE BUDDY
   HSK + VOCABULARY + TESTS + LOGIN + NOTIFICATIONS
   ========================================================= */

const STORAGE_KEY = "ChineseBuddyData";

/* =========================
   MOTIVATION
========================= */

const quotes = [
  "خذ خطوة صغيرة كل يوم لتقترب من حلمك ❤️",
  "لا تجعل الخوف من الخطأ يهدم حلمك كاملًا 🌱",
  "خطأ واحد اليوم يعني أنك تعلمت شيئًا جديدًا ✨",
  "أنت لا تحتاج أن تكون مثاليًا، فقط استمر 💪",
  "كل كلمة صينية تحفظها تقربك من هدفك 🎯",
  "الاستمرارية أهم من السرعة 🚀",
  "学习中文，加油！ 🇨🇳",
  "مستقبلك يستحق كل خطوة تقوم بها اليوم ❤️"
];

/* =========================
   STATE
========================= */

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  loggedIn: false,
  username: "",
  xp: 0,
  streak: 0,
  lastStudyDate: "",
  completedLessons: [],
  review: [],
  favorites: [],
  testResults: [],
  notifications: false,
  darkMode: false
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLevel() {
  return Math.floor(state.xp / 500) + 1;
}

function addXP(amount) {
  state.xp += amount;
  saveState();
  updateStats();
}

/* =========================
   HSK VOCABULARY
========================= */

const hskVocabulary = {

  1: [
    ["你好","nǐ hǎo","مرحبًا"],
    ["谢谢","xièxie","شكرًا"],
    ["再见","zàijiàn","إلى اللقاء"],
    ["早上好","zǎoshang hǎo","صباح الخير"],
    ["晚上好","wǎnshang hǎo","مساء الخير"],
    ["对不起","duìbuqǐ","آسف"],
    ["没关系","méi guānxi","لا بأس"],
    ["请","qǐng","من فضلك"],
    ["我","wǒ","أنا"],
    ["你","nǐ","أنت"],
    ["他","tā","هو"],
    ["她","tā","هي"],
    ["我们","wǒmen","نحن"],
    ["他们","tāmen","هم"],
    ["什么","shénme","ماذا"],
    ["谁","shéi","من"],
    ["哪儿","nǎr","أين"],
    ["这","zhè","هذا"],
    ["那","nà","ذلك"],
    ["是","shì","يكون / نعم"],
    ["不","bù","لا"],
    ["有","yǒu","لديه / يوجد"],
    ["没有","méiyǒu","لا يوجد"],
    ["喜欢","xǐhuan","يحب"],
    ["爱","ài","يحب"],
    ["吃","chī","يأكل"],
    ["喝","hē","يشرب"],
    ["水","shuǐ","ماء"],
    ["茶","chá","شاي"],
    ["咖啡","kāfēi","قهوة"],
    ["饭","fàn","طعام"],
    ["家","jiā","بيت / عائلة"],
    ["学校","xuéxiào","مدرسة"],
    ["学生","xuésheng","طالب"],
    ["老师","lǎoshī","معلم"],
    ["朋友","péngyou","صديق"],
    ["中文","Zhōngwén","اللغة الصينية"],
    ["学习","xuéxí","يتعلم"],
    ["看","kàn","يشاهد / يقرأ"],
    ["听","tīng","يستمع"],
    ["说","shuō","يتحدث"],
    ["去","qù","يذهب"],
    ["来","lái","يأتي"],
    ["今天","jīntiān","اليوم"],
    ["明天","míngtiān","غدًا"],
    ["昨天","zuótiān","أمس"],
    ["现在","xiànzài","الآن"],
    ["很","hěn","جدًا"],
    ["也","yě","أيضًا"],
    ["都","dōu","كل / جميع"],
    ["一","yī","واحد"],
    ["二","èr","اثنان"],
    ["三","sān","ثلاثة"],
    ["四","sì","أربعة"],
    ["五","wǔ","خمسة"],
    ["六","liù","ستة"],
    ["七","qī","سبعة"],
    ["八","bā","ثمانية"],
    ["九","jiǔ","تسعة"],
    ["十","shí","عشرة"]
  ],

  2: [
    ["觉得","juéde","يعتقد / يشعر"],
    ["知道","zhīdao","يعرف"],
    ["认识","rènshi","يعرف شخصًا"],
    ["希望","xīwàng","يأمل"],
    ["帮助","bāngzhù","يساعد"],
    ["准备","zhǔnbèi","يستعد"],
    ["开始","kāishǐ","يبدأ"],
    ["结束","jiéshù","ينتهي"],
    ["工作","gōngzuò","عمل"],
    ["公司","gōngsī","شركة"],
    ["医生","yīshēng","طبيب"],
    ["医院","yīyuàn","مستشفى"],
    ["商店","shāngdiàn","متجر"],
    ["饭店","fàndiàn","مطعم"],
    ["水果","shuǐguǒ","فاكهة"],
    ["苹果","píngguǒ","تفاحة"],
    ["香蕉","xiāngjiāo","موز"],
    ["鸡蛋","jīdàn","بيض"],
    ["牛奶","niúnǎi","حليب"],
    ["面包","miànbāo","خبز"],
    ["衣服","yīfu","ملابس"],
    ["颜色","yánsè","لون"],
    ["红","hóng","أحمر"],
    ["白","bái","أبيض"],
    ["黑","hēi","أسود"],
    ["大","dà","كبير"],
    ["小","xiǎo","صغير"],
    ["多","duō","كثير"],
    ["少","shǎo","قليل"],
    ["快","kuài","سريع"],
    ["慢","màn","بطيء"],
    ["漂亮","piàoliang","جميل"],
    ["高兴","gāoxìng","سعيد"],
    ["累","lèi","متعب"],
    ["忙","máng","مشغول"],
    ["时间","shíjiān","وقت"],
    ["小时","xiǎoshí","ساعة"],
    ["分钟","fēnzhōng","دقيقة"],
    ["星期","xīngqī","أسبوع"],
    ["周末","zhōumò","عطلة نهاية الأسبوع"],
    ["上午","shàngwǔ","الصباح"],
    ["下午","xiàwǔ","بعد الظهر"],
    ["晚上","wǎnshang","المساء"],
    ["一起","yìqǐ","معًا"],
    ["因为","yīnwèi","لأن"],
    ["所以","suǒyǐ","لذلك"],
    ["但是","dànshì","لكن"]
  ],

  3: [
    ["旅行","lǚxíng","سفر"],
    ["旅游","lǚyóu","سياحة"],
    ["城市","chéngshì","مدينة"],
    ["国家","guójiā","دولة"],
    ["中国","Zhōngguó","الصين"],
    ["北京","Běijīng","بكين"],
    ["上海","Shànghǎi","شنغهاي"],
    ["机场","jīchǎng","مطار"],
    ["火车站","huǒchēzhàn","محطة قطار"],
    ["公共汽车","gōnggòng qìchē","حافلة"],
    ["地铁","dìtiě","مترو"],
    ["出租车","chūzūchē","تاكسي"],
    ["地图","dìtú","خريطة"],
    ["天气","tiānqì","طقس"],
    ["晴","qíng","مشمس"],
    ["雨","yǔ","مطر"],
    ["雪","xuě","ثلج"],
    ["冷","lěng","بارد"],
    ["热","rè","حار"],
    ["春天","chūntiān","الربيع"],
    ["夏天","xiàtiān","الصيف"],
    ["秋天","qiūtiān","الخريف"],
    ["冬天","dōngtiān","الشتاء"],
    ["问题","wèntí","سؤال / مشكلة"],
    ["答案","dá'àn","إجابة"],
    ["重要","zhòngyào","مهم"],
    ["简单","jiǎndān","بسيط"],
    ["容易","róngyì","سهل"],
    ["困难","kùnnan","صعب"],
    ["特别","tèbié","خاص"],
    ["已经","yǐjīng","بالفعل"],
    ["正在","zhèngzài","في أثناء"],
    ["可能","kěnéng","ربما"],
    ["当然","dāngrán","بالطبع"],
    ["应该","yīnggāi","ينبغي"],
    ["需要","xūyào","يحتاج"],
    ["决定","juédìng","يقرر"],
    ["了解","liǎojiě","يفهم"],
    ["发现","fāxiàn","يكتشف"],
    ["练习","liànxí","يتدرب"],
    ["提高","tígāo","يحسن"]
  ],

  4: [
    ["经验","jīngyàn","خبرة"],
    ["社会","shèhuì","مجتمع"],
    ["经济","jīngjì","اقتصاد"],
    ["文化","wénhuà","ثقافة"],
    ["教育","jiàoyù","تعليم"],
    ["环境","huánjìng","بيئة"],
    ["发展","fāzhǎn","تطور"],
    ["机会","jīhuì","فرصة"],
    ["关系","guānxi","علاقة"],
    ["责任","zérèn","مسؤولية"],
    ["成功","chénggōng","نجاح"],
    ["失败","shībài","فشل"],
    ["努力","nǔlì","يجتهد"],
    ["选择","xuǎnzé","اختيار"],
    ["影响","yǐngxiǎng","تأثير"],
    ["改变","gǎibiàn","يغير"],
    ["解决","jiějué","يحل"],
    ["保护","bǎohù","يحمي"],
    ["参加","cānjiā","يشارك"],
    ["组织","zǔzhī","ينظم / منظمة"],
    ["计划","jìhuà","خطة"],
    ["目标","mùbiāo","هدف"],
    ["未来","wèilái","مستقبل"],
    ["现实","xiànshí","واقع"],
    ["原因","yuányīn","سبب"],
    ["结果","jiéguǒ","نتيجة"],
    ["情况","qíngkuàng","حالة"],
    ["意见","yìjiàn","رأي"],
    ["建议","jiànyì","اقتراح"],
    ["解释","jiěshì","يشرح"],
    ["表达","biǎodá","يعبر"],
    ["讨论","tǎolùn","يناقش"],
    ["接受","jiēshòu","يقبل"],
    ["拒绝","jùjué","يرفض"],
    ["适合","shìhé","يناسب"],
    ["安全","ānquán","آمن"],
    ["健康","jiànkāng","صحة"],
    ["新闻","xīnwén","أخبار"]
  ],

  5: [
    ["国际","guójì","دولي"],
    ["科技","kējì","تكنولوجيا"],
    ["科学","kēxué","علوم"],
    ["技术","jìshù","تقنية"],
    ["人工智能","réngōng zhìnéng","الذكاء الاصطناعي"],
    ["互联网","hùliánwǎng","الإنترنت"],
    ["数据","shùjù","بيانات"],
    ["信息","xìnxī","معلومات"],
    ["研究","yánjiū","بحث"],
    ["资源","zīyuán","موارد"],
    ["商业","shāngyè","أعمال"],
    ["企业","qǐyè","مؤسسة / شركة"],
    ["市场","shìchǎng","سوق"],
    ["消费者","xiāofèizhě","مستهلك"],
    ["产品","chǎnpǐn","منتج"],
    ["服务","fúwù","خدمة"],
    ["价格","jiàgé","سعر"],
    ["质量","zhìliàng","جودة"],
    ["竞争","jìngzhēng","منافسة"],
    ["管理","guǎnlǐ","إدارة"],
    ["领导","lǐngdǎo","قيادة"],
    ["员工","yuángōng","موظف"],
    ["收入","shōurù","دخل"],
    ["投资","tóuzī","استثمار"],
    ["资本","zīběn","رأس مال"],
    ["政策","zhèngcè","سياسة"],
    ["法律","fǎlǜ","قانون"],
    ["权利","quánlì","حقوق"],
    ["公平","gōngpíng","إنصاف"],
    ["趋势","qūshì","اتجاه"],
    ["现代","xiàndài","حديث"],
    ["传统","chuántǒng","تقليدي"],
    ["价值","jiàzhí","قيمة"],
    ["观点","guāndiǎn","وجهة نظر"],
    ["证明","zhèngmíng","يثبت"],
    ["分析","fēnxī","يحلل"],
    ["比较","bǐjiào","يقارن"],
    ["实现","shíxiàn","يحقق"]
  ],

  6: [
    ["哲学","zhéxué","فلسفة"],
    ["政治","zhèngzhì","سياسة"],
    ["历史","lìshǐ","تاريخ"],
    ["文学","wénxué","أدب"],
    ["心理","xīnlǐ","علم النفس"],
    ["现象","xiànxiàng","ظاهرة"],
    ["理论","lǐlùn","نظرية"],
    ["概念","gàiniàn","مفهوم"],
    ["原则","yuánzé","مبدأ"],
    ["本质","běnzhì","جوهر"],
    ["意义","yìyì","معنى / أهمية"],
    ["逻辑","luójí","منطق"],
    ["证据","zhèngjù","دليل"],
    ["结论","jiélùn","استنتاج"],
    ["批评","pīpíng","ينتقد"],
    ["创造","chuàngzào","يخلق"],
    ["创新","chuàngxīn","ابتكار"],
    ["复杂","fùzá","معقد"],
    ["有效","yǒuxiào","فعال"],
    ["明显","míngxiǎn","واضح"],
    ["普遍","pǔbiàn","عام / شائع"],
    ["独立","dúlì","مستقل"],
    ["个人","gèrén","شخصي"],
    ["整体","zhěngtǐ","إجمالي"],
    ["过程","guòchéng","عملية"],
    ["条件","tiáojiàn","شرط"],
    ["挑战","tiǎozhàn","تحدي"],
    ["面对","miànduì","يواجه"],
    ["保持","bǎochí","يحافظ"],
    ["避免","bìmiǎn","يتجنب"],
    ["促进","cùjìn","يعزز"],
    ["导致","dǎozhì","يؤدي إلى"],
    ["强调","qiángdiào","يؤكد"],
    ["考虑","kǎolǜ","يأخذ بعين الاعتبار"],
    ["因此","yīncǐ","لذلك"]
  ]
};

/* =========================
   LESSONS
========================= */

const lessons = [
  {
    id: 1,
    hsk: 1,
    title: "التحية والتعارف",
    description: "أهم العبارات لبدء محادثة",
    words: [
      ["你好","nǐ hǎo","مرحبًا"],
      ["谢谢","xièxie","شكرًا"],
      ["再见","zàijiàn","إلى اللقاء"],
      ["早上好","zǎoshang hǎo","صباح الخير"],
      ["对不起","duìbuqǐ","آسف"],
      ["请","qǐng","من فضلك"]
    ]
  },
  {
    id: 2,
    hsk: 1,
    title: "أنا وأنت",
    description: "الضمائر الأساسية",
    words: [
      ["我","wǒ","أنا"],
      ["你","nǐ","أنت"],
      ["他","tā","هو"],
      ["她","tā","هي"],
      ["我们","wǒmen","نحن"],
      ["他们","tāmen","هم"]
    ]
  },
  {
    id: 3,
    hsk: 1,
    title: "الأكل والشرب",
    description: "كلمات الطعام والشراب",
    words: [
      ["吃","chī","يأكل"],
      ["喝","hē","يشرب"],
      ["水","shuǐ","ماء"],
      ["茶","chá","شاي"],
      ["咖啡","kāfēi","قهوة"],
      ["饭","fàn","طعام"]
    ]
  },
  {
    id: 4,
    hsk: 1,
    title: "المدرسة والدراسة",
    description: "مفردات الدراسة",
    words: [
      ["学校","xuéxiào","مدرسة"],
      ["学生","xuésheng","طالب"],
      ["老师","lǎoshī","معلم"],
      ["学习","xuéxí","يتعلم"],
      ["中文","Zhōngwén","الصينية"],
      ["朋友","péngyou","صديق"]
    ]
  },
  {
    id: 5,
    hsk: 1,
    title: "الأرقام",
    description: "الأرقام من 1 إلى 10",
    words: [
      ["一","yī","واحد"],
      ["二","èr","اثنان"],
      ["三","sān","ثلاثة"],
      ["四","sì","أربعة"],
      ["五","wǔ","خمسة"],
      ["六","liù","ستة"],
      ["七","qī","سبعة"],
      ["八","bā","ثمانية"],
      ["九","jiǔ","تسعة"],
      ["十","shí","عشرة"]
    ]
  },
  {
    id: 6,
    hsk: 2,
    title: "الوقت",
    description: "الوقت وأيامك",
    words: [
      ["今天","jīntiān","اليوم"],
      ["明天","míngtiān","غدًا"],
      ["昨天","zuótiān","أمس"],
      ["现在","xiànzài","الآن"],
      ["时间","shíjiān","وقت"],
      ["星期","xīngqī","أسبوع"]
    ]
  },
  {
    id: 7,
    hsk: 2,
    title: "المشاعر",
    description: "التعبير عن المشاعر",
    words: [
      ["高兴","gāoxìng","سعيد"],
      ["累","lèi","متعب"],
      ["喜欢","xǐhuan","يحب"],
      ["希望","xīwàng","يأمل"],
      ["觉得","juéde","يشعر / يعتقد"],
      ["忙","máng","مشغول"]
    ]
  },
  {
    id: 8,
    hsk: 2,
    title: "الطعام",
    description: "مفردات الطعام اليومية",
    words: [
      ["水果","shuǐguǒ","فاكهة"],
      ["苹果","píngguǒ","تفاحة"],
      ["香蕉","xiāngjiāo","موز"],
      ["鸡蛋","jīdàn","بيض"],
      ["牛奶","niúnǎi","حليب"],
      ["面包","miànbāo","خبز"]
    ]
  },
  {
    id: 9,
    hsk: 3,
    title: "السفر والمواصلات",
    description: "التنقل والسفر",
    words: [
      ["旅行","lǚxíng","سفر"],
      ["机场","jīchǎng","مطار"],
      ["火车站","huǒchēzhàn","محطة قطار"],
      ["地铁","dìtiě","مترو"],
      ["出租车","chūzūchē","تاكسي"],
      ["地图","dìtú","خريطة"]
    ]
  },
  {
    id: 10,
    hsk: 3,
    title: "الطقس والفصول",
    description: "وصف الطقس",
    words: [
      ["天气","tiānqì","طقس"],
      ["晴","qíng","مشمس"],
      ["雨","yǔ","مطر"],
      ["雪","xuě","ثلج"],
      ["冷","lěng","بارد"],
      ["热","rè","حار"]
    ]
  },
  {
    id: 11,
    hsk: 4,
    title: "النجاح والأهداف",
    description: "الحديث عن النجاح والطموح",
    words: [
      ["成功","chénggōng","نجاح"],
      ["失败","shībài","فشل"],
      ["努力","nǔlì","يجتهد"],
      ["目标","mùbiāo","هدف"],
      ["未来","wèilái","مستقبل"],
      ["机会","jīhuì","فرصة"]
    ]
  },
  {
    id: 12,
    hsk: 4,
    title: "المجتمع",
    description: "مفردات المجتمع والحياة",
    words: [
      ["社会","shèhuì","مجتمع"],
      ["文化","wénhuà","ثقافة"],
      ["教育","jiàoyù","تعليم"],
      ["环境","huánjìng","بيئة"],
      ["发展","fāzhǎn","تطور"],
      ["责任","zérèn","مسؤولية"]
    ]
  },
  {
    id: 13,
    hsk: 5,
    title: "الأعمال",
    description: "الشركات والأعمال",
    words: [
      ["商业","shāngyè","أعمال"],
      ["企业","qǐyè","شركة"],
      ["市场","shìchǎng","سوق"],
      ["产品","chǎnpǐn","منتج"],
      ["服务","fúwù","خدمة"],
      ["管理","guǎnlǐ","إدارة"]
    ]
  },
  {
    id: 14,
    hsk: 5,
    title: "التكنولوجيا",
    description: "التكنولوجيا والذكاء الاصطناعي",
    words: [
      ["科技","kējì","تكنولوجيا"],
      ["科学","kēxué","علوم"],
      ["技术","jìshù","تقنية"],
      ["人工智能","réngōng zhìnéng","الذكاء الاصطناعي"],
      ["互联网","hùliánwǎng","الإنترنت"],
      ["数据","shùjù","بيانات"]
    ]
  },
  {
    id: 15,
    hsk: 6,
    title: "الابتكار والتفكير",
    description: "مفردات متقدمة",
    words: [
      ["创新","chuàngxīn","ابتكار"],
      ["创造","chuàngzào","يخلق"],
      ["理论","lǐlùn","نظرية"],
      ["概念","gàiniàn","مفهوم"],
      ["证据","zhèngjù","دليل"],
      ["结论","jiélùn","استنتاج"]
    ]
  }
];

/* =========================
   ELEMENT HELPER
========================= */

function el(id) {
  return document.getElementById(id);
}

/* =========================
   MOTIVATION
========================= */

function setRandomQuote() {
  const element = el("loadingQuote") || el("dailyMotivation");
  if (!element) return;

  const previous = localStorage.getItem("lastChineseBuddyQuote");

  let available = quotes.filter(q => q !== previous);

  if (available.length === 0) {
    available = quotes;
  }

  const quote = available[Math.floor(Math.random() * available.length)];

  element.textContent = quote;
  localStorage.setItem("lastChineseBuddyQuote", quote);
}

/* =========================
   STATS
========================= */

function updateStats() {

  const level = getLevel();

  if (el("xpValue")) {
    el("xpValue").textContent = state.xp;
  }

  if (el("streakValue")) {
    el("streakValue").textContent = state.streak;
  }

  if (el("levelValue")) {
    el("levelValue").textContent = level;
  }

  if (el("profileLevel")) {
    el("profileLevel").textContent = level;
  }

  if (el("profileXP")) {
    el("profileXP").textContent = state.xp;
  }

  if (el("completedLessons")) {
    el("completedLessons").textContent =
      state.completedLessons.length;
  }
}

/* =========================
   STREAK
========================= */

function updateStreak() {

  const today = new Date().toDateString();

  if (state.lastStudyDate === today) {
    return;
  }

  if (!state.lastStudyDate) {
    state.streak = 1;
  } else {

    const previous = new Date(state.lastStudyDate);
    const current = new Date(today);

    const difference =
      Math.floor(
        (current - previous) / (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {
      state.streak += 1;
    } else if (difference > 1) {
      state.streak = 1;
    }
  }

  state.lastStudyDate = today;
  saveState();
}

/* =========================
   NAVIGATION
========================= */

function hideAllPages() {

  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });
}

function showPage(pageName) {

  hideAllPages();

  const page = el(pageName + "Page");

  if (page) {
    page.style.display = "block";
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  const active = document.querySelector(
    `[data-page="${pageName}"]`
  );

  if (active) {
    active.classList.add("active");
  }

  if (pageName === "home") {
    updateStats();
  }

  if (pageName === "lessons") {
    renderLessons();
  }

  if (pageName === "review") {
    renderReview();
  }

  if (pageName === "tests") {
    renderTests();
  }

  if (pageName === "hsk") {
    renderHSK();
  }
}

/* =========================
   LESSONS
========================= */

function renderLessons() {

  const container =
    el("lessonList") || el("allLessons");

  if (!container) return;

  container.innerHTML = lessons.map(lesson => {

    const completed =
      state.completedLessons.includes(lesson.id);

    return `
      <div class="lesson-card"
           onclick="openLesson(${lesson.id})">

        <div>
          <span class="hsk-badge">
            HSK ${lesson.hsk}
          </span>

          <h3>${lesson.title}</h3>

          <p>${lesson.description}</p>

          <small>
            ${lesson.words.length} كلمات
          </small>
        </div>

        <div>
          ${completed ? "✅" : "▶️"}
        </div>

      </div>
    `;

  }).join("");
}

/* =========================
   OPEN LESSON
========================= */

function openLesson(id) {

  const lesson =
    lessons.find(item => item.id === id);

  if (!lesson) return;

  showPage("lesson");

  const container = el("lessonContent");

  if (!container) return;

  container.innerHTML = `

    <div class="lesson-header">

      <span class="hsk-badge">
        HSK ${lesson.hsk}
      </span>

      <h2>${lesson.title}</h2>

      <p>${lesson.description}</p>

    </div>

    <h3>📚 مفردات الدرس</h3>

    <div class="vocabulary-grid">

      ${lesson.words.map(word => `

        <div class="vocab-card">

          <div class="hanzi">
            ${word[0]}
          </div>

          <div class="pinyin">
            ${word[1]}
          </div>

          <div class="meaning">
            ${word[2]}
          </div>

          <div class="vocab-actions">

            <button
              onclick="event.stopPropagation(); speakChinese('${word[0]}')">
              🔊
            </button>

            <button
              onclick="event.stopPropagation(); toggleFavorite('${word[0]}')">
              ${state.favorites.includes(word[0]) ? "⭐" : "☆"}
            </button>

          </div>

        </div>

      `).join("")}

    </div>

    <div class="lesson-example">

      <h3>💡 مثال</h3>

      <p>我学习中文。</p>

      <small>
        Wǒ xuéxí Zhōngwén.
      </small>

      <p>
        أنا أتعلم اللغة الصينية.
      </p>

      <button onclick="speakChinese('我学习中文')">
        🔊 استمع
      </button>

    </div>

    <div class="lesson-complete-box">

      <h3>📝 اختبار الدرس</h3>

      <p>
        لازم تجتازي الاختبار حتى يتم تسجيل الدرس كمكتمل.
      </p>

      <button
        class="primary-btn"
        onclick="startLessonQuiz(${lesson.id})">

        ابدأ الاختبار 🚀

      </button>

    </div>
  `;
}

/* =========================
   REVIEW
========================= */

function addToReview(word) {

  if (!state.review.includes(word)) {
    state.review.push(word);
    saveState();
  }
}

function renderReview() {

  const container = el("reviewList");

  if (!container) return;

  if (state.review.length === 0) {

    container.innerHTML = `
      <div class="empty-state">

        <div>🎉</div>

        <h3>
          مفيش كلمات للمراجعة
        </h3>

        <p>
          الكلمات اللي تخطئي فيها هتظهر هنا.
        </p>

      </div>
    `;

    return;
  }

  const allWords =
    Object.values(hskVocabulary).flat();

  container.innerHTML =
    state.review.map(chinese => {

      const word =
        allWords.find(item => item[0] === chinese);

      if (!word) return "";

      return `
        <div class="review-card">

          <div>

            <strong>
              ${word[0]}
            </strong>

            <span>
              ${word[1]}
            </span>

            <small>
              ${word[2]}
            </small>

          </div>

          <div>

            <button
              onclick="speakChinese('${word[0]}')">
              🔊
            </button>

            <button
              onclick="removeReview('${word[0]}')">
              ✓
            </button>

          </div>

        </div>
      `;

    }).join("");
}

function removeReview(word) {

  state.review =
    state.review.filter(item => item !== word);

  saveState();
  renderReview();

  addXP(5);
}

/* =========================
   FAVORITES
========================= */

function toggleFavorite(word) {

  if (state.favorites.includes(word)) {

    state.favorites =
      state.favorites.filter(item => item !== word);

  } else {

    state.favorites.push(word);

  }

  saveState();

  openLesson(
    lessons.find(l =>
      l.words.some(w => w[0] === word)
    )?.id || 1
  );
}

/* =========================
   LESSON QUIZ
========================= */

function startLessonQuiz(id) {

  const lesson =
    lessons.find(item => item.id === id);

  if (!lesson) return;

  const questions =
    [...lesson.words]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(5, lesson.words.length));

  let currentQuestion = 0;
  let score = 0;

  const container = el("lessonContent");

  function showQuestion() {

    const word =
      questions[currentQuestion];

    const allMeanings =
      Object.values(hskVocabulary)
        .flat()
        .map(item => item[2])
        .filter(m => m !== word[2]);

    let options = [word[2]];

    while (options.length < 4) {

      const random =
        allMeanings[
          Math.floor(Math.random() * allMeanings.length)
        ];

      if (!options.includes(random)) {
        options.push(random);
      }
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `

      <div class="quiz-box">

        <div class="quiz-progress">
          السؤال ${currentQuestion + 1}
          من ${questions.length}
        </div>

        <h2>
          ماذا تعني هذه الكلمة؟
        </h2>

        <div class="quiz-word">
          ${word[0]}
        </div>

        <div class="quiz-pinyin">
          ${word[1]}
        </div>

        <button
          class="listen-btn"
          onclick="speakChinese('${word[0]}')">
          🔊 استمع
        </button>

        <div class="quiz-options">

          ${options.map(option => `

            <button
              class="quiz-answer"
              data-answer="${encodeURIComponent(option)}">

              ${option}

            </button>

          `).join("")}

        </div>

      </div>
    `;

    document
      .querySelectorAll(".quiz-answer")
      .forEach(button => {

        button.onclick = () => {

          const answer =
            decodeURIComponent(
              button.dataset.answer
            );

          document
            .querySelectorAll(".quiz-answer")
            .forEach(btn => {
              btn.disabled = true;
            });

          if (answer === word[2]) {

            score++;
            button.classList.add("correct");

          } else {

            button.classList.add("wrong");
            addToReview(word[0]);

            document
              .querySelectorAll(".quiz-answer")
              .forEach(btn => {

                if (
                  decodeURIComponent(
                    btn.dataset.answer
                  ) === word[2]
                ) {
                  btn.classList.add("correct");
                }

              });
          }

          setTimeout(() => {

            currentQuestion++;

            if (
              currentQuestion >= questions.length
            ) {

              finishLessonQuiz(
                id,
                score,
                questions.length
              );

            } else {

              showQuestion();

            }

          }, 700);
        };
      });
  }

  showQuestion();
}

/* =========================
   FINISH LESSON QUIZ
========================= */

function finishLessonQuiz(id, score, total) {

  const passed =
    score >= Math.ceil(total * 0.6);

  const container =
    el("lessonContent");

  if (passed) {

    if (!state.completedLessons.includes(id)) {

      state.completedLessons.push(id);
      addXP(50);

    }

    updateStreak();
    saveState();

    container.innerHTML = `

      <div class="success-box">

        <div class="big-icon">
          🎉
        </div>

        <h2>
          أحسنتِ!
        </h2>

        <p>
          اجتزتِ الاختبار بنجاح.
        </p>

        <h3>
          ${score} / ${total}
        </h3>

        <p>
          +50 XP 🏆
        </p>

        <button
          class="primary-btn"
          onclick="showPage('lessons')">

          العودة للدروس

        </button>

      </div>
    `;

  } else {

    container.innerHTML = `

      <div class="wrong-box">

        <div class="big-icon">
          💪
        </div>

        <h2>
          قريبة جدًا!
        </h2>

        <p>
          راجعي الكلمات وحاولي مرة أخرى.
        </p>

        <h3>
          ${score} / ${total}
        </h3>

        <button
          class="primary-btn"
          onclick="startLessonQuiz(${id})">

          إعادة الاختبار 🔄

        </button>

      </div>
    `;
  }

  updateStats();
  renderLessons();
}

/* =========================
   HSK PAGE
========================= */

function renderHSK() {

  const container = el("hskContent");

  if (!container) return;

  container.innerHTML = `

    <div class="tests-header">

      <span class="hsk-badge">
        HSK
      </span>

      <h2>
        مستويات اللغة الصينية 🇨🇳
      </h2>

      <p>
        اختاري المستوى لمشاهدة مفرداته.
      </p>

    </div>

    ${[1,2,3,4,5,6].map(level => `

      <div
        class="hsk-card"
        onclick="showHSKWords(${level})">

        <div class="hsk-number">
          ${level}
        </div>

        <div>

          <h3>
            HSK ${level}
          </h3>

          <p>
            ${hskVocabulary[level].length}
            كلمة متاحة حاليًا
          </p>

        </div>

        <span>
          ›
        </span>

      </div>

    `).join("")}
  `;
}

function showHSKWords(level) {

  const container = el("hskContent");

  const words =
    hskVocabulary[level];

  container.innerHTML = `

    <button
      class="back-btn"
      onclick="renderHSK()">

      ← رجوع

    </button>

    <div class="tests-header">

      <span class="hsk-badge">
        HSK ${level}
      </span>

      <h2>
        مفردات المستوى ${level}
      </h2>

    </div>

    <div class="vocabulary-grid">

      ${words.map(word => `

        <div class="vocab-card">

          <div class="hanzi">
            ${word[0]}
          </div>

          <div class="pinyin">
            ${word[1]}
          </div>

          <div class="meaning">
            ${word[2]}
          </div>

          <button
            onclick="speakChinese('${word[0]}')">

            🔊

          </button>

        </div>

      `).join("")}

    </div>
  `;
}

/* =========================
   TESTS PAGE
========================= */

function renderTests() {

  const container = el("testsContent");

  if (!container) return;

  container.innerHTML = `

    <div class="tests-header">

      <span class="hsk-badge">
        📝 TESTS
      </span>

      <h2>
        اختبر معلوماتك 🧠
      </h2>

      <p>
        اختبارات منفصلة عن الدروس.
      </p>

    </div>

    ${[1,2,3,4,5,6].map(level => `

      <div
        class="test-card"
        onclick="startGeneralTest(${level})">

        <div class="test-icon">
          ${level <= 2 ? "🌱" :
            level <= 4 ? "🔥" : "👑"}
        </div>

        <div>

          <h3>
            اختبار HSK ${level}
          </h3>

          <p>
            10 أسئلة
          </p>

        </div>

      </div>

    `).join("")}

    <div
      class="test-card"
      onclick="startMixedTest()">

      <div class="test-icon">
        🎲
      </div>

      <div>

        <h3>
          اختبار عشوائي
        </h3>

        <p>
          كلمات من مستويات مختلفة
        </p>

      </div>

    </div>
  `;
}

/* =========================
   GENERAL TEST
========================= */

function startGeneralTest(level) {

  const words =
    [...hskVocabulary[level]]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

  runTest(
    words,
    `اختبار HSK ${level}`
  );
}

function startMixedTest() {

  const words =
    Object.values(hskVocabulary)
      .flat()
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

  runTest(
    words,
    "اختبار عشوائي"
  );
}

function runTest(words, title) {

  let current = 0;
  let score = 0;

  const container =
    el("testsContent");

  function showQuestion() {

    const word =
      words[current];

    const pool =
      Object.values(hskVocabulary)
        .flat()
        .map(item => item[2])
        .filter(m => m !== word[2]);

    let options = [word[2]];

    while (options.length < 4) {

      const random =
        pool[Math.floor(Math.random() * pool.length)];

      if (!options.includes(random)) {
        options.push(random);
      }
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `

      <div class="quiz-box">

        <div class="quiz-progress">
          ${title}
          — ${current + 1} / ${words.length}
        </div>

        <h2>
          اختر المعنى الصحيح
        </h2>

        <div class="quiz-word">
          ${word[0]}
        </div>

        <div class="quiz-pinyin">
          ${word[1]}
        </div>

        <button
          class="listen-btn"
          onclick="speakChinese('${word[0]}')">

          🔊 استماع

        </button>

        <div class="quiz-options">

          ${options.map(option => `

            <button
              class="quiz-answer"
              data-answer="${encodeURIComponent(option)}">

              ${option}

            </button>

          `).join("")}

        </div>

      </div>
    `;

    document
      .querySelectorAll(".quiz-answer")
      .forEach(button => {

        button.onclick = () => {

          const answer =
            decodeURIComponent(
              button.dataset.answer
            );

          document
            .querySelectorAll(".quiz-answer")
            .forEach(btn => {
              btn.disabled = true;
            });

          if (answer === word[2]) {

            score++;
            addXP(10);
            button.classList.add("correct");

          } else {

            button.classList.add("wrong");
            addToReview(word[0]);

            document
              .querySelectorAll(".quiz-answer")
              .forEach(btn => {

                if (
                  decodeURIComponent(
                    btn.dataset.answer
                  ) === word[2]
                ) {
                  btn.classList.add("correct");
                }

              });
          }

          setTimeout(() => {

            current++;

            if (current >= words.length) {

              finishGeneralTest(
                title,
                score,
                words.length
              );

            } else {

              showQuestion();

            }

          }, 700);
        };
      });
  }

  showQuestion();
}

/* =========================
   TEST RESULT
========================= */

function finishGeneralTest(
  title,
  score,
  total
) {

  const percentage =
    Math.round((score / total) * 100);

  state.testResults.push({
    title: title,
    score: score,
    total: total,
    percentage: percentage,
    date: new Date().toISOString()
  });

  updateStreak();
  saveState();

  const container =
    el("testsContent");

  container.innerHTML = `

    <div class="success-box">

      <div class="big-icon">

        ${
          percentage >= 80
            ? "🏆"
            : percentage >= 60
            ? "🎉"
            : "💪"
        }

      </div>

      <h2>
        انتهى الاختبار!
      </h2>

      <p>
        ${title}
      </p>

      <div class="test-result">

        <strong>
          ${score} / ${total}
        </strong>

        <span>
          ${percentage}%
        </span>

      </div>

      <p>

        ${
          percentage >= 80
            ? "ممتاز جدًا! 🔥"
            : percentage >= 60
            ? "جيد جدًا! استمري 🌱"
            : "راجعي الكلمات وحاولي مرة أخرى ❤️"
        }

      </p>

      <button
        class="primary-btn"
        onclick="renderTests()">

        العودة للاختبارات

      </button>

    </div>
  `;

  updateStats();
}

/* =========================
   SPEECH
========================= */

function speakChinese(text) {

  if (!("speechSynthesis" in window)) {

    alert(
      "المتصفح لا يدعم النطق الصوتي."
    );

    return;
  }

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "zh-CN";
  utterance.rate = 0.8;

  window.speechSynthesis.cancel();

  window.speechSynthesis.speak(
    utterance
  );
}

/* =========================
   LOGIN
========================= */

function createLoginScreen() {

  if (state.loggedIn) return;

  if (el("loginOverlay")) return;

  const overlay =
    document.createElement("div");

  overlay.id = "loginOverlay";

  overlay.innerHTML = `

    <div class="login-box">

      <div class="login-logo">
        中
      </div>

      <h2>
        أهلاً بك في Chinese Buddy 🇨🇳
      </h2>

      <p>
        أنشئي حسابك وابدئي رحلة تعلم الصينية.
      </p>

      <input
        id="loginName"
        type="text"
        placeholder="اسم المستخدم">

      <input
        id="loginEmail"
        type="email"
        placeholder="البريد الإلكتروني">

      <input
        id="loginPassword"
        type="password"
        placeholder="كلمة المرور">

      <button
        id="loginBtn"
        class="primary-btn">

        إنشاء الحساب / تسجيل الدخول

      </button>

      <small>
        النسخة الحالية تحفظ بيانات الدخول
        والتقدم على هذا الجهاز فقط.
      </small>

    </div>
  `;

  document.body.appendChild(overlay);

  el("loginBtn").onclick = () => {

    const name =
      el("loginName").value.trim();

    const email =
      el("loginEmail").value.trim();

    const password =
      el("loginPassword").value;

    if (!name || !email || !password) {

      alert(
        "من فضلك املئي البيانات كلها."
      );

      return;
    }

    state.loggedIn = true;
    state.username = name;

    saveState();

    overlay.remove();

    showPage("home");

    updateStats();
  };
}

/* =========================
   NOTIFICATIONS
========================= */

async function requestNotifications() {

  if (!("Notification" in window)) {

    alert(
      "المتصفح لا يدعم الإشعارات."
    );

    return;
  }

  if (Notification.permission === "granted") {

    state.notifications = true;
    saveState();

    alert(
      "الإشعارات مفعلة بالفعل 🔔"
    );

    return;
  }

  if (Notification.permission === "denied") {

    alert(
      "الإشعارات مرفوضة من إعدادات المتصفح."
    );

    return;
  }

  const permission =
    await Notification.requestPermission();

  if (permission === "granted") {

    state.notifications = true;

    saveState();

    new Notification(
      "Chinese Buddy 🇨🇳",
      {
        body:
          "ممتاز! تم تفعيل الإشعارات 🔔"
      }
    );

  } else {

    alert(
      "لم يتم تفعيل الإشعارات."
    );
  }
}

function createNotificationButton() {

  if (el("notificationBtn")) return;

  const button =
    document.createElement("button");

  button.id =
    "notificationBtn";

  button.className =
    "notification-floating";

  button.textContent =
    "🔔";

  button.title =
    "تفعيل الإشعارات";

  button.onclick =
    requestNotifications;

  document.body.appendChild(button);
}

/* =========================
   THEME
========================= */

function setupTheme() {

  if (state.darkMode) {
    document.body.classList.add("dark");
  }

  const button =
    el("themeBtn");

  if (!button) return;

  button.onclick = () => {

    state.darkMode =
      !document.body.classList.contains("dark");

    document.body.classList.toggle(
      "dark",
      state.darkMode
    );

    saveState();
  };
}

/* =========================
   LANGUAGE BUTTON
========================= */

function setupLanguage() {

  const button =
    el("langBtn");

  if (!button) return;

  button.onclick = () => {

    alert(
      "ترجمة الواجهة عربي / English ستكون في مرحلة تطوير الواجهة القادمة."
    );
  };
}

/* =========================
   CREATE HSK PAGE
========================= */

function createHSKPage() {

  if (el("hskPage")) return;

  const page =
    document.createElement("section");

  page.id =
    "hskPage";

  page.className =
    "page";

  page.style.display =
    "none";

  page.innerHTML = `
    <div id="hskContent"></div>
  `;

  const main =
    document.querySelector("main");

  if (main) {
    main.appendChild(page);
  }
}

/* =========================
   CREATE TEST PAGE
========================= */

function createTestsPage() {

  if (el("testsPage")) return;

  const page =
    document.createElement("section");

  page.id =
    "testsPage";

  page.className =
    "page";

  page.style.display =
    "none";

  page.innerHTML = `
    <div id="testsContent"></div>
  `;

  const main =
    document.querySelector("main");

  if (main) {
    main.appendChild(page);
  }
}

/* =========================
   ADD NAV BUTTONS
========================= */

function addNavigationButtons() {

  const nav =
    document.querySelector(".bottom-nav");

  if (!nav) return;

  if (
    !nav.querySelector(
      '[data-page="tests"]'
    )
  ) {

    const button =
      document.createElement("button");

    button.className =
      "nav-btn";

    button.dataset.page =
      "tests";

    button.innerHTML = `
      <span>📝</span>
      <small>اختبارات</small>
    `;

    button.onclick =
      () => showPage("tests");

    nav.appendChild(button);
  }

  if (
    !nav.querySelector(
      '[data-page="hsk"]'
    )
  ) {

    const button =
      document.createElement("button");

    button.className =
      "nav-btn";

    button.dataset.page =
      "hsk";

    button.innerHTML = `
      <span>🇨🇳</span>
      <small>HSK</small>
    `;

    button.onclick =
      () => showPage("hsk");

    nav.appendChild(button);
  }
}

/* =========================
   START APP
========================= */

function startApp() {

  /*
     مهم جدًا:
     لا نخفي التطبيق بعد تسجيل الدخول.
  */

  const app =
    el("app");

  if (app) {
    app.style.display = "block";
    app.style.visibility = "visible";
    app.style.opacity = "1";
  }

  createHSKPage();
  createTestsPage();

  addNavigationButtons();

  updateStats();
  renderLessons();
  renderReview();
  renderTests();
  renderHSK();

  setupTheme();
  setupLanguage();

  createNotificationButton();

  if (!state.loggedIn) {
    createLoginScreen();
  } else {
    showPage("home");
  }
}

/* =========================
   APP START
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setRandomQuote();

    const loading =
      el("loadingScreen");

    setTimeout(() => {

      if (loading) {

        loading.style.opacity = "0";

        setTimeout(() => {
          loading.style.display = "none";
        }, 400);
      }

      startApp();

    }, 1200);
  }
);
