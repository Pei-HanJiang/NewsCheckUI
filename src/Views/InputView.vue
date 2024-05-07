<template>
  <div class="body-container">
    <n-space vertical>
      <h1 class="text">Give us more information</h1>
      <n-input type="url"
        v-model:value="value"
        
        placeholder="URL"
        class="custom1"
      />
     
      <n-input type="textarea"
        v-model:value="textareaValue"
        placeholder="News input"
        class="custom2"
      />
      <n-button @click="$router.push('/result')" class="submitBtn"
        >Submit</n-button
      >
    </n-space>
  </div>
</template> 

<script>
import { defineComponent, ref } from "vue";
import { NInput, NSpace, NButton } from "naive-ui"; // Import the components you need

export default defineComponent({
  components: { NInput, NSpace, NButton }, // Register the components
  setup() {
    const value = ref(null); // Separate ref for text input
    const textareaValue = ref(null); // Separate ref for textarea input

    return {
      value,
      textareaValue,
    };
  },
});
</script>

<style scoped>
.body-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff; /* 背景顏色 */
  margin: 0 auto; /* 水平置中 */
  border-radius: 20px; /* 設定圓形 */
  width: 90%;
  margin-bottom: 20px;
}
.custom1 {
  width: 600px; /* Set the width of the input */
}

.custom2 {
  width: 600px; /* Set the width of the input */
  height: 400px;
}

.submitBtn {
  margin-left: calc(
    50% - 50px
  ); /* Set left margin to half of the window's width minus half of the button's width */
  margin-top: 5px;
  margin-bottom: 2%;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 1%;
}
</style>

<!-- 若需動態輸入可以參考 -->
<!-- https://www.naiveui.com/zh-CN/os-theme/components/dynamic-input -->
<!-- 可考慮增加steps -->

