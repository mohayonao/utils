module.exports = function(cps) {
  return Math.log(cps / 440) * Math.LOG2E * 12 + 69;
};
