var assert = require("power-assert");
var linlin = require("../linlin");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

describe("linlin(value: number, inMin, inMax, outMin, outMax): number", function() {
  it("works", function() {
    assert(closeTo(linlin(0.1, 0.01, 1, 100, 8000), 818.1818181818, 1e-6));
    assert(closeTo(linlin(0.3, 0.01, 1, 100, 8000), 2414.141414141, 1e-6));
    assert(closeTo(linlin(0.5, 0.01, 1, 100, 8000), 4010.101010101, 1e-6));
    assert(closeTo(linlin(0.7, 0.01, 1, 100, 8000), 5606.060606060, 1e-6));
    assert(closeTo(linlin(0.9, 0.01, 1, 100, 8000), 7202.020202020, 1e-6));
  });
});
