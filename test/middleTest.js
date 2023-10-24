const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle Test", () => {
  it("returns true if [2, 3,] are the middle indexes of [1, 2, 3, 4] ", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
  });
  it("returns false if [2, 4] are not the middle indexes of [1, 2, 3, 4, 5, 6]", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [2, 4]), false); 
  });
});