import Vue from "vue";
import Vuex from "vuex";
import modalFormsStatus from "./modules/modalFormsStatus"
import crudOperations from "./modules/crudOperations"
import changeTheme from "./modules/changeTheme"
import tablesSwitcher from "./modules/tablesSwitcher"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  	modalFormsStatus,
  	crudOperations,
  	changeTheme,
  	tablesSwitcher
  }
})