import { createApp } from "vue";
import router from "@/router";
import "./style.scss";
import App from "./App.vue";
import { loadDirectives } from "@/directives";

const app = createApp(App);

// 加载自定义指令
loadDirectives(app);

app.use(router);

app.mount("#app");
