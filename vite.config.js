import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["prop-types"], // Add other packages as needed
    },
    sourcemap: true, // Optional: enables sourcemaps for easier debugging
  },
});
