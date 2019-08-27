const user = require('../models/polzak')
const crypto = require('crypto')
module.exports = function(app) {
	
	// app.post('/login', function(req, res,next) {
	// 	console.log(req.session)
	// 	if (req.session.user) return res.send(req.session)
	// 	checkUser(req.body)
	// 		.then(function(user) {
	// 			if (user) {
	// 				req.session.user = {
	// 									id: user._id,
	// 									name: user.name
	// 									};
	// 				res.send('есть пользователь 200')
	// 			} else {
	// 				return next('hhhh')
	// 			}
	// 		})
	// 		.catch(function (error){
	// 			return next('e886')
	// 		})

	// });

	app.post('/login', (req, res) => {

	checkUser(req.body)
		.then(function (user) {
			if(user) {res.send(true)}
				else {
					res.send(false)
				}
		})
	});

	app.post('/newpolzak',(req,res) => {
		let polzak = {
			username: req.body.name,
			password: hash(req.body.pswd)
		}
		new user(polzak).save();
		res.send('done')
	});
}

function checkUser (userData) {
	return user
		.findOne({username: userData.name})
		.then(function (doc) {
			if (doc) {
				return (doc.password == userData.pswd) ? true : false
			} else return false
		})
}

function hash(text) {
	return crypto.createHmac('sha256', 'abcdefg')
	.update(text).digest('hex')
}


// function checkUser(userData) {		
// 	return user
// 		.findOne({username: userData.name})
// 		.then(function(doc){
// 			if ( doc.password == hash(userData.pswd) ){
// 				return user
// 			} else {
// 				return null
// 			}
// 		})
// }