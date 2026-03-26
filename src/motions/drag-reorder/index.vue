<template>
  <div class="stage">
    <div class="deck">
      <div class="item i1">任务 A</div>
      <div class="item i2">任务 B</div>
      <div class="item i3">任务 C</div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.deck {
  width: 120px;
  height: 58px;
  position: relative;
}

.item {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 20px;
  border-radius: 8px;
  background: #1e40af;
  border: 1px solid #3b5cb5;
  color: #dbeafe;
  font-size: 10px;
  display: grid;
  place-items: center;
}

.i1 {
  top: 0;
  animation: top-move 3s ease-in-out infinite;
}

.i2 {
  top: 19px;
  animation: mid-move 3s ease-in-out infinite;
}

.i3 {
  top: 38px;
  animation: bot-move 3s ease-in-out infinite;
}

@keyframes top-move {
  0%,
  22%,
  100% {
    transform: translateY(0);
  }
  40%,
  72% {
    transform: translateY(38px);
  }
}

@keyframes mid-move {
  0%,
  22%,
  100% {
    transform: translateY(0);
  }
  40%,
  72% {
    transform: translateY(-19px);
  }
}

@keyframes bot-move {
  0%,
  22%,
  100% {
    transform: translateY(0);
  }
  40%,
  72% {
    transform: translateY(-19px);
  }
}
</style>
