'use strict';

let Schema = require('mongoose').Schema;
let mongoose = require('mongoose');

let schema = new Schema({
	firstname: {type: String, required: true},
	enail: {type: String, required: true, unique: true},
	createdAt: {type: Date, set: Date.now}
});


let model = mongoose.model('users', schema);

module.exports = model;