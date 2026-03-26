<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="stage">
    <Transition name="expand">
      <div v-if="active" class="accordion">
        <p>通过 max-height + opacity 让内容展开更自然，避免突兀跳变。</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
}

.accordion {
  margin-top: 14px;
  border: 1px solid #2f7d6d;
  background: #123630;
  border-radius: 10px;
  padding: 10px;
}

.accordion p {
  color: #b9f5e8;
  margin: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.28s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}

.expand-enter-to,
.expand-leave-from {
  max-height: 80px;
}
</style>
