<template>
	<div>
		<v-toolbar flat>
	      <v-toolbar-title>Импорт JSON файла с чеками</v-toolbar-title>
	      <v-spacer></v-spacer>
	    </v-toolbar>
        <v-file-input label="Выберете файл для импорта"></v-file-input>

	      <!-- <keep-alive>
	        <component v-bind:is="curientComponent"></component>
	      </keep-alive>	 -->
	</div>
</template>
<script>
// import categoryStataTable from "./categoryStataTable.vue";
// import graphicsStat from "./graphicsStat.vue";

export default {

  	data () {
    	return {

    	}
  	},
  	components: {
  		// categoryStataTable,
  		// graphicsStat
  	},
  computed: {
      	curientComponent: {
        	get () { return this.$store.getters.getStatPanelCurientComponent }
      	}
  	},
  	methods: {
  		setCurientComponent (value) {
        	this.$store.commit('setStatPanelCurientComponent', value)
      	}
  	}
}
</script>
