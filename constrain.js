module.exports = function(value, minValue, maxValue) {
  return Math.max(minValue, Math.min(value, maxValue));
};
