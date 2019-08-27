export default {
  state: {
	    settingsModalFormStatus: false,
	    newItemModalFormStatus: false,
	    changeThemeModalFormStatus: false,
	    NewItemModalFormStatus: false,
	    statisticModalFormStatus: false,
	    statisticGraphicModalFormStatus: false,
	    authModalFormStatus: true,
	    appCurientComponent: 'authModalForm'
	  },
	  actions: {
	  },
	  mutations: {
	    setSettingsModalFormStatus (state, status) {
	      state.settingsModalFormStatus = status
	    },
	    setNewItemModalFormStatus (state, status) {
	      state.newItemModalFormStatus = status
	    },
	    setChangeThemeModalFormStatus (state, status) {
	      state.changeThemeModalFormStatus = status
	    },
	    setNewCategoryModalFormStatus (state, status) {
	      state.NewItemModalFormStatus = status
	    },
	    setStatisticModalFormStatus (state, status) {
	      state.statisticModalFormStatus = status
	    },
	    setStatisticGraphicModalFormStatus (state, status) {
	      state.statisticGraphicModalFormStatus = status
	    },
	    setAuthModalFormStatus (state, status) {
	      state.authModalFormStatus = status
	    },
	    SET_APP_CURIENT_COMPONENT (state, component) {
	      state.appCurientComponent = component
	    }
	  },
	  getters: {
	  	getAppCurientComponent (state) {
	      return state.appCurientComponent
	    },
	    getSettingsModalFormStatus (state) {
	      return state.settingsModalFormStatus
	    },
	    getAuthModalFormStatus (state) {
	      return state.authModalFormStatus
	    },
	    getNewItemModalFormStatus (state) {
	      return state.newItemModalFormStatus
	    },
	    getChangeThemeModalFormStatus (state) {
	      return state.changeThemeModalFormStatus
	    },
	    getNewCategoryModalFormStatus (state) {
	      return state.NewItemModalFormStatus
	    },
	    getStatisticModalFormStatus (state) {
	      return state.statisticModalFormStatus
	    },
	    getStatisticGraphicModalFormStatus (state) {
	      return state.statisticGraphicModalFormStatus
	    }
	  }
}
