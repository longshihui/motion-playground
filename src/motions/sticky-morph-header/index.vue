<template>
  <div class="stage">
    <div class="header">Dashboard</div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.header {
  width: 150px;
  height: 34px;
  border-radius: 12px;
  border: 1px solid #3f63c4;
  background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
  color: #dbeafe;
  font-size: 12px;
  display: grid;
  place-items: center;
  animation: morph 3s ease-in-out infinite;
}

@keyframes morph {
  0%,
  100% {
    width: 150px;
    height: 34px;
    border-radius: 12px;
  }
  50% {
    width: 112px;
    height: 24px;
    border-radius: 999px;
  }
}
</style>
