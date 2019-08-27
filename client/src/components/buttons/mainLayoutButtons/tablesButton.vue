<template>
  <v-menu open-on-hover bottom offset-y>
    <v-btn flat class="title" slot="activator">Таблицы</v-btn>
    <v-list :class = "topBarColor">
      <v-list-tile @click="curientComponent('statisticTable')">
          <v-list-tile-content>
            <v-list-tile-title class="title">Общая</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="curientComponent('vueTable')">
          <v-list-tile-content>
            <v-list-tile-title class="title">Подробная</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="curientComponent('statPanel')">
            <v-list-tile-content>
              <v-list-tile-title class="title">Статистика</v-list-tile-title>
            </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title class="title">Сбережения</v-list-tile-title>
            </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-menu>
</template>
<script>
import api from '@/services/Controller'
export default {
  computed: {
    topBarColor: {
      get () { return this.$store.getters.getTopBarColor }
    }
  },
  methods: {
	    curientComponent (value) {
      this.$store.commit('setCurientComponent', value)
    }
  	}
}
</script>
