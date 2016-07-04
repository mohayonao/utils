function removeIfExists(array, target) {
  var index = array.indexOf(target);

  if (index === -1) {
    return false;
  }

  array.splice(index, 1);

  return true;
}

module.exports = removeIfExists;
