const notesByCategoryes = require('../models/notesByCategoryes')

module.exports = function(app) {

	app.post('/add_noteByCategory', (req, res) => {
	  var new_note = new notesByCategoryes({
	    date:     req.body.date,
	    category: req.body.category,
	    cash:     req.body.cash
	   })
	  new_note.save(function (error) {
		    if (error) {
		      res.send(error);
		    } else
		      res.send({
		      success: true,
		      new_note: new_note
		    })
	  	})
	});

	app.get('/selectAll',(req,res) =>{
		notesByCategoryes.find({}).exec(function(err, allNotes) {
	    if (err) throw err;
	     	res.send(allNotes); 
		});
	});

	app.delete('/deleteNote/:id', (req, res) => {
		notesByCategoryes.remove({
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
		  if (error) { console.error(error); }
		  note.plus =  req.body.plus;
		  note.minus = req.body.minus;	
		  note.save(err => {
	        if (err) {
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