export default {
	state: {
	    min_max_day : [],
	    dataForGraphic:{
						    values:[],
						    labels:[]
						}
	},
	actions: {
	},
	mutations: {
	    setMinMaxDate(state, array){
	      state.min_max_day = array;
	    },
	     setDataForGraphic(state, object){
	      state.dataForGraphic = object;
	    }
	},
	getters: {	    
	    getMinMaxDate(state){
	      return state.min_max_day;
	    },
	    getDataForGraphic(state){
	    	return state.dataForGraphic;
	    }	  
	}
}