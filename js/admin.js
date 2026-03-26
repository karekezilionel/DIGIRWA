document.addEventListener("DOMContentLoaded", () => {
  // Basic Admin Protection
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    window.location.href = "/login.html";
    return;
  }

  // Data Initialization
  let users = JSON.parse(localStorage.getItem("digirwa_users") || "[]");
  if (users.length === 0) {
    // Add default admin if no users exist
    users.push({ id: 1, name: "Admin", email: "admin@digirwa.com", role: "admin" });
    localStorage.setItem("digirwa_users", JSON.stringify(users));
  }

  let courses = JSON.parse(localStorage.getItem("digirwa_courses") || "[]");
  if (courses.length === 0) {
    if (typeof mockData !== 'undefined' && mockData.courses) {
      courses = mockData.courses;
    } else {
      courses = [
        { id: 1, title: "Digital Literacy Basics", desc: "Essential computer skills for the modern world.", progress: 0 },
        { id: 2, title: "Microsoft Office Essentials", desc: "Learn Word, Excel, and PowerPoint.", progress: 0 }
      ];
    }
    localStorage.setItem("digirwa_courses", JSON.stringify(courses));
  }

  // Render Functions
  function renderUsers() {
    const tbody = document.getElementById("users-tbody");
    tbody.innerHTML = "";
    users.forEach(user => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><span class="badge ${user.role === 'admin' ? 'badge-pending' : 'badge-completed'}">${user.role}</span></td>
        <td class="action-buttons">
          <button class="btn btn-outline edit-user-btn" data-id="${user.id}" style="padding: 0.25rem 0.5rem;"><i data-lucide="edit-2" style="width: 16px; height: 16px;"></i></button>
          <button class="btn btn-outline delete-user-btn" data-id="${user.id}" style="padding: 0.25rem 0.5rem; color: var(--danger); border-color: var(--danger);"><i data-lucide="trash-2" style="width: 16px; height: 16px;"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    if (window.lucide) window.lucide.createIcons();
    attachUserEvents();
  }

  function renderCourses() {
    const tbody = document.getElementById("courses-tbody");
    tbody.innerHTML = "";
    courses.forEach(course => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${course.title}</strong></td>
        <td>${course.desc || (course.lessons && course.lessons.length > 0 ? course.lessons[0].desc : '')}</td>
        <td class="action-buttons">
          <button class="btn btn-outline edit-course-btn" data-id="${course.id}" style="padding: 0.25rem 0.5rem;"><i data-lucide="edit-2" style="width: 16px; height: 16px;"></i></button>
          <button class="btn btn-outline delete-course-btn" data-id="${course.id}" style="padding: 0.25rem 0.5rem; color: var(--danger); border-color: var(--danger);"><i data-lucide="trash-2" style="width: 16px; height: 16px;"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    if (window.lucide) window.lucide.createIcons();
    attachCourseEvents();
  }

  function attachUserEvents() {
    document.querySelectorAll(".delete-user-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.getAttribute("data-id"));
        if (confirm("Are you sure you want to delete this user?")) {
          users = users.filter(u => u.id !== id);
          localStorage.setItem("digirwa_users", JSON.stringify(users));
          renderUsers();
          if (window.showNotification) window.showNotification("User deleted", "success");
        }
      });
    });

    document.querySelectorAll(".edit-user-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.getAttribute("data-id"));
        const user = users.find(u => u.id === id);
        if (user) {
          document.getElementById("user-id").value = user.id;
          document.getElementById("user-name").value = user.name;
          document.getElementById("user-email").value = user.email;
          document.getElementById("user-role").value = user.role;
          document.getElementById("user-modal-title").textContent = "Edit User";
          document.getElementById("user-modal").classList.add("active");
        }
      });
    });
  }

  function attachCourseEvents() {
    document.querySelectorAll(".delete-course-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.getAttribute("data-id"));
        if (confirm("Are you sure you want to delete this course?")) {
          courses = courses.filter(c => c.id !== id);
          localStorage.setItem("digirwa_courses", JSON.stringify(courses));
          window.dispatchEvent(new Event("digirwa_courses_updated"));
          renderCourses();
          if (window.showNotification) window.showNotification("Course deleted", "success");
        }
      });
    });

    document.querySelectorAll(".edit-course-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.currentTarget.getAttribute("data-id"));
        const course = courses.find(c => c.id === id);
        if (course) {
          document.getElementById("course-id").value = course.id;
          document.getElementById("course-title").value = course.title;
          document.getElementById("course-desc").value = course.desc || (course.lessons && course.lessons.length > 0 ? course.lessons[0].desc : '');
          document.getElementById("course-modal-title").textContent = "Edit Course";
          document.getElementById("course-modal").classList.add("active");
        }
      });
    });
  }

  // Modal Forms Handling
  // User Modal
  const addUserBtn = document.getElementById("add-user-btn");
  if (addUserBtn) {
    addUserBtn.addEventListener("click", () => {
      document.getElementById("user-id").value = "";
      document.getElementById("user-form").reset();
      document.getElementById("user-modal-title").textContent = "Add User";
      document.getElementById("user-modal").classList.add("active");
    });
  }

  document.getElementById("cancel-user-btn").addEventListener("click", () => {
    document.getElementById("user-modal").classList.remove("active");
  });

  document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("user-id").value;
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const role = document.getElementById("user-role").value;

    if (id) {
      
      const index = users.findIndex(u => u.id === parseInt(id));
      if (index !== -1) {
        users[index] = { ...users[index], name, email, role };
      }
    } else {
     
      users.push({ id: Date.now(), name, email, role });
    }

    localStorage.setItem("digirwa_users", JSON.stringify(users));
    renderUsers();
    document.getElementById("user-modal").classList.remove("active");
    if (window.showNotification) window.showNotification("User saved", "success");
  });

  
  document.getElementById("add-course-btn").addEventListener("click", () => {
    document.getElementById("course-id").value = "";
    document.getElementById("course-form").reset();
    document.getElementById("course-modal-title").textContent = "Add Course";
    document.getElementById("course-modal").classList.add("active");
  });

  document.getElementById("cancel-course-btn").addEventListener("click", () => {
    document.getElementById("course-modal").classList.remove("active");
  });

  document.getElementById("course-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("course-id").value;
    const title = document.getElementById("course-title").value;
    const desc = document.getElementById("course-desc").value;

    if (id) {
 
      const index = courses.findIndex(c => c.id === parseInt(id));
      if (index !== -1) {
        courses[index] = { ...courses[index], title, desc };
      }
    } else {
    
      courses.push({ id: Date.now(), title, desc, progress: 0 });
    }

    localStorage.setItem("digirwa_courses", JSON.stringify(courses));
    window.dispatchEvent(new Event("digirwa_courses_updated"));
    renderCourses();
    document.getElementById("course-modal").classList.remove("active");
    if (window.showNotification) window.showNotification("Course saved", "success");
  });

 
  renderUsers();
  renderCourses();
});
