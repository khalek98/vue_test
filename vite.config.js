import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vetur from "@volar-plugins/vetur";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vetur()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
