"use strict";

const assert = require("power-assert");
const extend = require("../extend");

const obj1 = { foo: 100 };
const obj2 = { bar: 200, baz: 300 };
const obj3 = { qux: 400 };
const result = extend(obj1, obj2, obj3);

assert(result !== obj1);
assert.deepEqual(result, {
  foo: 100, bar: 200, baz: 300, qux: 400,
});
