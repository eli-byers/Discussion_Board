var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	create: function(req, res){
		var user = new User(req.body);
		user.save(function(err, user) {
			if(err) { console.log(err); }
			else {
				res.json(user);
			}
		});
	},

	show: function(req, res){
		User.findById(req.params.id, function(err, user){
			if(err) { console.log(err); }
			else {
				res.json(user);
			}
		});
	},

	increment: function(id, category){
		console.log(category);
		User.findById(id, function(err, user){
			user[category] += 1;
			user.save(function(err){
				if(err){ console.log(err); }
			})
		})
	}

}
