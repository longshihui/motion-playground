<template>
  <div class="stage">
    <div class="wrap">
      <div class="lift">Hover 卡片</div>
    </div>
  </div>
</template>

<style scoped>
.stage {
  height: 100%;
  display: grid;
  place-items: center;
}

.wrap {
  perspective: 800px;
}

.lift {
  padding: 10px 14px;
  border-radius: 10px;
  background: linear-gradient(145deg, #3349aa, #23306c);
  border: 1px solid #4d61c0;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.lift:hover {
  transform: translateY(-6px) rotateX(10deg);
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35);
}
</style>
