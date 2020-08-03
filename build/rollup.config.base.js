import resolve from 'rollup-plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
import commonjs from 'rollup-plugin-commonjs' // 将CommonJS模块转换为 ES2015 供 Rollup 处理
import vue from 'rollup-plugin-vue' // 处理vue文件
import babel from 'rollup-plugin-babel'  // rollup 的 babel 插件，ES6转ES5

export default {
  input: 'src/components/index.js',
  external: ['vue'], //使用外部的依赖，如果使用内部 vue 会照成多重引用
  plugins: [
    resolve({ extensions: ['.vue'] }),
    commonjs(),
    vue(),
    babel()
  ]
}