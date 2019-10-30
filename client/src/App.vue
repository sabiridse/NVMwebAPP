<template>
   <v-app>

      <keep-alive>
        <component v-bind:is="curientComponent"></component>
      </keep-alive>

  </v-app>
</template>
<script>
import mainLayout from './components/mainLayout.vue'
import authModalForm from './components/modalForms/mainLayoutModalForms/authModalForm.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    mainLayout,
    authModalForm
  },
  computed: {
    curientComponent () {
      return this.$store.getters.getAppCurientComponent
    }
  }
}
</script>
