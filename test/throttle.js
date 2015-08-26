var assert = require("power-assert");
var sinon = require("sinon");
var throttle = require("../throttle");

describe("throttle(func: function, wait: number): function", function() {
  it("works", function(done) {
    var func = sinon.spy();
    var throttleFunc = throttle(func, 25);

    throttleFunc(1);
    throttleFunc(2);
    throttleFunc(3);

    setTimeout(function() {
      throttleFunc(4);
      throttleFunc(5);
      throttleFunc(6);
    }, 50);

    setTimeout(function() {
      throttleFunc(7);
      throttleFunc(8);
      throttleFunc(9);
    }, 100);

    setTimeout(function() {
      assert(func.callCount === 3);
      assert(func.args[0][0] === 1);
      assert(func.args[1][0] === 4);
      assert(func.args[2][0] === 7);
      done();
    }, 150);
  });
});
