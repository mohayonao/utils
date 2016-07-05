"use strict";

/**
 * convert to midi note number from cycles per seconds
 * @param  {number}  cps
 * @return {number}
 */
function cpsmidi(cps) {
  return Math.log(cps / 440) * Math.LOG2E * 12 + 69;
}

module.exports = cpsmidi;
