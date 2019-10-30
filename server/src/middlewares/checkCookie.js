const user      = require('../models/polzak')

const checkAuth = (req,res, next) => {
	if (req.cookies.userId){
		user.find({_id: req.cookies.userId}, function (error, note) {
			    if (error) {
			      res.redirect('/login');
			    } else {
			      next();
			    }	    
		});
	} else {
		res.redirect('/login');
	}
};
module.exports = checkAuth;