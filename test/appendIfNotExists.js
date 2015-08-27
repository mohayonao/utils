var assert = require("power-assert");
var appendIfNotExists = require("../appendIfNotExists");

describe("appendIfNotExists(array: any[], target: any): boolean", function() {
  it("works", function() {
    var array = [ 1, 2, 3, 4, 5 ];

    assert(appendIfNotExists(array, 6) === true);
    assert.deepEqual(array, [ 1, 2, 3, 4, 5, 6 ]);

    assert(appendIfNotExists(array, 3) === false);
    assert.deepEqual(array, [ 1, 2, 3, 4, 5, 6 ]);
  });
});
