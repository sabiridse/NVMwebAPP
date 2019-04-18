export default {
	state: {
	    curientComponent : "statisticTable",
	    statPanelCurientComponent: "categoryStataTable"
	},
	actions: {
	},
	mutations: {
	    setCurientComponent(state, status){
	      state.curientComponent = status;
	    },
	    setStatPanelCurientComponent(state, status){
	      state.statPanelCurientComponent = status;
	    }
	},
	getters: {	    
	    getCurientComponent(state){
	      return state.curientComponent;
	    },
	     getStatPanelCurientComponent(state){
	      return state.statPanelCurientComponent;
	    },	  
	}
}