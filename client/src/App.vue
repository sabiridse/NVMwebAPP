<template>
  <div id="app">
    <navbar/>
    <mainPage/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import mainPage from './components/mainPage.vue';
export default {
  name: 'home',
  components: {
    navbar,
    mainPage
  }
};
</script>

<style>
  body {
    background: url('./assets/binCode.jpg') bottom fixed;
  }
</style>
