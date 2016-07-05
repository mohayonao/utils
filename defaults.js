"use strict";

/**
 * @param  {any}  value
 * @param  {any}  defaultValue
 * @return {any}
 */
function defaults(value, defaultValue) {
  return typeof value !== "undefined" ? value : defaultValue;
}

module.exports = defaults;
