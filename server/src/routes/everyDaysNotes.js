const everyDaysNotes = require('../models/everyDaysNotes')

module.exports = function(app) {

	app.post('/add_note', (req, res) => {
	
	  var new_note = new everyDaysNotes({
	    date:     req.body.date,
	    plus:     req.body.plus,
	    minus:    req.body.minus,
	    cash:     req.body.cash,
	    dayOfWeek:req.body.dayOfWeek,
	    created:  req.body.created
	  })
	  new_note.save(function (error) {
		    if (error) {
		      res.send(error);
		    } else
		      res.send({
		      success: true
		    })
	  	})
	});

	app.get('/selectAll',(req,res) =>{
		everyDaysNotes.find({}).exec(function(err, allNotes) {
	    if (err) throw err;
	     	res.send(allNotes); 
		});
	});

	app.delete('/deleteNote/:id', (req, res) => {
		everyDaysNotes.remove({
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
	  everyDaysNotes.find({_id: req.params.id}, function (error, note) {
	    if (error) {
	      res.send(error)
	    } else {
	      res.send(note)
	    }	    
	  })
	});

	app.put('/editNote/:id', (req, res) => {
		everyDaysNotes.findById(req.params.id, 'plus minus', function (error, note) {
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