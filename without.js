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

const assertArraysEqual = function(arry1, arry2) {
  let result = eqArrays(arry1, arry2)
    if(result){
      console.log("✅✅✅ The 2 arrays are equal:", result)
    } else{
      console.log("❌❌❌ The 2 arrays are equal", result)
    }
}
// implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source that are not present in the itemsToRemove array.
// Here are a couple examples, but please don't limit your testing to just these scenarios:

function without(source, itemsToRemove) {
  const result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
console.log(without([1, 2, "apple",  3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2