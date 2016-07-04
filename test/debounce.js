"use strict";

const assert = require("power-assert");
const sinon = require("sinon");
const debounce = require("../debounce");

const func = sinon.spy();
const debounceFunc = debounce(func, 25);

debounceFunc(1);
debounceFunc(2);
debounceFunc(3);

setTimeout(function() {
  debounceFunc(4);
  debounceFunc(5);
  debounceFunc(6);
}, 50);

setTimeout(function() {
  debounceFunc(7);
  debounceFunc(8);
  debounceFunc(9);
}, 100);

setTimeout(function() {
  assert(func.callCount === 3);
  assert(func.args[0][0] === 3);
  assert(func.args[1][0] === 6);
  assert(func.args[2][0] === 9);
}, 150);
