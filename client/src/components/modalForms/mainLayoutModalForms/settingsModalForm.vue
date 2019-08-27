<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">ЗАГОЛОВОК</v-card-title>
        <v-card-text>Форма для настроек</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  computed: {
  		dialog: {
    		get () { return this.$store.getters.getSettingsModalFormStatus },
    		set (value) { this.$store.commit('setSettingsModalFormStatus', value) }
  		}
	  }
}
</script>
