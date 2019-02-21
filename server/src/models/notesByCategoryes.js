const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const notesByCategoryesSchema = new Schema(
	{
		date:     Date,
		category: String,
		cash: 	  Number,
		created: { 
	         type: Date,
	         default: Date.now
     	}
	}
);

const notesByCategoryes = mongoose.model('notesByCategoryes', 
									   notesByCategoryesSchema);
module.exports = notesByCategoryes;