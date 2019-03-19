export default {
	state: {
	    curientComponent : "statisticTable"
	},
	actions: {
	},
	mutations: {
	    setCurientComponent(state, status){
	      state.curientComponent = status;
	    }
	},
	getters: {	    
	    getCurientComponent(state){
	      return state.curientComponent;
	    },	  
	}
}