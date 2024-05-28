<template>
  <div class="dayjs">
    <div>
      <span>当前时间：{{ now }}</span>
      <pre>
        dayjs().format("YYYY-MM-DD HH:mm:ss")
      </pre>
    </div>
    <div>
      <span>当前时间戳：{{ timestamp }}</span>
      <pre>
        dayjs().valueOf()
      </pre>
    </div>
    <div>
      <span>2020-01-01 距离当前时间：{{ diff }}</span>
      <pre>
        dayjs("2020-01-01").fromNow()
      </pre>
    </div>
    <div>
      <span>当前礼拜几：{{ week }}</span>
      <pre>
        dayjs().day()
      </pre>
    </div>
    <div>
      <span>2020-01-01 和 2020-01-02 相差天数：{{ diffDay }}</span>
      <pre>
        dayjs("2020-01-01").diff("2020-01-02", "day")
      </pre>
    </div>
    <div>
      <span>2020-01-01 和 2020-01-02 相差小时数：{{ diffHour }}</span>
      <pre>
        dayjs("2020-01-01").diff("2020-01-02", "hour")
      </pre>
    </div>
    <div>
      <span>2020-01-01 和 2020-01-02 相差分钟数：{{ diffMinute }}</span>
      <pre>
        dayjs("2020-01-01").diff("2020-01-02", "minute")
      </pre>
    </div>
    <div>
      <span>2020-01-01 和 2020-01-02 相差秒数：{{ diffSecond }}</span>
      <pre>
        dayjs("2020-01-01").diff("2020-01-02", "second")
      </pre>
    </div>
    <div>
      <span>2020-01-01 是否在 2020-01-02 之后：{{ isAfter }}</span>
      <pre>
        dayjs("2020-01-01").isAfter("2020-01-02")
      </pre>
    </div>
    <div>
      <span>2020-01-01 是否在 2020-01-02 之前：{{ isBefore }}</span>
      <pre>
        dayjs("2020-01-01").isBefore("2020-01-02")
      </pre>
    </div>
    <div>
      <span>2020-01-01 是否和 2020-01-02 相同：{{ isSame }}</span>
      <pre>
        dayjs("2020-01-01").isSame("2020-01-02")
      </pre>
    </div>
    <div>
      <span>2020-02-30 是否是一个有效的日期：{{ isValid }}</span>
      <pre>
        dayjs("2020-02-30").isValid()
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "dayjs/locale/zh-cn";
import { ref } from "vue";
import { useIntervalFn } from "@vueuse/core";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

// 获取当前时间格式 YYYY-MM-DD HH:mm:ss
const now = ref<string>(dayjs().format("YYYY-MM-DD HH:mm:ss"));
useIntervalFn(() => {
  now.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
}, 1000);

// 获取当前时间戳
const timestamp = ref<number>(dayjs().valueOf());
useIntervalFn(() => {
  timestamp.value = dayjs().valueOf();
}, 1);

// 获取日期距离当前时间的差值
const diff = dayjs("2020-01-01").fromNow();

// 获取当前礼拜几
const week = dayjs().day();

// 比较日期之间的差异
const diffDay = dayjs("2020-01-01").diff("2020-01-02", "day"); // -1
const diffHour = dayjs("2020-01-01").diff("2020-01-02", "hour"); // -24
const diffMinute = dayjs("2020-01-01").diff("2020-01-02", "minute"); // -1440
const diffSecond = dayjs("2020-01-01").diff("2020-01-02", "second"); // -86400

// 比较日期大小
const isAfter = dayjs("2020-01-01").isAfter("2020-01-02"); // true
const isBefore = dayjs("2020-01-01").isBefore("2020-01-02"); // false
const isSame = dayjs("2020-01-01").isSame("2020-01-02"); // false

// 判断传入的日期是否准确
const isValid = dayjs("2020-02-30", "YYYY-MM-DD", true).isValid(); // true
</script>
<style scoped lang="scss">
.dayjs {
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
    padding: 20px 10px 0 10px;
  }
}
</style>
