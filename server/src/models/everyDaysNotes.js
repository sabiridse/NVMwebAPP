const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const everyDaysNotesSchema = new Schema(
	{
		date:     Date,
		plus:     Number,
		minus:    Number,
		cash:     Number,
		dayOfWeek:String,
		created: { 
	        type: Date,
	        default: Date.now
    	}
	}
);

const everyDaysNotes = mongoose.model('everyDaysNotes', 
									   everyDaysNotesSchema);
module.exports = everyDaysNotes;
