// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:',`${actual} === ${expected} ✅✅✅`); 
  }
  console.assert(actual === expected,`${actual} !== ${expected} ❌❌❌`);
  };
  
//  Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. 

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3, 4])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false