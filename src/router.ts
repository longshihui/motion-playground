import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const HomePage = () => import("./pages/HomePage.vue");
const AnimationCenterPage = () => import("./pages/AnimationCenterPage.vue");
const AnimationDetailPage = () => import("./pages/AnimationDetailPage.vue");

const routes: RouteRecordRaw[] = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
