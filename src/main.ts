import { createApp } from "vue";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
import "highlight.js/styles/github.min.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(TDesign).use(router).mount("#app");
