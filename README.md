# Motion Playground

一个基于 Vue 3 + Vite 的 Web 动效组件展厅，聚焦「可复用」「可演示」「可迁移」三件事：

- 每个动效以独立组件存在，方便直接复制到业务项目
- 首页集中展示了基础动效与交互型动效
- 所有示例都贴近真实业务场景（加载、反馈、切换、拖拽、转场等）

## 技术栈

- Vue 3（`<script setup>` + SFC）
- Vite 8

## 快速开始

```bash
npm install
npm run dev
```

默认本地地址：

```txt
http://localhost:5173
```

## 可用脚本

```bash
npm run dev      # 启动开发环境
npm run build    # 生产构建
npm run preview  # 预览构建产物
```

## 项目结构

```txt
motion-playground
├─ public/
├─ src/
│  ├─ motions/                 # 动效组件目录（每个目录一个动效）
│  ├─ App.vue                  # 动效展厅主页（导入与编排全部动效）
│  ├─ main.js
│  └─ style.css
├─ index.html
├─ vite.config.js
└─ package.json
```

## 当前动效清单

### 基础动效（32）

1. Fade
2. Slide Up
3. Scale In
4. Rotate In
5. Bounce
6. Pulse
7. Shake
8. Ripple
9. Shimmer
10. Dots Loader
11. Spinner
12. Indeterminate Progress
13. Typing
14. Marquee
15. Hover Lift
16. Flip Card
17. Page Transition
18. Count Up
19. Circular Progress
20. Drawer Slide
21. Tabs Indicator
22. Stagger Reveal
23. Drag Reorder
24. Dropzone Hover
25. Magnetic Hover
26. Tilt Parallax
27. Scroll Parallax
28. Sticky Morph Header
29. Morph Expand
30. Toast Stack
31. Skeleton Crossfade
32. Success Check

### 交互型动效（4）

- Modal（遮罩淡入 + 弹窗缩放）
- Toast（右上角滑入滑出）
- Accordion（高度过渡）
- List Reorder（列表重排过渡）

## 页面说明

`src/App.vue` 目前包含两个主要展示区域：

- 交互型动效区：支持按钮切换状态，模拟真实交互触发
- 常用动效总览区：以卡片网格展示独立动效组件与使用场景

## 如何新增一个动效

1. 在 `src/motions` 下新增目录（例如 `my-motion/`），并创建 `index.vue`
2. 在 `src/App.vue` 中导入组件
3. 将组件加入动效列表（或交互区）以便展示
4. 启动 `npm run dev` 检查视觉和交互效果

## 适用场景

- 设计系统中的动效规范沉淀
- 前端团队动效方案评审与对比
- 业务项目快速选型和拷贝复用
