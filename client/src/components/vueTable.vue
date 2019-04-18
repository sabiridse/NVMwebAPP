<template>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :rows-per-page-items="rowsPerPageItemsArray"
      :rows-per-page-text="text"
      no-data-text="нет данных"
      no-results-text="нет данных"
    >
      <template slot="items" slot-scope="props">
        <tr v-bind:class="[weekend(props.item.date) ? 'blue darken-4' : '']">
          <td class="text-xm-center">{{ changeDateFormat(props.item.date) }}</td>
          <td class="text-xm-center">{{ props.item.category }}</td>
          <td class="text-xm-center">{{ props.item.cash }}</td>
          <td class="text-xm-center">{{ changeWeeklyDayFormat(props.item.date) }}</td>
          <td class="text-xm-center">
            <v-icon small class="mr-2" @click="dialogNewItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete_sweep</v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
</template>
<script>
import eventbus from "../plugins/eventbus.js";
import api from '../services/Controller'

export default {
  data() {
    return {
      search: "",
      text: "Строк на странице:",
      rowsPerPageItemsArray: [15, 45, 90, { text: "Все", value: -1 }],
      headers: [
        {
          text: "Дата",
          value: "date",
          sortable: true
        },
        {
          text: "Категория",
          value: "category",
          sortable: true
        },
        {
          text: "Сумма",
          value: "cash",
          sortable: true
        },
        {
          text: "День недели",
          value: "dayOfWeek",
          sortable: false
        },
        {
          text: "Действие",
          value:""
        }
      ],
    };
  },
  created() {
    eventbus.$on("searchReq", this.searchData);
    api.selectAll();
  },
  methods: {

    dialogNewItem(item){
          api.categoryList();
          this.$store.dispatch('setPropsNewItemModalForms',item);
          this.$store.commit('setNewItemModalFormStatus',true);
    }, 

    deleteItem(item){
      api.deleteNote(item._id);
    },  
    changeDateFormat(date){
      return new Date(date).toISOString().substring(0,10);
    },
    changeWeeklyDayFormat(date){

      let dayInt = new Date(date).getDay();

      switch(dayInt){
        case 1: return "Понедельник"; break;
        case 2: return "Вторник"; break;
        case 3: return "Среда"; break;
        case 4: return "Четверг"; break;
        case 5: return "Пятница"; break;
        case 6: return "Суббота"; break;
        case 0: return "Воскресенье"; break;
      }
    },
    searchData(value) {
      this.search = value;
    },
     weekend(value){

      return new Date(value).getDay() == 6 || new Date(value).getDay() == 0 ? true:false;
    },  
  },
  computed: {
    items() {     
      return this.$store.getters.items;
    }   
  }
};
</script>
<style>

</style>
