import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom"], // Add any other external dependencies if needed
    },
    sourcemap: true, // Optional: enables sourcemaps for easier debugging
  },
});
