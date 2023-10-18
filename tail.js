// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:',`${actual} === ${expected} ✅✅✅`); 
  }
  console.assert(actual === expected,`${actual} !== ${expected} ❌❌❌`);
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

  function tail(arr) {
    if (arr.length <= 1) {
      return [];
    } 
      return arr.slice(1);
  }

  // Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));