"use strict";

const assert = require("power-assert");
const wrapAt = require("../wrapAt");

const array = [ 0, 1, 2, 3 ];

assert(wrapAt(array, -5) === 3);
assert(wrapAt(array, -4) === 0);
assert(wrapAt(array, -3) === 1);
assert(wrapAt(array, -2) === 2);
assert(wrapAt(array, -1) === 3);
assert(wrapAt(array, 0) === 0);
assert(wrapAt(array, 1) === 1);
assert(wrapAt(array, 2) === 2);
assert(wrapAt(array, 3) === 3);
assert(wrapAt(array, 4) === 0);
assert(wrapAt(array, 5) === 1);
assert(wrapAt(array, 6) === 2);
assert(wrapAt(array, 7) === 3);
assert(wrapAt(array, 8) === 0);
