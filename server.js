

// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var login = require('./routes/loginroutes');
var upload = require('./routes/fileroutes');
var React = require('react')
var passport = require('passport');
var flash    = require('connect-flash');
var ReactDOMServer = require('react-dom/server')

require('dotenv').config()
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
/*
Module:multer
multer is middleware used to handle multipart form data
*/
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configuration ===============================================================
// connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// var router = express.Router();
const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
// app.use(session({
// 	secret: 'vidyapathaisalwaysrunning',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login);
// routes ======================================================================
// require('./routes/app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
// routing for economy data
require('dotenv').config()
require('./routes/items/item.js')(app);
require('./routes/items/historical.js')(app);
require('./routes/items/gems.js')(app);
// routing for account-based character data
require('./routes/account/account.js')(app);
//route to handle file printing and listing
router.post('/fileprint',multerupload.any(),upload.fileprint);
router.get('/fileretrieve',upload.fileretrieve);
app.use('/api', router);

// launch ======================================================================

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});