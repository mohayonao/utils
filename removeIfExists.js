"use strict";

/**
 * remove the item from if it exists in the array
 * @param  {any[]} array
 * @param  {any}   item
 * @return {boolean}
 */
function removeIfExists(array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    return false;
  }

  array.splice(index, 1);

  return true;
}

module.exports = removeIfExists;
