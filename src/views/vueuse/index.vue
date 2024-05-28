<template>
  <div>
    <div v-for="(item, index) in 20" class="flex h-screen">
      <img
        v-lazy-img="`https://place.dog/1000/700?key=${index}`"
        :key="index"
        class="w-[1000px] h-[700px] m-auto"
        v-lazy-data="() => getUrl(`https://place.dog/1000/700?key=${index}`)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const getUrl = (url: string) => {
  console.log(url);
};
</script>
<style scoped lang="scss"></style>
