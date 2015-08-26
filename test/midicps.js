var assert = require("power-assert");
var midicps = require("../midicps");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

describe("midicps(midi: number): number", function() {
  it("works", function() {
    assert(closeTo(midicps(60), 261.625565300, 1e-6));
    assert(closeTo(midicps(62), 293.664767917, 1e-6));
    assert(closeTo(midicps(64), 329.627556912, 1e-6));
    assert(closeTo(midicps(65), 349.228231433, 1e-6));
    assert(closeTo(midicps(67), 391.995435981, 1e-6));
    assert(closeTo(midicps(69), 440.000000000, 1e-6));
    assert(closeTo(midicps(71), 493.883301256, 1e-6));
  });
});
