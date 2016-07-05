"use strict";

/**
 * @param  {number}   value
 * @param  {function} [rand]
 * @return {number}
 */
function rand2(value, rand) {
  rand = rand || Math.random;

  return (rand() * 2 - 1) * value;
}

module.exports = rand2;
