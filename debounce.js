module.exports = function(func, wait) {
  var timerId = 0;

  return function() {
    var _this = this;
    var args = arguments;

    if (timerId !== 0) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function() {
      func.apply(_this, args);
      timerId = 0;
    }, wait);
  };
};
