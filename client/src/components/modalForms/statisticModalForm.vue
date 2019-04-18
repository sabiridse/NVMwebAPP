<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" scrollable max-width="300px">
			<v-card>
        		<v-card-text style="height: 500px;">
		          	<v-data-table
		          	:headers="headers"
		      		:items="statisticList"
		 	    	hide-actions		      				      
		    		>
			      		<template slot="items" slot-scope="props" >
			      			<tr v-bind:class="[props.item.sum < 0 ? 'red--text' : 'green--text']"
			      				@click="showGraphic(props.item.category)"> 
						        <td class="text-xl-left">{{ props.item.category }}</td>
						        <td class="text-xl-center">{{ props.item.sum }}</td>
					    	</tr>
			      		</template>
		    		</v-data-table>
		   
        		</v-card-text>
        		<v-layout>
        		<v-card-text class="text-xl-center brown lighten-1 green--text">{{prihod}} руб.</v-card-text>
        		<v-card-text class="text-xl-center brown lighten-1 red--text">{{rashod}} руб.</v-card-text>
        	</v-layout>
        			
      		</v-card>
		</v-dialog>
	</v-layout>   
</template>
<script>
  export default {
    data() {
	    return {
	        headers: [
		        {
		          text: "Категория",
		          value: "category",
		          sortable: true
		        },
		        {
		          text: "Сумма",
		          value: "sum",
		          sortable: true
		        }
		    ],
		    prihod:0,
		    rashod:0,
		    map:[],
		    allList:[],
		    minMaxDate:[]
	    }
    },
    computed: {
    	statisticList:{ 	
	    	get(){

				this.minMaxDate = this.$store.getters.getMinMaxDate;
	    		this.allList = this.$store.getters.items.slice();	    		
	    		this.map = this.allList.reduce((acc, cur)=>{
		        	acc[cur.category] = acc[cur.category] || { 
													          date: new Date(cur.date),
													          category: cur.category,
													          sum:0
												        	  };
					(new Date(cur.date) >= new Date(this.minMaxDate[0]) &&
					 new Date(cur.date) <= new Date(this.minMaxDate[1])) ? 
						(acc[cur.category].sum = acc[cur.category].sum + cur.cash) :
	                    (acc[cur.category].sum = acc[cur.category].sum + 0);	       
		        	;	        
		        	return acc;
	      		},{});
	      		let addResult = Object.values(this.map).filter(elem => elem.sum != 0);
	      		this.prihod = 0;
	      		this.rashod = 0;
	      		addResult.forEach(elem => elem.sum >0 ? this.prihod += elem.sum : this.rashod +=elem.sum);
	    		return addResult;  
	    	}									   									
	    },
    	dialog: {  			
      		get(){return this.$store.getters.getStatisticModalFormStatus;},
      		set(value){this.$store.commit('setStatisticModalFormStatus',value)}
    	}
	},
    methods: {
	    showGraphic(category){
	     	let dataForGraphic = {
						     		values:[],
						     		labels:[]
						     	};
	     	let filtered = this.allList.filter(elem => elem.category == category &&
	     											   new Date(elem.date) >= new Date(this.minMaxDate[0]) &&
						 							   new Date(elem.date) <= new Date(this.minMaxDate[1]));

	     	filtered.forEach(elem => {
	     								dataForGraphic.values.push(this.repayCash(elem.cash));
	     								dataForGraphic.labels.push(new Date(elem.date).toISOString().substring(0,10));
	     							});
	     	this.$store.commit('setDataForGraphic',dataForGraphic);
	     	this.$store.commit('setStatisticGraphicModalFormStatus',true);
	    },
	    repayCash(value){
	    	return value < 0 ? value*-1 : value;
	    }
    }  
  };
</script>