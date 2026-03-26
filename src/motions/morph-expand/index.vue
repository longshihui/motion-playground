<template>
  <div class="stage">
    <div class="panel">
      <span>详情卡片</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.panel {
  border-radius: 12px;
  background: linear-gradient(145deg, #1e40af, #3730a3);
  border: 1px solid #586fd4;
  color: #dbeafe;
  display: grid;
  place-items: center;
  font-size: 12px;
  animation: expand 3s ease-in-out infinite;
}

@keyframes expand {
  0%,
  100% {
    width: 76px;
    height: 36px;
    border-radius: 999px;
  }
  45%,
  70% {
    width: 148px;
    height: 70px;
    border-radius: 12px;
  }
}
</style>
