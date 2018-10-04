const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const categoryesSchema = new Schema({
	name: {
		type: String
	}
});

const categoryes = mongoose.model('categoryes', categoryesSchema);
module.exports = categoryes;
