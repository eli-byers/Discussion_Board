var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client/static")));

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});

// Sockets
// var io = require('socket.io').listen(server);
//
// io.sockets.on('connection', function (socket) {
// 	console.log("CONNECTION DETECTED");
// 	console.log(socket);
// });
