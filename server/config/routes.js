var users = require('../controllers/users.js');
var boards = require('../controllers/boards.js');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render("index");
	});

	// users
	app.post('/user', function(req, res) {
		users.create(req, res);
	});
	app.get('/users/:id', function(req, res) {
		users.show(req, res);
	});

	// boards
	app.get('/boards', function(req, res) {
		boards.index(req, res);
	});
	app.post('/boards', function(req, res) {
		users.increment(req.body.author.id, 'topics');
		boards.create(req, res);
	});
	app.get('/boards/:id', function(req, res) {
		boards.show(req, res);
	});
	app.put('/boards/posts/:id', function(req, res) {
		users.increment(req.body.author.id, 'posts');
		boards.update(req, res);
	});
	app.put('/boards/comments/:id', function(req, res) {
		users.increment(req.body.commenter, 'comments');
		boards.save(req, res);
	});
	app.put('/boards/votes/Lid', function(req, res) {
		board.save(req, res);
	})

}
