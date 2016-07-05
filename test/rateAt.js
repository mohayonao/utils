"use strict";

const assert = require("power-assert");
const rateAt = require("../rateAt");

const array = [ 0, 1, 2, 3 ];

assert(rateAt(array, -0.5) === 0);
assert(rateAt(array, 0) === 0);
assert(rateAt(array, 0.2) === 0);
assert(rateAt(array, 0.4) === 1);
assert(rateAt(array, 0.6) === 2);
assert(rateAt(array, 0.8) === 3);
assert(rateAt(array, 1.5) === 3);
