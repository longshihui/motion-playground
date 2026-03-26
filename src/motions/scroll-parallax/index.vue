<template>
  <div class="stage">
    <div class="layer back"></div>
    <div class="layer mid"></div>
    <div class="layer front"></div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.layer {
  position: absolute;
  inset: auto 0 0 0;
  border-radius: 10px 10px 0 0;
}

.back {
  height: 44px;
  background: #1e3a8a;
  animation: back 3s ease-in-out infinite;
}

.mid {
  height: 34px;
  background: #2563eb;
  animation: mid 3s ease-in-out infinite;
}

.front {
  height: 24px;
  background: #38bdf8;
  animation: front 3s ease-in-out infinite;
}

@keyframes back {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes mid {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

@keyframes front {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-11px);
  }
}
</style>
