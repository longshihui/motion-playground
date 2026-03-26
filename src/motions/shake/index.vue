<template>
  <div class="stage">
    <div class="badge">输入错误</div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.badge {
  padding: 8px 12px;
  border-radius: 999px;
  background: #7f1d1d;
  border: 1px solid #ef4444;
  color: #fecaca;
  font-size: 12px;
  animation: shake-cycle 1.9s ease-in-out infinite;
}

@keyframes shake-cycle {
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-4px);
  }
  40% {
    transform: translateX(4px);
  }
  60% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(3px);
  }
}
</style>
