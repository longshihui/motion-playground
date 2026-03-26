<template>
  <div class="stage">
    <div class="circle">
      <svg viewBox="0 0 24 24" class="check">
        <path d="M5 12.5L10 17.5L19 8.5" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #16a34a;
  display: grid;
  place-items: center;
  animation: pop 2.4s ease-in-out infinite;
}

.check {
  width: 28px;
  height: 28px;
}

.check path {
  fill: none;
  stroke: #ecfdf5;
  stroke-width: 2.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: draw 2.4s ease-in-out infinite;
}

@keyframes pop {
  0%,
  100% {
    transform: scale(0.86);
  }
  25%,
  70% {
    transform: scale(1);
  }
}

@keyframes draw {
  0%,
  12% {
    stroke-dashoffset: 30;
  }
  30%,
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
