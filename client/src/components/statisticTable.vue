<template>
  <v-data-table
      :headers="headers"
      :items="items"
      :expand="expand"
      item-key="ostatok"
      :search="search"
      :rows-per-page-items="rowsPerPageItemsArray"
      :rows-per-page-text="text"
      no-data-text="нет данных"
      no-results-text="нет данных"
  >
      <template slot="items" slot-scope="props">
        <tr v-bind:class="[weekend(props.item.date) ? 'blue darken-4' : '']" 
            @click="props.expanded = !props.expanded; curientDate(props.item.date)">
	        <td class="text-xm-center">{{ changeDateFormat(props.item) }}</td>
	        <td class="text-xm-center">{{ changeWeeklyDayFormat(props.item.date) }}</td>
	        <td class="text-xm-center">{{ props.item.dohod }}</td>
	        <td class="text-xm-center">{{ props.item.rashod }}</td>
	        <td v-bind:class="[props.item.ostatok < alertLimit ? 'text-xm-center red--text':'text-xm-center']">
            {{ props.item.ostatok }}
          </td>	
        </tr>        
      </template>
      <template slot="expand" slot-scope="props">
        <v-card flat>
          <expandTable/>
        </v-card>
      </template>
  </v-data-table>
</template>
<script>
import eventbus from "../plugins/eventbus.js";
import api from '../services/Controller'
import expandTable from "./expandTable.vue";

export default {
  data() {
    return {
      alert: "",
      expand: false,
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
          text: "День недели",
          value: "dayOfWeek",
          sortable: false
        },
        {
          text: "Приход",
          value: "prihod",
          sortable: true
        },
        {
          text: "Расход",
          value: "rashod",
          sortable: true
        },
        {
          text: "Остаток",
          value: "ostatok",
          sortable: true
        }
        
      ],
    };
  },
  components: {
    expandTable
  },
  created() {
    eventbus.$on("searchReq", this.searchData);
    api.selectAll();

  },
  methods: {
    curientDate(cDate){
        this.$store.dispatch("setCurientDate", cDate);
    },

    changeDateFormat(item){
      return new Date(item.date).toISOString().substring(0,10);
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
    weekend(value){

      return new Date(value).getDay() == 6 || new Date(value).getDay() == 0 ? true:false;
    },
    searchData(value) {
      this.search = value;
    },
    
 
       
  },
  	computed: {

    alertLimit(){

      return this.$store.getters.getAlertLimit;

    },

		items(){

	      //********группировка записей по дате******************
        let allList = this.$store.getters.items.slice();
	      var map = allList.reduce((acc, cur)=>{
	        acc[cur.date] = acc[cur.date] || { 
	          date: new Date(cur.date),
	          dohod:0,
	          rashod:0,
	          cash: 0,
	          ostatok:0,
            id:0
	        };
	        (cur.cash > 0) ? (acc[cur.date].dohod = acc[cur.date].dohod + cur.cash) :
	                         (acc[cur.date].rashod = acc[cur.date].rashod + cur.cash);

	        acc[cur.date].cash = acc[cur.date].cash + cur.cash;
	        
	        return acc;
	      },{});
	      var addResult = Object.values(map);

	      //*******************сортировка по возрастанию даты************      
	     	addResult.sort(function (next, prev) {
	        return next.date - prev.date;
	      });

	      var prevOstatok = 0;
	      addResult.forEach(elem => {


	        elem.ostatok = elem.cash + prevOstatok;

	        prevOstatok = elem.ostatok;
	      })
        this.$store.commit('STATISTIC_TABLE_DATA',addResult);

	      return addResult;

	    }    

	}  
};
</script>
<style scoped>

</style>