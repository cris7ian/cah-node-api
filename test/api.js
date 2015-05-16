var should = require('should');
var request = require('request');

var url = 'http://localhost:' + (process.env.PORT || 3000);

describe('API', () => {

  describe('Get cards', () => {
    it('should return code 200', (done) => {
      request(url + '/api/questions', (error, response, body) => {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        JSON.parse(body).should.be.an.Array;
        done(error);
      });
    });
  });

  describe('Get answers', () => {
    it('should return code 200', (done) => {
      request(url + '/api/answers', (error, response, body) => {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        JSON.parse(body).should.be.an.Array;
        done();
      });
    });
  });

  describe('Get answer', () => {
    it('should return code 200', (done) => {
      request(url + '/api/answer', (error, response, body) => {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        body.should.be.type('string');
        done();
      });
    });
  });

  describe('Get question', () => {
    it('should return code 200', (done) => {
      request(url + '/api/question', (error, response, body) => {
        if (error) return done(error);
        response.statusCode.should.equal(200);
        body.should.be.type('string');
        done();
      });
    });
  });

});
