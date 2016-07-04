"use strict";

const assert = require("power-assert");
const scramble = require("../scramble");

function randgen() {
  const SEED = [
    0.21565761626698077,
    0.2639421643689275,
    0.7402096134610474,
    0.9481527176685631,
    0.3595836004242301,
    0.3686106097884476,
    0.07533752964809537,
    0.34895188082009554,
    0.3726505911909044,
    0.978148631984368,
  ];
  let i = 0;

  return function() {
    return SEED[i++ % SEED.length];
  };
}

const array = [ 1, 2, 3, 4, 5 ];
const rand = randgen();

assert(scramble(array) !== scramble(array));
assert.deepEqual(scramble(array, rand), [ 2, 3, 4, 5, 1 ]);
assert.deepEqual(scramble(array, rand), [ 1, 4, 2, 3, 5 ]);
assert.deepEqual(array, [ 1, 2, 3, 4, 5 ]);
