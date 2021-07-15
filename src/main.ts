import { createApp } from "vue";
import App from "./App.vue";

import vgc from "/@p/index";

(async () => {
  const app = createApp(App);
  app.use(vgc);

  app.mount("#app", true);
})();
