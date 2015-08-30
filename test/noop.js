var assert = require("power-assert");
var noop = require("../noop");
var inIstanbul = Object.keys(global).some(function(x) { return /^\$\$cov_/.test(x); });

describe("noop(): void", function() {
  it("works", function() {
    var functionBody = noop.toString().replace(/\s/g, "");

    if (!inIstanbul) {
      assert(functionBody === "function(){}");
    }
    assert.doesNotThrow(noop);
  });
});
