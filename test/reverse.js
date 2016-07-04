"use strict";

const assert = require("power-assert");
const reverse = require("../reverse");

const src = [ 1, 2, 3 ];
const dst = reverse(src);

assert.deepEqual(src, [ 1, 2, 3 ]);
assert.deepEqual(dst, [ 3, 2, 1 ]);
