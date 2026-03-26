import { defineConfig } from "vite";
import path from "path";
import { progress } from "motion";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        login: path.resolve(__dirname, "login.html"),
        register: path.resolve(__dirname, "register.html"),
        dashboard: path.resolve(__dirname, "pages/dashboard.html"),
        admin: path.resolve(__dirname, "pages/admin.html"),
        assignments: path.resolve(__dirname, "pages/assignments.html"),
        community: path.resolve(__dirname, "pages/community.html"),
        courses: path.resolve(__dirname, "pages/course.html"),
        excel: path.resolve(__dirname, "pages/excel.html"),
        gmail: path.resolve(__dirname, "pages/gmail.html"),
        interactivecourse: path.resolve(__dirname, "pages/interactive-course.html"),
        leaderboard: path.resolve(__dirname, "pages/leaderboard.html"),
        mycourses: path.resolve(__dirname, "pages/mycourses.html"),
        powerpoint: path.resolve(__dirname, "pages/powerpoint.html"),
        profile: path.resolve(__dirname, "pages/profile.html"),
        progress: path.resolve(__dirname, "pages/progress.html"),
        quiz: path.resolve(__dirname, "pages/quiz.html"),
        settings: path.resolve(__dirname, "pages/settings.html"),
        word: path.resolve(__dirname, "pages/word.html"),
      },
    },
  },
});