"use strict";

const assert = require("power-assert");
const removeIfExists = require("../removeIfExists");

const array = [ 1, 2, 3, 4, 5 ];

assert(removeIfExists(array, 3) === true);
assert.deepEqual(array, [ 1, 2, 4, 5 ]);

assert(removeIfExists(array, 6) === false);
assert.deepEqual(array, [ 1, 2, 4, 5 ]);
