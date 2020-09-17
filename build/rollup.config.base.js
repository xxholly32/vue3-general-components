import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import commonjs from '@rollup/plugin-commonjs' // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from 'rollup-plugin-vue' // 处理vue文件
import babel from '@rollup/plugin-babel'  // rollup 的 babel 插件，ES6转ES5
import css from 'rollup-plugin-css-only' // 提取css，压缩能力不行
import CleanCSS from 'clean-css' // 压缩css
import { writeFileSync } from 'fs' // 写文件

export default {
  input: 'packages/index.ts',
  external: ['vue'], //使用外部的依赖，如果使用内部 vue 会照成多重引用
  plugins: [
    resolve({ extensions: ['.vue'] }),
    typescript({
      target: 'ES6',
      module: 'ESNext',
    }),
    commonjs(),
    css({ output(style) {
      // 压缩 css 写入 dist/vue-rollup-component-template.css
      writeFileSync('lib/index.css', new CleanCSS().minify(style).styles)
    } }),
    vue({ css: false }),
    babel()
  ]
}