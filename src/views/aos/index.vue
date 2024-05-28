<template>
  <div class="aos">
    <div class="w-[1000px] mx-auto overflow-x-hidden relative z-10">
      <div class="flex items-center w-full h-screen text-center text-9xl">AOS</div>
      <div
        v-for="(item, index) in list"
        :key="index"
        :data-aos="item.name"
        class="my-20 w-[60%]"
        :class="index % 2 === 1 ? 'float-right' : 'float-left'"
        v-bind="item.attr"
      >
        <pre>
        <div class="bg-[#202746] text-[#979db4] text-base py-10">
        {{ `<div data-aos="${item.name}"></div>` }}
      </div>
    </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* 文档地址
 * https://michalsnik.github.io/aos/
 */
// aos
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // 动画时长
  delay: 0, // 延迟时间
  easing: "ease-in-out", // 缓动函数
  anchorPlacement: "top-bottom", // 锚点位置
  debounceDelay: 50, // 防抖延迟
  throttleDelay: 99, // 节流延迟
  once: true, // 是否只执行一次
  offset: 200 // 偏移量
});

const list = [
  {
    name: "fade-up",
    type: "FADE",
    attr: {
      "data-aos-duration": 2000
    }
  },
  { name: "fade-down", type: "FADE" },
  { name: "fade-right", type: "FADE" },
  { name: "fade-left", type: "FADE" },
  { name: "fade-up-right", type: "FADE" },
  { name: "fade-up-left", type: "FADE" },
  { name: "fade-down-right", type: "FADE" },
  { name: "fade-down-left", type: "FADE" },
  { name: "flip-left", type: "FLIP" },
  { name: "flip-right", type: "FLIP" },
  { name: "flip-up", type: "FLIP" },
  { name: "flip-down", type: "FLIP" },
  { name: "zoom-in", type: "ZOOM" },
  { name: "zoom-in-up", type: "ZOOM" },
  { name: "zoom-in-down", type: "ZOOM" },
  { name: "zoom-in-left", type: "ZOOM" },
  { name: "zoom-in-right", type: "ZOOM" },
  { name: "zoom-out", type: "ZOOM" },
  { name: "zoom-out-up", type: "ZOOM" },
  { name: "zoom-out-down", type: "ZOOM" },
  { name: "zoom-out-left", type: "ZOOM" },
  { name: "zoom-out-right", type: "ZOOM" }
];
</script>
<style scoped lang="scss">
.aos {
  background-image: url("https://michalsnik.github.io/aos/img/bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  // 添加伪类after
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f4d9e;
    opacity: 0.7;
    z-index: 1;
  }
}
</style>
