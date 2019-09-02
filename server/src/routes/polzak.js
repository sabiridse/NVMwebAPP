const user = require('../models/polzak')
const crypto = require('crypto')
const log        = require('log4js').getLogger('polzak');
module.exports = function(app) {

	app.post('/login', (req, res) => {

	checkUser(req.body)
		.then(function (user) {
			if(user) {log.info('user',req.body.name,'is authed'); res.send(true)}
				else {
					log.info('failed',req.body.name,'authing');
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
		log.info('creatured new user',polzak.username);
		res.send('done')
	});
}

function checkUser (userData) {
	return user
		.findOne({username: userData.name})
		.then(function (doc) {
			if (doc) {
				return (doc.password == userData.pswd) ? true : false
			} else {log.info('no such user', userData.name); return false}
		})
}

function hash(text) {
	return crypto.createHmac('sha256', 'abcdefg')
	.update(text).digest('hex')
}
