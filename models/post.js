// load the things we need
var mongoose = require('mongoose');

var currentDate = new Date();

// define the schema for our user model
var postSchema = mongoose.Schema({
   	imageUrl: String, 
	title:String, 
	author:String,
	description:String,
	voteCount:Number,
	display:  {},
	comments: [{author: String, text: String},{author:String, text: String}]

});



// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema);