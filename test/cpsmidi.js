"use strict";

const assert = require("power-assert");
const cpsmidi = require("../cpsmidi");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

assert(closeTo(cpsmidi(261.625565300), 60, 1e-6));
assert(closeTo(cpsmidi(293.664767917), 62, 1e-6));
assert(closeTo(cpsmidi(329.627556912), 64, 1e-6));
assert(closeTo(cpsmidi(349.228231433), 65, 1e-6));
assert(closeTo(cpsmidi(391.995435981), 67, 1e-6));
assert(closeTo(cpsmidi(440.000000000), 69, 1e-6));
assert(closeTo(cpsmidi(493.883301256), 71, 1e-6));
