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
    </details>
  </div>
</template>

<style scoped></style>
