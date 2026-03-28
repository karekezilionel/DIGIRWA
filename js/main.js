const injectSidebar = () => {
  const isLoggedIn = localStorage.getItem("digirwa_user") !== null;
  const currentPath = window.location.pathname;

  if (document.querySelector(".sidebar")) return;

  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  let links = "";
  if (isLoggedIn) {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      links = `
            <a href="/admin/dashboard.html" data-i18n="admin_dashboard" class="sidebar-link ${currentPath.includes("admin") ? "active" : ""}"><i data-lucide="layout-dashboard"></i> Admin Dashboard</a>
            <a href="#" id="logout-btn" data-i18n="logout" class="sidebar-link"><i data-lucide="log-out"></i> Logout</a>
        `;
    } else {
      links = `
            <a href="/pages/dashboard.html" data-i18n="dashboard" class="sidebar-link ${currentPath.includes("dashboard") ? "active" : ""}"><i data-lucide="layout-dashboard"></i> Overview</a>
            <a href="/pages/mycourses.html" data-i18n="my_courses" class="sidebar-link ${currentPath.includes("mycourses") ? "active" : ""}"><i data-lucide="book-open"></i> My Courses</a>
            <a href="/pages/progress.html" data-i18n="progress" class="sidebar-link ${currentPath.includes("progress") ? "active" : ""}"><i data-lucide="bar-chart"></i> Progress</a>
            <a href="/pages/community.html" data-i18n="community" class="sidebar-link ${currentPath.includes("community") ? "active" : ""}"><i data-lucide="users"></i> Community</a>
            <a href="/pages/profile.html" data-i18n="profile" class="sidebar-link ${currentPath.includes("profile") ? "active" : ""}"><i data-lucide="user"></i> Profile</a>
            <a href="/pages/settings.html" data-i18n="settings" class="sidebar-link ${currentPath.includes("settings") ? "active" : ""}"><i data-lucide="settings"></i> Settings</a>
            <a href="#" id="logout-btn" data-i18n="logout" class="sidebar-link"><i data-lucide="log-out"></i> Logout</a>
        `;
    }
  } else {
    links = `
            <a href="/index.html" data-i18n="home" class="sidebar-link ${currentPath === "/" || currentPath.includes("index") ? "active" : ""}"><i data-lucide="home"></i> Home</a>
            <a href="/login.html" data-i18n="login" class="sidebar-link ${currentPath.includes("login") ? "active" : ""}"><i data-lucide="log-in"></i> Login</a>
            <a href="/register.html" class="sidebar-link ${currentPath.includes("register") ? "active" : ""}"><i data-lucide="user-plus"></i> Register</a>
        `;
  }

  sidebar.innerHTML = `
        <div class="sidebar-header">
            <a href="${isLoggedIn ? "/pages/dashboard.html" : "/index.html"}" class="sidebar-brand">DIGIRWA</a>
        </div>
        <div class="sidebar-menu">
            ${links}
        </div>
        <div class="sidebar-footer">
            <div class="sidebar-controls">
                <button id="theme-toggle" class="icon-btn"><i data-lucide="moon"></i></button>
            </div>
            <select id="lang-toggle" class="lang-select">
                <option value="en">English</option>
                <option value="rw">Kinyarwanda</option>
            </select>
        </div>
    `;

  document.body.prepend(sidebar);


  const mobileHeader = document.createElement("div");
  mobileHeader.className = "mobile-header";
  mobileHeader.innerHTML = `
        <a href="${isLoggedIn ? "/pages/dashboard.html" : "/index.html"}" class="sidebar-brand">DIGIRWA</a>
        <button class="mobile-menu-btn"><i data-lucide="menu"></i></button>
  `;
  
 
  const mainContent = document.createElement("main");
  mainContent.className = "main-content";
  mainContent.appendChild(mobileHeader);
  
 
  Array.from(document.body.children).forEach(child => {
      if (child !== sidebar && child !== mainContent && child.tagName !== 'SCRIPT') {
          mainContent.appendChild(child);
      }
  });
  
  document.body.insertBefore(mainContent, sidebar.nextSibling);
};


window.trackActiveCourse = (courseId) => {
  let activeCourses = JSON.parse(localStorage.getItem("activeCourses") || "[]");
  if (!activeCourses.includes(courseId)) {
    activeCourses.push(courseId);
    localStorage.setItem("activeCourses", JSON.stringify(activeCourses));
  }
};

window.sessionStartTime = Date.now();
window.updateLearningTime = () => {
  const now = Date.now();
  const timeSpent = now - window.sessionStartTime;
  let totalLearningTime = parseInt(localStorage.getItem("totalLearningTime") || "0");
  totalLearningTime += timeSpent;
  localStorage.setItem("totalLearningTime", totalLearningTime);
  window.sessionStartTime = now; 
};


window.addEventListener("beforeunload", window.updateLearningTime);

setInterval(window.updateLearningTime, 60000);


window.showNotification = (message, type = "success") => {
  let container = document.querySelector(".notification-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "notification-container";
    document.body.appendChild(container);
  }

  const notif = document.createElement("div");
  notif.className = `notification ${type}`;
  notif.innerHTML = `
        <i data-lucide="${type === "success" ? "check-circle" : "alert-circle"}"></i>
        <span>${message}</span>
    `;

  container.appendChild(notif);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    notif.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => notif.remove(), 300);
  }, 3000);
};


document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("digirwa_user") !== null;
  const currentPath = window.location.pathname;

  if (
    isLoggedIn &&
    (currentPath === "/" ||
      currentPath.includes("index.html") ||
      currentPath.includes("login.html") ||
      currentPath.includes("register.html"))
  ) {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      window.location.href = "/admin/dashboard.html";
    } else {
      window.location.href = "/pages/dashboard.html";
    }
    return;
  }
  if (!isLoggedIn && (currentPath.includes("/pages/") || currentPath.includes("/admin/"))) {
    window.location.href = "/login.html";
    return;
  }

 
  injectSidebar();

  
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest";
  script.onload = () => {
    lucide.createIcons();
  };
  document.head.appendChild(script);

  
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme =
    localStorage.getItem("digirwa_theme") || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("digirwa_theme", newTheme);

      const icon = themeToggle.querySelector("i");
      if (icon && window.lucide) {
        icon.setAttribute("data-lucide", newTheme === "dark" ? "sun" : "moon");
        lucide.createIcons();
      }
    });
  }


  if (typeof initLanguage === "function") {
    initLanguage();
    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("change", (e) => {
        setLanguage(e.target.value);
      });
    }
  }


  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const sidebar = document.querySelector(".sidebar");
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
    
    
    const sidebarLinks = sidebar.querySelectorAll(".sidebar-link");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove("show");
        }
      });
    });
  }

  
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("digirwa_user");
      localStorage.removeItem("role");
      window.location.href = "/login.html";
    });
  }


  document.querySelectorAll(".password-toggle").forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.previousElementSibling;
      const icon = this.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.setAttribute("data-lucide", "eye-off");
      } else {
        input.type = "password";
        icon.setAttribute("data-lucide", "eye");
      }
      if (window.lucide) lucide.createIcons();
    });
  });
});
