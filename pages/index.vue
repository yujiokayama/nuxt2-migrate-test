<template>
  <h1>home</h1>
  <p>{{ commonStore.count }}</p>
  <button @click="commonStore.increment()">increment</button>
  <button @click="commonStore.decrement()">decrement</button>
</template>

<script setup lang="ts">
import { useCommonStore } from "~/store/common";

const commonStore = useCommonStore();
</script>

<style scoped lang="scss"></style>
