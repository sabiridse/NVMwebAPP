const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const categoryesSchema = new Schema({category:String});
const categoryes = mongoose.model('categoryes',categoryesSchema);
module.exports = categoryes;