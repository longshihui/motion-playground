import type { AnimationItem } from "../data/animations";

export const HOME_NAV_ITEM = {
  id: "home",
  name: "首页",
} as const;

export type SidebarGroup = {
  name: string;
  children: Array<Pick<AnimationItem, "id" | "name">>;
};

export const buildSidebarGroups = (animations: AnimationItem[]): SidebarGroup[] =>
  Array.from(
    animations.reduce((acc, item) => {
      if (!acc.has(item.category)) {
        acc.set(item.category, []);
      }
      acc.get(item.category)?.push({ id: item.id, name: item.name });
      return acc;
    }, new Map<string, Array<Pick<AnimationItem, "id" | "name">>>()),
  ).map(([name, children]) => ({ name, children }));
