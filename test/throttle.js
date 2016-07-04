"use strict";

const assert = require("power-assert");
const sinon = require("sinon");
const throttle = require("../throttle");

const func = sinon.spy();
const throttleFunc = throttle(func, 25);

throttleFunc(1);
throttleFunc(2);
throttleFunc(3);

setTimeout(function() {
  throttleFunc(4);
  throttleFunc(5);
  throttleFunc(6);
}, 50);

setTimeout(function() {
  throttleFunc(7);
  throttleFunc(8);
  throttleFunc(9);
}, 100);

setTimeout(function() {
  assert(func.callCount === 3);
  assert(func.args[0][0] === 1);
  assert(func.args[1][0] === 4);
  assert(func.args[2][0] === 7);
}, 150);
