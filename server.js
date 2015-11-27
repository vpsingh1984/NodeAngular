var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var path = require("path");
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
//var mongoose = require("mongoose");

var app = express();

//var db = mongoose.connect('mongodb://vpsingh404:userprofile@ds043324.mongolab.com:43324/userprofile');

app.use(express.static(__dirname + "/public"));
//var routes = require('./controller/appConfig.js');

//app.use(routes);

app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
	console.log(req);
	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});

});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

app.delete('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/contactlist/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set:{
			name: req.body.name,
			email: req.body.email,
			number: req.body.number
		}},
		new: true}, function(err, doc){
			res.json(doc);
		});
});


app.get('/cars', function(req, res){
	console.log(req);
	db.cars.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});

});



app.listen(4000);
console.log("server running on 4000");