<template>
  <div class="stage">
    <div class="marquee">
      <span>系统升级通知 · 限时活动进行中 · 新版本已发布 · </span>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.marquee {
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  color: #bfdbfe;
  font-size: 13px;
}

.marquee span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee-cycle 7s linear infinite;
}

@keyframes marquee-cycle {
  100% {
    transform: translateX(-100%);
  }
}
</style>
