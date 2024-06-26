import { useIntersectionObserver } from "@vueuse/core";
import { type Directive } from "vue";
import exampleImg from "@/assets/example-image.jpg";

export const lazyImg: Directive = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 当图片url无效加载失败的时候使用默认图片替代
        el.onerror = function () {
          el.src = exampleImg;
        };
        el.src = binding.value;
        stop();
      } else {
        el.src = exampleImg;
      }
    });
  }
};
