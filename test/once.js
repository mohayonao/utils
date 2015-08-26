var assert = require("power-assert");
var sinon = require("sinon");
var once = require("../once");

describe("once(func: function): any", function() {
  it("works", function() {
    var func = sinon.spy(function(a, b, c) {
      return a + b + c;
    });
    var onceFunc = once(func);

    assert(onceFunc(1, 20, 300) === 321);
    assert(onceFunc(1, 20, 300) === 321);
    assert(onceFunc(1, 20, 300) === 321);

    assert(func.callCount === 1);
  });
});
