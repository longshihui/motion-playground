<template>
  <div class="stage">
    <div class="box"></div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.box {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7c90ff, #7c4dff);
  animation: fade-cycle 2s ease-in-out infinite;
}

@keyframes fade-cycle {
  0%,
  100% {
    opacity: 0.18;
  }
  50% {
    opacity: 1;
  }
}
</style>
