"use strict";

/**
 * @param  {number} value
 * @param  {number} inMin
 * @param  {number} inMax
 * @param  {number} outMin
 * @param  {number} outMax
 * @return {number}
 */
function linlin(value, inMin, inMax, outMin, outMax) {
  return (value - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

module.exports = linlin;
