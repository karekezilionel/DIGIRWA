import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",   
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== "true",
  },
});