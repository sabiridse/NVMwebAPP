export default {
	state: {
	    settingsModalFormStatus: false,
	    newItemModalFormStatus: false,
	    changeThemeModalFormStatus: false,
	    NewItemModalFormStatus: false,
	    statisticModalFormStatus: false
	  },
	  actions: {
	  },
	  mutations: {
	    setSettingsModalFormStatus(state, status){
	      state.settingsModalFormStatus = status;
	    },
	    setNewItemModalFormStatus(state, status){
	      state.newItemModalFormStatus = status;
	    },
	    setChangeThemeModalFormStatus(state, status){
	      state.changeThemeModalFormStatus = status;
	    },
	    setNewCategoryModalFormStatus(state, status){
	      state.NewItemModalFormStatus = status;
	    },
	    setStatisticModalFormStatus(state, status){
	      state.statisticModalFormStatus = status;
	    }
	  },
	  getters: {
	    getSettingsModalFormStatus(state){
	      return state.settingsModalFormStatus;
	    },
	    getNewItemModalFormStatus(state){
	      return state.newItemModalFormStatus;
	    },
	    getChangeThemeModalFormStatus(state){
	      return state.changeThemeModalFormStatus;
	    },
	    getNewCategoryModalFormStatus(state){
	      return state.NewItemModalFormStatus;
	    },
	    getStatisticModalFormStatus(state){
	      return state.statisticModalFormStatus;
	    }
	  }
}