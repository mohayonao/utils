"use strict";

const assert = require("power-assert");
const sinon = require("sinon");
const once = require("../once");

const func = sinon.spy(function(a, b, c) {
  return a + b + c;
});
const onceFunc = once(func);

assert(onceFunc(1, 20, 300) === 321);
assert(onceFunc(1, 20, 300) === 321);
assert(onceFunc(1, 20, 300) === 321);

assert(func.callCount === 1);
