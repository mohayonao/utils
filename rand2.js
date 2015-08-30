module.exports = function(value, rand) {
  rand = rand || Math.random;

  return (rand() * 2 - 1) * value;
};
