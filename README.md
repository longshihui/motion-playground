# Motion Playground

Vue 3 + Vite 动效展示站点，包含首页展示与动效中心两套页面：

- `/` 首页保持原有动效展示能力，仅在头部新增“动效中心”入口
- `/animation` 动效中心列表页（左侧分类导航 / 右侧内容）
- `/animation/:id` 动效详情页（说明、业务场景、开发代码、开发模式）

## 技术栈

- Vue 3 + Vue Router
- Vite 8
- TDesign Vue Next
- highlight.js
- Jest + @testing-library/vue

## 启动命令

```bash
npm install
npm run dev
```

默认地址：

```txt
http://localhost:5173
```

## 常用脚本

```bash
npm run dev      # 本地开发
npm run build    # 生产构建
npm run preview  # 预览产物
npm run test     # 单元测试
```

## 测试覆盖

- 导航高亮逻辑（路由切换后 active 状态更新）
- 代码复制功能（调用 clipboard）
- 响应式布局（<=768px 显示抽屉导航触发器）
