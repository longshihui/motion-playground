<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { animationCategories, animations } from "../data/animations";

const route = useRoute();
const router = useRouter();

const drawerVisible = ref(false);
const isMobile = ref(false);

const syncViewport = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    drawerVisible.value = false;
  }
};

onMounted(() => {
  syncViewport();
  window.addEventListener("resize", syncViewport);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", syncViewport);
});

const currentId = computed(() => String(route.params.id || "home"));
const currentTitle = computed(() => {
  if (currentId.value === "home") {
    return "首页";
  }
  const current = animations.find((item) => item.id === currentId.value);
  return current?.name || "动效中心";
});

const onMenuChange = (value) => {
  router.push(`/animation/${value}`);
  drawerVisible.value = false;
};
</script>

<template>
  <t-layout class="animation-layout" data-testid="animation-layout">
    <t-aside v-if="!isMobile" width="240px" class="sidebar">
      <div class="sidebar-head">
        <h2>动效分类</h2>
        <p>按场景导航</p>
      </div>
      <t-menu
        :value="currentId"
        width="100%"
        class="menu"
        @change="onMenuChange"
      >
        <t-menu-item value="home">
          <span
            data-testid="nav-item-home"
            :data-active="String(currentId === 'home')"
            >首页</span
          >
        </t-menu-item>
        <t-submenu
          v-for="group in animationCategories"
          :key="group.name"
          :value="group.name"
        >
          <template #title>{{ group.name }}</template>
          <t-menu-item
            v-for="item in group.children"
            :key="item.id"
            :value="item.id"
          >
            <span
              :data-testid="`nav-item-${item.id}`"
              :data-active="String(item.id === currentId)"
              >{{ item.name }}</span
            >
          </t-menu-item>
        </t-submenu>
      </t-menu>
    </t-aside>

    <t-layout>
      <t-header class="content-header">
        <t-space align="center">
          <t-button
            v-if="isMobile"
            theme="default"
            variant="outline"
            data-testid="mobile-nav-trigger"
            @click="drawerVisible = true"
          >
            动效导航
          </t-button>
          <router-link class="home-link" to="/animation/home"
            >返回动效首页</router-link
          >
        </t-space>
        <h1>{{ currentTitle }}</h1>
      </t-header>
      <t-content class="content-body">
        <router-view />
      </t-content>
    </t-layout>

    <t-drawer
      v-model:visible="drawerVisible"
      header="动效导航"
      placement="top"
      size="78%"
    >
      <t-menu
        :value="currentId"
        width="100%"
        class="menu"
        @change="onMenuChange"
      >
        <t-menu-item value="home">
          <span
            data-testid="mobile-nav-item-home"
            :data-active="String(currentId === 'home')"
            >首页</span
          >
        </t-menu-item>
        <t-submenu
          v-for="group in animationCategories"
          :key="`mobile-${group.name}`"
          :value="group.name"
        >
          <template #title>{{ group.name }}</template>
          <t-menu-item
            v-for="item in group.children"
            :key="`mobile-${item.id}`"
            :value="item.id"
          >
            <span
              :data-testid="`mobile-nav-item-${item.id}`"
              :data-active="String(item.id === currentId)"
              >{{ item.name }}</span
            >
          </t-menu-item>
        </t-submenu>
      </t-menu>
    </t-drawer>
  </t-layout>
</template>

<style scoped>
.animation-layout {
  min-height: 100vh;
  background: var(--td-bg-color-page, #f3f3f3);
}

.sidebar {
  border-right: 1px solid var(--td-component-stroke, #e7e7e7);
  background: var(--td-bg-color-container, #fff);
  padding: 20px 14px;
}

.sidebar-head {
  padding: 8px 10px 14px;
}

.sidebar-head h2 {
  margin: 0;
  font-size: 18px;
  color: var(--td-text-color-primary, #000);
}

.sidebar-head p {
  margin: 4px 0 0;
  color: var(--td-text-color-secondary, #666);
}

.menu {
  border-right: none;
}

.content-header {
  height: auto;
  padding: 20px 24px 14px;
  border-bottom: 1px solid var(--td-component-stroke, #e7e7e7);
  background: var(--td-bg-color-container, #fff);
}

.content-header h1 {
  margin: 14px 0 0;
  font-size: 26px;
  color: var(--td-text-color-primary, #000);
}

.home-link {
  color: var(--td-brand-color, #0052d9);
  text-decoration: none;
  font-size: 14px;
}

.content-body {
  padding: 20px 24px 26px;
}

[data-active="true"] {
  color: var(--td-brand-color, #0052d9);
  font-weight: 600;
}

:focus-visible {
  outline: 2px solid var(--td-brand-color, #0052d9);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .content-header {
    padding: 16px;
  }

  .content-header h1 {
    margin-top: 12px;
    font-size: 22px;
  }

  .content-body {
    padding: 16px;
  }
}
</style>
