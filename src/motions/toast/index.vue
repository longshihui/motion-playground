<script setup lang="ts">
defineProps<{
  active: boolean;
}>();
</script>

<template>
  <div class="stage">
    <Transition name="toast-slide">
      <div v-if="active" class="toast">保存成功</div>
    </Transition>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
}

.toast {
  position: absolute;
  right: 12px;
  top: 36px;
  background: #4f46e5;
  color: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 13px;
}

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.25s ease;
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
