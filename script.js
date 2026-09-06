/* =========================================================
   CHINESE BUDDY — VERSION 2
   HSK + VOCABULARY + TESTS + LOGIN + NOTIFICATIONS
   ========================================================= */

const APP_KEY = "chineseBuddy_v2";

/* =========================
   MOTIVATION
========================= */

const quotes = [
  "خذ خطوة صغيرة كل يوم لتقترب من حلمك ❤️",
  "لا تجعل الخوف من الخطأ يهدم حلمك كاملًا 🌱",
  "خطأ واحد اليوم يعني كلمة جديدة تعلمتها غدًا ✨",
  "أنت لا تحتاج أن تكون مثاليًا، فقط استمر 💪",
  "每一天都更好 — كل يوم تصبح أفضل 🇨🇳",
  "学习中文，加油！ — استمر في تعلم الصينية! 🔥",
  "الاستمرارية أهم من السرعة 🚀",
  "كل كلمة صينية تحفظها تقربك من هدفك 🎯"
];

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
    ["是","shì","يكون / نعم"],
    ["不","bù","لا / ليس"],
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
    ["有","yǒu","لديه / يوجد"],
    ["没有","méiyǒu","ليس لديه / لا يوجد"],
    ["喜欢","xǐhuan","يحب"],
    ["爱","ài","يحب"],
    ["吃","chī","يأكل"],
    ["喝","hē","يشرب"],
    ["水","shuǐ","ماء"],
    ["茶","chá","شاي"],
    ["咖啡","kāfēi","قهوة"],
    ["饭","fàn","طعام / أرز"],
    ["家","jiā","بيت / عائلة"],
    ["学校","xuéxiào","مدرسة"],
    ["学生","xuésheng","طالب"],
    ["老师","lǎoshī","معلم"],
    ["朋友","péngyou","صديق"],
    ["中文","Zhōngwén","اللغة الصينية"],
    ["学习","xuéxí","يدرس / يتعلم"],
    ["看","kàn","ينظر / يشاهد / يقرأ"],
    ["听","tīng","يستمع"],
    ["说","shuō","يتحدث / يقول"],
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
    ["认识","rènshi","يتعرف / يعرف شخصًا"],
    ["希望","xīwàng","يأمل"],
    ["觉得","juéde","يعتقد"],
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
    ["但是","dànshì","لكن"],
    ["还是","háishi","أم / لا يزال"]
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
    ["特别","tèbié","خاص / بشكل خاص"],
    ["已经","yǐjīng","بالفعل"],
    ["正在","zhèngzài","في أثناء"],
    ["可能","kěnéng","ربما / محتمل"],
    ["当然","dāngrán","بالطبع"],
    ["应该","yīnggāi","ينبغي"],
    ["需要","xūyào","يحتاج"],
    ["决定","juédìng","يقرر"],
    ["了解","liǎojiě","يفهم / يعرف"],
    ["发现","fāxiàn","يكتشف"],
    ["练习","liànxí","يتدرب"],
    ["提高","tígāo","يطور / يحسن"]
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
    ["提高","tígāo","يحسن"],
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
    ["情况","qíngkuàng","وضع / حالة"],
    ["意见","yìjiàn","رأي"],
    ["建议","jiànyì","اقتراح"],
    ["解释","jiěshì","يشرح"],
    ["表达","biǎodá","يعبر"],
    ["讨论","tǎolùn","يناقش"],
    ["决定","juédìng","يقرر"],
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
    ["商业","shāngyè","تجارة / أعمال"],
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
    ["政策","zhèngcè","سياسة / سياسة حكومية"],
    ["法律","fǎlǜ","قانون"],
    ["权利","quánlì","حقوق"],
    ["公平","gōngpíng","عدالة / إنصاف"],
    ["机会","jīhuì","فرصة"],
    ["趋势","qūshì","اتجاه"],
    ["现代","xiàndài","حديث"],
    ["传统","chuántǒng","تقليدي"],
    ["价值","jiàzhí","قيمة"],
    ["观点","guāndiǎn","وجهة نظر"],
    ["证明","zhèngmíng","يثبت"],
    ["分析","fēnxī","يحلل"],
    ["比较","bǐjiào","يقارن"],
    ["提高","tígāo","يحسن"],
    ["实现","shíxiàn","يحقق"]
  ],

  6: [
    ["哲学","zhéxué","فلسفة"],
    ["政治","zhèngzhì","سياسة"],
    ["历史","lìshǐ","تاريخ"],
    ["文学","wénxué","أدب"],
    ["心理","xīnlǐ","علم النفس / نفسي"],
    ["现象","xiànxiàng","ظاهرة"],
    ["理论","lǐlùn","نظرية"],
    ["概念","gàiniàn","مفهوم"],
    ["原则","yuánzé","مبدأ"],
    ["本质","běnzhì","جوهر"],
    ["意义","yìyì","معنى / أهمية"],
    ["观点","guāndiǎn","وجهة نظر"],
    ["逻辑","luójí","منطق"],
    ["证据","zhèngjù","دليل"],
    ["结论","jiélùn","استنتاج"],
    ["分析","fēnxī","تحليل"],
    ["批评","pīpíng","ينتقد"],
    ["创造","chuàngzào","يخلق / إبداع"],
    ["创新","chuàngxīn","ابتكار"],
    ["复杂","fùzá","معقد"],
    ["有效","yǒuxiào","فعال"],
    ["明显","míngxiǎn","واضح"],
    ["普遍","pǔbiàn","شائع / عام"],
    ["独立","dúlì","مستقل"],
    ["个人","gèrén","فرد / شخصي"],
    ["整体","zhěngtǐ","كل / إجمالي"],
    ["过程","guòchéng","عملية"],
    ["条件","tiáojiàn","شرط"],
    ["现象","xiànxiàng","ظاهرة"],
    ["机会","jīhuì","فرصة"],
    ["挑战","tiǎozhàn","تحدي"],
    ["面对","miànduì","يواجه"],
    ["保持","bǎochí","يحافظ على"],
    ["避免","bìmiǎn","يتجنب"],
    ["促进","cùjìn","يعزز"],
    ["导致","dǎozhì","يؤدي إلى"],
    ["影响","yǐngxiǎng","يؤثر"],
    ["强调","qiángdiào","يؤكد على"],
    ["考虑","kǎolǜ","يفكر في / يأخذ بعين الاعتبار"],
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
    description: "تعلم أهم الكلمات لبدء محادثة بالصينية",
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
    description: "الضمائر الأساسية في الصينية",
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
    description: "كلمات الطعام والشراب اليومية",
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
    description: "مفردات الدراسة والمدرسة",
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
    description: "الأرقام الأساسية من 1 إلى 10",
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
    title: "الوقت واليوم",
    description: "تحدث عن الوقت وأيامك",
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
    description: "عبّر عن مشاعرك بالصينية",
    words: [
      ["高兴","gāoxìng","سعيد"],
      ["累","lèi","متعب"],
      ["喜欢","xǐhuan","يحب"],
      ["希望","xīwàng","يأمل"],
      ["觉得","juéde","يعتقد / يشعر"],
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
    description: "تحدث عن السفر والتنقل",
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
    title: "الطقس",
    description: "صف الطقس والفصول",
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
    title: "النجاح والفشل",
    description: "مفردات تساعدك في الحديث عن الأهداف",
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
    description: "كلمات عن المجتمع والحياة",
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
    description: "مفردات مهمة للأعمال والشركات",
    words: [
      ["商业","shāngyè","أعمال"],
      ["企业","qǐyè","شركة / مؤسسة"],
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
    description: "مفردات التكنولوجيا والذكاء الاصطناعي",
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
    description: "مفردات متقدمة للمناقشات",
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
   STATE
========================= */

let state = JSON.parse(localStorage.getItem(APP_KEY)) || {
  xp: 0,
  streak: 0,
  completedLessons: [],
  review: [],
  favorites: [],
  testScores: [],
  lastDate: null,
  dailyGoal: 50,
  todayXP: 0,
  loggedIn: false,
  username: "",
  notifications: false
};

function saveState() {
  localStorage.setItem(APP_KEY, JSON.stringify(state));
}

/* =========================
   HELPERS
========================= */

function $(id) {
  return document.getElementById(id);
}

function randomQuote() {
  const old = localStorage.getItem("cb_last_quote");
  let available = quotes.filter(q => q !== old);
  const quote = available[Math.floor(Math.random() * available.length)];
  localStorage.setItem("cb_last_quote", quote);
  return quote;
}

function levelFromXP(xp) {
  return Math.floor(xp / 500) + 1;
}

function addXP(amount) {
  state.xp += amount;
  state.todayXP += amount;
  saveState();
  updateStats();
}

function updateStats() {
  const level = levelFromXP(state.xp);

  if ($("xpValue")) $("xpValue").textContent = state.xp;
  if ($("streakValue")) $("streakValue").textContent = state.streak;
  if ($("levelValue")) $("levelValue").textContent = level;

  if ($("profileLevel")) $("profileLevel").textContent = level;
  if ($("profileXP")) $("profileXP").textContent = state.xp;
  if ($("completedLessons")) {
    $("completedLessons").textContent = state.completedLessons.length;
  }

  if ($("goalProgress")) {
    const percent = Math.min(
      100,
      Math.round((state.todayXP / state.dailyGoal) * 100)
    );
    $("goalProgress").style.width = percent + "%";
  }

  if ($("goalText")) {
    $("goalText").textContent =
      `${state.todayXP} / ${state.dailyGoal} XP اليوم`;
  }
}

function updateStreak() {
  const today = new Date().toDateString();

  if (state.lastDate !== today) {
    state.streak += 1;
    state.lastDate = today;
    state.todayXP = 0;
    saveState();
  }
}

/* =========================
   NAVIGATION
========================= */

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.style.display = "none";
  });

  const target = $(page + "Page");

  if (target) {
    target.style.display = "block";
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  const active = document.querySelector(`[data-page="${page}"]`);
  if (active) active.classList.add("active");

  if (page === "lessons") renderLessons();
  if (page === "review") renderReview();
  if (page === "tests") renderTests();
  if (page === "hsk") renderHSK();
}

/* =========================
   LESSONS
========================= */

function renderLessons() {
  const container = $("lessonList") || $("allLessons");
  if (!container) return;

  container.innerHTML = lessons.map(lesson => {
    const done = state.completedLessons.includes(lesson.id);

    return `
      <div class="lesson-card" onclick="openLesson(${lesson.id})">
        <div>
          <span class="hsk-badge">HSK ${lesson.hsk}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.description}</p>
          <small>${lesson.words.length} كلمات</small>
        </div>
        <div class="lesson-status">
          ${done ? "✅" : "▶️"}
        </div>
      </div>
    `;
  }).join("");
}

function openLesson(id) {
  const lesson = lessons.find(x => x.id === id);
  if (!lesson) return;

  showPage("lesson");

  const container = $("lessonContent");
  if (!container) return;

  container.innerHTML = `
    <div class="lesson-header">
      <span class="hsk-badge">HSK ${lesson.hsk}</span>
      <h2>${lesson.title}</h2>
      <p>${lesson.description}</p>
    </div>

    <h3>📚 المفردات</h3>

    <div class="vocabulary-grid">
      ${lesson.words.map((word, index) => `
        <div class="vocab-card">
          <div class="hanzi">${word[0]}</div>
          <div class="pinyin">${word[1]}</div>
          <div class="meaning">${word[2]}</div>

          <div class="vocab-actions">
            <button onclick="speakChinese('${word[0]}')">🔊</button>
            <button onclick="toggleFavorite('${word[0]}')">
              ${state.favorites.includes(word[0]) ? "⭐" : "☆"}
            </button>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="lesson-example">
      <h3>💡 مثال</h3>
      <p>我学习中文。</p>
      <small>Wǒ xuéxí Zhōngwén.</small>
      <p>أنا أتعلم الصينية.</p>
      <button onclick="speakChinese('我学习中文')">🔊 استمع</button>
    </div>

    <div class="lesson-complete-box">
      <h3>📝 اختبار الدرس</h3>
      <p>لا يمكن إكمال الدرس إلا بعد اجتياز الاختبار.</p>
      <button class="primary-btn" onclick="startLessonQuiz(${lesson.id})">
        ابدأ الاختبار 🚀
      </button>
    </div>
  `;
}

/* =========================
   LESSON QUIZ
========================= */

function startLessonQuiz(id) {
  const lesson = lessons.find(x => x.id === id);
  if (!lesson) return;

  const questions = [...lesson.words]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(5, lesson.words.length));

  let current = 0;
  let score = 0;

  const container = $("lessonContent");

  function showQuestion() {
    const word = questions[current];

    let options = [word[2]];

    const allMeanings = Object.values(hskVocabulary)
      .flat()
      .map(x => x[2])
      .filter(x => x !== word[2]);

    while (options.length < 4 && allMeanings.length) {
      const random =
        allMeanings[Math.floor(Math.random() * allMeanings.length)];

      if (!options.includes(random)) options.push(random);
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-progress">
          السؤال ${current + 1} من ${questions.length}
        </div>

        <h2>ماذا تعني الكلمة؟</h2>

        <div class="quiz-word">${word[0]}</div>
        <div class="quiz-pinyin">${word[1]}</div>

        <button class="listen-btn" onclick="speakChinese('${word[0]}')">
          🔊 استمع
        </button>

        <div class="quiz-options">
          ${options.map(option => `
            <button onclick="answerLessonQuestion(
              '${encodeURIComponent(option)}',
              '${encodeURIComponent(word[2])}',
              ${id}
            )">
              ${option}
            </button>
          `).join("")}
        </div>
      </div>
    `;

    window.answerLessonQuestion = function(selected, correct, lessonId) {
      selected = decodeURIComponent(selected);
      correct = decodeURIComponent(correct);

      if (selected === correct) {
        score++;
        addXP(10);

        container.innerHTML = `
          <div class="success-box">
            <div class="big-icon">✅</div>
            <h2>إجابة صحيحة!</h2>
            <p>ممتاز جدًا! استمري 🔥</p>
            <button class="primary-btn" onclick="nextLessonQuestion()">
              التالي
            </button>
          </div>
        `;

        window.nextLessonQuestion = function() {
          current++;

          if (current >= questions.length) {
            finishLessonQuiz(id, score, questions.length);
          } else {
            showQuestion();
          }
        };

      } else {
        addToReview(correct);

        container.innerHTML = `
          <div class="wrong-box">
            <div class="big-icon">💪</div>
            <h2>مش مشكلة!</h2>
            <p>الإجابة الصحيحة هي:</p>
            <strong>${correct}</strong>
            <p>أضفنا الكلمة للمراجعة 🔁</p>
            <button class="primary-btn" onclick="nextLessonQuestion()">
              حاول تاني
            </button>
          </div>
        `;

        window.nextLessonQuestion = function() {
          current++;

          if (current >= questions.length) {
            finishLessonQuiz(id, score, questions.length);
          } else {
            showQuestion();
          }
        };
      }
    };
  }

  showQuestion();
}

function finishLessonQuiz(id, score, total) {
  const passed = score >= Math.ceil(total * 0.6);

  if (passed) {
    if (!state.completedLessons.includes(id)) {
      state.completedLessons.push(id);
      addXP(50);
    }

    updateStreak();
    saveState();

    $("lessonContent").innerHTML = `
      <div class="success-box">
        <div class="big-icon">🎉</div>
        <h2>أحسنتِ!</h2>
        <p>اجتزتِ الاختبار بنجاح.</p>
        <h3>${score} / ${total}</h3>
        <p>+50 XP 🏆</p>

        <button class="primary-btn" onclick="showPage('lessons')">
          العودة للدروس
        </button>
      </div>
    `;

    renderLessons();

  } else {
    $("lessonContent").innerHTML = `
      <div class="wrong-box">
        <div class="big-icon">💪</div>
        <h2>قريبة جدًا!</h2>
        <p>حاولي مراجعة الكلمات ثم أعيدي الاختبار.</p>
        <h3>${score} / ${total}</h3>

        <button class="primary-btn" onclick="startLessonQuiz(${id})">
          إعادة الاختبار 🔄
        </button>
      </div>
    `;
  }

  updateStats();
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
  const container = $("reviewList");
  if (!container) return;

  if (!state.review.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div>🎉</div>
        <h3>لا توجد كلمات للمراجعة</h3>
        <p>أكمل الاختبارات وستظهر الكلمات التي تحتاج مراجعة هنا.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.review.map(word => {
    const found = Object.values(hskVocabulary)
      .flat()
      .find(x => x[0] === word);

    if (!found) return "";

    return `
      <div class="review-card">
        <div>
          <strong>${found[0]}</strong>
          <span>${found[1]}</span>
          <small>${found[2]}</small>
        </div>

        <div>
          <button onclick="speakChinese('${found[0]}')">🔊</button>
          <button onclick="removeReview('${found[0]}')">✓</button>
        </div>
      </div>
    `;
  }).join("");
}

function removeReview(word) {
  state.review = state.review.filter(x => x !== word);
  saveState();
  renderReview();
  addXP(5);
}

/* =========================
   FAVORITES
========================= */

function toggleFavorite(word) {
  if (state.favorites.includes(word)) {
    state.favorites = state.favorites.filter(x => x !== word);
  } else {
    state.favorites.push(word);
  }

  saveState();
  renderLessons();
}

/* =========================
   HSK PAGE
========================= */

function renderHSK() {
  const container = $("hskContent");
  if (!container) return;

  container.innerHTML = [1,2,3,4,5,6].map(level => {
    const count = hskVocabulary[level].length;

    return `
      <div class="hsk-card" onclick="showHSKWords(${level})">
        <div class="hsk-number">HSK ${level}</div>
        <div>
          <h3>المستوى ${level}</h3>
          <p>${count} كلمة متاحة حاليًا</p>
        </div>
        <span>›</span>
      </div>
    `;
  }).join("");
}

function showHSKWords(level) {
  const words = hskVocabulary[level];

  const container = $("hskContent");

  container.innerHTML = `
    <button class="back-btn" onclick="renderHSK()">← رجوع</button>

    <h2>HSK ${level}</h2>
    <p>مفردات المستوى</p>

    <div class="vocabulary-grid">
      ${words.map(word => `
        <div class="vocab-card">
          <div class="hanzi">${word[0]}</div>
          <div class="pinyin">${word[1]}</div>
          <div class="meaning">${word[2]}</div>
          <button onclick="speakChinese('${word[0]}')">🔊</button>
        </div>
      `).join("")}
    </div>
  `;
}

/* =========================
   TESTS
========================= */

function renderTests() {
  const container = $("testsContent");
  if (!container) return;

  container.innerHTML = `
    <div class="tests-header">
      <span class="hsk-badge">اختبارات</span>
      <h2>اختبر مستواك 🧠</h2>
      <p>اختبارات منفصلة بعيدًا عن الدروس.</p>
    </div>

    <div class="test-card" onclick="startGeneralTest(1)">
      <div class="test-icon">🇨🇳</div>
      <div>
        <h3>اختبار HSK 1</h3>
        <p>10 أسئلة للمبتدئين</p>
      </div>
    </div>

    <div class="test-card" onclick="startGeneralTest(2)">
      <div class="test-icon">📚</div>
      <div>
        <h3>اختبار HSK 2</h3>
        <p>10 أسئلة</p>
      </div>
    </div>

    <div class="test-card" onclick="startGeneralTest(3)">
      <div class="test-icon">🔥</div>
      <div>
        <h3>اختبار HSK 3</h3>
        <p>10 أسئلة</p>
      </div>
    </div>

    <div class="test-card" onclick="startGeneralTest(4)">
      <div class="test-icon">🎯</div>
      <div>
        <h3>اختبار HSK 4</h3>
        <p>10 أسئلة</p>
      </div>
    </div>

    <div class="test-card" onclick="startGeneralTest(5)">
      <div class="test-icon">🚀</div>
      <div>
        <h3>اختبار HSK 5</h3>
        <p>10 أسئلة</p>
      </div>
    </div>

    <div class="test-card" onclick="startGeneralTest(6)">
      <div class="test-icon">👑</div>
      <div>
        <h3>اختبار HSK 6</h3>
        <p>10 أسئلة متقدمة</p>
      </div>
    </div>

    <div class="test-card" onclick="startMixedTest()">
      <div class="test-icon">🎲</div>
      <div>
        <h3>اختبار عشوائي</h3>
        <p>أسئلة من مستويات مختلفة</p>
      </div>
    </div>
  `;
}

function startGeneralTest(level) {
  const words = [...hskVocabulary[level]]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  runTest(words, `HSK ${level}`);
}

function startMixedTest() {
  const words = Object.values(hskVocabulary)
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  runTest(words, "اختبار عشوائي");
}

function runTest(words, title) {
  let current = 0;
  let score = 0;

  const container = $("testsContent");

  function question() {
    const word = words[current];

    let options = [word[2]];

    const pool = Object.values(hskVocabulary)
      .flat()
      .map(x => x[2])
      .filter(x => x !== word[2]);

    while (options.length < 4) {
      const random = pool[Math.floor(Math.random() * pool.length)];

      if (!options.includes(random)) {
        options.push(random);
      }
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="quiz-box">
        <div class="quiz-progress">
          ${title} — ${current + 1} / ${words.length}
        </div>

        <h2>اختر المعنى الصحيح</h2>

        <div class="quiz-word">${word[0]}</div>
        <div class="quiz-pinyin">${word[1]}</div>

        <button class="listen-btn"
          onclick="speakChinese('${word[0]}')">
          🔊 استماع
        </button>

        <div class="quiz-options">
          ${options.map(option => `
            <button class="test-option"
              data-answer="${encodeURIComponent(option)}">
              ${option}
            </button>
          `).join("")}
        </div>
      </div>
    `;

    document.querySelectorAll(".test-option").forEach(btn => {
      btn.onclick = () => {
        const answer = decodeURIComponent(btn.dataset.answer);

        if (answer === word[2]) {
          score++;
          addXP(10);
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
          addToReview(word[0]);
        }

        document.querySelectorAll(".test-option")
          .forEach(b => b.disabled = true);

        setTimeout(() => {
          current++;

          if (current >= words.length) {
            finishGeneralTest(score, words.length, title);
          } else {
            question();
          }
        }, 700);
      };
    });
  }

  question();
}

function finishGeneralTest(score, total, title) {
  const percentage = Math.round((score / total) * 100);

  state.testScores.push({
    title,
    score,
    total,
    date: new Date().toISOString()
  });

  saveState();
  updateStreak();

  $("testsContent").innerHTML = `
    <div class="success-box">
      <div class="big-icon">
        ${percentage >= 80 ? "🏆" : percentage >= 60 ? "🎉" : "💪"}
      </div>

      <h2>انتهى الاختبار!</h2>

      <p>${title}</p>

      <div class="test-result">
        <strong>${score} / ${total}</strong>
        <span>${percentage}%</span>
      </div>

      <p>
        ${
          percentage >= 80
            ? "ممتاز! مستواك رائع 🔥"
            : percentage >= 60
            ? "جيد جدًا! استمري في التدريب 🌱"
            : "مفيش مشكلة، المراجعة هتساعدك تتحسني ❤️"
        }
      </p>

      <button class="primary-btn" onclick="renderTests()">
        العودة للاختبارات
      </button>
    </div>
  `;
}

/* =========================
   SPEECH
========================= */

function speakChinese(text) {
  if (!("speechSynthesis" in window)) {
    alert("متصفحك لا يدعم النطق الصوتي.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.8;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

/* =========================
   LOGIN
========================= */

function setupLogin() {
  if (state.loggedIn) return;

  const overlay = document.createElement("div");
  overlay.id = "loginOverlay";

  overlay.innerHTML = `
    <div class="login-box">
      <div class="login-logo">中</div>

      <h2>مرحبًا بك في Chinese Buddy 🇨🇳</h2>
      <p>أنشئي حسابك واحفظي تقدمك على هذا الجهاز.</p>

      <input id="loginName"
        type="text"
        placeholder="اسم المستخدم">

      <input id="loginEmail"
        type="email"
        placeholder="البريد الإلكتروني">

      <input id="loginPassword"
        type="password"
        placeholder="كلمة المرور">

      <button id="loginBtn" class="primary-btn">
        إنشاء الحساب / تسجيل الدخول
      </button>

      <small>
        النسخة الحالية تحفظ الحساب محليًا على هذا الجهاز.
      </small>
    </div>
  `;

  document.body.appendChild(overlay);

  $("loginBtn").onclick = () => {
    const name = $("loginName").value.trim();
    const email = $("loginEmail").value.trim();
    const password = $("loginPassword").value;

    if (!name || !email || !password) {
      alert("من فضلك املئي البيانات كلها.");
      return;
    }

    state.loggedIn = true;
    state.username = name;

    saveState();
    overlay.remove();

    showWelcomeMessage();
  };
}

function showWelcomeMessage() {
  setTimeout(() => {
    alert(`أهلًا ${state.username} ❤️ جاهزة نبدأ رحلة الصينية؟ 🇨🇳`);
  }, 300);
}

/* =========================
   NOTIFICATIONS
========================= */

async function requestNotifications() {
  if (!("Notification" in window)) {
    alert("المتصفح لا يدعم الإشعارات.");
    return;
  }

  if (Notification.permission === "granted") {
    state.notifications = true;
    saveState();
    return;
  }

  if (Notification.permission === "denied") {
    alert("الإشعارات مرفوضة من إعدادات المتصفح.");
    return;
  }

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    state.notifications = true;
    saveState();

    new Notification("Chinese Buddy 🇨🇳", {
      body: "ممتاز! سنذكرك بالاستمرار في تعلم الصينية 🔥"
    });
  }
}

/* =========================
   ADD NOTIFICATION BUTTON
========================= */

function addNotificationButton() {
  if (document.getElementById("notificationBtn")) return;

  const btn = document.createElement("button");
  btn.id = "notificationBtn";
  btn.className = "notification-floating";
  btn.innerHTML = "🔔";
  btn.title = "تفعيل الإشعارات";

  btn.onclick = requestNotifications;

  document.body.appendChild(btn);
}

/* =========================
   LANGUAGE
========================= */

function setupLanguage() {
  const btn = $("langBtn");

  if (!btn) return;

  btn.onclick = () => {
    alert(
      "تبديل العربية والإنجليزية سيكون في التحديث القادم مع ترجمة واجهة التطبيق بالكامل."
    );
  };
}

/* =========================
   THEME
========================= */

function setupTheme() {
  const btn = $("themeBtn");

  if (!btn) return;

  const savedTheme = localStorage.getItem("cb_theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  btn.onclick = () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "cb_theme",
      document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );
  };
}

/* =========================
   DYNAMIC PAGES
========================= */

function createExtraPages() {

  if (!$("testsPage")) {
    const page = document.createElement("section");

    page.id = "testsPage";
    page.className = "page";
    page.style.display = "none";

    page.innerHTML = `
      <div id="testsContent"></div>
    `;

    document.querySelector("main")?.appendChild(page);
  }

  if (!$("hskPage")) {
    const page = document.createElement("section");

    page.id = "hskPage";
    page.className = "page";
    page.style.display = "none";

    page.innerHTML = `
      <div id="hskContent"></div>
    `;

    document.querySelector("main")?.appendChild(page);
  }
}

/* =========================
   ADD NAVIGATION
========================= */

function addExtraNavigation() {

  const nav = document.querySelector(".bottom-nav");

  if (!nav) return;

  if (!nav.querySelector('[data-page="tests"]')) {
    const btn = document.createElement("button");

    btn.className = "nav-btn";
    btn.dataset.page = "tests";

    btn.innerHTML = `
      <span>📝</span>
      <small>اختبارات</small>
    `;

    btn.onclick = () => showPage("tests");

    nav.appendChild(btn);
  }

  if (!nav.querySelector('[data-page="hsk"]')) {
    const btn = document.createElement("button");

    btn.className = "nav-btn";
    btn.dataset.page = "hsk";

    btn.innerHTML = `
      <span>🇨🇳</span>
      <small>HSK</small>
    `;

    btn.onclick = () => showPage("hsk");

    nav.appendChild(btn);
  }
}

/* =========================
   HOME
========================= */

function updateHome() {

  if ($("dailyMotivation")) {
    $("dailyMotivation").textContent = randomQuote();
  }

  updateStats();
}

/* =========================
   START APP
========================= */

function startApp() {

  createExtraPages();
  addExtraNavigation();

  updateStreak();
  updateHome();
  renderLessons();
  renderReview();
  renderTests();
  renderHSK();

  setupTheme();
  setupLanguage();

  addNotificationButton();

  if (!state.loggedIn) {
    setupLogin();
  }
}

/* =========================
   LOADING SCREEN
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const loadingScreen = $("loadingScreen");

  if ($("loadingQuote")) {
    $("loadingQuote").textContent = randomQuote();
  }

  setTimeout(() => {

    if (loadingScreen) {
      loadingScreen.style.opacity = "0";

      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 400);
    }

    startApp();

  }, 1200);
});
