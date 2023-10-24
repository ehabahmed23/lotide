const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle Test", () => {
  it("returns true if [2, 3,] are the middle indexes of [1, 2, 3, 4] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns false if [2, 4] are not the middle indexes of [1, 2, 3, 4, 5, 6]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4, 5, 6]), [2, 4]); 
  });
});