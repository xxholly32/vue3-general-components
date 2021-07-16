import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Markdown from "vite-plugin-md";
import WindiCSS from 'vite-plugin-windicss'

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
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
    Layouts(),
    Pages(),
    WindiCSS(),
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
