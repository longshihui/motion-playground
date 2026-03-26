import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("./pages/HomePage.vue");
const AnimationCenterPage = () => import("./pages/AnimationCenterPage.vue");
const AnimationDetailPage = () => import("./pages/AnimationDetailPage.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/animation/home",
    },
    {
      path: "/animation",
      component: AnimationCenterPage,
      children: [
        {
          path: "",
          redirect: "/animation/home",
        },
        {
          path: "home",
          name: "home",
          component: HomePage,
        },
        {
          path: ":id",
          name: "animation-detail",
          component: AnimationDetailPage,
        },
      ],
    },
  ],
});

export default router;
