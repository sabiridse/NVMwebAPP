import Api from './Api'
import store from '../store/store'
import Vue from 'vue'
import VueCookie from 'vue-cookies'
Vue.use(VueCookie)
const async = require('async')
export default {

  async addNewNoteByCategory (item) {
    await Api().post('/add_noteByCategory/', item, { withCredentials: true })
    this.selectAll()
  },

  async addNewCategory (item) {
    await Api().post('/add_category', item, { withCredentials: true })
    this.categoryList()
  },

  async categoryList () {
    await Api()
      .get('/selectAllCategoryes', { withCredentials: true })
      .then(response => {
        store.dispatch('allCategoryesList', response.data)
      })
      .catch(err => {
        console.log('no connect to mongoDB: ' + err)
      })
  },

  async deleteNote (id) {
    await Api().delete('/deleteNote/' + id, { withCredentials: true })
    this.selectAll()
  },
  async editNote (note) {
    await Api().put('/editNote/' + note._id, note, { withCredentials: true })
    this.selectAll()
  },
  async selectAll () {
    await Api()
      .get('/selectAll', { withCredentials: true })
      .then(response => {
			 	store.commit('ALL_LIST', response.data)
      })
      .catch(err => {
        console.log('no connect to mongoDB: ' + err)
      })
  },

  async checkUser (user) {
    await Api().post('/login', user, { withCredentials: true })
      .then(response => {
        if (!response.data) {
          store.commit('SET_RESULT_COLOR_AUTH_FORM', 'error')
        } else {
          store.commit('SET_RESULT_COLOR_AUTH_FORM', 'success');
          store.commit('SET_APP_CURIENT_COMPONENT', 'mainLayout');
        }
      })
  }
}
