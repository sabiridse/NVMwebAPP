module.exports={
    //port: 9092,//server start port for production GUEST
    //port: 9082,//server start port for production
   	port: 80,  //server start port for local developing

//***************************************************

	timeLiveCookies: 900000,//15 min

//***************************************************

	httpHeaderOrigin:'http://localhost:8080',  //local developing cors http prop index.js
	//httpHeaderOrigin:'http://localhost:9080',//PRODUCTION cors http prop index.js
	//httpHeaderOrigin:'http://84.201.158.214:9090',//GUEST_PROD cors http prop index.js

//***************************************************
	
	//******for production********************
	//dbURL: 'mongodb://ribasBudgetDB:8$imvoloV@localhost:27017/budgetDB', 

	//******for production GUEST********************
	//dbURL: 'mongodb://developer:developer@localhost:27017/developer',

	//******for developing BY PRODUCT_DB******
	//dbURL: 'mongodb://ribasBudgetDB:8$imvoloV@84.201.158.214:27017/budgetDB',

	//******for developing BY DEV_DB********************
	//dbURL: 'mongodb://developer:developer@84.201.158.214:27017/developer',

	//******for developingDB BY LOCAL********************
	//dbURL: 'mongodb://localhost:27017/budgetDB',
	
	//******for guestDB BY LOCAL********************
	dbURL: 'mongodb://localhost:27017/guestDev',

//****************************************************

	dbOptions: { useNewUrlParser: true }//
}