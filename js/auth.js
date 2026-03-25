import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const getInitial = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    return parts.length > 1
      ? parts[parts.length - 1][0].toUpperCase()
      : name[0].toUpperCase();
  };

 
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const role = document.getElementById("role")?.value || "student";
      const btn = loginForm.querySelector("button");
      const originalText = btn.innerHTML;

      if (!email || !password) return;

      btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Loading...';
      if (window.lucide) lucide.createIcons();

      try {
        if (role === "admin") {
          // Admin login (local only)
          if (email === "admin@digirwa.com" && password === "admin123") {
            const userData = {
              email,
              name: "Admin",
              role: "admin",
              profilePic: "A",
            };
            localStorage.setItem("digirwa_user", JSON.stringify(userData));
            localStorage.setItem("role", "admin");
            if (window.showNotification)
              window.showNotification("Admin login successful!", "success");
            setTimeout(() => {
              window.location.href = "/admin/dashboard.html";
            }, 1000);
          } else {
            btn.innerHTML = originalText;
            if (window.showNotification)
              window.showNotification("Invalid admin credentials", "error");
            else alert("Invalid admin credentials");
          }
        } else {
          
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          const name = user.displayName || "Student User";
          const profilePic = user.photoURL || getInitial(name);

          const userData = {
            email: user.email,
            name,
            role: "student",
            profilePic,
          };

          localStorage.setItem("digirwa_user", JSON.stringify(userData));
          localStorage.setItem("role", "student");

          if (window.showNotification)
            window.showNotification("Login successful!", "success");

          setTimeout(() => {
            window.location.href = "/pages/dashboard.html";
          }, 1000);
        }
      } catch (error) {
        btn.innerHTML = originalText;
        if (window.showNotification)
          window.showNotification(error.message, "error");
        else alert(error.message);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const btn = registerForm.querySelector("button");
      const originalText = btn.innerHTML;

      if (!name || !email || !password) return;

      btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Loading...';
      if (window.lucide) lucide.createIcons();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        
        await updateProfile(userCredential.user, { displayName: name });

        const profilePic = getInitial(name);

        const userData = {
          email,
          name,
          role: "student",
          profilePic,
        };

        localStorage.setItem("digirwa_user", JSON.stringify(userData));
        localStorage.setItem("role", "student");

        if (window.showNotification)
          window.showNotification("Registration successful!", "success");

        setTimeout(() => {
          window.location.href = "/pages/dashboard.html";
        }, 1000);
      } catch (error) {
        btn.innerHTML = originalText;
        if (window.showNotification)
          window.showNotification(error.message, "error");
        else alert(error.message);
      }
    });
  }
});