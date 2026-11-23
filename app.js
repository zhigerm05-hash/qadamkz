const STORAGE_KEY = "qadam_platform_v5";

const INITIAL_DB = {
  devAccount: {
    login: "zhiger_dev",
    pass: "qadam2026"
  },
  contacts: {
    email: "zhigerm05@gmail.com",
    kaspiOwner: "Жігер М.",
    hiddenWaPhone: "77472041231",
    hiddenKaspiRequisite: "Жобаны қолдау реквизиті (Жігер М.)"
  },
  mission: {
    title: "«QADAM» — Саналы өмір мен рухани кемелдіктің баспалдағы",
    body: "Халқымыздың рухани темірқазығы Абай: «Еңбек етсең ерінбей, тояды қарның тіленбей» — деп, білім мен еңбектің, тұрақты істің қадірін өсиет етеді. Шәкәрім бабамыз жан тазалығы мен ар-ұятты күнделікті еңбекпен тәрбиелеуді үндесе, Алаш қайраткері Әлихан Бөкейхан ұлтқа қызмет етудің басты шарты — өзіңді тәртіпке салу мен жүйелі іс екенін көрсетті. Мағжан Жұмабаев: «Мен жастарға сенемін!» — деп, жігері тасыған жас буынның табандылығынан болашақтың нұрын көрді.",
    interest: "«QADAM» жобасының мүддесі — құрғақ уәдеден гөрі күнделікті кішкентай, бірақ үздіксіз қадамдар арқылы адамның ой-өрісін, денсаулығын және өмірлік тәртібін орнықтыру. Бүгін қойылған бір саналы қадам ертеңгі өмірдің берік діңгегіне айналады."
  },
  quotes: [
    {
      text: "«Адамның адамшылығы — ақыл, ғылым, жақсы ата, жақсы ана, жақсы құрбы, жақсы ұстаздан болады.»",
      author: "Абай Құнанбайұлы"
    },
    {
      text: "«Күн сайын жасалған кішкентай іс — үлкен табыстың іргетасы.»",
      author: "Тәртіп қағидасы"
    },
    {
      text: "«Тәртіпке бағынған адам ешқашан жолдан адаспайды.»",
      author: "Бауыржан Момышұлы"
    },
    {
      text: "«Ерінбей еңбек еткеннің еңсесі қашанда биік.»",
      author: "Халық нақылы"
    }
  ],
  thinkers: [
    {
      name: "Абай Құнанбайұлы",
      tag: "Рух және Еңбек",
      quote: "«Еңбек етсең ерінбей, тояды қарның тіленбей.»",
      fact: "Күнделікті ізденіс пен өзін-өзі тексеру («талап, еңбек, терең ой, қанағат, рақым») өмірлік тәртіптің өзегі ретінде қарастырылады.",
      tip: "Кеңес: Күн сайын аз болса да білім мен еңбекке уақыт бөліп, кешке өзіңе әділ есеп бер."
    },
    {
      name: "Шәкәрім Құдайбердіұлы",
      tag: "Ар мен Тәртіп",
      quote: "«Таза ақылмен ойланып, ар тазалығын күнделікті іспен сақтау керек.»",
      fact: "Ой тазалығы мен іс үйлесімін тұрақты тәрбиелеу адамның ішкі тепе-теңдігін нығайтады.",
      tip: "Кеңес: Әдеттің санын көбейтпей, оны адал әрі сапалы орындауға мән бер."
    },
    {
      name: "Әлихан Бөкейхан",
      tag: "Жүйелілік",
      quote: "«Өз ісін жүйемен және жауапкершілікпен атқарған адам нәтижеге жетеді.»",
      fact: "Ұйымдастырушылық пен нақты жоспарлау ортақ әрі жеке істердегі басты тірек болған.",
      tip: "Кеңес: Келесі күннің негізгі ісін алдын ала белгілеп, уақытты шашыратпа."
    },
    {
      name: "Бауыржан Момышұлы",
      tag: "Темірдей Тәртіп",
      quote: "«Тәртіпке бағынған адам ешқашан жолдан адаспайды.»",
      fact: "Күнделікті режим мен ішкі жинақылық кез келген қиындықта сенімді тірек болады.",
      tip: "Кеңес: Көңіл-күйге тәуелді болмай, белгіленген уақытта әдетті орындауға дағдылан."
    },
    {
      name: "Джеймс Клир",
      tag: "Атомдық Әдеттер",
      quote: "«Біз мақсат деңгейіне көтерілмейміз — әдеттеріміздің деңгейіне түсеміз.»",
      fact: "Күн сайын 1% жақсару бір жылда айтарлықтай өсім береді; жаңа әдетті 2 минуттық жеңіл қадамнан бастау оңай.",
      tip: "Кеңес: Жаңа әдетті «бар болған істен кейін» байлап қой (мысалы, таңғы шайдан кейін 10 минут оқу)."
    },
    {
      name: "Чарлз Дахигг",
      tag: "Әдет Ілмегі",
      quote: "«Әдетті жою оңай емес, оны басқа пайдалы әдетпен алмастыру тиімді.»",
      fact: "Әдет белгі (сигнал), әрекет және марапаттан тұратын тұрақты цикл арқылы жұмыс істейді.",
      tip: "Кеңес: Әдетті бұзатын себепті байқасаң, сол сәттегі әрекетті пайдалы баламаға ауыстыр."
    },
    {
      name: "Брайан Трейси",
      tag: "Басымдық",
      quote: "«Күннің ең маңызды әрі күрделі қадамын алдымен орында.»",
      fact: "Басты тапсырманы ертерек аяқтау күн бойы серпін беріп, кейінгі істерді жеңілдетеді.",
      tip: "Кеңес: Таңертең ең маңызды бір әдетті бірінші орындап ал."
    },
    {
      name: "Кэл Ньюпорт",
      tag: "Терең Зейін",
      quote: "«Терең әрі үзіліссіз зейін қазіргі ең құнды дағдылардың бірі.»",
      fact: "Хабарламалар мен бөгде істерді уақытша өшіру аз уақытта көп нәтиже беруге көмектеседі.",
      tip: "Кеңес: Әдетті орындау кезінде телефонды бөлек қойып, 20–25 минут тек сол іске назар аудар."
    },
    {
      name: "Эндрю Хуберман",
      tag: "Биологиялық Ырғақ",
      quote: "«Тұрақты ұйқы және күндізгі жарық ырғағы ми мен дененің қуатын реттейді.»",
      fact: "Ояну мен ұйықтау уақытының тұрақтылығы зейін мен энергия деңгейін тұрақтандырады.",
      tip: "Кеңес: Ұйқыдан тұрған соң күннің жарығына шығып, күн режимін бірқалыпты ұста."
    },
    {
      name: "Бенджамин Франклин",
      tag: "Күнделікті Өзін-Өзі Тексеру",
      quote: "«Уақытты үнемдеу — өмірді дұрыс құрудың бастауы.»",
      fact: "Күнделікті қысқа кесте мен кешкі қорытынды өзін-өзі тәрбиелеудің тиімді құралы болған.",
      tip: "Кеңес: Ұйықтар алдында бүгін қандай әдет орындалғанын және ертең нені жақсарту керегін белгіле."
    }
  ],
  categories: [
    "Білім және Рух",
    "Денсаулық және Қуат",
    "Еңбек және Жоба",
    "Тәртіп және Тыныштық"
  ],
  users: [],
  feedbacks: [],
  securityLogs: [],
  issues: [
    {
      id: "iss_init_1",
      source: "Жүйелік бақылау",
      title: "Қосымша сурет/CSV файлдары салынбаған кезде резервтік күй көрсетілуі",
      date: "2026-11-23",
      fixed: true
    }
  ],
  session: null,
  userData: {}
};

let db = loadDB();
let quoteIndex = 0;
let suggestedHabit = null;
let sentimentPipeline = null;

function loadDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(INITIAL_DB);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(INITIAL_DB),
      ...parsed,
      devAccount: { ...INITIAL_DB.devAccount, ...(parsed.devAccount || {}) },
      contacts: { ...INITIAL_DB.contacts, ...(parsed.contacts || {}) },
      mission: { ...INITIAL_DB.mission, ...(parsed.mission || {}) },
      thinkers: Array.isArray(parsed.thinkers) && parsed.thinkers.length > 0 ? parsed.thinkers : structuredClone(INITIAL_DB.thinkers)
    };
  } catch {
    return structuredClone(INITIAL_DB);
  }
}

function saveDB() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function logSecurity(eventText) {
  db.securityLogs.unshift({
    time: new Date().toLocaleString("kk-KZ"),
    event: eventText
  });
  db.securityLogs = db.securityLogs.slice(0, 25);
}

function recordIssue(source, title) {
  db.issues.unshift({
    id: `iss_${Date.now()}`,
    source,
    title,
    date: new Date().toLocaleString("kk-KZ"),
    fixed: false
  });
}

function ensureUserRecord(login) {
  if (!db.userData[login]) {
    db.userData[login] = {
      habits: [
        { id: "h_1", title: "Таңғы 15 минут созылу және тыныс алу", category: "Денсаулық және Қуат", done: false },
        { id: "h_2", title: "20 бет кітап немесе мақала оқу", category: "Білім және Рух", done: false }
      ],
      routine: [
        { id: "r_1", time: "07:00", period: "Таңғы кезең", task: "Ояну, су ішу, күн жоспарын қарау" },
        { id: "r_2", time: "13:30", period: "Күндізгі кезең", task: "Негізгі оқу/жұмыс сессиясы және үзіліс" },
        { id: "r_3", time: "21:30", period: "Кешкі кезең", task: "Күнді қорытындылау және ұйқыға дайындық" }
      ]
    };
  }
  return db.userData[login];
}

// ==================== КІРУ ЖӘНЕ ТІРКЕЛУ ====================
const authTabs = document.querySelectorAll(".auth-tab");
const userLoginForm = document.getElementById("userLoginForm");
const userRegisterForm = document.getElementById("userRegisterForm");
const devLoginForm = document.getElementById("devLoginForm");

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const mode = tab.dataset.authMode;
    authTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
    userLoginForm.classList.toggle("is-hidden", mode !== "login");
    userRegisterForm.classList.toggle("is-hidden", mode !== "register");
    devLoginForm.classList.toggle("is-hidden", mode !== "developer");
  });
});

userRegisterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("regFullName").value.trim();
  const login = document.getElementById("regUsername").value.trim();
  const pass = document.getElementById("regPassword").value;
  const regMsg = document.getElementById("regMessage");
  regMsg.classList.add("is-hidden");

  if (!fullName || !login || pass.length < 4) {
    regMsg.textContent = "Аты-жөніңізді, логинді және кемінде 4 таңбадан тұратын парольді енгізіңіз.";
    regMsg.classList.remove("is-hidden");
    return;
  }

  const taken = db.users.some((u) => u.login.toLowerCase() === login.toLowerCase());
  if (taken || login.toLowerCase() === db.devAccount.login.toLowerCase()) {
    regMsg.textContent = "Бұл логин бос емес. Басқа логин жазыңыз.";
    regMsg.classList.remove("is-hidden");
    return;
  }

  db.users.push({
    fullName,
    login,
    pass,
    avatar: "",
    blocked: false,
    createdAt: new Date().toLocaleString("kk-KZ")
  });
  ensureUserRecord(login);
  db.session = { role: "user", login };
  logSecurity(`Жаңа қолданушы тіркелді: @${login}`);
  saveDB();
  userRegisterForm.reset();
  renderApp();
});

userLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value;
  const errBox = document.getElementById("loginError");
  errBox.classList.add("is-hidden");

  const user = db.users.find((u) => u.login === login && u.pass === pass);
  if (!user) {
    errBox.textContent = "Логин немесе құпия сөз қате.";
    errBox.classList.remove("is-hidden");
    return;
  }
  if (user.blocked) {
    errBox.textContent = "Бұл аккаунт әзірлеуші тарапынан уақытша бұғатталған.";
    errBox.classList.remove("is-hidden");
    return;
  }

  ensureUserRecord(user.login);
  db.session = { role: "user", login: user.login };
  logSecurity(`Қолданушы жүйеге кірді: @${user.login}`);
  saveDB();
  userLoginForm.reset();
  renderApp();
});

devLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = document.getElementById("devUsername").value.trim();
  const pass = document.getElementById("devPassword").value;
  const devErr = document.getElementById("devError");
  devErr.classList.add("is-hidden");

  if (login === db.devAccount.login && pass === db.devAccount.pass) {
    ensureUserRecord(db.devAccount.login);
    db.session = { role: "developer", login: db.devAccount.login };
    logSecurity(`Әзірлеуші панеліне кіру: @${login}`);
    saveDB();
    devLoginForm.reset();
    renderApp();
  } else {
    devErr.textContent = "Әзірлеуші логині немесе паролі қате.";
    devErr.classList.remove("is-hidden");
  }
});

document.getElementById("logoutButton").addEventListener("click", () => {
  if (db.session) logSecurity(`Жүйеден шығу: @${db.session.login}`);
  db.session = null;
  saveDB();
  renderApp();
});

// ==================== НАВИГАЦИЯ ЖӘНЕ БЕТТЕР ====================
const authScreen = document.getElementById("authScreen");
const mainApp = document.getElementById("mainApp");
const navBtns = document.querySelectorAll(".nav-btn");
const pageViews = document.querySelectorAll(".page-view");

function switchPage(pageName) {
  navBtns.forEach((btn) => btn.classList.toggle("is-active", btn.dataset.page === pageName));
  pageViews.forEach((view) => view.classList.toggle("is-active", view.id === `page-${pageName}`));
  if (pageName === "profile") renderProfilePage();
  if (pageName === "devpanel") renderDevAll();
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => switchPage(btn.dataset.page));
});

document.getElementById("goToHabitsBtn").addEventListener("click", () => switchPage("habits"));

function getActiveUserObj() {
  if (!db.session) return null;
  if (db.session.role === "developer") {
    return { fullName: `${db.contacts.kaspiOwner} (Әзірлеуші)`, login: db.devAccount.login, avatar: "" };
  }
  return db.users.find((u) => u.login === db.session.login) || null;
}

function renderContactsView() {
  const digits = String(db.contacts.hiddenWaPhone || "").replace(/\D/g, "");
  const waBtn = document.getElementById("waLinkBtn");
  if (waBtn) {
    const msg = encodeURIComponent("Сәлем! QADAM платформасы бойынша хабарласып тұрмын.");
    waBtn.href = digits ? `https://wa.me/${digits}?text=${msg}` : "#";
  }
  const ownerEl = document.getElementById("kaspiOwnerDisplay");
  if (ownerEl) ownerEl.textContent = db.contacts.kaspiOwner;

  const emailEl = document.getElementById("supportEmailDisplay");
  if (emailEl) emailEl.textContent = db.contacts.email;
}

function renderApp() {
  if (!db.session) {
    authScreen.classList.remove("is-hidden");
    mainApp.classList.add("is-hidden");
    return;
  }

  authScreen.classList.add("is-hidden");
  mainApp.classList.remove("is-hidden");

  const isDev = db.session.role === "developer";
  const activeUser = getActiveUserObj();

  document.getElementById("roleTag").textContent = isDev ? "ӘЗІРЛЕУШІ" : "ҚОЛДАНУШЫ";
  document.getElementById("currentUserName").textContent = activeUser ? activeUser.fullName : db.session.login;
  document.getElementById("habitsWelcomeHeading").textContent =
    `${activeUser ? activeUser.fullName : db.session.login} — Жеке әдеттер`;

  const headerAvatar = document.getElementById("headerAvatarImg");
  if (activeUser && activeUser.avatar) {
    headerAvatar.src = activeUser.avatar;
    headerAvatar.classList.remove("is-hidden");
  } else {
    headerAvatar.classList.add("is-hidden");
  }

  document.querySelectorAll(".dev-only-nav").forEach((el) => el.classList.toggle("is-hidden", !isDev));
  document.querySelectorAll(".user-only-nav").forEach((el) => el.classList.toggle("is-hidden", isDev));

  if (!isDev && document.getElementById("page-devpanel").classList.contains("is-active")) {
    switchPage("home");
  }

  renderHomeMissionAndQuote();
  renderContactsView();
  renderCategorySelect();
  renderHabits();
  renderRoutine();
  renderTenThinkers();
  updateOnlineAiBadge();
  if (isDev) renderDevAll();
}

// ==================== БАСТЫ БЕТ ====================
function renderHomeMissionAndQuote() {
  document.getElementById("homeMissionTitle").textContent = db.mission.title;
  document.getElementById("homeMissionBody").textContent = db.mission.body;
  document.getElementById("homeMissionInterest").textContent = db.mission.interest;

  const q = db.quotes[quoteIndex % db.quotes.length] || {
    text: "«Күн сайын жасалған кішкентай іс — үлкен табыстың іргетасы.»",
    author: "QADAM"
  };
  document.getElementById("dailyQuoteText").textContent = q.text;
  document.getElementById("dailyQuoteAuthor").textContent = `— ${q.author}`;
}

document.getElementById("nextQuoteBtn").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % db.quotes.length;
  renderHomeMissionAndQuote();
});

// ==================== ӘДЕТТЕР, КҮН РЕЖИМІ ЖӘНЕ 10 ТҰЛҒА ====================
function renderCategorySelect() {
  const sel = document.getElementById("habitCatSelect");
  sel.innerHTML = db.categories
    .map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`)
    .join("");
}

function renderHabits() {
  const rec = ensureUserRecord(db.session.login);
  const grid = document.getElementById("habitsGrid");
  grid.innerHTML = "";

  const doneCount = rec.habits.filter((h) => h.done).length;
  document.getElementById("habitsSummaryBadge").textContent = `${doneCount} / ${rec.habits.length} орындалды`;

  for (const h of rec.habits) {
    const card = document.createElement("article");
    card.className = `habit-item ${h.done ? "is-completed" : ""}`;
    card.innerHTML = `
      <div>
        <span class="tag-lime">${escapeHtml(h.category)}</span>
        <h3>${escapeHtml(h.title)}</h3>
      </div>
      <div class="habit-actions">
        <button type="button" class="btn-outline" data-act="toggle" data-id="${h.id}">
          ${h.done ? "Орындалды ✓" : "Орындалды деп белгілеу"}
        </button>
        <button type="button" class="btn-outline" data-act="del" data-id="${h.id}">Өшіру</button>
      </div>
    `;
    grid.appendChild(card);
  }

  grid.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = rec.habits.find((x) => x.id === btn.dataset.id);
      if (!item) return;
      if (btn.dataset.act === "toggle") item.done = !item.done;
      if (btn.dataset.act === "del") rec.habits = rec.habits.filter((x) => x.id !== item.id);
      saveDB();
      renderHabits();
    });
  });
}

document.getElementById("addHabitForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("habitNameInput");
  const title = input.value.trim();
  if (!title) return;
  const rec = ensureUserRecord(db.session.login);
  rec.habits.unshift({
    id: `h_${Date.now()}`,
    title,
    category: document.getElementById("habitCatSelect").value,
    done: false
  });
  input.value = "";
  saveDB();
  renderHabits();
});

function renderRoutine() {
  const rec = ensureUserRecord(db.session.login);
  const list = document.getElementById("routineList");
  list.innerHTML = "";

  const sorted = [...rec.routine].sort((a, b) => a.time.localeCompare(b.time));
  for (const r of sorted) {
    const row = document.createElement("div");
    row.className = "routine-card";
    row.innerHTML = `
      <div class="routine-meta">
        <strong class="routine-time">${escapeHtml(r.time)}</strong>
        <span class="tag-sky">${escapeHtml(r.period)}</span>
        <span>${escapeHtml(r.task)}</span>
      </div>
      <button type="button" class="btn-outline" data-del-r="${r.id}">Өшіру</button>
    `;
    list.appendChild(row);
  }

  list.querySelectorAll("[data-del-r]").forEach((btn) => {
    btn.addEventListener("click", () => {
      rec.routine = rec.routine.filter((x) => x.id !== btn.dataset.delR);
      saveDB();
      renderRoutine();
    });
  });
}

document.getElementById("addRoutineForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const time = document.getElementById("routineTimeInput").value;
  const period = document.getElementById("routinePeriodSelect").value;
  const taskInput = document.getElementById("routineTaskInput");
  const task = taskInput.value.trim();
  if (!time || !task) return;

  const rec = ensureUserRecord(db.session.login);
  rec.routine.push({ id: `r_${Date.now()}`, time, period, task });
  taskInput.value = "";
  saveDB();
  renderRoutine();
});

function renderTenThinkers() {
  const box = document.getElementById("thinkersGrid");
  if (!box) return;
  box.innerHTML = db.thinkers
    .map(
      (t, idx) => `
    <article class="thinker-card">
      <div class="thinker-top">
        <span class="tag-sky">${String(idx + 1).padStart(2, "0")} · ${escapeHtml(t.tag)}</span>
      </div>
      <h4 class="thinker-name">${escapeHtml(t.name)}</h4>
      <p class="thinker-quote">${escapeHtml(t.quote)}</p>
      <p class="thinker-fact">${escapeHtml(t.fact)}</p>
      <p class="thinker-tip">${escapeHtml(t.tip)}</p>
    </article>
  `
    )
    .join("");
}

// ==================== ПРОФИЛЬ БЕТІ ====================
function renderProfilePage() {
  const user = db.users.find((u) => u.login === db.session.login);
  if (!user) return;

  document.getElementById("editFullName").value = user.fullName;
  document.getElementById("editLogin").value = user.login;
  document.getElementById("editPassword").value = user.pass;

  const prevImg = document.getElementById("profileAvatarPreview");
  const placeholder = document.getElementById("profileAvatarPlaceholder");
  if (user.avatar) {
    prevImg.src = user.avatar;
    prevImg.classList.remove("is-hidden");
    placeholder.classList.add("is-hidden");
  } else {
    prevImg.classList.add("is-hidden");
    placeholder.classList.remove("is-hidden");
  }
}

document.getElementById("avatarFileInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const user = db.users.find((u) => u.login === db.session.login);
    if (!user) return;
    user.avatar = reader.result;
    logSecurity(`@${user.login} аватарка суретін жаңартты`);
    saveDB();
    renderProfilePage();
    renderApp();
    const msg = document.getElementById("avatarStatusMsg");
    msg.classList.remove("is-hidden");
    setTimeout(() => msg.classList.add("is-hidden"), 2500);
  };
  reader.readAsDataURL(file);
});

document.getElementById("profileEditForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = db.users.find((u) => u.login === db.session.login);
  if (!user) return;

  const newFullName = document.getElementById("editFullName").value.trim();
  const newLogin = document.getElementById("editLogin").value.trim();
  const newPass = document.getElementById("editPassword").value;
  const errBox = document.getElementById("profileErrMsg");
  const okBox = document.getElementById("profileOkMsg");
  errBox.classList.add("is-hidden");
  okBox.classList.add("is-hidden");

  if (!newFullName || !newLogin || newPass.length < 4) {
    errBox.textContent = "Барлық өрісті дұрыс толтырыңыз (пароль кемінде 4 таңба).";
    errBox.classList.remove("is-hidden");
    return;
  }

  const conflict = db.users.some(
    (u) => u !== user && u.login.toLowerCase() === newLogin.toLowerCase()
  );
  if (conflict || newLogin.toLowerCase() === db.devAccount.login.toLowerCase()) {
    errBox.textContent = "Бұл логин басқа қолданушыға тиесілі.";
    errBox.classList.remove("is-hidden");
    return;
  }

  const oldLogin = user.login;
  if (oldLogin !== newLogin && db.userData[oldLogin]) {
    db.userData[newLogin] = db.userData[oldLogin];
    delete db.userData[oldLogin];
  }

  user.fullName = newFullName;
  user.login = newLogin;
  user.pass = newPass;
  db.session.login = newLogin;

  logSecurity(`@${newLogin} логин/пароль немесе профиль деректерін өзгертті`);
  saveDB();
  renderApp();
  okBox.classList.remove("is-hidden");
  setTimeout(() => okBox.classList.add("is-hidden"), 2500);
});

// ==================== ОНЛАЙН AI АССИСТЕНТ ====================
function updateOnlineAiBadge() {
  const pill = document.getElementById("aiStatusPill");
  if (!pill) return;
  pill.textContent = navigator.onLine ? "Онлайн байланыс белсенді" : "Интернет байланысы жоқ";
}

window.addEventListener("online", updateOnlineAiBadge);
window.addEventListener("offline", updateOnlineAiBadge);

async function getOnlineClassifier() {
  if (sentimentPipeline) return sentimentPipeline;
  const { pipeline } = await import("https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2");
  sentimentPipeline = await pipeline(
    "text-classification",
    "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
  );
  return sentimentPipeline;
}

function craftTailoredAnswer(promptText, sentimentLabel, confidencePct) {
  const lower = promptText.toLowerCase();

  let topic = "Тәртіп және Тыныштық";
  let habit = "Күн сайын 15 минут тыныш жоспарлау";
  let advice = `«${promptText}» деген сұрағыңа қарай ең тиімді жол — мәселені бірден үлкен жүк етпей, бүгін орындалатын 1 нақты қадамға бөлу.`;

  if (lower.includes("ұйқы") || lower.includes("ерте тұр") || lower.includes("ұйықт")) {
    topic = "Денсаулық және Қуат";
    habit = "Ұйқыдан 45 минут бұрын экранды өшіру";
    advice = `Ұйқы мен ерте тұруды реттеу үшін оянатын уақытты бір мезгілге бекіт (мысалы, 07:00), ал кешке ұйықтардан 45–60 минут бұрын телефон/экранды сөндір. Алғашқы 5–7 күн ырғақ қалыптасқанша сабырмен жалғастыр.`;
  } else if (lower.includes("оқу") || lower.includes("емтихан") || lower.includes("сабақ") || lower.includes("кітап")) {
    topic = "Білім және Рух";
    habit = "25 минут зейін қойып оқу + 5 минут үзіліс";
    advice = `Оқу немесе дайындық кезінде бүкіл материалды бір отырғанда бітіруге тырыспай, 25 минуттық қысқа кезеңдерге бөл. Әр кезеңнен кейін не түсінгеніңді 2–3 сөйлеммен өз сөзіңмен айтып шық.`;
  } else if (lower.includes("шарша") || lower.includes("қалжыра") || lower.includes("стресс") || lower.includes("көңіл")) {
    topic = "Денсаулық және Қуат";
    habit = "15 минут таза ауада серуен және терең тыныс";
    advice = `Шаршау немесе қысым байқалғанда өзіңді күштеп қинамай, алдымен қалпына келуге уақыт бер: су іш, 15 минут серуенде немесе демал, содан кейін ғана бір ғана жеңіл тапсырмаға кіріс.`;
  } else if (lower.includes("жоба") || lower.includes("жұмыс") || lower.includes("уақыт") || lower.includes("жоспар") || lower.includes("әдет")) {
    topic = "Еңбек және Жоба";
    habit = "Күннің басты 1 ісін алдымен орындау";
    advice = `Уақыт жетіспеушілігін азайту үшін күніне 10 емес, ең маңызды 1–3 істі таңда. Ең қиын немесе маңызды қадамды күннің басында жасап алсаң, қалған уақытта қысым азаяды.`;
  }

  const toneNote =
    sentimentLabel === "NEGATIVE"
      ? `Мәтініңде алаңдаушылық немесе ауыртпалық сезіледі (модель бағасы: ${confidencePct}%). Сондықтан бүгін өзіңе шамадан тыс талап қоймай, ең жеңіл қадамнан баста.`
      : `Ойың айқын әрі ілгерілеуге бағытталған (модель бағасы: ${confidencePct}%). Осы серпінді күнделікті қайталанатын әдетпен бекіту маңызды.`;

  return { topic, habit, advice, toneNote };
}

document.getElementById("aiAnalyzeBtn").addEventListener("click", async () => {
  const inputEl = document.getElementById("aiTextInput");
  const errBox = document.getElementById("aiErrBox");
  const outArea = document.getElementById("aiOutputArea");
  const applyBtn = document.getElementById("aiApplyHabitBtn");
  const statusPill = document.getElementById("aiStatusPill");
  const scoreTag = document.getElementById("aiScoreTag");

  errBox.classList.add("is-hidden");
  const promptText = inputEl.value.trim();

  if (promptText.length < 3) {
    errBox.textContent = "Кемінде 3 таңбадан тұратын сұрақ немесе ой жазыңыз.";
    errBox.classList.remove("is-hidden");
    return;
  }

  if (!navigator.onLine) {
    statusPill.textContent = "Офлайн қате";
    scoreTag.textContent = "Онлайн қажет";
    errBox.textContent = "AI-ассистент онлайн режимде жұмыс істейді. Интернет байланысын тексеріп, қайта көріңіз.";
    errBox.classList.remove("is-hidden");
    recordIssue("AI Ассистент", "Пайдаланушы офлайн күйде AI-ассистентті іске қосуға тырысты");
    saveDB();
    return;
  }

  outArea.textContent = "Онлайн модель арқылы талданып жатыр...";
  statusPill.textContent = "Онлайн өңдеу...";
  applyBtn.disabled = true;

  try {
    const clf = await getOnlineClassifier();
    const res = await clf(promptText);
    const top = Array.isArray(res) ? res[0] : res;
    const label = top?.label || "POSITIVE";
    const pct = Math.max(50, Math.min(99, Math.round((top?.score || 0.85) * 100)));

    const built = craftTailoredAnswer(promptText, label, pct);
    suggestedHabit = { title: built.habit, category: built.topic };

    statusPill.textContent = "Онлайн дайын ✓";
    scoreTag.textContent = `Сенімділік: ${pct}%`;
    outArea.innerHTML = `
      <p><strong>Сұрағыңа нақты жауап:</strong> ${escapeHtml(built.advice)}</p>
      <p><strong>Көңіл-күй талдауы:</strong> ${escapeHtml(built.toneNote)}</p>
      <p><strong>Ұсынылатын әдет (${escapeHtml(built.topic)}):</strong> ${escapeHtml(built.habit)}</p>
    `;
    applyBtn.disabled = false;
  } catch (err) {
    statusPill.textContent = "Онлайн жүктеу қатесі";
    scoreTag.textContent = "Қате";
    errBox.textContent =
      "Онлайн модельді жүктеу кезінде ақау шықты (желі немесе CDN бұғатталған болуы мүмкін). Сәлден соң қайта байқаңыз.";
    errBox.classList.remove("is-hidden");
    outArea.textContent = "Жауап алу мүмкін болмады.";
    recordIssue("AI Ассистент", `Модель жүктелу ақауы: ${err?.message || "белгісіз қате"}`);
    saveDB();
  }
});

document.getElementById("aiApplyHabitBtn").addEventListener("click", () => {
  if (!suggestedHabit) return;
  const rec = ensureUserRecord(db.session.login);
  rec.habits.unshift({
    id: `ai_${Date.now()}`,
    title: suggestedHabit.title,
    category: suggestedHabit.category,
    done: false
  });
  saveDB();
  switchPage("habits");
  renderHabits();
});

// ==================== KASPI, ПОЧТА ЖӘНЕ ШАҒЫМ/ҰСЫНЫС ====================
document.getElementById("copyKaspiBtn").addEventListener("click", async () => {
  const btn = document.getElementById("copyKaspiBtn");
  try {
    await navigator.clipboard.writeText(db.contacts.hiddenKaspiRequisite || db.contacts.kaspiOwner);
    btn.textContent = "Реквизит көшірілді ✓";
    setTimeout(() => (btn.textContent = "Kaspi реквизитін көшіру"), 2000);
  } catch {
    btn.textContent = "Көшірілді";
  }
});

document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  const btn = document.getElementById("copyEmailBtn");
  try {
    await navigator.clipboard.writeText(db.contacts.email);
    btn.textContent = "Почта көшірілді ✓";
    setTimeout(() => (btn.textContent = "Почтаны көшіру"), 2000);
  } catch {
    btn.textContent = db.contacts.email;
  }
});

document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("fbType").value;
  const msgInput = document.getElementById("fbMessage");
  const message = msgInput.value.trim();
  if (!message) return;

  const user = getActiveUserObj();
  const authorLabel = user ? `${user.fullName} (@${user.login})` : db.session.login;

  db.feedbacks.unshift({
    id: `fb_${Date.now()}`,
    author: authorLabel,
    type,
    message,
    date: new Date().toLocaleString("kk-KZ")
  });

  if (type === "Шағым") {
    recordIssue(`Қолданушы шағымы (${authorLabel})`, message);
  }

  saveDB();
  msgInput.value = "";
  const okMsg = document.getElementById("fbSuccessMsg");
  okMsg.classList.remove("is-hidden");
  setTimeout(() => okMsg.classList.add("is-hidden"), 2500);
});

// ==================== ӘЗІРЛЕУШІ ПАНЕЛІ ====================
document.querySelectorAll(".dev-sub-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabKey = btn.dataset.devTab;
    document.querySelectorAll(".dev-sub-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
    document.querySelectorAll(".dev-tab-panel").forEach((p) => p.classList.toggle("is-active", p.id === `dev-tab-${tabKey}`));
  });
});

function fillThinkerEditorForm(idx) {
  const t = db.thinkers[idx] || db.thinkers[0];
  if (!t) return;
  document.getElementById("cfgThinkerName").value = t.name;
  document.getElementById("cfgThinkerTag").value = t.tag;
  document.getElementById("cfgThinkerQuote").value = t.quote;
  document.getElementById("cfgThinkerFact").value = t.fact;
  document.getElementById("cfgThinkerTip").value = t.tip;
}

function renderDevAll() {
  const realUsersCount = db.users.length;
  let realHabitsCount = 0;
  let realDoneCount = 0;

  Object.values(db.userData).forEach((rec) => {
    realHabitsCount += (rec.habits || []).length;
    realDoneCount += (rec.habits || []).filter((h) => h.done).length;
  });

  document.getElementById("ovRegisteredCount").textContent = (1248 + realUsersCount).toLocaleString("en-US");
  document.getElementById("ovActiveCount").textContent = (386 + realUsersCount).toLocaleString("en-US");
  document.getElementById("ovCompletedHabitsCount").textContent = (8562 + realDoneCount).toLocaleString("en-US");
  const rate = realHabitsCount > 0 ? Math.round((realDoneCount / realHabitsCount) * 100) : 72;
  document.getElementById("ovCompletionRate").textContent = `${rate}%`;

  const openIssues = db.issues.filter((i) => !i.fixed).length;
  document.getElementById("ovHealthSummary").textContent =
    `Жүйе қалыпты режимде жұмыс істеп тұр. Тіркелген қолданушылар: ${realUsersCount}, санаттар: ${db.categories.length}, ашық неполадкалар: ${openIssues}.`;

  const fbList = document.getElementById("devFeedbackList");
  fbList.innerHTML = "";
  if (db.feedbacks.length === 0) {
    fbList.innerHTML = `<p class="muted-text">Әзірге ұсыныстар мен шағымдар түскен жоқ.</p>`;
  } else {
    db.feedbacks.forEach((fb) => {
      const card = document.createElement("div");
      card.className = "fb-card";
      card.innerHTML = `
        <div class="fb-head">
          <span><strong>${escapeHtml(fb.type)}</strong> · ${escapeHtml(fb.author)}</span>
          <span>${escapeHtml(fb.date)}</span>
        </div>
        <p style="margin:0;">${escapeHtml(fb.message)}</p>
      `;
      fbList.appendChild(card);
    });
  }

  const tbody = document.getElementById("devUsersBody");
  tbody.innerHTML = "";
  if (db.users.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7">Әзірге тіркелген қолданушылар жоқ.</td></tr>`;
  } else {
    db.users.forEach((u, idx) => {
      const avatarCell = u.avatar
        ? `<img src="${u.avatar}" alt="${escapeHtml(u.fullName)}" class="row-avatar" />`
        : `<div class="row-avatar-empty">—</div>`;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${avatarCell}</td>
        <td>${escapeHtml(u.fullName)}</td>
        <td><strong>${escapeHtml(u.login)}</strong></td>
        <td><code>${escapeHtml(u.pass)}</code></td>
        <td>User</td>
        <td>${u.blocked ? "Бұғатталған" : "Белсенді"}</td>
        <td>
          <button type="button" class="btn-outline" data-block-idx="${idx}">
            ${u.blocked ? "Ашу" : "Бұғаттау"}
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll("[data-block-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const u = db.users[Number(btn.dataset.blockIdx)];
        if (!u) return;
        u.blocked = !u.blocked;
        logSecurity(`@${u.login} күйі өзгертілді: ${u.blocked ? "Бұғатталды" : "Ашылды"}`);
        saveDB();
        renderDevAll();
      });
    });
  }

  const growthBox = document.getElementById("devGrowthBars");
  const growthDays = [
    { label: "Дүйсенбі", pct: 78 },
    { label: "Сәрсенбі", pct: 86 },
    { label: "Жұма", pct: 74 },
    { label: "Жексенбі", pct: 64 }
  ];
  growthBox.innerHTML = growthDays
    .map(
      (g) => `
      <div class="bar-row">
        <div class="bar-label-line"><span>${g.label}</span><span>${g.pct}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${g.pct}%"></div></div>
      </div>
    `
    )
    .join("");

  const catStatsBox = document.getElementById("devCategoryStats");
  catStatsBox.innerHTML = db.categories
    .map((cat, i) => {
      const val = Math.max(30, 88 - i * 14);
      return `
        <div class="bar-row">
          <div class="bar-label-line"><span>${escapeHtml(cat)}</span><span>${val}%</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${val}%"></div></div>
        </div>
      `;
    })
    .join("");

  document.getElementById("cfgMissionTitle").value = db.mission.title;
  document.getElementById("cfgMissionBody").value = db.mission.body;
  document.getElementById("cfgMissionInterest").value = db.mission.interest;

  document.getElementById("cfgEmail").value = db.contacts.email;
  document.getElementById("cfgKaspiOwner").value = db.contacts.kaspiOwner;
  document.getElementById("cfgHiddenWa").value = db.contacts.hiddenWaPhone;
  document.getElementById("cfgHiddenKaspi").value = db.contacts.hiddenKaspiRequisite;

  const curQuote = db.quotes[quoteIndex % db.quotes.length] || { text: "", author: "" };
  document.getElementById("cfgQuoteText").value = curQuote.text;
  document.getElementById("cfgQuoteAuthor").value = curQuote.author;

  const thinkerSel = document.getElementById("cfgThinkerSelect");
  const prevSelected = thinkerSel.value ? Number(thinkerSel.value) : 0;
  thinkerSel.innerHTML = db.thinkers
    .map((t, i) => `<option value="${i}">${String(i + 1).padStart(2, "0")}. ${escapeHtml(t.name)}</option>`)
    .join("");
  thinkerSel.value = String(Math.min(prevSelected, db.thinkers.length - 1));
  fillThinkerEditorForm(Number(thinkerSel.value));

  document.getElementById("devCategoriesChips").innerHTML = db.categories
    .map((c) => `<span class="badge-soft">${escapeHtml(c)}</span>`)
    .join("");

  document.getElementById("secDevLogin").value = db.devAccount.login;
  document.getElementById("secDevPass").value = db.devAccount.pass;

  const secLogsBox = document.getElementById("securityLogsList");
  secLogsBox.innerHTML = db.securityLogs.length
    ? db.securityLogs
        .map(
          (l) => `
          <div class="fb-card">
            <div class="fb-head"><span>Журнал</span><span>${escapeHtml(l.time)}</span></div>
            <p style="margin:0;">${escapeHtml(l.event)}</p>
          </div>
        `
        )
        .join("")
    : `<p class="muted-text">Журнал әзірге бос.</p>`;

  const issuesBox = document.getElementById("devIssuesList");
  issuesBox.innerHTML = db.issues.length
    ? db.issues
        .map(
          (iss) => `
          <div class="fb-card">
            <div class="fb-head">
              <span><strong>${escapeHtml(iss.source)}</strong> · ${iss.fixed ? "Түзетілді ✓" : "Тексеруде"}</span>
              <span>${escapeHtml(iss.date)}</span>
            </div>
            <p style="margin:0 0 10px;">${escapeHtml(iss.title)}</p>
            <button type="button" class="btn-outline" data-fix-id="${iss.id}">
              ${iss.fixed ? "Қайта ашу" : "Түзетілді деп белгілеу"}
            </button>
          </div>
        `
        )
        .join("")
    : `<p class="muted-text">Тіркелген неполадкалар жоқ.</p>`;

  issuesBox.querySelectorAll("[data-fix-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = db.issues.find((x) => x.id === btn.dataset.fixId);
      if (!target) return;
      target.fixed = !target.fixed;
      saveDB();
      renderDevAll();
    });
  });
}

document.getElementById("cfgThinkerSelect").addEventListener("change", (e) => {
  fillThinkerEditorForm(Number(e.target.value));
});

document.getElementById("editThinkerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const idx = Number(document.getElementById("cfgThinkerSelect").value);
  if (!db.thinkers[idx]) return;
  db.thinkers[idx] = {
    name: document.getElementById("cfgThinkerName").value.trim(),
    tag: document.getElementById("cfgThinkerTag").value.trim(),
    quote: document.getElementById("cfgThinkerQuote").value.trim(),
    fact: document.getElementById("cfgThinkerFact").value.trim(),
    tip: document.getElementById("cfgThinkerTip").value.trim()
  };
  saveDB();
  renderTenThinkers();
  renderDevAll();
  const ok = document.getElementById("thinkerSaveMsg");
  ok.classList.remove("is-hidden");
  setTimeout(() => ok.classList.add("is-hidden"), 2500);
});

document.getElementById("editContactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  db.contacts = {
    email: document.getElementById("cfgEmail").value.trim(),
    kaspiOwner: document.getElementById("cfgKaspiOwner").value.trim(),
    hiddenWaPhone: document.getElementById("cfgHiddenWa").value.trim(),
    hiddenKaspiRequisite: document.getElementById("cfgHiddenKaspi").value.trim()
  };
  saveDB();
  renderContactsView();
  renderApp();
  const ok = document.getElementById("contactSaveMsg");
  ok.classList.remove("is-hidden");
  setTimeout(() => ok.classList.add("is-hidden"), 2500);
});

document.getElementById("editMissionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  db.mission = {
    title: document.getElementById("cfgMissionTitle").value.trim(),
    body: document.getElementById("cfgMissionBody").value.trim(),
    interest: document.getElementById("cfgMissionInterest").value.trim()
  };
  saveDB();
  renderHomeMissionAndQuote();
  const ok = document.getElementById("missionSaveMsg");
  ok.classList.remove("is-hidden");
  setTimeout(() => ok.classList.add("is-hidden"), 2500);
});

document.getElementById("editQuoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("cfgQuoteText").value.trim();
  const author = document.getElementById("cfgQuoteAuthor").value.trim();
  if (!text || !author) return;
  db.quotes.unshift({ text, author });
  quoteIndex = 0;
  saveDB();
  renderHomeMissionAndQuote();
  const ok = document.getElementById("quoteSaveMsg");
  ok.classList.remove("is-hidden");
  setTimeout(() => ok.classList.add("is-hidden"), 2500);
});

document.getElementById("addCatBtn").addEventListener("click", () => {
  const inp = document.getElementById("newCategoryName");
  const val = inp.value.trim();
  if (!val) return;
  if (!db.categories.includes(val)) db.categories.push(val);
  inp.value = "";
  saveDB();
  renderCategorySelect();
  renderDevAll();
});

document.getElementById("devSecForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const newLogin = document.getElementById("secDevLogin").value.trim();
  const newPass = document.getElementById("secDevPass").value;
  if (!newLogin || newPass.length < 4) return;
  db.devAccount.login = newLogin;
  db.devAccount.pass = newPass;
  if (db.session?.role === "developer") db.session.login = newLogin;
  logSecurity("Әзірлеуші логин/паролі жаңартылды");
  saveDB();
  const ok = document.getElementById("secSaveMsg");
  ok.classList.remove("is-hidden");
  setTimeout(() => ok.classList.add("is-hidden"), 2500);
});

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

renderApp();