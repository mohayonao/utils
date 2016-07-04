"use strict";

const assert = require("power-assert");
const dbamp = require("../dbamp");

function closeTo(expected, actual, delta) {
  return Math.abs(expected - actual) <= delta;
}

assert(dbamp(0) === 1);
assert(closeTo(dbamp(-1), 0.89125093813375, 1e-6));
assert(closeTo(dbamp(-2), 0.79432823472428, 1e-6));
assert(closeTo(dbamp(-3), 0.70794578438414, 1e-6));
