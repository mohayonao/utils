var assert = require("power-assert");
var truncate = require("../truncate");

describe("truncate(x: number, y: number): number", function() {
  it("works", function() {
    assert(truncate(10000000125, 25) === 10000000125);
    assert(truncate(10000000120, 25) === 10000000100);
    assert(truncate(-10000000125, 25) === -10000000125);
    assert(truncate(-10000000120, 25) === -10000000125);
  });
});
