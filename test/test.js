
var uniquid = require('..');
var should = require('should');

describe('uniquid', function() {

  it('should return string', function() {
    uniquid().should.be.a.String;
    uniquid('user_').should.be.a.String;
  });

  it('should start with `user_`', function() {
    (uniquid('user_').indexOf('user_') === 0).should.be.ok;
  });

});
