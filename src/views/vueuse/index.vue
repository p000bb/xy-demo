<script setup lang="ts">
import { computed } from "vue";
import { useMagicKeys } from "@vueuse/core";
import Key from "./components/Key.vue";

const { shift, v, u, e, s, v_u_e, u_s_e, current } = useMagicKeys();
const keys = computed(() => Array.from(current));
</script>

<template>
  <div class="flex flex-col h-screen md:flex-row">
    <div class="p-10 m-auto bg-white">
      <note class="block w-full mt-0 mb-5 text-center"> Press the following keys to test out </note>
      <div class="flex justify-center gap-3">
        <Key :value="v"> V </Key>
        <Key :value="u"> u </Key>
        <Key :value="e"> e </Key>
        <div class="mx-1" />
        <Key :value="u"> U </Key>
        <Key :value="s"> s </Key>
        <Key :value="e"> e </Key>
      </div>

      <div class="flex justify-center gap-3 mt-3">
        <Key :value="shift"> Shift </Key>
        <Key :value="v_u_e"> Vue </Key>
        <Key :value="u_s_e"> Use </Key>
      </div>

      <div class="mt-4 text-center">
        <Note>Keys Pressed</Note>
        <div class="flex mt-2 justify-center space-x-1 min-h-[1.5em]">
          <code v-for="key in keys" :key="key" class="font-mono">
            {{ key }}
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
