var expect = require('chai').expect;
var request = require('request');

describe('Root and content', function () {
    describe('Main page', function () {
        it('random url', function (done) {
            request('http://localhost:3000/about', function (error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

        it('history', function (done) {
            request('http://localhost:3000/tshirt/1023/history', function (error, response, body) {
                expect(body).to.equal('[]');
                done();
            });
        });
    });

});