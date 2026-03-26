<script setup>
import { computed, ref } from "vue";
import FadeMotion from "../motions/fade/index.vue";
import SlideUpMotion from "../motions/slide-up/index.vue";
import ScaleInMotion from "../motions/scale-in/index.vue";
import RotateInMotion from "../motions/rotate-in/index.vue";
import BounceMotion from "../motions/bounce/index.vue";
import PulseMotion from "../motions/pulse/index.vue";
import ShakeMotion from "../motions/shake/index.vue";
import RippleMotion from "../motions/ripple/index.vue";
import ShimmerMotion from "../motions/shimmer/index.vue";
import DotsLoaderMotion from "../motions/dots-loader/index.vue";
import SpinnerMotion from "../motions/spinner/index.vue";
import IndeterminateProgressMotion from "../motions/indeterminate-progress/index.vue";
import TypingMotion from "../motions/typing/index.vue";
import MarqueeMotion from "../motions/marquee/index.vue";
import HoverLiftMotion from "../motions/hover-lift/index.vue";
import FlipCardMotion from "../motions/flip-card/index.vue";
import PageTransitionMotion from "../motions/page-transition/index.vue";
import CountUpMotion from "../motions/count-up/index.vue";
import CircularProgressMotion from "../motions/circular-progress/index.vue";
import DrawerSlideMotion from "../motions/drawer-slide/index.vue";
import TabsIndicatorMotion from "../motions/tabs-indicator/index.vue";
import StaggerRevealMotion from "../motions/stagger-reveal/index.vue";
import DragReorderMotion from "../motions/drag-reorder/index.vue";
import DropzoneHoverMotion from "../motions/dropzone-hover/index.vue";
import MagneticHoverMotion from "../motions/magnetic-hover/index.vue";
import TiltParallaxMotion from "../motions/tilt-parallax/index.vue";
import ScrollParallaxMotion from "../motions/scroll-parallax/index.vue";
import StickyMorphHeaderMotion from "../motions/sticky-morph-header/index.vue";
import MorphExpandMotion from "../motions/morph-expand/index.vue";
import ToastStackMotion from "../motions/toast-stack/index.vue";
import SkeletonCrossfadeMotion from "../motions/skeleton-crossfade/index.vue";
import SuccessCheckMotion from "../motions/success-check/index.vue";
import ModalMotion from "../motions/modal/index.vue";
import ToastMotion from "../motions/toast/index.vue";
import AccordionMotion from "../motions/accordion/index.vue";
import ListReorderMotion from "../motions/list-reorder/index.vue";

const showModal = ref(false);
const showToast = ref(true);
const showPanel = ref(false);
const compactList = ref(false);

const items = ref([
  { id: 1, label: "登录成功" },
  { id: 2, label: "订单已支付" },
  { id: 3, label: "已开始下载" },
  { id: 4, label: "消息已送达" },
]);

const orderedItems = computed(() => {
  if (compactList.value) {
    return [items.value[2], items.value[0], items.value[3]];
  }
  return items.value;
});

const activeInteractiveCount = computed(() => {
  return [
    showModal.value,
    showToast.value,
    showPanel.value,
    compactList.value,
  ].filter(Boolean).length;
});

const motionList = [
  { name: "淡入淡出（Fade In/Out）", scene: "页面初次渲染、列表切换、提示信息出现", component: FadeMotion },
  { name: "滑入（Slide Up）", scene: "卡片逐条出现、滚动触发内容登场", component: SlideUpMotion },
  { name: "缩放入场（Scale In）", scene: "弹层、图片预览、重点信息聚焦", component: ScaleInMotion },
  { name: "旋转入场（Rotate In）", scene: "品牌活动页、奖品展示、节日主题模块", component: RotateInMotion },
  { name: "弹跳（Bounce）", scene: "CTA 按钮强调、活动角标吸引注意", component: BounceMotion },
  { name: "呼吸（Pulse）", scene: "在线状态、直播中状态、持续可点击反馈", component: PulseMotion },
  { name: "抖动（Shake）", scene: "表单错误提示、密码错误、输入校验失败", component: ShakeMotion },
  { name: "波纹点击（Ripple）", scene: "按钮点击反馈、移动端交互确认", component: RippleMotion },
  { name: "骨架屏闪光（Shimmer）", scene: "数据加载中占位、内容懒加载过渡", component: ShimmerMotion },
  { name: "点状加载（Dots Loader）", scene: "短时间等待、对话机器人正在输入", component: DotsLoaderMotion },
  { name: "旋转加载（Spinner）", scene: "请求处理中、上传下载进行中", component: SpinnerMotion },
  { name: "不定进度条（Indeterminate）", scene: "任务耗时未知、后台处理中状态", component: IndeterminateProgressMotion },
  { name: "文字打字机（Typing）", scene: "Slogan 展示、空状态引导文案、Hero 区标题", component: TypingMotion },
  { name: "跑马灯（Marquee）", scene: "公告栏、活动消息轮播、行情提示", component: MarqueeMotion },
  { name: "悬浮抬升（Hover Lift）", scene: "商品卡片、功能入口卡、文章列表卡片", component: HoverLiftMotion },
  { name: "3D 翻转（Flip Card）", scene: "会员卡片、优惠信息正反面、知识卡片", component: FlipCardMotion },
  { name: "页面转场（Page Transition）", scene: "路由切换、多步骤流程、内容分页切换", component: PageTransitionMotion },
  { name: "数字滚动（Count Up）", scene: "数据看板、交易金额、关键指标展示", component: CountUpMotion },
  { name: "环形进度（Circular Progress）", scene: "上传进度、任务进度、学习打卡进度", component: CircularProgressMotion },
  { name: "抽屉滑入（Drawer Slide）", scene: "筛选面板、移动端菜单、侧边设置入口", component: DrawerSlideMotion },
  { name: "标签滑块（Tabs Indicator）", scene: "标签切换、数据分组、功能面板切换", component: TabsIndicatorMotion },
  { name: "列表渐显（Stagger Reveal）", scene: "骨架屏结束、推荐列表出现、分步信息展示", component: StaggerRevealMotion },
  { name: "拖拽重排（Drag Reorder）", scene: "任务优先级调整、看板卡片排序、列表管理", component: DragReorderMotion },
  { name: "拖拽上传高亮（Dropzone Hover）", scene: "文件上传、素材导入、附件提交交互反馈", component: DropzoneHoverMotion },
  { name: "悬浮磁吸（Magnetic Hover）", scene: "按钮强化、CTA 焦点、可点击元素强调", component: MagneticHoverMotion },
  { name: "倾斜视差（Tilt Parallax）", scene: "品牌卡片、产品封面、活动展示模块", component: TiltParallaxMotion },
  { name: "滚动视差（Scroll Parallax）", scene: "长页面叙事、专题页分层、视觉节奏增强", component: ScrollParallaxMotion },
  { name: "吸顶收缩头部（Sticky Morph Header）", scene: "滚动吸顶导航、工作台 Header 收缩", component: StickyMorphHeaderMotion },
  { name: "卡片形变展开（Morph Expand）", scene: "卡片到详情、摘要到完整内容过渡", component: MorphExpandMotion },
  { name: "消息堆叠（Toast Stack）", scene: "多条通知展示、消息连续反馈场景", component: ToastStackMotion },
  { name: "骨架到内容渐隐（Skeleton Crossfade）", scene: "加载结束过渡、避免内容突兀闪现", component: SkeletonCrossfadeMotion },
  { name: "成功勾选（Success Check）", scene: "支付成功、提交成功、任务完成反馈", component: SuccessCheckMotion },
];
</script>

<template>
  <main class="shell">
    <div class="grain"></div>
    <div class="orb orb-blue"></div>
    <div class="orb orb-orange"></div>
    <div class="page">
      <header class="hero">
        <div class="hero-main card-frame">
          <p class="eyebrow">MOTION SYSTEM</p>
          <h1>Web Motion Gallery</h1>
          <p class="hero-desc">以组件化为核心的动效展厅，覆盖入场、反馈、加载与交互切换场景。</p>
          <div class="tags">
            <span>Vue 3</span>
            <span>Vite 8</span>
            <span>Design-first UI</span>
            <router-link class="tag-link" to="/animation">动效中心</router-link>
          </div>
        </div>
        <aside class="hero-side card-frame">
          <h2>状态面板</h2>
          <div class="stats">
            <div>
              <strong>{{ motionList.length }}</strong>
              <small>基础动效</small>
            </div>
            <div>
              <strong>4</strong>
              <small>交互演示</small>
            </div>
            <div>
              <strong>{{ activeInteractiveCount }}</strong>
              <small>已激活</small>
            </div>
          </div>
        </aside>
      </header>

      <section class="section card-frame">
        <div class="section-head">
          <h2>交互型动效</h2>
          <p>用于弹窗、消息、折叠面板与列表重排的高频交互动效。</p>
        </div>
        <div class="controls">
          <button class="ctrl-btn" @click="showModal = !showModal">{{ showModal ? "关闭弹窗动效" : "打开弹窗动效" }}</button>
          <button class="ctrl-btn" @click="showToast = !showToast">{{ showToast ? "收起 Toast" : "显示 Toast" }}</button>
          <button class="ctrl-btn" @click="showPanel = !showPanel">{{ showPanel ? "收起折叠面板" : "展开折叠面板" }}</button>
          <button class="ctrl-btn" @click="compactList = !compactList">{{ compactList ? "恢复列表" : "触发列表重排" }}</button>
        </div>
        <div class="interactive-grid">
          <article class="interactive-card">
            <h3>Modal：遮罩淡入 + 弹窗缩放</h3>
            <p>场景：确认删除、支付二次确认、登录弹窗。</p>
            <div class="interactive-demo">
              <ModalMotion :active="showModal" />
            </div>
          </article>
          <article class="interactive-card">
            <h3>Toast：右上角滑入滑出</h3>
            <p>场景：保存成功、复制成功、网络恢复提醒。</p>
            <div class="interactive-demo">
              <ToastMotion :active="showToast" />
            </div>
          </article>
          <article class="interactive-card">
            <h3>Accordion：高度过渡</h3>
            <p>场景：FAQ、筛选面板、设置项分组。</p>
            <div class="interactive-demo">
              <AccordionMotion :active="showPanel" />
            </div>
          </article>
          <article class="interactive-card">
            <h3>列表重排：Stagger + FLIP 感知</h3>
            <p>场景：任务看板、通知列表、动态排序。</p>
            <div class="interactive-demo">
              <ListReorderMotion :items="orderedItems" />
            </div>
          </article>
        </div>
      </section>

      <section class="section card-frame">
        <div class="section-head">
          <h2>常用动效总览</h2>
          <p>每个动效都是独立组件，可直接迁移到业务仓库。</p>
        </div>
        <div class="grid">
          <article v-for="item in motionList" :key="item.name" class="card">
            <div class="demo"><component :is="item.component" /></div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.scene }}</p>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.shell {
  --ink: #15213f;
  --ink-soft: #4d5f87;
  --line: rgba(38, 71, 133, 0.22);
  --paper: rgba(250, 252, 255, 0.75);
  --paper-strong: rgba(244, 248, 255, 0.92);
  --surface: rgba(237, 243, 255, 0.76);
  --accent: #2458d8;
  position: relative;
  min-height: 100vh;
  padding: 30px;
  overflow: hidden;
  background:
    radial-gradient(circle at 10% 12%, rgba(118, 173, 255, 0.36), transparent 38%),
    radial-gradient(circle at 90% 8%, rgba(255, 186, 124, 0.36), transparent 36%),
    linear-gradient(180deg, #eef4ff 0%, #e8f0ff 100%);
}

.grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(24, 32, 56, 0.08) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
  opacity: 0.2;
}

.orb {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(60px);
}

.orb-blue {
  background: rgba(87, 152, 255, 0.35);
  top: -120px;
  left: -140px;
}

.orb-orange {
  background: rgba(255, 175, 99, 0.32);
  top: 210px;
  right: -150px;
}

.page {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
  color: var(--ink);
}

.card-frame {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--paper);
  backdrop-filter: blur(6px);
  box-shadow:
    0 16px 30px rgba(38, 71, 133, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.hero {
  display: grid;
  grid-template-columns: 1.45fr 0.85fr;
  gap: 14px;
}

.hero-main,
.hero-side {
  padding: 24px;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.26em;
  color: #4363af;
  font-weight: 700;
}

.hero h1 {
  margin: 10px 0 0;
  font-size: clamp(34px, 4.2vw, 52px);
  letter-spacing: -0.03em;
  line-height: 0.96;
  color: #0d1d42;
}

.hero-desc {
  max-width: 720px;
  margin: 14px 0 0;
  font-size: 16px;
  color: var(--ink-soft);
  line-height: 1.55;
}

.tags {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tags span,
.tag-link {
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(59, 91, 158, 0.26);
  background: var(--paper-strong);
  color: #264484;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}

.tag-link:hover {
  background: #f3f8ff;
}

.hero-side h2 {
  margin: 0;
  font-size: 16px;
  color: #2f467d;
}

.stats {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 8px;
}

.stats div {
  border: 1px solid rgba(72, 107, 179, 0.24);
  border-radius: 12px;
  background: var(--paper-strong);
  padding: 12px;
  display: grid;
  gap: 4px;
}

.stats strong {
  font-size: 22px;
  color: #112450;
}

.stats small {
  font-size: 12px;
  color: #5670a8;
}

.section {
  padding: 18px 18px 20px;
}

.section-head h2 {
  margin: 0;
  font-size: 25px;
  letter-spacing: -0.02em;
  color: #112450;
}

.section-head p {
  margin: 6px 0 0;
  color: #5f75a5;
}

h3 {
  margin: 0;
  font-size: 16px;
  color: #122658;
}

p {
  margin: 6px 0 0;
  color: #5f75a5;
}

.controls {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ctrl-btn {
  border: 1px solid rgba(53, 90, 166, 0.28);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(236, 244, 255, 0.95));
  color: #15326d;
  padding: 9px 14px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.ctrl-btn:hover {
  transform: translateY(-1px);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(228, 239, 255, 0.98));
  box-shadow: 0 8px 16px rgba(43, 78, 146, 0.16);
}

.interactive-grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.interactive-card {
  border: 1px solid rgba(74, 111, 185, 0.2);
  border-radius: 16px;
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.9), rgba(241, 247, 255, 0.85));
  padding: 15px;
  min-height: 182px;
}

.interactive-demo {
  margin-top: 10px;
  height: 94px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(22, 33, 73, 0.98), rgba(18, 25, 53, 0.98));
  border: 1px solid rgba(33, 64, 129, 0.24);
  overflow: hidden;
  position: relative;
}

.grid {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 12px;
}

.card {
  border: 1px solid rgba(74, 111, 185, 0.2);
  border-radius: 16px;
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.9), rgba(241, 247, 255, 0.85));
  padding: 15px;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease-out,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-3px);
  border-color: rgba(69, 112, 197, 0.44);
  box-shadow: 0 12px 22px rgba(57, 91, 160, 0.16);
}

.demo {
  height: 95px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(24, 37, 82, 0.98), rgba(19, 30, 61, 0.98));
  border: 1px solid rgba(33, 64, 129, 0.24);
  margin-bottom: 12px;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}

@media (max-width: 820px) {
  .shell {
    padding: 16px;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>
