const categoryes = require('../models/categoryes')

module.exports = function(app) {

	app.post('/add_category', (req, res) => {
	  var new_category = new categoryes({
	    category:     req.body.category,
	    status: 	  req.body.status
	  })
		if (req.body.status == 0) {
		  	new_category.save(function (error) {//add new category(status=0)
			    if (error) {
			      res.send(error);
			    } else
			      res.send({
			      success: true
			    })
			})
		} 	else                                 //replace dateChecking(status=1)
		  	categoryes.replaceOne({status:1},{category:req.body.category, status:1},function (error) {
				if (error) {
				    res.send(error);
				} else
				      res.send({
				      success: true
				    })
			})     		  			
	});


	app.get('/selectAllCategoryes',(req,res) =>{
		categoryes.find({},{_id:0}).sort({category: 1}).exec(function(err, allCategoryes) {
	    if (err) throw err;
	     	res.send(allCategoryes); 
		});
	});

	// app.delete('/delete_category/:category', (req, res) => {
	// 	categoryes.remove({
	// 	   category: req.params.category
	// 	  }, function(err, note){
	// 	    if (err){
	// 	      res.send(err);
	// 	    } else {
	// 	      res.send({
	// 	      success: true
	// 	    })
	// 	    }		    
	// 	})
	// });
}