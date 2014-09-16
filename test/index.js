
var one = require('../index')
  , assert = require("assert")
  , tests;

tests = {
  'test that one returns the Number value `1`': function () {
    assert.strictEqual(1, one());
  }
};

module.exports = tests;
