import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ui from "../packages"
import "./assets/style/base.styl"

createApp(App).use(ui).use(router).mount("#app");
