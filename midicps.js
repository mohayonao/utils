"use strict";

/**
 * convert to cycles per seconds from midi note number
 * @param  {number}  midi
 * @return {number}
 */
function midicps(midi) {
  return 440 * Math.pow(2, (midi - 69) * 1 / 12);
}

module.exports = midicps;
