module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vue3 General Components",
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
