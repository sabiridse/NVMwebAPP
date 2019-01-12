const categoryes = require('../models/categoryes')

module.exports = function(app) {

	app.post('/add_category', (req, res) => {
	  var new_category = new categoryes({
	    category:     req.body.category,
	  })
	  new_category.save(function (error) {
		    if (error) {
		      res.send(error);
		    } else
		      res.send({
		      success: true
		    })
	  	})
	});

	app.get('/selectAllCategoryes',(req,res) =>{
		categoryes.find({}).exec(function(err, allCategoryes) {
	    if (err) throw err;
	     	res.send(allCategoryes); 
		});
	});

	app.delete('/delete_category/:category', (req, res) => {
		categoryes.remove({
		   category: req.params.category
		  }, function(err, note){
		    if (err){
		      res.send(err);
		    } else {
		      res.send({
		      success: true
		    })
		    }		    
		})
	});
}