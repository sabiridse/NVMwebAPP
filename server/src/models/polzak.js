const mongoose = require ('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const User = new mongoose.Schema({
	username : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('User', User);