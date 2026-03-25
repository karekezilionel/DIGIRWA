import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "login.html"),
        register: path.resolve(__dirname, "register.html"),
        admin: path.resolve(__dirname, "pages/admin.html"),
        assignments: path.resolve(__dirname, "pages/assignments.html"),
        communtity: path.resolve(__dirname, "pages/community.html"),
        course: path.resolve(__dirname, "pages/course.html"),
        dashboard: path.resolve(__dirname, "pages/dashboard.html"),
        excel: path.resolve(__dirname, "pages/excel.html"),
        gmail: path.resolve(__dirname, "pages/gmail.html"),
        interactive: path.resolve(__dirname, "pages/interactive-course.html"),
        leaderboard: path.resolve(__dirname, "pages/leaderboard.html"),
        mycourses: path.resolve(__dirname, "pages/my-courses.html"),
        powerpoint: path.resolve(__dirname, "pages/powerpoint.html"),
        settings: path.resolve(__dirname, "pages/settings.html"),
        word: path.resolve(__dirname, "pages/word.html"),
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});