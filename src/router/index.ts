import { createWebHashHistory, createRouter } from "vue-router";
import { type RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

/* Layout */

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "Home",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/vueuse",
        component: () => import("@/views/vueuse/index.vue"),
        name: "Vueuse",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/dayjs",
        component: () => import("@/views/dayjs/index.vue"),
        name: "Dayjs",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/lodash",
        component: () => import("@/views/lodash/index.vue"),
        name: "Lodash",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/tailwindcss",
        component: () => import("@/views/tailwindcss/index.vue"),
        name: "Tailwindcss",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/aos",
        component: () => import("@/views/aos/index.vue"),
        name: "Aos",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/gsap",
        component: () => import("@/views/gsap/index.vue"),
        name: "Gsap",
        meta: {
          title: "首页"
        }
      },
      {
        path: "/animate",
        component: () => import("@/views/animate/index.vue"),
        name: "Animate",
        meta: {
          title: "首页"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((_to: any, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
