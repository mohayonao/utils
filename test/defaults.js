"use strict";

const assert = require("power-assert");
const defaults = require("../defaults");

assert(defaults(0, 1) === 0);
assert(defaults(null, 1) === null);
assert(defaults(false, 1) === false);
assert(defaults(undefined, 1) === 1);
