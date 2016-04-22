discussionBoard.factory('boardFactory', function($http){
	var factory = {};

	factory.getBoards = function(callback){
		$http.get('/boards').success(function(boards){
			callback(boards)
		});
	}

	factory.newBoard = function(board, callback){
		board.posts = [];
		$http.post('/boards', board).success(function(board){
			console.log()
			callback(board);
		});
	}

	factory.getById = function(id, callback){
		$http.get('/boards/'+id).success(function(user_data){
			callback(user_data);
		});
	}

	factory.newPost = function(id, newPost, callback){
		$http.put('/boards/posts/'+id, newPost).success(function(updated_board){
			callback(updated_board);
		});
	}

	factory.newComment = function(board, user, callback){
		$http.put('/boards/comments/'+board._id, {commenter: user._id, board: board}).success(function(updated_board){
			callback(updated_board);
		});
	}

	factory.newVote = function(board, callback){
		$http.put('/boards/votes'+board._id, {board: board}).success(function(updated_board){
			callback(updated_board);
		});
	}

	return factory;
});
