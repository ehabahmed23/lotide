const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:', actual, "===", expected, '✅✅✅',);
  }
  console.assert(actual === expected,  actual, '!==', expected, '❌❌❌');
    };
  

  const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (eqArrays(value1, value2) === false) {
        return false;
        }
      }else {
        if (value1 !== value2) {
          return false;
        }
      }
    }
  
    return true;
  };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ The 2 Objects are equal: ${inspect(actual)} = ${inspect(expected)}`);
  }else {
    console.log(`❌❌❌ The 2 Objects not equal: ${inspect(actual)} != ${inspect(expected)}`);
  }
};
let a = {a: 1, b: 2, c: 4,};
let b = {a: 1, b: 2, c: 3,};
assertObjectsEqual(a, b);