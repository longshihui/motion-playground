<template>
  <div class="stage">
    <div class="skeleton">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.skeleton {
  width: 150px;
  display: grid;
  gap: 8px;
}

.skeleton span {
  height: 10px;
  border-radius: 999px;
  background: #2c3769;
  position: relative;
  overflow: hidden;
}

.skeleton span::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.22),
    rgba(255, 255, 255, 0)
  );
  animation: shimmer-cycle 1.5s linear infinite;
}

@keyframes shimmer-cycle {
  100% {
    transform: translateX(100%);
  }
}
</style>
