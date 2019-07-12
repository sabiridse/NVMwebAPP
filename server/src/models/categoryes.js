const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const categoryesSchema = new Schema({
										category:String,
										status: Number //0 - category, 1 - dateChecking
									});
const categoryes = mongoose.model('categoryes',categoryesSchema);
module.exports = categoryes;