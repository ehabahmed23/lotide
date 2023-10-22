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
      console.log("❌❌❌ The 2 arrays are not equal", result)
    }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const words1 = ["ground", "control", "to", "major", "tom"];
// const words2 = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
