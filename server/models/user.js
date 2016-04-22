var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	topics: Number,
	posts: Number,
	comments: Number
});

var User = mongoose.model('User', UserSchema) // We are retrieving this Schema from our Models, named 'User'
