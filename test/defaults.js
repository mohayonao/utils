var assert = require("power-assert");
var defaults = require("../defaults");

describe("defaults(value: any, defaultValue: any): any", function() {
  it("works", function() {
    var UNDEFINED;

    assert(defaults(0, 1) === 0);
    assert(defaults(null, 1) === null);
    assert(defaults(false, 1) === false);
    assert(defaults(UNDEFINED, 1) === 1);
  });
});
