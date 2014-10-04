/*global describe,it*/
'use strict';
var mod = require('../lib/execute-user-content.js');

describe('execute-user-content node module.', function() {
  it('should wrap user content', function(done) {
    function asd() { return 1; }
    function wrapper(fn) { return fn(); }
    mod(asd.toString(), wrapper, function(result) {
      result.should.eql(1);
      done();
    });
  });
  it('should wrap user content', function(done) {
    var asd = function() { return 1; };
    var wrapper = function(fn) { return fn(); };
    mod(asd.toString(), wrapper, function(result) {
      result.should.eql(1);
      done();
    });
  });
});
