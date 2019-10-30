const session   = require('express-session');
const MongoStore= require('connect-mongo')(session);
const config    = require('../confic/confic');
const user      = require('../models/polzak')
const crypto    = require('crypto')
const log       = require('log4js').getLogger('polzak')
const checkCookie = require('../middlewares/checkCookie')

module.exports = function(app) {

app.post('/login',(req, res) => {
	checkUser(req.body)
		.then(function (user) {
			if(user) {
						req.session.user = user._id;
						req.session.save();
						res.cookie('userId', user._id,
							{ expires: new Date(Date.now() + config.timeLiveCookies),
							  httpOnly: true 
							});	
						res.send(true);
					}
				else {
					log.info('failed',req.body.name,'authing');
					res.send(false)
				}
		})
});

	app.post('/newpolzak',checkCookie,(req,res) => {
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
				return (doc.password == userData.pswd) ? doc : false
			} else {log.info('no such user', userData.name); return false}
		})
}

function hash(text) {
	return crypto.createHmac('sha256', 'abcdefg')
	.update(text).digest('hex')
}
