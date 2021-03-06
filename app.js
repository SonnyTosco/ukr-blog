//Express
var express = require('express');
		 	app = express();
		 	methodOverride = require('method-override'),
			morgan = require("morgan"),
			path = require("path");

app.use(express.static(__dirname + '/public'));

//Passport
var passport = require('passport');
require('./config/passport')(passport); //passport configuration

//Cookie and Session
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(passport.initialize());


//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// use morgan
app.use(morgan("tiny"));
// use method-override
app.use(methodOverride('_method'));




//Routes
require('./routes/auth.js')(app,passport); //load our routes and full configured passport
require('./routes/posts.js')(app);
app.listen(process.env.PORT || 3000, function(req,res){
	console.log("App running on localost 3000");
});
