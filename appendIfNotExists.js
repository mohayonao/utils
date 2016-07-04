function appendIfNotExists(array, target) {
  var index = array.indexOf(target);

  if (index !== -1) {
    return false;
  }

  array.push(target);

  return true;
}

module.exports = appendIfNotExists;
