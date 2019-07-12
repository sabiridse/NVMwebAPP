<template>
    <v-dialog v-model="dialog" persistent max-width="270px">
      <v-card>
        <v-card-title class="text-xl-center">Добавить новую категорию расходов</v-card-title>    
          <v-spacer></v-spacer>
            <v-flex>
                <v-text-field
                  v-model="newCategory.category"
                  placeholder="Новая категория"
                  solo
                  >                    
                </v-text-field>
            </v-flex> 
          </v-layout>
          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn round color="green darken-4"  @click="save(newCategory)">Сохранить</v-btn>
          <v-btn round color="red darken-4"  @click="close()">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import api from '@/services/Controller'
  export default {
    data() {
      return {
        newCategory: {
                      category:'',
                      status:0 //category
                      }
      }
    },
    computed: {
    		dialog: {  			
      		get(){return this.$store.getters.getNewCategoryModalFormStatus;},
      		set(value){this.$store.commit('setNewCategoryModalFormStatus',value)}
    		}
	  },
    methods: {
      close (){
        this.dialog = false; 
        this.newCategory.category = '';      
      },
      async save (input){
         await api.addNewCategory(input);
         this.newCategory.category = '';
        
      }
    }  
  };
</script>