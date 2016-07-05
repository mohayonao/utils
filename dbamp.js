"use strict";

/**
 * convert to amplitude from decibels
 * @param  {number}  db
 * @return {number}
 */
function dbamp(db) {
  return Math.pow(10, db * 0.05);
}

module.exports = dbamp;
