function wrapAt(array, index) {
  index = (index|0) % array.length;

  if (index < 0) {
    index += array.length;
  }

  return array[index];
}

module.exports = wrapAt;
