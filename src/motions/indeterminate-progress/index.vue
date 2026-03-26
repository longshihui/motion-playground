<template>
  <div class="stage">
    <div class="progress">
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

.progress {
  width: 150px;
  height: 8px;
  border-radius: 999px;
  background: #2c3769;
  overflow: hidden;
}

.progress span {
  display: block;
  width: 55%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #22d3ee, #3b82f6);
  animation: indeterminate-cycle 1.5s ease-in-out infinite;
}

@keyframes indeterminate-cycle {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
