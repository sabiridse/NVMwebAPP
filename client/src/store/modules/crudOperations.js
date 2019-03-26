export default {
  state: {
    items: [],
    categoryesList:[],
    oneDayItems:[],
    curientDate:'',
    defaultPropsNewItemModalForms:{
      title:"Новая запись в таблицу",
      category: null,
      date: new Date().toISOString().substr(0, 10),
      switchProfit: false,
      cash: null,
      id:0
    },
    propsNewItemModalForms:{
      title:"Новая запись в таблицу",
      category: null,
      date: new Date().toISOString().substr(0, 10),
      switchProfit: false,
      cash: null,
      id:0
    }
  },
  actions: {
    allCategoryesList({commit}, list){
      let arrayCategoryes = [];
      list.forEach(function(oneCategory){
        arrayCategoryes.push(oneCategory.category);
      })
      commit("ALL_CATEGORY_LIST", arrayCategoryes);
    },

    setCurientDate({commit}, cDate){
      commit("CURIENT_DATE", cDate);
    },
    setPropsNewItemModalForms({commit},item){
      let props = {
        title:"Редактирование записи",
        cash: item.cash,
        date: new Date(item.date).toISOString().substr(0, 10),
        category: item.category,
        switchProfit: item.cash >= 0 ? true:false,
        id: item._id
      }
      commit("PROPS_NIMF", props);
    },
    setDefaultPropsNIMF({commit}){
      commit("DEF_PROPS_NIMF");
    }


  },
  mutations: {

    ALL_LIST(state, list) {
      state.items = list;
    },
    ALL_CATEGORY_LIST(state, list){     
      state.categoryesList = list;
    },
    CURIENT_DATE(state, cDate) {
      state.curientDate = cDate;
    },
    DEF_PROPS_NIMF(state){
      state.propsNewItemModalForms = state.defaultPropsNewItemModalForms;
    },
    PROPS_NIMF(state, props){
      state.propsNewItemModalForms = props;
    }
  },
  getters: {
    items(state) {
      return state.items;
    },
    getPropsNewItemModalForms(state){
      return state.propsNewItemModalForms;
    },
    getCategoryesList(state) {     
      return state.categoryesList;
    },
    getNotesByCategoryes(state){
      return state.notesByCategoryes;
    },
    getCurientDate(state) {
      return state.curientDate;
    }
  }
}