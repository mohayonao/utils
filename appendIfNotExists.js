"use strict";

/**
 * append the item if it does not exist in the array
 * @param  {any[]} array
 * @param  {any}   item
 * @return {boolean}
 */
function appendIfNotExists(array, item) {
  var index = array.indexOf(item);

  if (index !== -1) {
    return false;
  }

  array.push(item);

  return true;
}

module.exports = appendIfNotExists;
