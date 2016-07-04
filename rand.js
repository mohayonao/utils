function rand(value, rand) {
  rand = rand || Math.random;

  return rand() * value;
}

module.exports = rand;
