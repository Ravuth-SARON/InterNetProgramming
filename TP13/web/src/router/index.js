import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: loginPage,
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Register.vue"),
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: () => import("../views/Admin.vue"),
    // },
    {
      path: "/home",
      name: "cat",
      component: () => import("../views/Category.vue"),
    },
    // home/items
    {
      path: "/home/items",
      name: "items",
      component: () => import("../views/Items.vue"),
    },
    {
      path: "/home/products",
      name: "products",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/SignUpSuccess.vue"),
    },
  ],
});

export default router;
