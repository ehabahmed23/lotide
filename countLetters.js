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
  module.exports = countLetters;
  