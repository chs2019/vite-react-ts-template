/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    setupFiles: ["./src/setupTests.ts"],
    css: true,
    reporters: ["default", "html"],
    coverage: {
      reportsDirectory: "html",
      include: ["**/*.{ts,tsx}"],
      exclude: ["src/test/**/*.{ts,tsx}"],
      reporter: ["text", ["html", { subdir: "coverage" }]],
      provider: "v8",
    },
  },
});
