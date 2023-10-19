const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:', actual, "===", expected, '✅✅✅',); 
  }
  console.assert(actual === expected,  actual, '!==', expected, '❌❌❌');
  };

  function countLetters(sentence) {
    const letterCounts = {};
    const lowercasedSentence = sentence.toLowerCase();
  
    for (let char of lowercasedSentence) {
      if (/[a-z]/.test(char)) {
        if (!letterCounts[char]) {
          letterCounts[char] = 1;
        } else {
          letterCounts[char]++;
        }
      }
    }
    return letterCounts;
  }
  
  // Example usage:
  const sentence ="lighthouse in the house";
  const result = countLetters(sentence);
  console.log(result); // Output will be: { 'L': 2, 'H': 1 }
  
  //This JavaScript function counts the occurrences of each letter in the input sentence, 
  //ignoring non-alphabetical characters and treating uppercase and lowercase letters as the same.
  