<script setup>
import { useFeedStore } from "@/store/store";
const store = useFeedStore();

const handleClick = (source) => store.loadSource(source);
</script>
<template>
  <div class="sidebar">
    <div v-for="(source, i) in store.sources" :key="i">
      <a href="#" @click.prevent="() => handleClick(source)">{{
        source.name
      }}</a>
    </div>
  </div>
</template>

<style scoped></style>
