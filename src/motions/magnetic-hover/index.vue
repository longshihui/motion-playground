<template>
  <div class="stage">
    <button class="magnetic">立即体验</button>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.magnetic {
  border: 1px solid #5a7bd9;
  background: linear-gradient(135deg, #1e40af, #1d4ed8);
  color: #dbeafe;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  animation: magnetic 2.6s ease-in-out infinite;
}

@keyframes magnetic {
  0%,
  100% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(2px, -1px);
  }
  40% {
    transform: translate(-2px, 1px);
  }
  60% {
    transform: translate(3px, 0);
  }
  80% {
    transform: translate(-1px, -2px);
  }
}
</style>
