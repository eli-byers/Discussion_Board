var discussionBoard = angular.module('discussionBoard', ['ngRoute']);
//var socket = io.connect();

discussionBoard.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html',
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html',
	})
	.when('/topic', {
		templateUrl: 'partials/topic.html',
	})
	.when('/user', {
		templateUrl: 'partials/user.html'
	})
	
	.otherwise({ redirectTo: '/' });
});
