import Api from './Api'
import store from '../store'
const async = require('async');
export default {
  
	async addNewNote(item) {
		await Api().post('/add_note',item);
    this.selectAll();
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


