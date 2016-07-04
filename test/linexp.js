"use strict";

const assert = require("power-assert");
const linexp = require("../linexp");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

assert(closeTo(linexp(0.1, 0.01, 1, 100, 8000), 148.93891324884, 1e-6));
assert(closeTo(linexp(0.3, 0.01, 1, 100, 8000), 360.96974634425, 1e-6));
assert(closeTo(linexp(0.5, 0.01, 1, 100, 8000), 874.84966106965, 1e-6));
assert(closeTo(linexp(0.7, 0.01, 1, 100, 8000), 2120.2938396499, 1e-6));
assert(closeTo(linexp(0.9, 0.01, 1, 100, 8000), 5138.7640259933, 1e-6));
