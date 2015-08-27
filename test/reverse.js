var assert = require("power-assert");
var reverse = require("../reverse");

describe("reverse(array: any[]): any[]", function() {
  it("works", function() {
    var src = [ 1, 2, 3 ];
    var dst = reverse(src);

    assert.deepEqual(src, [ 1, 2, 3 ]);
    assert.deepEqual(dst, [ 3, 2, 1 ]);
  });
});
