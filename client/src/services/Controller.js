import Api from './Api'
import store from '../store/store'
const async = require('async');
export default {
  
	async addNewNoteByCategory(item) {
		await Api().post('/add_noteByCategory',item);
	},

	async addNewCategory(item) {
		await Api().post('/add_category',item);
    this.categoryList();
	},

	async categoryList() { 
		await Api()
			.get('/selectAllCategoryes')
			.then(response => {
				store.dispatch('allCategoryesList', response.data)
			})
			.catch(err => {
				console.log('no connect to mongoDB: '+err)
			});			
	},

  async deleteNote(id) {
    await Api().delete('/deleteNote/'+id);
    this.selectAll();
  },
  async editNote(note) {
    await Api().put('/editNote/'+note._id, note);
    this.selectAll();
  },
	async selectAll() {
		await Api()
			.get('/selectAll')
			.then(response => {
			 	store.commit('ALL_LIST', response.data);
			})
			.catch(err => {
				console.log('no connect to mongoDB: '+err)
			});			
	}
}

