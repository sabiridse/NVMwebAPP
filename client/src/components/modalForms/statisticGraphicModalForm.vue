<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" max-width="300px">
		        <v-data-table
			      :items="stataData"
			      hide-actions
			      hide-headers
			    >
			    <template slot="items" slot-scope="props">
			        <td class="text-xl-right">{{ props.item.date }}</td>
			        <td class="text-xl-center">{{ props.item.cash }}</td>
			    </template>
    			</v-data-table>

  		</v-dialog>
  	</v-layout>
</template>
<script>
export default {
  data: () => ({

  }),
  created () {

  },
  computed: {
    	dialog: {
      		get () { return this.$store.getters.getStatisticGraphicModalFormStatus },
      		set (value) { this.$store.commit('setStatisticGraphicModalFormStatus', value) }
      	},
      	stataData: {
      		get () {
	      		let values = this.$store.getters.getDataForGraphic.values
	      		let labels = this.$store.getters.getDataForGraphic.labels
	      		let stataData = []
	      		for (let i = 0; i < values.length; i++) {
	      			stataData.push({
	      							cash: values[i],
	      							date: labels[i]
	      							})
	      		}
	      			return stataData
	      	}
      	}
  }
}
</script>

<style>

</style>
