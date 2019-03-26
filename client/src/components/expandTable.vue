<template>
    <v-data-table
      :items="oneDayItems"
      hide-actions
      hide-headers 
      :dark="dark()"
      :light="light()"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xl-right">{{ props.item.category }}</td>
        <td class="text-xl-center">{{ props.item.cash }}</td>
        <td class="text-xl-left">
          <v-icon  @click="dialogNewItem(props.item)">edit</v-icon>
          <v-icon  @click="deleteItem(props.item)">delete_sweep</v-icon>
        </td>
      </template>
    </v-data-table>
</template>
<script>

import api from '../services/Controller'

export default {
  data() {
    return {

    }
  },
  created() {
    
  },
  methods: {
    dark() {
      let status;
      (this.$store.getters.getDark) ? status=false : status=true;
      return status;
    },
    light() {
      return this.$store.getters.getDark;
    },
    deleteItem(item){
      api.deleteNote(item._id);
    },
    dialogNewItem(item){
          //this.$store.dispatch('setDefaultPropsNIMF');
          api.categoryList();
          this.$store.dispatch('setPropsNewItemModalForms',item);
          this.$store.commit('setNewItemModalFormStatus',true);
    },        
  },
  computed: {
    curientDate (){
      return this.$store.getters.getCurientDate;
    },
    oneDayItems() {
      return this.$store.getters.items
                .slice()
                .filter(elem => new Date(elem.date).getTime() == this.curientDate.getTime());
    }   
  }
};
</script>
<style scoped>

</style>
