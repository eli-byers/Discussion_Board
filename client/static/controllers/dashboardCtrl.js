
discussionBoard.controller('dashboardController', function ($scope, $location, userFactory, boardFactory){

	$scope.boards;
	$scope.user;

	userFactory.getUser(function(user){
		$scope.user = user;
		if ($scope.user == undefined){
			$location.path('/');
		}
	});

	boardFactory.getBoards(function(boards){
		$scope.boards = boards;
	});

	$scope.addBoard = function(newBoard){
		newBoard.posts = 0;
		newBoard.date_created = moment();
		newBoard.author = {name: $scope.user.name, id: $scope.user._id};
		boardFactory.newBoard(newBoard, function(board){
			$scope.boards.push(board);
			$scope.newBoard = {};
		});
	};

	$scope.viewTopic = function(topic_id){
		console.log(topic_id);
		$location.path('/topic').search({id: topic_id});
	};

	$scope.viewUser = function(user_id){
		console.log(user_id);
		$location.path('/user').search({id: user_id});
	};

});
