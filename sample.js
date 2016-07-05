"use strict";

/**
 * @param  {any[]}    array
 * @param  {function} [rand]
 * @return {any}
 */
function sample(array, rand) {
  rand = rand || Math.random;

  return array[(rand() * array.length)|0];
}

module.exports = sample;
