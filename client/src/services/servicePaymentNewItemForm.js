
import api from '@/services/Controller'

export default {

	assemblyData (dirtyInputData){
		console.log(dirtyInputData.date);
		console.log(dirtyInputData.category);
		console.log(dirtyInputData.cash);
		console.log(dirtyInputData.switchTemplate);
		console.log(dirtyInputData.monthes);
		console.log(dirtyInputData.day);
		console.log(dirtyInputData.weekly);
		console.log(dirtyInputData.dateDay);

	},

	async save (inputData) {
		await api.addNewNoteByCategory({
                                    date:inputData.date,
                                    category:inputData.category,
                                    cash:inputData.cash
                                 });
	}

}