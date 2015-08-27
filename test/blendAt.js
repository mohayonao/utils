var assert = require("power-assert");
var blendAt = require("../blendAt");
var wrapAt = require("../wrapAt");

describe("blendAt(array: number[], index: number, method=clipAt): number", function() {
  it("works", function() {
    var array = [ 0, 1, 2, 3 ];

    assert(blendAt(array, -0.25) === 0);
    assert(blendAt(array, 0.25) === 0.25);
    assert(blendAt(array, 8.25) === 3);

    assert(blendAt(array, -0.25, wrapAt) === 0.75);
    assert(blendAt(array, 8.25, wrapAt) === 0.25);
  });
});
