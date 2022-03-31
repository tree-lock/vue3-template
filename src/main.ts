import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.scss";
import "./assets/transition.scss";
// 注册svg读取插件 https://github.com/vbenjs/vite-plugin-svg-icons
import "virtual:svg-icons-register";

const app = createApp(App);
// 挂载VueRouter
app.use(router);
//
app.mount("#app");
