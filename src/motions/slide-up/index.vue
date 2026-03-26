<template>
  <div class="stage">
    <div class="box"></div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.box {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, #93c5fd, #4f46e5);
  animation: slide-up-cycle 2s ease-in-out infinite;
}

@keyframes slide-up-cycle {
  0%,
  100% {
    transform: translateY(14px);
    opacity: 0.35;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
