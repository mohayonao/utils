module.exports = function(value, defaultValue) {
  return typeof value !== "undefined" ? value : defaultValue;
};
