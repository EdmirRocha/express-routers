'use strict';

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
};

function list (req, res) {

	var users = [
		{name: 'Edmir'},
		{name: 'Mirtis'}
	];

	res.json(users);  //.statust default = 200
		
}


function create (req,res) {
	res
		.status(201)
		.json({message: 'created'});
}

function get (req, res) {

	// console.log(req.params)

	var user = [
		{name: 'Mirtis'}
	];

	res.json(user);
}

function update (req, res) {
	res
		.status(201)
		.json({message: 'updated'});
}

function del (req, res) {
	res
		.status(201)
		.json({message: 'deleted'});
}

