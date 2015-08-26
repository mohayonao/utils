module.exports = function(array, rand) {
  rand = rand || Math.random;

  return array[(rand() * array.length)|0];
};
