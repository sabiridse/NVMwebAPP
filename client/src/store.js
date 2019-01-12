import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
    //  [ {
    //     date: "11.10.2018",
    //     plus: "10000",
    //     minus: "666",
    //     cash: "9000",
    //     dayOfWeek: "Понедельник"
    //   },
    //   {
    //     date: "12.10.2018",
    //     plus: "0",
    //     minus: "1000",
    //     cash: "8000",
    //     dayOfWeek: "Вторник"
    //   },
    //   {
    //     date: "13.10.2018",
    //     plus: "",
    //     minus: "500",
    //     cash: "7500",
    //     dayOfWeek: "Среда"
    //   }
    // ]
  },
  actions: {
    addNote({ commit }, note) {
      commit("ADD_NOTE", note);
    },
    defultList({ commit }, notes) {
      commit("DEFULT_LIST", notes);
    }
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.items.push(note);
    },
    ALL_LIST(state, list) {
      state.items = list;
    }
  },
  getters: {
    items(state) {
      return state.items;
    }
  },
  modules: {}
});
