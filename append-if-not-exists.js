module.exports = function(array, target) {
  var index = array.indexOf(target);

  if (index !== -1) {
    return false;
  }

  array.push(target);

  return true;
};
