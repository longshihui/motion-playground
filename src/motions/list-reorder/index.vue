<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    label: string;
  }>;
}>();
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="list-wrap">
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
    </li>
  </TransitionGroup>
</template>

<style scoped>
.list-wrap {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.list-wrap li {
  padding: 8px 10px;
  border-radius: 8px;
  background: #1b244a;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-leave-active {
  position: absolute;
}
</style>
