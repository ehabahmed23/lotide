const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail Test", () => {
  it('returns true if the tail of this ["Yo Yo", "Lighthouse", "Labs"] === ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"],);
  });
  it('returns true if the tail of this [8, 9, 10, 11] === [9, 10, 11]', () => {
    assert.deepEqual(tail([8, 9, 10, 11]), [9, 10, 11]);
  });
});