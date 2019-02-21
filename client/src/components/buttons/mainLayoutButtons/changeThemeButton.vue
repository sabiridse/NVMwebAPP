<template>
	<v-menu open-on-hover bottom offset-y>
    <v-btn flat class="title" slot="activator">Темы</v-btn>
    <v-list :class = "topBarColor">
      <v-list-tile @click="changeTheme(true);">
          <v-list-tile-content>
            <v-list-tile-title class="title">Темная</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="changeTheme(false);">
            <v-list-tile-content>
              <v-list-tile-title class="title">Светлая</v-list-tile-title>
            </v-list-tile-content>
      </v-list-tile>
    </v-list>    
  </v-menu>
</template>
<script>
  export default {
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
	    dialogStatus(status){
	        this.$store.commit('setChangeThemeModalFormStatus',status);
	    },
      changeTheme(theme) {
        this.dark = theme;
        this.themes = this.dark == true ? "teal darken-2" : "blue lighten-2";
        this.topBarColor = this.dark == true ? "teal darken-4" : "blue lighten-4";
        this.dialog = false;
      }
  	}  
  };
</script>
