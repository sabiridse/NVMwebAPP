<template>
  <v-app id="inspire" :dark="dark">
    <v-navigation-drawer v-model="drawer" clipped fixed app :class="themes">
      <v-list dense>
          
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
        <templatesButton/>
        <hotPointsButton/>
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
      <v-container justify-space-between> <vueTable /> </v-container>
    </v-content>
    <v-footer app fixed> <span>&copy; 2018</span> </v-footer>
    <newItemModalForm/>
    <settingsModalForm/>
    <newCategoryModalForm/>
  </v-app>
</template>

<script>
import newItemButton from "./buttons/mainLayoutButtons/newItemButton.vue";
import newItemModalForm from "./modalForms/mainLayoutModalForms/newItemModalForm.vue";

import settingsButton from "./buttons/mainLayoutButtons/settingsButton.vue";
import settingsModalForm from "./modalForms/mainLayoutModalForms/settingsModalForm.vue";

import changeThemeButton from "./buttons/mainLayoutButtons/changeThemeButton.vue";

import hotPointsButton from "./buttons/mainLayoutButtons/hotPointsButton.vue";

import templatesButton from "./buttons/mainLayoutButtons/templatesButton.vue";

import newCategoryModalForm from "./modalForms/mainLayoutModalForms/newCategoryModalForm.vue";

import vueTable from "./vueTable.vue";

import eventbus from "../plugins/eventbus.js";

export default {
  data() {
    return {
      drawer: null,
      dialog: false,
      search: ""
    };
  },
  components: {
    vueTable,
    settingsModalForm,
    settingsButton,
    newItemButton,
    newItemModalForm,
    changeThemeButton,
    templatesButton,
    hotPointsButton,
    newCategoryModalForm

  },
  computed: {
      dark: {
        get(){return this.$store.getters.getDark},
        set(value){this.$store.commit('setDark',value)}
      },
      themes: {
        get(){return this.$store.getters.getThemes},
        set(value){this.$store.commit('setThemes',value)}
      },
      topBarColor: {
        get(){return this.$store.getters.getTopBarColor},
        set(value){this.$store.commit('setTopBarColor',value)}
      }
  },
  methods: {
    searching(search) {
      eventbus.$emit("searchReq", this.search);
    }
  }
};
</script>
