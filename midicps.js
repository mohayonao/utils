module.exports = function(midi) {
  return 440 * Math.pow(2, (midi - 69) * 1 / 12);
};
