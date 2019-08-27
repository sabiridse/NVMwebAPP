import api from '@/services/Controller'

export default {
  state: {
    alertLimit: 2000,
    statisticTableDataList: [],
    items: [],
    categoryesList: [],
    oneDayItems: [],
    curientDate: '',
    dateChecking: '',
    resultColorAuthForm: 'success',
    defaultPropsNewItemModalForms: {
      title: 'Новая запись в таблицу',
      category: null,
      date: new Date().toISOString().substr(0, 10),
      switchProfit: false,
      cash: null,
      id: 0
    },
    propsNewItemModalForms: {
      title: 'Новая запись в таблицу',
      category: null,
      date: new Date().toISOString().substr(0, 10),
      switchProfit: false,
      cash: null,
      id: 0
    }
  },
  actions: {
    allCategoryesList ({ commit }, list) {
      let arrayCategoryes = []
      list.forEach(function (oneCategory) {
        if (oneCategory.status == 0) {
          arrayCategoryes.push(oneCategory.category)
        } else commit('SET_DATE_CHECKING', oneCategory.category)
      })
      commit('ALL_CATEGORY_LIST', arrayCategoryes)
    },

    async setDateChecking ({ commit }, dateChecking) {
      await api.addNewCategory({
        category: dateChecking,
        status: 1 // dateChecking
      })
      commit('SET_DATE_CHECKING', dateChecking)
    },

    setCurientDate ({ commit }, cDate) {
      commit('CURIENT_DATE', cDate)
    },
    setPropsNewItemModalForms ({ commit }, item) {
      let props = {
        title: 'Редактирование записи',
        cash: item.cash,
        date: new Date(item.date).toISOString().substr(0, 10),
        category: item.category,
        switchProfit: item.cash >= 0,
        id: item._id
      }
      commit('PROPS_NIMF', props)
    },
    setDefaultPropsNIMF ({ commit }) {
      commit('DEF_PROPS_NIMF')
    }

  },
  mutations: {

    ALL_LIST (state, list) {
      state.items = list
    },
    ALL_CATEGORY_LIST (state, list) {
      state.categoryesList = list
    },
    CURIENT_DATE (state, cDate) {
      state.curientDate = cDate
    },
    DEF_PROPS_NIMF (state) {
      state.propsNewItemModalForms = state.defaultPropsNewItemModalForms
    },
    PROPS_NIMF (state, props) {
      state.propsNewItemModalForms = props
    },
    ALERT_LIMIT (state, value) {
      state.alertLimit = value
    },
    STATISTIC_TABLE_DATA (state, list) {
      state.statisticTableDataList = list
    },
    SET_DATE_CHECKING (state, status) {
      state.dateChecking = status
    },
    SET_RESULT_COLOR_AUTH_FORM (state, color) {
      state.resultColorAuthForm = color

    }
  },
  getters: {
    getStatisticTableDataList (state) {
      return state.statisticTableDataList
    },
    getAlertLimit (state) {
      return state.alertLimit
    },
    items (state) {
      return state.items
    },
    getPropsNewItemModalForms (state) {
      return state.propsNewItemModalForms
    },
    getCategoryesList (state) {
      return state.categoryesList
    },
    getNotesByCategoryes (state) {
      return state.notesByCategoryes
    },
    getCurientDate (state) {
      return state.curientDate
    },
    getDateChecking (state) {
      return state.dateChecking
    },
    getResultColorAuthForm (state) {
      return state.resultColorAuthForm
    }
  }
}
