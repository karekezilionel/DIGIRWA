const translations = {
  en: {
    home: "Home",
    dashboard: "Overview",
    my_courses: "My Courses",
    progress: "Progress",
    quizzes: "Quizzes",
    leaderboard: "Leaderboard",
    assignments: "Assignments",
    community: "Community",
    profile: "Profile",
    settings: "Settings",
    logout: "Logout",
    get_started: "Get Started",
    welcome: "Welcome to DIGIRWA",
    description:
      "The premier digital learning platform for youth in Rwanda and beyond.",
    login: "Login",
    register: "Register",
    email: "Email Address",
    password: "Password",
    name: "Full Name",
    dont_have_account: "Don't have an account?",
    already_have_account: "Already have an account?",
    sign_in: "Sign In",
    create_account: "Create Account",
    welcome_back: "Welcome Back!",
    join_us: "Join DIGIRWA",
    recent_courses: "Recently Accessed Courses",
    continue_learning: "Continue Learning",
    completed: "Completed",
    pending: "Pending",
    deadline: "Deadline",
    download: "Download",
    dark_mode: "Dark Mode",
    language: "Language",
    save_changes: "Save Changes",
    stats_courses: "Active Courses",
    stats_hours: "Hours Learned",
    view_all: "View All",
    post: "Post",
    write_something: "Write something to the community...",
    admin_panel: "Admin Panel",
  },
  rw: {
    home: "Ahabanza",
    dashboard: "Incamake",
    my_courses: "Amasomo Yanjye",
    progress: "Aho Ugeze",
    quizzes: "Ibizamini",
    leaderboard: "Urutonde",
    assignments: "Imikoro",
    community: "Ihuriro",
    profile: "Umwirondoro",
    settings: "Igenamiterere",
    logout: "Sohoka",
    get_started: "Tangira",
    welcome: "Ikaze kuri DIGIRWA",
    description:
      "Urubuga rwa mbere rw'ikoranabuhanga mu kwigisha urubyiruko mu Rwanda no hanze.",
    login: "Injira",
    register: "Iyandikishe",
    email: "Imeli",
    password: "Ijambo ry'ibanga",
    name: "Amazina Yombi",
    dont_have_account: "Nta konti ufite?",
    already_have_account: "Usanzwe ufite konti?",
    sign_in: "Injira",
    create_account: "Fungura Konti",
    welcome_back: "Ikaze Garuka!",
    join_us: "Iyandikishe kuri DIGIRWA",
    recent_courses: "Amasomo uheruka kwiga",
    continue_learning: "Komeza Kwiga",
    completed: "Byarangiye",
    pending: "Bitegereje",
    deadline: "Itariki ntarengwa",
    download: "Manura",
    dark_mode: "Umwijima",
    language: "Ururimi",
    save_changes: "Bika Impinduka",
    stats_courses: "Amasomo arimo",
    stats_hours: "Amasaha wize",
    view_all: "Reba byose",
    post: "Ohereza",
    write_something: "Andika ikintu mu ihuriro...",
    admin_panel: "Ubuyobozi",
  },
};

function setLanguage(lang) {
  localStorage.setItem("digirwa_lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      const icon = el.querySelector("i");
      if (icon) {
        el.innerHTML = "";
        el.appendChild(icon);
        el.appendChild(document.createTextNode(" " + translations[lang][key]));
      } else {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    }
  });

  const langSelect = document.getElementById("lang-toggle");
  if (langSelect) langSelect.value = lang;
}

function initLanguage() {
  const savedLang = localStorage.getItem("digirwa_lang") || "en";
  setLanguage(savedLang);
}
