<template>
  <div id="app"><mainLayout /></div>
</template>

<script>
//import navbar from './components/navbar.vue';
//import mainPage from './components/mainPage.vue';
import mainLayout from "./components/mainLayout.vue";
//import vueTable from './components/vueTable.vue';
import axios from "axios";
import async from "async";

export default {
  name: "home",
  notesList: [],
  components: {
    // navbar,
    // mainPage
    //vueTable
    mainLayout
  },
  async mounted() {
    await axios.get("./notesList.json").then(response => {
      this.notesList = response.data;
      console.log("начало данных: " + this.notesList);
      this.$store.dispatch("defultList", this.notesList);
    });
  }
};
</script>

<style>
/*body {
    background: url('./assets/binCode.jpg') bottom fixed;
  }*/
</style>
