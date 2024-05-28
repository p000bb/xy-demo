<template>
  <div class="min-h-screen display overflow-hidden">
    <div key="1" class="w-full h-screen p-4 bg-[#f7d7b5] flex">
      <Transition
        name="custom-classes"
        mode="default"
        enter-active-class="animate__animated animate__bounce animate__slow"
        leave-active-class="animate__animated animate__wobble animate__slow"
      >
        <h1 class="m-auto font-bold text-8xl" v-if="show && type === 'Transition'">Animate.css</h1>
      </Transition>

      <h1
        class="m-auto font-bold text-8xl animate__animated animate__rubberBand animate__slow"
        v-if="show && type !== 'Transition'"
      >
        Animate.css
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
/* 文档地址
 *  https://animate.style/
 * 动画时长
 * animate__slow
 * 动画重复
 * animate__infinite
 * 动画延迟
 * animate__delay-2s
 * 动画速度
 */
import { onBeforeMount, onMounted, ref } from "vue";

const show = ref<boolean>(false);
const type = ref<string>("Transition");

onBeforeMount(() => {
  show.value = true;
});

onMounted(() => {
  setInterval(() => {
    show.value = !show.value;
  }, 2000);
});
</script>
<style scoped lang="scss"></style>
