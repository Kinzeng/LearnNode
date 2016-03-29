var boot = require('../app').boot,
	shutdown = require('../app').shutdown,
	port = require('../app').port,
	request = require('request');
	expect = require('expect.js');

describe('server', function () {
	before(function () {
		boot();
	});

	describe('homepage', function(){
		it('should respond to GET', function(done) {
			request.del({
				
			});
		});
		
		after(function () {
			shutdown();
		});
	});
});