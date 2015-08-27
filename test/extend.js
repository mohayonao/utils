var assert = require("power-assert");
var extend = require("../extend");

describe("extend(...args: object): object", function() {
  it("works", function() {
    var obj1 = { foo: 100 };
    var obj2 = { bar: 200, baz: 300 };
    var obj3 = { qux: 400 };
    var result = extend(obj1, obj2, obj3);

    assert(result !== obj1);
    assert.deepEqual(result, {
      foo: 100, bar: 200, baz: 300, qux: 400,
    });
  });
});
