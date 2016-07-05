"use strict";

/**
 * @param  {any[]}  array
 * @param  {number} index
 * @return {any}
 */
function foldAt(array, index) {
  var len1 = array.length;
  var len2 = len1 * 2 - 2;

  index |= 0;

  while (!(0 <= index && index < len1)) {
    if (index < 0) {
      index += len2;
    }
    if (len1 <= index) {
      index = len2 - index;
    }
  }

  return array[index];
}

module.exports = foldAt;
