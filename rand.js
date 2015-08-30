module.exports = function(value, rand) {
  rand = rand || Math.random;

  return rand() * value;
};
