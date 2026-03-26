<template>
  <div class="stage">
    <div class="skeleton"></div>
    <div class="content">真实内容</div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
}

.skeleton,
.content {
  width: 140px;
  height: 56px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 12px;
}

.skeleton {
  position: absolute;
  background: linear-gradient(90deg, #2c3769, #3d4d84, #2c3769);
  background-size: 220% 100%;
  animation: skeleton 2.8s linear infinite, fade-out 2.8s ease-in-out infinite;
}

.content {
  background: linear-gradient(135deg, #1e40af, #1d4ed8);
  color: #dbeafe;
  animation: fade-in 2.8s ease-in-out infinite;
}

@keyframes skeleton {
  to {
    background-position: -220% 0;
  }
}

@keyframes fade-out {
  0%,
  48% {
    opacity: 1;
  }
  62%,
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0%,
  48% {
    opacity: 0;
  }
  62%,
  100% {
    opacity: 1;
  }
}
</style>
