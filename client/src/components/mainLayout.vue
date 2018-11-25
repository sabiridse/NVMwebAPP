<template>
  <v-app id="inspire" :dark="dark">
    <v-navigation-drawer v-model="drawer" clipped fixed app :class="themes">
      <v-list dense>
        <v-list-tile @click="dialogFormOnTable();">
          <v-list-tile-action>
            <v-icon color="orange lighten-3">fiber_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">Новая запись</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="red darken-4">flag</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">Hot points</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="orange accent-3">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">Настройки</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="dialog = true;">
          <v-list-tile-action>
            <v-icon color="light-blue accent-3">mdi-theme-light-dark</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">Тема оформления</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <!--
                <v-radio-group v-model="themes" :mandatory="false">
                 <v-radio label="Темная" value="teal darken-2" @click.native="dialog = false"></v-radio>
                 <v-radio label="Светлая" value="blue lighten-3" @click.native="dialog = false"></v-radio>
                </v-radio-group>
              -->
              <v-radio-group v-model="dark">
                <v-radio label="Темная" @click="changeTheme(true);"></v-radio>
                <v-radio label="Светлая" @click="changeTheme(false);"></v-radio>
              </v-radio-group>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-list>
      <!--
        <v-container align-center>
        <v-btn color="green darken-1">
          	<v-icon color="orange accent-3" left>settings</v-icon>Настройки
        	</v-btn>
        	<v-btn color="green darken-1">Настройки
          	<v-icon color="orange accent-3" right>settings</v-icon>
        	</v-btn>
        	<v-btn color="green darken-1">Настройки
          	<v-icon color="orange accent-3" right>settings</v-icon>
        	</v-btn>
        	</v-container>
      -->
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left :class="topBarColor">
      <v-toolbar-side-icon
        color="yellow"
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline">Expert-budget</v-toolbar-title>
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
  </v-app>
</template>

<script>
import vueTable from "./vueTable.vue";
import eventbus from "../plugins/eventbus.js";
export default {
  data() {
    return {
      dark: true,
      drawer: null,
      themes: "teal darken-2",
      topBarColor: "teal darken-4",
      dialog: false,
      search: ""
    };
  },
  components: {
    vueTable
  },
  computed: {},
  methods: {
    changeTheme(theme) {
      this.dark = theme;
      this.themes = this.dark == true ? "teal darken-2" : "blue lighten-2";
      this.topBarColor = this.dark == true ? "teal darken-4" : "blue lighten-4";
      this.dialog = false;
    },
    dialogFormOnTable() {
      eventbus.$emit("dialogStart", "true");
    },
    searching(search) {
      eventbus.$emit("searchReq", this.search);
    }
  }
};
</script>
