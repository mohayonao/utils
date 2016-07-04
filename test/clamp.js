"use strict";

const assert = require("power-assert");
const clamp = require("../clamp");

assert(clamp(5, 10, 20) === 10);
assert(clamp(15, 10, 20) === 15);
assert(clamp(25, 10, 20) === 20);
