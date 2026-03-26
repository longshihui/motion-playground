<template>
  <div class="stage">
    <div class="tilt-card">
      <div class="shine"></div>
      <span>3D 卡片</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
  perspective: 700px;
}

.tilt-card {
  width: 84px;
  height: 54px;
  border-radius: 10px;
  background: linear-gradient(145deg, #1d4ed8, #2563eb);
  color: #dbeafe;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  animation: tilt 2.8s ease-in-out infinite;
}

.shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.38) 50%,
    rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  animation: shine 2.8s ease-in-out infinite;
}

.tilt-card span {
  position: relative;
  z-index: 1;
  font-size: 11px;
}

@keyframes tilt {
  0%,
  100% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  30% {
    transform: rotateX(12deg) rotateY(-12deg);
  }
  65% {
    transform: rotateX(-10deg) rotateY(10deg);
  }
}

@keyframes shine {
  20% {
    transform: translateX(-120%);
  }
  70% {
    transform: translateX(140%);
  }
  100% {
    transform: translateX(140%);
  }
}
</style>
