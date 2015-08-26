module.exports = function(array, rand) {
  var result = array.slice();
  var i, imax, j, tmp;

  rand = rand || Math.random;

  for (i = 0, imax = array.length; i < imax; i++) {
    j = (rand() * imax)|0;

    tmp = result[j];
    result[j] = result[i];
    result[i] = tmp;
  }

  return result;
};
