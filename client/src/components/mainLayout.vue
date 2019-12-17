<template>
  <v-app id="inspire" :dark="dark">
    <v-navigation-drawer v-model="drawer" clipped fixed app :class="themes">
      <v-list dense >
        <v-container xs10 offset-xs1 text-xs-center>
          <v-btn flat class="title"  @click="expand1 = !expand1">Сбережения</v-btn>
          <template v-if="expand1">
            <v-card flat>
            <p :class="themes+' orange--text'">На сегодня {{stashCash}} р.</p>
          </v-card>
          </template>
          <v-btn flat class="title" @click="expand2 = !expand2">Нижний лимит</v-btn>
            <template v-if="expand2">
              <v-card flat :class="themes">
                <v-slider
                v-model="alertLimit"
                :label="`${alertLimit} руб.`"
                :max="10000"
                :min="0"
                step="1000">
              </v-slider>
             </v-card>
          </template>
          <v-btn flat class="title"  @click="expand3 = !expand3">Горячие точки</v-btn>
          <template v-if="expand3">
            <v-card flat>
            <hotPointsTable/>
          </v-card>
          </template>
          <v-btn flat class="title"  @click="expand4 = !expand4">Статистика</v-btn>
          <template v-if="expand4">
            <v-card flat :class="themes">
            <dataPickers/>
          </v-card>
          </template>
            <v-card flat :class="themes">
            <v-flex>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu3"
                  :nudge-right="10"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  >
                  <v-btn slot="activator" flat class="title">Дата проверена</v-btn>
                  <v-date-picker v-model="date3" :first-day-of-week="1" locale="ru-Ru" @input="check()"></v-date-picker>
                </v-menu>
            </v-flex>
          </v-card>
        </v-container>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left :class="topBarColor">
      <v-toolbar-side-icon
        color="yellow"
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
    <v-toolbar-title class="headline">Expert-budget</v-toolbar-title>
    <v-spacer></v-spacer>
        <newItemButton/>
        <tablesButton/>
        <settingsButton/>
        <changeThemeButton/>
     <v-spacer></v-spacer>
      <v-flex xs2 mt-2>
        <v-text-field
          label="Solo"
          placeholder="Поиск"
          solo
          light
          v-model="search"
          @input="searching(search);"
        ></v-text-field>
      </v-flex>
    </v-toolbar>
    <v-content>
      <keep-alive>
        <component v-bind:is="curientComponent"></component>
      </keep-alive>
    </v-content>
    <v-footer app fixed> <span>&copy; 2018</span> </v-footer>
    <newItemModalForm/>
    <settingsModalForm/>
    <newCategoryModalForm/>
    <statisticModalForm/>
    <statisticGraphicModalForm/>
    <!-- <authModalForm/> -->
  </v-app>
</template>

<script>
import newItemButton from './buttons/mainLayoutButtons/newItemButton.vue'
import newItemModalForm from './modalForms/mainLayoutModalForms/newItemModalForm.vue'
// import authModalForm from "./modalForms/mainLayoutModalForms/authModalForm.vue";
import statisticModalForm from './modalForms/statisticModalForm.vue'
import statisticGraphicModalForm from './modalForms/statisticGraphicModalForm.vue'

import settingsButton from './buttons/mainLayoutButtons/settingsButton.vue'
import settingsModalForm from './modalForms/mainLayoutModalForms/settingsModalForm.vue'

import changeThemeButton from './buttons/mainLayoutButtons/changeThemeButton.vue'

import tablesButton from './buttons/mainLayoutButtons/tablesButton.vue'

import newCategoryModalForm from './modalForms/mainLayoutModalForms/newCategoryModalForm.vue'

import vueTable from './vueTable.vue'
import dataPickers from './dataPickers.vue'
import hotPointsTable from './horPointsTable.vue'
import statisticTable from './statisticTable.vue'
import categoryStataTable from './categoryStataTable.vue'
import statPanel from './statPanel.vue'
import checkOfJsonTable from './checkOfJsonTable.vue'

import api from '../services/Controller'

import eventbus from '../plugins/eventbus.js'

export default {
  data () {
    return {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      // date3: new Date().toISOString().substr(0, 10),
      menu2: false,
      menu3: false,
      expand1: false,
      expand2: false,
      expand3: false,
      expand4: false,
      expand5: false,
      drawer: null,
      dialog: false,
      search: ''
    }
  },
  components: {
    statPanel,
    dataPickers,
    hotPointsTable,
    statisticTable,
    checkOfJsonTable,
    categoryStataTable,
    vueTable,
    settingsModalForm,
    settingsButton,
    newItemButton,
    newItemModalForm,
    // authModalForm,
    changeThemeButton,
    tablesButton,
    newCategoryModalForm,
    statisticModalForm,
    statisticGraphicModalForm

  },
  created () {
    api.categoryList()
  },
  computed: {
    date3: {
      get () { return this.$store.getters.getDateChecking },
      set (value) { this.$store.dispatch('setDateChecking', value) }
    },
    curientComponent: {
      get () { return this.$store.getters.getCurientComponent }
    },
    dark: {
      get () { return this.$store.getters.getDark },
      set (value) { this.$store.commit('setDark', value) }
    },
    themes: {
      get () { return this.$store.getters.getThemes },
      set (value) { this.$store.commit('setThemes', value) }
    },
    topBarColor: {
      get () { return this.$store.getters.getTopBarColor },
      set (value) { this.$store.commit('setTopBarColor', value) }
    },
    alertLimit: {
      get () { return this.$store.getters.getAlertLimit },
      set (value) { this.$store.commit('ALERT_LIMIT', value) }
    },
    stashCash: {
      get () {
        let cashArr = []
        this.$store.getters.items
          .filter(elem => elem.category === 'Заначка' &&
                              new Date(elem.date) < new Date())
          .forEach(elem => cashArr.push(elem.cash * -1))
        return cashArr.reduce((sum, elem) => sum + elem)
      }
    }
  },
  methods: {
    searching (search) {
      eventbus.$emit('searchReq', this.search)
    },
    check () {
      // this.$store.dispatch('setDateChecking',this.date3);
      this.menu3 = false
    }
  }
}
</script>
