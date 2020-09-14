import DefaultTheme from 'vitepress/dist/client/theme-default'  // To extend default theme.
import vgc from '../../packages/index'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vgc)
  }
}