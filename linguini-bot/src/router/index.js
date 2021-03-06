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
    path: "/chat-recipes",
    name: "chat-recipes",
    component: () => import("@/views/RecipesChat.vue"),
  },
  {
    path: "/recipeDetail/:id",
    name: "recipeDetail",
    component: () => import("../views/RecipeDetail.vue"),
  },
  {
    path: "/preparation/:id",
    name: "preparation",
    component: () => import("../views/Preparation.vue"),
  },
  {
    path: "/bagdes",
    name: "bagdes",
    component: () => import("../views/Bagdes.vue"),
  },
  {
    path: "/topten",
    name: "topten",
    component: () => import("../views/TopTen.vue"),
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
  {
    path: "/recipeDetail",
    name: "recipeDetail",
    component: () => import("../views/RecipeDetail.vue"),
  },
  {
    path: "/profile",
    name: "profile", 
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/deleteProfile",
    name: "deleteProfile", 
    component: () => import("../views/deleteProfile.vue")
  },
  {
    path: "/policyPrivacy",
    name: "policyprivacy", 
    component: () => import("../views/privacyPolicy.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
