<template>
  <div class="stage">
    <div class="typing">Motion makes UI alive</div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.typing {
  width: 180px;
  font-size: 13px;
  color: #dbe4ff;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #a5b4fc;
  animation:
    typing-cycle 3.2s steps(22) infinite,
    caret-cycle 0.65s step-end infinite;
}

@keyframes typing-cycle {
  0%,
  10% {
    width: 0;
  }
  60%,
  80% {
    width: 180px;
  }
  100% {
    width: 0;
  }
}

@keyframes caret-cycle {
  50% {
    border-right-color: transparent;
  }
}
</style>
