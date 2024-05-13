<template>
  <div class="text">
    <h1>More News</h1>
  </div>
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
  margin-top: 3.5%;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;
}
</style>


<!-- In case of more cards visit -->
<!-- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox -->