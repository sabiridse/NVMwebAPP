

export default {
	state: {
	    dark: true,
	    themes: "teal darken-2",
	    topBarColor: "teal darken-4",
	    
	},
	actions: {
		
	},
	mutations: {
	    setDark(state, status){
	      state.dark = status;
	    },
	    setThemes(state, status){
	      state.themes = status;
	    },
	    setTopBarColor(state, status){
	      state.topBarColor = status;
	    },
	    
	},
	getters: {
	    getDark(state){
	      return state.dark;
	    },
	    getThemes(state){
	      return state.themes;
	    },
	    getTopBarColor(state){
	      return state.topBarColor;
	    },
	    
	    	  
	}
}