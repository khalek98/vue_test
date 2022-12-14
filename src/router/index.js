import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/what",
      name: "what",
      component: () => import("../pages/WhatPage.vue"),
    },
    {
      path: "/where",
      name: "where",
      component: () => import("../pages/WherePage.vue"),
    },
    {
      path: "/who",
      name: "who",
      component: () => import("../pages/WhoPage.vue"),
    },
  ],
});

export default router;
