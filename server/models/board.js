var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
	author: Object,
	topic: String,
	description: String,
	category: String,
	posts: Number,
	date_created: String,
	posts: Array
});

var Board = mongoose.model('Board', BoardSchema);
