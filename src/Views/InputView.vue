<template>
  <div class="text">
    <h1>Give us more information</h1>
  </div>
  <div class="body-container">
    <n-space vertical>
      <n-input
        v-model:value="value"
        :input-props="{ type: 'url' }"
        placeholder="URL"
        class="custom1"
      />

      <n-input
        v-model:value="textareaValue"
        :input-props="{ type: 'textarea' }"
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
  margin-bottom: 20px;
}
.custom1 {
  width: 800px; /* Set the width of the input */
}

.custom2 {
  height: 400px;
}

.submitBtn {
  margin-left: calc(
    50% - 50px
  ); /* Set left margin to half of the window's width minus half of the button's width */
  margin-top: 5px;
  margin-bottom: -10%;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;
  margin-bottom: 1%;
}
</style>

<!-- 若需動態輸入可以參考 -->
<!-- https://www.naiveui.com/zh-CN/os-theme/components/dynamic-input -->
<!-- 可考慮增加steps -->

