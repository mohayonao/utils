"use strict";

/**
 * convert to bpm from seconds and [length]
 * @param  {number}  sec
 * @param  {number}  [len=4]
 * @return {number}
 */
function secbpm(sec, len) {
  len = len || 4;
  return 60 / sec * (4 / len);
}

module.exports = secbpm;
