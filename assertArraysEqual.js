const eqArrays = function(arr1, arr2) {
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
