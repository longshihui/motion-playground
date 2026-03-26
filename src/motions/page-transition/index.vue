<template>
  <div class="stage">
    <div class="screen screen-a">
      <span>页面 A</span>
    </div>
    <div class="screen screen-b">
      <span>页面 B</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.screen {
  position: absolute;
  inset: 12px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 12px;
  color: #dbeafe;
}

.screen-a {
  background: linear-gradient(140deg, #2563eb, #1d4ed8);
  animation: page-a 3.2s ease-in-out infinite;
}

.screen-b {
  background: linear-gradient(140deg, #7c3aed, #6d28d9);
  animation: page-b 3.2s ease-in-out infinite;
}

@keyframes page-a {
  0%,
  42% {
    opacity: 1;
    transform: translateX(0);
  }
  50%,
  92% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes page-b {
  0%,
  42% {
    opacity: 0;
    transform: translateX(30px);
  }
  50%,
  92% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
