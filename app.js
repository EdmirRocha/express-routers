'use strict';

var express = require('express');
var app = express();
var routers = require('./routers/index.js');


app.use('/api', routers.api);

// vat api = require('../api.js');
// vat pages = require('../pages.js');
// vat admin = require('../admin.js');

// // console.log(controllers);

// app.use('/', api)
// app.use('/api', api);
// app.use('/admin', pages);
// app.use('/', pages);


app.listen(3000, serverLogInit);

function serverLogInit() { 

	console.log(process.env.NODE_ENV);

	if (process.env.NODE_ENV == 'producao'){
		console.log('sim');
	}
	
	console.log('> localhost:3000');
}


module.exports = app;

