import { createRouter, createWebHistory } from "vue-router";
import routes from "./route";

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

/**
 * 如果没有找到Token，就返回到登录页
 */
router.afterEach((to) => {
  if (to.name !== "Login") {
    if (!$.auth.getToken()) {
      location.href = import.meta.env.BASE_URL + "login";
    }
  }
});

export default router;
