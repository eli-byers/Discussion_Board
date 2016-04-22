var mongoose = require('mongoose');
var Board = mongoose.model('Board');

module.exports = {

	index: function(req, res){
		Board.find({}, function(err, boards){
			if (err) { console.log(err); }
			else {
				res.json(boards);
			}
		});
	},

	create: function(req, res){
		var board = new Board(req.body);
		board.save(function(err, board) {
			if(err) { console.log(err); }
			else {
				res.json(board);
			}
		});
	},

	show: function(req, res){
		Board.findById(req.params.id, function(err, board){
			if(err) { console.log(err); }
			else {
				res.json(board);
			}
		});
	},

	update: function(req, res){
		Board.findById(req.params.id, function(err, board){
			board.posts.push(req.body);
			board.save(function(err, board){
				res.json(board);
			});
		});
	},

	save: function(req, res){
		Board.findById(req.params.id, function(err, board){
			board.posts = req.body.board.posts;
			board.save(function(err, board){
				res.json(board);
			});
		});
	}

}
