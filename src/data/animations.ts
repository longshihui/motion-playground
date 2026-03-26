import type { Component } from "vue";
import type { MotionNavConfig } from "../motions/types";

type CodeSnippet = {
  template: string;
  script: string;
  style: string;
};

type QuickFact = {
  label: string;
  value: string;
};

type BusinessCase = {
  title: string;
  summary: string;
  image: string;
  alt: string;
};

type DevelopmentMode = {
  reusable: string;
  props: string[];
  pairing: string;
};

type Description = {
  principle: string;
  duration: string;
  easing: string;
  purpose: string;
};

type MotionSfcModule = {
  default: Component;
};

type MotionNavModule = {
  default: MotionNavConfig;
};

export type AnimationItem = MotionNavConfig & {
  description: Description;
  quickFacts: QuickFact[];
  businessCases: BusinessCase[];
  codeSnippet: CodeSnippet;
  keyMotionProps: string[];
  developmentMode: DevelopmentMode;
  componentLoader?: () => Promise<MotionSfcModule>;
  descriptionLoader?: () => Promise<MotionSfcModule>;
};

const navModules = import.meta.glob<MotionNavModule>("../motions/*/nav.ts");
const previewModules = import.meta.glob<MotionSfcModule>(
  "../motions/*/index.vue",
);
const descriptionModules = import.meta.glob<MotionSfcModule>(
  "../motions/*/Description.vue",
);

const descriptionMap = {
  入场与退场: {
    principle:
      "通过 opacity 与 transform 的组合形成视觉位移和层次变化，降低内容突现感。",
    duration: "220ms - 320ms",
    easing: "cubic-bezier(0.2, 0, 0, 1)",
    purpose: "帮助用户理解元素来源和出现顺序。",
  },
  强调反馈: {
    principle:
      "利用 scale、translate 或阴影脉冲形成短暂视觉峰值，强调操作结果。",
    duration: "160ms - 420ms",
    easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    purpose: "将注意力聚焦在可交互元素或关键状态上。",
  },
  加载状态: {
    principle: "通过循环动画提供系统忙碌状态反馈，缓解等待不确定性。",
    duration: "800ms - 1600ms（循环）",
    easing: "linear / ease-in-out",
    purpose: "降低等待焦虑，明确系统正在处理任务。",
  },
  内容编排: {
    principle: "将文本或卡片按节奏分批显示，建立阅读层级和叙事节奏。",
    duration: "300ms - 1200ms",
    easing: "ease-out / cubic-bezier(0.22, 1, 0.36, 1)",
    purpose: "提升信息可读性并强化品牌表达。",
  },
  路由与转场: {
    principle: "在页面或容器切换时引入连续过渡，保持上下文稳定性。",
    duration: "180ms - 360ms",
    easing: "cubic-bezier(0.2, 0, 0, 1)",
    purpose: "降低跳转割裂感，增强空间连续性。",
  },
  交互编排: {
    principle: "根据用户手势或行为触发顺序动画，强化操作和结果的因果关系。",
    duration: "200ms - 600ms",
    easing: "ease-in-out",
    purpose: "提升复杂交互的可理解性与可预期性。",
  },
} as const;

let animationCache: AnimationItem[] | null = null;

const makeSvg = (title: string, color: string): string => {
  const encoded = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='420' height='236' viewBox='0 0 420 236'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${color}' stop-opacity='0.88'/><stop offset='100%' stop-color='#ffffff' stop-opacity='0.2'/></linearGradient></defs><rect width='420' height='236' rx='20' fill='#f8fbff'/><rect x='14' y='14' width='392' height='208' rx='14' fill='url(#g)'/><text x='32' y='114' fill='#12295a' font-size='20' font-weight='700'>${title}</text><text x='32' y='146' fill='#1f3a72' font-size='14'>业务场景示意图</text></svg>`,
  );
  return `data:image/svg+xml;charset=UTF-8,${encoded}`;
};

const makeCode = (motionClass: string, title: string): CodeSnippet => ({
  template: `<template>
  <t-space direction="vertical" size="12" class="demo-wrap">
    <t-button theme="primary" @click="active = !active">触发${title}</t-button>
    <t-card class="motion-card">
      <div class="motion-block" :class="{ 'is-active': active }">内容区域</div>
    </t-card>
  </t-space>
</template>`,
  script: `<script setup lang="ts">
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
});

const normalizeAnimation = (
  config: MotionNavConfig,
  index: number,
): AnimationItem => {
  const description = descriptionMap[config.category];
  const colorA = [
    "#d7e9ff",
    "#d9f7e7",
    "#ffe7cf",
    "#f2e2ff",
    "#ffe5ec",
    "#e1f0ff",
  ][index % 6];
  const colorB = [
    "#88b4ff",
    "#6bd8ac",
    "#ffb778",
    "#bd98ff",
    "#ff9bb0",
    "#7bb7ff",
  ][index % 6];
  const motionClass = `motion-${config.id.replace(/-/g, "_")}`;
  return {
    ...config,
    description,
    quickFacts: [
      { label: "原理", value: description.principle },
      { label: "持续时长", value: description.duration },
      { label: "缓动函数", value: description.easing },
      { label: "视觉目的", value: description.purpose },
    ],
    businessCases: [
      {
        title: `${config.name}：案例一`,
        summary: `用于${config.scene.split("、")[0]}，在关键反馈阶段建立视觉连续性。`,
        image: makeSvg(`${config.name} · 案例一`, colorA),
        alt: `${config.name}业务场景图一`,
      },
      {
        title: `${config.name}：案例二`,
        summary: `用于${config.scene.split("、")[1] || config.scene.split("、")[0]}，强化用户对状态变化的感知。`,
        image: makeSvg(`${config.name} · 案例二`, colorB),
        alt: `${config.name}业务场景图二`,
      },
      {
        title: `${config.name}：案例三`,
        summary: `用于${config.scene.split("、")[2] || config.scene.split("、")[0]}，提升页面节奏与交互信心。`,
        image: makeSvg(`${config.name} · 案例三`, "#dce6ff"),
        alt: `${config.name}业务场景图三`,
      },
    ],
    codeSnippet: makeCode(motionClass, config.name),
    keyMotionProps: [
      "duration: 280ms",
      "easing: cubic-bezier(0.2, 0, 0, 1)",
      "transform + opacity 组合",
    ],
    developmentMode: {
      reusable:
        "将动效层封装为 MotionCard 组件，业务仅传入状态与插槽内容，减少重复样式。",
      props: [
        "active: boolean（触发状态）",
        "duration: number（毫秒）",
        "easing: string（缓动函数）",
        "delay: number（可选延迟）",
      ],
      pairing:
        "推荐与 TDesign 的 Card、Button、Space、Dialog 组合，保持视觉与交互一致性。",
    },
    componentLoader: previewModules[`../motions/${config.id}/index.vue`],
    descriptionLoader:
      descriptionModules[`../motions/${config.id}/Description.vue`],
  };
};

export const loadAnimations = async (): Promise<AnimationItem[]> => {
  if (animationCache) {
    return animationCache;
  }

  const entries = Object.entries(navModules).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  const rawConfigs = await Promise.all(
    entries.map(async ([, loader]) => (await loader()).default),
  );
  animationCache = rawConfigs.map((config, index) =>
    normalizeAnimation(config, index),
  );
  return animationCache;
};

export const findAnimationById = async (
  id: string,
): Promise<AnimationItem | undefined> => {
  const animations = await loadAnimations();
  return animations.find((item) => item.id === id);
};
