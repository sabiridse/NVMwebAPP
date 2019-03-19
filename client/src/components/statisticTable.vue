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
        <td class="text-xm-center">{{ changeDateFormat(props.item.date) }}</td>
        <td class="text-xm-center">{{ props.item.dohod }}</td>
        <td class="text-xm-center">{{ props.item.rashod }}</td>
        <td class="text-xm-center">{{ props.item.ostatok }}</td>
        <td class="text-xm-center">{{ changeWeeklyDayFormat(props.item.date) }}</td>
        <td class="text-xm-center">
          <!-- <v-icon small class="mr-2" @click="">edit</v-icon>
          <v-icon small @click="">delete_sweep</v-icon> -->
        </td>
      </template>
    </v-data-table>
</template>
<script>
import eventbus from "../plugins/eventbus.js";
import api from '../services/Controller'
//import payment from '../services/paymentItems'

export default {
  data() {
    return {
      //result:[],
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
        },
        {
          text: "День недели",
          value: "dayOfWeek",
          sortable: false
        },
        {
          text: "Действие"
        }
      ],
    };
  },
  created() {
    eventbus.$on("searchReq", this.searchData);
   api.selectAll();


  },
  methods: {

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
    
 
       
  },
  	computed: {

		items(){

	      //********группировка записей по дате******************
	      var map = this.$store.getters.items.reduce((acc, cur)=>{
	        acc[cur.date] = acc[cur.date] || { 
	          date: new Date(cur.date),
	          dohod:0,
	          rashod:0,
	          cash: 0,
	          ostatok:0
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
	      return addResult;

	    }    

	}  
};
</script>
<style>

</style>