<template>
  <div class="stage">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.spinner {
  width: 28px;
  height: 28px;
  border: 3px solid #2c3769;
  border-top-color: #8b5cf6;
  border-radius: 50%;
  animation: spin-cycle 1s linear infinite;
}

@keyframes spin-cycle {
  to {
    transform: rotate(360deg);
  }
}
</style>
