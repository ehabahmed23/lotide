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

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
//console.log(letterPositions("lighthouse in the house"));