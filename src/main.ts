import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { setupLayouts } from "layouts-generated";
import generatedRoutes from "pages-generated";

// import vgc from "/@p/index";

(async () => {
  const app = createApp(App);
  // app.use(vgc);
  
  const routes = setupLayouts(generatedRoutes);
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  app.use(router);

  app.mount("#app", true);
})();
