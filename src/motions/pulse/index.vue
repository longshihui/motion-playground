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
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse-cycle 1.5s ease-in-out infinite;
}

@keyframes pulse-cycle {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.8);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(74, 222, 128, 0);
  }
}
</style>
