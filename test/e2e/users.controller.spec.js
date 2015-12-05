'use strict';

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things')); //adiciona complemento things
var expect = chai.expect;

// var should = require('chai').should;


// console.log(app);

describe('Users Controller', function() {
	describe('.list GET /users', function() {
		it('should return a json array', function(done) {
			request(app)
				.get('/users')
				.end(function(err,res){
					// console.log(res.statusCode, res.body);
					expect(res.statusCode).to.be.equal(200);
					// expect(res.body).to.be.an('array');
					expect(res.body).all.have.property('name')
					expect(res.body).to.be.an('array');

					// expect(res.body[0].name).to.be.equal('Edmir');
					// expect(res.body).to.have.deep.equal({name: 'Edmir'});
					// expect(res.users.name).to.be.equal('Edmir');
					done();
				})
		});

		it('teste de comportamento 2', function() {
			
		});
	})
})