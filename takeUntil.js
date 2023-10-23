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

const takeUntil = function(array, callback) {
    const result = [];
    for (const item of array) {
      if (callback(item)) {
        return result;
      }
      result.push(item);
    }
    return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

console.log(assertArraysEqual(eqArrays((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2 ]), true));
