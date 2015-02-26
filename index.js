
'use strict';

/**
 * Generate unique ID
 * @param  {String} prefix
 * @return {String}
 * @api public
 */

module.exports = function(prefix) {

  var uid = parseInt([
    (new Date()).valueOf(),
    (Math.random() * 1000000).toFixed()
  ].join('')).toString(36);

  return [
    prefix || '',
    uid
  ].join('');

};
