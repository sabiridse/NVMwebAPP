<template>
  <div id="app">
      <mainLayout/>
  </div>
</template>

<script>
//import navbar from './components/navbar.vue';
//import mainPage from './components/mainPage.vue';
import mainLayout from './components/mainLayout.vue';
//import vueTable from './components/vueTable.vue';
export default {
  name: 'home',
  components: {
    // navbar,
    // mainPage
    //vueTable
    mainLayout
  }
};
</script>

<style>
  /*body {
    background: url('./assets/binCode.jpg') bottom fixed;
  }*/
</style>
