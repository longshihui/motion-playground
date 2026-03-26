export type MotionCategory =
  | "入场与退场"
  | "强调反馈"
  | "加载状态"
  | "内容编排"
  | "路由与转场"
  | "交互编排";

export type MotionNavConfig = {
  id: string;
  name: string;
  category: MotionCategory;
  scene: string;
};
