import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from "vite-plugin-pwa"; // Correct import statement

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
    }),
  ],
  build: {
    sourcemap: true, // Enable source maps
  },
  rollupOptions: {
    onLog(level, log, handler) {
      if (
        log.cause &&
        log.cause.message === `Can't resolve original location of error.`
      ) {
        return;
      }
      handler(level, log);
    },
  },
});
