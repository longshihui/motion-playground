<script setup lang="ts">
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { computed, ref } from "vue";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);

const props = defineProps<{
  title: string;
  code: string;
  language: string;
}>();

const copyText = ref("复制代码");

const highlighted = computed(() => {
  try {
    return hljs.highlight(props.code, { language: props.language }).value;
  } catch {
    return hljs.highlightAuto(props.code).value;
  }
});

const onCopy = async () => {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(props.code);
  }
  copyText.value = "复制成功";
  window.setTimeout(() => {
    copyText.value = "复制代码";
  }, 1200);
};
</script>

<template>
  <t-card :title="title">
    <t-space direction="vertical" size="10" fill>
      <div class="copy-row">
        <t-button
          theme="primary"
          variant="outline"
          size="small"
          data-testid="copy-button"
          @click="onCopy"
          >复制代码</t-button
        >
        <t-typography-text
          :copyable="{ text: code, onCopy }"
          data-testid="copy-control"
          >{{ copyText }}</t-typography-text
        >
      </div>
      <pre class="code-block"><code v-html="highlighted"></code></pre>
    </t-space>
  </t-card>
</template>

<style scoped>
.copy-row {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
}

.code-block {
  margin: 0;
  border-radius: 12px;
  border: 1px solid var(--td-component-stroke, #e7e7e7);
  background: #f8fafc;
  padding: 14px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.56;
}
</style>
