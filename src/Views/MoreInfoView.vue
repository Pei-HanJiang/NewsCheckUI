<template>
  <div class="card-container">
    <Card />
  </div>
  <br/>
  <div class="btn">
      <n-button @click="$router.push('/')">Go to the firstPage</n-button>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { NButton } from "naive-ui";
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}
</style>
