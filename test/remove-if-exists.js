var assert = require("power-assert");
var removeIfExists = require("../remove-if-exists");

describe("removeIfExists(array: any[], target: any): boolean", function() {
  it("works", function() {
    var array = [ 1, 2, 3, 4, 5 ];

    assert(removeIfExists(array, 3) === true);
    assert.deepEqual(array, [ 1, 2, 4, 5 ]);

    assert(removeIfExists(array, 6) === false);
    assert.deepEqual(array, [ 1, 2, 4, 5 ]);
  });
});
