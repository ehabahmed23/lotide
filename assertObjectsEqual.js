const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ The 2 Objects are equal: ${inspect(actual)} = ${inspect(expected)}`);
  }else {
    console.log(`❌❌❌ The 2 Objects not equal: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
