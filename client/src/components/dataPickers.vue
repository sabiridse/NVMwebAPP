<template>
	<v-container>
		<p>Укажите период</p>
		<v-layout align-start row justify-space-around fill-height>
			<v-flex>
	            <v-menu
	            :close-on-content-click="false"
	            ref="menu"
	            v-model="menu"
	            :nudge-right="10"
	            lazy
	            :return-value.sync="date1"
	            transition="scale-transition"
	            offset-y
	            max-width="280px">
	            <v-icon slot="activator">event</v-icon>
	            <v-date-picker multiple v-model="date1" :first-day-of-week="1" locale="ru-Ru" @input="menu1 = false">
		            <v-spacer></v-spacer>
					<v-btn flat color="primary" @click="menu = false">Отмена</v-btn>
					<v-btn flat color="primary" @click="$refs.menu.save(date1);save()">OK</v-btn>
				</v-date-picker>
	            </v-menu>
	    	</v-flex>
    		<p>{{minDate}} - {{maxDate}}</p>
		</v-layout>
    </v-container>
</template>
<script>
export default {
  data () {
	    return {
	      date1: [new Date().toISOString().substr(0, 10), new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().substr(0, 10)],
	      menu: false
	    }
  },
  computed: {
    themes: {
        	get () { return this.$store.getters.getThemes }
    	},
    	maxDate: {
    		get () {
        return this.date1.slice()
		 				.sort(function (a, b) {
    							return new Date(a) - new Date(b)
          }).pop()
      }
    	},
    	minDate: {
    		get () {
        return this.date1.slice()
		 				.sort(function (a, b) {
    							return new Date(a) - new Date(b)
          }).shift()
      }
    	}
  },
  methods: {
    save () {
      let minMaxArray = [this.minDate, this.maxDate]
      this.$store.commit('setMinMaxDate', minMaxArray)
      this.$store.commit('setStatisticModalFormStatus', true)
    }
  }
}
</script>
