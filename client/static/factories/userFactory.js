discussionBoard.factory('userFactory', function($http){
	var factory = {};
	var user;

	factory.getUser = function(callback){
		console.log("getUser", user);
		callback(user);
	}

	factory.logIn = function(new_user, callback){
		$http.post('/user', new_user).success(function(added_user){
			user = added_user;
			console.log("user", user);
			callback();
		});
	}

	factory.logOut = function(){
		user = {};
		$location.path('/');
	}

	factory.getById = function(id, callback){
		$http.get('/users/'+id).success(function(user_data){
			callback(user_data);
		});
	}

	return factory;
});
