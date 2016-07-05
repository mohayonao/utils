"use strict";

/**
 * convert to seconds from bpm and [length]
 * @param  {number}  bpm
 * @param  {number}  [len=4]
 * @return {number}
 */
function bpmsec(bpm, len) {
  len = len || 4;
  return (60 / bpm) * (4 / len);
}

module.exports = bpmsec;
