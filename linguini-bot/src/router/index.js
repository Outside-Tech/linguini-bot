import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/FirstPage.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/SecondPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/Test.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
