import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // @ts-ignore
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      // @ts-ignore
      component: () => import("../views/TasksView.vue"),
    },
    {
      path: "/friends",
      name: "friends",
      // @ts-ignore
      component: () => import("../views/FriendsView.vue"),
    },
  ],
});

export default router;
