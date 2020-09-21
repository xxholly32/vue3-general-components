import esbuild from "rollup-plugin-esbuild";
import vueJsx from "rollup-plugin-vue-jsx-compat"
import css from "rollup-plugin-css-only"; // 提取css，压缩能力不行
import CleanCSS from "clean-css"; // 压缩css
import { writeFileSync } from "fs"; // 写文件

export default {
  input: "./packages/index.ts",
  external: ["vue"], //使用外部的依赖，如果使用内部 vue 会照成多重引用
  plugins: [
    vueJsx(),
    esbuild({
      jsxFactory: "vueJsxCompat",
    }),
    css({
      output(style) {
        // 压缩 css 写入 dist/vue-rollup-component-template.css
        writeFileSync("lib/index.css", new CleanCSS().minify(style).styles);
      },
    }),
  ],
};
