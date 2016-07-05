"use strict";

/**
 * @param  {number} value
 * @param  {number} inMin
 * @param  {number} inMax
 * @param  {number} outMin
 * @param  {number} outMax
 * @return {number}
 */
function linexp(value, inMin, inMax, outMin, outMax) {
  return Math.pow(outMax / outMin, (value - inMin) / (inMax - inMin)) * outMin;
}

module.exports = linexp;
