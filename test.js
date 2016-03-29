var request = require('request');
request('http://localhost:3000', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    expect(res.statusCode).to.equal(200);
	done();
  }
});