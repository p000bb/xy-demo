<template>
  <div class="lodash">
    <div>
      <span>深拷贝</span>
      <pre>{{ obj1 }}</pre>
      <pre>{{ obj2 }}</pre>
    </div>
    <div>
      <span>防抖示例</span>
      <button class="p-1 ml-4 text-white bg-blue-500 rounded" @click="debounceFn()">点击</button>
      <pre>{{ denumber }}</pre>
    </div>
    <div>
      <span>节流示例</span>
      <button class="p-1 ml-4 text-white bg-blue-500 rounded" @click="throttleFn()">点击</button>
      <pre>{{ thnumber }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cloneDeep, debounce, throttle } from "lodash-es";

// #region 深拷贝
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};

let obj1 = obj;
const obj2 = cloneDeep(obj);
obj.b.c = 4;
console.log(obj1, obj2);
// #endregion

// #region 防抖示例
const denumber = ref<number>(0);
const debounceFn = debounce(
  () => {
    denumber.value++;
  },
  1000,
  {
    leading: false,
    trailing: true
  }
);
// #endregion

// #region 节流示例
const thnumber = ref<number>(0);
const throttleFn = throttle(
  () => {
    thnumber.value++;
  },
  1000,
  {
    leading: true,
    trailing: true
  }
);

// #endregion
</script>
<style scoped lang="scss">
.lodash {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 600px;
    text-align: left;
    padding: 20px;
    background-color: #f0f0f0;
    margin: 10px;
  }
  pre {
    margin-top: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 20px 10px 10px 10px;
  }
}
</style>
