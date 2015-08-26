var assert = require("power-assert");
var wrapAt = require("../wrapAt");

describe("wrapAt(array: any[], index: number): any", function() {
  it("works", function() {
    var array = [ 0, 1, 2, 3 ];

    assert(wrapAt(array, -5) === 3);
    assert(wrapAt(array, -4) === 0);
    assert(wrapAt(array, -3) === 1);
    assert(wrapAt(array, -2) === 2);
    assert(wrapAt(array, -1) === 3);
    assert(wrapAt(array, 0) === 0);
    assert(wrapAt(array, 1) === 1);
    assert(wrapAt(array, 2) === 2);
    assert(wrapAt(array, 3) === 3);
    assert(wrapAt(array, 4) === 0);
    assert(wrapAt(array, 5) === 1);
    assert(wrapAt(array, 6) === 2);
    assert(wrapAt(array, 7) === 3);
    assert(wrapAt(array, 8) === 0);
  });
});
