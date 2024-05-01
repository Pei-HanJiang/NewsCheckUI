<script setup>
  //import HomeView from './Views/HomeView.vue';
  import Header from "./components/Header.vue";
  import Footer from './components/Footer.vue';
  // for routing use
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <Header />
    <!-- replave HomeView with RouterView -->
    <RouterView />
    <Footer />
  </div>

</template>

<style scoped>
</style>

