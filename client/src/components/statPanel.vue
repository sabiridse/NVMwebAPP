
<template>
  <div>   
		<v-toolbar flat>
	    <v-toolbar-title>Импорт JSON файла</v-toolbar-title>
	    <v-spacer></v-spacer>
      <input ref="fileInputImport" type="file" name="fileInputImport" accept =".json" @change="selectFile">
      <v-btn color="primary" @click="openFileExplorer()">Выбрать файл</v-btn>
      <v-btn v-if="importedData != null && switchTable != 0" color="info" @click="grouping()">Сгруппировать</v-btn>
      <v-btn v-if="switchTable === 0" color="info" @click="switchTable=1"><v-icon>arrow_back</v-icon></v-btn>
       <v-spacer></v-spacer>
      <p style="color:lightblue">ИТОГО {{ total_sum() }} руб. {{ total_quantity() }} шт/кг</p>
	  </v-toolbar>
<!-- ******JSON TABLE************** -->
    <v-data-table   
        :headers="headers"
        :search="searchReq"
        :items="items"
        ref="table"
        hide-actions
    >
        <template v-if="switchTable === 1" slot="items" slot-scope="props">
          <tr @click="rowClick(props.item.quantity, props.item.sum)">
            <td class="text-xm-center">{{ props.item.date }}</td>
            <td class="text-xm-center">{{ props.item.time }}</td>
            <td class="text-xm-center">{{ props.item.name }}</td>
            <td class="text-xm-center">{{ props.item.sum }}</td>
            <td class="text-xm-center">{{ props.item.quantity }}</td>
            <td class="text-xm-center">{{ props.item.price }}</td>
            <td class="text-xm-center">{{ props.item.user }}</td>
          </tr>
        </template>
    </v-data-table>
<!-- ******GROUPING TABLE************** -->
    <v-data-table
        :headers="headersGrouping"
        :search="searchReq"
        :items="itemsGrouping"
        ref="groupTable"
        hide-actions
    >
        <template v-if="switchTable === 0" slot="items" slot-scope="props">
          <tr @click="rowClick(props.item.quantity, props.item.sum)">
            <td class="text-xm-center">{{ props.item.name }}</td>
            <td class="text-xm-center">{{ props.item.quantity }}</td>
            <td class="text-xm-center">{{ props.item.sum }}</td>
          </tr>
        </template>
    </v-data-table>
  </div>
</template>
<script>
//import { mdiArrowLeftBox } from '@mdi/js';
/* eslint-disable */
import eventbus from '../plugins/eventbus.js'
export default {

  	data () {
    	return {
        //totalSum:0,
        totalQuantity:0,
        counter:0,
        searchReq:'',
        list:[],
        groupList:[],
        groupMap:[],
        switchTable: 1,//0-groupingTable, 1-jsonTable
        arrayOfJsonFile:[],
        importedData: null,//text variable
        headers: [
                    {
                      text: 'Дата покупки',
                      value: 'date',
                      sortable: true
                    },
                    {
                      text: 'Время покупки',
                      value: 'time',
                      sortable: true
                    },
                    {
                      text: 'Название продукта',
                      value: 'name',
                      sortable: true
                    },
                    {
                      text: 'Сумма за продукт',
                      value: 'sum',
                      sortable: true
                    },
                    {
                      text: 'Количество',
                      value: 'quantity',
                      sortable: true
                    },
                    {
                      text: 'Цена за еденицу',
                      value: 'price',
                      sortable: true
                    },
                    {
                      text: 'Название магазина',
                      value: 'user',
                      sortable: true
                    }
        ],
        headersGrouping: [
                    {
                      text: 'Название товара',
                      value: 'name',
                      sortable: true
                    },
                    {
                      text: 'Количество',
                      value: 'quantity',
                      sortable: true
                    },
                    {
                      text: 'Сумма',
                      value: 'sum',
                      sortable: true
                    }
        ]
    	}
  	},
  	created() {
      eventbus.$on('searchReq', this.searchData);
  	},
  computed: {

        items() {
          return this.$store.getters.getArrayOfCheckJsonFile;
        },
        itemsGrouping(){
          
          this.groupList = this.$store.getters.getArrayOfCheckJsonFile.slice();
            this.groupMap = this.groupList.reduce((acc, cur) => {
                acc[cur.name] = acc[cur.name] || {
                                      name: cur.name,
                                      quantity: 0,
                                      sum: 0
                                      };
                acc[cur.name].sum = Math.
                        floor((acc[cur.name].sum + cur.sum)*100)/100;
                acc[cur.name].quantity = Math. 
                        floor((acc[cur.name].quantity + cur.quantity)*1000)/1000;

                  return acc
                }, {});
         
            return Object.values(this.groupMap);//
        }
  	},
  	methods: {

      total_sum(){
            if (this.switchTable==0){

              if (this.$refs['groupTable']){
               return (Math.round(this.$refs['groupTable'].filteredItems
                             .reduce((acc,cur) => {                         
                               return acc+cur.sum;
                                                  }, 0))
                          );
              } else return 0;

            } else {
              if (this.$refs['table']){
               return (Math.round(this.$refs['table'].filteredItems
                             .reduce((acc,cur) => {                         
                               return acc+cur.sum;
                                                  }, 0))
                          );
              } else return 0;

            }
        },
        total_quantity(){
            if (this.switchTable==0){

              if (this.$refs['groupTable']){
               return (Math.round(this.$refs['groupTable'].filteredItems
                             .reduce((acc,cur) => {                         
                               return acc+cur.quantity;
                            }, 0)*1000)/1000
                      );
              } else return 0;

            } else {
              if (this.$refs['table']){
               return (Math.round(this.$refs['table'].filteredItems
                             .reduce((acc,cur) => {                         
                               return acc+cur.quantity;
                                                  }, 0)*1000)/1000
                          );
              } else return 0;

            }
        },
      // rowClick(quantity, sum){

      //   this.totalQuantity = Math.
      //                 floor((this.totalQuantity +quantity) * 1000) / 1000;
      //   this.totalSum = Math.
      //                 floor((this.totalSum + sum) * 100) / 100;
  
      // },

      searchData (value) {
        this.searchReq = value;
      },
      
      grouping(){
          this.switchTable = 0;
          this.totalSum = 0;
          this.totalQuantity = 0;
          let fullArrayOfJson = this.$store.getters.getArrayOfCheckJsonFile;

      },
      openFileExplorer() {
         this.$refs.fileInputImport.value = "";
         this.$refs.fileInputImport.click();
        
        },
      selectFile(e) {
          const file = e.target.files[0];
          let reader = new FileReader();
          reader.onload = e => {
           this.importedData = reader.result;
           this.addArrayOfJsonFile();
          };
          reader.readAsText(file);
      },
      addArrayOfJsonFile(){
        let json = JSON.parse(this.importedData);
        this.arrayOfJsonFile.length = 0;
        this.switchTable = 1;
        this.totalSum = 0;
        this.totalQuantity = 0;
        for (var keyOutside in json){
          let valueOS = json[keyOutside];
          let items = valueOS.document.receipt.items;
          for (var keyInside in items) {
            let valueIS = items[keyInside];
            let oneItem = {
                          name:valueIS.name,
                          sum:valueIS.sum/100,
                          price:valueIS.price/100,
                          quantity:valueIS.quantity,
                          user:valueOS.document.receipt.user,
                          date:this.reversDate(valueOS.document.receipt.dateTime),
                          time:valueOS.document.receipt.dateTime.slice(11,16)
                        }
           this.arrayOfJsonFile.push(oneItem);           
          }
        } 
        this.$store.commit('setArrayOfChecksJsonFile',this.arrayOfJsonFile);      
      },
      reversDate(str) {
        let day = str.slice(8,10);
        let month = str.slice(5,7);
        let year = str.slice(0,4);
        return year+'-'+month+'-'+day;
      }
    }
}
</script>

<style scoped>
  [type="file"] {display: none;}
</style>

