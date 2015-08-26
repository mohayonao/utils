module.exports = function(array, index) {
  index = (index|0) % array.length;

  if (index < 0) {
    index += array.length;
  }

  return array[index];
};
