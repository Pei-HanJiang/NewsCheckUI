<template>
  <n-card @click="$router.push('/link')" title="Mass bleaching of coral reefs caused by climate change and warming oceans, scientists say">
    <template #cover>
      <img
        src="../Images/coral.jpeg"
      />
    </template>
    <div class="source">
      Sky News
    </div>
    <n-tag :bordered="false" type="success" class="tag">
      80%
    </n-tag>
  </n-card>


<a href="">
  <n-card title="dsafdjkashfjkhadsjkfhjkahsdjkfhdsakjjhfsdjkhdsfakjdsdashkjhdskjahdjksafhkjdfsahdsjkafhjkdsah">
    <template #cover>
      <img
        src="../Images/JoeBiden.jpeg"
      />
    </template>
    <div class="source">
      Joe Biden
    </div>
    <n-tag :bordered="false" type="warning" class="tag">
      60%
    </n-tag>
  </n-card>
</a> 

<a href="">
  <n-card title="Global warming is fake">
    <template #cover>
      <img
        src="../Images/Trump.jpeg"
      />
    </template>
    <div class="source">
      Donald Trump
    </div>
    <n-tag :bordered="false" type="error" class="tag">
      30%
    </n-tag>
  </n-card>
</a> 







</template>

<script setup>
import { NCard, NTag } from "naive-ui";
</script>
<style scoped>
.n-card {
  width: 400px;
  height: 400px;
  box-shadow: 0px 0px 15px rgba(105, 92, 92, 0.3);
  margin: 10px;
  margin-bottom: 50px;
}

.n-card:hover {
    border: 1px solid #777;
    cursor: pointer;
}

.tag {
  position: absolute; /* Set position to absolute */
  bottom: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
}

.source {
  position: absolute;
  bottom: 10px;
}

</style>
 