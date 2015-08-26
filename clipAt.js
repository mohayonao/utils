module.exports = function(array, index) {
  index |= 0;

  return array[Math.max(0, Math.min(index, array.length - 1))];
};
