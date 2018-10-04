const config    = require('./config/config');
const express   = require('express');
const bodyParser= require('body-parser');
const cors      = require('cors');
const mongoose  = require('mongoose');

const app = express();

const Cat = require('./models/users');

app.use(bodyParser.json());
app.use(cors());
//app.use(require('./routes/users'));

mongoose.Promise = global.Promise;

mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection
   .once('open', () => {
     console.log("*****************************************************");
     console.log("Mongoose - successful connection ...");
    app.listen(process.env.PORT || config.port,
      () => {
      	console.log("*********************************************************");
      	console.log(`Server start on port ${config.port} ...`)})
   })
   .on('error', error => console.warn(error));

//create
let newCat = new Cat ({
	name: 'firstTest'
}).save(function(err){
	if(err) throw err;
});

//select
app.get('/select',(req,res) =>{
	Cat.find({}).exec(function(err, cat) {
    if (err) throw err;
     	res.send({cat: cat[1].name})    
	});
})

