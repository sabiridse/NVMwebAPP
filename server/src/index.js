const config    = require('./config/config');
const express   = require('express');
const bodyParser= require('body-parser');
const cors      = require('cors');
const mongoose  = require('mongoose');
const session   = require('express-session');
const MongoStore= require('connect-mongo')(session);
const log4js    = require('log4js');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: 'GzznmjlbygznM',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    url: config.dbURL,
  })
}));

log4js.configure({
  appenders: { app: { type: 'file', filename: 'main.log' } },
  categories: { default: { appenders: ['app'], level: ['info'] } }
});

app.use(log4js.connectLogger(log4js.getLogger('app'), {level: 'auto'}));

const log = log4js.getLogger('index');

mongoose.Promise = global.Promise;
mongoose.connect(config.dbURL, config.dbOptions);
mongoose.connection
   .once('open', () => {
     console.log("************************************");
     console.log("Mongoose - successful connection for "+config.dbURL);
     log.info("Mongoose - successful connection for "+config.dbURL);

     require('./routes/notesByCategoryes')(app);
     require('./routes/categoryes')(app);
     require('./routes/polzak')(app);
    app.listen(process.env.PORT || config.port,
      () => {
        console.log("************************************");
        console.log(`Server start on port ${config.port} ...`)});
        log.info(`Server start on port ${config.port}`);
   })
   .on('error', error => log.error(error));

   