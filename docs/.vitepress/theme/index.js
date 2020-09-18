import DefaultTheme from 'vitepress/dist/client/theme-default'  // To extend default theme.

import vgc from '/@vgc/'
// import vgc from '/@lib/index.esm'
// import '/@lib/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vgc)
  }
}