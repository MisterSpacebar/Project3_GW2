var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'your-password',
  database : 'cloudprint'
});

connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ... nn");
	} else {
		console.log("Error connecting database ... nn");
	}
	});

	exports.register = function(req,res){
		// console.log("req",req.body);
		var today = new Date();
		var users={
		  "first_name":req.body.first_name,
		  "last_name":req.body.last_name,
		  "email":req.body.email,
		  "password":req.body.password,
		  "created":today,
		  "modified":today
		}
		connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
		if (error) {
		  console.log("error ocurred",error);
		  res.send({
			"code":400,
			"failed":"error ocurred"
		  })
		}else{
		  console.log('The solution is: ', results);
		  res.send({
			"code":200,
			"success":"user registered sucessfully"
			  });
		}
		});
	  }	

	  exports.login = function(req,res){
		var email= req.body.email;
		var password = req.body.password;
		connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
		if (error) {
		  // console.log("error ocurred",error);
		  res.send({
			"code":400,
			"failed":"error ocurred"
		  })
		}else{
		  // console.log('The solution is: ', results);
		  if(results.length >0){
			if(results[0].password == password){
			  res.send({
				"code":200,
				"success":"login sucessfull"
				  });
			}
			else{
			  res.send({
				"code":204,
				"success":"Email and password does not match"
				  });
			}
		  }
		  else{
			res.send({
			  "code":204,
			  "success":"Email does not exits"
				});
		  }
		}
		});
	  }


// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('sign-up.js', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =========================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
