<script setup>
import { animationCategories, animations } from "../data/animations";
</script>

<template>
  <t-space direction="vertical" size="16" fill>
    <t-card title="动效列表页">
      <p>请选择左侧导航中的动效。每个动效均提供说明、业务场景、开发代码与复用模式。</p>
      <p>当前共收录 {{ animations.length }} 个动效，按 {{ animationCategories.length }} 个分类管理。</p>
    </t-card>
    <t-card title="使用方式">
      <t-space direction="vertical" size="8">
        <p>1. 通过菜单切换到指定动效路由（/animation/:id）。</p>
        <p>2. 右侧内容区按固定顺序展示四个模块。</p>
        <p>3. 代码区支持语法高亮与一键复制。</p>
      </t-space>
    </t-card>
  </t-space>
</template>
