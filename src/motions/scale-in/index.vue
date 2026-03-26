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
  background: linear-gradient(135deg, #60a5fa, #8b5cf6);
  animation: scale-in-cycle 2.1s ease-in-out infinite;
}

@keyframes scale-in-cycle {
  0%,
  100% {
    transform: scale(0.7);
    opacity: 0.4;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
