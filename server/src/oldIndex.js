const config= require('./config/config');
const express = require('express');
const promise = require('promise');

const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'experrt_budget',
	port: 3306
});




app.get("/",function(request,response){
	response.send("<h3>Главная</h3>");
});

app.get("/select", function(request,response){
	console.log("ответ: "+select());
	
	//select();
	//response.send(select());
});


//app.listen(config.port);

app.listen(process.env.PORT || config.port);
console.log(`Server start on port ${config.port} ...`);

//console.log(`Server start on port ${config.port} ...`);

function test(){

	console.log("ответ: ");
}

//async function select(){


			    //+ "where category ='бензин'";
// return new Promise (function(resolve){


let selectQuery = function(strQuery){
	connection.connect();
	return new Promise (function(resolve,reject){
		connection.query(strQuery,function(error, result){

			resolve(result[1].category);

		});
	});
	connection.end();
};	

let stringQuery = "Select * from tbl_note_summ_days "+
				  "where category ='бензин' and " +
				  "summ > 100";

async function select(){
	return await selectQuery(stringQuery);
}



// 		return resolve(result);
// 	});
	
// });


//let selectRes = await promise (mysql, mysql.query, stringQuery);

// console.log('select '+str);
// return(str);



