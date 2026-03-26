<template>
  <div class="stage">
    <div class="dots">
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.dots {
  display: flex;
  gap: 7px;
}

.dots i {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #c4b5fd;
  animation: dots-cycle 1.2s ease-in-out infinite;
}

.dots i:nth-child(2) {
  animation-delay: 0.15s;
}

.dots i:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes dots-cycle {
  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.45;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
