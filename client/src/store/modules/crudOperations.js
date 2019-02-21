export default {
  state: {
    items: [],
    categoryesList:[],
    notesByCategoryes:[
      {
        date:'12.02.2019',
        category:'Продукты',
        summ: 1000
      },
      {
        date:'12.02.2019',
        category:'Продукты',
        summ: 500
      },
      {
        date:'12.02.2019',
        category:'Бензин',
        summ: 200
      },
      {
        date:'11.02.2019',
        category:'Продукты',
        summ: 200
      },
      {
        date:'10.02.2019',
        category:'Продукты',
        summ: 800
      },
      {
        date:'10.02.2019',
        category:'Алко',
        summ: 1000
      },
      {
        date:'10.02.2019',
        category:'Алко',
        summ: 100
      },
      {
        date:'10.02.2019',
        category:'Алко',
        summ: 600
      }
    ]
  },
  actions: {
    // addNote({ commit }, note) {
    //   commit("ADD_NOTE", note);
    // },
    // defultList({ commit }, notes) {
    //   commit("DEFULT_LIST", notes);
    // },
    allCategoryesList({commit}, list){
      let arrayCategoryes = [];
      list.forEach(function(oneCategory){
        arrayCategoryes.push(oneCategory.category);
      })
      commit("ALL_CATEGORY_LIST", arrayCategoryes);
    }
  },
  mutations: {
    // ADD_NOTE(state, note) {
    //   state.items.push(note);
    // },
    ALL_LIST(state, list) {
      state.items = list;
    },
    ALL_CATEGORY_LIST(state, list){     
      state.categoryesList = list;
    }
  },
  getters: {
    items(state) {
      return state.items;
    },
    getCategoryesList(state) {     
      return state.categoryesList;
    },
    getNotesByCategoryes(state){
      return state.notesByCategoryes;
    }
  }
}