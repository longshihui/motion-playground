<template>
  <div class="stage">
    <div class="flip-card">
      <div class="front">正面</div>
      <div class="back">背面</div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.flip-card {
  width: 82px;
  height: 52px;
  position: relative;
  transform-style: preserve-3d;
  animation: flip-cycle 3.2s ease-in-out infinite;
}

.front,
.back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 8px;
  backface-visibility: hidden;
  font-size: 12px;
}

.front {
  background: #1d4ed8;
}

.back {
  background: #7c3aed;
  transform: rotateY(180deg);
}

@keyframes flip-cycle {
  0%,
  35% {
    transform: rotateY(0);
  }
  50%,
  85% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
