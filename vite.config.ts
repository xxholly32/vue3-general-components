import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/@p\//,
        replacement: resolve(process.cwd(), ".", "packages") + "/",
      },
    ],
  },
  plugins: [vue(), 
    Layouts(),Pages()],
});
