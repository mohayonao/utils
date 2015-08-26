module.exports = function(func) {
  var done = false;
  var result;

  return function() {
    if (!done) {
      result = func.apply(this, arguments);
      done = true;
    }
    return result;
  };
};
