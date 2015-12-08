'use strict';

var express = require('express');
var app = express();
var routers = require('./routers/index.js');
let config = require('./config.js');
let mongoose = require('mongoose');


app.use('/api', routers.api);

let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;


mongoose.connect(urlDatabase);

mongoose.connection.on('error', function() {
	console.log('database connection error');
});

mongoose.connection.once('open', function() {
	app.listen(3000, serverLogInit);
});



function serverLogInit() { 

	// console.log(process.env.NODE_ENV);

	if (process.env.NODE_ENV == 'producao'){
		console.log('sim');
	}
	
	console.log('> localhost:3000');
}


module.exports = app;

