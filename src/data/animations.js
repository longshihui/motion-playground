const motionModules = import.meta.glob("../motions/*/index.vue");

const makeSvg = (title, color) => {
  const encoded = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='236' viewBox='0 0 420 236'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${color}' stop-opacity='0.88'/><stop offset='100%' stop-color='#ffffff' stop-opacity='0.2'/></linearGradient></defs><rect width='420' height='236' rx='20' fill='#f8fbff'/><rect x='14' y='14' width='392' height='208' rx='14' fill='url(#g)'/><text x='32' y='114' fill='#12295a' font-size='20' font-weight='700'>${title}</text><text x='32' y='146' fill='#1f3a72' font-size='14'>业务场景示意图</text></svg>`,
  );
  return `data:image/svg+xml;charset=UTF-8,${encoded}`;
};

const makeCode = (motionClass, title) => {
  return {
    template: `<template>
  <t-space direction="vertical" size="12" class="demo-wrap">
    <t-button theme="primary" @click="active = !active">触发${title}</t-button>
    <t-card class="motion-card">
      <div class="motion-block" :class="{ 'is-active': active }">内容区域</div>
    </t-card>
  </t-space>
</template>`,
    script: `<script setup>
import { ref } from "vue";

const active = ref(false);
</script>`,
    style: `<style scoped>
.motion-card {
  width: 280px;
}

.motion-block {
  opacity: 0.3;
  transform: translateY(12px) scale(0.98);
  transition:
    opacity 280ms cubic-bezier(0.2, 0, 0, 1),
    transform 280ms cubic-bezier(0.2, 0, 0, 1);
}

.motion-block.is-active.${motionClass} {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>`,
  };
};

const seeds = [
  { id: "fade", name: "淡入淡出", category: "入场与退场", scene: "页面初次渲染、列表切换、提示信息出现" },
  { id: "slide-up", name: "滑入", category: "入场与退场", scene: "卡片逐条出现、滚动触发内容登场" },
  { id: "scale-in", name: "缩放入场", category: "入场与退场", scene: "弹层、图片预览、重点信息聚焦" },
  { id: "rotate-in", name: "旋转入场", category: "入场与退场", scene: "品牌活动页、奖品展示、节日主题模块" },
  { id: "bounce", name: "弹跳", category: "强调反馈", scene: "CTA 按钮强调、活动角标吸引注意" },
  { id: "pulse", name: "呼吸", category: "强调反馈", scene: "在线状态、直播中状态、持续可点击反馈" },
  { id: "shake", name: "抖动", category: "强调反馈", scene: "表单错误提示、密码错误、输入校验失败" },
  { id: "ripple", name: "波纹点击", category: "强调反馈", scene: "按钮点击反馈、移动端交互确认" },
  { id: "shimmer", name: "骨架屏闪光", category: "加载状态", scene: "数据加载中占位、内容懒加载过渡" },
  { id: "dots-loader", name: "点状加载", category: "加载状态", scene: "短时间等待、对话机器人正在输入" },
  { id: "spinner", name: "旋转加载", category: "加载状态", scene: "请求处理中、上传下载进行中" },
  { id: "indeterminate-progress", name: "不定进度条", category: "加载状态", scene: "任务耗时未知、后台处理中状态" },
  { id: "typing", name: "文字打字机", category: "内容编排", scene: "Slogan 展示、空状态引导文案、Hero 区标题" },
  { id: "marquee", name: "跑马灯", category: "内容编排", scene: "公告栏、活动消息轮播、行情提示" },
  { id: "hover-lift", name: "悬浮抬升", category: "强调反馈", scene: "商品卡片、功能入口卡、文章列表卡片" },
  { id: "flip-card", name: "3D 翻转", category: "内容编排", scene: "会员卡片、优惠信息正反面、知识卡片" },
  { id: "page-transition", name: "页面转场", category: "路由与转场", scene: "路由切换、多步骤流程、内容分页切换" },
  { id: "count-up", name: "数字滚动", category: "内容编排", scene: "数据看板、交易金额、关键指标展示" },
  { id: "circular-progress", name: "环形进度", category: "加载状态", scene: "上传进度、任务进度、学习打卡进度" },
  { id: "drawer-slide", name: "抽屉滑入", category: "路由与转场", scene: "筛选面板、移动端菜单、侧边设置入口" },
  { id: "tabs-indicator", name: "标签滑块", category: "路由与转场", scene: "标签切换、数据分组、功能面板切换" },
  { id: "stagger-reveal", name: "列表渐显", category: "入场与退场", scene: "骨架屏结束、推荐列表出现、分步信息展示" },
  { id: "drag-reorder", name: "拖拽重排", category: "交互编排", scene: "任务优先级调整、看板卡片排序、列表管理" },
  { id: "dropzone-hover", name: "拖拽上传高亮", category: "交互编排", scene: "文件上传、素材导入、附件提交交互反馈" },
  { id: "magnetic-hover", name: "悬浮磁吸", category: "强调反馈", scene: "按钮强化、CTA 焦点、可点击元素强调" },
  { id: "tilt-parallax", name: "倾斜视差", category: "内容编排", scene: "品牌卡片、产品封面、活动展示模块" },
  { id: "scroll-parallax", name: "滚动视差", category: "内容编排", scene: "长页面叙事、专题页分层、视觉节奏增强" },
  { id: "sticky-morph-header", name: "吸顶收缩头部", category: "路由与转场", scene: "滚动吸顶导航、工作台 Header 收缩" },
  { id: "morph-expand", name: "卡片形变展开", category: "路由与转场", scene: "卡片到详情、摘要到完整内容过渡" },
  { id: "toast-stack", name: "消息堆叠", category: "强调反馈", scene: "多条通知展示、消息连续反馈场景" },
  { id: "skeleton-crossfade", name: "骨架到内容渐隐", category: "加载状态", scene: "加载结束过渡、避免内容突兀闪现" },
  { id: "success-check", name: "成功勾选", category: "强调反馈", scene: "支付成功、提交成功、任务完成反馈" },
];

const descriptionMap = {
  "入场与退场": {
    principle: "通过 opacity 与 transform 的组合形成视觉位移和层次变化，降低内容突现感。",
    duration: "220ms - 320ms",
    easing: "cubic-bezier(0.2, 0, 0, 1)",
    purpose: "帮助用户理解元素来源和出现顺序。",
  },
  "强调反馈": {
    principle: "利用 scale、translate 或阴影脉冲形成短暂视觉峰值，强调操作结果。",
    duration: "160ms - 420ms",
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    purpose: "将注意力聚焦在可交互元素或关键状态上。",
  },
  "加载状态": {
    principle: "通过循环动画提供系统忙碌状态反馈，缓解等待不确定性。",
    duration: "800ms - 1600ms（循环）",
    easing: "linear / ease-in-out",
    purpose: "降低等待焦虑，明确系统正在处理任务。",
  },
  "内容编排": {
    principle: "将文本或卡片按节奏分批显示，建立阅读层级和叙事节奏。",
    duration: "300ms - 1200ms",
    easing: "ease-out / cubic-bezier(0.22, 1, 0.36, 1)",
    purpose: "提升信息可读性并强化品牌表达。",
  },
  "路由与转场": {
    principle: "在页面或容器切换时引入连续过渡，保持上下文稳定性。",
    duration: "180ms - 360ms",
    easing: "cubic-bezier(0.2, 0, 0, 1)",
    purpose: "降低跳转割裂感，增强空间连续性。",
  },
  "交互编排": {
    principle: "根据用户手势或行为触发顺序动画，强化操作和结果的因果关系。",
    duration: "200ms - 600ms",
    easing: "ease-in-out",
    purpose: "提升复杂交互的可理解性与可预期性。",
  },
};

export const animations = seeds.map((seed, index) => {
  const description = descriptionMap[seed.category];
  const colorA = ["#d7e9ff", "#d9f7e7", "#ffe7cf", "#f2e2ff", "#ffe5ec", "#e1f0ff"][index % 6];
  const colorB = ["#88b4ff", "#6bd8ac", "#ffb778", "#bd98ff", "#ff9bb0", "#7bb7ff"][index % 6];
  const motionClass = `motion-${seed.id.replace(/-/g, "_")}`;
  return {
    ...seed,
    description,
    quickFacts: [
      { label: "原理", value: description.principle },
      { label: "持续时长", value: description.duration },
      { label: "缓动函数", value: description.easing },
      { label: "视觉目的", value: description.purpose },
    ],
    businessCases: [
      {
        title: `${seed.name}：案例一`,
        summary: `用于${seed.scene.split("、")[0]}，在关键反馈阶段建立视觉连续性。`,
        image: makeSvg(`${seed.name} · 案例一`, colorA),
        alt: `${seed.name}业务场景图一`,
      },
      {
        title: `${seed.name}：案例二`,
        summary: `用于${seed.scene.split("、")[1] || seed.scene.split("、")[0]}，强化用户对状态变化的感知。`,
        image: makeSvg(`${seed.name} · 案例二`, colorB),
        alt: `${seed.name}业务场景图二`,
      },
      {
        title: `${seed.name}：案例三`,
        summary: `用于${seed.scene.split("、")[2] || seed.scene.split("、")[0]}，提升页面节奏与交互信心。`,
        image: makeSvg(`${seed.name} · 案例三`, "#dce6ff"),
        alt: `${seed.name}业务场景图三`,
      },
    ],
    codeSnippet: makeCode(motionClass, seed.name),
    keyMotionProps: ["duration: 280ms", "easing: cubic-bezier(0.2, 0, 0, 1)", "transform + opacity 组合"],
    developmentMode: {
      reusable: "将动效层封装为 MotionCard 组件，业务仅传入状态与插槽内容，减少重复样式。",
      props: [
        "active: boolean（触发状态）",
        "duration: number（毫秒）",
        "easing: string（缓动函数）",
        "delay: number（可选延迟）",
      ],
      pairing: "推荐与 TDesign 的 Card、Button、Space、Dialog 组合，保持视觉与交互一致性。",
    },
    componentLoader: motionModules[`../motions/${seed.id}/index.vue`],
  };
});

export const animationCategories = Array.from(
  animations.reduce((acc, item) => {
    if (!acc.has(item.category)) {
      acc.set(item.category, []);
    }
    acc.get(item.category).push(item);
    return acc;
  }, new Map()),
).map(([name, children]) => ({ name, children }));

export const findAnimationById = (id) => animations.find((item) => item.id === id);
