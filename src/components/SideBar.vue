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

<style scoped>
.sidebar {
  width: 200px;
  background-color: rgb(36, 36, 36);
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  left: 0;
}
a {
  transition: 0.4s;
  color: violet;
  text-decoration: none;
  font-size: 20px;
  flex-wrap: nowrap;
  overflow: hidden;
}
a:hover {
  transition: 0.4s;
  text-decoration: underline;
}
</style>
