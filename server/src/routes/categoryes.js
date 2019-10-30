const categoryes = require('../models/categoryes')
const log        = require('log4js').getLogger('categoryes');
const notesByCategoryes = require('../models/notesByCategoryes')
const checkCookie = require('../middlewares/checkCookie')

module.exports = function(app) {

	app.get('/selectAll',checkCookie,(req,res) =>{	
				notesByCategoryes.find({}).exec(function(err, allNotes) {
		    	if (err) throw err;
		     	res.send(allNotes); 
				});
	});

	app.post('/add_category', checkCookie,(req, res) => {
	  var new_category = new categoryes({
	    category:     req.body.category,
	    status: 	  req.body.status
	  })
		if (req.body.status == 0) {
		  	new_category.save(function (error) {//add new category(status=0)
			    if (error) {
			    	log.error(err);
			      	res.send(error);
			    } else
			      res.send({
			      success: true
			    })
			})
		} 	else                                 //replace dateChecking(status=1)
		  	categoryes.replaceOne({status:1},{category:req.body.category, status:1},function (error) {
				if (error) {
					log.error(err);
				    res.send(error);
				} else
				      res.send({
				      success: true
				    })
			})     		  			
	});

	app.get('/selectAllCategoryes',checkCookie, (req,res) =>{
		categoryes.find({},{_id:0}).sort({category: 1}).exec(function(err, allCategoryes) {
	    if (err) {log.error(err)} else {
	    		log.info('selectAllCategoryes is done')
	    		res.send(allCategoryes);
	    }
		});
	});
}