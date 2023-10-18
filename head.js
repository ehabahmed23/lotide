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
  
  function head(arr) {
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
    return arr[0];
  }
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
