<script setup>
import { useFeedStore } from "../store/store";
const { current } = useFeedStore();
</script>
<template>
  <div class="main">
    <h1 v-if="current.source">{{ current.source.name }}</h1>

    <details v-for="post in current.items" :key="post.title">
      <summary>
        {{ post.title }}
      </summary>
      <div v-html="post.content"></div>
      <hr />
    </details>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  gap: 1rem;
}
hr {
  margin-top: 1rem;
}
</style>
