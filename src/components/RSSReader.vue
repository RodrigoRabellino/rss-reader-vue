<script setup>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
import Posts from "./Posts.vue";
</script>
<template>
  <div class="main__container">
    <Header />
    <div class="body__container">
      <SideBar />
      <Posts />
    </div>
  </div>
</template>

<style scoped>
.main__container {
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
}
.body__container {
  display: flex;
  height: 100%;
}
</style>
