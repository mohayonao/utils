"use strict";

/**
 * @param  {any[]}  array
 * @param  {number} index
 * @return {any}
 */
function clipAt(array, index) {
  index |= 0;
  index = Math.max(0, Math.min(index, array.length - 1));

  return array[index];
}

module.exports = clipAt;
