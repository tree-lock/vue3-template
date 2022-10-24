import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.less";
import "./assets/transition.less";
// 注册svg读取插件 https://github.com/vbenjs/vite-plugin-svg-icons
import "virtual:svg-icons-register";

const app = createApp(App);
// 挂载VueRouter
app.use(router);
// 挂载到div#app节点上(Vue3会自动创建这个节点)
app.mount("#app");
