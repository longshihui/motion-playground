<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { loadAnimations, type AnimationItem } from "../data/animations";
import {
  buildSidebarGroups,
  HOME_NAV_ITEM,
  type SidebarGroup,
} from "../navigation/sidebar";

const route = useRoute();
const router = useRouter();

const drawerVisible = ref(false);
const isMobile = ref(false);
const animations = ref<AnimationItem[]>([]);
const sidebarGroups = ref<SidebarGroup[]>([]);

const syncViewport = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    drawerVisible.value = false;
  }
};

onMounted(() => {
  syncViewport();
  void loadSidebarData();
  window.addEventListener("resize", syncViewport);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", syncViewport);
});

const currentId = computed(() => String(route.params.id || "home"));
const currentTitle = computed(() => {
  if (currentId.value === "home") {
    return HOME_NAV_ITEM.name;
  }
  const current = animations.value.find((item) => item.id === currentId.value);
  return current?.name || "动效中心";
});

const loadSidebarData = async () => {
  animations.value = await loadAnimations();
  sidebarGroups.value = buildSidebarGroups(animations.value);
};

const onMenuChange = (value: string | number) => {
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
        <t-menu-item :value="HOME_NAV_ITEM.id">
          <span
            data-testid="nav-item-home"
            :data-active="String(currentId === HOME_NAV_ITEM.id)"
            >{{ HOME_NAV_ITEM.name }}</span
          >
        </t-menu-item>
        <t-submenu
          v-for="group in sidebarGroups"
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

    <t-layout class="main-layout">
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
        <t-menu-item :value="HOME_NAV_ITEM.id">
          <span
            data-testid="mobile-nav-item-home"
            :data-active="String(currentId === HOME_NAV_ITEM.id)"
            >{{ HOME_NAV_ITEM.name }}</span
          >
        </t-menu-item>
        <t-submenu
          v-for="group in sidebarGroups"
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
  height: 100vh;
  background: var(--td-bg-color-page, #f3f3f3);
}

.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 240px;
  border-right: 1px solid var(--td-component-stroke, #e7e7e7);
  background: var(--td-bg-color-container, #fff);
  padding: 20px 14px;
  overflow-y: auto;
  z-index: 10;
}

.main-layout {
  margin-left: 240px;
  min-width: 0;
  height: 100vh;
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
  flex: 1;
  padding: 20px 24px 26px;
  overflow-y: auto;
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
  .animation-layout {
    height: auto;
    min-height: 100vh;
  }

  .main-layout {
    margin-left: 0;
    height: auto;
    min-height: 100vh;
  }

  .content-header {
    padding: 16px;
  }

  .content-header h1 {
    margin-top: 12px;
    font-size: 22px;
  }

  .content-body {
    padding: 16px;
    overflow-y: visible;
  }
}
</style>
