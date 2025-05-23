import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/startup-website/", // Set the base path for GitHub Pages
  build: {
    outDir: "dist", // Output directory for Vite
  },
  server: {
    host: true, // Optional: Allows access from network devices
    hmr: true, // Enable Hot Module Replacement
  },
});