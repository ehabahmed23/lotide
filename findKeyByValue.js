const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:', actual, "===", expected, '✅✅✅',); 
  }
  console.assert(actual === expected,  actual, '!==', expected, '❌❌❌');
  };

  function findKeyByValue(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
    return undefined;
  }
