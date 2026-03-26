<template>
  <div class="stage">
    <div class="dropzone">
      <span>拖拽文件到此</span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.dropzone {
  width: 150px;
  height: 58px;
  border-radius: 10px;
  border: 1.5px dashed #5b86f1;
  background: rgba(37, 99, 235, 0.14);
  color: #dbeafe;
  font-size: 11px;
  display: grid;
  place-items: center;
  animation: drop-hover 1.8s ease-in-out infinite;
}

@keyframes drop-hover {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.25);
    border-color: #5b86f1;
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
    border-color: #93c5fd;
  }
}
</style>
