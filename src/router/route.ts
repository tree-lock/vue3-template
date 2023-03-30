import { RouteRecordRaw } from "vue-router";
// 所有鉴权之后才能访问的路由
// Layout的子路由，通过VueRouter统一全局管理页的布局
const authRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "home",
    name: "Home",
    component: () => import("@/pages/home.vue"),
  },
];
// 所有路由
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/default-layout.vue"),
    children: authRoutes,
  },
];

export default routes;
