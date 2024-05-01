<template>
  <div class="text">
    <h1>Article Verification</h1>
  </div>

  <div class="score-container">
    <div class="score">
      <n-progress
        type="circle"
        :percentage="65"
        :offset-degree="120"
        color="red"
      />
      <span>Overall</span>
    </div>

    <div class="score">
      <n-progress type="circle" :percentage="80" :offset-degree="120" />
      <span>Content</span>
    </div>

    <div class="score">
      <n-progress type="circle" :percentage="50" :offset-degree="120" />
      <span>Source</span>
    </div>
  </div>
  <div class="content-container">
    <div class="content">
      <n-scrollbar style="height: 450px">
        <div>
            <n-tooltip trigger="hover">
            <template #trigger>
            加油站不可告人的三大秘密
            第一點: 早上和晚上的油最便宜
            因為熱脹冷縮的原理，這個時候汽油的質量最大。所以花同樣的錢，結果加的油卻變多了
            第二點: 加油的時候一定要跟加油的人員說
            加多少升而不是加多少錢，因為四捨五入之後，吃虧的還是你自己喔。
            第三點: 加完油之後不要說湊個整數    
            因為此時湊整數裡面的油，都是輸油管裡面的空氣，等於加了個寂寞
        </template>
    If it looks like a duck, walks like a duck, and quacks like a duck...it must
    be a duck.
  </n-tooltip>
        </div>

      </n-scrollbar>
    </div>
  </div>

  <div class="btn">
    <n-button @click="$router.push('/moreinfo')">See more</n-button>
  </div>
</template>

<script setup>
import { NButton, NProgress, NScrollbar, NTooltip } from "naive-ui";
</script>

<style scoped>
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;
}

.score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 30px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.score-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.content {
  display: flex;
  justify-content: center;
  max-width: 97%;
  max-height: 97%;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #dedddd;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 480px;
  width: 1200px;
  border-radius: 10px;
  background-color: #f0f0f0;
  margin-bottom: 15px;
}
.content div {
  margin: 20px 30px;
  font-size: 1.2rem;
}
</style>
