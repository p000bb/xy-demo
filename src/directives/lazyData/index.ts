import { useIntersectionObserver } from "@vueuse/core";
import { type Directive } from "vue";

export const lazyData: Directive = {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        console.log("Intersecting");
        binding.value && binding.value();
        stop();
      }
    });
  }
};
