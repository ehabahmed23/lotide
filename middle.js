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

function middle(array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 1) { // Odd number of elements
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else { // Even number of elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
}