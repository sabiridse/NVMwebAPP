
import api from '@/services/Controller'

export default {

	assemblyData (dirtyInputData){
		let outputData = [                
			{
				date:dirtyInputData.date,
				category:dirtyInputData.category,
				cash:dirtyInputData.cash
			}
		];

		if (!dirtyInputData.switchTemplate){//**если не в шаблон
		  this.save(outputData);          // передаю массив с одним документом
		}else{                              //**если в шаблон
		  this.addDataInTemplate(dirtyInputData);//делаю массив много документов			
		}
	},

	 save (inputData) {
		 api.addNewNoteByCategory(inputData);                
	},

	addDataInTemplate(dirtyInputData) {

		if(dirtyInputData.day !== null){this.templateByDays(dirtyInputData)};
		if(dirtyInputData.weekly !== null){this.templateByDayOfWeek(dirtyInputData)};
		if(dirtyInputData.dateDay !== null){this.templateByDateOfMonth(dirtyInputData)};
	},

	templateByDays(dirtyInputData){

		let countCicles = Math.round((dirtyInputData.monthes*30)/dirtyInputData.day);
		let baseDate = new Date(dirtyInputData.date);
		let dateVal =  new Date(dirtyInputData.date);
		let outputData = [];
		for (var i = 0 ; i < countCicles; i++){		
			let elementData = {
				date:dateVal,
				category:dirtyInputData.category,
				cash:dirtyInputData.cash
			};
			outputData.push(elementData);
			dateVal = new Date(baseDate.setDate(baseDate.getDate() + dirtyInputData.day));			
		}
		this.save(outputData);
	},

	templateByDayOfWeek(dirtyInputData){
		let weeks = 4*dirtyInputData.monthes;
		let dateVal =  new Date(dirtyInputData.date);
		let baseDate = new Date(dirtyInputData.date);
		baseDate.setDate(baseDate.getDate() + this.changeWeeklyDayFormat(dirtyInputData.weekly)-dateVal.getDay());
		let outputData = [];
		for (var i = 0 ; i < weeks+1; i++){			
			let elementData = {
				date:dateVal,
				category:dirtyInputData.category,
				cash:dirtyInputData.cash
			};
			outputData.push(elementData);	
			dateVal = new Date(baseDate.setDate(baseDate.getDate() + 7));		
		}
		this.save(outputData);
	},
	templateByDateOfMonth(dirtyInputData){

		let monthes = dirtyInputData.monthes;
		let baseDate = new Date(dirtyInputData.date);
		let dateVal  = new Date(dirtyInputData.date);
		let outputData = [];
		for (var i = 0 ; i < monthes+1; i++){		
			let elementData = {
				date:dateVal,
				category:dirtyInputData.category,
				cash:dirtyInputData.cash
			};
			outputData.push(elementData);
			dateVal = new Date(baseDate.setMonth(baseDate.getMonth() + 1));			
		}
		this.save(outputData);
	},
	changeWeeklyDayFormat(dayString){

		switch(dayString){
			case "Понедельник": return 1; break;
			case "Вторник": return 2; break;
			case "Среда": return 3; break;
			case "Четверг": return 4; break;
			case "Пятница": return 5; break;
			case "Суббота": return 6; break;
			case "Воскресенье": return 7; break;
		}

	},


}