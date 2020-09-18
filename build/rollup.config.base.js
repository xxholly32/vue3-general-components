import esbuild from "rollup-plugin-esbuild"

export default {
  input: './packages/index.ts',
  external: ['vue'], //使用外部的依赖，如果使用内部 vue 会照成多重引用
  plugins: [
    esbuild({ 
      jsxFactory: 'jsx', 
      jsxFragment: 'Fragment' 
    }),
  ]
}