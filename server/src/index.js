const config    = require('./confic/confic');
const express   = require('express');
const cors      = require('cors');
const bodyParser= require('body-parser');
const mongoose  = require('mongoose');
const session   = require('express-session');
const MongoStore= require('connect-mongo')(session);
const log4js    = require('log4js');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser('secret key'));

app.use(session({
  secret: 'GzznmjlbygznM',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
    url: config.dbURL,
  }),
  cookie:{
    expires: new Date(Date.now() + config.timeLiveCookies),
    httpOnly: true
  }
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', config.httpHeaderOrigin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Methods','GET, POST, DELETE, OPTIONS');
  if (req.method === "OPTIONS") {
        res.status(200);
      }
  next();
});


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

   