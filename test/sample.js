var assert = require("power-assert");
var sample = require("../sample");

function randgen() {
  var SEED = [
    0.21565761626698077,
    0.2639421643689275,
    0.7402096134610474,
    0.9481527176685631,
    0.3595836004242301,
    0.3686106097884476,
    0.07533752964809537,
    0.34895188082009554,
    0.3726505911909044,
    0.978148631984368,
  ];
  var i = 0;

  return function() {
    return SEED[i++ % SEED.length];
  };
}

describe("sample(array: any[], rand = Math.random): any", function() {
  it("works", function() {
    var array = [ 1, 2, 3, 4, 5 ];
    var rand = randgen();

    assert(array.indexOf(sample(array)) !== -1);
    assert(sample(array, rand) === 2, "1");
    assert(sample(array, rand) === 2, "2");
    assert(sample(array, rand) === 4, "3");
    assert(sample(array, rand) === 5, "4");
  });
});
