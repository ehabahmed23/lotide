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


const letterPositions = function(sentence) {
  const results = {}
   
    for (let i = 0; i < sentence.length; i++) {
      //console.log(results)

      if (results [sentence[i]]) {
        results [sentence[i]].push(i)
      }
      else {results [sentence[i]] = [i]
      }
    }
delete results[' '];
  // logic to update results here

  return results;
};

// assertArraysEqual(letterPositions("hello").e, [1]);
//console.log(letterPositions("lighthouse in the house"));