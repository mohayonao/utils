"use strict";

const assert = require("power-assert");
const dot = require("../dot");

assert(dot(0) === 1);
assert(dot(1) === 1 + 0.5);
assert(dot(2) === 1 + 0.5 + 0.25);
assert(dot(3) === 1 + 0.5 + 0.25 + 0.125);
assert(dot(4) === 1 + 0.5 + 0.25 + 0.125 + 0.0625);
