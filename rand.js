"use strict";

/**
 * @param  {number}   value
 * @param  {function} [rand]
 * @return {number}
 */
function rand(value, rand) {
  rand = rand || Math.random;

  return rand() * value;
}

module.exports = rand;
