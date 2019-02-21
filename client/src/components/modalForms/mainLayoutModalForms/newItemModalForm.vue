<template>
    <v-dialog v-model="dialog" persistent max-width="290px">
      <v-card>
        <v-card-title class="text-xl-center">Новая запись в таблицу</v-card-title>    
          <v-layout column>
            <v-flex>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu2"
                  :nudge-right="10"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  >
                  <v-text-field
                    slot="activator"
                    v-model="date"                  
                    readonly
                    solo
                  ></v-text-field>
                  <v-date-picker v-model="date" :first-day-of-week="1" locale="ru-Ru" @input="menu2 = false"></v-date-picker>
                </v-menu> 
            </v-flex>    
            <v-flex>  
                <v-select
                  v-model="category"
                  :items="categoryesList"
                  placeholder="Категория"
                  solo                 
                ></v-select>
            </v-flex>     
            <v-flex>
                <v-text-field
                  v-model="cash"
                  placeholder="Сумма"
                  solo>                    
                </v-text-field>
            </v-flex>           
            <v-container>
              <v-switch v-model="switchProfit" :label="switchProfitStatus()" color="green darken-4">
              </v-switch>
              <v-switch v-model="switchTemplate" :label="switchTemplateStatus()" color="red darken-4">
              </v-switch>
              <transition v-if="switchTemplate">
                <v-flex>
                    <p>Применить шаблон на:</p>
                    <v-slider
                      v-model="monthes"
                      :label="`${monthes} МЕС.`"
                      :max="6"
                      :min="1"
                      step="1">
                    </v-slider>
                    <p>Использовать запись в:</p>
                    <v-select
                      v-model="actionTemplates"
                      :items="actionsTempl"
                      placeholder="Характер действия"
                      solo>    
                    </v-select>
                    <transition>
                      <v-layout column>
                            <v-flex>
                              <v-select
                                v-if="actionTemplates==actionsTempl[0]"
                                v-model="day"
                                :items="daysCount"
                                solo>    
                              </v-select>
                            </v-flex>
                            <v-flex>
                              <v-select
                                v-if="actionTemplates==actionsTempl[1]"
                                v-model="weekly"
                                :items="weeklysCount"
                                solo>    
                              </v-select>
                            </v-flex>
                            <v-flex>
                              <v-select
                                v-if="actionTemplates==actionsTempl[2]"
                                v-model="dateDay"
                                :items="dateOfMonthe"
                                solo>    
                              </v-select>         
                            </v-flex>
                      </v-layout>
                    </transition>
                </v-flex>
              </transition>
            </v-container>         
          </v-layout>      
          <v-card-actions>
            <v-btn round color="green darken-4" @click="save">Сохранить</v-btn>
            <v-btn round color="red darken-4" @click="dialog = false">Закрыть</v-btn>
          </v-card-actions>     
      </v-card>
    </v-dialog>
</template>
<script>
  import service from '@/services/servicePaymentNewItemForm'
  export default {
    data() {
      return {
        actionTemplates:null,
        monthes:1,
          panel:false,
          switchTemplate:false,
          switchProfit: false,
          cash:null,
          date: new Date().toISOString().substr(0, 10),
          menu2: false,//calendar
          category: null,
          day:null,
          dateDay:null,
          weekly:null,
          dateOfMonthe:1,
          weeklysCount:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],
          dateOfMonthe:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          daysCount:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
          actionsTempl:["Интервал дней","День недели","Число месяца"],
          newNoteByCAtegory: {
            date:null,
            category:null,
            cash:null
          }
      }
    },
    created (){
      
    },
    computed: {
    		dialog: {  			
      		get(){return this.$store.getters.getNewItemModalFormStatus;},
      		set(value){this.$store.commit('setNewItemModalFormStatus',value)}
    		},
        categoryesList: {       
          get(){return this.$store.getters.getCategoryesList;}
        }
	  }	,
    methods:{
      switchProfitStatus (){
        return (this.switchProfit) ? "ДОХОД" : "РАСХОД";
      },
      switchTemplateStatus (){
        return (this.switchTemplate) ? "В ШАБЛОН" : "ОДНОКРАТНО";
      },
      switchProfitValue (){
        if (this.cash !=null && this.cash == this.cash){//*******нужна проверка на NaN
          return (this.switchProfit) ? this.cash : -this.cash ;
        } else {
           return null
          }
      },

      async save(){
        try {
          await service.assemblyData({
                                    date:this.date,
                                    category:this.category,
                                    cash:this.switchProfitValue(),
                                    switchTemplate:this.switchTemplate,
                                    monthes: this.monthes,
                                    day: this.day,
                                    weekly:this.weekly,
                                    dateDay:this.dateDay
                                 });
         // await api.addNewNoteByCategory({
         //                            date:this.date,
         //                            category:this.category,
         //                            cash:this.cash * this.switchProfitValue()
         //                         });
          this.day = null;
          this.dateDay = null;
          this.weekly = null;
          this.actionTemplates = null;                        
          this.category = null;
          this.cash = null;  
          this.switchProfit = false; 
          this.switchTemplate = false;
        }  catch (err) {
          alert ("Нет связи с базой данных!");
        }
                                                   
      }
    }  
  };
</script>