const path = require('path')

const alias = {
  '/@vgc/': path.resolve(__dirname, '../../packages'),
  '/@lib/': path.resolve(__dirname, '../../lib')
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vue3 General Components",
  alias,
  themeConfig: {
    nav: [{ text: "向导", link: "/guide/" }],
    sidebar: [
      {
        text: "向导",
        children: [{ text: "Index", link: "/guide/" }],
      },
      {
        text: "组件",
        children: [{ text: "hello-world", link: "/components/hello-world" }],
      },
    ],
  },
};
