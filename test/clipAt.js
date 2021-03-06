"use strict";

const assert = require("power-assert");
const clipAt = require("../clipAt");

const array = [ 0, 1, 2, 3 ];

assert(clipAt(array, -5) === 0);
assert(clipAt(array, -4) === 0);
assert(clipAt(array, -3) === 0);
assert(clipAt(array, -2) === 0);
assert(clipAt(array, -1) === 0);
assert(clipAt(array, 0) === 0);
assert(clipAt(array, 1) === 1);
assert(clipAt(array, 2) === 2);
assert(clipAt(array, 3) === 3);
assert(clipAt(array, 4) === 3);
assert(clipAt(array, 6) === 3);
assert(clipAt(array, 7) === 3);
assert(clipAt(array, 8) === 3);
