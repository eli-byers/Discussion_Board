
discussionBoard.controller('navCtrl', function ($scope, $location, userFactory){

	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};

});
