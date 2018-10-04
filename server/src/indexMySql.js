
const config    = require('./config/config');
const express   = require('express');
const Sequelize = require('sequelize');
const bodyParser= require('body-parser');
const cors      = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

const sequelize = new Sequelize(//*****
	'experrt_budget',
	'root',
	'',{
		host:'localhost',
		port: 3306,
		dialect: 'mysql',
		operatorsAliases: false,
		pool: {
			 	max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
				}
	});

app.listen(process.env.PORT || config.port);
console.log(`Server start on port ${config.port} ...`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to DB successfully.');
  })
  .catch(err => {
    console.error('ERROR to connect to the database:', err);
  });

//id category date others summ

const noteSummDays = sequelize.define('tbl_note_summ_days', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
		},
	category: Sequelize.STRING,
	date: Sequelize.DATE,
	others: Sequelize.STRING,
	summ: Sequelize.INTEGER
},{
timestamps: false	
})



app.get("/",function(request,response){
	response.send("<h3>Главная</h3>");
});

app.get("/select/:id", function(request,response){
	noteSummDays.findById(request.params.id)
		.then(row => {
			response.send(row);
		});
});



 