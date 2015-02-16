
'use strict';

/**
 * Generate unique ID
 * @param  {String} prefix
 * @return {String}
 * @api public
 */

function uniqueID(prefix) {

  var uid = parseInt([
    (new Date()).valueOf(),
    (Math.random() * 1000000000).toFixed()
  ].join('')).toString(36);

  return [
    prefix || '',
    uid
  ].join('');

}

/**
 * Module exports
 */

module.exports = uniqueID;
