<template>
  <div class="flex h-screen bg-slate-200">
    <div class="grid grid-cols-4 gap-10 m-auto 3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 max-lg:grid-cols-1">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="flex items-center justify-center transition-all duration-300 ease-in-out shadow-lg rounded-2xl hover:cursor-pointer hover:shadow-2xl h-[300px]"
        :style="item.style"
        @click="goRouter(item)"
      >
        <img :src="item.icon" class="w-[150px] h-[150px] p-4" v-if="item.icon" />
        <span class="text-4xl font-bold">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const list = [
  {
    name: "vueuse",
    type: "js",
    icon: "https://avatars.githubusercontent.com/u/77578415",
    style: "background:linear-gradient(45deg,#fff,#6bc86c 41%)"
  },
  {
    name: "dayjs",
    type: "js",
    icon: "https://nodejs.cn/logo/day.png",
    style: "background:linear-gradient(45deg,#fff,#cf4647 41%)"
  },
  {
    name: "lodash",
    type: "js",
    icon: "https://avatars.githubusercontent.com/u/2565403",
    style: "background:linear-gradient(45deg,#fff,#fb6052 41%)"
  },
  {
    name: "tailwindcss",
    type: "css",
    icon: "https://nodejs.cn/logo/tailwind.png",
    style: "background:linear-gradient(45deg,#fff,#0ea5e9 41%)",
    href: "https://tailwind.nodejs.cn/"
  },
  {
    name: "gsap",
    type: "css",
    icon: "https://avatars.githubusercontent.com/u/2386673",
    style: "background:linear-gradient(45deg,#fff,#7ec242 41%)"
  },
  {
    name: "aos",
    type: "css",
    style: "background:linear-gradient(45deg,#fff,#687634 41%)"
  },
  {
    name: "animate",
    type: "css",
    icon: "https://avatars.githubusercontent.com/u/64791939",
    style: "background:linear-gradient(45deg,#fff,#f7b42c 41%)"
  },
  {
    name: "更多优秀开源库",
    style: "background:linear-gradient(45deg,#fff,#1b6dff 41%)",
    href: "https://nodejs.cn/"
  }
];

const goRouter = ({ name, href }: any) => {
  if (href) return window.open(href, "_blank");
  router.push({ path: `/${name}` });
};
</script>
<style scoped lang="scss"></style>
