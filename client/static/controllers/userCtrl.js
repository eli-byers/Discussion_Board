discussionBoard.controller('userController', function ($scope, $routeParams, userFactory){
	$scope.user;

	userFactory.getById($routeParams.id, function(user_data){
		$scope.user = user_data;
		console.log(user_data);
	});


});
