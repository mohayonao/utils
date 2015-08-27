var assert = require("power-assert");
var noop = require("../noop");

describe("noop(): void", function() {
  it("works", function() {
    var functionBody = noop.toString().replace(/\s/g, "");

    assert(functionBody === "function(){}");
  });
});
