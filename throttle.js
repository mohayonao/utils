function throttle(func, wait) {
  var prevExecuteTime = 0;

  return function() {
    var currentTime = Date.now();

    if (wait <= (currentTime - prevExecuteTime)) {
      func.apply(this, arguments);
      prevExecuteTime = currentTime;
    }
  };
}

module.exports = throttle;
