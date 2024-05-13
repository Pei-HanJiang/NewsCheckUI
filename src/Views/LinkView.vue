<template>
  <img class="img" src="https://e3.365dm.com/24/04/1600x900/skynews-coral-reefs-bleaching_6522674.jpg?20240415175941" alt="圖片" />
  <div class="container">
    <h1>Mass bleaching of coral reefs caused by climate change and warming oceans, scientists say</h1>
  </div>
  <div class="container">
    <p style="color: darkgray;">sky news</p>
    <p>  Scientists have issued warnings about the mass bleaching of coral reefs, attributing it to climate change and warming oceans. Coral bleaching, a process where stressed coral expel algae, is escalating globally. From February 2023, coral reef bleaching has been confirmed across 53 countries, marking the fourth global bleaching event. This phenomenon, akin to a "fever in humans," poses a threat to coral survival if prolonged.</p>

    <p>  The sustained heating of oceans, influenced by climate change and El Niño patterns, has exacerbated bleaching events. March 2023 saw a record-high global average sea surface temperature. Coral reefs require water temperatures at least 1°C warmer than usual for over four weeks to initiate bleaching. Coral reefs play a crucial role in sustaining marine life, biodiversity, erosion mitigation, and tourism economies.</p>

    <p>  While past bleaching events occurred, the current situation demands urgent action. In 2023, declared the hottest year on record, coral reefs faced unprecedented threats. To aid coral survival, cutting greenhouse gas emissions is paramount. However, some fear coral reefs may have surpassed a survival threshold, risking loss of 70% to 90% of global coral. Conservation efforts include cryopreserving coral larvae and breeding resilient corals.</p>

    <p>  In conclusion, reducing carbon emissions and addressing climate change are vital for coral reef preservation. Urgent global cooperation is necessary to safeguard these invaluable ecosystems for future generations.</p>
  </div>
    <div class="container">
    <h4>新聞連結</h4>
    <a href="https://news.sky.com/story/mass-bleaching-of-coral-reefs-caused-by-climate-change-and-warming-oceans-scientists-say-13116150">https://news.sky.com/story/mass-bleaching-of-coral-reefs-caused-by-climate-change-and-warming-oceans-scientists-say-13116150</a>
  </div>
  <div class="btn">
    <n-button @click="$router.push('/moreinfo')">Go back to previous page</n-button>  
    <n-button @click="$router.push('/')">Go to the firstPage</n-button>
    
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
</script>

<style scoped>

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
  justify-content: center;
  align-items: center;
  margin: 1% auto;
  width: 60%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 1% 1%;
  text-align: center;
}
p{
  text-align: left;
  padding: 0.5% 3%;
}
img{
  height:550px;
  width: 100%;
}

</style>
