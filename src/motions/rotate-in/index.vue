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
  background: linear-gradient(135deg, #22d3ee, #6366f1);
  animation: rotate-in-cycle 2.2s ease-in-out infinite;
}

@keyframes rotate-in-cycle {
  0%,
  100% {
    transform: rotate(-14deg) scale(0.82);
    opacity: 0.2;
  }
  50% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}
</style>
