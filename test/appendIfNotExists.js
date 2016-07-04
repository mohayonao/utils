"use strict";

const assert = require("power-assert");
const appendIfNotExists = require("../appendIfNotExists");

const array = [ 1, 2, 3, 4, 5 ];

assert(appendIfNotExists(array, 6) === true);
assert.deepEqual(array, [ 1, 2, 3, 4, 5, 6 ]);

assert(appendIfNotExists(array, 3) === false);
assert.deepEqual(array, [ 1, 2, 3, 4, 5, 6 ]);
