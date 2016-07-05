"use strict";

const assert = require("power-assert");
const bpmsec = require("../bpmsec");

assert(bpmsec(80) === 0.75);
assert(bpmsec(100) === 0.6);
assert(bpmsec(120) === 0.5);
assert(bpmsec(160) === 0.375);
assert(bpmsec(80,  1) === 0.75 * 4);
assert(bpmsec(80,  2) === 0.75 * 2);
assert(bpmsec(80,  4) === 0.75 / 1);
assert(bpmsec(80,  8) === 0.75 / 2);
assert(bpmsec(80, 16) === 0.75 / 4);
assert(bpmsec(80, 32) === 0.75 / 8);
