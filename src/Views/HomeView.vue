<script setup>
import { NButton } from "naive-ui";
import { RouterLink } from "vue-router";

</script>

<template>
  <div class="body-container">
    <div class="left-content">
      <h1>Identify questionable</h1>
      <p>Verify article authenticity with confidence scores.</p>
      <!-- can also use <RouterLink to="/" on a text -->
        <n-button @click="$router.push('/input')">Get Score</n-button>
    </div>
    <div class="right-content">
      <img class="img" src="../Images/News.gif" alt="圖片" />
    </div>
  </div>
</template>

<style scoped>
.img {
  border: none;
  border-radius: 20px; /* 設定圓形 */
  max-width: 90%;
  margin: 5% 0;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3); 
}
/* test  */

.body-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* 背景顏色 */
  width: 90%;
  border-radius: 20px; /* 設定圓形 */
  margin: 0 auto; /* 水平置中 */
  margin-bottom: 20px;
}

.left-content {
  flex: 1;
  text-align: center;
}

.right-content {
  flex: 1;
  text-align: center;
  max-width: 50%;
}



</style>
