<template>
  <div class="stage">
    <div class="mask"></div>
    <div class="drawer">
      <span>筛选面板</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  animation: mask-cycle 2.8s ease-in-out infinite;
}

.drawer {
  position: absolute;
  right: 0;
  top: 8px;
  bottom: 8px;
  width: 84px;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(180deg, #1d4ed8, #1e3a8a);
  color: #dbeafe;
  display: grid;
  place-items: center;
  font-size: 12px;
  animation: drawer-cycle 2.8s ease-in-out infinite;
}

@keyframes drawer-cycle {
  0%,
  18% {
    transform: translateX(100%);
  }
  30%,
  70% {
    transform: translateX(0);
  }
  82%,
  100% {
    transform: translateX(100%);
  }
}

@keyframes mask-cycle {
  0%,
  18%,
  82%,
  100% {
    opacity: 0;
  }
  30%,
  70% {
    opacity: 1;
  }
}
</style>
