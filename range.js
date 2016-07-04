function range(start, stop, step) {
  var length, result;
  var i;

  if (typeof stop === "undefined") {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;

  length = Math.max(Math.ceil((stop - start) / step), 0);
  result = Array(length);

  for (i = 0; i < length; i++) {
    result[i] = start;
    start += step;
  }

  return result;
}

module.exports = range;
