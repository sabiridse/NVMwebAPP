<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" scrollable max-width="300px">
		 	<v-card>
        		<v-card-text style="height: 500px;">
		          	<v-data-table
		      		:items="statisticList"
		 	    	hide-actions
		      		hide-headers		      
		    		>
			      		<template slot="items" slot-scope="props" >
					        <td class="text-xl-left">{{ props.item.category }}</td>
					        <td class="text-xl-center">{{ props.item.sum }}</td>
			      		</template>
		    		</v-data-table>
        		</v-card-text>
      		</v-card>	
		</v-dialog>
	</v-layout>   
</template>
<script>
  export default {
    data() {
      return {
       
      }
    },
    computed: {
    	statisticList:{ 	
	    	get(){

				let minMaxDate = this.$store.getters.getMinMaxDate;
	    		let allList = this.$store.getters.items.slice();	    		
	    		var map = allList.reduce((acc, cur)=>{
		        	acc[cur.category] = acc[cur.category] || { 
													          date: new Date(cur.date),
													          category: cur.category,
													          sum:0
												        	  };
					(new Date(cur.date) >= new Date(minMaxDate[0]) &&
					 new Date(cur.date) <= new Date(minMaxDate[1])) ? 
						(acc[cur.category].sum = acc[cur.category].sum + cur.cash) :
	                    (acc[cur.category].sum = acc[cur.category].sum + 0);	       
		        	;	        
		        	return acc;
	      		},{});
	      		var addResult = Object.values(map);


	    		return addResult;  
	    	}									   									
	    },
    	dialog: {  			
      		get(){return this.$store.getters.getStatisticModalFormStatus;},
      		set(value){this.$store.commit('setStatisticModalFormStatus',value)}
    	}
	},
    methods: {
     
    }  
  };
</script>