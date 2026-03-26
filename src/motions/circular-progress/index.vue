<template>
  <div class="stage">
    <div class="ring">
      <span>72%</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.ring {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: progress 2.6s ease-in-out infinite;
  background: conic-gradient(#38bdf8 0turn, #3b82f6 0turn, #23366a 0turn);
  position: relative;
}

.ring::after {
  content: "";
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  background: #13214a;
}

.ring span {
  position: relative;
  z-index: 1;
  font-size: 12px;
  color: #dbeafe;
}

@keyframes progress {
  0% {
    background: conic-gradient(#38bdf8 0turn, #3b82f6 0turn, #23366a 0turn);
  }
  100% {
    background: conic-gradient(#38bdf8 0.72turn, #3b82f6 0.72turn, #23366a 0.72turn);
  }
}
</style>
