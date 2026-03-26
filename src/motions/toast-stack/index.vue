<template>
  <div class="stage">
    <div class="toast t1">保存成功</div>
    <div class="toast t2">已同步</div>
    <div class="toast t3">上传完成</div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.toast {
  position: absolute;
  right: 10px;
  border-radius: 999px;
  background: #1d4ed8;
  color: #dbeafe;
  font-size: 10px;
  padding: 5px 10px;
  animation: stack 2.8s ease-in-out infinite;
}

.t1 {
  top: 18px;
  animation-delay: 0s;
}

.t2 {
  top: 38px;
  animation-delay: 0.18s;
}

.t3 {
  top: 58px;
  animation-delay: 0.36s;
}

@keyframes stack {
  0%,
  100% {
    opacity: 0;
    transform: translateX(24px);
  }
  25%,
  72% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
