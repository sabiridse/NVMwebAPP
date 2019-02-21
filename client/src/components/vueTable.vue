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
        <td class="text-xm-center">{{ props.item.date }}</td>
        <td class="text-xm-center">{{ props.item.plus }}</td>
        <td class="text-xm-center">{{ props.item.minus }}</td>
        <td class="text-xm-center">{{ props.item.cash }}</td>
        <td class="text-xm-center">{{ props.item.dayOfWeek }}</td>
        <td class="text-xm-center">
          <v-icon small class="mr-2" @click="">
            edit
          </v-icon>
          <v-icon small @click="">delete_sweep</v-icon>
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
      // dialog: false,
      // editedIndex: -1,
      // editedItem: {
      //   date: 0,
      //   plus: 0,
      //   minus: 0,
      //   cash: 0,
      //   dayOfWeek: 0
      // },
      // defaultItem: {
      //   date: 0,
      //   plus: 0,
      //   minus:0,
      //   cash: 0,
      //   dayOfWeek: 0
      // },
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
          value: "plus",
          sortable: true
        },
        {
          text: "Расход",
          value: "minus",
          sortable: true
        },
        {
          text: "Остаток",
          value: "cash",
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
    //eventbus.$on("dialogStart", this.dialogStart);
    api.selectAll();
    //api.categoryList();
    //payment.print(this.$store.getters.getNotesByCategoryes);

  },
  methods: {

    // changeDateFormat(stringDate){
    //   let year = stringDate.substring(0, 4);
    //   let month  = stringDate.substring(5, 7)+".";
    //   let day= stringDate.substring(8, 10)+".";
    //   return  day+month+year;
    // },
    
    searchData(value) {
      this.search = value;

    },
    // editItem(item) {
      
    //   this.editedIndex = this.items.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialog = true;

    // },

    // deleteItem(item) {
    //   confirm("Удалить запись?") && api.deleteNote(item._id);
    // },
    // dialogStart(status) {
    //   this.dialog = status;
    // },

    // close() {
    //   this.dialog = false;
    //   setTimeout(() => {
    //     this.editedItem = Object.assign({},
    //       {
    //         date: new Date().getDate()+'.'+
    //               this.monthForm[new Date().getMonth()]+'.'+
    //               new Date().getFullYear(),
    //         plus: 0,
    //         minus:0,
    //         cash: 0,
    //         dayOfWeek: this.daysOfWeek[new Date().getDay()]
    //       });
    //     this.editedIndex = -1;
    //   }, 300);
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     //edit
    //     Object.assign(this.items[this.editedIndex], this.editedItem);
    //     api.editNote(this.editedItem);
    //   } else {
    //     //new
    //       api.addNewNote(this.editedItem);
    //   }
    //   this.close();

    // }
  },
  computed: {
    items() {     
      return this.$store.getters.items;
    }
    
  },

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   }
  //}
};
</script>
<style>
/*tbody {
 	margin-top: 20px;
    background: red;
    height: 700px;
    overflow-y: scroll;
}
thead {
	background: green;
	position: fixed;
}
.theme--dark.v-datatable .v-datatable__actions {
	background: blue;
	position: fixed;
}*/
/** {
	background: white;
}*/
</style>
