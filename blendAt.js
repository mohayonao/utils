var clipAt = require("./clipAt");

function blendAt(array, index, method) {
  var x0, x1;

  method = method || clipAt;
  x0 = method(array, index);
  x1 = method(array, index + (index < 0 ? -1 : 1));

  return x0 + Math.abs(index - (index|0)) * (x1 - x0);
}

module.exports = blendAt;
