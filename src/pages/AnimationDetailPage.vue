<script setup lang="ts">
import { computed, defineAsyncComponent, type Component } from "vue";
import { useRoute } from "vue-router";
import CodeSnippetCard from "../components/CodeSnippetCard.vue";
import { findAnimationById } from "../data/animations";

const route = useRoute();

const currentAnimation = computed(() =>
  findAnimationById(String(route.params.id || "")),
);

const previewComponent = computed<Component | null>(() => {
  if (!currentAnimation.value?.componentLoader) {
    return null;
  }
  return defineAsyncComponent(currentAnimation.value.componentLoader);
});
</script>

<template>
  <t-space v-if="currentAnimation" direction="vertical" size="16" fill>
    <t-card title="a. 动效说明">
      <t-space direction="vertical" size="10" fill>
        <p>{{ currentAnimation.description.principle }}</p>
        <ul class="facts">
          <li v-for="fact in currentAnimation.quickFacts" :key="fact.label">
            <span>{{ fact.label }}</span>
            <strong>{{ fact.value }}</strong>
          </li>
        </ul>
        <div class="preview-frame" aria-label="动效预览区域">
          <component :is="previewComponent" v-if="previewComponent" />
        </div>
      </t-space>
    </t-card>

    <t-card title="b. 业务场景">
      <div class="case-grid">
        <article
          v-for="item in currentAnimation.businessCases"
          :key="item.title"
          class="case-item"
        >
          <img :src="item.image" :alt="item.alt" loading="lazy" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </t-card>

    <t-space direction="vertical" size="16" fill>
      <CodeSnippetCard
        title="c. 开发代码 - template"
        language="xml"
        :code="currentAnimation.codeSnippet.template"
      />
      <CodeSnippetCard
        title="c. 开发代码 - ts"
        language="typescript"
        :code="currentAnimation.codeSnippet.script"
      />
      <CodeSnippetCard
        title="c. 开发代码 - style"
        language="css"
        :code="currentAnimation.codeSnippet.style"
      />
      <t-card title="关键动效属性">
        <t-space size="8" wrap>
          <t-tag
            v-for="item in currentAnimation.keyMotionProps"
            :key="item"
            variant="light"
            >{{ item }}</t-tag
          >
        </t-space>
      </t-card>
    </t-space>

    <t-card title="d. 开发模式">
      <t-space direction="vertical" size="10" fill>
        <p>{{ currentAnimation.developmentMode.reusable }}</p>
        <ul class="facts">
          <li
            v-for="item in currentAnimation.developmentMode.props"
            :key="item"
          >
            <span>Props 设计</span>
            <strong>{{ item }}</strong>
          </li>
        </ul>
        <p>{{ currentAnimation.developmentMode.pairing }}</p>
      </t-space>
    </t-card>
  </t-space>
  <t-card v-else title="未找到动效">
    <p>请从左侧菜单重新选择一个有效动效。</p>
  </t-card>
</template>

<style scoped>
p {
  margin: 0;
  color: var(--td-text-color-secondary, #666);
  line-height: 1.7;
}

.facts {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.facts li {
  border: 1px solid var(--td-component-stroke, #e7e7e7);
  border-radius: 10px;
  background: var(--td-bg-color-container, #fff);
  padding: 10px 12px;
  display: grid;
  gap: 4px;
}

.facts span {
  color: var(--td-text-color-secondary, #666);
  font-size: 13px;
}

.facts strong {
  color: var(--td-text-color-primary, #000);
  font-size: 14px;
}

.preview-frame {
  height: 120px;
  border-radius: 12px;
  border: 1px solid var(--td-component-stroke, #e7e7e7);
  background: linear-gradient(180deg, #1f2d57, #141d39);
  overflow: hidden;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.case-item {
  border: 1px solid var(--td-component-stroke, #e7e7e7);
  border-radius: 12px;
  padding: 10px;
  background: #fff;
}

.case-item img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.case-item h3 {
  margin: 10px 0 0;
  font-size: 15px;
  color: var(--td-text-color-primary, #000);
}

.case-item p {
  margin-top: 6px;
}

:focus-visible {
  outline: 2px solid var(--td-brand-color, #0052d9);
  outline-offset: 2px;
}
</style>
