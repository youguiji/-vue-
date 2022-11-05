/*
 * @Description:
 * @Version:
 * @Autor: Austral
 * @Date: 2022-10-21 21:26:09
 * @LastEditors: Austral
 * @LastEditTime: 2022-11-06 03:22:26
 */
import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: login,
    },
    //{
    //path: "/about",
    //name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import("../views/AboutView.vue"),
    //},
  ],
});

export default router;
