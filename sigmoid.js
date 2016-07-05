"use strict";

/**
 * sigmoid curve
 * @param  {number} x
 * @param  {number} [k]
 * @return {number}
 */
function sigmoid(x, k) {
  k = k || 1;
  return 1 / (1 + Math.pow(Math.E, -x * k));
}

module.exports = sigmoid;
