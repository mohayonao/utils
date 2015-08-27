var assert = require("power-assert");
var constrain = require("../constrain");

describe("constrain(value: number, minValue: number, maxValue: number): number", function() {
  it("works", function() {
    assert(constrain(5, 10, 20) === 10);
    assert(constrain(15, 10, 20) === 15);
    assert(constrain(25, 10, 20) === 20);
  });
});
