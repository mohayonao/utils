"use strict";

const assert = require("power-assert");
const memo = require("../memo");

memo.set("foo", 100);

assert(memo.has("foo") === true);
assert(memo.has("bar") === false);

assert(memo.get("foo") === 100);
assert(typeof memo.get("bar") === "undefined");

memo.set("bar", 200);

assert(memo.has("bar") === true);
assert(memo.get("bar") === 200);
