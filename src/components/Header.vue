<script setup>
import { ref } from "vue";
import { useFeedStore } from "../store/store";

const store = useFeedStore();

let inputUrl = ref("");
const handleSubmit = async () => {
  if (!!inputUrl.value) {
    await store.registerNewSource(inputUrl.value);
  }
};
</script>

<template>
  <div class="header">
    <form @submit.prevent="handleSubmit">
      <input type="url" required v-model="inputUrl" />
      <button type="submit" class="btn">Add</button>
    </form>
  </div>
</template>

<style scoped>
.header {
  background-color: rgb(36, 36, 36);
  padding: 1rem;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  width: 50%;
  justify-content: space-evenly;
}
input {
  width: 75%;
  font-size: 15px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 0.3rem;
  padding-left: 1rem;
  background-color: white;
  -webkit-appearance: none;
}
input:focus-visible {
  border: none;
  outline: none;
  -webkit-appearance: none;
  background-color: white;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.btn {
  transition: 0.4s;
  background-color: violet;
  border: 1px solid violet;
  border-radius: 50px;
  padding: 0.3rem 0.65rem;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
}
.btn:hover {
  transition: 0.4s;
  background-color: rgb(238, 130, 238, 0.2);
  color: violet;
}
</style>
