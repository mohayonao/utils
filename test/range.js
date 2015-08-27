var assert = require("power-assert");
var range = require("../range");

describe("range(start: number, stop: number, step: number): number[]", function() {
  it("works", function() {
    assert.deepEqual(range(10), [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
    assert.deepEqual(range(1, 11), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    assert.deepEqual(range(0, 30, 5), [ 0, 5, 10, 15, 20, 25 ]);
    assert.deepEqual(range(0, -10, -1), [ 0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]);
    assert.deepEqual(range(0), []);
  });
});
