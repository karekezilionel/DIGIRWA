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
        
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});