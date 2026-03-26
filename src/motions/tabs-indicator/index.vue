<template>
  <div class="stage">
    <div class="tabs">
      <span>概览</span>
      <span>趋势</span>
      <span>设置</span>
      <i class="indicator"></i>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.tabs {
  width: 160px;
  height: 42px;
  border-radius: 10px;
  background: #1a2b55;
  border: 1px solid #334679;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  position: relative;
  color: #bfdbfe;
  font-size: 11px;
  text-align: center;
}

.indicator {
  position: absolute;
  bottom: 4px;
  left: 8px;
  width: 38px;
  height: 3px;
  border-radius: 999px;
  background: #38bdf8;
  animation: tab-slide 2.8s ease-in-out infinite;
}

@keyframes tab-slide {
  0%,
  20% {
    transform: translateX(0);
  }
  33%,
  53% {
    transform: translateX(48px);
  }
  66%,
  86% {
    transform: translateX(96px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
