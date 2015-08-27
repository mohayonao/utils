var assert = require("power-assert");
var foldAt = require("../foldAt");

describe("foldAt(array: any[], index: number): any", function() {
  it("works", function() {
    var array = [ 0, 1, 2, 3 ];

    assert(foldAt(array, -5) === 1);
    assert(foldAt(array, -4) === 2);
    assert(foldAt(array, -3) === 3);
    assert(foldAt(array, -2) === 2);
    assert(foldAt(array, -1) === 1);
    assert(foldAt(array, 0) === 0);
    assert(foldAt(array, 1) === 1);
    assert(foldAt(array, 2) === 2);
    assert(foldAt(array, 3) === 3);
    assert(foldAt(array, 4) === 2);
    assert(foldAt(array, 5) === 1);
    assert(foldAt(array, 6) === 0);
    assert(foldAt(array, 7) === 1);
    assert(foldAt(array, 8) === 2);
  });
});
