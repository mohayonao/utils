function extend() {
  var result = {};
  var args = Array.prototype.slice.call(arguments, 0);
  var keys, i, imax, j, jmax;

  for (i = 0, imax = args.length; i < imax; i++) {
    keys = Object.keys(args[i]);

    for (j = 0, jmax = keys.length; j < jmax; j++) {
      result[keys[j]] = args[i][keys[j]];
    }
  }

  return result;
}

module.exports = extend;
