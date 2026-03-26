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
    <Transition name="mask-fade">
      <div v-if="active" class="modal-mask">
        <Transition name="modal-pop" appear>
          <div class="modal-panel">
            <strong>确认操作</strong>
            <span>这是典型的“背景弱化 + 焦点强化”动效。</span>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
}

.modal-mask {
  position: absolute;
  inset: 0;
  background: rgba(8, 10, 20, 0.68);
  display: grid;
  place-items: center;
}

.modal-panel {
  width: 180px;
  border-radius: 12px;
  background: #ffffff;
  color: #111;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
}

.mask-fade-enter-active,
.mask-fade-leave-active {
  transition: opacity 0.25s ease;
}

.mask-fade-enter-from,
.mask-fade-leave-to {
  opacity: 0;
}

.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: all 0.25s ease;
}

.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
  transform: scale(0.88);
}
</style>
