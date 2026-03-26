<template>
  <div class="stage">
    <div class="dot"></div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4ade80;
  animation: bounce-cycle 1.6s ease-in-out infinite;
}

@keyframes bounce-cycle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-11px);
  }
}
</style>
