"use strict";

/**
 * @param  {any[]}  array
 * @param  {number} index
 * @return {any}
 */
function rateAt(array, index) {
  index = array.length * index;
  index = Math.max(0, Math.min(index|0, array.length - 1));

  return array[index];
}

module.exports = rateAt;
