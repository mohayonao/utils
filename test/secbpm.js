"use strict";

const assert = require("power-assert");
const secbpm = require("../secbpm");

assert(secbpm(0.75) === 80);
assert(secbpm(0.6) === 100);
assert(secbpm(0.5) === 120);
assert(secbpm(0.375) === 160);
assert(secbpm(0.75 * 4,  1) === 80);
assert(secbpm(0.75 * 2,  2) === 80);
assert(secbpm(0.75 / 1,  4) === 80);
assert(secbpm(0.75 / 2,  8) === 80);
assert(secbpm(0.75 / 4, 16) === 80);
assert(secbpm(0.75 / 8, 32) === 80);
