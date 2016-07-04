"use strict";

const assert = require("power-assert");
const constrain = require("../constrain");

assert(constrain(5, 10, 20) === 10);
assert(constrain(15, 10, 20) === 15);
assert(constrain(25, 10, 20) === 20);
