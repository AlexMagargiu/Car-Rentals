// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "https://AlexMagargiu.github.io/Car-Rentals",
  };

  if (command !== "serve") {
    config.base = "/Car-Rentals/";
  }

  return config;
});
