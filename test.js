
'use strict';

var uniquid = require('./');
var assert = require('assert');

describe('uniquid', function() {
  it('should return string', function() {
    assert(typeof uniquid() === 'string');
    assert(typeof uniquid('user_') === 'string');
  });

  it('should start with `user_`', function() {
    assert(uniquid('user_').indexOf('user_') === 0);
  });
});
