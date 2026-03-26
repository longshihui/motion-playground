<template>
  <div class="stage">
    <button class="button">点击按钮</button>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.button {
  border: none;
  color: #fff;
  background: #4338ca;
  border-radius: 999px;
  padding: 8px 14px;
  position: relative;
  overflow: hidden;
}

.button::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid rgba(196, 181, 253, 0.9);
  animation: ripple-cycle 1.8s ease-out infinite;
}

@keyframes ripple-cycle {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
