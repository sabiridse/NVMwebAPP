<template>
  <v-menu open-on-hover bottom offset-y>
    <v-btn flat class="title" slot="activator">Шаблоны</v-btn>
    <v-list :class = "topBarColor">
      <v-list-tile @click="">
          <v-list-tile-content>
            <v-list-tile-title class="title">Создать</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title class="title">Выбрать</v-list-tile-title>
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
        get(){return this.$store.getters.getTopBarColor}
      }
    },
    methods: {
	    // dialogNewItem(status){
     //      api.categoryList();
	    //     this.$store.commit('setNewItemModalFormStatus',status);
	    // },
     //  	dialogNewCategory(status){         
     //      this.$store.commit('setNewCategoryModalFormStatus',status);
     //  	}
  	}  
  };
</script>