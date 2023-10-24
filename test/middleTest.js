const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true)  // => [2, 3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true) // => [3, 4]

