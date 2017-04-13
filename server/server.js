
// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('src'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

app.listen(3000);
console.log('on port 3000');











// var express = require ('express');

// var app = express();

// var jsonData = {count: 12, message: "Hey"}

// 	app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/index.html', function(err) {
// 		if(err) {
// 			res.status(500).send(err);
// 		}
// 	})
// });
// app.post('/data', function(req, res) {
// 	res.json(jsonData);
// });

// app.listen(3000);
// console.log('Server is running..')

//npm i -g nodemon  <-- no need to stop and restart server.