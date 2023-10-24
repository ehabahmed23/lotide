const eqArrays = require('../eqArrays');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail Test", () => {
  it('returns true if the tail of this ["Yo Yo", "Lighthouse", "Labs"] === ["Lighthouse", "Labs"]', () => {
    assert.strictEqual(eqArrays(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]), true);
  });
  it('returns true if the tail of this [8, 9, 10, 11] === [9, 10, 11]', () => {
    assert.strictEqual(eqArrays(tail([8, 9, 10, 11]), [9, 10, 11]), true);
  });
});