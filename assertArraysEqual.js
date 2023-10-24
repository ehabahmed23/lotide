const eqArrays = require('../eqArrays');

const assertArraysEqual = function(arry1, arry2) {
  let result = eqArrays(arry1, arry2)
    if(result){
      console.log("✅✅✅ The 2 arrays are equal:", result)
    } else{
      console.log("❌❌❌ The 2 arrays are equal", result)
    }
}

module.exports = assertArraysEqual;