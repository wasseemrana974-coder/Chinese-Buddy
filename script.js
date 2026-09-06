const quotes = [
  "خذ خطوة صغيرة لتقربك أكثر ❤️",
  "لا تجعل الخوف من الخطأ يهدم حلمك كاملًا 🌱",
  "每一天都比昨天更好 — كل يوم أنت أفضل من أمس ✨",
  "الغلط جزء طبيعي من التعلم 💪",
  "استمر، حتى لو بخطوة واحدة اليوم 🚀"
];

const lessons = [
  {
    id: 1,
    title: "التحية والتعارف",
    description: "تعلم أول كلماتك بالصينية",
    words: [
      { chinese: "你好", pinyin: "nǐ hǎo", meaning: "مرحبًا" },
      { chinese: "早上好", pinyin: "zǎoshang hǎo", meaning: "صباح الخير" },
      { chinese: "谢谢", pinyin: "xièxie", meaning: "شكرًا" },
      { chinese: "再见", pinyin: "zàijiàn", meaning: "إلى اللقاء" }
    ]
  },
  {
    id: 2,
    title: "الأكل والشرب",
    description: "كلمات تستخدمها كل يوم",
    words: [
      { chinese: "吃", pinyin: "chī", meaning: "يأكل" },
      { chinese: "喝", pinyin: "hē", meaning: "يشرب" },
      { chinese: "水", pinyin: "shuǐ", meaning: "ماء" },
      { chinese: "茶", pinyin: "chá", meaning: "شاي" },
      { chinese: "咖啡", pinyin: "kāfēi", meaning: "قهوة" }
    ]
  },
  {
    id: 3,
    title: "المدرسة والدراسة",
    description: "تحدث عن المدرسة والتعلم",
    words: [
      { chinese: "学校", pinyin: "xuéxiào", meaning: "مدرسة" },
      { chinese: "学习", pinyin: "xuéxí", meaning: "يدرس / يتعلم" },
      { chinese: "中文", pinyin: "Zhōngwén", meaning: "اللغة الصينية" },
      { chinese: "朋友", pinyin: "péngyou", meaning: "صديق" },
      { chinese: "家", pinyin: "jiā", meaning: "بيت / منزل" }
    ]
  }
];

const stories = [
  {
    title: "يومي البسيط",
    chinese: "早上好！我在家。我喝水，然后去学校。",
    meaning: "صباح الخير! أنا في المنزل. أشرب الماء، ثم أذهب إلى المدرسة."
  },
  {
    title: "في المدرسة",
    chinese: "我在学校学习中文。我和我的朋友一起学习。",
    meaning: "أنا في المدرسة أدرس الصينية. أدرس مع صديقي."
  }
];

let state = JSON.parse(localStorage.getItem("chineseBuddyState")) || {
  xp: 0,
  streak: 0,
  completedLessons: [],
  review: [],
  lastDate: null
};

function saveState() {
  localStorage.setItem("chineseBuddyState", JSON.stringify(state));
}

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateStats() {
  document.getElementById("xpValue").textContent = state.xp;
  document.getElementById("profileXP").textContent = state.xp;

  const level = Math.floor(state.xp / 100) + 1;

  document.getElementById("levelValue").textContent = level;
  document.getElementById("profileLevel").textContent = level;

  document.getElementById("streakValue").textContent = state.streak;

  document.getElementById("completedLessons").textContent =
    state.completedLessons.length;

  const progress = Math.min(
    state.completedLessons.length * 33,
    100
  );

  document.getElementById("goalProgress").textContent = progress + "%";

  document.getElementById("goalText").textContent =
    progress >= 100
      ? "أحسنت! أنهيت هدف اليوم 🎉"
      : "أكمل درسًا جديدًا اليوم";
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageId === "lessonsPage") {
    renderLessons();
  }

  if (pageId === "reviewPage") {
    renderReview();
  }

  if (pageId === "storiesPage") {
    renderStories();
  }

  if (pageId === "profilePage") {
    updateStats();
  }
}

function renderLessons() {
  const containers = [
    document.getElementById("lessonList"),
    document.getElementById("allLessons")
  ];

  containers.forEach(container => {
    if (!container) return;

    container.innerHTML = "";

    lessons.forEach(lesson => {
      const completed = state.completedLessons.includes(lesson.id);

      const card = document.createElement("div");
      card.className = "lesson-card";

      card.innerHTML = `
        <div>
          <h3>${completed ? "✅ " : ""}${lesson.title}</h3>
          <p>${lesson.description}</p>
        </div>

        <button onclick="openLesson(${lesson.id})">
          ${completed ? "مراجعة" : "ابدأ"}
        </button>
      `;

      container.appendChild(card);
    });
  });
}

function openLesson(id) {
  const lesson = lessons.find(l => l.id === id);

  if (!lesson) return;

  const content = document.getElementById("lessonContent");

  content.innerHTML = `
    <h1>${lesson.title}</h1>
    <p>${lesson.description}</p>

    <div id="lessonWords"></div>

    <div class="quiz-box">
      <h2>📝 اختبار الدرس</h2>
      <div id="quiz"></div>
    </div>
  `;

  const wordsContainer = document.getElementById("lessonWords");

  lesson.words.forEach(word => {
    const card = document.createElement("div");
    card.className = "word-card";

    card.innerHTML = `
      <div class="chinese-word">${word.chinese}</div>
      <div class="pinyin">${word.pinyin}</div>
      <div class="meaning">${word.meaning}</div>

      <button class="audio-btn"
        onclick="speakChinese('${word.chinese}')">
        🔊 استمع
      </button>
    `;

    wordsContainer.appendChild(card);
  });

  createQuiz(lesson);

  showPage("lessonPage");
}

function createQuiz(lesson) {
  const quiz = document.getElementById("quiz");

  const word =
    lesson.words[Math.floor(Math.random() * lesson.words.length)];

  let options = lesson.words
    .filter(w => w.meaning !== word.meaning)
    .slice(0, 2)
    .map(w => w.meaning);

  options.push(word.meaning);

  options = options.sort(() => Math.random() - 0.5);

  quiz.innerHTML = `
    <p>ماذا تعني الكلمة:</p>
    <h2>${word.chinese}</h2>
    <div id="quizOptions"></div>
  `;

  const optionsContainer = document.getElementById("quizOptions");

  options.forEach(option => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = option;

    button.onclick = () => {
      if (option === word.meaning) {
        button.textContent = "✅ صحيح!";

        completeLesson(lesson.id);

        setTimeout(() => {
          alert("أحسنت! 🎉 استمري، أنتِ تتقدمين!");
        }, 100);
      } else {
        button.textContent = "❌ حاول مرة أخرى";

        if (!state.review.some(w => w.chinese === word.chinese)) {
          state.review.push(word);
          saveState();
        }
      }
    };

    optionsContainer.appendChild(button);
  });
}

function completeLesson(id) {
  if (!state.completedLessons.includes(id)) {
    state.completedLessons.push(id);
    state.xp += 50;

    updateStreak();

    saveState();
    updateStats();
    renderLessons();
  }
}

function updateStreak() {
  const today = new Date().toDateString();

  if (state.lastDate !== today) {
    state.streak += 1;
    state.lastDate = today;
  }
}

function renderReview() {
  const container = document.getElementById("reviewList");

  if (!container) return;

  container.innerHTML = "";

  if (state.review.length === 0) {
    container.innerHTML = `
      <div class="review-card">
        <h3>🎉 لا توجد كلمات للمراجعة</h3>
        <p>ممتاز! استمر في التعلم.</p>
      </div>
    `;

    return;
  }

  state.review.forEach((word, index) => {
    const card = document.createElement("div");

    card.className = "review-card";

    card.innerHTML = `
      <strong>${word.chinese}</strong>
      <p>${word.pinyin}</p>
      <p>${word.meaning}</p>

      <button class="audio-btn"
        onclick="speakChinese('${word.chinese}')">
        🔊 استمع
      </button>

      <div class="review-actions">
        <button onclick="removeReview(${index})">
          سهل 👍
        </button>

        <button onclick="keepReview(${index})">
          صعب 🔄
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function removeReview(index) {
  state.review.splice(index, 1);
  saveState();
  renderReview();
}

function keepReview(index) {
  state.xp += 5;
  saveState();
  updateStats();

  alert("ممتاز! هنراجع الكلمة مرة أخرى 🔄");
}

function renderStories() {
  const container = document.getElementById("storiesList");

  if (!container) return;

  container.innerHTML = "";

  stories.forEach(story => {
    const card = document.createElement("div");

    card.className = "story-card";

    card.innerHTML = `
      <h3>${story.title}</h3>

      <p>
        ${story.chinese}
      </p>

      <p>
        ${story.meaning}
      </p>

      <button onclick="speakChinese('${story.chinese}')">
        🔊 استمع
      </button>
    `;

    container.appendChild(card);
  });
}

function speakChinese(text) {
  if (!("speechSynthesis" in window)) {
    alert("المتصفح لا يدعم تشغيل الصوت.");
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "zh-CN";
  speech.rate = 0.8;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");

  const message = input.value.trim();

  if (!message) return;

  const userMessage = document.createElement("div");

  userMessage.className = "user-message";
  userMessage.textContent = message;

  box.appendChild(userMessage);

  input.value = "";

  setTimeout(() => {
    const bot = document.createElement("div");

    bot.className = "bot-message";

    const replies = [
      "很好！👏",
      "不错！继续练习 💪",
      "非常好！🌟",
      "你做得很好！继续学习中文 🇨🇳"
    ];

    bot.textContent =
      replies[Math.floor(Math.random() * replies.length)];

    box.appendChild(bot);

    box.scrollTop = box.scrollHeight;
  }, 500);
}

function setupTheme() {
  const themeBtn = document.getElementById("themeBtn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "chineseBuddyDark",
      document.body.classList.contains("dark")
    );

    themeBtn.textContent =
      document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
  });

  if (localStorage.getItem("chineseBuddyDark") === "true") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }
}

function setupLanguage() {
  const langBtn = document.getElementById("langBtn");

  langBtn.addEventListener("click", () => {
    alert("نسخة English الكاملة قادمة قريبًا 🚀");
  });
}

function startApp() {
  document.getElementById("loadingQuote").textContent =
    randomQuote();

  document.getElementById("dailyMotivation").textContent =
    randomQuote();

  updateStats();
  renderLessons();
  renderStories();
  renderReview();

  setupTheme();
  setupLanguage();

  setTimeout(() => {
    document.getElementById("loadingScreen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }, 1500);
}

document.addEventListener("DOMContentLoaded", startApp);
