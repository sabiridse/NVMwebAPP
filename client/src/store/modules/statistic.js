export default {
	state: {
	    min_max_day : []
	},
	actions: {
	},
	mutations: {
	    setMinMaxDate(state, array){
	      state.min_max_day = array;
	    }
	},
	getters: {	    
	    getMinMaxDate(state){
	      return state.min_max_day;
	    },	  
	}
}