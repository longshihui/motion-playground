<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const value = ref(0);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    value.value += 48;
    if (value.value >= 1280) {
      value.value = 0;
    }
  }, 120);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div class="stage">
    <div class="number">{{ value }}</div>
    <span class="label">实时数据</span>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.number {
  font-size: 28px;
  font-weight: 700;
  color: #bfdbfe;
  letter-spacing: 0.03em;
}

.label {
  margin-top: 4px;
  font-size: 12px;
  color: #93c5fd;
}
</style>
