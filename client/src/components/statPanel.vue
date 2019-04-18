<template>
	<div>
		<v-toolbar flat>
	      <v-toolbar-title>Расходы по категориям за последние 12 месяцев</v-toolbar-title>
	      <v-spacer></v-spacer>
	      <v-btn color="info" dark @click="setCurientComponent('graphicsStat')">Показать график</v-btn>
	    </v-toolbar>
	      <keep-alive>
	        <component v-bind:is="curientComponent"></component>
	      </keep-alive>	  
	</div>
</template>
<script>
import categoryStataTable from "./categoryStataTable.vue";
import graphicsStat from "./graphicsStat.vue";

export default {

  	data() {
    	return {
      
    	}
  	},
  	components: {
  		categoryStataTable,
  		graphicsStat
  	},
	computed: {
      	curientComponent: {
        	get(){return this.$store.getters.getStatPanelCurientComponent}
      	},
  	},
  	methods:{
  		setCurientComponent(value) {
        	this.$store.commit('setStatPanelCurientComponent',value);
      	}
  	}
};
</script>