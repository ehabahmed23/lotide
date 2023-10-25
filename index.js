// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  takeUntil,
  without
};
