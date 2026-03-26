import { fireEvent, render, screen, waitFor } from "@testing-library/vue";
import { createMemoryHistory, createRouter } from "vue-router";

jest.mock("../src/data/animations", () => ({
  animations: [
    { id: "fade", name: "淡入淡出", category: "入场" },
    { id: "pulse", name: "呼吸", category: "强调" },
  ],
  animationCategories: [
    { name: "入场", children: [{ id: "fade", name: "淡入淡出" }] },
    { name: "强调", children: [{ id: "pulse", name: "呼吸" }] },
  ],
}));

import AnimationCenterPage from "../src/pages/AnimationCenterPage.vue";

const mountWithRoute = async (path: string, width = 1280) => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: "/animation/:id?", component: AnimationCenterPage }],
  });

  await router.push(path);
  await router.isReady();

  render(AnimationCenterPage, {
    global: {
      plugins: [router],
      stubs: {
        RouterView: true,
      },
    },
  });

  return router;
};

test("导航高亮逻辑会随路由变化更新", async () => {
  const router = await mountWithRoute("/animation/fade");
  expect(screen.getByTestId("nav-item-fade")).toHaveAttribute("data-active", "true");

  await router.push("/animation/pulse");
  await waitFor(() => {
    expect(screen.getByTestId("nav-item-pulse")).toHaveAttribute("data-active", "true");
  });
});

test("响应式布局在移动宽度显示抽屉触发按钮", async () => {
  await mountWithRoute("/animation/fade", 600);
  expect(screen.getByTestId("mobile-nav-trigger")).toBeInTheDocument();

  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: 1200,
  });
  await fireEvent(window, new Event("resize"));

  await waitFor(() => {
    expect(screen.queryByTestId("mobile-nav-trigger")).not.toBeInTheDocument();
  });
});
