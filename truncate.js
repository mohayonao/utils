"use strict";

/**
 * @param  {number} x
 * @param  {number} y
 * @return {number}
 */
function truncate(x, y) {
  return Math.floor(x / y) * y;
}

module.exports = truncate;
