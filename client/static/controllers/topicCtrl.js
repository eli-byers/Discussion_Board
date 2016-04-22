discussionBoard.controller('topicController', function ($scope, $location, $routeParams, userFactory, boardFactory){
	$scope.user;
	$scope.board;

	userFactory.getUser(function(user_data){
		$scope.user = user_data
	});

	boardFactory.getById($routeParams.id, function(board_data){
		$scope.board = board_data;
	});

	$scope.viewUser = function(user_id){
		$location.path('/user').search({id: user_id});
	};

	$scope.newPost = function(newPost){
		var post = {author: {name: $scope.user.name, id: $scope.user._id}, content: newPost, comments: [], upVotes: 0, downVotes: 0};
		boardFactory.newPost($scope.board._id, post, function(updated_board){
			$scope.board = updated_board;
			$scope.new_post = "";
		});
	}

	$scope.newComment = function(post, newComment){
		var comment = {author: {name: $scope.user.name, id: $scope.user._id}, content: newComment};
		post.comments.push(comment);
		boardFactory.newComment($scope.board, $scope.user, function(updated_board){
			$scope.board = updated_board;
			$scope.new_comment = "";
		});
	}

	$scope.vote = function(post, vote){
		if (vote == 1){ post.upVotes += 1 }
		else if (vote == -1){post.downVotes += 1}
		boardFactory.newVote($scope.board, function(updated_board){
			$scope.board = updated_board;
		});
	}

});
