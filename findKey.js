const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:', actual, "===", expected, '✅✅✅',); 
  }
  console.assert(actual === expected,  actual, '!==', expected, '❌❌❌');
  };

  const findKey = (object, callback) => {
    for (const key in object) {
      if (callback(object[key])) {
        return key;
      }
    }
    return undefined; 
  };

  