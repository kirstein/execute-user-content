/*
 *
 * https://github.com/kirstein/execute-user-content
 *
 * Copyright (c) 2014 kirstein
 * Licensed under the MIT license.
 */

'use strict';

var Sandbox = require('sandbox');

function wrap(inputFn, targetFn) {
  return '(' + targetFn + ')('+ inputFn + ')';
}

module.exports = function(inputFn, targetFn, callback) {
  var wrapped = wrap(inputFn, targetFn);
  new Sandbox().run(wrapped, function(output) {
    callback(output.result);
  });
};
