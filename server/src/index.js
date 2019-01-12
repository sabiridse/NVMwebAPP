const config    = require('./config/config');
const express   = require('express');
const bodyParser= require('body-parser');
const cors      = require('cors');
const mongoose  = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, config.dbOptions);
mongoose.connection
   .once('open', () => {
     console.log("************************************");
     console.log("Mongoose - successful connection ...");

     require('./routes/everyDaysNotes')(app);
     require('./routes/categoryes')(app);

    app.listen(process.env.PORT || config.port,
      () => {
        console.log("************************************");
        console.log(`Server start on port ${config.port} ...`)})
   })
   .on('error', error => console.warn(error));

   