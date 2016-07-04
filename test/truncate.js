"use strict";

const assert = require("power-assert");
const truncate = require("../truncate");

assert(truncate(10000000125, 25) === 10000000125);
assert(truncate(10000000120, 25) === 10000000100);
assert(truncate(-10000000125, 25) === -10000000125);
assert(truncate(-10000000120, 25) === -10000000125);
