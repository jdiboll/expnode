

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var _ = require('lodash');


// //app.use(express.static('src'));
// 	app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/index.html', function(err) {
// 		if(err) {
// 			res.status(500).send(err);
// 		}
// 	})
// });


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


// var lions = [];
// var id = 0;

// app.get('/lions', function(req, res) {
// 	res.json(lions);
// });

// app.get('/lions:id', function(req, res) {
// 	var lion = _.find(lions, {id: req.params.id});
// 	res.json(lion || {});
// });

// app.post('/lions', function (req, res) {
// 	var lion = req.body;
// 	id++;
// 	lion.id = id + '';
// 	lions.push(lion);
// 	res.json(lion);
// });

// app.put('lions:id', function(req, res) {
// 	var update = req.body;
// 	if(update.id) {
// 		delete update.id;
// 	}
// 	var lion = _.findIndex(lions, {id: req.params.id});
// 	if(!lions[lion]) {
// 		res.send;
// 	} else {
// 		var updateLion = _.update(lions[lion], update)
// 			res.json(updateLion);
		
// 	}
// });

// app.delete('/lions:id', function(req, res) {
// 	var lion = _.findIndex(lions, {id: req.params.id});
// 	if(!lions[lion]) {
// 		res.send;
// } else {
// 	var deletedLion = (lions[lion]);
// 	lions.splice(lion, 1);
// 	res.json(deletedLion);
// }
// });


// app.listen(3000);
// console.log('on port 3000');











// // var express = require ('express');

// // var app = express();

// // var jsonData = {count: 12, message: "Hey"}

// // 	app.get('/', function (req, res) {
// // 	res.sendFile(__dirname + '/index.html', function(err) {
// // 		if(err) {
// // 			res.status(500).send(err);
// // 		}
// // 	})
// // });
// // app.post('/data', function(req, res) {
// // 	res.json(jsonData);
// // });

// // app.listen(3000);
// // console.log('Server is running..')

// //npm i -g nodemon  <-- no need to stop and restart server.