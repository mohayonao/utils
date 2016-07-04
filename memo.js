var repository = {};

module.exports = {
  has: function(key) {
    return repository.hasOwnProperty(key);
  },
  set: function(key, value) {
    repository[key] = value;
  },
  get: function(key) {
    return repository[key];
  }
};
