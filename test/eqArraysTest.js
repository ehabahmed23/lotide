const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("#eqArrays Test", () => {
  it("returns true if [1, 2, 3, 4] === [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });
  it("returns false if [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
});