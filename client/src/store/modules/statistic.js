export default {
  state: {
	    min_max_day: [],
	    dataForGraphic: {
						    values: [],
						    labels: []
    					},
    	arrayOfChecksJsonFile:[]				
  },
  actions: {
  },
  mutations: {
	    setMinMaxDate (state, array) {
	      state.min_max_day = array
	    },
	     setDataForGraphic (state, object) {
	      state.dataForGraphic = object
	    },
	    setArrayOfChecksJsonFile (state, array) {
	      state.arrayOfChecksJsonFile = array
	    },
  },
  getters: {
	    getMinMaxDate (state) {
	      return state.min_max_day
	    },
	    getDataForGraphic (state) {
	    	return state.dataForGraphic
	    },
	    getArrayOfCheckJsonFile (state) {
	    	return state.arrayOfChecksJsonFile
	    }
  }
}
