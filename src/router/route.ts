import { RouteRecordRaw } from "vue-router";
const authRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "home",
    name: "Home",
    component: () => import("@/modules/home/home.page.vue"),
  },
  {
    path: "profile",
    name: "Profile",
    component: () => import("@/modules/profile/profile.page.vue"),
  },
  {
    path: "company-management",
    name: "CompanyManagement",
    component: () =>
      import("@/modules/company-management/company-management.page.vue"),
  },
  {
    path: "statistic",
    name: "Statistic",
    component: () => import("@/modules/statistic/statistic.page.vue"),
  },
  {
    path: "log",
    name: "Log",
    component: () => import("@/modules/log/log.page.vue"),
  },
];
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/modules/login/login.page.vue"),
  },
  {
    path: "/",
    component: () => import("@/modules/layouts/default-layout.vue"),
    children: authRoutes,
  },
];
export default routes;
