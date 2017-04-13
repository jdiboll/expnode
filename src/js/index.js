// Javascript Entry Point
var express = require ('express');

var app = express();

var jsonData = {count: 12, message: "Hey"}


 function onRequest(request, response) {
	app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html', function(err) {
		if(err) {
			res.status(500).send(err);
		}
	})
})
};

app.post('/data', function(req, res) {
	res.json(jsonData);
});

app.listen(3000);
console.log('Server is running..')

//npm i -g nodemon  <-- no need to stop and restart server.