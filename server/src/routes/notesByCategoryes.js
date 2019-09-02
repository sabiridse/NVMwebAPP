const notesByCategoryes = require('../models/notesByCategoryes')
const log        = require('log4js').getLogger('notesByCategoryes');
module.exports = function(app) {

	app.post('/add_noteByCategory', (req, res) => {
			var errors =[];
			for (i=0;i<req.body.length; i++) {
				
					new notesByCategoryes(
					{
					 date:     req.body[i].date,
				     category: req.body[i].category,
				     cash:     req.body[i].cash
					}).save(function (err, done) {
							if (err) errors.push(err);
						 });  
			}			    
						    if(errors.length!=0){//***если есть ошибки
						    	log.info('failed add_noteByCategory');
						   		res.send(errors);//***ответ с ошибками
						   	} else {
						   		res.send({
			 					 success: true
			 					})
						   	}
	});

	app.get('/selectAll',(req,res) =>{
		notesByCategoryes.find({}).exec(function(err, allNotes) {
	    if (err) throw err;
	     	res.send(allNotes); 
		});
	});

	app.delete('/deleteNote/:id', (req, res) => {
		notesByCategoryes.deleteOne({
		   _id: req.params.id
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

	app.get('/note/:id', (req, res) => {
	  notesByCategoryes.find({_id: req.params.id}, function (error, note) {
	    if (error) {
	      res.send(error)
	    } else {
	      res.send(note)
	    }	    
	  })
	});

	app.put('/editNote/:id', (req, res) => {
		notesByCategoryes.findById(req.params.id, 'plus minus', function (error, note) {
		  if (error) { log.error(error); }
		  note.plus =  req.body.plus;
		  note.minus = req.body.minus;	
		  note.save(err => {
	        if (err) {
	        	log.error(err);
	          res.sendStatus(500)
	        } else {
	          res.sendStatus(200)
	        }
	      })
		})
	})


	// app.get('/contexSearch/:search', (req, res) => {
	//   everyDaysNotes.find(
	//   	{ $text: { $search: req.params.search } }
	//   	, function (error, note) {
	//     if (error) {
	//       res.send(error)
	//     } else {
	//       res.send(note)
	//     }	    
	//   })
	// });
}