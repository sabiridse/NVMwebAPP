<template>
    <v-data-table
      :items="hotPointsList"
 	    hide-actions
      hide-headers
      
    >
      <template slot="items" slot-scope="props" >
      	<tr v-bind:class="[props.item.ostatok < 1 ? themes+' red--text' : themes+' white--text']">
        <td class="text-xl-center">{{ changeDateFormat(props.item) }}</td>
        <td class="text-xl-center">{{ props.item.ostatok }}</td>
    </tr>
      </template>
    </v-data-table>
</template>
<script>

export default {
  data() {
    return {
 
    }
  },
  computed :{
  	themes: {
        get(){return this.$store.getters.getThemes},
        set(value){this.$store.commit('setThemes',value)}
      },
    hotPointsList:{ 	
    	get(){
    		let allList = this.$store.getters.getStatisticTableDataList.slice();
    		return allList.filter(elem => this.addHotPoints(elem, allList))  									   									
    	}
    }  
  },
  methods:{
  	changeDateFormat(item){
      return new Date(item.date).toISOString().substring(0,10);
    },
   addHotPoints(elem,allList){
   	let elemIndex = allList.indexOf(elem);
   	if (elemIndex < allList.length-1) {
	   	let nextElem = allList.slice(elemIndex+1, elemIndex+2);
	   	let	nextOstatok = nextElem[0].ostatok;
	   	let status;
	   (elem.ostatok < nextOstatok 
	   	&& new Date(elem.date) > new Date()
	   	&& new Date(elem.date) < new Date()
	   							.setMonth(new Date()
	   									  .getMonth() + 4)) ? status=true : status=false;
	   return status;
    } else return false
   } 

  }
};

</script>