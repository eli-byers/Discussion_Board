
discussionBoard.controller('loginController', function ($scope, $location, userFactory){

	$scope.logIn = function(){
		$scope.user.posts = 0;
		$scope.user.topics = 0;
		$scope.user.comments = 0;

		userFactory.logIn($scope.user, function(){
			$location.path('/dashboard');
		});
	};

});
