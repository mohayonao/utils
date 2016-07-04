"use strict";

const assert = require("power-assert");
const blendAt = require("../blendAt");
const wrapAt = require("../wrapAt");

const array = [ 0, 1, 2, 3 ];

assert(blendAt(array, -0.25) === 0);
assert(blendAt(array, 0.25) === 0.25);
assert(blendAt(array, 8.25) === 3);

assert(blendAt(array, -0.25, wrapAt) === 0.75);
assert(blendAt(array, 8.25, wrapAt) === 0.25);
