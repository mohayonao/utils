function sample(array, rand) {
  rand = rand || Math.random;

  return array[(rand() * array.length)|0];
}

module.exports = sample;
