import { type App } from "vue";
import { lazyData } from "./lazyData";

/** 挂载自定义指令 */
export function loadDirectives(app: App) {
  app.directive("lazy-data", lazyData);
}
