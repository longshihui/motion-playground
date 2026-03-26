<template>
  <div class="stage">
    <ul class="list">
      <li>推荐内容 01</li>
      <li>推荐内容 02</li>
      <li>推荐内容 03</li>
    </ul>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.list {
  width: 145px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.list li {
  background: #1e3a8a;
  border: 1px solid #3b5cb5;
  color: #dbeafe;
  border-radius: 8px;
  padding: 5px 8px;
  font-size: 11px;
  opacity: 0;
  transform: translateY(8px);
  animation: reveal 2.4s ease-in-out infinite;
}

.list li:nth-child(2) {
  animation-delay: 0.16s;
}

.list li:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes reveal {
  0%,
  25% {
    opacity: 0;
    transform: translateY(8px);
  }
  38%,
  78% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
}
</style>
