function cpsmidi(cps) {
  return Math.log(cps / 440) * Math.LOG2E * 12 + 69;
}

module.exports = cpsmidi;
